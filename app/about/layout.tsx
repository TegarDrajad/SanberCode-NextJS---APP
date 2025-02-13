import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create Next App - About',
    description: 'Generated by create next app',
  }

export default function AboutLayout({children} : {children: React.ReactNode }) {
    return <div>
        <p>About Layout</p>
        {children}
    </div>
}