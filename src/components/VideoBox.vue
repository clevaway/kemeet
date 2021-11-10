<template>
  <div>
    <div class="rounded-md bg-gray-600 __bgImg">
      <vue-webrtc
        id="call-canvas"
        width="100%"
        :roomId="roomIdForVideoBox"
        ref="webrtc"
        @share-started="shareStarted"
        @share-stopped="leftRoom"
        @left-room="leftRoom"
        @joined-room="joinedRoom"
      />
    </div>
    <!-- controls -->
    <div class="mt-5">
      <div class="flex justify-between">
        <div class="flex space-x-2">
          <div class="hidden md:block">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> settings </span>
            </button>
          </div>
          <div class="hidden md:block">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> volume_up </span>
            </button>
          </div>
        </div>
        <div class="flex space-x-2">
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> mic </span>
            </button>
          </div>
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> videocam </span>
            </button>
          </div>
          <div class="hidden md:block">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> camera_alt </span>
            </button>
          </div>
          <div class="">
            <button
              @click="leaveMeeting"
              class="px-3 pt-2 bg-red-400 rounded-full"
            >
              <span class="material-icons my-auto text-white"> call_end </span>
            </button>
          </div>
          <div class="">
            <button
              @click="screenShare"
              class="px-1.5 pt-1.5 bg-gray-200 rounded-full"
            >
              <span class="material-icons my-auto"> screen_share </span>
            </button>
          </div>
          <div class="">
            <button
              @click="copyClipboard"
              class="px-1.5 pt-1.5 bg-gray-200 rounded-full"
            >
              <span class="material-icons my-auto"> person_add </span>
            </button>
          </div>
          <div class="hidden md:block">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> fullscreen </span>
            </button>
          </div>
        </div>
        <div class="flex space-x-2">
          <div class="hidden md:block">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> splitscreen </span>
            </button>
          </div>
          <div class="hidden md:block">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> textsms </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- / controls -->
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    roomIdForVideoBox: {
      type: String,
      default: "roomId",
    },
  },
  data() {
    return {
      roomId: this.roomIdForVideoBox,
      mediaRecorder: null,
      chunks: [],
      userStream: null,
      currentUrl: "",
    };
  },
  created() {
    this.currentUrl = window.location.href;
  },
  mounted() {
    this.joinMeeting();

    console.log("Meeting id: ", this.roomId);
  },
  methods: {
    onStop() {
      var blob = new Blob(this.chunks, { type: "video/webm" }); // other types are available such as 'video/webm' for instance, see the doc for more info
      this.chunks = [];
      const file = new File([blob], "meeting.webm", { type: "video/webm" });
      console.log(file);
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = "meeting.webm";
      document.body.appendChild(a);
      a.click();
    },
    pushData(e) {
      this.chunks.push(e.data);
      console.log(e.data);
    },
    record() {
      this.mediaRecorder.start();
    },
    leaveMeeting() {
      this.$refs.webrtc.leave();
      this.$router.push("/"); // redirecting back to main page
    },
    async joinMeeting() {
      console.log("toggling room");
      try {
        await this.$refs.webrtc.join();
        this.userStream = this.$refs.webrtc.videoList[0].stream;
        this.mediaRecorder = new MediaRecorder(this.userStream);
        this.mediaRecorder.ondataavailable = (e) => this.pushData(e);
        this.mediaRecorder.onstop = () => this.onStop();
      } catch (e) {
        console.log(e);
      }
    },
    screenShare() {
      this.$refs.webrtc.shareScreen();
    },
    async addTrack(streamId) {
      try {
        console.log(streamId);
        const streams = this.$refs.webrtc.videoList;
        console.log(streams);
        streams.forEach((stream) => {
          console.log(stream.getTracks());
          this.userStream.addTrack(stream);
        });
      } catch (e) {
        console.log(e);
      }
    },
    joinedRoom(streamId) {
      // this.addTrack(streamId)
      console.log(streamId);
    },
    shareStarted(streamId) {
      console.log(streamId);
      // this.addTrack(streamId)
    },
    leftRoom(streamId) {
      // this.mediaRecorder.removeTrack(streamId)
      console.log(streamId);
    },
    async copyClipboard() {
      await navigator.clipboard.writeText(this.currentUrl);
      alert("Link copied to clipboard!");
      console.log("You copied => ", this.currentUrl);
    },
  },
};
</script>

<style>
/* .__bgImg {
  background-image: url("https://ak.picdn.net/shutterstock/videos/1029713963/thumb/1.jpg");
  background-size: cover;
  height: 520px;
} */
#call-canvas {
  background-color: transparent;
  height: 520px;
}
.video-list {
  height: unset !important;
  flex-direction: unset !important;
  justify-content: unset !important;
  flex-wrap: unset !important;
}
</style>
