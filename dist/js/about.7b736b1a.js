"use strict";(self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[]).push([[443],{2058:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{"before-close":e.handleClose,title:"提示",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{inline:!0,model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请输入性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{label:"出生日期"}},[t("el-form-item",{attrs:{prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"请选择日期","value-format":"yyyy-MM-DD"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1)],1),t("el-form-item",{attrs:{label:"地址",prop:"addr"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.cancel()}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{staticClass:"manage-header"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd()}}},[e._v("+ 新增")])],1),t("div",{staticClass:"common-table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(1==l.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleEdit(l.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(l.row)}}},[e._v("删除")])]}}])})],1)],1)],1)},r=[],s=l(586),i={data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{pattern:/^[a-zA-Z\u4e00-\u9fa5]+$/,message:"只能输入中文或字母!"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],sex:[{required:!0,message:"请输入性别",trigger:"blur"}],birth:[{required:!0,message:"请输入日期",trigger:"blur"}],addr:[{required:!0,message:"请输入地址",trigger:"blur"}]},tableData:[],tableLabel:{name:"姓名",sex:"性别",age:"年龄",birth:"出生日期",addr:"地址"},modelType:0}},methods:{submit(){this.$refs.form.validate((e=>{console.log(e,"valid"),e&&(0===this.modelType?(0,s.cn)(this.form).then((()=>{this.handelUser()})):(0,s.uz)(this.form).then((()=>{this.handelUser()})),this.dialogVisible=!1,this.$refs.form.resetFields())}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},cancel(){this.handleClose()},handleEdit(e){this.modelType=1,this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e))},handleDelete(e){this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,s.ti)({id:e.id}).then((()=>{this.$message({type:"success",message:"删除成功!"}),this.handelUser()}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},handleAdd(){this.modelType=0,this.dialogVisible=!0},handelUser(){(0,s.PR)().then((({data:e})=>{console.log(e,"data"),this.tableData=e.list}))}},mounted(){this.handelUser()}},o=i,n=l(1001),d=(0,n.Z)(o,a,r,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=about.7b736b1a.js.map