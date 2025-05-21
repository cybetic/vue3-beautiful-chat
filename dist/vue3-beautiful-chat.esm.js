import { reactive as j1, createElementBlock as b, openBlock as E, normalizeStyle as k, createCommentVNode as S, renderSlot as h, createTextVNode as Su, toDisplayString as q, createElementVNode as l, resolveComponent as A, createVNode as M, withCtx as B, resolveDirective as O1, normalizeClass as Cu, createBlock as L, withDirectives as Rf, Fragment as $u, renderList as Wu, vShow as I1, withModifiers as Ru, pushScopeId as z1, popScopeId as P1, nextTick as M1, withScopeId as N1, ref as lf, createApp as L1, h as q1, withKeys as R1, mergeProps as Hf } from "vue";
const Y = {
  state: j1({
    editMessage: null
  }),
  setState(u, D) {
    this.state[u] = D;
  }
};
function Uf(u) {
  const D = {};
  return u.forEach((f) => {
    D[f] = function() {
      return Y.state[f];
    };
  }), D;
}
const O = (u, D) => {
  const f = u.__vccOpts || u;
  for (const [e, F] of D)
    f[e] = F;
  return f;
}, H1 = {
  props: {
    /*icons: {
      type: Object,
      default: function () {
        return {
          close: {
            img: null,
            name: 'default'
          },
          minimize: {
            img: null,
            name: 'default'
          }
        }
      }
    },*/
    title: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      inUserList: !1
    };
  },
  computed: {
    ...Uf(["disableUserListToggle", "titleImageUrl", "showCloseButton", "showMinimizeButton"])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList, this.$emit("userList", this.inUserList);
    }
  }
}, U1 = ["src"], V1 = {
  key: 2,
  class: "sc-header--title"
};
function W1(u, D, f, e, F, t) {
  return E(), b("div", {
    class: "sc-header",
    style: k({ background: f.colors.header.bg, color: f.colors.header.text, zIndex: 1 })
  }, [
    u.titleImageUrl ? (E(), b("img", {
      key: 0,
      class: "sc-header--img",
      src: u.titleImageUrl,
      alt: ""
    }, null, 8, U1)) : S("", !0),
    u.disableUserListToggle ? (E(), b("div", V1, [
      h(u.$slots, "default", {}, () => [
        Su(q(f.title), 1)
      ], !0)
    ])) : (E(), b("div", {
      key: 1,
      class: "sc-header--title enabled",
      onClick: D[0] || (D[0] = (...a) => t.toggleUserList && t.toggleUserList(...a))
    }, [
      h(u.$slots, "default", {}, () => [
        Su(q(f.title), 1)
      ], !0)
    ])),
    u.showMinimizeButton ? (E(), b("div", {
      key: 3,
      class: "sc-header--minimize-button",
      onClick: D[1] || (D[1] = (a) => u.$emit("minimize"))
    }, [
      (E(), b("svg", {
        style: k({ fill: f.colors.header.text }),
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 47.971 47.971"
      }, D[3] || (D[3] = [
        l("g", null, [
          l("rect", {
            x: "0",
            y: "20",
            width: "47.971",
            height: "6.5",
            rx: "3",
            ry: "3"
          })
        ], -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1)
      ]), 4))
    ])) : S("", !0),
    u.showCloseButton ? (E(), b("div", {
      key: 4,
      class: "sc-header--close-button",
      onClick: D[2] || (D[2] = (a) => u.$emit("close"))
    }, [
      (E(), b("svg", {
        style: k({ fill: f.colors.header.text }),
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 47.971 47.971"
      }, D[4] || (D[4] = [
        l("g", null, [
          l("path", { d: `M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z` })
        ], -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1),
        l("g", null, null, -1)
      ]), 4))
    ])) : S("", !0)
  ], 4);
}
const G1 = /* @__PURE__ */ O(H1, [["render", W1], ["__scopeId", "data-v-27706480"]]), Y1 = {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
}, X1 = ["width", "height", "aria-labelledby"], K1 = ["id"], Z1 = ["fill"];
function Q1(u, D, f, e, F, t) {
  return E(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: f.width,
    height: f.height,
    viewBox: "0 0 18 18",
    "aria-labelledby": f.iconName,
    role: "presentation"
  }, [
    l("title", {
      id: f.iconName,
      lang: "en"
    }, q(f.iconName), 9, K1),
    l("g", { fill: f.iconColor }, [
      h(u.$slots, "default", {}, void 0, !0)
    ], 8, Z1)
  ], 8, X1);
}
const Vf = /* @__PURE__ */ O(Y1, [["render", Q1], ["__scopeId", "data-v-d652c147"]]), J1 = {}, u0 = { d: "M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z" };
function D0(u, D) {
  return E(), b("path", u0);
}
const f0 = /* @__PURE__ */ O(J1, [["render", D0]]), e0 = {}, t0 = { d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" };
function F0(u, D) {
  return E(), b("path", t0);
}
const Wf = /* @__PURE__ */ O(e0, [["render", F0]]), Ef = (u) => u.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function a0(u, ...D) {
  if (typeof u == "string")
    return Ef(u);
  let f = u[0];
  for (const [e, F] of D.entries())
    f = f + Ef(String(F)) + u[e + 1];
  return f;
}
var SD = function(u, D) {
  return SD = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, e) {
    f.__proto__ = e;
  } || function(f, e) {
    for (var F in e) Object.prototype.hasOwnProperty.call(e, F) && (f[F] = e[F]);
  }, SD(u, D);
};
function Ku(u, D) {
  if (typeof D != "function" && D !== null)
    throw new TypeError("Class extends value " + String(D) + " is not a constructor or null");
  SD(u, D);
  function f() {
    this.constructor = u;
  }
  u.prototype = D === null ? Object.create(D) : (f.prototype = D.prototype, new f());
}
var z = function() {
  return z = Object.assign || function(D) {
    for (var f, e = 1, F = arguments.length; e < F; e++) {
      f = arguments[e];
      for (var t in f) Object.prototype.hasOwnProperty.call(f, t) && (D[t] = f[t]);
    }
    return D;
  }, z.apply(this, arguments);
};
function n0(u, D) {
  var f = typeof Symbol == "function" && u[Symbol.iterator];
  if (!f) return u;
  var e = f.call(u), F, t = [], a;
  try {
    for (; (D === void 0 || D-- > 0) && !(F = e.next()).done; ) t.push(F.value);
  } catch (n) {
    a = { error: n };
  } finally {
    try {
      F && !F.done && (f = e.return) && f.call(e);
    } finally {
      if (a) throw a.error;
    }
  }
  return t;
}
function r0(u, D, f) {
  if (f || arguments.length === 2) for (var e = 0, F = D.length, t; e < F; e++)
    (t || !(e in D)) && (t || (t = Array.prototype.slice.call(D, 0, e)), t[e] = D[e]);
  return u.concat(t || Array.prototype.slice.call(D));
}
var i0 = "4.1.5", d0 = Object.prototype.hasOwnProperty;
function Z(u) {
  return typeof u == "boolean";
}
function s0(u, D, f) {
  var e;
  return u.length > D && (f == null ? (f = "&hellip;", e = 3) : e = f.length, u = u.substring(0, D - e) + f), u;
}
function hu(u, D) {
  for (var f = u.length - 1; f >= 0; f--)
    D(u[f]) === !0 && u.splice(f, 1);
}
function vu(u) {
  throw new Error("Unhandled case for value: '".concat(u, "'"));
}
var aD = /\s+/, Gf = (
  /** @class */
  function() {
    function u(D) {
      D === void 0 && (D = {}), this.tagName = "", this.attrs = {}, this.innerHTML = "", this.tagName = D.tagName || "", this.attrs = D.attrs || {}, this.innerHTML = D.innerHtml || D.innerHTML || "";
    }
    return u.prototype.setTagName = function(D) {
      return this.tagName = D, this;
    }, u.prototype.getTagName = function() {
      return this.tagName;
    }, u.prototype.setAttr = function(D, f) {
      var e = this.getAttrs();
      return e[D] = f, this;
    }, u.prototype.getAttr = function(D) {
      return this.getAttrs()[D];
    }, u.prototype.setAttrs = function(D) {
      return Object.assign(this.getAttrs(), D), this;
    }, u.prototype.getAttrs = function() {
      return this.attrs;
    }, u.prototype.setClass = function(D) {
      return this.setAttr("class", D);
    }, u.prototype.addClass = function(D) {
      for (var f = this.getClass(), e = f ? f.split(aD) : [], F = D.split(aD), t; t = F.shift(); )
        e.indexOf(t) === -1 && e.push(t);
      return this.getAttrs().class = e.join(" "), this;
    }, u.prototype.removeClass = function(D) {
      for (var f = this.getClass(), e = f ? f.split(aD) : [], F = D.split(aD), t; e.length && (t = F.shift()); ) {
        var a = e.indexOf(t);
        a !== -1 && e.splice(a, 1);
      }
      return this.getAttrs().class = e.join(" "), this;
    }, u.prototype.getClass = function() {
      return this.getAttrs().class || "";
    }, u.prototype.hasClass = function(D) {
      return (" " + this.getClass() + " ").indexOf(" " + D + " ") !== -1;
    }, u.prototype.setInnerHTML = function(D) {
      return this.innerHTML = D, this;
    }, u.prototype.setInnerHtml = function(D) {
      return this.setInnerHTML(D);
    }, u.prototype.getInnerHTML = function() {
      return this.innerHTML || "";
    }, u.prototype.getInnerHtml = function() {
      return this.getInnerHTML();
    }, u.prototype.toAnchorString = function() {
      var D = this.getTagName(), f = this.buildAttrsStr();
      return f = f ? " " + f : "", ["<", D, f, ">", this.getInnerHtml(), "</", D, ">"].join("");
    }, u.prototype.buildAttrsStr = function() {
      var D = this.getAttrs(), f = [];
      for (var e in D)
        d0.call(D, e) && f.push(e + '="' + D[e] + '"');
      return f.join(" ");
    }, u;
  }()
);
function o0(u, D, f) {
  var e, F;
  if (f == null ? (f = "&hellip;", F = 3, e = 8) : (F = f.length, e = f.length), u.length <= D)
    return u;
  var t = D - F, a = C0(u);
  if (a.query) {
    var n = a.query.match(/^(.*?)(?=(\?|#))(.*?)$/i);
    n && (a.query = a.query.substr(0, n[1].length), u = cf(a));
  }
  if (u.length <= D || (a.host && (a.host = a.host.replace(/^www\./, ""), u = cf(a)), u.length <= D))
    return u;
  var r = "";
  if (a.host && (r += a.host), r.length >= t)
    return a.host.length === D ? (a.host.substr(0, D - F) + f).substr(0, t + e) : yD(r, t, f).substr(0, t + e);
  var d = "";
  if (a.path && (d += "/" + a.path), a.query && (d += "?" + a.query), d)
    if ((r + d).length >= t) {
      if ((r + d).length == D)
        return (r + d).substr(0, D);
      var i = t - r.length;
      return (r + yD(d, i, f)).substr(0, t + e);
    } else
      r += d;
  if (a.fragment) {
    var o = "#" + a.fragment;
    if ((r + o).length >= t) {
      if ((r + o).length == D)
        return (r + o).substr(0, D);
      var s = t - r.length;
      return (r + yD(o, s, f)).substr(0, t + e);
    } else
      r += o;
  }
  if (a.scheme && a.host) {
    var C = a.scheme + "://";
    if ((r + C).length < t)
      return (C + r).substr(0, D);
  }
  if (r.length <= D)
    return r;
  var c = "";
  return t > 0 && (c = r.substr(-1 * Math.floor(t / 2))), (r.substr(0, Math.ceil(t / 2)) + f + c).substr(0, t + e);
}
function C0(u) {
  var D = {}, f = u, e = f.match(/^([a-z]+):\/\//i);
  return e && (D.scheme = e[1], f = f.slice(e[0].length)), e = f.match(/^(.*?)(?=(\?|#|\/|$))/i), e && (D.host = e[1], f = f.slice(e[0].length)), e = f.match(/^\/(.*?)(?=(\?|#|$))/i), e && (D.path = e[1], f = f.slice(e[0].length)), e = f.match(/^\?(.*?)(?=(#|$))/i), e && (D.query = e[1], f = f.slice(e[0].length)), e = f.match(/^#(.*?)$/i), e && (D.fragment = e[1]), D;
}
function cf(u) {
  var D = "";
  return u.scheme && u.host && (D += u.scheme + "://"), u.host && (D += u.host), u.path && (D += "/" + u.path), u.query && (D += "?" + u.query), u.fragment && (D += "#" + u.fragment), D;
}
function yD(u, D, f) {
  var e = D / 2, F = Math.ceil(e), t = -1 * Math.floor(e), a = "";
  return t < 0 && (a = u.substr(t)), u.substr(0, F) + f + a;
}
function l0(u, D, f) {
  if (u.length <= D)
    return u;
  var e, F;
  f == null ? (f = "&hellip;", e = 8, F = 3) : (e = f.length, F = f.length);
  var t = D - F, a = "";
  return t > 0 && (a = u.substr(-1 * Math.floor(t / 2))), (u.substr(0, Math.ceil(t / 2)) + f + a).substr(0, t + e);
}
function E0(u, D, f) {
  return s0(u, D, f);
}
var c0 = (
  /** @class */
  function() {
    function u(D) {
      D === void 0 && (D = {}), this.newWindow = !1, this.truncate = {}, this.className = "", this.newWindow = D.newWindow || !1, this.truncate = D.truncate || {}, this.className = D.className || "";
    }
    return u.prototype.build = function(D) {
      return new Gf({
        tagName: "a",
        attrs: this.createAttrs(D),
        innerHtml: this.processAnchorText(D.getAnchorText())
      });
    }, u.prototype.createAttrs = function(D) {
      var f = {
        href: D.getAnchorHref()
        // we'll always have the `href` attribute
      }, e = this.createCssClass(D);
      return e && (f.class = e), this.newWindow && (f.target = "_blank", f.rel = "noopener noreferrer"), this.truncate.length && this.truncate.length < D.getAnchorText().length && (f.title = D.getAnchorHref()), f;
    }, u.prototype.createCssClass = function(D) {
      var f = this.className;
      if (f) {
        for (var e = [f], F = D.getCssClassSuffixes(), t = 0, a = F.length; t < a; t++)
          e.push(f + "-" + F[t]);
        return e.join(" ");
      } else
        return "";
    }, u.prototype.processAnchorText = function(D) {
      return D = this.doTruncate(D), D;
    }, u.prototype.doTruncate = function(D) {
      var f = this.truncate;
      if (!f.length)
        return D;
      var e = f.length, F = f.location;
      return F === "smart" ? o0(D, e) : F === "middle" ? l0(D, e) : E0(D, e);
    }, u;
  }()
), Zu = (
  /** @class */
  function() {
    function u(D) {
      this._ = null, this.matchedText = "", this.offset = 0, this.tagBuilder = D.tagBuilder, this.matchedText = D.matchedText, this.offset = D.offset;
    }
    return u.prototype.getMatchedText = function() {
      return this.matchedText;
    }, u.prototype.setOffset = function(D) {
      this.offset = D;
    }, u.prototype.getOffset = function() {
      return this.offset;
    }, u.prototype.getCssClassSuffixes = function() {
      return [this.type];
    }, u.prototype.buildTag = function() {
      return this.tagBuilder.build(this);
    }, u;
  }()
);
function b0(u) {
  return u >= 0 && u <= 31 || u == 127;
}
function Mu(u) {
  return u >= 65 && u <= 90 || u >= 97 && u <= 122;
}
function R(u) {
  return u >= 48 && u <= 57;
}
function RD(u) {
  return u == 34 || u == 39;
}
function wu(u) {
  return u < 8232 ? u < 160 ? u >= 9 && u <= 13 || u == 32 : u < 5760 ? u == 160 : u == 5760 || u >= 8192 && u <= 8202 : u < 8287 ? u >= 8232 && u <= 8233 || u == 8239 : u < 12288 ? u == 8287 : u == 12288 || u == 65279;
}
function Au(u) {
  return u < 4800 ? u < 2949 ? u < 2451 ? u < 1425 ? u < 768 ? u < 192 ? u < 169 ? u < 65 ? u >= 48 && u <= 57 : u >= 65 && u <= 90 || u >= 97 && u <= 122 : u < 181 ? u >= 169 && u <= 170 || u == 174 : u == 181 || u == 186 : u < 710 ? u < 216 ? u >= 192 && u <= 214 : u >= 216 && u <= 246 || u >= 248 && u <= 705 : u < 748 ? u >= 710 && u <= 721 || u >= 736 && u <= 740 : u == 748 || u == 750 : u < 910 ? u < 895 ? u < 886 ? u >= 768 && u <= 884 : u >= 886 && u <= 887 || u >= 890 && u <= 893 : u < 904 ? u == 895 || u == 902 : u >= 904 && u <= 906 || u == 908 : u < 1155 ? u < 931 ? u >= 910 && u <= 929 : u >= 931 && u <= 1013 || u >= 1015 && u <= 1153 : u < 1369 ? u >= 1155 && u <= 1327 || u >= 1329 && u <= 1366 : u == 1369 || u >= 1377 && u <= 1415 : u < 1808 ? u < 1552 ? u < 1476 ? u < 1471 ? u >= 1425 && u <= 1469 : u == 1471 || u >= 1473 && u <= 1474 : u < 1488 ? u >= 1476 && u <= 1477 || u == 1479 : u >= 1488 && u <= 1514 || u >= 1520 && u <= 1522 : u < 1749 ? u < 1568 ? u >= 1552 && u <= 1562 : u >= 1568 && u <= 1641 || u >= 1646 && u <= 1747 : u < 1770 ? u >= 1749 && u <= 1756 || u >= 1759 && u <= 1768 : u >= 1770 && u <= 1788 || u == 1791 : u < 2230 ? u < 2042 ? u < 1869 ? u >= 1808 && u <= 1866 : u >= 1869 && u <= 1969 || u >= 1984 && u <= 2037 : u < 2112 ? u == 2042 || u >= 2048 && u <= 2093 : u >= 2112 && u <= 2139 || u >= 2208 && u <= 2228 : u < 2406 ? u < 2260 ? u >= 2230 && u <= 2237 : u >= 2260 && u <= 2273 || u >= 2275 && u <= 2403 : u < 2437 ? u >= 2406 && u <= 2415 || u >= 2417 && u <= 2435 : u >= 2437 && u <= 2444 || u >= 2447 && u <= 2448 : u < 2693 ? u < 2579 ? u < 2519 ? u < 2486 ? u < 2474 ? u >= 2451 && u <= 2472 : u >= 2474 && u <= 2480 || u == 2482 : u < 2503 ? u >= 2486 && u <= 2489 || u >= 2492 && u <= 2500 : u >= 2503 && u <= 2504 || u >= 2507 && u <= 2510 : u < 2534 ? u < 2524 ? u == 2519 : u >= 2524 && u <= 2525 || u >= 2527 && u <= 2531 : u < 2565 ? u >= 2534 && u <= 2545 || u >= 2561 && u <= 2563 : u >= 2565 && u <= 2570 || u >= 2575 && u <= 2576 : u < 2631 ? u < 2613 ? u < 2602 ? u >= 2579 && u <= 2600 : u >= 2602 && u <= 2608 || u >= 2610 && u <= 2611 : u < 2620 ? u >= 2613 && u <= 2614 || u >= 2616 && u <= 2617 : u == 2620 || u >= 2622 && u <= 2626 : u < 2649 ? u < 2635 ? u >= 2631 && u <= 2632 : u >= 2635 && u <= 2637 || u == 2641 : u < 2662 ? u >= 2649 && u <= 2652 || u == 2654 : u >= 2662 && u <= 2677 || u >= 2689 && u <= 2691 : u < 2821 ? u < 2759 ? u < 2730 ? u < 2703 ? u >= 2693 && u <= 2701 : u >= 2703 && u <= 2705 || u >= 2707 && u <= 2728 : u < 2741 ? u >= 2730 && u <= 2736 || u >= 2738 && u <= 2739 : u >= 2741 && u <= 2745 || u >= 2748 && u <= 2757 : u < 2784 ? u < 2763 ? u >= 2759 && u <= 2761 : u >= 2763 && u <= 2765 || u == 2768 : u < 2809 ? u >= 2784 && u <= 2787 || u >= 2790 && u <= 2799 : u == 2809 || u >= 2817 && u <= 2819 : u < 2887 ? u < 2858 ? u < 2831 ? u >= 2821 && u <= 2828 : u >= 2831 && u <= 2832 || u >= 2835 && u <= 2856 : u < 2869 ? u >= 2858 && u <= 2864 || u >= 2866 && u <= 2867 : u >= 2869 && u <= 2873 || u >= 2876 && u <= 2884 : u < 2911 ? u < 2902 ? u >= 2887 && u <= 2888 || u >= 2891 && u <= 2893 : u >= 2902 && u <= 2903 || u >= 2908 && u <= 2909 : u < 2929 ? u >= 2911 && u <= 2915 || u >= 2918 && u <= 2927 : u == 2929 || u >= 2946 && u <= 2947 : u < 3517 ? u < 3205 ? u < 3046 ? u < 2984 ? u < 2969 ? u < 2958 ? u >= 2949 && u <= 2954 : u >= 2958 && u <= 2960 || u >= 2962 && u <= 2965 : u < 2974 ? u >= 2969 && u <= 2970 || u == 2972 : u >= 2974 && u <= 2975 || u >= 2979 && u <= 2980 : u < 3014 ? u < 2990 ? u >= 2984 && u <= 2986 : u >= 2990 && u <= 3001 || u >= 3006 && u <= 3010 : u < 3024 ? u >= 3014 && u <= 3016 || u >= 3018 && u <= 3021 : u == 3024 || u == 3031 : u < 3142 ? u < 3086 ? u < 3072 ? u >= 3046 && u <= 3055 : u >= 3072 && u <= 3075 || u >= 3077 && u <= 3084 : u < 3114 ? u >= 3086 && u <= 3088 || u >= 3090 && u <= 3112 : u >= 3114 && u <= 3129 || u >= 3133 && u <= 3140 : u < 3160 ? u < 3146 ? u >= 3142 && u <= 3144 : u >= 3146 && u <= 3149 || u >= 3157 && u <= 3158 : u < 3174 ? u >= 3160 && u <= 3162 || u >= 3168 && u <= 3171 : u >= 3174 && u <= 3183 || u >= 3200 && u <= 3203 : u < 3333 ? u < 3274 ? u < 3242 ? u < 3214 ? u >= 3205 && u <= 3212 : u >= 3214 && u <= 3216 || u >= 3218 && u <= 3240 : u < 3260 ? u >= 3242 && u <= 3251 || u >= 3253 && u <= 3257 : u >= 3260 && u <= 3268 || u >= 3270 && u <= 3272 : u < 3296 ? u < 3285 ? u >= 3274 && u <= 3277 : u >= 3285 && u <= 3286 || u == 3294 : u < 3313 ? u >= 3296 && u <= 3299 || u >= 3302 && u <= 3311 : u >= 3313 && u <= 3314 || u >= 3329 && u <= 3331 : u < 3423 ? u < 3389 ? u < 3342 ? u >= 3333 && u <= 3340 : u >= 3342 && u <= 3344 || u >= 3346 && u <= 3386 : u < 3402 ? u >= 3389 && u <= 3396 || u >= 3398 && u <= 3400 : u >= 3402 && u <= 3406 || u >= 3412 && u <= 3415 : u < 3458 ? u < 3430 ? u >= 3423 && u <= 3427 : u >= 3430 && u <= 3439 || u >= 3450 && u <= 3455 : u < 3482 ? u >= 3458 && u <= 3459 || u >= 3461 && u <= 3478 : u >= 3482 && u <= 3505 || u >= 3507 && u <= 3515 : u < 3804 ? u < 3722 ? u < 3570 ? u < 3535 ? u < 3520 ? u == 3517 : u >= 3520 && u <= 3526 || u == 3530 : u < 3544 ? u >= 3535 && u <= 3540 || u == 3542 : u >= 3544 && u <= 3551 || u >= 3558 && u <= 3567 : u < 3664 ? u < 3585 ? u >= 3570 && u <= 3571 : u >= 3585 && u <= 3642 || u >= 3648 && u <= 3662 : u < 3716 ? u >= 3664 && u <= 3673 || u >= 3713 && u <= 3714 : u == 3716 || u >= 3719 && u <= 3720 : u < 3754 ? u < 3737 ? u < 3725 ? u == 3722 : u == 3725 || u >= 3732 && u <= 3735 : u < 3749 ? u >= 3737 && u <= 3743 || u >= 3745 && u <= 3747 : u == 3749 || u == 3751 : u < 3776 ? u < 3757 ? u >= 3754 && u <= 3755 : u >= 3757 && u <= 3769 || u >= 3771 && u <= 3773 : u < 3784 ? u >= 3776 && u <= 3780 || u == 3782 : u >= 3784 && u <= 3789 || u >= 3792 && u <= 3801 : u < 4176 ? u < 3902 ? u < 3872 ? u < 3840 ? u >= 3804 && u <= 3807 : u == 3840 || u >= 3864 && u <= 3865 : u < 3895 ? u >= 3872 && u <= 3881 || u == 3893 : u == 3895 || u == 3897 : u < 3974 ? u < 3913 ? u >= 3902 && u <= 3911 : u >= 3913 && u <= 3948 || u >= 3953 && u <= 3972 : u < 4038 ? u >= 3974 && u <= 3991 || u >= 3993 && u <= 4028 : u == 4038 || u >= 4096 && u <= 4169 : u < 4688 ? u < 4301 ? u < 4256 ? u >= 4176 && u <= 4253 : u >= 4256 && u <= 4293 || u == 4295 : u < 4348 ? u == 4301 || u >= 4304 && u <= 4346 : u >= 4348 && u <= 4680 || u >= 4682 && u <= 4685 : u < 4746 ? u < 4698 ? u >= 4688 && u <= 4694 || u == 4696 : u >= 4698 && u <= 4701 || u >= 4704 && u <= 4744 : u < 4786 ? u >= 4746 && u <= 4749 || u >= 4752 && u <= 4784 : u >= 4786 && u <= 4789 || u >= 4792 && u <= 4798 : u < 11035 ? u < 7416 ? u < 6176 ? u < 5873 ? u < 4992 ? u < 4824 ? u < 4802 ? u == 4800 : u >= 4802 && u <= 4805 || u >= 4808 && u <= 4822 : u < 4888 ? u >= 4824 && u <= 4880 || u >= 4882 && u <= 4885 : u >= 4888 && u <= 4954 || u >= 4957 && u <= 4959 : u < 5121 ? u < 5024 ? u >= 4992 && u <= 5007 : u >= 5024 && u <= 5109 || u >= 5112 && u <= 5117 : u < 5761 ? u >= 5121 && u <= 5740 || u >= 5743 && u <= 5759 : u >= 5761 && u <= 5786 || u >= 5792 && u <= 5866 : u < 6002 ? u < 5920 ? u < 5888 ? u >= 5873 && u <= 5880 : u >= 5888 && u <= 5900 || u >= 5902 && u <= 5908 : u < 5984 ? u >= 5920 && u <= 5940 || u >= 5952 && u <= 5971 : u >= 5984 && u <= 5996 || u >= 5998 && u <= 6e3 : u < 6108 ? u < 6016 ? u >= 6002 && u <= 6003 : u >= 6016 && u <= 6099 || u == 6103 : u < 6155 ? u >= 6108 && u <= 6109 || u >= 6112 && u <= 6121 : u >= 6155 && u <= 6157 || u >= 6160 && u <= 6169 : u < 6783 ? u < 6512 ? u < 6400 ? u < 6272 ? u >= 6176 && u <= 6263 : u >= 6272 && u <= 6314 || u >= 6320 && u <= 6389 : u < 6448 ? u >= 6400 && u <= 6430 || u >= 6432 && u <= 6443 : u >= 6448 && u <= 6459 || u >= 6470 && u <= 6509 : u < 6608 ? u < 6528 ? u >= 6512 && u <= 6516 : u >= 6528 && u <= 6571 || u >= 6576 && u <= 6601 : u < 6688 ? u >= 6608 && u <= 6617 || u >= 6656 && u <= 6683 : u >= 6688 && u <= 6750 || u >= 6752 && u <= 6780 : u < 7040 ? u < 6832 ? u < 6800 ? u >= 6783 && u <= 6793 : u >= 6800 && u <= 6809 || u == 6823 : u < 6992 ? u >= 6832 && u <= 6846 || u >= 6912 && u <= 6987 : u >= 6992 && u <= 7001 || u >= 7019 && u <= 7027 : u < 7245 ? u < 7168 ? u >= 7040 && u <= 7155 : u >= 7168 && u <= 7223 || u >= 7232 && u <= 7241 : u < 7376 ? u >= 7245 && u <= 7293 || u >= 7296 && u <= 7304 : u >= 7376 && u <= 7378 || u >= 7380 && u <= 7414 : u < 8450 ? u < 8130 ? u < 8025 ? u < 7960 ? u < 7424 ? u >= 7416 && u <= 7417 : u >= 7424 && u <= 7669 || u >= 7675 && u <= 7957 : u < 8008 ? u >= 7960 && u <= 7965 || u >= 7968 && u <= 8005 : u >= 8008 && u <= 8013 || u >= 8016 && u <= 8023 : u < 8031 ? u < 8027 ? u == 8025 : u == 8027 || u == 8029 : u < 8118 ? u >= 8031 && u <= 8061 || u >= 8064 && u <= 8116 : u >= 8118 && u <= 8124 || u == 8126 : u < 8205 ? u < 8150 ? u < 8134 ? u >= 8130 && u <= 8132 : u >= 8134 && u <= 8140 || u >= 8144 && u <= 8147 : u < 8178 ? u >= 8150 && u <= 8155 || u >= 8160 && u <= 8172 : u >= 8178 && u <= 8180 || u >= 8182 && u <= 8188 : u < 8305 ? u < 8252 ? u == 8205 : u == 8252 || u == 8265 : u < 8336 ? u == 8305 || u == 8319 : u >= 8336 && u <= 8348 || u >= 8400 && u <= 8432 : u < 8579 ? u < 8486 ? u < 8469 ? u < 8455 ? u == 8450 : u == 8455 || u >= 8458 && u <= 8467 : u < 8482 ? u == 8469 || u >= 8473 && u <= 8477 : u == 8482 || u == 8484 : u < 8495 ? u < 8488 ? u == 8486 : u == 8488 || u >= 8490 && u <= 8493 : u < 8517 ? u >= 8495 && u <= 8505 || u >= 8508 && u <= 8511 : u >= 8517 && u <= 8521 || u == 8526 : u < 9410 ? u < 9e3 ? u < 8592 ? u >= 8579 && u <= 8580 : u >= 8592 && u <= 8703 || u >= 8986 && u <= 8987 : u < 9193 ? u == 9e3 || u == 9167 : u >= 9193 && u <= 9203 || u >= 9208 && u <= 9210 : u < 9723 ? u < 9654 ? u == 9410 || u >= 9642 && u <= 9643 : u == 9654 || u == 9664 : u < 10548 ? u >= 9723 && u <= 9726 || u >= 9728 && u <= 10175 : u >= 10548 && u <= 10549 || u >= 11013 && u <= 11015 : u < 43259 ? u < 12445 ? u < 11688 ? u < 11520 ? u < 11264 ? u < 11088 ? u >= 11035 && u <= 11036 : u == 11088 || u == 11093 : u < 11360 ? u >= 11264 && u <= 11310 || u >= 11312 && u <= 11358 : u >= 11360 && u <= 11492 || u >= 11499 && u <= 11507 : u < 11568 ? u < 11559 ? u >= 11520 && u <= 11557 : u == 11559 || u == 11565 : u < 11647 ? u >= 11568 && u <= 11623 || u == 11631 : u >= 11647 && u <= 11670 || u >= 11680 && u <= 11686 : u < 11744 ? u < 11712 ? u < 11696 ? u >= 11688 && u <= 11694 : u >= 11696 && u <= 11702 || u >= 11704 && u <= 11710 : u < 11728 ? u >= 11712 && u <= 11718 || u >= 11720 && u <= 11726 : u >= 11728 && u <= 11734 || u >= 11736 && u <= 11742 : u < 12330 ? u < 11823 ? u >= 11744 && u <= 11775 : u == 11823 || u >= 12293 && u <= 12294 : u < 12353 ? u >= 12330 && u <= 12341 || u >= 12347 && u <= 12349 : u >= 12353 && u <= 12438 || u >= 12441 && u <= 12442 : u < 42512 ? u < 12951 ? u < 12549 ? u < 12449 ? u >= 12445 && u <= 12447 : u >= 12449 && u <= 12538 || u >= 12540 && u <= 12543 : u < 12704 ? u >= 12549 && u <= 12589 || u >= 12593 && u <= 12686 : u >= 12704 && u <= 12730 || u >= 12784 && u <= 12799 : u < 19968 ? u < 12953 ? u == 12951 : u == 12953 || u >= 13312 && u <= 19893 : u < 42192 ? u >= 19968 && u <= 40917 || u >= 40960 && u <= 42124 : u >= 42192 && u <= 42237 || u >= 42240 && u <= 42508 : u < 42891 ? u < 42623 ? u < 42560 ? u >= 42512 && u <= 42539 : u >= 42560 && u <= 42610 || u >= 42612 && u <= 42621 : u < 42775 ? u >= 42623 && u <= 42725 || u >= 42736 && u <= 42737 : u >= 42775 && u <= 42783 || u >= 42786 && u <= 42888 : u < 43072 ? u < 42928 ? u >= 42891 && u <= 42926 : u >= 42928 && u <= 42935 || u >= 42999 && u <= 43047 : u < 43216 ? u >= 43072 && u <= 43123 || u >= 43136 && u <= 43205 : u >= 43216 && u <= 43225 || u >= 43232 && u <= 43255 : u < 55243 ? u < 43744 ? u < 43488 ? u < 43312 ? u < 43261 ? u == 43259 : u == 43261 || u >= 43264 && u <= 43309 : u < 43392 ? u >= 43312 && u <= 43347 || u >= 43360 && u <= 43388 : u >= 43392 && u <= 43456 || u >= 43471 && u <= 43481 : u < 43600 ? u < 43520 ? u >= 43488 && u <= 43518 : u >= 43520 && u <= 43574 || u >= 43584 && u <= 43597 : u < 43642 ? u >= 43600 && u <= 43609 || u >= 43616 && u <= 43638 : u >= 43642 && u <= 43714 || u >= 43739 && u <= 43741 : u < 43824 ? u < 43785 ? u < 43762 ? u >= 43744 && u <= 43759 : u >= 43762 && u <= 43766 || u >= 43777 && u <= 43782 : u < 43808 ? u >= 43785 && u <= 43790 || u >= 43793 && u <= 43798 : u >= 43808 && u <= 43814 || u >= 43816 && u <= 43822 : u < 44012 ? u < 43868 ? u >= 43824 && u <= 43866 : u >= 43868 && u <= 43877 || u >= 43888 && u <= 44010 : u < 44032 ? u >= 44012 && u <= 44013 || u >= 44016 && u <= 44025 : u >= 44032 && u <= 55203 || u >= 55216 && u <= 55238 : u < 64848 ? u < 64298 ? u < 64112 ? u < 55296 ? u >= 55243 && u <= 55291 : u >= 55296 && u <= 57343 || u >= 63744 && u <= 64109 : u < 64275 ? u >= 64112 && u <= 64217 || u >= 64256 && u <= 64262 : u >= 64275 && u <= 64279 || u >= 64285 && u <= 64296 : u < 64320 ? u < 64312 ? u >= 64298 && u <= 64310 : u >= 64312 && u <= 64316 || u == 64318 : u < 64326 ? u >= 64320 && u <= 64321 || u >= 64323 && u <= 64324 : u >= 64326 && u <= 64433 || u >= 64467 && u <= 64829 : u < 65296 ? u < 65024 ? u < 64914 ? u >= 64848 && u <= 64911 : u >= 64914 && u <= 64967 || u >= 65008 && u <= 65019 : u < 65136 ? u >= 65024 && u <= 65039 || u >= 65056 && u <= 65071 : u >= 65136 && u <= 65140 || u >= 65142 && u <= 65276 : u < 65474 ? u < 65345 ? u >= 65296 && u <= 65305 || u >= 65313 && u <= 65338 : u >= 65345 && u <= 65370 || u >= 65382 && u <= 65470 : u < 65490 ? u >= 65474 && u <= 65479 || u >= 65482 && u <= 65487 : u >= 65490 && u <= 65495 || u >= 65498 && u <= 65500;
}
function p0(u) {
  return u < 47 ? u < 42 ? u == 33 || u >= 35 && u <= 39 : u >= 42 && u <= 43 || u == 45 : u < 63 ? u == 47 || u == 61 : u < 94 ? u == 63 : u >= 94 && u <= 96 || u >= 123 && u <= 126;
}
function g0(u) {
  return u < 91 ? u < 47 ? u >= 35 && u <= 43 || u == 45 : u < 61 ? u == 47 : u == 61 || u == 64 : u < 95 ? u == 91 || u == 93 : u < 123 ? u == 95 : u >= 123 && u <= 126 || u == 10003;
}
function Yf(u) {
  return u < 58 ? u < 44 ? u == 33 : u == 44 || u == 46 : u < 63 ? u >= 58 && u <= 59 : u == 63 || u == 94;
}
function m0(u) {
  return u < 91 ? u == 40 : u == 91 || u == 123;
}
function bf(u) {
  return u < 93 ? u == 41 : u == 93 || u == 125;
}
var h0 = /^(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|travelersinsurance|vermögensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|موريتانيا|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|banamex|bauhaus|bestbuy|booking|brother|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|yamaxun|youtube|zuerich|католик|البحرين|الجزائر|العليان|پاکستان|كاثوليك|இந்தியா|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kindle|kosher|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|nagoya|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|walter|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|loans|locus|lotte|lotto|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|ישראל|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|アマゾン|グーグル|クラウド|ポイント|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|scb|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ລາວ|ストア|セール|みんな|中文网|亚马逊|天主教|我爱你|新加坡|淡马锡|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|ευ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|广东|微博|慈善|手机|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)$/, Xf = /https?:\/\//i, B0 = new RegExp("^" + Xf.source, "i"), _0 = /^(javascript|vbscript):/i, v0 = /^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/, y0 = /^(?:\/\/)?([^/#?:]+)/, Gu = Mu;
function Kf(u) {
  return Mu(u) || R(u) || u === 43 || // '+'
  u === 45 || // '-'
  u === 46;
}
var lu = Au;
function HD(u) {
  return u === 95 || lu(u);
}
function Zf(u) {
  return Au(u) || g0(u) || Yf(u);
}
function UD(u) {
  return u === 47 || // '/'
  u === 63 || // '?'
  u === 35;
}
function Qf(u) {
  return h0.test(u.toLowerCase());
}
function w0(u) {
  if (_0.test(u))
    return !1;
  var D = u.match(v0);
  if (!D)
    return !1;
  var f = !!D[1], e = D[2];
  return f ? !0 : !(e.indexOf(".") === -1 || !/[A-Za-z]/.test(e));
}
function A0(u) {
  var D = u.match(y0);
  if (!D)
    return !1;
  var f = D[0], e = f.split(".");
  if (e.length < 2)
    return !1;
  var F = e[e.length - 1];
  return !!Qf(F);
}
var k0 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, x0 = /[:/?#]/;
function T0(u) {
  var D = u.split(x0, 1)[0];
  return k0.test(D);
}
var S0 = /^(https?:\/\/)?(?:www\.)?/i, $0 = /^\/\//, j0 = (
  /** @class */
  function(u) {
    Ku(D, u);
    function D(f) {
      var e = u.call(this, f) || this;
      return e.type = "url", e.url = "", e.urlMatchType = "scheme", e.protocolRelativeMatch = !1, e.stripPrefix = {
        scheme: !0,
        www: !0
      }, e.stripTrailingSlash = !0, e.decodePercentEncoding = !0, e.protocolPrepended = !1, e.urlMatchType = f.urlMatchType, e.url = f.url, e.protocolRelativeMatch = f.protocolRelativeMatch, e.stripPrefix = f.stripPrefix, e.stripTrailingSlash = f.stripTrailingSlash, e.decodePercentEncoding = f.decodePercentEncoding, e;
    }
    return D.prototype.getType = function() {
      return "url";
    }, D.prototype.getUrlMatchType = function() {
      return this.urlMatchType;
    }, D.prototype.getUrl = function() {
      var f = this.url;
      return !this.protocolRelativeMatch && this.urlMatchType !== "scheme" && !this.protocolPrepended && (f = this.url = "http://" + f, this.protocolPrepended = !0), f;
    }, D.prototype.getAnchorHref = function() {
      var f = this.getUrl();
      return f.replace(/&amp;/g, "&");
    }, D.prototype.getAnchorText = function() {
      var f = this.getMatchedText();
      return this.protocolRelativeMatch && (f = z0(f)), this.stripPrefix.scheme && (f = O0(f)), this.stripPrefix.www && (f = I0(f)), this.stripTrailingSlash && (f = P0(f)), this.decodePercentEncoding && (f = M0(f)), f;
    }, D;
  }(Zu)
);
function O0(u) {
  return u.replace(B0, "");
}
function I0(u) {
  return u.includes("www.") ? u.replace(S0, "$1") : u;
}
function z0(u) {
  return u.replace($0, "");
}
function P0(u) {
  return u.charAt(u.length - 1) === "/" && (u = u.slice(0, -1)), u;
}
function M0(u) {
  var D = u.replace(/%(?:22|26|27|3C|3E)/gi, function(f) {
    return f === "%22" ? "&quot;" : f === "%26" ? "&amp;" : f === "%27" ? "&#39;" : f === "%3C" || f === "%3c" ? "&lt;" : "&gt;";
  });
  if (D.includes("%"))
    try {
      return decodeURIComponent(D);
    } catch {
    }
  return D;
}
var N0 = /^mailto:/i, Jf = Au;
function VD(u) {
  return Jf(u) || p0(u);
}
function L0(u) {
  var D = u.split(".").pop();
  return Qf(D);
}
var q0 = (
  /** @class */
  function(u) {
    Ku(D, u);
    function D(f) {
      var e = u.call(this, f) || this;
      return e.type = "email", e.email = "", e.email = f.email, e;
    }
    return D.prototype.getType = function() {
      return "email";
    }, D.prototype.getEmail = function() {
      return this.email;
    }, D.prototype.getAnchorHref = function() {
      return "mailto:" + this.email;
    }, D.prototype.getAnchorText = function() {
      return this.email;
    }, D;
  }(Zu)
);
function u1(u) {
  return u === 95 || Au(u);
}
function R0(u) {
  return u.length <= 140;
}
var H0 = [
  "twitter",
  "facebook",
  "instagram",
  "tiktok",
  "youtube"
], U0 = (
  /** @class */
  function(u) {
    Ku(D, u);
    function D(f) {
      var e = u.call(this, f) || this;
      return e.type = "hashtag", e.serviceName = "twitter", e.hashtag = "", e.serviceName = f.serviceName, e.hashtag = f.hashtag, e;
    }
    return D.prototype.getType = function() {
      return "hashtag";
    }, D.prototype.getServiceName = function() {
      return this.serviceName;
    }, D.prototype.getHashtag = function() {
      return this.hashtag;
    }, D.prototype.getAnchorHref = function() {
      var f = this.serviceName, e = this.hashtag;
      switch (f) {
        case "twitter":
          return "https://twitter.com/hashtag/" + e;
        case "facebook":
          return "https://www.facebook.com/hashtag/" + e;
        case "instagram":
          return "https://instagram.com/explore/tags/" + e;
        case "tiktok":
          return "https://www.tiktok.com/tag/" + e;
        case "youtube":
          return "https://youtube.com/hashtag/" + e;
        /* istanbul ignore next */
        default:
          vu(f);
      }
    }, D.prototype.getAnchorText = function() {
      return "#" + this.hashtag;
    }, D.prototype.getCssClassSuffixes = function() {
      var f = u.prototype.getCssClassSuffixes.call(this), e = this.getServiceName();
      return e && f.push(e), f;
    }, D;
  }(Zu)
), V0 = {
  twitter: /^@\w{1,15}$/,
  instagram: /^@[_\w]{1,30}$/,
  soundcloud: /^@[-a-z0-9_]{3,25}$/,
  // TikTok usernames are 1-24 characters containing letters, numbers, underscores
  // and periods, but cannot end in a period: https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-username
  tiktok: /^@[.\w]{1,23}[\w]$/,
  // Youtube usernames are 3-30 characters containing letters, numbers, underscores,
  // dashes, or latin middle dots ('·').
  // https://support.google.com/youtube/answer/11585688?hl=en&co=GENIE.Platform%3DAndroid#tns
  youtube: /^@[-.·\w]{3,30}$/
};
function D1(u) {
  return u === 45 || // '-'
  u === 46 || // '.'
  u === 95 || // '_'
  Mu(u) || R(u);
}
function W0(u, D) {
  var f = V0[D];
  return f.test(u);
}
var G0 = [
  "twitter",
  "instagram",
  "soundcloud",
  "tiktok",
  "youtube"
], Y0 = (
  /** @class */
  function(u) {
    Ku(D, u);
    function D(f) {
      var e = u.call(this, f) || this;
      return e.type = "mention", e.serviceName = "twitter", e.mention = "", e.mention = f.mention, e.serviceName = f.serviceName, e;
    }
    return D.prototype.getType = function() {
      return "mention";
    }, D.prototype.getMention = function() {
      return this.mention;
    }, D.prototype.getServiceName = function() {
      return this.serviceName;
    }, D.prototype.getAnchorHref = function() {
      switch (this.serviceName) {
        case "twitter":
          return "https://twitter.com/" + this.mention;
        case "instagram":
          return "https://instagram.com/" + this.mention;
        case "soundcloud":
          return "https://soundcloud.com/" + this.mention;
        case "tiktok":
          return "https://www.tiktok.com/@" + this.mention;
        case "youtube":
          return "https://youtube.com/@" + this.mention;
        /* istanbul ignore next */
        default:
          vu(this.serviceName);
      }
    }, D.prototype.getAnchorText = function() {
      return "@" + this.mention;
    }, D.prototype.getCssClassSuffixes = function() {
      var f = u.prototype.getCssClassSuffixes.call(this), e = this.getServiceName();
      return e && f.push(e), f;
    }, D;
  }(Zu)
), X0 = /[-. ()]/, K0 = /(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/, Z0 = /(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/, Q0 = new RegExp("^".concat(K0.source, "|").concat(Z0.source, "$"));
function f1(u) {
  return u === 45 || // '-'
  u === 46 || // '.'
  u === 32;
}
function WD(u) {
  return u === 44 || // ','
  u === 59;
}
function J0(u) {
  var D = u.charAt(0) === "+" || X0.test(u);
  return D && Q0.test(u);
}
var u3 = (
  /** @class */
  function(u) {
    Ku(D, u);
    function D(f) {
      var e = u.call(this, f) || this;
      return e.type = "phone", e.number = "", e.plusSign = !1, e.number = f.number, e.plusSign = f.plusSign, e;
    }
    return D.prototype.getType = function() {
      return "phone";
    }, D.prototype.getPhoneNumber = function() {
      return this.number;
    }, D.prototype.getNumber = function() {
      return this.getPhoneNumber();
    }, D.prototype.getAnchorHref = function() {
      return "tel:" + (this.plusSign ? "+" : "") + this.number;
    }, D.prototype.getAnchorText = function() {
      return this.matchedText;
    }, D;
  }(Zu)
), D3 = (
  /** @class */
  function() {
    function u(D, f) {
      this.charIdx = 0, this.matches = [], this._stateMachines = [], this.schemeUrlMachinesCount = 0, this.text = D, this.tagBuilder = f.tagBuilder, this.stripPrefix = f.stripPrefix, this.stripTrailingSlash = f.stripTrailingSlash, this.decodePercentEncoding = f.decodePercentEncoding, this.hashtagServiceName = f.hashtagServiceName, this.mentionServiceName = f.mentionServiceName;
    }
    return Object.defineProperty(u.prototype, "stateMachines", {
      get: function() {
        return this._stateMachines;
      },
      enumerable: !1,
      configurable: !0
    }), u.prototype.addMachine = function(D) {
      this._stateMachines.push(D), gf(D) && this.schemeUrlMachinesCount++;
    }, u.prototype.removeMachine = function(D) {
      this._stateMachines = this._stateMachines.filter(function(f) {
        return f !== D;
      }), gf(D) && this.schemeUrlMachinesCount--;
    }, u.prototype.hasSchemeUrlMachine = function() {
      return this.schemeUrlMachinesCount > 0;
    }, u;
  }()
);
function f3(u, D) {
  for (var f = new D3(u, D); f.charIdx < f.text.length; f.charIdx++) {
    var e = u.charAt(f.charIdx), F = u.charCodeAt(f.charIdx);
    if (f.stateMachines.length === 0)
      ED(f, e, F);
    else {
      for (var t = f.stateMachines.length - 1; t >= 0; t--) {
        var a = f.stateMachines[t];
        switch (a.state) {
          // Protocol-relative URL states
          case 11:
            r3(f, a, F);
            break;
          case 12:
            i3(f, a, F);
            break;
          case 0:
            e3(f, a, F);
            break;
          case 1:
            t3(f, a, F);
            break;
          case 2:
            F3(f, a, F);
            break;
          case 3:
            a3(f, a, F);
            break;
          case 4:
            n3(f, a, e, F);
            break;
          case 5:
            d3(f, a, F);
            break;
          case 6:
            s3(f, a, e, F);
            break;
          case 7:
            o3(f, a, e, F);
            break;
          case 13:
            C3(f, a, F);
            break;
          case 14:
            l3(f, a, F);
            break;
          case 8:
            E3(f, a, F);
            break;
          case 9:
            c3(f, a, F);
            break;
          case 10:
            b3(f, a, F);
            break;
          // Email States
          case 15:
            p3(f, a, e, F);
            break;
          case 16:
            g3(f, a, e, F);
            break;
          case 17:
            m3(f, a, e, F);
            break;
          case 18:
            h3(f, a, e, F);
            break;
          case 19:
            B3(f, a, e, F);
            break;
          case 20:
            _3(f, a, F);
            break;
          case 21:
            v3(f, a, F);
            break;
          case 22:
            ku(f, a, F);
            break;
          case 23:
            y3(f, a, F);
            break;
          case 24:
            w3(f, a, F);
            break;
          case 25:
            A3(f, a, F);
            break;
          case 26:
            k3(f, a, F);
            break;
          case 27:
            x3(f, a, F);
            break;
          // Hashtag states
          case 28:
            T3(f, a, F);
            break;
          case 29:
            S3(f, a, F);
            break;
          // Mention states
          case 30:
            $3(f, a, F);
            break;
          case 31:
            j3(f, a, F);
            break;
          // Phone number states
          case 32:
            I3(f, a, e, F);
            break;
          case 33:
            z3(f, a, F);
            break;
          case 34:
            P3(f, a, F);
            break;
          case 35:
            M3(f, a, F);
            break;
          case 36:
            N3(f, a, e, F);
            break;
          case 37:
            O3(f, a, e, F);
            break;
          case 38:
            L3(f, a, e, F);
            break;
          case 39:
            q3(f, a, e, F);
            break;
          case 40:
            R3(f, a, F);
            break;
          case 41:
            H3(f, a, F);
            break;
          /* istanbul ignore next */
          default:
            vu(a.state);
        }
      }
      if (!f.hasSchemeUrlMachine() && f.charIdx > 0 && Gu(F)) {
        var n = f.text.charCodeAt(f.charIdx - 1);
        Gu(n) || f.addMachine(cD(
          f.charIdx,
          0
          /* State.SchemeChar */
        ));
      }
    }
  }
  for (var r = f.stateMachines.length - 1; r >= 0; r--)
    f.stateMachines.forEach(function(d) {
      return $(f, d);
    });
  return f.matches;
}
function ED(u, D, f) {
  var e = u.charIdx;
  if (f === 35)
    u.addMachine(Y3(
      e,
      28
      /* State.HashtagHashChar */
    ));
  else if (f === 64)
    u.addMachine(X3(
      e,
      30
      /* State.MentionAtChar */
    ));
  else if (f === 47)
    u.addMachine($D(
      e,
      11
      /* State.ProtocolRelativeSlash1 */
    ));
  else if (f === 43)
    u.addMachine(wD(
      e,
      37
      /* State.PhoneNumberPlus */
    ));
  else if (f === 40)
    u.addMachine(wD(
      e,
      32
      /* State.PhoneNumberOpenParen */
    ));
  else {
    if (R(f) && (u.addMachine(wD(
      e,
      38
      /* State.PhoneNumberDigit */
    )), u.addMachine(W3(
      e,
      13
      /* State.IpV4Digit */
    ))), Jf(f)) {
      var F = D.toLowerCase() === "m" ? 15 : 22;
      u.addMachine(G3(e, F));
    }
    Gu(f) && u.addMachine(cD(
      e,
      0
      /* State.SchemeChar */
    )), Au(f) && u.addMachine($D(
      e,
      5
      /* State.DomainLabelChar */
    ));
  }
}
function e3(u, D, f) {
  f === 58 ? D.state = 2 : f === 45 ? D.state = 1 : Kf(f) || u.removeMachine(D);
}
function t3(u, D, f) {
  var e = u.charIdx;
  f === 45 || (f === 47 ? (u.removeMachine(D), u.addMachine($D(
    e,
    11
    /* State.ProtocolRelativeSlash1 */
  ))) : Kf(f) ? D.state = 0 : u.removeMachine(D));
}
function F3(u, D, f) {
  var e = u.charIdx;
  f === 47 ? D.state = 3 : f === 46 ? u.removeMachine(D) : lu(f) ? (D.state = 5, Gu(f) && u.addMachine(cD(
    e,
    0
    /* State.SchemeChar */
  ))) : u.removeMachine(D);
}
function a3(u, D, f) {
  f === 47 ? D.state = 4 : Zf(f) ? (D.state = 10, D.acceptStateReached = !0) : $(u, D);
}
function n3(u, D, f, e) {
  e === 47 ? (D.state = 10, D.acceptStateReached = !0) : lu(e) ? (D.state = 5, D.acceptStateReached = !0) : u.removeMachine(D);
}
function r3(u, D, f) {
  f === 47 ? D.state = 12 : u.removeMachine(D);
}
function i3(u, D, f) {
  lu(f) ? D.state = 5 : u.removeMachine(D);
}
function d3(u, D, f) {
  f === 46 ? D.state = 7 : f === 45 ? D.state = 6 : f === 58 ? D.state = 8 : UD(f) ? D.state = 10 : HD(f) || $(u, D);
}
function s3(u, D, f, e) {
  e === 45 || (e === 46 ? $(u, D) : lu(e) ? D.state = 5 : $(u, D));
}
function o3(u, D, f, e) {
  e === 46 ? $(u, D) : lu(e) ? (D.state = 5, D.acceptStateReached = !0) : $(u, D);
}
function C3(u, D, f) {
  f === 46 ? D.state = 14 : f === 58 ? D.state = 8 : R(f) || (UD(f) ? D.state = 10 : Au(f) ? u.removeMachine(D) : $(u, D));
}
function l3(u, D, f) {
  R(f) ? (D.octetsEncountered++, D.octetsEncountered === 4 && (D.acceptStateReached = !0), D.state = 13) : $(u, D);
}
function E3(u, D, f) {
  R(f) ? D.state = 9 : $(u, D);
}
function c3(u, D, f) {
  R(f) || (UD(f) ? D.state = 10 : $(u, D));
}
function b3(u, D, f) {
  Zf(f) || $(u, D);
}
function p3(u, D, f, e) {
  f.toLowerCase() === "a" ? D.state = 16 : ku(u, D, e);
}
function g3(u, D, f, e) {
  f.toLowerCase() === "i" ? D.state = 17 : ku(u, D, e);
}
function m3(u, D, f, e) {
  f.toLowerCase() === "l" ? D.state = 18 : ku(u, D, e);
}
function h3(u, D, f, e) {
  f.toLowerCase() === "t" ? D.state = 19 : ku(u, D, e);
}
function B3(u, D, f, e) {
  f.toLowerCase() === "o" ? D.state = 20 : ku(u, D, e);
}
function _3(u, D, f) {
  f === 58 ? D.state = 21 : ku(u, D, f);
}
function v3(u, D, f) {
  VD(f) ? D.state = 22 : u.removeMachine(D);
}
function ku(u, D, f) {
  f === 46 ? D.state = 23 : f === 64 ? D.state = 24 : VD(f) ? D.state = 22 : u.removeMachine(D);
}
function y3(u, D, f) {
  f === 46 || f === 64 ? u.removeMachine(D) : VD(f) ? D.state = 22 : u.removeMachine(D);
}
function w3(u, D, f) {
  lu(f) ? D.state = 25 : u.removeMachine(D);
}
function A3(u, D, f) {
  f === 46 ? D.state = 27 : f === 45 ? D.state = 26 : HD(f) || $(u, D);
}
function k3(u, D, f) {
  f === 45 || f === 46 ? $(u, D) : HD(f) ? D.state = 25 : $(u, D);
}
function x3(u, D, f) {
  f === 46 || f === 45 ? $(u, D) : lu(f) ? (D.state = 25, D.acceptStateReached = !0) : $(u, D);
}
function T3(u, D, f) {
  u1(f) ? (D.state = 29, D.acceptStateReached = !0) : u.removeMachine(D);
}
function S3(u, D, f) {
  u1(f) || $(u, D);
}
function $3(u, D, f) {
  D1(f) ? (D.state = 31, D.acceptStateReached = !0) : u.removeMachine(D);
}
function j3(u, D, f) {
  D1(f) || (Au(f) ? u.removeMachine(D) : $(u, D));
}
function O3(u, D, f, e) {
  R(e) ? D.state = 38 : (u.removeMachine(D), ED(u, f, e));
}
function I3(u, D, f, e) {
  R(e) ? D.state = 33 : u.removeMachine(D), ED(u, f, e);
}
function z3(u, D, f) {
  R(f) ? D.state = 34 : u.removeMachine(D);
}
function P3(u, D, f) {
  R(f) ? D.state = 35 : u.removeMachine(D);
}
function M3(u, D, f) {
  f === 41 ? D.state = 36 : u.removeMachine(D);
}
function N3(u, D, f, e) {
  R(e) ? D.state = 38 : f1(e) ? D.state = 39 : u.removeMachine(D);
}
function L3(u, D, f, e) {
  var F = u.charIdx;
  D.acceptStateReached = !0, WD(e) ? D.state = 40 : e === 35 ? D.state = 41 : R(e) || (e === 40 ? D.state = 32 : f1(e) ? D.state = 39 : ($(u, D), Gu(e) && u.addMachine(cD(
    F,
    0
    /* State.SchemeChar */
  ))));
}
function q3(u, D, f, e) {
  R(e) ? D.state = 38 : e === 40 ? D.state = 32 : ($(u, D), ED(u, f, e));
}
function R3(u, D, f) {
  WD(f) || (f === 35 ? D.state = 41 : R(f) ? D.state = 38 : $(u, D));
}
function H3(u, D, f) {
  WD(f) ? D.state = 40 : R(f) ? u.removeMachine(D) : $(u, D);
}
function $(u, D) {
  var f = u.matches, e = u.text, F = u.charIdx, t = u.tagBuilder, a = u.stripPrefix, n = u.stripTrailingSlash, r = u.decodePercentEncoding, d = u.hashtagServiceName, i = u.mentionServiceName;
  if (u.removeMachine(D), !!D.acceptStateReached) {
    var o = D.startIdx, s = e.slice(D.startIdx, F);
    switch (s = V3(s), D.type) {
      case 0: {
        var C = e.charCodeAt(D.startIdx - 1);
        if (C === 64)
          return;
        switch (D.matchType) {
          case 0: {
            var c = Xf.exec(s);
            if (c && (o = o + c.index, s = s.slice(c.index)), !w0(s))
              return;
            break;
          }
          case 1: {
            if (!A0(s))
              return;
            break;
          }
          case 2: {
            if (!T0(s))
              return;
            break;
          }
          /* istanbul ignore next */
          default:
            vu(D);
        }
        f.push(new j0({
          tagBuilder: t,
          matchedText: s,
          offset: o,
          urlMatchType: U3(D.matchType),
          url: s,
          protocolRelativeMatch: s.slice(0, 2) === "//",
          // TODO: Do these settings need to be passed to the match,
          // or should we handle them here in UrlMatcher?
          stripPrefix: a,
          stripTrailingSlash: n,
          decodePercentEncoding: r
        }));
        break;
      }
      case 1: {
        L0(s) && f.push(new q0({
          tagBuilder: t,
          matchedText: s,
          offset: o,
          email: s.replace(N0, "")
        }));
        break;
      }
      case 2: {
        R0(s) && f.push(new U0({
          tagBuilder: t,
          matchedText: s,
          offset: o,
          serviceName: d,
          hashtag: s.slice(1)
        }));
        break;
      }
      case 3: {
        W0(s, i) && f.push(new Y0({
          tagBuilder: t,
          matchedText: s,
          offset: o,
          serviceName: i,
          mention: s.slice(1)
          // strip off the '@' character at the beginning
        }));
        break;
      }
      case 4: {
        if (s = s.replace(/ +$/g, ""), J0(s)) {
          var p = s.replace(/[^0-9,;#]/g, "");
          f.push(new u3({
            tagBuilder: t,
            matchedText: s,
            offset: o,
            number: p,
            plusSign: s.charAt(0) === "+"
          }));
        }
        break;
      }
      /* istanbul ignore next */
      default:
        vu(D);
    }
  }
}
function U3(u) {
  switch (u) {
    case 0:
      return "scheme";
    case 1:
      return "tld";
    case 2:
      return "ipV4";
    /* istanbul ignore next */
    default:
      vu(u);
  }
}
var pf = {
  ")": "(",
  "}": "{",
  "]": "["
};
function V3(u) {
  for (var D = {
    "(": 0,
    "{": 0,
    "[": 0
  }, f = 0; f < u.length; f++) {
    var e = u.charAt(f), F = u.charCodeAt(f);
    m0(F) ? D[e]++ : bf(F) && D[pf[e]]--;
  }
  for (var t = u.length - 1; t >= 0; ) {
    var e = u.charAt(t), F = u.charCodeAt(t);
    if (bf(F)) {
      var a = pf[e];
      if (D[a] < 0)
        D[a]++, t--;
      else
        break;
    } else if (Yf(F))
      t--;
    else
      break;
  }
  return u.slice(0, t + 1);
}
function cD(u, D) {
  return {
    type: 0,
    startIdx: u,
    state: D,
    acceptStateReached: !1,
    matchType: 0
  };
}
function $D(u, D) {
  return {
    type: 0,
    startIdx: u,
    state: D,
    acceptStateReached: !1,
    matchType: 1
  };
}
function W3(u, D) {
  return {
    type: 0,
    startIdx: u,
    state: D,
    acceptStateReached: !1,
    matchType: 2,
    octetsEncountered: 1
    // starts at 1 because we create this machine when encountering the first octet
  };
}
function G3(u, D) {
  return {
    type: 1,
    startIdx: u,
    state: D,
    acceptStateReached: !1
  };
}
function Y3(u, D) {
  return {
    type: 2,
    startIdx: u,
    state: D,
    acceptStateReached: !1
  };
}
function X3(u, D) {
  return {
    type: 3,
    startIdx: u,
    state: D,
    acceptStateReached: !1
  };
}
function wD(u, D) {
  return {
    type: 4,
    startIdx: u,
    state: D,
    acceptStateReached: !1
  };
}
function gf(u) {
  return u.type === 0 && u.matchType === 0;
}
var Fu = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(D) {
      D === void 0 && (D = {}), this.idx = D.idx !== void 0 ? D.idx : -1, this.type = D.type || "tag", this.name = D.name || "", this.isOpening = !!D.isOpening, this.isClosing = !!D.isClosing;
    }
    return u;
  }()
), GD = new Fu(), K3 = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(D, f) {
      this.charIdx = 0, this.state = 0, this.currentDataIdx = 0, this.currentTag = GD, this.html = D, this.callbacks = f;
    }
    return u;
  }()
);
function Z3(u, D) {
  for (var f = new K3(u, D), e = u.length; f.charIdx < e; ) {
    var F = u.charAt(f.charIdx), t = u.charCodeAt(f.charIdx);
    switch (f.state) {
      case 0:
        Q3(f, F);
        break;
      case 1:
        J3(f, F, t);
        break;
      case 2:
        De(f, F, t);
        break;
      case 3:
        ue(f, F, t);
        break;
      case 4:
        fe(f, F, t);
        break;
      case 5:
        ee(f, F, t);
        break;
      case 6:
        te(f, F, t);
        break;
      case 7:
        Fe(f, F, t);
        break;
      case 8:
        ae(f, F);
        break;
      case 9:
        ne(f, F);
        break;
      case 10:
        re(f, F, t);
        break;
      case 11:
        ie(f, F, t);
        break;
      case 12:
        de(f, F);
        break;
      case 13:
        se(f);
        break;
      case 14:
        oe(f, F);
        break;
      case 15:
        Ce(f, F);
        break;
      case 16:
        le(f, F);
        break;
      case 17:
        Ee(f, F);
        break;
      case 18:
        ce(f, F);
        break;
      case 19:
        be(f, F);
        break;
      case 20:
        pe(f, F);
        break;
      /* istanbul ignore next */
      default:
        vu(f.state);
    }
    f.charIdx++;
  }
  f.currentDataIdx < f.charIdx && ge(f);
}
function Q3(u, D) {
  D === "<" && ru(u);
}
function J3(u, D, f) {
  D === "!" ? u.state = 13 : D === "/" ? (u.state = 2, u.currentTag = new Fu(z(z({}, u.currentTag), { isClosing: !0 }))) : D === "<" ? ru(u) : Mu(f) ? (u.state = 3, u.currentTag = new Fu(z(z({}, u.currentTag), { isOpening: !0 }))) : (u.state = 0, u.currentTag = GD);
}
function ue(u, D, f) {
  wu(f) ? (u.currentTag = new Fu(z(z({}, u.currentTag), { name: AD(u) })), u.state = 4) : D === "<" ? ru(u) : D === "/" ? (u.currentTag = new Fu(z(z({}, u.currentTag), { name: AD(u) })), u.state = 12) : D === ">" ? (u.currentTag = new Fu(z(z({}, u.currentTag), { name: AD(u) })), iu(u)) : !Mu(f) && !R(f) && D !== ":" && J(u);
}
function De(u, D, f) {
  D === ">" ? J(u) : Mu(f) ? u.state = 3 : J(u);
}
function fe(u, D, f) {
  wu(f) || (D === "/" ? u.state = 12 : D === ">" ? iu(u) : D === "<" ? ru(u) : D === "=" || RD(f) || b0(f) ? J(u) : u.state = 5);
}
function ee(u, D, f) {
  wu(f) ? u.state = 6 : D === "/" ? u.state = 12 : D === "=" ? u.state = 7 : D === ">" ? iu(u) : D === "<" ? ru(u) : RD(f) && J(u);
}
function te(u, D, f) {
  wu(f) || (D === "/" ? u.state = 12 : D === "=" ? u.state = 7 : D === ">" ? iu(u) : D === "<" ? ru(u) : RD(f) ? J(u) : u.state = 5);
}
function Fe(u, D, f) {
  wu(f) || (D === '"' ? u.state = 8 : D === "'" ? u.state = 9 : /[>=`]/.test(D) ? J(u) : D === "<" ? ru(u) : u.state = 10);
}
function ae(u, D) {
  D === '"' && (u.state = 11);
}
function ne(u, D) {
  D === "'" && (u.state = 11);
}
function re(u, D, f) {
  wu(f) ? u.state = 4 : D === ">" ? iu(u) : D === "<" && ru(u);
}
function ie(u, D, f) {
  wu(f) ? u.state = 4 : D === "/" ? u.state = 12 : D === ">" ? iu(u) : D === "<" ? ru(u) : (u.state = 4, me(u));
}
function de(u, D) {
  D === ">" ? (u.currentTag = new Fu(z(z({}, u.currentTag), { isClosing: !0 })), iu(u)) : J(u);
}
function se(u) {
  var D = u.html, f = u.charIdx;
  D.slice(f, f + 2) === "--" ? (u.charIdx++, u.currentTag = new Fu(z(z({}, u.currentTag), { type: "comment" })), u.state = 14) : D.slice(f, f + 7).toUpperCase() === "DOCTYPE" ? (u.charIdx += 6, u.currentTag = new Fu(z(z({}, u.currentTag), { type: "doctype" })), u.state = 20) : J(u);
}
function oe(u, D) {
  D === "-" ? u.state = 15 : D === ">" ? J(u) : u.state = 16;
}
function Ce(u, D) {
  D === "-" ? u.state = 18 : D === ">" ? J(u) : u.state = 16;
}
function le(u, D) {
  D === "-" && (u.state = 17);
}
function Ee(u, D) {
  D === "-" ? u.state = 18 : u.state = 16;
}
function ce(u, D) {
  D === ">" ? iu(u) : D === "!" ? u.state = 19 : D === "-" || (u.state = 16);
}
function be(u, D) {
  D === "-" ? u.state = 17 : D === ">" ? iu(u) : u.state = 16;
}
function pe(u, D) {
  D === ">" ? iu(u) : D === "<" && ru(u);
}
function J(u) {
  u.state = 0, u.currentTag = GD;
}
function ru(u) {
  u.state = 1, u.currentTag = new Fu({ idx: u.charIdx });
}
function iu(u) {
  var D = u.html.slice(u.currentDataIdx, u.currentTag.idx);
  D && u.callbacks.onText(D, u.currentDataIdx);
  var f = u.currentTag;
  f.type === "comment" ? u.callbacks.onComment(f.idx) : f.type === "doctype" ? u.callbacks.onDoctype(f.idx) : (f.isOpening && u.callbacks.onOpenTag(f.name, f.idx), f.isClosing && u.callbacks.onCloseTag(f.name, f.idx)), J(u), u.currentDataIdx = u.charIdx + 1;
}
function ge(u) {
  var D = u.html.slice(u.currentDataIdx, u.charIdx);
  u.callbacks.onText(D, u.currentDataIdx), u.currentDataIdx = u.charIdx + 1;
}
function AD(u) {
  var D = u.currentTag.idx + (u.currentTag.isClosing ? 2 : 1);
  return u.html.slice(D, u.charIdx).toLowerCase();
}
function me(u) {
  u.charIdx--;
}
var he = (
  /** @class */
  function() {
    function u(D) {
      D === void 0 && (D = {}), this.version = u.version, this.urls = {}, this.email = !0, this.phone = !0, this.hashtag = !1, this.mention = !1, this.newWindow = !0, this.stripPrefix = {
        scheme: !0,
        www: !0
      }, this.stripTrailingSlash = !0, this.decodePercentEncoding = !0, this.truncate = {
        length: 0,
        location: "end"
      }, this.className = "", this.replaceFn = null, this.context = void 0, this.sanitizeHtml = !1, this.tagBuilder = null, this.urls = Be(D.urls), this.email = Z(D.email) ? D.email : this.email, this.phone = Z(D.phone) ? D.phone : this.phone, this.hashtag = D.hashtag || this.hashtag, this.mention = D.mention || this.mention, this.newWindow = Z(D.newWindow) ? D.newWindow : this.newWindow, this.stripPrefix = _e(D.stripPrefix), this.stripTrailingSlash = Z(D.stripTrailingSlash) ? D.stripTrailingSlash : this.stripTrailingSlash, this.decodePercentEncoding = Z(D.decodePercentEncoding) ? D.decodePercentEncoding : this.decodePercentEncoding, this.sanitizeHtml = D.sanitizeHtml || !1;
      var f = this.mention;
      if (f !== !1 && G0.indexOf(f) === -1)
        throw new Error("invalid `mention` cfg '".concat(f, "' - see docs"));
      var e = this.hashtag;
      if (e !== !1 && H0.indexOf(e) === -1)
        throw new Error("invalid `hashtag` cfg '".concat(e, "' - see docs"));
      this.truncate = ve(D.truncate), this.className = D.className || this.className, this.replaceFn = D.replaceFn || this.replaceFn, this.context = D.context || this;
    }
    return u.link = function(D, f) {
      var e = new u(f);
      return e.link(D);
    }, u.parse = function(D, f) {
      var e = new u(f);
      return e.parse(D);
    }, u.prototype.parse = function(D) {
      var f = this, e = ["a", "style", "script"], F = 0, t = [];
      return Z3(D, {
        onOpenTag: function(a) {
          e.indexOf(a) >= 0 && F++;
        },
        onText: function(a, n) {
          if (F === 0) {
            var r = /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi, d = a.split(r), i = n;
            d.forEach(function(o, s) {
              if (s % 2 === 0) {
                var C = f.parseText(o, i);
                t.push.apply(t, r0([], n0(C), !1));
              }
              i += o.length;
            });
          }
        },
        onCloseTag: function(a) {
          e.indexOf(a) >= 0 && (F = Math.max(F - 1, 0));
        },
        onComment: function() {
        },
        // no need to process comment nodes
        onDoctype: function() {
        }
        // no need to process doctype nodes
      }), t = this.compactMatches(t), t = this.removeUnwantedMatches(t), t;
    }, u.prototype.compactMatches = function(D) {
      D.sort(ye);
      for (var f = 0; f < D.length - 1; ) {
        var e = D[f], F = e.getOffset(), t = e.getMatchedText().length;
        if (f + 1 < D.length && D[f + 1].getOffset() === F) {
          var a = D[f + 1].getMatchedText().length > t ? f : f + 1;
          D.splice(a, 1);
          continue;
        }
        f++;
      }
      return D;
    }, u.prototype.removeUnwantedMatches = function(D) {
      return this.hashtag || hu(D, function(f) {
        return f.getType() === "hashtag";
      }), this.email || hu(D, function(f) {
        return f.getType() === "email";
      }), this.phone || hu(D, function(f) {
        return f.getType() === "phone";
      }), this.mention || hu(D, function(f) {
        return f.getType() === "mention";
      }), this.urls.schemeMatches || hu(D, function(f) {
        return f.getType() === "url" && f.getUrlMatchType() === "scheme";
      }), this.urls.tldMatches || hu(D, function(f) {
        return f.getType() === "url" && f.getUrlMatchType() === "tld";
      }), this.urls.ipV4Matches || hu(D, function(f) {
        return f.getType() === "url" && f.getUrlMatchType() === "ipV4";
      }), D;
    }, u.prototype.parseText = function(D, f) {
      f = f || 0;
      for (var e = f3(D, {
        tagBuilder: this.getTagBuilder(),
        stripPrefix: this.stripPrefix,
        stripTrailingSlash: this.stripTrailingSlash,
        decodePercentEncoding: this.decodePercentEncoding,
        hashtagServiceName: this.hashtag,
        mentionServiceName: this.mention || "twitter"
      }), F = 0, t = e.length; F < t; F++)
        e[F].setOffset(f + e[F].getOffset());
      return e;
    }, u.prototype.link = function(D) {
      if (!D)
        return "";
      this.sanitizeHtml && (D = D.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      for (var f = this.parse(D), e = new Array(f.length * 2 + 1), F = 0, t = 0, a = f.length; t < a; t++) {
        var n = f[t];
        e.push(D.substring(F, n.getOffset())), e.push(this.createMatchReturnVal(n)), F = n.getOffset() + n.getMatchedText().length;
      }
      return e.push(D.substring(F)), e.join("");
    }, u.prototype.createMatchReturnVal = function(D) {
      var f;
      if (this.replaceFn && (f = this.replaceFn.call(this.context, D)), typeof f == "string")
        return f;
      if (f === !1)
        return D.getMatchedText();
      if (f instanceof Gf)
        return f.toAnchorString();
      var e = D.buildTag();
      return e.toAnchorString();
    }, u.prototype.getTagBuilder = function() {
      var D = this.tagBuilder;
      return D || (D = this.tagBuilder = new c0({
        newWindow: this.newWindow,
        truncate: this.truncate,
        className: this.className
      })), D;
    }, u.version = i0, u;
  }()
);
function Be(u) {
  return u == null && (u = !0), Z(u) ? { schemeMatches: u, tldMatches: u, ipV4Matches: u } : {
    schemeMatches: Z(u.schemeMatches) ? u.schemeMatches : !0,
    tldMatches: Z(u.tldMatches) ? u.tldMatches : !0,
    ipV4Matches: Z(u.ipV4Matches) ? u.ipV4Matches : !0
  };
}
function _e(u) {
  return u == null && (u = !0), Z(u) ? { scheme: u, www: u } : {
    scheme: Z(u.scheme) ? u.scheme : !0,
    www: Z(u.www) ? u.www : !0
  };
}
function ve(u) {
  return typeof u == "number" ? { length: u, location: "end" } : z({ length: Number.POSITIVE_INFINITY, location: "end" }, u);
}
function ye(u, D) {
  return u.getOffset() - D.getOffset();
}
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function YD(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var kD, mf;
function Ae() {
  if (mf) return kD;
  mf = 1;
  const u = {
    bold: { delimiter: "*", tag: "strong" },
    italic: { delimiter: "/", tag: "em" },
    underline: { delimiter: "_", tag: "u" },
    strike: { delimiter: "~", tag: "del" },
    code: { delimiter: "`", tag: "code" },
    sup: { delimiter: "^", tag: "sup" },
    sub: { delimiter: "¡", tag: "sub" }
  }, D = (t) => `<${t}>`, f = (t) => `</${t}>`, e = (t, a) => `${D(a)}${t}${f(a)}`, F = (t, a) => {
    let n = 0, r = "";
    for (; n < t.length && t[n] !== a; )
      r += t[n], n++;
    return n === t.length ? "" : r;
  };
  return kD = (t, a = u) => {
    a = Object.assign({}, u, a);
    let n = "", r = 0;
    const d = () => {
      n += t[r], r++;
    }, i = (s, C) => {
      n += C + s, r += s.length;
    }, o = (s) => {
      if (r++, t[r] === " ")
        n += s.delimiter, d();
      else {
        const C = t.substr(r), c = F(C, s.delimiter);
        c.length === 0 ? i(C, s.delimiter) : (n += e(c, s.tag), r += c.length + 1);
      }
    };
    for (; r < t.length; ) {
      const s = t[r];
      s === a.bold.delimiter ? o(a.bold) : s === a.italic.delimiter ? o(a.italic) : s === a.underline.delimiter ? o(a.underline) : s === a.strike.delimiter ? o(a.strike) : s === a.code.delimiter ? o(a.code) : s === a.sup.delimiter ? o(a.sup) : s === a.sub.delimiter ? o(a.sub) : d();
    }
    return n;
  }, kD;
}
var ke = Ae();
const xe = /* @__PURE__ */ YD(ke), Te = {
  components: {
    IconBase: Vf,
    IconCross: Wf,
    IconEdit: f0
  },
  props: {
    message: {
      type: Object,
      required: !0
    },
    messageColors: {
      type: Object,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    }
  },
  computed: {
    messageText() {
      const u = a0(this.message.data.text);
      return he.link(this.messageStyling ? xe(u) : u, {
        className: "chatLink",
        truncate: { length: 50, location: "smart" }
      });
    },
    me() {
      return this.message.author === "me";
    },
    isEditing() {
      return (Y.state.editMessage && Y.state.editMessage.id) === this.message.id;
    },
    ...Uf(["showDeletion", "showEdition"])
  },
  methods: {
    edit() {
      Y.setState("editMessage", this.message);
    },
    ifelse(u, D, f) {
      return () => {
        D && u ? D() : f && f();
      };
    },
    withConfirm(u, D) {
      return () => {
        confirm(u) && D();
      };
    }
  }
}, Se = ["disabled"], $e = { key: 1 }, je = ["innerHTML"], Oe = {
  key: 1,
  class: "sc-message--edited"
};
function Ie(u, D, f, e, F, t) {
  const a = A("IconEdit"), n = A("IconBase"), r = A("IconCross");
  return E(), b("div", {
    class: "sc-message--text",
    style: k(f.messageColors)
  }, [
    l("div", {
      class: "sc-message--toolbox",
      style: k({ background: f.messageColors.backgroundColor })
    }, [
      u.showEdition && t.me && f.message.id ? (E(), b("button", {
        key: 0,
        disabled: t.isEditing,
        onClick: D[0] || (D[0] = (...d) => t.edit && t.edit(...d))
      }, [
        M(n, {
          color: t.isEditing ? "black" : f.messageColors.color,
          width: "10",
          "icon-name": "edit"
        }, {
          default: B(() => [
            M(a)
          ]),
          _: 1
        }, 8, ["color"])
      ], 8, Se)) : S("", !0),
      u.showDeletion ? (E(), b("div", $e, [
        t.me && f.message.id != null && f.message.id != null ? (E(), b("button", {
          key: 0,
          onClick: D[1] || (D[1] = (d) => t.ifelse(
            f.showConfirmationDeletion,
            t.withConfirm(f.confirmationDeletionMessage, () => u.$emit("remove")),
            () => u.$emit("remove")
          )())
        }, [
          M(n, {
            color: f.messageColors.color,
            width: "10",
            "icon-name": "remove"
          }, {
            default: B(() => [
              M(r)
            ]),
            _: 1
          }, 8, ["color"])
        ])) : S("", !0)
      ])) : S("", !0),
      h(u.$slots, "text-message-toolbox", {
        message: f.message,
        me: t.me
      }, void 0, !0)
    ], 4),
    h(u.$slots, "default", {
      message: f.message,
      messageText: t.messageText,
      messageColors: f.messageColors,
      me: t.me
    }, () => [
      l("p", {
        class: "sc-message--text-content",
        innerHTML: t.messageText
      }, null, 8, je),
      f.message.data.meta ? (E(), b("p", {
        key: 0,
        class: "sc-message--meta",
        style: k({ color: f.messageColors.color })
      }, q(f.message.data.meta), 5)) : S("", !0),
      f.message.isEdited ? (E(), b("p", Oe, [
        M(n, {
          width: "10",
          "icon-name": "edited"
        }, {
          default: B(() => [
            M(a)
          ]),
          _: 1
        }),
        D[2] || (D[2] = Su(" edited "))
      ])) : S("", !0)
    ], !0)
  ], 4);
}
const ze = /* @__PURE__ */ O(Te, [["render", Ie], ["__scopeId", "data-v-38ba016f"]]), Pe = {
  props: {
    message: {
      type: Object,
      required: !0
    },
    messageColors: {
      type: Object,
      required: !0
    }
  }
}, Me = { class: "sc-message--file-icon" }, Ne = ["src"], Le = ["href"];
function qe(u, D, f, e, F, t) {
  return E(), b("div", {
    class: "sc-message--file",
    style: k(f.messageColors)
  }, [
    h(u.$slots, "default", {
      message: f.message,
      messagecolors: f.messageColors
    }, () => {
      var a, n, r, d;
      return [
        l("div", Me, [
          l("img", {
            src: (a = f.message.data.file) == null ? void 0 : a.url,
            class: "sc-image"
          }, null, 8, Ne)
        ]),
        l("div", {
          class: "sc-message--file-name",
          style: k(f.messageColors)
        }, [
          l("a", {
            href: (n = f.message.data.file) != null && n.url ? (r = f.message.data.file) == null ? void 0 : r.url : "#",
            target: "_blank"
          }, q(((d = f.message.data.file) == null ? void 0 : d.name) || ""), 9, Le)
        ], 4),
        l("div", {
          class: "sc-message--file-text",
          style: k(f.messageColors)
        }, [
          Su(q(f.message.data.text) + " ", 1),
          f.message.data.meta ? (E(), b("p", {
            key: 0,
            class: "sc-message--meta",
            style: k(f.messageColors)
          }, q(f.message.data.meta), 5)) : S("", !0)
        ], 4)
      ];
    }, !0)
  ], 4);
}
const Re = /* @__PURE__ */ O(Pe, [["render", qe], ["__scopeId", "data-v-099dcf2b"]]), He = {
  props: {
    message: {
      type: Object,
      required: !0
    }
  }
}, Ue = { class: "sc-message--emoji" };
function Ve(u, D, f, e, F, t) {
  return E(), b("div", Ue, [
    h(u.$slots, "default", { message: f.message }, () => [
      Su(q(f.message.data.emoji), 1)
    ], !0)
  ]);
}
const We = /* @__PURE__ */ O(He, [["render", Ve], ["__scopeId", "data-v-d34536f7"]]), Ge = {
  props: {
    messageColors: {
      type: Object,
      required: !0
    }
  }
};
function Ye(u, D, f, e, F, t) {
  return E(), b("div", {
    class: "sc-typing-indicator",
    style: k(f.messageColors)
  }, D[0] || (D[0] = [
    l("span", null, null, -1),
    l("span", null, null, -1),
    l("span", null, null, -1)
  ]), 4);
}
const Xe = /* @__PURE__ */ O(Ge, [["render", Ye], ["__scopeId", "data-v-eca8cfef"]]), Ke = {
  props: {
    data: {
      type: Object,
      required: !0
    },
    messageColors: {
      type: Object,
      required: !0
    }
  }
};
function Ze(u, D, f, e, F, t) {
  return E(), b("div", {
    class: "sc-message--system",
    style: k(f.messageColors)
  }, [
    h(u.$slots, "default", { message: f.data }, () => [
      Su(q(f.data.text) + " ", 1),
      f.data.meta ? (E(), b("p", {
        key: 0,
        class: "sc-message--meta",
        style: k({ color: f.messageColors.color })
      }, q(f.data.meta), 5)) : S("", !0)
    ], !0)
  ], 4);
}
const Qe = /* @__PURE__ */ O(Ke, [["render", Ze], ["__scopeId", "data-v-ba04f873"]]), e1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='-4749.48%20-5020%2035.036%2035.036'%3e%3cdefs%3e%3cstyle%3e.a{fill:none;}.b{fill:%234e8cff;}.c{clip-path:url(%23a);}.d{fill:%23fff;}.e{fill:%23eff4f9;}%3c/style%3e%3cclipPath%20id='a'%3e%3cpath%20class='a'%20d='M0-399.479H17.555v17.555H0Z'%20transform='translate(0%20399.479)'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20transform='translate(-4886%20-5075)'%3e%3ccircle%20class='b'%20cx='17.518'%20cy='17.518'%20r='17.518'%20transform='translate(136.52%2055)'/%3e%3cg%20transform='translate(145.13%2064)'%3e%3cg%20class='c'%3e%3cg%20transform='translate(0%200)'%3e%3cpath%20class='d'%20d='M-381.924-190.962a8.778,8.778,0,0,0-8.778-8.778,8.778,8.778,0,0,0-8.778,8.778,8.745,8.745,0,0,0,2.26,5.879v1.442c0,.8.492,1.457,1.1,1.457h5.83a.843.843,0,0,0,.183-.02,8.778,8.778,0,0,0,8.184-8.757'%20transform='translate(399.479%20199.74)'/%3e%3c/g%3e%3cg%20transform='translate(0%200)'%3e%3cpath%20class='e'%20d='M-68.763-194.079a9.292,9.292,0,0,1,6.38-8.888c-.252-.022-.506-.033-.763-.033a8.774,8.774,0,0,0-8.778,8.778A9.508,9.508,0,0,0-69.7-188.3c.005,0,0,.009,0,.01-.311.352-1.924,2.849.021,2.849h2.25c-1.23-.022,1.263-2.107.269-3.494a8.225,8.225,0,0,1-1.6-5.141'%20transform='translate(71.924%20203)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Je = {
  components: {
    TextMessage: ze,
    FileMessage: Re,
    EmojiMessage: We,
    TypingMessage: Xe,
    SystemMessage: Qe
  },
  props: {
    message: {
      type: Object,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    user: {
      type: Object,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    },
    messageMargin: {
      type: Object,
      required: !1
    }
  },
  computed: {
    authorName() {
      return this.user && this.user.name;
    },
    chatImageUrl() {
      return this.user && this.user.imageUrl || e1;
    },
    messageColors() {
      return this.message.author === "me" ? this.sentColorsStyle : this.receivedColorsStyle;
    },
    receivedColorsStyle() {
      return {
        color: this.colors.receivedMessage.text,
        backgroundColor: this.colors.receivedMessage.bg
      };
    },
    sentColorsStyle() {
      return {
        color: this.colors.sentMessage.text,
        backgroundColor: this.colors.sentMessage.bg
      };
    },
    marginStyle() {
      return this.messageMargin ? this.message.author === "me" && this.messageMargin.sender ? this.messageMargin.sender : this.message.type === "system" && this.messageMargin.system ? this.messageMargin.system : this.messageMargin.recipient ? this.messageMargin.recipient : "auto" : "auto";
    }
  }
}, u2 = ["id"], D2 = ["title"];
function f2(u, D, f, e, F, t) {
  const a = A("TextMessage"), n = A("EmojiMessage"), r = A("FileMessage"), d = A("TypingMessage"), i = A("SystemMessage"), o = O1("tooltip");
  return E(), b("div", {
    id: f.message.id,
    class: "sc-message",
    style: k({
      margin: t.marginStyle
    })
  }, [
    l("div", {
      class: Cu(["sc-message--content", {
        sent: f.message.author === "me",
        received: f.message.author !== "me" && f.message.type !== "system",
        system: f.message.type === "system"
      }])
    }, [
      h(u.$slots, "user-avatar", {
        message: f.message,
        user: f.user
      }, () => [
        f.message.type !== "system" && t.authorName && t.authorName !== "me" ? Rf((E(), b("div", {
          key: 0,
          title: t.authorName,
          class: "sc-message--avatar",
          style: k({
            backgroundImage: `url(${t.chatImageUrl})`
          })
        }, null, 12, D2)), [
          [o, t.authorName]
        ]) : S("", !0)
      ]),
      f.message.type === "text" ? (E(), L(a, {
        key: 0,
        message: f.message,
        "message-colors": t.messageColors,
        "message-styling": f.messageStyling,
        "show-confirmation-deletion": f.showConfirmationDeletion,
        "confirmation-deletion-message": f.confirmationDeletionMessage,
        onRemove: D[0] || (D[0] = (s) => u.$emit("remove"))
      }, {
        default: B((s) => [
          h(u.$slots, "text-message-body", {
            message: s.message,
            messageText: s.messageText,
            messageColors: s.messageColors,
            me: s.me
          })
        ]),
        "text-message-toolbox": B((s) => [
          h(u.$slots, "text-message-toolbox", {
            message: s.message,
            me: s.me
          })
        ]),
        _: 3
      }, 8, ["message", "message-colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"])) : f.message.type === "emoji" ? (E(), L(n, {
        key: 1,
        message: f.message
      }, {
        default: B((s) => [
          h(u.$slots, "emoji-message-body", {
            message: s.message
          })
        ]),
        _: 3
      }, 8, ["message"])) : f.message.type === "file" ? (E(), L(r, {
        key: 2,
        message: f.message,
        "message-colors": t.messageColors
      }, {
        default: B((s) => [
          h(u.$slots, "file-message-body", {
            message: s.message,
            messageColors: s.messageColors
          })
        ]),
        _: 3
      }, 8, ["message", "message-colors"])) : f.message.type === "typing" ? (E(), L(d, {
        key: 3,
        "message-colors": t.messageColors
      }, null, 8, ["message-colors"])) : f.message.type === "system" ? (E(), L(i, {
        key: 4,
        data: f.message.data,
        "message-colors": t.messageColors
      }, {
        default: B(() => [
          h(u.$slots, "system-message-body", {
            message: f.message.data
          })
        ]),
        _: 3
      }, 8, ["data", "message-colors"])) : S("", !0)
    ], 2)
  ], 12, u2);
}
const e2 = /* @__PURE__ */ O(Je, [["render", f2]]);
let xD;
const t2 = {
  components: {
    Message: e2
  },
  props: {
    participants: {
      type: Array,
      required: !0
    },
    messages: {
      type: Array,
      required: !0
    },
    showTypingIndicator: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    },
    messageMargin: {
      type: Object,
      required: !1
    }
  },
  data() {
    return {
      initialScrollTop: null
    };
  },
  computed: {
    defaultChatIcon() {
      return e1;
    }
  },
  mounted() {
    this.watchScrollList(), this.$nextTick(this._scrollDown());
  },
  beforeUnmount() {
    xD.unobserve(this.$refs.scrollList);
  },
  updated() {
    this.shouldScrollToBottom() && this.$nextTick(this._scrollDown());
  },
  methods: {
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight, this.initialScrollTop || (this.initialScrollTop = this.$refs.scrollList.scrollTop);
    },
    handleScroll(u) {
      u.target.scrollTop === 0 && this.$emit("scrollToTop");
    },
    shouldScrollToBottom() {
      const D = this.$refs.scrollList.scrollTop > this.$refs.scrollList.scrollHeight - 600;
      return this.alwaysScrollToBottom || D;
    },
    profile(u) {
      return this.participants.find((f) => f.id === u) || { imageUrl: "", name: "" };
    },
    watchScrollList() {
      xD = new ResizeObserver(() => {
        const u = this.$refs.scrollList.scrollHeight - this.$refs.scrollList.scrollTop;
        (this.initialScrollTop === this.$refs.scrollList.scrollTop || this.$refs.scrollList.scrollTop > this.initialScrollTop && u > this.$refs.scrollList.offsetHeight) && this._scrollDown();
      }), xD.observe(this.$refs.scrollList);
    }
  }
};
function F2(u, D, f, e, F, t) {
  const a = A("Message");
  return E(), b("div", {
    ref: "scrollList",
    class: "sc-message-list",
    style: k({ backgroundColor: f.colors.messageList.bg }),
    onScroll: D[0] || (D[0] = (...n) => t.handleScroll && t.handleScroll(...n))
  }, [
    (E(!0), b($u, null, Wu(f.messages, (n, r) => (E(), L(a, {
      key: n.id ? n.id : r,
      message: n,
      user: t.profile(n.author),
      colors: f.colors,
      "message-styling": f.messageStyling,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage,
      "message-margin": f.messageMargin,
      onRemove: (d) => u.$emit("remove", n)
    }, {
      "user-avatar": B((d) => [
        h(u.$slots, "user-avatar", {
          user: d.user,
          message: d.message
        }, void 0, !0)
      ]),
      "text-message-body": B((d) => [
        h(u.$slots, "text-message-body", {
          message: d.message,
          messageText: d.messageText,
          messageColors: d.messageColors,
          me: d.me
        }, void 0, !0)
      ]),
      "system-message-body": B((d) => [
        h(u.$slots, "system-message-body", {
          message: d.message
        }, void 0, !0)
      ]),
      "text-message-toolbox": B((d) => [
        h(u.$slots, "text-message-toolbox", {
          message: d.message,
          me: d.me
        }, void 0, !0)
      ]),
      "file-message-body": B((d) => [
        h(u.$slots, "file-message-body", {
          message: d.message,
          messageColors: d.messageColors
        }, void 0, !0)
      ]),
      "emoji-message-body": B((d) => [
        h(u.$slots, "emoji-message-body", {
          message: d.message
        }, void 0, !0)
      ]),
      _: 2
    }, 1032, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message", "message-margin", "onRemove"]))), 128)),
    Rf(M(a, {
      message: { author: f.showTypingIndicator, type: "typing" },
      user: t.profile(f.showTypingIndicator),
      colors: f.colors,
      "message-styling": f.messageStyling,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage
    }, null, 8, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"]), [
      [I1, f.showTypingIndicator !== ""]
    ])
  ], 36);
}
const a2 = /* @__PURE__ */ O(t2, [["render", F2], ["__scopeId", "data-v-d180b99b"]]);
var nD = { exports: {} }, hf;
function n2() {
  return hf || (hf = 1, function(u, D) {
    (function() {
      var f = this, e = f.EmojiConvertor, F = function() {
        var t = this;
        return t.img_set = "apple", t.img_sets = {
          apple: { path: "/emoji-data/img-apple-64/", sheet: "/emoji-data/sheet_apple_64.png", sheet_size: 64, mask: 1 },
          google: { path: "/emoji-data/img-google-64/", sheet: "/emoji-data/sheet_google_64.png", sheet_size: 64, mask: 2 },
          twitter: { path: "/emoji-data/img-twitter-64/", sheet: "/emoji-data/sheet_twitter_64.png", sheet_size: 64, mask: 4 },
          facebook: { path: "/emoji-data/img-facebook-64/", sheet: "/emoji-data/sheet_facebook_64.png", sheet_size: 64, mask: 8 }
        }, t.use_css_imgs = !1, t.colons_mode = !1, t.text_mode = !1, t.include_title = !1, t.include_text = !1, t.allow_native = !0, t.wrap_native = !1, t.use_sheet = !1, t.avoid_ms_emoji = !0, t.allow_caps = !1, t.img_suffix = "", t.inits = {}, t.map = {}, t.init_env(), t;
      };
      F.prototype.noConflict = function() {
        return f.EmojiConvertor = e, F;
      }, F.prototype.replace_emoticons = function(t) {
        var a = this, n = a.replace_emoticons_with_colons(t);
        return a.replace_colons(n);
      }, F.prototype.replace_emoticons_with_colons = function(t) {
        var a = this;
        a.init_emoticons();
        var n = 0, r = [], d = t.replace(a.rx_emoticons, function(s, C, c, p) {
          var g = n;
          n = p + s.length;
          var _ = c.indexOf("(") !== -1, y = c.indexOf(")") !== -1;
          if ((_ || y) && r.indexOf(c) == -1 && r.push(c), y && !_) {
            var x = t.substring(g, p);
            if (x.indexOf("(") !== -1 && x.indexOf(")") === -1) return s;
          }
          if (s === `
8)`) {
            var m = t.substring(0, p);
            if (/\n?(6\)|7\))/.test(m)) return s;
          }
          var v = a.data[a.map.emoticons[c]][3][0];
          return v ? C + ":" + v + ":" : s;
        });
        if (r.length) {
          var i = r.map(a.escape_rx), o = new RegExp("(\\(.+)(" + i.join("|") + ")(.+\\))", "g");
          d = d.replace(o, function(s, C, c, p) {
            var g = a.data[a.map.emoticons[c]][3][0];
            return g ? C + ":" + g + ":" + p : s;
          });
        }
        return d;
      }, F.prototype.replace_colons = function(t) {
        var a = this;
        return a.init_colons(), t.replace(a.rx_colons, function(n) {
          var r = n.substr(1, n.length - 2);
          if (a.allow_caps && (r = r.toLowerCase()), r.indexOf("::skin-tone-") > -1) {
            var d = r.substr(-1, 1), i = "skin-tone-" + d, o = a.map.colons[i];
            r = r.substr(0, r.length - 13);
            var s = a.map.colons[r];
            return s ? a.replacement(s, r, ":", {
              idx: o,
              actual: i,
              wrapper: ":"
            }) : ":" + r + ":" + a.replacement(o, i, ":");
          } else {
            var s = a.map.colons[r];
            return s ? a.replacement(s, r, ":") : n;
          }
        });
      }, F.prototype.replace_unified = function(t) {
        var a = this;
        return a.init_unified(), t.replace(a.rx_unified, function(n, r, d) {
          var i = a.map.unified[r];
          if (i) {
            var o = null;
            return d == "🏻" && (o = "1f3fb"), d == "🏼" && (o = "1f3fc"), d == "🏽" && (o = "1f3fd"), d == "🏾" && (o = "1f3fe"), d == "🏿" && (o = "1f3ff"), o ? a.replacement(i, null, null, {
              idx: o,
              actual: d,
              wrapper: ""
            }) : a.replacement(i);
          }
          return i = a.map.unified_vars[r], i ? a.replacement(i[0], null, null, {
            idx: i[1],
            actual: "",
            wrapper: ""
          }) : n;
        });
      }, F.prototype.addAliases = function(t) {
        var a = this;
        a.init_colons();
        for (var n in t)
          a.map.colons[n] = t[n];
      }, F.prototype.removeAliases = function(t) {
        for (var a = this, n = 0; n < t.length; n++) {
          var r = t[n];
          delete a.map.colons[r];
          u:
            for (var d in a.data)
              for (var i = 0; i < a.data[d][3].length; i++)
                if (r == a.data[d][3][i]) {
                  a.map.colons[r] = d;
                  break u;
                }
        }
      }, F.prototype.replacement = function(t, a, n, r, d) {
        var i = this, o = "", s = null;
        if (typeof r == "object" && (o = i.replacement(r.idx, r.actual, r.wrapper, void 0, !0), s = r.idx), n = n || "", i.colons_mode) return ":" + i.data[t][3][0] + ":" + o;
        var C = a ? n + a + n : i.data[t][8] || n + i.data[t][3][0] + n;
        if (i.text_mode) return C + o;
        var c = i.find_image(t, s);
        if (i.init_env(), i.replace_mode == "softbank" && i.allow_native && i.data[t][1]) return i.format_native(i.data[t][1] + o, !d);
        if (i.replace_mode == "google" && i.allow_native && i.data[t][2]) return i.format_native(i.data[t][2] + o, !d);
        if (c.is_var && (o = ""), i.replace_mode == "unified" && i.allow_native) return i.format_native(c.unified + o, !d);
        var p = i.include_title ? ' title="' + (a || i.data[t][3][0]) + '"' : "", g = i.include_text ? n + (a || i.data[t][3][0]) + n : "";
        if (i.data[t][7] && (c.path = i.data[t][7], c.px = null, c.py = null, c.is_var = !1), c.is_var && i.include_text && r && r.actual && r.wrapper && (g += r.wrapper + r.actual + r.wrapper), i.replace_mode == "css")
          if (i.use_sheet && c.px != null && c.py != null) {
            var _ = 100 * c.px / (i.sheet_size - 1), y = 100 * c.py / (i.sheet_size - 1), x = 100 * i.sheet_size, m = "background: url(" + c.sheet + ");background-position:" + _ + "% " + y + "%;background-size:" + x + "% " + x + "%";
            return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + m + '"' + p + ' data-codepoints="' + c.full_idx + '">' + g + "</span></span>" + o;
          } else return i.use_css_imgs ? '<span class="emoji emoji-' + t + '"' + p + ' data-codepoints="' + c.full_idx + '">' + g + "</span>" + o : '<span class="emoji emoji-sizer" style="background-image:url(' + c.path + ')"' + p + ' data-codepoints="' + c.full_idx + '">' + g + "</span>" + o;
        return '<img src="' + c.path + '" class="emoji" data-codepoints="' + c.full_idx + '" ' + p + "/>" + o;
      }, F.prototype.format_native = function(t, a) {
        var n = this;
        return n.wrap_native && a ? '<span class="emoji-native">' + t + "</span>" : t;
      }, F.prototype.find_image = function(t, a) {
        var n = this, r = {
          path: "",
          sheet: "",
          sheet_size: 0,
          px: n.data[t][4],
          py: n.data[t][5],
          full_idx: t,
          is_var: !1,
          unified: n.data[t][0][0]
        }, d = n.data[t][6];
        if (a && n.variations_data[t] && n.variations_data[t][a]) {
          var i = n.variations_data[t][a];
          r.px = i[1], r.py = i[2], r.full_idx = i[0], r.is_var = !0, r.unified = i[4][0], d = i[3];
        }
        for (var o = [n.img_set, "apple", "google", "twitter", "facebook", "messenger"], s = 0; s < o.length; s++) {
          if (!n.img_sets[o[s]])
            throw Error("Invalid value for img_set");
          if (d & n.img_sets[o[s]].mask)
            return r.path = n.img_sets[o[s]].path + r.full_idx + ".png" + n.img_suffix, r.sheet = n.img_sets[n.img_set].sheet, r.sheet_size = n.img_sets[n.img_set].sheet_size, r;
          if (n.obsoletes_data[r.full_idx]) {
            var C = n.obsoletes_data[r.full_idx];
            if (C[3] & n.img_sets[o[s]].mask)
              return r.path = n.img_sets[o[s]].path + C[0] + ".png" + n.img_suffix, r.sheet = n.img_sets[o[s]].sheet, r.sheet_size = n.img_sets[o[s]].sheet_size, r.px = C[1], r.py = C[2], r;
          }
        }
        return r;
      }, F.prototype.init_emoticons = function() {
        var t = this;
        if (!t.inits.emoticons) {
          t.init_colons(), t.inits.emoticons = 1;
          var a = [];
          t.map.emoticons = {};
          for (var n in t.emoticons_data) {
            var r = n.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
            t.map.colons[t.emoticons_data[n]] && (t.map.emoticons[r] = t.map.colons[t.emoticons_data[n]], a.push(t.escape_rx(r)));
          }
          t.rx_emoticons = new RegExp("(^|\\s)(" + a.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g");
        }
      }, F.prototype.init_colons = function() {
        var t = this;
        if (!t.inits.colons) {
          t.inits.colons = 1, t.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g"), t.map.colons = {};
          for (var a in t.data)
            for (var n = 0; n < t.data[a][3].length; n++)
              t.map.colons[t.data[a][3][n]] = a;
        }
      }, F.prototype.init_unified = function() {
        var t = this;
        if (!t.inits.unified) {
          t.inits.unified = 1;
          var a = [];
          t.map.unified = {}, t.map.unified_vars = {};
          for (var n in t.data)
            for (var r = 0; r < t.data[n][0].length; r++)
              a.push(t.data[n][0][r].replace("*", "\\*")), t.map.unified[t.data[n][0][r]] = n;
          for (var n in t.variations_data)
            if (!(t.variations_data[n]["1f3fb"] && t.variations_data[n]["1f3fb"][0] == n + "-1f3fb"))
              for (var d in t.variations_data[n])
                for (var r = 0; r < t.variations_data[n][d][4].length; r++)
                  a.push(t.variations_data[n][d][4][r].replace("*", "\\*")), t.map.unified_vars[t.variations_data[n][d][4][r]] = [n, d];
          a = a.sort(function(i, o) {
            return o.length - i.length;
          }), t.rx_unified = new RegExp("(" + a.join("|") + ")(\uD83C[\uDFFB-\uDFFF])?", "g");
        }
      }, F.prototype.init_env = function() {
        var t = this;
        if (!t.inits.env) {
          t.inits.env = 1, t.replace_mode = "img";
          var a = !1;
          if (typeof navigator < "u" && "userAgent" in navigator) {
            var n = navigator.userAgent;
            if (typeof window < "u" && window.getComputedStyle)
              try {
                var r = window.getComputedStyle(document.body);
                (r["background-size"] || r.backgroundSize) && (a = !0);
              } catch {
                n.match(/Firefox/i) && (a = !0);
              }
            if ("product" in navigator && /ReactNative/i.test(navigator.product)) {
              t.replace_mode = "unified";
              return;
            }
            if (n.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
              if (n.match(/OS\s+[12345]/i)) {
                t.replace_mode = "softbank";
                return;
              }
              if (n.match(/OS\s+[6789]/i)) {
                t.replace_mode = "unified";
                return;
              }
            }
            if (n.match(/Mac OS X (10[._ ](?:[789]|1)|11[._ ]\d)/i)) {
              t.replace_mode = "unified";
              return;
            }
            if (!t.avoid_ms_emoji && (n.match(/Windows NT 6.[1-9]/i) || n.match(/Windows NT 10.[0-9]/i)) && !n.match(/Chrome/i) && !n.match(/MSIE 8/i)) {
              t.replace_mode = "unified";
              return;
            }
          }
          if (a) {
            t.replace_mode = "css";
            return;
          }
        }
      }, F.prototype.escape_rx = function(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }, F.prototype.sheet_size = 61, F.prototype.data = {
        "0023-fe0f-20e3": [["#️⃣", "#⃣"], "", "󾠬", ["hash"], 0, 0, 7, 0],
        "002a-fe0f-20e3": [["*️⃣", "*⃣"], "", "", ["keycap_star"], 0, 1, 7, 0],
        "0030-fe0f-20e3": [["0️⃣", "0⃣"], "", "󾠷", ["zero"], 0, 2, 7, 0],
        "0031-fe0f-20e3": [["1️⃣", "1⃣"], "", "󾠮", ["one"], 0, 3, 7, 0],
        "0032-fe0f-20e3": [["2️⃣", "2⃣"], "", "󾠯", ["two"], 0, 4, 7, 0],
        "0033-fe0f-20e3": [["3️⃣", "3⃣"], "", "󾠰", ["three"], 0, 5, 7, 0],
        "0034-fe0f-20e3": [["4️⃣", "4⃣"], "", "󾠱", ["four"], 0, 6, 7, 0],
        "0035-fe0f-20e3": [["5️⃣", "5⃣"], "", "󾠲", ["five"], 0, 7, 7, 0],
        "0036-fe0f-20e3": [["6️⃣", "6⃣"], "", "󾠳", ["six"], 0, 8, 7, 0],
        "0037-fe0f-20e3": [["7️⃣", "7⃣"], "", "󾠴", ["seven"], 0, 9, 7, 0],
        "0038-fe0f-20e3": [["8️⃣", "8⃣"], "", "󾠵", ["eight"], 0, 10, 7, 0],
        "0039-fe0f-20e3": [["9️⃣", "9⃣"], "", "󾠶", ["nine"], 0, 11, 7, 0],
        "00a9-fe0f": [["©️", "©"], "", "󾬩", ["copyright"], 0, 12, 7, 0],
        "00ae-fe0f": [["®️", "®"], "", "󾬭", ["registered"], 0, 13, 7, 0],
        "1f004": [["🀄"], "", "󾠋", ["mahjong"], 0, 14, 15, 0],
        "1f0cf": [["🃏"], "", "󾠒", ["black_joker"], 0, 15, 15, 0],
        "1f170-fe0f": [["🅰️", "🅰"], "", "󾔋", ["a"], 0, 16, 15, 0],
        "1f171-fe0f": [["🅱️", "🅱"], "", "󾔌", ["b"], 0, 17, 15, 0],
        "1f17e-fe0f": [["🅾️", "🅾"], "", "󾔎", ["o2"], 0, 18, 15, 0],
        "1f17f-fe0f": [["🅿️", "🅿"], "", "󾟶", ["parking"], 0, 19, 15, 0],
        "1f18e": [["🆎"], "", "󾔍", ["ab"], 0, 20, 15, 0],
        "1f191": [["🆑"], "", "󾮄", ["cl"], 0, 21, 15, 0],
        "1f192": [["🆒"], "", "󾬸", ["cool"], 0, 22, 15, 0],
        "1f193": [["🆓"], "", "󾬡", ["free"], 0, 23, 15, 0],
        "1f194": [["🆔"], "", "󾮁", ["id"], 0, 24, 15, 0],
        "1f195": [["🆕"], "", "󾬶", ["new"], 0, 25, 15, 0],
        "1f196": [["🆖"], "", "󾬨", ["ng"], 0, 26, 15, 0],
        "1f197": [["🆗"], "", "󾬧", ["ok"], 0, 27, 15, 0],
        "1f198": [["🆘"], "", "󾭏", ["sos"], 0, 28, 15, 0],
        "1f199": [["🆙"], "", "󾬷", ["up"], 0, 29, 15, 0],
        "1f19a": [["🆚"], "", "󾬲", ["vs"], 0, 30, 15, 0],
        "1f1e6-1f1e8": [["🇦🇨"], "", "", ["flag-ac"], 0, 31, 15, 0],
        "1f1e6-1f1e9": [["🇦🇩"], "", "", ["flag-ad"], 0, 32, 15, 0],
        "1f1e6-1f1ea": [["🇦🇪"], "", "", ["flag-ae"], 0, 33, 15, 0],
        "1f1e6-1f1eb": [["🇦🇫"], "", "", ["flag-af"], 0, 34, 15, 0],
        "1f1e6-1f1ec": [["🇦🇬"], "", "", ["flag-ag"], 0, 35, 15, 0],
        "1f1e6-1f1ee": [["🇦🇮"], "", "", ["flag-ai"], 0, 36, 15, 0],
        "1f1e6-1f1f1": [["🇦🇱"], "", "", ["flag-al"], 0, 37, 15, 0],
        "1f1e6-1f1f2": [["🇦🇲"], "", "", ["flag-am"], 0, 38, 15, 0],
        "1f1e6-1f1f4": [["🇦🇴"], "", "", ["flag-ao"], 0, 39, 15, 0],
        "1f1e6-1f1f6": [["🇦🇶"], "", "", ["flag-aq"], 0, 40, 15, 0],
        "1f1e6-1f1f7": [["🇦🇷"], "", "", ["flag-ar"], 0, 41, 15, 0],
        "1f1e6-1f1f8": [["🇦🇸"], "", "", ["flag-as"], 0, 42, 15, 0],
        "1f1e6-1f1f9": [["🇦🇹"], "", "", ["flag-at"], 0, 43, 15, 0],
        "1f1e6-1f1fa": [["🇦🇺"], "", "", ["flag-au"], 0, 44, 15, 0],
        "1f1e6-1f1fc": [["🇦🇼"], "", "", ["flag-aw"], 0, 45, 15, 0],
        "1f1e6-1f1fd": [["🇦🇽"], "", "", ["flag-ax"], 0, 46, 15, 0],
        "1f1e6-1f1ff": [["🇦🇿"], "", "", ["flag-az"], 0, 47, 15, 0],
        "1f1e7-1f1e6": [["🇧🇦"], "", "", ["flag-ba"], 0, 48, 15, 0],
        "1f1e7-1f1e7": [["🇧🇧"], "", "", ["flag-bb"], 0, 49, 15, 0],
        "1f1e7-1f1e9": [["🇧🇩"], "", "", ["flag-bd"], 0, 50, 15, 0],
        "1f1e7-1f1ea": [["🇧🇪"], "", "", ["flag-be"], 0, 51, 15, 0],
        "1f1e7-1f1eb": [["🇧🇫"], "", "", ["flag-bf"], 0, 52, 15, 0],
        "1f1e7-1f1ec": [["🇧🇬"], "", "", ["flag-bg"], 0, 53, 15, 0],
        "1f1e7-1f1ed": [["🇧🇭"], "", "", ["flag-bh"], 0, 54, 15, 0],
        "1f1e7-1f1ee": [["🇧🇮"], "", "", ["flag-bi"], 0, 55, 15, 0],
        "1f1e7-1f1ef": [["🇧🇯"], "", "", ["flag-bj"], 0, 56, 15, 0],
        "1f1e7-1f1f1": [["🇧🇱"], "", "", ["flag-bl"], 0, 57, 15, 0],
        "1f1e7-1f1f2": [["🇧🇲"], "", "", ["flag-bm"], 0, 58, 15, 0],
        "1f1e7-1f1f3": [["🇧🇳"], "", "", ["flag-bn"], 0, 59, 15, 0],
        "1f1e7-1f1f4": [["🇧🇴"], "", "", ["flag-bo"], 0, 60, 15, 0],
        "1f1e7-1f1f6": [["🇧🇶"], "", "", ["flag-bq"], 1, 0, 15, 0],
        "1f1e7-1f1f7": [["🇧🇷"], "", "", ["flag-br"], 1, 1, 15, 0],
        "1f1e7-1f1f8": [["🇧🇸"], "", "", ["flag-bs"], 1, 2, 15, 0],
        "1f1e7-1f1f9": [["🇧🇹"], "", "", ["flag-bt"], 1, 3, 15, 0],
        "1f1e7-1f1fb": [["🇧🇻"], "", "", ["flag-bv"], 1, 4, 15, 0],
        "1f1e7-1f1fc": [["🇧🇼"], "", "", ["flag-bw"], 1, 5, 15, 0],
        "1f1e7-1f1fe": [["🇧🇾"], "", "", ["flag-by"], 1, 6, 15, 0],
        "1f1e7-1f1ff": [["🇧🇿"], "", "", ["flag-bz"], 1, 7, 15, 0],
        "1f1e8-1f1e6": [["🇨🇦"], "", "", ["flag-ca"], 1, 8, 15, 0],
        "1f1e8-1f1e8": [["🇨🇨"], "", "", ["flag-cc"], 1, 9, 15, 0],
        "1f1e8-1f1e9": [["🇨🇩"], "", "", ["flag-cd"], 1, 10, 15, 0],
        "1f1e8-1f1eb": [["🇨🇫"], "", "", ["flag-cf"], 1, 11, 15, 0],
        "1f1e8-1f1ec": [["🇨🇬"], "", "", ["flag-cg"], 1, 12, 15, 0],
        "1f1e8-1f1ed": [["🇨🇭"], "", "", ["flag-ch"], 1, 13, 15, 0],
        "1f1e8-1f1ee": [["🇨🇮"], "", "", ["flag-ci"], 1, 14, 15, 0],
        "1f1e8-1f1f0": [["🇨🇰"], "", "", ["flag-ck"], 1, 15, 15, 0],
        "1f1e8-1f1f1": [["🇨🇱"], "", "", ["flag-cl"], 1, 16, 15, 0],
        "1f1e8-1f1f2": [["🇨🇲"], "", "", ["flag-cm"], 1, 17, 15, 0],
        "1f1e8-1f1f3": [["🇨🇳"], "", "󾓭", ["cn", "flag-cn"], 1, 18, 15, 0],
        "1f1e8-1f1f4": [["🇨🇴"], "", "", ["flag-co"], 1, 19, 15, 0],
        "1f1e8-1f1f5": [["🇨🇵"], "", "", ["flag-cp"], 1, 20, 15, 0],
        "1f1e8-1f1f7": [["🇨🇷"], "", "", ["flag-cr"], 1, 21, 15, 0],
        "1f1e8-1f1fa": [["🇨🇺"], "", "", ["flag-cu"], 1, 22, 15, 0],
        "1f1e8-1f1fb": [["🇨🇻"], "", "", ["flag-cv"], 1, 23, 15, 0],
        "1f1e8-1f1fc": [["🇨🇼"], "", "", ["flag-cw"], 1, 24, 15, 0],
        "1f1e8-1f1fd": [["🇨🇽"], "", "", ["flag-cx"], 1, 25, 15, 0],
        "1f1e8-1f1fe": [["🇨🇾"], "", "", ["flag-cy"], 1, 26, 15, 0],
        "1f1e8-1f1ff": [["🇨🇿"], "", "", ["flag-cz"], 1, 27, 15, 0],
        "1f1e9-1f1ea": [["🇩🇪"], "", "󾓨", ["de", "flag-de"], 1, 28, 15, 0],
        "1f1e9-1f1ec": [["🇩🇬"], "", "", ["flag-dg"], 1, 29, 15, 0],
        "1f1e9-1f1ef": [["🇩🇯"], "", "", ["flag-dj"], 1, 30, 15, 0],
        "1f1e9-1f1f0": [["🇩🇰"], "", "", ["flag-dk"], 1, 31, 15, 0],
        "1f1e9-1f1f2": [["🇩🇲"], "", "", ["flag-dm"], 1, 32, 15, 0],
        "1f1e9-1f1f4": [["🇩🇴"], "", "", ["flag-do"], 1, 33, 15, 0],
        "1f1e9-1f1ff": [["🇩🇿"], "", "", ["flag-dz"], 1, 34, 15, 0],
        "1f1ea-1f1e6": [["🇪🇦"], "", "", ["flag-ea"], 1, 35, 15, 0],
        "1f1ea-1f1e8": [["🇪🇨"], "", "", ["flag-ec"], 1, 36, 15, 0],
        "1f1ea-1f1ea": [["🇪🇪"], "", "", ["flag-ee"], 1, 37, 15, 0],
        "1f1ea-1f1ec": [["🇪🇬"], "", "", ["flag-eg"], 1, 38, 15, 0],
        "1f1ea-1f1ed": [["🇪🇭"], "", "", ["flag-eh"], 1, 39, 15, 0],
        "1f1ea-1f1f7": [["🇪🇷"], "", "", ["flag-er"], 1, 40, 15, 0],
        "1f1ea-1f1f8": [["🇪🇸"], "", "󾓫", ["es", "flag-es"], 1, 41, 15, 0],
        "1f1ea-1f1f9": [["🇪🇹"], "", "", ["flag-et"], 1, 42, 15, 0],
        "1f1ea-1f1fa": [["🇪🇺"], "", "", ["flag-eu"], 1, 43, 15, 0],
        "1f1eb-1f1ee": [["🇫🇮"], "", "", ["flag-fi"], 1, 44, 15, 0],
        "1f1eb-1f1ef": [["🇫🇯"], "", "", ["flag-fj"], 1, 45, 15, 0],
        "1f1eb-1f1f0": [["🇫🇰"], "", "", ["flag-fk"], 1, 46, 15, 0],
        "1f1eb-1f1f2": [["🇫🇲"], "", "", ["flag-fm"], 1, 47, 15, 0],
        "1f1eb-1f1f4": [["🇫🇴"], "", "", ["flag-fo"], 1, 48, 15, 0],
        "1f1eb-1f1f7": [["🇫🇷"], "", "󾓧", ["fr", "flag-fr"], 1, 49, 15, 0],
        "1f1ec-1f1e6": [["🇬🇦"], "", "", ["flag-ga"], 1, 50, 15, 0],
        "1f1ec-1f1e7": [["🇬🇧"], "", "󾓪", ["gb", "uk", "flag-gb"], 1, 51, 15, 0],
        "1f1ec-1f1e9": [["🇬🇩"], "", "", ["flag-gd"], 1, 52, 15, 0],
        "1f1ec-1f1ea": [["🇬🇪"], "", "", ["flag-ge"], 1, 53, 15, 0],
        "1f1ec-1f1eb": [["🇬🇫"], "", "", ["flag-gf"], 1, 54, 15, 0],
        "1f1ec-1f1ec": [["🇬🇬"], "", "", ["flag-gg"], 1, 55, 15, 0],
        "1f1ec-1f1ed": [["🇬🇭"], "", "", ["flag-gh"], 1, 56, 15, 0],
        "1f1ec-1f1ee": [["🇬🇮"], "", "", ["flag-gi"], 1, 57, 15, 0],
        "1f1ec-1f1f1": [["🇬🇱"], "", "", ["flag-gl"], 1, 58, 15, 0],
        "1f1ec-1f1f2": [["🇬🇲"], "", "", ["flag-gm"], 1, 59, 15, 0],
        "1f1ec-1f1f3": [["🇬🇳"], "", "", ["flag-gn"], 1, 60, 15, 0],
        "1f1ec-1f1f5": [["🇬🇵"], "", "", ["flag-gp"], 2, 0, 15, 0],
        "1f1ec-1f1f6": [["🇬🇶"], "", "", ["flag-gq"], 2, 1, 15, 0],
        "1f1ec-1f1f7": [["🇬🇷"], "", "", ["flag-gr"], 2, 2, 15, 0],
        "1f1ec-1f1f8": [["🇬🇸"], "", "", ["flag-gs"], 2, 3, 15, 0],
        "1f1ec-1f1f9": [["🇬🇹"], "", "", ["flag-gt"], 2, 4, 15, 0],
        "1f1ec-1f1fa": [["🇬🇺"], "", "", ["flag-gu"], 2, 5, 15, 0],
        "1f1ec-1f1fc": [["🇬🇼"], "", "", ["flag-gw"], 2, 6, 15, 0],
        "1f1ec-1f1fe": [["🇬🇾"], "", "", ["flag-gy"], 2, 7, 15, 0],
        "1f1ed-1f1f0": [["🇭🇰"], "", "", ["flag-hk"], 2, 8, 15, 0],
        "1f1ed-1f1f2": [["🇭🇲"], "", "", ["flag-hm"], 2, 9, 15, 0],
        "1f1ed-1f1f3": [["🇭🇳"], "", "", ["flag-hn"], 2, 10, 15, 0],
        "1f1ed-1f1f7": [["🇭🇷"], "", "", ["flag-hr"], 2, 11, 15, 0],
        "1f1ed-1f1f9": [["🇭🇹"], "", "", ["flag-ht"], 2, 12, 15, 0],
        "1f1ed-1f1fa": [["🇭🇺"], "", "", ["flag-hu"], 2, 13, 15, 0],
        "1f1ee-1f1e8": [["🇮🇨"], "", "", ["flag-ic"], 2, 14, 15, 0],
        "1f1ee-1f1e9": [["🇮🇩"], "", "", ["flag-id"], 2, 15, 15, 0],
        "1f1ee-1f1ea": [["🇮🇪"], "", "", ["flag-ie"], 2, 16, 15, 0],
        "1f1ee-1f1f1": [["🇮🇱"], "", "", ["flag-il"], 2, 17, 15, 0],
        "1f1ee-1f1f2": [["🇮🇲"], "", "", ["flag-im"], 2, 18, 15, 0],
        "1f1ee-1f1f3": [["🇮🇳"], "", "", ["flag-in"], 2, 19, 15, 0],
        "1f1ee-1f1f4": [["🇮🇴"], "", "", ["flag-io"], 2, 20, 15, 0],
        "1f1ee-1f1f6": [["🇮🇶"], "", "", ["flag-iq"], 2, 21, 15, 0],
        "1f1ee-1f1f7": [["🇮🇷"], "", "", ["flag-ir"], 2, 22, 15, 0],
        "1f1ee-1f1f8": [["🇮🇸"], "", "", ["flag-is"], 2, 23, 15, 0],
        "1f1ee-1f1f9": [["🇮🇹"], "", "󾓩", ["it", "flag-it"], 2, 24, 15, 0],
        "1f1ef-1f1ea": [["🇯🇪"], "", "", ["flag-je"], 2, 25, 15, 0],
        "1f1ef-1f1f2": [["🇯🇲"], "", "", ["flag-jm"], 2, 26, 15, 0],
        "1f1ef-1f1f4": [["🇯🇴"], "", "", ["flag-jo"], 2, 27, 15, 0],
        "1f1ef-1f1f5": [["🇯🇵"], "", "󾓥", ["jp", "flag-jp"], 2, 28, 15, 0],
        "1f1f0-1f1ea": [["🇰🇪"], "", "", ["flag-ke"], 2, 29, 15, 0],
        "1f1f0-1f1ec": [["🇰🇬"], "", "", ["flag-kg"], 2, 30, 15, 0],
        "1f1f0-1f1ed": [["🇰🇭"], "", "", ["flag-kh"], 2, 31, 15, 0],
        "1f1f0-1f1ee": [["🇰🇮"], "", "", ["flag-ki"], 2, 32, 15, 0],
        "1f1f0-1f1f2": [["🇰🇲"], "", "", ["flag-km"], 2, 33, 15, 0],
        "1f1f0-1f1f3": [["🇰🇳"], "", "", ["flag-kn"], 2, 34, 15, 0],
        "1f1f0-1f1f5": [["🇰🇵"], "", "", ["flag-kp"], 2, 35, 15, 0],
        "1f1f0-1f1f7": [["🇰🇷"], "", "󾓮", ["kr", "flag-kr"], 2, 36, 15, 0],
        "1f1f0-1f1fc": [["🇰🇼"], "", "", ["flag-kw"], 2, 37, 15, 0],
        "1f1f0-1f1fe": [["🇰🇾"], "", "", ["flag-ky"], 2, 38, 15, 0],
        "1f1f0-1f1ff": [["🇰🇿"], "", "", ["flag-kz"], 2, 39, 15, 0],
        "1f1f1-1f1e6": [["🇱🇦"], "", "", ["flag-la"], 2, 40, 15, 0],
        "1f1f1-1f1e7": [["🇱🇧"], "", "", ["flag-lb"], 2, 41, 15, 0],
        "1f1f1-1f1e8": [["🇱🇨"], "", "", ["flag-lc"], 2, 42, 15, 0],
        "1f1f1-1f1ee": [["🇱🇮"], "", "", ["flag-li"], 2, 43, 15, 0],
        "1f1f1-1f1f0": [["🇱🇰"], "", "", ["flag-lk"], 2, 44, 15, 0],
        "1f1f1-1f1f7": [["🇱🇷"], "", "", ["flag-lr"], 2, 45, 15, 0],
        "1f1f1-1f1f8": [["🇱🇸"], "", "", ["flag-ls"], 2, 46, 15, 0],
        "1f1f1-1f1f9": [["🇱🇹"], "", "", ["flag-lt"], 2, 47, 15, 0],
        "1f1f1-1f1fa": [["🇱🇺"], "", "", ["flag-lu"], 2, 48, 15, 0],
        "1f1f1-1f1fb": [["🇱🇻"], "", "", ["flag-lv"], 2, 49, 15, 0],
        "1f1f1-1f1fe": [["🇱🇾"], "", "", ["flag-ly"], 2, 50, 15, 0],
        "1f1f2-1f1e6": [["🇲🇦"], "", "", ["flag-ma"], 2, 51, 15, 0],
        "1f1f2-1f1e8": [["🇲🇨"], "", "", ["flag-mc"], 2, 52, 15, 0],
        "1f1f2-1f1e9": [["🇲🇩"], "", "", ["flag-md"], 2, 53, 15, 0],
        "1f1f2-1f1ea": [["🇲🇪"], "", "", ["flag-me"], 2, 54, 15, 0],
        "1f1f2-1f1eb": [["🇲🇫"], "", "", ["flag-mf"], 2, 55, 15, 0],
        "1f1f2-1f1ec": [["🇲🇬"], "", "", ["flag-mg"], 2, 56, 15, 0],
        "1f1f2-1f1ed": [["🇲🇭"], "", "", ["flag-mh"], 2, 57, 15, 0],
        "1f1f2-1f1f0": [["🇲🇰"], "", "", ["flag-mk"], 2, 58, 15, 0],
        "1f1f2-1f1f1": [["🇲🇱"], "", "", ["flag-ml"], 2, 59, 15, 0],
        "1f1f2-1f1f2": [["🇲🇲"], "", "", ["flag-mm"], 2, 60, 15, 0],
        "1f1f2-1f1f3": [["🇲🇳"], "", "", ["flag-mn"], 3, 0, 15, 0],
        "1f1f2-1f1f4": [["🇲🇴"], "", "", ["flag-mo"], 3, 1, 15, 0],
        "1f1f2-1f1f5": [["🇲🇵"], "", "", ["flag-mp"], 3, 2, 15, 0],
        "1f1f2-1f1f6": [["🇲🇶"], "", "", ["flag-mq"], 3, 3, 15, 0],
        "1f1f2-1f1f7": [["🇲🇷"], "", "", ["flag-mr"], 3, 4, 15, 0],
        "1f1f2-1f1f8": [["🇲🇸"], "", "", ["flag-ms"], 3, 5, 15, 0],
        "1f1f2-1f1f9": [["🇲🇹"], "", "", ["flag-mt"], 3, 6, 15, 0],
        "1f1f2-1f1fa": [["🇲🇺"], "", "", ["flag-mu"], 3, 7, 15, 0],
        "1f1f2-1f1fb": [["🇲🇻"], "", "", ["flag-mv"], 3, 8, 15, 0],
        "1f1f2-1f1fc": [["🇲🇼"], "", "", ["flag-mw"], 3, 9, 15, 0],
        "1f1f2-1f1fd": [["🇲🇽"], "", "", ["flag-mx"], 3, 10, 15, 0],
        "1f1f2-1f1fe": [["🇲🇾"], "", "", ["flag-my"], 3, 11, 15, 0],
        "1f1f2-1f1ff": [["🇲🇿"], "", "", ["flag-mz"], 3, 12, 15, 0],
        "1f1f3-1f1e6": [["🇳🇦"], "", "", ["flag-na"], 3, 13, 15, 0],
        "1f1f3-1f1e8": [["🇳🇨"], "", "", ["flag-nc"], 3, 14, 15, 0],
        "1f1f3-1f1ea": [["🇳🇪"], "", "", ["flag-ne"], 3, 15, 15, 0],
        "1f1f3-1f1eb": [["🇳🇫"], "", "", ["flag-nf"], 3, 16, 15, 0],
        "1f1f3-1f1ec": [["🇳🇬"], "", "", ["flag-ng"], 3, 17, 15, 0],
        "1f1f3-1f1ee": [["🇳🇮"], "", "", ["flag-ni"], 3, 18, 15, 0],
        "1f1f3-1f1f1": [["🇳🇱"], "", "", ["flag-nl"], 3, 19, 15, 0],
        "1f1f3-1f1f4": [["🇳🇴"], "", "", ["flag-no"], 3, 20, 15, 0],
        "1f1f3-1f1f5": [["🇳🇵"], "", "", ["flag-np"], 3, 21, 15, 0],
        "1f1f3-1f1f7": [["🇳🇷"], "", "", ["flag-nr"], 3, 22, 15, 0],
        "1f1f3-1f1fa": [["🇳🇺"], "", "", ["flag-nu"], 3, 23, 15, 0],
        "1f1f3-1f1ff": [["🇳🇿"], "", "", ["flag-nz"], 3, 24, 15, 0],
        "1f1f4-1f1f2": [["🇴🇲"], "", "", ["flag-om"], 3, 25, 15, 0],
        "1f1f5-1f1e6": [["🇵🇦"], "", "", ["flag-pa"], 3, 26, 15, 0],
        "1f1f5-1f1ea": [["🇵🇪"], "", "", ["flag-pe"], 3, 27, 15, 0],
        "1f1f5-1f1eb": [["🇵🇫"], "", "", ["flag-pf"], 3, 28, 15, 0],
        "1f1f5-1f1ec": [["🇵🇬"], "", "", ["flag-pg"], 3, 29, 15, 0],
        "1f1f5-1f1ed": [["🇵🇭"], "", "", ["flag-ph"], 3, 30, 15, 0],
        "1f1f5-1f1f0": [["🇵🇰"], "", "", ["flag-pk"], 3, 31, 15, 0],
        "1f1f5-1f1f1": [["🇵🇱"], "", "", ["flag-pl"], 3, 32, 15, 0],
        "1f1f5-1f1f2": [["🇵🇲"], "", "", ["flag-pm"], 3, 33, 15, 0],
        "1f1f5-1f1f3": [["🇵🇳"], "", "", ["flag-pn"], 3, 34, 15, 0],
        "1f1f5-1f1f7": [["🇵🇷"], "", "", ["flag-pr"], 3, 35, 15, 0],
        "1f1f5-1f1f8": [["🇵🇸"], "", "", ["flag-ps"], 3, 36, 15, 0],
        "1f1f5-1f1f9": [["🇵🇹"], "", "", ["flag-pt"], 3, 37, 15, 0],
        "1f1f5-1f1fc": [["🇵🇼"], "", "", ["flag-pw"], 3, 38, 15, 0],
        "1f1f5-1f1fe": [["🇵🇾"], "", "", ["flag-py"], 3, 39, 15, 0],
        "1f1f6-1f1e6": [["🇶🇦"], "", "", ["flag-qa"], 3, 40, 15, 0],
        "1f1f7-1f1ea": [["🇷🇪"], "", "", ["flag-re"], 3, 41, 15, 0],
        "1f1f7-1f1f4": [["🇷🇴"], "", "", ["flag-ro"], 3, 42, 15, 0],
        "1f1f7-1f1f8": [["🇷🇸"], "", "", ["flag-rs"], 3, 43, 15, 0],
        "1f1f7-1f1fa": [["🇷🇺"], "", "󾓬", ["ru", "flag-ru"], 3, 44, 15, 0],
        "1f1f7-1f1fc": [["🇷🇼"], "", "", ["flag-rw"], 3, 45, 15, 0],
        "1f1f8-1f1e6": [["🇸🇦"], "", "", ["flag-sa"], 3, 46, 15, 0],
        "1f1f8-1f1e7": [["🇸🇧"], "", "", ["flag-sb"], 3, 47, 15, 0],
        "1f1f8-1f1e8": [["🇸🇨"], "", "", ["flag-sc"], 3, 48, 15, 0],
        "1f1f8-1f1e9": [["🇸🇩"], "", "", ["flag-sd"], 3, 49, 15, 0],
        "1f1f8-1f1ea": [["🇸🇪"], "", "", ["flag-se"], 3, 50, 15, 0],
        "1f1f8-1f1ec": [["🇸🇬"], "", "", ["flag-sg"], 3, 51, 15, 0],
        "1f1f8-1f1ed": [["🇸🇭"], "", "", ["flag-sh"], 3, 52, 15, 0],
        "1f1f8-1f1ee": [["🇸🇮"], "", "", ["flag-si"], 3, 53, 15, 0],
        "1f1f8-1f1ef": [["🇸🇯"], "", "", ["flag-sj"], 3, 54, 15, 0],
        "1f1f8-1f1f0": [["🇸🇰"], "", "", ["flag-sk"], 3, 55, 15, 0],
        "1f1f8-1f1f1": [["🇸🇱"], "", "", ["flag-sl"], 3, 56, 15, 0],
        "1f1f8-1f1f2": [["🇸🇲"], "", "", ["flag-sm"], 3, 57, 15, 0],
        "1f1f8-1f1f3": [["🇸🇳"], "", "", ["flag-sn"], 3, 58, 15, 0],
        "1f1f8-1f1f4": [["🇸🇴"], "", "", ["flag-so"], 3, 59, 15, 0],
        "1f1f8-1f1f7": [["🇸🇷"], "", "", ["flag-sr"], 3, 60, 15, 0],
        "1f1f8-1f1f8": [["🇸🇸"], "", "", ["flag-ss"], 4, 0, 15, 0],
        "1f1f8-1f1f9": [["🇸🇹"], "", "", ["flag-st"], 4, 1, 15, 0],
        "1f1f8-1f1fb": [["🇸🇻"], "", "", ["flag-sv"], 4, 2, 15, 0],
        "1f1f8-1f1fd": [["🇸🇽"], "", "", ["flag-sx"], 4, 3, 15, 0],
        "1f1f8-1f1fe": [["🇸🇾"], "", "", ["flag-sy"], 4, 4, 15, 0],
        "1f1f8-1f1ff": [["🇸🇿"], "", "", ["flag-sz"], 4, 5, 15, 0],
        "1f1f9-1f1e6": [["🇹🇦"], "", "", ["flag-ta"], 4, 6, 15, 0],
        "1f1f9-1f1e8": [["🇹🇨"], "", "", ["flag-tc"], 4, 7, 15, 0],
        "1f1f9-1f1e9": [["🇹🇩"], "", "", ["flag-td"], 4, 8, 15, 0],
        "1f1f9-1f1eb": [["🇹🇫"], "", "", ["flag-tf"], 4, 9, 15, 0],
        "1f1f9-1f1ec": [["🇹🇬"], "", "", ["flag-tg"], 4, 10, 15, 0],
        "1f1f9-1f1ed": [["🇹🇭"], "", "", ["flag-th"], 4, 11, 15, 0],
        "1f1f9-1f1ef": [["🇹🇯"], "", "", ["flag-tj"], 4, 12, 15, 0],
        "1f1f9-1f1f0": [["🇹🇰"], "", "", ["flag-tk"], 4, 13, 15, 0],
        "1f1f9-1f1f1": [["🇹🇱"], "", "", ["flag-tl"], 4, 14, 15, 0],
        "1f1f9-1f1f2": [["🇹🇲"], "", "", ["flag-tm"], 4, 15, 15, 0],
        "1f1f9-1f1f3": [["🇹🇳"], "", "", ["flag-tn"], 4, 16, 15, 0],
        "1f1f9-1f1f4": [["🇹🇴"], "", "", ["flag-to"], 4, 17, 15, 0],
        "1f1f9-1f1f7": [["🇹🇷"], "", "", ["flag-tr"], 4, 18, 15, 0],
        "1f1f9-1f1f9": [["🇹🇹"], "", "", ["flag-tt"], 4, 19, 15, 0],
        "1f1f9-1f1fb": [["🇹🇻"], "", "", ["flag-tv"], 4, 20, 15, 0],
        "1f1f9-1f1fc": [["🇹🇼"], "", "", ["flag-tw"], 4, 21, 15, 0],
        "1f1f9-1f1ff": [["🇹🇿"], "", "", ["flag-tz"], 4, 22, 15, 0],
        "1f1fa-1f1e6": [["🇺🇦"], "", "", ["flag-ua"], 4, 23, 15, 0],
        "1f1fa-1f1ec": [["🇺🇬"], "", "", ["flag-ug"], 4, 24, 15, 0],
        "1f1fa-1f1f2": [["🇺🇲"], "", "", ["flag-um"], 4, 25, 15, 0],
        "1f1fa-1f1f3": [["🇺🇳"], "", "", ["flag-un"], 4, 26, 15, 0],
        "1f1fa-1f1f8": [["🇺🇸"], "", "󾓦", ["us", "flag-us"], 4, 27, 15, 0],
        "1f1fa-1f1fe": [["🇺🇾"], "", "", ["flag-uy"], 4, 28, 15, 0],
        "1f1fa-1f1ff": [["🇺🇿"], "", "", ["flag-uz"], 4, 29, 15, 0],
        "1f1fb-1f1e6": [["🇻🇦"], "", "", ["flag-va"], 4, 30, 15, 0],
        "1f1fb-1f1e8": [["🇻🇨"], "", "", ["flag-vc"], 4, 31, 15, 0],
        "1f1fb-1f1ea": [["🇻🇪"], "", "", ["flag-ve"], 4, 32, 15, 0],
        "1f1fb-1f1ec": [["🇻🇬"], "", "", ["flag-vg"], 4, 33, 15, 0],
        "1f1fb-1f1ee": [["🇻🇮"], "", "", ["flag-vi"], 4, 34, 15, 0],
        "1f1fb-1f1f3": [["🇻🇳"], "", "", ["flag-vn"], 4, 35, 15, 0],
        "1f1fb-1f1fa": [["🇻🇺"], "", "", ["flag-vu"], 4, 36, 15, 0],
        "1f1fc-1f1eb": [["🇼🇫"], "", "", ["flag-wf"], 4, 37, 15, 0],
        "1f1fc-1f1f8": [["🇼🇸"], "", "", ["flag-ws"], 4, 38, 15, 0],
        "1f1fd-1f1f0": [["🇽🇰"], "", "", ["flag-xk"], 4, 39, 15, 0],
        "1f1fe-1f1ea": [["🇾🇪"], "", "", ["flag-ye"], 4, 40, 15, 0],
        "1f1fe-1f1f9": [["🇾🇹"], "", "", ["flag-yt"], 4, 41, 15, 0],
        "1f1ff-1f1e6": [["🇿🇦"], "", "", ["flag-za"], 4, 42, 15, 0],
        "1f1ff-1f1f2": [["🇿🇲"], "", "", ["flag-zm"], 4, 43, 15, 0],
        "1f1ff-1f1fc": [["🇿🇼"], "", "", ["flag-zw"], 4, 44, 15, 0],
        "1f201": [["🈁"], "", "󾬤", ["koko"], 4, 45, 15, 0],
        "1f202-fe0f": [["🈂️", "🈂"], "", "󾬿", ["sa"], 4, 46, 15, 0],
        "1f21a": [["🈚"], "", "󾬺", ["u7121"], 4, 47, 15, 0],
        "1f22f": [["🈯"], "", "󾭀", ["u6307"], 4, 48, 15, 0],
        "1f232": [["🈲"], "", "󾬮", ["u7981"], 4, 49, 15, 0],
        "1f233": [["🈳"], "", "󾬯", ["u7a7a"], 4, 50, 15, 0],
        "1f234": [["🈴"], "", "󾬰", ["u5408"], 4, 51, 15, 0],
        "1f235": [["🈵"], "", "󾬱", ["u6e80"], 4, 52, 15, 0],
        "1f236": [["🈶"], "", "󾬹", ["u6709"], 4, 53, 15, 0],
        "1f237-fe0f": [["🈷️", "🈷"], "", "󾬻", ["u6708"], 4, 54, 15, 0],
        "1f238": [["🈸"], "", "󾬼", ["u7533"], 4, 55, 15, 0],
        "1f239": [["🈹"], "", "󾬾", ["u5272"], 4, 56, 15, 0],
        "1f23a": [["🈺"], "", "󾭁", ["u55b6"], 4, 57, 15, 0],
        "1f250": [["🉐"], "", "󾬽", ["ideograph_advantage"], 4, 58, 15, 0],
        "1f251": [["🉑"], "", "󾭐", ["accept"], 4, 59, 15, 0],
        "1f300": [["🌀"], "", "󾀅", ["cyclone"], 4, 60, 15, 0],
        "1f301": [["🌁"], "", "󾀆", ["foggy"], 5, 0, 15, 0],
        "1f302": [["🌂"], "", "󾀇", ["closed_umbrella"], 5, 1, 15, 0],
        "1f303": [["🌃"], "", "󾀈", ["night_with_stars"], 5, 2, 15, 0],
        "1f304": [["🌄"], "", "󾀉", ["sunrise_over_mountains"], 5, 3, 15, 0],
        "1f305": [["🌅"], "", "󾀊", ["sunrise"], 5, 4, 15, 0],
        "1f306": [["🌆"], "", "󾀋", ["city_sunset"], 5, 5, 15, 0],
        "1f307": [["🌇"], "", "󾀌", ["city_sunrise"], 5, 6, 15, 0],
        "1f308": [["🌈"], "", "󾀍", ["rainbow"], 5, 7, 15, 0],
        "1f309": [["🌉"], "", "󾀐", ["bridge_at_night"], 5, 8, 15, 0],
        "1f30a": [["🌊"], "", "󾀸", ["ocean"], 5, 9, 15, 0],
        "1f30b": [["🌋"], "", "󾀺", ["volcano"], 5, 10, 15, 0],
        "1f30c": [["🌌"], "", "󾀻", ["milky_way"], 5, 11, 15, 0],
        "1f30d": [["🌍"], "", "", ["earth_africa"], 5, 12, 15, 0],
        "1f30e": [["🌎"], "", "", ["earth_americas"], 5, 13, 15, 0],
        "1f30f": [["🌏"], "", "󾀹", ["earth_asia"], 5, 14, 15, 0],
        "1f310": [["🌐"], "", "", ["globe_with_meridians"], 5, 15, 15, 0],
        "1f311": [["🌑"], "", "󾀑", ["new_moon"], 5, 16, 15, 0],
        "1f312": [["🌒"], "", "", ["waxing_crescent_moon"], 5, 17, 15, 0],
        "1f313": [["🌓"], "", "󾀓", ["first_quarter_moon"], 5, 18, 15, 0],
        "1f314": [["🌔"], "", "󾀒", ["moon", "waxing_gibbous_moon"], 5, 19, 15, 0],
        "1f315": [["🌕"], "", "󾀕", ["full_moon"], 5, 20, 15, 0],
        "1f316": [["🌖"], "", "", ["waning_gibbous_moon"], 5, 21, 15, 0],
        "1f317": [["🌗"], "", "", ["last_quarter_moon"], 5, 22, 15, 0],
        "1f318": [["🌘"], "", "", ["waning_crescent_moon"], 5, 23, 15, 0],
        "1f319": [["🌙"], "", "󾀔", ["crescent_moon"], 5, 24, 15, 0],
        "1f31a": [["🌚"], "", "", ["new_moon_with_face"], 5, 25, 15, 0],
        "1f31b": [["🌛"], "", "󾀖", ["first_quarter_moon_with_face"], 5, 26, 15, 0],
        "1f31c": [["🌜"], "", "", ["last_quarter_moon_with_face"], 5, 27, 15, 0],
        "1f31d": [["🌝"], "", "", ["full_moon_with_face"], 5, 28, 15, 0],
        "1f31e": [["🌞"], "", "", ["sun_with_face"], 5, 29, 15, 0],
        "1f31f": [["🌟"], "", "󾭩", ["star2"], 5, 30, 15, 0],
        "1f320": [["🌠"], "", "󾭪", ["stars"], 5, 31, 15, 0],
        "1f321-fe0f": [["🌡️", "🌡"], "", "", ["thermometer"], 5, 32, 15, 0],
        "1f324-fe0f": [["🌤️", "🌤"], "", "", ["mostly_sunny", "sun_small_cloud"], 5, 33, 15, 0],
        "1f325-fe0f": [["🌥️", "🌥"], "", "", ["barely_sunny", "sun_behind_cloud"], 5, 34, 15, 0],
        "1f326-fe0f": [["🌦️", "🌦"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 5, 35, 15, 0],
        "1f327-fe0f": [["🌧️", "🌧"], "", "", ["rain_cloud"], 5, 36, 15, 0],
        "1f328-fe0f": [["🌨️", "🌨"], "", "", ["snow_cloud"], 5, 37, 15, 0],
        "1f329-fe0f": [["🌩️", "🌩"], "", "", ["lightning", "lightning_cloud"], 5, 38, 15, 0],
        "1f32a-fe0f": [["🌪️", "🌪"], "", "", ["tornado", "tornado_cloud"], 5, 39, 15, 0],
        "1f32b-fe0f": [["🌫️", "🌫"], "", "", ["fog"], 5, 40, 15, 0],
        "1f32c-fe0f": [["🌬️", "🌬"], "", "", ["wind_blowing_face"], 5, 41, 15, 0],
        "1f32d": [["🌭"], "", "", ["hotdog"], 5, 42, 15, 0],
        "1f32e": [["🌮"], "", "", ["taco"], 5, 43, 15, 0],
        "1f32f": [["🌯"], "", "", ["burrito"], 5, 44, 15, 0],
        "1f330": [["🌰"], "", "󾁌", ["chestnut"], 5, 45, 15, 0],
        "1f331": [["🌱"], "", "󾀾", ["seedling"], 5, 46, 15, 0],
        "1f332": [["🌲"], "", "", ["evergreen_tree"], 5, 47, 15, 0],
        "1f333": [["🌳"], "", "", ["deciduous_tree"], 5, 48, 15, 0],
        "1f334": [["🌴"], "", "󾁇", ["palm_tree"], 5, 49, 15, 0],
        "1f335": [["🌵"], "", "󾁈", ["cactus"], 5, 50, 15, 0],
        "1f336-fe0f": [["🌶️", "🌶"], "", "", ["hot_pepper"], 5, 51, 15, 0],
        "1f337": [["🌷"], "", "󾀽", ["tulip"], 5, 52, 15, 0],
        "1f338": [["🌸"], "", "󾁀", ["cherry_blossom"], 5, 53, 15, 0],
        "1f339": [["🌹"], "", "󾁁", ["rose"], 5, 54, 15, 0],
        "1f33a": [["🌺"], "", "󾁅", ["hibiscus"], 5, 55, 15, 0],
        "1f33b": [["🌻"], "", "󾁆", ["sunflower"], 5, 56, 15, 0],
        "1f33c": [["🌼"], "", "󾁍", ["blossom"], 5, 57, 15, 0],
        "1f33d": [["🌽"], "", "󾁊", ["corn"], 5, 58, 15, 0],
        "1f33e": [["🌾"], "", "󾁉", ["ear_of_rice"], 5, 59, 15, 0],
        "1f33f": [["🌿"], "", "󾁎", ["herb"], 5, 60, 15, 0],
        "1f340": [["🍀"], "", "󾀼", ["four_leaf_clover"], 6, 0, 15, 0],
        "1f341": [["🍁"], "", "󾀿", ["maple_leaf"], 6, 1, 15, 0],
        "1f342": [["🍂"], "", "󾁂", ["fallen_leaf"], 6, 2, 15, 0],
        "1f343": [["🍃"], "", "󾁃", ["leaves"], 6, 3, 15, 0],
        "1f344": [["🍄"], "", "󾁋", ["mushroom"], 6, 4, 15, 0],
        "1f345": [["🍅"], "", "󾁕", ["tomato"], 6, 5, 15, 0],
        "1f346": [["🍆"], "", "󾁖", ["eggplant"], 6, 6, 15, 0],
        "1f347": [["🍇"], "", "󾁙", ["grapes"], 6, 7, 15, 0],
        "1f348": [["🍈"], "", "󾁗", ["melon"], 6, 8, 15, 0],
        "1f349": [["🍉"], "", "󾁔", ["watermelon"], 6, 9, 15, 0],
        "1f34a": [["🍊"], "", "󾁒", ["tangerine"], 6, 10, 15, 0],
        "1f34b": [["🍋"], "", "", ["lemon"], 6, 11, 15, 0],
        "1f34c": [["🍌"], "", "󾁐", ["banana"], 6, 12, 15, 0],
        "1f34d": [["🍍"], "", "󾁘", ["pineapple"], 6, 13, 15, 0],
        "1f34e": [["🍎"], "", "󾁑", ["apple"], 6, 14, 15, 0],
        "1f34f": [["🍏"], "", "󾁛", ["green_apple"], 6, 15, 15, 0],
        "1f350": [["🍐"], "", "", ["pear"], 6, 16, 15, 0],
        "1f351": [["🍑"], "", "󾁚", ["peach"], 6, 17, 15, 0],
        "1f352": [["🍒"], "", "󾁏", ["cherries"], 6, 18, 15, 0],
        "1f353": [["🍓"], "", "󾁓", ["strawberry"], 6, 19, 15, 0],
        "1f354": [["🍔"], "", "󾥠", ["hamburger"], 6, 20, 15, 0],
        "1f355": [["🍕"], "", "󾥵", ["pizza"], 6, 21, 15, 0],
        "1f356": [["🍖"], "", "󾥲", ["meat_on_bone"], 6, 22, 15, 0],
        "1f357": [["🍗"], "", "󾥶", ["poultry_leg"], 6, 23, 15, 0],
        "1f358": [["🍘"], "", "󾥩", ["rice_cracker"], 6, 24, 15, 0],
        "1f359": [["🍙"], "", "󾥡", ["rice_ball"], 6, 25, 15, 0],
        "1f35a": [["🍚"], "", "󾥪", ["rice"], 6, 26, 15, 0],
        "1f35b": [["🍛"], "", "󾥬", ["curry"], 6, 27, 15, 0],
        "1f35c": [["🍜"], "", "󾥣", ["ramen"], 6, 28, 15, 0],
        "1f35d": [["🍝"], "", "󾥫", ["spaghetti"], 6, 29, 15, 0],
        "1f35e": [["🍞"], "", "󾥤", ["bread"], 6, 30, 15, 0],
        "1f35f": [["🍟"], "", "󾥧", ["fries"], 6, 31, 15, 0],
        "1f360": [["🍠"], "", "󾥴", ["sweet_potato"], 6, 32, 15, 0],
        "1f361": [["🍡"], "", "󾥨", ["dango"], 6, 33, 15, 0],
        "1f362": [["🍢"], "", "󾥭", ["oden"], 6, 34, 15, 0],
        "1f363": [["🍣"], "", "󾥮", ["sushi"], 6, 35, 15, 0],
        "1f364": [["🍤"], "", "󾥿", ["fried_shrimp"], 6, 36, 15, 0],
        "1f365": [["🍥"], "", "󾥳", ["fish_cake"], 6, 37, 15, 0],
        "1f366": [["🍦"], "", "󾥦", ["icecream"], 6, 38, 15, 0],
        "1f367": [["🍧"], "", "󾥱", ["shaved_ice"], 6, 39, 15, 0],
        "1f368": [["🍨"], "", "󾥷", ["ice_cream"], 6, 40, 15, 0],
        "1f369": [["🍩"], "", "󾥸", ["doughnut"], 6, 41, 15, 0],
        "1f36a": [["🍪"], "", "󾥹", ["cookie"], 6, 42, 15, 0],
        "1f36b": [["🍫"], "", "󾥺", ["chocolate_bar"], 6, 43, 15, 0],
        "1f36c": [["🍬"], "", "󾥻", ["candy"], 6, 44, 15, 0],
        "1f36d": [["🍭"], "", "󾥼", ["lollipop"], 6, 45, 15, 0],
        "1f36e": [["🍮"], "", "󾥽", ["custard"], 6, 46, 15, 0],
        "1f36f": [["🍯"], "", "󾥾", ["honey_pot"], 6, 47, 15, 0],
        "1f370": [["🍰"], "", "󾥢", ["cake"], 6, 48, 15, 0],
        "1f371": [["🍱"], "", "󾥯", ["bento"], 6, 49, 15, 0],
        "1f372": [["🍲"], "", "󾥰", ["stew"], 6, 50, 15, 0],
        "1f373": [["🍳"], "", "󾥥", ["fried_egg", "cooking"], 6, 51, 15, 0],
        "1f374": [["🍴"], "", "󾦀", ["fork_and_knife"], 6, 52, 15, 0],
        "1f375": [["🍵"], "", "󾦄", ["tea"], 6, 53, 15, 0],
        "1f376": [["🍶"], "", "󾦅", ["sake"], 6, 54, 15, 0],
        "1f377": [["🍷"], "", "󾦆", ["wine_glass"], 6, 55, 15, 0],
        "1f378": [["🍸"], "", "󾦂", ["cocktail"], 6, 56, 15, 0],
        "1f379": [["🍹"], "", "󾦈", ["tropical_drink"], 6, 57, 15, 0],
        "1f37a": [["🍺"], "", "󾦃", ["beer"], 6, 58, 15, 0],
        "1f37b": [["🍻"], "", "󾦇", ["beers"], 6, 59, 15, 0],
        "1f37c": [["🍼"], "", "", ["baby_bottle"], 6, 60, 15, 0],
        "1f37d-fe0f": [["🍽️", "🍽"], "", "", ["knife_fork_plate"], 7, 0, 15, 0],
        "1f37e": [["🍾"], "", "", ["champagne"], 7, 1, 15, 0],
        "1f37f": [["🍿"], "", "", ["popcorn"], 7, 2, 15, 0],
        "1f380": [["🎀"], "", "󾔏", ["ribbon"], 7, 3, 15, 0],
        "1f381": [["🎁"], "", "󾔐", ["gift"], 7, 4, 15, 0],
        "1f382": [["🎂"], "", "󾔑", ["birthday"], 7, 5, 15, 0],
        "1f383": [["🎃"], "", "󾔟", ["jack_o_lantern"], 7, 6, 15, 0],
        "1f384": [["🎄"], "", "󾔒", ["christmas_tree"], 7, 7, 15, 0],
        "1f385": [["🎅"], "", "󾔓", ["santa"], 7, 8, 15, 0],
        "1f386": [["🎆"], "", "󾔕", ["fireworks"], 7, 14, 15, 0],
        "1f387": [["🎇"], "", "󾔝", ["sparkler"], 7, 15, 15, 0],
        "1f388": [["🎈"], "", "󾔖", ["balloon"], 7, 16, 15, 0],
        "1f389": [["🎉"], "", "󾔗", ["tada"], 7, 17, 15, 0],
        "1f38a": [["🎊"], "", "󾔠", ["confetti_ball"], 7, 18, 15, 0],
        "1f38b": [["🎋"], "", "󾔡", ["tanabata_tree"], 7, 19, 15, 0],
        "1f38c": [["🎌"], "", "󾔔", ["crossed_flags"], 7, 20, 15, 0],
        "1f38d": [["🎍"], "", "󾔘", ["bamboo"], 7, 21, 15, 0],
        "1f38e": [["🎎"], "", "󾔙", ["dolls"], 7, 22, 15, 0],
        "1f38f": [["🎏"], "", "󾔜", ["flags"], 7, 23, 15, 0],
        "1f390": [["🎐"], "", "󾔞", ["wind_chime"], 7, 24, 15, 0],
        "1f391": [["🎑"], "", "󾀗", ["rice_scene"], 7, 25, 15, 0],
        "1f392": [["🎒"], "", "󾔛", ["school_satchel"], 7, 26, 15, 0],
        "1f393": [["🎓"], "", "󾔚", ["mortar_board"], 7, 27, 15, 0],
        "1f396-fe0f": [["🎖️", "🎖"], "", "", ["medal"], 7, 28, 15, 0],
        "1f397-fe0f": [["🎗️", "🎗"], "", "", ["reminder_ribbon"], 7, 29, 15, 0],
        "1f399-fe0f": [["🎙️", "🎙"], "", "", ["studio_microphone"], 7, 30, 15, 0],
        "1f39a-fe0f": [["🎚️", "🎚"], "", "", ["level_slider"], 7, 31, 15, 0],
        "1f39b-fe0f": [["🎛️", "🎛"], "", "", ["control_knobs"], 7, 32, 15, 0],
        "1f39e-fe0f": [["🎞️", "🎞"], "", "", ["film_frames"], 7, 33, 15, 0],
        "1f39f-fe0f": [["🎟️", "🎟"], "", "", ["admission_tickets"], 7, 34, 15, 0],
        "1f3a0": [["🎠"], "", "󾟼", ["carousel_horse"], 7, 35, 15, 0],
        "1f3a1": [["🎡"], "", "󾟽", ["ferris_wheel"], 7, 36, 15, 0],
        "1f3a2": [["🎢"], "", "󾟾", ["roller_coaster"], 7, 37, 15, 0],
        "1f3a3": [["🎣"], "", "󾟿", ["fishing_pole_and_fish"], 7, 38, 15, 0],
        "1f3a4": [["🎤"], "", "󾠀", ["microphone"], 7, 39, 15, 0],
        "1f3a5": [["🎥"], "", "󾠁", ["movie_camera"], 7, 40, 15, 0],
        "1f3a6": [["🎦"], "", "󾠂", ["cinema"], 7, 41, 15, 0],
        "1f3a7": [["🎧"], "", "󾠃", ["headphones"], 7, 42, 15, 0],
        "1f3a8": [["🎨"], "", "󾠄", ["art"], 7, 43, 15, 0],
        "1f3a9": [["🎩"], "", "󾠅", ["tophat"], 7, 44, 15, 0],
        "1f3aa": [["🎪"], "", "󾠆", ["circus_tent"], 7, 45, 15, 0],
        "1f3ab": [["🎫"], "", "󾠇", ["ticket"], 7, 46, 15, 0],
        "1f3ac": [["🎬"], "", "󾠈", ["clapper"], 7, 47, 15, 0],
        "1f3ad": [["🎭"], "", "󾠉", ["performing_arts"], 7, 48, 15, 0],
        "1f3ae": [["🎮"], "", "󾠊", ["video_game"], 7, 49, 15, 0],
        "1f3af": [["🎯"], "", "󾠌", ["dart"], 7, 50, 15, 0],
        "1f3b0": [["🎰"], "", "󾠍", ["slot_machine"], 7, 51, 15, 0],
        "1f3b1": [["🎱"], "", "󾠎", ["8ball"], 7, 52, 15, 0],
        "1f3b2": [["🎲"], "", "󾠏", ["game_die"], 7, 53, 15, 0],
        "1f3b3": [["🎳"], "", "󾠐", ["bowling"], 7, 54, 15, 0],
        "1f3b4": [["🎴"], "", "󾠑", ["flower_playing_cards"], 7, 55, 15, 0],
        "1f3b5": [["🎵"], "", "󾠓", ["musical_note"], 7, 56, 15, 0],
        "1f3b6": [["🎶"], "", "󾠔", ["notes"], 7, 57, 15, 0],
        "1f3b7": [["🎷"], "", "󾠕", ["saxophone"], 7, 58, 15, 0],
        "1f3b8": [["🎸"], "", "󾠖", ["guitar"], 7, 59, 15, 0],
        "1f3b9": [["🎹"], "", "󾠗", ["musical_keyboard"], 7, 60, 15, 0],
        "1f3ba": [["🎺"], "", "󾠘", ["trumpet"], 8, 0, 15, 0],
        "1f3bb": [["🎻"], "", "󾠙", ["violin"], 8, 1, 15, 0],
        "1f3bc": [["🎼"], "", "󾠚", ["musical_score"], 8, 2, 15, 0],
        "1f3bd": [["🎽"], "", "󾟐", ["running_shirt_with_sash"], 8, 3, 15, 0],
        "1f3be": [["🎾"], "", "󾟓", ["tennis"], 8, 4, 15, 0],
        "1f3bf": [["🎿"], "", "󾟕", ["ski"], 8, 5, 15, 0],
        "1f3c0": [["🏀"], "", "󾟖", ["basketball"], 8, 6, 15, 0],
        "1f3c1": [["🏁"], "", "󾟗", ["checkered_flag"], 8, 7, 15, 0],
        "1f3c2": [["🏂"], "", "󾟘", ["snowboarder"], 8, 8, 15, 0],
        "1f3c3-200d-2640-fe0f": [["🏃‍♀️", "🏃‍♀"], "", "", ["woman-running"], 8, 14, 15, 0],
        "1f3c3-200d-2642-fe0f": [["🏃‍♂️", "🏃‍♂", "🏃"], "", "", ["man-running", "runner", "running"], 8, 20, 15, 0],
        "1f3c4-200d-2640-fe0f": [["🏄‍♀️", "🏄‍♀"], "", "", ["woman-surfing"], 8, 32, 15, 0],
        "1f3c4-200d-2642-fe0f": [["🏄‍♂️", "🏄‍♂", "🏄"], "", "", ["man-surfing", "surfer"], 8, 38, 15, 0],
        "1f3c5": [["🏅"], "", "", ["sports_medal"], 8, 50, 15, 0],
        "1f3c6": [["🏆"], "", "󾟛", ["trophy"], 8, 51, 15, 0],
        "1f3c7": [["🏇"], "", "", ["horse_racing"], 8, 52, 15, 0],
        "1f3c8": [["🏈"], "", "󾟝", ["football"], 8, 58, 15, 0],
        "1f3c9": [["🏉"], "", "", ["rugby_football"], 8, 59, 15, 0],
        "1f3ca-200d-2640-fe0f": [["🏊‍♀️", "🏊‍♀"], "", "", ["woman-swimming"], 8, 60, 15, 0],
        "1f3ca-200d-2642-fe0f": [["🏊‍♂️", "🏊‍♂", "🏊"], "", "", ["man-swimming", "swimmer"], 9, 5, 15, 0],
        "1f3cb-fe0f-200d-2640-fe0f": [["🏋️‍♀️"], "", "", ["woman-lifting-weights"], 9, 17, 7, 0],
        "1f3cb-fe0f-200d-2642-fe0f": [["🏋️‍♂️", "🏋️", "🏋"], "", "", ["man-lifting-weights", "weight_lifter"], 9, 23, 7, 0],
        "1f3cc-fe0f-200d-2640-fe0f": [["🏌️‍♀️"], "", "", ["woman-golfing"], 9, 35, 7, 0],
        "1f3cc-fe0f-200d-2642-fe0f": [["🏌️‍♂️", "🏌️", "🏌"], "", "", ["man-golfing", "golfer"], 9, 41, 7, 0],
        "1f3cd-fe0f": [["🏍️", "🏍"], "", "", ["racing_motorcycle"], 9, 53, 15, 0],
        "1f3ce-fe0f": [["🏎️", "🏎"], "", "", ["racing_car"], 9, 54, 15, 0],
        "1f3cf": [["🏏"], "", "", ["cricket_bat_and_ball"], 9, 55, 15, 0],
        "1f3d0": [["🏐"], "", "", ["volleyball"], 9, 56, 15, 0],
        "1f3d1": [["🏑"], "", "", ["field_hockey_stick_and_ball"], 9, 57, 15, 0],
        "1f3d2": [["🏒"], "", "", ["ice_hockey_stick_and_puck"], 9, 58, 15, 0],
        "1f3d3": [["🏓"], "", "", ["table_tennis_paddle_and_ball"], 9, 59, 15, 0],
        "1f3d4-fe0f": [["🏔️", "🏔"], "", "", ["snow_capped_mountain"], 9, 60, 15, 0],
        "1f3d5-fe0f": [["🏕️", "🏕"], "", "", ["camping"], 10, 0, 15, 0],
        "1f3d6-fe0f": [["🏖️", "🏖"], "", "", ["beach_with_umbrella"], 10, 1, 15, 0],
        "1f3d7-fe0f": [["🏗️", "🏗"], "", "", ["building_construction"], 10, 2, 15, 0],
        "1f3d8-fe0f": [["🏘️", "🏘"], "", "", ["house_buildings"], 10, 3, 15, 0],
        "1f3d9-fe0f": [["🏙️", "🏙"], "", "", ["cityscape"], 10, 4, 15, 0],
        "1f3da-fe0f": [["🏚️", "🏚"], "", "", ["derelict_house_building"], 10, 5, 15, 0],
        "1f3db-fe0f": [["🏛️", "🏛"], "", "", ["classical_building"], 10, 6, 15, 0],
        "1f3dc-fe0f": [["🏜️", "🏜"], "", "", ["desert"], 10, 7, 15, 0],
        "1f3dd-fe0f": [["🏝️", "🏝"], "", "", ["desert_island"], 10, 8, 15, 0],
        "1f3de-fe0f": [["🏞️", "🏞"], "", "", ["national_park"], 10, 9, 15, 0],
        "1f3df-fe0f": [["🏟️", "🏟"], "", "", ["stadium"], 10, 10, 15, 0],
        "1f3e0": [["🏠"], "", "󾒰", ["house"], 10, 11, 15, 0],
        "1f3e1": [["🏡"], "", "󾒱", ["house_with_garden"], 10, 12, 15, 0],
        "1f3e2": [["🏢"], "", "󾒲", ["office"], 10, 13, 15, 0],
        "1f3e3": [["🏣"], "", "󾒳", ["post_office"], 10, 14, 15, 0],
        "1f3e4": [["🏤"], "", "", ["european_post_office"], 10, 15, 15, 0],
        "1f3e5": [["🏥"], "", "󾒴", ["hospital"], 10, 16, 15, 0],
        "1f3e6": [["🏦"], "", "󾒵", ["bank"], 10, 17, 15, 0],
        "1f3e7": [["🏧"], "", "󾒶", ["atm"], 10, 18, 15, 0],
        "1f3e8": [["🏨"], "", "󾒷", ["hotel"], 10, 19, 15, 0],
        "1f3e9": [["🏩"], "", "󾒸", ["love_hotel"], 10, 20, 15, 0],
        "1f3ea": [["🏪"], "", "󾒹", ["convenience_store"], 10, 21, 15, 0],
        "1f3eb": [["🏫"], "", "󾒺", ["school"], 10, 22, 15, 0],
        "1f3ec": [["🏬"], "", "󾒽", ["department_store"], 10, 23, 15, 0],
        "1f3ed": [["🏭"], "", "󾓀", ["factory"], 10, 24, 15, 0],
        "1f3ee": [["🏮"], "", "󾓂", ["izakaya_lantern", "lantern"], 10, 25, 15, 0],
        "1f3ef": [["🏯"], "", "󾒾", ["japanese_castle"], 10, 26, 15, 0],
        "1f3f0": [["🏰"], "", "󾒿", ["european_castle"], 10, 27, 15, 0],
        "1f3f3-fe0f-200d-1f308": [["🏳️‍🌈", "🏳‍🌈"], "", "", ["rainbow-flag"], 10, 28, 15, 0],
        "1f3f3-fe0f-200d-26a7-fe0f": [["🏳️‍⚧️"], "", "", ["transgender_flag"], 10, 29, 7, 0],
        "1f3f3-fe0f": [["🏳️", "🏳"], "", "", ["waving_white_flag"], 10, 30, 15, 0],
        "1f3f4-200d-2620-fe0f": [["🏴‍☠️", "🏴‍☠"], "", "", ["pirate_flag"], 10, 31, 15, 0],
        "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f": [["🏴󠁧󠁢󠁥󠁮󠁧󠁿"], "", "", ["flag-england"], 10, 32, 15, 0],
        "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f": [["🏴󠁧󠁢󠁳󠁣󠁴󠁿"], "", "", ["flag-scotland"], 10, 33, 15, 0],
        "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f": [["🏴󠁧󠁢󠁷󠁬󠁳󠁿"], "", "", ["flag-wales"], 10, 34, 15, 0],
        "1f3f4": [["🏴"], "", "", ["waving_black_flag"], 10, 35, 15, 0],
        "1f3f5-fe0f": [["🏵️", "🏵"], "", "", ["rosette"], 10, 36, 15, 0],
        "1f3f7-fe0f": [["🏷️", "🏷"], "", "", ["label"], 10, 37, 15, 0],
        "1f3f8": [["🏸"], "", "", ["badminton_racquet_and_shuttlecock"], 10, 38, 15, 0],
        "1f3f9": [["🏹"], "", "", ["bow_and_arrow"], 10, 39, 15, 0],
        "1f3fa": [["🏺"], "", "", ["amphora"], 10, 40, 15, 0],
        "1f3fb": [["🏻"], "", "", ["skin-tone-2"], 10, 41, 15, 0],
        "1f3fc": [["🏼"], "", "", ["skin-tone-3"], 10, 42, 15, 0],
        "1f3fd": [["🏽"], "", "", ["skin-tone-4"], 10, 43, 15, 0],
        "1f3fe": [["🏾"], "", "", ["skin-tone-5"], 10, 44, 15, 0],
        "1f3ff": [["🏿"], "", "", ["skin-tone-6"], 10, 45, 15, 0],
        "1f400": [["🐀"], "", "", ["rat"], 10, 46, 15, 0],
        "1f401": [["🐁"], "", "", ["mouse2"], 10, 47, 15, 0],
        "1f402": [["🐂"], "", "", ["ox"], 10, 48, 15, 0],
        "1f403": [["🐃"], "", "", ["water_buffalo"], 10, 49, 15, 0],
        "1f404": [["🐄"], "", "", ["cow2"], 10, 50, 15, 0],
        "1f405": [["🐅"], "", "", ["tiger2"], 10, 51, 15, 0],
        "1f406": [["🐆"], "", "", ["leopard"], 10, 52, 15, 0],
        "1f407": [["🐇"], "", "", ["rabbit2"], 10, 53, 15, 0],
        "1f408-200d-2b1b": [["🐈‍⬛"], "", "", ["black_cat"], 10, 54, 15, 0],
        "1f408": [["🐈"], "", "", ["cat2"], 10, 55, 15, 0],
        "1f409": [["🐉"], "", "", ["dragon"], 10, 56, 15, 0],
        "1f40a": [["🐊"], "", "", ["crocodile"], 10, 57, 15, 0],
        "1f40b": [["🐋"], "", "", ["whale2"], 10, 58, 15, 0],
        "1f40c": [["🐌"], "", "󾆹", ["snail"], 10, 59, 15, 0],
        "1f40d": [["🐍"], "", "󾇓", ["snake"], 10, 60, 15, 0],
        "1f40e": [["🐎"], "", "󾟜", ["racehorse"], 11, 0, 15, 0],
        "1f40f": [["🐏"], "", "", ["ram"], 11, 1, 15, 0],
        "1f410": [["🐐"], "", "", ["goat"], 11, 2, 15, 0],
        "1f411": [["🐑"], "", "󾇏", ["sheep"], 11, 3, 15, 0],
        "1f412": [["🐒"], "", "󾇎", ["monkey"], 11, 4, 15, 0],
        "1f413": [["🐓"], "", "", ["rooster"], 11, 5, 15, 0],
        "1f414": [["🐔"], "", "󾇔", ["chicken"], 11, 6, 15, 0],
        "1f415-200d-1f9ba": [["🐕‍🦺"], "", "", ["service_dog"], 11, 7, 15, 0],
        "1f415": [["🐕"], "", "", ["dog2"], 11, 8, 15, 0],
        "1f416": [["🐖"], "", "", ["pig2"], 11, 9, 15, 0],
        "1f417": [["🐗"], "", "󾇕", ["boar"], 11, 10, 15, 0],
        "1f418": [["🐘"], "", "󾇌", ["elephant"], 11, 11, 15, 0],
        "1f419": [["🐙"], "", "󾇅", ["octopus"], 11, 12, 15, 0],
        "1f41a": [["🐚"], "", "󾇆", ["shell"], 11, 13, 15, 0],
        "1f41b": [["🐛"], "", "󾇋", ["bug"], 11, 14, 15, 0],
        "1f41c": [["🐜"], "", "󾇚", ["ant"], 11, 15, 15, 0],
        "1f41d": [["🐝"], "", "󾇡", ["bee", "honeybee"], 11, 16, 15, 0],
        "1f41e": [["🐞"], "", "󾇢", ["ladybug", "lady_beetle"], 11, 17, 15, 0],
        "1f41f": [["🐟"], "", "󾆽", ["fish"], 11, 18, 15, 0],
        "1f420": [["🐠"], "", "󾇉", ["tropical_fish"], 11, 19, 15, 0],
        "1f421": [["🐡"], "", "󾇙", ["blowfish"], 11, 20, 15, 0],
        "1f422": [["🐢"], "", "󾇜", ["turtle"], 11, 21, 15, 0],
        "1f423": [["🐣"], "", "󾇝", ["hatching_chick"], 11, 22, 15, 0],
        "1f424": [["🐤"], "", "󾆺", ["baby_chick"], 11, 23, 15, 0],
        "1f425": [["🐥"], "", "󾆻", ["hatched_chick"], 11, 24, 15, 0],
        "1f426-200d-2b1b": [["🐦‍⬛"], "", "", ["black_bird"], 11, 25, 3, 0],
        "1f426": [["🐦"], "", "󾇈", ["bird"], 11, 26, 15, 0],
        "1f427": [["🐧"], "", "󾆼", ["penguin"], 11, 27, 15, 0],
        "1f428": [["🐨"], "", "󾇍", ["koala"], 11, 28, 15, 0],
        "1f429": [["🐩"], "", "󾇘", ["poodle"], 11, 29, 15, 0],
        "1f42a": [["🐪"], "", "", ["dromedary_camel"], 11, 30, 15, 0],
        "1f42b": [["🐫"], "", "󾇖", ["camel"], 11, 31, 15, 0],
        "1f42c": [["🐬"], "", "󾇇", ["dolphin", "flipper"], 11, 32, 15, 0],
        "1f42d": [["🐭"], "", "󾇂", ["mouse"], 11, 33, 15, 0],
        "1f42e": [["🐮"], "", "󾇑", ["cow"], 11, 34, 15, 0],
        "1f42f": [["🐯"], "", "󾇀", ["tiger"], 11, 35, 15, 0],
        "1f430": [["🐰"], "", "󾇒", ["rabbit"], 11, 36, 15, 0],
        "1f431": [["🐱"], "", "󾆸", ["cat"], 11, 37, 15, 0],
        "1f432": [["🐲"], "", "󾇞", ["dragon_face"], 11, 38, 15, 0],
        "1f433": [["🐳"], "", "󾇃", ["whale"], 11, 39, 15, 0],
        "1f434": [["🐴"], "", "󾆾", ["horse"], 11, 40, 15, 0],
        "1f435": [["🐵"], "", "󾇄", ["monkey_face"], 11, 41, 15, 0],
        "1f436": [["🐶"], "", "󾆷", ["dog"], 11, 42, 15, 0],
        "1f437": [["🐷"], "", "󾆿", ["pig"], 11, 43, 15, 0],
        "1f438": [["🐸"], "", "󾇗", ["frog"], 11, 44, 15, 0],
        "1f439": [["🐹"], "", "󾇊", ["hamster"], 11, 45, 15, 0],
        "1f43a": [["🐺"], "", "󾇐", ["wolf"], 11, 46, 15, 0],
        "1f43b-200d-2744-fe0f": [["🐻‍❄️", "🐻‍❄"], "", "", ["polar_bear"], 11, 47, 15, 0],
        "1f43b": [["🐻"], "", "󾇁", ["bear"], 11, 48, 15, 0],
        "1f43c": [["🐼"], "", "󾇟", ["panda_face"], 11, 49, 15, 0],
        "1f43d": [["🐽"], "", "󾇠", ["pig_nose"], 11, 50, 15, 0],
        "1f43e": [["🐾"], "", "󾇛", ["feet", "paw_prints"], 11, 51, 15, 0],
        "1f43f-fe0f": [["🐿️", "🐿"], "", "", ["chipmunk"], 11, 52, 15, 0],
        "1f440": [["👀"], "", "󾆐", ["eyes"], 11, 53, 15, 0],
        "1f441-fe0f-200d-1f5e8-fe0f": [["👁️‍🗨️"], "", "", ["eye-in-speech-bubble"], 11, 54, 7, 0],
        "1f441-fe0f": [["👁️", "👁"], "", "", ["eye"], 11, 55, 15, 0],
        "1f442": [["👂"], "", "󾆑", ["ear"], 11, 56, 15, 0],
        "1f443": [["👃"], "", "󾆒", ["nose"], 12, 1, 15, 0],
        "1f444": [["👄"], "", "󾆓", ["lips"], 12, 7, 15, 0],
        "1f445": [["👅"], "", "󾆔", ["tongue"], 12, 8, 15, 0],
        "1f446": [["👆"], "", "󾮙", ["point_up_2"], 12, 9, 15, 0],
        "1f447": [["👇"], "", "󾮚", ["point_down"], 12, 15, 15, 0],
        "1f448": [["👈"], "", "󾮛", ["point_left"], 12, 21, 15, 0],
        "1f449": [["👉"], "", "󾮜", ["point_right"], 12, 27, 15, 0],
        "1f44a": [["👊"], "", "󾮖", ["facepunch", "punch"], 12, 33, 15, 0],
        "1f44b": [["👋"], "", "󾮝", ["wave"], 12, 39, 15, 0],
        "1f44c": [["👌"], "", "󾮟", ["ok_hand"], 12, 45, 15, 0],
        "1f44d": [["👍"], "", "󾮗", ["+1", "thumbsup"], 12, 51, 15, 0],
        "1f44e": [["👎"], "", "󾮠", ["-1", "thumbsdown"], 12, 57, 15, 0],
        "1f44f": [["👏"], "", "󾮞", ["clap"], 13, 2, 15, 0],
        "1f450": [["👐"], "", "󾮡", ["open_hands"], 13, 8, 15, 0],
        "1f451": [["👑"], "", "󾓑", ["crown"], 13, 14, 15, 0],
        "1f452": [["👒"], "", "󾓔", ["womans_hat"], 13, 15, 15, 0],
        "1f453": [["👓"], "", "󾓎", ["eyeglasses"], 13, 16, 15, 0],
        "1f454": [["👔"], "", "󾓓", ["necktie"], 13, 17, 15, 0],
        "1f455": [["👕"], "", "󾓏", ["shirt", "tshirt"], 13, 18, 15, 0],
        "1f456": [["👖"], "", "󾓐", ["jeans"], 13, 19, 15, 0],
        "1f457": [["👗"], "", "󾓕", ["dress"], 13, 20, 15, 0],
        "1f458": [["👘"], "", "󾓙", ["kimono"], 13, 21, 15, 0],
        "1f459": [["👙"], "", "󾓚", ["bikini"], 13, 22, 15, 0],
        "1f45a": [["👚"], "", "󾓛", ["womans_clothes"], 13, 23, 15, 0],
        "1f45b": [["👛"], "", "󾓜", ["purse"], 13, 24, 15, 0],
        "1f45c": [["👜"], "", "󾓰", ["handbag"], 13, 25, 15, 0],
        "1f45d": [["👝"], "", "󾓱", ["pouch"], 13, 26, 15, 0],
        "1f45e": [["👞"], "", "󾓌", ["mans_shoe", "shoe"], 13, 27, 15, 0],
        "1f45f": [["👟"], "", "󾓍", ["athletic_shoe"], 13, 28, 15, 0],
        "1f460": [["👠"], "", "󾓖", ["high_heel"], 13, 29, 15, 0],
        "1f461": [["👡"], "", "󾓗", ["sandal"], 13, 30, 15, 0],
        "1f462": [["👢"], "", "󾓘", ["boot"], 13, 31, 15, 0],
        "1f463": [["👣"], "", "󾕓", ["footprints"], 13, 32, 15, 0],
        "1f464": [["👤"], "", "󾆚", ["bust_in_silhouette"], 13, 33, 15, 0],
        "1f465": [["👥"], "", "", ["busts_in_silhouette"], 13, 34, 15, 0],
        "1f466": [["👦"], "", "󾆛", ["boy"], 13, 35, 15, 0],
        "1f467": [["👧"], "", "󾆜", ["girl"], 13, 41, 15, 0],
        "1f468-200d-1f33e": [["👨‍🌾"], "", "", ["male-farmer"], 13, 47, 15, 0],
        "1f468-200d-1f373": [["👨‍🍳"], "", "", ["male-cook"], 13, 53, 15, 0],
        "1f468-200d-1f37c": [["👨‍🍼"], "", "", ["man_feeding_baby"], 13, 59, 15, 0],
        "1f468-200d-1f393": [["👨‍🎓"], "", "", ["male-student"], 14, 4, 15, 0],
        "1f468-200d-1f3a4": [["👨‍🎤"], "", "", ["male-singer"], 14, 10, 15, 0],
        "1f468-200d-1f3a8": [["👨‍🎨"], "", "", ["male-artist"], 14, 16, 15, 0],
        "1f468-200d-1f3eb": [["👨‍🏫"], "", "", ["male-teacher"], 14, 22, 15, 0],
        "1f468-200d-1f3ed": [["👨‍🏭"], "", "", ["male-factory-worker"], 14, 28, 15, 0],
        "1f468-200d-1f466-200d-1f466": [["👨‍👦‍👦"], "", "", ["man-boy-boy"], 14, 34, 15, 0],
        "1f468-200d-1f466": [["👨‍👦"], "", "", ["man-boy"], 14, 35, 15, 0],
        "1f468-200d-1f467-200d-1f466": [["👨‍👧‍👦"], "", "", ["man-girl-boy"], 14, 36, 15, 0],
        "1f468-200d-1f467-200d-1f467": [["👨‍👧‍👧"], "", "", ["man-girl-girl"], 14, 37, 15, 0],
        "1f468-200d-1f467": [["👨‍👧"], "", "", ["man-girl"], 14, 38, 15, 0],
        "1f468-200d-1f468-200d-1f466": [["👨‍👨‍👦"], "", "", ["man-man-boy"], 14, 39, 15, 0],
        "1f468-200d-1f468-200d-1f466-200d-1f466": [["👨‍👨‍👦‍👦"], "", "", ["man-man-boy-boy"], 14, 40, 15, 0],
        "1f468-200d-1f468-200d-1f467": [["👨‍👨‍👧"], "", "", ["man-man-girl"], 14, 41, 15, 0],
        "1f468-200d-1f468-200d-1f467-200d-1f466": [["👨‍👨‍👧‍👦"], "", "", ["man-man-girl-boy"], 14, 42, 15, 0],
        "1f468-200d-1f468-200d-1f467-200d-1f467": [["👨‍👨‍👧‍👧"], "", "", ["man-man-girl-girl"], 14, 43, 15, 0],
        "1f468-200d-1f469-200d-1f466": [["👨‍👩‍👦", "👪"], "", "", ["man-woman-boy", "family"], 14, 44, 15, 0],
        "1f468-200d-1f469-200d-1f466-200d-1f466": [["👨‍👩‍👦‍👦"], "", "", ["man-woman-boy-boy"], 14, 45, 15, 0],
        "1f468-200d-1f469-200d-1f467": [["👨‍👩‍👧"], "", "", ["man-woman-girl"], 14, 46, 15, 0],
        "1f468-200d-1f469-200d-1f467-200d-1f466": [["👨‍👩‍👧‍👦"], "", "", ["man-woman-girl-boy"], 14, 47, 15, 0],
        "1f468-200d-1f469-200d-1f467-200d-1f467": [["👨‍👩‍👧‍👧"], "", "", ["man-woman-girl-girl"], 14, 48, 15, 0],
        "1f468-200d-1f4bb": [["👨‍💻"], "", "", ["male-technologist"], 14, 49, 15, 0],
        "1f468-200d-1f4bc": [["👨‍💼"], "", "", ["male-office-worker"], 14, 55, 15, 0],
        "1f468-200d-1f527": [["👨‍🔧"], "", "", ["male-mechanic"], 15, 0, 15, 0],
        "1f468-200d-1f52c": [["👨‍🔬"], "", "", ["male-scientist"], 15, 6, 15, 0],
        "1f468-200d-1f680": [["👨‍🚀"], "", "", ["male-astronaut"], 15, 12, 15, 0],
        "1f468-200d-1f692": [["👨‍🚒"], "", "", ["male-firefighter"], 15, 18, 15, 0],
        "1f468-200d-1f9af": [["👨‍🦯"], "", "", ["man_with_probing_cane"], 15, 24, 15, 0],
        "1f468-200d-1f9b0": [["👨‍🦰"], "", "", ["red_haired_man"], 15, 30, 15, 0],
        "1f468-200d-1f9b1": [["👨‍🦱"], "", "", ["curly_haired_man"], 15, 36, 15, 0],
        "1f468-200d-1f9b2": [["👨‍🦲"], "", "", ["bald_man"], 15, 42, 15, 0],
        "1f468-200d-1f9b3": [["👨‍🦳"], "", "", ["white_haired_man"], 15, 48, 15, 0],
        "1f468-200d-1f9bc": [["👨‍🦼"], "", "", ["man_in_motorized_wheelchair"], 15, 54, 15, 0],
        "1f468-200d-1f9bd": [["👨‍🦽"], "", "", ["man_in_manual_wheelchair"], 15, 60, 15, 0],
        "1f468-200d-2695-fe0f": [["👨‍⚕️", "👨‍⚕"], "", "", ["male-doctor"], 16, 5, 15, 0],
        "1f468-200d-2696-fe0f": [["👨‍⚖️", "👨‍⚖"], "", "", ["male-judge"], 16, 11, 15, 0],
        "1f468-200d-2708-fe0f": [["👨‍✈️", "👨‍✈"], "", "", ["male-pilot"], 16, 17, 15, 0],
        "1f468-200d-2764-fe0f-200d-1f468": [["👨‍❤️‍👨", "👨‍❤‍👨"], "", "", ["man-heart-man"], 16, 23, 15, 0],
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [["👨‍❤️‍💋‍👨", "👨‍❤‍💋‍👨"], "", "", ["man-kiss-man"], 16, 49, 15, 0],
        "1f468": [["👨"], "", "󾆝", ["man"], 17, 14, 15, 0],
        "1f469-200d-1f33e": [["👩‍🌾"], "", "", ["female-farmer"], 17, 20, 15, 0],
        "1f469-200d-1f373": [["👩‍🍳"], "", "", ["female-cook"], 17, 26, 15, 0],
        "1f469-200d-1f37c": [["👩‍🍼"], "", "", ["woman_feeding_baby"], 17, 32, 15, 0],
        "1f469-200d-1f393": [["👩‍🎓"], "", "", ["female-student"], 17, 38, 15, 0],
        "1f469-200d-1f3a4": [["👩‍🎤"], "", "", ["female-singer"], 17, 44, 15, 0],
        "1f469-200d-1f3a8": [["👩‍🎨"], "", "", ["female-artist"], 17, 50, 15, 0],
        "1f469-200d-1f3eb": [["👩‍🏫"], "", "", ["female-teacher"], 17, 56, 15, 0],
        "1f469-200d-1f3ed": [["👩‍🏭"], "", "", ["female-factory-worker"], 18, 1, 15, 0],
        "1f469-200d-1f466-200d-1f466": [["👩‍👦‍👦"], "", "", ["woman-boy-boy"], 18, 7, 15, 0],
        "1f469-200d-1f466": [["👩‍👦"], "", "", ["woman-boy"], 18, 8, 15, 0],
        "1f469-200d-1f467-200d-1f466": [["👩‍👧‍👦"], "", "", ["woman-girl-boy"], 18, 9, 15, 0],
        "1f469-200d-1f467-200d-1f467": [["👩‍👧‍👧"], "", "", ["woman-girl-girl"], 18, 10, 15, 0],
        "1f469-200d-1f467": [["👩‍👧"], "", "", ["woman-girl"], 18, 11, 15, 0],
        "1f469-200d-1f469-200d-1f466": [["👩‍👩‍👦"], "", "", ["woman-woman-boy"], 18, 12, 15, 0],
        "1f469-200d-1f469-200d-1f466-200d-1f466": [["👩‍👩‍👦‍👦"], "", "", ["woman-woman-boy-boy"], 18, 13, 15, 0],
        "1f469-200d-1f469-200d-1f467": [["👩‍👩‍👧"], "", "", ["woman-woman-girl"], 18, 14, 15, 0],
        "1f469-200d-1f469-200d-1f467-200d-1f466": [["👩‍👩‍👧‍👦"], "", "", ["woman-woman-girl-boy"], 18, 15, 15, 0],
        "1f469-200d-1f469-200d-1f467-200d-1f467": [["👩‍👩‍👧‍👧"], "", "", ["woman-woman-girl-girl"], 18, 16, 15, 0],
        "1f469-200d-1f4bb": [["👩‍💻"], "", "", ["female-technologist"], 18, 17, 15, 0],
        "1f469-200d-1f4bc": [["👩‍💼"], "", "", ["female-office-worker"], 18, 23, 15, 0],
        "1f469-200d-1f527": [["👩‍🔧"], "", "", ["female-mechanic"], 18, 29, 15, 0],
        "1f469-200d-1f52c": [["👩‍🔬"], "", "", ["female-scientist"], 18, 35, 15, 0],
        "1f469-200d-1f680": [["👩‍🚀"], "", "", ["female-astronaut"], 18, 41, 15, 0],
        "1f469-200d-1f692": [["👩‍🚒"], "", "", ["female-firefighter"], 18, 47, 15, 0],
        "1f469-200d-1f9af": [["👩‍🦯"], "", "", ["woman_with_probing_cane"], 18, 53, 15, 0],
        "1f469-200d-1f9b0": [["👩‍🦰"], "", "", ["red_haired_woman"], 18, 59, 15, 0],
        "1f469-200d-1f9b1": [["👩‍🦱"], "", "", ["curly_haired_woman"], 19, 4, 15, 0],
        "1f469-200d-1f9b2": [["👩‍🦲"], "", "", ["bald_woman"], 19, 10, 15, 0],
        "1f469-200d-1f9b3": [["👩‍🦳"], "", "", ["white_haired_woman"], 19, 16, 15, 0],
        "1f469-200d-1f9bc": [["👩‍🦼"], "", "", ["woman_in_motorized_wheelchair"], 19, 22, 15, 0],
        "1f469-200d-1f9bd": [["👩‍🦽"], "", "", ["woman_in_manual_wheelchair"], 19, 28, 15, 0],
        "1f469-200d-2695-fe0f": [["👩‍⚕️", "👩‍⚕"], "", "", ["female-doctor"], 19, 34, 15, 0],
        "1f469-200d-2696-fe0f": [["👩‍⚖️", "👩‍⚖"], "", "", ["female-judge"], 19, 40, 15, 0],
        "1f469-200d-2708-fe0f": [["👩‍✈️", "👩‍✈"], "", "", ["female-pilot"], 19, 46, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f468": [["👩‍❤️‍👨", "👩‍❤‍👨"], "", "", ["woman-heart-man"], 19, 52, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f469": [["👩‍❤️‍👩", "👩‍❤‍👩"], "", "", ["woman-heart-woman"], 20, 17, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": [["👩‍❤️‍💋‍👨", "👩‍❤‍💋‍👨"], "", "", ["woman-kiss-man"], 20, 43, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [["👩‍❤️‍💋‍👩", "👩‍❤‍💋‍👩"], "", "", ["woman-kiss-woman"], 21, 8, 15, 0],
        "1f469": [["👩"], "", "󾆞", ["woman"], 21, 34, 15, 0],
        "1f46b": [["👫"], "", "󾆠", ["man_and_woman_holding_hands", "woman_and_man_holding_hands", "couple"], 21, 41, 15, 0],
        "1f46c": [["👬"], "", "", ["two_men_holding_hands", "men_holding_hands"], 22, 6, 15, 0],
        "1f46d": [["👭"], "", "", ["two_women_holding_hands", "women_holding_hands"], 22, 32, 15, 0],
        "1f46e-200d-2640-fe0f": [["👮‍♀️", "👮‍♀"], "", "", ["female-police-officer"], 22, 58, 15, 0],
        "1f46e-200d-2642-fe0f": [["👮‍♂️", "👮‍♂", "👮"], "", "", ["male-police-officer", "cop"], 23, 3, 15, 0],
        "1f46f-200d-2640-fe0f": [["👯‍♀️", "👯‍♀", "👯"], "", "", ["women-with-bunny-ears-partying", "woman-with-bunny-ears-partying", "dancers"], 23, 15, 15, 0],
        "1f46f-200d-2642-fe0f": [["👯‍♂️", "👯‍♂"], "", "", ["men-with-bunny-ears-partying", "man-with-bunny-ears-partying"], 23, 16, 15, 0],
        "1f470-200d-2640-fe0f": [["👰‍♀️", "👰‍♀"], "", "", ["woman_with_veil"], 23, 18, 15, 0],
        "1f470-200d-2642-fe0f": [["👰‍♂️", "👰‍♂"], "", "", ["man_with_veil"], 23, 24, 15, 0],
        "1f470": [["👰"], "", "󾆣", ["bride_with_veil"], 23, 30, 15, 0],
        "1f471-200d-2640-fe0f": [["👱‍♀️", "👱‍♀"], "", "", ["blond-haired-woman"], 23, 36, 15, 0],
        "1f471-200d-2642-fe0f": [["👱‍♂️", "👱‍♂", "👱"], "", "", ["blond-haired-man", "person_with_blond_hair"], 23, 42, 15, 0],
        "1f472": [["👲"], "", "󾆥", ["man_with_gua_pi_mao"], 23, 54, 15, 0],
        "1f473-200d-2640-fe0f": [["👳‍♀️", "👳‍♀"], "", "", ["woman-wearing-turban"], 23, 60, 15, 0],
        "1f473-200d-2642-fe0f": [["👳‍♂️", "👳‍♂", "👳"], "", "", ["man-wearing-turban", "man_with_turban"], 24, 5, 15, 0],
        "1f474": [["👴"], "", "󾆧", ["older_man"], 24, 17, 15, 0],
        "1f475": [["👵"], "", "󾆨", ["older_woman"], 24, 23, 15, 0],
        "1f476": [["👶"], "", "󾆩", ["baby"], 24, 29, 15, 0],
        "1f477-200d-2640-fe0f": [["👷‍♀️", "👷‍♀"], "", "", ["female-construction-worker"], 24, 35, 15, 0],
        "1f477-200d-2642-fe0f": [["👷‍♂️", "👷‍♂", "👷"], "", "", ["male-construction-worker", "construction_worker"], 24, 41, 15, 0],
        "1f478": [["👸"], "", "󾆫", ["princess"], 24, 53, 15, 0],
        "1f479": [["👹"], "", "󾆬", ["japanese_ogre"], 24, 59, 15, 0],
        "1f47a": [["👺"], "", "󾆭", ["japanese_goblin"], 24, 60, 15, 0],
        "1f47b": [["👻"], "", "󾆮", ["ghost"], 25, 0, 15, 0],
        "1f47c": [["👼"], "", "󾆯", ["angel"], 25, 1, 15, 0],
        "1f47d": [["👽"], "", "󾆰", ["alien"], 25, 7, 15, 0],
        "1f47e": [["👾"], "", "󾆱", ["space_invader"], 25, 8, 15, 0],
        "1f47f": [["👿"], "", "󾆲", ["imp"], 25, 9, 15, 0],
        "1f480": [["💀"], "", "󾆳", ["skull"], 25, 10, 15, 0],
        "1f481-200d-2640-fe0f": [["💁‍♀️", "💁‍♀", "💁"], "", "", ["woman-tipping-hand", "information_desk_person"], 25, 11, 15, 0],
        "1f481-200d-2642-fe0f": [["💁‍♂️", "💁‍♂"], "", "", ["man-tipping-hand"], 25, 17, 15, 0],
        "1f482-200d-2640-fe0f": [["💂‍♀️", "💂‍♀"], "", "", ["female-guard"], 25, 29, 15, 0],
        "1f482-200d-2642-fe0f": [["💂‍♂️", "💂‍♂", "💂"], "", "", ["male-guard", "guardsman"], 25, 35, 15, 0],
        "1f483": [["💃"], "", "󾆶", ["dancer"], 25, 47, 15, 0],
        "1f484": [["💄"], "", "󾆕", ["lipstick"], 25, 53, 15, 0],
        "1f485": [["💅"], "", "󾆖", ["nail_care"], 25, 54, 15, 0],
        "1f486-200d-2640-fe0f": [["💆‍♀️", "💆‍♀", "💆"], "", "", ["woman-getting-massage", "massage"], 25, 60, 15, 0],
        "1f486-200d-2642-fe0f": [["💆‍♂️", "💆‍♂"], "", "", ["man-getting-massage"], 26, 5, 15, 0],
        "1f487-200d-2640-fe0f": [["💇‍♀️", "💇‍♀", "💇"], "", "", ["woman-getting-haircut", "haircut"], 26, 17, 15, 0],
        "1f487-200d-2642-fe0f": [["💇‍♂️", "💇‍♂"], "", "", ["man-getting-haircut"], 26, 23, 15, 0],
        "1f488": [["💈"], "", "󾆙", ["barber"], 26, 35, 15, 0],
        "1f489": [["💉"], "", "󾔉", ["syringe"], 26, 36, 15, 0],
        "1f48a": [["💊"], "", "󾔊", ["pill"], 26, 37, 15, 0],
        "1f48b": [["💋"], "", "󾠣", ["kiss"], 26, 38, 15, 0],
        "1f48c": [["💌"], "", "󾠤", ["love_letter"], 26, 39, 15, 0],
        "1f48d": [["💍"], "", "󾠥", ["ring"], 26, 40, 15, 0],
        "1f48e": [["💎"], "", "󾠦", ["gem"], 26, 41, 15, 0],
        "1f48f": [["💏"], "", "󾠧", ["couplekiss"], 26, 42, 15, 0],
        "1f490": [["💐"], "", "󾠨", ["bouquet"], 27, 7, 15, 0],
        "1f491": [["💑"], "", "󾠩", ["couple_with_heart"], 27, 8, 15, 0],
        "1f492": [["💒"], "", "󾠪", ["wedding"], 27, 34, 15, 0],
        "1f493": [["💓"], "", "󾬍", ["heartbeat"], 27, 35, 15, 0],
        "1f494": [["💔"], "", "󾬎", ["broken_heart"], 27, 36, 15, 0, "</3"],
        "1f495": [["💕"], "", "󾬏", ["two_hearts"], 27, 37, 15, 0],
        "1f496": [["💖"], "", "󾬐", ["sparkling_heart"], 27, 38, 15, 0],
        "1f497": [["💗"], "", "󾬑", ["heartpulse"], 27, 39, 15, 0],
        "1f498": [["💘"], "", "󾬒", ["cupid"], 27, 40, 15, 0],
        "1f499": [["💙"], "", "󾬓", ["blue_heart"], 27, 41, 15, 0, "<3"],
        "1f49a": [["💚"], "", "󾬔", ["green_heart"], 27, 42, 15, 0, "<3"],
        "1f49b": [["💛"], "", "󾬕", ["yellow_heart"], 27, 43, 15, 0, "<3"],
        "1f49c": [["💜"], "", "󾬖", ["purple_heart"], 27, 44, 15, 0, "<3"],
        "1f49d": [["💝"], "", "󾬗", ["gift_heart"], 27, 45, 15, 0],
        "1f49e": [["💞"], "", "󾬘", ["revolving_hearts"], 27, 46, 15, 0],
        "1f49f": [["💟"], "", "󾬙", ["heart_decoration"], 27, 47, 15, 0],
        "1f4a0": [["💠"], "", "󾭕", ["diamond_shape_with_a_dot_inside"], 27, 48, 15, 0],
        "1f4a1": [["💡"], "", "󾭖", ["bulb"], 27, 49, 15, 0],
        "1f4a2": [["💢"], "", "󾭗", ["anger"], 27, 50, 15, 0],
        "1f4a3": [["💣"], "", "󾭘", ["bomb"], 27, 51, 15, 0],
        "1f4a4": [["💤"], "", "󾭙", ["zzz"], 27, 52, 15, 0],
        "1f4a5": [["💥"], "", "󾭚", ["boom", "collision"], 27, 53, 15, 0],
        "1f4a6": [["💦"], "", "󾭛", ["sweat_drops"], 27, 54, 15, 0],
        "1f4a7": [["💧"], "", "󾭜", ["droplet"], 27, 55, 15, 0],
        "1f4a8": [["💨"], "", "󾭝", ["dash"], 27, 56, 15, 0],
        "1f4a9": [["💩"], "", "󾓴", ["hankey", "poop", "shit"], 27, 57, 15, 0],
        "1f4aa": [["💪"], "", "󾭞", ["muscle"], 27, 58, 15, 0],
        "1f4ab": [["💫"], "", "󾭟", ["dizzy"], 28, 3, 15, 0],
        "1f4ac": [["💬"], "", "󾔲", ["speech_balloon"], 28, 4, 15, 0],
        "1f4ad": [["💭"], "", "", ["thought_balloon"], 28, 5, 15, 0],
        "1f4ae": [["💮"], "", "󾭺", ["white_flower"], 28, 6, 15, 0],
        "1f4af": [["💯"], "", "󾭻", ["100"], 28, 7, 15, 0],
        "1f4b0": [["💰"], "", "󾓝", ["moneybag"], 28, 8, 15, 0],
        "1f4b1": [["💱"], "", "󾓞", ["currency_exchange"], 28, 9, 15, 0],
        "1f4b2": [["💲"], "", "󾓠", ["heavy_dollar_sign"], 28, 10, 15, 0],
        "1f4b3": [["💳"], "", "󾓡", ["credit_card"], 28, 11, 15, 0],
        "1f4b4": [["💴"], "", "󾓢", ["yen"], 28, 12, 15, 0],
        "1f4b5": [["💵"], "", "󾓣", ["dollar"], 28, 13, 15, 0],
        "1f4b6": [["💶"], "", "", ["euro"], 28, 14, 15, 0],
        "1f4b7": [["💷"], "", "", ["pound"], 28, 15, 15, 0],
        "1f4b8": [["💸"], "", "󾓤", ["money_with_wings"], 28, 16, 15, 0],
        "1f4b9": [["💹"], "", "󾓟", ["chart"], 28, 17, 15, 0],
        "1f4ba": [["💺"], "", "󾔷", ["seat"], 28, 18, 15, 0],
        "1f4bb": [["💻"], "", "󾔸", ["computer"], 28, 19, 15, 0],
        "1f4bc": [["💼"], "", "󾔻", ["briefcase"], 28, 20, 15, 0],
        "1f4bd": [["💽"], "", "󾔼", ["minidisc"], 28, 21, 15, 0],
        "1f4be": [["💾"], "", "󾔽", ["floppy_disk"], 28, 22, 15, 0],
        "1f4bf": [["💿"], "", "󾠝", ["cd"], 28, 23, 15, 0],
        "1f4c0": [["📀"], "", "󾠞", ["dvd"], 28, 24, 15, 0],
        "1f4c1": [["📁"], "", "󾕃", ["file_folder"], 28, 25, 15, 0],
        "1f4c2": [["📂"], "", "󾕄", ["open_file_folder"], 28, 26, 15, 0],
        "1f4c3": [["📃"], "", "󾕀", ["page_with_curl"], 28, 27, 15, 0],
        "1f4c4": [["📄"], "", "󾕁", ["page_facing_up"], 28, 28, 15, 0],
        "1f4c5": [["📅"], "", "󾕂", ["date"], 28, 29, 15, 0],
        "1f4c6": [["📆"], "", "󾕉", ["calendar"], 28, 30, 15, 0],
        "1f4c7": [["📇"], "", "󾕍", ["card_index"], 28, 31, 15, 0],
        "1f4c8": [["📈"], "", "󾕋", ["chart_with_upwards_trend"], 28, 32, 15, 0],
        "1f4c9": [["📉"], "", "󾕌", ["chart_with_downwards_trend"], 28, 33, 15, 0],
        "1f4ca": [["📊"], "", "󾕊", ["bar_chart"], 28, 34, 15, 0],
        "1f4cb": [["📋"], "", "󾕈", ["clipboard"], 28, 35, 15, 0],
        "1f4cc": [["📌"], "", "󾕎", ["pushpin"], 28, 36, 15, 0],
        "1f4cd": [["📍"], "", "󾔿", ["round_pushpin"], 28, 37, 15, 0],
        "1f4ce": [["📎"], "", "󾔺", ["paperclip"], 28, 38, 15, 0],
        "1f4cf": [["📏"], "", "󾕐", ["straight_ruler"], 28, 39, 15, 0],
        "1f4d0": [["📐"], "", "󾕑", ["triangular_ruler"], 28, 40, 15, 0],
        "1f4d1": [["📑"], "", "󾕒", ["bookmark_tabs"], 28, 41, 15, 0],
        "1f4d2": [["📒"], "", "󾕏", ["ledger"], 28, 42, 15, 0],
        "1f4d3": [["📓"], "", "󾕅", ["notebook"], 28, 43, 15, 0],
        "1f4d4": [["📔"], "", "󾕇", ["notebook_with_decorative_cover"], 28, 44, 15, 0],
        "1f4d5": [["📕"], "", "󾔂", ["closed_book"], 28, 45, 15, 0],
        "1f4d6": [["📖"], "", "󾕆", ["book", "open_book"], 28, 46, 15, 0],
        "1f4d7": [["📗"], "", "󾓿", ["green_book"], 28, 47, 15, 0],
        "1f4d8": [["📘"], "", "󾔀", ["blue_book"], 28, 48, 15, 0],
        "1f4d9": [["📙"], "", "󾔁", ["orange_book"], 28, 49, 15, 0],
        "1f4da": [["📚"], "", "󾔃", ["books"], 28, 50, 15, 0],
        "1f4db": [["📛"], "", "󾔄", ["name_badge"], 28, 51, 15, 0],
        "1f4dc": [["📜"], "", "󾓽", ["scroll"], 28, 52, 15, 0],
        "1f4dd": [["📝"], "", "󾔧", ["memo", "pencil"], 28, 53, 15, 0],
        "1f4de": [["📞"], "", "󾔤", ["telephone_receiver"], 28, 54, 15, 0],
        "1f4df": [["📟"], "", "󾔢", ["pager"], 28, 55, 15, 0],
        "1f4e0": [["📠"], "", "󾔨", ["fax"], 28, 56, 15, 0],
        "1f4e1": [["📡"], "", "󾔱", ["satellite_antenna"], 28, 57, 15, 0],
        "1f4e2": [["📢"], "", "󾔯", ["loudspeaker"], 28, 58, 15, 0],
        "1f4e3": [["📣"], "", "󾔰", ["mega"], 28, 59, 15, 0],
        "1f4e4": [["📤"], "", "󾔳", ["outbox_tray"], 28, 60, 15, 0],
        "1f4e5": [["📥"], "", "󾔴", ["inbox_tray"], 29, 0, 15, 0],
        "1f4e6": [["📦"], "", "󾔵", ["package"], 29, 1, 15, 0],
        "1f4e7": [["📧"], "", "󾮒", ["e-mail"], 29, 2, 15, 0],
        "1f4e8": [["📨"], "", "󾔪", ["incoming_envelope"], 29, 3, 15, 0],
        "1f4e9": [["📩"], "", "󾔫", ["envelope_with_arrow"], 29, 4, 15, 0],
        "1f4ea": [["📪"], "", "󾔬", ["mailbox_closed"], 29, 5, 15, 0],
        "1f4eb": [["📫"], "", "󾔭", ["mailbox"], 29, 6, 15, 0],
        "1f4ec": [["📬"], "", "", ["mailbox_with_mail"], 29, 7, 15, 0],
        "1f4ed": [["📭"], "", "", ["mailbox_with_no_mail"], 29, 8, 15, 0],
        "1f4ee": [["📮"], "", "󾔮", ["postbox"], 29, 9, 15, 0],
        "1f4ef": [["📯"], "", "", ["postal_horn"], 29, 10, 15, 0],
        "1f4f0": [["📰"], "", "󾠢", ["newspaper"], 29, 11, 15, 0],
        "1f4f1": [["📱"], "", "󾔥", ["iphone"], 29, 12, 15, 0],
        "1f4f2": [["📲"], "", "󾔦", ["calling"], 29, 13, 15, 0],
        "1f4f3": [["📳"], "", "󾠹", ["vibration_mode"], 29, 14, 15, 0],
        "1f4f4": [["📴"], "", "󾠺", ["mobile_phone_off"], 29, 15, 15, 0],
        "1f4f5": [["📵"], "", "", ["no_mobile_phones"], 29, 16, 15, 0],
        "1f4f6": [["📶"], "", "󾠸", ["signal_strength"], 29, 17, 15, 0],
        "1f4f7": [["📷"], "", "󾓯", ["camera"], 29, 18, 15, 0],
        "1f4f8": [["📸"], "", "", ["camera_with_flash"], 29, 19, 15, 0],
        "1f4f9": [["📹"], "", "󾓹", ["video_camera"], 29, 20, 15, 0],
        "1f4fa": [["📺"], "", "󾠜", ["tv"], 29, 21, 15, 0],
        "1f4fb": [["📻"], "", "󾠟", ["radio"], 29, 22, 15, 0],
        "1f4fc": [["📼"], "", "󾠠", ["vhs"], 29, 23, 15, 0],
        "1f4fd-fe0f": [["📽️", "📽"], "", "", ["film_projector"], 29, 24, 15, 0],
        "1f4ff": [["📿"], "", "", ["prayer_beads"], 29, 25, 15, 0],
        "1f500": [["🔀"], "", "", ["twisted_rightwards_arrows"], 29, 26, 15, 0],
        "1f501": [["🔁"], "", "", ["repeat"], 29, 27, 15, 0],
        "1f502": [["🔂"], "", "", ["repeat_one"], 29, 28, 15, 0],
        "1f503": [["🔃"], "", "󾮑", ["arrows_clockwise"], 29, 29, 15, 0],
        "1f504": [["🔄"], "", "", ["arrows_counterclockwise"], 29, 30, 15, 0],
        "1f505": [["🔅"], "", "", ["low_brightness"], 29, 31, 15, 0],
        "1f506": [["🔆"], "", "", ["high_brightness"], 29, 32, 15, 0],
        "1f507": [["🔇"], "", "", ["mute"], 29, 33, 15, 0],
        "1f508": [["🔈"], "", "", ["speaker"], 29, 34, 15, 0],
        "1f509": [["🔉"], "", "", ["sound"], 29, 35, 15, 0],
        "1f50a": [["🔊"], "", "󾠡", ["loud_sound"], 29, 36, 15, 0],
        "1f50b": [["🔋"], "", "󾓼", ["battery"], 29, 37, 15, 0],
        "1f50c": [["🔌"], "", "󾓾", ["electric_plug"], 29, 38, 15, 0],
        "1f50d": [["🔍"], "", "󾮅", ["mag"], 29, 39, 15, 0],
        "1f50e": [["🔎"], "", "󾮍", ["mag_right"], 29, 40, 15, 0],
        "1f50f": [["🔏"], "", "󾮐", ["lock_with_ink_pen"], 29, 41, 15, 0],
        "1f510": [["🔐"], "", "󾮊", ["closed_lock_with_key"], 29, 42, 15, 0],
        "1f511": [["🔑"], "", "󾮂", ["key"], 29, 43, 15, 0],
        "1f512": [["🔒"], "", "󾮆", ["lock"], 29, 44, 15, 0],
        "1f513": [["🔓"], "", "󾮇", ["unlock"], 29, 45, 15, 0],
        "1f514": [["🔔"], "", "󾓲", ["bell"], 29, 46, 15, 0],
        "1f515": [["🔕"], "", "", ["no_bell"], 29, 47, 15, 0],
        "1f516": [["🔖"], "", "󾮏", ["bookmark"], 29, 48, 15, 0],
        "1f517": [["🔗"], "", "󾭋", ["link"], 29, 49, 15, 0],
        "1f518": [["🔘"], "", "󾮌", ["radio_button"], 29, 50, 15, 0],
        "1f519": [["🔙"], "", "󾮎", ["back"], 29, 51, 15, 0],
        "1f51a": [["🔚"], "", "󾀚", ["end"], 29, 52, 15, 0],
        "1f51b": [["🔛"], "", "󾀙", ["on"], 29, 53, 15, 0],
        "1f51c": [["🔜"], "", "󾀘", ["soon"], 29, 54, 15, 0],
        "1f51d": [["🔝"], "", "󾭂", ["top"], 29, 55, 15, 0],
        "1f51e": [["🔞"], "", "󾬥", ["underage"], 29, 56, 15, 0],
        "1f51f": [["🔟"], "", "󾠻", ["keycap_ten"], 29, 57, 15, 0],
        "1f520": [["🔠"], "", "󾭼", ["capital_abcd"], 29, 58, 15, 0],
        "1f521": [["🔡"], "", "󾭽", ["abcd"], 29, 59, 15, 0],
        "1f522": [["🔢"], "", "󾭾", ["1234"], 29, 60, 15, 0],
        "1f523": [["🔣"], "", "󾭿", ["symbols"], 30, 0, 15, 0],
        "1f524": [["🔤"], "", "󾮀", ["abc"], 30, 1, 15, 0],
        "1f525": [["🔥"], "", "󾓶", ["fire"], 30, 2, 15, 0],
        "1f526": [["🔦"], "", "󾓻", ["flashlight"], 30, 3, 15, 0],
        "1f527": [["🔧"], "", "󾓉", ["wrench"], 30, 4, 15, 0],
        "1f528": [["🔨"], "", "󾓊", ["hammer"], 30, 5, 15, 0],
        "1f529": [["🔩"], "", "󾓋", ["nut_and_bolt"], 30, 6, 15, 0],
        "1f52a": [["🔪"], "", "󾓺", ["hocho", "knife"], 30, 7, 15, 0],
        "1f52b": [["🔫"], "", "󾓵", ["gun"], 30, 8, 15, 0],
        "1f52c": [["🔬"], "", "", ["microscope"], 30, 9, 15, 0],
        "1f52d": [["🔭"], "", "", ["telescope"], 30, 10, 15, 0],
        "1f52e": [["🔮"], "", "󾓷", ["crystal_ball"], 30, 11, 15, 0],
        "1f52f": [["🔯"], "", "󾓸", ["six_pointed_star"], 30, 12, 15, 0],
        "1f530": [["🔰"], "", "󾁄", ["beginner"], 30, 13, 15, 0],
        "1f531": [["🔱"], "", "󾓒", ["trident"], 30, 14, 15, 0],
        "1f532": [["🔲"], "", "󾭤", ["black_square_button"], 30, 15, 15, 0],
        "1f533": [["🔳"], "", "󾭧", ["white_square_button"], 30, 16, 15, 0],
        "1f534": [["🔴"], "", "󾭣", ["red_circle"], 30, 17, 15, 0],
        "1f535": [["🔵"], "", "󾭤", ["large_blue_circle"], 30, 18, 15, 0],
        "1f536": [["🔶"], "", "󾭳", ["large_orange_diamond"], 30, 19, 15, 0],
        "1f537": [["🔷"], "", "󾭴", ["large_blue_diamond"], 30, 20, 15, 0],
        "1f538": [["🔸"], "", "󾭵", ["small_orange_diamond"], 30, 21, 15, 0],
        "1f539": [["🔹"], "", "󾭶", ["small_blue_diamond"], 30, 22, 15, 0],
        "1f53a": [["🔺"], "", "󾭸", ["small_red_triangle"], 30, 23, 15, 0],
        "1f53b": [["🔻"], "", "󾭹", ["small_red_triangle_down"], 30, 24, 15, 0],
        "1f53c": [["🔼"], "", "󾬁", ["arrow_up_small"], 30, 25, 15, 0],
        "1f53d": [["🔽"], "", "󾬀", ["arrow_down_small"], 30, 26, 15, 0],
        "1f549-fe0f": [["🕉️", "🕉"], "", "", ["om_symbol"], 30, 27, 15, 0],
        "1f54a-fe0f": [["🕊️", "🕊"], "", "", ["dove_of_peace"], 30, 28, 15, 0],
        "1f54b": [["🕋"], "", "", ["kaaba"], 30, 29, 15, 0],
        "1f54c": [["🕌"], "", "", ["mosque"], 30, 30, 15, 0],
        "1f54d": [["🕍"], "", "", ["synagogue"], 30, 31, 15, 0],
        "1f54e": [["🕎"], "", "", ["menorah_with_nine_branches"], 30, 32, 15, 0],
        "1f550": [["🕐"], "", "󾀞", ["clock1"], 30, 33, 15, 0],
        "1f551": [["🕑"], "", "󾀟", ["clock2"], 30, 34, 15, 0],
        "1f552": [["🕒"], "", "󾀠", ["clock3"], 30, 35, 15, 0],
        "1f553": [["🕓"], "", "󾀡", ["clock4"], 30, 36, 15, 0],
        "1f554": [["🕔"], "", "󾀢", ["clock5"], 30, 37, 15, 0],
        "1f555": [["🕕"], "", "󾀣", ["clock6"], 30, 38, 15, 0],
        "1f556": [["🕖"], "", "󾀤", ["clock7"], 30, 39, 15, 0],
        "1f557": [["🕗"], "", "󾀥", ["clock8"], 30, 40, 15, 0],
        "1f558": [["🕘"], "", "󾀦", ["clock9"], 30, 41, 15, 0],
        "1f559": [["🕙"], "", "󾀧", ["clock10"], 30, 42, 15, 0],
        "1f55a": [["🕚"], "", "󾀨", ["clock11"], 30, 43, 15, 0],
        "1f55b": [["🕛"], "", "󾀩", ["clock12"], 30, 44, 15, 0],
        "1f55c": [["🕜"], "", "", ["clock130"], 30, 45, 15, 0],
        "1f55d": [["🕝"], "", "", ["clock230"], 30, 46, 15, 0],
        "1f55e": [["🕞"], "", "", ["clock330"], 30, 47, 15, 0],
        "1f55f": [["🕟"], "", "", ["clock430"], 30, 48, 15, 0],
        "1f560": [["🕠"], "", "", ["clock530"], 30, 49, 15, 0],
        "1f561": [["🕡"], "", "", ["clock630"], 30, 50, 15, 0],
        "1f562": [["🕢"], "", "", ["clock730"], 30, 51, 15, 0],
        "1f563": [["🕣"], "", "", ["clock830"], 30, 52, 15, 0],
        "1f564": [["🕤"], "", "", ["clock930"], 30, 53, 15, 0],
        "1f565": [["🕥"], "", "", ["clock1030"], 30, 54, 15, 0],
        "1f566": [["🕦"], "", "", ["clock1130"], 30, 55, 15, 0],
        "1f567": [["🕧"], "", "", ["clock1230"], 30, 56, 15, 0],
        "1f56f-fe0f": [["🕯️", "🕯"], "", "", ["candle"], 30, 57, 15, 0],
        "1f570-fe0f": [["🕰️", "🕰"], "", "", ["mantelpiece_clock"], 30, 58, 15, 0],
        "1f573-fe0f": [["🕳️", "🕳"], "", "", ["hole"], 30, 59, 15, 0],
        "1f574-fe0f": [["🕴️", "🕴"], "", "", ["man_in_business_suit_levitating"], 30, 60, 15, 0],
        "1f575-fe0f-200d-2640-fe0f": [["🕵️‍♀️"], "", "", ["female-detective"], 31, 5, 7, 0],
        "1f575-fe0f-200d-2642-fe0f": [["🕵️‍♂️", "🕵️", "🕵"], "", "", ["male-detective", "sleuth_or_spy"], 31, 11, 7, 0],
        "1f576-fe0f": [["🕶️", "🕶"], "", "", ["dark_sunglasses"], 31, 23, 15, 0],
        "1f577-fe0f": [["🕷️", "🕷"], "", "", ["spider"], 31, 24, 15, 0],
        "1f578-fe0f": [["🕸️", "🕸"], "", "", ["spider_web"], 31, 25, 15, 0],
        "1f579-fe0f": [["🕹️", "🕹"], "", "", ["joystick"], 31, 26, 15, 0],
        "1f57a": [["🕺"], "", "", ["man_dancing"], 31, 27, 15, 0],
        "1f587-fe0f": [["🖇️", "🖇"], "", "", ["linked_paperclips"], 31, 33, 15, 0],
        "1f58a-fe0f": [["🖊️", "🖊"], "", "", ["lower_left_ballpoint_pen"], 31, 34, 15, 0],
        "1f58b-fe0f": [["🖋️", "🖋"], "", "", ["lower_left_fountain_pen"], 31, 35, 15, 0],
        "1f58c-fe0f": [["🖌️", "🖌"], "", "", ["lower_left_paintbrush"], 31, 36, 15, 0],
        "1f58d-fe0f": [["🖍️", "🖍"], "", "", ["lower_left_crayon"], 31, 37, 15, 0],
        "1f590-fe0f": [["🖐️", "🖐"], "", "", ["raised_hand_with_fingers_splayed"], 31, 38, 15, 0],
        "1f595": [["🖕"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 31, 44, 15, 0],
        "1f596": [["🖖"], "", "", ["spock-hand"], 31, 50, 15, 0],
        "1f5a4": [["🖤"], "", "", ["black_heart"], 31, 56, 15, 0],
        "1f5a5-fe0f": [["🖥️", "🖥"], "", "", ["desktop_computer"], 31, 57, 15, 0],
        "1f5a8-fe0f": [["🖨️", "🖨"], "", "", ["printer"], 31, 58, 15, 0],
        "1f5b1-fe0f": [["🖱️", "🖱"], "", "", ["three_button_mouse"], 31, 59, 15, 0],
        "1f5b2-fe0f": [["🖲️", "🖲"], "", "", ["trackball"], 31, 60, 15, 0],
        "1f5bc-fe0f": [["🖼️", "🖼"], "", "", ["frame_with_picture"], 32, 0, 15, 0],
        "1f5c2-fe0f": [["🗂️", "🗂"], "", "", ["card_index_dividers"], 32, 1, 15, 0],
        "1f5c3-fe0f": [["🗃️", "🗃"], "", "", ["card_file_box"], 32, 2, 15, 0],
        "1f5c4-fe0f": [["🗄️", "🗄"], "", "", ["file_cabinet"], 32, 3, 15, 0],
        "1f5d1-fe0f": [["🗑️", "🗑"], "", "", ["wastebasket"], 32, 4, 15, 0],
        "1f5d2-fe0f": [["🗒️", "🗒"], "", "", ["spiral_note_pad"], 32, 5, 15, 0],
        "1f5d3-fe0f": [["🗓️", "🗓"], "", "", ["spiral_calendar_pad"], 32, 6, 15, 0],
        "1f5dc-fe0f": [["🗜️", "🗜"], "", "", ["compression"], 32, 7, 15, 0],
        "1f5dd-fe0f": [["🗝️", "🗝"], "", "", ["old_key"], 32, 8, 15, 0],
        "1f5de-fe0f": [["🗞️", "🗞"], "", "", ["rolled_up_newspaper"], 32, 9, 15, 0],
        "1f5e1-fe0f": [["🗡️", "🗡"], "", "", ["dagger_knife"], 32, 10, 15, 0],
        "1f5e3-fe0f": [["🗣️", "🗣"], "", "", ["speaking_head_in_silhouette"], 32, 11, 15, 0],
        "1f5e8-fe0f": [["🗨️", "🗨"], "", "", ["left_speech_bubble"], 32, 12, 15, 0],
        "1f5ef-fe0f": [["🗯️", "🗯"], "", "", ["right_anger_bubble"], 32, 13, 15, 0],
        "1f5f3-fe0f": [["🗳️", "🗳"], "", "", ["ballot_box_with_ballot"], 32, 14, 15, 0],
        "1f5fa-fe0f": [["🗺️", "🗺"], "", "", ["world_map"], 32, 15, 15, 0],
        "1f5fb": [["🗻"], "", "󾓃", ["mount_fuji"], 32, 16, 15, 0],
        "1f5fc": [["🗼"], "", "󾓄", ["tokyo_tower"], 32, 17, 15, 0],
        "1f5fd": [["🗽"], "", "󾓆", ["statue_of_liberty"], 32, 18, 15, 0],
        "1f5fe": [["🗾"], "", "󾓇", ["japan"], 32, 19, 15, 0],
        "1f5ff": [["🗿"], "", "󾓈", ["moyai"], 32, 20, 15, 0],
        "1f600": [["😀"], "", "", ["grinning"], 32, 21, 15, 0, ":D"],
        "1f601": [["😁"], "", "󾌳", ["grin"], 32, 22, 15, 0],
        "1f602": [["😂"], "", "󾌴", ["joy"], 32, 23, 15, 0],
        "1f603": [["😃"], "", "󾌰", ["smiley"], 32, 24, 15, 0, ":)"],
        "1f604": [["😄"], "", "󾌸", ["smile"], 32, 25, 15, 0, ":)"],
        "1f605": [["😅"], "", "󾌱", ["sweat_smile"], 32, 26, 15, 0],
        "1f606": [["😆"], "", "󾌲", ["laughing", "satisfied"], 32, 27, 15, 0],
        "1f607": [["😇"], "", "", ["innocent"], 32, 28, 15, 0],
        "1f608": [["😈"], "", "", ["smiling_imp"], 32, 29, 15, 0],
        "1f609": [["😉"], "", "󾍇", ["wink"], 32, 30, 15, 0, ";)"],
        "1f60a": [["😊"], "", "󾌵", ["blush"], 32, 31, 15, 0, ":)"],
        "1f60b": [["😋"], "", "󾌫", ["yum"], 32, 32, 15, 0],
        "1f60c": [["😌"], "", "󾌾", ["relieved"], 32, 33, 15, 0],
        "1f60d": [["😍"], "", "󾌧", ["heart_eyes"], 32, 34, 15, 0],
        "1f60e": [["😎"], "", "", ["sunglasses"], 32, 35, 15, 0],
        "1f60f": [["😏"], "", "󾍃", ["smirk"], 32, 36, 15, 0],
        "1f610": [["😐"], "", "", ["neutral_face"], 32, 37, 15, 0],
        "1f611": [["😑"], "", "", ["expressionless"], 32, 38, 15, 0],
        "1f612": [["😒"], "", "󾌦", ["unamused"], 32, 39, 15, 0, ":("],
        "1f613": [["😓"], "", "󾍄", ["sweat"], 32, 40, 15, 0],
        "1f614": [["😔"], "", "󾍀", ["pensive"], 32, 41, 15, 0],
        "1f615": [["😕"], "", "", ["confused"], 32, 42, 15, 0],
        "1f616": [["😖"], "", "󾌿", ["confounded"], 32, 43, 15, 0],
        "1f617": [["😗"], "", "", ["kissing"], 32, 44, 15, 0],
        "1f618": [["😘"], "", "󾌬", ["kissing_heart"], 32, 45, 15, 0],
        "1f619": [["😙"], "", "", ["kissing_smiling_eyes"], 32, 46, 15, 0],
        "1f61a": [["😚"], "", "󾌭", ["kissing_closed_eyes"], 32, 47, 15, 0],
        "1f61b": [["😛"], "", "", ["stuck_out_tongue"], 32, 48, 15, 0, ":p"],
        "1f61c": [["😜"], "", "󾌩", ["stuck_out_tongue_winking_eye"], 32, 49, 15, 0, ";p"],
        "1f61d": [["😝"], "", "󾌪", ["stuck_out_tongue_closed_eyes"], 32, 50, 15, 0],
        "1f61e": [["😞"], "", "󾌣", ["disappointed"], 32, 51, 15, 0, ":("],
        "1f61f": [["😟"], "", "", ["worried"], 32, 52, 15, 0],
        "1f620": [["😠"], "", "󾌠", ["angry"], 32, 53, 15, 0],
        "1f621": [["😡"], "", "󾌽", ["rage"], 32, 54, 15, 0],
        "1f622": [["😢"], "", "󾌹", ["cry"], 32, 55, 15, 0, ":'("],
        "1f623": [["😣"], "", "󾌼", ["persevere"], 32, 56, 15, 0],
        "1f624": [["😤"], "", "󾌨", ["triumph"], 32, 57, 15, 0],
        "1f625": [["😥"], "", "󾍅", ["disappointed_relieved"], 32, 58, 15, 0],
        "1f626": [["😦"], "", "", ["frowning"], 32, 59, 15, 0],
        "1f627": [["😧"], "", "", ["anguished"], 32, 60, 15, 0],
        "1f628": [["😨"], "", "󾌻", ["fearful"], 33, 0, 15, 0],
        "1f629": [["😩"], "", "󾌡", ["weary"], 33, 1, 15, 0],
        "1f62a": [["😪"], "", "󾍂", ["sleepy"], 33, 2, 15, 0],
        "1f62b": [["😫"], "", "󾍆", ["tired_face"], 33, 3, 15, 0],
        "1f62c": [["😬"], "", "", ["grimacing"], 33, 4, 15, 0],
        "1f62d": [["😭"], "", "󾌺", ["sob"], 33, 5, 15, 0, ":'("],
        "1f62e-200d-1f4a8": [["😮‍💨"], "", "", ["face_exhaling"], 33, 6, 15, 0],
        "1f62e": [["😮"], "", "", ["open_mouth"], 33, 7, 15, 0],
        "1f62f": [["😯"], "", "", ["hushed"], 33, 8, 15, 0],
        "1f630": [["😰"], "", "󾌥", ["cold_sweat"], 33, 9, 15, 0],
        "1f631": [["😱"], "", "󾍁", ["scream"], 33, 10, 15, 0],
        "1f632": [["😲"], "", "󾌢", ["astonished"], 33, 11, 15, 0],
        "1f633": [["😳"], "", "󾌯", ["flushed"], 33, 12, 15, 0],
        "1f634": [["😴"], "", "", ["sleeping"], 33, 13, 15, 0],
        "1f635-200d-1f4ab": [["😵‍💫"], "", "", ["face_with_spiral_eyes"], 33, 14, 15, 0],
        "1f635": [["😵"], "", "󾌤", ["dizzy_face"], 33, 15, 15, 0],
        "1f636-200d-1f32b-fe0f": [["😶‍🌫️", "😶‍🌫"], "", "", ["face_in_clouds"], 33, 16, 15, 0],
        "1f636": [["😶"], "", "", ["no_mouth"], 33, 17, 15, 0],
        "1f637": [["😷"], "", "󾌮", ["mask"], 33, 18, 15, 0],
        "1f638": [["😸"], "", "󾍉", ["smile_cat"], 33, 19, 15, 0],
        "1f639": [["😹"], "", "󾍊", ["joy_cat"], 33, 20, 15, 0],
        "1f63a": [["😺"], "", "󾍈", ["smiley_cat"], 33, 21, 15, 0],
        "1f63b": [["😻"], "", "󾍌", ["heart_eyes_cat"], 33, 22, 15, 0],
        "1f63c": [["😼"], "", "󾍏", ["smirk_cat"], 33, 23, 15, 0],
        "1f63d": [["😽"], "", "󾍋", ["kissing_cat"], 33, 24, 15, 0],
        "1f63e": [["😾"], "", "󾍎", ["pouting_cat"], 33, 25, 15, 0],
        "1f63f": [["😿"], "", "󾍍", ["crying_cat_face"], 33, 26, 15, 0],
        "1f640": [["🙀"], "", "󾍐", ["scream_cat"], 33, 27, 15, 0],
        "1f641": [["🙁"], "", "", ["slightly_frowning_face"], 33, 28, 15, 0],
        "1f642": [["🙂"], "", "", ["slightly_smiling_face"], 33, 29, 15, 0],
        "1f643": [["🙃"], "", "", ["upside_down_face"], 33, 30, 15, 0],
        "1f644": [["🙄"], "", "", ["face_with_rolling_eyes"], 33, 31, 15, 0],
        "1f645-200d-2640-fe0f": [["🙅‍♀️", "🙅‍♀", "🙅"], "", "", ["woman-gesturing-no", "no_good"], 33, 32, 15, 0],
        "1f645-200d-2642-fe0f": [["🙅‍♂️", "🙅‍♂"], "", "", ["man-gesturing-no"], 33, 38, 15, 0],
        "1f646-200d-2640-fe0f": [["🙆‍♀️", "🙆‍♀", "🙆"], "", "", ["woman-gesturing-ok", "ok_woman"], 33, 50, 15, 0],
        "1f646-200d-2642-fe0f": [["🙆‍♂️", "🙆‍♂"], "", "", ["man-gesturing-ok"], 33, 56, 15, 0],
        "1f647-200d-2640-fe0f": [["🙇‍♀️", "🙇‍♀"], "", "", ["woman-bowing"], 34, 7, 15, 0],
        "1f647-200d-2642-fe0f": [["🙇‍♂️", "🙇‍♂"], "", "", ["man-bowing"], 34, 13, 15, 0],
        "1f647": [["🙇"], "", "󾍓", ["bow"], 34, 19, 15, 0],
        "1f648": [["🙈"], "", "󾍔", ["see_no_evil"], 34, 25, 15, 0],
        "1f649": [["🙉"], "", "󾍖", ["hear_no_evil"], 34, 26, 15, 0],
        "1f64a": [["🙊"], "", "󾍕", ["speak_no_evil"], 34, 27, 15, 0],
        "1f64b-200d-2640-fe0f": [["🙋‍♀️", "🙋‍♀", "🙋"], "", "", ["woman-raising-hand", "raising_hand"], 34, 28, 15, 0],
        "1f64b-200d-2642-fe0f": [["🙋‍♂️", "🙋‍♂"], "", "", ["man-raising-hand"], 34, 34, 15, 0],
        "1f64c": [["🙌"], "", "󾍘", ["raised_hands"], 34, 46, 15, 0],
        "1f64d-200d-2640-fe0f": [["🙍‍♀️", "🙍‍♀", "🙍"], "", "", ["woman-frowning", "person_frowning"], 34, 52, 15, 0],
        "1f64d-200d-2642-fe0f": [["🙍‍♂️", "🙍‍♂"], "", "", ["man-frowning"], 34, 58, 15, 0],
        "1f64e-200d-2640-fe0f": [["🙎‍♀️", "🙎‍♀", "🙎"], "", "", ["woman-pouting", "person_with_pouting_face"], 35, 9, 15, 0],
        "1f64e-200d-2642-fe0f": [["🙎‍♂️", "🙎‍♂"], "", "", ["man-pouting"], 35, 15, 15, 0],
        "1f64f": [["🙏"], "", "󾍛", ["pray"], 35, 27, 15, 0],
        "1f680": [["🚀"], "", "󾟭", ["rocket"], 35, 33, 15, 0],
        "1f681": [["🚁"], "", "", ["helicopter"], 35, 34, 15, 0],
        "1f682": [["🚂"], "", "", ["steam_locomotive"], 35, 35, 15, 0],
        "1f683": [["🚃"], "", "󾟟", ["railway_car"], 35, 36, 15, 0],
        "1f684": [["🚄"], "", "󾟢", ["bullettrain_side"], 35, 37, 15, 0],
        "1f685": [["🚅"], "", "󾟣", ["bullettrain_front"], 35, 38, 15, 0],
        "1f686": [["🚆"], "", "", ["train2"], 35, 39, 15, 0],
        "1f687": [["🚇"], "", "󾟠", ["metro"], 35, 40, 15, 0],
        "1f688": [["🚈"], "", "", ["light_rail"], 35, 41, 15, 0],
        "1f689": [["🚉"], "", "󾟬", ["station"], 35, 42, 15, 0],
        "1f68a": [["🚊"], "", "", ["tram"], 35, 43, 15, 0],
        "1f68b": [["🚋"], "", "", ["train"], 35, 44, 15, 0],
        "1f68c": [["🚌"], "", "󾟦", ["bus"], 35, 45, 15, 0],
        "1f68d": [["🚍"], "", "", ["oncoming_bus"], 35, 46, 15, 0],
        "1f68e": [["🚎"], "", "", ["trolleybus"], 35, 47, 15, 0],
        "1f68f": [["🚏"], "", "󾟧", ["busstop"], 35, 48, 15, 0],
        "1f690": [["🚐"], "", "", ["minibus"], 35, 49, 15, 0],
        "1f691": [["🚑"], "", "󾟳", ["ambulance"], 35, 50, 15, 0],
        "1f692": [["🚒"], "", "󾟲", ["fire_engine"], 35, 51, 15, 0],
        "1f693": [["🚓"], "", "󾟴", ["police_car"], 35, 52, 15, 0],
        "1f694": [["🚔"], "", "", ["oncoming_police_car"], 35, 53, 15, 0],
        "1f695": [["🚕"], "", "󾟯", ["taxi"], 35, 54, 15, 0],
        "1f696": [["🚖"], "", "", ["oncoming_taxi"], 35, 55, 15, 0],
        "1f697": [["🚗"], "", "󾟤", ["car", "red_car"], 35, 56, 15, 0],
        "1f698": [["🚘"], "", "", ["oncoming_automobile"], 35, 57, 15, 0],
        "1f699": [["🚙"], "", "󾟥", ["blue_car"], 35, 58, 15, 0],
        "1f69a": [["🚚"], "", "󾟱", ["truck"], 35, 59, 15, 0],
        "1f69b": [["🚛"], "", "", ["articulated_lorry"], 35, 60, 15, 0],
        "1f69c": [["🚜"], "", "", ["tractor"], 36, 0, 15, 0],
        "1f69d": [["🚝"], "", "", ["monorail"], 36, 1, 15, 0],
        "1f69e": [["🚞"], "", "", ["mountain_railway"], 36, 2, 15, 0],
        "1f69f": [["🚟"], "", "", ["suspension_railway"], 36, 3, 15, 0],
        "1f6a0": [["🚠"], "", "", ["mountain_cableway"], 36, 4, 15, 0],
        "1f6a1": [["🚡"], "", "", ["aerial_tramway"], 36, 5, 15, 0],
        "1f6a2": [["🚢"], "", "󾟨", ["ship"], 36, 6, 15, 0],
        "1f6a3-200d-2640-fe0f": [["🚣‍♀️", "🚣‍♀"], "", "", ["woman-rowing-boat"], 36, 7, 15, 0],
        "1f6a3-200d-2642-fe0f": [["🚣‍♂️", "🚣‍♂", "🚣"], "", "", ["man-rowing-boat", "rowboat"], 36, 13, 15, 0],
        "1f6a4": [["🚤"], "", "󾟮", ["speedboat"], 36, 25, 15, 0],
        "1f6a5": [["🚥"], "", "󾟷", ["traffic_light"], 36, 26, 15, 0],
        "1f6a6": [["🚦"], "", "", ["vertical_traffic_light"], 36, 27, 15, 0],
        "1f6a7": [["🚧"], "", "󾟸", ["construction"], 36, 28, 15, 0],
        "1f6a8": [["🚨"], "", "󾟹", ["rotating_light"], 36, 29, 15, 0],
        "1f6a9": [["🚩"], "", "󾬢", ["triangular_flag_on_post"], 36, 30, 15, 0],
        "1f6aa": [["🚪"], "", "󾓳", ["door"], 36, 31, 15, 0],
        "1f6ab": [["🚫"], "", "󾭈", ["no_entry_sign"], 36, 32, 15, 0],
        "1f6ac": [["🚬"], "", "󾬞", ["smoking"], 36, 33, 15, 0],
        "1f6ad": [["🚭"], "", "󾬟", ["no_smoking"], 36, 34, 15, 0],
        "1f6ae": [["🚮"], "", "", ["put_litter_in_its_place"], 36, 35, 15, 0],
        "1f6af": [["🚯"], "", "", ["do_not_litter"], 36, 36, 15, 0],
        "1f6b0": [["🚰"], "", "", ["potable_water"], 36, 37, 15, 0],
        "1f6b1": [["🚱"], "", "", ["non-potable_water"], 36, 38, 15, 0],
        "1f6b2": [["🚲"], "", "󾟫", ["bike"], 36, 39, 15, 0],
        "1f6b3": [["🚳"], "", "", ["no_bicycles"], 36, 40, 15, 0],
        "1f6b4-200d-2640-fe0f": [["🚴‍♀️", "🚴‍♀"], "", "", ["woman-biking"], 36, 41, 15, 0],
        "1f6b4-200d-2642-fe0f": [["🚴‍♂️", "🚴‍♂", "🚴"], "", "", ["man-biking", "bicyclist"], 36, 47, 15, 0],
        "1f6b5-200d-2640-fe0f": [["🚵‍♀️", "🚵‍♀"], "", "", ["woman-mountain-biking"], 36, 59, 15, 0],
        "1f6b5-200d-2642-fe0f": [["🚵‍♂️", "🚵‍♂", "🚵"], "", "", ["man-mountain-biking", "mountain_bicyclist"], 37, 4, 15, 0],
        "1f6b6-200d-2640-fe0f": [["🚶‍♀️", "🚶‍♀"], "", "", ["woman-walking"], 37, 16, 15, 0],
        "1f6b6-200d-2642-fe0f": [["🚶‍♂️", "🚶‍♂", "🚶"], "", "", ["man-walking", "walking"], 37, 22, 15, 0],
        "1f6b7": [["🚷"], "", "", ["no_pedestrians"], 37, 34, 15, 0],
        "1f6b8": [["🚸"], "", "", ["children_crossing"], 37, 35, 15, 0],
        "1f6b9": [["🚹"], "", "󾬳", ["mens"], 37, 36, 15, 0],
        "1f6ba": [["🚺"], "", "󾬴", ["womens"], 37, 37, 15, 0],
        "1f6bb": [["🚻"], "", "󾔆", ["restroom"], 37, 38, 15, 0],
        "1f6bc": [["🚼"], "", "󾬵", ["baby_symbol"], 37, 39, 15, 0],
        "1f6bd": [["🚽"], "", "󾔇", ["toilet"], 37, 40, 15, 0],
        "1f6be": [["🚾"], "", "󾔈", ["wc"], 37, 41, 15, 0],
        "1f6bf": [["🚿"], "", "", ["shower"], 37, 42, 15, 0],
        "1f6c0": [["🛀"], "", "󾔅", ["bath"], 37, 43, 15, 0],
        "1f6c1": [["🛁"], "", "", ["bathtub"], 37, 49, 15, 0],
        "1f6c2": [["🛂"], "", "", ["passport_control"], 37, 50, 15, 0],
        "1f6c3": [["🛃"], "", "", ["customs"], 37, 51, 15, 0],
        "1f6c4": [["🛄"], "", "", ["baggage_claim"], 37, 52, 15, 0],
        "1f6c5": [["🛅"], "", "", ["left_luggage"], 37, 53, 15, 0],
        "1f6cb-fe0f": [["🛋️", "🛋"], "", "", ["couch_and_lamp"], 37, 54, 15, 0],
        "1f6cc": [["🛌"], "", "", ["sleeping_accommodation"], 37, 55, 15, 0],
        "1f6cd-fe0f": [["🛍️", "🛍"], "", "", ["shopping_bags"], 38, 0, 15, 0],
        "1f6ce-fe0f": [["🛎️", "🛎"], "", "", ["bellhop_bell"], 38, 1, 15, 0],
        "1f6cf-fe0f": [["🛏️", "🛏"], "", "", ["bed"], 38, 2, 15, 0],
        "1f6d0": [["🛐"], "", "", ["place_of_worship"], 38, 3, 15, 0],
        "1f6d1": [["🛑"], "", "", ["octagonal_sign"], 38, 4, 15, 0],
        "1f6d2": [["🛒"], "", "", ["shopping_trolley"], 38, 5, 15, 0],
        "1f6d5": [["🛕"], "", "", ["hindu_temple"], 38, 6, 15, 0],
        "1f6d6": [["🛖"], "", "", ["hut"], 38, 7, 15, 0],
        "1f6d7": [["🛗"], "", "", ["elevator"], 38, 8, 15, 0],
        "1f6dc": [["🛜"], "", "", ["wireless"], 38, 9, 3, 0],
        "1f6dd": [["🛝"], "", "", ["playground_slide"], 38, 10, 15, 0],
        "1f6de": [["🛞"], "", "", ["wheel"], 38, 11, 15, 0],
        "1f6df": [["🛟"], "", "", ["ring_buoy"], 38, 12, 15, 0],
        "1f6e0-fe0f": [["🛠️", "🛠"], "", "", ["hammer_and_wrench"], 38, 13, 15, 0],
        "1f6e1-fe0f": [["🛡️", "🛡"], "", "", ["shield"], 38, 14, 15, 0],
        "1f6e2-fe0f": [["🛢️", "🛢"], "", "", ["oil_drum"], 38, 15, 15, 0],
        "1f6e3-fe0f": [["🛣️", "🛣"], "", "", ["motorway"], 38, 16, 15, 0],
        "1f6e4-fe0f": [["🛤️", "🛤"], "", "", ["railway_track"], 38, 17, 15, 0],
        "1f6e5-fe0f": [["🛥️", "🛥"], "", "", ["motor_boat"], 38, 18, 15, 0],
        "1f6e9-fe0f": [["🛩️", "🛩"], "", "", ["small_airplane"], 38, 19, 15, 0],
        "1f6eb": [["🛫"], "", "", ["airplane_departure"], 38, 20, 15, 0],
        "1f6ec": [["🛬"], "", "", ["airplane_arriving"], 38, 21, 15, 0],
        "1f6f0-fe0f": [["🛰️", "🛰"], "", "", ["satellite"], 38, 22, 15, 0],
        "1f6f3-fe0f": [["🛳️", "🛳"], "", "", ["passenger_ship"], 38, 23, 15, 0],
        "1f6f4": [["🛴"], "", "", ["scooter"], 38, 24, 15, 0],
        "1f6f5": [["🛵"], "", "", ["motor_scooter"], 38, 25, 15, 0],
        "1f6f6": [["🛶"], "", "", ["canoe"], 38, 26, 15, 0],
        "1f6f7": [["🛷"], "", "", ["sled"], 38, 27, 15, 0],
        "1f6f8": [["🛸"], "", "", ["flying_saucer"], 38, 28, 15, 0],
        "1f6f9": [["🛹"], "", "", ["skateboard"], 38, 29, 15, 0],
        "1f6fa": [["🛺"], "", "", ["auto_rickshaw"], 38, 30, 15, 0],
        "1f6fb": [["🛻"], "", "", ["pickup_truck"], 38, 31, 15, 0],
        "1f6fc": [["🛼"], "", "", ["roller_skate"], 38, 32, 15, 0],
        "1f7e0": [["🟠"], "", "", ["large_orange_circle"], 38, 33, 15, 0],
        "1f7e1": [["🟡"], "", "", ["large_yellow_circle"], 38, 34, 15, 0],
        "1f7e2": [["🟢"], "", "", ["large_green_circle"], 38, 35, 15, 0],
        "1f7e3": [["🟣"], "", "", ["large_purple_circle"], 38, 36, 15, 0],
        "1f7e4": [["🟤"], "", "", ["large_brown_circle"], 38, 37, 15, 0],
        "1f7e5": [["🟥"], "", "", ["large_red_square"], 38, 38, 15, 0],
        "1f7e6": [["🟦"], "", "", ["large_blue_square"], 38, 39, 15, 0],
        "1f7e7": [["🟧"], "", "", ["large_orange_square"], 38, 40, 15, 0],
        "1f7e8": [["🟨"], "", "", ["large_yellow_square"], 38, 41, 15, 0],
        "1f7e9": [["🟩"], "", "", ["large_green_square"], 38, 42, 15, 0],
        "1f7ea": [["🟪"], "", "", ["large_purple_square"], 38, 43, 15, 0],
        "1f7eb": [["🟫"], "", "", ["large_brown_square"], 38, 44, 15, 0],
        "1f7f0": [["🟰"], "", "", ["heavy_equals_sign"], 38, 45, 15, 0],
        "1f90c": [["🤌"], "", "", ["pinched_fingers"], 38, 46, 15, 0],
        "1f90d": [["🤍"], "", "", ["white_heart"], 38, 52, 15, 0],
        "1f90e": [["🤎"], "", "", ["brown_heart"], 38, 53, 15, 0],
        "1f90f": [["🤏"], "", "", ["pinching_hand"], 38, 54, 15, 0],
        "1f910": [["🤐"], "", "", ["zipper_mouth_face"], 38, 60, 15, 0],
        "1f911": [["🤑"], "", "", ["money_mouth_face"], 39, 0, 15, 0],
        "1f912": [["🤒"], "", "", ["face_with_thermometer"], 39, 1, 15, 0],
        "1f913": [["🤓"], "", "", ["nerd_face"], 39, 2, 15, 0],
        "1f914": [["🤔"], "", "", ["thinking_face"], 39, 3, 15, 0],
        "1f915": [["🤕"], "", "", ["face_with_head_bandage"], 39, 4, 15, 0],
        "1f916": [["🤖"], "", "", ["robot_face"], 39, 5, 15, 0],
        "1f917": [["🤗"], "", "", ["hugging_face"], 39, 6, 15, 0],
        "1f918": [["🤘"], "", "", ["the_horns", "sign_of_the_horns"], 39, 7, 15, 0],
        "1f919": [["🤙"], "", "", ["call_me_hand"], 39, 13, 15, 0],
        "1f91a": [["🤚"], "", "", ["raised_back_of_hand"], 39, 19, 15, 0],
        "1f91b": [["🤛"], "", "", ["left-facing_fist"], 39, 25, 15, 0],
        "1f91c": [["🤜"], "", "", ["right-facing_fist"], 39, 31, 15, 0],
        "1f91d": [["🤝"], "", "", ["handshake"], 39, 37, 15, 0],
        "1f91e": [["🤞"], "", "", ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"], 40, 2, 15, 0],
        "1f91f": [["🤟"], "", "", ["i_love_you_hand_sign"], 40, 8, 15, 0],
        "1f920": [["🤠"], "", "", ["face_with_cowboy_hat"], 40, 14, 15, 0],
        "1f921": [["🤡"], "", "", ["clown_face"], 40, 15, 15, 0],
        "1f922": [["🤢"], "", "", ["nauseated_face"], 40, 16, 15, 0],
        "1f923": [["🤣"], "", "", ["rolling_on_the_floor_laughing"], 40, 17, 15, 0],
        "1f924": [["🤤"], "", "", ["drooling_face"], 40, 18, 15, 0],
        "1f925": [["🤥"], "", "", ["lying_face"], 40, 19, 15, 0],
        "1f926-200d-2640-fe0f": [["🤦‍♀️", "🤦‍♀"], "", "", ["woman-facepalming"], 40, 20, 15, 0],
        "1f926-200d-2642-fe0f": [["🤦‍♂️", "🤦‍♂"], "", "", ["man-facepalming"], 40, 26, 15, 0],
        "1f926": [["🤦"], "", "", ["face_palm"], 40, 32, 15, 0],
        "1f927": [["🤧"], "", "", ["sneezing_face"], 40, 38, 15, 0],
        "1f928": [["🤨"], "", "", ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"], 40, 39, 15, 0],
        "1f929": [["🤩"], "", "", ["star-struck", "grinning_face_with_star_eyes"], 40, 40, 15, 0],
        "1f92a": [["🤪"], "", "", ["zany_face", "grinning_face_with_one_large_and_one_small_eye"], 40, 41, 15, 0],
        "1f92b": [["🤫"], "", "", ["shushing_face", "face_with_finger_covering_closed_lips"], 40, 42, 15, 0],
        "1f92c": [["🤬"], "", "", ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"], 40, 43, 15, 0],
        "1f92d": [["🤭"], "", "", ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"], 40, 44, 15, 0],
        "1f92e": [["🤮"], "", "", ["face_vomiting", "face_with_open_mouth_vomiting"], 40, 45, 15, 0],
        "1f92f": [["🤯"], "", "", ["exploding_head", "shocked_face_with_exploding_head"], 40, 46, 15, 0],
        "1f930": [["🤰"], "", "", ["pregnant_woman"], 40, 47, 15, 0],
        "1f931": [["🤱"], "", "", ["breast-feeding"], 40, 53, 15, 0],
        "1f932": [["🤲"], "", "", ["palms_up_together"], 40, 59, 15, 0],
        "1f933": [["🤳"], "", "", ["selfie"], 41, 4, 15, 0],
        "1f934": [["🤴"], "", "", ["prince"], 41, 10, 15, 0],
        "1f935-200d-2640-fe0f": [["🤵‍♀️", "🤵‍♀"], "", "", ["woman_in_tuxedo"], 41, 16, 15, 0],
        "1f935-200d-2642-fe0f": [["🤵‍♂️", "🤵‍♂"], "", "", ["man_in_tuxedo"], 41, 22, 15, 0],
        "1f935": [["🤵"], "", "", ["person_in_tuxedo"], 41, 28, 15, 0],
        "1f936": [["🤶"], "", "", ["mrs_claus", "mother_christmas"], 41, 34, 15, 0],
        "1f937-200d-2640-fe0f": [["🤷‍♀️", "🤷‍♀"], "", "", ["woman-shrugging"], 41, 40, 15, 0],
        "1f937-200d-2642-fe0f": [["🤷‍♂️", "🤷‍♂"], "", "", ["man-shrugging"], 41, 46, 15, 0],
        "1f937": [["🤷"], "", "", ["shrug"], 41, 52, 15, 0],
        "1f938-200d-2640-fe0f": [["🤸‍♀️", "🤸‍♀"], "", "", ["woman-cartwheeling"], 41, 58, 15, 0],
        "1f938-200d-2642-fe0f": [["🤸‍♂️", "🤸‍♂"], "", "", ["man-cartwheeling"], 42, 3, 15, 0],
        "1f938": [["🤸"], "", "", ["person_doing_cartwheel"], 42, 9, 15, 0],
        "1f939-200d-2640-fe0f": [["🤹‍♀️", "🤹‍♀"], "", "", ["woman-juggling"], 42, 15, 15, 0],
        "1f939-200d-2642-fe0f": [["🤹‍♂️", "🤹‍♂"], "", "", ["man-juggling"], 42, 21, 15, 0],
        "1f939": [["🤹"], "", "", ["juggling"], 42, 27, 15, 0],
        "1f93a": [["🤺"], "", "", ["fencer"], 42, 33, 15, 0],
        "1f93c-200d-2640-fe0f": [["🤼‍♀️", "🤼‍♀"], "", "", ["woman-wrestling"], 42, 34, 15, 0],
        "1f93c-200d-2642-fe0f": [["🤼‍♂️", "🤼‍♂"], "", "", ["man-wrestling"], 42, 35, 15, 0],
        "1f93c": [["🤼"], "", "", ["wrestlers"], 42, 36, 15, 0],
        "1f93d-200d-2640-fe0f": [["🤽‍♀️", "🤽‍♀"], "", "", ["woman-playing-water-polo"], 42, 37, 15, 0],
        "1f93d-200d-2642-fe0f": [["🤽‍♂️", "🤽‍♂"], "", "", ["man-playing-water-polo"], 42, 43, 15, 0],
        "1f93d": [["🤽"], "", "", ["water_polo"], 42, 49, 15, 0],
        "1f93e-200d-2640-fe0f": [["🤾‍♀️", "🤾‍♀"], "", "", ["woman-playing-handball"], 42, 55, 15, 0],
        "1f93e-200d-2642-fe0f": [["🤾‍♂️", "🤾‍♂"], "", "", ["man-playing-handball"], 43, 0, 15, 0],
        "1f93e": [["🤾"], "", "", ["handball"], 43, 6, 15, 0],
        "1f93f": [["🤿"], "", "", ["diving_mask"], 43, 12, 15, 0],
        "1f940": [["🥀"], "", "", ["wilted_flower"], 43, 13, 15, 0],
        "1f941": [["🥁"], "", "", ["drum_with_drumsticks"], 43, 14, 15, 0],
        "1f942": [["🥂"], "", "", ["clinking_glasses"], 43, 15, 15, 0],
        "1f943": [["🥃"], "", "", ["tumbler_glass"], 43, 16, 15, 0],
        "1f944": [["🥄"], "", "", ["spoon"], 43, 17, 15, 0],
        "1f945": [["🥅"], "", "", ["goal_net"], 43, 18, 15, 0],
        "1f947": [["🥇"], "", "", ["first_place_medal"], 43, 19, 15, 0],
        "1f948": [["🥈"], "", "", ["second_place_medal"], 43, 20, 15, 0],
        "1f949": [["🥉"], "", "", ["third_place_medal"], 43, 21, 15, 0],
        "1f94a": [["🥊"], "", "", ["boxing_glove"], 43, 22, 15, 0],
        "1f94b": [["🥋"], "", "", ["martial_arts_uniform"], 43, 23, 15, 0],
        "1f94c": [["🥌"], "", "", ["curling_stone"], 43, 24, 15, 0],
        "1f94d": [["🥍"], "", "", ["lacrosse"], 43, 25, 15, 0],
        "1f94e": [["🥎"], "", "", ["softball"], 43, 26, 15, 0],
        "1f94f": [["🥏"], "", "", ["flying_disc"], 43, 27, 15, 0],
        "1f950": [["🥐"], "", "", ["croissant"], 43, 28, 15, 0],
        "1f951": [["🥑"], "", "", ["avocado"], 43, 29, 15, 0],
        "1f952": [["🥒"], "", "", ["cucumber"], 43, 30, 15, 0],
        "1f953": [["🥓"], "", "", ["bacon"], 43, 31, 15, 0],
        "1f954": [["🥔"], "", "", ["potato"], 43, 32, 15, 0],
        "1f955": [["🥕"], "", "", ["carrot"], 43, 33, 15, 0],
        "1f956": [["🥖"], "", "", ["baguette_bread"], 43, 34, 15, 0],
        "1f957": [["🥗"], "", "", ["green_salad"], 43, 35, 15, 0],
        "1f958": [["🥘"], "", "", ["shallow_pan_of_food"], 43, 36, 15, 0],
        "1f959": [["🥙"], "", "", ["stuffed_flatbread"], 43, 37, 15, 0],
        "1f95a": [["🥚"], "", "", ["egg"], 43, 38, 15, 0],
        "1f95b": [["🥛"], "", "", ["glass_of_milk"], 43, 39, 15, 0],
        "1f95c": [["🥜"], "", "", ["peanuts"], 43, 40, 15, 0],
        "1f95d": [["🥝"], "", "", ["kiwifruit"], 43, 41, 15, 0],
        "1f95e": [["🥞"], "", "", ["pancakes"], 43, 42, 15, 0],
        "1f95f": [["🥟"], "", "", ["dumpling"], 43, 43, 15, 0],
        "1f960": [["🥠"], "", "", ["fortune_cookie"], 43, 44, 15, 0],
        "1f961": [["🥡"], "", "", ["takeout_box"], 43, 45, 15, 0],
        "1f962": [["🥢"], "", "", ["chopsticks"], 43, 46, 15, 0],
        "1f963": [["🥣"], "", "", ["bowl_with_spoon"], 43, 47, 15, 0],
        "1f964": [["🥤"], "", "", ["cup_with_straw"], 43, 48, 15, 0],
        "1f965": [["🥥"], "", "", ["coconut"], 43, 49, 15, 0],
        "1f966": [["🥦"], "", "", ["broccoli"], 43, 50, 15, 0],
        "1f967": [["🥧"], "", "", ["pie"], 43, 51, 15, 0],
        "1f968": [["🥨"], "", "", ["pretzel"], 43, 52, 15, 0],
        "1f969": [["🥩"], "", "", ["cut_of_meat"], 43, 53, 15, 0],
        "1f96a": [["🥪"], "", "", ["sandwich"], 43, 54, 15, 0],
        "1f96b": [["🥫"], "", "", ["canned_food"], 43, 55, 15, 0],
        "1f96c": [["🥬"], "", "", ["leafy_green"], 43, 56, 15, 0],
        "1f96d": [["🥭"], "", "", ["mango"], 43, 57, 15, 0],
        "1f96e": [["🥮"], "", "", ["moon_cake"], 43, 58, 15, 0],
        "1f96f": [["🥯"], "", "", ["bagel"], 43, 59, 15, 0],
        "1f970": [["🥰"], "", "", ["smiling_face_with_3_hearts"], 43, 60, 15, 0],
        "1f971": [["🥱"], "", "", ["yawning_face"], 44, 0, 15, 0],
        "1f972": [["🥲"], "", "", ["smiling_face_with_tear"], 44, 1, 15, 0],
        "1f973": [["🥳"], "", "", ["partying_face"], 44, 2, 15, 0],
        "1f974": [["🥴"], "", "", ["woozy_face"], 44, 3, 15, 0],
        "1f975": [["🥵"], "", "", ["hot_face"], 44, 4, 15, 0],
        "1f976": [["🥶"], "", "", ["cold_face"], 44, 5, 15, 0],
        "1f977": [["🥷"], "", "", ["ninja"], 44, 6, 15, 0],
        "1f978": [["🥸"], "", "", ["disguised_face"], 44, 12, 15, 0],
        "1f979": [["🥹"], "", "", ["face_holding_back_tears"], 44, 13, 15, 0],
        "1f97a": [["🥺"], "", "", ["pleading_face"], 44, 14, 15, 0],
        "1f97b": [["🥻"], "", "", ["sari"], 44, 15, 15, 0],
        "1f97c": [["🥼"], "", "", ["lab_coat"], 44, 16, 15, 0],
        "1f97d": [["🥽"], "", "", ["goggles"], 44, 17, 15, 0],
        "1f97e": [["🥾"], "", "", ["hiking_boot"], 44, 18, 15, 0],
        "1f97f": [["🥿"], "", "", ["womans_flat_shoe"], 44, 19, 15, 0],
        "1f980": [["🦀"], "", "", ["crab"], 44, 20, 15, 0],
        "1f981": [["🦁"], "", "", ["lion_face"], 44, 21, 15, 0],
        "1f982": [["🦂"], "", "", ["scorpion"], 44, 22, 15, 0],
        "1f983": [["🦃"], "", "", ["turkey"], 44, 23, 15, 0],
        "1f984": [["🦄"], "", "", ["unicorn_face"], 44, 24, 15, 0],
        "1f985": [["🦅"], "", "", ["eagle"], 44, 25, 15, 0],
        "1f986": [["🦆"], "", "", ["duck"], 44, 26, 15, 0],
        "1f987": [["🦇"], "", "", ["bat"], 44, 27, 15, 0],
        "1f988": [["🦈"], "", "", ["shark"], 44, 28, 15, 0],
        "1f989": [["🦉"], "", "", ["owl"], 44, 29, 15, 0],
        "1f98a": [["🦊"], "", "", ["fox_face"], 44, 30, 15, 0],
        "1f98b": [["🦋"], "", "", ["butterfly"], 44, 31, 15, 0],
        "1f98c": [["🦌"], "", "", ["deer"], 44, 32, 15, 0],
        "1f98d": [["🦍"], "", "", ["gorilla"], 44, 33, 15, 0],
        "1f98e": [["🦎"], "", "", ["lizard"], 44, 34, 15, 0],
        "1f98f": [["🦏"], "", "", ["rhinoceros"], 44, 35, 15, 0],
        "1f990": [["🦐"], "", "", ["shrimp"], 44, 36, 15, 0],
        "1f991": [["🦑"], "", "", ["squid"], 44, 37, 15, 0],
        "1f992": [["🦒"], "", "", ["giraffe_face"], 44, 38, 15, 0],
        "1f993": [["🦓"], "", "", ["zebra_face"], 44, 39, 15, 0],
        "1f994": [["🦔"], "", "", ["hedgehog"], 44, 40, 15, 0],
        "1f995": [["🦕"], "", "", ["sauropod"], 44, 41, 15, 0],
        "1f996": [["🦖"], "", "", ["t-rex"], 44, 42, 15, 0],
        "1f997": [["🦗"], "", "", ["cricket"], 44, 43, 15, 0],
        "1f998": [["🦘"], "", "", ["kangaroo"], 44, 44, 15, 0],
        "1f999": [["🦙"], "", "", ["llama"], 44, 45, 15, 0],
        "1f99a": [["🦚"], "", "", ["peacock"], 44, 46, 15, 0],
        "1f99b": [["🦛"], "", "", ["hippopotamus"], 44, 47, 15, 0],
        "1f99c": [["🦜"], "", "", ["parrot"], 44, 48, 15, 0],
        "1f99d": [["🦝"], "", "", ["raccoon"], 44, 49, 15, 0],
        "1f99e": [["🦞"], "", "", ["lobster"], 44, 50, 15, 0],
        "1f99f": [["🦟"], "", "", ["mosquito"], 44, 51, 15, 0],
        "1f9a0": [["🦠"], "", "", ["microbe"], 44, 52, 15, 0],
        "1f9a1": [["🦡"], "", "", ["badger"], 44, 53, 15, 0],
        "1f9a2": [["🦢"], "", "", ["swan"], 44, 54, 15, 0],
        "1f9a3": [["🦣"], "", "", ["mammoth"], 44, 55, 15, 0],
        "1f9a4": [["🦤"], "", "", ["dodo"], 44, 56, 15, 0],
        "1f9a5": [["🦥"], "", "", ["sloth"], 44, 57, 15, 0],
        "1f9a6": [["🦦"], "", "", ["otter"], 44, 58, 15, 0],
        "1f9a7": [["🦧"], "", "", ["orangutan"], 44, 59, 15, 0],
        "1f9a8": [["🦨"], "", "", ["skunk"], 44, 60, 15, 0],
        "1f9a9": [["🦩"], "", "", ["flamingo"], 45, 0, 15, 0],
        "1f9aa": [["🦪"], "", "", ["oyster"], 45, 1, 15, 0],
        "1f9ab": [["🦫"], "", "", ["beaver"], 45, 2, 15, 0],
        "1f9ac": [["🦬"], "", "", ["bison"], 45, 3, 15, 0],
        "1f9ad": [["🦭"], "", "", ["seal"], 45, 4, 15, 0],
        "1f9ae": [["🦮"], "", "", ["guide_dog"], 45, 5, 15, 0],
        "1f9af": [["🦯"], "", "", ["probing_cane"], 45, 6, 15, 0],
        "1f9b4": [["🦴"], "", "", ["bone"], 45, 7, 15, 0],
        "1f9b5": [["🦵"], "", "", ["leg"], 45, 8, 15, 0],
        "1f9b6": [["🦶"], "", "", ["foot"], 45, 14, 15, 0],
        "1f9b7": [["🦷"], "", "", ["tooth"], 45, 20, 15, 0],
        "1f9b8-200d-2640-fe0f": [["🦸‍♀️", "🦸‍♀"], "", "", ["female_superhero"], 45, 21, 15, 0],
        "1f9b8-200d-2642-fe0f": [["🦸‍♂️", "🦸‍♂"], "", "", ["male_superhero"], 45, 27, 15, 0],
        "1f9b8": [["🦸"], "", "", ["superhero"], 45, 33, 15, 0],
        "1f9b9-200d-2640-fe0f": [["🦹‍♀️", "🦹‍♀"], "", "", ["female_supervillain"], 45, 39, 15, 0],
        "1f9b9-200d-2642-fe0f": [["🦹‍♂️", "🦹‍♂"], "", "", ["male_supervillain"], 45, 45, 15, 0],
        "1f9b9": [["🦹"], "", "", ["supervillain"], 45, 51, 15, 0],
        "1f9ba": [["🦺"], "", "", ["safety_vest"], 45, 57, 15, 0],
        "1f9bb": [["🦻"], "", "", ["ear_with_hearing_aid"], 45, 58, 15, 0],
        "1f9bc": [["🦼"], "", "", ["motorized_wheelchair"], 46, 3, 15, 0],
        "1f9bd": [["🦽"], "", "", ["manual_wheelchair"], 46, 4, 15, 0],
        "1f9be": [["🦾"], "", "", ["mechanical_arm"], 46, 5, 15, 0],
        "1f9bf": [["🦿"], "", "", ["mechanical_leg"], 46, 6, 15, 0],
        "1f9c0": [["🧀"], "", "", ["cheese_wedge"], 46, 7, 15, 0],
        "1f9c1": [["🧁"], "", "", ["cupcake"], 46, 8, 15, 0],
        "1f9c2": [["🧂"], "", "", ["salt"], 46, 9, 15, 0],
        "1f9c3": [["🧃"], "", "", ["beverage_box"], 46, 10, 15, 0],
        "1f9c4": [["🧄"], "", "", ["garlic"], 46, 11, 15, 0],
        "1f9c5": [["🧅"], "", "", ["onion"], 46, 12, 15, 0],
        "1f9c6": [["🧆"], "", "", ["falafel"], 46, 13, 15, 0],
        "1f9c7": [["🧇"], "", "", ["waffle"], 46, 14, 15, 0],
        "1f9c8": [["🧈"], "", "", ["butter"], 46, 15, 15, 0],
        "1f9c9": [["🧉"], "", "", ["mate_drink"], 46, 16, 15, 0],
        "1f9ca": [["🧊"], "", "", ["ice_cube"], 46, 17, 15, 0],
        "1f9cb": [["🧋"], "", "", ["bubble_tea"], 46, 18, 15, 0],
        "1f9cc": [["🧌"], "", "", ["troll"], 46, 19, 15, 0],
        "1f9cd-200d-2640-fe0f": [["🧍‍♀️", "🧍‍♀"], "", "", ["woman_standing"], 46, 20, 15, 0],
        "1f9cd-200d-2642-fe0f": [["🧍‍♂️", "🧍‍♂"], "", "", ["man_standing"], 46, 26, 15, 0],
        "1f9cd": [["🧍"], "", "", ["standing_person"], 46, 32, 15, 0],
        "1f9ce-200d-2640-fe0f": [["🧎‍♀️", "🧎‍♀"], "", "", ["woman_kneeling"], 46, 38, 15, 0],
        "1f9ce-200d-2642-fe0f": [["🧎‍♂️", "🧎‍♂"], "", "", ["man_kneeling"], 46, 44, 15, 0],
        "1f9ce": [["🧎"], "", "", ["kneeling_person"], 46, 50, 15, 0],
        "1f9cf-200d-2640-fe0f": [["🧏‍♀️", "🧏‍♀"], "", "", ["deaf_woman"], 46, 56, 15, 0],
        "1f9cf-200d-2642-fe0f": [["🧏‍♂️", "🧏‍♂"], "", "", ["deaf_man"], 47, 1, 15, 0],
        "1f9cf": [["🧏"], "", "", ["deaf_person"], 47, 7, 15, 0],
        "1f9d0": [["🧐"], "", "", ["face_with_monocle"], 47, 13, 15, 0],
        "1f9d1-200d-1f33e": [["🧑‍🌾"], "", "", ["farmer"], 47, 14, 15, 0],
        "1f9d1-200d-1f373": [["🧑‍🍳"], "", "", ["cook"], 47, 20, 15, 0],
        "1f9d1-200d-1f37c": [["🧑‍🍼"], "", "", ["person_feeding_baby"], 47, 26, 15, 0],
        "1f9d1-200d-1f384": [["🧑‍🎄"], "", "", ["mx_claus"], 47, 32, 15, 0],
        "1f9d1-200d-1f393": [["🧑‍🎓"], "", "", ["student"], 47, 38, 15, 0],
        "1f9d1-200d-1f3a4": [["🧑‍🎤"], "", "", ["singer"], 47, 44, 15, 0],
        "1f9d1-200d-1f3a8": [["🧑‍🎨"], "", "", ["artist"], 47, 50, 15, 0],
        "1f9d1-200d-1f3eb": [["🧑‍🏫"], "", "", ["teacher"], 47, 56, 15, 0],
        "1f9d1-200d-1f3ed": [["🧑‍🏭"], "", "", ["factory_worker"], 48, 1, 15, 0],
        "1f9d1-200d-1f4bb": [["🧑‍💻"], "", "", ["technologist"], 48, 7, 15, 0],
        "1f9d1-200d-1f4bc": [["🧑‍💼"], "", "", ["office_worker"], 48, 13, 15, 0],
        "1f9d1-200d-1f527": [["🧑‍🔧"], "", "", ["mechanic"], 48, 19, 15, 0],
        "1f9d1-200d-1f52c": [["🧑‍🔬"], "", "", ["scientist"], 48, 25, 15, 0],
        "1f9d1-200d-1f680": [["🧑‍🚀"], "", "", ["astronaut"], 48, 31, 15, 0],
        "1f9d1-200d-1f692": [["🧑‍🚒"], "", "", ["firefighter"], 48, 37, 15, 0],
        "1f9d1-200d-1f91d-200d-1f9d1": [["🧑‍🤝‍🧑"], "", "", ["people_holding_hands"], 48, 43, 15, 0],
        "1f9d1-200d-1f9af": [["🧑‍🦯"], "", "", ["person_with_probing_cane"], 49, 8, 15, 0],
        "1f9d1-200d-1f9b0": [["🧑‍🦰"], "", "", ["red_haired_person"], 49, 14, 15, 0],
        "1f9d1-200d-1f9b1": [["🧑‍🦱"], "", "", ["curly_haired_person"], 49, 20, 15, 0],
        "1f9d1-200d-1f9b2": [["🧑‍🦲"], "", "", ["bald_person"], 49, 26, 15, 0],
        "1f9d1-200d-1f9b3": [["🧑‍🦳"], "", "", ["white_haired_person"], 49, 32, 15, 0],
        "1f9d1-200d-1f9bc": [["🧑‍🦼"], "", "", ["person_in_motorized_wheelchair"], 49, 38, 15, 0],
        "1f9d1-200d-1f9bd": [["🧑‍🦽"], "", "", ["person_in_manual_wheelchair"], 49, 44, 15, 0],
        "1f9d1-200d-2695-fe0f": [["🧑‍⚕️", "🧑‍⚕"], "", "", ["health_worker"], 49, 50, 15, 0],
        "1f9d1-200d-2696-fe0f": [["🧑‍⚖️", "🧑‍⚖"], "", "", ["judge"], 49, 56, 15, 0],
        "1f9d1-200d-2708-fe0f": [["🧑‍✈️", "🧑‍✈"], "", "", ["pilot"], 50, 1, 15, 0],
        "1f9d1": [["🧑"], "", "", ["adult"], 50, 7, 15, 0],
        "1f9d2": [["🧒"], "", "", ["child"], 50, 13, 15, 0],
        "1f9d3": [["🧓"], "", "", ["older_adult"], 50, 19, 15, 0],
        "1f9d4-200d-2640-fe0f": [["🧔‍♀️", "🧔‍♀"], "", "", ["woman_with_beard"], 50, 25, 15, 0],
        "1f9d4-200d-2642-fe0f": [["🧔‍♂️", "🧔‍♂"], "", "", ["man_with_beard"], 50, 31, 15, 0],
        "1f9d4": [["🧔"], "", "", ["bearded_person"], 50, 37, 15, 0],
        "1f9d5": [["🧕"], "", "", ["person_with_headscarf"], 50, 43, 15, 0],
        "1f9d6-200d-2640-fe0f": [["🧖‍♀️", "🧖‍♀"], "", "", ["woman_in_steamy_room"], 50, 49, 15, 0],
        "1f9d6-200d-2642-fe0f": [["🧖‍♂️", "🧖‍♂", "🧖"], "", "", ["man_in_steamy_room", "person_in_steamy_room"], 50, 55, 15, 0],
        "1f9d7-200d-2640-fe0f": [["🧗‍♀️", "🧗‍♀", "🧗"], "", "", ["woman_climbing", "person_climbing"], 51, 6, 15, 0],
        "1f9d7-200d-2642-fe0f": [["🧗‍♂️", "🧗‍♂"], "", "", ["man_climbing"], 51, 12, 15, 0],
        "1f9d8-200d-2640-fe0f": [["🧘‍♀️", "🧘‍♀", "🧘"], "", "", ["woman_in_lotus_position", "person_in_lotus_position"], 51, 24, 15, 0],
        "1f9d8-200d-2642-fe0f": [["🧘‍♂️", "🧘‍♂"], "", "", ["man_in_lotus_position"], 51, 30, 15, 0],
        "1f9d9-200d-2640-fe0f": [["🧙‍♀️", "🧙‍♀", "🧙"], "", "", ["female_mage", "mage"], 51, 42, 15, 0],
        "1f9d9-200d-2642-fe0f": [["🧙‍♂️", "🧙‍♂"], "", "", ["male_mage"], 51, 48, 15, 0],
        "1f9da-200d-2640-fe0f": [["🧚‍♀️", "🧚‍♀", "🧚"], "", "", ["female_fairy", "fairy"], 51, 60, 15, 0],
        "1f9da-200d-2642-fe0f": [["🧚‍♂️", "🧚‍♂"], "", "", ["male_fairy"], 52, 5, 15, 0],
        "1f9db-200d-2640-fe0f": [["🧛‍♀️", "🧛‍♀", "🧛"], "", "", ["female_vampire", "vampire"], 52, 17, 15, 0],
        "1f9db-200d-2642-fe0f": [["🧛‍♂️", "🧛‍♂"], "", "", ["male_vampire"], 52, 23, 15, 0],
        "1f9dc-200d-2640-fe0f": [["🧜‍♀️", "🧜‍♀"], "", "", ["mermaid"], 52, 35, 15, 0],
        "1f9dc-200d-2642-fe0f": [["🧜‍♂️", "🧜‍♂", "🧜"], "", "", ["merman", "merperson"], 52, 41, 15, 0],
        "1f9dd-200d-2640-fe0f": [["🧝‍♀️", "🧝‍♀"], "", "", ["female_elf"], 52, 53, 15, 0],
        "1f9dd-200d-2642-fe0f": [["🧝‍♂️", "🧝‍♂", "🧝"], "", "", ["male_elf", "elf"], 52, 59, 15, 0],
        "1f9de-200d-2640-fe0f": [["🧞‍♀️", "🧞‍♀"], "", "", ["female_genie"], 53, 10, 15, 0],
        "1f9de-200d-2642-fe0f": [["🧞‍♂️", "🧞‍♂", "🧞"], "", "", ["male_genie", "genie"], 53, 11, 15, 0],
        "1f9df-200d-2640-fe0f": [["🧟‍♀️", "🧟‍♀"], "", "", ["female_zombie"], 53, 13, 15, 0],
        "1f9df-200d-2642-fe0f": [["🧟‍♂️", "🧟‍♂", "🧟"], "", "", ["male_zombie", "zombie"], 53, 14, 15, 0],
        "1f9e0": [["🧠"], "", "", ["brain"], 53, 16, 15, 0],
        "1f9e1": [["🧡"], "", "", ["orange_heart"], 53, 17, 15, 0],
        "1f9e2": [["🧢"], "", "", ["billed_cap"], 53, 18, 15, 0],
        "1f9e3": [["🧣"], "", "", ["scarf"], 53, 19, 15, 0],
        "1f9e4": [["🧤"], "", "", ["gloves"], 53, 20, 15, 0],
        "1f9e5": [["🧥"], "", "", ["coat"], 53, 21, 15, 0],
        "1f9e6": [["🧦"], "", "", ["socks"], 53, 22, 15, 0],
        "1f9e7": [["🧧"], "", "", ["red_envelope"], 53, 23, 15, 0],
        "1f9e8": [["🧨"], "", "", ["firecracker"], 53, 24, 15, 0],
        "1f9e9": [["🧩"], "", "", ["jigsaw"], 53, 25, 15, 0],
        "1f9ea": [["🧪"], "", "", ["test_tube"], 53, 26, 15, 0],
        "1f9eb": [["🧫"], "", "", ["petri_dish"], 53, 27, 15, 0],
        "1f9ec": [["🧬"], "", "", ["dna"], 53, 28, 15, 0],
        "1f9ed": [["🧭"], "", "", ["compass"], 53, 29, 15, 0],
        "1f9ee": [["🧮"], "", "", ["abacus"], 53, 30, 15, 0],
        "1f9ef": [["🧯"], "", "", ["fire_extinguisher"], 53, 31, 15, 0],
        "1f9f0": [["🧰"], "", "", ["toolbox"], 53, 32, 15, 0],
        "1f9f1": [["🧱"], "", "", ["bricks"], 53, 33, 15, 0],
        "1f9f2": [["🧲"], "", "", ["magnet"], 53, 34, 15, 0],
        "1f9f3": [["🧳"], "", "", ["luggage"], 53, 35, 15, 0],
        "1f9f4": [["🧴"], "", "", ["lotion_bottle"], 53, 36, 15, 0],
        "1f9f5": [["🧵"], "", "", ["thread"], 53, 37, 15, 0],
        "1f9f6": [["🧶"], "", "", ["yarn"], 53, 38, 15, 0],
        "1f9f7": [["🧷"], "", "", ["safety_pin"], 53, 39, 15, 0],
        "1f9f8": [["🧸"], "", "", ["teddy_bear"], 53, 40, 15, 0],
        "1f9f9": [["🧹"], "", "", ["broom"], 53, 41, 15, 0],
        "1f9fa": [["🧺"], "", "", ["basket"], 53, 42, 15, 0],
        "1f9fb": [["🧻"], "", "", ["roll_of_paper"], 53, 43, 15, 0],
        "1f9fc": [["🧼"], "", "", ["soap"], 53, 44, 15, 0],
        "1f9fd": [["🧽"], "", "", ["sponge"], 53, 45, 15, 0],
        "1f9fe": [["🧾"], "", "", ["receipt"], 53, 46, 15, 0],
        "1f9ff": [["🧿"], "", "", ["nazar_amulet"], 53, 47, 15, 0],
        "1fa70": [["🩰"], "", "", ["ballet_shoes"], 53, 48, 15, 0],
        "1fa71": [["🩱"], "", "", ["one-piece_swimsuit"], 53, 49, 15, 0],
        "1fa72": [["🩲"], "", "", ["briefs"], 53, 50, 15, 0],
        "1fa73": [["🩳"], "", "", ["shorts"], 53, 51, 15, 0],
        "1fa74": [["🩴"], "", "", ["thong_sandal"], 53, 52, 15, 0],
        "1fa75": [["🩵"], "", "", ["light_blue_heart"], 53, 53, 3, 0],
        "1fa76": [["🩶"], "", "", ["grey_heart"], 53, 54, 3, 0],
        "1fa77": [["🩷"], "", "", ["pink_heart"], 53, 55, 3, 0],
        "1fa78": [["🩸"], "", "", ["drop_of_blood"], 53, 56, 15, 0],
        "1fa79": [["🩹"], "", "", ["adhesive_bandage"], 53, 57, 15, 0],
        "1fa7a": [["🩺"], "", "", ["stethoscope"], 53, 58, 15, 0],
        "1fa7b": [["🩻"], "", "", ["x-ray"], 53, 59, 15, 0],
        "1fa7c": [["🩼"], "", "", ["crutch"], 53, 60, 15, 0],
        "1fa80": [["🪀"], "", "", ["yo-yo"], 54, 0, 15, 0],
        "1fa81": [["🪁"], "", "", ["kite"], 54, 1, 15, 0],
        "1fa82": [["🪂"], "", "", ["parachute"], 54, 2, 15, 0],
        "1fa83": [["🪃"], "", "", ["boomerang"], 54, 3, 15, 0],
        "1fa84": [["🪄"], "", "", ["magic_wand"], 54, 4, 15, 0],
        "1fa85": [["🪅"], "", "", ["pinata"], 54, 5, 15, 0],
        "1fa86": [["🪆"], "", "", ["nesting_dolls"], 54, 6, 15, 0],
        "1fa87": [["🪇"], "", "", ["maracas"], 54, 7, 3, 0],
        "1fa88": [["🪈"], "", "", ["flute"], 54, 8, 3, 0],
        "1fa90": [["🪐"], "", "", ["ringed_planet"], 54, 9, 15, 0],
        "1fa91": [["🪑"], "", "", ["chair"], 54, 10, 15, 0],
        "1fa92": [["🪒"], "", "", ["razor"], 54, 11, 15, 0],
        "1fa93": [["🪓"], "", "", ["axe"], 54, 12, 15, 0],
        "1fa94": [["🪔"], "", "", ["diya_lamp"], 54, 13, 15, 0],
        "1fa95": [["🪕"], "", "", ["banjo"], 54, 14, 15, 0],
        "1fa96": [["🪖"], "", "", ["military_helmet"], 54, 15, 15, 0],
        "1fa97": [["🪗"], "", "", ["accordion"], 54, 16, 15, 0],
        "1fa98": [["🪘"], "", "", ["long_drum"], 54, 17, 15, 0],
        "1fa99": [["🪙"], "", "", ["coin"], 54, 18, 15, 0],
        "1fa9a": [["🪚"], "", "", ["carpentry_saw"], 54, 19, 15, 0],
        "1fa9b": [["🪛"], "", "", ["screwdriver"], 54, 20, 15, 0],
        "1fa9c": [["🪜"], "", "", ["ladder"], 54, 21, 15, 0],
        "1fa9d": [["🪝"], "", "", ["hook"], 54, 22, 15, 0],
        "1fa9e": [["🪞"], "", "", ["mirror"], 54, 23, 15, 0],
        "1fa9f": [["🪟"], "", "", ["window"], 54, 24, 15, 0],
        "1faa0": [["🪠"], "", "", ["plunger"], 54, 25, 15, 0],
        "1faa1": [["🪡"], "", "", ["sewing_needle"], 54, 26, 15, 0],
        "1faa2": [["🪢"], "", "", ["knot"], 54, 27, 15, 0],
        "1faa3": [["🪣"], "", "", ["bucket"], 54, 28, 15, 0],
        "1faa4": [["🪤"], "", "", ["mouse_trap"], 54, 29, 15, 0],
        "1faa5": [["🪥"], "", "", ["toothbrush"], 54, 30, 15, 0],
        "1faa6": [["🪦"], "", "", ["headstone"], 54, 31, 15, 0],
        "1faa7": [["🪧"], "", "", ["placard"], 54, 32, 15, 0],
        "1faa8": [["🪨"], "", "", ["rock"], 54, 33, 15, 0],
        "1faa9": [["🪩"], "", "", ["mirror_ball"], 54, 34, 15, 0],
        "1faaa": [["🪪"], "", "", ["identification_card"], 54, 35, 15, 0],
        "1faab": [["🪫"], "", "", ["low_battery"], 54, 36, 15, 0],
        "1faac": [["🪬"], "", "", ["hamsa"], 54, 37, 15, 0],
        "1faad": [["🪭"], "", "", ["folding_hand_fan"], 54, 38, 3, 0],
        "1faae": [["🪮"], "", "", ["hair_pick"], 54, 39, 3, 0],
        "1faaf": [["🪯"], "", "", ["khanda"], 54, 40, 3, 0],
        "1fab0": [["🪰"], "", "", ["fly"], 54, 41, 15, 0],
        "1fab1": [["🪱"], "", "", ["worm"], 54, 42, 15, 0],
        "1fab2": [["🪲"], "", "", ["beetle"], 54, 43, 15, 0],
        "1fab3": [["🪳"], "", "", ["cockroach"], 54, 44, 15, 0],
        "1fab4": [["🪴"], "", "", ["potted_plant"], 54, 45, 15, 0],
        "1fab5": [["🪵"], "", "", ["wood"], 54, 46, 15, 0],
        "1fab6": [["🪶"], "", "", ["feather"], 54, 47, 15, 0],
        "1fab7": [["🪷"], "", "", ["lotus"], 54, 48, 15, 0],
        "1fab8": [["🪸"], "", "", ["coral"], 54, 49, 15, 0],
        "1fab9": [["🪹"], "", "", ["empty_nest"], 54, 50, 15, 0],
        "1faba": [["🪺"], "", "", ["nest_with_eggs"], 54, 51, 15, 0],
        "1fabb": [["🪻"], "", "", ["hyacinth"], 54, 52, 3, 0],
        "1fabc": [["🪼"], "", "", ["jellyfish"], 54, 53, 3, 0],
        "1fabd": [["🪽"], "", "", ["wing"], 54, 54, 3, 0],
        "1fabf": [["🪿"], "", "", ["goose"], 54, 55, 3, 0],
        "1fac0": [["🫀"], "", "", ["anatomical_heart"], 54, 56, 15, 0],
        "1fac1": [["🫁"], "", "", ["lungs"], 54, 57, 15, 0],
        "1fac2": [["🫂"], "", "", ["people_hugging"], 54, 58, 15, 0],
        "1fac3": [["🫃"], "", "", ["pregnant_man"], 54, 59, 15, 0],
        "1fac4": [["🫄"], "", "", ["pregnant_person"], 55, 4, 15, 0],
        "1fac5": [["🫅"], "", "", ["person_with_crown"], 55, 10, 15, 0],
        "1face": [["🫎"], "", "", ["moose"], 55, 16, 3, 0],
        "1facf": [["🫏"], "", "", ["donkey"], 55, 17, 3, 0],
        "1fad0": [["🫐"], "", "", ["blueberries"], 55, 18, 15, 0],
        "1fad1": [["🫑"], "", "", ["bell_pepper"], 55, 19, 15, 0],
        "1fad2": [["🫒"], "", "", ["olive"], 55, 20, 15, 0],
        "1fad3": [["🫓"], "", "", ["flatbread"], 55, 21, 15, 0],
        "1fad4": [["🫔"], "", "", ["tamale"], 55, 22, 15, 0],
        "1fad5": [["🫕"], "", "", ["fondue"], 55, 23, 15, 0],
        "1fad6": [["🫖"], "", "", ["teapot"], 55, 24, 15, 0],
        "1fad7": [["🫗"], "", "", ["pouring_liquid"], 55, 25, 15, 0],
        "1fad8": [["🫘"], "", "", ["beans"], 55, 26, 15, 0],
        "1fad9": [["🫙"], "", "", ["jar"], 55, 27, 15, 0],
        "1fada": [["🫚"], "", "", ["ginger_root"], 55, 28, 3, 0],
        "1fadb": [["🫛"], "", "", ["pea_pod"], 55, 29, 3, 0],
        "1fae0": [["🫠"], "", "", ["melting_face"], 55, 30, 15, 0],
        "1fae1": [["🫡"], "", "", ["saluting_face"], 55, 31, 15, 0],
        "1fae2": [["🫢"], "", "", ["face_with_open_eyes_and_hand_over_mouth"], 55, 32, 15, 0],
        "1fae3": [["🫣"], "", "", ["face_with_peeking_eye"], 55, 33, 15, 0],
        "1fae4": [["🫤"], "", "", ["face_with_diagonal_mouth"], 55, 34, 15, 0],
        "1fae5": [["🫥"], "", "", ["dotted_line_face"], 55, 35, 15, 0],
        "1fae6": [["🫦"], "", "", ["biting_lip"], 55, 36, 15, 0],
        "1fae7": [["🫧"], "", "", ["bubbles"], 55, 37, 15, 0],
        "1fae8": [["🫨"], "", "", ["shaking_face"], 55, 38, 3, 0],
        "1faf0": [["🫰"], "", "", ["hand_with_index_finger_and_thumb_crossed"], 55, 39, 15, 0],
        "1faf1": [["🫱"], "", "", ["rightwards_hand"], 55, 45, 15, 0],
        "1faf2": [["🫲"], "", "", ["leftwards_hand"], 55, 51, 15, 0],
        "1faf3": [["🫳"], "", "", ["palm_down_hand"], 55, 57, 15, 0],
        "1faf4": [["🫴"], "", "", ["palm_up_hand"], 56, 2, 15, 0],
        "1faf5": [["🫵"], "", "", ["index_pointing_at_the_viewer"], 56, 8, 15, 0],
        "1faf6": [["🫶"], "", "", ["heart_hands"], 56, 14, 15, 0],
        "1faf7": [["🫷"], "", "", ["leftwards_pushing_hand"], 56, 20, 3, 0],
        "1faf8": [["🫸"], "", "", ["rightwards_pushing_hand"], 56, 26, 3, 0],
        "203c-fe0f": [["‼️", "‼"], "", "󾬆", ["bangbang"], 56, 32, 15, 0],
        "2049-fe0f": [["⁉️", "⁉"], "", "󾬅", ["interrobang"], 56, 33, 15, 0],
        "2122-fe0f": [["™️", "™"], "", "󾬪", ["tm"], 56, 34, 15, 0],
        "2139-fe0f": [["ℹ️", "ℹ"], "", "󾭇", ["information_source"], 56, 35, 15, 0],
        "2194-fe0f": [["↔️", "↔"], "", "󾫶", ["left_right_arrow"], 56, 36, 15, 0],
        "2195-fe0f": [["↕️", "↕"], "", "󾫷", ["arrow_up_down"], 56, 37, 15, 0],
        "2196-fe0f": [["↖️", "↖"], "", "󾫲", ["arrow_upper_left"], 56, 38, 15, 0],
        "2197-fe0f": [["↗️", "↗"], "", "󾫰", ["arrow_upper_right"], 56, 39, 15, 0],
        "2198-fe0f": [["↘️", "↘"], "", "󾫱", ["arrow_lower_right"], 56, 40, 15, 0],
        "2199-fe0f": [["↙️", "↙"], "", "󾫳", ["arrow_lower_left"], 56, 41, 15, 0],
        "21a9-fe0f": [["↩️", "↩"], "", "󾮃", ["leftwards_arrow_with_hook"], 56, 42, 15, 0],
        "21aa-fe0f": [["↪️", "↪"], "", "󾮈", ["arrow_right_hook"], 56, 43, 15, 0],
        "231a": [["⌚"], "", "󾀝", ["watch"], 56, 44, 15, 0],
        "231b": [["⌛"], "", "󾀜", ["hourglass"], 56, 45, 15, 0],
        "2328-fe0f": [["⌨️", "⌨"], "", "", ["keyboard"], 56, 46, 15, 0],
        "23cf-fe0f": [["⏏️", "⏏"], "", "", ["eject"], 56, 47, 15, 0],
        "23e9": [["⏩"], "", "󾫾", ["fast_forward"], 56, 48, 15, 0],
        "23ea": [["⏪"], "", "󾫿", ["rewind"], 56, 49, 15, 0],
        "23eb": [["⏫"], "", "󾬃", ["arrow_double_up"], 56, 50, 15, 0],
        "23ec": [["⏬"], "", "󾬂", ["arrow_double_down"], 56, 51, 15, 0],
        "23ed-fe0f": [["⏭️", "⏭"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 56, 52, 15, 0],
        "23ee-fe0f": [["⏮️", "⏮"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 56, 53, 15, 0],
        "23ef-fe0f": [["⏯️", "⏯"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 56, 54, 15, 0],
        "23f0": [["⏰"], "", "󾀪", ["alarm_clock"], 56, 55, 15, 0],
        "23f1-fe0f": [["⏱️", "⏱"], "", "", ["stopwatch"], 56, 56, 15, 0],
        "23f2-fe0f": [["⏲️", "⏲"], "", "", ["timer_clock"], 56, 57, 15, 0],
        "23f3": [["⏳"], "", "󾀛", ["hourglass_flowing_sand"], 56, 58, 15, 0],
        "23f8-fe0f": [["⏸️", "⏸"], "", "", ["double_vertical_bar"], 56, 59, 15, 0],
        "23f9-fe0f": [["⏹️", "⏹"], "", "", ["black_square_for_stop"], 56, 60, 15, 0],
        "23fa-fe0f": [["⏺️", "⏺"], "", "", ["black_circle_for_record"], 57, 0, 15, 0],
        "24c2-fe0f": [["Ⓜ️", "Ⓜ"], "", "󾟡", ["m"], 57, 1, 15, 0],
        "25aa-fe0f": [["▪️", "▪"], "", "󾭮", ["black_small_square"], 57, 2, 15, 0],
        "25ab-fe0f": [["▫️", "▫"], "", "󾭭", ["white_small_square"], 57, 3, 15, 0],
        "25b6-fe0f": [["▶️", "▶"], "", "󾫼", ["arrow_forward"], 57, 4, 15, 0],
        "25c0-fe0f": [["◀️", "◀"], "", "󾫽", ["arrow_backward"], 57, 5, 15, 0],
        "25fb-fe0f": [["◻️", "◻"], "", "󾭱", ["white_medium_square"], 57, 6, 15, 0],
        "25fc-fe0f": [["◼️", "◼"], "", "󾭲", ["black_medium_square"], 57, 7, 15, 0],
        "25fd": [["◽"], "", "󾭯", ["white_medium_small_square"], 57, 8, 15, 0],
        "25fe": [["◾"], "", "󾭰", ["black_medium_small_square"], 57, 9, 15, 0],
        "2600-fe0f": [["☀️", "☀"], "", "󾀀", ["sunny"], 57, 10, 15, 0],
        "2601-fe0f": [["☁️", "☁"], "", "󾀁", ["cloud"], 57, 11, 15, 0],
        "2602-fe0f": [["☂️", "☂"], "", "", ["umbrella"], 57, 12, 15, 0],
        "2603-fe0f": [["☃️", "☃"], "", "", ["snowman"], 57, 13, 15, 0],
        "2604-fe0f": [["☄️", "☄"], "", "", ["comet"], 57, 14, 15, 0],
        "260e-fe0f": [["☎️", "☎"], "", "󾔣", ["phone", "telephone"], 57, 15, 15, 0],
        "2611-fe0f": [["☑️", "☑"], "", "󾮋", ["ballot_box_with_check"], 57, 16, 15, 0],
        2614: [["☔"], "", "󾀂", ["umbrella_with_rain_drops"], 57, 17, 15, 0],
        2615: [["☕"], "", "󾦁", ["coffee"], 57, 18, 15, 0],
        "2618-fe0f": [["☘️", "☘"], "", "", ["shamrock"], 57, 19, 15, 0],
        "261d-fe0f": [["☝️", "☝"], "", "󾮘", ["point_up"], 57, 20, 15, 0],
        "2620-fe0f": [["☠️", "☠"], "", "", ["skull_and_crossbones"], 57, 26, 15, 0],
        "2622-fe0f": [["☢️", "☢"], "", "", ["radioactive_sign"], 57, 27, 15, 0],
        "2623-fe0f": [["☣️", "☣"], "", "", ["biohazard_sign"], 57, 28, 15, 0],
        "2626-fe0f": [["☦️", "☦"], "", "", ["orthodox_cross"], 57, 29, 15, 0],
        "262a-fe0f": [["☪️", "☪"], "", "", ["star_and_crescent"], 57, 30, 15, 0],
        "262e-fe0f": [["☮️", "☮"], "", "", ["peace_symbol"], 57, 31, 15, 0],
        "262f-fe0f": [["☯️", "☯"], "", "", ["yin_yang"], 57, 32, 15, 0],
        "2638-fe0f": [["☸️", "☸"], "", "", ["wheel_of_dharma"], 57, 33, 15, 0],
        "2639-fe0f": [["☹️", "☹"], "", "", ["white_frowning_face"], 57, 34, 15, 0],
        "263a-fe0f": [["☺️", "☺"], "", "󾌶", ["relaxed"], 57, 35, 15, 0],
        "2640-fe0f": [["♀️", "♀"], "", "", ["female_sign"], 57, 36, 14, 0],
        "2642-fe0f": [["♂️", "♂"], "", "", ["male_sign"], 57, 37, 14, 0],
        2648: [["♈"], "", "󾀫", ["aries"], 57, 38, 15, 0],
        2649: [["♉"], "", "󾀬", ["taurus"], 57, 39, 15, 0],
        "264a": [["♊"], "", "󾀭", ["gemini"], 57, 40, 15, 0],
        "264b": [["♋"], "", "󾀮", ["cancer"], 57, 41, 15, 0],
        "264c": [["♌"], "", "󾀯", ["leo"], 57, 42, 15, 0],
        "264d": [["♍"], "", "󾀰", ["virgo"], 57, 43, 15, 0],
        "264e": [["♎"], "", "󾀱", ["libra"], 57, 44, 15, 0],
        "264f": [["♏"], "", "󾀲", ["scorpius"], 57, 45, 15, 0],
        2650: [["♐"], "", "󾀳", ["sagittarius"], 57, 46, 15, 0],
        2651: [["♑"], "", "󾀴", ["capricorn"], 57, 47, 15, 0],
        2652: [["♒"], "", "󾀵", ["aquarius"], 57, 48, 15, 0],
        2653: [["♓"], "", "󾀶", ["pisces"], 57, 49, 15, 0],
        "265f-fe0f": [["♟️", "♟"], "", "", ["chess_pawn"], 57, 50, 15, 0],
        "2660-fe0f": [["♠️", "♠"], "", "󾬛", ["spades"], 57, 51, 15, 0],
        "2663-fe0f": [["♣️", "♣"], "", "󾬝", ["clubs"], 57, 52, 15, 0],
        "2665-fe0f": [["♥️", "♥"], "", "󾬚", ["hearts"], 57, 53, 15, 0],
        "2666-fe0f": [["♦️", "♦"], "", "󾬜", ["diamonds"], 57, 54, 15, 0],
        "2668-fe0f": [["♨️", "♨"], "", "󾟺", ["hotsprings"], 57, 55, 15, 0],
        "267b-fe0f": [["♻️", "♻"], "", "󾬬", ["recycle"], 57, 56, 15, 0],
        "267e-fe0f": [["♾️", "♾"], "", "", ["infinity"], 57, 57, 15, 0],
        "267f": [["♿"], "", "󾬠", ["wheelchair"], 57, 58, 15, 0],
        "2692-fe0f": [["⚒️", "⚒"], "", "", ["hammer_and_pick"], 57, 59, 15, 0],
        2693: [["⚓"], "", "󾓁", ["anchor"], 57, 60, 15, 0],
        "2694-fe0f": [["⚔️", "⚔"], "", "", ["crossed_swords"], 58, 0, 15, 0],
        "2695-fe0f": [["⚕️", "⚕"], "", "", ["medical_symbol", "staff_of_aesculapius"], 58, 1, 14, 0],
        "2696-fe0f": [["⚖️", "⚖"], "", "", ["scales"], 58, 2, 15, 0],
        "2697-fe0f": [["⚗️", "⚗"], "", "", ["alembic"], 58, 3, 15, 0],
        "2699-fe0f": [["⚙️", "⚙"], "", "", ["gear"], 58, 4, 15, 0],
        "269b-fe0f": [["⚛️", "⚛"], "", "", ["atom_symbol"], 58, 5, 15, 0],
        "269c-fe0f": [["⚜️", "⚜"], "", "", ["fleur_de_lis"], 58, 6, 15, 0],
        "26a0-fe0f": [["⚠️", "⚠"], "", "󾬣", ["warning"], 58, 7, 15, 0],
        "26a1": [["⚡"], "", "󾀄", ["zap"], 58, 8, 15, 0],
        "26a7-fe0f": [["⚧️", "⚧"], "", "", ["transgender_symbol"], 58, 9, 15, 0],
        "26aa": [["⚪"], "", "󾭥", ["white_circle"], 58, 10, 15, 0],
        "26ab": [["⚫"], "", "󾭦", ["black_circle"], 58, 11, 15, 0],
        "26b0-fe0f": [["⚰️", "⚰"], "", "", ["coffin"], 58, 12, 15, 0],
        "26b1-fe0f": [["⚱️", "⚱"], "", "", ["funeral_urn"], 58, 13, 15, 0],
        "26bd": [["⚽"], "", "󾟔", ["soccer"], 58, 14, 15, 0],
        "26be": [["⚾"], "", "󾟑", ["baseball"], 58, 15, 15, 0],
        "26c4": [["⛄"], "", "󾀃", ["snowman_without_snow"], 58, 16, 15, 0],
        "26c5": [["⛅"], "", "󾀏", ["partly_sunny"], 58, 17, 15, 0],
        "26c8-fe0f": [["⛈️", "⛈"], "", "", ["thunder_cloud_and_rain"], 58, 18, 15, 0],
        "26ce": [["⛎"], "", "󾀷", ["ophiuchus"], 58, 19, 15, 0],
        "26cf-fe0f": [["⛏️", "⛏"], "", "", ["pick"], 58, 20, 15, 0],
        "26d1-fe0f": [["⛑️", "⛑"], "", "", ["helmet_with_white_cross"], 58, 21, 15, 0],
        "26d3-fe0f": [["⛓️", "⛓"], "", "", ["chains"], 58, 22, 15, 0],
        "26d4": [["⛔"], "", "󾬦", ["no_entry"], 58, 23, 15, 0],
        "26e9-fe0f": [["⛩️", "⛩"], "", "", ["shinto_shrine"], 58, 24, 15, 0],
        "26ea": [["⛪"], "", "󾒻", ["church"], 58, 25, 15, 0],
        "26f0-fe0f": [["⛰️", "⛰"], "", "", ["mountain"], 58, 26, 15, 0],
        "26f1-fe0f": [["⛱️", "⛱"], "", "", ["umbrella_on_ground"], 58, 27, 15, 0],
        "26f2": [["⛲"], "", "󾒼", ["fountain"], 58, 28, 15, 0],
        "26f3": [["⛳"], "", "󾟒", ["golf"], 58, 29, 15, 0],
        "26f4-fe0f": [["⛴️", "⛴"], "", "", ["ferry"], 58, 30, 15, 0],
        "26f5": [["⛵"], "", "󾟪", ["boat", "sailboat"], 58, 31, 15, 0],
        "26f7-fe0f": [["⛷️", "⛷"], "", "", ["skier"], 58, 32, 15, 0],
        "26f8-fe0f": [["⛸️", "⛸"], "", "", ["ice_skate"], 58, 33, 15, 0],
        "26f9-fe0f-200d-2640-fe0f": [["⛹️‍♀️"], "", "", ["woman-bouncing-ball"], 58, 34, 7, 0],
        "26f9-fe0f-200d-2642-fe0f": [["⛹️‍♂️", "⛹️", "⛹"], "", "", ["man-bouncing-ball", "person_with_ball"], 58, 40, 7, 0],
        "26fa": [["⛺"], "", "󾟻", ["tent"], 58, 52, 15, 0],
        "26fd": [["⛽"], "", "󾟵", ["fuelpump"], 58, 53, 15, 0],
        "2702-fe0f": [["✂️", "✂"], "", "󾔾", ["scissors"], 58, 54, 15, 0],
        2705: [["✅"], "", "󾭊", ["white_check_mark"], 58, 55, 15, 0],
        "2708-fe0f": [["✈️", "✈"], "", "󾟩", ["airplane"], 58, 56, 15, 0],
        "2709-fe0f": [["✉️", "✉"], "", "󾔩", ["email", "envelope"], 58, 57, 15, 0],
        "270a": [["✊"], "", "󾮓", ["fist"], 58, 58, 15, 0],
        "270b": [["✋"], "", "󾮕", ["hand", "raised_hand"], 59, 3, 15, 0],
        "270c-fe0f": [["✌️", "✌"], "", "󾮔", ["v"], 59, 9, 15, 0],
        "270d-fe0f": [["✍️", "✍"], "", "", ["writing_hand"], 59, 15, 15, 0],
        "270f-fe0f": [["✏️", "✏"], "", "󾔹", ["pencil2"], 59, 21, 15, 0],
        "2712-fe0f": [["✒️", "✒"], "", "󾔶", ["black_nib"], 59, 22, 15, 0],
        "2714-fe0f": [["✔️", "✔"], "", "󾭉", ["heavy_check_mark"], 59, 23, 15, 0],
        "2716-fe0f": [["✖️", "✖"], "", "󾭓", ["heavy_multiplication_x"], 59, 24, 15, 0],
        "271d-fe0f": [["✝️", "✝"], "", "", ["latin_cross"], 59, 25, 15, 0],
        "2721-fe0f": [["✡️", "✡"], "", "", ["star_of_david"], 59, 26, 15, 0],
        2728: [["✨"], "", "󾭠", ["sparkles"], 59, 27, 15, 0],
        "2733-fe0f": [["✳️", "✳"], "", "󾭢", ["eight_spoked_asterisk"], 59, 28, 15, 0],
        "2734-fe0f": [["✴️", "✴"], "", "󾭡", ["eight_pointed_black_star"], 59, 29, 15, 0],
        "2744-fe0f": [["❄️", "❄"], "", "󾀎", ["snowflake"], 59, 30, 15, 0],
        "2747-fe0f": [["❇️", "❇"], "", "󾭷", ["sparkle"], 59, 31, 15, 0],
        "274c": [["❌"], "", "󾭅", ["x"], 59, 32, 15, 0],
        "274e": [["❎"], "", "󾭆", ["negative_squared_cross_mark"], 59, 33, 15, 0],
        2753: [["❓"], "", "󾬉", ["question"], 59, 34, 15, 0],
        2754: [["❔"], "", "󾬊", ["grey_question"], 59, 35, 15, 0],
        2755: [["❕"], "", "󾬋", ["grey_exclamation"], 59, 36, 15, 0],
        2757: [["❗"], "", "󾬄", ["exclamation", "heavy_exclamation_mark"], 59, 37, 15, 0],
        "2763-fe0f": [["❣️", "❣"], "", "", ["heavy_heart_exclamation_mark_ornament"], 59, 38, 15, 0],
        "2764-fe0f-200d-1f525": [["❤️‍🔥", "❤‍🔥"], "", "", ["heart_on_fire"], 59, 39, 15, 0],
        "2764-fe0f-200d-1fa79": [["❤️‍🩹", "❤‍🩹"], "", "", ["mending_heart"], 59, 40, 15, 0],
        "2764-fe0f": [["❤️", "❤"], "", "󾬌", ["heart"], 59, 41, 15, 0, "<3"],
        2795: [["➕"], "", "󾭑", ["heavy_plus_sign"], 59, 42, 15, 0],
        2796: [["➖"], "", "󾭒", ["heavy_minus_sign"], 59, 43, 15, 0],
        2797: [["➗"], "", "󾭔", ["heavy_division_sign"], 59, 44, 15, 0],
        "27a1-fe0f": [["➡️", "➡"], "", "󾫺", ["arrow_right"], 59, 45, 15, 0],
        "27b0": [["➰"], "", "󾬈", ["curly_loop"], 59, 46, 15, 0],
        "27bf": [["➿"], "", "󾠫", ["loop"], 59, 47, 15, 0],
        "2934-fe0f": [["⤴️", "⤴"], "", "󾫴", ["arrow_heading_up"], 59, 48, 15, 0],
        "2935-fe0f": [["⤵️", "⤵"], "", "󾫵", ["arrow_heading_down"], 59, 49, 15, 0],
        "2b05-fe0f": [["⬅️", "⬅"], "", "󾫻", ["arrow_left"], 59, 50, 15, 0],
        "2b06-fe0f": [["⬆️", "⬆"], "", "󾫸", ["arrow_up"], 59, 51, 15, 0],
        "2b07-fe0f": [["⬇️", "⬇"], "", "󾫹", ["arrow_down"], 59, 52, 15, 0],
        "2b1b": [["⬛"], "", "󾭬", ["black_large_square"], 59, 53, 15, 0],
        "2b1c": [["⬜"], "", "󾭫", ["white_large_square"], 59, 54, 15, 0],
        "2b50": [["⭐"], "", "󾭨", ["star"], 59, 55, 15, 0],
        "2b55": [["⭕"], "", "󾭄", ["o"], 59, 56, 15, 0],
        "3030-fe0f": [["〰️", "〰"], "", "󾬇", ["wavy_dash"], 59, 57, 15, 0],
        "303d-fe0f": [["〽️", "〽"], "", "󾠛", ["part_alternation_mark"], 59, 58, 15, 0],
        "3297-fe0f": [["㊗️", "㊗"], "", "󾭃", ["congratulations"], 59, 59, 15, 0],
        "3299-fe0f": [["㊙️", "㊙"], "", "󾬫", ["secret"], 59, 60, 15, 0]
      }, F.prototype.emoticons_data = {
        ":o)": "monkey_face",
        "</3": "broken_heart",
        "=)": "smiley",
        "=-)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":-D": "smile",
        ":>": "laughing",
        ":->": "laughing",
        ";)": "wink",
        ";-)": "wink",
        "8)": "sunglasses",
        ":|": "neutral_face",
        ":-|": "neutral_face",
        ":\\": "confused",
        ":-\\": "confused",
        ":/": "confused",
        ":-/": "confused",
        ":*": "kissing_heart",
        ":-*": "kissing_heart",
        ":p": "stuck_out_tongue",
        ":-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";-P": "stuck_out_tongue_winking_eye",
        "):": "disappointed",
        ":(": "disappointed",
        ":-(": "disappointed",
        ">:(": "angry",
        ">:-(": "angry",
        ":'(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":-o": "open_mouth",
        ":O": "open_mouth",
        ":-O": "open_mouth",
        ":)": "slightly_smiling_face",
        "(:": "slightly_smiling_face",
        ":-)": "slightly_smiling_face",
        "<3": "heart"
      }, F.prototype.variations_data = {
        "1f385": { "1f3fb": ["1f385-1f3fb", 7, 9, 15, ["🎅🏻"]], "1f3fc": ["1f385-1f3fc", 7, 10, 15, ["🎅🏼"]], "1f3fd": ["1f385-1f3fd", 7, 11, 15, ["🎅🏽"]], "1f3fe": ["1f385-1f3fe", 7, 12, 15, ["🎅🏾"]], "1f3ff": ["1f385-1f3ff", 7, 13, 15, ["🎅🏿"]] },
        "1f3c2": { "1f3fb": ["1f3c2-1f3fb", 8, 9, 15, ["🏂🏻"]], "1f3fc": ["1f3c2-1f3fc", 8, 10, 15, ["🏂🏼"]], "1f3fd": ["1f3c2-1f3fd", 8, 11, 15, ["🏂🏽"]], "1f3fe": ["1f3c2-1f3fe", 8, 12, 15, ["🏂🏾"]], "1f3ff": ["1f3c2-1f3ff", 8, 13, 15, ["🏂🏿"]] },
        "1f3c3-200d-2640-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2640-fe0f", 8, 15, 15, ["🏃🏻‍♀️"]], "1f3fc": ["1f3c3-1f3fc-200d-2640-fe0f", 8, 16, 15, ["🏃🏼‍♀️"]], "1f3fd": ["1f3c3-1f3fd-200d-2640-fe0f", 8, 17, 15, ["🏃🏽‍♀️"]], "1f3fe": ["1f3c3-1f3fe-200d-2640-fe0f", 8, 18, 15, ["🏃🏾‍♀️"]], "1f3ff": ["1f3c3-1f3ff-200d-2640-fe0f", 8, 19, 15, ["🏃🏿‍♀️"]] },
        "1f3c3-200d-2642-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2642-fe0f", 8, 21, 15, ["🏃🏻‍♂️", "🏃🏻"]], "1f3fc": ["1f3c3-1f3fc-200d-2642-fe0f", 8, 22, 15, ["🏃🏼‍♂️", "🏃🏼"]], "1f3fd": ["1f3c3-1f3fd-200d-2642-fe0f", 8, 23, 15, ["🏃🏽‍♂️", "🏃🏽"]], "1f3fe": ["1f3c3-1f3fe-200d-2642-fe0f", 8, 24, 15, ["🏃🏾‍♂️", "🏃🏾"]], "1f3ff": ["1f3c3-1f3ff-200d-2642-fe0f", 8, 25, 15, ["🏃🏿‍♂️", "🏃🏿"]] },
        "1f3c4-200d-2640-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2640-fe0f", 8, 33, 15, ["🏄🏻‍♀️"]], "1f3fc": ["1f3c4-1f3fc-200d-2640-fe0f", 8, 34, 15, ["🏄🏼‍♀️"]], "1f3fd": ["1f3c4-1f3fd-200d-2640-fe0f", 8, 35, 15, ["🏄🏽‍♀️"]], "1f3fe": ["1f3c4-1f3fe-200d-2640-fe0f", 8, 36, 15, ["🏄🏾‍♀️"]], "1f3ff": ["1f3c4-1f3ff-200d-2640-fe0f", 8, 37, 15, ["🏄🏿‍♀️"]] },
        "1f3c4-200d-2642-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2642-fe0f", 8, 39, 15, ["🏄🏻‍♂️", "🏄🏻"]], "1f3fc": ["1f3c4-1f3fc-200d-2642-fe0f", 8, 40, 15, ["🏄🏼‍♂️", "🏄🏼"]], "1f3fd": ["1f3c4-1f3fd-200d-2642-fe0f", 8, 41, 15, ["🏄🏽‍♂️", "🏄🏽"]], "1f3fe": ["1f3c4-1f3fe-200d-2642-fe0f", 8, 42, 15, ["🏄🏾‍♂️", "🏄🏾"]], "1f3ff": ["1f3c4-1f3ff-200d-2642-fe0f", 8, 43, 15, ["🏄🏿‍♂️", "🏄🏿"]] },
        "1f3c7": { "1f3fb": ["1f3c7-1f3fb", 8, 53, 15, ["🏇🏻"]], "1f3fc": ["1f3c7-1f3fc", 8, 54, 15, ["🏇🏼"]], "1f3fd": ["1f3c7-1f3fd", 8, 55, 15, ["🏇🏽"]], "1f3fe": ["1f3c7-1f3fe", 8, 56, 15, ["🏇🏾"]], "1f3ff": ["1f3c7-1f3ff", 8, 57, 15, ["🏇🏿"]] },
        "1f3ca-200d-2640-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2640-fe0f", 9, 0, 15, ["🏊🏻‍♀️"]], "1f3fc": ["1f3ca-1f3fc-200d-2640-fe0f", 9, 1, 15, ["🏊🏼‍♀️"]], "1f3fd": ["1f3ca-1f3fd-200d-2640-fe0f", 9, 2, 15, ["🏊🏽‍♀️"]], "1f3fe": ["1f3ca-1f3fe-200d-2640-fe0f", 9, 3, 15, ["🏊🏾‍♀️"]], "1f3ff": ["1f3ca-1f3ff-200d-2640-fe0f", 9, 4, 15, ["🏊🏿‍♀️"]] },
        "1f3ca-200d-2642-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2642-fe0f", 9, 6, 15, ["🏊🏻‍♂️", "🏊🏻"]], "1f3fc": ["1f3ca-1f3fc-200d-2642-fe0f", 9, 7, 15, ["🏊🏼‍♂️", "🏊🏼"]], "1f3fd": ["1f3ca-1f3fd-200d-2642-fe0f", 9, 8, 15, ["🏊🏽‍♂️", "🏊🏽"]], "1f3fe": ["1f3ca-1f3fe-200d-2642-fe0f", 9, 9, 15, ["🏊🏾‍♂️", "🏊🏾"]], "1f3ff": ["1f3ca-1f3ff-200d-2642-fe0f", 9, 10, 15, ["🏊🏿‍♂️", "🏊🏿"]] },
        "1f3cb-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2640-fe0f", 9, 18, 15, ["🏋🏻‍♀️"]], "1f3fc": ["1f3cb-1f3fc-200d-2640-fe0f", 9, 19, 15, ["🏋🏼‍♀️"]], "1f3fd": ["1f3cb-1f3fd-200d-2640-fe0f", 9, 20, 15, ["🏋🏽‍♀️"]], "1f3fe": ["1f3cb-1f3fe-200d-2640-fe0f", 9, 21, 15, ["🏋🏾‍♀️"]], "1f3ff": ["1f3cb-1f3ff-200d-2640-fe0f", 9, 22, 15, ["🏋🏿‍♀️"]] },
        "1f3cb-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2642-fe0f", 9, 24, 15, ["🏋🏻‍♂️", "🏋🏻"]], "1f3fc": ["1f3cb-1f3fc-200d-2642-fe0f", 9, 25, 15, ["🏋🏼‍♂️", "🏋🏼"]], "1f3fd": ["1f3cb-1f3fd-200d-2642-fe0f", 9, 26, 15, ["🏋🏽‍♂️", "🏋🏽"]], "1f3fe": ["1f3cb-1f3fe-200d-2642-fe0f", 9, 27, 15, ["🏋🏾‍♂️", "🏋🏾"]], "1f3ff": ["1f3cb-1f3ff-200d-2642-fe0f", 9, 28, 15, ["🏋🏿‍♂️", "🏋🏿"]] },
        "1f3cc-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2640-fe0f", 9, 36, 15, ["🏌🏻‍♀️"]], "1f3fc": ["1f3cc-1f3fc-200d-2640-fe0f", 9, 37, 15, ["🏌🏼‍♀️"]], "1f3fd": ["1f3cc-1f3fd-200d-2640-fe0f", 9, 38, 15, ["🏌🏽‍♀️"]], "1f3fe": ["1f3cc-1f3fe-200d-2640-fe0f", 9, 39, 15, ["🏌🏾‍♀️"]], "1f3ff": ["1f3cc-1f3ff-200d-2640-fe0f", 9, 40, 15, ["🏌🏿‍♀️"]] },
        "1f3cc-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2642-fe0f", 9, 42, 15, ["🏌🏻‍♂️", "🏌🏻"]], "1f3fc": ["1f3cc-1f3fc-200d-2642-fe0f", 9, 43, 15, ["🏌🏼‍♂️", "🏌🏼"]], "1f3fd": ["1f3cc-1f3fd-200d-2642-fe0f", 9, 44, 15, ["🏌🏽‍♂️", "🏌🏽"]], "1f3fe": ["1f3cc-1f3fe-200d-2642-fe0f", 9, 45, 15, ["🏌🏾‍♂️", "🏌🏾"]], "1f3ff": ["1f3cc-1f3ff-200d-2642-fe0f", 9, 46, 15, ["🏌🏿‍♂️", "🏌🏿"]] },
        "1f442": { "1f3fb": ["1f442-1f3fb", 11, 57, 15, ["👂🏻"]], "1f3fc": ["1f442-1f3fc", 11, 58, 15, ["👂🏼"]], "1f3fd": ["1f442-1f3fd", 11, 59, 15, ["👂🏽"]], "1f3fe": ["1f442-1f3fe", 11, 60, 15, ["👂🏾"]], "1f3ff": ["1f442-1f3ff", 12, 0, 15, ["👂🏿"]] },
        "1f443": { "1f3fb": ["1f443-1f3fb", 12, 2, 15, ["👃🏻"]], "1f3fc": ["1f443-1f3fc", 12, 3, 15, ["👃🏼"]], "1f3fd": ["1f443-1f3fd", 12, 4, 15, ["👃🏽"]], "1f3fe": ["1f443-1f3fe", 12, 5, 15, ["👃🏾"]], "1f3ff": ["1f443-1f3ff", 12, 6, 15, ["👃🏿"]] },
        "1f446": { "1f3fb": ["1f446-1f3fb", 12, 10, 15, ["👆🏻"]], "1f3fc": ["1f446-1f3fc", 12, 11, 15, ["👆🏼"]], "1f3fd": ["1f446-1f3fd", 12, 12, 15, ["👆🏽"]], "1f3fe": ["1f446-1f3fe", 12, 13, 15, ["👆🏾"]], "1f3ff": ["1f446-1f3ff", 12, 14, 15, ["👆🏿"]] },
        "1f447": { "1f3fb": ["1f447-1f3fb", 12, 16, 15, ["👇🏻"]], "1f3fc": ["1f447-1f3fc", 12, 17, 15, ["👇🏼"]], "1f3fd": ["1f447-1f3fd", 12, 18, 15, ["👇🏽"]], "1f3fe": ["1f447-1f3fe", 12, 19, 15, ["👇🏾"]], "1f3ff": ["1f447-1f3ff", 12, 20, 15, ["👇🏿"]] },
        "1f448": { "1f3fb": ["1f448-1f3fb", 12, 22, 15, ["👈🏻"]], "1f3fc": ["1f448-1f3fc", 12, 23, 15, ["👈🏼"]], "1f3fd": ["1f448-1f3fd", 12, 24, 15, ["👈🏽"]], "1f3fe": ["1f448-1f3fe", 12, 25, 15, ["👈🏾"]], "1f3ff": ["1f448-1f3ff", 12, 26, 15, ["👈🏿"]] },
        "1f449": { "1f3fb": ["1f449-1f3fb", 12, 28, 15, ["👉🏻"]], "1f3fc": ["1f449-1f3fc", 12, 29, 15, ["👉🏼"]], "1f3fd": ["1f449-1f3fd", 12, 30, 15, ["👉🏽"]], "1f3fe": ["1f449-1f3fe", 12, 31, 15, ["👉🏾"]], "1f3ff": ["1f449-1f3ff", 12, 32, 15, ["👉🏿"]] },
        "1f44a": { "1f3fb": ["1f44a-1f3fb", 12, 34, 15, ["👊🏻"]], "1f3fc": ["1f44a-1f3fc", 12, 35, 15, ["👊🏼"]], "1f3fd": ["1f44a-1f3fd", 12, 36, 15, ["👊🏽"]], "1f3fe": ["1f44a-1f3fe", 12, 37, 15, ["👊🏾"]], "1f3ff": ["1f44a-1f3ff", 12, 38, 15, ["👊🏿"]] },
        "1f44b": { "1f3fb": ["1f44b-1f3fb", 12, 40, 15, ["👋🏻"]], "1f3fc": ["1f44b-1f3fc", 12, 41, 15, ["👋🏼"]], "1f3fd": ["1f44b-1f3fd", 12, 42, 15, ["👋🏽"]], "1f3fe": ["1f44b-1f3fe", 12, 43, 15, ["👋🏾"]], "1f3ff": ["1f44b-1f3ff", 12, 44, 15, ["👋🏿"]] },
        "1f44c": { "1f3fb": ["1f44c-1f3fb", 12, 46, 15, ["👌🏻"]], "1f3fc": ["1f44c-1f3fc", 12, 47, 15, ["👌🏼"]], "1f3fd": ["1f44c-1f3fd", 12, 48, 15, ["👌🏽"]], "1f3fe": ["1f44c-1f3fe", 12, 49, 15, ["👌🏾"]], "1f3ff": ["1f44c-1f3ff", 12, 50, 15, ["👌🏿"]] },
        "1f44d": { "1f3fb": ["1f44d-1f3fb", 12, 52, 15, ["👍🏻"]], "1f3fc": ["1f44d-1f3fc", 12, 53, 15, ["👍🏼"]], "1f3fd": ["1f44d-1f3fd", 12, 54, 15, ["👍🏽"]], "1f3fe": ["1f44d-1f3fe", 12, 55, 15, ["👍🏾"]], "1f3ff": ["1f44d-1f3ff", 12, 56, 15, ["👍🏿"]] },
        "1f44e": { "1f3fb": ["1f44e-1f3fb", 12, 58, 15, ["👎🏻"]], "1f3fc": ["1f44e-1f3fc", 12, 59, 15, ["👎🏼"]], "1f3fd": ["1f44e-1f3fd", 12, 60, 15, ["👎🏽"]], "1f3fe": ["1f44e-1f3fe", 13, 0, 15, ["👎🏾"]], "1f3ff": ["1f44e-1f3ff", 13, 1, 15, ["👎🏿"]] },
        "1f44f": { "1f3fb": ["1f44f-1f3fb", 13, 3, 15, ["👏🏻"]], "1f3fc": ["1f44f-1f3fc", 13, 4, 15, ["👏🏼"]], "1f3fd": ["1f44f-1f3fd", 13, 5, 15, ["👏🏽"]], "1f3fe": ["1f44f-1f3fe", 13, 6, 15, ["👏🏾"]], "1f3ff": ["1f44f-1f3ff", 13, 7, 15, ["👏🏿"]] },
        "1f450": { "1f3fb": ["1f450-1f3fb", 13, 9, 15, ["👐🏻"]], "1f3fc": ["1f450-1f3fc", 13, 10, 15, ["👐🏼"]], "1f3fd": ["1f450-1f3fd", 13, 11, 15, ["👐🏽"]], "1f3fe": ["1f450-1f3fe", 13, 12, 15, ["👐🏾"]], "1f3ff": ["1f450-1f3ff", 13, 13, 15, ["👐🏿"]] },
        "1f466": { "1f3fb": ["1f466-1f3fb", 13, 36, 15, ["👦🏻"]], "1f3fc": ["1f466-1f3fc", 13, 37, 15, ["👦🏼"]], "1f3fd": ["1f466-1f3fd", 13, 38, 15, ["👦🏽"]], "1f3fe": ["1f466-1f3fe", 13, 39, 15, ["👦🏾"]], "1f3ff": ["1f466-1f3ff", 13, 40, 15, ["👦🏿"]] },
        "1f467": { "1f3fb": ["1f467-1f3fb", 13, 42, 15, ["👧🏻"]], "1f3fc": ["1f467-1f3fc", 13, 43, 15, ["👧🏼"]], "1f3fd": ["1f467-1f3fd", 13, 44, 15, ["👧🏽"]], "1f3fe": ["1f467-1f3fe", 13, 45, 15, ["👧🏾"]], "1f3ff": ["1f467-1f3ff", 13, 46, 15, ["👧🏿"]] },
        "1f468-200d-1f33e": { "1f3fb": ["1f468-1f3fb-200d-1f33e", 13, 48, 15, ["👨🏻‍🌾"]], "1f3fc": ["1f468-1f3fc-200d-1f33e", 13, 49, 15, ["👨🏼‍🌾"]], "1f3fd": ["1f468-1f3fd-200d-1f33e", 13, 50, 15, ["👨🏽‍🌾"]], "1f3fe": ["1f468-1f3fe-200d-1f33e", 13, 51, 15, ["👨🏾‍🌾"]], "1f3ff": ["1f468-1f3ff-200d-1f33e", 13, 52, 15, ["👨🏿‍🌾"]] },
        "1f468-200d-1f373": { "1f3fb": ["1f468-1f3fb-200d-1f373", 13, 54, 15, ["👨🏻‍🍳"]], "1f3fc": ["1f468-1f3fc-200d-1f373", 13, 55, 15, ["👨🏼‍🍳"]], "1f3fd": ["1f468-1f3fd-200d-1f373", 13, 56, 15, ["👨🏽‍🍳"]], "1f3fe": ["1f468-1f3fe-200d-1f373", 13, 57, 15, ["👨🏾‍🍳"]], "1f3ff": ["1f468-1f3ff-200d-1f373", 13, 58, 15, ["👨🏿‍🍳"]] },
        "1f468-200d-1f37c": { "1f3fb": ["1f468-1f3fb-200d-1f37c", 13, 60, 15, ["👨🏻‍🍼"]], "1f3fc": ["1f468-1f3fc-200d-1f37c", 14, 0, 15, ["👨🏼‍🍼"]], "1f3fd": ["1f468-1f3fd-200d-1f37c", 14, 1, 15, ["👨🏽‍🍼"]], "1f3fe": ["1f468-1f3fe-200d-1f37c", 14, 2, 15, ["👨🏾‍🍼"]], "1f3ff": ["1f468-1f3ff-200d-1f37c", 14, 3, 15, ["👨🏿‍🍼"]] },
        "1f468-200d-1f393": { "1f3fb": ["1f468-1f3fb-200d-1f393", 14, 5, 15, ["👨🏻‍🎓"]], "1f3fc": ["1f468-1f3fc-200d-1f393", 14, 6, 15, ["👨🏼‍🎓"]], "1f3fd": ["1f468-1f3fd-200d-1f393", 14, 7, 15, ["👨🏽‍🎓"]], "1f3fe": ["1f468-1f3fe-200d-1f393", 14, 8, 15, ["👨🏾‍🎓"]], "1f3ff": ["1f468-1f3ff-200d-1f393", 14, 9, 15, ["👨🏿‍🎓"]] },
        "1f468-200d-1f3a4": { "1f3fb": ["1f468-1f3fb-200d-1f3a4", 14, 11, 15, ["👨🏻‍🎤"]], "1f3fc": ["1f468-1f3fc-200d-1f3a4", 14, 12, 15, ["👨🏼‍🎤"]], "1f3fd": ["1f468-1f3fd-200d-1f3a4", 14, 13, 15, ["👨🏽‍🎤"]], "1f3fe": ["1f468-1f3fe-200d-1f3a4", 14, 14, 15, ["👨🏾‍🎤"]], "1f3ff": ["1f468-1f3ff-200d-1f3a4", 14, 15, 15, ["👨🏿‍🎤"]] },
        "1f468-200d-1f3a8": { "1f3fb": ["1f468-1f3fb-200d-1f3a8", 14, 17, 15, ["👨🏻‍🎨"]], "1f3fc": ["1f468-1f3fc-200d-1f3a8", 14, 18, 15, ["👨🏼‍🎨"]], "1f3fd": ["1f468-1f3fd-200d-1f3a8", 14, 19, 15, ["👨🏽‍🎨"]], "1f3fe": ["1f468-1f3fe-200d-1f3a8", 14, 20, 15, ["👨🏾‍🎨"]], "1f3ff": ["1f468-1f3ff-200d-1f3a8", 14, 21, 15, ["👨🏿‍🎨"]] },
        "1f468-200d-1f3eb": { "1f3fb": ["1f468-1f3fb-200d-1f3eb", 14, 23, 15, ["👨🏻‍🏫"]], "1f3fc": ["1f468-1f3fc-200d-1f3eb", 14, 24, 15, ["👨🏼‍🏫"]], "1f3fd": ["1f468-1f3fd-200d-1f3eb", 14, 25, 15, ["👨🏽‍🏫"]], "1f3fe": ["1f468-1f3fe-200d-1f3eb", 14, 26, 15, ["👨🏾‍🏫"]], "1f3ff": ["1f468-1f3ff-200d-1f3eb", 14, 27, 15, ["👨🏿‍🏫"]] },
        "1f468-200d-1f3ed": { "1f3fb": ["1f468-1f3fb-200d-1f3ed", 14, 29, 15, ["👨🏻‍🏭"]], "1f3fc": ["1f468-1f3fc-200d-1f3ed", 14, 30, 15, ["👨🏼‍🏭"]], "1f3fd": ["1f468-1f3fd-200d-1f3ed", 14, 31, 15, ["👨🏽‍🏭"]], "1f3fe": ["1f468-1f3fe-200d-1f3ed", 14, 32, 15, ["👨🏾‍🏭"]], "1f3ff": ["1f468-1f3ff-200d-1f3ed", 14, 33, 15, ["👨🏿‍🏭"]] },
        "1f468-200d-1f4bb": { "1f3fb": ["1f468-1f3fb-200d-1f4bb", 14, 50, 15, ["👨🏻‍💻"]], "1f3fc": ["1f468-1f3fc-200d-1f4bb", 14, 51, 15, ["👨🏼‍💻"]], "1f3fd": ["1f468-1f3fd-200d-1f4bb", 14, 52, 15, ["👨🏽‍💻"]], "1f3fe": ["1f468-1f3fe-200d-1f4bb", 14, 53, 15, ["👨🏾‍💻"]], "1f3ff": ["1f468-1f3ff-200d-1f4bb", 14, 54, 15, ["👨🏿‍💻"]] },
        "1f468-200d-1f4bc": { "1f3fb": ["1f468-1f3fb-200d-1f4bc", 14, 56, 15, ["👨🏻‍💼"]], "1f3fc": ["1f468-1f3fc-200d-1f4bc", 14, 57, 15, ["👨🏼‍💼"]], "1f3fd": ["1f468-1f3fd-200d-1f4bc", 14, 58, 15, ["👨🏽‍💼"]], "1f3fe": ["1f468-1f3fe-200d-1f4bc", 14, 59, 15, ["👨🏾‍💼"]], "1f3ff": ["1f468-1f3ff-200d-1f4bc", 14, 60, 15, ["👨🏿‍💼"]] },
        "1f468-200d-1f527": { "1f3fb": ["1f468-1f3fb-200d-1f527", 15, 1, 15, ["👨🏻‍🔧"]], "1f3fc": ["1f468-1f3fc-200d-1f527", 15, 2, 15, ["👨🏼‍🔧"]], "1f3fd": ["1f468-1f3fd-200d-1f527", 15, 3, 15, ["👨🏽‍🔧"]], "1f3fe": ["1f468-1f3fe-200d-1f527", 15, 4, 15, ["👨🏾‍🔧"]], "1f3ff": ["1f468-1f3ff-200d-1f527", 15, 5, 15, ["👨🏿‍🔧"]] },
        "1f468-200d-1f52c": { "1f3fb": ["1f468-1f3fb-200d-1f52c", 15, 7, 15, ["👨🏻‍🔬"]], "1f3fc": ["1f468-1f3fc-200d-1f52c", 15, 8, 15, ["👨🏼‍🔬"]], "1f3fd": ["1f468-1f3fd-200d-1f52c", 15, 9, 15, ["👨🏽‍🔬"]], "1f3fe": ["1f468-1f3fe-200d-1f52c", 15, 10, 15, ["👨🏾‍🔬"]], "1f3ff": ["1f468-1f3ff-200d-1f52c", 15, 11, 15, ["👨🏿‍🔬"]] },
        "1f468-200d-1f680": { "1f3fb": ["1f468-1f3fb-200d-1f680", 15, 13, 15, ["👨🏻‍🚀"]], "1f3fc": ["1f468-1f3fc-200d-1f680", 15, 14, 15, ["👨🏼‍🚀"]], "1f3fd": ["1f468-1f3fd-200d-1f680", 15, 15, 15, ["👨🏽‍🚀"]], "1f3fe": ["1f468-1f3fe-200d-1f680", 15, 16, 15, ["👨🏾‍🚀"]], "1f3ff": ["1f468-1f3ff-200d-1f680", 15, 17, 15, ["👨🏿‍🚀"]] },
        "1f468-200d-1f692": { "1f3fb": ["1f468-1f3fb-200d-1f692", 15, 19, 15, ["👨🏻‍🚒"]], "1f3fc": ["1f468-1f3fc-200d-1f692", 15, 20, 15, ["👨🏼‍🚒"]], "1f3fd": ["1f468-1f3fd-200d-1f692", 15, 21, 15, ["👨🏽‍🚒"]], "1f3fe": ["1f468-1f3fe-200d-1f692", 15, 22, 15, ["👨🏾‍🚒"]], "1f3ff": ["1f468-1f3ff-200d-1f692", 15, 23, 15, ["👨🏿‍🚒"]] },
        "1f468-200d-1f9af": { "1f3fb": ["1f468-1f3fb-200d-1f9af", 15, 25, 15, ["👨🏻‍🦯"]], "1f3fc": ["1f468-1f3fc-200d-1f9af", 15, 26, 15, ["👨🏼‍🦯"]], "1f3fd": ["1f468-1f3fd-200d-1f9af", 15, 27, 15, ["👨🏽‍🦯"]], "1f3fe": ["1f468-1f3fe-200d-1f9af", 15, 28, 15, ["👨🏾‍🦯"]], "1f3ff": ["1f468-1f3ff-200d-1f9af", 15, 29, 15, ["👨🏿‍🦯"]] },
        "1f468-200d-1f9b0": { "1f3fb": ["1f468-1f3fb-200d-1f9b0", 15, 31, 15, ["👨🏻‍🦰"]], "1f3fc": ["1f468-1f3fc-200d-1f9b0", 15, 32, 15, ["👨🏼‍🦰"]], "1f3fd": ["1f468-1f3fd-200d-1f9b0", 15, 33, 15, ["👨🏽‍🦰"]], "1f3fe": ["1f468-1f3fe-200d-1f9b0", 15, 34, 15, ["👨🏾‍🦰"]], "1f3ff": ["1f468-1f3ff-200d-1f9b0", 15, 35, 15, ["👨🏿‍🦰"]] },
        "1f468-200d-1f9b1": { "1f3fb": ["1f468-1f3fb-200d-1f9b1", 15, 37, 15, ["👨🏻‍🦱"]], "1f3fc": ["1f468-1f3fc-200d-1f9b1", 15, 38, 15, ["👨🏼‍🦱"]], "1f3fd": ["1f468-1f3fd-200d-1f9b1", 15, 39, 15, ["👨🏽‍🦱"]], "1f3fe": ["1f468-1f3fe-200d-1f9b1", 15, 40, 15, ["👨🏾‍🦱"]], "1f3ff": ["1f468-1f3ff-200d-1f9b1", 15, 41, 15, ["👨🏿‍🦱"]] },
        "1f468-200d-1f9b2": { "1f3fb": ["1f468-1f3fb-200d-1f9b2", 15, 43, 15, ["👨🏻‍🦲"]], "1f3fc": ["1f468-1f3fc-200d-1f9b2", 15, 44, 15, ["👨🏼‍🦲"]], "1f3fd": ["1f468-1f3fd-200d-1f9b2", 15, 45, 15, ["👨🏽‍🦲"]], "1f3fe": ["1f468-1f3fe-200d-1f9b2", 15, 46, 15, ["👨🏾‍🦲"]], "1f3ff": ["1f468-1f3ff-200d-1f9b2", 15, 47, 15, ["👨🏿‍🦲"]] },
        "1f468-200d-1f9b3": { "1f3fb": ["1f468-1f3fb-200d-1f9b3", 15, 49, 15, ["👨🏻‍🦳"]], "1f3fc": ["1f468-1f3fc-200d-1f9b3", 15, 50, 15, ["👨🏼‍🦳"]], "1f3fd": ["1f468-1f3fd-200d-1f9b3", 15, 51, 15, ["👨🏽‍🦳"]], "1f3fe": ["1f468-1f3fe-200d-1f9b3", 15, 52, 15, ["👨🏾‍🦳"]], "1f3ff": ["1f468-1f3ff-200d-1f9b3", 15, 53, 15, ["👨🏿‍🦳"]] },
        "1f468-200d-1f9bc": { "1f3fb": ["1f468-1f3fb-200d-1f9bc", 15, 55, 15, ["👨🏻‍🦼"]], "1f3fc": ["1f468-1f3fc-200d-1f9bc", 15, 56, 15, ["👨🏼‍🦼"]], "1f3fd": ["1f468-1f3fd-200d-1f9bc", 15, 57, 15, ["👨🏽‍🦼"]], "1f3fe": ["1f468-1f3fe-200d-1f9bc", 15, 58, 15, ["👨🏾‍🦼"]], "1f3ff": ["1f468-1f3ff-200d-1f9bc", 15, 59, 15, ["👨🏿‍🦼"]] },
        "1f468-200d-1f9bd": { "1f3fb": ["1f468-1f3fb-200d-1f9bd", 16, 0, 15, ["👨🏻‍🦽"]], "1f3fc": ["1f468-1f3fc-200d-1f9bd", 16, 1, 15, ["👨🏼‍🦽"]], "1f3fd": ["1f468-1f3fd-200d-1f9bd", 16, 2, 15, ["👨🏽‍🦽"]], "1f3fe": ["1f468-1f3fe-200d-1f9bd", 16, 3, 15, ["👨🏾‍🦽"]], "1f3ff": ["1f468-1f3ff-200d-1f9bd", 16, 4, 15, ["👨🏿‍🦽"]] },
        "1f468-200d-2695-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2695-fe0f", 16, 6, 15, ["👨🏻‍⚕️"]], "1f3fc": ["1f468-1f3fc-200d-2695-fe0f", 16, 7, 15, ["👨🏼‍⚕️"]], "1f3fd": ["1f468-1f3fd-200d-2695-fe0f", 16, 8, 15, ["👨🏽‍⚕️"]], "1f3fe": ["1f468-1f3fe-200d-2695-fe0f", 16, 9, 15, ["👨🏾‍⚕️"]], "1f3ff": ["1f468-1f3ff-200d-2695-fe0f", 16, 10, 15, ["👨🏿‍⚕️"]] },
        "1f468-200d-2696-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2696-fe0f", 16, 12, 15, ["👨🏻‍⚖️"]], "1f3fc": ["1f468-1f3fc-200d-2696-fe0f", 16, 13, 15, ["👨🏼‍⚖️"]], "1f3fd": ["1f468-1f3fd-200d-2696-fe0f", 16, 14, 15, ["👨🏽‍⚖️"]], "1f3fe": ["1f468-1f3fe-200d-2696-fe0f", 16, 15, 15, ["👨🏾‍⚖️"]], "1f3ff": ["1f468-1f3ff-200d-2696-fe0f", 16, 16, 15, ["👨🏿‍⚖️"]] },
        "1f468-200d-2708-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2708-fe0f", 16, 18, 15, ["👨🏻‍✈️"]], "1f3fc": ["1f468-1f3fc-200d-2708-fe0f", 16, 19, 15, ["👨🏼‍✈️"]], "1f3fd": ["1f468-1f3fd-200d-2708-fe0f", 16, 20, 15, ["👨🏽‍✈️"]], "1f3fe": ["1f468-1f3fe-200d-2708-fe0f", 16, 21, 15, ["👨🏾‍✈️"]], "1f3ff": ["1f468-1f3ff-200d-2708-fe0f", 16, 22, 15, ["👨🏿‍✈️"]] },
        "1f468-200d-2764-fe0f-200d-1f468": { "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 16, 24, 15, ["👨🏻‍❤️‍👨🏻"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 16, 25, 15, ["👨🏻‍❤️‍👨🏼"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 16, 26, 15, ["👨🏻‍❤️‍👨🏽"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 16, 27, 15, ["👨🏻‍❤️‍👨🏾"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 16, 28, 15, ["👨🏻‍❤️‍👨🏿"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 16, 29, 15, ["👨🏼‍❤️‍👨🏻"]], "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 16, 30, 15, ["👨🏼‍❤️‍👨🏼"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 16, 31, 15, ["👨🏼‍❤️‍👨🏽"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 16, 32, 15, ["👨🏼‍❤️‍👨🏾"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 16, 33, 15, ["👨🏼‍❤️‍👨🏿"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 16, 34, 15, ["👨🏽‍❤️‍👨🏻"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 16, 35, 15, ["👨🏽‍❤️‍👨🏼"]], "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 16, 36, 15, ["👨🏽‍❤️‍👨🏽"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 16, 37, 15, ["👨🏽‍❤️‍👨🏾"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 16, 38, 15, ["👨🏽‍❤️‍👨🏿"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 16, 39, 15, ["👨🏾‍❤️‍👨🏻"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 16, 40, 15, ["👨🏾‍❤️‍👨🏼"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 16, 41, 15, ["👨🏾‍❤️‍👨🏽"]], "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 16, 42, 15, ["👨🏾‍❤️‍👨🏾"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 16, 43, 15, ["👨🏾‍❤️‍👨🏿"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 16, 44, 15, ["👨🏿‍❤️‍👨🏻"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 16, 45, 15, ["👨🏿‍❤️‍👨🏼"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 16, 46, 15, ["👨🏿‍❤️‍👨🏽"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 16, 47, 15, ["👨🏿‍❤️‍👨🏾"]], "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 16, 48, 15, ["👨🏿‍❤️‍👨🏿"]] },
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": { "1f3fb-1f3fb": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 50, 15, ["👨🏻‍❤️‍💋‍👨🏻"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 16, 51, 15, ["👨🏻‍❤️‍💋‍👨🏼"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 16, 52, 15, ["👨🏻‍❤️‍💋‍👨🏽"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 16, 53, 15, ["👨🏻‍❤️‍💋‍👨🏾"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 16, 54, 15, ["👨🏻‍❤️‍💋‍👨🏿"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 55, 15, ["👨🏼‍❤️‍💋‍👨🏻"]], "1f3fc-1f3fc": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 16, 56, 15, ["👨🏼‍❤️‍💋‍👨🏼"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 16, 57, 15, ["👨🏼‍❤️‍💋‍👨🏽"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 16, 58, 15, ["👨🏼‍❤️‍💋‍👨🏾"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 16, 59, 15, ["👨🏼‍❤️‍💋‍👨🏿"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 16, 60, 15, ["👨🏽‍❤️‍💋‍👨🏻"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 0, 15, ["👨🏽‍❤️‍💋‍👨🏼"]], "1f3fd-1f3fd": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 1, 15, ["👨🏽‍❤️‍💋‍👨🏽"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 2, 15, ["👨🏽‍❤️‍💋‍👨🏾"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 3, 15, ["👨🏽‍❤️‍💋‍👨🏿"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 4, 15, ["👨🏾‍❤️‍💋‍👨🏻"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 5, 15, ["👨🏾‍❤️‍💋‍👨🏼"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 6, 15, ["👨🏾‍❤️‍💋‍👨🏽"]], "1f3fe-1f3fe": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 7, 15, ["👨🏾‍❤️‍💋‍👨🏾"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 8, 15, ["👨🏾‍❤️‍💋‍👨🏿"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 17, 9, 15, ["👨🏿‍❤️‍💋‍👨🏻"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 17, 10, 15, ["👨🏿‍❤️‍💋‍👨🏼"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 17, 11, 15, ["👨🏿‍❤️‍💋‍👨🏽"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 17, 12, 15, ["👨🏿‍❤️‍💋‍👨🏾"]], "1f3ff-1f3ff": ["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 17, 13, 15, ["👨🏿‍❤️‍💋‍👨🏿"]] },
        "1f468": { "1f3fb": ["1f468-1f3fb", 17, 15, 15, ["👨🏻"]], "1f3fc": ["1f468-1f3fc", 17, 16, 15, ["👨🏼"]], "1f3fd": ["1f468-1f3fd", 17, 17, 15, ["👨🏽"]], "1f3fe": ["1f468-1f3fe", 17, 18, 15, ["👨🏾"]], "1f3ff": ["1f468-1f3ff", 17, 19, 15, ["👨🏿"]] },
        "1f469-200d-1f33e": { "1f3fb": ["1f469-1f3fb-200d-1f33e", 17, 21, 15, ["👩🏻‍🌾"]], "1f3fc": ["1f469-1f3fc-200d-1f33e", 17, 22, 15, ["👩🏼‍🌾"]], "1f3fd": ["1f469-1f3fd-200d-1f33e", 17, 23, 15, ["👩🏽‍🌾"]], "1f3fe": ["1f469-1f3fe-200d-1f33e", 17, 24, 15, ["👩🏾‍🌾"]], "1f3ff": ["1f469-1f3ff-200d-1f33e", 17, 25, 15, ["👩🏿‍🌾"]] },
        "1f469-200d-1f373": { "1f3fb": ["1f469-1f3fb-200d-1f373", 17, 27, 15, ["👩🏻‍🍳"]], "1f3fc": ["1f469-1f3fc-200d-1f373", 17, 28, 15, ["👩🏼‍🍳"]], "1f3fd": ["1f469-1f3fd-200d-1f373", 17, 29, 15, ["👩🏽‍🍳"]], "1f3fe": ["1f469-1f3fe-200d-1f373", 17, 30, 15, ["👩🏾‍🍳"]], "1f3ff": ["1f469-1f3ff-200d-1f373", 17, 31, 15, ["👩🏿‍🍳"]] },
        "1f469-200d-1f37c": { "1f3fb": ["1f469-1f3fb-200d-1f37c", 17, 33, 15, ["👩🏻‍🍼"]], "1f3fc": ["1f469-1f3fc-200d-1f37c", 17, 34, 15, ["👩🏼‍🍼"]], "1f3fd": ["1f469-1f3fd-200d-1f37c", 17, 35, 15, ["👩🏽‍🍼"]], "1f3fe": ["1f469-1f3fe-200d-1f37c", 17, 36, 15, ["👩🏾‍🍼"]], "1f3ff": ["1f469-1f3ff-200d-1f37c", 17, 37, 15, ["👩🏿‍🍼"]] },
        "1f469-200d-1f393": { "1f3fb": ["1f469-1f3fb-200d-1f393", 17, 39, 15, ["👩🏻‍🎓"]], "1f3fc": ["1f469-1f3fc-200d-1f393", 17, 40, 15, ["👩🏼‍🎓"]], "1f3fd": ["1f469-1f3fd-200d-1f393", 17, 41, 15, ["👩🏽‍🎓"]], "1f3fe": ["1f469-1f3fe-200d-1f393", 17, 42, 15, ["👩🏾‍🎓"]], "1f3ff": ["1f469-1f3ff-200d-1f393", 17, 43, 15, ["👩🏿‍🎓"]] },
        "1f469-200d-1f3a4": { "1f3fb": ["1f469-1f3fb-200d-1f3a4", 17, 45, 15, ["👩🏻‍🎤"]], "1f3fc": ["1f469-1f3fc-200d-1f3a4", 17, 46, 15, ["👩🏼‍🎤"]], "1f3fd": ["1f469-1f3fd-200d-1f3a4", 17, 47, 15, ["👩🏽‍🎤"]], "1f3fe": ["1f469-1f3fe-200d-1f3a4", 17, 48, 15, ["👩🏾‍🎤"]], "1f3ff": ["1f469-1f3ff-200d-1f3a4", 17, 49, 15, ["👩🏿‍🎤"]] },
        "1f469-200d-1f3a8": { "1f3fb": ["1f469-1f3fb-200d-1f3a8", 17, 51, 15, ["👩🏻‍🎨"]], "1f3fc": ["1f469-1f3fc-200d-1f3a8", 17, 52, 15, ["👩🏼‍🎨"]], "1f3fd": ["1f469-1f3fd-200d-1f3a8", 17, 53, 15, ["👩🏽‍🎨"]], "1f3fe": ["1f469-1f3fe-200d-1f3a8", 17, 54, 15, ["👩🏾‍🎨"]], "1f3ff": ["1f469-1f3ff-200d-1f3a8", 17, 55, 15, ["👩🏿‍🎨"]] },
        "1f469-200d-1f3eb": { "1f3fb": ["1f469-1f3fb-200d-1f3eb", 17, 57, 15, ["👩🏻‍🏫"]], "1f3fc": ["1f469-1f3fc-200d-1f3eb", 17, 58, 15, ["👩🏼‍🏫"]], "1f3fd": ["1f469-1f3fd-200d-1f3eb", 17, 59, 15, ["👩🏽‍🏫"]], "1f3fe": ["1f469-1f3fe-200d-1f3eb", 17, 60, 15, ["👩🏾‍🏫"]], "1f3ff": ["1f469-1f3ff-200d-1f3eb", 18, 0, 15, ["👩🏿‍🏫"]] },
        "1f469-200d-1f3ed": { "1f3fb": ["1f469-1f3fb-200d-1f3ed", 18, 2, 15, ["👩🏻‍🏭"]], "1f3fc": ["1f469-1f3fc-200d-1f3ed", 18, 3, 15, ["👩🏼‍🏭"]], "1f3fd": ["1f469-1f3fd-200d-1f3ed", 18, 4, 15, ["👩🏽‍🏭"]], "1f3fe": ["1f469-1f3fe-200d-1f3ed", 18, 5, 15, ["👩🏾‍🏭"]], "1f3ff": ["1f469-1f3ff-200d-1f3ed", 18, 6, 15, ["👩🏿‍🏭"]] },
        "1f469-200d-1f4bb": { "1f3fb": ["1f469-1f3fb-200d-1f4bb", 18, 18, 15, ["👩🏻‍💻"]], "1f3fc": ["1f469-1f3fc-200d-1f4bb", 18, 19, 15, ["👩🏼‍💻"]], "1f3fd": ["1f469-1f3fd-200d-1f4bb", 18, 20, 15, ["👩🏽‍💻"]], "1f3fe": ["1f469-1f3fe-200d-1f4bb", 18, 21, 15, ["👩🏾‍💻"]], "1f3ff": ["1f469-1f3ff-200d-1f4bb", 18, 22, 15, ["👩🏿‍💻"]] },
        "1f469-200d-1f4bc": { "1f3fb": ["1f469-1f3fb-200d-1f4bc", 18, 24, 15, ["👩🏻‍💼"]], "1f3fc": ["1f469-1f3fc-200d-1f4bc", 18, 25, 15, ["👩🏼‍💼"]], "1f3fd": ["1f469-1f3fd-200d-1f4bc", 18, 26, 15, ["👩🏽‍💼"]], "1f3fe": ["1f469-1f3fe-200d-1f4bc", 18, 27, 15, ["👩🏾‍💼"]], "1f3ff": ["1f469-1f3ff-200d-1f4bc", 18, 28, 15, ["👩🏿‍💼"]] },
        "1f469-200d-1f527": { "1f3fb": ["1f469-1f3fb-200d-1f527", 18, 30, 15, ["👩🏻‍🔧"]], "1f3fc": ["1f469-1f3fc-200d-1f527", 18, 31, 15, ["👩🏼‍🔧"]], "1f3fd": ["1f469-1f3fd-200d-1f527", 18, 32, 15, ["👩🏽‍🔧"]], "1f3fe": ["1f469-1f3fe-200d-1f527", 18, 33, 15, ["👩🏾‍🔧"]], "1f3ff": ["1f469-1f3ff-200d-1f527", 18, 34, 15, ["👩🏿‍🔧"]] },
        "1f469-200d-1f52c": { "1f3fb": ["1f469-1f3fb-200d-1f52c", 18, 36, 15, ["👩🏻‍🔬"]], "1f3fc": ["1f469-1f3fc-200d-1f52c", 18, 37, 15, ["👩🏼‍🔬"]], "1f3fd": ["1f469-1f3fd-200d-1f52c", 18, 38, 15, ["👩🏽‍🔬"]], "1f3fe": ["1f469-1f3fe-200d-1f52c", 18, 39, 15, ["👩🏾‍🔬"]], "1f3ff": ["1f469-1f3ff-200d-1f52c", 18, 40, 15, ["👩🏿‍🔬"]] },
        "1f469-200d-1f680": { "1f3fb": ["1f469-1f3fb-200d-1f680", 18, 42, 15, ["👩🏻‍🚀"]], "1f3fc": ["1f469-1f3fc-200d-1f680", 18, 43, 15, ["👩🏼‍🚀"]], "1f3fd": ["1f469-1f3fd-200d-1f680", 18, 44, 15, ["👩🏽‍🚀"]], "1f3fe": ["1f469-1f3fe-200d-1f680", 18, 45, 15, ["👩🏾‍🚀"]], "1f3ff": ["1f469-1f3ff-200d-1f680", 18, 46, 15, ["👩🏿‍🚀"]] },
        "1f469-200d-1f692": { "1f3fb": ["1f469-1f3fb-200d-1f692", 18, 48, 15, ["👩🏻‍🚒"]], "1f3fc": ["1f469-1f3fc-200d-1f692", 18, 49, 15, ["👩🏼‍🚒"]], "1f3fd": ["1f469-1f3fd-200d-1f692", 18, 50, 15, ["👩🏽‍🚒"]], "1f3fe": ["1f469-1f3fe-200d-1f692", 18, 51, 15, ["👩🏾‍🚒"]], "1f3ff": ["1f469-1f3ff-200d-1f692", 18, 52, 15, ["👩🏿‍🚒"]] },
        "1f469-200d-1f9af": { "1f3fb": ["1f469-1f3fb-200d-1f9af", 18, 54, 15, ["👩🏻‍🦯"]], "1f3fc": ["1f469-1f3fc-200d-1f9af", 18, 55, 15, ["👩🏼‍🦯"]], "1f3fd": ["1f469-1f3fd-200d-1f9af", 18, 56, 15, ["👩🏽‍🦯"]], "1f3fe": ["1f469-1f3fe-200d-1f9af", 18, 57, 15, ["👩🏾‍🦯"]], "1f3ff": ["1f469-1f3ff-200d-1f9af", 18, 58, 15, ["👩🏿‍🦯"]] },
        "1f469-200d-1f9b0": { "1f3fb": ["1f469-1f3fb-200d-1f9b0", 18, 60, 15, ["👩🏻‍🦰"]], "1f3fc": ["1f469-1f3fc-200d-1f9b0", 19, 0, 15, ["👩🏼‍🦰"]], "1f3fd": ["1f469-1f3fd-200d-1f9b0", 19, 1, 15, ["👩🏽‍🦰"]], "1f3fe": ["1f469-1f3fe-200d-1f9b0", 19, 2, 15, ["👩🏾‍🦰"]], "1f3ff": ["1f469-1f3ff-200d-1f9b0", 19, 3, 15, ["👩🏿‍🦰"]] },
        "1f469-200d-1f9b1": { "1f3fb": ["1f469-1f3fb-200d-1f9b1", 19, 5, 15, ["👩🏻‍🦱"]], "1f3fc": ["1f469-1f3fc-200d-1f9b1", 19, 6, 15, ["👩🏼‍🦱"]], "1f3fd": ["1f469-1f3fd-200d-1f9b1", 19, 7, 15, ["👩🏽‍🦱"]], "1f3fe": ["1f469-1f3fe-200d-1f9b1", 19, 8, 15, ["👩🏾‍🦱"]], "1f3ff": ["1f469-1f3ff-200d-1f9b1", 19, 9, 15, ["👩🏿‍🦱"]] },
        "1f469-200d-1f9b2": { "1f3fb": ["1f469-1f3fb-200d-1f9b2", 19, 11, 15, ["👩🏻‍🦲"]], "1f3fc": ["1f469-1f3fc-200d-1f9b2", 19, 12, 15, ["👩🏼‍🦲"]], "1f3fd": ["1f469-1f3fd-200d-1f9b2", 19, 13, 15, ["👩🏽‍🦲"]], "1f3fe": ["1f469-1f3fe-200d-1f9b2", 19, 14, 15, ["👩🏾‍🦲"]], "1f3ff": ["1f469-1f3ff-200d-1f9b2", 19, 15, 15, ["👩🏿‍🦲"]] },
        "1f469-200d-1f9b3": { "1f3fb": ["1f469-1f3fb-200d-1f9b3", 19, 17, 15, ["👩🏻‍🦳"]], "1f3fc": ["1f469-1f3fc-200d-1f9b3", 19, 18, 15, ["👩🏼‍🦳"]], "1f3fd": ["1f469-1f3fd-200d-1f9b3", 19, 19, 15, ["👩🏽‍🦳"]], "1f3fe": ["1f469-1f3fe-200d-1f9b3", 19, 20, 15, ["👩🏾‍🦳"]], "1f3ff": ["1f469-1f3ff-200d-1f9b3", 19, 21, 15, ["👩🏿‍🦳"]] },
        "1f469-200d-1f9bc": { "1f3fb": ["1f469-1f3fb-200d-1f9bc", 19, 23, 15, ["👩🏻‍🦼"]], "1f3fc": ["1f469-1f3fc-200d-1f9bc", 19, 24, 15, ["👩🏼‍🦼"]], "1f3fd": ["1f469-1f3fd-200d-1f9bc", 19, 25, 15, ["👩🏽‍🦼"]], "1f3fe": ["1f469-1f3fe-200d-1f9bc", 19, 26, 15, ["👩🏾‍🦼"]], "1f3ff": ["1f469-1f3ff-200d-1f9bc", 19, 27, 15, ["👩🏿‍🦼"]] },
        "1f469-200d-1f9bd": { "1f3fb": ["1f469-1f3fb-200d-1f9bd", 19, 29, 15, ["👩🏻‍🦽"]], "1f3fc": ["1f469-1f3fc-200d-1f9bd", 19, 30, 15, ["👩🏼‍🦽"]], "1f3fd": ["1f469-1f3fd-200d-1f9bd", 19, 31, 15, ["👩🏽‍🦽"]], "1f3fe": ["1f469-1f3fe-200d-1f9bd", 19, 32, 15, ["👩🏾‍🦽"]], "1f3ff": ["1f469-1f3ff-200d-1f9bd", 19, 33, 15, ["👩🏿‍🦽"]] },
        "1f469-200d-2695-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2695-fe0f", 19, 35, 15, ["👩🏻‍⚕️"]], "1f3fc": ["1f469-1f3fc-200d-2695-fe0f", 19, 36, 15, ["👩🏼‍⚕️"]], "1f3fd": ["1f469-1f3fd-200d-2695-fe0f", 19, 37, 15, ["👩🏽‍⚕️"]], "1f3fe": ["1f469-1f3fe-200d-2695-fe0f", 19, 38, 15, ["👩🏾‍⚕️"]], "1f3ff": ["1f469-1f3ff-200d-2695-fe0f", 19, 39, 15, ["👩🏿‍⚕️"]] },
        "1f469-200d-2696-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2696-fe0f", 19, 41, 15, ["👩🏻‍⚖️"]], "1f3fc": ["1f469-1f3fc-200d-2696-fe0f", 19, 42, 15, ["👩🏼‍⚖️"]], "1f3fd": ["1f469-1f3fd-200d-2696-fe0f", 19, 43, 15, ["👩🏽‍⚖️"]], "1f3fe": ["1f469-1f3fe-200d-2696-fe0f", 19, 44, 15, ["👩🏾‍⚖️"]], "1f3ff": ["1f469-1f3ff-200d-2696-fe0f", 19, 45, 15, ["👩🏿‍⚖️"]] },
        "1f469-200d-2708-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2708-fe0f", 19, 47, 15, ["👩🏻‍✈️"]], "1f3fc": ["1f469-1f3fc-200d-2708-fe0f", 19, 48, 15, ["👩🏼‍✈️"]], "1f3fd": ["1f469-1f3fd-200d-2708-fe0f", 19, 49, 15, ["👩🏽‍✈️"]], "1f3fe": ["1f469-1f3fe-200d-2708-fe0f", 19, 50, 15, ["👩🏾‍✈️"]], "1f3ff": ["1f469-1f3ff-200d-2708-fe0f", 19, 51, 15, ["👩🏿‍✈️"]] },
        "1f469-200d-2764-fe0f-200d-1f468": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", 19, 53, 15, ["👩🏻‍❤️‍👨🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc", 19, 54, 15, ["👩🏻‍❤️‍👨🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd", 19, 55, 15, ["👩🏻‍❤️‍👨🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe", 19, 56, 15, ["👩🏻‍❤️‍👨🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff", 19, 57, 15, ["👩🏻‍❤️‍👨🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb", 19, 58, 15, ["👩🏼‍❤️‍👨🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", 19, 59, 15, ["👩🏼‍❤️‍👨🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd", 19, 60, 15, ["👩🏼‍❤️‍👨🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe", 20, 0, 15, ["👩🏼‍❤️‍👨🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff", 20, 1, 15, ["👩🏼‍❤️‍👨🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb", 20, 2, 15, ["👩🏽‍❤️‍👨🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc", 20, 3, 15, ["👩🏽‍❤️‍👨🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", 20, 4, 15, ["👩🏽‍❤️‍👨🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe", 20, 5, 15, ["👩🏽‍❤️‍👨🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff", 20, 6, 15, ["👩🏽‍❤️‍👨🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb", 20, 7, 15, ["👩🏾‍❤️‍👨🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc", 20, 8, 15, ["👩🏾‍❤️‍👨🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd", 20, 9, 15, ["👩🏾‍❤️‍👨🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", 20, 10, 15, ["👩🏾‍❤️‍👨🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff", 20, 11, 15, ["👩🏾‍❤️‍👨🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb", 20, 12, 15, ["👩🏿‍❤️‍👨🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc", 20, 13, 15, ["👩🏿‍❤️‍👨🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd", 20, 14, 15, ["👩🏿‍❤️‍👨🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe", 20, 15, 15, ["👩🏿‍❤️‍👨🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", 20, 16, 15, ["👩🏿‍❤️‍👨🏿"]] },
        "1f469-200d-2764-fe0f-200d-1f469": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb", 20, 18, 15, ["👩🏻‍❤️‍👩🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc", 20, 19, 15, ["👩🏻‍❤️‍👩🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd", 20, 20, 15, ["👩🏻‍❤️‍👩🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe", 20, 21, 15, ["👩🏻‍❤️‍👩🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff", 20, 22, 15, ["👩🏻‍❤️‍👩🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb", 20, 23, 15, ["👩🏼‍❤️‍👩🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc", 20, 24, 15, ["👩🏼‍❤️‍👩🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd", 20, 25, 15, ["👩🏼‍❤️‍👩🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe", 20, 26, 15, ["👩🏼‍❤️‍👩🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff", 20, 27, 15, ["👩🏼‍❤️‍👩🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb", 20, 28, 15, ["👩🏽‍❤️‍👩🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc", 20, 29, 15, ["👩🏽‍❤️‍👩🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd", 20, 30, 15, ["👩🏽‍❤️‍👩🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe", 20, 31, 15, ["👩🏽‍❤️‍👩🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff", 20, 32, 15, ["👩🏽‍❤️‍👩🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb", 20, 33, 15, ["👩🏾‍❤️‍👩🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc", 20, 34, 15, ["👩🏾‍❤️‍👩🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd", 20, 35, 15, ["👩🏾‍❤️‍👩🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe", 20, 36, 15, ["👩🏾‍❤️‍👩🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff", 20, 37, 15, ["👩🏾‍❤️‍👩🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb", 20, 38, 15, ["👩🏿‍❤️‍👩🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc", 20, 39, 15, ["👩🏿‍❤️‍👩🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd", 20, 40, 15, ["👩🏿‍❤️‍👩🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe", 20, 41, 15, ["👩🏿‍❤️‍👩🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff", 20, 42, 15, ["👩🏿‍❤️‍👩🏿"]] },
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 44, 15, ["👩🏻‍❤️‍💋‍👨🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 45, 15, ["👩🏻‍❤️‍💋‍👨🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 46, 15, ["👩🏻‍❤️‍💋‍👨🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 47, 15, ["👩🏻‍❤️‍💋‍👨🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 48, 15, ["👩🏻‍❤️‍💋‍👨🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 49, 15, ["👩🏼‍❤️‍💋‍👨🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 50, 15, ["👩🏼‍❤️‍💋‍👨🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 51, 15, ["👩🏼‍❤️‍💋‍👨🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 52, 15, ["👩🏼‍❤️‍💋‍👨🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 53, 15, ["👩🏼‍❤️‍💋‍👨🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 54, 15, ["👩🏽‍❤️‍💋‍👨🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 55, 15, ["👩🏽‍❤️‍💋‍👨🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 20, 56, 15, ["👩🏽‍❤️‍💋‍👨🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 20, 57, 15, ["👩🏽‍❤️‍💋‍👨🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 20, 58, 15, ["👩🏽‍❤️‍💋‍👨🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 20, 59, 15, ["👩🏾‍❤️‍💋‍👨🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 20, 60, 15, ["👩🏾‍❤️‍💋‍👨🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 0, 15, ["👩🏾‍❤️‍💋‍👨🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 1, 15, ["👩🏾‍❤️‍💋‍👨🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 2, 15, ["👩🏾‍❤️‍💋‍👨🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", 21, 3, 15, ["👩🏿‍❤️‍💋‍👨🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", 21, 4, 15, ["👩🏿‍❤️‍💋‍👨🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", 21, 5, 15, ["👩🏿‍❤️‍💋‍👨🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", 21, 6, 15, ["👩🏿‍❤️‍💋‍👨🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", 21, 7, 15, ["👩🏿‍❤️‍💋‍👨🏿"]] },
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": { "1f3fb-1f3fb": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 9, 15, ["👩🏻‍❤️‍💋‍👩🏻"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 10, 15, ["👩🏻‍❤️‍💋‍👩🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 11, 15, ["👩🏻‍❤️‍💋‍👩🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 12, 15, ["👩🏻‍❤️‍💋‍👩🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 13, 15, ["👩🏻‍❤️‍💋‍👩🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 14, 15, ["👩🏼‍❤️‍💋‍👩🏻"]], "1f3fc-1f3fc": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 15, 15, ["👩🏼‍❤️‍💋‍👩🏼"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 16, 15, ["👩🏼‍❤️‍💋‍👩🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 17, 15, ["👩🏼‍❤️‍💋‍👩🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 18, 15, ["👩🏼‍❤️‍💋‍👩🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 19, 15, ["👩🏽‍❤️‍💋‍👩🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 20, 15, ["👩🏽‍❤️‍💋‍👩🏼"]], "1f3fd-1f3fd": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 21, 15, ["👩🏽‍❤️‍💋‍👩🏽"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 22, 15, ["👩🏽‍❤️‍💋‍👩🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 23, 15, ["👩🏽‍❤️‍💋‍👩🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 24, 15, ["👩🏾‍❤️‍💋‍👩🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 25, 15, ["👩🏾‍❤️‍💋‍👩🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 26, 15, ["👩🏾‍❤️‍💋‍👩🏽"]], "1f3fe-1f3fe": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 27, 15, ["👩🏾‍❤️‍💋‍👩🏾"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 28, 15, ["👩🏾‍❤️‍💋‍👩🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", 21, 29, 15, ["👩🏿‍❤️‍💋‍👩🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", 21, 30, 15, ["👩🏿‍❤️‍💋‍👩🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", 21, 31, 15, ["👩🏿‍❤️‍💋‍👩🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", 21, 32, 15, ["👩🏿‍❤️‍💋‍👩🏾"]], "1f3ff-1f3ff": ["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", 21, 33, 15, ["👩🏿‍❤️‍💋‍👩🏿"]] },
        "1f469": { "1f3fb": ["1f469-1f3fb", 21, 35, 15, ["👩🏻"]], "1f3fc": ["1f469-1f3fc", 21, 36, 15, ["👩🏼"]], "1f3fd": ["1f469-1f3fd", 21, 37, 15, ["👩🏽"]], "1f3fe": ["1f469-1f3fe", 21, 38, 15, ["👩🏾"]], "1f3ff": ["1f469-1f3ff", 21, 39, 15, ["👩🏿"]] },
        "1f46b": { "1f3fb": ["1f46b-1f3fb", 21, 42, 15, ["👫🏻"]], "1f3fc": ["1f46b-1f3fc", 21, 43, 15, ["👫🏼"]], "1f3fd": ["1f46b-1f3fd", 21, 44, 15, ["👫🏽"]], "1f3fe": ["1f46b-1f3fe", 21, 45, 15, ["👫🏾"]], "1f3ff": ["1f46b-1f3ff", 21, 46, 15, ["👫🏿"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc", 21, 47, 15, ["👩🏻‍🤝‍👨🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd", 21, 48, 15, ["👩🏻‍🤝‍👨🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe", 21, 49, 15, ["👩🏻‍🤝‍👨🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff", 21, 50, 15, ["👩🏻‍🤝‍👨🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb", 21, 51, 15, ["👩🏼‍🤝‍👨🏻"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd", 21, 52, 15, ["👩🏼‍🤝‍👨🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe", 21, 53, 15, ["👩🏼‍🤝‍👨🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff", 21, 54, 15, ["👩🏼‍🤝‍👨🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb", 21, 55, 15, ["👩🏽‍🤝‍👨🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc", 21, 56, 15, ["👩🏽‍🤝‍👨🏼"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe", 21, 57, 15, ["👩🏽‍🤝‍👨🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff", 21, 58, 15, ["👩🏽‍🤝‍👨🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb", 21, 59, 15, ["👩🏾‍🤝‍👨🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc", 21, 60, 15, ["👩🏾‍🤝‍👨🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 0, 15, ["👩🏾‍🤝‍👨🏽"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 1, 15, ["👩🏾‍🤝‍👨🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 2, 15, ["👩🏿‍🤝‍👨🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 3, 15, ["👩🏿‍🤝‍👨🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 4, 15, ["👩🏿‍🤝‍👨🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 5, 15, ["👩🏿‍🤝‍👨🏾"]] },
        "1f46c": { "1f3fb": ["1f46c-1f3fb", 22, 7, 15, ["👬🏻"]], "1f3fc": ["1f46c-1f3fc", 22, 8, 15, ["👬🏼"]], "1f3fd": ["1f46c-1f3fd", 22, 9, 15, ["👬🏽"]], "1f3fe": ["1f46c-1f3fe", 22, 10, 15, ["👬🏾"]], "1f3ff": ["1f46c-1f3ff", 22, 11, 15, ["👬🏿"]], "1f3fb-1f3fc": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc", 22, 12, 15, ["👨🏻‍🤝‍👨🏼"]], "1f3fb-1f3fd": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd", 22, 13, 15, ["👨🏻‍🤝‍👨🏽"]], "1f3fb-1f3fe": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe", 22, 14, 15, ["👨🏻‍🤝‍👨🏾"]], "1f3fb-1f3ff": ["1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff", 22, 15, 15, ["👨🏻‍🤝‍👨🏿"]], "1f3fc-1f3fb": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb", 22, 16, 15, ["👨🏼‍🤝‍👨🏻"]], "1f3fc-1f3fd": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd", 22, 17, 15, ["👨🏼‍🤝‍👨🏽"]], "1f3fc-1f3fe": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe", 22, 18, 15, ["👨🏼‍🤝‍👨🏾"]], "1f3fc-1f3ff": ["1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff", 22, 19, 15, ["👨🏼‍🤝‍👨🏿"]], "1f3fd-1f3fb": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb", 22, 20, 15, ["👨🏽‍🤝‍👨🏻"]], "1f3fd-1f3fc": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc", 22, 21, 15, ["👨🏽‍🤝‍👨🏼"]], "1f3fd-1f3fe": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe", 22, 22, 15, ["👨🏽‍🤝‍👨🏾"]], "1f3fd-1f3ff": ["1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff", 22, 23, 15, ["👨🏽‍🤝‍👨🏿"]], "1f3fe-1f3fb": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb", 22, 24, 15, ["👨🏾‍🤝‍👨🏻"]], "1f3fe-1f3fc": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc", 22, 25, 15, ["👨🏾‍🤝‍👨🏼"]], "1f3fe-1f3fd": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd", 22, 26, 15, ["👨🏾‍🤝‍👨🏽"]], "1f3fe-1f3ff": ["1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff", 22, 27, 15, ["👨🏾‍🤝‍👨🏿"]], "1f3ff-1f3fb": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb", 22, 28, 15, ["👨🏿‍🤝‍👨🏻"]], "1f3ff-1f3fc": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc", 22, 29, 15, ["👨🏿‍🤝‍👨🏼"]], "1f3ff-1f3fd": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd", 22, 30, 15, ["👨🏿‍🤝‍👨🏽"]], "1f3ff-1f3fe": ["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe", 22, 31, 15, ["👨🏿‍🤝‍👨🏾"]] },
        "1f46d": { "1f3fb": ["1f46d-1f3fb", 22, 33, 15, ["👭🏻"]], "1f3fc": ["1f46d-1f3fc", 22, 34, 15, ["👭🏼"]], "1f3fd": ["1f46d-1f3fd", 22, 35, 15, ["👭🏽"]], "1f3fe": ["1f46d-1f3fe", 22, 36, 15, ["👭🏾"]], "1f3ff": ["1f46d-1f3ff", 22, 37, 15, ["👭🏿"]], "1f3fb-1f3fc": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc", 22, 38, 15, ["👩🏻‍🤝‍👩🏼"]], "1f3fb-1f3fd": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd", 22, 39, 15, ["👩🏻‍🤝‍👩🏽"]], "1f3fb-1f3fe": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe", 22, 40, 15, ["👩🏻‍🤝‍👩🏾"]], "1f3fb-1f3ff": ["1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff", 22, 41, 15, ["👩🏻‍🤝‍👩🏿"]], "1f3fc-1f3fb": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb", 22, 42, 15, ["👩🏼‍🤝‍👩🏻"]], "1f3fc-1f3fd": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd", 22, 43, 15, ["👩🏼‍🤝‍👩🏽"]], "1f3fc-1f3fe": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe", 22, 44, 15, ["👩🏼‍🤝‍👩🏾"]], "1f3fc-1f3ff": ["1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff", 22, 45, 15, ["👩🏼‍🤝‍👩🏿"]], "1f3fd-1f3fb": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb", 22, 46, 15, ["👩🏽‍🤝‍👩🏻"]], "1f3fd-1f3fc": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc", 22, 47, 15, ["👩🏽‍🤝‍👩🏼"]], "1f3fd-1f3fe": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe", 22, 48, 15, ["👩🏽‍🤝‍👩🏾"]], "1f3fd-1f3ff": ["1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff", 22, 49, 15, ["👩🏽‍🤝‍👩🏿"]], "1f3fe-1f3fb": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb", 22, 50, 15, ["👩🏾‍🤝‍👩🏻"]], "1f3fe-1f3fc": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc", 22, 51, 15, ["👩🏾‍🤝‍👩🏼"]], "1f3fe-1f3fd": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd", 22, 52, 15, ["👩🏾‍🤝‍👩🏽"]], "1f3fe-1f3ff": ["1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff", 22, 53, 15, ["👩🏾‍🤝‍👩🏿"]], "1f3ff-1f3fb": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb", 22, 54, 15, ["👩🏿‍🤝‍👩🏻"]], "1f3ff-1f3fc": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc", 22, 55, 15, ["👩🏿‍🤝‍👩🏼"]], "1f3ff-1f3fd": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd", 22, 56, 15, ["👩🏿‍🤝‍👩🏽"]], "1f3ff-1f3fe": ["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe", 22, 57, 15, ["👩🏿‍🤝‍👩🏾"]] },
        "1f46e-200d-2640-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2640-fe0f", 22, 59, 15, ["👮🏻‍♀️"]], "1f3fc": ["1f46e-1f3fc-200d-2640-fe0f", 22, 60, 15, ["👮🏼‍♀️"]], "1f3fd": ["1f46e-1f3fd-200d-2640-fe0f", 23, 0, 15, ["👮🏽‍♀️"]], "1f3fe": ["1f46e-1f3fe-200d-2640-fe0f", 23, 1, 15, ["👮🏾‍♀️"]], "1f3ff": ["1f46e-1f3ff-200d-2640-fe0f", 23, 2, 15, ["👮🏿‍♀️"]] },
        "1f46e-200d-2642-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2642-fe0f", 23, 4, 15, ["👮🏻‍♂️", "👮🏻"]], "1f3fc": ["1f46e-1f3fc-200d-2642-fe0f", 23, 5, 15, ["👮🏼‍♂️", "👮🏼"]], "1f3fd": ["1f46e-1f3fd-200d-2642-fe0f", 23, 6, 15, ["👮🏽‍♂️", "👮🏽"]], "1f3fe": ["1f46e-1f3fe-200d-2642-fe0f", 23, 7, 15, ["👮🏾‍♂️", "👮🏾"]], "1f3ff": ["1f46e-1f3ff-200d-2642-fe0f", 23, 8, 15, ["👮🏿‍♂️", "👮🏿"]] },
        "1f470-200d-2640-fe0f": { "1f3fb": ["1f470-1f3fb-200d-2640-fe0f", 23, 19, 15, ["👰🏻‍♀️"]], "1f3fc": ["1f470-1f3fc-200d-2640-fe0f", 23, 20, 15, ["👰🏼‍♀️"]], "1f3fd": ["1f470-1f3fd-200d-2640-fe0f", 23, 21, 15, ["👰🏽‍♀️"]], "1f3fe": ["1f470-1f3fe-200d-2640-fe0f", 23, 22, 15, ["👰🏾‍♀️"]], "1f3ff": ["1f470-1f3ff-200d-2640-fe0f", 23, 23, 15, ["👰🏿‍♀️"]] },
        "1f470-200d-2642-fe0f": { "1f3fb": ["1f470-1f3fb-200d-2642-fe0f", 23, 25, 15, ["👰🏻‍♂️"]], "1f3fc": ["1f470-1f3fc-200d-2642-fe0f", 23, 26, 15, ["👰🏼‍♂️"]], "1f3fd": ["1f470-1f3fd-200d-2642-fe0f", 23, 27, 15, ["👰🏽‍♂️"]], "1f3fe": ["1f470-1f3fe-200d-2642-fe0f", 23, 28, 15, ["👰🏾‍♂️"]], "1f3ff": ["1f470-1f3ff-200d-2642-fe0f", 23, 29, 15, ["👰🏿‍♂️"]] },
        "1f470": { "1f3fb": ["1f470-1f3fb", 23, 31, 15, ["👰🏻"]], "1f3fc": ["1f470-1f3fc", 23, 32, 15, ["👰🏼"]], "1f3fd": ["1f470-1f3fd", 23, 33, 15, ["👰🏽"]], "1f3fe": ["1f470-1f3fe", 23, 34, 15, ["👰🏾"]], "1f3ff": ["1f470-1f3ff", 23, 35, 15, ["👰🏿"]] },
        "1f471-200d-2640-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2640-fe0f", 23, 37, 15, ["👱🏻‍♀️"]], "1f3fc": ["1f471-1f3fc-200d-2640-fe0f", 23, 38, 15, ["👱🏼‍♀️"]], "1f3fd": ["1f471-1f3fd-200d-2640-fe0f", 23, 39, 15, ["👱🏽‍♀️"]], "1f3fe": ["1f471-1f3fe-200d-2640-fe0f", 23, 40, 15, ["👱🏾‍♀️"]], "1f3ff": ["1f471-1f3ff-200d-2640-fe0f", 23, 41, 15, ["👱🏿‍♀️"]] },
        "1f471-200d-2642-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2642-fe0f", 23, 43, 15, ["👱🏻‍♂️", "👱🏻"]], "1f3fc": ["1f471-1f3fc-200d-2642-fe0f", 23, 44, 15, ["👱🏼‍♂️", "👱🏼"]], "1f3fd": ["1f471-1f3fd-200d-2642-fe0f", 23, 45, 15, ["👱🏽‍♂️", "👱🏽"]], "1f3fe": ["1f471-1f3fe-200d-2642-fe0f", 23, 46, 15, ["👱🏾‍♂️", "👱🏾"]], "1f3ff": ["1f471-1f3ff-200d-2642-fe0f", 23, 47, 15, ["👱🏿‍♂️", "👱🏿"]] },
        "1f472": { "1f3fb": ["1f472-1f3fb", 23, 55, 15, ["👲🏻"]], "1f3fc": ["1f472-1f3fc", 23, 56, 15, ["👲🏼"]], "1f3fd": ["1f472-1f3fd", 23, 57, 15, ["👲🏽"]], "1f3fe": ["1f472-1f3fe", 23, 58, 15, ["👲🏾"]], "1f3ff": ["1f472-1f3ff", 23, 59, 15, ["👲🏿"]] },
        "1f473-200d-2640-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2640-fe0f", 24, 0, 15, ["👳🏻‍♀️"]], "1f3fc": ["1f473-1f3fc-200d-2640-fe0f", 24, 1, 15, ["👳🏼‍♀️"]], "1f3fd": ["1f473-1f3fd-200d-2640-fe0f", 24, 2, 15, ["👳🏽‍♀️"]], "1f3fe": ["1f473-1f3fe-200d-2640-fe0f", 24, 3, 15, ["👳🏾‍♀️"]], "1f3ff": ["1f473-1f3ff-200d-2640-fe0f", 24, 4, 15, ["👳🏿‍♀️"]] },
        "1f473-200d-2642-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2642-fe0f", 24, 6, 15, ["👳🏻‍♂️", "👳🏻"]], "1f3fc": ["1f473-1f3fc-200d-2642-fe0f", 24, 7, 15, ["👳🏼‍♂️", "👳🏼"]], "1f3fd": ["1f473-1f3fd-200d-2642-fe0f", 24, 8, 15, ["👳🏽‍♂️", "👳🏽"]], "1f3fe": ["1f473-1f3fe-200d-2642-fe0f", 24, 9, 15, ["👳🏾‍♂️", "👳🏾"]], "1f3ff": ["1f473-1f3ff-200d-2642-fe0f", 24, 10, 15, ["👳🏿‍♂️", "👳🏿"]] },
        "1f474": { "1f3fb": ["1f474-1f3fb", 24, 18, 15, ["👴🏻"]], "1f3fc": ["1f474-1f3fc", 24, 19, 15, ["👴🏼"]], "1f3fd": ["1f474-1f3fd", 24, 20, 15, ["👴🏽"]], "1f3fe": ["1f474-1f3fe", 24, 21, 15, ["👴🏾"]], "1f3ff": ["1f474-1f3ff", 24, 22, 15, ["👴🏿"]] },
        "1f475": { "1f3fb": ["1f475-1f3fb", 24, 24, 15, ["👵🏻"]], "1f3fc": ["1f475-1f3fc", 24, 25, 15, ["👵🏼"]], "1f3fd": ["1f475-1f3fd", 24, 26, 15, ["👵🏽"]], "1f3fe": ["1f475-1f3fe", 24, 27, 15, ["👵🏾"]], "1f3ff": ["1f475-1f3ff", 24, 28, 15, ["👵🏿"]] },
        "1f476": { "1f3fb": ["1f476-1f3fb", 24, 30, 15, ["👶🏻"]], "1f3fc": ["1f476-1f3fc", 24, 31, 15, ["👶🏼"]], "1f3fd": ["1f476-1f3fd", 24, 32, 15, ["👶🏽"]], "1f3fe": ["1f476-1f3fe", 24, 33, 15, ["👶🏾"]], "1f3ff": ["1f476-1f3ff", 24, 34, 15, ["👶🏿"]] },
        "1f477-200d-2640-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2640-fe0f", 24, 36, 15, ["👷🏻‍♀️"]], "1f3fc": ["1f477-1f3fc-200d-2640-fe0f", 24, 37, 15, ["👷🏼‍♀️"]], "1f3fd": ["1f477-1f3fd-200d-2640-fe0f", 24, 38, 15, ["👷🏽‍♀️"]], "1f3fe": ["1f477-1f3fe-200d-2640-fe0f", 24, 39, 15, ["👷🏾‍♀️"]], "1f3ff": ["1f477-1f3ff-200d-2640-fe0f", 24, 40, 15, ["👷🏿‍♀️"]] },
        "1f477-200d-2642-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2642-fe0f", 24, 42, 15, ["👷🏻‍♂️", "👷🏻"]], "1f3fc": ["1f477-1f3fc-200d-2642-fe0f", 24, 43, 15, ["👷🏼‍♂️", "👷🏼"]], "1f3fd": ["1f477-1f3fd-200d-2642-fe0f", 24, 44, 15, ["👷🏽‍♂️", "👷🏽"]], "1f3fe": ["1f477-1f3fe-200d-2642-fe0f", 24, 45, 15, ["👷🏾‍♂️", "👷🏾"]], "1f3ff": ["1f477-1f3ff-200d-2642-fe0f", 24, 46, 15, ["👷🏿‍♂️", "👷🏿"]] },
        "1f478": { "1f3fb": ["1f478-1f3fb", 24, 54, 15, ["👸🏻"]], "1f3fc": ["1f478-1f3fc", 24, 55, 15, ["👸🏼"]], "1f3fd": ["1f478-1f3fd", 24, 56, 15, ["👸🏽"]], "1f3fe": ["1f478-1f3fe", 24, 57, 15, ["👸🏾"]], "1f3ff": ["1f478-1f3ff", 24, 58, 15, ["👸🏿"]] },
        "1f47c": { "1f3fb": ["1f47c-1f3fb", 25, 2, 15, ["👼🏻"]], "1f3fc": ["1f47c-1f3fc", 25, 3, 15, ["👼🏼"]], "1f3fd": ["1f47c-1f3fd", 25, 4, 15, ["👼🏽"]], "1f3fe": ["1f47c-1f3fe", 25, 5, 15, ["👼🏾"]], "1f3ff": ["1f47c-1f3ff", 25, 6, 15, ["👼🏿"]] },
        "1f481-200d-2640-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2640-fe0f", 25, 12, 15, ["💁🏻‍♀️", "💁🏻"]], "1f3fc": ["1f481-1f3fc-200d-2640-fe0f", 25, 13, 15, ["💁🏼‍♀️", "💁🏼"]], "1f3fd": ["1f481-1f3fd-200d-2640-fe0f", 25, 14, 15, ["💁🏽‍♀️", "💁🏽"]], "1f3fe": ["1f481-1f3fe-200d-2640-fe0f", 25, 15, 15, ["💁🏾‍♀️", "💁🏾"]], "1f3ff": ["1f481-1f3ff-200d-2640-fe0f", 25, 16, 15, ["💁🏿‍♀️", "💁🏿"]] },
        "1f481-200d-2642-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2642-fe0f", 25, 18, 15, ["💁🏻‍♂️"]], "1f3fc": ["1f481-1f3fc-200d-2642-fe0f", 25, 19, 15, ["💁🏼‍♂️"]], "1f3fd": ["1f481-1f3fd-200d-2642-fe0f", 25, 20, 15, ["💁🏽‍♂️"]], "1f3fe": ["1f481-1f3fe-200d-2642-fe0f", 25, 21, 15, ["💁🏾‍♂️"]], "1f3ff": ["1f481-1f3ff-200d-2642-fe0f", 25, 22, 15, ["💁🏿‍♂️"]] },
        "1f482-200d-2640-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2640-fe0f", 25, 30, 15, ["💂🏻‍♀️"]], "1f3fc": ["1f482-1f3fc-200d-2640-fe0f", 25, 31, 15, ["💂🏼‍♀️"]], "1f3fd": ["1f482-1f3fd-200d-2640-fe0f", 25, 32, 15, ["💂🏽‍♀️"]], "1f3fe": ["1f482-1f3fe-200d-2640-fe0f", 25, 33, 15, ["💂🏾‍♀️"]], "1f3ff": ["1f482-1f3ff-200d-2640-fe0f", 25, 34, 15, ["💂🏿‍♀️"]] },
        "1f482-200d-2642-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2642-fe0f", 25, 36, 15, ["💂🏻‍♂️", "💂🏻"]], "1f3fc": ["1f482-1f3fc-200d-2642-fe0f", 25, 37, 15, ["💂🏼‍♂️", "💂🏼"]], "1f3fd": ["1f482-1f3fd-200d-2642-fe0f", 25, 38, 15, ["💂🏽‍♂️", "💂🏽"]], "1f3fe": ["1f482-1f3fe-200d-2642-fe0f", 25, 39, 15, ["💂🏾‍♂️", "💂🏾"]], "1f3ff": ["1f482-1f3ff-200d-2642-fe0f", 25, 40, 15, ["💂🏿‍♂️", "💂🏿"]] },
        "1f483": { "1f3fb": ["1f483-1f3fb", 25, 48, 15, ["💃🏻"]], "1f3fc": ["1f483-1f3fc", 25, 49, 15, ["💃🏼"]], "1f3fd": ["1f483-1f3fd", 25, 50, 15, ["💃🏽"]], "1f3fe": ["1f483-1f3fe", 25, 51, 15, ["💃🏾"]], "1f3ff": ["1f483-1f3ff", 25, 52, 15, ["💃🏿"]] },
        "1f485": { "1f3fb": ["1f485-1f3fb", 25, 55, 15, ["💅🏻"]], "1f3fc": ["1f485-1f3fc", 25, 56, 15, ["💅🏼"]], "1f3fd": ["1f485-1f3fd", 25, 57, 15, ["💅🏽"]], "1f3fe": ["1f485-1f3fe", 25, 58, 15, ["💅🏾"]], "1f3ff": ["1f485-1f3ff", 25, 59, 15, ["💅🏿"]] },
        "1f486-200d-2640-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2640-fe0f", 26, 0, 15, ["💆🏻‍♀️", "💆🏻"]], "1f3fc": ["1f486-1f3fc-200d-2640-fe0f", 26, 1, 15, ["💆🏼‍♀️", "💆🏼"]], "1f3fd": ["1f486-1f3fd-200d-2640-fe0f", 26, 2, 15, ["💆🏽‍♀️", "💆🏽"]], "1f3fe": ["1f486-1f3fe-200d-2640-fe0f", 26, 3, 15, ["💆🏾‍♀️", "💆🏾"]], "1f3ff": ["1f486-1f3ff-200d-2640-fe0f", 26, 4, 15, ["💆🏿‍♀️", "💆🏿"]] },
        "1f486-200d-2642-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2642-fe0f", 26, 6, 15, ["💆🏻‍♂️"]], "1f3fc": ["1f486-1f3fc-200d-2642-fe0f", 26, 7, 15, ["💆🏼‍♂️"]], "1f3fd": ["1f486-1f3fd-200d-2642-fe0f", 26, 8, 15, ["💆🏽‍♂️"]], "1f3fe": ["1f486-1f3fe-200d-2642-fe0f", 26, 9, 15, ["💆🏾‍♂️"]], "1f3ff": ["1f486-1f3ff-200d-2642-fe0f", 26, 10, 15, ["💆🏿‍♂️"]] },
        "1f487-200d-2640-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2640-fe0f", 26, 18, 15, ["💇🏻‍♀️", "💇🏻"]], "1f3fc": ["1f487-1f3fc-200d-2640-fe0f", 26, 19, 15, ["💇🏼‍♀️", "💇🏼"]], "1f3fd": ["1f487-1f3fd-200d-2640-fe0f", 26, 20, 15, ["💇🏽‍♀️", "💇🏽"]], "1f3fe": ["1f487-1f3fe-200d-2640-fe0f", 26, 21, 15, ["💇🏾‍♀️", "💇🏾"]], "1f3ff": ["1f487-1f3ff-200d-2640-fe0f", 26, 22, 15, ["💇🏿‍♀️", "💇🏿"]] },
        "1f487-200d-2642-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2642-fe0f", 26, 24, 15, ["💇🏻‍♂️"]], "1f3fc": ["1f487-1f3fc-200d-2642-fe0f", 26, 25, 15, ["💇🏼‍♂️"]], "1f3fd": ["1f487-1f3fd-200d-2642-fe0f", 26, 26, 15, ["💇🏽‍♂️"]], "1f3fe": ["1f487-1f3fe-200d-2642-fe0f", 26, 27, 15, ["💇🏾‍♂️"]], "1f3ff": ["1f487-1f3ff-200d-2642-fe0f", 26, 28, 15, ["💇🏿‍♂️"]] },
        "1f48f": { "1f3fb": ["1f48f-1f3fb", 26, 43, 15, ["💏🏻"]], "1f3fc": ["1f48f-1f3fc", 26, 44, 15, ["💏🏼"]], "1f3fd": ["1f48f-1f3fd", 26, 45, 15, ["💏🏽"]], "1f3fe": ["1f48f-1f3fe", 26, 46, 15, ["💏🏾"]], "1f3ff": ["1f48f-1f3ff", 26, 47, 15, ["💏🏿"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 26, 48, 15, ["🧑🏻‍❤️‍💋‍🧑🏼"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 26, 49, 15, ["🧑🏻‍❤️‍💋‍🧑🏽"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 50, 15, ["🧑🏻‍❤️‍💋‍🧑🏾"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 51, 15, ["🧑🏻‍❤️‍💋‍🧑🏿"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 52, 15, ["🧑🏼‍❤️‍💋‍🧑🏻"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 26, 53, 15, ["🧑🏼‍❤️‍💋‍🧑🏽"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 54, 15, ["🧑🏼‍❤️‍💋‍🧑🏾"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 55, 15, ["🧑🏼‍❤️‍💋‍🧑🏿"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 56, 15, ["🧑🏽‍❤️‍💋‍🧑🏻"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 26, 57, 15, ["🧑🏽‍❤️‍💋‍🧑🏼"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 26, 58, 15, ["🧑🏽‍❤️‍💋‍🧑🏾"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 26, 59, 15, ["🧑🏽‍❤️‍💋‍🧑🏿"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 26, 60, 15, ["🧑🏾‍❤️‍💋‍🧑🏻"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 0, 15, ["🧑🏾‍❤️‍💋‍🧑🏼"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 1, 15, ["🧑🏾‍❤️‍💋‍🧑🏽"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff", 27, 2, 15, ["🧑🏾‍❤️‍💋‍🧑🏿"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb", 27, 3, 15, ["🧑🏿‍❤️‍💋‍🧑🏻"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc", 27, 4, 15, ["🧑🏿‍❤️‍💋‍🧑🏼"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd", 27, 5, 15, ["🧑🏿‍❤️‍💋‍🧑🏽"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe", 27, 6, 15, ["🧑🏿‍❤️‍💋‍🧑🏾"]] },
        "1f491": { "1f3fb": ["1f491-1f3fb", 27, 9, 15, ["💑🏻"]], "1f3fc": ["1f491-1f3fc", 27, 10, 15, ["💑🏼"]], "1f3fd": ["1f491-1f3fd", 27, 11, 15, ["💑🏽"]], "1f3fe": ["1f491-1f3fe", 27, 12, 15, ["💑🏾"]], "1f3ff": ["1f491-1f3ff", 27, 13, 15, ["💑🏿"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 14, 15, ["🧑🏻‍❤️‍🧑🏼"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 15, 15, ["🧑🏻‍❤️‍🧑🏽"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 16, 15, ["🧑🏻‍❤️‍🧑🏾"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 17, 15, ["🧑🏻‍❤️‍🧑🏿"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 18, 15, ["🧑🏼‍❤️‍🧑🏻"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 19, 15, ["🧑🏼‍❤️‍🧑🏽"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 20, 15, ["🧑🏼‍❤️‍🧑🏾"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 21, 15, ["🧑🏼‍❤️‍🧑🏿"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 22, 15, ["🧑🏽‍❤️‍🧑🏻"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 23, 15, ["🧑🏽‍❤️‍🧑🏼"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 24, 15, ["🧑🏽‍❤️‍🧑🏾"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 25, 15, ["🧑🏽‍❤️‍🧑🏿"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 26, 15, ["🧑🏾‍❤️‍🧑🏻"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 27, 15, ["🧑🏾‍❤️‍🧑🏼"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 28, 15, ["🧑🏾‍❤️‍🧑🏽"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff", 27, 29, 15, ["🧑🏾‍❤️‍🧑🏿"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb", 27, 30, 15, ["🧑🏿‍❤️‍🧑🏻"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc", 27, 31, 15, ["🧑🏿‍❤️‍🧑🏼"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd", 27, 32, 15, ["🧑🏿‍❤️‍🧑🏽"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe", 27, 33, 15, ["🧑🏿‍❤️‍🧑🏾"]] },
        "1f4aa": { "1f3fb": ["1f4aa-1f3fb", 27, 59, 15, ["💪🏻"]], "1f3fc": ["1f4aa-1f3fc", 27, 60, 15, ["💪🏼"]], "1f3fd": ["1f4aa-1f3fd", 28, 0, 15, ["💪🏽"]], "1f3fe": ["1f4aa-1f3fe", 28, 1, 15, ["💪🏾"]], "1f3ff": ["1f4aa-1f3ff", 28, 2, 15, ["💪🏿"]] },
        "1f574-fe0f": { "1f3fb": ["1f574-1f3fb", 31, 0, 15, ["🕴🏻"]], "1f3fc": ["1f574-1f3fc", 31, 1, 15, ["🕴🏼"]], "1f3fd": ["1f574-1f3fd", 31, 2, 15, ["🕴🏽"]], "1f3fe": ["1f574-1f3fe", 31, 3, 15, ["🕴🏾"]], "1f3ff": ["1f574-1f3ff", 31, 4, 15, ["🕴🏿"]] },
        "1f575-fe0f-200d-2640-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2640-fe0f", 31, 6, 15, ["🕵🏻‍♀️"]], "1f3fc": ["1f575-1f3fc-200d-2640-fe0f", 31, 7, 15, ["🕵🏼‍♀️"]], "1f3fd": ["1f575-1f3fd-200d-2640-fe0f", 31, 8, 15, ["🕵🏽‍♀️"]], "1f3fe": ["1f575-1f3fe-200d-2640-fe0f", 31, 9, 15, ["🕵🏾‍♀️"]], "1f3ff": ["1f575-1f3ff-200d-2640-fe0f", 31, 10, 15, ["🕵🏿‍♀️"]] },
        "1f575-fe0f-200d-2642-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2642-fe0f", 31, 12, 15, ["🕵🏻‍♂️", "🕵🏻"]], "1f3fc": ["1f575-1f3fc-200d-2642-fe0f", 31, 13, 15, ["🕵🏼‍♂️", "🕵🏼"]], "1f3fd": ["1f575-1f3fd-200d-2642-fe0f", 31, 14, 15, ["🕵🏽‍♂️", "🕵🏽"]], "1f3fe": ["1f575-1f3fe-200d-2642-fe0f", 31, 15, 15, ["🕵🏾‍♂️", "🕵🏾"]], "1f3ff": ["1f575-1f3ff-200d-2642-fe0f", 31, 16, 15, ["🕵🏿‍♂️", "🕵🏿"]] },
        "1f57a": { "1f3fb": ["1f57a-1f3fb", 31, 28, 15, ["🕺🏻"]], "1f3fc": ["1f57a-1f3fc", 31, 29, 15, ["🕺🏼"]], "1f3fd": ["1f57a-1f3fd", 31, 30, 15, ["🕺🏽"]], "1f3fe": ["1f57a-1f3fe", 31, 31, 15, ["🕺🏾"]], "1f3ff": ["1f57a-1f3ff", 31, 32, 15, ["🕺🏿"]] },
        "1f590-fe0f": { "1f3fb": ["1f590-1f3fb", 31, 39, 15, ["🖐🏻"]], "1f3fc": ["1f590-1f3fc", 31, 40, 15, ["🖐🏼"]], "1f3fd": ["1f590-1f3fd", 31, 41, 15, ["🖐🏽"]], "1f3fe": ["1f590-1f3fe", 31, 42, 15, ["🖐🏾"]], "1f3ff": ["1f590-1f3ff", 31, 43, 15, ["🖐🏿"]] },
        "1f595": { "1f3fb": ["1f595-1f3fb", 31, 45, 15, ["🖕🏻"]], "1f3fc": ["1f595-1f3fc", 31, 46, 15, ["🖕🏼"]], "1f3fd": ["1f595-1f3fd", 31, 47, 15, ["🖕🏽"]], "1f3fe": ["1f595-1f3fe", 31, 48, 15, ["🖕🏾"]], "1f3ff": ["1f595-1f3ff", 31, 49, 15, ["🖕🏿"]] },
        "1f596": { "1f3fb": ["1f596-1f3fb", 31, 51, 15, ["🖖🏻"]], "1f3fc": ["1f596-1f3fc", 31, 52, 15, ["🖖🏼"]], "1f3fd": ["1f596-1f3fd", 31, 53, 15, ["🖖🏽"]], "1f3fe": ["1f596-1f3fe", 31, 54, 15, ["🖖🏾"]], "1f3ff": ["1f596-1f3ff", 31, 55, 15, ["🖖🏿"]] },
        "1f645-200d-2640-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2640-fe0f", 33, 33, 15, ["🙅🏻‍♀️", "🙅🏻"]], "1f3fc": ["1f645-1f3fc-200d-2640-fe0f", 33, 34, 15, ["🙅🏼‍♀️", "🙅🏼"]], "1f3fd": ["1f645-1f3fd-200d-2640-fe0f", 33, 35, 15, ["🙅🏽‍♀️", "🙅🏽"]], "1f3fe": ["1f645-1f3fe-200d-2640-fe0f", 33, 36, 15, ["🙅🏾‍♀️", "🙅🏾"]], "1f3ff": ["1f645-1f3ff-200d-2640-fe0f", 33, 37, 15, ["🙅🏿‍♀️", "🙅🏿"]] },
        "1f645-200d-2642-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2642-fe0f", 33, 39, 15, ["🙅🏻‍♂️"]], "1f3fc": ["1f645-1f3fc-200d-2642-fe0f", 33, 40, 15, ["🙅🏼‍♂️"]], "1f3fd": ["1f645-1f3fd-200d-2642-fe0f", 33, 41, 15, ["🙅🏽‍♂️"]], "1f3fe": ["1f645-1f3fe-200d-2642-fe0f", 33, 42, 15, ["🙅🏾‍♂️"]], "1f3ff": ["1f645-1f3ff-200d-2642-fe0f", 33, 43, 15, ["🙅🏿‍♂️"]] },
        "1f646-200d-2640-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2640-fe0f", 33, 51, 15, ["🙆🏻‍♀️", "🙆🏻"]], "1f3fc": ["1f646-1f3fc-200d-2640-fe0f", 33, 52, 15, ["🙆🏼‍♀️", "🙆🏼"]], "1f3fd": ["1f646-1f3fd-200d-2640-fe0f", 33, 53, 15, ["🙆🏽‍♀️", "🙆🏽"]], "1f3fe": ["1f646-1f3fe-200d-2640-fe0f", 33, 54, 15, ["🙆🏾‍♀️", "🙆🏾"]], "1f3ff": ["1f646-1f3ff-200d-2640-fe0f", 33, 55, 15, ["🙆🏿‍♀️", "🙆🏿"]] },
        "1f646-200d-2642-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2642-fe0f", 33, 57, 15, ["🙆🏻‍♂️"]], "1f3fc": ["1f646-1f3fc-200d-2642-fe0f", 33, 58, 15, ["🙆🏼‍♂️"]], "1f3fd": ["1f646-1f3fd-200d-2642-fe0f", 33, 59, 15, ["🙆🏽‍♂️"]], "1f3fe": ["1f646-1f3fe-200d-2642-fe0f", 33, 60, 15, ["🙆🏾‍♂️"]], "1f3ff": ["1f646-1f3ff-200d-2642-fe0f", 34, 0, 15, ["🙆🏿‍♂️"]] },
        "1f647-200d-2640-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2640-fe0f", 34, 8, 15, ["🙇🏻‍♀️"]], "1f3fc": ["1f647-1f3fc-200d-2640-fe0f", 34, 9, 15, ["🙇🏼‍♀️"]], "1f3fd": ["1f647-1f3fd-200d-2640-fe0f", 34, 10, 15, ["🙇🏽‍♀️"]], "1f3fe": ["1f647-1f3fe-200d-2640-fe0f", 34, 11, 15, ["🙇🏾‍♀️"]], "1f3ff": ["1f647-1f3ff-200d-2640-fe0f", 34, 12, 15, ["🙇🏿‍♀️"]] },
        "1f647-200d-2642-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2642-fe0f", 34, 14, 15, ["🙇🏻‍♂️"]], "1f3fc": ["1f647-1f3fc-200d-2642-fe0f", 34, 15, 15, ["🙇🏼‍♂️"]], "1f3fd": ["1f647-1f3fd-200d-2642-fe0f", 34, 16, 15, ["🙇🏽‍♂️"]], "1f3fe": ["1f647-1f3fe-200d-2642-fe0f", 34, 17, 15, ["🙇🏾‍♂️"]], "1f3ff": ["1f647-1f3ff-200d-2642-fe0f", 34, 18, 15, ["🙇🏿‍♂️"]] },
        "1f647": { "1f3fb": ["1f647-1f3fb", 34, 20, 15, ["🙇🏻"]], "1f3fc": ["1f647-1f3fc", 34, 21, 15, ["🙇🏼"]], "1f3fd": ["1f647-1f3fd", 34, 22, 15, ["🙇🏽"]], "1f3fe": ["1f647-1f3fe", 34, 23, 15, ["🙇🏾"]], "1f3ff": ["1f647-1f3ff", 34, 24, 15, ["🙇🏿"]] },
        "1f64b-200d-2640-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2640-fe0f", 34, 29, 15, ["🙋🏻‍♀️", "🙋🏻"]], "1f3fc": ["1f64b-1f3fc-200d-2640-fe0f", 34, 30, 15, ["🙋🏼‍♀️", "🙋🏼"]], "1f3fd": ["1f64b-1f3fd-200d-2640-fe0f", 34, 31, 15, ["🙋🏽‍♀️", "🙋🏽"]], "1f3fe": ["1f64b-1f3fe-200d-2640-fe0f", 34, 32, 15, ["🙋🏾‍♀️", "🙋🏾"]], "1f3ff": ["1f64b-1f3ff-200d-2640-fe0f", 34, 33, 15, ["🙋🏿‍♀️", "🙋🏿"]] },
        "1f64b-200d-2642-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2642-fe0f", 34, 35, 15, ["🙋🏻‍♂️"]], "1f3fc": ["1f64b-1f3fc-200d-2642-fe0f", 34, 36, 15, ["🙋🏼‍♂️"]], "1f3fd": ["1f64b-1f3fd-200d-2642-fe0f", 34, 37, 15, ["🙋🏽‍♂️"]], "1f3fe": ["1f64b-1f3fe-200d-2642-fe0f", 34, 38, 15, ["🙋🏾‍♂️"]], "1f3ff": ["1f64b-1f3ff-200d-2642-fe0f", 34, 39, 15, ["🙋🏿‍♂️"]] },
        "1f64c": { "1f3fb": ["1f64c-1f3fb", 34, 47, 15, ["🙌🏻"]], "1f3fc": ["1f64c-1f3fc", 34, 48, 15, ["🙌🏼"]], "1f3fd": ["1f64c-1f3fd", 34, 49, 15, ["🙌🏽"]], "1f3fe": ["1f64c-1f3fe", 34, 50, 15, ["🙌🏾"]], "1f3ff": ["1f64c-1f3ff", 34, 51, 15, ["🙌🏿"]] },
        "1f64d-200d-2640-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2640-fe0f", 34, 53, 15, ["🙍🏻‍♀️", "🙍🏻"]], "1f3fc": ["1f64d-1f3fc-200d-2640-fe0f", 34, 54, 15, ["🙍🏼‍♀️", "🙍🏼"]], "1f3fd": ["1f64d-1f3fd-200d-2640-fe0f", 34, 55, 15, ["🙍🏽‍♀️", "🙍🏽"]], "1f3fe": ["1f64d-1f3fe-200d-2640-fe0f", 34, 56, 15, ["🙍🏾‍♀️", "🙍🏾"]], "1f3ff": ["1f64d-1f3ff-200d-2640-fe0f", 34, 57, 15, ["🙍🏿‍♀️", "🙍🏿"]] },
        "1f64d-200d-2642-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2642-fe0f", 34, 59, 15, ["🙍🏻‍♂️"]], "1f3fc": ["1f64d-1f3fc-200d-2642-fe0f", 34, 60, 15, ["🙍🏼‍♂️"]], "1f3fd": ["1f64d-1f3fd-200d-2642-fe0f", 35, 0, 15, ["🙍🏽‍♂️"]], "1f3fe": ["1f64d-1f3fe-200d-2642-fe0f", 35, 1, 15, ["🙍🏾‍♂️"]], "1f3ff": ["1f64d-1f3ff-200d-2642-fe0f", 35, 2, 15, ["🙍🏿‍♂️"]] },
        "1f64e-200d-2640-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2640-fe0f", 35, 10, 15, ["🙎🏻‍♀️", "🙎🏻"]], "1f3fc": ["1f64e-1f3fc-200d-2640-fe0f", 35, 11, 15, ["🙎🏼‍♀️", "🙎🏼"]], "1f3fd": ["1f64e-1f3fd-200d-2640-fe0f", 35, 12, 15, ["🙎🏽‍♀️", "🙎🏽"]], "1f3fe": ["1f64e-1f3fe-200d-2640-fe0f", 35, 13, 15, ["🙎🏾‍♀️", "🙎🏾"]], "1f3ff": ["1f64e-1f3ff-200d-2640-fe0f", 35, 14, 15, ["🙎🏿‍♀️", "🙎🏿"]] },
        "1f64e-200d-2642-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2642-fe0f", 35, 16, 15, ["🙎🏻‍♂️"]], "1f3fc": ["1f64e-1f3fc-200d-2642-fe0f", 35, 17, 15, ["🙎🏼‍♂️"]], "1f3fd": ["1f64e-1f3fd-200d-2642-fe0f", 35, 18, 15, ["🙎🏽‍♂️"]], "1f3fe": ["1f64e-1f3fe-200d-2642-fe0f", 35, 19, 15, ["🙎🏾‍♂️"]], "1f3ff": ["1f64e-1f3ff-200d-2642-fe0f", 35, 20, 15, ["🙎🏿‍♂️"]] },
        "1f64f": { "1f3fb": ["1f64f-1f3fb", 35, 28, 15, ["🙏🏻"]], "1f3fc": ["1f64f-1f3fc", 35, 29, 15, ["🙏🏼"]], "1f3fd": ["1f64f-1f3fd", 35, 30, 15, ["🙏🏽"]], "1f3fe": ["1f64f-1f3fe", 35, 31, 15, ["🙏🏾"]], "1f3ff": ["1f64f-1f3ff", 35, 32, 15, ["🙏🏿"]] },
        "1f6a3-200d-2640-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2640-fe0f", 36, 8, 15, ["🚣🏻‍♀️"]], "1f3fc": ["1f6a3-1f3fc-200d-2640-fe0f", 36, 9, 15, ["🚣🏼‍♀️"]], "1f3fd": ["1f6a3-1f3fd-200d-2640-fe0f", 36, 10, 15, ["🚣🏽‍♀️"]], "1f3fe": ["1f6a3-1f3fe-200d-2640-fe0f", 36, 11, 15, ["🚣🏾‍♀️"]], "1f3ff": ["1f6a3-1f3ff-200d-2640-fe0f", 36, 12, 15, ["🚣🏿‍♀️"]] },
        "1f6a3-200d-2642-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2642-fe0f", 36, 14, 15, ["🚣🏻‍♂️", "🚣🏻"]], "1f3fc": ["1f6a3-1f3fc-200d-2642-fe0f", 36, 15, 15, ["🚣🏼‍♂️", "🚣🏼"]], "1f3fd": ["1f6a3-1f3fd-200d-2642-fe0f", 36, 16, 15, ["🚣🏽‍♂️", "🚣🏽"]], "1f3fe": ["1f6a3-1f3fe-200d-2642-fe0f", 36, 17, 15, ["🚣🏾‍♂️", "🚣🏾"]], "1f3ff": ["1f6a3-1f3ff-200d-2642-fe0f", 36, 18, 15, ["🚣🏿‍♂️", "🚣🏿"]] },
        "1f6b4-200d-2640-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2640-fe0f", 36, 42, 15, ["🚴🏻‍♀️"]], "1f3fc": ["1f6b4-1f3fc-200d-2640-fe0f", 36, 43, 15, ["🚴🏼‍♀️"]], "1f3fd": ["1f6b4-1f3fd-200d-2640-fe0f", 36, 44, 15, ["🚴🏽‍♀️"]], "1f3fe": ["1f6b4-1f3fe-200d-2640-fe0f", 36, 45, 15, ["🚴🏾‍♀️"]], "1f3ff": ["1f6b4-1f3ff-200d-2640-fe0f", 36, 46, 15, ["🚴🏿‍♀️"]] },
        "1f6b4-200d-2642-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2642-fe0f", 36, 48, 15, ["🚴🏻‍♂️", "🚴🏻"]], "1f3fc": ["1f6b4-1f3fc-200d-2642-fe0f", 36, 49, 15, ["🚴🏼‍♂️", "🚴🏼"]], "1f3fd": ["1f6b4-1f3fd-200d-2642-fe0f", 36, 50, 15, ["🚴🏽‍♂️", "🚴🏽"]], "1f3fe": ["1f6b4-1f3fe-200d-2642-fe0f", 36, 51, 15, ["🚴🏾‍♂️", "🚴🏾"]], "1f3ff": ["1f6b4-1f3ff-200d-2642-fe0f", 36, 52, 15, ["🚴🏿‍♂️", "🚴🏿"]] },
        "1f6b5-200d-2640-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2640-fe0f", 36, 60, 15, ["🚵🏻‍♀️"]], "1f3fc": ["1f6b5-1f3fc-200d-2640-fe0f", 37, 0, 15, ["🚵🏼‍♀️"]], "1f3fd": ["1f6b5-1f3fd-200d-2640-fe0f", 37, 1, 15, ["🚵🏽‍♀️"]], "1f3fe": ["1f6b5-1f3fe-200d-2640-fe0f", 37, 2, 15, ["🚵🏾‍♀️"]], "1f3ff": ["1f6b5-1f3ff-200d-2640-fe0f", 37, 3, 15, ["🚵🏿‍♀️"]] },
        "1f6b5-200d-2642-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2642-fe0f", 37, 5, 15, ["🚵🏻‍♂️", "🚵🏻"]], "1f3fc": ["1f6b5-1f3fc-200d-2642-fe0f", 37, 6, 15, ["🚵🏼‍♂️", "🚵🏼"]], "1f3fd": ["1f6b5-1f3fd-200d-2642-fe0f", 37, 7, 15, ["🚵🏽‍♂️", "🚵🏽"]], "1f3fe": ["1f6b5-1f3fe-200d-2642-fe0f", 37, 8, 15, ["🚵🏾‍♂️", "🚵🏾"]], "1f3ff": ["1f6b5-1f3ff-200d-2642-fe0f", 37, 9, 15, ["🚵🏿‍♂️", "🚵🏿"]] },
        "1f6b6-200d-2640-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2640-fe0f", 37, 17, 15, ["🚶🏻‍♀️"]], "1f3fc": ["1f6b6-1f3fc-200d-2640-fe0f", 37, 18, 15, ["🚶🏼‍♀️"]], "1f3fd": ["1f6b6-1f3fd-200d-2640-fe0f", 37, 19, 15, ["🚶🏽‍♀️"]], "1f3fe": ["1f6b6-1f3fe-200d-2640-fe0f", 37, 20, 15, ["🚶🏾‍♀️"]], "1f3ff": ["1f6b6-1f3ff-200d-2640-fe0f", 37, 21, 15, ["🚶🏿‍♀️"]] },
        "1f6b6-200d-2642-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2642-fe0f", 37, 23, 15, ["🚶🏻‍♂️", "🚶🏻"]], "1f3fc": ["1f6b6-1f3fc-200d-2642-fe0f", 37, 24, 15, ["🚶🏼‍♂️", "🚶🏼"]], "1f3fd": ["1f6b6-1f3fd-200d-2642-fe0f", 37, 25, 15, ["🚶🏽‍♂️", "🚶🏽"]], "1f3fe": ["1f6b6-1f3fe-200d-2642-fe0f", 37, 26, 15, ["🚶🏾‍♂️", "🚶🏾"]], "1f3ff": ["1f6b6-1f3ff-200d-2642-fe0f", 37, 27, 15, ["🚶🏿‍♂️", "🚶🏿"]] },
        "1f6c0": { "1f3fb": ["1f6c0-1f3fb", 37, 44, 15, ["🛀🏻"]], "1f3fc": ["1f6c0-1f3fc", 37, 45, 15, ["🛀🏼"]], "1f3fd": ["1f6c0-1f3fd", 37, 46, 15, ["🛀🏽"]], "1f3fe": ["1f6c0-1f3fe", 37, 47, 15, ["🛀🏾"]], "1f3ff": ["1f6c0-1f3ff", 37, 48, 15, ["🛀🏿"]] },
        "1f6cc": { "1f3fb": ["1f6cc-1f3fb", 37, 56, 15, ["🛌🏻"]], "1f3fc": ["1f6cc-1f3fc", 37, 57, 15, ["🛌🏼"]], "1f3fd": ["1f6cc-1f3fd", 37, 58, 15, ["🛌🏽"]], "1f3fe": ["1f6cc-1f3fe", 37, 59, 15, ["🛌🏾"]], "1f3ff": ["1f6cc-1f3ff", 37, 60, 15, ["🛌🏿"]] },
        "1f90c": { "1f3fb": ["1f90c-1f3fb", 38, 47, 15, ["🤌🏻"]], "1f3fc": ["1f90c-1f3fc", 38, 48, 15, ["🤌🏼"]], "1f3fd": ["1f90c-1f3fd", 38, 49, 15, ["🤌🏽"]], "1f3fe": ["1f90c-1f3fe", 38, 50, 15, ["🤌🏾"]], "1f3ff": ["1f90c-1f3ff", 38, 51, 15, ["🤌🏿"]] },
        "1f90f": { "1f3fb": ["1f90f-1f3fb", 38, 55, 15, ["🤏🏻"]], "1f3fc": ["1f90f-1f3fc", 38, 56, 15, ["🤏🏼"]], "1f3fd": ["1f90f-1f3fd", 38, 57, 15, ["🤏🏽"]], "1f3fe": ["1f90f-1f3fe", 38, 58, 15, ["🤏🏾"]], "1f3ff": ["1f90f-1f3ff", 38, 59, 15, ["🤏🏿"]] },
        "1f918": { "1f3fb": ["1f918-1f3fb", 39, 8, 15, ["🤘🏻"]], "1f3fc": ["1f918-1f3fc", 39, 9, 15, ["🤘🏼"]], "1f3fd": ["1f918-1f3fd", 39, 10, 15, ["🤘🏽"]], "1f3fe": ["1f918-1f3fe", 39, 11, 15, ["🤘🏾"]], "1f3ff": ["1f918-1f3ff", 39, 12, 15, ["🤘🏿"]] },
        "1f919": { "1f3fb": ["1f919-1f3fb", 39, 14, 15, ["🤙🏻"]], "1f3fc": ["1f919-1f3fc", 39, 15, 15, ["🤙🏼"]], "1f3fd": ["1f919-1f3fd", 39, 16, 15, ["🤙🏽"]], "1f3fe": ["1f919-1f3fe", 39, 17, 15, ["🤙🏾"]], "1f3ff": ["1f919-1f3ff", 39, 18, 15, ["🤙🏿"]] },
        "1f91a": { "1f3fb": ["1f91a-1f3fb", 39, 20, 15, ["🤚🏻"]], "1f3fc": ["1f91a-1f3fc", 39, 21, 15, ["🤚🏼"]], "1f3fd": ["1f91a-1f3fd", 39, 22, 15, ["🤚🏽"]], "1f3fe": ["1f91a-1f3fe", 39, 23, 15, ["🤚🏾"]], "1f3ff": ["1f91a-1f3ff", 39, 24, 15, ["🤚🏿"]] },
        "1f91b": { "1f3fb": ["1f91b-1f3fb", 39, 26, 15, ["🤛🏻"]], "1f3fc": ["1f91b-1f3fc", 39, 27, 15, ["🤛🏼"]], "1f3fd": ["1f91b-1f3fd", 39, 28, 15, ["🤛🏽"]], "1f3fe": ["1f91b-1f3fe", 39, 29, 15, ["🤛🏾"]], "1f3ff": ["1f91b-1f3ff", 39, 30, 15, ["🤛🏿"]] },
        "1f91c": { "1f3fb": ["1f91c-1f3fb", 39, 32, 15, ["🤜🏻"]], "1f3fc": ["1f91c-1f3fc", 39, 33, 15, ["🤜🏼"]], "1f3fd": ["1f91c-1f3fd", 39, 34, 15, ["🤜🏽"]], "1f3fe": ["1f91c-1f3fe", 39, 35, 15, ["🤜🏾"]], "1f3ff": ["1f91c-1f3ff", 39, 36, 15, ["🤜🏿"]] },
        "1f91d": { "1f3fb": ["1f91d-1f3fb", 39, 38, 15, ["🤝🏻"]], "1f3fc": ["1f91d-1f3fc", 39, 39, 15, ["🤝🏼"]], "1f3fd": ["1f91d-1f3fd", 39, 40, 15, ["🤝🏽"]], "1f3fe": ["1f91d-1f3fe", 39, 41, 15, ["🤝🏾"]], "1f3ff": ["1f91d-1f3ff", 39, 42, 15, ["🤝🏿"]], "1f3fb-1f3fc": ["1faf1-1f3fb-200d-1faf2-1f3fc", 39, 43, 15, ["🫱🏻‍🫲🏼"]], "1f3fb-1f3fd": ["1faf1-1f3fb-200d-1faf2-1f3fd", 39, 44, 15, ["🫱🏻‍🫲🏽"]], "1f3fb-1f3fe": ["1faf1-1f3fb-200d-1faf2-1f3fe", 39, 45, 15, ["🫱🏻‍🫲🏾"]], "1f3fb-1f3ff": ["1faf1-1f3fb-200d-1faf2-1f3ff", 39, 46, 15, ["🫱🏻‍🫲🏿"]], "1f3fc-1f3fb": ["1faf1-1f3fc-200d-1faf2-1f3fb", 39, 47, 15, ["🫱🏼‍🫲🏻"]], "1f3fc-1f3fd": ["1faf1-1f3fc-200d-1faf2-1f3fd", 39, 48, 15, ["🫱🏼‍🫲🏽"]], "1f3fc-1f3fe": ["1faf1-1f3fc-200d-1faf2-1f3fe", 39, 49, 15, ["🫱🏼‍🫲🏾"]], "1f3fc-1f3ff": ["1faf1-1f3fc-200d-1faf2-1f3ff", 39, 50, 15, ["🫱🏼‍🫲🏿"]], "1f3fd-1f3fb": ["1faf1-1f3fd-200d-1faf2-1f3fb", 39, 51, 15, ["🫱🏽‍🫲🏻"]], "1f3fd-1f3fc": ["1faf1-1f3fd-200d-1faf2-1f3fc", 39, 52, 15, ["🫱🏽‍🫲🏼"]], "1f3fd-1f3fe": ["1faf1-1f3fd-200d-1faf2-1f3fe", 39, 53, 15, ["🫱🏽‍🫲🏾"]], "1f3fd-1f3ff": ["1faf1-1f3fd-200d-1faf2-1f3ff", 39, 54, 15, ["🫱🏽‍🫲🏿"]], "1f3fe-1f3fb": ["1faf1-1f3fe-200d-1faf2-1f3fb", 39, 55, 15, ["🫱🏾‍🫲🏻"]], "1f3fe-1f3fc": ["1faf1-1f3fe-200d-1faf2-1f3fc", 39, 56, 15, ["🫱🏾‍🫲🏼"]], "1f3fe-1f3fd": ["1faf1-1f3fe-200d-1faf2-1f3fd", 39, 57, 15, ["🫱🏾‍🫲🏽"]], "1f3fe-1f3ff": ["1faf1-1f3fe-200d-1faf2-1f3ff", 39, 58, 15, ["🫱🏾‍🫲🏿"]], "1f3ff-1f3fb": ["1faf1-1f3ff-200d-1faf2-1f3fb", 39, 59, 15, ["🫱🏿‍🫲🏻"]], "1f3ff-1f3fc": ["1faf1-1f3ff-200d-1faf2-1f3fc", 39, 60, 15, ["🫱🏿‍🫲🏼"]], "1f3ff-1f3fd": ["1faf1-1f3ff-200d-1faf2-1f3fd", 40, 0, 15, ["🫱🏿‍🫲🏽"]], "1f3ff-1f3fe": ["1faf1-1f3ff-200d-1faf2-1f3fe", 40, 1, 15, ["🫱🏿‍🫲🏾"]] },
        "1f91e": { "1f3fb": ["1f91e-1f3fb", 40, 3, 15, ["🤞🏻"]], "1f3fc": ["1f91e-1f3fc", 40, 4, 15, ["🤞🏼"]], "1f3fd": ["1f91e-1f3fd", 40, 5, 15, ["🤞🏽"]], "1f3fe": ["1f91e-1f3fe", 40, 6, 15, ["🤞🏾"]], "1f3ff": ["1f91e-1f3ff", 40, 7, 15, ["🤞🏿"]] },
        "1f91f": { "1f3fb": ["1f91f-1f3fb", 40, 9, 15, ["🤟🏻"]], "1f3fc": ["1f91f-1f3fc", 40, 10, 15, ["🤟🏼"]], "1f3fd": ["1f91f-1f3fd", 40, 11, 15, ["🤟🏽"]], "1f3fe": ["1f91f-1f3fe", 40, 12, 15, ["🤟🏾"]], "1f3ff": ["1f91f-1f3ff", 40, 13, 15, ["🤟🏿"]] },
        "1f926-200d-2640-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2640-fe0f", 40, 21, 15, ["🤦🏻‍♀️"]], "1f3fc": ["1f926-1f3fc-200d-2640-fe0f", 40, 22, 15, ["🤦🏼‍♀️"]], "1f3fd": ["1f926-1f3fd-200d-2640-fe0f", 40, 23, 15, ["🤦🏽‍♀️"]], "1f3fe": ["1f926-1f3fe-200d-2640-fe0f", 40, 24, 15, ["🤦🏾‍♀️"]], "1f3ff": ["1f926-1f3ff-200d-2640-fe0f", 40, 25, 15, ["🤦🏿‍♀️"]] },
        "1f926-200d-2642-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2642-fe0f", 40, 27, 15, ["🤦🏻‍♂️"]], "1f3fc": ["1f926-1f3fc-200d-2642-fe0f", 40, 28, 15, ["🤦🏼‍♂️"]], "1f3fd": ["1f926-1f3fd-200d-2642-fe0f", 40, 29, 15, ["🤦🏽‍♂️"]], "1f3fe": ["1f926-1f3fe-200d-2642-fe0f", 40, 30, 15, ["🤦🏾‍♂️"]], "1f3ff": ["1f926-1f3ff-200d-2642-fe0f", 40, 31, 15, ["🤦🏿‍♂️"]] },
        "1f926": { "1f3fb": ["1f926-1f3fb", 40, 33, 15, ["🤦🏻"]], "1f3fc": ["1f926-1f3fc", 40, 34, 15, ["🤦🏼"]], "1f3fd": ["1f926-1f3fd", 40, 35, 15, ["🤦🏽"]], "1f3fe": ["1f926-1f3fe", 40, 36, 15, ["🤦🏾"]], "1f3ff": ["1f926-1f3ff", 40, 37, 15, ["🤦🏿"]] },
        "1f930": { "1f3fb": ["1f930-1f3fb", 40, 48, 15, ["🤰🏻"]], "1f3fc": ["1f930-1f3fc", 40, 49, 15, ["🤰🏼"]], "1f3fd": ["1f930-1f3fd", 40, 50, 15, ["🤰🏽"]], "1f3fe": ["1f930-1f3fe", 40, 51, 15, ["🤰🏾"]], "1f3ff": ["1f930-1f3ff", 40, 52, 15, ["🤰🏿"]] },
        "1f931": { "1f3fb": ["1f931-1f3fb", 40, 54, 15, ["🤱🏻"]], "1f3fc": ["1f931-1f3fc", 40, 55, 15, ["🤱🏼"]], "1f3fd": ["1f931-1f3fd", 40, 56, 15, ["🤱🏽"]], "1f3fe": ["1f931-1f3fe", 40, 57, 15, ["🤱🏾"]], "1f3ff": ["1f931-1f3ff", 40, 58, 15, ["🤱🏿"]] },
        "1f932": { "1f3fb": ["1f932-1f3fb", 40, 60, 15, ["🤲🏻"]], "1f3fc": ["1f932-1f3fc", 41, 0, 15, ["🤲🏼"]], "1f3fd": ["1f932-1f3fd", 41, 1, 15, ["🤲🏽"]], "1f3fe": ["1f932-1f3fe", 41, 2, 15, ["🤲🏾"]], "1f3ff": ["1f932-1f3ff", 41, 3, 15, ["🤲🏿"]] },
        "1f933": { "1f3fb": ["1f933-1f3fb", 41, 5, 15, ["🤳🏻"]], "1f3fc": ["1f933-1f3fc", 41, 6, 15, ["🤳🏼"]], "1f3fd": ["1f933-1f3fd", 41, 7, 15, ["🤳🏽"]], "1f3fe": ["1f933-1f3fe", 41, 8, 15, ["🤳🏾"]], "1f3ff": ["1f933-1f3ff", 41, 9, 15, ["🤳🏿"]] },
        "1f934": { "1f3fb": ["1f934-1f3fb", 41, 11, 15, ["🤴🏻"]], "1f3fc": ["1f934-1f3fc", 41, 12, 15, ["🤴🏼"]], "1f3fd": ["1f934-1f3fd", 41, 13, 15, ["🤴🏽"]], "1f3fe": ["1f934-1f3fe", 41, 14, 15, ["🤴🏾"]], "1f3ff": ["1f934-1f3ff", 41, 15, 15, ["🤴🏿"]] },
        "1f935-200d-2640-fe0f": { "1f3fb": ["1f935-1f3fb-200d-2640-fe0f", 41, 17, 15, ["🤵🏻‍♀️"]], "1f3fc": ["1f935-1f3fc-200d-2640-fe0f", 41, 18, 15, ["🤵🏼‍♀️"]], "1f3fd": ["1f935-1f3fd-200d-2640-fe0f", 41, 19, 15, ["🤵🏽‍♀️"]], "1f3fe": ["1f935-1f3fe-200d-2640-fe0f", 41, 20, 15, ["🤵🏾‍♀️"]], "1f3ff": ["1f935-1f3ff-200d-2640-fe0f", 41, 21, 15, ["🤵🏿‍♀️"]] },
        "1f935-200d-2642-fe0f": { "1f3fb": ["1f935-1f3fb-200d-2642-fe0f", 41, 23, 15, ["🤵🏻‍♂️"]], "1f3fc": ["1f935-1f3fc-200d-2642-fe0f", 41, 24, 15, ["🤵🏼‍♂️"]], "1f3fd": ["1f935-1f3fd-200d-2642-fe0f", 41, 25, 15, ["🤵🏽‍♂️"]], "1f3fe": ["1f935-1f3fe-200d-2642-fe0f", 41, 26, 15, ["🤵🏾‍♂️"]], "1f3ff": ["1f935-1f3ff-200d-2642-fe0f", 41, 27, 15, ["🤵🏿‍♂️"]] },
        "1f935": { "1f3fb": ["1f935-1f3fb", 41, 29, 15, ["🤵🏻"]], "1f3fc": ["1f935-1f3fc", 41, 30, 15, ["🤵🏼"]], "1f3fd": ["1f935-1f3fd", 41, 31, 15, ["🤵🏽"]], "1f3fe": ["1f935-1f3fe", 41, 32, 15, ["🤵🏾"]], "1f3ff": ["1f935-1f3ff", 41, 33, 15, ["🤵🏿"]] },
        "1f936": { "1f3fb": ["1f936-1f3fb", 41, 35, 15, ["🤶🏻"]], "1f3fc": ["1f936-1f3fc", 41, 36, 15, ["🤶🏼"]], "1f3fd": ["1f936-1f3fd", 41, 37, 15, ["🤶🏽"]], "1f3fe": ["1f936-1f3fe", 41, 38, 15, ["🤶🏾"]], "1f3ff": ["1f936-1f3ff", 41, 39, 15, ["🤶🏿"]] },
        "1f937-200d-2640-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2640-fe0f", 41, 41, 15, ["🤷🏻‍♀️"]], "1f3fc": ["1f937-1f3fc-200d-2640-fe0f", 41, 42, 15, ["🤷🏼‍♀️"]], "1f3fd": ["1f937-1f3fd-200d-2640-fe0f", 41, 43, 15, ["🤷🏽‍♀️"]], "1f3fe": ["1f937-1f3fe-200d-2640-fe0f", 41, 44, 15, ["🤷🏾‍♀️"]], "1f3ff": ["1f937-1f3ff-200d-2640-fe0f", 41, 45, 15, ["🤷🏿‍♀️"]] },
        "1f937-200d-2642-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2642-fe0f", 41, 47, 15, ["🤷🏻‍♂️"]], "1f3fc": ["1f937-1f3fc-200d-2642-fe0f", 41, 48, 15, ["🤷🏼‍♂️"]], "1f3fd": ["1f937-1f3fd-200d-2642-fe0f", 41, 49, 15, ["🤷🏽‍♂️"]], "1f3fe": ["1f937-1f3fe-200d-2642-fe0f", 41, 50, 15, ["🤷🏾‍♂️"]], "1f3ff": ["1f937-1f3ff-200d-2642-fe0f", 41, 51, 15, ["🤷🏿‍♂️"]] },
        "1f937": { "1f3fb": ["1f937-1f3fb", 41, 53, 15, ["🤷🏻"]], "1f3fc": ["1f937-1f3fc", 41, 54, 15, ["🤷🏼"]], "1f3fd": ["1f937-1f3fd", 41, 55, 15, ["🤷🏽"]], "1f3fe": ["1f937-1f3fe", 41, 56, 15, ["🤷🏾"]], "1f3ff": ["1f937-1f3ff", 41, 57, 15, ["🤷🏿"]] },
        "1f938-200d-2640-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2640-fe0f", 41, 59, 15, ["🤸🏻‍♀️"]], "1f3fc": ["1f938-1f3fc-200d-2640-fe0f", 41, 60, 15, ["🤸🏼‍♀️"]], "1f3fd": ["1f938-1f3fd-200d-2640-fe0f", 42, 0, 15, ["🤸🏽‍♀️"]], "1f3fe": ["1f938-1f3fe-200d-2640-fe0f", 42, 1, 15, ["🤸🏾‍♀️"]], "1f3ff": ["1f938-1f3ff-200d-2640-fe0f", 42, 2, 15, ["🤸🏿‍♀️"]] },
        "1f938-200d-2642-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2642-fe0f", 42, 4, 15, ["🤸🏻‍♂️"]], "1f3fc": ["1f938-1f3fc-200d-2642-fe0f", 42, 5, 15, ["🤸🏼‍♂️"]], "1f3fd": ["1f938-1f3fd-200d-2642-fe0f", 42, 6, 15, ["🤸🏽‍♂️"]], "1f3fe": ["1f938-1f3fe-200d-2642-fe0f", 42, 7, 15, ["🤸🏾‍♂️"]], "1f3ff": ["1f938-1f3ff-200d-2642-fe0f", 42, 8, 15, ["🤸🏿‍♂️"]] },
        "1f938": { "1f3fb": ["1f938-1f3fb", 42, 10, 15, ["🤸🏻"]], "1f3fc": ["1f938-1f3fc", 42, 11, 15, ["🤸🏼"]], "1f3fd": ["1f938-1f3fd", 42, 12, 15, ["🤸🏽"]], "1f3fe": ["1f938-1f3fe", 42, 13, 15, ["🤸🏾"]], "1f3ff": ["1f938-1f3ff", 42, 14, 15, ["🤸🏿"]] },
        "1f939-200d-2640-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2640-fe0f", 42, 16, 15, ["🤹🏻‍♀️"]], "1f3fc": ["1f939-1f3fc-200d-2640-fe0f", 42, 17, 15, ["🤹🏼‍♀️"]], "1f3fd": ["1f939-1f3fd-200d-2640-fe0f", 42, 18, 15, ["🤹🏽‍♀️"]], "1f3fe": ["1f939-1f3fe-200d-2640-fe0f", 42, 19, 15, ["🤹🏾‍♀️"]], "1f3ff": ["1f939-1f3ff-200d-2640-fe0f", 42, 20, 15, ["🤹🏿‍♀️"]] },
        "1f939-200d-2642-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2642-fe0f", 42, 22, 15, ["🤹🏻‍♂️"]], "1f3fc": ["1f939-1f3fc-200d-2642-fe0f", 42, 23, 15, ["🤹🏼‍♂️"]], "1f3fd": ["1f939-1f3fd-200d-2642-fe0f", 42, 24, 15, ["🤹🏽‍♂️"]], "1f3fe": ["1f939-1f3fe-200d-2642-fe0f", 42, 25, 15, ["🤹🏾‍♂️"]], "1f3ff": ["1f939-1f3ff-200d-2642-fe0f", 42, 26, 15, ["🤹🏿‍♂️"]] },
        "1f939": { "1f3fb": ["1f939-1f3fb", 42, 28, 15, ["🤹🏻"]], "1f3fc": ["1f939-1f3fc", 42, 29, 15, ["🤹🏼"]], "1f3fd": ["1f939-1f3fd", 42, 30, 15, ["🤹🏽"]], "1f3fe": ["1f939-1f3fe", 42, 31, 15, ["🤹🏾"]], "1f3ff": ["1f939-1f3ff", 42, 32, 15, ["🤹🏿"]] },
        "1f93d-200d-2640-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2640-fe0f", 42, 38, 15, ["🤽🏻‍♀️"]], "1f3fc": ["1f93d-1f3fc-200d-2640-fe0f", 42, 39, 15, ["🤽🏼‍♀️"]], "1f3fd": ["1f93d-1f3fd-200d-2640-fe0f", 42, 40, 15, ["🤽🏽‍♀️"]], "1f3fe": ["1f93d-1f3fe-200d-2640-fe0f", 42, 41, 15, ["🤽🏾‍♀️"]], "1f3ff": ["1f93d-1f3ff-200d-2640-fe0f", 42, 42, 15, ["🤽🏿‍♀️"]] },
        "1f93d-200d-2642-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2642-fe0f", 42, 44, 15, ["🤽🏻‍♂️"]], "1f3fc": ["1f93d-1f3fc-200d-2642-fe0f", 42, 45, 15, ["🤽🏼‍♂️"]], "1f3fd": ["1f93d-1f3fd-200d-2642-fe0f", 42, 46, 15, ["🤽🏽‍♂️"]], "1f3fe": ["1f93d-1f3fe-200d-2642-fe0f", 42, 47, 15, ["🤽🏾‍♂️"]], "1f3ff": ["1f93d-1f3ff-200d-2642-fe0f", 42, 48, 15, ["🤽🏿‍♂️"]] },
        "1f93d": { "1f3fb": ["1f93d-1f3fb", 42, 50, 15, ["🤽🏻"]], "1f3fc": ["1f93d-1f3fc", 42, 51, 15, ["🤽🏼"]], "1f3fd": ["1f93d-1f3fd", 42, 52, 15, ["🤽🏽"]], "1f3fe": ["1f93d-1f3fe", 42, 53, 15, ["🤽🏾"]], "1f3ff": ["1f93d-1f3ff", 42, 54, 15, ["🤽🏿"]] },
        "1f93e-200d-2640-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2640-fe0f", 42, 56, 15, ["🤾🏻‍♀️"]], "1f3fc": ["1f93e-1f3fc-200d-2640-fe0f", 42, 57, 15, ["🤾🏼‍♀️"]], "1f3fd": ["1f93e-1f3fd-200d-2640-fe0f", 42, 58, 15, ["🤾🏽‍♀️"]], "1f3fe": ["1f93e-1f3fe-200d-2640-fe0f", 42, 59, 15, ["🤾🏾‍♀️"]], "1f3ff": ["1f93e-1f3ff-200d-2640-fe0f", 42, 60, 15, ["🤾🏿‍♀️"]] },
        "1f93e-200d-2642-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2642-fe0f", 43, 1, 15, ["🤾🏻‍♂️"]], "1f3fc": ["1f93e-1f3fc-200d-2642-fe0f", 43, 2, 15, ["🤾🏼‍♂️"]], "1f3fd": ["1f93e-1f3fd-200d-2642-fe0f", 43, 3, 15, ["🤾🏽‍♂️"]], "1f3fe": ["1f93e-1f3fe-200d-2642-fe0f", 43, 4, 15, ["🤾🏾‍♂️"]], "1f3ff": ["1f93e-1f3ff-200d-2642-fe0f", 43, 5, 15, ["🤾🏿‍♂️"]] },
        "1f93e": { "1f3fb": ["1f93e-1f3fb", 43, 7, 15, ["🤾🏻"]], "1f3fc": ["1f93e-1f3fc", 43, 8, 15, ["🤾🏼"]], "1f3fd": ["1f93e-1f3fd", 43, 9, 15, ["🤾🏽"]], "1f3fe": ["1f93e-1f3fe", 43, 10, 15, ["🤾🏾"]], "1f3ff": ["1f93e-1f3ff", 43, 11, 15, ["🤾🏿"]] },
        "1f977": { "1f3fb": ["1f977-1f3fb", 44, 7, 15, ["🥷🏻"]], "1f3fc": ["1f977-1f3fc", 44, 8, 15, ["🥷🏼"]], "1f3fd": ["1f977-1f3fd", 44, 9, 15, ["🥷🏽"]], "1f3fe": ["1f977-1f3fe", 44, 10, 15, ["🥷🏾"]], "1f3ff": ["1f977-1f3ff", 44, 11, 15, ["🥷🏿"]] },
        "1f9b5": { "1f3fb": ["1f9b5-1f3fb", 45, 9, 15, ["🦵🏻"]], "1f3fc": ["1f9b5-1f3fc", 45, 10, 15, ["🦵🏼"]], "1f3fd": ["1f9b5-1f3fd", 45, 11, 15, ["🦵🏽"]], "1f3fe": ["1f9b5-1f3fe", 45, 12, 15, ["🦵🏾"]], "1f3ff": ["1f9b5-1f3ff", 45, 13, 15, ["🦵🏿"]] },
        "1f9b6": { "1f3fb": ["1f9b6-1f3fb", 45, 15, 15, ["🦶🏻"]], "1f3fc": ["1f9b6-1f3fc", 45, 16, 15, ["🦶🏼"]], "1f3fd": ["1f9b6-1f3fd", 45, 17, 15, ["🦶🏽"]], "1f3fe": ["1f9b6-1f3fe", 45, 18, 15, ["🦶🏾"]], "1f3ff": ["1f9b6-1f3ff", 45, 19, 15, ["🦶🏿"]] },
        "1f9b8-200d-2640-fe0f": { "1f3fb": ["1f9b8-1f3fb-200d-2640-fe0f", 45, 22, 15, ["🦸🏻‍♀️"]], "1f3fc": ["1f9b8-1f3fc-200d-2640-fe0f", 45, 23, 15, ["🦸🏼‍♀️"]], "1f3fd": ["1f9b8-1f3fd-200d-2640-fe0f", 45, 24, 15, ["🦸🏽‍♀️"]], "1f3fe": ["1f9b8-1f3fe-200d-2640-fe0f", 45, 25, 15, ["🦸🏾‍♀️"]], "1f3ff": ["1f9b8-1f3ff-200d-2640-fe0f", 45, 26, 15, ["🦸🏿‍♀️"]] },
        "1f9b8-200d-2642-fe0f": { "1f3fb": ["1f9b8-1f3fb-200d-2642-fe0f", 45, 28, 15, ["🦸🏻‍♂️"]], "1f3fc": ["1f9b8-1f3fc-200d-2642-fe0f", 45, 29, 15, ["🦸🏼‍♂️"]], "1f3fd": ["1f9b8-1f3fd-200d-2642-fe0f", 45, 30, 15, ["🦸🏽‍♂️"]], "1f3fe": ["1f9b8-1f3fe-200d-2642-fe0f", 45, 31, 15, ["🦸🏾‍♂️"]], "1f3ff": ["1f9b8-1f3ff-200d-2642-fe0f", 45, 32, 15, ["🦸🏿‍♂️"]] },
        "1f9b8": { "1f3fb": ["1f9b8-1f3fb", 45, 34, 15, ["🦸🏻"]], "1f3fc": ["1f9b8-1f3fc", 45, 35, 15, ["🦸🏼"]], "1f3fd": ["1f9b8-1f3fd", 45, 36, 15, ["🦸🏽"]], "1f3fe": ["1f9b8-1f3fe", 45, 37, 15, ["🦸🏾"]], "1f3ff": ["1f9b8-1f3ff", 45, 38, 15, ["🦸🏿"]] },
        "1f9b9-200d-2640-fe0f": { "1f3fb": ["1f9b9-1f3fb-200d-2640-fe0f", 45, 40, 15, ["🦹🏻‍♀️"]], "1f3fc": ["1f9b9-1f3fc-200d-2640-fe0f", 45, 41, 15, ["🦹🏼‍♀️"]], "1f3fd": ["1f9b9-1f3fd-200d-2640-fe0f", 45, 42, 15, ["🦹🏽‍♀️"]], "1f3fe": ["1f9b9-1f3fe-200d-2640-fe0f", 45, 43, 15, ["🦹🏾‍♀️"]], "1f3ff": ["1f9b9-1f3ff-200d-2640-fe0f", 45, 44, 15, ["🦹🏿‍♀️"]] },
        "1f9b9-200d-2642-fe0f": { "1f3fb": ["1f9b9-1f3fb-200d-2642-fe0f", 45, 46, 15, ["🦹🏻‍♂️"]], "1f3fc": ["1f9b9-1f3fc-200d-2642-fe0f", 45, 47, 15, ["🦹🏼‍♂️"]], "1f3fd": ["1f9b9-1f3fd-200d-2642-fe0f", 45, 48, 15, ["🦹🏽‍♂️"]], "1f3fe": ["1f9b9-1f3fe-200d-2642-fe0f", 45, 49, 15, ["🦹🏾‍♂️"]], "1f3ff": ["1f9b9-1f3ff-200d-2642-fe0f", 45, 50, 15, ["🦹🏿‍♂️"]] },
        "1f9b9": { "1f3fb": ["1f9b9-1f3fb", 45, 52, 15, ["🦹🏻"]], "1f3fc": ["1f9b9-1f3fc", 45, 53, 15, ["🦹🏼"]], "1f3fd": ["1f9b9-1f3fd", 45, 54, 15, ["🦹🏽"]], "1f3fe": ["1f9b9-1f3fe", 45, 55, 15, ["🦹🏾"]], "1f3ff": ["1f9b9-1f3ff", 45, 56, 15, ["🦹🏿"]] },
        "1f9bb": { "1f3fb": ["1f9bb-1f3fb", 45, 59, 15, ["🦻🏻"]], "1f3fc": ["1f9bb-1f3fc", 45, 60, 15, ["🦻🏼"]], "1f3fd": ["1f9bb-1f3fd", 46, 0, 15, ["🦻🏽"]], "1f3fe": ["1f9bb-1f3fe", 46, 1, 15, ["🦻🏾"]], "1f3ff": ["1f9bb-1f3ff", 46, 2, 15, ["🦻🏿"]] },
        "1f9cd-200d-2640-fe0f": { "1f3fb": ["1f9cd-1f3fb-200d-2640-fe0f", 46, 21, 15, ["🧍🏻‍♀️"]], "1f3fc": ["1f9cd-1f3fc-200d-2640-fe0f", 46, 22, 15, ["🧍🏼‍♀️"]], "1f3fd": ["1f9cd-1f3fd-200d-2640-fe0f", 46, 23, 15, ["🧍🏽‍♀️"]], "1f3fe": ["1f9cd-1f3fe-200d-2640-fe0f", 46, 24, 15, ["🧍🏾‍♀️"]], "1f3ff": ["1f9cd-1f3ff-200d-2640-fe0f", 46, 25, 15, ["🧍🏿‍♀️"]] },
        "1f9cd-200d-2642-fe0f": { "1f3fb": ["1f9cd-1f3fb-200d-2642-fe0f", 46, 27, 15, ["🧍🏻‍♂️"]], "1f3fc": ["1f9cd-1f3fc-200d-2642-fe0f", 46, 28, 15, ["🧍🏼‍♂️"]], "1f3fd": ["1f9cd-1f3fd-200d-2642-fe0f", 46, 29, 15, ["🧍🏽‍♂️"]], "1f3fe": ["1f9cd-1f3fe-200d-2642-fe0f", 46, 30, 15, ["🧍🏾‍♂️"]], "1f3ff": ["1f9cd-1f3ff-200d-2642-fe0f", 46, 31, 15, ["🧍🏿‍♂️"]] },
        "1f9cd": { "1f3fb": ["1f9cd-1f3fb", 46, 33, 15, ["🧍🏻"]], "1f3fc": ["1f9cd-1f3fc", 46, 34, 15, ["🧍🏼"]], "1f3fd": ["1f9cd-1f3fd", 46, 35, 15, ["🧍🏽"]], "1f3fe": ["1f9cd-1f3fe", 46, 36, 15, ["🧍🏾"]], "1f3ff": ["1f9cd-1f3ff", 46, 37, 15, ["🧍🏿"]] },
        "1f9ce-200d-2640-fe0f": { "1f3fb": ["1f9ce-1f3fb-200d-2640-fe0f", 46, 39, 15, ["🧎🏻‍♀️"]], "1f3fc": ["1f9ce-1f3fc-200d-2640-fe0f", 46, 40, 15, ["🧎🏼‍♀️"]], "1f3fd": ["1f9ce-1f3fd-200d-2640-fe0f", 46, 41, 15, ["🧎🏽‍♀️"]], "1f3fe": ["1f9ce-1f3fe-200d-2640-fe0f", 46, 42, 15, ["🧎🏾‍♀️"]], "1f3ff": ["1f9ce-1f3ff-200d-2640-fe0f", 46, 43, 15, ["🧎🏿‍♀️"]] },
        "1f9ce-200d-2642-fe0f": { "1f3fb": ["1f9ce-1f3fb-200d-2642-fe0f", 46, 45, 15, ["🧎🏻‍♂️"]], "1f3fc": ["1f9ce-1f3fc-200d-2642-fe0f", 46, 46, 15, ["🧎🏼‍♂️"]], "1f3fd": ["1f9ce-1f3fd-200d-2642-fe0f", 46, 47, 15, ["🧎🏽‍♂️"]], "1f3fe": ["1f9ce-1f3fe-200d-2642-fe0f", 46, 48, 15, ["🧎🏾‍♂️"]], "1f3ff": ["1f9ce-1f3ff-200d-2642-fe0f", 46, 49, 15, ["🧎🏿‍♂️"]] },
        "1f9ce": { "1f3fb": ["1f9ce-1f3fb", 46, 51, 15, ["🧎🏻"]], "1f3fc": ["1f9ce-1f3fc", 46, 52, 15, ["🧎🏼"]], "1f3fd": ["1f9ce-1f3fd", 46, 53, 15, ["🧎🏽"]], "1f3fe": ["1f9ce-1f3fe", 46, 54, 15, ["🧎🏾"]], "1f3ff": ["1f9ce-1f3ff", 46, 55, 15, ["🧎🏿"]] },
        "1f9cf-200d-2640-fe0f": { "1f3fb": ["1f9cf-1f3fb-200d-2640-fe0f", 46, 57, 15, ["🧏🏻‍♀️"]], "1f3fc": ["1f9cf-1f3fc-200d-2640-fe0f", 46, 58, 15, ["🧏🏼‍♀️"]], "1f3fd": ["1f9cf-1f3fd-200d-2640-fe0f", 46, 59, 15, ["🧏🏽‍♀️"]], "1f3fe": ["1f9cf-1f3fe-200d-2640-fe0f", 46, 60, 15, ["🧏🏾‍♀️"]], "1f3ff": ["1f9cf-1f3ff-200d-2640-fe0f", 47, 0, 15, ["🧏🏿‍♀️"]] },
        "1f9cf-200d-2642-fe0f": { "1f3fb": ["1f9cf-1f3fb-200d-2642-fe0f", 47, 2, 15, ["🧏🏻‍♂️"]], "1f3fc": ["1f9cf-1f3fc-200d-2642-fe0f", 47, 3, 15, ["🧏🏼‍♂️"]], "1f3fd": ["1f9cf-1f3fd-200d-2642-fe0f", 47, 4, 15, ["🧏🏽‍♂️"]], "1f3fe": ["1f9cf-1f3fe-200d-2642-fe0f", 47, 5, 15, ["🧏🏾‍♂️"]], "1f3ff": ["1f9cf-1f3ff-200d-2642-fe0f", 47, 6, 15, ["🧏🏿‍♂️"]] },
        "1f9cf": { "1f3fb": ["1f9cf-1f3fb", 47, 8, 15, ["🧏🏻"]], "1f3fc": ["1f9cf-1f3fc", 47, 9, 15, ["🧏🏼"]], "1f3fd": ["1f9cf-1f3fd", 47, 10, 15, ["🧏🏽"]], "1f3fe": ["1f9cf-1f3fe", 47, 11, 15, ["🧏🏾"]], "1f3ff": ["1f9cf-1f3ff", 47, 12, 15, ["🧏🏿"]] },
        "1f9d1-200d-1f33e": { "1f3fb": ["1f9d1-1f3fb-200d-1f33e", 47, 15, 15, ["🧑🏻‍🌾"]], "1f3fc": ["1f9d1-1f3fc-200d-1f33e", 47, 16, 15, ["🧑🏼‍🌾"]], "1f3fd": ["1f9d1-1f3fd-200d-1f33e", 47, 17, 15, ["🧑🏽‍🌾"]], "1f3fe": ["1f9d1-1f3fe-200d-1f33e", 47, 18, 15, ["🧑🏾‍🌾"]], "1f3ff": ["1f9d1-1f3ff-200d-1f33e", 47, 19, 15, ["🧑🏿‍🌾"]] },
        "1f9d1-200d-1f373": { "1f3fb": ["1f9d1-1f3fb-200d-1f373", 47, 21, 15, ["🧑🏻‍🍳"]], "1f3fc": ["1f9d1-1f3fc-200d-1f373", 47, 22, 15, ["🧑🏼‍🍳"]], "1f3fd": ["1f9d1-1f3fd-200d-1f373", 47, 23, 15, ["🧑🏽‍🍳"]], "1f3fe": ["1f9d1-1f3fe-200d-1f373", 47, 24, 15, ["🧑🏾‍🍳"]], "1f3ff": ["1f9d1-1f3ff-200d-1f373", 47, 25, 15, ["🧑🏿‍🍳"]] },
        "1f9d1-200d-1f37c": { "1f3fb": ["1f9d1-1f3fb-200d-1f37c", 47, 27, 15, ["🧑🏻‍🍼"]], "1f3fc": ["1f9d1-1f3fc-200d-1f37c", 47, 28, 15, ["🧑🏼‍🍼"]], "1f3fd": ["1f9d1-1f3fd-200d-1f37c", 47, 29, 15, ["🧑🏽‍🍼"]], "1f3fe": ["1f9d1-1f3fe-200d-1f37c", 47, 30, 15, ["🧑🏾‍🍼"]], "1f3ff": ["1f9d1-1f3ff-200d-1f37c", 47, 31, 15, ["🧑🏿‍🍼"]] },
        "1f9d1-200d-1f384": { "1f3fb": ["1f9d1-1f3fb-200d-1f384", 47, 33, 15, ["🧑🏻‍🎄"]], "1f3fc": ["1f9d1-1f3fc-200d-1f384", 47, 34, 15, ["🧑🏼‍🎄"]], "1f3fd": ["1f9d1-1f3fd-200d-1f384", 47, 35, 15, ["🧑🏽‍🎄"]], "1f3fe": ["1f9d1-1f3fe-200d-1f384", 47, 36, 15, ["🧑🏾‍🎄"]], "1f3ff": ["1f9d1-1f3ff-200d-1f384", 47, 37, 15, ["🧑🏿‍🎄"]] },
        "1f9d1-200d-1f393": { "1f3fb": ["1f9d1-1f3fb-200d-1f393", 47, 39, 15, ["🧑🏻‍🎓"]], "1f3fc": ["1f9d1-1f3fc-200d-1f393", 47, 40, 15, ["🧑🏼‍🎓"]], "1f3fd": ["1f9d1-1f3fd-200d-1f393", 47, 41, 15, ["🧑🏽‍🎓"]], "1f3fe": ["1f9d1-1f3fe-200d-1f393", 47, 42, 15, ["🧑🏾‍🎓"]], "1f3ff": ["1f9d1-1f3ff-200d-1f393", 47, 43, 15, ["🧑🏿‍🎓"]] },
        "1f9d1-200d-1f3a4": { "1f3fb": ["1f9d1-1f3fb-200d-1f3a4", 47, 45, 15, ["🧑🏻‍🎤"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3a4", 47, 46, 15, ["🧑🏼‍🎤"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3a4", 47, 47, 15, ["🧑🏽‍🎤"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3a4", 47, 48, 15, ["🧑🏾‍🎤"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3a4", 47, 49, 15, ["🧑🏿‍🎤"]] },
        "1f9d1-200d-1f3a8": { "1f3fb": ["1f9d1-1f3fb-200d-1f3a8", 47, 51, 15, ["🧑🏻‍🎨"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3a8", 47, 52, 15, ["🧑🏼‍🎨"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3a8", 47, 53, 15, ["🧑🏽‍🎨"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3a8", 47, 54, 15, ["🧑🏾‍🎨"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3a8", 47, 55, 15, ["🧑🏿‍🎨"]] },
        "1f9d1-200d-1f3eb": { "1f3fb": ["1f9d1-1f3fb-200d-1f3eb", 47, 57, 15, ["🧑🏻‍🏫"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3eb", 47, 58, 15, ["🧑🏼‍🏫"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3eb", 47, 59, 15, ["🧑🏽‍🏫"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3eb", 47, 60, 15, ["🧑🏾‍🏫"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3eb", 48, 0, 15, ["🧑🏿‍🏫"]] },
        "1f9d1-200d-1f3ed": { "1f3fb": ["1f9d1-1f3fb-200d-1f3ed", 48, 2, 15, ["🧑🏻‍🏭"]], "1f3fc": ["1f9d1-1f3fc-200d-1f3ed", 48, 3, 15, ["🧑🏼‍🏭"]], "1f3fd": ["1f9d1-1f3fd-200d-1f3ed", 48, 4, 15, ["🧑🏽‍🏭"]], "1f3fe": ["1f9d1-1f3fe-200d-1f3ed", 48, 5, 15, ["🧑🏾‍🏭"]], "1f3ff": ["1f9d1-1f3ff-200d-1f3ed", 48, 6, 15, ["🧑🏿‍🏭"]] },
        "1f9d1-200d-1f4bb": { "1f3fb": ["1f9d1-1f3fb-200d-1f4bb", 48, 8, 15, ["🧑🏻‍💻"]], "1f3fc": ["1f9d1-1f3fc-200d-1f4bb", 48, 9, 15, ["🧑🏼‍💻"]], "1f3fd": ["1f9d1-1f3fd-200d-1f4bb", 48, 10, 15, ["🧑🏽‍💻"]], "1f3fe": ["1f9d1-1f3fe-200d-1f4bb", 48, 11, 15, ["🧑🏾‍💻"]], "1f3ff": ["1f9d1-1f3ff-200d-1f4bb", 48, 12, 15, ["🧑🏿‍💻"]] },
        "1f9d1-200d-1f4bc": { "1f3fb": ["1f9d1-1f3fb-200d-1f4bc", 48, 14, 15, ["🧑🏻‍💼"]], "1f3fc": ["1f9d1-1f3fc-200d-1f4bc", 48, 15, 15, ["🧑🏼‍💼"]], "1f3fd": ["1f9d1-1f3fd-200d-1f4bc", 48, 16, 15, ["🧑🏽‍💼"]], "1f3fe": ["1f9d1-1f3fe-200d-1f4bc", 48, 17, 15, ["🧑🏾‍💼"]], "1f3ff": ["1f9d1-1f3ff-200d-1f4bc", 48, 18, 15, ["🧑🏿‍💼"]] },
        "1f9d1-200d-1f527": { "1f3fb": ["1f9d1-1f3fb-200d-1f527", 48, 20, 15, ["🧑🏻‍🔧"]], "1f3fc": ["1f9d1-1f3fc-200d-1f527", 48, 21, 15, ["🧑🏼‍🔧"]], "1f3fd": ["1f9d1-1f3fd-200d-1f527", 48, 22, 15, ["🧑🏽‍🔧"]], "1f3fe": ["1f9d1-1f3fe-200d-1f527", 48, 23, 15, ["🧑🏾‍🔧"]], "1f3ff": ["1f9d1-1f3ff-200d-1f527", 48, 24, 15, ["🧑🏿‍🔧"]] },
        "1f9d1-200d-1f52c": { "1f3fb": ["1f9d1-1f3fb-200d-1f52c", 48, 26, 15, ["🧑🏻‍🔬"]], "1f3fc": ["1f9d1-1f3fc-200d-1f52c", 48, 27, 15, ["🧑🏼‍🔬"]], "1f3fd": ["1f9d1-1f3fd-200d-1f52c", 48, 28, 15, ["🧑🏽‍🔬"]], "1f3fe": ["1f9d1-1f3fe-200d-1f52c", 48, 29, 15, ["🧑🏾‍🔬"]], "1f3ff": ["1f9d1-1f3ff-200d-1f52c", 48, 30, 15, ["🧑🏿‍🔬"]] },
        "1f9d1-200d-1f680": { "1f3fb": ["1f9d1-1f3fb-200d-1f680", 48, 32, 15, ["🧑🏻‍🚀"]], "1f3fc": ["1f9d1-1f3fc-200d-1f680", 48, 33, 15, ["🧑🏼‍🚀"]], "1f3fd": ["1f9d1-1f3fd-200d-1f680", 48, 34, 15, ["🧑🏽‍🚀"]], "1f3fe": ["1f9d1-1f3fe-200d-1f680", 48, 35, 15, ["🧑🏾‍🚀"]], "1f3ff": ["1f9d1-1f3ff-200d-1f680", 48, 36, 15, ["🧑🏿‍🚀"]] },
        "1f9d1-200d-1f692": { "1f3fb": ["1f9d1-1f3fb-200d-1f692", 48, 38, 15, ["🧑🏻‍🚒"]], "1f3fc": ["1f9d1-1f3fc-200d-1f692", 48, 39, 15, ["🧑🏼‍🚒"]], "1f3fd": ["1f9d1-1f3fd-200d-1f692", 48, 40, 15, ["🧑🏽‍🚒"]], "1f3fe": ["1f9d1-1f3fe-200d-1f692", 48, 41, 15, ["🧑🏾‍🚒"]], "1f3ff": ["1f9d1-1f3ff-200d-1f692", 48, 42, 15, ["🧑🏿‍🚒"]] },
        "1f9d1-200d-1f91d-200d-1f9d1": { "1f3fb-1f3fb": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb", 48, 44, 15, ["🧑🏻‍🤝‍🧑🏻"]], "1f3fb-1f3fc": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc", 48, 45, 15, ["🧑🏻‍🤝‍🧑🏼"]], "1f3fb-1f3fd": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd", 48, 46, 15, ["🧑🏻‍🤝‍🧑🏽"]], "1f3fb-1f3fe": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe", 48, 47, 15, ["🧑🏻‍🤝‍🧑🏾"]], "1f3fb-1f3ff": ["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff", 48, 48, 15, ["🧑🏻‍🤝‍🧑🏿"]], "1f3fc-1f3fb": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb", 48, 49, 15, ["🧑🏼‍🤝‍🧑🏻"]], "1f3fc-1f3fc": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc", 48, 50, 15, ["🧑🏼‍🤝‍🧑🏼"]], "1f3fc-1f3fd": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd", 48, 51, 15, ["🧑🏼‍🤝‍🧑🏽"]], "1f3fc-1f3fe": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe", 48, 52, 15, ["🧑🏼‍🤝‍🧑🏾"]], "1f3fc-1f3ff": ["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff", 48, 53, 15, ["🧑🏼‍🤝‍🧑🏿"]], "1f3fd-1f3fb": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb", 48, 54, 15, ["🧑🏽‍🤝‍🧑🏻"]], "1f3fd-1f3fc": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc", 48, 55, 15, ["🧑🏽‍🤝‍🧑🏼"]], "1f3fd-1f3fd": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd", 48, 56, 15, ["🧑🏽‍🤝‍🧑🏽"]], "1f3fd-1f3fe": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe", 48, 57, 15, ["🧑🏽‍🤝‍🧑🏾"]], "1f3fd-1f3ff": ["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff", 48, 58, 15, ["🧑🏽‍🤝‍🧑🏿"]], "1f3fe-1f3fb": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb", 48, 59, 15, ["🧑🏾‍🤝‍🧑🏻"]], "1f3fe-1f3fc": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc", 48, 60, 15, ["🧑🏾‍🤝‍🧑🏼"]], "1f3fe-1f3fd": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd", 49, 0, 15, ["🧑🏾‍🤝‍🧑🏽"]], "1f3fe-1f3fe": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe", 49, 1, 15, ["🧑🏾‍🤝‍🧑🏾"]], "1f3fe-1f3ff": ["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff", 49, 2, 15, ["🧑🏾‍🤝‍🧑🏿"]], "1f3ff-1f3fb": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb", 49, 3, 15, ["🧑🏿‍🤝‍🧑🏻"]], "1f3ff-1f3fc": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc", 49, 4, 15, ["🧑🏿‍🤝‍🧑🏼"]], "1f3ff-1f3fd": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd", 49, 5, 15, ["🧑🏿‍🤝‍🧑🏽"]], "1f3ff-1f3fe": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe", 49, 6, 15, ["🧑🏿‍🤝‍🧑🏾"]], "1f3ff-1f3ff": ["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff", 49, 7, 15, ["🧑🏿‍🤝‍🧑🏿"]] },
        "1f9d1-200d-1f9af": { "1f3fb": ["1f9d1-1f3fb-200d-1f9af", 49, 9, 15, ["🧑🏻‍🦯"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9af", 49, 10, 15, ["🧑🏼‍🦯"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9af", 49, 11, 15, ["🧑🏽‍🦯"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9af", 49, 12, 15, ["🧑🏾‍🦯"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9af", 49, 13, 15, ["🧑🏿‍🦯"]] },
        "1f9d1-200d-1f9b0": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b0", 49, 15, 15, ["🧑🏻‍🦰"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b0", 49, 16, 15, ["🧑🏼‍🦰"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b0", 49, 17, 15, ["🧑🏽‍🦰"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b0", 49, 18, 15, ["🧑🏾‍🦰"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b0", 49, 19, 15, ["🧑🏿‍🦰"]] },
        "1f9d1-200d-1f9b1": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b1", 49, 21, 15, ["🧑🏻‍🦱"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b1", 49, 22, 15, ["🧑🏼‍🦱"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b1", 49, 23, 15, ["🧑🏽‍🦱"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b1", 49, 24, 15, ["🧑🏾‍🦱"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b1", 49, 25, 15, ["🧑🏿‍🦱"]] },
        "1f9d1-200d-1f9b2": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b2", 49, 27, 15, ["🧑🏻‍🦲"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b2", 49, 28, 15, ["🧑🏼‍🦲"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b2", 49, 29, 15, ["🧑🏽‍🦲"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b2", 49, 30, 15, ["🧑🏾‍🦲"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b2", 49, 31, 15, ["🧑🏿‍🦲"]] },
        "1f9d1-200d-1f9b3": { "1f3fb": ["1f9d1-1f3fb-200d-1f9b3", 49, 33, 15, ["🧑🏻‍🦳"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9b3", 49, 34, 15, ["🧑🏼‍🦳"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9b3", 49, 35, 15, ["🧑🏽‍🦳"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9b3", 49, 36, 15, ["🧑🏾‍🦳"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9b3", 49, 37, 15, ["🧑🏿‍🦳"]] },
        "1f9d1-200d-1f9bc": { "1f3fb": ["1f9d1-1f3fb-200d-1f9bc", 49, 39, 15, ["🧑🏻‍🦼"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9bc", 49, 40, 15, ["🧑🏼‍🦼"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9bc", 49, 41, 15, ["🧑🏽‍🦼"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9bc", 49, 42, 15, ["🧑🏾‍🦼"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9bc", 49, 43, 15, ["🧑🏿‍🦼"]] },
        "1f9d1-200d-1f9bd": { "1f3fb": ["1f9d1-1f3fb-200d-1f9bd", 49, 45, 15, ["🧑🏻‍🦽"]], "1f3fc": ["1f9d1-1f3fc-200d-1f9bd", 49, 46, 15, ["🧑🏼‍🦽"]], "1f3fd": ["1f9d1-1f3fd-200d-1f9bd", 49, 47, 15, ["🧑🏽‍🦽"]], "1f3fe": ["1f9d1-1f3fe-200d-1f9bd", 49, 48, 15, ["🧑🏾‍🦽"]], "1f3ff": ["1f9d1-1f3ff-200d-1f9bd", 49, 49, 15, ["🧑🏿‍🦽"]] },
        "1f9d1-200d-2695-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2695-fe0f", 49, 51, 15, ["🧑🏻‍⚕️"]], "1f3fc": ["1f9d1-1f3fc-200d-2695-fe0f", 49, 52, 15, ["🧑🏼‍⚕️"]], "1f3fd": ["1f9d1-1f3fd-200d-2695-fe0f", 49, 53, 15, ["🧑🏽‍⚕️"]], "1f3fe": ["1f9d1-1f3fe-200d-2695-fe0f", 49, 54, 15, ["🧑🏾‍⚕️"]], "1f3ff": ["1f9d1-1f3ff-200d-2695-fe0f", 49, 55, 15, ["🧑🏿‍⚕️"]] },
        "1f9d1-200d-2696-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2696-fe0f", 49, 57, 15, ["🧑🏻‍⚖️"]], "1f3fc": ["1f9d1-1f3fc-200d-2696-fe0f", 49, 58, 15, ["🧑🏼‍⚖️"]], "1f3fd": ["1f9d1-1f3fd-200d-2696-fe0f", 49, 59, 15, ["🧑🏽‍⚖️"]], "1f3fe": ["1f9d1-1f3fe-200d-2696-fe0f", 49, 60, 15, ["🧑🏾‍⚖️"]], "1f3ff": ["1f9d1-1f3ff-200d-2696-fe0f", 50, 0, 15, ["🧑🏿‍⚖️"]] },
        "1f9d1-200d-2708-fe0f": { "1f3fb": ["1f9d1-1f3fb-200d-2708-fe0f", 50, 2, 15, ["🧑🏻‍✈️"]], "1f3fc": ["1f9d1-1f3fc-200d-2708-fe0f", 50, 3, 15, ["🧑🏼‍✈️"]], "1f3fd": ["1f9d1-1f3fd-200d-2708-fe0f", 50, 4, 15, ["🧑🏽‍✈️"]], "1f3fe": ["1f9d1-1f3fe-200d-2708-fe0f", 50, 5, 15, ["🧑🏾‍✈️"]], "1f3ff": ["1f9d1-1f3ff-200d-2708-fe0f", 50, 6, 15, ["🧑🏿‍✈️"]] },
        "1f9d1": { "1f3fb": ["1f9d1-1f3fb", 50, 8, 15, ["🧑🏻"]], "1f3fc": ["1f9d1-1f3fc", 50, 9, 15, ["🧑🏼"]], "1f3fd": ["1f9d1-1f3fd", 50, 10, 15, ["🧑🏽"]], "1f3fe": ["1f9d1-1f3fe", 50, 11, 15, ["🧑🏾"]], "1f3ff": ["1f9d1-1f3ff", 50, 12, 15, ["🧑🏿"]] },
        "1f9d2": { "1f3fb": ["1f9d2-1f3fb", 50, 14, 15, ["🧒🏻"]], "1f3fc": ["1f9d2-1f3fc", 50, 15, 15, ["🧒🏼"]], "1f3fd": ["1f9d2-1f3fd", 50, 16, 15, ["🧒🏽"]], "1f3fe": ["1f9d2-1f3fe", 50, 17, 15, ["🧒🏾"]], "1f3ff": ["1f9d2-1f3ff", 50, 18, 15, ["🧒🏿"]] },
        "1f9d3": { "1f3fb": ["1f9d3-1f3fb", 50, 20, 15, ["🧓🏻"]], "1f3fc": ["1f9d3-1f3fc", 50, 21, 15, ["🧓🏼"]], "1f3fd": ["1f9d3-1f3fd", 50, 22, 15, ["🧓🏽"]], "1f3fe": ["1f9d3-1f3fe", 50, 23, 15, ["🧓🏾"]], "1f3ff": ["1f9d3-1f3ff", 50, 24, 15, ["🧓🏿"]] },
        "1f9d4-200d-2640-fe0f": { "1f3fb": ["1f9d4-1f3fb-200d-2640-fe0f", 50, 26, 15, ["🧔🏻‍♀️"]], "1f3fc": ["1f9d4-1f3fc-200d-2640-fe0f", 50, 27, 15, ["🧔🏼‍♀️"]], "1f3fd": ["1f9d4-1f3fd-200d-2640-fe0f", 50, 28, 15, ["🧔🏽‍♀️"]], "1f3fe": ["1f9d4-1f3fe-200d-2640-fe0f", 50, 29, 15, ["🧔🏾‍♀️"]], "1f3ff": ["1f9d4-1f3ff-200d-2640-fe0f", 50, 30, 15, ["🧔🏿‍♀️"]] },
        "1f9d4-200d-2642-fe0f": { "1f3fb": ["1f9d4-1f3fb-200d-2642-fe0f", 50, 32, 15, ["🧔🏻‍♂️"]], "1f3fc": ["1f9d4-1f3fc-200d-2642-fe0f", 50, 33, 15, ["🧔🏼‍♂️"]], "1f3fd": ["1f9d4-1f3fd-200d-2642-fe0f", 50, 34, 15, ["🧔🏽‍♂️"]], "1f3fe": ["1f9d4-1f3fe-200d-2642-fe0f", 50, 35, 15, ["🧔🏾‍♂️"]], "1f3ff": ["1f9d4-1f3ff-200d-2642-fe0f", 50, 36, 15, ["🧔🏿‍♂️"]] },
        "1f9d4": { "1f3fb": ["1f9d4-1f3fb", 50, 38, 15, ["🧔🏻"]], "1f3fc": ["1f9d4-1f3fc", 50, 39, 15, ["🧔🏼"]], "1f3fd": ["1f9d4-1f3fd", 50, 40, 15, ["🧔🏽"]], "1f3fe": ["1f9d4-1f3fe", 50, 41, 15, ["🧔🏾"]], "1f3ff": ["1f9d4-1f3ff", 50, 42, 15, ["🧔🏿"]] },
        "1f9d5": { "1f3fb": ["1f9d5-1f3fb", 50, 44, 15, ["🧕🏻"]], "1f3fc": ["1f9d5-1f3fc", 50, 45, 15, ["🧕🏼"]], "1f3fd": ["1f9d5-1f3fd", 50, 46, 15, ["🧕🏽"]], "1f3fe": ["1f9d5-1f3fe", 50, 47, 15, ["🧕🏾"]], "1f3ff": ["1f9d5-1f3ff", 50, 48, 15, ["🧕🏿"]] },
        "1f9d6-200d-2640-fe0f": { "1f3fb": ["1f9d6-1f3fb-200d-2640-fe0f", 50, 50, 15, ["🧖🏻‍♀️"]], "1f3fc": ["1f9d6-1f3fc-200d-2640-fe0f", 50, 51, 15, ["🧖🏼‍♀️"]], "1f3fd": ["1f9d6-1f3fd-200d-2640-fe0f", 50, 52, 15, ["🧖🏽‍♀️"]], "1f3fe": ["1f9d6-1f3fe-200d-2640-fe0f", 50, 53, 15, ["🧖🏾‍♀️"]], "1f3ff": ["1f9d6-1f3ff-200d-2640-fe0f", 50, 54, 15, ["🧖🏿‍♀️"]] },
        "1f9d6-200d-2642-fe0f": { "1f3fb": ["1f9d6-1f3fb-200d-2642-fe0f", 50, 56, 15, ["🧖🏻‍♂️", "🧖🏻"]], "1f3fc": ["1f9d6-1f3fc-200d-2642-fe0f", 50, 57, 15, ["🧖🏼‍♂️", "🧖🏼"]], "1f3fd": ["1f9d6-1f3fd-200d-2642-fe0f", 50, 58, 15, ["🧖🏽‍♂️", "🧖🏽"]], "1f3fe": ["1f9d6-1f3fe-200d-2642-fe0f", 50, 59, 15, ["🧖🏾‍♂️", "🧖🏾"]], "1f3ff": ["1f9d6-1f3ff-200d-2642-fe0f", 50, 60, 15, ["🧖🏿‍♂️", "🧖🏿"]] },
        "1f9d7-200d-2640-fe0f": { "1f3fb": ["1f9d7-1f3fb-200d-2640-fe0f", 51, 7, 15, ["🧗🏻‍♀️", "🧗🏻"]], "1f3fc": ["1f9d7-1f3fc-200d-2640-fe0f", 51, 8, 15, ["🧗🏼‍♀️", "🧗🏼"]], "1f3fd": ["1f9d7-1f3fd-200d-2640-fe0f", 51, 9, 15, ["🧗🏽‍♀️", "🧗🏽"]], "1f3fe": ["1f9d7-1f3fe-200d-2640-fe0f", 51, 10, 15, ["🧗🏾‍♀️", "🧗🏾"]], "1f3ff": ["1f9d7-1f3ff-200d-2640-fe0f", 51, 11, 15, ["🧗🏿‍♀️", "🧗🏿"]] },
        "1f9d7-200d-2642-fe0f": { "1f3fb": ["1f9d7-1f3fb-200d-2642-fe0f", 51, 13, 15, ["🧗🏻‍♂️"]], "1f3fc": ["1f9d7-1f3fc-200d-2642-fe0f", 51, 14, 15, ["🧗🏼‍♂️"]], "1f3fd": ["1f9d7-1f3fd-200d-2642-fe0f", 51, 15, 15, ["🧗🏽‍♂️"]], "1f3fe": ["1f9d7-1f3fe-200d-2642-fe0f", 51, 16, 15, ["🧗🏾‍♂️"]], "1f3ff": ["1f9d7-1f3ff-200d-2642-fe0f", 51, 17, 15, ["🧗🏿‍♂️"]] },
        "1f9d8-200d-2640-fe0f": { "1f3fb": ["1f9d8-1f3fb-200d-2640-fe0f", 51, 25, 15, ["🧘🏻‍♀️", "🧘🏻"]], "1f3fc": ["1f9d8-1f3fc-200d-2640-fe0f", 51, 26, 15, ["🧘🏼‍♀️", "🧘🏼"]], "1f3fd": ["1f9d8-1f3fd-200d-2640-fe0f", 51, 27, 15, ["🧘🏽‍♀️", "🧘🏽"]], "1f3fe": ["1f9d8-1f3fe-200d-2640-fe0f", 51, 28, 15, ["🧘🏾‍♀️", "🧘🏾"]], "1f3ff": ["1f9d8-1f3ff-200d-2640-fe0f", 51, 29, 15, ["🧘🏿‍♀️", "🧘🏿"]] },
        "1f9d8-200d-2642-fe0f": { "1f3fb": ["1f9d8-1f3fb-200d-2642-fe0f", 51, 31, 15, ["🧘🏻‍♂️"]], "1f3fc": ["1f9d8-1f3fc-200d-2642-fe0f", 51, 32, 15, ["🧘🏼‍♂️"]], "1f3fd": ["1f9d8-1f3fd-200d-2642-fe0f", 51, 33, 15, ["🧘🏽‍♂️"]], "1f3fe": ["1f9d8-1f3fe-200d-2642-fe0f", 51, 34, 15, ["🧘🏾‍♂️"]], "1f3ff": ["1f9d8-1f3ff-200d-2642-fe0f", 51, 35, 15, ["🧘🏿‍♂️"]] },
        "1f9d9-200d-2640-fe0f": { "1f3fb": ["1f9d9-1f3fb-200d-2640-fe0f", 51, 43, 15, ["🧙🏻‍♀️", "🧙🏻"]], "1f3fc": ["1f9d9-1f3fc-200d-2640-fe0f", 51, 44, 15, ["🧙🏼‍♀️", "🧙🏼"]], "1f3fd": ["1f9d9-1f3fd-200d-2640-fe0f", 51, 45, 15, ["🧙🏽‍♀️", "🧙🏽"]], "1f3fe": ["1f9d9-1f3fe-200d-2640-fe0f", 51, 46, 15, ["🧙🏾‍♀️", "🧙🏾"]], "1f3ff": ["1f9d9-1f3ff-200d-2640-fe0f", 51, 47, 15, ["🧙🏿‍♀️", "🧙🏿"]] },
        "1f9d9-200d-2642-fe0f": { "1f3fb": ["1f9d9-1f3fb-200d-2642-fe0f", 51, 49, 15, ["🧙🏻‍♂️"]], "1f3fc": ["1f9d9-1f3fc-200d-2642-fe0f", 51, 50, 15, ["🧙🏼‍♂️"]], "1f3fd": ["1f9d9-1f3fd-200d-2642-fe0f", 51, 51, 15, ["🧙🏽‍♂️"]], "1f3fe": ["1f9d9-1f3fe-200d-2642-fe0f", 51, 52, 15, ["🧙🏾‍♂️"]], "1f3ff": ["1f9d9-1f3ff-200d-2642-fe0f", 51, 53, 15, ["🧙🏿‍♂️"]] },
        "1f9da-200d-2640-fe0f": { "1f3fb": ["1f9da-1f3fb-200d-2640-fe0f", 52, 0, 15, ["🧚🏻‍♀️", "🧚🏻"]], "1f3fc": ["1f9da-1f3fc-200d-2640-fe0f", 52, 1, 15, ["🧚🏼‍♀️", "🧚🏼"]], "1f3fd": ["1f9da-1f3fd-200d-2640-fe0f", 52, 2, 15, ["🧚🏽‍♀️", "🧚🏽"]], "1f3fe": ["1f9da-1f3fe-200d-2640-fe0f", 52, 3, 15, ["🧚🏾‍♀️", "🧚🏾"]], "1f3ff": ["1f9da-1f3ff-200d-2640-fe0f", 52, 4, 15, ["🧚🏿‍♀️", "🧚🏿"]] },
        "1f9da-200d-2642-fe0f": { "1f3fb": ["1f9da-1f3fb-200d-2642-fe0f", 52, 6, 15, ["🧚🏻‍♂️"]], "1f3fc": ["1f9da-1f3fc-200d-2642-fe0f", 52, 7, 15, ["🧚🏼‍♂️"]], "1f3fd": ["1f9da-1f3fd-200d-2642-fe0f", 52, 8, 15, ["🧚🏽‍♂️"]], "1f3fe": ["1f9da-1f3fe-200d-2642-fe0f", 52, 9, 15, ["🧚🏾‍♂️"]], "1f3ff": ["1f9da-1f3ff-200d-2642-fe0f", 52, 10, 15, ["🧚🏿‍♂️"]] },
        "1f9db-200d-2640-fe0f": { "1f3fb": ["1f9db-1f3fb-200d-2640-fe0f", 52, 18, 15, ["🧛🏻‍♀️", "🧛🏻"]], "1f3fc": ["1f9db-1f3fc-200d-2640-fe0f", 52, 19, 15, ["🧛🏼‍♀️", "🧛🏼"]], "1f3fd": ["1f9db-1f3fd-200d-2640-fe0f", 52, 20, 15, ["🧛🏽‍♀️", "🧛🏽"]], "1f3fe": ["1f9db-1f3fe-200d-2640-fe0f", 52, 21, 15, ["🧛🏾‍♀️", "🧛🏾"]], "1f3ff": ["1f9db-1f3ff-200d-2640-fe0f", 52, 22, 15, ["🧛🏿‍♀️", "🧛🏿"]] },
        "1f9db-200d-2642-fe0f": { "1f3fb": ["1f9db-1f3fb-200d-2642-fe0f", 52, 24, 15, ["🧛🏻‍♂️"]], "1f3fc": ["1f9db-1f3fc-200d-2642-fe0f", 52, 25, 15, ["🧛🏼‍♂️"]], "1f3fd": ["1f9db-1f3fd-200d-2642-fe0f", 52, 26, 15, ["🧛🏽‍♂️"]], "1f3fe": ["1f9db-1f3fe-200d-2642-fe0f", 52, 27, 15, ["🧛🏾‍♂️"]], "1f3ff": ["1f9db-1f3ff-200d-2642-fe0f", 52, 28, 15, ["🧛🏿‍♂️"]] },
        "1f9dc-200d-2640-fe0f": { "1f3fb": ["1f9dc-1f3fb-200d-2640-fe0f", 52, 36, 15, ["🧜🏻‍♀️"]], "1f3fc": ["1f9dc-1f3fc-200d-2640-fe0f", 52, 37, 15, ["🧜🏼‍♀️"]], "1f3fd": ["1f9dc-1f3fd-200d-2640-fe0f", 52, 38, 15, ["🧜🏽‍♀️"]], "1f3fe": ["1f9dc-1f3fe-200d-2640-fe0f", 52, 39, 15, ["🧜🏾‍♀️"]], "1f3ff": ["1f9dc-1f3ff-200d-2640-fe0f", 52, 40, 15, ["🧜🏿‍♀️"]] },
        "1f9dc-200d-2642-fe0f": { "1f3fb": ["1f9dc-1f3fb-200d-2642-fe0f", 52, 42, 15, ["🧜🏻‍♂️", "🧜🏻"]], "1f3fc": ["1f9dc-1f3fc-200d-2642-fe0f", 52, 43, 15, ["🧜🏼‍♂️", "🧜🏼"]], "1f3fd": ["1f9dc-1f3fd-200d-2642-fe0f", 52, 44, 15, ["🧜🏽‍♂️", "🧜🏽"]], "1f3fe": ["1f9dc-1f3fe-200d-2642-fe0f", 52, 45, 15, ["🧜🏾‍♂️", "🧜🏾"]], "1f3ff": ["1f9dc-1f3ff-200d-2642-fe0f", 52, 46, 15, ["🧜🏿‍♂️", "🧜🏿"]] },
        "1f9dd-200d-2640-fe0f": { "1f3fb": ["1f9dd-1f3fb-200d-2640-fe0f", 52, 54, 15, ["🧝🏻‍♀️"]], "1f3fc": ["1f9dd-1f3fc-200d-2640-fe0f", 52, 55, 15, ["🧝🏼‍♀️"]], "1f3fd": ["1f9dd-1f3fd-200d-2640-fe0f", 52, 56, 15, ["🧝🏽‍♀️"]], "1f3fe": ["1f9dd-1f3fe-200d-2640-fe0f", 52, 57, 15, ["🧝🏾‍♀️"]], "1f3ff": ["1f9dd-1f3ff-200d-2640-fe0f", 52, 58, 15, ["🧝🏿‍♀️"]] },
        "1f9dd-200d-2642-fe0f": { "1f3fb": ["1f9dd-1f3fb-200d-2642-fe0f", 52, 60, 15, ["🧝🏻‍♂️", "🧝🏻"]], "1f3fc": ["1f9dd-1f3fc-200d-2642-fe0f", 53, 0, 15, ["🧝🏼‍♂️", "🧝🏼"]], "1f3fd": ["1f9dd-1f3fd-200d-2642-fe0f", 53, 1, 15, ["🧝🏽‍♂️", "🧝🏽"]], "1f3fe": ["1f9dd-1f3fe-200d-2642-fe0f", 53, 2, 15, ["🧝🏾‍♂️", "🧝🏾"]], "1f3ff": ["1f9dd-1f3ff-200d-2642-fe0f", 53, 3, 15, ["🧝🏿‍♂️", "🧝🏿"]] },
        "1fac3": { "1f3fb": ["1fac3-1f3fb", 54, 60, 15, ["🫃🏻"]], "1f3fc": ["1fac3-1f3fc", 55, 0, 15, ["🫃🏼"]], "1f3fd": ["1fac3-1f3fd", 55, 1, 15, ["🫃🏽"]], "1f3fe": ["1fac3-1f3fe", 55, 2, 15, ["🫃🏾"]], "1f3ff": ["1fac3-1f3ff", 55, 3, 15, ["🫃🏿"]] },
        "1fac4": { "1f3fb": ["1fac4-1f3fb", 55, 5, 15, ["🫄🏻"]], "1f3fc": ["1fac4-1f3fc", 55, 6, 15, ["🫄🏼"]], "1f3fd": ["1fac4-1f3fd", 55, 7, 15, ["🫄🏽"]], "1f3fe": ["1fac4-1f3fe", 55, 8, 15, ["🫄🏾"]], "1f3ff": ["1fac4-1f3ff", 55, 9, 15, ["🫄🏿"]] },
        "1fac5": { "1f3fb": ["1fac5-1f3fb", 55, 11, 15, ["🫅🏻"]], "1f3fc": ["1fac5-1f3fc", 55, 12, 15, ["🫅🏼"]], "1f3fd": ["1fac5-1f3fd", 55, 13, 15, ["🫅🏽"]], "1f3fe": ["1fac5-1f3fe", 55, 14, 15, ["🫅🏾"]], "1f3ff": ["1fac5-1f3ff", 55, 15, 15, ["🫅🏿"]] },
        "1faf0": { "1f3fb": ["1faf0-1f3fb", 55, 40, 15, ["🫰🏻"]], "1f3fc": ["1faf0-1f3fc", 55, 41, 15, ["🫰🏼"]], "1f3fd": ["1faf0-1f3fd", 55, 42, 15, ["🫰🏽"]], "1f3fe": ["1faf0-1f3fe", 55, 43, 15, ["🫰🏾"]], "1f3ff": ["1faf0-1f3ff", 55, 44, 15, ["🫰🏿"]] },
        "1faf1": { "1f3fb": ["1faf1-1f3fb", 55, 46, 15, ["🫱🏻"]], "1f3fc": ["1faf1-1f3fc", 55, 47, 15, ["🫱🏼"]], "1f3fd": ["1faf1-1f3fd", 55, 48, 15, ["🫱🏽"]], "1f3fe": ["1faf1-1f3fe", 55, 49, 15, ["🫱🏾"]], "1f3ff": ["1faf1-1f3ff", 55, 50, 15, ["🫱🏿"]] },
        "1faf2": { "1f3fb": ["1faf2-1f3fb", 55, 52, 15, ["🫲🏻"]], "1f3fc": ["1faf2-1f3fc", 55, 53, 15, ["🫲🏼"]], "1f3fd": ["1faf2-1f3fd", 55, 54, 15, ["🫲🏽"]], "1f3fe": ["1faf2-1f3fe", 55, 55, 15, ["🫲🏾"]], "1f3ff": ["1faf2-1f3ff", 55, 56, 15, ["🫲🏿"]] },
        "1faf3": { "1f3fb": ["1faf3-1f3fb", 55, 58, 15, ["🫳🏻"]], "1f3fc": ["1faf3-1f3fc", 55, 59, 15, ["🫳🏼"]], "1f3fd": ["1faf3-1f3fd", 55, 60, 15, ["🫳🏽"]], "1f3fe": ["1faf3-1f3fe", 56, 0, 15, ["🫳🏾"]], "1f3ff": ["1faf3-1f3ff", 56, 1, 15, ["🫳🏿"]] },
        "1faf4": { "1f3fb": ["1faf4-1f3fb", 56, 3, 15, ["🫴🏻"]], "1f3fc": ["1faf4-1f3fc", 56, 4, 15, ["🫴🏼"]], "1f3fd": ["1faf4-1f3fd", 56, 5, 15, ["🫴🏽"]], "1f3fe": ["1faf4-1f3fe", 56, 6, 15, ["🫴🏾"]], "1f3ff": ["1faf4-1f3ff", 56, 7, 15, ["🫴🏿"]] },
        "1faf5": { "1f3fb": ["1faf5-1f3fb", 56, 9, 15, ["🫵🏻"]], "1f3fc": ["1faf5-1f3fc", 56, 10, 15, ["🫵🏼"]], "1f3fd": ["1faf5-1f3fd", 56, 11, 15, ["🫵🏽"]], "1f3fe": ["1faf5-1f3fe", 56, 12, 15, ["🫵🏾"]], "1f3ff": ["1faf5-1f3ff", 56, 13, 15, ["🫵🏿"]] },
        "1faf6": { "1f3fb": ["1faf6-1f3fb", 56, 15, 15, ["🫶🏻"]], "1f3fc": ["1faf6-1f3fc", 56, 16, 15, ["🫶🏼"]], "1f3fd": ["1faf6-1f3fd", 56, 17, 15, ["🫶🏽"]], "1f3fe": ["1faf6-1f3fe", 56, 18, 15, ["🫶🏾"]], "1f3ff": ["1faf6-1f3ff", 56, 19, 15, ["🫶🏿"]] },
        "1faf7": { "1f3fb": ["1faf7-1f3fb", 56, 21, 3, ["🫷🏻"]], "1f3fc": ["1faf7-1f3fc", 56, 22, 3, ["🫷🏼"]], "1f3fd": ["1faf7-1f3fd", 56, 23, 3, ["🫷🏽"]], "1f3fe": ["1faf7-1f3fe", 56, 24, 3, ["🫷🏾"]], "1f3ff": ["1faf7-1f3ff", 56, 25, 3, ["🫷🏿"]] },
        "1faf8": { "1f3fb": ["1faf8-1f3fb", 56, 27, 3, ["🫸🏻"]], "1f3fc": ["1faf8-1f3fc", 56, 28, 3, ["🫸🏼"]], "1f3fd": ["1faf8-1f3fd", 56, 29, 3, ["🫸🏽"]], "1f3fe": ["1faf8-1f3fe", 56, 30, 3, ["🫸🏾"]], "1f3ff": ["1faf8-1f3ff", 56, 31, 3, ["🫸🏿"]] },
        "261d-fe0f": { "1f3fb": ["261d-1f3fb", 57, 21, 15, ["☝🏻"]], "1f3fc": ["261d-1f3fc", 57, 22, 15, ["☝🏼"]], "1f3fd": ["261d-1f3fd", 57, 23, 15, ["☝🏽"]], "1f3fe": ["261d-1f3fe", 57, 24, 15, ["☝🏾"]], "1f3ff": ["261d-1f3ff", 57, 25, 15, ["☝🏿"]] },
        "26f9-fe0f-200d-2640-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2640-fe0f", 58, 35, 15, ["⛹🏻‍♀️"]], "1f3fc": ["26f9-1f3fc-200d-2640-fe0f", 58, 36, 15, ["⛹🏼‍♀️"]], "1f3fd": ["26f9-1f3fd-200d-2640-fe0f", 58, 37, 15, ["⛹🏽‍♀️"]], "1f3fe": ["26f9-1f3fe-200d-2640-fe0f", 58, 38, 15, ["⛹🏾‍♀️"]], "1f3ff": ["26f9-1f3ff-200d-2640-fe0f", 58, 39, 15, ["⛹🏿‍♀️"]] },
        "26f9-fe0f-200d-2642-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2642-fe0f", 58, 41, 15, ["⛹🏻‍♂️", "⛹🏻"]], "1f3fc": ["26f9-1f3fc-200d-2642-fe0f", 58, 42, 15, ["⛹🏼‍♂️", "⛹🏼"]], "1f3fd": ["26f9-1f3fd-200d-2642-fe0f", 58, 43, 15, ["⛹🏽‍♂️", "⛹🏽"]], "1f3fe": ["26f9-1f3fe-200d-2642-fe0f", 58, 44, 15, ["⛹🏾‍♂️", "⛹🏾"]], "1f3ff": ["26f9-1f3ff-200d-2642-fe0f", 58, 45, 15, ["⛹🏿‍♂️", "⛹🏿"]] },
        "270a": { "1f3fb": ["270a-1f3fb", 58, 59, 15, ["✊🏻"]], "1f3fc": ["270a-1f3fc", 58, 60, 15, ["✊🏼"]], "1f3fd": ["270a-1f3fd", 59, 0, 15, ["✊🏽"]], "1f3fe": ["270a-1f3fe", 59, 1, 15, ["✊🏾"]], "1f3ff": ["270a-1f3ff", 59, 2, 15, ["✊🏿"]] },
        "270b": { "1f3fb": ["270b-1f3fb", 59, 4, 15, ["✋🏻"]], "1f3fc": ["270b-1f3fc", 59, 5, 15, ["✋🏼"]], "1f3fd": ["270b-1f3fd", 59, 6, 15, ["✋🏽"]], "1f3fe": ["270b-1f3fe", 59, 7, 15, ["✋🏾"]], "1f3ff": ["270b-1f3ff", 59, 8, 15, ["✋🏿"]] },
        "270c-fe0f": { "1f3fb": ["270c-1f3fb", 59, 10, 15, ["✌🏻"]], "1f3fc": ["270c-1f3fc", 59, 11, 15, ["✌🏼"]], "1f3fd": ["270c-1f3fd", 59, 12, 15, ["✌🏽"]], "1f3fe": ["270c-1f3fe", 59, 13, 15, ["✌🏾"]], "1f3ff": ["270c-1f3ff", 59, 14, 15, ["✌🏿"]] },
        "270d-fe0f": { "1f3fb": ["270d-1f3fb", 59, 16, 15, ["✍🏻"]], "1f3fc": ["270d-1f3fc", 59, 17, 15, ["✍🏼"]], "1f3fd": ["270d-1f3fd", 59, 18, 15, ["✍🏽"]], "1f3fe": ["270d-1f3fe", 59, 19, 15, ["✍🏾"]], "1f3ff": ["270d-1f3ff", 59, 20, 15, ["✍🏿"]] }
      }, F.prototype.obsoletes_data = {
        "1f3c3-200d-2642-fe0f": ["1f3c3", 8, 26, 15],
        "1f3c3-1f3fb-200d-2642-fe0f": ["1f3c3-1f3fb", 8, 27, 15],
        "1f3c3-1f3fc-200d-2642-fe0f": ["1f3c3-1f3fc", 8, 28, 15],
        "1f3c3-1f3fd-200d-2642-fe0f": ["1f3c3-1f3fd", 8, 29, 15],
        "1f3c3-1f3fe-200d-2642-fe0f": ["1f3c3-1f3fe", 8, 30, 15],
        "1f3c3-1f3ff-200d-2642-fe0f": ["1f3c3-1f3ff", 8, 31, 15],
        "1f3c4-200d-2642-fe0f": ["1f3c4", 8, 44, 15],
        "1f3c4-1f3fb-200d-2642-fe0f": ["1f3c4-1f3fb", 8, 45, 15],
        "1f3c4-1f3fc-200d-2642-fe0f": ["1f3c4-1f3fc", 8, 46, 15],
        "1f3c4-1f3fd-200d-2642-fe0f": ["1f3c4-1f3fd", 8, 47, 15],
        "1f3c4-1f3fe-200d-2642-fe0f": ["1f3c4-1f3fe", 8, 48, 15],
        "1f3c4-1f3ff-200d-2642-fe0f": ["1f3c4-1f3ff", 8, 49, 15],
        "1f3ca-200d-2642-fe0f": ["1f3ca", 9, 11, 15],
        "1f3ca-1f3fb-200d-2642-fe0f": ["1f3ca-1f3fb", 9, 12, 15],
        "1f3ca-1f3fc-200d-2642-fe0f": ["1f3ca-1f3fc", 9, 13, 15],
        "1f3ca-1f3fd-200d-2642-fe0f": ["1f3ca-1f3fd", 9, 14, 15],
        "1f3ca-1f3fe-200d-2642-fe0f": ["1f3ca-1f3fe", 9, 15, 15],
        "1f3ca-1f3ff-200d-2642-fe0f": ["1f3ca-1f3ff", 9, 16, 15],
        "1f3cb-fe0f-200d-2642-fe0f": ["1f3cb-fe0f", 9, 29, 15],
        "1f3cb-1f3fb-200d-2642-fe0f": ["1f3cb-1f3fb", 9, 30, 15],
        "1f3cb-1f3fc-200d-2642-fe0f": ["1f3cb-1f3fc", 9, 31, 15],
        "1f3cb-1f3fd-200d-2642-fe0f": ["1f3cb-1f3fd", 9, 32, 15],
        "1f3cb-1f3fe-200d-2642-fe0f": ["1f3cb-1f3fe", 9, 33, 15],
        "1f3cb-1f3ff-200d-2642-fe0f": ["1f3cb-1f3ff", 9, 34, 15],
        "1f3cc-fe0f-200d-2642-fe0f": ["1f3cc-fe0f", 9, 47, 15],
        "1f3cc-1f3fb-200d-2642-fe0f": ["1f3cc-1f3fb", 9, 48, 15],
        "1f3cc-1f3fc-200d-2642-fe0f": ["1f3cc-1f3fc", 9, 49, 15],
        "1f3cc-1f3fd-200d-2642-fe0f": ["1f3cc-1f3fd", 9, 50, 15],
        "1f3cc-1f3fe-200d-2642-fe0f": ["1f3cc-1f3fe", 9, 51, 15],
        "1f3cc-1f3ff-200d-2642-fe0f": ["1f3cc-1f3ff", 9, 52, 15],
        "1f468-200d-1f469-200d-1f466": ["1f46a", 21, 40, 15],
        "1f46e-200d-2642-fe0f": ["1f46e", 23, 9, 15],
        "1f46e-1f3fb-200d-2642-fe0f": ["1f46e-1f3fb", 23, 10, 15],
        "1f46e-1f3fc-200d-2642-fe0f": ["1f46e-1f3fc", 23, 11, 15],
        "1f46e-1f3fd-200d-2642-fe0f": ["1f46e-1f3fd", 23, 12, 15],
        "1f46e-1f3fe-200d-2642-fe0f": ["1f46e-1f3fe", 23, 13, 15],
        "1f46e-1f3ff-200d-2642-fe0f": ["1f46e-1f3ff", 23, 14, 15],
        "1f46f-200d-2640-fe0f": ["1f46f", 23, 17, 15],
        "1f471-200d-2642-fe0f": ["1f471", 23, 48, 15],
        "1f471-1f3fb-200d-2642-fe0f": ["1f471-1f3fb", 23, 49, 15],
        "1f471-1f3fc-200d-2642-fe0f": ["1f471-1f3fc", 23, 50, 15],
        "1f471-1f3fd-200d-2642-fe0f": ["1f471-1f3fd", 23, 51, 15],
        "1f471-1f3fe-200d-2642-fe0f": ["1f471-1f3fe", 23, 52, 15],
        "1f471-1f3ff-200d-2642-fe0f": ["1f471-1f3ff", 23, 53, 15],
        "1f473-200d-2642-fe0f": ["1f473", 24, 11, 15],
        "1f473-1f3fb-200d-2642-fe0f": ["1f473-1f3fb", 24, 12, 15],
        "1f473-1f3fc-200d-2642-fe0f": ["1f473-1f3fc", 24, 13, 15],
        "1f473-1f3fd-200d-2642-fe0f": ["1f473-1f3fd", 24, 14, 15],
        "1f473-1f3fe-200d-2642-fe0f": ["1f473-1f3fe", 24, 15, 15],
        "1f473-1f3ff-200d-2642-fe0f": ["1f473-1f3ff", 24, 16, 15],
        "1f477-200d-2642-fe0f": ["1f477", 24, 47, 15],
        "1f477-1f3fb-200d-2642-fe0f": ["1f477-1f3fb", 24, 48, 15],
        "1f477-1f3fc-200d-2642-fe0f": ["1f477-1f3fc", 24, 49, 15],
        "1f477-1f3fd-200d-2642-fe0f": ["1f477-1f3fd", 24, 50, 15],
        "1f477-1f3fe-200d-2642-fe0f": ["1f477-1f3fe", 24, 51, 15],
        "1f477-1f3ff-200d-2642-fe0f": ["1f477-1f3ff", 24, 52, 15],
        "1f481-200d-2640-fe0f": ["1f481", 25, 23, 15],
        "1f481-1f3fb-200d-2640-fe0f": ["1f481-1f3fb", 25, 24, 15],
        "1f481-1f3fc-200d-2640-fe0f": ["1f481-1f3fc", 25, 25, 15],
        "1f481-1f3fd-200d-2640-fe0f": ["1f481-1f3fd", 25, 26, 15],
        "1f481-1f3fe-200d-2640-fe0f": ["1f481-1f3fe", 25, 27, 15],
        "1f481-1f3ff-200d-2640-fe0f": ["1f481-1f3ff", 25, 28, 15],
        "1f482-200d-2642-fe0f": ["1f482", 25, 41, 15],
        "1f482-1f3fb-200d-2642-fe0f": ["1f482-1f3fb", 25, 42, 15],
        "1f482-1f3fc-200d-2642-fe0f": ["1f482-1f3fc", 25, 43, 15],
        "1f482-1f3fd-200d-2642-fe0f": ["1f482-1f3fd", 25, 44, 15],
        "1f482-1f3fe-200d-2642-fe0f": ["1f482-1f3fe", 25, 45, 15],
        "1f482-1f3ff-200d-2642-fe0f": ["1f482-1f3ff", 25, 46, 15],
        "1f486-200d-2640-fe0f": ["1f486", 26, 11, 15],
        "1f486-1f3fb-200d-2640-fe0f": ["1f486-1f3fb", 26, 12, 15],
        "1f486-1f3fc-200d-2640-fe0f": ["1f486-1f3fc", 26, 13, 15],
        "1f486-1f3fd-200d-2640-fe0f": ["1f486-1f3fd", 26, 14, 15],
        "1f486-1f3fe-200d-2640-fe0f": ["1f486-1f3fe", 26, 15, 15],
        "1f486-1f3ff-200d-2640-fe0f": ["1f486-1f3ff", 26, 16, 15],
        "1f487-200d-2640-fe0f": ["1f487", 26, 29, 15],
        "1f487-1f3fb-200d-2640-fe0f": ["1f487-1f3fb", 26, 30, 15],
        "1f487-1f3fc-200d-2640-fe0f": ["1f487-1f3fc", 26, 31, 15],
        "1f487-1f3fd-200d-2640-fe0f": ["1f487-1f3fd", 26, 32, 15],
        "1f487-1f3fe-200d-2640-fe0f": ["1f487-1f3fe", 26, 33, 15],
        "1f487-1f3ff-200d-2640-fe0f": ["1f487-1f3ff", 26, 34, 15],
        "1f575-fe0f-200d-2642-fe0f": ["1f575-fe0f", 31, 17, 15],
        "1f575-1f3fb-200d-2642-fe0f": ["1f575-1f3fb", 31, 18, 15],
        "1f575-1f3fc-200d-2642-fe0f": ["1f575-1f3fc", 31, 19, 15],
        "1f575-1f3fd-200d-2642-fe0f": ["1f575-1f3fd", 31, 20, 15],
        "1f575-1f3fe-200d-2642-fe0f": ["1f575-1f3fe", 31, 21, 15],
        "1f575-1f3ff-200d-2642-fe0f": ["1f575-1f3ff", 31, 22, 15],
        "1f645-200d-2640-fe0f": ["1f645", 33, 44, 15],
        "1f645-1f3fb-200d-2640-fe0f": ["1f645-1f3fb", 33, 45, 15],
        "1f645-1f3fc-200d-2640-fe0f": ["1f645-1f3fc", 33, 46, 15],
        "1f645-1f3fd-200d-2640-fe0f": ["1f645-1f3fd", 33, 47, 15],
        "1f645-1f3fe-200d-2640-fe0f": ["1f645-1f3fe", 33, 48, 15],
        "1f645-1f3ff-200d-2640-fe0f": ["1f645-1f3ff", 33, 49, 15],
        "1f646-200d-2640-fe0f": ["1f646", 34, 1, 15],
        "1f646-1f3fb-200d-2640-fe0f": ["1f646-1f3fb", 34, 2, 15],
        "1f646-1f3fc-200d-2640-fe0f": ["1f646-1f3fc", 34, 3, 15],
        "1f646-1f3fd-200d-2640-fe0f": ["1f646-1f3fd", 34, 4, 15],
        "1f646-1f3fe-200d-2640-fe0f": ["1f646-1f3fe", 34, 5, 15],
        "1f646-1f3ff-200d-2640-fe0f": ["1f646-1f3ff", 34, 6, 15],
        "1f64b-200d-2640-fe0f": ["1f64b", 34, 40, 15],
        "1f64b-1f3fb-200d-2640-fe0f": ["1f64b-1f3fb", 34, 41, 15],
        "1f64b-1f3fc-200d-2640-fe0f": ["1f64b-1f3fc", 34, 42, 15],
        "1f64b-1f3fd-200d-2640-fe0f": ["1f64b-1f3fd", 34, 43, 15],
        "1f64b-1f3fe-200d-2640-fe0f": ["1f64b-1f3fe", 34, 44, 15],
        "1f64b-1f3ff-200d-2640-fe0f": ["1f64b-1f3ff", 34, 45, 15],
        "1f64d-200d-2640-fe0f": ["1f64d", 35, 3, 15],
        "1f64d-1f3fb-200d-2640-fe0f": ["1f64d-1f3fb", 35, 4, 15],
        "1f64d-1f3fc-200d-2640-fe0f": ["1f64d-1f3fc", 35, 5, 15],
        "1f64d-1f3fd-200d-2640-fe0f": ["1f64d-1f3fd", 35, 6, 15],
        "1f64d-1f3fe-200d-2640-fe0f": ["1f64d-1f3fe", 35, 7, 15],
        "1f64d-1f3ff-200d-2640-fe0f": ["1f64d-1f3ff", 35, 8, 15],
        "1f64e-200d-2640-fe0f": ["1f64e", 35, 21, 15],
        "1f64e-1f3fb-200d-2640-fe0f": ["1f64e-1f3fb", 35, 22, 15],
        "1f64e-1f3fc-200d-2640-fe0f": ["1f64e-1f3fc", 35, 23, 15],
        "1f64e-1f3fd-200d-2640-fe0f": ["1f64e-1f3fd", 35, 24, 15],
        "1f64e-1f3fe-200d-2640-fe0f": ["1f64e-1f3fe", 35, 25, 15],
        "1f64e-1f3ff-200d-2640-fe0f": ["1f64e-1f3ff", 35, 26, 15],
        "1f6a3-200d-2642-fe0f": ["1f6a3", 36, 19, 15],
        "1f6a3-1f3fb-200d-2642-fe0f": ["1f6a3-1f3fb", 36, 20, 15],
        "1f6a3-1f3fc-200d-2642-fe0f": ["1f6a3-1f3fc", 36, 21, 15],
        "1f6a3-1f3fd-200d-2642-fe0f": ["1f6a3-1f3fd", 36, 22, 15],
        "1f6a3-1f3fe-200d-2642-fe0f": ["1f6a3-1f3fe", 36, 23, 15],
        "1f6a3-1f3ff-200d-2642-fe0f": ["1f6a3-1f3ff", 36, 24, 15],
        "1f6b4-200d-2642-fe0f": ["1f6b4", 36, 53, 15],
        "1f6b4-1f3fb-200d-2642-fe0f": ["1f6b4-1f3fb", 36, 54, 15],
        "1f6b4-1f3fc-200d-2642-fe0f": ["1f6b4-1f3fc", 36, 55, 15],
        "1f6b4-1f3fd-200d-2642-fe0f": ["1f6b4-1f3fd", 36, 56, 15],
        "1f6b4-1f3fe-200d-2642-fe0f": ["1f6b4-1f3fe", 36, 57, 15],
        "1f6b4-1f3ff-200d-2642-fe0f": ["1f6b4-1f3ff", 36, 58, 15],
        "1f6b5-200d-2642-fe0f": ["1f6b5", 37, 10, 15],
        "1f6b5-1f3fb-200d-2642-fe0f": ["1f6b5-1f3fb", 37, 11, 15],
        "1f6b5-1f3fc-200d-2642-fe0f": ["1f6b5-1f3fc", 37, 12, 15],
        "1f6b5-1f3fd-200d-2642-fe0f": ["1f6b5-1f3fd", 37, 13, 15],
        "1f6b5-1f3fe-200d-2642-fe0f": ["1f6b5-1f3fe", 37, 14, 15],
        "1f6b5-1f3ff-200d-2642-fe0f": ["1f6b5-1f3ff", 37, 15, 15],
        "1f6b6-200d-2642-fe0f": ["1f6b6", 37, 28, 15],
        "1f6b6-1f3fb-200d-2642-fe0f": ["1f6b6-1f3fb", 37, 29, 15],
        "1f6b6-1f3fc-200d-2642-fe0f": ["1f6b6-1f3fc", 37, 30, 15],
        "1f6b6-1f3fd-200d-2642-fe0f": ["1f6b6-1f3fd", 37, 31, 15],
        "1f6b6-1f3fe-200d-2642-fe0f": ["1f6b6-1f3fe", 37, 32, 15],
        "1f6b6-1f3ff-200d-2642-fe0f": ["1f6b6-1f3ff", 37, 33, 15],
        "1f9d6-200d-2642-fe0f": ["1f9d6", 51, 0, 15],
        "1f9d6-1f3fb-200d-2642-fe0f": ["1f9d6-1f3fb", 51, 1, 15],
        "1f9d6-1f3fc-200d-2642-fe0f": ["1f9d6-1f3fc", 51, 2, 15],
        "1f9d6-1f3fd-200d-2642-fe0f": ["1f9d6-1f3fd", 51, 3, 15],
        "1f9d6-1f3fe-200d-2642-fe0f": ["1f9d6-1f3fe", 51, 4, 15],
        "1f9d6-1f3ff-200d-2642-fe0f": ["1f9d6-1f3ff", 51, 5, 15],
        "1f9d7-200d-2640-fe0f": ["1f9d7", 51, 18, 15],
        "1f9d7-1f3fb-200d-2640-fe0f": ["1f9d7-1f3fb", 51, 19, 15],
        "1f9d7-1f3fc-200d-2640-fe0f": ["1f9d7-1f3fc", 51, 20, 15],
        "1f9d7-1f3fd-200d-2640-fe0f": ["1f9d7-1f3fd", 51, 21, 15],
        "1f9d7-1f3fe-200d-2640-fe0f": ["1f9d7-1f3fe", 51, 22, 15],
        "1f9d7-1f3ff-200d-2640-fe0f": ["1f9d7-1f3ff", 51, 23, 15],
        "1f9d8-200d-2640-fe0f": ["1f9d8", 51, 36, 15],
        "1f9d8-1f3fb-200d-2640-fe0f": ["1f9d8-1f3fb", 51, 37, 15],
        "1f9d8-1f3fc-200d-2640-fe0f": ["1f9d8-1f3fc", 51, 38, 15],
        "1f9d8-1f3fd-200d-2640-fe0f": ["1f9d8-1f3fd", 51, 39, 15],
        "1f9d8-1f3fe-200d-2640-fe0f": ["1f9d8-1f3fe", 51, 40, 15],
        "1f9d8-1f3ff-200d-2640-fe0f": ["1f9d8-1f3ff", 51, 41, 15],
        "1f9d9-200d-2640-fe0f": ["1f9d9", 51, 54, 15],
        "1f9d9-1f3fb-200d-2640-fe0f": ["1f9d9-1f3fb", 51, 55, 15],
        "1f9d9-1f3fc-200d-2640-fe0f": ["1f9d9-1f3fc", 51, 56, 15],
        "1f9d9-1f3fd-200d-2640-fe0f": ["1f9d9-1f3fd", 51, 57, 15],
        "1f9d9-1f3fe-200d-2640-fe0f": ["1f9d9-1f3fe", 51, 58, 15],
        "1f9d9-1f3ff-200d-2640-fe0f": ["1f9d9-1f3ff", 51, 59, 15],
        "1f9da-200d-2640-fe0f": ["1f9da", 52, 11, 15],
        "1f9da-1f3fb-200d-2640-fe0f": ["1f9da-1f3fb", 52, 12, 15],
        "1f9da-1f3fc-200d-2640-fe0f": ["1f9da-1f3fc", 52, 13, 15],
        "1f9da-1f3fd-200d-2640-fe0f": ["1f9da-1f3fd", 52, 14, 15],
        "1f9da-1f3fe-200d-2640-fe0f": ["1f9da-1f3fe", 52, 15, 15],
        "1f9da-1f3ff-200d-2640-fe0f": ["1f9da-1f3ff", 52, 16, 15],
        "1f9db-200d-2640-fe0f": ["1f9db", 52, 29, 15],
        "1f9db-1f3fb-200d-2640-fe0f": ["1f9db-1f3fb", 52, 30, 15],
        "1f9db-1f3fc-200d-2640-fe0f": ["1f9db-1f3fc", 52, 31, 15],
        "1f9db-1f3fd-200d-2640-fe0f": ["1f9db-1f3fd", 52, 32, 15],
        "1f9db-1f3fe-200d-2640-fe0f": ["1f9db-1f3fe", 52, 33, 15],
        "1f9db-1f3ff-200d-2640-fe0f": ["1f9db-1f3ff", 52, 34, 15],
        "1f9dc-200d-2642-fe0f": ["1f9dc", 52, 47, 15],
        "1f9dc-1f3fb-200d-2642-fe0f": ["1f9dc-1f3fb", 52, 48, 15],
        "1f9dc-1f3fc-200d-2642-fe0f": ["1f9dc-1f3fc", 52, 49, 15],
        "1f9dc-1f3fd-200d-2642-fe0f": ["1f9dc-1f3fd", 52, 50, 15],
        "1f9dc-1f3fe-200d-2642-fe0f": ["1f9dc-1f3fe", 52, 51, 15],
        "1f9dc-1f3ff-200d-2642-fe0f": ["1f9dc-1f3ff", 52, 52, 15],
        "1f9dd-200d-2642-fe0f": ["1f9dd", 53, 4, 15],
        "1f9dd-1f3fb-200d-2642-fe0f": ["1f9dd-1f3fb", 53, 5, 15],
        "1f9dd-1f3fc-200d-2642-fe0f": ["1f9dd-1f3fc", 53, 6, 15],
        "1f9dd-1f3fd-200d-2642-fe0f": ["1f9dd-1f3fd", 53, 7, 15],
        "1f9dd-1f3fe-200d-2642-fe0f": ["1f9dd-1f3fe", 53, 8, 15],
        "1f9dd-1f3ff-200d-2642-fe0f": ["1f9dd-1f3ff", 53, 9, 15],
        "1f9de-200d-2642-fe0f": ["1f9de", 53, 12, 15],
        "1f9df-200d-2642-fe0f": ["1f9df", 53, 15, 15],
        "26f9-fe0f-200d-2642-fe0f": ["26f9-fe0f", 58, 46, 15],
        "26f9-1f3fb-200d-2642-fe0f": ["26f9-1f3fb", 58, 47, 15],
        "26f9-1f3fc-200d-2642-fe0f": ["26f9-1f3fc", 58, 48, 15],
        "26f9-1f3fd-200d-2642-fe0f": ["26f9-1f3fd", 58, 49, 15],
        "26f9-1f3fe-200d-2642-fe0f": ["26f9-1f3fe", 58, 50, 15],
        "26f9-1f3ff-200d-2642-fe0f": ["26f9-1f3ff", 58, 51, 15]
      }, u.exports && (D = u.exports = F), D.EmojiConvertor = F;
    }).call(/* @__PURE__ */ function() {
      return this || (typeof window < "u" ? window : we);
    }());
  }(nD, nD.exports)), nD.exports;
}
var r2 = n2();
const i2 = /* @__PURE__ */ YD(r2), d2 = [
  {
    name: "People",
    emojis: [
      "😄",
      "😃",
      "😀",
      "😊",
      "😉",
      "😍",
      "😘",
      "😚",
      "😗",
      "😙",
      "😜",
      "😝",
      "😛",
      "😳",
      "😁",
      "😔",
      "😌",
      "😒",
      "😞",
      "😣",
      "😢",
      "😂",
      "😭",
      "😪",
      "😥",
      "😰",
      "😅",
      "😓",
      "😩",
      "😫",
      "😨",
      "😱",
      "😠",
      "😡",
      "😤",
      "😖",
      "😆",
      "😋",
      "😷",
      "😎",
      "😴",
      "😵",
      "😲",
      "😟",
      "😦",
      "😧",
      "👿",
      "😮",
      "😬",
      "😐",
      "😕",
      "😯",
      "😏",
      "😑",
      "👲",
      "👳",
      "👮",
      "👷",
      "💂",
      "👶",
      "👦",
      "👧",
      "👨",
      "👩",
      "👴",
      "👵",
      "👱",
      "👼",
      "👸",
      "😺",
      "😸",
      "😻",
      "😽",
      "😼",
      "🙀",
      "😿",
      "😹",
      "😾",
      "👹",
      "👺",
      "🙈",
      "🙉",
      "🙊",
      "💀",
      "👽",
      "💩",
      "🔥",
      "✨",
      "🌟",
      "💫",
      "💥",
      "💢",
      "💦",
      "💧",
      "💤",
      "💨",
      "👂",
      "👀",
      "👃",
      "👅",
      "👄",
      "👍",
      "👎",
      "👌",
      "👊",
      "✊",
      "👋",
      "✋",
      "👐",
      "👆",
      "👇",
      "👉",
      "👈",
      "🙌",
      "🙏",
      "👏",
      "💪",
      "🚶",
      "🏃",
      "💃",
      "👫",
      "👪",
      "💏",
      "💑",
      "👯",
      "🙆",
      "🙅",
      "💁",
      "🙋",
      "💆",
      "💇",
      "💅",
      "👰",
      "🙎",
      "🙍",
      "🙇",
      "🎩",
      "👑",
      "👒",
      "👟",
      "👞",
      "👡",
      "👠",
      "👢",
      "👕",
      "👔",
      "👚",
      "👗",
      "🎽",
      "👖",
      "👘",
      "👙",
      "💼",
      "👜",
      "👝",
      "👛",
      "👓",
      "🎀",
      "🌂",
      "💄",
      "💛",
      "💙",
      "💜",
      "💚",
      "💔",
      "💗",
      "💓",
      "💕",
      "💖",
      "💞",
      "💘",
      "💌",
      "💋",
      "💍",
      "💎",
      "👤",
      "💬",
      "👣"
    ]
  },
  {
    name: "Nature",
    emojis: [
      "🐶",
      "🐺",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🐸",
      "🐯",
      "🐨",
      "🐻",
      "🐷",
      "🐽",
      "🐮",
      "🐗",
      "🐵",
      "🐒",
      "🐴",
      "🐑",
      "🐘",
      "🐼",
      "🐧",
      "🐦",
      "🐤",
      "🐥",
      "🐣",
      "🐔",
      "🐍",
      "🐢",
      "🐛",
      "🐝",
      "🐜",
      "🐞",
      "🐌",
      "🐙",
      "🐚",
      "🐠",
      "🐟",
      "🐬",
      "🐳",
      "🐎",
      "🐲",
      "🐡",
      "🐫",
      "🐩",
      "🐾",
      "💐",
      "🌸",
      "🌷",
      "🍀",
      "🌹",
      "🌻",
      "🌺",
      "🍁",
      "🍃",
      "🍂",
      "🌿",
      "🌾",
      "🍄",
      "🌵",
      "🌴",
      "🌰",
      "🌱",
      "🌼",
      "🌑",
      "🌓",
      "🌔",
      "🌕",
      "🌛",
      "🌙",
      "🌏",
      "🌋",
      "🌌",
      "🌠",
      "⛅",
      "⛄",
      "🌀",
      "🌁",
      "🌈",
      "🌊"
    ]
  },
  {
    name: "Objects",
    emojis: [
      "🎍",
      "💝",
      "🎎",
      "🎒",
      "🎓",
      "🎏",
      "🎆",
      "🎇",
      "🎐",
      "🎑",
      "🎃",
      "👻",
      "🎅",
      "🎄",
      "🎁",
      "🎋",
      "🎉",
      "🎊",
      "🎈",
      "🎌",
      "🔮",
      "🎥",
      "📷",
      "📹",
      "📼",
      "💿",
      "📀",
      "💽",
      "💾",
      "💻",
      "📱",
      "📞",
      "📟",
      "📠",
      "📡",
      "📺",
      "📻",
      "🔊",
      "🔔",
      "📢",
      "📣",
      "⏳",
      "⌛",
      "⏰",
      "⌚",
      "🔓",
      "🔒",
      "🔏",
      "🔐",
      "🔑",
      "🔎",
      "💡",
      "🔦",
      "🔌",
      "🔋",
      "🔍",
      "🛀",
      "🚽",
      "🔧",
      "🔩",
      "🔨",
      "🚪",
      "🚬",
      "💣",
      "🔫",
      "🔪",
      "💊",
      "💉",
      "💰",
      "💴",
      "💵",
      "💳",
      "💸",
      "📲",
      "📧",
      "📥",
      "📤",
      "📩",
      "📨",
      "📫",
      "📪",
      "📮",
      "📦",
      "📝",
      "📄",
      "📃",
      "📑",
      "📊",
      "📈",
      "📉",
      "📜",
      "📋",
      "📅",
      "📆",
      "📇",
      "📁",
      "📂",
      "📌",
      "📎",
      "📏",
      "📐",
      "📕",
      "📗",
      "📘",
      "📙",
      "📓",
      "📔",
      "📒",
      "📚",
      "📖",
      "🔖",
      "📛",
      "📰",
      "🎨",
      "🎬",
      "🎤",
      "🎧",
      "🎼",
      "🎵",
      "🎶",
      "🎹",
      "🎻",
      "🎺",
      "🎷",
      "🎸",
      "👾",
      "🎮",
      "🃏",
      "🎴",
      "🀄",
      "🎲",
      "🎯",
      "🏈",
      "🏀",
      "⚽",
      "⚾",
      "🎾",
      "🎱",
      "🎳",
      "⛳",
      "🏁",
      "🏆",
      "🎿",
      "🏂",
      "🏊",
      "🏄",
      "🎣",
      "🍵",
      "🍶",
      "🍺",
      "🍻",
      "🍸",
      "🍹",
      "🍷",
      "🍴",
      "🍕",
      "🍔",
      "🍟",
      "🍗",
      "🍖",
      "🍝",
      "🍛",
      "🍤",
      "🍱",
      "🍣",
      "🍥",
      "🍙",
      "🍘",
      "🍚",
      "🍜",
      "🍲",
      "🍢",
      "🍡",
      "🍳",
      "🍞",
      "🍩",
      "🍮",
      "🍦",
      "🍨",
      "🍧",
      "🎂",
      "🍰",
      "🍪",
      "🍫",
      "🍬",
      "🍭",
      "🍯",
      "🍎",
      "🍏",
      "🍊",
      "🍒",
      "🍇",
      "🍉",
      "🍓",
      "🍑",
      "🍈",
      "🍌",
      "🍍",
      "🍠",
      "🍆",
      "🍅",
      "🌽"
    ]
  },
  {
    name: "Places",
    emojis: [
      "🏠",
      "🏡",
      "🏫",
      "🏢",
      "🏣",
      "🏥",
      "🏦",
      "🏪",
      "🏩",
      "🏨",
      "💒",
      "⛪",
      "🏬",
      "🌇",
      "🌆",
      "🏯",
      "🏰",
      "⛺",
      "🏭",
      "🗼",
      "🗾",
      "🗻",
      "🌄",
      "🌅",
      "🌃",
      "🗽",
      "🌉",
      "🎠",
      "🎡",
      "⛲",
      "🎢",
      "🚢",
      "⛵",
      "🚤",
      "🚀",
      "💺",
      "🚉",
      "🚄",
      "🚅",
      "🚇",
      "🚃",
      "🚌",
      "🚙",
      "🚗",
      "🚕",
      "🚚",
      "🚨",
      "🚓",
      "🚒",
      "🚑",
      "🚲",
      "💈",
      "🚏",
      "🎫",
      "🚥",
      "🚧",
      "🔰",
      "⛽",
      "🏮",
      "🎰",
      "🗿",
      "🎪",
      "🎭",
      "📍",
      "🚩"
    ]
  },
  {
    name: "Symbols",
    emojis: [
      "🔟",
      "🔢",
      "🔣",
      "🔠",
      "🔡",
      "🔤",
      "🔼",
      "🔽",
      "⏪",
      "⏩",
      "⏫",
      "⏬",
      "🆗",
      "🆕",
      "🆙",
      "🆒",
      "🆓",
      "🆖",
      "📶",
      "🎦",
      "🈁",
      "🈯",
      "🈳",
      "🈵",
      "🈴",
      "🈲",
      "🉐",
      "🈹",
      "🈺",
      "🈶",
      "🈚",
      "🚻",
      "🚹",
      "🚺",
      "🚼",
      "🚾",
      "🚭",
      "🈸",
      "🉑",
      "🆑",
      "🆘",
      "🆔",
      "🚫",
      "🔞",
      "⛔",
      "❎",
      "✅",
      "💟",
      "🆚",
      "📳",
      "📴",
      "🆎",
      "💠",
      "⛎",
      "🔯",
      "🏧",
      "💹",
      "💲",
      "💱",
      "❌",
      "❗",
      "❓",
      "❕",
      "❔",
      "⭕",
      "🔝",
      "🔚",
      "🔙",
      "🔛",
      "🔜",
      "🔃",
      "🕛",
      "🕐",
      "🕑",
      "🕒",
      "🕓",
      "🕔",
      "🕕",
      "🕖",
      "🕗",
      "🕘",
      "🕙",
      "🕚",
      "➕",
      "➖",
      "➗",
      "💮",
      "💯",
      "🔘",
      "🔗",
      "➰",
      "🔱",
      "🔺",
      "🔲",
      "🔳",
      "🔴",
      "🔵",
      "🔻",
      "⬜",
      "⬛",
      "🔶",
      "🔷",
      "🔸",
      "🔹"
    ]
  }
], s2 = {
  props: {
    onBlur: {
      type: Function,
      required: !0
    },
    onEmojiPicked: {
      type: Function,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      emojiData: d2,
      emojiConvertor: new i2()
    };
  },
  mounted() {
    const u = this.$refs.domNode;
    u.style.opacity = 0, window.requestAnimationFrame(() => {
      u.style.transition = "opacity 350ms", u.style.opacity = 1;
    }), this.$refs.domNode.focus();
    const D = document.createElement("style");
    D.innerHTML = `
      .sc-emoji-picker:after {
        background: ${this.colors.emojiPicker.bg ?? "white"};
      }
    `, document.head.appendChild(D), this.emojiConvertor.init_env();
  },
  methods: {
    emojiClicked(u) {
      this.onEmojiPicked(u), this.$refs.domNode.blur();
    }
  }
}, o2 = { class: "sc-emoji-picker--content" }, C2 = ["onClick"];
function l2(u, D, f, e, F, t) {
  return E(), b("div", {
    ref: "domNode",
    tabIndex: "0",
    class: "sc-emoji-picker",
    style: k({ background: f.colors.emojiPicker.bg ?? "white" }),
    onBlur: D[0] || (D[0] = (...a) => f.onBlur && f.onBlur(...a))
  }, [
    l("div", o2, [
      (E(!0), b($u, null, Wu(F.emojiData, (a) => (E(), b("div", {
        key: a.name,
        class: "sc-emoji-picker--category"
      }, [
        l("div", {
          class: "sc-emoji-picker--category-title",
          style: k({ color: f.colors.emojiPicker.text ?? "#b8c3ca" })
        }, q(a.name), 5),
        (E(!0), b($u, null, Wu(a.emojis, (n) => (E(), b("span", {
          key: n,
          class: "sc-emoji-picker--emoji",
          onClick: (r) => t.emojiClicked(n)
        }, q(n), 9, C2))), 128))
      ]))), 128))
    ])
  ], 36);
}
const E2 = /* @__PURE__ */ O(s2, [["render", l2], ["__scopeId", "data-v-32e6172d"]]), c2 = {
  components: {
    EmojiPicker: E2
  },
  props: {
    onEmojiPicked: {
      type: Function,
      required: !0
    },
    color: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      isActive: !1
    };
  },
  methods: {
    _openPicker(u) {
      this.isActive = !this.isActive;
    },
    _handlePickerBlur() {
      this.isActive = !1;
    }
  }
}, b2 = { class: "sc-user-input--picker-wrapper" }, p2 = ["color"];
function g2(u, D, f, e, F, t) {
  const a = A("EmojiPicker");
  return E(), b("div", b2, [
    F.isActive ? (E(), L(a, {
      key: 0,
      "on-emoji-picked": f.onEmojiPicked,
      "on-blur": t._handlePickerBlur,
      colors: f.colors
    }, null, 8, ["on-emoji-picked", "on-blur", "colors"])) : S("", !0),
    l("button", {
      class: "sc-user-input--emoji-icon-wrapper",
      onClick: D[0] || (D[0] = Ru((...n) => t._openPicker && t._openPicker(...n), ["prevent"])),
      style: { marginTop: "4px", marginLeft: "-4px" }
    }, [
      (E(), b("svg", {
        id: "Layer_2",
        class: Cu(["sc-user-input--emoji-icon", { active: F.isActive }]),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "37.393px",
        height: "37.393px",
        viewBox: "0 0 37.393 37.393",
        enableBackground: "new 0 0 37.393 37.393",
        color: f.color,
        fill: "currentColor"
      }, D[1] || (D[1] = [
        l("g", null, [
          l("path", { d: `M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696\r
              C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696\r
              c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z` })
        ], -1),
        l("g", null, [
          l("circle", {
            cx: "12.379",
            cy: "14.359",
            r: "1.938"
          })
        ], -1),
        l("g", null, [
          l("circle", {
            cx: "24.371",
            cy: "14.414",
            r: "1.992"
          })
        ], -1),
        l("g", null, [
          l("path", { d: `M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373\r
              c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497\r
              c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z` })
        ], -1)
      ]), 10, p2))
    ])
  ]);
}
const m2 = /* @__PURE__ */ O(c2, [["render", g2], ["__scopeId", "data-v-26d85a9a"]]), h2 = {
  props: {
    onChange: {
      type: Function,
      required: !0
    },
    color: {
      type: String,
      required: !0
    },
    acceptedFileTypes: {
      type: Array,
      required: !1,
      default: () => ["*/*"]
    }
  },
  methods: {
    _handleClick() {
      this.$refs.inputRef.click(), this.$refs.inputRef.value = null;
    },
    _handleChange(u) {
      this.onChange(u.target.files[0]);
    }
  }
}, B2 = { style: { position: "relative" } }, _2 = ["color"], v2 = ["accept"];
function y2(u, D, f, e, F, t) {
  return E(), b("div", B2, [
    l("button", {
      class: "sc-user-input--file-icon-wrapper",
      type: "button",
      onClick: D[1] || (D[1] = (...a) => t._handleClick && t._handleClick(...a)),
      style: { marginTop: "8px" }
    }, [
      (E(), b("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        class: "sc-user-input--file-icon",
        x: "0px",
        y: "0px",
        width: "24px",
        height: "24px",
        viewBox: "0 0 37.393 37.393",
        enableBackground: "new 0 0 37.393 37.393",
        color: f.color,
        fill: "currentColor"
      }, D[2] || (D[2] = [
        l("path", { d: "M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z" }, null, -1)
      ]), 8, _2)),
      l("input", {
        ref: "inputRef",
        id: "file-input",
        type: "file",
        accept: f.acceptedFileTypes.join(","),
        onChange: D[0] || (D[0] = (...a) => t._handleChange && t._handleChange(...a))
      }, null, 40, v2)
    ])
  ]);
}
const w2 = /* @__PURE__ */ O(h2, [["render", y2], ["__scopeId", "data-v-148f7676"]]), A2 = {
  components: {
    IconBase: Vf
  },
  props: {
    color: {
      type: String,
      required: !0
    },
    tooltip: {
      type: String,
      default: ""
    }
  }
}, k2 = { class: "sc-user-input--button-icon-wrapper" };
function x2(u, D, f, e, F, t) {
  const a = A("IconBase");
  return E(), b("button", k2, [
    M(a, {
      color: f.color,
      width: "20",
      height: "20",
      "icon-name": f.tooltip
    }, {
      default: B(() => [
        h(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["color", "icon-name"])
  ]);
}
const T2 = /* @__PURE__ */ O(A2, [["render", x2], ["__scopeId", "data-v-64a990c8"]]), S2 = {
  props: {
    suggestions: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {};
  }
}, $2 = ["onClick"];
function j2(u, D, f, e, F, t) {
  return E(), b("div", {
    class: "sc-suggestions-row",
    style: k({ background: f.colors.messageList.bg })
  }, [
    (E(!0), b($u, null, Wu(f.suggestions, (a, n) => (E(), b("button", {
      key: n,
      class: "sc-suggestions-element",
      style: k({
        borderColor: f.colors.sentMessage.bg,
        color: f.colors.sentMessage.bg
      }),
      onClick: (r) => u.$emit("sendSuggestion", a)
    }, q(a), 13, $2))), 128))
  ], 4);
}
const O2 = /* @__PURE__ */ O(S2, [["render", j2]]), I2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2056%2056'%20style='enable-background:new%200%200%2056%2056;'%20xml:space='preserve'%3e%3cg%20id='svg_1'%3e%3cpath%20id='svg_2'%20fill='%23E9E9E0'%20d='m36.985,0l-29.022,0c-0.808,0%20-1.463,0.655%20-1.463,1.926l0,53.074c0,0.345%200.655,1%201.463,1l40.074,0c0.808,0%201.463,-0.655%201.463,-1l0,-42.022c0,-0.696%20-0.093,-0.92%20-0.257,-1.085l-11.636,-11.636c-0.165,-0.164%20-0.389,-0.257%20-0.622,-0.257z'/%3e%3cpolygon%20id='svg_3'%20fill='%23D9D7CA'%20points='37.5,0.151%2037.5,12%2049.349,12%20'/%3e%3cpath%20id='svg_4'%20fill='%2395A5A5'%20d='m48.037,56l-40.074,0c-0.808,0%20-1.463,-0.655%20-1.463,-1.463l0,-15.537l43,0l0,15.537c0,0.808%20-0.655,1.463%20-1.463,1.463z'/%3e%3cpath%20id='svg_9'%20fill='%23C8BDB8'%20d='m18.5,13l-6,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l6,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_10'%20fill='%23C8BDB8'%20d='m21.5,18l-9,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l9,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_11'%20fill='%23C8BDB8'%20d='m25.5,18c-0.26,0%20-0.521,-0.11%20-0.71,-0.29c-0.181,-0.19%20-0.29,-0.44%20-0.29,-0.71s0.109,-0.52%200.3,-0.71c0.36,-0.37%201.04,-0.37%201.41,0c0.18,0.19%200.29,0.45%200.29,0.71c0,0.26%20-0.11,0.52%20-0.29,0.71c-0.19,0.18%20-0.45,0.29%20-0.71,0.29z'/%3e%3cpath%20id='svg_12'%20fill='%23C8BDB8'%20d='m37.5,18l-8,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l8,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_13'%20fill='%23C8BDB8'%20d='m12.5,33c-0.26,0%20-0.521,-0.11%20-0.71,-0.29c-0.181,-0.19%20-0.29,-0.45%20-0.29,-0.71c0,-0.26%200.109,-0.52%200.29,-0.71c0.37,-0.37%201.05,-0.37%201.42,0.01c0.18,0.18%200.29,0.44%200.29,0.7c0,0.26%20-0.11,0.52%20-0.29,0.71c-0.19,0.18%20-0.45,0.29%20-0.71,0.29z'/%3e%3cpath%20id='svg_14'%20fill='%23C8BDB8'%20d='m24.5,33l-8,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l8,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_15'%20fill='%23C8BDB8'%20d='m43.5,18l-2,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l2,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_16'%20fill='%23C8BDB8'%20d='m34.5,23l-22,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l22,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_17'%20fill='%23C8BDB8'%20d='m43.5,23l-6,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l6,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_18'%20fill='%23C8BDB8'%20d='m16.5,28l-4,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l4,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_19'%20fill='%23C8BDB8'%20d='m30.5,28l-10,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l10,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3cpath%20id='svg_20'%20fill='%23C8BDB8'%20d='m43.5,28l-9,0c-0.553,0%20-1,-0.448%20-1,-1s0.447,-1%201,-1l9,0c0.553,0%201,0.448%201,1s-0.447,1%20-1,1z'/%3e%3c/g%3e%3cg%20id='svg_21'/%3e%3cg%20id='svg_22'/%3e%3cg%20id='svg_23'/%3e%3cg%20id='svg_24'/%3e%3cg%20id='svg_25'/%3e%3cg%20id='svg_26'/%3e%3cg%20id='svg_27'/%3e%3cg%20id='svg_28'/%3e%3cg%20id='svg_29'/%3e%3cg%20id='svg_30'/%3e%3cg%20id='svg_31'/%3e%3cg%20id='svg_32'/%3e%3cg%20id='svg_33'/%3e%3cg%20id='svg_34'/%3e%3cg%20id='svg_35'/%3e%3c/svg%3e", t1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.971%2047.971'%20style='enable-background:new%200%200%2047.971%2047.971;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88%20c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242%20C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879%20s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e", z2 = {}, P2 = { d: "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" };
function M2(u, D) {
  return E(), b("path", P2);
}
const N2 = /* @__PURE__ */ O(z2, [["render", M2]]), L2 = {}, q2 = { d: "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" };
function R2(u, D) {
  return E(), b("path", q2);
}
const H2 = /* @__PURE__ */ O(L2, [["render", R2]]), U2 = {
  components: {
    EmojiIcon: m2,
    FileIcons: w2,
    UserInputButton: T2,
    Suggestions: O2,
    IconCross: Wf,
    IconOk: N2,
    IconSend: H2
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          file: {
            img: I2,
            name: "default"
          },
          closeSvg: {
            img: t1,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: () => !1
    },
    showEmojiInText: {
      type: Boolean,
      default: () => !1
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => !1
    },
    onSubmit: {
      type: Function,
      required: !0
    },
    placeholder: {
      type: String,
      default: "Write something..."
    },
    colors: {
      type: Object,
      required: !0
    },
    acceptedFileTypes: {
      type: Array,
      required: !1,
      default: () => ["*/*"]
    }
  },
  data() {
    return {
      file: null,
      inputActive: !1,
      prevSelectionRange: null,
      imageData: null
    };
  },
  computed: {
    editMessageId() {
      return this.isEditing && Y.state.editMessage.id;
    },
    isEditing() {
      return Y.state.editMessage && Y.state.editMessage.id;
    }
  },
  watch: {
    editMessageId(u) {
      Y.state.editMessage != null && Y.state.editMessage != null ? (this.$refs.userInput.focus(), this.$refs.userInput.textContent = Y.state.editMessage.data.text) : this.$refs.userInput.textContent = "";
    }
  },
  mounted() {
    this.$event.$on("focusUserInput", () => {
      this.$refs.userInput && this.focusUserInput();
    }), document.addEventListener("selectionchange", () => {
      const u = document.getSelection();
      !u || !u.anchorNode || u.anchorNode != this.$refs.userInput && u.anchorNode.parentNode != this.$refs.userInput || (u.rangeCount ? this.prevSelectionRange = u.getRangeAt(0).cloneRange() : this.prevSelectionRange = null);
    });
  },
  methods: {
    cancelFile() {
      this.file = null;
    },
    setInputActive(u) {
      this.inputActive = u;
    },
    handleKey(u) {
      u.keyCode === 13 && !u.shiftKey ? (this.isEditing ? this._editText(u) : this._submitText(u), this._editFinish(), u.preventDefault()) : u.keyCode === 27 && (this._editFinish(), u.preventDefault());
    },
    handleInput(u) {
      this.$emit("onType", u.target.textContent);
    },
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput.focus();
      });
    },
    _submitSuggestion(u) {
      this.onSubmit({ author: "me", type: "text", data: { text: u } });
    },
    _checkSubmitSuccess(u) {
      Promise !== void 0 ? Promise.resolve(u).then(
        (function(D) {
          (D === void 0 || D) && (this.file = null, this.$refs.userInput.innerHTML = "");
        }).bind(this)
      ) : (this.file = null, this.$refs.userInput.innerHTML = "");
    },
    _submitText(u) {
      const D = this.$refs.userInput.textContent, f = this.file;
      f ? this._submitTextWhenFile(u, D, f) : D && D.length > 0 && this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "text",
          data: { text: D }
        })
      );
    },
    _submitTextWhenFile(u, D, f) {
      D && D.length > 0 ? this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "file",
          data: { text: D, file: f }
        })
      ) : this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "file",
          data: { file: f }
        })
      );
    },
    _editText(u) {
      const D = this.$refs.userInput.textContent;
      D && D.length && (this.$emit("edit", {
        author: "me",
        type: "text",
        id: Y.state.editMessage.id,
        data: { text: D }
      }), this._editFinish());
    },
    _handleEmojiPicked(u) {
      this.showEmojiInText ? this._addToTextEmoji(u) : this._submitEmoji(u);
    },
    _submitEmoji(u) {
      this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "emoji",
          data: { emoji: u }
        })
      );
    },
    _addToTextEmoji(u) {
      let D = this.prevSelectionRange;
      D || (this.$refs.userInput.firstChild || this.$refs.userInput.append(document.createTextNode("")), D = document.createRange(), D.setStart(this.$refs.userInput.firstChild, this.$refs.userInput.textContent.length), D.collapse(!0));
      let f = window.getSelection();
      f.removeAllRanges(), f.addRange(D);
      let e = document.createTextNode(u);
      D.deleteContents(), D.insertNode(e), D.collapse(!1), this.$refs.userInput.focus();
    },
    _handleFileSubmit(u) {
      if (this.file = u, u.type.startsWith("image/")) {
        const D = new FileReader();
        D.onload = (f) => {
          var e;
          this.imageData = (e = f.target) == null ? void 0 : e.result;
        }, D.readAsDataURL(u);
      }
      u.value = u;
    },
    _editFinish() {
      Y.setState("editMessage", null);
    }
  }
}, V2 = { class: "flex flex-row items-center gap-3" }, W2 = { class: "icon-file-message" }, G2 = ["src", "alt"], Y2 = ["src"], X2 = ["placeholder"], K2 = { class: "sc-user-input--buttons" }, Z2 = {
  key: 0,
  class: "sc-user-input--button"
}, Q2 = {
  key: 1,
  class: "sc-user-input--button"
}, J2 = {
  key: 2,
  class: "sc-user-input--button"
}, u8 = { class: "sc-user-input--button" };
function D8(u, D, f, e, F, t) {
  const a = A("Suggestions"), n = A("EmojiIcon"), r = A("FileIcons"), d = A("IconCross"), i = A("UserInputButton"), o = A("IconOk"), s = A("IconSend");
  return E(), b("div", null, [
    M(a, {
      suggestions: f.suggestions,
      colors: f.colors,
      onSendSuggestion: t._submitSuggestion
    }, null, 8, ["suggestions", "colors", "onSendSuggestion"]),
    F.file ? (E(), b("div", {
      key: 0,
      class: "file-container",
      style: k({
        backgroundColor: f.colors.userInput.bg,
        color: f.colors.userInput.text
      })
    }, [
      l("div", V2, [
        l("span", W2, [
          F.imageData ? (E(), b("img", {
            key: 1,
            src: F.imageData,
            alt: "Uploaded Image",
            style: { height: "65px", "object-fit": "cover" }
          }, null, 8, Y2)) : (E(), b("img", {
            key: 0,
            src: f.icons.file.img,
            alt: f.icons.file.name,
            style: { height: "65px" }
          }, null, 8, G2))
        ]),
        l("span", null, q(
          // @ts-ignore
          F.file.name
        ), 1),
        l("span", {
          class: "delete-file-message",
          onClick: D[0] || (D[0] = (C) => t.cancelFile())
        }, [
          (E(), b("svg", {
            viewBox: "0 0 47.971 47.971",
            xmlns: "http://www.w3.org/2000/svg",
            style: k(`width: 15px; height: 15px; fill: ${f.colors.userInput.text}`)
          }, D[6] || (D[6] = [
            l("path", { d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" }, null, -1)
          ]), 4))
        ])
      ])
    ], 4)) : S("", !0),
    l("form", {
      class: Cu(["sc-user-input", { active: F.inputActive }]),
      style: k({ background: f.colors.userInput.bg })
    }, [
      l("div", {
        ref: "userInput",
        role: "button",
        tabIndex: "0",
        contentEditable: "true",
        placeholder: f.placeholder,
        class: "sc-user-input--text",
        style: k({ color: f.colors.userInput.text }),
        onFocus: D[1] || (D[1] = (C) => t.setInputActive(!0)),
        onBlur: D[2] || (D[2] = (C) => t.setInputActive(!1)),
        onKeydown: D[3] || (D[3] = (...C) => t.handleKey && t.handleKey(...C)),
        onInput: D[4] || (D[4] = (...C) => t.handleInput && t.handleInput(...C)),
        "on:focusUserInput": D[5] || (D[5] = (C) => t.focusUserInput())
      }, null, 44, X2),
      l("div", K2, [
        D[7] || (D[7] = l("div", { class: "sc-user-input--button" }, null, -1)),
        f.showEmoji && !t.isEditing ? (E(), b("div", Z2, [
          M(n, {
            "on-emoji-picked": t._handleEmojiPicked,
            color: f.colors.userInput.text,
            colors: f.colors
          }, null, 8, ["on-emoji-picked", "color", "colors"])
        ])) : S("", !0),
        f.showFile && !t.isEditing ? (E(), b("div", Q2, [
          M(r, {
            "on-change": t._handleFileSubmit,
            color: f.colors.userInput.text,
            "accepted-file-types": f.acceptedFileTypes
          }, null, 8, ["on-change", "color", "accepted-file-types"])
        ])) : S("", !0),
        t.isEditing ? (E(), b("div", J2, [
          M(i, {
            color: f.colors.userInput.text,
            tooltip: "cancel",
            onClick: Ru(t._editFinish, ["prevent"])
          }, {
            default: B(() => [
              M(d)
            ]),
            _: 1
          }, 8, ["color", "onClick"])
        ])) : S("", !0),
        l("div", u8, [
          t.isEditing ? (E(), L(i, {
            key: 0,
            color: f.colors.userInput.text,
            tooltip: "Edit",
            onClick: Ru(t._editText, ["prevent"])
          }, {
            default: B(() => [
              M(o)
            ]),
            _: 1
          }, 8, ["color", "onClick"])) : (E(), L(i, {
            key: 1,
            color: f.colors.userInput.text,
            tooltip: "Send",
            onClick: Ru(t._submitText, ["prevent"])
          }, {
            default: B(() => [
              M(s)
            ]),
            _: 1
          }, 8, ["color", "onClick"]))
        ])
      ])
    ], 6)
  ]);
}
const f8 = /* @__PURE__ */ O(U2, [["render", D8]]), e8 = {
  props: {
    participants: {
      type: Array,
      required: !0
    },
    colors: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    userListColor() {
      return Object.assign({
        userList: {
          bg: "#FFFFFF",
          text: "#000000"
        }
      }, this.colors);
    }
  }
}, t8 = { style: { "padding-top": "5px" } }, F8 = { style: { "text-align": "center" } }, a8 = ["src"];
function n8(u, D, f, e, F, t) {
  return E(), b("div", {
    class: "user-list",
    style: k({ background: t.userListColor.userList.bg })
  }, [
    l("table", t8, [
      l("tbody", null, [
        (E(!0), b($u, null, Wu(f.participants, (a) => (E(), b("tr", {
          key: a.id
        }, [
          l("td", F8, [
            l("img", {
              src: a.imageUrl,
              class: "img-msg"
            }, null, 8, a8)
          ]),
          l("td", {
            class: "user-element",
            style: k({ color: t.userListColor.userList.text })
          }, q(a.name), 5)
        ]))), 128))
      ])
    ])
  ], 4);
}
const r8 = /* @__PURE__ */ O(e8, [["render", n8], ["__scopeId", "data-v-9b27d951"]]), i8 = {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header: G1,
    MessageList: a2,
    UserInput: f8,
    UserList: r8
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: !1
    },
    showEmojiInText: {
      type: Boolean,
      default: !1
    },
    showFile: {
      type: Boolean,
      default: !1
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    participants: {
      type: Array,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    onUserInputSubmit: {
      type: Function,
      required: !0
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => !1
    },
    placeholder: {
      type: String,
      required: !0
    },
    showTypingIndicator: {
      type: String,
      required: !0
    },
    colors: {
      type: Object,
      required: !0
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: !0
    },
    messageStyling: {
      type: Boolean,
      required: !0
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: !0
    },
    confirmationDeletionMessage: {
      type: String,
      required: !0
    },
    messageMargin: {
      type: Object,
      required: !1
    },
    acceptedFileTypes: {
      type: Array,
      required: !1,
      default: () => ["*/*"]
    }
  },
  data() {
    return {
      showUserList: !1
    };
  },
  computed: {
    messages() {
      return this.messageList;
    }
  },
  methods: {
    handleUserListToggle(u) {
      this.showUserList = u;
    },
    getSuggestions() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : [];
    }
  }
};
function d8(u, D, f, e, F, t) {
  const a = A("Header"), n = A("UserList"), r = A("MessageList"), d = A("UserInput");
  return E(), b("div", {
    class: Cu(["sc-chat-window", { opened: f.isOpen, closed: !f.isOpen }])
  }, [
    f.showHeader ? (E(), L(a, {
      key: 0,
      title: f.title,
      colors: f.colors,
      onClose: D[0] || (D[0] = (i) => u.$emit("close")),
      onMinimize: D[1] || (D[1] = (i) => u.$emit("minimize")),
      onUserList: t.handleUserListToggle
    }, {
      default: B(() => [
        h(u.$slots, "header", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["title", "colors", "onUserList"])) : S("", !0),
    F.showUserList ? (E(), L(n, {
      key: 1,
      colors: f.colors,
      participants: f.participants
    }, null, 8, ["colors", "participants"])) : S("", !0),
    F.showUserList ? S("", !0) : (E(), L(r, {
      key: 2,
      messages: t.messages,
      participants: f.participants,
      "show-typing-indicator": f.showTypingIndicator,
      colors: f.colors,
      "always-scroll-to-bottom": f.alwaysScrollToBottom,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage,
      "message-styling": f.messageStyling,
      "message-margin": f.messageMargin,
      onScrollToTop: D[2] || (D[2] = (i) => u.$emit("scrollToTop")),
      onRemove: D[3] || (D[3] = (i) => u.$emit("remove", i))
    }, {
      "user-avatar": B((i) => [
        h(u.$slots, "user-avatar", {
          user: i.user,
          message: i.message
        }, void 0, !0)
      ]),
      "text-message-body": B((i) => [
        h(u.$slots, "text-message-body", {
          message: i.message,
          messageText: i.messageText,
          messageColors: i.messageColors,
          me: i.me
        }, void 0, !0)
      ]),
      "system-message-body": B((i) => [
        h(u.$slots, "system-message-body", {
          message: i.message
        }, void 0, !0)
      ]),
      "text-message-toolbox": B((i) => [
        h(u.$slots, "text-message-toolbox", {
          message: i.message,
          me: i.me
        }, void 0, !0)
      ]),
      "file-message-body": B((i) => [
        h(u.$slots, "file-message-body", {
          message: i.message,
          messageColors: i.messageColors
        }, void 0, !0)
      ]),
      "emoji-message-body": B((i) => [
        h(u.$slots, "emoji-message-body", {
          message: i.message
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["messages", "participants", "show-typing-indicator", "colors", "always-scroll-to-bottom", "show-confirmation-deletion", "confirmation-deletion-message", "message-styling", "message-margin"])),
    F.showUserList ? S("", !0) : (E(), L(d, {
      key: 3,
      "show-emoji": f.showEmoji,
      "show-emoji-in-text": f.showEmojiInText,
      "on-submit": f.onUserInputSubmit,
      suggestions: t.getSuggestions(),
      "show-file": f.showFile,
      placeholder: f.placeholder,
      colors: f.colors,
      "accepted-file-types": f.acceptedFileTypes,
      onOnType: D[4] || (D[4] = (i) => u.$emit("onType", i)),
      onEdit: D[5] || (D[5] = (i) => u.$emit("edit", i))
    }, null, 8, ["show-emoji", "show-emoji-in-text", "on-submit", "suggestions", "show-file", "placeholder", "colors", "accepted-file-types"]))
  ], 2);
}
const s8 = /* @__PURE__ */ O(i8, [["render", d8], ["__scopeId", "data-v-7c7ecf7f"]]), o8 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='18'%20height='18'%3e%3crect%20id='backgroundrect'%20width='100%25'%20height='100%25'%20x='0'%20y='0'%20fill='none'%20stroke='none'/%3e%3cdefs%3e%3cstyle%3e.a{fill:none;}.b{fill:%234e8cff;}.c{clip-path:url(%23a);}.d{fill:%23fff;}.e{fill:%23eff4f9;}%3c/style%3e%3cclipPath%20id='a'%3e%3cpath%20class='a'%20d='M%200%200%20H%2017.555%20v%2017.555%20H%200%20Z'%20id='svg_1'%20transform=''/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='currentLayer'%20style=''%3e%3ctitle%3eLayer%201%3c/title%3e%3cg%20id='svg_2'%20class='selected'%20transform=''%3e%3cg%20id='svg_3'%20transform=''%3e%3cg%20class='c'%20id='svg_4'%20transform=''%3e%3cg%20id='svg_5'%20transform=''%3e%3cpath%20class='d'%20d='M%2017.556%208.77842%20a%208.778%208.778%200%200%200%20-8.778%20-8.778%20a%208.778%208.778%200%200%200%20-8.778%208.778%20a%208.745%208.745%200%200%200%202.26%205.879%20v%201.442%20c%200%200.8%200.492%201.457%201.1%201.457%20h%205.83%20a%200.843%200.843%200%200%200%200.183%20-0.02%20a%208.778%208.778%200%200%200%208.184%20-8.757'%20id='svg_6'%20transform=''/%3e%3c/g%3e%3cg%20id='svg_7'%20transform=''%3e%3cpath%20class='e'%20d='M%203.16148%208.921%20a%209.292%209.292%200%200%201%206.38%20-8.888%20c%20-0.252%20-0.022%20-0.506%20-0.033%20-0.763%20-0.033%20a%208.774%208.774%200%200%200%20-8.778%208.778%20A%209.508%209.508%200%200%200%202.22447%2014.7003%20c%200.005%200%200%200.009%200%200.01%20c%20-0.311%200.352%20-1.924%202.849%200.021%202.849%20h%202.25%20c%20-1.23%20-0.022%201.263%20-2.107%200.269%20-3.494%20a%208.225%208.225%200%200%201%20-1.6%20-5.141'%20id='svg_8'%20transform=''/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", C8 = {
  components: {
    ChatWindow: s8
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          open: {
            img: o8,
            name: "default"
          },
          close: {
            img: t1,
            name: "default"
          },
          minimize: {
            img: null,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: !1
    },
    autoFocus: {
      type: Boolean,
      default: !0
    },
    showEmojiInText: {
      type: Boolean,
      default: !1
    },
    showEdition: {
      type: Boolean,
      default: !1
    },
    showDeletion: {
      type: Boolean,
      default: !1
    },
    showConfirmationDeletion: {
      type: Boolean,
      default: !1
    },
    confirmationDeletionMessage: {
      type: String,
      default: "Do you really want to delete the message?"
    },
    isOpen: {
      type: Boolean,
      required: !0
    },
    open: {
      type: Function,
      required: !0
    },
    close: {
      type: Function,
      required: !0
    },
    minimize: {
      type: Function,
      required: !1
    },
    showFile: {
      type: Boolean,
      default: !1
    },
    showLauncher: {
      type: Boolean,
      default: !0
    },
    showCloseButton: {
      type: Boolean,
      default: !0
    },
    showMinimizeButton: {
      type: Boolean,
      required: !1,
      default: !1
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    participants: {
      type: Array,
      required: !0
    },
    title: {
      type: String,
      default: () => ""
    },
    titleImageUrl: {
      type: String,
      default: () => ""
    },
    onMessageWasSent: {
      type: Function,
      required: !0
    },
    messageList: {
      type: Array,
      default: () => []
    },
    newMessagesCount: {
      type: Number,
      default: () => 0
    },
    placeholder: {
      type: String,
      default: "Write a message..."
    },
    showTypingIndicator: {
      type: String,
      default: () => ""
    },
    messageMargin: {
      type: Object,
      required: !1
    },
    colors: {
      type: Object,
      validator: (u) => "header" in u && "bg" in u.header && "text" in u.header && "launcher" in u && "bg" in u.launcher && "messageList" in u && "bg" in u.messageList && "sentMessage" in u && "bg" in u.sentMessage && "text" in u.sentMessage && "receivedMessage" in u && "bg" in u.receivedMessage && "text" in u.receivedMessage && "userInput" in u && "bg" in u.userInput && "text" in u.userInput,
      default: function() {
        return {
          header: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          launcher: {
            bg: "#4e8cff"
          },
          messageList: {
            bg: "#ffffff"
          },
          sentMessage: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          receivedMessage: {
            bg: "#f4f7f9",
            text: "#ffffff"
          },
          userInput: {
            bg: "#f4f7f9",
            text: "#565867"
          }
        };
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: () => !1
    },
    messageStyling: {
      type: Boolean,
      default: () => !1
    },
    disableUserListToggle: {
      type: Boolean,
      default: !1
    },
    acceptedFileTypes: {
      type: Array,
      default: () => ["*/*"]
    }
  },
  computed: {
    chatWindowTitle() {
      return this.title !== "" ? this.title : this.participants.length === 0 ? "You" : this.participants.length > 1 ? "You, " + this.participants[0].name + " & others" : "You & " + this.participants[0].name;
    }
  },
  watch: {
    $props: {
      deep: !0,
      immediate: !0,
      handler(u) {
        for (const D in u)
          Y.setState(D, u[D]);
      }
    }
  },
  methods: {
    openAndFocus() {
      this.open(), this.autoFocus && this.$event.$emit("focusUserInput");
    }
  }
}, l8 = {
  key: 0,
  class: "sc-new-messsages-count"
}, E8 = ["src", "alt"], c8 = ["src", "alt"];
function b8(u, D, f, e, F, t) {
  const a = A("ChatWindow");
  return E(), b("div", null, [
    f.showLauncher ? (E(), b("div", {
      key: 0,
      class: Cu(["sc-launcher", { opened: f.isOpen }]),
      style: k({ backgroundColor: f.colors.launcher.bg }),
      onClick: D[0] || (D[0] = Ru((n) => f.isOpen ? f.close() : t.openAndFocus(), ["prevent"]))
    }, [
      f.newMessagesCount > 0 && !f.isOpen ? (E(), b("div", l8, q(f.newMessagesCount), 1)) : S("", !0),
      f.isOpen ? (E(), b("img", {
        key: 1,
        class: "sc-closed-icon",
        src: f.icons.close.img,
        alt: f.icons.close.name
      }, null, 8, E8)) : (E(), b("img", {
        key: 2,
        class: "sc-open-icon",
        src: f.icons.open.img,
        alt: f.icons.open.name
      }, null, 8, c8))
    ], 6)) : S("", !0),
    M(a, {
      "message-list": f.messageList,
      "on-user-input-submit": f.onMessageWasSent,
      participants: f.participants,
      title: t.chatWindowTitle,
      "is-open": f.isOpen,
      "show-emoji": f.showEmoji,
      "show-emoji-in-text": f.showEmojiInText,
      "show-file": f.showFile,
      "show-confirmation-deletion": f.showConfirmationDeletion,
      "confirmation-deletion-message": f.confirmationDeletionMessage,
      "show-header": f.showHeader,
      placeholder: f.placeholder,
      "show-typing-indicator": f.showTypingIndicator,
      colors: f.colors,
      "always-scroll-to-bottom": f.alwaysScrollToBottom,
      "message-styling": f.messageStyling,
      "message-margin": f.messageMargin,
      "accepted-file-types": f.acceptedFileTypes,
      "show-minimize-button": f.showMinimizeButton,
      onClose: f.close,
      onMinimize: f.minimize,
      onScrollToTop: D[1] || (D[1] = (n) => u.$emit("scrollToTop")),
      onOnType: D[2] || (D[2] = (n) => u.$emit("onType", n)),
      onEdit: D[3] || (D[3] = (n) => u.$emit("edit", n)),
      onRemove: D[4] || (D[4] = (n) => u.$emit("remove", n))
    }, {
      header: B(() => [
        h(u.$slots, "header", {}, void 0, !0)
      ]),
      "user-avatar": B((n) => [
        h(u.$slots, "user-avatar", {
          user: n.user,
          message: n.message
        }, void 0, !0)
      ]),
      "text-message-body": B((n) => [
        h(u.$slots, "text-message-body", {
          message: n.message,
          messageText: n.messageText,
          messageColors: n.messageColors,
          me: n.me
        }, void 0, !0)
      ]),
      "system-message-body": B((n) => [
        h(u.$slots, "system-message-body", {
          message: n.message
        }, void 0, !0)
      ]),
      "text-message-toolbox": B((n) => [
        h(u.$slots, "text-message-toolbox", {
          message: n.message,
          me: n.me
        }, void 0, !0)
      ]),
      "file-message-body": B((n) => [
        h(u.$slots, "file-message-body", {
          message: n.message,
          messageColors: n.messageColors
        }, void 0, !0)
      ]),
      "emoji-message-body": B((n) => [
        h(u.$slots, "emoji-message-body", {
          message: n.message
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["message-list", "on-user-input-submit", "participants", "title", "is-open", "show-emoji", "show-emoji-in-text", "show-file", "show-confirmation-deletion", "confirmation-deletion-message", "show-header", "placeholder", "show-typing-indicator", "colors", "always-scroll-to-bottom", "message-styling", "message-margin", "accepted-file-types", "show-minimize-button", "onClose", "onMinimize"])
  ]);
}
const p8 = /* @__PURE__ */ O(C8, [["render", b8], ["__scopeId", "data-v-1549de42"]]);
var V = "top", uu = "bottom", Du = "right", W = "left", XD = "auto", Qu = [V, uu, Du, W], ju = "start", Yu = "end", g8 = "clippingParents", F1 = "viewport", qu = "popper", m8 = "reference", Bf = /* @__PURE__ */ Qu.reduce(function(u, D) {
  return u.concat([D + "-" + ju, D + "-" + Yu]);
}, []), bD = /* @__PURE__ */ [].concat(Qu, [XD]).reduce(function(u, D) {
  return u.concat([D, D + "-" + ju, D + "-" + Yu]);
}, []), h8 = "beforeRead", B8 = "read", _8 = "afterRead", v8 = "beforeMain", y8 = "main", w8 = "afterMain", A8 = "beforeWrite", k8 = "write", x8 = "afterWrite", T8 = [h8, B8, _8, v8, y8, w8, A8, k8, x8];
function nu(u) {
  return u ? (u.nodeName || "").toLowerCase() : null;
}
function K(u) {
  if (u == null)
    return window;
  if (u.toString() !== "[object Window]") {
    var D = u.ownerDocument;
    return D && D.defaultView || window;
  }
  return u;
}
function yu(u) {
  var D = K(u).Element;
  return u instanceof D || u instanceof Element;
}
function Q(u) {
  var D = K(u).HTMLElement;
  return u instanceof D || u instanceof HTMLElement;
}
function KD(u) {
  if (typeof ShadowRoot > "u")
    return !1;
  var D = K(u).ShadowRoot;
  return u instanceof D || u instanceof ShadowRoot;
}
function S8(u) {
  var D = u.state;
  Object.keys(D.elements).forEach(function(f) {
    var e = D.styles[f] || {}, F = D.attributes[f] || {}, t = D.elements[f];
    !Q(t) || !nu(t) || (Object.assign(t.style, e), Object.keys(F).forEach(function(a) {
      var n = F[a];
      n === !1 ? t.removeAttribute(a) : t.setAttribute(a, n === !0 ? "" : n);
    }));
  });
}
function $8(u) {
  var D = u.state, f = {
    popper: {
      position: D.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(D.elements.popper.style, f.popper), D.styles = f, D.elements.arrow && Object.assign(D.elements.arrow.style, f.arrow), function() {
    Object.keys(D.elements).forEach(function(e) {
      var F = D.elements[e], t = D.attributes[e] || {}, a = Object.keys(D.styles.hasOwnProperty(e) ? D.styles[e] : f[e]), n = a.reduce(function(r, d) {
        return r[d] = "", r;
      }, {});
      !Q(F) || !nu(F) || (Object.assign(F.style, n), Object.keys(t).forEach(function(r) {
        F.removeAttribute(r);
      }));
    });
  };
}
const j8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: S8,
  effect: $8,
  requires: ["computeStyles"]
};
function au(u) {
  return u.split("-")[0];
}
var Bu = Math.max, lD = Math.min, Ou = Math.round;
function jD() {
  var u = navigator.userAgentData;
  return u != null && u.brands && Array.isArray(u.brands) ? u.brands.map(function(D) {
    return D.brand + "/" + D.version;
  }).join(" ") : navigator.userAgent;
}
function a1() {
  return !/^((?!chrome|android).)*safari/i.test(jD());
}
function Iu(u, D, f) {
  D === void 0 && (D = !1), f === void 0 && (f = !1);
  var e = u.getBoundingClientRect(), F = 1, t = 1;
  D && Q(u) && (F = u.offsetWidth > 0 && Ou(e.width) / u.offsetWidth || 1, t = u.offsetHeight > 0 && Ou(e.height) / u.offsetHeight || 1);
  var a = yu(u) ? K(u) : window, n = a.visualViewport, r = !a1() && f, d = (e.left + (r && n ? n.offsetLeft : 0)) / F, i = (e.top + (r && n ? n.offsetTop : 0)) / t, o = e.width / F, s = e.height / t;
  return {
    width: o,
    height: s,
    top: i,
    right: d + o,
    bottom: i + s,
    left: d,
    x: d,
    y: i
  };
}
function ZD(u) {
  var D = Iu(u), f = u.offsetWidth, e = u.offsetHeight;
  return Math.abs(D.width - f) <= 1 && (f = D.width), Math.abs(D.height - e) <= 1 && (e = D.height), {
    x: u.offsetLeft,
    y: u.offsetTop,
    width: f,
    height: e
  };
}
function n1(u, D) {
  var f = D.getRootNode && D.getRootNode();
  if (u.contains(D))
    return !0;
  if (f && KD(f)) {
    var e = D;
    do {
      if (e && u.isSameNode(e))
        return !0;
      e = e.parentNode || e.host;
    } while (e);
  }
  return !1;
}
function du(u) {
  return K(u).getComputedStyle(u);
}
function O8(u) {
  return ["table", "td", "th"].indexOf(nu(u)) >= 0;
}
function Eu(u) {
  return ((yu(u) ? u.ownerDocument : (
    // $FlowFixMe[prop-missing]
    u.document
  )) || window.document).documentElement;
}
function pD(u) {
  return nu(u) === "html" ? u : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    u.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    u.parentNode || // DOM Element detected
    (KD(u) ? u.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Eu(u)
  );
}
function _f(u) {
  return !Q(u) || // https://github.com/popperjs/popper-core/issues/837
  du(u).position === "fixed" ? null : u.offsetParent;
}
function I8(u) {
  var D = /firefox/i.test(jD()), f = /Trident/i.test(jD());
  if (f && Q(u)) {
    var e = du(u);
    if (e.position === "fixed")
      return null;
  }
  var F = pD(u);
  for (KD(F) && (F = F.host); Q(F) && ["html", "body"].indexOf(nu(F)) < 0; ) {
    var t = du(F);
    if (t.transform !== "none" || t.perspective !== "none" || t.contain === "paint" || ["transform", "perspective"].indexOf(t.willChange) !== -1 || D && t.willChange === "filter" || D && t.filter && t.filter !== "none")
      return F;
    F = F.parentNode;
  }
  return null;
}
function Ju(u) {
  for (var D = K(u), f = _f(u); f && O8(f) && du(f).position === "static"; )
    f = _f(f);
  return f && (nu(f) === "html" || nu(f) === "body" && du(f).position === "static") ? D : f || I8(u) || D;
}
function QD(u) {
  return ["top", "bottom"].indexOf(u) >= 0 ? "x" : "y";
}
function Hu(u, D, f) {
  return Bu(u, lD(D, f));
}
function z8(u, D, f) {
  var e = Hu(u, D, f);
  return e > f ? f : e;
}
function r1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function i1(u) {
  return Object.assign({}, r1(), u);
}
function d1(u, D) {
  return D.reduce(function(f, e) {
    return f[e] = u, f;
  }, {});
}
var P8 = function(D, f) {
  return D = typeof D == "function" ? D(Object.assign({}, f.rects, {
    placement: f.placement
  })) : D, i1(typeof D != "number" ? D : d1(D, Qu));
};
function M8(u) {
  var D, f = u.state, e = u.name, F = u.options, t = f.elements.arrow, a = f.modifiersData.popperOffsets, n = au(f.placement), r = QD(n), d = [W, Du].indexOf(n) >= 0, i = d ? "height" : "width";
  if (!(!t || !a)) {
    var o = P8(F.padding, f), s = ZD(t), C = r === "y" ? V : W, c = r === "y" ? uu : Du, p = f.rects.reference[i] + f.rects.reference[r] - a[r] - f.rects.popper[i], g = a[r] - f.rects.reference[r], _ = Ju(t), y = _ ? r === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, x = p / 2 - g / 2, m = o[C], v = y - s[i] - o[c], w = y / 2 - s[i] / 2 + x, j = Hu(m, w, v), N = r;
    f.modifiersData[e] = (D = {}, D[N] = j, D.centerOffset = j - w, D);
  }
}
function N8(u) {
  var D = u.state, f = u.options, e = f.element, F = e === void 0 ? "[data-popper-arrow]" : e;
  F != null && (typeof F == "string" && (F = D.elements.popper.querySelector(F), !F) || n1(D.elements.popper, F) && (D.elements.arrow = F));
}
const L8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: M8,
  effect: N8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function zu(u) {
  return u.split("-")[1];
}
var q8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function R8(u, D) {
  var f = u.x, e = u.y, F = D.devicePixelRatio || 1;
  return {
    x: Ou(f * F) / F || 0,
    y: Ou(e * F) / F || 0
  };
}
function vf(u) {
  var D, f = u.popper, e = u.popperRect, F = u.placement, t = u.variation, a = u.offsets, n = u.position, r = u.gpuAcceleration, d = u.adaptive, i = u.roundOffsets, o = u.isFixed, s = a.x, C = s === void 0 ? 0 : s, c = a.y, p = c === void 0 ? 0 : c, g = typeof i == "function" ? i({
    x: C,
    y: p
  }) : {
    x: C,
    y: p
  };
  C = g.x, p = g.y;
  var _ = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), x = W, m = V, v = window;
  if (d) {
    var w = Ju(f), j = "clientHeight", N = "clientWidth";
    if (w === K(f) && (w = Eu(f), du(w).position !== "static" && n === "absolute" && (j = "scrollHeight", N = "scrollWidth")), w = w, F === V || (F === W || F === Du) && t === Yu) {
      m = uu;
      var P = o && w === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[j]
      );
      p -= P - e.height, p *= r ? 1 : -1;
    }
    if (F === W || (F === V || F === uu) && t === Yu) {
      x = Du;
      var I = o && w === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[N]
      );
      C -= I - e.width, C *= r ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: n
  }, d && q8), fu = i === !0 ? R8({
    x: C,
    y: p
  }, K(f)) : {
    x: C,
    y: p
  };
  if (C = fu.x, p = fu.y, r) {
    var U;
    return Object.assign({}, H, (U = {}, U[m] = y ? "0" : "", U[x] = _ ? "0" : "", U.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + p + "px)" : "translate3d(" + C + "px, " + p + "px, 0)", U));
  }
  return Object.assign({}, H, (D = {}, D[m] = y ? p + "px" : "", D[x] = _ ? C + "px" : "", D.transform = "", D));
}
function H8(u) {
  var D = u.state, f = u.options, e = f.gpuAcceleration, F = e === void 0 ? !0 : e, t = f.adaptive, a = t === void 0 ? !0 : t, n = f.roundOffsets, r = n === void 0 ? !0 : n, d = {
    placement: au(D.placement),
    variation: zu(D.placement),
    popper: D.elements.popper,
    popperRect: D.rects.popper,
    gpuAcceleration: F,
    isFixed: D.options.strategy === "fixed"
  };
  D.modifiersData.popperOffsets != null && (D.styles.popper = Object.assign({}, D.styles.popper, vf(Object.assign({}, d, {
    offsets: D.modifiersData.popperOffsets,
    position: D.options.strategy,
    adaptive: a,
    roundOffsets: r
  })))), D.modifiersData.arrow != null && (D.styles.arrow = Object.assign({}, D.styles.arrow, vf(Object.assign({}, d, {
    offsets: D.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: r
  })))), D.attributes.popper = Object.assign({}, D.attributes.popper, {
    "data-popper-placement": D.placement
  });
}
const U8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: H8,
  data: {}
};
var rD = {
  passive: !0
};
function V8(u) {
  var D = u.state, f = u.instance, e = u.options, F = e.scroll, t = F === void 0 ? !0 : F, a = e.resize, n = a === void 0 ? !0 : a, r = K(D.elements.popper), d = [].concat(D.scrollParents.reference, D.scrollParents.popper);
  return t && d.forEach(function(i) {
    i.addEventListener("scroll", f.update, rD);
  }), n && r.addEventListener("resize", f.update, rD), function() {
    t && d.forEach(function(i) {
      i.removeEventListener("scroll", f.update, rD);
    }), n && r.removeEventListener("resize", f.update, rD);
  };
}
const W8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: V8,
  data: {}
};
var G8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function oD(u) {
  return u.replace(/left|right|bottom|top/g, function(D) {
    return G8[D];
  });
}
var Y8 = {
  start: "end",
  end: "start"
};
function yf(u) {
  return u.replace(/start|end/g, function(D) {
    return Y8[D];
  });
}
function JD(u) {
  var D = K(u), f = D.pageXOffset, e = D.pageYOffset;
  return {
    scrollLeft: f,
    scrollTop: e
  };
}
function uf(u) {
  return Iu(Eu(u)).left + JD(u).scrollLeft;
}
function X8(u, D) {
  var f = K(u), e = Eu(u), F = f.visualViewport, t = e.clientWidth, a = e.clientHeight, n = 0, r = 0;
  if (F) {
    t = F.width, a = F.height;
    var d = a1();
    (d || !d && D === "fixed") && (n = F.offsetLeft, r = F.offsetTop);
  }
  return {
    width: t,
    height: a,
    x: n + uf(u),
    y: r
  };
}
function K8(u) {
  var D, f = Eu(u), e = JD(u), F = (D = u.ownerDocument) == null ? void 0 : D.body, t = Bu(f.scrollWidth, f.clientWidth, F ? F.scrollWidth : 0, F ? F.clientWidth : 0), a = Bu(f.scrollHeight, f.clientHeight, F ? F.scrollHeight : 0, F ? F.clientHeight : 0), n = -e.scrollLeft + uf(u), r = -e.scrollTop;
  return du(F || f).direction === "rtl" && (n += Bu(f.clientWidth, F ? F.clientWidth : 0) - t), {
    width: t,
    height: a,
    x: n,
    y: r
  };
}
function Df(u) {
  var D = du(u), f = D.overflow, e = D.overflowX, F = D.overflowY;
  return /auto|scroll|overlay|hidden/.test(f + F + e);
}
function s1(u) {
  return ["html", "body", "#document"].indexOf(nu(u)) >= 0 ? u.ownerDocument.body : Q(u) && Df(u) ? u : s1(pD(u));
}
function Uu(u, D) {
  var f;
  D === void 0 && (D = []);
  var e = s1(u), F = e === ((f = u.ownerDocument) == null ? void 0 : f.body), t = K(e), a = F ? [t].concat(t.visualViewport || [], Df(e) ? e : []) : e, n = D.concat(a);
  return F ? n : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    n.concat(Uu(pD(a)))
  );
}
function OD(u) {
  return Object.assign({}, u, {
    left: u.x,
    top: u.y,
    right: u.x + u.width,
    bottom: u.y + u.height
  });
}
function Z8(u, D) {
  var f = Iu(u, !1, D === "fixed");
  return f.top = f.top + u.clientTop, f.left = f.left + u.clientLeft, f.bottom = f.top + u.clientHeight, f.right = f.left + u.clientWidth, f.width = u.clientWidth, f.height = u.clientHeight, f.x = f.left, f.y = f.top, f;
}
function wf(u, D, f) {
  return D === F1 ? OD(X8(u, f)) : yu(D) ? Z8(D, f) : OD(K8(Eu(u)));
}
function Q8(u) {
  var D = Uu(pD(u)), f = ["absolute", "fixed"].indexOf(du(u).position) >= 0, e = f && Q(u) ? Ju(u) : u;
  return yu(e) ? D.filter(function(F) {
    return yu(F) && n1(F, e) && nu(F) !== "body";
  }) : [];
}
function J8(u, D, f, e) {
  var F = D === "clippingParents" ? Q8(u) : [].concat(D), t = [].concat(F, [f]), a = t[0], n = t.reduce(function(r, d) {
    var i = wf(u, d, e);
    return r.top = Bu(i.top, r.top), r.right = lD(i.right, r.right), r.bottom = lD(i.bottom, r.bottom), r.left = Bu(i.left, r.left), r;
  }, wf(u, a, e));
  return n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
function o1(u) {
  var D = u.reference, f = u.element, e = u.placement, F = e ? au(e) : null, t = e ? zu(e) : null, a = D.x + D.width / 2 - f.width / 2, n = D.y + D.height / 2 - f.height / 2, r;
  switch (F) {
    case V:
      r = {
        x: a,
        y: D.y - f.height
      };
      break;
    case uu:
      r = {
        x: a,
        y: D.y + D.height
      };
      break;
    case Du:
      r = {
        x: D.x + D.width,
        y: n
      };
      break;
    case W:
      r = {
        x: D.x - f.width,
        y: n
      };
      break;
    default:
      r = {
        x: D.x,
        y: D.y
      };
  }
  var d = F ? QD(F) : null;
  if (d != null) {
    var i = d === "y" ? "height" : "width";
    switch (t) {
      case ju:
        r[d] = r[d] - (D[i] / 2 - f[i] / 2);
        break;
      case Yu:
        r[d] = r[d] + (D[i] / 2 - f[i] / 2);
        break;
    }
  }
  return r;
}
function Xu(u, D) {
  D === void 0 && (D = {});
  var f = D, e = f.placement, F = e === void 0 ? u.placement : e, t = f.strategy, a = t === void 0 ? u.strategy : t, n = f.boundary, r = n === void 0 ? g8 : n, d = f.rootBoundary, i = d === void 0 ? F1 : d, o = f.elementContext, s = o === void 0 ? qu : o, C = f.altBoundary, c = C === void 0 ? !1 : C, p = f.padding, g = p === void 0 ? 0 : p, _ = i1(typeof g != "number" ? g : d1(g, Qu)), y = s === qu ? m8 : qu, x = u.rects.popper, m = u.elements[c ? y : s], v = J8(yu(m) ? m : m.contextElement || Eu(u.elements.popper), r, i, a), w = Iu(u.elements.reference), j = o1({
    reference: w,
    element: x,
    placement: F
  }), N = OD(Object.assign({}, x, j)), P = s === qu ? N : w, I = {
    top: v.top - P.top + _.top,
    bottom: P.bottom - v.bottom + _.bottom,
    left: v.left - P.left + _.left,
    right: P.right - v.right + _.right
  }, H = u.modifiersData.offset;
  if (s === qu && H) {
    var fu = H[F];
    Object.keys(I).forEach(function(U) {
      var cu = [Du, uu].indexOf(U) >= 0 ? 1 : -1, bu = [V, uu].indexOf(U) >= 0 ? "y" : "x";
      I[U] += fu[bu] * cu;
    });
  }
  return I;
}
function ut(u, D) {
  D === void 0 && (D = {});
  var f = D, e = f.placement, F = f.boundary, t = f.rootBoundary, a = f.padding, n = f.flipVariations, r = f.allowedAutoPlacements, d = r === void 0 ? bD : r, i = zu(e), o = i ? n ? Bf : Bf.filter(function(c) {
    return zu(c) === i;
  }) : Qu, s = o.filter(function(c) {
    return d.indexOf(c) >= 0;
  });
  s.length === 0 && (s = o);
  var C = s.reduce(function(c, p) {
    return c[p] = Xu(u, {
      placement: p,
      boundary: F,
      rootBoundary: t,
      padding: a
    })[au(p)], c;
  }, {});
  return Object.keys(C).sort(function(c, p) {
    return C[c] - C[p];
  });
}
function Dt(u) {
  if (au(u) === XD)
    return [];
  var D = oD(u);
  return [yf(u), D, yf(D)];
}
function ft(u) {
  var D = u.state, f = u.options, e = u.name;
  if (!D.modifiersData[e]._skip) {
    for (var F = f.mainAxis, t = F === void 0 ? !0 : F, a = f.altAxis, n = a === void 0 ? !0 : a, r = f.fallbackPlacements, d = f.padding, i = f.boundary, o = f.rootBoundary, s = f.altBoundary, C = f.flipVariations, c = C === void 0 ? !0 : C, p = f.allowedAutoPlacements, g = D.options.placement, _ = au(g), y = _ === g, x = r || (y || !c ? [oD(g)] : Dt(g)), m = [g].concat(x).reduce(function(xu, su) {
      return xu.concat(au(su) === XD ? ut(D, {
        placement: su,
        boundary: i,
        rootBoundary: o,
        padding: d,
        flipVariations: c,
        allowedAutoPlacements: p
      }) : su);
    }, []), v = D.rects.reference, w = D.rects.popper, j = /* @__PURE__ */ new Map(), N = !0, P = m[0], I = 0; I < m.length; I++) {
      var H = m[I], fu = au(H), U = zu(H) === ju, cu = [V, uu].indexOf(fu) >= 0, bu = cu ? "width" : "height", G = Xu(D, {
        placement: H,
        boundary: i,
        rootBoundary: o,
        altBoundary: s,
        padding: d
      }), eu = cu ? U ? Du : W : U ? uu : V;
      v[bu] > w[bu] && (eu = oD(eu));
      var DD = oD(eu), pu = [];
      if (t && pu.push(G[fu] <= 0), n && pu.push(G[eu] <= 0, G[DD] <= 0), pu.every(function(xu) {
        return xu;
      })) {
        P = H, N = !1;
        break;
      }
      j.set(H, pu);
    }
    if (N)
      for (var fD = c ? 3 : 1, hD = function(su) {
        var Lu = m.find(function(tD) {
          var gu = j.get(tD);
          if (gu)
            return gu.slice(0, su).every(function(BD) {
              return BD;
            });
        });
        if (Lu)
          return P = Lu, "break";
      }, Nu = fD; Nu > 0; Nu--) {
        var eD = hD(Nu);
        if (eD === "break") break;
      }
    D.placement !== P && (D.modifiersData[e]._skip = !0, D.placement = P, D.reset = !0);
  }
}
const et = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ft,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Af(u, D, f) {
  return f === void 0 && (f = {
    x: 0,
    y: 0
  }), {
    top: u.top - D.height - f.y,
    right: u.right - D.width + f.x,
    bottom: u.bottom - D.height + f.y,
    left: u.left - D.width - f.x
  };
}
function kf(u) {
  return [V, Du, uu, W].some(function(D) {
    return u[D] >= 0;
  });
}
function tt(u) {
  var D = u.state, f = u.name, e = D.rects.reference, F = D.rects.popper, t = D.modifiersData.preventOverflow, a = Xu(D, {
    elementContext: "reference"
  }), n = Xu(D, {
    altBoundary: !0
  }), r = Af(a, e), d = Af(n, F, t), i = kf(r), o = kf(d);
  D.modifiersData[f] = {
    referenceClippingOffsets: r,
    popperEscapeOffsets: d,
    isReferenceHidden: i,
    hasPopperEscaped: o
  }, D.attributes.popper = Object.assign({}, D.attributes.popper, {
    "data-popper-reference-hidden": i,
    "data-popper-escaped": o
  });
}
const Ft = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tt
};
function at(u, D, f) {
  var e = au(u), F = [W, V].indexOf(e) >= 0 ? -1 : 1, t = typeof f == "function" ? f(Object.assign({}, D, {
    placement: u
  })) : f, a = t[0], n = t[1];
  return a = a || 0, n = (n || 0) * F, [W, Du].indexOf(e) >= 0 ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  };
}
function nt(u) {
  var D = u.state, f = u.options, e = u.name, F = f.offset, t = F === void 0 ? [0, 0] : F, a = bD.reduce(function(i, o) {
    return i[o] = at(o, D.rects, t), i;
  }, {}), n = a[D.placement], r = n.x, d = n.y;
  D.modifiersData.popperOffsets != null && (D.modifiersData.popperOffsets.x += r, D.modifiersData.popperOffsets.y += d), D.modifiersData[e] = a;
}
const rt = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: nt
};
function it(u) {
  var D = u.state, f = u.name;
  D.modifiersData[f] = o1({
    reference: D.rects.reference,
    element: D.rects.popper,
    placement: D.placement
  });
}
const dt = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: it,
  data: {}
};
function st(u) {
  return u === "x" ? "y" : "x";
}
function ot(u) {
  var D = u.state, f = u.options, e = u.name, F = f.mainAxis, t = F === void 0 ? !0 : F, a = f.altAxis, n = a === void 0 ? !1 : a, r = f.boundary, d = f.rootBoundary, i = f.altBoundary, o = f.padding, s = f.tether, C = s === void 0 ? !0 : s, c = f.tetherOffset, p = c === void 0 ? 0 : c, g = Xu(D, {
    boundary: r,
    rootBoundary: d,
    padding: o,
    altBoundary: i
  }), _ = au(D.placement), y = zu(D.placement), x = !y, m = QD(_), v = st(m), w = D.modifiersData.popperOffsets, j = D.rects.reference, N = D.rects.popper, P = typeof p == "function" ? p(Object.assign({}, D.rects, {
    placement: D.placement
  })) : p, I = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), H = D.modifiersData.offset ? D.modifiersData.offset[D.placement] : null, fu = {
    x: 0,
    y: 0
  };
  if (w) {
    if (t) {
      var U, cu = m === "y" ? V : W, bu = m === "y" ? uu : Du, G = m === "y" ? "height" : "width", eu = w[m], DD = eu + g[cu], pu = eu - g[bu], fD = C ? -N[G] / 2 : 0, hD = y === ju ? j[G] : N[G], Nu = y === ju ? -N[G] : -j[G], eD = D.elements.arrow, xu = C && eD ? ZD(eD) : {
        width: 0,
        height: 0
      }, su = D.modifiersData["arrow#persistent"] ? D.modifiersData["arrow#persistent"].padding : r1(), Lu = su[cu], tD = su[bu], gu = Hu(0, j[G], xu[G]), BD = x ? j[G] / 2 - fD - gu - Lu - I.mainAxis : hD - gu - Lu - I.mainAxis, A1 = x ? -j[G] / 2 + fD + gu + tD + I.mainAxis : Nu + gu + tD + I.mainAxis, _D = D.elements.arrow && Ju(D.elements.arrow), k1 = _D ? m === "y" ? _D.clientTop || 0 : _D.clientLeft || 0 : 0, tf = (U = H == null ? void 0 : H[m]) != null ? U : 0, x1 = eu + BD - tf - k1, T1 = eu + A1 - tf, Ff = Hu(C ? lD(DD, x1) : DD, eu, C ? Bu(pu, T1) : pu);
      w[m] = Ff, fu[m] = Ff - eu;
    }
    if (n) {
      var af, S1 = m === "x" ? V : W, $1 = m === "x" ? uu : Du, mu = w[v], FD = v === "y" ? "height" : "width", nf = mu + g[S1], rf = mu - g[$1], vD = [V, W].indexOf(_) !== -1, df = (af = H == null ? void 0 : H[v]) != null ? af : 0, sf = vD ? nf : mu - j[FD] - N[FD] - df + I.altAxis, of = vD ? mu + j[FD] + N[FD] - df - I.altAxis : rf, Cf = C && vD ? z8(sf, mu, of) : Hu(C ? sf : nf, mu, C ? of : rf);
      w[v] = Cf, fu[v] = Cf - mu;
    }
    D.modifiersData[e] = fu;
  }
}
const Ct = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ot,
  requiresIfExists: ["offset"]
};
function lt(u) {
  return {
    scrollLeft: u.scrollLeft,
    scrollTop: u.scrollTop
  };
}
function Et(u) {
  return u === K(u) || !Q(u) ? JD(u) : lt(u);
}
function ct(u) {
  var D = u.getBoundingClientRect(), f = Ou(D.width) / u.offsetWidth || 1, e = Ou(D.height) / u.offsetHeight || 1;
  return f !== 1 || e !== 1;
}
function bt(u, D, f) {
  f === void 0 && (f = !1);
  var e = Q(D), F = Q(D) && ct(D), t = Eu(D), a = Iu(u, F, f), n = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = {
    x: 0,
    y: 0
  };
  return (e || !e && !f) && ((nu(D) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Df(t)) && (n = Et(D)), Q(D) ? (r = Iu(D, !0), r.x += D.clientLeft, r.y += D.clientTop) : t && (r.x = uf(t))), {
    x: a.left + n.scrollLeft - r.x,
    y: a.top + n.scrollTop - r.y,
    width: a.width,
    height: a.height
  };
}
function pt(u) {
  var D = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set(), e = [];
  u.forEach(function(t) {
    D.set(t.name, t);
  });
  function F(t) {
    f.add(t.name);
    var a = [].concat(t.requires || [], t.requiresIfExists || []);
    a.forEach(function(n) {
      if (!f.has(n)) {
        var r = D.get(n);
        r && F(r);
      }
    }), e.push(t);
  }
  return u.forEach(function(t) {
    f.has(t.name) || F(t);
  }), e;
}
function gt(u) {
  var D = pt(u);
  return T8.reduce(function(f, e) {
    return f.concat(D.filter(function(F) {
      return F.phase === e;
    }));
  }, []);
}
function mt(u) {
  var D;
  return function() {
    return D || (D = new Promise(function(f) {
      Promise.resolve().then(function() {
        D = void 0, f(u());
      });
    })), D;
  };
}
function ht(u) {
  var D = u.reduce(function(f, e) {
    var F = f[e.name];
    return f[e.name] = F ? Object.assign({}, F, e, {
      options: Object.assign({}, F.options, e.options),
      data: Object.assign({}, F.data, e.data)
    }) : e, f;
  }, {});
  return Object.keys(D).map(function(f) {
    return D[f];
  });
}
var xf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Tf() {
  for (var u = arguments.length, D = new Array(u), f = 0; f < u; f++)
    D[f] = arguments[f];
  return !D.some(function(e) {
    return !(e && typeof e.getBoundingClientRect == "function");
  });
}
function Bt(u) {
  u === void 0 && (u = {});
  var D = u, f = D.defaultModifiers, e = f === void 0 ? [] : f, F = D.defaultOptions, t = F === void 0 ? xf : F;
  return function(n, r, d) {
    d === void 0 && (d = t);
    var i = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xf, t),
      modifiersData: {},
      elements: {
        reference: n,
        popper: r
      },
      attributes: {},
      styles: {}
    }, o = [], s = !1, C = {
      state: i,
      setOptions: function(_) {
        var y = typeof _ == "function" ? _(i.options) : _;
        p(), i.options = Object.assign({}, t, i.options, y), i.scrollParents = {
          reference: yu(n) ? Uu(n) : n.contextElement ? Uu(n.contextElement) : [],
          popper: Uu(r)
        };
        var x = gt(ht([].concat(e, i.options.modifiers)));
        return i.orderedModifiers = x.filter(function(m) {
          return m.enabled;
        }), c(), C.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!s) {
          var _ = i.elements, y = _.reference, x = _.popper;
          if (Tf(y, x)) {
            i.rects = {
              reference: bt(y, Ju(x), i.options.strategy === "fixed"),
              popper: ZD(x)
            }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(I) {
              return i.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var m = 0; m < i.orderedModifiers.length; m++) {
              if (i.reset === !0) {
                i.reset = !1, m = -1;
                continue;
              }
              var v = i.orderedModifiers[m], w = v.fn, j = v.options, N = j === void 0 ? {} : j, P = v.name;
              typeof w == "function" && (i = w({
                state: i,
                options: N,
                name: P,
                instance: C
              }) || i);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: mt(function() {
        return new Promise(function(g) {
          C.forceUpdate(), g(i);
        });
      }),
      destroy: function() {
        p(), s = !0;
      }
    };
    if (!Tf(n, r))
      return C;
    C.setOptions(d).then(function(g) {
      !s && d.onFirstUpdate && d.onFirstUpdate(g);
    });
    function c() {
      i.orderedModifiers.forEach(function(g) {
        var _ = g.name, y = g.options, x = y === void 0 ? {} : y, m = g.effect;
        if (typeof m == "function") {
          var v = m({
            state: i,
            name: _,
            instance: C,
            options: x
          }), w = function() {
          };
          o.push(v || w);
        }
      });
    }
    function p() {
      o.forEach(function(g) {
        return g();
      }), o = [];
    }
    return C;
  };
}
var _t = [W8, dt, U8, j8, rt, et, Ct, L8, Ft], vt = /* @__PURE__ */ Bt({
  defaultModifiers: _t
});
function yt() {
  var u = window.navigator.userAgent, D = u.indexOf("MSIE ");
  if (D > 0)
    return parseInt(u.substring(D + 5, u.indexOf(".", D)), 10);
  var f = u.indexOf("Trident/");
  if (f > 0) {
    var e = u.indexOf("rv:");
    return parseInt(u.substring(e + 3, u.indexOf(".", e)), 10);
  }
  var F = u.indexOf("Edge/");
  return F > 0 ? parseInt(u.substring(F + 5, u.indexOf(".", F)), 10) : -1;
}
let CD;
function ID() {
  ID.init || (ID.init = !0, CD = yt() !== -1);
}
var gD = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    ID(), M1(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const u = document.createElement("object");
    this._resizeObject = u, u.setAttribute("aria-hidden", "true"), u.setAttribute("tabindex", -1), u.onload = this.addResizeHandlers, u.type = "text/html", CD && this.$el.appendChild(u), u.data = "about:blank", CD || this.$el.appendChild(u);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!CD && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const wt = /* @__PURE__ */ N1("data-v-b329ee4c");
z1("data-v-b329ee4c");
const At = {
  class: "resize-observer",
  tabindex: "-1"
};
P1();
const kt = /* @__PURE__ */ wt((u, D, f, e, F, t) => (E(), L("div", At)));
gD.render = kt;
gD.__scopeId = "data-v-b329ee4c";
gD.__file = "src/components/ResizeObserver.vue";
function Sf(u, D) {
  var f = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(u);
    D && (e = e.filter(function(F) {
      return Object.getOwnPropertyDescriptor(u, F).enumerable;
    })), f.push.apply(f, e);
  }
  return f;
}
function X(u) {
  for (var D = 1; D < arguments.length; D++) {
    var f = arguments[D] != null ? arguments[D] : {};
    D % 2 ? Sf(Object(f), !0).forEach(function(e) {
      xt(u, e, f[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : Sf(Object(f)).forEach(function(e) {
      Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(f, e));
    });
  }
  return u;
}
function Vu(u) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vu = function(D) {
    return typeof D;
  } : Vu = function(D) {
    return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
  }, Vu(u);
}
function $f(u, D, f, e, F, t, a) {
  try {
    var n = u[t](a), r = n.value;
  } catch (d) {
    f(d);
    return;
  }
  n.done ? D(r) : Promise.resolve(r).then(e, F);
}
function ou(u) {
  return function() {
    var D = this, f = arguments;
    return new Promise(function(e, F) {
      var t = u.apply(D, f);
      function a(r) {
        $f(t, e, F, a, n, "next", r);
      }
      function n(r) {
        $f(t, e, F, a, n, "throw", r);
      }
      a(void 0);
    });
  };
}
function xt(u, D, f) {
  return D in u ? Object.defineProperty(u, D, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[D] = f, u;
}
function Tt(u, D) {
  return $t(u) || Ot(u, D) || ff(u, D) || zt();
}
function C1(u) {
  return St(u) || jt(u) || ff(u) || It();
}
function St(u) {
  if (Array.isArray(u)) return zD(u);
}
function $t(u) {
  if (Array.isArray(u)) return u;
}
function jt(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null) return Array.from(u);
}
function Ot(u, D) {
  var f = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (f != null) {
    var e = [], F = !0, t = !1, a, n;
    try {
      for (f = f.call(u); !(F = (a = f.next()).done) && (e.push(a.value), !(D && e.length === D)); F = !0)
        ;
    } catch (r) {
      t = !0, n = r;
    } finally {
      try {
        !F && f.return != null && f.return();
      } finally {
        if (t) throw n;
      }
    }
    return e;
  }
}
function ff(u, D) {
  if (u) {
    if (typeof u == "string") return zD(u, D);
    var f = Object.prototype.toString.call(u).slice(8, -1);
    if (f === "Object" && u.constructor && (f = u.constructor.name), f === "Map" || f === "Set") return Array.from(u);
    if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)) return zD(u, D);
  }
}
function zD(u, D) {
  (D == null || D > u.length) && (D = u.length);
  for (var f = 0, e = new Array(D); f < D; f++) e[f] = u[f];
  return e;
}
function It() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PD(u, D) {
  var f = typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (!f) {
    if (Array.isArray(u) || (f = ff(u)) || D) {
      f && (u = f);
      var e = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return e >= u.length ? {
            done: !0
          } : {
            done: !1,
            value: u[e++]
          };
        },
        e: function(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var t = !0, a = !1, n;
  return {
    s: function() {
      f = f.call(u);
    },
    n: function() {
      var r = f.next();
      return t = r.done, r;
    },
    e: function(r) {
      a = !0, n = r;
    },
    f: function() {
      try {
        !t && f.return != null && f.return();
      } finally {
        if (a) throw n;
      }
    }
  };
}
function l1(u, D) {
  for (var f in D)
    Object.prototype.hasOwnProperty.call(D, f) && (Vu(D[f]) === "object" && u[f] ? l1(u[f], D[f]) : u[f] = D[f]);
}
var _u = {
  // Disable popper components
  disabled: !1,
  // Default position offset [skidding, distance] (px)
  offset: [0, 5],
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5e3,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Popperjs modifiers
  modifiers: [],
  // Other options passed to Popperjs constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: function(D) {
        return [].concat(C1(D), ["click"]);
      },
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function T(u, D) {
  var f = _u.themes[u] || {}, e;
  do
    e = f[D], typeof e > "u" ? f.$extend ? f = _u.themes[f.$extend] || {} : (f = null, e = _u[D]) : f = null;
  while (f);
  return e;
}
function Pt(u) {
  var D = [u], f = _u.themes[u] || {};
  do
    f.$extend && !f.$resetCss ? (D.push(f.$extend), f = _u.themes[f.$extend] || {}) : f = null;
  while (f);
  return D.map(function(e) {
    return "v-popper--theme-".concat(e);
  });
}
var Pu = !1;
if (typeof window < "u") {
  Pu = !1;
  try {
    var Mt = Object.defineProperty({}, "passive", {
      get: function() {
        Pu = !0;
      }
    });
    window.addEventListener("test", null, Mt);
  } catch {
  }
}
var E1 = !1;
typeof window < "u" && typeof navigator < "u" && (E1 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
function iD(u, D, f) {
  var e = u.find(function(t) {
    return t.name === D;
  });
  e || (e = {
    name: D
  }, u.push(e));
  for (var F in f)
    F === "options" ? (e.options || (e.options = {}), Object.assign(e.options, f.options)) : e[F] = f[F];
}
var jf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
}, Of = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function Nt(u, D) {
  var f = u.indexOf(D);
  f !== -1 && u.splice(f, 1);
}
var tu = [], Tu = null, MD = function() {
};
typeof window < "u" && (MD = window.Element);
var c1 = function() {
  return {
    name: "VPopper",
    props: {
      theme: {
        type: String,
        required: !0
      },
      targetNodes: {
        type: Function,
        required: !0
      },
      referenceNode: {
        type: Function,
        required: !0
      },
      popperNode: {
        type: Function,
        required: !0
      },
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: !1
      },
      showGroup: {
        type: String,
        default: null
      },
      // eslint-disable-next-line vue/require-prop-types
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "disabled");
        }
      },
      placement: {
        type: String,
        default: function(D) {
          return T(D.theme, "placement");
        },
        validator: function(D) {
          return bD.includes(D);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function(D) {
          return T(D.theme, "delay");
        }
      },
      offset: {
        type: [Array, Function],
        default: function(D) {
          return T(D.theme, "offset");
        }
      },
      triggers: {
        type: Array,
        default: function(D) {
          return T(D.theme, "triggers");
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function(D) {
          return T(D.theme, "showTriggers");
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function(D) {
          return T(D.theme, "hideTriggers");
        }
      },
      popperTriggers: {
        type: Array,
        default: function(D) {
          return T(D.theme, "popperTriggers");
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function(D) {
          return T(D.theme, "popperShowTriggers");
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function(D) {
          return T(D.theme, "popperHideTriggers");
        }
      },
      container: {
        type: [String, Object, MD, Boolean],
        default: function(D) {
          return T(D.theme, "container");
        }
      },
      boundary: {
        type: [String, MD],
        default: function(D) {
          return T(D.theme, "boundary");
        }
      },
      strategy: {
        type: String,
        validator: function(D) {
          return ["absolute", "fixed"].includes(D);
        },
        default: function(D) {
          return T(D.theme, "strategy");
        }
      },
      modifiers: {
        type: Array,
        default: function(D) {
          return T(D.theme, "modifiers");
        }
      },
      popperOptions: {
        type: Object,
        default: function(D) {
          return T(D.theme, "popperOptions");
        }
      },
      autoHide: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "autoHide");
        }
      },
      handleResize: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "handleResize");
        }
      },
      instantMove: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "instantMove");
        }
      },
      eagerMount: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "eagerMount");
        }
      },
      popperClass: {
        type: [String, Array, Object],
        default: function(D) {
          return T(D.theme, "popperClass");
        }
      },
      computeTransformOrigin: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "computeTransformOrigin");
        }
      },
      autoMinSize: {
        type: Boolean,
        default: function(D) {
          return T(D.theme, "autoMinSize");
        }
      }
    },
    emits: ["show", "hide", "update:shown", "apply-show", "apply-hide", "close-group", "close-directive", "auto-hide", "resize", "dispose"],
    data: function() {
      return {
        isShown: !1,
        isMounted: !1,
        skipTransition: !1,
        classes: {
          showFrom: !1,
          showTo: !1,
          hideFrom: !1,
          hideTo: !0
        }
      };
    },
    computed: {
      popperId: function() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent: function() {
        return this.eagerMount || this.isMounted;
      },
      slotData: function() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: X(X({}, this.classes), {}, {
            popperClass: this.popperClass
          })
        };
      }
    },
    watch: {
      shown: "$_autoShowHide",
      disabled: function(D) {
        D ? this.dispose() : this.init();
      },
      container: function() {
        var D = this;
        return ou(function* () {
          D.isShown && D.popperInstance && (D.$_ensureContainer(), yield D.popperInstance.update());
        })();
      },
      triggers: function() {
        this.$_removeEventListeners(), this.$_addEventListeners();
      },
      placement: "$_refreshPopperOptions",
      offset: "$_refreshPopperOptions",
      boundary: "$_refreshPopperOptions",
      strategy: "$_refreshPopperOptions",
      modifiers: "$_refreshPopperOptions",
      popperOptions: {
        handler: "$_refreshPopperOptions",
        deep: !0
      }
    },
    created: function() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function(D) {
        return D.toString(36).substring(2, 10);
      }).join("_"));
    },
    mounted: function() {
      this.init();
    },
    activated: function() {
      this.$_autoShowHide();
    },
    deactivated: function() {
      this.hide();
    },
    beforeUnmount: function() {
      this.dispose();
    },
    methods: {
      show: function() {
        var D = this, f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = f.event, F = f.skipDelay, t = F === void 0 ? !1 : F, a = f.force, n = a === void 0 ? !1 : a;
        (n || !this.disabled) && (this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(function() {
          D.$_showFrameLocked = !1;
        })), this.$emit("update:shown", !0);
      },
      hide: function() {
        var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = D.event, e = D.skipDelay, F = e === void 0 ? !1 : e;
        this.$_scheduleHide(f, F), this.$emit("hide"), this.$emit("update:shown", !1);
      },
      init: function() {
        this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_targetNodes = this.targetNodes().filter(function(D) {
          return D.nodeType === D.ELEMENT_NODE;
        }), this.$_popperNode = this.popperNode(), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show();
      },
      dispose: function() {
        this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({
          skipDelay: !0
        }), this.popperInstance && (this.popperInstance.destroy(), this.$_detachPopperNode()), this.isMounted = !1, this.popperInstance = null, this.isShown = !1, this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose");
      },
      onResize: function() {
        var D = this;
        return ou(function* () {
          D.isShown && D.popperInstance && (yield D.popperInstance.update(), D.$emit("resize"));
        })();
      },
      $_getPopperOptions: function() {
        var D = this, f = X(X({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function() {
            var e = ou(function* (t) {
              D.popperOptions.onFirstUpdate && D.popperOptions.onFirstUpdate(t), yield D.$_applyShowEffect();
            });
            function F(t) {
              return e.apply(this, arguments);
            }
            return F;
          }()
        });
        return f.modifiers || (f.modifiers = []), iD(f.modifiers, "arrow", {
          options: {
            element: this.arrowNode && this.arrowNode() || "[data-popper-arrow]"
          }
        }), this.offset && iD(f.modifiers, "offset", {
          options: {
            offset: this.offset
          }
        }), this.boundary && iD(f.modifiers, "preventOverflow", {
          options: {
            boundary: this.boundary
          }
        }), this.isShown || iD(f.modifiers, "eventListeners", {
          enabled: !1
        }), f;
      },
      $_refreshPopperOptions: function() {
        var D = this;
        return ou(function* () {
          D.popperInstance && (yield D.popperInstance.setOptions(D.$_getPopperOptions()));
        })();
      },
      $_scheduleShow: function() {
        var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Tu && this.instantMove && Tu.instantMove) {
          Tu.$_applyHide(!0), this.$_applyShow(!0);
          return;
        }
        D ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      },
      $_scheduleHide: function() {
        var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Tu = this), D ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      },
      $_computeDelay: function(D) {
        var f = this.delay;
        return parseInt(f && f[D] || f || 0);
      },
      $_applyShow: function() {
        var D = arguments, f = this;
        return ou(function* () {
          var e = D.length > 0 && D[0] !== void 0 ? D[0] : !1;
          clearTimeout(f.$_disposeTimer), clearTimeout(f.$_scheduleTimer), f.skipTransition = e, !f.isShown && (f.isMounted || (f.$_ensureContainer(), f.isMounted = !0), f.popperInstance ? (yield f.popperInstance.update(), yield f.$_refreshPopperOptions(), yield f.$_applyShowEffect()) : f.popperInstance = vt(f.referenceNode(), f.$_popperNode, f.$_getPopperOptions()));
        })();
      },
      $_applyShowEffect: function() {
        var D = this;
        return ou(function* () {
          if (!D.$_hideInProgress) {
            var f, e = function() {
              return f || (f = D.referenceNode().getBoundingClientRect());
            };
            if (D.computeTransformOrigin) {
              var F = e(), t = D.$_popperNode.querySelector(".v-popper__wrapper"), a = t.parentNode.getBoundingClientRect(), n = F.left + F.width / 2 - (a.left + t.offsetLeft), r = F.top + F.height / 2 - (a.top + t.offsetTop);
              t.style.transformOrigin = "".concat(n, "px ").concat(r, "px");
            }
            if (D.autoMinSize) {
              var d = e(), i = D.$_popperNode.querySelector(".v-popper__inner"), o = D.$_popperNode.dataset.popperPlacement.split("-"), s = Tt(o, 1), C = s[0];
              C === "left" || C === "right" ? i.style.minHeight = "".concat(d.height, "px") : i.style.minWidth = "".concat(d.width, "px");
            }
            D.isShown = !0, D.$_applyAttrsToTarget({
              "aria-describedby": D.popperId,
              "data-popper-shown": ""
            });
            var c = D.showGroup;
            if (c)
              for (var p, g = 0; g < tu.length; g++)
                p = tu[g], p.showGroup !== c && (p.hide(), p.$emit("close-group"));
            tu.push(D), D.$emit("apply-show"), D.$_popperNode.setAttribute("data-popper-placement", D.popperInstance.state.placement), D.classes.showFrom = !0, D.classes.showTo = !1, D.classes.hideFrom = !1, D.classes.hideTo = !1, yield zf(), D.classes.showFrom = !1, D.classes.showTo = !0;
          }
        })();
      },
      $_applyHide: function() {
        var D = arguments, f = this;
        return ou(function* () {
          var e = D.length > 0 && D[0] !== void 0 ? D[0] : !1;
          if (clearTimeout(f.$_scheduleTimer), !!f.isShown) {
            f.skipTransition = e, Nt(tu, f), Tu === f && (Tu = null), f.isShown = !1, f.popperInstance && (yield f.$_refreshPopperOptions()), f.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0
            }), clearTimeout(f.$_disposeTimer);
            var F = T(f.theme, "disposeTimeout");
            F !== null && (f.$_disposeTimer = setTimeout(function() {
              f.$_popperNode && (f.$_detachPopperNode(), f.isMounted = !1);
            }, F)), f.$emit("apply-hide"), f.classes.showFrom = !1, f.classes.showTo = !1, f.classes.hideFrom = !0, f.classes.hideTo = !1, yield zf(), f.classes.hideFrom = !1, f.classes.hideTo = !0;
          }
        })();
      },
      $_autoShowHide: function() {
        this.shown ? this.show() : this.hide();
      },
      $_ensureContainer: function() {
        var D = this.container;
        if (typeof D == "string" ? D = window.document.querySelector(D) : D === !1 && (D = this.$_targetNodes[0].parentNode), !D)
          throw new Error("No container for popover: " + this.container);
        D.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function() {
        var D = this, f = function(a, n, r, d, i) {
          var o = r;
          d != null && (o = typeof d == "function" ? d(o) : d), o.forEach(function(s) {
            var C = n[s];
            C && (D.$_events.push({
              targetNodes: a,
              eventType: C,
              handler: i
            }), a.forEach(function(c) {
              return c.addEventListener(C, i, Pu ? {
                passive: !0
              } : void 0);
            }));
          });
        }, e = function(a) {
          D.isShown && !D.$_hideInProgress || (a.usedByTooltip = !0, !D.$_preventShow && D.show({
            event: a
          }));
        };
        f(this.$_targetNodes, jf, this.triggers, this.showTriggers, e), f([this.$_popperNode], jf, this.popperTriggers, this.popperShowTriggers, e);
        var F = function(a) {
          a.usedByTooltip || D.hide({
            event: a
          });
        };
        f(this.$_targetNodes, Of, this.triggers, this.hideTriggers, F), f([this.$_popperNode], Of, this.popperTriggers, this.popperHideTriggers, F);
      },
      $_removeEventListeners: function() {
        this.$_events.forEach(function(D) {
          var f = D.targetNodes, e = D.eventType, F = D.handler;
          f.forEach(function(t) {
            return t.removeEventListener(e, F);
          });
        }), this.$_events = [];
      },
      $_handleGlobalClose: function(D) {
        var f = this, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        this.$_showFrameLocked || (this.hide({
          event: D
        }), D.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), e && (this.$_preventShow = !0, setTimeout(function() {
          f.$_preventShow = !1;
        }, 300)));
      },
      $_handleGlobalResize: function(D) {
        var f = this;
        return ou(function* () {
          f.popperInstance && (yield f.popperInstance.update());
        })();
      },
      $_detachPopperNode: function() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function(D, f) {
        var e = PD(this.$_targetNodes), F;
        try {
          for (e.s(); !(F = e.n()).done; ) {
            var t = F.value, a = t.getAttribute(D);
            a && (t.removeAttribute(D), t.setAttribute(f, a));
          }
        } catch (n) {
          e.e(n);
        } finally {
          e.f();
        }
      },
      $_applyAttrsToTarget: function(D) {
        var f = PD(this.$_targetNodes), e;
        try {
          for (f.s(); !(e = f.n()).done; ) {
            var F = e.value;
            for (var t in D) {
              var a = D[t];
              a == null ? F.removeAttribute(t) : F.setAttribute(t, a);
            }
          }
        } catch (n) {
          f.e(n);
        } finally {
          f.f();
        }
      }
    },
    render: function() {
      return this.$slots.default(this.slotData);
    }
  };
};
typeof document < "u" && typeof window < "u" && (E1 ? (document.addEventListener("touchstart", If, Pu ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", qt, Pu ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", If, !0), window.addEventListener("click", Lt, !0)), window.addEventListener("resize", Rt));
function If(u) {
  for (var D = 0; D < tu.length; D++) {
    var f = tu[D], e = f.popperNode();
    f.$_mouseDownContains = e.contains(u.target);
  }
}
function Lt(u) {
  b1(u);
}
function qt(u) {
  b1(u, !0);
}
function b1(u) {
  for (var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = function(t) {
    var a = tu[t], n = a.popperNode(), r = a.$_mouseDownContains || n.contains(u.target);
    requestAnimationFrame(function() {
      (u.closeAllPopover || u.closePopover && r || a.autoHide && !r) && a.$_handleGlobalClose(u, D);
    });
  }, e = 0; e < tu.length; e++)
    f(e);
}
function Rt(u) {
  for (var D = 0; D < tu.length; D++) {
    var f = tu[D];
    f.$_handleGlobalResize(u);
  }
}
function zf() {
  return new Promise(function(u) {
    return requestAnimationFrame(function() {
      requestAnimationFrame(u);
    });
  });
}
var p1 = {
  computed: {
    themeClass: function() {
      return Pt(this.theme);
    }
  }
}, mD = {
  name: "VPopperContent",
  components: {
    ResizeObserver: gD
  },
  mixins: [p1],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  },
  emits: ["hide", "resize"]
}, Ht = ["id", "aria-hidden", "tabindex"], Ut = {
  class: "v-popper__wrapper"
}, Vt = {
  ref: "inner",
  class: "v-popper__inner"
}, Wt = {
  ref: "arrow",
  class: "v-popper__arrow-container"
}, Gt = /* @__PURE__ */ l(
  "div",
  {
    class: "v-popper__arrow-outer"
  },
  null,
  -1
  /* HOISTED */
), Yt = /* @__PURE__ */ l(
  "div",
  {
    class: "v-popper__arrow-inner"
  },
  null,
  -1
  /* HOISTED */
), Xt = [Gt, Yt];
function Kt(u, D, f, e, F, t) {
  var a = A("ResizeObserver");
  return E(), b(
    "div",
    {
      id: f.popperId,
      ref: "popover",
      class: Cu(["v-popper__popper", [u.themeClass, f.classes.popperClass, {
        "v-popper__popper--shown": f.shown,
        "v-popper__popper--hidden": !f.shown,
        "v-popper__popper--show-from": f.classes.showFrom,
        "v-popper__popper--show-to": f.classes.showTo,
        "v-popper__popper--hide-from": f.classes.hideFrom,
        "v-popper__popper--hide-to": f.classes.hideTo,
        "v-popper__popper--skip-transition": f.skipTransition
      }]]),
      "aria-hidden": f.shown ? "false" : "true",
      tabindex: f.autoHide ? 0 : void 0,
      onKeyup: D[1] || (D[1] = R1(function(n) {
        return f.autoHide && u.$emit("hide");
      }, ["esc"]))
    },
    [l("div", Ut, [l(
      "div",
      Vt,
      [f.mounted ? (E(), b(
        $u,
        {
          key: 0
        },
        [l("div", null, [h(u.$slots, "default")]), f.handleResize ? (E(), L(a, {
          key: 0,
          onNotify: D[0] || (D[0] = function(n) {
            return u.$emit("resize", n);
          })
        })) : S("v-if", !0)],
        64
        /* STABLE_FRAGMENT */
      )) : S("v-if", !0)],
      512
      /* NEED_PATCH */
    ), l(
      "div",
      Wt,
      Xt,
      512
      /* NEED_PATCH */
    )])],
    42,
    Ht
  );
}
mD.render = Kt;
mD.__file = "src/components/PopperContent.vue";
var g1 = {
  methods: {
    show: function() {
      var D;
      return (D = this.$refs.popper).show.apply(D, arguments);
    },
    hide: function() {
      var D;
      return (D = this.$refs.popper).hide.apply(D, arguments);
    },
    dispose: function() {
      var D;
      return (D = this.$refs.popper).dispose.apply(D, arguments);
    },
    onResize: function() {
      var D;
      return (D = this.$refs.popper).onResize.apply(D, arguments);
    }
  }
}, uD = {
  name: "VPopperWrapper",
  components: {
    Popper: c1(),
    PopperContent: mD
  },
  mixins: [g1, p1],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme: function() {
      var D;
      return (D = this.theme) !== null && D !== void 0 ? D : this.$options.vPopperTheme;
    },
    popperAttrs: function() {
      var D = X({}, this.$attrs);
      return delete D.class, delete D.style, D;
    }
  },
  methods: {
    getTargetNodes: function() {
      var D = C1(this.$refs.reference.children);
      return D.slice(0, D.length - 1).filter(Boolean);
    }
  }
};
function Zt(u, D, f, e, F, t) {
  var a = A("PopperContent"), n = A("Popper");
  return E(), L(
    n,
    Hf({
      ref: "popper"
    }, t.popperAttrs, {
      theme: t.finalTheme,
      "target-nodes": t.getTargetNodes,
      "reference-node": function() {
        return u.$refs.reference;
      },
      "popper-node": function() {
        return u.$refs.popperContent.$el;
      },
      "arrow-node": function() {
        return u.$refs.popperContent.$refs.arrow;
      }
    }),
    {
      default: B(function(r) {
        var d = r.popperId, i = r.isShown, o = r.shouldMountContent, s = r.skipTransition, C = r.autoHide, c = r.show, p = r.hide, g = r.handleResize, _ = r.onResize, y = r.classes;
        return [l(
          "div",
          {
            ref: "reference",
            class: Cu(["v-popper", [u.$attrs.class, u.themeClass, {
              "v-popper--shown": i
            }]]),
            style: k(u.$attrs.style)
          },
          [h(u.$slots, "default", {
            shown: i,
            show: c,
            hide: p
          }), M(
            a,
            {
              ref: "popperContent",
              "popper-id": d,
              theme: t.finalTheme,
              shown: i,
              mounted: o,
              "skip-transition": s,
              "auto-hide": C,
              "handle-resize": g,
              classes: y,
              onHide: p,
              onResize: _
            },
            {
              default: B(function() {
                return [h(u.$slots, "popper", {
                  shown: i,
                  hide: p
                })];
              }),
              _: 2
              /* DYNAMIC */
            },
            1032,
            ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
          )],
          6
          /* CLASS, STYLE */
        )];
      }),
      _: 3
      /* FORWARDED */
    },
    16,
    ["theme", "target-nodes", "reference-node", "popper-node", "arrow-node"]
  );
}
uD.render = Zt;
uD.__file = "src/components/PopperWrapper.vue";
var ND = X(X({}, uD), {}, {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
ND.__file = "src/components/Dropdown.vue";
var LD = X(X({}, uD), {}, {
  name: "VMenu",
  vPopperTheme: "menu"
});
LD.__file = "src/components/Menu.vue";
var qD = X(X({}, uD), {}, {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
qD.__file = "src/components/Tooltip.vue";
var ef = {
  name: "VTooltipDirective",
  components: {
    Popper: c1(),
    PopperContent: mD
  },
  mixins: [g1],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: function(D) {
        return T(D.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function(D) {
        return T(D.theme, "loadingContent");
      }
    }
  },
  data: function() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function() {
      return typeof this.content == "function";
    },
    loading: function() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler: function() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    finalContent: function(D) {
      var f = this;
      this.$nextTick(function() {
        f.$refs.popper.onResize();
      });
    }
  },
  created: function() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function(D) {
      var f = this;
      if (typeof this.content == "function" && this.$_isShown && (D || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        var e = ++this.$_fetchId, F = this.content(this);
        F.then ? F.then(function(t) {
          return f.onResult(e, t);
        }) : this.onResult(e, F);
      }
    },
    onResult: function(D, f) {
      D === this.$_fetchId && (this.$_loading = !1, this.asyncContent = f);
    },
    onShow: function() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide: function() {
      this.$_isShown = !1;
    }
  }
}, Qt = ["innerHTML"], Jt = ["textContent"];
function uF(u, D, f, e, F, t) {
  var a = A("PopperContent"), n = A("Popper");
  return E(), L(
    n,
    Hf({
      ref: "popper"
    }, u.$attrs, {
      theme: f.theme,
      "popper-node": function() {
        return u.$refs.popperContent.$el;
      },
      "arrow-node": function() {
        return u.$refs.popperContent.$refs.arrow;
      },
      onApplyShow: t.onShow,
      onApplyHide: t.onHide
    }),
    {
      default: B(function(r) {
        var d = r.popperId, i = r.isShown, o = r.shouldMountContent, s = r.skipTransition, C = r.autoHide, c = r.hide, p = r.handleResize, g = r.onResize, _ = r.classes;
        return [M(
          a,
          {
            ref: "popperContent",
            class: Cu({
              "v-popper--tooltip-loading": t.loading
            }),
            "popper-id": d,
            theme: f.theme,
            shown: i,
            mounted: o,
            "skip-transition": s,
            "auto-hide": C,
            "handle-resize": p,
            classes: _,
            onHide: c,
            onResize: g
          },
          {
            default: B(function() {
              return [f.html ? (E(), b(
                "div",
                {
                  key: 0,
                  innerHTML: t.finalContent
                },
                null,
                8,
                Qt
              )) : (E(), b(
                "div",
                {
                  key: 1,
                  textContent: q(t.finalContent)
                },
                null,
                8,
                Jt
              ))];
            }),
            _: 2
            /* DYNAMIC */
          },
          1032,
          ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
        )];
      }),
      _: 1
      /* STABLE */
    },
    16,
    ["theme", "popper-node", "arrow-node", "onApplyShow", "onApplyHide"]
  );
}
ef.render = uF;
ef.__file = "src/components/TooltipDirective.vue";
var m1 = "v-popper--has-tooltip";
function DF(u, D) {
  var f = u.placement;
  if (!f && D) {
    var e = PD(bD), F;
    try {
      for (e.s(); !(F = e.n()).done; ) {
        var t = F.value;
        D[t] && (f = t);
      }
    } catch (a) {
      e.e(a);
    } finally {
      e.f();
    }
  }
  return f || (f = T(u.theme || "tooltip", "placement")), f;
}
function h1(u, D, f) {
  var e, F = Vu(D);
  return F === "string" ? e = {
    content: D
  } : D && F === "object" ? e = D : e = {
    content: !1
  }, e.placement = DF(e, f), e.targetNodes = function() {
    return [u];
  }, e.referenceNode = function() {
    return u;
  }, e;
}
function fF(u, D, f) {
  var e = lf(h1(u, D, f)), F = lf(), t = L1({
    name: "VTooltipDirective",
    setup: function() {
      return {
        options: e,
        tooltip: F
      };
    },
    render: function() {
      return q1(ef, X(X({}, this.options), {}, {
        ref: "tooltip"
      }));
    },
    devtools: {
      hide: !0
    }
  }), a = document.createElement("div");
  document.body.appendChild(a), t.mount(a), u.$_popperMountTarget = a, u.classList && u.classList.add(m1);
  var n = u.$_popper = {
    app: t,
    options: e,
    component: F,
    show: function() {
      F.value.show();
    },
    hide: function() {
      F.value.hide();
    }
  };
  return n;
}
function B1(u) {
  u.$_popper && (u.$_popper.app.unmount(), u.$_popperMountTarget.parentElement && u.$_popperMountTarget.parentElement.removeChild(u.$_popperMountTarget), delete u.$_popper, delete u.$_popperOldShown, delete u.$_popperMountTarget), u.classList && u.classList.remove(m1);
}
function Pf(u, D) {
  var f = D.value, e = D.modifiers, F = h1(u, f, e);
  if (!F.content || T(F.theme || "tooltip", "disabled"))
    B1(u);
  else {
    var t;
    u.$_popper ? (t = u.$_popper, t.options.value = F) : t = fF(u, f, e), typeof f.shown < "u" && f.shown !== u.$_popperOldShown && (u.$_popperOldShown = f.shown, f.shown ? t.show() : t.hide());
  }
}
var eF = {
  beforeMount: Pf,
  updated: Pf,
  beforeUnmount: function(D) {
    B1(D);
  }
};
function Mf(u) {
  u.addEventListener("click", _1), u.addEventListener("touchstart", v1, Pu ? {
    passive: !0
  } : !1);
}
function Nf(u) {
  u.removeEventListener("click", _1), u.removeEventListener("touchstart", v1), u.removeEventListener("touchend", y1), u.removeEventListener("touchcancel", w1);
}
function _1(u) {
  var D = u.currentTarget;
  u.closePopover = !D.$_vclosepopover_touch, u.closeAllPopover = D.$_closePopoverModifiers && !!D.$_closePopoverModifiers.all;
}
function v1(u) {
  if (u.changedTouches.length === 1) {
    var D = u.currentTarget;
    D.$_vclosepopover_touch = !0;
    var f = u.changedTouches[0];
    D.$_vclosepopover_touchPoint = f, D.addEventListener("touchend", y1), D.addEventListener("touchcancel", w1);
  }
}
function y1(u) {
  var D = u.currentTarget;
  if (D.$_vclosepopover_touch = !1, u.changedTouches.length === 1) {
    var f = u.changedTouches[0], e = D.$_vclosepopover_touchPoint;
    u.closePopover = Math.abs(f.screenY - e.screenY) < 20 && Math.abs(f.screenX - e.screenX) < 20, u.closeAllPopover = D.$_closePopoverModifiers && !!D.$_closePopoverModifiers.all;
  }
}
function w1(u) {
  var D = u.currentTarget;
  D.$_vclosepopover_touch = !1;
}
var tF = {
  beforeMount: function(D, f) {
    var e = f.value, F = f.modifiers;
    D.$_closePopoverModifiers = F, (typeof e > "u" || e) && Mf(D);
  },
  updated: function(D, f) {
    var e = f.value, F = f.oldValue, t = f.modifiers;
    D.$_closePopoverModifiers = t, e !== F && (typeof e > "u" || e ? Mf(D) : Nf(D));
  },
  beforeUnmount: function(D) {
    Nf(D);
  }
};
function FF(u) {
  var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  u.$_vTooltipInstalled || (u.$_vTooltipInstalled = !0, l1(_u, D), u.directive("tooltip", eF), u.directive("close-popper", tF), u.component("v-tooltip", qD), u.component("VTooltip", qD), u.component("v-dropdown", ND), u.component("VDropdown", ND), u.component("v-menu", LD), u.component("VMenu", LD));
}
var aF = {
  // eslint-disable-next-line no-undef
  version: "4.0.0-beta.17",
  install: FF,
  options: _u
}, dD = { exports: {} }, Lf;
function nF() {
  if (Lf) return dD.exports;
  Lf = 1;
  function u() {
  }
  return u.prototype = {
    on: function(D, f, e) {
      var F = this.e || (this.e = {});
      return (F[D] || (F[D] = [])).push({
        fn: f,
        ctx: e
      }), this;
    },
    once: function(D, f, e) {
      var F = this;
      function t() {
        F.off(D, t), f.apply(e, arguments);
      }
      return t._ = f, this.on(D, t, e);
    },
    emit: function(D) {
      var f = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[D] || []).slice(), F = 0, t = e.length;
      for (F; F < t; F++)
        e[F].fn.apply(e[F].ctx, f);
      return this;
    },
    off: function(D, f) {
      var e = this.e || (this.e = {}), F = e[D], t = [];
      if (F && f)
        for (var a = 0, n = F.length; a < n; a++)
          F[a].fn !== f && F[a].fn._ !== f && t.push(F[a]);
      return t.length ? e[D] = t : delete e[D], this;
    }
  }, dD.exports = u, dD.exports.TinyEmitter = u, dD.exports;
}
var TD, qf;
function rF() {
  if (qf) return TD;
  qf = 1;
  var u = nF();
  return TD = new u(), TD;
}
var iF = rF();
const sD = /* @__PURE__ */ YD(iF), dF = {
  $on: (...u) => sD.on(...u),
  $once: (...u) => sD.once(...u),
  $off: (...u) => sD.off(...u),
  $emit: (...u) => sD.emit(...u)
}, sF = "BeautifulChat", CF = {
  install(u, D = {}) {
    this.installed || u.prototype && u.prototype.$isServer || (this.installed = !0, u.config.globalProperties.$event = dF, this.componentName = D.componentName || sF, u.component(this.componentName, p8), u.use(aF));
  }
};
export {
  CF as default
};
