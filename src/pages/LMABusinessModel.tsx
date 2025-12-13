import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import lmaHeroImage from "@/assets/services/Untitled design (100).png";
import {
  Package,
  DollarSign,
  TrendingUp,
  Shield,
  MapPin,
  Truck,
  ClipboardCheck,
} from "lucide-react";

const LMABusinessModel = () => {
  useEffect(() => {
    document.title = "LMA - Vendor Business Model | Mini Bharat Logistics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join Mini Bharat Logistics LMA Business Model — get assured Flipkart shipments, transparent payouts, dedicated pin code allocation, and scalable franchise opportunities."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Assured Flipkart Shipments",
      description:
        "Franchise owners get guaranteed shipment volumes directly from Flipkart—no client hunting required.",
    },
    {
      icon: DollarSign,
      title: "Fixed & Transparent Rate Card",
      description:
        "Zone-based per-shipment earnings with a predictable revenue model and no hidden charges.",
    },
    {
      icon: TrendingUp,
      title: "Forward + Reverse Deliveries",
      description:
        "Earn from both delivery and reverse pickup operations, doubling overall earning potential.",
    },
    {
      icon: Shield,
      title: "Performance Incentives",
      description:
        "Higher SLA and conversion percentages lead to additional per-shipment payouts.",
    },
    {
      icon: MapPin,
      title: "Dedicated Pincode Allocation",
      description:
        "Each partner receives fixed monthly PIN code or hub allocations ensuring stable business inflow.",
    },
    {
      icon: ClipboardCheck,
      title: "Technology-Driven Operations",
      description:
        "Live tracking, MIS reports, and automated Flipkart systems support seamless daily operations.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Shipment Assignment",
      description:
        "Mini Bharat Logistics assigns daily shipments to your riders based on allocated PIN codes.",
    },
    {
      step: "2",
      title: "Delivery & Return Handling",
      description:
        "Riders complete forward deliveries and reverse pickups, including COD remittance.",
    },
    {
      step: "3",
      title: "Earnings Calculation",
      description:
        "Income is based on a clear per-shipment rate card with performance-linked bonuses.",
    },
    {
      step: "4",
      title: "Growth & Expansion",
      description:
        "Partners can grow by adding more PIN codes and achieving higher conversion rates.",
    },
  ];

  const franchiseBenefits = [
    "Assured business through official Flipkart LMA partnership.",
    "Fixed earning structure—zone-wise, tier-based payout clarity.",
    "Includes both forward & reverse logistics operations.",
    "Safe COD handling with same-day remittances.",
    "Technology-backed tracking and complete operational visibility.",
    "Scalable model—expand with more PIN codes and stronger performance.",
  ];

  const earningData = {
    title: "LMA Franchise – Sample Earning Projection",
    basic: {
      label: "Average Volume",
      detail: "3,500 shipments / month × ₹18–₹22 per delivery",
      amount: "Monthly Income ≈ ₹63,000 – ₹77,000",
    },
    scaled: {
      label: "With Performance Bonuses",
      detail: "Extra ₹1–₹1.5 per shipment for achieving 95%+ SLA",
      amount: "₹80,000 – ₹1,05,000 per month",
    },
    note: "Income varies based on city, zone allocation, and rider efficiency.",
  };

  return (
    <BusinessModelTemplate
      badge="Flipkart-Backed LMA Model"
      title="LMA – Vendor Business Model"
      subtitle="Franchise with Mini Bharat Logistics"
      tagline="Assured Flipkart Shipments with Transparent Earnings"
      description="The LMA – Vendor Business Model by Mini Bharat Logistics offers franchise partners guaranteed Flipkart shipment volumes, fixed per-shipment earnings, and a secure, scalable logistics business."
      heroImage={lmaHeroImage}
      heroImageAlt="Mini Bharat Logistics LMA Delivery"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Assured Flipkart Orders",
        "Transparent Payouts",
        "Growth Guaranteed",
      ]}
      ctaButtonText="Apply Now – Become an LMA Partner"
    />
  );
};

export default LMABusinessModel;
