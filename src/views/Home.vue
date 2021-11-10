<template>
  <div class="mt-12">
    <div class="w-7/12 mx-auto">
      {{ $t("introText") }}
    </div>
    <div class="flex space-x-2 justify-center mt-16">
      <div>
        <input
          class="border rounded-sm p-2 w-56"
          v-model="roomId"
          :placeholder="$t('meetingStart.enterMeetingId')"
          id="room-input"
        />
      </div>
      <div class="mt-2">
        <router-link
          class="bg-red-400 text-white font-medium py-2 px-3 rounded-lg"
          :to="`/${$i18n.locale}/room/${roomId}`"
        >
          {{ $t("meetingStart.joinMeeting") }}
        </router-link>
      </div>
      <div class="mt-2">
        <router-link
          class="bg-green-500 text-white font-medium py-2 px-3 rounded-lg"
          :to="`/${$i18n.locale}/room/${newMeetingRoomId}`"
        >
          {{ $t("meetingStart.newMeeting") }}
        </router-link>
      </div>
    </div>
    <div class="w-7/12 mx-auto mt-10 text-gray-500">
      <div>
        {{ $t("meetingStart.developedBy") }}
      </div>
      <div class="mt-10">
        <div class="flex justify-center space-x-2">
          <img
            class="w-6"
            src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png"
            alt=""
          />
          <div>
            <a
              target="_BLANK"
              class="text-blue-400 font-bold"
              href="https://github.com/FotieMConstant/kemeet"
              >{{ $t("footer.makeConstribution") }}</a
            >
          </div>
        </div>
        <div class="mt-5">
          <div>{{ $t("footer.license") }}</div>
          Copyright ©
          {{ new Date().getFullYear() }}
          <a
            target="_BLANK"
            class="text-blue-400 font-bold"
            href="http://twitter.com/fotie_codes"
            >fotiecodes</a
          >
          Open-source
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: "",
      newMeetingRoomId: "", // new room
    };
  },
  mounted() {
    this.getUniqueMeetingId();
  },
  methods: {
    getUniqueMeetingId() {
      this.newMeetingRoomId = this.makeMeetingId(20);
    },
    // function to generate unique Id
    makeMeetingId(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>

<style></style>
