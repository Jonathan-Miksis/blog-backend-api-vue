<template>
  <div class="posts-index">
    <div class="container">
    <h1>{{ message }}</h1>
    <!-- <div v-for="post in posts">
      <p>Title: {{post.title}}</p>
      <router-link v-bind:to="`/posts/${post.id}`">
      <img v-bind:src="post.image"> -->
      <div class="row">
        Search: <input type="text" v-model="searchTerm">
        <div class="col-sm-6" v-for="post in filterBy(posts, searchTerm, 'title')">
          <div class="card text-center" style="width: 18rem;">
            <img v-bind:src="post.image" class="card-img-top" v-bind:alt="post.title">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <a v-bind:href="`/posts/${post.id}`" class="btn btn-primary">More about this Artwork</a>
            </div>
          </div>
        </div>
      </div>
      <!-- </router-link>
      <hr> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from 'axios'
import Vue2Filters from "vue2-filters";

  export default {
    mixins: [Vue2Filters.mixin],
    data: function () {
      return {
        message: "Welcome to all of the Art!",
        posts: [],
        searchTerm: ""
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
      },
    },
  };
</script>