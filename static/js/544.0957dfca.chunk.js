/*! For license information please see 544.0957dfca.chunk.js.LICENSE.txt */
(self.webpackChunknew = self.webpackChunknew || []).push([[544], {
    1664: t=>{
        "use strict";
        var e = {
            single_source_shortest_paths: function(t, r, o) {
                var n = {}
                  , i = {};
                i[r] = 0;
                var a, l, s, c, d, h, u, m = e.PriorityQueue.make();
                for (m.push(r, 0); !m.empty(); )
                    for (s in l = (a = m.pop()).value,
                    c = a.cost,
                    d = t[l] || {})
                        d.hasOwnProperty(s) && (h = c + d[s],
                        u = i[s],
                        ("undefined" === typeof i[s] || u > h) && (i[s] = h,
                        m.push(s, h),
                        n[s] = l));
                if ("undefined" !== typeof o && "undefined" === typeof i[o]) {
                    var p = ["Could not find a path from ", r, " to ", o, "."].join("");
                    throw new Error(p)
                }
                return n
            },
            extract_shortest_path_from_predecessor_list: function(t, e) {
                for (var r = [], o = e; o; )
                    r.push(o),
                    t[o],
                    o = t[o];
                return r.reverse(),
                r
            },
            find_path: function(t, r, o) {
                var n = e.single_source_shortest_paths(t, r, o);
                return e.extract_shortest_path_from_predecessor_list(n, o)
            },
            PriorityQueue: {
                make: function(t) {
                    var r, o = e.PriorityQueue, n = {};
                    for (r in t = t || {},
                    o)
                        o.hasOwnProperty(r) && (n[r] = o[r]);
                    return n.queue = [],
                    n.sorter = t.sorter || o.default_sorter,
                    n
                },
                default_sorter: function(t, e) {
                    return t.cost - e.cost
                },
                push: function(t, e) {
                    var r = {
                        value: t,
                        cost: e
                    };
                    this.queue.push(r),
                    this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return 0 === this.queue.length
                }
            }
        };
        t.exports = e
    }
    ,
    7654: t=>{
        "use strict";
        t.exports = function(t) {
            for (var e = [], r = t.length, o = 0; o < r; o++) {
                var n = t.charCodeAt(o);
                if (n >= 55296 && n <= 56319 && r > o + 1) {
                    var i = t.charCodeAt(o + 1);
                    i >= 56320 && i <= 57343 && (n = 1024 * (n - 55296) + i - 56320 + 65536,
                    o += 1)
                }
                n < 128 ? e.push(n) : n < 2048 ? (e.push(n >> 6 | 192),
                e.push(63 & n | 128)) : n < 55296 || n >= 57344 && n < 65536 ? (e.push(n >> 12 | 224),
                e.push(n >> 6 & 63 | 128),
                e.push(63 & n | 128)) : n >= 65536 && n <= 1114111 ? (e.push(n >> 18 | 240),
                e.push(n >> 12 & 63 | 128),
                e.push(n >> 6 & 63 | 128),
                e.push(63 & n | 128)) : e.push(239, 191, 189)
            }
            return new Uint8Array(e).buffer
        }
    }
    ,
    6316: (t,e,r)=>{
        const o = r(8451)
          , n = r(2143)
          , i = r(9783)
          , a = r(9123);
        function l(t, e, r, i, a) {
            const l = [].slice.call(arguments, 1)
              , s = l.length
              , c = "function" === typeof l[s - 1];
            if (!c && !o())
                throw new Error("Callback required as last argument");
            if (!c) {
                if (s < 1)
                    throw new Error("Too few arguments provided");
                return 1 === s ? (r = e,
                e = i = void 0) : 2 !== s || e.getContext || (i = r,
                r = e,
                e = void 0),
                new Promise((function(o, a) {
                    try {
                        const a = n.create(r, i);
                        o(t(a, e, i))
                    } catch (l) {
                        a(l)
                    }
                }
                ))
            }
            if (s < 2)
                throw new Error("Too few arguments provided");
            2 === s ? (a = r,
            r = e,
            e = i = void 0) : 3 === s && (e.getContext && "undefined" === typeof a ? (a = i,
            i = void 0) : (a = i,
            i = r,
            r = e,
            e = void 0));
            try {
                const o = n.create(r, i);
                a(null, t(o, e, i))
            } catch (d) {
                a(d)
            }
        }
        e.create = n.create,
        e.toCanvas = l.bind(null, i.render),
        e.toDataURL = l.bind(null, i.renderToDataURL),
        e.toString = l.bind(null, (function(t, e, r) {
            return a.render(t, r)
        }
        ))
    }
    ,
    8451: t=>{
        t.exports = function() {
            return "function" === typeof Promise && Promise.prototype && Promise.prototype.then
        }
    }
    ,
    6877: (t,e,r)=>{
        const o = r(8970).getSymbolSize;
        e.getRowColCoords = function(t) {
            if (1 === t)
                return [];
            const e = Math.floor(t / 7) + 2
              , r = o(t)
              , n = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2))
              , i = [r - 7];
            for (let o = 1; o < e - 1; o++)
                i[o] = i[o - 1] - n;
            return i.push(6),
            i.reverse()
        }
        ,
        e.getPositions = function(t) {
            const r = []
              , o = e.getRowColCoords(t)
              , n = o.length;
            for (let e = 0; e < n; e++)
                for (let t = 0; t < n; t++)
                    0 === e && 0 === t || 0 === e && t === n - 1 || e === n - 1 && 0 === t || r.push([o[e], o[t]]);
            return r
        }
    }
    ,
    5890: (t,e,r)=>{
        const o = r(8952)
          , n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        function i(t) {
            this.mode = o.ALPHANUMERIC,
            this.data = t
        }
        i.getBitsLength = function(t) {
            return 11 * Math.floor(t / 2) + t % 2 * 6
        }
        ,
        i.prototype.getLength = function() {
            return this.data.length
        }
        ,
        i.prototype.getBitsLength = function() {
            return i.getBitsLength(this.data.length)
        }
        ,
        i.prototype.write = function(t) {
            let e;
            for (e = 0; e + 2 <= this.data.length; e += 2) {
                let r = 45 * n.indexOf(this.data[e]);
                r += n.indexOf(this.data[e + 1]),
                t.put(r, 11)
            }
            this.data.length % 2 && t.put(n.indexOf(this.data[e]), 6)
        }
        ,
        t.exports = i
    }
    ,
    8333: t=>{
        function e() {
            this.buffer = [],
            this.length = 0
        }
        e.prototype = {
            get: function(t) {
                const e = Math.floor(t / 8);
                return 1 === (this.buffer[e] >>> 7 - t % 8 & 1)
            },
            put: function(t, e) {
                for (let r = 0; r < e; r++)
                    this.putBit(1 === (t >>> e - r - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                const e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++
            }
        },
        t.exports = e
    }
    ,
    2015: t=>{
        function e(t) {
            if (!t || t < 1)
                throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = t,
            this.data = new Uint8Array(t * t),
            this.reservedBit = new Uint8Array(t * t)
        }
        e.prototype.set = function(t, e, r, o) {
            const n = t * this.size + e;
            this.data[n] = r,
            o && (this.reservedBit[n] = !0)
        }
        ,
        e.prototype.get = function(t, e) {
            return this.data[t * this.size + e]
        }
        ,
        e.prototype.xor = function(t, e, r) {
            this.data[t * this.size + e] ^= r
        }
        ,
        e.prototype.isReserved = function(t, e) {
            return this.reservedBit[t * this.size + e]
        }
        ,
        t.exports = e
    }
    ,
    6094: (t,e,r)=>{
        const o = r(7654)
          , n = r(8952);
        function i(t) {
            this.mode = n.BYTE,
            "string" === typeof t && (t = o(t)),
            this.data = new Uint8Array(t)
        }
        i.getBitsLength = function(t) {
            return 8 * t
        }
        ,
        i.prototype.getLength = function() {
            return this.data.length
        }
        ,
        i.prototype.getBitsLength = function() {
            return i.getBitsLength(this.data.length)
        }
        ,
        i.prototype.write = function(t) {
            for (let e = 0, r = this.data.length; e < r; e++)
                t.put(this.data[e], 8)
        }
        ,
        t.exports = i
    }
    ,
    7187: (t,e,r)=>{
        const o = r(8089)
          , n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
          , i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        e.getBlocksCount = function(t, e) {
            switch (e) {
            case o.L:
                return n[4 * (t - 1) + 0];
            case o.M:
                return n[4 * (t - 1) + 1];
            case o.Q:
                return n[4 * (t - 1) + 2];
            case o.H:
                return n[4 * (t - 1) + 3];
            default:
                return
            }
        }
        ,
        e.getTotalCodewordsCount = function(t, e) {
            switch (e) {
            case o.L:
                return i[4 * (t - 1) + 0];
            case o.M:
                return i[4 * (t - 1) + 1];
            case o.Q:
                return i[4 * (t - 1) + 2];
            case o.H:
                return i[4 * (t - 1) + 3];
            default:
                return
            }
        }
    }
    ,
    8089: (t,e)=>{
        e.L = {
            bit: 1
        },
        e.M = {
            bit: 0
        },
        e.Q = {
            bit: 3
        },
        e.H = {
            bit: 2
        },
        e.isValid = function(t) {
            return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4
        }
        ,
        e.from = function(t, r) {
            if (e.isValid(t))
                return t;
            try {
                return function(t) {
                    if ("string" !== typeof t)
                        throw new Error("Param is not a string");
                    switch (t.toLowerCase()) {
                    case "l":
                    case "low":
                        return e.L;
                    case "m":
                    case "medium":
                        return e.M;
                    case "q":
                    case "quartile":
                        return e.Q;
                    case "h":
                    case "high":
                        return e.H;
                    default:
                        throw new Error("Unknown EC Level: " + t)
                    }
                }(t)
            } catch (o) {
                return r
            }
        }
    }
    ,
    2841: (t,e,r)=>{
        const o = r(8970).getSymbolSize;
        e.getPositions = function(t) {
            const e = o(t);
            return [[0, 0], [e - 7, 0], [0, e - 7]]
        }
    }
    ,
    8744: (t,e,r)=>{
        const o = r(8970)
          , n = o.getBCHDigit(1335);
        e.getEncodedBits = function(t, e) {
            const r = t.bit << 3 | e;
            let i = r << 10;
            for (; o.getBCHDigit(i) - n >= 0; )
                i ^= 1335 << o.getBCHDigit(i) - n;
            return 21522 ^ (r << 10 | i)
        }
    }
    ,
    9634: (t,e)=>{
        const r = new Uint8Array(512)
          , o = new Uint8Array(256);
        !function() {
            let t = 1;
            for (let e = 0; e < 255; e++)
                r[e] = t,
                o[t] = e,
                t <<= 1,
                256 & t && (t ^= 285);
            for (let e = 255; e < 512; e++)
                r[e] = r[e - 255]
        }(),
        e.log = function(t) {
            if (t < 1)
                throw new Error("log(" + t + ")");
            return o[t]
        }
        ,
        e.exp = function(t) {
            return r[t]
        }
        ,
        e.mul = function(t, e) {
            return 0 === t || 0 === e ? 0 : r[o[t] + o[e]]
        }
    }
    ,
    8134: (t,e,r)=>{
        const o = r(8952)
          , n = r(8970);
        function i(t) {
            this.mode = o.KANJI,
            this.data = t
        }
        i.getBitsLength = function(t) {
            return 13 * t
        }
        ,
        i.prototype.getLength = function() {
            return this.data.length
        }
        ,
        i.prototype.getBitsLength = function() {
            return i.getBitsLength(this.data.length)
        }
        ,
        i.prototype.write = function(t) {
            let e;
            for (e = 0; e < this.data.length; e++) {
                let r = n.toSJIS(this.data[e]);
                if (r >= 33088 && r <= 40956)
                    r -= 33088;
                else {
                    if (!(r >= 57408 && r <= 60351))
                        throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    r -= 49472
                }
                r = 192 * (r >>> 8 & 255) + (255 & r),
                t.put(r, 13)
            }
        }
        ,
        t.exports = i
    }
    ,
    3385: (t,e)=>{
        e.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        const r = 3
          , o = 3
          , n = 40
          , i = 10;
        function a(t, r, o) {
            switch (t) {
            case e.Patterns.PATTERN000:
                return (r + o) % 2 === 0;
            case e.Patterns.PATTERN001:
                return r % 2 === 0;
            case e.Patterns.PATTERN010:
                return o % 3 === 0;
            case e.Patterns.PATTERN011:
                return (r + o) % 3 === 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(r / 2) + Math.floor(o / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
                return r * o % 2 + r * o % 3 === 0;
            case e.Patterns.PATTERN110:
                return (r * o % 2 + r * o % 3) % 2 === 0;
            case e.Patterns.PATTERN111:
                return (r * o % 3 + (r + o) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + t)
            }
        }
        e.isValid = function(t) {
            return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
        }
        ,
        e.from = function(t) {
            return e.isValid(t) ? parseInt(t, 10) : void 0
        }
        ,
        e.getPenaltyN1 = function(t) {
            const e = t.size;
            let o = 0
              , n = 0
              , i = 0
              , a = null
              , l = null;
            for (let s = 0; s < e; s++) {
                n = i = 0,
                a = l = null;
                for (let c = 0; c < e; c++) {
                    let e = t.get(s, c);
                    e === a ? n++ : (n >= 5 && (o += r + (n - 5)),
                    a = e,
                    n = 1),
                    e = t.get(c, s),
                    e === l ? i++ : (i >= 5 && (o += r + (i - 5)),
                    l = e,
                    i = 1)
                }
                n >= 5 && (o += r + (n - 5)),
                i >= 5 && (o += r + (i - 5))
            }
            return o
        }
        ,
        e.getPenaltyN2 = function(t) {
            const e = t.size;
            let r = 0;
            for (let o = 0; o < e - 1; o++)
                for (let n = 0; n < e - 1; n++) {
                    const e = t.get(o, n) + t.get(o, n + 1) + t.get(o + 1, n) + t.get(o + 1, n + 1);
                    4 !== e && 0 !== e || r++
                }
            return r * o
        }
        ,
        e.getPenaltyN3 = function(t) {
            const e = t.size;
            let r = 0
              , o = 0
              , i = 0;
            for (let n = 0; n < e; n++) {
                o = i = 0;
                for (let a = 0; a < e; a++)
                    o = o << 1 & 2047 | t.get(n, a),
                    a >= 10 && (1488 === o || 93 === o) && r++,
                    i = i << 1 & 2047 | t.get(a, n),
                    a >= 10 && (1488 === i || 93 === i) && r++
            }
            return r * n
        }
        ,
        e.getPenaltyN4 = function(t) {
            let e = 0;
            const r = t.data.length;
            for (let o = 0; o < r; o++)
                e += t.data[o];
            return Math.abs(Math.ceil(100 * e / r / 5) - 10) * i
        }
        ,
        e.applyMask = function(t, e) {
            const r = e.size;
            for (let o = 0; o < r; o++)
                for (let n = 0; n < r; n++)
                    e.isReserved(n, o) || e.xor(n, o, a(t, n, o))
        }
        ,
        e.getBestMask = function(t, r) {
            const o = Object.keys(e.Patterns).length;
            let n = 0
              , i = 1 / 0;
            for (let a = 0; a < o; a++) {
                r(a),
                e.applyMask(a, t);
                const o = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                e.applyMask(a, t),
                o < i && (i = o,
                n = a)
            }
            return n
        }
    }
    ,
    8952: (t,e,r)=>{
        const o = r(2979)
          , n = r(3423);
        e.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        },
        e.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        },
        e.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        },
        e.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        },
        e.MIXED = {
            bit: -1
        },
        e.getCharCountIndicator = function(t, e) {
            if (!t.ccBits)
                throw new Error("Invalid mode: " + t);
            if (!o.isValid(e))
                throw new Error("Invalid version: " + e);
            return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
        }
        ,
        e.getBestModeForData = function(t) {
            return n.testNumeric(t) ? e.NUMERIC : n.testAlphanumeric(t) ? e.ALPHANUMERIC : n.testKanji(t) ? e.KANJI : e.BYTE
        }
        ,
        e.toString = function(t) {
            if (t && t.id)
                return t.id;
            throw new Error("Invalid mode")
        }
        ,
        e.isValid = function(t) {
            return t && t.bit && t.ccBits
        }
        ,
        e.from = function(t, r) {
            if (e.isValid(t))
                return t;
            try {
                return function(t) {
                    if ("string" !== typeof t)
                        throw new Error("Param is not a string");
                    switch (t.toLowerCase()) {
                    case "numeric":
                        return e.NUMERIC;
                    case "alphanumeric":
                        return e.ALPHANUMERIC;
                    case "kanji":
                        return e.KANJI;
                    case "byte":
                        return e.BYTE;
                    default:
                        throw new Error("Unknown mode: " + t)
                    }
                }(t)
            } catch (o) {
                return r
            }
        }
    }
    ,
    9715: (t,e,r)=>{
        const o = r(8952);
        function n(t) {
            this.mode = o.NUMERIC,
            this.data = t.toString()
        }
        n.getBitsLength = function(t) {
            return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
        }
        ,
        n.prototype.getLength = function() {
            return this.data.length
        }
        ,
        n.prototype.getBitsLength = function() {
            return n.getBitsLength(this.data.length)
        }
        ,
        n.prototype.write = function(t) {
            let e, r, o;
            for (e = 0; e + 3 <= this.data.length; e += 3)
                r = this.data.substr(e, 3),
                o = parseInt(r, 10),
                t.put(o, 10);
            const n = this.data.length - e;
            n > 0 && (r = this.data.substr(e),
            o = parseInt(r, 10),
            t.put(o, 3 * n + 1))
        }
        ,
        t.exports = n
    }
    ,
    1435: (t,e,r)=>{
        const o = r(9634);
        e.mul = function(t, e) {
            const r = new Uint8Array(t.length + e.length - 1);
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < e.length; i++)
                    r[n + i] ^= o.mul(t[n], e[i]);
            return r
        }
        ,
        e.mod = function(t, e) {
            let r = new Uint8Array(t);
            for (; r.length - e.length >= 0; ) {
                const t = r[0];
                for (let i = 0; i < e.length; i++)
                    r[i] ^= o.mul(e[i], t);
                let n = 0;
                for (; n < r.length && 0 === r[n]; )
                    n++;
                r = r.slice(n)
            }
            return r
        }
        ,
        e.generateECPolynomial = function(t) {
            let r = new Uint8Array([1]);
            for (let n = 0; n < t; n++)
                r = e.mul(r, new Uint8Array([1, o.exp(n)]));
            return r
        }
    }
    ,
    2143: (t,e,r)=>{
        const o = r(8970)
          , n = r(8089)
          , i = r(8333)
          , a = r(2015)
          , l = r(6877)
          , s = r(2841)
          , c = r(3385)
          , d = r(7187)
          , h = r(2149)
          , u = r(5741)
          , m = r(8744)
          , p = r(8952)
          , g = r(3787);
        function w(t, e, r) {
            const o = t.size
              , n = m.getEncodedBits(e, r);
            let i, a;
            for (i = 0; i < 15; i++)
                a = 1 === (n >> i & 1),
                i < 6 ? t.set(i, 8, a, !0) : i < 8 ? t.set(i + 1, 8, a, !0) : t.set(o - 15 + i, 8, a, !0),
                i < 8 ? t.set(8, o - i - 1, a, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, a, !0) : t.set(8, 15 - i - 1, a, !0);
            t.set(o - 8, 8, 1, !0)
        }
        function f(t, e, r) {
            const n = new i;
            r.forEach((function(e) {
                n.put(e.mode.bit, 4),
                n.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
                e.write(n)
            }
            ));
            const a = 8 * (o.getSymbolTotalCodewords(t) - d.getTotalCodewordsCount(t, e));
            for (n.getLengthInBits() + 4 <= a && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
                n.putBit(0);
            const l = (a - n.getLengthInBits()) / 8;
            for (let o = 0; o < l; o++)
                n.put(o % 2 ? 17 : 236, 8);
            return function(t, e, r) {
                const n = o.getSymbolTotalCodewords(e)
                  , i = d.getTotalCodewordsCount(e, r)
                  , a = n - i
                  , l = d.getBlocksCount(e, r)
                  , s = n % l
                  , c = l - s
                  , u = Math.floor(n / l)
                  , m = Math.floor(a / l)
                  , p = m + 1
                  , g = u - m
                  , w = new h(g);
                let f = 0;
                const v = new Array(l)
                  , b = new Array(l);
                let y = 0;
                const x = new Uint8Array(t.buffer);
                for (let o = 0; o < l; o++) {
                    const t = o < c ? m : p;
                    v[o] = x.slice(f, f + t),
                    b[o] = w.encode(v[o]),
                    f += t,
                    y = Math.max(y, t)
                }
                const C = new Uint8Array(n);
                let A, E, _ = 0;
                for (A = 0; A < y; A++)
                    for (E = 0; E < l; E++)
                        A < v[E].length && (C[_++] = v[E][A]);
                for (A = 0; A < g; A++)
                    for (E = 0; E < l; E++)
                        C[_++] = b[E][A];
                return C
            }(n, t, e)
        }
        function v(t, e, r, n) {
            let i;
            if (Array.isArray(t))
                i = g.fromArray(t);
            else {
                if ("string" !== typeof t)
                    throw new Error("Invalid data");
                {
                    let o = e;
                    if (!o) {
                        const e = g.rawSplit(t);
                        o = u.getBestVersionForData(e, r)
                    }
                    i = g.fromString(t, o || 40)
                }
            }
            const d = u.getBestVersionForData(i, r);
            if (!d)
                throw new Error("The amount of data is too big to be stored in a QR Code");
            if (e) {
                if (e < d)
                    throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + d + ".\n")
            } else
                e = d;
            const h = f(e, r, i)
              , m = o.getSymbolSize(e)
              , p = new a(m);
            return function(t, e) {
                const r = t.size
                  , o = s.getPositions(e);
                for (let n = 0; n < o.length; n++) {
                    const e = o[n][0]
                      , i = o[n][1];
                    for (let o = -1; o <= 7; o++)
                        if (!(e + o <= -1 || r <= e + o))
                            for (let n = -1; n <= 7; n++)
                                i + n <= -1 || r <= i + n || (o >= 0 && o <= 6 && (0 === n || 6 === n) || n >= 0 && n <= 6 && (0 === o || 6 === o) || o >= 2 && o <= 4 && n >= 2 && n <= 4 ? t.set(e + o, i + n, !0, !0) : t.set(e + o, i + n, !1, !0))
                }
            }(p, e),
            function(t) {
                const e = t.size;
                for (let r = 8; r < e - 8; r++) {
                    const e = r % 2 === 0;
                    t.set(r, 6, e, !0),
                    t.set(6, r, e, !0)
                }
            }(p),
            function(t, e) {
                const r = l.getPositions(e);
                for (let o = 0; o < r.length; o++) {
                    const e = r[o][0]
                      , n = r[o][1];
                    for (let r = -2; r <= 2; r++)
                        for (let o = -2; o <= 2; o++)
                            -2 === r || 2 === r || -2 === o || 2 === o || 0 === r && 0 === o ? t.set(e + r, n + o, !0, !0) : t.set(e + r, n + o, !1, !0)
                }
            }(p, e),
            w(p, r, 0),
            e >= 7 && function(t, e) {
                const r = t.size
                  , o = u.getEncodedBits(e);
                let n, i, a;
                for (let l = 0; l < 18; l++)
                    n = Math.floor(l / 3),
                    i = l % 3 + r - 8 - 3,
                    a = 1 === (o >> l & 1),
                    t.set(n, i, a, !0),
                    t.set(i, n, a, !0)
            }(p, e),
            function(t, e) {
                const r = t.size;
                let o = -1
                  , n = r - 1
                  , i = 7
                  , a = 0;
                for (let l = r - 1; l > 0; l -= 2)
                    for (6 === l && l--; ; ) {
                        for (let r = 0; r < 2; r++)
                            if (!t.isReserved(n, l - r)) {
                                let o = !1;
                                a < e.length && (o = 1 === (e[a] >>> i & 1)),
                                t.set(n, l - r, o),
                                i--,
                                -1 === i && (a++,
                                i = 7)
                            }
                        if (n += o,
                        n < 0 || r <= n) {
                            n -= o,
                            o = -o;
                            break
                        }
                    }
            }(p, h),
            isNaN(n) && (n = c.getBestMask(p, w.bind(null, p, r))),
            c.applyMask(n, p),
            w(p, r, n),
            {
                modules: p,
                version: e,
                errorCorrectionLevel: r,
                maskPattern: n,
                segments: i
            }
        }
        e.create = function(t, e) {
            if ("undefined" === typeof t || "" === t)
                throw new Error("No input text");
            let r, i, a = n.M;
            return "undefined" !== typeof e && (a = n.from(e.errorCorrectionLevel, n.M),
            r = u.from(e.version),
            i = c.from(e.maskPattern),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
            v(t, r, a, i)
        }
    }
    ,
    2149: (t,e,r)=>{
        const o = r(1435);
        function n(t) {
            this.genPoly = void 0,
            this.degree = t,
            this.degree && this.initialize(this.degree)
        }
        n.prototype.initialize = function(t) {
            this.degree = t,
            this.genPoly = o.generateECPolynomial(this.degree)
        }
        ,
        n.prototype.encode = function(t) {
            if (!this.genPoly)
                throw new Error("Encoder not initialized");
            const e = new Uint8Array(t.length + this.degree);
            e.set(t);
            const r = o.mod(e, this.genPoly)
              , n = this.degree - r.length;
            if (n > 0) {
                const t = new Uint8Array(this.degree);
                return t.set(r, n),
                t
            }
            return r
        }
        ,
        t.exports = n
    }
    ,
    3423: (t,e)=>{
        const r = "[0-9]+";
        let o = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
        o = o.replace(/u/g, "\\u");
        const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + o + ")(?:.|[\r\n]))+";
        e.KANJI = new RegExp(o,"g"),
        e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
        e.BYTE = new RegExp(n,"g"),
        e.NUMERIC = new RegExp(r,"g"),
        e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+","g");
        const i = new RegExp("^" + o + "$")
          , a = new RegExp("^" + r + "$")
          , l = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        e.testKanji = function(t) {
            return i.test(t)
        }
        ,
        e.testNumeric = function(t) {
            return a.test(t)
        }
        ,
        e.testAlphanumeric = function(t) {
            return l.test(t)
        }
    }
    ,
    3787: (t,e,r)=>{
        const o = r(8952)
          , n = r(9715)
          , i = r(5890)
          , a = r(6094)
          , l = r(8134)
          , s = r(3423)
          , c = r(8970)
          , d = r(1664);
        function h(t) {
            return unescape(encodeURIComponent(t)).length
        }
        function u(t, e, r) {
            const o = [];
            let n;
            for (; null !== (n = t.exec(r)); )
                o.push({
                    data: n[0],
                    index: n.index,
                    mode: e,
                    length: n[0].length
                });
            return o
        }
        function m(t) {
            const e = u(s.NUMERIC, o.NUMERIC, t)
              , r = u(s.ALPHANUMERIC, o.ALPHANUMERIC, t);
            let n, i;
            c.isKanjiModeEnabled() ? (n = u(s.BYTE, o.BYTE, t),
            i = u(s.KANJI, o.KANJI, t)) : (n = u(s.BYTE_KANJI, o.BYTE, t),
            i = []);
            return e.concat(r, n, i).sort((function(t, e) {
                return t.index - e.index
            }
            )).map((function(t) {
                return {
                    data: t.data,
                    mode: t.mode,
                    length: t.length
                }
            }
            ))
        }
        function p(t, e) {
            switch (e) {
            case o.NUMERIC:
                return n.getBitsLength(t);
            case o.ALPHANUMERIC:
                return i.getBitsLength(t);
            case o.KANJI:
                return l.getBitsLength(t);
            case o.BYTE:
                return a.getBitsLength(t)
            }
        }
        function g(t, e) {
            let r;
            const s = o.getBestModeForData(t);
            if (r = o.from(e, s),
            r !== o.BYTE && r.bit < s.bit)
                throw new Error('"' + t + '" cannot be encoded with mode ' + o.toString(r) + ".\n Suggested mode is: " + o.toString(s));
            switch (r !== o.KANJI || c.isKanjiModeEnabled() || (r = o.BYTE),
            r) {
            case o.NUMERIC:
                return new n(t);
            case o.ALPHANUMERIC:
                return new i(t);
            case o.KANJI:
                return new l(t);
            case o.BYTE:
                return new a(t)
            }
        }
        e.fromArray = function(t) {
            return t.reduce((function(t, e) {
                return "string" === typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)),
                t
            }
            ), [])
        }
        ,
        e.fromString = function(t, r) {
            const n = function(t) {
                const e = [];
                for (let r = 0; r < t.length; r++) {
                    const n = t[r];
                    switch (n.mode) {
                    case o.NUMERIC:
                        e.push([n, {
                            data: n.data,
                            mode: o.ALPHANUMERIC,
                            length: n.length
                        }, {
                            data: n.data,
                            mode: o.BYTE,
                            length: n.length
                        }]);
                        break;
                    case o.ALPHANUMERIC:
                        e.push([n, {
                            data: n.data,
                            mode: o.BYTE,
                            length: n.length
                        }]);
                        break;
                    case o.KANJI:
                        e.push([n, {
                            data: n.data,
                            mode: o.BYTE,
                            length: h(n.data)
                        }]);
                        break;
                    case o.BYTE:
                        e.push([{
                            data: n.data,
                            mode: o.BYTE,
                            length: h(n.data)
                        }])
                    }
                }
                return e
            }(m(t, c.isKanjiModeEnabled()))
              , i = function(t, e) {
                const r = {}
                  , n = {
                    start: {}
                };
                let i = ["start"];
                for (let a = 0; a < t.length; a++) {
                    const l = t[a]
                      , s = [];
                    for (let t = 0; t < l.length; t++) {
                        const c = l[t]
                          , d = "" + a + t;
                        s.push(d),
                        r[d] = {
                            node: c,
                            lastCount: 0
                        },
                        n[d] = {};
                        for (let t = 0; t < i.length; t++) {
                            const a = i[t];
                            r[a] && r[a].node.mode === c.mode ? (n[a][d] = p(r[a].lastCount + c.length, c.mode) - p(r[a].lastCount, c.mode),
                            r[a].lastCount += c.length) : (r[a] && (r[a].lastCount = c.length),
                            n[a][d] = p(c.length, c.mode) + 4 + o.getCharCountIndicator(c.mode, e))
                        }
                    }
                    i = s
                }
                for (let o = 0; o < i.length; o++)
                    n[i[o]].end = 0;
                return {
                    map: n,
                    table: r
                }
            }(n, r)
              , a = d.find_path(i.map, "start", "end")
              , l = [];
            for (let e = 1; e < a.length - 1; e++)
                l.push(i.table[a[e]].node);
            return e.fromArray(function(t) {
                return t.reduce((function(t, e) {
                    const r = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return r && r.mode === e.mode ? (t[t.length - 1].data += e.data,
                    t) : (t.push(e),
                    t)
                }
                ), [])
            }(l))
        }
        ,
        e.rawSplit = function(t) {
            return e.fromArray(m(t, c.isKanjiModeEnabled()))
        }
    }
    ,
    8970: (t,e)=>{
        let r;
        const o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        e.getSymbolSize = function(t) {
            if (!t)
                throw new Error('"version" cannot be null or undefined');
            if (t < 1 || t > 40)
                throw new Error('"version" should be in range from 1 to 40');
            return 4 * t + 17
        }
        ,
        e.getSymbolTotalCodewords = function(t) {
            return o[t]
        }
        ,
        e.getBCHDigit = function(t) {
            let e = 0;
            for (; 0 !== t; )
                e++,
                t >>>= 1;
            return e
        }
        ,
        e.setToSJISFunction = function(t) {
            if ("function" !== typeof t)
                throw new Error('"toSJISFunc" is not a valid function.');
            r = t
        }
        ,
        e.isKanjiModeEnabled = function() {
            return "undefined" !== typeof r
        }
        ,
        e.toSJIS = function(t) {
            return r(t)
        }
    }
    ,
    2979: (t,e)=>{
        e.isValid = function(t) {
            return !isNaN(t) && t >= 1 && t <= 40
        }
    }
    ,
    5741: (t,e,r)=>{
        const o = r(8970)
          , n = r(7187)
          , i = r(8089)
          , a = r(8952)
          , l = r(2979)
          , s = o.getBCHDigit(7973);
        function c(t, e) {
            return a.getCharCountIndicator(t, e) + 4
        }
        function d(t, e) {
            let r = 0;
            return t.forEach((function(t) {
                const o = c(t.mode, e);
                r += o + t.getBitsLength()
            }
            )),
            r
        }
        e.from = function(t, e) {
            return l.isValid(t) ? parseInt(t, 10) : e
        }
        ,
        e.getCapacity = function(t, e, r) {
            if (!l.isValid(t))
                throw new Error("Invalid QR Code version");
            "undefined" === typeof r && (r = a.BYTE);
            const i = 8 * (o.getSymbolTotalCodewords(t) - n.getTotalCodewordsCount(t, e));
            if (r === a.MIXED)
                return i;
            const s = i - c(r, t);
            switch (r) {
            case a.NUMERIC:
                return Math.floor(s / 10 * 3);
            case a.ALPHANUMERIC:
                return Math.floor(s / 11 * 2);
            case a.KANJI:
                return Math.floor(s / 13);
            case a.BYTE:
            default:
                return Math.floor(s / 8)
            }
        }
        ,
        e.getBestVersionForData = function(t, r) {
            let o;
            const n = i.from(r, i.M);
            if (Array.isArray(t)) {
                if (t.length > 1)
                    return function(t, r) {
                        for (let o = 1; o <= 40; o++)
                            if (d(t, o) <= e.getCapacity(o, r, a.MIXED))
                                return o
                    }(t, n);
                if (0 === t.length)
                    return 1;
                o = t[0]
            } else
                o = t;
            return function(t, r, o) {
                for (let n = 1; n <= 40; n++)
                    if (r <= e.getCapacity(n, o, t))
                        return n
            }(o.mode, o.getLength(), n)
        }
        ,
        e.getEncodedBits = function(t) {
            if (!l.isValid(t) || t < 7)
                throw new Error("Invalid QR Code version");
            let e = t << 12;
            for (; o.getBCHDigit(e) - s >= 0; )
                e ^= 7973 << o.getBCHDigit(e) - s;
            return t << 12 | e
        }
    }
    ,
    9783: (t,e,r)=>{
        const o = r(4425);
        e.render = function(t, e, r) {
            let n = r
              , i = e;
            "undefined" !== typeof n || e && e.getContext || (n = e,
            e = void 0),
            e || (i = function() {
                try {
                    return document.createElement("canvas")
                } catch (t) {
                    throw new Error("You need to specify a canvas element")
                }
            }()),
            n = o.getOptions(n);
            const a = o.getImageWidth(t.modules.size, n)
              , l = i.getContext("2d")
              , s = l.createImageData(a, a);
            return o.qrToImageData(s.data, t, n),
            function(t, e, r) {
                t.clearRect(0, 0, e.width, e.height),
                e.style || (e.style = {}),
                e.height = r,
                e.width = r,
                e.style.height = r + "px",
                e.style.width = r + "px"
            }(l, i, a),
            l.putImageData(s, 0, 0),
            i
        }
        ,
        e.renderToDataURL = function(t, r, o) {
            let n = o;
            "undefined" !== typeof n || r && r.getContext || (n = r,
            r = void 0),
            n || (n = {});
            const i = e.render(t, r, n)
              , a = n.type || "image/png"
              , l = n.rendererOpts || {};
            return i.toDataURL(a, l.quality)
        }
    }
    ,
    9123: (t,e,r)=>{
        const o = r(4425);
        function n(t, e) {
            const r = t.a / 255
              , o = e + '="' + t.hex + '"';
            return r < 1 ? o + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : o
        }
        function i(t, e, r) {
            let o = t + e;
            return "undefined" !== typeof r && (o += " " + r),
            o
        }
        e.render = function(t, e, r) {
            const a = o.getOptions(e)
              , l = t.modules.size
              , s = t.modules.data
              , c = l + 2 * a.margin
              , d = a.color.light.a ? "<path " + n(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : ""
              , h = "<path " + n(a.color.dark, "stroke") + ' d="' + function(t, e, r) {
                let o = ""
                  , n = 0
                  , a = !1
                  , l = 0;
                for (let s = 0; s < t.length; s++) {
                    const c = Math.floor(s % e)
                      , d = Math.floor(s / e);
                    c || a || (a = !0),
                    t[s] ? (l++,
                    s > 0 && c > 0 && t[s - 1] || (o += a ? i("M", c + r, .5 + d + r) : i("m", n, 0),
                    n = 0,
                    a = !1),
                    c + 1 < e && t[s + 1] || (o += i("h", l),
                    l = 0)) : n++
                }
                return o
            }(s, l, a.margin) + '"/>'
              , u = 'viewBox="0 0 ' + c + " " + c + '"'
              , m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + d + h + "</svg>\n";
            return "function" === typeof r && r(null, m),
            m
        }
    }
    ,
    4425: (t,e)=>{
        function r(t) {
            if ("number" === typeof t && (t = t.toString()),
            "string" !== typeof t)
                throw new Error("Color should be defined as hex string");
            let e = t.slice().replace("#", "").split("");
            if (e.length < 3 || 5 === e.length || e.length > 8)
                throw new Error("Invalid hex color: " + t);
            3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
                return [t, t]
            }
            )))),
            6 === e.length && e.push("F", "F");
            const r = parseInt(e.join(""), 16);
            return {
                r: r >> 24 & 255,
                g: r >> 16 & 255,
                b: r >> 8 & 255,
                a: 255 & r,
                hex: "#" + e.slice(0, 6).join("")
            }
        }
        e.getOptions = function(t) {
            t || (t = {}),
            t.color || (t.color = {});
            const e = "undefined" === typeof t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin
              , o = t.width && t.width >= 21 ? t.width : void 0
              , n = t.scale || 4;
            return {
                width: o,
                scale: o ? 4 : n,
                margin: e,
                color: {
                    dark: r(t.color.dark || "#000000ff"),
                    light: r(t.color.light || "#ffffffff")
                },
                type: t.type,
                rendererOpts: t.rendererOpts || {}
            }
        }
        ,
        e.getScale = function(t, e) {
            return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
        }
        ,
        e.getImageWidth = function(t, r) {
            const o = e.getScale(t, r);
            return Math.floor((t + 2 * r.margin) * o)
        }
        ,
        e.qrToImageData = function(t, r, o) {
            const n = r.modules.size
              , i = r.modules.data
              , a = e.getScale(n, o)
              , l = Math.floor((n + 2 * o.margin) * a)
              , s = o.margin * a
              , c = [o.color.light, o.color.dark];
            for (let e = 0; e < l; e++)
                for (let r = 0; r < l; r++) {
                    let d = 4 * (e * l + r)
                      , h = o.color.light;
                    if (e >= s && r >= s && e < l - s && r < l - s) {
                        h = c[i[Math.floor((e - s) / a) * n + Math.floor((r - s) / a)] ? 1 : 0]
                    }
                    t[d++] = h.r,
                    t[d++] = h.g,
                    t[d++] = h.b,
                    t[d] = h.a
                }
        }
    }
    ,
    6544: (t,e,r)=>{
        "use strict";
        r.r(e),
        r.d(e, {
            WcmModal: ()=>da,
            WcmQrCode: ()=>ii
        });
        var o = r(168);
        const n = window
          , i = n.ShadowRoot && (void 0 === n.ShadyCSS || n.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , a = Symbol()
          , l = new WeakMap;
        class s {
            constructor(t, e, r) {
                if (this._$cssResult$ = !0,
                r !== a)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = t,
                this.t = e
            }
            get styleSheet() {
                let t = this.o;
                const e = this.t;
                if (i && void 0 === t) {
                    const r = void 0 !== e && 1 === e.length;
                    r && (t = l.get(e)),
                    void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
                    r && l.set(e, t))
                }
                return t
            }
            toString() {
                return this.cssText
            }
        }
        const c = function(t) {
            for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
                r[o - 1] = arguments[o];
            const n = 1 === t.length ? t[0] : r.reduce(((e,r,o)=>e + (t=>{
                if (!0 === t._$cssResult$)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }
            )(r) + t[o + 1]), t[0]);
            return new s(n,t,a)
        }
          , d = i ? t=>t : t=>t instanceof CSSStyleSheet ? (t=>{
            let e = "";
            for (const r of t.cssRules)
                e += r.cssText;
            return (t=>new s("string" == typeof t ? t : t + "",void 0,a))(e)
        }
        )(t) : t;
        var h;
        const u = window
          , m = u.trustedTypes
          , p = m ? m.emptyScript : ""
          , g = u.reactiveElementPolyfillSupport
          , w = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    t = t ? p : null;
                    break;
                case Object:
                case Array:
                    t = null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                let r = t;
                switch (e) {
                case Boolean:
                    r = null !== t;
                    break;
                case Number:
                    r = null === t ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        r = JSON.parse(t)
                    } catch (t) {
                        r = null
                    }
                }
                return r
            }
        }
          , f = (t,e)=>e !== t && (e == e || t == t)
          , v = {
            attribute: !0,
            type: String,
            converter: w,
            reflect: !1,
            hasChanged: f
        }
          , b = "finalized";
        class y extends HTMLElement {
            constructor() {
                super(),
                this._$Ei = new Map,
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this._$El = null,
                this._$Eu()
            }
            static addInitializer(t) {
                var e;
                this.finalize(),
                (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
            }
            static get observedAttributes() {
                this.finalize();
                const t = [];
                return this.elementProperties.forEach(((e,r)=>{
                    const o = this._$Ep(r, e);
                    void 0 !== o && (this._$Ev.set(o, r),
                    t.push(o))
                }
                )),
                t
            }
            static createProperty(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                if (e.state && (e.attribute = !1),
                this.finalize(),
                this.elementProperties.set(t, e),
                !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                    const r = "symbol" == typeof t ? Symbol() : "__" + t
                      , o = this.getPropertyDescriptor(t, r, e);
                    void 0 !== o && Object.defineProperty(this.prototype, t, o)
                }
            }
            static getPropertyDescriptor(t, e, r) {
                return {
                    get() {
                        return this[e]
                    },
                    set(o) {
                        const n = this[t];
                        this[e] = o,
                        this.requestUpdate(t, n, r)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(t) {
                return this.elementProperties.get(t) || v
            }
            static finalize() {
                if (this.hasOwnProperty(b))
                    return !1;
                this[b] = !0;
                const t = Object.getPrototypeOf(this);
                if (t.finalize(),
                void 0 !== t.h && (this.h = [...t.h]),
                this.elementProperties = new Map(t.elementProperties),
                this._$Ev = new Map,
                this.hasOwnProperty("properties")) {
                    const t = this.properties
                      , e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                    for (const r of e)
                        this.createProperty(r, t[r])
                }
                return this.elementStyles = this.finalizeStyles(this.styles),
                !0
            }
            static finalizeStyles(t) {
                const e = [];
                if (Array.isArray(t)) {
                    const r = new Set(t.flat(1 / 0).reverse());
                    for (const t of r)
                        e.unshift(d(t))
                } else
                    void 0 !== t && e.push(d(t));
                return e
            }
            static _$Ep(t, e) {
                const r = e.attribute;
                return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof t ? t.toLowerCase() : void 0
            }
            _$Eu() {
                var t;
                this._$E_ = new Promise((t=>this.enableUpdating = t)),
                this._$AL = new Map,
                this._$Eg(),
                this.requestUpdate(),
                null === (t = this.constructor.h) || void 0 === t || t.forEach((t=>t(this)))
            }
            addController(t) {
                var e, r;
                (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t),
                void 0 !== this.renderRoot && this.isConnected && (null === (r = t.hostConnected) || void 0 === r || r.call(t))
            }
            removeController(t) {
                var e;
                null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach(((t,e)=>{
                    this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]),
                    delete this[e])
                }
                ))
            }
            createRenderRoot() {
                var t;
                const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                return ((t,e)=>{
                    i ? t.adoptedStyleSheets = e.map((t=>t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e=>{
                        const r = document.createElement("style")
                          , o = n.litNonce;
                        void 0 !== o && r.setAttribute("nonce", o),
                        r.textContent = e.cssText,
                        t.appendChild(r)
                    }
                    ))
                }
                )(e, this.constructor.elementStyles),
                e
            }
            connectedCallback() {
                var t;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                null === (t = this._$ES) || void 0 === t || t.forEach((t=>{
                    var e;
                    return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                }
                ))
            }
            enableUpdating(t) {}
            disconnectedCallback() {
                var t;
                null === (t = this._$ES) || void 0 === t || t.forEach((t=>{
                    var e;
                    return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                }
                ))
            }
            attributeChangedCallback(t, e, r) {
                this._$AK(t, r)
            }
            _$EO(t, e) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
                var o;
                const n = this.constructor._$Ep(t, r);
                if (void 0 !== n && !0 === r.reflect) {
                    const i = (void 0 !== (null === (o = r.converter) || void 0 === o ? void 0 : o.toAttribute) ? r.converter : w).toAttribute(e, r.type);
                    this._$El = t,
                    null == i ? this.removeAttribute(n) : this.setAttribute(n, i),
                    this._$El = null
                }
            }
            _$AK(t, e) {
                var r;
                const o = this.constructor
                  , n = o._$Ev.get(t);
                if (void 0 !== n && this._$El !== n) {
                    const t = o.getPropertyOptions(n)
                      , i = "function" == typeof t.converter ? {
                        fromAttribute: t.converter
                    } : void 0 !== (null === (r = t.converter) || void 0 === r ? void 0 : r.fromAttribute) ? t.converter : w;
                    this._$El = n,
                    this[n] = i.fromAttribute(e, t.type),
                    this._$El = null
                }
            }
            requestUpdate(t, e, r) {
                let o = !0;
                void 0 !== t && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || f)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e),
                !0 === r.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map),
                this._$EC.set(t, r))) : o = !1),
                !this.isUpdatePending && o && (this._$E_ = this._$Ej())
            }
            async _$Ej() {
                this.isUpdatePending = !0;
                try {
                    await this._$E_
                } catch (t) {
                    Promise.reject(t)
                }
                const t = this.scheduleUpdate();
                return null != t && await t,
                !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var t;
                if (!this.isUpdatePending)
                    return;
                this.hasUpdated,
                this._$Ei && (this._$Ei.forEach(((t,e)=>this[e] = t)),
                this._$Ei = void 0);
                let e = !1;
                const r = this._$AL;
                try {
                    e = this.shouldUpdate(r),
                    e ? (this.willUpdate(r),
                    null === (t = this._$ES) || void 0 === t || t.forEach((t=>{
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                    }
                    )),
                    this.update(r)) : this._$Ek()
                } catch (t) {
                    throw e = !1,
                    this._$Ek(),
                    t
                }
                e && this._$AE(r)
            }
            willUpdate(t) {}
            _$AE(t) {
                var e;
                null === (e = this._$ES) || void 0 === e || e.forEach((t=>{
                    var e;
                    return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                }
                )),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(t)),
                this.updated(t)
            }
            _$Ek() {
                this._$AL = new Map,
                this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(t) {
                return !0
            }
            update(t) {
                void 0 !== this._$EC && (this._$EC.forEach(((t,e)=>this._$EO(e, this[e], t))),
                this._$EC = void 0),
                this._$Ek()
            }
            updated(t) {}
            firstUpdated(t) {}
        }
        var x;
        y[b] = !0,
        y.elementProperties = new Map,
        y.elementStyles = [],
        y.shadowRootOptions = {
            mode: "open"
        },
        null == g || g({
            ReactiveElement: y
        }),
        (null !== (h = u.reactiveElementVersions) && void 0 !== h ? h : u.reactiveElementVersions = []).push("1.6.3");
        const C = window
          , A = C.trustedTypes
          , E = A ? A.createPolicy("lit-html", {
            createHTML: t=>t
        }) : void 0
          , _ = "$lit$"
          , k = "lit$".concat((Math.random() + "").slice(9), "$")
          , O = "?" + k
          , I = "<".concat(O, ">")
          , T = document
          , M = ()=>T.createComment("")
          , P = t=>null === t || "object" != typeof t && "function" != typeof t
          , R = Array.isArray
          , Z = t=>R(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator])
          , S = "[ \t\n\f\r]"
          , $ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , L = /-->/g
          , N = />/g
          , B = RegExp(">|".concat(S, "(?:([^\\s\"'>=/]+)(").concat(S, "*=").concat(S, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g")
          , D = /'/g
          , U = /"/g
          , j = /^(?:script|style|textarea|title)$/i
          , W = t=>function(e) {
            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                o[n - 1] = arguments[n];
            return {
                _$litType$: t,
                strings: e,
                values: o
            }
        }
          , z = W(1)
          , H = W(2)
          , V = Symbol.for("lit-noChange")
          , F = Symbol.for("lit-nothing")
          , q = new WeakMap
          , K = T.createTreeWalker(T, 129, null, !1);
        function Y(t, e) {
            if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return void 0 !== E ? E.createHTML(e) : e
        }
        const Q = (t,e)=>{
            const r = t.length - 1
              , o = [];
            let n, i = 2 === e ? "<svg>" : "", a = $;
            for (let l = 0; l < r; l++) {
                const e = t[l];
                let r, s, c = -1, d = 0;
                for (; d < e.length && (a.lastIndex = d,
                s = a.exec(e),
                null !== s); )
                    d = a.lastIndex,
                    a === $ ? "!--" === s[1] ? a = L : void 0 !== s[1] ? a = N : void 0 !== s[2] ? (j.test(s[2]) && (n = RegExp("</" + s[2], "g")),
                    a = B) : void 0 !== s[3] && (a = B) : a === B ? ">" === s[0] ? (a = null != n ? n : $,
                    c = -1) : void 0 === s[1] ? c = -2 : (c = a.lastIndex - s[2].length,
                    r = s[1],
                    a = void 0 === s[3] ? B : '"' === s[3] ? U : D) : a === U || a === D ? a = B : a === L || a === N ? a = $ : (a = B,
                    n = void 0);
                const h = a === B && t[l + 1].startsWith("/>") ? " " : "";
                i += a === $ ? e + I : c >= 0 ? (o.push(r),
                e.slice(0, c) + _ + e.slice(c) + k + h) : e + k + (-2 === c ? (o.push(void 0),
                l) : h)
            }
            return [Y(t, i + (t[r] || "<?>") + (2 === e ? "</svg>" : "")), o]
        }
        ;
        class J {
            constructor(t, e) {
                let r, {strings: o, _$litType$: n} = t;
                this.parts = [];
                let i = 0
                  , a = 0;
                const l = o.length - 1
                  , s = this.parts
                  , [c,d] = Q(o, n);
                if (this.el = J.createElement(c, e),
                K.currentNode = this.el.content,
                2 === n) {
                    const t = this.el.content
                      , e = t.firstChild;
                    e.remove(),
                    t.append(...e.childNodes)
                }
                for (; null !== (r = K.nextNode()) && s.length < l; ) {
                    if (1 === r.nodeType) {
                        if (r.hasAttributes()) {
                            const t = [];
                            for (const e of r.getAttributeNames())
                                if (e.endsWith(_) || e.startsWith(k)) {
                                    const o = d[a++];
                                    if (t.push(e),
                                    void 0 !== o) {
                                        const t = r.getAttribute(o.toLowerCase() + _).split(k)
                                          , e = /([.?@])?(.*)/.exec(o);
                                        s.push({
                                            type: 1,
                                            index: i,
                                            name: e[2],
                                            strings: t,
                                            ctor: "." === e[1] ? rt : "?" === e[1] ? nt : "@" === e[1] ? it : et
                                        })
                                    } else
                                        s.push({
                                            type: 6,
                                            index: i
                                        })
                                }
                            for (const e of t)
                                r.removeAttribute(e)
                        }
                        if (j.test(r.tagName)) {
                            const t = r.textContent.split(k)
                              , e = t.length - 1;
                            if (e > 0) {
                                r.textContent = A ? A.emptyScript : "";
                                for (let o = 0; o < e; o++)
                                    r.append(t[o], M()),
                                    K.nextNode(),
                                    s.push({
                                        type: 2,
                                        index: ++i
                                    });
                                r.append(t[e], M())
                            }
                        }
                    } else if (8 === r.nodeType)
                        if (r.data === O)
                            s.push({
                                type: 2,
                                index: i
                            });
                        else {
                            let t = -1;
                            for (; -1 !== (t = r.data.indexOf(k, t + 1)); )
                                s.push({
                                    type: 7,
                                    index: i
                                }),
                                t += k.length - 1
                        }
                    i++
                }
            }
            static createElement(t, e) {
                const r = T.createElement("template");
                return r.innerHTML = t,
                r
            }
        }
        function G(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
              , o = arguments.length > 3 ? arguments[3] : void 0;
            var n, i, a, l;
            if (e === V)
                return e;
            let s = void 0 !== o ? null === (n = r._$Co) || void 0 === n ? void 0 : n[o] : r._$Cl;
            const c = P(e) ? void 0 : e._$litDirective$;
            return (null == s ? void 0 : s.constructor) !== c && (null === (i = null == s ? void 0 : s._$AO) || void 0 === i || i.call(s, !1),
            void 0 === c ? s = void 0 : (s = new c(t),
            s._$AT(t, r, o)),
            void 0 !== o ? (null !== (a = (l = r)._$Co) && void 0 !== a ? a : l._$Co = [])[o] = s : r._$Cl = s),
            void 0 !== s && (e = G(t, s._$AS(t, e.values), s, o)),
            e
        }
        class X {
            constructor(t, e) {
                this._$AV = [],
                this._$AN = void 0,
                this._$AD = t,
                this._$AM = e
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(t) {
                var e;
                const {el: {content: r}, parts: o} = this._$AD
                  , n = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : T).importNode(r, !0);
                K.currentNode = n;
                let i = K.nextNode()
                  , a = 0
                  , l = 0
                  , s = o[0];
                for (; void 0 !== s; ) {
                    if (a === s.index) {
                        let e;
                        2 === s.type ? e = new tt(i,i.nextSibling,this,t) : 1 === s.type ? e = new s.ctor(i,s.name,s.strings,this,t) : 6 === s.type && (e = new at(i,this,t)),
                        this._$AV.push(e),
                        s = o[++l]
                    }
                    a !== (null == s ? void 0 : s.index) && (i = K.nextNode(),
                    a++)
                }
                return K.currentNode = T,
                n
            }
            v(t) {
                let e = 0;
                for (const r of this._$AV)
                    void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, e),
                    e += r.strings.length - 2) : r._$AI(t[e])),
                    e++
            }
        }
        class tt {
            constructor(t, e, r, o) {
                var n;
                this.type = 2,
                this._$AH = F,
                this._$AN = void 0,
                this._$AA = t,
                this._$AB = e,
                this._$AM = r,
                this.options = o,
                this._$Cp = null === (n = null == o ? void 0 : o.isConnected) || void 0 === n || n
            }
            get _$AU() {
                var t, e;
                return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
            }
            get parentNode() {
                let t = this._$AA.parentNode;
                const e = this._$AM;
                return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode),
                t
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(t) {
                t = G(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this),
                P(t) ? t === F || null == t || "" === t ? (this._$AH !== F && this._$AR(),
                this._$AH = F) : t !== this._$AH && t !== V && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : Z(t) ? this.T(t) : this._(t)
            }
            k(t) {
                return this._$AA.parentNode.insertBefore(t, this._$AB)
            }
            $(t) {
                this._$AH !== t && (this._$AR(),
                this._$AH = this.k(t))
            }
            _(t) {
                this._$AH !== F && P(this._$AH) ? this._$AA.nextSibling.data = t : this.$(T.createTextNode(t)),
                this._$AH = t
            }
            g(t) {
                var e;
                const {values: r, _$litType$: o} = t
                  , n = "number" == typeof o ? this._$AC(t) : (void 0 === o.el && (o.el = J.createElement(Y(o.h, o.h[0]), this.options)),
                o);
                if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n)
                    this._$AH.v(r);
                else {
                    const t = new X(n,this)
                      , e = t.u(this.options);
                    t.v(r),
                    this.$(e),
                    this._$AH = t
                }
            }
            _$AC(t) {
                let e = q.get(t.strings);
                return void 0 === e && q.set(t.strings, e = new J(t)),
                e
            }
            T(t) {
                R(this._$AH) || (this._$AH = [],
                this._$AR());
                const e = this._$AH;
                let r, o = 0;
                for (const n of t)
                    o === e.length ? e.push(r = new tt(this.k(M()),this.k(M()),this,this.options)) : r = e[o],
                    r._$AI(n),
                    o++;
                o < e.length && (this._$AR(r && r._$AB.nextSibling, o),
                e.length = o)
            }
            _$AR() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                var r;
                for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, e); t && t !== this._$AB; ) {
                    const e = t.nextSibling;
                    t.remove(),
                    t = e
                }
            }
            setConnected(t) {
                var e;
                void 0 === this._$AM && (this._$Cp = t,
                null === (e = this._$AP) || void 0 === e || e.call(this, t))
            }
        }
        class et {
            constructor(t, e, r, o, n) {
                this.type = 1,
                this._$AH = F,
                this._$AN = void 0,
                this.element = t,
                this.name = e,
                this._$AM = o,
                this.options = n,
                r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String),
                this.strings = r) : this._$AH = F
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this
                  , r = arguments.length > 2 ? arguments[2] : void 0
                  , o = arguments.length > 3 ? arguments[3] : void 0;
                const n = this.strings;
                let i = !1;
                if (void 0 === n)
                    t = G(this, t, e, 0),
                    i = !P(t) || t !== this._$AH && t !== V,
                    i && (this._$AH = t);
                else {
                    const o = t;
                    let a, l;
                    for (t = n[0],
                    a = 0; a < n.length - 1; a++)
                        l = G(this, o[r + a], e, a),
                        l === V && (l = this._$AH[a]),
                        i || (i = !P(l) || l !== this._$AH[a]),
                        l === F ? t = F : t !== F && (t += (null != l ? l : "") + n[a + 1]),
                        this._$AH[a] = l
                }
                i && !o && this.j(t)
            }
            j(t) {
                t === F ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
            }
        }
        class rt extends et {
            constructor() {
                super(...arguments),
                this.type = 3
            }
            j(t) {
                this.element[this.name] = t === F ? void 0 : t
            }
        }
        const ot = A ? A.emptyScript : "";
        class nt extends et {
            constructor() {
                super(...arguments),
                this.type = 4
            }
            j(t) {
                t && t !== F ? this.element.setAttribute(this.name, ot) : this.element.removeAttribute(this.name)
            }
        }
        class it extends et {
            constructor(t, e, r, o, n) {
                super(t, e, r, o, n),
                this.type = 5
            }
            _$AI(t) {
                var e;
                if ((t = null !== (e = G(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== e ? e : F) === V)
                    return;
                const r = this._$AH
                  , o = t === F && r !== F || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive
                  , n = t !== F && (r === F || o);
                o && this.element.removeEventListener(this.name, this, r),
                n && this.element.addEventListener(this.name, this, t),
                this._$AH = t
            }
            handleEvent(t) {
                var e, r;
                "function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== r ? r : this.element, t) : this._$AH.handleEvent(t)
            }
        }
        class at {
            constructor(t, e, r) {
                this.element = t,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = e,
                this.options = r
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(t) {
                G(this, t)
            }
        }
        const lt = C.litHtmlPolyfillSupport;
        null == lt || lt(J, tt),
        (null !== (x = C.litHtmlVersions) && void 0 !== x ? x : C.litHtmlVersions = []).push("2.8.0");
        var st, ct;
        class dt extends y {
            constructor() {
                super(...arguments),
                this.renderOptions = {
                    host: this
                },
                this._$Do = void 0
            }
            createRenderRoot() {
                var t, e;
                const r = super.createRenderRoot();
                return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild),
                r
            }
            update(t) {
                const e = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                super.update(t),
                this._$Do = ((t,e,r)=>{
                    var o, n;
                    const i = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : e;
                    let a = i._$litPart$;
                    if (void 0 === a) {
                        const t = null !== (n = null == r ? void 0 : r.renderBefore) && void 0 !== n ? n : null;
                        i._$litPart$ = a = new tt(e.insertBefore(M(), t),t,void 0,null != r ? r : {})
                    }
                    return a._$AI(t),
                    a
                }
                )(e, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var t;
                super.connectedCallback(),
                null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
            }
            disconnectedCallback() {
                var t;
                super.disconnectedCallback(),
                null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
            }
            render() {
                return V
            }
        }
        dt.finalized = !0,
        dt._$litElement$ = !0,
        null === (st = globalThis.litElementHydrateSupport) || void 0 === st || st.call(globalThis, {
            LitElement: dt
        });
        const ht = globalThis.litElementPolyfillSupport;
        null == ht || ht({
            LitElement: dt
        });
        (null !== (ct = globalThis.litElementVersions) && void 0 !== ct ? ct : globalThis.litElementVersions = []).push("3.3.3");
        const ut = t=>e=>"function" == typeof e ? ((t,e)=>(customElements.define(t, e),
        e))(t, e) : ((t,e)=>{
            const {kind: r, elements: o} = e;
            return {
                kind: r,
                elements: o,
                finisher(e) {
                    customElements.define(t, e)
                }
            }
        }
        )(t, e)
          , mt = (t,e)=>"method" === e.kind && e.descriptor && !("value"in e.descriptor) ? {
            ...e,
            finisher(r) {
                r.createProperty(e.key, t)
            }
        } : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: e.key,
            initializer() {
                "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
            },
            finisher(r) {
                r.createProperty(e.key, t)
            }
        }
          , pt = (t,e,r)=>{
            e.constructor.createProperty(r, t)
        }
        ;
        function gt(t) {
            return (e,r)=>void 0 !== r ? pt(t, e, r) : mt(t, e)
        }
        function wt(t) {
            return gt({
                ...t,
                state: !0
            })
        }
        var ft;
        null === (ft = window.HTMLSlotElement) || void 0 === ft || ft.prototype.assignedElements;
        const vt = 1;
        class bt {
            constructor(t) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(t, e, r) {
                this._$Ct = t,
                this._$AM = e,
                this._$Ci = r
            }
            _$AS(t, e) {
                return this.update(t, e)
            }
            update(t, e) {
                return this.render(...e)
            }
        }
        const yt = (t=>function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                r[o] = arguments[o];
            return {
                _$litDirective$: t,
                values: r
            }
        }
        )(class extends bt {
            constructor(t) {
                var e;
                if (super(t),
                t.type !== vt || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2)
                    throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
            }
            render(t) {
                return " " + Object.keys(t).filter((e=>t[e])).join(" ") + " "
            }
            update(t, e) {
                let[r] = e;
                var o, n;
                if (void 0 === this.it) {
                    this.it = new Set,
                    void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((t=>"" !== t))));
                    for (const t in r)
                        r[t] && !(null === (o = this.nt) || void 0 === o ? void 0 : o.has(t)) && this.it.add(t);
                    return this.render(r)
                }
                const i = t.element.classList;
                this.it.forEach((t=>{
                    t in r || (i.remove(t),
                    this.it.delete(t))
                }
                ));
                for (const a in r) {
                    const t = !!r[a];
                    t === this.it.has(a) || (null === (n = this.nt) || void 0 === n ? void 0 : n.has(a)) || (t ? (i.add(a),
                    this.it.add(a)) : (i.remove(a),
                    this.it.delete(a)))
                }
                return V
            }
        }
        );
        var xt = r(9386);
        const Ct = {
            duration: .3,
            delay: 0,
            endDelay: 0,
            repeat: 0,
            easing: "ease"
        }
          , At = {
            ms: t=>1e3 * t,
            s: t=>t / 1e3
        }
          , Et = ()=>{}
          , _t = t=>t;
        function kt(t) {
            let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (t && "finished" !== t.playState)
                try {
                    t.stop ? t.stop() : (e && t.commitStyles(),
                    t.cancel())
                } catch (r) {}
        }
        const Ot = t=>t()
          , It = function(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ct.duration;
            return new Proxy({
                animations: t.map(Ot).filter(Boolean),
                duration: r,
                options: e
            },Tt)
        }
          , Tt = {
            get: (t,e)=>{
                const r = t.animations[0];
                switch (e) {
                case "duration":
                    return t.duration;
                case "currentTime":
                    return At.s((null === r || void 0 === r ? void 0 : r[e]) || 0);
                case "playbackRate":
                case "playState":
                    return null === r || void 0 === r ? void 0 : r[e];
                case "finished":
                    return t.finished || (t.finished = Promise.all(t.animations.map(Mt)).catch(Et)),
                    t.finished;
                case "stop":
                    return ()=>{
                        t.animations.forEach((t=>kt(t)))
                    }
                    ;
                case "forEachNative":
                    return e=>{
                        t.animations.forEach((r=>e(r, t)))
                    }
                    ;
                default:
                    return "undefined" === typeof (null === r || void 0 === r ? void 0 : r[e]) ? void 0 : ()=>t.animations.forEach((t=>t[e]()))
                }
            }
            ,
            set: (t,e,r)=>{
                switch (e) {
                case "currentTime":
                    r = At.ms(r);
                case "playbackRate":
                    for (let o = 0; o < t.animations.length; o++)
                        t.animations[o][e] = r;
                    return !0
                }
                return !1
            }
        }
          , Mt = t=>t.finished
          , Pt = t=>"object" === typeof t && Boolean(t.createAnimation)
          , Rt = t=>"number" === typeof t
          , Zt = t=>Array.isArray(t) && !Rt(t[0])
          , St = (t,e,r)=>-r * t + r * e + t
          , $t = (t,e,r)=>e - t === 0 ? 1 : (r - t) / (e - t);
        function Lt(t, e) {
            const r = t[t.length - 1];
            for (let o = 1; o <= e; o++) {
                const n = $t(0, e, o);
                t.push(St(r, 1, n))
            }
        }
        const Nt = (t,e,r)=>{
            const o = e - t;
            return ((r - t) % o + o) % o + t
        }
        ;
        const Bt = (t,e,r)=>Math.min(Math.max(r, t), e);
        function Dt(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
                const e = [0];
                return Lt(e, t - 1),
                e
            }(t.length)
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _t;
            const o = t.length
              , n = o - e.length;
            return n > 0 && Lt(e, n),
            n=>{
                let i = 0;
                for (; i < o - 2 && !(n < e[i + 1]); i++)
                    ;
                let a = Bt(0, 1, $t(e[i], e[i + 1], n));
                const l = function(t, e) {
                    return Zt(t) ? t[Nt(0, t.length, e)] : t
                }(r, i);
                return a = l(a),
                St(t[i], t[i + 1], a)
            }
        }
        const Ut = (t,e,r)=>(((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
          , jt = 1e-7
          , Wt = 12;
        function zt(t, e, r, o) {
            if (t === e && r === o)
                return _t;
            const n = e=>function(t, e, r, o, n) {
                let i, a, l = 0;
                do {
                    a = e + (r - e) / 2,
                    i = Ut(a, o, n) - t,
                    i > 0 ? r = a : e = a
                } while (Math.abs(i) > jt && ++l < Wt);
                return a
            }(e, 0, 1, t, r);
            return t=>0 === t || 1 === t ? t : Ut(n(t), e, o)
        }
        const Ht = t=>"function" === typeof t
          , Vt = t=>Array.isArray(t) && Rt(t[0])
          , Ft = {
            ease: zt(.25, .1, .25, 1),
            "ease-in": zt(.42, 0, 1, 1),
            "ease-in-out": zt(.42, 0, .58, 1),
            "ease-out": zt(0, 0, .58, 1)
        }
          , qt = /\((.*?)\)/;
        function Kt(t) {
            if (Ht(t))
                return t;
            if (Vt(t))
                return zt(...t);
            if (Ft[t])
                return Ft[t];
            if (t.startsWith("steps")) {
                const e = qt.exec(t);
                if (e) {
                    const t = e[1].split(",");
                    return function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                        return r=>{
                            const o = (r = "end" === e ? Math.min(r, .999) : Math.max(r, .001)) * t
                              , n = "end" === e ? Math.floor(o) : Math.ceil(o);
                            return Bt(0, 1, n / t)
                        }
                    }(parseFloat(t[0]), t[1].trim())
                }
            }
            return _t
        }
        class Yt {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 1]
                  , {easing: r, duration: o=Ct.duration, delay: n=Ct.delay, endDelay: i=Ct.endDelay, repeat: a=Ct.repeat, offset: l, direction: s="normal", autoplay: c=!0} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (this.startTime = null,
                this.rate = 1,
                this.t = 0,
                this.cancelTimestamp = null,
                this.easing = _t,
                this.duration = 0,
                this.totalDuration = 0,
                this.repeat = 0,
                this.playState = "idle",
                this.finished = new Promise(((t,e)=>{
                    this.resolve = t,
                    this.reject = e
                }
                )),
                r = r || Ct.easing,
                Pt(r)) {
                    const t = r.createAnimation(e);
                    r = t.easing,
                    e = t.keyframes || e,
                    o = t.duration || o
                }
                this.repeat = a,
                this.easing = Zt(r) ? _t : Kt(r),
                this.updateDuration(o);
                const d = Dt(e, l, Zt(r) ? r.map(Kt) : _t);
                this.tick = e=>{
                    var r;
                    let o = 0;
                    o = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate,
                    this.t = o,
                    o /= 1e3,
                    o = Math.max(o - n, 0),
                    "finished" === this.playState && void 0 === this.pauseTime && (o = this.totalDuration);
                    const a = o / this.duration;
                    let l = Math.floor(a)
                      , c = a % 1;
                    !c && a >= 1 && (c = 1),
                    1 === c && l--;
                    const h = l % 2;
                    ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (c = 1 - c);
                    const u = o >= this.totalDuration ? 1 : Math.min(c, 1)
                      , m = d(this.easing(u));
                    t(m);
                    void 0 === this.pauseTime && ("finished" === this.playState || o >= this.totalDuration + i) ? (this.playState = "finished",
                    null === (r = this.resolve) || void 0 === r || r.call(this, m)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                }
                ,
                c && this.play()
            }
            play() {
                const t = performance.now();
                this.playState = "running",
                void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t),
                this.cancelTimestamp = this.startTime,
                this.pauseTime = void 0,
                this.frameRequestId = requestAnimationFrame(this.tick)
            }
            pause() {
                this.playState = "paused",
                this.pauseTime = this.t
            }
            finish() {
                this.playState = "finished",
                this.tick(0)
            }
            stop() {
                var t;
                this.playState = "idle",
                void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId),
                null === (t = this.reject) || void 0 === t || t.call(this, !1)
            }
            cancel() {
                this.stop(),
                this.tick(this.cancelTimestamp)
            }
            reverse() {
                this.rate *= -1
            }
            commitStyles() {}
            updateDuration(t) {
                this.duration = t,
                this.totalDuration = t * (this.repeat + 1)
            }
            get currentTime() {
                return this.t
            }
            set currentTime(t) {
                void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
            }
            get playbackRate() {
                return this.rate
            }
            set playbackRate(t) {
                this.rate = t
            }
        }
        class Qt {
            setAnimation(t) {
                this.animation = t,
                null === t || void 0 === t || t.finished.then((()=>this.clearAnimation())).catch((()=>{}
                ))
            }
            clearAnimation() {
                this.animation = this.generator = void 0
            }
        }
        const Jt = new WeakMap;
        function Gt(t) {
            return Jt.has(t) || Jt.set(t, {
                transforms: [],
                values: new Map
            }),
            Jt.get(t)
        }
        const Xt = ["", "X", "Y", "Z"]
          , te = {
            x: "translateX",
            y: "translateY",
            z: "translateZ"
        }
          , ee = {
            syntax: "<angle>",
            initialValue: "0deg",
            toDefaultUnit: t=>t + "deg"
        }
          , re = {
            translate: {
                syntax: "<length-percentage>",
                initialValue: "0px",
                toDefaultUnit: t=>t + "px"
            },
            rotate: ee,
            scale: {
                syntax: "<number>",
                initialValue: 1,
                toDefaultUnit: _t
            },
            skew: ee
        }
          , oe = new Map
          , ne = t=>"--motion-".concat(t)
          , ie = ["x", "y", "z"];
        ["translate", "scale", "rotate", "skew"].forEach((t=>{
            Xt.forEach((e=>{
                ie.push(t + e),
                oe.set(ne(t + e), re[t])
            }
            ))
        }
        ));
        const ae = (t,e)=>ie.indexOf(t) - ie.indexOf(e)
          , le = new Set(ie)
          , se = t=>le.has(t)
          , ce = (t,e)=>{
            te[e] && (e = te[e]);
            const {transforms: r} = Gt(t);
            var o, n;
            n = e,
            -1 === (o = r).indexOf(n) && o.push(n),
            t.style.transform = de(r)
        }
          , de = t=>t.sort(ae).reduce(he, "").trim()
          , he = (t,e)=>"".concat(t, " ").concat(e, "(var(").concat(ne(e), "))")
          , ue = t=>t.startsWith("--")
          , me = new Set;
        const pe = (t,e)=>document.createElement("div").animate(t, e)
          , ge = {
            cssRegisterProperty: ()=>"undefined" !== typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
            waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
            partialKeyframes: ()=>{
                try {
                    pe({
                        opacity: [1]
                    })
                } catch (t) {
                    return !1
                }
                return !0
            }
            ,
            finished: ()=>Boolean(pe({
                opacity: [0, 1]
            }, {
                duration: .001
            }).finished),
            linearEasing: ()=>{
                try {
                    pe({
                        opacity: 0
                    }, {
                        easing: "linear(0, 1)"
                    })
                } catch (t) {
                    return !1
                }
                return !0
            }
        }
          , we = {}
          , fe = {};
        for (const il in ge)
            fe[il] = ()=>(void 0 === we[il] && (we[il] = ge[il]()),
            we[il]);
        const ve = (t,e)=>Ht(t) ? fe.linearEasing() ? "linear(".concat(((t,e)=>{
            let r = "";
            const o = Math.round(e / .015);
            for (let n = 0; n < o; n++)
                r += t($t(0, o - 1, n)) + ", ";
            return r.substring(0, r.length - 2)
        }
        )(t, e), ")") : Ct.easing : Vt(t) ? be(t) : t
          , be = t=>{
            let[e,r,o,n] = t;
            return "cubic-bezier(".concat(e, ", ").concat(r, ", ").concat(o, ", ").concat(n, ")")
        }
        ;
        const ye = t=>Array.isArray(t) ? t : [t];
        function xe(t) {
            return te[t] && (t = te[t]),
            se(t) ? ne(t) : t
        }
        const Ce = {
            get: (t,e)=>{
                e = xe(e);
                let r = ue(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
                if (!r && 0 !== r) {
                    const t = oe.get(e);
                    t && (r = t.initialValue)
                }
                return r
            }
            ,
            set: (t,e,r)=>{
                e = xe(e),
                ue(e) ? t.style.setProperty(e, r) : t.style[e] = r
            }
        }
          , Ae = t=>"string" === typeof t;
        function Ee(t, e, r) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , n = arguments.length > 4 ? arguments[4] : void 0;
            const i = window.__MOTION_DEV_TOOLS_RECORD
              , a = !1 !== o.record && i;
            let l, {duration: s=Ct.duration, delay: c=Ct.delay, endDelay: d=Ct.endDelay, repeat: h=Ct.repeat, easing: u=Ct.easing, persist: m=!1, direction: p, offset: g, allowWebkitAcceleration: w=!1, autoplay: f=!0} = o;
            const v = Gt(t)
              , b = se(e);
            let y = fe.waapi();
            b && ce(t, e);
            const x = xe(e)
              , C = function(t, e) {
                return t.has(e) || t.set(e, new Qt),
                t.get(e)
            }(v.values, x)
              , A = oe.get(x);
            return kt(C.animation, !(Pt(u) && C.generator) && !1 !== o.record),
            ()=>{
                const v = ()=>{
                    var e, r;
                    return null !== (r = null !== (e = Ce.get(t, x)) && void 0 !== e ? e : null === A || void 0 === A ? void 0 : A.initialValue) && void 0 !== r ? r : 0
                }
                ;
                let E = function(t, e) {
                    for (let r = 0; r < t.length; r++)
                        null === t[r] && (t[r] = r ? t[r - 1] : e());
                    return t
                }(ye(r), v);
                const _ = function(t, e) {
                    var r;
                    let o = (null === e || void 0 === e ? void 0 : e.toDefaultUnit) || _t;
                    const n = t[t.length - 1];
                    if (Ae(n)) {
                        const t = (null === (r = n.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === r ? void 0 : r[2]) || "";
                        t && (o = e=>e + t)
                    }
                    return o
                }(E, A);
                if (Pt(u)) {
                    const t = u.createAnimation(E, "opacity" !== e, v, x, C);
                    u = t.easing,
                    E = t.keyframes || E,
                    s = t.duration || s
                }
                if (ue(x) && (fe.cssRegisterProperty() ? function(t) {
                    if (!me.has(t)) {
                        me.add(t);
                        try {
                            const {syntax: e, initialValue: r} = oe.has(t) ? oe.get(t) : {};
                            CSS.registerProperty({
                                name: t,
                                inherits: !1,
                                syntax: e,
                                initialValue: r
                            })
                        } catch (e) {}
                    }
                }(x) : y = !1),
                b && !fe.linearEasing() && (Ht(u) || Zt(u) && u.some(Ht)) && (y = !1),
                y) {
                    A && (E = E.map((t=>Rt(t) ? A.toDefaultUnit(t) : t))),
                    1 !== E.length || fe.partialKeyframes() && !a || E.unshift(v());
                    const e = {
                        delay: At.ms(c),
                        duration: At.ms(s),
                        endDelay: At.ms(d),
                        easing: Zt(u) ? void 0 : ve(u, s),
                        direction: p,
                        iterations: h + 1,
                        fill: "both"
                    };
                    l = t.animate({
                        [x]: E,
                        offset: g,
                        easing: Zt(u) ? u.map((t=>ve(t, s))) : void 0
                    }, e),
                    l.finished || (l.finished = new Promise(((t,e)=>{
                        l.onfinish = t,
                        l.oncancel = e
                    }
                    )));
                    const r = E[E.length - 1];
                    l.finished.then((()=>{
                        m || (Ce.set(t, x, r),
                        l.cancel())
                    }
                    )).catch(Et),
                    w || (l.playbackRate = 1.000001)
                } else if (n && b)
                    E = E.map((t=>"string" === typeof t ? parseFloat(t) : t)),
                    1 === E.length && E.unshift(parseFloat(v())),
                    l = new n((e=>{
                        Ce.set(t, x, _ ? _(e) : e)
                    }
                    ),E,Object.assign(Object.assign({}, o), {
                        duration: s,
                        easing: u
                    }));
                else {
                    const e = E[E.length - 1];
                    Ce.set(t, x, A && Rt(e) ? A.toDefaultUnit(e) : e)
                }
                return a && i(t, e, E, {
                    duration: s,
                    delay: c,
                    easing: u,
                    repeat: h,
                    offset: g
                }, "motion-one"),
                C.setAnimation(l),
                l && !f && l.pause(),
                l
            }
        }
        const _e = (t,e)=>t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
        function ke(t, e, r) {
            return Ht(t) ? t(e, r) : t
        }
        const Oe = (Ie = Yt,
        function(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const o = (t = function(t, e) {
                var r;
                return "string" === typeof t ? e ? (null !== (r = e[t]) && void 0 !== r || (e[t] = document.querySelectorAll(t)),
                t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]),
                Array.from(t || [])
            }(t)).length;
            Boolean(o),
            Boolean(e);
            const n = [];
            for (let i = 0; i < o; i++) {
                const a = t[i];
                for (const t in e) {
                    const l = _e(r, t);
                    l.delay = ke(l.delay, i, o);
                    const s = Ee(a, t, e[t], l, Ie);
                    n.push(s)
                }
            }
            return It(n, r, r.duration)
        }
        );
        var Ie;
        function Te(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return It([()=>{
                const r = new Yt(t,[0, 1],e);
                return r.finished.catch((()=>{}
                )),
                r
            }
            ], e, e.duration)
        }
        function Me(t, e, r) {
            return (Ht(t) ? Te : Oe)(t, e, r)
        }
        const Pe = t=>null != t ? t : F;
        var Re, Ze, Se, $e, Le, Ne, Be, De, Ue, je, We, ze, He, Ve, Fe, qe, Ke, Ye, Qe, Je, Ge, Xe, tr, er, rr, or, nr, ir, ar, lr, sr, cr, dr, hr, ur, mr, pr, gr, wr, fr, vr, br, yr, xr, Cr, Ar, Er, _r, kr, Or, Ir, Tr, Mr, Pr, Rr, Zr, Sr, $r, Lr, Nr, Br, Dr, Ur, jr, Wr, zr, Hr, Vr, Fr, qr, Kr, Yr, Qr, Jr, Gr, Xr, to, eo, ro, oo, no, io, ao, lo, so, co, ho, uo, mo, po, go, wo, fo, vo, bo, yo, xo, Co, Ao, Eo, _o, ko, Oo, Io, To, Mo, Po, Ro, Zo, So, $o, Lo, No, Bo, Do, Uo, jo, Wo, zo, Ho, Vo, Fo, qo, Ko, Yo, Qo, Jo, Go, Xo, tn, en = r(6316), rn = Object.defineProperty, on = Object.getOwnPropertySymbols, nn = Object.prototype.hasOwnProperty, an = Object.prototype.propertyIsEnumerable, ln = (t,e,r)=>e in t ? rn(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r, sn = (t,e)=>{
            for (var r in e || (e = {}))
                nn.call(e, r) && ln(t, r, e[r]);
            if (on)
                for (var r of on(e))
                    an.call(e, r) && ln(t, r, e[r]);
            return t
        }
        ;
        const cn = {
            getPreset: t=>({
                "--wcm-accent-color": "#3396FF",
                "--wcm-accent-fill-color": "#FFFFFF",
                "--wcm-z-index": "89",
                "--wcm-background-color": "#3396FF",
                "--wcm-background-border-radius": "8px",
                "--wcm-container-border-radius": "30px",
                "--wcm-wallet-icon-border-radius": "15px",
                "--wcm-wallet-icon-large-border-radius": "30px",
                "--wcm-wallet-icon-small-border-radius": "7px",
                "--wcm-input-border-radius": "28px",
                "--wcm-button-border-radius": "10px",
                "--wcm-notification-border-radius": "36px",
                "--wcm-secondary-button-border-radius": "28px",
                "--wcm-icon-button-border-radius": "50%",
                "--wcm-button-hover-highlight-border-radius": "10px",
                "--wcm-text-big-bold-size": "20px",
                "--wcm-text-big-bold-weight": "600",
                "--wcm-text-big-bold-line-height": "24px",
                "--wcm-text-big-bold-letter-spacing": "-0.03em",
                "--wcm-text-big-bold-text-transform": "none",
                "--wcm-text-xsmall-bold-size": "10px",
                "--wcm-text-xsmall-bold-weight": "700",
                "--wcm-text-xsmall-bold-line-height": "12px",
                "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                "--wcm-text-xsmall-bold-text-transform": "uppercase",
                "--wcm-text-xsmall-regular-size": "12px",
                "--wcm-text-xsmall-regular-weight": "600",
                "--wcm-text-xsmall-regular-line-height": "14px",
                "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                "--wcm-text-xsmall-regular-text-transform": "none",
                "--wcm-text-small-thin-size": "14px",
                "--wcm-text-small-thin-weight": "500",
                "--wcm-text-small-thin-line-height": "16px",
                "--wcm-text-small-thin-letter-spacing": "-0.03em",
                "--wcm-text-small-thin-text-transform": "none",
                "--wcm-text-small-regular-size": "14px",
                "--wcm-text-small-regular-weight": "600",
                "--wcm-text-small-regular-line-height": "16px",
                "--wcm-text-small-regular-letter-spacing": "-0.03em",
                "--wcm-text-small-regular-text-transform": "none",
                "--wcm-text-medium-regular-size": "16px",
                "--wcm-text-medium-regular-weight": "600",
                "--wcm-text-medium-regular-line-height": "20px",
                "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                "--wcm-text-medium-regular-text-transform": "none",
                "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                "--wcm-success-color": "rgb(38,181,98)",
                "--wcm-error-color": "rgb(242, 90, 103)",
                "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                "--wcm-overlay-backdrop-filter": "none"
            }[t]),
            setTheme() {
                const t = document.querySelector(":root")
                  , {themeVariables: e} = xt.ThemeCtrl.state;
                if (t) {
                    const r = sn(sn(sn({}, function() {
                        var t;
                        const e = {
                            light: {
                                foreground: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(121,134,134)",
                                    3: "rgb(158,169,169)"
                                },
                                background: {
                                    1: "rgb(255,255,255)",
                                    2: "rgb(241,243,243)",
                                    3: "rgb(228,231,231)"
                                },
                                overlay: "rgba(0,0,0,0.1)"
                            },
                            dark: {
                                foreground: {
                                    1: "rgb(228,231,231)",
                                    2: "rgb(148,158,158)",
                                    3: "rgb(110,119,119)"
                                },
                                background: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(39,42,42)",
                                    3: "rgb(59,64,64)"
                                },
                                overlay: "rgba(255,255,255,0.1)"
                            }
                        }[null != (t = xt.ThemeCtrl.state.themeMode) ? t : "dark"];
                        return {
                            "--wcm-color-fg-1": e.foreground[1],
                            "--wcm-color-fg-2": e.foreground[2],
                            "--wcm-color-fg-3": e.foreground[3],
                            "--wcm-color-bg-1": e.background[1],
                            "--wcm-color-bg-2": e.background[2],
                            "--wcm-color-bg-3": e.background[3],
                            "--wcm-color-overlay": e.overlay
                        }
                    }()), {
                        "--wcm-accent-color": "#3396FF",
                        "--wcm-accent-fill-color": "#FFFFFF",
                        "--wcm-z-index": "89",
                        "--wcm-background-color": "#3396FF",
                        "--wcm-background-border-radius": "8px",
                        "--wcm-container-border-radius": "30px",
                        "--wcm-wallet-icon-border-radius": "15px",
                        "--wcm-wallet-icon-large-border-radius": "30px",
                        "--wcm-wallet-icon-small-border-radius": "7px",
                        "--wcm-input-border-radius": "28px",
                        "--wcm-button-border-radius": "10px",
                        "--wcm-notification-border-radius": "36px",
                        "--wcm-secondary-button-border-radius": "28px",
                        "--wcm-icon-button-border-radius": "50%",
                        "--wcm-button-hover-highlight-border-radius": "10px",
                        "--wcm-text-big-bold-size": "20px",
                        "--wcm-text-big-bold-weight": "600",
                        "--wcm-text-big-bold-line-height": "24px",
                        "--wcm-text-big-bold-letter-spacing": "-0.03em",
                        "--wcm-text-big-bold-text-transform": "none",
                        "--wcm-text-xsmall-bold-size": "10px",
                        "--wcm-text-xsmall-bold-weight": "700",
                        "--wcm-text-xsmall-bold-line-height": "12px",
                        "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                        "--wcm-text-xsmall-bold-text-transform": "uppercase",
                        "--wcm-text-xsmall-regular-size": "12px",
                        "--wcm-text-xsmall-regular-weight": "600",
                        "--wcm-text-xsmall-regular-line-height": "14px",
                        "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                        "--wcm-text-xsmall-regular-text-transform": "none",
                        "--wcm-text-small-thin-size": "14px",
                        "--wcm-text-small-thin-weight": "500",
                        "--wcm-text-small-thin-line-height": "16px",
                        "--wcm-text-small-thin-letter-spacing": "-0.03em",
                        "--wcm-text-small-thin-text-transform": "none",
                        "--wcm-text-small-regular-size": "14px",
                        "--wcm-text-small-regular-weight": "600",
                        "--wcm-text-small-regular-line-height": "16px",
                        "--wcm-text-small-regular-letter-spacing": "-0.03em",
                        "--wcm-text-small-regular-text-transform": "none",
                        "--wcm-text-medium-regular-size": "16px",
                        "--wcm-text-medium-regular-weight": "600",
                        "--wcm-text-medium-regular-line-height": "20px",
                        "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                        "--wcm-text-medium-regular-text-transform": "none",
                        "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                        "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                        "--wcm-success-color": "rgb(38,181,98)",
                        "--wcm-error-color": "rgb(242, 90, 103)",
                        "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                        "--wcm-overlay-backdrop-filter": "none"
                    }), e);
                    Object.entries(r).forEach((e=>{
                        let[r,o] = e;
                        return t.style.setProperty(r, o)
                    }
                    ))
                }
            },
            globalCss: c(Re || (Re = (0,
            o.Z)(["*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}"])))
        }
          , dn = c(Ze || (Ze = (0,
        o.Z)(["button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}"])));
        var hn = Object.defineProperty
          , un = Object.getOwnPropertyDescriptor
          , mn = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? un(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && hn(e, r, i),
            i
        }
        ;
        let pn = class extends dt {
            constructor() {
                super(...arguments),
                this.disabled = !1,
                this.iconLeft = void 0,
                this.iconRight = void 0,
                this.onClick = ()=>null,
                this.variant = "default"
            }
            render() {
                const t = {
                    "wcm-icon-left": void 0 !== this.iconLeft,
                    "wcm-icon-right": void 0 !== this.iconRight,
                    "wcm-ghost": "ghost" === this.variant,
                    "wcm-outline": "outline" === this.variant
                };
                let e = "inverse";
                return "ghost" === this.variant && (e = "secondary"),
                "outline" === this.variant && (e = "accent"),
                z(Se || (Se = (0,
                o.Z)(['<button class="', '" ?disabled="', '" @click="', '">', '<wcm-text variant="small-regular" color="', '"><slot></slot></wcm-text>', "</button>"])), yt(t), this.disabled, this.onClick, this.iconLeft, e, this.iconRight)
            }
        }
        ;
        pn.styles = [cn.globalCss, dn],
        mn([gt({
            type: Boolean
        })], pn.prototype, "disabled", 2),
        mn([gt()], pn.prototype, "iconLeft", 2),
        mn([gt()], pn.prototype, "iconRight", 2),
        mn([gt()], pn.prototype, "onClick", 2),
        mn([gt()], pn.prototype, "variant", 2),
        pn = mn([ut("wcm-button")], pn);
        const gn = c($e || ($e = (0,
        o.Z)([":host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}"])));
        var wn = Object.defineProperty
          , fn = Object.getOwnPropertyDescriptor
          , vn = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? fn(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && wn(e, r, i),
            i
        }
        ;
        let bn = class extends dt {
            constructor() {
                super(...arguments),
                this.disabled = !1,
                this.variant = "primary"
            }
            render() {
                const t = {
                    "wcm-secondary": "secondary" === this.variant
                };
                return z(Le || (Le = (0,
                o.Z)(['<button ?disabled="', '" class="', '"><slot></slot></button>'])), this.disabled, yt(t))
            }
        }
        ;
        bn.styles = [cn.globalCss, gn],
        vn([gt({
            type: Boolean
        })], bn.prototype, "disabled", 2),
        vn([gt()], bn.prototype, "variant", 2),
        bn = vn([ut("wcm-button-big")], bn);
        const yn = c(Ne || (Ne = (0,
        o.Z)([":host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}"])));
        var xn = Object.defineProperty
          , Cn = Object.getOwnPropertyDescriptor;
        let An = class extends dt {
            render() {
                return z(Be || (Be = (0,
                o.Z)(["<div><slot></slot></div>"])))
            }
        }
        ;
        An.styles = [cn.globalCss, yn],
        An = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Cn(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && xn(e, r, i),
            i
        }
        )([ut("wcm-info-footer")], An);
        const En = {
            CROSS_ICON: H(De || (De = (0,
            o.Z)(['<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>']))),
            WALLET_CONNECT_LOGO: H(Ue || (Ue = (0,
            o.Z)(['<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>']))),
            WALLET_CONNECT_ICON: H(je || (je = (0,
            o.Z)(['<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>']))),
            WALLET_CONNECT_ICON_COLORED: H(We || (We = (0,
            o.Z)(['<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>']))),
            BACK_ICON: H(ze || (ze = (0,
            o.Z)(['<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>']))),
            COPY_ICON: H(He || (He = (0,
            o.Z)(['<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>']))),
            RETRY_ICON: H(Ve || (Ve = (0,
            o.Z)(['<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>']))),
            DESKTOP_ICON: H(Fe || (Fe = (0,
            o.Z)(['<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>']))),
            MOBILE_ICON: H(qe || (qe = (0,
            o.Z)(['<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>']))),
            ARROW_DOWN_ICON: H(Ke || (Ke = (0,
            o.Z)(['<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>']))),
            ARROW_UP_RIGHT_ICON: H(Ye || (Ye = (0,
            o.Z)(['<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>']))),
            ARROW_RIGHT_ICON: H(Qe || (Qe = (0,
            o.Z)(['<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>']))),
            QRCODE_ICON: H(Je || (Je = (0,
            o.Z)(['<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>']))),
            SCAN_ICON: H(Ge || (Ge = (0,
            o.Z)(['<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>']))),
            CHECKMARK_ICON: H(Xe || (Xe = (0,
            o.Z)(['<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>']))),
            SEARCH_ICON: H(tr || (tr = (0,
            o.Z)(['<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>']))),
            WALLET_PLACEHOLDER: H(er || (er = (0,
            o.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>']))),
            GLOBE_ICON: H(rr || (rr = (0,
            o.Z)(['<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>'])))
        }
          , _n = c(or || (or = (0,
        o.Z)([".wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}"])));
        var kn = Object.defineProperty
          , On = Object.getOwnPropertyDescriptor;
        let In = class extends dt {
            render() {
                return z(nr || (nr = (0,
                o.Z)(['<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">', ' <button @click="', '">', "</button></div>"])), En.WALLET_CONNECT_LOGO, xt.jb.close, En.CROSS_ICON)
            }
        }
        ;
        In.styles = [cn.globalCss, _n],
        In = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? On(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && kn(e, r, i),
            i
        }
        )([ut("wcm-modal-backcard")], In);
        const Tn = c(ir || (ir = (0,
        o.Z)(["main{padding:20px;padding-top:0;width:100%}"])));
        var Mn = Object.defineProperty
          , Pn = Object.getOwnPropertyDescriptor;
        let Rn = class extends dt {
            render() {
                return z(ar || (ar = (0,
                o.Z)(["<main><slot></slot></main>"])))
            }
        }
        ;
        Rn.styles = [cn.globalCss, Tn],
        Rn = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Pn(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Mn(e, r, i),
            i
        }
        )([ut("wcm-modal-content")], Rn);
        const Zn = c(lr || (lr = (0,
        o.Z)(["footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}"])));
        var Sn = Object.defineProperty
          , $n = Object.getOwnPropertyDescriptor;
        let Ln = class extends dt {
            render() {
                return z(sr || (sr = (0,
                o.Z)(["<footer><slot></slot></footer>"])))
            }
        }
        ;
        Ln.styles = [cn.globalCss, Zn],
        Ln = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? $n(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Sn(e, r, i),
            i
        }
        )([ut("wcm-modal-footer")], Ln);
        const Nn = c(cr || (cr = (0,
        o.Z)(["header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}"])));
        var Bn = Object.defineProperty
          , Dn = Object.getOwnPropertyDescriptor
          , Un = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Dn(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Bn(e, r, i),
            i
        }
        ;
        let jn = class extends dt {
            constructor() {
                super(...arguments),
                this.title = "",
                this.onAction = void 0,
                this.actionIcon = void 0,
                this.border = !1
            }
            backBtnTemplate() {
                return z(dr || (dr = (0,
                o.Z)(['<button class="wcm-back-btn" @click="', '">', "</button>"])), xt.AV.goBack, En.BACK_ICON)
            }
            actionBtnTemplate() {
                return z(hr || (hr = (0,
                o.Z)(['<button class="wcm-action-btn" @click="', '">', "</button>"])), this.onAction, this.actionIcon)
            }
            render() {
                const t = {
                    "wcm-border": this.border
                }
                  , e = xt.AV.state.history.length > 1
                  , r = this.title ? z(ur || (ur = (0,
                o.Z)(['<wcm-text variant="big-bold">', "</wcm-text>"])), this.title) : z(mr || (mr = (0,
                o.Z)(["<slot></slot>"])));
                return z(pr || (pr = (0,
                o.Z)(['<header class="', '">', " ", " ", "</header>"])), yt(t), e ? this.backBtnTemplate() : null, r, this.onAction ? this.actionBtnTemplate() : null)
            }
        }
        ;
        jn.styles = [cn.globalCss, Nn],
        Un([gt()], jn.prototype, "title", 2),
        Un([gt()], jn.prototype, "onAction", 2),
        Un([gt()], jn.prototype, "actionIcon", 2),
        Un([gt({
            type: Boolean
        })], jn.prototype, "border", 2),
        jn = Un([ut("wcm-modal-header")], jn);
        const Wn = {
            MOBILE_BREAKPOINT: 600,
            WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
            EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
            getShadowRootElement(t, e) {
                const r = t.renderRoot.querySelector(e);
                if (!r)
                    throw new Error("".concat(e, " not found"));
                return r
            },
            getWalletIcon(t) {
                let {id: e, image_id: r} = t;
                const {walletImages: o} = xt.ConfigCtrl.state;
                return null != o && o[e] ? o[e] : r ? xt.ExplorerCtrl.getWalletImageUrl(r) : ""
            },
            getWalletName(t) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && t.length > 8 ? "".concat(t.substring(0, 8), "..") : t
            },
            isMobileAnimation: ()=>window.innerWidth <= Wn.MOBILE_BREAKPOINT,
            async preloadImage(t) {
                const e = new Promise(((e,r)=>{
                    const o = new Image;
                    o.onload = e,
                    o.onerror = r,
                    o.crossOrigin = "anonymous",
                    o.src = t
                }
                ));
                return Promise.race([e, xt.zv.wait(3e3)])
            },
            getErrorMessage: t=>t instanceof Error ? t.message : "Unknown Error",
            debounce(t) {
                let e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                return function() {
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
                        n[i] = arguments[i];
                    e && clearTimeout(e),
                    e = setTimeout((function() {
                        t(...n)
                    }
                    ), r)
                }
            },
            handleMobileLinking(t) {
                const {walletConnectUri: e} = xt.OptionsCtrl.state
                  , {mobile: r, name: o} = t
                  , n = null === r || void 0 === r ? void 0 : r.native
                  , i = null === r || void 0 === r ? void 0 : r.universal;
                Wn.setRecentWallet(t),
                e && function(t) {
                    let e = "";
                    n ? e = xt.zv.formatUniversalUrl(n, t, o) : i && (e = xt.zv.formatNativeUrl(i, t, o)),
                    xt.zv.openHref(e, "_self")
                }(e)
            },
            handleAndroidLinking() {
                const {walletConnectUri: t} = xt.OptionsCtrl.state;
                t && (xt.zv.setWalletConnectAndroidDeepLink(t),
                xt.zv.openHref(t, "_self"))
            },
            async handleUriCopy() {
                const {walletConnectUri: t} = xt.OptionsCtrl.state;
                if (t)
                    try {
                        await navigator.clipboard.writeText(t),
                        xt.ToastCtrl.openToast("Link copied", "success")
                    } catch {
                        xt.ToastCtrl.openToast("Failed to copy", "error")
                    }
            },
            getCustomImageUrls() {
                const {walletImages: t} = xt.ConfigCtrl.state
                  , e = Object.values(null !== t && void 0 !== t ? t : {});
                return Object.values(e)
            },
            truncate(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
                return t.length <= e ? t : "".concat(t.substring(0, 4), "...").concat(t.substring(t.length - 4))
            },
            setRecentWallet(t) {
                try {
                    localStorage.setItem(Wn.WCM_RECENT_WALLET_DATA, JSON.stringify(t))
                } catch {
                    console.info("Unable to set recent wallet")
                }
            },
            getRecentWallet() {
                try {
                    const t = localStorage.getItem(Wn.WCM_RECENT_WALLET_DATA);
                    return t ? JSON.parse(t) : void 0
                } catch {
                    console.info("Unable to get recent wallet")
                }
            },
            caseSafeIncludes: (t,e)=>t.toUpperCase().includes(e.toUpperCase()),
            openWalletExplorerUrl() {
                xt.zv.openHref(Wn.EXPLORER_WALLET_URL, "_blank")
            },
            getCachedRouterWalletPlatforms() {
                const {desktop: t, mobile: e} = xt.zv.getWalletRouterData()
                  , r = Boolean(null === t || void 0 === t ? void 0 : t.native)
                  , o = Boolean(null === t || void 0 === t ? void 0 : t.universal);
                return {
                    isDesktop: r,
                    isMobile: Boolean(null === e || void 0 === e ? void 0 : e.native) || Boolean(null === e || void 0 === e ? void 0 : e.universal),
                    isWeb: o
                }
            },
            goToConnectingView(t) {
                xt.AV.setData({
                    Wallet: t
                });
                const e = xt.zv.isMobile()
                  , {isDesktop: r, isWeb: o, isMobile: n} = Wn.getCachedRouterWalletPlatforms();
                e ? n ? xt.AV.push("MobileConnecting") : o ? xt.AV.push("WebConnecting") : xt.AV.push("InstallWallet") : r ? xt.AV.push("DesktopConnecting") : o ? xt.AV.push("WebConnecting") : n ? xt.AV.push("MobileQrcodeConnecting") : xt.AV.push("InstallWallet")
            }
        }
          , zn = c(gr || (gr = (0,
        o.Z)([".wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}"])));
        var Hn = Object.defineProperty
          , Vn = Object.getOwnPropertyDescriptor
          , Fn = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Vn(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Hn(e, r, i),
            i
        }
        ;
        let qn = class extends dt {
            constructor() {
                super(),
                this.view = xt.AV.state.view,
                this.prevView = xt.AV.state.view,
                this.unsubscribe = void 0,
                this.oldHeight = "0px",
                this.resizeObserver = void 0,
                this.unsubscribe = xt.AV.subscribe((t=>{
                    this.view !== t.view && this.onChangeRoute()
                }
                ))
            }
            firstUpdated() {
                this.resizeObserver = new ResizeObserver((t=>{
                    let[e] = t;
                    const r = "".concat(e.contentRect.height, "px");
                    "0px" !== this.oldHeight && Me(this.routerEl, {
                        height: [this.oldHeight, r]
                    }, {
                        duration: .2
                    }),
                    this.oldHeight = r
                }
                )),
                this.resizeObserver.observe(this.contentEl)
            }
            disconnectedCallback() {
                var t, e;
                null == (t = this.unsubscribe) || t.call(this),
                null == (e = this.resizeObserver) || e.disconnect()
            }
            get routerEl() {
                return Wn.getShadowRootElement(this, ".wcm-router")
            }
            get contentEl() {
                return Wn.getShadowRootElement(this, ".wcm-content")
            }
            viewTemplate() {
                switch (this.view) {
                case "ConnectWallet":
                    return z(wr || (wr = (0,
                    o.Z)(["<wcm-connect-wallet-view></wcm-connect-wallet-view>"])));
                case "DesktopConnecting":
                    return z(fr || (fr = (0,
                    o.Z)(["<wcm-desktop-connecting-view></wcm-desktop-connecting-view>"])));
                case "MobileConnecting":
                    return z(vr || (vr = (0,
                    o.Z)(["<wcm-mobile-connecting-view></wcm-mobile-connecting-view>"])));
                case "WebConnecting":
                    return z(br || (br = (0,
                    o.Z)(["<wcm-web-connecting-view></wcm-web-connecting-view>"])));
                case "MobileQrcodeConnecting":
                    return z(yr || (yr = (0,
                    o.Z)(["<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>"])));
                case "WalletExplorer":
                    return z(xr || (xr = (0,
                    o.Z)(["<wcm-wallet-explorer-view></wcm-wallet-explorer-view>"])));
                case "Qrcode":
                    return z(Cr || (Cr = (0,
                    o.Z)(["<wcm-qrcode-view></wcm-qrcode-view>"])));
                case "InstallWallet":
                    return z(Ar || (Ar = (0,
                    o.Z)(["<wcm-install-wallet-view></wcm-install-wallet-view>"])));
                default:
                    return z(Er || (Er = (0,
                    o.Z)(["<div>Not Found</div>"])))
                }
            }
            async onChangeRoute() {
                await Me(this.routerEl, {
                    opacity: [1, 0],
                    scale: [1, 1.02]
                }, {
                    duration: .15,
                    delay: .1
                }).finished,
                this.view = xt.AV.state.view,
                Me(this.routerEl, {
                    opacity: [0, 1],
                    scale: [.99, 1]
                }, {
                    duration: .37,
                    delay: .05
                })
            }
            render() {
                return z(_r || (_r = (0,
                o.Z)(['<div class="wcm-router"><div class="wcm-content">', "</div></div>"])), this.viewTemplate())
            }
        }
        ;
        qn.styles = [cn.globalCss, zn],
        Fn([wt()], qn.prototype, "view", 2),
        Fn([wt()], qn.prototype, "prevView", 2),
        qn = Fn([ut("wcm-modal-router")], qn);
        const Kn = c(kr || (kr = (0,
        o.Z)(["div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}"])));
        var Yn = Object.defineProperty
          , Qn = Object.getOwnPropertyDescriptor
          , Jn = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Qn(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Yn(e, r, i),
            i
        }
        ;
        let Gn = class extends dt {
            constructor() {
                super(),
                this.open = !1,
                this.unsubscribe = void 0,
                this.timeout = void 0,
                this.unsubscribe = xt.ToastCtrl.subscribe((t=>{
                    t.open ? (this.open = !0,
                    this.timeout = setTimeout((()=>xt.ToastCtrl.closeToast()), 2200)) : (this.open = !1,
                    clearTimeout(this.timeout))
                }
                ))
            }
            disconnectedCallback() {
                var t;
                null == (t = this.unsubscribe) || t.call(this),
                clearTimeout(this.timeout),
                xt.ToastCtrl.closeToast()
            }
            render() {
                const {message: t, variant: e} = xt.ToastCtrl.state
                  , r = {
                    "wcm-success": "success" === e,
                    "wcm-error": "error" === e
                };
                return this.open ? z(Or || (Or = (0,
                o.Z)(['<div class="', '">', " ", '<wcm-text variant="small-regular">', "</wcm-text></div>"])), yt(r), "success" === e ? En.CHECKMARK_ICON : null, "error" === e ? En.CROSS_ICON : null, t) : null
            }
        }
        ;
        Gn.styles = [cn.globalCss, Kn],
        Jn([wt()], Gn.prototype, "open", 2),
        Gn = Jn([ut("wcm-modal-toast")], Gn);
        function Xn(t, e, r) {
            return t !== e && (t - e < 0 ? e - t : t - e) <= r + .1
        }
        const ti = {
            generate(t, e, r) {
                const n = "#141414"
                  , i = []
                  , a = function(t, e) {
                    const r = Array.prototype.slice.call(en.create(t, {
                        errorCorrectionLevel: e
                    }).modules.data, 0)
                      , o = Math.sqrt(r.length);
                    return r.reduce(((t,e,r)=>(r % o === 0 ? t.push([e]) : t[t.length - 1].push(e)) && t), [])
                }(t, "Q")
                  , l = e / a.length
                  , s = [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 0,
                    y: 1
                }];
                s.forEach((t=>{
                    let {x: e, y: r} = t;
                    const c = (a.length - 7) * l * e
                      , d = (a.length - 7) * l * r;
                    for (let a = 0; a < s.length; a += 1) {
                        const t = l * (7 - 2 * a);
                        i.push(H(Ir || (Ir = (0,
                        o.Z)(['<rect fill="', '" height="', '" rx="', '" ry="', '" width="', '" x="', '" y="', '">'])), a % 2 === 0 ? n : "#ffffff", t, .45 * t, .45 * t, t, c + l * a, d + l * a))
                    }
                }
                ));
                const c = Math.floor((r + 25) / l)
                  , d = a.length / 2 - c / 2
                  , h = a.length / 2 + c / 2 - 1
                  , u = [];
                a.forEach(((t,e)=>{
                    t.forEach(((t,r)=>{
                        if (a[e][r] && !(e < 7 && r < 7 || e > a.length - 8 && r < 7 || e < 7 && r > a.length - 8) && !(e > d && e < h && r > d && r < h)) {
                            const t = e * l + l / 2
                              , o = r * l + l / 2;
                            u.push([t, o])
                        }
                    }
                    ))
                }
                ));
                const m = {};
                return u.forEach((t=>{
                    let[e,r] = t;
                    m[e] ? m[e].push(r) : m[e] = [r]
                }
                )),
                Object.entries(m).map((t=>{
                    let[e,r] = t;
                    const o = r.filter((t=>r.every((e=>!Xn(t, e, l)))));
                    return [Number(e), o]
                }
                )).forEach((t=>{
                    let[e,r] = t;
                    r.forEach((t=>{
                        i.push(H(Tr || (Tr = (0,
                        o.Z)(['<circle cx="', '" cy="', '" fill="', '" r="', '">'])), e, t, n, l / 2.5))
                    }
                    ))
                }
                )),
                Object.entries(m).filter((t=>{
                    let[e,r] = t;
                    return r.length > 1
                }
                )).map((t=>{
                    let[e,r] = t;
                    const o = r.filter((t=>r.some((e=>Xn(t, e, l)))));
                    return [Number(e), o]
                }
                )).map((t=>{
                    let[e,r] = t;
                    r.sort(((t,e)=>t < e ? -1 : 1));
                    const o = [];
                    for (const n of r) {
                        const t = o.find((t=>t.some((t=>Xn(n, t, l)))));
                        t ? t.push(n) : o.push([n])
                    }
                    return [e, o.map((t=>[t[0], t[t.length - 1]]))]
                }
                )).forEach((t=>{
                    let[e,r] = t;
                    r.forEach((t=>{
                        let[r,a] = t;
                        i.push(H(Mr || (Mr = (0,
                        o.Z)(['<line x1="', '" x2="', '" y1="', '" y2="', '" stroke="', '" stroke-width="', '" stroke-linecap="round">'])), e, e, r, a, n, l / 1.25))
                    }
                    ))
                }
                )),
                i
            }
        }
          , ei = c(Pr || (Pr = (0,
        o.Z)(["@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}"])));
        var ri = Object.defineProperty
          , oi = Object.getOwnPropertyDescriptor
          , ni = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? oi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && ri(e, r, i),
            i
        }
        ;
        let ii = class extends dt {
            constructor() {
                super(...arguments),
                this.uri = "",
                this.size = 0,
                this.imageId = void 0,
                this.walletId = void 0,
                this.imageUrl = void 0
            }
            svgTemplate() {
                const t = "light" === xt.ThemeCtrl.state.themeMode ? this.size : this.size - 36;
                return H(Rr || (Rr = (0,
                o.Z)(['<svg height="', '" width="', '">', "</svg>"])), t, t, ti.generate(this.uri, t, t / 4))
            }
            render() {
                const t = {
                    "wcm-dark": "dark" === xt.ThemeCtrl.state.themeMode
                };
                return z(Zr || (Zr = (0,
                o.Z)(['<div style="', '" class="', '">', " ", "</div>"])), "width: ".concat(this.size, "px"), yt(t), this.walletId || this.imageUrl ? z(Sr || (Sr = (0,
                o.Z)(['<wcm-wallet-image walletId="', '" imageId="', '" imageUrl="', '"></wcm-wallet-image>'])), Pe(this.walletId), Pe(this.imageId), Pe(this.imageUrl)) : En.WALLET_CONNECT_ICON_COLORED, this.svgTemplate())
            }
        }
        ;
        ii.styles = [cn.globalCss, ei],
        ni([gt()], ii.prototype, "uri", 2),
        ni([gt({
            type: Number
        })], ii.prototype, "size", 2),
        ni([gt()], ii.prototype, "imageId", 2),
        ni([gt()], ii.prototype, "walletId", 2),
        ni([gt()], ii.prototype, "imageUrl", 2),
        ii = ni([ut("wcm-qrcode")], ii);
        const ai = c($r || ($r = (0,
        o.Z)([":host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}"])));
        var li = Object.defineProperty
          , si = Object.getOwnPropertyDescriptor
          , ci = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? si(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && li(e, r, i),
            i
        }
        ;
        let di = class extends dt {
            constructor() {
                super(...arguments),
                this.onChange = ()=>null
            }
            render() {
                return z(Lr || (Lr = (0,
                o.Z)(['<input type="text" @input="', '" placeholder="Search wallets"> ', ""])), this.onChange, En.SEARCH_ICON)
            }
        }
        ;
        di.styles = [cn.globalCss, ai],
        ci([gt()], di.prototype, "onChange", 2),
        di = ci([ut("wcm-search-input")], di);
        const hi = c(Nr || (Nr = (0,
        o.Z)(["@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}"])));
        var ui = Object.defineProperty
          , mi = Object.getOwnPropertyDescriptor;
        let pi = class extends dt {
            render() {
                return z(Br || (Br = (0,
                o.Z)(['<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>'])))
            }
        }
        ;
        pi.styles = [cn.globalCss, hi],
        pi = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? mi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && ui(e, r, i),
            i
        }
        )([ut("wcm-spinner")], pi);
        const gi = c(Dr || (Dr = (0,
        o.Z)(["span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}"])));
        var wi = Object.defineProperty
          , fi = Object.getOwnPropertyDescriptor
          , vi = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? fi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && wi(e, r, i),
            i
        }
        ;
        let bi = class extends dt {
            constructor() {
                super(...arguments),
                this.variant = "medium-regular",
                this.color = "primary"
            }
            render() {
                const t = {
                    "wcm-big-bold": "big-bold" === this.variant,
                    "wcm-medium-regular": "medium-regular" === this.variant,
                    "wcm-small-regular": "small-regular" === this.variant,
                    "wcm-small-thin": "small-thin" === this.variant,
                    "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                    "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                    "wcm-color-primary": "primary" === this.color,
                    "wcm-color-secondary": "secondary" === this.color,
                    "wcm-color-tertiary": "tertiary" === this.color,
                    "wcm-color-inverse": "inverse" === this.color,
                    "wcm-color-accnt": "accent" === this.color,
                    "wcm-color-error": "error" === this.color
                };
                return z(Ur || (Ur = (0,
                o.Z)(['<span><slot class="', '"></slot></span>'])), yt(t))
            }
        }
        ;
        bi.styles = [cn.globalCss, gi],
        vi([gt()], bi.prototype, "variant", 2),
        vi([gt()], bi.prototype, "color", 2),
        bi = vi([ut("wcm-text")], bi);
        const yi = c(jr || (jr = (0,
        o.Z)(["button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}"])));
        var xi = Object.defineProperty
          , Ci = Object.getOwnPropertyDescriptor
          , Ai = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Ci(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && xi(e, r, i),
            i
        }
        ;
        let Ei = class extends dt {
            constructor() {
                super(...arguments),
                this.onClick = ()=>null,
                this.name = "",
                this.walletId = "",
                this.label = void 0,
                this.imageId = void 0,
                this.installed = !1,
                this.recent = !1
            }
            sublabelTemplate() {
                return this.recent ? z(Wr || (Wr = (0,
                o.Z)(['<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>']))) : this.installed ? z(zr || (zr = (0,
                o.Z)(['<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>']))) : null
            }
            handleClick() {
                xt.uA.click({
                    name: "WALLET_BUTTON",
                    walletId: this.walletId
                }),
                this.onClick()
            }
            render() {
                var t;
                return z(Hr || (Hr = (0,
                o.Z)(['<button @click="', '"><div><wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image><wcm-text variant="xsmall-regular">', "</wcm-text>", "</div></button>"])), this.handleClick.bind(this), this.walletId, Pe(this.imageId), null != (t = this.label) ? t : Wn.getWalletName(this.name, !0), this.sublabelTemplate())
            }
        }
        ;
        Ei.styles = [cn.globalCss, yi],
        Ai([gt()], Ei.prototype, "onClick", 2),
        Ai([gt()], Ei.prototype, "name", 2),
        Ai([gt()], Ei.prototype, "walletId", 2),
        Ai([gt()], Ei.prototype, "label", 2),
        Ai([gt()], Ei.prototype, "imageId", 2),
        Ai([gt({
            type: Boolean
        })], Ei.prototype, "installed", 2),
        Ai([gt({
            type: Boolean
        })], Ei.prototype, "recent", 2),
        Ei = Ai([ut("wcm-wallet-button")], Ei);
        const _i = c(Vr || (Vr = (0,
        o.Z)([":host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}"])));
        var ki = Object.defineProperty
          , Oi = Object.getOwnPropertyDescriptor
          , Ii = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Oi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && ki(e, r, i),
            i
        }
        ;
        let Ti = class extends dt {
            constructor() {
                super(...arguments),
                this.walletId = "",
                this.imageId = void 0,
                this.imageUrl = void 0
            }
            render() {
                var t;
                const e = null != (t = this.imageUrl) && t.length ? this.imageUrl : Wn.getWalletIcon({
                    id: this.walletId,
                    image_id: this.imageId
                });
                return z(Fr || (Fr = (0,
                o.Z)(["", ""])), e.length ? z(qr || (qr = (0,
                o.Z)(['<div><img crossorigin="anonymous" src="', '" alt="', '"></div>'])), e, this.id) : En.WALLET_PLACEHOLDER)
            }
        }
        ;
        Ti.styles = [cn.globalCss, _i],
        Ii([gt()], Ti.prototype, "walletId", 2),
        Ii([gt()], Ti.prototype, "imageId", 2),
        Ii([gt()], Ti.prototype, "imageUrl", 2),
        Ti = Ii([ut("wcm-wallet-image")], Ti);
        var Mi = Object.defineProperty
          , Pi = Object.getOwnPropertyDescriptor
          , Ri = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Pi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Mi(e, r, i),
            i
        }
        ;
        let Zi = class extends dt {
            constructor() {
                super(),
                this.preload = !0,
                this.preloadData()
            }
            async loadImages(t) {
                try {
                    null != t && t.length && await Promise.all(t.map((async t=>Wn.preloadImage(t))))
                } catch {
                    console.info("Unsuccessful attempt at preloading some images", t)
                }
            }
            async preloadListings() {
                if (xt.ConfigCtrl.state.enableExplorer) {
                    await xt.ExplorerCtrl.getRecomendedWallets(),
                    xt.OptionsCtrl.setIsDataLoaded(!0);
                    const {recomendedWallets: t} = xt.ExplorerCtrl.state
                      , e = t.map((t=>Wn.getWalletIcon(t)));
                    await this.loadImages(e)
                } else
                    xt.OptionsCtrl.setIsDataLoaded(!0)
            }
            async preloadCustomImages() {
                const t = Wn.getCustomImageUrls();
                await this.loadImages(t)
            }
            async preloadData() {
                try {
                    this.preload && (this.preload = !1,
                    await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                } catch (t) {
                    console.error(t),
                    xt.ToastCtrl.openToast("Failed preloading", "error")
                }
            }
        }
        ;
        Ri([wt()], Zi.prototype, "preload", 2),
        Zi = Ri([ut("wcm-explorer-context")], Zi);
        var Si = Object.defineProperty
          , $i = Object.getOwnPropertyDescriptor;
        let Li = class extends dt {
            constructor() {
                super(),
                this.unsubscribeTheme = void 0,
                cn.setTheme(),
                this.unsubscribeTheme = xt.ThemeCtrl.subscribe(cn.setTheme)
            }
            disconnectedCallback() {
                var t;
                null == (t = this.unsubscribeTheme) || t.call(this)
            }
        }
        ;
        Li = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? $i(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Si(e, r, i),
            i
        }
        )([ut("wcm-theme-context")], Li);
        const Ni = c(Kr || (Kr = (0,
        o.Z)(["@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}"])));
        var Bi = Object.defineProperty
          , Di = Object.getOwnPropertyDescriptor;
        let Ui = class extends dt {
            onGoToQrcode() {
                xt.AV.push("Qrcode")
            }
            render() {
                const {recomendedWallets: t} = xt.ExplorerCtrl.state
                  , e = [...t, ...t]
                  , r = 2 * xt.zv.RECOMMENDED_WALLET_AMOUNT;
                return z(Yr || (Yr = (0,
                o.Z)(['<wcm-modal-header title="Connect your wallet" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><div class="wcm-title">', '<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">', '</div><wcm-button-big @click="', '"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>'])), this.onGoToQrcode, En.QRCODE_ICON, En.MOBILE_ICON, [...Array(r)].map(((t,r)=>{
                    const n = e[r % e.length];
                    return n ? z(Qr || (Qr = (0,
                    o.Z)(['<wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image>'])), n.id, n.image_id) : En.WALLET_PLACEHOLDER
                }
                )), Wn.handleAndroidLinking)
            }
        }
        ;
        Ui.styles = [cn.globalCss, Ni],
        Ui = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Di(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Bi(e, r, i),
            i
        }
        )([ut("wcm-android-wallet-selection")], Ui);
        const ji = c(Jr || (Jr = (0,
        o.Z)(["@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}"])));
        var Wi = Object.defineProperty
          , zi = Object.getOwnPropertyDescriptor
          , Hi = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? zi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Wi(e, r, i),
            i
        }
        ;
        let Vi = class extends dt {
            constructor() {
                super(...arguments),
                this.walletId = void 0,
                this.imageId = void 0,
                this.isError = !1,
                this.isStale = !1,
                this.label = ""
            }
            svgLoaderTemplate() {
                var t, e;
                const r = null != (e = null == (t = xt.ThemeCtrl.state.themeVariables) ? void 0 : t["--wcm-wallet-icon-large-border-radius"]) ? e : cn.getPreset("--wcm-wallet-icon-large-border-radius");
                let n = 0;
                n = r.includes("%") ? .88 * parseInt(r, 10) : parseInt(r, 10),
                n *= 1.17;
                const i = 317 - 1.57 * n
                  , a = 425 - 1.8 * n;
                return z(Gr || (Gr = (0,
                o.Z)(['<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="', '"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ', '" stroke-dashoffset="', '"></use></svg>'])), n, i, a)
            }
            render() {
                const t = {
                    "wcm-error": this.isError,
                    "wcm-stale": this.isStale
                };
                return z(Xr || (Xr = (0,
                o.Z)(['<div class="', '">', '<wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="', '">', "</wcm-text>"])), yt(t), this.svgLoaderTemplate(), Pe(this.walletId), Pe(this.imageId), this.isError ? "error" : "primary", this.isError ? "Connection declined" : this.label)
            }
        }
        ;
        Vi.styles = [cn.globalCss, ji],
        Hi([gt()], Vi.prototype, "walletId", 2),
        Hi([gt()], Vi.prototype, "imageId", 2),
        Hi([gt({
            type: Boolean
        })], Vi.prototype, "isError", 2),
        Hi([gt({
            type: Boolean
        })], Vi.prototype, "isStale", 2),
        Hi([gt()], Vi.prototype, "label", 2),
        Vi = Hi([ut("wcm-connector-waiting")], Vi);
        const Fi = {
            manualWallets() {
                var t, e;
                const {mobileWallets: r, desktopWallets: o} = xt.ConfigCtrl.state
                  , n = null == (t = Fi.recentWallet()) ? void 0 : t.id
                  , i = xt.zv.isMobile() ? r : o
                  , a = null === i || void 0 === i ? void 0 : i.filter((t=>n !== t.id));
                return null != (e = xt.zv.isMobile() ? null === a || void 0 === a ? void 0 : a.map((t=>{
                    let {id: e, name: r, links: o} = t;
                    return {
                        id: e,
                        name: r,
                        mobile: o,
                        links: o
                    }
                }
                )) : null === a || void 0 === a ? void 0 : a.map((t=>{
                    let {id: e, name: r, links: o} = t;
                    return {
                        id: e,
                        name: r,
                        desktop: o,
                        links: o
                    }
                }
                ))) ? e : []
            },
            recentWallet: ()=>Wn.getRecentWallet(),
            recomendedWallets() {
                var t;
                const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || null == (t = Fi.recentWallet()) ? void 0 : t.id
                  , {recomendedWallets: r} = xt.ExplorerCtrl.state;
                return r.filter((t=>e !== t.id))
            }
        }
          , qi = {
            onConnecting(t) {
                Wn.goToConnectingView(t)
            },
            manualWalletsTemplate() {
                return Fi.manualWallets().map((t=>z(to || (to = (0,
                o.Z)(['<wcm-wallet-button walletId="', '" name="', '" .onClick="', '"></wcm-wallet-button>'])), t.id, t.name, (()=>this.onConnecting(t)))))
            },
            recomendedWalletsTemplate() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return Fi.recomendedWallets(t).map((t=>z(eo || (eo = (0,
                o.Z)(['<wcm-wallet-button name="', '" walletId="', '" imageId="', '" .onClick="', '"></wcm-wallet-button>'])), t.name, t.id, t.image_id, (()=>this.onConnecting(t)))))
            },
            recentWalletTemplate() {
                const t = Fi.recentWallet();
                if (t)
                    return z(ro || (ro = (0,
                    o.Z)(['<wcm-wallet-button name="', '" walletId="', '" imageId="', '" .recent="', '" .onClick="', '"></wcm-wallet-button>'])), t.name, t.id, Pe(t.image_id), !0, (()=>this.onConnecting(t)))
            }
        }
          , Ki = c(oo || (oo = (0,
        o.Z)([".wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}"])));
        var Yi = Object.defineProperty
          , Qi = Object.getOwnPropertyDescriptor;
        let Ji = class extends dt {
            render() {
                const {explorerExcludedWalletIds: t, enableExplorer: e} = xt.ConfigCtrl.state
                  , r = "ALL" !== t && e
                  , n = qi.manualWalletsTemplate()
                  , i = qi.recomendedWalletsTemplate();
                let a = [qi.recentWalletTemplate(), ...n, ...i];
                a = a.filter(Boolean);
                const l = a.length > 4 || r;
                let s = [];
                s = l ? a.slice(0, 3) : a;
                const c = Boolean(s.length);
                return z(no || (no = (0,
                o.Z)(['<wcm-modal-header .border="', '" title="Connect your wallet" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">', '<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">', '<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>', ""])), !0, Wn.handleUriCopy, En.COPY_ICON, En.MOBILE_ICON, En.SCAN_ICON, c ? z(io || (io = (0,
                o.Z)(['<wcm-modal-footer><div class="wcm-desktop-title">', '<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">', " ", "</div></wcm-modal-footer>"])), En.DESKTOP_ICON, s, l ? z(ao || (ao = (0,
                o.Z)(["<wcm-view-all-wallets-button></wcm-view-all-wallets-button>"]))) : null) : null)
            }
        }
        ;
        Ji.styles = [cn.globalCss, Ki],
        Ji = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Qi(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Yi(e, r, i),
            i
        }
        )([ut("wcm-desktop-wallet-selection")], Ji);
        const Gi = c(lo || (lo = (0,
        o.Z)(["div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}"])));
        var Xi = Object.defineProperty
          , ta = Object.getOwnPropertyDescriptor;
        let ea = class extends dt {
            render() {
                const {termsOfServiceUrl: t, privacyPolicyUrl: e} = xt.ConfigCtrl.state;
                return (null !== t && void 0 !== t ? t : e) ? z(so || (so = (0,
                o.Z)(['<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app\'s ', " ", " ", "</wcm-text></div>"])), t ? z(co || (co = (0,
                o.Z)(['<a href="', '" target="_blank" rel="noopener noreferrer">Terms of Service</a>'])), t) : null, t && e ? "and" : null, e ? z(ho || (ho = (0,
                o.Z)(['<a href="', '" target="_blank" rel="noopener noreferrer">Privacy Policy</a>'])), e) : null) : null
            }
        }
        ;
        ea.styles = [cn.globalCss, Gi],
        ea = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? ta(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Xi(e, r, i),
            i
        }
        )([ut("wcm-legal-notice")], ea);
        const ra = c(uo || (uo = (0,
        o.Z)(["div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}"])));
        var oa = Object.defineProperty
          , na = Object.getOwnPropertyDescriptor;
        let ia = class extends dt {
            onQrcode() {
                xt.AV.push("Qrcode")
            }
            render() {
                const {explorerExcludedWalletIds: t, enableExplorer: e} = xt.ConfigCtrl.state
                  , r = "ALL" !== t && e
                  , n = qi.manualWalletsTemplate()
                  , i = qi.recomendedWalletsTemplate();
                let a = [qi.recentWalletTemplate(), ...n, ...i];
                a = a.filter(Boolean);
                const l = a.length > 8 || r;
                let s = [];
                s = l ? a.slice(0, 7) : a;
                const c = Boolean(s.length);
                return z(mo || (mo = (0,
                o.Z)(['<wcm-modal-header title="Connect your wallet" .onAction="', '" .actionIcon="', '"></wcm-modal-header>', ""])), this.onQrcode, En.QRCODE_ICON, c ? z(po || (po = (0,
                o.Z)(["<wcm-modal-content><div>", " ", "</div></wcm-modal-content>"])), s, l ? z(go || (go = (0,
                o.Z)(["<wcm-view-all-wallets-button></wcm-view-all-wallets-button>"]))) : null) : null)
            }
        }
        ;
        ia.styles = [cn.globalCss, ra],
        ia = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? na(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && oa(e, r, i),
            i
        }
        )([ut("wcm-mobile-wallet-selection")], ia);
        const aa = c(wo || (wo = (0,
        o.Z)([":host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}"])));
        var la = Object.defineProperty
          , sa = Object.getOwnPropertyDescriptor
          , ca = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? sa(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && la(e, r, i),
            i
        }
        ;
        let da = class extends dt {
            constructor() {
                super(),
                this.open = !1,
                this.active = !1,
                this.unsubscribeModal = void 0,
                this.abortController = void 0,
                this.unsubscribeModal = xt.jb.subscribe((t=>{
                    t.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                }
                ))
            }
            disconnectedCallback() {
                var t;
                null == (t = this.unsubscribeModal) || t.call(this)
            }
            get overlayEl() {
                return Wn.getShadowRootElement(this, ".wcm-overlay")
            }
            get containerEl() {
                return Wn.getShadowRootElement(this, ".wcm-container")
            }
            toggleBodyScroll(t) {
                if (document.querySelector("body"))
                    if (t) {
                        const t = document.getElementById("wcm-styles");
                        null === t || void 0 === t || t.remove()
                    } else
                        document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
            }
            onCloseModal(t) {
                t.target === t.currentTarget && xt.jb.close()
            }
            onOpenModalEvent() {
                this.toggleBodyScroll(!1),
                this.addKeyboardEvents(),
                this.open = !0,
                setTimeout((async()=>{
                    const t = Wn.isMobileAnimation() ? {
                        y: ["50vh", "0vh"]
                    } : {
                        scale: [.98, 1]
                    };
                    await Promise.all([Me(this.overlayEl, {
                        opacity: [0, 1]
                    }, {
                        delay: .1,
                        duration: .2
                    }).finished, Me(this.containerEl, t, {
                        delay: .1,
                        duration: .2
                    }).finished]),
                    this.active = !0
                }
                ), 0)
            }
            async onCloseModalEvent() {
                this.toggleBodyScroll(!0),
                this.removeKeyboardEvents();
                const t = Wn.isMobileAnimation() ? {
                    y: ["0vh", "50vh"]
                } : {
                    scale: [1, .98]
                };
                await Promise.all([Me(this.overlayEl, {
                    opacity: [1, 0]
                }, {
                    duration: .2
                }).finished, Me(this.containerEl, t, {
                    duration: .2
                }).finished]),
                this.containerEl.removeAttribute("style"),
                this.active = !1,
                this.open = !1
            }
            addKeyboardEvents() {
                this.abortController = new AbortController,
                window.addEventListener("keydown", (t=>{
                    var e;
                    "Escape" === t.key ? xt.jb.close() : "Tab" === t.key && (null != (e = t.target) && e.tagName.includes("wcm-") || this.containerEl.focus())
                }
                ), this.abortController),
                this.containerEl.focus()
            }
            removeKeyboardEvents() {
                var t;
                null == (t = this.abortController) || t.abort(),
                this.abortController = void 0
            }
            render() {
                const t = {
                    "wcm-overlay": !0,
                    "wcm-active": this.active
                };
                return z(fo || (fo = (0,
                o.Z)(['<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="', '" @click="', '" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">', "</div></div>"])), yt(t), this.onCloseModal, this.open ? z(vo || (vo = (0,
                o.Z)(['<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>']))) : null)
            }
        }
        ;
        da.styles = [cn.globalCss, aa],
        ca([wt()], da.prototype, "open", 2),
        ca([wt()], da.prototype, "active", 2),
        da = ca([ut("wcm-modal")], da);
        const ha = c(bo || (bo = (0,
        o.Z)(["div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}"])));
        var ua = Object.defineProperty
          , ma = Object.getOwnPropertyDescriptor
          , pa = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? ma(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && ua(e, r, i),
            i
        }
        ;
        let ga = class extends dt {
            constructor() {
                super(...arguments),
                this.isMobile = !1,
                this.isDesktop = !1,
                this.isWeb = !1,
                this.isRetry = !1
            }
            onMobile() {
                xt.zv.isMobile() ? xt.AV.replace("MobileConnecting") : xt.AV.replace("MobileQrcodeConnecting")
            }
            onDesktop() {
                xt.AV.replace("DesktopConnecting")
            }
            onWeb() {
                xt.AV.replace("WebConnecting")
            }
            render() {
                return z(yo || (yo = (0,
                o.Z)(["<div>", " ", " ", " ", "</div>"])), this.isRetry ? z(xo || (xo = (0,
                o.Z)(["<slot></slot>"]))) : null, this.isMobile ? z(Co || (Co = (0,
                o.Z)(['<wcm-button .onClick="', '" .iconLeft="', '" variant="outline">Mobile</wcm-button>'])), this.onMobile, En.MOBILE_ICON) : null, this.isDesktop ? z(Ao || (Ao = (0,
                o.Z)(['<wcm-button .onClick="', '" .iconLeft="', '" variant="outline">Desktop</wcm-button>'])), this.onDesktop, En.DESKTOP_ICON) : null, this.isWeb ? z(Eo || (Eo = (0,
                o.Z)(['<wcm-button .onClick="', '" .iconLeft="', '" variant="outline">Web</wcm-button>'])), this.onWeb, En.GLOBE_ICON) : null)
            }
        }
        ;
        ga.styles = [cn.globalCss, ha],
        pa([gt({
            type: Boolean
        })], ga.prototype, "isMobile", 2),
        pa([gt({
            type: Boolean
        })], ga.prototype, "isDesktop", 2),
        pa([gt({
            type: Boolean
        })], ga.prototype, "isWeb", 2),
        pa([gt({
            type: Boolean
        })], ga.prototype, "isRetry", 2),
        ga = pa([ut("wcm-platform-selection")], ga);
        const wa = c(_o || (_o = (0,
        o.Z)(["button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}"])));
        var fa = Object.defineProperty
          , va = Object.getOwnPropertyDescriptor;
        let ba = class extends dt {
            onClick() {
                xt.AV.push("WalletExplorer")
            }
            render() {
                const {recomendedWallets: t} = xt.ExplorerCtrl.state
                  , e = [...t, ...Fi.manualWallets()].reverse().slice(0, 4);
                return z(ko || (ko = (0,
                o.Z)(['<button @click="', '"><div class="wcm-icons">', " ", '</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>'])), this.onClick, e.map((t=>{
                    const e = Wn.getWalletIcon(t);
                    if (e)
                        return z(Oo || (Oo = (0,
                        o.Z)(['<img crossorigin="anonymous" src="', '">'])), e);
                    const r = Wn.getWalletIcon({
                        id: t.id
                    });
                    return r ? z(Io || (Io = (0,
                    o.Z)(['<img crossorigin="anonymous" src="', '">'])), r) : En.WALLET_PLACEHOLDER
                }
                )), [...Array(4 - e.length)].map((()=>En.WALLET_PLACEHOLDER)))
            }
        }
        ;
        ba.styles = [cn.globalCss, wa],
        ba = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? va(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && fa(e, r, i),
            i
        }
        )([ut("wcm-view-all-wallets-button")], ba);
        const ya = c(To || (To = (0,
        o.Z)([".wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}"])));
        var xa = Object.defineProperty
          , Ca = Object.getOwnPropertyDescriptor
          , Aa = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Ca(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && xa(e, r, i),
            i
        }
        ;
        let Ea = class extends dt {
            constructor() {
                super(),
                this.walletId = "",
                this.imageId = "",
                this.uri = "",
                setTimeout((()=>{
                    const {walletConnectUri: t} = xt.OptionsCtrl.state;
                    this.uri = t
                }
                ), 0)
            }
            get overlayEl() {
                return Wn.getShadowRootElement(this, ".wcm-qr-container")
            }
            render() {
                return z(Mo || (Mo = (0,
                o.Z)(['<div class="wcm-qr-container">', "</div>"])), this.uri ? z(Po || (Po = (0,
                o.Z)(['<wcm-qrcode size="', '" uri="', '" walletId="', '" imageId="', '"></wcm-qrcode>'])), this.overlayEl.offsetWidth, this.uri, Pe(this.walletId), Pe(this.imageId)) : z(Ro || (Ro = (0,
                o.Z)(["<wcm-spinner></wcm-spinner>"]))))
            }
        }
        ;
        Ea.styles = [cn.globalCss, ya],
        Aa([gt()], Ea.prototype, "walletId", 2),
        Aa([gt()], Ea.prototype, "imageId", 2),
        Aa([wt()], Ea.prototype, "uri", 2),
        Ea = Aa([ut("wcm-walletconnect-qr")], Ea);
        var _a = Object.defineProperty
          , ka = Object.getOwnPropertyDescriptor;
        let Oa = class extends dt {
            viewTemplate() {
                return xt.zv.isAndroid() ? z(Zo || (Zo = (0,
                o.Z)(["<wcm-android-wallet-selection></wcm-android-wallet-selection>"]))) : xt.zv.isMobile() ? z(So || (So = (0,
                o.Z)(["<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>"]))) : z($o || ($o = (0,
                o.Z)(["<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>"])))
            }
            render() {
                return z(Lo || (Lo = (0,
                o.Z)(["", "<wcm-legal-notice></wcm-legal-notice>"])), this.viewTemplate())
            }
        }
        ;
        Oa.styles = [cn.globalCss],
        Oa = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? ka(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && _a(e, r, i),
            i
        }
        )([ut("wcm-connect-wallet-view")], Oa);
        const Ia = c(No || (No = (0,
        o.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}"])));
        var Ta = Object.defineProperty
          , Ma = Object.getOwnPropertyDescriptor
          , Pa = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Ma(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Ta(e, r, i),
            i
        }
        ;
        let Ra = class extends dt {
            constructor() {
                super(),
                this.isError = !1,
                this.openDesktopApp()
            }
            onFormatAndRedirect(t) {
                const {desktop: e, name: r} = xt.zv.getWalletRouterData()
                  , o = null === e || void 0 === e ? void 0 : e.native;
                if (o) {
                    const e = xt.zv.formatNativeUrl(o, t, r);
                    xt.zv.openHref(e, "_self")
                }
            }
            openDesktopApp() {
                const {walletConnectUri: t} = xt.OptionsCtrl.state
                  , e = xt.zv.getWalletRouterData();
                Wn.setRecentWallet(e),
                t && this.onFormatAndRedirect(t)
            }
            render() {
                const {name: t, id: e, image_id: r} = xt.zv.getWalletRouterData()
                  , {isMobile: n, isWeb: i} = Wn.getCachedRouterWalletPlatforms();
                return z(Bo || (Bo = (0,
                o.Z)(['<wcm-modal-header title="', '" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-platform-selection .isMobile="', '" .isWeb="', '" .isRetry="', '"><wcm-button .onClick="', '" .iconRight="', '">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>'])), t, Wn.handleUriCopy, En.COPY_ICON, e, Pe(r), "Continue in ".concat(t, "..."), this.isError, "Connection can continue loading if ".concat(t, " is not installed on your device"), n, i, !0, this.openDesktopApp.bind(this), En.RETRY_ICON)
            }
        }
        ;
        Ra.styles = [cn.globalCss, Ia],
        Pa([wt()], Ra.prototype, "isError", 2),
        Ra = Pa([ut("wcm-desktop-connecting-view")], Ra);
        const Za = c(Do || (Do = (0,
        o.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}"])));
        var Sa = Object.defineProperty
          , $a = Object.getOwnPropertyDescriptor;
        let La = class extends dt {
            onInstall(t) {
                t && xt.zv.openHref(t, "_blank")
            }
            render() {
                const {name: t, id: e, image_id: r, homepage: n} = xt.zv.getWalletRouterData();
                return z(Uo || (Uo = (0,
                o.Z)(['<wcm-modal-header title="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="Not Detected" .isStale="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-button .onClick="', '" .iconLeft="', '">Download</wcm-button></wcm-info-footer>'])), t, e, Pe(r), !0, "Download ".concat(t, " to continue. If multiple browser extensions are installed, disable non ").concat(t, " ones and try again"), (()=>this.onInstall(n)), En.ARROW_DOWN_ICON)
            }
        }
        ;
        La.styles = [cn.globalCss, Za],
        La = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? $a(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Sa(e, r, i),
            i
        }
        )([ut("wcm-install-wallet-view")], La);
        const Na = c(jo || (jo = (0,
        o.Z)(["wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}"])));
        var Ba = Object.defineProperty
          , Da = Object.getOwnPropertyDescriptor
          , Ua = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Da(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Ba(e, r, i),
            i
        }
        ;
        let ja = class extends dt {
            constructor() {
                super(),
                this.isError = !1,
                this.openMobileApp()
            }
            onFormatAndRedirect(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const {mobile: r, name: o} = xt.zv.getWalletRouterData()
                  , n = null === r || void 0 === r ? void 0 : r.native
                  , i = null === r || void 0 === r ? void 0 : r.universal;
                if (n && !e) {
                    const e = xt.zv.formatNativeUrl(n, t, o);
                    xt.zv.openHref(e, "_self")
                } else if (i) {
                    const e = xt.zv.formatUniversalUrl(i, t, o);
                    xt.zv.openHref(e, "_self")
                }
            }
            openMobileApp() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const {walletConnectUri: e} = xt.OptionsCtrl.state
                  , r = xt.zv.getWalletRouterData();
                Wn.setRecentWallet(r),
                e && this.onFormatAndRedirect(e, t)
            }
            onGoToAppStore(t) {
                t && xt.zv.openHref(t, "_blank")
            }
            render() {
                const {name: t, id: e, image_id: r, app: n, mobile: i} = xt.zv.getWalletRouterData()
                  , {isWeb: a} = Wn.getCachedRouterWalletPlatforms()
                  , l = null === n || void 0 === n ? void 0 : n.ios
                  , s = null === i || void 0 === i ? void 0 : i.universal;
                return z(Wo || (Wo = (0,
                o.Z)(['<wcm-modal-header title="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="Tap \'Open\' to continue\u2026" .isError="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="', '" .isRetry="', '"><wcm-button .onClick="', '" .iconRight="', '">Retry</wcm-button></wcm-platform-selection>', '</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="', '" imageId="', '"></wcm-wallet-image><wcm-text>', '</wcm-text></div><wcm-button .iconRight="', '" .onClick="', '" variant="ghost">App Store</wcm-button></wcm-info-footer>'])), t, e, Pe(r), this.isError, a, !0, (()=>this.openMobileApp(!1)), En.RETRY_ICON, s ? z(zo || (zo = (0,
                o.Z)(['<wcm-text color="secondary" variant="small-thin">Still doesn\'t work? <span tabindex="0" @click="', '">Try this alternate link</span></wcm-text>'])), (()=>this.openMobileApp(!0))) : null, e, Pe(r), "Get ".concat(t), En.ARROW_RIGHT_ICON, (()=>this.onGoToAppStore(l)))
            }
        }
        ;
        ja.styles = [cn.globalCss, Na],
        Ua([wt()], ja.prototype, "isError", 2),
        ja = Ua([ut("wcm-mobile-connecting-view")], ja);
        const Wa = c(Ho || (Ho = (0,
        o.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}"])));
        var za = Object.defineProperty
          , Ha = Object.getOwnPropertyDescriptor;
        let Va = class extends dt {
            render() {
                const {name: t, id: e, image_id: r} = xt.zv.getWalletRouterData()
                  , {isDesktop: n, isWeb: i} = Wn.getCachedRouterWalletPlatforms();
                return z(Vo || (Vo = (0,
                o.Z)(['<wcm-modal-header title="', '" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="', '" imageId="', '"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-platform-selection .isDesktop="', '" .isWeb="', '"></wcm-platform-selection></wcm-info-footer>'])), t, Wn.handleUriCopy, En.COPY_ICON, e, Pe(r), "Scan this QR Code with your phone's camera or inside ".concat(t, " app"), n, i)
            }
        }
        ;
        Va.styles = [cn.globalCss, Wa],
        Va = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Ha(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && za(e, r, i),
            i
        }
        )([ut("wcm-mobile-qr-connecting-view")], Va);
        var Fa = Object.defineProperty
          , qa = Object.getOwnPropertyDescriptor;
        let Ka = class extends dt {
            render() {
                return z(Fo || (Fo = (0,
                o.Z)(['<wcm-modal-header title="Scan the code" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>'])), Wn.handleUriCopy, En.COPY_ICON)
            }
        }
        ;
        Ka.styles = [cn.globalCss],
        Ka = ((t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? qa(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Fa(e, r, i),
            i
        }
        )([ut("wcm-qrcode-view")], Ka);
        const Ya = c(qo || (qo = (0,
        o.Z)(["wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}"])));
        var Qa = Object.defineProperty
          , Ja = Object.getOwnPropertyDescriptor
          , Ga = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? Ja(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && Qa(e, r, i),
            i
        }
        ;
        let Xa = class extends dt {
            constructor() {
                super(...arguments),
                this.loading = !xt.ExplorerCtrl.state.wallets.listings.length,
                this.firstFetch = !xt.ExplorerCtrl.state.wallets.listings.length,
                this.search = "",
                this.endReached = !1,
                this.intersectionObserver = void 0,
                this.searchDebounce = Wn.debounce((t=>{
                    t.length >= 1 ? (this.firstFetch = !0,
                    this.endReached = !1,
                    this.search = t,
                    xt.ExplorerCtrl.resetSearch(),
                    this.fetchWallets()) : this.search && (this.search = "",
                    this.endReached = this.isLastPage(),
                    xt.ExplorerCtrl.resetSearch())
                }
                ))
            }
            firstUpdated() {
                this.createPaginationObserver()
            }
            disconnectedCallback() {
                var t;
                null == (t = this.intersectionObserver) || t.disconnect()
            }
            get placeholderEl() {
                return Wn.getShadowRootElement(this, ".wcm-placeholder-block")
            }
            createPaginationObserver() {
                this.intersectionObserver = new IntersectionObserver((t=>{
                    let[e] = t;
                    e.isIntersecting && (!this.search || !this.firstFetch) && this.fetchWallets()
                }
                )),
                this.intersectionObserver.observe(this.placeholderEl)
            }
            isLastPage() {
                const {wallets: t, search: e} = xt.ExplorerCtrl.state
                  , {listings: r, total: o} = this.search ? e : t;
                return o <= 40 || r.length >= o
            }
            async fetchWallets() {
                var t;
                const {wallets: e, search: r} = xt.ExplorerCtrl.state
                  , {listings: o, total: n, page: i} = this.search ? r : e;
                if (!this.endReached && (this.firstFetch || n > 40 && o.length < n))
                    try {
                        this.loading = !0;
                        const e = null == (t = xt.OptionsCtrl.state.chains) ? void 0 : t.join(",")
                          , {listings: r} = await xt.ExplorerCtrl.getWallets({
                            page: this.firstFetch ? 1 : i + 1,
                            entries: 40,
                            search: this.search,
                            version: 2,
                            chains: e
                        })
                          , o = r.map((t=>Wn.getWalletIcon(t)));
                        await Promise.all([...o.map((async t=>Wn.preloadImage(t))), xt.zv.wait(300)]),
                        this.endReached = this.isLastPage()
                    } catch (c) {
                        console.error(c),
                        xt.ToastCtrl.openToast(Wn.getErrorMessage(c), "error")
                    } finally {
                        this.loading = !1,
                        this.firstFetch = !1
                    }
            }
            onConnect(t) {
                xt.zv.isAndroid() ? Wn.handleMobileLinking(t) : Wn.goToConnectingView(t)
            }
            onSearchChange(t) {
                const {value: e} = t.target;
                this.searchDebounce(e)
            }
            render() {
                const {wallets: t, search: e} = xt.ExplorerCtrl.state
                  , {listings: r} = this.search ? e : t
                  , n = this.loading && !r.length
                  , i = this.search.length >= 3;
                let a = qi.manualWalletsTemplate()
                  , l = qi.recomendedWalletsTemplate(!0);
                i && (a = a.filter((t=>{
                    let {values: e} = t;
                    return Wn.caseSafeIncludes(e[0], this.search)
                }
                )),
                l = l.filter((t=>{
                    let {values: e} = t;
                    return Wn.caseSafeIncludes(e[0], this.search)
                }
                )));
                const s = !this.loading && !r.length && !l.length
                  , c = {
                    "wcm-loading": n,
                    "wcm-end-reached": this.endReached || !this.loading,
                    "wcm-empty": s
                };
                return z(Ko || (Ko = (0,
                o.Z)(['<wcm-modal-header><wcm-search-input .onChange="', '"></wcm-search-input></wcm-modal-header><wcm-modal-content class="', '"><div class="wcm-grid">', " ", " ", '</div><div class="wcm-placeholder-block">', " ", "</div></wcm-modal-content>"])), this.onSearchChange.bind(this), yt(c), n ? null : a, n ? null : l, n ? null : r.map((t=>z(Yo || (Yo = (0,
                o.Z)(["", ""])), t ? z(Qo || (Qo = (0,
                o.Z)(['<wcm-wallet-button imageId="', '" name="', '" walletId="', '" .onClick="', '"></wcm-wallet-button>'])), t.image_id, t.name, t.id, (()=>this.onConnect(t))) : null))), s ? z(Jo || (Jo = (0,
                o.Z)(['<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>']))) : null, !s && this.loading ? z(Go || (Go = (0,
                o.Z)(["<wcm-spinner></wcm-spinner>"]))) : null)
            }
        }
        ;
        Xa.styles = [cn.globalCss, Ya],
        Ga([wt()], Xa.prototype, "loading", 2),
        Ga([wt()], Xa.prototype, "firstFetch", 2),
        Ga([wt()], Xa.prototype, "search", 2),
        Ga([wt()], Xa.prototype, "endReached", 2),
        Xa = Ga([ut("wcm-wallet-explorer-view")], Xa);
        const tl = c(Xo || (Xo = (0,
        o.Z)(["wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}"])));
        var el = Object.defineProperty
          , rl = Object.getOwnPropertyDescriptor
          , ol = (t,e,r,o)=>{
            for (var n, i = o > 1 ? void 0 : o ? rl(e, r) : e, a = t.length - 1; a >= 0; a--)
                (n = t[a]) && (i = (o ? n(e, r, i) : n(i)) || i);
            return o && i && el(e, r, i),
            i
        }
        ;
        let nl = class extends dt {
            constructor() {
                super(),
                this.isError = !1,
                this.openWebWallet()
            }
            onFormatAndRedirect(t) {
                const {desktop: e, name: r} = xt.zv.getWalletRouterData()
                  , o = null === e || void 0 === e ? void 0 : e.universal;
                if (o) {
                    const e = xt.zv.formatUniversalUrl(o, t, r);
                    xt.zv.openHref(e, "_blank")
                }
            }
            openWebWallet() {
                const {walletConnectUri: t} = xt.OptionsCtrl.state
                  , e = xt.zv.getWalletRouterData();
                Wn.setRecentWallet(e),
                t && this.onFormatAndRedirect(t)
            }
            render() {
                const {name: t, id: e, image_id: r} = xt.zv.getWalletRouterData()
                  , {isMobile: n, isDesktop: i} = Wn.getCachedRouterWalletPlatforms()
                  , a = xt.zv.isMobile();
                return z(tn || (tn = (0,
                o.Z)(['<wcm-modal-header title="', '" .onAction="', '" .actionIcon="', '"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">', '</wcm-text><wcm-platform-selection .isMobile="', '" .isDesktop="', '" .isRetry="', '"><wcm-button .onClick="', '" .iconRight="', '">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>'])), t, Wn.handleUriCopy, En.COPY_ICON, e, Pe(r), "Continue in ".concat(t, "..."), this.isError, "".concat(t, " web app has opened in a new tab. Go there, accept the connection, and come back"), n, !a && i, !0, this.openWebWallet.bind(this), En.RETRY_ICON)
            }
        }
        ;
        nl.styles = [cn.globalCss, tl],
        ol([wt()], nl.prototype, "isError", 2),
        nl = ol([ut("wcm-web-connecting-view")], nl)
    }
}]);
