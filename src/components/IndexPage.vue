<template>
    <div class="login-container">
        <img :src="logoImage" alt="App Logo" class="logo" />
        <h1>Welcome Back</h1>
        <input type="email" placeholder="Email" class="input-field" v-model="email" />
        <input type="password" placeholder="Password" class="input-field" v-model="password" />
        <button :disabled="!isFormValid" class="login-button">Login</button>
        <p class="forgot-password">Forgot Password?</p>
        <p class="signup-link">Don't have an account? Sign up</p>
        <div>
          <button @click="goToHome">Go to Home</button>
         </div>
      </div>
</template>
    
<script >
    import { ref, computed } from 'vue';
    import logoImage from '@/assets/logo.png';
    import router from '@/router';
    export default {
      name: 'IndexPage',
      setup() {
          const email = ref('');
          const password = ref('');
          const isFormValid = computed(() => email.value && password.value);
          const buttonOpacity = computed(() => (isFormValid.value? 1 : 0.5));
         return {
          logoImage,
          email,
          password,
          isFormValid,
          buttonOpacity,
        };
      },
      methods: {
        goToHome() {
          router.push('/homePage');
        }
      }
    
    };
    </script>
    
    <style scoped>
    .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .logo {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 30px;
    }
    .input-field {
      width: 300px;
      height: 40px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0 10px;
    }
    .login-button {
      width: 300px;
      height: 40px;
      background-color: #007aff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      opacity: v-bind('buttonOpacity');
    }
    .forgot-password {
      font-size: 14px;
      margin-top: 10px;
    }
    .signup-link {
      font-size: 14px;
      margin-top: 10px;
    }
    </style>
    