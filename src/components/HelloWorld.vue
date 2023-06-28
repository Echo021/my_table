<template>
  <div>
  <h2 class="table_title">XXX项目实收收支表</h2>
  <el-table
    :data="list"
    style="width: 100%"
    :span-method="objectSpanMethod"
    :header-cell-style="headerFirst"
    :row-style="{height:'26px'}"
    :cell-style="{padding: '0'}"
    :border="true">

    <el-table-column label="设备XXXX">
      <el-table-column
      label="相关联报表: 点击后跳转XXX项目产值利润表"
      >
        <el-table-column
          prop="industry"
          label="成本分项"
          width="120"
          align="center">
        </el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column label="项目类型：居住建筑">
      <el-table-column
      >
        <el-table-column
          prop="custname"
          label="成本分项"
          width="160"
          align="center">
        </el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column label="项目阶段：施工图">
      <el-table-column
      >
        <el-table-column
          prop="draftTypeName"
          label="成本分项"
          width="150"
          align="center">
        </el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column label="所属部门：XXX部">
      <el-table-column>
        <el-table-column label="历史实收难度" align="center">
          <el-table-column
            prop="history"
            label="预算值"
            width="140"
            align="center">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table-column>

    <el-table-column label="项目经理：ABC">
      <el-table-column>
        <el-table-column label="历史实收难度" align="center">
          <el-table-column 
            label="实际发生率" 
            width="150" 
            prop="happenVal"
            align="center">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table-column>

    <el-table-column label="项目团队(名单不展开)" align="center">
      <el-table-column>
        <el-table-column label="当年实收难度" align="center">
          <el-table-column
            prop="curBudget"
            label="预算值"
            width="150"
            align="center">
          </el-table-column>
          <el-table-column label="实际发生率" width="200" prop="curRate" align="center"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table-column>

    <el-table-column label="设计团队（2018年5月）">
      <el-table-column>
        <el-table-column label="累计实收难度" align="center">
        <el-table-column
          prop="accuBudget"
          label="预算值"
          width="180"
          align="center">
        </el-table-column>
      </el-table-column>
      </el-table-column>
    </el-table-column>

    <el-table-column label="返回项目收支表">
      <el-table-column label="相关联报表: 点击后跳转XXX项目产值利润表">
        <el-table-column label="累计实收难度" align="center">
          <el-table-column label="实际发生率" width="200" prop="accuRate" align="center"></el-table-column>
      </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import { listHandle } from './utlis.js'

export default{
  data(){
    return {
      list:[
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"建筑",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"结构",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777

        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"机电",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"给排水",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"电气",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"暖通",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"小计",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': '',
          'curRate': '',
          'accuBudget': '',
          'accuRate': ''
        },
        {
          "rowNum":null,
          "industry":"工作量",
          "custname":"非设计工作量",
          "draftTypeName":"非设计工作量",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :" ",
          'curBudget': '当年实收*预算比例',
          'curRate': '当年实收*预算比例',
          'accuBudget': '当年实收*预算比例',
          'accuRate': '当年实收*预算比例',
        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"经营费用",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"效果图模型",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"晒图文本",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777

        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"差旅",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"其他（加班费）",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"小计",
          "draftTypeName":"小计",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"",
          'curBudget': '',
          'curRate': '',
          'accuBudget': '',
          'accuRate': ''
        },
        {
          "rowNum":null,
          "industry":"非人工成本",
          "custname":"间接成本",
          "draftTypeName":"间接成本",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :" ",
          'curBudget': '当年实收*预算比例',
          'curRate': '当年实收*预算比例',
          'accuBudget': '累计实收*预算比例',
          'accuRate': '累计实收*预算比例',
        },
        {
          "rowNum":null,
          "industry":"毛利",
          "custname":"",
          "draftTypeName":"",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :" ",
          'curBudget': '当年实收*预算比例',
          'curRate': '当年实收-工作量-非人工成本',
          'accuBudget': '累计实收*预算比例',
          'accuRate': '累计实收-工作量-非人工成本',
        },
        {
          "rowNum":null,
          "industry":"合计",
          "custname":"",
          "draftTypeName":"",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :" ",
          'curBudget': '当年实收产值',
          'curRate': '当年实收产值',
          'accuBudget': '累计实收',
          'accuRate': '累计实收',
        },
        {
          "rowNum":null,
          "industry":"运营效率",
          "custname":"",
          "draftTypeName":"",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :" ",
          'curBudget': '标准区间',
          'curRate': '',
          'accuBudget': '',
          'accuRate': '',
        },
        {
          "rowNum":null,
          "industry":"毛利率",
          "custname":"",
          "draftTypeName":"",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :" ",
          'curBudget': '预算比例',
          'curRate': '当年实收产值毛利/当年实收',
          'accuBudget': '预算比例',
          'accuRate': '当年实收产值毛利/当年实收',
        },
      ]
    }
  },
  created(){
   //合并单元格（此方法需要结合this.$listHandle(res.data.dat.list)处理过的数据）
   this.list = listHandle(this.list);
  },
    methods:{
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // console.log(row,"rowIndex",columnIndex,rowIndex)
        if (rowIndex === 7 || rowIndex === 13 || rowIndex === 14) {
          if (columnIndex === 1) {
            return {
              rowspan: 1,
              colspan: 2,
            };
          } else if (columnIndex === 2) {
            return [0, 0];
          }
        }
        if (rowIndex === 7 || rowIndex === 16) {
          if (columnIndex === 5 || columnIndex === 7) {
            return {
              rowspan: 1,
              colspan: 2,
            };
          } else if (columnIndex === 6 || columnIndex === 8) {
            return [0, 0];
          }
        }
        if(rowIndex >= 15){
          if (columnIndex === 0) {
            return {
              rowspan: 1,
              colspan: 3,
            };
          } else if (columnIndex === 1 || columnIndex === 2) {
            return [0, 0];
          } 
        }
        
        if (columnIndex === 3) {
          if (rowIndex ===0) {
            return {
              rowspan: 19,
              colspan: 2
            };
          }else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
        if (columnIndex === 4) {
          if (rowIndex >=0) {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
    //  //找到第一列
        if (columnIndex === 0) {
          if (row.industrycount > 1) {
            return {
              rowspan: row.industrycount,
              colspan: 1,
            };
          } else if(row.industrycount === 1){
            return {
              rowspan: 1,
              colspan: 1,
            };
          }else{
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        }
        //第二列与第一列同理
       if (columnIndex === 1) {
         if (row.custnamecount > 1) {
           return {
             rowspan: row.custnamecount,
             colspan: 1,
           };
         } else if (row.custnamecount === 1) {
           return {
             rowspan: 1,
             colspan: 1,
           };
         } else {
           return {
             rowspan: 0,
             colspan: 0,
           };
         }
        }

      },
      headerFirst({row, colunm, rowIndex, columnIndex}){
        if(rowIndex === 0){
          return {background: "#9090ec",color:"#000"}
        }else if(rowIndex===1){
          row[7].colSpan=9
          if(columnIndex <7){
            return {
              display: 'none'
            }
          }
        }else if(rowIndex===2){
          row[2].colSpan=3
          row[4].colSpan=2
          row[7].colSpan=2
          if(columnIndex === 0 || columnIndex===1 || columnIndex===3 || columnIndex===6 ){
            return {
              display: 'none'
            }
          }
          if(columnIndex === 4){
            return { background: "#7474a7", color: "#000" };
          }else if(columnIndex === 5 || columnIndex === 7){
            return { background: "orange", color: "#000" };
          }
        }
        return {background: "#FFF",color:"#000"}
      }
    }
  }
</script>

<style>
  .table_title{
    display: flex;
    justify-content: center;
  }
</style>

