import { SectionTitle } from "../components/SectionTitle";
import { AnimatedShinyButton } from "../components/ui/Home/animated-shiny-button";
import LiveButton from "../components/ui/Home/live-button";
import Cardhome from "../components/ui/Home/Cardhome";
import TypingGlitch from "../components/ui/TypingGlitch";
import GradientText from "../components/ui/GradientText";

const Home = () => {
  return (
    <section id="home" className="w-full max-w-7xl mx-auto pt-10 mb-20">
      
      <div className="font-chakra w-full max-w-5xl mx-auto pb-10 px-4 flex flex-col items-center justify-center text-center relative z-10 mb-15 md:mb-20 md:pt-20 lg:pt-15 lg:mb-5">
      
   
        <div className="mb-6">
          <SectionTitle text="Coding is Progress, but I am lazy" />
        </div>


        {/* nama gw */}
        <div className="relative mb-2">
          <h4 className="relative text-4xl md:text-7xl sm:text-5xl text-foreground tracking-tighter leading-[1.1] uppercase flex">
            Sugeng.
            <GradientText colors={["#5227FF", "#FF9FFC", "#B19EEF"]}>
              ID
            </GradientText>
          </h4>
        </div>
        {/* deskripsi */}
        <div className="font-chakra relative mb-6">
          <p className="text-muted-foreground text-lg font-medium">
            <TypingGlitch />
          </p>
        </div>
        {/* button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <AnimatedShinyButton url="#resume" className="uppercase rounded-full">
            Open Cv
          </AnimatedShinyButton>
          <LiveButton
            url="#contact"
            text="Lets Work Together"
            className="uppercase rounded-full"
            />
        </div>
        {/* card home */}
        <Cardhome />
      </div>
        
            
    </section>
  );
};

export default Home;
