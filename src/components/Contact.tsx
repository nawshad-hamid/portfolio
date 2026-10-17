import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Bio } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  // Configurable EmailJS parameters with fallbacks
  const EMAILJS_SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_v745561";
  const EMAILJS_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_12wjfkg";
  const EMAILJS_PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "CNGhp3292EEuSCheH";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      setStatus({
        type: "error",
        message:
          "Please fill out all required fields (Name, Email, and Message).",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I will get back to you soon.",
      });

      setFormState({ name: "", email: "", subject: "", message: "" });
      formRef.current.reset();

      setTimeout(() => {
        setStatus({ type: null, message: null });
      }, 7000);
    } catch (error: any) {
      console.error("EmailJS submission error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message via EmailJS. Please reach out directly at " +
          Bio.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's work together
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Open to senior Android and mobile engineering opportunities. Reach
            out by email, phone, or LinkedIn.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group shadow-sm dark:shadow-md">
              <a
                href={`mailto:${Bio.email}`}
                className="flex items-center gap-3.5 flex-1 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Direct Email
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {Bio.email}
                  </p>
                </div>
              </a>

              <button
                onClick={() => copyToClipboard(Bio.email, "email")}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group shadow-sm dark:shadow-md">
              <a
                href={`tel:${Bio.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3.5 flex-1 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {Bio.phone}
                  </p>
                </div>
              </a>

              <button
                onClick={() => copyToClipboard(Bio.phone, "phone")}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-sm dark:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {Bio.location}
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex gap-3">
              {Bio.linkedin && (
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all font-semibold text-xs shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              )}

              {Bio.github && (
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-all font-semibold text-xs shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contact Message Form with EmailJS */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Have a project or open senior position? Send an email
                    directly to my inbox.
                  </p>
                </div>
              </div>

              {/* Status Banner */}
              {status.message && (
                <div
                  className={`p-3.5 rounded-2xl flex items-center gap-3 text-xs font-semibold ${
                    status.type === "success"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60"
                      : "bg-red-100 text-red-800 border border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800/60"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Email <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Senior Android Role / Consultation"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your application, technical goals, or team needs..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white dark:text-slate-950 bg-emerald-600 dark:bg-emerald-400 hover:bg-emerald-700 dark:hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-98 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending via EmailJS...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
