"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.hoverintent = e();
  }
}(function () {
  return function e(t, n, o) {
    function r(u, f) {
      if (!n[u]) {
        if (!t[u]) {
          var s = "function" == typeof require && require;
          if (!f && s) return s(u, !0);
          if (i) return i(u, !0);
          var c = new Error("Cannot find module '" + u + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }

        var a = n[u] = {
          exports: {}
        };
        t[u][0].call(a.exports, function (e) {
          var n = t[u][1][e];
          return r(n || e);
        }, a, a.exports, e, t, n, o);
      }

      return n[u].exports;
    }

    for (var i = "function" == typeof require && require, u = 0; u < o.length; u++) {
      r(o[u]);
    }

    return r;
  }({
    1: [function (e, t, n) {
      "use strict";

      var o = e("xtend");

      t.exports = function (e, t, n) {
        function r(e, t) {
          return p && (p = clearTimeout(p)), d = 0, n.call(e, t);
        }

        function i(e) {
          c = e.clientX, a = e.clientY;
        }

        function u(e, n) {
          if (p && (p = clearTimeout(p)), Math.abs(v - c) + Math.abs(l - a) < y.sensitivity) return d = 1, t.call(e, n);
          v = c, l = a, p = setTimeout(function () {
            u(e, n);
          }, y.interval);
        }

        function f(t) {
          return p && (p = clearTimeout(p)), e.removeEventListener("mousemove", i, !1), 1 !== d && (v = t.clientX, l = t.clientY, e.addEventListener("mousemove", i, !1), p = setTimeout(function () {
            u(e, t);
          }, y.interval)), this;
        }

        function s(t) {
          return p && (p = clearTimeout(p)), e.removeEventListener("mousemove", i, !1), 1 === d && (p = setTimeout(function () {
            r(e, t);
          }, y.timeout)), this;
        }

        var c,
            a,
            v,
            l,
            m = {},
            d = 0,
            p = 0,
            y = {
          sensitivity: 7,
          interval: 100,
          timeout: 0
        };
        return m.options = function (e) {
          return y = o({}, y, e), m;
        }, m.remove = function () {
          e && (e.removeEventListener("mouseover", f, !1), e.removeEventListener("mouseout", s, !1));
        }, e && (e.addEventListener("mouseover", f, !1), e.addEventListener("mouseout", s, !1)), m;
      };
    }, {
      xtend: 2
    }],
    2: [function (e, t, n) {
      function o() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var n = arguments[t];

          for (var o in n) {
            r.call(n, o) && (e[o] = n[o]);
          }
        }

        return e;
      }

      t.exports = o;
      var r = Object.prototype.hasOwnProperty;
    }, {}]
  }, {}, [1])(1);
});