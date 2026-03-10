/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "hsl(var(--background))",
        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
        "card-foreground": "hsl(var(--card-foreground))",
        "popover-foreground": "hsl(var(--popover-foreground))",
      },
      borderColor: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      ringColor: {
        ring: "hsl(var(--ring))",
      },
      colors: {
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
