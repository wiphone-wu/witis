"use strict";var e={};"Booblean Number String Function Array Date RegExp Object Error".split(" ").map((function(r){e["[object "+r+"]"]=r.toLowerCase()}));var r=function(r){return null==r||r!=r?r+"":"object"==typeof r||"function"==typeof r?e[Object.prototype.toString.call(r)]||"object":typeof r},t=function(e){switch(r(e)){case"error":return new TypeError("Error type parameters are invalid");case"regexp":return new TypeError("Regexp type parameters are invalid");case"function":return new TypeError("Function type parameters are invalid");case"date":return!!(e instanceof Date&&isNaN(e.getTime()))&&new TypeError("Function type parameters are invalid");case"null":case"undefined":case"NaN":return!0;case"string":return""===e||"null"===e||"undefined"===e||"[]"===e||"{}"===e||"[{}]"===e;case"symbol":return 0===Object.getOwnPropertySymbols(e).length;case"object":if(Object.getOwnPropertySymbols(e).length>0)return!1;for(var t in e)return!1;return!0;case"array":return 0===e.length;default:return!1}},n={name:"witis",browserEnv:function(e){var r=e.toLowerCase(),t="";try{switch(t=navigator.userAgent,r){case"pc":return!t.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);case"mobile":return t.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);case"chrome":return t.match(/(Chrome)/i)&&t.match(/Safari/i)&&!t.match(/Edge/i);case"firefox":return t.match(/(Firefox)/i);case"safari":return t.match(/(Safari)/i)&&!t.match(/Chrome/i);case"edge":return t.match(/Edge/i);case"opera":return t.match(/(Opera)/i);case"ie":return window.ActiveXObject||"ActiveXObject"in window;case"wechat":return t.match(/MicroMessenger/i);case"wxwork":return t.match(/MicroMessenger/i)&&t.match(/wxwork/i);case"dingtalk":return t.match(/DingTalk/i);default:return"borwser"}}catch(e){return new Error("Please use this function in the browser")}},exactType:r,getDate:function(e){var r=new Date;t(e)||(r=new Date(e));var n=r.getFullYear(),a=r.getMonth()+1,i=r.getDate();return n+"-"+(a<10?"0"+a:a)+"-"+(i<10?"0"+i:i)+" "+r.toTimeString().substring(0,8)},getQueryStr:function(e,r){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=r?r.match(t):window.location.search.substring(1).match(t);return null!=n?decodeURI(n[2]):null},getTimestamp:function(e){var r=(new Date).getTime();return t(e)||(r=new Date(e).getTime()),r},getZnAge:function(e){var r="";return e>=1?(r=e.toString(),parseInt(r)+"岁"):e>0&&e<1?(r=(10*e).toString(),parseInt(r)+"个月"):e<=0?new TypeError("Age cannot be zero and negative"):new SyntaxError("Unexpected number")},isEmpty:t};module.exports=n;