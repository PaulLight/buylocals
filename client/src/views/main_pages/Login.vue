<template>
  <div class="login">
    <h1>Login Page</h1>
    <section class="form">
      <form class="add-user" @submit.prevent="register">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="form.email"
                   class="input"
                   type="email"
                   placeholder="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="form.password"
                   class="input"
                   type="password"
                   placeholder="password">
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      AuthenticationService.register({
        email: this.form.email,
        password: this.form.password
      })
      console.log(this.form.email)
      console.log(this.form.password)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
