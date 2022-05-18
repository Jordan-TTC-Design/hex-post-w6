import { defineStore } from 'pinia';
import axios from 'axios';

const postsStore = defineStore({
  id: 'postsStore',
  state: () => ({
    posts: [],
    targetPost: {
      postContent: '',
      postImgUrl: '',
      tags: [],
    },
  }),
  getters: {},
  actions: {
    getPosts(timeSort = 'asc', query = '') {
      console.log(`https://hex-node-w6.herokuapp.com/posts/all?timeSort=${timeSort}&q=${query}`);
      axios
        .get(`https://hex-node-w6.herokuapp.com/posts/all?timeSort=${timeSort}&q=${query}`)
        .then((res) => {
          console.log(res.data);
          this.posts = res.data.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addPost(data) {
      console.log(data);
      const token = localStorage.getItem('hex-w6-token');
      console.log(token);
      axios({
        method: 'POST',
        url: 'https://hex-node-w6.herokuapp.com/posts',
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          return res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    async upLoadImage(data) {
      let resultData = null;
      const formdata = new FormData();
      formdata.append('image', data);
      const config = {
        method: 'POST',
        url: 'https://hex-node-w6.herokuapp.com/other/image',
        data: formdata,
      };
      try {
        const res = await axios(config);
        console.log(res);
        resultData = res.data;
      } catch (err) {
        console.dir(err);
      }
      return resultData;
    },
  },
});
export default postsStore;
