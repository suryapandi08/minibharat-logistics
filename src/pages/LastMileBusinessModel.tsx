import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import deliveryTruckImage from "@/assets/heavy-delivery-truck.jpg";
import image from "@/assets/service/1.png"
import { 
  Package,
  DollarSign,
  Clock,
  Zap,
  TrendingUp,
  MapPin
} from "lucide-react";

const LastMileBusinessModel = () => {
  useEffect(() => {
    document.title = "Last Mile Business Model - Franchise Opportunity | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Operate a Last Mile delivery hub with Mini Bharat Logistics. Ensure fast, accurate, and timely final-stage deliveries to customers with high daily volumes and strong earning potential.");
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Fast & Accurate Deliveries",
      description: "Ensure parcels reach customers on time with minimal errors."
    },
    {
      icon: DollarSign,
      title: "Predictable Daily Income",
      description: "Earn from high-volume last-mile shipments with stable payouts."
    },
    {
      icon: Clock,
      title: "Timely SLA Compliance",
      description: "Meet delivery timelines to maximize incentives and performance bonuses."
    },
    {
      icon: Zap,
      title: "Quick Cash Flow",
      description: "COD and prepaid settlements processed efficiently, ensuring liquidity."
    },
    {
      icon: TrendingUp,
      title: "Performance Incentives",
      description: "Top-performing hubs earn additional rewards for SLA & accuracy."
    },
    {
      icon: MapPin,
      title: "Pan-India Expansion",
      description: "Start in one city and expand to multiple zones as volumes increase."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Shipment Allocation",
      description: "Receive last-mile deliveries assigned daily from Mini Bharat Logistics."
    },
    {
      step: "2", 
      title: "Delivery Execution",
      description: "Dispatch and deliver parcels to end customers efficiently."
    },
    {
      step: "3",
      title: "Earnings & Incentives",
      description: "Earn per delivery with additional incentives for SLA and accuracy."
    },
    {
      step: "4",
      title: "Scale & Grow",
      description: "Increase delivery volume capacity and expand to new zones for higher profits."
    }
  ];

  const franchiseBenefits = [
    "Assured daily last-mile deliveries – no client hunting",
    "Transparent per-delivery earnings with incentive structures",
    "Quick COD & prepaid settlements – cash security",
    "Low infrastructure and manpower requirements for fast ROI",
    "Backed by Mini Bharat Logistics operational support and SOPs"
  ];

  const earningData = {
    title: "Tier II Last Mile Hub – Customer Deliveries",
    basic: {
      label: "Normal Volume",
      detail: "500–1000 shipments/day × Avg ₹10 per delivery",
      amount: "Monthly Income ≈ ₹4–8 Lakhs"
    },
    scaled: {
      label: "Expanded Volume",
      detail: "1,500–2,000 shipments/day with high SLA compliance",
      amount: "₹10–14 Lakhs/month"
    },
    note: "Higher delivery volumes and SLA efficiency directly increase profitability"
  };

  return (
    <BusinessModelTemplate
      badge="Franchise Opportunity"
      title="Last Mile Business Model"
      subtitle="Franchise with Mini Bharat Logistics"
      tagline="Ensure Fast, Accurate, and Timely Deliveries to Customers"
      description="The Last Mile Business Model focuses on final-stage delivery operations under Mini Bharat Logistics. Franchise partners manage daily high-volume shipments, ensure SLA compliance, earn per-delivery payouts, and grow with expanding zones."
      heroImage={image}
      heroImageAlt="Last Mile delivery hub operations"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Assured Deliveries",
        "Transparent Earnings",
        "Scalable Hub",
        "Pan-India Growth"
      ]}
      ctaButtonText="Apply Now – Become a Last Mile Partner"
    />
  );
};

export default LastMileBusinessModel;
