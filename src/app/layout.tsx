import React from "react";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="en">
    <head>
      <title>My Next.js App</title>
    </head>
    <body>
      <header>
        <nav>
          {/* Здесь может быть ваша навигация */}
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/tickets">Tickets</a>
        </nav>
      </header>
      <main style={{ margin: "60px 40px" }}>
        {children} {/* Здесь рендерятся все страницы */}
      </main>
      <footer>
        {/* Ваш футер */}
        <p>© 2024 My Next.js App</p>
      </footer>
    </body>
  </html>
);

export default RootLayout;
