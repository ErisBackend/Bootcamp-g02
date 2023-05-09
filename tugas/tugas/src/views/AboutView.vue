<template>
    <body>
        <Navbar/>
        <Footer/>
    </body>
          
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'AboutView',
        components:{
            Navbar,
            Footer,
        }
    }
</script>