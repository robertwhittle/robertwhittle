import { personal } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-800/50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2">## contact</h2>
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Interested in working together or just want to say hello? Drop me a line.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors glow"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          {personal.email}
        </a>
        <div className="flex justify-center gap-6 mt-8 text-sm">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-mono text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">github</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">linkedin</a>
        </div>
        <p className="mt-16 text-xs text-gray-400 dark:text-gray-600 font-mono">{personal.location} &middot; {personal.phone}</p>
      </div>
    </section>
  )
}
