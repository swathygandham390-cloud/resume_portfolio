import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Resume' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'black',
        marginTop: 40,
      }}
    >
      <div
        className="container"
        style={{
          padding: '40px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Swathy Gandham</div>
          <p style={{ fontSize: 13, marginTop: 6, maxWidth: 220 }}>
           Swathy Resume portfolio
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Quick links</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ fontSize: 13, color: 'var(--ink-soft)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Contact</p>
          <p style={{ fontSize: 13 }}>swathygandham390@email.com</p>
          <p style={{ fontSize: 13, marginTop: 4 }}>+91 9701301192</p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid var(--border)',
          padding: '16px 32px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 12, color: 'var(--muted)' }}>
          &copy; 2026 Swathy Gandham. All rights reserved.
        </p>
      </div>
    </footer>
  );
}



