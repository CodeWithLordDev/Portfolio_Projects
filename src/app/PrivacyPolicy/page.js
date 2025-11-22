export const metadata = {
  title: "Privacy Policy | CodewithLord",
};
import BackgroundGrid from "@/components/BackgroundGrid";
export default function PrivacyPolicy() {
  return (
    <main className=" mx-auto p-6 relative min-h-screen bg-gray-950 text-white  overflow-hidden">
      <BackgroundGrid />
      <div className="relative z-10 ">
        <div className="mt-18 max-w-4xl container mx-auto bg-[#0c0821a3] p-[20px] rounded-md">
          <h1 className="text-3xl text-center font-bold mb-4">Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mt-4">
            At <strong>CodewithLord</strong>, your privacy is extremely
            important to us. This Privacy Policy explains what data we collect,
            why we collect it, and how we protect your information when you use
            our website and services.
          </p>

          {/* INFORMATION WE COLLECT */}
          <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
          <p>We may collect the following types of data:</p>

          <h3 className="text-lg font-semibold mt-4">
            1. Personal Information
          </h3>
          <ul className="list-disc ml-6">
            <li>Name (only if submitted)</li>
            <li>Email address (for contact or form submissions)</li>
            <li>Any details you voluntarily provide</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">
            2. Technical Information
          </h3>
          <ul className="list-disc ml-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Visited pages and time spent on site</li>
            <li>Cookies & tracking data</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">3. Usage Data</h3>
          <ul className="list-disc ml-6">
            <li>Interaction with website features</li>
            <li>Click behavior</li>
            <li>Downloads and resource access</li>
          </ul>

          {/* HOW WE USE DATA */}
          <h2 className="text-xl font-semibold mt-6">
            How We Use Your Information
          </h2>
          <p>We use collected data to:</p>
          <ul className="list-disc ml-6">
            <li>Improve user experience and website performance</li>
            <li>Respond to your messages or inquiries</li>
            <li>Send updates or important notifications</li>
            <li>Analyze traffic and optimize content</li>
            <li>Prevent fraud and security risks</li>
          </ul>
          <p className="mt-2">
            We <strong>never sell</strong> your personal data.
          </p>

          {/* COOKIES */}
          <h2 className="text-xl font-semibold mt-6">Cookies</h2>
          <p>
            Cookies help us improve functionality, remember preferences, and
            analyze usage. You can disable cookies through your browser settings
            at any time.
          </p>

          {/* THIRD-PARTY SERVICES */}
          <h2 className="text-xl font-semibold mt-6">Third-Party Services</h2>
          <p>We use trusted third-party platforms such as:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Google Analytics</strong> (traffic analysis)
            </li>
            <li>
              <strong>Google AdSense</strong> (ad personalization)
            </li>
          </ul>
          <p className="mt-2">
            Google may use cookies, including DART cookies, to serve
            personalized ads. These services have their own privacy policies,
            which we recommend reviewing.
          </p>

          {/* DATA PROTECTION */}
          <h2 className="text-xl font-semibold mt-6">
            Data Protection & Security
          </h2>
          <p>
            We use security measures such as SSL encryption, limited access
            control, and regular malware scanning. However, no method of online
            data transmission is 100% secure.
          </p>

          {/* CHILDREN PRIVACY */}
          <h2 className="text-xl font-semibold mt-6">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website is not intended for children under 13. We do not
            knowingly collect personal information from anyone under this age.
          </p>

          {/* USER RIGHTS */}
          <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time</li>
          </ul>

          {/* CONSENT */}
          <h2 className="text-xl font-semibold mt-6">Your Consent</h2>
          <p>
            By using our website, you agree to this Privacy Policy and consent
            to the collection and use of information as described.
          </p>

          {/* POLICY UPDATES */}
          <h2 className="text-xl font-semibold mt-6">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. The updated version
            will be posted on this page with a revised date.
          </p>

          {/* CONTACT */}
          <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:{" "}
            <br />
            <strong>ayushtemkar2@gmail.com</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
