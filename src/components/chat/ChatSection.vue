<template>
  <div class="mt-4">
    <!-- chat top -->
    <div class="flex justify-between px-2">
      <div class="flex relative w-44">
        <div class="font-bold text-2xl">Chat</div>
      </div>
      <div class="text-gray-400 cursor-pointer">View all</div>
    </div>
    <!--/ chat top -->
    <!-- chat container -->
    <div class="relative">
      <div class="mt-4 mx-2 h-96 overflow-y-auto">
        <div class="mb-20">
          <!-- chat item -->
          <div v-for="item in 10" :key="item" class="flex space-x-3 mb-4">
            <div class="">
              <img
                class="rounded-full w-12 h-10 object-cover"
                src="https://ak.picdn.net/shutterstock/videos/1029713963/thumb/1.jpg"
                alt=""
              />
            </div>
            <div class="text-left w-full">
              <div class="text-gray-400 ml-4 mb-2">fotiecodes</div>
              <div class="bg-gray-100 p-4 rounded-2xl text-sm">
                Hey guys, how are you?
              </div>
            </div>
          </div>
          <!--/ chat item -->
        </div>

        <div class="absolute bottom-0 bg-white w-full">
          <div class="bg-gray-100 flex justify-between p-3 w-full rounded-full">
            <div>
              <span
                class="
                  material-icons-round
                  bg-yellow-500
                  text-white
                  rounded-full
                  p-3
                  cursor-pointer
                "
              >
                emoji_emotions
              </span>
            </div>
            <div class="w-44">
              <input
                class="focus:outline-none bg-gray-100 w-60 py-3"
                type="text"
                placeholder="Type a message here..."
              />
            </div>
            <div>
              <span
                class="
                  material-icons-round
                  bg-blue-500
                  text-white
                  rounded-full
                  p-3
                  cursor-pointer
                "
              >
                send
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--/ chat container -->
  </div>
</template>

<script>
export default {
  name: "ChatSection",
};
</script>

<style></style>
