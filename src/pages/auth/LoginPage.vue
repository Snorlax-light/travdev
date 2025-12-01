<template>
  <div class="flex flex-center bg-gradient full-height">

    <!-- LOGIN CARD -->
    <q-card v-if="!showRegister" flat bordered class="auth-card q-pa-lg">

      <q-card-section class="text-center q-pb-none">
        <div class="text-h4 text-weight-bold text-primary q-mb-xs">Travel Tours</div>
        <div class="text-subtitle2 text-grey-7">Sign in to your account</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="onLogin" class="q-gutter-md">


          <q-input
            v-model="loginForm.email"
            type="email"
            label="Email"
            outlined
            :rules="[val => !!val || 'Email is required']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>


          <q-input
            v-model="loginForm.password"
            :type="showLoginPassword ? 'text' : 'password'"
            label="Password"
            outlined
            :rules="[val => !!val || 'Password is required']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="showLoginPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showLoginPassword = !showLoginPassword"
              />
            </template>
          </q-input>


          <div class="row items-center justify-between">
            <q-checkbox v-model="loginForm.remember" label="Remember me" />
            <q-btn flat dense color="primary" label="Forgot Password?" no-caps />
          </div>

          <q-btn
            type="submit"
            color="primary"
            label="Sign In"
            unelevated
            size="lg"
            class="full-width"
          />

        </q-form>
      </q-card-section>


      <q-card-section class="text-center">
        <div class="text-body2 text-grey-7">
          Don't have an account?
          <q-btn flat dense color="primary" label="Sign Up" no-caps @click="showRegister = true" />
        </div>
      </q-card-section>

    </q-card>

    <!-- REGISTER CARD -->
    <q-card v-else flat bordered class="auth-card q-pa-lg">

      <q-card-section class="text-center q-pb-none">
        <div class="text-h4 text-weight-bold text-primary q-mb-xs">Travel Tours</div>
        <div class="text-subtitle2 text-grey-7">Create your account</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="onRegister" class="q-gutter-md">

          <q-input
            v-model="registerForm.fullName"
            label="Full Name"
            outlined
            :rules="[val => !!val || 'Full name is required']"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="registerForm.email"
            type="email"
            label="Email"
            outlined
            :rules="[val => !!val || 'Email is required']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input
            v-model="registerForm.password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            outlined
            :rules="[val => !!val || 'Password is required', val => val.length >= 6 || 'Password must be at least 6 characters']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>

          <q-input
            v-model="registerForm.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            label="Confirm Password"
            outlined
            :rules="[val => !!val || 'Please confirm password', val => val === registerForm.password || 'Passwords do not match']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="showConfirmPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showConfirmPassword = !showConfirmPassword"
              />
            </template>
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="Create Account"
            unelevated
            size="lg"
            class="full-width"
          />

        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <div class="text-body2 text-grey-7">
          Already have an account?
          <q-btn flat dense color="primary" label="Sign In" no-caps @click="showRegister = false" />
        </div>
      </q-card-section>

    </q-card>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import db from 'src/db.json'

const router = useRouter()
const users = db.users


const showRegister = ref(false)


const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

const showLoginPassword = ref(false)


const registerForm = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const onLogin = () => {
  const user = users.find(
    u => u.email === loginForm.value.email &&
         u.password === loginForm.value.password
  )

  if (user) {
    console.log('Login successful!', user)
    localStorage.setItem('user', JSON.stringify(user))

    if (user.role === 'admin') {
      console.log('Redirecting to admin dashboard...')
      router.push('/admin')
    } else {
      console.log('Redirecting to user dashboard...')
      router.push('/user')
    }
  } else {
    console.log('Invalid email or password')
    alert('Invalid email or password')
  }
}

const onRegister = () => {
  const newUser = {
    id: users.length + 1,
    fullName: registerForm.value.fullName,
    email: registerForm.value.email,
    password: registerForm.value.password,
    role: 'user',
    createdAt: new Date().toISOString().split('T')[0]
  }

  const emailExists = users.find(u => u.email === registerForm.value.email)

  if (emailExists) {
    alert('Email already exists. Please use a different email.')
    return
  }


  users.push(newUser)

  console.log('Registration successful!', newUser)
  alert('Account created successfully! Please sign in.')


  showRegister.value = false

 
  registerForm.value = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
}
</script>

<style scoped>
.bg-gradient {
  background: white;
}

.full-height {
  min-height: 100vh;
}

.auth-card {
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}
</style>
