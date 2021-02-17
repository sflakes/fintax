<template>
  <div class="Table">
    <h2>{{ msg }}</h2>
    <div class="info">
      <router-link :to="{ name: 'AddData' }"
        ><button>Add New Data</button></router-link
      >
      <p>total data: {{ totalData }}</p>
      <button @click="handleToggle">Change table Style</button>
    </div>
    <div class="MainTable">
      <table v-bind:class="{ darkMode: isActive }">
        <tr>
          <th>Id</th>
          <th>Employee Name</th>
          <th>Employee Salary</th>
          <th>Employee Age</th>
          <th>Action</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.employee_name }}</td>
          <td>{{ employee.employee_salary }}</td>
          <td>{{ employee.employee_age }}</td>
          <td>
            <button
              @click="deleteDataEmployee"
              style="background-color: red; color: white"
            >
              delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Table",
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
      employees: [],
      updatedDataEmployee: [],
    };
  },
  methods: {
    handleToggle() {
      this.isActive = !this.isActive;
    },
    setEmployees(data) {
      this.employees = data;
    },
    deleteDataEmployee(id) {
      axios
        .delete("http://dummy.restapiexample.com/api/v1/delete/" + id)
        .then(() => {
          alert("Berhasil menghapus");

          axios
            .get("http://dummy.restapiexample.com/api/v1/employees")
            .then((response) => this.setEmployees(response.data.data))
            .catch((error) => {
              console.log("GAGAL :", error);
            });
        })

        .catch((error) => {
          console.log("GAGAL :", error);
        });
    },
    updateDataEmployee(id) {
      axios
        .update("http://dummy.restapiexample.com/api/v1/delete/" + id)
        .then(() => {
          alert("Berhasil mengupdate");

          axios
            .get("http://dummy.restapiexample.com/api/v1/employees")
            .then((response) => this.setEmployees(response.data.data))
            .catch((error) => {
              console.log("GAGAL :", error);
            });
        })

        .catch((error) => {
          console.log("GAGAL :", error);
        });
    },
  },
  computed: {
    totalData() {
      return this.employees.length;
    },
  },
  mounted() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => this.setEmployees(response.data.data))
      .catch((error) => {
        console.log("GAGAL :", error);
      });
  },
};
</script>

<style lang="sass" scoped>
table
    font-family: arial, sans-serif
    border-collapse: collapse
    width: 70%
    margin: auto
    margin-top: 2rem

td, th
    border: 1px solid #dddddd
    text-align: left
    padding: 8px

tr:nth-child(even)
    background-color: #dddddd

button
    height: 2rem
    border-radius: 5px
    cursor: pointer
    outline: none
    border-style: none

.darkMode
    background-color: #404040
    color: white
</style>