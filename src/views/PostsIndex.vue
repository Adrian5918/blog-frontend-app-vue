<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
    <p> {{ posts }} </p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Here's all you need to see!",
        posts: [],
      };
    },
    created: function () {
      this.PostsIndex();
    },
    methods: {
      // axios.get(/"PostsIndex").then(response => {
      //   console.log("hello");
      //   PostsIndex = response.data;
      // })
    }
  };
</script>
