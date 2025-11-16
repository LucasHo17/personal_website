import UniverseHero from '@/components/UniverseHero'
import UniverseSection from '@/components/UniverseSection'
import PlanetAbout from '@/components/PlanetAbout'
import PlanetProjects from '@/components/PlanetProjects'
import PlanetExperience from '@/components/PlanetExperience'
import PlanetContact from '@/components/PlanetContact'
import PlanetSkills from '@/components/PlanetSkills'
import PlanetComments from '@/components/PlanetComments'

export default function Home() {
  return (
    <main>
      <UniverseHero />
      <UniverseSection id="about" title="About Me">
        <PlanetAbout />
      </UniverseSection>
      <UniverseSection id="skills" title="Skills">
        <PlanetSkills />
      </UniverseSection>
      <UniverseSection id="experience" title="Experience">
        <PlanetExperience />
      </UniverseSection>
      <UniverseSection id="projects" title="Projects">
        <PlanetProjects />
      </UniverseSection>
      <UniverseSection id="comments" title="Comments">
        <PlanetComments />
      </UniverseSection>
      <UniverseSection id="contact" title="Contact">
        <PlanetContact />
      </UniverseSection>
    </main>
  )
}