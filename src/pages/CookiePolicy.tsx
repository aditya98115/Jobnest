import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Cookie Policy</CardTitle>
              <p className="text-center text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
                <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies allow websites to remember your preferences, login status, and other information to personalize your experience.</p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
                <p className="mb-4">Jobnest uses cookies for several purposes to enhance your experience on our platform:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Essential Cookies</h3>
                    <p>These cookies are necessary for our website to function properly. They enable basic features like page navigation, secure login, and access to protected areas of the site. The website cannot function properly without these cookies.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Performance and Analytics Cookies</h3>
                    <p>We use these cookies to collect information about how visitors use our website. This includes data about which pages are visited most often, how users navigate through the site, and any error messages they encounter. This information helps us improve our website's performance and user experience.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Functional Cookies</h3>
                    <p>These cookies allow our website to remember choices you make (such as your preferred language, job search filters, or login credentials) and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as job alerts or application tracking.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Advertising Cookies</h3>
                    <p>We work with Google AdSense and other advertising partners who use cookies to deliver relevant advertisements to you. These cookies track your browsing habits across different websites to show you ads that match your interests. They also help measure the effectiveness of advertising campaigns.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Cookie Type</th>
                        <th className="border border-border p-3 text-left">Purpose</th>
                        <th className="border border-border p-3 text-left">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">Session Cookies</td>
                        <td className="border border-border p-3">Maintain your session while browsing our site</td>
                        <td className="border border-border p-3">Deleted when you close your browser</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Persistent Cookies</td>
                        <td className="border border-border p-3">Remember your preferences for future visits</td>
                        <td className="border border-border p-3">Up to 2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Authentication Cookies</td>
                        <td className="border border-border p-3">Keep you logged in securely</td>
                        <td className="border border-border p-3">30 days</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Preference Cookies</td>
                        <td className="border border-border p-3">Store your settings and preferences</td>
                        <td className="border border-border p-3">1 year</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Analytics Cookies</td>
                        <td className="border border-border p-3">Help us understand site usage patterns</td>
                        <td className="border border-border p-3">Up to 2 years</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-medium">Advertising Cookies</td>
                        <td className="border border-border p-3">Deliver relevant ads and measure effectiveness</td>
                        <td className="border border-border p-3">Up to 1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium mb-2">Google AdSense</h3>
                    <p>Our website displays advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits to our website or other websites. These cookies enable Google to serve ads to our users based on their visit to our site and/or other sites on the Internet.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Analytics Providers</h3>
                    <p>We use third-party analytics services to help analyze how users use the site. These services may use cookies to collect information about your use of our website, including your IP address, browser type, and pages visited.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Social Media Plugins</h3>
                    <p>Our website may include social media features, such as Facebook Like buttons, Twitter Share buttons, or LinkedIn sharing tools. These features may set cookies to enable them to function properly and track your interactions with these features.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Managing Your Cookie Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Browser Settings</h3>
                    <p>Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, please note that some parts of our website may not function properly if you disable cookies.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Google Ad Settings</h3>
                    <p>You can manage your preferences for Google ads and opt out of personalized advertising by visiting Google's Ad Settings page at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a>.</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Opt-Out Tools</h3>
                    <p>You can also opt out of cookies from many advertising networks by visiting the Network Advertising Initiative's opt-out page at <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">optout.networkadvertising.org</a> or the Digital Advertising Alliance's opt-out page at <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">optout.aboutads.info</a>.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Cookie Consent</h2>
                <p>By continuing to use our website, you consent to our use of cookies as described in this policy. When you first visit our site, you may see a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences.</p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Browser-Specific Instructions</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium mb-1">Google Chrome</h3>
                    <p className="text-sm text-muted-foreground">Settings → Privacy and security → Cookies and other site data</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Mozilla Firefox</h3>
                    <p className="text-sm text-muted-foreground">Settings → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Safari</h3>
                    <p className="text-sm text-muted-foreground">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Microsoft Edge</h3>
                    <p className="text-sm text-muted-foreground">Settings → Cookies and site permissions → Manage and delete cookies</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date at the top of this page.</p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <div className="space-y-2">
                  <p>If you have any questions about our Cookie Policy or how we use cookies, please contact us:</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Email:</strong> privacy@jobnest.com</p>
                    <p><strong>Address:</strong> Jobnest Privacy Team, 123 Career Street, Job City, JC 12345</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button onClick={() => window.history.back()}>
                  Back to Previous Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
