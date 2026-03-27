import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">Diksha Sharma</div>
      <p className="footer-copy">© 2025 Diksha Sharma. All rights reserved.</p>
      <ul className="footer-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
}
