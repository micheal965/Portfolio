/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        midnightBlue: "#0F172A",
        darkSlateBlue: "#1E293B",
        azureBlue: "#3B82F6",
        skyBlue: "#25ADE7",
        slateGray: "#94A3B8",
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        bounce: "bounce 1s infinite",
        spinOnce: "spin360 0.5s ease-in-out 1",
        "bounce-loop": "bounceLoop 0.6s ease-in-out infinite",
        slideUp: "slideUp 0.8s ease-out forwards",
        slideDown: "slideDown 0.8s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceLoop: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
