import { Container } from '@/components/ui/Container';

export default function TermsAndConditionsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to TaxFirm. These terms and conditions outline the rules and regulations for the use of TaxFirm's website and services.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed introduction section explaining the purpose of the terms and conditions, scope of application, and acknowledgment of agreement]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Interpretation and Definitions</h2>
              <p className="text-gray-700 mb-4">
                The following interpretations and definitions apply to these Terms and Conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Client</strong>: refers to any individual or entity that uses our services</li>
                <li><strong>Services</strong>: refers to the tax consulting services provided by TaxFirm</li>
                <li><strong>Company</strong>: refers to TaxFirm and its affiliates</li>
                <li><strong>Website</strong>: refers to our online platform and all related services</li>
              </ul>
              <p className="text-gray-700">
                [PLACEHOLDER: Comprehensive definitions section with all terms used throughout the document]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">3. License to Use Website</h2>
              <p className="text-gray-700 mb-4">
                Unless otherwise stated, TaxFirm and its licensors own the intellectual property rights for all material on TaxFirm. All intellectual property rights are reserved.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of website usage rights, restrictions on use, and intellectual property ownership]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">4. User Representations and Warranties</h2>
              <p className="text-gray-700 mb-4">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>You have the legal capacity to enter into these terms</li>
                <li>You are not a minor in your jurisdiction of residence</li>
                <li>You will provide accurate and complete information</li>
                <li>You will maintain the security of your account credentials</li>
              </ul>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed user obligations, accuracy of information requirements, and legal capacity statements]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">
                You may not access or use the Website for any purpose other than that for which we make the Website available. The Website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Comprehensive list of prohibited activities, including but not limited to unauthorized access, data harvesting, and illegal activities]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Services Description</h2>
              <p className="text-gray-700 mb-4">
                TaxFirm provides professional tax consulting services including but not limited to tax preparation, planning, and advisory services.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed description of services offered, limitations of services, and professional standards maintained]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Professional Relationship and Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                The relationship between TaxFirm and clients is professional and advisory in nature. Both parties have specific responsibilities and obligations.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of professional relationship, client responsibilities, and firm obligations]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Fees and Payment</h2>
              <p className="text-gray-700 mb-4">
                Our fees for services are as agreed upon between TaxFirm and the client. Payment terms will be clearly communicated and agreed upon prior to service delivery.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of fee structure, payment terms, late payment penalties, and billing procedures]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Confidentiality and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                TaxFirm maintains strict confidentiality regarding all client information and implements appropriate security measures to protect sensitive data.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed explanation of confidentiality obligations, data protection measures, and compliance with privacy regulations]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by applicable law, in no event shall TaxFirm be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed limitation of liability clause with specific exclusions and legal limitations]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed governing law clause, jurisdiction, and dispute resolution procedures]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed termination clause, procedures, and consequences of termination]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Changes to These Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes through our website or other communication methods.
              </p>
              <p className="text-gray-700">
                [PLACEHOLDER: Detailed change procedures, notification methods, and effective dates for modifications]
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">14. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <address className="not-italic text-gray-700">
                <p className="mb-2">TaxFirm</p>
                <p className="mb-2">123 Tax Avenue</p>
                <p className="mb-2">Financial District, NY 10001</p>
                <p className="mb-2">Email: legal@taxfirm.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
              <p className="text-gray-700 mt-4">
                [PLACEHOLDER: Additional contact information, legal department contact details, and procedures for legal inquiries]
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}