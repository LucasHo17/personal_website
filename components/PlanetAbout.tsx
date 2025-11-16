import Image from 'next/image'

export default function PlanetAbout() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
          <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            My name is Anh Dung Ho, you could call me Lucas. I am currently an undergraduate student at the University of Massachusetts, Amherst, pursuing a Bachelor of Science in Mathematics and Computer Science.
          </p>
          <p className="text-gray-300 leading-relaxed">
          I am currently interested in Software Engineering, building things that feel purposeful, well-crafted, and intuitive to use. I enjoy creating projects that combine clarity, creativity, and real-world impact.
          </p>
        </div>
        
        <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden">
          <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/perry1.png"
              alt="Lucas Ho"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

