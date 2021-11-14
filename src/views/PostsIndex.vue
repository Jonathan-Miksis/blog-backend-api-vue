<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <p>Title: {{post.title}}</p>
      <p>Body: {{post.body}}</p>
      <img v-bind:src="post.image">
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from 'axios'

  export default {
    data: function () {
      return {
        message: "Welcome to Posts!",
        posts: [],
      };
    },
    created: function () {
      this.postsIndex();
    },
    methods: {
      postsIndex: function() {
        console.log('looking at all the posts..');
        axios.get('/posts').then(response => {
          console.log(response.data);
          this.posts = response.data;
        })
      }
    },
  };
</script>