import { SectionTitle } from "../components/SectionTitle";
import { SocialLinks } from "../components/SocialLinks";
const Contact = () => {
  return (
    <section
      id="contact"
      className="font-poppins relative overflow-hidden pb-10 border-t border-border mt-40 w-full "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center flex flex-col items-center justify-center mb-20">
          <SectionTitle text="Get In Touch " className="mb-15" />
        </div>

        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
          <div className="flex flex-col gap-10">
            <SocialLinks className="gap-6" />
            <div className="max-w-3xl mt-4">
              <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
                I’m always excited about new projects and opportunities. From
                modern web apps to smart workflow automation, I help businesses
                save time and scale faster. Ready to bring your ideas to the
                next level? I’m just one message away.
              </h2>
            </div>
          </div>
          <div className="w-full h-px bg-border my-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
