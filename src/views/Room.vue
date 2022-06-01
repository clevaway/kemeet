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
        <nav class="">
          <div>
            <div class="bg-gray-100 rounded-full">
              <div>
                <span
                  class="
                    material-icons-round
                    text-gray-400
                    hover:bg-gray-200
                    p-3
                    rounded-full
                    cursor-pointer
                  "
                >
                  notifications
                </span>
              </div>
              <div>
                <span
                  class="
                    material-icons-round
                    text-gray-400
                    hover:bg-gray-200
                    p-3
                    rounded-full
                    cursor-pointer
                  "
                >
                  settings
                </span>
              </div>
            </div>
          </div>
          <!-- main menu -->
          <div class="mt-52">
            <div class="rounded-full py-3 space-y-4">
              <div>
                <span
                  class="
                    material-icons-round
                    text-gray-400
                    hover:bg-gray-100
                    rounded-full
                    p-3
                    cursor-pointer
                  "
                >
                  home
                </span>
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
                  video_call
                </span>
              </div>
              <div>
                <span
                  class="
                    material-icons-round
                    text-gray-400
                    hover:bg-gray-100
                    rounded-full
                    p-3
                    cursor-pointer
                  "
                >
                  watch_later
                </span>
              </div>
              <div>
                <span
                  class="
                    material-icons-round
                    text-gray-400
                    hover:bg-gray-100
                    rounded-full
                    p-3
                    cursor-pointer
                  "
                >
                  calendar_month
                </span>
              </div>
            </div>
          </div>
          <!--/ main menu -->
        </nav>

        <main class="sm:w-4/12 flex-1 bg-gray-100 rounded-2xl mx-4">
          <div class="m-6">
            <div class="flex justify-between">
              <div class="flex space-x-5">
                <div>
                  <span
                    class="
                      material-icons-round
                      bg-white
                      text-gray-400
                      rounded-full
                      p-3
                      cursor-pointer
                    "
                  >
                    keyboard_backspace
                  </span>
                </div>
                <div class="text-left">
                  <div class="font-bold text-xl">UI Meeting weekly-Week 15</div>
                  <div class="font-thin text-sm text-gray-500">20 May 22</div>
                </div>
                <div>
                  <button
                    class="
                      flex
                      bg-blue-500
                      rounded-full
                      px-3
                      text-xs
                      py-1
                      text-white
                      space-x-2
                    "
                  >
                    <div class="my-auto">
                      <span class="material-icons-round text-sm text-white">
                        people
                      </span>
                    </div>
                    <div class="my-auto">Weekly Meeting</div>
                  </button>
                </div>
              </div>

              <div>
                <span
                  class="
                    material-icons-round
                    bg-white
                    text-red-400
                    rounded-full
                    p-3
                    cursor-pointer
                  "
                >
                  radio_button_checked
                </span>
              </div>
            </div>
            <div class="flex mt-6 justify-between">
              <div class="flex space-x-4">
                <button
                  class="
                    flex
                    bg-white
                    rounded-full
                    px-3
                    text-xs
                    py-1
                    text-gray-400
                    space-x-2
                  "
                >
                  <div class="my-auto">
                    <span class="material-icons-round text-base text-gray-400">
                      people
                    </span>
                  </div>
                  <div class="my-auto">32</div>
                </button>
                <button
                  class="
                    flex
                    bg-green-500
                    rounded-full
                    px-3
                    text-xs
                    py-1
                    text-white
                    space-x-2
                  "
                >
                  <div class="my-auto">
                    <span class="material-icons-round text-base text-white">
                      add
                    </span>
                  </div>
                  <div class="my-auto">Add people</div>
                </button>
              </div>
              <div>
                <div class="bg-white flex space-x-1 rounded-full">
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-400
                        hover:bg-gray-200
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                      "
                    >
                      grid_view
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-400
                        hover:bg-gray-200
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                      "
                    >
                      view_agenda
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-white
                        bg-blue-500
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                      "
                    >
                      view_compact
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- video call section -->
            <div class="mt-5">
              <!-- compact view -->
              <!-- main character -->
              <div class="relative">
                <img
                  class="rounded-2xl w-full object-cover h-80"
                  src="https://ak.picdn.net/shutterstock/videos/1029713963/thumb/1.jpg"
                  alt=""
                />
                <!-- action settings -->
                <div class="absolute top-3 right-4">
                  <div class="flex space-x-3">
                    <div>
                      <span
                        class="
                          material-icons-round
                          text-green-500
                          bg-white
                          p-2
                          px-3
                          rounded-full
                          text-base
                          cursor-pointer
                          transform
                          rotate-45
                        "
                      >
                        push_pin
                      </span>
                    </div>
                    <div>
                      <span
                        class="
                          material-icons-round
                          text-white
                          bg-blue-500
                          p-2
                          px-3
                          rounded-full
                          text-base
                          cursor-pointer
                        "
                      >
                        mic
                      </span>
                    </div>
                  </div>
                </div>
                <!--/ action settings -->
                <!-- username section -->
                <div class="absolute bottom-3 left-4 cursor-pointer">
                  <div
                    class="flex space-x-2 bg-gray-700 px-3 py-1 rounded-full"
                  >
                    <div class="">
                      <span class="material-icons-round text-base text-white">
                        account_circle
                      </span>
                    </div>
                    <div class="text-white text-sm my-auto">fotiecode</div>
                  </div>
                </div>
                <!--/ username section -->
              </div>
              <!--/ main character -->
              <!-- underline view -->
              <div class="flex space-x-3">
                <div class="relative mt-3 w-48 h-32">
                  <img
                    class="rounded-2xl w-48"
                    src="https://media.istockphoto.com/photos/smiling-african-business-woman-coach-teacher-hr-looking-at-camera-picture-id1164377498?k=20&m=1164377498&s=612x612&w=0&h=Z7Gf2aDxtf5bATpNxgyikcf4AMGRLS-9E11R3ImXFUE="
                    alt=""
                  />
                  <!-- action settings -->
                  <div class="absolute top-2 right-2">
                    <div class="flex space-x-3">
                      <div>
                        <span
                          class="
                            material-icons-round
                            text-white
                            bg-blue-500
                            p-1
                            px-2
                            rounded-full
                            text-base
                            cursor-pointer
                          "
                        >
                          mic
                        </span>
                      </div>
                    </div>
                  </div>
                  <!--/ action settings -->
                  <!-- username section -->
                  <div class="absolute bottom-2 left-3 cursor-pointer">
                    <div
                      class="
                        flex
                        space-x-2
                        bg-gray-700
                        px-2
                        py-0.5
                        rounded-full
                      "
                    >
                      <div class="">
                        <span class="material-icons-round text-sm text-white">
                          account_circle
                        </span>
                      </div>
                      <div class="text-white text-xs my-auto">Stephanie</div>
                    </div>
                  </div>
                  <!--/ username section -->
                </div>
                <div class="relative mt-3 w-48 h-32">
                  <img
                    class="rounded-2xl w-48"
                    src="https://media.istockphoto.com/photos/smiling-black-woman-waving-talking-on-webcam-picture-id1158676693?k=20&m=1158676693&s=170667a&w=0&h=bt2bNdJY8jsO0hL-2A2smNVAZyUDnQaojpVjA49OLdY="
                    alt=""
                  />
                  <!-- action settings -->
                  <div class="absolute top-2 right-2">
                    <div class="flex space-x-3">
                      <div>
                        <span
                          class="
                            material-icons-round
                            text-gray-600
                            bg-white
                            p-1
                            px-2
                            rounded-full
                            text-base
                            cursor-pointer
                          "
                        >
                          mic_off
                        </span>
                      </div>
                    </div>
                  </div>
                  <!--/ action settings -->
                  <!-- username section -->
                  <div class="absolute bottom-2 left-3 cursor-pointer">
                    <div
                      class="
                        flex
                        space-x-2
                        bg-gray-700
                        px-2
                        py-0.5
                        rounded-full
                      "
                    >
                      <div class="">
                        <span class="material-icons-round text-sm text-white">
                          account_circle
                        </span>
                      </div>
                      <div class="text-white text-xs my-auto">Sophia</div>
                    </div>
                  </div>
                  <!--/ username section -->
                </div>
                <div class="relative mt-3 w-48 h-32">
                  <img
                    class="rounded-2xl w-48"
                    src="https://media.istockphoto.com/photos/happy-hispanic-latin-gen-z-teen-girl-blogger-smiling-face-waving-hand-picture-id1225782570?k=20&m=1225782570&s=612x612&w=0&h=6eCUG5ysliIItD3yQ5-oG0AY8qgByJCETDncgAf9Lpg="
                    alt=""
                  />
                  <!-- action settings -->
                  <div class="absolute top-2 right-2">
                    <div class="flex space-x-3">
                      <div>
                        <span
                          class="
                            material-icons-round
                            text-white
                            bg-blue-500
                            p-1
                            px-2
                            rounded-full
                            text-base
                            cursor-pointer
                          "
                        >
                          mic
                        </span>
                      </div>
                    </div>
                  </div>
                  <!--/ action settings -->
                  <!-- username section -->
                  <div class="absolute bottom-2 left-3 cursor-pointer">
                    <div
                      class="
                        flex
                        space-x-2
                        bg-gray-700
                        px-2
                        py-0.5
                        rounded-full
                      "
                    >
                      <div class="">
                        <span class="material-icons-round text-sm text-white">
                          account_circle
                        </span>
                      </div>
                      <div class="text-white text-xs my-auto">Stephanie</div>
                    </div>
                  </div>
                  <!--/ username section -->
                </div>
              </div>
              <!-- underline view -->
              <!--/ compact view -->
              <!-- action buttons -->
              <div class="mt-4 mx-14">
                <div class="flex justify-between">
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-500
                        bg-white
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      people
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-500
                        bg-white
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      fullscreen
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-500
                        bg-white
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      mic
                    </span>
                  </div>
                  <div class="my-auto">
                    <span
                      class="
                        text-white
                        bg-red-500
                        p-2
                        px-5
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      End meeting
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-500
                        bg-white
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      videocam_off
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-500
                        bg-white
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      screen_share
                    </span>
                  </div>
                  <div>
                    <span
                      class="
                        material-icons-round
                        text-gray-500
                        bg-white
                        p-2
                        px-3
                        rounded-full
                        text-base
                        cursor-pointer
                        transform
                      "
                    >
                      more_horiz
                    </span>
                  </div>
                </div>
              </div>
              <!-- action buttons -->
            </div>

            <!--/ video call section -->
          </div>
        </main>

        <aside class="sm:w-4/12">
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
                  <span class="material-icons-round text-gray-500">
                    mic_off
                  </span>
                </div>
                <div class="my-auto">
                  <span class="material-icons-round text-gray-500">
                    videocam_off
                  </span>
                </div>
              </div>
            </div>
            <!-- /item -->
            <!-- item -->
            <div
              v-for="item in 2"
              :key="item"
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
                  <span class="material-icons-round text-gray-500">
                    mic_off
                  </span>
                </div>
                <div class="my-auto">
                  <span class="material-icons-round text-gray-500">
                    videocam_off
                  </span>
                </div>
              </div>
            </div>
            <!-- /item -->

            <!-- fade layout -->
            <div id="gradient"></div>
            <!--/ fade layout  -->
          </div>
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
                  <div
                    v-for="item in 10"
                    :key="item"
                    class="flex space-x-3 mb-4"
                  >
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
                  <div
                    class="
                      bg-gray-100
                      flex
                      justify-between
                      p-3
                      w-full
                      rounded-full
                    "
                  >
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
        </aside>
      </div>
      <!-- end main container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import VideoBox from "@/components/VideoBox.vue";
// import ChatBox from "@/components/ChatBox.vue";

export default {
  name: "Room",
  props: {
    roomId: {
      type: String,
      default: "roomId",
    },
  },
  components: {
    // VideoBox,
    // ChatBox,
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
