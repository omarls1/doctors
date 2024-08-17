<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const { login }: any = storeToRefs(useDoctorsStore());

// const validate = (state: any): FormError[] => {
//   const errors = [];
//   //   if (!state.password) errors.push({ path: "password", message: "Required" });
//   return errors;
// };

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <UContainer>
    <!-- <UForm
      :validate="validate"
      :state="login"
      class="space-y-4"
      @submit="onSubmit"
    > -->
    <UForm :state="login" @submit="onSubmit" class="space-y-4">
      <UFormGroup label="الإسم" name="name">
        <UInput v-model="login.name" />
      </UFormGroup>

      <UFormGroup label="البريد الإلكتروني" name="email">
        <UInput v-model="login.email" disabled readonly />
      </UFormGroup>

      <UFormGroup label="رقم الهاتف" name="name">
        <UInput v-model="login.phoneNumber" />
      </UFormGroup>

      <UFormGroup label="العنوان" name="name">
        <UInput v-model="login.address" />
      </UFormGroup>

      <UButton
        type="submit"
        color="indigo"
        variant="soft"
        class="w-full justify-around"
      >
        تعديل الملف الشخصي
      </UButton>
    </UForm>
  </UContainer>
</template>
