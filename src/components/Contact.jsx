import emailjs from "@emailjs/browser";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztr217j",
        "template_ynf6cnd",
        e.target,
        {
          publicKey: "J5ZoLLiuLDcT_t9oM",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="portfolio-section">

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always open to discussing projects, development
            opportunities, and interesting ideas.
          </p>

          <div className="contact-links">

            <a href="mailto:ramsharansdr0@gmail.com">
              ✉️ ramsharansdr0@gmail.com
            </a>

            <a
              href="https://github.com/Ramsharan-byte"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ram-sharan-upadhyay-0545r/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;