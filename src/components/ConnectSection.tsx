"use client";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState, ChangeEvent, FormEvent } from "react";
import SendButton from "./ui/formButton";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ConnectSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_yhbz3co";
  const EMAILJS_TEMPLATE_ID = "template_x3f3hqb";
  const EMAILJS_PUBLIC_KEY = "zjH6OfBz2jx7fHQUc";

  const contactInfo = [
    {
      icon: "Email.png",
      label: "Email",
      value: "angadpatil1141@gmail.com",
      href: "mailto:angadpatil141@gmail.com",
    },
    {
      icon: "Phone.png",
      label: "Phone",
      value: "+91 9321550431",
      href: "tel:+919321550431",
    },
    {
      icon: "Map.png",
      label: "Location",
      value: "Mumbai",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: "LinkedIn.png",
      label: "LinkedIn",
      value: "Angad Patil",
      href: "https://www.linkedin.com/in/angad-patil/",
    },
    {
      icon: "Github.png",
      label: "Github",
      value: "Angad@0045",
      href: "https://github.com/Angad0045",
    },
  ];

  //Form
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "angadpatil1141@gmail.com",
        }
      );

      if (result.status === 200) {
        console.log("Form submitted:", formData);
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setStatus("error");
      // Reset to idle after 3s so they can fix the error and retry
      setTimeout(() => setStatus("idle"), 3000);
      console.error("EmailJS error:", error);
    }
  };

  // Alternative: Mailto fallback
  const handleMailtoFallback = () => {
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi Angad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.open(
      `mailto:angadpatil1141@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className="bg-neutral-900/20 w-full h-auto flex flex-col md:grid grid-cols-2 pt-20 pb-5 md:pb-20 px-7 md:px-20 lg:px-40">
      <div className="md:col-span-1">
        <h5 className="text-lg sm:text-xl text-blue-600 font-semibold">
          Let's Talk
        </h5>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">Contact</h1>
        <p className="mt-5 w-full lg:w-3/4 text-white/50 text-sm text-justify">
          Got a question or a project you’d like to discuss? I’m always open to
          new opportunities, collaborations, and conversations — don’t hesitate
          to reach out!
        </p>
        <div className="mt-5 space-y-5">
          <h1 className="text-xl sm:text-2xl font-bold">Contact Information</h1>
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-2">
              <div
                className="p-2 border-2 border-white/20 rounded-xl hover:shadow-[0_0_5px_#155dfc,0_0_15px_#155dfc,0_0_25px_#155dfc]
              transition-shadow duration-300"
              >
                <div
                  className="w-8 h-8 bg-[#155dfc]"
                  style={{
                    maskImage: `url(${info.icon})`,
                    WebkitMaskImage: `url(${info.icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </div>
              <div>
                <p className="text-sm text-white/50">{info.label}</p>
                {info.href ? (
                  <Link href={`${info.href}`}>
                    <p className="text-md text-white font-bold">{info.value}</p>
                  </Link>
                ) : (
                  <p className="text-md text-white font-bold">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold mt-5">
            Connect with me
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                className="w-full sm:auto"
                href={`${social.href}`}
              >
                <div
                  className="bg-gradient-to-l from-black to-neutral-900 flex justify-start items-center gap-3 sm:gap-4 my-3 p-3 border-2 border-neutral-800 rounded-2xl cursor-pointer
              hover:shadow-[0_0_5px_#155dfc,0_0_15px_#155dfc,0_0_25px_#155dfc]
              transition-shadow duration-300"
                >
                  <div
                    className="w-10 h-10 bg-[#155dfc]"
                    style={{
                      maskImage: `url(${social.icon})`,
                      WebkitMaskImage: `url(${social.icon})`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  ></div>
                  <div>
                    <h1 className="text-sm text-[#808080]">{social.label}</h1>
                    <h3 className="font-bold">{social.value}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-1 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center text-[#808080] w-full mx-auto mt-10 md:mt-0 md:pl-5"
        >
          <h1 className="text-xl font-bold text-white">Send me a message</h1>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 m-3 rounded-md border border-[#3f3f3f] text-white 
                     focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600"
            type="text"
            placeholder="Name"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 m-3 rounded-md border border-[#3f3f3f] text-white 
                     focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600"
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 p-3 m-3 resize-none rounded-md border border-[#3f3f3f] text-white 
            focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600"
            placeholder="Message"
            required
          />
          <SendButton status={status} />
        </form>
      </div>
    </div>
  );
};
