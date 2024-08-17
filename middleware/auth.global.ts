export default defineNuxtRouteMiddleware(async (to, from): Promise<any> => {
  const auth = useState("auth", () => false);
  const token = useCookie("token");
  let { login } = storeToRefs(useDoctorsStore());

  if (!token.value) {
    if (to.path === "/profile") return navigateTo("/sign?tab=login");
  }

  const { data, error } = await useFetch("/api/doctor/get");
  if (!error.value) {
    auth.value = true;
    if (to.path === "/sign") return navigateTo("/profile");
  }
  if (!data.value && to.path === "/profile") return navigateTo("/sign");

  login.value = data.value;
});
