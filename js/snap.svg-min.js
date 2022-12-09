// Snap.svg 0.5.0
//
// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-06

! function(a) {
	var b, c, d = "0.5.0",
		e = "hasOwnProperty",
		f = /[\.\/]/,
		g = /\s*,\s*/,
		h = "*",
		i = function(a, b) {
			return a - b
		},
		j = {
			n: {}
		},
		k = function() {
			for (var a = 0, b = this.length; b > a; a++)
				if ("undefined" != typeof this[a]) return this[a]
		},
		l = function() {
			for (var a = this.length; --a;)
				if ("undefined" != typeof this[a]) return this[a]
		},
		m = Object.prototype.toString,
		n = String,
		o = Array.isArray || function(a) {
			return a instanceof Array || "[object Array]" == m.call(a)
		};
	eve = function(a, d) {
		var e, f = c,
			g = Array.prototype.slice.call(arguments, 2),
			h = eve.listeners(a),
			j = 0,
			m = [],
			n = {},
			o = [],
			p = b;
		o.firstDefined = k, o.lastDefined = l, b = a, c = 0;
		for (var q = 0, r = h.length; r > q; q++) "zIndex" in h[q] && (m.push(h[q].zIndex), h[q].zIndex < 0 && (n[h[q].zIndex] = h[q]));
		for (m.sort(i); m[j] < 0;)
			if (e = n[m[j++]], o.push(e.apply(d, g)), c) return c = f, o;
		for (q = 0; r > q; q++)
			if (e = h[q], "zIndex" in e)
				if (e.zIndex == m[j]) {
					if (o.push(e.apply(d, g)), c) break;
					do
						if (j++, e = n[m[j]], e && o.push(e.apply(d, g)), c) break; while (e)
				} else n[e.zIndex] = e;
		else if (o.push(e.apply(d, g)), c) break;
		return c = f, b = p, o
	}, eve._events = j, eve.listeners = function(a) {
		var b, c, d, e, g, i, k, l, m = o(a) ? a : a.split(f),
			n = j,
			p = [n],
			q = [];
		for (e = 0, g = m.length; g > e; e++) {
			for (l = [], i = 0, k = p.length; k > i; i++)
				for (n = p[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), q = q.concat(b.f || []));
			p = l
		}
		return q
	}, eve.separator = function(a) {
		a ? (a = n(a)
			.replace(/(?=[\.\^\]\[\-])/g, "\\"), a = "[" + a + "]", f = new RegExp(a)) : f = /[\.\/]/
	}, eve.on = function(a, b) {
		if ("function" != typeof b) return function() {};
		for (var c = o(a) ? o(a[0]) ? a : [a] : n(a)
			.split(g), d = 0, e = c.length; e > d; d++) ! function(a) {
			for (var c, d = o(a) ? a : n(a)
				.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
				n: {}
			});
			for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
				if (e.f[g] == b) {
					c = !0;
					break
				}! c && e.f.push(b)
		}(c[d]);
		return function(a) {
			+a == +a && (b.zIndex = +a)
		}
	}, eve.f = function(a) {
		var b = [].slice.call(arguments, 1);
		return function() {
			eve.apply(null, [a, null].concat(b)
				.concat([].slice.call(arguments, 0)))
		}
	}, eve.stop = function() {
		c = 1
	}, eve.nt = function(a) {
		var c = o(b) ? b.join(".") : b;
		return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)")
			.test(c) : c
	}, eve.nts = function() {
		return o(b) ? b : b.split(f)
	}, eve.off = eve.unbind = function(a, b) {
		if (!a) return void(eve._events = j = {
			n: {}
		});
		var c = o(a) ? o(a[0]) ? a : [a] : n(a)
			.split(g);
		if (c.length > 1)
			for (var d = 0, i = c.length; i > d; d++) eve.off(c[d], b);
		else {
			c = o(a) ? a : n(a)
				.split(f);
			var k, l, m, d, i, p, q, r = [j],
				s = [];
			for (d = 0, i = c.length; i > d; d++)
				for (p = 0; p < r.length; p += m.length - 2) {
					if (m = [p, 1], k = r[p].n, c[d] != h) k[c[d]] && (m.push(k[c[d]]), s.unshift({
						n: k,
						name: c[d]
					}));
					else
						for (l in k) k[e](l) && (m.push(k[l]), s.unshift({
							n: k,
							name: l
						}));
					r.splice.apply(r, m)
				}
			for (d = 0, i = r.length; i > d; d++)
				for (k = r[d]; k.n;) {
					if (b) {
						if (k.f) {
							for (p = 0, q = k.f.length; q > p; p++)
								if (k.f[p] == b) {
									k.f.splice(p, 1);
									break
								}! k.f.length && delete k.f
						}
						for (l in k.n)
							if (k.n[e](l) && k.n[l].f) {
								var t = k.n[l].f;
								for (p = 0, q = t.length; q > p; p++)
									if (t[p] == b) {
										t.splice(p, 1);
										break
									}! t.length && delete k.n[l].f
							}
					} else {
						delete k.f;
						for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
					}
					k = k.n
				}
			a: for (d = 0, i = s.length; i > d; d++) {
				k = s[d];
				for (l in k.n[k.name].f) continue a;
				for (l in k.n[k.name].n) continue a;
				delete k.n[k.name]
			}
		}
	}, eve.once = function(a, b) {
		var c = function() {
			return eve.off(a, c), b.apply(this, arguments)
		};
		return eve.on(a, c)
	}, eve.version = d, eve.toString = function() {
		return "You are running Eve " + d
	}, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() {
		return eve
	}) : a.eve = eve
}(this),
function(a, b) {
	if ("function" == typeof define && define.amd) define(["eve"], function(c) {
		return b(a, c)
	});
	else if ("undefined" != typeof exports) {
		var c = require("eve");
		module.exports = b(a, c)
	} else b(a, a.eve)
}(window || this, function(a, b) {
	var c = function(b) {
			var c, d = {},
				e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
					return setTimeout(a, 16, (new Date)
						.getTime()), !0
				},
				f = Array.isArray || function(a) {
					return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
				},
				g = 0,
				h = "M" + (+new Date)
				.toString(36),
				i = function() {
					return h + (g++)
						.toString(36)
				},
				j = Date.now || function() {
					return +new Date
				},
				k = function(a) {
					var b = this;
					if (null == a) return b.s;
					var c = b.s - a;
					b.b += b.dur * c, b.B += b.dur * c, b.s = a
				},
				l = function(a) {
					var b = this;
					return null == a ? b.spd : void(b.spd = a)
				},
				m = function(a) {
					var b = this;
					return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
				},
				n = function() {
					var a = this;
					delete d[a.id], a.update(), b("mina.stop." + a.id, a)
				},
				o = function() {
					var a = this;
					a.pdif || (delete d[a.id], a.update(), a.pdif = a.get() - a.b)
				},
				p = function() {
					var a = this;
					a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, d[a.id] = a, r())
				},
				q = function() {
					var a, b = this;
					if (f(b.start)) {
						a = [];
						for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
					} else a = +b.start + (b.end - b.start) * b.easing(b.s);
					b.set(a)
				},
				r = function(a) {
					if (!a) return void(c || (c = e(r)));
					var f = 0;
					for (var g in d)
						if (d.hasOwnProperty(g)) {
							var h = d[g],
								i = h.get();
							f++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete d[g], h.s = 1, f--, function(a) {
								setTimeout(function() {
									b("mina.finish." + a.id, a)
								})
							}(h)), h.update()
						} c = f ? e(r) : !1
				},
				s = function(a, b, c, e, f, g, h) {
					var j = {
						id: i(),
						start: a,
						end: b,
						b: c,
						s: 0,
						dur: e - c,
						spd: 1,
						get: f,
						set: g,
						easing: h || s.linear,
						status: k,
						speed: l,
						duration: m,
						stop: n,
						pause: o,
						resume: p,
						update: q
					};
					d[j.id] = j;
					var t, u = 0;
					for (t in d)
						if (d.hasOwnProperty(t) && (u++, 2 == u)) break;
					return 1 == u && r(), j
				};
			return s.time = j, s.getById = function(a) {
				return d[a] || null
			}, s.linear = function(a) {
				return a
			}, s.easeout = function(a) {
				return Math.pow(a, 1.7)
			}, s.easein = function(a) {
				return Math.pow(a, .48)
			}, s.easeinout = function(a) {
				if (1 == a) return 1;
				if (0 == a) return 0;
				var b = .48 - a / 1.04,
					c = Math.sqrt(.1734 + b * b),
					d = c - b,
					e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
					f = -c - b,
					g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
					h = e + g + .5;
				return 3 * (1 - h) * h * h + h * h * h
			}, s.backin = function(a) {
				if (1 == a) return 1;
				var b = 1.70158;
				return a * a * ((b + 1) * a - b)
			}, s.backout = function(a) {
				if (0 == a) return 0;
				a -= 1;
				var b = 1.70158;
				return a * a * ((b + 1) * a + b) + 1
			}, s.elastic = function(a) {
				return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * (2 * Math.PI) / .3) + 1
			}, s.bounce = function(a) {
				var b, c = 7.5625,
					d = 2.75;
				return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
			}, a.mina = s, s
		}("undefined" == typeof b ? function() {} : b),
		d = function(a) {
			function c(a, b) {
				if (a) {
					if (a.nodeType) return w(a);
					if (e(a, "array") && c.set) return c.set.apply(c, a);
					if (a instanceof s) return a;
					if (null == b) return a = y.doc.querySelector(String(a)), w(a)
				}
				return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
			}

			function d(a, b) {
				if (b) {
					if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
					if (1 == a.nodeType) {
						for (var c in b)
							if (b[z](c)) {
								var e = A(b[c]);
								e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
							}
					} else "text" in b && (a.nodeValue = b.text)
				} else a = y.doc.createElementNS(U, a);
				return a
			}

			function e(a, b) {
				return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a)
					.slice(8, -1)
					.toLowerCase() == b
			}

			function f(a) {
				if ("function" == typeof a || Object(a) !== a) return a;
				var b = new a.constructor;
				for (var c in a) a[z](c) && (b[c] = f(a[c]));
				return b
			}

			function h(a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return a.push(a.splice(c, 1)[0])
			}

			function i(a, b, c) {
				function d() {
					var e = Array.prototype.slice.call(arguments, 0),
						f = e.join("鈵€"),
						g = d.cache = d.cache || {},
						i = d.count = d.count || [];
					return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
				}
				return d
			}

			function j(a, b, c, d, e, f) {
				if (null == e) {
					var g = a - c,
						h = b - d;
					return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
				}
				return j(a, b, e, f) - j(c, d, e, f)
			}

			function k(a) {
				return a % 360 * H / 180
			}

			function l(a) {
				return 180 * a / H % 360
			}

			function m(a) {
				var b = [];
				return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
					return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, D.tan(k(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, D.tan(k(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a
				}), b
			}

			function n(a, b) {
				var d = aa(a),
					e = new c.Matrix;
				if (d)
					for (var f = 0, g = d.length; g > f; f++) {
						var h, i, j, k, l, m = d[f],
							n = m.length,
							o = A(m[0])
							.toLowerCase(),
							p = m[0] != o,
							q = p ? e.invert() : 0;
						"t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
					}
				return e
			}

			function o(a) {
				var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
					d = b.select("defs"),
					e = null == d ? !1 : d.node;
				return e || (e = u("defs", b.node)
					.node), e
			}

			function p(a) {
				return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
			}

			function q(a, b, c) {
				function e(a) {
					if (null == a) return I;
					if (a == +a) return a;
					d(j, {
						width: a
					});
					try {
						return j.getBBox()
							.width
					} catch (b) {
						return 0
					}
				}

				function f(a) {
					if (null == a) return I;
					if (a == +a) return a;
					d(j, {
						height: a
					});
					try {
						return j.getBBox()
							.height
					} catch (b) {
						return 0
					}
				}

				function g(d, e) {
					null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
				}
				var h = p(a)
					.node,
					i = {},
					j = h.querySelector(".svg---mgr");
				switch (j || (j = d("rect"), d(j, {
					x: -9e9,
					y: -9e9,
					width: 10,
					height: 10,
					"class": "svg---mgr",
					fill: "none"
				}), h.appendChild(j)), a.type) {
					case "rect":
						g("rx", e), g("ry", f);
					case "image":
						g("width", e), g("height", f);
					case "text":
						g("x", e), g("y", f);
						break;
					case "circle":
						g("cx", e), g("cy", f), g("r", e);
						break;
					case "ellipse":
						g("cx", e), g("cy", f), g("rx", e), g("ry", f);
						break;
					case "line":
						g("x1", e), g("x2", e), g("y1", f), g("y2", f);
						break;
					case "marker":
						g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
						break;
					case "radialGradient":
						g("fx", e), g("fy", f);
						break;
					case "tspan":
						g("dx", e), g("dy", f);
						break;
					default:
						g(b, e)
				}
				return h.removeChild(j), i
			}

			function r(a) {
				e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
				for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
				for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
					d.appendChild(a.node)
				}) : d.appendChild(a[b].node);
				var f = d.childNodes;
				for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
				return this
			}

			function s(a) {
				if (a.snap in V) return V[a.snap];
				var b;
				try {
					b = a.ownerSVGElement
				} catch (c) {}
				this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
				var d = this.id = S(this);
				if (this.anims = {}, this._ = {
					transform: []
				}, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
					g: 1,
					mask: 1,
					pattern: 1,
					symbol: 1
				})
					for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e])
			}

			function t(a) {
				this.node = a
			}

			function u(a, b) {
				var c = d(a);
				b.appendChild(c);
				var e = w(c);
				return e
			}

			function v(a, b) {
				var c, e, f, g = v.prototype;
				if (a && a.tagName && "svg" == a.tagName.toLowerCase()) {
					if (a.snap in V) return V[a.snap];
					var h = a.ownerDocument;
					c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
					for (var i in g) g[z](i) && (c[i] = g[i]);
					c.paper = c.root = c
				} else c = u("svg", y.doc.body), d(c.node, {
					height: b,
					version: 1.1,
					width: a,
					xmlns: U
				});
				return c
			}

			function w(a) {
				return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a
			}

			function x(a, b) {
				for (var c = 0, d = a.length; d > c; c++) {
					var e = {
							type: a[c].type,
							attr: a[c].attr()
						},
						f = a[c].children();
					b.push(e), f.length && x(f, e.childNodes = [])
				}
			}
			c.version = "0.5.1", c.toString = function() {
				return "Snap v" + this.version
			}, c._ = {};
			var y = {
				win: a.window,
				doc: a.window.document
			};
			c._.glob = y;
			var z = "hasOwnProperty",
				A = String,
				B = parseFloat,
				C = parseInt,
				D = Math,
				E = D.max,
				F = D.min,
				G = D.abs,
				H = (D.pow, D.PI),
				I = (D.round, ""),
				J = Object.prototype.toString,
				K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
				L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
				M = {
					hs: 1,
					rg: 1
				},
				N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
				O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
				P = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
				Q = 0,
				R = "S" + (+new Date)
				.toString(36),
				S = function(a) {
					return (a && a.type ? a.type : I) + R + (Q++)
						.toString(36)
				},
				T = "http://www.w3.org/1999/xlink",
				U = "http://www.w3.org/2000/svg",
				V = {};
			c.url = function(a) {
				return "url('#" + a + "')"
			};
			c._.$ = d, c._.id = S, c.format = function() {
				var a = /\{([^\}]+)\}/g,
					b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
					c = function(a, c, d) {
						var e = d;
						return c.replace(b, function(a, b, c, d, f) {
							b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
						}), e = (null == e || e == d ? a : e) + ""
					};
				return function(b, d) {
					return A(b)
						.replace(a, function(a, b) {
							return c(a, b, d)
						})
				}
			}(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function(a) {
				return D.sin(c.rad(a))
			}, c.tan = function(a) {
				return D.tan(c.rad(a))
			}, c.cos = function(a) {
				return D.cos(c.rad(a))
			}, c.asin = function(a) {
				return c.deg(D.asin(a))
			}, c.acos = function(a) {
				return c.deg(D.acos(a))
			}, c.atan = function(a) {
				return c.deg(D.atan(a))
			}, c.atan2 = function(a) {
				return c.deg(D.atan2(a))
			}, c.angle = j, c.len = function(a, b, d, e) {
				return Math.sqrt(c.len2(a, b, d, e))
			}, c.len2 = function(a, b, c, d) {
				return (a - c) * (a - c) + (b - d) * (b - d)
			}, c.closestPoint = function(a, b, c) {
				function d(a) {
					var d = a.x - b,
						e = a.y - c;
					return d * d + e * e
				}
				for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
				for (k *= .5; k > .5;) {
					var n, o, p, q, r, s;
					(p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
				}
				return e = {
					x: e.x,
					y: e.y,
					length: f,
					distance: Math.sqrt(l)
				}
			}, c.is = e, c.snapTo = function(a, b, c) {
				if (c = e(c, "finite") ? c : 10, e(a, "array")) {
					for (var d = a.length; d--;)
						if (G(a[d] - b) <= c) return a[d]
				} else {
					a = +a;
					var f = b % a;
					if (c > f) return b - f;
					if (f > a - c) return b - f + a
				}
				return b
			}, c.getRGB = i(function(a) {
				if (!a || (a = A(a))
					.indexOf("-") + 1) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: Z
				};
				if ("none" == a) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					toString: Z
				};
				if (!(M[z](a.toLowerCase()
					.substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: Z
				};
				var b, d, f, g, h, i, j = a.match(K);
				return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase()
					.slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "掳" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase()
					.slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "掳" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase()
					.slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
						r: b,
						g: d,
						b: f,
						toString: Z
					}, j.hex = "#" + (16777216 | f | d << 8 | b << 16)
					.toString(16)
					.slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
					r: -1,
					g: -1,
					b: -1,
					hex: "none",
					error: 1,
					toString: Z
				}
			}, c), c.hsb = i(function(a, b, d) {
				return c.hsb2rgb(a, b, d)
					.hex
			}), c.hsl = i(function(a, b, d) {
				return c.hsl2rgb(a, b, d)
					.hex
			}), c.rgb = i(function(a, b, c, d) {
				if (e(d, "finite")) {
					var f = D.round;
					return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
				}
				return "#" + (16777216 | c | b << 8 | a << 16)
					.toString(16)
					.slice(1)
			});
			var W = function(a) {
					var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
						c = "rgb(255, 0, 0)";
					return (W = i(function(a) {
						if ("red" == a.toLowerCase()) return c;
						b.style.color = c, b.style.color = a;
						var d = y.doc.defaultView.getComputedStyle(b, I)
							.getPropertyValue("color");
						return d == c ? null : d
					}))(a)
				},
				X = function() {
					return "hsb(" + [this.h, this.s, this.b] + ")"
				},
				Y = function() {
					return "hsl(" + [this.h, this.s, this.l] + ")"
				},
				Z = function() {
					return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
				},
				$ = function(a, b, d) {
					if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
						var f = c.getRGB(a);
						a = f.r, b = f.g, d = f.b
					}
					return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
				},
				_ = function(a, b, d, f) {
					a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
					var g = {
						r: a,
						g: b,
						b: d,
						opacity: e(f, "finite") ? f : 1,
						hex: c.rgb(a, b, d),
						toString: Z
					};
					return e(f, "finite") && (g.opacity = f), g
				};
			c.color = function(a) {
				var b;
				return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
					hex: "none"
				}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
			}, c.hsb2rgb = function(a, b, c, d) {
				e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
				var f, g, h, i, j;
				return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
			}, c.hsl2rgb = function(a, b, c, d) {
				e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
				var f, g, h, i, j;
				return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
			}, c.rgb2hsb = function(a, b, c) {
				c = $(a, b, c), a = c[0], b = c[1], c = c[2];
				var d, e, f, g;
				return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
					h: d,
					s: e,
					b: f,
					toString: X
				}
			}, c.rgb2hsl = function(a, b, c) {
				c = $(a, b, c), a = c[0], b = c[1], c = c[2];
				var d, e, f, g, h, i;
				return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
					h: d,
					s: e,
					l: f,
					toString: Y
				}
			}, c.parsePathString = function(a) {
				if (!a) return null;
				var b = c.path(a);
				if (b.arr) return c.path.clone(b.arr);
				var d = {
						a: 7,
						c: 6,
						o: 2,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						u: 3,
						z: 0
					},
					f = [];
				return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a)
					.replace(N, function(a, b, c) {
						var e = [],
							g = b.toLowerCase();
						if (c.replace(P, function(a, b) {
							b && e.push(+b)
						}), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
						else
							for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
					}), f.toString = c.path.toString, b.arr = c.path.clone(f), f
			};
			var aa = c.parseTransformString = function(a) {
				if (!a) return null;
				var b = [];
				return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a)
					.replace(O, function(a, c, d) {
						var e = [];
						c.toLowerCase();
						d.replace(P, function(a, b) {
							b && e.push(+b)
						}), b.push([c].concat(e))
					}), b.toString = c.path.toString, b
			};
			c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
			y.doc.contains || y.doc.compareDocumentPosition ? function(a, b) {
				var c = 9 == a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if (b)
					for (; b;)
						if (b = b.parentNode, b == a) return !0;
				return !1
			};
			c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function(a) {
				return a = A(a)
					.replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
			}, c.selectAll = function(a) {
				for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
				return d
			}, setInterval(function() {
				for (var a in V)
					if (V[z](a)) {
						var b = V[a],
							c = b.node;
						("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
					}
			}, 1e4), s.prototype.attr = function(a, c) {
				var d = this,
					f = d.node;
				if (!a) {
					if (1 != f.nodeType) return {
						text: f.nodeValue
					};
					for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
					return h
				}
				if (e(a, "string")) {
					if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d)
						.firstDefined();
					var k = {};
					k[a] = c, a = k
				}
				for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
				return d
			}, c.parse = function(a) {
				var b = y.doc.createDocumentFragment(),
					c = !0,
					d = y.doc.createElement("div");
				if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
					if (c) b = a;
					else
						for (; a.firstChild;) b.appendChild(a.firstChild);
				return new t(b)
			}, c.fragment = function() {
				for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
					var f = a[d];
					f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f)
						.node)
				}
				return new t(b)
			}, c._.make = u, c._.wrap = w, v.prototype.el = function(a, b) {
				var c = u(a, this.node);
				return b && c.attr(b), c
			}, s.prototype.children = function() {
				for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
				return a
			}, s.prototype.toJSON = function() {
				var a = [];
				return x([this], a), a[0]
			}, b.on("snap.util.getattr", function() {
				var a = b.nt();
				a = a.substring(a.lastIndexOf(".") + 1);
				var c = a.replace(/[A-Z]/g, function(a) {
					return "-" + a.toLowerCase()
				});
				return ba[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null)
					.getPropertyValue(c) : d(this.node, a)
			});
			var ba = {
				"alignment-baseline": 0,
				"baseline-shift": 0,
				clip: 0,
				"clip-path": 0,
				"clip-rule": 0,
				color: 0,
				"color-interpolation": 0,
				"color-interpolation-filters": 0,
				"color-profile": 0,
				"color-rendering": 0,
				cursor: 0,
				direction: 0,
				display: 0,
				"dominant-baseline": 0,
				"enable-background": 0,
				fill: 0,
				"fill-opacity": 0,
				"fill-rule": 0,
				filter: 0,
				"flood-color": 0,
				"flood-opacity": 0,
				font: 0,
				"font-family": 0,
				"font-size": 0,
				"font-size-adjust": 0,
				"font-stretch": 0,
				"font-style": 0,
				"font-variant": 0,
				"font-weight": 0,
				"glyph-orientation-horizontal": 0,
				"glyph-orientation-vertical": 0,
				"image-rendering": 0,
				kerning: 0,
				"letter-spacing": 0,
				"lighting-color": 0,
				marker: 0,
				"marker-end": 0,
				"marker-mid": 0,
				"marker-start": 0,
				mask: 0,
				opacity: 0,
				overflow: 0,
				"pointer-events": 0,
				"shape-rendering": 0,
				"stop-color": 0,
				"stop-opacity": 0,
				stroke: 0,
				"stroke-dasharray": 0,
				"stroke-dashoffset": 0,
				"stroke-linecap": 0,
				"stroke-linejoin": 0,
				"stroke-miterlimit": 0,
				"stroke-opacity": 0,
				"stroke-width": 0,
				"text-anchor": 0,
				"text-decoration": 0,
				"text-rendering": 0,
				"unicode-bidi": 0,
				visibility: 0,
				"word-spacing": 0,
				"writing-mode": 0
			};
			b.on("snap.util.attr", function(a) {
					var c = b.nt(),
						e = {};
					c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
					var f = c.replace(/-(\w)/gi, function(a, b) {
							return b.toUpperCase()
						}),
						g = c.replace(/[A-Z]/g, function(a) {
							return "-" + a.toLowerCase()
						});
					ba[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
				}),
				function(a) {}(v.prototype), c.ajax = function(a, c, d, f) {
					var g = new XMLHttpRequest,
						h = S();
					if (g) {
						if (e(c, "function")) f = d, d = c, c = null;
						else if (e(c, "object")) {
							var i = [];
							for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
							c = i.join("&")
						}
						return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
							4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
						}, 4 == g.readyState ? g : (g.send(c), g)
					}
				}, c.load = function(a, b, d) {
					c.ajax(a, function(a) {
						var e = c.parse(a.responseText);
						d ? b.call(d, e) : b(e)
					})
				};
			var ca = function(a) {
				var b = a.getBoundingClientRect(),
					c = a.ownerDocument,
					d = c.body,
					e = c.documentElement,
					f = e.clientTop || d.clientTop || 0,
					h = e.clientLeft || d.clientLeft || 0,
					i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
					j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
				return {
					y: i,
					x: j
				}
			};
			return c.getElementByPoint = function(a, b) {
				var c = this,
					d = (c.canvas, y.doc.elementFromPoint(a, b));
				if (y.win.opera && "svg" == d.tagName) {
					var e = ca(d),
						f = d.createSVGRect();
					f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
					var g = d.getIntersectionList(f, null);
					g.length && (d = g[g.length - 1])
				}
				return d ? w(d) : null
			}, c.plugin = function(a) {
				a(c, s, v, y, t)
			}, y.win.Snap = c, c
		}(a || this);
	return d.plugin(function(c, d, e, f, g) {
		function h(a, b) {
			if (null == b) {
				var d = !0;
				if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new c.Matrix;
				b = c._.svgTransform2string(b)
			} else b = c._.rgTransform.test(b) ? m(b)
				.replace(/\.{3}|\u2026/g, a._.transform || "") : c._.svgTransform2string(b), l(b, "array") && (b = c.path ? c.path.toString.call(b) : m(b)), a._.transform = b;
			var e = c._.transform2matrix(b, a.getBBox(1));
			return d ? e : void(a.matrix = e)
		}

		function i(a) {
			function b(a, b) {
				var d = o(a.node, b);
				d = d && d.match(g), d = d && d[2], d && "#" == d.charAt() && (d = d.substring(1), d && (i[d] = (i[d] || [])
					.concat(function(d) {
						var e = {};
						e[b] = c.url(d), o(a.node, e)
					})))
			}

			function d(a) {
				var b = o(a.node, "xlink:href");
				b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || [])
					.concat(function(b) {
						a.attr("xlink:href", "#" + b)
					})))
			}
			for (var e, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
				e = f[j], b(e, "fill"), b(e, "stroke"), b(e, "filter"), b(e, "mask"), b(e, "clip-path"), d(e);
				var l = o(e.node, "id");
				l && (o(e.node, {
					id: e.id
				}), h.push({
					old: l,
					id: e.id
				}))
			}
			for (j = 0, k = h.length; k > j; j++) {
				var m = i[h[j].old];
				if (m)
					for (var n = 0, p = m.length; p > n; n++) m[n](h[j].id)
			}
		}

		function j(a) {
			return function() {
				var b = a ? "<" + this.type : "",
					c = this.node.attributes,
					d = this.node.childNodes;
				if (a)
					for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
				if (d.length) {
					for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += s(d[e])
						.toString());
					a && (b += "</" + this.type + ">")
				} else a && (b += "/>");
				return b
			}
		}
		var k = d.prototype,
			l = c.is,
			m = String,
			n = c._unit2px,
			o = c._.$,
			p = c._.make,
			q = c._.getSomeDefs,
			r = "hasOwnProperty",
			s = c._.wrap;
		k.getBBox = function(a) {
			if ("tspan" == this.type) return c._.box(this.node.getClientRects()
				.item(0));
			if (!c.Matrix || !c.path) return this.node.getBBox();
			var b = this,
				d = new c.Matrix;
			if (b.removed) return c._.box();
			for (;
				"use" == b.type;)
				if (a || (d = d.add(b.transform()
					.localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
				else {
					var e = b.attr("xlink:href");
					b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
				} var f = b._,
				g = c.path.get[b.type] || c.path.get.deflt;
			try {
				return a ? (f.bboxwt = g ? c.path.getBBox(b.realPath = g(b)) : c._.box(b.node.getBBox()), c._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform()
					.localMatrix, f.bbox = c.path.getBBox(c.path.map(b.realPath, d.add(b.matrix))), c._.box(f.bbox))
			} catch (h) {
				return c._.box()
			}
		};
		var t = function() {
			return this.string
		};
		k.transform = function(a) {
			var b = this._;
			if (null == a) {
				for (var d, e = this, f = new c.Matrix(this.node.getCTM()), g = h(this), i = [g], j = new c.Matrix, k = g.toTransformString(), l = m(g) == m(this.matrix) ? m(b.transform) : k;
					"svg" != e.type && (e = e.parent());) i.push(h(e));
				for (d = i.length; d--;) j.add(i[d]);
				return {
					string: l,
					globalMatrix: f,
					totalMatrix: j,
					localMatrix: g,
					diffMatrix: f.clone()
						.add(g.invert()),
					global: f.toTransformString(),
					total: j.toTransformString(),
					local: k,
					toString: t
				}
			}
			return a instanceof c.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : h(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? o(this.node, {
				gradientTransform: this.matrix
			}) : "pattern" == this.type ? o(this.node, {
				patternTransform: this.matrix
			}) : o(this.node, {
				transform: this.matrix
			})), this
		}, k.parent = function() {
			return s(this.node.parentNode)
		}, k.append = k.add = function(a) {
			if (a) {
				if ("set" == a.type) {
					var b = this;
					return a.forEach(function(a) {
						b.add(a)
					}), this
				}
				a = s(a), this.node.appendChild(a.node), a.paper = this.paper
			}
			return this
		}, k.appendTo = function(a) {
			return a && (a = s(a), a.append(this)), this
		}, k.prepend = function(a) {
			if (a) {
				if ("set" == a.type) {
					var b, c = this;
					return a.forEach(function(a) {
						b ? b.after(a) : c.prepend(a), b = a
					}), this
				}
				a = s(a);
				var d = a.parent();
				this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent()
					.add(), d && d.add()
			}
			return this
		}, k.prependTo = function(a) {
			return a = s(a), a.prepend(this), this
		}, k.before = function(a) {
			if ("set" == a.type) {
				var b = this;
				return a.forEach(function(a) {
						var c = a.parent();
						b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
					}), this.parent()
					.add(), this
			}
			a = s(a);
			var c = a.parent();
			return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent()
				.add(), c && c.add(), a.paper = this.paper, this
		}, k.after = function(a) {
			a = s(a);
			var b = a.parent();
			return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent()
				.add(), b && b.add(), a.paper = this.paper, this
		}, k.insertBefore = function(a) {
			a = s(a);
			var b = this.parent();
			return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent()
				.add(), this
		}, k.insertAfter = function(a) {
			a = s(a);
			var b = this.parent();
			return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent()
				.add(), this
		}, k.remove = function() {
			var a = this.parent();
			return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
		}, k.select = function(a) {
			return s(this.node.querySelector(a))
		}, k.selectAll = function(a) {
			for (var b = this.node.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(s(b[e]));
			return d
		}, k.asPX = function(a, b) {
			return null == b && (b = this.attr(a)), +n(this, a, b)
		}, k.use = function() {
			var a, b = this.node.id;
			return b || (b = this.id, o(this.node, {
				id: b
			})), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? p(this.type, this.node.parentNode) : p("use", this.node.parentNode), o(a.node, {
				"xlink:href": "#" + b
			}), a.original = this, a
		}, k.clone = function() {
			var a = s(this.node.cloneNode(!0));
			return o(a.node, "id") && o(a.node, {
				id: a.id
			}), i(a), a.insertAfter(this), a
		}, k.toDefs = function() {
			var a = q(this);
			return a.appendChild(this.node), this
		}, k.pattern = k.toPattern = function(a, b, c, d) {
			var e = p("pattern", q(this));
			return null == a && (a = this.getBBox()), l(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), o(e.node, {
				x: a,
				y: b,
				width: c,
				height: d,
				patternUnits: "userSpaceOnUse",
				id: e.id,
				viewBox: [a, b, c, d].join(" ")
			}), e.node.appendChild(this.node), e
		}, k.marker = function(a, b, c, d, e, f) {
			var g = p("marker", q(this));
			return null == a && (a = this.getBBox()), l(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), o(g.node, {
				viewBox: [a, b, c, d].join(" "),
				markerWidth: c,
				markerHeight: d,
				orient: "auto",
				refX: e || 0,
				refY: f || 0,
				id: g.id
			}), g.node.appendChild(this.node), g
		};
		var u = {};
		k.data = function(a, d) {
			var e = u[this.id] = u[this.id] || {};
			if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
			if (1 == arguments.length) {
				if (c.is(a, "object")) {
					for (var f in a) a[r](f) && this.data(f, a[f]);
					return this
				}
				return b("snap.data.get." + this.id, this, e[a], a), e[a]
			}
			return e[a] = d, b("snap.data.set." + this.id, this, d, a), this
		}, k.removeData = function(a) {
			return null == a ? u[this.id] = {} : u[this.id] && delete u[this.id][a], this
		}, k.outerSVG = k.toString = j(1), k.innerSVG = j(), k.toDataURL = function() {
			if (a && a.btoa) {
				var b = this.getBBox(),
					d = c.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
						x: +b.x.toFixed(3),
						y: +b.y.toFixed(3),
						width: +b.width.toFixed(3),
						height: +b.height.toFixed(3),
						contents: this.outerSVG()
					});
				return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(d)))
			}
		}, g.prototype.select = k.select, g.prototype.selectAll = k.selectAll
	}), d.plugin(function(a, d, e, f, g) {
		function h(a, b, c) {
			return function(d) {
				var e = d.slice(a, b);
				return 1 == e.length && (e = e[0]), c ? c(e) : e
			}
		}
		var i = d.prototype,
			j = a.is,
			k = String,
			l = "hasOwnProperty",
			m = function(a, b, d, e) {
				"function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
			};
		a._.Animation = m, a.animation = function(a, b, c, d) {
			return new m(a, b, c, d)
		}, i.inAnim = function() {
			var a = this,
				b = [];
			for (var c in a.anims) a.anims[l](c) && ! function(a) {
				b.push({
					anim: new m(a._attrs, a.dur, a.easing, a._callback),
					mina: a,
					curStatus: a.status(),
					status: function(b) {
						return a.status(b)
					},
					stop: function() {
						a.stop()
					}
				})
			}(a.anims[c]);
			return b
		}, a.animate = function(a, d, e, f, g, h) {
			"function" != typeof g || g.length || (h = g, g = c.linear);
			var i = c.time(),
				j = c(a, d, i, i + f, c.time, e, g);
			return h && b.once("mina.finish." + j.id, h), j
		}, i.stop = function() {
			for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
			return this
		}, i.animate = function(a, d, e, f) {
			"function" != typeof e || e.length || (f = e, e = c.linear), a instanceof m && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
			var g, i, n, o, p = [],
				q = [],
				r = {},
				s = this;
			for (var t in a)
				if (a[l](t)) {
					s.equal ? (o = s.equal(t, k(a[t])), g = o.from, i = o.to, n = o.f) : (g = +s.attr(t), i = +a[t]);
					var u = j(g, "array") ? g.length : 1;
					r[t] = h(p.length, p.length + u, n), p = p.concat(g), q = q.concat(i)
				} var v = c.time(),
				w = c(p, q, v, v + d, c.time, function(a) {
					var b = {};
					for (var c in r) r[l](c) && (b[c] = r[c](a));
					s.attr(b)
				}, e);
			return s.anims[w.id] = w, w._attrs = a, w._callback = f, b("snap.animcreated." + s.id, w), b.once("mina.finish." + w.id, function() {
				b.off("mina.*." + w.id), delete s.anims[w.id], f && f.call(s)
			}), b.once("mina.stop." + w.id, function() {
				b.off("mina.*." + w.id), delete s.anims[w.id]
			}), s
		}
	}), d.plugin(function(a, b, c, d, e) {
		function f(a, b, c, d, e, f) {
			return null == b && "[object SVGMatrix]" == g.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
		}
		var g = Object.prototype.toString,
			h = String,
			i = Math,
			j = "";
		! function(b) {
			function c(a) {
				return a[0] * a[0] + a[1] * a[1]
			}

			function d(a) {
				var b = i.sqrt(c(a));
				a[0] && (a[0] /= b), a[1] && (a[1] /= b)
			}
			b.add = function(a, b, c, d, e, g) {
				if (a && a instanceof f) return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
				var h = a * this.a + b * this.c,
					i = a * this.b + b * this.d;
				return this.e += e * this.a + g * this.c, this.f += e * this.b + g * this.d, this.c = c * this.a + d * this.c, this.d = c * this.b + d * this.d, this.a = h, this.b = i, this
			}, f.prototype.multLeft = function(a, b, c, d, e, g) {
				if (a && a instanceof f) return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
				var h = a * this.a + c * this.b,
					i = a * this.c + c * this.d,
					j = a * this.e + c * this.f + e;
				return this.b = b * this.a + d * this.b, this.d = b * this.c + d * this.d, this.f = b * this.e + d * this.f + g, this.a = h, this.c = i, this.e = j, this
			}, b.invert = function() {
				var a = this,
					b = a.a * a.d - a.b * a.c;
				return new f(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
			}, b.clone = function() {
				return new f(this.a, this.b, this.c, this.d, this.e, this.f)
			}, b.translate = function(a, b) {
				return this.e += a * this.a + b * this.c, this.f += a * this.b + b * this.d, this
			}, b.scale = function(a, b, c, d) {
				return null == b && (b = a), (c || d) && this.translate(c, d), this.a *= a, this.b *= a, this.c *= b, this.d *= b, (c || d) && this.translate(-c, -d), this
			}, b.rotate = function(b, c, d) {
				b = a.rad(b), c = c || 0, d = d || 0;
				var e = +i.cos(b)
					.toFixed(9),
					f = +i.sin(b)
					.toFixed(9);
				return this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
			}, b.skewX = function(a) {
				return this.skew(a, 0)
			}, b.skewY = function(a) {
				return this.skew(0, a)
			}, b.skew = function(b, c) {
				b = b || 0, c = c || 0, b = a.rad(b), c = a.rad(c);
				var d = i.tan(b)
					.toFixed(9),
					e = i.tan(c)
					.toFixed(9);
				return this.add(1, e, d, 1, 0, 0)
			}, b.x = function(a, b) {
				return a * this.a + b * this.c + this.e
			}, b.y = function(a, b) {
				return a * this.b + b * this.d + this.f
			}, b.get = function(a) {
				return +this[h.fromCharCode(97 + a)].toFixed(4)
			}, b.toString = function() {
				return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
			}, b.offset = function() {
				return [this.e.toFixed(4), this.f.toFixed(4)]
			}, b.determinant = function() {
				return this.a * this.d - this.b * this.c
			}, b.split = function() {
				var b = {};
				b.dx = this.e, b.dy = this.f;
				var e = [
					[this.a, this.b],
					[this.c, this.d]
				];
				b.scalex = i.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = i.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
				var f = e[0][1],
					g = e[1][1];
				return 0 > g ? (b.rotate = a.deg(i.acos(g)), 0 > f && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(i.asin(f)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
			}, b.toTransformString = function(a) {
				var b = a || this.split();
				return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : j) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : j) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : j))
			}
		}(f.prototype), a.Matrix = f, a.matrix = function(a, b, c, d, e, g) {
			return new f(a, b, c, d, e, g)
		}
	}), d.plugin(function(a, c, d, e, f) {
		function g(d) {
			return function(e) {
				if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this)
					.appendChild(e), e = l(e)), e instanceof c)
					if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
						e.node.id || p(e.node, {
							id: e.id
						});
						var g = q(e.node.id)
					} else g = e.attr(d);
				else if (g = a.color(e), g.error) {
					var h = a(n(this)
							.ownerSVGElement)
						.gradient(e);
					h ? (h.node.id || p(h.node, {
						id: h.id
					}), g = q(h.node.id)) : g = e
				} else g = r(g);
				var i = {};
				i[d] = g, p(this.node, i), this.node.style[d] = t
			}
		}

		function h(a) {
			b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
		}

		function i(a) {
			for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
				var f = c[d];
				3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(i(f)))
			}
			return b
		}

		function j() {
			return b.stop(), this.node.style.fontSize
		}
		var k = a._.make,
			l = a._.wrap,
			m = a.is,
			n = a._.getSomeDefs,
			o = /^url\((['"]?)([^)]+)\1\)$/,
			p = a._.$,
			q = a.url,
			r = String,
			s = a._.separator,
			t = "";
		a.deurl = function(a) {
				var b = String(a)
					.match(o);
				return b ? b[2] : a
			}, b.on("snap.util.attr.mask", function(a) {
				if (a instanceof c || a instanceof f) {
					if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this)
						.appendChild(a), a = l(a)), "mask" == a.type) var d = a;
					else d = k("mask", n(this)), d.node.appendChild(a.node);
					!d.node.id && p(d.node, {
						id: d.id
					}), p(this.node, {
						mask: q(d.id)
					})
				}
			}),
			function(a) {
				b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
			}(function(a) {
				if (a instanceof c || a instanceof f) {
					b.stop();
					for (var d, e = a.node; e;) {
						if ("clipPath" === e.nodeName) {
							d = new c(e);
							break
						}
						if ("svg" === e.nodeName) {
							d = void 0;
							break
						}
						e = e.parentNode
					}
					d || (d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
						id: d.id
					})), p(this.node, {
						"clip-path": q(d.node.id || d.id)
					})
				}
			}), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
		var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
		b.on("snap.util.grad.parse", function(a) {
				function b(a, b) {
					for (var c = (b - h) / (a - i), d = i; a > d; d++) f[d].offset = +(+h + c * (d - i))
						.toFixed(2);
					i = a, h = b
				}
				a = r(a);
				var c = a.match(u);
				if (!c) return null;
				var d = c[1],
					e = c[2],
					f = c[3];
				e = e.split(/\s*,\s*/)
					.map(function(a) {
						return +a == a ? +a : a
					}), 1 == e.length && 0 == e[0] && (e = []), f = f.split("-"), f = f.map(function(a) {
						a = a.split(":");
						var b = {
							color: a[0]
						};
						return a[1] && (b.offset = parseFloat(a[1])), b
					});
				var g = f.length,
					h = 0,
					i = 0;
				g--;
				for (var j = 0; g > j; j++) "offset" in f[j] && b(j, f[j].offset);
				return f[g].offset = f[g].offset || 100, b(g, f[g].offset), {
					type: d,
					params: e,
					stops: f
				}
			}), b.on("snap.util.attr.d", function(c) {
				b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
					d: c
				})
			})(-1), b.on("snap.util.attr.#text", function(a) {
				b.stop(), a = r(a);
				for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
				this.node.appendChild(c)
			})(-1), b.on("snap.util.attr.path", function(a) {
				b.stop(), this.attr({
					d: a
				})
			})(-1), b.on("snap.util.attr.class", function(a) {
				b.stop(), this.node.className.baseVal = a
			})(-1), b.on("snap.util.attr.viewBox", function(a) {
				var c;
				c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
					viewBox: c
				}), b.stop()
			})(-1), b.on("snap.util.attr.transform", function(a) {
				this.transform(a), b.stop()
			})(-1), b.on("snap.util.attr.r", function(a) {
				"rect" == this.type && (b.stop(), p(this.node, {
					rx: a,
					ry: a
				}))
			})(-1), b.on("snap.util.attr.textpath", function(a) {
				if (b.stop(), "text" == this.type) {
					var d, e, f;
					if (!a && this.textPath) {
						for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
						return e.remove(), void delete this.textPath
					}
					if (m(a, "string")) {
						var g = n(this),
							h = l(g.parentNode)
							.path(a);
						g.appendChild(h.node), d = h.id, h.attr({
							id: d
						})
					} else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
						id: d
					})));
					if (d)
						if (e = this.textPath, f = this.node, e) e.attr({
							"xlink:href": "#" + d
						});
						else {
							for (e = p("textPath", {
								"xlink:href": "#" + d
							}); f.firstChild;) e.appendChild(f.firstChild);
							f.appendChild(e), this.textPath = l(e)
						}
				}
			})(-1), b.on("snap.util.attr.text", function(a) {
				if ("text" == this.type) {
					for (var c = this.node, d = function(a) {
						var b = p("tspan");
						if (m(a, "array"))
							for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
						else b.appendChild(e.doc.createTextNode(a));
						return b.normalize && b.normalize(), b
					}; c.firstChild;) c.removeChild(c.firstChild);
					for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
				}
				b.stop()
			})(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
				return b.stop(), this.transform()
			})(-1), b.on("snap.util.getattr.textpath", function() {
				return b.stop(), this.textPath
			})(-1),
			function() {
				function c(c) {
					return function() {
						b.stop();
						var d = e.doc.defaultView.getComputedStyle(this.node, null)
							.getPropertyValue("marker-" + c);
						return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
					}
				}

				function d(a) {
					return function(c) {
						b.stop();
						var d = "marker" + a.charAt(0)
							.toUpperCase() + a.substring(1);
						if ("" == c || !c) return void(this.node.style[d] = "none");
						if ("marker" == c.type) {
							var e = c.node.id;
							return e || p(c.node, {
								id: c.id
							}), void(this.node.style[d] = q(e))
						}
					}
				}
				b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
			}(), b.on("snap.util.getattr.r", function() {
				return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
			})(-1), b.on("snap.util.getattr.text", function() {
				if ("text" == this.type || "tspan" == this.type) {
					b.stop();
					var a = i(this.node);
					return 1 == a.length ? a[0] : a
				}
			})(-1), b.on("snap.util.getattr.#text", function() {
				return this.node.textContent
			})(-1), b.on("snap.util.getattr.fill", function(c) {
				if (!c) {
					b.stop();
					var d = b("snap.util.getattr.fill", this, !0)
						.firstDefined();
					return a(a.deurl(d)) || d
				}
			})(-1), b.on("snap.util.getattr.stroke", function(c) {
				if (!c) {
					b.stop();
					var d = b("snap.util.getattr.stroke", this, !0)
						.firstDefined();
					return a(a.deurl(d)) || d
				}
			})(-1), b.on("snap.util.getattr.viewBox", function() {
				b.stop();
				var c = p(this.node, "viewBox");
				return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
			})(-1), b.on("snap.util.getattr.points", function() {
				var a = p(this.node, "points");
				return b.stop(), a ? a.split(s) : void 0
			})(-1), b.on("snap.util.getattr.path", function() {
				var a = p(this.node, "d");
				return b.stop(), a
			})(-1), b.on("snap.util.getattr.class", function() {
				return this.node.className.baseVal
			})(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
	}), d.plugin(function(a, b, c, d, e) {
		var f = /\S+/g,
			g = String,
			h = b.prototype;
		h.addClass = function(a) {
			var b, c, d, e, h = g(a || "")
				.match(f) || [],
				i = this.node,
				j = i.className.baseVal,
				k = j.match(f) || [];
			if (h.length) {
				for (b = 0; d = h[b++];) c = k.indexOf(d), ~c || k.push(d);
				e = k.join(" "), j != e && (i.className.baseVal = e)
			}
			return this
		}, h.removeClass = function(a) {
			var b, c, d, e, h = g(a || "")
				.match(f) || [],
				i = this.node,
				j = i.className.baseVal,
				k = j.match(f) || [];
			if (k.length) {
				for (b = 0; d = h[b++];) c = k.indexOf(d), ~c && k.splice(c, 1);
				e = k.join(" "), j != e && (i.className.baseVal = e)
			}
			return this
		}, h.hasClass = function(a) {
			var b = this.node,
				c = b.className.baseVal,
				d = c.match(f) || [];
			return !!~d.indexOf(a)
		}, h.toggleClass = function(a, b) {
			if (null != b) return b ? this.addClass(a) : this.removeClass(a);
			var c, d, e, g, h = (a || "")
				.match(f) || [],
				i = this.node,
				j = i.className.baseVal,
				k = j.match(f) || [];
			for (c = 0; e = h[c++];) d = k.indexOf(e), ~d ? k.splice(d, 1) : k.push(e);
			return g = k.join(" "), j != g && (i.className.baseVal = g), this
		}
	}), d.plugin(function(a, c, d, e, f) {
		function g(a) {
			return a
		}

		function h(a) {
			return function(b) {
				return +b.toFixed(3) + a
			}
		}
		var i = {
				"+": function(a, b) {
					return a + b
				},
				"-": function(a, b) {
					return a - b
				},
				"/": function(a, b) {
					return a / b
				},
				"*": function(a, b) {
					return a * b
				}
			},
			j = String,
			k = /[a-z]+$/i,
			l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
		b.on("snap.util.attr", function(a) {
			var c = j(a)
				.match(l);
			if (c) {
				var d = b.nt(),
					e = d.substring(d.lastIndexOf(".") + 1),
					f = this.attr(e),
					g = {};
				b.stop();
				var h = c[3] || "",
					m = f.match(k),
					n = i[c[1]];
				if (m && m == h ? a = n(parseFloat(f), +c[2]) : (f = this.asPX(e), a = n(this.asPX(e), this.asPX(e, c[2] + h))), isNaN(f) || isNaN(a)) return;
				g[e] = a, this.attr(g)
			}
		})(-10), b.on("snap.util.equal", function(a, c) {
			var d = j(this.attr(a) || ""),
				e = j(c)
				.match(l);
			if (e) {
				b.stop();
				var f = e[3] || "",
					m = d.match(k),
					n = i[e[1]];
				return m && m == f ? {
					from: parseFloat(d),
					to: n(parseFloat(d), +e[2]),
					f: h(m)
				} : (d = this.asPX(a), {
					from: d,
					to: n(d, this.asPX(a, e[2] + f)),
					f: g
				})
			}
		})(-10)
	}), d.plugin(function(c, d, e, f, g) {
		var h = e.prototype,
			i = c.is;
		h.rect = function(a, b, c, d, e, f) {
			var g;
			return null == f && (f = e), i(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
				x: a,
				y: b,
				width: c,
				height: d
			}, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
		}, h.circle = function(a, b, c) {
			var d;
			return i(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
				cx: a,
				cy: b,
				r: c
			}), this.el("circle", d)
		};
		var j = function() {
			function a() {
				this.parentNode.removeChild(this)
			}
			return function(b, c) {
				var d = f.doc.createElement("img"),
					e = f.doc.body;
				d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
					c.call(d), d.onload = d.onerror = null, e.removeChild(d)
				}, d.onerror = a, e.appendChild(d), d.src = b
			}
		}();
		h.image = function(a, b, d, e, f) {
				var g = this.el("image");
				if (i(a, "object") && "src" in a) g.attr(a);
				else if (null != a) {
					var h = {
						"xlink:href": a,
						preserveAspectRatio: "none"
					};
					null != b && null != d && (h.x = b, h.y = d), null != e && null != f ? (h.width = e, h.height = f) : j(a, function() {
						c._.$(g.node, {
							width: this.offsetWidth,
							height: this.offsetHeight
						})
					}), c._.$(g.node, h)
				}
				return g
			}, h.ellipse = function(a, b, c, d) {
				var e;
				return i(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
					cx: a,
					cy: b,
					rx: c,
					ry: d
				}), this.el("ellipse", e)
			}, h.path = function(a) {
				var b;
				return i(a, "object") && !i(a, "array") ? b = a : a && (b = {
					d: a
				}), this.el("path", b)
			}, h.group = h.g = function(a) {
				var b = this.el("g");
				return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
			}, h.svg = function(a, b, c, d, e, f, g, h) {
				var j = {};
				return i(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h && (j.viewBox = [e, f, g, h])), this.el("svg", j)
			}, h.mask = function(a) {
				var b = this.el("mask");
				return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
			}, h.ptrn = function(a, b, c, d, e, f, g, h) {
				if (i(a, "object")) var j = a;
				else j = {
					patternUnits: "userSpaceOnUse"
				}, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h ? j.viewBox = [e, f, g, h] : j.viewBox = [a || 0, b || 0, c || 0, d || 0];
				return this.el("pattern", j)
			}, h.use = function(a) {
				return null != a ? (a instanceof d && (a.attr("id") || a.attr({
						id: c._.id(a)
					}), a = a.attr("id")), "#" == String(a)
					.charAt() && (a = a.substring(1)), this.el("use", {
						"xlink:href": "#" + a
					})) : d.prototype.use.call(this)
			}, h.symbol = function(a, b, c, d) {
				var e = {};
				return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
			}, h.text = function(a, b, c) {
				var d = {};
				return i(a, "object") ? d = a : null != a && (d = {
					x: a,
					y: b,
					text: c || ""
				}), this.el("text", d)
			}, h.line = function(a, b, c, d) {
				var e = {};
				return i(a, "object") ? e = a : null != a && (e = {
					x1: a,
					x2: c,
					y1: b,
					y2: d
				}), this.el("line", e)
			}, h.polyline = function(a) {
				arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
				var b = {};
				return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
					points: a
				}), this.el("polyline", b)
			}, h.polygon = function(a) {
				arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
				var b = {};
				return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
					points: a
				}), this.el("polygon", b)
			},
			function() {
				function d() {
					return this.selectAll("stop")
				}

				function e(a, b) {
					var d = l("stop"),
						e = {
							offset: +b + "%"
						};
					a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), l(d, e);
					for (var f, g = this.stops(), h = 0; h < g.length; h++) {
						var i = parseFloat(g[h].attr("offset"));
						if (i > b) {
							this.node.insertBefore(d, g[h].node), f = !0;
							break
						}
					}
					return f || this.node.appendChild(d), this
				}

				function f() {
					if ("linearGradient" == this.type) {
						var a = l(this.node, "x1") || 0,
							b = l(this.node, "x2") || 1,
							d = l(this.node, "y1") || 0,
							e = l(this.node, "y2") || 0;
						return c._.box(a, d, math.abs(b - a), math.abs(e - d))
					}
					var f = this.node.cx || .5,
						g = this.node.cy || .5,
						h = this.node.r || 0;
					return c._.box(f - h, g - h, 2 * h, 2 * h)
				}

				function g(a) {
					var d = a,
						e = this.stops();
					if ("string" == typeof a && (d = b("snap.util.grad.parse", null, "l(0,0,0,1)" + a)
						.firstDefined()
						.stops), c.is(d, "array")) {
						for (var f = 0; f < e.length; f++)
							if (d[f]) {
								var g = c.color(d[f].color),
									h = {
										offset: d[f].offset + "%"
									};
								h["stop-color"] = g.hex, g.opacity < 1 && (h["stop-opacity"] = g.opacity), e[f].attr(h)
							} else e[f].remove();
						for (f = e.length; f < d.length; f++) this.addStop(d[f].color, d[f].offset);
						return this
					}
				}

				function i(a, c) {
					var d, e = b("snap.util.grad.parse", null, c)
						.firstDefined();
					if (!e) return null;
					e.params.unshift(a), d = "l" == e.type.toLowerCase() ? j.apply(0, e.params) : k.apply(0, e.params), e.type != e.type.toLowerCase() && l(d.node, {
						gradientUnits: "userSpaceOnUse"
					});
					for (var f = e.stops, g = f.length, h = 0; g > h; h++) {
						var i = f[h];
						d.addStop(i.color, i.offset)
					}
					return d
				}

				function j(a, b, h, i, j) {
					var k = c._.make("linearGradient", a);
					return k.stops = d, k.addStop = e, k.getBBox = f, k.setStops = g, null != b && l(k.node, {
						x1: b,
						y1: h,
						x2: i,
						y2: j
					}), k
				}

				function k(a, b, g, h, i, j) {
					var k = c._.make("radialGradient", a);
					return k.stops = d, k.addStop = e, k.getBBox = f, null != b && l(k.node, {
						cx: b,
						cy: g,
						r: h
					}), null != i && null != j && l(k.node, {
						fx: i,
						fy: j
					}), k
				}
				var l = c._.$;
				h.gradient = function(a) {
					return i(this.defs, a)
				}, h.gradientLinear = function(a, b, c, d) {
					return j(this.defs, a, b, c, d)
				}, h.gradientRadial = function(a, b, c, d, e) {
					return k(this.defs, a, b, c, d, e)
				}, h.toString = function() {
					var a, b = this.node.ownerDocument,
						d = b.createDocumentFragment(),
						e = b.createElement("div"),
						f = this.node.cloneNode(!0);
					return d.appendChild(e), e.appendChild(f), c._.$(f, {
						xmlns: "http://www.w3.org/2000/svg"
					}), a = e.innerHTML, d.removeChild(d.firstChild), a
				}, h.toDataURL = function() {
					return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
				}, h.clear = function() {
					for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : h.clear.call({
						node: b
					}), b = a
				}
			}()
	}), d.plugin(function(a, b, c, d) {
		function e(a) {
			var b = e.ps = e.ps || {};
			return b[a] ? b[a].sleep = 100 : b[a] = {
				sleep: 100
			}, setTimeout(function() {
				for (var c in b) b[M](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
			}), b[a]
		}

		function f(a, b, c, d) {
			return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
				x: a,
				y: b,
				width: c,
				w: c,
				height: d,
				h: d,
				x2: a + c,
				y2: b + d,
				cx: a + c / 2,
				cy: b + d / 2,
				r1: P.min(c, d) / 2,
				r2: P.max(c, d) / 2,
				r0: P.sqrt(c * c + d * d) / 2,
				path: y(a, b, c, d),
				vb: [a, b, c, d].join(" ")
			}
		}

		function g() {
			return this.join(",")
				.replace(N, "$1")
		}

		function h(a) {
			var b = L(a);
			return b.toString = g, b
		}

		function i(a, b, c, d, e, f, g, h, i) {
			return null == i ? p(a, b, c, d, e, f, g, h) : k(a, b, c, d, e, f, g, h, q(a, b, c, d, e, f, g, h, i))
		}

		function j(c, d) {
			function e(a) {
				return +(+a)
					.toFixed(3)
			}
			return a._.cacher(function(a, f, g) {
				a instanceof b && (a = a.attr("d")), a = G(a);
				for (var h, j, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
					if (l = a[r], "M" == l[0]) h = +l[1], j = +l[2];
					else {
						if (m = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
							if (d && !p.start) {
								if (n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], g) return o;
								p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, h = +l[5], j = +l[6];
								continue
							}
							if (!c && !d) return n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
						}
						q += m, h = +l[5], j = +l[6]
					}
					o += l.shift() + l
				}
				return p.end = o, n = c ? q : d ? p : k(h, j, l[0], l[1], l[2], l[3], l[4], l[5], 1)
			}, null, a._.clone)
		}

		function k(a, b, c, d, e, f, g, h, i) {
			var j = 1 - i,
				k = T(j, 3),
				l = T(j, 2),
				m = i * i,
				n = m * i,
				o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
				p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
				q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
				r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
				s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
				t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
				u = j * a + i * c,
				v = j * b + i * d,
				w = j * e + i * g,
				x = j * f + i * h,
				y = 90 - 180 * P.atan2(q - s, r - t) / Q;
			return {
				x: o,
				y: p,
				m: {
					x: q,
					y: r
				},
				n: {
					x: s,
					y: t
				},
				start: {
					x: u,
					y: v
				},
				end: {
					x: w,
					y: x
				},
				alpha: y
			}
		}

		function l(b, c, d, e, g, h, i, j) {
			a.is(b, "array") || (b = [b, c, d, e, g, h, i, j]);
			var k = F.apply(null, b);
			return f(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
		}

		function m(a, b, c) {
			return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
		}

		function n(a, b) {
			return a = f(a), b = f(b), m(b, a.x, a.y) || m(b, a.x2, a.y) || m(b, a.x, a.y2) || m(b, a.x2, a.y2) || m(a, b.x, b.y) || m(a, b.x2, b.y) || m(a, b.x, b.y2) || m(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
		}

		function o(a, b, c, d, e) {
			var f = -3 * b + 9 * c - 9 * d + 3 * e,
				g = a * f + 6 * b - 12 * c + 6 * d;
			return a * g - 3 * b + 3 * c
		}

		function p(a, b, c, d, e, f, g, h, i) {
			null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
			for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, p = 0; k > p; p++) {
				var q = j * l[p] + j,
					r = o(q, a, c, e, g),
					s = o(q, b, d, f, h),
					t = r * r + s * s;
				n += m[p] * P.sqrt(t)
			}
			return j * n
		}

		function q(a, b, c, d, e, f, g, h, i) {
			if (!(0 > i || p(a, b, c, d, e, f, g, h) < i)) {
				var j, k = 1,
					l = k / 2,
					m = k - l,
					n = .01;
				for (j = p(a, b, c, d, e, f, g, h, m); U(j - i) > n;) l /= 2, m += (i > j ? 1 : -1) * l, j = p(a, b, c, d, e, f, g, h, m);
				return m
			}
		}

		function r(a, b, c, d, e, f, g, h) {
			if (!(S(a, c) < R(e, g) || R(a, c) > S(e, g) || S(b, d) < R(f, h) || R(b, d) > S(f, h))) {
				var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
					j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
					k = (a - c) * (f - h) - (b - d) * (e - g);
				if (k) {
					var l = i / k,
						m = j / k,
						n = +l.toFixed(2),
						o = +m.toFixed(2);
					if (!(n < +R(a, c)
						.toFixed(2) || n > +S(a, c)
						.toFixed(2) || n < +R(e, g)
						.toFixed(2) || n > +S(e, g)
						.toFixed(2) || o < +R(b, d)
						.toFixed(2) || o > +S(b, d)
						.toFixed(2) || o < +R(f, h)
						.toFixed(2) || o > +S(f, h)
						.toFixed(2))) return {
						x: l,
						y: m
					}
				}
			}
		}

		function s(a, b, c) {
			var d = l(a),
				e = l(b);
			if (!n(d, e)) return c ? 0 : [];
			for (var f = p.apply(0, a), g = p.apply(0, b), h = ~~(f / 8), i = ~~(g / 8), j = [], m = [], o = {}, q = c ? 0 : [], s = 0; h + 1 > s; s++) {
				var t = k.apply(0, a.concat(s / h));
				j.push({
					x: t.x,
					y: t.y,
					t: s / h
				})
			}
			for (s = 0; i + 1 > s; s++) t = k.apply(0, b.concat(s / i)), m.push({
				x: t.x,
				y: t.y,
				t: s / i
			});
			for (s = 0; h > s; s++)
				for (var u = 0; i > u; u++) {
					var v = j[s],
						w = j[s + 1],
						x = m[u],
						y = m[u + 1],
						z = U(w.x - v.x) < .001 ? "y" : "x",
						A = U(y.x - x.x) < .001 ? "y" : "x",
						B = r(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
					if (B) {
						if (o[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
						o[B.x.toFixed(4)] = B.y.toFixed(4);
						var C = v.t + U((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
							D = x.t + U((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
						C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? q++ : q.push({
							x: B.x,
							y: B.y,
							t1: C,
							t2: D
						}))
					}
				}
			return q
		}

		function t(a, b) {
			return v(a, b)
		}

		function u(a, b) {
			return v(a, b, 1)
		}

		function v(a, b, c) {
			a = G(a), b = G(b);
			for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
				var q = a[o];
				if ("M" == q[0]) d = h = q[1], e = i = q[2];
				else {
					"C" == q[0] ? (l = [d, e].concat(q.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
					for (var r = 0, t = b.length; t > r; r++) {
						var u = b[r];
						if ("M" == u[0]) f = j = u[1], g = k = u[2];
						else {
							"C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
							var v = s(l, m, c);
							if (c) n += v;
							else {
								for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = r, v[w].bez1 = l, v[w].bez2 = m;
								n = n.concat(v)
							}
						}
					}
				}
			}
			return n
		}

		function w(a, b, c) {
			var d = x(a);
			return m(d, b, c) && v(a, [
				["M", b, c],
				["H", d.x2 + 10]
			], 1) % 2 == 1
		}

		function x(a) {
			var b = e(a);
			if (b.bbox) return L(b.bbox);
			if (!a) return f();
			a = G(a);
			for (var c, d = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
				if (c = a[j], "M" == c[0]) d = c[1], g = c[2], h.push(d), i.push(g);
				else {
					var l = F(d, g, c[1], c[2], c[3], c[4], c[5], c[6]);
					h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), d = c[5], g = c[6]
				} var m = R.apply(0, h),
				n = R.apply(0, i),
				o = S.apply(0, h),
				p = S.apply(0, i),
				q = f(m, n, o - m, p - n);
			return b.bbox = L(q), q
		}

		function y(a, b, c, d, e) {
			if (e) return [
				["M", +a + +e, b],
				["l", c - 2 * e, 0],
				["a", e, e, 0, 0, 1, e, e],
				["l", 0, d - 2 * e],
				["a", e, e, 0, 0, 1, -e, e],
				["l", 2 * e - c, 0],
				["a", e, e, 0, 0, 1, -e, -e],
				["l", 0, 2 * e - d],
				["a", e, e, 0, 0, 1, e, -e],
				["z"]
			];
			var f = [
				["M", a, b],
				["l", c, 0],
				["l", 0, d],
				["l", -c, 0],
				["z"]
			];
			return f.toString = g, f
		}

		function z(a, b, c, d, e) {
			if (null == e && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != e) var f = Math.PI / 180,
				h = a + c * Math.cos(-d * f),
				i = a + c * Math.cos(-e * f),
				j = b + c * Math.sin(-d * f),
				k = b + c * Math.sin(-e * f),
				l = [
					["M", h, j],
					["A", c, c, 0, +(e - d > 180), 0, i, k]
				];
			else l = [
				["M", a, b],
				["m", 0, -d],
				["a", c, d, 0, 1, 1, 0, 2 * d],
				["a", c, d, 0, 1, 1, 0, -2 * d],
				["z"]
			];
			return l.toString = g, l
		}

		function A(b) {
			var c = e(b),
				d = String.prototype.toLowerCase;
			if (c.rel) return h(c.rel);
			a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
			var f = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0,
				m = 0;
			"M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, f.push(["M", i, j]));
			for (var n = m, o = b.length; o > n; n++) {
				var p = f[n] = [],
					q = b[n];
				if (q[0] != d.call(q[0])) switch (p[0] = d.call(q[0]), p[0]) {
					case "a":
						p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i)
							.toFixed(3), p[7] = +(q[7] - j)
							.toFixed(3);
						break;
					case "v":
						p[1] = +(q[1] - j)
							.toFixed(3);
						break;
					case "m":
						k = q[1], l = q[2];
					default:
						for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j))
							.toFixed(3)
				} else {
					p = f[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
					for (var t = 0, u = q.length; u > t; t++) f[n][t] = q[t]
				}
				var v = f[n].length;
				switch (f[n][0]) {
					case "z":
						i = k, j = l;
						break;
					case "h":
						i += +f[n][v - 1];
						break;
					case "v":
						j += +f[n][v - 1];
						break;
					default:
						i += +f[n][v - 2], j += +f[n][v - 1]
				}
			}
			return f.toString = g, c.rel = h(f), f
		}

		function B(b) {
			var c = e(b);
			if (c.abs) return h(c.abs);
			if (K(b, "array") && K(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
				["M", 0, 0]
			];
			var d, f = [],
				i = 0,
				j = 0,
				k = 0,
				l = 0,
				m = 0;
			"M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, f[0] = ["M", i, j]);
			for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
				if (f.push(n = []), o = b[q], d = o[0], d != d.toUpperCase()) switch (n[0] = d.toUpperCase(), n[0]) {
						case "A":
							n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
							break;
						case "V":
							n[1] = +o[1] + j;
							break;
						case "H":
							n[1] = +o[1] + i;
							break;
						case "R":
							for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
							f.pop(), f = f.concat(I(s, p));
							break;
						case "O":
							f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
							break;
						case "U":
							f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
							break;
						case "M":
							k = +o[1] + i, l = +o[2] + j;
						default:
							for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
					} else if ("R" == d) s = [i, j].concat(o.slice(1)), f.pop(), f = f.concat(I(s, p)), n = ["R"].concat(o.slice(-2));
					else if ("O" == d) f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
				else if ("U" == d) f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
				else
					for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
				if (d = d.toUpperCase(), "O" != d) switch (n[0]) {
					case "Z":
						i = +k, j = +l;
						break;
					case "H":
						i = n[1];
						break;
					case "V":
						j = n[1];
						break;
					case "M":
						k = n[n.length - 2], l = n[n.length - 1];
					default:
						i = n[n.length - 2], j = n[n.length - 1]
				}
			}
			return f.toString = g, c.abs = h(f), f
		}

		function C(a, b, c, d) {
			return [a, b, c, d, c, d]
		}

		function D(a, b, c, d, e, f) {
			var g = 1 / 3,
				h = 2 / 3;
			return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
		}

		function E(b, c, d, e, f, g, h, i, j, k) {
			var l, m = 120 * Q / 180,
				n = Q / 180 * (+f || 0),
				o = [],
				p = a._.cacher(function(a, b, c) {
					var d = a * P.cos(c) - b * P.sin(c),
						e = a * P.sin(c) + b * P.cos(c);
					return {
						x: d,
						y: e
					}
				});
			if (!d || !e) return [b, c, i, j, i, j];
			if (k) y = k[0], z = k[1], w = k[2], x = k[3];
			else {
				l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
				var q = (P.cos(Q / 180 * f), P.sin(Q / 180 * f), (b - i) / 2),
					r = (c - j) / 2,
					s = q * q / (d * d) + r * r / (e * e);
				s > 1 && (s = P.sqrt(s), d = s * d, e = s * e);
				var t = d * d,
					u = e * e,
					v = (g == h ? -1 : 1) * P.sqrt(U((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
					w = v * d * r / e + (b + i) / 2,
					x = v * -e * q / d + (c + j) / 2,
					y = P.asin(((c - x) / e)
						.toFixed(9)),
					z = P.asin(((j - x) / e)
						.toFixed(9));
				y = w > b ? Q - y : y, z = w > i ? Q - z : z, 0 > y && (y = 2 * Q + y), 0 > z && (z = 2 * Q + z), h && y > z && (y -= 2 * Q), !h && z > y && (z -= 2 * Q)
			}
			var A = z - y;
			if (U(A) > m) {
				var B = z,
					C = i,
					D = j;
				z = y + m * (h && z > y ? 1 : -1), i = w + d * P.cos(z), j = x + e * P.sin(z), o = E(i, j, d, e, f, 0, h, C, D, [z, B, w, x])
			}
			A = z - y;
			var F = P.cos(y),
				G = P.sin(y),
				H = P.cos(z),
				I = P.sin(z),
				J = P.tan(A / 4),
				K = 4 / 3 * d * J,
				L = 4 / 3 * e * J,
				M = [b, c],
				N = [b + K * G, c - L * F],
				O = [i + K * I, j - L * H],
				R = [i, j];
			if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, O, R].concat(o);
			o = [N, O, R].concat(o)
				.join()
				.split(",");
			for (var S = [], T = 0, V = o.length; V > T; T++) S[T] = T % 2 ? p(o[T - 1], o[T], n)
				.y : p(o[T], o[T + 1], n)
				.x;
			return S
		}

		function F(a, b, c, d, e, f, g, h) {
			for (var i, j, k, l, m, n, o, p, q = [], r = [
				[],
				[]
			], s = 0; 2 > s; ++s)
				if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), U(i) < 1e-12) {
					if (U(j) < 1e-12) continue;
					l = -k / j, l > 0 && 1 > l && q.push(l)
				} else o = j * j - 4 * k * i, p = P.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
			for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
			return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
				min: {
					x: R.apply(0, r[0]),
					y: R.apply(0, r[1])
				},
				max: {
					x: S.apply(0, r[0]),
					y: S.apply(0, r[1])
				}
			}
		}

		function G(a, b) {
			var c = !b && e(a);
			if (!b && c.curve) return h(c.curve);
			for (var d = B(a), f = b && B(b), g = {
				x: 0,
				y: 0,
				bx: 0,
				by: 0,
				X: 0,
				Y: 0,
				qx: null,
				qy: null
			}, i = {
				x: 0,
				y: 0,
				bx: 0,
				by: 0,
				X: 0,
				Y: 0,
				qx: null,
				qy: null
			}, j = (function(a, b, c) {
				var d, e;
				if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
				switch (!(a[0] in {
					T: 1,
					Q: 1
				}) && (b.qx = b.qy = null), a[0]) {
					case "M":
						b.X = a[1], b.Y = a[2];
						break;
					case "A":
						a = ["C"].concat(E.apply(0, [b.x, b.y].concat(a.slice(1))));
						break;
					case "S":
						"C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
						break;
					case "T":
						"Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(D(b.x, b.y, b.qx, b.qy, a[1], a[2]));
						break;
					case "Q":
						b.qx = a[1], b.qy = a[2], a = ["C"].concat(D(b.x, b.y, a[1], a[2], a[3], a[4]));
						break;
					case "L":
						a = ["C"].concat(C(b.x, b.y, a[1], a[2]));
						break;
					case "H":
						a = ["C"].concat(C(b.x, b.y, a[1], b.y));
						break;
					case "V":
						a = ["C"].concat(C(b.x, b.y, b.x, a[1]));
						break;
					case "Z":
						a = ["C"].concat(C(b.x, b.y, b.X, b.Y))
				}
				return a
			}), k = function(a, b) {
				if (a[b].length > 7) {
					a[b].shift();
					for (var c = a[b]; c.length;) m[b] = "A", f && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
					a.splice(b, 1), r = S(d.length, f && f.length || 0)
				}
			}, l = function(a, b, c, e, g) {
				a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", e.x, e.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], r = S(d.length, f && f.length || 0))
			}, m = [], n = [], o = "", p = "", q = 0, r = S(d.length, f && f.length || 0); r > q; q++) {
				d[q] && (o = d[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), d[q] = j(d[q], g, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(d, q), f && (f[q] && (o = f[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), f[q] = j(f[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(f, q)), l(d, f, g, i, q), l(f, d, i, g, q);
				var s = d[q],
					t = f && f[q],
					u = s.length,
					v = f && t.length;
				g.x = s[u - 2], g.y = s[u - 1], g.bx = O(s[u - 4]) || g.x, g.by = O(s[u - 3]) || g.y, i.bx = f && (O(t[v - 4]) || i.x), i.by = f && (O(t[v - 3]) || i.y), i.x = f && t[v - 2], i.y = f && t[v - 1]
			}
			return f || (c.curve = h(d)), f ? [d, f] : d
		}

		function H(a, b) {
			if (!b) return a;
			var c, d, e, f, g, h, i;
			for (a = G(a), e = 0, g = a.length; g > e; e++)
				for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
			return a
		}

		function I(a, b) {
			for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
				var f = [{
					x: +a[d - 2],
					y: +a[d - 1]
				}, {
					x: +a[d],
					y: +a[d + 1]
				}, {
					x: +a[d + 2],
					y: +a[d + 3]
				}, {
					x: +a[d + 4],
					y: +a[d + 5]
				}];
				b ? d ? e - 4 == d ? f[3] = {
					x: +a[0],
					y: +a[1]
				} : e - 2 == d && (f[2] = {
					x: +a[0],
					y: +a[1]
				}, f[3] = {
					x: +a[2],
					y: +a[3]
				}) : f[0] = {
					x: +a[e - 2],
					y: +a[e - 1]
				} : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
					x: +a[d],
					y: +a[d + 1]
				}), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
			}
			return c
		}
		var J = b.prototype,
			K = a.is,
			L = a._.clone,
			M = "hasOwnProperty",
			N = /,?([a-z]),?/gi,
			O = parseFloat,
			P = Math,
			Q = P.PI,
			R = P.min,
			S = P.max,
			T = P.pow,
			U = P.abs,
			V = j(1),
			W = j(),
			X = j(0, 1),
			Y = a._unit2px,
			Z = {
				path: function(a) {
					return a.attr("path")
				},
				circle: function(a) {
					var b = Y(a);
					return z(b.cx, b.cy, b.r)
				},
				ellipse: function(a) {
					var b = Y(a);
					return z(b.cx || 0, b.cy || 0, b.rx, b.ry);
				},
				rect: function(a) {
					var b = Y(a);
					return y(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
				},
				image: function(a) {
					var b = Y(a);
					return y(b.x || 0, b.y || 0, b.width, b.height)
				},
				line: function(a) {
					return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
				},
				polyline: function(a) {
					return "M" + a.attr("points")
				},
				polygon: function(a) {
					return "M" + a.attr("points") + "z"
				},
				deflt: function(a) {
					var b = a.node.getBBox();
					return y(b.x, b.y, b.width, b.height)
				}
			};
		a.path = e, a.path.getTotalLength = V, a.path.getPointAtLength = W, a.path.getSubpath = function(a, b, c) {
			if (this.getTotalLength(a) - c < 1e-6) return X(a, b)
				.end;
			var d = X(a, c, 1);
			return b ? X(d, b)
				.end : d
		}, J.getTotalLength = function() {
			return this.node.getTotalLength ? this.node.getTotalLength() : void 0
		}, J.getPointAtLength = function(a) {
			return W(this.attr("d"), a)
		}, J.getSubpath = function(b, c) {
			return a.path.getSubpath(this.attr("d"), b, c)
		}, a._.box = f, a.path.findDotsAtSegment = k, a.path.bezierBBox = l, a.path.isPointInsideBBox = m, a.closest = function(b, c, d, e) {
			for (var g = 100, h = f(b - g / 2, c - g / 2, g, g), i = [], j = d[0].hasOwnProperty("x") ? function(a) {
				return {
					x: d[a].x,
					y: d[a].y
				}
			} : function(a) {
				return {
					x: d[a],
					y: e[a]
				}
			}, k = 0; 1e6 >= g && !k;) {
				for (var l = 0, n = d.length; n > l; l++) {
					var o = j(l);
					if (m(h, o.x, o.y)) {
						k++, i.push(o);
						break
					}
				}
				k || (g *= 2, h = f(b - g / 2, c - g / 2, g, g))
			}
			if (1e6 != g) {
				var p, q = 1 / 0;
				for (l = 0, n = i.length; n > l; l++) {
					var r = a.len(b, c, i[l].x, i[l].y);
					q > r && (q = r, i[l].len = r, p = i[l])
				}
				return p
			}
		}, a.path.isBBoxIntersect = n, a.path.intersection = t, a.path.intersectionNumber = u, a.path.isPointInside = w, a.path.getBBox = x, a.path.get = Z, a.path.toRelative = A, a.path.toAbsolute = B, a.path.toCubic = G, a.path.map = H, a.path.toString = g, a.path.clone = h
	}), d.plugin(function(a, d, e, f) {
		var g = Math.max,
			h = Math.min,
			i = function(a) {
				if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
					for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
			},
			j = i.prototype;
		j.push = function() {
			for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
			return this
		}, j.pop = function() {
			return this.length && delete this[this.length--], this.items.pop()
		}, j.forEach = function(a, b) {
			for (var c = 0, d = this.items.length; d > c; c++)
				if (a.call(b, this.items[c], c) === !1) return this;
			return this
		}, j.animate = function(d, e, f, g) {
			"function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
			var h = arguments;
			if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
			var j, k = function() {
					j ? this.b = j : j = this.b
				},
				l = 0,
				m = this,
				n = g && function() {
					++l == m.length && g.call(this)
				};
			return this.forEach(function(a, c) {
				b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
			})
		}, j.remove = function() {
			for (; this.length;) this.pop()
				.remove();
			return this
		}, j.bind = function(a, b, c) {
			var d = {};
			if ("function" == typeof b) this.bindings[a] = b;
			else {
				var e = c || a;
				this.bindings[a] = function(a) {
					d[e] = a, b.attr(d)
				}
			}
			return this
		}, j.attr = function(a) {
			var b = {};
			for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
			for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
			return this
		}, j.clear = function() {
			for (; this.length;) this.pop()
		}, j.splice = function(a, b, c) {
			a = 0 > a ? g(this.length + a, 0) : a, b = g(0, h(this.length - a, b));
			var d, e = [],
				f = [],
				j = [];
			for (d = 2; d < arguments.length; d++) j.push(arguments[d]);
			for (d = 0; b > d; d++) f.push(this[a + d]);
			for (; d < this.length - a; d++) e.push(this[a + d]);
			var k = j.length;
			for (d = 0; d < k + e.length; d++) this.items[a + d] = this[a + d] = k > d ? j[d] : e[d - k];
			for (d = this.items.length = this.length -= b - k; this[d];) delete this[d++];
			return new i(f)
		}, j.exclude = function(a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (this[b] == a) return this.splice(b, 1), !0;
			return !1
		}, j.insertAfter = function(a) {
			for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
			return this
		}, j.getBBox = function() {
			for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
				if (!this.items[e].removed) {
					var f = this.items[e].getBBox();
					a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
				} return a = h.apply(0, a), b = h.apply(0, b), c = g.apply(0, c), d = g.apply(0, d), {
				x: a,
				y: b,
				x2: c,
				y2: d,
				width: c - a,
				height: d - b,
				cx: a + (c - a) / 2,
				cy: b + (d - b) / 2
			}
		}, j.clone = function(a) {
			a = new i;
			for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
			return a
		}, j.toString = function() {
			return "Snap鈥榮 set"
		}, j.type = "set", a.Set = i, a.set = function() {
			var a = new i;
			return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
		}
	}), d.plugin(function(a, c, d, e) {
		function f(a) {
			var b = a[0];
			switch (b.toLowerCase()) {
				case "t":
					return [b, 0, 0];
				case "m":
					return [b, 1, 0, 0, 1, 0, 0];
				case "r":
					return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
				case "s":
					return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
			}
		}

		function g(b, c, d) {
			b = b || new a.Matrix, c = c || new a.Matrix, b = a.parseTransformString(b.toTransformString()) || [], c = a.parseTransformString(c.toTransformString()) || [];
			for (var e, g, h, i, j = Math.max(b.length, c.length), k = [], n = [], o = 0; j > o; o++) {
				if (h = b[o] || f(c[o]), i = c[o] || f(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
					b = a._.transform2matrix(b, d()), c = a._.transform2matrix(c, d()), k = [
						["m", b.a, b.b, b.c, b.d, b.e, b.f]
					], n = [
						["m", c.a, c.b, c.c, c.d, c.e, c.f]
					];
					break
				}
				for (k[o] = [], n[o] = [], e = 0, g = Math.max(h.length, i.length); g > e; e++) e in h && (k[o][e] = h[e]), e in i && (n[o][e] = i[e])
			}
			return {
				from: m(k),
				to: m(n),
				f: l(k)
			}
		}

		function h(a) {
			return a
		}

		function i(a) {
			return function(b) {
				return +b.toFixed(3) + a
			}
		}

		function j(a) {
			return a.join(" ")
		}

		function k(b) {
			return a.rgb(b[0], b[1], b[2], b[3])
		}

		function l(a) {
			var b, c, d, e, f, g, h = 0,
				i = [];
			for (b = 0, c = a.length; c > b; b++) {
				for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
				f += g + "]", i[b] = f
			}
			return Function("val", "return Snap.path.toString.call([" + i + "])")
		}

		function m(a) {
			for (var b = [], c = 0, d = a.length; d > c; c++)
				for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
			return b
		}

		function n(a) {
			return isFinite(a)
		}

		function o(b, c) {
			return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1
		}
		var p = {},
			q = /[%a-z]+$/i,
			r = String;
		p.stroke = p.fill = "colour", c.prototype.equal = function(a, c) {
			return b("snap.util.equal", this, a, c)
				.firstDefined()
		}, b.on("snap.util.equal", function(b, c) {
			var d, e, f = r(this.attr(b) || ""),
				s = this;
			if ("colour" == p[b]) return d = a.color(f), e = a.color(c), {
				from: [d.r, d.g, d.b, d.opacity],
				to: [e.r, e.g, e.b, e.opacity],
				f: k
			};
			if ("viewBox" == b) return d = this.attr(b)
				.vb.split(" ")
				.map(Number), e = c.split(" ")
				.map(Number), {
					from: d,
					to: e,
					f: j
				};
			if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return "string" == typeof c && (c = r(c)
				.replace(/\.{3}|\u2026/g, f)), f = this.matrix, c = a._.rgTransform.test(c) ? a._.transform2matrix(c, this.getBBox()) : a._.transform2matrix(a._.svgTransform2string(c), this.getBBox()), g(f, c, function() {
				return s.getBBox(1)
			});
			if ("d" == b || "path" == b) return d = a.path.toCubic(f, c), {
				from: m(d[0]),
				to: m(d[1]),
				f: l(d[0])
			};
			if ("points" == b) return d = r(f)
				.split(a._.separator), e = r(c)
				.split(a._.separator), {
					from: d,
					to: e,
					f: function(a) {
						return a
					}
				};
			if (n(f) && n(c)) return {
				from: parseFloat(f),
				to: parseFloat(c),
				f: h
			};
			var t = f.match(q),
				u = r(c)
				.match(q);
			return t && o(t, u) ? {
				from: parseFloat(f),
				to: parseFloat(c),
				f: i(t)
			} : {
				from: this.asPX(b),
				to: this.asPX(b, c),
				f: h
			}
		})
	}), d.plugin(function(a, c, d, e) {
		for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
			mousedown: "touchstart",
			mousemove: "touchmove",
			mouseup: "touchend"
		}, k = (function(a, b) {
			var c = "y" == a ? "scrollTop" : "scrollLeft",
				d = b && b.node ? b.node.ownerDocument : e.doc;
			return d[c in d.documentElement ? "documentElement" : "body"][c]
		}), l = function() {
			return this.originalEvent.preventDefault()
		}, m = function() {
			return this.originalEvent.stopPropagation()
		}, n = function(a, b, c, d) {
			var e = h && j[b] ? j[b] : b,
				f = function(e) {
					var f = k("y", d),
						i = k("x", d);
					if (h && j[g](b))
						for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
							if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
								var p = e;
								e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
								break
							} var q = e.clientX + i,
						r = e.clientY + f;
					return c.call(d, e, q, r)
				};
			return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
				function() {
					return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
				}
		}, o = [], p = function(a) {
			for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
				if (c = o[i], h) {
					for (var j, l = a.touches && a.touches.length; l--;)
						if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
							d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a)
								.preventDefault();
							break
						}
				} else a.preventDefault();
				var m = c.el.node;
				m.nextSibling, m.parentNode, m.style.display;
				d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
			}
		}, q = function(c) {
			a.unmousemove(p)
				.unmouseup(q);
			for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
			o = []
		}, r = i.length; r--;) ! function(b) {
			a[b] = f[b] = function(c, d) {
				if (a.is(c, "function")) this.events = this.events || [], this.events.push({
					name: b,
					f: c,
					unbind: n(this.node || document, b, c, d || this)
				});
				else
					for (var e = 0, f = this.events.length; f > e; e++)
						if (this.events[e].name == b) try {
							this.events[e].f.call(this)
						} catch (g) {}
				return this
			}, a["un" + b] = f["un" + b] = function(a) {
				for (var c = this.events || [], d = c.length; d--;)
					if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
				return this
			}
		}(i[r]);
		f.hover = function(a, b, c, d) {
			return this.mouseover(a, c)
				.mouseout(b, d || c)
		}, f.unhover = function(a, b) {
			return this.unmouseover(a)
				.unmouseout(b)
		};
		var s = [];
		f.drag = function(c, d, e, f, g, h) {
			function i(i, j, l) {
				(i.originalEvent || i)
				.preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p)
					.mouseup(q), o.push({
						el: k,
						move_scope: f,
						start_scope: g,
						end_scope: h
					}), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
			}

			function j(a, c, d) {
				b("snap.draginit." + k.id, k, a, c, d)
			}
			var k = this;
			if (!arguments.length) {
				var l;
				return k.drag(function(a, b) {
					this.attr({
						transform: l + (l ? "T" : "t") + [a, b]
					})
				}, function() {
					l = this.transform()
						.local
				})
			}
			return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
				el: k,
				start: i,
				init: j
			}), k.mousedown(j), k
		}, f.undrag = function() {
			for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
			return !s.length && a.unmousemove(p)
				.unmouseup(q), this
		}
	}), d.plugin(function(a, c, d, e) {
		var f = (c.prototype, d.prototype),
			g = /^\s*url\((.+)\)/,
			h = String,
			i = a._.$;
		a.filter = {}, f.filter = function(b) {
			var d = this;
			"svg" != d.type && (d = d.paper);
			var e = a.parse(h(b)),
				f = a._.id(),
				g = (d.node.offsetWidth, d.node.offsetHeight, i("filter"));
			return i(g, {
				id: f,
				filterUnits: "userSpaceOnUse"
			}), g.appendChild(e.node), d.defs.appendChild(g), new c(g)
		}, b.on("snap.util.getattr.filter", function() {
			b.stop();
			var c = i(this.node, "filter");
			if (c) {
				var d = h(c)
					.match(g);
				return d && a.select(d[1])
			}
		}), b.on("snap.util.attr.filter", function(d) {
			if (d instanceof c && "filter" == d.type) {
				b.stop();
				var e = d.node.id;
				e || (i(d.node, {
					id: d.id
				}), e = d.id), i(this.node, {
					filter: a.url(e)
				})
			}
			d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
		}), a.filter.blur = function(b, c) {
			null == b && (b = 2);
			var d = null == c ? b : [b, c];
			return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
				def: d
			})
		}, a.filter.blur.toString = function() {
			return this()
		}, a.filter.shadow = function(b, c, d, e, f) {
			return null == f && (null == e ? (f = d, d = 4, e = "#000") : (f = e, e = d, d = 4)), null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
				color: e,
				dx: b,
				dy: c,
				blur: d,
				opacity: f
			})
		}, a.filter.shadow.toString = function() {
			return this()
		}, a.filter.grayscale = function(b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
				a: .2126 + .7874 * (1 - b),
				b: .7152 - .7152 * (1 - b),
				c: .0722 - .0722 * (1 - b),
				d: .2126 - .2126 * (1 - b),
				e: .7152 + .2848 * (1 - b),
				f: .0722 - .0722 * (1 - b),
				g: .2126 - .2126 * (1 - b),
				h: .0722 + .9278 * (1 - b)
			})
		}, a.filter.grayscale.toString = function() {
			return this()
		}, a.filter.sepia = function(b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
				a: .393 + .607 * (1 - b),
				b: .769 - .769 * (1 - b),
				c: .189 - .189 * (1 - b),
				d: .349 - .349 * (1 - b),
				e: .686 + .314 * (1 - b),
				f: .168 - .168 * (1 - b),
				g: .272 - .272 * (1 - b),
				h: .534 - .534 * (1 - b),
				i: .131 + .869 * (1 - b)
			})
		}, a.filter.sepia.toString = function() {
			return this()
		}, a.filter.saturate = function(b) {
			return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
				amount: 1 - b
			})
		}, a.filter.saturate.toString = function() {
			return this()
		}, a.filter.hueRotate = function(b) {
			return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
				angle: b
			})
		}, a.filter.hueRotate.toString = function() {
			return this()
		}, a.filter.invert = function(b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
				amount: b,
				amount2: 1 - b
			})
		}, a.filter.invert.toString = function() {
			return this()
		}, a.filter.brightness = function(b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
				amount: b
			})
		}, a.filter.brightness.toString = function() {
			return this()
		}, a.filter.contrast = function(b) {
			return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
				amount: b,
				amount2: .5 - b / 2
			})
		}, a.filter.contrast.toString = function() {
			return this()
		}
	}), d.plugin(function(a, b, c, d, e) {
		var f = a._.box,
			g = a.is,
			h = /^[^a-z]*([tbmlrc])/i,
			i = function() {
				return "T" + this.dx + "," + this.dy
			};
		b.prototype.getAlign = function(a, b) {
			null == b && g(a, "string") && (b = a, a = null), a = a || this.paper;
			var c = a.getBBox ? a.getBBox() : f(a),
				d = this.getBBox(),
				e = {};
			switch (b = b && b.match(h), b = b ? b[1].toLowerCase() : "c") {
				case "t":
					e.dx = 0, e.dy = c.y - d.y;
					break;
				case "b":
					e.dx = 0, e.dy = c.y2 - d.y2;
					break;
				case "m":
					e.dx = 0, e.dy = c.cy - d.cy;
					break;
				case "l":
					e.dx = c.x - d.x, e.dy = 0;
					break;
				case "r":
					e.dx = c.x2 - d.x2, e.dy = 0;
					break;
				default:
					e.dx = c.cx - d.cx, e.dy = 0
			}
			return e.toString = i, e
		}, b.prototype.align = function(a, b) {
			return this.transform("..." + this.getAlign(a, b))
		}
	}), d.plugin(function(b, c, d, e) {
		function f(a) {
			a = a.split(/(?=#)/);
			var b = new String(a[5]);
			return b[50] = a[0], b[100] = a[1], b[200] = a[2], b[300] = a[3], b[400] = a[4], b[500] = a[5], b[600] = a[6], b[700] = a[7], b[800] = a[8], b[900] = a[9], a[10] && (b.A100 = a[10], b.A200 = a[11], b.A400 = a[12], b.A700 = a[13]), b
		}
		var g = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
			h = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
			i = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
			j = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
			k = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
			l = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
			m = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
			n = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
			o = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
			p = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
			q = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
			r = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
			s = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
			t = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
			u = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
			v = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
			w = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
			x = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
			y = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
		b.mui = {}, b.flat = {}, b.mui.red = f(g), b.mui.pink = f(h), b.mui.purple = f(i), b.mui.deeppurple = f(j), b.mui.indigo = f(k), b.mui.blue = f(l), b.mui.lightblue = f(m), b.mui.cyan = f(n), b.mui.teal = f(o), b.mui.green = f(p), b.mui.lightgreen = f(q), b.mui.lime = f(r), b.mui.yellow = f(s), b.mui.amber = f(t), b.mui.orange = f(u), b.mui.deeporange = f(v), b.mui.brown = f(w), b.mui.grey = f(x), b.mui.bluegrey = f(y), b.flat.turquoise = "#1abc9c", b.flat.greensea = "#16a085", b.flat.sunflower = "#f1c40f", b.flat.orange = "#f39c12", b.flat.emerland = "#2ecc71", b.flat.nephritis = "#27ae60", b.flat.carrot = "#e67e22", b.flat.pumpkin = "#d35400", b.flat.peterriver = "#3498db", b.flat.belizehole = "#2980b9", b.flat.alizarin = "#e74c3c", b.flat.pomegranate = "#c0392b", b.flat.amethyst = "#9b59b6", b.flat.wisteria = "#8e44ad", b.flat.clouds = "#ecf0f1", b.flat.silver = "#bdc3c7", b.flat.wetasphalt = "#34495e", b.flat.midnightblue = "#2c3e50", b.flat.concrete = "#95a5a6", b.flat.asbestos = "#7f8c8d", b.importMUIColors = function() {
			for (var c in b.mui) b.mui.hasOwnProperty(c) && (a[c] = b.mui[c])
		}
	}), d
});