// pages/faqs.tsx
import React from "react";
import Footer from "../components/Fotter";

const FAQs: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <ul className="space-y-6 text-lg">
        <li>
          <strong>What is our mission?</strong>
          <p>
            Our mission is to provide high-quality products with exceptional
            customer service. We strive to meet the needs of our customers by
            offering innovative solutions, reliable products, and personalized
            support.
          </p>
        </li>
        <li>
          <strong>How can I contact support?</strong>
          <p>
            You can contact our support team through the contact form on our
            website. Alternatively, you can reach us via email at{" "}
            <a
              href="mailto:support@ourcompany.com"
              className="text-blue-600 hover:underline"
            >
              support@ourcompany.com
            </a>{" "}
            or call our support hotline at 1-800-123-4567.
          </p>
        </li>
        <li>
          <strong>Where are your products available?</strong>
          <p>
            We ship worldwide! Please refer to our shipping policy for details
            on delivery times, regions, and costs. We offer standard, expedited,
            and international shipping options.
          </p>
        </li>
        <li>
          <strong>How do I track my order?</strong>
          <p>
            After your order is shipped, you will receive an email with a
            tracking number. You can use this number to track your package on
            the carrier's website or by logging into your account on our
            website.
          </p>
        </li>
        <li>
          <strong>What is your return policy?</strong>
          <p>
            We offer a 30-day return policy on most products. If you're not
            completely satisfied with your purchase, you can return the item in
            its original condition for a full refund. Please visit our{" "}
            <a href="/returns" className="text-blue-600 hover:underline">
              Returns Policy
            </a>{" "}
            page for more information.
          </p>
        </li>
        <li>
          <strong>Do you offer gift cards?</strong>
          <p>
            Yes, we offer gift cards in various denominations. They can be used
            for any purchase on our website. Gift cards are available for
            purchase{" "}
            <a href="/gift-cards" className="text-blue-600 hover:underline">
              here
            </a>
            .
          </p>
        </li>
        <li>
          <strong>How can I update my account information?</strong>
          <p>
            To update your account information, simply log in to your account,
            go to your profile settings, and edit your details. You can update
            your email address, password, shipping address, and payment methods.
          </p>
        </li>
        <li>
          <strong>Do you offer any discounts or promotions?</strong>
          <p>
            Yes, we regularly offer promotions and discounts on our products.
            Sign up for our newsletter to receive updates on upcoming sales and
            special offers. You can also follow us on social media to stay
            informed about exclusive deals.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FAQs;
