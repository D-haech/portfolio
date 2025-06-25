import HomeSection from '../../components/HomeSection'
import AboutSection from '../../components/AboutSection'
import ProjectsSection from '../../components/ProjectsSection'
import ContactSection from '../../components/ContactSection'

export default function Home() {
  return (
    <main className="space-y-16 p-6">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}