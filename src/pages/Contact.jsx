import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        <TitleHeader title="Get in Touch – Let’s Connect" />

        <div className="grid grid-cols-12 gap-12 mt-2 items-center">

          {/* LEFT — FORM */}
          <div className="xl:col-span-5 col-span-12 flex justify-end">
            <div className="w-full max-w-[480px] card-border rounded-2xl p-10 bg-black/40 backdrop-blur-md shadow-xl">
              
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >

                {/* NAME */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/70">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    className="input-field"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    className="input-field"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-white/70">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    className="input-field resize-none"
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    mt-4 w-full py-4 rounded-xl
                    bg-[#cd7c2e] text-black font-semibold
                    shadow-[0_8px_25px_rgba(205,124,46,0.35)]
                    hover:shadow-[0_12px_35px_rgba(205,124,46,0.55)]
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all duration-300
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </div>

          {/* RIGHT — 3D EXPERIENCE */}
          <div className="xl:col-span-7 col-span-12 flex justify-start">
            <div className="w-full h-[520px] bg-[#e1b68d] rounded-3xl overflow-hidden shadow-2xl">
              <ContactExperience />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
