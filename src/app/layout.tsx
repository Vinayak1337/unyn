import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Navbar from '@ui/Navbar/Navbar';
import Footer from '@ui/Footer/Footer';
import JoinPopup from '@ui/JoinForm/JoinPopup';

const sourceSans = Source_Sans_3({
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'UNYN',
	description: 'UNYN is a web application for the UNYN community.'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={`relative flex flex-col w-screen min-h-screen overflow-x-hidden ${sourceSans.className}`}>
				<Navbar />
				<JoinPopup />
				{children}
				<Footer />
			</body>
		</html>
	);
}
