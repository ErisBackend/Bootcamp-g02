<template>
    <h1 class="product1">Product</h1>
    <div class="product">
        <div class="boxpro">
            <div v-for="du in dummys1">
                <div class="chard">

                    <!-- <div class="boxduabelas">
                        <h3 class="a">12.12</h3>
                    </div>  -->

                    <div class="des">
                        <h2 class="pro">Product</h2>
                        <p class="idr">IDR.$ 1.000</p>
                    <button class="beli">beli</button>
                    <img class="like" src="../assets/likem.png" alt="">

                    </div> 
                </div>

            </div>
        </div>
    </div>
    <ul class="aaa">
        <li><button class=" buttt">{{ '<' }}</button></li>
        <li><button class=" buttt">{{ '1' }}</button></li>
        <li><button class=" buttt">{{ '...' }}</button></li>
        <li><button class=" buttt">{{ '12' }}</button></li>
        <li><button class=" buttt">{{ '>' }}</button></li>
    </ul>
    

</template>

<script>
    export default {
        name: 'Product',
       
        data(){
            return {
                dummys1:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
            }
        }
    }
</script>

<style>
    .boxpro{
        width: 80%;
        /* padding: 10px; */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        height: max-content;
        /* background-color: aqua; */
        margin: auto;
        /* margin-top: 16px; */
    }
    .product1{
        margin-top: 20px;
        text-align: left;
        margin-left: 130px;
        font-size: 25px;
        padding-bottom: 10px;
        font-weight: lighter;
    }
    .aaa{
        /* position: absolute; */
        left: 50px;
    } 
    li{
        display: inline-block;
    } 
    .buttt{
        width: 50px;
        height: 30px;
        background-color:#0D6EFD;
        border-radius: 5px;
        border: none;
        margin-top: 20px;
        margin-right: 30px;
        margin-bottom: 20px;
        color: white;
        cursor: pointer;

    }
</style>

