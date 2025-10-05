import React, { useState, useEffect } from 'react';
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

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    source: 'get_started_popup'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        source: 'get_started_popup'
      });
      setSubmitStatus(null);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when popup is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

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
        message: '',
        source: 'get_started_popup'
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-10 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-t-3xl">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-rocket text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-2">Get Started Today!</h2>
            <p className="text-white/90 text-lg">
              Ready to transform your farming? Let's discuss your needs and find the perfect solution.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl animate-fade-in">
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-3 text-xl"></i>
                <div>
                  <p className="font-semibold">Success! We've received your inquiry.</p>
                  <p className="text-sm">Our team will contact you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl animate-fade-in">
              <div className="flex items-center">
                <i className="fas fa-exclamation-circle mr-3 text-xl"></i>
                <div>
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm">Please try again or contact us directly at genovateinnseeds@gmail.com</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="Enter your first name" 
                  required 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Enter your last name" 
                  required 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
            </div>
            
            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Enter your phone number" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
            </div>

            {/* Company & Subject */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company/Farm Name
                </label>
                <input 
                  type="text" 
                  name="company"
                  placeholder="Enter your company or farm name" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                >
                  <option value="">Select a topic</option>
                  <option value="seed_inquiry">Seed Inquiry</option>
                  <option value="bulk_order">Bulk Order</option>
                  <option value="technical_support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general_inquiry">General Inquiry</option>
                </select>
              </div>
            </div>
            
            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tell us about your requirements *
              </label>
              <textarea 
                name="message"
                placeholder="Describe your farming needs, crop requirements, or any specific questions you have..." 
                required 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none transition-all duration-300 bg-gray-50 focus:bg-white"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-3"></i>
                  Sending Your Request...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-3"></i>
                  Send My Request
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start space-x-3">
              <i className="fas fa-info-circle text-blue-600 mt-1"></i>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">What happens next?</p>
                <ul className="space-y-1 text-blue-700">
                  <li>• Our agricultural expert will review your requirements</li>
                  <li>• We'll contact you within 24 hours to discuss solutions</li>
                  <li>• Get personalized recommendations for your farming needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPopup;
