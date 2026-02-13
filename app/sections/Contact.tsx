import { SectionTitle } from "../components/SectionTitle";
import Link from "next/link";
import { SocialLinks } from "../components/SocialLinks";
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-10 border-t border-border mt-40 w-full "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          <SectionTitle text="✨ Get In Touch " className="mb-15" />
        </div>

        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0 ">
          <div className="flex flex-col gap-10">
            <SocialLinks className="gap-6" />
            <div className="max-w-3xl mt-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Want to know more about me, tell me about your project or just
                to say hello?
                <span className="text-purple-500"> Drop me a line </span>
                and I'll get back as soon as possible.
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
