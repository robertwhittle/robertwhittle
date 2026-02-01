import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-gray-200 dark:border-gray-800/50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2">## skills</h2>
        <h3 className="text-3xl font-bold mb-12">Tech Stack</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <h4 className="font-mono text-xs text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">{group.category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
