/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/Header/*.{js,ts,jsx,tsx}",
    "./src/pages/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/card/*.{js,ts,jsx,tsx}",
    "./src/components/hero/*.{js,ts,jsx,tsx}",
    "./src/components/card/pricing/*.{js,ts,jsx,tsx}",
    "./src/components/table/*.{js,ts,jsx,tsx}",
  ],
  presets: [],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "create-and-share-mobile":
          "url('./src/assets/images/new/webp-format/journalist-mobile.webp)",
        "create-and-share-tablet":
          "url('./src/assets/images/new/webp-format/journalist-tablet.webp')",
        "create-and-share":
          "url('./src/assets/images/new/webp-format/journalist-desktop.webp')",
        "18-days-voyage-mobile":
          "url('./src/assets/images/new/webp-format/18-days-voyage-mobile.webp')",
        "18-days-voyage":
          "url('./src/assets/images/new/webp-format/18-days-voyage-tablet.webp')",
        "architecturals-mobile":
          "url('./src/assets/images/new/webp-format/architecturals-mobile.webp')",
        architecturals:
          "url('./src/assets/images/new/webp-format/architecturals-tablet.webp')",
        "beautiful-stories-mobile":
          "url('./src/assets/images/new/webp-format/beautiful-stories-mobile.webp')",
        "beautiful-stories-tablet":
          "url('./src/assets/images/new/webp-format/beautiful-stories-tablet.webp')",
        "beautiful-stories":
          "url('./src/assets/images/new/webp-format/beautiful-stories-desktop.webp')",
        "behind-the-waves-mobile":
          "url('./src/assets/images/new/webp-format/behind-the-waves-mobile.webp')",
        "behind-the-waves":
          "url('./src/assets/images/new/webp-format/behind-the-waves-tablet.webp')",
        "bg-beta-mobile":
          "url('./src/assets/images/new/webp-format/beta-mobile.webp')",
        "bg-beta-tablet":
          "url('./src/assets/images/new/webp-format/beta-mobile.webp')",
        "bg-beta-desktop":
          "url('./src/assets/images/new/webp-format/beta-desktop.webp')",
        "calm-waters-tablet":
          "url('./src/assets/images/new/webp-format/calm-waters-mobile.webp')",
        "calm-waters":
          "url('./src/assets/images/new/webp-format/calm-waters-tablet.webp')",
        "cityscapes-mobile":
          "url('./src/assets/images/new/webp-format/cityscapes-mobile.webp')",
        cityscapes:
          "url('./src/assets/images/new/webp-format/cityscapes-mobile.webp')",
        "dark-forest-mobile":
          "url('./src/assets/images/new/webp-format/night-at-forest-mobile.webp')",
        "dark-forest":
          "url('./src/assets/images/new/webp-format/night-at-forest-tablet.webp')",
        "designed-for-everyone-mobile":
          "url('./src/assets/images/new/webp-format/designed-for-everyone-mobile.webp')",
        "designed-for-everyone-tablet":
          "url('./src/assets/images/new/webp-format/designed-for-everyone-tablet.webp')",
        "designed-for-everyone":
          "url('./src/assets/images/new/webp-format/designed-for-everyone-desktop.webp')",
        "features-bg-mobile":
          "url('./src/assets/images/features-bg-mobile.jpg')",
        "features-bg-tablet":
          "url('./src/assets/images/features-bg-tablet.jpg')",
        "features-bg": "url('./src/assets/images/features-bg.jpg')",
        "king-of-africa-mobile":
          "url('./src/assets/images/new/webp-format/king-of-africa-mobile.webp')",
        "king-of-africa":
          "url('./src/assets/images/new/webp-format/king-of-africa-tablet.webp')",
        "land-of-dreams-mobile":
          "url('./src/assets/images/new/webp-format/land-of-dreams-mobile.webp')",
        "land-of-dreams-tablet":
          "url('./src/assets/images/new/webp-format/land-of-dreams-tablet.webp')",
        "milky-way-mobile":
          "url('./src/assets/images/new/webp-format/milky-way-mobile.webp')",
        "milky-way":
          "url('./src/assets/images/new/webp-format/milky-way-tablet.webp')",
        "moon-of-appalacia-mobile":
          "url('./src/assets/images/new/webp-format/moon-of-appalacia-mobile.webp')",
        "moon-of-appalacia-tablet":
          "url('./src/assets/images/new/webp-format/moon-of-appalacia-tablet.webp')",
        "moon-of-appalacia":
          "url('./src/assets/images/new/webp-format/moon-of-appalacia-desktop.webp')",
        "mountains-mobile":
          "url('./src/assets/images/new/webp-format/mountains-mobile.webp')",
        mountains:
          "url('./src/assets/images/new/webp-format/mountains-tablet.webp')",
        "pricing-mobile": "url('./src/assets/images/pricing-bg-mobile.jpg')",
        "pricing-tablet": "url('./src/assets/images/pricing-bg-tablet.jpg')",
        pricing: "url('./src/assets/images/pricing-bg.jpg')",
        "rage-of-the-sea-mobile":
          "url('./src/assets/images/new/webp-format/rage-of-the-sea-mobile.webp')",
        "rage-of-the-sea":
          "url('./src/assets/images/new/webp-format/rage-of-the-sea-tablet.webp')",
        "running-free-mobile":
          "url('./src/assets/images/new/webp-format/running-free-mobile.webp')",
        "running-free":
          "url('./src/assets/images/new/webp-format/running-free-tablet.webp')",
        screenshot: "url('./src/assets/images/screenshot.jpg')",
        "somwarpet-mobile":
          "url('./src/assets/images/new/webp-format/somwarpets-beauty-mobile.webp')",
        somwarpet:
          "url('./src/assets/images/new/webp-format/somwarpets-beauty-tablet.webp')",
        "trip-to-nowhere-mobile":
          "url('./src/assets/images/new/webp-format/nowhere-island-mobile.webp')",
        "trip-to-nowhere":
          "url('./src/assets/images/new/webp-format/nowhere-island-tablet.webp')",
        "unforeseen-corners-mobile":
          "url('./src/assets/images/new/webp-format/unforeseen-mobile.webp')",
        "unforeseen-corners":
          "url('./src/assets/images/new/webp-format/unforeseen-tablet.webp')",
        "world-tour-mobile":
          "url('./src/assets/images/new/webp-format/world-tour-mobile.webp')",
        "world-tour":
          "url('./src/assets/images/new/webp-format/world-tour-tablet.webp')",
        "white-facebook": "url('./src/assets/images/white-FB.svg')",
        facebook: "url('./src/assets/images/facebook.svg')",
        pinterest: "url('./src/assets/images/pinterest.svg')",
        "white-pinterest": "url('./src/assets/images/white-Pin.svg')",
        twitter: "url('./src/assets/images/twitter.svg')",
        "white-twitter": "url('./src/assets/images/white-Tw.svg')",
        instagram: "url('./src/assets/images/instagram.svg')",
        "white-instagram": "url('./src/assets/images/white-Insta.svg')",
        youtube: "url('./src/assets/images/youtube.svg')",
        "white-youtube": "url('./src/assets/images/white-YT.svg')",
        boost: "url('./src/assets/images/boost.svg')",
        domain: "url('./src/assets/images/custom.svg')",
        drag: "url('./src/assets/images/drag.svg')",
        check: "url('./src/assets/images/check.svg')",
      },
    },
    accentColor: ({ theme }) => ({
      ...theme("colors"),
      auto: "auto",
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
    },
    aria: {
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"',
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
    backdropBlur: ({ theme }) => theme("blur"),
    backdropBrightness: ({ theme }) => theme("brightness"),
    backdropContrast: ({ theme }) => theme("contrast"),
    backdropGrayscale: ({ theme }) => theme("grayscale"),
    backdropHueRotate: ({ theme }) => theme("hueRotate"),
    backdropInvert: ({ theme }) => theme("invert"),
    backdropOpacity: ({ theme }) => theme("opacity"),
    backdropSaturate: ({ theme }) => theme("saturate"),
    backdropSepia: ({ theme }) => theme("sepia"),
    backgroundColor: ({ theme }) => theme("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr":
        "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br":
        "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl":
        "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl":
        "linear-gradient(to top left, var(--tw-gradient-stops))",
    },
    backgroundOpacity: ({ theme }) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    blur: {
      0: "0",
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px",
    },
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.200", "currentColor"),
    }),
    borderOpacity: ({ theme }) => theme("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    borderSpacing: ({ theme }) => ({
      ...theme("spacing"),
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
    boxShadowColor: ({ theme }) => theme("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    caretColor: ({ theme }) => theme("colors"),
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
    },
    container: {},
    content: {
      none: "none",
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },
    divideColor: ({ theme }) => theme("borderColor"),
    divideOpacity: ({ theme }) => theme("borderOpacity"),
    divideWidth: ({ theme }) => theme("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000",
    },
    fill: ({ theme }) => ({
      none: "none",
      ...theme("colors"),
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexBasis: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "DM Sans",
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      xs: ["0.64rem", { lineHeight: "1rem" }],
      sm: ["0.8rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.25rem", { lineHeight: "1.75rem" }],
      xl: ["1.563rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.953rem", { lineHeight: "2rem" }],
      "3xl": ["2.441rem", { lineHeight: "2.25rem" }],
      "4xl": ["3.052rem", { lineHeight: "2.5rem" }],
      "5xl": ["3.815rem", { lineHeight: "1" }],
      "6xl": ["4.768rem", { lineHeight: "1" }],
      "7xl": ["5.96rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    gap: ({ theme }) => theme("spacing"),
    gradientColorStops: ({ theme }) => theme("colors"),
    grayscale: {
      0: "0",
      DEFAULT: "100%",
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1",
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1",
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
    height: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      "50p": "50px",
      "100p": "100px",
      "150p": "150px",
      "200p": "200px",
      "250p": "250px",
      "300p": "300px",
      "350p": "350px",
      "400p": "400px",
      "450p": "450px",
      "500p": "500px",
      "550p": "550px",
      "600p": "600px",
      "650p": "650px",
      "700p": "700px",
      "750p": "750px",
      "800p": "800px",
      "850p": "850px",
      "900p": "900px",
      "950p": "950px",
      "1000p": "1000px",
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg",
    },
    inset: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    }),
    invert: {
      0: "0",
      DEFAULT: "100%",
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "50%": {
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    maxHeight: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      10: "10%",
      20: "20%",
      30: "30%",
      40: "40%",
      50: "50%",
      60: "60%",
      70: "70%",
      80: "80%",
      90: "90%",
      100: "100%",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    outlineColor: ({ theme }) => theme("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    padding: ({ theme }) => theme("spacing"),
    placeholderColor: ({ theme }) => theme("colors"),
    placeholderOpacity: ({ theme }) => theme("opacity"),
    ringColor: ({ theme }) => ({
      DEFAULT: theme("colors.blue.500", "#3b82f6"),
      ...theme("colors"),
    }),
    ringOffsetColor: ({ theme }) => theme("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: "0.5",
      ...theme("opacity"),
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2",
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "sm-max": { max: "639px" },
      "md-max": { max: "767px" },
      "lg-max": { max: "1023px" },
      "xl-max": { max: "1279px" },
      "2xl-max": { max: "1535px" },
    },
    scrollMargin: ({ theme }) => ({
      ...theme("spacing"),
    }),
    scrollPadding: ({ theme }) => theme("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%",
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
    space: ({ theme }) => ({
      ...theme("spacing"),
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
      "4-8": "4px",
      "8-8": "8px",
      "16-8": "16px",
      "24-8": "24px",
      "32-8": "32px",
      "40-8": "40px",
      "48-8": "48px",
      "56-8": "56px",
      "64-8": "64px",
      "72-8": "72px",
      "80-8": "80px",
      "88-8": "88px",
      "96-8": "96px",
      "104-8": "104px",
      "112-8": "112px",
      "120-8": "120px",
      "128-8": "128px",
      "136-8": "136px",
      "144-8": "144px",
      "152-8": "152px",
      "160-8": "160px",
      "168-8": "168px",
      "176-8": "176px",
    },
    stroke: ({ theme }) => ({
      none: "none",
      ...theme("colors"),
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2",
    },
    supports: {},
    textColor: ({ theme }) => theme("colors"),
    textDecorationColor: ({ theme }) => theme("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    textIndent: ({ theme }) => ({
      ...theme("spacing"),
    }),
    textOpacity: ({ theme }) => theme("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
    transitionDelay: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionDuration: {
      DEFAULT: "150ms",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT:
        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    translate: ({ theme }) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    }),
    width: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      s1: "50px",
      s2: "100px",
      s3: "150px",
      s4: "200px",
      s5: "250px",
      s6: "300px",
      s7: "350px",
      s8: "400px",
      s9: "450px",
      s10: "500px",
      s11: "550px",
      s12: "600px",
      s13: "650px",
      s14: "700px",
      s15: "750px",
      s16: "800px",
      s17: "850px",
      s18: "900px",
      s19: "950px",
      s20: "1000px",
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
      "100%": "100%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform",
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
  },
  plugins: [],
};
