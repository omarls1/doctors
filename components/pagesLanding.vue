<template>
  <div class="p-8 flex flex-col justify-center items-center landing">
    <UBadge color="indigo" variant="soft" size="lg" class="w-fit">{{
      badgeText
    }}</UBadge>
    <h1 class="text-7xl w-full font-bold text-center text-white mt-5">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string;
  title: string;
  badgeText: string;
}>();

const imgRef = ref(`url('${props.img}')`);
</script>

<style lang="scss" scoped>
.landing {
  background-image: v-bind(imgRef);
  > * {
    z-index: 2;
    position: relative;
  }
}
</style>
