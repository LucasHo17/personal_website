import Image from 'next/image'

export default function PlanetProjects() {
  const projects = [
    {
      title: 'Doctor Assistant',
      description: 'An AI-powered virtual healthcare platform that allows users to interact with a virtual doctor, receive personalized medical advice, and manage personal health notes. ',
      tech: ['React', 'FastAPI', 'MongoDB', 'OpenAI (GPT-4o + TTS)', 'JWT', 'Web Speech API', 'Cloudinary', 'Docker'],
      github: 'https://github.com/LucasHo17/DoctorAssistant',
      image: '/doctorassistant.png'
    },
    {
      title: 'Penalty Kick Predictor',
      description: 'An interactive web application that uses machine learning to predict goalkeeper dive directions during penalty kicks.',
      tech: [
        'FastAPI',
        'scikit-learn',
        'pandas',
        'joblib',
        'uvicorn',
        'React 19',
        'Vite',
        'React Router',
        'Axios',
        'React Icons'
      ],
      github: 'https://github.com/LucasHo17/penPredict',
      image: '/penpredict.png'
    },
    {
      title: 'BMO - Baby meeting organizer (HackUMass 2025)',
      description: 'An agentic conversational assistant powered by Google’s Gemini generative AI model. It understands natural language to manage everyday tasks such as reading and sending emails, checking calendar availability, scheduling meetings, and sending follow-up messages',
      tech: ['FastAPI', 'Google OAuth 2.0', 'Google Calendar API', 'Gmail API', 'Google GenAI (Gemini)', 'MongoDB', 'ElevenLabs TTS'],
      github: 'https://github.com/asayenju/meeting_schedule_assistant',
      image: '/bmo.png'
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
        >
          {/* Project Image */}
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white font-semibold transition"
            >
              GitHub →
            </a>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

