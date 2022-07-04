<template>
  <div>
    <ParticipantsSection />
    <ChatSection />
  </div>
</template>

<script>
import ChatSection from "@/components/chat/ChatSection.vue";
import ParticipantsSection from "@/components/participants/ParticipantsSection.vue";
export default {
  name: "RightSideMenu",
  components: {
    ChatSection,
    ParticipantsSection,
  },
};
</script>

<style></style>
