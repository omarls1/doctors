<script setup lang="ts">
import { reactive } from "vue";
import type { FormError, FormSubmitEvent } from "#ui/types";
import { useDoctorsStore } from "~/stores/doctors";

const { handleFileInput, files } = useFileStorage();

//consts
const items = [
  {
    slot: "newDoctor",
    label: "تسجيل طبيب جديد",
  },
  {
    slot: "login",
    label: "تسجيل الدخول",
  },
];
const doctorStore = useDoctorsStore();
const { schema } = storeToRefs(doctorStore);
schema.value.image = files.value;

const specialties: any[] = await doctorStore.getSpecialities();
let newDoctorForm = doctorStore.schema;
const toast = useToast();
const form = ref();

// validate doctor
const validateDoctor = async (state: any): Promise<FormError<string>[]> => {
  const errors = [];
  const email = /\w@\w.\w/;
  if (!newDoctorForm.email.match(email))
    errors.push({ path: "email", message: "أدخل إيمايل صحيح" });

  const emailExists = await doctorStore.checkDoctorEmail(newDoctorForm.email);
  if (emailExists === false) {
    errors.push({ path: "email", message: "هذا الايمايل موجود" });
  }

  if (!newDoctorForm.password)
    errors.push({ path: "password", message: "هذا الحقل مطلوب" });
  if (!newDoctorForm.name)
    errors.push({ path: "name", message: "هذا الحقل مطلوب" });
  if (newDoctorForm.specialty.length == 0)
    errors.push({ path: "specialty", message: "هذا الحقل مطلوب" });
  if (!newDoctorForm.address)
    errors.push({ path: "address", message: "هذا الحقل مطلوب" });
  return errors;
};
// create new doctor
async function submitDoctor(event: FormSubmitEvent<any>) {
  try {
    await $fetch("/api/doctor/new", { method: "POST", body: newDoctorForm });
    toast.add({ title: "تم الارسال بنجاح المرجو تسجيل الدخول" });

    useRouter().push("/sign?tab=login");
  } catch (err) {
    toast.add({ title: "حدث خطأ أثناء الإرسال حاول مجددا", color: "red" });
  }
}

// log in form
const loginForm = reactive({
  email: "",
  password: "",
});
// validate form
const validateloginForm = (state: any): FormError[] => {
  const errors = [];
  const email = /\w@\w.\w/;
  if (!loginForm.email.match(email))
    errors.push({ path: "email", message: "أدخل إيمايل صحيح" });
  if (!loginForm.password)
    errors.push({ path: "password", message: "هذا الحقل مطلوب" });
  return errors;
};
// log in
async function onSubmitLogin() {
  try {
    const data = await $fetch("/api/doctor/login", {
      method: "POST",
      body: {
        email: loginForm.email,
        password: loginForm.password,
      },
    });
    useCookie("token", {
      maxAge: 60 * 60,
    }).value = data;
    useToast().add({ title: "تم تسجيل الدخول بنجاح" });
    navigateTo("/profile");
  } catch (err) {
    useToast().add({
      title: "يرجى منك التحقق من كلمة المرور او الايمايل",
      color: "red",
    });
  }
}

// add link for every page
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
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({
      query: { tab: items[value].slot },
    });
  },
});
</script>

<template>
  <div class="flex p-10 sign-form">
    <UTabs v-model="selected" :items="items" class="w-1/2">
      <template #newDoctor="{ item }">
        <UForm
          @submit.prevent="submitDoctor"
          :validate="validateDoctor"
          :state="newDoctorForm"
          ref="form"
        >
          <UCard>
            <template #header>
              <p
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ item.label }}
              </p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                يرجى ملء المعلومات أدناه لتسجيل طبيب جديد.
              </p>
            </template>
            <UFormGroup label="الاسم الكامل" name="name" class="mb-3" required>
              <UInput v-model="newDoctorForm.name" />
            </UFormGroup>
            <UFormGroup
              label="البريد الإلكتروني"
              name="email"
              class="mb-3"
              required
            >
              <UInput v-model="newDoctorForm.email" type="email" />
            </UFormGroup>
            <UFormGroup label="رقم الهاتف" name="phoneNumber" class="mb-3">
              <UInput v-model="newDoctorForm.phoneNumber" type="tel" />
            </UFormGroup>
            <UFormGroup label="العنوان" name="address" class="mb-3" required>
              <UInput v-model="newDoctorForm.address" />
            </UFormGroup>

            <UFormGroup label="صورة شخصية" name="image" class="mb-3">
              <UInput
                type="file"
                size="md"
                icon="i-heroicons-folder"
                @input="handleFileInput"
              />
            </UFormGroup>

            <UFormGroup label="التخصص" name="specialty" class="mb-3" required>
              <USelectMenu
                v-model="newDoctorForm.specialty"
                :options="specialties"
                trailing
                value-attribute="_id"
                option-attribute="name"
                placeholder="اختر تخصص"
              />
            </UFormGroup>
            <UFormGroup
              label="أنشأ كلمة مرور"
              name="password"
              class="mb-3"
              required
            >
              <UInput type="password" v-model="newDoctorForm.password" />
            </UFormGroup>

            <template #footer>
              <UButton type="submit" color="indigo" block>
                تسجيل الطبيب
              </UButton>
            </template>
          </UCard>
        </UForm>
      </template>

      <template #login="{ item }">
        <UForm
          @submit.prevent="onSubmitLogin"
          :validate="validateloginForm"
          :state="loginForm"
        >
          <UCard>
            <template #header>
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ item.label }}
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                أدخل البريد الإلكتروني وكلمة المرور لتسجيل الدخول.
              </p>
            </template>

            <UFormGroup label="البريد الإلكتروني" name="email" class="mb-3">
              <UInput v-model="loginForm.email" type="email" />
            </UFormGroup>
            <UFormGroup label="كلمة المرور" name="password" class="mb-3">
              <UInput v-model="loginForm.password" type="password" />
            </UFormGroup>

            <template #footer>
              <UButton type="submit" color="indigo" block>
                تسجيل الدخول
              </UButton>
            </template>
          </UCard>
        </UForm>
      </template>
    </UTabs>
    <picture class="self-end">
      <img src="/contact.png" alt="sign in" />
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
