import { useState, useEffect } from 'react'
import '../App.css'
import Typewriter from './Typewriter.jsx'
import { FaLinkedin, FaMedium, FaGithubSquare } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io"

function Home() {
    const words = ["Creator", "Web Designer", "Writer"];
    const display = Typewriter(words);
    return (
        <div className="home-div">
        {/* <div className="card">
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
        </div> */}
        <div className='home-title-div'>
            <h1 className='title'>Hi, I'm Matteblue</h1>
            <span className='typewrite'>{display || '\u00A0'}</span>
        </div>
        <div>
            <span className='description'>
                I'm interested in being able to connect with people through
                technology, whether it is improving user experience on a product,
                writing an article that speaks to someone when they look at it online,
                or collaborating with like-minded individuals to develop solutions.</span>
        </div>
        <button
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener,noreferrer')}
            className="z-50 group bg-transparent p-3 rounded-lg border border-gray-200 shadow-md transition-all no-underline cursor-default"
        >
            <pre className="text-[10px] leading-tight font-mono text-gray-800 transition-colors border-none outline-none">
                {`₍^. .^₎⟆`}
            </pre>
        </button>
        <div className='socials'>
            <a
                onClick={() => alert('LinkedIn not available yet')}
                target="_blank"
                rel="noreferrer noopener"><FaLinkedin size="40"/></a>
            <a
                href='https://github.com/matteblue/'
                target="_blank"
                rel="noreferrer noopener"><FaGithubSquare size="40"/></a>
            <a
                href='https://medium.com/@matteblue.blog'
                target="_blank"
                rel="noreferrer noopener"><FaMedium size="40"/></a>
            <a
                onClick={() => alert('Email not available yet')}
                target="_blank"
                rel="noreferrer noopener"><IoMdMail size="40"/></a>
        </div>
        </div>
    )
}

export default Home
