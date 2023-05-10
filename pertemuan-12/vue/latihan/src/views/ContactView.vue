<template>
    <div class="contact">
      <h1>Contact</h1>
      <div class="content" v-for="data in kontak">
        <ul class="ul">
            <li>{{data.name }}</li>
            <li>{{data.email}}</li>
            <div v-if="data.Phone===''">
                <li><i>tidak punya hp</i></li>
            </div>
            <div v-else>
                <li>{{data.Phone}}</li>
            </div>
            
        </ul>
      </div>
    </div>
  </template>

  <script>
    export default{
        name:'ContactView',
        data(){
            return{
                kontak : [
                {
                        name : "eris",
                        email : 'eris@gmail.com',
                        Phone : '123xxxxxxxx',
                    },
                    {
                        name : "pangondian",
                        email : 'pangondian@gmai.com',
                        Phone : '123xxxxxxxx',
                    },
                    {
                        name : "sitompul",
                        email : 'sitompul@gmail.com',
                        Phone : '',
                    },
                ]
            }
                   
                
        }
    }
 </script>
 <style>
    .ul{
        border: 1px solid;
        width: 300px;
        height: 55px;
        margin: auto;

    }
    ul{
        list-style: none;
        text-align: left;
        color: blue;
    }
</style>