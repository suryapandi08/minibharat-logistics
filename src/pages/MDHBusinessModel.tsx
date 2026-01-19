import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import odhmdhTruckImage from "@/assets/services/sas-transport-min.jpg";
import image from "@/assets/service/5.png"
import {
  Package,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  MapPin,
} from "lucide-react";

const ODHMDHBusinessModel = () => {
  useEffect(() => {
    document.title = "MDH Warehouse Business Model | Mini Bharat Logistics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Run an MDH Warehouse with Mini Bharat Logistics — handle inbound shipments, sorting, storage, and final distribution with assured volumes and scalable income."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Inbound Shipment Management",
      description:
        "Handle large volumes of inbound parcels received from line-haul and regional hubs.",
    },
    {
      icon: DollarSign,
      title: "Stable Warehouse Revenue",
      description:
        "Earn consistent income through fixed inbound handling and distribution volumes.",
    },
    {
      icon: TrendingUp,
      title: "High Volume Processing",
      description:
        "Process thousands of shipments daily with structured and scalable operations.",
    },
    {
      icon: Zap,
      title: "Efficient Sorting & Storage",
      description:
        "Operate organized sorting lines and temporary storage for smooth distribution.",
    },
    {
      icon: Shield,
      title: "SLA & Process Driven",
      description:
        "Clear SOPs ensure accuracy, safety, and timely last-mile handover.",
    },
    {
      icon: MapPin,
      title: "Last-Mile Distribution Control",
      description:
        "Act as the final distribution point before parcels reach delivery hubs.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Inbound Receipt",
      description:
        "Shipments arrive at the MDH warehouse from ODHs and line-haul routes.",
    },
    {
      step: "2",
      title: "Sorting & Storage",
      description:
        "Parcels are sorted by delivery zones and stored temporarily for dispatch.",
    },
    {
      step: "3",
      title: "Final Distribution",
      description:
        "Shipments are allocated to last-mile hubs and delivery partners.",
    },
    {
      step: "4",
      title: "Payouts & Expansion",
      description:
        "Receive regular payouts and expand capacity with increased volumes.",
    },
  ];

  const franchiseBenefits = [
    "Critical role in last-mile logistics operations.",
    "Warehouse-based stable income model.",
    "Predictable daily shipment volumes.",
    "Clear SOPs and operational support.",
    "Scalable earnings with volume growth.",
    "Technology-backed tracking and reporting.",
  ];

  const earningData = {
    title: "MDH Warehouse – Revenue Example",
    basic: {
      label: "Standard Operations",
      detail: "Inbound handling, sorting & distribution",
      amount: "Monthly Income ≈ ₹5–8 Lakhs",
    },
    scaled: {
      label: "High Volume MDH",
      detail: "Expanded storage and distribution capacity",
      amount: "₹9–13 Lakhs/month",
    },
    note: "Well-located MDH warehouses can exceed ₹14 Lakhs monthly",
  };

  return (
    <BusinessModelTemplate
      badge="Last-Mile Core Model"
      title="MDH Warehouse Business Model"
      subtitle="Operate with Mini Bharat Logistics"
      tagline="Inbound Handling, Sorting, Storage & Final Distribution"
      description="The MDH Warehouse Business Model enables entrepreneurs to run a middle-mile distribution hub under Mini Bharat Logistics. This model focuses on inbound shipment handling, systematic sorting, secure storage, and final distribution to last-mile delivery hubs."
      heroImage={image}
      heroImageAlt="Mini Bharat Logistics MDH Warehouse Operations"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Inbound Operations",
        "Stable Warehouse Income",
        "Scalable Volumes",
      ]}
      ctaButtonText="Apply Now – Become an MDH Warehouse Partner"
    />
  );
};

export default ODHMDHBusinessModel;
