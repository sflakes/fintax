<template>
  <div class="home">
    <Table msg="Employee Table"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'

export default {
  name: 'Tables',
  components: {
    Table,
  },
}
</script>
