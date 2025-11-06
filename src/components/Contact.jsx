import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-[#F87B1B] mb-4">Contact Me</h3>

      <div className="bg-[#10182b] p-6 rounded-lg border border-gray-800 max-w-3xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <h4 className="text-lg font-semibold text-white mb-2 md:mb-0">
            Get in Touch
          </h4>
          <div className="text-gray-400 text-sm mt-2 md:mt-0">
            <p>Feel free to reach out —</p>
            <p>I’d love to connect with you! 🚀</p>
          </div>
        </div>

        {/* ✉️ Contact Form */}
        <form
          action="https://formspree.io/f/xnnoegee"
          method="POST"
          className="grid gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-[#0a0f1c] border border-gray-700 text-gray-200 focus:border-[#F87B1B] outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-[#0a0f1c] border border-gray-700 text-gray-200 focus:border-[#F87B1B] outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded bg-[#0a0f1c] border border-gray-700 text-gray-200 focus:border-[#F87B1B] outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#F87B1B] text-black font-semibold rounded hover:bg-[#ff913d] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
