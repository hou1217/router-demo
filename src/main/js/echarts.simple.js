!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
    "use strict";
    function e(t, e) {
        "createCanvas" === t && (ah = null),
        ih[t] = e
    }
    function n(t) {
        if (null == t || "object" != typeof t)
            return t;
        var e = t
          , i = $l.call(t);
        if ("[object Array]" === i) {
            if (!E(t)) {
                e = [];
                for (var r = 0, a = t.length; r < a; r++)
                    e[r] = n(t[r])
            }
        } else if (jl[i]) {
            if (!E(t)) {
                var o = t.constructor;
                if (t.constructor.from)
                    e = o.from(t);
                else {
                    e = new o(t.length);
                    for (var r = 0, a = t.length; r < a; r++)
                        e[r] = n(t[r])
                }
            }
        } else if (!Zl[i] && !E(t) && !M(t)) {
            e = {};
            for (var s in t)
                t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }
    function i(t, e, r) {
        if (!w(e) || !w(t))
            return r ? n(e) : t;
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var o = t[a]
                  , s = e[a];
                !w(s) || !w(o) || y(s) || y(o) || M(s) || M(o) || b(s) || b(o) || E(s) || E(o) ? !r && a in t || (t[a] = n(e[a], !0)) : i(o, s, r)
            }
        return t
    }
    function r(t, e) {
        for (var n = t[0], r = 1, a = t.length; r < a; r++)
            n = i(n, t[r], e);
        return n
    }
    function a(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    function o(t, e, n) {
        for (var i in e)
            e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }
    function s() {
        return ah || (ah = rh().getContext("2d")),
        ah
    }
    function l(t, e) {
        if (t) {
            if (t.indexOf)
                return t.indexOf(e);
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n
        }
        return -1
    }
    function h(t, e) {
        function n() {}
        var i = t.prototype;
        n.prototype = e.prototype,
        t.prototype = new n;
        for (var r in i)
            t.prototype[r] = i[r];
        t.prototype.constructor = t,
        t.superClass = e
    }
    function u(t, e, n) {
        o(t = "prototype"in t ? t.prototype : t, e = "prototype"in e ? e.prototype : e, n)
    }
    function c(t) {
        if (t)
            return "string" != typeof t && "number" == typeof t.length
    }
    function f(t, e, n) {
        if (t && e)
            if (t.forEach && t.forEach === Ql)
                t.forEach(e, n);
            else if (t.length === +t.length)
                for (var i = 0, r = t.length; i < r; i++)
                    e.call(n, t[i], i, t);
            else
                for (var a in t)
                    t.hasOwnProperty(a) && e.call(n, t[a], a, t)
    }
    function d(t, e, n) {
        if (t && e) {
            if (t.map && t.map === eh)
                return t.map(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++)
                i.push(e.call(n, t[r], r, t));
            return i
        }
    }
    function p(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === nh)
                return t.reduce(e, n, i);
            for (var r = 0, a = t.length; r < a; r++)
                n = e.call(i, n, t[r], r, t);
            return n
        }
    }
    function g(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === Jl)
                return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++)
                e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }
    function m(t, e) {
        var n = th.call(arguments, 2);
        return function() {
            return t.apply(e, n.concat(th.call(arguments)))
        }
    }
    function v(t) {
        var e = th.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(th.call(arguments)))
        }
    }
    function y(t) {
        return "[object Array]" === $l.call(t)
    }
    function _(t) {
        return "function" == typeof t
    }
    function x(t) {
        return "[object String]" === $l.call(t)
    }
    function w(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }
    function b(t) {
        return !!Zl[$l.call(t)]
    }
    function S(t) {
        return !!jl[$l.call(t)]
    }
    function M(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }
    function I(t) {
        return t !== t
    }
    function T(t) {
        for (var e = 0, n = arguments.length; e < n; e++)
            if (null != arguments[e])
                return arguments[e]
    }
    function C(t, e) {
        return null != t ? t : e
    }
    function D(t, e, n) {
        return null != t ? t : null != e ? e : n
    }
    function k() {
        return Function.call.apply(th, arguments)
    }
    function A(t) {
        if ("number" == typeof t)
            return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }
    function L(t, e) {
        if (!t)
            throw new Error(e)
    }
    function P(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    function O(t) {
        t[oh] = !0
    }
    function E(t) {
        return t[oh]
    }
    function B(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t)
        }
        var n = y(t)
          , i = this;
        t instanceof B ? t.each(e) : t && f(t, e)
    }
    function N(t) {
        return new B(t)
    }
    function R() {}
    function z(t, e) {
        var n = new sh(2);
        return null == t && (t = 0),
        null == e && (e = 0),
        n[0] = t,
        n[1] = e,
        n
    }
    function F(t) {
        var e = new sh(2);
        return e[0] = t[0],
        e[1] = t[1],
        e
    }
    function V(t, e, n) {
        return t[0] = e[0] + n[0],
        t[1] = e[1] + n[1],
        t
    }
    function W(t, e, n) {
        return t[0] = e[0] - n[0],
        t[1] = e[1] - n[1],
        t
    }
    function H(t) {
        return Math.sqrt(G(t))
    }
    function G(t) {
        return t[0] * t[0] + t[1] * t[1]
    }
    function q(t, e, n) {
        return t[0] = e[0] * n,
        t[1] = e[1] * n,
        t
    }
    function X(t, e) {
        var n = H(e);
        return 0 === n ? (t[0] = 0,
        t[1] = 0) : (t[0] = e[0] / n,
        t[1] = e[1] / n),
        t
    }
    function U(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }
    function Y(t, e, n) {
        var i = e[0]
          , r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4],
        t[1] = n[1] * i + n[3] * r + n[5],
        t
    }
    function Z(t, e, n) {
        return t[0] = Math.min(e[0], n[0]),
        t[1] = Math.min(e[1], n[1]),
        t
    }
    function j(t, e, n) {
        return t[0] = Math.max(e[0], n[0]),
        t[1] = Math.max(e[1], n[1]),
        t
    }
    function $() {
        this.on("mousedown", this._dragStart, this),
        this.on("mousemove", this._drag, this),
        this.on("mouseup", this._dragEnd, this),
        this.on("globalout", this._dragEnd, this)
    }
    function K(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        }
    }
    function Q(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which
        }
    }
    function J() {}
    function tt(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r; ) {
                if (r.clipPath && !r.clipPath.contain(e, n))
                    return !1;
                r.silent && (i = !0),
                r = r.parent
            }
            return !i || fh
        }
        return !1
    }
    function et() {
        var t = new gh(6);
        return nt(t),
        t
    }
    function nt(t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t[4] = 0,
        t[5] = 0,
        t
    }
    function it(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t
    }
    function rt(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1]
          , r = e[1] * n[0] + e[3] * n[1]
          , a = e[0] * n[2] + e[2] * n[3]
          , o = e[1] * n[2] + e[3] * n[3]
          , s = e[0] * n[4] + e[2] * n[5] + e[4]
          , l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i,
        t[1] = r,
        t[2] = a,
        t[3] = o,
        t[4] = s,
        t[5] = l,
        t
    }
    function at(t, e, n) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4] + n[0],
        t[5] = e[5] + n[1],
        t
    }
    function ot(t, e, n) {
        var i = e[0]
          , r = e[2]
          , a = e[4]
          , o = e[1]
          , s = e[3]
          , l = e[5]
          , h = Math.sin(n)
          , u = Math.cos(n);
        return t[0] = i * u + o * h,
        t[1] = -i * h + o * u,
        t[2] = r * u + s * h,
        t[3] = -r * h + u * s,
        t[4] = u * a + h * l,
        t[5] = u * l - h * a,
        t
    }
    function st(t, e, n) {
        var i = n[0]
          , r = n[1];
        return t[0] = e[0] * i,
        t[1] = e[1] * r,
        t[2] = e[2] * i,
        t[3] = e[3] * r,
        t[4] = e[4] * i,
        t[5] = e[5] * r,
        t
    }
    function lt(t, e) {
        var n = e[0]
          , i = e[2]
          , r = e[4]
          , a = e[1]
          , o = e[3]
          , s = e[5]
          , l = n * o - a * i;
        return l ? (l = 1 / l,
        t[0] = o * l,
        t[1] = -a * l,
        t[2] = -i * l,
        t[3] = n * l,
        t[4] = (i * s - o * r) * l,
        t[5] = (a * r - n * s) * l,
        t) : null
    }
    function ht(t) {
        return t > vh || t < -vh
    }
    function ut(t) {
        this._target = t.target,
        this._life = t.life || 1e3,
        this._delay = t.delay || 0,
        this._initialized = !1,
        this.loop = null != t.loop && t.loop,
        this.gap = t.gap || 0,
        this.easing = t.easing || "Linear",
        this.onframe = t.onframe,
        this.ondestroy = t.ondestroy,
        this.onrestart = t.onrestart,
        this._pausedTime = 0,
        this._paused = !1
    }
    function ct(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }
    function ft(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }
    function dt(t) {
        return ct(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }
    function pt(t) {
        return ft(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }
    function gt(t, e, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1),
        6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }
    function mt(t, e, n, i, r) {
        return t[0] = e,
        t[1] = n,
        t[2] = i,
        t[3] = r,
        t
    }
    function vt(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }
    function yt(t, e) {
        kh && vt(kh, e),
        kh = Dh.put(t, kh || e.slice())
    }
    function _t(t, e) {
        if (t) {
            e = e || [];
            var n = Dh.get(t);
            if (n)
                return vt(e, n);
            var i = (t += "").replace(/ /g, "").toLowerCase();
            if (i in Ch)
                return vt(e, Ch[i]),
                yt(t, e),
                e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("(")
                  , a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var o = i.substr(0, r)
                      , s = i.substr(r + 1, a - (r + 1)).split(",")
                      , l = 1;
                    switch (o) {
                    case "rgba":
                        if (4 !== s.length)
                            return void mt(e, 0, 0, 0, 1);
                        l = pt(s.pop());
                    case "rgb":
                        return 3 !== s.length ? void mt(e, 0, 0, 0, 1) : (mt(e, dt(s[0]), dt(s[1]), dt(s[2]), l),
                        yt(t, e),
                        e);
                    case "hsla":
                        return 4 !== s.length ? void mt(e, 0, 0, 0, 1) : (s[3] = pt(s[3]),
                        xt(s, e),
                        yt(t, e),
                        e);
                    case "hsl":
                        return 3 !== s.length ? void mt(e, 0, 0, 0, 1) : (xt(s, e),
                        yt(t, e),
                        e);
                    default:
                        return
                    }
                }
                mt(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length)
                    return (h = parseInt(i.substr(1), 16)) >= 0 && h <= 4095 ? (mt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1),
                    yt(t, e),
                    e) : void mt(e, 0, 0, 0, 1);
                if (7 === i.length) {
                    var h = parseInt(i.substr(1), 16);
                    return h >= 0 && h <= 16777215 ? (mt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1),
                    yt(t, e),
                    e) : void mt(e, 0, 0, 0, 1)
                }
            }
        }
    }
    function xt(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360
          , i = pt(t[1])
          , r = pt(t[2])
          , a = r <= .5 ? r * (i + 1) : r + i - r * i
          , o = 2 * r - a;
        return e = e || [],
        mt(e, ct(255 * gt(o, a, n + 1 / 3)), ct(255 * gt(o, a, n)), ct(255 * gt(o, a, n - 1 / 3)), 1),
        4 === t.length && (e[3] = t[3]),
        e
    }
    function wt(t, e) {
        var n = _t(t);
        if (n) {
            for (var i = 0; i < 3; i++)
                n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0,
                n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return bt(n, 4 === n.length ? "rgba" : "rgb")
        }
    }
    function bt(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]),
            e + "(" + n + ")"
        }
    }
    function St(t, e) {
        return t[e]
    }
    function Mt(t, e, n) {
        t[e] = n
    }
    function It(t, e, n) {
        return (e - t) * n + t
    }
    function Tt(t, e, n) {
        return n > .5 ? e : t
    }
    function Ct(t, e, n, i, r) {
        var a = t.length;
        if (1 == r)
            for (s = 0; s < a; s++)
                i[s] = It(t[s], e[s], n);
        else
            for (var o = a && t[0].length, s = 0; s < a; s++)
                for (var l = 0; l < o; l++)
                    i[s][l] = It(t[s][l], e[s][l], n)
    }
    function Dt(t, e, n) {
        var i = t.length
          , r = e.length;
        if (i !== r)
            if (i > r)
                t.length = r;
            else
                for (o = i; o < r; o++)
                    t.push(1 === n ? e[o] : Ah.call(e[o]));
        for (var a = t[0] && t[0].length, o = 0; o < t.length; o++)
            if (1 === n)
                isNaN(t[o]) && (t[o] = e[o]);
            else
                for (var s = 0; s < a; s++)
                    isNaN(t[o][s]) && (t[o][s] = e[o][s])
    }
    function kt(t, e, n) {
        if (t === e)
            return !0;
        var i = t.length;
        if (i !== e.length)
            return !1;
        if (1 === n) {
            for (a = 0; a < i; a++)
                if (t[a] !== e[a])
                    return !1
        } else
            for (var r = t[0].length, a = 0; a < i; a++)
                for (var o = 0; o < r; o++)
                    if (t[a][o] !== e[a][o])
                        return !1;
        return !0
    }
    function At(t, e, n, i, r, a, o, s, l) {
        var h = t.length;
        if (1 == l)
            for (c = 0; c < h; c++)
                s[c] = Lt(t[c], e[c], n[c], i[c], r, a, o);
        else
            for (var u = t[0].length, c = 0; c < h; c++)
                for (var f = 0; f < u; f++)
                    s[c][f] = Lt(t[c][f], e[c][f], n[c][f], i[c][f], r, a, o)
    }
    function Lt(t, e, n, i, r, a, o) {
        var s = .5 * (n - t)
          , l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }
    function Pt(t) {
        if (c(t)) {
            var e = t.length;
            if (c(t[0])) {
                for (var n = [], i = 0; i < e; i++)
                    n.push(Ah.call(t[i]));
                return n
            }
            return Ah.call(t)
        }
        return t
    }
    function Ot(t) {
        return t[0] = Math.floor(t[0]),
        t[1] = Math.floor(t[1]),
        t[2] = Math.floor(t[2]),
        "rgba(" + t.join(",") + ")"
    }
    function Et(t) {
        var e = t[t.length - 1].value;
        return c(e && e[0]) ? 2 : 1
    }
    function Bt(t, e, n, i, r, a) {
        var o = t._getter
          , s = t._setter
          , l = "spline" === e
          , h = i.length;
        if (h) {
            var u, f = c(i[0].value), d = !1, p = !1, g = f ? Et(i) : 0;
            i.sort(function(t, e) {
                return t.time - e.time
            }),
            u = i[h - 1].time;
            for (var m = [], v = [], y = i[0].value, _ = !0, x = 0; x < h; x++) {
                m.push(i[x].time / u);
                var w = i[x].value;
                if (f && kt(w, y, g) || !f && w === y || (_ = !1),
                y = w,
                "string" == typeof w) {
                    var b = _t(w);
                    b ? (w = b,
                    d = !0) : p = !0
                }
                v.push(w)
            }
            if (a || !_) {
                for (var S = v[h - 1], x = 0; x < h - 1; x++)
                    f ? Dt(v[x], S, g) : !isNaN(v[x]) || isNaN(S) || p || d || (v[x] = S);
                f && Dt(o(t._target, r), S, g);
                var M, I, T, C, D, k, A = 0, L = 0;
                if (d)
                    var P = [0, 0, 0, 0];
                var O = new ut({
                    target: t._target,
                    life: u,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: function(t, e) {
                        var n;
                        if (e < 0)
                            n = 0;
                        else if (e < L) {
                            for (n = M = Math.min(A + 1, h - 1); n >= 0 && !(m[n] <= e); n--)
                                ;
                            n = Math.min(n, h - 2)
                        } else {
                            for (n = A; n < h && !(m[n] > e); n++)
                                ;
                            n = Math.min(n - 1, h - 2)
                        }
                        A = n,
                        L = e;
                        var i = m[n + 1] - m[n];
                        if (0 !== i)
                            if (I = (e - m[n]) / i,
                            l)
                                if (C = v[n],
                                T = v[0 === n ? n : n - 1],
                                D = v[n > h - 2 ? h - 1 : n + 1],
                                k = v[n > h - 3 ? h - 1 : n + 2],
                                f)
                                    At(T, C, D, k, I, I * I, I * I * I, o(t, r), g);
                                else {
                                    if (d)
                                        a = At(T, C, D, k, I, I * I, I * I * I, P, 1),
                                        a = Ot(P);
                                    else {
                                        if (p)
                                            return Tt(C, D, I);
                                        a = Lt(T, C, D, k, I, I * I, I * I * I)
                                    }
                                    s(t, r, a)
                                }
                            else if (f)
                                Ct(v[n], v[n + 1], I, o(t, r), g);
                            else {
                                var a;
                                if (d)
                                    Ct(v[n], v[n + 1], I, P, 1),
                                    a = Ot(P);
                                else {
                                    if (p)
                                        return Tt(v[n], v[n + 1], I);
                                    a = It(v[n], v[n + 1], I)
                                }
                                s(t, r, a)
                            }
                    },
                    ondestroy: n
                });
                return e && "spline" !== e && (O.easing = e),
                O
            }
        }
    }
    function Nt(t, e, n, i) {
        n < 0 && (t += n,
        n = -n),
        i < 0 && (e += i,
        i = -i),
        this.x = t,
        this.y = e,
        this.width = n,
        this.height = i
    }
    function Rt(t) {
        for (var e = 0; t >= Hh; )
            e |= 1 & t,
            t >>= 1;
        return t + e
    }
    function zt(t, e, n, i) {
        var r = e + 1;
        if (r === n)
            return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; r < n && i(t[r], t[r - 1]) < 0; )
                r++;
            Ft(t, e, r)
        } else
            for (; r < n && i(t[r], t[r - 1]) >= 0; )
                r++;
        return r - e
    }
    function Ft(t, e, n) {
        for (n--; e < n; ) {
            var i = t[e];
            t[e++] = t[n],
            t[n--] = i
        }
    }
    function Vt(t, e, n, i, r) {
        for (i === e && i++; i < n; i++) {
            for (var a, o = t[i], s = e, l = i; s < l; )
                r(o, t[a = s + l >>> 1]) < 0 ? l = a : s = a + 1;
            var h = i - s;
            switch (h) {
            case 3:
                t[s + 3] = t[s + 2];
            case 2:
                t[s + 2] = t[s + 1];
            case 1:
                t[s + 1] = t[s];
                break;
            default:
                for (; h > 0; )
                    t[s + h] = t[s + h - 1],
                    h--
            }
            t[s] = o
        }
    }
    function Wt(t, e, n, i, r, a) {
        var o = 0
          , s = 0
          , l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; l < s && a(t, e[n + r + l]) > 0; )
                o = l,
                (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s),
            o += r,
            l += r
        } else {
            for (s = r + 1; l < s && a(t, e[n + r - l]) <= 0; )
                o = l,
                (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l,
            l = r - h
        }
        for (o++; o < l; ) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) > 0 ? o = u + 1 : l = u
        }
        return l
    }
    function Ht(t, e, n, i, r, a) {
        var o = 0
          , s = 0
          , l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && a(t, e[n + r - l]) < 0; )
                o = l,
                (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l,
            l = r - h
        } else {
            for (s = i - r; l < s && a(t, e[n + r + l]) >= 0; )
                o = l,
                (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s),
            o += r,
            l += r
        }
        for (o++; o < l; ) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) < 0 ? l = u : o = u + 1
        }
        return l
    }
    function Gt(t, e) {
        function n(n) {
            var s = a[n]
              , h = o[n]
              , u = a[n + 1]
              , c = o[n + 1];
            o[n] = h + c,
            n === l - 3 && (a[n + 1] = a[n + 2],
            o[n + 1] = o[n + 2]),
            l--;
            var f = Ht(t[u], t, s, h, 0, e);
            s += f,
            0 !== (h -= f) && 0 !== (c = Wt(t[s + h - 1], t, u, c, c - 1, e)) && (h <= c ? i(s, h, u, c) : r(s, h, u, c))
        }
        function i(n, i, r, a) {
            var o = 0;
            for (o = 0; o < i; o++)
                h[o] = t[n + o];
            var l = 0
              , u = r
              , c = n;
            if (t[c++] = t[u++],
            0 != --a)
                if (1 !== i) {
                    for (var f, d, p, g = s; ; ) {
                        f = 0,
                        d = 0,
                        p = !1;
                        do {
                            if (e(t[u], h[l]) < 0) {
                                if (t[c++] = t[u++],
                                d++,
                                f = 0,
                                0 == --a) {
                                    p = !0;
                                    break
                                }
                            } else if (t[c++] = h[l++],
                            f++,
                            d = 0,
                            1 == --i) {
                                p = !0;
                                break
                            }
                        } while ((f | d) < g);if (p)
                            break;
                        do {
                            if (0 !== (f = Ht(t[u], h, l, i, 0, e))) {
                                for (o = 0; o < f; o++)
                                    t[c + o] = h[l + o];
                                if (c += f,
                                l += f,
                                (i -= f) <= 1) {
                                    p = !0;
                                    break
                                }
                            }
                            if (t[c++] = t[u++],
                            0 == --a) {
                                p = !0;
                                break
                            }
                            if (0 !== (d = Wt(h[l], t, u, a, 0, e))) {
                                for (o = 0; o < d; o++)
                                    t[c + o] = t[u + o];
                                if (c += d,
                                u += d,
                                0 === (a -= d)) {
                                    p = !0;
                                    break
                                }
                            }
                            if (t[c++] = h[l++],
                            1 == --i) {
                                p = !0;
                                break
                            }
                            g--
                        } while (f >= Gh || d >= Gh);if (p)
                            break;
                        g < 0 && (g = 0),
                        g += 2
                    }
                    if ((s = g) < 1 && (s = 1),
                    1 === i) {
                        for (o = 0; o < a; o++)
                            t[c + o] = t[u + o];
                        t[c + a] = h[l]
                    } else {
                        if (0 === i)
                            throw new Error;
                        for (o = 0; o < i; o++)
                            t[c + o] = h[l + o]
                    }
                } else {
                    for (o = 0; o < a; o++)
                        t[c + o] = t[u + o];
                    t[c + a] = h[l]
                }
            else
                for (o = 0; o < i; o++)
                    t[c + o] = h[l + o]
        }
        function r(n, i, r, a) {
            var o = 0;
            for (o = 0; o < a; o++)
                h[o] = t[r + o];
            var l = n + i - 1
              , u = a - 1
              , c = r + a - 1
              , f = 0
              , d = 0;
            if (t[c--] = t[l--],
            0 != --i)
                if (1 !== a) {
                    for (var p = s; ; ) {
                        var g = 0
                          , m = 0
                          , v = !1;
                        do {
                            if (e(h[u], t[l]) < 0) {
                                if (t[c--] = t[l--],
                                g++,
                                m = 0,
                                0 == --i) {
                                    v = !0;
                                    break
                                }
                            } else if (t[c--] = h[u--],
                            m++,
                            g = 0,
                            1 == --a) {
                                v = !0;
                                break
                            }
                        } while ((g | m) < p);if (v)
                            break;
                        do {
                            if (0 != (g = i - Ht(h[u], t, n, i, i - 1, e))) {
                                for (i -= g,
                                d = (c -= g) + 1,
                                f = (l -= g) + 1,
                                o = g - 1; o >= 0; o--)
                                    t[d + o] = t[f + o];
                                if (0 === i) {
                                    v = !0;
                                    break
                                }
                            }
                            if (t[c--] = h[u--],
                            1 == --a) {
                                v = !0;
                                break
                            }
                            if (0 != (m = a - Wt(t[l], h, 0, a, a - 1, e))) {
                                for (a -= m,
                                d = (c -= m) + 1,
                                f = (u -= m) + 1,
                                o = 0; o < m; o++)
                                    t[d + o] = h[f + o];
                                if (a <= 1) {
                                    v = !0;
                                    break
                                }
                            }
                            if (t[c--] = t[l--],
                            0 == --i) {
                                v = !0;
                                break
                            }
                            p--
                        } while (g >= Gh || m >= Gh);if (v)
                            break;
                        p < 0 && (p = 0),
                        p += 2
                    }
                    if ((s = p) < 1 && (s = 1),
                    1 === a) {
                        for (d = (c -= i) + 1,
                        f = (l -= i) + 1,
                        o = i - 1; o >= 0; o--)
                            t[d + o] = t[f + o];
                        t[c] = h[u]
                    } else {
                        if (0 === a)
                            throw new Error;
                        for (f = c - (a - 1),
                        o = 0; o < a; o++)
                            t[f + o] = h[o]
                    }
                } else {
                    for (d = (c -= i) + 1,
                    f = (l -= i) + 1,
                    o = i - 1; o >= 0; o--)
                        t[d + o] = t[f + o];
                    t[c] = h[u]
                }
            else
                for (f = c - (a - 1),
                o = 0; o < a; o++)
                    t[f + o] = h[o]
        }
        var a, o, s = Gh, l = 0, h = [];
        a = [],
        o = [],
        this.mergeRuns = function() {
            for (; l > 1; ) {
                var t = l - 2;
                if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1])
                    o[t - 1] < o[t + 1] && t--;
                else if (o[t] > o[t + 1])
                    break;
                n(t)
            }
        }
        ,
        this.forceMergeRuns = function() {
            for (; l > 1; ) {
                var t = l - 2;
                t > 0 && o[t - 1] < o[t + 1] && t--,
                n(t)
            }
        }
        ,
        this.pushRun = function(t, e) {
            a[l] = t,
            o[l] = e,
            l += 1
        }
    }
    function qt(t, e, n, i) {
        n || (n = 0),
        i || (i = t.length);
        var r = i - n;
        if (!(r < 2)) {
            var a = 0;
            if (r < Hh)
                return a = zt(t, n, i, e),
                void Vt(t, n, i, n + a, e);
            var o = new Gt(t,e)
              , s = Rt(r);
            do {
                if ((a = zt(t, n, i, e)) < s) {
                    var l = r;
                    l > s && (l = s),
                    Vt(t, n, n + l, n + a, e),
                    a = l
                }
                o.pushRun(n, a),
                o.mergeRuns(),
                r -= a,
                n += a
            } while (0 !== r);o.forceMergeRuns()
        }
    }
    function Xt(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }
    function Ut(t, e, n) {
        var i = null == e.x ? 0 : e.x
          , r = null == e.x2 ? 1 : e.x2
          , a = null == e.y ? 0 : e.y
          , o = null == e.y2 ? 0 : e.y2;
        return e.global || (i = i * n.width + n.x,
        r = r * n.width + n.x,
        a = a * n.height + n.y,
        o = o * n.height + n.y),
        i = isNaN(i) ? 0 : i,
        r = isNaN(r) ? 1 : r,
        a = isNaN(a) ? 0 : a,
        o = isNaN(o) ? 0 : o,
        t.createLinearGradient(i, a, r, o)
    }
    function Yt(t, e, n) {
        var i = n.width
          , r = n.height
          , a = Math.min(i, r)
          , o = null == e.x ? .5 : e.x
          , s = null == e.y ? .5 : e.y
          , l = null == e.r ? .5 : e.r;
        return e.global || (o = o * i + n.x,
        s = s * r + n.y,
        l *= a),
        t.createRadialGradient(o, s, 0, o, s, l)
    }
    function Zt() {
        return !1
    }
    function jt(t, e, n) {
        var i = rh()
          , r = e.getWidth()
          , a = e.getHeight()
          , o = i.style;
        return o && (o.position = "absolute",
        o.left = 0,
        o.top = 0,
        o.width = r + "px",
        o.height = a + "px",
        i.setAttribute("data-zr-dom-id", t)),
        i.width = r * n,
        i.height = a * n,
        i
    }
    function $t(t) {
        if ("string" == typeof t) {
            var e = eu.get(t);
            return e && e.image
        }
        return t
    }
    function Kt(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n)
                    return e;
                var a = eu.get(t)
                  , o = {
                    hostEl: n,
                    cb: i,
                    cbPayload: r
                };
                return a ? !Jt(e = a.image) && a.pending.push(o) : (!e && (e = new Image),
                e.onload = Qt,
                eu.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [o]
                }),
                e.src = e.__zrImageSrc = t),
                e
            }
            return t
        }
        return e
    }
    function Qt() {
        var t = this.__cachedImgObj;
        this.onload = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e]
              , i = n.cb;
            i && i(this, n.cbPayload),
            n.hostEl.dirty()
        }
        t.pending.length = 0
    }
    function Jt(t) {
        return t && t.width && t.height
    }
    function te(t, e) {
        var n = t + ":" + (e = e || ou);
        if (nu[n])
            return nu[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; a < o; a++)
            r = Math.max(fe(i[a], e).width, r);
        return iu > ru && (iu = 0,
        nu = {}),
        iu++,
        nu[n] = r,
        r
    }
    function ee(t, e, n, i, r, a, o) {
        return a ? ie(t, e, n, i, r, a, o) : ne(t, e, n, i, r, o)
    }
    function ne(t, e, n, i, r, a) {
        var o = de(t, e, r, a)
          , s = te(t, e);
        r && (s += r[1] + r[3]);
        var l = o.outerHeight
          , h = new Nt(re(0, s, n),ae(0, l, i),s,l);
        return h.lineHeight = o.lineHeight,
        h
    }
    function ie(t, e, n, i, r, a, o) {
        var s = pe(t, {
            rich: a,
            truncate: o,
            font: e,
            textAlign: n,
            textPadding: r
        })
          , l = s.outerWidth
          , h = s.outerHeight;
        return new Nt(re(0, l, n),ae(0, h, i),l,h)
    }
    function re(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2),
        t
    }
    function ae(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e),
        t
    }
    function oe(t, e, n) {
        var i = e.x
          , r = e.y
          , a = e.height
          , o = e.width
          , s = a / 2
          , l = "left"
          , h = "top";
        switch (t) {
        case "left":
            i -= n,
            r += s,
            l = "right",
            h = "middle";
            break;
        case "right":
            i += n + o,
            r += s,
            h = "middle";
            break;
        case "top":
            i += o / 2,
            r -= n,
            l = "center",
            h = "bottom";
            break;
        case "bottom":
            i += o / 2,
            r += a + n,
            l = "center";
            break;
        case "inside":
            i += o / 2,
            r += s,
            l = "center",
            h = "middle";
            break;
        case "insideLeft":
            i += n,
            r += s,
            h = "middle";
            break;
        case "insideRight":
            i += o - n,
            r += s,
            l = "right",
            h = "middle";
            break;
        case "insideTop":
            i += o / 2,
            r += n,
            l = "center";
            break;
        case "insideBottom":
            i += o / 2,
            r += a - n,
            l = "center",
            h = "bottom";
            break;
        case "insideTopLeft":
            i += n,
            r += n;
            break;
        case "insideTopRight":
            i += o - n,
            r += n,
            l = "right";
            break;
        case "insideBottomLeft":
            i += n,
            r += a - n,
            h = "bottom";
            break;
        case "insideBottomRight":
            i += o - n,
            r += a - n,
            l = "right",
            h = "bottom"
        }
        return {
            x: i,
            y: r,
            textAlign: l,
            textVerticalAlign: h
        }
    }
    function se(t, e, n, i, r) {
        if (!e)
            return "";
        var a = (t + "").split("\n");
        r = le(e, n, i, r);
        for (var o = 0, s = a.length; o < s; o++)
            a[o] = he(a[o], r);
        return a.join("\n")
    }
    function le(t, e, n, i) {
        (i = a({}, i)).font = e;
        var n = C(n, "...");
        i.maxIterations = C(i.maxIterations, 2);
        var r = i.minChar = C(i.minChar, 0);
        i.cnCharWidth = te("国", e);
        var o = i.ascCharWidth = te("a", e);
        i.placeholder = C(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < r && s >= o; l++)
            s -= o;
        var h = te(n);
        return h > s && (n = "",
        h = 0),
        s = t - h,
        i.ellipsis = n,
        i.ellipsisWidth = h,
        i.contentWidth = s,
        i.containerWidth = t,
        i
    }
    function he(t, e) {
        var n = e.containerWidth
          , i = e.font
          , r = e.contentWidth;
        if (!n)
            return "";
        var a = te(t, i);
        if (a <= n)
            return t;
        for (var o = 0; ; o++) {
            if (a <= r || o >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === o ? ue(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            a = te(t = t.substr(0, s), i)
        }
        return "" === t && (t = e.placeholder),
        t
    }
    function ue(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
            var s = t.charCodeAt(a);
            r += 0 <= s && s <= 127 ? n : i
        }
        return a
    }
    function ce(t) {
        return te("国", t)
    }
    function fe(t, e) {
        return su.measureText(t, e)
    }
    function de(t, e, n, i) {
        null != t && (t += "");
        var r = ce(e)
          , a = t ? t.split("\n") : []
          , o = a.length * r
          , s = o;
        if (n && (s += n[0] + n[2]),
        t && i) {
            var l = i.outerHeight
              , h = i.outerWidth;
            if (null != l && s > l)
                t = "",
                a = [];
            else if (null != h)
                for (var u = le(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                    minChar: i.minChar,
                    placeholder: i.placeholder
                }), c = 0, f = a.length; c < f; c++)
                    a[c] = he(a[c], u)
        }
        return {
            lines: a,
            height: o,
            outerHeight: s,
            lineHeight: r
        }
    }
    function pe(t, e) {
        var n = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""),
        !t)
            return n;
        for (var i, r = au.lastIndex = 0; null != (i = au.exec(t)); ) {
            var a = i.index;
            a > r && ge(n, t.substring(r, a)),
            ge(n, i[2], i[1]),
            r = au.lastIndex
        }
        r < t.length && ge(n, t.substring(r, t.length));
        var o = n.lines
          , s = 0
          , l = 0
          , h = []
          , u = e.textPadding
          , c = e.truncate
          , f = c && c.outerWidth
          , d = c && c.outerHeight;
        u && (null != f && (f -= u[1] + u[3]),
        null != d && (d -= u[0] + u[2]));
        for (A = 0; A < o.length; A++) {
            for (var p = o[A], g = 0, m = 0, v = 0; v < p.tokens.length; v++) {
                var y = (L = p.tokens[v]).styleName && e.rich[L.styleName] || {}
                  , _ = L.textPadding = y.textPadding
                  , x = L.font = y.font || e.font
                  , w = L.textHeight = C(y.textHeight, ce(x));
                if (_ && (w += _[0] + _[2]),
                L.height = w,
                L.lineHeight = D(y.textLineHeight, e.textLineHeight, w),
                L.textAlign = y && y.textAlign || e.textAlign,
                L.textVerticalAlign = y && y.textVerticalAlign || "middle",
                null != d && s + L.lineHeight > d)
                    return {
                        lines: [],
                        width: 0,
                        height: 0
                    };
                L.textWidth = te(L.text, x);
                var b = y.textWidth
                  , S = null == b || "auto" === b;
                if ("string" == typeof b && "%" === b.charAt(b.length - 1))
                    L.percentWidth = b,
                    h.push(L),
                    b = 0;
                else {
                    if (S) {
                        b = L.textWidth;
                        var M = y.textBackgroundColor
                          , I = M && M.image;
                        I && Jt(I = $t(I)) && (b = Math.max(b, I.width * w / I.height))
                    }
                    var T = _ ? _[1] + _[3] : 0;
                    b += T;
                    var k = null != f ? f - m : null;
                    null != k && k < b && (!S || k < T ? (L.text = "",
                    L.textWidth = b = 0) : (L.text = se(L.text, k - T, x, c.ellipsis, {
                        minChar: c.minChar
                    }),
                    L.textWidth = te(L.text, x),
                    b = L.textWidth + T))
                }
                m += L.width = b,
                y && (g = Math.max(g, L.lineHeight))
            }
            p.width = m,
            p.lineHeight = g,
            s += g,
            l = Math.max(l, m)
        }
        n.outerWidth = n.width = C(e.textWidth, l),
        n.outerHeight = n.height = C(e.textHeight, s),
        u && (n.outerWidth += u[1] + u[3],
        n.outerHeight += u[0] + u[2]);
        for (var A = 0; A < h.length; A++) {
            var L = h[A]
              , P = L.percentWidth;
            L.width = parseInt(P, 10) / 100 * l
        }
        return n
    }
    function ge(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o]
              , l = {
                styleName: n,
                text: s,
                isLineHolder: !s && !i
            };
            if (o)
                a.push({
                    tokens: [l]
                });
            else {
                var h = (a[a.length - 1] || (a[0] = {
                    tokens: []
                })).tokens
                  , u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
            }
        }
    }
    function me(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && P(e) || t.textFont || t.font
    }
    function ve(t, e) {
        var n, i, r, a, o = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
        l < 0 && (o += l,
        l = -l),
        h < 0 && (s += h,
        h = -h),
        "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0],
        i = a = u[1]) : 3 === u.length ? (n = u[0],
        i = a = u[1],
        r = u[2]) : (n = u[0],
        i = u[1],
        r = u[2],
        a = u[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (n *= l / (c = n + i),
        i *= l / c),
        r + a > l && (r *= l / (c = r + a),
        a *= l / c),
        i + r > h && (i *= h / (c = i + r),
        r *= h / c),
        n + a > h && (n *= h / (c = n + a),
        a *= h / c),
        t.moveTo(o + n, s),
        t.lineTo(o + l - i, s),
        0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0),
        t.lineTo(o + l, s + h - r),
        0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2),
        t.lineTo(o + a, s + h),
        0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI),
        t.lineTo(o, s + n),
        0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }
    function ye(t) {
        return _e(t),
        f(t.rich, _e),
        t
    }
    function _e(t) {
        if (t) {
            t.font = me(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"),
            t.textAlign = null == e || lu[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"),
            t.textVerticalAlign = null == n || hu[n] ? n : "top",
            t.textPadding && (t.textPadding = A(t.textPadding))
        }
    }
    function xe(t, e, n, i, r) {
        i.rich ? be(t, e, n, i, r) : we(t, e, n, i, r)
    }
    function we(t, e, n, i, r) {
        var a = Ae(e, "font", i.font || ou)
          , o = i.textPadding
          , s = t.__textCotentBlock;
        s && !t.__dirty || (s = t.__textCotentBlock = de(n, a, o, i.truncate));
        var l = s.outerHeight
          , h = s.lines
          , u = s.lineHeight
          , c = ke(l, i, r)
          , f = c.baseX
          , d = c.baseY
          , p = c.textAlign
          , g = c.textVerticalAlign;
        Me(e, i, r, f, d);
        var m = ae(d, l, g)
          , v = f
          , y = m
          , _ = Te(i);
        if (_ || o) {
            var x = te(n, a);
            o && (x += o[1] + o[3]);
            var w = re(f, x, p);
            _ && Ce(t, e, i, w, m, x, l),
            o && (v = Ee(f, p, o),
            y += o[0])
        }
        Ae(e, "textAlign", p || "left"),
        Ae(e, "textBaseline", "middle"),
        Ae(e, "shadowBlur", i.textShadowBlur || 0),
        Ae(e, "shadowColor", i.textShadowColor || "transparent"),
        Ae(e, "shadowOffsetX", i.textShadowOffsetX || 0),
        Ae(e, "shadowOffsetY", i.textShadowOffsetY || 0),
        y += u / 2;
        var b = i.textStrokeWidth
          , S = Le(i.textStroke, b)
          , M = Pe(i.textFill);
        S && (Ae(e, "lineWidth", b),
        Ae(e, "strokeStyle", S)),
        M && Ae(e, "fillStyle", M);
        for (var I = 0; I < h.length; I++)
            S && e.strokeText(h[I], v, y),
            M && e.fillText(h[I], v, y),
            y += u
    }
    function be(t, e, n, i, r) {
        var a = t.__textCotentBlock;
        a && !t.__dirty || (a = t.__textCotentBlock = pe(n, i)),
        Se(t, e, a, i, r)
    }
    function Se(t, e, n, i, r) {
        var a = n.width
          , o = n.outerWidth
          , s = n.outerHeight
          , l = i.textPadding
          , h = ke(s, i, r)
          , u = h.baseX
          , c = h.baseY
          , f = h.textAlign
          , d = h.textVerticalAlign;
        Me(e, i, r, u, c);
        var p = re(u, o, f)
          , g = ae(c, s, d)
          , m = p
          , v = g;
        l && (m += l[3],
        v += l[0]);
        var y = m + a;
        Te(i) && Ce(t, e, i, p, g, o, s);
        for (var _ = 0; _ < n.lines.length; _++) {
            for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = m, D = y, k = S - 1; T < S && (!(x = b[T]).textAlign || "left" === x.textAlign); )
                Ie(t, e, x, i, M, v, C, "left"),
                I -= x.width,
                C += x.width,
                T++;
            for (; k >= 0 && "right" === (x = b[k]).textAlign; )
                Ie(t, e, x, i, M, v, D, "right"),
                I -= x.width,
                D -= x.width,
                k--;
            for (C += (a - (C - m) - (y - D) - I) / 2; T <= k; )
                Ie(t, e, x = b[T], i, M, v, C + x.width / 2, "center"),
                C += x.width,
                T++;
            v += M
        }
    }
    function Me(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x,
            r = n.height / 2 + n.y) : a && (i = a[0] + n.x,
            r = a[1] + n.y),
            t.translate(i, r),
            t.rotate(-e.textRotation),
            t.translate(-i, -r)
        }
    }
    function Ie(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {}
          , h = n.textVerticalAlign
          , u = a + r / 2;
        "top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2),
        !n.isLineHolder && Te(l) && Ce(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (o = Ee(o, s, c),
        u -= n.height / 2 - c[2] - n.textHeight / 2),
        Ae(e, "shadowBlur", D(l.textShadowBlur, i.textShadowBlur, 0)),
        Ae(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"),
        Ae(e, "shadowOffsetX", D(l.textShadowOffsetX, i.textShadowOffsetX, 0)),
        Ae(e, "shadowOffsetY", D(l.textShadowOffsetY, i.textShadowOffsetY, 0)),
        Ae(e, "textAlign", s),
        Ae(e, "textBaseline", "middle"),
        Ae(e, "font", n.font || ou);
        var f = Le(l.textStroke || i.textStroke, p)
          , d = Pe(l.textFill || i.textFill)
          , p = C(l.textStrokeWidth, i.textStrokeWidth);
        f && (Ae(e, "lineWidth", p),
        Ae(e, "strokeStyle", f),
        e.strokeText(n.text, o, u)),
        d && (Ae(e, "fillStyle", d),
        e.fillText(n.text, o, u))
    }
    function Te(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }
    function Ce(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor
          , l = n.textBorderWidth
          , h = n.textBorderColor
          , u = x(s);
        if (Ae(e, "shadowBlur", n.textBoxShadowBlur || 0),
        Ae(e, "shadowColor", n.textBoxShadowColor || "transparent"),
        Ae(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0),
        Ae(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0),
        u || l && h) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? ve(e, {
                x: i,
                y: r,
                width: a,
                height: o,
                r: c
            }) : e.rect(i, r, a, o),
            e.closePath()
        }
        if (u)
            Ae(e, "fillStyle", s),
            e.fill();
        else if (w(s)) {
            var f = s.image;
            (f = Kt(f, null, t, De, s)) && Jt(f) && e.drawImage(f, i, r, a, o)
        }
        l && h && (Ae(e, "lineWidth", l),
        Ae(e, "strokeStyle", h),
        e.stroke())
    }
    function De(t, e) {
        e.image = t
    }
    function ke(t, e, n) {
        var i = e.x || 0
          , r = e.y || 0
          , a = e.textAlign
          , o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array)
                i = n.x + Oe(s[0], n.width),
                r = n.y + Oe(s[1], n.height);
            else {
                var l = oe(s, n, e.textDistance);
                i = l.x,
                r = l.y,
                a = a || l.textAlign,
                o = o || l.textVerticalAlign
            }
            var h = e.textOffset;
            h && (i += h[0],
            r += h[1])
        }
        return {
            baseX: i,
            baseY: r,
            textAlign: a,
            textVerticalAlign: o
        }
    }
    function Ae(t, e, n) {
        return t[e] = Uh(t, e, n),
        t[e]
    }
    function Le(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }
    function Pe(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }
    function Oe(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }
    function Ee(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }
    function Be(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }
    function Ne(t) {
        t = t || {},
        Rh.call(this, t);
        for (var e in t)
            t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new Zh(t.style,this),
        this._rect = null,
        this.__clipPaths = []
    }
    function Re(t) {
        Ne.call(this, t)
    }
    function ze(t) {
        return parseInt(t, 10)
    }
    function Fe(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }
    function Ve(t, e, n) {
        return fu.copy(t.getBoundingRect()),
        t.transform && fu.applyTransform(t.transform),
        du.width = e,
        du.height = n,
        !fu.intersect(du)
    }
    function We(t, e) {
        if (t == e)
            return !1;
        if (!t || !e || t.length !== e.length)
            return !0;
        for (var n = 0; n < t.length; n++)
            if (t[n] !== e[n])
                return !0
    }
    function He(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e),
            e.beginPath(),
            i.buildPath(e, i.shape),
            e.clip(),
            i.restoreTransform(e)
        }
    }
    function Ge(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";",
        n
    }
    function qe(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    }
    function Xe(t, e, n, i) {
        return n = n || {},
        i || !Yl.canvasSupported ? Ue(t, e, n) : Yl.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX,
        n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX,
        n.zrY = e.offsetY) : Ue(t, e, n),
        n
    }
    function Ue(t, e, n) {
        var i = qe(t);
        n.zrX = e.clientX - i.left,
        n.zrY = e.clientY - i.top
    }
    function Ye(t, e, n) {
        if (null != (e = e || window.event).zrX)
            return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
            r && Xe(t, r, e, n)
        } else
            Xe(t, e, e, n),
            e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var a = e.button;
        return null == e.which && void 0 !== a && mu.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
        e
    }
    function Ze(t, e, n) {
        gu ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }
    function je(t, e, n) {
        gu ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }
    function $e(t) {
        var e = t[1][0] - t[0][0]
          , n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }
    function Ke(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }
    function Qe(t) {
        return "mousewheel" === t && Yl.browser.firefox ? "DOMMouseScroll" : t
    }
    function Je(t, e, n) {
        var i = t._gestureMgr;
        "start" === n && i.clear();
        var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === n && i.clear(),
        r) {
            var a = r.type;
            e.gestureEvent = a,
            t.handler.dispatchToElement({
                target: r.target
            }, a, r.event)
        }
    }
    function tn(t) {
        t._touching = !0,
        clearTimeout(t._touchTimer),
        t._touchTimer = setTimeout(function() {
            t._touching = !1
        }, 700)
    }
    function en(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }
    function nn(t) {
        function e(t, e) {
            return function() {
                if (!e._touching)
                    return t.apply(e, arguments)
            }
        }
        f(wu, function(e) {
            t._handlers[e] = m(Mu[e], t)
        }),
        f(Su, function(e) {
            t._handlers[e] = m(Mu[e], t)
        }),
        f(xu, function(n) {
            t._handlers[n] = e(Mu[n], t)
        })
    }
    function rn(t) {
        function e(e, n) {
            f(e, function(e) {
                Ze(t, Qe(e), n._handlers[e])
            }, n)
        }
        ch.call(this),
        this.dom = t,
        this._touching = !1,
        this._touchTimer,
        this._gestureMgr = new yu,
        this._handlers = {},
        nn(this),
        Yl.pointerEventsSupported ? e(Su, this) : (Yl.touchEventsSupported && e(wu, this),
        e(xu, this))
    }
    function an(t, e) {
        return new Du(Xl(),t,e)
    }
    function on(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }
    function sn(t, e, n) {
        if (t) {
            t[e] = t[e] || {},
            t.emphasis = t.emphasis || {},
            t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; i < r; i++) {
                var a = n[i];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
            }
        }
    }
    function ln(t) {
        return !Au(t) || Lu(t) || t instanceof Date ? t : t.value
    }
    function hn(t) {
        return Au(t) && !(t instanceof Array)
    }
    function un(t, e) {
        e = (e || []).slice();
        var n = d(t || [], function(t, e) {
            return {
                exist: t
            }
        });
        return ku(e, function(t, i) {
            if (Au(t)) {
                for (r = 0; r < n.length; r++)
                    if (!n[r].option && null != t.id && n[r].exist.id === t.id + "")
                        return n[r].option = t,
                        void (e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (!(n[r].option || null != a.id && null != t.id || null == t.name || dn(t) || dn(a) || a.name !== t.name + ""))
                        return n[r].option = t,
                        void (e[i] = null)
                }
            }
        }),
        ku(e, function(t, e) {
            if (Au(t)) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i].exist;
                    if (!n[i].option && !dn(r) && null == t.id) {
                        n[i].option = t;
                        break
                    }
                }
                i >= n.length && n.push({
                    option: t
                })
            }
        }),
        n
    }
    function cn(t) {
        var e = N();
        ku(t, function(t, n) {
            var i = t.exist;
            i && e.set(i.id, t)
        }),
        ku(t, function(t, n) {
            var i = t.option;
            L(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)),
            i && null != i.id && e.set(i.id, t),
            !t.keyInfo && (t.keyInfo = {})
        }),
        ku(t, function(t, n) {
            var i = t.exist
              , r = t.option
              , a = t.keyInfo;
            if (Au(r)) {
                if (a.name = null != r.name ? r.name + "" : i ? i.name : Pu + n,
                i)
                    a.id = i.id;
                else if (null != r.id)
                    a.id = r.id + "";
                else {
                    var o = 0;
                    do {
                        a.id = "\0" + a.name + "\0" + o++
                    } while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }
    function fn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Pu))
    }
    function dn(t) {
        return Au(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }
    function pn(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y(e.dataIndex) ? d(e.dataIndex, function(e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y(e.name) ? d(e.name, function(e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }
    function gn() {
        var t = "__\0ec_inner_" + Eu++ + "_" + Math.random().toFixed(5);
        return function(e) {
            return e[t] || (e[t] = {})
        }
    }
    function mn(t, e, n) {
        if (x(e)) {
            var i = {};
            i[e + "Index"] = 0,
            e = i
        }
        var r = n && n.defaultMainType;
        !r || vn(e, r + "Index") || vn(e, r + "Id") || vn(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return ku(e, function(i, r) {
            var i = e[r];
            if ("dataIndex" !== r && "dataIndexInside" !== r) {
                var o = r.match(/^(\w+)(Index|Id|Name)$/) || []
                  , s = o[1]
                  , h = (o[2] || "").toLowerCase();
                if (!(!s || !h || null == i || "index" === h && "none" === i || n && n.includeMainTypes && l(n.includeMainTypes, s) < 0)) {
                    var u = {
                        mainType: s
                    };
                    "index" === h && "all" === i || (u[h] = i);
                    var c = t.queryComponents(u);
                    a[s + "Models"] = c,
                    a[s + "Model"] = c[0]
                }
            } else
                a[r] = i
        }),
        a
    }
    function vn(t, e) {
        return t && t.hasOwnProperty(e)
    }
    function yn(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }
    function _n(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }
    function xn(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(Bu),
        e.main = t[0] || "",
        e.sub = t[1] || ""),
        e
    }
    function wn(t) {
        L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }
    function bn(t, e) {
        t.$constructor = t,
        t.extend = function(t) {
            var e = this
              , n = function() {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return a(n.prototype, t),
            n.extend = this.extend,
            n.superCall = Mn,
            n.superApply = In,
            h(n, this),
            n.superClass = e,
            n
        }
    }
    function Sn(t) {
        var e = ["__\0is_clz", Ru++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0,
        t.isInstance = function(t) {
            return !(!t || !t[e])
        }
    }
    function Mn(t, e) {
        var n = k(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }
    function In(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }
    function Tn(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[Nu] || ((e = i[t.main] = {})[Nu] = !0),
            e
        }
        e = e || {};
        var i = {};
        if (t.registerClass = function(t, e) {
            return e && (wn(e),
            (e = xn(e)).sub ? e.sub !== Nu && (n(e)[e.sub] = t) : i[e.main] = t),
            t
        }
        ,
        t.getClass = function(t, e, n) {
            var r = i[t];
            if (r && r[Nu] && (r = e ? r[e] : null),
            n && !r)
                throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }
        ,
        t.getClassesByMainType = function(t) {
            t = xn(t);
            var e = []
              , n = i[t.main];
            return n && n[Nu] ? f(n, function(t, n) {
                n !== Nu && e.push(t)
            }) : e.push(n),
            e
        }
        ,
        t.hasClass = function(t) {
            return t = xn(t),
            !!i[t.main]
        }
        ,
        t.getAllClassMainTypes = function() {
            var t = [];
            return f(i, function(e, n) {
                t.push(n)
            }),
            t
        }
        ,
        t.hasSubTypes = function(t) {
            t = xn(t);
            var e = i[t.main];
            return e && e[Nu]
        }
        ,
        t.parseClassType = xn,
        e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function(e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            }
            )
        }
        return t
    }
    function Cn(t) {
        return t > -Xu && t < Xu
    }
    function Dn(t) {
        return t > Xu || t < -Xu
    }
    function kn(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
    }
    function An(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
    }
    function Ln(t, e, n, i, r, a) {
        var o = i + 3 * (e - n) - t
          , s = 3 * (n - 2 * e + t)
          , l = 3 * (e - t)
          , h = t - r
          , u = s * s - 3 * o * l
          , c = s * l - 9 * o * h
          , f = l * l - 3 * s * h
          , d = 0;
        if (Cn(u) && Cn(c))
            Cn(s) ? a[0] = 0 : (M = -l / s) >= 0 && M <= 1 && (a[d++] = M);
        else {
            var p = c * c - 4 * u * f;
            if (Cn(p)) {
                var g = c / u
                  , m = -g / 2;
                (M = -s / o + g) >= 0 && M <= 1 && (a[d++] = M),
                m >= 0 && m <= 1 && (a[d++] = m)
            } else if (p > 0) {
                var v = qu(p)
                  , y = u * s + 1.5 * o * (-c + v)
                  , _ = u * s + 1.5 * o * (-c - v);
                (M = (-s - ((y = y < 0 ? -Gu(-y, Zu) : Gu(y, Zu)) + (_ = _ < 0 ? -Gu(-_, Zu) : Gu(_, Zu)))) / (3 * o)) >= 0 && M <= 1 && (a[d++] = M)
            } else {
                var x = (2 * u * s - 3 * o * c) / (2 * qu(u * u * u))
                  , w = Math.acos(x) / 3
                  , b = qu(u)
                  , S = Math.cos(w)
                  , M = (-s - 2 * b * S) / (3 * o)
                  , m = (-s + b * (S + Yu * Math.sin(w))) / (3 * o)
                  , I = (-s + b * (S - Yu * Math.sin(w))) / (3 * o);
                M >= 0 && M <= 1 && (a[d++] = M),
                m >= 0 && m <= 1 && (a[d++] = m),
                I >= 0 && I <= 1 && (a[d++] = I)
            }
        }
        return d
    }
    function Pn(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t
          , o = 9 * e + 3 * i - 3 * t - 9 * n
          , s = 3 * e - 3 * t
          , l = 0;
        if (Cn(o))
            Dn(a) && (c = -s / a) >= 0 && c <= 1 && (r[l++] = c);
        else {
            var h = a * a - 4 * o * s;
            if (Cn(h))
                r[0] = -a / (2 * o);
            else if (h > 0) {
                var u = qu(h)
                  , c = (-a + u) / (2 * o)
                  , f = (-a - u) / (2 * o);
                c >= 0 && c <= 1 && (r[l++] = c),
                f >= 0 && f <= 1 && (r[l++] = f)
            }
        }
        return l
    }
    function On(t, e, n, i, r, a) {
        var o = (e - t) * r + t
          , s = (n - e) * r + e
          , l = (i - n) * r + n
          , h = (s - o) * r + o
          , u = (l - s) * r + s
          , c = (u - h) * r + h;
        a[0] = t,
        a[1] = o,
        a[2] = h,
        a[3] = c,
        a[4] = c,
        a[5] = u,
        a[6] = l,
        a[7] = i
    }
    function En(t, e, n, i, r, a, o, s, l, h, u) {
        var c, f, d, p, g, m = .005, v = 1 / 0;
        ju[0] = l,
        ju[1] = h;
        for (var y = 0; y < 1; y += .05)
            $u[0] = kn(t, n, r, o, y),
            $u[1] = kn(e, i, a, s, y),
            (p = hh(ju, $u)) < v && (c = y,
            v = p);
        v = 1 / 0;
        for (var _ = 0; _ < 32 && !(m < Uu); _++)
            f = c - m,
            d = c + m,
            $u[0] = kn(t, n, r, o, f),
            $u[1] = kn(e, i, a, s, f),
            p = hh($u, ju),
            f >= 0 && p < v ? (c = f,
            v = p) : (Ku[0] = kn(t, n, r, o, d),
            Ku[1] = kn(e, i, a, s, d),
            g = hh(Ku, ju),
            d <= 1 && g < v ? (c = d,
            v = g) : m *= .5);
        return u && (u[0] = kn(t, n, r, o, c),
        u[1] = kn(e, i, a, s, c)),
        qu(v)
    }
    function Bn(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }
    function Nn(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }
    function Rn(t, e, n, i, r) {
        var a = t - 2 * e + n
          , o = 2 * (e - t)
          , s = t - i
          , l = 0;
        if (Cn(a))
            Dn(o) && (c = -s / o) >= 0 && c <= 1 && (r[l++] = c);
        else {
            var h = o * o - 4 * a * s;
            if (Cn(h))
                (c = -o / (2 * a)) >= 0 && c <= 1 && (r[l++] = c);
            else if (h > 0) {
                var u = qu(h)
                  , c = (-o + u) / (2 * a)
                  , f = (-o - u) / (2 * a);
                c >= 0 && c <= 1 && (r[l++] = c),
                f >= 0 && f <= 1 && (r[l++] = f)
            }
        }
        return l
    }
    function zn(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }
    function Fn(t, e, n, i, r) {
        var a = (e - t) * i + t
          , o = (n - e) * i + e
          , s = (o - a) * i + a;
        r[0] = t,
        r[1] = a,
        r[2] = s,
        r[3] = s,
        r[4] = o,
        r[5] = n
    }
    function Vn(t, e, n, i, r, a, o, s, l) {
        var h, u = .005, c = 1 / 0;
        ju[0] = o,
        ju[1] = s;
        for (var f = 0; f < 1; f += .05)
            $u[0] = Bn(t, n, r, f),
            $u[1] = Bn(e, i, a, f),
            (m = hh(ju, $u)) < c && (h = f,
            c = m);
        c = 1 / 0;
        for (var d = 0; d < 32 && !(u < Uu); d++) {
            var p = h - u
              , g = h + u;
            $u[0] = Bn(t, n, r, p),
            $u[1] = Bn(e, i, a, p);
            var m = hh($u, ju);
            if (p >= 0 && m < c)
                h = p,
                c = m;
            else {
                Ku[0] = Bn(t, n, r, g),
                Ku[1] = Bn(e, i, a, g);
                var v = hh(Ku, ju);
                g <= 1 && v < c ? (h = g,
                c = v) : u *= .5
            }
        }
        return l && (l[0] = Bn(t, n, r, h),
        l[1] = Bn(e, i, a, h)),
        qu(c)
    }
    function Wn(t, e, n, i, r, a) {
        r[0] = Qu(t, n),
        r[1] = Qu(e, i),
        a[0] = Ju(t, n),
        a[1] = Ju(e, i)
    }
    function Hn(t, e, n, i, r, a, o, s, l, h) {
        var u, c = Pn, f = kn, d = c(t, n, r, o, oc);
        for (l[0] = 1 / 0,
        l[1] = 1 / 0,
        h[0] = -1 / 0,
        h[1] = -1 / 0,
        u = 0; u < d; u++) {
            var p = f(t, n, r, o, oc[u]);
            l[0] = Qu(p, l[0]),
            h[0] = Ju(p, h[0])
        }
        for (d = c(e, i, a, s, sc),
        u = 0; u < d; u++) {
            var g = f(e, i, a, s, sc[u]);
            l[1] = Qu(g, l[1]),
            h[1] = Ju(g, h[1])
        }
        l[0] = Qu(t, l[0]),
        h[0] = Ju(t, h[0]),
        l[0] = Qu(o, l[0]),
        h[0] = Ju(o, h[0]),
        l[1] = Qu(e, l[1]),
        h[1] = Ju(e, h[1]),
        l[1] = Qu(s, l[1]),
        h[1] = Ju(s, h[1])
    }
    function Gn(t, e, n, i, r, a, o, s) {
        var l = zn
          , h = Bn
          , u = Ju(Qu(l(t, n, r), 1), 0)
          , c = Ju(Qu(l(e, i, a), 1), 0)
          , f = h(t, n, r, u)
          , d = h(e, i, a, c);
        o[0] = Qu(t, r, f),
        o[1] = Qu(e, a, d),
        s[0] = Ju(t, r, f),
        s[1] = Ju(e, a, d)
    }
    function qn(t, e, n, i, r, a, o, s, l) {
        var h = Z
          , u = j
          , c = Math.abs(r - a);
        if (c % nc < 1e-4 && c > 1e-4)
            return s[0] = t - n,
            s[1] = e - i,
            l[0] = t + n,
            void (l[1] = e + i);
        if (ic[0] = ec(r) * n + t,
        ic[1] = tc(r) * i + e,
        rc[0] = ec(a) * n + t,
        rc[1] = tc(a) * i + e,
        h(s, ic, rc),
        u(l, ic, rc),
        (r %= nc) < 0 && (r += nc),
        (a %= nc) < 0 && (a += nc),
        r > a && !o ? a += nc : r < a && o && (r += nc),
        o) {
            var f = a;
            a = r,
            r = f
        }
        for (var d = 0; d < a; d += Math.PI / 2)
            d > r && (ac[0] = ec(d) * n + t,
            ac[1] = tc(d) * i + e,
            h(s, ac, s),
            u(l, ac, l))
    }
    function Xn(t, e, n, i, r, a, o) {
        if (0 === r)
            return !1;
        var s = r
          , l = 0
          , h = t;
        if (o > e + s && o > i + s || o < e - s && o < i - s || a > t + s && a > n + s || a < t - s && a < n - s)
            return !1;
        if (t === n)
            return Math.abs(a - t) <= s / 2;
        var u = (l = (e - i) / (t - n)) * a - o + (h = (t * i - n * e) / (t - n));
        return u * u / (l * l + 1) <= s / 2 * s / 2
    }
    function Un(t, e, n, i, r, a, o, s, l, h, u) {
        if (0 === l)
            return !1;
        var c = l;
        return !(u > e + c && u > i + c && u > a + c && u > s + c || u < e - c && u < i - c && u < a - c && u < s - c || h > t + c && h > n + c && h > r + c && h > o + c || h < t - c && h < n - c && h < r - c && h < o - c) && En(t, e, n, i, r, a, o, s, h, u, null) <= c / 2
    }
    function Yn(t, e, n, i, r, a, o, s, l) {
        if (0 === o)
            return !1;
        var h = o;
        return !(l > e + h && l > i + h && l > a + h || l < e - h && l < i - h && l < a - h || s > t + h && s > n + h && s > r + h || s < t - h && s < n - h && s < r - h) && Vn(t, e, n, i, r, a, s, l, null) <= h / 2
    }
    function Zn(t) {
        return (t %= wc) < 0 && (t += wc),
        t
    }
    function jn(t, e, n, i, r, a, o, s, l) {
        if (0 === o)
            return !1;
        var h = o;
        s -= t,
        l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (u - h > n || u + h < n)
            return !1;
        if (Math.abs(i - r) % bc < 1e-4)
            return !0;
        if (a) {
            var c = i;
            i = Zn(r),
            r = Zn(c)
        } else
            i = Zn(i),
            r = Zn(r);
        i > r && (r += bc);
        var f = Math.atan2(l, s);
        return f < 0 && (f += bc),
        f >= i && f <= r || f + bc >= i && f + bc <= r
    }
    function $n(t, e, n, i, r, a) {
        if (a > e && a > i || a < e && a < i)
            return 0;
        if (i === e)
            return 0;
        var o = i < e ? 1 : -1
          , s = (a - e) / (i - e);
        return 1 !== s && 0 !== s || (o = i < e ? .5 : -.5),
        s * (n - t) + t > r ? o : 0
    }
    function Kn(t, e) {
        return Math.abs(t - e) < Ic
    }
    function Qn() {
        var t = Cc[0];
        Cc[0] = Cc[1],
        Cc[1] = t
    }
    function Jn(t, e, n, i, r, a, o, s, l, h) {
        if (h > e && h > i && h > a && h > s || h < e && h < i && h < a && h < s)
            return 0;
        var u = Ln(e, i, a, s, h, Tc);
        if (0 === u)
            return 0;
        for (var c, f, d = 0, p = -1, g = 0; g < u; g++) {
            var m = Tc[g]
              , v = 0 === m || 1 === m ? .5 : 1;
            kn(t, n, r, o, m) < l || (p < 0 && (p = Pn(e, i, a, s, Cc),
            Cc[1] < Cc[0] && p > 1 && Qn(),
            c = kn(e, i, a, s, Cc[0]),
            p > 1 && (f = kn(e, i, a, s, Cc[1]))),
            2 == p ? m < Cc[0] ? d += c < e ? v : -v : m < Cc[1] ? d += f < c ? v : -v : d += s < f ? v : -v : m < Cc[0] ? d += c < e ? v : -v : d += s < c ? v : -v)
        }
        return d
    }
    function ti(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || s < e && s < i && s < a)
            return 0;
        var l = Rn(e, i, a, s, Tc);
        if (0 === l)
            return 0;
        var h = zn(e, i, a);
        if (h >= 0 && h <= 1) {
            for (var u = 0, c = Bn(e, i, a, h), f = 0; f < l; f++) {
                d = 0 === Tc[f] || 1 === Tc[f] ? .5 : 1;
                (p = Bn(t, n, r, Tc[f])) < o || (Tc[f] < h ? u += c < e ? d : -d : u += a < c ? d : -d)
            }
            return u
        }
        var d = 0 === Tc[0] || 1 === Tc[0] ? .5 : 1
          , p = Bn(t, n, r, Tc[0]);
        return p < o ? 0 : a < e ? d : -d
    }
    function ei(t, e, n, i, r, a, o, s) {
        if ((s -= e) > n || s < -n)
            return 0;
        h = Math.sqrt(n * n - s * s);
        Tc[0] = -h,
        Tc[1] = h;
        var l = Math.abs(i - r);
        if (l < 1e-4)
            return 0;
        if (l % Mc < 1e-4) {
            i = 0,
            r = Mc;
            p = a ? 1 : -1;
            return o >= Tc[0] + t && o <= Tc[1] + t ? p : 0
        }
        if (a) {
            var h = i;
            i = Zn(r),
            r = Zn(h)
        } else
            i = Zn(i),
            r = Zn(r);
        i > r && (r += Mc);
        for (var u = 0, c = 0; c < 2; c++) {
            var f = Tc[c];
            if (f + t > o) {
                var d = Math.atan2(s, f)
                  , p = a ? 1 : -1;
                d < 0 && (d = Mc + d),
                (d >= i && d <= r || d + Mc >= i && d + Mc <= r) && (d > Math.PI / 2 && d < 1.5 * Math.PI && (p = -p),
                u += p)
            }
        }
        return u
    }
    function ni(t, e, n, i, r) {
        for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length; ) {
            var c = t[u++];
            switch (c === Sc.M && u > 1 && (n || (a += $n(o, s, l, h, i, r))),
            1 == u && (l = o = t[u],
            h = s = t[u + 1]),
            c) {
            case Sc.M:
                o = l = t[u++],
                s = h = t[u++];
                break;
            case Sc.L:
                if (n) {
                    if (Xn(o, s, t[u], t[u + 1], e, i, r))
                        return !0
                } else
                    a += $n(o, s, t[u], t[u + 1], i, r) || 0;
                o = t[u++],
                s = t[u++];
                break;
            case Sc.C:
                if (n) {
                    if (Un(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r))
                        return !0
                } else
                    a += Jn(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                o = t[u++],
                s = t[u++];
                break;
            case Sc.Q:
                if (n) {
                    if (Yn(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r))
                        return !0
                } else
                    a += ti(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                o = t[u++],
                s = t[u++];
                break;
            case Sc.A:
                var f = t[u++]
                  , d = t[u++]
                  , p = t[u++]
                  , g = t[u++]
                  , m = t[u++]
                  , v = t[u++]
                  , y = (t[u++],
                1 - t[u++])
                  , _ = Math.cos(m) * p + f
                  , x = Math.sin(m) * g + d;
                u > 1 ? a += $n(o, s, _, x, i, r) : (l = _,
                h = x);
                var w = (i - f) * g / p + f;
                if (n) {
                    if (jn(f, d, g, m, m + v, y, e, w, r))
                        return !0
                } else
                    a += ei(f, d, g, m, m + v, y, w, r);
                o = Math.cos(m + v) * p + f,
                s = Math.sin(m + v) * g + d;
                break;
            case Sc.R:
                l = o = t[u++],
                h = s = t[u++];
                var _ = l + t[u++]
                  , x = h + t[u++];
                if (n) {
                    if (Xn(l, h, _, h, e, i, r) || Xn(_, h, _, x, e, i, r) || Xn(_, x, l, x, e, i, r) || Xn(l, x, l, h, e, i, r))
                        return !0
                } else
                    a += $n(_, h, _, x, i, r),
                    a += $n(l, x, l, h, i, r);
                break;
            case Sc.Z:
                if (n) {
                    if (Xn(o, s, l, h, e, i, r))
                        return !0
                } else
                    a += $n(o, s, l, h, i, r);
                o = l,
                s = h
            }
        }
        return n || Kn(s, h) || (a += $n(o, s, l, h, i, r) || 0),
        0 !== a
    }
    function ii(t, e, n) {
        return ni(t, 0, !1, e, n)
    }
    function ri(t, e, n, i) {
        return ni(t, e, !0, n, i)
    }
    function ai(t) {
        Ne.call(this, t),
        this.path = null
    }
    function oi(t, e, n, i, r, a, o, s, l, h, u) {
        var c = l * (Vc / 180)
          , f = Fc(c) * (t - n) / 2 + zc(c) * (e - i) / 2
          , d = -1 * zc(c) * (t - n) / 2 + Fc(c) * (e - i) / 2
          , p = f * f / (o * o) + d * d / (s * s);
        p > 1 && (o *= Rc(p),
        s *= Rc(p));
        var g = (r === a ? -1 : 1) * Rc((o * o * (s * s) - o * o * (d * d) - s * s * (f * f)) / (o * o * (d * d) + s * s * (f * f))) || 0
          , m = g * o * d / s
          , v = g * -s * f / o
          , y = (t + n) / 2 + Fc(c) * m - zc(c) * v
          , _ = (e + i) / 2 + zc(c) * m + Fc(c) * v
          , x = Gc([1, 0], [(f - m) / o, (d - v) / s])
          , w = [(f - m) / o, (d - v) / s]
          , b = [(-1 * f - m) / o, (-1 * d - v) / s]
          , S = Gc(w, b);
        Hc(w, b) <= -1 && (S = Vc),
        Hc(w, b) >= 1 && (S = 0),
        0 === a && S > 0 && (S -= 2 * Vc),
        1 === a && S < 0 && (S += 2 * Vc),
        u.addData(h, y, _, o, s, x, S, c, a)
    }
    function si(t) {
        if (!t)
            return [];
        var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
        for (e = 0; e < Nc.length; e++)
            n = n.replace(new RegExp(Nc[e],"g"), "|" + Nc[e]);
        var i, r = n.split("|"), a = 0, o = 0, s = new xc, l = xc.CMD;
        for (e = 1; e < r.length; e++) {
            var h, u = r[e], c = u.charAt(0), f = 0, d = u.slice(1).replace(/e,-/g, "e-").split(",");
            d.length > 0 && "" === d[0] && d.shift();
            for (var p = 0; p < d.length; p++)
                d[p] = parseFloat(d[p]);
            for (; f < d.length && !isNaN(d[f]) && !isNaN(d[0]); ) {
                var g, m, v, y, _, x, w, b = a, S = o;
                switch (c) {
                case "l":
                    a += d[f++],
                    o += d[f++],
                    h = l.L,
                    s.addData(h, a, o);
                    break;
                case "L":
                    a = d[f++],
                    o = d[f++],
                    h = l.L,
                    s.addData(h, a, o);
                    break;
                case "m":
                    a += d[f++],
                    o += d[f++],
                    h = l.M,
                    s.addData(h, a, o),
                    c = "l";
                    break;
                case "M":
                    a = d[f++],
                    o = d[f++],
                    h = l.M,
                    s.addData(h, a, o),
                    c = "L";
                    break;
                case "h":
                    a += d[f++],
                    h = l.L,
                    s.addData(h, a, o);
                    break;
                case "H":
                    a = d[f++],
                    h = l.L,
                    s.addData(h, a, o);
                    break;
                case "v":
                    o += d[f++],
                    h = l.L,
                    s.addData(h, a, o);
                    break;
                case "V":
                    o = d[f++],
                    h = l.L,
                    s.addData(h, a, o);
                    break;
                case "C":
                    h = l.C,
                    s.addData(h, d[f++], d[f++], d[f++], d[f++], d[f++], d[f++]),
                    a = d[f - 2],
                    o = d[f - 1];
                    break;
                case "c":
                    h = l.C,
                    s.addData(h, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o),
                    a += d[f - 2],
                    o += d[f - 1];
                    break;
                case "S":
                    g = a,
                    m = o;
                    var M = s.len()
                      , I = s.data;
                    i === l.C && (g += a - I[M - 4],
                    m += o - I[M - 3]),
                    h = l.C,
                    b = d[f++],
                    S = d[f++],
                    a = d[f++],
                    o = d[f++],
                    s.addData(h, g, m, b, S, a, o);
                    break;
                case "s":
                    g = a,
                    m = o;
                    var M = s.len()
                      , I = s.data;
                    i === l.C && (g += a - I[M - 4],
                    m += o - I[M - 3]),
                    h = l.C,
                    b = a + d[f++],
                    S = o + d[f++],
                    a += d[f++],
                    o += d[f++],
                    s.addData(h, g, m, b, S, a, o);
                    break;
                case "Q":
                    b = d[f++],
                    S = d[f++],
                    a = d[f++],
                    o = d[f++],
                    h = l.Q,
                    s.addData(h, b, S, a, o);
                    break;
                case "q":
                    b = d[f++] + a,
                    S = d[f++] + o,
                    a += d[f++],
                    o += d[f++],
                    h = l.Q,
                    s.addData(h, b, S, a, o);
                    break;
                case "T":
                    g = a,
                    m = o;
                    var M = s.len()
                      , I = s.data;
                    i === l.Q && (g += a - I[M - 4],
                    m += o - I[M - 3]),
                    a = d[f++],
                    o = d[f++],
                    h = l.Q,
                    s.addData(h, g, m, a, o);
                    break;
                case "t":
                    g = a,
                    m = o;
                    var M = s.len()
                      , I = s.data;
                    i === l.Q && (g += a - I[M - 4],
                    m += o - I[M - 3]),
                    a += d[f++],
                    o += d[f++],
                    h = l.Q,
                    s.addData(h, g, m, a, o);
                    break;
                case "A":
                    v = d[f++],
                    y = d[f++],
                    _ = d[f++],
                    x = d[f++],
                    w = d[f++],
                    oi(b = a, S = o, a = d[f++], o = d[f++], x, w, v, y, _, h = l.A, s);
                    break;
                case "a":
                    v = d[f++],
                    y = d[f++],
                    _ = d[f++],
                    x = d[f++],
                    w = d[f++],
                    oi(b = a, S = o, a += d[f++], o += d[f++], x, w, v, y, _, h = l.A, s)
                }
            }
            "z" !== c && "Z" !== c || (h = l.Z,
            s.addData(h)),
            i = h
        }
        return s.toStatic(),
        s
    }
    function li(t, e) {
        var n = si(t);
        return e = e || {},
        e.buildPath = function(t) {
            if (t.setData)
                t.setData(n.data),
                (e = t.getContext()) && t.rebuildPath(e);
            else {
                var e = t;
                n.rebuildPath(e)
            }
        }
        ,
        e.applyTransform = function(t) {
            Bc(n, t),
            this.dirty(!0)
        }
        ,
        e
    }
    function hi(t, e) {
        return new ai(li(t, e))
    }
    function ui(t, e) {
        return ai.extend(li(t, e))
    }
    function ci(t, e, n, i, r, a, o) {
        var s = .5 * (n - t)
          , l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }
    function fi(t, e, n) {
        var i = e.points
          , r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var a = Kc(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var o = i.length, s = 0; s < (n ? o : o - 1); s++) {
                    var l = a[2 * s]
                      , h = a[2 * s + 1]
                      , u = i[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
                }
            } else {
                "spline" === r && (i = $c(i, n)),
                t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; s < c; s++)
                    t.lineTo(i[s][0], i[s][1])
            }
            n && t.closePath()
        }
    }
    function di(t, e, n) {
        var i = t.cpx2
          , r = t.cpy2;
        return null === i || null === r ? [(n ? An : kn)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? An : kn)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Nn : Bn)(t.x1, t.cpx1, t.x2, e), (n ? Nn : Bn)(t.y1, t.cpy1, t.y2, e)]
    }
    function pi(t) {
        Ne.call(this, t),
        this._displayables = [],
        this._temporaryDisplayables = [],
        this._cursor = 0,
        this.notClear = !0
    }
    function gi(t) {
        return ai.extend(t)
    }
    function mi(t, e, n, i) {
        var r = hi(t, e)
          , a = r.getBoundingRect();
        return n && ("center" === i && (n = yi(n, a)),
        _i(r, n)),
        r
    }
    function vi(t, e, n) {
        var i = new Re({
            style: {
                image: t,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            },
            onload: function(t) {
                if ("center" === n) {
                    var r = {
                        width: t.width,
                        height: t.height
                    };
                    i.setStyle(yi(e, r))
                }
            }
        });
        return i
    }
    function yi(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        return n = r <= t.width ? t.height : (r = t.width) / i,
        {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        }
    }
    function _i(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(n)
        }
    }
    function xi(t) {
        var e = t.shape
          , n = t.style.lineWidth;
        return cf(2 * e.x1) === cf(2 * e.x2) && (e.x1 = e.x2 = wi(e.x1, n, !0)),
        cf(2 * e.y1) === cf(2 * e.y2) && (e.y1 = e.y2 = wi(e.y1, n, !0)),
        t
    }
    function wi(t, e, n) {
        var i = cf(2 * t);
        return (i + cf(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }
    function bi(t) {
        return null != t && "none" != t
    }
    function Si(t) {
        return "string" == typeof t ? wt(t, -.1) : t
    }
    function Mi(t) {
        if (t.__hoverStlDirty) {
            var e = t.style.stroke
              , n = t.style.fill
              , i = t.__hoverStl;
            i.fill = i.fill || (bi(n) ? Si(n) : null),
            i.stroke = i.stroke || (bi(e) ? Si(e) : null);
            var r = {};
            for (var a in i)
                null != i[a] && (r[a] = t.style[a]);
            t.__normalStl = r,
            t.__hoverStlDirty = !1
        }
    }
    function Ii(t) {
        if (!t.__isHover) {
            if (Mi(t),
            t.useHoverLayer)
                t.__zr && t.__zr.addHover(t, t.__hoverStl);
            else {
                var e = t.style
                  , n = e.insideRollbackOpt;
                n && Hi(e),
                e.extendFrom(t.__hoverStl),
                n && (Wi(e, e.insideOriginalTextPosition, n),
                null == e.textFill && (e.textFill = n.autoColor)),
                t.dirty(!1),
                t.z2 += 1
            }
            t.__isHover = !0
        }
    }
    function Ti(t) {
        if (t.__isHover) {
            var e = t.__normalStl;
            t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e),
            t.z2 -= 1),
            t.__isHover = !1
        }
    }
    function Ci(t) {
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && Ii(t)
        }) : Ii(t)
    }
    function Di(t) {
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && Ti(t)
        }) : Ti(t)
    }
    function ki(t, e) {
        t.__hoverStl = t.hoverStyle || e || {},
        t.__hoverStlDirty = !0,
        t.__isHover && Mi(t)
    }
    function Ai(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Ci(this)
    }
    function Li(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Di(this)
    }
    function Pi() {
        this.__isEmphasis = !0,
        Ci(this)
    }
    function Oi() {
        this.__isEmphasis = !1,
        Di(this)
    }
    function Ei(t, e, n) {
        t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch,
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && ki(t, e)
        }) : ki(t, e),
        t.on("mouseover", Ai).on("mouseout", Li),
        t.on("emphasis", Pi).on("normal", Oi)
    }
    function Bi(t, e, n, i, r, a, o) {
        var s, l = (r = r || pf).labelFetcher, h = r.labelDataIndex, u = r.labelDimIndex, c = n.getShallow("show"), f = i.getShallow("show");
        (c || f) && (l && (s = l.getFormattedLabel(h, "normal", null, u)),
        null == s && (s = _(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var d = c ? s : null
          , p = f ? C(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        null == d && null == p || (Ni(t, n, a, r),
        Ni(e, i, o, r, !0)),
        t.text = d,
        e.text = p
    }
    function Ni(t, e, n, i, r) {
        return Ri(t, e, i, r),
        n && a(t, n),
        t.host && t.host.dirty && t.host.dirty(!1),
        t
    }
    function Ri(t, e, n, i) {
        if ((n = n || pf).isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"),
            t.textPosition = r,
            t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180),
            t.textRotation = a,
            t.textDistance = C(e.getShallow("distance"), i ? null : 5)
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, h = zi(e);
        if (h) {
            o = {};
            for (var u in h)
                if (h.hasOwnProperty(u)) {
                    var c = e.getModel(["rich", u]);
                    Fi(o[u] = {}, c, l, n, i)
                }
        }
        return t.rich = o,
        Fi(t, e, l, n, i, !0),
        n.forceRich && !n.textStyle && (n.textStyle = {}),
        t
    }
    function zi(t) {
        for (var e; t && t !== t.ecModel; ) {
            var n = (t.option || pf).rich;
            if (n) {
                e = e || {};
                for (var i in n)
                    n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }
    function Fi(t, e, n, i, r, a) {
        if (n = !r && n || pf,
        t.textFill = Vi(e.getShallow("color"), i) || n.color,
        t.textStroke = Vi(e.getShallow("textBorderColor"), i) || n.textBorderColor,
        t.textStrokeWidth = C(e.getShallow("textBorderWidth"), n.textBorderWidth),
        !r) {
            if (a) {
                var o = t.textPosition;
                t.insideRollback = Wi(t, o, i),
                t.insideOriginalTextPosition = o,
                t.insideRollbackOpt = i
            }
            null == t.textFill && (t.textFill = i.autoColor)
        }
        t.fontStyle = e.getShallow("fontStyle") || n.fontStyle,
        t.fontWeight = e.getShallow("fontWeight") || n.fontWeight,
        t.fontSize = e.getShallow("fontSize") || n.fontSize,
        t.fontFamily = e.getShallow("fontFamily") || n.fontFamily,
        t.textAlign = e.getShallow("align"),
        t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"),
        t.textLineHeight = e.getShallow("lineHeight"),
        t.textWidth = e.getShallow("width"),
        t.textHeight = e.getShallow("height"),
        t.textTag = e.getShallow("tag"),
        a && i.disableBox || (t.textBackgroundColor = Vi(e.getShallow("backgroundColor"), i),
        t.textPadding = e.getShallow("padding"),
        t.textBorderColor = Vi(e.getShallow("borderColor"), i),
        t.textBorderWidth = e.getShallow("borderWidth"),
        t.textBorderRadius = e.getShallow("borderRadius"),
        t.textBoxShadowColor = e.getShallow("shadowColor"),
        t.textBoxShadowBlur = e.getShallow("shadowBlur"),
        t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"),
        t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")),
        t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor,
        t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur,
        t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX,
        t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }
    function Vi(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }
    function Wi(t, e, n) {
        var i, r = n.useInsideStyle;
        return null == t.textFill && !1 !== r && (!0 === r || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = {
            textFill: null,
            textStroke: t.textStroke,
            textStrokeWidth: t.textStrokeWidth
        },
        t.textFill = "#fff",
        null == t.textStroke && (t.textStroke = n.autoColor,
        null == t.textStrokeWidth && (t.textStrokeWidth = 2))),
        i
    }
    function Hi(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill,
        t.textStroke = e.textStroke,
        t.textStrokeWidth = e.textStrokeWidth)
    }
    function Gi(t, e) {
        var n = e || e.getModel("textStyle");
        return P([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }
    function qi(t, e, n, i, r, a) {
        if ("function" == typeof r && (a = r,
        r = null),
        i && i.isAnimationEnabled()) {
            var o = t ? "Update" : ""
              , s = i.getShallow("animationDuration" + o)
              , l = i.getShallow("animationEasing" + o)
              , h = i.getShallow("animationDelay" + o);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)),
            "function" == typeof s && (s = s(r)),
            s > 0 ? e.animateTo(n, s, h || 0, l, a, !!a) : (e.stopAnimation(),
            e.attr(n),
            a && a())
        } else
            e.stopAnimation(),
            e.attr(n),
            a && a()
    }
    function Xi(t, e, n, i, r) {
        qi(!0, t, e, n, i, r)
    }
    function Ui(t, e, n, i, r) {
        qi(!1, t, e, n, i, r)
    }
    function Yi(t, e, n) {
        return e && !c(e) && (e = yh.getLocalTransform(e)),
        n && (e = lt([], e)),
        Y([], t, e)
    }
    function Zi(t, e, n, i) {
        function r(t) {
            var e = {
                position: F(t.position),
                rotation: t.rotation
            };
            return t.shape && (e.shape = a({}, t.shape)),
            e
        }
        if (t && e) {
            var o = function(t) {
                var e = {};
                return t.traverse(function(t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }),
                e
            }(t);
            e.traverse(function(t) {
                if (!t.isGroup && t.anid) {
                    var e = o[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)),
                        Xi(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }
    function ji(t, e, n) {
        this.parentModel = e,
        this.ecModel = n,
        this.option = t
    }
    function $i(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++)
            ;
        return null == t && n && (t = n.get(e)),
        t
    }
    function Ki(t, e) {
        var n = wf(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }
    function Qi(t) {
        return [t || "", bf++, Math.random().toFixed(5)].join("_")
    }
    function Ji(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function tr(t, e, n, i) {
        var r = e[1] - e[0]
          , a = n[1] - n[0];
        if (0 === r)
            return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i)
            if (r > 0) {
                if (t <= e[0])
                    return n[0];
                if (t >= e[1])
                    return n[1]
            } else {
                if (t >= e[0])
                    return n[0];
                if (t <= e[1])
                    return n[1]
            }
        else {
            if (t === e[0])
                return n[0];
            if (t === e[1])
                return n[1]
        }
        return (t - e[0]) / r * a + n[0]
    }
    function er(t, e) {
        switch (t) {
        case "center":
        case "middle":
            t = "50%";
            break;
        case "left":
        case "top":
            t = "0%";
            break;
        case "right":
        case "bottom":
            t = "100%"
        }
        return "string" == typeof t ? Ji(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }
    function nr(t, e, n) {
        return null == e && (e = 10),
        e = Math.min(Math.max(0, e), 20),
        t = (+t).toFixed(e),
        n ? t : +t
    }
    function ir(t) {
        var e = t.toString()
          , n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return i < 0 ? -i : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }
    function rr(t, e) {
        var n = Math.log
          , i = Math.LN10
          , r = Math.floor(n(t[1] - t[0]) / i)
          , a = Math.round(n(Math.abs(e[1] - e[0])) / i)
          , o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }
    function ar(t, e, n) {
        if (!t[e])
            return 0;
        var i = p(t, function(t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i)
            return 0;
        for (var r = Math.pow(10, n), a = d(t, function(t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), o = 100 * r, s = d(a, function(t) {
            return Math.floor(t)
        }), l = p(s, function(t, e) {
            return t + e
        }, 0), h = d(a, function(t, e) {
            return t - s[e]
        }); l < o; ) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, g = h.length; f < g; ++f)
                h[f] > u && (u = h[f],
                c = f);
            ++s[c],
            h[c] = 0,
            ++l
        }
        return s[e] / r
    }
    function or(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }
    function sr(t) {
        return t > -Sf && t < Sf
    }
    function lr(t) {
        if (t instanceof Date)
            return t;
        if ("string" == typeof t) {
            var e = Mf.exec(t);
            if (!e)
                return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)),
                new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1],+(e[2] || 1) - 1,+e[3] || 1,+e[4] || 0,+(e[5] || 0),+e[6] || 0,+e[7] || 0)
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t))
    }
    function hr(t) {
        return Math.pow(10, ur(t))
    }
    function ur(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }
    function cr(t, e) {
        var n, i = ur(t), r = Math.pow(10, i), a = t / r;
        return n = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10,
        t = n * r,
        i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
    }
    function fr(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
    }
    function dr(t) {
        return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function pr(t, e, n) {
        y(e) || (e = [e]);
        var i = e.length;
        if (!i)
            return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = Tf[a];
            t = t.replace(Cf(o), Cf(o, 0))
        }
        for (var s = 0; s < i; s++)
            for (var l = 0; l < r.length; l++) {
                var h = e[s][r[l]];
                t = t.replace(Cf(Tf[l], s), n ? dr(h) : h)
            }
        return t
    }
    function gr(t, e) {
        var n = (t = x(t) ? {
            color: t,
            extraCssText: e
        } : t || {}).color
          , i = t.type
          , e = t.extraCssText;
        return n ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + dr(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + dr(n) + ";" + (e || "") + '"></span>' : ""
    }
    function mr(t, e) {
        return t += "",
        "0000".substr(0, e - t.length) + t
    }
    function vr(t, e, n) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var i = lr(e)
          , r = n ? "UTC" : ""
          , a = i["get" + r + "FullYear"]()
          , o = i["get" + r + "Month"]() + 1
          , s = i["get" + r + "Date"]()
          , l = i["get" + r + "Hours"]()
          , h = i["get" + r + "Minutes"]()
          , u = i["get" + r + "Seconds"]()
          , c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", mr(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", mr(s, 2)).replace("d", s).replace("hh", mr(l, 2)).replace("h", l).replace("mm", mr(h, 2)).replace("m", h).replace("ss", mr(u, 2)).replace("s", u).replace("SSS", mr(c, 3))
    }
    function yr(t, e, n, i, r) {
        var a = 0
          , o = 0;
        null == i && (i = 1 / 0),
        null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, h) {
            var u, c, f = l.position, d = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var m = d.width + (g ? -g.x + d.x : 0);
                (u = a + m) > i || l.newline ? (a = 0,
                u = m,
                o += s + n,
                s = d.height) : s = Math.max(s, d.height)
            } else {
                var v = d.height + (g ? -g.y + d.y : 0);
                (c = o + v) > r || l.newline ? (a += s + n,
                o = 0,
                c = v,
                s = d.width) : s = Math.max(s, d.width)
            }
            l.newline || (f[0] = a,
            f[1] = o,
            "horizontal" === t ? a = u + n : o = c + n)
        })
    }
    function _r(t, e, n) {
        n = If(n || 0);
        var i = e.width
          , r = e.height
          , a = er(t.left, i)
          , o = er(t.top, r)
          , s = er(t.right, i)
          , l = er(t.bottom, r)
          , h = er(t.width, i)
          , u = er(t.height, r)
          , c = n[2] + n[0]
          , f = n[1] + n[3]
          , d = t.aspect;
        switch (isNaN(h) && (h = i - s - f - a),
        isNaN(u) && (u = r - l - c - o),
        null != d && (isNaN(h) && isNaN(u) && (d > i / r ? h = .8 * i : u = .8 * r),
        isNaN(h) && (h = d * u),
        isNaN(u) && (u = h / d)),
        isNaN(a) && (a = i - s - h - f),
        isNaN(o) && (o = r - l - u - c),
        t.left || t.right) {
        case "center":
            a = i / 2 - h / 2 - n[3];
            break;
        case "right":
            a = i - h - f
        }
        switch (t.top || t.bottom) {
        case "middle":
        case "center":
            o = r / 2 - u / 2 - n[0];
            break;
        case "bottom":
            o = r - u - c
        }
        a = a || 0,
        o = o || 0,
        isNaN(h) && (h = i - f - a - (s || 0)),
        isNaN(u) && (u = r - c - o - (l || 0));
        var p = new Nt(a + n[3],o + n[0],h,u);
        return p.margin = n,
        p
    }
    function xr(t, e, n) {
        function i(n, i) {
            var o = {}
              , l = 0
              , h = {}
              , u = 0;
            if (kf(n, function(e) {
                h[e] = t[e]
            }),
            kf(n, function(t) {
                r(e, t) && (o[t] = h[t] = e[t]),
                a(o, t) && l++,
                a(h, t) && u++
            }),
            s[i])
                return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null),
                h;
            if (2 !== u && l) {
                if (l >= 2)
                    return o;
                for (var c = 0; c < n.length; c++) {
                    var f = n[c];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return h
        }
        function r(t, e) {
            return t.hasOwnProperty(e)
        }
        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }
        function o(t, e, n) {
            kf(t, function(t) {
                e[t] = n[t]
            })
        }
        !w(n) && (n = {});
        var s = n.ignoreSize;
        !y(s) && (s = [s, s]);
        var l = i(Lf[0], 0)
          , h = i(Lf[1], 1);
        o(Lf[0], t, l),
        o(Lf[1], t, h)
    }
    function wr(t) {
        return br({}, t)
    }
    function br(t, e) {
        return e && t && kf(Af, function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }),
        t
    }
    function Sr(t, e) {
        for (var n = t.length, i = 0; i < n; i++)
            if (t[i].length > e)
                return t[i];
        return t[n - 1]
    }
    function Mr(t) {
        var e = t.get("coordinateSystem")
          , n = {
            coordSysName: e,
            coordSysDims: [],
            axisMap: N(),
            categoryAxisMap: N()
        }
          , i = Ff[e];
        if (i)
            return i(t, n, n.axisMap, n.categoryAxisMap),
            n
    }
    function Ir(t) {
        return "category" === t.get("type")
    }
    function Tr(t) {
        this.fromDataset = t.fromDataset,
        this.data = t.data || (t.sourceFormat === Gf ? {} : []),
        this.sourceFormat = t.sourceFormat || qf,
        this.seriesLayoutBy = t.seriesLayoutBy || Uf,
        this.dimensionsDefine = t.dimensionsDefine,
        this.encodeDefine = t.encodeDefine && N(t.encodeDefine),
        this.startIndex = t.startIndex || 0,
        this.dimensionsDetectCount = t.dimensionsDetectCount
    }
    function Cr(t) {
        var e = t.option.source
          , n = qf;
        if (S(e))
            n = Xf;
        else if (y(e))
            for (var i = 0, r = e.length; i < r; i++) {
                var a = e[i];
                if (null != a) {
                    if (y(a)) {
                        n = Wf;
                        break
                    }
                    if (w(a)) {
                        n = Hf;
                        break
                    }
                }
            }
        else if (w(e)) {
            for (var o in e)
                if (e.hasOwnProperty(o) && c(e[o])) {
                    n = Gf;
                    break
                }
        } else if (null != e)
            throw new Error("Invalid data");
        Zf(t).sourceFormat = n
    }
    function Dr(t) {
        return Zf(t).source
    }
    function kr(t) {
        Zf(t).datasetMap = N()
    }
    function Ar(t) {
        var e = t.option
          , n = e.data
          , i = S(n) ? Xf : Vf
          , r = !1
          , a = e.seriesLayoutBy
          , o = e.sourceHeader
          , s = e.dimensions
          , l = Nr(t);
        if (l) {
            var h = l.option;
            n = h.source,
            i = Zf(l).sourceFormat,
            r = !0,
            a = a || h.seriesLayoutBy,
            null == o && (o = h.sourceHeader),
            s = s || h.dimensions
        }
        var u = Lr(n, i, a, o, s)
          , c = e.encode;
        !c && l && (c = Br(t, l, n, i, a, u)),
        Zf(t).source = new Tr({
            data: n,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: i,
            dimensionsDefine: u.dimensionsDefine,
            startIndex: u.startIndex,
            dimensionsDetectCount: u.dimensionsDetectCount,
            encodeDefine: c
        })
    }
    function Lr(t, e, n, i, r) {
        if (!t)
            return {
                dimensionsDefine: Pr(r)
            };
        var a, o, s;
        if (e === Wf)
            "auto" === i || null == i ? Or(function(t) {
                null != t && "-" !== t && (x(t) ? null == o && (o = 1) : o = 0)
            }, n, t, 10) : o = i ? 1 : 0,
            r || 1 !== o || (r = [],
            Or(function(t, e) {
                r[e] = null != t ? t : ""
            }, n, t)),
            a = r ? r.length : n === Yf ? t.length : t[0] ? t[0].length : null;
        else if (e === Hf)
            r || (r = Er(t),
            s = !0);
        else if (e === Gf)
            r || (r = [],
            s = !0,
            f(t, function(t, e) {
                r.push(e)
            }));
        else if (e === Vf) {
            var l = ln(t[0]);
            a = y(l) && l.length || 1
        }
        var h;
        return s && f(r, function(t, e) {
            "name" === (w(t) ? t.name : t) && (h = e)
        }),
        {
            startIndex: o,
            dimensionsDefine: Pr(r),
            dimensionsDetectCount: a,
            potentialNameDimIndex: h
        }
    }
    function Pr(t) {
        if (t) {
            var e = N();
            return d(t, function(t, n) {
                if (null == (t = a({}, w(t) ? t : {
                    name: t
                })).name)
                    return t;
                t.name += "",
                null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {
                    count: 1
                }),
                t
            })
        }
    }
    function Or(t, e, n, i) {
        if (null == i && (i = 1 / 0),
        e === Yf)
            for (a = 0; a < n.length && a < i; a++)
                t(n[a] ? n[a][0] : null, a);
        else
            for (var r = n[0] || [], a = 0; a < r.length && a < i; a++)
                t(r[a], a)
    }
    function Er(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]); )
            ;
        if (e) {
            var i = [];
            return f(e, function(t, e) {
                i.push(e)
            }),
            i
        }
    }
    function Br(t, e, n, i, r, a) {
        var o = Mr(t)
          , s = {}
          , l = []
          , h = []
          , u = t.subType
          , c = N(["pie", "map", "funnel"])
          , d = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (o && null != d.get(u)) {
            var p = t.ecModel
              , g = Zf(p).datasetMap
              , m = e.uid + "_" + r
              , v = g.get(m) || g.set(m, {
                categoryWayDim: 1,
                valueWayDim: 0
            });
            f(o.coordSysDims, function(t) {
                if (null == o.firstCategoryDimIndex) {
                    e = v.valueWayDim++;
                    s[t] = e,
                    h.push(e)
                } else if (o.categoryAxisMap.get(t))
                    s[t] = 0,
                    l.push(0);
                else {
                    var e = v.categoryWayDim++;
                    s[t] = e,
                    h.push(e)
                }
            })
        } else if (null != c.get(u)) {
            for (var y, _ = 0; _ < 5 && null == y; _++)
                zr(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
            if (null != y) {
                s.value = y;
                var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(x),
                l.push(x)
            }
        }
        return l.length && (s.itemName = l),
        h.length && (s.seriesName = h),
        s
    }
    function Nr(t) {
        var e = t.option;
        if (!e.data)
            return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }
    function Rr(t, e) {
        return zr(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }
    function zr(t, e, n, i, r, a) {
        function o(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!x(t) || "-" === t) || void 0)
        }
        var s;
        if (S(t))
            return !1;
        var l;
        if (i && (l = w(l = i[a]) ? l.name : l),
        e === Wf)
            if (n === Yf) {
                for (var h = t[a], u = 0; u < (h || []).length && u < 5; u++)
                    if (null != (s = o(h[r + u])))
                        return s
            } else
                for (u = 0; u < t.length && u < 5; u++) {
                    var c = t[r + u];
                    if (c && null != (s = o(c[a])))
                        return s
                }
        else if (e === Hf) {
            if (!l)
                return;
            for (u = 0; u < t.length && u < 5; u++)
                if ((f = t[u]) && null != (s = o(f[l])))
                    return s
        } else if (e === Gf) {
            if (!l)
                return;
            if (!(h = t[l]) || S(h))
                return !1;
            for (u = 0; u < h.length && u < 5; u++)
                if (null != (s = o(h[u])))
                    return s
        } else if (e === Vf)
            for (u = 0; u < t.length && u < 5; u++) {
                var f = t[u]
                  , d = ln(f);
                if (!y(d))
                    return !1;
                if (null != (s = o(d[a])))
                    return s
            }
        return !1
    }
    function Fr(t, e) {
        if (e) {
            var n = e.seiresIndex
              , i = e.seriesId
              , r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }
    function Vr(t, e) {
        var r = t.color && !t.colorLayer;
        f(e, function(e, a) {
            "colorLayer" === a && r || Ef.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? i(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e))
        })
    }
    function Wr(t) {
        t = t,
        this.option = {},
        this.option[jf] = 1,
        this._componentsMap = N({
            series: []
        }),
        this._seriesIndices,
        this._seriesIndicesMap,
        Vr(t, this._theme.option),
        i(t, Nf, !1),
        this.mergeOption(t)
    }
    function Hr(t, e) {
        y(e) || (e = e ? [e] : []);
        var n = {};
        return f(e, function(e) {
            n[e] = (t.get(e) || []).slice()
        }),
        n
    }
    function Gr(t, e, n) {
        return e.type ? e.type : n ? n.subType : Ef.determineSubType(t, e)
    }
    function qr(t, e) {
        t._seriesIndicesMap = N(t._seriesIndices = d(e, function(t) {
            return t.componentIndex
        }) || [])
    }
    function Xr(t, e) {
        return e.hasOwnProperty("subType") ? g(t, function(t) {
            return t.subType === e.subType
        }) : t
    }
    function Ur(t) {
        f(Kf, function(e) {
            this[e] = m(t[e], t)
        }, this)
    }
    function Yr() {
        this._coordinateSystems = []
    }
    function Zr(t) {
        this._api = t,
        this._timelineOptions = [],
        this._mediaList = [],
        this._mediaDefault,
        this._currentMediaIndices = [],
        this._optionBackup,
        this._newBaseOption
    }
    function jr(t, e, n) {
        var i, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption),
        (s || t.options) && (r = r || {},
        a = (t.options || []).slice()),
        t.media) {
            r = r || {};
            var l = t.media;
            Jf(l, function(t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
            })
        }
        return r || (r = t),
        r.timeline || (r.timeline = s),
        Jf([r].concat(a).concat(d(o, function(t) {
            return t.option
        })), function(t) {
            Jf(e, function(e) {
                e(t, n)
            })
        }),
        {
            baseOption: r,
            timelineOptions: a,
            mediaDefault: i,
            mediaList: o
        }
    }
    function $r(t, e, n) {
        var i = {
            width: e,
            height: n,
            aspectratio: e / n
        }
          , r = !0;
        return f(t, function(t, e) {
            var n = e.match(id);
            if (n && n[1] && n[2]) {
                var a = n[1]
                  , o = n[2].toLowerCase();
                Kr(i[o], t, a) || (r = !1)
            }
        }),
        r
    }
    function Kr(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? t <= e : t === e
    }
    function Qr(t, e) {
        return t.join(",") === e.join(",")
    }
    function Jr(t, e) {
        Jf(e = e || {}, function(e, n) {
            if (null != e) {
                var i = t[n];
                if (Ef.hasClass(n)) {
                    e = on(e);
                    var r = un(i = on(i), e);
                    t[n] = ed(r, function(t) {
                        return t.option && t.exist ? nd(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else
                    t[n] = nd(i, e, !0)
            }
        })
    }
    function ta(t) {
        var e = t && t.itemStyle;
        if (e)
            for (var n = 0, r = od.length; n < r; n++) {
                var a = od[n]
                  , o = e.normal
                  , s = e.emphasis;
                o && o[a] && (t[a] = t[a] || {},
                t[a].normal ? i(t[a].normal, o[a]) : t[a].normal = o[a],
                o[a] = null),
                s && s[a] && (t[a] = t[a] || {},
                t[a].emphasis ? i(t[a].emphasis, s[a]) : t[a].emphasis = s[a],
                s[a] = null)
            }
    }
    function ea(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal
              , r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null,
            o(t[e], i)) : t[e] = i),
            r && (t.emphasis = t.emphasis || {},
            t.emphasis[e] = r)
        }
    }
    function na(t) {
        ea(t, "itemStyle"),
        ea(t, "lineStyle"),
        ea(t, "areaStyle"),
        ea(t, "label"),
        ea(t, "labelLine"),
        ea(t, "upperLabel"),
        ea(t, "edgeLabel")
    }
    function ia(t, e) {
        var n = ad(t) && t[e]
          , i = ad(n) && n.textStyle;
        if (i)
            for (var r = 0, a = Ou.length; r < a; r++) {
                var e = Ou[r];
                i.hasOwnProperty(e) && (n[e] = i[e])
            }
    }
    function ra(t) {
        t && (na(t),
        ia(t, "label"),
        t.emphasis && ia(t.emphasis, "label"))
    }
    function aa(t) {
        if (ad(t)) {
            ta(t),
            na(t),
            ia(t, "label"),
            ia(t, "upperLabel"),
            ia(t, "edgeLabel"),
            t.emphasis && (ia(t.emphasis, "label"),
            ia(t.emphasis, "upperLabel"),
            ia(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (ta(e),
            ra(e));
            var n = t.markLine;
            n && (ta(n),
            ra(n));
            var i = t.markArea;
            i && ra(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !S(a))
                    for (s = 0; s < a.length; s++)
                        ra(a[s]);
                f(t.categories, function(t) {
                    na(t)
                })
            }
            if (r && !S(r))
                for (s = 0; s < r.length; s++)
                    ra(r[s]);
            if ((e = t.markPoint) && e.data)
                for (var o = e.data, s = 0; s < o.length; s++)
                    ra(o[s]);
            if ((n = t.markLine) && n.data)
                for (var l = n.data, s = 0; s < l.length; s++)
                    y(l[s]) ? (ra(l[s][0]),
                    ra(l[s][1])) : ra(l[s]);
            "gauge" === t.type ? (ia(t, "axisLabel"),
            ia(t, "title"),
            ia(t, "detail")) : "treemap" === t.type && (ea(t.breadcrumb, "itemStyle"),
            f(t.levels, function(t) {
                na(t)
            }))
        }
    }
    function oa(t) {
        return y(t) ? t : t ? [t] : []
    }
    function sa(t) {
        return (y(t) ? t[0] : t) || {}
    }
    function la(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++)
            ;
        return n
    }
    function ha(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++)
            null == a[r = e[o]] && (a[r] = {}),
            a = a[r];
        (i || null == a[e[o]]) && (a[e[o]] = n)
    }
    function ua(t) {
        f(ld, function(e) {
            e[0]in t && !(e[1]in t) && (t[e[1]] = t[e[0]])
        })
    }
    function ca(t) {
        f(t, function(e, n) {
            var i = []
              , r = [NaN, NaN]
              , a = [e.stackResultDimension, e.stackedOverDimension]
              , o = e.data
              , s = e.isStackedByIndex
              , l = o.map(a, function(a, l, h) {
                var u = o.get(e.stackedDimension, h);
                if (isNaN(u))
                    return r;
                var c, f;
                s ? f = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);
                for (var d = NaN, p = n - 1; p >= 0; p--) {
                    var g = t[p];
                    if (s || (f = g.data.rawIndexOf(g.stackedByDimension, c)),
                    f >= 0) {
                        var m = g.data.getByRawIndex(g.stackResultDimension, f);
                        if (u >= 0 && m > 0 || u <= 0 && m < 0) {
                            u += m,
                            d = m;
                            break
                        }
                    }
                }
                return i[0] = u,
                i[1] = d,
                i
            });
            o.hostModel.setData(l),
            e.data = l
        })
    }
    function fa(t, e) {
        Tr.isInstance(t) || (t = Tr.seriesDataToSource(t)),
        this._source = t;
        var n = this._data = t.data
          , i = t.sourceFormat;
        i === Xf && (this._offset = 0,
        this._dimSize = e,
        this._data = n),
        a(this, fd[i === Wf ? i + "_" + t.seriesLayoutBy : i])
    }
    function da() {
        return this._data.length
    }
    function pa(t) {
        return this._data[t]
    }
    function ga(t) {
        for (var e = 0; e < t.length; e++)
            this._data.push(t[e])
    }
    function ma(t, e, n, i) {
        return null != n ? t[n] : t
    }
    function va(t, e, n, i) {
        return ya(t[i], this._dimensionInfos[e])
    }
    function ya(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +lr(t)),
        null == t || "" === t ? NaN : +t
    }
    function _a(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, a, o = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name,
                a = s.index),
                dd[o](i, e, a, r)
            }
        }
    }
    function xa(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === Vf || i === Hf) {
                var r = t.getRawDataItem(e);
                return i !== Vf || w(r) || (r = null),
                r ? r[n] : void 0
            }
        }
    }
    function wa(t) {
        return new ba(t)
    }
    function ba(t) {
        t = t || {},
        this._reset = t.reset,
        this._plan = t.plan,
        this._count = t.count,
        this._onDirty = t.onDirty,
        this._dirty = !0,
        this.context
    }
    function Sa(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0,
        t._settedOutputEnd = null;
        var n, i;
        !e && t._reset && (n = t._reset(t.context)) && n.progress && (i = n.forceFirstProgress,
        n = n.progress),
        t._progress = n;
        var r = t._downstream;
        return r && r.dirty(),
        i
    }
    function Ma(t) {
        var e = t.name;
        fn(t) || (t.name = Ia(t) || e)
    }
    function Ia(t) {
        var e = t.getRawData()
          , n = [];
        return f(e.mapDimension("seriesName", !0), function(t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName)
        }),
        n.join(" ")
    }
    function Ta(t) {
        return t.model.getRawData().count()
    }
    function Ca(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()),
        Da
    }
    function Da(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }
    function ka(t, e) {
        f(t.CHANGABLE_METHODS, function(n) {
            t.wrapMethod(n, v(Aa, e))
        })
    }
    function Aa(t) {
        var e = La(t);
        e && e.setOutputEnd(this.count())
    }
    function La(t) {
        var e = (t.ecModel || {}).scheduler
          , n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }
    function Pa() {
        this.group = new Wh,
        this.uid = Qi("viewChart"),
        this.renderTask = wa({
            plan: Ba,
            reset: Na
        }),
        this.renderTask.context = {
            view: this
        }
    }
    function Oa(t, e) {
        if (t && (t.trigger(e),
        "group" === t.type))
            for (var n = 0; n < t.childCount(); n++)
                Oa(t.childAt(n), e)
    }
    function Ea(t, e, n) {
        var i = pn(t, e);
        null != i ? f(on(i), function(e) {
            Oa(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function(t) {
            Oa(t, n)
        })
    }
    function Ba(t) {
        return Md(t.model)
    }
    function Na(t) {
        var e = t.model
          , n = t.ecModel
          , i = t.api
          , r = t.payload
          , a = e.pipelineContext.canProgressiveRender
          , o = t.view
          , s = r && Sd(r).updateMethod
          , l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, n, i, r),
        Td[l]
    }
    function Ra(t, e, n) {
        function i() {
            u = (new Date).getTime(),
            c = null,
            t.apply(o, s || [])
        }
        var r, a, o, s, l, h = 0, u = 0, c = null;
        e = e || 0;
        var f = function() {
            r = (new Date).getTime(),
            o = this,
            s = arguments;
            var t = l || e
              , f = l || n;
            l = null,
            a = r - (f ? h : u) - t,
            clearTimeout(c),
            f ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a),
            h = r
        };
        return f.clear = function() {
            c && (clearTimeout(c),
            c = null)
        }
        ,
        f.debounceNextCall = function(t) {
            l = t
        }
        ,
        f
    }
    function za(t, e, n, i) {
        this.ecInstance = t,
        this.api = e,
        this.unfinished,
        this._dataProcessorHandlers = n.slice(),
        this._visualHandlers = i.slice(),
        this._stageTaskMap = N()
    }
    function Fa(t, e, n, i, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }
        r = r || {};
        var o;
        f(e, function(e, s) {
            if (!r.visualType || r.visualType === e.visualType) {
                var l = t._stageTaskMap.get(e.uid)
                  , h = l.seriesTaskMap
                  , u = l.overallTask;
                if (u) {
                    var c, f = u.agentStubMap;
                    f.each(function(t) {
                        a(r, t) && (t.dirty(),
                        c = !0)
                    }),
                    c && u.dirty(),
                    Pd(u, i);
                    var d = t.getPerformArgs(u, r.block);
                    f.each(function(t) {
                        t.perform(d)
                    }),
                    o |= u.perform(d)
                } else
                    h && h.each(function(s, l) {
                        a(r, s) && s.dirty();
                        var h = t.getPerformArgs(s, r.block);
                        h.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model),
                        Pd(s, i),
                        o |= s.perform(h)
                    })
            }
        }),
        t.unfinished |= o
    }
    function Va(t, e, n, i, r) {
        function a(n) {
            var a = n.uid
              , s = o.get(a) || o.set(a, wa({
                plan: Ua,
                reset: Ya,
                count: ja
            }));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            },
            $a(t, n, s)
        }
        var o = n.seriesTaskMap || (n.seriesTaskMap = N())
          , s = e.seriesType
          , l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
        var h = t._pipelineMap;
        o.each(function(t, e) {
            h.get(e) || (t.dispose(),
            o.removeKey(e))
        })
    }
    function Wa(t, e, n, i, r) {
        function a(e) {
            var n = e.uid
              , i = s.get(n) || s.set(n, wa({
                reset: Ga,
                onDirty: Xa
            }));
            i.context = {
                model: e,
                overallProgress: u,
                isOverallFilter: c
            },
            i.agent = o,
            i.__block = u,
            $a(t, e, i)
        }
        var o = n.overallTask = n.overallTask || wa({
            reset: Ha
        });
        o.context = {
            ecModel: i,
            api: r,
            overallReset: e.overallReset,
            scheduler: t
        };
        var s = o.agentStubMap = o.agentStubMap || N()
          , l = e.seriesType
          , h = e.getTargetSeries
          , u = !0
          , c = e.isOverallFilter;
        l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1,
        f(i.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function(t, e) {
            d.get(e) || (t.dispose(),
            s.removeKey(e))
        })
    }
    function Ha(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }
    function Ga(t, e) {
        return t.overallProgress && qa
    }
    function qa() {
        this.agent.dirty(),
        this.getDownstream().dirty()
    }
    function Xa() {
        this.agent && this.agent.dirty()
    }
    function Ua(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }
    function Ya(t) {
        if (t.useClearVisual && t.data.clearAllVisual(),
        (t.resetDefines = on(t.reset(t.model, t.ecModel, t.api, t.payload))).length)
            return Za
    }
    function Za(t, e) {
        for (var n = e.data, i = e.resetDefines, r = 0; r < i.length; r++) {
            var a = i[r];
            if (a && a.dataEach)
                for (var o = t.start; o < t.end; o++)
                    a.dataEach(n, o);
            else
                a && a.progress && a.progress(t, n)
        }
    }
    function ja(t) {
        return t.data.count()
    }
    function $a(t, e, n) {
        var i = e.uid
          , r = t._pipelineMap.get(i);
        !r.head && (r.head = n),
        r.tail && r.tail.pipe(n),
        r.tail = n,
        n.__idxInPipeline = r.count++,
        n.__pipeline = r
    }
    function Ka(t) {
        Od = null;
        try {
            t(Ed, Bd)
        } catch (t) {}
        return Od
    }
    function Qa(t, e) {
        for (var n in e.prototype)
            t[n] = R
    }
    function Ja(t) {
        return function(e, n, i) {
            e = e && e.toLowerCase(),
            ch.prototype[t].call(this, e, n, i)
        }
    }
    function to() {
        ch.call(this)
    }
    function eo(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio
        }
        i = i || {},
        "string" == typeof e && (e = lp[e]),
        this.id,
        this.group,
        this._dom = t;
        var a = this._zr = an(t, {
            renderer: i.renderer || "canvas",
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = Ra(m(a.flush, a), 17),
        (e = n(e)) && ud(e, !0),
        this._theme = e,
        this._chartsViews = [],
        this._chartsMap = {},
        this._componentsViews = [],
        this._componentsMap = {},
        this._coordSysMgr = new Yr;
        var o = this._api = xo(this);
        qt(sp, r),
        qt(rp, r),
        this._scheduler = new za(this,o,rp,sp),
        ch.call(this),
        this._messageCenter = new to,
        this._initEvents(),
        this.resize = m(this.resize, this),
        this._pendingActions = [],
        a.animation.on("frame", this._onframe, this),
        ho(a, this),
        O(this)
    }
    function no(t, e, n) {
        var i, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = mn(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n)))
                return i
        }
    }
    function io(t) {
        var e = t._model
          , n = t._scheduler;
        n.restorePipelines(e),
        n.prepareStageTasks(),
        uo(t, "component", e, n),
        uo(t, "chart", e, n),
        n.plan()
    }
    function ro(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
        }
        var o = t._model;
        if (i) {
            var s = {};
            s[i + "Id"] = n[i + "Id"],
            s[i + "Index"] = n[i + "Index"],
            s[i + "Name"] = n[i + "Name"];
            var l = {
                mainType: i,
                query: s
            };
            r && (l.subType = r),
            o && o.eachComponent(l, function(e, n) {
                a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }, t)
        } else
            Wd(t._componentsViews.concat(t._chartsViews), a)
    }
    function ao(t, e) {
        var n = t._chartsMap
          , i = t._scheduler;
        e.eachSeries(function(t) {
            i.updateStreamModes(t, n[t.__viewId])
        })
    }
    function oo(t, e) {
        var n = t.type
          , i = t.escapeConnect
          , r = np[n]
          , s = r.actionInfo
          , l = (s.update || "update").split(":")
          , h = l.pop();
        l = null != l[0] && qd(l[0]),
        this[$d] = !0;
        var u = [t]
          , c = !1;
        t.batch && (c = !0,
        u = d(t.batch, function(e) {
            return e = o(a({}, e), t),
            e.batch = null,
            e
        }));
        var f, p = [], g = "highlight" === n || "downplay" === n;
        Wd(u, function(t) {
            f = r.action(t, this._model, this._api),
            (f = f || a({}, t)).type = s.event || f.type,
            p.push(f),
            g ? ro(this, h, t, "series") : l && ro(this, h, t, l.main, l.sub)
        }, this),
        "none" === h || g || l || (this[Kd] ? (io(this),
        tp.update.call(this, t),
        this[Kd] = !1) : tp[h].call(this, t)),
        f = c ? {
            type: s.event || n,
            escapeConnect: i,
            batch: p
        } : p[0],
        this[$d] = !1,
        !e && this._messageCenter.trigger(f.type, f)
    }
    function so(t) {
        for (var e = this._pendingActions; e.length; ) {
            var n = e.shift();
            oo.call(this, n, t)
        }
    }
    function lo(t) {
        !t && this.trigger("updated")
    }
    function ho(t, e) {
        t.on("rendered", function() {
            e.trigger("rendered"),
            !t.animation.isFinished() || e[Kd] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }
    function uo(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type
              , r = s[e];
            if (!r) {
                var u = qd(t.type);
                (r = new (a ? xd.getClass(u.main, u.sub) : Pa.getClass(u.sub))).init(n, h),
                s[e] = r,
                o.push(r),
                l.add(r.group)
            }
            t.__viewId = r.__id = e,
            r.__alive = !0,
            r.__model = t,
            r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            },
            !a && i.prepareView(r, t, n, h)
        }
        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++)
            o[u].__alive = !1;
        a ? n.eachComponent(function(t, e) {
            "series" !== t && r(e)
        }) : n.eachSeries(r);
        for (u = 0; u < o.length; ) {
            var c = o[u];
            c.__alive ? u++ : (!a && c.renderTask.dispose(),
            l.remove(c.group),
            c.dispose(n, h),
            o.splice(u, 1),
            delete s[c.__id],
            c.__id = c.group.__ecComponentInfo = null)
        }
    }
    function co(t) {
        t.clearColorPalette(),
        t.eachSeries(function(t) {
            t.clearColorPalette()
        })
    }
    function fo(t, e, n, i) {
        po(t, e, n, i),
        Wd(t._chartsViews, function(t) {
            t.__alive = !1
        }),
        go(t, e, n, i),
        Wd(t._chartsViews, function(t) {
            t.__alive || t.remove(e, n)
        })
    }
    function po(t, e, n, i, r) {
        Wd(r || t._componentsViews, function(t) {
            var r = t.__model;
            t.render(r, e, n, i),
            _o(r, t)
        })
    }
    function go(t, e, n, i, r) {
        var a, o = t._scheduler;
        e.eachSeries(function(e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            o.updatePayload(s, i),
            r && r.get(e.uid) && s.dirty(),
            a |= s.perform(o.getPerformArgs(s)),
            n.group.silent = !!e.get("silent"),
            _o(e, n),
            yo(e, n)
        }),
        o.unfinished |= a,
        vo(t._zr, e),
        kd(t._zr.dom, e)
    }
    function mo(t, e) {
        Wd(op, function(n) {
            n(t, e)
        })
    }
    function vo(t, e) {
        var n = t.storage
          , i = 0;
        n.traverse(function(t) {
            t.isGroup || i++
        }),
        i > e.get("hoverLayerThreshold") && !Yl.node && n.traverse(function(t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }
    function yo(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function(t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n),
            t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
                t.setStyle("blend", n)
            })
        })
    }
    function _o(t, e) {
        var n = t.get("z")
          , i = t.get("zlevel");
        e.group.traverse(function(t) {
            "group" !== t.type && (null != n && (t.z = n),
            null != i && (t.zlevel = i))
        })
    }
    function xo(t) {
        var e = t._coordSysMgr;
        return a(new Ur(t), {
            getCoordinateSystems: m(e.getCoordinateSystems, e),
            getComponentByElement: function(e) {
                for (; e; ) {
                    var n = e.__ecComponentInfo;
                    if (null != n)
                        return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }
    function wo(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++)
                t[i][n] = e
        }
        var n = "__connectUpdateStatus";
        Wd(ip, function(i, r) {
            t._messageCenter.on(r, function(i) {
                if (cp[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect)
                        return;
                    var r = t.makeActionFromEvent(i)
                      , a = [];
                    Wd(up, function(e) {
                        e !== t && e.group === t.group && a.push(e)
                    }),
                    e(a, 0),
                    Wd(a, function(t) {
                        1 !== t[n] && t.dispatchAction(r)
                    }),
                    e(a, 2)
                }
            })
        })
    }
    function bo(t) {
        cp[t] = !1
    }
    function So(t) {
        return up[_n(t, pp)]
    }
    function Mo(t, e) {
        lp[t] = e
    }
    function Io(t) {
        ap.push(t)
    }
    function To(t, e) {
        Ao(rp, t, e, Ud)
    }
    function Co(t, e, n) {
        "function" == typeof e && (n = e,
        e = "");
        var i = Gd(t) ? t.type : [t, t = {
            event: e
        }][0];
        t.event = (t.event || i).toLowerCase(),
        e = t.event,
        Vd(Qd.test(i) && Qd.test(e)),
        np[i] || (np[i] = {
            action: n,
            actionInfo: t
        }),
        ip[e] = i
    }
    function Do(t, e) {
        Ao(sp, t, e, Yd, "layout")
    }
    function ko(t, e) {
        Ao(sp, t, e, Zd, "visual")
    }
    function Ao(t, e, n, i, r) {
        (Hd(e) || Gd(e)) && (n = e,
        e = i);
        var a = za.wrapStageHandler(n, r);
        return a.__prio = e,
        a.__raw = n,
        t.push(a),
        a
    }
    function Lo(t, e) {
        hp[t] = e
    }
    function Po(t) {
        return Ef.extend(t)
    }
    function Oo(t) {
        return xd.extend(t)
    }
    function Eo(t) {
        return _d.extend(t)
    }
    function Bo(t) {
        return Pa.extend(t)
    }
    function No(t) {
        return t
    }
    function Ro(t, e, n, i, r) {
        this._old = t,
        this._new = e,
        this._oldKeyGetter = n || No,
        this._newKeyGetter = i || No,
        this.context = r
    }
    function zo(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a)
              , s = e[o];
            null == s ? (n.push(o),
            e[o] = a) : (s.length || (e[o] = s = [s]),
            s.push(a))
        }
    }
    function Fo(t) {
        var e = {}
          , n = e.encode = {}
          , i = N()
          , r = [];
        f(t.dimensions, function(e) {
            var a = t.getDimensionInfo(e)
              , o = a.coordDim;
            if (o) {
                var s = n[o];
                n.hasOwnProperty(o) || (s = n[o] = []),
                s[a.coordDimIndex] = e,
                a.isExtraCoord || (i.set(o, 1),
                Wo(a.type) && (r[0] = e))
            }
            yp.each(function(t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = a.otherDims[e];
                null != r && !1 !== r && (i[r] = a.name)
            })
        });
        var a = []
          , o = {};
        i.each(function(t, e) {
            var i = n[e];
            o[e] = i[0],
            a = a.concat(i)
        }),
        e.dataDimsOnCoord = a,
        e.encodeFirstDimNotExtra = o;
        var s = n.label;
        s && s.length && (r = s.slice());
        var l = r.slice()
          , h = n.tooltip;
        return h && h.length && (l = h.slice()),
        n.defaultedLabel = r,
        n.defaultedTooltip = l,
        e
    }
    function Vo(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }
    function Wo(t) {
        return !("ordinal" === t || "time" === t)
    }
    function Ho(t) {
        return t._rawCount > 65535 ? Sp : Mp
    }
    function Go(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }
    function qo(t, e) {
        f(Ip.concat(e.__wrappedMethods || []), function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }),
        t.__wrappedMethods = e.__wrappedMethods
    }
    function Xo(t) {
        var e = t._invertedIndicesMap;
        f(e, function(n, i) {
            var r = t._dimensionInfos[i].ordinalMeta;
            if (r) {
                n = e[i] = new Sp(r.categories.length);
                for (a = 0; a < n.length; a++)
                    n[a] = NaN;
                for (var a = 0; a < t._count; a++)
                    n[t.get(i, a)] = a
            }
        })
    }
    function Uo(t) {
        return t
    }
    function Yo(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }
    function Zo(t, e) {
        var n = t._idList[e];
        return null == n && (n = t._getIdFromStore(e)),
        null == n && (n = wp + e),
        n
    }
    function jo(t) {
        return y(t) || (t = [t]),
        t
    }
    function $o(t, e) {
        var n = t.dimensions
          , i = new Tp(d(n, t.getDimensionInfo, t),t.hostModel);
        qo(i, t);
        for (var r = i._storage = {}, o = t._storage, s = a({}, t._rawExtent), h = 0; h < n.length; h++) {
            var u = n[h];
            o[u] && (l(e, u) >= 0 ? (r[u] = Ko(o[u]),
            s[u] = Qo()) : r[u] = o[u])
        }
        return i
    }
    function Ko(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++)
            e[n] = Go(t[n]);
        return e
    }
    function Qo() {
        return [1 / 0, -1 / 0]
    }
    function Jo(t, e, i) {
        function r(t, e, n) {
            null != yp.get(e) ? t.otherDims[e] = n : (t.coordDim = e,
            t.coordDimIndex = n,
            u.set(e, !0))
        }
        Tr.isInstance(e) || (e = Tr.seriesDataToSource(e)),
        i = i || {},
        t = (t || []).slice();
        for (var s = (i.dimsDef || []).slice(), l = N(i.encodeDef), h = N(), u = N(), c = [], d = ts(e, t, s, i.dimCount), p = 0; p < d; p++) {
            var g = s[p] = a({}, w(s[p]) ? s[p] : {
                name: s[p]
            })
              , m = g.name
              , v = c[p] = {
                otherDims: {}
            };
            null != m && null == h.get(m) && (v.name = v.displayName = m,
            h.set(m, p)),
            null != g.type && (v.type = g.type),
            null != g.displayName && (v.displayName = g.displayName)
        }
        l.each(function(t, e) {
            t = on(t).slice();
            var n = l.set(e, []);
            f(t, function(t, i) {
                x(t) && (t = h.get(t)),
                null != t && t < d && (n[i] = t,
                r(c[t], e, i))
            })
        });
        var y = 0;
        f(t, function(t, e) {
            var i, t, a, s;
            if (x(t))
                i = t,
                t = {};
            else {
                i = t.name;
                var h = t.ordinalMeta;
                t.ordinalMeta = null,
                (t = n(t)).ordinalMeta = h,
                a = t.dimsDef,
                s = t.otherDims,
                t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var u = on(l.get(i));
            if (!u.length)
                for (var d = 0; d < (a && a.length || 1); d++) {
                    for (; y < c.length && null != c[y].coordDim; )
                        y++;
                    y < c.length && u.push(y++)
                }
            f(u, function(e, n) {
                var l = c[e];
                r(o(l, t), i, n),
                null == l.name && a && (l.name = l.displayName = a[n]),
                s && o(l.otherDims, s)
            })
        });
        var _ = i.generateCoord
          , b = i.generateCoordCount
          , S = null != b;
        b = _ ? b || 1 : 0;
        for (var M = _ || "value", I = 0; I < d; I++)
            null == (v = c[I] = c[I] || {}).coordDim && (v.coordDim = es(M, u, S),
            v.coordDimIndex = 0,
            (!_ || b <= 0) && (v.isExtraCoord = !0),
            b--),
            null == v.name && (v.name = es(v.coordDim, h)),
            null == v.type && Rr(e, I, v.name) && (v.type = "ordinal");
        return c
    }
    function ts(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return f(e, function(t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }),
        r
    }
    function es(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i); )
                i++;
            t += i
        }
        return e.set(t, !0),
        t
    }
    function ns(t, e, n) {
        var i, r, a, o, s = (n = n || {}).byIndex, l = n.stackedCoordDimension, h = !(!t || !t.get("stack"));
        if (f(e, function(t, n) {
            x(t) && (e[n] = t = {
                name: t
            }),
            h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t),
            r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }),
        r && (s || i)) {
            a = "__\0ecstackresult",
            o = "__\0ecstackedover",
            i && (i.createInvertedIndices = !0);
            var u = r.coordDim
              , c = r.type
              , d = 0;
            f(e, function(t) {
                t.coordDim === u && d++
            }),
            e.push({
                name: a,
                coordDim: u,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }),
            d++,
            e.push({
                name: o,
                coordDim: o,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            })
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        }
    }
    function is(t, e, n) {
        return e && e === t.getCalculationInfo("stackedDimension") && (null != n ? n === t.getCalculationInfo("stackedByDimension") : t.getCalculationInfo("isStackedByIndex"))
    }
    function rs(t, e, n) {
        n = n || {},
        Tr.isInstance(t) || (t = Tr.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"), a = Yr.get(r), o = Mr(e);
        o && (i = d(o.coordSysDims, function(t) {
            var e = {
                name: t
            }
              , n = o.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = Vo(i)
            }
            return e
        })),
        i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
        var s, l, h = kp(t, {
            coordDimensions: i,
            generateCoord: n.generateCoord
        });
        o && f(h, function(t, e) {
            var n = t.coordDim
              , i = o.categoryAxisMap.get(n);
            i && (null == s && (s = e),
            t.ordinalMeta = i.getOrdinalMeta()),
            null != t.otherDims.itemName && (l = !0)
        }),
        l || null == s || (h[s].otherDims.itemName = 0);
        var u = ns(e, h)
          , c = new Tp(h,e);
        c.setCalculationInfo(u);
        var p = null != s && as(t) ? function(t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
        }
        : null;
        return c.hasItemOption = !1,
        c.initData(t, null, p),
        c
    }
    function as(t) {
        if (t.sourceFormat === Vf) {
            var e = os(t.data || []);
            return null != e && !y(ln(e))
        }
    }
    function os(t) {
        for (var e = 0; e < t.length && null == t[e]; )
            e++;
        return t[e]
    }
    function ss(t, e) {
        if ("image" !== this.type) {
            var n = this.style
              , i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t,
            n.fill = e || "#fff") : (n.fill && (n.fill = t),
            n.stroke && (n.stroke = t)),
            this.dirty(!1)
        }
    }
    function ls(t, e, n, i, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? vi(t.slice(8), new Nt(e,n,i,r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? mi(t.slice(7), {}, new Nt(e,n,i,r), o ? "center" : "cover") : new Np({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }),
        l.__isEmptyBrush = s,
        l.setColor = ss,
        l.setColor(a),
        l
    }
    function hs(t, e) {
        var n = t.mapDimension("defaultedLabel", !0)
          , i = n.length;
        if (1 === i)
            return _a(t, e, n[0]);
        if (i) {
            for (var r = [], a = 0; a < n.length; a++) {
                var o = _a(t, e, n[a]);
                r.push(o)
            }
            return r.join(" ")
        }
    }
    function us(t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [+n, +n]
    }
    function cs(t) {
        return [t[0] / 2, t[1] / 2]
    }
    function fs(t, e, n) {
        Wh.call(this),
        this.updateData(t, e, n)
    }
    function ds(t, e) {
        this.parent.drift(t, e)
    }
    function ps(t) {
        this.group = new Wh,
        this._symbolCtor = t || fs
    }
    function gs(t, e, n, i) {
        return e && !isNaN(e[0]) && !isNaN(e[1]) && !(i.isIgnore && i.isIgnore(n)) && !(i.clipShape && !i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol")
    }
    function ms(t) {
        return null == t || w(t) || (t = {
            isIgnore: t
        }),
        t || {}
    }
    function vs(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }
    function ys(t, e, n) {
        var i = t.getBaseAxis()
          , r = t.getOtherAxis(i)
          , a = _s(r, n)
          , o = i.dim
          , s = r.dim
          , l = e.mapDimension(s)
          , h = e.mapDimension(o)
          , u = "x" === s || "radius" === s ? 1 : 0
          , c = is(e, l, h);
        return {
            dataDimsForPoint: d(t.dimensions, function(t) {
                return e.mapDimension(t)
            }),
            valueStart: a,
            valueAxisDim: s,
            baseAxisDim: o,
            stacked: c,
            valueDim: l,
            baseDim: h,
            baseDataOffset: u,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }
    function _s(t, e) {
        var n = 0
          , i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]),
        n
    }
    function xs(t, e, n, i) {
        var r = NaN;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)),
        isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset
          , o = [];
        return o[a] = n.get(t.baseDim, i),
        o[1 - a] = r,
        e.dataToPoint(o)
    }
    function ws(t, e) {
        var n = [];
        return e.diff(t).add(function(t) {
            n.push({
                cmd: "+",
                idx: t
            })
        }).update(function(t, e) {
            n.push({
                cmd: "=",
                idx: e,
                idx1: t
            })
        }).remove(function(t) {
            n.push({
                cmd: "-",
                idx: t
            })
        }).execute(),
        n
    }
    function bs(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }
    function Ss(t, e, n, i, r, a, o, s, l, h, u) {
        return null == h ? Ms(e, "x") ? Is(t, e, n, i, r, a, o, s, l, "x", u) : Ms(e, "y") ? Is(t, e, n, i, r, a, o, s, l, "y", u) : Ts.apply(this, arguments) : "none" !== h && Ms(e, h) ? Is.apply(this, arguments) : Ts.apply(this, arguments)
    }
    function Ms(t, e) {
        if (t.length <= 1)
            return !0;
        for (var n = "x" === e ? 0 : 1, i = t[0][n], r = 0, a = 1; a < t.length; ++a) {
            var o = t[a][n] - i;
            if (!isNaN(o) && !isNaN(r) && 0 !== o && 0 !== r && o >= 0 != r >= 0)
                return !1;
            isNaN(o) || 0 === o || (r = o,
            i = t[a][n])
        }
        return !0
    }
    function Is(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, f = n, d = 0; d < i; d++) {
            var p = e[f];
            if (f >= r || f < 0)
                break;
            if (bs(p)) {
                if (u) {
                    f += a;
                    continue
                }
                break
            }
            if (f === n)
                t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
            else if (l > 0) {
                var g = e[c]
                  , m = "y" === h ? 1 : 0
                  , v = (p[m] - g[m]) * l;
                Yp(jp, g),
                jp[m] = g[m] + v,
                Yp($p, p),
                $p[m] = p[m] - v,
                t.bezierCurveTo(jp[0], jp[1], $p[0], $p[1], p[0], p[1])
            } else
                t.lineTo(p[0], p[1]);
            c = f,
            f += a
        }
        return d
    }
    function Ts(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, f = n, d = 0; d < i; d++) {
            var p = e[f];
            if (f >= r || f < 0)
                break;
            if (bs(p)) {
                if (u) {
                    f += a;
                    continue
                }
                break
            }
            if (f === n)
                t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]),
                Yp(jp, p);
            else if (l > 0) {
                var g = f + a
                  , m = e[g];
                if (u)
                    for (; m && bs(e[g]); )
                        m = e[g += a];
                var v = .5
                  , y = e[c];
                if (!(m = e[g]) || bs(m))
                    Yp($p, p);
                else {
                    bs(m) && !u && (m = p),
                    W(Zp, m, y);
                    var _, x;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        _ = Math.abs(p[w] - y[w]),
                        x = Math.abs(p[w] - m[w])
                    } else
                        _ = lh(p, y),
                        x = lh(p, m);
                    Up($p, p, Zp, -l * (1 - (v = x / (x + _))))
                }
                qp(jp, jp, s),
                Xp(jp, jp, o),
                qp($p, $p, s),
                Xp($p, $p, o),
                t.bezierCurveTo(jp[0], jp[1], $p[0], $p[1], p[0], p[1]),
                Up(jp, p, Zp, l * v)
            } else
                t.lineTo(p[0], p[1]);
            c = f,
            f += a
        }
        return d
    }
    function Cs(t, e) {
        var n = [1 / 0, 1 / 0]
          , i = [-1 / 0, -1 / 0];
        if (e)
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a[0] < n[0] && (n[0] = a[0]),
                a[1] < n[1] && (n[1] = a[1]),
                a[0] > i[0] && (i[0] = a[0]),
                a[1] > i[1] && (i[1] = a[1])
            }
        return {
            min: e ? n : i,
            max: e ? i : n
        }
    }
    function Ds(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n]
                  , r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1])
                    return
            }
            return !0
        }
    }
    function ks(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }
    function As(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1
              , i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n,
            e[1] -= i * n
        }
        return e
    }
    function Ls(t, e, n) {
        if (!n.valueDim)
            return [];
        for (var i = [], r = 0, a = e.count(); r < a; r++)
            i.push(xs(n, t, e, r));
        return i
    }
    function Ps(t, e, n) {
        var i = As(t.getAxis("x"))
          , r = As(t.getAxis("y"))
          , a = t.getBaseAxis().isHorizontal()
          , o = Math.min(i[0], i[1])
          , s = Math.min(r[0], r[1])
          , l = Math.max(i[0], i[1]) - o
          , h = Math.max(r[0], r[1]) - s
          , u = n.get("lineStyle.width") || 2
          , c = n.get("clipOverflow") ? u / 2 : Math.max(l, h);
        a ? (s -= c,
        h += 2 * c) : (o -= c,
        l += 2 * c);
        var f = new tf({
            shape: {
                x: o,
                y: s,
                width: l,
                height: h
            }
        });
        return e && (f.shape[a ? "width" : "height"] = 0,
        Ui(f, {
            shape: {
                width: l,
                height: h
            }
        }, n)),
        f
    }
    function Os(t, e, n) {
        var i = t.getAngleAxis()
          , r = t.getRadiusAxis().getExtent()
          , a = i.getExtent()
          , o = Math.PI / 180
          , s = new Zc({
            shape: {
                cx: t.cx,
                cy: t.cy,
                r0: r[0],
                r: r[1],
                startAngle: -a[0] * o,
                endAngle: -a[1] * o,
                clockwise: i.inverse
            }
        });
        return e && (s.shape.endAngle = -a[0] * o,
        Ui(s, {
            shape: {
                endAngle: -a[1] * o
            }
        }, n)),
        s
    }
    function Es(t, e, n) {
        return "polar" === t.type ? Os(t, e, n) : Ps(t, e, n)
    }
    function Bs(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1]
              , l = t[o];
            a.push(l);
            var h = [];
            switch (n) {
            case "end":
                h[r] = s[r],
                h[1 - r] = l[1 - r],
                a.push(h);
                break;
            case "middle":
                var u = (l[r] + s[r]) / 2
                  , c = [];
                h[r] = c[r] = u,
                h[1 - r] = l[1 - r],
                c[1 - r] = s[1 - r],
                a.push(h),
                a.push(c);
                break;
            default:
                h[r] = l[r],
                h[1 - r] = s[1 - r],
                a.push(h)
            }
        }
        return t[o] && a.push(t[o]),
        a
    }
    function Ns(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, a = n.length - 1; a >= 0; a--) {
                var o = n[a].dimension
                  , s = t.dimensions[o]
                  , l = t.getDimensionInfo(s);
                if ("x" === (i = l && l.coordDim) || "y" === i) {
                    r = n[a];
                    break
                }
            }
            if (r) {
                var h = e.getAxis(i)
                  , u = d(r.stops, function(t) {
                    return {
                        coord: h.toGlobalCoord(h.dataToCoord(t.value)),
                        color: t.color
                    }
                })
                  , c = u.length
                  , p = r.outerColors.slice();
                c && u[0].coord > u[c - 1].coord && (u.reverse(),
                p.reverse());
                var g = u[0].coord - 10
                  , m = u[c - 1].coord + 10
                  , v = m - g;
                if (v < .001)
                    return "transparent";
                f(u, function(t) {
                    t.offset = (t.coord - g) / v
                }),
                u.push({
                    offset: c ? u[c - 1].offset : .5,
                    color: p[1] || "transparent"
                }),
                u.unshift({
                    offset: c ? u[0].offset : .5,
                    color: p[0] || "transparent"
                });
                var y = new lf(0,0,0,0,u,!0);
                return y[i] = g,
                y[i + "2"] = m,
                y
            }
        }
    }
    function Rs(t) {
        this._setting = t || {},
        this._extent = [1 / 0, -1 / 0],
        this._interval = 0,
        this.init && this.init.apply(this, arguments)
    }
    function zs(t) {
        this.categories = t.categories || [],
        this._needCollect = t.needCollect,
        this._deduplication = t.deduplication,
        this._map
    }
    function Fs(t) {
        return t._map || (t._map = N(t.categories))
    }
    function Vs(t) {
        return w(t) && null != t.value ? t.value : t + ""
    }
    function Ws(t, e, n, i) {
        var r = {}
          , a = t[1] - t[0]
          , o = r.interval = cr(a / e, !0);
        null != n && o < n && (o = r.interval = n),
        null != i && o > i && (o = r.interval = i);
        var s = r.intervalPrecision = Hs(o);
        return qs(r.niceTickExtent = [rg(Math.ceil(t[0] / o) * o, s), rg(Math.floor(t[1] / o) * o, s)], t),
        r
    }
    function Hs(t) {
        return ir(t) + 2
    }
    function Gs(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }
    function qs(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]),
        !isFinite(t[1]) && (t[1] = e[1]),
        Gs(t, 0, e),
        Gs(t, 1, e),
        t[0] > t[1] && (t[0] = t[1])
    }
    function Xs(t, e, n, i) {
        var r = [];
        if (!t)
            return r;
        e[0] < n[0] && r.push(e[0]);
        for (var a = n[0]; a <= n[1] && (r.push(a),
        (a = rg(a + t, i)) !== r[r.length - 1]); )
            if (r.length > 1e4)
                return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]),
        r
    }
    function Us(t) {
        return t.get("stack") || sg + t.seriesIndex
    }
    function Ys(t) {
        return t.dim + t.index
    }
    function Zs(t, e) {
        return js(d(t, function(t) {
            var e = t.getData()
              , n = t.coordinateSystem.getBaseAxis()
              , i = n.getExtent()
              , r = "category" === n.type ? n.getBandWidth() : Math.abs(i[1] - i[0]) / e.count();
            return {
                bandWidth: r,
                barWidth: er(t.get("barWidth"), r),
                barMaxWidth: er(t.get("barMaxWidth"), r),
                barGap: t.get("barGap"),
                barCategoryGap: t.get("barCategoryGap"),
                axisKey: Ys(n),
                stackId: Us(t)
            }
        }), e)
    }
    function js(t, e) {
        var n = {};
        f(t, function(t, e) {
            var i = t.axisKey
              , r = t.bandWidth
              , a = n[i] || {
                bandWidth: r,
                remainedWidth: r,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }
              , o = a.stacks;
            n[i] = a;
            var s = t.stackId;
            o[s] || a.autoWidthCount++,
            o[s] = o[s] || {
                width: 0,
                maxWidth: 0
            };
            var l = t.barWidth;
            l && !o[s].width && (o[s].width = l,
            l = Math.min(a.remainedWidth, l),
            a.remainedWidth -= l);
            var h = t.barMaxWidth;
            h && (o[s].maxWidth = h);
            var u = t.barGap;
            null != u && (a.gap = u);
            var c = t.barCategoryGap;
            null != c && (a.categoryGap = c)
        });
        var i = {};
        return f(n, function(t, e) {
            i[e] = {};
            var n = t.stacks
              , r = t.bandWidth
              , a = er(t.categoryGap, r)
              , o = er(t.gap, 1)
              , s = t.remainedWidth
              , l = t.autoWidthCount
              , h = (s - a) / (l + (l - 1) * o);
            h = Math.max(h, 0),
            f(n, function(t, e) {
                var n = t.maxWidth;
                n && n < h && (n = Math.min(n, s),
                t.width && (n = Math.min(n, t.width)),
                s -= n,
                t.width = n,
                l--)
            }),
            h = (s - a) / (l + (l - 1) * o),
            h = Math.max(h, 0);
            var u, c = 0;
            f(n, function(t, e) {
                t.width || (t.width = h),
                u = t,
                c += t.width * (1 + o)
            }),
            u && (c -= u.width * o);
            var d = -c / 2;
            f(n, function(t, n) {
                i[e][n] = i[e][n] || {
                    offset: d,
                    width: t.width
                },
                d += t.width * (1 + o)
            })
        }),
        i
    }
    function $s(t, e) {
        return vg(t, mg(e))
    }
    function Ks(t, e) {
        var n, i, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, h = null != s, u = t.getExtent();
        "ordinal" === a ? n = e.getCategories().length : (y(i = e.get("boundaryGap")) || (i = [i || 0, i || 0]),
        "boolean" == typeof i[0] && (i = [0, 0]),
        i[0] = er(i[0], 1),
        i[1] = er(i[1], 1),
        r = u[1] - u[0] || Math.abs(u[0])),
        null == o && (o = "ordinal" === a ? n ? 0 : NaN : u[0] - i[0] * r),
        null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : u[1] + i[1] * r),
        "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
            min: u[0],
            max: u[1]
        })),
        "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })),
        (null == o || !isFinite(o)) && (o = NaN),
        (null == s || !isFinite(s)) && (s = NaN),
        t.setBlank(I(o) || I(s)),
        e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0),
        o < 0 && s < 0 && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var f, d = [];
            if (c.eachSeriesByType("bar", function(t) {
                t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type && (d.push(t),
                f |= t.getBaseAxis() === e.axis)
            }),
            f) {
                var p = Qs(o, s, e, d);
                o = p.min,
                s = p.max
            }
        }
        return [o, s]
    }
    function Qs(t, e, n, i) {
        var r = n.axis.getExtent()
          , a = r[1] - r[0]
          , o = Zs(i)[n.axis.dim + n.axis.index];
        if (void 0 === o)
            return {
                min: t,
                max: e
            };
        var s = 1 / 0;
        f(o, function(t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        f(o, function(t) {
            l = Math.max(t.offset + t.width, l)
        }),
        s = Math.abs(s),
        l = Math.abs(l);
        var h = s + l
          , u = e - t
          , c = u / (1 - (s + l) / a) - u;
        return e += c * (l / h),
        t -= c * (s / h),
        {
            min: t,
            max: e
        }
    }
    function Js(t, e) {
        if (e = e || t.get("type"))
            switch (e) {
            case "category":
                return new ig(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),[1 / 0, -1 / 0]);
            case "value":
                return new og;
            default:
                return (Rs.getClass(e) || og).create(t)
            }
    }
    function tl(t, e, n, i, r) {
        var a, o = 0, s = 0, l = (i - r) / 180 * Math.PI, h = 1;
        e.length > 40 && (h = Math.floor(e.length / 40));
        for (var u = 0; u < t.length; u += h) {
            var c = t[u]
              , f = ee(e[u], n, "center", "top");
            f.x += c * Math.cos(l),
            f.y += c * Math.sin(l),
            f.width *= 1.3,
            f.height *= 1.3,
            a ? a.intersect(f) ? (s++,
            o = Math.max(o, s)) : (a.union(f),
            s = 0) : a = f.clone()
        }
        return 0 === o && h > 1 ? h : (o + 1) * h - 1
    }
    function el(t, e) {
        var n = t.scale
          , i = n.getTicksLabels()
          , r = n.getTicks();
        return "string" == typeof e ? (e = function(t) {
            return function(e) {
                return t.replace("{value}", null != e ? e : "")
            }
        }(e),
        d(i, e)) : "function" == typeof e ? d(r, function(n, i) {
            return e(nl(t, n), i)
        }, this) : i
    }
    function nl(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }
    function il(t) {
        return this._axes[t]
    }
    function rl(t) {
        Sg.call(this, t)
    }
    function al(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n,
        t[1] -= n
    }
    function ol(t, e) {
        return e.type || (e.data ? "category" : "value")
    }
    function sl(t, e, n) {
        return t.getCoordSysModel() === e
    }
    function ll(t, e) {
        var n = e * Math.PI / 180
          , i = t.plain()
          , r = i.width
          , a = i.height
          , o = r * Math.cos(n) + a * Math.sin(n)
          , s = r * Math.sin(n) + a * Math.cos(n);
        return new Nt(i.x,i.y,o,s)
    }
    function hl(t) {
        var e, n = t.model, i = n.get("axisLabel.show") ? n.getFormattedLabels() : [], r = n.getModel("axisLabel"), a = 1, o = i.length;
        o > 40 && (a = Math.ceil(o / 40));
        for (var s = 0; s < o; s += a)
            if (!t.isLabelIgnored(s)) {
                var l = ll(r.getTextRect(i[s]), r.get("rotate") || 0);
                e ? e.union(l) : e = l
            }
        return e
    }
    function ul(t, e, n) {
        this._coordsMap = {},
        this._coordsList = [],
        this._axesMap = {},
        this._axesList = [],
        this._initCartesian(t, e, n),
        this.model = t
    }
    function cl(t, e, n) {
        var i = t[e];
        if (n.onZero) {
            var r = n.onZeroAxisIndex;
            if (null == r) {
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var o = i[a];
                        if (o && !fl(o)) {
                            r = +a;
                            break
                        }
                    }
                null == r && (n.onZero = !1),
                n.onZeroAxisIndex = r
            } else
                (o = i[r]) && fl(o) && (n.onZero = !1)
        }
    }
    function fl(t) {
        return "category" === t.type || "time" === t.type || !Ng(t)
    }
    function dl(t, e) {
        var n = t.getExtent()
          , i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function(t) {
            return t + e
        }
        : function(t) {
            return i - t + e
        }
        ,
        t.toLocalCoord = "x" === t.dim ? function(t) {
            return t - e
        }
        : function(t) {
            return i - t + e
        }
    }
    function pl(t, e) {
        return d(Fg, function(e) {
            return t.getReferringComponents(e)[0]
        })
    }
    function gl(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }
    function ml(t) {
        var e = {
            componentType: t.mainType
        };
        return e[t.mainType + "Index"] = t.componentIndex,
        e
    }
    function vl(t, e, n, i) {
        var r, a, o = or(n - t.rotation), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return sr(o - Vg / 2) ? (a = l ? "bottom" : "top",
        r = "center") : sr(o - 1.5 * Vg) ? (a = l ? "top" : "bottom",
        r = "center") : (a = "middle",
        r = o < 1.5 * Vg && o > Vg / 2 ? l ? "left" : "right" : l ? "right" : "left"),
        {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }
    function yl(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }
    function _l(t, e, n) {
        var i = t.get("axisLabel.showMinLabel")
          , r = t.get("axisLabel.showMaxLabel");
        e = e || [],
        n = n || [];
        var a = e[0]
          , o = e[1]
          , s = e[e.length - 1]
          , l = e[e.length - 2]
          , h = n[0]
          , u = n[1]
          , c = n[n.length - 1]
          , f = n[n.length - 2];
        !1 === i ? (xl(a),
        xl(h)) : wl(a, o) && (i ? (xl(o),
        xl(u)) : (xl(a),
        xl(h))),
        !1 === r ? (xl(s),
        xl(c)) : wl(l, s) && (r ? (xl(l),
        xl(f)) : (xl(s),
        xl(c)))
    }
    function xl(t) {
        t && (t.ignore = !0)
    }
    function wl(t, e, n) {
        var i = t && t.getBoundingRect().clone()
          , r = e && e.getBoundingRect().clone();
        if (i && r) {
            var a = nt([]);
            return ot(a, a, -t.rotation),
            i.applyTransform(rt([], a, t.getLocalTransform())),
            r.applyTransform(rt([], a, e.getLocalTransform())),
            i.intersect(r)
        }
    }
    function bl(t) {
        return "middle" === t || "center" === t
    }
    function Sl(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), s = r.get("length"), l = Xg(r, n.labelInterval), h = i.getTicksCoords(r.get("alignWithLabel")), u = i.scale.getTicks(), c = e.get("axisLabel.showMinLabel"), f = e.get("axisLabel.showMaxLabel"), d = [], p = [], g = t._transform, m = [], v = h.length, y = 0; y < v; y++)
                if (!qg(i, y, l, v, c, f)) {
                    var _ = h[y];
                    d[0] = _,
                    d[1] = 0,
                    p[0] = _,
                    p[1] = n.tickDirection * s,
                    g && (Y(d, d, g),
                    Y(p, p, g));
                    var x = new ef(xi({
                        anid: "tick_" + u[y],
                        shape: {
                            x1: d[0],
                            y1: d[1],
                            x2: p[0],
                            y2: p[1]
                        },
                        style: o(a.getLineStyle(), {
                            stroke: e.get("axisLine.lineStyle.color")
                        }),
                        z2: 2,
                        silent: !0
                    }));
                    t.group.add(x),
                    m.push(x)
                }
            return m
        }
    }
    function Ml(t, e, n) {
        var i = e.axis;
        if (T(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
            var r = e.getModel("axisLabel")
              , a = r.get("margin")
              , o = i.scale.getTicks()
              , s = e.getFormattedLabels()
              , l = (T(n.labelRotate, r.get("rotate")) || 0) * Vg / 180
              , h = Gg(n.rotation, l, n.labelDirection)
              , u = e.getCategories()
              , c = []
              , d = yl(e)
              , p = e.get("triggerEvent")
              , g = e.get("axisLabel.showMinLabel")
              , m = e.get("axisLabel.showMaxLabel");
            return f(o, function(l, f) {
                if (!qg(i, f, n.labelInterval, o.length, g, m)) {
                    var v = r;
                    u && u[l] && u[l].textStyle && (v = new ji(u[l].textStyle,r,e.ecModel));
                    var y = v.getTextColor() || e.get("axisLine.lineStyle.color")
                      , _ = [i.dataToCoord(l), n.labelOffset + n.labelDirection * a]
                      , x = i.scale.getLabel(l)
                      , w = new qc({
                        anid: "label_" + l,
                        position: _,
                        rotation: h.rotation,
                        silent: d,
                        z2: 10
                    });
                    Ni(w.style, v, {
                        text: s[f],
                        textAlign: v.getShallow("align", !0) || h.textAlign,
                        textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
                        textFill: "function" == typeof y ? y("category" === i.type ? x : "value" === i.type ? l + "" : l, f) : y
                    }),
                    p && (w.eventData = ml(e),
                    w.eventData.targetType = "axisLabel",
                    w.eventData.value = x),
                    t._dumbGroup.add(w),
                    w.updateTransform(),
                    c.push(w),
                    t.group.add(w),
                    w.decomposeTransform()
                }
            }),
            c
        }
    }
    function Il(t) {
        var e = Tl(t);
        if (e) {
            var n = e.axisPointerModel
              , i = e.axis.scale
              , r = n.option
              , a = n.get("status")
              , o = n.get("value");
            null != o && (o = i.parse(o));
            var s = Dl(n);
            null == a && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(),
            (null == o || o > l[1]) && (o = l[1]),
            o < l[0] && (o = l[0]),
            r.value = o,
            s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }
    function Tl(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[kl(t)]
    }
    function Cl(t) {
        var e = Tl(t);
        return e && e.axisPointerModel
    }
    function Dl(t) {
        return !!t.get("handle.show")
    }
    function kl(t) {
        return t.type + "||" + t.id
    }
    function Al(t, e, n, i, r, a) {
        var o = Ug.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = Cl(e);
            s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : Ll(t, i)
        }
    }
    function Ll(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n),
        t._axisPointer = null
    }
    function Pl(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem
          , r = e.axis
          , a = {}
          , o = r.position
          , s = r.onZero ? "onZero" : o
          , l = r.dim
          , h = i.getRect()
          , u = [h.x, h.x + h.width, h.y, h.y + h.height]
          , c = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
        }
          , f = e.get("offset") || 0
          , d = "x" === l ? [u[2] - f, u[3] + f] : [u[0] - f, u[1] + f];
        if (r.onZero) {
            var p = i.getAxis("x" === l ? "y" : "x", r.onZeroAxisIndex)
              , g = p.toGlobalCoord(p.dataToCoord(0));
            d[c.onZero] = Math.max(Math.min(g, d[1]), d[0])
        }
        a.position = ["y" === l ? d[c[s]] : u[0], "x" === l ? d[c[s]] : u[3]],
        a.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
        var m = {
            top: -1,
            bottom: 1,
            left: -1,
            right: 1
        };
        a.labelDirection = a.tickDirection = a.nameDirection = m[o],
        a.labelOffset = r.onZero ? d[c[o]] - d[c.onZero] : 0,
        e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection),
        T(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var v = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === s ? -v : v,
        a.labelInterval = r.getLabelInterval(),
        a.z2 = 1,
        a
    }
    function Ol(t, e, n, i, r, a, o) {
        Bi(t, e, n.getModel("label"), n.getModel("emphasis.label"), {
            labelFetcher: r,
            labelDataIndex: a,
            defaultText: hs(r.getData(), a),
            isRectText: !0,
            autoColor: i
        }),
        El(t),
        El(e)
    }
    function El(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }
    function Bl(t, e, n) {
        n.style.text = null,
        Xi(n, {
            shape: {
                width: 0
            }
        }, e, t, function() {
            n.parent && n.parent.remove(n)
        })
    }
    function Nl(t, e, n) {
        n.style.text = null,
        Xi(n, {
            shape: {
                r: n.shape.r0
            }
        }, e, t, function() {
            n.parent && n.parent.remove(n)
        })
    }
    function Rl(t, e, n, i, r, a, s, l) {
        var h = e.getItemVisual(n, "color")
          , u = e.getItemVisual(n, "opacity")
          , c = i.getModel("itemStyle")
          , f = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0),
        t.useStyle(o({
            fill: h,
            opacity: u
        }, c.getBarItemStyle()));
        var d = i.getShallow("cursor");
        d && t.attr("cursor", d);
        var p = s ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || Ol(t.style, f, i, h, a, n, p),
        Ei(t, f)
    }
    function zl(t, e) {
        var n = t.get(em) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
    }
    function Fl(t, e, n, i) {
        var r = e.getData()
          , a = this.dataIndex
          , o = r.getName(a)
          , s = e.get("selectedOffset");
        i.dispatchAction({
            type: "pieToggleSelect",
            from: t,
            name: o,
            seriesId: e.id
        }),
        r.each(function(t) {
            Vl(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
        })
    }
    function Vl(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2
          , o = Math.cos(a)
          , s = Math.sin(a)
          , l = n ? i : 0
          , h = [o * l, s * l];
        r ? t.animate().when(200, {
            position: h
        }).start("bounceOut") : t.attr("position", h)
    }
    function Wl(t, e) {
        function n() {
            a.ignore = a.hoverIgnore,
            o.ignore = o.hoverIgnore
        }
        function i() {
            a.ignore = a.normalIgnore,
            o.ignore = o.normalIgnore
        }
        Wh.call(this);
        var r = new Zc({
            z2: 2
        })
          , a = new Jc
          , o = new qc;
        this.add(r),
        this.add(a),
        this.add(o),
        this.updateData(t, e, !0),
        this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }
    function Hl(t, e, n, i, r, a, o) {
        function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n,
            !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--)
                ;
        }
        function l(t, e, n, i, r, a) {
            for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)
                if ("center" !== t[s].position) {
                    var h = Math.abs(t[s].y - i)
                      , u = t[s].len
                      , c = t[s].len2
                      , f = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
                    e && f >= o && (f = o - 10),
                    !e && f <= o && (f = o + 10),
                    t[s].x = n + f * a,
                    o = f
                }
        }
        t.sort(function(t, e) {
            return t.y - e.y
        });
        for (var h, u = 0, c = t.length, f = [], d = [], p = 0; p < c; p++)
            (h = t[p].y - u) < 0 && function(e, n, i, r) {
                for (var a = e; a < n; a++)
                    if (t[a].y += i,
                    a > e && a + 1 < n && t[a + 1].y > t[a].y + t[a].height)
                        return void s(a, i / 2);
                s(n - 1, i / 2)
            }(p, c, -h),
            u = t[p].y + t[p].height;
        o - u < 0 && s(c - 1, u - o);
        for (p = 0; p < c; p++)
            t[p].y >= n ? d.push(t[p]) : f.push(t[p]);
        l(f, !1, e, n, i, r),
        l(d, !0, e, n, i, r)
    }
    function Gl(t, e, n, i, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++)
            t[l].x < e ? o.push(t[l]) : s.push(t[l]);
        Hl(s, e, n, i, 1, r, a),
        Hl(o, e, n, i, -1, r, a);
        for (l = 0; l < t.length; l++) {
            var h = t[l].linePoints;
            if (h) {
                var u = h[1][0] - h[2][0];
                t[l].x < e ? h[2][0] = t[l].x + 3 : h[2][0] = t[l].x - 3,
                h[1][1] = h[2][1] = t[l].y,
                h[1][0] = h[2][0] + u
            }
        }
    }
    var ql = 2311
      , Xl = function() {
        return ql++
    }
      , Ul = {}
      , Yl = Ul = "undefined" != typeof wx ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0
    } : function(t) {
        var e = {}
          , n = {}
          , i = t.match(/Firefox\/([\d.]+)/)
          , r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/)
          , a = t.match(/Edge\/([\d.]+)/)
          , o = /micromessenger/i.test(t);
        return i && (n.firefox = !0,
        n.version = i[1]),
        r && (n.ie = !0,
        n.version = r[1]),
        a && (n.edge = !0,
        n.version = a[1]),
        o && (n.weChat = !0),
        {
            browser: n,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart"in window && !n.ie && !n.edge,
            pointerEventsSupported: "onpointerdown"in window && (n.edge || n.ie && n.version >= 11)
        }
    }(navigator.userAgent)
      , Zl = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
    }
      , jl = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
    }
      , $l = Object.prototype.toString
      , Kl = Array.prototype
      , Ql = Kl.forEach
      , Jl = Kl.filter
      , th = Kl.slice
      , eh = Kl.map
      , nh = Kl.reduce
      , ih = {}
      , rh = function() {
        return ih.createCanvas()
    };
    ih.createCanvas = function() {
        return document.createElement("canvas")
    }
    ;
    var ah, oh = "__ec_primitive__";
    B.prototype = {
        constructor: B,
        get: function(t) {
            return this.hasOwnProperty(t) ? this[t] : null
        },
        set: function(t, e) {
            return this[t] = e
        },
        each: function(t, e) {
            void 0 !== e && (t = m(t, e));
            for (var n in this)
                this.hasOwnProperty(n) && t(this[n], n)
        },
        removeKey: function(t) {
            delete this[t]
        }
    };
    var sh = "undefined" == typeof Float32Array ? Array : Float32Array
      , lh = U
      , hh = function(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    };
    $.prototype = {
        constructor: $,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e,
            e.dragging = !0,
            this._x = t.offsetX,
            this._y = t.offsetY,
            this.dispatchToElement(K(e, t), "dragstart", t.event))
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX
                  , i = t.offsetY
                  , r = n - this._x
                  , a = i - this._y;
                this._x = n,
                this._y = i,
                e.drift(r, a, t),
                this.dispatchToElement(K(e, t), "drag", t.event);
                var o = this.findHover(n, i, e).target
                  , s = this._dropTarget;
                this._dropTarget = o,
                e !== o && (s && o !== s && this.dispatchToElement(K(s, t), "dragleave", t.event),
                o && o !== s && this.dispatchToElement(K(o, t), "dragenter", t.event))
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1),
            this.dispatchToElement(K(e, t), "dragend", t.event),
            this._dropTarget && this.dispatchToElement(K(this._dropTarget, t), "drop", t.event),
            this._draggingTarget = null,
            this._dropTarget = null
        }
    };
    var uh = Array.prototype.slice
      , ch = function() {
        this._$handlers = {}
    };
    ch.prototype = {
        constructor: ch,
        one: function(t, e, n) {
            var i = this._$handlers;
            if (!e || !t)
                return this;
            i[t] || (i[t] = []);
            for (var r = 0; r < i[t].length; r++)
                if (i[t][r].h === e)
                    return this;
            return i[t].push({
                h: e,
                one: !0,
                ctx: n || this
            }),
            this
        },
        on: function(t, e, n) {
            var i = this._$handlers;
            if (!e || !t)
                return this;
            i[t] || (i[t] = []);
            for (var r = 0; r < i[t].length; r++)
                if (i[t][r].h === e)
                    return this;
            return i[t].push({
                h: e,
                one: !1,
                ctx: n || this
            }),
            this
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        },
        off: function(t, e) {
            var n = this._$handlers;
            if (!t)
                return this._$handlers = {},
                this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; r < a; r++)
                        n[t][r].h != e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else
                delete n[t];
            return this
        },
        trigger: function(t) {
            if (this._$handlers[t]) {
                var e = arguments
                  , n = e.length;
                n > 3 && (e = uh.call(e, 1));
                for (var i = this._$handlers[t], r = i.length, a = 0; a < r; ) {
                    switch (n) {
                    case 1:
                        i[a].h.call(i[a].ctx);
                        break;
                    case 2:
                        i[a].h.call(i[a].ctx, e[1]);
                        break;
                    case 3:
                        i[a].h.call(i[a].ctx, e[1], e[2]);
                        break;
                    default:
                        i[a].h.apply(i[a].ctx, e)
                    }
                    i[a].one ? (i.splice(a, 1),
                    r--) : a++
                }
            }
            return this
        },
        triggerWithContext: function(t) {
            if (this._$handlers[t]) {
                var e = arguments
                  , n = e.length;
                n > 4 && (e = uh.call(e, 1, e.length - 1));
                for (var i = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; o < a; ) {
                    switch (n) {
                    case 1:
                        r[o].h.call(i);
                        break;
                    case 2:
                        r[o].h.call(i, e[1]);
                        break;
                    case 3:
                        r[o].h.call(i, e[1], e[2]);
                        break;
                    default:
                        r[o].h.apply(i, e)
                    }
                    r[o].one ? (r.splice(o, 1),
                    a--) : o++
                }
            }
            return this
        }
    };
    var fh = "silent";
    J.prototype.dispose = function() {}
    ;
    var dh = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"]
      , ph = function(t, e, n, i) {
        ch.call(this),
        this.storage = t,
        this.painter = e,
        this.painterRoot = i,
        n = n || new J,
        this.proxy = null,
        this._hovered = {},
        this._lastTouchMoment,
        this._lastX,
        this._lastY,
        $.call(this),
        this.setHandlerProxy(n)
    };
    ph.prototype = {
        constructor: ph,
        setHandlerProxy: function(t) {
            this.proxy && this.proxy.dispose(),
            t && (f(dh, function(e) {
                t.on && t.on(e, this[e], this)
            }, this),
            t.handler = this),
            this.proxy = t
        },
        mousemove: function(t) {
            var e = t.zrX
              , n = t.zrY
              , i = this._hovered
              , r = i.target;
            r && !r.__zr && (r = (i = this.findHover(i.x, i.y)).target);
            var a = this._hovered = this.findHover(e, n)
              , o = a.target
              , s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"),
            r && o !== r && this.dispatchToElement(i, "mouseout", t),
            this.dispatchToElement(a, "mousemove", t),
            o && o !== r && this.dispatchToElement(a, "mouseover", t)
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
                n = n && n.parentNode
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));!e && this.trigger("globalout", {
                event: t
            })
        },
        resize: function(t) {
            this._hovered = {}
        },
        dispatch: function(t, e) {
            var n = this[t];
            n && n.call(this, e)
        },
        dispose: function() {
            this.proxy.dispose(),
            this.storage = this.proxy = this.painter = null
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        },
        dispatchToElement: function(t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, a = Q(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)),
                i.trigger(e, a),
                i = i.parent,
                !a.cancelBubble); )
                    ;
                a.cancelBubble || (this.trigger(e, a),
                this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[r] && t[r].call(t, a),
                    t.trigger && t.trigger(e, a)
                }))
            }
        },
        findHover: function(t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {
                x: t,
                y: e
            }, a = i.length - 1; a >= 0; a--) {
                var o;
                if (i[a] !== n && !i[a].ignore && (o = tt(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]),
                o !== fh)) {
                    r.target = i[a];
                    break
                }
            }
            return r
        }
    },
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
        ph.prototype[t] = function(e) {
            var n = this.findHover(e.zrX, e.zrY)
              , i = n.target;
            if ("mousedown" === t)
                this._downEl = i,
                this._downPoint = [e.zrX, e.zrY],
                this._upEl = i;
            else if ("mouseup" === t)
                this._upEl = i;
            else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || lh(this._downPoint, [e.zrX, e.zrY]) > 4)
                    return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }),
    u(ph, ch),
    u(ph, $);
    var gh = "undefined" == typeof Float32Array ? Array : Float32Array
      , mh = nt
      , vh = 5e-5
      , yh = function(t) {
        (t = t || {}).position || (this.position = [0, 0]),
        null == t.rotation && (this.rotation = 0),
        t.scale || (this.scale = [1, 1]),
        this.origin = this.origin || null
    }
      , _h = yh.prototype;
    _h.transform = null,
    _h.needLocalTransform = function() {
        return ht(this.rotation) || ht(this.position[0]) || ht(this.position[1]) || ht(this.scale[0] - 1) || ht(this.scale[1] - 1)
    }
    ,
    _h.updateTransform = function() {
        var t = this.parent
          , e = t && t.transform
          , n = this.needLocalTransform()
          , i = this.transform;
        n || e ? (i = i || et(),
        n ? this.getLocalTransform(i) : mh(i),
        e && (n ? rt(i, t.transform, i) : it(i, t.transform)),
        this.transform = i,
        this.invTransform = this.invTransform || et(),
        lt(this.invTransform, i)) : i && mh(i)
    }
    ,
    _h.getLocalTransform = function(t) {
        return yh.getLocalTransform(this, t)
    }
    ,
    _h.setTransform = function(t) {
        var e = this.transform
          , n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }
    ,
    _h.restoreTransform = function(t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    }
    ;
    var xh = [];
    _h.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent
              , e = this.transform;
            t && t.transform && (rt(xh, t.invTransform, e),
            e = xh);
            var n = e[0] * e[0] + e[1] * e[1]
              , i = e[2] * e[2] + e[3] * e[3]
              , r = this.position
              , a = this.scale;
            ht(n - 1) && (n = Math.sqrt(n)),
            ht(i - 1) && (i = Math.sqrt(i)),
            e[0] < 0 && (n = -n),
            e[3] < 0 && (i = -i),
            r[0] = e[4],
            r[1] = e[5],
            a[0] = n,
            a[1] = i,
            this.rotation = Math.atan2(-e[1] / i, e[0] / n)
        }
    }
    ,
    _h.getGlobalScale = function() {
        var t = this.transform;
        if (!t)
            return [1, 1];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1])
          , n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e),
        t[3] < 0 && (n = -n),
        [e, n]
    }
    ,
    _h.transformCoordToLocal = function(t, e) {
        var n = [t, e]
          , i = this.invTransform;
        return i && Y(n, n, i),
        n
    }
    ,
    _h.transformCoordToGlobal = function(t, e) {
        var n = [t, e]
          , i = this.transform;
        return i && Y(n, n, i),
        n
    }
    ,
    yh.getLocalTransform = function(t, e) {
        mh(e = e || []);
        var n = t.origin
          , i = t.scale || [1, 1]
          , r = t.rotation || 0
          , a = t.position || [0, 0];
        return n && (e[4] -= n[0],
        e[5] -= n[1]),
        st(e, e, i),
        r && ot(e, e, r),
        n && (e[4] += n[0],
        e[5] += n[1]),
        e[4] += a[0],
        e[5] += a[1],
        e
    }
    ;
    var wh = {
        linear: function(t) {
            return t
        },
        quadraticIn: function(t) {
            return t * t
        },
        quadraticOut: function(t) {
            return t * (2 - t)
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        },
        cubicIn: function(t) {
            return t * t * t
        },
        cubicOut: function(t) {
            return --t * t * t + 1
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        },
        quarticIn: function(t) {
            return t * t * t * t
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        },
        quinticIn: function(t) {
            return t * t * t * t * t
        },
        quinticOut: function(t) {
            return --t * t * t * t * t + 1
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2)
        },
        sinusoidalInOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t)
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        elasticIn: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1,
            e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI),
            -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
        },
        elasticOut: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1,
            e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI),
            n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
        },
        elasticInOut: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1,
            e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI),
            (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        },
        backOut: function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        },
        bounceIn: function(t) {
            return 1 - wh.bounceOut(1 - t)
        },
        bounceOut: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceInOut: function(t) {
            return t < .5 ? .5 * wh.bounceIn(2 * t) : .5 * wh.bounceOut(2 * t - 1) + .5
        }
    };
    ut.prototype = {
        constructor: ut,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay,
            this._initialized = !0),
            this._paused)
                this._pausedTime += e;
            else {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                if (!(n < 0)) {
                    n = Math.min(n, 1);
                    var i = this.easing
                      , r = "string" == typeof i ? wh[i] : i
                      , a = "function" == typeof r ? r(n) : n;
                    return this.fire("frame", a),
                    1 == n ? this.loop ? (this.restart(t),
                    "restart") : (this._needsRemove = !0,
                    "destroy") : null
                }
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap,
            this._pausedTime = 0,
            this._needsRemove = !1
        },
        fire: function(t, e) {
            this[t = "on" + t] && this[t](this._target, e)
        },
        pause: function() {
            this._paused = !0
        },
        resume: function() {
            this._paused = !1
        }
    };
    var bh = function() {
        this.head = null,
        this.tail = null,
        this._len = 0
    }
      , Sh = bh.prototype;
    Sh.insert = function(t) {
        var e = new Mh(t);
        return this.insertEntry(e),
        e
    }
    ,
    Sh.insertEntry = function(t) {
        this.head ? (this.tail.next = t,
        t.prev = this.tail,
        t.next = null,
        this.tail = t) : this.head = this.tail = t,
        this._len++
    }
    ,
    Sh.remove = function(t) {
        var e = t.prev
          , n = t.next;
        e ? e.next = n : this.head = n,
        n ? n.prev = e : this.tail = e,
        t.next = t.prev = null,
        this._len--
    }
    ,
    Sh.len = function() {
        return this._len
    }
    ,
    Sh.clear = function() {
        this.head = this.tail = null,
        this._len = 0
    }
    ;
    var Mh = function(t) {
        this.value = t,
        this.next,
        this.prev
    }
      , Ih = function(t) {
        this._list = new bh,
        this._map = {},
        this._maxSize = t || 10,
        this._lastRemovedEntry = null
    }
      , Th = Ih.prototype;
    Th.put = function(t, e) {
        var n = this._list
          , i = this._map
          , r = null;
        if (null == i[t]) {
            var a = n.len()
              , o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = n.head;
                n.remove(s),
                delete i[s.key],
                r = s.value,
                this._lastRemovedEntry = s
            }
            o ? o.value = e : o = new Mh(e),
            o.key = t,
            n.insertEntry(o),
            i[t] = o
        }
        return r
    }
    ,
    Th.get = function(t) {
        var e = this._map[t]
          , n = this._list;
        if (null != e)
            return e !== n.tail && (n.remove(e),
            n.insertEntry(e)),
            e.value
    }
    ,
    Th.clear = function() {
        this._list.clear(),
        this._map = {}
    }
    ;
    var Ch = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }
      , Dh = new Ih(20)
      , kh = null
      , Ah = Array.prototype.slice
      , Lh = function(t, e, n, i) {
        this._tracks = {},
        this._target = t,
        this._loop = e || !1,
        this._getter = n || St,
        this._setter = i || Mt,
        this._clipCount = 0,
        this._delay = 0,
        this._doneList = [],
        this._onframeList = [],
        this._clipList = []
    };
    Lh.prototype = {
        when: function(t, e) {
            var n = this._tracks;
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    if (!n[i]) {
                        n[i] = [];
                        var r = this._getter(this._target, i);
                        if (null == r)
                            continue;
                        0 !== t && n[i].push({
                            time: 0,
                            value: Pt(r)
                        })
                    }
                    n[i].push({
                        time: t,
                        value: e[i]
                    })
                }
            return this
        },
        during: function(t) {
            return this._onframeList.push(t),
            this
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++)
                this._clipList[t].pause();
            this._paused = !0
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++)
                this._clipList[t].resume();
            this._paused = !1
        },
        isPaused: function() {
            return !!this._paused
        },
        _doneCallback: function() {
            this._tracks = {},
            this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; n < e; n++)
                t[n].call(this)
        },
        start: function(t, e) {
            var n, i = this, r = 0;
            for (var a in this._tracks)
                if (this._tracks.hasOwnProperty(a)) {
                    var o = Bt(this, t, function() {
                        --r || i._doneCallback()
                    }, this._tracks[a], a, e);
                    o && (this._clipList.push(o),
                    r++,
                    this.animation && this.animation.addClip(o),
                    n = o)
                }
            if (n) {
                var s = n.onframe;
                n.onframe = function(t, e) {
                    s(t, e);
                    for (var n = 0; n < i._onframeList.length; n++)
                        i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(),
            this
        },
        stop: function(t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1),
                n && n.removeClip(r)
            }
            e.length = 0
        },
        delay: function(t) {
            return this._delay = t,
            this
        },
        done: function(t) {
            return t && this._doneList.push(t),
            this
        },
        getClips: function() {
            return this._clipList
        }
    };
    var Ph = 1;
    "undefined" != typeof window && (Ph = Math.max(window.devicePixelRatio || 1, 1));
    var Oh = Ph
      , Eh = function() {}
      , Bh = Eh
      , Nh = function() {
        this.animators = []
    };
    Nh.prototype = {
        constructor: Nh,
        animate: function(t, e) {
            var n, i = !1, r = this, a = this.__zr;
            if (t) {
                var o = t.split(".")
                  , s = r;
                i = "shape" === o[0];
                for (var h = 0, u = o.length; h < u; h++)
                    s && (s = s[o[h]]);
                s && (n = s)
            } else
                n = r;
            if (n) {
                var c = r.animators
                  , f = new Lh(n,e);
                return f.during(function(t) {
                    r.dirty(i)
                }).done(function() {
                    c.splice(l(c, f), 1)
                }),
                c.push(f),
                a && a.animation.addAnimator(f),
                f
            }
            Bh('Property "' + t + '" is not existed in element ' + r.id)
        },
        stopAnimation: function(t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++)
                e[i].stop(t);
            return e.length = 0,
            this
        },
        animateTo: function(t, e, n, i, r, a) {
            x(n) ? (r = i,
            i = n,
            n = 0) : _(i) ? (r = i,
            i = "linear",
            n = 0) : _(n) ? (r = n,
            n = 0) : _(e) ? (r = e,
            e = 500) : e || (e = 500),
            this.stopAnimation(),
            this._animateToShallow("", this, t, e, n);
            var o = this.animators.slice()
              , s = o.length;
            s || r && r();
            for (var l = 0; l < o.length; l++)
                o[l].done(function() {
                    --s || r && r()
                }).start(i, a)
        },
        _animateToShallow: function(t, e, n, i, r) {
            var a = {}
              , o = 0;
            for (var s in n)
                if (n.hasOwnProperty(s))
                    if (null != e[s])
                        w(n[s]) && !c(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s],
                        o++);
                    else if (null != n[s])
                        if (t) {
                            var l = {};
                            l[t] = {},
                            l[t][s] = n[s],
                            this.attr(l)
                        } else
                            this.attr(s, n[s]);
            return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0),
            this
        }
    };
    var Rh = function(t) {
        yh.call(this, t),
        ch.call(this, t),
        Nh.call(this, t),
        this.id = t.id || Xl()
    };
    Rh.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
            switch (this.draggable) {
            case "horizontal":
                e = 0;
                break;
            case "vertical":
                t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
            n[4] += t,
            n[5] += e,
            this.decomposeTransform(),
            this.dirty(!1)
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform()
        },
        traverse: function(t, e) {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []),
                    n[0] = e[0],
                    n[1] = e[1]
                }
            } else
                this[t] = e
        },
        hide: function() {
            this.ignore = !0,
            this.__zr && this.__zr.refresh()
        },
        show: function() {
            this.ignore = !1,
            this.__zr && this.__zr.refresh()
        },
        attr: function(t, e) {
            if ("string" == typeof t)
                this.attrKV(t, e);
            else if (w(t))
                for (var n in t)
                    t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1),
            this
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e),
            this.clipPath && this.clipPath !== t && this.removeClipPath(),
            this.clipPath = t,
            t.__zr = e,
            t.__clipTarget = this,
            this.dirty(!1)
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr),
            t.__zr = null,
            t.__clipTarget = null,
            this.clipPath = null,
            this.dirty(!1))
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e)
                for (var n = 0; n < e.length; n++)
                    t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e)
                for (var n = 0; n < e.length; n++)
                    t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    },
    u(Rh, Nh),
    u(Rh, yh),
    u(Rh, ch);
    var zh = Y
      , Fh = Math.min
      , Vh = Math.max;
    Nt.prototype = {
        constructor: Nt,
        union: function(t) {
            var e = Fh(t.x, this.x)
              , n = Fh(t.y, this.y);
            this.width = Vh(t.x + t.width, this.x + this.width) - e,
            this.height = Vh(t.y + t.height, this.y + this.height) - n,
            this.x = e,
            this.y = n
        },
        applyTransform: function() {
            var t = []
              , e = []
              , n = []
              , i = [];
            return function(r) {
                if (r) {
                    t[0] = n[0] = this.x,
                    t[1] = i[1] = this.y,
                    e[0] = i[0] = this.x + this.width,
                    e[1] = n[1] = this.y + this.height,
                    zh(t, t, r),
                    zh(e, e, r),
                    zh(n, n, r),
                    zh(i, i, r),
                    this.x = Fh(t[0], e[0], n[0], i[0]),
                    this.y = Fh(t[1], e[1], n[1], i[1]);
                    var a = Vh(t[0], e[0], n[0], i[0])
                      , o = Vh(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x,
                    this.height = o - this.y
                }
            }
        }(),
        calculateTransform: function(t) {
            var e = this
              , n = t.width / e.width
              , i = t.height / e.height
              , r = et();
            return at(r, r, [-e.x, -e.y]),
            st(r, r, [n, i]),
            at(r, r, [t.x, t.y]),
            r
        },
        intersect: function(t) {
            if (!t)
                return !1;
            t instanceof Nt || (t = Nt.create(t));
            var e = this
              , n = e.x
              , i = e.x + e.width
              , r = e.y
              , a = e.y + e.height
              , o = t.x
              , s = t.x + t.width
              , l = t.y
              , h = t.y + t.height;
            return !(i < o || s < n || a < l || h < r)
        },
        contain: function(t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        },
        clone: function() {
            return new Nt(this.x,this.y,this.width,this.height)
        },
        copy: function(t) {
            this.x = t.x,
            this.y = t.y,
            this.width = t.width,
            this.height = t.height
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }
    },
    Nt.create = function(t) {
        return new Nt(t.x,t.y,t.width,t.height)
    }
    ;
    var Wh = function(t) {
        t = t || {},
        Rh.call(this, t);
        for (var e in t)
            t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [],
        this.__storage = null,
        this.__dirty = !0
    };
    Wh.prototype = {
        constructor: Wh,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice()
        },
        childAt: function(t) {
            return this._children[t]
        },
        childOfName: function(t) {
            for (var e = this._children, n = 0; n < e.length; n++)
                if (e[n].name === t)
                    return e[n]
        },
        childCount: function() {
            return this._children.length
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t),
            this._doAdd(t)),
            this
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children
                  , i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t),
                this._doAdd(t))
            }
            return this
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t),
            t.parent = this;
            var e = this.__storage
              , n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t),
            t instanceof Wh && t.addChildrenToStorage(e)),
            n && n.refresh()
        },
        remove: function(t) {
            var e = this.__zr
              , n = this.__storage
              , i = this._children
              , r = l(i, t);
            return r < 0 ? this : (i.splice(r, 1),
            t.parent = null,
            n && (n.delFromStorage(t),
            t instanceof Wh && t.delChildrenFromStorage(n)),
            e && e.refresh(),
            this)
        },
        removeAll: function() {
            var t, e, n = this._children, i = this.__storage;
            for (e = 0; e < n.length; e++)
                t = n[e],
                i && (i.delFromStorage(t),
                t instanceof Wh && t.delChildrenFromStorage(i)),
                t.parent = null;
            return n.length = 0,
            this
        },
        eachChild: function(t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        },
        traverse: function(t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i),
                "group" === i.type && i.traverse(t, e)
            }
            return this
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n),
                n instanceof Wh && n.addChildrenToStorage(t)
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n),
                n instanceof Wh && n.delChildrenFromStorage(t)
            }
        },
        dirty: function() {
            return this.__dirty = !0,
            this.__zr && this.__zr.refresh(),
            this
        },
        getBoundingRect: function(t) {
            for (var e = null, n = new Nt(0,0,0,0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
                var o = i[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect()
                      , l = o.getLocalTransform(r);
                    l ? (n.copy(s),
                    n.applyTransform(l),
                    (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s)
                }
            }
            return e || n
        }
    },
    h(Wh, Rh);
    var Hh = 32
      , Gh = 7
      , qh = function() {
        this._roots = [],
        this._displayList = [],
        this._displayListLen = 0
    };
    qh.prototype = {
        constructor: qh,
        traverse: function(t, e) {
            for (var n = 0; n < this._roots.length; n++)
                this._roots[n].traverse(t, e)
        },
        getDisplayList: function(t, e) {
            return e = e || !1,
            t && this.updateDisplayList(e),
            this._displayList
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++)
                this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen,
            Yl.canvasSupported && qt(n, Xt)
        },
        _updateAndAddDisplayable: function(t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(),
                t.__dirty && t.update(),
                t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, a = t; r; )
                        r.parent = a,
                        r.updateTransform(),
                        e.push(r),
                        a = r,
                        r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0),
                        this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else
                    t.__clipPaths = e,
                    this._displayList[this._displayListLen++] = t
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof Wh && t.addChildrenToStorage(this),
            this.addToStorage(t),
            this._roots.push(t))
        },
        delRoot: function(t) {
            if (null == t) {
                for (n = 0; n < this._roots.length; n++) {
                    var e = this._roots[n];
                    e instanceof Wh && e.delChildrenFromStorage(this)
                }
                return this._roots = [],
                this._displayList = [],
                void (this._displayListLen = 0)
            }
            if (t instanceof Array)
                for (var n = 0, i = t.length; n < i; n++)
                    this.delRoot(t[n]);
            else {
                var r = l(this._roots, t);
                r >= 0 && (this.delFromStorage(t),
                this._roots.splice(r, 1),
                t instanceof Wh && t.delChildrenFromStorage(this))
            }
        },
        addToStorage: function(t) {
            return t && (t.__storage = this,
            t.dirty(!1)),
            this
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null),
            this
        },
        dispose: function() {
            this._renderList = this._roots = null
        },
        displayableSortFunc: Xt
    };
    var Xh = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1
    }
      , Uh = function(t, e, n) {
        return Xh.hasOwnProperty(e) ? n *= t.dpr : n
    }
      , Yh = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]]
      , Zh = function(t, e) {
        this.extendFrom(t, !1),
        this.host = e
    };
    Zh.prototype = {
        constructor: Zh,
        host: null,
        fill: "#000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, n) {
            for (var i = this, r = n && n.style, a = !r, o = 0; o < Yh.length; o++) {
                var s = Yh[o]
                  , l = s[0];
                (a || i[l] !== r[l]) && (t[l] = Uh(t, l, i[l] || s[1]))
            }
            if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill),
            (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke),
            (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity),
            (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"),
            this.hasStroke()) {
                var h = i.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function(t, e) {
            if (t)
                for (var n in t)
                    !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function() {
            var t = new this.constructor;
            return t.extendFrom(this, !0),
            t
        },
        getGradient: function(t, e, n) {
            for (var i = ("radial" === e.type ? Yt : Ut)(t, e, n), r = e.colorStops, a = 0; a < r.length; a++)
                i.addColorStop(r[a].offset, r[a].color);
            return i
        }
    };
    for (var jh = Zh.prototype, $h = 0; $h < Yh.length; $h++) {
        var Kh = Yh[$h];
        Kh[0]in jh || (jh[Kh[0]] = Kh[1])
    }
    Zh.getGradient = jh.getGradient;
    var Qh = function(t, e) {
        this.image = t,
        this.repeat = e,
        this.type = "pattern"
    };
    Qh.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    }
    ;
    var Jh = function(t, e, n) {
        var i;
        n = n || Oh,
        "string" == typeof t ? i = jt(t, e, n) : w(t) && (t = (i = t).id),
        this.id = t,
        this.dom = i;
        var r = i.style;
        r && (i.onselectstart = Zt,
        r["-webkit-user-select"] = "none",
        r["user-select"] = "none",
        r["-webkit-touch-callout"] = "none",
        r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)",
        r.padding = 0,
        r.margin = 0,
        r["border-width"] = 0),
        this.domBack = null,
        this.ctxBack = null,
        this.painter = e,
        this.config = null,
        this.clearColor = 0,
        this.motionBlur = !1,
        this.lastFrameAlpha = .7,
        this.dpr = n
    };
    Jh.prototype = {
        constructor: Jh,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
            return this.__endIndex - this.__startIndex
        },
        initContext: function() {
            this.ctx = this.dom.getContext("2d"),
            this.ctx.dpr = this.dpr
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = jt("back-" + this.id, this.painter, t),
            this.ctxBack = this.domBack.getContext("2d"),
            1 != t && this.ctxBack.scale(t, t)
        },
        resize: function(t, e) {
            var n = this.dpr
              , i = this.dom
              , r = i.style
              , a = this.domBack;
            r && (r.width = t + "px",
            r.height = e + "px"),
            i.width = t * n,
            i.height = e * n,
            a && (a.width = t * n,
            a.height = e * n,
            1 != n && this.ctxBack.scale(n, n))
        },
        clear: function(t, e) {
            var n = this.dom
              , i = this.ctx
              , r = n.width
              , a = n.height
              , e = e || this.clearColor
              , o = this.motionBlur && !t
              , s = this.lastFrameAlpha
              , l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(),
            this.ctxBack.globalCompositeOperation = "copy",
            this.ctxBack.drawImage(n, 0, 0, r / l, a / l)),
            i.clearRect(0, 0, r, a),
            e && "transparent" !== e) {
                var h;
                e.colorStops ? (h = e.__canvasGradient || Zh.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }),
                e.__canvasGradient = h) : e.image && (h = Qh.prototype.getCanvasPattern.call(e, i)),
                i.save(),
                i.fillStyle = h || e,
                i.fillRect(0, 0, r, a),
                i.restore()
            }
            if (o) {
                var u = this.domBack;
                i.save(),
                i.globalAlpha = s,
                i.drawImage(u, 0, 0, r, a),
                i.restore()
            }
        }
    };
    var tu = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        setTimeout(t, 16)
    }
      , eu = new Ih(50)
      , nu = {}
      , iu = 0
      , ru = 5e3
      , au = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g
      , ou = "12px sans-serif"
      , su = {};
    su.measureText = function(t, e) {
        var n = s();
        return n.font = e || ou,
        n.measureText(t)
    }
    ;
    var lu = {
        left: 1,
        right: 1,
        center: 1
    }
      , hu = {
        top: 1,
        bottom: 1,
        middle: 1
    }
      , uu = new Nt
      , cu = function() {};
    cu.prototype = {
        constructor: cu,
        drawRectText: function(t, e) {
            var n = this.style;
            e = n.textRect || e,
            this.__dirty && ye(n);
            var i = n.text;
            if (null != i && (i += ""),
            Be(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (uu.copy(e),
                uu.applyTransform(r),
                e = uu),
                xe(this, t, i, n, e),
                t.restore()
            }
        }
    },
    Ne.prototype = {
        constructor: Ne,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        inplace: !1,
        beforeBrush: function(t) {},
        afterBrush: function(t) {},
        brush: function(t, e) {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e)
        },
        traverse: function(t, e) {
            t.call(e, this)
        },
        rectContain: function(t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1])
        },
        dirty: function() {
            this.__dirty = !0,
            this._rect = null,
            this.__zr && this.__zr.refresh()
        },
        animateStyle: function(t) {
            return this.animate("style", t)
        },
        attrKV: function(t, e) {
            "style" !== t ? Rh.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function(t, e) {
            return this.style.set(t, e),
            this.dirty(!1),
            this
        },
        useStyle: function(t) {
            return this.style = new Zh(t,this),
            this.dirty(!1),
            this
        }
    },
    h(Ne, Rh),
    u(Ne, cu),
    Re.prototype = {
        constructor: Re,
        type: "image",
        brush: function(t, e) {
            var n = this.style
              , i = n.image;
            n.bind(t, this, e);
            var r = this._image = Kt(i, this._image, this, this.onload);
            if (r && Jt(r)) {
                var a = n.x || 0
                  , o = n.y || 0
                  , s = n.width
                  , l = n.height
                  , h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width,
                l = r.height),
                this.setTransform(t),
                n.sWidth && n.sHeight) {
                    var u = n.sx || 0
                      , c = n.sy || 0;
                    t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l)
                } else if (n.sx && n.sy) {
                    var f = s - (u = n.sx)
                      , d = l - (c = n.sy);
                    t.drawImage(r, u, c, f, d, a, o, s, l)
                } else
                    t.drawImage(r, a, o, s, l);
                null != n.text && (this.restoreTransform(t),
                this.drawRectText(t, this.getBoundingRect()))
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new Nt(t.x || 0,t.y || 0,t.width || 0,t.height || 0)),
            this._rect
        }
    },
    h(Re, Ne);
    var fu = new Nt(0,0,0,0)
      , du = new Nt(0,0,0,0)
      , pu = function(t, e, n) {
        this.type = "canvas";
        var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = n = a({}, n || {}),
        this.dpr = n.devicePixelRatio || Oh,
        this._singleCanvas = i,
        this.root = t;
        var r = t.style;
        r && (r["-webkit-tap-highlight-color"] = "transparent",
        r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none",
        t.innerHTML = ""),
        this.storage = e;
        var o = this._zlevelList = []
          , s = this._layers = {};
        if (this._layerConfig = {},
        this._needsManuallyCompositing = !1,
        i) {
            var l = t.width
              , h = t.height;
            null != n.width && (l = n.width),
            null != n.height && (h = n.height),
            this.dpr = n.devicePixelRatio || 1,
            t.width = l * this.dpr,
            t.height = h * this.dpr,
            this._width = l,
            this._height = h;
            var u = new Jh(t,this,this.dpr);
            u.__builtin__ = !0,
            u.initContext(),
            s[314159] = u,
            o.push(314159),
            this._domRoot = t
        } else {
            this._width = this._getSize(0),
            this._height = this._getSize(1);
            var c = this._domRoot = Ge(this._width, this._height);
            t.appendChild(c)
        }
        this._hoverlayer = null,
        this._hoverElements = []
    };
    pu.prototype = {
        constructor: pu,
        getType: function() {
            return "canvas"
        },
        isSingleCanvas: function() {
            return this._singleCanvas
        },
        getViewportRoot: function() {
            return this._domRoot
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            if (t)
                return {
                    offsetLeft: t.offsetLeft || 0,
                    offsetTop: t.offsetTop || 0
                }
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0)
              , n = this._zlevelList;
            this._redrawId = Math.random(),
            this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i]
                  , a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === i ? this._backgroundColor : null;
                    a.refresh(o)
                }
            }
            return this.refreshHover(),
            this
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({
                    style: t.style,
                    shape: t.shape
                });
                n.__from = t,
                t.__hoverMir = n,
                n.setStyle(e),
                this._hoverElements.push(n)
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir
              , n = this._hoverElements
              , i = l(n, e);
            i >= 0 && n.splice(i, 1),
            t.__hoverMir = null
        },
        clearHover: function(t) {
            for (var e = this._hoverElements, n = 0; n < e.length; n++) {
                var i = e[n].__from;
                i && (i.__hoverMir = null)
            }
            e.length = 0
        },
        refreshHover: function() {
            var t = this._hoverElements
              , e = t.length
              , n = this._hoverlayer;
            if (n && n.clear(),
            e) {
                qt(t, this.storage.displayableSortFunc),
                n || (n = this._hoverlayer = this.getLayer(1e5));
                var i = {};
                n.ctx.save();
                for (var r = 0; r < e; ) {
                    var a = t[r]
                      , o = a.__from;
                    o && o.__zr ? (r++,
                    o.invisible || (a.transform = o.transform,
                    a.invTransform = o.invTransform,
                    a.__clipPaths = o.__clipPaths,
                    this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1),
                    o.__hoverMir = null,
                    e--)
                }
                n.ctx.restore()
            }
        },
        getHoverLayer: function() {
            return this.getLayer(1e5)
        },
        _paintList: function(t, e, n) {
            if (this._redrawId === n) {
                e = e || !1,
                this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(),
                !i) {
                    var r = this;
                    tu(function() {
                        r._paintList(t, e, n)
                    })
                }
            }
        },
        _compositeManually: function() {
            var t = this.getLayer(314159).ctx
              , e = this._domRoot.width
              , n = this._domRoot.height;
            t.clearRect(0, 0, e, n),
            this.eachBuiltinLayer(function(i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        },
        _doPaintList: function(t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && n.push(s)
            }
            for (var a = !0, o = 0; o < n.length; o++) {
                var s = n[o]
                  , l = s.ctx
                  , h = {};
                l.save();
                var u = e ? s.__startIndex : s.__drawIndex
                  , c = !e && s.incremental && Date.now
                  , d = c && Date.now()
                  , p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex)
                    s.clear(!1, p);
                else if (u === s.__startIndex) {
                    var g = t[u];
                    g.incremental && g.notClear && !e || s.clear(!1, p)
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"),
                u = s.__startIndex);
                for (var m = u; m < s.__endIndex; m++) {
                    var v = t[m];
                    if (this._doPaintEl(v, s, e, h),
                    v.__dirty = !1,
                    c && Date.now() - d > 15)
                        break
                }
                s.__drawIndex = m,
                s.__drawIndex < s.__endIndex && (a = !1),
                h.prevElClipPaths && l.restore(),
                l.restore()
            }
            return Yl.wxa && f(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }),
            a
        },
        _doPaintEl: function(t, e, n, i) {
            var r = e.ctx
              , a = t.transform;
            if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !Ve(t, this._width, this._height))) {
                var o = t.__clipPaths;
                i.prevElClipPaths && !We(o, i.prevElClipPaths) || (i.prevElClipPaths && (e.ctx.restore(),
                i.prevElClipPaths = null,
                i.prevEl = null),
                o && (r.save(),
                He(o, r),
                i.prevElClipPaths = o)),
                t.beforeBrush && t.beforeBrush(r),
                t.brush(r, i.prevEl || null),
                i.prevEl = t,
                t.afterBrush && t.afterBrush(r)
            }
        },
        getLayer: function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
            var n = this._layers[t];
            return n || ((n = new Jh("zr_" + t,this,this.dpr)).zlevel = t,
            n.__builtin__ = !0,
            this._layerConfig[t] && i(n, this._layerConfig[t], !0),
            e && (n.virtual = e),
            this.insertLayer(t, n),
            n.initContext()),
            n
        },
        insertLayer: function(t, e) {
            var n = this._layers
              , i = this._zlevelList
              , r = i.length
              , a = null
              , o = -1
              , s = this._domRoot;
            if (n[t])
                Bh("ZLevel " + t + " has been used already");
            else if (Fe(e)) {
                if (r > 0 && t > i[0]) {
                    for (o = 0; o < r - 1 && !(i[o] < t && i[o + 1] > t); o++)
                        ;
                    a = n[i[o]]
                }
                if (i.splice(o + 1, 0, t),
                n[t] = e,
                !e.virtual)
                    if (a) {
                        var l = a.dom;
                        l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
                    } else
                        s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
            } else
                Bh("Layer of zlevel " + t + " is not valid")
        },
        eachLayer: function(t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++)
                n = r[i],
                t.call(e, this._layers[n], n)
        },
        eachBuiltinLayer: function(t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++)
                i = a[r],
                (n = this._layers[i]).__builtin__ && t.call(e, n, i)
        },
        eachOtherLayer: function(t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++)
                i = a[r],
                (n = this._layers[i]).__builtin__ || t.call(e, n, i)
        },
        getLayers: function() {
            return this._layers
        },
        _updateLayerStatus: function(t) {
            function e(t) {
                n && (n.__endIndex !== t && (n.__dirty = !0),
                n.__endIndex = t)
            }
            if (this.eachBuiltinLayer(function(t, e) {
                t.__dirty = t.__used = !1
            }),
            this._singleCanvas)
                for (r = 1; r < t.length; r++)
                    if ((o = t[r]).zlevel !== t[r - 1].zlevel || o.incremental) {
                        this._needsManuallyCompositing = !0;
                        break
                    }
            for (var n = null, i = 0, r = 0; r < t.length; r++) {
                var a, o = t[r], s = o.zlevel;
                o.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0,
                i = 1) : a = this.getLayer(s + (i > 0 ? .01 : 0), this._needsManuallyCompositing),
                a.__builtin__ || Bh("ZLevel " + s + " has been used by unkown layer " + a.id),
                a !== n && (a.__used = !0,
                a.__startIndex !== r && (a.__dirty = !0),
                a.__startIndex = r,
                a.incremental ? a.__drawIndex = -1 : a.__drawIndex = r,
                e(r),
                n = a),
                o.__dirty && (a.__dirty = !0,
                a.incremental && a.__drawIndex < 0 && (a.__drawIndex = r))
            }
            e(r),
            this.eachBuiltinLayer(function(t, e) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0,
                t.__startIndex = t.__endIndex = t.__drawIndex = 0),
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer),
            this
        },
        _clearLayer: function(t) {
            t.clear()
        },
        setBackgroundColor: function(t) {
            this._backgroundColor = t
        },
        configLayer: function(t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? i(n[t], e, !0) : n[t] = e;
                for (var r = 0; r < this._zlevelList.length; r++) {
                    var a = this._zlevelList[r];
                    a !== t && a !== t + .01 || i(this._layers[a], n[t], !0)
                }
            }
        },
        delLayer: function(t) {
            var e = this._layers
              , n = this._zlevelList
              , i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom),
            delete e[t],
            n.splice(l(n, t), 1))
        },
        resize: function(t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t),
                null != e && (i.height = e),
                t = this._getSize(0),
                e = this._getSize(1),
                n.style.display = "",
                this._width != t || e != this._height) {
                    n.style.width = t + "px",
                    n.style.height = e + "px";
                    for (var r in this._layers)
                        this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function(n) {
                        n.resize(t, e)
                    }),
                    this.refresh(!0)
                }
                this._width = t,
                this._height = e
            } else {
                if (null == t || null == e)
                    return;
                this._width = t,
                this._height = e,
                this.getLayer(314159).resize(t, e)
            }
            return this
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear()
        },
        dispose: function() {
            this.root.innerHTML = "",
            this.root = this.storage = this._domRoot = this._layers = null
        },
        getRenderedCanvas: function(t) {
            if (t = t || {},
            this._singleCanvas && !this._compositeManually)
                return this._layers[314159].dom;
            var e = new Jh("image",this,t.pixelRatio || this.dpr);
            if (e.initContext(),
            e.clear(!1, t.backgroundColor || this._backgroundColor),
            t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width
                  , i = e.dom.height
                  , r = e.ctx;
                this.eachLayer(function(t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(),
                    t.renderToCanvas(e.ctx),
                    e.ctx.restore())
                })
            } else
                for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                    var l = o[s];
                    this._doPaintEl(l, e, !0, a)
                }
            return e.dom
        },
        getWidth: function() {
            return this._width
        },
        getHeight: function() {
            return this._height
        },
        _getSize: function(t) {
            var e = this._opts
              , n = ["width", "height"][t]
              , i = ["clientWidth", "clientHeight"][t]
              , r = ["paddingLeft", "paddingTop"][t]
              , a = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n])
                return parseFloat(e[n]);
            var o = this.root
              , s = document.defaultView.getComputedStyle(o);
            return (o[i] || ze(s[n]) || ze(o.style[n])) - (ze(s[r]) || 0) - (ze(s[a]) || 0) | 0
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas")
              , i = n.getContext("2d")
              , r = t.getBoundingRect()
              , a = t.style
              , o = a.shadowBlur * e
              , s = a.shadowOffsetX * e
              , l = a.shadowOffsetY * e
              , h = a.hasStroke() ? a.lineWidth : 0
              , u = Math.max(h / 2, -s + o)
              , c = Math.max(h / 2, s + o)
              , f = Math.max(h / 2, -l + o)
              , d = Math.max(h / 2, l + o)
              , p = r.width + u + c
              , g = r.height + f + d;
            n.width = p * e,
            n.height = g * e,
            i.scale(e, e),
            i.clearRect(0, 0, p, g),
            i.dpr = e;
            var m = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [u - r.x, f - r.y],
            t.rotation = 0,
            t.scale = [1, 1],
            t.updateTransform(),
            t && t.brush(i);
            var v = new Re({
                style: {
                    x: 0,
                    y: 0,
                    image: n
                }
            });
            return null != m.position && (v.position = t.position = m.position),
            null != m.rotation && (v.rotation = t.rotation = m.rotation),
            null != m.scale && (v.scale = t.scale = m.scale),
            v
        }
    };
    var gu = "undefined" != typeof window && !!window.addEventListener
      , mu = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , vu = function(t) {
        t = t || {},
        this.stage = t.stage || {},
        this.onframe = t.onframe || function() {}
        ,
        this._clips = [],
        this._running = !1,
        this._time,
        this._pausedTime,
        this._pauseStart,
        this._paused = !1,
        ch.call(this)
    };
    vu.prototype = {
        constructor: vu,
        addClip: function(t) {
            this._clips.push(t)
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++)
                this.addClip(e[n])
        },
        removeClip: function(t) {
            var e = l(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++)
                this.removeClip(e[n]);
            t.animation = null
        },
        _update: function() {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; o < i; o++) {
                var s = n[o]
                  , l = s.step(t, e);
                l && (r.push(l),
                a.push(s))
            }
            for (o = 0; o < i; )
                n[o]._needsRemove ? (n[o] = n[i - 1],
                n.pop(),
                i--) : o++;
            i = r.length;
            for (o = 0; o < i; o++)
                a[o].fire(r[o]);
            this._time = t,
            this.onframe(e),
            this.trigger("frame", e),
            this.stage.update && this.stage.update()
        },
        _startLoop: function() {
            function t() {
                e._running && (tu(t),
                !e._paused && e._update())
            }
            var e = this;
            this._running = !0,
            tu(t)
        },
        start: function() {
            this._time = (new Date).getTime(),
            this._pausedTime = 0,
            this._startLoop()
        },
        stop: function() {
            this._running = !1
        },
        pause: function() {
            this._paused || (this._pauseStart = (new Date).getTime(),
            this._paused = !0)
        },
        resume: function() {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart,
            this._paused = !1)
        },
        clear: function() {
            this._clips = []
        },
        isFinished: function() {
            return !this._clips.length
        },
        animate: function(t, e) {
            var n = new Lh(t,(e = e || {}).loop,e.getter,e.setter);
            return this.addAnimator(n),
            n
        }
    },
    u(vu, ch);
    var yu = function() {
        this._track = []
    };
    yu.prototype = {
        constructor: yu,
        recognize: function(t, e, n) {
            return this._doTrack(t, e, n),
            this._recognize(t)
        },
        clear: function() {
            return this._track.length = 0,
            this
        },
        _doTrack: function(t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, a = 0, o = i.length; a < o; a++) {
                    var s = i[a]
                      , l = Xe(n, s, {});
                    r.points.push([l.zrX, l.zrY]),
                    r.touches.push(s)
                }
                this._track.push(r)
            }
        },
        _recognize: function(t) {
            for (var e in _u)
                if (_u.hasOwnProperty(e)) {
                    var n = _u[e](this._track, t);
                    if (n)
                        return n
                }
        }
    };
    var _u = {
        pinch: function(t, e) {
            var n = t.length;
            if (n) {
                var i = (t[n - 1] || {}).points
                  , r = (t[n - 2] || {}).points || i;
                if (r && r.length > 1 && i && i.length > 1) {
                    var a = $e(i) / $e(r);
                    !isFinite(a) && (a = 1),
                    e.pinchScale = a;
                    var o = Ke(i);
                    return e.pinchX = o[0],
                    e.pinchY = o[1],
                    {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    }
                }
            }
        }
    }
      , xu = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"]
      , wu = ["touchstart", "touchend", "touchmove"]
      , bu = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
    }
      , Su = d(xu, function(t) {
        var e = t.replace("mouse", "pointer");
        return bu[e] ? e : t
    })
      , Mu = {
        mousemove: function(t) {
            t = Ye(this.dom, t),
            this.trigger("mousemove", t)
        },
        mouseout: function(t) {
            var e = (t = Ye(this.dom, t)).toElement || t.relatedTarget;
            if (e != this.dom)
                for (; e && 9 != e.nodeType; ) {
                    if (e === this.dom)
                        return;
                    e = e.parentNode
                }
            this.trigger("mouseout", t)
        },
        touchstart: function(t) {
            (t = Ye(this.dom, t)).zrByTouch = !0,
            this._lastTouchMoment = new Date,
            Je(this, t, "start"),
            Mu.mousemove.call(this, t),
            Mu.mousedown.call(this, t),
            tn(this)
        },
        touchmove: function(t) {
            (t = Ye(this.dom, t)).zrByTouch = !0,
            Je(this, t, "change"),
            Mu.mousemove.call(this, t),
            tn(this)
        },
        touchend: function(t) {
            (t = Ye(this.dom, t)).zrByTouch = !0,
            Je(this, t, "end"),
            Mu.mouseup.call(this, t),
            +new Date - this._lastTouchMoment < 300 && Mu.click.call(this, t),
            tn(this)
        },
        pointerdown: function(t) {
            Mu.mousedown.call(this, t)
        },
        pointermove: function(t) {
            en(t) || Mu.mousemove.call(this, t)
        },
        pointerup: function(t) {
            Mu.mouseup.call(this, t)
        },
        pointerout: function(t) {
            en(t) || Mu.mouseout.call(this, t)
        }
    };
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
        Mu[t] = function(e) {
            e = Ye(this.dom, e),
            this.trigger(t, e)
        }
    });
    var Iu = rn.prototype;
    Iu.dispose = function() {
        for (var t = xu.concat(wu), e = 0; e < t.length; e++) {
            var n = t[e];
            je(this.dom, Qe(n), this._handlers[n])
        }
    }
    ,
    Iu.setCursor = function(t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }
    ,
    u(rn, ch);
    var Tu = !Yl.canvasSupported
      , Cu = {
        canvas: pu
    }
      , Du = function(t, e, n) {
        n = n || {},
        this.dom = e,
        this.id = t;
        var i = this
          , r = new qh
          , a = n.renderer;
        if (Tu) {
            if (!Cu.vml)
                throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml"
        } else
            a && Cu[a] || (a = "canvas");
        var o = new Cu[a](e,r,n,t);
        this.storage = r,
        this.painter = o;
        var s = Yl.node || Yl.worker ? null : new rn(o.getViewportRoot());
        this.handler = new ph(r,o,s,o.root),
        this.animation = new vu({
            stage: {
                update: m(this.flush, this)
            }
        }),
        this.animation.start(),
        this._needsRefresh;
        var l = r.delFromStorage
          , h = r.addToStorage;
        r.delFromStorage = function(t) {
            l.call(r, t),
            t && t.removeSelfFromZr(i)
        }
        ,
        r.addToStorage = function(t) {
            h.call(r, t),
            t.addSelfToZr(i)
        }
    };
    Du.prototype = {
        constructor: Du,
        getId: function() {
            return this.id
        },
        add: function(t) {
            this.storage.addRoot(t),
            this._needsRefresh = !0
        },
        remove: function(t) {
            this.storage.delRoot(t),
            this._needsRefresh = !0
        },
        configLayer: function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e),
            this._needsRefresh = !0
        },
        setBackgroundColor: function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
            this._needsRefresh = !0
        },
        refreshImmediately: function() {
            this._needsRefresh = !1,
            this.painter.refresh(),
            this._needsRefresh = !1
        },
        refresh: function() {
            this._needsRefresh = !0
        },
        flush: function() {
            var t;
            this._needsRefresh && (t = !0,
            this.refreshImmediately()),
            this._needsRefreshHover && (t = !0,
            this.refreshHoverImmediately()),
            t && this.trigger("rendered")
        },
        addHover: function(t, e) {
            this.painter.addHover && (this.painter.addHover(t, e),
            this.refreshHover())
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t),
            this.refreshHover())
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(),
            this.refreshHover())
        },
        refreshHover: function() {
            this._needsRefreshHover = !0
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1,
            this.painter.refreshHover && this.painter.refreshHover()
        },
        resize: function(t) {
            t = t || {},
            this.painter.resize(t.width, t.height),
            this.handler.resize()
        },
        clearAnimation: function() {
            this.animation.clear()
        },
        getWidth: function() {
            return this.painter.getWidth()
        },
        getHeight: function() {
            return this.painter.getHeight()
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e)
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t)
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e)
        },
        on: function(t, e, n) {
            this.handler.on(t, e, n)
        },
        off: function(t, e) {
            this.handler.off(t, e)
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e)
        },
        clear: function() {
            this.storage.delRoot(),
            this.painter.clear()
        },
        dispose: function() {
            this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            this.animation = this.storage = this.painter = this.handler = null
        }
    };
    var ku = f
      , Au = w
      , Lu = y
      , Pu = "series\0"
      , Ou = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"]
      , Eu = 0
      , Bu = "."
      , Nu = "___EC__COMPONENT__CONTAINER___"
      , Ru = 0
      , zu = function(t) {
        for (var e = 0; e < t.length; e++)
            t[e][1] || (t[e][1] = t[e][0]);
        return function(e, n, i) {
            for (var r = {}, a = 0; a < t.length; a++) {
                var o = t[a][1];
                if (!(n && l(n, o) >= 0 || i && l(i, o) < 0)) {
                    var s = e.getShallow(o);
                    null != s && (r[t[a][0]] = s)
                }
            }
            return r
        }
    }
      , Fu = zu([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]])
      , Vu = {
        getLineStyle: function(t) {
            var e = Fu(this, t)
              , n = this.getLineDash(e.lineWidth);
            return n && (e.lineDash = n),
            e
        },
        getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get("type")
              , n = Math.max(t, 2)
              , i = 4 * t;
            return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
        }
    }
      , Wu = zu([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])
      , Hu = {
        getAreaStyle: function(t, e) {
            return Wu(this, t, e)
        }
    }
      , Gu = Math.pow
      , qu = Math.sqrt
      , Xu = 1e-8
      , Uu = 1e-4
      , Yu = qu(3)
      , Zu = 1 / 3
      , ju = z()
      , $u = z()
      , Ku = z()
      , Qu = Math.min
      , Ju = Math.max
      , tc = Math.sin
      , ec = Math.cos
      , nc = 2 * Math.PI
      , ic = z()
      , rc = z()
      , ac = z()
      , oc = []
      , sc = []
      , lc = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    }
      , hc = []
      , uc = []
      , cc = []
      , fc = []
      , dc = Math.min
      , pc = Math.max
      , gc = Math.cos
      , mc = Math.sin
      , vc = Math.sqrt
      , yc = Math.abs
      , _c = "undefined" != typeof Float32Array
      , xc = function(t) {
        this._saveData = !t,
        this._saveData && (this.data = []),
        this._ctx = null
    };
    xc.prototype = {
        constructor: xc,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
            this._ux = yc(1 / Oh / t) || 0,
            this._uy = yc(1 / Oh / e) || 0
        },
        getContext: function() {
            return this._ctx
        },
        beginPath: function(t) {
            return this._ctx = t,
            t && t.beginPath(),
            t && (this.dpr = t.dpr),
            this._saveData && (this._len = 0),
            this._lineDash && (this._lineDash = null,
            this._dashOffset = 0),
            this
        },
        moveTo: function(t, e) {
            return this.addData(lc.M, t, e),
            this._ctx && this._ctx.moveTo(t, e),
            this._x0 = t,
            this._y0 = e,
            this._xi = t,
            this._yi = e,
            this
        },
        lineTo: function(t, e) {
            var n = yc(t - this._xi) > this._ux || yc(e - this._yi) > this._uy || this._len < 5;
            return this.addData(lc.L, t, e),
            this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
            n && (this._xi = t,
            this._yi = e),
            this
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            return this.addData(lc.C, t, e, n, i, r, a),
            this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)),
            this._xi = r,
            this._yi = a,
            this
        },
        quadraticCurveTo: function(t, e, n, i) {
            return this.addData(lc.Q, t, e, n, i),
            this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)),
            this._xi = n,
            this._yi = i,
            this
        },
        arc: function(t, e, n, i, r, a) {
            return this.addData(lc.A, t, e, n, n, i, r - i, 0, a ? 0 : 1),
            this._ctx && this._ctx.arc(t, e, n, i, r, a),
            this._xi = gc(r) * n + t,
            this._yi = mc(r) * n + t,
            this
        },
        arcTo: function(t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r),
            this
        },
        rect: function(t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i),
            this.addData(lc.R, t, e, n, i),
            this
        },
        closePath: function() {
            this.addData(lc.Z);
            var t = this._ctx
              , e = this._x0
              , n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n),
            t.closePath()),
            this._xi = e,
            this._yi = n,
            this
        },
        fill: function(t) {
            t && t.fill(),
            this.toStatic()
        },
        stroke: function(t) {
            t && t.stroke(),
            this.toStatic()
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t,
                this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++)
                    e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t,
            this
        },
        len: function() {
            return this._len
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length == e || !_c || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++)
                this.data[n] = t[n];
            this._len = e
        },
        appendPath: function(t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++)
                n += t[r].len();
            _c && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; r < e; r++)
                for (var a = t[r].data, o = 0; o < a.length; o++)
                    this.data[i++] = a[o];
            this._len = i
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(),
                e = this.data);
                for (var n = 0; n < arguments.length; n++)
                    e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++)
                    t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function() {
            return this._lineDash
        },
        _dashedLineTo: function(t, e) {
            var n, i, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, f = vc(u * u + c * c), d = l, p = h, g = o.length;
            for (u /= f,
            c /= f,
            a < 0 && (a = r + a),
            d -= (a %= r) * u,
            p -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e); )
                d += u * (n = o[i = this._dashIdx]),
                p += c * n,
                this._dashIdx = (i + 1) % g,
                u > 0 && d < l || u < 0 && d > l || c > 0 && p < h || c < 0 && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? dc(d, t) : pc(d, t), c >= 0 ? dc(p, e) : pc(p, e));
            u = d - t,
            c = p - e,
            this._dashOffset = -vc(u * u + c * c)
        },
        _dashedBezierTo: function(t, e, n, i, r, a) {
            var o, s, l, h, u, c = this._dashSum, f = this._dashOffset, d = this._lineDash, p = this._ctx, g = this._xi, m = this._yi, v = kn, y = 0, _ = this._dashIdx, x = d.length, w = 0;
            for (f < 0 && (f = c + f),
            f %= c,
            o = 0; o < 1; o += .1)
                s = v(g, t, n, r, o + .1) - v(g, t, n, r, o),
                l = v(m, e, i, a, o + .1) - v(m, e, i, a, o),
                y += vc(s * s + l * l);
            for (; _ < x && !((w += d[_]) > f); _++)
                ;
            for (o = (w - f) / y; o <= 1; )
                h = v(g, t, n, r, o),
                u = v(m, e, i, a, o),
                _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u),
                o += d[_] / y,
                _ = (_ + 1) % x;
            _ % 2 != 0 && p.lineTo(r, a),
            s = r - h,
            l = a - u,
            this._dashOffset = -vc(s * s + l * l)
        },
        _dashedQuadraticTo: function(t, e, n, i) {
            var r = n
              , a = i;
            n = (n + 2 * t) / 3,
            i = (i + 2 * e) / 3,
            t = (this._xi + 2 * t) / 3,
            e = (this._yi + 2 * e) / 3,
            this._dashedBezierTo(t, e, n, i, r, a)
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len,
            _c && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function() {
            hc[0] = hc[1] = cc[0] = cc[1] = Number.MAX_VALUE,
            uc[0] = uc[1] = fc[0] = fc[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length; ) {
                var o = t[a++];
                switch (1 == a && (i = e = t[a],
                r = n = t[a + 1]),
                o) {
                case lc.M:
                    e = i = t[a++],
                    n = r = t[a++],
                    cc[0] = i,
                    cc[1] = r,
                    fc[0] = i,
                    fc[1] = r;
                    break;
                case lc.L:
                    Wn(e, n, t[a], t[a + 1], cc, fc),
                    e = t[a++],
                    n = t[a++];
                    break;
                case lc.C:
                    Hn(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], cc, fc),
                    e = t[a++],
                    n = t[a++];
                    break;
                case lc.Q:
                    Gn(e, n, t[a++], t[a++], t[a], t[a + 1], cc, fc),
                    e = t[a++],
                    n = t[a++];
                    break;
                case lc.A:
                    var s = t[a++]
                      , l = t[a++]
                      , h = t[a++]
                      , u = t[a++]
                      , c = t[a++]
                      , f = t[a++] + c
                      , d = (t[a++],
                    1 - t[a++]);
                    1 == a && (i = gc(c) * h + s,
                    r = mc(c) * u + l),
                    qn(s, l, h, u, c, f, d, cc, fc),
                    e = gc(f) * h + s,
                    n = mc(f) * u + l;
                    break;
                case lc.R:
                    Wn(i = e = t[a++], r = n = t[a++], i + t[a++], r + t[a++], cc, fc);
                    break;
                case lc.Z:
                    e = i,
                    n = r
                }
                Z(hc, hc, cc),
                j(uc, uc, fc)
            }
            return 0 === a && (hc[0] = hc[1] = uc[0] = uc[1] = 0),
            new Nt(hc[0],hc[1],uc[0] - hc[0],uc[1] - hc[1])
        },
        rebuildPath: function(t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; c < u; ) {
                var f = s[c++];
                switch (1 == c && (e = i = s[c],
                n = r = s[c + 1]),
                f) {
                case lc.M:
                    e = i = s[c++],
                    n = r = s[c++],
                    t.moveTo(i, r);
                    break;
                case lc.L:
                    a = s[c++],
                    o = s[c++],
                    (yc(a - i) > l || yc(o - r) > h || c === u - 1) && (t.lineTo(a, o),
                    i = a,
                    r = o);
                    break;
                case lc.C:
                    t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]),
                    i = s[c - 2],
                    r = s[c - 1];
                    break;
                case lc.Q:
                    t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]),
                    i = s[c - 2],
                    r = s[c - 1];
                    break;
                case lc.A:
                    var d = s[c++]
                      , p = s[c++]
                      , g = s[c++]
                      , m = s[c++]
                      , v = s[c++]
                      , y = s[c++]
                      , _ = s[c++]
                      , x = s[c++]
                      , w = g > m ? g : m
                      , b = g > m ? 1 : g / m
                      , S = g > m ? m / g : 1
                      , M = v + y;
                    Math.abs(g - m) > .001 ? (t.translate(d, p),
                    t.rotate(_),
                    t.scale(b, S),
                    t.arc(0, 0, w, v, M, 1 - x),
                    t.scale(1 / b, 1 / S),
                    t.rotate(-_),
                    t.translate(-d, -p)) : t.arc(d, p, w, v, M, 1 - x),
                    1 == c && (e = gc(v) * g + d,
                    n = mc(v) * m + p),
                    i = gc(M) * g + d,
                    r = mc(M) * m + p;
                    break;
                case lc.R:
                    e = i = s[c],
                    n = r = s[c + 1],
                    t.rect(s[c++], s[c++], s[c++], s[c++]);
                    break;
                case lc.Z:
                    t.closePath(),
                    i = e,
                    r = n
                }
            }
        }
    },
    xc.CMD = lc;
    var wc = 2 * Math.PI
      , bc = 2 * Math.PI
      , Sc = xc.CMD
      , Mc = 2 * Math.PI
      , Ic = 1e-4
      , Tc = [-1, -1, -1]
      , Cc = [-1, -1]
      , Dc = Qh.prototype.getCanvasPattern
      , kc = Math.abs
      , Ac = new xc(!0);
    ai.prototype = {
        constructor: ai,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        brush: function(t, e) {
            var n = this.style
              , i = this.path || Ac
              , r = n.hasStroke()
              , a = n.hasFill()
              , o = n.fill
              , s = n.stroke
              , l = a && !!o.colorStops
              , h = r && !!s.colorStops
              , u = a && !!o.image
              , c = r && !!s.image;
            if (n.bind(t, this, e),
            this.setTransform(t),
            this.__dirty) {
                var f;
                l && (f = f || this.getBoundingRect(),
                this._fillGradient = n.getGradient(t, o, f)),
                h && (f = f || this.getBoundingRect(),
                this._strokeGradient = n.getGradient(t, s, f))
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Dc.call(o, t)),
            h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Dc.call(s, t));
            var d = n.lineDash
              , p = n.lineDashOffset
              , g = !!t.setLineDash
              , m = this.getGlobalScale();
            i.setScale(m[0], m[1]),
            this.__dirtyPath || d && !g && r ? (i.beginPath(t),
            d && !g && (i.setLineDash(d),
            i.setLineDashOffset(p)),
            this.buildPath(i, this.shape, !1),
            this.path && (this.__dirtyPath = !1)) : (t.beginPath(),
            this.path.rebuildPath(t)),
            a && i.fill(t),
            d && g && (t.setLineDash(d),
            t.lineDashOffset = p),
            r && i.stroke(t),
            d && g && t.setLineDash([]),
            null != n.text && (this.restoreTransform(t),
            this.drawRectText(t, this.getBoundingRect()))
        },
        buildPath: function(t, e, n) {},
        createPathProxy: function() {
            this.path = new xc
        },
        getBoundingRect: function() {
            var t = this._rect
              , e = this.style
              , n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new xc),
                this.__dirtyPath && (i.beginPath(),
                this.buildPath(i, this.shape, !1)),
                t = i.getBoundingRect()
            }
            if (this._rect = t,
            e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth
                      , o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)),
                    o > 1e-10 && (r.width += a / o,
                    r.height += a / o,
                    r.x -= a / o / 2,
                    r.y -= a / o / 2)
                }
                return r
            }
            return t
        },
        contain: function(t, e) {
            var n = this.transformCoordToLocal(t, e)
              , i = this.getBoundingRect()
              , r = this.style;
            if (t = n[0],
            e = n[1],
            i.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth
                      , s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)),
                    ri(a, o / s, t, e)))
                        return !0
                }
                if (r.hasFill())
                    return ii(a, t, e)
            }
            return !1
        },
        dirty: function(t) {
            null == t && (t = !0),
            t && (this.__dirtyPath = t,
            this._rect = null),
            this.__dirty = !0,
            this.__zr && this.__zr.refresh(),
            this.__clipTarget && this.__clipTarget.dirty()
        },
        animateShape: function(t) {
            return this.animate("shape", t)
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e),
            this.__dirtyPath = !0,
            this._rect = null) : Ne.prototype.attrKV.call(this, t, e)
        },
        setShape: function(t, e) {
            var n = this.shape;
            if (n) {
                if (w(t))
                    for (var i in t)
                        t.hasOwnProperty(i) && (n[i] = t[i]);
                else
                    n[t] = e;
                this.dirty(!0)
            }
            return this
        },
        getLineScale: function() {
            var t = this.transform;
            return t && kc(t[0] - 1) > 1e-10 && kc(t[3] - 1) > 1e-10 ? Math.sqrt(kc(t[0] * t[3] - t[2] * t[1])) : 1
        }
    },
    ai.extend = function(t) {
        var e = function(e) {
            ai.call(this, e),
            t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n)
                    !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
        };
        h(e, ai);
        for (var n in t)
            "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    }
    ,
    h(ai, Ne);
    var Lc = xc.CMD
      , Pc = [[], [], []]
      , Oc = Math.sqrt
      , Ec = Math.atan2
      , Bc = function(t, e) {
        var n, i, r, a, o, s, l = t.data, h = Lc.M, u = Lc.C, c = Lc.L, f = Lc.R, d = Lc.A, p = Lc.Q;
        for (r = 0,
        a = 0; r < l.length; ) {
            switch (n = l[r++],
            a = r,
            i = 0,
            n) {
            case h:
            case c:
                i = 1;
                break;
            case u:
                i = 3;
                break;
            case p:
                i = 2;
                break;
            case d:
                var g = e[4]
                  , m = e[5]
                  , v = Oc(e[0] * e[0] + e[1] * e[1])
                  , y = Oc(e[2] * e[2] + e[3] * e[3])
                  , _ = Ec(-e[1] / y, e[0] / v);
                l[r] *= v,
                l[r++] += g,
                l[r] *= y,
                l[r++] += m,
                l[r++] *= v,
                l[r++] *= y,
                l[r++] += _,
                l[r++] += _,
                a = r += 2;
                break;
            case f:
                s[0] = l[r++],
                s[1] = l[r++],
                Y(s, s, e),
                l[a++] = s[0],
                l[a++] = s[1],
                s[0] += l[r++],
                s[1] += l[r++],
                Y(s, s, e),
                l[a++] = s[0],
                l[a++] = s[1]
            }
            for (o = 0; o < i; o++)
                (s = Pc[o])[0] = l[r++],
                s[1] = l[r++],
                Y(s, s, e),
                l[a++] = s[0],
                l[a++] = s[1]
        }
    }
      , Nc = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"]
      , Rc = Math.sqrt
      , zc = Math.sin
      , Fc = Math.cos
      , Vc = Math.PI
      , Wc = function(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }
      , Hc = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Wc(t) * Wc(e))
    }
      , Gc = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Hc(t, e))
    }
      , qc = function(t) {
        Ne.call(this, t)
    };
    qc.prototype = {
        constructor: qc,
        type: "text",
        brush: function(t, e) {
            var n = this.style;
            this.__dirty && ye(n),
            n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""),
            n.bind(t, this, e),
            Be(i, n) && (this.setTransform(t),
            xe(this, t, i, n),
            this.restoreTransform(t))
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && ye(t),
            !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = ee(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (n.x += t.x || 0,
                n.y += t.y || 0,
                Le(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2,
                    n.y -= i / 2,
                    n.width += i,
                    n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    },
    h(qc, Ne);
    var Xc = ai.extend({
        type: "circle",
        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },
        buildPath: function(t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy),
            t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
        }
    })
      , Uc = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]]
      , Yc = function(t) {
        return Yl.browser.ie && Yl.browser.version >= 11 ? function() {
            var e, n = this.__clipPaths, i = this.style;
            if (n)
                for (var r = 0; r < n.length; r++) {
                    var a = n[r]
                      , o = a && a.shape
                      , s = a && a.type;
                    if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                        for (l = 0; l < Uc.length; l++)
                            Uc[l][2] = i[Uc[l][0]],
                            i[Uc[l][0]] = Uc[l][1];
                        e = !0;
                        break
                    }
                }
            if (t.apply(this, arguments),
            e)
                for (var l = 0; l < Uc.length; l++)
                    i[Uc[l][0]] = Uc[l][2]
        }
        : t
    }
      , Zc = ai.extend({
        type: "sector",
        shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        brush: Yc(ai.prototype.brush),
        buildPath: function(t, e) {
            var n = e.cx
              , i = e.cy
              , r = Math.max(e.r0 || 0, 0)
              , a = Math.max(e.r, 0)
              , o = e.startAngle
              , s = e.endAngle
              , l = e.clockwise
              , h = Math.cos(o)
              , u = Math.sin(o);
            t.moveTo(h * r + n, u * r + i),
            t.lineTo(h * a + n, u * a + i),
            t.arc(n, i, a, o, s, !l),
            t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i),
            0 !== r && t.arc(n, i, r, s, o, l),
            t.closePath()
        }
    })
      , jc = ai.extend({
        type: "ring",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
        },
        buildPath: function(t, e) {
            var n = e.cx
              , i = e.cy
              , r = 2 * Math.PI;
            t.moveTo(n + e.r, i),
            t.arc(n, i, e.r, 0, r, !1),
            t.moveTo(n + e.r0, i),
            t.arc(n, i, e.r0, 0, r, !0)
        }
    })
      , $c = function(t, e) {
        for (var n = t.length, i = [], r = 0, a = 1; a < n; a++)
            r += U(t[a - 1], t[a]);
        var o = r / 2;
        o = o < n ? n : o;
        for (a = 0; a < o; a++) {
            var s, l, h, u = a / (o - 1) * (e ? n : n - 1), c = Math.floor(u), f = u - c, d = t[c % n];
            e ? (s = t[(c - 1 + n) % n],
            l = t[(c + 1) % n],
            h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1],
            l = t[c > n - 2 ? n - 1 : c + 1],
            h = t[c > n - 3 ? n - 1 : c + 2]);
            var p = f * f
              , g = f * p;
            i.push([ci(s[0], d[0], l[0], h[0], f, p, g), ci(s[1], d[1], l[1], h[1], f, p, g)])
        }
        return i
    }
      , Kc = function(t, e, n, i) {
        var r, a, o, s, l = [], h = [], u = [], c = [];
        if (i) {
            o = [1 / 0, 1 / 0],
            s = [-1 / 0, -1 / 0];
            for (var f = 0, d = t.length; f < d; f++)
                Z(o, o, t[f]),
                j(s, s, t[f]);
            Z(o, o, i[0]),
            j(s, s, i[1])
        }
        for (var f = 0, d = t.length; f < d; f++) {
            var p = t[f];
            if (n)
                r = t[f ? f - 1 : d - 1],
                a = t[(f + 1) % d];
            else {
                if (0 === f || f === d - 1) {
                    l.push(F(t[f]));
                    continue
                }
                r = t[f - 1],
                a = t[f + 1]
            }
            W(h, a, r),
            q(h, h, e);
            var g = U(p, r)
              , m = U(p, a)
              , v = g + m;
            0 !== v && (g /= v,
            m /= v),
            q(u, h, -g),
            q(c, h, m);
            var y = V([], p, u)
              , _ = V([], p, c);
            i && (j(y, y, o),
            Z(y, y, s),
            j(_, _, o),
            Z(_, _, s)),
            l.push(y),
            l.push(_)
        }
        return n && l.push(l.shift()),
        l
    }
      , Qc = ai.extend({
        type: "polygon",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        buildPath: function(t, e) {
            fi(t, e, !0)
        }
    })
      , Jc = ai.extend({
        type: "polyline",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            fi(t, e, !1)
        }
    })
      , tf = ai.extend({
        type: "rect",
        shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.x
              , i = e.y
              , r = e.width
              , a = e.height;
            e.r ? ve(t, e) : t.rect(n, i, r, a),
            t.closePath()
        }
    })
      , ef = ai.extend({
        type: "line",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.x1
              , i = e.y1
              , r = e.x2
              , a = e.y2
              , o = e.percent;
            0 !== o && (t.moveTo(n, i),
            o < 1 && (r = n * (1 - o) + r * o,
            a = i * (1 - o) + a * o),
            t.lineTo(r, a))
        },
        pointAt: function(t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
        }
    })
      , nf = []
      , rf = ai.extend({
        type: "bezier-curve",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.x1
              , i = e.y1
              , r = e.x2
              , a = e.y2
              , o = e.cpx1
              , s = e.cpy1
              , l = e.cpx2
              , h = e.cpy2
              , u = e.percent;
            0 !== u && (t.moveTo(n, i),
            null == l || null == h ? (u < 1 && (Fn(n, o, r, u, nf),
            o = nf[1],
            r = nf[2],
            Fn(i, s, a, u, nf),
            s = nf[1],
            a = nf[2]),
            t.quadraticCurveTo(o, s, r, a)) : (u < 1 && (On(n, o, l, r, u, nf),
            o = nf[1],
            l = nf[2],
            r = nf[3],
            On(i, s, h, a, u, nf),
            s = nf[1],
            h = nf[2],
            a = nf[3]),
            t.bezierCurveTo(o, s, l, h, r, a)))
        },
        pointAt: function(t) {
            return di(this.shape, t, !1)
        },
        tangentAt: function(t) {
            var e = di(this.shape, t, !0);
            return X(e, e)
        }
    })
      , af = ai.extend({
        type: "arc",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.cx
              , i = e.cy
              , r = Math.max(e.r, 0)
              , a = e.startAngle
              , o = e.endAngle
              , s = e.clockwise
              , l = Math.cos(a)
              , h = Math.sin(a);
            t.moveTo(l * r + n, h * r + i),
            t.arc(n, i, r, a, o, !s)
        }
    })
      , of = ai.extend({
        type: "compound",
        shape: {
            paths: null
        },
        _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++)
                t = t || e[n].__dirtyPath;
            this.__dirtyPath = t,
            this.__dirty = this.__dirty || t
        },
        beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++)
                t[n].path || t[n].createPathProxy(),
                t[n].path.setScale(e[0], e[1])
        },
        buildPath: function(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++)
                n[i].buildPath(t, n[i].shape, !0)
        },
        afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
                t[e].__dirtyPath = !1
        },
        getBoundingRect: function() {
            return this._updatePathDirty(),
            ai.prototype.getBoundingRect.call(this)
        }
    })
      , sf = function(t) {
        this.colorStops = t || []
    };
    sf.prototype = {
        constructor: sf,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            })
        }
    };
    var lf = function(t, e, n, i, r, a) {
        this.x = null == t ? 0 : t,
        this.y = null == e ? 0 : e,
        this.x2 = null == n ? 1 : n,
        this.y2 = null == i ? 0 : i,
        this.type = "linear",
        this.global = a || !1,
        sf.call(this, r)
    };
    lf.prototype = {
        constructor: lf
    },
    h(lf, sf);
    var hf = function(t, e, n, i, r) {
        this.x = null == t ? .5 : t,
        this.y = null == e ? .5 : e,
        this.r = null == n ? .5 : n,
        this.type = "radial",
        this.global = r || !1,
        sf.call(this, i)
    };
    hf.prototype = {
        constructor: hf
    },
    h(hf, sf),
    pi.prototype.incremental = !0,
    pi.prototype.clearDisplaybles = function() {
        this._displayables = [],
        this._temporaryDisplayables = [],
        this._cursor = 0,
        this.dirty(),
        this.notClear = !1
    }
    ,
    pi.prototype.addDisplayable = function(t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
        this.dirty()
    }
    ,
    pi.prototype.addDisplayables = function(t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++)
            this.addDisplayable(t[n], e)
    }
    ,
    pi.prototype.eachPendingDisplayable = function(t) {
        for (e = this._cursor; e < this._displayables.length; e++)
            t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++)
            t && t(this._temporaryDisplayables[e])
    }
    ,
    pi.prototype.update = function() {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++)
            (e = this._displayables[t]).parent = this,
            e.update(),
            e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this,
            e.update(),
            e.parent = null
        }
    }
    ,
    pi.prototype.brush = function(t, e) {
        for (n = this._cursor; n < this._displayables.length; n++)
            (i = this._temporaryDisplayables[n]).beforeBrush && i.beforeBrush(t),
            i.brush(t, n === this._cursor ? null : this._displayables[n - 1]),
            i.afterBrush && i.afterBrush(t);
        this._cursor = n;
        for (var n = 0; n < this._temporaryDisplayables.length; n++) {
            var i = this._temporaryDisplayables[n];
            i.beforeBrush && i.beforeBrush(t),
            i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]),
            i.afterBrush && i.afterBrush(t)
        }
        this._temporaryDisplayables = [],
        this.notClear = !0
    }
    ;
    var uf = [];
    pi.prototype.getBoundingRect = function() {
        if (!this._rect) {
            for (var t = new Nt(1 / 0,1 / 0,-1 / 0,-1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e]
                  , i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(uf)),
                t.union(i)
            }
            this._rect = t
        }
        return this._rect
    }
    ,
    pi.prototype.contain = function(t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1]))
            for (var i = 0; i < this._displayables.length; i++)
                if (this._displayables[i].contain(t, e))
                    return !0;
        return !1
    }
    ,
    h(pi, Ne);
    var cf = Math.round
      , ff = Math.max
      , df = Math.min
      , pf = {}
      , gf = (Object.freeze || Object)({
        extendShape: gi,
        extendPath: function(t, e) {
            return ui(t, e)
        },
        makePath: mi,
        makeImage: vi,
        mergePath: function(t, e) {
            for (var n = [], i = t.length, r = 0; r < i; r++) {
                var a = t[r];
                a.path || a.createPathProxy(),
                a.__dirtyPath && a.buildPath(a.path, a.shape, !0),
                n.push(a.path)
            }
            var o = new ai(e);
            return o.createPathProxy(),
            o.buildPath = function(t) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }
            ,
            o
        },
        resizePath: _i,
        subPixelOptimizeLine: xi,
        subPixelOptimizeRect: function(t) {
            var e = t.shape
              , n = t.style.lineWidth
              , i = e.x
              , r = e.y
              , a = e.width
              , o = e.height;
            return e.x = wi(e.x, n, !0),
            e.y = wi(e.y, n, !0),
            e.width = Math.max(wi(i + a, n, !1) - e.x, 0 === a ? 0 : 1),
            e.height = Math.max(wi(r + o, n, !1) - e.y, 0 === o ? 0 : 1),
            t
        },
        subPixelOptimize: wi,
        setHoverStyle: Ei,
        setLabelStyle: Bi,
        setTextStyle: Ni,
        setText: function(t, e, n) {
            var i, r = {
                isRectText: !0
            };
            !1 === n ? i = !0 : r.autoColor = n,
            Ri(t, e, r, i),
            t.host && t.host.dirty && t.host.dirty(!1)
        },
        getFont: Gi,
        updateProps: Xi,
        initProps: Ui,
        getTransform: function(t, e) {
            for (var n = nt([]); t && t !== e; )
                rt(n, t.getLocalTransform(), n),
                t = t.parent;
            return n
        },
        applyTransform: Yi,
        transformDirection: function(t, e, n) {
            var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0])
              , r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2])
              , a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
            return a = Yi(a, e, n),
            Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
        },
        groupTransition: Zi,
        clipPointsByRect: function(t, e) {
            return d(t, function(t) {
                var n = t[0];
                n = ff(n, e.x),
                n = df(n, e.x + e.width);
                var i = t[1];
                return i = ff(i, e.y),
                i = df(i, e.y + e.height),
                [n, i]
            })
        },
        clipRectByRect: function(t, e) {
            var n = ff(t.x, e.x)
              , i = df(t.x + t.width, e.x + e.width)
              , r = ff(t.y, e.y)
              , a = df(t.y + t.height, e.y + e.height);
            if (i >= n && a >= r)
                return {
                    x: n,
                    y: r,
                    width: i - n,
                    height: a - r
                }
        },
        createIcon: function(t, e, n) {
            var i = (e = a({
                rectHover: !0
            }, e)).style = {
                strokeNoScale: !0
            };
            if (n = n || {
                x: -1,
                y: -1,
                width: 2,
                height: 2
            },
            t)
                return 0 === t.indexOf("image://") ? (i.image = t.slice(8),
                o(i, n),
                new Re(e)) : mi(t.replace("path://", ""), e, n, "center")
        },
        Group: Wh,
        Image: Re,
        Text: qc,
        Circle: Xc,
        Sector: Zc,
        Ring: jc,
        Polygon: Qc,
        Polyline: Jc,
        Rect: tf,
        Line: ef,
        BezierCurve: rf,
        Arc: af,
        IncrementalDisplayable: pi,
        CompoundPath: of,
        LinearGradient: lf,
        RadialGradient: hf,
        BoundingRect: Nt
    })
      , mf = ["textStyle", "color"]
      , vf = {
        getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(mf) : null)
        },
        getFont: function() {
            return Gi({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
        },
        getTextRect: function(t) {
            return ee(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
        }
    }
      , yf = zu([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]])
      , _f = {
        getItemStyle: function(t, e) {
            var n = yf(this, t, e)
              , i = this.getBorderLineDash();
            return i && (n.lineDash = i),
            n
        },
        getBorderLineDash: function() {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
        }
    }
      , xf = u
      , wf = gn();
    ji.prototype = {
        constructor: ji,
        init: null,
        mergeOption: function(t) {
            i(this.option, t, !0)
        },
        get: function(t, e) {
            return null == t ? this.option : $i(this.option, this.parsePath(t), !e && Ki(this, t))
        },
        getShallow: function(t, e) {
            var n = this.option
              , i = null == n ? n : n[t]
              , r = !e && Ki(this, t);
            return null == i && r && (i = r.getShallow(t)),
            i
        },
        getModel: function(t, e) {
            var n, i = null == t ? this.option : $i(this.option, t = this.parsePath(t));
            return e = e || (n = Ki(this, t)) && n.getModel(t),
            new ji(i,e,this.ecModel)
        },
        isEmpty: function() {
            return null == this.option
        },
        restoreData: function() {},
        clone: function() {
            return new (0,
            this.constructor)(n(this.option))
        },
        setReadOnly: function(t) {},
        parsePath: function(t) {
            return "string" == typeof t && (t = t.split(".")),
            t
        },
        customizeGetParent: function(t) {
            wf(this).getParent = t
        },
        isAnimationEnabled: function() {
            if (!Yl.node) {
                if (null != this.option.animation)
                    return !!this.option.animation;
                if (this.parentModel)
                    return this.parentModel.isAnimationEnabled()
            }
        }
    },
    bn(ji),
    Sn(ji),
    xf(ji, Vu),
    xf(ji, Hu),
    xf(ji, vf),
    xf(ji, _f);
    var bf = 0
      , Sf = 1e-4
      , Mf = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/
      , If = A
      , Tf = ["a", "b", "c", "d", "e", "f", "g"]
      , Cf = function(t, e) {
        return "{" + t + (null == e ? "" : e) + "}"
    }
      , Df = se
      , kf = f
      , Af = ["left", "right", "top", "bottom", "width", "height"]
      , Lf = [["width", "left", "right"], ["height", "top", "bottom"]]
      , Pf = (v(yr, "vertical"),
    v(yr, "horizontal"),
    {
        getBoxLayoutParams: function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            }
        }
    })
      , Of = gn()
      , Ef = ji.extend({
        type: "component",
        id: "",
        name: "",
        mainType: "",
        subType: "",
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function(t, e, n, i) {
            ji.call(this, t, e, n, i),
            this.uid = Qi("ec_cpt_model")
        },
        init: function(t, e, n, i) {
            this.mergeDefaultAndTheme(t, n)
        },
        mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode
              , r = n ? wr(t) : {};
            i(t, e.getTheme().get(this.mainType)),
            i(t, this.getDefaultOption()),
            n && xr(t, r, n)
        },
        mergeOption: function(t, e) {
            i(this.option, t, !0);
            var n = this.layoutMode;
            n && xr(this.option, t, n)
        },
        optionUpdated: function(t, e) {},
        getDefaultOption: function() {
            var t = Of(this);
            if (!t.defaultOption) {
                for (var e = [], n = this.constructor; n; ) {
                    var r = n.prototype.defaultOption;
                    r && e.push(r),
                    n = n.superClass
                }
                for (var a = {}, o = e.length - 1; o >= 0; o--)
                    a = i(a, e[o], !0);
                t.defaultOption = a
            }
            return t.defaultOption
        },
        getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
                mainType: t,
                index: this.get(t + "Index", !0),
                id: this.get(t + "Id", !0)
            })
        }
    });
    Tn(Ef, {
        registerWhenExtend: !0
    }),
    function(t) {
        var e = {};
        t.registerSubTypeDefaulter = function(t, n) {
            t = xn(t),
            e[t.main] = n
        }
        ,
        t.determineSubType = function(n, i) {
            var r = i.type;
            if (!r) {
                var a = xn(n).main;
                t.hasSubTypes(n) && e[a] && (r = e[a](i))
            }
            return r
        }
    }(Ef),
    function(t, e) {
        function n(t) {
            var n = {}
              , a = [];
            return f(t, function(o) {
                var s = i(n, o)
                  , h = r(s.originalDeps = e(o), t);
                s.entryCount = h.length,
                0 === s.entryCount && a.push(o),
                f(h, function(t) {
                    l(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    l(e.successor, t) < 0 && e.successor.push(o)
                })
            }),
            {
                graph: n,
                noEntryList: a
            }
        }
        function i(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }),
            t[e]
        }
        function r(t, e) {
            var n = [];
            return f(t, function(t) {
                l(e, t) >= 0 && n.push(t)
            }),
            n
        }
        t.topologicalTravel = function(t, e, i, r) {
            function a(t) {
                s[t].entryCount--,
                0 === s[t].entryCount && l.push(t)
            }
            if (t.length) {
                var o = n(e)
                  , s = o.graph
                  , l = o.noEntryList
                  , h = {};
                for (f(t, function(t) {
                    h[t] = !0
                }); l.length; ) {
                    var u = l.pop()
                      , c = s[u]
                      , d = !!h[u];
                    d && (i.call(r, u, c.originalDeps.slice()),
                    delete h[u]),
                    f(c.successor, d ? function(t) {
                        h[t] = !0,
                        a(t)
                    }
                    : a)
                }
                f(h, function() {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }(Ef, function(t) {
        var e = [];
        return f(Ef.getClassesByMainType(t), function(t) {
            e = e.concat(t.prototype.dependencies || [])
        }),
        e = d(e, function(t) {
            return xn(t).main
        }),
        "dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"),
        e
    }),
    u(Ef, Pf);
    var Bf = "";
    "undefined" != typeof navigator && (Bf = navigator.platform || "");
    var Nf = {
        color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
        textStyle: {
            fontFamily: Bf.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    }
      , Rf = gn()
      , zf = {
        clearColorPalette: function() {
            Rf(this).colorIdx = 0,
            Rf(this).colorNameMap = {}
        },
        getColorFromPalette: function(t, e, n) {
            var i = Rf(e = e || this)
              , r = i.colorIdx || 0
              , a = i.colorNameMap = i.colorNameMap || {};
            if (a.hasOwnProperty(t))
                return a[t];
            var o = on(this.get("color", !0))
              , s = this.get("colorLayer", !0)
              , l = null != n && s ? Sr(s, n) : o;
            if ((l = l || o) && l.length) {
                var h = l[r];
                return t && (a[t] = h),
                i.colorIdx = (r + 1) % l.length,
                h
            }
        }
    }
      , Ff = {
        cartesian2d: function(t, e, n, i) {
            var r = t.getReferringComponents("xAxis")[0]
              , a = t.getReferringComponents("yAxis")[0];
            e.coordSysDims = ["x", "y"],
            n.set("x", r),
            n.set("y", a),
            Ir(r) && (i.set("x", r),
            e.firstCategoryDimIndex = 0),
            Ir(a) && (i.set("y", a),
            e.firstCategoryDimIndex = 1)
        },
        singleAxis: function(t, e, n, i) {
            var r = t.getReferringComponents("singleAxis")[0];
            e.coordSysDims = ["single"],
            n.set("single", r),
            Ir(r) && (i.set("single", r),
            e.firstCategoryDimIndex = 0)
        },
        polar: function(t, e, n, i) {
            var r = t.getReferringComponents("polar")[0]
              , a = r.findAxisModel("radiusAxis")
              , o = r.findAxisModel("angleAxis");
            e.coordSysDims = ["radius", "angle"],
            n.set("radius", a),
            n.set("angle", o),
            Ir(a) && (i.set("radius", a),
            e.firstCategoryDimIndex = 0),
            Ir(o) && (i.set("angle", o),
            e.firstCategoryDimIndex = 1)
        },
        geo: function(t, e, n, i) {
            e.coordSysDims = ["lng", "lat"]
        },
        parallel: function(t, e, n, i) {
            var r = t.ecModel
              , a = r.getComponent("parallel", t.get("parallelIndex"))
              , o = e.coordSysDims = a.dimensions.slice();
            f(a.parallelAxisIndex, function(t, a) {
                var s = r.getComponent("parallelAxis", t)
                  , l = o[a];
                n.set(l, s),
                Ir(s) && null == e.firstCategoryDimIndex && (i.set(l, s),
                e.firstCategoryDimIndex = a)
            })
        }
    }
      , Vf = "original"
      , Wf = "arrayRows"
      , Hf = "objectRows"
      , Gf = "keyedColumns"
      , qf = "unknown"
      , Xf = "typedArray"
      , Uf = "column"
      , Yf = "row";
    Tr.seriesDataToSource = function(t) {
        return new Tr({
            data: t,
            sourceFormat: S(t) ? Xf : Vf,
            fromDataset: !1
        })
    }
    ,
    Sn(Tr);
    var Zf = gn()
      , jf = "\0_ec_inner"
      , $f = ji.extend({
        constructor: $f,
        init: function(t, e, n, i) {
            n = n || {},
            this.option = null,
            this._theme = new ji(n),
            this._optionManager = i
        },
        setOption: function(t, e) {
            L(!(jf in t), "please use chart.getOption()"),
            this._optionManager.setOption(t, e),
            this.resetOption(null)
        },
        resetOption: function(t) {
            var e = !1
              , n = this._optionManager;
            if (!t || "recreate" === t) {
                var i = n.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(),
                this.mergeOption(i)) : Wr.call(this, i),
                e = !0
            }
            if ("timeline" !== t && "media" !== t || this.restoreData(),
            !t || "recreate" === t || "timeline" === t) {
                var r = n.getTimelineOption(this);
                r && (this.mergeOption(r),
                e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = n.getMediaOption(this, this._api);
                a.length && f(a, function(t) {
                    this.mergeOption(t, e = !0)
                }, this)
            }
            return e
        },
        mergeOption: function(t) {
            var e = this.option
              , r = this._componentsMap
              , o = [];
            kr(this),
            f(t, function(t, r) {
                null != t && (Ef.hasClass(r) ? r && o.push(r) : e[r] = null == e[r] ? n(t) : i(e[r], t, !0))
            }),
            Ef.topologicalTravel(o, Ef.getAllClassMainTypes(), function(n, i) {
                var o = on(t[n])
                  , s = un(r.get(n), o);
                cn(s),
                f(s, function(t, e) {
                    var i = t.option;
                    w(i) && (t.keyInfo.mainType = n,
                    t.keyInfo.subType = Gr(n, i, t.exist))
                });
                var l = Hr(r, i);
                e[n] = [],
                r.set(n, []),
                f(s, function(t, i) {
                    var o = t.exist
                      , s = t.option;
                    if (L(w(s) || o, "Empty component definition"),
                    s) {
                        var h = Ef.getClass(n, t.keyInfo.subType, !0);
                        if (o && o instanceof h)
                            o.name = t.keyInfo.name,
                            o.mergeOption(s, this),
                            o.optionUpdated(s, !1);
                        else {
                            var u = a({
                                dependentModels: l,
                                componentIndex: i
                            }, t.keyInfo);
                            a(o = new h(s,this,this,u), u),
                            o.init(s, this, this, u),
                            o.optionUpdated(null, !0)
                        }
                    } else
                        o.mergeOption({}, this),
                        o.optionUpdated({}, !1);
                    r.get(n)[i] = o,
                    e[n][i] = o.option
                }, this),
                "series" === n && qr(this, r.get("series"))
            }, this),
            this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || [])
        },
        getOption: function() {
            var t = n(this.option);
            return f(t, function(e, n) {
                if (Ef.hasClass(n)) {
                    for (var i = (e = on(e)).length - 1; i >= 0; i--)
                        dn(e[i]) && e.splice(i, 1);
                    t[n] = e
                }
            }),
            delete t[jf],
            t
        },
        getTheme: function() {
            return this._theme
        },
        getComponent: function(t, e) {
            var n = this._componentsMap.get(t);
            if (n)
                return n[e || 0]
        },
        queryComponents: function(t) {
            var e = t.mainType;
            if (!e)
                return [];
            var n = t.index
              , i = t.id
              , r = t.name
              , a = this._componentsMap.get(e);
            if (!a || !a.length)
                return [];
            var o;
            if (null != n)
                y(n) || (n = [n]),
                o = g(d(n, function(t) {
                    return a[t]
                }), function(t) {
                    return !!t
                });
            else if (null != i) {
                var s = y(i);
                o = g(a, function(t) {
                    return s && l(i, t.id) >= 0 || !s && t.id === i
                })
            } else if (null != r) {
                var h = y(r);
                o = g(a, function(t) {
                    return h && l(r, t.name) >= 0 || !h && t.name === r
                })
            } else
                o = a.slice();
            return Xr(o, t)
        },
        findComponents: function(t) {
            var e = t.query
              , n = t.mainType
              , i = function(t) {
                var e = n + "Index"
                  , i = n + "Id"
                  , r = n + "Name";
                return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                    mainType: n,
                    index: t[e],
                    id: t[i],
                    name: t[r]
                }
            }(e);
            return function(e) {
                return t.filter ? g(e, t.filter) : e
            }(Xr(i ? this.queryComponents(i) : this._componentsMap.get(n), t))
        },
        eachComponent: function(t, e, n) {
            var i = this._componentsMap;
            "function" == typeof t ? (n = e,
            e = t,
            i.each(function(t, i) {
                f(t, function(t, r) {
                    e.call(n, i, t, r)
                })
            })) : x(t) ? f(i.get(t), e, n) : w(t) && f(this.findComponents(t), e, n)
        },
        getSeriesByName: function(t) {
            return g(this._componentsMap.get("series"), function(e) {
                return e.name === t
            })
        },
        getSeriesByIndex: function(t) {
            return this._componentsMap.get("series")[t]
        },
        getSeriesByType: function(t) {
            return g(this._componentsMap.get("series"), function(e) {
                return e.subType === t
            })
        },
        getSeries: function() {
            return this._componentsMap.get("series").slice()
        },
        getSeriesCount: function() {
            return this._componentsMap.get("series").length
        },
        eachSeries: function(t, e) {
            f(this._seriesIndices, function(n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n)
            }, this)
        },
        eachRawSeries: function(t, e) {
            f(this._componentsMap.get("series"), t, e)
        },
        eachSeriesByType: function(t, e, n) {
            f(this._seriesIndices, function(i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i)
            }, this)
        },
        eachRawSeriesByType: function(t, e, n) {
            return f(this.getSeriesByType(t), e, n)
        },
        isSeriesFiltered: function(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        },
        getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice()
        },
        filterSeries: function(t, e) {
            qr(this, g(this._componentsMap.get("series"), t, e))
        },
        restoreData: function(t) {
            var e = this._componentsMap;
            qr(this, e.get("series"));
            var n = [];
            e.each(function(t, e) {
                n.push(e)
            }),
            Ef.topologicalTravel(n, Ef.getAllClassMainTypes(), function(n, i) {
                f(e.get(n), function(e) {
                    ("series" !== n || !Fr(e, t)) && e.restoreData()
                })
            })
        }
    });
    u($f, zf);
    var Kf = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"]
      , Qf = {};
    Yr.prototype = {
        constructor: Yr,
        create: function(t, e) {
            var n = [];
            f(Qf, function(i, r) {
                var a = i.create(t, e);
                n = n.concat(a || [])
            }),
            this._coordinateSystems = n
        },
        update: function(t, e) {
            f(this._coordinateSystems, function(n) {
                n.update && n.update(t, e)
            })
        },
        getCoordinateSystems: function() {
            return this._coordinateSystems.slice()
        }
    },
    Yr.register = function(t, e) {
        Qf[t] = e
    }
    ,
    Yr.get = function(t) {
        return Qf[t]
    }
    ;
    var Jf = f
      , td = n
      , ed = d
      , nd = i
      , id = /^(min|max)?(.+)$/;
    Zr.prototype = {
        constructor: Zr,
        setOption: function(t, e) {
            t && f(on(t.series), function(t) {
                t && t.data && S(t.data) && O(t.data)
            }),
            t = td(t, !0);
            var n = this._optionBackup
              , i = jr.call(this, t, e, !n);
            this._newBaseOption = i.baseOption,
            n ? (Jr(n.baseOption, i.baseOption),
            i.timelineOptions.length && (n.timelineOptions = i.timelineOptions),
            i.mediaList.length && (n.mediaList = i.mediaList),
            i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        },
        mountOption: function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = ed(e.timelineOptions, td),
            this._mediaList = ed(e.mediaList, td),
            this._mediaDefault = td(e.mediaDefault),
            this._currentMediaIndices = [],
            td(t ? e.baseOption : this._newBaseOption)
        },
        getTimelineOption: function(t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = td(n[i.getCurrentIndex()], !0))
            }
            return e
        },
        getMediaOption: function(t) {
            var e = this._api.getWidth()
              , n = this._api.getHeight()
              , i = this._mediaList
              , r = this._mediaDefault
              , a = []
              , o = [];
            if (!i.length && !r)
                return o;
            for (var s = 0, l = i.length; s < l; s++)
                $r(i[s].query, e, n) && a.push(s);
            return !a.length && r && (a = [-1]),
            a.length && !Qr(a, this._currentMediaIndices) && (o = ed(a, function(t) {
                return td(-1 === t ? r.option : i[t].option)
            })),
            this._currentMediaIndices = a,
            o
        }
    };
    var rd = f
      , ad = w
      , od = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"]
      , sd = function(t, e) {
        rd(oa(t.series), function(t) {
            ad(t) && aa(t)
        });
        var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
        rd(n, function(e) {
            rd(oa(t[e]), function(t) {
                t && (ia(t, "axisLabel"),
                ia(t.axisPointer, "label"))
            })
        }),
        rd(oa(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            ia(e, "axisLabel"),
            ia(e && e.axisPointer, "label")
        }),
        rd(oa(t.calendar), function(t) {
            ea(t, "itemStyle"),
            ia(t, "dayLabel"),
            ia(t, "monthLabel"),
            ia(t, "yearLabel")
        }),
        rd(oa(t.radar), function(t) {
            ia(t, "name")
        }),
        rd(oa(t.geo), function(t) {
            ad(t) && (ra(t),
            rd(oa(t.regions), function(t) {
                ra(t)
            }))
        }),
        rd(oa(t.timeline), function(t) {
            ra(t),
            ea(t, "label"),
            ea(t, "itemStyle"),
            ea(t, "controlStyle", !0);
            var e = t.data;
            y(e) && f(e, function(t) {
                w(t) && (ea(t, "label"),
                ea(t, "itemStyle"))
            })
        }),
        rd(oa(t.toolbox), function(t) {
            ea(t, "iconStyle"),
            rd(t.feature, function(t) {
                ea(t, "iconStyle")
            })
        }),
        ia(sa(t.axisPointer), "label"),
        ia(sa(t.tooltip).axisPointer, "label")
    }
      , ld = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]]
      , hd = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"]
      , ud = function(t, e) {
        sd(t, e),
        t.series = on(t.series),
        f(t.series, function(t) {
            if (w(t)) {
                var e = t.type;
                if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise),
                "gauge" === e) {
                    var n = la(t, "pointer.color");
                    null != n && ha(t, "itemStyle.normal.color", n)
                }
                ua(t)
            }
        }),
        t.dataRange && (t.visualMap = t.dataRange),
        f(hd, function(e) {
            var n = t[e];
            n && (y(n) || (n = [n]),
            f(n, function(t) {
                ua(t)
            }))
        })
    }
      , cd = fa.prototype;
    cd.pure = !1,
    cd.persistent = !0,
    cd.getSource = function() {
        return this._source
    }
    ;
    var fd = {
        arrayRows_column: {
            pure: !0,
            count: function() {
                return Math.max(0, this._data.length - this._source.startIndex)
            },
            getItem: function(t) {
                return this._data[t + this._source.startIndex]
            },
            appendData: ga
        },
        arrayRows_row: {
            pure: !0,
            count: function() {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            },
            getItem: function(t) {
                t += this._source.startIndex;
                for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                    var r = n[i];
                    e.push(r ? r[t] : null)
                }
                return e
            },
            appendData: function() {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        },
        objectRows: {
            pure: !0,
            count: da,
            getItem: pa,
            appendData: ga
        },
        keyedColumns: {
            pure: !0,
            count: function() {
                var t = this._source.dimensionsDefine[0].name
                  , e = this._data[t];
                return e ? e.length : 0
            },
            getItem: function(t) {
                for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                    var r = this._data[n[i].name];
                    e.push(r ? r[t] : null)
                }
                return e
            },
            appendData: function(t) {
                var e = this._data;
                f(t, function(t, n) {
                    for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++)
                        i.push(t[r])
                })
            }
        },
        original: {
            count: da,
            getItem: pa,
            appendData: ga
        },
        typedArray: {
            persistent: !1,
            pure: !0,
            count: function() {
                return this._data ? this._data.length / this._dimSize : 0
            },
            getItem: function(t) {
                t -= this._offset;
                for (var e = [], n = this._dimSize * t, i = 0; i < this._dimSize; i++)
                    e[i] = this._data[n + i];
                return e
            },
            appendData: function(t) {
                this._data = t
            },
            clean: function() {
                this._offset += this.count(),
                this._data = null
            }
        }
    }
      , dd = {
        arrayRows: ma,
        objectRows: function(t, e, n, i) {
            return null != n ? t[i] : t
        },
        keyedColumns: ma,
        original: function(t, e, n, i) {
            var r = ln(t);
            return null != n && r instanceof Array ? r[n] : r
        },
        typedArray: ma
    }
      , pd = {
        arrayRows: va,
        objectRows: function(t, e, n, i) {
            return ya(t[e], this._dimensionInfos[e])
        },
        keyedColumns: va,
        original: function(t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && hn(t) && (this.hasItemOption = !0),
            ya(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
        },
        typedArray: function(t, e, n, i) {
            return t[i]
        }
    }
      , gd = /\{@(.+?)\}/g
      , md = {
        getDataParams: function(t, e) {
            var n = this.getData(e)
              , i = this.getRawValue(t, e)
              , r = n.getRawIndex(t)
              , a = n.getName(t, !0)
              , o = n.getRawDataItem(t)
              , s = n.getItemVisual(t, "color");
            return {
                componentType: this.mainType,
                componentSubType: this.subType,
                seriesType: "series" === this.mainType ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: this.id,
                seriesName: this.name,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: i,
                color: s,
                marker: gr(s),
                $vars: ["seriesName", "name", "value"]
            }
        },
        getFormattedLabel: function(t, e, n, i, r) {
            e = e || "normal";
            var a = this.getData(n)
              , o = a.getItemModel(t)
              , s = this.getDataParams(t, n);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            return "function" == typeof l ? (s.status = e,
            l(s)) : "string" == typeof l ? pr(l, s).replace(gd, function(e, n) {
                var i = n.length;
                return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)),
                _a(a, t, n)
            }) : void 0
        },
        getRawValue: function(t, e) {
            return _a(this.getData(e), t)
        },
        formatTooltip: function() {}
    }
      , vd = ba.prototype;
    vd.perform = function(t) {
        var e = this._upstream
          , n = t && t.skip;
        if (this._dirty && e) {
            var i = this.context;
            i.data = i.outputData = e.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var r;
        this._plan && !n && (r = this._plan(this.context));
        var a;
        (this._dirty || "reset" === r) && (this._dirty = !1,
        a = Sa(this, n));
        var o = t && t.step;
        if (this._dueEnd = e ? e._outputDueEnd : this._count ? this._count(this.context) : 1 / 0,
        this._progress) {
            var s = this._dueIndex
              , l = Math.min(null != o ? this._dueIndex + o : 1 / 0, this._dueEnd);
            !n && (a || s < l) && this._progress({
                start: s,
                end: l
            }, this.context),
            this._dueIndex = l;
            var h = null != this._settedOutputEnd ? this._settedOutputEnd : l;
            this._outputDueEnd = h
        } else
            this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    }
    ,
    vd.dirty = function() {
        this._dirty = !0,
        this._onDirty && this._onDirty(this.context)
    }
    ,
    vd.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd
    }
    ,
    vd.pipe = function(t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t,
        t._upstream = this,
        t.dirty())
    }
    ,
    vd.dispose = function() {
        this._disposed || (this._upstream && (this._upstream._downstream = null),
        this._downstream && (this._downstream._upstream = null),
        this._dirty = !1,
        this._disposed = !0)
    }
    ,
    vd.getUpstream = function() {
        return this._upstream
    }
    ,
    vd.getDownstream = function() {
        return this._downstream
    }
    ,
    vd.setOutputEnd = function(t) {
        this._outputDueEnd = this._settedOutputEnd = t
    }
    ;
    var yd = gn()
      , _d = Ef.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function(t, e, n, i) {
            this.seriesIndex = this.componentIndex,
            this.dataTask = wa({
                count: Ta,
                reset: Ca
            }),
            this.dataTask.context = {
                model: this
            },
            this.mergeDefaultAndTheme(t, n),
            Ar(this);
            var r = this.getInitialData(t, n);
            ka(r, this),
            this.dataTask.context.data = r,
            yd(this).dataBeforeProcessed = r,
            Ma(this)
        },
        mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode
              , r = n ? wr(t) : {}
              , a = this.subType;
            Ef.hasClass(a) && (a += "Series"),
            i(t, e.getTheme().get(this.subType)),
            i(t, this.getDefaultOption()),
            sn(t, "label", ["show"]),
            this.fillDataTextStyle(t.data),
            n && xr(t, r, n)
        },
        mergeOption: function(t, e) {
            t = i(this.option, t, !0),
            this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && xr(this.option, t, n),
            Ar(this);
            var r = this.getInitialData(t, e);
            ka(r, this),
            this.dataTask.dirty(),
            this.dataTask.context.data = r,
            yd(this).dataBeforeProcessed = r,
            Ma(this)
        },
        fillDataTextStyle: function(t) {
            if (t)
                for (var e = ["show"], n = 0; n < t.length; n++)
                    t[n] && t[n].label && sn(t[n], "label", e)
        },
        getInitialData: function() {},
        appendData: function(t) {
            this.getRawData().appendData(t.data)
        },
        getData: function(t) {
            var e = La(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n : n.getLinkedData(t)
            }
            return yd(this).data
        },
        setData: function(t) {
            var e = La(this);
            if (e) {
                var n = e.context;
                n.data !== t && e.isOverallFilter && e.setOutputEnd(t.count()),
                n.outputData = t,
                e !== this.dataTask && (n.data = t)
            }
            yd(this).data = t
        },
        getSource: function() {
            return Dr(this)
        },
        getRawData: function() {
            return yd(this).dataBeforeProcessed
        },
        getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function(t, e, n) {
            function i(t) {
                return dr(fr(t))
            }
            var r = this.getData()
              , a = r.mapDimension("defaultedTooltip", !0)
              , o = a.length
              , s = this.getRawValue(t)
              , l = y(s)
              , h = r.getItemVisual(t, "color");
            w(h) && h.colorStops && (h = (h.colorStops[0] || {}).color),
            h = h || "transparent";
            var u = o > 1 || l && !o ? function(n) {
                function i(t, n) {
                    var i = r.getDimensionInfo(n);
                    if (i && !1 !== i.otherDims.tooltip) {
                        var a = i.type
                          , l = gr({
                            color: h,
                            type: "subItem"
                        })
                          , u = (o ? l + dr(i.displayName || "-") + ": " : "") + dr("ordinal" === a ? t + "" : "time" === a ? e ? "" : vr("yyyy/MM/dd hh:mm:ss", t) : fr(t));
                        u && s.push(u)
                    }
                }
                var o = p(n, function(t, e, n) {
                    var i = r.getDimensionInfo(n);
                    return t |= i && !1 !== i.tooltip && null != i.displayName
                }, 0)
                  , s = [];
                return a.length ? f(a, function(e) {
                    i(_a(r, t, e), e)
                }) : f(n, i),
                (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ")
            }(s) : i(o ? _a(r, t, a[0]) : l ? s[0] : s)
              , c = gr(h)
              , d = r.getName(t)
              , g = this.name;
            return fn(this) || (g = ""),
            g = g ? dr(g) + (e ? ": " : "<br/>") : "",
            e ? c + g + u : g + c + (d ? dr(d) + ": " + u : u)
        },
        isAnimationEnabled: function() {
            if (Yl.node)
                return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1),
            t
        },
        restoreData: function() {
            this.dataTask.dirty()
        },
        getColorFromPalette: function(t, e, n) {
            var i = this.ecModel
              , r = zf.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)),
            r
        },
        coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function() {
            return this.get("progressive")
        },
        getProgressiveThreshold: function() {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    u(_d, md),
    u(_d, zf);
    var xd = function() {
        this.group = new Wh,
        this.uid = Qi("viewComponent")
    };
    xd.prototype = {
        constructor: xd,
        init: function(t, e) {},
        render: function(t, e, n, i) {},
        dispose: function() {}
    };
    var wd = xd.prototype;
    wd.updateView = wd.updateLayout = wd.updateVisual = function(t, e, n, i) {}
    ,
    bn(xd),
    Tn(xd, {
        registerWhenExtend: !0
    });
    var bd = function() {
        var t = gn();
        return function(e) {
            var n = t(e)
              , i = e.pipelineContext
              , r = n.large
              , a = n.canProgressiveRender
              , o = n.large = i.large
              , s = n.canProgressiveRender = i.canProgressiveRender;
            return !!(r ^ o || a ^ s) && "reset"
        }
    }
      , Sd = gn()
      , Md = bd();
    Pa.prototype = {
        type: "chart",
        init: function(t, e) {},
        render: function(t, e, n, i) {},
        highlight: function(t, e, n, i) {
            Ea(t.getData(), i, "emphasis")
        },
        downplay: function(t, e, n, i) {
            Ea(t.getData(), i, "normal")
        },
        remove: function(t, e) {
            this.group.removeAll()
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null
    };
    var Id = Pa.prototype;
    Id.updateView = Id.updateLayout = Id.updateVisual = function(t, e, n, i) {
        this.render(t, e, n, i)
    }
    ,
    bn(Pa),
    Tn(Pa, {
        registerWhenExtend: !0
    }),
    Pa.markUpdateMethod = function(t, e) {
        Sd(t).updateMethod = e
    }
    ;
    var Td = {
        incrementalPrepareRender: {
            progress: function(t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    }
      , Cd = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            var n = t.getData()
              , i = (t.visualColorAccessPath || "itemStyle.color").split(".")
              , r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (n.setVisual("color", r),
            !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof sf || n.each(function(e) {
                    n.setItemVisual(e, "color", r(t.getDataParams(e)))
                });
                return {
                    dataEach: n.hasItemOption ? function(t, e) {
                        var n = t.getItemModel(e).get(i, !0);
                        null != n && t.setItemVisual(e, "color", n)
                    }
                    : null
                }
            }
        }
    }
      , Dd = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: ["数据视图", "关闭", "刷新"]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: ["右键另存为图片"]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    }
      , kd = function(t, e) {
        function n(t, e) {
            if ("string" != typeof t)
                return t;
            var n = t;
            return f(e, function(t, e) {
                n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}","g"), t)
            }),
            n
        }
        function i(t) {
            var e = a.get(t);
            if (null == e) {
                for (var n = t.split("."), i = Dd.aria, r = 0; r < n.length; ++r)
                    i = i[n[r]];
                return i
            }
            return e
        }
        function r(t) {
            return Dd.series.typeNames[t] || "自定义图"
        }
        var a = e.getModel("aria");
        if (a.get("show"))
            if (a.get("description"))
                t.setAttribute("aria-label", a.get("description"));
            else {
                var o = 0;
                e.eachSeries(function(t, e) {
                    ++o
                }, this);
                var s, l = a.get("data.maxCount") || 10, h = a.get("series.maxCount") || 10, u = Math.min(o, h);
                if (!(o < 1)) {
                    var c = function() {
                        var t = e.getModel("title").option;
                        return t && t.length && (t = t[0]),
                        t && t.text
                    }();
                    s = c ? n(i("general.withTitle"), {
                        title: c
                    }) : i("general.withoutTitle");
                    var d = [];
                    s += n(i(o > 1 ? "series.multiple.prefix" : "series.single.prefix"), {
                        seriesCount: o
                    }),
                    e.eachSeries(function(t, e) {
                        if (e < u) {
                            var a, s = t.get("name"), h = "series." + (o > 1 ? "multiple" : "single") + ".";
                            a = n(a = i(s ? h + "withName" : h + "withoutName"), {
                                seriesId: t.seriesIndex,
                                seriesName: t.get("name"),
                                seriesType: r(t.subType)
                            });
                            var c = t.getData();
                            window.data = c,
                            c.count() > l ? a += n(i("data.partialData"), {
                                displayCnt: l
                            }) : a += i("data.allData");
                            for (var f = [], p = 0; p < c.count(); p++)
                                if (p < l) {
                                    var g = c.getName(p)
                                      , m = _a(c, p);
                                    f.push(n(i(g ? "data.withName" : "data.withoutName"), {
                                        name: g,
                                        value: m
                                    }))
                                }
                            a += f.join(i("data.separator.middle")) + i("data.separator.end"),
                            d.push(a)
                        }
                    }),
                    s += d.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"),
                    t.setAttribute("aria-label", s)
                }
            }
    }
      , Ad = Math.PI
      , Ld = za.prototype;
    Ld.getPerformArgs = function(t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id)
              , i = n.context;
            return {
                step: !e && n.progressiveEnabled && (!i || i.canProgressiveRender) && t.__idxInPipeline > n.bockIndex ? n.step : null
            }
        }
    }
    ,
    Ld.getPipeline = function(t) {
        return this._pipelineMap.get(t)
    }
    ,
    Ld.updateStreamModes = function(t, e) {
        var n = this._pipelineMap.get(t.uid)
          , i = t.getData().count()
          , r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold
          , a = t.get("large") && i >= t.get("largeThreshold");
        t.pipelineContext = n.context = {
            canProgressiveRender: r,
            large: a
        }
    }
    ,
    Ld.restorePipelines = function(t) {
        var e = this
          , n = e._pipelineMap = N();
        t.eachSeries(function(t) {
            var i = t.getProgressive()
              , r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                bockIndex: -1,
                step: i || 700,
                count: 0
            }),
            $a(e, t, t.dataTask)
        })
    }
    ,
    Ld.prepareStageTasks = function() {
        var t = this._stageTaskMap
          , e = this.ecInstance.getModel()
          , n = this.api;
        f([this._dataProcessorHandlers, this._visualHandlers], function(i) {
            f(i, function(i) {
                var r = t.get(i.uid) || t.set(i.uid, []);
                i.reset && Va(this, i, r, e, n),
                i.overallReset && Wa(this, i, r, e, n)
            }, this)
        }, this)
    }
    ,
    Ld.prepareView = function(t, e, n, i) {
        var r = t.renderTask
          , a = r.context;
        a.model = e,
        a.ecModel = n,
        a.api = i,
        r.__block = !t.incrementalPrepareRender,
        $a(this, e, r)
    }
    ,
    Ld.performDataProcessorTasks = function(t, e) {
        Fa(this, this._dataProcessorHandlers, t, e, {
            block: !0
        })
    }
    ,
    Ld.performVisualTasks = function(t, e, n) {
        Fa(this, this._visualHandlers, t, e, n)
    }
    ,
    Ld.performSeriesTasks = function(t) {
        var e;
        t.eachSeries(function(t) {
            e |= t.dataTask.perform()
        }),
        this.unfinished |= e
    }
    ,
    Ld.plan = function() {
        this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.bockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    }
    ;
    var Pd = Ld.updatePayload = function(t, e) {
        "remain" !== e && (t.context.payload = e)
    }
    ;
    za.wrapStageHandler = function(t, e) {
        return _(t) && (t = {
            overallReset: t,
            seriesType: Ka(t)
        }),
        t.uid = Qi("stageHandler"),
        e && (t.visualType = e),
        t
    }
    ;
    var Od, Ed = {}, Bd = {};
    Qa(Ed, $f),
    Qa(Bd, Ur),
    Ed.eachSeriesByType = Ed.eachRawSeriesByType = function(t) {
        Od = t
    }
    ,
    Ed.eachComponent = function(t) {
        "series" === t.mainType && t.subType && (Od = t.subType)
    }
    ;
    var Nd = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"]
      , Rd = {
        color: Nd,
        colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Nd]
    }
      , zd = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"]
      , Fd = {
        color: zd,
        backgroundColor: "#333",
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: "#eee"
                },
                crossStyle: {
                    color: "#eee"
                }
            }
        },
        legend: {
            textStyle: {
                color: "#eee"
            }
        },
        textStyle: {
            color: "#eee"
        },
        title: {
            textStyle: {
                color: "#eee"
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: "#eee"
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: "#eee"
            }
        },
        visualMap: {
            textStyle: {
                color: "#eee"
            }
        },
        timeline: {
            lineStyle: {
                color: "#eee"
            },
            itemStyle: {
                normal: {
                    color: zd[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: "#eee"
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: "#eee",
                    borderColor: "#eee"
                }
            }
        },
        timeAxis: {
            axisLine: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#eee"
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: "#eee"
                }
            }
        },
        logAxis: {
            axisLine: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#eee"
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: "#eee"
                }
            }
        },
        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#eee"
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: "#eee"
                }
            }
        },
        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#eee"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#eee"
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: "#eee"
                }
            }
        },
        line: {
            symbol: "circle"
        },
        graph: {
            color: zd
        },
        gauge: {
            title: {
                textStyle: {
                    color: "#eee"
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: "#FD1050",
                    color0: "#0CF49B",
                    borderColor: "#FD1050",
                    borderColor0: "#0CF49B"
                }
            }
        }
    };
    Fd.categoryAxis.splitLine.show = !1;
    var Vd = L
      , Wd = f
      , Hd = _
      , Gd = w
      , qd = Ef.parseClassType
      , Xd = {
        zrender: "4.0.3"
    }
      , Ud = 1e3
      , Yd = 1e3
      , Zd = 3e3
      , jd = {
        PROCESSOR: {
            FILTER: Ud,
            STATISTIC: 5e3
        },
        VISUAL: {
            LAYOUT: Yd,
            GLOBAL: 2e3,
            CHART: Zd,
            COMPONENT: 4e3,
            BRUSH: 5e3
        }
    }
      , $d = "__flagInMainProcess"
      , Kd = "__optionUpdated"
      , Qd = /^[a-zA-Z0-9_]+$/;
    to.prototype.on = Ja("on"),
    to.prototype.off = Ja("off"),
    to.prototype.one = Ja("one"),
    u(to, ch);
    var Jd = eo.prototype;
    Jd._onframe = function() {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[Kd]) {
                var e = this[Kd].silent;
                this[$d] = !0,
                io(this),
                tp.update.call(this),
                this[$d] = !1,
                this[Kd] = !1,
                so.call(this, e),
                lo.call(this, e)
            } else if (t.unfinished) {
                var n = 1
                  , i = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date;
                    t.performSeriesTasks(i),
                    t.performDataProcessorTasks(i),
                    ao(this, i),
                    t.performVisualTasks(i),
                    go(this, this._model, 0, "remain"),
                    n -= +new Date - r
                } while (n > 0 && t.unfinished);t.unfinished || this._zr.flush()
            }
        }
    }
    ,
    Jd.getDom = function() {
        return this._dom
    }
    ,
    Jd.getZr = function() {
        return this._zr
    }
    ,
    Jd.setOption = function(t, e, n) {
        var i;
        if (Gd(e) && (n = e.lazyUpdate,
        i = e.silent,
        e = e.notMerge),
        this[$d] = !0,
        !this._model || e) {
            var r = new Zr(this._api)
              , a = this._theme
              , o = this._model = new $f(null,null,a,r);
            o.scheduler = this._scheduler,
            o.init(null, null, a, r)
        }
        this._model.setOption(t, ap),
        n ? (this[Kd] = {
            silent: i
        },
        this[$d] = !1) : (io(this),
        tp.update.call(this),
        this._zr.flush(),
        this[Kd] = !1,
        this[$d] = !1,
        so.call(this, i),
        lo.call(this, i))
    }
    ,
    Jd.setTheme = function() {
        console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }
    ,
    Jd.getModel = function() {
        return this._model
    }
    ,
    Jd.getOption = function() {
        return this._model && this._model.getOption()
    }
    ,
    Jd.getWidth = function() {
        return this._zr.getWidth()
    }
    ,
    Jd.getHeight = function() {
        return this._zr.getHeight()
    }
    ,
    Jd.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }
    ,
    Jd.getRenderedCanvas = function(t) {
        if (Yl.canvasSupported)
            return (t = t || {}).pixelRatio = t.pixelRatio || 1,
            t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"),
            this._zr.painter.getRenderedCanvas(t)
    }
    ,
    Jd.getSvgDataUrl = function() {
        if (Yl.svgSupported) {
            var t = this._zr;
            return f(t.storage.getDisplayList(), function(t) {
                t.stopAnimation(!0)
            }),
            t.painter.pathToDataUrl()
        }
    }
    ,
    Jd.getDataURL = function(t) {
        var e = (t = t || {}).excludeComponents
          , n = this._model
          , i = []
          , r = this;
        Wd(e, function(t) {
            n.eachComponent({
                mainType: t
            }, function(t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e),
                e.group.ignore = !0)
            })
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return Wd(i, function(t) {
            t.group.ignore = !1
        }),
        a
    }
    ,
    Jd.getConnectedDataURL = function(t) {
        if (Yl.canvasSupported) {
            var e = this.group
              , i = Math.min
              , r = Math.max;
            if (cp[e]) {
                var a = 1 / 0
                  , o = 1 / 0
                  , s = -1 / 0
                  , l = -1 / 0
                  , h = []
                  , u = t && t.pixelRatio || 1;
                f(up, function(u, c) {
                    if (u.group === e) {
                        var f = u.getRenderedCanvas(n(t))
                          , d = u.getDom().getBoundingClientRect();
                        a = i(d.left, a),
                        o = i(d.top, o),
                        s = r(d.right, s),
                        l = r(d.bottom, l),
                        h.push({
                            dom: f,
                            left: d.left,
                            top: d.top
                        })
                    }
                });
                var c = (s *= u) - (a *= u)
                  , d = (l *= u) - (o *= u)
                  , p = rh();
                p.width = c,
                p.height = d;
                var g = an(p);
                return Wd(h, function(t) {
                    var e = new Re({
                        style: {
                            x: t.left * u - a,
                            y: t.top * u - o,
                            image: t.dom
                        }
                    });
                    g.add(e)
                }),
                g.refreshImmediately(),
                p.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }
    ,
    Jd.convertToPixel = v(no, "convertToPixel"),
    Jd.convertFromPixel = v(no, "convertFromPixel"),
    Jd.containPixel = function(t, e) {
        var n;
        return t = mn(this._model, t),
        f(t, function(t, i) {
            i.indexOf("Models") >= 0 && f(t, function(t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint)
                    n |= !!r.containPoint(e);
                else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t))
                }
            }, this)
        }, this),
        !!n
    }
    ,
    Jd.getVisual = function(t, e) {
        var n = (t = mn(this._model, t, {
            defaultMainType: "series"
        })).seriesModel.getData()
          , i = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
        return null != i ? n.getItemVisual(i, e) : n.getVisual(e)
    }
    ,
    Jd.getViewOfComponentModel = function(t) {
        return this._componentsMap[t.__viewId]
    }
    ,
    Jd.getViewOfSeriesModel = function(t) {
        return this._chartsMap[t.__viewId]
    }
    ;
    var tp = {
        prepareAndUpdate: function(t) {
            io(this),
            tp.update.call(this, t)
        },
        update: function(t) {
            var e = this._model
              , n = this._api
              , i = this._zr
              , r = this._coordSysMgr
              , a = this._scheduler;
            if (e) {
                e.restoreData(t),
                a.performSeriesTasks(e),
                r.create(e, n),
                a.performDataProcessorTasks(e, t),
                ao(this, e),
                r.update(e, n),
                co(e),
                a.performVisualTasks(e, t),
                fo(this, e, n, t);
                var o = e.get("backgroundColor") || "transparent";
                if (Yl.canvasSupported)
                    i.setBackgroundColor(o);
                else {
                    var s = _t(o);
                    o = bt(s, "rgb"),
                    0 === s[3] && (o = "transparent")
                }
                mo(e, n)
            }
        },
        updateTransform: function(t) {
            var e = this._model
              , n = this
              , i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function(a, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive)
                        if (s.updateTransform) {
                            var l = s.updateTransform(o, e, i, t);
                            l && l.update && r.push(s)
                        } else
                            r.push(s)
                });
                var a = N();
                e.eachSeries(function(r) {
                    var o = n._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, i, t);
                        s && s.update && a.set(r.uid, 1)
                    } else
                        a.set(r.uid, 1)
                }),
                co(e),
                this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }),
                go(n, e, 0, t, a),
                mo(e, this._api)
            }
        },
        updateView: function(t) {
            var e = this._model;
            e && (Pa.markUpdateMethod(t, "updateView"),
            co(e),
            this._scheduler.performVisualTasks(e, t, {
                setDirty: !0
            }),
            fo(this, this._model, this._api, t),
            mo(e, this._api))
        },
        updateVisual: function(t) {
            tp.update.call(this, t)
        },
        updateLayout: function(t) {
            tp.update.call(this, t)
        }
    };
    Jd.resize = function(t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(),
        e) {
            var n = e.resetOption("media")
              , i = t && t.silent;
            this[$d] = !0,
            n && io(this),
            tp.update.call(this),
            this[$d] = !1,
            so.call(this, i),
            lo.call(this, i)
        }
    }
    ,
    Jd.showLoading = function(t, e) {
        if (Gd(t) && (e = t,
        t = ""),
        t = t || "default",
        this.hideLoading(),
        hp[t]) {
            var n = hp[t](this._api, e)
              , i = this._zr;
            this._loadingFX = n,
            i.add(n)
        }
    }
    ,
    Jd.hideLoading = function() {
        this._loadingFX && this._zr.remove(this._loadingFX),
        this._loadingFX = null
    }
    ,
    Jd.makeActionFromEvent = function(t) {
        var e = a({}, t);
        return e.type = ip[t.type],
        e
    }
    ,
    Jd.dispatchAction = function(t, e) {
        Gd(e) || (e = {
            silent: !!e
        }),
        np[t.type] && this._model && (this[$d] ? this._pendingActions.push(t) : (oo.call(this, t, e.silent),
        e.flush ? this._zr.flush(!0) : !1 !== e.flush && Yl.browser.weChat && this._throttledZrFlush(),
        so.call(this, e.silent),
        lo.call(this, e.silent)))
    }
    ,
    Jd.appendData = function(t) {
        var e = t.seriesIndex;
        this.getModel().getSeriesByIndex(e).appendData(t),
        this._scheduler.unfinished = !0
    }
    ,
    Jd.on = Ja("on"),
    Jd.off = Ja("off"),
    Jd.one = Ja("one");
    var ep = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    Jd._initEvents = function() {
        Wd(ep, function(t) {
            this._zr.on(t, function(e) {
                var n, i = this.getModel(), r = e.target;
                if ("globalout" === t)
                    n = {};
                else if (r && null != r.dataIndex) {
                    var o = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = o && o.getDataParams(r.dataIndex, r.dataType) || {}
                } else
                    r && r.eventData && (n = a({}, r.eventData));
                n && (n.event = e,
                n.type = t,
                this.trigger(t, n))
            }, this)
        }, this),
        Wd(ip, function(t, e) {
            this._messageCenter.on(e, function(t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }
    ,
    Jd.isDisposed = function() {
        return this._disposed
    }
    ,
    Jd.clear = function() {
        this.setOption({
            series: []
        }, !0)
    }
    ,
    Jd.dispose = function() {
        if (!this._disposed) {
            this._disposed = !0,
            yn(this.getDom(), pp, "");
            var t = this._api
              , e = this._model;
            Wd(this._componentsViews, function(n) {
                n.dispose(e, t)
            }),
            Wd(this._chartsViews, function(n) {
                n.dispose(e, t)
            }),
            this._zr.dispose(),
            delete up[this.id]
        }
    }
    ,
    u(eo, ch);
    var np = {}
      , ip = {}
      , rp = []
      , ap = []
      , op = []
      , sp = []
      , lp = {}
      , hp = {}
      , up = {}
      , cp = {}
      , fp = new Date - 0
      , dp = new Date - 0
      , pp = "_echarts_instance_"
      , gp = {}
      , mp = bo;
    ko(2e3, Cd),
    Io(ud),
    To(5e3, function(t) {
        var e = N();
        t.eachSeries(function(t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, [])
                  , r = t.getData()
                  , a = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension)
                    return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel),
                i.push(a)
            }
        }),
        e.each(ca)
    }),
    Lo("default", function(t, e) {
        o(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new tf({
            style: {
                fill: e.maskColor
            },
            zlevel: e.zlevel,
            z: 1e4
        })
          , i = new af({
            shape: {
                startAngle: -Ad / 2,
                endAngle: -Ad / 2 + .1,
                r: 10
            },
            style: {
                stroke: e.color,
                lineCap: "round",
                lineWidth: 5
            },
            zlevel: e.zlevel,
            z: 10001
        })
          , r = new tf({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            },
            zlevel: e.zlevel,
            z: 10001
        });
        i.animateShape(!0).when(1e3, {
            endAngle: 3 * Ad / 2
        }).start("circularInOut"),
        i.animateShape(!0).when(1e3, {
            startAngle: 3 * Ad / 2
        }).delay(300).start("circularInOut");
        var a = new Wh;
        return a.add(i),
        a.add(r),
        a.add(n),
        a.resize = function() {
            var e = t.getWidth() / 2
              , a = t.getHeight() / 2;
            i.setShape({
                cx: e,
                cy: a
            });
            var o = i.shape.r;
            r.setShape({
                x: e - o,
                y: a - o,
                width: 2 * o,
                height: 2 * o
            }),
            n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }
        ,
        a.resize(),
        a
    }),
    Co({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, R),
    Co({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, R),
    Mo("light", Rd),
    Mo("dark", Fd);
    var vp = {};
    Po({
        type: "dataset",
        defaultOption: {
            seriesLayoutBy: Uf,
            sourceHeader: null,
            dimensions: null,
            source: null
        },
        optionUpdated: function() {
            Cr(this)
        }
    });
    Oo({
        type: "dataset"
    }),
    Ro.prototype = {
        constructor: Ro,
        add: function(t) {
            return this._add = t,
            this
        },
        update: function(t) {
            return this._update = t,
            this
        },
        remove: function(t) {
            return this._remove = t,
            this
        },
        execute: function() {
            var t = this._old
              , e = this._new
              , n = {}
              , i = []
              , r = [];
            for (zo(t, {}, i, "_oldKeyGetter", this),
            zo(e, n, r, "_newKeyGetter", this),
            a = 0; a < t.length; a++)
                null != (s = n[o = i[a]]) ? ((h = s.length) ? (1 === h && (n[o] = null),
                s = s.unshift()) : n[o] = null,
                this._update && this._update(s, a)) : this._remove && this._remove(a);
            for (var a = 0; a < r.length; a++) {
                var o = r[a];
                if (n.hasOwnProperty(o)) {
                    var s = n[o];
                    if (null == s)
                        continue;
                    if (s.length)
                        for (var l = 0, h = s.length; l < h; l++)
                            this._add && this._add(s[l]);
                    else
                        this._add && this._add(s)
                }
            }
        }
    };
    var yp = N(["tooltip", "label", "itemName", "itemId", "seriesName"])
      , _p = w
      , xp = "undefined" == typeof window ? global : window
      , wp = "e\0\0"
      , bp = {
        float: void 0 === xp.Float64Array ? Array : xp.Float64Array,
        int: void 0 === xp.Int32Array ? Array : xp.Int32Array,
        ordinal: Array,
        number: Array,
        time: Array
    }
      , Sp = void 0 === xp.Uint32Array ? Array : xp.Uint32Array
      , Mp = void 0 === xp.Uint16Array ? Array : xp.Uint16Array
      , Ip = ["hasItemOption", "_nameList", "_idList", "_calculationInfo", "_invertedIndicesMap", "_rawData", "_rawExtent", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"]
      , Tp = function(t, e) {
        t = t || ["x", "y"];
        for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
            var o = t[a];
            x(o) && (o = {
                name: o
            });
            var s = o.name;
            o.type = o.type || "float",
            o.coordDim || (o.coordDim = s,
            o.coordDimIndex = 0),
            o.otherDims = o.otherDims || {},
            i.push(s),
            n[s] = o,
            o.index = a,
            o.createInvertedIndices && (r[s] = [])
        }
        this.dimensions = i,
        this._dimensionInfos = n,
        this.hostModel = e,
        this.dataType,
        this._indices = null,
        this._count = 0,
        this._rawCount = 0,
        this._storage = {},
        this._nameList = [],
        this._idList = [],
        this._optionModels = [],
        this._visual = {},
        this._layout = {},
        this._itemVisuals = [],
        this.hasItemVisual = {},
        this._itemLayouts = [],
        this._graphicEls = [],
        this._chunkSize = 1e5,
        this._chunkCount = 0,
        this._rawData,
        this._rawExtent = {},
        this._extent = {},
        this._approximateExtent = {},
        this._dimensionsSummary = Fo(this),
        this._invertedIndicesMap = r,
        this._calculationInfo = {}
    }
      , Cp = Tp.prototype;
    Cp.type = "list",
    Cp.hasItemOption = !0,
    Cp.getDimension = function(t) {
        return isNaN(t) || (t = this.dimensions[t] || t),
        t
    }
    ,
    Cp.getDimensionInfo = function(t) {
        return this._dimensionInfos[this.getDimension(t)]
    }
    ,
    Cp.getDimensionsOnCoord = function() {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }
    ,
    Cp.mapDimension = function(t, e) {
        var n = this._dimensionsSummary;
        if (null == e)
            return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return !0 === e ? (i || []).slice() : i && i[e]
    }
    ,
    Cp.initData = function(t, e, n) {
        (Tr.isInstance(t) || c(t)) && (t = new fa(t,this.dimensions.length)),
        this._rawData = t,
        this._storage = {},
        this._indices = null,
        this._nameList = e || [],
        this._idList = [],
        this._nameRepeatCount = {},
        n || (this.hasItemOption = !1),
        this.defaultDimValueGetter = pd[this._rawData.getSource().sourceFormat],
        this._dimValueGetter = n = n || this.defaultDimValueGetter,
        this._rawExtent = {},
        this._initDataFromProvider(0, t.count()),
        t.pure && (this.hasItemOption = !1)
    }
    ,
    Cp.getProvider = function() {
        return this._rawData
    }
    ,
    Cp.appendData = function(t) {
        var e = this._rawData
          , n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n),
        this._initDataFromProvider(n, i)
    }
    ,
    Cp._initDataFromProvider = function(t, e) {
        if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = this._dimensionInfos, l = this._nameList, h = this._idList, u = this._rawExtent, c = this._nameRepeatCount = {}, f = this._chunkCount, d = f - 1, p = 0; p < o.length; p++) {
                u[I = o[p]] || (u[I] = [1 / 0, -1 / 0]);
                var g = s[I];
                0 === g.otherDims.itemName && (n = this._nameDimIdx = p),
                0 === g.otherDims.itemId && (this._idDimIdx = p);
                var m = bp[g.type];
                a[I] || (a[I] = []);
                var v = a[I][d];
                if (v && v.length < i) {
                    for (var y = new m(Math.min(e - d * i, i)), _ = 0; _ < v.length; _++)
                        y[_] = v[_];
                    a[I][d] = y
                }
                for (M = f * i; M < e; M += i)
                    a[I].push(new m(Math.min(e - M, i)));
                this._chunkCount = a[I].length
            }
            for (var x = t; x < e; x++) {
                for (var w = r.getItem(x), b = Math.floor(x / i), S = x % i, M = 0; M < o.length; M++) {
                    var I = o[M]
                      , T = a[I][b]
                      , C = this._dimValueGetter(w, I, x, M);
                    T[S] = C,
                    C < u[I][0] && (u[I][0] = C),
                    C > u[I][1] && (u[I][1] = C)
                }
                if (!r.pure) {
                    var D = l[x];
                    w && !D && (null != n ? D = this._getNameFromStore(x) : null != w.name && (l[x] = D = w.name));
                    var k = null == w ? null : w.id;
                    null == k && null != D && (c[D] = c[D] || 0,
                    k = D,
                    c[D] > 0 && (k += "__ec__" + c[D]),
                    c[D]++),
                    null != k && (h[x] = k)
                }
            }
            !r.persistent && r.clean && r.clean(),
            this._rawCount = this._count = e,
            this._extent = {},
            Xo(this)
        }
    }
    ,
    Cp._getNameFromStore = function(t) {
        var e = this._nameDimIdx;
        if (null != e) {
            var n = this._chunkSize
              , i = Math.floor(t / n)
              , r = t % n
              , a = this.dimensions[e]
              , o = this._dimensionInfos[a].ordinalMeta;
            if (o)
                return o.categories[t];
            var s = this._storage[a][i];
            return s && s[r]
        }
    }
    ,
    Cp._getIdFromStore = function(t) {
        var e = this._idDimIdx;
        if (null != e) {
            var n = this._chunkSize
              , i = Math.floor(t / n)
              , r = t % n
              , a = this.dimensions[e]
              , o = this._dimensionInfos[a].ordinalMeta;
            if (o)
                return o.categories[t];
            var s = this._storage[a][i];
            return s && s[r]
        }
    }
    ,
    Cp.count = function() {
        return this._count
    }
    ,
    Cp.getIndices = function() {
        if (this._indices)
            return new (t = this._indices.constructor)(this._indices.buffer,0,this._count);
        for (var t = Ho(this), e = new t(this.count()), n = 0; n < e.length; n++)
            e[n] = n;
        return e
    }
    ,
    Cp.get = function(t, e) {
        if (!(e >= 0 && e < this._count))
            return NaN;
        var n = this._storage;
        if (!n[t])
            return NaN;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize)
          , r = e % this._chunkSize;
        return n[t][i][r]
    }
    ,
    Cp.getByRawIndex = function(t, e) {
        if (!(e >= 0 && e < this._rawCount))
            return NaN;
        var n = this._storage[t];
        if (!n)
            return NaN;
        var i = Math.floor(e / this._chunkSize)
          , r = e % this._chunkSize;
        return n[i][r]
    }
    ,
    Cp._getFast = function(t, e) {
        var n = Math.floor(e / this._chunkSize)
          , i = e % this._chunkSize;
        return this._storage[t][n][i]
    }
    ,
    Cp.getValues = function(t, e) {
        var n = [];
        y(t) || (e = t,
        t = this.dimensions);
        for (var i = 0, r = t.length; i < r; i++)
            n.push(this.get(t[i], e));
        return n
    }
    ,
    Cp.hasValue = function(t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++)
            if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t)))
                return !1;
        return !0
    }
    ,
    Cp.getDataExtent = function(t) {
        t = this.getDimension(t);
        var e = [1 / 0, -1 / 0];
        if (!this._storage[t])
            return e;
        var n, i = this.count();
        if (!this._indices)
            return this._rawExtent[t].slice();
        if (n = this._extent[t])
            return n.slice();
        for (var r = (n = e)[0], a = n[1], o = 0; o < i; o++) {
            var s = this._getFast(t, this.getRawIndex(o));
            s < r && (r = s),
            s > a && (a = s)
        }
        return n = [r, a],
        this._extent[t] = n,
        n
    }
    ,
    Cp.getApproximateExtent = function(t) {
        return t = this.getDimension(t),
        this._approximateExtent[t] || this.getDataExtent(t)
    }
    ,
    Cp.setApproximateExtent = function(t, e) {
        e = this.getDimension(e),
        this._approximateExtent[e] = t.slice()
    }
    ,
    Cp.getCalculationInfo = function(t) {
        return this._calculationInfo[t]
    }
    ,
    Cp.setCalculationInfo = function(t, e) {
        _p(t) ? a(this._calculationInfo, t) : this._calculationInfo[t] = e
    }
    ,
    Cp.getSum = function(t) {
        var e = 0;
        if (this._storage[t])
            for (var n = 0, i = this.count(); n < i; n++) {
                var r = this.get(t, n);
                isNaN(r) || (e += r)
            }
        return e
    }
    ,
    Cp.rawIndexOf = function(t, e) {
        var n = (t && this._invertedIndicesMap[t])[e];
        return null == n || isNaN(n) ? -1 : n
    }
    ,
    Cp.indexOfName = function(t) {
        for (var e = 0, n = this.count(); e < n; e++)
            if (this.getName(e) === t)
                return e;
        return -1
    }
    ,
    Cp.indexOfRawIndex = function(t) {
        if (!this._indices)
            return t;
        if (t >= this._rawCount || t < 0)
            return -1;
        var e = this._indices
          , n = e[t];
        if (null != n && n < this._count && n === t)
            return t;
        for (var i = 0, r = this._count - 1; i <= r; ) {
            var a = (i + r) / 2 | 0;
            if (e[a] < t)
                i = a + 1;
            else {
                if (!(e[a] > t))
                    return a;
                r = a - 1
            }
        }
        return -1
    }
    ,
    Cp.indicesOfNearest = function(t, e, n) {
        var i = [];
        if (!this._storage[t])
            return i;
        null == n && (n = 1 / 0);
        for (var r = Number.MAX_VALUE, a = -1, o = 0, s = this.count(); o < s; o++) {
            var l = e - this.get(t, o)
              , h = Math.abs(l);
            l <= n && h <= r && ((h < r || l >= 0 && a < 0) && (r = h,
            a = l,
            i.length = 0),
            i.push(o))
        }
        return i
    }
    ,
    Cp.getRawIndex = Uo,
    Cp.getRawDataItem = function(t) {
        if (this._rawData.persistent)
            return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t))
        }
        return e
    }
    ,
    Cp.getName = function(t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || this._getNameFromStore(e) || ""
    }
    ,
    Cp.getId = function(t) {
        return Zo(this, this.getRawIndex(t))
    }
    ,
    Cp.each = function(t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n,
            n = e,
            e = t,
            t = []),
            n = n || i || this;
            for (var r = (t = d(jo(t), this.getDimension, this)).length, a = 0; a < this.count(); a++)
                switch (r) {
                case 0:
                    e.call(n, a);
                    break;
                case 1:
                    e.call(n, this.get(t[0], a), a);
                    break;
                case 2:
                    e.call(n, this.get(t[0], a), this.get(t[1], a), a);
                    break;
                default:
                    for (var o = 0, s = []; o < r; o++)
                        s[o] = this.get(t[o], a);
                    s[o] = a,
                    e.apply(n, s)
                }
        }
    }
    ,
    Cp.filterSelf = function(t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n,
            n = e,
            e = t,
            t = []),
            n = n || i || this,
            t = d(jo(t), this.getDimension, this);
            for (var r = this.count(), a = new (Ho(this))(r), o = [], s = t.length, l = 0, h = t[0], u = 0; u < r; u++) {
                var c, f = this.getRawIndex(u);
                if (0 === s)
                    c = e.call(n, u);
                else if (1 === s) {
                    var p = this._getFast(h, f);
                    c = e.call(n, p, u)
                } else {
                    for (var g = 0; g < s; g++)
                        o[g] = this._getFast(h, f);
                    o[g] = u,
                    c = e.apply(n, o)
                }
                c && (a[l++] = f)
            }
            return l < r && (this._indices = a),
            this._count = l,
            this._extent = {},
            this.getRawIndex = this._indices ? Yo : Uo,
            this
        }
    }
    ,
    Cp.selectRange = function(t) {
        if (this._count) {
            var e = [];
            for (var n in t)
                t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count()
                  , a = new (Ho(this))(r)
                  , o = 0
                  , s = e[0]
                  , l = t[s][0]
                  , h = t[s][1]
                  , u = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === i) {
                        for (var f = this._storage[e[0]], d = 0; d < this._chunkCount; d++)
                            for (var p = f[d], g = Math.min(this._count - d * this._chunkSize, this._chunkSize), m = 0; m < g; m++)
                                (w = p[m]) >= l && w <= h && (a[o++] = c),
                                c++;
                        u = !0
                    } else if (2 === i) {
                        for (var f = this._storage[s], v = this._storage[e[1]], y = t[e[1]][0], _ = t[e[1]][1], d = 0; d < this._chunkCount; d++)
                            for (var p = f[d], x = v[d], g = Math.min(this._count - d * this._chunkSize, this._chunkSize), m = 0; m < g; m++) {
                                var w = p[m]
                                  , b = x[m];
                                w >= l && w <= h && b >= y && b <= _ && (a[o++] = c),
                                c++
                            }
                        u = !0
                    }
                }
                if (!u)
                    if (1 === i)
                        for (m = 0; m < r; m++) {
                            M = this.getRawIndex(m);
                            (w = this._getFast(s, M)) >= l && w <= h && (a[o++] = M)
                        }
                    else
                        for (m = 0; m < r; m++) {
                            for (var S = !0, M = this.getRawIndex(m), d = 0; d < i; d++) {
                                var I = e[d];
                                ((w = this._getFast(n, M)) < t[I][0] || w > t[I][1]) && (S = !1)
                            }
                            S && (a[o++] = this.getRawIndex(m))
                        }
                return o < r && (this._indices = a),
                this._count = o,
                this._extent = {},
                this.getRawIndex = this._indices ? Yo : Uo,
                this
            }
        }
    }
    ,
    Cp.mapArray = function(t, e, n, i) {
        "function" == typeof t && (i = n,
        n = e,
        e = t,
        t = []),
        n = n || i || this;
        var r = [];
        return this.each(t, function() {
            r.push(e && e.apply(this, arguments))
        }, n),
        r
    }
    ,
    Cp.map = function(t, e, n, i) {
        n = n || i || this;
        var r = $o(this, t = d(jo(t), this.getDimension, this));
        r._indices = this._indices,
        r.getRawIndex = r._indices ? Yo : Uo;
        for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, f = 0; f < h; f++) {
            for (var p = 0; p < l; p++)
                u[p] = this.get(t[p], f);
            u[l] = f;
            var g = e && e.apply(n, u);
            if (null != g) {
                "object" != typeof g && (o[0] = g,
                g = o);
                for (var m = this.getRawIndex(f), v = Math.floor(m / s), y = m % s, _ = 0; _ < g.length; _++) {
                    var x = t[_]
                      , w = g[_]
                      , b = c[x]
                      , S = a[x];
                    S && (S[v][y] = w),
                    w < b[0] && (b[0] = w),
                    w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }
    ,
    Cp.downSample = function(t, e, n, i) {
        for (var r = $o(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], f = new (Ho(this))(h), d = 0, p = 0; p < h; p += s) {
            s > h - p && (s = h - p,
            o.length = s);
            for (var g = 0; g < s; g++) {
                var m = this.getRawIndex(p + g)
                  , v = Math.floor(m / u)
                  , y = m % u;
                o[g] = l[v][y]
            }
            var _ = n(o)
              , x = this.getRawIndex(Math.min(p + i(o, _) || 0, h - 1))
              , w = x % u;
            l[Math.floor(x / u)][w] = _,
            _ < c[0] && (c[0] = _),
            _ > c[1] && (c[1] = _),
            f[d++] = x
        }
        return r._count = d,
        r._indices = f,
        r.getRawIndex = Yo,
        r
    }
    ,
    Cp.getItemModel = function(t) {
        var e = this.hostModel;
        return new ji(this.getRawDataItem(t),e,e && e.ecModel)
    }
    ,
    Cp.diff = function(t) {
        var e = this;
        return new Ro(t ? t.getIndices() : [],this.getIndices(),function(e) {
            return Zo(t, e)
        }
        ,function(t) {
            return Zo(e, t)
        }
        )
    }
    ,
    Cp.getVisual = function(t) {
        var e = this._visual;
        return e && e[t]
    }
    ,
    Cp.setVisual = function(t, e) {
        if (_p(t))
            for (var n in t)
                t.hasOwnProperty(n) && this.setVisual(n, t[n]);
        else
            this._visual = this._visual || {},
            this._visual[t] = e
    }
    ,
    Cp.setLayout = function(t, e) {
        if (_p(t))
            for (var n in t)
                t.hasOwnProperty(n) && this.setLayout(n, t[n]);
        else
            this._layout[t] = e
    }
    ,
    Cp.getLayout = function(t) {
        return this._layout[t]
    }
    ,
    Cp.getItemLayout = function(t) {
        return this._itemLayouts[t]
    }
    ,
    Cp.setItemLayout = function(t, e, n) {
        this._itemLayouts[t] = n ? a(this._itemLayouts[t] || {}, e) : e
    }
    ,
    Cp.clearItemLayouts = function() {
        this._itemLayouts.length = 0
    }
    ,
    Cp.getItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t]
          , r = i && i[e];
        return null != r || n ? r : this.getVisual(e)
    }
    ,
    Cp.setItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t] || {}
          , r = this.hasItemVisual;
        if (this._itemVisuals[t] = i,
        _p(e))
            for (var a in e)
                e.hasOwnProperty(a) && (i[a] = e[a],
                r[a] = !0);
        else
            i[e] = n,
            r[e] = !0
    }
    ,
    Cp.clearAllVisual = function() {
        this._visual = {},
        this._itemVisuals = [],
        this.hasItemVisual = {}
    }
    ;
    var Dp = function(t) {
        t.seriesIndex = this.seriesIndex,
        t.dataIndex = this.dataIndex,
        t.dataType = this.dataType
    };
    Cp.setItemGraphicEl = function(t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t,
        e.dataType = this.dataType,
        e.seriesIndex = n && n.seriesIndex,
        "group" === e.type && e.traverse(Dp, e)),
        this._graphicEls[t] = e
    }
    ,
    Cp.getItemGraphicEl = function(t) {
        return this._graphicEls[t]
    }
    ,
    Cp.eachItemGraphicEl = function(t, e) {
        f(this._graphicEls, function(n, i) {
            n && t && t.call(e, n, i)
        })
    }
    ,
    Cp.cloneShallow = function(t) {
        if (!t) {
            var e = d(this.dimensions, this.getDimensionInfo, this);
            t = new Tp(e,this.hostModel)
        }
        if (t._storage = this._storage,
        qo(t, this),
        this._indices) {
            var i = this._indices.constructor;
            t._indices = new i(this._indices)
        } else
            t._indices = null;
        return t.getRawIndex = t._indices ? Yo : Uo,
        t._extent = n(this._extent),
        t._approximateExtent = n(this._approximateExtent),
        t
    }
    ,
    Cp.wrapMethod = function(t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [],
        this.__wrappedMethods.push(t),
        this[t] = function() {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(k(arguments)))
        }
        )
    }
    ,
    Cp.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"],
    Cp.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var kp = function(t, e) {
        return e = e || {},
        Jo(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    _d.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function(t, e) {
            return rs(this.getSource(), this)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
                position: "top"
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: !1,
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var Ap = gi({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx
              , i = e.cy
              , r = e.width / 2
              , a = e.height / 2;
            t.moveTo(n, i - a),
            t.lineTo(n + r, i + a),
            t.lineTo(n - r, i + a),
            t.closePath()
        }
    })
      , Lp = gi({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx
              , i = e.cy
              , r = e.width / 2
              , a = e.height / 2;
            t.moveTo(n, i - a),
            t.lineTo(n + r, i),
            t.lineTo(n, i + a),
            t.lineTo(n - r, i),
            t.closePath()
        }
    })
      , Pp = gi({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.x
              , i = e.y
              , r = e.width / 5 * 3
              , a = Math.max(r, e.height)
              , o = r / 2
              , s = o * o / (a - o)
              , l = i - a + o + s
              , h = Math.asin(s / o)
              , u = Math.cos(h) * o
              , c = Math.sin(h)
              , f = Math.cos(h)
              , d = .6 * o
              , p = .7 * o;
            t.moveTo(n - u, l + s),
            t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h),
            t.bezierCurveTo(n + u - c * d, l + s + f * d, n, i - p, n, i),
            t.bezierCurveTo(n, i - p, n - u + c * d, l + s + f * d, n - u, l + s),
            t.closePath()
        }
    })
      , Op = gi({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.height
              , i = e.width
              , r = e.x
              , a = e.y
              , o = i / 3 * 2;
            t.moveTo(r, a),
            t.lineTo(r + o, a + n),
            t.lineTo(r, a + n / 4 * 3),
            t.lineTo(r - o, a + n),
            t.lineTo(r, a),
            t.closePath()
        }
    })
      , Ep = {
        line: function(t, e, n, i, r) {
            r.x1 = t,
            r.y1 = e + i / 2,
            r.x2 = t + n,
            r.y2 = e + i / 2
        },
        rect: function(t, e, n, i, r) {
            r.x = t,
            r.y = e,
            r.width = n,
            r.height = i
        },
        roundRect: function(t, e, n, i, r) {
            r.x = t,
            r.y = e,
            r.width = n,
            r.height = i,
            r.r = Math.min(n, i) / 4
        },
        square: function(t, e, n, i, r) {
            var a = Math.min(n, i);
            r.x = t,
            r.y = e,
            r.width = a,
            r.height = a
        },
        circle: function(t, e, n, i, r) {
            r.cx = t + n / 2,
            r.cy = e + i / 2,
            r.r = Math.min(n, i) / 2
        },
        diamond: function(t, e, n, i, r) {
            r.cx = t + n / 2,
            r.cy = e + i / 2,
            r.width = n,
            r.height = i
        },
        pin: function(t, e, n, i, r) {
            r.x = t + n / 2,
            r.y = e + i / 2,
            r.width = n,
            r.height = i
        },
        arrow: function(t, e, n, i, r) {
            r.x = t + n / 2,
            r.y = e + i / 2,
            r.width = n,
            r.height = i
        },
        triangle: function(t, e, n, i, r) {
            r.cx = t + n / 2,
            r.cy = e + i / 2,
            r.width = n,
            r.height = i
        }
    }
      , Bp = {};
    f({
        line: ef,
        rect: tf,
        roundRect: tf,
        square: tf,
        circle: Xc,
        diamond: Lp,
        pin: Pp,
        arrow: Op,
        triangle: Ap
    }, function(t, e) {
        Bp[e] = new t
    });
    var Np = gi({
        type: "symbol",
        shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        beforeBrush: function() {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"],
            t.textAlign = "center",
            t.textVerticalAlign = "middle")
        },
        buildPath: function(t, e, n) {
            var i = e.symbolType
              , r = Bp[i];
            "none" !== e.symbolType && (r || (r = Bp[i = "rect"]),
            Ep[i](e.x, e.y, e.width, e.height, r.shape),
            r.buildPath(t, r.shape, n))
        }
    })
      , Rp = fs.prototype;
    Rp._createSymbol = function(t, e, n, i) {
        this.removeAll();
        var r = ls(t, -1, -1, 2, 2, e.getItemVisual(n, "color"));
        r.attr({
            z2: 100,
            culling: !0,
            scale: cs(i)
        }),
        r.drift = ds,
        this._symbolType = t,
        this.add(r)
    }
    ,
    Rp.stopSymbolAnimation = function(t) {
        this.childAt(0).stopAnimation(t)
    }
    ,
    Rp.getSymbolPath = function() {
        return this.childAt(0)
    }
    ,
    Rp.getScale = function() {
        return this.childAt(0).scale
    }
    ,
    Rp.highlight = function() {
        this.childAt(0).trigger("emphasis")
    }
    ,
    Rp.downplay = function() {
        this.childAt(0).trigger("normal")
    }
    ,
    Rp.setZ = function(t, e) {
        var n = this.childAt(0);
        n.zlevel = t,
        n.z = e
    }
    ,
    Rp.setDraggable = function(t) {
        var e = this.childAt(0);
        e.draggable = t,
        e.cursor = t ? "move" : "pointer"
    }
    ,
    Rp.updateData = function(t, e, n) {
        this.silent = !1;
        var i = t.getItemVisual(e, "symbol") || "circle"
          , r = t.hostModel
          , a = us(t, e)
          , o = i !== this._symbolType;
        if (o ? this._createSymbol(i, t, e, a) : ((s = this.childAt(0)).silent = !1,
        Xi(s, {
            scale: cs(a)
        }, r, e)),
        this._updateCommon(t, e, a, n),
        o) {
            var s = this.childAt(0)
              , l = n && n.fadeIn
              , h = {
                scale: s.scale.slice()
            };
            l && (h.style = {
                opacity: s.style.opacity
            }),
            s.scale = [0, 0],
            l && (s.style.opacity = 0),
            Ui(s, h, r, e)
        }
        this._seriesModel = r
    }
    ;
    var zp = ["itemStyle"]
      , Fp = ["emphasis", "itemStyle"]
      , Vp = ["label"]
      , Wp = ["emphasis", "label"];
    Rp._updateCommon = function(t, e, n, i) {
        var r = this.childAt(0)
          , o = t.hostModel
          , s = t.getItemVisual(e, "color");
        "image" !== r.type && r.useStyle({
            strokeNoScale: !0
        });
        var l = i && i.itemStyle
          , h = i && i.hoverItemStyle
          , u = i && i.symbolRotate
          , c = i && i.symbolOffset
          , f = i && i.labelModel
          , d = i && i.hoverLabelModel
          , p = i && i.hoverAnimation
          , g = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            l = m.getModel(zp).getItemStyle(["color"]),
            h = m.getModel(Fp).getItemStyle(),
            u = m.getShallow("symbolRotate"),
            c = m.getShallow("symbolOffset"),
            f = m.getModel(Vp),
            d = m.getModel(Wp),
            p = m.getShallow("hoverAnimation"),
            g = m.getShallow("cursor")
        } else
            h = a({}, h);
        var v = r.style;
        r.attr("rotation", (u || 0) * Math.PI / 180 || 0),
        c && r.attr("position", [er(c[0], n[0]), er(c[1], n[1])]),
        g && r.attr("cursor", g),
        r.setColor(s, i && i.symbolInnerColor),
        r.setStyle(l);
        var y = t.getItemVisual(e, "opacity");
        null != y && (v.opacity = y);
        var _ = i && i.useNameLabel;
        Bi(v, h, f, d, {
            labelFetcher: o,
            labelDataIndex: e,
            defaultText: function(e, n) {
                return _ ? t.getName(e) : hs(t, e)
            },
            isRectText: !0,
            autoColor: s
        }),
        r.off("mouseover").off("mouseout").off("emphasis").off("normal"),
        r.hoverStyle = h,
        Ei(r);
        var x = cs(n);
        if (p && o.isAnimationEnabled()) {
            var w = function() {
                if (!this.incremental) {
                    var t = x[1] / x[0];
                    this.animateTo({
                        scale: [Math.max(1.1 * x[0], x[0] + 3), Math.max(1.1 * x[1], x[1] + 3 * t)]
                    }, 400, "elasticOut")
                }
            }
              , b = function() {
                this.incremental || this.animateTo({
                    scale: x
                }, 400, "elasticOut")
            };
            r.on("mouseover", w).on("mouseout", b).on("emphasis", w).on("normal", b)
        }
    }
    ,
    Rp.fadeOut = function(t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0,
        !(e && e.keepLabel) && (n.style.text = null),
        Xi(n, {
            style: {
                opacity: 0
            },
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }
    ,
    h(fs, Wh);
    var Hp = ps.prototype;
    Hp.updateData = function(t, e) {
        e = ms(e);
        var n = this.group
          , i = t.hostModel
          , r = this._data
          , a = this._symbolCtor
          , o = vs(t);
        r || n.removeAll(),
        t.diff(r).add(function(i) {
            var r = t.getItemLayout(i);
            if (gs(t, r, i, e)) {
                var s = new a(t,i,o);
                s.attr("position", r),
                t.setItemGraphicEl(i, s),
                n.add(s)
            }
        }).update(function(s, l) {
            var h = r.getItemGraphicEl(l)
              , u = t.getItemLayout(s);
            gs(t, u, s, e) ? (h ? (h.updateData(t, s, o),
            Xi(h, {
                position: u
            }, i)) : (h = new a(t,s)).attr("position", u),
            n.add(h),
            t.setItemGraphicEl(s, h)) : n.remove(h)
        }).remove(function(t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function() {
                n.remove(e)
            })
        }).execute(),
        this._data = t
    }
    ,
    Hp.isPersistent = function() {
        return !0
    }
    ,
    Hp.updateLayout = function() {
        var t = this._data;
        t && t.eachItemGraphicEl(function(e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
        })
    }
    ,
    Hp.incrementalPrepareUpdate = function(t) {
        this._seriesScope = vs(t),
        this._data = null,
        this.group.removeAll()
    }
    ,
    Hp.incrementalUpdate = function(t, e, n) {
        n = ms(n);
        for (var i = t.start; i < t.end; i++) {
            var r = e.getItemLayout(i);
            if (gs(e, r, i, n)) {
                var a = new this._symbolCtor(e,i,this._seriesScope);
                a.traverse(function(t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0)
                }),
                a.attr("position", r),
                this.group.add(a),
                e.setItemGraphicEl(i, a)
            }
        }
    }
    ,
    Hp.remove = function(t) {
        var e = this.group
          , n = this._data;
        n && t ? n.eachItemGraphicEl(function(t) {
            t.fadeOut(function() {
                e.remove(t)
            })
        }) : e.removeAll()
    }
    ;
    var Gp = function(t, e, n, i, r, a, o, s) {
        for (var l = ws(t, e), h = [], u = [], c = [], f = [], d = [], p = [], g = [], m = ys(r, e, o), v = ys(a, t, s), y = 0; y < l.length; y++) {
            var _ = l[y]
              , x = !0;
            switch (_.cmd) {
            case "=":
                var w = t.getItemLayout(_.idx)
                  , b = e.getItemLayout(_.idx1);
                (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()),
                h.push(w),
                u.push(b),
                c.push(n[_.idx]),
                f.push(i[_.idx1]),
                g.push(e.getRawIndex(_.idx1));
                break;
            case "+":
                S = _.idx;
                h.push(r.dataToPoint([e.get(m.dataDimsForPoint[0], S), e.get(m.dataDimsForPoint[1], S)])),
                u.push(e.getItemLayout(S).slice()),
                c.push(xs(m, r, e, S)),
                f.push(i[S]),
                g.push(e.getRawIndex(S));
                break;
            case "-":
                var S = _.idx
                  , M = t.getRawIndex(S);
                M !== S ? (h.push(t.getItemLayout(S)),
                u.push(a.dataToPoint([t.get(v.dataDimsForPoint[0], S), t.get(v.dataDimsForPoint[1], S)])),
                c.push(n[S]),
                f.push(xs(v, a, t, S)),
                g.push(M)) : x = !1
            }
            x && (d.push(_),
            p.push(p.length))
        }
        p.sort(function(t, e) {
            return g[t] - g[e]
        });
        for (var I = [], T = [], C = [], D = [], k = [], y = 0; y < p.length; y++) {
            S = p[y];
            I[y] = h[S],
            T[y] = u[S],
            C[y] = c[S],
            D[y] = f[S],
            k[y] = d[S]
        }
        return {
            current: I,
            next: T,
            stackedOnCurrent: C,
            stackedOnNext: D,
            status: k
        }
    }
      , qp = Z
      , Xp = j
      , Up = function(t, e, n, i) {
        return t[0] = e[0] + n[0] * i,
        t[1] = e[1] + n[1] * i,
        t
    }
      , Yp = function(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t
    }
      , Zp = []
      , jp = []
      , $p = []
      , Kp = ai.extend({
        type: "ec-polyline",
        shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        style: {
            fill: null,
            stroke: "#000"
        },
        brush: Yc(ai.prototype.brush),
        buildPath: function(t, e) {
            var n = e.points
              , i = 0
              , r = n.length
              , a = Cs(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (; r > 0 && bs(n[r - 1]); r--)
                    ;
                for (; i < r && bs(n[i]); i++)
                    ;
            }
            for (; i < r; )
                i += Ss(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
        }
    })
      , Qp = ai.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: Yc(ai.prototype.brush),
        buildPath: function(t, e) {
            var n = e.points
              , i = e.stackedOnPoints
              , r = 0
              , a = n.length
              , o = e.smoothMonotone
              , s = Cs(n, e.smoothConstraint)
              , l = Cs(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (; a > 0 && bs(n[a - 1]); a--)
                    ;
                for (; r < a && bs(n[r]); r++)
                    ;
            }
            for (; r < a; ) {
                var h = Ss(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                Ss(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls),
                r += h + 1,
                t.closePath()
            }
        }
    });
    Pa.extend({
        type: "line",
        init: function() {
            var t = new Wh
              , e = new ps;
            this.group.add(e.group),
            this._symbolDraw = e,
            this._lineGroup = t
        },
        render: function(t, e, n) {
            var i = t.coordinateSystem
              , r = this.group
              , a = t.getData()
              , s = t.getModel("lineStyle")
              , l = t.getModel("areaStyle")
              , h = a.mapArray(a.getItemLayout)
              , u = "polar" === i.type
              , c = this._coordSys
              , f = this._symbolDraw
              , d = this._polyline
              , p = this._polygon
              , g = this._lineGroup
              , m = t.get("animation")
              , v = !l.isEmpty()
              , y = l.get("origin")
              , _ = Ls(i, a, ys(i, a, y))
              , x = t.get("showSymbol")
              , w = x && !u && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(a, i)
              , b = this._data;
            b && b.eachItemGraphicEl(function(t, e) {
                t.__temp && (r.remove(t),
                b.setItemGraphicEl(e, null))
            }),
            x || f.remove(),
            r.add(g);
            var S = !u && t.get("step");
            if (d && c.type === i.type && S === this._step) {
                v && !p ? p = this._newPolygon(h, _, i, m) : p && !v && (g.remove(p),
                p = this._polygon = null);
                var M = Es(i, !1, t);
                g.setClipPath(M),
                x && f.updateData(a, {
                    isIgnore: w,
                    clipShape: M
                }),
                a.eachItemGraphicEl(function(t) {
                    t.stopAnimation(!0)
                }),
                Ds(this._stackedOnPoints, _) && Ds(this._points, h) || (m ? this._updateAnimation(a, _, i, n, S, y) : (S && (h = Bs(h, i, S),
                _ = Bs(_, i, S)),
                d.setShape({
                    points: h
                }),
                p && p.setShape({
                    points: h,
                    stackedOnPoints: _
                })))
            } else
                x && f.updateData(a, {
                    isIgnore: w,
                    clipShape: Es(i, !1, t)
                }),
                S && (h = Bs(h, i, S),
                _ = Bs(_, i, S)),
                d = this._newPolyline(h, i, m),
                v && (p = this._newPolygon(h, _, i, m)),
                g.setClipPath(Es(i, !0, t));
            var I = Ns(a, i) || a.getVisual("color");
            d.useStyle(o(s.getLineStyle(), {
                fill: "none",
                stroke: I,
                lineJoin: "bevel"
            }));
            var T = t.get("smooth");
            if (T = ks(t.get("smooth")),
            d.setShape({
                smooth: T,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }),
            p) {
                var C = a.getCalculationInfo("stackedOnSeries")
                  , D = 0;
                p.useStyle(o(l.getAreaStyle(), {
                    fill: I,
                    opacity: .7,
                    lineJoin: "bevel"
                })),
                C && (D = ks(C.get("smooth"))),
                p.setShape({
                    smooth: T,
                    stackedOnSmooth: D,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = a,
            this._coordSys = i,
            this._stackedOnPoints = _,
            this._points = h,
            this._step = S,
            this._valueOrigin = y
        },
        dispose: function() {},
        highlight: function(t, e, n, i) {
            var r = t.getData()
              , a = pn(r, i);
            if (!(a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s)
                        return;
                    (o = new fs(r,a)).position = s,
                    o.setZ(t.get("zlevel"), t.get("z")),
                    o.ignore = isNaN(s[0]) || isNaN(s[1]),
                    o.__temp = !0,
                    r.setItemGraphicEl(a, o),
                    o.stopSymbolAnimation(!0),
                    this.group.add(o)
                }
                o.highlight()
            } else
                Pa.prototype.highlight.call(this, t, e, n, i)
        },
        downplay: function(t, e, n, i) {
            var r = t.getData()
              , a = pn(r, i);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null),
                this.group.remove(o)) : o.downplay())
            } else
                Pa.prototype.downplay.call(this, t, e, n, i)
        },
        _newPolyline: function(t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e),
            e = new Kp({
                shape: {
                    points: t
                },
                silent: !0,
                z2: 10
            }),
            this._lineGroup.add(e),
            this._polyline = e,
            e
        },
        _newPolygon: function(t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n),
            n = new Qp({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                silent: !0
            }),
            this._lineGroup.add(n),
            this._polygon = n,
            n
        },
        _getSymbolIgnoreFunc: function(t, e) {
            var n = e.getAxesByScale("ordinal")[0];
            if (n && n.isLabelIgnored)
                return m(n.isLabelIgnored, n)
        },
        _updateAnimation: function(t, e, n, i, r, a) {
            var o = this._polyline
              , s = this._polygon
              , l = t.hostModel
              , h = Gp(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a)
              , u = h.current
              , c = h.stackedOnCurrent
              , f = h.next
              , d = h.stackedOnNext;
            r && (u = Bs(h.current, n, r),
            c = Bs(h.stackedOnCurrent, n, r),
            f = Bs(h.next, n, r),
            d = Bs(h.stackedOnNext, n, r)),
            o.shape.__points = h.current,
            o.shape.points = u,
            Xi(o, {
                shape: {
                    points: f
                }
            }, l),
            s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }),
            Xi(s, {
                shape: {
                    points: f,
                    stackedOnPoints: d
                }
            }, l));
            for (var p = [], g = h.status, m = 0; m < g.length; m++)
                if ("=" === g[m].cmd) {
                    var v = t.getItemGraphicEl(g[m].idx1);
                    v && p.push({
                        el: v,
                        ptIdx: m
                    })
                }
            o.animators && o.animators.length && o.animators[0].during(function() {
                for (var t = 0; t < p.length; t++)
                    p[t].el.attr("position", o.shape.__points[p[t].ptIdx])
            })
        },
        remove: function(t) {
            var e = this.group
              , n = this._data;
            this._lineGroup.removeAll(),
            this._symbolDraw.remove(!0),
            n && n.eachItemGraphicEl(function(t, i) {
                t.__temp && (e.remove(t),
                n.setItemGraphicEl(i, null))
            }),
            this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var Jp = {
        average: function(t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++)
                isNaN(t[i]) || (e += t[i],
                n++);
            return 0 === n ? NaN : e / n
        },
        sum: function(t) {
            for (var e = 0, n = 0; n < t.length; n++)
                e += t[n] || 0;
            return e
        },
        max: function(t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++)
                t[n] > e && (e = t[n]);
            return e
        },
        min: function(t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++)
                t[n] < e && (e = t[n]);
            return e
        },
        nearest: function(t) {
            return t[0]
        }
    }
      , tg = function(t, e) {
        return Math.round(t.length / 2)
    };
    Rs.prototype.parse = function(t) {
        return t
    }
    ,
    Rs.prototype.getSetting = function(t) {
        return this._setting[t]
    }
    ,
    Rs.prototype.contain = function(t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }
    ,
    Rs.prototype.normalize = function(t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }
    ,
    Rs.prototype.scale = function(t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }
    ,
    Rs.prototype.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]),
        t[1] > e[1] && (e[1] = t[1])
    }
    ,
    Rs.prototype.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }
    ,
    Rs.prototype.getExtent = function() {
        return this._extent.slice()
    }
    ,
    Rs.prototype.setExtent = function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t),
        isNaN(e) || (n[1] = e)
    }
    ,
    Rs.prototype.getTicksLabels = function() {
        for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++)
            t.push(this.getLabel(e[n]));
        return t
    }
    ,
    Rs.prototype.isBlank = function() {
        return this._isBlank
    }
    ,
    Rs.prototype.setBlank = function(t) {
        this._isBlank = t
    }
    ,
    bn(Rs),
    Tn(Rs, {
        registerWhenExtend: !0
    }),
    zs.createByAxisModel = function(t) {
        var e = t.option
          , n = e.data
          , i = n && d(n, Vs);
        return new zs({
            categories: i,
            needCollect: !i,
            deduplication: !1 !== e.dedplication
        })
    }
    ;
    var eg = zs.prototype;
    eg.getOrdinal = function(t) {
        return Fs(this).get(t)
    }
    ,
    eg.parseAndCollect = function(t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n)
            return t;
        if (n && !this._deduplication)
            return e = this.categories.length,
            this.categories[e] = t,
            e;
        var i = Fs(this);
        return null == (e = i.get(t)) && (n ? (e = this.categories.length,
        this.categories[e] = t,
        i.set(t, e)) : e = NaN),
        e
    }
    ;
    var ng = Rs.prototype
      , ig = Rs.extend({
        type: "ordinal",
        init: function(t, e) {
            t && !y(t) || (t = new zs({
                categories: t
            })),
            this._ordinalMeta = t,
            this._extent = e || [0, t.categories.length - 1]
        },
        parse: function(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        },
        contain: function(t) {
            return t = this.parse(t),
            ng.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        },
        normalize: function(t) {
            return ng.normalize.call(this, this.parse(t))
        },
        scale: function(t) {
            return Math.round(ng.scale.call(this, t))
        },
        getTicks: function() {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
                t.push(n),
                n++;
            return t
        },
        getLabel: function(t) {
            return this._ordinalMeta.categories[t]
        },
        count: function() {
            return this._extent[1] - this._extent[0] + 1
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        },
        niceTicks: R,
        niceExtent: R
    });
    ig.create = function() {
        return new ig
    }
    ;
    var rg = nr
      , ag = nr
      , og = Rs.extend({
        type: "interval",
        _interval: 0,
        _intervalPrecision: 2,
        setExtent: function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)),
            isNaN(e) || (n[1] = parseFloat(e))
        },
        unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]),
            t[1] > e[1] && (e[1] = t[1]),
            og.prototype.setExtent.call(this, e[0], e[1])
        },
        getInterval: function() {
            return this._interval
        },
        setInterval: function(t) {
            this._interval = t,
            this._niceExtent = this._extent.slice(),
            this._intervalPrecision = Hs(t)
        },
        getTicks: function() {
            return Xs(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        },
        getTicksLabels: function() {
            for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++)
                t.push(this.getLabel(e[n]));
            return t
        },
        getLabel: function(t, e) {
            if (null == t)
                return "";
            var n = e && e.precision;
            return null == n ? n = ir(t) || 0 : "auto" === n && (n = this._intervalPrecision),
            t = ag(t, n, !0),
            fr(t)
        },
        niceTicks: function(t, e, n) {
            t = t || 5;
            var i = this._extent
              , r = i[1] - i[0];
            if (isFinite(r)) {
                r < 0 && (r = -r,
                i.reverse());
                var a = Ws(i, t, e, n);
                this._intervalPrecision = a.intervalPrecision,
                this._interval = a.interval,
                this._niceExtent = a.niceTickExtent
            }
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1])
                if (0 !== e[0]) {
                    var n = e[0];
                    t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2,
                    e[0] -= n / 2)
                } else
                    e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0,
            e[1] = 1),
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = ag(Math.floor(e[0] / r) * r)),
            t.fixMax || (e[1] = ag(Math.ceil(e[1] / r) * r))
        }
    });
    og.create = function() {
        return new og
    }
    ;
    var sg = "__ec_stack_"
      , lg = og.prototype
      , hg = Math.ceil
      , ug = Math.floor
      , cg = function(t, e, n, i) {
        for (; n < i; ) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r
        }
        return n
    }
      , fg = og.extend({
        type: "time",
        getLabel: function(t) {
            var e = this._stepLvl
              , n = new Date(t);
            return vr(e[0], n, this.getSetting("useUTC"))
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= 864e5,
            e[1] += 864e5),
            e[1] === -1 / 0 && e[0] === 1 / 0) {
                var n = new Date;
                e[1] = +new Date(n.getFullYear(),n.getMonth(),n.getDate()),
                e[0] = e[1] - 864e5
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = nr(ug(e[0] / i) * i)),
            t.fixMax || (e[1] = nr(hg(e[1] / i) * i))
        },
        niceTicks: function(t, e, n) {
            t = t || 10;
            var i = this._extent
              , r = i[1] - i[0]
              , a = r / t;
            null != e && a < e && (a = e),
            null != n && a > n && (a = n);
            var o = dg.length
              , s = cg(dg, a, 0, o)
              , l = dg[Math.min(s, o - 1)]
              , h = l[1];
            "year" === l[0] && (h *= cr(r / h / t, !0));
            var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3
              , c = [Math.round(hg((i[0] - u) / h) * h + u), Math.round(ug((i[1] - u) / h) * h + u)];
            qs(c, i),
            this._stepLvl = l,
            this._interval = h,
            this._niceExtent = c
        },
        parse: function(t) {
            return +lr(t)
        }
    });
    f(["contain", "normalize"], function(t) {
        fg.prototype[t] = function(e) {
            return lg[t].call(this, this.parse(e))
        }
    });
    var dg = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 36288e5], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];
    fg.create = function(t) {
        return new fg({
            useUTC: t.ecModel.get("useUTC")
        })
    }
    ;
    var pg = Rs.prototype
      , gg = og.prototype
      , mg = ir
      , vg = nr
      , yg = Math.floor
      , _g = Math.ceil
      , xg = Math.pow
      , wg = Math.log
      , bg = Rs.extend({
        type: "log",
        base: 10,
        $constructor: function() {
            Rs.apply(this, arguments),
            this._originalScale = new og
        },
        getTicks: function() {
            var t = this._originalScale
              , e = this._extent
              , n = t.getExtent();
            return d(gg.getTicks.call(this), function(i) {
                var r = nr(xg(this.base, i));
                return r = i === e[0] && t.__fixMin ? $s(r, n[0]) : r,
                r = i === e[1] && t.__fixMax ? $s(r, n[1]) : r
            }, this)
        },
        getLabel: gg.getLabel,
        scale: function(t) {
            return t = pg.scale.call(this, t),
            xg(this.base, t)
        },
        setExtent: function(t, e) {
            var n = this.base;
            t = wg(t) / wg(n),
            e = wg(e) / wg(n),
            gg.setExtent.call(this, t, e)
        },
        getExtent: function() {
            var t = this.base
              , e = pg.getExtent.call(this);
            e[0] = xg(t, e[0]),
            e[1] = xg(t, e[1]);
            var n = this._originalScale
              , i = n.getExtent();
            return n.__fixMin && (e[0] = $s(e[0], i[0])),
            n.__fixMax && (e[1] = $s(e[1], i[1])),
            e
        },
        unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = wg(t[0]) / wg(e),
            t[1] = wg(t[1]) / wg(e),
            pg.unionExtent.call(this, t)
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        },
        niceTicks: function(t) {
            t = t || 10;
            var e = this._extent
              , n = e[1] - e[0];
            if (!(n === 1 / 0 || n <= 0)) {
                var i = hr(n);
                for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0; )
                    i *= 10;
                var r = [nr(_g(e[0] / i) * i), nr(yg(e[1] / i) * i)];
                this._interval = i,
                this._niceExtent = r
            }
        },
        niceExtent: function(t) {
            gg.niceExtent.call(this, t);
            var e = this._originalScale;
            e.__fixMin = t.fixMin,
            e.__fixMax = t.fixMax
        }
    });
    f(["contain", "normalize"], function(t) {
        bg.prototype[t] = function(e) {
            return e = wg(e) / wg(this.base),
            pg[t].call(this, e)
        }
    }),
    bg.create = function() {
        return new bg
    }
    ;
    var Sg = function(t) {
        this._axes = {},
        this._dimList = [],
        this.name = t || ""
    };
    Sg.prototype = {
        constructor: Sg,
        type: "cartesian",
        getAxis: function(t) {
            return this._axes[t]
        },
        getAxes: function() {
            return d(this._dimList, il, this)
        },
        getAxesByScale: function(t) {
            return t = t.toLowerCase(),
            g(this.getAxes(), function(e) {
                return e.scale.type === t
            })
        },
        addAxis: function(t) {
            var e = t.dim;
            this._axes[e] = t,
            this._dimList.push(e)
        },
        dataToCoord: function(t) {
            return this._dataCoordConvert(t, "dataToCoord")
        },
        coordToData: function(t) {
            return this._dataCoordConvert(t, "coordToData")
        },
        _dataCoordConvert: function(t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var a = n[r]
                  , o = this._axes[a];
                i[a] = o[e](t[a])
            }
            return i
        }
    },
    rl.prototype = {
        constructor: rl,
        type: "cartesian2d",
        dimensions: ["x", "y"],
        getBaseAxis: function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        },
        containPoint: function(t) {
            var e = this.getAxis("x")
              , n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        },
        containData: function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        },
        dataToPoint: function(t, e, n) {
            var i = this.getAxis("x")
              , r = this.getAxis("y");
            return n = n || [],
            n[0] = i.toGlobalCoord(i.dataToCoord(t[0])),
            n[1] = r.toGlobalCoord(r.dataToCoord(t[1])),
            n
        },
        clampData: function(t, e) {
            var n = this.getAxis("x").scale.getExtent()
              , i = this.getAxis("y").scale.getExtent();
            return e = e || [],
            e[0] = Math.min(Math.max(Math.min(n[0], n[1]), t[0]), Math.max(n[0], n[1])),
            e[1] = Math.min(Math.max(Math.min(i[0], i[1]), t[1]), Math.max(i[0], i[1])),
            e
        },
        pointToData: function(t, e) {
            var n = this.getAxis("x")
              , i = this.getAxis("y");
            return e = e || [],
            e[0] = n.coordToData(n.toLocalCoord(t[0])),
            e[1] = i.coordToData(i.toLocalCoord(t[1])),
            e
        },
        getOtherAxis: function(t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }
    },
    h(rl, Sg);
    var Mg = tr
      , Ig = [0, 1]
      , Tg = function(t, e, n) {
        this.dim = t,
        this.scale = e,
        this._extent = n || [0, 0],
        this.inverse = !1,
        this.onBand = !1,
        this._labelInterval
    };
    Tg.prototype = {
        constructor: Tg,
        contain: function(t) {
            var e = this._extent
              , n = Math.min(e[0], e[1])
              , i = Math.max(e[0], e[1]);
            return t >= n && t <= i
        },
        containData: function(t) {
            return this.contain(this.dataToCoord(t))
        },
        getExtent: function() {
            return this._extent.slice()
        },
        getPixelPrecision: function(t) {
            return rr(t || this.scale.getExtent(), this._extent)
        },
        setExtent: function(t, e) {
            var n = this._extent;
            n[0] = t,
            n[1] = e
        },
        dataToCoord: function(t, e) {
            var n = this._extent
              , i = this.scale;
            return t = i.normalize(t),
            this.onBand && "ordinal" === i.type && al(n = n.slice(), i.count()),
            Mg(t, Ig, n, e)
        },
        coordToData: function(t, e) {
            var n = this._extent
              , i = this.scale;
            this.onBand && "ordinal" === i.type && al(n = n.slice(), i.count());
            var r = Mg(t, n, Ig, e);
            return this.scale.scale(r)
        },
        pointToData: function(t, e) {},
        getTicksCoords: function(t) {
            if (this.onBand && !t) {
                for (var e = this.getBands(), n = [], i = 0; i < e.length; i++)
                    n.push(e[i][0]);
                return e[i - 1] && n.push(e[i - 1][1]),
                n
            }
            return d(this.scale.getTicks(), this.dataToCoord, this)
        },
        getLabelsCoords: function() {
            return d(this.scale.getTicks(), this.dataToCoord, this)
        },
        getBands: function() {
            for (var t = this.getExtent(), e = [], n = this.scale.count(), i = t[0], r = t[1] - i, a = 0; a < n; a++)
                e.push([r * a / n + i, r * (a + 1) / n + i]);
            return e
        },
        getBandWidth: function() {
            var t = this._extent
              , e = this.scale.getExtent()
              , n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        },
        isHorizontal: null,
        getRotate: null,
        getLabelInterval: function() {
            var t = this._labelInterval;
            if (!t) {
                var e = this.model
                  , n = e.getModel("axisLabel");
                t = n.get("interval"),
                "category" !== this.type || null != t && "auto" !== t || (t = tl(d(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), n.getFont(), this.getRotate ? this.getRotate() : this.isHorizontal && !this.isHorizontal() ? 90 : 0, n.get("rotate"))),
                this._labelInterval = t
            }
            return t
        }
    };
    var Cg = function(t, e, n, i, r) {
        Tg.call(this, t, e, n),
        this.type = i || "value",
        this.position = r || "bottom"
    };
    Cg.prototype = {
        constructor: Cg,
        index: 0,
        onZero: !1,
        model: null,
        isHorizontal: function() {
            var t = this.position;
            return "top" === t || "bottom" === t
        },
        getGlobalExtent: function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]),
            e[1] = this.toGlobalCoord(e[1]),
            t && e[0] > e[1] && e.reverse(),
            e
        },
        getOtherAxis: function() {
            this.grid.getOtherAxis()
        },
        isLabelIgnored: function(t) {
            if ("category" === this.type) {
                var e = this.getLabelInterval();
                return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
            }
        },
        pointToData: function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        },
        toLocalCoord: null,
        toGlobalCoord: null
    },
    h(Cg, Tg);
    var Dg = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#333",
                width: 1,
                type: "solid"
            },
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: ["#ccc"],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            }
        }
    }
      , kg = {};
    kg.categoryAxis = i({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, Dg),
    kg.valueAxis = i({
        boundaryGap: [0, 0],
        splitNumber: 5
    }, Dg),
    kg.timeAxis = o({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, kg.valueAxis),
    kg.logAxis = o({
        scale: !0,
        logBase: 10
    }, kg.valueAxis);
    var Ag = ["value", "category", "time", "log"]
      , Lg = function(t, e, n, a) {
        f(Ag, function(o) {
            e.extend({
                type: t + "Axis." + o,
                mergeDefaultAndTheme: function(e, r) {
                    var a = this.layoutMode
                      , s = a ? wr(e) : {};
                    i(e, r.getTheme().get(o + "Axis")),
                    i(e, this.getDefaultOption()),
                    e.type = n(t, e),
                    a && xr(e, s, a)
                },
                optionUpdated: function() {
                    "category" === this.option.type && (this.__ordinalMeta = zs.createByAxisModel(this))
                },
                getCategories: function() {
                    if ("category" === this.option.type)
                        return this.__ordinalMeta.categories
                },
                getOrdinalMeta: function() {
                    return this.__ordinalMeta
                },
                defaultOption: r([{}, kg[o + "Axis"], a], !0)
            })
        }),
        Ef.registerSubTypeDefaulter(t + "Axis", v(n, t))
    }
      , Pg = {
        getFormattedLabels: function() {
            return el(this.axis, this.get("axisLabel.formatter"))
        },
        getMin: function(t) {
            var e = this.option
              , n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)),
            n
        },
        getMax: function(t) {
            var e = this.option
              , n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)),
            n
        },
        getNeedCrossZero: function() {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale
        },
        getCoordSysModel: R,
        setRange: function(t, e) {
            this.option.rangeStart = t,
            this.option.rangeEnd = e
        },
        resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null
        }
    }
      , Og = Ef.extend({
        type: "cartesian2dAxis",
        axis: null,
        init: function() {
            Og.superApply(this, "init", arguments),
            this.resetRange()
        },
        mergeOption: function() {
            Og.superApply(this, "mergeOption", arguments),
            this.resetRange()
        },
        restoreData: function() {
            Og.superApply(this, "restoreData", arguments),
            this.resetRange()
        },
        getCoordSysModel: function() {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    i(Og.prototype, Pg);
    var Eg = {
        offset: 0
    };
    Lg("x", Og, ol, Eg),
    Lg("y", Og, ol, Eg),
    Ef.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var Bg = f
      , Ng = function(t) {
        var e = t.scale.getExtent()
          , n = e[0]
          , i = e[1];
        return !(n > 0 && i > 0 || n < 0 && i < 0)
    }
      , Rg = function(t, e) {
        var n = Ks(t, e)
          , i = null != e.getMin()
          , r = null != e.getMax()
          , a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(n[0], n[1]),
        t.niceExtent({
            splitNumber: a,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }
      , zg = ul.prototype;
    zg.type = "grid",
    zg.axisPointerEnabled = !0,
    zg.getRect = function() {
        return this._rect
    }
    ,
    zg.update = function(t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model),
        Bg(n.x, function(t) {
            Rg(t.scale, t.model)
        }),
        Bg(n.y, function(t) {
            Rg(t.scale, t.model)
        }),
        Bg(n.x, function(t) {
            cl(n, "y", t)
        }),
        Bg(n.y, function(t) {
            cl(n, "x", t)
        }),
        this.resize(this.model, e)
    }
    ,
    zg.resize = function(t, e, n) {
        function i() {
            Bg(a, function(t) {
                var e = t.isHorizontal()
                  , n = e ? [0, r.width] : [0, r.height]
                  , i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]),
                dl(t, e ? r.x : r.y)
            })
        }
        var r = _r(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        });
        this._rect = r;
        var a = this._axesList;
        i(),
        !n && t.get("containLabel") && (Bg(a, function(t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = hl(t);
                if (e) {
                    var n = t.isHorizontal() ? "height" : "width"
                      , i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i,
                    "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
                }
            }
        }),
        i())
    }
    ,
    zg.getAxis = function(t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e)
                for (var i in n)
                    if (n.hasOwnProperty(i))
                        return n[i];
            return n[e]
        }
    }
    ,
    zg.getAxes = function() {
        return this._axesList.slice()
    }
    ,
    zg.getCartesian = function(t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
        }
        w(t) && (e = t.yAxisIndex,
        t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++)
            if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e)
                return r[i]
    }
    ,
    zg.getCartesians = function() {
        return this._coordsList.slice()
    }
    ,
    zg.convertToPixel = function(t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
    }
    ,
    zg.convertFromPixel = function(t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
    }
    ,
    zg._findConvertTarget = function(t, e) {
        var n, i, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0], o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, h = this._coordsList;
        return r ? l(h, n = r.coordinateSystem) < 0 && (n = null) : a && o ? n = this.getCartesian(a.componentIndex, o.componentIndex) : a ? i = this.getAxis("x", a.componentIndex) : o ? i = this.getAxis("y", o.componentIndex) : s && s.coordinateSystem === this && (n = this._coordsList[0]),
        {
            cartesian: n,
            axis: i
        }
    }
    ,
    zg.containPoint = function(t) {
        var e = this._coordsList[0];
        if (e)
            return e.containPoint(t)
    }
    ,
    zg._initCartesian = function(t, e, n) {
        function i(n) {
            return function(i, s) {
                if (sl(i, t, e)) {
                    var l = i.get("position");
                    "x" === n ? "top" !== l && "bottom" !== l && r[l = "bottom"] && (l = "top" === l ? "bottom" : "top") : "left" !== l && "right" !== l && r[l = "left"] && (l = "left" === l ? "right" : "left"),
                    r[l] = !0;
                    var h = new Cg(n,Js(i),[0, 0],i.get("type"),l)
                      , u = "category" === h.type;
                    h.onBand = u && i.get("boundaryGap"),
                    h.inverse = i.get("inverse"),
                    h.onZero = i.get("axisLine.onZero"),
                    h.onZeroAxisIndex = i.get("axisLine.onZeroAxisIndex"),
                    i.axis = h,
                    h.model = i,
                    h.grid = this,
                    h.index = s,
                    this._axesList.push(h),
                    a[n][s] = h,
                    o[n]++
                }
            }
        }
        var r = {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        }
          , a = {
            x: {},
            y: {}
        }
          , o = {
            x: 0,
            y: 0
        };
        if (e.eachComponent("xAxis", i("x"), this),
        e.eachComponent("yAxis", i("y"), this),
        !o.x || !o.y)
            return this._axesMap = {},
            void (this._axesList = []);
        this._axesMap = a,
        Bg(a.x, function(e, n) {
            Bg(a.y, function(i, r) {
                var a = "x" + n + "y" + r
                  , o = new rl(a);
                o.grid = this,
                o.model = t,
                this._coordsMap[a] = o,
                this._coordsList.push(o),
                o.addAxis(e),
                o.addAxis(i)
            }, this)
        }, this)
    }
    ,
    zg._updateScale = function(t, e) {
        function n(t, e, n) {
            Bg(t.mapDimension(e.dim, !0), function(n) {
                e.scale.unionExtentFromData(t, n)
            })
        }
        f(this._axesList, function(t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }),
        t.eachSeries(function(i) {
            if (gl(i)) {
                var r = pl(i)
                  , a = r[0]
                  , o = r[1];
                if (!sl(a, e, t) || !sl(o, e, t))
                    return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex)
                  , l = i.getData()
                  , h = s.getAxis("x")
                  , u = s.getAxis("y");
                "list" === l.type && (n(l, h),
                n(l, u))
            }
        }, this)
    }
    ,
    zg.getTooltipAxes = function(t) {
        var e = []
          , n = [];
        return Bg(this.getCartesians(), function(i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis()
              , a = i.getOtherAxis(r);
            l(e, r) < 0 && e.push(r),
            l(n, a) < 0 && n.push(a)
        }),
        {
            baseAxes: e,
            otherAxes: n
        }
    }
    ;
    var Fg = ["xAxis", "yAxis"];
    ul.create = function(t, e) {
        var n = [];
        return t.eachComponent("grid", function(i, r) {
            var a = new ul(i,t,e);
            a.name = "grid_" + r,
            a.resize(i, e, !0),
            i.coordinateSystem = a,
            n.push(a)
        }),
        t.eachSeries(function(t) {
            if (gl(t)) {
                var e = pl(t)
                  , n = e[0]
                  , i = e[1]
                  , r = n.getCoordSysModel().coordinateSystem;
                t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex)
            }
        }),
        n
    }
    ,
    ul.dimensions = ul.prototype.dimensions = rl.prototype.dimensions,
    Yr.register("cartesian2d", ul);
    var Vg = Math.PI
      , Wg = function(t, e) {
        this.opt = e,
        this.axisModel = t,
        o(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }),
        this.group = new Wh;
        var n = new Wh({
            position: e.position.slice(),
            rotation: e.rotation
        });
        n.updateTransform(),
        this._transform = n.transform,
        this._dumbGroup = n
    };
    Wg.prototype = {
        constructor: Wg,
        hasBuilder: function(t) {
            return !!Hg[t]
        },
        add: function(t) {
            Hg[t].call(this)
        },
        getGroup: function() {
            return this.group
        }
    };
    var Hg = {
        axisLine: function() {
            var t = this.opt
              , e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent()
                  , i = this._transform
                  , r = [n[0], 0]
                  , o = [n[1], 0];
                i && (Y(r, r, i),
                Y(o, o, i));
                var s = a({
                    lineCap: "round"
                }, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new ef(xi({
                    anid: "line",
                    shape: {
                        x1: r[0],
                        y1: r[1],
                        x2: o[0],
                        y2: o[1]
                    },
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol")
                  , h = e.get("axisLine.symbolSize")
                  , u = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof u && (u = [u, u]),
                null != l) {
                    "string" == typeof l && (l = [l, l]),
                    "string" != typeof h && "number" != typeof h || (h = [h, h]);
                    var c = h[0]
                      , d = h[1];
                    f([{
                        rotate: t.rotation + Math.PI / 2,
                        offset: u[0],
                        r: 0
                    }, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: u[1],
                        r: Math.sqrt((r[0] - o[0]) * (r[0] - o[0]) + (r[1] - o[1]) * (r[1] - o[1]))
                    }], function(e, n) {
                        if ("none" !== l[n] && null != l[n]) {
                            var i = ls(l[n], -c / 2, -d / 2, c, d, s.stroke, !0)
                              , a = e.r + e.offset
                              , o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                            i.attr({
                                rotation: e.rotate,
                                position: o,
                                silent: !0
                            }),
                            this.group.add(i)
                        }
                    }, this)
                }
            }
        },
        axisTickLabel: function() {
            var t = this.axisModel
              , e = this.opt
              , n = Sl(this, t, e);
            _l(t, Ml(this, t, e), n)
        },
        axisName: function() {
            var t = this.opt
              , e = this.axisModel
              , n = T(t.axisName, e.get("name"));
            if (n) {
                var i, r = e.get("nameLocation"), o = t.nameDirection, s = e.getModel("nameTextStyle"), l = e.get("nameGap") || 0, h = this.axisModel.axis.getExtent(), u = h[0] > h[1] ? -1 : 1, c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, bl(r) ? t.labelOffset + o * l : 0], f = e.get("nameRotate");
                null != f && (f = f * Vg / 180);
                var d;
                bl(r) ? i = Gg(t.rotation, null != f ? f : t.rotation, o) : (i = vl(t, r, f || 0, h),
                null != (d = t.axisNameAvailableWidth) && (d = Math.abs(d / Math.sin(i.rotation)),
                !isFinite(d) && (d = null)));
                var p = s.getFont()
                  , g = e.get("nameTruncate", !0) || {}
                  , m = g.ellipsis
                  , v = T(t.nameTruncateMaxWidth, g.maxWidth, d)
                  , y = null != m && null != v ? Df(n, v, p, m, {
                    minChar: 2,
                    placeholder: g.placeholder
                }) : n
                  , _ = e.get("tooltip", !0)
                  , x = e.mainType
                  , w = {
                    componentType: x,
                    name: n,
                    $vars: ["name"]
                };
                w[x + "Index"] = e.componentIndex;
                var b = new qc({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: y,
                    position: c,
                    rotation: i.rotation,
                    silent: yl(e),
                    z2: 1,
                    tooltip: _ && _.show ? a({
                        content: n,
                        formatter: function() {
                            return n
                        },
                        formatterParams: w
                    }, _) : null
                });
                Ni(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: i.textAlign,
                    textVerticalAlign: i.textVerticalAlign
                }),
                e.get("triggerEvent") && (b.eventData = ml(e),
                b.eventData.targetType = "axisName",
                b.eventData.name = n),
                this._dumbGroup.add(b),
                b.updateTransform(),
                this.group.add(b),
                b.decomposeTransform()
            }
        }
    }
      , Gg = Wg.innerTextLayout = function(t, e, n) {
        var i, r, a = or(e - t);
        return sr(a) ? (r = n > 0 ? "top" : "bottom",
        i = "center") : sr(a - Vg) ? (r = n > 0 ? "bottom" : "top",
        i = "center") : (r = "middle",
        i = a > 0 && a < Vg ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"),
        {
            rotation: a,
            textAlign: i,
            textVerticalAlign: r
        }
    }
      , qg = Wg.ifIgnoreOnTick = function(t, e, n, i, r, a) {
        if (0 === e && r || e === i - 1 && a)
            return !1;
        var o, s = t.scale;
        return "ordinal" === s.type && ("function" == typeof n ? (o = s.getTicks()[e],
        !n(o, s.getLabel(o))) : e % (n + 1))
    }
      , Xg = Wg.getInterval = function(t, e) {
        var n = t.get("interval");
        return null != n && "auto" != n || (n = e),
        n
    }
      , Ug = Oo({
        type: "axis",
        _axisPointer: null,
        axisPointerClass: null,
        render: function(t, e, n, i) {
            this.axisPointerClass && Il(t),
            Ug.superApply(this, "render", arguments),
            Al(this, t, 0, n, 0, !0)
        },
        updateAxisPointer: function(t, e, n, i, r) {
            Al(this, t, 0, n, 0, !1)
        },
        remove: function(t, e) {
            var n = this._axisPointer;
            n && n.remove(e),
            Ug.superApply(this, "remove", arguments)
        },
        dispose: function(t, e) {
            Ll(this, e),
            Ug.superApply(this, "dispose", arguments)
        }
    })
      , Yg = [];
    Ug.registerAxisPointerClass = function(t, e) {
        Yg[t] = e
    }
    ,
    Ug.getAxisPointerClass = function(t) {
        return t && Yg[t]
    }
    ;
    var Zg = Wg.ifIgnoreOnTick
      , jg = Wg.getInterval
      , $g = ["axisLine", "axisTickLabel", "axisName"]
      , Kg = ["splitArea", "splitLine"]
      , Qg = Ug.extend({
        type: "cartesianAxis",
        axisPointerClass: "CartesianAxisPointer",
        render: function(t, e, n, i) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new Wh,
            this.group.add(this._axisGroup),
            t.get("show")) {
                var a = t.getCoordSysModel()
                  , o = Pl(a, t)
                  , s = new Wg(t,o);
                f($g, s.add, s),
                this._axisGroup.add(s.getGroup()),
                f(Kg, function(e) {
                    t.get(e + ".show") && this["_" + e](t, a, o.labelInterval)
                }, this),
                Zi(r, this._axisGroup, t),
                Qg.superCall(this, "render", t, e, n, i)
            }
        },
        _splitLine: function(t, e, n) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var r = t.getModel("splitLine")
                  , a = r.getModel("lineStyle")
                  , s = a.get("color")
                  , l = jg(r, n);
                s = y(s) ? s : [s];
                for (var h = e.coordinateSystem.getRect(), u = i.isHorizontal(), c = 0, f = i.getTicksCoords(), d = i.scale.getTicks(), p = t.get("axisLabel.showMinLabel"), g = t.get("axisLabel.showMaxLabel"), m = [], v = [], _ = a.getLineStyle(), x = 0; x < f.length; x++)
                    if (!Zg(i, x, l, f.length, p, g)) {
                        var w = i.toGlobalCoord(f[x]);
                        u ? (m[0] = w,
                        m[1] = h.y,
                        v[0] = w,
                        v[1] = h.y + h.height) : (m[0] = h.x,
                        m[1] = w,
                        v[0] = h.x + h.width,
                        v[1] = w);
                        var b = c++ % s.length;
                        this._axisGroup.add(new ef(xi({
                            anid: "line_" + d[x],
                            shape: {
                                x1: m[0],
                                y1: m[1],
                                x2: v[0],
                                y2: v[1]
                            },
                            style: o({
                                stroke: s[b]
                            }, _),
                            silent: !0
                        })))
                    }
            }
        },
        _splitArea: function(t, e, n) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var r = t.getModel("splitArea")
                  , a = r.getModel("areaStyle")
                  , s = a.get("color")
                  , l = e.coordinateSystem.getRect()
                  , h = i.getTicksCoords()
                  , u = i.scale.getTicks()
                  , c = i.toGlobalCoord(h[0])
                  , f = i.toGlobalCoord(h[0])
                  , d = 0
                  , p = jg(r, n)
                  , g = a.getAreaStyle();
                s = y(s) ? s : [s];
                for (var m = t.get("axisLabel.showMinLabel"), v = t.get("axisLabel.showMaxLabel"), _ = 1; _ < h.length; _++)
                    if (!(Zg(i, _, p, h.length, m, v) && _ < h.length - 1)) {
                        var x, w, b, S, M = i.toGlobalCoord(h[_]);
                        i.isHorizontal() ? (x = c,
                        w = l.y,
                        b = M - x,
                        S = l.height) : (x = l.x,
                        w = f,
                        b = l.width,
                        S = M - w);
                        var I = d++ % s.length;
                        this._axisGroup.add(new tf({
                            anid: "area_" + u[_],
                            shape: {
                                x: x,
                                y: w,
                                width: b,
                                height: S
                            },
                            style: o({
                                fill: s[I]
                            }, g),
                            silent: !0
                        })),
                        c = x + b,
                        f = w + S
                    }
            }
        }
    });
    Qg.extend({
        type: "xAxis"
    }),
    Qg.extend({
        type: "yAxis"
    }),
    Oo({
        type: "grid",
        render: function(t, e) {
            this.group.removeAll(),
            t.get("show") && this.group.add(new tf({
                shape: t.coordinateSystem.getRect(),
                style: o({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }),
    Io(function(t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }),
    ko(function(t, e, n) {
        return {
            seriesType: t,
            performRawSeries: !0,
            reset: function(t, i, r) {
                var a = t.getData()
                  , o = t.get("symbol") || e
                  , s = t.get("symbolSize");
                if (a.setVisual({
                    legendSymbol: n || o,
                    symbol: o,
                    symbolSize: s
                }),
                !i.isSeriesFiltered(t)) {
                    var l = "function" == typeof s;
                    return {
                        dataEach: a.hasItemOption || l ? function(e, n) {
                            if ("function" == typeof s) {
                                var i = t.getRawValue(n)
                                  , r = t.getDataParams(n);
                                e.setItemVisual(n, "symbolSize", s(i, r))
                            }
                            if (e.hasItemOption) {
                                var a = e.getItemModel(n)
                                  , o = a.getShallow("symbol", !0)
                                  , l = a.getShallow("symbolSize", !0);
                                null != o && e.setItemVisual(n, "symbol", o),
                                null != l && e.setItemVisual(n, "symbolSize", l)
                            }
                        }
                        : null
                    }
                }
            }
        }
    }("line", "circle", "line")),
    Do(function(t) {
        return {
            seriesType: t,
            plan: bd(),
            reset: function(t) {
                var e = t.getData()
                  , n = t.coordinateSystem
                  , i = t.pipelineContext.large;
                if (n) {
                    var r = d(n.dimensions, function(t) {
                        return e.mapDimension(t)
                    }).slice(0, 2)
                      , a = r.length;
                    return is(e, r[0], r[1]) && (r[0] = e.getCalculationInfo("stackResultDimension")),
                    is(e, r[1], r[0]) && (r[1] = e.getCalculationInfo("stackResultDimension")),
                    a && {
                        progress: function(t, e) {
                            for (var o = t.end - t.start, s = i && new Float32Array(o * a), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                                var f;
                                if (1 === a)
                                    d = e.get(r[0], l, !0),
                                    f = !isNaN(d) && n.dataToPoint(d, null, c);
                                else {
                                    var d = u[0] = e.get(r[0], l, !0)
                                      , p = u[1] = e.get(r[1], l, !0);
                                    f = !isNaN(d) && !isNaN(p) && n.dataToPoint(u, null, c)
                                }
                                i ? (s[h++] = f ? f[0] : NaN,
                                s[h++] = f ? f[1] : NaN) : e.setItemLayout(l, f && f.slice() || [NaN, NaN])
                            }
                            i && e.setLayout("symbolPoints", s)
                        }
                    }
                }
            }
        }
    }("line")),
    To(jd.PROCESSOR.STATISTIC, function(t) {
        return {
            seriesType: t,
            reset: function(t, e, n) {
                var i = t.getData()
                  , r = t.get("sampling")
                  , a = t.coordinateSystem;
                if ("cartesian2d" === a.type && r) {
                    var o = a.getBaseAxis()
                      , s = a.getOtherAxis(o)
                      , l = o.getExtent()
                      , h = l[1] - l[0]
                      , u = Math.round(i.count() / h);
                    if (u > 1) {
                        var c;
                        "string" == typeof r ? c = Jp[r] : "function" == typeof r && (c = r),
                        c && t.setData(i.downSample(s.dim, 1 / u, c, tg))
                    }
                }
            }
        }
    }("line")),
    _d.extend({
        type: "series.__base_bar__",
        getInitialData: function(t, e) {
            return rs(this.getSource(), this)
        },
        getMarkerPosition: function(t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t))
                  , i = this.getData()
                  , r = i.getLayout("offset")
                  , a = i.getLayout("size");
                return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + a / 2,
                n
            }
            return [NaN, NaN]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            itemStyle: {},
            emphasis: {}
        }
    }).extend({
        type: "series.bar",
        dependencies: ["grid", "polar"],
        brushSelector: "rect"
    });
    var Jg = zu([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]])
      , tm = {
        getBarItemStyle: function(t) {
            var e = Jg(this, t);
            if (this.getBorderLineDash) {
                var n = this.getBorderLineDash();
                n && (e.lineDash = n)
            }
            return e
        }
    }
      , em = ["itemStyle", "barBorderWidth"];
    a(ji.prototype, tm),
    Bo({
        type: "bar",
        render: function(t, e, n) {
            var i = t.get("coordinateSystem");
            return "cartesian2d" !== i && "polar" !== i || this._render(t, e, n),
            this.group
        },
        dispose: R,
        _render: function(t, e, n) {
            var i, r = this.group, a = t.getData(), o = this._data, s = t.coordinateSystem, l = s.getBaseAxis();
            "cartesian2d" === s.type ? i = l.isHorizontal() : "polar" === s.type && (i = "angle" === l.dim);
            var h = t.isAnimationEnabled() ? t : null;
            a.diff(o).add(function(e) {
                if (a.hasValue(e)) {
                    var n = a.getItemModel(e)
                      , o = im[s.type](a, e, n)
                      , l = nm[s.type](a, e, n, o, i, h);
                    a.setItemGraphicEl(e, l),
                    r.add(l),
                    Rl(l, a, e, n, o, t, i, "polar" === s.type)
                }
            }).update(function(e, n) {
                var l = o.getItemGraphicEl(n);
                if (a.hasValue(e)) {
                    var u = a.getItemModel(e)
                      , c = im[s.type](a, e, u);
                    l ? Xi(l, {
                        shape: c
                    }, h, e) : l = nm[s.type](a, e, u, c, i, h, !0),
                    a.setItemGraphicEl(e, l),
                    r.add(l),
                    Rl(l, a, e, u, c, t, i, "polar" === s.type)
                } else
                    r.remove(l)
            }).remove(function(t) {
                var e = o.getItemGraphicEl(t);
                "cartesian2d" === s.type ? e && Bl(t, h, e) : e && Nl(t, h, e)
            }).execute(),
            this._data = a
        },
        remove: function(t, e) {
            var n = this.group
              , i = this._data;
            t.get("animation") ? i && i.eachItemGraphicEl(function(e) {
                "sector" === e.type ? Nl(e.dataIndex, t, e) : Bl(e.dataIndex, t, e)
            }) : n.removeAll()
        }
    });
    var nm = {
        cartesian2d: function(t, e, n, i, r, o, s) {
            var l = new tf({
                shape: a({}, i)
            });
            if (o) {
                var h = l.shape
                  , u = r ? "height" : "width"
                  , c = {};
                h[u] = 0,
                c[u] = i[u],
                gf[s ? "updateProps" : "initProps"](l, {
                    shape: c
                }, o, e)
            }
            return l
        },
        polar: function(t, e, n, i, r, a, s) {
            var l = i.startAngle < i.endAngle
              , h = new Zc({
                shape: o({
                    clockwise: l
                }, i)
            });
            if (a) {
                var u = h.shape
                  , c = r ? "r" : "endAngle"
                  , f = {};
                u[c] = r ? 0 : i.startAngle,
                f[c] = i[c],
                gf[s ? "updateProps" : "initProps"](h, {
                    shape: f
                }, a, e)
            }
            return h
        }
    }
      , im = {
        cartesian2d: function(t, e, n) {
            var i = t.getItemLayout(e)
              , r = zl(n, i)
              , a = i.width > 0 ? 1 : -1
              , o = i.height > 0 ? 1 : -1;
            return {
                x: i.x + a * r / 2,
                y: i.y + o * r / 2,
                width: i.width - a * r,
                height: i.height - o * r
            }
        },
        polar: function(t, e, n) {
            var i = t.getItemLayout(e);
            return {
                cx: i.cx,
                cy: i.cy,
                r0: i.r0,
                r: i.r,
                startAngle: i.startAngle,
                endAngle: i.endAngle
            }
        }
    };
    Do(v(function(t, e, n) {
        var i = [];
        e.eachSeriesByType(t, function(t) {
            t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type && i.push(t)
        });
        var r = Zs(i)
          , a = {};
        f(i, function(t) {
            var e = t.getData()
              , n = t.coordinateSystem
              , i = n.getBaseAxis()
              , o = Us(t)
              , s = r[Ys(i)][o]
              , l = s.offset
              , h = s.width
              , u = n.getOtherAxis(i)
              , c = t.get("barMinHeight") || 0;
            a[o] = a[o] || [],
            e.setLayout({
                offset: l,
                size: h
            });
            for (var f = e.mapDimension(u.dim), d = e.mapDimension(i.dim), p = is(e, f, d), g = u.isHorizontal(), m = i.onZero || p ? u.toGlobalCoord(u.dataToCoord(0)) : u.getGlobalExtent()[0], v = 0, y = e.count(); v < y; v++) {
                var _ = e.get(f, v)
                  , x = e.get(d, v);
                if (!isNaN(_)) {
                    var w = _ >= 0 ? "p" : "n"
                      , b = m;
                    p && (a[o][x] || (a[o][x] = {
                        p: m,
                        n: m
                    }),
                    b = a[o][x][w]);
                    var S, M, I, T;
                    if (g)
                        S = b,
                        M = (C = n.dataToPoint([_, x]))[1] + l,
                        I = C[0] - m,
                        T = h,
                        Math.abs(I) < c && (I = (I < 0 ? -1 : 1) * c),
                        p && (a[o][x][w] += I);
                    else {
                        var C = n.dataToPoint([x, _]);
                        S = C[0] + l,
                        M = b,
                        I = h,
                        T = C[1] - m,
                        Math.abs(T) < c && (T = (T <= 0 ? -1 : 1) * c),
                        p && (a[o][x][w] += T)
                    }
                    e.setItemLayout(v, {
                        x: S,
                        y: M,
                        width: I,
                        height: T
                    })
                }
            }
        }, this)
    }, "bar")),
    ko(function(t) {
        t.eachSeriesByType("bar", function(t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        })
    });
    var rm = function(t, e, n) {
        e = y(e) && {
            coordDimensions: e
        } || a({}, e);
        var i = t.getSource()
          , r = kp(i, e)
          , o = new Tp(r,t);
        return o.initData(i, n),
        o
    }
      , am = {
        updateSelectedMap: function(t) {
            this._targetList = y(t) ? t.slice() : [],
            this._selectTargetMap = p(t || [], function(t, e) {
                return t.set(e.name, e),
                t
            }, N())
        },
        select: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            "single" === this.get("selectedMode") && this._selectTargetMap.each(function(t) {
                t.selected = !1
            }),
            n && (n.selected = !0)
        },
        unSelect: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
        },
        toggleSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            if (null != n)
                return this[n.selected ? "unSelect" : "select"](t, e),
                n.selected
        },
        isSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
        }
    }
      , om = Eo({
        type: "series.pie",
        init: function(t) {
            om.superApply(this, "init", arguments),
            this.legendDataProvider = function() {
                return this.getRawData()
            }
            ,
            this.updateSelectedMap(this._createSelectableList()),
            this._defaultLabelLine(t)
        },
        mergeOption: function(t) {
            om.superCall(this, "mergeOption", t),
            this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function(t, e) {
            return rm(this, ["value"])
        },
        _createSelectableList: function() {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); i < r; i++)
                n.push({
                    name: t.getName(i),
                    value: t.get(e, i),
                    selected: xa(t, i, "selected")
                });
            return n
        },
        getDataParams: function(t) {
            var e = this.getData()
              , n = om.superCall(this, "getDataParams", t)
              , i = [];
            return e.each(e.mapDimension("value"), function(t) {
                i.push(t)
            }),
            n.percent = ar(i, t, e.hostModel.get("percentPrecision")),
            n.$vars.push("percent"),
            n
        },
        _defaultLabelLine: function(t) {
            sn(t, "labelLine", ["show"]);
            var e = t.labelLine
              , n = t.emphasis.labelLine;
            e.show = e.show && t.label.show,
            n.show = n.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {
                rotate: !1,
                show: !0,
                position: "outer"
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1
            },
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    u(om, am);
    var sm = Wl.prototype;
    sm.updateData = function(t, e, n) {
        function i() {
            s.stopAnimation(!0),
            s.animateTo({
                shape: {
                    r: u.r + l.get("hoverOffset")
                }
            }, 300, "elasticOut")
        }
        function r() {
            s.stopAnimation(!0),
            s.animateTo({
                shape: {
                    r: u.r
                }
            }, 300, "elasticOut")
        }
        var s = this.childAt(0)
          , l = t.hostModel
          , h = t.getItemModel(e)
          , u = t.getItemLayout(e)
          , c = a({}, u);
        c.label = null,
        n ? (s.setShape(c),
        "scale" === l.getShallow("animationType") ? (s.shape.r = u.r0,
        Ui(s, {
            shape: {
                r: u.r
            }
        }, l, e)) : (s.shape.endAngle = u.startAngle,
        Xi(s, {
            shape: {
                endAngle: u.endAngle
            }
        }, l, e))) : Xi(s, {
            shape: c
        }, l, e);
        var f = t.getItemVisual(e, "color");
        s.useStyle(o({
            lineJoin: "bevel",
            fill: f
        }, h.getModel("itemStyle").getItemStyle())),
        s.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
        var d = h.getShallow("cursor");
        d && s.attr("cursor", d),
        Vl(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")),
        s.off("mouseover").off("mouseout").off("emphasis").off("normal"),
        h.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r),
        this._updateLabel(t, e),
        Ei(this)
    }
    ,
    sm._updateLabel = function(t, e) {
        var n = this.childAt(1)
          , i = this.childAt(2)
          , r = t.hostModel
          , a = t.getItemModel(e)
          , o = t.getItemLayout(e).label
          , s = t.getItemVisual(e, "color");
        Xi(n, {
            shape: {
                points: o.linePoints || [[o.x, o.y], [o.x, o.y], [o.x, o.y]]
            }
        }, r, e),
        Xi(i, {
            style: {
                x: o.x,
                y: o.y
            }
        }, r, e),
        i.attr({
            rotation: o.rotation,
            origin: [o.x, o.y],
            z2: 10
        });
        var l = a.getModel("label")
          , h = a.getModel("emphasis.label")
          , u = a.getModel("labelLine")
          , c = a.getModel("emphasis.labelLine")
          , s = t.getItemVisual(e, "color");
        Bi(i.style, i.hoverStyle = {}, l, h, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: s,
            useInsideStyle: !!o.inside
        }, {
            textAlign: o.textAlign,
            textVerticalAlign: o.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }),
        i.ignore = i.normalIgnore = !l.get("show"),
        i.hoverIgnore = !h.get("show"),
        n.ignore = n.normalIgnore = !u.get("show"),
        n.hoverIgnore = !c.get("show"),
        n.setStyle({
            stroke: s,
            opacity: t.getItemVisual(e, "opacity")
        }),
        n.setStyle(u.getModel("lineStyle").getLineStyle()),
        n.hoverStyle = c.getModel("lineStyle").getLineStyle();
        var f = u.get("smooth");
        f && !0 === f && (f = .4),
        n.setShape({
            smooth: f
        })
    }
    ,
    h(Wl, Wh);
    Pa.extend({
        type: "pie",
        init: function() {
            var t = new Wh;
            this._sectorGroup = t
        },
        render: function(t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData()
                  , a = this._data
                  , o = this.group
                  , s = e.get("animation")
                  , l = !a
                  , h = t.get("animationType")
                  , u = v(Fl, this.uid, t, s, n)
                  , c = t.get("selectedMode");
                if (r.diff(a).add(function(t) {
                    var e = new Wl(r,t);
                    l && "scale" !== h && e.eachChild(function(t) {
                        t.stopAnimation(!0)
                    }),
                    c && e.on("click", u),
                    r.setItemGraphicEl(t, e),
                    o.add(e)
                }).update(function(t, e) {
                    var n = a.getItemGraphicEl(e);
                    n.updateData(r, t),
                    n.off("click"),
                    c && n.on("click", u),
                    o.add(n),
                    r.setItemGraphicEl(t, n)
                }).remove(function(t) {
                    var e = a.getItemGraphicEl(t);
                    o.remove(e)
                }).execute(),
                s && l && r.count() > 0 && "scale" !== h) {
                    var f = r.getItemLayout(0)
                      , d = Math.max(n.getWidth(), n.getHeight()) / 2
                      , p = m(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(f.cx, f.cy, d, f.startAngle, f.clockwise, p, t))
                }
                this._data = r
            }
        },
        dispose: function() {},
        _createClipPath: function(t, e, n, i, r, a, o) {
            var s = new Zc({
                shape: {
                    cx: t,
                    cy: e,
                    r0: 0,
                    r: n,
                    startAngle: i,
                    endAngle: i,
                    clockwise: r
                }
            });
            return Ui(s, {
                shape: {
                    endAngle: i + (r ? 1 : -1) * Math.PI * 2
                }
            }, o, a),
            s
        },
        containPoint: function(t, e) {
            var n = e.getData().getItemLayout(0);
            if (n) {
                var i = t[0] - n.cx
                  , r = t[1] - n.cy
                  , a = Math.sqrt(i * i + r * r);
                return a <= n.r && a >= n.r0
            }
        }
    });
    var lm = function(t, e, n, i) {
        var r, a, o = t.getData(), s = [], l = !1;
        o.each(function(n) {
            var i, h, u, c, f = o.getItemLayout(n), d = o.getItemModel(n), p = d.getModel("label"), g = p.get("position") || d.get("emphasis.label.position"), m = d.getModel("labelLine"), v = m.get("length"), y = m.get("length2"), _ = (f.startAngle + f.endAngle) / 2, x = Math.cos(_), w = Math.sin(_);
            r = f.cx,
            a = f.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g)
                i = f.cx,
                h = f.cy,
                c = "center";
            else {
                var S = (b ? (f.r + f.r0) / 2 * x : f.r * x) + r
                  , M = (b ? (f.r + f.r0) / 2 * w : f.r * w) + a;
                if (i = S + 3 * x,
                h = M + 3 * w,
                !b) {
                    var I = S + x * (v + e - f.r)
                      , T = M + w * (v + e - f.r)
                      , C = I + (x < 0 ? -1 : 1) * y
                      , D = T;
                    i = C + (x < 0 ? -5 : 5),
                    h = D,
                    u = [[S, M], [I, T], [C, D]]
                }
                c = b ? "center" : x > 0 ? "left" : "right"
            }
            var k = p.getFont()
              , A = p.get("rotate") ? x < 0 ? -_ + Math.PI : -_ : 0
              , L = ee(t.getFormattedLabel(n, "normal") || o.getName(n), k, c, "top");
            l = !!A,
            f.label = {
                x: i,
                y: h,
                position: g,
                height: L.height,
                len: v,
                len2: y,
                linePoints: u,
                textAlign: c,
                verticalAlign: "middle",
                rotation: A,
                inside: b
            },
            b || s.push(f.label)
        }),
        !l && t.get("avoidLabelOverlap") && Gl(s, r, a, e, n, i)
    }
      , hm = 2 * Math.PI
      , um = Math.PI / 180;
    !function(t, e) {
        f(e, function(e) {
            e.update = "updateView",
            Co(e, function(n, i) {
                var r = {};
                return i.eachComponent({
                    mainType: "series",
                    subType: t,
                    query: n
                }, function(t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function(e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }),
                {
                    name: n.name,
                    selected: r
                }
            })
        })
    }("pie", [{
        type: "pieToggleSelect",
        event: "pieselectchanged",
        method: "toggleSelected"
    }, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]),
    ko(function(t) {
        return {
            getTargetSeries: function(e) {
                var n = {}
                  , i = N();
                return e.eachSeriesByType(t, function(t) {
                    t.__paletteScope = n,
                    i.set(t.uid, t)
                }),
                i
            },
            reset: function(t, e) {
                var n = t.getRawData()
                  , i = {}
                  , r = t.getData();
                r.each(function(t) {
                    var e = r.getRawIndex(t);
                    i[e] = t
                }),
                n.each(function(e) {
                    var a = i[e]
                      , o = null != a && r.getItemVisual(a, "color", !0);
                    if (o)
                        n.setItemVisual(e, "color", o);
                    else {
                        var s = n.getItemModel(e).get("itemStyle.color") || t.getColorFromPalette(n.getName(e) || e + "", t.__paletteScope, n.count());
                        n.setItemVisual(e, "color", s),
                        null != a && r.setItemVisual(a, "color", s)
                    }
                })
            }
        }
    }("pie")),
    Do(v(function(t, e, n, i) {
        e.eachSeriesByType(t, function(t) {
            var e = t.getData()
              , i = e.mapDimension("value")
              , r = t.get("center")
              , a = t.get("radius");
            y(a) || (a = [0, a]),
            y(r) || (r = [r, r]);
            var o = n.getWidth()
              , s = n.getHeight()
              , l = Math.min(o, s)
              , h = er(r[0], o)
              , u = er(r[1], s)
              , c = er(a[0], l / 2)
              , f = er(a[1], l / 2)
              , d = -t.get("startAngle") * um
              , p = t.get("minAngle") * um
              , g = 0;
            e.each(i, function(t) {
                !isNaN(t) && g++
            });
            var m = e.getSum(i)
              , v = Math.PI / (m || g) * 2
              , _ = t.get("clockwise")
              , x = t.get("roseType")
              , w = t.get("stillShowZeroSum")
              , b = e.getDataExtent(i);
            b[0] = 0;
            var S = hm
              , M = 0
              , I = d
              , T = _ ? 1 : -1;
            if (e.each(i, function(t, n) {
                var i;
                if (isNaN(t))
                    e.setItemLayout(n, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: _,
                        cx: h,
                        cy: u,
                        r0: c,
                        r: x ? NaN : f
                    });
                else {
                    (i = "area" !== x ? 0 === m && w ? v : t * v : hm / g) < p ? (i = p,
                    S -= p) : M += t;
                    var r = I + T * i;
                    e.setItemLayout(n, {
                        angle: i,
                        startAngle: I,
                        endAngle: r,
                        clockwise: _,
                        cx: h,
                        cy: u,
                        r0: c,
                        r: x ? tr(t, b, [c, f]) : f
                    }),
                    I = r
                }
            }),
            S < hm && g)
                if (S <= .001) {
                    var C = hm / g;
                    e.each(i, function(t, n) {
                        if (!isNaN(t)) {
                            var i = e.getItemLayout(n);
                            i.angle = C,
                            i.startAngle = d + T * n * C,
                            i.endAngle = d + T * (n + 1) * C
                        }
                    })
                } else
                    v = S / M,
                    I = d,
                    e.each(i, function(t, n) {
                        if (!isNaN(t)) {
                            var i = e.getItemLayout(n)
                              , r = i.angle === p ? p : t * v;
                            i.startAngle = I,
                            i.endAngle = I + T * r,
                            I += T * r
                        }
                    });
            lm(t, f, o, s)
        })
    }, "pie")),
    To(function(t) {
        return {
            seriesType: t,
            reset: function(t, e) {
                var n = e.findComponents({
                    mainType: "legend"
                });
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function(t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++)
                            if (!n[r].isSelected(e))
                                return !1;
                        return !0
                    })
                }
            }
        }
    }("pie")),
    t.version = "4.0.4",
    t.dependencies = Xd,
    t.PRIORITY = jd,
    t.init = function(t, e, n) {
        var i = So(t);
        if (i)
            return i;
        var r = new eo(t,e,n);
        return r.id = "ec_" + fp++,
        up[r.id] = r,
        yn(t, pp, r.id),
        wo(r),
        r
    }
    ,
    t.connect = function(t) {
        if (y(t)) {
            var e = t;
            t = null,
            Wd(e, function(e) {
                null != e.group && (t = e.group)
            }),
            t = t || "g_" + dp++,
            Wd(e, function(e) {
                e.group = t
            })
        }
        return cp[t] = !0,
        t
    }
    ,
    t.disConnect = bo,
    t.disconnect = mp,
    t.dispose = function(t) {
        "string" == typeof t ? t = up[t] : t instanceof eo || (t = So(t)),
        t instanceof eo && !t.isDisposed() && t.dispose()
    }
    ,
    t.getInstanceByDom = So,
    t.getInstanceById = function(t) {
        return up[t]
    }
    ,
    t.registerTheme = Mo,
    t.registerPreprocessor = Io,
    t.registerProcessor = To,
    t.registerPostUpdate = function(t) {
        op.push(t)
    }
    ,
    t.registerAction = Co,
    t.registerCoordinateSystem = function(t, e) {
        Yr.register(t, e)
    }
    ,
    t.getCoordinateSystemDimensions = function(t) {
        var e = Yr.get(t);
        if (e)
            return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
    }
    ,
    t.registerLayout = Do,
    t.registerVisual = ko,
    t.registerLoading = Lo,
    t.extendComponentModel = Po,
    t.extendComponentView = Oo,
    t.extendSeriesModel = Eo,
    t.extendChartView = Bo,
    t.setCanvasCreator = function(t) {
        e("createCanvas", t)
    }
    ,
    t.registerMap = function(t, e, n) {
        e.geoJson && !e.features && (n = e.specialAreas,
        e = e.geoJson),
        "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()),
        gp[t] = {
            geoJson: e,
            specialAreas: n
        }
    }
    ,
    t.getMap = function(t) {
        return gp[t]
    }
    ,
    t.dataTool = vp
});
