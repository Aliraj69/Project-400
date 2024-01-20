import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/footer";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Project400",
	description: "AI Platform",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (<ClerkProvider>
				<html lang='en' suppressHydrationWarning>
				<body className={font.className}>
					
					{children}
					<Footer />
				</body>
			</html>
			</ClerkProvider>
	);
}
