// Wedding invitation app (envelope opening, scratch-to-reveal date, schedule, family, moments, RSVP).
// Content comes from ./weddingData.js
/* eslint-disable */
import * as React from "react";
import { createPortal } from "react-dom";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import VenueCard from "./VenueCard.jsx";
import Credit from "./Credit.jsx";
import { Hashtag, Titles, Tt, kp, zc, xp, Ic, ms, Pe, Rr, Sp, tt, Oc } from "./weddingData.js";
const C = React;
const a = { jsx, jsxs, Fragment };
const Lc = { createPortal };

function Mc(e, t) {
  return e.addEventListener
    ? (e.addEventListener("change", t),
      () => e.removeEventListener("change", t))
    : (e.addListener(t), () => e.removeListener(t));
}
const Mr = window.matchMedia("(prefers-reduced-motion: reduce)"),
  mp = {
    leaving: !1,
    opening: !1,
    hidden: !1,
    endSrc: "",
    openDisabled: !1,
    skipHidden: !0,
    videoHidden: !0,
  };
function hp({ openingVideo: e, openingPoster: t, endFrame: n }) {
  const r = C.useRef(null),
    l = C.useRef(null),
    o = C.useRef(!1),
    i = C.useRef(!1),
    u = C.useRef(),
    s = C.useRef(),
    [p, g] = C.useState(mp),
    [h, v] = C.useState(!1),
    w = C.useCallback(() => {
      i.current ||
        ((i.current = !0),
        clearTimeout(u.current),
        g((k) => ({ ...k, leaving: !0 })),
        v(!0),
        document.body.classList.remove("locked"),
        (s.current = setTimeout(
          () => {
            var k, L;
            (g((f) => ({ ...f, hidden: !0 })),
              (L = (k = r.current) == null ? void 0 : k.pause) == null ||
                L.call(k));
          },
          Mr.matches ? 0 : 900,
        )));
    }, []);
  (C.useEffect(() => {
    document.body.classList.add("locked");
    const k = r.current;
    if (!k)
      return () => {
        (clearTimeout(u.current), clearTimeout(s.current));
      };
    ((k.src = e), (k.poster = t), (k.preload = "auto"));
    const L = () => {
        Number.isFinite(k.duration) &&
          k.currentTime >= k.duration - 0.15 &&
          w();
      },
      f = () => {
        o.current && w();
      };
    return (
      k.addEventListener("ended", w),
      k.addEventListener("error", f),
      k.addEventListener("timeupdate", L),
      () => {
        (k.removeEventListener("ended", w),
          k.removeEventListener("error", f),
          k.removeEventListener("timeupdate", L),
          clearTimeout(u.current),
          clearTimeout(s.current));
      }
    );
  }, [e, t, w]),
    C.useEffect(
      () =>
        Mc(Mr, (L) => {
          L.matches && o.current && w();
        }),
      [w],
    ),
    C.useEffect(() => {
      var k;
      p.skipHidden || (k = l.current) == null || k.focus();
    }, [p.skipHidden]));
  const E = C.useCallback(async () => {
    if (o.current) return;
    ((o.current = !0), g((L) => ({ ...L, openDisabled: !0 })));
    const k = r.current;
    if (k && e && !Mr.matches) {
      ((k.hidden = !1),
        g((L) => ({ ...L, skipHidden: !1, videoHidden: !1 })),
        (u.current = setTimeout(w, 2e4)));
      try {
        await k.play();
      } catch {
        w();
      }
    } else
      Mr.matches
        ? w()
        : (g((L) => ({ ...L, endSrc: n, opening: !0 })),
          (u.current = setTimeout(w, 1800)));
  }, [e, n, w]);
  return {
    entrance: p,
    entered: h,
    refs: { opening: r, skip: l },
    openInvitation: E,
    finishOpening: w,
  };
}
const ds = () =>
  location.hash.startsWith("#/moments")
    ? "moments"
    : "home";
function vp() {
  const [e, t] = C.useState(ds);
  return (
    C.useEffect(() => {
      const n = () => t(ds());
      return (
        window.addEventListener("hashchange", n),
        () => window.removeEventListener("hashchange", n)
      );
    }, []),
    e
  );
}
const Dt = (e) => {
    location.hash = e;
  },
  Rc = Math.min(window.innerWidth, window.innerHeight) < 700,
  Ut = Rc ? 360 : 540,
  Bt = Rc ? 640 : 960,
  so = 14,
  ps = 60,
  gp = 2.3;
function yp({
  names: e,
  poster: t,
  matteSrc: n,
  state: r,
  refs: l,
  onOpen: o,
  onSkip: i,
}) {
  const u = C.useRef(null),
    s = C.useRef(null),
    p = !r.videoHidden,
    [g, h] = C.useState(!1),
    [v, w] = C.useState(!1),
    [E, k] = C.useState(!1),
    [L, f] = C.useState(!1),
    c = C.useRef(null);
  return (
    C.useEffect(() => {
      let d = !1;
      const m = new Image();
      return (
        (m.onload = () => {
          if (d) return;
          const y = document.createElement("canvas");
          ((y.width = Ut), (y.height = Bt));
          const N = y.getContext("2d", { willReadFrequently: !0 });
          (N.drawImage(m, 0, 0, Ut, Bt),
            (c.current = N.getImageData(0, 0, Ut, Bt).data));
        }),
        (m.src = n),
        () => {
          d = !0;
        }
      );
    }, [n]),
    C.useEffect(() => {
      if (!p) return;
      const d = l.opening.current,
        m = s.current.getContext("2d", { willReadFrequently: !0 });
      let y = 0,
        N = !1,
        x = !1;
      const j = () => {
        if (N) return;
        const T = c.current;
        if (T && d.readyState >= 2 && d.currentTime > 0) {
          m.drawImage(d, 0, 0, Ut, Bt);
          const D = m.getImageData(0, 0, Ut, Bt),
            G = D.data,
            te = d.currentTime < gp;
          for (let oe = 0; oe < G.length; oe += 4) {
            if (te) {
              G[oe + 3] = 255;
              continue;
            }
            const kn = Math.max(
              Math.abs(G[oe] - T[oe]),
              Math.abs(G[oe + 1] - T[oe + 1]),
              Math.abs(G[oe + 2] - T[oe + 2]),
            );
            G[oe + 3] =
              kn <= so ? 0 : kn >= ps ? 255 : ((kn - so) / (ps - so)) * 255;
          }
          (m.putImageData(D, 0, 0),
            d.duration && d.currentTime >= d.duration - 1.3 && k(!0),
            x || ((x = !0), f(!0)));
        }
        y = requestAnimationFrame(j);
      };
      y = requestAnimationFrame(j);
      const R = setTimeout(() => {
        !x && !N && w(!0);
      }, 1800);
      return () => {
        ((N = !0), cancelAnimationFrame(y), clearTimeout(R));
      };
    }, [p, l.opening]),
    a.jsxs("div", {
      ref: u,
      className: `entrance${r.leaving ? " leaving" : ""}${r.opening ? " opening" : ""}${L ? " film" : ""}${E ? " ending" : ""}${v ? " plain" : ""}${g ? " ready" : ""}`,
      id: "entrance",
      hidden: r.hidden,
      children: [
        a.jsx("div", { className: "door-glass", "aria-hidden": "true" }),
        a.jsxs("div", {
          className: "door-glow",
          "aria-hidden": "true",
          children: [a.jsx("i", {}), a.jsx("i", {}), a.jsx("i", {})],
        }),
        a.jsx("img", {
          className: "envelope",
          src: t,
          alt: "मोहर लगा निमंत्रण लिफ़ाफ़ा",
          fetchpriority: "high",
          ref: (d) => {
            d && d.complete && d.naturalWidth && h(!0);
          },
          onLoad: () => h(!0),
          onError: () => h(!0),
        }),
        a.jsx("img", {
          className: "envelope envelope-end",
          id: "envelope-end",
          src: r.endSrc || void 0,
          alt: "",
          hidden: !r.endSrc,
        }),
        a.jsx("button", {
          className: "open-invitation",
          id: "open",
          "aria-label": "विवाह निमंत्रण खोलें",
          disabled: r.openDisabled,
          onClick: o,
          children: a.jsxs("span", {
            className: "open-caption",
            children: ["निमंत्रण खोलें", a.jsx("small", { children: e })],
          }),
        }),
        a.jsx("video", {
          className: "opening-video",
          id: "opening-video",
          ref: l.opening,
          muted: !0,
          playsInline: !0,
          preload: "none",
        }),
        a.jsx("canvas", {
          className: "opening-canvas",
          ref: s,
          width: Ut,
          height: Bt,
          hidden: !p,
        }),
        a.jsx("button", {
          className: "skip-opening",
          id: "skip",
          ref: l.skip,
          hidden: r.skipHidden,
          onClick: i,
          children: "आगे बढ़ें",
        }),
      ],
    })
  );
}
function wp(e) {
  const [t, n] = C.useState(e[0]);
  return (
    C.useEffect(() => {
      const r = new IntersectionObserver(
        (l) => l.forEach((o) => o.isIntersecting && n(o.target.id)),
        { rootMargin: "-50% 0px -50% 0px" },
      );
      return (
        e.forEach((l) => {
          const o = document.getElementById(l);
          o && r.observe(o);
        }),
        () => r.disconnect()
      );
    }, [e]),
    t
  );
}
function ri(e = 60, t = 0) {
  const [n, r] = C.useState(!1);
  return (
    C.useEffect(() => {
      const l = () => r(window.scrollY > e + t * window.innerHeight);
      return (
        l(),
        window.addEventListener("scroll", l, { passive: !0 }),
        () => window.removeEventListener("scroll", l)
      );
    }, [e, t]),
    n
  );
}
function eu(e) {
  var t;
  (t = document.getElementById(e)) == null ||
    t.scrollIntoView({ behavior: "smooth", block: "start" });
}
const Dc = (e) =>
    a.jsxs("svg", {
      viewBox: "0 0 32 32",
      width: "32",
      height: "32",
      "aria-hidden": "true",
      ...e,
      children: [
        a.jsx("path", {
          d: "M6 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z",
          fill: "currentColor",
        }),
        a.jsx("path", {
          d: "M6 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z",
          fill: "currentColor",
        }),
      ],
    }),
  Fc = () =>
    a.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "66",
      height: "15",
      fill: "none",
      viewBox: "0 0 66 15",
      className: "chev",
      "aria-hidden": "true",
      children: a.jsx("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M30.294 14.1a10 10 0 0 0 5.882 0l27.905-8.586a2.5 2.5 0 0 0-1.47-4.779L36.176 8.87a10 10 0 0 1-5.882 0L3.86.735a2.5 2.5 0 0 0-1.47 4.78z",
        clipRule: "evenodd",
        opacity: "0.8",
      }),
    }),
  Ep = () =>
    a.jsxs("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        a.jsx("path", {
          d: "M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0",
        }),
        a.jsx("circle", { cx: "12", cy: "10", r: "3" }),
      ],
    }),
  Np = () =>
    a.jsx("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: a.jsx("path", {
        d: "M12 2a3 3 0 0 0-3 3c0 1.66 3 3 3 3M2 20l10-7 10 7M2 20h20",
      }),
    }),
  tu = () =>
    a.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: a.jsx("path", { d: "M5 5l14 14M19 5L5 19" }),
    }),
  ir = ({ dir: e = "left" }) =>
    a.jsx("svg", {
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: e === "right" ? { transform: "rotate(180deg)" } : void 0,
      children: a.jsx("path", { d: "M19 12H5M11 5l-7 7 7 7" }),
    }),
  Cp = [
    ["welcome", Pe.hero, "Dhruv and Vandana"],
    ["story", Pe.story, ""],
    ["schedule", Pe.schedule, ""],
    ["party", Pe.party, ""],
  ];
function jp({ active: e }) {
  const t = ri(60);
  return a.jsxs("header", {
    className: "panel",
    children: [
      Cp.map(([n, r, l]) =>
        a.jsx(
          "img",
          { className: `photo${e === n ? " on" : ""}`, src: r, alt: l },
          n,
        ),
      ),
      a.jsx("div", { className: "panel-shade" }),
      a.jsxs("div", {
        className: "panel-text",
        children: [
          a.jsx("h1", { children: Tt.names }),
          a.jsx("p", { children: Tt.greeting }),
        ],
      }),
      a.jsxs("button", {
        className: `scroll-cue${t ? " off" : ""}`,
        onClick: () =>
          eu(
            window.matchMedia("(max-width:1023px)").matches
              ? "scratch-strip"
              : "welcome",
          ),
        "aria-label": "Scroll down",
        children: [a.jsx("span", { children: "नीचे देखें" }), a.jsx(Fc, {})],
      }),
    ],
  });
}
const zr = (e, t, n) => `${e} ${e === 1 ? t : n}`;
function _p(e) {
  const [t, n] = C.useState(() => Date.now());
  C.useEffect(() => {
    const o = setInterval(() => n(Date.now()), 1e3);
    return () => clearInterval(o);
  }, []);
  const r = Math.max(0, new Date(e).getTime() - t),
    l = Math.floor(r / 1e3);
  return [
    zr(Math.floor(l / 86400), "दिन", "दिन"),
    zr(Math.floor(l / 3600) % 24, "घंटा", "घंटे"),
    zr(Math.floor(l / 60) % 60, "मिनट", "मिनट"),
    zr(l % 60, "सेकंड", "सेकंड"),
  ].join(" ");
}
const Ir = [
    "#c9a96a",
    "#e8d9a8",
    "#fbf6e6",
    "#294e7b",
    "#6d8fbf",
    "#d89aa8",
    "#ffffff",
  ],
  ao = 4200;
function Pp({ origin: e, onDone: t }) {
  const n = C.useRef(null);
  return (
    C.useEffect(() => {
      const r = n.current;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        t == null || t();
        return;
      }
      const o = Math.min(window.devicePixelRatio || 1, 2),
        i = window.innerWidth,
        u = window.innerHeight;
      ((r.width = i * o), (r.height = u * o));
      const s = r.getContext("2d");
      s.scale(o, o);
      const p = (e == null ? void 0 : e.x) ?? i / 2,
        g = (e == null ? void 0 : e.y) ?? u / 2,
        h = (c, d) => c + Math.random() * (d - c),
        v = Array.from({ length: 90 }, () => {
          const c = h(-Math.PI * 0.95, -Math.PI * 0.05),
            d = h(6, 15);
          return {
            x: p,
            y: g,
            vx: Math.cos(c) * d,
            vy: Math.sin(c) * d,
            w: h(6, 11),
            h: h(4, 7),
            r: h(0, 6),
            vr: h(-0.3, 0.3),
            c: Ir[(Math.random() * Ir.length) | 0],
            round: Math.random() < 0.25,
            delay: 0,
          };
        }),
        w = Array.from({ length: 80 }, () => ({
          x: h(0, i),
          y: h(-u * 0.3, -10),
          vx: h(-0.8, 0.8),
          vy: h(1.5, 4),
          w: h(6, 10),
          h: h(4, 7),
          r: h(0, 6),
          vr: h(-0.2, 0.2),
          c: Ir[(Math.random() * Ir.length) | 0],
          round: Math.random() < 0.25,
          delay: h(0, 700),
        })),
        E = [...v, ...w],
        k = performance.now();
      let L = 0;
      const f = (c) => {
        const d = c - k;
        s.clearRect(0, 0, i, u);
        const m = d > ao - 900 ? Math.max(0, (ao - d) / 900) : 1;
        for (const y of E)
          d < y.delay ||
            ((y.vy += 0.22),
            (y.vx *= 0.99),
            (y.vy = Math.min(y.vy, 6.5)),
            (y.x += y.vx + Math.sin((d + y.r * 400) / 300) * 0.6),
            (y.y += y.vy),
            (y.r += y.vr),
            s.save(),
            (s.globalAlpha = m),
            s.translate(y.x, y.y),
            s.rotate(y.r),
            (s.fillStyle = y.c),
            y.round
              ? (s.beginPath(),
                s.arc(0, 0, y.w / 2.2, 0, Math.PI * 2),
                s.fill())
              : s.fillRect(
                  -y.w / 2,
                  -y.h / 2,
                  y.w,
                  y.h * Math.abs(Math.cos(y.r * 2)) + 1,
                ),
            s.restore());
        d < ao ? (L = requestAnimationFrame(f)) : t == null || t();
      };
      return ((L = requestAnimationFrame(f)), () => cancelAnimationFrame(L));
    }, [e, t]),
    a.jsx("canvas", { ref: n, className: "confetti", "aria-hidden": "true" })
  );
}
const li = new Set();
let oi = !1;
try {
  localStorage.removeItem("dhruv-vandana:date-revealed");
} catch {}
function Lp() {
  oi || ((oi = !0), li.forEach((e) => e()));
}
function nu() {
  return C.useSyncExternalStore(
    (e) => (li.add(e), () => li.delete(e)),
    () => oi,
    () => !1,
  );
}
const Ht = 38,
  Wt = 36,
  Ln = 14,
  Tp = 0.4;
function $c() {
  const e = nu(),
    t = C.useRef(null),
    n = C.useRef(null),
    r = C.useRef(!1),
    l = C.useRef(null),
    o = C.useRef(new Uint8Array(Wt * Ln)),
    i = C.useRef(0),
    [u, s] = C.useState(!1),
    p = C.useRef(!1),
    [g, h] = C.useState(!1),
    [v, w] = C.useState(null),
    [E, k] = C.useState(!1),
    L = C.useCallback(() => {
      const m = n.current;
      if (!m || e) return;
      const y = m.getBoundingClientRect(),
        N = Math.min(window.devicePixelRatio || 1, 2);
      ((m.width = Math.round(y.width * N)),
        (m.height = Math.round(y.height * N)));
      const x = m.getContext("2d");
      (x.scale(N, N), o.current.fill(0), (i.current = 0));
      const j = y.width,
        R = y.height,
        T = x.createLinearGradient(0, 0, j, R);
      (T.addColorStop(0, "#d8d3c2"),
        T.addColorStop(0.35, "#f1eddf"),
        T.addColorStop(0.62, "#bdb7a2"),
        T.addColorStop(1, "#e3decd"),
        (x.fillStyle = T),
        x.fillRect(0, 0, j, R),
        (x.globalAlpha = 0.28),
        (x.strokeStyle = "#ffffff"),
        (x.lineWidth = 1));
      for (let D = -R; D < j; D += 9)
        (x.beginPath(), x.moveTo(D, 0), x.lineTo(D + R, R), x.stroke());
      ((x.globalAlpha = 0.1), (x.strokeStyle = "#535353"));
      for (let D = -R; D < j; D += 27)
        (x.beginPath(), x.moveTo(D + R, 0), x.lineTo(D, R), x.stroke());
      if (
        ((x.globalAlpha = 1),
        (x.fillStyle = "#535353"),
        (x.textAlign = "center"),
        (x.textBaseline = "middle"),
        (x.font = '400 25px "Tiro Devanagari Hindi", Georgia, serif'),
        x.fillText("खुरचें और तिथि देखें", j / 2, R / 2 - 12),
        (x.font = "500 13px Mukta, sans-serif"),
        x.fillText("हमारी शुभ विवाह तिथि", j / 2, R / 2 + 18),
        j > 0)
      )
        try {
          x.getImageData(
            Math.floor(m.width / 2),
            Math.floor(m.height / 2),
            1,
            1,
          ).data[3] === 0 && k(!0);
        } catch {
          k(!0);
        }
    }, [e]);
  C.useEffect(() => {
    var y;
    if (
      (L(),
      (y = document.fonts) == null || y.ready.then(L),
      typeof ResizeObserver > "u")
    )
      return (
        window.addEventListener("resize", L),
        () => window.removeEventListener("resize", L)
      );
    const m = new ResizeObserver(() => {
      p.current || L();
    });
    return (t.current && m.observe(t.current), () => m.disconnect());
  }, [L]);
  const f = C.useCallback(() => {
      var y, N;
      h(!0);
      const m = (y = t.current) == null ? void 0 : y.getBoundingClientRect();
      (w(
        m
          ? { x: m.left + m.width / 2, y: m.top + m.height / 2 }
          : { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      ),
        (N = navigator.vibrate) == null || N.call(navigator, 30),
        Lp());
    }, []),
    c = (m, y, N, x) => {
      const j = Math.max(0, Math.floor(((m - Ht / 2) / N) * Wt)),
        R = Math.min(Wt - 1, Math.floor(((m + Ht / 2) / N) * Wt)),
        T = Math.max(0, Math.floor(((y - Ht / 2) / x) * Ln)),
        D = Math.min(Ln - 1, Math.floor(((y + Ht / 2) / x) * Ln));
      for (let G = T; G <= D; G++)
        for (let te = j; te <= R; te++) {
          const oe = G * Wt + te;
          o.current[oe] || ((o.current[oe] = 1), i.current++);
        }
      i.current / (Wt * Ln) >= Tp && f();
    },
    d = (m) => {
      if (!r.current || e) return;
      const y = n.current,
        N = y.getBoundingClientRect(),
        x = y.getContext("2d"),
        j = m.nativeEvent.getCoalescedEvents
          ? m.nativeEvent.getCoalescedEvents()
          : [],
        R = j.length ? j : [m.nativeEvent];
      ((x.globalCompositeOperation = "destination-out"),
        (x.lineCap = "round"),
        (x.lineJoin = "round"),
        (x.lineWidth = Ht),
        (x.fillStyle = x.strokeStyle = "#000"));
      for (const T of R) {
        const D = T.clientX - N.left,
          G = T.clientY - N.top,
          te = { x: D, y: G };
        (x.beginPath(),
          l.current
            ? (x.moveTo(l.current.x, l.current.y), x.lineTo(te.x, te.y))
            : x.arc(te.x, te.y, Ht / 2, 0, Math.PI * 2),
          l.current ? x.stroke() : x.fill(),
          (l.current = te),
          c(D, G, N.width, N.height));
      }
      p.current || ((p.current = !0), s(!0));
    };
  return a.jsxs("div", {
    className: `scratch${e ? " done" : ""}`,
    ref: t,
    children: [
      a.jsxs("div", {
        className: "scratch-card",
        children: [
          a.jsx("div", {
            className: "scratch-under",
            children: a.jsx("p", { className: "scratch-date", children: zc }),
          }),
          !e &&
            E &&
            a.jsxs("button", {
              className: "scratch-foil scratch-css",
              onClick: f,
              children: [
                a.jsx("span", { children: "खुरचें और तिथि देखें" }),
                a.jsx("small", { children: "हमारी शुभ विवाह तिथि" }),
              ],
            }),
          !e &&
            !E &&
            a.jsx("canvas", {
              ref: n,
              className: "scratch-foil",
              role: "button",
              tabIndex: 0,
              "aria-label":
                "Scratch to reveal the wedding date. Press Enter to reveal.",
              onPointerDown: (m) => {
                (m.preventDefault(), (r.current = !0), (l.current = null));
                try {
                  m.currentTarget.setPointerCapture(m.pointerId);
                } catch {}
                d(m);
              },
              onPointerMove: d,
              onPointerUp: () => {
                ((r.current = !1), (l.current = null));
              },
              onPointerCancel: () => {
                ((r.current = !1), (l.current = null));
              },
              onLostPointerCapture: () => {
                ((r.current = !1), (l.current = null));
              },
              onContextMenu: (m) => m.preventDefault(),
              onKeyDown: (m) => {
                (m.key === "Enter" || m.key === " ") &&
                  (m.preventDefault(), f());
              },
            }),
          g &&
            a.jsx("div", {
              className: "scratch-sparks",
              "aria-hidden": "true",
              children: Array.from({ length: 10 }, (m, y) =>
                a.jsx(
                  "i",
                  { style: { "--a": `${y * 36}deg` }, children: "✦" },
                  y,
                ),
              ),
            }),
        ],
      }),
      v && a.jsx(Pp, { origin: v, onDone: () => w(null) }),
      !e &&
        a.jsx("button", {
          className: "scratch-hint",
          onClick: f,
          children: u ? "थोड़ा और खुरचें" : "या यहाँ टैप करें",
        }),
    ],
  });
}
function Mp() {
  const e = _p(kp),
    t = nu();
  return a.jsxs("section", {
    id: "welcome",
    className: "welcome",
    children: [
      a.jsx("div", {
        className: "orn top",
        style: { backgroundImage: `url(${Pe.ornTop})` },
      }),
      a.jsxs("div", {
        className: "welcome-mid",
        children: [
          a.jsx("div", {
            className: "scratch-desktop",
            children: a.jsx($c, {}),
          }),
          a.jsx("p", { className: "w-venue", children: Ic }),
          a.jsx("p", { className: `w-count${t ? " on" : ""}`, children: e }),
          a.jsxs("button", {
            className: "view-details",
            onClick: () => eu("story"),
            children: [
              a.jsx("span", { children: "विवरण देखें" }),
              a.jsx(Fc, {}),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "orn bottom",
        style: { backgroundImage: `url(${Pe.ornBottom})` },
      }),
    ],
  });
}
function Rp() {
  return a.jsxs("section", {
    id: "story",
    className: "section story",
    children: [
      a.jsx("img", { className: "section-photo", src: Pe.story, alt: "" }),
      a.jsxs("div", {
        className: "section-body",
        children: [
          a.jsx("h2", { className: "section-title", children: Rr.heading }),
          a.jsxs("div", {
            className: "story-text",
            children: [
              a.jsx("h3", {
                children: a.jsx("strong", { children: Rr.subheading || Rr.heading }),
              }),
              Rr.paragraphs.map((e, t) => a.jsx("p", { dangerouslySetInnerHTML: { __html: e } }, t)),
              a.jsx("p", {
                children: a.jsx("strong", { children: Rr.closing }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const zp = (e) =>
  e
    .replace(/ \d+:\d+ [AP]M$/, "")
    .replace(",", "")
    .toUpperCase();
function Ip(e) {
  const t = [];
  return (
    e.forEach((n) => {
      const r = zp(n.dateHeading),
        l = t.find((o) => o.heading === r);
      l ? l.items.push(n) : t.push({ heading: r, items: [n] });
    }),
    t
  );
}
const Op = (e) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.location).replace(/%20/g, "+")}`,
  hs = (e) => e.mapUrl || Op(e),
  Dp = (e) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("hotels near " + e.location).replace(/%20/g, "+")}`,
  Fp = (e) => new Date(e).toISOString().replace(/[-:]|\.\d{3}/g, "");
function Ac(e) {
  const t = new Date(e.startISO),
    n = e.endISO ? new Date(e.endISO) : new Date(t.getTime() + 36e5);
  return [
    t.toISOString().replace(/[-:]|\.\d{3}/g, ""),
    n.toISOString().replace(/[-:]|\.\d{3}/g, ""),
  ];
}
const $p = (e) => {
  const [t, n] = Ac(e),
    r = e.html
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.name)}&dates=${t}/${n}&details=${encodeURIComponent(r)}&location=${encodeURIComponent(e.location)}`;
};
function Ap(e) {
  const [t, n] = Ac(e),
    r = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Zetron Tech//Wedding//EN",
      "BEGIN:VEVENT",
      `UID:${e.startISO}@zetron.tech`,
      `DTSTAMP:${Fp(new Date().toISOString())}`,
      `DTSTART:${t}`,
      `DTEND:${n}`,
      `SUMMARY:${e.name}`,
      `LOCATION:${e.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join(`\r
`),
    l = document.createElement("a");
  ((l.href = URL.createObjectURL(
    new Blob([r], { type: "text/calendar;charset=utf-8" }),
  )),
    (l.download = `${e.name.replace(/[^\w]+/g, "-")}.ics`),
    l.click(),
    URL.revokeObjectURL(l.href));
}
function Up({ event: e }) {
  const [t, n] = C.useState(!1),
    r = C.useRef(null);
  return (
    C.useEffect(() => {
      if (!t) return;
      const l = (o) => {
        var i;
        ((i = r.current) != null && i.contains(o.target)) || n(!1);
      };
      return (
        document.addEventListener("mousedown", l),
        () => document.removeEventListener("mousedown", l)
      );
    }, [t]),
    a.jsxs("span", {
      className: "cal",
      ref: r,
      children: [
        a.jsx("button", {
          className: "act",
          "aria-haspopup": "true",
          "aria-expanded": t,
          onClick: () => n((l) => !l),
          children: "कैलेंडर में जोड़ें",
        }),
        t &&
          a.jsxs("span", {
            className: "cal-menu",
            children: [
              a.jsx("a", {
                href: $p(e),
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => n(!1),
                children: "गूगल कैलेंडर",
              }),
              a.jsx("button", {
                onClick: () => {
                  (Ap(e), n(!1));
                },
                children: "एप्पल / आउटलुक कैलेंडर",
              }),
            ],
          }),
      ],
    })
  );
}
function Bp({ e }) {
  const t = e.end ? `${e.start} से ${e.end}` : e.start;
  return a.jsxs("div", {
    className: "tl-event",
    children: [
      a.jsx("p", { className: "tl-time", children: t }),
      a.jsx("p", { className: "tl-title", children: e.name }),
      !e.hideLocation &&
        a.jsxs("p", {
          className: "tl-meta",
          children: [a.jsx(Ep, {}), a.jsx("span", { children: e.location })],
        }),
      e.dressCode &&
        a.jsxs("p", {
          className: "tl-meta",
          children: [a.jsx(Np, {}), a.jsx("span", { children: e.dressCode })],
        }),
      a.jsx("div", {
        className: "tl-desc",
        dangerouslySetInnerHTML: { __html: e.html },
      }),
      e.showMap &&
        a.jsx(VenueCard, { name: e.venueName || e.location, address: e.venueAddress || "", href: hs(e) }),
      a.jsxs("div", {
        className: "tl-actions",
        children: [
          a.jsx(Up, { event: e }),
          e.whereToStay &&
            a.jsxs(a.Fragment, {
              children: [
                a.jsx("i", { className: "sep" }),
                a.jsx("a", {
                  className: "act",
                  href: Dp(e),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "ठहरने के स्थान",
                }),
              ],
            }),
          !e.hideLocation &&
            !e.showMap &&
            a.jsxs(a.Fragment, {
              children: [
                a.jsx("i", { className: "sep" }),
                a.jsx("a", {
                  className: "act",
                  href: hs(e),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "मार्ग देखें",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Hp() {
  return a.jsxs("section", {
    id: "schedule",
    className: "section schedule",
    children: [
      a.jsx("img", { className: "section-photo", src: Pe.schedule, alt: "" }),
      a.jsxs("div", {
        className: "section-body",
        children: [
          a.jsx("h2", { className: "section-title", children: Titles.schedule }),
          Ip(Sp).map((e) =>
            a.jsxs(
              "div",
              {
                className: "tl-wrap",
                children: [
                  a.jsx("p", { className: "tl-date", children: e.heading }),
                  a.jsx("div", {
                    className: "tl-track",
                    children: e.items.map((t) => a.jsx(Bp, { e: t }, t.name)),
                  }),
                ],
              },
              e.heading,
            ),
          ),
        ],
      }),
    ],
  });
}
function Wp({ index: e, onClose: t, onGo: n }) {
  const r = tt[e];
  return (
    C.useEffect(() => {
      const l = (o) => {
        (o.key === "Escape" && t(),
          o.key === "ArrowRight" && n((e + 1) % tt.length),
          o.key === "ArrowLeft" && n((e - 1 + tt.length) % tt.length));
      };
      return (
        window.addEventListener("keydown", l),
        (document.body.style.overflow = "hidden"),
        () => {
          (window.removeEventListener("keydown", l),
            (document.body.style.overflow = ""));
        }
      );
    }, [e, t, n]),
    Lc.createPortal(
      a.jsx("div", {
        className: "pm-dim",
        onClick: t,
        children: a.jsxs("div", {
          className: "pm",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": r.name,
          onClick: (l) => l.stopPropagation(),
          children: [
            a.jsx("button", {
              className: "pm-x",
              onClick: t,
              "aria-label": "Close",
              children: a.jsx(tu, {}),
            }),
            a.jsxs("div", {
              className: "pm-body",
              children: [
                a.jsxs("div", {
                  className: "pm-text",
                  children: [
                    a.jsx("h3", { className: "pm-name", children: r.name }),
                    a.jsx("p", { className: "pm-title", children: r.title }),
                    r.html &&
                      a.jsx("div", {
                        className: "pm-desc",
                        dangerouslySetInnerHTML: { __html: r.html },
                      }),
                  ],
                }),
                r.photo && a.jsx("img", {
                  className: "pm-photo",
                  src: r.photo,
                  alt: r.name,
                  style: r.ratio
                    ? {
                        height: "auto",
                        aspectRatio: r.ratio,
                        objectFit: "contain",
                      }
                    : r.pos
                      ? { objectPosition: r.pos }
                      : void 0,
                }),
              ],
            }),
            a.jsxs("div", {
              className: "pm-nav",
              children: [
                a.jsx("button", {
                  onClick: () => n(Math.max(0, e - 1)),
                  disabled: e === 0,
                  "aria-label": "Previous",
                  children: a.jsx(ir, {}),
                }),
                a.jsx("div", {
                  className: "pm-dots",
                  children: tt.map((l, o) =>
                    a.jsx(
                      "button",
                      {
                        className: o === e ? "on" : "",
                        onClick: () => n(o),
                        "aria-label": l.name,
                      },
                      l.name,
                    ),
                  ),
                }),
                a.jsx("button", {
                  onClick: () => n(Math.min(tt.length - 1, e + 1)),
                  disabled: e === tt.length - 1,
                  "aria-label": "Next",
                  children: a.jsx(ir, { dir: "right" }),
                }),
              ],
            }),
          ],
        }),
      }),
      document.body,
    )
  );
}
function Vp() {
  const [e, t] = C.useState(null);
  return a.jsxs("section", {
    id: "party",
    className: "section party",
    children: [
      a.jsx("img", { className: "section-photo", src: Pe.party, alt: "" }),
      a.jsxs("div", {
        className: "section-body",
        children: [
          a.jsx("h2", {
            className: "section-title",
            children: Titles.party,
          }),
          a.jsx("div", {
            className: "party-grid",
            children: tt.map((n, r) =>
              a.jsxs(
                "button",
                {
                  className: n.ratio ? "party-item wide" : "party-item",
                  onClick: () => t(r),
                  children: [
                    n.photo ? a.jsx("span", {
                      className: "party-photo",
                      style: {
                        backgroundImage: `url(${n.photo})`,
                        ...(n.pos && { backgroundPosition: n.pos }),
                        ...(n.ratio && {
                          aspectRatio: n.ratio,
                          height: "auto",
                          paddingBottom: 0,
                        }),
                      },
                    }) : a.jsx("span", { className: "party-photo party-monogram", "aria-hidden": "true", children: a.jsx("span", { children: n.monogram || "ॐ" }) }),
                    a.jsx("span", {
                      className: "party-name",
                      children: n.name,
                    }),
                    a.jsx("span", {
                      className: "party-role",
                      children: n.title,
                    }),
                  ],
                },
                n.name,
              ),
            ),
          }),
        ],
      }),
      e !== null && a.jsx(Wp, { index: e, onClose: () => t(null), onGo: t }),
    ],
  });
}
const Uc = [
    { id: "welcome", label: "Welcome" },
    { id: "story", label: "Invitation" },
    { id: "schedule", label: "Schedule" },
    { id: "party", label: "Family" },
    { id: "moments", label: "Moments" },
  ],
  Bc = (e) => {
    if (e === "moments") return Dt("/moments");
    eu(e);
  };
function Qp({ open: e, onClose: t }) {
  return (
    C.useEffect(() => {
      if (!e) return;
      const n = (r) => r.key === "Escape" && t();
      return (
        window.addEventListener("keydown", n),
        () => window.removeEventListener("keydown", n)
      );
    }, [e, t]),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("div", {
          className: `drawer-dim${e ? " on" : ""}`,
          onClick: t,
          "aria-hidden": "true",
        }),
        a.jsxs("aside", {
          className: `drawer${e ? " on" : ""}`,
          "aria-hidden": !e,
          inert: e ? void 0 : "",
          children: [
            a.jsx("button", {
              className: "drawer-x",
              onClick: t,
              "aria-label": "Close menu",
              children: a.jsx(tu, {}),
            }),
            a.jsx("p", { className: "drawer-names", children: Tt.names }),
            a.jsx("nav", {
              children: Uc.map((n) =>
                a.jsx(
                  "button",
                  {
                    className: "drawer-link",
                    onClick: () => {
                      (t(), setTimeout(() => Bc(n.id), 120));
                    },
                    children: n.label,
                  },
                  n.id,
                ),
              ),
            }),
            a.jsx("button", {
              className: "btn-outline drawer-rsvp",
              onClick: () => {
                (t(), Dt("/rsvp"));
              },
              children: "RSVP",
            }),
          ],
        }),
      ],
    })
  );
}
function Kp({ scrolled: e, onOpen: t }) {
  return a.jsxs("button", {
    className: `menu-btn${e ? " compact" : ""}`,
    onClick: t,
    "aria-label": "Open menu",
    children: [
      a.jsx(Dc, {}),
      a.jsx("span", { className: "menu-label", children: "MENU" }),
    ],
  });
}
function Yp({ show: e, active: t, onOpen: n }) {
  return a.jsxs("div", {
    className: `tabbar${e ? " on" : ""}`,
    children: [
      a.jsx("button", {
        className: "tab-ham",
        onClick: n,
        "aria-label": "Open menu",
        children: a.jsx(Dc, { width: "24", height: "24" }),
      }),
      a.jsx("div", {
        className: "tabs",
        children: Uc.map((r) =>
          a.jsx(
            "button",
            {
              className: `tab${t === r.id ? " active" : ""}`,
              onClick: () => Bc(r.id),
              ref: (l) => {
                l &&
                  t === r.id &&
                  e &&
                  l.scrollIntoView({ inline: "center", block: "nearest" });
              },
              children: r.label,
            },
            r.id,
          ),
        ),
      }),
    ],
  });
}
function Xp({ show: e }) {
  const t = nu();
  return a.jsxs("div", {
    className: `pill${e ? " on" : ""}`,
    children: [
      a.jsx("span", { children: t ? xp : "Save the date" }),
      a.jsx("button", {
        className: "pill-rsvp",
        onClick: () => Dt("/rsvp"),
        children: "RSVP",
      }),
    ],
  });
}
const Gp = ["welcome", "story", "schedule", "party"];
function Zp() {
  const e = wp(Gp),
    t = ri(100),
    n = ri(0, 0.9),
    [r, l] = C.useState(!1);
  return a.jsxs("div", {
    className: "aloha",
    children: [
      a.jsx(jp, { active: e }),
      a.jsxs("main", {
        className: "col",
        children: [
          a.jsxs("div", {
            className: "scratch-strip",
            id: "scratch-strip",
            children: [
              a.jsx("div", {
                className: "orn top",
                style: { backgroundImage: `url(${Pe.ornTop})` },
              }),
              a.jsx($c, {}),
            ],
          }),
          a.jsx(Mp, {}),
          a.jsx(Rp, {}),
          a.jsx(Hp, {}),
          a.jsx(Vp, {}),
          a.jsxs("div", {
            className: "hashtag",
            children: [
              a.jsx("span", { className: "hashtag-orn", "aria-hidden": "true", children: "✦" }),
              a.jsx("p", { className: "hashtag-label", children: "अपनी यादें साझा करें" }),
              a.jsx("p", { className: "hashtag-tag", children: Hashtag }),
              a.jsx("p", { className: "hashtag-sub", children: "शुभ विवाह · 11.12.2026" }),
            ],
          }),
          a.jsx("footer", { className: "foot", children: a.jsx(Credit, {}) }),
        ],
      }),
    ],
  });
}
const an = Oc.flat();
function Jp() {
  const [e, t] = C.useState(
    () => window.matchMedia("(max-width:600px)").matches,
  );
  return (
    C.useEffect(() => {
      const n = window.matchMedia("(max-width:600px)");
      return Mc(n, (l) => t(l.matches));
    }, []),
    e
  );
}
function qp({ index: e, onClose: t, onGo: n }) {
  return (
    C.useEffect(() => {
      const r = (l) => {
        (l.key === "Escape" && t(),
          l.key === "ArrowRight" && n(Math.min(an.length - 1, e + 1)),
          l.key === "ArrowLeft" && n(Math.max(0, e - 1)));
      };
      return (
        window.addEventListener("keydown", r),
        () => window.removeEventListener("keydown", r)
      );
    }, [e, t, n]),
    a.jsxs("div", {
      className: "lb",
      onClick: t,
      children: [
        a.jsx("button", {
          className: "lb-x",
          onClick: t,
          "aria-label": "Close",
          children: a.jsx(tu, {}),
        }),
        a.jsx("button", {
          className: "lb-nav prev",
          disabled: e === 0,
          onClick: (r) => {
            (r.stopPropagation(), n(e - 1));
          },
          "aria-label": "Previous",
          children: a.jsx(ir, {}),
        }),
        a.jsx("img", {
          src: an[e].src,
          alt: "",
          onClick: (r) => r.stopPropagation(),
        }),
        a.jsx("button", {
          className: "lb-nav next",
          disabled: e === an.length - 1,
          onClick: (r) => {
            (r.stopPropagation(), n(e + 1));
          },
          "aria-label": "Next",
          children: a.jsx(ir, { dir: "right" }),
        }),
      ],
    })
  );
}
function bp() {
  const e = Jp(),
    [t, n] = C.useState(null),
    r = e
      ? [an.filter((l, o) => o % 2 === 0), an.filter((l, o) => o % 2 === 1)]
      : Oc;
  return a.jsxs("div", {
    className: "moments",
    children: [
      a.jsx("button", {
        className: "back-circle",
        onClick: () => Dt("/"),
        "aria-label": "Back to the site",
        children: a.jsx(ir, {}),
      }),
      a.jsx("div", {
        className: "wall",
        children: r.map((l, o) =>
          a.jsx(
            "div",
            {
              className: "wall-col",
              children: l.map((i) =>
                a.jsx(
                  "button",
                  {
                    className: "tile",
                    onClick: () => n(an.findIndex((u) => u.src === i.src)),
                    children: a.jsx("img", {
                      src: i.src,
                      alt: "",
                      loading: "lazy",
                    }),
                  },
                  i.src,
                ),
              ),
            },
            o,
          ),
        ),
      }),
      a.jsx("footer", { className: "foot", children: a.jsx(Credit, {}) }),
      t !== null && a.jsx(qp, { index: t, onClose: () => n(null), onGo: n }),
    ],
  });
}
function em() {
  const [e, t] = C.useState(1),
    [n, r] = C.useState(""),
    [l, o] = C.useState(""),
    [i, u] = C.useState(null),
    [s, p] = C.useState(1),
    [g, h] = C.useState(""),
    [v, w] = C.useState(!1),
    E = `${n.trim()} ${l.trim()}`.trim(),
    k = () => `Hello! This is ${E}.
${i ? `I will be attending ${Tt.names}'s wedding` + (s > 1 ? ` with ${s} guests` : "") + "." : `I'm sorry, I won't be able to attend ${Tt.names}'s wedding.`}${
      g.trim()
        ? `

${g.trim()}`
        : ""
    }`,
    L = () => {
      (window.open(
        `https://wa.me/${ms.whatsapp}?text=${encodeURIComponent(k())}`,
        "_blank",
        "noopener",
      ),
        w(!0));
    };
  return a.jsxs("div", {
    className: "rsvp",
    children: [
      a.jsxs("div", {
        className: "rsvp-in",
        children: [
          a.jsxs("a", {
            className: "rsvp-back",
            href: "#/",
            onClick: (f) => {
              (f.preventDefault(), Dt("/"));
            },
            children: [
              a.jsx("span", { "aria-hidden": "true", children: "‹" }),
              " Event website",
            ],
          }),
          a.jsx("h1", { className: "rsvp-names", children: Tt.names }),
          a.jsx("p", { className: "rsvp-line", children: Ic }),
          a.jsx("p", { className: "rsvp-line", children: zc }),
          e === 1 &&
            a.jsxs("form", {
              className: "rsvp-form",
              onSubmit: (f) => {
                (f.preventDefault(), n.trim() && l.trim() && t(2));
              },
              children: [
                a.jsx("p", {
                  className: "rsvp-ask",
                  children: "Enter your name to RSVP",
                }),
                a.jsxs("div", {
                  className: "rsvp-fields",
                  children: [
                    a.jsxs("label", {
                      children: [
                        "First Name",
                        a.jsx("input", {
                          value: n,
                          onChange: (f) => r(f.target.value),
                          placeholder: "First Name",
                          autoComplete: "given-name",
                          required: !0,
                        }),
                      ],
                    }),
                    a.jsxs("label", {
                      children: [
                        "Last Name",
                        a.jsx("input", {
                          value: l,
                          onChange: (f) => o(f.target.value),
                          placeholder: "Last Name",
                          autoComplete: "family-name",
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx("button", {
                  className: "btn-purple",
                  type: "submit",
                  children: "Next",
                }),
              ],
            }),
          e === 2 &&
            a.jsxs("div", {
              className: "rsvp-guest",
              children: [
                a.jsxs("div", {
                  className: "rsvp-guest-row",
                  children: [
                    a.jsx("p", { className: "rsvp-guest-name", children: E }),
                    a.jsx("button", {
                      className: "btn-purple-outline",
                      onClick: () => t(3),
                      children: "Respond",
                    }),
                  ],
                }),
                a.jsx("hr", {}),
                a.jsx("button", {
                  className: "btn-purple",
                  onClick: () => t(3),
                  children: "Continue",
                }),
              ],
            }),
          e === 3 &&
            !v &&
            a.jsxs("div", {
              className: "rsvp-reply",
              children: [
                a.jsxs("p", {
                  className: "rsvp-ask",
                  children: ["Will you be attending, ", n.trim(), "?"],
                }),
                a.jsxs("div", {
                  className: "rsvp-choice",
                  children: [
                    a.jsx("button", {
                      className: i === !0 ? "on" : "",
                      onClick: () => u(!0),
                      children: "Joyfully accept",
                    }),
                    a.jsx("button", {
                      className: i === !1 ? "on" : "",
                      onClick: () => u(!1),
                      children: "Regretfully decline",
                    }),
                  ],
                }),
                i &&
                  a.jsxs("label", {
                    className: "rsvp-guests",
                    children: [
                      "Number of guests (including you)",
                      a.jsx("select", {
                        value: s,
                        onChange: (f) => p(+f.target.value),
                        children: [1, 2, 3, 4, 5, 6].map((f) =>
                          a.jsx("option", { children: f }, f),
                        ),
                      }),
                    ],
                  }),
                a.jsxs("label", {
                  className: "rsvp-note",
                  children: [
                    "Message for the couple (optional)",
                    a.jsx("textarea", {
                      rows: "3",
                      value: g,
                      onChange: (f) => h(f.target.value),
                    }),
                  ],
                }),
                a.jsx("button", {
                  className: "btn-purple",
                  disabled: i === null,
                  onClick: L,
                  children: "Send via WhatsApp",
                }),
                ms.email,
              ],
            }),
          v &&
            a.jsxs("div", {
              className: "rsvp-done",
              children: [
                a.jsxs("p", {
                  className: "rsvp-ask",
                  children: ["Thank you, ", n.trim(), "!"],
                }),
                a.jsx("p", {
                  className: "rsvp-line",
                  children:
                    "Your reply is ready in WhatsApp. Please press Send there to confirm your RSVP.",
                }),
                a.jsx("button", {
                  className: "btn-purple-outline wide",
                  onClick: () => Dt("/"),
                  children: "Back to the website",
                }),
              ],
            }),
        ],
      }),
      a.jsx("footer", { className: "foot", children: a.jsx(Credit, {}) }),
    ],
  });
}
function tm({ on: e, onToggle: t }) {
  return a.jsx("button", {
    className: "music-btn",
    onClick: t,
    "aria-label": e ? "Pause music" : "Play music",
    "aria-pressed": e,
    children: e
      ? a.jsxs("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          children: [
            a.jsx("path", {
              d: "M11 5 6 9H3v6h3l5 4V5z",
              fill: "currentColor",
              stroke: "none",
            }),
            a.jsx("path", {
              d: "M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13",
            }),
          ],
        })
      : a.jsxs("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          children: [
            a.jsx("path", {
              d: "M11 5 6 9H3v6h3l5 4V5z",
              fill: "currentColor",
              stroke: "none",
            }),
            a.jsx("path", { d: "m16 9 5 6M21 9l-5 6" }),
          ],
        }),
  });
}
const vs = {
  openingVideo: "/media/opening.mp4",
  openingPoster: "/media/opening-poster.webp",
  endFrame: "/assets/envelope-last.webp",
};
function nm() {
  const {
      entrance: e,
      entered: t,
      refs: n,
      openInvitation: r,
      finishOpening: l,
    } = hp(vs),
    o = vp(),
    i = C.useRef(null),
    u = C.useRef(null),
    s = C.useRef(),
    [p, g] = C.useState(!1),
    h = () => {
      const w = u.current;
      !w ||
        !w.paused ||
        ((w.volume = 0),
        w
          .play()
          .then(() => {
            (g(!0),
              clearInterval(s.current),
              (s.current = setInterval(() => {
                ((w.volume = Math.min(0.45, w.volume + 0.03)),
                  w.volume >= 0.45 && clearInterval(s.current));
              }, 120)));
          })
          .catch(() => {}));
    },
    v = () => {
      const w = u.current;
      w.paused
        ? ((w.volume = 0.45),
          w
            .play()
            .then(() => g(!0))
            .catch(() => {}))
        : (w.pause(), g(!1));
    };
  return (
    C.useLayoutEffect(() => {
      i.current.inert = !t;
    }, [t]),
    C.useEffect(() => {
      o !== "home" && window.scrollTo(0, 0);
    }, [o]),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx(yp, {
          names: Tt.names,
          poster: vs.openingPoster,
          matteSrc: "/media/film-end.webp",
          state: e,
          refs: n,
          onOpen: () => {
            (h(), r());
          },
          onSkip: l,
        }),
        a.jsx("audio", {
          ref: u,
          src: "/music.mp3",
          loop: !0,
          preload: "auto",
        }),
        t && a.jsx(tm, { on: p, onToggle: v }),
        a.jsxs("div", {
          className: "site",
          ref: i,
          children: [
            o === "home" && a.jsx(Zp, {}),
            o === "moments" && a.jsx(bp, {}),
          ],
        }),
      ],
    })
  );
}

export default nm;
