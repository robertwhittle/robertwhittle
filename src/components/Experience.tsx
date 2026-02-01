import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-gray-200 dark:border-gray-800/50 grid-bg">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2">## experience</h2>
        <h3 className="text-3xl font-bold mb-12">Career</h3>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-colors">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h4 className="text-lg font-semibold">{exp.role}</h4>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-500">{exp.period}</span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">
                {exp.company} &middot; {exp.location}
              </p>
              <ul className="space-y-1">
                {exp.description.map((d, j) => (
                  <li key={j} className="text-gray-600 dark:text-gray-400 text-sm flex gap-2">
                    <span className="text-indigo-500/50 select-none shrink-0">&rarr;</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
