<template>
  <section class="login-content">
    <b-row class="m-0 align-items-center bg-white vh-100">
      <b-col md="6">
        <b-row class="justify-content-center">
          <b-col md="10">
            <b-card class="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card iq-auth-form"
              body-class="z-3 px-md-0 px-lg-4">
              <router-link :to="{ name: 'default.dashboard' }"
                class="navbar-brand d-flex align-items-center mb-3 text-primary">
                <brand-logo></brand-logo>
                <h4 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h4>
              </router-link>
              <h2 class="mb-2 text-center">Sign In</h2>
              <p class="text-center">Login to stay connected.</p>
              <form @submit.prevent="signIn">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="username" class="form-label">Username</label>
                      <input type="string" class="form-control" id="username" v-model="username"
                        aria-describedby="username" placeholder=" " />
                      <!-- <input type="string" class="form-control" id="username" v-model="email"
                        aria-describedby="username" placeholder=" " /> -->
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" v-model="password"
                        aria-describedby="password" placeholder=" " />
                      <!-- <input type="password" class="form-control" id="password" v-model="password"
                        aria-describedby="password" placeholder=" " /> -->
                    </div>
                  </div>
                  <!-- <div class="col-lg-12 d-flex justify-content-between">
                    TODO: Add Reset Password and Remember Me
                    <div class="form-check mb-3">
                      <input type="checkbox" class="form-check-input" id="customCheck1" />
                      <label class="form-check-label" for="customCheck1">Remember Me</label>
                    </div>
                    <router-link :to="'/auth/reset-password'">Forgot Password?</router-link>
                  </div> -->
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary" :disabled="isLoading">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status"
                      aria-hidden="true"></span>
                    <span v-if="!isLoading">Sign In</span>
                  </button>
                </div>
                <!-- TO DO: Add Sign Up -->
                <p class="mt-3 text-center">Don’t have an account? <router-link :to="'/auth/register'"
                    class="text-underline">Click here to sign up.</router-link></p>
              </form>
            </b-card>
          </b-col>
        </b-row>
        <div class="sign-bg">
          <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
              <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857"
                transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
              <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857"
                transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
              <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857"
                transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
              <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857"
                transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
            </g>
          </svg>
        </div>
      </b-col>
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="@/assets/images/auth/01.png" class="img-fluid gradient-main animated-scaleX" alt="images"
          loading="lazy" />
      </div>
    </b-row>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/pinia/auth'

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const authStore = useAuthStore()

const signIn = async () => {
  try {
    isLoading.value = true
    await authStore.login({ username: username.value, password: password.value })
  } catch (error) {
    alert(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped></style>
