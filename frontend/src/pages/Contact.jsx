import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageCircle,
  Headphones,
  Globe,
  Award,
  Users
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = [contactRef, formRef, infoRef, mapRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Fashion Avenue', 'New York, NY 10001', 'United States'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@ecompare.com', 'sales@ecompare.com'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 8PM', 'Saturday: 10AM - 6PM', 'Sunday: Closed'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', url: '#', color: 'hover:bg-[#1877f2]' },
    { icon: FaTwitter, name: 'Twitter', url: '#', color: 'hover:bg-[#1da1f2]' },
    { icon: FaInstagram, name: 'Instagram', url: '#', color: 'hover:bg-[#e4405f]' },
    { icon: FaLinkedin, name: 'LinkedIn', url: '#', color: 'hover:bg-[#0077b5]' },
    { icon: FaGithub, name: 'GitHub', url: '#', color: 'hover:bg-[#333]' },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        ref={contactRef}
        id="contact"
        className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 transform ${
            visibleSections.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We'd Love to Hear From You
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? Our team is here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleSections.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div 
              ref={formRef}
              id="form"
              className={`transition-all duration-700 transform ${
                visibleSections.form ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-slideDown">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                        <p className="text-green-600 text-sm">We'll respond to your inquiry shortly.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none
                        ${focusedField === 'name' ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-gray-300'}
                        ${errors.name ? 'border-red-500 bg-red-50' : 'hover:border-gray-400'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none
                        ${focusedField === 'email' ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-gray-300'}
                        ${errors.email ? 'border-red-500 bg-red-50' : 'hover:border-gray-400'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none
                        ${focusedField === 'subject' ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-gray-300'}
                        ${errors.subject ? 'border-red-500 bg-red-50' : 'hover:border-gray-400'}`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none resize-none
                        ${focusedField === 'message' ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-gray-300'}
                        ${errors.message ? 'border-red-500 bg-red-50' : 'hover:border-gray-400'}`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-500"></div>
                  </button>
                </form>

                {/* Contact Support */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Headphones className="w-4 h-4 text-blue-600" />
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="w-4 h-4 text-purple-600" />
                      <span>Available Worldwide</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-green-600" />
                      <span>Satisfaction Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Social Info */}
            <div 
              ref={infoRef}
              id="info"
              className={`space-y-8 transition-all duration-700 transform ${
                visibleSections.info ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              {/* Map Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 pb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                  <p className="text-gray-600 text-sm mb-4">Visit our flagship store in the heart of NYC</p>
                </div>
                <div className="relative h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.713129379330185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7742f%3A0x7b6d456c4ae91de!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="text-blue-100 mb-6">Follow us on social media for exclusive deals and updates</p>
                
                <div className="flex gap-3 mb-8">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className={`p-3 bg-white/20 rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">10K+ Followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">Join Community</span>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Answers</h3>
                <div className="space-y-3">
                  {['Shipping Information', 'Return Policy', 'Payment Methods', 'Size Guide'].map((item, idx) => (
                    <button
                      key={idx}
                      className="flex items-center justify-between w-full text-left text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <span>{item}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

// Helper component for ChevronRight icon (if not imported)
const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Contact;