import React from "react";
import Footer from "../components/Fotter";

const About: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>

        <p className="text-lg mb-6">
          Welcome to our website! We are a company that specializes in providing
          high-quality products and services. Our mission is to deliver the best
          experience to our customers with a focus on innovation, quality, and
          customer satisfaction.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to bring you innovative solutions that meet the
            highest standards. We aim to create lasting value for our customers
            by delivering top-notch products and services while fostering a
            culture of continuous improvement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              Customer-Centric: We put the customer at the center of everything
              we do.
            </li>
            <li>
              Integrity: We adhere to the highest ethical standards in all our
              interactions.
            </li>
            <li>
              Innovation: We are committed to continuously improving and
              adapting to changing needs.
            </li>
            <li>
              Excellence: We strive to deliver outstanding quality in everything
              we do.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg">
            Founded in 2024, our company has grown from a small startup to a
            leader in the industry. Over the years, we have built a strong
            reputation for delivering reliable products and services to our
            customers across the globe. We are proud of our journey and the
            relationships we've formed with our clients and partners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-lg">
            Our team is composed of passionate individuals with diverse skill
            sets working together to drive innovation and excellence. Each
            member brings unique expertise to the table, contributing to our
            collective success.
          </p>
          <div className="flex space-x-6 mt-6">
            {/* Example team members */}
            <div className="text-center">
              <img
                src="/path-to-image.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-md mx-auto"
              />
              <h3 className="font-semibold mt-2">John Doe</h3>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="/path-to-image.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-md mx-auto"
              />
              <h3 className="font-semibold mt-2">Jane Smith</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
