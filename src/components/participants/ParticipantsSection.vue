<template>
  <div>
    <div class="py-4">
      <!-- participant top -->
      <div class="flex justify-between px-2">
        <div class="flex relative w-44">
          <div class="font-bold text-2xl">Participants</div>
          <div
            class="
              absolute
              -top-2
              right-2
              bg-blue-500
              text-white
              p-1
              px-2.5
              my-auto
              rounded-full
              text-xs
            "
          >
            32
          </div>
        </div>
        <div class="text-gray-400 cursor-pointer">View all</div>
      </div>
      <!--/ participant top -->
    </div>
    <div class="__participants relative">
      <!-- item -->
      <div
        class="
          flex
          justify-between
          hover:bg-gray-100
          p-2
          cursor-pointer
          rounded-full
        "
      >
        <div class="flex justify-between space-x-6">
          <div>
            <img
              class="rounded-full w-12 h-12 object-cover"
              src="https://ak.picdn.net/shutterstock/videos/1029713963/thumb/1.jpg"
              alt=""
            />
          </div>
          <div class="my-auto">Me</div>
        </div>
        <div class="flex justify-between space-x-4 my-auto pr-4">
          <div class="my-auto">
            <span class="material-icons-round text-gray-500"> mic_off </span>
          </div>
          <div class="my-auto">
            <span class="material-icons-round text-gray-500">
              videocam_off
            </span>
          </div>
        </div>
      </div>
      <!-- /item -->
      <ParticipantItem v-for="item in 2" :key="item" />
      <!-- fade layout -->
      <div id="gradient"></div>
      <!--/ fade layout  -->
    </div>
  </div>
</template>

<script>
import ParticipantItem from "@/components/participants/utilities/ParticipantItem.vue";
export default {
  name: "ParticipantsSection",
  components: {
    ParticipantItem,
  },
};
</script>

<style scoped>
#gradient {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  height: 81px;
  background: none;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.97) 80%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 0)),
    color-stop(80%, rgba(255, 255, 255, 0.97))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.97) 80%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.97) 80%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.97) 80%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.97) 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
}
</style>
