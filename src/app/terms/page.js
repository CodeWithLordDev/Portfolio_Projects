export const metadata = {
  title: "Terms & Conditions | CodewithLord",
};
import BackgroundGrid from "@/components/BackgroundGrid";
export default function Terms() {
  return (
    <main className=" mx-auto p-6 relative min-h-screen bg-gray-950 text-white ">
      <BackgroundGrid />
      <div className="relative z-10">
        <div className="mt-18 max-w-4xl container mx-auto bg-[#0c0821a3] p-[20px] rounded-md">
          <h1 className="text-3xl font-bold text-center mb-4">Terms & Conditions</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mt-4">
            Welcome to <strong>CodewithLord</strong>. By accessing or using this
            website, you agree to the following Terms & Conditions. Please read
            them carefully.
          </p>

          {/* ACCEPTANCE */}
          <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>
            By using our website, you confirm that you have read, understood,
            and agreed to these Terms. If you do not agree, please do not use
            this website.
          </p>

          {/* USE OF WEBSITE */}
          <h2 className="text-xl font-semibold mt-6">2. Use of the Website</h2>
          <ul className="list-disc ml-6">
            <li>You must use this site only for lawful purposes.</li>
            <li>
              You may not attempt to hack, damage, or disrupt the website.
            </li>
            <li>You may not copy or republish content without permission.</li>
          </ul>

          {/* INTELLECTUAL PROPERTY */}
          <h2 className="text-xl font-semibold mt-6">
            3. Intellectual Property Rights
          </h2>
          <p>
            All content on this website—including text, tutorials, designs,
            images, logos, and code snippets—is owned by{" "}
            <strong>CodewithLord</strong>. Unauthorized copying, distribution,
            or modification is strictly prohibited.
          </p>

          {/* USER RESPONSIBILITIES */}
          <h2 className="text-xl font-semibold mt-6">
            4. User Responsibilities
          </h2>
          <ul className="list-disc ml-6">
            <li>Provide accurate information when contacting us.</li>
            <li>Not engage in malicious or harmful activities.</li>
            <li>Not misuse resources or tutorials for unethical purposes.</li>
          </ul>

          {/* THIRD-PARTY LINKS */}
          <h2 className="text-xl font-semibold mt-6">5. Third-Party Links</h2>
          <p>
            Our site may include links to external websites. We are not
            responsible for the content, policies, or actions of third-party
            sites.
          </p>

          {/* ADSENSE / AFFILIATE */}
          <h2 className="text-xl font-semibold mt-6">
            6. Advertisements & Affiliate Links
          </h2>
          <p>
            We use Google AdSense. Ads displayed may be personalized and
            controlled by Google. We may also include affiliate links that earn
            a small commission at no extra cost to you.
          </p>

          {/* LIMITATION OF LIABILITY */}
          <h2 className="text-xl font-semibold mt-6">
            7. Limitation of Liability
          </h2>
          <p>
            We do not guarantee that the website will always be available,
            error-free, or completely secure.
            <br />
            <strong>
              CodewithLord is not responsible for any losses, damages, or errors
              resulting from using the site.
            </strong>
          </p>

          {/* TERMINATION */}
          <h2 className="text-xl font-semibold mt-6">8. Termination</h2>
          <p>
            We reserve the right to deactivate, suspend, or restrict access to
            the website at any time without prior notice.
          </p>

          {/* CHANGES */}
          <h2 className="text-xl font-semibold mt-6">9. Changes to Terms</h2>
          <p>
            We may update these Terms occasionally. Continued use of the site
            means you accept the updated Terms.
          </p>

          {/* CONTACT */}
          <h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
          <p>
            For questions regarding these Terms, contact:
            <strong>ayushtemkar2@gmail.com</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
