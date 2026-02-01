// components/DownloadButton.tsx
'use client'

import React, { useEffect, useState } from 'react'

export default function DownloadButton() {
  const [latestUrl, setLatestUrl] = useState<string | null>(null)
  const [latestVersion, setLatestVersion] = useState<string>('Fetching latest release…')
  const [loading, setLoading] = useState(true)

  // Fetch latest release from GitHub
  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetch('https://api.github.com/repos/ClassroomArcade/OblivionX-Download/releases/latest')
        const data = await res.json()
        if (data.assets && data.assets.length > 0) {
          setLatestUrl(data.assets[0].browser_download_url)
          setLatestVersion(`Latest version: ${data.tag_name}`)
        }
      } catch (err) {
        console.error('Failed to fetch latest release:', err)
        setLatestVersion('Failed to fetch latest release')
      } finally {
        setLoading(false)
      }
    }
    fetchLatest()
  }, [])

  // Handle download click with optional verification
  const handleDownload = () => {
    if (!latestUrl) return
    const ok = confirm('Verify loader integrity before downloading?')
    if (ok) window.location.href = latestUrl
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '24px' }}>
      <p style={{ color: '#9aa0b5', marginBottom: '12px' }}>
        {loading ? 'Fetching latest release…' : latestVersion}
      </p>
      <button
        onClick={handleDownload}
        style={{
          padding: '14px 26px',
          borderRadius: '14px',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
          background: '#7c5cff',
          color: '#fff',
          boxShadow: '0 0 30px rgba(124,92,255,0.45)',
        }}
      >
        Download Installer
      </button>
    </div>
  )
}
