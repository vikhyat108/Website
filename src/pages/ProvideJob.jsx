import React, { useState } from 'react';
import { Check, Building2, CreditCard, Upload } from 'lucide-react';

const ProvideJob = () => {
    const [showForm, setShowForm] = useState(false);

    const plans = [
        {
            name: 'Startup',
            price: '₹5,000/mo',
            features: ['Post up to 2 Jobs', 'Access to Junior Researchers', 'Basic Profile Search', 'Email Support'],
            recommended: false
        },
        {
            name: 'Enterprise',
            price: '₹15,000/mo',
            features: ['Unlimited Job Posts', 'Access to Elite PhD Researchers', 'Advanced AI Matching', 'Dedicated Account Manager'],
            recommended: true
        },
        {
            name: 'Institutional',
            price: 'Custom',
            features: ['Full Database Access', 'API Integration', 'Campus Branding', 'Custom Hiring Events'],
            recommended: false
        }
    ];

    return (
        <div className="animate-fade-in" style={{ padding: '4rem 0' }}>
            <div className="container">

                {/* Header */}
                <div className="text-center mb-4">
                    <h1 className="mb-2">For Recruiters & Companies</h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
                        Hire the top 1% of research talent from India's premier institutes.
                    </p>
                </div>

                {/* Subscription Plans */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {plans.map((plan) => (
                        <div key={plan.name} style={{
                            border: plan.recommended ? '2px solid var(--color-secondary)' : '1px solid #e2e8f0',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            backgroundColor: 'white',
                            position: 'relative',
                            transform: plan.recommended ? 'scale(1.05)' : 'none',
                            boxShadow: plan.recommended ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
                        }}>
                            {plan.recommended && (
                                <span style={{
                                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--color-secondary)', color: 'white', padding: '0.25rem 1rem',
                                    borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600
                                }}>
                                    Best Value
                                </span>
                            )}
                            <h3 className="mb-1">{plan.name}</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                {plan.price}
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: 'var(--color-text-light)' }}>
                                        <Check size={16} color="var(--color-secondary)" style={{ marginRight: '0.5rem' }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setShowForm(true)}
                                className={`btn ${plan.recommended ? 'btn-secondary' : 'btn-outline'}`}
                                style={{ width: '100%' }}
                            >
                                Start Hiring
                            </button>
                        </div>
                    ))}
                </div>

                {/* Profile Form */}
                {showForm && (
                    <div id="recruiter-form" className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h2 className="mb-4 text-center">Company Profile</h2>
                        <form onSubmit={(e) => e.preventDefault()}>

                            {/* Company Info */}
                            <div className="mb-4">
                                <h4 className="mb-2">Company Information</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="Company Name" style={inputStyle} />
                                    <input type="text" placeholder="Industry (e.g. Pharma, AI)" style={inputStyle} />
                                    <input type="text" placeholder="Contact Person Name" style={inputStyle} />
                                    <input type="email" placeholder="Work Email" style={inputStyle} />
                                </div>
                            </div>

                            {/* Hiring Plans */}
                            <div className="mb-4">
                                <h4 className="mb-2">Hiring Needs</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <textarea placeholder="Describe your company and what you are looking for..." style={{ ...inputStyle, minHeight: '100px' }}></textarea>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '1rem', border: '1px dashed #cbd5e1', borderRadius: 'var(--radius-md)' }}>
                                        <Building2 size={20} color="var(--color-text-light)" />
                                        <span style={{ color: 'var(--color-text-light)' }}>Upload Company Logo</span>
                                        <input type="file" style={{ display: 'none' }} />
                                    </label>
                                </div>
                            </div>

                            {/* Agreements */}
                            <div className="mb-4">
                                <h4 className="mb-2">Agreements</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <input type="checkbox" />
                                        <span style={{ fontSize: '0.9rem' }}>I agree to the Terms of Business.</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <input type="checkbox" />
                                        <span style={{ fontSize: '0.9rem' }}>I confirm I am authorized to hire for this company.</span>
                                    </label>
                                </div>
                            </div>

                            {/* Payment Placeholder */}
                            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', marginTop: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                                    <CreditCard size={24} color="var(--color-text)" />
                                    <div>
                                        <div style={{ fontWeight: 600 }}>Payment Method</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Secure gateway (Razorpay/Stripe) integration coming soon.</div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Post & Pay</button>
                            </div>

                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid #cbd5e1',
    fontFamily: 'inherit'
};

export default ProvideJob;
