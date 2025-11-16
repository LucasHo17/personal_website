export default function PlanetSkills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Vue.js', 'React Native', 'Expo']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'FastAPI', 'Flask', 'Django', 'Java', 'C']
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MariaDB', 'Redis', "Firebase", "VercelPostgres", "Cloudinary"]
    },
    {
      category: 'Cloud & DevOps',
      skills: ['GitHub Actions', 'Docker', 'AWS', 'EC2', 'S3', 'Lambda', 'Linux', 'Ubuntu', 'Google Cloud']
    },
    {
      category: 'AI/ML',
      skills: ['Prompt Engineering', 'LLM APIs', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Matplotlib', 'Linux', 'NumPy', 'Pandas']
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

