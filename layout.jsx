
export const metadata = {
  title: "TicoFlow",
  description: "Sistema de reservas para negocios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
