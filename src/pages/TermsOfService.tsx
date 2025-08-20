import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
            <p className="text-center text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using Jobnest ("the Platform", "our Service"), you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by these terms, you are not authorized to use or access the platform.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
              <div className="space-y-3">
                <p>Jobnest is a comprehensive job search and career development platform that provides:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Job search and application tracking services</li>
                  <li>Career guidance and interview preparation resources</li>
                  <li>Professional networking opportunities</li>
                  <li>Resume building and optimization tools</li>
                  <li>Industry insights and career advice</li>
                  <li>Employer and recruiter matching services</li>
                </ul>
                <p>Our platform connects job seekers with employers and provides valuable career development resources to help users advance their professional goals.</p>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">3. User Registration and Account</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Account Creation</h3>
                  <p>To access certain features of our platform, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Account Security</h3>
                  <p>You must notify us immediately of any unauthorized use of your account or any security breach. We are not liable for any loss or damage arising from your failure to comply with these security obligations.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Account Termination</h3>
                  <p>We reserve the right to suspend or terminate your account at our discretion if you violate these terms or engage in activities that harm other users or our platform.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">4. User Conduct and Responsibilities</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Provide false, misleading, or inaccurate information</li>
                    <li>Impersonate another person or entity</li>
                    <li>Post spam, harassment, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the operation of our platform</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Use automated tools to scrape or collect data from our platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Content Standards</h3>
                  <p>All content you submit must be professional, relevant, and appropriate for a job search platform. We reserve the right to remove any content that violates our community standards.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Job Applications and Employment</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Application Process</h3>
                  <p>Jobnest facilitates connections between job seekers and employers but does not guarantee employment outcomes. The actual hiring process, employment terms, and conditions are solely between you and the employer.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Employer Verification</h3>
                  <p>While we make reasonable efforts to verify employer legitimacy, we cannot guarantee the accuracy of all job postings or employer information. Users should exercise due diligence when engaging with potential employers.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Employment Relationships</h3>
                  <p>Jobnest is not a party to any employment relationship formed through our platform and has no responsibility for employment terms, workplace conditions, or disputes between users and employers.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Intellectual Property Rights</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Platform Content</h3>
                  <p>All content on Jobnest, including text, graphics, logos, images, software, and design elements, is owned by Jobnest or our licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">User Content</h3>
                  <p>You retain ownership of content you create and share on our platform. However, by posting content, you grant Jobnest a non-exclusive, worldwide, royalty-free license to use, modify, and display your content for platform operations and improvement.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Respect for Third-Party Rights</h3>
                  <p>You must respect the intellectual property rights of others and may not post content that infringes on copyrights, trademarks, or other proprietary rights.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">7. Privacy and Data Protection</h2>
              <p>Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated by reference into these terms. By using our platform, you consent to the collection and use of your information as described in our Privacy Policy.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">8. Advertising and Third-Party Content</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Google AdSense and Advertising</h3>
                  <p>Our platform displays advertisements through Google AdSense and other advertising partners. These ads are clearly marked and separated from our content and navigation elements to ensure transparency and avoid confusion.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Third-Party Links</h3>
                  <p>Our platform may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or terms of service of these third-party sites.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Sponsored Content</h3>
                  <p>Any sponsored content or paid promotions on our platform are clearly labeled as such to maintain transparency with our users.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">9. Disclaimers and Limitation of Liability</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Service Availability</h3>
                  <p>While we strive to maintain continuous service availability, we do not guarantee that our platform will be available at all times or free from technical issues. We may perform maintenance or updates that temporarily affect service availability.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Content Accuracy</h3>
                  <p>We make reasonable efforts to ensure the accuracy of information on our platform, but we do not warrant the completeness, accuracy, or reliability of any content, including job postings and career advice.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Limitation of Liability</h3>
                  <p>To the maximum extent permitted by law, Jobnest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our platform or services.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">10. Payment Terms</h2>
              <div className="space-y-3">
                <p>Jobnest offers both free and premium services. For premium features:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment is required in advance for premium services</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change pricing with 30 days' notice</li>
                  <li>Failure to pay may result in service suspension</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">11. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will notify users of material changes via email or platform notification. Continued use of our platform after changes constitutes acceptance of the new terms. If you disagree with modifications, you may terminate your account.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">12. Termination</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">User Termination</h3>
                  <p>You may terminate your account at any time by following the account deletion process in your profile settings. Upon termination, your access to premium features will cease immediately.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Platform Termination</h3>
                  <p>We may terminate or suspend your access immediately, without prior notice, for violations of these terms or for any reason at our discretion.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Effect of Termination</h3>
                  <p>Upon termination, your right to use the platform ceases immediately, but certain provisions of these terms will survive termination, including intellectual property rights and limitation of liability clauses.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">13. Governing Law and Dispute Resolution</h2>
              <div className="space-y-3">
                <p>These terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles. Any disputes arising from these terms or your use of our platform will be resolved through binding arbitration, except for claims that may be brought in small claims court.</p>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">14. Contact Information</h2>
              <div className="space-y-2">
                <p>For questions about these terms or our services, please contact us:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@jobnest.com</p>
                  <p><strong>Address:</strong> Jobnest Legal Team, 123 Career Street, Job City, JC 12345</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
