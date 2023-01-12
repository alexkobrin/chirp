<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="isAuthLoading" />

      <!-- App -->
      <div v-else-if="user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left side bar -->
          <div class="hidden xs:col-span-1 md:block xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft
                @on-logout="handleUserLogout"
                :user="user"
                @on-tweet="handleOpenTweetModal"
              />
            </div>
          </div>
          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view />
          </main>

          <!-- Right sidebar -->
          <div class="hidden col-span-12 xl:col-span-4 md:block md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
      <AuthPage v-else />

      <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
        <TweetForm
          :replyTo="replyTweet"
          showReply
          @on-success="handleFormSuccess"
          :user="user"
        />
      </UIModal>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const {
  closePostTweetModal,
  openPostTweetModal,
  usePostTweetModal,
  useReplyTweet,
} = useTweets();
const user = useAuthUser();
const postTweetModal = usePostTweetModal();
const isAuthLoading = useAuthLoading();
const replyTweet = useReplyTweet();

onBeforeMount(() => {
  initAuth();
});

function handleFormSuccess(tweet) {
  closePostTweetModal();

  navigateTo({
    path: `/status/${tweet.id}`,
  });
}

function handleModalClose() {
  closePostTweetModal();
}
function handleOpenTweetModal() {
  openPostTweetModal(null);
}

function handleUserLogout() {
  logout();
}
const emitter = useEmitter();

emitter.$on("replyTweet", (tweet) => {
  openPostTweetModal(tweet);
});
emitter.$on("toggleDarkMode", () => {
  darkMode.value = !darkMode.value;
});
</script>
