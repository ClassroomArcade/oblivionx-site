// Features page
// app/features/page.tsx
'use client'

import React from 'react'
import PageTransition from '@/components/PageTransition'

export default function FeaturesPage() {
  const features = [
    { title: 'Clean UI', desc: 'Modern, minimal executor interface.' },
    { title: 'Fast Injection', desc: 'Optimized attachment speed.' },
    { title: 'Script Hub Ready', desc: 'Built for modular expansion.' },
    { title: 'Secure Loader', desc: 'Bootstrapper-friendly updates.' },
  ]

  return (
    <PageTransition>
      <div
        style={{
          padding: '120px 40px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Features</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px',
          }}
        >
          {features.map((f, idx) => (
            <div
              key={idx}
              style={{
                background: '#121622',
                borderRadius: '20px',
                padding: '26px',
              }}
            >
              <h3 style={{ marginBottom: '12px' }}>{f.title}</h3>
              <p style={{ color: '#9aa0b5' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
