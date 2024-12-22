(function () {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
		t(i);
	new MutationObserver((i) => {
		for (const n of i)
			if (n.type === "childList")
				for (const s of n.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(i) {
		const n = {};
		return (
			i.integrity && (n.integrity = i.integrity),
			i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (n.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (n.credentials = "omit")
				: (n.credentials = "same-origin"),
			n
		);
	}
	function t(i) {
		if (i.ep) return;
		i.ep = !0;
		const n = r(i);
		fetch(i.href, n);
	}
})();
class rh {
	constructor() {
		(this.blocks = document.querySelectorAll("[data-block]")), this.init();
	}
	init() {
		this.blocks.forEach((e) => {
			const r = e.getAttribute("data-block");
			this.createBlock(r, e);
		});
	}
	createBlock() {
		return console.error("No createBlock for this factory"), null;
	}
}
function Ir(o) {
	if (o === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	return o;
}
function Vu(o, e) {
	(o.prototype = Object.create(e.prototype)),
		(o.prototype.constructor = o),
		(o.__proto__ = e);
}
var Zt = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	vn = { duration: 0.5, overwrite: !1, delay: 0 },
	ja,
	zt,
	lt,
	lr = 1e8,
	Fe = 1 / lr,
	la = Math.PI * 2,
	ih = la / 4,
	nh = 0,
	Xu = Math.sqrt,
	oh = Math.cos,
	sh = Math.sin,
	gt = function (e) {
		return typeof e == "string";
	},
	et = function (e) {
		return typeof e == "function";
	},
	Hr = function (e) {
		return typeof e == "number";
	},
	Ua = function (e) {
		return typeof e > "u";
	},
	Rr = function (e) {
		return typeof e == "object";
	},
	Yt = function (e) {
		return e !== !1;
	},
	Gu = function () {
		return typeof window < "u";
	},
	Po = function (e) {
		return et(e) || gt(e);
	},
	Wu =
		(typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
		function () {},
	kt = Array.isArray,
	ua = /(?:-?\.?\d|\.)+/gi,
	Hu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	rn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Rs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	ju = /[+-]=-?[.\d]+/,
	Uu = /[^,'"\[\]\s]+/gi,
	ah = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Ke,
	sr,
	ca,
	Ka,
	Jt = {},
	ls = {},
	Ku,
	Qu = function (e) {
		return (ls = Bi(e, Jt)) && er;
	},
	Qa = function (e, r) {
		return console.warn(
			"Invalid property",
			e,
			"set to",
			r,
			"Missing plugin? gsap.registerPlugin()"
		);
	},
	us = function (e, r) {
		// return !r && console.warn(e);
	},
	Zu = function (e, r) {
		return (e && (Jt[e] = r) && ls && (ls[e] = r)) || Jt;
	},
	co = function () {
		return 0;
	},
	lh = { suppressEvents: !0, isStart: !0, kill: !1 },
	Wo = { suppressEvents: !0, kill: !1 },
	uh = { suppressEvents: !0 },
	Za = {},
	ai = [],
	fa = {},
	Ju,
	jt = {},
	Fs = {},
	Pl = 30,
	Ho = [],
	Ja = "",
	el = function (e) {
		var r = e[0],
			t,
			i;
		if ((Rr(r) || et(r) || (e = [e]), !(t = (r.gsap || {}).harness))) {
			for (i = Ho.length; i-- && !Ho[i].targetTest(r); );
			t = Ho[i];
		}
		for (i = e.length; i--; )
			(e[i] && (e[i]._gsap || (e[i]._gsap = new wc(e[i], t)))) ||
				e.splice(i, 1);
		return e;
	},
	Oi = function (e) {
		return e._gsap || el(ur(e))[0]._gsap;
	},
	ec = function (e, r, t) {
		return (t = e[r]) && et(t)
			? e[r]()
			: (Ua(t) && e.getAttribute && e.getAttribute(r)) || t;
	},
	qt = function (e, r) {
		return (e = e.split(",")).forEach(r) || e;
	},
	ot = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	vt = function (e) {
		return Math.round(e * 1e7) / 1e7 || 0;
	},
	un = function (e, r) {
		var t = r.charAt(0),
			i = parseFloat(r.substr(2));
		return (
			(e = parseFloat(e)),
			t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
		);
	},
	ch = function (e, r) {
		for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; );
		return i < t;
	},
	cs = function () {
		var e = ai.length,
			r = ai.slice(0),
			t,
			i;
		for (fa = {}, ai.length = 0, t = 0; t < e; t++)
			(i = r[t]),
				i &&
					i._lazy &&
					(i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
	},
	tc = function (e, r, t, i) {
		ai.length && cs(),
			e.render(r, t, i || (zt && r < 0 && (e._initted || e._startAt))),
			ai.length && cs();
	},
	rc = function (e) {
		var r = parseFloat(e);
		return (r || r === 0) && (e + "").match(Uu).length < 2
			? r
			: gt(e)
			? e.trim()
			: e;
	},
	ic = function (e) {
		return e;
	},
	dr = function (e, r) {
		for (var t in r) t in e || (e[t] = r[t]);
		return e;
	},
	fh = function (e) {
		return function (r, t) {
			for (var i in t)
				i in r ||
					(i === "duration" && e) ||
					i === "ease" ||
					(r[i] = t[i]);
		};
	},
	Bi = function (e, r) {
		for (var t in r) e[t] = r[t];
		return e;
	},
	Ml = function o(e, r) {
		for (var t in r)
			t !== "__proto__" &&
				t !== "constructor" &&
				t !== "prototype" &&
				(e[t] = Rr(r[t]) ? o(e[t] || (e[t] = {}), r[t]) : r[t]);
		return e;
	},
	fs = function (e, r) {
		var t = {},
			i;
		for (i in e) i in r || (t[i] = e[i]);
		return t;
	},
	Hn = function (e) {
		var r = e.parent || Ke,
			t = e.keyframes ? fh(kt(e.keyframes)) : dr;
		if (Yt(e.inherit))
			for (; r; ) t(e, r.vars.defaults), (r = r.parent || r._dp);
		return e;
	},
	hh = function (e, r) {
		for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; );
		return t < 0;
	},
	nc = function (e, r, t, i, n) {
		t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
		var s = e[i],
			a;
		if (n) for (a = r[n]; s && s[n] > a; ) s = s._prev;
		return (
			s
				? ((r._next = s._next), (s._next = r))
				: ((r._next = e[t]), (e[t] = r)),
			r._next ? (r._next._prev = r) : (e[i] = r),
			(r._prev = s),
			(r.parent = r._dp = e),
			r
		);
	},
	Es = function (e, r, t, i) {
		t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
		var n = r._prev,
			s = r._next;
		n ? (n._next = s) : e[t] === r && (e[t] = s),
			s ? (s._prev = n) : e[i] === r && (e[i] = n),
			(r._next = r._prev = r.parent = null);
	},
	fi = function (e, r) {
		e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e),
			(e._act = 0);
	},
	Ci = function (e, r) {
		if (e && (!r || r._end > e._dur || r._start < 0))
			for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
		return e;
	},
	dh = function (e) {
		for (var r = e.parent; r && r.parent; )
			(r._dirty = 1), r.totalDuration(), (r = r.parent);
		return e;
	},
	ha = function (e, r, t, i) {
		return (
			e._startAt &&
			(zt
				? e._startAt.revert(Wo)
				: (e.vars.immediateRender && !e.vars.autoRevert) ||
				  e._startAt.render(r, !0, i))
		);
	},
	ph = function o(e) {
		return !e || (e._ts && o(e.parent));
	},
	El = function (e) {
		return e._repeat ? bn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
	},
	bn = function (e, r) {
		var t = Math.floor((e /= r));
		return e && t === e ? t - 1 : t;
	},
	hs = function (e, r) {
		return (
			(e - r._start) * r._ts +
			(r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
		);
	},
	Os = function (e) {
		return (e._end = vt(
			e._start + (e._tDur / Math.abs(e._ts || e._rts || Fe) || 0)
		));
	},
	Cs = function (e, r) {
		var t = e._dp;
		return (
			t &&
				t.smoothChildTiming &&
				e._ts &&
				((e._start = vt(
					t._time -
						(e._ts > 0
							? r / e._ts
							: ((e._dirty ? e.totalDuration() : e._tDur) - r) /
							  -e._ts)
				)),
				Os(e),
				t._dirty || Ci(t, e)),
			e
		);
	},
	oc = function (e, r) {
		var t;
		if (
			((r._time || (r._initted && !r._dur)) &&
				((t = hs(e.rawTime(), r)),
				(!r._dur || So(0, r.totalDuration(), t) - r._tTime > Fe) &&
					r.render(t, !0)),
			Ci(e, r)._dp && e._initted && e._time >= e._dur && e._ts)
		) {
			if (e._dur < e.duration())
				for (t = e; t._dp; )
					t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp);
			e._zTime = -Fe;
		}
	},
	Or = function (e, r, t, i) {
		return (
			r.parent && fi(r),
			(r._start = vt(
				(Hr(t) ? t : t || e !== Ke ? or(e, t, r) : e._time) + r._delay
			)),
			(r._end = vt(
				r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
			)),
			nc(e, r, "_first", "_last", e._sort ? "_start" : 0),
			da(r) || (e._recent = r),
			i || oc(e, r),
			e._ts < 0 && Cs(e, e._tTime),
			e
		);
	},
	sc = function (e, r) {
		return (
			(Jt.ScrollTrigger || Qa("scrollTrigger", r)) &&
			Jt.ScrollTrigger.create(r, e)
		);
	},
	ac = function (e, r, t, i, n) {
		if ((rl(e, r, n), !e._initted)) return 1;
		if (
			!t &&
			e._pt &&
			!zt &&
			((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
			Ju !== Ut.frame
		)
			return ai.push(e), (e._lazy = [n, i]), 1;
	},
	gh = function o(e) {
		var r = e.parent;
		return (
			r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r))
		);
	},
	da = function (e) {
		var r = e.data;
		return r === "isFromStart" || r === "isStart";
	},
	_h = function (e, r, t, i) {
		var n = e.ratio,
			s =
				r < 0 ||
				(!r &&
					((!e._start && gh(e) && !(!e._initted && da(e))) ||
						((e._ts < 0 || e._dp._ts < 0) && !da(e))))
					? 0
					: 1,
			a = e._rDelay,
			l = 0,
			c,
			f,
			h;
		if (
			(a &&
				e._repeat &&
				((l = So(0, e._tDur, r)),
				(f = bn(l, a)),
				e._yoyo && f & 1 && (s = 1 - s),
				f !== bn(e._tTime, a) &&
					((n = 1 - s),
					e.vars.repeatRefresh && e._initted && e.invalidate())),
			s !== n || zt || i || e._zTime === Fe || (!r && e._zTime))
		) {
			if (!e._initted && ac(e, r, i, t, l)) return;
			for (
				h = e._zTime,
					e._zTime = r || (t ? Fe : 0),
					t || (t = r && !h),
					e.ratio = s,
					e._from && (s = 1 - s),
					e._time = 0,
					e._tTime = l,
					c = e._pt;
				c;

			)
				c.r(s, c.d), (c = c._next);
			r < 0 && ha(e, r, t, !0),
				e._onUpdate && !t && cr(e, "onUpdate"),
				l && e._repeat && !t && e.parent && cr(e, "onRepeat"),
				(r >= e._tDur || r < 0) &&
					e.ratio === s &&
					(s && fi(e, 1),
					!t &&
						!zt &&
						(cr(e, s ? "onComplete" : "onReverseComplete", !0),
						e._prom && e._prom()));
		} else e._zTime || (e._zTime = r);
	},
	mh = function (e, r, t) {
		var i;
		if (t > r)
			for (i = e._first; i && i._start <= t; ) {
				if (i.data === "isPause" && i._start > r) return i;
				i = i._next;
			}
		else
			for (i = e._last; i && i._start >= t; ) {
				if (i.data === "isPause" && i._start < r) return i;
				i = i._prev;
			}
	},
	wn = function (e, r, t, i) {
		var n = e._repeat,
			s = vt(r) || 0,
			a = e._tTime / e._tDur;
		return (
			a && !i && (e._time *= s / e._dur),
			(e._dur = s),
			(e._tDur = n
				? n < 0
					? 1e10
					: vt(s * (n + 1) + e._rDelay * n)
				: s),
			a > 0 && !i && Cs(e, (e._tTime = e._tDur * a)),
			e.parent && Os(e),
			t || Ci(e.parent, e),
			e
		);
	},
	Ol = function (e) {
		return e instanceof Bt ? Ci(e) : wn(e, e._dur);
	},
	yh = { _start: 0, endTime: co, totalDuration: co },
	or = function o(e, r, t) {
		var i = e.labels,
			n = e._recent || yh,
			s = e.duration() >= lr ? n.endTime(!1) : e._dur,
			a,
			l,
			c;
		return gt(r) && (isNaN(r) || r in i)
			? ((l = r.charAt(0)),
			  (c = r.substr(-1) === "%"),
			  (a = r.indexOf("=")),
			  l === "<" || l === ">"
					? (a >= 0 && (r = r.replace(/=/, "")),
					  (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
							(parseFloat(r.substr(1)) || 0) *
								(c ? (a < 0 ? n : t).totalDuration() / 100 : 1))
					: a < 0
					? (r in i || (i[r] = s), i[r])
					: ((l = parseFloat(r.charAt(a - 1) + r.substr(a + 1))),
					  c &&
							t &&
							(l =
								(l / 100) * (kt(t) ? t[0] : t).totalDuration()),
					  a > 1 ? o(e, r.substr(0, a - 1), t) + l : s + l))
			: r == null
			? s
			: +r;
	},
	jn = function (e, r, t) {
		var i = Hr(r[1]),
			n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
			s = r[n],
			a,
			l;
		if ((i && (s.duration = r[1]), (s.parent = t), e)) {
			for (a = s, l = t; l && !("immediateRender" in a); )
				(a = l.vars.defaults || {}),
					(l = Yt(l.vars.inherit) && l.parent);
			(s.immediateRender = Yt(a.immediateRender)),
				e < 2 ? (s.runBackwards = 1) : (s.startAt = r[n - 1]);
		}
		return new ft(r[0], s, r[n + 1]);
	},
	pi = function (e, r) {
		return e || e === 0 ? r(e) : r;
	},
	So = function (e, r, t) {
		return t < e ? e : t > r ? r : t;
	},
	Tt = function (e, r) {
		return !gt(e) || !(r = ah.exec(e)) ? "" : r[1];
	},
	vh = function (e, r, t) {
		return pi(t, function (i) {
			return So(e, r, i);
		});
	},
	pa = [].slice,
	lc = function (e, r) {
		return (
			e &&
			Rr(e) &&
			"length" in e &&
			((!r && !e.length) || (e.length - 1 in e && Rr(e[0]))) &&
			!e.nodeType &&
			e !== sr
		);
	},
	bh = function (e, r, t) {
		return (
			t === void 0 && (t = []),
			e.forEach(function (i) {
				var n;
				return (gt(i) && !r) || lc(i, 1)
					? (n = t).push.apply(n, ur(i))
					: t.push(i);
			}) || t
		);
	},
	ur = function (e, r, t) {
		return lt && !r && lt.selector
			? lt.selector(e)
			: gt(e) && !t && (ca || !xn())
			? pa.call((r || Ka).querySelectorAll(e), 0)
			: kt(e)
			? bh(e, t)
			: lc(e)
			? pa.call(e, 0)
			: e
			? [e]
			: [];
	},
	ga = function (e) {
		return (
			(e = ur(e)[0] || us("Invalid scope") || {}),
			function (r) {
				var t = e.current || e.nativeElement || e;
				return ur(
					r,
					t.querySelectorAll
						? t
						: t === e
						? us("Invalid scope") || Ka.createElement("div")
						: e
				);
			}
		);
	},
	uc = function (e) {
		return e.sort(function () {
			return 0.5 - Math.random();
		});
	},
	cc = function (e) {
		if (et(e)) return e;
		var r = Rr(e) ? e : { each: e },
			t = Di(r.ease),
			i = r.from || 0,
			n = parseFloat(r.base) || 0,
			s = {},
			a = i > 0 && i < 1,
			l = isNaN(i) || a,
			c = r.axis,
			f = i,
			h = i;
		return (
			gt(i)
				? (f = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !a && l && ((f = i[0]), (h = i[1])),
			function (d, u, p) {
				var g = (p || r).length,
					_ = s[g],
					v,
					y,
					m,
					w,
					b,
					T,
					k,
					S,
					C;
				if (!_) {
					if (
						((C = r.grid === "auto" ? 0 : (r.grid || [1, lr])[1]),
						!C)
					) {
						for (
							k = -lr;
							k < (k = p[C++].getBoundingClientRect().left) &&
							C < g;

						);
						C--;
					}
					for (
						_ = s[g] = [],
							v = l ? Math.min(C, g) * f - 0.5 : i % C,
							y =
								C === lr
									? 0
									: l
									? (g * h) / C - 0.5
									: (i / C) | 0,
							k = 0,
							S = lr,
							T = 0;
						T < g;
						T++
					)
						(m = (T % C) - v),
							(w = y - ((T / C) | 0)),
							(_[T] = b =
								c
									? Math.abs(c === "y" ? w : m)
									: Xu(m * m + w * w)),
							b > k && (k = b),
							b < S && (S = b);
					i === "random" && uc(_),
						(_.max = k - S),
						(_.min = S),
						(_.v = g =
							(parseFloat(r.amount) ||
								parseFloat(r.each) *
									(C > g
										? g - 1
										: c
										? c === "y"
											? g / C
											: C
										: Math.max(C, g / C)) ||
								0) * (i === "edges" ? -1 : 1)),
						(_.b = g < 0 ? n - g : n),
						(_.u = Tt(r.amount || r.each) || 0),
						(t = t && g < 0 ? yc(t) : t);
				}
				return (
					(g = (_[d] - _.min) / _.max || 0),
					vt(_.b + (t ? t(g) : g) * _.v) + _.u
				);
			}
		);
	},
	_a = function (e) {
		var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
		return function (t) {
			var i = vt(Math.round(parseFloat(t) / e) * e * r);
			return (i - (i % 1)) / r + (Hr(t) ? 0 : Tt(t));
		};
	},
	fc = function (e, r) {
		var t = kt(e),
			i,
			n;
		return (
			!t &&
				Rr(e) &&
				((i = t = e.radius || lr),
				e.values
					? ((e = ur(e.values)), (n = !Hr(e[0])) && (i *= i))
					: (e = _a(e.increment))),
			pi(
				r,
				t
					? et(e)
						? function (s) {
								return (n = e(s)), Math.abs(n - s) <= i ? n : s;
						  }
						: function (s) {
								for (
									var a = parseFloat(n ? s.x : s),
										l = parseFloat(n ? s.y : 0),
										c = lr,
										f = 0,
										h = e.length,
										d,
										u;
									h--;

								)
									n
										? ((d = e[h].x - a),
										  (u = e[h].y - l),
										  (d = d * d + u * u))
										: (d = Math.abs(e[h] - a)),
										d < c && ((c = d), (f = h));
								return (
									(f = !i || c <= i ? e[f] : s),
									n || f === s || Hr(s) ? f : f + Tt(s)
								);
						  }
					: _a(e)
			)
		);
	},
	hc = function (e, r, t, i) {
		return pi(kt(e) ? !r : t === !0 ? !!(t = 0) : !i, function () {
			return kt(e)
				? e[~~(Math.random() * e.length)]
				: (t = t || 1e-5) &&
						(i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) &&
						Math.floor(
							Math.round(
								(e -
									t / 2 +
									Math.random() * (r - e + t * 0.99)) /
									t
							) *
								t *
								i
						) / i;
		});
	},
	wh = function () {
		for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
			r[t] = arguments[t];
		return function (i) {
			return r.reduce(function (n, s) {
				return s(n);
			}, i);
		};
	},
	xh = function (e, r) {
		return function (t) {
			return e(parseFloat(t)) + (r || Tt(t));
		};
	},
	Th = function (e, r, t) {
		return pc(e, r, 0, 1, t);
	},
	dc = function (e, r, t) {
		return pi(t, function (i) {
			return e[~~r(i)];
		});
	},
	Sh = function o(e, r, t) {
		var i = r - e;
		return kt(e)
			? dc(e, o(0, e.length), r)
			: pi(t, function (n) {
					return ((i + ((n - e) % i)) % i) + e;
			  });
	},
	kh = function o(e, r, t) {
		var i = r - e,
			n = i * 2;
		return kt(e)
			? dc(e, o(0, e.length - 1), r)
			: pi(t, function (s) {
					return (
						(s = (n + ((s - e) % n)) % n || 0),
						e + (s > i ? n - s : s)
					);
			  });
	},
	fo = function (e) {
		for (var r = 0, t = "", i, n, s, a; ~(i = e.indexOf("random(", r)); )
			(s = e.indexOf(")", i)),
				(a = e.charAt(i + 7) === "["),
				(n = e.substr(i + 7, s - i - 7).match(a ? Uu : ua)),
				(t +=
					e.substr(r, i - r) +
					hc(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
				(r = s + 1);
		return t + e.substr(r, e.length - r);
	},
	pc = function (e, r, t, i, n) {
		var s = r - e,
			a = i - t;
		return pi(n, function (l) {
			return t + (((l - e) / s) * a || 0);
		});
	},
	Ph = function o(e, r, t, i) {
		var n = isNaN(e + r)
			? 0
			: function (u) {
					return (1 - u) * e + u * r;
			  };
		if (!n) {
			var s = gt(e),
				a = {},
				l,
				c,
				f,
				h,
				d;
			if ((t === !0 && (i = 1) && (t = null), s))
				(e = { p: e }), (r = { p: r });
			else if (kt(e) && !kt(r)) {
				for (f = [], h = e.length, d = h - 2, c = 1; c < h; c++)
					f.push(o(e[c - 1], e[c]));
				h--,
					(n = function (p) {
						p *= h;
						var g = Math.min(d, ~~p);
						return f[g](p - g);
					}),
					(t = r);
			} else i || (e = Bi(kt(e) ? [] : {}, e));
			if (!f) {
				for (l in r) tl.call(a, e, l, "get", r[l]);
				n = function (p) {
					return ol(p, a) || (s ? e.p : e);
				};
			}
		}
		return pi(t, n);
	},
	Cl = function (e, r, t) {
		var i = e.labels,
			n = lr,
			s,
			a,
			l;
		for (s in i)
			(a = i[s] - r),
				a < 0 == !!t &&
					a &&
					n > (a = Math.abs(a)) &&
					((l = s), (n = a));
		return l;
	},
	cr = function (e, r, t) {
		var i = e.vars,
			n = i[r],
			s = lt,
			a = e._ctx,
			l,
			c,
			f;
		if (n)
			return (
				(l = i[r + "Params"]),
				(c = i.callbackScope || e),
				t && ai.length && cs(),
				a && (lt = a),
				(f = l ? n.apply(c, l) : n.call(c)),
				(lt = s),
				f
			);
	},
	Nn = function (e) {
		return (
			fi(e),
			e.scrollTrigger && e.scrollTrigger.kill(!!zt),
			e.progress() < 1 && cr(e, "onInterrupt"),
			e
		);
	},
	nn,
	Mh = function (e) {
		e = (!e.name && e.default) || e;
		var r = e.name,
			t = et(e),
			i =
				r && !t && e.init
					? function () {
							this._props = [];
					  }
					: e,
			n = {
				init: co,
				render: ol,
				add: tl,
				kill: Vh,
				modifier: qh,
				rawVars: 0,
			},
			s = {
				targetTest: 0,
				get: 0,
				getSetter: nl,
				aliases: {},
				register: 0,
			};
		if ((xn(), e !== i)) {
			if (jt[r]) return;
			dr(i, dr(fs(e, n), s)),
				Bi(i.prototype, Bi(n, fs(e, s))),
				(jt[(i.prop = r)] = i),
				e.targetTest && (Ho.push(i), (Za[r] = 1)),
				(r =
					(r === "css"
						? "CSS"
						: r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin");
		}
		Zu(r, i), e.register && e.register(er, i, Vt);
	},
	$e = 255,
	In = {
		aqua: [0, $e, $e],
		lime: [0, $e, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, $e],
		navy: [0, 0, 128],
		white: [$e, $e, $e],
		olive: [128, 128, 0],
		yellow: [$e, $e, 0],
		orange: [$e, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [$e, 0, 0],
		pink: [$e, 192, 203],
		cyan: [0, $e, $e],
		transparent: [$e, $e, $e, 0],
	},
	Ns = function (e, r, t) {
		return (
			(e += e < 0 ? 1 : e > 1 ? -1 : 0),
			((e * 6 < 1
				? r + (t - r) * e * 6
				: e < 0.5
				? t
				: e * 3 < 2
				? r + (t - r) * (2 / 3 - e) * 6
				: r) *
				$e +
				0.5) |
				0
		);
	},
	gc = function (e, r, t) {
		var i = e ? (Hr(e) ? [e >> 16, (e >> 8) & $e, e & $e] : 0) : In.black,
			n,
			s,
			a,
			l,
			c,
			f,
			h,
			d,
			u,
			p;
		if (!i) {
			if (
				(e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), In[e])
			)
				i = In[e];
			else if (e.charAt(0) === "#") {
				if (
					(e.length < 6 &&
						((n = e.charAt(1)),
						(s = e.charAt(2)),
						(a = e.charAt(3)),
						(e =
							"#" +
							n +
							n +
							s +
							s +
							a +
							a +
							(e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
					e.length === 9)
				)
					return (
						(i = parseInt(e.substr(1, 6), 16)),
						[
							i >> 16,
							(i >> 8) & $e,
							i & $e,
							parseInt(e.substr(7), 16) / 255,
						]
					);
				(e = parseInt(e.substr(1), 16)),
					(i = [e >> 16, (e >> 8) & $e, e & $e]);
			} else if (e.substr(0, 3) === "hsl") {
				if (((i = p = e.match(ua)), !r))
					(l = (+i[0] % 360) / 360),
						(c = +i[1] / 100),
						(f = +i[2] / 100),
						(s = f <= 0.5 ? f * (c + 1) : f + c - f * c),
						(n = f * 2 - s),
						i.length > 3 && (i[3] *= 1),
						(i[0] = Ns(l + 1 / 3, n, s)),
						(i[1] = Ns(l, n, s)),
						(i[2] = Ns(l - 1 / 3, n, s));
				else if (~e.indexOf("="))
					return (
						(i = e.match(Hu)), t && i.length < 4 && (i[3] = 1), i
					);
			} else i = e.match(ua) || In.transparent;
			i = i.map(Number);
		}
		return (
			r &&
				!p &&
				((n = i[0] / $e),
				(s = i[1] / $e),
				(a = i[2] / $e),
				(h = Math.max(n, s, a)),
				(d = Math.min(n, s, a)),
				(f = (h + d) / 2),
				h === d
					? (l = c = 0)
					: ((u = h - d),
					  (c = f > 0.5 ? u / (2 - h - d) : u / (h + d)),
					  (l =
							h === n
								? (s - a) / u + (s < a ? 6 : 0)
								: h === s
								? (a - n) / u + 2
								: (n - s) / u + 4),
					  (l *= 60)),
				(i[0] = ~~(l + 0.5)),
				(i[1] = ~~(c * 100 + 0.5)),
				(i[2] = ~~(f * 100 + 0.5))),
			t && i.length < 4 && (i[3] = 1),
			i
		);
	},
	_c = function (e) {
		var r = [],
			t = [],
			i = -1;
		return (
			e.split(li).forEach(function (n) {
				var s = n.match(rn) || [];
				r.push.apply(r, s), t.push((i += s.length + 1));
			}),
			(r.c = t),
			r
		);
	},
	Dl = function (e, r, t) {
		var i = "",
			n = (e + i).match(li),
			s = r ? "hsla(" : "rgba(",
			a = 0,
			l,
			c,
			f,
			h;
		if (!n) return e;
		if (
			((n = n.map(function (d) {
				return (
					(d = gc(d, r, 1)) &&
					s +
						(r
							? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
							: d.join(",")) +
						")"
				);
			})),
			t && ((f = _c(e)), (l = t.c), l.join(i) !== f.c.join(i)))
		)
			for (c = e.replace(li, "1").split(rn), h = c.length - 1; a < h; a++)
				i +=
					c[a] +
					(~l.indexOf(a)
						? n.shift() || s + "0,0,0,0)"
						: (f.length ? f : n.length ? n : t).shift());
		if (!c)
			for (c = e.split(li), h = c.length - 1; a < h; a++)
				i += c[a] + n[a];
		return i + c[h];
	},
	li = (function () {
		var o =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
			e;
		for (e in In) o += "|" + e + "\\b";
		return new RegExp(o + ")", "gi");
	})(),
	Eh = /hsl[a]?\(/,
	mc = function (e) {
		var r = e.join(" "),
			t;
		if (((li.lastIndex = 0), li.test(r)))
			return (
				(t = Eh.test(r)),
				(e[1] = Dl(e[1], t)),
				(e[0] = Dl(e[0], t, _c(e[1]))),
				!0
			);
	},
	ho,
	Ut = (function () {
		var o = Date.now,
			e = 500,
			r = 33,
			t = o(),
			i = t,
			n = 1e3 / 240,
			s = n,
			a = [],
			l,
			c,
			f,
			h,
			d,
			u,
			p = function g(_) {
				var v = o() - i,
					y = _ === !0,
					m,
					w,
					b,
					T;
				if (
					(v > e && (t += v - r),
					(i += v),
					(b = i - t),
					(m = b - s),
					(m > 0 || y) &&
						((T = ++h.frame),
						(d = b - h.time * 1e3),
						(h.time = b = b / 1e3),
						(s += m + (m >= n ? 4 : n - m)),
						(w = 1)),
					y || (l = c(g)),
					w)
				)
					for (u = 0; u < a.length; u++) a[u](b, d, T, _);
			};
		return (
			(h = {
				time: 0,
				frame: 0,
				tick: function () {
					p(!0);
				},
				deltaRatio: function (_) {
					return d / (1e3 / (_ || 60));
				},
				wake: function () {
					Ku &&
						(!ca &&
							Gu() &&
							((sr = ca = window),
							(Ka = sr.document || {}),
							(Jt.gsap = er),
							(sr.gsapVersions || (sr.gsapVersions = [])).push(
								er.version
							),
							Qu(
								ls ||
									sr.GreenSockGlobals ||
									(!sr.gsap && sr) ||
									{}
							),
							(f = sr.requestAnimationFrame)),
						l && h.sleep(),
						(c =
							f ||
							function (_) {
								return setTimeout(
									_,
									(s - h.time * 1e3 + 1) | 0
								);
							}),
						(ho = 1),
						p(2));
				},
				sleep: function () {
					(f ? sr.cancelAnimationFrame : clearTimeout)(l),
						(ho = 0),
						(c = co);
				},
				lagSmoothing: function (_, v) {
					(e = _ || 1 / Fe), (r = Math.min(v, e, 0));
				},
				fps: function (_) {
					(n = 1e3 / (_ || 240)), (s = h.time * 1e3 + n);
				},
				add: function (_, v, y) {
					var m = v
						? function (w, b, T, k) {
								_(w, b, T, k), h.remove(m);
						  }
						: _;
					return h.remove(_), a[y ? "unshift" : "push"](m), xn(), m;
				},
				remove: function (_, v) {
					~(v = a.indexOf(_)) && a.splice(v, 1) && u >= v && u--;
				},
				_listeners: a,
			}),
			h
		);
	})(),
	xn = function () {
		return !ho && Ut.wake();
	},
	Se = {},
	Oh = /^[\d.\-M][\d.\-,\s]/,
	Ch = /["']/g,
	Dh = function (e) {
		for (
			var r = {},
				t = e.substr(1, e.length - 3).split(":"),
				i = t[0],
				n = 1,
				s = t.length,
				a,
				l,
				c;
			n < s;
			n++
		)
			(l = t[n]),
				(a = n !== s - 1 ? l.lastIndexOf(",") : l.length),
				(c = l.substr(0, a)),
				(r[i] = isNaN(c) ? c.replace(Ch, "").trim() : +c),
				(i = l.substr(a + 1).trim());
		return r;
	},
	Ah = function (e) {
		var r = e.indexOf("(") + 1,
			t = e.indexOf(")"),
			i = e.indexOf("(", r);
		return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t);
	},
	Lh = function (e) {
		var r = (e + "").split("("),
			t = Se[r[0]];
		return t && r.length > 1 && t.config
			? t.config.apply(
					null,
					~e.indexOf("{") ? [Dh(r[1])] : Ah(e).split(",").map(rc)
			  )
			: Se._CE && Oh.test(e)
			? Se._CE("", e)
			: t;
	},
	yc = function (e) {
		return function (r) {
			return 1 - e(1 - r);
		};
	},
	vc = function o(e, r) {
		for (var t = e._first, i; t; )
			t instanceof Bt
				? o(t, r)
				: t.vars.yoyoEase &&
				  (!t._yoyo || !t._repeat) &&
				  t._yoyo !== r &&
				  (t.timeline
						? o(t.timeline, r)
						: ((i = t._ease),
						  (t._ease = t._yEase),
						  (t._yEase = i),
						  (t._yoyo = r))),
				(t = t._next);
	},
	Di = function (e, r) {
		return (e && (et(e) ? e : Se[e] || Lh(e))) || r;
	},
	Wi = function (e, r, t, i) {
		t === void 0 &&
			(t = function (l) {
				return 1 - r(1 - l);
			}),
			i === void 0 &&
				(i = function (l) {
					return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2;
				});
		var n = { easeIn: r, easeOut: t, easeInOut: i },
			s;
		return (
			qt(e, function (a) {
				(Se[a] = Jt[a] = n), (Se[(s = a.toLowerCase())] = t);
				for (var l in n)
					Se[
						s +
							(l === "easeIn"
								? ".in"
								: l === "easeOut"
								? ".out"
								: ".inOut")
					] = Se[a + "." + l] = n[l];
			}),
			n
		);
	},
	bc = function (e) {
		return function (r) {
			return r < 0.5
				? (1 - e(1 - r * 2)) / 2
				: 0.5 + e((r - 0.5) * 2) / 2;
		};
	},
	Is = function o(e, r, t) {
		var i = r >= 1 ? r : 1,
			n = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
			s = (n / la) * (Math.asin(1 / i) || 0),
			a = function (f) {
				return f === 1
					? 1
					: i * Math.pow(2, -10 * f) * sh((f - s) * n) + 1;
			},
			l =
				e === "out"
					? a
					: e === "in"
					? function (c) {
							return 1 - a(1 - c);
					  }
					: bc(a);
		return (
			(n = la / n),
			(l.config = function (c, f) {
				return o(e, c, f);
			}),
			l
		);
	},
	Bs = function o(e, r) {
		r === void 0 && (r = 1.70158);
		var t = function (s) {
				return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
			},
			i =
				e === "out"
					? t
					: e === "in"
					? function (n) {
							return 1 - t(1 - n);
					  }
					: bc(t);
		return (
			(i.config = function (n) {
				return o(e, n);
			}),
			i
		);
	};
qt("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, e) {
	var r = e < 5 ? e + 1 : e;
	Wi(
		o + ",Power" + (r - 1),
		e
			? function (t) {
					return Math.pow(t, r);
			  }
			: function (t) {
					return t;
			  },
		function (t) {
			return 1 - Math.pow(1 - t, r);
		},
		function (t) {
			return t < 0.5
				? Math.pow(t * 2, r) / 2
				: 1 - Math.pow((1 - t) * 2, r) / 2;
		}
	);
});
Se.Linear.easeNone = Se.none = Se.Linear.easeIn;
Wi("Elastic", Is("in"), Is("out"), Is());
(function (o, e) {
	var r = 1 / e,
		t = 2 * r,
		i = 2.5 * r,
		n = function (a) {
			return a < r
				? o * a * a
				: a < t
				? o * Math.pow(a - 1.5 / e, 2) + 0.75
				: a < i
				? o * (a -= 2.25 / e) * a + 0.9375
				: o * Math.pow(a - 2.625 / e, 2) + 0.984375;
		};
	Wi(
		"Bounce",
		function (s) {
			return 1 - n(1 - s);
		},
		n
	);
})(7.5625, 2.75);
Wi("Expo", function (o) {
	return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
Wi("Circ", function (o) {
	return -(Xu(1 - o * o) - 1);
});
Wi("Sine", function (o) {
	return o === 1 ? 1 : -oh(o * ih) + 1;
});
Wi("Back", Bs("in"), Bs("out"), Bs());
Se.SteppedEase =
	Se.steps =
	Jt.SteppedEase =
		{
			config: function (e, r) {
				e === void 0 && (e = 1);
				var t = 1 / e,
					i = e + (r ? 0 : 1),
					n = r ? 1 : 0,
					s = 1 - Fe;
				return function (a) {
					return (((i * So(0, s, a)) | 0) + n) * t;
				};
			},
		};
vn.ease = Se["quad.out"];
qt(
	"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
	function (o) {
		return (Ja += o + "," + o + "Params,");
	}
);
var wc = function (e, r) {
		(this.id = nh++),
			(e._gsap = this),
			(this.target = e),
			(this.harness = r),
			(this.get = r ? r.get : ec),
			(this.set = r ? r.getSetter : nl);
	},
	Tn = (function () {
		function o(r) {
			(this.vars = r),
				(this._delay = +r.delay || 0),
				(this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
					((this._rDelay = r.repeatDelay || 0),
					(this._yoyo = !!r.yoyo || !!r.yoyoEase)),
				(this._ts = 1),
				wn(this, +r.duration, 1, 1),
				(this.data = r.data),
				lt && ((this._ctx = lt), lt.data.push(this)),
				ho || Ut.wake();
		}
		var e = o.prototype;
		return (
			(e.delay = function (t) {
				return t || t === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + t - this._delay),
					  (this._delay = t),
					  this)
					: this._delay;
			}),
			(e.duration = function (t) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0
								? t + (t + this._rDelay) * this._repeat
								: t
					  )
					: this.totalDuration() && this._dur;
			}),
			(e.totalDuration = function (t) {
				return arguments.length
					? ((this._dirty = 0),
					  wn(
							this,
							this._repeat < 0
								? t
								: (t - this._repeat * this._rDelay) /
										(this._repeat + 1)
					  ))
					: this._tDur;
			}),
			(e.totalTime = function (t, i) {
				if ((xn(), !arguments.length)) return this._tTime;
				var n = this._dp;
				if (n && n.smoothChildTiming && this._ts) {
					for (
						Cs(this, t), !n._dp || n.parent || oc(n, this);
						n && n.parent;

					)
						n.parent._time !==
							n._start +
								(n._ts >= 0
									? n._tTime / n._ts
									: (n.totalDuration() - n._tTime) /
									  -n._ts) && n.totalTime(n._tTime, !0),
							(n = n.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && t < this._tDur) ||
							(this._ts < 0 && t > 0) ||
							(!this._tDur && !t)) &&
						Or(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== t ||
						(!this._dur && !i) ||
						(this._initted && Math.abs(this._zTime) === Fe) ||
						(!t &&
							!this._initted &&
							(this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = t), tc(this, t, i)),
					this
				);
			}),
			(e.time = function (t, i) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), t + El(this)) %
								(this._dur + this._rDelay) ||
								(t ? this._dur : 0),
							i
					  )
					: this._time;
			}),
			(e.totalProgress = function (t, i) {
				return arguments.length
					? this.totalTime(this.totalDuration() * t, i)
					: this.totalDuration()
					? Math.min(1, this._tTime / this._tDur)
					: this.ratio;
			}),
			(e.progress = function (t, i) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1)
									? 1 - t
									: t) +
								El(this),
							i
					  )
					: this.duration()
					? Math.min(1, this._time / this._dur)
					: this.ratio;
			}),
			(e.iteration = function (t, i) {
				var n = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (t - 1) * n, i)
					: this._repeat
					? bn(this._tTime, n) + 1
					: 1;
			}),
			(e.timeScale = function (t) {
				if (!arguments.length) return this._rts === -Fe ? 0 : this._rts;
				if (this._rts === t) return this;
				var i =
					this.parent && this._ts
						? hs(this.parent._time, this)
						: this._tTime;
				return (
					(this._rts = +t || 0),
					(this._ts = this._ps || t === -Fe ? 0 : this._rts),
					this.totalTime(So(-this._delay, this._tDur, i), !0),
					Os(this),
					dh(this)
				);
			}),
			(e.paused = function (t) {
				return arguments.length
					? (this._ps !== t &&
							((this._ps = t),
							t
								? ((this._pTime =
										this._tTime ||
										Math.max(-this._delay, this.rawTime())),
								  (this._ts = this._act = 0))
								: (xn(),
								  (this._ts = this._rts),
								  this.totalTime(
										this.parent &&
											!this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== Fe &&
											(this._tTime -= Fe)
								  ))),
					  this)
					: this._ps;
			}),
			(e.startTime = function (t) {
				if (arguments.length) {
					this._start = t;
					var i = this.parent || this._dp;
					return (
						i &&
							(i._sort || !this.parent) &&
							Or(i, this, t - this._delay),
						this
					);
				}
				return this._start;
			}),
			(e.endTime = function (t) {
				return (
					this._start +
					(Yt(t) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(e.rawTime = function (t) {
				var i = this.parent || this._dp;
				return i
					? t &&
					  (!this._ts ||
							(this._repeat &&
								this._time &&
								this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
						? hs(i.rawTime(t), this)
						: this._tTime
					: this._tTime;
			}),
			(e.revert = function (t) {
				t === void 0 && (t = uh);
				var i = zt;
				return (
					(zt = t),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(t),
						this.totalTime(-0.01, t.suppressEvents)),
					this.data !== "nested" && t.kill !== !1 && this.kill(),
					(zt = i),
					this
				);
			}),
			(e.globalTime = function (t) {
				for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
					(n = i._start + n / (i._ts || 1)), (i = i._dp);
				return !this.parent && this.vars.immediateRender ? -1 : n;
			}),
			(e.repeat = function (t) {
				return arguments.length
					? ((this._repeat = t === 1 / 0 ? -2 : t), Ol(this))
					: this._repeat === -2
					? 1 / 0
					: this._repeat;
			}),
			(e.repeatDelay = function (t) {
				if (arguments.length) {
					var i = this._time;
					return (
						(this._rDelay = t), Ol(this), i ? this.time(i) : this
					);
				}
				return this._rDelay;
			}),
			(e.yoyo = function (t) {
				return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
			}),
			(e.seek = function (t, i) {
				return this.totalTime(or(this, t), Yt(i));
			}),
			(e.restart = function (t, i) {
				return this.play().totalTime(t ? -this._delay : 0, Yt(i));
			}),
			(e.play = function (t, i) {
				return (
					t != null && this.seek(t, i), this.reversed(!1).paused(!1)
				);
			}),
			(e.reverse = function (t, i) {
				return (
					t != null && this.seek(t || this.totalDuration(), i),
					this.reversed(!0).paused(!1)
				);
			}),
			(e.pause = function (t, i) {
				return t != null && this.seek(t, i), this.paused(!0);
			}),
			(e.resume = function () {
				return this.paused(!1);
			}),
			(e.reversed = function (t) {
				return arguments.length
					? (!!t !== this.reversed() &&
							this.timeScale(-this._rts || (t ? -Fe : 0)),
					  this)
					: this._rts < 0;
			}),
			(e.invalidate = function () {
				return (
					(this._initted = this._act = 0), (this._zTime = -Fe), this
				);
			}),
			(e.isActive = function () {
				var t = this.parent || this._dp,
					i = this._start,
					n;
				return !!(
					!t ||
					(this._ts &&
						this._initted &&
						t.isActive() &&
						(n = t.rawTime(!0)) >= i &&
						n < this.endTime(!0) - Fe)
				);
			}),
			(e.eventCallback = function (t, i, n) {
				var s = this.vars;
				return arguments.length > 1
					? (i
							? ((s[t] = i),
							  n && (s[t + "Params"] = n),
							  t === "onUpdate" && (this._onUpdate = i))
							: delete s[t],
					  this)
					: s[t];
			}),
			(e.then = function (t) {
				var i = this;
				return new Promise(function (n) {
					var s = et(t) ? t : ic,
						a = function () {
							var c = i.then;
							(i.then = null),
								et(s) &&
									(s = s(i)) &&
									(s.then || s === i) &&
									(i.then = c),
								n(s),
								(i.then = c);
						};
					(i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
					(!i._tTime && i._ts < 0)
						? a()
						: (i._prom = a);
				});
			}),
			(e.kill = function () {
				Nn(this);
			}),
			o
		);
	})();
dr(Tn.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -Fe,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var Bt = (function (o) {
	Vu(e, o);
	function e(t, i) {
		var n;
		return (
			t === void 0 && (t = {}),
			(n = o.call(this, t) || this),
			(n.labels = {}),
			(n.smoothChildTiming = !!t.smoothChildTiming),
			(n.autoRemoveChildren = !!t.autoRemoveChildren),
			(n._sort = Yt(t.sortChildren)),
			Ke && Or(t.parent || Ke, Ir(n), i),
			t.reversed && n.reverse(),
			t.paused && n.paused(!0),
			t.scrollTrigger && sc(Ir(n), t.scrollTrigger),
			n
		);
	}
	var r = e.prototype;
	return (
		(r.to = function (i, n, s) {
			return jn(0, arguments, this), this;
		}),
		(r.from = function (i, n, s) {
			return jn(1, arguments, this), this;
		}),
		(r.fromTo = function (i, n, s, a) {
			return jn(2, arguments, this), this;
		}),
		(r.set = function (i, n, s) {
			return (
				(n.duration = 0),
				(n.parent = this),
				Hn(n).repeatDelay || (n.repeat = 0),
				(n.immediateRender = !!n.immediateRender),
				new ft(i, n, or(this, s), 1),
				this
			);
		}),
		(r.call = function (i, n, s) {
			return Or(this, ft.delayedCall(0, i, n), s);
		}),
		(r.staggerTo = function (i, n, s, a, l, c, f) {
			return (
				(s.duration = n),
				(s.stagger = s.stagger || a),
				(s.onComplete = c),
				(s.onCompleteParams = f),
				(s.parent = this),
				new ft(i, s, or(this, l)),
				this
			);
		}),
		(r.staggerFrom = function (i, n, s, a, l, c, f) {
			return (
				(s.runBackwards = 1),
				(Hn(s).immediateRender = Yt(s.immediateRender)),
				this.staggerTo(i, n, s, a, l, c, f)
			);
		}),
		(r.staggerFromTo = function (i, n, s, a, l, c, f, h) {
			return (
				(a.startAt = s),
				(Hn(a).immediateRender = Yt(a.immediateRender)),
				this.staggerTo(i, n, a, l, c, f, h)
			);
		}),
		(r.render = function (i, n, s) {
			var a = this._time,
				l = this._dirty ? this.totalDuration() : this._tDur,
				c = this._dur,
				f = i <= 0 ? 0 : vt(i),
				h = this._zTime < 0 != i < 0 && (this._initted || !c),
				d,
				u,
				p,
				g,
				_,
				v,
				y,
				m,
				w,
				b,
				T,
				k;
			if (
				(this !== Ke && f > l && i >= 0 && (f = l),
				f !== this._tTime || s || h)
			) {
				if (
					(a !== this._time &&
						c &&
						((f += this._time - a), (i += this._time - a)),
					(d = f),
					(w = this._start),
					(m = this._ts),
					(v = !m),
					h &&
						(c || (a = this._zTime),
						(i || !n) && (this._zTime = i)),
					this._repeat)
				) {
					if (
						((T = this._yoyo),
						(_ = c + this._rDelay),
						this._repeat < -1 && i < 0)
					)
						return this.totalTime(_ * 100 + i, n, s);
					if (
						((d = vt(f % _)),
						f === l
							? ((g = this._repeat), (d = c))
							: ((g = ~~(f / _)),
							  g && g === f / _ && ((d = c), g--),
							  d > c && (d = c)),
						(b = bn(this._tTime, _)),
						!a && this._tTime && b !== g && (b = g),
						T && g & 1 && ((d = c - d), (k = 1)),
						g !== b && !this._lock)
					) {
						var S = T && b & 1,
							C = S === (T && g & 1);
						if (
							(g < b && (S = !S),
							(a = S ? 0 : c),
							(this._lock = 1),
							(this.render(
								a || (k ? 0 : vt(g * _)),
								n,
								!c
							)._lock = 0),
							(this._tTime = f),
							!n && this.parent && cr(this, "onRepeat"),
							this.vars.repeatRefresh &&
								!k &&
								(this.invalidate()._lock = 1),
							(a && a !== this._time) ||
								v !== !this._ts ||
								(this.vars.onRepeat &&
									!this.parent &&
									!this._act))
						)
							return this;
						if (
							((c = this._dur),
							(l = this._tDur),
							C &&
								((this._lock = 2),
								(a = S ? c : -1e-4),
								this.render(a, !0),
								this.vars.repeatRefresh &&
									!k &&
									this.invalidate()),
							(this._lock = 0),
							!this._ts && !v)
						)
							return this;
						vc(this, k);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((y = mh(this, vt(a), vt(d))),
						y && (f -= d - (d = y._start))),
					(this._tTime = f),
					(this._time = d),
					(this._act = !m),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = i),
						(a = 0)),
					!a && d && !n && (cr(this, "onStart"), this._tTime !== f))
				)
					return this;
				if (d >= a && i >= 0)
					for (u = this._first; u; ) {
						if (
							((p = u._next),
							(u._act || d >= u._start) && u._ts && y !== u)
						) {
							if (u.parent !== this) return this.render(i, n, s);
							if (
								(u.render(
									u._ts > 0
										? (d - u._start) * u._ts
										: (u._dirty
												? u.totalDuration()
												: u._tDur) +
												(d - u._start) * u._ts,
									n,
									s
								),
								d !== this._time || (!this._ts && !v))
							) {
								(y = 0), p && (f += this._zTime = -Fe);
								break;
							}
						}
						u = p;
					}
				else {
					u = this._last;
					for (var $ = i < 0 ? i : d; u; ) {
						if (
							((p = u._prev),
							(u._act || $ <= u._end) && u._ts && y !== u)
						) {
							if (u.parent !== this) return this.render(i, n, s);
							if (
								(u.render(
									u._ts > 0
										? ($ - u._start) * u._ts
										: (u._dirty
												? u.totalDuration()
												: u._tDur) +
												($ - u._start) * u._ts,
									n,
									s || (zt && (u._initted || u._startAt))
								),
								d !== this._time || (!this._ts && !v))
							) {
								(y = 0), p && (f += this._zTime = $ ? -Fe : Fe);
								break;
							}
						}
						u = p;
					}
				}
				if (
					y &&
					!n &&
					(this.pause(),
					(y.render(d >= a ? 0 : -Fe)._zTime = d >= a ? 1 : -1),
					this._ts)
				)
					return (this._start = w), Os(this), this.render(i, n, s);
				this._onUpdate && !n && cr(this, "onUpdate", !0),
					((f === l && this._tTime >= this.totalDuration()) ||
						(!f && a)) &&
						(w === this._start ||
							Math.abs(m) !== Math.abs(this._ts)) &&
						(this._lock ||
							((i || !c) &&
								((f === l && this._ts > 0) ||
									(!f && this._ts < 0)) &&
								fi(this, 1),
							!n &&
								!(i < 0 && !a) &&
								(f || a || !l) &&
								(cr(
									this,
									f === l && i >= 0
										? "onComplete"
										: "onReverseComplete",
									!0
								),
								this._prom &&
									!(f < l && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(r.add = function (i, n) {
			var s = this;
			if ((Hr(n) || (n = or(this, n, i)), !(i instanceof Tn))) {
				if (kt(i))
					return (
						i.forEach(function (a) {
							return s.add(a, n);
						}),
						this
					);
				if (gt(i)) return this.addLabel(i, n);
				if (et(i)) i = ft.delayedCall(0, i);
				else return this;
			}
			return this !== i ? Or(this, i, n) : this;
		}),
		(r.getChildren = function (i, n, s, a) {
			i === void 0 && (i = !0),
				n === void 0 && (n = !0),
				s === void 0 && (s = !0),
				a === void 0 && (a = -lr);
			for (var l = [], c = this._first; c; )
				c._start >= a &&
					(c instanceof ft
						? n && l.push(c)
						: (s && l.push(c),
						  i && l.push.apply(l, c.getChildren(!0, n, s)))),
					(c = c._next);
			return l;
		}),
		(r.getById = function (i) {
			for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
				if (n[s].vars.id === i) return n[s];
		}),
		(r.remove = function (i) {
			return gt(i)
				? this.removeLabel(i)
				: et(i)
				? this.killTweensOf(i)
				: (Es(this, i),
				  i === this._recent && (this._recent = this._last),
				  Ci(this));
		}),
		(r.totalTime = function (i, n) {
			return arguments.length
				? ((this._forcing = 1),
				  !this._dp &&
						this._ts &&
						(this._start = vt(
							Ut.time -
								(this._ts > 0
									? i / this._ts
									: (this.totalDuration() - i) / -this._ts)
						)),
				  o.prototype.totalTime.call(this, i, n),
				  (this._forcing = 0),
				  this)
				: this._tTime;
		}),
		(r.addLabel = function (i, n) {
			return (this.labels[i] = or(this, n)), this;
		}),
		(r.removeLabel = function (i) {
			return delete this.labels[i], this;
		}),
		(r.addPause = function (i, n, s) {
			var a = ft.delayedCall(0, n || co, s);
			return (
				(a.data = "isPause"),
				(this._hasPause = 1),
				Or(this, a, or(this, i))
			);
		}),
		(r.removePause = function (i) {
			var n = this._first;
			for (i = or(this, i); n; )
				n._start === i && n.data === "isPause" && fi(n), (n = n._next);
		}),
		(r.killTweensOf = function (i, n, s) {
			for (var a = this.getTweensOf(i, s), l = a.length; l--; )
				ei !== a[l] && a[l].kill(i, n);
			return this;
		}),
		(r.getTweensOf = function (i, n) {
			for (var s = [], a = ur(i), l = this._first, c = Hr(n), f; l; )
				l instanceof ft
					? ch(l._targets, a) &&
					  (c
							? (!ei || (l._initted && l._ts)) &&
							  l.globalTime(0) <= n &&
							  l.globalTime(l.totalDuration()) > n
							: !n || l.isActive()) &&
					  s.push(l)
					: (f = l.getTweensOf(a, n)).length && s.push.apply(s, f),
					(l = l._next);
			return s;
		}),
		(r.tweenTo = function (i, n) {
			n = n || {};
			var s = this,
				a = or(s, i),
				l = n,
				c = l.startAt,
				f = l.onStart,
				h = l.onStartParams,
				d = l.immediateRender,
				u,
				p = ft.to(
					s,
					dr(
						{
							ease: n.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: a,
							overwrite: "auto",
							duration:
								n.duration ||
								Math.abs(
									(a -
										(c && "time" in c ? c.time : s._time)) /
										s.timeScale()
								) ||
								Fe,
							onStart: function () {
								if ((s.pause(), !u)) {
									var _ =
										n.duration ||
										Math.abs(
											(a -
												(c && "time" in c
													? c.time
													: s._time)) /
												s.timeScale()
										);
									p._dur !== _ &&
										wn(p, _, 0, 1).render(p._time, !0, !0),
										(u = 1);
								}
								f && f.apply(p, h || []);
							},
						},
						n
					)
				);
			return d ? p.render(0) : p;
		}),
		(r.tweenFromTo = function (i, n, s) {
			return this.tweenTo(n, dr({ startAt: { time: or(this, i) } }, s));
		}),
		(r.recent = function () {
			return this._recent;
		}),
		(r.nextLabel = function (i) {
			return i === void 0 && (i = this._time), Cl(this, or(this, i));
		}),
		(r.previousLabel = function (i) {
			return i === void 0 && (i = this._time), Cl(this, or(this, i), 1);
		}),
		(r.currentLabel = function (i) {
			return arguments.length
				? this.seek(i, !0)
				: this.previousLabel(this._time + Fe);
		}),
		(r.shiftChildren = function (i, n, s) {
			s === void 0 && (s = 0);
			for (var a = this._first, l = this.labels, c; a; )
				a._start >= s && ((a._start += i), (a._end += i)),
					(a = a._next);
			if (n) for (c in l) l[c] >= s && (l[c] += i);
			return Ci(this);
		}),
		(r.invalidate = function (i) {
			var n = this._first;
			for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
			return o.prototype.invalidate.call(this, i);
		}),
		(r.clear = function (i) {
			i === void 0 && (i = !0);
			for (var n = this._first, s; n; )
				(s = n._next), this.remove(n), (n = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				i && (this.labels = {}),
				Ci(this)
			);
		}),
		(r.totalDuration = function (i) {
			var n = 0,
				s = this,
				a = s._last,
				l = lr,
				c,
				f,
				h;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -i : i)
				);
			if (s._dirty) {
				for (h = s.parent; a; )
					(c = a._prev),
						a._dirty && a.totalDuration(),
						(f = a._start),
						f > l && s._sort && a._ts && !s._lock
							? ((s._lock = 1),
							  (Or(s, a, f - a._delay, 1)._lock = 0))
							: (l = f),
						f < 0 &&
							a._ts &&
							((n -= f),
							((!h && !s._dp) || (h && h.smoothChildTiming)) &&
								((s._start += f / s._ts),
								(s._time -= f),
								(s._tTime -= f)),
							s.shiftChildren(-f, !1, -1 / 0),
							(l = 0)),
						a._end > n && a._ts && (n = a._end),
						(a = c);
				wn(s, s === Ke && s._time > n ? s._time : n, 1, 1),
					(s._dirty = 0);
			}
			return s._tDur;
		}),
		(e.updateRoot = function (i) {
			if (
				(Ke._ts && (tc(Ke, hs(i, Ke)), (Ju = Ut.frame)), Ut.frame >= Pl)
			) {
				Pl += Zt.autoSleep || 120;
				var n = Ke._first;
				if (
					(!n || !n._ts) &&
					Zt.autoSleep &&
					Ut._listeners.length < 2
				) {
					for (; n && !n._ts; ) n = n._next;
					n || Ut.sleep();
				}
			}
		}),
		e
	);
})(Tn);
dr(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Rh = function (e, r, t, i, n, s, a) {
		var l = new Vt(this._pt, e, r, 0, 1, Mc, null, n),
			c = 0,
			f = 0,
			h,
			d,
			u,
			p,
			g,
			_,
			v,
			y;
		for (
			l.b = t,
				l.e = i,
				t += "",
				i += "",
				(v = ~i.indexOf("random(")) && (i = fo(i)),
				s && ((y = [t, i]), s(y, e, r), (t = y[0]), (i = y[1])),
				d = t.match(Rs) || [];
			(h = Rs.exec(i));

		)
			(p = h[0]),
				(g = i.substring(c, h.index)),
				u ? (u = (u + 1) % 5) : g.substr(-5) === "rgba(" && (u = 1),
				p !== d[f++] &&
					((_ = parseFloat(d[f - 1]) || 0),
					(l._pt = {
						_next: l._pt,
						p: g || f === 1 ? g : ",",
						s: _,
						c:
							p.charAt(1) === "="
								? un(_, p) - _
								: parseFloat(p) - _,
						m: u && u < 4 ? Math.round : 0,
					}),
					(c = Rs.lastIndex));
		return (
			(l.c = c < i.length ? i.substring(c, i.length) : ""),
			(l.fp = a),
			(ju.test(i) || v) && (l.e = 0),
			(this._pt = l),
			l
		);
	},
	tl = function (e, r, t, i, n, s, a, l, c, f) {
		et(i) && (i = i(n || 0, e, s));
		var h = e[r],
			d =
				t !== "get"
					? t
					: et(h)
					? c
						? e[
								r.indexOf("set") || !et(e["get" + r.substr(3)])
									? r
									: "get" + r.substr(3)
						  ](c)
						: e[r]()
					: h,
			u = et(h) ? (c ? $h : kc) : il,
			p;
		if (
			(gt(i) &&
				(~i.indexOf("random(") && (i = fo(i)),
				i.charAt(1) === "=" &&
					((p = un(d, i) + (Tt(d) || 0)), (p || p === 0) && (i = p))),
			!f || d !== i || ma)
		)
			return !isNaN(d * i) && i !== ""
				? ((p = new Vt(
						this._pt,
						e,
						r,
						+d || 0,
						i - (d || 0),
						typeof h == "boolean" ? Yh : Pc,
						0,
						u
				  )),
				  c && (p.fp = c),
				  a && p.modifier(a, this, e),
				  (this._pt = p))
				: (!h && !(r in e) && Qa(r, i),
				  Rh.call(this, e, r, d, i, u, l || Zt.stringFilter, c));
	},
	Fh = function (e, r, t, i, n) {
		if (
			(et(e) && (e = Un(e, n, r, t, i)),
			!Rr(e) || (e.style && e.nodeType) || kt(e) || Wu(e))
		)
			return gt(e) ? Un(e, n, r, t, i) : e;
		var s = {},
			a;
		for (a in e) s[a] = Un(e[a], n, r, t, i);
		return s;
	},
	xc = function (e, r, t, i, n, s) {
		var a, l, c, f;
		if (
			jt[e] &&
			(a = new jt[e]()).init(
				n,
				a.rawVars ? r[e] : Fh(r[e], i, n, s, t),
				t,
				i,
				s
			) !== !1 &&
			((t._pt = l =
				new Vt(t._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
			t !== nn)
		)
			for (
				c = t._ptLookup[t._targets.indexOf(n)], f = a._props.length;
				f--;

			)
				c[a._props[f]] = l;
		return a;
	},
	ei,
	ma,
	rl = function o(e, r, t) {
		var i = e.vars,
			n = i.ease,
			s = i.startAt,
			a = i.immediateRender,
			l = i.lazy,
			c = i.onUpdate,
			f = i.onUpdateParams,
			h = i.callbackScope,
			d = i.runBackwards,
			u = i.yoyoEase,
			p = i.keyframes,
			g = i.autoRevert,
			_ = e._dur,
			v = e._startAt,
			y = e._targets,
			m = e.parent,
			w = m && m.data === "nested" ? m.vars.targets : y,
			b = e._overwrite === "auto" && !ja,
			T = e.timeline,
			k,
			S,
			C,
			$,
			B,
			M,
			E,
			F,
			Y,
			R,
			V,
			G,
			ne;
		if (
			(T && (!p || !n) && (n = "none"),
			(e._ease = Di(n, vn.ease)),
			(e._yEase = u ? yc(Di(u === !0 ? n : u, vn.ease)) : 0),
			u &&
				e._yoyo &&
				!e._repeat &&
				((u = e._yEase), (e._yEase = e._ease), (e._ease = u)),
			(e._from = !T && !!i.runBackwards),
			!T || (p && !i.stagger))
		) {
			if (
				((F = y[0] ? Oi(y[0]).harness : 0),
				(G = F && i[F.prop]),
				(k = fs(i, Za)),
				v &&
					(v._zTime < 0 && v.progress(1),
					r < 0 && d && a && !g
						? v.render(-1, !0)
						: v.revert(d && _ ? Wo : lh),
					(v._lazy = 0)),
				s)
			) {
				if (
					(fi(
						(e._startAt = ft.set(
							y,
							dr(
								{
									data: "isStart",
									overwrite: !1,
									parent: m,
									immediateRender: !0,
									lazy: Yt(l),
									startAt: null,
									delay: 0,
									onUpdate: c,
									onUpdateParams: f,
									callbackScope: h,
									stagger: 0,
								},
								s
							)
						))
					),
					(e._startAt._dp = 0),
					r < 0 && (zt || (!a && !g)) && e._startAt.revert(Wo),
					a && _ && r <= 0 && t <= 0)
				) {
					r && (e._zTime = r);
					return;
				}
			} else if (d && _ && !v) {
				if (
					(r && (a = !1),
					(C = dr(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: a && Yt(l),
							immediateRender: a,
							stagger: 0,
							parent: m,
						},
						k
					)),
					G && (C[F.prop] = G),
					fi((e._startAt = ft.set(y, C))),
					(e._startAt._dp = 0),
					r < 0 &&
						(zt
							? e._startAt.revert(Wo)
							: e._startAt.render(-1, !0)),
					(e._zTime = r),
					!a)
				)
					o(e._startAt, Fe, Fe);
				else if (!r) return;
			}
			for (
				e._pt = e._ptCache = 0, l = (_ && Yt(l)) || (l && !_), S = 0;
				S < y.length;
				S++
			) {
				if (
					((B = y[S]),
					(E = B._gsap || el(y)[S]._gsap),
					(e._ptLookup[S] = R = {}),
					fa[E.id] && ai.length && cs(),
					(V = w === y ? S : w.indexOf(B)),
					F &&
						(Y = new F()).init(B, G || k, e, V, w) !== !1 &&
						((e._pt = $ =
							new Vt(
								e._pt,
								B,
								Y.name,
								0,
								1,
								Y.render,
								Y,
								0,
								Y.priority
							)),
						Y._props.forEach(function (O) {
							R[O] = $;
						}),
						Y.priority && (M = 1)),
					!F || G)
				)
					for (C in k)
						jt[C] && (Y = xc(C, k, e, V, B, w))
							? Y.priority && (M = 1)
							: (R[C] = $ =
									tl.call(
										e,
										B,
										C,
										"get",
										k[C],
										V,
										w,
										0,
										i.stringFilter
									));
				e._op && e._op[S] && e.kill(B, e._op[S]),
					b &&
						e._pt &&
						((ei = e),
						Ke.killTweensOf(B, R, e.globalTime(r)),
						(ne = !e.parent),
						(ei = 0)),
					e._pt && l && (fa[E.id] = 1);
			}
			M && Ec(e), e._onInit && e._onInit(e);
		}
		(e._onUpdate = c),
			(e._initted = (!e._op || e._pt) && !ne),
			p && r <= 0 && T.render(lr, !0, !0);
	},
	Nh = function (e, r, t, i, n, s, a) {
		var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[r],
			c,
			f,
			h,
			d;
		if (!l)
			for (
				l = e._ptCache[r] = [], h = e._ptLookup, d = e._targets.length;
				d--;

			) {
				if (((c = h[d][r]), c && c.d && c.d._pt))
					for (c = c.d._pt; c && c.p !== r && c.fp !== r; )
						c = c._next;
				if (!c)
					return (ma = 1), (e.vars[r] = "+=0"), rl(e, a), (ma = 0), 1;
				l.push(c);
			}
		for (d = l.length; d--; )
			(f = l[d]),
				(c = f._pt || f),
				(c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + s * c.c),
				(c.c = t - c.s),
				f.e && (f.e = ot(t) + Tt(f.e)),
				f.b && (f.b = c.s + Tt(f.b));
	},
	Ih = function (e, r) {
		var t = e[0] ? Oi(e[0]).harness : 0,
			i = t && t.aliases,
			n,
			s,
			a,
			l;
		if (!i) return r;
		n = Bi({}, r);
		for (s in i)
			if (s in n)
				for (l = i[s].split(","), a = l.length; a--; ) n[l[a]] = n[s];
		return n;
	},
	Bh = function (e, r, t, i) {
		var n = r.ease || i || "power1.inOut",
			s,
			a;
		if (kt(r))
			(a = t[e] || (t[e] = [])),
				r.forEach(function (l, c) {
					return a.push({
						t: (c / (r.length - 1)) * 100,
						v: l,
						e: n,
					});
				});
		else
			for (s in r)
				(a = t[s] || (t[s] = [])),
					s === "ease" || a.push({ t: parseFloat(e), v: r[s], e: n });
	},
	Un = function (e, r, t, i, n) {
		return et(e)
			? e.call(r, t, i, n)
			: gt(e) && ~e.indexOf("random(")
			? fo(e)
			: e;
	},
	Tc = Ja + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	Sc = {};
qt(Tc + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
	return (Sc[o] = 1);
});
var ft = (function (o) {
	Vu(e, o);
	function e(t, i, n, s) {
		var a;
		typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
			(a = o.call(this, s ? i : Hn(i)) || this);
		var l = a.vars,
			c = l.duration,
			f = l.delay,
			h = l.immediateRender,
			d = l.stagger,
			u = l.overwrite,
			p = l.keyframes,
			g = l.defaults,
			_ = l.scrollTrigger,
			v = l.yoyoEase,
			y = i.parent || Ke,
			m = (kt(t) || Wu(t) ? Hr(t[0]) : "length" in i) ? [t] : ur(t),
			w,
			b,
			T,
			k,
			S,
			C,
			$,
			B;
		if (
			((a._targets = m.length
				? el(m)
				: us(
						"GSAP target " +
							t +
							" not found. https://greensock.com",
						!Zt.nullTargetWarn
				  ) || []),
			(a._ptLookup = []),
			(a._overwrite = u),
			p || d || Po(c) || Po(f))
		) {
			if (
				((i = a.vars),
				(w = a.timeline =
					new Bt({
						data: "nested",
						defaults: g || {},
						targets: y && y.data === "nested" ? y.vars.targets : m,
					})),
				w.kill(),
				(w.parent = w._dp = Ir(a)),
				(w._start = 0),
				d || Po(c) || Po(f))
			) {
				if (((k = m.length), ($ = d && cc(d)), Rr(d)))
					for (S in d)
						~Tc.indexOf(S) && (B || (B = {}), (B[S] = d[S]));
				for (b = 0; b < k; b++)
					(T = fs(i, Sc)),
						(T.stagger = 0),
						v && (T.yoyoEase = v),
						B && Bi(T, B),
						(C = m[b]),
						(T.duration = +Un(c, Ir(a), b, C, m)),
						(T.delay = (+Un(f, Ir(a), b, C, m) || 0) - a._delay),
						!d &&
							k === 1 &&
							T.delay &&
							((a._delay = f = T.delay),
							(a._start += f),
							(T.delay = 0)),
						w.to(C, T, $ ? $(b, C, m) : 0),
						(w._ease = Se.none);
				w.duration() ? (c = f = 0) : (a.timeline = 0);
			} else if (p) {
				Hn(dr(w.vars.defaults, { ease: "none" })),
					(w._ease = Di(p.ease || i.ease || "none"));
				var M = 0,
					E,
					F,
					Y;
				if (kt(p))
					p.forEach(function (R) {
						return w.to(m, R, ">");
					}),
						w.duration();
				else {
					T = {};
					for (S in p)
						S === "ease" ||
							S === "easeEach" ||
							Bh(S, p[S], T, p.easeEach);
					for (S in T)
						for (
							E = T[S].sort(function (R, V) {
								return R.t - V.t;
							}),
								M = 0,
								b = 0;
							b < E.length;
							b++
						)
							(F = E[b]),
								(Y = {
									ease: F.e,
									duration:
										((F.t - (b ? E[b - 1].t : 0)) / 100) *
										c,
								}),
								(Y[S] = F.v),
								w.to(m, Y, M),
								(M += Y.duration);
					w.duration() < c &&
						w.to({}, { duration: c - w.duration() });
				}
			}
			c || a.duration((c = w.duration()));
		} else a.timeline = 0;
		return (
			u === !0 && !ja && ((ei = Ir(a)), Ke.killTweensOf(m), (ei = 0)),
			Or(y, Ir(a), n),
			i.reversed && a.reverse(),
			i.paused && a.paused(!0),
			(h ||
				(!c &&
					!p &&
					a._start === vt(y._time) &&
					Yt(h) &&
					ph(Ir(a)) &&
					y.data !== "nested")) &&
				((a._tTime = -Fe), a.render(Math.max(0, -f) || 0)),
			_ && sc(Ir(a), _),
			a
		);
	}
	var r = e.prototype;
	return (
		(r.render = function (i, n, s) {
			var a = this._time,
				l = this._tDur,
				c = this._dur,
				f = i < 0,
				h = i > l - Fe && !f ? l : i < Fe ? 0 : i,
				d,
				u,
				p,
				g,
				_,
				v,
				y,
				m,
				w;
			if (!c) _h(this, i, n, s);
			else if (
				h !== this._tTime ||
				!i ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== f)
			) {
				if (((d = h), (m = this.timeline), this._repeat)) {
					if (((g = c + this._rDelay), this._repeat < -1 && f))
						return this.totalTime(g * 100 + i, n, s);
					if (
						((d = vt(h % g)),
						h === l
							? ((p = this._repeat), (d = c))
							: ((p = ~~(h / g)),
							  p && p === h / g && ((d = c), p--),
							  d > c && (d = c)),
						(v = this._yoyo && p & 1),
						v && ((w = this._yEase), (d = c - d)),
						(_ = bn(this._tTime, g)),
						d === a && !s && this._initted)
					)
						return (this._tTime = h), this;
					p !== _ &&
						(m && this._yEase && vc(m, v),
						this.vars.repeatRefresh &&
							!v &&
							!this._lock &&
							((this._lock = s = 1),
							(this.render(
								vt(g * p),
								!0
							).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (ac(this, f ? i : d, s, n, h))
						return (this._tTime = 0), this;
					if (a !== this._time) return this;
					if (c !== this._dur) return this.render(i, n, s);
				}
				if (
					((this._tTime = h),
					(this._time = d),
					!this._act &&
						this._ts &&
						((this._act = 1), (this._lazy = 0)),
					(this.ratio = y = (w || this._ease)(d / c)),
					this._from && (this.ratio = y = 1 - y),
					d && !a && !n && (cr(this, "onStart"), this._tTime !== h))
				)
					return this;
				for (u = this._pt; u; ) u.r(y, u.d), (u = u._next);
				(m &&
					m.render(
						i < 0
							? i
							: !d && v
							? -Fe
							: m._dur * m._ease(d / this._dur),
						n,
						s
					)) ||
					(this._startAt && (this._zTime = i)),
					this._onUpdate &&
						!n &&
						(f && ha(this, i, n, s), cr(this, "onUpdate")),
					this._repeat &&
						p !== _ &&
						this.vars.onRepeat &&
						!n &&
						this.parent &&
						cr(this, "onRepeat"),
					(h === this._tDur || !h) &&
						this._tTime === h &&
						(f && !this._onUpdate && ha(this, i, !0, !0),
						(i || !c) &&
							((h === this._tDur && this._ts > 0) ||
								(!h && this._ts < 0)) &&
							fi(this, 1),
						!n &&
							!(f && !a) &&
							(h || a || v) &&
							(cr(
								this,
								h === l ? "onComplete" : "onReverseComplete",
								!0
							),
							this._prom &&
								!(h < l && this.timeScale() > 0) &&
								this._prom()));
			}
			return this;
		}),
		(r.targets = function () {
			return this._targets;
		}),
		(r.invalidate = function (i) {
			return (
				(!i || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt =
					this._op =
					this._onUpdate =
					this._lazy =
					this.ratio =
						0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(i),
				o.prototype.invalidate.call(this, i)
			);
		}),
		(r.resetTo = function (i, n, s, a) {
			ho || Ut.wake(), this._ts || this.play();
			var l = Math.min(
					this._dur,
					(this._dp._time - this._start) * this._ts
				),
				c;
			return (
				this._initted || rl(this, l),
				(c = this._ease(l / this._dur)),
				Nh(this, i, n, s, a, c, l)
					? this.resetTo(i, n, s, a)
					: (Cs(this, 0),
					  this.parent ||
							nc(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0
							),
					  this.render(0))
			);
		}),
		(r.kill = function (i, n) {
			if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
				return (
					(this._lazy = this._pt = 0), this.parent ? Nn(this) : this
				);
			if (this.timeline) {
				var s = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(
						i,
						n,
						ei && ei.vars.overwrite !== !0
					)._first || Nn(this),
					this.parent &&
						s !== this.timeline.totalDuration() &&
						wn(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var a = this._targets,
				l = i ? ur(i) : a,
				c = this._ptLookup,
				f = this._pt,
				h,
				d,
				u,
				p,
				g,
				_,
				v;
			if ((!n || n === "all") && hh(a, l))
				return n === "all" && (this._pt = 0), Nn(this);
			for (
				h = this._op = this._op || [],
					n !== "all" &&
						(gt(n) &&
							((g = {}),
							qt(n, function (y) {
								return (g[y] = 1);
							}),
							(n = g)),
						(n = Ih(a, n))),
					v = a.length;
				v--;

			)
				if (~l.indexOf(a[v])) {
					(d = c[v]),
						n === "all"
							? ((h[v] = n), (p = d), (u = {}))
							: ((u = h[v] = h[v] || {}), (p = n));
					for (g in p)
						(_ = d && d[g]),
							_ &&
								((!("kill" in _.d) || _.d.kill(g) === !0) &&
									Es(this, _, "_pt"),
								delete d[g]),
							u !== "all" && (u[g] = 1);
				}
			return this._initted && !this._pt && f && Nn(this), this;
		}),
		(e.to = function (i, n) {
			return new e(i, n, arguments[2]);
		}),
		(e.from = function (i, n) {
			return jn(1, arguments);
		}),
		(e.delayedCall = function (i, n, s, a) {
			return new e(n, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: i,
				onComplete: n,
				onReverseComplete: n,
				onCompleteParams: s,
				onReverseCompleteParams: s,
				callbackScope: a,
			});
		}),
		(e.fromTo = function (i, n, s) {
			return jn(2, arguments);
		}),
		(e.set = function (i, n) {
			return (
				(n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n)
			);
		}),
		(e.killTweensOf = function (i, n, s) {
			return Ke.killTweensOf(i, n, s);
		}),
		e
	);
})(Tn);
dr(ft.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
qt("staggerTo,staggerFrom,staggerFromTo", function (o) {
	ft[o] = function () {
		var e = new Bt(),
			r = pa.call(arguments, 0);
		return r.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, r);
	};
});
var il = function (e, r, t) {
		return (e[r] = t);
	},
	kc = function (e, r, t) {
		return e[r](t);
	},
	$h = function (e, r, t, i) {
		return e[r](i.fp, t);
	},
	zh = function (e, r, t) {
		return e.setAttribute(r, t);
	},
	nl = function (e, r) {
		return et(e[r]) ? kc : Ua(e[r]) && e.setAttribute ? zh : il;
	},
	Pc = function (e, r) {
		return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r);
	},
	Yh = function (e, r) {
		return r.set(r.t, r.p, !!(r.s + r.c * e), r);
	},
	Mc = function (e, r) {
		var t = r._pt,
			i = "";
		if (!e && r.b) i = r.b;
		else if (e === 1 && r.e) i = r.e;
		else {
			for (; t; )
				(i =
					t.p +
					(t.m
						? t.m(t.s + t.c * e)
						: Math.round((t.s + t.c * e) * 1e4) / 1e4) +
					i),
					(t = t._next);
			i += r.c;
		}
		r.set(r.t, r.p, i, r);
	},
	ol = function (e, r) {
		for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next);
	},
	qh = function (e, r, t, i) {
		for (var n = this._pt, s; n; )
			(s = n._next), n.p === i && n.modifier(e, r, t), (n = s);
	},
	Vh = function (e) {
		for (var r = this._pt, t, i; r; )
			(i = r._next),
				(r.p === e && !r.op) || r.op === e
					? Es(this, r, "_pt")
					: r.dep || (t = 1),
				(r = i);
		return !t;
	},
	Xh = function (e, r, t, i) {
		i.mSet(e, r, i.m.call(i.tween, t, i.mt), i);
	},
	Ec = function (e) {
		for (var r = e._pt, t, i, n, s; r; ) {
			for (t = r._next, i = n; i && i.pr > r.pr; ) i = i._next;
			(r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
				(r._next = i) ? (i._prev = r) : (s = r),
				(r = t);
		}
		e._pt = n;
	},
	Vt = (function () {
		function o(r, t, i, n, s, a, l, c, f) {
			(this.t = t),
				(this.s = n),
				(this.c = s),
				(this.p = i),
				(this.r = a || Pc),
				(this.d = l || this),
				(this.set = c || il),
				(this.pr = f || 0),
				(this._next = r),
				r && (r._prev = this);
		}
		var e = o.prototype;
		return (
			(e.modifier = function (t, i, n) {
				(this.mSet = this.mSet || this.set),
					(this.set = Xh),
					(this.m = t),
					(this.mt = n),
					(this.tween = i);
			}),
			o
		);
	})();
qt(
	Ja +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (o) {
		return (Za[o] = 1);
	}
);
Jt.TweenMax = Jt.TweenLite = ft;
Jt.TimelineLite = Jt.TimelineMax = Bt;
Ke = new Bt({
	sortChildren: !1,
	defaults: vn,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0,
});
Zt.stringFilter = mc;
var Sn = [],
	jo = {},
	Gh = [],
	Al = 0,
	$s = function (e) {
		return (jo[e] || Gh).map(function (r) {
			return r();
		});
	},
	ya = function () {
		var e = Date.now(),
			r = [];
		e - Al > 2 &&
			($s("matchMediaInit"),
			Sn.forEach(function (t) {
				var i = t.queries,
					n = t.conditions,
					s,
					a,
					l,
					c;
				for (a in i)
					(s = sr.matchMedia(i[a]).matches),
						s && (l = 1),
						s !== n[a] && ((n[a] = s), (c = 1));
				c && (t.revert(), l && r.push(t));
			}),
			$s("matchMediaRevert"),
			r.forEach(function (t) {
				return t.onMatch(t);
			}),
			(Al = e),
			$s("matchMedia"));
	},
	Oc = (function () {
		function o(r, t) {
			(this.selector = t && ga(t)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				r && this.add(r);
		}
		var e = o.prototype;
		return (
			(e.add = function (t, i, n) {
				et(t) && ((n = i), (i = t), (t = et));
				var s = this,
					a = function () {
						var c = lt,
							f = s.selector,
							h;
						return (
							c && c !== s && c.data.push(s),
							n && (s.selector = ga(n)),
							(lt = s),
							(h = i.apply(s, arguments)),
							et(h) && s._r.push(h),
							(lt = c),
							(s.selector = f),
							(s.isReverted = !1),
							h
						);
					};
				return (s.last = a), t === et ? a(s) : t ? (s[t] = a) : a;
			}),
			(e.ignore = function (t) {
				var i = lt;
				(lt = null), t(this), (lt = i);
			}),
			(e.getTweens = function () {
				var t = [];
				return (
					this.data.forEach(function (i) {
						return i instanceof o
							? t.push.apply(t, i.getTweens())
							: i instanceof ft &&
									!(i.parent && i.parent.data === "nested") &&
									t.push(i);
					}),
					t
				);
			}),
			(e.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(e.kill = function (t, i) {
				var n = this;
				if (t) {
					var s = this.getTweens();
					this.data.forEach(function (l) {
						l.data === "isFlip" &&
							(l.revert(),
							l.getChildren(!0, !0, !1).forEach(function (c) {
								return s.splice(s.indexOf(c), 1);
							}));
					}),
						s
							.map(function (l) {
								return { g: l.globalTime(0), t: l };
							})
							.sort(function (l, c) {
								return c.g - l.g || -1;
							})
							.forEach(function (l) {
								return l.t.revert(t);
							}),
						this.data.forEach(function (l) {
							return (
								!(l instanceof Tn) && l.revert && l.revert(t)
							);
						}),
						this._r.forEach(function (l) {
							return l(t, n);
						}),
						(this.isReverted = !0);
				} else
					this.data.forEach(function (l) {
						return l.kill && l.kill();
					});
				if ((this.clear(), i)) {
					var a = Sn.indexOf(this);
					~a && Sn.splice(a, 1);
				}
			}),
			(e.revert = function (t) {
				this.kill(t || {});
			}),
			o
		);
	})(),
	Wh = (function () {
		function o(r) {
			(this.contexts = []), (this.scope = r);
		}
		var e = o.prototype;
		return (
			(e.add = function (t, i, n) {
				Rr(t) || (t = { matches: t });
				var s = new Oc(0, n || this.scope),
					a = (s.conditions = {}),
					l,
					c,
					f;
				this.contexts.push(s),
					(i = s.add("onMatch", i)),
					(s.queries = t);
				for (c in t)
					c === "all"
						? (f = 1)
						: ((l = sr.matchMedia(t[c])),
						  l &&
								(Sn.indexOf(s) < 0 && Sn.push(s),
								(a[c] = l.matches) && (f = 1),
								l.addListener
									? l.addListener(ya)
									: l.addEventListener("change", ya)));
				return f && i(s), this;
			}),
			(e.revert = function (t) {
				this.kill(t || {});
			}),
			(e.kill = function (t) {
				this.contexts.forEach(function (i) {
					return i.kill(t, !0);
				});
			}),
			o
		);
	})(),
	ds = {
		registerPlugin: function () {
			for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
				r[t] = arguments[t];
			r.forEach(function (i) {
				return Mh(i);
			});
		},
		timeline: function (e) {
			return new Bt(e);
		},
		getTweensOf: function (e, r) {
			return Ke.getTweensOf(e, r);
		},
		getProperty: function (e, r, t, i) {
			gt(e) && (e = ur(e)[0]);
			var n = Oi(e || {}).get,
				s = t ? ic : rc;
			return (
				t === "native" && (t = ""),
				e &&
					(r
						? s(((jt[r] && jt[r].get) || n)(e, r, t, i))
						: function (a, l, c) {
								return s(
									((jt[a] && jt[a].get) || n)(e, a, l, c)
								);
						  })
			);
		},
		quickSetter: function (e, r, t) {
			if (((e = ur(e)), e.length > 1)) {
				var i = e.map(function (f) {
						return er.quickSetter(f, r, t);
					}),
					n = i.length;
				return function (f) {
					for (var h = n; h--; ) i[h](f);
				};
			}
			e = e[0] || {};
			var s = jt[r],
				a = Oi(e),
				l = (a.harness && (a.harness.aliases || {})[r]) || r,
				c = s
					? function (f) {
							var h = new s();
							(nn._pt = 0),
								h.init(e, t ? f + t : f, nn, 0, [e]),
								h.render(1, h),
								nn._pt && ol(1, nn);
					  }
					: a.set(e, l);
			return s
				? c
				: function (f) {
						return c(e, l, t ? f + t : f, a, 1);
				  };
		},
		quickTo: function (e, r, t) {
			var i,
				n = er.to(
					e,
					Bi(
						((i = {}), (i[r] = "+=0.1"), (i.paused = !0), i),
						t || {}
					)
				),
				s = function (l, c, f) {
					return n.resetTo(r, l, c, f);
				};
			return (s.tween = n), s;
		},
		isTweening: function (e) {
			return Ke.getTweensOf(e, !0).length > 0;
		},
		defaults: function (e) {
			return (
				e && e.ease && (e.ease = Di(e.ease, vn.ease)), Ml(vn, e || {})
			);
		},
		config: function (e) {
			return Ml(Zt, e || {});
		},
		registerEffect: function (e) {
			var r = e.name,
				t = e.effect,
				i = e.plugins,
				n = e.defaults,
				s = e.extendTimeline;
			(i || "").split(",").forEach(function (a) {
				return (
					a &&
					!jt[a] &&
					!Jt[a] &&
					us(r + " effect requires " + a + " plugin.")
				);
			}),
				(Fs[r] = function (a, l, c) {
					return t(ur(a), dr(l || {}, n), c);
				}),
				s &&
					(Bt.prototype[r] = function (a, l, c) {
						return this.add(
							Fs[r](a, Rr(l) ? l : (c = l) && {}, this),
							c
						);
					});
		},
		registerEase: function (e, r) {
			Se[e] = Di(r);
		},
		parseEase: function (e, r) {
			return arguments.length ? Di(e, r) : Se;
		},
		getById: function (e) {
			return Ke.getById(e);
		},
		exportRoot: function (e, r) {
			e === void 0 && (e = {});
			var t = new Bt(e),
				i,
				n;
			for (
				t.smoothChildTiming = Yt(e.smoothChildTiming),
					Ke.remove(t),
					t._dp = 0,
					t._time = t._tTime = Ke._time,
					i = Ke._first;
				i;

			)
				(n = i._next),
					(r ||
						!(
							!i._dur &&
							i instanceof ft &&
							i.vars.onComplete === i._targets[0]
						)) &&
						Or(t, i, i._start - i._delay),
					(i = n);
			return Or(Ke, t, 0), t;
		},
		context: function (e, r) {
			return e ? new Oc(e, r) : lt;
		},
		matchMedia: function (e) {
			return new Wh(e);
		},
		matchMediaRefresh: function () {
			return (
				Sn.forEach(function (e) {
					var r = e.conditions,
						t,
						i;
					for (i in r) r[i] && ((r[i] = !1), (t = 1));
					t && e.revert();
				}) || ya()
			);
		},
		addEventListener: function (e, r) {
			var t = jo[e] || (jo[e] = []);
			~t.indexOf(r) || t.push(r);
		},
		removeEventListener: function (e, r) {
			var t = jo[e],
				i = t && t.indexOf(r);
			i >= 0 && t.splice(i, 1);
		},
		utils: {
			wrap: Sh,
			wrapYoyo: kh,
			distribute: cc,
			random: hc,
			snap: fc,
			normalize: Th,
			getUnit: Tt,
			clamp: vh,
			splitColor: gc,
			toArray: ur,
			selector: ga,
			mapRange: pc,
			pipe: wh,
			unitize: xh,
			interpolate: Ph,
			shuffle: uc,
		},
		install: Qu,
		effects: Fs,
		ticker: Ut,
		updateRoot: Bt.updateRoot,
		plugins: jt,
		globalTimeline: Ke,
		core: {
			PropTween: Vt,
			globals: Zu,
			Tween: ft,
			Timeline: Bt,
			Animation: Tn,
			getCache: Oi,
			_removeLinkedListItem: Es,
			reverting: function () {
				return zt;
			},
			context: function (e) {
				return e && lt && (lt.data.push(e), (e._ctx = lt)), lt;
			},
			suppressOverwrites: function (e) {
				return (ja = e);
			},
		},
	};
qt("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
	return (ds[o] = ft[o]);
});
Ut.add(Bt.updateRoot);
nn = ds.to({}, { duration: 0 });
var Hh = function (e, r) {
		for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
			t = t._next;
		return t;
	},
	jh = function (e, r) {
		var t = e._targets,
			i,
			n,
			s;
		for (i in r)
			for (n = t.length; n--; )
				(s = e._ptLookup[n][i]),
					s &&
						(s = s.d) &&
						(s._pt && (s = Hh(s, i)),
						s && s.modifier && s.modifier(r[i], e, t[n], i));
	},
	zs = function (e, r) {
		return {
			name: e,
			rawVars: 1,
			init: function (i, n, s) {
				s._onInit = function (a) {
					var l, c;
					if (
						(gt(n) &&
							((l = {}),
							qt(n, function (f) {
								return (l[f] = 1);
							}),
							(n = l)),
						r)
					) {
						l = {};
						for (c in n) l[c] = r(n[c]);
						n = l;
					}
					jh(a, n);
				};
			},
		};
	},
	er =
		ds.registerPlugin(
			{
				name: "attr",
				init: function (e, r, t, i, n) {
					var s, a, l;
					this.tween = t;
					for (s in r)
						(l = e.getAttribute(s) || ""),
							(a = this.add(
								e,
								"setAttribute",
								(l || 0) + "",
								r[s],
								i,
								n,
								0,
								0,
								s
							)),
							(a.op = s),
							(a.b = l),
							this._props.push(s);
				},
				render: function (e, r) {
					for (var t = r._pt; t; )
						zt ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d),
							(t = t._next);
				},
			},
			{
				name: "endArray",
				init: function (e, r) {
					for (var t = r.length; t--; )
						this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1);
				},
			},
			zs("roundProps", _a),
			zs("modifiers"),
			zs("snap", fc)
		) || ds;
ft.version = Bt.version = er.version = "3.11.3";
Ku = 1;
Gu() && xn();
Se.Power0;
Se.Power1;
Se.Power2;
Se.Power3;
Se.Power4;
Se.Linear;
Se.Quad;
Se.Cubic;
Se.Quart;
Se.Quint;
Se.Strong;
Se.Elastic;
Se.Back;
Se.SteppedEase;
Se.Bounce;
Se.Sine;
Se.Expo;
Se.Circ;
var Ll,
	ti,
	cn,
	sl,
	Mi,
	Rl,
	al,
	Uh = function () {
		return typeof window < "u";
	},
	jr = {},
	wi = 180 / Math.PI,
	fn = Math.PI / 180,
	Hi = Math.atan2,
	Fl = 1e8,
	ll = /([A-Z])/g,
	Kh = /(left|right|width|margin|padding|x)/i,
	Qh = /[\s,\(]\S/,
	qr = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	va = function (e, r) {
		return r.set(
			r.t,
			r.p,
			Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u,
			r
		);
	},
	Zh = function (e, r) {
		return r.set(
			r.t,
			r.p,
			e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u,
			r
		);
	},
	Jh = function (e, r) {
		return r.set(
			r.t,
			r.p,
			e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b,
			r
		);
	},
	ed = function (e, r) {
		var t = r.s + r.c * e;
		r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r);
	},
	Cc = function (e, r) {
		return r.set(r.t, r.p, e ? r.e : r.b, r);
	},
	Dc = function (e, r) {
		return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r);
	},
	td = function (e, r, t) {
		return (e.style[r] = t);
	},
	rd = function (e, r, t) {
		return e.style.setProperty(r, t);
	},
	id = function (e, r, t) {
		return (e._gsap[r] = t);
	},
	nd = function (e, r, t) {
		return (e._gsap.scaleX = e._gsap.scaleY = t);
	},
	od = function (e, r, t, i, n) {
		var s = e._gsap;
		(s.scaleX = s.scaleY = t), s.renderTransform(n, s);
	},
	sd = function (e, r, t, i, n) {
		var s = e._gsap;
		(s[r] = t), s.renderTransform(n, s);
	},
	Qe = "transform",
	xr = Qe + "Origin",
	ad = function (e, r) {
		var t = this,
			i = this.target,
			n = i.style;
		if (e in jr) {
			if (
				((this.tfm = this.tfm || {}),
				e !== "transform" &&
					((e = qr[e] || e),
					~e.indexOf(",")
						? e.split(",").forEach(function (s) {
								return (t.tfm[s] = Br(i, s));
						  })
						: (this.tfm[e] = i._gsap.x ? i._gsap[e] : Br(i, e))),
				this.props.indexOf(Qe) >= 0)
			)
				return;
			i._gsap.svg &&
				((this.svgo = i.getAttribute("data-svg-origin")),
				this.props.push(xr, r, "")),
				(e = Qe);
		}
		(n || r) && this.props.push(e, r, n[e]);
	},
	Ac = function (e) {
		e.translate &&
			(e.removeProperty("translate"),
			e.removeProperty("scale"),
			e.removeProperty("rotate"));
	},
	ld = function () {
		var e = this.props,
			r = this.target,
			t = r.style,
			i = r._gsap,
			n,
			s;
		for (n = 0; n < e.length; n += 3)
			e[n + 1]
				? (r[e[n]] = e[n + 2])
				: e[n + 2]
				? (t[e[n]] = e[n + 2])
				: t.removeProperty(e[n].replace(ll, "-$1").toLowerCase());
		if (this.tfm) {
			for (s in this.tfm) i[s] = this.tfm[s];
			i.svg &&
				(i.renderTransform(),
				r.setAttribute("data-svg-origin", this.svgo || "")),
				(n = al()),
				n && !n.isStart && !t[Qe] && (Ac(t), (i.uncache = 1));
		}
	},
	Lc = function (e, r) {
		var t = { target: e, props: [], revert: ld, save: ad };
		return (
			r &&
				r.split(",").forEach(function (i) {
					return t.save(i);
				}),
			t
		);
	},
	Rc,
	ba = function (e, r) {
		var t = ti.createElementNS
			? ti.createElementNS(
					(r || "http://www.w3.org/1999/xhtml").replace(
						/^https/,
						"http"
					),
					e
			  )
			: ti.createElement(e);
		return t.style ? t : ti.createElement(e);
	},
	Ar = function o(e, r, t) {
		var i = getComputedStyle(e);
		return (
			i[r] ||
			i.getPropertyValue(r.replace(ll, "-$1").toLowerCase()) ||
			i.getPropertyValue(r) ||
			(!t && o(e, kn(r) || r, 1)) ||
			""
		);
	},
	Nl = "O,Moz,ms,Ms,Webkit".split(","),
	kn = function (e, r, t) {
		var i = r || Mi,
			n = i.style,
			s = 5;
		if (e in n && !t) return e;
		for (
			e = e.charAt(0).toUpperCase() + e.substr(1);
			s-- && !(Nl[s] + e in n);

		);
		return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Nl[s] : "") + e;
	},
	wa = function () {
		Uh() &&
			window.document &&
			((Ll = window),
			(ti = Ll.document),
			(cn = ti.documentElement),
			(Mi = ba("div") || { style: {} }),
			ba("div"),
			(Qe = kn(Qe)),
			(xr = Qe + "Origin"),
			(Mi.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(Rc = !!kn("perspective")),
			(al = er.core.reverting),
			(sl = 1));
	},
	Ys = function o(e) {
		var r = ba(
				"svg",
				(this.ownerSVGElement &&
					this.ownerSVGElement.getAttribute("xmlns")) ||
					"http://www.w3.org/2000/svg"
			),
			t = this.parentNode,
			i = this.nextSibling,
			n = this.style.cssText,
			s;
		if (
			(cn.appendChild(r),
			r.appendChild(this),
			(this.style.display = "block"),
			e)
		)
			try {
				(s = this.getBBox()),
					(this._gsapBBox = this.getBBox),
					(this.getBBox = o);
			} catch {}
		else this._gsapBBox && (s = this._gsapBBox());
		return (
			t && (i ? t.insertBefore(this, i) : t.appendChild(this)),
			cn.removeChild(r),
			(this.style.cssText = n),
			s
		);
	},
	Il = function (e, r) {
		for (var t = r.length; t--; )
			if (e.hasAttribute(r[t])) return e.getAttribute(r[t]);
	},
	Fc = function (e) {
		var r;
		try {
			r = e.getBBox();
		} catch {
			r = Ys.call(e, !0);
		}
		return (
			(r && (r.width || r.height)) ||
				e.getBBox === Ys ||
				(r = Ys.call(e, !0)),
			r && !r.width && !r.x && !r.y
				? {
						x: +Il(e, ["x", "cx", "x1"]) || 0,
						y: +Il(e, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
				  }
				: r
		);
	},
	Nc = function (e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Fc(e));
	},
	po = function (e, r) {
		if (r) {
			var t = e.style;
			r in jr && r !== xr && (r = Qe),
				t.removeProperty
					? ((r.substr(0, 2) === "ms" ||
							r.substr(0, 6) === "webkit") &&
							(r = "-" + r),
					  t.removeProperty(r.replace(ll, "-$1").toLowerCase()))
					: t.removeAttribute(r);
		}
	},
	ri = function (e, r, t, i, n, s) {
		var a = new Vt(e._pt, r, t, 0, 1, s ? Dc : Cc);
		return (e._pt = a), (a.b = i), (a.e = n), e._props.push(t), a;
	},
	Bl = { deg: 1, rad: 1, turn: 1 },
	ud = { grid: 1, flex: 1 },
	hi = function o(e, r, t, i) {
		var n = parseFloat(t) || 0,
			s = (t + "").trim().substr((n + "").length) || "px",
			a = Mi.style,
			l = Kh.test(r),
			c = e.tagName.toLowerCase() === "svg",
			f = (c ? "client" : "offset") + (l ? "Width" : "Height"),
			h = 100,
			d = i === "px",
			u = i === "%",
			p,
			g,
			_,
			v;
		return i === s || !n || Bl[i] || Bl[s]
			? n
			: (s !== "px" && !d && (n = o(e, r, t, "px")),
			  (v = e.getCTM && Nc(e)),
			  (u || s === "%") && (jr[r] || ~r.indexOf("adius"))
					? ((p = v ? e.getBBox()[l ? "width" : "height"] : e[f]),
					  ot(u ? (n / p) * h : (n / 100) * p))
					: ((a[l ? "width" : "height"] = h + (d ? s : i)),
					  (g =
							~r.indexOf("adius") ||
							(i === "em" && e.appendChild && !c)
								? e
								: e.parentNode),
					  v && (g = (e.ownerSVGElement || {}).parentNode),
					  (!g || g === ti || !g.appendChild) && (g = ti.body),
					  (_ = g._gsap),
					  _ && u && _.width && l && _.time === Ut.time && !_.uncache
							? ot((n / _.width) * h)
							: ((u || s === "%") &&
									!ud[Ar(g, "display")] &&
									(a.position = Ar(e, "position")),
							  g === e && (a.position = "static"),
							  g.appendChild(Mi),
							  (p = Mi[f]),
							  g.removeChild(Mi),
							  (a.position = "absolute"),
							  l &&
									u &&
									((_ = Oi(g)),
									(_.time = Ut.time),
									(_.width = g[f])),
							  ot(d ? (p * n) / h : p && n ? (h / p) * n : 0))));
	},
	Br = function (e, r, t, i) {
		var n;
		return (
			sl || wa(),
			r in qr &&
				r !== "transform" &&
				((r = qr[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
			jr[r] && r !== "transform"
				? ((n = _o(e, i)),
				  (n =
						r !== "transformOrigin"
							? n[r]
							: n.svg
							? n.origin
							: gs(Ar(e, xr)) + " " + n.zOrigin + "px"))
				: ((n = e.style[r]),
				  (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
						(n =
							(ps[r] && ps[r](e, r, t)) ||
							Ar(e, r) ||
							ec(e, r) ||
							(r === "opacity" ? 1 : 0))),
			t && !~(n + "").trim().indexOf(" ") ? hi(e, r, n, t) + t : n
		);
	},
	cd = function (e, r, t, i) {
		if (!t || t === "none") {
			var n = kn(r, e, 1),
				s = n && Ar(e, n, 1);
			s && s !== t
				? ((r = n), (t = s))
				: r === "borderColor" && (t = Ar(e, "borderTopColor"));
		}
		var a = new Vt(this._pt, e.style, r, 0, 1, Mc),
			l = 0,
			c = 0,
			f,
			h,
			d,
			u,
			p,
			g,
			_,
			v,
			y,
			m,
			w,
			b;
		if (
			((a.b = t),
			(a.e = i),
			(t += ""),
			(i += ""),
			i === "auto" &&
				((e.style[r] = i), (i = Ar(e, r) || i), (e.style[r] = t)),
			(f = [t, i]),
			mc(f),
			(t = f[0]),
			(i = f[1]),
			(d = t.match(rn) || []),
			(b = i.match(rn) || []),
			b.length)
		) {
			for (; (h = rn.exec(i)); )
				(_ = h[0]),
					(y = i.substring(l, h.index)),
					p
						? (p = (p + 1) % 5)
						: (y.substr(-5) === "rgba(" ||
								y.substr(-5) === "hsla(") &&
						  (p = 1),
					_ !== (g = d[c++] || "") &&
						((u = parseFloat(g) || 0),
						(w = g.substr((u + "").length)),
						_.charAt(1) === "=" && (_ = un(u, _) + w),
						(v = parseFloat(_)),
						(m = _.substr((v + "").length)),
						(l = rn.lastIndex - m.length),
						m ||
							((m = m || Zt.units[r] || w),
							l === i.length && ((i += m), (a.e += m))),
						w !== m && (u = hi(e, r, g, m) || 0),
						(a._pt = {
							_next: a._pt,
							p: y || c === 1 ? y : ",",
							s: u,
							c: v - u,
							m: (p && p < 4) || r === "zIndex" ? Math.round : 0,
						}));
			a.c = l < i.length ? i.substring(l, i.length) : "";
		} else a.r = r === "display" && i === "none" ? Dc : Cc;
		return ju.test(i) && (a.e = 0), (this._pt = a), a;
	},
	$l = {
		top: "0%",
		bottom: "100%",
		left: "0%",
		right: "100%",
		center: "50%",
	},
	fd = function (e) {
		var r = e.split(" "),
			t = r[0],
			i = r[1] || "50%";
		return (
			(t === "top" || t === "bottom" || i === "left" || i === "right") &&
				((e = t), (t = i), (i = e)),
			(r[0] = $l[t] || t),
			(r[1] = $l[i] || i),
			r.join(" ")
		);
	},
	hd = function (e, r) {
		if (r.tween && r.tween._time === r.tween._dur) {
			var t = r.t,
				i = t.style,
				n = r.u,
				s = t._gsap,
				a,
				l,
				c;
			if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
			else
				for (n = n.split(","), c = n.length; --c > -1; )
					(a = n[c]),
						jr[a] &&
							((l = 1), (a = a === "transformOrigin" ? xr : Qe)),
						po(t, a);
			l &&
				(po(t, Qe),
				s &&
					(s.svg && t.removeAttribute("transform"),
					_o(t, 1),
					(s.uncache = 1),
					Ac(i)));
		}
	},
	ps = {
		clearProps: function (e, r, t, i, n) {
			if (n.data !== "isFromStart") {
				var s = (e._pt = new Vt(e._pt, r, t, 0, 0, hd));
				return (
					(s.u = i), (s.pr = -10), (s.tween = n), e._props.push(t), 1
				);
			}
		},
	},
	go = [1, 0, 0, 1, 0, 0],
	Ic = {},
	Bc = function (e) {
		return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
	},
	zl = function (e) {
		var r = Ar(e, Qe);
		return Bc(r) ? go : r.substr(7).match(Hu).map(ot);
	},
	ul = function (e, r) {
		var t = e._gsap || Oi(e),
			i = e.style,
			n = zl(e),
			s,
			a,
			l,
			c;
		return t.svg && e.getAttribute("transform")
			? ((l = e.transform.baseVal.consolidate().matrix),
			  (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
			  n.join(",") === "1,0,0,1,0,0" ? go : n)
			: (n === go &&
					!e.offsetParent &&
					e !== cn &&
					!t.svg &&
					((l = i.display),
					(i.display = "block"),
					(s = e.parentNode),
					(!s || !e.offsetParent) &&
						((c = 1),
						(a = e.nextElementSibling),
						cn.appendChild(e)),
					(n = zl(e)),
					l ? (i.display = l) : po(e, "display"),
					c &&
						(a
							? s.insertBefore(e, a)
							: s
							? s.appendChild(e)
							: cn.removeChild(e))),
			  r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
	},
	xa = function (e, r, t, i, n, s) {
		var a = e._gsap,
			l = n || ul(e, !0),
			c = a.xOrigin || 0,
			f = a.yOrigin || 0,
			h = a.xOffset || 0,
			d = a.yOffset || 0,
			u = l[0],
			p = l[1],
			g = l[2],
			_ = l[3],
			v = l[4],
			y = l[5],
			m = r.split(" "),
			w = parseFloat(m[0]) || 0,
			b = parseFloat(m[1]) || 0,
			T,
			k,
			S,
			C;
		t
			? l !== go &&
			  (k = u * _ - p * g) &&
			  ((S = w * (_ / k) + b * (-g / k) + (g * y - _ * v) / k),
			  (C = w * (-p / k) + b * (u / k) - (u * y - p * v) / k),
			  (w = S),
			  (b = C))
			: ((T = Fc(e)),
			  (w = T.x + (~m[0].indexOf("%") ? (w / 100) * T.width : w)),
			  (b =
					T.y +
					(~(m[1] || m[0]).indexOf("%") ? (b / 100) * T.height : b))),
			i || (i !== !1 && a.smooth)
				? ((v = w - c),
				  (y = b - f),
				  (a.xOffset = h + (v * u + y * g) - v),
				  (a.yOffset = d + (v * p + y * _) - y))
				: (a.xOffset = a.yOffset = 0),
			(a.xOrigin = w),
			(a.yOrigin = b),
			(a.smooth = !!i),
			(a.origin = r),
			(a.originIsAbsolute = !!t),
			(e.style[xr] = "0px 0px"),
			s &&
				(ri(s, a, "xOrigin", c, w),
				ri(s, a, "yOrigin", f, b),
				ri(s, a, "xOffset", h, a.xOffset),
				ri(s, a, "yOffset", d, a.yOffset)),
			e.setAttribute("data-svg-origin", w + " " + b);
	},
	_o = function (e, r) {
		var t = e._gsap || new wc(e);
		if ("x" in t && !r && !t.uncache) return t;
		var i = e.style,
			n = t.scaleX < 0,
			s = "px",
			a = "deg",
			l = getComputedStyle(e),
			c = Ar(e, xr) || "0",
			f,
			h,
			d,
			u,
			p,
			g,
			_,
			v,
			y,
			m,
			w,
			b,
			T,
			k,
			S,
			C,
			$,
			B,
			M,
			E,
			F,
			Y,
			R,
			V,
			G,
			ne,
			O,
			W,
			ee,
			re,
			le,
			De;
		return (
			(f = h = d = g = _ = v = y = m = w = 0),
			(u = p = 1),
			(t.svg = !!(e.getCTM && Nc(e))),
			l.translate &&
				((l.translate !== "none" ||
					l.scale !== "none" ||
					l.rotate !== "none") &&
					(i[Qe] =
						(l.translate !== "none"
							? "translate3d(" +
							  (l.translate + " 0 0")
									.split(" ")
									.slice(0, 3)
									.join(", ") +
							  ") "
							: "") +
						(l.rotate !== "none"
							? "rotate(" + l.rotate + ") "
							: "") +
						(l.scale !== "none"
							? "scale(" + l.scale.split(" ").join(",") + ") "
							: "") +
						(l[Qe] !== "none" ? l[Qe] : "")),
				(i.scale = i.rotate = i.translate = "none")),
			(k = ul(e, t.svg)),
			t.svg &&
				(t.uncache
					? ((G = e.getBBox()),
					  (c = t.xOrigin - G.x + "px " + (t.yOrigin - G.y) + "px"),
					  (V = ""))
					: (V = !r && e.getAttribute("data-svg-origin")),
				xa(e, V || c, !!V || t.originIsAbsolute, t.smooth !== !1, k)),
			(b = t.xOrigin || 0),
			(T = t.yOrigin || 0),
			k !== go &&
				((B = k[0]),
				(M = k[1]),
				(E = k[2]),
				(F = k[3]),
				(f = Y = k[4]),
				(h = R = k[5]),
				k.length === 6
					? ((u = Math.sqrt(B * B + M * M)),
					  (p = Math.sqrt(F * F + E * E)),
					  (g = B || M ? Hi(M, B) * wi : 0),
					  (y = E || F ? Hi(E, F) * wi + g : 0),
					  y && (p *= Math.abs(Math.cos(y * fn))),
					  t.svg &&
							((f -= b - (b * B + T * E)),
							(h -= T - (b * M + T * F))))
					: ((De = k[6]),
					  (re = k[7]),
					  (O = k[8]),
					  (W = k[9]),
					  (ee = k[10]),
					  (le = k[11]),
					  (f = k[12]),
					  (h = k[13]),
					  (d = k[14]),
					  (S = Hi(De, ee)),
					  (_ = S * wi),
					  S &&
							((C = Math.cos(-S)),
							($ = Math.sin(-S)),
							(V = Y * C + O * $),
							(G = R * C + W * $),
							(ne = De * C + ee * $),
							(O = Y * -$ + O * C),
							(W = R * -$ + W * C),
							(ee = De * -$ + ee * C),
							(le = re * -$ + le * C),
							(Y = V),
							(R = G),
							(De = ne)),
					  (S = Hi(-E, ee)),
					  (v = S * wi),
					  S &&
							((C = Math.cos(-S)),
							($ = Math.sin(-S)),
							(V = B * C - O * $),
							(G = M * C - W * $),
							(ne = E * C - ee * $),
							(le = F * $ + le * C),
							(B = V),
							(M = G),
							(E = ne)),
					  (S = Hi(M, B)),
					  (g = S * wi),
					  S &&
							((C = Math.cos(S)),
							($ = Math.sin(S)),
							(V = B * C + M * $),
							(G = Y * C + R * $),
							(M = M * C - B * $),
							(R = R * C - Y * $),
							(B = V),
							(Y = G)),
					  _ &&
							Math.abs(_) + Math.abs(g) > 359.9 &&
							((_ = g = 0), (v = 180 - v)),
					  (u = ot(Math.sqrt(B * B + M * M + E * E))),
					  (p = ot(Math.sqrt(R * R + De * De))),
					  (S = Hi(Y, R)),
					  (y = Math.abs(S) > 2e-4 ? S * wi : 0),
					  (w = le ? 1 / (le < 0 ? -le : le) : 0)),
				t.svg &&
					((V = e.getAttribute("transform")),
					(t.forceCSS =
						e.setAttribute("transform", "") || !Bc(Ar(e, Qe))),
					V && e.setAttribute("transform", V))),
			Math.abs(y) > 90 &&
				Math.abs(y) < 270 &&
				(n
					? ((u *= -1),
					  (y += g <= 0 ? 180 : -180),
					  (g += g <= 0 ? 180 : -180))
					: ((p *= -1), (y += y <= 0 ? 180 : -180))),
			(r = r || t.uncache),
			(t.x =
				f -
				((t.xPercent =
					f &&
					((!r && t.xPercent) ||
						(Math.round(e.offsetWidth / 2) === Math.round(-f)
							? -50
							: 0)))
					? (e.offsetWidth * t.xPercent) / 100
					: 0) +
				s),
			(t.y =
				h -
				((t.yPercent =
					h &&
					((!r && t.yPercent) ||
						(Math.round(e.offsetHeight / 2) === Math.round(-h)
							? -50
							: 0)))
					? (e.offsetHeight * t.yPercent) / 100
					: 0) +
				s),
			(t.z = d + s),
			(t.scaleX = ot(u)),
			(t.scaleY = ot(p)),
			(t.rotation = ot(g) + a),
			(t.rotationX = ot(_) + a),
			(t.rotationY = ot(v) + a),
			(t.skewX = y + a),
			(t.skewY = m + a),
			(t.transformPerspective = w + s),
			(t.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[xr] = gs(c)),
			(t.xOffset = t.yOffset = 0),
			(t.force3D = Zt.force3D),
			(t.renderTransform = t.svg ? pd : Rc ? $c : dd),
			(t.uncache = 0),
			t
		);
	},
	gs = function (e) {
		return (e = e.split(" "))[0] + " " + e[1];
	},
	qs = function (e, r, t) {
		var i = Tt(r);
		return ot(parseFloat(r) + parseFloat(hi(e, "x", t + "px", i))) + i;
	},
	dd = function (e, r) {
		(r.z = "0px"),
			(r.rotationY = r.rotationX = "0deg"),
			(r.force3D = 0),
			$c(e, r);
	},
	gi = "0deg",
	Dn = "0px",
	_i = ") ",
	$c = function (e, r) {
		var t = r || this,
			i = t.xPercent,
			n = t.yPercent,
			s = t.x,
			a = t.y,
			l = t.z,
			c = t.rotation,
			f = t.rotationY,
			h = t.rotationX,
			d = t.skewX,
			u = t.skewY,
			p = t.scaleX,
			g = t.scaleY,
			_ = t.transformPerspective,
			v = t.force3D,
			y = t.target,
			m = t.zOrigin,
			w = "",
			b = (v === "auto" && e && e !== 1) || v === !0;
		if (m && (h !== gi || f !== gi)) {
			var T = parseFloat(f) * fn,
				k = Math.sin(T),
				S = Math.cos(T),
				C;
			(T = parseFloat(h) * fn),
				(C = Math.cos(T)),
				(s = qs(y, s, k * C * -m)),
				(a = qs(y, a, -Math.sin(T) * -m)),
				(l = qs(y, l, S * C * -m + m));
		}
		_ !== Dn && (w += "perspective(" + _ + _i),
			(i || n) && (w += "translate(" + i + "%, " + n + "%) "),
			(b || s !== Dn || a !== Dn || l !== Dn) &&
				(w +=
					l !== Dn || b
						? "translate3d(" + s + ", " + a + ", " + l + ") "
						: "translate(" + s + ", " + a + _i),
			c !== gi && (w += "rotate(" + c + _i),
			f !== gi && (w += "rotateY(" + f + _i),
			h !== gi && (w += "rotateX(" + h + _i),
			(d !== gi || u !== gi) && (w += "skew(" + d + ", " + u + _i),
			(p !== 1 || g !== 1) && (w += "scale(" + p + ", " + g + _i),
			(y.style[Qe] = w || "translate(0, 0)");
	},
	pd = function (e, r) {
		var t = r || this,
			i = t.xPercent,
			n = t.yPercent,
			s = t.x,
			a = t.y,
			l = t.rotation,
			c = t.skewX,
			f = t.skewY,
			h = t.scaleX,
			d = t.scaleY,
			u = t.target,
			p = t.xOrigin,
			g = t.yOrigin,
			_ = t.xOffset,
			v = t.yOffset,
			y = t.forceCSS,
			m = parseFloat(s),
			w = parseFloat(a),
			b,
			T,
			k,
			S,
			C;
		(l = parseFloat(l)),
			(c = parseFloat(c)),
			(f = parseFloat(f)),
			f && ((f = parseFloat(f)), (c += f), (l += f)),
			l || c
				? ((l *= fn),
				  (c *= fn),
				  (b = Math.cos(l) * h),
				  (T = Math.sin(l) * h),
				  (k = Math.sin(l - c) * -d),
				  (S = Math.cos(l - c) * d),
				  c &&
						((f *= fn),
						(C = Math.tan(c - f)),
						(C = Math.sqrt(1 + C * C)),
						(k *= C),
						(S *= C),
						f &&
							((C = Math.tan(f)),
							(C = Math.sqrt(1 + C * C)),
							(b *= C),
							(T *= C))),
				  (b = ot(b)),
				  (T = ot(T)),
				  (k = ot(k)),
				  (S = ot(S)))
				: ((b = h), (S = d), (T = k = 0)),
			((m && !~(s + "").indexOf("px")) ||
				(w && !~(a + "").indexOf("px"))) &&
				((m = hi(u, "x", s, "px")), (w = hi(u, "y", a, "px"))),
			(p || g || _ || v) &&
				((m = ot(m + p - (p * b + g * k) + _)),
				(w = ot(w + g - (p * T + g * S) + v))),
			(i || n) &&
				((C = u.getBBox()),
				(m = ot(m + (i / 100) * C.width)),
				(w = ot(w + (n / 100) * C.height))),
			(C =
				"matrix(" +
				b +
				"," +
				T +
				"," +
				k +
				"," +
				S +
				"," +
				m +
				"," +
				w +
				")"),
			u.setAttribute("transform", C),
			y && (u.style[Qe] = C);
	},
	gd = function (e, r, t, i, n) {
		var s = 360,
			a = gt(n),
			l = parseFloat(n) * (a && ~n.indexOf("rad") ? wi : 1),
			c = l - i,
			f = i + c + "deg",
			h,
			d;
		return (
			a &&
				((h = n.split("_")[1]),
				h === "short" &&
					((c %= s), c !== c % (s / 2) && (c += c < 0 ? s : -s)),
				h === "cw" && c < 0
					? (c = ((c + s * Fl) % s) - ~~(c / s) * s)
					: h === "ccw" &&
					  c > 0 &&
					  (c = ((c - s * Fl) % s) - ~~(c / s) * s)),
			(e._pt = d = new Vt(e._pt, r, t, i, c, Zh)),
			(d.e = f),
			(d.u = "deg"),
			e._props.push(t),
			d
		);
	},
	Yl = function (e, r) {
		for (var t in r) e[t] = r[t];
		return e;
	},
	_d = function (e, r, t) {
		var i = Yl({}, t._gsap),
			n = "perspective,force3D,transformOrigin,svgOrigin",
			s = t.style,
			a,
			l,
			c,
			f,
			h,
			d,
			u,
			p;
		i.svg
			? ((c = t.getAttribute("transform")),
			  t.setAttribute("transform", ""),
			  (s[Qe] = r),
			  (a = _o(t, 1)),
			  po(t, Qe),
			  t.setAttribute("transform", c))
			: ((c = getComputedStyle(t)[Qe]),
			  (s[Qe] = r),
			  (a = _o(t, 1)),
			  (s[Qe] = c));
		for (l in jr)
			(c = i[l]),
				(f = a[l]),
				c !== f &&
					n.indexOf(l) < 0 &&
					((u = Tt(c)),
					(p = Tt(f)),
					(h = u !== p ? hi(t, l, c, p) : parseFloat(c)),
					(d = parseFloat(f)),
					(e._pt = new Vt(e._pt, a, l, h, d - h, va)),
					(e._pt.u = p || 0),
					e._props.push(l));
		Yl(a, i);
	};
qt("padding,margin,Width,Radius", function (o, e) {
	var r = "Top",
		t = "Right",
		i = "Bottom",
		n = "Left",
		s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function (
			a
		) {
			return e < 2 ? o + a : "border" + a + o;
		});
	ps[e > 1 ? "border" + o : o] = function (a, l, c, f, h) {
		var d, u;
		if (arguments.length < 4)
			return (
				(d = s.map(function (p) {
					return Br(a, p, c);
				})),
				(u = d.join(" ")),
				u.split(d[0]).length === 5 ? d[0] : u
			);
		(d = (f + "").split(" ")),
			(u = {}),
			s.forEach(function (p, g) {
				return (u[p] = d[g] = d[g] || d[((g - 1) / 2) | 0]);
			}),
			a.init(l, u, h);
	};
});
var zc = {
	name: "css",
	register: wa,
	targetTest: function (e) {
		return e.style && e.nodeType;
	},
	init: function (e, r, t, i, n) {
		var s = this._props,
			a = e.style,
			l = t.vars.startAt,
			c,
			f,
			h,
			d,
			u,
			p,
			g,
			_,
			v,
			y,
			m,
			w,
			b,
			T,
			k,
			S;
		sl || wa(),
			(this.styles = this.styles || Lc(e)),
			(S = this.styles.props),
			(this.tween = t);
		for (g in r)
			if (
				g !== "autoRound" &&
				((f = r[g]), !(jt[g] && xc(g, r, t, i, e, n)))
			) {
				if (
					((u = typeof f),
					(p = ps[g]),
					u === "function" &&
						((f = f.call(t, i, e, n)), (u = typeof f)),
					u === "string" && ~f.indexOf("random(") && (f = fo(f)),
					p)
				)
					p(this, e, g, f, t) && (k = 1);
				else if (g.substr(0, 2) === "--")
					(c = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
						(f += ""),
						(li.lastIndex = 0),
						li.test(c) || ((_ = Tt(c)), (v = Tt(f))),
						v ? _ !== v && (c = hi(e, g, c, v) + v) : _ && (f += _),
						this.add(a, "setProperty", c, f, i, n, 0, 0, g),
						s.push(g),
						S.push(g, 0, a[g]);
				else if (u !== "undefined") {
					if (
						(l && g in l
							? ((c =
									typeof l[g] == "function"
										? l[g].call(t, i, e, n)
										: l[g]),
							  gt(c) && ~c.indexOf("random(") && (c = fo(c)),
							  Tt(c + "") ||
									(c += Zt.units[g] || Tt(Br(e, g)) || ""),
							  (c + "").charAt(1) === "=" && (c = Br(e, g)))
							: (c = Br(e, g)),
						(d = parseFloat(c)),
						(y =
							u === "string" &&
							f.charAt(1) === "=" &&
							f.substr(0, 2)),
						y && (f = f.substr(2)),
						(h = parseFloat(f)),
						g in qr &&
							(g === "autoAlpha" &&
								(d === 1 &&
									Br(e, "visibility") === "hidden" &&
									h &&
									(d = 0),
								S.push("visibility", 0, a.visibility),
								ri(
									this,
									a,
									"visibility",
									d ? "inherit" : "hidden",
									h ? "inherit" : "hidden",
									!h
								)),
							g !== "scale" &&
								g !== "transform" &&
								((g = qr[g]),
								~g.indexOf(",") && (g = g.split(",")[0]))),
						(m = g in jr),
						m)
					) {
						if (
							(this.styles.save(g),
							w ||
								((b = e._gsap),
								(b.renderTransform && !r.parseTransform) ||
									_o(e, r.parseTransform),
								(T = r.smoothOrigin !== !1 && b.smooth),
								(w = this._pt =
									new Vt(
										this._pt,
										a,
										Qe,
										0,
										1,
										b.renderTransform,
										b,
										0,
										-1
									)),
								(w.dep = 1)),
							g === "scale")
						)
							(this._pt = new Vt(
								this._pt,
								b,
								"scaleY",
								d,
								(y ? un(d, y + h) : h) - d || 0,
								va
							)),
								(this._pt.u = 0),
								s.push("scaleY", g),
								(g += "X");
						else if (g === "transformOrigin") {
							S.push(xr, 0, a[xr]),
								(f = fd(f)),
								b.svg
									? xa(e, f, 0, T, 0, this)
									: ((v = parseFloat(f.split(" ")[2]) || 0),
									  v !== b.zOrigin &&
											ri(
												this,
												b,
												"zOrigin",
												b.zOrigin,
												v
											),
									  ri(this, a, g, gs(c), gs(f)));
							continue;
						} else if (g === "svgOrigin") {
							xa(e, f, 1, T, 0, this);
							continue;
						} else if (g in Ic) {
							gd(this, b, g, d, y ? un(d, y + f) : f);
							continue;
						} else if (g === "smoothOrigin") {
							ri(this, b, "smooth", b.smooth, f);
							continue;
						} else if (g === "force3D") {
							b[g] = f;
							continue;
						} else if (g === "transform") {
							_d(this, f, e);
							continue;
						}
					} else g in a || (g = kn(g) || g);
					if (
						m ||
						((h || h === 0) &&
							(d || d === 0) &&
							!Qh.test(f) &&
							g in a)
					)
						(_ = (c + "").substr((d + "").length)),
							h || (h = 0),
							(v = Tt(f) || (g in Zt.units ? Zt.units[g] : _)),
							_ !== v && (d = hi(e, g, c, v)),
							(this._pt = new Vt(
								this._pt,
								m ? b : a,
								g,
								d,
								(y ? un(d, y + h) : h) - d,
								!m &&
								(v === "px" || g === "zIndex") &&
								r.autoRound !== !1
									? ed
									: va
							)),
							(this._pt.u = v || 0),
							_ !== v &&
								v !== "%" &&
								((this._pt.b = c), (this._pt.r = Jh));
					else if (g in a) cd.call(this, e, g, c, y ? y + f : f);
					else if (g in e)
						this.add(e, g, c || e[g], y ? y + f : f, i, n);
					else {
						Qa(g, f);
						continue;
					}
					m ||
						(g in a ? S.push(g, 0, a[g]) : S.push(g, 1, c || e[g])),
						s.push(g);
				}
			}
		k && Ec(this);
	},
	render: function (e, r) {
		if (r.tween._time || !al())
			for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next);
		else r.styles.revert();
	},
	get: Br,
	aliases: qr,
	getSetter: function (e, r, t) {
		var i = qr[r];
		return (
			i && i.indexOf(",") < 0 && (r = i),
			r in jr && r !== xr && (e._gsap.x || Br(e, "x"))
				? t && Rl === t
					? r === "scale"
						? nd
						: id
					: (Rl = t || {}) && (r === "scale" ? od : sd)
				: e.style && !Ua(e.style[r])
				? td
				: ~r.indexOf("-")
				? rd
				: nl(e, r)
		);
	},
	core: { _removeProperty: po, _getMatrix: ul },
};
er.utils.checkPrefix = kn;
er.core.getStyleSaver = Lc;
(function (o, e, r, t) {
	var i = qt(o + "," + e + "," + r, function (n) {
		jr[n] = 1;
	});
	qt(e, function (n) {
		(Zt.units[n] = "deg"), (Ic[n] = 1);
	}),
		(qr[i[13]] = o + "," + e),
		qt(t, function (n) {
			var s = n.split(":");
			qr[s[1]] = i[s[0]];
		});
})(
	"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
	"rotation,rotationX,rotationY,skewX,skewY",
	"transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
	"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
qt(
	"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
	function (o) {
		Zt.units[o] = "px";
	}
);
er.registerPlugin(zc);
var J = er.registerPlugin(zc) || er;
J.core.Tween;
var md = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
	yd = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
	vd = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
	bd = /(^[#\.][a-z]|[a-y][a-z])/i,
	wd = Math.PI / 180,
	xd = 180 / Math.PI,
	Mo = Math.sin,
	Eo = Math.cos,
	$t = Math.abs,
	zr = Math.sqrt,
	Td = Math.atan2,
	mo = 1e8,
	ql = function (e) {
		return typeof e == "string";
	},
	Yc = function (e) {
		return typeof e == "number";
	},
	Sd = function (e) {
		return typeof e > "u";
	},
	kd = {},
	Pd = {},
	_s = 1e5,
	qc = function (e) {
		return Math.round(((e + mo) % 1) * _s) / _s || (e < 0 ? 0 : 1);
	},
	Oe = function (e) {
		return Math.round(e * _s) / _s || 0;
	},
	Vl = function (e) {
		return Math.round(e * 1e10) / 1e10 || 0;
	},
	Xl = function (e, r, t, i) {
		var n = e[r],
			s = i === 1 ? 6 : Ta(n, t, i);
		if (s && s + t + 2 < n.length)
			return e.splice(r, 0, n.slice(0, t + s + 2)), n.splice(0, t + s), 1;
	},
	Vc = function (e, r, t) {
		var i = e.length,
			n = ~~(t * i);
		if (e[n] > r) {
			for (; --n && e[n] > r; );
			n < 0 && (n = 0);
		} else for (; e[++n] < r && n < i; );
		return n < i ? n : i - 1;
	},
	Md = function (e, r) {
		var t = e.length;
		for (r || e.reverse(); t--; ) e[t].reversed || Cd(e[t]);
	},
	Gl = function (e, r) {
		return (
			(r.totalLength = e.totalLength),
			e.samples
				? ((r.samples = e.samples.slice(0)),
				  (r.lookup = e.lookup.slice(0)),
				  (r.minLength = e.minLength),
				  (r.resolution = e.resolution))
				: e.totalPoints && (r.totalPoints = e.totalPoints),
			r
		);
	},
	Ed = function (e, r) {
		var t = e.length,
			i = e[t - 1] || [],
			n = i.length;
		t &&
			r[0] === i[n - 2] &&
			r[1] === i[n - 1] &&
			((r = i.concat(r.slice(2))), t--),
			(e[t] = r);
	},
	Kn;
function Mg(o) {
	o = (ql(o) && bd.test(o) && document.querySelector(o)) || o;
	var e = o.getAttribute ? o : 0,
		r;
	return e && (o = o.getAttribute("d"))
		? (e._gsPath || (e._gsPath = {}),
		  (r = e._gsPath[o]),
		  r && !r._dirty ? r : (e._gsPath[o] = ms(o)))
		: o
		? ql(o)
			? ms(o)
			: Yc(o[0])
			? [o]
			: o
		: console.warn("Expecting a <path> element or an SVG path data string");
}
function Od(o) {
	for (var e = [], r = 0; r < o.length; r++) e[r] = Gl(o[r], o[r].slice(0));
	return Gl(o, e);
}
function Cd(o) {
	var e = 0,
		r;
	for (o.reverse(); e < o.length; e += 2)
		(r = o[e]), (o[e] = o[e + 1]), (o[e + 1] = r);
	o.reversed = !o.reversed;
}
var Dd = function (e, r) {
		var t = document.createElementNS("http://www.w3.org/2000/svg", "path"),
			i = [].slice.call(e.attributes),
			n = i.length,
			s;
		for (r = "," + r + ","; --n > -1; )
			(s = i[n].nodeName.toLowerCase()),
				r.indexOf("," + s + ",") < 0 &&
					t.setAttributeNS(null, s, i[n].nodeValue);
		return t;
	},
	Ad = {
		rect: "rx,ry,x,y,width,height",
		circle: "r,cx,cy",
		ellipse: "rx,ry,cx,cy",
		line: "x1,x2,y1,y2",
	},
	Ld = function (e, r) {
		for (var t = r ? r.split(",") : [], i = {}, n = t.length; --n > -1; )
			i[t[n]] = +e.getAttribute(t[n]) || 0;
		return i;
	};
function Eg(o, e) {
	var r = o.tagName.toLowerCase(),
		t = 0.552284749831,
		i,
		n,
		s,
		a,
		l,
		c,
		f,
		h,
		d,
		u,
		p,
		g,
		_,
		v,
		y,
		m,
		w,
		b,
		T,
		k,
		S,
		C;
	return r === "path" || !o.getBBox
		? o
		: ((c = Dd(o, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
		  (C = Ld(o, Ad[r])),
		  r === "rect"
				? ((a = C.rx),
				  (l = C.ry || a),
				  (n = C.x),
				  (s = C.y),
				  (u = C.width - a * 2),
				  (p = C.height - l * 2),
				  a || l
						? ((g = n + a * (1 - t)),
						  (_ = n + a),
						  (v = _ + u),
						  (y = v + a * t),
						  (m = v + a),
						  (w = s + l * (1 - t)),
						  (b = s + l),
						  (T = b + p),
						  (k = T + l * t),
						  (S = T + l),
						  (i =
								"M" +
								m +
								"," +
								b +
								" V" +
								T +
								" C" +
								[
									m,
									k,
									y,
									S,
									v,
									S,
									v - (v - _) / 3,
									S,
									_ + (v - _) / 3,
									S,
									_,
									S,
									g,
									S,
									n,
									k,
									n,
									T,
									n,
									T - (T - b) / 3,
									n,
									b + (T - b) / 3,
									n,
									b,
									n,
									w,
									g,
									s,
									_,
									s,
									_ + (v - _) / 3,
									s,
									v - (v - _) / 3,
									s,
									v,
									s,
									y,
									s,
									m,
									w,
									m,
									b,
								].join(",") +
								"z"))
						: (i =
								"M" +
								(n + u) +
								"," +
								s +
								" v" +
								p +
								" h" +
								-u +
								" v" +
								-p +
								" h" +
								u +
								"z"))
				: r === "circle" || r === "ellipse"
				? (r === "circle"
						? ((a = l = C.r), (h = a * t))
						: ((a = C.rx), (l = C.ry), (h = l * t)),
				  (n = C.cx),
				  (s = C.cy),
				  (f = a * t),
				  (i =
						"M" +
						(n + a) +
						"," +
						s +
						" C" +
						[
							n + a,
							s + h,
							n + f,
							s + l,
							n,
							s + l,
							n - f,
							s + l,
							n - a,
							s + h,
							n - a,
							s,
							n - a,
							s - h,
							n - f,
							s - l,
							n,
							s - l,
							n + f,
							s - l,
							n + a,
							s - h,
							n + a,
							s,
						].join(",") +
						"z"))
				: r === "line"
				? (i = "M" + C.x1 + "," + C.y1 + " L" + C.x2 + "," + C.y2)
				: (r === "polyline" || r === "polygon") &&
				  ((d = (o.getAttribute("points") + "").match(yd) || []),
				  (n = d.shift()),
				  (s = d.shift()),
				  (i = "M" + n + "," + s + " L" + d.join(",")),
				  r === "polygon" && (i += "," + n + "," + s + "z")),
		  c.setAttribute("d", Hc((c._gsRawPath = ms(i)))),
		  e &&
				o.parentNode &&
				(o.parentNode.insertBefore(c, o), o.parentNode.removeChild(o)),
		  c);
}
function Xc(o, e, r) {
	var t = o[e],
		i = o[e + 2],
		n = o[e + 4],
		s;
	return (
		(t += (i - t) * r),
		(i += (n - i) * r),
		(t += (i - t) * r),
		(s = i + (n + (o[e + 6] - n) * r - i) * r - t),
		(t = o[e + 1]),
		(i = o[e + 3]),
		(n = o[e + 5]),
		(t += (i - t) * r),
		(i += (n - i) * r),
		(t += (i - t) * r),
		Oe(Td(i + (n + (o[e + 7] - n) * r - i) * r - t, s) * xd)
	);
}
function Og(o, e, r) {
	(r = Sd(r) ? 1 : Vl(r) || 0), (e = Vl(e) || 0);
	var t = Math.max(0, ~~($t(r - e) - 1e-8)),
		i = Od(o);
	if (
		(e > r && ((e = 1 - e), (r = 1 - r), Md(i), (i.totalLength = 0)),
		e < 0 || r < 0)
	) {
		var n = Math.abs(~~Math.min(e, r)) + 1;
		(e += n), (r += n);
	}
	i.totalLength || Gc(i);
	var s = r > 1,
		a = Wl(i, e, kd, !0),
		l = Wl(i, r, Pd),
		c = l.segment,
		f = a.segment,
		h = l.segIndex,
		d = a.segIndex,
		u = l.i,
		p = a.i,
		g = d === h,
		_ = u === p && g,
		v,
		y,
		m,
		w,
		b,
		T,
		k,
		S;
	if (s || t) {
		for (
			v = h < d || (g && u < p) || (_ && l.t < a.t),
				Xl(i, d, p, a.t) &&
					(d++,
					v ||
						(h++,
						_
							? ((l.t = (l.t - a.t) / (1 - a.t)), (u = 0))
							: g && (u -= p))),
				Math.abs(1 - (r - e)) < 1e-5
					? (h = d - 1)
					: !l.t && h
					? h--
					: Xl(i, h, u, l.t) && v && d++,
				a.t === 1 && (d = (d + 1) % i.length),
				b = [],
				T = i.length,
				k = 1 + T * t,
				S = d,
				k += (T - d + h) % T,
				w = 0;
			w < k;
			w++
		)
			Ed(b, i[S++ % T]);
		i = b;
	} else if (((m = l.t === 1 ? 6 : Ta(c, u, l.t)), e !== r))
		for (
			y = Ta(f, p, _ ? a.t / l.t : a.t),
				g && (m += y),
				c.splice(u + m + 2),
				(y || p) && f.splice(0, p + y),
				w = i.length;
			w--;

		)
			(w < d || w > h) && i.splice(w, 1);
	else
		(c.angle = Xc(c, u + m, 0)),
			(u += m),
			(a = c[u]),
			(l = c[u + 1]),
			(c.length = c.totalLength = 0),
			(c.totalPoints = i.totalPoints = 8),
			c.push(a, l, a, l, a, l, a, l);
	return (i.totalLength = 0), i;
}
function Rd(o, e, r) {
	(e = e || 0), o.samples || ((o.samples = []), (o.lookup = []));
	var t = ~~o.resolution || 12,
		i = 1 / t,
		n = r ? e + r * 6 + 1 : o.length,
		s = o[e],
		a = o[e + 1],
		l = e ? (e / 6) * t : 0,
		c = o.samples,
		f = o.lookup,
		h = (e ? o.minLength : mo) || mo,
		d = c[l + r * t - 1],
		u = e ? c[l - 1] : 0,
		p,
		g,
		_,
		v,
		y,
		m,
		w,
		b,
		T,
		k,
		S,
		C,
		$,
		B,
		M,
		E,
		F;
	for (c.length = f.length = 0, g = e + 2; g < n; g += 6) {
		if (
			((_ = o[g + 4] - s),
			(v = o[g + 2] - s),
			(y = o[g] - s),
			(b = o[g + 5] - a),
			(T = o[g + 3] - a),
			(k = o[g + 1] - a),
			(m = w = S = C = 0),
			$t(_) < 0.01 && $t(b) < 0.01 && $t(y) + $t(k) < 0.01)
		)
			o.length > 8 && (o.splice(g, 6), (g -= 6), (n -= 6));
		else
			for (p = 1; p <= t; p++)
				(B = i * p),
					($ = 1 - B),
					(m = w - (w = (B * B * _ + 3 * $ * (B * v + $ * y)) * B)),
					(S = C - (C = (B * B * b + 3 * $ * (B * T + $ * k)) * B)),
					(E = zr(S * S + m * m)),
					E < h && (h = E),
					(u += E),
					(c[l++] = u);
		(s += _), (a += b);
	}
	if (d) for (d -= u; l < c.length; l++) c[l] += d;
	if (c.length && h) {
		if (
			((o.totalLength = F = c[c.length - 1] || 0),
			(o.minLength = h),
			F / h < 9999)
		)
			for (E = M = 0, p = 0; p < F; p += h) f[E++] = c[M] < p ? ++M : M;
	} else o.totalLength = c[0] = 0;
	return e ? u - c[e / 2 - 1] : u;
}
function Gc(o, e) {
	var r, t, i;
	for (i = r = t = 0; i < o.length; i++)
		(o[i].resolution = ~~e || 12), (t += o[i].length), (r += Rd(o[i]));
	return (o.totalPoints = t), (o.totalLength = r), o;
}
function Ta(o, e, r) {
	if (r <= 0 || r >= 1) return 0;
	var t = o[e],
		i = o[e + 1],
		n = o[e + 2],
		s = o[e + 3],
		a = o[e + 4],
		l = o[e + 5],
		c = o[e + 6],
		f = o[e + 7],
		h = t + (n - t) * r,
		d = n + (a - n) * r,
		u = i + (s - i) * r,
		p = s + (l - s) * r,
		g = h + (d - h) * r,
		_ = u + (p - u) * r,
		v = a + (c - a) * r,
		y = l + (f - l) * r;
	return (
		(d += (v - d) * r),
		(p += (y - p) * r),
		o.splice(
			e + 2,
			4,
			Oe(h),
			Oe(u),
			Oe(g),
			Oe(_),
			Oe(g + (d - g) * r),
			Oe(_ + (p - _) * r),
			Oe(d),
			Oe(p),
			Oe(v),
			Oe(y)
		),
		o.samples &&
			o.samples.splice(((e / 6) * o.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
		6
	);
}
function Wl(o, e, r, t) {
	(r = r || {}), o.totalLength || Gc(o), (e < 0 || e > 1) && (e = qc(e));
	var i = 0,
		n = o[0],
		s,
		a,
		l,
		c,
		f,
		h,
		d;
	if (!e) (d = h = i = 0), (n = o[0]);
	else if (e === 1)
		(d = 1), (i = o.length - 1), (n = o[i]), (h = n.length - 8);
	else {
		if (o.length > 1) {
			for (
				l = o.totalLength * e, f = h = 0;
				(f += o[h++].totalLength) < l;

			)
				i = h;
			(n = o[i]), (c = f - n.totalLength), (e = (l - c) / (f - c) || 0);
		}
		(s = n.samples),
			(a = n.resolution),
			(l = n.totalLength * e),
			(h = n.lookup.length
				? n.lookup[~~(l / n.minLength)] || 0
				: Vc(s, l, e)),
			(c = h ? s[h - 1] : 0),
			(f = s[h]),
			f < l && ((c = f), (f = s[++h])),
			(d = (1 / a) * ((l - c) / (f - c) + (h % a))),
			(h = ~~(h / a) * 6),
			t &&
				d === 1 &&
				(h + 6 < n.length
					? ((h += 6), (d = 0))
					: i + 1 < o.length && ((h = d = 0), (n = o[++i])));
	}
	return (
		(r.t = d), (r.i = h), (r.path = o), (r.segment = n), (r.segIndex = i), r
	);
}
function Cg(o, e, r, t) {
	var i = o[0],
		n = t || {},
		s,
		a,
		l,
		c,
		f,
		h,
		d,
		u,
		p;
	if (((e < 0 || e > 1) && (e = qc(e)), o.length > 1)) {
		for (l = o.totalLength * e, f = h = 0; (f += o[h++].totalLength) < l; )
			i = o[h];
		(c = f - i.totalLength), (e = (l - c) / (f - c) || 0);
	}
	return (
		(s = i.samples),
		(a = i.resolution),
		(l = i.totalLength * e),
		(h = i.lookup.length
			? i.lookup[e < 1 ? ~~(l / i.minLength) : i.lookup.length - 1] || 0
			: Vc(s, l, e)),
		(c = h ? s[h - 1] : 0),
		(f = s[h]),
		f < l && ((c = f), (f = s[++h])),
		(d = (1 / a) * ((l - c) / (f - c) + (h % a)) || 0),
		(p = 1 - d),
		(h = ~~(h / a) * 6),
		(u = i[h]),
		(n.x = Oe(
			(d * d * (i[h + 6] - u) +
				3 * p * (d * (i[h + 4] - u) + p * (i[h + 2] - u))) *
				d +
				u
		)),
		(n.y = Oe(
			(d * d * (i[h + 7] - (u = i[h + 1])) +
				3 * p * (d * (i[h + 5] - u) + p * (i[h + 3] - u))) *
				d +
				u
		)),
		r &&
			(n.angle = i.totalLength
				? Xc(i, h, d >= 1 ? 1 - 1e-9 : d || 1e-9)
				: i.angle || 0),
		n
	);
}
function Fd(o, e, r, t, i, n, s) {
	for (var a = o.length, l, c, f, h, d; --a > -1; )
		for (l = o[a], c = l.length, f = 0; f < c; f += 2)
			(h = l[f]),
				(d = l[f + 1]),
				(l[f] = h * e + d * t + n),
				(l[f + 1] = h * r + d * i + s);
	return (o._dirty = 1), o;
}
function Nd(o, e, r, t, i, n, s, a, l) {
	if (!(o === a && e === l)) {
		(r = $t(r)), (t = $t(t));
		var c = (i % 360) * wd,
			f = Eo(c),
			h = Mo(c),
			d = Math.PI,
			u = d * 2,
			p = (o - a) / 2,
			g = (e - l) / 2,
			_ = f * p + h * g,
			v = -h * p + f * g,
			y = _ * _,
			m = v * v,
			w = y / (r * r) + m / (t * t);
		w > 1 && ((r = zr(w) * r), (t = zr(w) * t));
		var b = r * r,
			T = t * t,
			k = (b * T - b * m - T * y) / (b * m + T * y);
		k < 0 && (k = 0);
		var S = (n === s ? -1 : 1) * zr(k),
			C = S * ((r * v) / t),
			$ = S * -((t * _) / r),
			B = (o + a) / 2,
			M = (e + l) / 2,
			E = B + (f * C - h * $),
			F = M + (h * C + f * $),
			Y = (_ - C) / r,
			R = (v - $) / t,
			V = (-_ - C) / r,
			G = (-v - $) / t,
			ne = Y * Y + R * R,
			O = (R < 0 ? -1 : 1) * Math.acos(Y / zr(ne)),
			W =
				(Y * G - R * V < 0 ? -1 : 1) *
				Math.acos((Y * V + R * G) / zr(ne * (V * V + G * G)));
		isNaN(W) && (W = d),
			!s && W > 0 ? (W -= u) : s && W < 0 && (W += u),
			(O %= u),
			(W %= u);
		var ee = Math.ceil($t(W) / (u / 4)),
			re = [],
			le = W / ee,
			De = ((4 / 3) * Mo(le / 2)) / (1 + Eo(le / 2)),
			fe = f * r,
			Ae = h * r,
			_e = h * -t,
			Xt = f * t,
			de;
		for (de = 0; de < ee; de++)
			(i = O + de * le),
				(_ = Eo(i)),
				(v = Mo(i)),
				(Y = Eo((i += le))),
				(R = Mo(i)),
				re.push(_ - De * v, v + De * _, Y + De * R, R - De * Y, Y, R);
		for (de = 0; de < re.length; de += 2)
			(_ = re[de]),
				(v = re[de + 1]),
				(re[de] = _ * fe + v * _e + E),
				(re[de + 1] = _ * Ae + v * Xt + F);
		return (re[de - 2] = a), (re[de - 1] = l), re;
	}
}
function ms(o) {
	var e =
			(o + "")
				.replace(vd, function (C) {
					var $ = +C;
					return $ < 1e-4 && $ > -1e-4 ? 0 : $;
				})
				.match(md) || [],
		r = [],
		t = 0,
		i = 0,
		n = 2 / 3,
		s = e.length,
		a = 0,
		l = "ERROR: malformed path: " + o,
		c,
		f,
		h,
		d,
		u,
		p,
		g,
		_,
		v,
		y,
		m,
		w,
		b,
		T,
		k,
		S = function ($, B, M, E) {
			(y = (M - $) / 3),
				(m = (E - B) / 3),
				g.push($ + y, B + m, M - y, E - m, M, E);
		};
	if (!o || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), r;
	for (c = 0; c < s; c++)
		if (
			((b = u),
			isNaN(e[c]) ? ((u = e[c].toUpperCase()), (p = u !== e[c])) : c--,
			(h = +e[c + 1]),
			(d = +e[c + 2]),
			p && ((h += t), (d += i)),
			c || ((_ = h), (v = d)),
			u === "M")
		)
			g && (g.length < 8 ? (r.length -= 1) : (a += g.length)),
				(t = _ = h),
				(i = v = d),
				(g = [h, d]),
				r.push(g),
				(c += 2),
				(u = "L");
		else if (u === "C")
			g || (g = [0, 0]),
				p || (t = i = 0),
				g.push(
					h,
					d,
					t + e[c + 3] * 1,
					i + e[c + 4] * 1,
					(t += e[c + 5] * 1),
					(i += e[c + 6] * 1)
				),
				(c += 6);
		else if (u === "S")
			(y = t),
				(m = i),
				(b === "C" || b === "S") &&
					((y += t - g[g.length - 4]), (m += i - g[g.length - 3])),
				p || (t = i = 0),
				g.push(y, m, h, d, (t += e[c + 3] * 1), (i += e[c + 4] * 1)),
				(c += 4);
		else if (u === "Q")
			(y = t + (h - t) * n),
				(m = i + (d - i) * n),
				p || (t = i = 0),
				(t += e[c + 3] * 1),
				(i += e[c + 4] * 1),
				g.push(y, m, t + (h - t) * n, i + (d - i) * n, t, i),
				(c += 4);
		else if (u === "T")
			(y = t - g[g.length - 4]),
				(m = i - g[g.length - 3]),
				g.push(
					t + y,
					i + m,
					h + (t + y * 1.5 - h) * n,
					d + (i + m * 1.5 - d) * n,
					(t = h),
					(i = d)
				),
				(c += 2);
		else if (u === "H") S(t, i, (t = h), i), (c += 1);
		else if (u === "V") S(t, i, t, (i = h + (p ? i - t : 0))), (c += 1);
		else if (u === "L" || u === "Z")
			u === "Z" && ((h = _), (d = v), (g.closed = !0)),
				(u === "L" || $t(t - h) > 0.5 || $t(i - d) > 0.5) &&
					(S(t, i, h, d), u === "L" && (c += 2)),
				(t = h),
				(i = d);
		else if (u === "A") {
			if (
				((T = e[c + 4]),
				(k = e[c + 5]),
				(y = e[c + 6]),
				(m = e[c + 7]),
				(f = 7),
				T.length > 1 &&
					(T.length < 3
						? ((m = y), (y = k), f--)
						: ((m = k), (y = T.substr(2)), (f -= 2)),
					(k = T.charAt(1)),
					(T = T.charAt(0))),
				(w = Nd(
					t,
					i,
					+e[c + 1],
					+e[c + 2],
					+e[c + 3],
					+T,
					+k,
					(p ? t : 0) + y * 1,
					(p ? i : 0) + m * 1
				)),
				(c += f),
				w)
			)
				for (f = 0; f < w.length; f++) g.push(w[f]);
			(t = g[g.length - 2]), (i = g[g.length - 1]);
		} else console.log(l);
	return (
		(c = g.length),
		c < 6
			? (r.pop(), (c = 0))
			: g[0] === g[c - 2] && g[1] === g[c - 1] && (g.closed = !0),
		(r.totalPoints = a + c),
		r
	);
}
function Hl(o, e, r, t, i, n, s, a, l, c, f) {
	var h = (o + r) / 2,
		d = (e + t) / 2,
		u = (r + i) / 2,
		p = (t + n) / 2,
		g = (i + s) / 2,
		_ = (n + a) / 2,
		v = (h + u) / 2,
		y = (d + p) / 2,
		m = (u + g) / 2,
		w = (p + _) / 2,
		b = (v + m) / 2,
		T = (y + w) / 2,
		k = s - o,
		S = a - e,
		C = $t((r - s) * S - (t - a) * k),
		$ = $t((i - s) * S - (n - a) * k),
		B;
	return (
		c || ((c = [o, e, s, a]), (f = 2)),
		c.splice(f || c.length - 2, 0, b, T),
		(C + $) * (C + $) > l * (k * k + S * S) &&
			((B = c.length),
			Hl(o, e, h, d, v, y, b, T, l, c, f),
			Hl(b, T, m, w, g, _, s, a, l, c, f + 2 + (c.length - B))),
		c
	);
}
function Dg(o, e) {
	e === void 0 && (e = 1);
	for (var r = o[0], t = 0, i = [r, t], n = 2; n < o.length; n += 2)
		i.push(r, t, o[n], (t = ((o[n] - r) * e) / 2), (r = o[n]), -t);
	return i;
}
function Ag(o, e) {
	$t(o[0] - o[2]) < 1e-4 && $t(o[1] - o[3]) < 1e-4 && (o = o.slice(2));
	var r = o.length - 2,
		t = +o[0],
		i = +o[1],
		n = +o[2],
		s = +o[3],
		a = [t, i, t, i],
		l = n - t,
		c = s - i,
		f = Math.abs(o[r] - t) < 0.001 && Math.abs(o[r + 1] - i) < 0.001,
		h,
		d,
		u,
		p,
		g,
		_,
		v,
		y,
		m,
		w,
		b,
		T,
		k,
		S,
		C;
	for (
		f &&
			(o.push(n, s),
			(n = t),
			(s = i),
			(t = o[r - 2]),
			(i = o[r - 1]),
			o.unshift(t, i),
			(r += 4)),
			e = e || e === 0 ? +e : 1,
			u = 2;
		u < r;
		u += 2
	)
		(h = t),
			(d = i),
			(t = n),
			(i = s),
			(n = +o[u + 2]),
			(s = +o[u + 3]),
			!(t === n && i === s) &&
				((p = l),
				(g = c),
				(l = n - t),
				(c = s - i),
				(_ = zr(p * p + g * g)),
				(v = zr(l * l + c * c)),
				(y = zr(
					Math.pow(l / v + p / _, 2) + Math.pow(c / v + g / _, 2)
				)),
				(m = ((_ + v) * e * 0.25) / y),
				(w = t - (t - h) * (_ ? m / _ : 0)),
				(b = t + (n - t) * (v ? m / v : 0)),
				(T =
					t - (w + (((b - w) * ((_ * 3) / (_ + v) + 0.5)) / 4 || 0))),
				(k = i - (i - d) * (_ ? m / _ : 0)),
				(S = i + (s - i) * (v ? m / v : 0)),
				(C =
					i - (k + (((S - k) * ((_ * 3) / (_ + v) + 0.5)) / 4 || 0))),
				(t !== h || i !== d) &&
					a.push(
						Oe(w + T),
						Oe(k + C),
						Oe(t),
						Oe(i),
						Oe(b + T),
						Oe(S + C)
					));
	return (
		t !== n || i !== s || a.length < 4
			? a.push(Oe(n), Oe(s), Oe(n), Oe(s))
			: (a.length -= 2),
		a.length === 2
			? a.push(t, i, t, i, t, i)
			: f && (a.splice(0, 6), (a.length = a.length - 6)),
		a
	);
}
function Id(o, e, r, t, i, n) {
	var s = i - r,
		a = n - t,
		l;
	return (
		(s || a) &&
			((l = ((o - r) * s + (e - t) * a) / (s * s + a * a)),
			l > 1 ? ((r = i), (t = n)) : l > 0 && ((r += s * l), (t += a * l))),
		Math.pow(o - r, 2) + Math.pow(e - t, 2)
	);
}
function Sa(o, e, r, t, i) {
	var n = t,
		s = o[e],
		a = o[e + 1],
		l = o[r],
		c = o[r + 1],
		f,
		h,
		d;
	for (h = e + 2; h < r; h += 2)
		(d = Id(o[h], o[h + 1], s, a, l, c)), d > n && ((f = h), (n = d));
	n > t &&
		(f - e > 2 && Sa(o, e, f, t, i),
		i.push(o[f], o[f + 1]),
		r - f > 2 && Sa(o, f, r, t, i));
}
function Lg(o, e) {
	var r = parseFloat(o[0]),
		t = parseFloat(o[1]),
		i = [r, t],
		n = o.length - 2,
		s,
		a,
		l,
		c,
		f,
		h,
		d;
	for (e = Math.pow(e || 1, 2), s = 2; s < n; s += 2)
		(a = parseFloat(o[s])),
			(l = parseFloat(o[s + 1])),
			(c = r - a),
			(f = t - l),
			c * c + f * f > e && (i.push(a, l), (r = a), (t = l));
	return (
		i.push(parseFloat(o[n]), parseFloat(o[n + 1])),
		(d = i.length - 2),
		(h = [i[0], i[1]]),
		Sa(i, 0, d, e, h),
		h.push(i[d], i[d + 1]),
		h
	);
}
function Wc(o, e, r, t, i, n, s, a, l, c, f, h, d, u) {
	var p = (i - t) / n,
		g = 0,
		_ = t,
		v,
		y,
		m,
		w,
		b,
		T;
	for (Kn = mo; _ <= i; )
		(T = 1 - _),
			(v =
				T * T * T * s +
				3 * T * T * _ * l +
				3 * T * _ * _ * f +
				_ * _ * _ * d),
			(y =
				T * T * T * a +
				3 * T * T * _ * c +
				3 * T * _ * _ * h +
				_ * _ * _ * u),
			(w = v - e),
			(b = y - r),
			(m = w * w + b * b),
			m < Kn && ((Kn = m), (g = _)),
			(_ += p);
	return o > 1
		? Wc(
				o - 1,
				e,
				r,
				Math.max(g - p, 0),
				Math.min(g + p, 1),
				n,
				s,
				a,
				l,
				c,
				f,
				h,
				d,
				u
		  )
		: g;
}
function Rg(o, e, r, t) {
	var i = { j: 0, i: 0, t: 0 },
		n = mo,
		s,
		a,
		l,
		c;
	for (a = 0; a < o.length; a++)
		for (c = o[a], s = 0; s < c.length; s += 6)
			(l = Wc(
				1,
				e,
				r,
				0,
				1,
				t || 20,
				c[s],
				c[s + 1],
				c[s + 2],
				c[s + 3],
				c[s + 4],
				c[s + 5],
				c[s + 6],
				c[s + 7]
			)),
				n > Kn && ((n = Kn), (i.j = a), (i.i = s), (i.t = l));
	return i;
}
function Hc(o) {
	Yc(o[0]) && (o = [o]);
	var e = "",
		r = o.length,
		t,
		i,
		n,
		s;
	for (i = 0; i < r; i++) {
		for (
			s = o[i],
				e += "M" + Oe(s[0]) + "," + Oe(s[1]) + " C",
				t = s.length,
				n = 2;
			n < t;
			n++
		)
			e +=
				Oe(s[n++]) +
				"," +
				Oe(s[n++]) +
				" " +
				Oe(s[n++]) +
				"," +
				Oe(s[n++]) +
				" " +
				Oe(s[n++]) +
				"," +
				Oe(s[n]) +
				" ";
		s.closed && (e += "z");
	}
	return e;
}
var It,
	jc,
	Uc = function () {
		return (
			It ||
			(typeof window < "u" &&
				(It = window.gsap) &&
				It.registerPlugin &&
				It)
		);
	},
	jl = function () {
		(It = Uc()),
			It
				? (It.registerEase("_CE", Pn.create), (jc = 1))
				: console.warn("Please gsap.registerPlugin(CustomEase)");
	},
	Bd = 1e20,
	Oo = function (e) {
		return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
	},
	$d = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
	zd = /[cLlsSaAhHvVtTqQ]/g,
	Yd = function (e) {
		var r = e.length,
			t = Bd,
			i;
		for (i = 1; i < r; i += 6) +e[i] < t && (t = +e[i]);
		return t;
	},
	qd = function (e, r, t) {
		!t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
		var i = +e[0] * -1,
			n = -t,
			s = e.length,
			a = 1 / (+e[s - 2] + i),
			l =
				-r ||
				(Math.abs(+e[s - 1] - +e[1]) < 0.01 * (+e[s - 2] - +e[0])
					? Yd(e) + n
					: +e[s - 1] + n),
			c;
		for (l ? (l = 1 / l) : (l = -a), c = 0; c < s; c += 2)
			(e[c] = (+e[c] + i) * a), (e[c + 1] = (+e[c + 1] + n) * l);
	},
	Vd = function o(e, r, t, i, n, s, a, l, c, f, h) {
		var d = (e + t) / 2,
			u = (r + i) / 2,
			p = (t + n) / 2,
			g = (i + s) / 2,
			_ = (n + a) / 2,
			v = (s + l) / 2,
			y = (d + p) / 2,
			m = (u + g) / 2,
			w = (p + _) / 2,
			b = (g + v) / 2,
			T = (y + w) / 2,
			k = (m + b) / 2,
			S = a - e,
			C = l - r,
			$ = Math.abs((t - a) * C - (i - l) * S),
			B = Math.abs((n - a) * C - (s - l) * S),
			M;
		return (
			f ||
				((f = [
					{ x: e, y: r },
					{ x: a, y: l },
				]),
				(h = 1)),
			f.splice(h || f.length - 1, 0, { x: T, y: k }),
			($ + B) * ($ + B) > c * (S * S + C * C) &&
				((M = f.length),
				o(e, r, d, u, y, m, T, k, c, f, h),
				o(T, k, w, b, _, v, a, l, c, f, h + 1 + (f.length - M))),
			f
		);
	},
	Pn = (function () {
		function o(r, t, i) {
			jc || jl(), (this.id = r), this.setData(t, i);
		}
		var e = o.prototype;
		return (
			(e.setData = function (t, i) {
				(i = i || {}), (t = t || "0,0,1,1");
				var n = t.match($d),
					s = 1,
					a = [],
					l = [],
					c = i.precision || 1,
					f = c <= 1,
					h,
					d,
					u,
					p,
					g,
					_,
					v,
					y,
					m;
				if (
					((this.data = t),
					(zd.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
						(n = ms(t)[0]),
					(h = n.length),
					h === 4)
				)
					n.unshift(0, 0), n.push(1, 1), (h = 8);
				else if ((h - 2) % 6) throw "Invalid CustomEase";
				for (
					(+n[0] != 0 || +n[h - 2] != 1) &&
						qd(n, i.height, i.originY),
						this.segment = n,
						p = 2;
					p < h;
					p += 6
				)
					(d = { x: +n[p - 2], y: +n[p - 1] }),
						(u = { x: +n[p + 4], y: +n[p + 5] }),
						a.push(d, u),
						Vd(
							d.x,
							d.y,
							+n[p],
							+n[p + 1],
							+n[p + 2],
							+n[p + 3],
							u.x,
							u.y,
							1 / (c * 2e5),
							a,
							a.length - 1
						);
				for (h = a.length, p = 0; p < h; p++)
					(v = a[p]),
						(y = a[p - 1] || v),
						(v.x > y.x ||
							(y.y !== v.y && y.x === v.x) ||
							v === y) &&
						v.x <= 1
							? ((y.cx = v.x - y.x),
							  (y.cy = v.y - y.y),
							  (y.n = v),
							  (y.nx = v.x),
							  f &&
									p > 1 &&
									Math.abs(
										y.cy / y.cx - a[p - 2].cy / a[p - 2].cx
									) > 2 &&
									(f = 0),
							  y.cx < s &&
									(y.cx
										? (s = y.cx)
										: ((y.cx = 0.001),
										  p === h - 1 &&
												((y.x -= 0.001),
												(s = Math.min(s, 0.001)),
												(f = 0)))))
							: (a.splice(p--, 1), h--);
				if (
					((h = (1 / s + 1) | 0), (g = 1 / h), (_ = 0), (v = a[0]), f)
				) {
					for (p = 0; p < h; p++)
						(m = p * g),
							v.nx < m && (v = a[++_]),
							(d = v.y + ((m - v.x) / v.cx) * v.cy),
							(l[p] = { x: m, cx: g, y: d, cy: 0, nx: 9 }),
							p && (l[p - 1].cy = d - l[p - 1].y);
					l[h - 1].cy = a[a.length - 1].y - d;
				} else {
					for (p = 0; p < h; p++)
						v.nx < p * g && (v = a[++_]), (l[p] = v);
					_ < a.length - 1 && (l[p - 1] = a[a.length - 2]);
				}
				return (
					(this.ease = function (w) {
						var b = l[(w * h) | 0] || l[h - 1];
						return (
							b.nx < w && (b = b.n),
							b.y + ((w - b.x) / b.cx) * b.cy
						);
					}),
					(this.ease.custom = this),
					this.id && It && It.registerEase(this.id, this.ease),
					this
				);
			}),
			(e.getSVGData = function (t) {
				return o.getSVGData(this, t);
			}),
			(o.create = function (t, i, n) {
				return new o(t, i, n).ease;
			}),
			(o.register = function (t) {
				(It = t), jl();
			}),
			(o.get = function (t) {
				return It.parseEase(t);
			}),
			(o.getSVGData = function (t, i) {
				i = i || {};
				var n = i.width || 100,
					s = i.height || 100,
					a = i.x || 0,
					l = (i.y || 0) + s,
					c = It.utils.toArray(i.path)[0],
					f,
					h,
					d,
					u,
					p,
					g,
					_,
					v,
					y,
					m;
				if (
					(i.invert && ((s = -s), (l = 0)),
					typeof t == "string" && (t = It.parseEase(t)),
					t.custom && (t = t.custom),
					t instanceof o)
				)
					f = Hc(Fd([t.segment], n, 0, 0, -s, a, l));
				else {
					for (
						f = [a, l],
							_ = Math.max(5, (i.precision || 1) * 200),
							u = 1 / _,
							_ += 2,
							v = 5 / _,
							y = Oo(a + u * n),
							m = Oo(l + t(u) * -s),
							h = (m - l) / (y - a),
							d = 2;
						d < _;
						d++
					)
						(p = Oo(a + d * u * n)),
							(g = Oo(l + t(d * u) * -s)),
							(Math.abs((g - m) / (p - y) - h) > v ||
								d === _ - 1) &&
								(f.push(y, m), (h = (g - m) / (p - y))),
							(y = p),
							(m = g);
					f = "M" + f.join(",");
				}
				return c && c.setAttribute("d", f), f;
			}),
			o
		);
	})();
Uc() && It.registerPlugin(Pn);
Pn.version = "3.11.3";
var Vr,
	Ai,
	cl,
	hn,
	Bn,
	Uo,
	ys,
	Qn,
	fr = "transform",
	ka = fr + "Origin",
	Kc,
	Qc = function (e) {
		var r = e.ownerDocument || e;
		for (
			!(fr in e.style) &&
			("msTransform" in e.style) &&
			((fr = "msTransform"), (ka = fr + "Origin"));
			r.parentNode && (r = r.parentNode);

		);
		if (((Ai = window), (ys = new $i()), r)) {
			(Vr = r),
				(cl = r.documentElement),
				(hn = r.body),
				(Qn = Vr.createElementNS("http://www.w3.org/2000/svg", "g")),
				(Qn.style.transform = "none");
			var t = r.createElement("div"),
				i = r.createElement("div");
			hn.appendChild(t),
				t.appendChild(i),
				(t.style.position = "static"),
				(t.style[fr] = "translate3d(0,0,1px)"),
				(Kc = i.offsetParent !== t),
				hn.removeChild(t);
		}
		return r;
	},
	Xd = function (e) {
		for (var r, t; e && e !== hn; )
			(t = e._gsap),
				t && t.uncache && t.get(e, "x"),
				t &&
					!t.scaleX &&
					!t.scaleY &&
					t.renderTransform &&
					((t.scaleX = t.scaleY = 1e-4),
					t.renderTransform(1, t),
					r ? r.push(t) : (r = [t])),
				(e = e.parentNode);
		return r;
	},
	Zc = [],
	Jc = [],
	Gd = function () {
		return (
			Ai.pageYOffset || Vr.scrollTop || cl.scrollTop || hn.scrollTop || 0
		);
	},
	Wd = function () {
		return (
			Ai.pageXOffset ||
			Vr.scrollLeft ||
			cl.scrollLeft ||
			hn.scrollLeft ||
			0
		);
	},
	fl = function (e) {
		return (
			e.ownerSVGElement ||
			((e.tagName + "").toLowerCase() === "svg" ? e : null)
		);
	},
	Hd = function o(e) {
		if (Ai.getComputedStyle(e).position === "fixed") return !0;
		if (((e = e.parentNode), e && e.nodeType === 1)) return o(e);
	},
	Vs = function o(e, r) {
		if (e.parentNode && (Vr || Qc(e))) {
			var t = fl(e),
				i = t
					? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				n = t ? (r ? "rect" : "g") : "div",
				s = r !== 2 ? 0 : 100,
				a = r === 3 ? 100 : 0,
				l =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				c = Vr.createElementNS
					? Vr.createElementNS(i.replace(/^https/, "http"), n)
					: Vr.createElement(n);
			return (
				r &&
					(t
						? (Uo || (Uo = o(e)),
						  c.setAttribute("width", 0.01),
						  c.setAttribute("height", 0.01),
						  c.setAttribute(
								"transform",
								"translate(" + s + "," + a + ")"
						  ),
						  Uo.appendChild(c))
						: (Bn || ((Bn = o(e)), (Bn.style.cssText = l)),
						  (c.style.cssText =
								l +
								"width:0.1px;height:0.1px;top:" +
								a +
								"px;left:" +
								s +
								"px"),
						  Bn.appendChild(c))),
				c
			);
		}
		throw "Need document and parent.";
	},
	jd = function (e) {
		for (var r = new $i(), t = 0; t < e.numberOfItems; t++)
			r.multiply(e.getItem(t).matrix);
		return r;
	},
	Ud = function (e) {
		var r = e.getCTM(),
			t;
		return (
			r ||
				((t = e.style[fr]),
				(e.style[fr] = "none"),
				e.appendChild(Qn),
				(r = Qn.getCTM()),
				e.removeChild(Qn),
				t
					? (e.style[fr] = t)
					: e.style.removeProperty(
							fr.replace(/([A-Z])/g, "-$1").toLowerCase()
					  )),
			r || ys.clone()
		);
	},
	Kd = function (e, r) {
		var t = fl(e),
			i = e === t,
			n = t ? Zc : Jc,
			s = e.parentNode,
			a,
			l,
			c,
			f,
			h,
			d;
		if (e === Ai) return e;
		if (
			(n.length || n.push(Vs(e, 1), Vs(e, 2), Vs(e, 3)),
			(a = t ? Uo : Bn),
			t)
		)
			i
				? ((c = Ud(e)), (f = -c.e / c.a), (h = -c.f / c.d), (l = ys))
				: e.getBBox
				? ((c = e.getBBox()),
				  (l = e.transform ? e.transform.baseVal : {}),
				  (l = l.numberOfItems
						? l.numberOfItems > 1
							? jd(l)
							: l.getItem(0).matrix
						: ys),
				  (f = l.a * c.x + l.c * c.y),
				  (h = l.b * c.x + l.d * c.y))
				: ((l = new $i()), (f = h = 0)),
				r && e.tagName.toLowerCase() === "g" && (f = h = 0),
				(i ? t : s).appendChild(a),
				a.setAttribute(
					"transform",
					"matrix(" +
						l.a +
						"," +
						l.b +
						"," +
						l.c +
						"," +
						l.d +
						"," +
						(l.e + f) +
						"," +
						(l.f + h) +
						")"
				);
		else {
			if (((f = h = 0), Kc))
				for (
					l = e.offsetParent, c = e;
					c && (c = c.parentNode) && c !== l && c.parentNode;

				)
					(Ai.getComputedStyle(c)[fr] + "").length > 4 &&
						((f = c.offsetLeft), (h = c.offsetTop), (c = 0));
			if (
				((d = Ai.getComputedStyle(e)),
				d.position !== "absolute" && d.position !== "fixed")
			)
				for (l = e.offsetParent; s && s !== l; )
					(f += s.scrollLeft || 0),
						(h += s.scrollTop || 0),
						(s = s.parentNode);
			(c = a.style),
				(c.top = e.offsetTop - h + "px"),
				(c.left = e.offsetLeft - f + "px"),
				(c[fr] = d[fr]),
				(c[ka] = d[ka]),
				(c.position = d.position === "fixed" ? "fixed" : "absolute"),
				e.parentNode.appendChild(a);
		}
		return a;
	},
	Xs = function (e, r, t, i, n, s, a) {
		return (
			(e.a = r), (e.b = t), (e.c = i), (e.d = n), (e.e = s), (e.f = a), e
		);
	},
	$i = (function () {
		function o(r, t, i, n, s, a) {
			r === void 0 && (r = 1),
				t === void 0 && (t = 0),
				i === void 0 && (i = 0),
				n === void 0 && (n = 1),
				s === void 0 && (s = 0),
				a === void 0 && (a = 0),
				Xs(this, r, t, i, n, s, a);
		}
		var e = o.prototype;
		return (
			(e.inverse = function () {
				var t = this.a,
					i = this.b,
					n = this.c,
					s = this.d,
					a = this.e,
					l = this.f,
					c = t * s - i * n || 1e-10;
				return Xs(
					this,
					s / c,
					-i / c,
					-n / c,
					t / c,
					(n * l - s * a) / c,
					-(t * l - i * a) / c
				);
			}),
			(e.multiply = function (t) {
				var i = this.a,
					n = this.b,
					s = this.c,
					a = this.d,
					l = this.e,
					c = this.f,
					f = t.a,
					h = t.c,
					d = t.b,
					u = t.d,
					p = t.e,
					g = t.f;
				return Xs(
					this,
					f * i + d * s,
					f * n + d * a,
					h * i + u * s,
					h * n + u * a,
					l + p * i + g * s,
					c + p * n + g * a
				);
			}),
			(e.clone = function () {
				return new o(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(e.equals = function (t) {
				var i = this.a,
					n = this.b,
					s = this.c,
					a = this.d,
					l = this.e,
					c = this.f;
				return (
					i === t.a &&
					n === t.b &&
					s === t.c &&
					a === t.d &&
					l === t.e &&
					c === t.f
				);
			}),
			(e.apply = function (t, i) {
				i === void 0 && (i = {});
				var n = t.x,
					s = t.y,
					a = this.a,
					l = this.b,
					c = this.c,
					f = this.d,
					h = this.e,
					d = this.f;
				return (
					(i.x = n * a + s * c + h || 0),
					(i.y = n * l + s * f + d || 0),
					i
				);
			}),
			o
		);
	})();
function ki(o, e, r, t) {
	if (!o || !o.parentNode || (Vr || Qc(o)).documentElement === o)
		return new $i();
	var i = Xd(o),
		n = fl(o),
		s = n ? Zc : Jc,
		a = Kd(o, r),
		l = s[0].getBoundingClientRect(),
		c = s[1].getBoundingClientRect(),
		f = s[2].getBoundingClientRect(),
		h = a.parentNode,
		d = !t && Hd(o),
		u = new $i(
			(c.left - l.left) / 100,
			(c.top - l.top) / 100,
			(f.left - l.left) / 100,
			(f.top - l.top) / 100,
			l.left + (d ? 0 : Wd()),
			l.top + (d ? 0 : Gd())
		);
	if ((h.removeChild(a), i))
		for (l = i.length; l--; )
			(c = i[l]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c);
	return e ? u.inverse() : u;
}
function Qd(o) {
	if (o === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	return o;
}
function Zd(o, e) {
	(o.prototype = Object.create(e.prototype)),
		(o.prototype.constructor = o),
		(o.__proto__ = e);
}
var ke,
	ze,
	Kt,
	Tr,
	Xr,
	Gs,
	$r,
	Pa,
	$n,
	ii,
	ef,
	Ma,
	yo,
	hl,
	zn,
	mr,
	Yn,
	Ko,
	vs = 0,
	tf = function () {
		return typeof window < "u";
	},
	rf = function () {
		return ke || (tf() && (ke = window.gsap) && ke.registerPlugin && ke);
	},
	Jr = function (e) {
		return typeof e == "function";
	},
	Zn = function (e) {
		return typeof e == "object";
	},
	wr = function (e) {
		return typeof e > "u";
	},
	Qo = function () {
		return !1;
	},
	Jn = "transform",
	Ea = "transformOrigin",
	Kr = function (e) {
		return Math.round(e * 1e4) / 1e4;
	},
	An = Array.isArray,
	Co = function (e, r) {
		var t = Kt.createElementNS
			? Kt.createElementNS(
					(r || "http://www.w3.org/1999/xhtml").replace(
						/^https/,
						"http"
					),
					e
			  )
			: Kt.createElement(e);
		return t.style ? t : Kt.createElement(e);
	},
	Ul = 180 / Math.PI,
	mi = 1e20,
	Jd = new $i(),
	Qr =
		Date.now ||
		function () {
			return new Date().getTime();
		},
	Li = [],
	dn = {},
	ep = 0,
	tp = /^(?:a|input|textarea|button|select)$/i,
	Kl = 0,
	ji = {},
	Nr = {},
	nf = function (e, r) {
		var t = {},
			i;
		for (i in e) t[i] = r ? e[i] * r : e[i];
		return t;
	},
	rp = function (e, r) {
		for (var t in r) t in e || (e[t] = r[t]);
		return e;
	},
	Ql = function o(e, r) {
		for (var t = e.length, i; t--; )
			r
				? (e[t].style.touchAction = r)
				: e[t].style.removeProperty("touch-action"),
				(i = e[t].children),
				i && i.length && o(i, r);
	},
	of = function () {
		return Li.forEach(function (e) {
			return e();
		});
	},
	ip = function (e) {
		Li.push(e), Li.length === 1 && ke.ticker.add(of);
	},
	Zl = function () {
		return !Li.length && ke.ticker.remove(of);
	},
	Jl = function (e) {
		for (var r = Li.length; r--; ) Li[r] === e && Li.splice(r, 1);
		ke.to(Zl, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: Zl,
			data: "_draggable",
		});
	},
	np = function (e, r) {
		for (var t in r) t in e || (e[t] = r[t]);
		return e;
	},
	ut = function (e, r, t, i) {
		if (e.addEventListener) {
			var n = yo[r];
			(i = i || (ef ? { passive: !1 } : null)),
				e.addEventListener(n || r, t, i),
				n && r !== n && e.addEventListener(r, t, i);
		}
	},
	at = function (e, r, t) {
		if (e.removeEventListener) {
			var i = yo[r];
			e.removeEventListener(i || r, t),
				i && r !== i && e.removeEventListener(r, t);
		}
	},
	rr = function (e) {
		e.preventDefault && e.preventDefault(),
			e.preventManipulation && e.preventManipulation();
	},
	op = function (e, r) {
		for (var t = e.length; t--; ) if (e[t].identifier === r) return !0;
	},
	sp = function o(e) {
		(hl = e.touches && vs < e.touches.length), at(e.target, "touchend", o);
	},
	eu = function (e) {
		(hl = e.touches && vs < e.touches.length), ut(e.target, "touchend", sp);
	},
	pn = function (e) {
		return (
			ze.pageYOffset ||
			e.scrollTop ||
			e.documentElement.scrollTop ||
			e.body.scrollTop ||
			0
		);
	},
	gn = function (e) {
		return (
			ze.pageXOffset ||
			e.scrollLeft ||
			e.documentElement.scrollLeft ||
			e.body.scrollLeft ||
			0
		);
	},
	tu = function o(e, r) {
		ut(e, "scroll", r), Mn(e.parentNode) || o(e.parentNode, r);
	},
	ru = function o(e, r) {
		at(e, "scroll", r), Mn(e.parentNode) || o(e.parentNode, r);
	},
	Mn = function (e) {
		return (
			!e ||
			e === Tr ||
			e.nodeType === 9 ||
			e === Kt.body ||
			e === ze ||
			!e.nodeType ||
			!e.parentNode
		);
	},
	iu = function (e, r) {
		var t = r === "x" ? "Width" : "Height",
			i = "scroll" + t,
			n = "client" + t;
		return Math.max(
			0,
			Mn(e)
				? Math.max(Tr[i], Xr[i]) - (ze["inner" + t] || Tr[n] || Xr[n])
				: e[i] - e[n]
		);
	},
	Ws = function o(e, r) {
		var t = iu(e, "x"),
			i = iu(e, "y");
		Mn(e) ? (e = Nr) : o(e.parentNode, r),
			(e._gsMaxScrollX = t),
			(e._gsMaxScrollY = i),
			r ||
				((e._gsScrollX = e.scrollLeft || 0),
				(e._gsScrollY = e.scrollTop || 0));
	},
	Hs = function (e, r, t) {
		var i = e.style;
		i &&
			(wr(i[r]) && (r = $n(r, e) || r),
			t == null
				? i.removeProperty &&
				  i.removeProperty(r.replace(/([A-Z])/g, "-$1").toLowerCase())
				: (i[r] = t));
	},
	vo = function (e) {
		return ze.getComputedStyle(
			e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
		);
	},
	yi = {},
	Ui = function (e) {
		if (e === ze)
			return (
				(yi.left = yi.top = 0),
				(yi.width = yi.right =
					Tr.clientWidth || e.innerWidth || Xr.clientWidth || 0),
				(yi.height = yi.bottom =
					(e.innerHeight || 0) - 20 < Tr.clientHeight
						? Tr.clientHeight
						: e.innerHeight || Xr.clientHeight || 0),
				yi
			);
		var r = e.ownerDocument || Kt,
			t = wr(e.pageX)
				? !e.nodeType && !wr(e.left) && !wr(e.top)
					? e
					: ii(e)[0].getBoundingClientRect()
				: {
						left: e.pageX - gn(r),
						top: e.pageY - pn(r),
						right: e.pageX - gn(r) + 1,
						bottom: e.pageY - pn(r) + 1,
				  };
		return (
			wr(t.right) && !wr(t.width)
				? ((t.right = t.left + t.width), (t.bottom = t.top + t.height))
				: wr(t.width) &&
				  (t = {
						width: t.right - t.left,
						height: t.bottom - t.top,
						right: t.right,
						left: t.left,
						bottom: t.bottom,
						top: t.top,
				  }),
			t
		);
	},
	it = function (e, r, t) {
		var i = e.vars,
			n = i[t],
			s = e._listeners[r],
			a;
		return (
			Jr(n) &&
				(a = n.apply(
					i.callbackScope || e,
					i[t + "Params"] || [e.pointerEvent]
				)),
			s && e.dispatchEvent(r) === !1 && (a = !1),
			a
		);
	},
	nu = function (e, r) {
		var t = ii(e)[0],
			i,
			n,
			s;
		return !t.nodeType && t !== ze
			? wr(e.left)
				? ((n = e.min || e.minX || e.minRotation || 0),
				  (i = e.min || e.minY || 0),
				  {
						left: n,
						top: i,
						width: (e.max || e.maxX || e.maxRotation || 0) - n,
						height: (e.max || e.maxY || 0) - i,
				  })
				: ((s = { x: 0, y: 0 }),
				  {
						left: e.left - s.x,
						top: e.top - s.y,
						width: e.width,
						height: e.height,
				  })
			: ap(t, r);
	},
	ir = {},
	ap = function (e, r) {
		r = ii(r)[0];
		var t = e.getBBox && e.ownerSVGElement,
			i = e.ownerDocument || Kt,
			n,
			s,
			a,
			l,
			c,
			f,
			h,
			d,
			u,
			p,
			g,
			_,
			v;
		if (e === ze)
			(a = pn(i)),
				(n = gn(i)),
				(s =
					n +
					(i.documentElement.clientWidth ||
						e.innerWidth ||
						i.body.clientWidth ||
						0)),
				(l =
					a +
					((e.innerHeight || 0) - 20 < i.documentElement.clientHeight
						? i.documentElement.clientHeight
						: e.innerHeight || i.body.clientHeight || 0));
		else {
			if (r === ze || wr(r)) return e.getBoundingClientRect();
			(n = a = 0),
				t
					? ((p = e.getBBox()), (g = p.width), (_ = p.height))
					: (e.viewBox &&
							(p = e.viewBox.baseVal) &&
							((n = p.x || 0),
							(a = p.y || 0),
							(g = p.width),
							(_ = p.height)),
					  g ||
							((v = vo(e)),
							(p = v.boxSizing === "border-box"),
							(g =
								(parseFloat(v.width) || e.clientWidth || 0) +
								(p
									? 0
									: parseFloat(v.borderLeftWidth) +
									  parseFloat(v.borderRightWidth))),
							(_ =
								(parseFloat(v.height) || e.clientHeight || 0) +
								(p
									? 0
									: parseFloat(v.borderTopWidth) +
									  parseFloat(v.borderBottomWidth))))),
				(s = g),
				(l = _);
		}
		return e === r
			? { left: n, top: a, width: s - n, height: l - a }
			: ((c = ki(r, !0).multiply(ki(e))),
			  (f = c.apply({ x: n, y: a })),
			  (h = c.apply({ x: s, y: a })),
			  (d = c.apply({ x: s, y: l })),
			  (u = c.apply({ x: n, y: l })),
			  (n = Math.min(f.x, h.x, d.x, u.x)),
			  (a = Math.min(f.y, h.y, d.y, u.y)),
			  {
					left: n,
					top: a,
					width: Math.max(f.x, h.x, d.x, u.x) - n,
					height: Math.max(f.y, h.y, d.y, u.y) - a,
			  });
	},
	js = function (e, r, t, i, n, s) {
		var a = {},
			l,
			c,
			f;
		if (r)
			if (n !== 1 && r instanceof Array) {
				if (((a.end = l = []), (f = r.length), Zn(r[0])))
					for (c = 0; c < f; c++) l[c] = nf(r[c], n);
				else for (c = 0; c < f; c++) l[c] = r[c] * n;
				(t += 1.1), (i -= 1.1);
			} else
				Jr(r)
					? (a.end = function (h) {
							var d = r.call(e, h),
								u,
								p;
							if (n !== 1)
								if (Zn(d)) {
									u = {};
									for (p in d) u[p] = d[p] * n;
									d = u;
								} else d *= n;
							return d;
					  })
					: (a.end = r);
		return (
			(t || t === 0) && (a.max = t),
			(i || i === 0) && (a.min = i),
			s && (a.velocity = 0),
			a
		);
	},
	lp = function o(e) {
		var r;
		return !e || !e.getAttribute || e === Xr
			? !1
			: (r = e.getAttribute("data-clickable")) === "true" ||
			  (r !== "false" &&
					(e.onclick ||
						tp.test(e.nodeName + "") ||
						e.getAttribute("contentEditable") === "true"))
			? !0
			: o(e.parentNode);
	},
	Do = function (e, r) {
		for (var t = e.length, i; t--; )
			(i = e[t]),
				(i.ondragstart = i.onselectstart = r ? null : Qo),
				ke.set(i, { lazy: !0, userSelect: r ? "text" : "none" });
	},
	up = function o(e) {
		if (vo(e).position === "fixed") return !0;
		if (((e = e.parentNode), e && e.nodeType === 1)) return o(e);
	},
	sf,
	Oa,
	cp = function (e, r) {
		(e = ke.utils.toArray(e)[0]), (r = r || {});
		var t = document.createElement("div"),
			i = t.style,
			n = e.firstChild,
			s = 0,
			a = 0,
			l = e.scrollTop,
			c = e.scrollLeft,
			f = e.scrollWidth,
			h = e.scrollHeight,
			d = 0,
			u = 0,
			p = 0,
			g,
			_,
			v,
			y,
			m,
			w;
		sf && r.force3D !== !1
			? ((m = "translate3d("), (w = "px,0px)"))
			: Jn && ((m = "translate("), (w = "px)")),
			(this.scrollTop = function (b, T) {
				if (!arguments.length) return -this.top();
				this.top(-b, T);
			}),
			(this.scrollLeft = function (b, T) {
				if (!arguments.length) return -this.left();
				this.left(-b, T);
			}),
			(this.left = function (b, T) {
				if (!arguments.length) return -(e.scrollLeft + a);
				var k = e.scrollLeft - c,
					S = a;
				if ((k > 2 || k < -2) && !T) {
					(c = e.scrollLeft),
						ke.killTweensOf(this, { left: 1, scrollLeft: 1 }),
						this.left(-c),
						r.onKill && r.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((a = (b - 0.5) | 0), (b = 0))
						: b > u
						? ((a = (b - u) | 0), (b = u))
						: (a = 0),
					(a || S) &&
						(this._skip || (i[Jn] = m + -a + "px," + -s + w),
						a + d >= 0 && (i.paddingRight = a + d + "px")),
					(e.scrollLeft = b | 0),
					(c = e.scrollLeft);
			}),
			(this.top = function (b, T) {
				if (!arguments.length) return -(e.scrollTop + s);
				var k = e.scrollTop - l,
					S = s;
				if ((k > 2 || k < -2) && !T) {
					(l = e.scrollTop),
						ke.killTweensOf(this, { top: 1, scrollTop: 1 }),
						this.top(-l),
						r.onKill && r.onKill();
					return;
				}
				(b = -b),
					b < 0
						? ((s = (b - 0.5) | 0), (b = 0))
						: b > p
						? ((s = (b - p) | 0), (b = p))
						: (s = 0),
					(s || S) &&
						(this._skip || (i[Jn] = m + -a + "px," + -s + w)),
					(e.scrollTop = b | 0),
					(l = e.scrollTop);
			}),
			(this.maxScrollTop = function () {
				return p;
			}),
			(this.maxScrollLeft = function () {
				return u;
			}),
			(this.disable = function () {
				for (n = t.firstChild; n; )
					(y = n.nextSibling), e.appendChild(n), (n = y);
				e === t.parentNode && e.removeChild(t);
			}),
			(this.enable = function () {
				if (((n = e.firstChild), n !== t)) {
					for (; n; ) (y = n.nextSibling), t.appendChild(n), (n = y);
					e.appendChild(t), this.calibrate();
				}
			}),
			(this.calibrate = function (b) {
				var T = e.clientWidth === g,
					k,
					S,
					C;
				(l = e.scrollTop),
					(c = e.scrollLeft),
					!(
						T &&
						e.clientHeight === _ &&
						t.offsetHeight === v &&
						f === e.scrollWidth &&
						h === e.scrollHeight &&
						!b
					) &&
						((s || a) &&
							((S = this.left()),
							(C = this.top()),
							this.left(-e.scrollLeft),
							this.top(-e.scrollTop)),
						(k = vo(e)),
						(!T || b) &&
							((i.display = "block"),
							(i.width = "auto"),
							(i.paddingRight = "0px"),
							(d = Math.max(0, e.scrollWidth - e.clientWidth)),
							d &&
								(d +=
									parseFloat(k.paddingLeft) +
									(Oa ? parseFloat(k.paddingRight) : 0))),
						(i.display = "inline-block"),
						(i.position = "relative"),
						(i.overflow = "visible"),
						(i.verticalAlign = "top"),
						(i.boxSizing = "content-box"),
						(i.width = "100%"),
						(i.paddingRight = d + "px"),
						Oa && (i.paddingBottom = k.paddingBottom),
						(g = e.clientWidth),
						(_ = e.clientHeight),
						(f = e.scrollWidth),
						(h = e.scrollHeight),
						(u = e.scrollWidth - g),
						(p = e.scrollHeight - _),
						(v = t.offsetHeight),
						(i.display = "block"),
						(S || C) && (this.left(S), this.top(C)));
			}),
			(this.content = t),
			(this.element = e),
			(this._skip = !1),
			this.enable();
	},
	Us = function (e) {
		if (tf() && document.body) {
			var r = window && window.navigator;
			(ze = window),
				(Kt = document),
				(Tr = Kt.documentElement),
				(Xr = Kt.body),
				(Gs = Co("div")),
				(Ko = !!window.PointerEvent),
				($r = Co("div")),
				($r.style.cssText =
					"visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
				(Yn = $r.style.cursor === "grab" ? "grab" : "move"),
				(zn = r && r.userAgent.toLowerCase().indexOf("android") !== -1),
				(Ma =
					("ontouchstart" in Tr && "orientation" in ze) ||
					(r && (r.MaxTouchPoints > 0 || r.msMaxTouchPoints > 0))),
				(Oa = (function () {
					var t = Co("div"),
						i = Co("div"),
						n = i.style,
						s = Xr,
						a;
					return (
						(n.display = "inline-block"),
						(n.position = "relative"),
						(t.style.cssText =
							"width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
						t.appendChild(i),
						s.appendChild(t),
						(a = i.offsetHeight + 18 > t.scrollHeight),
						s.removeChild(t),
						a
					);
				})()),
				(yo = (function (t) {
					for (
						var i = t.split(","),
							n = (
								("onpointerdown" in Gs)
									? "pointerdown,pointermove,pointerup,pointercancel"
									: ("onmspointerdown" in Gs)
									? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
									: t
							).split(","),
							s = {},
							a = 4;
						--a > -1;

					)
						(s[i[a]] = n[a]), (s[n[a]] = i[a]);
					try {
						Tr.addEventListener(
							"test",
							null,
							Object.defineProperty({}, "passive", {
								get: function () {
									ef = 1;
								},
							})
						);
					} catch {}
					return s;
				})("touchstart,touchmove,touchend,touchcancel")),
				ut(Kt, "touchcancel", Qo),
				ut(ze, "touchmove", Qo),
				Xr && Xr.addEventListener("touchstart", Qo),
				ut(Kt, "contextmenu", function () {
					for (var t in dn) dn[t].isPressed && dn[t].endDrag();
				}),
				(ke = Pa = rf());
		}
		ke
			? ((mr = ke.plugins.inertia),
			  ($n = ke.utils.checkPrefix),
			  (Jn = $n(Jn)),
			  (Ea = $n(Ea)),
			  (ii = ke.utils.toArray),
			  (sf = !!$n("perspective")))
			: e && console.warn("Please gsap.registerPlugin(Draggable)");
	},
	fp = (function () {
		function o(r) {
			(this._listeners = {}), (this.target = r || this);
		}
		var e = o.prototype;
		return (
			(e.addEventListener = function (t, i) {
				var n = this._listeners[t] || (this._listeners[t] = []);
				~n.indexOf(i) || n.push(i);
			}),
			(e.removeEventListener = function (t, i) {
				var n = this._listeners[t],
					s = n && n.indexOf(i);
				s >= 0 && n.splice(s, 1);
			}),
			(e.dispatchEvent = function (t) {
				var i = this,
					n;
				return (
					(this._listeners[t] || []).forEach(function (s) {
						return (
							s.call(i, { type: t, target: i.target }) === !1 &&
							(n = !1)
						);
					}),
					n
				);
			}),
			o
		);
	})(),
	zi = (function (o) {
		Zd(e, o);
		function e(r, t) {
			var i;
			(i = o.call(this) || this),
				Pa || Us(1),
				(r = ii(r)[0]),
				mr || (mr = ke.plugins.inertia),
				(i.vars = t = nf(t || {})),
				(i.target = r),
				(i.x = i.y = i.rotation = 0),
				(i.dragResistance = parseFloat(t.dragResistance) || 0),
				(i.edgeResistance = isNaN(t.edgeResistance)
					? 1
					: parseFloat(t.edgeResistance) || 0),
				(i.lockAxis = t.lockAxis),
				(i.autoScroll = t.autoScroll || 0),
				(i.lockedAxis = null),
				(i.allowEventDefault = !!t.allowEventDefault),
				ke.getProperty(r, "x");
			var n = (t.type || "x,y").toLowerCase(),
				s = ~n.indexOf("x") || ~n.indexOf("y"),
				a = n.indexOf("rotation") !== -1,
				l = a ? "rotation" : s ? "x" : "left",
				c = s ? "y" : "top",
				f = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"),
				h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"),
				d = t.minimumMovement || 2,
				u = Qd(i),
				p = ii(t.trigger || t.handle || r),
				g = {},
				_ = 0,
				v = !1,
				y = t.autoScrollMarginTop || 40,
				m = t.autoScrollMarginRight || 40,
				w = t.autoScrollMarginBottom || 40,
				b = t.autoScrollMarginLeft || 40,
				T = t.clickableTest || lp,
				k = 0,
				S = r._gsap || ke.core.getCache(r),
				C = up(r),
				$ = function (P, I) {
					return parseFloat(S.get(r, P, I));
				},
				B = r.ownerDocument || Kt,
				M,
				E,
				F,
				Y,
				R,
				V,
				G,
				ne,
				O,
				W,
				ee,
				re,
				le,
				De,
				fe,
				Ae,
				_e,
				Xt,
				de,
				We,
				ue,
				Ye,
				q,
				L,
				j,
				D,
				Q,
				ie,
				Ne,
				he,
				oe,
				Ce,
				Ie,
				st = function (P) {
					return (
						rr(P),
						P.stopImmediatePropagation &&
							P.stopImmediatePropagation(),
						!1
					);
				},
				ce = function H(P) {
					if (u.autoScroll && u.isDragging && (v || _e)) {
						var I = r,
							x = u.autoScroll * 15,
							A,
							N,
							z,
							U,
							X,
							se,
							K,
							pe;
						for (
							v = !1,
								Nr.scrollTop =
									ze.pageYOffset != null
										? ze.pageYOffset
										: B.documentElement.scrollTop != null
										? B.documentElement.scrollTop
										: B.body.scrollTop,
								Nr.scrollLeft =
									ze.pageXOffset != null
										? ze.pageXOffset
										: B.documentElement.scrollLeft != null
										? B.documentElement.scrollLeft
										: B.body.scrollLeft,
								U = u.pointerX - Nr.scrollLeft,
								X = u.pointerY - Nr.scrollTop;
							I && !N;

						)
							(N = Mn(I.parentNode)),
								(A = N ? Nr : I.parentNode),
								(z = N
									? {
											bottom: Math.max(
												Tr.clientHeight,
												ze.innerHeight || 0
											),
											right: Math.max(
												Tr.clientWidth,
												ze.innerWidth || 0
											),
											left: 0,
											top: 0,
									  }
									: A.getBoundingClientRect()),
								(se = K = 0),
								h &&
									((pe = A._gsMaxScrollY - A.scrollTop),
									pe < 0
										? (K = pe)
										: X > z.bottom - w && pe
										? ((v = !0),
										  (K = Math.min(
												pe,
												(x *
													(1 -
														Math.max(
															0,
															z.bottom - X
														) /
															w)) |
													0
										  )))
										: X < z.top + y &&
										  A.scrollTop &&
										  ((v = !0),
										  (K = -Math.min(
												A.scrollTop,
												(x *
													(1 -
														Math.max(0, X - z.top) /
															y)) |
													0
										  ))),
									K && (A.scrollTop += K)),
								f &&
									((pe = A._gsMaxScrollX - A.scrollLeft),
									pe < 0
										? (se = pe)
										: U > z.right - m && pe
										? ((v = !0),
										  (se = Math.min(
												pe,
												(x *
													(1 -
														Math.max(
															0,
															z.right - U
														) /
															m)) |
													0
										  )))
										: U < z.left + b &&
										  A.scrollLeft &&
										  ((v = !0),
										  (se = -Math.min(
												A.scrollLeft,
												(x *
													(1 -
														Math.max(
															0,
															U - z.left
														) /
															b)) |
													0
										  ))),
									se && (A.scrollLeft += se)),
								N &&
									(se || K) &&
									(ze.scrollTo(A.scrollLeft, A.scrollTop),
									Be(u.pointerX + se, u.pointerY + K)),
								(I = A);
					}
					if (_e) {
						var ae = u.x,
							be = u.y;
						a
							? ((u.deltaX = ae - parseFloat(S.rotation)),
							  (u.rotation = ae),
							  (S.rotation = ae + "deg"),
							  S.renderTransform(1, S))
							: E
							? (h && ((u.deltaY = be - E.top()), E.top(be)),
							  f && ((u.deltaX = ae - E.left()), E.left(ae)))
							: s
							? (h &&
									((u.deltaY = be - parseFloat(S.y)),
									(S.y = be + "px")),
							  f &&
									((u.deltaX = ae - parseFloat(S.x)),
									(S.x = ae + "px")),
							  S.renderTransform(1, S))
							: (h &&
									((u.deltaY =
										be - parseFloat(r.style.top || 0)),
									(r.style.top = be + "px")),
							  f &&
									((u.deltaX =
										ae - parseFloat(r.style.left || 0)),
									(r.style.left = ae + "px"))),
							ne &&
								!P &&
								!ie &&
								((ie = !0),
								it(u, "drag", "onDrag") === !1 &&
									(f && (u.x -= u.deltaX),
									h && (u.y -= u.deltaY),
									H(!0)),
								(ie = !1));
					}
					_e = !1;
				},
				qe = function (P, I) {
					var x = u.x,
						A = u.y,
						N,
						z;
					r._gsap || (S = ke.core.getCache(r)),
						S.uncache && ke.getProperty(r, "x"),
						s
							? ((u.x = parseFloat(S.x)), (u.y = parseFloat(S.y)))
							: a
							? (u.x = u.rotation = parseFloat(S.rotation))
							: E
							? ((u.y = E.top()), (u.x = E.left()))
							: ((u.y =
									parseFloat(
										r.style.top || ((z = vo(r)) && z.top)
									) || 0),
							  (u.x =
									parseFloat(
										r.style.left || (z || {}).left
									) || 0)),
						(de || We || ue) &&
							!I &&
							(u.isDragging || u.isThrowing) &&
							(ue &&
								((ji.x = u.x),
								(ji.y = u.y),
								(N = ue(ji)),
								N.x !== u.x && ((u.x = N.x), (_e = !0)),
								N.y !== u.y && ((u.y = N.y), (_e = !0))),
							de &&
								((N = de(u.x)),
								N !== u.x &&
									((u.x = N),
									a && (u.rotation = N),
									(_e = !0))),
							We &&
								((N = We(u.y)),
								N !== u.y && (u.y = N),
								(_e = !0))),
						_e && ce(!0),
						P ||
							((u.deltaX = u.x - x),
							(u.deltaY = u.y - A),
							it(u, "throwupdate", "onThrowUpdate"));
				},
				Xe = function (P, I, x, A) {
					return (
						I == null && (I = -mi),
						x == null && (x = mi),
						Jr(P)
							? function (N) {
									var z = u.isPressed
										? 1 - u.edgeResistance
										: 1;
									return (
										P.call(
											u,
											(N > x
												? x + (N - x) * z
												: N < I
												? I + (N - I) * z
												: N) * A
										) * A
									);
							  }
							: An(P)
							? function (N) {
									for (
										var z = P.length, U = 0, X = mi, se, K;
										--z > -1;

									)
										(se = P[z]),
											(K = se - N),
											K < 0 && (K = -K),
											K < X &&
												se >= I &&
												se <= x &&
												((U = z), (X = K));
									return P[U];
							  }
							: isNaN(P)
							? function (N) {
									return N;
							  }
							: function () {
									return P * A;
							  }
					);
				},
				Sr = function (P, I, x, A, N, z, U) {
					return (
						(z = z && z < mi ? z * z : mi),
						Jr(P)
							? function (X) {
									var se = u.isPressed
											? 1 - u.edgeResistance
											: 1,
										K = X.x,
										pe = X.y,
										ae,
										be,
										rt;
									return (
										(X.x = K =
											K > x
												? x + (K - x) * se
												: K < I
												? I + (K - I) * se
												: K),
										(X.y = pe =
											pe > N
												? N + (pe - N) * se
												: pe < A
												? A + (pe - A) * se
												: pe),
										(ae = P.call(u, X)),
										ae !== X &&
											((X.x = ae.x), (X.y = ae.y)),
										U !== 1 && ((X.x *= U), (X.y *= U)),
										z < mi &&
											((be = X.x - K),
											(rt = X.y - pe),
											be * be + rt * rt > z &&
												((X.x = K), (X.y = pe))),
										X
									);
							  }
							: An(P)
							? function (X) {
									for (
										var se = P.length,
											K = 0,
											pe = mi,
											ae,
											be,
											rt,
											we;
										--se > -1;

									)
										(rt = P[se]),
											(ae = rt.x - X.x),
											(be = rt.y - X.y),
											(we = ae * ae + be * be),
											we < pe && ((K = se), (pe = we));
									return pe <= z ? P[K] : X;
							  }
							: function (X) {
									return X;
							  }
					);
				},
				He = function () {
					var P, I, x, A;
					(G = !1),
						E
							? (E.calibrate(),
							  (u.minX = ee = -E.maxScrollLeft()),
							  (u.minY = le = -E.maxScrollTop()),
							  (u.maxX = W = u.maxY = re = 0),
							  (G = !0))
							: t.bounds &&
							  ((P = nu(t.bounds, r.parentNode)),
							  a
									? ((u.minX = ee = P.left),
									  (u.maxX = W = P.left + P.width),
									  (u.minY = le = u.maxY = re = 0))
									: !wr(t.bounds.maxX) || !wr(t.bounds.maxY)
									? ((P = t.bounds),
									  (u.minX = ee = P.minX),
									  (u.minY = le = P.minY),
									  (u.maxX = W = P.maxX),
									  (u.maxY = re = P.maxY))
									: ((I = nu(r, r.parentNode)),
									  (u.minX = ee =
											Math.round(
												$(l, "px") + P.left - I.left
											)),
									  (u.minY = le =
											Math.round(
												$(c, "px") + P.top - I.top
											)),
									  (u.maxX = W =
											Math.round(
												ee + (P.width - I.width)
											)),
									  (u.maxY = re =
											Math.round(
												le + (P.height - I.height)
											))),
							  ee > W &&
									((u.minX = W),
									(u.maxX = W = ee),
									(ee = u.minX)),
							  le > re &&
									((u.minY = re),
									(u.maxY = re = le),
									(le = u.minY)),
							  a && ((u.minRotation = ee), (u.maxRotation = W)),
							  (G = !0)),
						t.liveSnap &&
							((x =
								t.liveSnap === !0 ? t.snap || {} : t.liveSnap),
							(A = An(x) || Jr(x)),
							a
								? ((de = Xe(A ? x : x.rotation, ee, W, 1)),
								  (We = null))
								: x.points
								? (ue = Sr(
										A ? x : x.points,
										ee,
										W,
										le,
										re,
										x.radius,
										E ? -1 : 1
								  ))
								: (f &&
										(de = Xe(
											A
												? x
												: x.x || x.left || x.scrollLeft,
											ee,
											W,
											E ? -1 : 1
										)),
								  h &&
										(We = Xe(
											A ? x : x.y || x.top || x.scrollTop,
											le,
											re,
											E ? -1 : 1
										))));
				},
				_t = function () {
					(u.isThrowing = !1),
						it(u, "throwcomplete", "onThrowComplete");
				},
				pr = function () {
					u.isThrowing = !1;
				},
				dt = function (P, I) {
					var x, A, N, z;
					P && mr
						? (P === !0 &&
								((x = t.snap || t.liveSnap || {}),
								(A = An(x) || Jr(x)),
								(P = {
									resistance:
										(t.throwResistance ||
											t.resistance ||
											1e3) / (a ? 10 : 1),
								}),
								a
									? (P.rotation = js(
											u,
											A ? x : x.rotation,
											W,
											ee,
											1,
											I
									  ))
									: (f &&
											(P[l] = js(
												u,
												A
													? x
													: x.points || x.x || x.left,
												W,
												ee,
												E ? -1 : 1,
												I || u.lockedAxis === "x"
											)),
									  h &&
											(P[c] = js(
												u,
												A
													? x
													: x.points || x.y || x.top,
												re,
												le,
												E ? -1 : 1,
												I || u.lockedAxis === "y"
											)),
									  (x.points || (An(x) && Zn(x[0]))) &&
											((P.linkedProps = l + "," + c),
											(P.radius = x.radius)))),
						  (u.isThrowing = !0),
						  (z = isNaN(t.overshootTolerance)
								? t.edgeResistance === 1
									? 0
									: 1 - u.edgeResistance + 0.2
								: t.overshootTolerance),
						  P.duration ||
								(P.duration = {
									max: Math.max(
										t.minDuration || 0,
										"maxDuration" in t ? t.maxDuration : 2
									),
									min: isNaN(t.minDuration)
										? z === 0 ||
										  (Zn(P) && P.resistance > 1e3)
											? 0
											: 0.5
										: t.minDuration,
									overshoot: z,
								}),
						  (u.tween = N =
								ke.to(E || r, {
									inertia: P,
									data: "_draggable",
									onComplete: _t,
									onInterrupt: pr,
									onUpdate: t.fastMode ? it : qe,
									onUpdateParams: t.fastMode
										? [u, "onthrowupdate", "onThrowUpdate"]
										: x && x.radius
										? [!1, !0]
										: [],
								})),
						  t.fastMode ||
								(E && (E._skip = !0),
								N.render(1e9, !0, !0),
								qe(!0, !0),
								(u.endX = u.x),
								(u.endY = u.y),
								a && (u.endRotation = u.x),
								N.play(0),
								qe(!0, !0),
								E && (E._skip = !1)))
						: G && u.applyBounds();
				},
				Gt = function (P) {
					var I = L,
						x;
					(L = ki(r.parentNode, !0)),
						P &&
							u.isPressed &&
							!L.equals(I || new $i()) &&
							((x = I.inverse().apply({ x: F, y: Y })),
							L.apply(x, x),
							(F = x.x),
							(Y = x.y)),
						L.equals(Jd) && (L = null);
				},
				bt = function () {
					var P = 1 - u.edgeResistance,
						I = C ? gn(B) : 0,
						x = C ? pn(B) : 0,
						A,
						N,
						z;
					s &&
						((S.x = $(l, "px") + "px"),
						(S.y = $(c, "px") + "px"),
						S.renderTransform()),
						Gt(!1),
						(ir.x = u.pointerX - I),
						(ir.y = u.pointerY - x),
						L && L.apply(ir, ir),
						(F = ir.x),
						(Y = ir.y),
						_e && (Be(u.pointerX, u.pointerY), ce(!0)),
						(Ce = ki(r)),
						E
							? (He(), (V = E.top()), (R = E.left()))
							: (te() ? (qe(!0, !0), He()) : u.applyBounds(),
							  a
									? ((A = r.ownerSVGElement
											? [
													S.xOrigin - r.getBBox().x,
													S.yOrigin - r.getBBox().y,
											  ]
											: (vo(r)[Ea] || "0 0").split(" ")),
									  (Ae = u.rotationOrigin =
											ki(r).apply({
												x: parseFloat(A[0]) || 0,
												y: parseFloat(A[1]) || 0,
											})),
									  qe(!0, !0),
									  (N = u.pointerX - Ae.x - I),
									  (z = Ae.y - u.pointerY + x),
									  (R = u.x),
									  (V = u.y = Math.atan2(z, N) * Ul))
									: ((V = $(c, "px")), (R = $(l, "px")))),
						G &&
							P &&
							(R > W
								? (R = W + (R - W) / P)
								: R < ee && (R = ee - (ee - R) / P),
							a ||
								(V > re
									? (V = re + (V - re) / P)
									: V < le && (V = le - (le - V) / P))),
						(u.startX = R = Kr(R)),
						(u.startY = V = Kr(V));
				},
				te = function () {
					return u.tween && u.tween.isActive();
				},
				je = function () {
					$r.parentNode &&
						!te() &&
						!u.isDragging &&
						$r.parentNode.removeChild($r);
				},
				Ve = function (P, I) {
					var x;
					if (
						!M ||
						u.isPressed ||
						!P ||
						((P.type === "mousedown" || P.type === "pointerdown") &&
							!I &&
							Qr() - k < 30 &&
							yo[u.pointerEvent.type])
					) {
						oe && P && M && rr(P);
						return;
					}
					if (
						((j = te()),
						(Ie = !1),
						(u.pointerEvent = P),
						yo[P.type]
							? ((q = ~P.type.indexOf("touch")
									? P.currentTarget || P.target
									: B),
							  ut(q, "touchend", Le),
							  ut(q, "touchmove", Ge),
							  ut(q, "touchcancel", Le),
							  ut(B, "touchstart", eu))
							: ((q = null), ut(B, "mousemove", Ge)),
						(Q = null),
						(!Ko || !q) &&
							(ut(B, "mouseup", Le),
							P && P.target && ut(P.target, "mouseup", Le)),
						(Ye =
							T.call(u, P.target) &&
							t.dragClickables === !1 &&
							!I),
						Ye)
					) {
						ut(P.target, "change", Le),
							it(u, "pressInit", "onPressInit"),
							it(u, "press", "onPress"),
							Do(p, !0),
							(oe = !1);
						return;
					}
					if (
						((D =
							!q ||
							f === h ||
							u.vars.allowNativeTouchScrolling === !1 ||
							(u.vars.allowContextMenu &&
								P &&
								(P.ctrlKey || P.which > 2))
								? !1
								: f
								? "y"
								: "x"),
						(oe = !D && !u.allowEventDefault),
						oe && (rr(P), ut(ze, "touchforcechange", rr)),
						P.changedTouches
							? ((P = De = P.changedTouches[0]),
							  (fe = P.identifier))
							: P.pointerId
							? (fe = P.pointerId)
							: (De = fe = null),
						vs++,
						ip(ce),
						(Y = u.pointerY = P.pageY),
						(F = u.pointerX = P.pageX),
						it(u, "pressInit", "onPressInit"),
						(D || u.autoScroll) && Ws(r.parentNode),
						r.parentNode &&
							u.autoScroll &&
							!E &&
							!a &&
							r.parentNode._gsMaxScrollX &&
							!$r.parentNode &&
							!r.getBBox &&
							(($r.style.width = r.parentNode.scrollWidth + "px"),
							r.parentNode.appendChild($r)),
						bt(),
						u.tween && u.tween.kill(),
						(u.isThrowing = !1),
						ke.killTweensOf(E || r, g, !0),
						E && ke.killTweensOf(r, { scrollTo: 1 }, !0),
						(u.tween = u.lockedAxis = null),
						(t.zIndexBoost || (!a && !E && t.zIndexBoost !== !1)) &&
							(r.style.zIndex = e.zIndex++),
						(u.isPressed = !0),
						(ne = !!(t.onDrag || u._listeners.drag)),
						(O = !!(t.onMove || u._listeners.move)),
						t.cursor !== !1 || t.activeCursor)
					)
						for (x = p.length; --x > -1; )
							ke.set(p[x], {
								cursor:
									t.activeCursor ||
									t.cursor ||
									(Yn === "grab" ? "grabbing" : Yn),
							});
					it(u, "press", "onPress");
				},
				Ge = function (P) {
					var I = P,
						x,
						A,
						N,
						z,
						U,
						X;
					if (!M || hl || !u.isPressed || !P) {
						oe && P && M && rr(P);
						return;
					}
					if (((u.pointerEvent = P), (x = P.changedTouches), x)) {
						if (((P = x[0]), P !== De && P.identifier !== fe)) {
							for (
								z = x.length;
								--z > -1 &&
								(P = x[z]).identifier !== fe &&
								P.target !== r;

							);
							if (z < 0) return;
						}
					} else if (P.pointerId && fe && P.pointerId !== fe) return;
					if (
						q &&
						D &&
						!Q &&
						((ir.x = P.pageX - (C ? gn(B) : 0)),
						(ir.y = P.pageY - (C ? pn(B) : 0)),
						L && L.apply(ir, ir),
						(A = ir.x),
						(N = ir.y),
						(U = Math.abs(A - F)),
						(X = Math.abs(N - Y)),
						((U !== X && (U > d || X > d)) || (zn && D === Q)) &&
							((Q = U > X && f ? "x" : "y"),
							D && Q !== D && ut(ze, "touchforcechange", rr),
							u.vars.lockAxisOnTouchScroll !== !1 &&
								f &&
								h &&
								((u.lockedAxis = Q === "x" ? "y" : "x"),
								Jr(u.vars.onLockAxis) &&
									u.vars.onLockAxis.call(u, I)),
							zn && D === Q))
					) {
						Le(I);
						return;
					}
					!u.allowEventDefault &&
					(!D || (Q && D !== Q)) &&
					I.cancelable !== !1
						? (rr(I), (oe = !0))
						: oe && (oe = !1),
						u.autoScroll && (v = !0),
						Be(P.pageX, P.pageY, O);
				},
				Be = function (P, I, x) {
					var A = 1 - u.dragResistance,
						N = 1 - u.edgeResistance,
						z = u.pointerX,
						U = u.pointerY,
						X = V,
						se = u.x,
						K = u.y,
						pe = u.endX,
						ae = u.endY,
						be = u.endRotation,
						rt = _e,
						we,
						Pe,
						me,
						Re,
						_r,
						Me;
					(u.pointerX = P),
						(u.pointerY = I),
						C && ((P -= gn(B)), (I -= pn(B))),
						a
							? ((Re = Math.atan2(Ae.y - I, P - Ae.x) * Ul),
							  (_r = u.y - Re),
							  _r > 180
									? ((V -= 360), (u.y = Re))
									: _r < -180 && ((V += 360), (u.y = Re)),
							  u.x !== R || Math.abs(V - Re) > d
									? ((u.y = Re), (me = R + (V - Re) * A))
									: (me = R))
							: (L &&
									((Me = P * L.a + I * L.c + L.e),
									(I = P * L.b + I * L.d + L.f),
									(P = Me)),
							  (Pe = I - Y),
							  (we = P - F),
							  Pe < d && Pe > -d && (Pe = 0),
							  we < d && we > -d && (we = 0),
							  (u.lockAxis || u.lockedAxis) &&
									(we || Pe) &&
									((Me = u.lockedAxis),
									Me ||
										((u.lockedAxis = Me =
											f && Math.abs(we) > Math.abs(Pe)
												? "y"
												: h
												? "x"
												: null),
										Me &&
											Jr(u.vars.onLockAxis) &&
											u.vars.onLockAxis.call(
												u,
												u.pointerEvent
											)),
									Me === "y"
										? (Pe = 0)
										: Me === "x" && (we = 0)),
							  (me = Kr(R + we * A)),
							  (Re = Kr(V + Pe * A))),
						(de || We || ue) &&
							(u.x !== me || (u.y !== Re && !a)) &&
							(ue &&
								((ji.x = me),
								(ji.y = Re),
								(Me = ue(ji)),
								(me = Kr(Me.x)),
								(Re = Kr(Me.y))),
							de && (me = Kr(de(me))),
							We && (Re = Kr(We(Re)))),
						G &&
							(me > W
								? (me = W + Math.round((me - W) * N))
								: me < ee &&
								  (me = ee + Math.round((me - ee) * N)),
							a ||
								(Re > re
									? (Re = Math.round(re + (Re - re) * N))
									: Re < le &&
									  (Re = Math.round(le + (Re - le) * N)))),
						(u.x !== me || (u.y !== Re && !a)) &&
							(a
								? ((u.endRotation = u.x = u.endX = me),
								  (_e = !0))
								: (h && ((u.y = u.endY = Re), (_e = !0)),
								  f && ((u.x = u.endX = me), (_e = !0))),
							!x || it(u, "move", "onMove") !== !1
								? !u.isDragging &&
								  u.isPressed &&
								  ((u.isDragging = Ie = !0),
								  it(u, "dragstart", "onDragStart"))
								: ((u.pointerX = z),
								  (u.pointerY = U),
								  (V = X),
								  (u.x = se),
								  (u.y = K),
								  (u.endX = pe),
								  (u.endY = ae),
								  (u.endRotation = be),
								  (_e = rt)));
				},
				Le = function H(P, I) {
					if (
						!M ||
						!u.isPressed ||
						(P &&
							fe != null &&
							!I &&
							((P.pointerId &&
								P.pointerId !== fe &&
								P.target !== r) ||
								(P.changedTouches &&
									!op(P.changedTouches, fe))))
					) {
						oe && P && M && rr(P);
						return;
					}
					u.isPressed = !1;
					var x = P,
						A = u.isDragging,
						N =
							u.vars.allowContextMenu &&
							P &&
							(P.ctrlKey || P.which > 2),
						z = ke.delayedCall(0.001, je),
						U,
						X,
						se,
						K,
						pe;
					if (
						(q
							? (at(q, "touchend", H),
							  at(q, "touchmove", Ge),
							  at(q, "touchcancel", H),
							  at(B, "touchstart", eu))
							: at(B, "mousemove", Ge),
						at(ze, "touchforcechange", rr),
						(!Ko || !q) &&
							(at(B, "mouseup", H),
							P && P.target && at(P.target, "mouseup", H)),
						(_e = !1),
						A && ((_ = Kl = Qr()), (u.isDragging = !1)),
						Jl(ce),
						Ye && !N)
					) {
						P && (at(P.target, "change", H), (u.pointerEvent = x)),
							Do(p, !1),
							it(u, "release", "onRelease"),
							it(u, "click", "onClick"),
							(Ye = !1);
						return;
					}
					for (X = p.length; --X > -1; )
						Hs(
							p[X],
							"cursor",
							t.cursor || (t.cursor !== !1 ? Yn : null)
						);
					if ((vs--, P)) {
						if (
							((U = P.changedTouches),
							U && ((P = U[0]), P !== De && P.identifier !== fe))
						) {
							for (
								X = U.length;
								--X > -1 &&
								(P = U[X]).identifier !== fe &&
								P.target !== r;

							);
							if (X < 0 && !I) return;
						}
						(u.pointerEvent = x),
							(u.pointerX = P.pageX),
							(u.pointerY = P.pageY);
					}
					return (
						N && x
							? (rr(x), (oe = !0), it(u, "release", "onRelease"))
							: x && !A
							? ((oe = !1),
							  j &&
									(t.snap || t.bounds) &&
									dt(t.inertia || t.throwProps),
							  it(u, "release", "onRelease"),
							  (!zn || x.type !== "touchmove") &&
									x.type.indexOf("cancel") === -1 &&
									(it(u, "click", "onClick"),
									Qr() - k < 300 &&
										it(u, "doubleclick", "onDoubleClick"),
									(K = x.target || r),
									(k = Qr()),
									(pe = function () {
										k !== Ne &&
											u.enabled() &&
											!u.isPressed &&
											!x.defaultPrevented &&
											(K.click
												? K.click()
												: B.createEvent &&
												  ((se =
														B.createEvent(
															"MouseEvents"
														)),
												  se.initMouseEvent(
														"click",
														!0,
														!0,
														ze,
														1,
														u.pointerEvent.screenX,
														u.pointerEvent.screenY,
														u.pointerX,
														u.pointerY,
														!1,
														!1,
														!1,
														!1,
														0,
														null
												  ),
												  K.dispatchEvent(se)));
									}),
									!zn &&
										!x.defaultPrevented &&
										ke.delayedCall(0.05, pe)))
							: (dt(t.inertia || t.throwProps),
							  !u.allowEventDefault &&
							  x &&
							  (t.dragClickables !== !1 ||
									!T.call(u, x.target)) &&
							  A &&
							  (!D || (Q && D === Q)) &&
							  x.cancelable !== !1
									? ((oe = !0), rr(x))
									: (oe = !1),
							  it(u, "release", "onRelease")),
						te() && z.duration(u.tween.duration()),
						A && it(u, "dragend", "onDragEnd"),
						!0
					);
				},
				wt = function (P) {
					if (P && u.isDragging && !E) {
						var I = P.target || r.parentNode,
							x = I.scrollLeft - I._gsScrollX,
							A = I.scrollTop - I._gsScrollY;
						(x || A) &&
							(L
								? ((F -= x * L.a + A * L.c),
								  (Y -= A * L.d + x * L.b))
								: ((F -= x), (Y -= A)),
							(I._gsScrollX += x),
							(I._gsScrollY += A),
							Be(u.pointerX, u.pointerY));
					}
				},
				gr = function (P) {
					var I = Qr(),
						x = I - k < 100,
						A = I - _ < 50,
						N = x && Ne === k,
						z = u.pointerEvent && u.pointerEvent.defaultPrevented,
						U = x && he === k,
						X = P.isTrusted || (P.isTrusted == null && x && N);
					if (
						((N || (A && u.vars.suppressClickOnDrag !== !1)) &&
							P.stopImmediatePropagation &&
							P.stopImmediatePropagation(),
						x &&
							!(
								u.pointerEvent &&
								u.pointerEvent.defaultPrevented
							) &&
							(!N || (X && !U)))
					) {
						X && N && (he = k), (Ne = k);
						return;
					}
					(u.isPressed || A || x) &&
						(!X || !P.detail || !x || z) &&
						rr(P),
						!x &&
							!A &&
							!Ie &&
							(P && P.target && (u.pointerEvent = P),
							it(u, "click", "onClick"));
				},
				tr = function (P) {
					return L
						? {
								x: P.x * L.a + P.y * L.c + L.e,
								y: P.x * L.b + P.y * L.d + L.f,
						  }
						: { x: P.x, y: P.y };
				};
			return (
				(Xt = e.get(r)),
				Xt && Xt.kill(),
				(i.startDrag = function (H, P) {
					var I, x, A, N;
					Ve(H || u.pointerEvent, !0),
						P &&
							!u.hitTest(H || u.pointerEvent) &&
							((I = Ui(H || u.pointerEvent)),
							(x = Ui(r)),
							(A = tr({
								x: I.left + I.width / 2,
								y: I.top + I.height / 2,
							})),
							(N = tr({
								x: x.left + x.width / 2,
								y: x.top + x.height / 2,
							})),
							(F -= A.x - N.x),
							(Y -= A.y - N.y)),
						u.isDragging ||
							((u.isDragging = Ie = !0),
							it(u, "dragstart", "onDragStart"));
				}),
				(i.drag = Ge),
				(i.endDrag = function (H) {
					return Le(H || u.pointerEvent, !0);
				}),
				(i.timeSinceDrag = function () {
					return u.isDragging ? 0 : (Qr() - _) / 1e3;
				}),
				(i.timeSinceClick = function () {
					return (Qr() - k) / 1e3;
				}),
				(i.hitTest = function (H, P) {
					return e.hitTest(u.target, H, P);
				}),
				(i.getDirection = function (H, P) {
					var I =
							H === "velocity" && mr
								? H
								: Zn(H) && !a
								? "element"
								: "start",
						x,
						A,
						N,
						z,
						U,
						X;
					return (
						I === "element" && ((U = Ui(u.target)), (X = Ui(H))),
						(x =
							I === "start"
								? u.x - R
								: I === "velocity"
								? mr.getVelocity(r, l)
								: U.left +
								  U.width / 2 -
								  (X.left + X.width / 2)),
						a
							? x < 0
								? "counter-clockwise"
								: "clockwise"
							: ((P = P || 2),
							  (A =
									I === "start"
										? u.y - V
										: I === "velocity"
										? mr.getVelocity(r, c)
										: U.top +
										  U.height / 2 -
										  (X.top + X.height / 2)),
							  (N = Math.abs(x / A)),
							  (z = N < 1 / P ? "" : x < 0 ? "left" : "right"),
							  N < P &&
									(z !== "" && (z += "-"),
									(z += A < 0 ? "up" : "down")),
							  z)
					);
				}),
				(i.applyBounds = function (H, P) {
					var I, x, A, N, z, U;
					if (H && t.bounds !== H)
						return (t.bounds = H), u.update(!0, P);
					if ((qe(!0), He(), G && !te())) {
						if (
							((I = u.x),
							(x = u.y),
							I > W ? (I = W) : I < ee && (I = ee),
							x > re ? (x = re) : x < le && (x = le),
							(u.x !== I || u.y !== x) &&
								((A = !0),
								(u.x = u.endX = I),
								a ? (u.endRotation = I) : (u.y = u.endY = x),
								(_e = !0),
								ce(!0),
								u.autoScroll && !u.isDragging))
						)
							for (
								Ws(r.parentNode),
									N = r,
									Nr.scrollTop =
										ze.pageYOffset != null
											? ze.pageYOffset
											: B.documentElement.scrollTop !=
											  null
											? B.documentElement.scrollTop
											: B.body.scrollTop,
									Nr.scrollLeft =
										ze.pageXOffset != null
											? ze.pageXOffset
											: B.documentElement.scrollLeft !=
											  null
											? B.documentElement.scrollLeft
											: B.body.scrollLeft;
								N && !U;

							)
								(U = Mn(N.parentNode)),
									(z = U ? Nr : N.parentNode),
									h &&
										z.scrollTop > z._gsMaxScrollY &&
										(z.scrollTop = z._gsMaxScrollY),
									f &&
										z.scrollLeft > z._gsMaxScrollX &&
										(z.scrollLeft = z._gsMaxScrollX),
									(N = z);
						u.isThrowing &&
							(A ||
								u.endX > W ||
								u.endX < ee ||
								u.endY > re ||
								u.endY < le) &&
							dt(t.inertia || t.throwProps, A);
					}
					return u;
				}),
				(i.update = function (H, P, I) {
					if (P && u.isPressed) {
						var x = ki(r),
							A = Ce.apply({ x: u.x - R, y: u.y - V }),
							N = ki(r.parentNode, !0);
						N.apply({ x: x.e - A.x, y: x.f - A.y }, A),
							(u.x -= A.x - N.e),
							(u.y -= A.y - N.f),
							ce(!0),
							bt();
					}
					var z = u.x,
						U = u.y;
					return (
						Gt(!P),
						H ? u.applyBounds() : (_e && I && ce(!0), qe(!0)),
						P && (Be(u.pointerX, u.pointerY), _e && ce(!0)),
						u.isPressed &&
							!P &&
							((f && Math.abs(z - u.x) > 0.01) ||
								(h && Math.abs(U - u.y) > 0.01 && !a)) &&
							bt(),
						u.autoScroll &&
							(Ws(r.parentNode, u.isDragging),
							(v = u.isDragging),
							ce(!0),
							ru(r, wt),
							tu(r, wt)),
						u
					);
				}),
				(i.enable = function (H) {
					var P = { lazy: !0 },
						I,
						x,
						A;
					if (
						(t.cursor !== !1 && (P.cursor = t.cursor || Yn),
						ke.utils.checkPrefix("touchCallout") &&
							(P.touchCallout = "none"),
						H !== "soft")
					) {
						for (
							Ql(
								p,
								f === h
									? "none"
									: (t.allowNativeTouchScrolling &&
											(r.scrollHeight ===
												r.clientHeight) ==
												(r.scrollWidth ===
													r.clientHeight)) ||
									  t.allowEventDefault
									? "manipulation"
									: f
									? "pan-y"
									: "pan-x"
							),
								x = p.length;
							--x > -1;

						)
							(A = p[x]),
								Ko || ut(A, "mousedown", Ve),
								ut(A, "touchstart", Ve),
								ut(A, "click", gr, !0),
								ke.set(A, P),
								A.getBBox &&
									A.ownerSVGElement &&
									f !== h &&
									ke.set(A.ownerSVGElement, {
										touchAction:
											t.allowNativeTouchScrolling ||
											t.allowEventDefault
												? "manipulation"
												: f
												? "pan-y"
												: "pan-x",
									}),
								t.allowContextMenu || ut(A, "contextmenu", st);
						Do(p, !1);
					}
					return (
						tu(r, wt),
						(M = !0),
						mr &&
							H !== "soft" &&
							mr.track(
								E || r,
								s ? "x,y" : a ? "rotation" : "top,left"
							),
						(r._gsDragID = I = "d" + ep++),
						(dn[I] = u),
						E && (E.enable(), (E.element._gsDragID = I)),
						(t.bounds || a) && bt(),
						t.bounds && u.applyBounds(),
						u
					);
				}),
				(i.disable = function (H) {
					for (var P = u.isDragging, I = p.length, x; --I > -1; )
						Hs(p[I], "cursor", null);
					if (H !== "soft") {
						for (Ql(p, null), I = p.length; --I > -1; )
							(x = p[I]),
								Hs(x, "touchCallout", null),
								at(x, "mousedown", Ve),
								at(x, "touchstart", Ve),
								at(x, "click", gr),
								at(x, "contextmenu", st);
						Do(p, !0),
							q &&
								(at(q, "touchcancel", Le),
								at(q, "touchend", Le),
								at(q, "touchmove", Ge)),
							at(B, "mouseup", Le),
							at(B, "mousemove", Ge);
					}
					return (
						ru(r, wt),
						(M = !1),
						mr &&
							H !== "soft" &&
							mr.untrack(
								E || r,
								s ? "x,y" : a ? "rotation" : "top,left"
							),
						E && E.disable(),
						Jl(ce),
						(u.isDragging = u.isPressed = Ye = !1),
						P && it(u, "dragend", "onDragEnd"),
						u
					);
				}),
				(i.enabled = function (H, P) {
					return arguments.length
						? H
							? u.enable(P)
							: u.disable(P)
						: M;
				}),
				(i.kill = function () {
					return (
						(u.isThrowing = !1),
						u.tween && u.tween.kill(),
						u.disable(),
						ke.set(p, { clearProps: "userSelect" }),
						delete dn[r._gsDragID],
						u
					);
				}),
				~n.indexOf("scroll") &&
					((E = i.scrollProxy =
						new cp(
							r,
							rp(
								{
									onKill: function () {
										u.isPressed && Le(null);
									},
								},
								t
							)
						)),
					(r.style.overflowY = h && !Ma ? "auto" : "hidden"),
					(r.style.overflowX = f && !Ma ? "auto" : "hidden"),
					(r = E.content)),
				a ? (g.rotation = 1) : (f && (g[l] = 1), h && (g[c] = 1)),
				(S.force3D = "force3D" in t ? t.force3D : !0),
				i.enable(),
				i
			);
		}
		return (
			(e.register = function (t) {
				(ke = t), Us();
			}),
			(e.create = function (t, i) {
				return (
					Pa || Us(!0),
					ii(t).map(function (n) {
						return new e(n, i);
					})
				);
			}),
			(e.get = function (t) {
				return dn[(ii(t)[0] || {})._gsDragID];
			}),
			(e.timeSinceDrag = function () {
				return (Qr() - Kl) / 1e3;
			}),
			(e.hitTest = function (t, i, n) {
				if (t === i) return !1;
				var s = Ui(t),
					a = Ui(i),
					l = s.top,
					c = s.left,
					f = s.right,
					h = s.bottom,
					d = s.width,
					u = s.height,
					p = a.left > f || a.right < c || a.top > h || a.bottom < l,
					g,
					_,
					v;
				return p || !n
					? !p
					: ((v = (n + "").indexOf("%") !== -1),
					  (n = parseFloat(n) || 0),
					  (g = {
							left: Math.max(c, a.left),
							top: Math.max(l, a.top),
					  }),
					  (g.width = Math.min(f, a.right) - g.left),
					  (g.height = Math.min(h, a.bottom) - g.top),
					  g.width < 0 || g.height < 0
							? !1
							: v
							? ((n *= 0.01),
							  (_ = g.width * g.height),
							  _ >= d * u * n || _ >= a.width * a.height * n)
							: g.width > n && g.height > n);
			}),
			e
		);
	})(fp);
np(zi.prototype, {
	pointerX: 0,
	pointerY: 0,
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	isDragging: !1,
	isPressed: !1,
});
zi.zIndex = 1e3;
zi.version = "3.11.3";
rf() && ke.registerPlugin(zi);
function ou(o, e) {
	for (var r = 0; r < e.length; r++) {
		var t = e[r];
		(t.enumerable = t.enumerable || !1),
			(t.configurable = !0),
			"value" in t && (t.writable = !0),
			Object.defineProperty(o, t.key, t);
	}
}
function hp(o, e, r) {
	return e && ou(o.prototype, e), r && ou(o, r), o;
}
var St,
	Ca,
	Qt,
	ni,
	oi,
	_n,
	af,
	xi,
	eo,
	lf,
	Gr,
	yr,
	uf = function () {
		return (
			St ||
			(typeof window < "u" &&
				(St = window.gsap) &&
				St.registerPlugin &&
				St)
		);
	},
	cf = 1,
	on = [],
	Te = [],
	Lr = [],
	to = Date.now,
	Da = function (e, r) {
		return r;
	},
	dp = function () {
		var e = eo.core,
			r = e.bridge || {},
			t = e._scrollers,
			i = e._proxies;
		t.push.apply(t, Te),
			i.push.apply(i, Lr),
			(Te = t),
			(Lr = i),
			(Da = function (s, a) {
				return r[s](a);
			});
	},
	ui = function (e, r) {
		return ~Lr.indexOf(e) && Lr[Lr.indexOf(e) + 1][r];
	},
	ro = function (e) {
		return !!~lf.indexOf(e);
	},
	Lt = function (e, r, t, i, n) {
		return e.addEventListener(r, t, { passive: !i, capture: !!n });
	},
	Pt = function (e, r, t, i) {
		return e.removeEventListener(r, t, !!i);
	},
	Ao = "scrollLeft",
	Lo = "scrollTop",
	Aa = function () {
		return (Gr && Gr.isPressed) || Te.cache++;
	},
	bs = function (e, r) {
		var t = function i(n) {
			if (n || n === 0) {
				cf && (Qt.history.scrollRestoration = "manual");
				var s = Gr && Gr.isPressed;
				(n = i.v = Math.round(n) || (Gr && Gr.iOS ? 1 : 0)),
					e(n),
					(i.cacheID = Te.cache),
					s && Da("ss", n);
			} else
				(r || Te.cache !== i.cacheID || Da("ref")) &&
					((i.cacheID = Te.cache), (i.v = e()));
			return i.v + i.offset;
		};
		return (t.offset = 0), e && t;
	},
	Ct = {
		s: Ao,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: bs(function (o) {
			return arguments.length
				? Qt.scrollTo(o, ht.sc())
				: Qt.pageXOffset || ni[Ao] || oi[Ao] || _n[Ao] || 0;
		}),
	},
	ht = {
		s: Lo,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: Ct,
		sc: bs(function (o) {
			return arguments.length
				? Qt.scrollTo(Ct.sc(), o)
				: Qt.pageYOffset || ni[Lo] || oi[Lo] || _n[Lo] || 0;
		}),
	},
	Nt = function (e) {
		return (
			St.utils.toArray(e)[0] ||
			(typeof e == "string" && St.config().nullTargetWarn !== !1
				? console.warn("Element not found:", e)
				: null)
		);
	},
	di = function (e, r) {
		var t = r.s,
			i = r.sc;
		ro(e) && (e = ni.scrollingElement || oi);
		var n = Te.indexOf(e),
			s = i === ht.sc ? 1 : 2;
		!~n && (n = Te.push(e) - 1),
			Te[n + s] || e.addEventListener("scroll", Aa);
		var a = Te[n + s],
			l =
				a ||
				(Te[n + s] =
					bs(ui(e, t), !0) ||
					(ro(e)
						? i
						: bs(function (c) {
								return arguments.length ? (e[t] = c) : e[t];
						  })));
		return (
			(l.target = e),
			a || (l.smooth = St.getProperty(e, "scrollBehavior") === "smooth"),
			l
		);
	},
	La = function (e, r, t) {
		var i = e,
			n = e,
			s = to(),
			a = s,
			l = r || 50,
			c = Math.max(500, l * 3),
			f = function (p, g) {
				var _ = to();
				g || _ - s > l
					? ((n = i), (i = p), (a = s), (s = _))
					: t
					? (i += p)
					: (i = n + ((p - n) / (_ - a)) * (s - a));
			},
			h = function () {
				(n = i = t ? 0 : i), (a = s = 0);
			},
			d = function (p) {
				var g = a,
					_ = n,
					v = to();
				return (
					(p || p === 0) && p !== i && f(p),
					s === a || v - a > c
						? 0
						: ((i + (t ? _ : -_)) / ((t ? v : s) - g)) * 1e3
				);
			};
		return { update: f, reset: h, getVelocity: d };
	},
	Ln = function (e, r) {
		return (
			r && !e._gsapAllow && e.preventDefault(),
			e.changedTouches ? e.changedTouches[0] : e
		);
	},
	su = function (e) {
		var r = Math.max.apply(Math, e),
			t = Math.min.apply(Math, e);
		return Math.abs(r) >= Math.abs(t) ? r : t;
	},
	ff = function () {
		(eo = St.core.globals().ScrollTrigger), eo && eo.core && dp();
	},
	hf = function (e) {
		return (
			(St = e || uf()),
			St &&
				typeof document < "u" &&
				document.body &&
				((Qt = window),
				(ni = document),
				(oi = ni.documentElement),
				(_n = ni.body),
				(lf = [Qt, ni, oi, _n]),
				St.utils.clamp,
				(xi = "onpointerenter" in _n ? "pointer" : "mouse"),
				(af = tt.isTouch =
					Qt.matchMedia &&
					Qt.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in Qt ||
						  navigator.maxTouchPoints > 0 ||
						  navigator.msMaxTouchPoints > 0
						? 2
						: 0),
				(yr = tt.eventTypes =
					(
						"ontouchstart" in oi
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in oi
							? "pointerdown,pointermove,pointercancel,pointerup"
							: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (cf = 0);
				}, 500),
				ff(),
				(Ca = 1)),
			Ca
		);
	};
Ct.op = ht;
Te.cache = 0;
var tt = (function () {
	function o(r) {
		this.init(r);
	}
	var e = o.prototype;
	return (
		(e.init = function (t) {
			Ca ||
				hf(St) ||
				console.warn("Please gsap.registerPlugin(Observer)"),
				eo || ff();
			var i = t.tolerance,
				n = t.dragMinimum,
				s = t.type,
				a = t.target,
				l = t.lineHeight,
				c = t.debounce,
				f = t.preventDefault,
				h = t.onStop,
				d = t.onStopDelay,
				u = t.ignore,
				p = t.wheelSpeed,
				g = t.event,
				_ = t.onDragStart,
				v = t.onDragEnd,
				y = t.onDrag,
				m = t.onPress,
				w = t.onRelease,
				b = t.onRight,
				T = t.onLeft,
				k = t.onUp,
				S = t.onDown,
				C = t.onChangeX,
				$ = t.onChangeY,
				B = t.onChange,
				M = t.onToggleX,
				E = t.onToggleY,
				F = t.onHover,
				Y = t.onHoverEnd,
				R = t.onMove,
				V = t.ignoreCheck,
				G = t.isNormalizer,
				ne = t.onGestureStart,
				O = t.onGestureEnd,
				W = t.onWheel,
				ee = t.onEnable,
				re = t.onDisable,
				le = t.onClick,
				De = t.scrollSpeed,
				fe = t.capture,
				Ae = t.allowClicks,
				_e = t.lockAxis,
				Xt = t.onLockAxis;
			(this.target = a = Nt(a) || oi),
				(this.vars = t),
				u && (u = St.utils.toArray(u)),
				(i = i || 1e-9),
				(n = n || 0),
				(p = p || 1),
				(De = De || 1),
				(s = s || "wheel,touch,pointer"),
				(c = c !== !1),
				l || (l = parseFloat(Qt.getComputedStyle(_n).lineHeight) || 22);
			var de,
				We,
				ue,
				Ye,
				q,
				L,
				j,
				D = this,
				Q = 0,
				ie = 0,
				Ne = di(a, Ct),
				he = di(a, ht),
				oe = Ne(),
				Ce = he(),
				Ie =
					~s.indexOf("touch") &&
					!~s.indexOf("pointer") &&
					yr[0] === "pointerdown",
				st = ro(a),
				ce = a.ownerDocument || ni,
				qe = [0, 0, 0],
				Xe = [0, 0, 0],
				Sr = 0,
				He = function () {
					return (Sr = to());
				},
				_t = function (x, A) {
					return (
						((D.event = x) && u && ~u.indexOf(x.target)) ||
						(A && Ie && x.pointerType !== "touch") ||
						(V && V(x, A))
					);
				},
				pr = function () {
					D._vx.reset(), D._vy.reset(), We.pause(), h && h(D);
				},
				dt = function () {
					var x = (D.deltaX = su(qe)),
						A = (D.deltaY = su(Xe)),
						N = Math.abs(x) >= i,
						z = Math.abs(A) >= i;
					B && (N || z) && B(D, x, A, qe, Xe),
						N &&
							(b && D.deltaX > 0 && b(D),
							T && D.deltaX < 0 && T(D),
							C && C(D),
							M && D.deltaX < 0 != Q < 0 && M(D),
							(Q = D.deltaX),
							(qe[0] = qe[1] = qe[2] = 0)),
						z &&
							(S && D.deltaY > 0 && S(D),
							k && D.deltaY < 0 && k(D),
							$ && $(D),
							E && D.deltaY < 0 != ie < 0 && E(D),
							(ie = D.deltaY),
							(Xe[0] = Xe[1] = Xe[2] = 0)),
						(Ye || ue) &&
							(R && R(D), ue && (y(D), (ue = !1)), (Ye = !1)),
						L && !(L = !1) && Xt && Xt(D),
						q && (W(D), (q = !1)),
						(de = 0);
				},
				Gt = function (x, A, N) {
					(qe[N] += x),
						(Xe[N] += A),
						D._vx.update(x),
						D._vy.update(A),
						c ? de || (de = requestAnimationFrame(dt)) : dt();
				},
				bt = function (x, A) {
					_e &&
						!j &&
						((D.axis = j = Math.abs(x) > Math.abs(A) ? "x" : "y"),
						(L = !0)),
						j !== "y" && ((qe[2] += x), D._vx.update(x, !0)),
						j !== "x" && ((Xe[2] += A), D._vy.update(A, !0)),
						c ? de || (de = requestAnimationFrame(dt)) : dt();
				},
				te = function (x) {
					if (!_t(x, 1)) {
						x = Ln(x, f);
						var A = x.clientX,
							N = x.clientY,
							z = A - D.x,
							U = N - D.y,
							X = D.isDragging;
						(D.x = A),
							(D.y = N),
							(X ||
								Math.abs(D.startX - A) >= n ||
								Math.abs(D.startY - N) >= n) &&
								(y && (ue = !0),
								X || (D.isDragging = !0),
								bt(z, U),
								X || (_ && _(D)));
					}
				},
				je = (D.onPress = function (I) {
					_t(I, 1) ||
						((D.axis = j = null),
						We.pause(),
						(D.isPressed = !0),
						(I = Ln(I)),
						(Q = ie = 0),
						(D.startX = D.x = I.clientX),
						(D.startY = D.y = I.clientY),
						D._vx.reset(),
						D._vy.reset(),
						Lt(G ? a : ce, yr[1], te, f, !0),
						(D.deltaX = D.deltaY = 0),
						m && m(D));
				}),
				Ve = function (x) {
					if (!_t(x, 1)) {
						Pt(G ? a : ce, yr[1], te, !0);
						var A =
								D.isDragging &&
								(Math.abs(D.x - D.startX) > 3 ||
									Math.abs(D.y - D.startY) > 3),
							N = Ln(x);
						A ||
							(D._vx.reset(),
							D._vy.reset(),
							f &&
								Ae &&
								St.delayedCall(0.08, function () {
									if (
										to() - Sr > 300 &&
										!x.defaultPrevented
									) {
										if (x.target.click) x.target.click();
										else if (ce.createEvent) {
											var z =
												ce.createEvent("MouseEvents");
											z.initMouseEvent(
												"click",
												!0,
												!0,
												Qt,
												1,
												N.screenX,
												N.screenY,
												N.clientX,
												N.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null
											),
												x.target.dispatchEvent(z);
										}
									}
								})),
							(D.isDragging = D.isGesturing = D.isPressed = !1),
							h && !G && We.restart(!0),
							v && A && v(D),
							w && w(D, A);
					}
				},
				Ge = function (x) {
					return (
						x.touches &&
						x.touches.length > 1 &&
						(D.isGesturing = !0) &&
						ne(x, D.isDragging)
					);
				},
				Be = function () {
					return (D.isGesturing = !1) || O(D);
				},
				Le = function (x) {
					if (!_t(x)) {
						var A = Ne(),
							N = he();
						Gt((A - oe) * De, (N - Ce) * De, 1),
							(oe = A),
							(Ce = N),
							h && We.restart(!0);
					}
				},
				wt = function (x) {
					if (!_t(x)) {
						(x = Ln(x, f)), W && (q = !0);
						var A =
							(x.deltaMode === 1
								? l
								: x.deltaMode === 2
								? Qt.innerHeight
								: 1) * p;
						Gt(x.deltaX * A, x.deltaY * A, 0),
							h && !G && We.restart(!0);
					}
				},
				gr = function (x) {
					if (!_t(x)) {
						var A = x.clientX,
							N = x.clientY,
							z = A - D.x,
							U = N - D.y;
						(D.x = A), (D.y = N), (Ye = !0), (z || U) && bt(z, U);
					}
				},
				tr = function (x) {
					(D.event = x), F(D);
				},
				H = function (x) {
					(D.event = x), Y(D);
				},
				P = function (x) {
					return _t(x) || (Ln(x, f) && le(D));
				};
			(We = D._dc = St.delayedCall(d || 0.25, pr).pause()),
				(D.deltaX = D.deltaY = 0),
				(D._vx = La(0, 50, !0)),
				(D._vy = La(0, 50, !0)),
				(D.scrollX = Ne),
				(D.scrollY = he),
				(D.isDragging = D.isGesturing = D.isPressed = !1),
				(D.enable = function (I) {
					return (
						D.isEnabled ||
							(Lt(st ? ce : a, "scroll", Aa),
							s.indexOf("scroll") >= 0 &&
								Lt(st ? ce : a, "scroll", Le, f, fe),
							s.indexOf("wheel") >= 0 &&
								Lt(a, "wheel", wt, f, fe),
							((s.indexOf("touch") >= 0 && af) ||
								s.indexOf("pointer") >= 0) &&
								(Lt(a, yr[0], je, f, fe),
								Lt(ce, yr[2], Ve),
								Lt(ce, yr[3], Ve),
								Ae && Lt(a, "click", He, !1, !0),
								le && Lt(a, "click", P),
								ne && Lt(ce, "gesturestart", Ge),
								O && Lt(ce, "gestureend", Be),
								F && Lt(a, xi + "enter", tr),
								Y && Lt(a, xi + "leave", H),
								R && Lt(a, xi + "move", gr)),
							(D.isEnabled = !0),
							I && I.type && je(I),
							ee && ee(D)),
						D
					);
				}),
				(D.disable = function () {
					D.isEnabled &&
						(on.filter(function (I) {
							return I !== D && ro(I.target);
						}).length || Pt(st ? ce : a, "scroll", Aa),
						D.isPressed &&
							(D._vx.reset(),
							D._vy.reset(),
							Pt(G ? a : ce, yr[1], te, !0)),
						Pt(st ? ce : a, "scroll", Le, fe),
						Pt(a, "wheel", wt, fe),
						Pt(a, yr[0], je, fe),
						Pt(ce, yr[2], Ve),
						Pt(ce, yr[3], Ve),
						Pt(a, "click", He, !0),
						Pt(a, "click", P),
						Pt(ce, "gesturestart", Ge),
						Pt(ce, "gestureend", Be),
						Pt(a, xi + "enter", tr),
						Pt(a, xi + "leave", H),
						Pt(a, xi + "move", gr),
						(D.isEnabled = D.isPressed = D.isDragging = !1),
						re && re(D));
				}),
				(D.kill = function () {
					D.disable();
					var I = on.indexOf(D);
					I >= 0 && on.splice(I, 1), Gr === D && (Gr = 0);
				}),
				on.push(D),
				G && ro(a) && (Gr = D),
				D.enable(g);
		}),
		hp(o, [
			{
				key: "velocityX",
				get: function () {
					return this._vx.getVelocity();
				},
			},
			{
				key: "velocityY",
				get: function () {
					return this._vy.getVelocity();
				},
			},
		]),
		o
	);
})();
tt.version = "3.11.3";
tt.create = function (o) {
	return new tt(o);
};
tt.register = hf;
tt.getAll = function () {
	return on.slice();
};
tt.getById = function (o) {
	return on.filter(function (e) {
		return e.vars.id === o;
	})[0];
};
uf() && St.registerPlugin(tt);
var Z,
	Ji,
	xe,
	Ue,
	Cr,
	Je,
	df,
	ws,
	xs,
	sn,
	Zo,
	Ro,
	xt,
	Ds,
	Ra,
	Et,
	au,
	lu,
	en,
	pf,
	Ks,
	gf,
	Wt,
	_f,
	mf,
	yf,
	Zr,
	Fa,
	dl,
	Qs,
	Fo = 1,
	Ot = Date.now,
	Zs = Ot(),
	hr = 0,
	No = 0,
	uu = function () {
		return (Ds = 1);
	},
	cu = function () {
		return (Ds = 0);
	},
	Pr = function (e) {
		return e;
	},
	qn = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	vf = function () {
		return typeof window < "u";
	},
	bf = function () {
		return Z || (vf() && (Z = window.gsap) && Z.registerPlugin && Z);
	},
	Yi = function (e) {
		return !!~df.indexOf(e);
	},
	wf = function (e) {
		return (
			ui(e, "getBoundingClientRect") ||
			(Yi(e)
				? function () {
						return (
							(ns.width = xe.innerWidth),
							(ns.height = xe.innerHeight),
							ns
						);
				  }
				: function () {
						return Yr(e);
				  })
		);
	},
	pp = function (e, r, t) {
		var i = t.d,
			n = t.d2,
			s = t.a;
		return (s = ui(e, "getBoundingClientRect"))
			? function () {
					return s()[i];
			  }
			: function () {
					return (r ? xe["inner" + n] : e["client" + n]) || 0;
			  };
	},
	gp = function (e, r) {
		return !r || ~Lr.indexOf(e)
			? wf(e)
			: function () {
					return ns;
			  };
	},
	si = function (e, r) {
		var t = r.s,
			i = r.d2,
			n = r.d,
			s = r.a;
		return (t = "scroll" + i) && (s = ui(e, t))
			? s() - wf(e)()[n]
			: Yi(e)
			? (Cr[t] || Je[t]) -
			  (xe["inner" + i] || Cr["client" + i] || Je["client" + i])
			: e[t] - e["offset" + i];
	},
	Io = function (e, r) {
		for (var t = 0; t < en.length; t += 3)
			(!r || ~r.indexOf(en[t + 1])) && e(en[t], en[t + 1], en[t + 2]);
	},
	vr = function (e) {
		return typeof e == "string";
	},
	Dt = function (e) {
		return typeof e == "function";
	},
	Vn = function (e) {
		return typeof e == "number";
	},
	Jo = function (e) {
		return typeof e == "object";
	},
	Rn = function (e, r, t) {
		return e && e.progress(r ? 0 : 1) && t && e.pause();
	},
	Js = function (e, r) {
		if (e.enabled) {
			var t = r(e);
			t && t.totalTime && (e.callbackAnimation = t);
		}
	},
	Ki = Math.abs,
	xf = "left",
	Tf = "top",
	pl = "right",
	gl = "bottom",
	Ri = "width",
	Fi = "height",
	io = "Right",
	no = "Left",
	oo = "Top",
	so = "Bottom",
	nt = "padding",
	ar = "margin",
	En = "Width",
	_l = "Height",
	mt = "px",
	Dr = function (e) {
		return xe.getComputedStyle(e);
	},
	_p = function (e) {
		var r = Dr(e).position;
		e.style.position = r === "absolute" || r === "fixed" ? r : "relative";
	},
	fu = function (e, r) {
		for (var t in r) t in e || (e[t] = r[t]);
		return e;
	},
	Yr = function (e, r) {
		var t =
				r &&
				Dr(e)[Ra] !== "matrix(1, 0, 0, 1, 0, 0)" &&
				Z.to(e, {
					x: 0,
					y: 0,
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					rotationX: 0,
					rotationY: 0,
					scale: 1,
					skewX: 0,
					skewY: 0,
				}).progress(1),
			i = e.getBoundingClientRect();
		return t && t.progress(0).kill(), i;
	},
	Na = function (e, r) {
		var t = r.d2;
		return e["offset" + t] || e["client" + t] || 0;
	},
	Sf = function (e) {
		var r = [],
			t = e.labels,
			i = e.duration(),
			n;
		for (n in t) r.push(t[n] / i);
		return r;
	},
	mp = function (e) {
		return function (r) {
			return Z.utils.snap(Sf(e), r);
		};
	},
	ml = function (e) {
		var r = Z.utils.snap(e),
			t =
				Array.isArray(e) &&
				e.slice(0).sort(function (i, n) {
					return i - n;
				});
		return t
			? function (i, n, s) {
					s === void 0 && (s = 0.001);
					var a;
					if (!n) return r(i);
					if (n > 0) {
						for (i -= s, a = 0; a < t.length; a++)
							if (t[a] >= i) return t[a];
						return t[a - 1];
					} else
						for (a = t.length, i += s; a--; )
							if (t[a] <= i) return t[a];
					return t[0];
			  }
			: function (i, n, s) {
					s === void 0 && (s = 0.001);
					var a = r(i);
					return !n || Math.abs(a - i) < s || a - i < 0 == n < 0
						? a
						: r(n < 0 ? i - e : i + e);
			  };
	},
	yp = function (e) {
		return function (r, t) {
			return ml(Sf(e))(r, t.direction);
		};
	},
	Bo = function (e, r, t, i) {
		return t.split(",").forEach(function (n) {
			return e(r, n, i);
		});
	},
	yt = function (e, r, t, i, n) {
		return e.addEventListener(r, t, { passive: !i, capture: !!n });
	},
	pt = function (e, r, t, i) {
		return e.removeEventListener(r, t, !!i);
	},
	$o = function (e, r, t) {
		return t && t.wheelHandler && e(r, "wheel", t);
	},
	hu = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	zo = { toggleActions: "play", anticipatePin: 0 },
	Ts = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	es = function (e, r) {
		if (vr(e)) {
			var t = e.indexOf("="),
				i = ~t
					? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1))
					: 0;
			~t &&
				(e.indexOf("%") > t && (i *= r / 100),
				(e = e.substr(0, t - 1))),
				(e =
					i +
					(e in Ts
						? Ts[e] * r
						: ~e.indexOf("%")
						? (parseFloat(e) * r) / 100
						: parseFloat(e) || 0));
		}
		return e;
	},
	Yo = function (e, r, t, i, n, s, a, l) {
		var c = n.startColor,
			f = n.endColor,
			h = n.fontSize,
			d = n.indent,
			u = n.fontWeight,
			p = Ue.createElement("div"),
			g = Yi(t) || ui(t, "pinType") === "fixed",
			_ = e.indexOf("scroller") !== -1,
			v = g ? Je : t,
			y = e.indexOf("start") !== -1,
			m = y ? c : f,
			w =
				"border-color:" +
				m +
				";font-size:" +
				h +
				";color:" +
				m +
				";font-weight:" +
				u +
				";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return (
			(w += "position:" + ((_ || l) && g ? "fixed;" : "absolute;")),
			(_ || l || !g) &&
				(w += (i === ht ? pl : gl) + ":" + (s + parseFloat(d)) + "px;"),
			a &&
				(w +=
					"box-sizing:border-box;text-align:left;width:" +
					a.offsetWidth +
					"px;"),
			(p._isStart = y),
			p.setAttribute(
				"class",
				"gsap-marker-" + e + (r ? " marker-" + r : "")
			),
			(p.style.cssText = w),
			(p.innerText = r || r === 0 ? e + "-" + r : e),
			v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
			(p._offset = p["offset" + i.op.d2]),
			ts(p, 0, i, y),
			p
		);
	},
	ts = function (e, r, t, i) {
		var n = { display: "block" },
			s = t[i ? "os2" : "p2"],
			a = t[i ? "p2" : "os2"];
		(e._isFlipped = i),
			(n[t.a + "Percent"] = i ? -100 : 0),
			(n[t.a] = i ? "1px" : 0),
			(n["border" + s + En] = 1),
			(n["border" + a + En] = 0),
			(n[t.p] = r + "px"),
			Z.set(e, n);
	},
	ye = [],
	Ia = {},
	bo,
	du = function () {
		return Ot() - hr > 34 && (bo || (bo = requestAnimationFrame(Xi)));
	},
	Qi = function () {
		(!Wt || !Wt.isPressed || Wt.startX > Je.clientWidth) &&
			(Te.cache++,
			Wt ? bo || (bo = requestAnimationFrame(Xi)) : Xi(),
			hr || Vi("scrollStart"),
			(hr = Ot()));
	},
	ea = function () {
		(yf = xe.innerWidth), (mf = xe.innerHeight);
	},
	Xn = function () {
		Te.cache++,
			!xt &&
				!gf &&
				!Ue.fullscreenElement &&
				!Ue.webkitFullscreenElement &&
				(!_f ||
					yf !== xe.innerWidth ||
					Math.abs(xe.innerHeight - mf) > xe.innerHeight * 0.25) &&
				ws.restart(!0);
	},
	qi = {},
	vp = [],
	kf = function o() {
		return pt(ge, "scrollEnd", o) || Ei(!0);
	},
	Vi = function (e) {
		return (
			(qi[e] &&
				qi[e].map(function (r) {
					return r();
				})) ||
			vp
		);
	},
	Ht = [],
	Pf = function (e) {
		for (var r = 0; r < Ht.length; r += 5)
			(!e || (Ht[r + 4] && Ht[r + 4].query === e)) &&
				((Ht[r].style.cssText = Ht[r + 1]),
				Ht[r].getBBox &&
					Ht[r].setAttribute("transform", Ht[r + 2] || ""),
				(Ht[r + 3].uncache = 1));
	},
	yl = function (e, r) {
		var t;
		for (Et = 0; Et < ye.length; Et++)
			(t = ye[Et]),
				t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
		r && Pf(r), r || Vi("revert");
	},
	Mf = function (e, r) {
		Te.cache++,
			(r || !br) &&
				Te.forEach(function (t) {
					return Dt(t) && t.cacheID++ && (t.rec = 0);
				}),
			vr(e) && (xe.history.scrollRestoration = dl = e);
	},
	br,
	Ni = 0,
	pu,
	bp = function () {
		if (pu !== Ni) {
			var e = (pu = Ni);
			requestAnimationFrame(function () {
				return e === Ni && Ei(!0);
			});
		}
	},
	Ei = function (e, r) {
		if (hr && !e) {
			yt(ge, "scrollEnd", kf);
			return;
		}
		(br = ge.isRefreshing = !0),
			Te.forEach(function (i) {
				return Dt(i) && i.cacheID++ && (i.rec = i());
			});
		var t = Vi("refreshInit");
		pf && ge.sort(),
			r || yl(),
			Te.forEach(function (i) {
				Dt(i) &&
					(i.smooth && (i.target.style.scrollBehavior = "auto"),
					i(0));
			}),
			ye.slice(0).forEach(function (i) {
				return i.refresh();
			}),
			ye.forEach(function (i, n) {
				if (i._subPinOffset && i.pin) {
					var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
						a = i.pin[s];
					i.revert(!0, 1),
						i.adjustPinSpacing(i.pin[s] - a),
						i.revert(!1, 1);
				}
			}),
			ye.forEach(function (i) {
				return (
					i.vars.end === "max" &&
					i.setPositions(
						i.start,
						Math.max(i.start + 1, si(i.scroller, i._dir))
					)
				);
			}),
			t.forEach(function (i) {
				return i && i.render && i.render(-1);
			}),
			Te.forEach(function (i) {
				Dt(i) &&
					(i.smooth &&
						requestAnimationFrame(function () {
							return (i.target.style.scrollBehavior = "smooth");
						}),
					i.rec && i(i.rec));
			}),
			Mf(dl, 1),
			ws.pause(),
			Ni++,
			Xi(2),
			ye.forEach(function (i) {
				return Dt(i.vars.onRefresh) && i.vars.onRefresh(i);
			}),
			(br = ge.isRefreshing = !1),
			Vi("refresh");
	},
	gu = 0,
	rs = 1,
	Pi,
	Xi = function (e) {
		if (!br || e === 2) {
			(ge.isUpdating = !0), Pi && Pi.update(0);
			var r = ye.length,
				t = Ot(),
				i = t - Zs >= 50,
				n = r && ye[0].scroll();
			if (
				((rs = gu > n ? -1 : 1),
				(gu = n),
				i &&
					(hr && !Ds && t - hr > 200 && ((hr = 0), Vi("scrollEnd")),
					(Zo = Zs),
					(Zs = t)),
				rs < 0)
			) {
				for (Et = r; Et-- > 0; ) ye[Et] && ye[Et].update(0, i);
				rs = 1;
			} else for (Et = 0; Et < r; Et++) ye[Et] && ye[Et].update(0, i);
			ge.isUpdating = !1;
		}
		bo = 0;
	},
	Ba = [
		xf,
		Tf,
		gl,
		pl,
		ar + so,
		ar + io,
		ar + oo,
		ar + no,
		"display",
		"flexShrink",
		"float",
		"zIndex",
		"gridColumnStart",
		"gridColumnEnd",
		"gridRowStart",
		"gridRowEnd",
		"gridArea",
		"justifySelf",
		"alignSelf",
		"placeSelf",
		"order",
	],
	is = Ba.concat([
		Ri,
		Fi,
		"boxSizing",
		"max" + En,
		"max" + _l,
		"position",
		ar,
		nt,
		nt + oo,
		nt + io,
		nt + so,
		nt + no,
	]),
	wp = function (e, r, t) {
		mn(t);
		var i = e._gsap;
		if (i.spacerIsNative) mn(i.spacerState);
		else if (e._gsap.swappedIn) {
			var n = r.parentNode;
			n && (n.insertBefore(e, r), n.removeChild(r));
		}
		e._gsap.swappedIn = !1;
	},
	ta = function (e, r, t, i) {
		if (!e._gsap.swappedIn) {
			for (var n = Ba.length, s = r.style, a = e.style, l; n--; )
				(l = Ba[n]), (s[l] = t[l]);
			(s.position = t.position === "absolute" ? "absolute" : "relative"),
				t.display === "inline" && (s.display = "inline-block"),
				(a[gl] = a[pl] = "auto"),
				(s.flexBasis = t.flexBasis || "auto"),
				(s.overflow = "visible"),
				(s.boxSizing = "border-box"),
				(s[Ri] = Na(e, Ct) + mt),
				(s[Fi] = Na(e, ht) + mt),
				(s[nt] = a[ar] = a[Tf] = a[xf] = "0"),
				mn(i),
				(a[Ri] = a["max" + En] = t[Ri]),
				(a[Fi] = a["max" + _l] = t[Fi]),
				(a[nt] = t[nt]),
				e.parentNode !== r &&
					(e.parentNode.insertBefore(r, e), r.appendChild(e)),
				(e._gsap.swappedIn = !0);
		}
	},
	xp = /([A-Z])/g,
	mn = function (e) {
		if (e) {
			var r = e.t.style,
				t = e.length,
				i = 0,
				n,
				s;
			for ((e.t._gsap || Z.core.getCache(e.t)).uncache = 1; i < t; i += 2)
				(s = e[i + 1]),
					(n = e[i]),
					s
						? (r[n] = s)
						: r[n] &&
						  r.removeProperty(n.replace(xp, "-$1").toLowerCase());
		}
	},
	qo = function (e) {
		for (var r = is.length, t = e.style, i = [], n = 0; n < r; n++)
			i.push(is[n], t[is[n]]);
		return (i.t = e), i;
	},
	Tp = function (e, r, t) {
		for (var i = [], n = e.length, s = t ? 8 : 0, a; s < n; s += 2)
			(a = e[s]), i.push(a, a in r ? r[a] : e[s + 1]);
		return (i.t = e.t), i;
	},
	ns = { left: 0, top: 0 },
	_u = function (e, r, t, i, n, s, a, l, c, f, h, d, u) {
		Dt(e) && (e = e(l)),
			vr(e) &&
				e.substr(0, 3) === "max" &&
				(e = d + (e.charAt(4) === "=" ? es("0" + e.substr(3), t) : 0));
		var p = u ? u.time() : 0,
			g,
			_,
			v;
		if ((u && u.seek(0), Vn(e))) a && ts(a, t, i, !0);
		else {
			Dt(r) && (r = r(l));
			var y = (e || "0").split(" "),
				m,
				w,
				b,
				T;
			(v = Nt(r) || Je),
				(m = Yr(v) || {}),
				(!m || (!m.left && !m.top)) &&
					Dr(v).display === "none" &&
					((T = v.style.display),
					(v.style.display = "block"),
					(m = Yr(v)),
					T
						? (v.style.display = T)
						: v.style.removeProperty("display")),
				(w = es(y[0], m[i.d])),
				(b = es(y[1] || "0", t)),
				(e = m[i.p] - c[i.p] - f + w + n - b),
				a && ts(a, b, i, t - b < 20 || (a._isStart && b > 20)),
				(t -= t - b);
		}
		if (s) {
			var k = e + t,
				S = s._isStart;
			(g = "scroll" + i.d2),
				ts(
					s,
					k,
					i,
					(S && k > 20) ||
						(!S &&
							(h ? Math.max(Je[g], Cr[g]) : s.parentNode[g]) <=
								k + 1)
				),
				h &&
					((c = Yr(a)),
					h &&
						(s.style[i.op.p] =
							c[i.op.p] - i.op.m - s._offset + mt));
		}
		return (
			u &&
				v &&
				((g = Yr(v)),
				u.seek(d),
				(_ = Yr(v)),
				(u._caScrollDist = g[i.p] - _[i.p]),
				(e = (e / u._caScrollDist) * d)),
			u && u.seek(p),
			u ? e : Math.round(e)
		);
	},
	Sp = /(webkit|moz|length|cssText|inset)/i,
	mu = function (e, r, t, i) {
		if (e.parentNode !== r) {
			var n = e.style,
				s,
				a;
			if (r === Je) {
				(e._stOrig = n.cssText), (a = Dr(e));
				for (s in a)
					!+s &&
						!Sp.test(s) &&
						a[s] &&
						typeof n[s] == "string" &&
						s !== "0" &&
						(n[s] = a[s]);
				(n.top = t), (n.left = i);
			} else n.cssText = e._stOrig;
			(Z.core.getCache(e).uncache = 1), r.appendChild(e);
		}
	},
	yu = function (e, r) {
		var t = di(e, r),
			i = "_scroll" + r.p2,
			n,
			s,
			a = function l(c, f, h, d, u) {
				var p = l.tween,
					g = f.onComplete,
					_ = {};
				return (
					(h = h || t()),
					(u = (d && u) || 0),
					(d = d || c - h),
					p && p.kill(),
					(n = Math.round(h)),
					(f[i] = c),
					(f.modifiers = _),
					(_[i] = function (v) {
						return (
							(v = Math.round(t())),
							v !== n &&
							v !== s &&
							Math.abs(v - n) > 3 &&
							Math.abs(v - s) > 3
								? (p.kill(), (l.tween = 0))
								: (v = h + d * p.ratio + u * p.ratio * p.ratio),
							(s = n),
							(n = Math.round(v))
						);
					}),
					(f.onComplete = function () {
						(l.tween = 0), g && g.call(p);
					}),
					(p = l.tween = Z.to(e, f)),
					p
				);
			};
		return (
			(e[i] = t),
			(t.wheelHandler = function () {
				return a.tween && a.tween.kill() && (a.tween = 0);
			}),
			yt(e, "wheel", t.wheelHandler),
			a
		);
	},
	ge = (function () {
		function o(r, t) {
			Ji ||
				o.register(Z) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				this.init(r, t);
		}
		var e = o.prototype;
		return (
			(e.init = function (t, i) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!No)
				) {
					this.update = this.refresh = this.kill = Pr;
					return;
				}
				t = fu(vr(t) || Vn(t) || t.nodeType ? { trigger: t } : t, zo);
				var n = t,
					s = n.onUpdate,
					a = n.toggleClass,
					l = n.id,
					c = n.onToggle,
					f = n.onRefresh,
					h = n.scrub,
					d = n.trigger,
					u = n.pin,
					p = n.pinSpacing,
					g = n.invalidateOnRefresh,
					_ = n.anticipatePin,
					v = n.onScrubComplete,
					y = n.onSnapComplete,
					m = n.once,
					w = n.snap,
					b = n.pinReparent,
					T = n.pinSpacer,
					k = n.containerAnimation,
					S = n.fastScrollEnd,
					C = n.preventOverlaps,
					$ =
						t.horizontal ||
						(t.containerAnimation && t.horizontal !== !1)
							? Ct
							: ht,
					B = !h && h !== 0,
					M = Nt(t.scroller || xe),
					E = Z.core.getCache(M),
					F = Yi(M),
					Y =
						("pinType" in t
							? t.pinType
							: ui(M, "pinType") || (F && "fixed")) === "fixed",
					R = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
					V = B && t.toggleActions.split(" "),
					G = "markers" in t ? t.markers : zo.markers,
					ne = F ? 0 : parseFloat(Dr(M)["border" + $.p2 + En]) || 0,
					O = this,
					W =
						t.onRefreshInit &&
						function () {
							return t.onRefreshInit(O);
						},
					ee = pp(M, F, $),
					re = gp(M, F),
					le = 0,
					De = 0,
					fe = di(M, $),
					Ae,
					_e,
					Xt,
					de,
					We,
					ue,
					Ye,
					q,
					L,
					j,
					D,
					Q,
					ie,
					Ne,
					he,
					oe,
					Ce,
					Ie,
					st,
					ce,
					qe,
					Xe,
					Sr,
					He,
					_t,
					pr,
					dt,
					Gt,
					bt,
					te,
					je,
					Ve,
					Ge,
					Be,
					Le,
					wt,
					gr,
					tr;
				if (
					(Fa(O),
					(O._dir = $),
					(_ *= 45),
					(O.scroller = M),
					(O.scroll = k ? k.time.bind(k) : fe),
					(de = fe()),
					(O.vars = t),
					(i = i || t.animation),
					"refreshPriority" in t &&
						((pf = 1), t.refreshPriority === -9999 && (Pi = O)),
					(E.tweenScroll = E.tweenScroll || {
						top: yu(M, ht),
						left: yu(M, Ct),
					}),
					(O.tweenTo = Ae = E.tweenScroll[$.p]),
					(O.scrubDuration = function (x) {
						(je = Vn(x) && x),
							je
								? te
									? te.duration(x)
									: (te = Z.to(i, {
											ease: "expo",
											totalProgress: "+=0.001",
											duration: je,
											paused: !0,
											onComplete: function () {
												return v && v(O);
											},
									  }))
								: (te && te.progress(1).kill(), (te = 0));
					}),
					i &&
						((i.vars.lazy = !1),
						i._initted ||
							(i.vars.immediateRender !== !1 &&
								t.immediateRender !== !1 &&
								i.duration() &&
								i.render(0, !0, !0)),
						(O.animation = i.pause()),
						(i.scrollTrigger = O),
						O.scrubDuration(h),
						(Gt = 0),
						l || (l = i.vars.id)),
					ye.push(O),
					w &&
						((!Jo(w) || w.push) && (w = { snapTo: w }),
						"scrollBehavior" in Je.style &&
							Z.set(F ? [Je, Cr] : M, { scrollBehavior: "auto" }),
						Te.forEach(function (x) {
							return (
								Dt(x) &&
								x.target ===
									(F ? Ue.scrollingElement || Cr : M) &&
								(x.smooth = !1)
							);
						}),
						(Xt = Dt(w.snapTo)
							? w.snapTo
							: w.snapTo === "labels"
							? mp(i)
							: w.snapTo === "labelsDirectional"
							? yp(i)
							: w.directional !== !1
							? function (x, A) {
									return ml(w.snapTo)(
										x,
										Ot() - De < 500 ? 0 : A.direction
									);
							  }
							: Z.utils.snap(w.snapTo)),
						(Ve = w.duration || { min: 0.1, max: 2 }),
						(Ve = Jo(Ve) ? sn(Ve.min, Ve.max) : sn(Ve, Ve)),
						(Ge = Z.delayedCall(
							w.delay || je / 2 || 0.1,
							function () {
								var x = fe(),
									A = Ot() - De < 500,
									N = Ae.tween;
								if (
									(A || Math.abs(O.getVelocity()) < 10) &&
									!N &&
									!Ds &&
									le !== x
								) {
									var z = (x - ue) / ie,
										U = i && !B ? i.totalProgress() : z,
										X = A
											? 0
											: ((U - bt) / (Ot() - Zo)) * 1e3 ||
											  0,
										se = Z.utils.clamp(
											-z,
											1 - z,
											(Ki(X / 2) * X) / 0.185
										),
										K = z + (w.inertia === !1 ? 0 : se),
										pe = sn(0, 1, Xt(K, O)),
										ae = Math.round(ue + pe * ie),
										be = w,
										rt = be.onStart,
										we = be.onInterrupt,
										Pe = be.onComplete;
									if (x <= Ye && x >= ue && ae !== x) {
										if (
											N &&
											!N._initted &&
											N.data <= Ki(ae - x)
										)
											return;
										w.inertia === !1 && (se = pe - z),
											Ae(
												ae,
												{
													duration: Ve(
														Ki(
															(Math.max(
																Ki(K - U),
																Ki(pe - U)
															) *
																0.185) /
																X /
																0.05 || 0
														)
													),
													ease: w.ease || "power3",
													data: Ki(ae - x),
													onInterrupt: function () {
														return (
															Ge.restart(!0) &&
															we &&
															we(O)
														);
													},
													onComplete: function () {
														O.update(),
															(le = fe()),
															(Gt = bt =
																i && !B
																	? i.totalProgress()
																	: O.progress),
															y && y(O),
															Pe && Pe(O);
													},
												},
												x,
												se * ie,
												ae - x - se * ie
											),
											rt && rt(O, Ae.tween);
									}
								} else O.isActive && le !== x && Ge.restart(!0);
							}
						).pause())),
					l && (Ia[l] = O),
					(d = O.trigger = Nt(d || u)),
					(tr = d && d._gsap && d._gsap.stRevert),
					tr && (tr = tr(O)),
					(u = u === !0 ? d : Nt(u)),
					vr(a) && (a = { targets: d, className: a }),
					u &&
						(p === !1 ||
							p === ar ||
							(p =
								!p &&
								u.parentNode &&
								u.parentNode.style &&
								Dr(u.parentNode).display === "flex"
									? !1
									: nt),
						(O.pin = u),
						(_e = Z.core.getCache(u)),
						_e.spacer
							? (Ne = _e.pinState)
							: (T &&
									((T = Nt(T)),
									T &&
										!T.nodeType &&
										(T = T.current || T.nativeElement),
									(_e.spacerIsNative = !!T),
									T && (_e.spacerState = qo(T))),
							  (_e.spacer = Ce = T || Ue.createElement("div")),
							  Ce.classList.add("pin-spacer"),
							  l && Ce.classList.add("pin-spacer-" + l),
							  (_e.pinState = Ne = qo(u))),
						t.force3D !== !1 && Z.set(u, { force3D: !0 }),
						(O.spacer = Ce = _e.spacer),
						(dt = Dr(u)),
						(Sr = dt[p + $.os2]),
						(st = Z.getProperty(u)),
						(ce = Z.quickSetter(u, $.a, mt)),
						ta(u, Ce, dt),
						(oe = qo(u))),
					G)
				) {
					(Q = Jo(G) ? fu(G, hu) : hu),
						(j = Yo("scroller-start", l, M, $, Q, 0)),
						(D = Yo("scroller-end", l, M, $, Q, 0, j)),
						(Ie = j["offset" + $.op.d2]);
					var H = Nt(ui(M, "content") || M);
					(q = this.markerStart = Yo("start", l, H, $, Q, Ie, 0, k)),
						(L = this.markerEnd = Yo("end", l, H, $, Q, Ie, 0, k)),
						k && (gr = Z.quickSetter([q, L], $.a, mt)),
						!Y &&
							!(Lr.length && ui(M, "fixedMarkers") === !0) &&
							(_p(F ? Je : M),
							Z.set([j, D], { force3D: !0 }),
							(_t = Z.quickSetter(j, $.a, mt)),
							(pr = Z.quickSetter(D, $.a, mt)));
				}
				if (k) {
					var P = k.vars.onUpdate,
						I = k.vars.onUpdateParams;
					k.eventCallback("onUpdate", function () {
						O.update(0, 0, 1), P && P.apply(I || []);
					});
				}
				(O.previous = function () {
					return ye[ye.indexOf(O) - 1];
				}),
					(O.next = function () {
						return ye[ye.indexOf(O) + 1];
					}),
					(O.revert = function (x, A) {
						if (!A) return O.kill(!0);
						var N = x !== !1 || !O.enabled,
							z = xt;
						N !== O.isReverted &&
							(N &&
								((Le = Math.max(fe(), O.scroll.rec || 0)),
								(Be = O.progress),
								(wt = i && i.progress())),
							q &&
								[q, L, j, D].forEach(function (U) {
									return (U.style.display = N
										? "none"
										: "block");
								}),
							N && ((xt = 1), O.update(N)),
							u &&
								(N
									? wp(u, Ce, Ne)
									: (!b || !O.isActive) &&
									  ta(u, Ce, Dr(u), He)),
							N || O.update(N),
							(xt = z),
							(O.isReverted = N));
					}),
					(O.refresh = function (x, A) {
						if (!((xt || !O.enabled) && !A)) {
							if (u && x && hr) {
								yt(o, "scrollEnd", kf);
								return;
							}
							!br && W && W(O),
								(xt = 1),
								(De = Ot()),
								Ae.tween && (Ae.tween.kill(), (Ae.tween = 0)),
								te && te.pause(),
								g && i && i.revert({ kill: !1 }).invalidate(),
								O.isReverted || O.revert(!0, !0),
								(O._subPinOffset = !1);
							for (
								var N = ee(),
									z = re(),
									U = k ? k.duration() : si(M, $),
									X = 0,
									se = 0,
									K = t.end,
									pe = t.endTrigger || d,
									ae =
										t.start ||
										(t.start === 0 || !d
											? 0
											: u
											? "0 0"
											: "0 100%"),
									be = (O.pinnedContainer =
										t.pinnedContainer &&
										Nt(t.pinnedContainer)),
									rt = (d && Math.max(0, ye.indexOf(O))) || 0,
									we = rt,
									Pe,
									me,
									Re,
									_r,
									Me,
									Ze,
									Fr,
									Ls,
									kl,
									On;
								we--;

							)
								(Ze = ye[we]),
									Ze.end || Ze.refresh(0, 1) || (xt = 1),
									(Fr = Ze.pin),
									Fr &&
										(Fr === d || Fr === u) &&
										!Ze.isReverted &&
										(On || (On = []),
										On.unshift(Ze),
										Ze.revert(!0, !0)),
									Ze !== ye[we] && (rt--, we--);
							for (
								Dt(ae) && (ae = ae(O)),
									ue =
										_u(
											ae,
											d,
											N,
											$,
											fe(),
											q,
											j,
											O,
											z,
											ne,
											Y,
											U,
											k
										) || (u ? -0.001 : 0),
									Dt(K) && (K = K(O)),
									vr(K) &&
										!K.indexOf("+=") &&
										(~K.indexOf(" ")
											? (K =
													(vr(ae)
														? ae.split(" ")[0]
														: "") + K)
											: ((X = es(K.substr(2), N)),
											  (K = vr(ae) ? ae : ue + X),
											  (pe = d))),
									Ye =
										Math.max(
											ue,
											_u(
												K || (pe ? "100% 0" : U),
												pe,
												N,
												$,
												fe() + X,
												L,
												D,
												O,
												z,
												ne,
												Y,
												U,
												k
											)
										) || -0.001,
									ie = Ye - ue || ((ue -= 0.01) && 0.001),
									X = 0,
									we = rt;
								we--;

							)
								(Ze = ye[we]),
									(Fr = Ze.pin),
									Fr &&
										Ze.start - Ze._pinPush <= ue &&
										!k &&
										Ze.end > 0 &&
										((Pe = Ze.end - Ze.start),
										((Fr === d &&
											Ze.start - Ze._pinPush < ue) ||
											Fr === be) &&
											!Vn(ae) &&
											(X += Pe * (1 - Ze.progress)),
										Fr === u && (se += Pe));
							if (
								((ue += X),
								(Ye += X),
								(O._pinPush = se),
								q &&
									X &&
									((Pe = {}),
									(Pe[$.a] = "+=" + X),
									be && (Pe[$.p] = "-=" + fe()),
									Z.set([q, L], Pe)),
								u)
							)
								(Pe = Dr(u)),
									(_r = $ === ht),
									(Re = fe()),
									(qe = parseFloat(st($.a)) + se),
									!U &&
										Ye > 1 &&
										((F ? Je : M).style["overflow-" + $.a] =
											"scroll"),
									ta(u, Ce, Pe),
									(oe = qo(u)),
									(me = Yr(u, !0)),
									(Ls = Y && di(M, _r ? Ct : ht)()),
									p &&
										((He = [p + $.os2, ie + se + mt]),
										(He.t = Ce),
										(we =
											p === nt ? Na(u, $) + ie + se : 0),
										we && He.push($.d, we + mt),
										mn(He),
										be &&
											ye.forEach(function (Cn) {
												Cn.pin === be &&
													Cn.vars.pinSpacing !== !1 &&
													(Cn._subPinOffset = !0);
											}),
										Y && fe(Le)),
									Y &&
										((Me = {
											top:
												me.top +
												(_r ? Re - ue : Ls) +
												mt,
											left:
												me.left +
												(_r ? Ls : Re - ue) +
												mt,
											boxSizing: "border-box",
											position: "fixed",
										}),
										(Me[Ri] = Me["max" + En] =
											Math.ceil(me.width) + mt),
										(Me[Fi] = Me["max" + _l] =
											Math.ceil(me.height) + mt),
										(Me[ar] =
											Me[ar + oo] =
											Me[ar + io] =
											Me[ar + so] =
											Me[ar + no] =
												"0"),
										(Me[nt] = Pe[nt]),
										(Me[nt + oo] = Pe[nt + oo]),
										(Me[nt + io] = Pe[nt + io]),
										(Me[nt + so] = Pe[nt + so]),
										(Me[nt + no] = Pe[nt + no]),
										(he = Tp(Ne, Me, b)),
										br && fe(0)),
									i
										? ((kl = i._initted),
										  Ks(1),
										  i.render(i.duration(), !0, !0),
										  (Xe = st($.a) - qe + ie + se),
										  ie !== Xe &&
												Y &&
												he.splice(he.length - 2, 2),
										  i.render(0, !0, !0),
										  kl || i.invalidate(!0),
										  i.parent ||
												i.totalTime(i.totalTime()),
										  Ks(0))
										: (Xe = ie);
							else if (d && fe() && !k)
								for (me = d.parentNode; me && me !== Je; )
									me._pinOffset &&
										((ue -= me._pinOffset),
										(Ye -= me._pinOffset)),
										(me = me.parentNode);
							On &&
								On.forEach(function (Cn) {
									return Cn.revert(!1, !0);
								}),
								(O.start = ue),
								(O.end = Ye),
								(de = We = br ? Le : fe()),
								!k &&
									!br &&
									(de < Le && fe(Le), (O.scroll.rec = 0)),
								O.revert(!1, !0),
								Ge &&
									((le = -1),
									O.isActive && fe(ue + ie * Be),
									Ge.restart(!0)),
								(xt = 0),
								i &&
									B &&
									(i._initted || wt) &&
									i.progress() !== wt &&
									i.progress(wt, !0).render(i.time(), !0, !0),
								(Be !== O.progress || k) &&
									(i && !B && i.totalProgress(Be, !0),
									(O.progress =
										(de - ue) / ie === Be ? 0 : Be)),
								u &&
									p &&
									(Ce._pinOffset = Math.round(
										O.progress * Xe
									)),
								f && !br && f(O);
						}
					}),
					(O.getVelocity = function () {
						return ((fe() - We) / (Ot() - Zo)) * 1e3 || 0;
					}),
					(O.endAnimation = function () {
						Rn(O.callbackAnimation),
							i &&
								(te
									? te.progress(1)
									: i.paused()
									? B || Rn(i, O.direction < 0, 1)
									: Rn(i, i.reversed()));
					}),
					(O.labelToScroll = function (x) {
						return (
							(i &&
								i.labels &&
								(ue || O.refresh() || ue) +
									(i.labels[x] / i.duration()) * ie) ||
							0
						);
					}),
					(O.getTrailing = function (x) {
						var A = ye.indexOf(O),
							N =
								O.direction > 0
									? ye.slice(0, A).reverse()
									: ye.slice(A + 1);
						return (
							vr(x)
								? N.filter(function (z) {
										return z.vars.preventOverlaps === x;
								  })
								: N
						).filter(function (z) {
							return O.direction > 0
								? z.end <= ue
								: z.start >= Ye;
						});
					}),
					(O.update = function (x, A, N) {
						if (!(k && !N && !x)) {
							var z = br ? Le : O.scroll(),
								U = x ? 0 : (z - ue) / ie,
								X = U < 0 ? 0 : U > 1 ? 1 : U || 0,
								se = O.progress,
								K,
								pe,
								ae,
								be,
								rt,
								we,
								Pe,
								me;
							if (
								(A &&
									((We = de),
									(de = k ? fe() : z),
									w &&
										((bt = Gt),
										(Gt =
											i && !B ? i.totalProgress() : X))),
								_ &&
									!X &&
									u &&
									!xt &&
									!Fo &&
									hr &&
									ue < z + ((z - We) / (Ot() - Zo)) * _ &&
									(X = 1e-4),
								X !== se && O.enabled)
							) {
								if (
									((K = O.isActive = !!X && X < 1),
									(pe = !!se && se < 1),
									(we = K !== pe),
									(rt = we || !!X != !!se),
									(O.direction = X > se ? 1 : -1),
									(O.progress = X),
									rt &&
										!xt &&
										((ae =
											X && !se
												? 0
												: X === 1
												? 1
												: se === 1
												? 2
												: 3),
										B &&
											((be =
												(!we &&
													V[ae + 1] !== "none" &&
													V[ae + 1]) ||
												V[ae]),
											(me =
												i &&
												(be === "complete" ||
													be === "reset" ||
													be in i)))),
									C &&
										(we || me) &&
										(me || h || !i) &&
										(Dt(C)
											? C(O)
											: O.getTrailing(C).forEach(
													function (Ze) {
														return Ze.endAnimation();
													}
											  )),
									B ||
										(te && !xt && !Fo
											? ((k || (Pi && Pi !== O)) &&
													te.render(
														te._dp._time - te._start
													),
											  te.resetTo
													? te.resetTo(
															"totalProgress",
															X,
															i._tTime / i._tDur
													  )
													: ((te.vars.totalProgress =
															X),
													  te
															.invalidate()
															.restart()))
											: i && i.totalProgress(X, !!xt)),
									u)
								) {
									if (
										(x && p && (Ce.style[p + $.os2] = Sr),
										!Y)
									)
										ce(qn(qe + Xe * X));
									else if (rt) {
										if (
											((Pe =
												!x &&
												X > se &&
												Ye + 1 > z &&
												z + 1 >= si(M, $)),
											b)
										)
											if (!x && (K || Pe)) {
												var Re = Yr(u, !0),
													_r = z - ue;
												mu(
													u,
													Je,
													Re.top +
														($ === ht ? _r : 0) +
														mt,
													Re.left +
														($ === ht ? 0 : _r) +
														mt
												);
											} else mu(u, Ce);
										mn(K || Pe ? he : oe),
											(Xe !== ie && X < 1 && K) ||
												ce(
													qe +
														(X === 1 && !Pe
															? Xe
															: 0)
												);
									}
								}
								w && !Ae.tween && !xt && !Fo && Ge.restart(!0),
									a &&
										(we || (m && X && (X < 1 || !Qs))) &&
										xs(a.targets).forEach(function (Ze) {
											return Ze.classList[
												K || m ? "add" : "remove"
											](a.className);
										}),
									s && !B && !x && s(O),
									rt && !xt
										? (B &&
												(me &&
													(be === "complete"
														? i
																.pause()
																.totalProgress(
																	1
																)
														: be === "reset"
														? i.restart(!0).pause()
														: be === "restart"
														? i.restart(!0)
														: i[be]()),
												s && s(O)),
										  (we || !Qs) &&
												(c && we && Js(O, c),
												R[ae] && Js(O, R[ae]),
												m &&
													(X === 1
														? O.kill(!1, 1)
														: (R[ae] = 0)),
												we ||
													((ae = X === 1 ? 1 : 3),
													R[ae] && Js(O, R[ae]))),
										  S &&
												!K &&
												Math.abs(O.getVelocity()) >
													(Vn(S) ? S : 2500) &&
												(Rn(O.callbackAnimation),
												te
													? te.progress(1)
													: Rn(
															i,
															be === "reverse"
																? 1
																: !X,
															1
													  )))
										: B && s && !xt && s(O);
							}
							if (pr) {
								var Me = k
									? (z / k.duration()) *
									  (k._caScrollDist || 0)
									: z;
								_t(Me + (j._isFlipped ? 1 : 0)), pr(Me);
							}
							gr &&
								gr(
									(-z / k.duration()) * (k._caScrollDist || 0)
								);
						}
					}),
					(O.enable = function (x, A) {
						O.enabled ||
							((O.enabled = !0),
							yt(M, "resize", Xn),
							yt(F ? Ue : M, "scroll", Qi),
							W && yt(o, "refreshInit", W),
							x !== !1 &&
								((O.progress = Be = 0), (de = We = le = fe())),
							A !== !1 && O.refresh());
					}),
					(O.getTween = function (x) {
						return x && Ae ? Ae.tween : te;
					}),
					(O.setPositions = function (x, A) {
						u &&
							((qe += x - ue),
							(Xe += A - x - ie),
							p === nt && O.adjustPinSpacing(A - x - ie)),
							(O.start = ue = x),
							(O.end = Ye = A),
							(ie = A - x),
							O.update();
					}),
					(O.adjustPinSpacing = function (x) {
						if (He) {
							var A = He.indexOf($.d) + 1;
							(He[A] = parseFloat(He[A]) + x + mt),
								(He[1] = parseFloat(He[1]) + x + mt),
								mn(He);
						}
					}),
					(O.disable = function (x, A) {
						if (
							O.enabled &&
							(x !== !1 && O.revert(!0, !0),
							(O.enabled = O.isActive = !1),
							A || (te && te.pause()),
							(Le = 0),
							_e && (_e.uncache = 1),
							W && pt(o, "refreshInit", W),
							Ge &&
								(Ge.pause(),
								Ae.tween && Ae.tween.kill() && (Ae.tween = 0)),
							!F)
						) {
							for (var N = ye.length; N--; )
								if (ye[N].scroller === M && ye[N] !== O) return;
							pt(M, "resize", Xn), pt(M, "scroll", Qi);
						}
					}),
					(O.kill = function (x, A) {
						O.disable(x, A),
							te && !A && te.kill(),
							l && delete Ia[l];
						var N = ye.indexOf(O);
						N >= 0 && ye.splice(N, 1),
							N === Et && rs > 0 && Et--,
							(N = 0),
							ye.forEach(function (z) {
								return z.scroller === O.scroller && (N = 1);
							}),
							N || br || (O.scroll.rec = 0),
							i &&
								((i.scrollTrigger = null),
								x && i.revert({ kill: !1 }),
								A || i.kill()),
							q &&
								[q, L, j, D].forEach(function (z) {
									return (
										z.parentNode &&
										z.parentNode.removeChild(z)
									);
								}),
							Pi === O && (Pi = 0),
							u &&
								(_e && (_e.uncache = 1),
								(N = 0),
								ye.forEach(function (z) {
									return z.pin === u && N++;
								}),
								N || (_e.spacer = 0)),
							t.onKill && t.onKill(O);
					}),
					O.enable(!1, !1),
					tr && tr(O),
					!i || !i.add || ie
						? O.refresh()
						: Z.delayedCall(0.01, function () {
								return ue || Ye || O.refresh();
						  }) &&
						  (ie = 0.01) &&
						  (ue = Ye = 0),
					u && bp();
			}),
			(o.register = function (t) {
				return (
					Ji ||
						((Z = t || bf()),
						vf() && window.document && o.enable(),
						(Ji = No)),
					Ji
				);
			}),
			(o.defaults = function (t) {
				if (t) for (var i in t) zo[i] = t[i];
				return zo;
			}),
			(o.disable = function (t, i) {
				(No = 0),
					ye.forEach(function (s) {
						return s[i ? "kill" : "disable"](t);
					}),
					pt(xe, "wheel", Qi),
					pt(Ue, "scroll", Qi),
					clearInterval(Ro),
					pt(Ue, "touchcancel", Pr),
					pt(Je, "touchstart", Pr),
					Bo(pt, Ue, "pointerdown,touchstart,mousedown", uu),
					Bo(pt, Ue, "pointerup,touchend,mouseup", cu),
					ws.kill(),
					Io(pt);
				for (var n = 0; n < Te.length; n += 3)
					$o(pt, Te[n], Te[n + 1]), $o(pt, Te[n], Te[n + 2]);
			}),
			(o.enable = function () {
				if (
					((xe = window),
					(Ue = document),
					(Cr = Ue.documentElement),
					(Je = Ue.body),
					Z &&
						((xs = Z.utils.toArray),
						(sn = Z.utils.clamp),
						(Fa = Z.core.context || Pr),
						(Ks = Z.core.suppressOverwrites || Pr),
						(dl = xe.history.scrollRestoration || "auto"),
						Z.core.globals("ScrollTrigger", o),
						Je))
				) {
					(No = 1),
						tt.register(Z),
						(o.isTouch = tt.isTouch),
						(Zr =
							tt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(
								navigator.userAgent
							)),
						yt(xe, "wheel", Qi),
						(df = [xe, Ue, Cr, Je]),
						Z.matchMedia
							? ((o.matchMedia = function (l) {
									var c = Z.matchMedia(),
										f;
									for (f in l) c.add(f, l[f]);
									return c;
							  }),
							  Z.addEventListener("matchMediaInit", function () {
									return yl();
							  }),
							  Z.addEventListener(
									"matchMediaRevert",
									function () {
										return Pf();
									}
							  ),
							  Z.addEventListener("matchMedia", function () {
									Ei(0, 1), Vi("matchMedia");
							  }),
							  Z.matchMedia(
									"(orientation: portrait)",
									function () {
										return ea(), ea;
									}
							  ))
							: console.warn("Requires GSAP 3.11.0 or later"),
						ea(),
						yt(Ue, "scroll", Qi);
					var t = Je.style,
						i = t.borderTopStyle,
						n = Z.core.Animation.prototype,
						s,
						a;
					for (
						n.revert ||
							Object.defineProperty(n, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							t.borderTopStyle = "solid",
							s = Yr(Je),
							ht.m = Math.round(s.top + ht.sc()) || 0,
							Ct.m = Math.round(s.left + Ct.sc()) || 0,
							i
								? (t.borderTopStyle = i)
								: t.removeProperty("border-top-style"),
							Ro = setInterval(du, 250),
							Z.delayedCall(0.5, function () {
								return (Fo = 0);
							}),
							yt(Ue, "touchcancel", Pr),
							yt(Je, "touchstart", Pr),
							Bo(yt, Ue, "pointerdown,touchstart,mousedown", uu),
							Bo(yt, Ue, "pointerup,touchend,mouseup", cu),
							Ra = Z.utils.checkPrefix("transform"),
							is.push(Ra),
							Ji = Ot(),
							ws = Z.delayedCall(0.2, Ei).pause(),
							en = [
								Ue,
								"visibilitychange",
								function () {
									var l = xe.innerWidth,
										c = xe.innerHeight;
									Ue.hidden
										? ((au = l), (lu = c))
										: (au !== l || lu !== c) && Xn();
								},
								Ue,
								"DOMContentLoaded",
								Ei,
								xe,
								"load",
								Ei,
								xe,
								"resize",
								Xn,
							],
							Io(yt),
							ye.forEach(function (l) {
								return l.enable(0, 1);
							}),
							a = 0;
						a < Te.length;
						a += 3
					)
						$o(pt, Te[a], Te[a + 1]), $o(pt, Te[a], Te[a + 2]);
				}
			}),
			(o.config = function (t) {
				"limitCallbacks" in t && (Qs = !!t.limitCallbacks);
				var i = t.syncInterval;
				(i && clearInterval(Ro)) || ((Ro = i) && setInterval(du, i)),
					"ignoreMobileResize" in t &&
						(_f = o.isTouch === 1 && t.ignoreMobileResize),
					"autoRefreshEvents" in t &&
						(Io(pt) || Io(yt, t.autoRefreshEvents || "none"),
						(gf =
							(t.autoRefreshEvents + "").indexOf("resize") ===
							-1));
			}),
			(o.scrollerProxy = function (t, i) {
				var n = Nt(t),
					s = Te.indexOf(n),
					a = Yi(n);
				~s && Te.splice(s, a ? 6 : 2),
					i &&
						(a
							? Lr.unshift(xe, i, Je, i, Cr, i)
							: Lr.unshift(n, i));
			}),
			(o.clearMatchMedia = function (t) {
				ye.forEach(function (i) {
					return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0);
				});
			}),
			(o.isInViewport = function (t, i, n) {
				var s = (vr(t) ? Nt(t) : t).getBoundingClientRect(),
					a = s[n ? Ri : Fi] * i || 0;
				return n
					? s.right - a > 0 && s.left + a < xe.innerWidth
					: s.bottom - a > 0 && s.top + a < xe.innerHeight;
			}),
			(o.positionInViewport = function (t, i, n) {
				vr(t) && (t = Nt(t));
				var s = t.getBoundingClientRect(),
					a = s[n ? Ri : Fi],
					l =
						i == null
							? a / 2
							: i in Ts
							? Ts[i] * a
							: ~i.indexOf("%")
							? (parseFloat(i) * a) / 100
							: parseFloat(i) || 0;
				return n
					? (s.left + l) / xe.innerWidth
					: (s.top + l) / xe.innerHeight;
			}),
			(o.killAll = function (t) {
				if (
					(ye.forEach(function (n) {
						return n.vars.id !== "ScrollSmoother" && n.kill();
					}),
					t !== !0)
				) {
					var i = qi.killAll || [];
					(qi = {}),
						i.forEach(function (n) {
							return n();
						});
				}
			}),
			o
		);
	})();
ge.version = "3.11.3";
ge.saveStyles = function (o) {
	return o
		? xs(o).forEach(function (e) {
				if (e && e.style) {
					var r = Ht.indexOf(e);
					r >= 0 && Ht.splice(r, 5),
						Ht.push(
							e,
							e.style.cssText,
							e.getBBox && e.getAttribute("transform"),
							Z.core.getCache(e),
							Fa()
						);
				}
		  })
		: Ht;
};
ge.revert = function (o, e) {
	return yl(!o, e);
};
ge.create = function (o, e) {
	return new ge(o, e);
};
ge.refresh = function (o) {
	return o ? Xn() : (Ji || ge.register()) && Ei(!0);
};
ge.update = Xi;
ge.clearScrollMemory = Mf;
ge.maxScroll = function (o, e) {
	return si(o, e ? Ct : ht);
};
ge.getScrollFunc = function (o, e) {
	return di(Nt(o), e ? Ct : ht);
};
ge.getById = function (o) {
	return Ia[o];
};
ge.getAll = function () {
	return ye.filter(function (o) {
		return o.vars.id !== "ScrollSmoother";
	});
};
ge.isScrolling = function () {
	return !!hr;
};
ge.snapDirectional = ml;
ge.addEventListener = function (o, e) {
	var r = qi[o] || (qi[o] = []);
	~r.indexOf(e) || r.push(e);
};
ge.removeEventListener = function (o, e) {
	var r = qi[o],
		t = r && r.indexOf(e);
	t >= 0 && r.splice(t, 1);
};
ge.batch = function (o, e) {
	var r = [],
		t = {},
		i = e.interval || 0.016,
		n = e.batchMax || 1e9,
		s = function (c, f) {
			var h = [],
				d = [],
				u = Z.delayedCall(i, function () {
					f(h, d), (h = []), (d = []);
				}).pause();
			return function (p) {
				h.length || u.restart(!0),
					h.push(p.trigger),
					d.push(p),
					n <= h.length && u.progress(1);
			};
		},
		a;
	for (a in e)
		t[a] =
			a.substr(0, 2) === "on" && Dt(e[a]) && a !== "onRefreshInit"
				? s(a, e[a])
				: e[a];
	return (
		Dt(n) &&
			((n = n()),
			yt(ge, "refresh", function () {
				return (n = e.batchMax());
			})),
		xs(o).forEach(function (l) {
			var c = {};
			for (a in t) c[a] = t[a];
			(c.trigger = l), r.push(ge.create(c));
		}),
		r
	);
};
var vu = function (e, r, t, i) {
		return (
			r > i ? e(i) : r < 0 && e(0),
			t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
		);
	},
	ra = function o(e, r) {
		r === !0
			? e.style.removeProperty("touch-action")
			: (e.style.touchAction =
					r === !0
						? "auto"
						: r
						? "pan-" + r + (tt.isTouch ? " pinch-zoom" : "")
						: "none"),
			e === Cr && o(Je, r);
	},
	bu = { auto: 1, scroll: 1 },
	kp = function (e) {
		var r = e.event,
			t = e.target,
			i = e.axis,
			n = (r.changedTouches ? r.changedTouches[0] : r).target,
			s = n._gsap || Z.core.getCache(n),
			a = Ot(),
			l;
		if (!s._isScrollT || a - s._isScrollT > 2e3) {
			for (; n && n.scrollHeight <= n.clientHeight; ) n = n.parentNode;
			(s._isScroll =
				n &&
				!Yi(n) &&
				n !== t &&
				(bu[(l = Dr(n)).overflowY] || bu[l.overflowX])),
				(s._isScrollT = a);
		}
		(s._isScroll || i === "x") &&
			(r.stopPropagation(), (r._gsapAllow = !0));
	},
	Ef = function (e, r, t, i) {
		return tt.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: r,
			onWheel: (i = i && kp),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return t && yt(Ue, tt.eventTypes[0], xu, !1, !0);
			},
			onDisable: function () {
				return pt(Ue, tt.eventTypes[0], xu, !0);
			},
		});
	},
	Pp = /(input|label|select|textarea)/i,
	wu,
	xu = function (e) {
		var r = Pp.test(e.target.tagName);
		(r || wu) && ((e._gsapAllow = !0), (wu = r));
	},
	Mp = function (e) {
		Jo(e) || (e = {}),
			(e.preventDefault = e.isNormalizer = e.allowClicks = !0),
			e.type || (e.type = "wheel,touch"),
			(e.debounce = !!e.debounce),
			(e.id = e.id || "normalizer");
		var r = e,
			t = r.normalizeScrollX,
			i = r.momentum,
			n = r.allowNestedScroll,
			s,
			a,
			l = Nt(e.target) || Cr,
			c = Z.core.globals().ScrollSmoother,
			f = c && c.get(),
			h =
				Zr &&
				((e.content && Nt(e.content)) ||
					(f && e.content !== !1 && !f.smooth() && f.content())),
			d = di(l, ht),
			u = di(l, Ct),
			p = 1,
			g =
				(tt.isTouch && xe.visualViewport
					? xe.visualViewport.scale * xe.visualViewport.width
					: xe.outerWidth) / xe.innerWidth,
			_ = 0,
			v = Dt(i)
				? function () {
						return i(s);
				  }
				: function () {
						return i || 2.8;
				  },
			y,
			m,
			w = Ef(l, e.type, !0, n),
			b = function () {
				return (m = !1);
			},
			T = Pr,
			k = Pr,
			S = function () {
				(a = si(l, ht)),
					(k = sn(Zr ? 1 : 0, a)),
					t && (T = sn(0, si(l, Ct))),
					(y = Ni);
			},
			C = function () {
				(h._gsap.y = qn(parseFloat(h._gsap.y) + d.offset) + "px"),
					(h.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(h._gsap.y) +
						", 0, 1)"),
					(d.offset = d.cacheID = 0);
			},
			$ = function () {
				if (m) {
					requestAnimationFrame(b);
					var V = qn(s.deltaY / 2),
						G = k(d.v - V);
					if (h && G !== d.v + d.offset) {
						d.offset = G - d.v;
						var ne = qn(
							(parseFloat(h && h._gsap.y) || 0) - d.offset
						);
						(h.style.transform =
							"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
							ne +
							", 0, 1)"),
							(h._gsap.y = ne + "px"),
							(d.cacheID = Te.cache),
							Xi();
					}
					return !0;
				}
				d.offset && C(), (m = !0);
			},
			B,
			M,
			E,
			F,
			Y = function () {
				S(),
					B.isActive() &&
						B.vars.scrollY > a &&
						(d() > a
							? B.progress(1) && d(a)
							: B.resetTo("scrollY", a));
			};
		return (
			h && Z.set(h, { y: "+=0" }),
			(e.ignoreCheck = function (R) {
				return (
					(Zr && R.type === "touchmove" && $()) ||
					(p > 1.05 && R.type !== "touchstart") ||
					s.isGesturing ||
					(R.touches && R.touches.length > 1)
				);
			}),
			(e.onPress = function () {
				var R = p;
				(p = qn(
					((xe.visualViewport && xe.visualViewport.scale) || 1) / g
				)),
					B.pause(),
					R !== p && ra(l, p > 1.01 ? !0 : t ? !1 : "x"),
					(M = u()),
					(E = d()),
					S(),
					(y = Ni);
			}),
			(e.onRelease = e.onGestureStart =
				function (R, V) {
					if ((d.offset && C(), !V)) F.restart(!0);
					else {
						Te.cache++;
						var G = v(),
							ne,
							O;
						t &&
							((ne = u()),
							(O = ne + (G * 0.05 * -R.velocityX) / 0.227),
							(G *= vu(u, ne, O, si(l, Ct))),
							(B.vars.scrollX = T(O))),
							(ne = d()),
							(O = ne + (G * 0.05 * -R.velocityY) / 0.227),
							(G *= vu(d, ne, O, si(l, ht))),
							(B.vars.scrollY = k(O)),
							B.invalidate().duration(G).play(0.01),
							((Zr && B.vars.scrollY >= a) || ne >= a - 1) &&
								Z.to({}, { onUpdate: Y, duration: G });
					}
				}),
			(e.onWheel = function () {
				B._ts && B.pause(), Ot() - _ > 1e3 && ((y = 0), (_ = Ot()));
			}),
			(e.onChange = function (R, V, G, ne, O) {
				if (
					(Ni !== y && S(),
					V &&
						t &&
						u(
							T(
								ne[2] === V
									? M + (R.startX - R.x)
									: u() + V - ne[1]
							)
						),
					G)
				) {
					d.offset && C();
					var W = O[2] === G,
						ee = W ? E + R.startY - R.y : d() + G - O[1],
						re = k(ee);
					W && ee !== re && (E += re - ee), d(re);
				}
				(G || V) && Xi();
			}),
			(e.onEnable = function () {
				ra(l, t ? !1 : "x"),
					ge.addEventListener("refresh", Y),
					yt(xe, "resize", Y),
					d.smooth &&
						((d.target.style.scrollBehavior = "auto"),
						(d.smooth = u.smooth = !1)),
					w.enable();
			}),
			(e.onDisable = function () {
				ra(l, !0),
					pt(xe, "resize", Y),
					ge.removeEventListener("refresh", Y),
					w.kill();
			}),
			(e.lockAxis = e.lockAxis !== !1),
			(s = new tt(e)),
			(s.iOS = Zr),
			Zr && !d() && d(1),
			Zr && Z.ticker.add(Pr),
			(F = s._dc),
			(B = Z.to(s, {
				ease: "power4",
				paused: !0,
				scrollX: t ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				onComplete: F.vars.onComplete,
			})),
			s
		);
	};
ge.sort = function (o) {
	return ye.sort(
		o ||
			function (e, r) {
				return (
					(e.vars.refreshPriority || 0) * -1e6 +
					e.start -
					(r.start + (r.vars.refreshPriority || 0) * -1e6)
				);
			}
	);
};
ge.observe = function (o) {
	return new tt(o);
};
ge.normalizeScroll = function (o) {
	if (typeof o > "u") return Wt;
	if (o === !0 && Wt) return Wt.enable();
	if (o === !1) return Wt && Wt.kill();
	var e = o instanceof tt ? o : Mp(o);
	return (
		Wt && Wt.target === e.target && Wt.kill(), Yi(e.target) && (Wt = e), e
	);
};
ge.core = {
	_getVelocityProp: La,
	_inputObserver: Ef,
	_scrollers: Te,
	_proxies: Lr,
	bridge: {
		ss: function () {
			hr || Vi("scrollStart"), (hr = Ot());
		},
		ref: function () {
			return xt;
		},
	},
};
bf() && Z.registerPlugin(ge);
var Mr,
	$a,
	ao,
	Of,
	tn,
	an,
	za,
	Cf,
	Df = function () {
		return Mr || (typeof window < "u" && (Mr = window.gsap));
	},
	Ya = {},
	Ep = function (e) {
		return Math.round(e * 1e4) / 1e4;
	},
	qa = function (e) {
		return Cf(e).id;
	},
	Gn = function (e) {
		return Ya[qa(typeof e == "string" ? ao(e)[0] : e)];
	},
	Tu = function (e) {
		var r = tn,
			t;
		if (e - za >= 0.05)
			for (za = e; r; )
				(t = r.g(r.t, r.p)),
					(t !== r.v1 || e - r.t1 > 0.2) &&
						((r.v2 = r.v1), (r.v1 = t), (r.t2 = r.t1), (r.t1 = e)),
					(r = r._next);
	},
	Op = { deg: 360, rad: Math.PI * 2 },
	ia = function () {
		(Mr = Df()),
			Mr &&
				((ao = Mr.utils.toArray),
				(Of = Mr.utils.getUnit),
				(Cf = Mr.core.getCache),
				(an = Mr.ticker),
				($a = 1));
	},
	Cp = function (e, r, t, i) {
		(this.t = e),
			(this.p = r),
			(this.g = e._gsap.get),
			(this.rCap = Op[t || Of(this.g(e, r))]),
			(this.v1 = this.v2 = 0),
			(this.t1 = this.t2 = an.time),
			i && ((this._next = i), (i._prev = this));
	},
	ko = (function () {
		function o(r, t) {
			$a || ia(),
				(this.target = ao(r)[0]),
				(Ya[qa(this.target)] = this),
				(this._props = {}),
				t && this.add(t);
		}
		o.register = function (t) {
			(Mr = t), ia();
		};
		var e = o.prototype;
		return (
			(e.get = function (t, i) {
				var n =
						this._props[t] ||
						console.warn("Not tracking " + t + " velocity."),
					s,
					a,
					l;
				return (
					(s = parseFloat(i ? n.v1 : n.g(n.t, n.p))),
					(a = s - parseFloat(n.v2)),
					(l = n.rCap),
					l &&
						((a = a % l),
						a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)),
					Ep(a / ((i ? n.t1 : an.time) - n.t2))
				);
			}),
			(e.getAll = function () {
				var t = {},
					i = this._props,
					n;
				for (n in i) t[n] = this.get(n);
				return t;
			}),
			(e.isTracking = function (t) {
				return t in this._props;
			}),
			(e.add = function (t, i) {
				t in this._props ||
					(tn || (an.add(Tu), (za = an.time)),
					(tn = this._props[t] = new Cp(this.target, t, i, tn)));
			}),
			(e.remove = function (t) {
				var i = this._props[t],
					n,
					s;
				i &&
					((n = i._prev),
					(s = i._next),
					n && (n._next = s),
					s ? (s._prev = n) : tn === i && (an.remove(Tu), (tn = 0)),
					delete this._props[t]);
			}),
			(e.kill = function (t) {
				for (var i in this._props) this.remove(i);
				t || delete Ya[qa(this.target)];
			}),
			(o.track = function (t, i, n) {
				$a || ia();
				for (
					var s = [],
						a = ao(t),
						l = i.split(","),
						c = (n || "").split(","),
						f = a.length,
						h,
						d;
					f--;

				) {
					for (h = Gn(a[f]) || new o(a[f]), d = l.length; d--; )
						h.add(l[d], c[d] || c[0]);
					s.push(h);
				}
				return s;
			}),
			(o.untrack = function (t, i) {
				var n = (i || "").split(",");
				ao(t).forEach(function (s) {
					var a = Gn(s);
					a &&
						(n.length
							? n.forEach(function (l) {
									return a.remove(l);
							  })
							: a.kill(1));
				});
			}),
			(o.isTracking = function (t, i) {
				var n = Gn(t);
				return n && n.isTracking(i);
			}),
			(o.getVelocity = function (t, i) {
				var n = Gn(t);
				return !n || !n.isTracking(i)
					? console.warn("Not tracking velocity of " + i)
					: n.get(i);
			}),
			o
		);
	})();
ko.getByTarget = Gn;
Df() && Mr.registerPlugin(ko);
var ct,
	Af,
	Su,
	Lf,
	Va,
	lo,
	Rf,
	Ff,
	Nf,
	vl,
	If,
	uo,
	Xa,
	Bf,
	Ss = ko.getByTarget,
	$f = function () {
		return (
			ct ||
			(typeof window < "u" &&
				(ct = window.gsap) &&
				ct.registerPlugin &&
				ct)
		);
	},
	Dp = function (e) {
		return typeof e == "string";
	},
	wo = function (e) {
		return typeof e == "number";
	},
	ci = function (e) {
		return typeof e == "object";
	},
	Ga = function (e) {
		return typeof e == "function";
	},
	Ap = 1,
	zf = Array.isArray,
	Lp = function (e) {
		return e;
	},
	Ii = 1e10,
	ku = 1 / Ii,
	Yf = 0.05,
	Rp = function (e) {
		return Math.round(e * 1e4) / 1e4;
	},
	Fp = function (e, r, t) {
		for (var i in r) !(i in e) && i !== t && (e[i] = r[i]);
		return e;
	},
	Np = function o(e) {
		var r = {},
			t,
			i;
		for (t in e) r[t] = ci((i = e[t])) && !zf(i) ? o(i) : i;
		return r;
	},
	Pu = function (e, r, t, i, n) {
		var s = r.length,
			a = 0,
			l = Ii,
			c,
			f,
			h,
			d;
		if (ci(e)) {
			for (; s--; ) {
				(c = r[s]), (f = 0);
				for (h in e) (d = c[h] - e[h]), (f += d * d);
				f < l && ((a = s), (l = f));
			}
			if ((n || Ii) < Ii && n < Math.sqrt(l)) return e;
		} else
			for (; s--; )
				(c = r[s]),
					(f = c - e),
					f < 0 && (f = -f),
					f < l && c >= i && c <= t && ((a = s), (l = f));
		return r[a];
	},
	qf = function (e, r, t, i, n, s, a) {
		if (e.end === "auto") return e;
		var l = e.end,
			c,
			f;
		if (((t = isNaN(t) ? Ii : t), (i = isNaN(i) ? -Ii : i), ci(r))) {
			if (
				((c = r.calculated
					? r
					: (Ga(l) ? l(r, a) : Pu(r, l, t, i, s)) || r),
				!r.calculated)
			) {
				for (f in c) r[f] = c[f];
				r.calculated = !0;
			}
			c = c[n];
		} else c = Ga(l) ? l(r, a) : zf(l) ? Pu(r, l, t, i, s) : parseFloat(l);
		return (
			c > t ? (c = t) : c < i && (c = i),
			{ max: c, min: c, unitFactor: e.unitFactor }
		);
	},
	ks = function (e, r, t) {
		return isNaN(e[r]) ? t : +e[r];
	},
	bl = function (e, r) {
		return (r * Yf * e) / vl;
	},
	Mu = function (e, r, t) {
		return Math.abs(((r - e) * vl) / t / Yf);
	},
	Vf = {
		resistance: 1,
		checkpoint: 1,
		preventOvershoot: 1,
		linkedProps: 1,
		radius: 1,
		duration: 1,
	},
	Xf = function (e, r, t, i) {
		if (r.linkedProps) {
			var n = r.linkedProps.split(","),
				s = {},
				a,
				l,
				c,
				f,
				h,
				d;
			for (a = 0; a < n.length; a++)
				(l = n[a]),
					(c = r[l]),
					c &&
						(wo(c.velocity)
							? (f = c.velocity)
							: ((h = h || Ss(e)),
							  (f = h && h.isTracking(l) ? h.get(l) : 0)),
						(d = Math.abs(f / ks(c, "resistance", i))),
						(s[l] = parseFloat(t(e, l)) + bl(f, d)));
			return s;
		}
	},
	Ip = function (e, r, t, i, n, s) {
		if (
			(t === void 0 && (t = 10),
			i === void 0 && (i = 0.2),
			n === void 0 && (n = 1),
			s === void 0 && (s = 0),
			Dp(e) && (e = Lf(e)[0]),
			!e)
		)
			return 0;
		var a = 0,
			l = Ii,
			c = r.inertia || r,
			f = Nf(e).get,
			h = ks(c, "resistance", lo.resistance),
			d,
			u,
			p,
			g,
			_,
			v,
			y,
			m,
			w,
			b;
		b = Xf(e, c, f, h);
		for (d in c)
			Vf[d] ||
				((u = c[d]),
				ci(u) ||
					((m = m || Ss(e)),
					m && m.isTracking(d)
						? (u = wo(u) ? { velocity: u } : { velocity: m.get(d) })
						: ((g = +u || 0), (p = Math.abs(g / h)))),
				ci(u) &&
					(wo(u.velocity)
						? (g = u.velocity)
						: ((m = m || Ss(e)),
						  (g = m && m.isTracking(d) ? m.get(d) : 0)),
					(p = If(i, t, Math.abs(g / ks(u, "resistance", h)))),
					(_ = parseFloat(f(e, d)) || 0),
					(v = _ + bl(g, p)),
					"end" in u &&
						((u = qf(
							u,
							b && d in b ? b : v,
							u.max,
							u.min,
							d,
							c.radius,
							g
						)),
						s &&
							(uo === r && (uo = c = Np(r)),
							(c[d] = Fp(u, c[d], "end")))),
					"max" in u && v > +u.max + ku
						? ((w = u.unitFactor || lo.unitFactors[d] || 1),
						  (y =
								(_ > u.max && u.min !== u.max) ||
								(g * w > -15 && g * w < 45)
									? i + (t - i) * 0.1
									: Mu(_, u.max, g)),
						  y + n < l && (l = y + n))
						: "min" in u &&
						  v < +u.min - ku &&
						  ((w = u.unitFactor || lo.unitFactors[d] || 1),
						  (y =
								(_ < u.min && u.min !== u.max) ||
								(g * w > -45 && g * w < 15)
									? i + (t - i) * 0.1
									: Mu(_, u.min, g)),
						  y + n < l && (l = y + n)),
					y > a && (a = y)),
				p > a && (a = p));
		return a > l && (a = l), a > t ? t : a < i ? i : a;
	},
	Eu = function () {
		(ct = $f()),
			ct &&
				((Su = ct.parseEase),
				(Lf = ct.utils.toArray),
				(Rf = ct.utils.getUnit),
				(Nf = ct.core.getCache),
				(If = ct.utils.clamp),
				(Xa = ct.core.getStyleSaver),
				(Bf = ct.core.reverting || function () {}),
				(Va = Su("power3")),
				(vl = Va(0.05)),
				(Ff = ct.core.PropTween),
				ct.config({
					resistance: 100,
					unitFactors: {
						time: 1e3,
						totalTime: 1e3,
						progress: 1e3,
						totalProgress: 1e3,
					},
				}),
				(lo = ct.config()),
				ct.registerPlugin(ko),
				(Af = 1));
	},
	wl = {
		version: "3.11.3",
		name: "inertia",
		register: function (e) {
			(ct = e), Eu();
		},
		init: function (e, r, t, i, n) {
			Af || Eu();
			var s = Ss(e);
			if (r === "auto") {
				if (!s) {
					console.warn(
						"No inertia tracking on " +
							e +
							". InertiaPlugin.track(target) first."
					);
					return;
				}
				r = s.getAll();
			}
			(this.styles = Xa && typeof e.style == "object" && Xa(e)),
				(this.target = e),
				(this.tween = t),
				(uo = r);
			var a = e._gsap,
				l = a.get,
				c = r.duration,
				f = ci(c),
				h = r.preventOvershoot || (f && c.overshoot === 0),
				d = ks(r, "resistance", lo.resistance),
				u = wo(c)
					? c
					: Ip(
							e,
							r,
							(f && c.max) || 10,
							(f && c.min) || 0.2,
							f && "overshoot" in c ? +c.overshoot : h ? 0 : 1,
							!0
					  ),
				p,
				g,
				_,
				v,
				y,
				m,
				w,
				b,
				T;
			(r = uo), (uo = 0), (T = Xf(e, r, l, d));
			for (p in r)
				Vf[p] ||
					((g = r[p]),
					Ga(g) && (g = g(i, e, n)),
					wo(g)
						? (y = g)
						: ci(g) && !isNaN(g.velocity)
						? (y = +g.velocity)
						: s && s.isTracking(p)
						? (y = s.get(p))
						: console.warn(
								"ERROR: No velocity was defined for " +
									e +
									" property: " +
									p
						  ),
					(m = bl(y, u)),
					(b = 0),
					(_ = l(e, p)),
					(v = Rf(_)),
					(_ = parseFloat(_)),
					ci(g) &&
						((w = _ + m),
						"end" in g &&
							(g = qf(
								g,
								T && p in T ? T : w,
								g.max,
								g.min,
								p,
								r.radius,
								y
							)),
						"max" in g && +g.max < w
							? h || g.preventOvershoot
								? (m = g.max - _)
								: (b = g.max - _ - m)
							: "min" in g &&
							  +g.min > w &&
							  (h || g.preventOvershoot
									? (m = g.min - _)
									: (b = g.min - _ - m))),
					this._props.push(p),
					this.styles && this.styles.save(p),
					(this._pt = new Ff(
						this._pt,
						e,
						p,
						_,
						0,
						Lp,
						0,
						a.set(e, p, this)
					)),
					(this._pt.u = v || 0),
					(this._pt.c1 = m),
					(this._pt.c2 = b));
			return t.duration(u), Ap;
		},
		render: function (e, r) {
			var t = r._pt;
			if (((e = Va(r.tween._time / r.tween._dur)), e || !Bf()))
				for (; t; )
					t.set(
						t.t,
						t.p,
						Rp(t.s + t.c1 * e + t.c2 * e * e) + t.u,
						t.d,
						e
					),
						(t = t._next);
			else r.styles.revert();
		},
	};
"track,untrack,isTracking,getVelocity,getByTarget"
	.split(",")
	.forEach(function (o) {
		return (wl[o] = ko[o]);
	});
$f() && ct.registerPlugin(wl);
function Ou(o, e) {
	for (var r = 0; r < e.length; r++) {
		var t = e[r];
		(t.enumerable = t.enumerable || !1),
			(t.configurable = !0),
			"value" in t && (t.writable = !0),
			Object.defineProperty(o, t.key, t);
	}
}
function Bp(o, e, r) {
	return e && Ou(o.prototype, e), r && Ou(o, r), o;
}
var Ee,
	Vo,
	Rt,
	ln,
	Wn,
	kr,
	Ti,
	Cu,
	ve,
	Er,
	Xo,
	Du,
	Au,
	Lu,
	Ru,
	Gf = function () {
		return typeof window < "u";
	},
	Wf = function () {
		return Ee || (Gf() && (Ee = window.gsap) && Ee.registerPlugin && Ee);
	},
	$p = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	zp = function (e, r) {
		var t = e.parentNode || Wn,
			i = e.getBoundingClientRect(),
			n = t.getBoundingClientRect(),
			s = n.top - i.top,
			a = n.bottom - i.bottom,
			l = (Math.abs(s) > Math.abs(a) ? s : a) / (1 - r),
			c = -l * r,
			f,
			h;
		return (
			l > 0 &&
				((f = n.height / (Rt.innerHeight + n.height)),
				(h =
					f === 0.5
						? n.height * 2
						: Math.min(n.height, (-l * f) / (2 * f - 1)) *
						  2 *
						  (r || 1)),
				(c += r ? -h * r : -h / 2),
				(l += h)),
			{ change: l, offset: c }
		);
	},
	Yp = function (e) {
		var r = ln.querySelector(".ScrollSmoother-wrapper");
		return (
			r ||
				((r = ln.createElement("div")),
				r.classList.add("ScrollSmoother-wrapper"),
				e.parentNode.insertBefore(r, e),
				r.appendChild(e)),
			r
		);
	},
	Ur = (function () {
		function o(e) {
			var r = this;
			Vo ||
				o.register(Ee) ||
				console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
				(e = this.vars = e || {}),
				Er && Er.kill(),
				(Er = this),
				Lu(this);
			var t = e,
				i = t.smoothTouch,
				n = t.onUpdate,
				s = t.onStop,
				a = t.smooth,
				l = t.onFocusIn,
				c = t.normalizeScroll,
				f,
				h,
				d,
				u,
				p,
				g,
				_,
				v,
				y,
				m,
				w,
				b,
				T,
				k = this,
				S =
					typeof ResizeObserver < "u" &&
					e.autoResize !== !1 &&
					new ResizeObserver(function () {
						return ve.isRefreshing || Ru.restart(!0);
					}),
				C = e.effectsPrefix || "",
				$ = ve.getScrollFunc(Rt),
				B =
					ve.isTouch === 1
						? i === !0
							? 0.8
							: parseFloat(i) || 0
						: a === 0 || a === !1
						? 0
						: parseFloat(a) || 0.8,
				M = 0,
				E = 0,
				F = 1,
				Y = Du(0),
				R = function () {
					return Y.update(-M);
				},
				V = { y: 0 },
				G = function () {
					return (f.style.overflow = "visible");
				},
				ne,
				O = function (L) {
					L.update();
					var j = L.getTween();
					j && (j.pause(), (j._time = j._dur), (j._tTime = j._tDur)),
						(ne = !1),
						L.animation.progress(L.progress, !0);
				},
				W = function (L, j) {
					((L !== M && !m) || j) &&
						(B &&
							((f.style.transform =
								"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
								L +
								", 0, 1)"),
							(f._gsap.y = L + "px")),
						(E = L - M),
						(M = L),
						ve.isUpdating || ve.update());
				},
				ee = function (L) {
					return arguments.length
						? (L < 0 && (L = 0),
						  (V.y = -L),
						  (ne = !0),
						  m ? (M = -L) : W(-L),
						  ve.isRefreshing ? u.update() : $(L),
						  this)
						: -M;
				},
				re,
				le = function (L) {
					(h.scrollTop = 0),
						!(
							(L.target.contains && L.target.contains(h)) ||
							(l && l(r, L) === !1)
						) &&
							(ve.isInViewport(L.target) ||
								L.target === re ||
								r.scrollTo(L.target, !1, "center center"),
							(re = L.target));
				},
				De = function (L, j) {
					var D, Q, ie, Ne;
					p.forEach(function (he) {
						(D = he.pins),
							(Ne = he.markers),
							L.forEach(function (oe) {
								he.trigger &&
									oe.trigger &&
									he !== oe &&
									(oe.trigger === he.trigger ||
										oe.pinnedContainer === he.trigger ||
										he.trigger.contains(oe.trigger)) &&
									((Q = oe.start),
									(ie =
										(Q - he.start - he.offset) / he.ratio -
										(Q - he.start)),
									D.forEach(function (Ce) {
										return (ie -=
											Ce.distance / he.ratio -
											Ce.distance);
									}),
									oe.setPositions(Q + ie, oe.end + ie),
									oe.markerStart &&
										Ne.push(
											Ee.quickSetter(
												[oe.markerStart, oe.markerEnd],
												"y",
												"px"
											)
										),
									oe.pin &&
										oe.end > 0 &&
										((ie = oe.end - oe.start),
										D.push({
											start: oe.start,
											end: oe.end,
											distance: ie,
											trig: oe,
										}),
										he.setPositions(he.start, he.end + ie),
										he.vars.onRefresh(he)));
							});
					});
				},
				fe = function () {
					G(),
						requestAnimationFrame(G),
						p &&
							(p.forEach(function (L) {
								var j = L.start,
									D = L.auto
										? Math.min(
												ve.maxScroll(L.scroller),
												L.end
										  )
										: j + (L.end - j) / L.ratio,
									Q = (D - L.end) / 2;
								(j -= Q),
									(D -= Q),
									(L.offset = Q || 1e-4),
									(L.pins.length = 0),
									L.setPositions(
										Math.min(j, D),
										Math.max(j, D)
									),
									L.vars.onRefresh(L);
							}),
							De(ve.sort())),
						Y.reset();
				},
				Ae = function () {
					return ve.addEventListener("refresh", fe);
				},
				_e = function () {
					return (
						p &&
						p.forEach(function (L) {
							return L.vars.onRefresh(L);
						})
					);
				},
				Xt = function () {
					return (
						p &&
							p.forEach(function (L) {
								return L.vars.onRefreshInit(L);
							}),
						_e
					);
				},
				de = function (L, j, D, Q) {
					return function () {
						var ie = typeof j == "function" ? j(D, Q) : j;
						return (
							ie ||
								ie === 0 ||
								(ie =
									Q.getAttribute("data-" + C + L) ||
									(L === "speed" ? 1 : 0)),
							Q.setAttribute("data-" + C + L, ie),
							ie === "auto" ? ie : parseFloat(ie)
						);
					};
				},
				We = function (L, j, D, Q) {
					var ie = de("speed", j, Q, L),
						Ne = de("lag", D, Q, L),
						he = Ee.getProperty(L, "y"),
						oe = L._gsap,
						Ce,
						Ie,
						st,
						ce,
						qe,
						Xe,
						Sr = function () {
							(j = ie()),
								(D = Ne()),
								(Ce = parseFloat(j) || 1),
								(st = j === "auto"),
								(qe = st ? 0 : 0.5),
								ce && ce.kill(),
								(ce =
									D &&
									Ee.to(L, {
										ease: Xo,
										overwrite: !1,
										y: "+=0",
										duration: D,
									})),
								Ie && ((Ie.ratio = Ce), (Ie.autoSpeed = st));
						},
						He = function () {
							(oe.y = he + "px"), oe.renderTransform(1), Sr();
						},
						_t = [],
						pr = [],
						dt = 0,
						Gt = function (te) {
							if (st) {
								He();
								var je = zp(
									L,
									Cu(0, 1, -te.start / (te.end - te.start))
								);
								(dt = je.change), (Xe = je.offset);
							} else
								(dt = (te.end - te.start) * (1 - Ce)), (Xe = 0);
							_t.forEach(function (Ve) {
								return (dt -= Ve.distance * (1 - Ce));
							}),
								te.vars.onUpdate(te),
								ce && ce.progress(1);
						};
					return (
						Sr(),
						(Ce !== 1 || st || ce) &&
							((Ie = ve.create({
								trigger: st ? L.parentNode : L,
								scroller: h,
								scrub: !0,
								refreshPriority: -999,
								onRefreshInit: He,
								onRefresh: Gt,
								onKill: function (te) {
									var je = p.indexOf(te);
									je >= 0 && p.splice(je, 1), He();
								},
								onUpdate: function (te) {
									var je = he + dt * (te.progress - qe),
										Ve = _t.length,
										Ge = 0,
										Be,
										Le,
										wt;
									if (te.offset) {
										if (Ve) {
											for (Le = -M, wt = te.end; Ve--; ) {
												if (
													((Be = _t[Ve]),
													Be.trig.isActive ||
														(Le >= Be.start &&
															Le <= Be.end))
												) {
													ce &&
														((Be.trig.progress +=
															Be.trig.direction <
															0
																? 0.001
																: -0.001),
														Be.trig.update(0, 0, 1),
														ce.resetTo(
															"y",
															parseFloat(oe.y),
															-E,
															!0
														),
														F && ce.progress(1));
													return;
												}
												Le > Be.end &&
													(Ge += Be.distance),
													(wt -= Be.distance);
											}
											je =
												he +
												Ge +
												dt *
													((Ee.utils.clamp(
														te.start,
														te.end,
														Le
													) -
														te.start -
														Ge) /
														(wt - te.start) -
														qe);
										}
										(je = $p(je + Xe)),
											pr.length &&
												!st &&
												pr.forEach(function (gr) {
													return gr(je - Ge);
												}),
											ce
												? (ce.resetTo("y", je, -E, !0),
												  F && ce.progress(1))
												: ((oe.y = je + "px"),
												  oe.renderTransform(1));
									}
								},
							})),
							Gt(Ie),
							(Ee.core.getCache(Ie.trigger).stRevert = Xt),
							(Ie.startY = he),
							(Ie.pins = _t),
							(Ie.markers = pr),
							(Ie.ratio = Ce),
							(Ie.autoSpeed = st),
							(L.style.willChange = "transform")),
						Ie
					);
				};
			Ae(),
				ve.addEventListener("killAll", Ae),
				Ee.delayedCall(0.5, function () {
					return (F = 0);
				}),
				(this.scrollTop = ee),
				(this.scrollTo = function (q, L, j) {
					var D = Ee.utils.clamp(
						0,
						ve.maxScroll(Rt),
						isNaN(q) ? r.offset(q, j) : +q
					);
					L
						? m
							? Ee.to(r, {
									duration: B,
									scrollTop: D,
									overwrite: "auto",
									ease: Xo,
							  })
							: $(D)
						: ee(D);
				}),
				(this.offset = function (q, L) {
					q = Ti(q)[0];
					var j = q.style.cssText,
						D = ve.create({ trigger: q, start: L || "top top" }),
						Q;
					return (
						p && De([D]),
						(Q = D.start),
						D.kill(!1),
						(q.style.cssText = j),
						(Ee.core.getCache(q).uncache = 1),
						Q
					);
				});
			function ue() {
				return (
					(d = f.clientHeight),
					(f.style.overflow = "visible"),
					(kr.style.height = d + "px"),
					d - Rt.innerHeight
				);
			}
			(this.content = function (q) {
				if (arguments.length) {
					var L =
						Ti(q || "#smooth-content")[0] ||
						console.warn(
							"ScrollSmoother needs a valid content element."
						) ||
						kr.children[0];
					return (
						L !== f &&
							((f = L),
							(y = f.getAttribute("style") || ""),
							S && S.observe(f),
							Ee.set(f, {
								overflow: "visible",
								width: "100%",
								boxSizing: "border-box",
								y: "+=0",
							}),
							B || Ee.set(f, { clearProps: "transform" })),
						this
					);
				}
				return f;
			}),
				(this.wrapper = function (q) {
					return arguments.length
						? ((h = Ti(q || "#smooth-wrapper")[0] || Yp(f)),
						  (v = h.getAttribute("style") || ""),
						  ue(),
						  Ee.set(
								h,
								B
									? {
											overflow: "hidden",
											position: "fixed",
											height: "100%",
											width: "100%",
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
									  }
									: {
											overflow: "visible",
											position: "relative",
											width: "100%",
											height: "auto",
											top: "auto",
											bottom: "auto",
											left: "auto",
											right: "auto",
									  }
						  ),
						  this)
						: h;
				}),
				(this.effects = function (q, L) {
					var j;
					if ((p || (p = []), !q)) return p.slice(0);
					(q = Ti(q)),
						q.forEach(function (Ce) {
							for (var Ie = p.length; Ie--; )
								p[Ie].trigger === Ce && p[Ie].kill();
						}),
						(L = L || {});
					var D = L,
						Q = D.speed,
						ie = D.lag,
						Ne = [],
						he,
						oe;
					for (he = 0; he < q.length; he++)
						(oe = We(q[he], Q, ie, he)), oe && Ne.push(oe);
					return (j = p).push.apply(j, Ne), Ne;
				}),
				(this.sections = function (q, L) {
					var j;
					if ((g || (g = []), !q)) return g.slice(0);
					var D = Ti(q).map(function (Q) {
						return ve.create({
							trigger: Q,
							start: "top 120%",
							end: "bottom -20%",
							onToggle: function (Ne) {
								(Q.style.opacity = Ne.isActive ? "1" : "0"),
									(Q.style.pointerEvents = Ne.isActive
										? "all"
										: "none");
							},
						});
					});
					return (
						L && L.add
							? (j = g).push.apply(j, D)
							: (g = D.slice(0)),
						D
					);
				}),
				this.content(e.content),
				this.wrapper(e.wrapper),
				(this.render = function (q) {
					return W(q || q === 0 ? q : M);
				}),
				(this.getVelocity = function () {
					return Y.getVelocity(-M);
				}),
				ve.scrollerProxy(h, {
					scrollTop: ee,
					scrollHeight: function () {
						return ue() && kr.scrollHeight;
					},
					fixedMarkers: e.fixedMarkers !== !1 && !!B,
					content: f,
					getBoundingClientRect: function () {
						return {
							top: 0,
							left: 0,
							width: Rt.innerWidth,
							height: Rt.innerHeight,
						};
					},
				}),
				ve.defaults({ scroller: h });
			var Ye = ve.getAll().filter(function (q) {
				return q.scroller === Rt || q.scroller === h;
			});
			Ye.forEach(function (q) {
				return q.revert(!0);
			}),
				(u = ve.create({
					animation: Ee.fromTo(
						V,
						{ y: 0 },
						{
							y: function () {
								return -ue();
							},
							immediateRender: !1,
							ease: "none",
							data: "ScrollSmoother",
							duration: 100,
							onUpdate: function () {
								if (this._dur) {
									var L = ne;
									L && (O(u), (V.y = M)),
										W(V.y, L),
										R(),
										n && !m && n(k);
								}
							},
						}
					),
					onRefreshInit: function (L) {
						if (p) {
							var j = ve.getAll().filter(function (Q) {
								return !!Q.pin;
							});
							p.forEach(function (Q) {
								Q.vars.pinnedContainer ||
									j.forEach(function (ie) {
										if (ie.pin.contains(Q.trigger)) {
											var Ne = Q.vars;
											(Ne.pinnedContainer = ie.pin),
												(Q.vars = null),
												Q.init(Ne, Q.animation);
										}
									});
							});
						}
						var D = L.getTween();
						(T = D && D._end > D._dp._time),
							(b = M),
							(V.y = 0),
							B &&
								((h.style.pointerEvents = "none"),
								(h.scrollTop = 0),
								setTimeout(function () {
									return h.style.removeProperty(
										"pointer-events"
									);
								}, 50));
					},
					onRefresh: function (L) {
						L.animation.invalidate(),
							L.setPositions(L.start, ue()),
							T || O(L),
							(V.y = -$()),
							W(V.y),
							F ||
								L.animation.progress(
									Ee.utils.clamp(0, 1, b / -L.end)
								),
							T && ((L.progress -= 0.001), L.update());
					},
					id: "ScrollSmoother",
					scroller: Rt,
					invalidateOnRefresh: !0,
					start: 0,
					refreshPriority: -9999,
					end: ue,
					onScrubComplete: function () {
						Y.reset(), s && s(r);
					},
					scrub: B || !0,
				})),
				(this.smooth = function (q) {
					return (
						arguments.length && (B = q || 0),
						arguments.length
							? u.scrubDuration(q)
							: u.getTween()
							? u.getTween().duration()
							: 0
					);
				}),
				u.getTween() && (u.getTween().vars.ease = e.ease || Xo),
				(this.scrollTrigger = u),
				e.effects &&
					this.effects(
						e.effects === !0
							? "[data-" + C + "speed], [data-" + C + "lag]"
							: e.effects,
						{}
					),
				e.sections &&
					this.sections(
						e.sections === !0 ? "[data-section]" : e.sections
					),
				Ye.forEach(function (q) {
					(q.vars.scroller = h), q.init(q.vars, q.animation);
				}),
				(this.paused = function (q, L) {
					return arguments.length
						? (!!m !== q &&
								(q
									? (u.getTween() && u.getTween().pause(),
									  $(-M),
									  Y.reset(),
									  (w = ve.normalizeScroll()),
									  w && w.disable(),
									  (m = ve.observe({
											preventDefault: !0,
											type: "wheel,touch,scroll",
											debounce: !1,
											allowClicks: !0,
											onChangeY: function () {
												return ee(-M);
											},
									  })),
									  (m.nested = Au(
											Wn,
											"wheel,touch,scroll",
											!0,
											L !== !1
									  )))
									: (m.nested.kill(),
									  m.kill(),
									  (m = 0),
									  w && w.enable(),
									  (u.progress =
											(-M - u.start) / (u.end - u.start)),
									  O(u))),
						  this)
						: !!m;
				}),
				(this.kill = this.revert =
					function () {
						r.paused(!1), O(u), u.kill();
						for (
							var q = (p || []).concat(g || []), L = q.length;
							L--;

						)
							q[L].kill();
						ve.scrollerProxy(h),
							ve.removeEventListener("killAll", Ae),
							ve.removeEventListener("refresh", fe),
							(h.style.cssText = v),
							(f.style.cssText = y);
						var j = ve.defaults({});
						j && j.scroller === h && ve.defaults({ scroller: Rt }),
							r.normalizer && ve.normalizeScroll(!1),
							clearInterval(_),
							(Er = null),
							S && S.disconnect(),
							kr.style.removeProperty("height"),
							Rt.removeEventListener("focusin", le);
					}),
				(this.refresh = function (q, L) {
					return u.refresh(q, L);
				}),
				c &&
					(this.normalizer = ve.normalizeScroll(
						c === !0 ? { debounce: !0, content: !B && f } : c
					)),
				ve.config(e),
				"overscrollBehavior" in Rt.getComputedStyle(kr) &&
					Ee.set([kr, Wn], { overscrollBehavior: "none" }),
				"scrollBehavior" in Rt.getComputedStyle(kr) &&
					Ee.set([kr, Wn], { scrollBehavior: "auto" }),
				Rt.addEventListener("focusin", le),
				(_ = setInterval(R, 250)),
				ln.readyState === "loading" ||
					requestAnimationFrame(function () {
						return ve.refresh();
					});
		}
		return (
			(o.register = function (r) {
				return (
					Vo ||
						((Ee = r || Wf()),
						Gf() &&
							window.document &&
							((Rt = window),
							(ln = document),
							(Wn = ln.documentElement),
							(kr = ln.body)),
						Ee &&
							((Ti = Ee.utils.toArray),
							(Cu = Ee.utils.clamp),
							(Xo = Ee.parseEase("expo")),
							(Lu = Ee.core.context || function () {}),
							(Ru = Ee.delayedCall(0.2, function () {
								return ve.isRefreshing || (Er && Er.refresh());
							}).pause()),
							(ve = Ee.core.globals().ScrollTrigger),
							Ee.core.globals("ScrollSmoother", o),
							kr &&
								ve &&
								((Du = ve.core._getVelocityProp),
								(Au = ve.core._inputObserver),
								(o.refresh = ve.refresh),
								(Vo = 1)))),
					Vo
				);
			}),
			Bp(o, [
				{
					key: "progress",
					get: function () {
						return this.scrollTrigger
							? this.scrollTrigger.animation._time / 100
							: 0;
					},
				},
			]),
			o
		);
	})();
Ur.version = "3.11.3";
Ur.create = function (o) {
	return Er && o && Er.content() === Ti(o.content)[0] ? Er : new Ur(o);
};
Ur.get = function () {
	return Er;
};
Wf() && Ee.registerPlugin(Ur);
class At {
	constructor(e) {
		(this.block = e), this.init(), this.initEvents();
	}
	init() {}
	initEvents() {}
}
const xl = (o = () => {}) => {
	J.matchMedia().add("(prefers-reduced-motion: no-preference)", o);
};
class qp extends At {
	init() {
		const e = {
			emailForm: document.querySelector(".footer-global__form"),
			emailInput: document.querySelector("#email"),
			emailFeedback: document.querySelector(".js-email-feedback"),
		};
		this.DOM = e;
	}
	initEvents() {
		this.DOM.emailForm.addEventListener("submit", async (e) => {
			await this.submitForm(e);
		});
	}
	async submitForm(e) {
		e.preventDefault();
		const t = `/community/index.php?app=gspages&module=ajax&controller=subscribe&email=${this.DOM.emailInput.value}&csrfKey=${window.csrfKey}`;
		try {
			(await fetch(t, { method: "POST" })).ok
				? ((this.DOM.emailFeedback.style.color = "#0ae448"),
				  (this.DOM.emailFeedback.innerText = "Success - Chat soon!"))
				: ((this.DOM.emailFeedback.style.color = "#e40a40"),
				  (this.DOM.emailFeedback.innerText = "Subscription failed"));
		} catch (i) {
			console.error("Network error:", i);
		}
	}
}
class Vp extends At {
	init() {
		(this.DOM = { columns: this.block.querySelectorAll(".brands__item") }),
			(this.column = {
				one: this.DOM.columns[0].innerHTML,
				two: this.DOM.columns[1].innerHTML,
				three: this.DOM.columns[2].innerHTML,
				four: this.DOM.columns[3].innerHTML,
				five: this.DOM.columns[4].innerHTML,
				six: this.DOM.columns[5].innerHTML,
			}),
			this.createTimeline();
	}
	createTimeline() {
		J.matchMedia().add(
			{
				isMobile: "(max-width: 768px)",
				isDesktop: "(min-width: 769px ) and (max-width: 1240px)",
				isLargeDesktop: "(min-width: 1241px)",
			},
			(r) => {
				let t;
				r.conditions.isMobile
					? ((t = 3),
					  (this.DOM.columns[0].innerHTML = [
							this.column.one + this.column.two,
					  ]),
					  (this.DOM.columns[1].innerHTML = [
							this.column.three + this.column.four,
					  ]),
					  (this.DOM.columns[2].innerHTML = [
							this.column.five + this.column.six,
					  ]))
					: r.conditions.isDesktop
					? ((t = 5),
					  (this.DOM.columns[0].innerHTML = [
							this.column.one + this.column.two,
					  ]),
					  (this.DOM.columns[1].innerHTML = this.column.three),
					  (this.DOM.columns[2].innerHTML = this.column.four),
					  (this.DOM.columns[3].innerHTML = this.column.five),
					  (this.DOM.columns[4].innerHTML = this.column.six))
					: r.conditions.isLargeDesktop &&
					  ((t = 6),
					  (this.DOM.columns[0].innerHTML = this.column.one),
					  (this.DOM.columns[1].innerHTML = this.column.two),
					  (this.DOM.columns[2].innerHTML = this.column.three),
					  (this.DOM.columns[3].innerHTML = this.column.four),
					  (this.DOM.columns[4].innerHTML = this.column.five),
					  (this.DOM.columns[5].innerHTML = this.column.six)),
					xl(() => {
						for (let i = 0; i < t; i++) {
							const s =
									this.DOM.columns[i].querySelectorAll("svg"),
								a = J.utils.random(["-200%", "200%"]),
								l = i % 2 === 0,
								c = J.timeline({
									repeat: -1,
									delay: -t + i * 0.2,
								});
							s.forEach((f) => {
								c.to(f, {
									keyframes: [
										{
											y: l ? a : 0,
											x: l ? 0 : a,
											duration: 0.3,
										},
										{
											autoAlpha: 1,
											x: 0,
											y: 0,
											duration: 0.5,
											ease: "power2.out",
										},
										{
											delay: 3,
											y: l ? 0 : a,
											x: l ? a : 0,
											duration: 0.3,
											ease: "power2.in",
										},
									],
								}).set(f, { autoAlpha: 0 });
							});
						}
					});
			}
		);
	}
}
class Xp extends At {
	init() {
		const e = J.utils.selector(this.block);
		(this.DOM = { button: this.block, flair: e(".button__flair") }),
			(this.xSet = J.quickSetter(this.DOM.flair, "xPercent")),
			(this.ySet = J.quickSetter(this.DOM.flair, "yPercent")),
			(this.hasFill = this.DOM.button.classList.contains("button--fill"));
	}
	getXY(e) {
		const {
				left: r,
				top: t,
				width: i,
				height: n,
			} = this.DOM.button.getBoundingClientRect(),
			s = J.utils.pipe(
				J.utils.mapRange(0, i, 0, 100),
				J.utils.clamp(0, 100)
			),
			a = J.utils.pipe(
				J.utils.mapRange(0, n, 0, 100),
				J.utils.clamp(0, 100)
			);
		return { x: s(e.clientX - r), y: a(e.clientY - t) };
	}
	initEvents() {
		this.DOM.button.addEventListener("mouseenter", (e) => {
			const { x: r, y: t } = this.getXY(e);
			this.xSet(r),
				this.ySet(t),
				this.hasFill
					? J.to(this.DOM.flair, {
							opacity: 1,
							duration: 1,
							ease: "power2.out",
					  })
					: J.to(this.DOM.flair, {
							scale: 1,
							duration: 0.4,
							ease: "power2.out",
					  });
		}),
			this.DOM.button.addEventListener("mouseleave", (e) => {
				const { x: r, y: t } = this.getXY(e);
				J.killTweensOf(this.DOM.flair),
					this.hasFill
						? J.to(this.DOM.flair, {
								xPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
								yPercent: t > 90 ? t + 20 : t < 10 ? t - 20 : t,
								opacity: 0,
								duration: 1,
								ease: "power2.out",
						  })
						: J.to(this.DOM.flair, {
								xPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
								yPercent: t > 90 ? t + 20 : t < 10 ? t - 20 : t,
								scale: 0,
								duration: 0.3,
								ease: "power2.out",
						  });
			}),
			this.DOM.button.addEventListener("mousemove", (e) => {
				const { x: r, y: t } = this.getXY(e);
				J.to(this.DOM.flair, {
					xPercent: r,
					yPercent: t,
					duration: this.hasFill ? 1 : 0.4,
					ease: "power2",
				});
			});
	}
}
J.registerPlugin(tt);
class Gp extends At {
	init() {
		(this.wrapper = this.block.querySelector(".showcase__wrap")),
			(this.items = this.wrapper.querySelectorAll(".showcase__item")),
			(this.titles = this.wrapper.querySelectorAll(
				".showcase__titles p"
			)),
			(this.titleLinks = this.wrapper.querySelectorAll(
				".showcase__titles a"
			)),
			(this.tools = this.wrapper.querySelectorAll(".showcase__tools p")),
			(this.videos = this.wrapper.querySelectorAll(".showcase__video")),
			(this.previous = this.block.querySelector(".button.prev")),
			(this.next = this.block.querySelector(".button.next")),
			(this.loopItems = this.loopItems.bind(this)),
			(this.loop = this.loopItems());
	}
	initEvents() {
		const e = "is-moving";
		this.previous.addEventListener("click", this.loop.previous),
			this.next.addEventListener("click", this.loop.next),
			tt.create({
				target: this.wrapper,
				type: "touch,pointer",
				dragMinimum: 10,
				onPress: () => {
					this.wrapper.classList.add(e);
				},
				onRelease: () => {
					this.wrapper.classList.remove(e);
				},
				onLeft: () => {
					this.loop.next();
				},
				onRight: () => {
					this.loop.previous();
				},
			}),
			ge.create({
				trigger: this.wrapper,
				start: "top bottom",
				end: "bottom top",
				once: !0,
				onEnter: () => {
					this.videos[1].play();
				},
			});
	}
	loopItems() {
		const e = J.utils.toArray(this.items);
		let r = J.timeline({
				paused: !0,
				draggable: !0,
				defaults: { ease: "none" },
				onReverseComplete: () =>
					r.totalTime(r.rawTime() + r.duration() * 100),
			}),
			t = e.length,
			i = e[0].offsetLeft,
			n = [],
			s = [],
			a = [],
			l = 0,
			c = 1e3,
			f = J.utils.snap(1),
			h = () =>
				e.forEach((b, T) => {
					(s[T] = parseFloat(J.getProperty(b, "width", "px"))),
						(a[T] = f(
							(parseFloat(J.getProperty(b, "x", "px")) / s[T]) *
								100 +
								J.getProperty(b, "xPercent")
						));
				}),
			d = () =>
				e[t - 1].offsetLeft +
				(a[t - 1] / 100) * s[t - 1] -
				i +
				e[t - 1].offsetWidth * J.getProperty(e[t - 1], "scaleX"),
			u,
			p,
			g,
			_,
			v,
			y;
		for (
			h(),
				J.set(e, { xPercent: (b) => a[b] }),
				J.set(e, { x: 0 }),
				u = d(),
				y = 0;
			y < t;
			y++
		)
			(v = e[y]),
				(p = (a[y] / 100) * s[y]),
				(g = v.offsetLeft + p - i),
				(_ = g + s[y] * J.getProperty(v, "scaleX")),
				r
					.to(
						v,
						{
							xPercent: f(((p - _) / s[y]) * 100),
							duration: _ / c,
						},
						0
					)
					.fromTo(
						v,
						{ xPercent: f(((p - _ + u) / s[y]) * 100) },
						{
							xPercent: a[y],
							duration: (p - _ + u - p) / c,
							immediateRender: !1,
						},
						_ / c
					)
					.add("label" + y, g / c),
				(n[y] = g / c);
		const m = (b) => {
				e.forEach((k) => k.classList.remove("showcase__item--active")),
					this.titles.forEach((k) => k.classList.remove("active")),
					this.titleLinks.forEach((k) => {
						k.setAttribute("tabindex", "-1"),
							k.setAttribute("aria-hidden", "true");
					}),
					this.tools.forEach((k) => {
						k.setAttribute("tabindex", "-1"),
							k.setAttribute("aria-hidden", "true");
					}),
					this.tools.forEach((k) => k.classList.remove("active")),
					this.videos.forEach((k) => k.pause());
				let T = J.utils.wrap(0, e.length);
				e[T(b)].classList.add("showcase__item--active"),
					this.titles[T(b)].classList.add("active"),
					this.titleLinks[T(b)].removeAttribute("tabindex"),
					this.titleLinks[T(b)].removeAttribute("aria-hidden"),
					this.tools[T(b)].removeAttribute("tabindex"),
					this.tools[T(b)].removeAttribute("aria-hidden"),
					this.tools[T(b)].classList.add("active"),
					this.videos[T(b)].play();
			},
			w = (b) => {
				const T = { duration: 0.8, ease: "back.out(.95)" };
				Math.abs(b - l) > t / 2 && (b += b > l ? -t : t);
				let k = J.utils.wrap(0, t, b),
					S = n[k];
				return (
					S > r.time() != b > l &&
						((T.modifiers = {
							time: J.utils.wrap(0, r.duration()),
						}),
						(S += r.duration() * (b > l ? 1 : -1))),
					(l = k),
					(T.overwrite = !0),
					r.tweenTo(S, T)
				);
			};
		return (
			(r.next = () => {
				this.animating ||
					((this.animating = !0),
					(this.timeout = setTimeout(() => {
						this.animating = !1;
					}, 800)),
					w(l + 1) && m(l + 1));
			}),
			(r.previous = () => {
				this.animating ||
					((this.animating = !0),
					(this.timeout = setTimeout(() => {
						this.animating = !1;
					}, 800)),
					w(l - 1) && m(l + 1));
			}),
			(r.toIndex = (b) => w(b)),
			(r.updateIndex = () => (l = Math.round(r.progress() * e.length))),
			(r.times = n),
			r.progress(1, !0).progress(0, !0),
			r
		);
	}
}
function Fu(o, e) {
	var r = Object.keys(o);
	if (Object.getOwnPropertySymbols) {
		var t = Object.getOwnPropertySymbols(o);
		e &&
			(t = t.filter(function (i) {
				return Object.getOwnPropertyDescriptor(o, i).enumerable;
			})),
			r.push.apply(r, t);
	}
	return r;
}
function Nu(o) {
	for (var e = 1; e < arguments.length; e++) {
		var r = arguments[e] != null ? arguments[e] : {};
		e % 2
			? Fu(Object(r), !0).forEach(function (t) {
					os(o, t, r[t]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
			: Fu(Object(r)).forEach(function (t) {
					Object.defineProperty(
						o,
						t,
						Object.getOwnPropertyDescriptor(r, t)
					);
			  });
	}
	return o;
}
function Mt() {
	Mt = function () {
		return o;
	};
	var o = {},
		e = Object.prototype,
		r = e.hasOwnProperty,
		t =
			Object.defineProperty ||
			function (M, E, F) {
				M[E] = F.value;
			},
		i = typeof Symbol == "function" ? Symbol : {},
		n = i.iterator || "@@iterator",
		s = i.asyncIterator || "@@asyncIterator",
		a = i.toStringTag || "@@toStringTag";
	function l(M, E, F) {
		return (
			Object.defineProperty(M, E, {
				value: F,
				enumerable: !0,
				configurable: !0,
				writable: !0,
			}),
			M[E]
		);
	}
	try {
		l({}, "");
	} catch {
		l = function (E, F, Y) {
			return (E[F] = Y);
		};
	}
	function c(M, E, F, Y) {
		var R = E && E.prototype instanceof d ? E : d,
			V = Object.create(R.prototype),
			G = new C(Y || []);
		return t(V, "_invoke", { value: b(M, F, G) }), V;
	}
	function f(M, E, F) {
		try {
			return { type: "normal", arg: M.call(E, F) };
		} catch (Y) {
			return { type: "throw", arg: Y };
		}
	}
	o.wrap = c;
	var h = {};
	function d() {}
	function u() {}
	function p() {}
	var g = {};
	l(g, n, function () {
		return this;
	});
	var _ = Object.getPrototypeOf,
		v = _ && _(_($([])));
	v && v !== e && r.call(v, n) && (g = v);
	var y = (p.prototype = d.prototype = Object.create(g));
	function m(M) {
		["next", "throw", "return"].forEach(function (E) {
			l(M, E, function (F) {
				return this._invoke(E, F);
			});
		});
	}
	function w(M, E) {
		function F(R, V, G, ne) {
			var O = f(M[R], M, V);
			if (O.type !== "throw") {
				var W = O.arg,
					ee = W.value;
				return ee && typeof ee == "object" && r.call(ee, "__await")
					? E.resolve(ee.__await).then(
							function (re) {
								F("next", re, G, ne);
							},
							function (re) {
								F("throw", re, G, ne);
							}
					  )
					: E.resolve(ee).then(
							function (re) {
								(W.value = re), G(W);
							},
							function (re) {
								return F("throw", re, G, ne);
							}
					  );
			}
			ne(O.arg);
		}
		var Y;
		t(this, "_invoke", {
			value: function (R, V) {
				function G() {
					return new E(function (ne, O) {
						F(R, V, ne, O);
					});
				}
				return (Y = Y ? Y.then(G, G) : G());
			},
		});
	}
	function b(M, E, F) {
		var Y = "suspendedStart";
		return function (R, V) {
			if (Y === "executing")
				throw new Error("Generator is already running");
			if (Y === "completed") {
				if (R === "throw") throw V;
				return B();
			}
			for (F.method = R, F.arg = V; ; ) {
				var G = F.delegate;
				if (G) {
					var ne = T(G, F);
					if (ne) {
						if (ne === h) continue;
						return ne;
					}
				}
				if (F.method === "next") F.sent = F._sent = F.arg;
				else if (F.method === "throw") {
					if (Y === "suspendedStart")
						throw ((Y = "completed"), F.arg);
					F.dispatchException(F.arg);
				} else F.method === "return" && F.abrupt("return", F.arg);
				Y = "executing";
				var O = f(M, E, F);
				if (O.type === "normal") {
					if (
						((Y = F.done ? "completed" : "suspendedYield"),
						O.arg === h)
					)
						continue;
					return { value: O.arg, done: F.done };
				}
				O.type === "throw" &&
					((Y = "completed"), (F.method = "throw"), (F.arg = O.arg));
			}
		};
	}
	function T(M, E) {
		var F = E.method,
			Y = M.iterator[F];
		if (Y === void 0)
			return (
				(E.delegate = null),
				(F === "throw" &&
					M.iterator.return &&
					((E.method = "return"),
					(E.arg = void 0),
					T(M, E),
					E.method === "throw")) ||
					(F !== "return" &&
						((E.method = "throw"),
						(E.arg = new TypeError(
							"The iterator does not provide a '" + F + "' method"
						)))),
				h
			);
		var R = f(Y, M.iterator, E.arg);
		if (R.type === "throw")
			return (
				(E.method = "throw"), (E.arg = R.arg), (E.delegate = null), h
			);
		var V = R.arg;
		return V
			? V.done
				? ((E[M.resultName] = V.value),
				  (E.next = M.nextLoc),
				  E.method !== "return" &&
						((E.method = "next"), (E.arg = void 0)),
				  (E.delegate = null),
				  h)
				: V
			: ((E.method = "throw"),
			  (E.arg = new TypeError("iterator result is not an object")),
			  (E.delegate = null),
			  h);
	}
	function k(M) {
		var E = { tryLoc: M[0] };
		1 in M && (E.catchLoc = M[1]),
			2 in M && ((E.finallyLoc = M[2]), (E.afterLoc = M[3])),
			this.tryEntries.push(E);
	}
	function S(M) {
		var E = M.completion || {};
		(E.type = "normal"), delete E.arg, (M.completion = E);
	}
	function C(M) {
		(this.tryEntries = [{ tryLoc: "root" }]),
			M.forEach(k, this),
			this.reset(!0);
	}
	function $(M) {
		if (M) {
			var E = M[n];
			if (E) return E.call(M);
			if (typeof M.next == "function") return M;
			if (!isNaN(M.length)) {
				var F = -1,
					Y = function R() {
						for (; ++F < M.length; )
							if (r.call(M, F))
								return (R.value = M[F]), (R.done = !1), R;
						return (R.value = void 0), (R.done = !0), R;
					};
				return (Y.next = Y);
			}
		}
		return { next: B };
	}
	function B() {
		return { value: void 0, done: !0 };
	}
	return (
		(u.prototype = p),
		t(y, "constructor", { value: p, configurable: !0 }),
		t(p, "constructor", { value: u, configurable: !0 }),
		(u.displayName = l(p, a, "GeneratorFunction")),
		(o.isGeneratorFunction = function (M) {
			var E = typeof M == "function" && M.constructor;
			return (
				!!E &&
				(E === u || (E.displayName || E.name) === "GeneratorFunction")
			);
		}),
		(o.mark = function (M) {
			return (
				Object.setPrototypeOf
					? Object.setPrototypeOf(M, p)
					: ((M.__proto__ = p), l(M, a, "GeneratorFunction")),
				(M.prototype = Object.create(y)),
				M
			);
		}),
		(o.awrap = function (M) {
			return { __await: M };
		}),
		m(w.prototype),
		l(w.prototype, s, function () {
			return this;
		}),
		(o.AsyncIterator = w),
		(o.async = function (M, E, F, Y, R) {
			R === void 0 && (R = Promise);
			var V = new w(c(M, E, F, Y), R);
			return o.isGeneratorFunction(E)
				? V
				: V.next().then(function (G) {
						return G.done ? G.value : V.next();
				  });
		}),
		m(y),
		l(y, a, "Generator"),
		l(y, n, function () {
			return this;
		}),
		l(y, "toString", function () {
			return "[object Generator]";
		}),
		(o.keys = function (M) {
			var E = Object(M),
				F = [];
			for (var Y in E) F.push(Y);
			return (
				F.reverse(),
				function R() {
					for (; F.length; ) {
						var V = F.pop();
						if (V in E) return (R.value = V), (R.done = !1), R;
					}
					return (R.done = !0), R;
				}
			);
		}),
		(o.values = $),
		(C.prototype = {
			constructor: C,
			reset: function (M) {
				if (
					((this.prev = 0),
					(this.next = 0),
					(this.sent = this._sent = void 0),
					(this.done = !1),
					(this.delegate = null),
					(this.method = "next"),
					(this.arg = void 0),
					this.tryEntries.forEach(S),
					!M)
				)
					for (var E in this)
						E.charAt(0) === "t" &&
							r.call(this, E) &&
							!isNaN(+E.slice(1)) &&
							(this[E] = void 0);
			},
			stop: function () {
				this.done = !0;
				var M = this.tryEntries[0].completion;
				if (M.type === "throw") throw M.arg;
				return this.rval;
			},
			dispatchException: function (M) {
				if (this.done) throw M;
				var E = this;
				function F(O, W) {
					return (
						(V.type = "throw"),
						(V.arg = M),
						(E.next = O),
						W && ((E.method = "next"), (E.arg = void 0)),
						!!W
					);
				}
				for (var Y = this.tryEntries.length - 1; Y >= 0; --Y) {
					var R = this.tryEntries[Y],
						V = R.completion;
					if (R.tryLoc === "root") return F("end");
					if (R.tryLoc <= this.prev) {
						var G = r.call(R, "catchLoc"),
							ne = r.call(R, "finallyLoc");
						if (G && ne) {
							if (this.prev < R.catchLoc)
								return F(R.catchLoc, !0);
							if (this.prev < R.finallyLoc)
								return F(R.finallyLoc);
						} else if (G) {
							if (this.prev < R.catchLoc)
								return F(R.catchLoc, !0);
						} else {
							if (!ne)
								throw new Error(
									"try statement without catch or finally"
								);
							if (this.prev < R.finallyLoc)
								return F(R.finallyLoc);
						}
					}
				}
			},
			abrupt: function (M, E) {
				for (var F = this.tryEntries.length - 1; F >= 0; --F) {
					var Y = this.tryEntries[F];
					if (
						Y.tryLoc <= this.prev &&
						r.call(Y, "finallyLoc") &&
						this.prev < Y.finallyLoc
					) {
						var R = Y;
						break;
					}
				}
				R &&
					(M === "break" || M === "continue") &&
					R.tryLoc <= E &&
					E <= R.finallyLoc &&
					(R = null);
				var V = R ? R.completion : {};
				return (
					(V.type = M),
					(V.arg = E),
					R
						? ((this.method = "next"),
						  (this.next = R.finallyLoc),
						  h)
						: this.complete(V)
				);
			},
			complete: function (M, E) {
				if (M.type === "throw") throw M.arg;
				return (
					M.type === "break" || M.type === "continue"
						? (this.next = M.arg)
						: M.type === "return"
						? ((this.rval = this.arg = M.arg),
						  (this.method = "return"),
						  (this.next = "end"))
						: M.type === "normal" && E && (this.next = E),
					h
				);
			},
			finish: function (M) {
				for (var E = this.tryEntries.length - 1; E >= 0; --E) {
					var F = this.tryEntries[E];
					if (F.finallyLoc === M)
						return this.complete(F.completion, F.afterLoc), S(F), h;
				}
			},
			catch: function (M) {
				for (var E = this.tryEntries.length - 1; E >= 0; --E) {
					var F = this.tryEntries[E];
					if (F.tryLoc === M) {
						var Y = F.completion;
						if (Y.type === "throw") {
							var R = Y.arg;
							S(F);
						}
						return R;
					}
				}
				throw new Error("illegal catch attempt");
			},
			delegateYield: function (M, E, F) {
				return (
					(this.delegate = {
						iterator: $(M),
						resultName: E,
						nextLoc: F,
					}),
					this.method === "next" && (this.arg = void 0),
					h
				);
			},
		}),
		o
	);
}
function Iu(o, e, r, t, i, n, s) {
	try {
		var a = o[n](s),
			l = a.value;
	} catch (c) {
		r(c);
		return;
	}
	a.done ? e(l) : Promise.resolve(l).then(t, i);
}
function Si(o) {
	return function () {
		var e = this,
			r = arguments;
		return new Promise(function (t, i) {
			var n = o.apply(e, r);
			function s(l) {
				Iu(n, t, i, s, a, "next", l);
			}
			function a(l) {
				Iu(n, t, i, s, a, "throw", l);
			}
			s(void 0);
		});
	};
}
function Hf(o, e) {
	if (!(o instanceof e))
		throw new TypeError("Cannot call a class as a function");
}
function Bu(o, e) {
	for (var r = 0; r < e.length; r++) {
		var t = e[r];
		(t.enumerable = t.enumerable || !1),
			(t.configurable = !0),
			"value" in t && (t.writable = !0),
			Object.defineProperty(o, Kf(t.key), t);
	}
}
function jf(o, e, r) {
	return (
		e && Bu(o.prototype, e),
		r && Bu(o, r),
		Object.defineProperty(o, "prototype", { writable: !1 }),
		o
	);
}
function os(o, e, r) {
	return (
		(e = Kf(e)),
		e in o
			? Object.defineProperty(o, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (o[e] = r),
		o
	);
}
function Wp(o, e) {
	if (typeof e != "function" && e !== null)
		throw new TypeError(
			"Super expression must either be null or a function"
		);
	(o.prototype = Object.create(e && e.prototype, {
		constructor: { value: o, writable: !0, configurable: !0 },
	})),
		Object.defineProperty(o, "prototype", { writable: !1 }),
		e && To(o, e);
}
function xo(o) {
	return (
		(xo = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (r) {
					return r.__proto__ || Object.getPrototypeOf(r);
			  }),
		xo(o)
	);
}
function To(o, e) {
	return (
		(To = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (t, i) {
					return (t.__proto__ = i), t;
			  }),
		To(o, e)
	);
}
function Uf() {
	if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
		return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return (
			Boolean.prototype.valueOf.call(
				Reflect.construct(Boolean, [], function () {})
			),
			!0
		);
	} catch {
		return !1;
	}
}
function ss(o, e, r) {
	return (
		Uf()
			? (ss = Reflect.construct.bind())
			: (ss = function (i, n, s) {
					var a = [null];
					a.push.apply(a, n);
					var l = Function.bind.apply(i, a),
						c = new l();
					return s && To(c, s.prototype), c;
			  }),
		ss.apply(null, arguments)
	);
}
function Hp(o) {
	return Function.toString.call(o).indexOf("[native code]") !== -1;
}
function Wa(o) {
	var e = typeof Map == "function" ? new Map() : void 0;
	return (
		(Wa = function (t) {
			if (t === null || !Hp(t)) return t;
			if (typeof t != "function")
				throw new TypeError(
					"Super expression must either be null or a function"
				);
			if (typeof e < "u") {
				if (e.has(t)) return e.get(t);
				e.set(t, i);
			}
			function i() {
				return ss(t, arguments, xo(this).constructor);
			}
			return (
				(i.prototype = Object.create(t.prototype, {
					constructor: {
						value: i,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
				To(i, t)
			);
		}),
		Wa(o)
	);
}
function as(o) {
	if (o === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	return o;
}
function jp(o, e) {
	if (e && (typeof e == "object" || typeof e == "function")) return e;
	if (e !== void 0)
		throw new TypeError(
			"Derived constructors may only return object or undefined"
		);
	return as(o);
}
function Up(o) {
	var e = Uf();
	return function () {
		var t = xo(o),
			i;
		if (e) {
			var n = xo(this).constructor;
			i = Reflect.construct(t, arguments, n);
		} else i = t.apply(this, arguments);
		return jp(this, i);
	};
}
function Kp(o, e) {
	if (typeof o != "object" || o === null) return o;
	var r = o[Symbol.toPrimitive];
	if (r !== void 0) {
		var t = r.call(o, e || "default");
		if (typeof t != "object") return t;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (e === "string" ? String : Number)(o);
}
function Kf(o) {
	var e = Kp(o, "string");
	return typeof e == "symbol" ? e : String(e);
}
var Qf = typeof global < "u" && {}.toString.call(global) === "[object global]";
function $u(o, e) {
	return o.indexOf(e.toLowerCase()) === 0
		? o
		: ""
				.concat(e.toLowerCase())
				.concat(o.substr(0, 1).toUpperCase())
				.concat(o.substr(1));
}
function Qp(o) {
	return !!(
		o &&
		o.nodeType === 1 &&
		"nodeName" in o &&
		o.ownerDocument &&
		o.ownerDocument.defaultView
	);
}
function Zp(o) {
	return !isNaN(parseFloat(o)) && isFinite(o) && Math.floor(o) == o;
}
function Gi(o) {
	return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(o);
}
function Zf(o) {
	var e = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
	return e.test(o);
}
function Jf() {
	var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
		e = o.id,
		r = o.url,
		t = e || r;
	if (!t)
		throw new Error(
			"An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
		);
	if (Zp(t)) return "https://vimeo.com/".concat(t);
	if (Gi(t)) return t.replace("http:", "https:");
	throw e
		? new TypeError("“".concat(e, "” is not a valid video id."))
		: new TypeError("“".concat(t, "” is not a vimeo.com url."));
}
var zu = function (e, r, t) {
		var i =
				arguments.length > 3 && arguments[3] !== void 0
					? arguments[3]
					: "addEventListener",
			n =
				arguments.length > 4 && arguments[4] !== void 0
					? arguments[4]
					: "removeEventListener",
			s = typeof r == "string" ? [r] : r;
		return (
			s.forEach(function (a) {
				e[i](a, t);
			}),
			{
				cancel: function () {
					return s.forEach(function (l) {
						return e[n](l, t);
					});
				},
			}
		);
	},
	Jp = typeof Array.prototype.indexOf < "u",
	eg = typeof window < "u" && typeof window.postMessage < "u";
if (!Qf && (!Jp || !eg))
	throw new Error(
		"Sorry, the Vimeo Player API is not available in this browser."
	);
var yn =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
		? window
		: typeof global < "u"
		? global
		: typeof self < "u"
		? self
		: {};
function tg(o, e) {
	return (e = { exports: {} }), o(e, e.exports), e.exports;
}
(function (o) {
	if (o.WeakMap) return;
	var e = Object.prototype.hasOwnProperty,
		r =
			Object.defineProperty &&
			(function () {
				try {
					return Object.defineProperty({}, "x", { value: 1 }).x === 1;
				} catch {}
			})(),
		t = function (n, s, a) {
			r
				? Object.defineProperty(n, s, {
						configurable: !0,
						writable: !0,
						value: a,
				  })
				: (n[s] = a);
		};
	o.WeakMap = (function () {
		function n() {
			if (this === void 0)
				throw new TypeError("Constructor WeakMap requires 'new'");
			if ((t(this, "_id", a("_WeakMap")), arguments.length > 0))
				throw new TypeError("WeakMap iterable is not supported");
		}
		t(n.prototype, "delete", function (c) {
			if ((s(this, "delete"), !i(c))) return !1;
			var f = c[this._id];
			return f && f[0] === c ? (delete c[this._id], !0) : !1;
		}),
			t(n.prototype, "get", function (c) {
				if ((s(this, "get"), !!i(c))) {
					var f = c[this._id];
					if (f && f[0] === c) return f[1];
				}
			}),
			t(n.prototype, "has", function (c) {
				if ((s(this, "has"), !i(c))) return !1;
				var f = c[this._id];
				return !!(f && f[0] === c);
			}),
			t(n.prototype, "set", function (c, f) {
				if ((s(this, "set"), !i(c)))
					throw new TypeError("Invalid value used as weak map key");
				var h = c[this._id];
				return h && h[0] === c
					? ((h[1] = f), this)
					: (t(c, this._id, [c, f]), this);
			});
		function s(c, f) {
			if (!i(c) || !e.call(c, "_id"))
				throw new TypeError(
					f + " method called on incompatible receiver " + typeof c
				);
		}
		function a(c) {
			return c + "_" + l() + "." + l();
		}
		function l() {
			return Math.random().toString().substring(2);
		}
		return t(n, "_polyfill", !0), n;
	})();
	function i(n) {
		return Object(n) === n;
	}
})(
	typeof globalThis < "u"
		? globalThis
		: typeof self < "u"
		? self
		: typeof window < "u"
		? window
		: yn
);
var nr = tg(function (o) {
		(function (r, t, i) {
			(t[r] = t[r] || i()), o.exports && (o.exports = t[r]);
		})("Promise", yn, function () {
			var r,
				t,
				i,
				n = Object.prototype.toString,
				s =
					typeof setImmediate < "u"
						? function (m) {
								return setImmediate(m);
						  }
						: setTimeout;
			try {
				Object.defineProperty({}, "x", {}),
					(r = function (m, w, b, T) {
						return Object.defineProperty(m, w, {
							value: b,
							writable: !0,
							configurable: T !== !1,
						});
					});
			} catch {
				r = function (w, b, T) {
					return (w[b] = T), w;
				};
			}
			i = (function () {
				var m, w, b;
				function T(k, S) {
					(this.fn = k), (this.self = S), (this.next = void 0);
				}
				return {
					add: function (S, C) {
						(b = new T(S, C)),
							w ? (w.next = b) : (m = b),
							(w = b),
							(b = void 0);
					},
					drain: function () {
						var S = m;
						for (m = w = t = void 0; S; )
							S.fn.call(S.self), (S = S.next);
					},
				};
			})();
			function a(y, m) {
				i.add(y, m), t || (t = s(i.drain));
			}
			function l(y) {
				var m,
					w = typeof y;
				return (
					y != null &&
						(w == "object" || w == "function") &&
						(m = y.then),
					typeof m == "function" ? m : !1
				);
			}
			function c() {
				for (var y = 0; y < this.chain.length; y++)
					f(
						this,
						this.state === 1
							? this.chain[y].success
							: this.chain[y].failure,
						this.chain[y]
					);
				this.chain.length = 0;
			}
			function f(y, m, w) {
				var b, T;
				try {
					m === !1
						? w.reject(y.msg)
						: (m === !0 ? (b = y.msg) : (b = m.call(void 0, y.msg)),
						  b === w.promise
								? w.reject(TypeError("Promise-chain cycle"))
								: (T = l(b))
								? T.call(b, w.resolve, w.reject)
								: w.resolve(b));
				} catch (k) {
					w.reject(k);
				}
			}
			function h(y) {
				var m,
					w = this;
				if (!w.triggered) {
					(w.triggered = !0), w.def && (w = w.def);
					try {
						(m = l(y))
							? a(function () {
									var b = new p(w);
									try {
										m.call(
											y,
											function () {
												h.apply(b, arguments);
											},
											function () {
												d.apply(b, arguments);
											}
										);
									} catch (T) {
										d.call(b, T);
									}
							  })
							: ((w.msg = y),
							  (w.state = 1),
							  w.chain.length > 0 && a(c, w));
					} catch (b) {
						d.call(new p(w), b);
					}
				}
			}
			function d(y) {
				var m = this;
				m.triggered ||
					((m.triggered = !0),
					m.def && (m = m.def),
					(m.msg = y),
					(m.state = 2),
					m.chain.length > 0 && a(c, m));
			}
			function u(y, m, w, b) {
				for (var T = 0; T < m.length; T++)
					(function (S) {
						y.resolve(m[S]).then(function ($) {
							w(S, $);
						}, b);
					})(T);
			}
			function p(y) {
				(this.def = y), (this.triggered = !1);
			}
			function g(y) {
				(this.promise = y),
					(this.state = 0),
					(this.triggered = !1),
					(this.chain = []),
					(this.msg = void 0);
			}
			function _(y) {
				if (typeof y != "function") throw TypeError("Not a function");
				if (this.__NPO__ !== 0) throw TypeError("Not a promise");
				this.__NPO__ = 1;
				var m = new g(this);
				(this.then = function (b, T) {
					var k = {
						success: typeof b == "function" ? b : !0,
						failure: typeof T == "function" ? T : !1,
					};
					return (
						(k.promise = new this.constructor(function (C, $) {
							if (
								typeof C != "function" ||
								typeof $ != "function"
							)
								throw TypeError("Not a function");
							(k.resolve = C), (k.reject = $);
						})),
						m.chain.push(k),
						m.state !== 0 && a(c, m),
						k.promise
					);
				}),
					(this.catch = function (b) {
						return this.then(void 0, b);
					});
				try {
					y.call(
						void 0,
						function (b) {
							h.call(m, b);
						},
						function (b) {
							d.call(m, b);
						}
					);
				} catch (w) {
					d.call(m, w);
				}
			}
			var v = r({}, "constructor", _, !1);
			return (
				(_.prototype = v),
				r(v, "__NPO__", 0, !1),
				r(_, "resolve", function (m) {
					var w = this;
					return m && typeof m == "object" && m.__NPO__ === 1
						? m
						: new w(function (T, k) {
								if (
									typeof T != "function" ||
									typeof k != "function"
								)
									throw TypeError("Not a function");
								T(m);
						  });
				}),
				r(_, "reject", function (m) {
					return new this(function (b, T) {
						if (typeof b != "function" || typeof T != "function")
							throw TypeError("Not a function");
						T(m);
					});
				}),
				r(_, "all", function (m) {
					var w = this;
					return n.call(m) != "[object Array]"
						? w.reject(TypeError("Not an array"))
						: m.length === 0
						? w.resolve([])
						: new w(function (T, k) {
								if (
									typeof T != "function" ||
									typeof k != "function"
								)
									throw TypeError("Not a function");
								var S = m.length,
									C = Array(S),
									$ = 0;
								u(
									w,
									m,
									function (M, E) {
										(C[M] = E), ++$ === S && T(C);
									},
									k
								);
						  });
				}),
				r(_, "race", function (m) {
					var w = this;
					return n.call(m) != "[object Array]"
						? w.reject(TypeError("Not an array"))
						: new w(function (T, k) {
								if (
									typeof T != "function" ||
									typeof k != "function"
								)
									throw TypeError("Not a function");
								u(
									w,
									m,
									function (C, $) {
										T($);
									},
									k
								);
						  });
				}),
				_
			);
		});
	}),
	Wr = new WeakMap();
function Fn(o, e, r) {
	var t = Wr.get(o.element) || {};
	e in t || (t[e] = []), t[e].push(r), Wr.set(o.element, t);
}
function Ps(o, e) {
	var r = Wr.get(o.element) || {};
	return r[e] || [];
}
function Ms(o, e, r) {
	var t = Wr.get(o.element) || {};
	if (!t[e]) return !0;
	if (!r) return (t[e] = []), Wr.set(o.element, t), !0;
	var i = t[e].indexOf(r);
	return (
		i !== -1 && t[e].splice(i, 1),
		Wr.set(o.element, t),
		t[e] && t[e].length === 0
	);
}
function rg(o, e) {
	var r = Ps(o, e);
	if (r.length < 1) return !1;
	var t = r.shift();
	return Ms(o, e, t), t;
}
function ig(o, e) {
	var r = Wr.get(o);
	Wr.set(e, r), Wr.delete(o);
}
function As(o) {
	if (typeof o == "string")
		try {
			o = JSON.parse(o);
		} catch (e) {
			return console.warn(e), {};
		}
	return o;
}
function vi(o, e, r) {
	if (!(!o.element.contentWindow || !o.element.contentWindow.postMessage)) {
		var t = { method: e };
		r !== void 0 && (t.value = r);
		var i = parseFloat(
			navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
		);
		i >= 8 && i < 10 && (t = JSON.stringify(t)),
			o.element.contentWindow.postMessage(t, o.origin);
	}
}
function ng(o, e) {
	e = As(e);
	var r = [],
		t;
	if (e.event) {
		if (e.event === "error") {
			var i = Ps(o, e.data.method);
			i.forEach(function (s) {
				var a = new Error(e.data.message);
				(a.name = e.data.name), s.reject(a), Ms(o, e.data.method, s);
			});
		}
		(r = Ps(o, "event:".concat(e.event))), (t = e.data);
	} else if (e.method) {
		var n = rg(o, e.method);
		n && (r.push(n), (t = e.value));
	}
	r.forEach(function (s) {
		try {
			if (typeof s == "function") {
				s.call(o, t);
				return;
			}
			s.resolve(t);
		} catch {}
	});
}
var og = [
	"autopause",
	"autoplay",
	"background",
	"byline",
	"color",
	"colors",
	"controls",
	"dnt",
	"height",
	"id",
	"interactive_params",
	"keyboard",
	"loop",
	"maxheight",
	"maxwidth",
	"muted",
	"playsinline",
	"portrait",
	"responsive",
	"speed",
	"texttrack",
	"title",
	"transparent",
	"url",
	"width",
];
function eh(o) {
	var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return og.reduce(function (r, t) {
		var i = o.getAttribute("data-vimeo-".concat(t));
		return (i || i === "") && (r[t] = i === "" ? 1 : i), r;
	}, e);
}
function Tl(o, e) {
	var r = o.html;
	if (!e) throw new TypeError("An element must be provided");
	if (e.getAttribute("data-vimeo-initialized") !== null)
		return e.querySelector("iframe");
	var t = document.createElement("div");
	return (
		(t.innerHTML = r),
		e.appendChild(t.firstChild),
		e.setAttribute("data-vimeo-initialized", "true"),
		e.querySelector("iframe")
	);
}
function th(o) {
	var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = arguments.length > 2 ? arguments[2] : void 0;
	return new Promise(function (t, i) {
		if (!Gi(o))
			throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
		var n = "https://vimeo.com/api/oembed.json?url=".concat(
			encodeURIComponent(o)
		);
		for (var s in e)
			e.hasOwnProperty(s) &&
				(n += "&".concat(s, "=").concat(encodeURIComponent(e[s])));
		var a =
			"XDomainRequest" in window
				? new XDomainRequest()
				: new XMLHttpRequest();
		a.open("GET", n, !0),
			(a.onload = function () {
				if (a.status === 404) {
					i(new Error("“".concat(o, "” was not found.")));
					return;
				}
				if (a.status === 403) {
					i(new Error("“".concat(o, "” is not embeddable.")));
					return;
				}
				try {
					var l = JSON.parse(a.responseText);
					if (l.domain_status_code === 403) {
						Tl(l, r),
							i(new Error("“".concat(o, "” is not embeddable.")));
						return;
					}
					t(l);
				} catch (c) {
					i(c);
				}
			}),
			(a.onerror = function () {
				var l = a.status ? " (".concat(a.status, ")") : "";
				i(
					new Error(
						"There was an error fetching the embed code from Vimeo".concat(
							l,
							"."
						)
					)
				);
			}),
			a.send();
	});
}
function sg() {
	var o =
			arguments.length > 0 && arguments[0] !== void 0
				? arguments[0]
				: document,
		e = [].slice.call(
			o.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
		),
		r = function (i) {
			"console" in window &&
				console.error &&
				console.error(
					"There was an error creating an embed: ".concat(i)
				);
		};
	e.forEach(function (t) {
		try {
			if (t.getAttribute("data-vimeo-defer") !== null) return;
			var i = eh(t),
				n = Jf(i);
			th(n, i, t)
				.then(function (s) {
					return Tl(s, t);
				})
				.catch(r);
		} catch (s) {
			r(s);
		}
	});
}
function ag() {
	var o =
		arguments.length > 0 && arguments[0] !== void 0
			? arguments[0]
			: document;
	if (!window.VimeoPlayerResizeEmbeds_) {
		window.VimeoPlayerResizeEmbeds_ = !0;
		var e = function (t) {
			if (Gi(t.origin) && !(!t.data || t.data.event !== "spacechange")) {
				for (
					var i = o.querySelectorAll("iframe"), n = 0;
					n < i.length;
					n++
				)
					if (i[n].contentWindow === t.source) {
						var s = i[n].parentElement;
						s.style.paddingBottom = "".concat(
							t.data.data[0].bottom,
							"px"
						);
						break;
					}
			}
		};
		window.addEventListener("message", e);
	}
}
function lg() {
	var o =
		arguments.length > 0 && arguments[0] !== void 0
			? arguments[0]
			: document;
	if (!window.VimeoSeoMetadataAppended) {
		window.VimeoSeoMetadataAppended = !0;
		var e = function (t) {
			if (Gi(t.origin)) {
				var i = As(t.data);
				if (!(!i || i.event !== "ready"))
					for (
						var n = o.querySelectorAll("iframe"), s = 0;
						s < n.length;
						s++
					) {
						var a = n[s],
							l = a.contentWindow === t.source;
						if (Zf(a.src) && l) {
							var c = new Sl(a);
							c.callMethod(
								"appendVideoMetadata",
								window.location.href
							);
						}
					}
			}
		};
		window.addEventListener("message", e);
	}
}
function ug() {
	var o =
		arguments.length > 0 && arguments[0] !== void 0
			? arguments[0]
			: document;
	if (!window.VimeoCheckedUrlTimeParam) {
		window.VimeoCheckedUrlTimeParam = !0;
		var e = function (i) {
				"console" in window &&
					console.error &&
					console.error(
						"There was an error getting video Id: ".concat(i)
					);
			},
			r = function (i) {
				if (Gi(i.origin)) {
					var n = As(i.data);
					if (!(!n || n.event !== "ready"))
						for (
							var s = o.querySelectorAll("iframe"),
								a = function () {
									var f = s[l],
										h = f.contentWindow === i.source;
									if (Zf(f.src) && h) {
										var d = new Sl(f);
										d.getVideoId()
											.then(function (u) {
												var p = new RegExp(
													"[?&]vimeo_t_".concat(
														u,
														"=([^&#]*)"
													)
												).exec(window.location.href);
												if (p && p[1]) {
													var g = decodeURI(p[1]);
													d.setCurrentTime(g);
												}
											})
											.catch(e);
									}
								},
								l = 0;
							l < s.length;
							l++
						)
							a();
				}
			};
		window.addEventListener("message", r);
	}
}
function cg() {
	var o = (function () {
			for (
				var t,
					i = [
						[
							"requestFullscreen",
							"exitFullscreen",
							"fullscreenElement",
							"fullscreenEnabled",
							"fullscreenchange",
							"fullscreenerror",
						],
						[
							"webkitRequestFullscreen",
							"webkitExitFullscreen",
							"webkitFullscreenElement",
							"webkitFullscreenEnabled",
							"webkitfullscreenchange",
							"webkitfullscreenerror",
						],
						[
							"webkitRequestFullScreen",
							"webkitCancelFullScreen",
							"webkitCurrentFullScreenElement",
							"webkitCancelFullScreen",
							"webkitfullscreenchange",
							"webkitfullscreenerror",
						],
						[
							"mozRequestFullScreen",
							"mozCancelFullScreen",
							"mozFullScreenElement",
							"mozFullScreenEnabled",
							"mozfullscreenchange",
							"mozfullscreenerror",
						],
						[
							"msRequestFullscreen",
							"msExitFullscreen",
							"msFullscreenElement",
							"msFullscreenEnabled",
							"MSFullscreenChange",
							"MSFullscreenError",
						],
					],
					n = 0,
					s = i.length,
					a = {};
				n < s;
				n++
			)
				if (((t = i[n]), t && t[1] in document)) {
					for (n = 0; n < t.length; n++) a[i[0][n]] = t[n];
					return a;
				}
			return !1;
		})(),
		e = {
			fullscreenchange: o.fullscreenchange,
			fullscreenerror: o.fullscreenerror,
		},
		r = {
			request: function (i) {
				return new Promise(function (n, s) {
					var a = function c() {
						r.off("fullscreenchange", c), n();
					};
					r.on("fullscreenchange", a),
						(i = i || document.documentElement);
					var l = i[o.requestFullscreen]();
					l instanceof Promise && l.then(a).catch(s);
				});
			},
			exit: function () {
				return new Promise(function (i, n) {
					if (!r.isFullscreen) {
						i();
						return;
					}
					var s = function l() {
						r.off("fullscreenchange", l), i();
					};
					r.on("fullscreenchange", s);
					var a = document[o.exitFullscreen]();
					a instanceof Promise && a.then(s).catch(n);
				});
			},
			on: function (i, n) {
				var s = e[i];
				s && document.addEventListener(s, n);
			},
			off: function (i, n) {
				var s = e[i];
				s && document.removeEventListener(s, n);
			},
		};
	return (
		Object.defineProperties(r, {
			isFullscreen: {
				get: function () {
					return !!document[o.fullscreenElement];
				},
			},
			element: {
				enumerable: !0,
				get: function () {
					return document[o.fullscreenElement];
				},
			},
			isEnabled: {
				enumerable: !0,
				get: function () {
					return !!document[o.fullscreenEnabled];
				},
			},
		}),
		r
	);
}
var fg = {
		role: "viewer",
		autoPlayMuted: !0,
		allowedDrift: 0.3,
		maxAllowedDrift: 1,
		minCheckInterval: 0.1,
		maxRateAdjustment: 0.2,
		maxTimeToCatchUp: 1,
	},
	hg = (function (o) {
		Wp(r, o);
		var e = Up(r);
		function r(t, i) {
			var n,
				s =
					arguments.length > 2 && arguments[2] !== void 0
						? arguments[2]
						: {},
				a = arguments.length > 3 ? arguments[3] : void 0;
			return (
				Hf(this, r),
				(n = e.call(this)),
				os(as(n), "logger", void 0),
				os(as(n), "speedAdjustment", 0),
				os(
					as(n),
					"adjustSpeed",
					(function () {
						var l = Si(
							Mt().mark(function c(f, h) {
								var d;
								return Mt().wrap(function (p) {
									for (;;)
										switch ((p.prev = p.next)) {
											case 0:
												if (n.speedAdjustment !== h) {
													p.next = 2;
													break;
												}
												return p.abrupt("return");
											case 2:
												return (
													(p.next = 4),
													f.getPlaybackRate()
												);
											case 4:
												return (
													(p.t0 = p.sent),
													(p.t1 = n.speedAdjustment),
													(p.t2 = p.t0 - p.t1),
													(p.t3 = h),
													(d = p.t2 + p.t3),
													n.log(
														"New playbackRate:  ".concat(
															d
														)
													),
													(p.next = 12),
													f.setPlaybackRate(d)
												);
											case 12:
												n.speedAdjustment = h;
											case 13:
											case "end":
												return p.stop();
										}
								}, c);
							})
						);
						return function (c, f) {
							return l.apply(this, arguments);
						};
					})()
				),
				(n.logger = a),
				n.init(i, t, Nu(Nu({}, fg), s)),
				n
			);
		}
		return (
			jf(r, [
				{
					key: "disconnect",
					value: function () {
						this.dispatchEvent(new Event("disconnect"));
					},
				},
				{
					key: "init",
					value: (function () {
						var t = Si(
							Mt().mark(function n(s, a, l) {
								var c = this,
									f,
									h,
									d;
								return Mt().wrap(
									function (p) {
										for (;;)
											switch ((p.prev = p.next)) {
												case 0:
													return (
														(p.next = 2),
														this.waitForTOReadyState(
															s,
															"open"
														)
													);
												case 2:
													if (l.role !== "viewer") {
														p.next = 10;
														break;
													}
													return (
														(p.next = 5),
														this.updatePlayer(
															s,
															a,
															l
														)
													);
												case 5:
													(f = zu(
														s,
														"change",
														function () {
															return c.updatePlayer(
																s,
																a,
																l
															);
														}
													)),
														(h =
															this.maintainPlaybackPosition(
																s,
																a,
																l
															)),
														this.addEventListener(
															"disconnect",
															function () {
																h.cancel(),
																	f.cancel();
															}
														),
														(p.next = 14);
													break;
												case 10:
													return (
														(p.next = 12),
														this.updateTimingObject(
															s,
															a
														)
													);
												case 12:
													(d = zu(
														a,
														[
															"seeked",
															"play",
															"pause",
															"ratechange",
														],
														function () {
															return c.updateTimingObject(
																s,
																a
															);
														},
														"on",
														"off"
													)),
														this.addEventListener(
															"disconnect",
															function () {
																return d.cancel();
															}
														);
												case 14:
												case "end":
													return p.stop();
											}
									},
									n,
									this
								);
							})
						);
						function i(n, s, a) {
							return t.apply(this, arguments);
						}
						return i;
					})(),
				},
				{
					key: "updateTimingObject",
					value: (function () {
						var t = Si(
							Mt().mark(function n(s, a) {
								return Mt().wrap(function (c) {
									for (;;)
										switch ((c.prev = c.next)) {
											case 0:
												return (
													(c.t0 = s),
													(c.next = 3),
													a.getCurrentTime()
												);
											case 3:
												return (
													(c.t1 = c.sent),
													(c.next = 6),
													a.getPaused()
												);
											case 6:
												if (!c.sent) {
													c.next = 10;
													break;
												}
												(c.t2 = 0), (c.next = 13);
												break;
											case 10:
												return (
													(c.next = 12),
													a.getPlaybackRate()
												);
											case 12:
												c.t2 = c.sent;
											case 13:
												(c.t3 = c.t2),
													(c.t4 = {
														position: c.t1,
														velocity: c.t3,
													}),
													c.t0.update.call(
														c.t0,
														c.t4
													);
											case 16:
											case "end":
												return c.stop();
										}
								}, n);
							})
						);
						function i(n, s) {
							return t.apply(this, arguments);
						}
						return i;
					})(),
				},
				{
					key: "updatePlayer",
					value: (function () {
						var t = Si(
							Mt().mark(function n(s, a, l) {
								var c, f, h;
								return Mt().wrap(
									function (u) {
										for (;;)
											switch ((u.prev = u.next)) {
												case 0:
													if (
														((c = s.query()),
														(f = c.position),
														(h = c.velocity),
														typeof f == "number" &&
															a.setCurrentTime(f),
														typeof h != "number")
													) {
														u.next = 25;
														break;
													}
													if (h !== 0) {
														u.next = 11;
														break;
													}
													return (
														(u.next = 6),
														a.getPaused()
													);
												case 6:
													if (
														((u.t0 = u.sent),
														u.t0 !== !1)
													) {
														u.next = 9;
														break;
													}
													a.pause();
												case 9:
													u.next = 25;
													break;
												case 11:
													if (!(h > 0)) {
														u.next = 25;
														break;
													}
													return (
														(u.next = 14),
														a.getPaused()
													);
												case 14:
													if (
														((u.t1 = u.sent),
														u.t1 !== !0)
													) {
														u.next = 19;
														break;
													}
													return (
														(u.next = 18),
														a.play().catch(
															(function () {
																var p = Si(
																	Mt().mark(
																		function g(
																			_
																		) {
																			return Mt().wrap(
																				function (
																					y
																				) {
																					for (;;)
																						switch (
																							(y.prev =
																								y.next)
																						) {
																							case 0:
																								if (
																									!(
																										_.name ===
																											"NotAllowedError" &&
																										l.autoPlayMuted
																									)
																								) {
																									y.next = 5;
																									break;
																								}
																								return (
																									(y.next = 3),
																									a.setMuted(
																										!0
																									)
																								);
																							case 3:
																								return (
																									(y.next = 5),
																									a
																										.play()
																										.catch(
																											function (
																												m
																											) {
																												return console.error(
																													"Couldn't play the video from TimingSrcConnector. Error:",
																													m
																												);
																											}
																										)
																								);
																							case 5:
																							case "end":
																								return y.stop();
																						}
																				},
																				g
																			);
																		}
																	)
																);
																return function (
																	g
																) {
																	return p.apply(
																		this,
																		arguments
																	);
																};
															})()
														)
													);
												case 18:
													this.updatePlayer(s, a, l);
												case 19:
													return (
														(u.next = 21),
														a.getPlaybackRate()
													);
												case 21:
													if (
														((u.t2 = u.sent),
														(u.t3 = h),
														u.t2 === u.t3)
													) {
														u.next = 25;
														break;
													}
													a.setPlaybackRate(h);
												case 25:
												case "end":
													return u.stop();
											}
									},
									n,
									this
								);
							})
						);
						function i(n, s, a) {
							return t.apply(this, arguments);
						}
						return i;
					})(),
				},
				{
					key: "maintainPlaybackPosition",
					value: function (i, n, s) {
						var a = this,
							l = s.allowedDrift,
							c = s.maxAllowedDrift,
							f = s.minCheckInterval,
							h = s.maxRateAdjustment,
							d = s.maxTimeToCatchUp,
							u = Math.min(d, Math.max(f, c)) * 1e3,
							p = (function () {
								var _ = Si(
									Mt().mark(function v() {
										var y, m, w, b, T;
										return Mt().wrap(function (S) {
											for (;;)
												switch ((S.prev = S.next)) {
													case 0:
														if (
															((S.t0 =
																i.query()
																	.velocity ===
																0),
															S.t0)
														) {
															S.next = 6;
															break;
														}
														return (
															(S.next = 4),
															n.getPaused()
														);
													case 4:
														(S.t1 = S.sent),
															(S.t0 =
																S.t1 === !0);
													case 6:
														if (!S.t0) {
															S.next = 8;
															break;
														}
														return S.abrupt(
															"return"
														);
													case 8:
														return (
															(S.t2 =
																i.query().position),
															(S.next = 11),
															n.getCurrentTime()
														);
													case 11:
														if (
															((S.t3 = S.sent),
															(y = S.t2 - S.t3),
															(m = Math.abs(y)),
															a.log(
																"Drift: ".concat(
																	y
																)
															),
															!(m > c))
														) {
															S.next = 22;
															break;
														}
														return (
															(S.next = 18),
															a.adjustSpeed(n, 0)
														);
													case 18:
														n.setCurrentTime(
															i.query().position
														),
															a.log(
																"Resync by currentTime"
															),
															(S.next = 29);
														break;
													case 22:
														if (!(m > l)) {
															S.next = 29;
															break;
														}
														return (
															(w = m / d),
															(b = h),
															(T =
																w < b
																	? (b - w) /
																	  2
																	: b),
															(S.next = 28),
															a.adjustSpeed(
																n,
																T * Math.sign(y)
															)
														);
													case 28:
														a.log(
															"Resync by playbackRate"
														);
													case 29:
													case "end":
														return S.stop();
												}
										}, v);
									})
								);
								return function () {
									return _.apply(this, arguments);
								};
							})(),
							g = setInterval(function () {
								return p();
							}, u);
						return {
							cancel: function () {
								return clearInterval(g);
							},
						};
					},
				},
				{
					key: "log",
					value: function (i) {
						var n;
						(n = this.logger) === null ||
							n === void 0 ||
							n.call(this, "TimingSrcConnector: ".concat(i));
					},
				},
				{
					key: "waitForTOReadyState",
					value: function (i, n) {
						return new Promise(function (s) {
							var a = function l() {
								i.readyState === n
									? s()
									: i.addEventListener(
											"readystatechange",
											l,
											{ once: !0 }
									  );
							};
							a();
						});
					},
				},
			]),
			r
		);
	})(Wa(EventTarget)),
	Zi = new WeakMap(),
	na = new WeakMap(),
	Ft = {},
	Sl = (function () {
		function o(e) {
			var r = this,
				t =
					arguments.length > 1 && arguments[1] !== void 0
						? arguments[1]
						: {};
			if (
				(Hf(this, o),
				window.jQuery &&
					e instanceof jQuery &&
					(e.length > 1 &&
						window.console &&
						console.warn &&
						console.warn(
							"A jQuery object with multiple elements was passed, using the first element."
						),
					(e = e[0])),
				typeof document < "u" &&
					typeof e == "string" &&
					(e = document.getElementById(e)),
				!Qp(e))
			)
				throw new TypeError(
					"You must pass either a valid element or a valid id."
				);
			if (e.nodeName !== "IFRAME") {
				var i = e.querySelector("iframe");
				i && (e = i);
			}
			if (e.nodeName === "IFRAME" && !Gi(e.getAttribute("src") || ""))
				throw new Error(
					"The player element passed isn’t a Vimeo embed."
				);
			if (Zi.has(e)) return Zi.get(e);
			(this._window = e.ownerDocument.defaultView),
				(this.element = e),
				(this.origin = "*");
			var n = new nr(function (a, l) {
				if (
					((r._onMessage = function (h) {
						if (
							!(
								!Gi(h.origin) ||
								r.element.contentWindow !== h.source
							)
						) {
							r.origin === "*" && (r.origin = h.origin);
							var d = As(h.data),
								u = d && d.event === "error",
								p = u && d.data && d.data.method === "ready";
							if (p) {
								var g = new Error(d.data.message);
								(g.name = d.data.name), l(g);
								return;
							}
							var _ = d && d.event === "ready",
								v = d && d.method === "ping";
							if (_ || v) {
								r.element.setAttribute("data-ready", "true"),
									a();
								return;
							}
							ng(r, d);
						}
					}),
					r._window.addEventListener("message", r._onMessage),
					r.element.nodeName !== "IFRAME")
				) {
					var c = eh(e, t),
						f = Jf(c);
					th(f, c, e)
						.then(function (h) {
							var d = Tl(h, e);
							return (
								(r.element = d),
								(r._originalElement = e),
								ig(e, d),
								Zi.set(r.element, r),
								h
							);
						})
						.catch(l);
				}
			});
			if (
				(na.set(this, n),
				Zi.set(this.element, this),
				this.element.nodeName === "IFRAME" && vi(this, "ping"),
				Ft.isEnabled)
			) {
				var s = function () {
					return Ft.exit();
				};
				(this.fullscreenchangeHandler = function () {
					Ft.isFullscreen
						? Fn(r, "event:exitFullscreen", s)
						: Ms(r, "event:exitFullscreen", s),
						r.ready().then(function () {
							vi(r, "fullscreenchange", Ft.isFullscreen);
						});
				}),
					Ft.on("fullscreenchange", this.fullscreenchangeHandler);
			}
			return this;
		}
		return (
			jf(o, [
				{
					key: "callMethod",
					value: function (r) {
						var t = this,
							i =
								arguments.length > 1 && arguments[1] !== void 0
									? arguments[1]
									: {};
						return new nr(function (n, s) {
							return t
								.ready()
								.then(function () {
									Fn(t, r, { resolve: n, reject: s }),
										vi(t, r, i);
								})
								.catch(s);
						});
					},
				},
				{
					key: "get",
					value: function (r) {
						var t = this;
						return new nr(function (i, n) {
							return (
								(r = $u(r, "get")),
								t
									.ready()
									.then(function () {
										Fn(t, r, { resolve: i, reject: n }),
											vi(t, r);
									})
									.catch(n)
							);
						});
					},
				},
				{
					key: "set",
					value: function (r, t) {
						var i = this;
						return new nr(function (n, s) {
							if (((r = $u(r, "set")), t == null))
								throw new TypeError(
									"There must be a value to set."
								);
							return i
								.ready()
								.then(function () {
									Fn(i, r, { resolve: n, reject: s }),
										vi(i, r, t);
								})
								.catch(s);
						});
					},
				},
				{
					key: "on",
					value: function (r, t) {
						if (!r)
							throw new TypeError("You must pass an event name.");
						if (!t)
							throw new TypeError(
								"You must pass a callback function."
							);
						if (typeof t != "function")
							throw new TypeError(
								"The callback must be a function."
							);
						var i = Ps(this, "event:".concat(r));
						i.length === 0 &&
							this.callMethod("addEventListener", r).catch(
								function () {}
							),
							Fn(this, "event:".concat(r), t);
					},
				},
				{
					key: "off",
					value: function (r, t) {
						if (!r)
							throw new TypeError("You must pass an event name.");
						if (t && typeof t != "function")
							throw new TypeError(
								"The callback must be a function."
							);
						var i = Ms(this, "event:".concat(r), t);
						i &&
							this.callMethod("removeEventListener", r).catch(
								function (n) {}
							);
					},
				},
				{
					key: "loadVideo",
					value: function (r) {
						return this.callMethod("loadVideo", r);
					},
				},
				{
					key: "ready",
					value: function () {
						var r =
							na.get(this) ||
							new nr(function (t, i) {
								i(
									new Error(
										"Unknown player. Probably unloaded."
									)
								);
							});
						return nr.resolve(r);
					},
				},
				{
					key: "addCuePoint",
					value: function (r) {
						var t =
							arguments.length > 1 && arguments[1] !== void 0
								? arguments[1]
								: {};
						return this.callMethod("addCuePoint", {
							time: r,
							data: t,
						});
					},
				},
				{
					key: "removeCuePoint",
					value: function (r) {
						return this.callMethod("removeCuePoint", r);
					},
				},
				{
					key: "enableTextTrack",
					value: function (r, t) {
						if (!r)
							throw new TypeError("You must pass a language.");
						return this.callMethod("enableTextTrack", {
							language: r,
							kind: t,
						});
					},
				},
				{
					key: "disableTextTrack",
					value: function () {
						return this.callMethod("disableTextTrack");
					},
				},
				{
					key: "pause",
					value: function () {
						return this.callMethod("pause");
					},
				},
				{
					key: "play",
					value: function () {
						return this.callMethod("play");
					},
				},
				{
					key: "requestFullscreen",
					value: function () {
						return Ft.isEnabled
							? Ft.request(this.element)
							: this.callMethod("requestFullscreen");
					},
				},
				{
					key: "exitFullscreen",
					value: function () {
						return Ft.isEnabled
							? Ft.exit()
							: this.callMethod("exitFullscreen");
					},
				},
				{
					key: "getFullscreen",
					value: function () {
						return Ft.isEnabled
							? nr.resolve(Ft.isFullscreen)
							: this.get("fullscreen");
					},
				},
				{
					key: "requestPictureInPicture",
					value: function () {
						return this.callMethod("requestPictureInPicture");
					},
				},
				{
					key: "exitPictureInPicture",
					value: function () {
						return this.callMethod("exitPictureInPicture");
					},
				},
				{
					key: "getPictureInPicture",
					value: function () {
						return this.get("pictureInPicture");
					},
				},
				{
					key: "remotePlaybackPrompt",
					value: function () {
						return this.callMethod("remotePlaybackPrompt");
					},
				},
				{
					key: "unload",
					value: function () {
						return this.callMethod("unload");
					},
				},
				{
					key: "destroy",
					value: function () {
						var r = this;
						return new nr(function (t) {
							if (
								(na.delete(r),
								Zi.delete(r.element),
								r._originalElement &&
									(Zi.delete(r._originalElement),
									r._originalElement.removeAttribute(
										"data-vimeo-initialized"
									)),
								r.element &&
									r.element.nodeName === "IFRAME" &&
									r.element.parentNode &&
									(r.element.parentNode.parentNode &&
									r._originalElement &&
									r._originalElement !== r.element.parentNode
										? r.element.parentNode.parentNode.removeChild(
												r.element.parentNode
										  )
										: r.element.parentNode.removeChild(
												r.element
										  )),
								r.element &&
									r.element.nodeName === "DIV" &&
									r.element.parentNode)
							) {
								r.element.removeAttribute(
									"data-vimeo-initialized"
								);
								var i = r.element.querySelector("iframe");
								i &&
									i.parentNode &&
									(i.parentNode.parentNode &&
									r._originalElement &&
									r._originalElement !== i.parentNode
										? i.parentNode.parentNode.removeChild(
												i.parentNode
										  )
										: i.parentNode.removeChild(i));
							}
							r._window.removeEventListener(
								"message",
								r._onMessage
							),
								Ft.isEnabled &&
									Ft.off(
										"fullscreenchange",
										r.fullscreenchangeHandler
									),
								t();
						});
					},
				},
				{
					key: "getAutopause",
					value: function () {
						return this.get("autopause");
					},
				},
				{
					key: "setAutopause",
					value: function (r) {
						return this.set("autopause", r);
					},
				},
				{
					key: "getBuffered",
					value: function () {
						return this.get("buffered");
					},
				},
				{
					key: "getCameraProps",
					value: function () {
						return this.get("cameraProps");
					},
				},
				{
					key: "setCameraProps",
					value: function (r) {
						return this.set("cameraProps", r);
					},
				},
				{
					key: "getChapters",
					value: function () {
						return this.get("chapters");
					},
				},
				{
					key: "getCurrentChapter",
					value: function () {
						return this.get("currentChapter");
					},
				},
				{
					key: "getColor",
					value: function () {
						return this.get("color");
					},
				},
				{
					key: "getColors",
					value: function () {
						return nr.all([
							this.get("colorOne"),
							this.get("colorTwo"),
							this.get("colorThree"),
							this.get("colorFour"),
						]);
					},
				},
				{
					key: "setColor",
					value: function (r) {
						return this.set("color", r);
					},
				},
				{
					key: "setColors",
					value: function (r) {
						if (!Array.isArray(r))
							return new nr(function (n, s) {
								return s(
									new TypeError("Argument must be an array.")
								);
							});
						var t = new nr(function (n) {
								return n(null);
							}),
							i = [
								r[0] ? this.set("colorOne", r[0]) : t,
								r[1] ? this.set("colorTwo", r[1]) : t,
								r[2] ? this.set("colorThree", r[2]) : t,
								r[3] ? this.set("colorFour", r[3]) : t,
							];
						return nr.all(i);
					},
				},
				{
					key: "getCuePoints",
					value: function () {
						return this.get("cuePoints");
					},
				},
				{
					key: "getCurrentTime",
					value: function () {
						return this.get("currentTime");
					},
				},
				{
					key: "setCurrentTime",
					value: function (r) {
						return this.set("currentTime", r);
					},
				},
				{
					key: "getDuration",
					value: function () {
						return this.get("duration");
					},
				},
				{
					key: "getEnded",
					value: function () {
						return this.get("ended");
					},
				},
				{
					key: "getLoop",
					value: function () {
						return this.get("loop");
					},
				},
				{
					key: "setLoop",
					value: function (r) {
						return this.set("loop", r);
					},
				},
				{
					key: "setMuted",
					value: function (r) {
						return this.set("muted", r);
					},
				},
				{
					key: "getMuted",
					value: function () {
						return this.get("muted");
					},
				},
				{
					key: "getPaused",
					value: function () {
						return this.get("paused");
					},
				},
				{
					key: "getPlaybackRate",
					value: function () {
						return this.get("playbackRate");
					},
				},
				{
					key: "setPlaybackRate",
					value: function (r) {
						return this.set("playbackRate", r);
					},
				},
				{
					key: "getPlayed",
					value: function () {
						return this.get("played");
					},
				},
				{
					key: "getQualities",
					value: function () {
						return this.get("qualities");
					},
				},
				{
					key: "getQuality",
					value: function () {
						return this.get("quality");
					},
				},
				{
					key: "setQuality",
					value: function (r) {
						return this.set("quality", r);
					},
				},
				{
					key: "getRemotePlaybackAvailability",
					value: function () {
						return this.get("remotePlaybackAvailability");
					},
				},
				{
					key: "getRemotePlaybackState",
					value: function () {
						return this.get("remotePlaybackState");
					},
				},
				{
					key: "getSeekable",
					value: function () {
						return this.get("seekable");
					},
				},
				{
					key: "getSeeking",
					value: function () {
						return this.get("seeking");
					},
				},
				{
					key: "getTextTracks",
					value: function () {
						return this.get("textTracks");
					},
				},
				{
					key: "getVideoEmbedCode",
					value: function () {
						return this.get("videoEmbedCode");
					},
				},
				{
					key: "getVideoId",
					value: function () {
						return this.get("videoId");
					},
				},
				{
					key: "getVideoTitle",
					value: function () {
						return this.get("videoTitle");
					},
				},
				{
					key: "getVideoWidth",
					value: function () {
						return this.get("videoWidth");
					},
				},
				{
					key: "getVideoHeight",
					value: function () {
						return this.get("videoHeight");
					},
				},
				{
					key: "getVideoUrl",
					value: function () {
						return this.get("videoUrl");
					},
				},
				{
					key: "getVolume",
					value: function () {
						return this.get("volume");
					},
				},
				{
					key: "setVolume",
					value: function (r) {
						return this.set("volume", r);
					},
				},
				{
					key: "setTimingSrc",
					value: (function () {
						var e = Si(
							Mt().mark(function t(i, n) {
								var s = this,
									a;
								return Mt().wrap(
									function (c) {
										for (;;)
											switch ((c.prev = c.next)) {
												case 0:
													if (i) {
														c.next = 2;
														break;
													}
													throw new TypeError(
														"A Timing Object must be provided."
													);
												case 2:
													return (
														(c.next = 4),
														this.ready()
													);
												case 4:
													return (
														(a = new hg(
															this,
															i,
															n
														)),
														vi(
															this,
															"notifyTimingObjectConnect"
														),
														a.addEventListener(
															"disconnect",
															function () {
																return vi(
																	s,
																	"notifyTimingObjectDisconnect"
																);
															}
														),
														c.abrupt("return", a)
													);
												case 8:
												case "end":
													return c.stop();
											}
									},
									t,
									this
								);
							})
						);
						function r(t, i) {
							return e.apply(this, arguments);
						}
						return r;
					})(),
				},
			]),
			o
		);
	})();
Qf || ((Ft = cg()), sg(), ag(), lg(), ug());
class dg extends At {
	init() {
		(this.id = this.block.getAttribute("data-id")),
			(this.cover = this.block.classList.contains("video--cover"));
		var e = { id: this.id, background: this.cover };
		(this.player = new Sl(this.block, e)),
			this.cover &&
				Promise.all([
					this.player.getVideoWidth(),
					this.player.getVideoHeight(),
				]).then((r) => {
					const [t, i] = r;
					(this.aspectRatio = t / i), this.updatePosition();
				}),
			(this.updatePosition = this.updatePosition.bind(this));
	}
	initEvents() {
		this.cover && window.addEventListener("resize", this.updatePosition);
	}
	updatePosition() {
		const e = this.block.getBoundingClientRect(),
			r = e.width / e.height;
		r < this.aspectRatio
			? ((this.player.element.style.width = `${
					(this.aspectRatio / r) * 100
			  }%`),
			  (this.player.element.style.height = ""))
			: ((this.player.element.style.height = `${
					(r / this.aspectRatio) * 100
			  }%`),
			  (this.player.element.style.width = ""));
	}
}
J.registerPlugin(ge);
class pg extends At {
	init() {
		const e = {
			wrap: this.block,
			braces: this.block.querySelectorAll(".subtitle__brace"),
			label: this.block.querySelectorAll(".subtitle__label"),
		};
		(this.DOM = e),
			(this.startDelay = Number(this.block.dataset.delay)),
			this.buildOn();
	}
	buildOn() {
		const e = J.timeline({
			defaults: { ease: "power3.out", duration: 0.3 },
			scrollTrigger: { trigger: this.block, start: "top 90%", once: !0 },
		});
		J.set(this.DOM.wrap, { autoAlpha: 1 }),
			xl(() => {
				e.from(this.DOM.label, {
					opacity: 0,
					duration: 0.7,
					delay: this.startDelay,
				})
					.from(
						this.DOM.braces[0],
						{ opacity: 0, xPercent: 100 },
						"<0.1"
					)
					.from(
						this.DOM.braces[1],
						{ opacity: 0, xPercent: -100 },
						"<"
					);
			});
	}
}
J.registerPlugin(zi, wl);
class gg extends At {
	init() {
		const e = {
			wrapper: this.block,
			container: this.block.querySelector(".tools-morelinks__main"),
			carousel: this.block.querySelector(".tools-morelinks__items"),
			items: this.block.querySelectorAll(".tools-morelinks__item"),
		};
		(this.DOM = e), this.initMoreLinks();
	}
	setBounds() {
		zi.get(this.DOM.carousel).applyBounds({
			minX:
				-this.DOM.carousel.offsetWidth +
				this.DOM.container.offsetWidth +
				16,
			maxX: 0,
		});
	}
	createCarousel() {
		zi.create(this.DOM.carousel, {
			type: "x",
			edgeResistance: 1,
			inertia: !0,
			maxDuration: 0.5,
			snap: {
				x: (e) => {
					const r = this.DOM.items[0].offsetWidth,
						t = J.utils.snap(r, e);
					return t === 0 ? 0 : t;
				},
			},
		}),
			this.setBounds();
	}
	initMoreLinks() {
		this.DOM.items &&
			(this.createCarousel(),
			window.addEventListener("resize", this.setBounds.bind(this)));
	}
}
J.registerPlugin(ge);
class _g extends At {
	init() {
		const e = {
			select: this.block.querySelector(".demos__plugins-groups-select"),
			pluginSelect: this.block.querySelector(".demos__plugin-select"),
			plugins: this.block.querySelectorAll(
				".demos__plugins-groups-plugins"
			),
			buttons: this.block.querySelectorAll("[data-demos-btn]"),
			demoButton: this.block.querySelector("[data-js=demo-button]"),
			docsButton: this.block.querySelector("[data-js=docs-button]"),
			iframe: this.block.querySelector(".js-demo-iframe"),
		};
		(this.DOM = e),
			!(!this.DOM.select || !this.DOM.plugins) &&
				((this.demos = [
					{
						label: "Draggable",
						demo: "https://gsap.com/demos/draggable-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/yLGqXzZ/4b6f3a7c39c03c70f5714fcaeb621b74",
					},
					{
						label: "Flip",
						demo: "https://gsap.com/demos/flip-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/abPjLXM/8d966ec68b6049e6e2ef0e8a103350f1",
					},
					{
						label: "MotionPath",
						docs: "/docs/v3/Plugins/MotionPathPlugin/",
						demo: "https://gsap.com/demos/motionpath-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/XWoBypQ/6e2b1f4aa6f8d3eaf58b5dee14dcc047",
					},
					{
						label: "Observer",
						demo: "https://gsap.com/demos/observer-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/MWZBzVx/10b5c6ff57817ae73521e89507b6b098",
					},
					{
						label: "Pixi",
						docs: "/docs/v3/Plugins/PixiPlugin/",
						demo: "https://gsap.com/demos/pixi-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/RwEBEGM/60c48f7b8759c3dfc1d968b7933662ac",
					},
					{
						label: "ScrollTo",
						docs: "/docs/v3/Plugins/ScrollToPlugin/",
						demo: "https://gsap.com/demos/scrollto-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/abPjMPv/c8b66b7c95249052b3ed9083b312c223",
					},
					{
						label: "ScrollTrigger",
						demo: "https://gsap.com/demos/scrolltrigger-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/abPampm/a2d12f3d8397078d3f031aaaba1b5166",
					},
					{
						label: "Text",
						docs: "/docs/v3/Plugins/TextPlugin/",
						demo: "https://gsap.com/demos/text-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/gOZdRqG/5a078fd21ea63c46923f739f2acd35be",
					},
					{
						label: "Physics2D",
						docs: "/docs/v3/Plugins/Physics2DPlugin/",
						demo: "https://gsap.com/demos/physics2d-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/YzdOVbK/9d71c2a8fba370750b141cc79e3b6e78",
					},
					{
						label: "DrawSVG",
						docs: "/docs/v3/Plugins/DrawSVGPlugin/",
						demo: "https://gsap.com/demos/drawsvg-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/VwqEYdr/92153ee6bedcb123888a24e670ce80d0 ",
					},
					{
						label: "PhysicsProps",
						docs: "/docs/v3/Plugins/PhysicsPropsPlugin/",
						demo: "https://gsap.com/demos/physicsprops-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/ZEVqYmb/cac05879b8b3e6c0ffdcac81f02c9371",
					},
					{
						label: "ScrambleText",
						docs: "/docs/v3/Plugins/ScrambleTextPlugin/",
						demo: "https://gsap.com/demos/scrambletext-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/QWzZwxR/3cd896781ae5d2a4525bf403f610718c",
					},
					{
						label: "CustomBounce",
						docs: "/docs/v3/Easing/CustomBounce/",
						demo: "https://gsap.com/demos/custombounce-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/poqxvOz/7abe6c897f47831196296e71f5fa6ea1",
					},
					{
						label: "CustomWiggle",
						docs: "/docs/v3/Easing/CustomWiggle/",
						demo: "https://gsap.com/demos/customwiggle-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/OJrBPoB/c29b6c31b7bf45b8ab0f7c6bb12fe26d",
					},
					{
						label: "MorphSVG",
						docs: "/docs/v3/Plugins/MorphSVGPlugin/",
						demo: "https://gsap.com/demos/morphsvg-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/BavOJVM/5912e6c31ea671cd3bc347b5adf0a599",
					},
					{
						label: "Inertia",
						docs: "/docs/v3/Plugins/InertiaPlugin/",
						demo: "https://gsap.com/demos/inertia-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/NWeLyrq/d669938b4b29c7fcec771f9e6a378382",
					},
					{
						label: "SplitText",
						demo: "https://gsap.com/demos/splittext-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/xxmaNYj/231e5c51fb2885bdeea366bfe5c63c22",
					},
					{
						label: "MotionPathHelper",
						demo: "https://gsap.com/demos/motionpathhelper-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/WNLgVbg/b1f427b4b5ab608a0e5eac3856aed105",
					},
					{
						label: "GSDevTools",
						demo: "https://gsap.com/demos/gsdevtools-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/bGOmbNX/6a7faddc3ec1abab17d9213aee03832a ",
					},
					{
						label: "ScrollSmoother",
						demo: "https://gsap.com/demos/scrollsmoother-demo.html",
						codepen:
							"https://codepen.io/GreenSock/pen/GRPYKQb/ba77b64f5f959d5847a0abf52f1f702b",
					},
				]),
				this.handleSelect(),
				this.handlePluginSelect());
	}
	initEvents() {
		const e = "is-active";
		this.DOM.buttons.forEach((r) => {
			r.addEventListener("click", (t) => {
				this.updateDemo(t.target.innerText),
					this.DOM.buttons.forEach((i) => {
						i.classList.remove(e);
					}),
					r.classList.add(e);
			});
		});
	}
	handleSelect() {
		this.DOM.select.addEventListener("change", (e) => {
			this.DOM.plugins.forEach((r) => {
				r.classList.remove("demos__plugins-groups-plugins--active");
			}),
				this.DOM.plugins[this.DOM.select.value].classList.add(
					"demos__plugins-groups-plugins--active"
				);
		});
	}
	handlePluginSelect() {
		this.DOM.pluginSelect.addEventListener("change", (e) => {
			this.updateDemo(this.DOM.pluginSelect.value);
		});
	}
	findDemosByLabel(e) {
		const r = e.toLowerCase();
		for (const t of this.demos)
			if (t.label.toLowerCase() === r)
				return { demo: t.demo, codepen: t.codepen, docs: t.docs };
		return { demo: null, codepen: null };
	}
	updateDemo(e) {
		const { demo: r, codepen: t, docs: i } = this.findDemosByLabel(e);
		(this.DOM.iframe.src = r), this.DOM.demoButton.setAttribute("href", t);
		let n = i && i.length ? i : `/docs/v3/Plugins/${e}`;
		this.DOM.docsButton.setAttribute("href", n);
	}
}
class mg extends At {
	init() {
		const e = {
			items: this.block.querySelectorAll(".testimonials__item"),
			controls: this.block.querySelectorAll(
				".testimonials__control--button"
			),
			previous: this.block.querySelector(".prev"),
			next: this.block.querySelector(".next"),
		};
		(this.el = e),
			(this.previousIndex = 0),
			(this.currentIndex = 0),
			(this.controlIndex = 0),
			this.handleNavigation(),
			(this.navigateToNextSlide = this.navigateToNextSlide.bind(this));
	}
	handleNavigation() {
		this.el.controls.forEach((e) => {
			e.addEventListener("click", (r) => {
				const t = parseInt(r.target.dataset.index);
				this.updateCurrent(t);
			});
		}),
			this.el.previous.addEventListener("click", () => {
				this.navigateToPreviousSlide();
			}),
			this.el.next.addEventListener("click", () => {
				this.navigateToNextSlide();
			});
	}
	navigateToPreviousSlide() {
		const e =
			this.currentIndex > 0
				? this.currentIndex - 1
				: this.el.items.length - 1;
		this.updateCurrent(e);
	}
	navigateToNextSlide() {
		const e =
			this.currentIndex < this.el.items.length - 1
				? this.currentIndex + 1
				: 0;
		this.updateCurrent(e);
	}
	updateCurrent(e) {
		this.disableButtons(),
			(this.currentIndex = e),
			this.handleTestimonialState(),
			this.transitionOut();
	}
	transitionOut() {
		const e = this.previousIndex,
			t = this.el.items[e],
			i = {
				authorName: t.querySelector(".testimonials__author--name"),
				authorFlair: t.querySelector(".testimonials__author--flair"),
				quote: t.querySelector(".testimonials__quote"),
				image: t.querySelector(".testimonials__image"),
				imageClip: t.querySelector(".tesimonials__image--clip"),
			};
		J.timeline({
			default: { ease: "power3.in" },
			onComplete: () => {
				this.transitionIn();
			},
		})
			.to(
				[i.authorName, i.quote],
				{ x: -40, autoAlpha: 0, duration: 0.3 },
				0
			)
			.to(i.image, { autoAlpha: 0, duration: 0.3 }, 0)
			.to(i.authorFlair, { scaleX: 0, duration: 0.3 }, 0);
	}
	transitionIn() {
		const e = this.currentIndex,
			t = this.el.items[e],
			i = {
				authorName: t.querySelector(".testimonials__author--name"),
				authorFlair: t.querySelector(".testimonials__author--flair"),
				quote: t.querySelector(".testimonials__quote"),
				image: t.querySelector(".testimonials__image"),
				imageClip: t.querySelector(".tesimonials__image--clip"),
			};
		J.timeline({
			delay: 0.1,
			defaults: { ease: "power3.out" },
			onComplete: () => {
				this.enableButtons();
			},
		})
			.fromTo(i.image, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 })
			.fromTo(
				i.quote,
				{ x: -40, autoAlpha: 0 },
				{ x: 0, autoAlpha: 1, duration: 0.4 },
				0.05
			)
			.fromTo(
				i.authorName,
				{ x: -40, autoAlpha: 0 },
				{ x: 0, autoAlpha: 1, duration: 0.4 },
				0.15
			)
			.fromTo(
				i.authorFlair,
				{ scaleX: 0 },
				{ scaleX: 1, duration: 0.4 },
				0.15
			);
	}
	disableButtons() {
		this.el.controls.forEach((e) => {
			e.disabled = !0;
		}),
			(this.el.previous.disabled = !0),
			(this.el.next.disabled = !0);
	}
	enableButtons() {
		(this.previousIndex = this.currentIndex),
			this.el.controls.forEach((e) => {
				e.disabled = !1;
			}),
			(this.el.previous.disabled = !1),
			(this.el.next.disabled = !1);
	}
	handleTestimonialState() {
		const e = this.currentIndex,
			r = this.el.items,
			t = this.el.controls;
		this.el.items.forEach((i) =>
			i.classList.remove("testimonials__item--active")
		),
			this.el.controls.forEach((i) =>
				i.classList.remove("testimonials__control--active")
			),
			r[e].classList.add("testimonials__item--active"),
			t[e].classList.add("testimonials__control--active");
	}
}
J.registerPlugin(Pn);
class yg extends At {
	init() {
		const e = J.utils.selector(this.block),
			r = {
				block: this.block,
				get: e(".yo-btn__word:first-child"),
				gsap: e(".yo-btn__word:last-child"),
				icons: e(".yo-btn__button svg"),
				circles: e("#btn-circles"),
				windmill: e("#btn-windmill"),
				square: e("#btn-square"),
				star: e("#btn-star"),
			};
		(this.DOM = r),
			(this.eases = {
				airtime: Pn.create(
					"custom",
					"M0,0 C0.05,0.356 0.377,0.435 0.5,0.5 0.61,0.558 0.948,0.652 1,1 "
				),
				rotaaaaate: Pn.create(
					"custom",
					"M0,0 C0.148,0.346 0.254,0.444 0.5,0.5 0.751,0.557 0.852,0.646 1,1 "
				),
			}),
			(this.playing = !1),
			(this.tl = this.createTimeline()),
			(this.playTimeline = this.playTimeline.bind(this));
	}
	initEvents() {
		J.matchMedia().add(
			"(min-width: 1240px) and (prefers-reduced-motion: no-preference)",
			() => (
				this.DOM.block.addEventListener(
					"mouseenter",
					this.playTimeline
				),
				() => {
					this.DOM.block.removeEventListener(
						"mouseenter",
						this.playTimeline
					);
				}
			)
		);
	}
	createTimeline() {
		const e = J.timeline({
			defaults: { duration: 1 },
			paused: !0,
			onStart: () => {
				this.playing = !0;
			},
			onComplete: () => {
				this.playing = !1;
			},
		});
		return (
			J.set(
				[
					this.DOM.circles,
					this.DOM.windmill,
					this.DOM.square,
					this.DOM.star,
				],
				{ scale: 0 }
			),
			e
				.set(
					[
						this.DOM.circles,
						this.DOM.windmill,
						this.DOM.square,
						this.DOM.star,
					],
					{ scale: 0, x: 0, y: 10, rotateZ: 0 }
				)
				.set(this.DOM.icons[0], { yPercent: -140 })
				.set(this.DOM.icons[1], { yPercent: 0 })
				.to(this.DOM.get, {
					keyframes: [
						{ x: -30, ease: "power4.out" },
						{ x: 0, ease: "power4.in" },
					],
				})
				.to(
					this.DOM.gsap,
					{
						keyframes: [
							{ x: 30, ease: "power4.out" },
							{ x: 0, ease: "power4.in" },
						],
					},
					"<"
				)
				.to(
					this.DOM.icons[0],
					{ yPercent: 0, duration: 0.6, ease: "power3.in" },
					"<.3"
				)
				.to(
					this.DOM.icons[1],
					{ yPercent: 140, duration: 0.6, ease: "power3.out" },
					"<"
				)
				.to(
					[
						this.DOM.circles,
						this.DOM.windmill,
						this.DOM.square,
						this.DOM.star,
					],
					{
						keyframes: [
							{ scale: 0, zIndex: 2, duration: 0 },
							{ y: () => J.utils.random(-80, -120), scale: 1 },
							{ zIndex: -1, duration: 0.05 },
							{ y: 0, scale: 0.3 },
						],
						ease: this.eases.airtime,
						stagger: 0.15,
					},
					"<"
				)
				.to(
					[
						this.DOM.circles,
						this.DOM.windmill,
						this.DOM.square,
						this.DOM.star,
					],
					{
						x: () => J.utils.random(-50, 100),
						rotateZ: () => -360,
						ease: this.eases.rotaaaaate,
						stagger: 0.15,
					},
					"<"
				),
			e
		);
	}
	playTimeline() {
		this.playing || this.tl.invalidate().play(0);
	}
}
class vg extends At {
	init() {
		const e = {
			block: this.block,
			video: this.block.querySelector("video"),
		};
		this.DOM = e;
	}
	initEvents() {
		J.matchMedia().add(
			"(prefers-reduced-motion: no-preference) and (min-width: 1240px)",
			() => {
				this.DOM.block.addEventListener("mouseenter", () => {
					this.playVideo();
				}),
					this.DOM.block.addEventListener("mouseleave", () => {
						this.stopVideo();
					});
			}
		);
	}
	playVideo() {
		this.pauseTimeout && clearTimeout(this.pauseTimeout),
			(this.DOM.video.currentTime = 0),
			this.DOM.video.play();
	}
	stopVideo() {
		this.pauseTimeout = setTimeout(() => {
			this.DOM.video.pause();
		}, 1e3);
	}
}
J.registerPlugin(Ur);
class bg extends At {
	init() {
		xl(() => {
			Ur.create({ smooth: 1.8, effects: !0 }),
				document.body.classList.add("has-smooth-scroll");
		});
	}
}
function wg(o, e) {
	for (var r = 0; r < e.length; r++) {
		var t = e[r];
		(t.enumerable = t.enumerable || !1),
			(t.configurable = !0),
			"value" in t && (t.writable = !0),
			Object.defineProperty(o, t.key, t);
	}
}
function Go(o) {
	return (
		(function (e) {
			if (Array.isArray(e)) return oa(e);
		})(o) ||
		(function (e) {
			if (typeof Symbol < "u" && Symbol.iterator in Object(e))
				return Array.from(e);
		})(o) ||
		(function (e, r) {
			if (e) {
				if (typeof e == "string") return oa(e, r);
				var t = Object.prototype.toString.call(e).slice(8, -1);
				if (
					(t === "Object" &&
						e.constructor &&
						(t = e.constructor.name),
					t === "Map" || t === "Set")
				)
					return Array.from(e);
				if (
					t === "Arguments" ||
					/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
				)
					return oa(e, r);
			}
		})(o) ||
		(function () {
			throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
		})()
	);
}
function oa(o, e) {
	(e == null || e > o.length) && (e = o.length);
	for (var r = 0, t = new Array(e); r < e; r++) t[r] = o[r];
	return t;
}
var Yu,
	sa,
	bi,
	aa,
	qu,
	Ha =
		((Yu = [
			"a[href]",
			"area[href]",
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			"select:not([disabled]):not([aria-hidden])",
			"textarea:not([disabled]):not([aria-hidden])",
			"button:not([disabled]):not([aria-hidden])",
			"iframe",
			"object",
			"embed",
			"[contenteditable]",
			'[tabindex]:not([tabindex^="-"])',
		]),
		(sa = (function () {
			function o(t) {
				var i = t.targetModal,
					n = t.triggers,
					s = n === void 0 ? [] : n,
					a = t.onShow,
					l = a === void 0 ? function () {} : a,
					c = t.onClose,
					f = c === void 0 ? function () {} : c,
					h = t.openTrigger,
					d = h === void 0 ? "data-micromodal-trigger" : h,
					u = t.closeTrigger,
					p = u === void 0 ? "data-micromodal-close" : u,
					g = t.openClass,
					_ = g === void 0 ? "is-open" : g,
					v = t.disableScroll,
					y = v !== void 0 && v,
					m = t.disableFocus,
					w = m !== void 0 && m,
					b = t.awaitCloseAnimation,
					T = b !== void 0 && b,
					k = t.awaitOpenAnimation,
					S = k !== void 0 && k,
					C = t.debugMode,
					$ = C !== void 0 && C;
				(function (B, M) {
					if (!(B instanceof M))
						throw new TypeError(
							"Cannot call a class as a function"
						);
				})(this, o),
					(this.modal = document.getElementById(i)),
					(this.config = {
						debugMode: $,
						disableScroll: y,
						openTrigger: d,
						closeTrigger: p,
						openClass: _,
						onShow: l,
						onClose: f,
						awaitCloseAnimation: T,
						awaitOpenAnimation: S,
						disableFocus: w,
					}),
					s.length > 0 && this.registerTriggers.apply(this, Go(s)),
					(this.onClick = this.onClick.bind(this)),
					(this.onKeydown = this.onKeydown.bind(this));
			}
			var e, r;
			return (
				(e = o),
				(r = [
					{
						key: "registerTriggers",
						value: function () {
							for (
								var t = this,
									i = arguments.length,
									n = new Array(i),
									s = 0;
								s < i;
								s++
							)
								n[s] = arguments[s];
							n.filter(Boolean).forEach(function (a) {
								a.addEventListener("click", function (l) {
									return t.showModal(l);
								});
							});
						},
					},
					{
						key: "showModal",
						value: function () {
							var t = this,
								i =
									arguments.length > 0 &&
									arguments[0] !== void 0
										? arguments[0]
										: null;
							if (
								((this.activeElement = document.activeElement),
								this.modal.setAttribute("aria-hidden", "false"),
								this.modal.classList.add(this.config.openClass),
								this.scrollBehaviour("disable"),
								this.addEventListeners(),
								this.config.awaitOpenAnimation)
							) {
								var n = function s() {
									t.modal.removeEventListener(
										"animationend",
										s,
										!1
									),
										t.setFocusToFirstNode();
								};
								this.modal.addEventListener(
									"animationend",
									n,
									!1
								);
							} else this.setFocusToFirstNode();
							this.config.onShow(
								this.modal,
								this.activeElement,
								i
							);
						},
					},
					{
						key: "closeModal",
						value: function () {
							var t =
									arguments.length > 0 &&
									arguments[0] !== void 0
										? arguments[0]
										: null,
								i = this.modal;
							if (
								(this.modal.setAttribute("aria-hidden", "true"),
								this.removeEventListeners(),
								this.scrollBehaviour("enable"),
								this.activeElement &&
									this.activeElement.focus &&
									this.activeElement.focus(),
								this.config.onClose(
									this.modal,
									this.activeElement,
									t
								),
								this.config.awaitCloseAnimation)
							) {
								var n = this.config.openClass;
								this.modal.addEventListener(
									"animationend",
									function s() {
										i.classList.remove(n),
											i.removeEventListener(
												"animationend",
												s,
												!1
											);
									},
									!1
								);
							} else i.classList.remove(this.config.openClass);
						},
					},
					{
						key: "closeModalById",
						value: function (t) {
							(this.modal = document.getElementById(t)),
								this.modal && this.closeModal();
						},
					},
					{
						key: "scrollBehaviour",
						value: function (t) {
							if (this.config.disableScroll) {
								var i = document.querySelector("body");
								switch (t) {
									case "enable":
										Object.assign(i.style, {
											overflow: "",
										});
										break;
									case "disable":
										Object.assign(i.style, {
											overflow: "hidden",
										});
								}
							}
						},
					},
					{
						key: "addEventListeners",
						value: function () {
							this.modal.addEventListener(
								"touchstart",
								this.onClick
							),
								this.modal.addEventListener(
									"click",
									this.onClick
								),
								document.addEventListener(
									"keydown",
									this.onKeydown
								);
						},
					},
					{
						key: "removeEventListeners",
						value: function () {
							this.modal.removeEventListener(
								"touchstart",
								this.onClick
							),
								this.modal.removeEventListener(
									"click",
									this.onClick
								),
								document.removeEventListener(
									"keydown",
									this.onKeydown
								);
						},
					},
					{
						key: "onClick",
						value: function (t) {
							(t.target.hasAttribute(this.config.closeTrigger) ||
								t.target.parentNode.hasAttribute(
									this.config.closeTrigger
								)) &&
								(t.preventDefault(),
								t.stopPropagation(),
								this.closeModal(t));
						},
					},
					{
						key: "onKeydown",
						value: function (t) {
							t.keyCode === 27 && this.closeModal(t),
								t.keyCode === 9 && this.retainFocus(t);
						},
					},
					{
						key: "getFocusableNodes",
						value: function () {
							var t = this.modal.querySelectorAll(Yu);
							return Array.apply(void 0, Go(t));
						},
					},
					{
						key: "setFocusToFirstNode",
						value: function () {
							var t = this;
							if (!this.config.disableFocus) {
								var i = this.getFocusableNodes();
								if (i.length !== 0) {
									var n = i.filter(function (s) {
										return !s.hasAttribute(
											t.config.closeTrigger
										);
									});
									n.length > 0 && n[0].focus(),
										n.length === 0 && i[0].focus();
								}
							}
						},
					},
					{
						key: "retainFocus",
						value: function (t) {
							var i = this.getFocusableNodes();
							if (i.length !== 0)
								if (
									((i = i.filter(function (s) {
										return s.offsetParent !== null;
									})),
									this.modal.contains(document.activeElement))
								) {
									var n = i.indexOf(document.activeElement);
									t.shiftKey &&
										n === 0 &&
										(i[i.length - 1].focus(),
										t.preventDefault()),
										!t.shiftKey &&
											i.length > 0 &&
											n === i.length - 1 &&
											(i[0].focus(), t.preventDefault());
								} else i[0].focus();
						},
					},
				]) && wg(e.prototype, r),
				o
			);
		})()),
		(bi = null),
		(aa = function (o) {
			if (!document.getElementById(o))
				return (
					console.warn(
						"MicroModal: ❗Seems like you have missed %c'".concat(
							o,
							"'"
						),
						"background-color: #f8f9fa;color: #50596c;font-weight: bold;",
						"ID somewhere in your code. Refer example below to resolve it."
					),
					console.warn(
						"%cExample:",
						"background-color: #f8f9fa;color: #50596c;font-weight: bold;",
						'<div class="modal" id="'.concat(o, '"></div>')
					),
					!1
				);
		}),
		(qu = function (o, e) {
			if (
				((function (t) {
					t.length <= 0 &&
						(console.warn(
							"MicroModal: ❗Please specify at least one %c'micromodal-trigger'",
							"background-color: #f8f9fa;color: #50596c;font-weight: bold;",
							"data attribute."
						),
						console.warn(
							"%cExample:",
							"background-color: #f8f9fa;color: #50596c;font-weight: bold;",
							'<a href="#" data-micromodal-trigger="my-modal"></a>'
						));
				})(o),
				!e)
			)
				return !0;
			for (var r in e) aa(r);
			return !0;
		}),
		{
			init: function (o) {
				var e = Object.assign(
						{},
						{ openTrigger: "data-micromodal-trigger" },
						o
					),
					r = Go(
						document.querySelectorAll(
							"[".concat(e.openTrigger, "]")
						)
					),
					t = (function (s, a) {
						var l = [];
						return (
							s.forEach(function (c) {
								var f = c.attributes[a].value;
								l[f] === void 0 && (l[f] = []), l[f].push(c);
							}),
							l
						);
					})(r, e.openTrigger);
				if (e.debugMode !== !0 || qu(r, t) !== !1)
					for (var i in t) {
						var n = t[i];
						(e.targetModal = i),
							(e.triggers = Go(n)),
							(bi = new sa(e));
					}
			},
			show: function (o, e) {
				var r = e || {};
				(r.targetModal = o),
					(r.debugMode === !0 && aa(o) === !1) ||
						(bi && bi.removeEventListeners(),
						(bi = new sa(r)).showModal());
			},
			close: function (o) {
				o ? bi.closeModalById(o) : bi.closeModal();
			},
		});
typeof window < "u" && (window.MicroModal = Ha);
class xg extends At {
	init() {
		(this.DOM = { buttons: this.block.querySelectorAll(".button") }),
			Ha.init({ disableScroll: !0 });
	}
	initEvents() {
		this.DOM.buttons.forEach((e) => {
			e.addEventListener("click", () => {
				setTimeout(() => {
					Ha.close(this.block.id);
				}, 10);
			});
		});
	}
}
class Tg extends At {
	init() {}
}
class Sg extends At {
	init() {
		(this.plugins = document.querySelectorAll("[data-plugin]")),
			(this.DOM = {
				clubGsapBadges: this.block.querySelectorAll(
					"[data-club-gsap-badge]"
				),
			}),
			this.createPlugins();
	}
	createPlugins() {
		this.plugins.forEach((e) => {
			switch (e.getAttribute("data-plugin")) {
				case "svg-morph-plugin":
					return new Tg(e);
				default:
					return null;
			}
		});
	}
	initEvents() {
		this.DOM.clubGsapBadges.length &&
			this.DOM.clubGsapBadges.forEach((e) => {
				const r = e.querySelector("svg"),
					t = r.querySelector("path"),
					i = J.timeline({ paused: !0 });
				i
					.to(r, { rotateY: 90, duration: 0.3, ease: "power2.in" })
					.set(t, { fill: "var(--color-shockingly-green)" })
					.to(r, { rotateY: 180, duration: 0.3, ease: "power2.out" }),
					e.addEventListener("mouseenter", () => {
						i.play();
					}),
					e.addEventListener("mouseleave", () => {
						i.reverse();
					});
			});
	}
}
const kg = typeof window < "u";
kg &&
	(J.registerPlugin(J, ge, Ur),
	(window.gsap = J),
	(window.ScrollTrigger = ge),
	(window.ScrollSmoother = Ur));
new qp();
class Pg extends rh {
	createBlock(e, r) {
		switch (e) {
			case "scroll-hero":
				return new bg(r);
			case "brands":
				return new Vp(r);
			case "button":
				return new Xp(r);
			case "demos":
				return new _g(r);
			case "yo-btn":
				return new yg(r);
			case "hover-video":
				return new vg(r);
			case "showcase":
				return new Gp(r);
			case "subtitle":
				return new pg(r);
			case "video":
				return new dg(r);
			case "more-links":
				return new gg(r);
			case "testimonials":
				return new mg(r);
			case "tooltip":
				return new xg(r);
			case "plugins":
				return new Sg(r);
			default:
				return null;
		}
	}
}
new Pg();
export {
	Pn as C,
	At as D,
	wl as I,
	$i as M,
	ge as S,
	Qc as _,
	Ur as a,
	rh as b,
	ms as c,
	Hl as d,
	Rg as e,
	Ta as f,
	J as g,
	Od as h,
	ki as i,
	zi as j,
	Mg as k,
	Gc as l,
	Cg as m,
	Og as n,
	Eg as o,
	Ag as p,
	Dg as q,
	Hc as r,
	Lg as s,
	Fd as t,
	Wd as u,
	Gd as v,
	xl as w,
	Ud as x,
	Cd as y,
};

const clickSound = new Audio("./assets/sound/click.wav");
const contactFailSound = new Audio("./assets/sound/contact_fail.mp3");
const linkSound = new Audio("./assets/sound/link.mp3");
const sendSound = new Audio("./assets/sound/send.mp3");
const profileSound = new Audio("./assets/sound/profile.mp3");
const resumeSound = new Audio("./assets/sound/resume.mp3");
const skillSound = new Audio("./assets/sound/skills.mp3");

function playClickSound() {
	clickSound.currentTime = 0;
	clickSound.play();
}

function playContactFailSound() {
	contactFailSound.currentTime = 0;
	contactFailSound.play();
}

function playlinkSound() {
	linkSound.currentTime = 0;
	linkSound.play();
}

function playSentSound() {
	sendSound.currentTime = 0;
	sendSound.play();
}

function playProfileSound() {
	profileSound.currentTime = 0;
	profileSound.play();
}

function playResumeSound() {
	resumeSound.currentTime = 0;
	resumeSound.play();
}

function playSkillSound() {
	skillSound.currentTime = 0;
	skillSound.play();
}

document.querySelectorAll(".nav-item").forEach((button) => {
	button.addEventListener("click", playClickSound);
});

document.querySelectorAll(".social_icons").forEach((button) => {
	button.addEventListener("click", playlinkSound);
});

document.querySelectorAll(".button--stroke").forEach((button) => {
	button.addEventListener("click", playProfileSound);
});

document.querySelectorAll(".resume_button").forEach((button) => {
	button.addEventListener("click", playResumeSound);
});

document.querySelectorAll(".iconbox").forEach((button) => {
	skillSound.volume = 0.1;
	button.addEventListener("mouseenter", playSkillSound);
});

let isMuted = false;
const sounds = [
  clickSound,
  contactFailSound,
  linkSound,
  sendSound,
  profileSound,
  resumeSound,
  skillSound,
];

function toggleVolume() {
  isMuted = !isMuted;
  sounds.forEach((sound) => {
    sound.muted = isMuted;
  });
}

document.querySelector(".volume-input").addEventListener("change", toggleVolume);

document.addEventListener("DOMContentLoaded", () => {
  isMuted = false;
  sounds.forEach((sound) => {
    sound.muted = false;
  });
});

document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

document.addEventListener("keydown", function (event) {
	if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
		event.preventDefault();
	}
	if (event.ctrlKey && event.key.toLowerCase() === "u") {
		event.preventDefault();
	}
	if (event.key === "F12") {
		event.preventDefault();
	}
});

let originalTitle = document.title;
const titles = [
	"Looking forward to connecting!",
	"Discover more of my work!",
	"Let’s build something great together!",
	"See you back soon!",
	"My portfolio awaits your return",
	"Unlock my projects anytime!",
	"Eager to collaborate?",
	"Dive back into innovation!",
	"Your next hire awaits!",
	"Shaping visions into results!",
	"Collaboration starts with a click!",
	"Let’s elevate our ideas together!",
	"Let’s spark some creativity!",
	"Let’s make magic happen!",
	"Your feedback fuels my passion!",
	"Excited to share my journey!",
	"Transforming ideas into reality!",
	"Crafting solutions together!",
];
function getRandomTitle() {
	const randomIndex = Math.floor(Math.random() * titles.length);
	return titles[randomIndex];
}

document.addEventListener("visibilitychange", function () {
	if (document.hidden) {
		document.title = getRandomTitle() + " 😃";
	} else {
		document.title = originalTitle;
	}
});
document.addEventListener("DOMContentLoaded", function () {
	var el = document.querySelector(".button-bird");
	var text = document.querySelector(".button-bird__text");
	var fe = document.querySelector(".feather");

	el.addEventListener("click", function (event) {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		var name = document.querySelector('input[name="name"]').value;
		var email = document.querySelector('input[name="email"]').value;
		var message = document.querySelector('textarea[name="message"]').value;

		if (name && email && message && emailPattern.test(email)) {
			el.classList.toggle("active");

			if (el.classList.contains("active")) {
				playSentSound();
				text.innerHTML = "Sent!";
				setTimeout(function () {
					let countdown = 2;
					const interval = setInterval(function () {
						fe.style.display = "none";
						text.innerHTML = `Refreshing in ${countdown}..`;
						countdown--;

						if (countdown < 0) {
							clearInterval(interval);
							window.location.href = document.querySelector(
								'input[name="redirect"]'
							).value;
						}
					}, 1000);
				}, 2000);
			}
		}
		if (!name && !email && !message) {
			playContactFailSound();
			text.innerHTML = "Reach Out!";
		} else if (!name || !email || !message || !emailPattern.test(email)) {
			playContactFailSound();
			text.innerHTML = "Hm..Something is wrong";
		}
	});
});