<template>
   <div class="box">
    <div class="box2">
        <div class="box3">
            <h1 class="jakarta">Jakarta</h1>
            <div class="box5">
                <img class="awan" src="../assets/awan.png" alt="">
            </div>
            <div class="box4">
                <h2 class="berawan">Berawan , 31&deg;c</h2>
            </div>
            <div class="garis">

            </div>
            <div class="keep">
                <h2 class="keep">Keep save</h2>
            </div>
            
        </div>
    </div>
    <HelloWorld/>
   </div>
   
</template>



<script>
import HelloWorld from './HelloWorld.vue';

    export default{
    name: "ComPonen",
    components: { HelloWorld }
}
</script>

<style>
   .box{
    width: auto;
    height: 795px;
    
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    
   }
   .box2{
    width: 650px;
    height: 795px;
    
    float: left;
   }
   .box3{
    width: 550px;
    height: 795px;

    float: right;
 
   }
   .jakarta{
    color: white;
    font-size: 130px;
    margin-top: 170px;
   }
   .box4{
    width: 450px;
    height: 90px;
    background-color: #cbcfd1;
    margin-left: 20px;
    border-radius: 20px;
    opacity: 80%;

   }
   .box5{
    width: 90px;
    height: 90px;

    position: absolute;


   }
   .awan{
    width: 120px;
    height: 120px;
    position: relative;
    float: right;
    z-index: 999;

   }
   .berawan{
    font-size: 50px;
    padding-left: 80px;
    color: white;
    font-weight: 100;
    padding-top: 18px;
   }
   .garis{
    width: auto;
    height: 5px;
    background-color: aliceblue;
    margin-top: 20px;
   }
   .keep{
    color: white;
    font-weight: 150px;
    font-size: 55px;
   }
</style>
