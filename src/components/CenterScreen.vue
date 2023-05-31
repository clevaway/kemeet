<template>
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
            <span class="material-icons-round text-base text-white"> add </span>
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
      <DefaultVideoLayout />

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
</template>

<script>
import DefaultVideoLayout from "@/components/VideoLayouts/DefaultVideoLayout.vue";
export default {
  name: "CenterScreen",
  components: {
    DefaultVideoLayout,
  },
};
</script>

<style></style>
