<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ tes }}</span>|
    <button v-on:click="ganti">konfirmasi</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data(){
    return{
      tes : 'Pecobaan'
    }
  },

  methods : {
    ganti(){
      this.tes = 'Deployment'
    }
  }
  
}
</script>
