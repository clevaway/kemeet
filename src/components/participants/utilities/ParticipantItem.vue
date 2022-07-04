<template>
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
          src="https://media.istockphoto.com/photos/happy-hispanic-latin-gen-z-teen-girl-blogger-smiling-face-waving-hand-picture-id1225782570?k=20&m=1225782570&s=612x612&w=0&h=6eCUG5ysliIItD3yQ5-oG0AY8qgByJCETDncgAf9Lpg="
          alt=""
        />
      </div>
      <div class="my-auto">Stephanie</div>
    </div>
    <div class="flex justify-between space-x-4 my-auto pr-4">
      <div class="my-auto">
        <span class="material-icons-round text-gray-500"> mic_off </span>
      </div>
      <div class="my-auto">
        <span class="material-icons-round text-gray-500"> videocam_off </span>
      </div>
    </div>
  </div>
  <!-- /item -->
</template>

<script>
export default {
  name: "ParticipantItem",
};
</script>

<style></style>
