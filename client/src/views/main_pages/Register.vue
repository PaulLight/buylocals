<template>
  <div class="register">
    <h1>Register Page</h1>
    <section class="form">
      <form class="add-user" @submit.prevent="register">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input v-model="form.name"
                   class="input"
                   type="text"
                   placeholder="name">
          </div>
        </div>
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
  name: 'Register',
  components: {
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.form.email,
        password: this.form.password
      })
      console.log(response.data)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
