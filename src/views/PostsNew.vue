<template>
  <div class="NewPost">
    <form v-on:submit.prevent="submit()">
      <h1>Create new post </h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="email" v-model="newPostParams.body" />
      </div>
      <div>
        <label>image:</label>
        <input type="password" v-model="newPostParams.image">
      </div>

      <input type="submit" value="Submit"/>
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newPostParams: {},
        errors: [],
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/PostsNew", this.newPostParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/PostsNew");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
  };
</script>
