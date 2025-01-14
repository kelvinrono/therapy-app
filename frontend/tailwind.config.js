/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBgColor: "#BBF1F1",
        textColor: "#41464f",
        headingColor: "#008080",
        primary: "#35b5ac",
        brown: "#CO9591",
        lightGreen: '#7ac996',
        green: '#006d58',
        proYellow: '#feb60d',
        irisBlue: '#5A4FCF'
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

