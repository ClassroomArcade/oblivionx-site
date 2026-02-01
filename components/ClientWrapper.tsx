'use client'
import React from 'react'
import Loader from './Loader'
import Navbar from './Navbar'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loader />
      <Navbar />
      {children}
    </>
  )
}
