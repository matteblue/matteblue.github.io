import { useState } from 'react'
import './App.css'

function App() {

    return (
        <div className="app-container">
        <div className="card">
            <h1 className="title">Vite + Tailwind</h1>
            <p className="subtitle">
            Styling via custom classes in App.css
            </p>
            <button 
            className="btn-primary"
            onClick={() => alert('Tailwind is working!')}
            >
            Get Started
            </button>
        </div>
        <button
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener,noreferrer')}
            className="z-50 group bg-white p-3 rounded-lg border border-gray-200 shadow-md transition-all no-underline cursor-default"
        >
            <pre className="text-[10px] leading-tight font-mono text-gray-800 transition-colors border-none outline-none">
                {`₍^. .^₎⟆`}
            </pre>
        </button>
        </div>
    )
}

export default App
