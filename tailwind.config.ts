import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		keyframes: {
  			slideInFromTop: {
  				'0%': {
  					transform: 'translateY(-150px)'
  				},
  				'50%': {
  					transform: 'translateY(0px)'
  				}
  			},
  			slideInFromTopDelayed: {
  				'0%': {
  					transform: 'translateY(-150px)'
  				},
  				'70%': {
  					transform: 'translateY(0px)'
  				}
  			},
  			reveal: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			revealmainimg: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '0.2'
  				}
  			}
  		},
  		animation: {
  			slideInFromTop: 'slideInFromTop 2s',
  			slideInFromTopDelayed: 'slideInFromTopDelayed 2s',
  			reveal: 'reveal 2s ease-out',
  			revealmainimg: 'revealmainimg 2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require('flowbite/plugin'), require("tailwindcss-animate")],
} satisfies Config;
