<template>
  <div>
    <dynamic-table
      :columns="columns"
      :tableData="list"
      :mergeHeader="mergeHeader"
    />
  </div>
</template>

<script>
  import DynamicTable from "./components/DynamicTable.vue";
  export default {
    components: {
      DynamicTable,
    },

    data(){
      return {
        columns:[
          {
            name: '设备XXXX',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '成本分项',
                    prop: 'industry',
                    id: '3',
                    width: 120
                  }
                ]
              }
            ]
          },
          {
            name: '项目类型：居住建筑',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '成本分项',
                    prop: 'custname',
                    id: '3',
                    width: 160
                  }
                ]
              }
            ]
          },
          {
            name: '项目阶段：施工图',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '成本分项',
                    prop: 'draftTypeName',
                    id: '3',
                    width: 150
                  }
                ]
              }
            ]
          },
          {
            name: '所属部门：XXX部',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '历史实收难度',
                    id: '3',
                    children:[
                      {
                        prop: 'history',
                        id: '4',
                        width: 150,
                        name:"预算值"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '项目经理：ABC',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                id: '2',
                prop: 'class',
                children:[
                  {
                    name: '历史实收难度',
                    id: '3',
                    children:[
                      {
                        id: '4',
                        prop: 'happenVal',
                        width: 150,
                        name:"实际发生率"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '项目团队(名单不展开)',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '当年实收难度',
                    id: '3',
                    children:[
                      {
                        prop: 'curBudget',
                        id: '4',
                        width: 150,
                        name:"预算值"
                      },
                      {
                        prop: 'curRate',
                        id: '4',
                        width: 200,
                        name:"实际发生率"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '设计团队（2018年5月）',
            prop: 'num',
            id: '1',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '累计实收难度',
                    id: '3',
                    children:[
                      {
                        prop: 'accuBudget',
                        id: '4',
                        width: 180,
                        name:"预算值"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '返回项目收支表',
            id: '1',
            prop: 'num',
            children: [
              {
                name: '相关联报表: 点击后跳转XXX项目产值利润表',
                prop: 'class',
                id: '2',
                children:[
                  {
                    name: '累计实收难度',
                    id: '3',
                    children:[
                      {
                        prop: 'accuRate',
                        id: '4',
                        width: 200,
                        name:"实际发生率"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        list:[
        {
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
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"机电",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"给排水",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"电气",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {

          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"暖通",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {

          "industry":"工作量",
          "custname":"设计工作量（按相关专业情况）",
          "draftTypeName":"小计",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '',
          'curRate': '',
          'accuBudget': '',
          'accuRate': ''
        },
        {

          "industry":"工作量",
          "custname":"非设计工作量",
          "draftTypeName":"非设计工作量",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '当年实收*预算比例',
          'curRate': '当年实收*预算比例',
          'accuBudget': '当年实收*预算比例',
          'accuRate': '当年实收*预算比例',
        },
        {

          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"经营费用",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {

          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"效果图模型",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {

          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"晒图文本",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777

        },
        {

          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"差旅",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {

          "industry":"非人工成本",
          "custname":"直接成本（点击链接）",
          "draftTypeName":"其他（加班费）",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': 123,
          'curRate': 145,
          'accuBudget': 555,
          'accuRate': 777
        },
        {
   
          "industry":"非人工成本",
          "custname":"小计",
          "draftTypeName":"小计",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '',
          'curRate': '',
          'accuBudget': '',
          'accuRate': ''
        },
        {
    
          "industry":"非人工成本",
          "custname":"间接成本",
          "draftTypeName":"间接成本",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '当年实收*预算比例',
          'curRate': '当年费用',
          'accuBudget': '累计实收*预算比例',
          'accuRate': '累计费用',
        },
        {
          "industry":"毛利",
          "custname":"毛利",
          "draftTypeName":"毛利",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '当年实收*预算比例',
          'curRate': '当年实收-工作量-非人工成本',
          'accuBudget': '累计实收*预算比例',
          'accuRate': '累计实收-工作量-非人工成本',
        },
        {
        
          "industry":"合计",
          "custname":"合计",
          "draftTypeName":"合计",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '当年实收产值',
          'curRate': '当年实收产值',
          'accuBudget': '累计实收',
          'accuRate': '累计实收',
        },
        {
          
          "industry":"运营效率",
          "custname":"运营效率",
          "draftTypeName":"运营效率",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '标准区间',
          'curRate': '',
          'accuBudget': '',
          'accuRate': '',
        },
        {
         
          "industry":"毛利率",
          "custname":"毛利率",
          "draftTypeName":"毛利率",
          "history": "备注：历史年份数据做汇总",
          "happenVal" :"备注：历史年份数据做汇总",
          'curBudget': '预算比例',
          'curRate': '当年实收产值毛利/当年实收',
          'accuBudget': '预算比例',
          'accuRate': '当年实收产值毛利/当年实收',
        },
        ]
      }
    },

    methods:{
      mergeHeader({row, colunm, rowIndex, columnIndex}){
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