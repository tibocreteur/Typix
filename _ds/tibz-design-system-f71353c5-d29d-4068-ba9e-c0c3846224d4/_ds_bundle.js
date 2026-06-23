/* @ds-bundle: {"format":3,"namespace":"TibzDesignSystem_f71353","components":[{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"SkillCard","sourcePath":"components/cards/SkillCard.jsx"},{"name":"StatBlock","sourcePath":"components/cards/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FaqItem","sourcePath":"components/layout/FaqItem.jsx"},{"name":"Marquee","sourcePath":"components/layout/Marquee.jsx"},{"name":"Navbar","sourcePath":"components/layout/Navbar.jsx"}],"sourceHashes":{"components/cards/ProjectCard.jsx":"c0625fe444a8","components/cards/SkillCard.jsx":"96859fef905e","components/cards/StatBlock.jsx":"90953daad6c9","components/core/Badge.jsx":"c9cecdca2cbb","components/core/Button.jsx":"c765f7ea72ec","components/core/IconButton.jsx":"b120c9fa952d","components/core/Tag.jsx":"895502e724e0","components/layout/FaqItem.jsx":"791cec98de47","components/layout/Marquee.jsx":"04f6a0918c63","components/layout/Navbar.jsx":"3b3a72bf04d5","ui_kits/tibz-site/App.jsx":"e8b32a852c3b","ui_kits/tibz-site/ContactPage.jsx":"10f736e04743","ui_kits/tibz-site/Home.jsx":"ff10da7d2474","ui_kits/tibz-site/ProjectPage.jsx":"41b3360a690e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TibzDesignSystem_f71353 = window.TibzDesignSystem_f71353 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/StatBlock.jsx
try { (() => {
/**
 * StatBlock — a big monospace metric with a superscript unit and an
 * uppercase label below. Used in the About row (6 years, 10+ projects…).
 */
const StatBlock = ({
  value,
  unit,
  label,
  style = {}
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "clamp(3rem, 5vw, 5rem)",
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "-0.05em",
      color: "var(--ink-soft)"
    }
  }, value, unit && /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: "0.8rem",
      letterSpacing: "var(--track-wide)",
      textTransform: "uppercase",
      verticalAlign: "super",
      marginLeft: "0.4rem",
      color: "var(--ink)"
    }
  }, unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0.2rem 0 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      letterSpacing: "var(--track-wide)",
      textTransform: "uppercase",
      color: "rgba(17,16,16,0.42)"
    }
  }, label));
};
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  new: {
    bg: "var(--green)",
    fg: "var(--green-ink)"
  },
  "3d": {
    bg: "var(--threed)",
    fg: "var(--threed-ink)"
  },
  print: {
    bg: "var(--print)",
    fg: "var(--print-ink)"
  },
  motion: {
    bg: "var(--motion)",
    fg: "#fff"
  },
  chara: {
    bg: "var(--chara)",
    fg: "#fff"
  },
  uiux: {
    bg: "var(--uiux)",
    fg: "#fff"
  },
  identity: {
    bg: "var(--identity)",
    fg: "#fff"
  },
  award: {
    bg: "var(--award)",
    fg: "var(--award-ink)"
  },
  neutral: {
    bg: "var(--paper-2)",
    fg: "var(--ink)"
  },
  ink: {
    bg: "var(--ink)",
    fg: "var(--paper)"
  }
};

/**
 * Badge — a small discipline-coded pill (NEW, 3D, PRINT, UI/UX…).
 * Bold, uppercase, monospace; each tone pairs a hue with a deep ink.
 */
const Badge = ({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) => {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      padding: "5px 10px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.8125rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "var(--track-tight)",
      textTransform: "uppercase",
      borderRadius: "5px",
      whiteSpace: "nowrap",
      userSelect: "none",
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
};
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — an image tile for portfolio work. Badges reveal on hover
 * (top-left), the image brightens and scales, and a dark scrim carries the
 * title + client at the bottom. The whole tile is a link.
 */
const ProjectCard = ({
  image,
  title,
  client,
  badges = [],
  href = "#",
  height = 360,
  style = {},
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "block",
      overflow: "hidden",
      borderRadius: "var(--radius)",
      height,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: hover ? "brightness(100%)" : "brightness(85%)",
      transform: hover ? "scale(1.08)" : "scale(1)",
      transition: "transform 1s var(--ease), filter 1s var(--ease)"
    }
  }), badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      padding: 15,
      opacity: hover ? 1 : 0,
      transition: "opacity 0.5s var(--ease)",
      zIndex: 3
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: b.tone
  }, b.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      background: "var(--scrim)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "var(--track-tight)",
      textTransform: "uppercase",
      color: "var(--invert)"
    }
  }, title), client && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      letterSpacing: "var(--track-wide)",
      textTransform: "uppercase",
      color: "var(--invert)",
      opacity: 0.85
    }
  }, client)));
};
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control.
 * Monospace, uppercase, tight tracking. Primary fills signature green
 * and flips to black ink on hover (the site's CTA behaviour).
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  as = "button",
  disabled = false,
  style = {},
  ...rest
}) => {
  const pads = {
    sm: "10px 16px",
    md: "14px 22px",
    lg: "18px 28px"
  };
  const fontSizes = {
    sm: "0.8125rem",
    md: "0.875rem",
    lg: "0.9375rem"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    fontFamily: "var(--font-mono)",
    fontSize: fontSizes[size],
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: 1,
    padding: pads[size],
    borderRadius: "var(--radius)",
    border: "var(--border-mid) solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background-color var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease), transform var(--dur-fast) var(--ease)",
    userSelect: "none",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--green)",
      color: "var(--green-ink)",
      borderColor: "var(--green)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "transparent",
      padding: pads[size].split(" ")[0] + " 4px"
    }
  };
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: "var(--ink)",
    color: "#fff",
    borderColor: "var(--ink)"
  } : variant === "secondary" ? {
    background: "var(--paper-2)"
  } : {
    color: "var(--ink)"
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: as === "button" ? disabled : undefined
  }, rest), variant === "ghost" ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: -3,
      height: 1.5,
      width: "100%",
      background: "currentColor",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur-slow) var(--ease)"
    }
  })) : children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
};
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square outlined control with the signature "snapped"
 * bottom-left corner and a thick black border that turns green on hover.
 * Holds a Font Awesome icon (pass its class) or any child node.
 */
const IconButton = ({
  icon,
  children,
  label,
  size = 48,
  rotate = -45,
  style = {},
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--paper)",
      border: "1px solid var(--ink)",
      borderRadius: "var(--radius)",
      borderBottomLeftRadius: "var(--radius-clip)",
      cursor: "pointer",
      color: "var(--ink)",
      transition: "border-color var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease)",
      borderColor: hover ? "var(--green-ink)" : "var(--ink)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      fontSize: size * 0.34,
      transform: `rotate(${hover ? 0 : rotate}deg)`,
      transition: "transform var(--dur-fast) var(--ease)"
    }
  }) : children);
};
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/SkillCard.jsx
try { (() => {
const ACCENTS = {
  threed: "var(--threed)",
  print: "var(--print)",
  chara: "var(--chara)",
  motion: "var(--motion)",
  uiux: "var(--uiux)",
  identity: "var(--identity)"
};

/**
 * SkillCard — a greige capability panel. A large grey Font Awesome glyph,
 * an uppercase title over a coloured discipline "stick", a description, and
 * a snapped IconButton in the corner that links deeper.
 */
const SkillCard = ({
  icon,
  title,
  description,
  accent = "threed",
  href = "#",
  style = {}
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      background: "var(--paper-2)",
      borderRadius: "var(--radius)",
      padding: "1.5rem",
      position: "relative",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      fontSize: "5rem",
      color: "var(--ink-faint)"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "1.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--track-tight)",
      color: "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: "100%",
      borderRadius: 40,
      background: ACCENTS[accent] || "var(--threed)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "0.9rem",
      lineHeight: "var(--leading-body)",
      letterSpacing: "var(--track-tight)",
      color: "var(--ink)",
      textAlign: "justify"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "fa-solid fa-arrow-right",
    rotate: 45,
    label: `Discover ${title}`,
    onClick: () => href && (window.location.href = href)
  })));
};
Object.assign(__ds_scope, { SkillCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SkillCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a thin outlined skill chip (the "about" capability pills).
 * Hover fills signature green. Decorative by default (cursor: default).
 */
const Tag = ({
  children,
  interactive = false,
  style = {},
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: "inline-block",
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      fontWeight: 400,
      letterSpacing: "var(--track-tight)",
      textTransform: "uppercase",
      color: "var(--ink)",
      background: hover ? "var(--green)" : "transparent",
      border: "1px solid",
      borderColor: hover ? "var(--green)" : "rgba(17,16,16,0.15)",
      padding: "9px 16px",
      cursor: interactive ? "pointer" : "default",
      userSelect: "none",
      transition: "background var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)",
      ...style
    }
  }, rest), children);
};
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/layout/FaqItem.jsx
try { (() => {
/**
 * FaqItem — a single accordion row. Click the question to expand the answer
 * with a smooth height transition; the ＋ icon rotates to ✕. Controlled or
 * uncontrolled (pass `open` + `onToggle`, or let it manage itself).
 */
const FaqItem = ({
  question,
  children,
  open,
  onToggle,
  defaultOpen = false
}) => {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open !== undefined ? open : internal;
  const toggle = () => onToggle ? onToggle() : setInternal(v => !v);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--paper-3)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-expanded": isOpen,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "1.25rem 0",
      textAlign: "left",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.05rem",
      fontWeight: 500,
      letterSpacing: "var(--track-tight)",
      color: "var(--ink)"
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "none",
      width: 22,
      height: 22,
      position: "relative",
      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
      transition: "transform var(--dur) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      height: 2,
      background: "var(--ink)",
      transform: "translateY(-50%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: 0,
      height: "100%",
      width: 2,
      background: "var(--ink)",
      transform: "translateX(-50%)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: isOpen ? "1fr" : "0fr",
      transition: "grid-template-rows var(--dur) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: "0 0 1.25rem 0",
      fontFamily: "var(--font-mono)",
      fontSize: "0.95rem",
      lineHeight: "var(--leading-body)",
      letterSpacing: "var(--track-tight)",
      color: "var(--ink-mute)",
      textAlign: "justify"
    }
  }, children))));
};
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/layout/Marquee.jsx
try { (() => {
/**
 * Marquee — an infinite horizontal scroll of italic serif phrases separated
 * by middots, framed by hairline rules. Pauses on hover. The brand uses it
 * to list disciplines under the About headline.
 */
const Marquee = ({
  items = [],
  duration = 22,
  style = {}
}) => {
  const loop = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderTop: "1px solid rgba(17,16,16,0.10)",
      borderBottom: "1px solid rgba(17,16,16,0.10)",
      padding: "20px 0",
      background: "var(--paper)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tibz-marquee-track",
    style: {
      display: "flex",
      width: "max-content",
      whiteSpace: "nowrap",
      animation: `tibz-marquee ${duration}s linear infinite`
    }
  }, loop.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
      color: "rgba(17,16,16,0.35)",
      padding: "0 44px",
      userSelect: "none"
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "normal",
      fontSize: "1.4em",
      marginLeft: 44
    }
  }, "\xB7")))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes tibz-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tibz-marquee-track:hover { animation-play-state: paused; }
      `));
};
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/layout/Navbar.jsx
try { (() => {
/**
 * Navbar — the fixed top bar. Hand-drawn wordmark on the left; a ghost
 * Contact link, an EN/FR language toggle, and a burger on the right.
 * Paper background, monospace, generous side gutter.
 */
const Navbar = ({
  logo = "/assets/logo/tibz-wordmark.png",
  lang = "EN",
  onToggleLang,
  onBurger,
  onLogo,
  onContact,
  sticky = false,
  style = {}
}) => {
  const other = lang === "EN" ? "FR" : "EN";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? "fixed" : "relative",
      top: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px var(--gutter)",
      background: "var(--paper)",
      fontFamily: "var(--font-mono)",
      zIndex: 9999,
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      if (onLogo) {
        e.preventDefault();
        onLogo();
      }
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Tibz Design",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "2rem"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    as: "a",
    href: "#contact",
    onClick: e => {
      if (onContact) {
        e.preventDefault();
        onContact();
      }
    }
  }, "Contact"), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleLang,
    style: {
      display: "flex",
      gap: "0.4rem",
      alignItems: "baseline",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "1rem",
      padding: 0
    },
    "aria-label": "Switch language"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.3
    }
  }, other), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, lang)), /*#__PURE__*/React.createElement("button", {
    onClick: onBurger,
    "aria-label": "Menu",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 28,
      height: 16,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 2,
      background: "var(--ink)",
      borderRadius: 50
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 2,
      background: "var(--ink)",
      borderRadius: 50
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 2,
      background: "var(--ink)",
      borderRadius: 50
    }
  }))));
};
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tibz-site/App.jsx
try { (() => {
/* App — state router + shared chrome (Navbar, Footer) for the Tibz site. */
const DS_APP = window.TibzDesignSystem_f71353 || window.TibzKit;
const {
  Navbar
} = DS_APP;
const {
  useState,
  useEffect
} = React;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--paper)",
      padding: "28px var(--gutter)",
      borderTop: "1px solid var(--paper-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      fontFamily: "var(--font-mono)",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot"
  }), "\xA0 ", /*#__PURE__*/React.createElement("b", null, "FRANCE"), " Marseille / Lille"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      fontSize: "1.05rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram",
    style: {
      opacity: .55
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn",
    style: {
      opacity: .55
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-linkedin-in"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Behance",
    style: {
      opacity: .55
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-behance"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)"
    }
  }, "@2025 | \xA9 tibz design. All rights reserved.")));
}
function App() {
  const [route, setRoute] = useState({
    name: "home"
  });
  const [lang, setLang] = useState("EN");
  const go = (name, props) => {
    setRoute({
      name,
      ...(props || {})
    });
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.name]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    logo: "../../assets/logo/tibz-wordmark.png",
    lang: lang,
    onToggleLang: () => setLang(l => l === "EN" ? "FR" : "EN"),
    onBurger: () => go("home"),
    onLogo: () => go("home"),
    onContact: () => go("contact"),
    sticky: false
  }), route.name === "home" && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), route.name === "project" && /*#__PURE__*/React.createElement(ProjectPage, {
    id: route.id,
    go: go
  }), route.name === "contact" && /*#__PURE__*/React.createElement(ContactPage, {
    go: go
  }), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tibz-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tibz-site/ContactPage.jsx
try { (() => {
/* ContactPage — the project enquiry form. */
const DS_CONTACT = window.TibzDesignSystem_f71353 || window.TibzKit;
const {
  Button: CButton
} = DS_CONTACT;
const {
  useState: useContactState
} = React;
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-mute)"
    }
  }, label), children);
}
const inputStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.95rem",
  color: "var(--ink)",
  background: "var(--paper)",
  border: "var(--border-mid) solid var(--ink)",
  borderRadius: "var(--radius-button)",
  padding: "13px 14px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box"
};
function ContactPage({
  go
}) {
  const G = "var(--gutter)";
  const [sent, setSent] = useContactState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `64px ${G} 0`,
      maxWidth: 1100,
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.8125rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--ink-mute)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "14px 0 0",
      fontSize: "clamp(2.4rem,5vw,4rem)",
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: "-0.03em"
    }
  }, "Tell me about", /*#__PURE__*/React.createElement("br", null), "your idea.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `40px ${G} 80px`,
      maxWidth: 1100,
      margin: "0 auto",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1.3fr 0.8fr",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "Doe"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "First name"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "Jane"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    style: inputStyle,
    placeholder: "jane@studio.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Project"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "Brand identity, motion reel\u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    style: {
      ...inputStyle,
      resize: "vertical"
    },
    placeholder: "Tell me about your idea..."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "primary",
    arrow: true,
    type: "submit"
  }, sent ? "Sent ✓" : "Send"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      color: "var(--ink-faint)",
      maxWidth: 320,
      lineHeight: 1.5
    }
  }, "By submitting this form, I agree my data may be used as part of this contact request."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Block, {
    k: "Email",
    v: "tibzdesign@gmail.com"
  }), /*#__PURE__*/React.createElement(Block, {
    k: "Phone",
    v: "+33 7 83 78 48 72"
  }), /*#__PURE__*/React.createElement(Block, {
    k: "Based in",
    v: "Marseille / Lille, France"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, ["instagram", "linkedin-in", "behance"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 44,
      height: 44,
      display: "grid",
      placeItems: "center",
      border: "var(--border-mid) solid var(--ink)",
      borderRadius: "var(--radius)",
      borderBottomLeftRadius: "var(--radius-clip)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-brands fa-${s}`
  })))))));
}
function Block({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-faint)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.05rem",
      fontWeight: 500
    }
  }, v));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tibz-site/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tibz-site/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Home — hero, about, projects grid, skills, partners, FAQ. */
const DS_HOME = window.TibzDesignSystem_f71353 || window.TibzKit;
const {
  Button: HButton,
  ProjectCard,
  SkillCard,
  StatBlock,
  Marquee,
  FaqItem
} = DS_HOME;
const {
  useState: useHomeState
} = React;
const GUTTER = "var(--gutter)";
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "100vh",
      minHeight: 560,
      overflow: "hidden",
      background: "#000"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "../../assets/video/showreel.webm",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "scale(1.18)",
      filter: "brightness(.92)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 28,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderLeft: "9px solid transparent",
      borderRight: "9px solid transparent",
      borderTop: "13px solid #fff",
      animation: "tibzBounce 1s infinite alternate"
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes tibzBounce { from { transform: translateY(-8px);} to { transform: translateY(0);} }`));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: `0 ${GUTTER}`,
      fontSize: "0.8125rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--ink-mute)"
    }
  }, "About"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `18px ${GUTTER} 0`,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(2.2rem,4vw,3.4rem)",
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: "-0.03em"
    }
  }, "Creative studio", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: "'DM Serif Display',serif",
      fontWeight: 400
    }
  }, "Motion"), " & design."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "-0.02em",
      textAlign: "justify",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("b", null, "Motion design, data design, 3D."), " Three disciplines serving one thing: visuals that make their effect. ", /*#__PURE__*/React.createElement("b", null, "Trained and based in France"), ", I work with clients who want work that's ", /*#__PURE__*/React.createElement("b", null, "serious, well thought-out and delivered on time"), ". I'm as comfortable on a ", /*#__PURE__*/React.createElement("b", null, "punchy motion graphic"), " as on a ", /*#__PURE__*/React.createElement("b", null, "complex data viz"), " or a ", /*#__PURE__*/React.createElement("b", null, "print project"), ". If you're after someone who ", /*#__PURE__*/React.createElement("b", null, "really gets involved"), " \u2014 you're in the right place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `40px ${GUTTER} 36px`,
      display: "flex",
      gap: 40,
      alignItems: "flex-end",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "6",
    unit: "ans",
    label: "Of experience"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--paper-3)",
      height: 64
    }
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "10",
    unit: "+",
    label: "Projects delivered"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--paper-3)",
      height: 64
    }
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "10",
    unit: "+",
    label: "Clients & partners"
  })), /*#__PURE__*/React.createElement(Marquee, {
    items: ["Motion Design", "3D & Visualisation", "Direction artistique", "Identité de marque", "Characters & Animation", "Print & Édition"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${GUTTER} 0`,
      display: "flex",
      gap: 28,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Start a project"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: "0.8rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 0 0 rgba(155,238,104,.7)",
      animation: "tibzBlink 2s infinite"
    }
  }), "Available \u2014 freelance 2026")), /*#__PURE__*/React.createElement("style", null, `@keyframes tibzBlink { 0%{box-shadow:0 0 0 0 rgba(155,238,104,.7);} 70%{box-shadow:0 0 0 9px rgba(155,238,104,0);} 100%{box-shadow:0 0 0 0 rgba(155,238,104,0);} }`));
}
function Projects({
  go
}) {
  const open = id => go("project", {
    id
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `48px ${GUTTER}`,
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-image)"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    image: "../../assets/projects/syride.avif",
    title: "Syride \xD7 Tibz Design",
    client: "Syride",
    height: 460,
    badges: [{
      label: "New",
      tone: "new"
    }, {
      label: "Print",
      tone: "print"
    }],
    onClick: e => {
      e.preventDefault();
      open("syride");
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-image)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "calc(66.66% - 8px)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-image)"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    image: "../../assets/projects/console.avif",
    title: "\u6D41\u667A \u2014 Li\xFAzh\xEC",
    client: "Personal work",
    height: 240,
    badges: [{
      label: "3D",
      tone: "3d"
    }],
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    image: "../../assets/projects/axion.jpg",
    title: "Axion",
    client: "Personal work",
    height: 240,
    badges: [{
      label: "3D",
      tone: "3d"
    }],
    onClick: e => e.preventDefault()
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "calc(33.34% - 8px)"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    image: "../../assets/projects/regatta.jpg",
    title: "Toulon Regatta 2025",
    client: "12 MED Event",
    height: 495,
    badges: [{
      label: "Competition Winner",
      tone: "award"
    }, {
      label: "Print",
      tone: "print"
    }],
    onClick: e => e.preventDefault()
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-image)"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    image: "../../assets/projects/omodaka.avif",
    title: "Omodaka",
    client: "La Grande Tourrache",
    height: 320,
    style: {
      flex: 1
    },
    badges: [{
      label: "Visual identity",
      tone: "identity"
    }],
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    image: "../../assets/projects/mouvaplan.avif",
    title: "Mouvaplan",
    client: "La Grande Tourrache",
    height: 320,
    style: {
      flex: 1
    },
    badges: [{
      label: "UI/UX",
      tone: "uiux"
    }],
    onClick: e => e.preventDefault()
  })));
}
function SectionTitle({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: "center",
      display: "grid",
      placeItems: "center",
      gap: 8,
      padding: "20px 0 28px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--ink-mute)"
    }
  }, sub));
}
function Skills() {
  const data = [{
    icon: "fa-brands fa-unity",
    title: "3D",
    accent: "threed",
    description: "Visualize your ideas even before they're made. 3D lets you convince, test and attract more effectively."
  }, {
    icon: "fa-solid fa-pen-nib",
    title: "Print",
    accent: "print",
    description: "Printed materials that give weight to your messages. Tangible, credible, memorable."
  }, {
    icon: "fa-solid fa-user",
    title: "Characters",
    accent: "chara",
    description: "Characters that humanize your projects, create attachment and strengthen your brand storytelling."
  }, {
    icon: "fa-solid fa-compass-drafting",
    title: "Motion",
    accent: "motion",
    description: "Rhythm and emotion to capture attention. Animation makes your messages more vibrant and memorable."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `40px ${GUTTER} 16px`
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Skills",
    sub: "What we know how to do and do well"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gap-image)"
    }
  }, data.map(d => /*#__PURE__*/React.createElement(SkillCard, _extends({
    key: d.title
  }, d)))));
}
function Partners() {
  const logos = ["drime", "catho", "toulon", "syride", "hoyez", "myo"];
  // Per-logo height tuning so wide wordmarks and squarish crests read at the
  // same optical size (the source PNGs have very different aspect ratios).
  const H = {
    drime: 38,
    catho: 64,
    toulon: 64,
    syride: 50,
    hoyez: 38,
    myo: 44
  };
  // Render the group several times so the track always overflows the viewport
  // (no empty gap before the loop repeats) and animate by exactly one group
  // width → perfectly seamless on any screen size.
  const COPIES = 4;
  const Group = ({
    aria
  }) => /*#__PURE__*/React.createElement("div", {
    className: "tibz-marquee__group",
    "aria-hidden": aria,
    style: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 220,
      height: 80
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/partners/${l}.png`,
    alt: l,
    style: {
      height: H[l] || 44,
      width: "auto",
      objectFit: "contain",
      opacity: .7
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 0 12px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--ink-mute)",
      margin: "0 0 26px",
      padding: `0 ${GUTTER}`
    }
  }, "Companies, institutions and brands have already entrusted me with their projects."), /*#__PURE__*/React.createElement("div", {
    className: "tibz-marquee",
    style: {
      overflow: "hidden",
      maskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
      WebkitMaskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tibz-marquee__track",
    style: {
      display: "flex",
      width: "max-content"
    }
  }, Array.from({
    length: COPIES
  }).map((_, i) => /*#__PURE__*/React.createElement(Group, {
    key: i,
    aria: i > 0
  })))), /*#__PURE__*/React.createElement("style", null, `
        .tibz-marquee__track { animation: tibzSlide 40s linear infinite; will-change: transform; }
        .tibz-marquee:hover .tibz-marquee__track { animation-play-state: paused; }
        @keyframes tibzSlide { from { transform: translateX(0); } to { transform: translateX(-25%); } }
      `));
}
function Faq() {
  const items = [["What kinds of projects do you enjoy most?", "Mostly motion design, 3D and visual creation. I especially like projects with a strong art direction or an animated identity."], ["How do you handle tight deadlines?", "I plan every step from the start. That lets me anticipate, stay efficient and deliver on time, even on urgent projects."], ["Are you comfortable working with a creative director or in a team?", "Totally. I adapt easily to existing workflows and can also propose visual directions when needed."], ["How do you stay inspired?", "Constant watching: design, cinema, video games, 3D, tech, and my own experiments — so I can bring current ideas to every project."]];
  const [open, setOpen] = useHomeState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `40px ${GUTTER} 64px`,
      maxWidth: 980,
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "FAQ"
  }), items.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    question: q,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  }, a)));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Projects, {
    go: go
  }), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Partners, null), /*#__PURE__*/React.createElement(Faq, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tibz-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tibz-site/ProjectPage.jsx
try { (() => {
/* ProjectPage — a portfolio case study (Syride). */
const DS_PROJ = window.TibzDesignSystem_f71353 || window.TibzKit;
const {
  Badge: PBadge,
  Button: PButton,
  IconButton: PIconButton
} = DS_PROJ;
function ProjectPage({
  go
}) {
  const G = "var(--gutter)";
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "62vh",
      minHeight: 380,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/projects/syride-wide.avif",
    alt: "Syride",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(.78)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: `0 ${G} 36px`,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PBadge, {
    tone: "new"
  }, "New"), /*#__PURE__*/React.createElement(PBadge, {
    tone: "print"
  }, "Print")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "var(--invert)",
      fontSize: "clamp(2.4rem,5vw,4.2rem)",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      textTransform: "uppercase"
    }
  }, "Syride \xD7 Tibz Design"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `28px ${G}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 18,
      borderBottom: "1px solid var(--paper-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    k: "Client",
    v: "Syride"
  }), /*#__PURE__*/React.createElement(Meta, {
    k: "Year",
    v: "2025"
  }), /*#__PURE__*/React.createElement(Meta, {
    k: "Category",
    v: "Print \xB7 Illustration"
  })), /*#__PURE__*/React.createElement(PButton, {
    variant: "secondary",
    size: "sm",
    onClick: () => go("home")
  }, "\u2190 Back")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `56px ${G}`,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto",
      maxWidth: 760,
      fontFamily: "'DM Serif Display',serif",
      fontStyle: "italic",
      fontSize: "clamp(1.4rem,2.6vw,2.1rem)",
      lineHeight: 1.4,
      color: "var(--ink)"
    }
  }, "\u201CDesign is thinking about the future with the lightness of a breath.\u201D")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `0 ${G} 56px`,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start",
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "1.9rem",
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "A graphic identity for free flight."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "-0.02em",
      textAlign: "justify",
      color: "var(--ink)"
    }
  }, "I collaborated with ", /*#__PURE__*/React.createElement("b", null, "Syride"), ", a French company known in paragliding and free flight, on a series of T-shirts and stickers for their community of pilots. The goal: visually express the essence of free flight \u2014 a blend of ", /*#__PURE__*/React.createElement("b", null, "technical precision"), ", aerial exploration and pure freedom. I drew on their flight instruments, GPS data and flight curves to craft wearable, durable, recognizable visuals.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `0 ${G} 72px`,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-image)",
      maxWidth: "var(--maxw)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/projects/syride-tshirt.png",
    fill: "var(--paper-2)",
    label: "T-shirt \u2014 code"
  }), /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/projects/syride-sticker.avif",
    fill: "var(--ink)",
    label: "Sticker \u2014 vector"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    src: "../../assets/projects/syride.avif",
    fill: "var(--paper-2)",
    label: "Series overview",
    tall: true
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `0 ${G} 72px`,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PButton, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => go("contact")
  }, "Start a project")));
}
function Meta({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.7rem",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-faint)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.95rem",
      fontWeight: 500
    }
  }, v));
}
function Shot({
  src,
  fill,
  label,
  tall
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: "var(--radius)",
      overflow: "hidden",
      background: fill,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    style: {
      width: "100%",
      height: tall ? 420 : 320,
      objectFit: "contain",
      display: "block",
      padding: 20,
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 12,
      fontSize: "0.7rem",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: fill === "var(--ink)" ? "var(--paper)" : "var(--ink-mute)"
    }
  }, label));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tibz-site/ProjectPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SkillCard = __ds_scope.SkillCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
