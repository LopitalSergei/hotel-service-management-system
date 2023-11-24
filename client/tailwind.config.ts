import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    //   colors: { black: "#353535", orange: "#F9AD81" },
    extend: { colors: { blk: "#353535", orange: "#F9AD81" } },
  },
  plugins: [],
};
export default config;
