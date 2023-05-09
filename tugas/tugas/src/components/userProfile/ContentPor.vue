<template>
    <div class="kotprofile">
        <div class="kot1profile">
            <router-link to=""><img class="logouser" src="../../assets/user.png" alt="">
                <div class="editpro">
                    <router-link to=""><img class="pen" src="../../assets/pen.png" alt=""></router-link>
                    <router-link class="bb" to="">Edit Profile</router-link>
                </div>
                <h3>Eris Sitompul</h3>
                <h5>a@gmail.com</h5>
            </router-link>
        </div>
        <div class="kot2profile">
            <h3 class="judulpro">Profile Saya</h3>
            <h5 class="judulpro1">Kelola Informasi profile Anda untuk megontrol,melindungi dan mengamankan akun</h5>
            
            <div class="kotakeditpro">
                    <form action="">
                        <table>
                            <tr>
                                <td class="label"><label for="">usernama</label></td>
                                <td class="tdd">eris</td>
                            </tr>
                            <tr>
                                <td class="label"><label for="">nama</label></td>
                                <td class="tdd"><input class="inputtd" type="text"></td>
                            </tr>
                            <tr>
                                <td class="label"><label for="">no.hp</label></td>
                                <td class="tdd"><input class="inputtd" type="text"></td>
                            </tr>
                            <tr>
                                <td class="label"><label for="">email</label></td>
                                <td class="tdd"><input class="inputtd" type="text"></td>
                            </tr>
                            <tr>
                                <td class="label"><label for="">nama toko</label></td>
                                <td class="tdd"><input class="inputtd" type="text"></td>
                            </tr>
                            <tr>
                                <td class="label"><label for="">jeis kelamin</label></td>
                                <td class="tdd">
                                    <input type="radio">laki-laki
                                    <input type="radio">perempuan
                                </td >
                            </tr>
                            <tr>
                                <td class="label"><label for="">tanggal lahir</label></td>
                                <td><input class="inputtd" type="date"></td>
                            </tr>
                            
                        </table>
                       
                    </form>
                <button type="submit">Simpan</button>
            </div>

        </div>
    </div>

</template>

<script>
  export default {
    name: 'ContentPor',
  }
</script>

<style>
    .kotprofile{
        width: 80%;
        height: max-content;
        /* background-color: aqua; */
        margin: auto;
        display: flex;
    }
    .kot1profile{
        width: 400px;
        height: 500px;
        background-color: blue;
        float: left;
        position: relative;
    }
    .kot2profile{
        width: 700px;
        height: 500px;
        /* background-color: brown; */
    
    }
    .logouser{
        width: 150px;
        margin-top: 100px;
        color: blue;
    }
    .pen{
        width: 15px;
        position: absolute;
        left: 20px;
        top: 3px;
    }
    .editpro{
        width: 130px;
        height: 30px;
        background-color: cornflowerblue;
        position: relative;
        top: -50px;
        right: -135px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
    }
    .bb{
        font-size: 10px;
        position: absolute;
        top: 8px;
        left: 50px;
    }
    .judulpro{
        margin-top: 30px;
        text-align: left;
    }
    .judulpro1{
        margin-top: 5px;
        text-align: left;margin-bottom: 10px;
    }
   .kotakeditpro{
    width: 600px;
    height: 400px;
    /* background-color: aqua; */
    margin-left: 50px;
   }
  .label{
    text-align: right;
    padding-right: 30px;
  }
  .inputtd{
   
    width: 300px;
    height: 30px;
    border-radius: 5px;
  }
  tr{
    margin-top: 20px;
  }
  button{
    background-color: blue;
    width: 100px;
    height: 30px;
    /* margin-top: 30px; */
    border: 1px solid;
    border-radius: 5px;
    color: aliceblue;
    cursor: pointer;
  }
   
  
</style>