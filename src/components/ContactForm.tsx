'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface FieldErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    website_hp: '', // honeypot
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear individual field error on change
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMobile = formData.mobile.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errors.name = 'Full name is required.';
    } else if (trimmedName.length < 2) {
      errors.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please provide a valid email address (e.g. name@example.com).';
    }

    // Mobile is optional, but if provided, validate format
    if (trimmedMobile && !/^[\d\s+\-().]{7,20}$/.test(trimmedMobile)) {
      errors.mobile = 'Please provide a valid phone number (or leave blank).';
    }

    if (!trimmedMessage) {
      errors.message = 'Please enter your message.';
    } else if (trimmedMessage.length < 5) {
      errors.message = 'Message must be at least 5 characters.';
    }

    setFieldErrors(errors);

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      setStatus('error');
      setErrorMessage('Please fix the highlighted fields below and try again.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Perform validation
    const isValid = validateForm();
    if (!isValid) {
      console.warn('[Contact Form] Validation failed. Submission aborted.');
      return;
    }

    // Honeypot check (client-side guard)
    if (formData.website_hp.trim() !== '') {
      console.warn('[Contact Form] Honeypot triggered. Silently dropping submission.');
      setStatus('success');
      return;
    }

    setStatus('submitting');
    console.log('[Contact Form] Submitting inquiry via Web3Forms...');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

    if (!accessKey) {
      console.error('[Contact Form] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set.');
      setStatus('error');
      setErrorMessage(
        `The contact form is not yet configured. Please email us directly at ${siteConfig.contact.supportEmail}.`
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Contact Form Submission — AfterHues Studio',
          from_name: 'AfterHues Studio Website',
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.mobile.trim() || 'Not provided',
          message: formData.message.trim(),
          // Botcheck must be false — Web3Forms honeypot
          botcheck: '',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        console.log('[Contact Form] Submission succeeded:', data);
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
          website_hp: '',
        });
        setFieldErrors({});
      } else {
        console.error('[Contact Form] Web3Forms error response:', response.status, data);
        setStatus('error');
        setErrorMessage(
          data.message || 'Unable to send your message right now. Please try again.'
        );
      }
    } catch (err) {
      console.error('[Contact Form] Network error while submitting form:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to send your message right now. Please check your network connection and try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-champagne-300 p-8 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mb-4">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-ink">Thank You for Reaching Out</h3>
        <p className="mt-2 text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
          Thank you for contacting AfterHues Studio. Your message has been sent successfully.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setErrorMessage('');
            setFieldErrors({});
          }}
          className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-burgundy text-ivory hover:bg-burgundy-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-ivory-300 p-6 sm:p-8 shadow-sm space-y-5"
    >
      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave this field blank</label>
        <input
          type="text"
          id="website_hp"
          name="website_hp"
          value={formData.website_hp}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Error alert banner */}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5 leading-relaxed"
        >
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5"
        >
          Full Name <span className="text-burgundy">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Ananya Sharma"
          disabled={status === 'submitting'}
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-ink transition-all disabled:opacity-50 ${
            fieldErrors.name
              ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-ivory-300 bg-ivory-50/50 focus:bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy'
          }`}
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <span>{fieldErrors.name}</span>
          </p>
        )}
      </div>

      {/* Email & Mobile Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5"
          >
            Email Address <span className="text-burgundy">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            disabled={status === 'submitting'}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-ink transition-all disabled:opacity-50 ${
              fieldErrors.email
                ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-ivory-300 bg-ivory-50/50 focus:bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy'
            }`}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <span>{fieldErrors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="mobile"
            className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5"
          >
            Mobile Number <span className="text-ink-muted font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            disabled={status === 'submitting'}
            aria-invalid={!!fieldErrors.mobile}
            aria-describedby={fieldErrors.mobile ? 'mobile-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-ink transition-all disabled:opacity-50 ${
              fieldErrors.mobile
                ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-ivory-300 bg-ivory-50/50 focus:bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy'
            }`}
          />
          {fieldErrors.mobile && (
            <p id="mobile-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <span>{fieldErrors.mobile}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5"
        >
          Your Message <span className="text-burgundy">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={1000}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about the scent, collection, or question you have in mind..."
          disabled={status === 'submitting'}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-ink transition-all resize-y disabled:opacity-50 ${
            fieldErrors.message
              ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-ivory-300 bg-ivory-50/50 focus:bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy'
          }`}
        />
        <div className="mt-1 flex items-center justify-between text-[11px] text-ink-muted">
          {fieldErrors.message ? (
            <span id="message-error" className="text-xs text-red-600">
              {fieldErrors.message}
            </span>
          ) : (
            <span />
          )}
          <span>{formData.message.length}/1000 characters</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 px-6 rounded-full font-serif font-semibold text-sm tracking-wider uppercase bg-burgundy text-ivory hover:bg-burgundy-600 active:bg-burgundy-800 transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-ink-muted leading-relaxed">
        We respect your privacy. Inquiries are handled according to our{' '}
        <a href="/privacy-policy" className="underline hover:text-burgundy">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};
