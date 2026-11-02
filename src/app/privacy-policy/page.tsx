import React from 'react';
import type { Metadata } from 'next';
import { PolicyLayout } from '@/components/PolicyLayout';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how AfterHues Studio collects, uses, and safeguards personal information when you browse our website.',
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How AfterHues Studio respects and safeguards your personal information."
      lastUpdated={siteConfig.policies.lastUpdated}
    >
      <div className="space-y-8">
        <div>
          <p className="leading-relaxed">
            This Privacy Policy describes how <strong>AfterHues Studio</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, discloses, and safeguards your information when you visit our website.
          </p>
          <p className="mt-3 leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information. By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
          </p>
          <p className="mt-3 leading-relaxed">
            This policy applies to all visitors, users, and customers who access our website.
          </p>
        </div>

        <hr className="border-ivory-300" />

        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            1. Information We Collect
          </h2>

          <h3 className="font-serif text-base font-semibold text-ink mt-4 mb-2">
            A. Personal Information
          </h3>
          <p className="leading-relaxed">
            We may collect personal information that you voluntarily submit when you interact with our website, such as:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Contact / Mobile Number</li>
            <li>Information voluntarily submitted via our contact forms or direct email</li>
            <li>Customer service inquiries and follow-up communications</li>
          </ul>
          <p className="mt-2 text-xs text-ink-muted">
            &ldquo;Personal information&rdquo; refers to any data that identifies or can reasonably be used to identify an individual.
          </p>

          <h3 className="font-serif text-base font-semibold text-ink mt-6 mb-2">
            B. Payment Information
          </h3>
          <p className="leading-relaxed">
            Purchases initiated through our website are completed directly on our official{' '}
            <a
              href={siteConfig.amazonStorefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy underline hover:text-burgundy-700"
            >
              Amazon Storefront
            </a>
            . Our website does not process credit cards, debit cards, UPI, net banking, or store payment credentials on our servers. All transaction data is processed securely by Amazon in accordance with Amazon&apos;s privacy and security standards.
          </p>

          <h3 className="font-serif text-base font-semibold text-ink mt-6 mb-2">
            C. Automatically Collected Technical Information
          </h3>
          <p className="leading-relaxed">
            When you browse our website, basic technical data may be automatically collected by hosting and security providers, including:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information and operating system</li>
            <li>Date and time of visit</li>
            <li>Pages viewed and referring URL</li>
          </ul>
          <p className="mt-2 text-xs text-ink-muted">
            This technical information is utilized solely for site stability, threat mitigation, and ensuring responsive performance across devices.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            2. Use of Information
          </h2>
          <p className="leading-relaxed">
            The information collected through our website is used for legitimate business purposes, including:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Responding to fragrance inquiries and customer service questions</li>
            <li>Providing product recommendations and assistance</li>
            <li>Protecting the website against unauthorized access and malicious traffic</li>
            <li>Improving site navigation, layout, and user experience</li>
            <li>Sending marketing communications only where explicit opt-in consent is provided</li>
          </ul>
          <p className="mt-3 font-semibold text-ink text-xs">
            We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 3 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            3. Cookies Policy
          </h2>
          <p className="leading-relaxed">
            Our website uses standard essential cookies and browser storage technologies to maintain site performance, security headers, and user interface preferences. We do not deploy invasive third-party cross-site behavioral tracking cookies.
          </p>
          <p className="mt-2 leading-relaxed">
            You may choose to disable cookies via your browser settings; however, certain site features may function with diminished performance.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 4 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            4. Data Security
          </h2>
          <p className="leading-relaxed">
            AfterHues Studio implements appropriate technical and organizational safeguards, including SSL/TLS encryption across all routes, secure hosting environments, and restricted access to communications. While we employ rigorous precautions, no digital transmission over the internet can be guaranteed to be 100% impenetrable.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 5 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            5. Third-Party Services
          </h2>
          <p className="leading-relaxed">
            Our site links directly to our official Amazon Storefront for order transactions and may rely on trusted hosting infrastructure, security firewalls, and email delivery providers. These providers only access data necessary to perform their respective roles under strict confidentiality obligations.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 6 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            6. User Rights
          </h2>
          <p className="leading-relaxed">
            Subject to applicable laws, visitors have the right to request access to personal information submitted through our website, request corrections of outdated data, or request deletion of contact records. Inquiries can be submitted directly using our contact information below.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 7 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            7. Data Retention
          </h2>
          <p className="leading-relaxed">
            Personal data submitted via our contact forms is retained only for the duration necessary to satisfy customer service inquiries, fulfill legitimate business records, and meet applicable legal compliance standards.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 8 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            8. Children&apos;s Privacy
          </h2>
          <p className="leading-relaxed">
            Our website and candle products are not intended for individuals under the age of 18. We do not knowingly solicit or collect personal information from minors.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 9 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            9. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            AfterHues Studio reserves the right to amend or update this Privacy Policy periodically. Any revisions will be reflected on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage visitors to review this page periodically.
          </p>
        </section>

        <hr className="border-ivory-300" />

        {/* Section 10 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-ink mb-3">
            10. Contact Information
          </h2>
          <p className="leading-relaxed">
            For questions or requests concerning this Privacy Policy, please contact us:
          </p>
          <div className="mt-4 p-5 rounded-xl bg-ivory-100 border border-ivory-200 text-xs sm:text-sm space-y-2">
            <p><strong>Trade Name:</strong> {siteConfig.legalName}</p>
            <p><strong>Telephone:</strong> +91 {siteConfig.contact.phone}</p>
            <p><strong>General Inquiries:</strong> {siteConfig.contact.email}</p>
            <p><strong>Customer Care:</strong> {siteConfig.contact.supportEmail}</p>
            <p><strong>Physical Address:</strong> {siteConfig.contact.address}</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
