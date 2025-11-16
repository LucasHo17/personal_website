export default function PlanetExperience() {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development teams and building scalable applications.',
      tech: ['React', 'TypeScript', 'Node.js']
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Developed full-stack applications and collaborated with cross-functional teams.',
      tech: ['JavaScript', 'Python', 'PostgreSQL']
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Built responsive websites and learned modern web development practices.',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative pl-8 pb-8 border-l-2 border-gray-700/50 last:border-l-0 last:pb-0"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-900" />
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400 text-lg">{exp.company}</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

