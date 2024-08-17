<template>
  <div class="landing pt-5">
    <UContainer>
      <div class="flex flex-wrap-reverse">
        <picture class="w-full lg:w-1/2">
          <img src="/doctor.png" alt="doctor" />
        </picture>
        <div class="self-right lg:self-center w-full lg:w-1/2 text">
          <UBadge color="indigo" variant="soft" size="md">
            مرحبا بك في موقع طبيبي
          </UBadge>

          <p class="text-white my-4">
            الموقع <span class="text-red-400">المغربي</span> الاول لأخد المواعيد
            الطبية عن بعد
          </p>
          <UButton
            label="أخد موعد الأن"
            color="sky"
            variant="outline"
            size="lg"
            to="/date"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const img = ref("url('/hospital.jpg')");
</script>

<style lang="scss">
.landing {
  background-image: v-bind(img);
  background-repeat: no-repeat;
  background-size: cover;
  height: 91vh;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    z-index: 0;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
  picture,
  .text {
    z-index: 1;
  }
  .text {
    p {
      font-size: 45px;
      line-height: 1.7;
      font-weight: bold;
      letter-spacing: 2px;
      margin-right: 30px;
    }
    button {
      margin-right: 40px;
      transition: 1s;
    }
  }
}
</style>
