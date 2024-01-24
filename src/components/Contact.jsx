import { useState } from "react";
import emailjs from "emailjs-com";
import { validateForm } from "../utils/utils";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(formData)) {
      try {
        setIsLoading(true);
        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your Email.js credentials
        await emailjs.send(
          "service_4fhrj56",
          "template_fw636r7",
          formData,
          "u4xx2UYmnrJhVCELk"
        );
        toast.success("Message Sent");
        console.log("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false);
        setFormData({ from_name: "", email: "", subject: "", message: "" });
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              Hi, Thanks for looking through my portfolio. If you need help on
              Web Development, Youtube content creation and Online Marketing,
              please contact me & Im hireable too
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Abishek</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Udangudi, Thoothukudi</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">abishekhttps@gmail.com</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-mobile"></i>
                <div className="info">
                  <div className="head">Mobile</div>
                  <div className="sub-title">9788848178</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.from_name}
                    name="from_name"
                    onChange={handleChange}
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  name="subject"
                  onChange={handleChange}
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">
                  {isLoading ? "sending.." : "send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default Contact;
