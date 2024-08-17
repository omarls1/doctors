<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
const { login }: any = storeToRefs(useDoctorsStore());
const toast = useToast();

const items = [
  {
    key: "account",
    label: "في إنتظار الموافقة",
    description:
      "Make changes to your account here. Click save when you're done.",
  },
  {
    key: "progress",
    label: "جار تنفيذها",
    description:
      "Change your password here. After saving, you'll be logged out.",
  },
  {
    key: "done",
    label: "تم تنفيذها",
    description:
      "Change your password here. After saving, you'll be logged out.",
  },
];
</script>

<template>
  <div class="p-7 profile">
    <UContainer>
      <UBadge color="indigo" variant="soft" size="lg" class="mb-4"
        >مرحبا {{ login.name }}</UBadge
      >
      <UDivider label="المواعيد" class="mb-2" />
      <UTabs :items="items" class="w-full">
        <template #item="{ item }">
          <UCard class="shadow-lg mt-4">
            <template #header>
              <p class="text-gray-700 text-center">
                موعد من طرف <span class="font-semibold">محمد علي</span>
              </p>
            </template>
            <p class="text-gray-700 mt-2">
              <span class="font-semibold">البريد الإلكتروني:</span>
              example@email.com
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-semibold">رقم الهاتف:</span> 123-456-7890
            </p>
            <p class="text-gray-700 mt-2">
              <span class="font-semibold">تاريخ الموعد:</span> 20 أغسطس 2024
            </p>
            <template #footer>
              <div class="flex justify-between">
                <UButton
                  color="primary"
                  variant="soft"
                  class="w-full md:w-2/5 justify-around"
                  @click="toast.add({ title: 'تم القبول', color: 'primary' })"
                  >الموافقة</UButton
                >
                <UButton
                  color="red"
                  variant="soft"
                  class="w-full md:w-2/5 justify-around"
                  @click="toast.add({ title: 'تم الرفض', color: 'red' })"
                  >رفض</UButton
                >
              </div>
            </template>
          </UCard>
        </template>
      </UTabs>
      <UDivider label="الملف الشخصي" class="mb-2 mt-10" />
    </UContainer>
    <FormsEdit />
  </div>
</template>
<!-- <style lang="scss"></style> -->
