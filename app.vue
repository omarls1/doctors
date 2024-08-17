<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});

// // loader
// const router = useRouter();
// router.beforeEach((to, from, next) => {
//   if (from.path !== "/") showLoader.value = true;

//   next();
// });
// router.afterEach(() => {
//   showLoader.value = false;
// });
const showLoader = ref(true);
onMounted(() => {
  showLoader.value = false;
});
</script>

<template>
  <div>
    <div v-if="showLoader" class="my-load">
      <div class="loader"></div>
    </div>

    <navbar />
    <NuxtPage />
    <pageFooter />
    <UNotifications />
  </div>
</template>
<style>
body {
  font-family: "Readex Pro", sans-serif;
  background-color: white;
  color: black;
  overflow-x: hidden;
}
:root {
  scroll-behavior: smooth;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter,
.page-leave-to /* .page-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
