import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Code Editor",
  description:
    "AI-powered online code editor with Monaco Editor, WebContainers, templates, and AI code completion.",

  metadataBase: new URL("https://ai-code-editor-chi.vercel.app"),

  openGraph: {
    title: "AI Code Editor",
    description:
      "Build, edit and run code with AI assistance directly in your browser.",
    url: "https://ai-code-editor-chi.vercel.app",
    siteName: "AI Code Editor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Code Editor",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Code Editor",
    description:
      "AI-powered online code editor with Monaco Editor and WebContainers.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html
        lang="en"
        className={cn(
          "h-full",
          "antialiased",
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          inter.variable,
        )}
      >
        <body className="min-h-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <div className="flex flex-col min-h-screen">
                <Toaster />
                <div className="flex-1">{children}</div>
              </div>
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
