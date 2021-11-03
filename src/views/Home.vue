<template>
  <div class="home">
    <!-- {{ $t("gettings.morning") }}, Fotie -->
    <div class="flex space-x-6 mt-4">
      <div class="w-8/12">
        <VideoBox />
      </div>
      <div class="w-4/12 bg-gray-400">
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
  name: "Home",
  components: {
    VideoBox,
    ChatBox,
  },
};
</script>
