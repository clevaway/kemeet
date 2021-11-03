<template>
  <div class="flex justify-between">
    <div>
      <router-link
        class="my-auto font-bold text-gray-600 text-xl"
        :to="`/${$i18n.locale}/`"
        >KéMeet</router-link
      >
    </div>
    <div class="flex space-x-2 my-auto">
      <div>Design Check-in Meeting</div>
      <div class="bg-gray-300 p-1 text-xs rounded-lg">14:02</div>
    </div>
    <div class="flex space-x-2">
      <div class="my-auto">
        <button><span class="material-icons"> light_mode </span></button>
      </div>
      <div class="my-auto">
        <button><span class="material-icons"> toggle_on </span></button>
      </div>
      <div class="my-auto">
        <button><span class="material-icons"> dark_mode </span></button>
      </div>
      <div class="my-auto">
        <button><span class="material-icons"> notifications </span></button>
      </div>
      <div class="my-auto">
        <button><span class="material-icons"> more_horiz </span></button>
      </div>
      <div class="my-auto">
        <img
          class="
            w-12
            rounded-2xl
            border-2 border-red-400
            p-0.5
            cursor-pointer
            __userDp
          "
          src="https://avatars.githubusercontent.com/u/42372656?v=4"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.__userDp {
  border-radius: 40%;
}
</style>
