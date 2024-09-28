'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={pathname === '/gallery' ? 'active' : ''}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background: #f8f8f8;
          padding: 10px;
        }
        nav ul {
          display: flex;
          list-style: none;
          gap: 15px;
        }
        .active {
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default Header;
