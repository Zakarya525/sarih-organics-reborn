
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the data to your backend
    // For now, let's simulate a submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sari-cream-100 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-sari-terracotta-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-sari-terracotta-700 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, 
            ordering, or anything else, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-sari-cream-50 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-sari-terracotta-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-sari-terracotta-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-sari-terracotta-800">Email</h3>
                      <p className="text-sari-terracotta-600">info@sarihorganics.com</p>
                      <p className="text-sari-terracotta-600">orders@sarihorganics.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-sari-terracotta-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-sari-terracotta-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-sari-terracotta-800">Phone</h3>
                      <p className="text-sari-terracotta-600">+62 812 3456 7890</p>
                      <p className="text-sari-terracotta-600">Mon-Fri: 9am-5pm (Bali Time)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-sari-terracotta-100 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-sari-terracotta-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-sari-terracotta-800">Location</h3>
                      <p className="text-sari-terracotta-600">
                        Jalan Raya Ubud<br />
                        Ubud, Bali 80571<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-sari-terracotta-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-sari-terracotta-100 rounded-full flex items-center justify-center text-sari-terracotta-600 hover:bg-sari-terracotta-200 transition">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-sari-terracotta-100 rounded-full flex items-center justify-center text-sari-terracotta-600 hover:bg-sari-terracotta-200 transition">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-sari-terracotta-700">
                        Your Name*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="border-sari-cream-300 focus:border-sari-terracotta-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-sari-terracotta-700">
                        Your Email*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="border-sari-cream-300 focus:border-sari-terracotta-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-sari-terracotta-700">
                      Subject*
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Enter subject"
                      className="border-sari-cream-300 focus:border-sari-terracotta-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-sari-terracotta-700">
                      Message*
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message"
                      className="min-h-[150px] border-sari-cream-300 focus:border-sari-terracotta-500"
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-sari-terracotta-500 hover:bg-sari-terracotta-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-sari-cream-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[16/9] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.331619610848!2d115.25768!3d-8.4952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOLKwMjknNDMuMiJTIDExNcKwMTUnMjcuNiJF!5e0!3m2!1sen!2sid!4v1619548553264!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Sari Horganics Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
