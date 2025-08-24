import localFont from "next/font/local";
import "./globals.css";
import Modal from "./components/ui/modal/modal";
import { MyContextProvider } from "./context/context";
import Footer from "./components/layout/footer/footer";
import Navbar from "./components/layout/navbar/navbar";

const drukFont = localFont({
	src: "./fonts/Druk-Medium-Web.woff2",
	display: "swap",
	variable: "--font-drukFont",
	preload: true,
});

const gtaFont = localFont({
	src: [
		{
			path: "./fonts/GT-America-Standard-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/GT-America-Standard-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/GT-America-Standard-Medium.woff2",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-gtaFont",
});

export const metadata = {
	title: "MINORITY TRAVEL",
	description: "Digital card for travelling anywhere in the world",
	keywords: [
		"travel assistant",
		"money transfer",
		"minority",
		"travel buddy",
		"digital travel card",
	],
	authors: [{ name: "Minority Travel Team" }],
	creator: "Minority Travel",
	publisher: "Minority Travel",
	metadataBase: new URL("https://fullstack-sample-rosy.vercel.app/"),
	openGraph: {
		title: "MINORITY TRAVEL",
		description: "Digital card for travelling anywhere in the world",
		url: "https://fullstack-sample-rosy.vercel.app/",
		siteName: "Minority Travel",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/opengraph-image.png", // Add your Open Graph image
				width: 1200,
				height: 630,
				alt: "Minority Travel - Digital travel companion",
			},
		],
	},
};
export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<MyContextProvider>
				<body
					className={`${drukFont.variable} ${gtaFont.variable} scroll-auto min-w-[326px] min-h-screen overflow-scroll pt-[64px]`}
				>
					{children}
					<Navbar />
					<Modal />
					<Footer />
				</body>
			</MyContextProvider>
		</html>
	);
}
