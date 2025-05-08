import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}


// why I have to write child element in the body tag in the next js 
// how to add any font to a project