<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  email: undefined,
  name: undefined,
  message: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "مطلوب" });
  if (!state.name) errors.push({ path: "name", message: "مطلوب" });
  if (!state.message) errors.push({ path: "message", message: "مطلوب" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <section id="contact-us" class="contact-us">
    <UContainer>
      <div class="text-center">
        <UBadge color="indigo" variant="soft" size="lg">تواصل</UBadge>
        <h2 class="text-4xl w-full font-bold text-gray-800 mt-5">تواصل معنا</h2>
        <p class="text-slate-500 mb-6 mt-4 md:w-1/2 m-auto">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-between">
        <UForm
          data-aos="zoom-in-right"
          :validate="validate"
          :state="state"
          class="space-y-6 w-full md:w-1/2 self-end bg-white p-8 shadow-lg rounded"
          @submit="onSubmit"
        >
          <UFormGroup label="الإسم" name="name">
            <UInput v-model="state.name" type="text" />
          </UFormGroup>

          <UFormGroup
            label="الإيمايل"
            name="email"
            help="لن يتم مشاركة هذا الإيمايل مع أحد"
            class="email"
          >
            <UInput
              v-model="state.email"
              placeholder="you@example.com"
              icon="i-heroicons-envelope"
            />
          </UFormGroup>
          <UFormGroup label="الموضوع" name="sujet">
            <UInput type="text" />
          </UFormGroup>
          <UFormGroup label="الرسالة" name="message">
            <UTextarea v-model="state.message"></UTextarea>
          </UFormGroup>
          <UButton type="submit" color="indigo" block> إرسال </UButton>
        </UForm>
        <picture class="w-full md:w-2/5" data-aos="zoom-in-left">
          <img src="/contact.png" alt="contact" />
        </picture>
      </div>
    </UContainer>
  </section>
</template>
<style>
.contact-us {
  background-color: #ffffff;
  background-image: radial-gradient(#444cf7 0.5px, #ffffff 0.5px);
  background-size: 10px 10px;
}
</style>
