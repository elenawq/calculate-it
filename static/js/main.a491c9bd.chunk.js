(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(n,e,t){n.exports=t(21)},17:function(n,e,t){},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),x=(t(17),t(18),t(1)),p=t(2),c=t(4),l=Object(a.createContext)(),u=function(n){var e=n.children,t=Object(a.useState)("0"),o=Object(c.a)(t,2),i=o[0],x=o[1],p=Object(a.useState)(""),u=Object(c.a)(p,2),b=u[0],d=u[1],g=Object(a.useState)(""),s=Object(c.a)(g,2),h=s[0],m=s[1],f=function(){d(i),x("")};return r.a.createElement(l.Provider,{value:{handleSetStoredValue:f,handleClearValue:function(){x("0")},handleSetDisplayValue:function(n){(!i.includes(".")||"."!==n)&&i.length<8&&x("".concat((i+n).replace(/^0+/,"")))},handleBackButton:function(){""===i&&x("0"),x(i.substring(0,i.length-1))},handleSetCalcFunction:function(n){i&&(m(n),f()),b&&m(n)},number:i,math:function(){if(i&&b)switch(h){case"+":d("".concat(Math.round("".concat(100*(parseFloat(b)+parseFloat(i))))/100));break;case"-":d("".concat(Math.round("".concat(100*(parseFloat(b)-parseFloat(i))))/100));break;case"x":d("".concat(Math.round("".concat(parseFloat(b)*parseFloat(i)*1e3))/1e3));break;case"/":d("".concat(Math.round("".concat(parseFloat(b)/parseFloat(i)*1e3))/1e3))}console.log(i,b),x("")},storedNumber:b,setNumber:x,handleNegative:function(){if(i)if(i>0)x("-".concat(i));else{var n=i.slice(1);x(n)}else if(b>0)d("-".concat(b));else{var e=b.slice(1);d(e)}}}},e)};function b(){var n=Object(x.a)(["\n  background-color: #425062;\n  color: white;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 10px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  border: none;\n  width: 100px;\n  height: 100px;\n  font-family: Montserrat;\n  margin: 5px;\n  font-size: x-large;\n  @media (max-width: 415px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 12.5px;\n    font-size: medium;\n  }\n"]);return b=function(){return n},n}var d=p.a.button(b()),g=function(n){var e=n.sign,t=Object(a.useContext)(l).handleSetDisplayValue;return r.a.createElement(d,{onClick:function(){return t(e)}},e)};function s(){var n=Object(x.a)(["\n  background-color: #425062;\n  color: white;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 10px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  border: none;\n  width: 100px;\n  height: 100px;\n  font-family: Montserrat;\n  margin: 5px;\n  display: inline-block;\n  font-size: x-large;\n  @media (max-width: 415px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 12.5px;\n    font-size: medium;\n  }\n"]);return s=function(){return n},n}var h=p.a.button(s()),m=function(n){var e=n.sign,t=Object(a.useContext)(l).handleSetCalcFunction;return r.a.createElement(h,{type:"button",onClick:function(){return t(e)}},e)};function f(){var n=Object(x.a)(["\n  background-color: #425062;\n  color: red;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 10px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  border: none;\n  width: 100px;\n  height: 100px;\n  font-family: Montserrat;\n  margin: 5px;\n  display: inline-block;\n  font-size: x-large;\n  @media (max-width: 415px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 12.5px;\n    font-size: medium;\n  }\n"]);return f=function(){return n},n}var w=p.a.button(f()),v=function(n){n.sign;var e=Object(a.useContext)(l).handleClearValue;return r.a.createElement(w,{onClick:e},"C")};function E(){var n=Object(x.a)(['\n    position: relative;\n    width: auto;\n    margin-bottom: 30px;\n    border-radius: 25px;\n    font-family: "Montserrat";\n    color: white;\n    height: 80px;\n    text-align: right;\n    padding-right: 20px;\n    padding-top: 50px;\n    font-size: x-large;\n    box-shadow: inset 0px 0px 20px -10px rgba(0, 0, 0, 0.75);\n  ']);return E=function(){return n},n}var k=function(n){n.result;var e=Object(a.useContext)(l),t=e.number,o=e.storedNumber,i=p.a.div(E());return r.a.createElement(i,null,t.length||o?t||o:"0")};function j(){var n=Object(x.a)(["\n  background-color: #425062;\n  color: white;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 10px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  border: none;\n  width: 100px;\n  height: 100px;\n  font-family: Montserrat;\n  margin: 5px;\n  display: inline-block;\n  font-size: x-large;\n  @media (max-width: 415px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 12.5px;\n    font-size: medium;\n  }\n"]);return j=function(){return n},n}var O=p.a.button(j()),C=function(){var n=Object(a.useContext)(l).handleBackButton;return r.a.createElement(O,{onClick:n},"\u2190")};function y(){var n=Object(x.a)(["\n  background-color: #425062;\n  color: white;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 10px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  border: none;\n  width: 100px;\n  height: 100px;\n  font-family: Montserrat;\n  margin: 5px;\n  display: inline-block;\n  font-size: x-large;\n  @media (max-width: 415px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 12.5px;\n    font-size: medium;\n  }\n"]);return y=function(){return n},n}var z=p.a.button(y()),M=function(){var n=Object(a.useContext)(l).math;return r.a.createElement(z,{onClick:n},"=")};function S(){var n=Object(x.a)(["\n  background-color: #425062;\n  color: white;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n    0 10px 80px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  border: none;\n  width: 100px;\n  height: 100px;\n  font-family: Montserrat;\n  margin: 5px;\n  display: inline-block;\n  font-size: x-large;\n  @media (max-width: 415px) {\n    width: 50px;\n    height: 50px;\n    border-radius: 12.5px;\n    font-size: medium;\n  }\n"]);return S=function(){return n},n}var F=p.a.button(S()),V=function(){var n=Object(a.useContext)(l).handleNegative;return r.a.createElement(F,{onClick:n},"+/-")};function B(){var n=Object(x.a)(["\n    background-color: #425062;\n    color: white;\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n      0 10px 80px rgba(0, 0, 0, 0.12);\n    border-radius: 25px;\n    border: none;\n    width: 46%;\n    height: 100px;\n    font-family: Montserrat;\n    margin: 5px;\n    font-size: x-large;\n    @media (max-width: 415px) {\n      width: 46%;\n      height: 50px;\n      border-radius: 12.5px;\n      font-size: medium;\n    }\n  "]);return B=function(){return n},n}var N=function(n){var e=n.sign,t=p.a.button(B()),o=Object(a.useContext)(l).handleSetDisplayValue;return r.a.createElement(t,{onClick:function(){return o(e)}},e)};function D(){var n=Object(x.a)(["\n    position: relative;\n    margin: auto;\n    text-align: center;\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n      0 10px 80px rgba(0, 0, 0, 0.12);\n    width: fit-content;\n    border-radius: 50px;\n    background-color: #3a4655;\n    padding: 40px;\n    margin-top: 20px;\n  "]);return D=function(){return n},n}var J=function(){var n=p.a.div(D());return r.a.createElement(n,null,r.a.createElement(k,null),r.a.createElement(v,null),r.a.createElement(C,null),r.a.createElement(V,null)," ",r.a.createElement(m,{sign:"x"}),r.a.createElement("br",null),r.a.createElement(g,{sign:7}),r.a.createElement(g,{sign:8}),r.a.createElement(g,{sign:9}),r.a.createElement(m,{sign:"-"}),r.a.createElement("br",null),r.a.createElement(g,{sign:4}),r.a.createElement(g,{sign:5}),r.a.createElement(g,{sign:6}),r.a.createElement(m,{sign:"+"}),r.a.createElement("br",null),r.a.createElement(g,{sign:1}),r.a.createElement(g,{sign:2}),r.a.createElement(g,{sign:3}),r.a.createElement(m,{sign:"/"}),r.a.createElement("br",null),r.a.createElement(N,{sign:0}),r.a.createElement(g,{sign:"."}),r.a.createElement(M,null))};var I=function(){return r.a.createElement(u,null,r.a.createElement(J,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a491c9bd.chunk.js.map