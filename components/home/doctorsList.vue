<script setup lang="ts">
const items = [
  {
    name: "عادل محمد",
    image: "/doctor-1.jpg",
    about:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
  },
  {
    name: "محمد محمد",
    image: "/doctor-2.jpg",
    about:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
  },
  {
    name: "عمر محمد",
    image: "/doctor-3.jpg",
    about:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
  },
  {
    name: "اسم محمد",
    image: "/doctor-1.jpg",
    about:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
  },
  {
    name: "عثمان محمد",
    image: "/doctor-2.jpg",
    about:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
  },
  {
    name: "عبدو محمد",
    image: "/doctor-3.jpg",
    about:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص",
  },
];
const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <section id="doctors-list" class="bg-slate-100 doctors-list">
    <UContainer>
      <div class="text-center">
        <UBadge color="indigo" variant="soft" size="lg">الأطباء</UBadge>
        <h2 class="text-4xl w-full font-bold text-gray-800 mt-5">
          قائمة الأطباء
        </h2>
        <p class="text-slate-500 mb-10 mt-4 md:w-1/2 m-auto">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
        </p>
      </div>
      <UCarousel
        ref="carouselRef"
        dir="ltr"
        v-slot="{ item }"
        :items="items"
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-left-12 carousel',
        }"
        :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-right-12',
        }"
        arrows
        class="w-full"
      >
        <div
          class="max-w-sm mx-4 bg-white border border-gray-200 rounded-lg shadow"
        >
          <a href="#">
            <img
              class="rounded-t-lg h-72 w-full"
              :src="item.image"
              :alt="item.name"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ item.name }}
              </h5>
            </a>
            <p class="my-4 font-normal text-gray-700 dark:text-gray-400">
              {{ item.about }}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              أخد موعد
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </UCarousel>
    </UContainer>
  </section>
</template>
<style scoped>
p,
h5,
button {
  direction: rtl !important;
}
p {
  line-height: 1.5;
}
</style>
