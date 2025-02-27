import React from "react";
import Footer from "../components/Fotter";

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-4">Careers</h1>

      <p className="text-lg mb-6">
        Join our team! We are always looking for passionate individuals to
        contribute to our growing company. Check out our open positions and
        apply today.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Open Positions</h2>
        <ul className="list-disc pl-6 text-lg">
          <li>
            <strong>Frontend Developer</strong> - We are looking for a talented
            Frontend Developer to join our team. You will be responsible for
            building responsive, user-friendly websites and applications.
            <a href="/apply" className="text-blue-600 hover:underline">
              Apply Now
            </a>
          </li>
          <li>
            <strong>Backend Developer</strong> - We are looking for a skilled
            Backend Developer to work on server-side logic and maintain
            databases. You will collaborate with the frontend team to build
            scalable and efficient applications.
            <a href="/apply" className="text-blue-600 hover:underline">
              Apply Now
            </a>
          </li>
          <li>
            <strong>UI/UX Designer</strong> - We are looking for a creative
            UI/UX Designer to design and improve the user experience of our
            applications. If you have a passion for design and user-centered
            solutions, this is the role for you.
            <a href="/apply" className="text-blue-600 hover:underline">
              Apply Now
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <p className="text-lg mb-4">
          We believe that our employees are our greatest asset. By joining our
          team, you'll be part of a dynamic and innovative company with a
          collaborative work culture.
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Competitive Salary and Benefits Package</li>
          <li>Flexible Work Hours and Remote Work Opportunities</li>
          <li>Opportunities for Career Growth and Development</li>
          <li>A Supportive and Collaborative Team Environment</li>
          <li>Health and Wellness Benefits</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <p className="text-lg mb-4">
          If you're passionate about making an impact and joining a team of
          innovators, we'd love to hear from you! To apply, please send us your
          resume and cover letter to{" "}
          <a
            href="mailto:careers@ourcompany.com"
            className="text-blue-600 hover:underline"
          >
            careers@ourcompany.com
          </a>
          , and specify the position you’re applying for in the subject line.
        </p>
        <p className="text-lg">
          We review applications on a rolling basis, so be sure to apply soon!
        </p>
      </section>
    </div>
  );
};

export default Careers;
