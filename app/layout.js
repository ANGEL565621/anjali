import "./globals.css";
export const metadata = {
  title: "Lovenest",
  description: "Valentines Gift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
