<script setup lang="ts">
import { reactive } from "vue";

const items = [
  {
    slot: "newDate",
    label: "موعد جديد",
  },
  {
    slot: "appointmentTracking",
    label: "تتبع الطلب",
  },
];

const newDateForm = reactive({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  doctor: "",
});

const appointmentTrackingForm = reactive({
  email: "",
  doctor: "",
});

function onSubmitnewDate() {
  console.log("تم أخد موعد جديد بنجاح", newDateForm);
}

function onSubmitappointmentTracking() {
  console.log("معلومات الطلب كالتالي :", appointmentTrackingForm);
}

const route = useRoute();
const router = useRouter();
const selected = computed({
  get() {
    const index = items.findIndex((item) => item.slot === route.query.tab);
    if (index === -1) {
      return 0;
    }

    return index;
  },
  set(value) {
    router.replace({
      query: { tab: items[value].slot },
      hash: "#sign-form",
    });
  },
});
</script>

<template>
  <div
    id="sign-form"
    class="flex flex-wrap-reverse md:flex-wrap p-10 sign-form"
  >
    <UTabs :items="items" class="w-full md:w-1/2" v-model="selected">
      <template #newDate="{ item }">
        <UCard @submit.prevent="onSubmitnewDate" class="w-full">
          <template #header>
            <p
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ item.label }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              يرجى ملء المعلومات أدناه لتسجيل موعد جديد.
            </p>
          </template>

          <UFormGroup label="الاسم الكامل" name="fullName" class="mb-3">
            <UInput v-model="newDateForm.fullName" />
          </UFormGroup>
          <UFormGroup label="البريد الإلكتروني" name="email" class="mb-3">
            <UInput v-model="newDateForm.email" type="email" />
          </UFormGroup>
          <UFormGroup label="رقم الهاتف" name="phone" class="mb-3">
            <UInput v-model="newDateForm.phone" type="tel" />
          </UFormGroup>
          <UFormGroup label="العنوان" name="address" class="mb-3">
            <UInput v-model="newDateForm.address" />
          </UFormGroup>
          <UFormGroup label="الطبيب" name="doctor" class="mb-3">
            <UInput v-model="newDateForm.doctor" />
          </UFormGroup>

          <template #footer>
            <UButton type="submit" color="indigo" block> تسجيل الطبيب </UButton>
          </template>
        </UCard>
      </template>

      <template #appointmentTracking="{ item }">
        <UCard @submit.prevent="onSubmitappointmentTracking">
          <template #header>
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ item.label }}
            </h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              أدخل البريد الإلكتروني واختر طبيب.
            </p>
          </template>

          <UFormGroup label="البريد الإلكتروني" name="email" class="mb-3">
            <UInput v-model="appointmentTrackingForm.email" type="email" />
          </UFormGroup>
          <UFormGroup label="الطبيب" name="doctor" class="mb-3">
            <USelectMenu
              v-model="appointmentTrackingForm.doctor"
              block
              searchable
              searchable-placeholder="البحث عن الطبيب ..."
              placeholder="إختر الطبيب"
              :options="[
                'Wade Cooper',
                'Arlene Mccoy',
                'Devon Webb',
                'Tom Cook',
                'Tanya Fox',
                'Hellen Schmidt',
                'Caroline Schultz',
                'Mason Heaney',
                'Claudie Smitham',
                'Emil Schaefer',
              ]"
            />
          </UFormGroup>

          <template #footer>
            <UButton type="submit" color="indigo" block> تتبع الطلب </UButton>
          </template>
        </UCard>
      </template>
    </UTabs>
    <picture class="w-full md:w-1/2 self-end">
      <img src="/date.png" alt="sign in" />
    </picture>
  </div>
</template>
<style scoped>
.sign-form {
  background-color: #ffffff;
  opacity: 0.8;
  background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px),
    radial-gradient(#444cf7 0.5px, #ffffff 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>
