"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type Inquiry = {
  [key: string]: string;
  createdAt: string;
};

type InquiryFormProps = {
  variant?: "project" | "subcontractor" | "career";
};

export default function InquiryForm({ variant = "project" }: InquiryFormProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inquiry = Object.fromEntries(formData.entries()) as Record<string, string>;
    inquiry.createdAt = new Date().toISOString();

    try {
      const key = `freddys-${variant}-inquiries`;
      const saved = JSON.parse(localStorage.getItem(key) ?? "[]") as Inquiry[];
      localStorage.setItem(key, JSON.stringify([...saved, inquiry]));
      event.currentTarget.reset();
      setMessage("Thanks. Your note is saved in this browser.");
    } catch {
      setMessage("Your browser could not save this note. Please try again.");
    }
  }

  return (
    <form className={`inquiry-form inquiry-${variant}`} onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
        {variant === "project" && <label>Company name<input name="company" autoComplete="organization" placeholder="Company name" /></label>}
        {variant === "subcontractor" && <label>Company<input name="company" autoComplete="organization" placeholder="Company name" required /></label>}
        {variant === "career" && <label>Phone<input name="phone" autoComplete="tel" placeholder="Phone number" /></label>}
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        {variant === "project" && <label>Phone<input name="phone" autoComplete="tel" placeholder="Phone number" /></label>}
        {variant === "project" && <label>Project type<select name="projectType" defaultValue="" required><option value="" disabled>Select a project type</option><option>Commercial interior</option><option>Retail or hospitality</option><option>Renovation</option><option>Other</option></select></label>}
        {variant === "subcontractor" && <label>Trade<select name="trade" defaultValue="" required><option value="" disabled>Select your trade</option><option>Carpentry</option><option>Concrete</option><option>Electrical</option><option>Flooring</option><option>Painting</option><option>Mechanical</option><option>Other</option></select></label>}
        {variant === "career" && <label>Role of interest<select name="role" defaultValue="" required><option value="" disabled>Select an area</option><option>Skilled trade</option><option>Field leadership</option><option>Project coordination</option><option>Other</option></select></label>}
      </div>
      {variant === "project" && <div className="form-row"><label>Project name<input name="projectName" placeholder="Project name" /></label><label>Project location<input name="location" placeholder="City, state" /></label></div>}
      {variant === "project" && <div className="form-row"><label>Estimated timing<select name="timing" defaultValue=""><option value="">Not sure yet</option><option>As soon as possible</option><option>Within 3 months</option><option>Within 6 months</option><option>Planning ahead</option></select></label><label>Estimated budget<select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under $100k</option><option>$100k–$500k</option><option>$500k–$1m</option><option>$1m+</option></select></label></div>}
      {variant === "subcontractor" && <div className="form-row"><label>Phone<input name="phone" autoComplete="tel" placeholder="Phone number" /></label><label>Service area<input name="serviceArea" placeholder="Cities or counties served" required /></label></div>}
      {variant === "career" && <label>Relevant experience<input name="experience" placeholder="Trade, training, or recent role" /></label>}
      <label>{variant === "project" ? "A little about the project" : variant === "subcontractor" ? "Tell us about your work" : "A little about you"}<textarea name="project" placeholder={variant === "project" ? "What are you looking to build?" : variant === "subcontractor" ? "What kind of work do you take on?" : "What kind of work are you looking for?"} required /></label>
      <button className="button button-pink" type="submit">
        {variant === "project" ? "Send project note" : variant === "subcontractor" ? "Submit trade information" : "Submit introduction"} <ArrowUpRight size={15} aria-hidden="true" />
      </button>
      <p className="form-status" aria-live="polite">{message}</p>
    </form>
  );
}
