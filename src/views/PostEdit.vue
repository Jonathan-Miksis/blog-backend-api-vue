<template>
  <div class="post-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editPost.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="editPost.body" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="editPost.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        editPost: {},
        errors: []
      };
    },
    methods: {
      submit: function () {
        axios
          .patch("/posts/" + this.$route.params.id, this.editPost)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/posts");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
      getPost: function() {
        axios.get("/posts/" + this.$route.params.id).then(response => {
          console.log(response.data);
          this.editPost = response.data;
        })
      }
    },
    created: function() {
      this.getPost();
    },
  };
</script>