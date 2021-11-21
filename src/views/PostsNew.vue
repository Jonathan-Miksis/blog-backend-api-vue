<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
    <h1>New Post</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <div>
      <label>Title:</label>
      <input type="text" v-model="newPostParams.title" />
    </div>
    <div>
      <label>Body:</label>
      <input type="text" v-model="newPostParams.body" />
      <small v-if="newPostParams.body.length > 0 && newPostParams.body.length <= 100"> {{ 100 - newPostParams.body.length }} characters remaining </small>
      <small class="text-danger" v-if="newPostParams.body.length > 100">Body is too long</small>
    </div>
    <div>
      <label>Image:</label>
      <input type="text" v-model="newPostParams.image" />
    </div>
    <input type="submit" value="Submit" />
  </form>
</div>
</template >

  <script>
    import axios from "axios";

    export default {
      data: function () {
      return {
      newPostParams: { 
        title: "",
        body: "",
        image: "",
      },
    errors: []
      };
    },
    methods: {
      submit: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      }
    }
  };
  </script>