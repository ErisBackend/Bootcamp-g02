<template>
  <div id="box">
    <h3 id="judul">Chard</h3>
    <table>
      <th>
        <tr id = 'tr'>Nama Lengkap </tr><br>
        <tr id = 'tr'>Alamat Lengkap </tr><br>
        <tr id = 'tr'>Pendidikan terahir </tr><br>
      </th>
      <th>
        <tr id = 'tr'>:</tr><br>
        <tr id = 'tr'>:</tr><br>
        <tr id = 'tr'>:</tr><br>
      </th>

       </table>
  </div>
</template>

<script>


export default {
  name: 'KartuId'

}
</script>

<style>
#box {
  width: 400px;
  height: 200px;
  background-color: rgb(38, 99, 63);
  margin: auto;
  border-radius: 20px;
  padding-left: 20px;
}
#judul{
    font-style: italic;
    color: aliceblue;
    text-align: center;
    font-weight: bolt;
    font-size: 20px;
    padding-top: 10px;
}

#tr{
  color: aliceblue;
  text-align: left;
}
</style>
