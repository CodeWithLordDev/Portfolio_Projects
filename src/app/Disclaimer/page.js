export const metadata = {
  title: "Disclaimer | CodewithLord",
};
import BackgroundGrid from "@/components/BackgroundGrid";

export default function Disclaimer() {
  return (
    <main className=" mx-auto p-6 relative min-h-screen bg-gray-950 text-white">
      <BackgroundGrid />
      <div className="relative z-10 ">
        <div className="mt-18 max-w-4xl container mx-auto bg-[#0c0821a3] p-[20px] rounded-md">
          <h1 className="text-3xl text-center font-bold mb-4">Disclaimer</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mt-4">
            The information provided on <strong>CodewithLord</strong> is for
            educational and informational purposes only. By using this site, you
            acknowledge and agree to the terms of this Disclaimer.
          </p>

          {/* EDUCATIONAL PURPOSE */}
          <h2 className="text-xl font-semibold mt-6">1. Educational Content</h2>
          <p>
            All tutorials, guides, coding examples, and tips are provided for
            learning and improving skills.
            <strong>
              We do not guarantee results or performance of any code or method
              described.
            </strong>
          </p>

          {/* PROFESSIONAL ADVICE */}
          <h2 className="text-xl font-semibold mt-6">
            2. No Professional or Legal Advice
          </h2>
          <p>
            The content on this website does not constitute professional,
            financial, legal, or technical advice. Always consult a qualified
            expert if you need professional assistance.
          </p>

          {/* ERRORS */}
          <h2 className="text-xl font-semibold mt-6">
            3. Accuracy of Information
          </h2>
          <p>
            While we try our best to provide accurate information,
            <strong>
              we do not guarantee completeness, reliability, or accuracy of the
              content.
            </strong>
          </p>

          {/* EXTERNAL LINKS */}
          <h2 className="text-xl font-semibold mt-6">4. External Links</h2>
          <p>
            This website may contain links to third-party websites. We have no
            control over the content or policies of external sites and are not
            responsible for any damages or issues that may arise from using
            them.
          </p>

          {/* ADSENSE */}
          <h2 className="text-xl font-semibold mt-6">5. Advertisements</h2>
          <p>
            We use Google AdSense for displaying ads. Google may personalize ads
            using cookies. We do not control the ads shown or any transactions
            between you and advertisers.
          </p>

          {/* LIABILITY */}
          <h2 className="text-xl font-semibold mt-6">
            6. Limitation of Liability
          </h2>
          <p>
            <strong>CodewithLord is not responsible for:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Any errors or omissions in content</li>
            <li>Any damages resulting from using the site</li>
            <li>Any issues caused by third-party tools, scripts, or code</li>
          </ul>

          {/* CONSENT */}
          <h2 className="text-xl font-semibold mt-6">7. Consent</h2>
          <p>
            By using our website, you agree to this Disclaimer and its terms.
          </p>

          {/* UPDATES */}
          <h2 className="text-xl font-semibold mt-6">
            8. Updates to This Disclaimer
          </h2>
          <p>
            We may update this Disclaimer from time to time. Any changes will be
            posted on this page.
          </p>

          {/* CONTACT */}
          <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
          <p>
            For any questions regarding this Disclaimer, contact us at:
            <br />
            <strong>ayushtemkar2@gmail.com</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
