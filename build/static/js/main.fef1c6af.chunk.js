(this.webpackJsonpmypoker=this.webpackJsonpmypoker||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"a":"https://node-poker.poker-at-vasili.com/"}')},44:function(e,t,a){},45:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),r=a.n(s),l=(a(44),a(45),a(4)),i=a.n(l),j=a(14),o=a(8),d=a(9),b=a(10),h=a(11),u=a(0),p=function(){return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"\u05e9\u05dd"}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:"\u05db\u05de\u05d4 \u05e4\u05e8\u05d5\u05d8"}),Object(u.jsx)("td",{children:"\u05db\u05e1\u05e3 \u05d1\u05d9\u05d3"}),Object(u.jsx)("td",{children:"\u05e8\u05d5\u05d5\u05d7"}),Object(u.jsx)("td",{})]})})},O=function(e){var t=e.player,a=e.selectPlayer;return Object(u.jsx)("div",{className:" col-4 col-md-6  col-lg-4 col-xl-2 mt-2 ",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:""+"images/".concat(t.name,".jpg"),className:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{className:t.selected?"card-body bg-success":"card-body",children:[Object(u.jsx)("div",{className:"card-title text-center",children:t.name}),Object(u.jsx)("button",{type:"button",onClick:a,className:"btn btn-primary align-self-center",children:"+Add Player"})]})]})})},x=a(17),m=a.n(x),g={get:m.a.get,post:m.a.post,put:m.a.put,patch:m.a.patch,delete:m.a.delete},f=a(13),v=a(19),y=a.n(v),N=a(22);a(35);var C={getPlayers:function(){return g.get("".concat(f.a,"/players"))},getCurrentPlayers:function(){try{var e=localStorage.getItem("playersInfo");return JSON.parse(e)}catch(t){return null}}};var k={postGames:function(e){return g.post("".concat(f.a,"/games"),e)},getLastGame:function(e){return g.get("".concat(f.a,"/games/lastgame"),e)}},w=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleChange=function(t){e.props.player.cashInHand=t.target.value,e.props.changeInput(e.props.player)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.addCashing,n=e.undoCashing;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.selected&&t.name}),Object(u.jsx)("td",{children:t.selected&&Object(u.jsxs)("p",{className:"pt-3",children:[Object(u.jsx)("i",{className:"fas fa-money-bill-wave text-success mr-1",onClick:function(){return a(t.id)}}),"\u05d4\u05d5\u05e1\u05e3 \u05e4\u05e8\u05d9\u05d8\u05d4"]})}),Object(u.jsx)("td",{children:t.selected&&t.cashing}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"number",onChange:this.handleChange})}),Object(u.jsx)("td",{children:Object(u.jsx)("i",{children:Object(u.jsx)("b",{children:t.selected&&t.cashInHand-t.cashing})})}),Object(u.jsx)("td",{children:t.selected&&Object(u.jsxs)("p",{className:"pt-3",children:[Object(u.jsx)("i",{className:"fas fa-undo-alt text-danger mr-1",onClick:function(){return n(t.id)}}),"\u05d1\u05d8\u05dc \u05e4\u05e8\u05d9\u05d8\u05d4"]})})]},t.id)}}]),a}(n.Component),S=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={players:[]},e.addCashing=function(t){y.a.fire({title:"?\u05d1\u05d8\u05d5\u05d7 \u05dc\u05e4\u05e8\u05d5\u05d8 \u05dc\u05d5",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u05db\u05df \u05ea\u05e4\u05e8\u05d5\u05d8 \u05dc\u05d5"}).then((function(a){if(a.isConfirmed){var n=e.state.players;n[t-1].cashing+=50;var c=JSON.stringify(n);localStorage.setItem("playersInfo",c),e.setState({players:n}),new Audio("audio/cash.mp3").play(),y.a.fire("\u05e0\u05d5\u05e1\u05e4\u05d4 \u05e4\u05e8\u05d9\u05d8\u05d4 \u05dc\u05e9\u05d7\u05e7\u05df")}}))},e.undoCashing=function(t){var a=e.state.players;if(a[t-1].cashing>0){a[t-1].cashing-=50,y.a.fire("\u05d1\u05d5\u05d8\u05dc\u05d4 \u05d4\u05e4\u05e8\u05d9\u05d8\u05d4"),new Audio("audio/notify.mp3").play();var n=JSON.stringify(a);localStorage.setItem("playersInfo",n),e.setState({players:a})}},e.onInputChange=function(t){var a=e.state.players;a[t.id-1].cashInHand=t.cashInHand,e.setState({players:a})},e.updateGame=Object(j.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y.a.fire({title:"?\u05d1\u05d8\u05d5\u05d7 \u05e0\u05d2\u05de\u05e8 \u05d4\u05de\u05e9\u05d7\u05e7",text:"\u05dc\u05d0 \u05ea\u05d5\u05db\u05dc \u05dc\u05d1\u05d8\u05dc",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u05e0\u05d2\u05de\u05e8"}).then((function(t){if(t.isConfirmed){var a=e.state.players;(a=a.filter((function(e){return e.selected}))).map((function(t){return t.profit=t.cashInHand-t.cashing,t.num_of_cashing=t.cashing/50,e.setState({players:a}),localStorage.removeItem("playersInfo"),k.postGames(t)})),e.props.history.replace("/lastgame"),N.b.success("GAME OVER",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}));case 1:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getPlayers();case 2:t=e.sent,a=t.data,this.setState({players:a}),(n=C.getCurrentPlayers())?this.setState({players:n}):console.log(n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectPlayer",value:function(e){new Audio("audio/push.mp3").play();var t=this.state.players;t[e-1].selected=!t[e-1].selected,this.setState({players:t})}},{key:"render",value:function(){var e=this,t=this.state.players;return Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsxs)("div",{className:"appSelect col align-self-end text-right",children:[Object(u.jsx)("p",{className:"",children:"\u05d1\u05d7\u05e8 \u05d4\u05d0\u05dd \u05d4\u05de\u05e9\u05d7\u05e7 \u05d1\u05dc\u05d9\u05d9\u05d1/\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4"}),Object(u.jsxs)("select",{name:"app",id:"",className:"",children:[Object(u.jsx)("option",{value:"\u05dc\u05d9\u05d9\u05d1",children:"\u05dc\u05d9\u05d9\u05d1"}),Object(u.jsx)("option",{value:"\u05dc\u05d9\u05d9\u05d1",children:"\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4"}),Object(u.jsx)("option",{value:"\u05dc\u05d9\u05d9\u05d1",children:"\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4 \u05dc\u05d0 \u05dc\u05d8\u05d1\u05dc\u05d4"})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"choose col align-self-end text-right ",children:"\u05d1\u05d7\u05e8 \u05e9\u05d7\u05e7\u05e0\u05d9\u05dd \u05e9\u05d9\u05e9\u05ea\u05ea\u05e4\u05d5 \u05d1\u05de\u05e9\u05d7\u05e7"}),Object(u.jsx)("div",{className:"row",children:t.map((function(t){return Object(u.jsx)(O,{player:t,selectPlayer:function(){e.selectPlayer(t.id)}},t.id)}))}),Object(u.jsxs)("table",{className:"myTable mt-3 table-responsive",border:"2px solid black",children:[Object(u.jsx)(p,{}),Object(u.jsx)("tbody",{children:t.map((function(t){return Object(u.jsx)(w,{player:t,addCashing:function(){e.addCashing(t.id)},undoCashing:function(){e.undoCashing(t.id)},changeInput:e.onInputChange,getId:e.getId},t.id)}))})]}),Object(u.jsx)("button",{type:"button",className:"btn btn-primary btn-lg mt-3 border",onClick:this.updateGame,children:"Update Results"})]})}}]),a}(n.Component),I=a(15),P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(I.b,{className:"navbar-brand",to:"/",children:[Object(u.jsx)("img",{src:"images/logo-wings.jpeg",alt:"logo"}),Object(u.jsx)("br",{}),"Poker @ Vasili"]}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(I.c,{className:"nav-link active","aria-current":"page",to:"/",children:"Main tables"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(I.c,{className:"nav-link","aria-current":"page",to:"/games",children:"Start a new game"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(I.c,{className:"nav-link",to:"/lastgame",children:"Last Game"})})]})})]})})}}]),a}(n.Component),T=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={players:[],date:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getLastGame();case 2:t=e.sent,a=t.data,console.log(a),this.setState({players:a}),this.setState({date:a[0].date});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.players,t=this.state.date;return console.log(t),Object(u.jsxs)("div",{className:"container ",children:[Object(u.jsxs)("div",{className:"datelast text-center",children:[Object(u.jsx)("h2",{children:"\u05de\u05e9\u05d7\u05e7 \u05d0\u05d7\u05e8\u05d5\u05df"}),Object(u.jsx)("h3",{children:t.slice(0,10)}),Object(u.jsx)("h3",{children:t.slice(-13,-5)})]}),Object(u.jsxs)("table",{className:"myTable",border:"2px solid black",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"p-2",children:"\u05de\u05d9\u05e7\u05d5\u05dd"}),Object(u.jsx)("td",{className:"p-2",children:"\u05e9\u05d7\u05e7\u05df"}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:"\u05e8\u05d5\u05d5\u05d7"}),Object(u.jsx)("td",{children:"\u05de\u05e1\u05e4\u05e8 \u05e4\u05e8\u05d9\u05d8\u05d5\u05ea"})]})}),Object(u.jsx)("tbody",{children:e.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.rank}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:""+"images/".concat(e.name,".jpg"),alt:"",className:"lastgame"})}),Object(u.jsx)("td",{children:e.profit}),Object(u.jsx)("td",{children:e.num_of_pritot})]},e.name)}))})]})]})}}]),a}(n.Component);var _={getTable:function(){return g.get("".concat(f.a,"/table"))}},A=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={table:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getTable();case 2:t=e.sent,a=t.data,this.setState({table:a[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.table;return Object(u.jsxs)("div",{className:"mt-3 ",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:Object(u.jsx)("u",{children:"\u05e4\u05d9\u05e8\u05d5\u05d8 \u05de\u05e9\u05d7\u05e7\u05d9\u05dd"})})}),Object(u.jsxs)("table",{className:"myTable",border:"3px solid black",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"bg-info bg-gradient",children:[Object(u.jsx)("td",{children:"\u05ea\u05d0\u05e8\u05d9\u05da"}),Object(u.jsx)("td",{children:"\u05e9\u05dd"}),Object(u.jsx)("td",{children:"\u05e4\u05e8\u05d9\u05d8\u05d5\u05ea"}),Object(u.jsx)("td",{children:"\u05e8\u05d5\u05d5\u05d7"})]})}),Object(u.jsx)("tbody",{children:e.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.date.slice(0,10)}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.cashing}),Object(u.jsx)("td",{className:e.profit>0?"bg-success":"bg-danger",children:e.profit})]},e.date+e.name+e.profit)}))})]})]})}}]),a}(n.Component),B=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={table:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getTable();case 2:t=e.sent,a=t.data,this.setState({table:a[1]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.table;return Object(u.jsxs)("div",{className:"container mt-3 ",children:[Object(u.jsx)("h1",{children:"League Table"}),Object(u.jsx)("img",{src:"images/logo-cup.jpeg",className:" logo-cup",alt:"logo-cup"}),Object(u.jsxs)("h2",{children:[" ",(new Date).getDate()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getFullYear()]}),Object(u.jsxs)("div",{className:"table-responsive",children:[Object(u.jsxs)("table",{className:"myTable",border:"3px solid black",children:[Object(u.jsx)("thead",{className:"bg-primary",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"\u05de\u05e7\u05d5\u05dd"}),Object(u.jsx)("td",{children:"\u05e9\u05dd"}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:"\u05e8\u05d5\u05d5\u05d7"}),Object(u.jsx)("td",{children:"\u05e8\u05d5\u05d5\u05d7 \u05de\u05de\u05d5\u05e6\u05e2"}),Object(u.jsx)("td",{children:"\u05de\u05e1 \u05de\u05e9\u05d7\u05e7\u05d9\u05dd"}),Object(u.jsx)("td",{children:"\u05de\u05e9\u05d7\u05e7\u05d9\u05dd \u05d1\u05e4\u05dc\u05d5\u05e1"}),Object(u.jsx)("td",{children:"\u05d0\u05d7\u05d5\u05d6 \u05d4\u05e6\u05dc\u05d7\u05d4"}),Object(u.jsxs)("td",{children:["\u05db\u05de\u05d5\u05ea \u05e4\u05e8\u05d9\u05d8\u05d5\u05ea ",Object(u.jsx)("br",{}),"\u05de\u05de\u05d5\u05e6\u05e2\u05ea"]}),Object(u.jsx)("td",{children:"\u05de\u05e9\u05d7\u05e7 \u05d0\u05d7\u05e8\u05d5\u05df"})]})}),Object(u.jsx)("tbody",{children:e.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.rank}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:""+"images/".concat(e.name,".jpg"),alt:"",className:"lastgame "})}),Object(u.jsx)("td",{className:e.profit>0?"text-success":"text-danger",children:e.profit}),Object(u.jsx)("td",{children:e.avg_profit}),Object(u.jsx)("td",{children:e.num_of_games}),Object(u.jsx)("td",{children:e.is_plus}),Object(u.jsxs)("td",{children:[e.success_percentage,"%"]}),Object(u.jsx)("td",{children:e.avg_num_of_pritot}),Object(u.jsx)("td",{children:e.last_game.slice(0,10)})]},e.name)}))})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(A,{})]})]})}}]),a}(n.Component),D=function(){return Object(u.jsxs)("p",{className:"text-center border-top pt-3",children:["Created By Nadav Galili \xa9 ",(new Date).getFullYear()]})},G=a(2);var M=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(N.a,{}),Object(u.jsx)(P,{})]}),Object(u.jsx)("main",{style:{minHeight:900},children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)(G.a,{path:"/lastgame",component:T}),Object(u.jsx)(G.a,{path:"/games",component:S}),Object(u.jsx)(G.a,{exact:!0,path:"/",component:B})]})}),Object(u.jsx)("footer",{children:Object(u.jsx)(D,{})})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(38),a(69),a(70),a(71);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I.a,{children:Object(u.jsx)(M,{})})}),document.getElementById("root")),H()}},[[73,1,2]]]);
//# sourceMappingURL=main.fef1c6af.chunk.js.map