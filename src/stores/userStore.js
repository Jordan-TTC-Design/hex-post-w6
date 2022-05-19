import { defineStore } from 'pinia';
import axios from 'axios';

const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    user: {},
    tempUser: { photo: '' },
    targetUser: { id: '' },
  }),
  getters: {},
  actions: {
    async getUserData() {
      const token = localStorage.getItem('hex-w6-token') || '';
      return axios({
        method: 'GET',
        url: 'https://hex-node-w6.herokuapp.com/users/profile',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.user = res.data.data;
          this.tempUser = res.data.data;
          console.log(this.user);
          return res.data.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    async updateUserData(data) {
      console.log(data);
      const token = localStorage.getItem('hex-w6-token') || '';
      return axios({
        method: 'PATCH',
        url: 'https://hex-node-w6.herokuapp.com/users/profile',
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.user = res.data.data;
          return res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    async updateMyPassword(oldPassword, password, confirmPassword) {
      const token = localStorage.getItem('hex-w6-token') || '';
      return axios({
        method: 'POST',
        url: 'https://hex-node-w6.herokuapp.com/users/update-password',
        data: { oldPassword, password, confirmPassword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.logIn(this.user, password);
          return res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    async logIn(email, password) {
      console.log(email, password);
      return axios
        .post('https://hex-node-w6.herokuapp.com/users/log-in', { email, password })
        .then((res) => {
          console.log(res);
          if (res.status) {
            this.user = res.data.user;
            localStorage.setItem('hex-w6-token', res.data.user.token);
          }
          return res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    signUp(data) {
      console.log(data);
      axios
        .post('https://hex-node-w6.herokuapp.com/users/sign-up', data)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          localStorage.setItem('hex-w6-token', res.data.user.token);
          return res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
});
export default userStore;
