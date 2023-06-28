<template>
  <el-table
    :data="tableData"
    class="el-table__header"
    style="width: 100%"
    :span-method="objectSpanMethod"
    :header-cell-style="mergeHeader"
    :row-style="{height:'26px'}"
    :cell-style="{padding: '0'}"
    :border="true">
    <template v-for="item in columns">
      <table-column
        v-if="item.children && item.children.length"
        :key="item.id"
        :columns-header="item"
        :label="item.name"
      ></table-column>
      <el-table-column
        v-else
        :label="item.name"
        :prop="item.prop"
        :key="item.id"
      >
     </el-table-column>
    </template>
  </el-table>
</template>

<script>
import TableColumn from "./TableColumn.vue";
  export default {
    name:'dynamicTable',

    data(){
      return {
        colSpanArr: {},
        rowSpanArr: [],
        headerArr: [],
        pos: '',
        arr: [],
        keys: []
      }
    },

    components: {
      TableColumn,
    },

    props: {
      // 表格的数据
      tableData: {
        type: Array,
        required: true,
      },
      // 多级表头的数据
      columns: {
        type: Array,
        required: true,
      },
      mergeHeader:{
        type: Function,
        required: ()=>{}
      }
    },

    created(){
      this.getColSpanArr();
      this.getRowSpanArr(this.tableData,this.keys,this.rowSpanArr);
      this.getHeaderArr();
      console.log(this.mergeHeader,"44")
    },

    methods:{
      getHeaderArr(){
        const mapArr =new Map();
        this.dealColumns(mapArr,this.columns);
        this.getHeaderSpanArr(Array.from(mapArr||[]),this.headerArr)
      },

      dealColumns(mapArr,columns){
        columns.map(item=>{
          this.arr = [];
          if(item.children){
            this.arr.push(item)
            mapArr.set(item.id,[...Array.from(mapArr.get(item.id)||[]),...this.arr])
            this.dealColumns(mapArr,item.children)
          }else{
            this.arr.push(item)
            mapArr.set(item.id,[...Array.from(mapArr.get(item.id)||[]),...this.arr])
          }
        })
      },

      getHeaderSpanArr(arr,newArr){
        arr.map(item=>{
          this.arr = [];
          this.pos = 0;
          let dulp = 1;
          item[1].map((_item,index)=>{
            if(index===0){
              this.arr.push(1);
              this.pos = 0
            }else{
              if (_item.name === item[1][index-1].name) {
                this.arr[this.pos] -= dulp;
                this.pos=index
                this.arr.push(++dulp);
              } else {
                this.arr.push(1);
                this.pos = index;
                dulp=1
              }
            }
          })
          newArr.push(this.arr);
        })
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        return{
          rowspan: this.colSpanArr[column.property][rowIndex],
          colspan: this.rowSpanArr[rowIndex][columnIndex],
        }
      },

      getColSpanArr(){
        this.keys = Object.keys(this.tableData[0]);
        this.keys.map(item=>{
          this.arr =[]
          this.pos = 0;
          for (var i = 0; i < this.tableData.length; i++) {
            if (i === 0) {
                this.arr.push(1);
                this.pos = 0
            } else {
              // 判断当前元素与上一个元素是否相同
              if (this.tableData[i][item] === this.tableData[i - 1][item]) {
                this.arr[this.pos] += 1;
                this.arr.push(0);
              } else {
                this.arr.push(1);
                this.pos = i;
              }
            }
          }
          this.colSpanArr[item] = this.arr;
        })
      },

      getRowSpanArr(data,children,arr){
        data.map(item=>{
          this.arr = [];
          this.pos = 0;
          children.map((key,index)=>{
            if(index===0){
              this.arr.push(1);
              this.pos = 0
            }else{
              if (item[key] === item[children[index-1]]) {
                this.arr[this.pos] += 1;
                this.arr.push(0);
              } else {
                this.arr.push(1);
                this.pos = index;
              }
            }
          })
          arr.push(this.arr);
        })
      }
    }
  }
</script>