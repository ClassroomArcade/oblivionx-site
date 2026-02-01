'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const go = (path: string) => router.push(`/${path === 'home' ? '' : path}`)

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 40px' }}>
      <div style={{ fontWeight: 900, fontSize: '1.3rem' }}>OBLIVION<span style={{ color:'#7c5cff' }}>X</span></div>
      <nav>
        {['home','features','download','status'].map(p => (
          <button
            key={p}
            onClick={() => go(p)}
            style={{
              marginLeft: '24px',
              color: pathname === `/${p==='home'?'':p}` ? '#e8e9f0' : '#9aa0b5',
              fontWeight: 500,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}
