import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-gray-200 dark:border-gray-800/50 grid-bg">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2">## education</h2>
        <h3 className="text-3xl font-bold mb-12">Education</h3>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                {edu.details && <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.details}</p>}
              </div>
              <span className="font-mono text-xs text-gray-500 dark:text-gray-500 shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
