<template>
  <div id="app">
    <div class="app__row">
      <app-card
        :info-card="info"
        v-for="(info, key) in data"
        :key="key"
        class="app__card"
      ></app-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    appCard: () => import('@/components/Card.vue'),
  },
  data() {
    return {
      img: '',
      value1: '',
      data: [],
    }
  },
  mounted() {
    let loadingData = this.$vs.loading({
      type: 'circles',
      text: 'Carregando',
      color: '#990000'
    })
    this.$axios.get('/characters').then(({ data: res }) => {
      console.log(res.data.results)
      res.data.results.forEach((obj) => this.data.push(obj))
      this.img = res.data.results[0].thumbnail.path + '/portrait_xlarge.jpg'
      loadingData.close();
    })
    this.$vs.setTheme('dark')
    
  },
}
</script>

<style scoped>
  #app {
    padding: 30px 0;
  }

  .app__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .app__card {
    margin: 20px 0;
  }
</style>