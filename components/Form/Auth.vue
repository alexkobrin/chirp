<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        v-model="data.username"
        label="userName"
        placeholder="@username"
      ></UIInput>
       {{ data.loading }}
      <UIInput
        v-model="data.password"
        label="Password"
        placeholder="********"
        type="password"
      ></UIInput>
      <div><button @click="handleLogin">Login</button></div>
    </div>
  </div>
</template>
<script setup>

const {login} = useAuth()
const data = reactive({
  username: "",
  password: "",
  loading: false
});

const handleLogin =   () => {
  data.loading = true


  try {
  login({username : data.username, password : data.password})
  } catch (error) {
    console.log(error , "er");
  } finally {
    data.loading = false
  }
};
</script>
