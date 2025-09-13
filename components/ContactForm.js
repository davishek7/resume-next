"use client";
import { API_URL } from "@/constants/api.constant";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    subject.trim() !== "" &&
    message.trim() !== "";

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const postData = Object.fromEntries(formData.entries());

      const res = await fetch(`${API_URL}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const resData = await res.json();
      if (resData.status !== 201) {
        toast.error(resData.message);
        return;
      }
      toast.success(resData.message);
      e.target.reset();
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleContactSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="full_name"
          name="full_name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter your subject..."
          required
        />
        <label htmlFor="subject">Subject</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          style={{ height: "12rem" }}
          required
        ></textarea>
        <label htmlFor="message">Message</label>
      </div>
      <input type="hidden" name="from_app" value="resume app" />
      <br />
      <button
        className="btn btn-primary text-uppercase text-white"
        id="submitButton"
        type="submit"
        disabled={isSubmitting || !isFormValid}
      >
        {isSubmitting ? "Sending" : "Send"}
      </button>
    </form>
  );
}
