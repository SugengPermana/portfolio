const Home = () => {
  return (
    <section id="home" className="min-h-screen items-center justify-center">
      <div className="mb-6 pt-10 text-center">
          <span className="font-chakra px-4 py-1.5 rounded-full border border-primary/20 bg-primary-content text-xs tracking-widest text-primary uppercase backdrop-blur-md">Portfolio 2026 • Edition </span>
        </div>
      <div className="w-full max-w-5xl mx-auto pb-10 px-4 flex flex-col relative z-10 uppercase">
        <div className="relative mb-8">
          <div className="absolute -inset-10 from-purple-500/20 to-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>
          <h4 className="relative md:text-3xl text-primary-content tracking-tighter  leading-[1.1]">
            Sugeng
            <span className="bg-clip-text ">.DEV</span>
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Home
