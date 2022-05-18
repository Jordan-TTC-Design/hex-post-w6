<script>
import userStore from '@/stores/userStore';
import { ref } from 'vue';

export default {
  setup() {
    const userData = userStore();
    const email = ref('');
    const password = ref('');
    const passwordReset = ref({
      title: '你的大學是？',
      answer: '台大',
    });
    const gender = ref('male');
    const name = ref('');
    const photo = ref('');
    return {
      userData,
      name,
      email,
      password,
      gender,
      passwordReset,
      photo,
    };
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
              <form
                @submit.prevent="
                  userData.signUp({ name, email, password, passwordReset, gender, photo })
                "
                class="d-flex flex-column"
              >
                <h2 class="fw-bold text-primary text-center">MetaWall</h2>
                <p class="fw-bold text-dark text-center mb-7">註冊</p>
                <div class="input-group inputToolContainer mb-3">
                  <input
                    type="text"
                    class="form-control inputTool"
                    placeholder="暱稱"
                    v-model="name"
                  />
                </div>
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
                <button type="submit" class="btn btn-light border border-dark">註冊</button>
                <RouterLink to="/log-in" class="btn">返回登入</RouterLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
