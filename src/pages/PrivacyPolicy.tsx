import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
            <p className="text-center text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Personal Information</h3>
                  <p>When you create an account on Jobnest, we collect information such as your name, email address, phone number, professional experience, education, skills, and career preferences. This information helps us provide personalized job recommendations and improve our services.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Usage Data</h3>
                  <p>We automatically collect information about how you interact with our platform, including your IP address, browser type, device information, pages visited, time spent on pages, and clicking patterns. This data helps us analyze user behavior and improve our platform.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Cookies and Tracking Technologies</h3>
                  <p>We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, analyze site usage, and deliver targeted advertisements. You can control cookie settings through your browser preferences.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our job search services</li>
                <li>To match you with relevant job opportunities</li>
                <li>To communicate with you about your account and our services</li>
                <li>To send you job alerts and recommendations</li>
                <li>To improve our platform and develop new features</li>
                <li>To prevent fraud and ensure platform security</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
                <li>To display relevant advertisements through Google AdSense and other advertising partners</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Information Sharing and Disclosure</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">With Employers</h3>
                  <p>When you apply for a job, we share your profile information with the employer or recruiting agency. You have control over what information is included in your profile and can adjust privacy settings accordingly.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Service Providers</h3>
                  <p>We work with trusted third-party service providers for hosting, analytics, payment processing, and customer support. These providers have access to your information only to perform services on our behalf and are obligated to maintain confidentiality.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Advertising Partners</h3>
                  <p>We partner with Google AdSense and other advertising networks to display relevant ads. These partners may use cookies and similar technologies to collect information about your visits to our site and other websites to provide targeted advertising.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Legal Requirements</h3>
                  <p>We may disclose your information when required by law, to protect our rights, prevent fraud, or ensure the safety of our users and the general public.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure server infrastructure, and regular security audits. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Access:</strong> You can access and update your account information at any time through your profile settings</li>
                <li><strong>Data Portability:</strong> You can request a copy of your personal data in a machine-readable format</li>
                <li><strong>Account Deletion:</strong> You can delete your account and associated data at any time</li>
                <li><strong>Marketing Communications:</strong> You can opt out of promotional emails using the unsubscribe link in our messages</li>
                <li><strong>Cookie Management:</strong> You can control cookie settings through your browser preferences</li>
                <li><strong>Advertising Preferences:</strong> You can manage ad personalization through Google Ad Settings</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Google AdSense</h3>
                  <p>Our website uses Google AdSense to display advertisements. Google may use cookies and other tracking technologies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ad Settings.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Analytics Services</h3>
                  <p>We use analytics services to understand how users interact with our platform. These services may collect information about your device, browsing behavior, and site usage patterns.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Social Media Integration</h3>
                  <p>Our platform may integrate with social media services. When you connect your social media accounts, we may access certain profile information as permitted by those platforms' privacy settings.</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">8. Children's Privacy</h2>
              <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">9. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">10. Changes to This Privacy Policy</h2>
              <p>We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
              <div className="space-y-2">
                <p>If you have questions about this privacy policy or our data practices, please contact us at:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@jobnest.com</p>
                  <p><strong>Address:</strong> Jobnest Privacy Team, 123 Career Street, Job City, JC 12345</p>
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

export default PrivacyPolicy;
