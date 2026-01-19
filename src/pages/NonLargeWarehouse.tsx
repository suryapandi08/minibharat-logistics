import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import deliveryTruckImage from "@/assets/heavy-delivery-truck.jpg";
import image from "@/assets/service/8.png"
import { 
  Package,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  MapPin
} from "lucide-react";

const NonLargeWarehouseBusinessModel = () => {
  useEffect(() => {
    document.title = "Non-Large Warehouse Business Model | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Operate a Non-Large Warehouse with Mini Bharat Logistics. Handle standard-sized shipments with high daily volumes, fast movement, and stable monthly income."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Standard-Sized Shipment Handling",
      description: "Manage fashion, electronics, FMCG, and daily-use products efficiently."
    },
    {
      icon: DollarSign,
      title: "High Daily Volume & Steady Income",
      description: "Daily inflow of parcels ensures consistent revenue throughout the month."
    },
    {
      icon: TrendingUp,
      title: "Fast-Moving Operations",
      description: "Quick inbound, sorting, and outbound dispatch cycles improve throughput."
    },
    {
      icon: Zap,
      title: "Lower Infrastructure Cost",
      description: "Simple racking and manpower-driven operations without heavy equipment."
    },
    {
      icon: Shield,
      title: "Process-Driven Model",
      description: "Clear SOPs for sorting, storage, and dispatch reduce errors and losses."
    },
    {
      icon: MapPin,
      title: "Ideal for Urban & Semi-Urban Areas",
      description: "Perfect for high-density zones with strong e-commerce demand."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Inbound Shipments",
      description: "Standard-sized parcels arrive daily from fulfillment centers or hubs."
    },
    {
      step: "2", 
      title: "Sorting & Storage",
      description: "Parcels are sorted zone-wise and stored temporarily for quick movement."
    },
    {
      step: "3",
      title: "Outbound Dispatch",
      description: "Shipments are dispatched to delivery hubs or last-mile partners."
    },
    {
      step: "4",
      title: "Revenue & Growth",
      description: "Earn stable payouts and scale by increasing daily volume capacity."
    }
  ];

  const franchiseBenefits = [
    "High daily parcel volumes ensure predictable cash flow",
    "Lower setup and operating cost compared to large warehouses",
    "Easy manpower management and faster operations",
    "Strong backend and process support from Mini Bharat Logistics",
    "Scalable model suitable for multiple locations"
  ];

  const earningData = {
    title: "Non-Large Warehouse – Revenue Example",
    basic: {
      label: "Normal Volume",
      detail: "High daily parcel movement (standard-sized shipments)",
      amount: "Monthly Income ≈ ₹5–8 Lakhs"
    },
    scaled: {
      label: "Increased Volume",
      detail: "Higher throughput with optimized sorting",
      amount: "₹9–12 Lakhs/month"
    },
    note: "Higher speed and volume directly increase profitability"
  };

  return (
    <BusinessModelTemplate
      badge="Non-Large Warehouse"
      title="Non-Large Warehouse Business Model"
      subtitle="Operate with Mini Bharat Logistics"
      tagline="High-Volume Warehousing for Standard-Sized Shipments"
      description="The Non-Large Warehouse Business Model focuses on handling standard-sized shipments with high daily volumes. This model is ideal for fast-moving e-commerce parcels, offering stable income, lower setup cost, and scalable growth with Mini Bharat Logistics."
      heroImage={image}
      heroImageAlt="Non-large warehouse handling standard-sized shipments"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "High Daily Volumes",
        "Stable Income",
        "Low Setup Cost"
      ]}
      ctaButtonText="Apply Now – Become a Non-Large Warehouse Partner"
    />
  );
};

export default NonLargeWarehouseBusinessModel;
