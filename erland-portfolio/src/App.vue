<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  .gradient-button {
    // background: linear-gradient(to right top, #834E66, #3D3A61, #5A919B, #CBA67B, #74A79E);
    border: 1px solid black;
    border-radius: 100px;
    display: inline-block;
    padding: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
    transition: all ease-in 0.2s;
    &:hover {
      cursor: pointer;
    }
  }

  .gradient-button span {
    background: #fff;
    display: block;
    border-radius: 80px;
    padding: 0 30px;
    height: 38px;
    line-height: 38px;
    &:hover {
      background: rgba(255, 255, 255, 0.93)
    }
  }

  .container {
    text-align: center;
    a {
      &:hover {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.56);
      }
    }
  }

  #app {
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1,
  h2 {
    font-weight: normal;
  }
</style>