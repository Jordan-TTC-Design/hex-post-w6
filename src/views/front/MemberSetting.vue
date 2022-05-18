<script>
import { ref } from 'vue';
import PageTitleBox from '@/components/front/PageTitleBox.vue';
import postsStore from '@/stores/postsStore';
import userStore from '@/stores/userStore';

export default {
  components: {
    PageTitleBox,
  },
  setup() {
    const userData = userStore();
    const postsData = postsStore();
    const password = ref('');
    const oldPassword = ref('');
    const confirmPassword = ref('');
    const pageNavSelect = ref(1);
    const imgUploadGetter = ref(null);
    const editPhoto = ref(false);
    const imgData = ref(null);
    const imgHistory = ref('');
    function toogleGetter() {
      const [file] = imgUploadGetter.value.files;
      imgData.value = file;
      console.log(file);
      imgHistory.value = userData.tempUser.photo;
      const imgShow = window.URL || window.webkitURL;
      userData.tempUser.photo = imgShow.createObjectURL(imgData.value);
      editPhoto.value = true;
      console.log(editPhoto.value, userData.tempUser.photo, imgData.value);
    }
    async function updateUserData() {
      console.log(userData.tempUser);
      if (editPhoto.value === true) {
        console.log('開始上傳');
        try {
          const result = await postsData.upLoadImage(imgData.value);
          console.log(result);
          if (result.status) {
            userData.tempUser.photo = result.data;
          }
          userData.updateUserData(userData.tempUser);
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log('沒上傳');
        userData.tempUser.photo = imgHistory.value;
        userData.updateUserData(userData.tempUser);
      }
    }
    return {
      userData,
      imgUploadGetter,
      imgData,
      pageNavSelect,
      password,
      confirmPassword,
      oldPassword,
      toogleGetter,
      updateUserData,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-7">
        <PageTitleBox class="mb-6" title-content="修改個人資料" />
        <ul class="contentNav">
          <li
            :class="{ active: pageNavSelect === 1 }"
            class="contentNav__item"
            @click="pageNavSelect = 1"
          >
            暱稱修改
          </li>
          <li
            :class="{ active: pageNavSelect === 2 }"
            class="contentNav__item"
            @click="pageNavSelect = 2"
          >
            重設密碼
          </li>
        </ul>
        <form
          v-if="pageNavSelect === 1"
          @submit.prevent="updateUserData"
          class="border border-dark p-6 d-flex flex-column align-items-center"
        >
          <div class="userImg mb-6">
            <img class="userImg__img" :src="userData.tempUser.photo" alt="用戶底圖" />
            <label class="userImg__btn" for="imgUploader">變更照片</label>
            <input
              ref="imgUploadGetter"
              id="imgUploader"
              class="d-none"
              type="file"
              @change="toogleGetter"
              accept="image/png, image/jpeg"
            />
          </div>
          <div class="w-75 d-flex flex-column gap-3">
            <div>
              <label for="setting-userName" class="form-label">暱稱</label>
              <input
                type="text"
                class="form-control inputTool"
                placeholder="請輸入您的暱稱"
                id="setting-userName"
                aria-label="Username"
                v-model="userData.tempUser.name"
              />
            </div>
            <div>
              <label class="form-label">性別</label>
              <div class="d-flex gap-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="setting-gender"
                    id="setting-gender-male"
                    v-model="userData.tempUser.gender"
                    value="male"
                  />
                  <label class="form-check-label" for="setting-gender-male"> 男性 </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="setting-gender"
                    id="setting-gender-female"
                    v-model="userData.tempUser.gender"
                    value="female"
                  />
                  <label class="form-check-label" for="setting-gender-female"> 女性 </label>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">送出更新</button>
          </div>
        </form>
        <div
          v-if="pageNavSelect === 2"
          class="border border-dark p-6 d-flex flex-column align-items-center"
        >
          <form
            class="w-75 d-flex flex-column gap-3"
            @submit.prevent="userData.updateMyPassword(email, password)"
          >
            <div>
              <label for="setting-oldPassword" class="form-label">原密碼</label>
              <input
                type="text"
                class="form-control inputTool"
                placeholder="請輸入原密碼"
                id="setting-oldPassword"
                v-model="oldPassword"
              />
            </div>
            <div>
              <label for="setting-newPassword" class="form-label">新密碼</label>
              <input
                type="text"
                class="form-control inputTool"
                placeholder="請輸入新密碼"
                id="setting-newPassword"
                v-model="password"
              />
            </div>
            <div>
              <label for="setting-rePassword" class="form-label">再次輸入</label>
              <input
                type="text"
                class="form-control inputTool"
                placeholder="再次輸入新密碼"
                id="setting-rePassword"
                v-model="confirmPassword"
              />
            </div>
            <button type="submit" class="btn btn-primary">重設密碼</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.userImg {
  border-radius: 50%;
  border: 2px solid #000;
  width: 108px;
  height: 108px;
  position: relative;
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
  &__btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    white-space: nowrap;
    z-index: 100;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;
  }
  &:hover {
    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
.contentNav {
  display: flex;
  &__item {
    padding: 0.25rem 1rem;
    border: 2px solid #000;
    border-bottom: 0;
    border-radius: 0.5rem 0.5rem 0 0;
    color: black;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
    &.active {
      background-color: black;
      color: white;
    }
  }
}
</style>
