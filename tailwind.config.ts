import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        wine: {
          DEFAULT: "#8B0000",
          50: "#FBEAEA",
          100: "#F3CBCB",
          200: "#E29A9A",
          300: "#CE6868",
          400: "#B23B3B",
          500: "#8B0000",
          600: "#750000",
          700: "#5C0000",
          800: "#420000",
          900: "#2B0000",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FCF8EC",
          100: "#F7EBC6",
          200: "#EFD88C",
          300: "#E5C25A",
          400: "#D4AF37",
          500: "#B8912A",
          600: "#93711F",
          700: "#6E5417",
          800: "#493810",
          900: "#251C08",
        },
        cream: "#FAF7F2",
        ink: "#181818",
        leaf: {
          DEFAULT: "#2E8B57",
          50: "#EAF6EF",
          100: "#CDEBDA",
          200: "#9DD7B5",
          300: "#6BC28F",
          400: "#419E6A",
          500: "#2E8B57",
          600: "#256F46",
          700: "#1C5334",
          800: "#133823",
          900: "#0A1D12",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(24,24,24,0.18)",
        gold: "0 8px 30px -8px rgba(212,175,55,0.45)",
        wine: "0 8px 30px -8px rgba(139,0,0,0.35)",
      },
      backgroundImage: {
        "wine-gradient": "linear-gradient(135deg, #8B0000 0%, #5C0000 100%)",
        "gold-gradient": "linear-gradient(135deg, #EFD88C 0%, #D4AF37 50%, #B8912A 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "0.45" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2.5s infinite linear",
        ripple: "ripple 0.6s linear",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
