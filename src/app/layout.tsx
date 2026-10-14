import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjeev A — Full Stack Developer & Cloud Engineer",
  description:
    "Interactive single-canvas portfolio of Sanjeev A. Full Stack Developer and Cloud Engineer building resilient web interfaces, distributed backend services, and automated GitOps on Kubernetes.",
  keywords: [
    "Sanjeev A",
    "Full Stack Developer",
    "Cloud & DevOps",
    "Kubernetes",
    "Docker",
    "ArgoCD",
    "Next.js",
    "FastAPI",
    "Qdrant",
  ],
  authors: [{ name: "Sanjeev A", url: "https://github.com/Sanjeev2525" }],
  openGraph: {
    title: "Sanjeev A — Full Stack Developer & Cloud Engineer",
    description:
      "Interactive single-canvas portfolio of Sanjeev A. Engineering resilient systems with visual craft.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className="h-full overflow-hidden">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('portfolio-theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.setAttribute('data-theme', stored);
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="h-full w-full overflow-hidden bg-canvas text-fg-secondary font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
