import React from 'react';

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy;Next JS is great!
    </div>
  );
}
