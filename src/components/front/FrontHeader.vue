<script>
import userStore from '@/stores/userStore';

export default {
  setup() {
    const userData = userStore();
    userData.getMyUserData();
    return { userData };
  },
};
</script>

<template>
  <div class="menu container-fluid">
    <div class="content container">
      <div class="navbar__title">
        <a href="">MetaWall</a>
      </div>
      <div class="dropdown bg-white me-2">
        <div
          class="navbar__member d-flex justify-content-center align-items-center handPointer"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img :src="userData.user.photo" :alt="userData.user.name" width="30px" height="30px" />
          <p class="ms-2">{{ userData.user.name || '尚未的入' }}</p>
        </div>
        <ul class="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
          <li class="border border-dark">
            <RouterLink to="/my-page" class="dropdown-item">我的貼文牆</RouterLink>
          </li>
          <li class="border border-dark">
            <RouterLink to="/member-setting" class="dropdown-item">修改個人資料</RouterLink>
          </li>
          <li class="border border-dark">
            <RouterLink to="/log-in" class="dropdown-item">登出</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  border-bottom: 4px solid #000400;
  margin-bottom: 49px;
}
.content {
  max-width: 872px;
  margin: 0px auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar__member p {
  font-size: 22px;
  border-bottom: 2px solid #000;
  padding-bottom: 0px;
  color: #000;
  font-weight: 900px;
}
.navbar__member img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #000;
  object-fit: cover;
  object-position: center;
}
.navbar__title a {
  font-size: 30px;
  font-weight: 1000px;

  color: #000;
}
</style>
