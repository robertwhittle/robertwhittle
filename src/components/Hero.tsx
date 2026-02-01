import { personal } from '../data/resume'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-14 grid-bg">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 opacity-50 blur-sm" />
            <img
              src={personal.photo}
              alt={personal.name}
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-gray-200 dark:border-gray-800"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2">
            $ whoami
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">{personal.name}</h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-2 font-medium">{personal.title}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-1 font-mono text-sm">{personal.location}</p>
          <p className="text-gray-600 dark:text-gray-500 mb-6 max-w-lg">{personal.tagline}</p>
          <div className="flex justify-center md:justify-start gap-3">
            <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Email
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
