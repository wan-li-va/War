(this.webpackJsonpwar=this.webpackJsonpwar||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s),n=a(9),o=a.n(n),c=(a(16),a(1)),i=a(2),l=a(3),d=a(5),h=a(4),m=a(7),u=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).componentDidMount=function(){s.setState({myCards:s.props.cards.slice(0,26),otherCards:s.props.cards.slice(26,53),myCard:"",otherCard:"",myLoseList:[],otherLoseList:[]})},s.play=function(){var t=s.state.myCards[0],e=s.state.otherCards[0];s.setState({myCard:t,otherCard:e,myLoseList:[t],otherLoseList:[e],myCards:s.state.myCards.slice(1,s.state.myCards.length),otherCards:s.state.otherCards.slice(1,s.state.otherCards.length),isPlay:!1,isNext:!0})},s.next=function(){var t;if(console.log(s.state),s.state.myCard>s.state.otherCard)t=Object(c.a)(s.state.myCards).concat(s.state.myLoseList).concat(s.state.otherLoseList),s.setState({myCards:t,isPlay:!0,isNext:!1,myLoseList:[],otherLoseList:[]});else if(s.state.myCard<s.state.otherCard)t=Object(c.a)(s.state.otherCards).concat(s.state.otherLoseList).concat(s.state.myLoseList),s.setState({otherCards:t,isPlay:!0,isNext:!1,myLoseList:[],otherLoseList:[]});else if(s.state.myCards.length<4)s.end("lose");else if(s.state.otherCards.length<4)s.end("win");else{var e=s.state.myCards[3],a=s.state.otherCards[3],r=Object(c.a)(s.state.myCards),n=r.length,o=Object(c.a)(s.state.otherCards),i=o.length;s.setState({myCard:e,otherCard:a,myLoseList:Object(c.a)(s.state.myLoseList).concat(r.slice(0,4)),otherLoseList:Object(c.a)(s.state.otherLoseList).concat(o.slice(0,4)),myCards:s.state.myCards.slice(4,n),otherCards:s.state.otherCards.slice(4,i)})}},s.end=function(t){"win"===t?s.setState({result:"win",isNext:!1,isPlay:!1}):s.setState({result:"lose",isNext:!1,isPlay:!1})},s.state={myCards:[],otherCards:[],myCard:"",otherCard:"",isPlay:!0,isNext:!1,myLoseList:[],otherLoseList:[],result:""},s}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"buttons"},r.a.createElement(m.a,{onClick:this.play,disabled:this.state.isNext},"play"),r.a.createElement(m.a,{onClick:this.next,disabled:this.state.isPlay},"next")),r.a.createElement("div",{className:"Cards"},r.a.createElement("div",{className:"player"},r.a.createElement("p",null,"my # cards: ",this.state.myCards.length),r.a.createElement("p",null,"myCard: ",this.state.myCard)),r.a.createElement("div",{className:"player"},r.a.createElement("p",null,"other # cards: ",this.state.otherCards.length),r.a.createElement("p",null,"otherCard: ",this.state.otherCard),r.a.createElement("p",null,this.state.result))))}}]),a}(s.Component),C=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(s.Component),y=(a(17),a(18),function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).componentWillMount=function(){for(var t=Object(c.a)(s.state.cards),e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*e),r=t[e];t[e]=t[a],t[a]=r}s.setState({cards:t})},s.state={cards:[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13]},s}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to War"),r.a.createElement(u,{cards:this.state.cards}),r.a.createElement(C,null))}}]),a}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.6a63fbba.chunk.js.map