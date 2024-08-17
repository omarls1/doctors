<script setup>
const showNav = ref("hidden");
const auth = useState("auth");
function showNavFunc() {
  if (showNav.value === "hidden") {
    showNav.value = "";
  } else {
    showNav.value = "hidden";
  }
}
function logout() {
  useCookie("token").value = "";
  auth.value = false;
}
</script>

<template>
  <nav
    class="bg-gray-900 sticky w-full z-20 top-0 start-0 shadow shadow-gray-700"
  >
    <UContainer>
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >طبيبي</span
          >
        </NuxtLink>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <UButton
            v-if="!auth"
            color="indigo"
            size="md"
            variant="solid"
            to="/date"
            >أخد موعد</UButton
          >
          <div v-else class="flex gap-4">
            <UButton color="indigo" size="lg" variant="solid" to="/profile">
              <UIcon
                name="material-symbols:account-circle-full"
                class="scale-125"
            /></UButton>

            <UButton
              color="indigo"
              size="lg"
              to="/"
              variant="solid"
              @click="logout"
            >
              <UIcon name="material-symbols:logout" class="scale-125"
            /></UButton>
          </div>

          <button
            @click="showNavFunc"
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          :class="showNav"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NuxtLink
                to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >الرئيسية</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#about-us"
                class="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >من نحن</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#our-services"
                class="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >الخدمات</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#doctors-list"
                class="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >قائمة الأطباء</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#contact-us"
                class="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >تواصل معنا</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
    <NuxtLoadingIndicator
      color="#38bdf8"
      throttle="0"
      style="opacity: 1; position: static"
    />
  </nav>
</template>
