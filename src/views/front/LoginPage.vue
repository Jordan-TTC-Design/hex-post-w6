<script>
import userStore from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userData = userStore();
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    async function login() {
      try {
        const result = await userData.logIn(email.value, password.value);
        console.log(result);
        if (result) {
          router.push('/');
        } else {
          console.log('帳密錯誤');
        }
      } catch (err) {
        console.log(err);
      }
    }
    return { login, email, password };
  },
};
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-8 col-12 h-100 d-flex justify-content-center align-items-center">
        <div class="border border-dark p-8">
          <div class="row row-cols-2 gx-7">
            <div class="col d-flex align-items-center">
              <img class="mw-100" src="@/assets/image/login-img.svg" alt="登入圖片" />
            </div>
            <div class="col">
              <form class="d-flex flex-column" @submit.prevent="login">
                <h2 class="fw-bold text-primary text-center">MetaWall</h2>
                <p class="fw-bold text-dark text-center mb-7">到元宇宙展開全新社交圈</p>
                <div class="input-group inputToolContainer mb-3">
                  <input
                    type="text"
                    class="form-control inputTool"
                    placeholder="Email"
                    v-model="email"
                  />
                </div>
                <div class="input-group inputToolContainer mb-6">
                  <input
                    type="text"
                    class="form-control inputTool"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">登入</button>
                <RouterLink to="/sign-up" class="btn">註冊帳號</RouterLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
