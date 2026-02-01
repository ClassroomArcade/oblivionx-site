'use client'

import React from 'react'
import DownloadButton from '@/components/DownloadButton'
import PageTransition from '@/components/PageTransition'

export default function DownloadPage() {
  return (
    <PageTransition>
      <div
        style={{
          padding: '120px 40px',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Download OblivionX</h2>
        <p style={{ color: '#9aa0b5', marginBottom: '24px' }}>Windows 10 / 11</p>

        {/* Download button */}
        <DownloadButton />

        {/* Discord Widget */}
        <div style={{ marginTop: '48px' }}>
          <iframe
            src="https://discord.com/widget?id=1467564541335568499&theme=dark"
            width="350"
            height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </PageTransition>
  )
}
