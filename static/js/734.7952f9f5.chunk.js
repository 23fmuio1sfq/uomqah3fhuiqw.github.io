/*! For license information please see 734.7952f9f5.chunk.js.LICENSE.txt */
(self.webpackChunknew = self.webpackChunknew || []).push([[734], {
    4519: (t,e,r)=>{
        "use strict";
        e.Xx = e._w = e.aP = e.KS = e.jQ = void 0;
        const n = r(4701)
          , i = r(1956)
          , s = r(3227);
        function o(t) {
            const e = new Float64Array(16);
            if (t)
                for (let r = 0; r < t.length; r++)
                    e[r] = t[r];
            return e
        }
        e.jQ = 64,
        e.KS = 64,
        e.aP = 32;
        new Uint8Array(32)[0] = 9;
        const a = o()
          , c = o([1])
          , u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
          , h = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
          , l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
          , p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
          , f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function d(t, e) {
            for (let r = 0; r < 16; r++)
                t[r] = 0 | e[r]
        }
        function g(t) {
            let e = 1;
            for (let r = 0; r < 16; r++) {
                let n = t[r] + e + 65535;
                e = Math.floor(n / 65536),
                t[r] = n - 65536 * e
            }
            t[0] += e - 1 + 37 * (e - 1)
        }
        function v(t, e, r) {
            const n = ~(r - 1);
            for (let i = 0; i < 16; i++) {
                const r = n & (t[i] ^ e[i]);
                t[i] ^= r,
                e[i] ^= r
            }
        }
        function y(t, e) {
            const r = o()
              , n = o();
            for (let i = 0; i < 16; i++)
                n[i] = e[i];
            g(n),
            g(n),
            g(n);
            for (let i = 0; i < 2; i++) {
                r[0] = n[0] - 65517;
                for (let e = 1; e < 15; e++)
                    r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1),
                    r[e - 1] &= 65535;
                r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                const t = r[15] >> 16 & 1;
                r[14] &= 65535,
                v(n, r, 1 - t)
            }
            for (let i = 0; i < 16; i++)
                t[2 * i] = 255 & n[i],
                t[2 * i + 1] = n[i] >> 8
        }
        function m(t, e) {
            let r = 0;
            for (let n = 0; n < 32; n++)
                r |= t[n] ^ e[n];
            return (1 & r - 1 >>> 8) - 1
        }
        function w(t, e) {
            const r = new Uint8Array(32)
              , n = new Uint8Array(32);
            return y(r, t),
            y(n, e),
            m(r, n)
        }
        function _(t) {
            const e = new Uint8Array(32);
            return y(e, t),
            1 & e[0]
        }
        function b(t, e, r) {
            for (let n = 0; n < 16; n++)
                t[n] = e[n] + r[n]
        }
        function E(t, e, r) {
            for (let n = 0; n < 16; n++)
                t[n] = e[n] - r[n]
        }
        function I(t, e, r) {
            let n, i, s = 0, o = 0, a = 0, c = 0, u = 0, h = 0, l = 0, p = 0, f = 0, d = 0, g = 0, v = 0, y = 0, m = 0, w = 0, _ = 0, b = 0, E = 0, I = 0, P = 0, S = 0, O = 0, x = 0, R = 0, C = 0, A = 0, j = 0, T = 0, N = 0, L = 0, D = 0, q = r[0], M = r[1], z = r[2], k = r[3], U = r[4], H = r[5], V = r[6], K = r[7], B = r[8], F = r[9], W = r[10], G = r[11], Z = r[12], J = r[13], Q = r[14], Y = r[15];
            n = e[0],
            s += n * q,
            o += n * M,
            a += n * z,
            c += n * k,
            u += n * U,
            h += n * H,
            l += n * V,
            p += n * K,
            f += n * B,
            d += n * F,
            g += n * W,
            v += n * G,
            y += n * Z,
            m += n * J,
            w += n * Q,
            _ += n * Y,
            n = e[1],
            o += n * q,
            a += n * M,
            c += n * z,
            u += n * k,
            h += n * U,
            l += n * H,
            p += n * V,
            f += n * K,
            d += n * B,
            g += n * F,
            v += n * W,
            y += n * G,
            m += n * Z,
            w += n * J,
            _ += n * Q,
            b += n * Y,
            n = e[2],
            a += n * q,
            c += n * M,
            u += n * z,
            h += n * k,
            l += n * U,
            p += n * H,
            f += n * V,
            d += n * K,
            g += n * B,
            v += n * F,
            y += n * W,
            m += n * G,
            w += n * Z,
            _ += n * J,
            b += n * Q,
            E += n * Y,
            n = e[3],
            c += n * q,
            u += n * M,
            h += n * z,
            l += n * k,
            p += n * U,
            f += n * H,
            d += n * V,
            g += n * K,
            v += n * B,
            y += n * F,
            m += n * W,
            w += n * G,
            _ += n * Z,
            b += n * J,
            E += n * Q,
            I += n * Y,
            n = e[4],
            u += n * q,
            h += n * M,
            l += n * z,
            p += n * k,
            f += n * U,
            d += n * H,
            g += n * V,
            v += n * K,
            y += n * B,
            m += n * F,
            w += n * W,
            _ += n * G,
            b += n * Z,
            E += n * J,
            I += n * Q,
            P += n * Y,
            n = e[5],
            h += n * q,
            l += n * M,
            p += n * z,
            f += n * k,
            d += n * U,
            g += n * H,
            v += n * V,
            y += n * K,
            m += n * B,
            w += n * F,
            _ += n * W,
            b += n * G,
            E += n * Z,
            I += n * J,
            P += n * Q,
            S += n * Y,
            n = e[6],
            l += n * q,
            p += n * M,
            f += n * z,
            d += n * k,
            g += n * U,
            v += n * H,
            y += n * V,
            m += n * K,
            w += n * B,
            _ += n * F,
            b += n * W,
            E += n * G,
            I += n * Z,
            P += n * J,
            S += n * Q,
            O += n * Y,
            n = e[7],
            p += n * q,
            f += n * M,
            d += n * z,
            g += n * k,
            v += n * U,
            y += n * H,
            m += n * V,
            w += n * K,
            _ += n * B,
            b += n * F,
            E += n * W,
            I += n * G,
            P += n * Z,
            S += n * J,
            O += n * Q,
            x += n * Y,
            n = e[8],
            f += n * q,
            d += n * M,
            g += n * z,
            v += n * k,
            y += n * U,
            m += n * H,
            w += n * V,
            _ += n * K,
            b += n * B,
            E += n * F,
            I += n * W,
            P += n * G,
            S += n * Z,
            O += n * J,
            x += n * Q,
            R += n * Y,
            n = e[9],
            d += n * q,
            g += n * M,
            v += n * z,
            y += n * k,
            m += n * U,
            w += n * H,
            _ += n * V,
            b += n * K,
            E += n * B,
            I += n * F,
            P += n * W,
            S += n * G,
            O += n * Z,
            x += n * J,
            R += n * Q,
            C += n * Y,
            n = e[10],
            g += n * q,
            v += n * M,
            y += n * z,
            m += n * k,
            w += n * U,
            _ += n * H,
            b += n * V,
            E += n * K,
            I += n * B,
            P += n * F,
            S += n * W,
            O += n * G,
            x += n * Z,
            R += n * J,
            C += n * Q,
            A += n * Y,
            n = e[11],
            v += n * q,
            y += n * M,
            m += n * z,
            w += n * k,
            _ += n * U,
            b += n * H,
            E += n * V,
            I += n * K,
            P += n * B,
            S += n * F,
            O += n * W,
            x += n * G,
            R += n * Z,
            C += n * J,
            A += n * Q,
            j += n * Y,
            n = e[12],
            y += n * q,
            m += n * M,
            w += n * z,
            _ += n * k,
            b += n * U,
            E += n * H,
            I += n * V,
            P += n * K,
            S += n * B,
            O += n * F,
            x += n * W,
            R += n * G,
            C += n * Z,
            A += n * J,
            j += n * Q,
            T += n * Y,
            n = e[13],
            m += n * q,
            w += n * M,
            _ += n * z,
            b += n * k,
            E += n * U,
            I += n * H,
            P += n * V,
            S += n * K,
            O += n * B,
            x += n * F,
            R += n * W,
            C += n * G,
            A += n * Z,
            j += n * J,
            T += n * Q,
            N += n * Y,
            n = e[14],
            w += n * q,
            _ += n * M,
            b += n * z,
            E += n * k,
            I += n * U,
            P += n * H,
            S += n * V,
            O += n * K,
            x += n * B,
            R += n * F,
            C += n * W,
            A += n * G,
            j += n * Z,
            T += n * J,
            N += n * Q,
            L += n * Y,
            n = e[15],
            _ += n * q,
            b += n * M,
            E += n * z,
            I += n * k,
            P += n * U,
            S += n * H,
            O += n * V,
            x += n * K,
            R += n * B,
            C += n * F,
            A += n * W,
            j += n * G,
            T += n * Z,
            N += n * J,
            L += n * Q,
            D += n * Y,
            s += 38 * b,
            o += 38 * E,
            a += 38 * I,
            c += 38 * P,
            u += 38 * S,
            h += 38 * O,
            l += 38 * x,
            p += 38 * R,
            f += 38 * C,
            d += 38 * A,
            g += 38 * j,
            v += 38 * T,
            y += 38 * N,
            m += 38 * L,
            w += 38 * D,
            i = 1,
            n = s + i + 65535,
            i = Math.floor(n / 65536),
            s = n - 65536 * i,
            n = o + i + 65535,
            i = Math.floor(n / 65536),
            o = n - 65536 * i,
            n = a + i + 65535,
            i = Math.floor(n / 65536),
            a = n - 65536 * i,
            n = c + i + 65535,
            i = Math.floor(n / 65536),
            c = n - 65536 * i,
            n = u + i + 65535,
            i = Math.floor(n / 65536),
            u = n - 65536 * i,
            n = h + i + 65535,
            i = Math.floor(n / 65536),
            h = n - 65536 * i,
            n = l + i + 65535,
            i = Math.floor(n / 65536),
            l = n - 65536 * i,
            n = p + i + 65535,
            i = Math.floor(n / 65536),
            p = n - 65536 * i,
            n = f + i + 65535,
            i = Math.floor(n / 65536),
            f = n - 65536 * i,
            n = d + i + 65535,
            i = Math.floor(n / 65536),
            d = n - 65536 * i,
            n = g + i + 65535,
            i = Math.floor(n / 65536),
            g = n - 65536 * i,
            n = v + i + 65535,
            i = Math.floor(n / 65536),
            v = n - 65536 * i,
            n = y + i + 65535,
            i = Math.floor(n / 65536),
            y = n - 65536 * i,
            n = m + i + 65535,
            i = Math.floor(n / 65536),
            m = n - 65536 * i,
            n = w + i + 65535,
            i = Math.floor(n / 65536),
            w = n - 65536 * i,
            n = _ + i + 65535,
            i = Math.floor(n / 65536),
            _ = n - 65536 * i,
            s += i - 1 + 37 * (i - 1),
            i = 1,
            n = s + i + 65535,
            i = Math.floor(n / 65536),
            s = n - 65536 * i,
            n = o + i + 65535,
            i = Math.floor(n / 65536),
            o = n - 65536 * i,
            n = a + i + 65535,
            i = Math.floor(n / 65536),
            a = n - 65536 * i,
            n = c + i + 65535,
            i = Math.floor(n / 65536),
            c = n - 65536 * i,
            n = u + i + 65535,
            i = Math.floor(n / 65536),
            u = n - 65536 * i,
            n = h + i + 65535,
            i = Math.floor(n / 65536),
            h = n - 65536 * i,
            n = l + i + 65535,
            i = Math.floor(n / 65536),
            l = n - 65536 * i,
            n = p + i + 65535,
            i = Math.floor(n / 65536),
            p = n - 65536 * i,
            n = f + i + 65535,
            i = Math.floor(n / 65536),
            f = n - 65536 * i,
            n = d + i + 65535,
            i = Math.floor(n / 65536),
            d = n - 65536 * i,
            n = g + i + 65535,
            i = Math.floor(n / 65536),
            g = n - 65536 * i,
            n = v + i + 65535,
            i = Math.floor(n / 65536),
            v = n - 65536 * i,
            n = y + i + 65535,
            i = Math.floor(n / 65536),
            y = n - 65536 * i,
            n = m + i + 65535,
            i = Math.floor(n / 65536),
            m = n - 65536 * i,
            n = w + i + 65535,
            i = Math.floor(n / 65536),
            w = n - 65536 * i,
            n = _ + i + 65535,
            i = Math.floor(n / 65536),
            _ = n - 65536 * i,
            s += i - 1 + 37 * (i - 1),
            t[0] = s,
            t[1] = o,
            t[2] = a,
            t[3] = c,
            t[4] = u,
            t[5] = h,
            t[6] = l,
            t[7] = p,
            t[8] = f,
            t[9] = d,
            t[10] = g,
            t[11] = v,
            t[12] = y,
            t[13] = m,
            t[14] = w,
            t[15] = _
        }
        function P(t, e) {
            I(t, e, e)
        }
        function S(t, e) {
            const r = o();
            let n;
            for (n = 0; n < 16; n++)
                r[n] = e[n];
            for (n = 253; n >= 0; n--)
                P(r, r),
                2 !== n && 4 !== n && I(r, r, e);
            for (n = 0; n < 16; n++)
                t[n] = r[n]
        }
        function O(t, e) {
            const r = o()
              , n = o()
              , i = o()
              , s = o()
              , a = o()
              , c = o()
              , u = o()
              , l = o()
              , p = o();
            E(r, t[1], t[0]),
            E(p, e[1], e[0]),
            I(r, r, p),
            b(n, t[0], t[1]),
            b(p, e[0], e[1]),
            I(n, n, p),
            I(i, t[3], e[3]),
            I(i, i, h),
            I(s, t[2], e[2]),
            b(s, s, s),
            E(a, n, r),
            E(c, s, i),
            b(u, s, i),
            b(l, n, r),
            I(t[0], a, c),
            I(t[1], l, u),
            I(t[2], u, c),
            I(t[3], a, l)
        }
        function x(t, e, r) {
            for (let n = 0; n < 4; n++)
                v(t[n], e[n], r)
        }
        function R(t, e) {
            const r = o()
              , n = o()
              , i = o();
            S(i, e[2]),
            I(r, e[0], i),
            I(n, e[1], i),
            y(t, n),
            t[31] ^= _(r) << 7
        }
        function C(t, e, r) {
            d(t[0], a),
            d(t[1], c),
            d(t[2], c),
            d(t[3], a);
            for (let n = 255; n >= 0; --n) {
                const i = r[n / 8 | 0] >> (7 & n) & 1;
                x(t, e, i),
                O(e, t),
                O(t, t),
                x(t, e, i)
            }
        }
        function A(t, e) {
            const r = [o(), o(), o(), o()];
            d(r[0], l),
            d(r[1], p),
            d(r[2], c),
            I(r[3], l, p),
            C(t, r, e)
        }
        function j(t) {
            if (t.length !== e.aP)
                throw new Error("ed25519: seed must be ".concat(e.aP, " bytes"));
            const r = (0,
            i.hash)(t);
            r[0] &= 248,
            r[31] &= 127,
            r[31] |= 64;
            const n = new Uint8Array(32)
              , s = [o(), o(), o(), o()];
            A(s, r),
            R(n, s);
            const a = new Uint8Array(64);
            return a.set(t),
            a.set(n, 32),
            {
                publicKey: n,
                secretKey: a
            }
        }
        e._w = j;
        const T = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function N(t, e) {
            let r, n, i, s;
            for (n = 63; n >= 32; --n) {
                for (r = 0,
                i = n - 32,
                s = n - 12; i < s; ++i)
                    e[i] += r - 16 * e[n] * T[i - (n - 32)],
                    r = Math.floor((e[i] + 128) / 256),
                    e[i] -= 256 * r;
                e[i] += r,
                e[n] = 0
            }
            for (r = 0,
            i = 0; i < 32; i++)
                e[i] += r - (e[31] >> 4) * T[i],
                r = e[i] >> 8,
                e[i] &= 255;
            for (i = 0; i < 32; i++)
                e[i] -= r * T[i];
            for (n = 0; n < 32; n++)
                e[n + 1] += e[n] >> 8,
                t[n] = 255 & e[n]
        }
        function L(t) {
            const e = new Float64Array(64);
            for (let r = 0; r < 64; r++)
                e[r] = t[r];
            for (let r = 0; r < 64; r++)
                t[r] = 0;
            N(t, e)
        }
        function D(t, e) {
            const r = o()
              , n = o()
              , i = o()
              , s = o()
              , h = o()
              , l = o()
              , p = o();
            return d(t[2], c),
            function(t, e) {
                for (let r = 0; r < 16; r++)
                    t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767
            }(t[1], e),
            P(i, t[1]),
            I(s, i, u),
            E(i, i, t[2]),
            b(s, t[2], s),
            P(h, s),
            P(l, h),
            I(p, l, h),
            I(r, p, i),
            I(r, r, s),
            function(t, e) {
                const r = o();
                let n;
                for (n = 0; n < 16; n++)
                    r[n] = e[n];
                for (n = 250; n >= 0; n--)
                    P(r, r),
                    1 !== n && I(r, r, e);
                for (n = 0; n < 16; n++)
                    t[n] = r[n]
            }(r, r),
            I(r, r, i),
            I(r, r, s),
            I(r, r, s),
            I(t[0], r, s),
            P(n, t[0]),
            I(n, n, s),
            w(n, i) && I(t[0], t[0], f),
            P(n, t[0]),
            I(n, n, s),
            w(n, i) ? -1 : (_(t[0]) === e[31] >> 7 && E(t[0], a, t[0]),
            I(t[3], t[0], t[1]),
            0)
        }
        e.Xx = function(t, e) {
            const r = new Float64Array(64)
              , n = [o(), o(), o(), o()]
              , s = (0,
            i.hash)(t.subarray(0, 32));
            s[0] &= 248,
            s[31] &= 127,
            s[31] |= 64;
            const a = new Uint8Array(64);
            a.set(s.subarray(32), 32);
            const c = new i.SHA512;
            c.update(a.subarray(32)),
            c.update(e);
            const u = c.digest();
            c.clean(),
            L(u),
            A(n, u),
            R(a, n),
            c.reset(),
            c.update(a.subarray(0, 32)),
            c.update(t.subarray(32)),
            c.update(e);
            const h = c.digest();
            L(h);
            for (let i = 0; i < 32; i++)
                r[i] = u[i];
            for (let i = 0; i < 32; i++)
                for (let t = 0; t < 32; t++)
                    r[i + t] += h[i] * s[t];
            return N(a.subarray(32), r),
            a
        }
    }
    ,
    1956: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(9734)
          , i = r(3227);
        e.DIGEST_LENGTH = 64,
        e.BLOCK_SIZE = 128;
        var s = function() {
            function t() {
                this.digestLength = e.DIGEST_LENGTH,
                this.blockSize = e.BLOCK_SIZE,
                this._stateHi = new Int32Array(8),
                this._stateLo = new Int32Array(8),
                this._tempHi = new Int32Array(16),
                this._tempLo = new Int32Array(16),
                this._buffer = new Uint8Array(256),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this.reset()
            }
            return t.prototype._initState = function() {
                this._stateHi[0] = 1779033703,
                this._stateHi[1] = 3144134277,
                this._stateHi[2] = 1013904242,
                this._stateHi[3] = 2773480762,
                this._stateHi[4] = 1359893119,
                this._stateHi[5] = 2600822924,
                this._stateHi[6] = 528734635,
                this._stateHi[7] = 1541459225,
                this._stateLo[0] = 4089235720,
                this._stateLo[1] = 2227873595,
                this._stateLo[2] = 4271175723,
                this._stateLo[3] = 1595750129,
                this._stateLo[4] = 2917565137,
                this._stateLo[5] = 725511199,
                this._stateLo[6] = 4215389547,
                this._stateLo[7] = 327033209
            }
            ,
            t.prototype.reset = function() {
                return this._initState(),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this
            }
            ,
            t.prototype.clean = function() {
                i.wipe(this._buffer),
                i.wipe(this._tempHi),
                i.wipe(this._tempLo),
                this.reset()
            }
            ,
            t.prototype.update = function(t, r) {
                if (void 0 === r && (r = t.length),
                this._finished)
                    throw new Error("SHA512: can't update because hash was finished.");
                var n = 0;
                if (this._bytesHashed += r,
                this._bufferLength > 0) {
                    for (; this._bufferLength < e.BLOCK_SIZE && r > 0; )
                        this._buffer[this._bufferLength++] = t[n++],
                        r--;
                    this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                    this._bufferLength = 0)
                }
                for (r >= this.blockSize && (n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, n, r),
                r %= this.blockSize); r > 0; )
                    this._buffer[this._bufferLength++] = t[n++],
                    r--;
                return this
            }
            ,
            t.prototype.finish = function(t) {
                if (!this._finished) {
                    var e = this._bytesHashed
                      , r = this._bufferLength
                      , i = e / 536870912 | 0
                      , s = e << 3
                      , o = e % 128 < 112 ? 128 : 256;
                    this._buffer[r] = 128;
                    for (var c = r + 1; c < o - 8; c++)
                        this._buffer[c] = 0;
                    n.writeUint32BE(i, this._buffer, o - 8),
                    n.writeUint32BE(s, this._buffer, o - 4),
                    a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o),
                    this._finished = !0
                }
                for (c = 0; c < this.digestLength / 8; c++)
                    n.writeUint32BE(this._stateHi[c], t, 8 * c),
                    n.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
                return this
            }
            ,
            t.prototype.digest = function() {
                var t = new Uint8Array(this.digestLength);
                return this.finish(t),
                t
            }
            ,
            t.prototype.saveState = function() {
                if (this._finished)
                    throw new Error("SHA256: cannot save finished state");
                return {
                    stateHi: new Int32Array(this._stateHi),
                    stateLo: new Int32Array(this._stateLo),
                    buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                    bufferLength: this._bufferLength,
                    bytesHashed: this._bytesHashed
                }
            }
            ,
            t.prototype.restoreState = function(t) {
                return this._stateHi.set(t.stateHi),
                this._stateLo.set(t.stateLo),
                this._bufferLength = t.bufferLength,
                t.buffer && this._buffer.set(t.buffer),
                this._bytesHashed = t.bytesHashed,
                this._finished = !1,
                this
            }
            ,
            t.prototype.cleanSavedState = function(t) {
                i.wipe(t.stateHi),
                i.wipe(t.stateLo),
                t.buffer && i.wipe(t.buffer),
                t.bufferLength = 0,
                t.bytesHashed = 0
            }
            ,
            t
        }();
        e.SHA512 = s;
        var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
        function a(t, e, r, i, s, a, c) {
            for (var u, h, l, p, f, d, g, v, y = r[0], m = r[1], w = r[2], _ = r[3], b = r[4], E = r[5], I = r[6], P = r[7], S = i[0], O = i[1], x = i[2], R = i[3], C = i[4], A = i[5], j = i[6], T = i[7]; c >= 128; ) {
                for (var N = 0; N < 16; N++) {
                    var L = 8 * N + a;
                    t[N] = n.readUint32BE(s, L),
                    e[N] = n.readUint32BE(s, L + 4)
                }
                for (N = 0; N < 80; N++) {
                    var D, q, M = y, z = m, k = w, U = _, H = b, V = E, K = I, B = S, F = O, W = x, G = R, Z = C, J = A, Q = j;
                    if (f = 65535 & (h = T),
                    d = h >>> 16,
                    g = 65535 & (u = P),
                    v = u >>> 16,
                    f += 65535 & (h = (C >>> 14 | b << 18) ^ (C >>> 18 | b << 14) ^ (b >>> 9 | C << 23)),
                    d += h >>> 16,
                    g += 65535 & (u = (b >>> 14 | C << 18) ^ (b >>> 18 | C << 14) ^ (C >>> 9 | b << 23)),
                    v += u >>> 16,
                    f += 65535 & (h = C & A ^ ~C & j),
                    d += h >>> 16,
                    g += 65535 & (u = b & E ^ ~b & I),
                    v += u >>> 16,
                    u = o[2 * N],
                    f += 65535 & (h = o[2 * N + 1]),
                    d += h >>> 16,
                    g += 65535 & u,
                    v += u >>> 16,
                    u = t[N % 16],
                    d += (h = e[N % 16]) >>> 16,
                    g += 65535 & u,
                    v += u >>> 16,
                    g += (d += (f += 65535 & h) >>> 16) >>> 16,
                    f = 65535 & (h = p = 65535 & f | d << 16),
                    d = h >>> 16,
                    g = 65535 & (u = l = 65535 & g | (v += g >>> 16) << 16),
                    v = u >>> 16,
                    f += 65535 & (h = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)),
                    d += h >>> 16,
                    g += 65535 & (u = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25)),
                    v += u >>> 16,
                    d += (h = S & O ^ S & x ^ O & x) >>> 16,
                    g += 65535 & (u = y & m ^ y & w ^ m & w),
                    v += u >>> 16,
                    D = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (v += g >>> 16) << 16,
                    q = 65535 & f | d << 16,
                    f = 65535 & (h = G),
                    d = h >>> 16,
                    g = 65535 & (u = U),
                    v = u >>> 16,
                    d += (h = p) >>> 16,
                    g += 65535 & (u = l),
                    v += u >>> 16,
                    m = M,
                    w = z,
                    _ = k,
                    b = U = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (v += g >>> 16) << 16,
                    E = H,
                    I = V,
                    P = K,
                    y = D,
                    O = B,
                    x = F,
                    R = W,
                    C = G = 65535 & f | d << 16,
                    A = Z,
                    j = J,
                    T = Q,
                    S = q,
                    N % 16 === 15)
                        for (L = 0; L < 16; L++)
                            u = t[L],
                            f = 65535 & (h = e[L]),
                            d = h >>> 16,
                            g = 65535 & u,
                            v = u >>> 16,
                            u = t[(L + 9) % 16],
                            f += 65535 & (h = e[(L + 9) % 16]),
                            d += h >>> 16,
                            g += 65535 & u,
                            v += u >>> 16,
                            l = t[(L + 1) % 16],
                            f += 65535 & (h = ((p = e[(L + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)),
                            d += h >>> 16,
                            g += 65535 & (u = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7),
                            v += u >>> 16,
                            l = t[(L + 14) % 16],
                            d += (h = ((p = e[(L + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16,
                            g += 65535 & (u = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6),
                            v += u >>> 16,
                            v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                            t[L] = 65535 & g | v << 16,
                            e[L] = 65535 & f | d << 16
                }
                f = 65535 & (h = S),
                d = h >>> 16,
                g = 65535 & (u = y),
                v = u >>> 16,
                u = r[0],
                d += (h = i[0]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[0] = y = 65535 & g | v << 16,
                i[0] = S = 65535 & f | d << 16,
                f = 65535 & (h = O),
                d = h >>> 16,
                g = 65535 & (u = m),
                v = u >>> 16,
                u = r[1],
                d += (h = i[1]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[1] = m = 65535 & g | v << 16,
                i[1] = O = 65535 & f | d << 16,
                f = 65535 & (h = x),
                d = h >>> 16,
                g = 65535 & (u = w),
                v = u >>> 16,
                u = r[2],
                d += (h = i[2]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[2] = w = 65535 & g | v << 16,
                i[2] = x = 65535 & f | d << 16,
                f = 65535 & (h = R),
                d = h >>> 16,
                g = 65535 & (u = _),
                v = u >>> 16,
                u = r[3],
                d += (h = i[3]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[3] = _ = 65535 & g | v << 16,
                i[3] = R = 65535 & f | d << 16,
                f = 65535 & (h = C),
                d = h >>> 16,
                g = 65535 & (u = b),
                v = u >>> 16,
                u = r[4],
                d += (h = i[4]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[4] = b = 65535 & g | v << 16,
                i[4] = C = 65535 & f | d << 16,
                f = 65535 & (h = A),
                d = h >>> 16,
                g = 65535 & (u = E),
                v = u >>> 16,
                u = r[5],
                d += (h = i[5]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[5] = E = 65535 & g | v << 16,
                i[5] = A = 65535 & f | d << 16,
                f = 65535 & (h = j),
                d = h >>> 16,
                g = 65535 & (u = I),
                v = u >>> 16,
                u = r[6],
                d += (h = i[6]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[6] = I = 65535 & g | v << 16,
                i[6] = j = 65535 & f | d << 16,
                f = 65535 & (h = T),
                d = h >>> 16,
                g = 65535 & (u = P),
                v = u >>> 16,
                u = r[7],
                d += (h = i[7]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                r[7] = P = 65535 & g | v << 16,
                i[7] = T = 65535 & f | d << 16,
                a += 128,
                c -= 128
            }
            return a
        }
        e.hash = function(t) {
            var e = new s;
            e.update(t);
            var r = e.digest();
            return e.clean(),
            r
        }
    }
    ,
    2760: (t,e,r)=>{
        "use strict";
        function n() {
            return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
        }
        function i() {
            const t = n();
            return t.subtle || t.webkitSubtle
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0,
        e.getBrowerCrypto = n,
        e.getSubtleCrypto = i,
        e.isBrowserCryptoAvailable = function() {
            return !!n() && !!i()
        }
    }
    ,
    4300: (t,e)=>{
        "use strict";
        function r() {
            return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
        }
        function n() {
            return "undefined" !== typeof process && "undefined" !== typeof process.versions && "undefined" !== typeof process.versions.node
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.isBrowser = e.isNode = e.isReactNative = void 0,
        e.isReactNative = r,
        e.isNode = n,
        e.isBrowser = function() {
            return !r() && !n()
        }
    }
    ,
    5503: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(900);
        n.__exportStar(r(2760), e),
        n.__exportStar(r(4300), e)
    }
    ,
    900: (t,e,r)=>{
        "use strict";
        r.r(e),
        r.d(e, {
            __assign: ()=>s,
            __asyncDelegator: ()=>_,
            __asyncGenerator: ()=>w,
            __asyncValues: ()=>b,
            __await: ()=>m,
            __awaiter: ()=>h,
            __classPrivateFieldGet: ()=>S,
            __classPrivateFieldSet: ()=>O,
            __createBinding: ()=>p,
            __decorate: ()=>a,
            __exportStar: ()=>f,
            __extends: ()=>i,
            __generator: ()=>l,
            __importDefault: ()=>P,
            __importStar: ()=>I,
            __makeTemplateObject: ()=>E,
            __metadata: ()=>u,
            __param: ()=>c,
            __read: ()=>g,
            __rest: ()=>o,
            __spread: ()=>v,
            __spreadArrays: ()=>y,
            __values: ()=>d
        });
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            ,
            n(t, e)
        };
        function i(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var s = function() {
            return s = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            s.apply(this, arguments)
        };
        function o(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
            }
            return r
        }
        function a(t, e, r, n) {
            var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                o = Reflect.decorate(t, e, r, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
            return s > 3 && o && Object.defineProperty(e, r, o),
            o
        }
        function c(t, e) {
            return function(r, n) {
                e(r, n, t)
            }
        }
        function u(t, e) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        function h(t, e, r, n) {
            return new (r || (r = Promise))((function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof r ? e : new r((function(t) {
                        t(e)
                    }
                    ))).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            }
            ))
        }
        function l(t, e) {
            var r, n, i, s, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (r = 1,
                                n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n),
                                0) : n.next) && !(i = i.call(n, s[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < i[1]) {
                                        o.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    i[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = e.call(t, o)
                            } catch (a) {
                                s = [6, a],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        function p(t, e, r, n) {
            void 0 === n && (n = r),
            t[n] = e[r]
        }
        function f(t, e) {
            for (var r in t)
                "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
        }
        function d(t) {
            var e = "function" === typeof Symbol && Symbol.iterator
              , r = e && t[e]
              , n = 0;
            if (r)
                return r.call(t);
            if (t && "number" === typeof t.length)
                return {
                    next: function() {
                        return t && n >= t.length && (t = void 0),
                        {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function g(t, e) {
            var r = "function" === typeof Symbol && t[Symbol.iterator];
            if (!r)
                return t;
            var n, i, s = r.call(t), o = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; )
                    o.push(n.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    n && !n.done && (r = s.return) && r.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return o
        }
        function v() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(g(arguments[e]));
            return t
        }
        function y() {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                t += arguments[e].length;
            var n = Array(t)
              , i = 0;
            for (e = 0; e < r; e++)
                for (var s = arguments[e], o = 0, a = s.length; o < a; o++,
                i++)
                    n[i] = s[o];
            return n
        }
        function m(t) {
            return this instanceof m ? (this.v = t,
            this) : new m(t)
        }
        function w(t, e, r) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, i = r.apply(t, e || []), s = [];
            return n = {},
            o("next"),
            o("throw"),
            o("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function o(t) {
                i[t] && (n[t] = function(e) {
                    return new Promise((function(r, n) {
                        s.push([t, e, r, n]) > 1 || a(t, e)
                    }
                    ))
                }
                )
            }
            function a(t, e) {
                try {
                    (r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                } catch (n) {
                    h(s[0][3], n)
                }
                var r
            }
            function c(t) {
                a("next", t)
            }
            function u(t) {
                a("throw", t)
            }
            function h(t, e) {
                t(e),
                s.shift(),
                s.length && a(s[0][0], s[0][1])
            }
        }
        function _(t) {
            var e, r;
            return e = {},
            n("next"),
            n("throw", (function(t) {
                throw t
            }
            )),
            n("return"),
            e[Symbol.iterator] = function() {
                return this
            }
            ,
            e;
            function n(n, i) {
                e[n] = t[n] ? function(e) {
                    return (r = !r) ? {
                        value: m(t[n](e)),
                        done: "return" === n
                    } : i ? i(e) : e
                }
                : i
            }
        }
        function b(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, r = t[Symbol.asyncIterator];
            return r ? r.call(t) : (t = d(t),
            e = {},
            n("next"),
            n("throw"),
            n("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function n(r) {
                e[r] = t[r] && function(e) {
                    return new Promise((function(n, i) {
                        (function(t, e, r, n) {
                            Promise.resolve(n).then((function(e) {
                                t({
                                    value: e,
                                    done: r
                                })
                            }
                            ), e)
                        }
                        )(n, i, (e = t[r](e)).done, e.value)
                    }
                    ))
                }
            }
        }
        function E(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {
                value: e
            }) : t.raw = e,
            t
        }
        function I(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t,
            e
        }
        function P(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function S(t, e) {
            if (!e.has(t))
                throw new TypeError("attempted to get private field on non-instance");
            return e.get(t)
        }
        function O(t, e, r) {
            if (!e.has(t))
                throw new TypeError("attempted to set private field on non-instance");
            return e.set(t, r),
            r
        }
    }
    ,
    2606: (t,e,r)=>{
        "use strict";
        r.d(e, {
            EthereumProvider: ()=>Fs
        });
        var n = r(8041)
          , i = r.n(n)
          , s = r(5935);
        const o = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
          , a = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
          , c = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
        function u(t, e) {
            if (!("__proto__" === t || "constructor" === t && e && "object" === typeof e && "prototype"in e))
                return e;
            !function(t) {
                console.warn('[destr] Dropping "'.concat(t, '" key to prevent prototype pollution.'))
            }(t)
        }
        function h(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("string" !== typeof t)
                return t;
            const r = t.trim();
            if ('"' === t[0] && '"' === t.at(-1) && !t.includes("\\"))
                return r.slice(1, -1);
            if (r.length <= 9) {
                const t = r.toLowerCase();
                if ("true" === t)
                    return !0;
                if ("false" === t)
                    return !1;
                if ("undefined" === t)
                    return;
                if ("null" === t)
                    return null;
                if ("nan" === t)
                    return Number.NaN;
                if ("infinity" === t)
                    return Number.POSITIVE_INFINITY;
                if ("-infinity" === t)
                    return Number.NEGATIVE_INFINITY
            }
            if (!c.test(t)) {
                if (e.strict)
                    throw new SyntaxError("[destr] Invalid JSON");
                return t
            }
            try {
                if (o.test(t) || a.test(t)) {
                    if (e.strict)
                        throw new Error("[destr] Possible prototype pollution");
                    return JSON.parse(t, u)
                }
                return JSON.parse(t)
            } catch (n) {
                if (e.strict)
                    throw n;
                return t
            }
        }
        function l(t) {
            try {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                    r[n - 1] = arguments[n];
                return (i = t(...r)) && "function" === typeof i.then ? i : Promise.resolve(i)
            } catch (s) {
                return Promise.reject(s)
            }
            var i
        }
        function p(t) {
            if (function(t) {
                const e = typeof t;
                return null === t || "object" !== e && "function" !== e
            }(t))
                return String(t);
            if (function(t) {
                const e = Object.getPrototypeOf(t);
                return !e || e.isPrototypeOf(Object)
            }(t) || Array.isArray(t))
                return JSON.stringify(t);
            if ("function" === typeof t.toJSON)
                return p(t.toJSON());
            throw new Error("[unstorage] Cannot stringify value!")
        }
        function f() {
            if (void 0 === typeof Buffer)
                throw new TypeError("[unstorage] Buffer is not supported!")
        }
        const d = "base64:";
        function g(t) {
            return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
        }
        function v() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return g(e.join(":"))
        }
        function y(t) {
            return (t = g(t)) ? t + ":" : ""
        }
        const m = ()=>{
            const t = new Map;
            return {
                name: "memory",
                options: {},
                hasItem: e=>t.has(e),
                getItem(e) {
                    var r;
                    return null !== (r = t.get(e)) && void 0 !== r ? r : null
                },
                getItemRaw(e) {
                    var r;
                    return null !== (r = t.get(e)) && void 0 !== r ? r : null
                },
                setItem(e, r) {
                    t.set(e, r)
                },
                setItemRaw(e, r) {
                    t.set(e, r)
                },
                removeItem(e) {
                    t.delete(e)
                },
                getKeys: ()=>Array.from(t.keys()),
                clear() {
                    t.clear()
                },
                dispose() {
                    t.clear()
                }
            }
        }
        ;
        function w() {
            const t = {
                mounts: {
                    "": (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).driver || m()
                },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {}
            }
              , e = e=>{
                for (const r of t.mountpoints)
                    if (e.startsWith(r))
                        return {
                            base: r,
                            relativeKey: e.slice(r.length),
                            driver: t.mounts[r]
                        };
                return {
                    base: "",
                    relativeKey: e,
                    driver: t.mounts[""]
                }
            }
              , r = (e,r)=>t.mountpoints.filter((t=>t.startsWith(e) || r && e.startsWith(t))).map((r=>({
                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                mountpoint: r,
                driver: t.mounts[r]
            })))
              , n = (e,r)=>{
                if (t.watching) {
                    r = g(r);
                    for (const n of t.watchListeners)
                        n(e, r)
                }
            }
              , i = async()=>{
                if (t.watching) {
                    for (const e in t.unwatch)
                        await t.unwatch[e]();
                    t.unwatch = {},
                    t.watching = !1
                }
            }
              , s = (t,r,n)=>{
                const i = new Map
                  , s = t=>{
                    let e = i.get(t.base);
                    return e || (e = {
                        driver: t.driver,
                        base: t.base,
                        items: []
                    },
                    i.set(t.base, e)),
                    e
                }
                ;
                for (const o of t) {
                    const t = "string" === typeof o
                      , n = g(t ? o : o.key)
                      , i = t ? void 0 : o.value
                      , a = t || !o.options ? r : {
                        ...r,
                        ...o.options
                    }
                      , c = e(n);
                    s(c).items.push({
                        key: n,
                        value: i,
                        relativeKey: c.relativeKey,
                        options: a
                    })
                }
                return Promise.all([...i.values()].map((t=>n(t)))).then((t=>t.flat()))
            }
              , o = {
                hasItem(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = g(t);
                    const {relativeKey: n, driver: i} = e(t);
                    return l(i.hasItem, n, r)
                },
                getItem(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = g(t);
                    const {relativeKey: n, driver: i} = e(t);
                    return l(i.getItem, n, r).then((t=>h(t)))
                },
                getItems: (t,e)=>s(t, e, (t=>t.driver.getItems ? l(t.driver.getItems, t.items.map((t=>({
                    key: t.relativeKey,
                    options: t.options
                }))), e).then((e=>e.map((e=>({
                    key: v(t.base, e.key),
                    value: h(e.value)
                }))))) : Promise.all(t.items.map((e=>l(t.driver.getItem, e.relativeKey, e.options).then((t=>({
                    key: e.key,
                    value: h(t)
                })))))))),
                getItemRaw(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = g(t);
                    const {relativeKey: n, driver: i} = e(t);
                    return i.getItemRaw ? l(i.getItemRaw, n, r) : l(i.getItem, n, r).then((t=>function(t) {
                        return "string" !== typeof t ? t : t.startsWith(d) ? (f(),
                        Buffer.from(t.slice(d.length), "base64")) : t
                    }(t)))
                },
                async setItem(t, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (void 0 === r)
                        return o.removeItem(t);
                    t = g(t);
                    const {relativeKey: s, driver: a} = e(t);
                    a.setItem && (await l(a.setItem, s, p(r), i),
                    a.watch || n("update", t))
                },
                async setItems(t, e) {
                    await s(t, e, (async t=>{
                        t.driver.setItems && await l(t.driver.setItems, t.items.map((t=>({
                            key: t.relativeKey,
                            value: p(t.value),
                            options: t.options
                        }))), e),
                        t.driver.setItem && await Promise.all(t.items.map((e=>l(t.driver.setItem, e.relativeKey, p(e.value), e.options))))
                    }
                    ))
                },
                async setItemRaw(t, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (void 0 === r)
                        return o.removeItem(t, i);
                    t = g(t);
                    const {relativeKey: s, driver: a} = e(t);
                    if (a.setItemRaw)
                        await l(a.setItemRaw, s, r, i);
                    else {
                        if (!a.setItem)
                            return;
                        await l(a.setItem, s, function(t) {
                            if ("string" === typeof t)
                                return t;
                            f();
                            const e = Buffer.from(t).toString("base64");
                            return d + e
                        }(r), i)
                    }
                    a.watch || n("update", t)
                },
                async removeItem(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "boolean" === typeof r && (r = {
                        removeMeta: r
                    }),
                    t = g(t);
                    const {relativeKey: i, driver: s} = e(t);
                    s.removeItem && (await l(s.removeItem, i, r),
                    (r.removeMeta || r.removeMata) && await l(s.removeItem, i + "$", r),
                    s.watch || n("remove", t))
                },
                async getMeta(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "boolean" === typeof r && (r = {
                        nativeOnly: r
                    }),
                    t = g(t);
                    const {relativeKey: n, driver: i} = e(t)
                      , s = Object.create(null);
                    if (i.getMeta && Object.assign(s, await l(i.getMeta, n, r)),
                    !r.nativeOnly) {
                        const t = await l(i.getItem, n + "$", r).then((t=>h(t)));
                        t && "object" === typeof t && ("string" === typeof t.atime && (t.atime = new Date(t.atime)),
                        "string" === typeof t.mtime && (t.mtime = new Date(t.mtime)),
                        Object.assign(s, t))
                    }
                    return s
                },
                setMeta(t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.setItem(t + "$", e, r)
                },
                removeMeta(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.removeItem(t + "$", e)
                },
                async getKeys(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = y(t);
                    const n = r(t, !0);
                    let i = [];
                    const s = [];
                    for (const r of n) {
                        const t = (await l(r.driver.getKeys, r.relativeBase, e)).map((t=>r.mountpoint + g(t))).filter((t=>!i.some((e=>t.startsWith(e)))));
                        s.push(...t),
                        i = [r.mountpoint, ...i.filter((t=>!t.startsWith(r.mountpoint)))]
                    }
                    return t ? s.filter((e=>e.startsWith(t) && !e.endsWith("$"))) : s.filter((t=>!t.endsWith("$")))
                },
                async clear(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = y(t),
                    await Promise.all(r(t, !1).map((async t=>{
                        if (t.driver.clear)
                            return l(t.driver.clear, t.relativeBase, e);
                        if (t.driver.removeItem) {
                            const r = await t.driver.getKeys(t.relativeBase || "", e);
                            return Promise.all(r.map((r=>t.driver.removeItem(r, e))))
                        }
                    }
                    )))
                },
                async dispose() {
                    await Promise.all(Object.values(t.mounts).map((t=>b(t))))
                },
                watch: async e=>(await (async()=>{
                    if (!t.watching) {
                        t.watching = !0;
                        for (const e in t.mounts)
                            t.unwatch[e] = await _(t.mounts[e], n, e)
                    }
                }
                )(),
                t.watchListeners.push(e),
                async()=>{
                    t.watchListeners = t.watchListeners.filter((t=>t !== e)),
                    0 === t.watchListeners.length && await i()
                }
                ),
                async unwatch() {
                    t.watchListeners = [],
                    await i()
                },
                mount(e, r) {
                    if ((e = y(e)) && t.mounts[e])
                        throw new Error("already mounted at ".concat(e));
                    return e && (t.mountpoints.push(e),
                    t.mountpoints.sort(((t,e)=>e.length - t.length))),
                    t.mounts[e] = r,
                    t.watching && Promise.resolve(_(r, n, e)).then((r=>{
                        t.unwatch[e] = r
                    }
                    )).catch(console.error),
                    o
                },
                async unmount(e) {
                    let r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    (e = y(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](),
                    delete t.unwatch[e]),
                    r && await b(t.mounts[e]),
                    t.mountpoints = t.mountpoints.filter((t=>t !== e)),
                    delete t.mounts[e])
                },
                getMount() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    t = g(t) + ":";
                    const r = e(t);
                    return {
                        driver: r.driver,
                        base: r.base
                    }
                },
                getMounts() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = g(t);
                    return r(t, e.parents).map((t=>({
                        driver: t.driver,
                        base: t.mountpoint
                    })))
                }
            };
            return o
        }
        function _(t, e, r) {
            return t.watch ? t.watch(((t,n)=>e(t, r + n))) : ()=>{}
        }
        async function b(t) {
            "function" === typeof t.dispose && await l(t.dispose)
        }
        function E(t) {
            return new Promise(((e,r)=>{
                t.oncomplete = t.onsuccess = ()=>e(t.result),
                t.onabort = t.onerror = ()=>r(t.error)
            }
            ))
        }
        function I(t, e) {
            const r = indexedDB.open(t);
            r.onupgradeneeded = ()=>r.result.createObjectStore(e);
            const n = E(r);
            return (t,r)=>n.then((n=>r(n.transaction(e, t).objectStore(e))))
        }
        let P;
        function S() {
            return P || (P = I("keyval-store", "keyval")),
            P
        }
        function O(t) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S())("readonly", (e=>E(e.get(t))))
        }
        function x(t, e) {
            return t.openCursor().onsuccess = function() {
                this.result && (e(this.result),
                this.result.continue())
            }
            ,
            E(t.transaction)
        }
        const R = t=>JSON.stringify(t, ((t,e)=>"bigint" === typeof e ? e.toString() + "n" : e))
          , C = t=>{
            const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
            return JSON.parse(e, ((t,e)=>"string" === typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
        }
        ;
        function A(t) {
            if ("string" !== typeof t)
                throw new Error("Cannot safe json parse value of type ".concat(typeof t));
            try {
                return C(t)
            } catch (e) {
                return t
            }
        }
        function j(t) {
            return "string" === typeof t ? t : R(t) || ""
        }
        var T = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const e = t.base && t.base.length > 0 ? "".concat(t.base, ":") : ""
              , r = t=>e + t;
            let n;
            return t.dbName && t.storeName && (n = I(t.dbName, t.storeName)),
            {
                name: "idb-keyval",
                options: t,
                hasItem: async t=>!(typeof await O(r(t), n) > "u"),
                async getItem(t) {
                    var e;
                    return null !== (e = await O(r(t), n)) && void 0 !== e ? e : null
                },
                setItem: (t,e)=>function(t, e) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S())("readwrite", (r=>(r.put(e, t),
                    E(r.transaction))))
                }(r(t), e, n),
                removeItem: t=>function(t) {
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S())("readwrite", (e=>(e.delete(t),
                    E(e.transaction))))
                }(r(t), n),
                getKeys: ()=>function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S())("readonly", (t=>{
                        if (t.getAllKeys)
                            return E(t.getAllKeys());
                        const e = [];
                        return x(t, (t=>e.push(t.key))).then((()=>e))
                    }
                    ))
                }(n),
                clear: ()=>function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S())("readwrite", (t=>(t.clear(),
                    E(t.transaction))))
                }(n)
            }
        };
        class N {
            constructor() {
                this.indexedDb = w({
                    driver: T({
                        dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                        storeName: "keyvaluestorage"
                    })
                })
            }
            async getKeys() {
                return this.indexedDb.getKeys()
            }
            async getEntries() {
                return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t=>[t.key, t.value]))
            }
            async getItem(t) {
                const e = await this.indexedDb.getItem(t);
                if (null !== e)
                    return e
            }
            async setItem(t, e) {
                await this.indexedDb.setItem(t, j(e))
            }
            async removeItem(t) {
                await this.indexedDb.removeItem(t)
            }
        }
        var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {}
          , D = {
            exports: {}
        };
        function q(t) {
            var e;
            return [t[0], A(null != (e = t[1]) ? e : "")]
        }
        !function() {
            let t;
            function e() {}
            t = e,
            t.prototype.getItem = function(t) {
                return this.hasOwnProperty(t) ? String(this[t]) : null
            }
            ,
            t.prototype.setItem = function(t, e) {
                this[t] = String(e)
            }
            ,
            t.prototype.removeItem = function(t) {
                delete this[t]
            }
            ,
            t.prototype.clear = function() {
                const t = this;
                Object.keys(t).forEach((function(e) {
                    t[e] = void 0,
                    delete t[e]
                }
                ))
            }
            ,
            t.prototype.key = function(t) {
                return t = t || 0,
                Object.keys(this)[t]
            }
            ,
            t.prototype.__defineGetter__("length", (function() {
                return Object.keys(this).length
            }
            )),
            typeof L < "u" && L.localStorage ? D.exports = L.localStorage : typeof window < "u" && window.localStorage ? D.exports = window.localStorage : D.exports = new e
        }();
        class M {
            constructor() {
                this.localStorage = D.exports
            }
            async getKeys() {
                return Object.keys(this.localStorage)
            }
            async getEntries() {
                return Object.entries(this.localStorage).map(q)
            }
            async getItem(t) {
                const e = this.localStorage.getItem(t);
                if (null !== e)
                    return A(e)
            }
            async setItem(t, e) {
                this.localStorage.setItem(t, j(e))
            }
            async removeItem(t) {
                this.localStorage.removeItem(t)
            }
        }
        const z = async(t,e)=>{
            e.length && e.forEach((async e=>{
                await t.removeItem(e)
            }
            ))
        }
        ;
        class k {
            constructor() {
                this.initialized = !1,
                this.setInitialized = t=>{
                    this.storage = t,
                    this.initialized = !0
                }
                ;
                const t = new M;
                this.storage = t;
                try {
                    (async(t,e,r)=>{
                        const n = "wc_storage_version"
                          , i = await e.getItem(n);
                        if (i && i >= 1)
                            return void r(e);
                        const s = await t.getKeys();
                        if (!s.length)
                            return void r(e);
                        const o = [];
                        for (; s.length; ) {
                            const r = s.shift();
                            if (!r)
                                continue;
                            const n = r.toLowerCase();
                            if (n.includes("wc@") || n.includes("walletconnect") || n.includes("wc_") || n.includes("wallet_connect")) {
                                const n = await t.getItem(r);
                                await e.setItem(r, n),
                                o.push(r)
                            }
                        }
                        await e.setItem(n, 1),
                        r(e),
                        z(t, o)
                    }
                    )(t, new N, this.setInitialized)
                } catch {
                    this.initialized = !0
                }
            }
            async getKeys() {
                return await this.initialize(),
                this.storage.getKeys()
            }
            async getEntries() {
                return await this.initialize(),
                this.storage.getEntries()
            }
            async getItem(t) {
                return await this.initialize(),
                this.storage.getItem(t)
            }
            async setItem(t, e) {
                return await this.initialize(),
                this.storage.setItem(t, e)
            }
            async removeItem(t) {
                return await this.initialize(),
                this.storage.removeItem(t)
            }
            async initialize() {
                this.initialized || await new Promise((t=>{
                    const e = setInterval((()=>{
                        this.initialized && (clearInterval(e),
                        t())
                    }
                    ), 20)
                }
                ))
            }
        }
        var U = r(1345)
          , H = r(1451)
          , V = r(3375);
        class K extends V.q {
            constructor(t) {
                super(),
                this.opts = t,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class B extends V.q {
            constructor(t, e) {
                super(),
                this.core = t,
                this.logger = e,
                this.records = new Map
            }
        }
        class F {
            constructor(t, e) {
                this.logger = t,
                this.core = e
            }
        }
        class W extends V.q {
            constructor(t, e) {
                super(),
                this.relayer = t,
                this.logger = e
            }
        }
        class G extends V.q {
            constructor(t) {
                super()
            }
        }
        class Z {
            constructor(t, e, r, n) {
                this.core = t,
                this.logger = e,
                this.name = r
            }
        }
        class J extends V.q {
            constructor(t, e) {
                super(),
                this.relayer = t,
                this.logger = e
            }
        }
        class Q extends V.q {
            constructor(t, e) {
                super(),
                this.core = t,
                this.logger = e
            }
        }
        class Y {
            constructor(t, e) {
                this.projectId = t,
                this.logger = e
            }
        }
        class $ {
            constructor(t, e) {
                this.projectId = t,
                this.logger = e
            }
        }
        class X {
            constructor(t) {
                this.opts = t,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class tt {
            constructor(t) {
                this.client = t
            }
        }
        var et = r(4519)
          , rt = r(4701)
          , nt = r(3659);
        const it = "."
          , st = "base64url"
          , ot = "utf8"
          , at = "utf8"
          , ct = ":"
          , ut = "did"
          , ht = "key"
          , lt = "base58btc"
          , pt = "z"
          , ft = "K36";
        var dt = r(5201)
          , gt = r(4233)
          , vt = r(9324);
        function yt(t) {
            return (0,
            gt.B)((0,
            vt.m)(j(t), ot), st)
        }
        function mt(t) {
            const e = (0,
            vt.m)(ft, lt)
              , r = pt + (0,
            gt.B)((0,
            dt.z)([e, t]), lt);
            return [ut, ht, r].join(ct)
        }
        function wt() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
            rt.randomBytes)(32);
            return et._w(t)
        }
        async function _t(t, e, r, n) {
            let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0,
            nt.fromMiliseconds)(Date.now());
            const s = {
                alg: "EdDSA",
                typ: "JWT"
            }
              , o = {
                iss: mt(n.publicKey),
                sub: t,
                aud: e,
                iat: i,
                exp: i + r
            }
              , a = (c = {
                header: s,
                payload: o
            },
            (0,
            vt.m)([yt(c.header), yt(c.payload)].join(it), at));
            var c;
            return function(t) {
                return [yt(t.header), yt(t.payload), (e = t.signature,
                (0,
                gt.B)(e, st))].join(it);
                var e
            }({
                header: s,
                payload: o,
                signature: et.Xx(n.secretKey, a)
            })
        }
        r(5139);
        var bt = r(1696);
        const Et = "INTERNAL_ERROR"
          , It = "SERVER_ERROR"
          , Pt = [-32700, -32600, -32601, -32602, -32603]
          , St = {
            PARSE_ERROR: {
                code: -32700,
                message: "Parse error"
            },
            INVALID_REQUEST: {
                code: -32600,
                message: "Invalid Request"
            },
            METHOD_NOT_FOUND: {
                code: -32601,
                message: "Method not found"
            },
            INVALID_PARAMS: {
                code: -32602,
                message: "Invalid params"
            },
            [Et]: {
                code: -32603,
                message: "Internal error"
            },
            [It]: {
                code: -32e3,
                message: "Server error"
            }
        }
          , Ot = It;
        function xt(t) {
            return Pt.includes(t)
        }
        function Rt(t) {
            return Object.keys(St).includes(t) ? St[t] : St[Ot]
        }
        function Ct(t) {
            const e = Object.values(St).find((e=>e.code === t));
            return e || St[Ot]
        }
        function At(t, e, r) {
            return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error("Unavailable ".concat(r, " RPC url at ").concat(e)) : t
        }
        var jt = r(5503);
        function Tt() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
            return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
        }
        function Nt() {
            return BigInt(Tt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6))
        }
        function Lt(t, e, r) {
            return {
                id: r || Tt(),
                jsonrpc: "2.0",
                method: t,
                params: e
            }
        }
        function Dt(t, e) {
            return {
                id: t,
                jsonrpc: "2.0",
                result: e
            }
        }
        function qt(t, e, r) {
            return {
                id: t,
                jsonrpc: "2.0",
                error: Mt(e, r)
            }
        }
        function Mt(t, e) {
            return "undefined" === typeof t ? Rt(Et) : ("string" === typeof t && (t = Object.assign(Object.assign({}, Rt(It)), {
                message: t
            })),
            "undefined" !== typeof e && (t.data = e),
            xt(t.code) && (t = Ct(t.code)),
            t)
        }
        class zt {
        }
        class kt extends zt {
            constructor() {
                super()
            }
        }
        class Ut extends kt {
            constructor(t) {
                super()
            }
        }
        function Ht(t, e) {
            const r = function(t) {
                const e = t.match(new RegExp(/^\w+:/,"gi"));
                if (e && e.length)
                    return e[0]
            }(t);
            return "undefined" !== typeof r && new RegExp(e).test(r)
        }
        function Vt(t) {
            return Ht(t, "^https?:")
        }
        function Kt(t) {
            return Ht(t, "^wss?:")
        }
        function Bt(t) {
            return "object" === typeof t && "id"in t && "jsonrpc"in t && "2.0" === t.jsonrpc
        }
        function Ft(t) {
            return Bt(t) && "method"in t
        }
        function Wt(t) {
            return Bt(t) && (Gt(t) || Zt(t))
        }
        function Gt(t) {
            return "result"in t
        }
        function Zt(t) {
            return "error"in t
        }
        class Jt extends Ut {
            constructor(t) {
                super(t),
                this.events = new n.EventEmitter,
                this.hasRegisteredEventListeners = !1,
                this.connection = this.setConnection(t),
                this.connection.connected && this.registerEventListeners()
            }
            async connect() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                await this.open(t)
            }
            async disconnect() {
                await this.close()
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            async request(t, e) {
                return this.requestStrict(Lt(t.method, t.params || [], t.id || Nt().toString()), e)
            }
            async requestStrict(t, e) {
                return new Promise((async(r,n)=>{
                    if (!this.connection.connected)
                        try {
                            await this.open()
                        } catch (i) {
                            n(i)
                        }
                    this.events.on("".concat(t.id), (t=>{
                        Zt(t) ? n(t.error) : r(t.result)
                    }
                    ));
                    try {
                        await this.connection.send(t, e)
                    } catch (i) {
                        n(i)
                    }
                }
                ))
            }
            setConnection() {
                return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
            }
            onPayload(t) {
                this.events.emit("payload", t),
                Wt(t) ? this.events.emit("".concat(t.id), t) : this.events.emit("message", {
                    type: t.method,
                    data: t.params
                })
            }
            onClose(t) {
                t && 3e3 === t.code && this.events.emit("error", new Error("WebSocket connection closed abnormally with code: ".concat(t.code, " ").concat(t.reason ? "(".concat(t.reason, ")") : ""))),
                this.events.emit("disconnect")
            }
            async open() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                this.connection === t && this.connection.connected || (this.connection.connected && this.close(),
                "string" === typeof t && (await this.connection.open(t),
                t = this.connection),
                this.connection = this.setConnection(t),
                await this.connection.open(),
                this.registerEventListeners(),
                this.events.emit("connect"))
            }
            async close() {
                await this.connection.close()
            }
            registerEventListeners() {
                this.hasRegisteredEventListeners || (this.connection.on("payload", (t=>this.onPayload(t))),
                this.connection.on("close", (t=>this.onClose(t))),
                this.connection.on("error", (t=>this.events.emit("error", t))),
                this.connection.on("register_error", (t=>this.onClose())),
                this.hasRegisteredEventListeners = !0)
            }
        }
        const Qt = t=>t.split("?")[0]
          , Yt = typeof WebSocket < "u" ? WebSocket : typeof r.g < "u" && typeof r.g.WebSocket < "u" ? r.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : r(6280);
        class $t {
            constructor(t) {
                if (this.url = t,
                this.events = new n.EventEmitter,
                this.registering = !1,
                !Kt(t))
                    throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(t));
                this.url = t
            }
            get connected() {
                return typeof this.socket < "u"
            }
            get connecting() {
                return this.registering
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            async open() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                await this.register(t)
            }
            async close() {
                return new Promise(((t,e)=>{
                    typeof this.socket > "u" ? e(new Error("Connection already closed")) : (this.socket.onclose = e=>{
                        this.onClose(e),
                        t()
                    }
                    ,
                    this.socket.close())
                }
                ))
            }
            async send(t) {
                typeof this.socket > "u" && (this.socket = await this.register());
                try {
                    this.socket.send(j(t))
                } catch (e) {
                    this.onError(t.id, e)
                }
            }
            register() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                if (!Kt(t))
                    throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(t));
                if (this.registering) {
                    const t = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
                    new Promise(((t,e)=>{
                        this.events.once("register_error", (t=>{
                            this.resetMaxListeners(),
                            e(t)
                        }
                        )),
                        this.events.once("open", (()=>{
                            if (this.resetMaxListeners(),
                            typeof this.socket > "u")
                                return e(new Error("WebSocket connection is missing or invalid"));
                            t(this.socket)
                        }
                        ))
                    }
                    ))
                }
                return this.url = t,
                this.registering = !0,
                new Promise(((e,n)=>{
                    const i = new URLSearchParams(t).get("origin")
                      , s = (0,
                    jt.isReactNative)() ? {
                        headers: {
                            origin: i
                        }
                    } : {
                        rejectUnauthorized: (a = t,
                        !new RegExp("wss?://localhost(:d{2,5})?").test(a))
                    }
                      , o = new Yt(t,[],s);
                    var a;
                    typeof WebSocket < "u" || typeof r.g < "u" && typeof r.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? o.onerror = t=>{
                        const e = t;
                        n(this.emitError(e.error))
                    }
                    : o.on("error", (t=>{
                        n(this.emitError(t))
                    }
                    )),
                    o.onopen = ()=>{
                        this.onOpen(o),
                        e(o)
                    }
                }
                ))
            }
            onOpen(t) {
                t.onmessage = t=>this.onPayload(t),
                t.onclose = t=>this.onClose(t),
                this.socket = t,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose(t) {
                this.socket = void 0,
                this.registering = !1,
                this.events.emit("close", t)
            }
            onPayload(t) {
                if (typeof t.data > "u")
                    return;
                const e = "string" == typeof t.data ? A(t.data) : t.data;
                this.events.emit("payload", e)
            }
            onError(t, e) {
                const r = this.parseError(e)
                  , n = qt(t, r.message || r.toString());
                this.events.emit("payload", n)
            }
            parseError(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                return At(t, Qt(e), "WS")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
            emitError(t) {
                const e = this.parseError(new Error((null === t || void 0 === t ? void 0 : t.message) || "WebSocket connection failed for host: ".concat(Qt(this.url))));
                return this.events.emit("register_error", e),
                e
            }
        }
        var Xt = r(3108)
          , te = r.n(Xt)
          , ee = r(8117)
          , re = r.n(ee);
        var ne = function(t, e) {
            if (t.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
                r[n] = 255;
            for (var i = 0; i < t.length; i++) {
                var s = t.charAt(i)
                  , o = s.charCodeAt(0);
                if (255 !== r[o])
                    throw new TypeError(s + " is ambiguous");
                r[o] = i
            }
            var a = t.length
              , c = t.charAt(0)
              , u = Math.log(a) / Math.log(256)
              , h = Math.log(256) / Math.log(a);
            function l(t) {
                if ("string" != typeof t)
                    throw new TypeError("Expected String");
                if (0 === t.length)
                    return new Uint8Array;
                var e = 0;
                if (" " !== t[e]) {
                    for (var n = 0, i = 0; t[e] === c; )
                        n++,
                        e++;
                    for (var s = (t.length - e) * u + 1 >>> 0, o = new Uint8Array(s); t[e]; ) {
                        var h = r[t.charCodeAt(e)];
                        if (255 === h)
                            return;
                        for (var l = 0, p = s - 1; (0 !== h || l < i) && -1 !== p; p--,
                        l++)
                            h += a * o[p] >>> 0,
                            o[p] = h % 256 >>> 0,
                            h = h / 256 >>> 0;
                        if (0 !== h)
                            throw new Error("Non-zero carry");
                        i = l,
                        e++
                    }
                    if (" " !== t[e]) {
                        for (var f = s - i; f !== s && 0 === o[f]; )
                            f++;
                        for (var d = new Uint8Array(n + (s - f)), g = n; f !== s; )
                            d[g++] = o[f++];
                        return d
                    }
                }
            }
            return {
                encode: function(e) {
                    if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))),
                    !(e instanceof Uint8Array))
                        throw new TypeError("Expected Uint8Array");
                    if (0 === e.length)
                        return "";
                    for (var r = 0, n = 0, i = 0, s = e.length; i !== s && 0 === e[i]; )
                        i++,
                        r++;
                    for (var o = (s - i) * h + 1 >>> 0, u = new Uint8Array(o); i !== s; ) {
                        for (var l = e[i], p = 0, f = o - 1; (0 !== l || p < n) && -1 !== f; f--,
                        p++)
                            l += 256 * u[f] >>> 0,
                            u[f] = l % a >>> 0,
                            l = l / a >>> 0;
                        if (0 !== l)
                            throw new Error("Non-zero carry");
                        n = p,
                        i++
                    }
                    for (var d = o - n; d !== o && 0 === u[d]; )
                        d++;
                    for (var g = c.repeat(r); d < o; ++d)
                        g += t.charAt(u[d]);
                    return g
                },
                decodeUnsafe: l,
                decode: function(t) {
                    var r = l(t);
                    if (r)
                        return r;
                    throw new Error("Non-".concat(e, " character"))
                }
            }
        }
          , ie = ne;
        const se = t=>{
            if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name)
                return t;
            if (t instanceof ArrayBuffer)
                return new Uint8Array(t);
            if (ArrayBuffer.isView(t))
                return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
            throw new Error("Unknown type, must be binary type")
        }
        ;
        class oe {
            constructor(t, e, r) {
                this.name = t,
                this.prefix = e,
                this.baseEncode = r
            }
            encode(t) {
                if (t instanceof Uint8Array)
                    return "".concat(this.prefix).concat(this.baseEncode(t));
                throw Error("Unknown type, must be binary type")
            }
        }
        class ae {
            constructor(t, e, r) {
                if (this.name = t,
                this.prefix = e,
                void 0 === e.codePointAt(0))
                    throw new Error("Invalid prefix character");
                this.prefixCodePoint = e.codePointAt(0),
                this.baseDecode = r
            }
            decode(t) {
                if ("string" == typeof t) {
                    if (t.codePointAt(0) !== this.prefixCodePoint)
                        throw Error("Unable to decode multibase string ".concat(JSON.stringify(t), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                    return this.baseDecode(t.slice(this.prefix.length))
                }
                throw Error("Can only multibase decode strings")
            }
            or(t) {
                return ue(this, t)
            }
        }
        class ce {
            constructor(t) {
                this.decoders = t
            }
            or(t) {
                return ue(this, t)
            }
            decode(t) {
                const e = t[0]
                  , r = this.decoders[e];
                if (r)
                    return r.decode(t);
                throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(t), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
            }
        }
        const ue = (t,e)=>new ce({
            ...t.decoders || {
                [t.prefix]: t
            },
            ...e.decoders || {
                [e.prefix]: e
            }
        });
        class he {
            constructor(t, e, r, n) {
                this.name = t,
                this.prefix = e,
                this.baseEncode = r,
                this.baseDecode = n,
                this.encoder = new oe(t,e,r),
                this.decoder = new ae(t,e,n)
            }
            encode(t) {
                return this.encoder.encode(t)
            }
            decode(t) {
                return this.decoder.decode(t)
            }
        }
        const le = t=>{
            let {name: e, prefix: r, encode: n, decode: i} = t;
            return new he(e,r,n,i)
        }
          , pe = t=>{
            let {prefix: e, name: r, alphabet: n} = t;
            const {encode: i, decode: s} = ie(n, r);
            return le({
                prefix: e,
                name: r,
                encode: i,
                decode: t=>se(s(t))
            })
        }
          , fe = t=>{
            let {name: e, prefix: r, bitsPerChar: n, alphabet: i} = t;
            return le({
                prefix: r,
                name: e,
                encode: t=>((t,e,r)=>{
                    const n = "=" === e[e.length - 1]
                      , i = (1 << r) - 1;
                    let s = ""
                      , o = 0
                      , a = 0;
                    for (let c = 0; c < t.length; ++c)
                        for (a = a << 8 | t[c],
                        o += 8; o > r; )
                            o -= r,
                            s += e[i & a >> o];
                    if (o && (s += e[i & a << r - o]),
                    n)
                        for (; s.length * r & 7; )
                            s += "=";
                    return s
                }
                )(t, i, n),
                decode: t=>((t,e,r,n)=>{
                    const i = {};
                    for (let h = 0; h < e.length; ++h)
                        i[e[h]] = h;
                    let s = t.length;
                    for (; "=" === t[s - 1]; )
                        --s;
                    const o = new Uint8Array(s * r / 8 | 0);
                    let a = 0
                      , c = 0
                      , u = 0;
                    for (let h = 0; h < s; ++h) {
                        const e = i[t[h]];
                        if (void 0 === e)
                            throw new SyntaxError("Non-".concat(n, " character"));
                        c = c << r | e,
                        a += r,
                        a >= 8 && (a -= 8,
                        o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a)
                        throw new SyntaxError("Unexpected end of data");
                    return o
                }
                )(t, i, n, e)
            })
        }
          , de = le({
            prefix: "\0",
            name: "identity",
            encode: t=>(t=>(new TextDecoder).decode(t))(t),
            decode: t=>(t=>(new TextEncoder).encode(t))(t)
        });
        var ge = Object.freeze({
            __proto__: null,
            identity: de
        });
        const ve = fe({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        });
        var ye = Object.freeze({
            __proto__: null,
            base2: ve
        });
        const me = fe({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        });
        var we = Object.freeze({
            __proto__: null,
            base8: me
        });
        const _e = pe({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        });
        var be = Object.freeze({
            __proto__: null,
            base10: _e
        });
        const Ee = fe({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , Ie = fe({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        });
        var Pe = Object.freeze({
            __proto__: null,
            base16: Ee,
            base16upper: Ie
        });
        const Se = fe({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , Oe = fe({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , xe = fe({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , Re = fe({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , Ce = fe({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , Ae = fe({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , je = fe({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , Te = fe({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , Ne = fe({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        });
        var Le = Object.freeze({
            __proto__: null,
            base32: Se,
            base32upper: Oe,
            base32pad: xe,
            base32padupper: Re,
            base32hex: Ce,
            base32hexupper: Ae,
            base32hexpad: je,
            base32hexpadupper: Te,
            base32z: Ne
        });
        const De = pe({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , qe = pe({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var Me = Object.freeze({
            __proto__: null,
            base36: De,
            base36upper: qe
        });
        const ze = pe({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , ke = pe({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var Ue = Object.freeze({
            __proto__: null,
            base58btc: ze,
            base58flickr: ke
        });
        const He = fe({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , Ve = fe({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , Ke = fe({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , Be = fe({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        });
        var Fe = Object.freeze({
            __proto__: null,
            base64: He,
            base64pad: Ve,
            base64url: Ke,
            base64urlpad: Be
        });
        const We = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42")
          , Ge = We.reduce(((t,e,r)=>(t[r] = e,
        t)), [])
          , Ze = We.reduce(((t,e,r)=>(t[e.codePointAt(0)] = r,
        t)), []);
        const Je = le({
            prefix: "\ud83d\ude80",
            name: "base256emoji",
            encode: function(t) {
                return t.reduce(((t,e)=>t += Ge[e]), "")
            },
            decode: function(t) {
                const e = [];
                for (const r of t) {
                    const t = Ze[r.codePointAt(0)];
                    if (void 0 === t)
                        throw new Error("Non-base256emoji character: ".concat(r));
                    e.push(t)
                }
                return new Uint8Array(e)
            }
        });
        var Qe = Object.freeze({
            __proto__: null,
            base256emoji: Je
        })
          , Ye = function t(e, r, n) {
            r = r || [];
            for (var i = n = n || 0; e >= tr; )
                r[n++] = 255 & e | $e,
                e /= 128;
            for (; e & Xe; )
                r[n++] = 255 & e | $e,
                e >>>= 7;
            return r[n] = 0 | e,
            t.bytes = n - i + 1,
            r
        }
          , $e = 128
          , Xe = -128
          , tr = Math.pow(2, 31);
        var er = function t(e, r) {
            var n, i = 0, s = 0, o = r = r || 0, a = e.length;
            do {
                if (o >= a)
                    throw t.bytes = 0,
                    new RangeError("Could not decode varint");
                n = e[o++],
                i += s < 28 ? (n & nr) << s : (n & nr) * Math.pow(2, s),
                s += 7
            } while (n >= rr);
            return t.bytes = o - r,
            i
        }
          , rr = 128
          , nr = 127;
        var ir = Math.pow(2, 7)
          , sr = Math.pow(2, 14)
          , or = Math.pow(2, 21)
          , ar = Math.pow(2, 28)
          , cr = Math.pow(2, 35)
          , ur = Math.pow(2, 42)
          , hr = Math.pow(2, 49)
          , lr = Math.pow(2, 56)
          , pr = Math.pow(2, 63)
          , fr = {
            encode: Ye,
            decode: er,
            encodingLength: function(t) {
                return t < ir ? 1 : t < sr ? 2 : t < or ? 3 : t < ar ? 4 : t < cr ? 5 : t < ur ? 6 : t < hr ? 7 : t < lr ? 8 : t < pr ? 9 : 10
            }
        };
        const dr = function(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return fr.encode(t, e, r),
            e
        }
          , gr = t=>fr.encodingLength(t)
          , vr = (t,e)=>{
            const r = e.byteLength
              , n = gr(t)
              , i = n + gr(r)
              , s = new Uint8Array(i + r);
            return dr(t, s, 0),
            dr(r, s, n),
            s.set(e, i),
            new yr(t,r,e,s)
        }
        ;
        class yr {
            constructor(t, e, r, n) {
                this.code = t,
                this.size = e,
                this.digest = r,
                this.bytes = n
            }
        }
        const mr = t=>{
            let {name: e, code: r, encode: n} = t;
            return new wr(e,r,n)
        }
        ;
        class wr {
            constructor(t, e, r) {
                this.name = t,
                this.code = e,
                this.encode = r
            }
            digest(t) {
                if (t instanceof Uint8Array) {
                    const e = this.encode(t);
                    return e instanceof Uint8Array ? vr(this.code, e) : e.then((t=>vr(this.code, t)))
                }
                throw Error("Unknown type, must be binary type")
            }
        }
        const _r = t=>async e=>new Uint8Array(await crypto.subtle.digest(t, e))
          , br = mr({
            name: "sha2-256",
            code: 18,
            encode: _r("SHA-256")
        })
          , Er = mr({
            name: "sha2-512",
            code: 19,
            encode: _r("SHA-512")
        });
        Object.freeze({
            __proto__: null,
            sha256: br,
            sha512: Er
        });
        const Ir = se
          , Pr = {
            code: 0,
            name: "identity",
            encode: Ir,
            digest: t=>vr(0, Ir(t))
        };
        Object.freeze({
            __proto__: null,
            identity: Pr
        });
        new TextEncoder,
        new TextDecoder;
        const Sr = {
            ...ge,
            ...ye,
            ...we,
            ...be,
            ...Pe,
            ...Le,
            ...Me,
            ...Ue,
            ...Fe,
            ...Qe
        };
        function Or(t) {
            return null != globalThis.Buffer ? new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : t
        }
        function xr(t, e, r, n) {
            return {
                name: t,
                prefix: e,
                encoder: {
                    name: t,
                    prefix: e,
                    encode: r
                },
                decoder: {
                    decode: n
                }
            }
        }
        const Rr = xr("utf8", "u", (t=>"u" + new TextDecoder("utf8").decode(t)), (t=>(new TextEncoder).encode(t.substring(1))))
          , Cr = xr("ascii", "a", (t=>{
            let e = "a";
            for (let r = 0; r < t.length; r++)
                e += String.fromCharCode(t[r]);
            return e
        }
        ), (t=>{
            const e = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Or(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
            }((t = t.substring(1)).length);
            for (let r = 0; r < t.length; r++)
                e[r] = t.charCodeAt(r);
            return e
        }
        ))
          , Ar = {
            utf8: Rr,
            "utf-8": Rr,
            hex: Sr.base16,
            latin1: Cr,
            ascii: Cr,
            binary: Cr,
            ...Sr
        };
        const jr = "core"
          , Tr = "".concat("wc", "@2:").concat(jr, ":")
          , Nr = "error"
          , Lr = {
            database: ":memory:"
        }
          , Dr = "client_ed25519_seed"
          , qr = nt.ONE_DAY
          , Mr = nt.SIX_HOURS
          , zr = "wss://relay.walletconnect.com"
          , kr = "wss://relay.walletconnect.org"
          , Ur = "relayer_message"
          , Hr = "relayer_message_ack"
          , Vr = "relayer_connect"
          , Kr = "relayer_disconnect"
          , Br = "relayer_error"
          , Fr = "relayer_connection_stalled"
          , Wr = "relayer_publish"
          , Gr = "payload"
          , Zr = "connect"
          , Jr = "disconnect"
          , Qr = "error"
          , Yr = nt.ONE_SECOND
          , $r = "subscription_created"
          , Xr = "subscription_deleted"
          , tn = "subscription_sync"
          , en = "subscription_resubscribed"
          , rn = 1e3 * nt.FIVE_SECONDS
          , nn = {
            wc_pairingDelete: {
                req: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: nt.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: nt.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }
          , sn = "pairing_create"
          , on = "pairing_expire"
          , an = "pairing_delete"
          , cn = "pairing_ping"
          , un = "history_created"
          , hn = "history_updated"
          , ln = "history_deleted"
          , pn = "history_sync"
          , fn = "expirer_created"
          , dn = "expirer_deleted"
          , gn = "expirer_expired"
          , vn = "expirer_sync"
          , yn = "verify-api"
          , mn = "https://verify.walletconnect.com"
          , wn = "https://verify.walletconnect.org"
          , _n = [mn, wn];
        class bn {
            constructor(t, e) {
                this.core = t,
                this.logger = e,
                this.keychain = new Map,
                this.name = "keychain",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = Tr,
                this.init = async()=>{
                    if (!this.initialized) {
                        const t = await this.getKeyChain();
                        typeof t < "u" && (this.keychain = t),
                        this.initialized = !0
                    }
                }
                ,
                this.has = t=>(this.isInitialized(),
                this.keychain.has(t)),
                this.set = async(t,e)=>{
                    this.isInitialized(),
                    this.keychain.set(t, e),
                    await this.persist()
                }
                ,
                this.get = t=>{
                    this.isInitialized();
                    const e = this.keychain.get(t);
                    if (typeof e > "u") {
                        const {message: e} = (0,
                        s.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(t));
                        throw new Error(e)
                    }
                    return e
                }
                ,
                this.del = async t=>{
                    this.isInitialized(),
                    this.keychain.delete(t),
                    await this.persist()
                }
                ,
                this.core = t,
                this.logger = (0,
                H.generateChildLogger)(e, this.name)
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setKeyChain(t) {
                await this.core.storage.setItem(this.storageKey, (0,
                s.KC)(t))
            }
            async getKeyChain() {
                const t = await this.core.storage.getItem(this.storageKey);
                return typeof t < "u" ? (0,
                s.IP)(t) : void 0
            }
            async persist() {
                await this.setKeyChain(this.keychain)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
        }
        class En {
            constructor(t, e, r) {
                this.core = t,
                this.logger = e,
                this.name = "crypto",
                this.initialized = !1,
                this.init = async()=>{
                    this.initialized || (await this.keychain.init(),
                    this.initialized = !0)
                }
                ,
                this.hasKeys = t=>(this.isInitialized(),
                this.keychain.has(t)),
                this.getClientId = async()=>{
                    this.isInitialized();
                    return mt(wt(await this.getClientSeed()).publicKey)
                }
                ,
                this.generateKeyPair = ()=>{
                    this.isInitialized();
                    const t = (0,
                    s.Au)();
                    return this.setPrivateKey(t.publicKey, t.privateKey)
                }
                ,
                this.signJWT = async t=>{
                    this.isInitialized();
                    const e = wt(await this.getClientSeed())
                      , r = (0,
                    s.jd)()
                      , n = qr;
                    return await _t(r, t, n, e)
                }
                ,
                this.generateSharedKey = (t,e,r)=>{
                    this.isInitialized();
                    const n = this.getPrivateKey(t)
                      , i = (0,
                    s.m$)(n, e);
                    return this.setSymKey(i, r)
                }
                ,
                this.setSymKey = async(t,e)=>{
                    this.isInitialized();
                    const r = e || (0,
                    s.Ym)(t);
                    return await this.keychain.set(r, t),
                    r
                }
                ,
                this.deleteKeyPair = async t=>{
                    this.isInitialized(),
                    await this.keychain.del(t)
                }
                ,
                this.deleteSymKey = async t=>{
                    this.isInitialized(),
                    await this.keychain.del(t)
                }
                ,
                this.encode = async(t,e,r)=>{
                    this.isInitialized();
                    const n = (0,
                    s.EN)(r)
                      , i = j(e);
                    if ((0,
                    s.Q8)(n)) {
                        const e = n.senderPublicKey
                          , r = n.receiverPublicKey;
                        t = await this.generateSharedKey(e, r)
                    }
                    const o = this.getSymKey(t)
                      , {type: a, senderPublicKey: c} = n;
                    return (0,
                    s.HI)({
                        type: a,
                        symKey: o,
                        message: i,
                        senderPublicKey: c
                    })
                }
                ,
                this.decode = async(t,e,r)=>{
                    this.isInitialized();
                    const n = (0,
                    s.Ll)(e, r);
                    if ((0,
                    s.Q8)(n)) {
                        const e = n.receiverPublicKey
                          , r = n.senderPublicKey;
                        t = await this.generateSharedKey(e, r)
                    }
                    try {
                        const r = this.getSymKey(t);
                        return A((0,
                        s.pe)({
                            symKey: r,
                            encoded: e
                        }))
                    } catch (k) {
                        this.logger.error("Failed to decode message from topic: '".concat(t, "', clientId: '").concat(await this.getClientId(), "'")),
                        this.logger.error(k)
                    }
                }
                ,
                this.getPayloadType = t=>{
                    const e = (0,
                    s.vB)(t);
                    return (0,
                    s.WG)(e.type)
                }
                ,
                this.getPayloadSenderPublicKey = t=>{
                    const e = (0,
                    s.vB)(t);
                    return e.senderPublicKey ? (0,
                    bt.BB)(e.senderPublicKey, s.AW) : void 0
                }
                ,
                this.core = t,
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.keychain = r || new bn(this.core,this.logger)
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            async setPrivateKey(t, e) {
                return await this.keychain.set(t, e),
                t
            }
            getPrivateKey(t) {
                return this.keychain.get(t)
            }
            async getClientSeed() {
                let t = "";
                try {
                    t = this.keychain.get(Dr)
                } catch {
                    t = (0,
                    s.jd)(),
                    await this.keychain.set(Dr, t)
                }
                return function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                    const r = Ar[e];
                    if (!r)
                        throw new Error('Unsupported encoding "'.concat(e, '"'));
                    return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode("".concat(r.prefix).concat(t)) : Or(globalThis.Buffer.from(t, "utf-8"))
                }(t, "base16")
            }
            getSymKey(t) {
                return this.keychain.get(t)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
        }
        class In extends F {
            constructor(t, e) {
                super(t, e),
                this.logger = t,
                this.core = e,
                this.messages = new Map,
                this.name = "messages",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = Tr,
                this.init = async()=>{
                    if (!this.initialized) {
                        this.logger.trace("Initialized");
                        try {
                            const t = await this.getRelayerMessages();
                            typeof t < "u" && (this.messages = t),
                            this.logger.debug("Successfully Restored records for ".concat(this.name)),
                            this.logger.trace({
                                type: "method",
                                method: "restore",
                                size: this.messages.size
                            })
                        } catch (t) {
                            this.logger.debug("Failed to Restore records for ".concat(this.name)),
                            this.logger.error(t)
                        } finally {
                            this.initialized = !0
                        }
                    }
                }
                ,
                this.set = async(t,e)=>{
                    this.isInitialized();
                    const r = (0,
                    s.rj)(e);
                    let n = this.messages.get(t);
                    return typeof n > "u" && (n = {}),
                    typeof n[r] < "u" || (n[r] = e,
                    this.messages.set(t, n),
                    await this.persist()),
                    r
                }
                ,
                this.get = t=>{
                    this.isInitialized();
                    let e = this.messages.get(t);
                    return typeof e > "u" && (e = {}),
                    e
                }
                ,
                this.has = (t,e)=>{
                    this.isInitialized();
                    return typeof this.get(t)[(0,
                    s.rj)(e)] < "u"
                }
                ,
                this.del = async t=>{
                    this.isInitialized(),
                    this.messages.delete(t),
                    await this.persist()
                }
                ,
                this.logger = (0,
                H.generateChildLogger)(t, this.name),
                this.core = e
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setRelayerMessages(t) {
                await this.core.storage.setItem(this.storageKey, (0,
                s.KC)(t))
            }
            async getRelayerMessages() {
                const t = await this.core.storage.getItem(this.storageKey);
                return typeof t < "u" ? (0,
                s.IP)(t) : void 0
            }
            async persist() {
                await this.setRelayerMessages(this.messages)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
        }
        class Pn extends W {
            constructor(t, e) {
                super(t, e),
                this.relayer = t,
                this.logger = e,
                this.events = new n.EventEmitter,
                this.name = "publisher",
                this.queue = new Map,
                this.publishTimeout = (0,
                nt.toMiliseconds)(nt.TEN_SECONDS),
                this.needsTransportRestart = !1,
                this.publish = async(t,e,r)=>{
                    var n;
                    this.logger.debug("Publishing Payload"),
                    this.logger.trace({
                        type: "method",
                        method: "publish",
                        params: {
                            topic: t,
                            message: e,
                            opts: r
                        }
                    });
                    try {
                        const i = (null === r || void 0 === r ? void 0 : r.ttl) || Mr
                          , o = (0,
                        s._H)(r)
                          , a = (null === r || void 0 === r ? void 0 : r.prompt) || !1
                          , c = (null === r || void 0 === r ? void 0 : r.tag) || 0
                          , u = (null === r || void 0 === r ? void 0 : r.id) || Nt().toString()
                          , h = {
                            topic: t,
                            message: e,
                            opts: {
                                ttl: i,
                                relay: o,
                                prompt: a,
                                tag: c,
                                id: u
                            }
                        }
                          , l = setTimeout((()=>this.queue.set(u, h)), this.publishTimeout);
                        try {
                            await await (0,
                            s.hF)(this.rpcPublish(t, e, i, o, a, c, u), this.publishTimeout, "Failed to publish payload, please try again."),
                            this.removeRequestFromQueue(u),
                            this.relayer.events.emit(Wr, h)
                        } catch (W) {
                            if (this.logger.debug("Publishing Payload stalled"),
                            this.needsTransportRestart = !0,
                            null != (n = null === r || void 0 === r ? void 0 : r.internal) && n.throwOnFailedPublish)
                                throw this.removeRequestFromQueue(u),
                                W;
                            return
                        } finally {
                            clearTimeout(l)
                        }
                        this.logger.debug("Successfully Published Payload"),
                        this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: t,
                                message: e,
                                opts: r
                            }
                        })
                    } catch (F) {
                        throw this.logger.debug("Failed to Publish Payload"),
                        this.logger.error(F),
                        F
                    }
                }
                ,
                this.on = (t,e)=>{
                    this.events.on(t, e)
                }
                ,
                this.once = (t,e)=>{
                    this.events.once(t, e)
                }
                ,
                this.off = (t,e)=>{
                    this.events.off(t, e)
                }
                ,
                this.removeListener = (t,e)=>{
                    this.events.removeListener(t, e)
                }
                ,
                this.relayer = t,
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.registerEventListeners()
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            rpcPublish(t, e, r, n, i, o, a) {
                var c, u, h, l;
                const p = {
                    method: (0,
                    s.cO)(n.protocol).publish,
                    params: {
                        topic: t,
                        message: e,
                        ttl: r,
                        prompt: i,
                        tag: o
                    },
                    id: a
                };
                return (0,
                s.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (u = p.params) || delete u.prompt),
                (0,
                s.o8)(null == (h = p.params) ? void 0 : h.tag) && (null == (l = p.params) || delete l.tag),
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "message",
                    direction: "outgoing",
                    request: p
                }),
                this.relayer.request(p)
            }
            removeRequestFromQueue(t) {
                this.queue.delete(t)
            }
            checkQueue() {
                this.queue.forEach((async t=>{
                    const {topic: e, message: r, opts: n} = t;
                    await this.publish(e, r, n)
                }
                ))
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, (()=>{
                    if (this.needsTransportRestart)
                        return this.needsTransportRestart = !1,
                        void this.relayer.events.emit(Fr);
                    this.checkQueue()
                }
                )),
                this.relayer.on(Hr, (t=>{
                    this.removeRequestFromQueue(t.id.toString())
                }
                ))
            }
        }
        class Sn {
            constructor() {
                this.map = new Map,
                this.set = (t,e)=>{
                    const r = this.get(t);
                    this.exists(t, e) || this.map.set(t, [...r, e])
                }
                ,
                this.get = t=>this.map.get(t) || [],
                this.exists = (t,e)=>this.get(t).includes(e),
                this.delete = (t,e)=>{
                    if (typeof e > "u")
                        return void this.map.delete(t);
                    if (!this.map.has(t))
                        return;
                    const r = this.get(t);
                    if (!this.exists(t, e))
                        return;
                    const n = r.filter((t=>t !== e));
                    n.length ? this.map.set(t, n) : this.map.delete(t)
                }
                ,
                this.clear = ()=>{
                    this.map.clear()
                }
            }
            get topics() {
                return Array.from(this.map.keys())
            }
        }
        var On = Object.defineProperty
          , xn = Object.defineProperties
          , Rn = Object.getOwnPropertyDescriptors
          , Cn = Object.getOwnPropertySymbols
          , An = Object.prototype.hasOwnProperty
          , jn = Object.prototype.propertyIsEnumerable
          , Tn = (t,e,r)=>e in t ? On(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , Nn = (t,e)=>{
            for (var r in e || (e = {}))
                An.call(e, r) && Tn(t, r, e[r]);
            if (Cn)
                for (var r of Cn(e))
                    jn.call(e, r) && Tn(t, r, e[r]);
            return t
        }
          , Ln = (t,e)=>xn(t, Rn(e));
        class Dn extends J {
            constructor(t, e) {
                super(t, e),
                this.relayer = t,
                this.logger = e,
                this.subscriptions = new Map,
                this.topicMap = new Sn,
                this.events = new n.EventEmitter,
                this.name = "subscription",
                this.version = "0.3",
                this.pending = new Map,
                this.cached = [],
                this.initialized = !1,
                this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
                this.pollingInterval = 20,
                this.storagePrefix = Tr,
                this.subscribeTimeout = 1e4,
                this.restartInProgress = !1,
                this.batchSubscribeTopicsLimit = 500,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    this.registerEventListeners(),
                    this.clientId = await this.relayer.core.crypto.getClientId())
                }
                ,
                this.subscribe = async(t,e)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    this.logger.debug("Subscribing Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: {
                            topic: t,
                            opts: e
                        }
                    });
                    try {
                        const r = (0,
                        s._H)(e)
                          , n = {
                            topic: t,
                            relay: r
                        };
                        this.pending.set(t, n);
                        const i = await this.rpcSubscribe(t, r);
                        return this.onSubscribe(i, n),
                        this.logger.debug("Successfully Subscribed Topic"),
                        this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: t,
                                opts: e
                            }
                        }),
                        i
                    } catch (K) {
                        throw this.logger.debug("Failed to Subscribe Topic"),
                        this.logger.error(K),
                        K
                    }
                }
                ,
                this.unsubscribe = async(t,e)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    typeof (null === e || void 0 === e ? void 0 : e.id) < "u" ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e)
                }
                ,
                this.isSubscribed = async t=>!!this.topics.includes(t) || await new Promise(((e,r)=>{
                    const n = new nt.Watch;
                    n.start(this.pendingSubscriptionWatchLabel);
                    const i = setInterval((()=>{
                        !this.pending.has(t) && this.topics.includes(t) && (clearInterval(i),
                        n.stop(this.pendingSubscriptionWatchLabel),
                        e(!0)),
                        n.elapsed(this.pendingSubscriptionWatchLabel) >= rn && (clearInterval(i),
                        n.stop(this.pendingSubscriptionWatchLabel),
                        r(new Error("Subscription resolution timeout")))
                    }
                    ), this.pollingInterval)
                }
                )).catch((()=>!1)),
                this.on = (t,e)=>{
                    this.events.on(t, e)
                }
                ,
                this.once = (t,e)=>{
                    this.events.once(t, e)
                }
                ,
                this.off = (t,e)=>{
                    this.events.off(t, e)
                }
                ,
                this.removeListener = (t,e)=>{
                    this.events.removeListener(t, e)
                }
                ,
                this.restart = async()=>{
                    this.restartInProgress = !0,
                    await this.restore(),
                    await this.reset(),
                    this.restartInProgress = !1
                }
                ,
                this.relayer = t,
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.clientId = ""
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.subscriptions.size
            }
            get ids() {
                return Array.from(this.subscriptions.keys())
            }
            get values() {
                return Array.from(this.subscriptions.values())
            }
            get topics() {
                return this.topicMap.topics
            }
            hasSubscription(t, e) {
                let r = !1;
                try {
                    r = this.getSubscription(t).topic === e
                } catch {}
                return r
            }
            onEnable() {
                this.cached = [],
                this.initialized = !0
            }
            onDisable() {
                this.cached = this.values,
                this.subscriptions.clear(),
                this.topicMap.clear()
            }
            async unsubscribeByTopic(t, e) {
                const r = this.topicMap.get(t);
                await Promise.all(r.map((async r=>await this.unsubscribeById(t, r, e))))
            }
            async unsubscribeById(t, e, r) {
                this.logger.debug("Unsubscribing Topic"),
                this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: t,
                        id: e,
                        opts: r
                    }
                });
                try {
                    const n = (0,
                    s._H)(r);
                    await this.rpcUnsubscribe(t, e, n);
                    const i = (0,
                    s.D6)("USER_DISCONNECTED", "".concat(this.name, ", ").concat(t));
                    await this.onUnsubscribe(t, e, i),
                    this.logger.debug("Successfully Unsubscribed Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: t,
                            id: e,
                            opts: r
                        }
                    })
                } catch (n) {
                    throw this.logger.debug("Failed to Unsubscribe Topic"),
                    this.logger.error(n),
                    n
                }
            }
            async rpcSubscribe(t, e) {
                const r = {
                    method: (0,
                    s.cO)(e.protocol).subscribe,
                    params: {
                        topic: t
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: r
                });
                try {
                    await await (0,
                    s.hF)(this.relayer.request(r), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                    this.relayer.events.emit(Fr)
                }
                return (0,
                s.rj)(t + this.clientId)
            }
            async rpcBatchSubscribe(t) {
                if (!t.length)
                    return;
                const e = t[0].relay
                  , r = {
                    method: (0,
                    s.cO)(e.protocol).batchSubscribe,
                    params: {
                        topics: t.map((t=>t.topic))
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: r
                });
                try {
                    return await await (0,
                    s.hF)(this.relayer.request(r), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Payload stalled"),
                    this.relayer.events.emit(Fr)
                }
            }
            rpcUnsubscribe(t, e, r) {
                const n = {
                    method: (0,
                    s.cO)(r.protocol).unsubscribe,
                    params: {
                        topic: t,
                        id: e
                    }
                };
                return this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: n
                }),
                this.relayer.request(n)
            }
            onSubscribe(t, e) {
                this.setSubscription(t, Ln(Nn({}, e), {
                    id: t
                })),
                this.pending.delete(e.topic)
            }
            onBatchSubscribe(t) {
                t.length && t.forEach((t=>{
                    this.setSubscription(t.id, Nn({}, t)),
                    this.pending.delete(t.topic)
                }
                ))
            }
            async onUnsubscribe(t, e, r) {
                this.events.removeAllListeners(e),
                this.hasSubscription(e, t) && this.deleteSubscription(e, r),
                await this.relayer.messages.del(t)
            }
            async setRelayerSubscriptions(t) {
                await this.relayer.core.storage.setItem(this.storageKey, t)
            }
            async getRelayerSubscriptions() {
                return await this.relayer.core.storage.getItem(this.storageKey)
            }
            setSubscription(t, e) {
                this.subscriptions.has(t) || (this.logger.debug("Setting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "setSubscription",
                    id: t,
                    subscription: e
                }),
                this.addSubscription(t, e))
            }
            addSubscription(t, e) {
                this.subscriptions.set(t, Nn({}, e)),
                this.topicMap.set(e.topic, t),
                this.events.emit($r, e)
            }
            getSubscription(t) {
                this.logger.debug("Getting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "getSubscription",
                    id: t
                });
                const e = this.subscriptions.get(t);
                if (!e) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(t));
                    throw new Error(e)
                }
                return e
            }
            deleteSubscription(t, e) {
                this.logger.debug("Deleting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "deleteSubscription",
                    id: t,
                    reason: e
                });
                const r = this.getSubscription(t);
                this.subscriptions.delete(t),
                this.topicMap.delete(r.topic, t),
                this.events.emit(Xr, Ln(Nn({}, r), {
                    reason: e
                }))
            }
            async persist() {
                await this.setRelayerSubscriptions(this.values),
                this.events.emit(tn)
            }
            async reset() {
                if (this.cached.length) {
                    const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                    for (let e = 0; e < t; e++) {
                        const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                        await this.batchSubscribe(t)
                    }
                }
                this.events.emit(en)
            }
            async restore() {
                try {
                    const t = await this.getRelayerSubscriptions();
                    if (typeof t > "u" || !t.length)
                        return;
                    if (this.subscriptions.size) {
                        const {message: t} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(t),
                        this.logger.error("".concat(this.name, ": ").concat(JSON.stringify(this.values))),
                        new Error(t)
                    }
                    this.cached = t,
                    this.logger.debug("Successfully Restored subscriptions for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        subscriptions: this.values
                    })
                } catch (t) {
                    this.logger.debug("Failed to Restore subscriptions for ".concat(this.name)),
                    this.logger.error(t)
                }
            }
            async batchSubscribe(t) {
                if (!t.length)
                    return;
                const e = await this.rpcBatchSubscribe(t);
                (0,
                s.qt)(e) && this.onBatchSubscribe(e.map(((e,r)=>Ln(Nn({}, t[r]), {
                    id: e
                }))))
            }
            async onConnect() {
                this.restartInProgress || (await this.restart(),
                this.onEnable())
            }
            onDisconnect() {
                this.onDisable()
            }
            async checkPending() {
                if (!this.initialized || this.relayer.transportExplicitlyClosed)
                    return;
                const t = [];
                this.pending.forEach((e=>{
                    t.push(e)
                }
                )),
                await this.batchSubscribe(t)
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, (async()=>{
                    await this.checkPending()
                }
                )),
                this.relayer.on(Vr, (async()=>{
                    await this.onConnect()
                }
                )),
                this.relayer.on(Kr, (()=>{
                    this.onDisconnect()
                }
                )),
                this.events.on($r, (async t=>{
                    const e = $r;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        data: t
                    }),
                    await this.persist()
                }
                )),
                this.events.on(Xr, (async t=>{
                    const e = Xr;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        data: t
                    }),
                    await this.persist()
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
            async restartToComplete() {
                this.restartInProgress && await new Promise((t=>{
                    const e = setInterval((()=>{
                        this.restartInProgress || (clearInterval(e),
                        t())
                    }
                    ), this.pollingInterval)
                }
                ))
            }
        }
        var qn = Object.defineProperty
          , Mn = Object.getOwnPropertySymbols
          , zn = Object.prototype.hasOwnProperty
          , kn = Object.prototype.propertyIsEnumerable
          , Un = (t,e,r)=>e in t ? qn(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
        class Hn extends G {
            constructor(t) {
                super(t),
                this.protocol = "wc",
                this.version = 2,
                this.events = new n.EventEmitter,
                this.name = "relayer",
                this.transportExplicitlyClosed = !1,
                this.initialized = !1,
                this.connectionAttemptInProgress = !1,
                this.connectionStatusPollingInterval = 20,
                this.staleConnectionErrors = ["socket hang up", "socket stalled"],
                this.hasExperiencedNetworkDisruption = !1,
                this.request = async t=>{
                    this.logger.debug("Publishing Request Payload");
                    try {
                        return await this.toEstablishConnection(),
                        await this.provider.request(t)
                    } catch (e) {
                        throw this.logger.debug("Failed to Publish Request"),
                        this.logger.error(e),
                        e
                    }
                }
                ,
                this.onPayloadHandler = t=>{
                    this.onProviderPayload(t)
                }
                ,
                this.onConnectHandler = ()=>{
                    this.events.emit(Vr)
                }
                ,
                this.onDisconnectHandler = ()=>{
                    this.onProviderDisconnect()
                }
                ,
                this.onProviderErrorHandler = t=>{
                    this.logger.error(t),
                    this.events.emit(Br, t),
                    this.logger.info("Fatal socket error received, closing transport"),
                    this.transportClose()
                }
                ,
                this.registerProviderListeners = ()=>{
                    this.provider.on(Gr, this.onPayloadHandler),
                    this.provider.on(Zr, this.onConnectHandler),
                    this.provider.on(Jr, this.onDisconnectHandler),
                    this.provider.on(Qr, this.onProviderErrorHandler)
                }
                ,
                this.core = t.core,
                this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? (0,
                H.generateChildLogger)(t.logger, this.name) : (0,
                H.pino)((0,
                H.getDefaultLoggerOptions)({
                    level: t.logger || "error"
                })),
                this.messages = new In(this.logger,t.core),
                this.subscriber = new Dn(this,this.logger),
                this.publisher = new Pn(this,this.logger),
                this.relayUrl = (null === t || void 0 === t ? void 0 : t.relayUrl) || zr,
                this.projectId = t.projectId,
                this.bundleId = (0,
                s.X_)(),
                this.provider = {}
            }
            async init() {
                this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.createProvider(),
                await Promise.all([this.messages.init(), this.subscriber.init()]);
                try {
                    await this.transportOpen()
                } catch {
                    this.logger.warn("Connection via ".concat(this.relayUrl, " failed, attempting to connect via failover domain ").concat(kr, "...")),
                    await this.restartTransport(kr)
                }
                this.initialized = !0,
                setTimeout((async()=>{
                    0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"),
                    await this.transportClose(),
                    this.transportExplicitlyClosed = !1)
                }
                ), 1e4)
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get connected() {
                return this.provider.connection.connected
            }
            get connecting() {
                return this.provider.connection.connecting
            }
            async publish(t, e, r) {
                this.isInitialized(),
                await this.publisher.publish(t, e, r),
                await this.recordMessageEvent({
                    topic: t,
                    message: e,
                    publishedAt: Date.now()
                })
            }
            async subscribe(t, e) {
                var r;
                this.isInitialized();
                let n, i = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
                if (i)
                    return i;
                const s = e=>{
                    e.topic === t && (this.subscriber.off($r, s),
                    n())
                }
                ;
                return await Promise.all([new Promise((t=>{
                    n = t,
                    this.subscriber.on($r, s)
                }
                )), new Promise((async r=>{
                    i = await this.subscriber.subscribe(t, e),
                    r()
                }
                ))]),
                i
            }
            async unsubscribe(t, e) {
                this.isInitialized(),
                await this.subscriber.unsubscribe(t, e)
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            async transportClose() {
                this.transportExplicitlyClosed = !0,
                this.hasExperiencedNetworkDisruption && this.connected ? await (0,
                s.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((()=>this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
            }
            async transportOpen(t) {
                if (this.transportExplicitlyClosed = !1,
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress) {
                    t && t !== this.relayUrl && (this.relayUrl = t,
                    await this.transportClose(),
                    await this.createProvider()),
                    this.connectionAttemptInProgress = !0;
                    try {
                        await Promise.all([new Promise((t=>{
                            if (!this.initialized)
                                return t();
                            this.subscriber.once(en, (()=>{
                                t()
                            }
                            ))
                        }
                        )), new Promise((async(t,e)=>{
                            try {
                                await (0,
                                s.hF)(this.provider.connect(), 1e4, "Socket stalled when trying to connect to ".concat(this.relayUrl))
                            } catch (r) {
                                return void e(r)
                            }
                            t()
                        }
                        ))])
                    } catch (e) {
                        this.logger.error(e);
                        const t = e;
                        if (!this.isConnectionStalled(t.message))
                            throw e;
                        this.provider.events.emit(Jr)
                    } finally {
                        this.connectionAttemptInProgress = !1,
                        this.hasExperiencedNetworkDisruption = !1
                    }
                }
            }
            async restartTransport(t) {
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl,
                await this.transportClose(),
                await this.createProvider(),
                await this.transportOpen())
            }
            async confirmOnlineStateOrThrow() {
                if (!await (0,
                s.Gg)())
                    throw new Error("No internet connection detected. Please restart your network and try again.")
            }
            isConnectionStalled(t) {
                return this.staleConnectionErrors.some((e=>t.includes(e)))
            }
            async createProvider() {
                this.provider.connection && this.unregisterProviderListeners();
                const t = await this.core.crypto.signJWT(this.relayUrl);
                this.provider = new Jt(new $t((0,
                s.$0)({
                    sdkVersion: "2.11.0",
                    protocol: this.protocol,
                    version: this.version,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId,
                    auth: t,
                    useOnCloseEvent: !0,
                    bundleId: this.bundleId
                }))),
                this.registerProviderListeners()
            }
            async recordMessageEvent(t) {
                const {topic: e, message: r} = t;
                await this.messages.set(e, r)
            }
            async shouldIgnoreMessageEvent(t) {
                const {topic: e, message: r} = t;
                if (!r || 0 === r.length)
                    return this.logger.debug("Ignoring invalid/empty message: ".concat(r)),
                    !0;
                if (!await this.subscriber.isSubscribed(e))
                    return this.logger.debug("Ignoring message for non-subscribed topic ".concat(e)),
                    !0;
                const n = this.messages.has(e, r);
                return n && this.logger.debug("Ignoring duplicate message: ".concat(r)),
                n
            }
            async onProviderPayload(t) {
                if (this.logger.debug("Incoming Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "incoming",
                    payload: t
                }),
                Ft(t)) {
                    if (!t.method.endsWith("_subscription"))
                        return;
                    const e = t.params
                      , {topic: r, message: n, publishedAt: i} = e.data
                      , s = {
                        topic: r,
                        message: n,
                        publishedAt: i
                    };
                    this.logger.debug("Emitting Relayer Payload"),
                    this.logger.trace(((t,e)=>{
                        for (var r in e || (e = {}))
                            zn.call(e, r) && Un(t, r, e[r]);
                        if (Mn)
                            for (var r of Mn(e))
                                kn.call(e, r) && Un(t, r, e[r]);
                        return t
                    }
                    )({
                        type: "event",
                        event: e.id
                    }, s)),
                    this.events.emit(e.id, s),
                    await this.acknowledgePayload(t),
                    await this.onMessageEvent(s)
                } else
                    Wt(t) && this.events.emit(Hr, t)
            }
            async onMessageEvent(t) {
                await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Ur, t),
                await this.recordMessageEvent(t))
            }
            async acknowledgePayload(t) {
                const e = Dt(t.id, !0);
                await this.provider.connection.send(e)
            }
            unregisterProviderListeners() {
                this.provider.off(Gr, this.onPayloadHandler),
                this.provider.off(Zr, this.onConnectHandler),
                this.provider.off(Jr, this.onDisconnectHandler),
                this.provider.off(Qr, this.onProviderErrorHandler)
            }
            async registerEventListeners() {
                this.events.on(Fr, (()=>{
                    this.restartTransport().catch((t=>this.logger.error(t)))
                }
                ));
                let t = await (0,
                s.Gg)();
                (0,
                s.uw)((async e=>{
                    this.initialized && t !== e && (t = e,
                    e ? await this.restartTransport().catch((t=>this.logger.error(t))) : (this.hasExperiencedNetworkDisruption = !0,
                    await this.transportClose().catch((t=>this.logger.error(t)))))
                }
                ))
            }
            onProviderDisconnect() {
                this.events.emit(Kr),
                this.attemptToReconnect()
            }
            attemptToReconnect() {
                this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
                setTimeout((async()=>{
                    await this.restartTransport().catch((t=>this.logger.error(t)))
                }
                ), (0,
                nt.toMiliseconds)(Yr)))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
            async toEstablishConnection() {
                if (await this.confirmOnlineStateOrThrow(),
                !this.connected) {
                    if (this.connectionAttemptInProgress)
                        return await new Promise((t=>{
                            const e = setInterval((()=>{
                                this.connected && (clearInterval(e),
                                t())
                            }
                            ), this.connectionStatusPollingInterval)
                        }
                        ));
                    await this.restartTransport()
                }
            }
        }
        var Vn = Object.defineProperty
          , Kn = Object.getOwnPropertySymbols
          , Bn = Object.prototype.hasOwnProperty
          , Fn = Object.prototype.propertyIsEnumerable
          , Wn = (t,e,r)=>e in t ? Vn(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , Gn = (t,e)=>{
            for (var r in e || (e = {}))
                Bn.call(e, r) && Wn(t, r, e[r]);
            if (Kn)
                for (var r of Kn(e))
                    Fn.call(e, r) && Wn(t, r, e[r]);
            return t
        }
        ;
        class Zn extends Z {
            constructor(t, e, r) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tr
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                super(t, e, r, n),
                this.core = t,
                this.logger = e,
                this.name = r,
                this.map = new Map,
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = Tr,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((t=>{
                        this.getKey && null !== t && !(0,
                        s.o8)(t) ? this.map.set(this.getKey(t), t) : (0,
                        s.xW)(t) ? this.map.set(t.id, t) : (0,
                        s.h1)(t) && this.map.set(t.topic, t)
                    }
                    )),
                    this.cached = [],
                    this.initialized = !0)
                }
                ,
                this.set = async(t,e)=>{
                    this.isInitialized(),
                    this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        key: t,
                        value: e
                    }),
                    this.map.set(t, e),
                    await this.persist())
                }
                ,
                this.get = t=>(this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    key: t
                }),
                this.getData(t)),
                this.getAll = t=>(this.isInitialized(),
                t ? this.values.filter((e=>Object.keys(t).every((r=>te()(e[r], t[r]))))) : this.values),
                this.update = async(t,e)=>{
                    this.isInitialized(),
                    this.logger.debug("Updating value"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        key: t,
                        update: e
                    });
                    const r = Gn(Gn({}, this.getData(t)), e);
                    this.map.set(t, r),
                    await this.persist()
                }
                ,
                this.delete = async(t,e)=>{
                    this.isInitialized(),
                    this.map.has(t) && (this.logger.debug("Deleting value"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        key: t,
                        reason: e
                    }),
                    this.map.delete(t),
                    await this.persist())
                }
                ,
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.storagePrefix = n,
                this.getKey = i
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.map.size
            }
            get keys() {
                return Array.from(this.map.keys())
            }
            get values() {
                return Array.from(this.map.values())
            }
            async setDataStore(t) {
                await this.core.storage.setItem(this.storageKey, t)
            }
            async getDataStore() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getData(t) {
                const e = this.map.get(t);
                if (!e) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(t));
                    throw this.logger.error(e),
                    new Error(e)
                }
                return e
            }
            async persist() {
                await this.setDataStore(this.values)
            }
            async restore() {
                try {
                    const t = await this.getDataStore();
                    if (typeof t > "u" || !t.length)
                        return;
                    if (this.map.size) {
                        const {message: t} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(t),
                        new Error(t)
                    }
                    this.cached = t,
                    this.logger.debug("Successfully Restored value for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        value: this.values
                    })
                } catch (t) {
                    this.logger.debug("Failed to Restore value for ".concat(this.name)),
                    this.logger.error(t)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
        }
        class Jn {
            constructor(t, e) {
                this.core = t,
                this.logger = e,
                this.name = "pairing",
                this.version = "0.3",
                this.events = new (i()),
                this.initialized = !1,
                this.storagePrefix = Tr,
                this.ignoredPayloadTypes = [s.rV],
                this.registeredMethods = [],
                this.init = async()=>{
                    this.initialized || (await this.pairings.init(),
                    await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.initialized = !0,
                    this.logger.trace("Initialized"))
                }
                ,
                this.register = t=>{
                    let {methods: e} = t;
                    this.isInitialized(),
                    this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                }
                ,
                this.create = async()=>{
                    this.isInitialized();
                    const t = (0,
                    s.jd)()
                      , e = await this.core.crypto.setSymKey(t)
                      , r = (0,
                    s.gn)(nt.FIVE_MINUTES)
                      , n = {
                        protocol: "irn"
                    }
                      , i = {
                        topic: e,
                        expiry: r,
                        relay: n,
                        active: !1
                    }
                      , o = (0,
                    s.Bv)({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: e,
                        symKey: t,
                        relay: n
                    });
                    return await this.pairings.set(e, i),
                    await this.core.relayer.subscribe(e),
                    this.core.expirer.set(e, r),
                    {
                        topic: e,
                        uri: o
                    }
                }
                ,
                this.pair = async t=>{
                    this.isInitialized(),
                    this.isValidPair(t);
                    const {topic: e, symKey: r, relay: n} = (0,
                    s.he)(t.uri);
                    let i;
                    if (this.pairings.keys.includes(e) && (i = this.pairings.get(e),
                    i.active))
                        throw new Error("Pairing already exists: ".concat(e, ". Please try again with a new connection URI."));
                    const o = (0,
                    s.gn)(nt.FIVE_MINUTES)
                      , a = {
                        topic: e,
                        relay: n,
                        expiry: o,
                        active: !1
                    };
                    return await this.pairings.set(e, a),
                    this.core.expirer.set(e, o),
                    t.activatePairing && await this.activate({
                        topic: e
                    }),
                    this.events.emit(sn, a),
                    this.core.crypto.keychain.has(e) || (await this.core.crypto.setSymKey(r, e),
                    await this.core.relayer.subscribe(e, {
                        relay: n
                    })),
                    a
                }
                ,
                this.activate = async t=>{
                    let {topic: e} = t;
                    this.isInitialized();
                    const r = (0,
                    s.gn)(nt.THIRTY_DAYS);
                    await this.pairings.update(e, {
                        active: !0,
                        expiry: r
                    }),
                    this.core.expirer.set(e, r)
                }
                ,
                this.ping = async t=>{
                    this.isInitialized(),
                    await this.isValidPing(t);
                    const {topic: e} = t;
                    if (this.pairings.keys.includes(e)) {
                        const t = await this.sendRequest(e, "wc_pairingPing", {})
                          , {done: r, resolve: n, reject: i} = (0,
                        s.H1)();
                        this.events.once((0,
                        s.E0)("pairing_ping", t), (t=>{
                            let {error: e} = t;
                            e ? i(e) : n()
                        }
                        )),
                        await r()
                    }
                }
                ,
                this.updateExpiry = async t=>{
                    let {topic: e, expiry: r} = t;
                    this.isInitialized(),
                    await this.pairings.update(e, {
                        expiry: r
                    })
                }
                ,
                this.updateMetadata = async t=>{
                    let {topic: e, metadata: r} = t;
                    this.isInitialized(),
                    await this.pairings.update(e, {
                        peerMetadata: r
                    })
                }
                ,
                this.getPairings = ()=>(this.isInitialized(),
                this.pairings.values),
                this.disconnect = async t=>{
                    this.isInitialized(),
                    await this.isValidDisconnect(t);
                    const {topic: e} = t;
                    this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", (0,
                    s.D6)("USER_DISCONNECTED")),
                    await this.deletePairing(e))
                }
                ,
                this.sendRequest = async(t,e,r)=>{
                    const n = Lt(e, r)
                      , i = await this.core.crypto.encode(t, n)
                      , s = nn[e].req;
                    return this.core.history.set(t, n),
                    this.core.relayer.publish(t, i, s),
                    n.id
                }
                ,
                this.sendResult = async(t,e,r)=>{
                    const n = Dt(t, r)
                      , i = await this.core.crypto.encode(e, n)
                      , s = await this.core.history.get(e, t)
                      , o = nn[s.request.method].res;
                    await this.core.relayer.publish(e, i, o),
                    await this.core.history.resolve(n)
                }
                ,
                this.sendError = async(t,e,r)=>{
                    const n = qt(t, r)
                      , i = await this.core.crypto.encode(e, n)
                      , s = await this.core.history.get(e, t)
                      , o = nn[s.request.method] ? nn[s.request.method].res : nn.unregistered_method.res;
                    await this.core.relayer.publish(e, i, o),
                    await this.core.history.resolve(n)
                }
                ,
                this.deletePairing = async(t,e)=>{
                    await this.core.relayer.unsubscribe(t),
                    await Promise.all([this.pairings.delete(t, (0,
                    s.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t)])
                }
                ,
                this.cleanup = async()=>{
                    const t = this.pairings.getAll().filter((t=>(0,
                    s.Bw)(t.expiry)));
                    await Promise.all(t.map((t=>this.deletePairing(t.topic))))
                }
                ,
                this.onRelayEventRequest = t=>{
                    const {topic: e, payload: r} = t;
                    switch (r.method) {
                    case "wc_pairingPing":
                        return this.onPairingPingRequest(e, r);
                    case "wc_pairingDelete":
                        return this.onPairingDeleteRequest(e, r);
                    default:
                        return this.onUnknownRpcMethodRequest(e, r)
                    }
                }
                ,
                this.onRelayEventResponse = async t=>{
                    const {topic: e, payload: r} = t
                      , n = (await this.core.history.get(e, r.id)).request.method;
                    return "wc_pairingPing" === n ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(n)
                }
                ,
                this.onPairingPingRequest = async(t,e)=>{
                    const {id: r} = e;
                    try {
                        this.isValidPing({
                            topic: t
                        }),
                        await this.sendResult(r, t, !0),
                        this.events.emit(cn, {
                            id: r,
                            topic: t
                        })
                    } catch (n) {
                        await this.sendError(r, t, n),
                        this.logger.error(n)
                    }
                }
                ,
                this.onPairingPingResponse = (t,e)=>{
                    const {id: r} = e;
                    setTimeout((()=>{
                        Gt(e) ? this.events.emit((0,
                        s.E0)("pairing_ping", r), {}) : Zt(e) && this.events.emit((0,
                        s.E0)("pairing_ping", r), {
                            error: e.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onPairingDeleteRequest = async(t,e)=>{
                    const {id: r} = e;
                    try {
                        this.isValidDisconnect({
                            topic: t
                        }),
                        await this.deletePairing(t),
                        this.events.emit(an, {
                            id: r,
                            topic: t
                        })
                    } catch (n) {
                        await this.sendError(r, t, n),
                        this.logger.error(n)
                    }
                }
                ,
                this.onUnknownRpcMethodRequest = async(t,e)=>{
                    const {id: r, method: n} = e;
                    try {
                        if (this.registeredMethods.includes(n))
                            return;
                        const e = (0,
                        s.D6)("WC_METHOD_UNSUPPORTED", n);
                        await this.sendError(r, t, e),
                        this.logger.error(e)
                    } catch (F) {
                        await this.sendError(r, t, F),
                        this.logger.error(F)
                    }
                }
                ,
                this.onUnknownRpcMethodResponse = t=>{
                    this.registeredMethods.includes(t) || this.logger.error((0,
                    s.D6)("WC_METHOD_UNSUPPORTED", t))
                }
                ,
                this.isValidPair = t=>{
                    var e;
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "pair() params: ".concat(t));
                        throw new Error(e)
                    }
                    if (!(0,
                    s.jv)(t.uri)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "pair() uri: ".concat(t.uri));
                        throw new Error(e)
                    }
                    const r = (0,
                    s.he)(t.uri);
                    if (null == (e = null === r || void 0 === r ? void 0 : r.relay) || !e.protocol) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                        throw new Error(t)
                    }
                    if (null == r || !r.symKey) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                        throw new Error(t)
                    }
                }
                ,
                this.isValidPing = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "ping() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e} = t;
                    await this.isValidPairingTopic(e)
                }
                ,
                this.isValidDisconnect = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "disconnect() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e} = t;
                    await this.isValidPairingTopic(e)
                }
                ,
                this.isValidPairingTopic = async t=>{
                    if (!(0,
                    s.M_)(t, !1)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(t));
                        throw new Error(e)
                    }
                    if (!this.pairings.keys.includes(t)) {
                        const {message: e} = (0,
                        s.Z7)("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(t));
                        throw new Error(e)
                    }
                    if ((0,
                    s.Bw)(this.pairings.get(t).expiry)) {
                        await this.deletePairing(t);
                        const {message: e} = (0,
                        s.Z7)("EXPIRED", "pairing topic: ".concat(t));
                        throw new Error(e)
                    }
                }
                ,
                this.core = t,
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.pairings = new Zn(this.core,this.logger,this.name,this.storagePrefix)
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
            registerRelayerEvents() {
                this.core.relayer.on(Ur, (async t=>{
                    const {topic: e, message: r} = t;
                    if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r)))
                        return;
                    const n = await this.core.crypto.decode(e, r);
                    try {
                        Ft(n) ? (this.core.history.set(e, n),
                        this.onRelayEventRequest({
                            topic: e,
                            payload: n
                        })) : Wt(n) && (await this.core.history.resolve(n),
                        await this.onRelayEventResponse({
                            topic: e,
                            payload: n
                        }),
                        this.core.history.delete(e, n.id))
                    } catch (K) {
                        this.logger.error(K)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.core.expirer.on(gn, (async t=>{
                    const {topic: e} = (0,
                    s.iP)(t.target);
                    e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0),
                    this.events.emit(on, {
                        topic: e
                    }))
                }
                ))
            }
        }
        class Qn extends B {
            constructor(t, e) {
                super(t, e),
                this.core = t,
                this.logger = e,
                this.records = new Map,
                this.events = new n.EventEmitter,
                this.name = "history",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = Tr,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((t=>this.records.set(t.id, t))),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.set = (t,e,r)=>{
                    if (this.isInitialized(),
                    this.logger.debug("Setting JSON-RPC request history record"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        topic: t,
                        request: e,
                        chainId: r
                    }),
                    this.records.has(e.id))
                        return;
                    const n = {
                        id: e.id,
                        topic: t,
                        request: {
                            method: e.method,
                            params: e.params || null
                        },
                        chainId: r,
                        expiry: (0,
                        s.gn)(nt.THIRTY_DAYS)
                    };
                    this.records.set(n.id, n),
                    this.events.emit(un, n)
                }
                ,
                this.resolve = async t=>{
                    if (this.isInitialized(),
                    this.logger.debug("Updating JSON-RPC response history record"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        response: t
                    }),
                    !this.records.has(t.id))
                        return;
                    const e = await this.getRecord(t.id);
                    typeof e.response > "u" && (e.response = Zt(t) ? {
                        error: t.error
                    } : {
                        result: t.result
                    },
                    this.records.set(e.id, e),
                    this.events.emit(hn, e))
                }
                ,
                this.get = async(t,e)=>(this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    topic: t,
                    id: e
                }),
                await this.getRecord(e)),
                this.delete = (t,e)=>{
                    this.isInitialized(),
                    this.logger.debug("Deleting record"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        id: e
                    }),
                    this.values.forEach((r=>{
                        if (r.topic === t) {
                            if (typeof e < "u" && r.id !== e)
                                return;
                            this.records.delete(r.id),
                            this.events.emit(ln, r)
                        }
                    }
                    ))
                }
                ,
                this.exists = async(t,e)=>(this.isInitialized(),
                !!this.records.has(e) && (await this.getRecord(e)).topic === t),
                this.on = (t,e)=>{
                    this.events.on(t, e)
                }
                ,
                this.once = (t,e)=>{
                    this.events.once(t, e)
                }
                ,
                this.off = (t,e)=>{
                    this.events.off(t, e)
                }
                ,
                this.removeListener = (t,e)=>{
                    this.events.removeListener(t, e)
                }
                ,
                this.logger = (0,
                H.generateChildLogger)(e, this.name)
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get size() {
                return this.records.size
            }
            get keys() {
                return Array.from(this.records.keys())
            }
            get values() {
                return Array.from(this.records.values())
            }
            get pending() {
                const t = [];
                return this.values.forEach((e=>{
                    if (typeof e.response < "u")
                        return;
                    const r = {
                        topic: e.topic,
                        request: Lt(e.request.method, e.request.params, e.id),
                        chainId: e.chainId
                    };
                    return t.push(r)
                }
                )),
                t
            }
            async setJsonRpcRecords(t) {
                await this.core.storage.setItem(this.storageKey, t)
            }
            async getJsonRpcRecords() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getRecord(t) {
                this.isInitialized();
                const e = this.records.get(t);
                if (!e) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(t));
                    throw new Error(e)
                }
                return e
            }
            async persist() {
                await this.setJsonRpcRecords(this.values),
                this.events.emit(pn)
            }
            async restore() {
                try {
                    const t = await this.getJsonRpcRecords();
                    if (typeof t > "u" || !t.length)
                        return;
                    if (this.records.size) {
                        const {message: t} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(t),
                        new Error(t)
                    }
                    this.cached = t,
                    this.logger.debug("Successfully Restored records for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        records: this.values
                    })
                } catch (t) {
                    this.logger.debug("Failed to Restore records for ".concat(this.name)),
                    this.logger.error(t)
                }
            }
            registerEventListeners() {
                this.events.on(un, (t=>{
                    const e = un;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        record: t
                    }),
                    this.persist()
                }
                )),
                this.events.on(hn, (t=>{
                    const e = hn;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        record: t
                    }),
                    this.persist()
                }
                )),
                this.events.on(ln, (t=>{
                    const e = ln;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        record: t
                    }),
                    this.persist()
                }
                )),
                this.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, (()=>{
                    this.cleanup()
                }
                ))
            }
            cleanup() {
                try {
                    this.records.forEach((t=>{
                        (0,
                        nt.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info("Deleting expired history log: ".concat(t.id)),
                        this.delete(t.topic, t.id))
                    }
                    ))
                } catch (t) {
                    this.logger.warn(t)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
        }
        class Yn extends Q {
            constructor(t, e) {
                super(t, e),
                this.core = t,
                this.logger = e,
                this.expirations = new Map,
                this.events = new n.EventEmitter,
                this.name = "expirer",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = Tr,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((t=>this.expirations.set(t.target, t))),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.has = t=>{
                    try {
                        const e = this.formatTarget(t);
                        return typeof this.getExpiration(e) < "u"
                    } catch {
                        return !1
                    }
                }
                ,
                this.set = (t,e)=>{
                    this.isInitialized();
                    const r = this.formatTarget(t)
                      , n = {
                        target: r,
                        expiry: e
                    };
                    this.expirations.set(r, n),
                    this.checkExpiry(r, n),
                    this.events.emit(fn, {
                        target: r,
                        expiration: n
                    })
                }
                ,
                this.get = t=>{
                    this.isInitialized();
                    const e = this.formatTarget(t);
                    return this.getExpiration(e)
                }
                ,
                this.del = t=>{
                    if (this.isInitialized(),
                    this.has(t)) {
                        const e = this.formatTarget(t)
                          , r = this.getExpiration(e);
                        this.expirations.delete(e),
                        this.events.emit(dn, {
                            target: e,
                            expiration: r
                        })
                    }
                }
                ,
                this.on = (t,e)=>{
                    this.events.on(t, e)
                }
                ,
                this.once = (t,e)=>{
                    this.events.once(t, e)
                }
                ,
                this.off = (t,e)=>{
                    this.events.off(t, e)
                }
                ,
                this.removeListener = (t,e)=>{
                    this.events.removeListener(t, e)
                }
                ,
                this.logger = (0,
                H.generateChildLogger)(e, this.name)
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.expirations.size
            }
            get keys() {
                return Array.from(this.expirations.keys())
            }
            get values() {
                return Array.from(this.expirations.values())
            }
            formatTarget(t) {
                if ("string" == typeof t)
                    return (0,
                    s.Z4)(t);
                if ("number" == typeof t)
                    return (0,
                    s.Gq)(t);
                const {message: e} = (0,
                s.Z7)("UNKNOWN_TYPE", "Target type: ".concat(typeof t));
                throw new Error(e)
            }
            async setExpirations(t) {
                await this.core.storage.setItem(this.storageKey, t)
            }
            async getExpirations() {
                return await this.core.storage.getItem(this.storageKey)
            }
            async persist() {
                await this.setExpirations(this.values),
                this.events.emit(vn)
            }
            async restore() {
                try {
                    const t = await this.getExpirations();
                    if (typeof t > "u" || !t.length)
                        return;
                    if (this.expirations.size) {
                        const {message: t} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(t),
                        new Error(t)
                    }
                    this.cached = t,
                    this.logger.debug("Successfully Restored expirations for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        expirations: this.values
                    })
                } catch (t) {
                    this.logger.debug("Failed to Restore expirations for ".concat(this.name)),
                    this.logger.error(t)
                }
            }
            getExpiration(t) {
                const e = this.expirations.get(t);
                if (!e) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(t));
                    throw this.logger.error(e),
                    new Error(e)
                }
                return e
            }
            checkExpiry(t, e) {
                const {expiry: r} = e;
                (0,
                nt.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e)
            }
            expire(t, e) {
                this.expirations.delete(t),
                this.events.emit(gn, {
                    target: t,
                    expiration: e
                })
            }
            checkExpirations() {
                this.core.relayer.connected && this.expirations.forEach(((t,e)=>this.checkExpiry(e, t)))
            }
            registerEventListeners() {
                this.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, (()=>this.checkExpirations())),
                this.events.on(fn, (t=>{
                    const e = fn;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        data: t
                    }),
                    this.persist()
                }
                )),
                this.events.on(gn, (t=>{
                    const e = gn;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        data: t
                    }),
                    this.persist()
                }
                )),
                this.events.on(dn, (t=>{
                    const e = dn;
                    this.logger.info("Emitting ".concat(e)),
                    this.logger.debug({
                        type: "event",
                        event: e,
                        data: t
                    }),
                    this.persist()
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
            }
        }
        class $n extends Y {
            constructor(t, e) {
                super(t, e),
                this.projectId = t,
                this.logger = e,
                this.name = yn,
                this.initialized = !1,
                this.queue = [],
                this.verifyDisabled = !1,
                this.init = async t=>{
                    if (this.verifyDisabled || (0,
                    s.b$)() || !(0,
                    s.jU)())
                        return;
                    const e = this.getVerifyUrl(null === t || void 0 === t ? void 0 : t.verifyUrl);
                    this.verifyUrl !== e && this.removeIframe(),
                    this.verifyUrl = e;
                    try {
                        await this.createIframe()
                    } catch (K) {
                        this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)),
                        this.logger.info(K)
                    }
                    if (!this.initialized) {
                        this.removeIframe(),
                        this.verifyUrl = wn;
                        try {
                            await this.createIframe()
                        } catch (K) {
                            this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)),
                            this.logger.info(K),
                            this.verifyDisabled = !0
                        }
                    }
                }
                ,
                this.register = async t=>{
                    this.initialized ? this.sendPost(t.attestationId) : (this.addToQueue(t.attestationId),
                    await this.init())
                }
                ,
                this.resolve = async t=>{
                    if (this.isDevEnv)
                        return "";
                    const e = this.getVerifyUrl(null === t || void 0 === t ? void 0 : t.verifyUrl);
                    let r;
                    try {
                        r = await this.fetchAttestation(t.attestationId, e)
                    } catch (n) {
                        this.logger.info("failed to resolve attestation: ".concat(t.attestationId, " from url: ").concat(e)),
                        this.logger.info(n),
                        r = await this.fetchAttestation(t.attestationId, wn)
                    }
                    return r
                }
                ,
                this.fetchAttestation = async(t,e)=>{
                    this.logger.info("resolving attestation: ".concat(t, " from url: ").concat(e));
                    const r = this.startAbortTimer(2 * nt.ONE_SECOND)
                      , n = await fetch("".concat(e, "/attestation/").concat(t), {
                        signal: this.abortController.signal
                    });
                    return clearTimeout(r),
                    200 === n.status ? await n.json() : void 0
                }
                ,
                this.addToQueue = t=>{
                    this.queue.push(t)
                }
                ,
                this.processQueue = ()=>{
                    0 !== this.queue.length && (this.queue.forEach((t=>this.sendPost(t))),
                    this.queue = [])
                }
                ,
                this.sendPost = t=>{
                    var e;
                    try {
                        if (!this.iframe)
                            return;
                        null == (e = this.iframe.contentWindow) || e.postMessage(t, "*"),
                        this.logger.info("postMessage sent: ".concat(t, " ").concat(this.verifyUrl))
                    } catch {}
                }
                ,
                this.createIframe = async()=>{
                    let t;
                    const e = r=>{
                        "verify_ready" === r.data && (this.initialized = !0,
                        this.processQueue(),
                        window.removeEventListener("message", e),
                        t())
                    }
                    ;
                    await Promise.race([new Promise((r=>{
                        if (document.getElementById(yn))
                            return r();
                        window.addEventListener("message", e);
                        const n = document.createElement("iframe");
                        n.id = yn,
                        n.src = "".concat(this.verifyUrl, "/").concat(this.projectId),
                        n.style.display = "none",
                        document.body.append(n),
                        this.iframe = n,
                        t = r
                    }
                    )), new Promise(((t,r)=>setTimeout((()=>{
                        window.removeEventListener("message", e),
                        r("verify iframe load timeout")
                    }
                    ), (0,
                    nt.toMiliseconds)(nt.FIVE_SECONDS))))])
                }
                ,
                this.removeIframe = ()=>{
                    this.iframe && (this.iframe.remove(),
                    this.iframe = void 0,
                    this.initialized = !1)
                }
                ,
                this.getVerifyUrl = t=>{
                    let e = t || mn;
                    return _n.includes(e) || (this.logger.info("verify url: ".concat(e, ", not included in trusted list, assigning default: ").concat(mn)),
                    e = mn),
                    e
                }
                ,
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.verifyUrl = mn,
                this.abortController = new AbortController,
                this.isDevEnv = (0,
                s.UG)() && {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0
                }.IS_VITEST
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            startAbortTimer(t) {
                return this.abortController = new AbortController,
                setTimeout((()=>this.abortController.abort()), (0,
                nt.toMiliseconds)(t))
            }
        }
        class Xn extends $ {
            constructor(t, e) {
                super(t, e),
                this.projectId = t,
                this.logger = e,
                this.context = "echo",
                this.registerDeviceToken = async t=>{
                    const {clientId: e, token: r, notificationType: n, enableEncrypted: i=!1} = t
                      , s = "".concat("https://echo.walletconnect.com", "/").concat(this.projectId, "/clients");
                    await re()(s, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            client_id: e,
                            type: n,
                            token: r,
                            always_raw: i
                        })
                    })
                }
                ,
                this.logger = (0,
                H.generateChildLogger)(e, this.context)
            }
        }
        var ti = Object.defineProperty
          , ei = Object.getOwnPropertySymbols
          , ri = Object.prototype.hasOwnProperty
          , ni = Object.prototype.propertyIsEnumerable
          , ii = (t,e,r)=>e in t ? ti(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , si = (t,e)=>{
            for (var r in e || (e = {}))
                ri.call(e, r) && ii(t, r, e[r]);
            if (ei)
                for (var r of ei(e))
                    ni.call(e, r) && ii(t, r, e[r]);
            return t
        }
        ;
        class oi extends K {
            constructor(t) {
                super(t),
                this.protocol = "wc",
                this.version = 2,
                this.name = jr,
                this.events = new n.EventEmitter,
                this.initialized = !1,
                this.on = (t,e)=>this.events.on(t, e),
                this.once = (t,e)=>this.events.once(t, e),
                this.off = (t,e)=>this.events.off(t, e),
                this.removeListener = (t,e)=>this.events.removeListener(t, e),
                this.projectId = null === t || void 0 === t ? void 0 : t.projectId,
                this.relayUrl = (null === t || void 0 === t ? void 0 : t.relayUrl) || zr,
                this.customStoragePrefix = null != t && t.customStoragePrefix ? ":".concat(t.customStoragePrefix) : "";
                const e = typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof (null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0,
                H.pino)((0,
                H.getDefaultLoggerOptions)({
                    level: (null === t || void 0 === t ? void 0 : t.logger) || Nr
                }));
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.heartbeat = new U.HeartBeat,
                this.crypto = new En(this,this.logger,null === t || void 0 === t ? void 0 : t.keychain),
                this.history = new Qn(this,this.logger),
                this.expirer = new Yn(this,this.logger),
                this.storage = null != t && t.storage ? t.storage : new k(si(si({}, Lr), null === t || void 0 === t ? void 0 : t.storageOptions)),
                this.relayer = new Hn({
                    core: this,
                    logger: this.logger,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId
                }),
                this.pairing = new Jn(this,this.logger),
                this.verify = new $n(this.projectId || "",this.logger),
                this.echoClient = new Xn(this.projectId || "",this.logger)
            }
            static async init(t) {
                const e = new oi(t);
                await e.initialize();
                const r = await e.crypto.getClientId();
                return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r),
                e
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            async start() {
                this.initialized || await this.initialize()
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.crypto.init(),
                    await this.history.init(),
                    await this.expirer.init(),
                    await this.relayer.init(),
                    await this.heartbeat.init(),
                    await this.pairing.init(),
                    this.initialized = !0,
                    this.logger.info("Core Initialization Success")
                } catch (t) {
                    throw this.logger.warn("Core Initialization Failure at epoch ".concat(Date.now()), t),
                    this.logger.error(t.message),
                    t
                }
            }
        }
        const ai = oi
          , ci = "client"
          , ui = "".concat("wc", "@").concat(2, ":").concat(ci, ":")
          , hi = ci
          , li = "error"
          , pi = "WALLETCONNECT_DEEPLINK_CHOICE"
          , fi = "Proposal expired"
          , di = nt.SEVEN_DAYS
          , gi = {
            wc_sessionPropose: {
                req: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: nt.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: nt.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: nt.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: nt.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1115
                }
            }
        }
          , vi = {
            min: nt.FIVE_MINUTES,
            max: nt.SEVEN_DAYS
        }
          , yi = "IDLE"
          , mi = "ACTIVE"
          , wi = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
        var _i = Object.defineProperty
          , bi = Object.defineProperties
          , Ei = Object.getOwnPropertyDescriptors
          , Ii = Object.getOwnPropertySymbols
          , Pi = Object.prototype.hasOwnProperty
          , Si = Object.prototype.propertyIsEnumerable
          , Oi = (t,e,r)=>e in t ? _i(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , xi = (t,e)=>{
            for (var r in e || (e = {}))
                Pi.call(e, r) && Oi(t, r, e[r]);
            if (Ii)
                for (var r of Ii(e))
                    Si.call(e, r) && Oi(t, r, e[r]);
            return t
        }
          , Ri = (t,e)=>bi(t, Ei(e));
        class Ci extends tt {
            constructor(t) {
                var e;
                super(t),
                e = this,
                this.name = "engine",
                this.events = new (i()),
                this.initialized = !1,
                this.ignoredPayloadTypes = [s.rV],
                this.requestQueue = {
                    state: yi,
                    queue: []
                },
                this.sessionRequestQueue = {
                    state: yi,
                    queue: []
                },
                this.requestQueueDelay = nt.ONE_SECOND,
                this.init = async()=>{
                    this.initialized || (await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.registerPairingEvents(),
                    this.client.core.pairing.register({
                        methods: Object.keys(gi)
                    }),
                    this.initialized = !0,
                    setTimeout((()=>{
                        this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                        this.processSessionRequestQueue()
                    }
                    ), (0,
                    nt.toMiliseconds)(this.requestQueueDelay)))
                }
                ,
                this.connect = async t=>{
                    await this.isInitialized();
                    const e = Ri(xi({}, t), {
                        requiredNamespaces: t.requiredNamespaces || {},
                        optionalNamespaces: t.optionalNamespaces || {}
                    });
                    await this.isValidConnect(e);
                    const {pairingTopic: r, requiredNamespaces: n, optionalNamespaces: i, sessionProperties: o, relays: a} = e;
                    let c, u = r, h = !1;
                    if (u && (h = this.client.core.pairing.pairings.get(u).active),
                    !u || !h) {
                        const {topic: t, uri: e} = await this.client.core.pairing.create();
                        u = t,
                        c = e
                    }
                    const l = await this.client.core.crypto.generateKeyPair()
                      , p = xi({
                        requiredNamespaces: n,
                        optionalNamespaces: i,
                        relays: null !== a && void 0 !== a ? a : [{
                            protocol: "irn"
                        }],
                        proposer: {
                            publicKey: l,
                            metadata: this.client.metadata
                        }
                    }, o && {
                        sessionProperties: o
                    })
                      , {reject: f, resolve: d, done: g} = (0,
                    s.H1)(nt.FIVE_MINUTES, fi);
                    if (this.events.once((0,
                    s.E0)("session_connect"), (async t=>{
                        let {error: e, session: r} = t;
                        if (e)
                            f(e);
                        else if (r) {
                            r.self.publicKey = l;
                            const t = Ri(xi({}, r), {
                                requiredNamespaces: r.requiredNamespaces,
                                optionalNamespaces: r.optionalNamespaces
                            });
                            await this.client.session.set(r.topic, t),
                            await this.setExpiry(r.topic, r.expiry),
                            u && await this.client.core.pairing.updateMetadata({
                                topic: u,
                                metadata: r.peer.metadata
                            }),
                            d(t)
                        }
                    }
                    )),
                    !u) {
                        const {message: t} = (0,
                        s.Z7)("NO_MATCHING_KEY", "connect() pairing topic: ".concat(u));
                        throw new Error(t)
                    }
                    const v = await this.sendRequest({
                        topic: u,
                        method: "wc_sessionPropose",
                        params: p
                    })
                      , y = (0,
                    s.gn)(nt.FIVE_MINUTES);
                    return await this.setProposal(v, xi({
                        id: v,
                        expiry: y
                    }, p)),
                    {
                        uri: c,
                        approval: g
                    }
                }
                ,
                this.pair = async t=>(await this.isInitialized(),
                await this.client.core.pairing.pair(t)),
                this.approve = async t=>{
                    await this.isInitialized(),
                    await this.isValidApprove(t);
                    const {id: e, relayProtocol: r, namespaces: n, sessionProperties: i} = t
                      , o = this.client.proposal.get(e);
                    let {pairingTopic: a, proposer: c, requiredNamespaces: u, optionalNamespaces: h} = o;
                    a = a || "",
                    (0,
                    s.L5)(u) || (u = (0,
                    s.fc)(n, "approve()"));
                    const l = await this.client.core.crypto.generateKeyPair()
                      , p = c.publicKey
                      , f = await this.client.core.crypto.generateSharedKey(l, p);
                    a && e && (await this.client.core.pairing.updateMetadata({
                        topic: a,
                        metadata: c.metadata
                    }),
                    await this.sendResult({
                        id: e,
                        topic: a,
                        result: {
                            relay: {
                                protocol: null !== r && void 0 !== r ? r : "irn"
                            },
                            responderPublicKey: l
                        }
                    }),
                    await this.client.proposal.delete(e, (0,
                    s.D6)("USER_DISCONNECTED")),
                    await this.client.core.pairing.activate({
                        topic: a
                    }));
                    const d = xi({
                        relay: {
                            protocol: null !== r && void 0 !== r ? r : "irn"
                        },
                        namespaces: n,
                        requiredNamespaces: u,
                        optionalNamespaces: h,
                        pairingTopic: a,
                        controller: {
                            publicKey: l,
                            metadata: this.client.metadata
                        },
                        expiry: (0,
                        s.gn)(di)
                    }, i && {
                        sessionProperties: i
                    });
                    await this.client.core.relayer.subscribe(f),
                    await this.sendRequest({
                        topic: f,
                        method: "wc_sessionSettle",
                        params: d,
                        throwOnFailedPublish: !0
                    });
                    const g = Ri(xi({}, d), {
                        topic: f,
                        pairingTopic: a,
                        acknowledged: !1,
                        self: d.controller,
                        peer: {
                            publicKey: c.publicKey,
                            metadata: c.metadata
                        },
                        controller: l
                    });
                    return await this.client.session.set(f, g),
                    await this.setExpiry(f, (0,
                    s.gn)(di)),
                    {
                        topic: f,
                        acknowledged: ()=>new Promise((t=>setTimeout((()=>t(this.client.session.get(f))), 500)))
                    }
                }
                ,
                this.reject = async t=>{
                    await this.isInitialized(),
                    await this.isValidReject(t);
                    const {id: e, reason: r} = t
                      , {pairingTopic: n} = this.client.proposal.get(e);
                    n && (await this.sendError(e, n, r),
                    await this.client.proposal.delete(e, (0,
                    s.D6)("USER_DISCONNECTED")))
                }
                ,
                this.update = async t=>{
                    await this.isInitialized(),
                    await this.isValidUpdate(t);
                    const {topic: e, namespaces: r} = t
                      , n = await this.sendRequest({
                        topic: e,
                        method: "wc_sessionUpdate",
                        params: {
                            namespaces: r
                        }
                    })
                      , {done: i, resolve: o, reject: a} = (0,
                    s.H1)();
                    return this.events.once((0,
                    s.E0)("session_update", n), (t=>{
                        let {error: e} = t;
                        e ? a(e) : o()
                    }
                    )),
                    await this.client.session.update(e, {
                        namespaces: r
                    }),
                    {
                        acknowledged: i
                    }
                }
                ,
                this.extend = async t=>{
                    await this.isInitialized(),
                    await this.isValidExtend(t);
                    const {topic: e} = t
                      , r = await this.sendRequest({
                        topic: e,
                        method: "wc_sessionExtend",
                        params: {}
                    })
                      , {done: n, resolve: i, reject: o} = (0,
                    s.H1)();
                    return this.events.once((0,
                    s.E0)("session_extend", r), (t=>{
                        let {error: e} = t;
                        e ? o(e) : i()
                    }
                    )),
                    await this.setExpiry(e, (0,
                    s.gn)(di)),
                    {
                        acknowledged: n
                    }
                }
                ,
                this.request = async t=>{
                    await this.isInitialized(),
                    await this.isValidRequest(t);
                    const {chainId: e, request: r, topic: n, expiry: i} = t
                      , o = Tt()
                      , {done: a, resolve: c, reject: u} = (0,
                    s.H1)(i, "Request expired. Please try again.");
                    return this.events.once((0,
                    s.E0)("session_request", o), (t=>{
                        let {error: e, result: r} = t;
                        e ? u(e) : c(r)
                    }
                    )),
                    await Promise.all([new Promise((async t=>{
                        await this.sendRequest({
                            clientRpcId: o,
                            topic: n,
                            method: "wc_sessionRequest",
                            params: {
                                request: r,
                                chainId: e
                            },
                            expiry: i,
                            throwOnFailedPublish: !0
                        }).catch((t=>u(t))),
                        this.client.events.emit("session_request_sent", {
                            topic: n,
                            request: r,
                            chainId: e,
                            id: o
                        }),
                        t()
                    }
                    )), new Promise((async t=>{
                        const e = await (0,
                        s.bW)(this.client.core.storage, pi);
                        (0,
                        s.Hh)({
                            id: o,
                            topic: n,
                            wcDeepLink: e
                        }),
                        t()
                    }
                    )), a()]).then((t=>t[2]))
                }
                ,
                this.respond = async t=>{
                    await this.isInitialized(),
                    await this.isValidRespond(t);
                    const {topic: e, response: r} = t
                      , {id: n} = r;
                    Gt(r) ? await this.sendResult({
                        id: n,
                        topic: e,
                        result: r.result,
                        throwOnFailedPublish: !0
                    }) : Zt(r) && await this.sendError(n, e, r.error),
                    this.cleanupAfterResponse(t)
                }
                ,
                this.ping = async t=>{
                    await this.isInitialized(),
                    await this.isValidPing(t);
                    const {topic: e} = t;
                    if (this.client.session.keys.includes(e)) {
                        const t = await this.sendRequest({
                            topic: e,
                            method: "wc_sessionPing",
                            params: {}
                        })
                          , {done: r, resolve: n, reject: i} = (0,
                        s.H1)();
                        this.events.once((0,
                        s.E0)("session_ping", t), (t=>{
                            let {error: e} = t;
                            e ? i(e) : n()
                        }
                        )),
                        await r()
                    } else
                        this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                            topic: e
                        })
                }
                ,
                this.emit = async t=>{
                    await this.isInitialized(),
                    await this.isValidEmit(t);
                    const {topic: e, event: r, chainId: n} = t;
                    await this.sendRequest({
                        topic: e,
                        method: "wc_sessionEvent",
                        params: {
                            event: r,
                            chainId: n
                        }
                    })
                }
                ,
                this.disconnect = async t=>{
                    await this.isInitialized(),
                    await this.isValidDisconnect(t);
                    const {topic: e} = t;
                    this.client.session.keys.includes(e) ? (await this.sendRequest({
                        topic: e,
                        method: "wc_sessionDelete",
                        params: (0,
                        s.D6)("USER_DISCONNECTED"),
                        throwOnFailedPublish: !0
                    }),
                    await this.deleteSession(e)) : await this.client.core.pairing.disconnect({
                        topic: e
                    })
                }
                ,
                this.find = t=>(this.isInitialized(),
                this.client.session.getAll().filter((e=>(0,
                s.Ih)(e, t)))),
                this.getPendingSessionRequests = ()=>(this.isInitialized(),
                this.client.pendingRequest.getAll()),
                this.cleanupDuplicatePairings = async t=>{
                    if (t.pairingTopic)
                        try {
                            const e = this.client.core.pairing.pairings.get(t.pairingTopic)
                              , r = this.client.core.pairing.pairings.getAll().filter((r=>{
                                var n, i;
                                return (null == (n = r.peerMetadata) ? void 0 : n.url) && (null == (i = r.peerMetadata) ? void 0 : i.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic
                            }
                            ));
                            if (0 === r.length)
                                return;
                            this.client.logger.info("Cleaning up ".concat(r.length, " duplicate pairing(s)")),
                            await Promise.all(r.map((t=>this.client.core.pairing.disconnect({
                                topic: t.topic
                            })))),
                            this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                }
                ,
                this.deleteSession = async(t,e)=>{
                    const {self: r} = this.client.session.get(t);
                    await this.client.core.relayer.unsubscribe(t),
                    this.client.session.delete(t, (0,
                    s.D6)("USER_DISCONNECTED")),
                    this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey),
                    this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t),
                    e || this.client.core.expirer.del(t),
                    this.client.core.storage.removeItem(pi).catch((t=>this.client.logger.warn(t))),
                    this.getPendingSessionRequests().forEach((e=>{
                        e.topic === t && this.deletePendingSessionRequest(e.id, (0,
                        s.D6)("USER_DISCONNECTED"))
                    }
                    ))
                }
                ,
                this.deleteProposal = async(t,e)=>{
                    await Promise.all([this.client.proposal.delete(t, (0,
                    s.D6)("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)])
                }
                ,
                this.deletePendingSessionRequest = async function(t, r) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    await Promise.all([e.client.pendingRequest.delete(t, r), n ? Promise.resolve() : e.client.core.expirer.del(t)]),
                    e.sessionRequestQueue.queue = e.sessionRequestQueue.queue.filter((e=>e.id !== t)),
                    n && (e.sessionRequestQueue.state = yi)
                }
                ,
                this.setExpiry = async(t,e)=>{
                    this.client.session.keys.includes(t) && await this.client.session.update(t, {
                        expiry: e
                    }),
                    this.client.core.expirer.set(t, e)
                }
                ,
                this.setProposal = async(t,e)=>{
                    await this.client.proposal.set(t, e),
                    this.client.core.expirer.set(t, e.expiry)
                }
                ,
                this.setPendingSessionRequest = async t=>{
                    const e = gi.wc_sessionRequest.req.ttl
                      , {id: r, topic: n, params: i, verifyContext: o} = t;
                    await this.client.pendingRequest.set(r, {
                        id: r,
                        topic: n,
                        params: i,
                        verifyContext: o
                    }),
                    e && this.client.core.expirer.set(r, (0,
                    s.gn)(e))
                }
                ,
                this.sendRequest = async t=>{
                    const {topic: e, method: r, params: n, expiry: i, relayRpcId: o, clientRpcId: a, throwOnFailedPublish: c} = t
                      , u = Lt(r, n, a);
                    if ((0,
                    s.jU)() && wi.includes(r)) {
                        const t = (0,
                        s.rj)(JSON.stringify(u));
                        this.client.core.verify.register({
                            attestationId: t
                        })
                    }
                    const h = await this.client.core.crypto.encode(e, u)
                      , l = gi[r].req;
                    return i && (l.ttl = i),
                    o && (l.id = o),
                    this.client.core.history.set(e, u),
                    c ? (l.internal = Ri(xi({}, l.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(e, h, l)) : this.client.core.relayer.publish(e, h, l).catch((t=>this.client.logger.error(t))),
                    u.id
                }
                ,
                this.sendResult = async t=>{
                    const {id: e, topic: r, result: n, throwOnFailedPublish: i} = t
                      , s = Dt(e, n)
                      , o = await this.client.core.crypto.encode(r, s)
                      , a = await this.client.core.history.get(r, e)
                      , c = gi[a.request.method].res;
                    i ? (c.internal = Ri(xi({}, c.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch((t=>this.client.logger.error(t))),
                    await this.client.core.history.resolve(s)
                }
                ,
                this.sendError = async(t,e,r)=>{
                    const n = qt(t, r)
                      , i = await this.client.core.crypto.encode(e, n)
                      , s = await this.client.core.history.get(e, t)
                      , o = gi[s.request.method].res;
                    this.client.core.relayer.publish(e, i, o),
                    await this.client.core.history.resolve(n)
                }
                ,
                this.cleanup = async()=>{
                    const t = []
                      , e = [];
                    this.client.session.getAll().forEach((e=>{
                        (0,
                        s.Bw)(e.expiry) && t.push(e.topic)
                    }
                    )),
                    this.client.proposal.getAll().forEach((t=>{
                        (0,
                        s.Bw)(t.expiry) && e.push(t.id)
                    }
                    )),
                    await Promise.all([...t.map((t=>this.deleteSession(t))), ...e.map((t=>this.deleteProposal(t)))])
                }
                ,
                this.onRelayEventRequest = async t=>{
                    this.requestQueue.queue.push(t),
                    await this.processRequestsQueue()
                }
                ,
                this.processRequestsQueue = async()=>{
                    if (this.requestQueue.state !== mi) {
                        for (this.client.logger.info("Request queue starting with ".concat(this.requestQueue.queue.length, " requests")); this.requestQueue.queue.length > 0; ) {
                            this.requestQueue.state = mi;
                            const e = this.requestQueue.queue.shift();
                            if (e)
                                try {
                                    this.processRequest(e),
                                    await new Promise((t=>setTimeout(t, 300)))
                                } catch (t) {
                                    this.client.logger.warn(t)
                                }
                        }
                        this.requestQueue.state = yi
                    } else
                        this.client.logger.info("Request queue already active, skipping...")
                }
                ,
                this.processRequest = t=>{
                    const {topic: e, payload: r} = t
                      , n = r.method;
                    switch (n) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeRequest(e, r);
                    case "wc_sessionSettle":
                        return this.onSessionSettleRequest(e, r);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateRequest(e, r);
                    case "wc_sessionExtend":
                        return this.onSessionExtendRequest(e, r);
                    case "wc_sessionPing":
                        return this.onSessionPingRequest(e, r);
                    case "wc_sessionDelete":
                        return this.onSessionDeleteRequest(e, r);
                    case "wc_sessionRequest":
                        return this.onSessionRequest(e, r);
                    case "wc_sessionEvent":
                        return this.onSessionEventRequest(e, r);
                    default:
                        return this.client.logger.info("Unsupported request method ".concat(n))
                    }
                }
                ,
                this.onRelayEventResponse = async t=>{
                    const {topic: e, payload: r} = t
                      , n = (await this.client.core.history.get(e, r.id)).request.method;
                    switch (n) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeResponse(e, r);
                    case "wc_sessionSettle":
                        return this.onSessionSettleResponse(e, r);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateResponse(e, r);
                    case "wc_sessionExtend":
                        return this.onSessionExtendResponse(e, r);
                    case "wc_sessionPing":
                        return this.onSessionPingResponse(e, r);
                    case "wc_sessionRequest":
                        return this.onSessionRequestResponse(e, r);
                    default:
                        return this.client.logger.info("Unsupported response method ".concat(n))
                    }
                }
                ,
                this.onRelayEventUnknownPayload = t=>{
                    const {topic: e} = t
                      , {message: r} = (0,
                    s.Z7)("MISSING_OR_INVALID", "Decoded payload on topic ".concat(e, " is not identifiable as a JSON-RPC request or a response."));
                    throw new Error(r)
                }
                ,
                this.onSessionProposeRequest = async(t,e)=>{
                    const {params: r, id: n} = e;
                    try {
                        this.isValidConnect(xi({}, e.params));
                        const i = (0,
                        s.gn)(nt.FIVE_MINUTES)
                          , o = xi({
                            id: n,
                            pairingTopic: t,
                            expiry: i
                        }, r);
                        await this.setProposal(n, o);
                        const a = (0,
                        s.rj)(JSON.stringify(e))
                          , c = await this.getVerifyContext(a, o.proposer.metadata);
                        this.client.events.emit("session_proposal", {
                            id: n,
                            params: o,
                            verifyContext: c
                        })
                    } catch (K) {
                        await this.sendError(n, t, K),
                        this.client.logger.error(K)
                    }
                }
                ,
                this.onSessionProposeResponse = async(t,e)=>{
                    const {id: r} = e;
                    if (Gt(e)) {
                        const {result: n} = e;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            result: n
                        });
                        const i = this.client.proposal.get(r);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            proposal: i
                        });
                        const s = i.proposer.publicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            selfPublicKey: s
                        });
                        const o = n.responderPublicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            peerPublicKey: o
                        });
                        const a = await this.client.core.crypto.generateSharedKey(s, o);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            sessionTopic: a
                        });
                        const c = await this.client.core.relayer.subscribe(a);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            subscriptionId: c
                        }),
                        await this.client.core.pairing.activate({
                            topic: t
                        })
                    } else
                        Zt(e) && (await this.client.proposal.delete(r, (0,
                        s.D6)("USER_DISCONNECTED")),
                        this.events.emit((0,
                        s.E0)("session_connect"), {
                            error: e.error
                        }))
                }
                ,
                this.onSessionSettleRequest = async(t,e)=>{
                    const {id: r, params: n} = e;
                    try {
                        this.isValidSessionSettleRequest(n);
                        const {relay: r, controller: i, expiry: o, namespaces: a, requiredNamespaces: c, optionalNamespaces: u, sessionProperties: h, pairingTopic: l} = e.params
                          , p = xi({
                            topic: t,
                            relay: r,
                            expiry: o,
                            namespaces: a,
                            acknowledged: !0,
                            pairingTopic: l,
                            requiredNamespaces: c,
                            optionalNamespaces: u,
                            controller: i.publicKey,
                            self: {
                                publicKey: "",
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: i.publicKey,
                                metadata: i.metadata
                            }
                        }, h && {
                            sessionProperties: h
                        });
                        await this.sendResult({
                            id: e.id,
                            topic: t,
                            result: !0
                        }),
                        this.events.emit((0,
                        s.E0)("session_connect"), {
                            session: p
                        }),
                        this.cleanupDuplicatePairings(p)
                    } catch (K) {
                        await this.sendError(r, t, K),
                        this.client.logger.error(K)
                    }
                }
                ,
                this.onSessionSettleResponse = async(t,e)=>{
                    const {id: r} = e;
                    Gt(e) ? (await this.client.session.update(t, {
                        acknowledged: !0
                    }),
                    this.events.emit((0,
                    s.E0)("session_approve", r), {})) : Zt(e) && (await this.client.session.delete(t, (0,
                    s.D6)("USER_DISCONNECTED")),
                    this.events.emit((0,
                    s.E0)("session_approve", r), {
                        error: e.error
                    }))
                }
                ,
                this.onSessionUpdateRequest = async(t,e)=>{
                    const {params: r, id: n} = e;
                    try {
                        const e = "".concat(t, "_session_update")
                          , i = s.O6.get(e);
                        if (i && this.isRequestOutOfSync(i, n))
                            return void this.client.logger.info("Discarding out of sync request - ".concat(n));
                        this.isValidUpdate(xi({
                            topic: t
                        }, r)),
                        await this.client.session.update(t, {
                            namespaces: r.namespaces
                        }),
                        await this.sendResult({
                            id: n,
                            topic: t,
                            result: !0
                        }),
                        this.client.events.emit("session_update", {
                            id: n,
                            topic: t,
                            params: r
                        }),
                        s.O6.set(e, n)
                    } catch (K) {
                        await this.sendError(n, t, K),
                        this.client.logger.error(K)
                    }
                }
                ,
                this.isRequestOutOfSync = (t,e)=>parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)),
                this.onSessionUpdateResponse = (t,e)=>{
                    const {id: r} = e;
                    Gt(e) ? this.events.emit((0,
                    s.E0)("session_update", r), {}) : Zt(e) && this.events.emit((0,
                    s.E0)("session_update", r), {
                        error: e.error
                    })
                }
                ,
                this.onSessionExtendRequest = async(t,e)=>{
                    const {id: r} = e;
                    try {
                        this.isValidExtend({
                            topic: t
                        }),
                        await this.setExpiry(t, (0,
                        s.gn)(di)),
                        await this.sendResult({
                            id: r,
                            topic: t,
                            result: !0
                        }),
                        this.client.events.emit("session_extend", {
                            id: r,
                            topic: t
                        })
                    } catch (n) {
                        await this.sendError(r, t, n),
                        this.client.logger.error(n)
                    }
                }
                ,
                this.onSessionExtendResponse = (t,e)=>{
                    const {id: r} = e;
                    Gt(e) ? this.events.emit((0,
                    s.E0)("session_extend", r), {}) : Zt(e) && this.events.emit((0,
                    s.E0)("session_extend", r), {
                        error: e.error
                    })
                }
                ,
                this.onSessionPingRequest = async(t,e)=>{
                    const {id: r} = e;
                    try {
                        this.isValidPing({
                            topic: t
                        }),
                        await this.sendResult({
                            id: r,
                            topic: t,
                            result: !0
                        }),
                        this.client.events.emit("session_ping", {
                            id: r,
                            topic: t
                        })
                    } catch (n) {
                        await this.sendError(r, t, n),
                        this.client.logger.error(n)
                    }
                }
                ,
                this.onSessionPingResponse = (t,e)=>{
                    const {id: r} = e;
                    setTimeout((()=>{
                        Gt(e) ? this.events.emit((0,
                        s.E0)("session_ping", r), {}) : Zt(e) && this.events.emit((0,
                        s.E0)("session_ping", r), {
                            error: e.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onSessionDeleteRequest = async(t,e)=>{
                    const {id: r} = e;
                    try {
                        this.isValidDisconnect({
                            topic: t,
                            reason: e.params
                        }),
                        await Promise.all([new Promise((e=>{
                            this.client.core.relayer.once(Wr, (async()=>{
                                e(await this.deleteSession(t))
                            }
                            ))
                        }
                        )), this.sendResult({
                            id: r,
                            topic: t,
                            result: !0
                        })]),
                        this.client.events.emit("session_delete", {
                            id: r,
                            topic: t
                        })
                    } catch (n) {
                        this.client.logger.error(n)
                    }
                }
                ,
                this.onSessionRequest = async(t,e)=>{
                    const {id: r, params: n} = e;
                    try {
                        this.isValidRequest(xi({
                            topic: t
                        }, n));
                        const e = (0,
                        s.rj)(JSON.stringify(Lt("wc_sessionRequest", n, r)))
                          , i = this.client.session.get(t)
                          , o = {
                            id: r,
                            topic: t,
                            params: n,
                            verifyContext: await this.getVerifyContext(e, i.peer.metadata)
                        };
                        await this.setPendingSessionRequest(o),
                        this.addSessionRequestToSessionRequestQueue(o),
                        this.processSessionRequestQueue()
                    } catch (K) {
                        await this.sendError(r, t, K),
                        this.client.logger.error(K)
                    }
                }
                ,
                this.onSessionRequestResponse = (t,e)=>{
                    const {id: r} = e;
                    Gt(e) ? this.events.emit((0,
                    s.E0)("session_request", r), {
                        result: e.result
                    }) : Zt(e) && this.events.emit((0,
                    s.E0)("session_request", r), {
                        error: e.error
                    })
                }
                ,
                this.onSessionEventRequest = async(t,e)=>{
                    const {id: r, params: n} = e;
                    try {
                        const e = "".concat(t, "_session_event_").concat(n.event.name)
                          , i = s.O6.get(e);
                        if (i && this.isRequestOutOfSync(i, r))
                            return void this.client.logger.info("Discarding out of sync request - ".concat(r));
                        this.isValidEmit(xi({
                            topic: t
                        }, n)),
                        this.client.events.emit("session_event", {
                            id: r,
                            topic: t,
                            params: n
                        }),
                        s.O6.set(e, r)
                    } catch (K) {
                        await this.sendError(r, t, K),
                        this.client.logger.error(K)
                    }
                }
                ,
                this.addSessionRequestToSessionRequestQueue = t=>{
                    this.sessionRequestQueue.queue.push(t)
                }
                ,
                this.cleanupAfterResponse = t=>{
                    this.deletePendingSessionRequest(t.response.id, {
                        message: "fulfilled",
                        code: 0
                    }),
                    setTimeout((()=>{
                        this.sessionRequestQueue.state = yi,
                        this.processSessionRequestQueue()
                    }
                    ), (0,
                    nt.toMiliseconds)(this.requestQueueDelay))
                }
                ,
                this.processSessionRequestQueue = ()=>{
                    if (this.sessionRequestQueue.state === mi)
                        return void this.client.logger.info("session request queue is already active.");
                    const t = this.sessionRequestQueue.queue[0];
                    if (t)
                        try {
                            this.sessionRequestQueue.state = mi,
                            this.client.events.emit("session_request", t)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    else
                        this.client.logger.info("session request queue is empty.")
                }
                ,
                this.onPairingCreated = t=>{
                    if (t.active)
                        return;
                    const e = this.client.proposal.getAll().find((e=>e.pairingTopic === t.topic));
                    e && this.onSessionProposeRequest(t.topic, Lt("wc_sessionPropose", {
                        requiredNamespaces: e.requiredNamespaces,
                        optionalNamespaces: e.optionalNamespaces,
                        relays: e.relays,
                        proposer: e.proposer,
                        sessionProperties: e.sessionProperties
                    }, e.id))
                }
                ,
                this.isValidConnect = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "connect() params: ".concat(JSON.stringify(t)));
                        throw new Error(e)
                    }
                    const {pairingTopic: e, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: i, relays: o} = t;
                    if ((0,
                    s.o8)(e) || await this.isValidPairingTopic(e),
                    !(0,
                    s.PM)(o, !0)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "connect() relays: ".concat(o));
                        throw new Error(t)
                    }
                    !(0,
                    s.o8)(r) && 0 !== (0,
                    s.L5)(r) && this.validateNamespaces(r, "requiredNamespaces"),
                    !(0,
                    s.o8)(n) && 0 !== (0,
                    s.L5)(n) && this.validateNamespaces(n, "optionalNamespaces"),
                    (0,
                    s.o8)(i) || this.validateSessionProps(i, "sessionProperties")
                }
                ,
                this.validateNamespaces = (t,e)=>{
                    const r = (0,
                    s.n)(t, "connect()", e);
                    if (r)
                        throw new Error(r.message)
                }
                ,
                this.isValidApprove = async t=>{
                    if (!(0,
                    s.EJ)(t))
                        throw new Error((0,
                        s.Z7)("MISSING_OR_INVALID", "approve() params: ".concat(t)).message);
                    const {id: e, namespaces: r, relayProtocol: n, sessionProperties: i} = t;
                    await this.isValidProposalId(e);
                    const o = this.client.proposal.get(e)
                      , a = (0,
                    s.in)(r, "approve()");
                    if (a)
                        throw new Error(a.message);
                    const c = (0,
                    s.rF)(o.requiredNamespaces, r, "approve()");
                    if (c)
                        throw new Error(c.message);
                    if (!(0,
                    s.M_)(n, !0)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "approve() relayProtocol: ".concat(n));
                        throw new Error(t)
                    }
                    (0,
                    s.o8)(i) || this.validateSessionProps(i, "sessionProperties")
                }
                ,
                this.isValidReject = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "reject() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {id: e, reason: r} = t;
                    if (await this.isValidProposalId(e),
                    !(0,
                    s.$t)(r)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "reject() reason: ".concat(JSON.stringify(r)));
                        throw new Error(t)
                    }
                }
                ,
                this.isValidSessionSettleRequest = t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {relay: e, controller: r, namespaces: n, expiry: i} = t;
                    if (!(0,
                    s.Z2)(e)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                        throw new Error(t)
                    }
                    const o = (0,
                    s.Dd)(r, "onSessionSettleRequest()");
                    if (o)
                        throw new Error(o.message);
                    const a = (0,
                    s.in)(n, "onSessionSettleRequest()");
                    if (a)
                        throw new Error(a.message);
                    if ((0,
                    s.Bw)(i)) {
                        const {message: t} = (0,
                        s.Z7)("EXPIRED", "onSessionSettleRequest()");
                        throw new Error(t)
                    }
                }
                ,
                this.isValidUpdate = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "update() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e, namespaces: r} = t;
                    await this.isValidSessionTopic(e);
                    const n = this.client.session.get(e)
                      , i = (0,
                    s.in)(r, "update()");
                    if (i)
                        throw new Error(i.message);
                    const o = (0,
                    s.rF)(n.requiredNamespaces, r, "update()");
                    if (o)
                        throw new Error(o.message)
                }
                ,
                this.isValidExtend = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "extend() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e} = t;
                    await this.isValidSessionTopic(e)
                }
                ,
                this.isValidRequest = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "request() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e, request: r, chainId: n, expiry: i} = t;
                    await this.isValidSessionTopic(e);
                    const {namespaces: o} = this.client.session.get(e);
                    if (!(0,
                    s.p8)(o, n)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "request() chainId: ".concat(n));
                        throw new Error(t)
                    }
                    if (!(0,
                    s.hH)(r)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "request() ".concat(JSON.stringify(r)));
                        throw new Error(t)
                    }
                    if (!(0,
                    s.al)(o, n, r.method)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "request() method: ".concat(r.method));
                        throw new Error(t)
                    }
                    if (i && !(0,
                    s.ON)(i, vi)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "request() expiry: ".concat(i, ". Expiry must be a number (in seconds) between ").concat(vi.min, " and ").concat(vi.max));
                        throw new Error(t)
                    }
                }
                ,
                this.isValidRespond = async t=>{
                    var e;
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "respond() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: r, response: n} = t;
                    try {
                        await this.isValidSessionTopic(r)
                    } catch (K) {
                        throw null != (e = null === t || void 0 === t ? void 0 : t.response) && e.id && this.cleanupAfterResponse(t),
                        K
                    }
                    if (!(0,
                    s.JT)(n)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "respond() response: ".concat(JSON.stringify(n)));
                        throw new Error(t)
                    }
                }
                ,
                this.isValidPing = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "ping() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e} = t;
                    await this.isValidSessionOrPairingTopic(e)
                }
                ,
                this.isValidEmit = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "emit() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e, event: r, chainId: n} = t;
                    await this.isValidSessionTopic(e);
                    const {namespaces: i} = this.client.session.get(e);
                    if (!(0,
                    s.p8)(i, n)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "emit() chainId: ".concat(n));
                        throw new Error(t)
                    }
                    if (!(0,
                    s.nf)(r)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(r)));
                        throw new Error(t)
                    }
                    if (!(0,
                    s.sI)(i, n, r.name)) {
                        const {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(r)));
                        throw new Error(t)
                    }
                }
                ,
                this.isValidDisconnect = async t=>{
                    if (!(0,
                    s.EJ)(t)) {
                        const {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "disconnect() params: ".concat(t));
                        throw new Error(e)
                    }
                    const {topic: e} = t;
                    await this.isValidSessionOrPairingTopic(e)
                }
                ,
                this.getVerifyContext = async(t,e)=>{
                    const r = {
                        verified: {
                            verifyUrl: e.verifyUrl || mn,
                            validation: "UNKNOWN",
                            origin: e.url || ""
                        }
                    };
                    try {
                        const n = await this.client.core.verify.resolve({
                            attestationId: t,
                            verifyUrl: e.verifyUrl
                        });
                        n && (r.verified.origin = n.origin,
                        r.verified.isScam = n.isScam,
                        r.verified.validation = n.origin === new URL(e.url).origin ? "VALID" : "INVALID")
                    } catch (n) {
                        this.client.logger.info(n)
                    }
                    return this.client.logger.info("Verify context: ".concat(JSON.stringify(r))),
                    r
                }
                ,
                this.validateSessionProps = (t,e)=>{
                    Object.values(t).forEach((t=>{
                        if (!(0,
                        s.M_)(t, !1)) {
                            const {message: r} = (0,
                            s.Z7)("MISSING_OR_INVALID", "".concat(e, " must be in Record<string, string> format. Received: ").concat(JSON.stringify(t)));
                            throw new Error(r)
                        }
                    }
                    ))
                }
            }
            async isInitialized() {
                if (!this.initialized) {
                    const {message: t} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw new Error(t)
                }
                await this.client.core.relayer.confirmOnlineStateOrThrow()
            }
            registerRelayerEvents() {
                this.client.core.relayer.on(Ur, (async t=>{
                    const {topic: e, message: r} = t;
                    if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r)))
                        return;
                    const n = await this.client.core.crypto.decode(e, r);
                    try {
                        Ft(n) ? (this.client.core.history.set(e, n),
                        this.onRelayEventRequest({
                            topic: e,
                            payload: n
                        })) : Wt(n) ? (await this.client.core.history.resolve(n),
                        await this.onRelayEventResponse({
                            topic: e,
                            payload: n
                        }),
                        this.client.core.history.delete(e, n.id)) : this.onRelayEventUnknownPayload({
                            topic: e,
                            payload: n
                        })
                    } catch (i) {
                        this.client.logger.error(i)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.client.core.expirer.on(gn, (async t=>{
                    const {topic: e, id: r} = (0,
                    s.iP)(t.target);
                    if (r && this.client.pendingRequest.keys.includes(r))
                        return await this.deletePendingSessionRequest(r, (0,
                        s.Z7)("EXPIRED"), !0);
                    e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0),
                    this.client.events.emit("session_expire", {
                        topic: e
                    })) : r && (await this.deleteProposal(r, !0),
                    this.client.events.emit("proposal_expire", {
                        id: r
                    }))
                }
                ))
            }
            registerPairingEvents() {
                this.client.core.pairing.events.on(sn, (t=>this.onPairingCreated(t)))
            }
            isValidPairingTopic(t) {
                if (!(0,
                s.M_)(t, !1)) {
                    const {message: e} = (0,
                    s.Z7)("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(t));
                    throw new Error(e)
                }
                if (!this.client.core.pairing.pairings.keys.includes(t)) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(t));
                    throw new Error(e)
                }
                if ((0,
                s.Bw)(this.client.core.pairing.pairings.get(t).expiry)) {
                    const {message: e} = (0,
                    s.Z7)("EXPIRED", "pairing topic: ".concat(t));
                    throw new Error(e)
                }
            }
            async isValidSessionTopic(t) {
                if (!(0,
                s.M_)(t, !1)) {
                    const {message: e} = (0,
                    s.Z7)("MISSING_OR_INVALID", "session topic should be a string: ".concat(t));
                    throw new Error(e)
                }
                if (!this.client.session.keys.includes(t)) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "session topic doesn't exist: ".concat(t));
                    throw new Error(e)
                }
                if ((0,
                s.Bw)(this.client.session.get(t).expiry)) {
                    await this.deleteSession(t);
                    const {message: e} = (0,
                    s.Z7)("EXPIRED", "session topic: ".concat(t));
                    throw new Error(e)
                }
            }
            async isValidSessionOrPairingTopic(t) {
                if (this.client.session.keys.includes(t))
                    await this.isValidSessionTopic(t);
                else {
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        if ((0,
                        s.M_)(t, !1)) {
                            const {message: e} = (0,
                            s.Z7)("NO_MATCHING_KEY", "session or pairing topic doesn't exist: ".concat(t));
                            throw new Error(e)
                        }
                        {
                            const {message: e} = (0,
                            s.Z7)("MISSING_OR_INVALID", "session or pairing topic should be a string: ".concat(t));
                            throw new Error(e)
                        }
                    }
                    this.isValidPairingTopic(t)
                }
            }
            async isValidProposalId(t) {
                if (!(0,
                s.Q0)(t)) {
                    const {message: e} = (0,
                    s.Z7)("MISSING_OR_INVALID", "proposal id should be a number: ".concat(t));
                    throw new Error(e)
                }
                if (!this.client.proposal.keys.includes(t)) {
                    const {message: e} = (0,
                    s.Z7)("NO_MATCHING_KEY", "proposal id doesn't exist: ".concat(t));
                    throw new Error(e)
                }
                if ((0,
                s.Bw)(this.client.proposal.get(t).expiry)) {
                    await this.deleteProposal(t);
                    const {message: e} = (0,
                    s.Z7)("EXPIRED", "proposal id: ".concat(t));
                    throw new Error(e)
                }
            }
        }
        class Ai extends Zn {
            constructor(t, e) {
                super(t, e, "proposal", ui),
                this.core = t,
                this.logger = e
            }
        }
        class ji extends Zn {
            constructor(t, e) {
                super(t, e, "session", ui),
                this.core = t,
                this.logger = e
            }
        }
        class Ti extends Zn {
            constructor(t, e) {
                super(t, e, "request", ui, (t=>t.id)),
                this.core = t,
                this.logger = e
            }
        }
        class Ni extends X {
            constructor(t) {
                super(t),
                this.protocol = "wc",
                this.version = 2,
                this.name = hi,
                this.events = new n.EventEmitter,
                this.on = (t,e)=>this.events.on(t, e),
                this.once = (t,e)=>this.events.once(t, e),
                this.off = (t,e)=>this.events.off(t, e),
                this.removeListener = (t,e)=>this.events.removeListener(t, e),
                this.removeAllListeners = t=>this.events.removeAllListeners(t),
                this.connect = async t=>{
                    try {
                        return await this.engine.connect(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.pair = async t=>{
                    try {
                        return await this.engine.pair(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.approve = async t=>{
                    try {
                        return await this.engine.approve(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.reject = async t=>{
                    try {
                        return await this.engine.reject(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.update = async t=>{
                    try {
                        return await this.engine.update(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.extend = async t=>{
                    try {
                        return await this.engine.extend(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.request = async t=>{
                    try {
                        return await this.engine.request(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.respond = async t=>{
                    try {
                        return await this.engine.respond(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.ping = async t=>{
                    try {
                        return await this.engine.ping(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.emit = async t=>{
                    try {
                        return await this.engine.emit(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.disconnect = async t=>{
                    try {
                        return await this.engine.disconnect(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.find = t=>{
                    try {
                        return this.engine.find(t)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.getPendingSessionRequests = ()=>{
                    try {
                        return this.engine.getPendingSessionRequests()
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.name = (null === t || void 0 === t ? void 0 : t.name) || hi,
                this.metadata = (null === t || void 0 === t ? void 0 : t.metadata) || (0,
                s.D)();
                const e = typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof (null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0,
                H.pino)((0,
                H.getDefaultLoggerOptions)({
                    level: (null === t || void 0 === t ? void 0 : t.logger) || li
                }));
                this.core = (null === t || void 0 === t ? void 0 : t.core) || new ai(t),
                this.logger = (0,
                H.generateChildLogger)(e, this.name),
                this.session = new ji(this.core,this.logger),
                this.proposal = new Ai(this.core,this.logger),
                this.pendingRequest = new Ti(this.core,this.logger),
                this.engine = new Ci(this)
            }
            static async init(t) {
                const e = new Ni(t);
                return await e.initialize(),
                e
            }
            get context() {
                return (0,
                H.getLoggerContext)(this.logger)
            }
            get pairing() {
                return this.core.pairing.pairings
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.core.start(),
                    await this.session.init(),
                    await this.proposal.init(),
                    await this.pendingRequest.init(),
                    await this.engine.init(),
                    this.core.verify.init({
                        verifyUrl: this.metadata.verifyUrl
                    }),
                    this.logger.info("SignClient Initialization Success")
                } catch (t) {
                    throw this.logger.info("SignClient Initialization Failure"),
                    this.logger.error(t.message),
                    t
                }
            }
        }
        var Li = r(7395)
          , Di = r.n(Li);
        const qi = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        };
        class Mi {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.url = t,
                this.disableProviderPing = e,
                this.events = new n.EventEmitter,
                this.isAvailable = !1,
                this.registering = !1,
                !Vt(t))
                    throw new Error("Provided URL is not compatible with HTTP connection: ".concat(t));
                this.url = t,
                this.disableProviderPing = e
            }
            get connected() {
                return this.isAvailable
            }
            get connecting() {
                return this.registering
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            async open() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                await this.register(t)
            }
            async close() {
                if (!this.isAvailable)
                    throw new Error("Connection already closed");
                this.onClose()
            }
            async send(t, e) {
                this.isAvailable || await this.register();
                try {
                    const e = j(t)
                      , r = await Di()(this.url, Object.assign(Object.assign({}, qi), {
                        body: e
                    }))
                      , n = await r.json();
                    this.onPayload({
                        data: n
                    })
                } catch (r) {
                    this.onError(t.id, r)
                }
            }
            async register() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                if (!Vt(t))
                    throw new Error("Provided URL is not compatible with HTTP connection: ".concat(t));
                if (this.registering) {
                    const t = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
                    new Promise(((t,e)=>{
                        this.events.once("register_error", (t=>{
                            this.resetMaxListeners(),
                            e(t)
                        }
                        )),
                        this.events.once("open", (()=>{
                            if (this.resetMaxListeners(),
                            "undefined" === typeof this.isAvailable)
                                return e(new Error("HTTP connection is missing or invalid"));
                            t()
                        }
                        ))
                    }
                    ))
                }
                this.url = t,
                this.registering = !0;
                try {
                    if (!this.disableProviderPing) {
                        const e = j({
                            id: 1,
                            jsonrpc: "2.0",
                            method: "test",
                            params: []
                        });
                        await Di()(t, Object.assign(Object.assign({}, qi), {
                            body: e
                        }))
                    }
                    this.onOpen()
                } catch (e) {
                    const t = this.parseError(e);
                    throw this.events.emit("register_error", t),
                    this.onClose(),
                    t
                }
            }
            onOpen() {
                this.isAvailable = !0,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose() {
                this.isAvailable = !1,
                this.registering = !1,
                this.events.emit("close")
            }
            onPayload(t) {
                if ("undefined" === typeof t.data)
                    return;
                const e = "string" === typeof t.data ? A(t.data) : t.data;
                this.events.emit("payload", e)
            }
            onError(t, e) {
                const r = this.parseError(e)
                  , n = qt(t, r.message || r.toString());
                this.events.emit("payload", n)
            }
            parseError(t) {
                return At(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url, "HTTP")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
        }
        const zi = Mi
          , ki = "error"
          , Ui = "".concat("wc", "@2:").concat("universal_provider", ":")
          , Hi = "default_chain_changed";
        var Vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {}
          , Ki = {
            exports: {}
        };
        !function(t, e) {
            (function() {
                var r, n = "Expected a function", i = "__lodash_hash_undefined__", s = "__lodash_placeholder__", o = 16, a = 32, c = 64, u = 128, h = 256, l = 1 / 0, p = 9007199254740991, f = NaN, d = 4294967295, g = [["ary", u], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", o], ["flip", 512], ["partial", a], ["partialRight", c], ["rearg", h]], v = "[object Arguments]", y = "[object Array]", m = "[object Boolean]", w = "[object Date]", _ = "[object Error]", b = "[object Function]", E = "[object GeneratorFunction]", I = "[object Map]", P = "[object Number]", S = "[object Object]", O = "[object Promise]", x = "[object RegExp]", R = "[object Set]", C = "[object String]", A = "[object Symbol]", j = "[object WeakMap]", T = "[object ArrayBuffer]", N = "[object DataView]", L = "[object Float32Array]", D = "[object Float64Array]", q = "[object Int8Array]", M = "[object Int16Array]", z = "[object Int32Array]", k = "[object Uint8Array]", U = "[object Uint8ClampedArray]", H = "[object Uint16Array]", V = "[object Uint32Array]", K = /\b__p \+= '';/g, B = /\b(__p \+=) '' \+/g, F = /(__e\(.*?\)|\b__t\)) \+\n'';/g, W = /&(?:amp|lt|gt|quot|#39);/g, G = /[&<>"']/g, Z = RegExp(W.source), J = RegExp(G.source), Q = /<%-([\s\S]+?)%>/g, Y = /<%([\s\S]+?)%>/g, $ = /<%=([\s\S]+?)%>/g, X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rt = /[\\^$.*+?()[\]{}|]/g, nt = RegExp(rt.source), it = /^\s+/, st = /\s/, ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, at = /\{\n\/\* \[wrapped with (.+)\] \*/, ct = /,? & /, ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ht = /[()=,{}\[\]\/\s]/, lt = /\\(\\)?/g, pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ft = /\w*$/, dt = /^[-+]0x[0-9a-f]+$/i, gt = /^0b[01]+$/i, vt = /^\[object .+?Constructor\]$/, yt = /^0o[0-7]+$/i, mt = /^(?:0|[1-9]\d*)$/, wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _t = /($^)/, bt = /['\n\r\u2028\u2029\\]/g, Et = "\\ud800-\\udfff", It = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Pt = "\\u2700-\\u27bf", St = "a-z\\xdf-\\xf6\\xf8-\\xff", Ot = "A-Z\\xc0-\\xd6\\xd8-\\xde", xt = "\\ufe0e\\ufe0f", Rt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ct = "['\u2019]", At = "[" + Et + "]", jt = "[" + Rt + "]", Tt = "[" + It + "]", Nt = "\\d+", Lt = "[" + Pt + "]", Dt = "[" + St + "]", qt = "[^" + Et + Rt + Nt + Pt + St + Ot + "]", Mt = "\\ud83c[\\udffb-\\udfff]", zt = "[^" + Et + "]", kt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ut = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ht = "[" + Ot + "]", Vt = "\\u200d", Kt = "(?:" + Dt + "|" + qt + ")", Bt = "(?:" + Ht + "|" + qt + ")", Ft = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", Wt = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", Gt = "(?:" + Tt + "|" + Mt + ")" + "?", Zt = "[" + xt + "]?", Jt = Zt + Gt + ("(?:" + Vt + "(?:" + [zt, kt, Ut].join("|") + ")" + Zt + Gt + ")*"), Qt = "(?:" + [Lt, kt, Ut].join("|") + ")" + Jt, Yt = "(?:" + [zt + Tt + "?", Tt, kt, Ut, At].join("|") + ")", $t = RegExp(Ct, "g"), Xt = RegExp(Tt, "g"), te = RegExp(Mt + "(?=" + Mt + ")|" + Yt + Jt, "g"), ee = RegExp([Ht + "?" + Dt + "+" + Ft + "(?=" + [jt, Ht, "$"].join("|") + ")", Bt + "+" + Wt + "(?=" + [jt, Ht + Kt, "$"].join("|") + ")", Ht + "?" + Kt + "+" + Ft, Ht + "+" + Wt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Nt, Qt].join("|"), "g"), re = RegExp("[" + Vt + Et + It + xt + "]"), ne = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ie = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], se = -1, oe = {};
                oe[L] = oe[D] = oe[q] = oe[M] = oe[z] = oe[k] = oe[U] = oe[H] = oe[V] = !0,
                oe[v] = oe[y] = oe[T] = oe[m] = oe[N] = oe[w] = oe[_] = oe[b] = oe[I] = oe[P] = oe[S] = oe[x] = oe[R] = oe[C] = oe[j] = !1;
                var ae = {};
                ae[v] = ae[y] = ae[T] = ae[N] = ae[m] = ae[w] = ae[L] = ae[D] = ae[q] = ae[M] = ae[z] = ae[I] = ae[P] = ae[S] = ae[x] = ae[R] = ae[C] = ae[A] = ae[k] = ae[U] = ae[H] = ae[V] = !0,
                ae[_] = ae[b] = ae[j] = !1;
                var ce = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , ue = parseFloat
                  , he = parseInt
                  , le = "object" == typeof Vi && Vi && Vi.Object === Object && Vi
                  , pe = "object" == typeof self && self && self.Object === Object && self
                  , fe = le || pe || Function("return this")()
                  , de = e && !e.nodeType && e
                  , ge = de && t && !t.nodeType && t
                  , ve = ge && ge.exports === de
                  , ye = ve && le.process
                  , me = function() {
                    try {
                        return ge && ge.require && ge.require("util").types || ye && ye.binding && ye.binding("util")
                    } catch {}
                }()
                  , we = me && me.isArrayBuffer
                  , _e = me && me.isDate
                  , be = me && me.isMap
                  , Ee = me && me.isRegExp
                  , Ie = me && me.isSet
                  , Pe = me && me.isTypedArray;
                function Se(t, e, r) {
                    switch (r.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, r[0]);
                    case 2:
                        return t.call(e, r[0], r[1]);
                    case 3:
                        return t.call(e, r[0], r[1], r[2])
                    }
                    return t.apply(e, r)
                }
                function Oe(t, e, r, n) {
                    for (var i = -1, s = null == t ? 0 : t.length; ++i < s; ) {
                        var o = t[i];
                        e(n, o, r(o), t)
                    }
                    return n
                }
                function xe(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); )
                        ;
                    return t
                }
                function Re(t, e) {
                    for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t); )
                        ;
                    return t
                }
                function Ce(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
                        if (!e(t[r], r, t))
                            return !1;
                    return !0
                }
                function Ae(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, i = 0, s = []; ++r < n; ) {
                        var o = t[r];
                        e(o, r, t) && (s[i++] = o)
                    }
                    return s
                }
                function je(t, e) {
                    return !!(null == t ? 0 : t.length) && He(t, e, 0) > -1
                }
                function Te(t, e, r) {
                    for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
                        if (r(e, t[n]))
                            return !0;
                    return !1
                }
                function Ne(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; )
                        i[r] = e(t[r], r, t);
                    return i
                }
                function Le(t, e) {
                    for (var r = -1, n = e.length, i = t.length; ++r < n; )
                        t[i + r] = e[r];
                    return t
                }
                function De(t, e, r, n) {
                    var i = -1
                      , s = null == t ? 0 : t.length;
                    for (n && s && (r = t[++i]); ++i < s; )
                        r = e(r, t[i], i, t);
                    return r
                }
                function qe(t, e, r, n) {
                    var i = null == t ? 0 : t.length;
                    for (n && i && (r = t[--i]); i--; )
                        r = e(r, t[i], i, t);
                    return r
                }
                function Me(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
                        if (e(t[r], r, t))
                            return !0;
                    return !1
                }
                var ze = Fe("length");
                function ke(t, e, r) {
                    var n;
                    return r(t, (function(t, r, i) {
                        if (e(t, r, i))
                            return n = r,
                            !1
                    }
                    )),
                    n
                }
                function Ue(t, e, r, n) {
                    for (var i = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
                        if (e(t[s], s, t))
                            return s;
                    return -1
                }
                function He(t, e, r) {
                    return e === e ? function(t, e, r) {
                        for (var n = r - 1, i = t.length; ++n < i; )
                            if (t[n] === e)
                                return n;
                        return -1
                    }(t, e, r) : Ue(t, Ke, r)
                }
                function Ve(t, e, r, n) {
                    for (var i = r - 1, s = t.length; ++i < s; )
                        if (n(t[i], e))
                            return i;
                    return -1
                }
                function Ke(t) {
                    return t !== t
                }
                function Be(t, e) {
                    var r = null == t ? 0 : t.length;
                    return r ? Ze(t, e) / r : f
                }
                function Fe(t) {
                    return function(e) {
                        return null == e ? r : e[t]
                    }
                }
                function We(t) {
                    return function(e) {
                        return null == t ? r : t[e]
                    }
                }
                function Ge(t, e, r, n, i) {
                    return i(t, (function(t, i, s) {
                        r = n ? (n = !1,
                        t) : e(r, t, i, s)
                    }
                    )),
                    r
                }
                function Ze(t, e) {
                    for (var n, i = -1, s = t.length; ++i < s; ) {
                        var o = e(t[i]);
                        o !== r && (n = n === r ? o : n + o)
                    }
                    return n
                }
                function Je(t, e) {
                    for (var r = -1, n = Array(t); ++r < t; )
                        n[r] = e(r);
                    return n
                }
                function Qe(t) {
                    return t && t.slice(0, pr(t) + 1).replace(it, "")
                }
                function Ye(t) {
                    return function(e) {
                        return t(e)
                    }
                }
                function $e(t, e) {
                    return Ne(e, (function(e) {
                        return t[e]
                    }
                    ))
                }
                function Xe(t, e) {
                    return t.has(e)
                }
                function tr(t, e) {
                    for (var r = -1, n = t.length; ++r < n && He(e, t[r], 0) > -1; )
                        ;
                    return r
                }
                function er(t, e) {
                    for (var r = t.length; r-- && He(e, t[r], 0) > -1; )
                        ;
                    return r
                }
                var rr = We({
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\xc3": "A",
                    "\xc4": "A",
                    "\xc5": "A",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\xe3": "a",
                    "\xe4": "a",
                    "\xe5": "a",
                    "\xc7": "C",
                    "\xe7": "c",
                    "\xd0": "D",
                    "\xf0": "d",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\xcb": "E",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\xeb": "e",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\xcf": "I",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\xef": "i",
                    "\xd1": "N",
                    "\xf1": "n",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\xd5": "O",
                    "\xd6": "O",
                    "\xd8": "O",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\xf5": "o",
                    "\xf6": "o",
                    "\xf8": "o",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\xdc": "U",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\xfc": "u",
                    "\xdd": "Y",
                    "\xfd": "y",
                    "\xff": "y",
                    "\xc6": "Ae",
                    "\xe6": "ae",
                    "\xde": "Th",
                    "\xfe": "th",
                    "\xdf": "ss",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u0104": "A",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u0105": "a",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\u010e": "D",
                    "\u0110": "D",
                    "\u010f": "d",
                    "\u0111": "d",
                    "\u0112": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\u0118": "E",
                    "\u011a": "E",
                    "\u0113": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\u0119": "e",
                    "\u011b": "e",
                    "\u011c": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u0122": "G",
                    "\u011d": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u0123": "g",
                    "\u0124": "H",
                    "\u0126": "H",
                    "\u0125": "h",
                    "\u0127": "h",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u012e": "I",
                    "\u0130": "I",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\u012f": "i",
                    "\u0131": "i",
                    "\u0134": "J",
                    "\u0135": "j",
                    "\u0136": "K",
                    "\u0137": "k",
                    "\u0138": "k",
                    "\u0139": "L",
                    "\u013b": "L",
                    "\u013d": "L",
                    "\u013f": "L",
                    "\u0141": "L",
                    "\u013a": "l",
                    "\u013c": "l",
                    "\u013e": "l",
                    "\u0140": "l",
                    "\u0142": "l",
                    "\u0143": "N",
                    "\u0145": "N",
                    "\u0147": "N",
                    "\u014a": "N",
                    "\u0144": "n",
                    "\u0146": "n",
                    "\u0148": "n",
                    "\u014b": "n",
                    "\u014c": "O",
                    "\u014e": "O",
                    "\u0150": "O",
                    "\u014d": "o",
                    "\u014f": "o",
                    "\u0151": "o",
                    "\u0154": "R",
                    "\u0156": "R",
                    "\u0158": "R",
                    "\u0155": "r",
                    "\u0157": "r",
                    "\u0159": "r",
                    "\u015a": "S",
                    "\u015c": "S",
                    "\u015e": "S",
                    "\u0160": "S",
                    "\u015b": "s",
                    "\u015d": "s",
                    "\u015f": "s",
                    "\u0161": "s",
                    "\u0162": "T",
                    "\u0164": "T",
                    "\u0166": "T",
                    "\u0163": "t",
                    "\u0165": "t",
                    "\u0167": "t",
                    "\u0168": "U",
                    "\u016a": "U",
                    "\u016c": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u0172": "U",
                    "\u0169": "u",
                    "\u016b": "u",
                    "\u016d": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u0173": "u",
                    "\u0174": "W",
                    "\u0175": "w",
                    "\u0176": "Y",
                    "\u0177": "y",
                    "\u0178": "Y",
                    "\u0179": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u017a": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u0132": "IJ",
                    "\u0133": "ij",
                    "\u0152": "Oe",
                    "\u0153": "oe",
                    "\u0149": "'n",
                    "\u017f": "s"
                })
                  , nr = We({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function ir(t) {
                    return "\\" + ce[t]
                }
                function sr(t) {
                    return re.test(t)
                }
                function or(t) {
                    var e = -1
                      , r = Array(t.size);
                    return t.forEach((function(t, n) {
                        r[++e] = [n, t]
                    }
                    )),
                    r
                }
                function ar(t, e) {
                    return function(r) {
                        return t(e(r))
                    }
                }
                function cr(t, e) {
                    for (var r = -1, n = t.length, i = 0, o = []; ++r < n; ) {
                        var a = t[r];
                        (a === e || a === s) && (t[r] = s,
                        o[i++] = r)
                    }
                    return o
                }
                function ur(t) {
                    var e = -1
                      , r = Array(t.size);
                    return t.forEach((function(t) {
                        r[++e] = t
                    }
                    )),
                    r
                }
                function hr(t) {
                    return sr(t) ? function(t) {
                        for (var e = te.lastIndex = 0; te.test(t); )
                            ++e;
                        return e
                    }(t) : ze(t)
                }
                function lr(t) {
                    return sr(t) ? function(t) {
                        return t.match(te) || []
                    }(t) : function(t) {
                        return t.split("")
                    }(t)
                }
                function pr(t) {
                    for (var e = t.length; e-- && st.test(t.charAt(e)); )
                        ;
                    return e
                }
                var fr = We({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                });
                var dr = function t(e) {
                    var st = (e = null == e ? fe : dr.defaults(fe.Object(), e, dr.pick(fe, ie))).Array
                      , Et = e.Date
                      , It = e.Error
                      , Pt = e.Function
                      , St = e.Math
                      , Ot = e.Object
                      , xt = e.RegExp
                      , Rt = e.String
                      , Ct = e.TypeError
                      , At = st.prototype
                      , jt = Pt.prototype
                      , Tt = Ot.prototype
                      , Nt = e["__core-js_shared__"]
                      , Lt = jt.toString
                      , Dt = Tt.hasOwnProperty
                      , qt = 0
                      , Mt = function() {
                        var t = /[^.]+$/.exec(Nt && Nt.keys && Nt.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t : ""
                    }()
                      , zt = Tt.toString
                      , kt = Lt.call(Ot)
                      , Ut = fe._
                      , Ht = xt("^" + Lt.call(Dt).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
                      , Vt = ve ? e.Buffer : r
                      , Kt = e.Symbol
                      , Bt = e.Uint8Array
                      , Ft = Vt ? Vt.allocUnsafe : r
                      , Wt = ar(Ot.getPrototypeOf, Ot)
                      , Gt = Ot.create
                      , Zt = Tt.propertyIsEnumerable
                      , Jt = At.splice
                      , Qt = Kt ? Kt.isConcatSpreadable : r
                      , Yt = Kt ? Kt.iterator : r
                      , te = Kt ? Kt.toStringTag : r
                      , re = function() {
                        try {
                            var t = hs(Ot, "defineProperty");
                            return t({}, "", {}),
                            t
                        } catch {}
                    }()
                      , ce = e.clearTimeout !== fe.clearTimeout && e.clearTimeout
                      , le = Et && Et.now !== fe.Date.now && Et.now
                      , pe = e.setTimeout !== fe.setTimeout && e.setTimeout
                      , de = St.ceil
                      , ge = St.floor
                      , ye = Ot.getOwnPropertySymbols
                      , me = Vt ? Vt.isBuffer : r
                      , ze = e.isFinite
                      , We = At.join
                      , gr = ar(Ot.keys, Ot)
                      , vr = St.max
                      , yr = St.min
                      , mr = Et.now
                      , wr = e.parseInt
                      , _r = St.random
                      , br = At.reverse
                      , Er = hs(e, "DataView")
                      , Ir = hs(e, "Map")
                      , Pr = hs(e, "Promise")
                      , Sr = hs(e, "Set")
                      , Or = hs(e, "WeakMap")
                      , xr = hs(Ot, "create")
                      , Rr = Or && new Or
                      , Cr = {}
                      , Ar = qs(Er)
                      , jr = qs(Ir)
                      , Tr = qs(Pr)
                      , Nr = qs(Sr)
                      , Lr = qs(Or)
                      , Dr = Kt ? Kt.prototype : r
                      , qr = Dr ? Dr.valueOf : r
                      , Mr = Dr ? Dr.toString : r;
                    function zr(t) {
                        if (ta(t) && !Ko(t) && !(t instanceof Vr)) {
                            if (t instanceof Hr)
                                return t;
                            if (Dt.call(t, "__wrapped__"))
                                return Ms(t)
                        }
                        return new Hr(t)
                    }
                    var kr = function() {
                        function t() {}
                        return function(e) {
                            if (!Xo(e))
                                return {};
                            if (Gt)
                                return Gt(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = r,
                            n
                        }
                    }();
                    function Ur() {}
                    function Hr(t, e) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__chain__ = !!e,
                        this.__index__ = 0,
                        this.__values__ = r
                    }
                    function Vr(t) {
                        this.__wrapped__ = t,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = d,
                        this.__views__ = []
                    }
                    function Kr(t) {
                        var e = -1
                          , r = null == t ? 0 : t.length;
                        for (this.clear(); ++e < r; ) {
                            var n = t[e];
                            this.set(n[0], n[1])
                        }
                    }
                    function Br(t) {
                        var e = -1
                          , r = null == t ? 0 : t.length;
                        for (this.clear(); ++e < r; ) {
                            var n = t[e];
                            this.set(n[0], n[1])
                        }
                    }
                    function Fr(t) {
                        var e = -1
                          , r = null == t ? 0 : t.length;
                        for (this.clear(); ++e < r; ) {
                            var n = t[e];
                            this.set(n[0], n[1])
                        }
                    }
                    function Wr(t) {
                        var e = -1
                          , r = null == t ? 0 : t.length;
                        for (this.__data__ = new Fr; ++e < r; )
                            this.add(t[e])
                    }
                    function Gr(t) {
                        var e = this.__data__ = new Br(t);
                        this.size = e.size
                    }
                    function Zr(t, e) {
                        var r = Ko(t)
                          , n = !r && Vo(t)
                          , i = !r && !n && Go(t)
                          , s = !r && !n && !i && ca(t)
                          , o = r || n || i || s
                          , a = o ? Je(t.length, Rt) : []
                          , c = a.length;
                        for (var u in t)
                            (e || Dt.call(t, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ys(u, c))) && a.push(u);
                        return a
                    }
                    function Jr(t) {
                        var e = t.length;
                        return e ? t[Gn(0, e - 1)] : r
                    }
                    function Qr(t, e) {
                        return Ns(Ri(t), on(e, 0, t.length))
                    }
                    function Yr(t) {
                        return Ns(Ri(t))
                    }
                    function $r(t, e, n) {
                        (n !== r && !ko(t[e], n) || n === r && !(e in t)) && nn(t, e, n)
                    }
                    function Xr(t, e, n) {
                        var i = t[e];
                        (!Dt.call(t, e) || !ko(i, n) || n === r && !(e in t)) && nn(t, e, n)
                    }
                    function tn(t, e) {
                        for (var r = t.length; r--; )
                            if (ko(t[r][0], e))
                                return r;
                        return -1
                    }
                    function en(t, e, r, n) {
                        return ln(t, (function(t, i, s) {
                            e(n, t, r(t), s)
                        }
                        )),
                        n
                    }
                    function rn(t, e) {
                        return t && Ci(e, Aa(e), t)
                    }
                    function nn(t, e, r) {
                        "__proto__" == e && re ? re(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: r,
                            writable: !0
                        }) : t[e] = r
                    }
                    function sn(t, e) {
                        for (var n = -1, i = e.length, s = st(i), o = null == t; ++n < i; )
                            s[n] = o ? r : Sa(t, e[n]);
                        return s
                    }
                    function on(t, e, n) {
                        return t === t && (n !== r && (t = t <= n ? t : n),
                        e !== r && (t = t >= e ? t : e)),
                        t
                    }
                    function an(t, e, n, i, s, o) {
                        var a, c = 1 & e, u = 2 & e, h = 4 & e;
                        if (n && (a = s ? n(t, i, s, o) : n(t)),
                        a !== r)
                            return a;
                        if (!Xo(t))
                            return t;
                        var l = Ko(t);
                        if (l) {
                            if (a = function(t) {
                                var e = t.length
                                  , r = new t.constructor(e);
                                return e && "string" == typeof t[0] && Dt.call(t, "index") && (r.index = t.index,
                                r.input = t.input),
                                r
                            }(t),
                            !c)
                                return Ri(t, a)
                        } else {
                            var p = fs(t)
                              , f = p == b || p == E;
                            if (Go(t))
                                return Ei(t, c);
                            if (p == S || p == v || f && !s) {
                                if (a = u || f ? {} : gs(t),
                                !c)
                                    return u ? function(t, e) {
                                        return Ci(t, ps(t), e)
                                    }(t, function(t, e) {
                                        return t && Ci(e, ja(e), t)
                                    }(a, t)) : function(t, e) {
                                        return Ci(t, ls(t), e)
                                    }(t, rn(a, t))
                            } else {
                                if (!ae[p])
                                    return s ? t : {};
                                a = function(t, e, r) {
                                    var n = t.constructor;
                                    switch (e) {
                                    case T:
                                        return Ii(t);
                                    case m:
                                    case w:
                                        return new n(+t);
                                    case N:
                                        return function(t, e) {
                                            var r = e ? Ii(t.buffer) : t.buffer;
                                            return new t.constructor(r,t.byteOffset,t.byteLength)
                                        }(t, r);
                                    case L:
                                    case D:
                                    case q:
                                    case M:
                                    case z:
                                    case k:
                                    case U:
                                    case H:
                                    case V:
                                        return Pi(t, r);
                                    case I:
                                        return new n;
                                    case P:
                                    case C:
                                        return new n(t);
                                    case x:
                                        return function(t) {
                                            var e = new t.constructor(t.source,ft.exec(t));
                                            return e.lastIndex = t.lastIndex,
                                            e
                                        }(t);
                                    case R:
                                        return new n;
                                    case A:
                                        return function(t) {
                                            return qr ? Ot(qr.call(t)) : {}
                                        }(t)
                                    }
                                }(t, p, c)
                            }
                        }
                        o || (o = new Gr);
                        var d = o.get(t);
                        if (d)
                            return d;
                        o.set(t, a),
                        sa(t) ? t.forEach((function(r) {
                            a.add(an(r, e, n, r, t, o))
                        }
                        )) : ea(t) && t.forEach((function(r, i) {
                            a.set(i, an(r, e, n, i, t, o))
                        }
                        ));
                        var g = l ? r : (h ? u ? ns : rs : u ? ja : Aa)(t);
                        return xe(g || t, (function(r, i) {
                            g && (r = t[i = r]),
                            Xr(a, i, an(r, e, n, i, t, o))
                        }
                        )),
                        a
                    }
                    function cn(t, e, n) {
                        var i = n.length;
                        if (null == t)
                            return !i;
                        for (t = Ot(t); i--; ) {
                            var s = n[i]
                              , o = e[s]
                              , a = t[s];
                            if (a === r && !(s in t) || !o(a))
                                return !1
                        }
                        return !0
                    }
                    function un(t, e, i) {
                        if ("function" != typeof t)
                            throw new Ct(n);
                        return Cs((function() {
                            t.apply(r, i)
                        }
                        ), e)
                    }
                    function hn(t, e, r, n) {
                        var i = -1
                          , s = je
                          , o = !0
                          , a = t.length
                          , c = []
                          , u = e.length;
                        if (!a)
                            return c;
                        r && (e = Ne(e, Ye(r))),
                        n ? (s = Te,
                        o = !1) : e.length >= 200 && (s = Xe,
                        o = !1,
                        e = new Wr(e));
                        t: for (; ++i < a; ) {
                            var h = t[i]
                              , l = null == r ? h : r(h);
                            if (h = n || 0 !== h ? h : 0,
                            o && l === l) {
                                for (var p = u; p--; )
                                    if (e[p] === l)
                                        continue t;
                                c.push(h)
                            } else
                                s(e, l, n) || c.push(h)
                        }
                        return c
                    }
                    zr.templateSettings = {
                        escape: Q,
                        evaluate: Y,
                        interpolate: $,
                        variable: "",
                        imports: {
                            _: zr
                        }
                    },
                    zr.prototype = Ur.prototype,
                    zr.prototype.constructor = zr,
                    Hr.prototype = kr(Ur.prototype),
                    Hr.prototype.constructor = Hr,
                    Vr.prototype = kr(Ur.prototype),
                    Vr.prototype.constructor = Vr,
                    Kr.prototype.clear = function() {
                        this.__data__ = xr ? xr(null) : {},
                        this.size = 0
                    }
                    ,
                    Kr.prototype.delete = function(t) {
                        var e = this.has(t) && delete this.__data__[t];
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    ,
                    Kr.prototype.get = function(t) {
                        var e = this.__data__;
                        if (xr) {
                            var n = e[t];
                            return n === i ? r : n
                        }
                        return Dt.call(e, t) ? e[t] : r
                    }
                    ,
                    Kr.prototype.has = function(t) {
                        var e = this.__data__;
                        return xr ? e[t] !== r : Dt.call(e, t)
                    }
                    ,
                    Kr.prototype.set = function(t, e) {
                        var n = this.__data__;
                        return this.size += this.has(t) ? 0 : 1,
                        n[t] = xr && e === r ? i : e,
                        this
                    }
                    ,
                    Br.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    Br.prototype.delete = function(t) {
                        var e = this.__data__
                          , r = tn(e, t);
                        return !(r < 0) && (r == e.length - 1 ? e.pop() : Jt.call(e, r, 1),
                        --this.size,
                        !0)
                    }
                    ,
                    Br.prototype.get = function(t) {
                        var e = this.__data__
                          , n = tn(e, t);
                        return n < 0 ? r : e[n][1]
                    }
                    ,
                    Br.prototype.has = function(t) {
                        return tn(this.__data__, t) > -1
                    }
                    ,
                    Br.prototype.set = function(t, e) {
                        var r = this.__data__
                          , n = tn(r, t);
                        return n < 0 ? (++this.size,
                        r.push([t, e])) : r[n][1] = e,
                        this
                    }
                    ,
                    Fr.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Kr,
                            map: new (Ir || Br),
                            string: new Kr
                        }
                    }
                    ,
                    Fr.prototype.delete = function(t) {
                        var e = cs(this, t).delete(t);
                        return this.size -= e ? 1 : 0,
                        e
                    }
                    ,
                    Fr.prototype.get = function(t) {
                        return cs(this, t).get(t)
                    }
                    ,
                    Fr.prototype.has = function(t) {
                        return cs(this, t).has(t)
                    }
                    ,
                    Fr.prototype.set = function(t, e) {
                        var r = cs(this, t)
                          , n = r.size;
                        return r.set(t, e),
                        this.size += r.size == n ? 0 : 1,
                        this
                    }
                    ,
                    Wr.prototype.add = Wr.prototype.push = function(t) {
                        return this.__data__.set(t, i),
                        this
                    }
                    ,
                    Wr.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }
                    ,
                    Gr.prototype.clear = function() {
                        this.__data__ = new Br,
                        this.size = 0
                    }
                    ,
                    Gr.prototype.delete = function(t) {
                        var e = this.__data__
                          , r = e.delete(t);
                        return this.size = e.size,
                        r
                    }
                    ,
                    Gr.prototype.get = function(t) {
                        return this.__data__.get(t)
                    }
                    ,
                    Gr.prototype.has = function(t) {
                        return this.__data__.has(t)
                    }
                    ,
                    Gr.prototype.set = function(t, e) {
                        var r = this.__data__;
                        if (r instanceof Br) {
                            var n = r.__data__;
                            if (!Ir || n.length < 199)
                                return n.push([t, e]),
                                this.size = ++r.size,
                                this;
                            r = this.__data__ = new Fr(n)
                        }
                        return r.set(t, e),
                        this.size = r.size,
                        this
                    }
                    ;
                    var ln = Ti(wn)
                      , pn = Ti(_n, !0);
                    function fn(t, e) {
                        var r = !0;
                        return ln(t, (function(t, n, i) {
                            return r = !!e(t, n, i)
                        }
                        )),
                        r
                    }
                    function dn(t, e, n) {
                        for (var i = -1, s = t.length; ++i < s; ) {
                            var o = t[i]
                              , a = e(o);
                            if (null != a && (c === r ? a === a && !aa(a) : n(a, c)))
                                var c = a
                                  , u = o
                        }
                        return u
                    }
                    function gn(t, e) {
                        var r = [];
                        return ln(t, (function(t, n, i) {
                            e(t, n, i) && r.push(t)
                        }
                        )),
                        r
                    }
                    function vn(t, e, r, n, i) {
                        var s = -1
                          , o = t.length;
                        for (r || (r = vs),
                        i || (i = []); ++s < o; ) {
                            var a = t[s];
                            e > 0 && r(a) ? e > 1 ? vn(a, e - 1, r, n, i) : Le(i, a) : n || (i[i.length] = a)
                        }
                        return i
                    }
                    var yn = Ni()
                      , mn = Ni(!0);
                    function wn(t, e) {
                        return t && yn(t, e, Aa)
                    }
                    function _n(t, e) {
                        return t && mn(t, e, Aa)
                    }
                    function bn(t, e) {
                        return Ae(e, (function(e) {
                            return Qo(t[e])
                        }
                        ))
                    }
                    function En(t, e) {
                        for (var n = 0, i = (e = mi(e, t)).length; null != t && n < i; )
                            t = t[Ds(e[n++])];
                        return n && n == i ? t : r
                    }
                    function In(t, e, r) {
                        var n = e(t);
                        return Ko(t) ? n : Le(n, r(t))
                    }
                    function Pn(t) {
                        return null == t ? t === r ? "[object Undefined]" : "[object Null]" : te && te in Ot(t) ? function(t) {
                            var e = Dt.call(t, te)
                              , n = t[te];
                            try {
                                t[te] = r;
                                var i = !0
                            } catch {}
                            var s = zt.call(t);
                            return i && (e ? t[te] = n : delete t[te]),
                            s
                        }(t) : function(t) {
                            return zt.call(t)
                        }(t)
                    }
                    function Sn(t, e) {
                        return t > e
                    }
                    function On(t, e) {
                        return null != t && Dt.call(t, e)
                    }
                    function xn(t, e) {
                        return null != t && e in Ot(t)
                    }
                    function Rn(t, e, n) {
                        for (var i = n ? Te : je, s = t[0].length, o = t.length, a = o, c = st(o), u = 1 / 0, h = []; a--; ) {
                            var l = t[a];
                            a && e && (l = Ne(l, Ye(e))),
                            u = yr(l.length, u),
                            c[a] = !n && (e || s >= 120 && l.length >= 120) ? new Wr(a && l) : r
                        }
                        l = t[0];
                        var p = -1
                          , f = c[0];
                        t: for (; ++p < s && h.length < u; ) {
                            var d = l[p]
                              , g = e ? e(d) : d;
                            if (d = n || 0 !== d ? d : 0,
                            !(f ? Xe(f, g) : i(h, g, n))) {
                                for (a = o; --a; ) {
                                    var v = c[a];
                                    if (!(v ? Xe(v, g) : i(t[a], g, n)))
                                        continue t
                                }
                                f && f.push(g),
                                h.push(d)
                            }
                        }
                        return h
                    }
                    function Cn(t, e, n) {
                        var i = null == (t = Os(t, e = mi(e, t))) ? t : t[Ds(Zs(e))];
                        return null == i ? r : Se(i, t, n)
                    }
                    function An(t) {
                        return ta(t) && Pn(t) == v
                    }
                    function jn(t, e, n, i, s) {
                        return t === e || (null == t || null == e || !ta(t) && !ta(e) ? t !== t && e !== e : function(t, e, n, i, s, o) {
                            var a = Ko(t)
                              , c = Ko(e)
                              , u = a ? y : fs(t)
                              , h = c ? y : fs(e);
                            u = u == v ? S : u,
                            h = h == v ? S : h;
                            var l = u == S
                              , p = h == S
                              , f = u == h;
                            if (f && Go(t)) {
                                if (!Go(e))
                                    return !1;
                                a = !0,
                                l = !1
                            }
                            if (f && !l)
                                return o || (o = new Gr),
                                a || ca(t) ? ts(t, e, n, i, s, o) : function(t, e, r, n, i, s, o) {
                                    switch (r) {
                                    case N:
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                            return !1;
                                        t = t.buffer,
                                        e = e.buffer;
                                    case T:
                                        return !(t.byteLength != e.byteLength || !s(new Bt(t), new Bt(e)));
                                    case m:
                                    case w:
                                    case P:
                                        return ko(+t, +e);
                                    case _:
                                        return t.name == e.name && t.message == e.message;
                                    case x:
                                    case C:
                                        return t == e + "";
                                    case I:
                                        var a = or;
                                    case R:
                                        var c = 1 & n;
                                        if (a || (a = ur),
                                        t.size != e.size && !c)
                                            return !1;
                                        var u = o.get(t);
                                        if (u)
                                            return u == e;
                                        n |= 2,
                                        o.set(t, e);
                                        var h = ts(a(t), a(e), n, i, s, o);
                                        return o.delete(t),
                                        h;
                                    case A:
                                        if (qr)
                                            return qr.call(t) == qr.call(e)
                                    }
                                    return !1
                                }(t, e, u, n, i, s, o);
                            if (!(1 & n)) {
                                var d = l && Dt.call(t, "__wrapped__")
                                  , g = p && Dt.call(e, "__wrapped__");
                                if (d || g) {
                                    var b = d ? t.value() : t
                                      , E = g ? e.value() : e;
                                    return o || (o = new Gr),
                                    s(b, E, n, i, o)
                                }
                            }
                            return !!f && (o || (o = new Gr),
                            function(t, e, n, i, s, o) {
                                var a = 1 & n
                                  , c = rs(t)
                                  , u = c.length
                                  , h = rs(e)
                                  , l = h.length;
                                if (u != l && !a)
                                    return !1;
                                for (var p = u; p--; ) {
                                    var f = c[p];
                                    if (!(a ? f in e : Dt.call(e, f)))
                                        return !1
                                }
                                var d = o.get(t)
                                  , g = o.get(e);
                                if (d && g)
                                    return d == e && g == t;
                                var v = !0;
                                o.set(t, e),
                                o.set(e, t);
                                for (var y = a; ++p < u; ) {
                                    var m = t[f = c[p]]
                                      , w = e[f];
                                    if (i)
                                        var _ = a ? i(w, m, f, e, t, o) : i(m, w, f, t, e, o);
                                    if (!(_ === r ? m === w || s(m, w, n, i, o) : _)) {
                                        v = !1;
                                        break
                                    }
                                    y || (y = "constructor" == f)
                                }
                                if (v && !y) {
                                    var b = t.constructor
                                      , E = e.constructor;
                                    b != E && "constructor"in t && "constructor"in e && !("function" == typeof b && b instanceof b && "function" == typeof E && E instanceof E) && (v = !1)
                                }
                                return o.delete(t),
                                o.delete(e),
                                v
                            }(t, e, n, i, s, o))
                        }(t, e, n, i, jn, s))
                    }
                    function Tn(t, e, n, i) {
                        var s = n.length
                          , o = s
                          , a = !i;
                        if (null == t)
                            return !o;
                        for (t = Ot(t); s--; ) {
                            var c = n[s];
                            if (a && c[2] ? c[1] !== t[c[0]] : !(c[0]in t))
                                return !1
                        }
                        for (; ++s < o; ) {
                            var u = (c = n[s])[0]
                              , h = t[u]
                              , l = c[1];
                            if (a && c[2]) {
                                if (h === r && !(u in t))
                                    return !1
                            } else {
                                var p = new Gr;
                                if (i)
                                    var f = i(h, l, u, t, e, p);
                                if (!(f === r ? jn(l, h, 3, i, p) : f))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function Nn(t) {
                        return !(!Xo(t) || function(t) {
                            return !!Mt && Mt in t
                        }(t)) && (Qo(t) ? Ht : vt).test(qs(t))
                    }
                    function Ln(t) {
                        return "function" == typeof t ? t : null == t ? rc : "object" == typeof t ? Ko(t) ? Un(t[0], t[1]) : kn(t) : lc(t)
                    }
                    function Dn(t) {
                        if (!Es(t))
                            return gr(t);
                        var e = [];
                        for (var r in Ot(t))
                            Dt.call(t, r) && "constructor" != r && e.push(r);
                        return e
                    }
                    function qn(t) {
                        if (!Xo(t))
                            return function(t) {
                                var e = [];
                                if (null != t)
                                    for (var r in Ot(t))
                                        e.push(r);
                                return e
                            }(t);
                        var e = Es(t)
                          , r = [];
                        for (var n in t)
                            "constructor" == n && (e || !Dt.call(t, n)) || r.push(n);
                        return r
                    }
                    function Mn(t, e) {
                        return t < e
                    }
                    function zn(t, e) {
                        var r = -1
                          , n = Fo(t) ? st(t.length) : [];
                        return ln(t, (function(t, i, s) {
                            n[++r] = e(t, i, s)
                        }
                        )),
                        n
                    }
                    function kn(t) {
                        var e = us(t);
                        return 1 == e.length && e[0][2] ? Ps(e[0][0], e[0][1]) : function(r) {
                            return r === t || Tn(r, t, e)
                        }
                    }
                    function Un(t, e) {
                        return ws(t) && Is(e) ? Ps(Ds(t), e) : function(n) {
                            var i = Sa(n, t);
                            return i === r && i === e ? Oa(n, t) : jn(e, i, 3)
                        }
                    }
                    function Hn(t, e, n, i, s) {
                        t !== e && yn(e, (function(o, a) {
                            if (s || (s = new Gr),
                            Xo(o))
                                !function(t, e, n, i, s, o, a) {
                                    var c = xs(t, n)
                                      , u = xs(e, n)
                                      , h = a.get(u);
                                    if (h)
                                        return void $r(t, n, h);
                                    var l = o ? o(c, u, n + "", t, e, a) : r
                                      , p = l === r;
                                    if (p) {
                                        var f = Ko(u)
                                          , d = !f && Go(u)
                                          , g = !f && !d && ca(u);
                                        l = u,
                                        f || d || g ? Ko(c) ? l = c : Wo(c) ? l = Ri(c) : d ? (p = !1,
                                        l = Ei(u, !0)) : g ? (p = !1,
                                        l = Pi(u, !0)) : l = [] : na(u) || Vo(u) ? (l = c,
                                        Vo(c) ? l = va(c) : (!Xo(c) || Qo(c)) && (l = gs(u))) : p = !1
                                    }
                                    p && (a.set(u, l),
                                    s(l, u, i, o, a),
                                    a.delete(u)),
                                    $r(t, n, l)
                                }(t, e, a, n, Hn, i, s);
                            else {
                                var c = i ? i(xs(t, a), o, a + "", t, e, s) : r;
                                c === r && (c = o),
                                $r(t, a, c)
                            }
                        }
                        ), ja)
                    }
                    function Vn(t, e) {
                        var n = t.length;
                        if (n)
                            return ys(e += e < 0 ? n : 0, n) ? t[e] : r
                    }
                    function Kn(t, e, r) {
                        e = e.length ? Ne(e, (function(t) {
                            return Ko(t) ? function(e) {
                                return En(e, 1 === t.length ? t[0] : t)
                            }
                            : t
                        }
                        )) : [rc];
                        var n = -1;
                        e = Ne(e, Ye(as()));
                        var i = zn(t, (function(t, r, i) {
                            var s = Ne(e, (function(e) {
                                return e(t)
                            }
                            ));
                            return {
                                criteria: s,
                                index: ++n,
                                value: t
                            }
                        }
                        ));
                        return function(t, e) {
                            var r = t.length;
                            for (t.sort(e); r--; )
                                t[r] = t[r].value;
                            return t
                        }(i, (function(t, e) {
                            return function(t, e, r) {
                                for (var n = -1, i = t.criteria, s = e.criteria, o = i.length, a = r.length; ++n < o; ) {
                                    var c = Si(i[n], s[n]);
                                    if (c)
                                        return n >= a ? c : c * ("desc" == r[n] ? -1 : 1)
                                }
                                return t.index - e.index
                            }(t, e, r)
                        }
                        ))
                    }
                    function Bn(t, e, r) {
                        for (var n = -1, i = e.length, s = {}; ++n < i; ) {
                            var o = e[n]
                              , a = En(t, o);
                            r(a, o) && $n(s, mi(o, t), a)
                        }
                        return s
                    }
                    function Fn(t, e, r, n) {
                        var i = n ? Ve : He
                          , s = -1
                          , o = e.length
                          , a = t;
                        for (t === e && (e = Ri(e)),
                        r && (a = Ne(t, Ye(r))); ++s < o; )
                            for (var c = 0, u = e[s], h = r ? r(u) : u; (c = i(a, h, c, n)) > -1; )
                                a !== t && Jt.call(a, c, 1),
                                Jt.call(t, c, 1);
                        return t
                    }
                    function Wn(t, e) {
                        for (var r = t ? e.length : 0, n = r - 1; r--; ) {
                            var i = e[r];
                            if (r == n || i !== s) {
                                var s = i;
                                ys(i) ? Jt.call(t, i, 1) : hi(t, i)
                            }
                        }
                        return t
                    }
                    function Gn(t, e) {
                        return t + ge(_r() * (e - t + 1))
                    }
                    function Zn(t, e) {
                        var r = "";
                        if (!t || e < 1 || e > p)
                            return r;
                        do {
                            e % 2 && (r += t),
                            (e = ge(e / 2)) && (t += t)
                        } while (e);
                        return r
                    }
                    function Jn(t, e) {
                        return As(Ss(t, e, rc), t + "")
                    }
                    function Qn(t) {
                        return Jr(ka(t))
                    }
                    function Yn(t, e) {
                        var r = ka(t);
                        return Ns(r, on(e, 0, r.length))
                    }
                    function $n(t, e, n, i) {
                        if (!Xo(t))
                            return t;
                        for (var s = -1, o = (e = mi(e, t)).length, a = o - 1, c = t; null != c && ++s < o; ) {
                            var u = Ds(e[s])
                              , h = n;
                            if ("__proto__" === u || "constructor" === u || "prototype" === u)
                                return t;
                            if (s != a) {
                                var l = c[u];
                                (h = i ? i(l, u, c) : r) === r && (h = Xo(l) ? l : ys(e[s + 1]) ? [] : {})
                            }
                            Xr(c, u, h),
                            c = c[u]
                        }
                        return t
                    }
                    var Xn = Rr ? function(t, e) {
                        return Rr.set(t, e),
                        t
                    }
                    : rc
                      , ti = re ? function(t, e) {
                        return re(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Xa(e),
                            writable: !0
                        })
                    }
                    : rc;
                    function ei(t) {
                        return Ns(ka(t))
                    }
                    function ri(t, e, r) {
                        var n = -1
                          , i = t.length;
                        e < 0 && (e = -e > i ? 0 : i + e),
                        (r = r > i ? i : r) < 0 && (r += i),
                        i = e > r ? 0 : r - e >>> 0,
                        e >>>= 0;
                        for (var s = st(i); ++n < i; )
                            s[n] = t[n + e];
                        return s
                    }
                    function ni(t, e) {
                        var r;
                        return ln(t, (function(t, n, i) {
                            return !(r = e(t, n, i))
                        }
                        )),
                        !!r
                    }
                    function ii(t, e, r) {
                        var n = 0
                          , i = null == t ? n : t.length;
                        if ("number" == typeof e && e === e && i <= 2147483647) {
                            for (; n < i; ) {
                                var s = n + i >>> 1
                                  , o = t[s];
                                null !== o && !aa(o) && (r ? o <= e : o < e) ? n = s + 1 : i = s
                            }
                            return i
                        }
                        return si(t, e, rc, r)
                    }
                    function si(t, e, n, i) {
                        var s = 0
                          , o = null == t ? 0 : t.length;
                        if (0 === o)
                            return 0;
                        for (var a = (e = n(e)) !== e, c = null === e, u = aa(e), h = e === r; s < o; ) {
                            var l = ge((s + o) / 2)
                              , p = n(t[l])
                              , f = p !== r
                              , d = null === p
                              , g = p === p
                              , v = aa(p);
                            if (a)
                                var y = i || g;
                            else
                                y = h ? g && (i || f) : c ? g && f && (i || !d) : u ? g && f && !d && (i || !v) : !d && !v && (i ? p <= e : p < e);
                            y ? s = l + 1 : o = l
                        }
                        return yr(o, 4294967294)
                    }
                    function oi(t, e) {
                        for (var r = -1, n = t.length, i = 0, s = []; ++r < n; ) {
                            var o = t[r]
                              , a = e ? e(o) : o;
                            if (!r || !ko(a, c)) {
                                var c = a;
                                s[i++] = 0 === o ? 0 : o
                            }
                        }
                        return s
                    }
                    function ai(t) {
                        return "number" == typeof t ? t : aa(t) ? f : +t
                    }
                    function ci(t) {
                        if ("string" == typeof t)
                            return t;
                        if (Ko(t))
                            return Ne(t, ci) + "";
                        if (aa(t))
                            return Mr ? Mr.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -l ? "-0" : e
                    }
                    function ui(t, e, r) {
                        var n = -1
                          , i = je
                          , s = t.length
                          , o = !0
                          , a = []
                          , c = a;
                        if (r)
                            o = !1,
                            i = Te;
                        else if (s >= 200) {
                            var u = e ? null : Zi(t);
                            if (u)
                                return ur(u);
                            o = !1,
                            i = Xe,
                            c = new Wr
                        } else
                            c = e ? [] : a;
                        t: for (; ++n < s; ) {
                            var h = t[n]
                              , l = e ? e(h) : h;
                            if (h = r || 0 !== h ? h : 0,
                            o && l === l) {
                                for (var p = c.length; p--; )
                                    if (c[p] === l)
                                        continue t;
                                e && c.push(l),
                                a.push(h)
                            } else
                                i(c, l, r) || (c !== a && c.push(l),
                                a.push(h))
                        }
                        return a
                    }
                    function hi(t, e) {
                        return null == (t = Os(t, e = mi(e, t))) || delete t[Ds(Zs(e))]
                    }
                    function li(t, e, r, n) {
                        return $n(t, e, r(En(t, e)), n)
                    }
                    function pi(t, e, r, n) {
                        for (var i = t.length, s = n ? i : -1; (n ? s-- : ++s < i) && e(t[s], s, t); )
                            ;
                        return r ? ri(t, n ? 0 : s, n ? s + 1 : i) : ri(t, n ? s + 1 : 0, n ? i : s)
                    }
                    function fi(t, e) {
                        var r = t;
                        return r instanceof Vr && (r = r.value()),
                        De(e, (function(t, e) {
                            return e.func.apply(e.thisArg, Le([t], e.args))
                        }
                        ), r)
                    }
                    function di(t, e, r) {
                        var n = t.length;
                        if (n < 2)
                            return n ? ui(t[0]) : [];
                        for (var i = -1, s = st(n); ++i < n; )
                            for (var o = t[i], a = -1; ++a < n; )
                                a != i && (s[i] = hn(s[i] || o, t[a], e, r));
                        return ui(vn(s, 1), e, r)
                    }
                    function gi(t, e, n) {
                        for (var i = -1, s = t.length, o = e.length, a = {}; ++i < s; ) {
                            var c = i < o ? e[i] : r;
                            n(a, t[i], c)
                        }
                        return a
                    }
                    function vi(t) {
                        return Wo(t) ? t : []
                    }
                    function yi(t) {
                        return "function" == typeof t ? t : rc
                    }
                    function mi(t, e) {
                        return Ko(t) ? t : ws(t, e) ? [t] : Ls(ya(t))
                    }
                    var wi = Jn;
                    function _i(t, e, n) {
                        var i = t.length;
                        return n = n === r ? i : n,
                        !e && n >= i ? t : ri(t, e, n)
                    }
                    var bi = ce || function(t) {
                        return fe.clearTimeout(t)
                    }
                    ;
                    function Ei(t, e) {
                        if (e)
                            return t.slice();
                        var r = t.length
                          , n = Ft ? Ft(r) : new t.constructor(r);
                        return t.copy(n),
                        n
                    }
                    function Ii(t) {
                        var e = new t.constructor(t.byteLength);
                        return new Bt(e).set(new Bt(t)),
                        e
                    }
                    function Pi(t, e) {
                        var r = e ? Ii(t.buffer) : t.buffer;
                        return new t.constructor(r,t.byteOffset,t.length)
                    }
                    function Si(t, e) {
                        if (t !== e) {
                            var n = t !== r
                              , i = null === t
                              , s = t === t
                              , o = aa(t)
                              , a = e !== r
                              , c = null === e
                              , u = e === e
                              , h = aa(e);
                            if (!c && !h && !o && t > e || o && a && u && !c && !h || i && a && u || !n && u || !s)
                                return 1;
                            if (!i && !o && !h && t < e || h && n && s && !i && !o || c && n && s || !a && s || !u)
                                return -1
                        }
                        return 0
                    }
                    function Oi(t, e, r, n) {
                        for (var i = -1, s = t.length, o = r.length, a = -1, c = e.length, u = vr(s - o, 0), h = st(c + u), l = !n; ++a < c; )
                            h[a] = e[a];
                        for (; ++i < o; )
                            (l || i < s) && (h[r[i]] = t[i]);
                        for (; u--; )
                            h[a++] = t[i++];
                        return h
                    }
                    function xi(t, e, r, n) {
                        for (var i = -1, s = t.length, o = -1, a = r.length, c = -1, u = e.length, h = vr(s - a, 0), l = st(h + u), p = !n; ++i < h; )
                            l[i] = t[i];
                        for (var f = i; ++c < u; )
                            l[f + c] = e[c];
                        for (; ++o < a; )
                            (p || i < s) && (l[f + r[o]] = t[i++]);
                        return l
                    }
                    function Ri(t, e) {
                        var r = -1
                          , n = t.length;
                        for (e || (e = st(n)); ++r < n; )
                            e[r] = t[r];
                        return e
                    }
                    function Ci(t, e, n, i) {
                        var s = !n;
                        n || (n = {});
                        for (var o = -1, a = e.length; ++o < a; ) {
                            var c = e[o]
                              , u = i ? i(n[c], t[c], c, n, t) : r;
                            u === r && (u = t[c]),
                            s ? nn(n, c, u) : Xr(n, c, u)
                        }
                        return n
                    }
                    function Ai(t, e) {
                        return function(r, n) {
                            var i = Ko(r) ? Oe : en
                              , s = e ? e() : {};
                            return i(r, t, as(n, 2), s)
                        }
                    }
                    function ji(t) {
                        return Jn((function(e, n) {
                            var i = -1
                              , s = n.length
                              , o = s > 1 ? n[s - 1] : r
                              , a = s > 2 ? n[2] : r;
                            for (o = t.length > 3 && "function" == typeof o ? (s--,
                            o) : r,
                            a && ms(n[0], n[1], a) && (o = s < 3 ? r : o,
                            s = 1),
                            e = Ot(e); ++i < s; ) {
                                var c = n[i];
                                c && t(e, c, i, o)
                            }
                            return e
                        }
                        ))
                    }
                    function Ti(t, e) {
                        return function(r, n) {
                            if (null == r)
                                return r;
                            if (!Fo(r))
                                return t(r, n);
                            for (var i = r.length, s = e ? i : -1, o = Ot(r); (e ? s-- : ++s < i) && !1 !== n(o[s], s, o); )
                                ;
                            return r
                        }
                    }
                    function Ni(t) {
                        return function(e, r, n) {
                            for (var i = -1, s = Ot(e), o = n(e), a = o.length; a--; ) {
                                var c = o[t ? a : ++i];
                                if (!1 === r(s[c], c, s))
                                    break
                            }
                            return e
                        }
                    }
                    function Li(t) {
                        return function(e) {
                            var n = sr(e = ya(e)) ? lr(e) : r
                              , i = n ? n[0] : e.charAt(0)
                              , s = n ? _i(n, 1).join("") : e.slice(1);
                            return i[t]() + s
                        }
                    }
                    function Di(t) {
                        return function(e) {
                            return De(Qa(Va(e).replace($t, "")), t, "")
                        }
                    }
                    function qi(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0],e[1]);
                            case 3:
                                return new t(e[0],e[1],e[2]);
                            case 4:
                                return new t(e[0],e[1],e[2],e[3]);
                            case 5:
                                return new t(e[0],e[1],e[2],e[3],e[4]);
                            case 6:
                                return new t(e[0],e[1],e[2],e[3],e[4],e[5]);
                            case 7:
                                return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
                            }
                            var r = kr(t.prototype)
                              , n = t.apply(r, e);
                            return Xo(n) ? n : r
                        }
                    }
                    function Mi(t) {
                        return function(e, n, i) {
                            var s = Ot(e);
                            if (!Fo(e)) {
                                var o = as(n, 3);
                                e = Aa(e),
                                n = function(t) {
                                    return o(s[t], t, s)
                                }
                            }
                            var a = t(e, n, i);
                            return a > -1 ? s[o ? e[a] : a] : r
                        }
                    }
                    function zi(t) {
                        return es((function(e) {
                            var i = e.length
                              , s = i
                              , o = Hr.prototype.thru;
                            for (t && e.reverse(); s--; ) {
                                var a = e[s];
                                if ("function" != typeof a)
                                    throw new Ct(n);
                                if (o && !c && "wrapper" == ss(a))
                                    var c = new Hr([],!0)
                            }
                            for (s = c ? s : i; ++s < i; ) {
                                var u = ss(a = e[s])
                                  , h = "wrapper" == u ? is(a) : r;
                                c = h && _s(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[ss(h[0])].apply(c, h[3]) : 1 == a.length && _s(a) ? c[u]() : c.thru(a)
                            }
                            return function() {
                                var t = arguments
                                  , r = t[0];
                                if (c && 1 == t.length && Ko(r))
                                    return c.plant(r).value();
                                for (var n = 0, s = i ? e[n].apply(this, t) : r; ++n < i; )
                                    s = e[n].call(this, s);
                                return s
                            }
                        }
                        ))
                    }
                    function ki(t, e, n, i, s, o, a, c, h, l) {
                        var p = e & u
                          , f = 1 & e
                          , d = 2 & e
                          , g = 24 & e
                          , v = 512 & e
                          , y = d ? r : qi(t);
                        return function u() {
                            for (var m = arguments.length, w = st(m), _ = m; _--; )
                                w[_] = arguments[_];
                            if (g)
                                var b = os(u)
                                  , E = function(t, e) {
                                    for (var r = t.length, n = 0; r--; )
                                        t[r] === e && ++n;
                                    return n
                                }(w, b);
                            if (i && (w = Oi(w, i, s, g)),
                            o && (w = xi(w, o, a, g)),
                            m -= E,
                            g && m < l) {
                                var I = cr(w, b);
                                return Wi(t, e, ki, u.placeholder, n, w, I, c, h, l - m)
                            }
                            var P = f ? n : this
                              , S = d ? P[t] : t;
                            return m = w.length,
                            c ? w = function(t, e) {
                                for (var n = t.length, i = yr(e.length, n), s = Ri(t); i--; ) {
                                    var o = e[i];
                                    t[i] = ys(o, n) ? s[o] : r
                                }
                                return t
                            }(w, c) : v && m > 1 && w.reverse(),
                            p && h < m && (w.length = h),
                            this && this !== fe && this instanceof u && (S = y || qi(S)),
                            S.apply(P, w)
                        }
                    }
                    function Ui(t, e) {
                        return function(r, n) {
                            return function(t, e, r, n) {
                                return wn(t, (function(t, i, s) {
                                    e(n, r(t), i, s)
                                }
                                )),
                                n
                            }(r, t, e(n), {})
                        }
                    }
                    function Hi(t, e) {
                        return function(n, i) {
                            var s;
                            if (n === r && i === r)
                                return e;
                            if (n !== r && (s = n),
                            i !== r) {
                                if (s === r)
                                    return i;
                                "string" == typeof n || "string" == typeof i ? (n = ci(n),
                                i = ci(i)) : (n = ai(n),
                                i = ai(i)),
                                s = t(n, i)
                            }
                            return s
                        }
                    }
                    function Vi(t) {
                        return es((function(e) {
                            return e = Ne(e, Ye(as())),
                            Jn((function(r) {
                                var n = this;
                                return t(e, (function(t) {
                                    return Se(t, n, r)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    function Ki(t, e) {
                        var n = (e = e === r ? " " : ci(e)).length;
                        if (n < 2)
                            return n ? Zn(e, t) : e;
                        var i = Zn(e, de(t / hr(e)));
                        return sr(e) ? _i(lr(i), 0, t).join("") : i.slice(0, t)
                    }
                    function Bi(t) {
                        return function(e, n, i) {
                            return i && "number" != typeof i && ms(e, n, i) && (n = i = r),
                            e = pa(e),
                            n === r ? (n = e,
                            e = 0) : n = pa(n),
                            function(t, e, r, n) {
                                for (var i = -1, s = vr(de((e - t) / (r || 1)), 0), o = st(s); s--; )
                                    o[n ? s : ++i] = t,
                                    t += r;
                                return o
                            }(e, n, i = i === r ? e < n ? 1 : -1 : pa(i), t)
                        }
                    }
                    function Fi(t) {
                        return function(e, r) {
                            return "string" == typeof e && "string" == typeof r || (e = ga(e),
                            r = ga(r)),
                            t(e, r)
                        }
                    }
                    function Wi(t, e, n, i, s, o, u, h, l, p) {
                        var f = 8 & e;
                        e |= f ? a : c,
                        4 & (e &= ~(f ? c : a)) || (e &= -4);
                        var d = [t, e, s, f ? o : r, f ? u : r, f ? r : o, f ? r : u, h, l, p]
                          , g = n.apply(r, d);
                        return _s(t) && Rs(g, d),
                        g.placeholder = i,
                        js(g, t, e)
                    }
                    function Gi(t) {
                        var e = St[t];
                        return function(t, r) {
                            if (t = ga(t),
                            (r = null == r ? 0 : yr(fa(r), 292)) && ze(t)) {
                                var n = (ya(t) + "e").split("e");
                                return +((n = (ya(e(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                            }
                            return e(t)
                        }
                    }
                    var Zi = Sr && 1 / ur(new Sr([, -0]))[1] == l ? function(t) {
                        return new Sr(t)
                    }
                    : ac;
                    function Ji(t) {
                        return function(e) {
                            var r = fs(e);
                            return r == I ? or(e) : r == R ? function(t) {
                                var e = -1
                                  , r = Array(t.size);
                                return t.forEach((function(t) {
                                    r[++e] = [t, t]
                                }
                                )),
                                r
                            }(e) : function(t, e) {
                                return Ne(e, (function(e) {
                                    return [e, t[e]]
                                }
                                ))
                            }(e, t(e))
                        }
                    }
                    function Qi(t, e, i, l, p, f, d, g) {
                        var v = 2 & e;
                        if (!v && "function" != typeof t)
                            throw new Ct(n);
                        var y = l ? l.length : 0;
                        if (y || (e &= -97,
                        l = p = r),
                        d = d === r ? d : vr(fa(d), 0),
                        g = g === r ? g : fa(g),
                        y -= p ? p.length : 0,
                        e & c) {
                            var m = l
                              , w = p;
                            l = p = r
                        }
                        var _ = v ? r : is(t)
                          , b = [t, e, i, l, p, m, w, f, d, g];
                        if (_ && function(t, e) {
                            var r = t[1]
                              , n = e[1]
                              , i = r | n
                              , o = i < 131
                              , a = n == u && 8 == r || n == u && r == h && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == r;
                            if (!o && !a)
                                return t;
                            1 & n && (t[2] = e[2],
                            i |= 1 & r ? 0 : 4);
                            var c = e[3];
                            if (c) {
                                var l = t[3];
                                t[3] = l ? Oi(l, c, e[4]) : c,
                                t[4] = l ? cr(t[3], s) : e[4]
                            }
                            c = e[5],
                            c && (l = t[5],
                            t[5] = l ? xi(l, c, e[6]) : c,
                            t[6] = l ? cr(t[5], s) : e[6]),
                            c = e[7],
                            c && (t[7] = c),
                            n & u && (t[8] = null == t[8] ? e[8] : yr(t[8], e[8])),
                            null == t[9] && (t[9] = e[9]),
                            t[0] = e[0],
                            t[1] = i
                        }(b, _),
                        t = b[0],
                        e = b[1],
                        i = b[2],
                        l = b[3],
                        p = b[4],
                        !(g = b[9] = b[9] === r ? v ? 0 : t.length : vr(b[9] - y, 0)) && 24 & e && (e &= -25),
                        e && 1 != e)
                            E = 8 == e || e == o ? function(t, e, n) {
                                var i = qi(t);
                                return function s() {
                                    for (var o = arguments.length, a = st(o), c = o, u = os(s); c--; )
                                        a[c] = arguments[c];
                                    var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : cr(a, u);
                                    return (o -= h.length) < n ? Wi(t, e, ki, s.placeholder, r, a, h, r, r, n - o) : Se(this && this !== fe && this instanceof s ? i : t, this, a)
                                }
                            }(t, e, g) : e != a && 33 != e || p.length ? ki.apply(r, b) : function(t, e, r, n) {
                                var i = 1 & e
                                  , s = qi(t);
                                return function e() {
                                    for (var o = -1, a = arguments.length, c = -1, u = n.length, h = st(u + a), l = this && this !== fe && this instanceof e ? s : t; ++c < u; )
                                        h[c] = n[c];
                                    for (; a--; )
                                        h[c++] = arguments[++o];
                                    return Se(l, i ? r : this, h)
                                }
                            }(t, e, i, l);
                        else
                            var E = function(t, e, r) {
                                var n = 1 & e
                                  , i = qi(t);
                                return function e() {
                                    return (this && this !== fe && this instanceof e ? i : t).apply(n ? r : this, arguments)
                                }
                            }(t, e, i);
                        return js((_ ? Xn : Rs)(E, b), t, e)
                    }
                    function Yi(t, e, n, i) {
                        return t === r || ko(t, Tt[n]) && !Dt.call(i, n) ? e : t
                    }
                    function $i(t, e, n, i, s, o) {
                        return Xo(t) && Xo(e) && (o.set(e, t),
                        Hn(t, e, r, $i, o),
                        o.delete(e)),
                        t
                    }
                    function Xi(t) {
                        return na(t) ? r : t
                    }
                    function ts(t, e, n, i, s, o) {
                        var a = 1 & n
                          , c = t.length
                          , u = e.length;
                        if (c != u && !(a && u > c))
                            return !1;
                        var h = o.get(t)
                          , l = o.get(e);
                        if (h && l)
                            return h == e && l == t;
                        var p = -1
                          , f = !0
                          , d = 2 & n ? new Wr : r;
                        for (o.set(t, e),
                        o.set(e, t); ++p < c; ) {
                            var g = t[p]
                              , v = e[p];
                            if (i)
                                var y = a ? i(v, g, p, e, t, o) : i(g, v, p, t, e, o);
                            if (y !== r) {
                                if (y)
                                    continue;
                                f = !1;
                                break
                            }
                            if (d) {
                                if (!Me(e, (function(t, e) {
                                    if (!Xe(d, e) && (g === t || s(g, t, n, i, o)))
                                        return d.push(e)
                                }
                                ))) {
                                    f = !1;
                                    break
                                }
                            } else if (g !== v && !s(g, v, n, i, o)) {
                                f = !1;
                                break
                            }
                        }
                        return o.delete(t),
                        o.delete(e),
                        f
                    }
                    function es(t) {
                        return As(Ss(t, r, Ks), t + "")
                    }
                    function rs(t) {
                        return In(t, Aa, ls)
                    }
                    function ns(t) {
                        return In(t, ja, ps)
                    }
                    var is = Rr ? function(t) {
                        return Rr.get(t)
                    }
                    : ac;
                    function ss(t) {
                        for (var e = t.name + "", r = Cr[e], n = Dt.call(Cr, e) ? r.length : 0; n--; ) {
                            var i = r[n]
                              , s = i.func;
                            if (null == s || s == t)
                                return i.name
                        }
                        return e
                    }
                    function os(t) {
                        return (Dt.call(zr, "placeholder") ? zr : t).placeholder
                    }
                    function as() {
                        var t = zr.iteratee || nc;
                        return t = t === nc ? Ln : t,
                        arguments.length ? t(arguments[0], arguments[1]) : t
                    }
                    function cs(t, e) {
                        var r = t.__data__;
                        return function(t) {
                            var e = typeof t;
                            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                        }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                    }
                    function us(t) {
                        for (var e = Aa(t), r = e.length; r--; ) {
                            var n = e[r]
                              , i = t[n];
                            e[r] = [n, i, Is(i)]
                        }
                        return e
                    }
                    function hs(t, e) {
                        var n = function(t, e) {
                            return null == t ? r : t[e]
                        }(t, e);
                        return Nn(n) ? n : r
                    }
                    var ls = ye ? function(t) {
                        return null == t ? [] : (t = Ot(t),
                        Ae(ye(t), (function(e) {
                            return Zt.call(t, e)
                        }
                        )))
                    }
                    : dc
                      , ps = ye ? function(t) {
                        for (var e = []; t; )
                            Le(e, ls(t)),
                            t = Wt(t);
                        return e
                    }
                    : dc
                      , fs = Pn;
                    function ds(t, e, r) {
                        for (var n = -1, i = (e = mi(e, t)).length, s = !1; ++n < i; ) {
                            var o = Ds(e[n]);
                            if (!(s = null != t && r(t, o)))
                                break;
                            t = t[o]
                        }
                        return s || ++n != i ? s : !!(i = null == t ? 0 : t.length) && $o(i) && ys(o, i) && (Ko(t) || Vo(t))
                    }
                    function gs(t) {
                        return "function" != typeof t.constructor || Es(t) ? {} : kr(Wt(t))
                    }
                    function vs(t) {
                        return Ko(t) || Vo(t) || !!(Qt && t && t[Qt])
                    }
                    function ys(t, e) {
                        var r, n = typeof t;
                        return !!(e = null !== (r = e) && void 0 !== r ? r : p) && ("number" == n || "symbol" != n && mt.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }
                    function ms(t, e, r) {
                        if (!Xo(r))
                            return !1;
                        var n = typeof e;
                        return !!("number" == n ? Fo(r) && ys(e, r.length) : "string" == n && e in r) && ko(r[e], t)
                    }
                    function ws(t, e) {
                        if (Ko(t))
                            return !1;
                        var r = typeof t;
                        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !aa(t)) || (tt.test(t) || !X.test(t) || null != e && t in Ot(e))
                    }
                    function _s(t) {
                        var e = ss(t)
                          , r = zr[e];
                        if ("function" != typeof r || !(e in Vr.prototype))
                            return !1;
                        if (t === r)
                            return !0;
                        var n = is(r);
                        return !!n && t === n[0]
                    }
                    (Er && fs(new Er(new ArrayBuffer(1))) != N || Ir && fs(new Ir) != I || Pr && fs(Pr.resolve()) != O || Sr && fs(new Sr) != R || Or && fs(new Or) != j) && (fs = function(t) {
                        var e = Pn(t)
                          , n = e == S ? t.constructor : r
                          , i = n ? qs(n) : "";
                        if (i)
                            switch (i) {
                            case Ar:
                                return N;
                            case jr:
                                return I;
                            case Tr:
                                return O;
                            case Nr:
                                return R;
                            case Lr:
                                return j
                            }
                        return e
                    }
                    );
                    var bs = Nt ? Qo : gc;
                    function Es(t) {
                        var e = t && t.constructor;
                        return t === ("function" == typeof e && e.prototype || Tt)
                    }
                    function Is(t) {
                        return t === t && !Xo(t)
                    }
                    function Ps(t, e) {
                        return function(n) {
                            return null != n && (n[t] === e && (e !== r || t in Ot(n)))
                        }
                    }
                    function Ss(t, e, n) {
                        return e = vr(e === r ? t.length - 1 : e, 0),
                        function() {
                            for (var r = arguments, i = -1, s = vr(r.length - e, 0), o = st(s); ++i < s; )
                                o[i] = r[e + i];
                            i = -1;
                            for (var a = st(e + 1); ++i < e; )
                                a[i] = r[i];
                            return a[e] = n(o),
                            Se(t, this, a)
                        }
                    }
                    function Os(t, e) {
                        return e.length < 2 ? t : En(t, ri(e, 0, -1))
                    }
                    function xs(t, e) {
                        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
                            return t[e]
                    }
                    var Rs = Ts(Xn)
                      , Cs = pe || function(t, e) {
                        return fe.setTimeout(t, e)
                    }
                      , As = Ts(ti);
                    function js(t, e, r) {
                        var n = e + "";
                        return As(t, function(t, e) {
                            var r = e.length;
                            if (!r)
                                return t;
                            var n = r - 1;
                            return e[n] = (r > 1 ? "& " : "") + e[n],
                            e = e.join(r > 2 ? ", " : " "),
                            t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                        }(n, function(t, e) {
                            return xe(g, (function(r) {
                                var n = "_." + r[0];
                                e & r[1] && !je(t, n) && t.push(n)
                            }
                            )),
                            t.sort()
                        }(function(t) {
                            var e = t.match(at);
                            return e ? e[1].split(ct) : []
                        }(n), r)))
                    }
                    function Ts(t) {
                        var e = 0
                          , n = 0;
                        return function() {
                            var i = mr()
                              , s = 16 - (i - n);
                            if (n = i,
                            s > 0) {
                                if (++e >= 800)
                                    return arguments[0]
                            } else
                                e = 0;
                            return t.apply(r, arguments)
                        }
                    }
                    function Ns(t, e) {
                        var n = -1
                          , i = t.length
                          , s = i - 1;
                        for (e = e === r ? i : e; ++n < e; ) {
                            var o = Gn(n, s)
                              , a = t[o];
                            t[o] = t[n],
                            t[n] = a
                        }
                        return t.length = e,
                        t
                    }
                    var Ls = function(t) {
                        var e = No(t, (function(t) {
                            return 500 === r.size && r.clear(),
                            t
                        }
                        ))
                          , r = e.cache;
                        return e
                    }((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""),
                        t.replace(et, (function(t, r, n, i) {
                            e.push(n ? i.replace(lt, "$1") : r || t)
                        }
                        )),
                        e
                    }
                    ));
                    function Ds(t) {
                        if ("string" == typeof t || aa(t))
                            return t;
                        var e = t + "";
                        return "0" == e && 1 / t == -l ? "-0" : e
                    }
                    function qs(t) {
                        if (null != t) {
                            try {
                                return Lt.call(t)
                            } catch {}
                            try {
                                return t + ""
                            } catch {}
                        }
                        return ""
                    }
                    function Ms(t) {
                        if (t instanceof Vr)
                            return t.clone();
                        var e = new Hr(t.__wrapped__,t.__chain__);
                        return e.__actions__ = Ri(t.__actions__),
                        e.__index__ = t.__index__,
                        e.__values__ = t.__values__,
                        e
                    }
                    var zs = Jn((function(t, e) {
                        return Wo(t) ? hn(t, vn(e, 1, Wo, !0)) : []
                    }
                    ))
                      , ks = Jn((function(t, e) {
                        var n = Zs(e);
                        return Wo(n) && (n = r),
                        Wo(t) ? hn(t, vn(e, 1, Wo, !0), as(n, 2)) : []
                    }
                    ))
                      , Us = Jn((function(t, e) {
                        var n = Zs(e);
                        return Wo(n) && (n = r),
                        Wo(t) ? hn(t, vn(e, 1, Wo, !0), r, n) : []
                    }
                    ));
                    function Hs(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        if (!n)
                            return -1;
                        var i = null == r ? 0 : fa(r);
                        return i < 0 && (i = vr(n + i, 0)),
                        Ue(t, as(e, 3), i)
                    }
                    function Vs(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        if (!i)
                            return -1;
                        var s = i - 1;
                        return n !== r && (s = fa(n),
                        s = n < 0 ? vr(i + s, 0) : yr(s, i - 1)),
                        Ue(t, as(e, 3), s, !0)
                    }
                    function Ks(t) {
                        return (null == t ? 0 : t.length) ? vn(t, 1) : []
                    }
                    function Bs(t) {
                        return t && t.length ? t[0] : r
                    }
                    var Fs = Jn((function(t) {
                        var e = Ne(t, vi);
                        return e.length && e[0] === t[0] ? Rn(e) : []
                    }
                    ))
                      , Ws = Jn((function(t) {
                        var e = Zs(t)
                          , n = Ne(t, vi);
                        return e === Zs(n) ? e = r : n.pop(),
                        n.length && n[0] === t[0] ? Rn(n, as(e, 2)) : []
                    }
                    ))
                      , Gs = Jn((function(t) {
                        var e = Zs(t)
                          , n = Ne(t, vi);
                        return (e = "function" == typeof e ? e : r) && n.pop(),
                        n.length && n[0] === t[0] ? Rn(n, r, e) : []
                    }
                    ));
                    function Zs(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? t[e - 1] : r
                    }
                    var Js = Jn(Qs);
                    function Qs(t, e) {
                        return t && t.length && e && e.length ? Fn(t, e) : t
                    }
                    var Ys = es((function(t, e) {
                        var r = null == t ? 0 : t.length
                          , n = sn(t, e);
                        return Wn(t, Ne(e, (function(t) {
                            return ys(t, r) ? +t : t
                        }
                        )).sort(Si)),
                        n
                    }
                    ));
                    function $s(t) {
                        return null == t ? t : br.call(t)
                    }
                    var Xs = Jn((function(t) {
                        return ui(vn(t, 1, Wo, !0))
                    }
                    ))
                      , to = Jn((function(t) {
                        var e = Zs(t);
                        return Wo(e) && (e = r),
                        ui(vn(t, 1, Wo, !0), as(e, 2))
                    }
                    ))
                      , eo = Jn((function(t) {
                        var e = Zs(t);
                        return e = "function" == typeof e ? e : r,
                        ui(vn(t, 1, Wo, !0), r, e)
                    }
                    ));
                    function ro(t) {
                        if (!t || !t.length)
                            return [];
                        var e = 0;
                        return t = Ae(t, (function(t) {
                            if (Wo(t))
                                return e = vr(t.length, e),
                                !0
                        }
                        )),
                        Je(e, (function(e) {
                            return Ne(t, Fe(e))
                        }
                        ))
                    }
                    function no(t, e) {
                        if (!t || !t.length)
                            return [];
                        var n = ro(t);
                        return null == e ? n : Ne(n, (function(t) {
                            return Se(e, r, t)
                        }
                        ))
                    }
                    var io = Jn((function(t, e) {
                        return Wo(t) ? hn(t, e) : []
                    }
                    ))
                      , so = Jn((function(t) {
                        return di(Ae(t, Wo))
                    }
                    ))
                      , oo = Jn((function(t) {
                        var e = Zs(t);
                        return Wo(e) && (e = r),
                        di(Ae(t, Wo), as(e, 2))
                    }
                    ))
                      , ao = Jn((function(t) {
                        var e = Zs(t);
                        return e = "function" == typeof e ? e : r,
                        di(Ae(t, Wo), r, e)
                    }
                    ))
                      , co = Jn(ro);
                    var uo = Jn((function(t) {
                        var e = t.length
                          , n = e > 1 ? t[e - 1] : r;
                        return n = "function" == typeof n ? (t.pop(),
                        n) : r,
                        no(t, n)
                    }
                    ));
                    function ho(t) {
                        var e = zr(t);
                        return e.__chain__ = !0,
                        e
                    }
                    function lo(t, e) {
                        return e(t)
                    }
                    var po = es((function(t) {
                        var e = t.length
                          , n = e ? t[0] : 0
                          , i = this.__wrapped__
                          , s = function(e) {
                            return sn(e, t)
                        };
                        return !(e > 1 || this.__actions__.length) && i instanceof Vr && ys(n) ? ((i = i.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                            func: lo,
                            args: [s],
                            thisArg: r
                        }),
                        new Hr(i,this.__chain__).thru((function(t) {
                            return e && !t.length && t.push(r),
                            t
                        }
                        ))) : this.thru(s)
                    }
                    ));
                    var fo = Ai((function(t, e, r) {
                        Dt.call(t, r) ? ++t[r] : nn(t, r, 1)
                    }
                    ));
                    var go = Mi(Hs)
                      , vo = Mi(Vs);
                    function yo(t, e) {
                        return (Ko(t) ? xe : ln)(t, as(e, 3))
                    }
                    function mo(t, e) {
                        return (Ko(t) ? Re : pn)(t, as(e, 3))
                    }
                    var wo = Ai((function(t, e, r) {
                        Dt.call(t, r) ? t[r].push(e) : nn(t, r, [e])
                    }
                    ));
                    var _o = Jn((function(t, e, r) {
                        var n = -1
                          , i = "function" == typeof e
                          , s = Fo(t) ? st(t.length) : [];
                        return ln(t, (function(t) {
                            s[++n] = i ? Se(e, t, r) : Cn(t, e, r)
                        }
                        )),
                        s
                    }
                    ))
                      , bo = Ai((function(t, e, r) {
                        nn(t, r, e)
                    }
                    ));
                    function Eo(t, e) {
                        return (Ko(t) ? Ne : zn)(t, as(e, 3))
                    }
                    var Io = Ai((function(t, e, r) {
                        t[r ? 0 : 1].push(e)
                    }
                    ), (function() {
                        return [[], []]
                    }
                    ));
                    var Po = Jn((function(t, e) {
                        if (null == t)
                            return [];
                        var r = e.length;
                        return r > 1 && ms(t, e[0], e[1]) ? e = [] : r > 2 && ms(e[0], e[1], e[2]) && (e = [e[0]]),
                        Kn(t, vn(e, 1), [])
                    }
                    ))
                      , So = le || function() {
                        return fe.Date.now()
                    }
                    ;
                    function Oo(t, e, n) {
                        return e = n ? r : e,
                        e = t && null == e ? t.length : e,
                        Qi(t, u, r, r, r, r, e)
                    }
                    function xo(t, e) {
                        var i;
                        if ("function" != typeof e)
                            throw new Ct(n);
                        return t = fa(t),
                        function() {
                            return --t > 0 && (i = e.apply(this, arguments)),
                            t <= 1 && (e = r),
                            i
                        }
                    }
                    var Ro = Jn((function(t, e, r) {
                        var n = 1;
                        if (r.length) {
                            var i = cr(r, os(Ro));
                            n |= a
                        }
                        return Qi(t, n, e, r, i)
                    }
                    ))
                      , Co = Jn((function(t, e, r) {
                        var n = 3;
                        if (r.length) {
                            var i = cr(r, os(Co));
                            n |= a
                        }
                        return Qi(e, n, t, r, i)
                    }
                    ));
                    function Ao(t, e, i) {
                        var s, o, a, c, u, h, l = 0, p = !1, f = !1, d = !0;
                        if ("function" != typeof t)
                            throw new Ct(n);
                        function g(e) {
                            var n = s
                              , i = o;
                            return s = o = r,
                            l = e,
                            c = t.apply(i, n)
                        }
                        function v(t) {
                            var n = t - h;
                            return h === r || n >= e || n < 0 || f && t - l >= a
                        }
                        function y() {
                            var t = So();
                            if (v(t))
                                return m(t);
                            u = Cs(y, function(t) {
                                var r = e - (t - h);
                                return f ? yr(r, a - (t - l)) : r
                            }(t))
                        }
                        function m(t) {
                            return u = r,
                            d && s ? g(t) : (s = o = r,
                            c)
                        }
                        function w() {
                            var t = So()
                              , n = v(t);
                            if (s = arguments,
                            o = this,
                            h = t,
                            n) {
                                if (u === r)
                                    return function(t) {
                                        return l = t,
                                        u = Cs(y, e),
                                        p ? g(t) : c
                                    }(h);
                                if (f)
                                    return bi(u),
                                    u = Cs(y, e),
                                    g(h)
                            }
                            return u === r && (u = Cs(y, e)),
                            c
                        }
                        return e = ga(e) || 0,
                        Xo(i) && (p = !!i.leading,
                        a = (f = "maxWait"in i) ? vr(ga(i.maxWait) || 0, e) : a,
                        d = "trailing"in i ? !!i.trailing : d),
                        w.cancel = function() {
                            u !== r && bi(u),
                            l = 0,
                            s = h = o = u = r
                        }
                        ,
                        w.flush = function() {
                            return u === r ? c : m(So())
                        }
                        ,
                        w
                    }
                    var jo = Jn((function(t, e) {
                        return un(t, 1, e)
                    }
                    ))
                      , To = Jn((function(t, e, r) {
                        return un(t, ga(e) || 0, r)
                    }
                    ));
                    function No(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e)
                            throw new Ct(n);
                        var r = function() {
                            var n = arguments
                              , i = e ? e.apply(this, n) : n[0]
                              , s = r.cache;
                            if (s.has(i))
                                return s.get(i);
                            var o = t.apply(this, n);
                            return r.cache = s.set(i, o) || s,
                            o
                        };
                        return r.cache = new (No.Cache || Fr),
                        r
                    }
                    function Lo(t) {
                        if ("function" != typeof t)
                            throw new Ct(n);
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                            }
                            return !t.apply(this, e)
                        }
                    }
                    No.Cache = Fr;
                    var Do = wi((function(t, e) {
                        var r = (e = 1 == e.length && Ko(e[0]) ? Ne(e[0], Ye(as())) : Ne(vn(e, 1), Ye(as()))).length;
                        return Jn((function(n) {
                            for (var i = -1, s = yr(n.length, r); ++i < s; )
                                n[i] = e[i].call(this, n[i]);
                            return Se(t, this, n)
                        }
                        ))
                    }
                    ))
                      , qo = Jn((function(t, e) {
                        var n = cr(e, os(qo));
                        return Qi(t, a, r, e, n)
                    }
                    ))
                      , Mo = Jn((function(t, e) {
                        var n = cr(e, os(Mo));
                        return Qi(t, c, r, e, n)
                    }
                    ))
                      , zo = es((function(t, e) {
                        return Qi(t, h, r, r, r, e)
                    }
                    ));
                    function ko(t, e) {
                        return t === e || t !== t && e !== e
                    }
                    var Uo = Fi(Sn)
                      , Ho = Fi((function(t, e) {
                        return t >= e
                    }
                    ))
                      , Vo = An(function() {
                        return arguments
                    }()) ? An : function(t) {
                        return ta(t) && Dt.call(t, "callee") && !Zt.call(t, "callee")
                    }
                      , Ko = st.isArray
                      , Bo = we ? Ye(we) : function(t) {
                        return ta(t) && Pn(t) == T
                    }
                    ;
                    function Fo(t) {
                        return null != t && $o(t.length) && !Qo(t)
                    }
                    function Wo(t) {
                        return ta(t) && Fo(t)
                    }
                    var Go = me || gc
                      , Zo = _e ? Ye(_e) : function(t) {
                        return ta(t) && Pn(t) == w
                    }
                    ;
                    function Jo(t) {
                        if (!ta(t))
                            return !1;
                        var e = Pn(t);
                        return e == _ || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !na(t)
                    }
                    function Qo(t) {
                        if (!Xo(t))
                            return !1;
                        var e = Pn(t);
                        return e == b || e == E || "[object AsyncFunction]" == e || "[object Proxy]" == e
                    }
                    function Yo(t) {
                        return "number" == typeof t && t == fa(t)
                    }
                    function $o(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= p
                    }
                    function Xo(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }
                    function ta(t) {
                        return null != t && "object" == typeof t
                    }
                    var ea = be ? Ye(be) : function(t) {
                        return ta(t) && fs(t) == I
                    }
                    ;
                    function ra(t) {
                        return "number" == typeof t || ta(t) && Pn(t) == P
                    }
                    function na(t) {
                        if (!ta(t) || Pn(t) != S)
                            return !1;
                        var e = Wt(t);
                        if (null === e)
                            return !0;
                        var r = Dt.call(e, "constructor") && e.constructor;
                        return "function" == typeof r && r instanceof r && Lt.call(r) == kt
                    }
                    var ia = Ee ? Ye(Ee) : function(t) {
                        return ta(t) && Pn(t) == x
                    }
                    ;
                    var sa = Ie ? Ye(Ie) : function(t) {
                        return ta(t) && fs(t) == R
                    }
                    ;
                    function oa(t) {
                        return "string" == typeof t || !Ko(t) && ta(t) && Pn(t) == C
                    }
                    function aa(t) {
                        return "symbol" == typeof t || ta(t) && Pn(t) == A
                    }
                    var ca = Pe ? Ye(Pe) : function(t) {
                        return ta(t) && $o(t.length) && !!oe[Pn(t)]
                    }
                    ;
                    var ua = Fi(Mn)
                      , ha = Fi((function(t, e) {
                        return t <= e
                    }
                    ));
                    function la(t) {
                        if (!t)
                            return [];
                        if (Fo(t))
                            return oa(t) ? lr(t) : Ri(t);
                        if (Yt && t[Yt])
                            return function(t) {
                                for (var e, r = []; !(e = t.next()).done; )
                                    r.push(e.value);
                                return r
                            }(t[Yt]());
                        var e = fs(t);
                        return (e == I ? or : e == R ? ur : ka)(t)
                    }
                    function pa(t) {
                        return t ? (t = ga(t)) === l || t === -l ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0 : 0 === t ? t : 0
                    }
                    function fa(t) {
                        var e = pa(t)
                          , r = e % 1;
                        return e === e ? r ? e - r : e : 0
                    }
                    function da(t) {
                        return t ? on(fa(t), 0, d) : 0
                    }
                    function ga(t) {
                        if ("number" == typeof t)
                            return t;
                        if (aa(t))
                            return f;
                        if (Xo(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = Xo(e) ? e + "" : e
                        }
                        if ("string" != typeof t)
                            return 0 === t ? t : +t;
                        t = Qe(t);
                        var r = gt.test(t);
                        return r || yt.test(t) ? he(t.slice(2), r ? 2 : 8) : dt.test(t) ? f : +t
                    }
                    function va(t) {
                        return Ci(t, ja(t))
                    }
                    function ya(t) {
                        return null == t ? "" : ci(t)
                    }
                    var ma = ji((function(t, e) {
                        if (Es(e) || Fo(e))
                            Ci(e, Aa(e), t);
                        else
                            for (var r in e)
                                Dt.call(e, r) && Xr(t, r, e[r])
                    }
                    ))
                      , wa = ji((function(t, e) {
                        Ci(e, ja(e), t)
                    }
                    ))
                      , _a = ji((function(t, e, r, n) {
                        Ci(e, ja(e), t, n)
                    }
                    ))
                      , ba = ji((function(t, e, r, n) {
                        Ci(e, Aa(e), t, n)
                    }
                    ))
                      , Ea = es(sn);
                    var Ia = Jn((function(t, e) {
                        t = Ot(t);
                        var n = -1
                          , i = e.length
                          , s = i > 2 ? e[2] : r;
                        for (s && ms(e[0], e[1], s) && (i = 1); ++n < i; )
                            for (var o = e[n], a = ja(o), c = -1, u = a.length; ++c < u; ) {
                                var h = a[c]
                                  , l = t[h];
                                (l === r || ko(l, Tt[h]) && !Dt.call(t, h)) && (t[h] = o[h])
                            }
                        return t
                    }
                    ))
                      , Pa = Jn((function(t) {
                        return t.push(r, $i),
                        Se(Na, r, t)
                    }
                    ));
                    function Sa(t, e, n) {
                        var i = null == t ? r : En(t, e);
                        return i === r ? n : i
                    }
                    function Oa(t, e) {
                        return null != t && ds(t, e, xn)
                    }
                    var xa = Ui((function(t, e, r) {
                        null != e && "function" != typeof e.toString && (e = zt.call(e)),
                        t[e] = r
                    }
                    ), Xa(rc))
                      , Ra = Ui((function(t, e, r) {
                        null != e && "function" != typeof e.toString && (e = zt.call(e)),
                        Dt.call(t, e) ? t[e].push(r) : t[e] = [r]
                    }
                    ), as)
                      , Ca = Jn(Cn);
                    function Aa(t) {
                        return Fo(t) ? Zr(t) : Dn(t)
                    }
                    function ja(t) {
                        return Fo(t) ? Zr(t, !0) : qn(t)
                    }
                    var Ta = ji((function(t, e, r) {
                        Hn(t, e, r)
                    }
                    ))
                      , Na = ji((function(t, e, r, n) {
                        Hn(t, e, r, n)
                    }
                    ))
                      , La = es((function(t, e) {
                        var r = {};
                        if (null == t)
                            return r;
                        var n = !1;
                        e = Ne(e, (function(e) {
                            return e = mi(e, t),
                            n || (n = e.length > 1),
                            e
                        }
                        )),
                        Ci(t, ns(t), r),
                        n && (r = an(r, 7, Xi));
                        for (var i = e.length; i--; )
                            hi(r, e[i]);
                        return r
                    }
                    ));
                    var Da = es((function(t, e) {
                        return null == t ? {} : function(t, e) {
                            return Bn(t, e, (function(e, r) {
                                return Oa(t, r)
                            }
                            ))
                        }(t, e)
                    }
                    ));
                    function qa(t, e) {
                        if (null == t)
                            return {};
                        var r = Ne(ns(t), (function(t) {
                            return [t]
                        }
                        ));
                        return e = as(e),
                        Bn(t, r, (function(t, r) {
                            return e(t, r[0])
                        }
                        ))
                    }
                    var Ma = Ji(Aa)
                      , za = Ji(ja);
                    function ka(t) {
                        return null == t ? [] : $e(t, Aa(t))
                    }
                    var Ua = Di((function(t, e, r) {
                        return e = e.toLowerCase(),
                        t + (r ? Ha(e) : e)
                    }
                    ));
                    function Ha(t) {
                        return Ja(ya(t).toLowerCase())
                    }
                    function Va(t) {
                        return (t = ya(t)) && t.replace(wt, rr).replace(Xt, "")
                    }
                    var Ka = Di((function(t, e, r) {
                        return t + (r ? "-" : "") + e.toLowerCase()
                    }
                    ))
                      , Ba = Di((function(t, e, r) {
                        return t + (r ? " " : "") + e.toLowerCase()
                    }
                    ))
                      , Fa = Li("toLowerCase");
                    var Wa = Di((function(t, e, r) {
                        return t + (r ? "_" : "") + e.toLowerCase()
                    }
                    ));
                    var Ga = Di((function(t, e, r) {
                        return t + (r ? " " : "") + Ja(e)
                    }
                    ));
                    var Za = Di((function(t, e, r) {
                        return t + (r ? " " : "") + e.toUpperCase()
                    }
                    ))
                      , Ja = Li("toUpperCase");
                    function Qa(t, e, n) {
                        return t = ya(t),
                        (e = n ? r : e) === r ? function(t) {
                            return ne.test(t)
                        }(t) ? function(t) {
                            return t.match(ee) || []
                        }(t) : function(t) {
                            return t.match(ut) || []
                        }(t) : t.match(e) || []
                    }
                    var Ya = Jn((function(t, e) {
                        try {
                            return Se(t, r, e)
                        } catch (n) {
                            return Jo(n) ? n : new It(n)
                        }
                    }
                    ))
                      , $a = es((function(t, e) {
                        return xe(e, (function(e) {
                            e = Ds(e),
                            nn(t, e, Ro(t[e], t))
                        }
                        )),
                        t
                    }
                    ));
                    function Xa(t) {
                        return function() {
                            return t
                        }
                    }
                    var tc = zi()
                      , ec = zi(!0);
                    function rc(t) {
                        return t
                    }
                    function nc(t) {
                        return Ln("function" == typeof t ? t : an(t, 1))
                    }
                    var ic = Jn((function(t, e) {
                        return function(r) {
                            return Cn(r, t, e)
                        }
                    }
                    ))
                      , sc = Jn((function(t, e) {
                        return function(r) {
                            return Cn(t, r, e)
                        }
                    }
                    ));
                    function oc(t, e, r) {
                        var n = Aa(e)
                          , i = bn(e, n);
                        null == r && (!Xo(e) || !i.length && n.length) && (r = e,
                        e = t,
                        t = this,
                        i = bn(e, Aa(e)));
                        var s = !(Xo(r) && "chain"in r) || !!r.chain
                          , o = Qo(t);
                        return xe(i, (function(r) {
                            var n = e[r];
                            t[r] = n,
                            o && (t.prototype[r] = function() {
                                var e = this.__chain__;
                                if (s || e) {
                                    var r = t(this.__wrapped__);
                                    return (r.__actions__ = Ri(this.__actions__)).push({
                                        func: n,
                                        args: arguments,
                                        thisArg: t
                                    }),
                                    r.__chain__ = e,
                                    r
                                }
                                return n.apply(t, Le([this.value()], arguments))
                            }
                            )
                        }
                        )),
                        t
                    }
                    function ac() {}
                    var cc = Vi(Ne)
                      , uc = Vi(Ce)
                      , hc = Vi(Me);
                    function lc(t) {
                        return ws(t) ? Fe(Ds(t)) : function(t) {
                            return function(e) {
                                return En(e, t)
                            }
                        }(t)
                    }
                    var pc = Bi()
                      , fc = Bi(!0);
                    function dc() {
                        return []
                    }
                    function gc() {
                        return !1
                    }
                    var vc = Hi((function(t, e) {
                        return t + e
                    }
                    ), 0)
                      , yc = Gi("ceil")
                      , mc = Hi((function(t, e) {
                        return t / e
                    }
                    ), 1)
                      , wc = Gi("floor");
                    var _c = Hi((function(t, e) {
                        return t * e
                    }
                    ), 1)
                      , bc = Gi("round")
                      , Ec = Hi((function(t, e) {
                        return t - e
                    }
                    ), 0);
                    return zr.after = function(t, e) {
                        if ("function" != typeof e)
                            throw new Ct(n);
                        return t = fa(t),
                        function() {
                            if (--t < 1)
                                return e.apply(this, arguments)
                        }
                    }
                    ,
                    zr.ary = Oo,
                    zr.assign = ma,
                    zr.assignIn = wa,
                    zr.assignInWith = _a,
                    zr.assignWith = ba,
                    zr.at = Ea,
                    zr.before = xo,
                    zr.bind = Ro,
                    zr.bindAll = $a,
                    zr.bindKey = Co,
                    zr.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var t = arguments[0];
                        return Ko(t) ? t : [t]
                    }
                    ,
                    zr.chain = ho,
                    zr.chunk = function(t, e, n) {
                        e = (n ? ms(t, e, n) : e === r) ? 1 : vr(fa(e), 0);
                        var i = null == t ? 0 : t.length;
                        if (!i || e < 1)
                            return [];
                        for (var s = 0, o = 0, a = st(de(i / e)); s < i; )
                            a[o++] = ri(t, s, s += e);
                        return a
                    }
                    ,
                    zr.compact = function(t) {
                        for (var e = -1, r = null == t ? 0 : t.length, n = 0, i = []; ++e < r; ) {
                            var s = t[e];
                            s && (i[n++] = s)
                        }
                        return i
                    }
                    ,
                    zr.concat = function() {
                        var t = arguments.length;
                        if (!t)
                            return [];
                        for (var e = st(t - 1), r = arguments[0], n = t; n--; )
                            e[n - 1] = arguments[n];
                        return Le(Ko(r) ? Ri(r) : [r], vn(e, 1))
                    }
                    ,
                    zr.cond = function(t) {
                        var e = null == t ? 0 : t.length
                          , r = as();
                        return t = e ? Ne(t, (function(t) {
                            if ("function" != typeof t[1])
                                throw new Ct(n);
                            return [r(t[0]), t[1]]
                        }
                        )) : [],
                        Jn((function(r) {
                            for (var n = -1; ++n < e; ) {
                                var i = t[n];
                                if (Se(i[0], this, r))
                                    return Se(i[1], this, r)
                            }
                        }
                        ))
                    }
                    ,
                    zr.conforms = function(t) {
                        return function(t) {
                            var e = Aa(t);
                            return function(r) {
                                return cn(r, t, e)
                            }
                        }(an(t, 1))
                    }
                    ,
                    zr.constant = Xa,
                    zr.countBy = fo,
                    zr.create = function(t, e) {
                        var r = kr(t);
                        return null == e ? r : rn(r, e)
                    }
                    ,
                    zr.curry = function t(e, n, i) {
                        var s = Qi(e, 8, r, r, r, r, r, n = i ? r : n);
                        return s.placeholder = t.placeholder,
                        s
                    }
                    ,
                    zr.curryRight = function t(e, n, i) {
                        var s = Qi(e, o, r, r, r, r, r, n = i ? r : n);
                        return s.placeholder = t.placeholder,
                        s
                    }
                    ,
                    zr.debounce = Ao,
                    zr.defaults = Ia,
                    zr.defaultsDeep = Pa,
                    zr.defer = jo,
                    zr.delay = To,
                    zr.difference = zs,
                    zr.differenceBy = ks,
                    zr.differenceWith = Us,
                    zr.drop = function(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? ri(t, (e = n || e === r ? 1 : fa(e)) < 0 ? 0 : e, i) : []
                    }
                    ,
                    zr.dropRight = function(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? ri(t, 0, (e = i - (e = n || e === r ? 1 : fa(e))) < 0 ? 0 : e) : []
                    }
                    ,
                    zr.dropRightWhile = function(t, e) {
                        return t && t.length ? pi(t, as(e, 3), !0, !0) : []
                    }
                    ,
                    zr.dropWhile = function(t, e) {
                        return t && t.length ? pi(t, as(e, 3), !0) : []
                    }
                    ,
                    zr.fill = function(t, e, n, i) {
                        var s = null == t ? 0 : t.length;
                        return s ? (n && "number" != typeof n && ms(t, e, n) && (n = 0,
                        i = s),
                        function(t, e, n, i) {
                            var s = t.length;
                            for ((n = fa(n)) < 0 && (n = -n > s ? 0 : s + n),
                            (i = i === r || i > s ? s : fa(i)) < 0 && (i += s),
                            i = n > i ? 0 : da(i); n < i; )
                                t[n++] = e;
                            return t
                        }(t, e, n, i)) : []
                    }
                    ,
                    zr.filter = function(t, e) {
                        return (Ko(t) ? Ae : gn)(t, as(e, 3))
                    }
                    ,
                    zr.flatMap = function(t, e) {
                        return vn(Eo(t, e), 1)
                    }
                    ,
                    zr.flatMapDeep = function(t, e) {
                        return vn(Eo(t, e), l)
                    }
                    ,
                    zr.flatMapDepth = function(t, e, n) {
                        return n = n === r ? 1 : fa(n),
                        vn(Eo(t, e), n)
                    }
                    ,
                    zr.flatten = Ks,
                    zr.flattenDeep = function(t) {
                        return (null == t ? 0 : t.length) ? vn(t, l) : []
                    }
                    ,
                    zr.flattenDepth = function(t, e) {
                        return (null == t ? 0 : t.length) ? vn(t, e = e === r ? 1 : fa(e)) : []
                    }
                    ,
                    zr.flip = function(t) {
                        return Qi(t, 512)
                    }
                    ,
                    zr.flow = tc,
                    zr.flowRight = ec,
                    zr.fromPairs = function(t) {
                        for (var e = -1, r = null == t ? 0 : t.length, n = {}; ++e < r; ) {
                            var i = t[e];
                            n[i[0]] = i[1]
                        }
                        return n
                    }
                    ,
                    zr.functions = function(t) {
                        return null == t ? [] : bn(t, Aa(t))
                    }
                    ,
                    zr.functionsIn = function(t) {
                        return null == t ? [] : bn(t, ja(t))
                    }
                    ,
                    zr.groupBy = wo,
                    zr.initial = function(t) {
                        return (null == t ? 0 : t.length) ? ri(t, 0, -1) : []
                    }
                    ,
                    zr.intersection = Fs,
                    zr.intersectionBy = Ws,
                    zr.intersectionWith = Gs,
                    zr.invert = xa,
                    zr.invertBy = Ra,
                    zr.invokeMap = _o,
                    zr.iteratee = nc,
                    zr.keyBy = bo,
                    zr.keys = Aa,
                    zr.keysIn = ja,
                    zr.map = Eo,
                    zr.mapKeys = function(t, e) {
                        var r = {};
                        return e = as(e, 3),
                        wn(t, (function(t, n, i) {
                            nn(r, e(t, n, i), t)
                        }
                        )),
                        r
                    }
                    ,
                    zr.mapValues = function(t, e) {
                        var r = {};
                        return e = as(e, 3),
                        wn(t, (function(t, n, i) {
                            nn(r, n, e(t, n, i))
                        }
                        )),
                        r
                    }
                    ,
                    zr.matches = function(t) {
                        return kn(an(t, 1))
                    }
                    ,
                    zr.matchesProperty = function(t, e) {
                        return Un(t, an(e, 1))
                    }
                    ,
                    zr.memoize = No,
                    zr.merge = Ta,
                    zr.mergeWith = Na,
                    zr.method = ic,
                    zr.methodOf = sc,
                    zr.mixin = oc,
                    zr.negate = Lo,
                    zr.nthArg = function(t) {
                        return t = fa(t),
                        Jn((function(e) {
                            return Vn(e, t)
                        }
                        ))
                    }
                    ,
                    zr.omit = La,
                    zr.omitBy = function(t, e) {
                        return qa(t, Lo(as(e)))
                    }
                    ,
                    zr.once = function(t) {
                        return xo(2, t)
                    }
                    ,
                    zr.orderBy = function(t, e, n, i) {
                        return null == t ? [] : (Ko(e) || (e = null == e ? [] : [e]),
                        Ko(n = i ? r : n) || (n = null == n ? [] : [n]),
                        Kn(t, e, n))
                    }
                    ,
                    zr.over = cc,
                    zr.overArgs = Do,
                    zr.overEvery = uc,
                    zr.overSome = hc,
                    zr.partial = qo,
                    zr.partialRight = Mo,
                    zr.partition = Io,
                    zr.pick = Da,
                    zr.pickBy = qa,
                    zr.property = lc,
                    zr.propertyOf = function(t) {
                        return function(e) {
                            return null == t ? r : En(t, e)
                        }
                    }
                    ,
                    zr.pull = Js,
                    zr.pullAll = Qs,
                    zr.pullAllBy = function(t, e, r) {
                        return t && t.length && e && e.length ? Fn(t, e, as(r, 2)) : t
                    }
                    ,
                    zr.pullAllWith = function(t, e, n) {
                        return t && t.length && e && e.length ? Fn(t, e, r, n) : t
                    }
                    ,
                    zr.pullAt = Ys,
                    zr.range = pc,
                    zr.rangeRight = fc,
                    zr.rearg = zo,
                    zr.reject = function(t, e) {
                        return (Ko(t) ? Ae : gn)(t, Lo(as(e, 3)))
                    }
                    ,
                    zr.remove = function(t, e) {
                        var r = [];
                        if (!t || !t.length)
                            return r;
                        var n = -1
                          , i = []
                          , s = t.length;
                        for (e = as(e, 3); ++n < s; ) {
                            var o = t[n];
                            e(o, n, t) && (r.push(o),
                            i.push(n))
                        }
                        return Wn(t, i),
                        r
                    }
                    ,
                    zr.rest = function(t, e) {
                        if ("function" != typeof t)
                            throw new Ct(n);
                        return Jn(t, e = e === r ? e : fa(e))
                    }
                    ,
                    zr.reverse = $s,
                    zr.sampleSize = function(t, e, n) {
                        return e = (n ? ms(t, e, n) : e === r) ? 1 : fa(e),
                        (Ko(t) ? Qr : Yn)(t, e)
                    }
                    ,
                    zr.set = function(t, e, r) {
                        return null == t ? t : $n(t, e, r)
                    }
                    ,
                    zr.setWith = function(t, e, n, i) {
                        return i = "function" == typeof i ? i : r,
                        null == t ? t : $n(t, e, n, i)
                    }
                    ,
                    zr.shuffle = function(t) {
                        return (Ko(t) ? Yr : ei)(t)
                    }
                    ,
                    zr.slice = function(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n && "number" != typeof n && ms(t, e, n) ? (e = 0,
                        n = i) : (e = null == e ? 0 : fa(e),
                        n = n === r ? i : fa(n)),
                        ri(t, e, n)) : []
                    }
                    ,
                    zr.sortBy = Po,
                    zr.sortedUniq = function(t) {
                        return t && t.length ? oi(t) : []
                    }
                    ,
                    zr.sortedUniqBy = function(t, e) {
                        return t && t.length ? oi(t, as(e, 2)) : []
                    }
                    ,
                    zr.split = function(t, e, n) {
                        return n && "number" != typeof n && ms(t, e, n) && (e = n = r),
                        (n = n === r ? d : n >>> 0) ? (t = ya(t)) && ("string" == typeof e || null != e && !ia(e)) && (!(e = ci(e)) && sr(t)) ? _i(lr(t), 0, n) : t.split(e, n) : []
                    }
                    ,
                    zr.spread = function(t, e) {
                        if ("function" != typeof t)
                            throw new Ct(n);
                        return e = null == e ? 0 : vr(fa(e), 0),
                        Jn((function(r) {
                            var n = r[e]
                              , i = _i(r, 0, e);
                            return n && Le(i, n),
                            Se(t, this, i)
                        }
                        ))
                    }
                    ,
                    zr.tail = function(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? ri(t, 1, e) : []
                    }
                    ,
                    zr.take = function(t, e, n) {
                        return t && t.length ? ri(t, 0, (e = n || e === r ? 1 : fa(e)) < 0 ? 0 : e) : []
                    }
                    ,
                    zr.takeRight = function(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        return i ? ri(t, (e = i - (e = n || e === r ? 1 : fa(e))) < 0 ? 0 : e, i) : []
                    }
                    ,
                    zr.takeRightWhile = function(t, e) {
                        return t && t.length ? pi(t, as(e, 3), !1, !0) : []
                    }
                    ,
                    zr.takeWhile = function(t, e) {
                        return t && t.length ? pi(t, as(e, 3)) : []
                    }
                    ,
                    zr.tap = function(t, e) {
                        return e(t),
                        t
                    }
                    ,
                    zr.throttle = function(t, e, r) {
                        var i = !0
                          , s = !0;
                        if ("function" != typeof t)
                            throw new Ct(n);
                        return Xo(r) && (i = "leading"in r ? !!r.leading : i,
                        s = "trailing"in r ? !!r.trailing : s),
                        Ao(t, e, {
                            leading: i,
                            maxWait: e,
                            trailing: s
                        })
                    }
                    ,
                    zr.thru = lo,
                    zr.toArray = la,
                    zr.toPairs = Ma,
                    zr.toPairsIn = za,
                    zr.toPath = function(t) {
                        return Ko(t) ? Ne(t, Ds) : aa(t) ? [t] : Ri(Ls(ya(t)))
                    }
                    ,
                    zr.toPlainObject = va,
                    zr.transform = function(t, e, r) {
                        var n = Ko(t)
                          , i = n || Go(t) || ca(t);
                        if (e = as(e, 4),
                        null == r) {
                            var s = t && t.constructor;
                            r = i ? n ? new s : [] : Xo(t) && Qo(s) ? kr(Wt(t)) : {}
                        }
                        return (i ? xe : wn)(t, (function(t, n, i) {
                            return e(r, t, n, i)
                        }
                        )),
                        r
                    }
                    ,
                    zr.unary = function(t) {
                        return Oo(t, 1)
                    }
                    ,
                    zr.union = Xs,
                    zr.unionBy = to,
                    zr.unionWith = eo,
                    zr.uniq = function(t) {
                        return t && t.length ? ui(t) : []
                    }
                    ,
                    zr.uniqBy = function(t, e) {
                        return t && t.length ? ui(t, as(e, 2)) : []
                    }
                    ,
                    zr.uniqWith = function(t, e) {
                        return e = "function" == typeof e ? e : r,
                        t && t.length ? ui(t, r, e) : []
                    }
                    ,
                    zr.unset = function(t, e) {
                        return null == t || hi(t, e)
                    }
                    ,
                    zr.unzip = ro,
                    zr.unzipWith = no,
                    zr.update = function(t, e, r) {
                        return null == t ? t : li(t, e, yi(r))
                    }
                    ,
                    zr.updateWith = function(t, e, n, i) {
                        return i = "function" == typeof i ? i : r,
                        null == t ? t : li(t, e, yi(n), i)
                    }
                    ,
                    zr.values = ka,
                    zr.valuesIn = function(t) {
                        return null == t ? [] : $e(t, ja(t))
                    }
                    ,
                    zr.without = io,
                    zr.words = Qa,
                    zr.wrap = function(t, e) {
                        return qo(yi(e), t)
                    }
                    ,
                    zr.xor = so,
                    zr.xorBy = oo,
                    zr.xorWith = ao,
                    zr.zip = co,
                    zr.zipObject = function(t, e) {
                        return gi(t || [], e || [], Xr)
                    }
                    ,
                    zr.zipObjectDeep = function(t, e) {
                        return gi(t || [], e || [], $n)
                    }
                    ,
                    zr.zipWith = uo,
                    zr.entries = Ma,
                    zr.entriesIn = za,
                    zr.extend = wa,
                    zr.extendWith = _a,
                    oc(zr, zr),
                    zr.add = vc,
                    zr.attempt = Ya,
                    zr.camelCase = Ua,
                    zr.capitalize = Ha,
                    zr.ceil = yc,
                    zr.clamp = function(t, e, n) {
                        return n === r && (n = e,
                        e = r),
                        n !== r && (n = (n = ga(n)) === n ? n : 0),
                        e !== r && (e = (e = ga(e)) === e ? e : 0),
                        on(ga(t), e, n)
                    }
                    ,
                    zr.clone = function(t) {
                        return an(t, 4)
                    }
                    ,
                    zr.cloneDeep = function(t) {
                        return an(t, 5)
                    }
                    ,
                    zr.cloneDeepWith = function(t, e) {
                        return an(t, 5, e = "function" == typeof e ? e : r)
                    }
                    ,
                    zr.cloneWith = function(t, e) {
                        return an(t, 4, e = "function" == typeof e ? e : r)
                    }
                    ,
                    zr.conformsTo = function(t, e) {
                        return null == e || cn(t, e, Aa(e))
                    }
                    ,
                    zr.deburr = Va,
                    zr.defaultTo = function(t, e) {
                        return null == t || t !== t ? e : t
                    }
                    ,
                    zr.divide = mc,
                    zr.endsWith = function(t, e, n) {
                        t = ya(t),
                        e = ci(e);
                        var i = t.length
                          , s = n = n === r ? i : on(fa(n), 0, i);
                        return (n -= e.length) >= 0 && t.slice(n, s) == e
                    }
                    ,
                    zr.eq = ko,
                    zr.escape = function(t) {
                        return (t = ya(t)) && J.test(t) ? t.replace(G, nr) : t
                    }
                    ,
                    zr.escapeRegExp = function(t) {
                        return (t = ya(t)) && nt.test(t) ? t.replace(rt, "\\$&") : t
                    }
                    ,
                    zr.every = function(t, e, n) {
                        var i = Ko(t) ? Ce : fn;
                        return n && ms(t, e, n) && (e = r),
                        i(t, as(e, 3))
                    }
                    ,
                    zr.find = go,
                    zr.findIndex = Hs,
                    zr.findKey = function(t, e) {
                        return ke(t, as(e, 3), wn)
                    }
                    ,
                    zr.findLast = vo,
                    zr.findLastIndex = Vs,
                    zr.findLastKey = function(t, e) {
                        return ke(t, as(e, 3), _n)
                    }
                    ,
                    zr.floor = wc,
                    zr.forEach = yo,
                    zr.forEachRight = mo,
                    zr.forIn = function(t, e) {
                        return null == t ? t : yn(t, as(e, 3), ja)
                    }
                    ,
                    zr.forInRight = function(t, e) {
                        return null == t ? t : mn(t, as(e, 3), ja)
                    }
                    ,
                    zr.forOwn = function(t, e) {
                        return t && wn(t, as(e, 3))
                    }
                    ,
                    zr.forOwnRight = function(t, e) {
                        return t && _n(t, as(e, 3))
                    }
                    ,
                    zr.get = Sa,
                    zr.gt = Uo,
                    zr.gte = Ho,
                    zr.has = function(t, e) {
                        return null != t && ds(t, e, On)
                    }
                    ,
                    zr.hasIn = Oa,
                    zr.head = Bs,
                    zr.identity = rc,
                    zr.includes = function(t, e, r, n) {
                        t = Fo(t) ? t : ka(t),
                        r = r && !n ? fa(r) : 0;
                        var i = t.length;
                        return r < 0 && (r = vr(i + r, 0)),
                        oa(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && He(t, e, r) > -1
                    }
                    ,
                    zr.indexOf = function(t, e, r) {
                        var n = null == t ? 0 : t.length;
                        if (!n)
                            return -1;
                        var i = null == r ? 0 : fa(r);
                        return i < 0 && (i = vr(n + i, 0)),
                        He(t, e, i)
                    }
                    ,
                    zr.inRange = function(t, e, n) {
                        return e = pa(e),
                        n === r ? (n = e,
                        e = 0) : n = pa(n),
                        function(t, e, r) {
                            return t >= yr(e, r) && t < vr(e, r)
                        }(t = ga(t), e, n)
                    }
                    ,
                    zr.invoke = Ca,
                    zr.isArguments = Vo,
                    zr.isArray = Ko,
                    zr.isArrayBuffer = Bo,
                    zr.isArrayLike = Fo,
                    zr.isArrayLikeObject = Wo,
                    zr.isBoolean = function(t) {
                        return !0 === t || !1 === t || ta(t) && Pn(t) == m
                    }
                    ,
                    zr.isBuffer = Go,
                    zr.isDate = Zo,
                    zr.isElement = function(t) {
                        return ta(t) && 1 === t.nodeType && !na(t)
                    }
                    ,
                    zr.isEmpty = function(t) {
                        if (null == t)
                            return !0;
                        if (Fo(t) && (Ko(t) || "string" == typeof t || "function" == typeof t.splice || Go(t) || ca(t) || Vo(t)))
                            return !t.length;
                        var e = fs(t);
                        if (e == I || e == R)
                            return !t.size;
                        if (Es(t))
                            return !Dn(t).length;
                        for (var r in t)
                            if (Dt.call(t, r))
                                return !1;
                        return !0
                    }
                    ,
                    zr.isEqual = function(t, e) {
                        return jn(t, e)
                    }
                    ,
                    zr.isEqualWith = function(t, e, n) {
                        var i = (n = "function" == typeof n ? n : r) ? n(t, e) : r;
                        return i === r ? jn(t, e, r, n) : !!i
                    }
                    ,
                    zr.isError = Jo,
                    zr.isFinite = function(t) {
                        return "number" == typeof t && ze(t)
                    }
                    ,
                    zr.isFunction = Qo,
                    zr.isInteger = Yo,
                    zr.isLength = $o,
                    zr.isMap = ea,
                    zr.isMatch = function(t, e) {
                        return t === e || Tn(t, e, us(e))
                    }
                    ,
                    zr.isMatchWith = function(t, e, n) {
                        return n = "function" == typeof n ? n : r,
                        Tn(t, e, us(e), n)
                    }
                    ,
                    zr.isNaN = function(t) {
                        return ra(t) && t != +t
                    }
                    ,
                    zr.isNative = function(t) {
                        if (bs(t))
                            throw new It("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return Nn(t)
                    }
                    ,
                    zr.isNil = function(t) {
                        return null == t
                    }
                    ,
                    zr.isNull = function(t) {
                        return null === t
                    }
                    ,
                    zr.isNumber = ra,
                    zr.isObject = Xo,
                    zr.isObjectLike = ta,
                    zr.isPlainObject = na,
                    zr.isRegExp = ia,
                    zr.isSafeInteger = function(t) {
                        return Yo(t) && t >= -p && t <= p
                    }
                    ,
                    zr.isSet = sa,
                    zr.isString = oa,
                    zr.isSymbol = aa,
                    zr.isTypedArray = ca,
                    zr.isUndefined = function(t) {
                        return t === r
                    }
                    ,
                    zr.isWeakMap = function(t) {
                        return ta(t) && fs(t) == j
                    }
                    ,
                    zr.isWeakSet = function(t) {
                        return ta(t) && "[object WeakSet]" == Pn(t)
                    }
                    ,
                    zr.join = function(t, e) {
                        return null == t ? "" : We.call(t, e)
                    }
                    ,
                    zr.kebabCase = Ka,
                    zr.last = Zs,
                    zr.lastIndexOf = function(t, e, n) {
                        var i = null == t ? 0 : t.length;
                        if (!i)
                            return -1;
                        var s = i;
                        return n !== r && (s = (s = fa(n)) < 0 ? vr(i + s, 0) : yr(s, i - 1)),
                        e === e ? function(t, e, r) {
                            for (var n = r + 1; n--; )
                                if (t[n] === e)
                                    return n;
                            return n
                        }(t, e, s) : Ue(t, Ke, s, !0)
                    }
                    ,
                    zr.lowerCase = Ba,
                    zr.lowerFirst = Fa,
                    zr.lt = ua,
                    zr.lte = ha,
                    zr.max = function(t) {
                        return t && t.length ? dn(t, rc, Sn) : r
                    }
                    ,
                    zr.maxBy = function(t, e) {
                        return t && t.length ? dn(t, as(e, 2), Sn) : r
                    }
                    ,
                    zr.mean = function(t) {
                        return Be(t, rc)
                    }
                    ,
                    zr.meanBy = function(t, e) {
                        return Be(t, as(e, 2))
                    }
                    ,
                    zr.min = function(t) {
                        return t && t.length ? dn(t, rc, Mn) : r
                    }
                    ,
                    zr.minBy = function(t, e) {
                        return t && t.length ? dn(t, as(e, 2), Mn) : r
                    }
                    ,
                    zr.stubArray = dc,
                    zr.stubFalse = gc,
                    zr.stubObject = function() {
                        return {}
                    }
                    ,
                    zr.stubString = function() {
                        return ""
                    }
                    ,
                    zr.stubTrue = function() {
                        return !0
                    }
                    ,
                    zr.multiply = _c,
                    zr.nth = function(t, e) {
                        return t && t.length ? Vn(t, fa(e)) : r
                    }
                    ,
                    zr.noConflict = function() {
                        return fe._ === this && (fe._ = Ut),
                        this
                    }
                    ,
                    zr.noop = ac,
                    zr.now = So,
                    zr.pad = function(t, e, r) {
                        t = ya(t);
                        var n = (e = fa(e)) ? hr(t) : 0;
                        if (!e || n >= e)
                            return t;
                        var i = (e - n) / 2;
                        return Ki(ge(i), r) + t + Ki(de(i), r)
                    }
                    ,
                    zr.padEnd = function(t, e, r) {
                        t = ya(t);
                        var n = (e = fa(e)) ? hr(t) : 0;
                        return e && n < e ? t + Ki(e - n, r) : t
                    }
                    ,
                    zr.padStart = function(t, e, r) {
                        t = ya(t);
                        var n = (e = fa(e)) ? hr(t) : 0;
                        return e && n < e ? Ki(e - n, r) + t : t
                    }
                    ,
                    zr.parseInt = function(t, e, r) {
                        return r || null == e ? e = 0 : e && (e = +e),
                        wr(ya(t).replace(it, ""), e || 0)
                    }
                    ,
                    zr.random = function(t, e, n) {
                        if (n && "boolean" != typeof n && ms(t, e, n) && (e = n = r),
                        n === r && ("boolean" == typeof e ? (n = e,
                        e = r) : "boolean" == typeof t && (n = t,
                        t = r)),
                        t === r && e === r ? (t = 0,
                        e = 1) : (t = pa(t),
                        e === r ? (e = t,
                        t = 0) : e = pa(e)),
                        t > e) {
                            var i = t;
                            t = e,
                            e = i
                        }
                        if (n || t % 1 || e % 1) {
                            var s = _r();
                            return yr(t + s * (e - t + ue("1e-" + ((s + "").length - 1))), e)
                        }
                        return Gn(t, e)
                    }
                    ,
                    zr.reduce = function(t, e, r) {
                        var n = Ko(t) ? De : Ge
                          , i = arguments.length < 3;
                        return n(t, as(e, 4), r, i, ln)
                    }
                    ,
                    zr.reduceRight = function(t, e, r) {
                        var n = Ko(t) ? qe : Ge
                          , i = arguments.length < 3;
                        return n(t, as(e, 4), r, i, pn)
                    }
                    ,
                    zr.repeat = function(t, e, n) {
                        return e = (n ? ms(t, e, n) : e === r) ? 1 : fa(e),
                        Zn(ya(t), e)
                    }
                    ,
                    zr.replace = function() {
                        var t = arguments
                          , e = ya(t[0]);
                        return t.length < 3 ? e : e.replace(t[1], t[2])
                    }
                    ,
                    zr.result = function(t, e, n) {
                        var i = -1
                          , s = (e = mi(e, t)).length;
                        for (s || (s = 1,
                        t = r); ++i < s; ) {
                            var o = null == t ? r : t[Ds(e[i])];
                            o === r && (i = s,
                            o = n),
                            t = Qo(o) ? o.call(t) : o
                        }
                        return t
                    }
                    ,
                    zr.round = bc,
                    zr.runInContext = t,
                    zr.sample = function(t) {
                        return (Ko(t) ? Jr : Qn)(t)
                    }
                    ,
                    zr.size = function(t) {
                        if (null == t)
                            return 0;
                        if (Fo(t))
                            return oa(t) ? hr(t) : t.length;
                        var e = fs(t);
                        return e == I || e == R ? t.size : Dn(t).length
                    }
                    ,
                    zr.snakeCase = Wa,
                    zr.some = function(t, e, n) {
                        var i = Ko(t) ? Me : ni;
                        return n && ms(t, e, n) && (e = r),
                        i(t, as(e, 3))
                    }
                    ,
                    zr.sortedIndex = function(t, e) {
                        return ii(t, e)
                    }
                    ,
                    zr.sortedIndexBy = function(t, e, r) {
                        return si(t, e, as(r, 2))
                    }
                    ,
                    zr.sortedIndexOf = function(t, e) {
                        var r = null == t ? 0 : t.length;
                        if (r) {
                            var n = ii(t, e);
                            if (n < r && ko(t[n], e))
                                return n
                        }
                        return -1
                    }
                    ,
                    zr.sortedLastIndex = function(t, e) {
                        return ii(t, e, !0)
                    }
                    ,
                    zr.sortedLastIndexBy = function(t, e, r) {
                        return si(t, e, as(r, 2), !0)
                    }
                    ,
                    zr.sortedLastIndexOf = function(t, e) {
                        if (null == t ? 0 : t.length) {
                            var r = ii(t, e, !0) - 1;
                            if (ko(t[r], e))
                                return r
                        }
                        return -1
                    }
                    ,
                    zr.startCase = Ga,
                    zr.startsWith = function(t, e, r) {
                        return t = ya(t),
                        r = null == r ? 0 : on(fa(r), 0, t.length),
                        e = ci(e),
                        t.slice(r, r + e.length) == e
                    }
                    ,
                    zr.subtract = Ec,
                    zr.sum = function(t) {
                        return t && t.length ? Ze(t, rc) : 0
                    }
                    ,
                    zr.sumBy = function(t, e) {
                        return t && t.length ? Ze(t, as(e, 2)) : 0
                    }
                    ,
                    zr.template = function(t, e, n) {
                        var i = zr.templateSettings;
                        n && ms(t, e, n) && (e = r),
                        t = ya(t),
                        e = _a({}, e, i, Yi);
                        var s, o, a = _a({}, e.imports, i.imports, Yi), c = Aa(a), u = $e(a, c), h = 0, l = e.interpolate || _t, p = "__p += '", f = xt((e.escape || _t).source + "|" + l.source + "|" + (l === $ ? pt : _t).source + "|" + (e.evaluate || _t).source + "|$", "g"), d = "//# sourceURL=" + (Dt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++se + "]") + "\n";
                        t.replace(f, (function(e, r, n, i, a, c) {
                            return n || (n = i),
                            p += t.slice(h, c).replace(bt, ir),
                            r && (s = !0,
                            p += "' +\n__e(" + r + ") +\n'"),
                            a && (o = !0,
                            p += "';\n" + a + ";\n__p += '"),
                            n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                            h = c + e.length,
                            e
                        }
                        )),
                        p += "';\n";
                        var g = Dt.call(e, "variable") && e.variable;
                        if (g) {
                            if (ht.test(g))
                                throw new It("Invalid `variable` option passed into `_.template`")
                        } else
                            p = "with (obj) {\n" + p + "\n}\n";
                        p = (o ? p.replace(K, "") : p).replace(B, "$1").replace(F, "$1;"),
                        p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                        var v = Ya((function() {
                            return Pt(c, d + "return " + p).apply(r, u)
                        }
                        ));
                        if (v.source = p,
                        Jo(v))
                            throw v;
                        return v
                    }
                    ,
                    zr.times = function(t, e) {
                        if ((t = fa(t)) < 1 || t > p)
                            return [];
                        var r = d
                          , n = yr(t, d);
                        e = as(e),
                        t -= d;
                        for (var i = Je(n, e); ++r < t; )
                            e(r);
                        return i
                    }
                    ,
                    zr.toFinite = pa,
                    zr.toInteger = fa,
                    zr.toLength = da,
                    zr.toLower = function(t) {
                        return ya(t).toLowerCase()
                    }
                    ,
                    zr.toNumber = ga,
                    zr.toSafeInteger = function(t) {
                        return t ? on(fa(t), -p, p) : 0 === t ? t : 0
                    }
                    ,
                    zr.toString = ya,
                    zr.toUpper = function(t) {
                        return ya(t).toUpperCase()
                    }
                    ,
                    zr.trim = function(t, e, n) {
                        if ((t = ya(t)) && (n || e === r))
                            return Qe(t);
                        if (!t || !(e = ci(e)))
                            return t;
                        var i = lr(t)
                          , s = lr(e);
                        return _i(i, tr(i, s), er(i, s) + 1).join("")
                    }
                    ,
                    zr.trimEnd = function(t, e, n) {
                        if ((t = ya(t)) && (n || e === r))
                            return t.slice(0, pr(t) + 1);
                        if (!t || !(e = ci(e)))
                            return t;
                        var i = lr(t);
                        return _i(i, 0, er(i, lr(e)) + 1).join("")
                    }
                    ,
                    zr.trimStart = function(t, e, n) {
                        if ((t = ya(t)) && (n || e === r))
                            return t.replace(it, "");
                        if (!t || !(e = ci(e)))
                            return t;
                        var i = lr(t);
                        return _i(i, tr(i, lr(e))).join("")
                    }
                    ,
                    zr.truncate = function(t, e) {
                        var n = 30
                          , i = "...";
                        if (Xo(e)) {
                            var s = "separator"in e ? e.separator : s;
                            n = "length"in e ? fa(e.length) : n,
                            i = "omission"in e ? ci(e.omission) : i
                        }
                        var o = (t = ya(t)).length;
                        if (sr(t)) {
                            var a = lr(t);
                            o = a.length
                        }
                        if (n >= o)
                            return t;
                        var c = n - hr(i);
                        if (c < 1)
                            return i;
                        var u = a ? _i(a, 0, c).join("") : t.slice(0, c);
                        if (s === r)
                            return u + i;
                        if (a && (c += u.length - c),
                        ia(s)) {
                            if (t.slice(c).search(s)) {
                                var h, l = u;
                                for (s.global || (s = xt(s.source, ya(ft.exec(s)) + "g")),
                                s.lastIndex = 0; h = s.exec(l); )
                                    var p = h.index;
                                u = u.slice(0, p === r ? c : p)
                            }
                        } else if (t.indexOf(ci(s), c) != c) {
                            var f = u.lastIndexOf(s);
                            f > -1 && (u = u.slice(0, f))
                        }
                        return u + i
                    }
                    ,
                    zr.unescape = function(t) {
                        return (t = ya(t)) && Z.test(t) ? t.replace(W, fr) : t
                    }
                    ,
                    zr.uniqueId = function(t) {
                        var e = ++qt;
                        return ya(t) + e
                    }
                    ,
                    zr.upperCase = Za,
                    zr.upperFirst = Ja,
                    zr.each = yo,
                    zr.eachRight = mo,
                    zr.first = Bs,
                    oc(zr, function() {
                        var t = {};
                        return wn(zr, (function(e, r) {
                            Dt.call(zr.prototype, r) || (t[r] = e)
                        }
                        )),
                        t
                    }(), {
                        chain: !1
                    }),
                    zr.VERSION = "4.17.21",
                    xe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                        zr[t].placeholder = zr
                    }
                    )),
                    xe(["drop", "take"], (function(t, e) {
                        Vr.prototype[t] = function(n) {
                            n = n === r ? 1 : vr(fa(n), 0);
                            var i = this.__filtered__ && !e ? new Vr(this) : this.clone();
                            return i.__filtered__ ? i.__takeCount__ = yr(n, i.__takeCount__) : i.__views__.push({
                                size: yr(n, d),
                                type: t + (i.__dir__ < 0 ? "Right" : "")
                            }),
                            i
                        }
                        ,
                        Vr.prototype[t + "Right"] = function(e) {
                            return this.reverse()[t](e).reverse()
                        }
                    }
                    )),
                    xe(["filter", "map", "takeWhile"], (function(t, e) {
                        var r = e + 1
                          , n = 1 == r || 3 == r;
                        Vr.prototype[t] = function(t) {
                            var e = this.clone();
                            return e.__iteratees__.push({
                                iteratee: as(t, 3),
                                type: r
                            }),
                            e.__filtered__ = e.__filtered__ || n,
                            e
                        }
                    }
                    )),
                    xe(["head", "last"], (function(t, e) {
                        var r = "take" + (e ? "Right" : "");
                        Vr.prototype[t] = function() {
                            return this[r](1).value()[0]
                        }
                    }
                    )),
                    xe(["initial", "tail"], (function(t, e) {
                        var r = "drop" + (e ? "" : "Right");
                        Vr.prototype[t] = function() {
                            return this.__filtered__ ? new Vr(this) : this[r](1)
                        }
                    }
                    )),
                    Vr.prototype.compact = function() {
                        return this.filter(rc)
                    }
                    ,
                    Vr.prototype.find = function(t) {
                        return this.filter(t).head()
                    }
                    ,
                    Vr.prototype.findLast = function(t) {
                        return this.reverse().find(t)
                    }
                    ,
                    Vr.prototype.invokeMap = Jn((function(t, e) {
                        return "function" == typeof t ? new Vr(this) : this.map((function(r) {
                            return Cn(r, t, e)
                        }
                        ))
                    }
                    )),
                    Vr.prototype.reject = function(t) {
                        return this.filter(Lo(as(t)))
                    }
                    ,
                    Vr.prototype.slice = function(t, e) {
                        t = fa(t);
                        var n = this;
                        return n.__filtered__ && (t > 0 || e < 0) ? new Vr(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)),
                        e !== r && (n = (e = fa(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                        n)
                    }
                    ,
                    Vr.prototype.takeRightWhile = function(t) {
                        return this.reverse().takeWhile(t).reverse()
                    }
                    ,
                    Vr.prototype.toArray = function() {
                        return this.take(d)
                    }
                    ,
                    wn(Vr.prototype, (function(t, e) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(e)
                          , i = /^(?:head|last)$/.test(e)
                          , s = zr[i ? "take" + ("last" == e ? "Right" : "") : e]
                          , o = i || /^find/.test(e);
                        s && (zr.prototype[e] = function() {
                            var e = this.__wrapped__
                              , a = i ? [1] : arguments
                              , c = e instanceof Vr
                              , u = a[0]
                              , h = c || Ko(e)
                              , l = function(t) {
                                var e = s.apply(zr, Le([t], a));
                                return i && p ? e[0] : e
                            };
                            h && n && "function" == typeof u && 1 != u.length && (c = h = !1);
                            var p = this.__chain__
                              , f = !!this.__actions__.length
                              , d = o && !p
                              , g = c && !f;
                            if (!o && h) {
                                e = g ? e : new Vr(this);
                                var v = t.apply(e, a);
                                return v.__actions__.push({
                                    func: lo,
                                    args: [l],
                                    thisArg: r
                                }),
                                new Hr(v,p)
                            }
                            return d && g ? t.apply(this, a) : (v = this.thru(l),
                            d ? i ? v.value()[0] : v.value() : v)
                        }
                        )
                    }
                    )),
                    xe(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                        var e = At[t]
                          , r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
                          , n = /^(?:pop|shift)$/.test(t);
                        zr.prototype[t] = function() {
                            var t = arguments;
                            if (n && !this.__chain__) {
                                var i = this.value();
                                return e.apply(Ko(i) ? i : [], t)
                            }
                            return this[r]((function(r) {
                                return e.apply(Ko(r) ? r : [], t)
                            }
                            ))
                        }
                    }
                    )),
                    wn(Vr.prototype, (function(t, e) {
                        var r = zr[e];
                        if (r) {
                            var n = r.name + "";
                            Dt.call(Cr, n) || (Cr[n] = []),
                            Cr[n].push({
                                name: e,
                                func: r
                            })
                        }
                    }
                    )),
                    Cr[ki(r, 2).name] = [{
                        name: "wrapper",
                        func: r
                    }],
                    Vr.prototype.clone = function() {
                        var t = new Vr(this.__wrapped__);
                        return t.__actions__ = Ri(this.__actions__),
                        t.__dir__ = this.__dir__,
                        t.__filtered__ = this.__filtered__,
                        t.__iteratees__ = Ri(this.__iteratees__),
                        t.__takeCount__ = this.__takeCount__,
                        t.__views__ = Ri(this.__views__),
                        t
                    }
                    ,
                    Vr.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var t = new Vr(this);
                            t.__dir__ = -1,
                            t.__filtered__ = !0
                        } else
                            (t = this.clone()).__dir__ *= -1;
                        return t
                    }
                    ,
                    Vr.prototype.value = function() {
                        var t = this.__wrapped__.value()
                          , e = this.__dir__
                          , r = Ko(t)
                          , n = e < 0
                          , i = r ? t.length : 0
                          , s = function(t, e, r) {
                            for (var n = -1, i = r.length; ++n < i; ) {
                                var s = r[n]
                                  , o = s.size;
                                switch (s.type) {
                                case "drop":
                                    t += o;
                                    break;
                                case "dropRight":
                                    e -= o;
                                    break;
                                case "take":
                                    e = yr(e, t + o);
                                    break;
                                case "takeRight":
                                    t = vr(t, e - o)
                                }
                            }
                            return {
                                start: t,
                                end: e
                            }
                        }(0, i, this.__views__)
                          , o = s.start
                          , a = s.end
                          , c = a - o
                          , u = n ? a : o - 1
                          , h = this.__iteratees__
                          , l = h.length
                          , p = 0
                          , f = yr(c, this.__takeCount__);
                        if (!r || !n && i == c && f == c)
                            return fi(t, this.__actions__);
                        var d = [];
                        t: for (; c-- && p < f; ) {
                            for (var g = -1, v = t[u += e]; ++g < l; ) {
                                var y = h[g]
                                  , m = y.iteratee
                                  , w = y.type
                                  , _ = m(v);
                                if (2 == w)
                                    v = _;
                                else if (!_) {
                                    if (1 == w)
                                        continue t;
                                    break t
                                }
                            }
                            d[p++] = v
                        }
                        return d
                    }
                    ,
                    zr.prototype.at = po,
                    zr.prototype.chain = function() {
                        return ho(this)
                    }
                    ,
                    zr.prototype.commit = function() {
                        return new Hr(this.value(),this.__chain__)
                    }
                    ,
                    zr.prototype.next = function() {
                        this.__values__ === r && (this.__values__ = la(this.value()));
                        var t = this.__index__ >= this.__values__.length;
                        return {
                            done: t,
                            value: t ? r : this.__values__[this.__index__++]
                        }
                    }
                    ,
                    zr.prototype.plant = function(t) {
                        for (var e, n = this; n instanceof Ur; ) {
                            var i = Ms(n);
                            i.__index__ = 0,
                            i.__values__ = r,
                            e ? s.__wrapped__ = i : e = i;
                            var s = i;
                            n = n.__wrapped__
                        }
                        return s.__wrapped__ = t,
                        e
                    }
                    ,
                    zr.prototype.reverse = function() {
                        var t = this.__wrapped__;
                        if (t instanceof Vr) {
                            var e = t;
                            return this.__actions__.length && (e = new Vr(this)),
                            (e = e.reverse()).__actions__.push({
                                func: lo,
                                args: [$s],
                                thisArg: r
                            }),
                            new Hr(e,this.__chain__)
                        }
                        return this.thru($s)
                    }
                    ,
                    zr.prototype.toJSON = zr.prototype.valueOf = zr.prototype.value = function() {
                        return fi(this.__wrapped__, this.__actions__)
                    }
                    ,
                    zr.prototype.first = zr.prototype.head,
                    Yt && (zr.prototype[Yt] = function() {
                        return this
                    }
                    ),
                    zr
                }();
                ge ? ((ge.exports = dr)._ = dr,
                de._ = dr) : fe._ = dr
            }
            ).call(Vi)
        }(Ki, Ki.exports);
        var Bi = Object.defineProperty
          , Fi = Object.defineProperties
          , Wi = Object.getOwnPropertyDescriptors
          , Gi = Object.getOwnPropertySymbols
          , Zi = Object.prototype.hasOwnProperty
          , Ji = Object.prototype.propertyIsEnumerable
          , Qi = (t,e,r)=>e in t ? Bi(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , Yi = (t,e)=>{
            for (var r in e || (e = {}))
                Zi.call(e, r) && Qi(t, r, e[r]);
            if (Gi)
                for (var r of Gi(e))
                    Ji.call(e, r) && Qi(t, r, e[r]);
            return t
        }
          , $i = (t,e)=>Fi(t, Wi(e));
        function Xi(t, e, r) {
            var n;
            const i = (0,
            s.DQ)(t);
            return (null == (n = e.rpcMap) ? void 0 : n[i.reference]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=").concat(i.namespace, ":").concat(i.reference, "&projectId=").concat(r)
        }
        function ts(t) {
            return t.includes(":") ? t.split(":")[1] : t
        }
        function es(t) {
            return t.map((t=>"".concat(t.split(":")[0], ":").concat(t.split(":")[1])))
        }
        function rs(t) {
            var e, r, n, i;
            const o = {};
            if (!(0,
            s.L5)(t))
                return o;
            for (const [a,c] of Object.entries(t)) {
                const t = (0,
                s.gp)(a) ? [a] : c.chains
                  , u = c.methods || []
                  , h = c.events || []
                  , l = c.rpcMap || {}
                  , p = (0,
                s.M)(a);
                o[p] = $i(Yi(Yi({}, o[p]), c), {
                    chains: (0,
                    s.eG)(t, null == (e = o[p]) ? void 0 : e.chains),
                    methods: (0,
                    s.eG)(u, null == (r = o[p]) ? void 0 : r.methods),
                    events: (0,
                    s.eG)(h, null == (n = o[p]) ? void 0 : n.events),
                    rpcMap: Yi(Yi({}, l), null == (i = o[p]) ? void 0 : i.rpcMap)
                })
            }
            return o
        }
        function ns(t) {
            return t.includes(":") ? t.split(":")[2] : t
        }
        function is(t) {
            const e = {};
            for (const [r,n] of Object.entries(t)) {
                const t = n.methods || []
                  , i = n.events || []
                  , o = n.accounts || []
                  , a = (0,
                s.gp)(r) ? [r] : n.chains ? n.chains : es(n.accounts);
                e[r] = {
                    chains: a,
                    methods: t,
                    events: i,
                    accounts: o
                }
            }
            return e
        }
        function ss(t) {
            return "number" == typeof t ? t : t.includes("0x") ? parseInt(t, 16) : t.includes(":") ? Number(t.split(":")[1]) : Number(t)
        }
        const os = {}
          , as = t=>os[t]
          , cs = (t,e)=>{
            os[t] = e
        }
        ;
        class us {
            constructor(t) {
                this.name = "polkadot",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(t, e),
                this.chainId = t,
                this.events.emit(Hi, "".concat(this.name, ":").concat(t))
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t && t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])) || []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    const n = ts(e);
                    t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || Xi(t, this.namespace, this.client.core.projectId);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        class hs {
            constructor(t) {
                this.name = "eip155",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.httpProviders = this.createHttpProviders(),
                this.chainId = parseInt(this.getDefaultChain())
            }
            async request(t) {
                switch (t.request.method) {
                case "eth_requestAccounts":
                case "eth_accounts":
                    return this.getAccounts();
                case "wallet_switchEthereumChain":
                    return await this.handleSwitchChain(t);
                case "eth_chainId":
                    return parseInt(this.getDefaultChain())
                }
                return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(parseInt(t), e),
                this.chainId = parseInt(t),
                this.events.emit(Hi, "".concat(this.name, ":").concat(t))
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId.toString();
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            createHttpProvider(t, e) {
                const r = e || Xi("".concat(this.name, ":").concat(t), this.namespace, this.client.core.projectId);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new Mi(r,as("disableProviderPing")))
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    const n = parseInt(ts(e));
                    t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t ? [...new Set(t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])))] : []
            }
            getHttpProvider() {
                const t = this.chainId
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            async handleSwitchChain(t) {
                var e, r;
                let n = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0";
                n = n.startsWith("0x") ? n : "0x".concat(n);
                const i = parseInt(n, 16);
                if (this.isChainApproved(i))
                    this.setDefaultChain("".concat(i));
                else {
                    if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
                        throw new Error("Failed to switch to chain 'eip155:".concat(i, "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."));
                    await this.client.request({
                        topic: t.topic,
                        request: {
                            method: t.request.method,
                            params: [{
                                chainId: n
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }),
                    this.setDefaultChain("".concat(i))
                }
                return null
            }
            isChainApproved(t) {
                return this.namespace.chains.includes("".concat(this.name, ":").concat(t))
            }
        }
        class ls {
            constructor(t) {
                this.name = "solana",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(t, e),
                this.chainId = t,
                this.events.emit(Hi, "".concat(this.name, ":").concat(t))
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t ? [...new Set(t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])))] : []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    const n = ts(e);
                    t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || Xi(t, this.namespace, this.client.core.projectId);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        class ps {
            constructor(t) {
                this.name = "cosmos",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(t, e),
                this.chainId = t,
                this.events.emit(Hi, "".concat(this.name, ":").concat(this.chainId))
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t ? [...new Set(t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])))] : []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    const n = ts(e);
                    t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || Xi(t, this.namespace, this.client.core.projectId);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        class fs {
            constructor(t) {
                this.name = "cip34",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(t, e),
                this.chainId = t,
                this.events.emit(Hi, "".concat(this.name, ":").concat(this.chainId))
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t ? [...new Set(t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])))] : []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    const r = this.getCardanoRPCUrl(e)
                      , n = ts(e);
                    t[n] = this.createHttpProvider(n, r)
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            getCardanoRPCUrl(t) {
                const e = this.namespace.rpcMap;
                if (e)
                    return e[t]
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || this.getCardanoRPCUrl(t);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        class ds {
            constructor(t) {
                this.name = "elrond",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(t, e),
                this.chainId = t,
                this.events.emit(Hi, "".concat(this.name, ":").concat(t))
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t ? [...new Set(t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])))] : []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    const n = ts(e);
                    t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || Xi(t, this.namespace, this.client.core.projectId);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        class gs {
            constructor(t) {
                this.name = "multiversx",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                this.httpProviders[t] || this.setHttpProvider(t, e),
                this.chainId = t,
                this.events.emit(Hi, "".concat(this.name, ":").concat(t))
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t ? [...new Set(t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])))] : []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    const n = ts(e);
                    t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || Xi(t, this.namespace, this.client.core.projectId);
                if (!r)
                    throw new Error("No RPC url provided for chainId: ".concat(t));
                return new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        class vs {
            constructor(t) {
                this.name = "near",
                this.namespace = t.namespace,
                this.events = as("events"),
                this.client = as("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(t) {
                this.namespace = Object.assign(this.namespace, t)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const t = this.namespace.chains[0];
                if (!t)
                    throw new Error("ChainId not found");
                return t.split(":")[1]
            }
            request(t) {
                return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
            }
            setDefaultChain(t, e) {
                if (this.chainId = t,
                !this.httpProviders[t]) {
                    const r = e || Xi("".concat(this.name, ":").concat(t), this.namespace);
                    if (!r)
                        throw new Error("No RPC url provided for chainId: ".concat(t));
                    this.setHttpProvider(t, r)
                }
                this.events.emit(Hi, "".concat(this.name, ":").concat(this.chainId))
            }
            getAccounts() {
                const t = this.namespace.accounts;
                return t && t.filter((t=>t.split(":")[1] === this.chainId.toString())).map((t=>t.split(":")[2])) || []
            }
            createHttpProviders() {
                const t = {};
                return this.namespace.chains.forEach((e=>{
                    var r;
                    t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                }
                )),
                t
            }
            getHttpProvider() {
                const t = "".concat(this.name, ":").concat(this.chainId)
                  , e = this.httpProviders[t];
                if (typeof e > "u")
                    throw new Error("JSON-RPC provider for ".concat(t, " not found"));
                return e
            }
            setHttpProvider(t, e) {
                const r = this.createHttpProvider(t, e);
                r && (this.httpProviders[t] = r)
            }
            createHttpProvider(t, e) {
                const r = e || Xi(t, this.namespace);
                return typeof r > "u" ? void 0 : new Jt(new zi(r,as("disableProviderPing")))
            }
        }
        var ys = Object.defineProperty
          , ms = Object.defineProperties
          , ws = Object.getOwnPropertyDescriptors
          , _s = Object.getOwnPropertySymbols
          , bs = Object.prototype.hasOwnProperty
          , Es = Object.prototype.propertyIsEnumerable
          , Is = (t,e,r)=>e in t ? ys(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , Ps = (t,e)=>{
            for (var r in e || (e = {}))
                bs.call(e, r) && Is(t, r, e[r]);
            if (_s)
                for (var r of _s(e))
                    Es.call(e, r) && Is(t, r, e[r]);
            return t
        }
          , Ss = (t,e)=>ms(t, ws(e));
        class Os {
            constructor(t) {
                this.events = new (i()),
                this.rpcProviders = {},
                this.shouldAbortPairingAttempt = !1,
                this.maxPairingAttempts = 10,
                this.disableProviderPing = !1,
                this.providerOpts = t,
                this.logger = typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof (null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0,
                H.pino)((0,
                H.getDefaultLoggerOptions)({
                    level: (null === t || void 0 === t ? void 0 : t.logger) || ki
                })),
                this.disableProviderPing = (null === t || void 0 === t ? void 0 : t.disableProviderPing) || !1
            }
            static async init(t) {
                const e = new Os(t);
                return await e.initialize(),
                e
            }
            async request(t, e) {
                const [r,n] = this.validateChain(e);
                if (!this.session)
                    throw new Error("Please call connect() before request()");
                return await this.getProvider(r).request({
                    request: Ps({}, t),
                    chainId: "".concat(r, ":").concat(n),
                    topic: this.session.topic
                })
            }
            sendAsync(t, e, r) {
                const n = (new Date).getTime();
                this.request(t, r).then((t=>e(null, Dt(n, t)))).catch((t=>e(t, void 0)))
            }
            async enable() {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                return this.session || await this.connect({
                    namespaces: this.namespaces,
                    optionalNamespaces: this.optionalNamespaces,
                    sessionProperties: this.sessionProperties
                }),
                await this.requestAccounts()
            }
            async disconnect() {
                var t;
                if (!this.session)
                    throw new Error("Please call connect() before enable()");
                await this.client.disconnect({
                    topic: null == (t = this.session) ? void 0 : t.topic,
                    reason: (0,
                    s.D6)("USER_DISCONNECTED")
                }),
                await this.cleanup()
            }
            async connect(t) {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                if (this.setNamespaces(t),
                await this.cleanupPendingPairings(),
                !t.skipPairing)
                    return await this.pair(t.pairingTopic)
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            get isWalletConnect() {
                return !0
            }
            async pair(t) {
                this.shouldAbortPairingAttempt = !1;
                let e = 0;
                do {
                    if (this.shouldAbortPairingAttempt)
                        throw new Error("Pairing aborted");
                    if (e >= this.maxPairingAttempts)
                        throw new Error("Max auto pairing attempts reached");
                    const {uri: r, approval: n} = await this.client.connect({
                        pairingTopic: t,
                        requiredNamespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    });
                    r && (this.uri = r,
                    this.events.emit("display_uri", r)),
                    await n().then((t=>{
                        this.session = t,
                        this.namespaces || (this.namespaces = is(t.namespaces),
                        this.persist("namespaces", this.namespaces))
                    }
                    )).catch((t=>{
                        if (t.message !== fi)
                            throw t;
                        e++
                    }
                    ))
                } while (!this.session);
                return this.onConnect(),
                this.session
            }
            setDefaultChain(t, e) {
                try {
                    if (!this.session)
                        return;
                    const [r,n] = this.validateChain(t);
                    this.getProvider(r).setDefaultChain(n, e)
                } catch (J) {
                    if (!/Please call connect/.test(J.message))
                        throw J
                }
            }
            async cleanupPendingPairings() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger.info("Cleaning up inactive pairings...");
                const e = this.client.pairing.getAll();
                if ((0,
                s.qt)(e)) {
                    for (const r of e)
                        t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                    this.logger.info("Inactive pairings cleared: ".concat(e.length))
                }
            }
            abortPairingAttempt() {
                this.shouldAbortPairingAttempt = !0
            }
            async checkStorage() {
                if (this.namespaces = await this.getFromStore("namespaces"),
                this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
                this.client.session.length) {
                    const t = this.client.session.keys.length - 1;
                    this.session = this.client.session.get(this.client.session.keys[t]),
                    this.createProviders()
                }
            }
            async initialize() {
                this.logger.trace("Initialized"),
                await this.createClient(),
                await this.checkStorage(),
                this.registerEventListeners()
            }
            async createClient() {
                this.client = this.providerOpts.client || await Ni.init({
                    logger: this.providerOpts.logger || ki,
                    relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                    projectId: this.providerOpts.projectId,
                    metadata: this.providerOpts.metadata,
                    storageOptions: this.providerOpts.storageOptions,
                    storage: this.providerOpts.storage,
                    name: this.providerOpts.name
                }),
                this.logger.trace("SignClient Initialized")
            }
            createProviders() {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                if (!this.session)
                    throw new Error("Session not initialized. Please call connect() before enable()");
                const t = [...new Set(Object.keys(this.session.namespaces).map((t=>(0,
                s.M)(t))))];
                cs("client", this.client),
                cs("events", this.events),
                cs("disableProviderPing", this.disableProviderPing),
                t.forEach((t=>{
                    if (!this.session)
                        return;
                    const e = function(t, e) {
                        const r = Object.keys(e.namespaces).filter((e=>e.includes(t)));
                        if (!r.length)
                            return [];
                        const n = [];
                        return r.forEach((t=>{
                            const r = e.namespaces[t].accounts;
                            n.push(...r)
                        }
                        )),
                        n
                    }(t, this.session)
                      , r = es(e)
                      , n = function() {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const e = rs(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                          , r = rs(t);
                        return Ki.exports.merge(e, r)
                    }(this.namespaces, this.optionalNamespaces)
                      , i = Ss(Ps({}, n[t]), {
                        accounts: e,
                        chains: r
                    });
                    switch (t) {
                    case "eip155":
                        this.rpcProviders[t] = new hs({
                            namespace: i
                        });
                        break;
                    case "solana":
                        this.rpcProviders[t] = new ls({
                            namespace: i
                        });
                        break;
                    case "cosmos":
                        this.rpcProviders[t] = new ps({
                            namespace: i
                        });
                        break;
                    case "polkadot":
                        this.rpcProviders[t] = new us({
                            namespace: i
                        });
                        break;
                    case "cip34":
                        this.rpcProviders[t] = new fs({
                            namespace: i
                        });
                        break;
                    case "elrond":
                        this.rpcProviders[t] = new ds({
                            namespace: i
                        });
                        break;
                    case "multiversx":
                        this.rpcProviders[t] = new gs({
                            namespace: i
                        });
                        break;
                    case "near":
                        this.rpcProviders[t] = new vs({
                            namespace: i
                        })
                    }
                }
                ))
            }
            registerEventListeners() {
                if (typeof this.client > "u")
                    throw new Error("Sign Client is not initialized");
                this.client.on("session_ping", (t=>{
                    this.events.emit("session_ping", t)
                }
                )),
                this.client.on("session_event", (t=>{
                    const {params: e} = t
                      , {event: r} = e;
                    if ("accountsChanged" === r.name) {
                        const t = r.data;
                        t && (0,
                        s.qt)(t) && this.events.emit("accountsChanged", t.map(ns))
                    } else if ("chainChanged" === r.name) {
                        const t = e.chainId
                          , r = e.event.data
                          , n = (0,
                        s.M)(t)
                          , i = ss(t) !== ss(r) ? "".concat(n, ":").concat(ss(r)) : t;
                        this.onChainChanged(i)
                    } else
                        this.events.emit(r.name, r.data);
                    this.events.emit("session_event", t)
                }
                )),
                this.client.on("session_update", (t=>{
                    let {topic: e, params: r} = t;
                    var n;
                    const {namespaces: i} = r
                      , s = null == (n = this.client) ? void 0 : n.session.get(e);
                    this.session = Ss(Ps({}, s), {
                        namespaces: i
                    }),
                    this.onSessionUpdate(),
                    this.events.emit("session_update", {
                        topic: e,
                        params: r
                    })
                }
                )),
                this.client.on("session_delete", (async t=>{
                    await this.cleanup(),
                    this.events.emit("session_delete", t),
                    this.events.emit("disconnect", Ss(Ps({}, (0,
                    s.D6)("USER_DISCONNECTED")), {
                        data: t.topic
                    }))
                }
                )),
                this.on(Hi, (t=>{
                    this.onChainChanged(t, !0)
                }
                ))
            }
            getProvider(t) {
                if (!this.rpcProviders[t])
                    throw new Error("Provider not found: ".concat(t));
                return this.rpcProviders[t]
            }
            onSessionUpdate() {
                Object.keys(this.rpcProviders).forEach((t=>{
                    var e;
                    this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
                }
                ))
            }
            setNamespaces(t) {
                const {namespaces: e, optionalNamespaces: r, sessionProperties: n} = t;
                e && Object.keys(e).length && (this.namespaces = e),
                r && Object.keys(r).length && (this.optionalNamespaces = r),
                this.sessionProperties = n,
                this.persist("namespaces", e),
                this.persist("optionalNamespaces", r)
            }
            validateChain(t) {
                const [e,r] = (null === t || void 0 === t ? void 0 : t.split(":")) || ["", ""];
                if (!this.namespaces || !Object.keys(this.namespaces).length)
                    return [e, r];
                if (e && !Object.keys(this.namespaces || {}).map((t=>(0,
                s.M)(t))).includes(e))
                    throw new Error("Namespace '".concat(e, "' is not configured. Please call connect() first with namespace config."));
                if (e && r)
                    return [e, r];
                const n = (0,
                s.M)(Object.keys(this.namespaces)[0]);
                return [n, this.rpcProviders[n].getDefaultChain()]
            }
            async requestAccounts() {
                const [t] = this.validateChain();
                return await this.getProvider(t).requestAccounts()
            }
            onChainChanged(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var r;
                if (!this.namespaces)
                    return;
                const [n,i] = this.validateChain(t);
                e || this.getProvider(n).setDefaultChain(i),
                (null != (r = this.namespaces[n]) ? r : this.namespaces["".concat(n, ":").concat(i)]).defaultChain = i,
                this.persist("namespaces", this.namespaces),
                this.events.emit("chainChanged", i)
            }
            onConnect() {
                this.createProviders(),
                this.events.emit("connect", {
                    session: this.session
                })
            }
            async cleanup() {
                this.session = void 0,
                this.namespaces = void 0,
                this.optionalNamespaces = void 0,
                this.sessionProperties = void 0,
                this.persist("namespaces", void 0),
                this.persist("optionalNamespaces", void 0),
                this.persist("sessionProperties", void 0),
                await this.cleanupPendingPairings({
                    deletePairings: !0
                })
            }
            persist(t, e) {
                this.client.core.storage.setItem("".concat(Ui, "/").concat(t), e)
            }
            async getFromStore(t) {
                return await this.client.core.storage.getItem("".concat(Ui, "/").concat(t))
            }
        }
        const xs = Os
          , Rs = "".concat("wc", "@2:").concat("ethereum_provider", ":")
          , Cs = ["eth_sendTransaction", "personal_sign"]
          , As = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
          , js = ["chainChanged", "accountsChanged"]
          , Ts = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
        var Ns = Object.defineProperty
          , Ls = Object.defineProperties
          , Ds = Object.getOwnPropertyDescriptors
          , qs = Object.getOwnPropertySymbols
          , Ms = Object.prototype.hasOwnProperty
          , zs = Object.prototype.propertyIsEnumerable
          , ks = (t,e,r)=>e in t ? Ns(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r
          , Us = (t,e)=>{
            for (var r in e || (e = {}))
                Ms.call(e, r) && ks(t, r, e[r]);
            if (qs)
                for (var r of qs(e))
                    zs.call(e, r) && ks(t, r, e[r]);
            return t
        }
          , Hs = (t,e)=>Ls(t, Ds(e));
        function Vs(t) {
            return Number(t[0].split(":")[1])
        }
        function Ks(t) {
            return "0x".concat(t.toString(16))
        }
        class Bs {
            constructor() {
                this.events = new n.EventEmitter,
                this.namespace = "eip155",
                this.accounts = [],
                this.chainId = 1,
                this.STORAGE_KEY = Rs,
                this.on = (t,e)=>(this.events.on(t, e),
                this),
                this.once = (t,e)=>(this.events.once(t, e),
                this),
                this.removeListener = (t,e)=>(this.events.removeListener(t, e),
                this),
                this.off = (t,e)=>(this.events.off(t, e),
                this),
                this.parseAccount = t=>this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t,
                this.signer = {},
                this.rpc = {}
            }
            static async init(t) {
                const e = new Bs;
                return await e.initialize(t),
                e
            }
            async request(t) {
                return await this.signer.request(t, this.formatChainId(this.chainId))
            }
            sendAsync(t, e) {
                this.signer.sendAsync(t, e, this.formatChainId(this.chainId))
            }
            get connected() {
                return !!this.signer.client && this.signer.client.core.relayer.connected
            }
            get connecting() {
                return !!this.signer.client && this.signer.client.core.relayer.connecting
            }
            async enable() {
                return this.session || await this.connect(),
                await this.request({
                    method: "eth_requestAccounts"
                })
            }
            async connect(t) {
                if (!this.signer.client)
                    throw new Error("Provider not initialized. Call init() first");
                this.loadConnectOpts(t);
                const {required: e, optional: r} = function(t) {
                    const {chains: e, optionalChains: r, methods: n, optionalMethods: i, events: o, optionalEvents: a, rpcMap: c} = t;
                    if (!(0,
                    s.qt)(e))
                        throw new Error("Invalid chains");
                    const u = {
                        chains: e,
                        methods: n || Cs,
                        events: o || js,
                        rpcMap: Us({}, e.length ? {
                            [Vs(e)]: c[Vs(e)]
                        } : {})
                    }
                      , h = null === o || void 0 === o ? void 0 : o.filter((t=>!js.includes(t)))
                      , l = null === n || void 0 === n ? void 0 : n.filter((t=>!Cs.includes(t)));
                    if (!r && !a && !i && (null == h || !h.length) && (null == l || !l.length))
                        return {
                            required: e.length ? u : void 0
                        };
                    const p = (null === h || void 0 === h ? void 0 : h.length) && (null === l || void 0 === l ? void 0 : l.length) || !r
                      , f = {
                        chains: [...new Set(p ? u.chains.concat(r || []) : r)],
                        methods: [...new Set(u.methods.concat(null != i && i.length ? i : As))],
                        events: [...new Set(u.events.concat(null != a && a.length ? a : Ts))],
                        rpcMap: c
                    };
                    return {
                        required: e.length ? u : void 0,
                        optional: r.length ? f : void 0
                    }
                }(this.rpc);
                try {
                    const n = await new Promise((async(n,i)=>{
                        var s;
                        this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((t=>{
                            !t.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                            i(new Error("Connection request reset. Please try again.")))
                        }
                        ))),
                        await this.signer.connect(Hs(Us({
                            namespaces: Us({}, e && {
                                [this.namespace]: e
                            })
                        }, r && {
                            optionalNamespaces: {
                                [this.namespace]: r
                            }
                        }), {
                            pairingTopic: null === t || void 0 === t ? void 0 : t.pairingTopic
                        })).then((t=>{
                            n(t)
                        }
                        )).catch((t=>{
                            i(new Error(t.message))
                        }
                        ))
                    }
                    ));
                    if (!n)
                        return;
                    const i = (0,
                    s.gu)(n.namespaces, [this.namespace]);
                    this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i),
                    this.setAccounts(i),
                    this.events.emit("connect", {
                        chainId: Ks(this.chainId)
                    })
                } catch (K) {
                    throw this.signer.logger.error(K),
                    K
                } finally {
                    this.modal && this.modal.closeModal()
                }
            }
            async disconnect() {
                this.session && await this.signer.disconnect(),
                this.reset()
            }
            get isWalletConnect() {
                return !0
            }
            get session() {
                return this.signer.session
            }
            registerEventListeners() {
                this.signer.on("session_event", (t=>{
                    const {params: e} = t
                      , {event: r} = e;
                    "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data),
                    this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data),
                    this.events.emit("session_event", t)
                }
                )),
                this.signer.on("chainChanged", (t=>{
                    const e = parseInt(t);
                    this.chainId = e,
                    this.events.emit("chainChanged", Ks(this.chainId)),
                    this.persist()
                }
                )),
                this.signer.on("session_update", (t=>{
                    this.events.emit("session_update", t)
                }
                )),
                this.signer.on("session_delete", (t=>{
                    this.reset(),
                    this.events.emit("session_delete", t),
                    this.events.emit("disconnect", Hs(Us({}, (0,
                    s.D6)("USER_DISCONNECTED")), {
                        data: t.topic,
                        name: "USER_DISCONNECTED"
                    }))
                }
                )),
                this.signer.on("display_uri", (t=>{
                    var e, r;
                    this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(),
                    null == (r = this.modal) || r.openModal({
                        uri: t
                    })),
                    this.events.emit("display_uri", t)
                }
                ))
            }
            switchEthereumChain(t) {
                this.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: t.toString(16)
                    }]
                })
            }
            isCompatibleChainId(t) {
                return "string" == typeof t && t.startsWith("".concat(this.namespace, ":"))
            }
            formatChainId(t) {
                return "".concat(this.namespace, ":").concat(t)
            }
            parseChainId(t) {
                return Number(t.split(":")[1])
            }
            setChainIds(t) {
                const e = t.filter((t=>this.isCompatibleChainId(t))).map((t=>this.parseChainId(t)));
                e.length && (this.chainId = e[0],
                this.events.emit("chainChanged", Ks(this.chainId)),
                this.persist())
            }
            setChainId(t) {
                if (this.isCompatibleChainId(t)) {
                    const e = this.parseChainId(t);
                    this.chainId = e,
                    this.switchEthereumChain(e)
                }
            }
            parseAccountId(t) {
                const [e,r,n] = t.split(":");
                return {
                    chainId: "".concat(e, ":").concat(r),
                    address: n
                }
            }
            setAccounts(t) {
                this.accounts = t.filter((t=>this.parseChainId(this.parseAccountId(t).chainId) === this.chainId)).map((t=>this.parseAccountId(t).address)),
                this.events.emit("accountsChanged", this.accounts)
            }
            getRpcConfig(t) {
                var e, r;
                const n = null != (e = null === t || void 0 === t ? void 0 : t.chains) ? e : []
                  , i = null != (r = null === t || void 0 === t ? void 0 : t.optionalChains) ? r : []
                  , s = n.concat(i);
                if (!s.length)
                    throw new Error("No chains specified in either `chains` or `optionalChains`");
                const o = n.length ? (null === t || void 0 === t ? void 0 : t.methods) || Cs : []
                  , a = n.length ? (null === t || void 0 === t ? void 0 : t.events) || js : []
                  , c = (null === t || void 0 === t ? void 0 : t.optionalMethods) || []
                  , u = (null === t || void 0 === t ? void 0 : t.optionalEvents) || []
                  , h = (null === t || void 0 === t ? void 0 : t.rpcMap) || this.buildRpcMap(s, t.projectId)
                  , l = (null === t || void 0 === t ? void 0 : t.qrModalOptions) || void 0;
                return {
                    chains: null === n || void 0 === n ? void 0 : n.map((t=>this.formatChainId(t))),
                    optionalChains: i.map((t=>this.formatChainId(t))),
                    methods: o,
                    events: a,
                    optionalMethods: c,
                    optionalEvents: u,
                    rpcMap: h,
                    showQrModal: !(null == t || !t.showQrModal),
                    qrModalOptions: l,
                    projectId: t.projectId,
                    metadata: t.metadata
                }
            }
            buildRpcMap(t, e) {
                const r = {};
                return t.forEach((t=>{
                    r[t] = this.getRpcUrl(t, e)
                }
                )),
                r
            }
            async initialize(t) {
                if (this.rpc = this.getRpcConfig(t),
                this.chainId = this.rpc.chains.length ? Vs(this.rpc.chains) : Vs(this.rpc.optionalChains),
                this.signer = await xs.init({
                    projectId: this.rpc.projectId,
                    metadata: this.rpc.metadata,
                    disableProviderPing: t.disableProviderPing,
                    relayUrl: t.relayUrl,
                    storageOptions: t.storageOptions
                }),
                this.registerEventListeners(),
                await this.loadPersistedSession(),
                this.rpc.showQrModal) {
                    let t;
                    try {
                        const {WalletConnectModal: e} = await r.e(199).then(r.bind(r, 78));
                        t = e
                    } catch {
                        throw new Error("To use QR modal, please install @walletconnect/modal package")
                    }
                    if (t)
                        try {
                            this.modal = new t(Us({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e),
                            new Error("Could not generate WalletConnectModal Instance")
                        }
                }
            }
            loadConnectOpts(t) {
                if (!t)
                    return;
                const {chains: e, optionalChains: r, rpcMap: n} = t;
                e && (0,
                s.qt)(e) && (this.rpc.chains = e.map((t=>this.formatChainId(t))),
                e.forEach((t=>{
                    this.rpc.rpcMap[t] = (null === n || void 0 === n ? void 0 : n[t]) || this.getRpcUrl(t)
                }
                ))),
                r && (0,
                s.qt)(r) && (this.rpc.optionalChains = [],
                this.rpc.optionalChains = null === r || void 0 === r ? void 0 : r.map((t=>this.formatChainId(t))),
                r.forEach((t=>{
                    this.rpc.rpcMap[t] = (null === n || void 0 === n ? void 0 : n[t]) || this.getRpcUrl(t)
                }
                )))
            }
            getRpcUrl(t, e) {
                var r;
                return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(t, "&projectId=").concat(e || this.rpc.projectId)
            }
            async loadPersistedSession() {
                if (!this.session)
                    return;
                const t = await this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId"))
                  , e = this.session.namespaces["".concat(this.namespace, ":").concat(t)] ? this.session.namespaces["".concat(this.namespace, ":").concat(t)] : this.session.namespaces[this.namespace];
                this.setChainIds(t ? [this.formatChainId(t)] : null === e || void 0 === e ? void 0 : e.accounts),
                this.setAccounts(null === e || void 0 === e ? void 0 : e.accounts)
            }
            reset() {
                this.chainId = 1,
                this.accounts = []
            }
            persist() {
                this.session && this.signer.client.core.storage.setItem("".concat(this.STORAGE_KEY, "/chainId"), this.chainId)
            }
            parseAccounts(t) {
                return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map((t=>this.parseAccount(t)))
            }
        }
        const Fs = Bs
    }
    ,
    3375: (t,e,r)=>{
        "use strict";
        r.d(e, {
            q: ()=>n
        });
        class n {
        }
    }
    ,
    6727: (t,e,r)=>{
        "use strict";
        r.r(e),
        r.d(e, {
            IEvents: ()=>n.q
        });
        var n = r(3375)
    }
    ,
    3918: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0;
        const n = r(3659);
        e.HEARTBEAT_INTERVAL = n.FIVE_SECONDS,
        e.HEARTBEAT_EVENTS = {
            pulse: "heartbeat_pulse"
        }
    }
    ,
    7122: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        r(8182).__exportStar(r(3918), e)
    }
    ,
    588: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.HeartBeat = void 0;
        const n = r(8182)
          , i = r(8041)
          , s = r(3659)
          , o = r(5326)
          , a = r(7122);
        class c extends o.IHeartBeat {
            constructor(t) {
                super(t),
                this.events = new i.EventEmitter,
                this.interval = a.HEARTBEAT_INTERVAL,
                this.interval = (null === t || void 0 === t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL
            }
            static init(t) {
                return n.__awaiter(this, void 0, void 0, (function*() {
                    const e = new c(t);
                    return yield e.init(),
                    e
                }
                ))
            }
            init() {
                return n.__awaiter(this, void 0, void 0, (function*() {
                    yield this.initialize()
                }
                ))
            }
            stop() {
                clearInterval(this.intervalRef)
            }
            on(t, e) {
                this.events.on(t, e)
            }
            once(t, e) {
                this.events.once(t, e)
            }
            off(t, e) {
                this.events.off(t, e)
            }
            removeListener(t, e) {
                this.events.removeListener(t, e)
            }
            initialize() {
                return n.__awaiter(this, void 0, void 0, (function*() {
                    this.intervalRef = setInterval((()=>this.pulse()), s.toMiliseconds(this.interval))
                }
                ))
            }
            pulse() {
                this.events.emit(a.HEARTBEAT_EVENTS.pulse)
            }
        }
        e.HeartBeat = c
    }
    ,
    1345: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const n = r(8182);
        n.__exportStar(r(588), e),
        n.__exportStar(r(5326), e),
        n.__exportStar(r(7122), e)
    }
    ,
    1398: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IHeartBeat = void 0;
        const n = r(6727);
        class i extends n.IEvents {
            constructor(t) {
                super()
            }
        }
        e.IHeartBeat = i
    }
    ,
    5326: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        r(8182).__exportStar(r(1398), e)
    }
    ,
    8182: (t,e,r)=>{
        "use strict";
        r.r(e),
        r.d(e, {
            __assign: ()=>s,
            __asyncDelegator: ()=>_,
            __asyncGenerator: ()=>w,
            __asyncValues: ()=>b,
            __await: ()=>m,
            __awaiter: ()=>h,
            __classPrivateFieldGet: ()=>S,
            __classPrivateFieldSet: ()=>O,
            __createBinding: ()=>p,
            __decorate: ()=>a,
            __exportStar: ()=>f,
            __extends: ()=>i,
            __generator: ()=>l,
            __importDefault: ()=>P,
            __importStar: ()=>I,
            __makeTemplateObject: ()=>E,
            __metadata: ()=>u,
            __param: ()=>c,
            __read: ()=>g,
            __rest: ()=>o,
            __spread: ()=>v,
            __spreadArrays: ()=>y,
            __values: ()=>d
        });
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            ,
            n(t, e)
        };
        function i(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var s = function() {
            return s = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            s.apply(this, arguments)
        };
        function o(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
            }
            return r
        }
        function a(t, e, r, n) {
            var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                o = Reflect.decorate(t, e, r, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
            return s > 3 && o && Object.defineProperty(e, r, o),
            o
        }
        function c(t, e) {
            return function(r, n) {
                e(r, n, t)
            }
        }
        function u(t, e) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        function h(t, e, r, n) {
            return new (r || (r = Promise))((function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof r ? e : new r((function(t) {
                        t(e)
                    }
                    ))).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            }
            ))
        }
        function l(t, e) {
            var r, n, i, s, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (r = 1,
                                n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n),
                                0) : n.next) && !(i = i.call(n, s[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < i[1]) {
                                        o.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    i[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = e.call(t, o)
                            } catch (a) {
                                s = [6, a],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        function p(t, e, r, n) {
            void 0 === n && (n = r),
            t[n] = e[r]
        }
        function f(t, e) {
            for (var r in t)
                "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
        }
        function d(t) {
            var e = "function" === typeof Symbol && Symbol.iterator
              , r = e && t[e]
              , n = 0;
            if (r)
                return r.call(t);
            if (t && "number" === typeof t.length)
                return {
                    next: function() {
                        return t && n >= t.length && (t = void 0),
                        {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function g(t, e) {
            var r = "function" === typeof Symbol && t[Symbol.iterator];
            if (!r)
                return t;
            var n, i, s = r.call(t), o = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; )
                    o.push(n.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    n && !n.done && (r = s.return) && r.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return o
        }
        function v() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(g(arguments[e]));
            return t
        }
        function y() {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                t += arguments[e].length;
            var n = Array(t)
              , i = 0;
            for (e = 0; e < r; e++)
                for (var s = arguments[e], o = 0, a = s.length; o < a; o++,
                i++)
                    n[i] = s[o];
            return n
        }
        function m(t) {
            return this instanceof m ? (this.v = t,
            this) : new m(t)
        }
        function w(t, e, r) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, i = r.apply(t, e || []), s = [];
            return n = {},
            o("next"),
            o("throw"),
            o("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function o(t) {
                i[t] && (n[t] = function(e) {
                    return new Promise((function(r, n) {
                        s.push([t, e, r, n]) > 1 || a(t, e)
                    }
                    ))
                }
                )
            }
            function a(t, e) {
                try {
                    (r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                } catch (n) {
                    h(s[0][3], n)
                }
                var r
            }
            function c(t) {
                a("next", t)
            }
            function u(t) {
                a("throw", t)
            }
            function h(t, e) {
                t(e),
                s.shift(),
                s.length && a(s[0][0], s[0][1])
            }
        }
        function _(t) {
            var e, r;
            return e = {},
            n("next"),
            n("throw", (function(t) {
                throw t
            }
            )),
            n("return"),
            e[Symbol.iterator] = function() {
                return this
            }
            ,
            e;
            function n(n, i) {
                e[n] = t[n] ? function(e) {
                    return (r = !r) ? {
                        value: m(t[n](e)),
                        done: "return" === n
                    } : i ? i(e) : e
                }
                : i
            }
        }
        function b(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, r = t[Symbol.asyncIterator];
            return r ? r.call(t) : (t = d(t),
            e = {},
            n("next"),
            n("throw"),
            n("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function n(r) {
                e[r] = t[r] && function(e) {
                    return new Promise((function(n, i) {
                        (function(t, e, r, n) {
                            Promise.resolve(n).then((function(e) {
                                t({
                                    value: e,
                                    done: r
                                })
                            }
                            ), e)
                        }
                        )(n, i, (e = t[r](e)).done, e.value)
                    }
                    ))
                }
            }
        }
        function E(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {
                value: e
            }) : t.raw = e,
            t
        }
        function I(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t,
            e
        }
        function P(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function S(t, e) {
            if (!e.has(t))
                throw new TypeError("attempted to get private field on non-instance");
            return e.get(t)
        }
        function O(t, e, r) {
            if (!e.has(t))
                throw new TypeError("attempted to set private field on non-instance");
            return e.set(t, r),
            r
        }
    }
    ,
    7395: function(t, e) {
        var r = "undefined" !== typeof self ? self : this
          , n = function() {
            function t() {
                this.fetch = !1,
                this.DOMException = r.DOMException
            }
            return t.prototype = r,
            new t
        }();
        !function(t) {
            !function(e) {
                var r = "URLSearchParams"in t
                  , n = "Symbol"in t && "iterator"in Symbol
                  , i = "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }()
                  , s = "FormData"in t
                  , o = "ArrayBuffer"in t;
                if (o)
                    var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                      , c = ArrayBuffer.isView || function(t) {
                        return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                    }
                    ;
                function u(t) {
                    if ("string" !== typeof t && (t = String(t)),
                    /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
                        throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }
                function h(t) {
                    return "string" !== typeof t && (t = String(t)),
                    t
                }
                function l(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return n && (e[Symbol.iterator] = function() {
                        return e
                    }
                    ),
                    e
                }
                function p(t) {
                    this.map = {},
                    t instanceof p ? t.forEach((function(t, e) {
                        this.append(e, t)
                    }
                    ), this) : Array.isArray(t) ? t.forEach((function(t) {
                        this.append(t[0], t[1])
                    }
                    ), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                        this.append(e, t[e])
                    }
                    ), this)
                }
                function f(t) {
                    if (t.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0
                }
                function d(t) {
                    return new Promise((function(e, r) {
                        t.onload = function() {
                            e(t.result)
                        }
                        ,
                        t.onerror = function() {
                            r(t.error)
                        }
                    }
                    ))
                }
                function g(t) {
                    var e = new FileReader
                      , r = d(e);
                    return e.readAsArrayBuffer(t),
                    r
                }
                function v(t) {
                    if (t.slice)
                        return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)),
                    e.buffer
                }
                function y() {
                    return this.bodyUsed = !1,
                    this._initBody = function(t) {
                        var e;
                        this._bodyInit = t,
                        t ? "string" === typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : o && i && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = v(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t)) ? this._bodyArrayBuffer = v(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                        this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }
                    ,
                    i && (this.blob = function() {
                        var t = f(this);
                        if (t)
                            return t;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                    ,
                    this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                    }
                    ),
                    this.text = function() {
                        var t = f(this);
                        if (t)
                            return t;
                        if (this._bodyBlob)
                            return function(t) {
                                var e = new FileReader
                                  , r = d(e);
                                return e.readAsText(t),
                                r
                            }(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)
                                    r[n] = String.fromCharCode(e[n]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }
                    ,
                    s && (this.formData = function() {
                        return this.text().then(_)
                    }
                    ),
                    this.json = function() {
                        return this.text().then(JSON.parse)
                    }
                    ,
                    this
                }
                p.prototype.append = function(t, e) {
                    t = u(t),
                    e = h(e);
                    var r = this.map[t];
                    this.map[t] = r ? r + ", " + e : e
                }
                ,
                p.prototype.delete = function(t) {
                    delete this.map[u(t)]
                }
                ,
                p.prototype.get = function(t) {
                    return t = u(t),
                    this.has(t) ? this.map[t] : null
                }
                ,
                p.prototype.has = function(t) {
                    return this.map.hasOwnProperty(u(t))
                }
                ,
                p.prototype.set = function(t, e) {
                    this.map[u(t)] = h(e)
                }
                ,
                p.prototype.forEach = function(t, e) {
                    for (var r in this.map)
                        this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                }
                ,
                p.prototype.keys = function() {
                    var t = [];
                    return this.forEach((function(e, r) {
                        t.push(r)
                    }
                    )),
                    l(t)
                }
                ,
                p.prototype.values = function() {
                    var t = [];
                    return this.forEach((function(e) {
                        t.push(e)
                    }
                    )),
                    l(t)
                }
                ,
                p.prototype.entries = function() {
                    var t = [];
                    return this.forEach((function(e, r) {
                        t.push([r, e])
                    }
                    )),
                    l(t)
                }
                ,
                n && (p.prototype[Symbol.iterator] = p.prototype.entries);
                var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                function w(t, e) {
                    var r = (e = e || {}).body;
                    if (t instanceof w) {
                        if (t.bodyUsed)
                            throw new TypeError("Already read");
                        this.url = t.url,
                        this.credentials = t.credentials,
                        e.headers || (this.headers = new p(t.headers)),
                        this.method = t.method,
                        this.mode = t.mode,
                        this.signal = t.signal,
                        r || null == t._bodyInit || (r = t._bodyInit,
                        t.bodyUsed = !0)
                    } else
                        this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin",
                    !e.headers && this.headers || (this.headers = new p(e.headers)),
                    this.method = function(t) {
                        var e = t.toUpperCase();
                        return m.indexOf(e) > -1 ? e : t
                    }(e.method || this.method || "GET"),
                    this.mode = e.mode || this.mode || null,
                    this.signal = e.signal || this.signal,
                    this.referrer = null,
                    ("GET" === this.method || "HEAD" === this.method) && r)
                        throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(r)
                }
                function _(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach((function(t) {
                        if (t) {
                            var r = t.split("=")
                              , n = r.shift().replace(/\+/g, " ")
                              , i = r.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(n), decodeURIComponent(i))
                        }
                    }
                    )),
                    e
                }
                function b(t) {
                    var e = new p;
                    return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                        var r = t.split(":")
                          , n = r.shift().trim();
                        if (n) {
                            var i = r.join(":").trim();
                            e.append(n, i)
                        }
                    }
                    )),
                    e
                }
                function E(t, e) {
                    e || (e = {}),
                    this.type = "default",
                    this.status = void 0 === e.status ? 200 : e.status,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText"in e ? e.statusText : "OK",
                    this.headers = new p(e.headers),
                    this.url = e.url || "",
                    this._initBody(t)
                }
                w.prototype.clone = function() {
                    return new w(this,{
                        body: this._bodyInit
                    })
                }
                ,
                y.call(w.prototype),
                y.call(E.prototype),
                E.prototype.clone = function() {
                    return new E(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new p(this.headers),
                        url: this.url
                    })
                }
                ,
                E.error = function() {
                    var t = new E(null,{
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error",
                    t
                }
                ;
                var I = [301, 302, 303, 307, 308];
                E.redirect = function(t, e) {
                    if (-1 === I.indexOf(e))
                        throw new RangeError("Invalid status code");
                    return new E(null,{
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }
                ,
                e.DOMException = t.DOMException;
                try {
                    new e.DOMException
                } catch (S) {
                    e.DOMException = function(t, e) {
                        this.message = t,
                        this.name = e;
                        var r = Error(t);
                        this.stack = r.stack
                    }
                    ,
                    e.DOMException.prototype = Object.create(Error.prototype),
                    e.DOMException.prototype.constructor = e.DOMException
                }
                function P(t, r) {
                    return new Promise((function(n, s) {
                        var o = new w(t,r);
                        if (o.signal && o.signal.aborted)
                            return s(new e.DOMException("Aborted","AbortError"));
                        var a = new XMLHttpRequest;
                        function c() {
                            a.abort()
                        }
                        a.onload = function() {
                            var t = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: b(a.getAllResponseHeaders() || "")
                            };
                            t.url = "responseURL"in a ? a.responseURL : t.headers.get("X-Request-URL");
                            var e = "response"in a ? a.response : a.responseText;
                            n(new E(e,t))
                        }
                        ,
                        a.onerror = function() {
                            s(new TypeError("Network request failed"))
                        }
                        ,
                        a.ontimeout = function() {
                            s(new TypeError("Network request failed"))
                        }
                        ,
                        a.onabort = function() {
                            s(new e.DOMException("Aborted","AbortError"))
                        }
                        ,
                        a.open(o.method, o.url, !0),
                        "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1),
                        "responseType"in a && i && (a.responseType = "blob"),
                        o.headers.forEach((function(t, e) {
                            a.setRequestHeader(e, t)
                        }
                        )),
                        o.signal && (o.signal.addEventListener("abort", c),
                        a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", c)
                        }
                        ),
                        a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                    }
                    ))
                }
                P.polyfill = !0,
                t.fetch || (t.fetch = P,
                t.Headers = p,
                t.Request = w,
                t.Response = E),
                e.Headers = p,
                e.Request = w,
                e.Response = E,
                e.fetch = P,
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }({})
        }(n),
        n.fetch.ponyfill = !0,
        delete n.fetch.polyfill;
        var i = n;
        (e = i.fetch).default = i.fetch,
        e.fetch = i.fetch,
        e.Headers = i.Headers,
        e.Request = i.Request,
        e.Response = i.Response,
        t.exports = e
    },
    2923: (t,e)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.PINO_CUSTOM_CONTEXT_KEY = e.PINO_LOGGER_DEFAULTS = void 0,
        e.PINO_LOGGER_DEFAULTS = {
            level: "info"
        },
        e.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
    }
    ,
    1451: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.pino = void 0;
        const n = r(6254)
          , i = n.__importDefault(r(24));
        Object.defineProperty(e, "pino", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }),
        n.__exportStar(r(2923), e),
        n.__exportStar(r(1067), e)
    }
    ,
    1067: (t,e,r)=>{
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.generateChildLogger = e.formatChildLoggerContext = e.getLoggerContext = e.setBrowserLoggerContext = e.getBrowserLoggerContext = e.getDefaultLoggerOptions = void 0;
        const n = r(2923);
        function i(t) {
            return t[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY] || ""
        }
        function s(t, e) {
            return t[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY] = e,
            t
        }
        function o(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY
              , r = "";
            return r = "undefined" === typeof t.bindings ? i(t, e) : t.bindings().context || "",
            r
        }
        function a(t, e) {
            const r = o(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY);
            return r.trim() ? "".concat(r, "/").concat(e) : e
        }
        e.getDefaultLoggerOptions = function(t) {
            return Object.assign(Object.assign({}, t), {
                level: (null === t || void 0 === t ? void 0 : t.level) || n.PINO_LOGGER_DEFAULTS.level
            })
        }
        ,
        e.getBrowserLoggerContext = i,
        e.setBrowserLoggerContext = s,
        e.getLoggerContext = o,
        e.formatChildLoggerContext = a,
        e.generateChildLogger = function(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY;
            const i = a(t, e, r);
            return s(t.child({
                context: i
            }), i, r)
        }
    }
    ,
    6254: (t,e,r)=>{
        "use strict";
        r.r(e),
        r.d(e, {
            __assign: ()=>s,
            __asyncDelegator: ()=>_,
            __asyncGenerator: ()=>w,
            __asyncValues: ()=>b,
            __await: ()=>m,
            __awaiter: ()=>h,
            __classPrivateFieldGet: ()=>S,
            __classPrivateFieldSet: ()=>O,
            __createBinding: ()=>p,
            __decorate: ()=>a,
            __exportStar: ()=>f,
            __extends: ()=>i,
            __generator: ()=>l,
            __importDefault: ()=>P,
            __importStar: ()=>I,
            __makeTemplateObject: ()=>E,
            __metadata: ()=>u,
            __param: ()=>c,
            __read: ()=>g,
            __rest: ()=>o,
            __spread: ()=>v,
            __spreadArrays: ()=>y,
            __values: ()=>d
        });
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            ,
            n(t, e)
        };
        function i(t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        var s = function() {
            return s = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            s.apply(this, arguments)
        };
        function o(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
            }
            return r
        }
        function a(t, e, r, n) {
            var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                o = Reflect.decorate(t, e, r, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
            return s > 3 && o && Object.defineProperty(e, r, o),
            o
        }
        function c(t, e) {
            return function(r, n) {
                e(r, n, t)
            }
        }
        function u(t, e) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        function h(t, e, r, n) {
            return new (r || (r = Promise))((function(i, s) {
                function o(t) {
                    try {
                        c(n.next(t))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(t) {
                    try {
                        c(n.throw(t))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof r ? e : new r((function(t) {
                        t(e)
                    }
                    ))).then(o, a)
                }
                c((n = n.apply(t, e || [])).next())
            }
            ))
        }
        function l(t, e) {
            var r, n, i, s, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (r = 1,
                                n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n),
                                0) : n.next) && !(i = i.call(n, s[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    n = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < i[1]) {
                                        o.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    i[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = e.call(t, o)
                            } catch (a) {
                                s = [6, a],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        function p(t, e, r, n) {
            void 0 === n && (n = r),
            t[n] = e[r]
        }
        function f(t, e) {
            for (var r in t)
                "default" === r || e.hasOwnProperty(r) || (e[r] = t[r])
        }
        function d(t) {
            var e = "function" === typeof Symbol && Symbol.iterator
              , r = e && t[e]
              , n = 0;
            if (r)
                return r.call(t);
            if (t && "number" === typeof t.length)
                return {
                    next: function() {
                        return t && n >= t.length && (t = void 0),
                        {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function g(t, e) {
            var r = "function" === typeof Symbol && t[Symbol.iterator];
            if (!r)
                return t;
            var n, i, s = r.call(t), o = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; )
                    o.push(n.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    n && !n.done && (r = s.return) && r.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return o
        }
        function v() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(g(arguments[e]));
            return t
        }
        function y() {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++)
                t += arguments[e].length;
            var n = Array(t)
              , i = 0;
            for (e = 0; e < r; e++)
                for (var s = arguments[e], o = 0, a = s.length; o < a; o++,
                i++)
                    n[i] = s[o];
            return n
        }
        function m(t) {
            return this instanceof m ? (this.v = t,
            this) : new m(t)
        }
        function w(t, e, r) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, i = r.apply(t, e || []), s = [];
            return n = {},
            o("next"),
            o("throw"),
            o("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function o(t) {
                i[t] && (n[t] = function(e) {
                    return new Promise((function(r, n) {
                        s.push([t, e, r, n]) > 1 || a(t, e)
                    }
                    ))
                }
                )
            }
            function a(t, e) {
                try {
                    (r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                } catch (n) {
                    h(s[0][3], n)
                }
                var r
            }
            function c(t) {
                a("next", t)
            }
            function u(t) {
                a("throw", t)
            }
            function h(t, e) {
                t(e),
                s.shift(),
                s.length && a(s[0][0], s[0][1])
            }
        }
        function _(t) {
            var e, r;
            return e = {},
            n("next"),
            n("throw", (function(t) {
                throw t
            }
            )),
            n("return"),
            e[Symbol.iterator] = function() {
                return this
            }
            ,
            e;
            function n(n, i) {
                e[n] = t[n] ? function(e) {
                    return (r = !r) ? {
                        value: m(t[n](e)),
                        done: "return" === n
                    } : i ? i(e) : e
                }
                : i
            }
        }
        function b(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, r = t[Symbol.asyncIterator];
            return r ? r.call(t) : (t = d(t),
            e = {},
            n("next"),
            n("throw"),
            n("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function n(r) {
                e[r] = t[r] && function(e) {
                    return new Promise((function(n, i) {
                        (function(t, e, r, n) {
                            Promise.resolve(n).then((function(e) {
                                t({
                                    value: e,
                                    done: r
                                })
                            }
                            ), e)
                        }
                        )(n, i, (e = t[r](e)).done, e.value)
                    }
                    ))
                }
            }
        }
        function E(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {
                value: e
            }) : t.raw = e,
            t
        }
        function I(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t,
            e
        }
        function P(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function S(t, e) {
            if (!e.has(t))
                throw new TypeError("attempted to get private field on non-instance");
            return e.get(t)
        }
        function O(t, e, r) {
            if (!e.has(t))
                throw new TypeError("attempted to set private field on non-instance");
            return e.set(t, r),
            r
        }
    }
    ,
    5139: ()=>{}
    ,
    8041: t=>{
        "use strict";
        var e, r = "object" === typeof Reflect ? Reflect : null, n = r && "function" === typeof r.apply ? r.apply : function(t, e, r) {
            return Function.prototype.apply.call(t, e, r)
        }
        ;
        e = r && "function" === typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(t) {
            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
        }
        : function(t) {
            return Object.getOwnPropertyNames(t)
        }
        ;
        var i = Number.isNaN || function(t) {
            return t !== t
        }
        ;
        function s() {
            s.init.call(this)
        }
        t.exports = s,
        t.exports.once = function(t, e) {
            return new Promise((function(r, n) {
                function i(r) {
                    t.removeListener(e, s),
                    n(r)
                }
                function s() {
                    "function" === typeof t.removeListener && t.removeListener("error", i),
                    r([].slice.call(arguments))
                }
                g(t, e, s, {
                    once: !0
                }),
                "error" !== e && function(t, e, r) {
                    "function" === typeof t.on && g(t, "error", e, r)
                }(t, i, {
                    once: !0
                })
            }
            ))
        }
        ,
        s.EventEmitter = s,
        s.prototype._events = void 0,
        s.prototype._eventsCount = 0,
        s.prototype._maxListeners = void 0;
        var o = 10;
        function a(t) {
            if ("function" !== typeof t)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
        }
        function c(t) {
            return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
        }
        function u(t, e, r, n) {
            var i, s, o, u;
            if (a(r),
            void 0 === (s = t._events) ? (s = t._events = Object.create(null),
            t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, r.listener ? r.listener : r),
            s = t._events),
            o = s[e]),
            void 0 === o)
                o = s[e] = r,
                ++t._eventsCount;
            else if ("function" === typeof o ? o = s[e] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r),
            (i = c(t)) > 0 && o.length > i && !o.warned) {
                o.warned = !0;
                var h = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                h.name = "MaxListenersExceededWarning",
                h.emitter = t,
                h.type = e,
                h.count = o.length,
                u = h,
                console && console.warn && console.warn(u)
            }
            return t
        }
        function h() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function l(t, e, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            }
              , i = h.bind(n);
            return i.listener = r,
            n.wrapFn = i,
            i
        }
        function p(t, e, r) {
            var n = t._events;
            if (void 0 === n)
                return [];
            var i = n[e];
            return void 0 === i ? [] : "function" === typeof i ? r ? [i.listener || i] : [i] : r ? function(t) {
                for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                    e[r] = t[r].listener || t[r];
                return e
            }(i) : d(i, i.length)
        }
        function f(t) {
            var e = this._events;
            if (void 0 !== e) {
                var r = e[t];
                if ("function" === typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function d(t, e) {
            for (var r = new Array(e), n = 0; n < e; ++n)
                r[n] = t[n];
            return r
        }
        function g(t, e, r, n) {
            if ("function" === typeof t.on)
                n.once ? t.once(e, r) : t.on(e, r);
            else {
                if ("function" !== typeof t.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                t.addEventListener(e, (function i(s) {
                    n.once && t.removeEventListener(e, i),
                    r(s)
                }
                ))
            }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return o
            },
            set: function(t) {
                if ("number" !== typeof t || t < 0 || i(t))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                o = t
            }
        }),
        s.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        s.prototype.setMaxListeners = function(t) {
            if ("number" !== typeof t || t < 0 || i(t))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
            return this._maxListeners = t,
            this
        }
        ,
        s.prototype.getMaxListeners = function() {
            return c(this)
        }
        ,
        s.prototype.emit = function(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e.push(arguments[r]);
            var i = "error" === t
              , s = this._events;
            if (void 0 !== s)
                i = i && void 0 === s.error;
            else if (!i)
                return !1;
            if (i) {
                var o;
                if (e.length > 0 && (o = e[0]),
                o instanceof Error)
                    throw o;
                var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw a.context = o,
                a
            }
            var c = s[t];
            if (void 0 === c)
                return !1;
            if ("function" === typeof c)
                n(c, this, e);
            else {
                var u = c.length
                  , h = d(c, u);
                for (r = 0; r < u; ++r)
                    n(h[r], this, e)
            }
            return !0
        }
        ,
        s.prototype.addListener = function(t, e) {
            return u(this, t, e, !1)
        }
        ,
        s.prototype.on = s.prototype.addListener,
        s.prototype.prependListener = function(t, e) {
            return u(this, t, e, !0)
        }
        ,
        s.prototype.once = function(t, e) {
            return a(e),
            this.on(t, l(this, t, e)),
            this
        }
        ,
        s.prototype.prependOnceListener = function(t, e) {
            return a(e),
            this.prependListener(t, l(this, t, e)),
            this
        }
        ,
        s.prototype.removeListener = function(t, e) {
            var r, n, i, s, o;
            if (a(e),
            void 0 === (n = this._events))
                return this;
            if (void 0 === (r = n[t]))
                return this;
            if (r === e || r.listener === e)
                0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[t],
                n.removeListener && this.emit("removeListener", t, r.listener || e));
            else if ("function" !== typeof r) {
                for (i = -1,
                s = r.length - 1; s >= 0; s--)
                    if (r[s] === e || r[s].listener === e) {
                        o = r[s].listener,
                        i = s;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? r.shift() : function(t, e) {
                    for (; e + 1 < t.length; e++)
                        t[e] = t[e + 1];
                    t.pop()
                }(r, i),
                1 === r.length && (n[t] = r[0]),
                void 0 !== n.removeListener && this.emit("removeListener", t, o || e)
            }
            return this
        }
        ,
        s.prototype.off = s.prototype.removeListener,
        s.prototype.removeAllListeners = function(t) {
            var e, r, n;
            if (void 0 === (r = this._events))
                return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== r[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[t]),
                this;
            if (0 === arguments.length) {
                var i, s = Object.keys(r);
                for (n = 0; n < s.length; ++n)
                    "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" === typeof (e = r[t]))
                this.removeListener(t, e);
            else if (void 0 !== e)
                for (n = e.length - 1; n >= 0; n--)
                    this.removeListener(t, e[n]);
            return this
        }
        ,
        s.prototype.listeners = function(t) {
            return p(this, t, !0)
        }
        ,
        s.prototype.rawListeners = function(t) {
            return p(this, t, !1)
        }
        ,
        s.listenerCount = function(t, e) {
            return "function" === typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
        }
        ,
        s.prototype.listenerCount = f,
        s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? e(this._events) : []
        }
    }
    ,
    8117: (t,e,r)=>{
        t.exports = self.fetch || (self.fetch = r(9377).default || r(9377))
    }
    ,
    3108: (t,e,r)=>{
        t = r.nmd(t);
        var n = "__lodash_hash_undefined__"
          , i = 1
          , s = 2
          , o = 9007199254740991
          , a = "[object Arguments]"
          , c = "[object Array]"
          , u = "[object AsyncFunction]"
          , h = "[object Boolean]"
          , l = "[object Date]"
          , p = "[object Error]"
          , f = "[object Function]"
          , d = "[object GeneratorFunction]"
          , g = "[object Map]"
          , v = "[object Number]"
          , y = "[object Null]"
          , m = "[object Object]"
          , w = "[object Promise]"
          , _ = "[object Proxy]"
          , b = "[object RegExp]"
          , E = "[object Set]"
          , I = "[object String]"
          , P = "[object Symbol]"
          , S = "[object Undefined]"
          , O = "[object WeakMap]"
          , x = "[object ArrayBuffer]"
          , R = "[object DataView]"
          , C = /^\[object .+?Constructor\]$/
          , A = /^(?:0|[1-9]\d*)$/
          , j = {};
        j["[object Float32Array]"] = j["[object Float64Array]"] = j["[object Int8Array]"] = j["[object Int16Array]"] = j["[object Int32Array]"] = j["[object Uint8Array]"] = j["[object Uint8ClampedArray]"] = j["[object Uint16Array]"] = j["[object Uint32Array]"] = !0,
        j[a] = j[c] = j[x] = j[h] = j[R] = j[l] = j[p] = j[f] = j[g] = j[v] = j[m] = j[b] = j[E] = j[I] = j[O] = !1;
        var T = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
          , N = "object" == typeof self && self && self.Object === Object && self
          , L = T || N || Function("return this")()
          , D = e && !e.nodeType && e
          , q = D && t && !t.nodeType && t
          , M = q && q.exports === D
          , z = M && T.process
          , k = function() {
            try {
                return z && z.binding && z.binding("util")
            } catch (t) {}
        }()
          , U = k && k.isTypedArray;
        function H(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
                if (e(t[r], r, t))
                    return !0;
            return !1
        }
        function V(t) {
            var e = -1
              , r = Array(t.size);
            return t.forEach((function(t, n) {
                r[++e] = [n, t]
            }
            )),
            r
        }
        function K(t) {
            var e = -1
              , r = Array(t.size);
            return t.forEach((function(t) {
                r[++e] = t
            }
            )),
            r
        }
        var B, F, W = Array.prototype, G = Function.prototype, Z = Object.prototype, J = L["__core-js_shared__"], Q = G.toString, Y = Z.hasOwnProperty, $ = function() {
            var t = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(), X = Z.toString, tt = RegExp("^" + Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), et = M ? L.Buffer : void 0, rt = L.Symbol, nt = L.Uint8Array, it = Z.propertyIsEnumerable, st = W.splice, ot = rt ? rt.toStringTag : void 0, at = Object.getOwnPropertySymbols, ct = et ? et.isBuffer : void 0, ut = (B = Object.keys,
        F = Object,
        function(t) {
            return B(F(t))
        }
        ), ht = zt(L, "DataView"), lt = zt(L, "Map"), pt = zt(L, "Promise"), ft = zt(L, "Set"), dt = zt(L, "WeakMap"), gt = zt(Object, "create"), vt = Vt(ht), yt = Vt(lt), mt = Vt(pt), wt = Vt(ft), _t = Vt(dt), bt = rt ? rt.prototype : void 0, Et = bt ? bt.valueOf : void 0;
        function It(t) {
            var e = -1
              , r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        function Pt(t) {
            var e = -1
              , r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        function St(t) {
            var e = -1
              , r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        function Ot(t) {
            var e = -1
              , r = null == t ? 0 : t.length;
            for (this.__data__ = new St; ++e < r; )
                this.add(t[e])
        }
        function xt(t) {
            var e = this.__data__ = new Pt(t);
            this.size = e.size
        }
        function Rt(t, e) {
            var r = Ft(t)
              , n = !r && Bt(t)
              , i = !r && !n && Wt(t)
              , s = !r && !n && !i && Yt(t)
              , o = r || n || i || s
              , a = o ? function(t, e) {
                for (var r = -1, n = Array(t); ++r < t; )
                    n[r] = e(r);
                return n
            }(t.length, String) : []
              , c = a.length;
            for (var u in t)
                !e && !Y.call(t, u) || o && ("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Ht(u, c)) || a.push(u);
            return a
        }
        function Ct(t, e) {
            for (var r = t.length; r--; )
                if (Kt(t[r][0], e))
                    return r;
            return -1
        }
        function At(t) {
            return null == t ? void 0 === t ? S : y : ot && ot in Object(t) ? function(t) {
                var e = Y.call(t, ot)
                  , r = t[ot];
                try {
                    t[ot] = void 0;
                    var n = !0
                } catch (s) {}
                var i = X.call(t);
                n && (e ? t[ot] = r : delete t[ot]);
                return i
            }(t) : function(t) {
                return X.call(t)
            }(t)
        }
        function jt(t) {
            return Qt(t) && At(t) == a
        }
        function Tt(t, e, r, n, o) {
            return t === e || (null == t || null == e || !Qt(t) && !Qt(e) ? t !== t && e !== e : function(t, e, r, n, o, u) {
                var f = Ft(t)
                  , d = Ft(e)
                  , y = f ? c : Ut(t)
                  , w = d ? c : Ut(e)
                  , _ = (y = y == a ? m : y) == m
                  , S = (w = w == a ? m : w) == m
                  , O = y == w;
                if (O && Wt(t)) {
                    if (!Wt(e))
                        return !1;
                    f = !0,
                    _ = !1
                }
                if (O && !_)
                    return u || (u = new xt),
                    f || Yt(t) ? Dt(t, e, r, n, o, u) : function(t, e, r, n, o, a, c) {
                        switch (r) {
                        case R:
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                return !1;
                            t = t.buffer,
                            e = e.buffer;
                        case x:
                            return !(t.byteLength != e.byteLength || !a(new nt(t), new nt(e)));
                        case h:
                        case l:
                        case v:
                            return Kt(+t, +e);
                        case p:
                            return t.name == e.name && t.message == e.message;
                        case b:
                        case I:
                            return t == e + "";
                        case g:
                            var u = V;
                        case E:
                            var f = n & i;
                            if (u || (u = K),
                            t.size != e.size && !f)
                                return !1;
                            var d = c.get(t);
                            if (d)
                                return d == e;
                            n |= s,
                            c.set(t, e);
                            var y = Dt(u(t), u(e), n, o, a, c);
                            return c.delete(t),
                            y;
                        case P:
                            if (Et)
                                return Et.call(t) == Et.call(e)
                        }
                        return !1
                    }(t, e, y, r, n, o, u);
                if (!(r & i)) {
                    var C = _ && Y.call(t, "__wrapped__")
                      , A = S && Y.call(e, "__wrapped__");
                    if (C || A) {
                        var j = C ? t.value() : t
                          , T = A ? e.value() : e;
                        return u || (u = new xt),
                        o(j, T, r, n, u)
                    }
                }
                if (!O)
                    return !1;
                return u || (u = new xt),
                function(t, e, r, n, s, o) {
                    var a = r & i
                      , c = qt(t)
                      , u = c.length
                      , h = qt(e)
                      , l = h.length;
                    if (u != l && !a)
                        return !1;
                    var p = u;
                    for (; p--; ) {
                        var f = c[p];
                        if (!(a ? f in e : Y.call(e, f)))
                            return !1
                    }
                    var d = o.get(t);
                    if (d && o.get(e))
                        return d == e;
                    var g = !0;
                    o.set(t, e),
                    o.set(e, t);
                    var v = a;
                    for (; ++p < u; ) {
                        var y = t[f = c[p]]
                          , m = e[f];
                        if (n)
                            var w = a ? n(m, y, f, e, t, o) : n(y, m, f, t, e, o);
                        if (!(void 0 === w ? y === m || s(y, m, r, n, o) : w)) {
                            g = !1;
                            break
                        }
                        v || (v = "constructor" == f)
                    }
                    if (g && !v) {
                        var _ = t.constructor
                          , b = e.constructor;
                        _ == b || !("constructor"in t) || !("constructor"in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b || (g = !1)
                    }
                    return o.delete(t),
                    o.delete(e),
                    g
                }(t, e, r, n, o, u)
            }(t, e, r, n, Tt, o))
        }
        function Nt(t) {
            return !(!Jt(t) || function(t) {
                return !!$ && $ in t
            }(t)) && (Gt(t) ? tt : C).test(Vt(t))
        }
        function Lt(t) {
            if (!function(t) {
                var e = t && t.constructor
                  , r = "function" == typeof e && e.prototype || Z;
                return t === r
            }(t))
                return ut(t);
            var e = [];
            for (var r in Object(t))
                Y.call(t, r) && "constructor" != r && e.push(r);
            return e
        }
        function Dt(t, e, r, n, o, a) {
            var c = r & i
              , u = t.length
              , h = e.length;
            if (u != h && !(c && h > u))
                return !1;
            var l = a.get(t);
            if (l && a.get(e))
                return l == e;
            var p = -1
              , f = !0
              , d = r & s ? new Ot : void 0;
            for (a.set(t, e),
            a.set(e, t); ++p < u; ) {
                var g = t[p]
                  , v = e[p];
                if (n)
                    var y = c ? n(v, g, p, e, t, a) : n(g, v, p, t, e, a);
                if (void 0 !== y) {
                    if (y)
                        continue;
                    f = !1;
                    break
                }
                if (d) {
                    if (!H(e, (function(t, e) {
                        if (i = e,
                        !d.has(i) && (g === t || o(g, t, r, n, a)))
                            return d.push(e);
                        var i
                    }
                    ))) {
                        f = !1;
                        break
                    }
                } else if (g !== v && !o(g, v, r, n, a)) {
                    f = !1;
                    break
                }
            }
            return a.delete(t),
            a.delete(e),
            f
        }
        function qt(t) {
            return function(t, e, r) {
                var n = e(t);
                return Ft(t) ? n : function(t, e) {
                    for (var r = -1, n = e.length, i = t.length; ++r < n; )
                        t[i + r] = e[r];
                    return t
                }(n, r(t))
            }(t, $t, kt)
        }
        function Mt(t, e) {
            var r = t.__data__;
            return function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }
        function zt(t, e) {
            var r = function(t, e) {
                return null == t ? void 0 : t[e]
            }(t, e);
            return Nt(r) ? r : void 0
        }
        It.prototype.clear = function() {
            this.__data__ = gt ? gt(null) : {},
            this.size = 0
        }
        ,
        It.prototype.delete = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
            e
        }
        ,
        It.prototype.get = function(t) {
            var e = this.__data__;
            if (gt) {
                var r = e[t];
                return r === n ? void 0 : r
            }
            return Y.call(e, t) ? e[t] : void 0
        }
        ,
        It.prototype.has = function(t) {
            var e = this.__data__;
            return gt ? void 0 !== e[t] : Y.call(e, t)
        }
        ,
        It.prototype.set = function(t, e) {
            var r = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
            r[t] = gt && void 0 === e ? n : e,
            this
        }
        ,
        Pt.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        Pt.prototype.delete = function(t) {
            var e = this.__data__
              , r = Ct(e, t);
            return !(r < 0) && (r == e.length - 1 ? e.pop() : st.call(e, r, 1),
            --this.size,
            !0)
        }
        ,
        Pt.prototype.get = function(t) {
            var e = this.__data__
              , r = Ct(e, t);
            return r < 0 ? void 0 : e[r][1]
        }
        ,
        Pt.prototype.has = function(t) {
            return Ct(this.__data__, t) > -1
        }
        ,
        Pt.prototype.set = function(t, e) {
            var r = this.__data__
              , n = Ct(r, t);
            return n < 0 ? (++this.size,
            r.push([t, e])) : r[n][1] = e,
            this
        }
        ,
        St.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new It,
                map: new (lt || Pt),
                string: new It
            }
        }
        ,
        St.prototype.delete = function(t) {
            var e = Mt(this, t).delete(t);
            return this.size -= e ? 1 : 0,
            e
        }
        ,
        St.prototype.get = function(t) {
            return Mt(this, t).get(t)
        }
        ,
        St.prototype.has = function(t) {
            return Mt(this, t).has(t)
        }
        ,
        St.prototype.set = function(t, e) {
            var r = Mt(this, t)
              , n = r.size;
            return r.set(t, e),
            this.size += r.size == n ? 0 : 1,
            this
        }
        ,
        Ot.prototype.add = Ot.prototype.push = function(t) {
            return this.__data__.set(t, n),
            this
        }
        ,
        Ot.prototype.has = function(t) {
            return this.__data__.has(t)
        }
        ,
        xt.prototype.clear = function() {
            this.__data__ = new Pt,
            this.size = 0
        }
        ,
        xt.prototype.delete = function(t) {
            var e = this.__data__
              , r = e.delete(t);
            return this.size = e.size,
            r
        }
        ,
        xt.prototype.get = function(t) {
            return this.__data__.get(t)
        }
        ,
        xt.prototype.has = function(t) {
            return this.__data__.has(t)
        }
        ,
        xt.prototype.set = function(t, e) {
            var r = this.__data__;
            if (r instanceof Pt) {
                var n = r.__data__;
                if (!lt || n.length < 199)
                    return n.push([t, e]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new St(n)
            }
            return r.set(t, e),
            this.size = r.size,
            this
        }
        ;
        var kt = at ? function(t) {
            return null == t ? [] : (t = Object(t),
            function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, i = 0, s = []; ++r < n; ) {
                    var o = t[r];
                    e(o, r, t) && (s[i++] = o)
                }
                return s
            }(at(t), (function(e) {
                return it.call(t, e)
            }
            )))
        }
        : function() {
            return []
        }
          , Ut = At;
        function Ht(t, e) {
            return !!(e = null == e ? o : e) && ("number" == typeof t || A.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        function Vt(t) {
            if (null != t) {
                try {
                    return Q.call(t)
                } catch (e) {}
                try {
                    return t + ""
                } catch (e) {}
            }
            return ""
        }
        function Kt(t, e) {
            return t === e || t !== t && e !== e
        }
        (ht && Ut(new ht(new ArrayBuffer(1))) != R || lt && Ut(new lt) != g || pt && Ut(pt.resolve()) != w || ft && Ut(new ft) != E || dt && Ut(new dt) != O) && (Ut = function(t) {
            var e = At(t)
              , r = e == m ? t.constructor : void 0
              , n = r ? Vt(r) : "";
            if (n)
                switch (n) {
                case vt:
                    return R;
                case yt:
                    return g;
                case mt:
                    return w;
                case wt:
                    return E;
                case _t:
                    return O
                }
            return e
        }
        );
        var Bt = jt(function() {
            return arguments
        }()) ? jt : function(t) {
            return Qt(t) && Y.call(t, "callee") && !it.call(t, "callee")
        }
          , Ft = Array.isArray;
        var Wt = ct || function() {
            return !1
        }
        ;
        function Gt(t) {
            if (!Jt(t))
                return !1;
            var e = At(t);
            return e == f || e == d || e == u || e == _
        }
        function Zt(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
        }
        function Jt(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        function Qt(t) {
            return null != t && "object" == typeof t
        }
        var Yt = U ? function(t) {
            return function(e) {
                return t(e)
            }
        }(U) : function(t) {
            return Qt(t) && Zt(t.length) && !!j[At(t)]
        }
        ;
        function $t(t) {
            return null != (e = t) && Zt(e.length) && !Gt(e) ? Rt(t) : Lt(t);
            var e
        }
        t.exports = function(t, e) {
            return Tt(t, e)
        }
    }
    ,
    5960: t=>{
        "use strict";
        function e(t) {
            try {
                return JSON.stringify(t)
            } catch (e) {
                return '"[Circular]"'
            }
        }
        t.exports = function(t, r, n) {
            var i = n && n.stringify || e;
            if ("object" === typeof t && null !== t) {
                var s = r.length + 1;
                if (1 === s)
                    return t;
                var o = new Array(s);
                o[0] = i(t);
                for (var a = 1; a < s; a++)
                    o[a] = i(r[a]);
                return o.join(" ")
            }
            if ("string" !== typeof t)
                return t;
            var c = r.length;
            if (0 === c)
                return t;
            for (var u = "", h = 0, l = -1, p = t && t.length || 0, f = 0; f < p; ) {
                if (37 === t.charCodeAt(f) && f + 1 < p) {
                    switch (l = l > -1 ? l : 0,
                    t.charCodeAt(f + 1)) {
                    case 100:
                    case 102:
                        if (h >= c)
                            break;
                        if (null == r[h])
                            break;
                        l < f && (u += t.slice(l, f)),
                        u += Number(r[h]),
                        l = f + 2,
                        f++;
                        break;
                    case 105:
                        if (h >= c)
                            break;
                        if (null == r[h])
                            break;
                        l < f && (u += t.slice(l, f)),
                        u += Math.floor(Number(r[h])),
                        l = f + 2,
                        f++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (h >= c)
                            break;
                        if (void 0 === r[h])
                            break;
                        l < f && (u += t.slice(l, f));
                        var d = typeof r[h];
                        if ("string" === d) {
                            u += "'" + r[h] + "'",
                            l = f + 2,
                            f++;
                            break
                        }
                        if ("function" === d) {
                            u += r[h].name || "<anonymous>",
                            l = f + 2,
                            f++;
                            break
                        }
                        u += i(r[h]),
                        l = f + 2,
                        f++;
                        break;
                    case 115:
                        if (h >= c)
                            break;
                        l < f && (u += t.slice(l, f)),
                        u += String(r[h]),
                        l = f + 2,
                        f++;
                        break;
                    case 37:
                        l < f && (u += t.slice(l, f)),
                        u += "%",
                        l = f + 2,
                        f++,
                        h--
                    }
                    ++h
                }
                ++f
            }
            if (-1 === l)
                return t;
            l < p && (u += t.slice(l));
            return u
        }
    }
    ,
    9377: (t,e,r)=>{
        "use strict";
        function n(t, e) {
            return e = e || {},
            new Promise((function(r, n) {
                var i = new XMLHttpRequest
                  , s = []
                  , o = []
                  , a = {}
                  , c = function() {
                    return {
                        ok: 2 == (i.status / 100 | 0),
                        statusText: i.statusText,
                        status: i.status,
                        url: i.responseURL,
                        text: function() {
                            return Promise.resolve(i.responseText)
                        },
                        json: function() {
                            return Promise.resolve(i.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([i.response]))
                        },
                        clone: c,
                        headers: {
                            keys: function() {
                                return s
                            },
                            entries: function() {
                                return o
                            },
                            get: function(t) {
                                return a[t.toLowerCase()]
                            },
                            has: function(t) {
                                return t.toLowerCase()in a
                            }
                        }
                    }
                };
                for (var u in i.open(e.method || "get", t, !0),
                i.onload = function() {
                    i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, r) {
                        s.push(e = e.toLowerCase()),
                        o.push([e, r]),
                        a[e] = a[e] ? a[e] + "," + r : r
                    }
                    )),
                    r(c())
                }
                ,
                i.onerror = n,
                i.withCredentials = "include" == e.credentials,
                e.headers)
                    i.setRequestHeader(u, e.headers[u]);
                i.send(e.body || null)
            }
            ))
        }
        r.r(e),
        r.d(e, {
            default: ()=>n
        })
    }
    ,
    6280: t=>{
        "use strict";
        t.exports = function() {
            throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
        }
    }
    ,
    24: (t,e,r)=>{
        "use strict";
        const n = r(5960);
        t.exports = o;
        const i = function() {
            function t(t) {
                return "undefined" !== typeof t && t
            }
            try {
                return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                    get: function() {
                        return delete Object.prototype.globalThis,
                        this.globalThis = this
                    },
                    configurable: !0
                }),
                globalThis
            } catch (e) {
                return t(self) || t(window) || t(this) || {}
            }
        }().console || {}
          , s = {
            mapHttpRequest: p,
            mapHttpResponse: p,
            wrapRequestSerializer: f,
            wrapResponseSerializer: f,
            wrapErrorSerializer: f,
            req: p,
            res: p,
            err: function(t) {
                const e = {
                    type: t.constructor.name,
                    msg: t.message,
                    stack: t.stack
                };
                for (const r in t)
                    void 0 === e[r] && (e[r] = t[r]);
                return e
            }
        };
        function o(t) {
            (t = t || {}).browser = t.browser || {};
            const e = t.browser.transmit;
            if (e && "function" !== typeof e.send)
                throw Error("pino: transmit option must have a send function");
            const r = t.browser.write || i;
            t.browser.write && (t.browser.asObject = !0);
            const n = t.serializers || {}
              , s = function(t, e) {
                if (Array.isArray(t))
                    return t.filter((function(t) {
                        return "!stdSerializers.err" !== t
                    }
                    ));
                return !0 === t && Object.keys(e)
            }(t.browser.serialize, n);
            let p = t.browser.serialize;
            Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (p = !1);
            "function" === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
            !1 === t.enabled && (t.level = "silent");
            const f = t.level || "info"
              , g = Object.create(r);
            g.log || (g.log = d),
            Object.defineProperty(g, "levelVal", {
                get: function() {
                    return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                }
            }),
            Object.defineProperty(g, "level", {
                get: function() {
                    return this._level
                },
                set: function(t) {
                    if ("silent" !== t && !this.levels.values[t])
                        throw Error("unknown level " + t);
                    this._level = t,
                    a(v, g, "error", "log"),
                    a(v, g, "fatal", "error"),
                    a(v, g, "warn", "error"),
                    a(v, g, "info", "log"),
                    a(v, g, "debug", "log"),
                    a(v, g, "trace", "log")
                }
            });
            const v = {
                transmit: e,
                serialize: s,
                asObject: t.browser.asObject,
                levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                timestamp: l(t)
            };
            return g.levels = o.levels,
            g.level = f,
            g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = d,
            g.serializers = n,
            g._serialize = s,
            g._stdErrSerialize = p,
            g.child = function(r, i) {
                if (!r)
                    throw new Error("missing bindings for child Pino");
                i = i || {},
                s && r.serializers && (i.serializers = r.serializers);
                const o = i.serializers;
                if (s && o) {
                    var a = Object.assign({}, n, o)
                      , l = !0 === t.browser.serialize ? Object.keys(a) : s;
                    delete r.serializers,
                    c([r], l, a, this._stdErrSerialize)
                }
                function p(t) {
                    this._childLevel = 1 + (0 | t._childLevel),
                    this.error = u(t, r, "error"),
                    this.fatal = u(t, r, "fatal"),
                    this.warn = u(t, r, "warn"),
                    this.info = u(t, r, "info"),
                    this.debug = u(t, r, "debug"),
                    this.trace = u(t, r, "trace"),
                    a && (this.serializers = a,
                    this._serialize = l),
                    e && (this._logEvent = h([].concat(t._logEvent.bindings, r)))
                }
                return p.prototype = this,
                new p(this)
            }
            ,
            e && (g._logEvent = h()),
            g
        }
        function a(t, e, r, s) {
            const a = Object.getPrototypeOf(e);
            e[r] = e.levelVal > e.levels.values[r] ? d : a[r] ? a[r] : i[r] || i[s] || d,
            function(t, e, r) {
                if (!t.transmit && e[r] === d)
                    return;
                e[r] = (s = e[r],
                function() {
                    const a = t.timestamp()
                      , u = new Array(arguments.length)
                      , l = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                    for (var p = 0; p < u.length; p++)
                        u[p] = arguments[p];
                    if (t.serialize && !t.asObject && c(u, this._serialize, this.serializers, this._stdErrSerialize),
                    t.asObject ? s.call(l, function(t, e, r, i) {
                        t._serialize && c(r, t._serialize, t.serializers, t._stdErrSerialize);
                        const s = r.slice();
                        let a = s[0];
                        const u = {};
                        i && (u.time = i),
                        u.level = o.levels.values[e];
                        let h = 1 + (0 | t._childLevel);
                        if (h < 1 && (h = 1),
                        null !== a && "object" === typeof a) {
                            for (; h-- && "object" === typeof s[0]; )
                                Object.assign(u, s.shift());
                            a = s.length ? n(s.shift(), s) : void 0
                        } else
                            "string" === typeof a && (a = n(s.shift(), s));
                        return void 0 !== a && (u.msg = a),
                        u
                    }(this, r, u, a)) : s.apply(l, u),
                    t.transmit) {
                        const n = t.transmit.level || e.level
                          , i = o.levels.values[n]
                          , s = o.levels.values[r];
                        if (s < i)
                            return;
                        !function(t, e, r) {
                            const n = e.send
                              , i = e.ts
                              , s = e.methodLevel
                              , o = e.methodValue
                              , a = e.val
                              , u = t._logEvent.bindings;
                            c(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize),
                            t._logEvent.ts = i,
                            t._logEvent.messages = r.filter((function(t) {
                                return -1 === u.indexOf(t)
                            }
                            )),
                            t._logEvent.level.label = s,
                            t._logEvent.level.value = o,
                            n(s, t._logEvent, a),
                            t._logEvent = h(u)
                        }(this, {
                            ts: a,
                            methodLevel: r,
                            methodValue: s,
                            transmitLevel: n,
                            transmitValue: o.levels.values[t.transmit.level || e.level],
                            send: t.transmit.send,
                            val: e.levelVal
                        }, u)
                    }
                }
                );
                var s
            }(t, e, r)
        }
        function c(t, e, r, n) {
            for (const i in t)
                if (n && t[i]instanceof Error)
                    t[i] = o.stdSerializers.err(t[i]);
                else if ("object" === typeof t[i] && !Array.isArray(t[i]))
                    for (const n in t[i])
                        e && e.indexOf(n) > -1 && n in r && (t[i][n] = r[n](t[i][n]))
        }
        function u(t, e, r) {
            return function() {
                const n = new Array(1 + arguments.length);
                n[0] = e;
                for (var i = 1; i < n.length; i++)
                    n[i] = arguments[i - 1];
                return t[r].apply(this, n)
            }
        }
        function h(t) {
            return {
                ts: 0,
                messages: [],
                bindings: t || [],
                level: {
                    label: "",
                    value: 0
                }
            }
        }
        function l(t) {
            return "function" === typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? g : v
        }
        function p() {
            return {}
        }
        function f(t) {
            return t
        }
        function d() {}
        function g() {
            return !1
        }
        function v() {
            return Date.now()
        }
        o.levels = {
            values: {
                fatal: 60,
                error: 50,
                warn: 40,
                info: 30,
                debug: 20,
                trace: 10
            },
            labels: {
                10: "trace",
                20: "debug",
                30: "info",
                40: "warn",
                50: "error",
                60: "fatal"
            }
        },
        o.stdSerializers = s,
        o.stdTimeFunctions = Object.assign({}, {
            nullTime: g,
            epochTime: v,
            unixTime: function() {
                return Math.round(Date.now() / 1e3)
            },
            isoTime: function() {
                return new Date(Date.now()).toISOString()
            }
        })
    }
}]);
