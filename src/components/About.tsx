import { about } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-gray-200 dark:border-gray-800/50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2">## about</h2>
        <h3 className="text-3xl font-bold mb-8">Profile</h3>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">{about}</p>
        </div>
      </div>
    </section>
  )
}
