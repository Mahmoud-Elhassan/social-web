"use client";

import isUserLoggedIn from "@/pages/api/isUserLoggedIn";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  const { loggedIn } = isUserLoggedIn();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {loggedIn && (
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        )}
      </body>
    </html>
  );
}
