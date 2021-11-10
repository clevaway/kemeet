<template>
  <div class="room">
    <!-- {{ $t("gettings.morning") }}, Fotie -->
    <div class="md:flex md:space-x-6 mt-4">
      <div class="md:w-8/12">
        <VideoBox :roomIdForVideoBox="roomId" />
      </div>
      <div class="w-4/12 bg-gray-400 hidden md:block">
        <ChatBox />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoBox from "@/components/VideoBox.vue";
import ChatBox from "@/components/ChatBox.vue";

export default {
  name: "Room",
  props: {
    roomId: {
      type: String,
      default: "roomId",
    },
  },
  components: {
    VideoBox,
    ChatBox,
  },
};
</script>
