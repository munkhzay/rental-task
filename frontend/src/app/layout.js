'use client';
import { ToastContainer } from 'react-toastify';
import '@/styles/globals.css';
import { AuthProvider } from '@/providers/authProvider';
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
