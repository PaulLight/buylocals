<template>
  <div class="register">
    <h1>Register Page</h1>
    <section class="form">
      <form class="add-user" @submit.prevent="submit">
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
    submit() {

    }
  }
};
</script>

<style scoped lang="scss">

</style>
