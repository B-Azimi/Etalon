/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    //     fontSize: {
    //   10: '0.625em',
    //   12: '0.75em',
    //   14: '0.875em',
    //   16: '1em',
    //   18: '1.125em',
    //   24: '1.5em',
    //   30: '1.875em',
    //   30_2: '2em',
    //   30_6: '2.25em',
    //   40: '2.5em',
    //   48: '3em',
    //   60: '3.75em',
    // },
    screens: {
      mobile: "340px",
      // => @media (min-width: 340px) { ... }
      mobile2: "480px",
      // => @media (min-width: 480px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      tablet2: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      laptop2: "1280px",
      // => @media (min-width: 1280px) { ... }
      laptop3: "1380px",
      // => @media (min-width: 1380px) { ... }

      desktop: "1536px",
      // => @media (min-width: 1536px) { ... }
      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "489px" },
      // => @media (max-width: 489px) { ... }
      xxsm: { max: "399px" },
      // => @media (max-width: 399px) { ... }
      xxxsm: { max: "369px" },
      // => @media (max-width: 369px) { ... }
    },
    borderRadius: {
      basketIcon: "20px",
      buttonIcon: "6px",
      discountIcon: "72px",
    },
    container: {
      center: true,
    },
    padding: {
      xss: "7px",
      xs: "8px",
      sm: "12px",
      md: "15px",
      no: "16px",
      lno: "20px",
      lg: "24px",
      lg2: "27px",
      lg3: "40px",
      32: "32px",
      70: "70px",
      xl: "48px",
      xl2: "64px",
      xxl: "110px",
      buttonPadY: "1.14285714rem",
      buttonPadX: "2.85714286rem",
    },
    colors: {
      col_bg_card_1: "#C5C2CA",
      col_price: "#00000060",
      col_last_price: "#00000020",
      colorNew: "#000",
      colorEllipses: "#1b2d22",
      hoveredColorBasket: "#FFEB9D",
      hoveredColorDiscover: "#1E1E1E",
      colorBasket: "#FDDE67",
      colorSelectedBasket: "#ff920a",
      colorCircleActive: "#ffffff",
      colorCircle: "#FFFFFF33",
      colorTitle: "#FFF",
      colorFrom: "#2A4032",
      colorTo: "#3A5E46",
      colorAdv: "#3B5F47",
      colorLinks: "rgb(255,255,255)",
      col_bg_btn: "#181818",
      col_bg_best: "#E9E9E9",
      col_bg_date: "rgba(24, 24, 24, 0.25)",
    },
    extend: {
      maxWidth: {
        40: "40%",
      },
      lineHeight: {
        extraLarge: "6.25rem",
      },
      zIndex: {
        999: "999",
      },
    },
    fontFamily: {
      display: ["Roboto"],
      body: ["Lato"],
    },
  },
  plugins: [require("daisyui")],
};
