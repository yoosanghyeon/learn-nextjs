import React from 'react';
import Navigtaion from '../components/navigation';
import { title } from 'process';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...',
  },
  description: 'The best movies on the best framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigtaion />
        {children}
      </body>
    </html>
  );
}
