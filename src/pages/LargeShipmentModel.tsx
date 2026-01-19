import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import deliveryTruckImage from "@/assets/heavy-delivery-truck.jpg";
import image from "@/assets/service/7.png"
import { 
  Package,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  MapPin
} from "lucide-react";

const LargeShipmentWarehouseBusinessModel = () => {
  useEffect(() => {
    document.title = "Large Shipment Warehouse Business Model | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Operate a Large Shipment Warehouse with Mini Bharat Logistics. Manage heavy, bulky, and oversized shipment warehousing with specialized handling, equipment, and assured business volumes."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Heavy & Bulky Shipment Handling",
      description: "Manage appliances, furniture, and oversized goods safely inside a dedicated warehouse setup."
    },
    {
      icon: DollarSign,
      title: "Stable Warehouse Income",
      description: "Earn consistent revenue from storage, handling, and movement of large shipments."
    },
    {
      icon: TrendingUp,
      title: "High-Value Shipment Volumes",
      description: "Bulky shipments mean higher per-unit value and better margins."
    },
    {
      icon: Zap,
      title: "Specialized Infrastructure",
      description: "Use material handling equipment like pallet jacks, lifts, and loading docks."
    },
    {
      icon: Shield,
      title: "Safe & Secure Operations",
      description: "Defined SOPs ensure damage-free storage and controlled movement of goods."
    },
    {
      icon: MapPin,
      title: "Strategic Distribution Role",
      description: "Act as a central warehouse before large items move to final delivery locations."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Inbound Receipt",
      description: "Large and heavy shipments arrive at your warehouse from line-haul or suppliers."
    },
    {
      step: "2", 
      title: "Storage & Handling",
      description: "Goods are safely stored using proper racks, pallets, and handling equipment."
    },
    {
      step: "3",
      title: "Outbound Movement",
      description: "Shipments are prepared and dispatched to delivery hubs or customer locations."
    },
    {
      step: "4",
      title: "Revenue & Scaling",
      description: "Earn regular payouts and scale capacity as shipment volume increases."
    }
  ];

  const franchiseBenefits = [
    "Warehouse-focused business with predictable operations",
    "Higher margins due to bulky and high-value shipments",
    "Lower dependency on last-mile delivery manpower",
    "Clear safety and handling SOPs from Mini Bharat Logistics",
    "Scalable warehouse capacity with long-term growth"
  ];

  const earningData = {
    title: "Large Shipment Warehouse – Revenue Example",
    basic: {
      label: "Standard Operations",
      detail: "Heavy & bulky shipment storage and handling",
      amount: "Monthly Income ≈ ₹8–12 Lakhs"
    },
    scaled: {
      label: "Expanded Capacity",
      detail: "Higher volume + specialized handling services",
      amount: "₹14–20 Lakhs/month"
    },
    note: "Larger warehouses with automation can earn significantly more"
  };

  return (
    <BusinessModelTemplate
      badge="Large Shipment Warehouse"
      title="Large Shipment Warehouse Business Model"
      subtitle="Operate with Mini Bharat Logistics"
      tagline="Specialized Warehousing for Heavy & Bulky Shipments"
      description="The Large Shipment Warehouse Business Model is designed for handling heavy, oversized, and bulky goods under Mini Bharat Logistics. This model focuses on safe storage, specialized equipment handling, and smooth outbound movement with stable volumes and strong earning potential."
      heroImage={image}
      heroImageAlt="Large shipment warehouse handling heavy and bulky goods"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Heavy Goods Handling",
        "Stable Warehouse Income",
        "Scalable Operations"
      ]}
      ctaButtonText="Apply Now – Become a Large Shipment Warehouse Partner"
    />
  );
};

export default LargeShipmentWarehouseBusinessModel;
