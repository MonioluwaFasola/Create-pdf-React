import React from 'react'
import './PrintRules.css'

export default function NativeBrowserPDF() {
  return (
    <button onClick={ () => window.print()} className = "native-browser-button">
    Download Native Browser PDF
    </button>
  )
}

