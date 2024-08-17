export const useDoctorsStore = defineStore("Doctors", {
  state: () => ({
    schema: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      specialty: [],
      password: "",
      image: {},
    },
    login: {},
    toast: {},
    doctors: [],
  }),
  getters: {},
  actions: {
    async getSpecialities() {
      try {
        const specialities: any[] = await $fetch(`/api/specialtie/`);
        return specialities;
      } catch (err) {
        return ["لم يتم تحميل التخصصات"];
      }
    },
    async checkDoctorEmail(e: string) {
      const check = await $fetch(`/api/doctor/check/${e}`);
      return check;
    },
    async getAllDoctors() {
      try {
        const doctors = await $fetch("/api/doctor/getAll");
        this.doctors = doctors;
      } catch (err) {
        return `لا دكاترو`;
      }
    },
  },
});
