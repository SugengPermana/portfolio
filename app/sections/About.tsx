import ShinyText from "../components/ShinyText"

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
    <ShinyText className="text-xl border border-white/10 backdrop-blur-sm mb-8 rounded-full px-4 py-2.5 hover:scale-105 transition-transform duration-300"
    text="✨ About Me "
    speed={2}
    delay={1}
    color="#a600ff"
    shineColor="#e1ff00"
    spread={120}
    direction="left"
    yoyo={false}
    pauseOnHover={false}
    disabled={false}
/>
    </section>
  )
}

export default About
