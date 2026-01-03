import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Beaker, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Find a Job', path: '/find-job' },
        { name: 'Provide a Job', path: '/provide-job' },
    ];

    return (
        <nav className="navbar" style={{ backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 50 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                    <Beaker size={24} color="var(--color-secondary)" />
                    <span>Apex Research Connect</span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontWeight: 500,
                                color: location.pathname === link.path ? 'var(--color-secondary)' : 'var(--color-text)',
                                borderBottom: location.pathname === link.path ? '2px solid var(--color-secondary)' : 'none'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'block', padding: '0.5rem' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div style={{ position: 'absolute', top: '4rem', left: 0, width: '100%', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{ display: 'block', padding: '0.75rem 0', fontWeight: 500, color: 'var(--color-text)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
