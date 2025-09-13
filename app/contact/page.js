import { toast } from "react-toastify";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="resume-section" id="contact">
        <div className="resume-section-content">
          <h2 className="mb-5">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
