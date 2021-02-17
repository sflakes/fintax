<template>
  <div>
    <h2>HTML Forms</h2>
    <form v-on:submit.prevent>
      <label for="">id</label>
      <br>
      <input type="text" v-model="newData.id">
      <br>
      <label for="">EMployee Name</label>
      <br>
      <input type="text" v-model="newData.employee_name">
      <br>
      <label for="">Employee Salary</label>
      <br>
      <input type="text" v-model="newData.employee_salary">
      <br>
      <label for="">EMployee Age</label>
      <br>
      <input type="text" v-model="newData.employee_age">
      <br>
      <br>
      <!-- <input type="submit" value="Submit" v-on:submit.prevent/> -->
      <button type="submit" @click="setNewData()">submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'addData',
    data() {
      return {
        newData: [],
      }
    },
    methods: {
      setNewData() {
        // console.log('Berhasil: ', this.newData);
        this.newData
        axios
        .post("	http://dummy.restapiexample.com/api/v1/create", this.newData)
        .then(() => {
          console.log('Berhasil: ', this.newData);
        })
        .catch((err) => console.log(err))
      }
    }
};
</script>

<style>

</style>