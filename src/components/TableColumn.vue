<template>
  <el-table-column :label="columnsHeader.label" :prop="columnsHeader.label">
    <template v-for="item in columnsHeader.children">
      <tableColumn
        v-if="item.children && item.children.length"
        :key="item.id"
        :columns-header="item"
        :label="item.name"
        align="center"
      ></tableColumn>
      <el-table-column
        v-else
        :key="item.id"
        :label="item.name"
        :prop="item.prop"
        :width="item.width || 120"
        align="center"
      >
      </el-table-column>
    </template>
  </el-table-column>
</template>

<script>
export default{
  name: "tableColumn",

  props: {
    columnsHeader: {
      type: Object,
      required: true,
    },
  },

}
</script>