'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (done) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0b0d12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.6 }}
        style={{ color: '#fff', fontSize: '2rem', fontWeight: 900 }}
      >
        OBLIVION<span style={{ color: '#7c5cff' }}>X</span>
      </motion.h1>
    </motion.div>
  )
}
