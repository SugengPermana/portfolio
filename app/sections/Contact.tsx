"use client";
import { SectionTitle } from "../components/SectionTitle";
import { SocialLinks } from "../components/SocialLinks";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create mailto link with pre-filled information
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    const mailtoLink = `mailto:sugengpermanadesembry@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="font-poppins relative overflow-hidden pb-10 border-t border-border mt-40 w-full "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-center flex flex-col items-center justify-center mb-20"
        >
          <SectionTitle text="Get In Touch " className="mb-15" />
        </div>
        {/* subtitle contact */}
        <div className="transition-all duration-1000 ease-out transform opacity-100 translate-y-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            {/* Left side - Subtitle */}
            <div className="flex-1">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <SocialLinks className="gap-6 mb-6" />
              </div>
              <div className="max-w-3xl">
                <h2
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="text-2xl md:text-3xl font-medium text-foreground leading-tight"
                >
                  I'm always excited about new projects and opportunities. From
                  modern web apps to smart workflow automation, I help
                  businesses save time and scale faster. Ready to bring your
                  ideas to the next level? I'm just one message away.
                </h2>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="flex-1 w-full">
              <form
                onSubmit={handleSubmit}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="space-y-6"
              >
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-accent/10 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full h-px bg-border my-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
