import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import odhmdhTruckImage from "@/assets/services/sas-transport-min.jpg";
import image from "@/assets/service/4.png"
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
    document.title = "ODH Warehouse Business Model | Mini Bharat Logistics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Operate an ODH Warehouse with Mini Bharat Logistics — manage outbound dispatch, line-haul coordination, assured shipment flow, and high monthly income potential."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Centralized Outbound Control",
      description:
        "Manage outbound dispatch operations efficiently from a centralized ODH warehouse.",
    },
    {
      icon: DollarSign,
      title: "Assured Revenue Model",
      description:
        "Earn consistent income through fixed shipment volumes handled at the warehouse level.",
    },
    {
      icon: TrendingUp,
      title: "High Volume Operations",
      description:
        "Handle large parcel volumes daily with predictable and scalable earnings.",
    },
    {
      icon: Zap,
      title: "Quick Setup & Smooth Operations",
      description:
        "Simple warehouse setup with defined SOPs for dispatch and line-haul handling.",
    },
    {
      icon: Shield,
      title: "Process & SLA Driven",
      description:
        "Operate under clear SLA guidelines ensuring accuracy, speed, and compliance.",
    },
    {
      icon: MapPin,
      title: "Strategic Network Role",
      description:
        "Play a key role in connecting hubs and cities through line-haul coordination.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Inbound Consolidation",
      description:
        "Shipments from multiple hubs are consolidated at the ODH warehouse.",
    },
    {
      step: "2",
      title: "Sorting & Dispatch",
      description:
        "Parcels are sorted and prepared for outbound dispatch as per route plans.",
    },
    {
      step: "3",
      title: "Line-Haul Coordination",
      description:
        "Coordinate vehicle movement and ensure timely handover to next transit points.",
    },
    {
      step: "4",
      title: "Settlement & Growth",
      description:
        "Receive regular payouts and scale operations with higher shipment volumes.",
    },
  ];

  const franchiseBenefits = [
    "Key operational role in the logistics network.",
    "Stable warehouse-based income model.",
    "Lower dependency on last-mile manpower.",
    "Clear operational structure and SOPs.",
    "Scalable volume-based earning potential.",
    "Backend tech support for tracking and reporting.",
  ];

  const earningData = {
    title: "ODH Warehouse – Revenue Example",
    basic: {
      label: "Base Operations",
      detail: "High-volume outbound dispatch handling",
      amount: "Monthly Income ≈ ₹6–9 Lakhs",
    },
    scaled: {
      label: "Scaled Volume",
      detail: "Increased line-haul & dispatch capacity",
      amount: "₹10–14 Lakhs/month",
    },
    note: "Strategically located ODH warehouses can exceed ₹15 Lakhs monthly",
  };

  return (
    <BusinessModelTemplate
      badge="Core Network Model"
      title="ODH Warehouse Business Model"
      subtitle="Operate with Mini Bharat Logistics"
      tagline="Manage Outbound Dispatch & Line-Haul Operations"
      description="The ODH Warehouse Business Model allows entrepreneurs to operate a central outbound dispatch hub under Mini Bharat Logistics. This model focuses on warehouse management, shipment sorting, and line-haul coordination with stable volumes and scalable income."
      heroImage={image}
      heroImageAlt="Mini Bharat Logistics ODH Warehouse Operations"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Warehouse Model",
        "Stable Income",
        "High Volume Operations",
      ]}
      ctaButtonText="Apply Now – Become an ODH Warehouse Partner"
    />
  );
};

export default ODHMDHBusinessModel;
