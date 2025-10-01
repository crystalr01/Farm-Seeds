import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY62kVU4FDZ1w_PAD4-gdWIgInLErguRY",
  authDomain: "dazzle-b3038.firebaseapp.com",
  databaseURL: "https://dazzle-b3038-default-rtdb.firebaseio.com",
  projectId: "dazzle-b3038",
  storageBucket: "dazzle-b3038.appspot.com",
  messagingSenderId: "737090504508",
  appId: "1:737090504508:web:c37f823d0991831ce5c039",
  measurementId: "G-CMP0T7M4XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add data to Firebase Realtime Database
      const enquiriesRef = ref(database, 'Enquiries');
      await push(enquiriesRef, {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new',
        submittedAt: new Date().toISOString()
      });

      setSubmitStatus('success');
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        company: '',
        subject: '',
        message: '' 
      });
      
      // Show success message
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-crop-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
              📞 Get In Touch 📧
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Contact
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sagi Seeds
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your farming experience? Get in touch with our seed production experts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h3>
                <p className="text-gray-600 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      <span>Error sending message. Please try again or contact us directly.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        placeholder="Enter your first name" 
                        required 
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        placeholder="Enter your last name" 
                        required 
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email address" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Enter your company name" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="Enter message subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      name="message"
                      placeholder="Tell us about your requirements..." 
                      required 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office & Warehouse Address */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl">
                    <i className="fas fa-building text-white text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Office & Warehouse</h4>
                    <div className="text-gray-600 leading-relaxed">
                      <p className="font-semibold text-green-600 mb-2">Sagi Seeds Pvt. Ltd.</p>
                      <p># 12-57/1/10,</p>
                      <p>Medchal Industrial Area,</p>
                      <p>Near Fortune Foam,</p>
                      <p>Medchal, Hyderabad (501401)</p>
                      <p>Telangana, India.</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <i className="fas fa-phone text-green-600 mr-3"></i>
                        <a href="tel:+916303828286" className="text-gray-700 hover:text-green-600 font-semibold">+91 - 63038 28286</a>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-green-600 mr-3"></i>
                        <a href="mailto:admin@sagiseeds.com" className="text-gray-700 hover:text-green-600 font-semibold">admin@sagiseeds.com</a>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-globe text-green-600 mr-3"></i>
                        <a href="https://www.sagiseeds.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 font-semibold">www.sagiseeds.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl">
                    <i className="fas fa-landmark text-white text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Registered Office</h4>
                    <div className="text-gray-600 leading-relaxed">
                      <p className="font-semibold text-blue-600 mb-2">Sagi Seeds Pvt. Ltd.</p>
                      <p>Plat No.101, Orchid Fortune Icon,</p>
                      <p>8-2-603, Road No.10 Banjarahills,</p>
                      <p>Hyderabad, Telangana - 500034,</p>
                      <p>India</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <i className="fas fa-phone text-blue-600 mr-3"></i>
                        <a href="tel:+918008156743" className="text-gray-700 hover:text-blue-600 font-semibold">+91 - 80081 56743</a>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-blue-600 mr-3"></i>
                        <a href="mailto:sagiseeds@sagiseeds.com" className="text-gray-700 hover:text-blue-600 font-semibold">sagiseeds@sagiseeds.com</a>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-globe text-blue-600 mr-3"></i>
                        <a href="https://www.sagiseeds.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-semibold">www.sagiseeds.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-4 rounded-2xl">
                    <i className="fas fa-clock text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-4">Business Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white/10 rounded-lg">
                      <p className="text-sm">
                        <i className="fas fa-info-circle mr-2"></i>
                        For urgent inquiries, please call our 24/7 support line.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
