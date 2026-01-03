import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, TrendingUp, Users } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '6rem 0',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9))'
            }}>
                <div className="container animate-fade-in">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>
                        Connecting Elite Research Minds with Global Industry Leaders
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem', opacity: 0.9, lineHeight: 1.6 }}>
                        The premier platform bridging the gap between PhD scholars from India's top institutes (IITs, IISERs) and innovative organizations worldwide.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/find-job" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            <GraduationCap size={20} style={{ marginRight: '0.5rem' }} />
                            Find a Job
                        </Link>
                        <Link to="/provide-job" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderColor: 'white', color: 'white' }}>
                            <Briefcase size={20} style={{ marginRight: '0.5rem' }} />
                            Provide a Job
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <StatCard icon={<Users size={32} />} number="500+" label="PhD Researchers" />
                        <StatCard icon={<Briefcase size={32} />} number="150+" label="Partner Companies" />
                        <StatCard icon={<TrendingUp size={32} />} number="95%" label="Placement Rate" />
                        <StatCard icon={<GraduationCap size={32} />} number="20+" label="Top Institutes" />
                    </div>
                </div>
            </section>

            {/* Introduction/Mission */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="mb-4">Why Apex Research Connect?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                            We recognize the immense value of specialized research talent. Our platform is dedicated exclusively to PhD holders from premier institutes, ensuring that recruiters find verified experts capable of driving innovation.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                            For researchers, we curate opportunities that value your expertise, offering roles that challenge and reward your deep technical knowledge.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const StatCard = ({ icon, number, label }) => (
    <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{number}</h3>
        <p style={{ color: 'var(--color-text-light)', fontWeight: 500 }}>{label}</p>
    </div>
);

export default LandingPage;
