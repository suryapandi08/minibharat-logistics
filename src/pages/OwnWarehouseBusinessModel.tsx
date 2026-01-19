import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import lmaHeroImage from "@/assets/services/Untitled design (100).png";
import truckImage from "@/assets/service/3.png"
import {
  Package,
  DollarSign,
  TrendingUp,
  Shield,
  MapPin,
  Truck,
  ClipboardCheck,
} from "lucide-react";

const OwnWarehouseBusinessModel = () => {
  useEffect(() => {
    document.title = "Own Warehouse Business Model | Mini Bharat Logistics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Operate your own warehouse with Mini Bharat Logistics. Manage storage, sorting, and dispatch operations independently, ensuring full control, efficiency, and scalable business potential."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Full Control of Operations",
      description:
        "Manage your warehouse independently — from storage to sorting and dispatch."
    },
    {
      icon: DollarSign,
      title: "Maximized Revenue Potential",
      description:
        "Earnings depend on volume throughput and efficiency of warehouse operations."
    },
    {
      icon: TrendingUp,
      title: "High Daily Throughput",
      description:
        "Process large daily shipment volumes for steady and predictable revenue."
    },
    {
      icon: Shield,
      title: "Secure & Safe Handling",
      description:
        "Implement SOPs for proper storage, sorting, and dispatch to avoid damage or loss."
    },
    {
      icon: MapPin,
      title: "Scalable Model",
      description:
        "Grow your warehouse operations to cover multiple zones or regions efficiently."
    },
    {
      icon: ClipboardCheck,
      title: "Tech-Supported Operations",
      description:
        "Use live tracking, MIS reports, and warehouse dashboards for seamless daily management."
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Receive Shipments",
      description:
        "Shipments arrive at your warehouse and are logged into your inventory system."
    },
    {
      step: "2",
      title: "Sorting & Storage",
      description:
        "Organize products by categories, zones, or clients for easy access and dispatch."
    },
    {
      step: "3",
      title: "Outbound Dispatch",
      description:
        "Prepare shipments for delivery to last-mile hubs or customer locations efficiently."
    },
    {
      step: "4",
      title: "Grow & Optimize",
      description:
        "Increase capacity, optimize workflows, and scale operations to maximize revenue."
    },
  ];

  const franchiseBenefits = [
    "Independent warehouse management with complete operational control.",
    "Revenue depends on throughput and efficiency, not fixed allocations.",
    "Forward and reverse logistics handled internally for higher margins.",
    "Secure handling ensures low damage and high client satisfaction.",
    "Scalable model to expand to multiple regions or zones.",
    "Technology-backed dashboard for inventory, tracking, and reporting.",
  ];

  const earningData = {
    title: "Own Warehouse – Sample Revenue Projection",
    basic: {
      label: "Standard Throughput",
      detail: "Process 3,000–5,000 shipments/month",
      amount: "Monthly Income ≈ ₹2–5 Lakhs",
    },
    scaled: {
      label: "Optimized & Expanded",
      detail: "Higher volume + streamlined operations",
      amount: "₹6–10 Lakhs/month",
    },
    note: "Efficiency, throughput, and warehouse size directly affect earnings.",
  };

  return (
    <BusinessModelTemplate
      badge="Own Warehouse Model"
      title="Own Warehouse Business Model"
      subtitle="Operate with Mini Bharat Logistics"
      tagline="Full Control of Storage, Sorting, and Dispatch Operations"
      description="The Own Warehouse Business Model allows entrepreneurs to independently operate a warehouse under Mini Bharat Logistics. Manage storage, sorting, and dispatch operations efficiently, maximize revenue, and scale operations as your business grows."
      heroImage={truckImage}
      heroImageAlt="Own warehouse operations with Mini Bharat Logistics"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Full Operational Control",
        "Scalable Operations",
        "Maximized Revenue Potential",
      ]}
      ctaButtonText="Apply Now – Become an Own Warehouse Partner"
    />
  );
};

export default OwnWarehouseBusinessModel;
