(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),i=(a(37),a(9)),s=a(1);a(38);var l=function(e){return console.log(e),o.a.createElement("div",{className:"about__container"},o.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),o.a.createElement("span",null,"- George Orwell, 1984"))},u=a(15),m=a.n(u),p=a(29),v=a(10),d=a(11),f=a(13),h=a(12),E=a(30),b=a.n(E),y=(a(57),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_mocies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return o.a.createElement("section",{className:"container"},t?o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader__text"},"loading...")):o.a.createElement("div",{className:"movies"},a.map((function(e){return o.a.createElement("movie",{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image})}))))}}]),a}(o.a.Component));a(58);var g=function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(i.b,{to:"/"},"Home"),o.a.createElement(i.b,{to:"/about"},"About"))},_=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?o.a.createElement("span",null,e.state.title):null}}]),a}(o.a.Component);var j=function(){return o.a.createElement(i.a,null,o.a.createElement(g,null),o.a.createElement(s.a,{path:"/",exact:!0,component:y}),o.a.createElement(s.a,{path:"/about",component:l}),o.a.createElement(s.a,{path:"/movie-detail",component:_}))};c.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.07f00b96.chunk.js.map