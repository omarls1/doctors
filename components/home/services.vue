<template>
  <section id="our-services" class="services">
    <UContainer>
      <div class="text-center">
        <UBadge color="indigo" variant="soft" size="lg">الخدمات</UBadge>
        <h2 class="text-4xl font-bold text-gray-800 mt-5 mb-10">
          هذه قائمة بابرز الخدمات الطبية المقدمة
        </h2>
      </div>

      <div class="flex flex-wrap justify-center gap-10">
        <div
          data-aos="flip-up"
          class="bg-white p-6 border-gray-100 border-2 rounded-lg shadow-md w-80 cursor-pointer hover:scale-105 transition-all"
        >
          <div class="flex items-center justify-center mb-4">
            <Icon name="mdi:calendar-check" class="text-blue-700" size="40px" />
          </div>
          <h3 class="text-xl font-semibold mb-2">أخد المواعيد الطبية</h3>
          <p class="text-gray-600 mb-4">
            إختر الطبيب الذي تريد وخد موعدط الطبي من منزلك دون الحاجة للذهاب إلى
            المستشفى
          </p>
          <UButton
            label="أخد موعد"
            color="indigo"
            variant="outline"
            to="/date?tab=newDate#sign-form"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
        <div
          data-aos="flip-up"
          class="bg-white p-6 border-gray-100 border-2 rounded-lg shadow-md w-80 cursor-pointer hover:scale-105 transition-all"
        >
          <div class="flex items-center justify-center mb-4">
            <Icon
              name="ic:baseline-spatial-tracking"
              class="text-blue-700"
              size="40px"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2">تتبع الطلب</h3>
          <p class="text-gray-600 mb-4">
            يمكنك تتبع طلبك ومعرفة آخر المستجدات ومعرفة إن تم القبول أو لا أيضا
            الحصول على قائمة الأدوية
          </p>
          <UButton
            label="تتبع الطلب "
            color="indigo"
            variant="outline"
            to="/date?tab=appointmentTracking#sign-form"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
        <div
          data-aos="flip-up"
          class="bg-white p-6 border-gray-100 border-2 rounded-lg shadow-md w-80 cursor-pointer hover:scale-105 transition-all"
        >
          <div class="flex items-center justify-center mb-4">
            <Icon
              name="fa6-solid:user-doctor"
              class="text-blue-700"
              size="40px"
            />
          </div>
          <h3 class="text-xl font-semibold mb-2">إنضم كطبيب</h3>
          <p class="text-gray-600 mb-4">
            إذا كنت طبيبا يمكنك تقديم طلبك للإنضمام لتسهيل عملية أخد الموعد على
            مرضاك
          </p>
          <UButton
            label="انضم كطبيب"
            color="indigo"
            variant="outline"
            to="/sign"
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
<style>
.services {
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#444cf7 0.45px, transparent 0.45px),
    radial-gradient(#444cf7 0.45px, #ffffff 0.45px);
  background-size: 18px 18px;
  background-position: 0 0, 9px 9px;
}
</style>
