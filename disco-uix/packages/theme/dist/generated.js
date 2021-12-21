'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const colors = {
  light: {
    "action-critical": "color-red-600",
    "action-primary": "color-blue-600",
    "action-primary--disabled": "color-slate-100",
    "action-primary--hovered": "color-blue-500",
    "action-primary--pressed": "color-blue-700",
    "action-secondary": "color-base-white",
    "action-secondary--disabled": "color-slate-050",
    "action-secondary--hovered": "color-slate-050",
    "action-subdued": "color-blue-100",
    "action-subdued--disabled": "color-slate-100",
    "action-subdued--hovered": "color-blue-200",
    "action-subdued--pressed": "color-blue-300",
    "action-warning": "color-orange-600",
    background: "color-base-white",
    "background-subdued": "color-slate-100",
    border: "color-slate-300",
    "border--disabled": "color-slate-200",
    "border--focused": "color-blue-300",
    "border-accent": "color-blue-600",
    "border-critical": "color-red-300",
    "border-subdued": "color-slate-200",
    "border-success": "color-green-300",
    "border-warning": "color-orange-300",
    icon: "color-slate-800",
    "icon--disabled": "color-slate-400",
    "icon-accent": "color-blue-600",
    "icon-critical": "color-red-600",
    "icon-onCritical": "color-base-white",
    "icon-onPrimary": "color-base-white",
    "icon-onPrimary-subdued": "color-blue-600",
    "icon-onSuccess": "color-base-white",
    "icon-onWarning": "color-base-white",
    "icon-subdued": "color-slate-500",
    "icon-success": "color-green-600",
    "icon-warning": "color-orange-600",
    interactive: "color-blue-600",
    "interactive--disabled": "color-slate-300",
    "interactive--hovered": "color-blue-500",
    "interactive--pressed": "color-blue-700",
    overlay: "color-base-black",
    secondary: "color-base-white",
    "secondary-subdued": "color-slate-100",
    success: "color-green-600",
    surface: "color-base-white",
    "surface--disabled": "color-slate-100",
    "surface--hovered": "color-slate-050",
    "surface--pressed": "color-slate-200",
    "surface--selected": "color-blue-050",
    "surface-accent": "color-blue-050",
    "surface-contrast": "color-base-black",
    "surface-critical": "color-red-600",
    "surface-subdued": "color-slate-100",
    "surface-success": "color-green-100",
    "surface-warning": "color-orange-100",
    text: "color-slate-800",
    "text--disabled": "color-slate-400",
    "text-critical": "color-red-600",
    "text-dim": "color-slate-400",
    "text-onContrast": "color-base-white",
    "text-onCritical": "color-base-white",
    "text-onPrimary": "color-base-white",
    "text-onPrimary-subdued": "color-blue-600",
    "text-onSuccess": "color-slate-800",
    "text-onWarning": "color-slate-800",
    "text-subdued": "color-slate-500",
    "text-success": "color-green-600",
    warning: "color-orange-600"
  },
  dark: {
    "action-critical": "color-red-600",
    "action-primary": "color-blue-600",
    "action-primary--disabled": "color-grey-800",
    "action-primary--hovered": "color-blue-500",
    "action-primary--pressed": "color-blue-700",
    "action-secondary": "color-base-black",
    "action-secondary--disabled": "color-base-black",
    "action-secondary--hovered": "color-grey-900",
    "action-subdued": "color-grey-800",
    "action-subdued--disabled": "color-grey-800",
    "action-subdued--hovered": "color-grey-700",
    "action-subdued--pressed": "color-grey-700",
    "action-warning": "color-orange-600",
    background: "color-base-black",
    "background-subdued": "color-grey-900",
    border: "color-grey-700",
    "border--disabled": "color-grey-800",
    "border--focused": "color-blue-400",
    "border-accent": "color-blue-600",
    "border-critical": "color-red-300",
    "border-subdued": "color-grey-800",
    "border-success": "color-green-300",
    "border-warning": "color-orange-300",
    icon: "color-grey-200",
    "icon--disabled": "color-grey-700",
    "icon-accent": "color-blue-600",
    "icon-critical": "color-red-300",
    "icon-onCritical": "color-grey-200",
    "icon-onPrimary": "color-grey-200",
    "icon-onPrimary-subdued": "color-blue-400",
    "icon-onSuccess": "color-grey-200",
    "icon-onWarning": "color-grey-200",
    "icon-subdued": "color-grey-400",
    "icon-success": "color-green-600",
    "icon-warning": "color-orange-600",
    interactive: "color-blue-400",
    "interactive--disabled": "color-blue-300",
    "interactive--hovered": "color-blue-500",
    "interactive--pressed": "color-blue-500",
    overlay: "color-base-white",
    secondary: "color-base-black",
    "secondary-subdued": "color-base-black",
    success: "color-green-600",
    surface: "color-base-black",
    "surface--disabled": "color-grey-900",
    "surface--hovered": "color-grey-900",
    "surface--pressed": "color-grey-800",
    "surface--selected": "color-grey-800",
    "surface-accent": "color-blue-200",
    "surface-contrast": "color-base-white",
    "surface-critical": "color-red-300",
    "surface-subdued": "color-grey-900",
    "surface-success": "color-green-300",
    "surface-warning": "color-orange-300",
    text: "color-grey-200",
    "text--disabled": "color-grey-700",
    "text-critical": "color-red-300",
    "text-dim": "color-grey-500",
    "text-onContrast": "color-slate-800",
    "text-onCritical": "color-grey-200",
    "text-onPrimary": "color-grey-200",
    "text-onPrimary-subdued": "color-blue-400",
    "text-onSuccess": "color-grey-200",
    "text-onWarning": "color-grey-200",
    "text-subdued": "color-grey-400",
    "text-success": "color-green-600",
    warning: "color-orange-600"
  },
  foundation: {
    "color-base-black": "hsl(240, 4%, 5%)",
    "color-base-white": "hsl(0, 0%, 100%)",
    "color-blue-100": "hsl(222, 62%, 96%)",
    "color-blue-200": "hsl(223, 68%, 94%)",
    "color-blue-300": "hsl(224, 81%, 89%)",
    "color-blue-400": "hsl(227, 80%, 72%)",
    "color-blue-500": "hsl(234, 85%, 65%)",
    "color-blue-600": "hsl(245, 100%, 64%)",
    "color-blue-700": "hsl(240, 70%, 46%)",
    "color-blue-800": "hsl(240, 84%, 36%)",
    "color-blue-900": "hsl(241, 82%, 21%)",
    "color-blue-050": "hsl(230, 60%, 98%)",
    "color-green-100": "hsl(120, 40%, 96%)",
    "color-green-300": "hsl(108, 41%, 88%)",
    "color-green-500": "hsl(158, 66%, 40%)",
    "color-green-600": "hsl(158, 100%, 25%)",
    "color-grey-100": "hsl(0, 0%, 96%)",
    "color-grey-200": "hsl(0, 0%, 94%)",
    "color-grey-300": "hsl(0, 0%, 87%)",
    "color-grey-400": "hsl(0, 0%, 60%)",
    "color-grey-500": "hsl(0, 0%, 47%)",
    "color-grey-600": "hsl(0, 0%, 40%)",
    "color-grey-700": "hsl(0, 0%, 20%)",
    "color-grey-800": "hsl(0, 0%, 15%)",
    "color-grey-900": "hsl(0, 0%, 9%)",
    "color-grey-050": "hsl(0, 0%, 98%)",
    "color-orange-100": "hsl(30, 100%, 96%)",
    "color-orange-300": "hsl(30, 100%, 88%)",
    "color-orange-500": "hsl(30, 100%, 74%)",
    "color-orange-600": "hsl(30, 100%, 66%)",
    "color-red-100": "hsl(4, 71%, 96%)",
    "color-red-300": "hsl(4, 74%, 88%)",
    "color-red-500": "hsl(1, 72%, 66%)",
    "color-red-600": "hsl(1, 60%, 49%)",
    "color-slate-100": "hsl(240, 11%, 96%)",
    "color-slate-200": "hsl(240, 10%, 94%)",
    "color-slate-300": "hsl(230, 9%, 87%)",
    "color-slate-400": "hsl(217, 6%, 58%)",
    "color-slate-500": "hsl(220, 4%, 47%)",
    "color-slate-600": "hsl(215, 6%, 41%)",
    "color-slate-700": "hsl(220, 6%, 20%)",
    "color-slate-800": "hsl(216, 6%, 15%)",
    "color-slate-900": "hsl(225, 9%, 9%)",
    "color-slate-050": "hsl(240, 9%, 98%)"
  }
};
const letterSpacing = { default: "0%", "extra-tight": "-2%", tight: "-1%" };
const fonts = { body: "'Inter'", headlines: "'Open Sauce'" };
const fontSizes = {
  "0": "12px",
  "1": "14px",
  "2": "16px",
  "3": "20px",
  "4": "24px",
  "5": "32px",
  "6": "40px",
  "7": "48px",
  "8": "64px",
  "9": "72px"
};
const borderRadius = {
  ellipse: "50%",
  "extra-large": "16px",
  large: "12px",
  medium: "10px",
  small: "4px"
};
const boxShadow = {
  large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)",
  low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)",
  medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)"
};
const lineHeights = {
  "0": "80px",
  "1": "72px",
  "2": "60px",
  "3": "56px",
  "4": "44px",
  "5": "36px",
  "6": "28px",
  "7": "24px",
  "8": "20px",
  "9": "16px"
};
const typeStyles = {
  Display01: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "80px",
    fontSize: "72px",
    letterSpacing: "-2%"
  },
  Display02: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "72px",
    fontSize: "64px",
    letterSpacing: "-2%"
  },
  Heading01: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "60px",
    fontSize: "48px",
    letterSpacing: "-2%"
  },
  Heading02: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "56px",
    fontSize: "40px",
    letterSpacing: "-2%"
  },
  Heading03: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "44px",
    fontSize: "32px",
    letterSpacing: "-2%"
  },
  Heading04: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "36px",
    fontSize: "24px",
    letterSpacing: "-1%"
  },
  Heading05: {
    fontFamily: "'Open Sauce'",
    fontWeight: 500,
    lineHeight: "28px",
    fontSize: "20px",
    letterSpacing: "-1%"
  },
  Label01: {
    fontFamily: "'Inter'",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "16px",
    letterSpacing: "-1%"
  },
  Label02: {
    fontFamily: "'Inter'",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "14px",
    letterSpacing: "-1%"
  },
  Label03: {
    fontFamily: "'Inter'",
    fontWeight: 500,
    lineHeight: "16px",
    fontSize: "12px",
    letterSpacing: "0%"
  },
  Body01: {
    fontFamily: "'Inter'",
    fontWeight: 400,
    lineHeight: "24px",
    fontSize: "16px",
    letterSpacing: "-1%"
  },
  Body02: {
    fontFamily: "'Inter'",
    fontWeight: 400,
    lineHeight: "20px",
    fontSize: "14px",
    letterSpacing: "-1%"
  },
  Caption01: {
    fontFamily: "'Inter'",
    fontWeight: 400,
    lineHeight: "20px",
    fontSize: "14px",
    letterSpacing: "-1%"
  },
  Caption02: {
    fontFamily: "'Inter'",
    fontWeight: 400,
    lineHeight: "16px",
    fontSize: "12px",
    letterSpacing: "0%"
  }
};

exports.borderRadius = borderRadius;
exports.boxShadow = boxShadow;
exports.colors = colors;
exports.fontSizes = fontSizes;
exports.fonts = fonts;
exports.letterSpacing = letterSpacing;
exports.lineHeights = lineHeights;
exports.typeStyles = typeStyles;
