(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),i=a.n(s),u=(a(14),a(2)),o=a(3),l=a(5),c=a(4),m=a(6),h=a(1),d=function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=[];e.map(function(e,t){return"X"===e&&a.push(t),0});var r=[];return e.map(function(e,t){return"O"===e&&r.push(t),0}),t.find(function(e){return e.every(function(e){return a.includes(e)})})?"X":t.find(function(e){return e.every(function(e){return r.includes(e)})})?"O":null};function p(e){return n.a.createElement("button",{className:"square squareID-"+e.squareId,onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(l.a)(this,Object(c.a)(t).call(this,e));var r=e.squareToRender;return console.log(r),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){return n.a.createElement(p,{squareId:e,value:this.props.squareToRender[e],onClick:this.props.onClick})}},{key:"render",value:function(){var e=this;console.log(this.props.xIsNext);var t="Next player: ".concat(this.props.xIsNext?"X":"O");return n.a.createElement("div",null,n.a.createElement("div",{className:"status"},t),[0,1,2].map(function(t,a){return n.a.createElement("div",{className:"board-row",key:a},e.renderSquare(3*a),e.renderSquare(3*a+1),e.renderSquare(3*a+2))}))}}]),t}(r.Component),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={history:[Array(9).fill(null)],stepNumber:0,xIsNext:!0,isGameOver:!1},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a.jumpTo=a.jumpTo.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderHistory",value:function(e){var t=this;return e.map(function(e,a){return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){t.jumpTo(a),console.log("jump to ",a)}},"Go to move #$",a))})}},{key:"handleClick",value:function(e){var t=e.target.className,a=t.slice(t.indexOf("squareID-")+9),r=this.state.history[this.state.stepNumber].slice();if(this.state.isGameOver)alert("Game over");else if(null===r[a]){r[a]=this.state.xIsNext?"X":"O";var n=d(r),s=this.state.history.slice(0,this.state.stepNumber+1);s.push(r),this.setState({history:s,stepNumber:this.state.stepNumber+1,xIsNext:!this.state.xIsNext,isGameOver:Boolean(n)})}else alert("this spot was filled already")}},{key:"jumpTo",value:function(e){var t=this;this.setState({stepNumber:e},function(){console.log("stepNum: ",t.state.stepNumber)})}},{key:"render",value:function(){var e=this.state.history[this.state.stepNumber];return console.log("state stepNum:",this.state.stepNumber),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,{squareToRender:e,onClick:this.handleClick,xIsNext:this.state.xIsNext})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,"history"),n.a.createElement("ol",null,this.renderHistory(this.state.history))),n.a.createElement("div",{className:"winnerDeclarer"},this.state.isGameOver?"Game Over! Winner: "+d(e):""))}}]),t}(r.Component);i.a.render(n.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.1a1bd021.chunk.js.map