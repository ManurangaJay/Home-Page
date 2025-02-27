import React from "react";
import Footer from "../components/Fotter";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-6">
        At our company, we value your privacy. This privacy policy outlines how
        we collect, use, and protect your personal information. By using our
        website, you agree to the terms of this privacy policy.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="text-lg mb-4">
        We collect various types of personal information to enhance your
        experience on our website, process orders, and provide customer support.
        The information we collect includes:
      </p>
      <ul className="list-disc ml-6 mb-4 text-lg">
        <li>Personal identification information (name, email, phone number)</li>
        <li>Account information (username, password, preferences)</li>
        <li>Billing and shipping information (credit card details, address)</li>
        <li>Usage data (browsing activity, device information, IP address)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        2. How We Use Your Information
      </h2>
      <p className="text-lg mb-4">
        We use the collected information for the following purposes:
      </p>
      <ul className="list-disc ml-6 mb-4 text-lg">
        <li>To process your orders and provide services</li>
        <li>To personalize your experience and improve our website</li>
        <li>To send promotional emails and newsletters (if you opt-in)</li>
        <li>To respond to customer service requests and inquiries</li>
        <li>To ensure the security of our website and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. Data Retention</h2>
      <p className="text-lg mb-4">
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected, unless a longer retention
        period is required or permitted by law. If you request the deletion of
        your data, we will comply as soon as possible, subject to any legal
        obligations we may have.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        4. Sharing Your Information
      </h2>
      <p className="text-lg mb-4">
        We do not sell or rent your personal information to third parties. We
        may share your information with trusted partners to assist in the
        operation of our website or to perform services on our behalf. These
        third parties are obligated to keep your information confidential and
        secure.
      </p>
      <ul className="list-disc ml-6 mb-4 text-lg">
        <li>Payment processors (for processing transactions)</li>
        <li>Shipping carriers (for delivering products)</li>
        <li>
          Service providers (for customer support, website maintenance, etc.)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        5. Cookies and Tracking Technologies
      </h2>
      <p className="text-lg mb-4">
        Our website uses cookies and other tracking technologies to enhance user
        experience. Cookies are small text files stored on your device that
        allow us to recognize you and remember your preferences. You can control
        your cookie settings through your browser, but disabling cookies may
        affect the functionality of our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        6. Your Data Protection Rights
      </h2>
      <p className="text-lg mb-4">
        You have the right to access, correct, or delete your personal
        information. If you wish to exercise any of these rights or have
        concerns about how your data is being used, please contact us using the
        information provided below.
      </p>
      <ul className="list-disc ml-6 mb-4 text-lg">
        <li>Access: Request a copy of your personal data</li>
        <li>Rectification: Correct any inaccuracies in your data</li>
        <li>Deletion: Request the deletion of your personal data</li>
        <li>Restriction: Limit the processing of your data</li>
        <li>
          Objection: Object to the processing of your data for certain purposes
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
      <p className="text-lg mb-4">
        We take reasonable measures to protect your personal data from
        unauthorized access, alteration, disclosure, or destruction. However, no
        method of data transmission or storage is 100% secure, and we cannot
        guarantee the absolute security of your data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        8. Changes to This Privacy Policy
      </h2>
      <p className="text-lg mb-4">
        We may update this privacy policy from time to time to reflect changes
        in our practices or for other operational, legal, or regulatory reasons.
        We encourage you to review this policy periodically for any updates.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about this privacy policy or how we handle
        your personal data, please contact us at:
      </p>
      <p className="text-lg mb-4">
        Email:{" "}
        <a
          href="mailto:privacy@ourcompany.com"
          className="text-blue-600 hover:underline"
        >
          privacy@ourcompany.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
