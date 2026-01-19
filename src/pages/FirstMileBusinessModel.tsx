import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import deliveryTruckImage from "@/assets/heavy-delivery-truck.jpg";
import image from "@/assets/service/2.png"
import { 
  Package,
  DollarSign,
  Clock,
  Zap,
  TrendingUp,
  MapPin
} from "lucide-react";

const FirstMileBusinessModel = () => {
  useEffect(() => {
    document.title = "First Mile Business Model - Franchise Opportunity | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Operate a First Mile hub with Mini Bharat Logistics. Manage pickup-based operations to move products from sellers to main hubs efficiently with assured daily volumes and predictable income.");
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Efficient Seller Pickups",
      description: "Collect products from sellers and move them quickly to central hubs."
    },
    {
      icon: DollarSign,
      title: "Predictable Daily Income",
      description: "Earn per pickup with stable payouts from Mini Bharat."
    },
    {
      icon: Clock,
      title: "Fast Pickup Timelines",
      description: "Ensure timely collection from sellers to maintain SLA compliance."
    },
    {
      icon: Zap,
      title: "Quick Cash Flow",
      description: "COD and prepaid settlements processed efficiently, ensuring liquidity."
    },
    {
      icon: TrendingUp,
      title: "Performance Incentives",
      description: "High SLA and volume adherence lead to better margins and bonuses."
    },
    {
      icon: MapPin,
      title: "Pan-India Scalability",
      description: "Start with a single zone and expand to multiple hubs nationwide."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Pickup Assignment",
      description: "Mini Bharat assigns daily pickups from sellers to your hub."
    },
    {
      step: "2", 
      title: "Collect Products",
      description: "Efficiently pick up items from sellers within SLA timelines."
    },
    {
      step: "3",
      title: "Transfer to Main Hub",
      description: "Move collected products safely to the central hub for onward dispatch."
    },
    {
      step: "4",
      title: "Scale & Grow",
      description: "Increase pickup capacity and expand operations to new seller zones."
    }
  ];

  const franchiseBenefits = [
    "Assured Seller Pickups – no client hunting",
    "Predictable per-pickup earnings with transparent rate slabs",
    "Fast COD & prepaid settlements – cash security",
    "Lean infrastructure and manpower for quick ROI",
    "Supported by Mini Bharat Logistics SOPs and operational guidance"
  ];

  const earningData = {
    title: "Tier II First Mile Hub – Seller Pickups",
    basic: {
      label: "Normal Volume",
      detail: "500–1000 pickups/day × Avg ₹3 per pickup",
      amount: "Monthly Income ≈ ₹4–7 Lakhs"
    },
    scaled: {
      label: "Expanded Volume",
      detail: "1,500–2,000 pickups/day with high SLA compliance",
      amount: "₹10–12 Lakhs/month"
    },
    note: "Higher pickup volumes and SLA efficiency directly increase profitability"
  };

  return (
    <BusinessModelTemplate
      badge="Franchise Opportunity"
      title="First Mile Business Model"
      subtitle="Franchise with Mini Bharat Logistics"
      tagline="Pickup-Based Operations to Move Products Efficiently"
      description="The First Mile Business Model focuses on managing seller pickups under Mini Bharat Logistics. Franchise partners collect products from sellers daily, ensure timely transfer to central hubs, earn predictable per-pickup payouts, and scale operations across zones."
      heroImage={image}
      heroImageAlt="First Mile hub operations for seller pickups"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Assured Pickups",
        "Transparent Earnings",
        "Scalable Hub",
        "Pan-India Growth"
      ]}
      ctaButtonText="Apply Now – Become a First Mile Partner"
    />
  );
};

export default FirstMileBusinessModel;
