(function(){"use strict";var t={987:function(t,e,s){var a=s(144),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("TodoHeader",{on:{create:t.createNewTask}}),s("TaskList",{attrs:{task:t.newTask}})],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header",on:{submit:function(t){t.preventDefault()}}},[s("span",{staticClass:"header__text h1"},[t._v(" TODO List ")]),s("div",{staticClass:"header__inputs inputs"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"inputs__input",attrs:{type:"text"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),s("button",{staticClass:"btn btn-primary inputs__button",on:{click:t.createTask}},[t._v(" Create task ")])])])},r=[],c={data(){return{task:"",lastAction:{action:"",task:""},newTask:{id:0,task:""}}},methods:{createTask(){this.task.length>0&&(this.newTask.id=Date.now(),this.newTask.task=this.task,this.$emit("create",this.newTask),this.lastAction.action="create",this.lastAction.task=this.newTask,this.newTask={id:0,task:""},this.task="")}}},l=c,u=s(1),d=(0,u.Z)(l,i,r,!1,null,"66d25543",null),k=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"todo-list"},[s("b-list-group",t._l(t.todoTasks,(function(e){return s("b-list-group-item",{key:e.id,staticClass:"todo-list__item item"},[s("input",{staticClass:"item__tasktext",attrs:{type:"text",contenteditable:""},domProps:{value:e.task},on:{focusout:function(e){return t.handleFocusout()},input:function(s){t.editedTask={val:s.target.value,id:e.id}}}}),s("div",{staticClass:"item__buttons buttons"},[s("DeleteButton",{staticClass:"buttons__button",attrs:{currentTask:e},on:{delete:function(s){return t.deleteTask(e)}}}),s("input",{staticClass:"btn-check",attrs:{type:"checkbox",id:e.id,autocomplete:"off"}}),s("label",{staticClass:"btn btn-outline-success buttons__button",attrs:{for:e.id}},[t._v("Done")]),s("br")],1)])})),1),t.todoTasks&&t.lastAction?s("button",{staticClass:"btn btn-secondary todo-list__redo-button",on:{click:t.redoLastAction}},[t._v(" Redo ")]):t._e()],1)},h=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"myModal"+t.currentTask.id,expression:"'myModal' + currentTask.id"}]},[t._v(" Delete ")]),s("b-modal",{ref:"myModal",attrs:{id:"myModal"+t.currentTask.id},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("b-button",{attrs:{variant:"danger"},on:{click:t.deleteTask}},[t._v("Yes")]),s("b-button",{on:{click:t.hideModal}},[t._v("Later")])]},proxy:!0}])},[s("p",{staticClass:"my-4"},[t._v('Are you sure that you want to delete "'+t._s(t.currentTask.task)+'" task?')])])],1)},v=[],b={props:{currentTask:{type:Object,required:!0}},methods:{hideModal(){this.$refs["myModal"].hide()},deleteTask(){this.$emit("delete")}}},T=b,m=(0,u.Z)(T,p,v,!1,null,null,null),_=m.exports,y={components:{DeleteButton:_},props:{task:{type:Object,required:!0}},data(){return{editedTask:{val:"",id:0},todoTasks:[],lastAction:""}},mounted(){if(localStorage.getItem("tasks"))try{this.todoTasks=JSON.parse(localStorage.getItem("tasks"))}catch(t){localStorage.removeItem("tasks")}},watch:{task:function(t){this.todoTasks.unshift(t),this.lastAction="create",this.saveTasks()},editedTask:function(t){if(t.val){const e=this.todoTasks.findIndex((e=>e.id===t.id));this.todoTasks[e].task=this.editedTask.val,this.saveTasks()}}},methods:{handleFocusout(){this.editedTask={val:"",id:0}},deleteTask(t){this.todoTasks=this.todoTasks.filter((e=>e.id!==t.id)),this.lastAction="delete",this.saveTasks()},saveTasks(){const t=JSON.stringify(this.todoTasks);localStorage.setItem("tasks",t)},clearAction(){this.lastAction="",this.saveTasks()},redoLastAction(){switch(this.lastAction){case"delete":this.todoTasks.shift(),this.clearAction();break;case"create":this.todoTasks.unshift({id:Date.now(),task:this.todoTasks[0].task}),this.clearAction();break}}}},g=y,w=(0,u.Z)(g,f,h,!1,null,"3b376e81",null),O=w.exports,C={components:{TodoHeader:k,TaskList:O},data(){return{newTask:{}}},methods:{createNewTask(t){this.newTask=t}}},x=C,A=(0,u.Z)(x,n,o,!1,null,null,null),S=A.exports,j=s(32);s(44);a["default"].use(j.XG7),a["default"].config.productionTip=!1,new a["default"]({render:t=>t(S)}).$mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<i&&(i=o));if(r){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],r=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var u=c(s)}for(e&&e(a);l<i.length;l++)o=i[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},a=self["webpackChunktodo_testtask"]=self["webpackChunktodo_testtask"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(987)}));a=s.O(a)})();
//# sourceMappingURL=app.61eda08e.js.map