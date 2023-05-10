<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br>
    <i>Dibuat oleh {{ nama }} Pada Tahun {{ tahun }}</i>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      oleh : 'Eris',
      tahun : 2024
    }
  }
}
</script>
