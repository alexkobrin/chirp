<template>
  <div class="w-full">
    <div class="pt-5 space-y-6">
      <UIInput
        v-model="data.username"
        label="userName"
        placeholder="@username"
      ></UIInput>

      <UIInput
        v-model="data.password"
        label="Password"
        placeholder="********"
        type="password"
      ></UIInput>
      <UIButton @click="handleLogin" :disabled="isButtonDisabled" liquid=""
        >Login
      </UIButton>
    </div>
  </div>
</template>
<script setup>
const { login } = useAuth();
const data = reactive({
  username: "",
  password: "",
  loading: false,
});

const handleLogin = () => {
  data.loading = true;

  try {
    login({ username: data.username, password: data.password });
  } catch (error) {
    console.log(error, "er");
  } finally {
    data.loading = false;
  }
};

const isButtonDisabled = computed( () => {
  return  (!data.username  ||  !data.password) ||  data.loading

})
</script>
