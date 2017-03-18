
var json =
  [
  {id:1,material_name:'铁iron',department:'制造部门',material_kind:'金属 metal',add_time:'2017-02-13',modify_time:'2017-02-14'},
  {id:2,material_name:'金刚石 diamond',department:'制造部门',material_kind:'非金属 nonmental',add_time:'2017-02-14',modify_time:'2017-02-16'},
  {id:3,material_name:'PVC',department:'制造部门',material_kind:'塑料 plastic',add_time:'2017-02-17',modify_time:'2017-02-18'},
  {id:4,material_name:'蛋白质 protein',department:'生物部门',material_kind:'有机物 organics',add_time:'2017-02-19',modify_time:'2017-02-20'},
  {id:5,material_name:'水 water',department:'生物部门',material_kind:'化合物 chemical compound',add_time:'2017-02-21',modify_time:'2017-02-22'},
  {id:6,material_name:'玻璃 glass ',department:'化工部门',material_kind:'复合材料 composite',add_time:'2017-02-22',modify_time:'2017-02-23'},
  // {id:7,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:8,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:1,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:2,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:3,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:4,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:5,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:6,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:7,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''},
  // {id:8,material_name:'iron',department:'hr',material_kind:'',add_time:'',modify_time:''}
];
function remove(arr,item){
  for(var i =0; i < arr[i].length;i++){
    if(arr[i]['id']===item){
      arr.splice(i,1);
    }
  }
}
var app = new Vue({
  el: '#table',
  data: {
    tableList:json
  },
  methods:{
    dele:function(id){
      // alert(json[id-1]['id'])
      
      for(var i =0; i < json.length;i++){
        if(json[i]['id']===id){
          json.splice(i,1);
        }
      }
      // remove(json,id);
      alert("删除成功！");

    }
  }
});
function add(){
  document.getElementById('light').style.display='block';
  document.getElementById('fade').style.display='block';
}
new Vue({
  el:"#light",
  date:{
    input1:'',
    input2:'',
    input3:''
  },
  created: function() {
        // the created hook is called after the instance is created
    },
  methods:{
    get_data: function(div){
      document.getElementById(div).style.display='none';
      document.getElementById('fade').style.display='none';
      var data1 = this.input1;
      var data2 = this.input2;
      var data3 = this.input3;
      var length = json.length;
      length = length+1;
      currenttime = getNowFormatDate();
      json.push({id:length,material_name:data1,department:data2,material_kind:data3,add_time:currenttime,modify_time:currenttime});

      // console.log(data1{id:length+1,material_name:data1,department:data2,material_kind:data3});

    }
  }
});
function ok(div){
  document.getElementById(div).style.display='none';
  document.getElementById('fade').style.display='none';

}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

// var button_delete = new Vue({
//   el:'#table_data',
//   methods:{
//     delete:function(id){
//       alert(id);
//     }
//   }
// });
