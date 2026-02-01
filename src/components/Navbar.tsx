import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
          {'>'} rw<span className="animate-pulse">_</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm px-3 py-1.5 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2" aria-label="Menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md px-4 pb-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 font-mono text-sm hover:text-indigo-600 dark:hover:text-indigo-400">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
