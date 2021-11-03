<template>
  <div>
    <div class="rounded-md bg-gray-600 __bgImg"></div>
    <!-- controls -->
    <div class="mt-5">
      <div class="flex justify-between">
        <div class="flex space-x-2">
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> settings </span>
            </button>
          </div>
          <div class="">
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
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> camera_alt </span>
            </button>
          </div>
          <div class="">
            <button class="px-3 pt-2 bg-red-400 rounded-full">
              <span class="material-icons my-auto text-white"> call_end </span>
            </button>
          </div>
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> screen_share </span>
            </button>
          </div>
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> person_add </span>
            </button>
          </div>
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> fullscreen </span>
            </button>
          </div>
        </div>
        <div class="flex space-x-2">
          <div class="">
            <button class="px-1.5 pt-1.5 bg-gray-200 rounded-full">
              <span class="material-icons my-auto"> splitscreen </span>
            </button>
          </div>
          <div class="">
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
export default {};
</script>

<style>
.__bgImg {
  background-image: url("https://ak.picdn.net/shutterstock/videos/1029713963/thumb/1.jpg");
  background-size: cover;
  height: 520px;
}
</style>
