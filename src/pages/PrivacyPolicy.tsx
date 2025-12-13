import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-background py-12 md:py-16">
          <div className="container max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl px-4">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              
              {/* Overview */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Overview</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    MiniBharat Logistics ("we", "us", "our") values the privacy of all visitors and users of our website. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our services.
                  </p>
                  <p>
                    By using our website or services, you consent to the practices described in this Privacy Policy. We encourage you to review this page periodically to stay informed about updates and changes.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 1: Information We Collect</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. Personal Information: Name, email address, phone number, billing and shipping information, and payment details that you provide when using our services.
                  </p>
                  <p>
                    2. Non-Personal Information: Browser type, IP address, device information, pages visited, and other analytics collected automatically via cookies or similar technologies.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 2: How We Use Your Information</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. To provide and improve our services, process orders, deliver products, and respond to inquiries or requests.
                  </p>
                  <p>
                    2. To send newsletters, promotional materials, and other communications related to our services (you can opt-out anytime).
                  </p>
                  <p>
                    3. To monitor website usage, analyze trends, and enhance user experience.
                  </p>
                  <p>
                    4. To comply with legal obligations and prevent fraudulent or unauthorized activities.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 3: Cookies and Tracking</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We use cookies and similar technologies to improve website functionality, enhance user experience, and track usage patterns.
                  </p>
                  <p>
                    2. You can choose to disable cookies in your browser settings; however, some features of the website may not function properly.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 4: Sharing Your Information</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We do not sell or rent your personal information to third parties.
                  </p>
                  <p>
                    2. We may share information with trusted third-party service providers to facilitate services, process payments, or deliver products, provided they agree to protect your data.
                  </p>
                  <p>
                    3. Information may also be shared to comply with legal obligations, enforce our policies, or protect our rights and property.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 5: Data Security</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    2. Despite our efforts, no method of transmission or storage is 100% secure; therefore, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 6: Your Rights</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. You have the right to access, correct, or request deletion of your personal information stored by us.
                  </p>
                  <p>
                    2. You can opt out of marketing communications at any time by clicking the unsubscribe link in emails or contacting us.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 7: Third-Party Links</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 8: Changes to Privacy Policy</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We reserve the right to modify this Privacy Policy at any time. Changes will be updated on this page with a new "Last Updated" date.
                  </p>
                  <p>
                    2. Continued use of our website after updates constitutes acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 9: Contact Information</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. For questions or concerns about this Privacy Policy, please contact us at{" "}
                    <a 
                      href="mailto:info@minibharatlogistics.com" 
                      className="text-primary hover:underline font-semibold"
                    >
                      info@minibharatlogistics.com
                    </a>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
