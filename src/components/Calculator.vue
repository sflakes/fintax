<template>
  <div class="calculator">
      <input type="number" placeholder="Masukan angka pertama">
      <br>
      <input type="number" placeholder="Masukkan angka kedua">
      <br>
      <button @click="tambah">Tambah</button>
      

  </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
        }
    },
    methods: {
        tambah () {
            
        },
    },
}
</script>

<style>

</style>