import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import lmaHeroImage from "@/assets/services/Untitled design (100).png";
import truckImage from "@/assets/service/11.png";
import {
  Package,
  DollarSign,
  TrendingUp,
  Shield,
  MapPin,
  Truck,
  ClipboardCheck,
} from "lucide-react";

const LowValueShipmentsBusinessModel = () => {
  useEffect(() => {
    document.title = "Low Value Shipments Business Model | Mini Bharat Logistics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Operate a Low Value Shipments hub with Mini Bharat Logistics. Manage high-volume, low-cost deliveries efficiently with transparent earnings and scalable franchise potential."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "High-Volume Shipment Handling",
      description:
        "Process a large number of low-value shipments daily for consistent revenue."
    },
    {
      icon: DollarSign,
      title: "Predictable Earnings",
      description:
        "Per-shipment payouts with transparent rate slabs ensure stable monthly income."
    },
    {
      icon: TrendingUp,
      title: "Efficient Operations",
      description:
        "Optimized sorting, storage, and dispatch workflows maximize throughput and reduce delays."
    },
    {
      icon: Shield,
      title: "Secure Handling Procedures",
      description:
        "Defined SOPs minimize errors, losses, and damage while handling bulk shipments."
    },
    {
      icon: MapPin,
      title: "Scalable & Expandable",
      description:
        "Start with a single zone and expand operations across multiple regions as volume grows."
    },
    {
      icon: ClipboardCheck,
      title: "Tech-Supported Management",
      description:
        "Use dashboards, live tracking, and MIS reports to monitor daily performance and efficiency."
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Daily Shipment Allocation",
      description:
        "Mini Bharat assigns high-volume, low-value shipments to your hub each day."
    },
    {
      step: "2",
      title: "Sorting & Storage",
      description:
        "Organize shipments quickly by zone, client, or delivery route for efficient movement."
    },
    {
      step: "3",
      title: "Dispatch Operations",
      description:
        "Shipments are dispatched to delivery partners or last-mile hubs in an optimized manner."
    },
    {
      step: "4",
      title: "Scale & Grow",
      description:
        "Increase capacity, add zones, and improve operational efficiency to maximize revenue."
    },
  ];

  const franchiseBenefits = [
    "Handle large daily volumes efficiently with streamlined workflows.",
    "Predictable per-shipment earnings with transparent rate slabs.",
    "Operational model optimized for low-cost, high-frequency deliveries.",
    "Secure handling minimizes errors and losses.",
    "Scalable model to expand across multiple zones or regions.",
    "Tech-backed dashboards for monitoring performance and growth."
  ];

  const earningData = {
    title: "Low Value Shipments Hub – Sample Revenue Projection",
    basic: {
      label: "Standard Throughput",
      detail: "5,000–10,000 shipments/month × ₹1.5–₹2 per shipment",
      amount: "Monthly Income ≈ ₹75,000 – ₹2 Lakhs",
    },
    scaled: {
      label: "Optimized & Expanded",
      detail: "Higher volumes + improved efficiency",
      amount: "₹2.5–4 Lakhs/month",
    },
    note: "Efficiency and volume directly influence profitability."
  };

  return (
    <BusinessModelTemplate
      badge="Low Value Shipments Model"
      title="Low Value Shipments Business Model"
      subtitle="Operate with Mini Bharat Logistics"
      tagline="High-Volume, Low-Cost Delivery Operations"
      description="The Low Value Shipments Business Model is designed for managing large numbers of low-cost shipments efficiently under Mini Bharat Logistics. Franchise partners can maximize operational throughput, maintain transparent earnings, and scale operations across zones."
      heroImage={truckImage}
      heroImageAlt="Low value shipments hub operations with Mini Bharat Logistics"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "High Daily Volumes",
        "Efficient Operations",
        "Predictable Earnings",
      ]}
      ctaButtonText="Apply Now – Become a Low Value Shipments Partner"
    />
  );
};

export default LowValueShipmentsBusinessModel;
