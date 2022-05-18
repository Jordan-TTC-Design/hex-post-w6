import { defineStore } from 'pinia';
import axios from 'axios';

const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    user: {},
    tempUser: { photo: '' },
  }),
  getters: {},
  actions: {
    getMyUserData() {
      const token = localStorage.getItem('hex-w6-token');
      axios({
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
    updateUserData(data) {
      console.log(data);
      const token = localStorage.getItem('hex-w6-token');
      axios({
        method: 'PATCH',
        url: 'https://hex-node-w6.herokuapp.com/users/profile',
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          // this.user = res.data.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateMyPassword(oldPassword, password, confirmPassword) {
      const token = localStorage.getItem('hex-w6-token');
      axios({
        method: 'POST',
        url: 'https://hex-node-w6.herokuapp.com/users/update-password',
        data: { oldPassword, password, confirmPassword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          // this.user = res.data.data;
          this.logIn(this.user, password);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    logIn(email, password) {
      console.log(email, password);
      axios
        .post('https://hex-node-w6.herokuapp.com/users/log-in', { email, password })
        .then((res) => {
          console.log(res);
          if (res.status) {
            this.user = res.data.user;
            localStorage.setItem('hex-w6-token', res.data.user.token);
          }
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
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
});
export default userStore;
