'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

import React from 'react';

export default function Navigtaion() {
  const path = usePathname();
  console.log(path);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href={'/'}>Home</Link>
          {path === '/' ? '◆' : ''}
        </li>
        <li>
          <Link href={'/about-us'}>About Us</Link>
          {path === '/about-us' ? '◆' : ''}
        </li>
      </ul>
    </nav>
  );
}
