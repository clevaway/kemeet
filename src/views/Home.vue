<template>
  <div>
    <Appbar />
    <div class="mt-12">
      <div class="w-7/12 mx-auto">
        {{ $t("introText") }}
      </div>
      <div class="flex flex-wrap justify-center mt-16 space-x-2">
        <div class="flex flex-col mt-2 mb-2">
          <input
            class="w-56 p-2 border rounded-sm"
            v-model="roomId"
            :placeholder="$t('meetingStart.enterMeetingId')"
            id="room-input"
          />
          <span v-if="meetingIdError" class="text-sm text-red-500">{{
            meetingIdError
          }}</span>
        </div>
        <div class="flex space-x-2 flex-nowrap">
          <div class="mt-2 mb-2">
            <button
              @click="joinMeetingRoom"
              class="px-3 py-2 font-medium text-white bg-red-400 rounded-lg"
            >
              {{ $t("meetingStart.joinMeeting") }}
            </button>
          </div>
          <div class="mt-2 mb-2">
            <router-link
              class="
                inline-flex
                px-3
                py-2
                font-medium
                text-white
                bg-green-500
                rounded-lg
              "
              :to="`/${$i18n.locale}/room/${newMeetingRoomId}`"
            >
              {{ $t("meetingStart.newMeeting") }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="font-bold text-lg">
          We are currently working on a new and better version.
        </div>
        <div class="text-base">Please check back later!</div>
      </div>

      <div class="w-7/12 mx-auto mt-10 text-gray-500">
        <div>
          {{ $t("meetingStart.developedBy") }}
        </div>
        <div class="mt-10">
          <div class="flex justify-center space-x-2">
            <img
              class="w-6"
              src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png"
              alt=""
            />
            <div>
              <a
                target="_BLANK"
                class="font-bold text-blue-400"
                href="https://github.com/FotieMConstant/kemeet"
                >{{ $t("footer.makeConstribution") }}</a
              >
            </div>
          </div>
          <div class="mt-5">
            <div>{{ $t("footer.license") }}</div>
            Copyright ©
            {{ new Date().getFullYear() }}
            <a
              target="_BLANK"
              class="font-bold text-blue-400"
              href="http://twitter.com/fotie_codes"
              >fotiecodes</a
            >
            Open-source
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";

export default {
  components: {
    Appbar,
  },
  data() {
    return {
      roomId: "",
      newMeetingRoomId: "", // new room
      meetingIdError: "",
    };
  },
  mounted() {
    this.getUniqueMeetingId();
  },
  methods: {
    checkMeetingId() {
      this.meetingIdError = "";

      if (this.roomId == "") {
        this.meetingIdError = this.$t("errors.meeting.required");
      } else if (this.roomId.length != 20) {
        this.meetingIdError = this.$t("errors.meeting.lenght");
      }

      return this.meetingIdError == "" ? true : false;
    },
    joinMeetingRoom() {
      // validate the meeting ID input
      if (this.checkMeetingId()) {
        // redirect to the meeting room
        this.$router.push({ name: "Room", params: { roomId: this.roomId } });
      }
    },
    getUniqueMeetingId() {
      this.newMeetingRoomId = this.makeMeetingId(20);
    },
    // function to generate unique Id
    makeMeetingId(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>

<style></style>
