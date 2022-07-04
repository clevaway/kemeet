<template>
  <div class="room">
    <!-- {{ $t("gettings.morning") }}, Fotie -->
    <!-- <div class="md:flex md:space-x-6 mt-4">
      <div class="md:w-8/12">
        <VideoBox :roomIdForVideoBox="roomId" />
      </div>
      <div class="w-4/12 bg-gray-400 hidden md:block">
        <ChatBox />
      </div>
    </div> -->
    <div class="flex flex-col">
      <!-- main container -->
      <div class="flex-1 flex flex-row">
        <!-- selft menu component -->
        <LeftSideMenu />
        <!--/ selft menu component -->
        <main class="sm:w-4/12 flex-1 bg-gray-100 rounded-2xl mx-4">
          <CenterScreen />
        </main>

        <aside class="sm:w-4/12">
          <RightSideMenu />
        </aside>
      </div>
      <!-- end main container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CenterScreen from "@/components/CenterScreen.vue";
import LeftSideMenu from "@/components/LeftSideMenu.vue";
import RightSideMenu from "@/components/RightSideMenu.vue";

export default {
  name: "Room",
  props: {
    roomId: {
      type: String,
      default: "roomId",
    },
  },
  components: {
    CenterScreen,
    LeftSideMenu,
    RightSideMenu,
  },
};
</script>

<style scoped></style>
