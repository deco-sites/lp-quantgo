import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      fontFamily: {
        "primary": "'Inter', sans-serif",
        "secondary": "'Poppins', sans-serif",
      },
      colors: {
        "white": "#ffffff",
        "black": "#000000",
        "dark-blue": "#10171f",
        "light-blue": "#0074ff",
        "dark-green": "#163300"
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
