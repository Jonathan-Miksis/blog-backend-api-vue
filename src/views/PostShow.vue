<template>
  <div class="posts-show">
    <h1>{{ message }}</h1>
      <p>Id: {{ post.id }}</p>
      <p>Title: {{post.title}}</p>
      <p>Body: {{post.body}}</p>
      <img v-bind:src="post.image">
  </div>
</template>

<style></style>

<script>
import axios from 'axios'

  export default {
    data: function () {
      return {
        message: "Check out this post!",
        post: {},
      };
    },
    created: function () {
      console.log("hello");
      this.postShow();
    },
    methods: {
      postShow: function() {
        console.log('pulling up the post..');
        axios.get("/posts/" + this.$route.params.id).then(response => {
          console.log(response.data);
          this.post = response.data;
        })
      }
    },
  };
</script>