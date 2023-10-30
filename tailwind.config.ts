import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/lib/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#1AA7EC',
					50: '#e8f6fd',
					75: '#a1dbf7',
					100: '#7accf4',
					200: '#41b6ef',
					300: '#1aa7ec',
					400: '#1275a5',
					500: '#106690'
				},
				secondary: {
					DEFAULT: '#106690',
					50: '#e7f0f4',
					75: '#9DC0D1',
					100: '#74A6BF',
					200: '#3980A3',
					300: '#106690',
					400: '#0B4765',
					500: '#0A3E58'
				},
				neutral: {
					50: '#F3F4F4',
					75: '#CED1D4',
					100: '#BABDC2',
					200: '#9CA1A7',
					300: '#888E95',
					400: '#5F6368',
					500: '#53575B'
				},
				danger: {
					300: '#C62828',
					400: '#8B1C1C',
					500: '#791818'
				},
				success: {
					300: '#498E4D',
					400: '#336336',
					500: '#2D572F'
				},
				warning: {
					300: '#ED6C02',
					400: '#A64C01',
					500: '#914201'
				}
			},
			fontSize: {
				'3.5xl': ['2rem', '2.5rem'],
				'4.5xl': ['2.5rem', '3rem'],
				'6.5xl': ['4rem', '4.5rem']
			},
			spacing: {
				13: '3.25rem',
				21: '5.25rem',
				22: '5.5rem',
				23: '5.75rem',
				24: '6rem',
				45: '11.25rem',
				46: '11.5rem',
				47: '11.75rem',
				61: '15.25rem',
				62: '15.5rem',
				63: '15.75rem',
				64: '16rem',
				65: '16.25rem',
				66: '16.5rem',
				67: '16.75rem',
				68: '17rem',
				69: '17.25rem',
				70: '17.5rem',
				71: '17.75rem',
			},
			borderRadius: {
				xlm: '0.625rem'
			}
		}
	},
	plugins: []
};

export default config;
