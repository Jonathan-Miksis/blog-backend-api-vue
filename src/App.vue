<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/posts/new">New Post</router-link> |
      <router-link to="signup">Signup</router-link> |
      <router-link to="login">Login</router-link> |
      <router-link to="logout">Logout</router-link> |
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/posts">ArtWorld</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/posts/new">New Art Post</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Authentication
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/login">Login</a></li>
            <li v-if="isLoggedIn()"><a class="dropdown-item" href="/logout">Signout</a></li>
            <li><hr class="dropdown-divider"></li>
            <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/signup">Signup</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="container">
  logged in? {{ isLoggedIn() }}
    <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Andale Mono','Lucida Grande', Verdana, sans-serif;
  background-image: url('./assets/chevron.png');
  text-align: center;
}

</style>

<script>
  export default {
    methods: {
      isLoggedIn: function() {
        console.log('is logged in?');
        console.log(localStorage.getItem("jwt"));
        if (localStorage.getItem("jwt")) {
          return true;
        }   else {
          return false;
      }
    }
  }
}
</script>

