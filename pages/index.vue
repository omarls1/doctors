<template>
  <div>
    <HomeLanding />
    <HomeAbout />
    <HomeServices />
    <HomeDoctorsList />
    <HomeContact />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
</script>
<style scoped>
.my-load {
  display: none !important;
}
</style>
