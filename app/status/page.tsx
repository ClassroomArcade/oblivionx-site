// app/status/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import PageTransition from '@/components/PageTransition'

export default function StatusPage() {
  const [status, setStatus] = useState('Checking server status…')
  const [latestVersion, setLatestVersion] = useState<string>('Fetching latest release…')

  useEffect(() => {
    // Simulate checking server status
    const timer = setTimeout(() => {
      setStatus('Server is online ✅')
    }, 1000)

    // Fetch latest GitHub release
    async function fetchLatest() {
      try {
        const res = await fetch('https://api.github.com/repos/ClassroomArcade/OblivionX-Download/releases/latest')
        const data = await res.json()
        if (data.tag_name) {
          setLatestVersion(`Latest release: ${data.tag_name}`)
        }
      } catch (err) {
        console.error(err)
        setLatestVersion('Failed to fetch latest release')
      }
    }
    fetchLatest()

    return () => clearTimeout(timer)
  }, [])

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
        <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>OblivionX Status</h2>
        <p style={{ color: '#9aa0b5', marginBottom: '24px' }}>{status}</p>
        <p style={{ color: '#9aa0b5', marginBottom: '48px' }}>{latestVersion}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div
            style={{
              background: '#121622',
              padding: '20px',
              borderRadius: '20px',
              minWidth: '200px',
            }}
          >
            <h3>Loader</h3>
            <p>Operational ✅</p>
          </div>
          <div
            style={{
              background: '#121622',
              padding: '20px',
              borderRadius: '20px',
              minWidth: '200px',
            }}
          >
            <h3>Server</h3>
            <p>Online ✅</p>
          </div>
          <div
            style={{
              background: '#121622',
              padding: '20px',
              borderRadius: '20px',
              minWidth: '200px',
            }}
          >
            <h3>GitHub Releases</h3>
            <p>{latestVersion}</p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
