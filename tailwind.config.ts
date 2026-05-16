import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10202a",
        mist: "#eef7f8",
        ice: "#dff3f5",
        teal: "#0b8793",
        navy: "#0f2d3a",
        graphite: "#4d5c63"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15,45,58,0.12)",
        panel: "0 16px 48px rgba(16,32,42,0.10)"
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem'
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" }
        },
        drift: {
          "0%": { transform: "translateX(-8%)", opacity: "0" },
          "18%": { opacity: "0.65" },
          "100%": { transform: "translateX(108%)", opacity: "0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite",
        drift: "drift 6.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
