<template>
  <div id="app">
    <img alt="Vue logo" :src="img">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      img: ''
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    this.$axios.get("/characters").then(async ({data: res}) => {
      console.log(res.data.results)
      this.img = res.data.results[0].thumbnail.path + '/portrait_xlarge.jpg'

    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
