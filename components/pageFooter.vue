<template>
  <footer class="shadow bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
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
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">من نحن</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">قائمة الأطباء</a>
          </li>
          <li>
            <NuxtLink to="/sign" class="hover:underline me-4 md:me-6"
              >التسجيل كطبيب</NuxtLink
            >
          </li>
          <li>
            <a href="#" class="hover:underline">تواصل معنا</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <span class="block text-sm sm:text-center text-gray-400"
        >© 2024
        <a href="https://flowbite.com/" class="hover:underline">طبيبي™</a>. جميع
        الحقوق محفوظة</span
      >
    </div>
  </footer>
</template>
