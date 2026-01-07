import { Container } from '@/components/ui/Container';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect information about you in various ways when you use our website and services. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Financial information (tax documents, income details, etc.)</li>
                <li>Business information (for business clients)</li>
                <li>Information about your interactions with our website</li>
              </ul>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of information collection methods and purposes]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Providing and maintaining our tax consulting services</li>
                <li>Communicating with you about your account and services</li>
                <li>Improving our services and website functionality</li>
                <li>Complying with legal obligations</li>
              </ul>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of how collected information is used, legal basis for processing, and legitimate interests]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>With your consent</li>
                <li>For legal compliance</li>
                <li>With service providers who assist us</li>
                <li>In connection with business transfers</li>
              </ul>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of when and with whom information is shared, including third-party service providers and legal requirements]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of security measures, encryption methods, access controls, and security protocols implemented to protect user data]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of how users can exercise these rights and the process for making requests]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of data retention periods for different types of information and legal requirements]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We may use cookies and similar tracking technologies to enhance your experience on our website.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of cookie usage, types of cookies, how to manage preferences, and tracking technologies used]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services for analytics, payment processing, and other business functions.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed list of third-party services used, their privacy policies, and the purposes for which they are used]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">9. International Transfers</h2>
              <p className="text-gray-700 mb-4">
                If you are located outside the United States, please be aware that your information may be transferred to and processed in the United States.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of international data transfers, adequacy decisions, and safeguards in place]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of children's privacy policy, procedures for handling information from minors, and compliance with relevant laws]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of how changes are made, notification procedures, and effective dates of changes]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <address className="not-italic text-gray-700">
                <p className="mb-2">TaxFirm</p>
                <p className="mb-2">123 Tax Avenue</p>
                <p className="mb-2">Financial District, NY 10001</p>
                <p className="mb-2">Email: privacy@taxfirm.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
              <p className="text-gray-700 mt-4">
                [PLACEHOLDER: Additional contact information, data protection officer contact details, and regulatory authority contact information]
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}