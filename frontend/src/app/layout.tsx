import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Judexa — Hackathon Judging Platform",
  description:
    "Dynamic form builder and card-based review system for hackathon judging. Create custom submission forms, invite judges, and get results fast.",
  keywords: ["hackathon", "judging", "platform", "submissions", "review"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: '#1a1a1a' }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, backgroundColor: '#1a1a1a' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
