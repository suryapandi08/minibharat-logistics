import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import groceryDeliveryImage from "@/assets/grocery-delivery.jpg";
import image from "@/assets/service/10.png"
import { 
  Package,
  DollarSign,
  Star,
  Zap,
  Shield,
  MapPin,
  CheckCircle,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const MintsDeliveryBusinessModel = () => {
  useEffect(() => {
    document.title = "Mints Delivery Business Model | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Operate a Mints Delivery Business with Mini Bharat Logistics. Rapid delivery model ensuring high-speed shipments within minutes for hyperlocal zones, with optimized operations and predictable income.");
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Lightning-Fast Deliveries",
      description: "Ensure essential goods reach customers within minutes in hyperlocal areas."
    },
    {
      icon: DollarSign,
      title: "Predictable Revenue",
      description: "Per-delivery payouts with clear rate cards for consistent income."
    },
    {
      icon: Star,
      title: "Customer Delight",
      description: "Ultra-fast delivery increases repeat orders and customer loyalty."
    },
    {
      icon: Zap,
      title: "Efficient Hyperlocal Operations",
      description: "Optimized pick, pack, and dispatch processes maximize efficiency."
    },
    {
      icon: Shield,
      title: "Safe & Compliant Handling",
      description: "SOPs ensure product safety and quality during ultra-fast delivery."
    },
    {
      icon: MapPin,
      title: "Scalable Zones",
      description: "Expand micro-warehouses in high-density urban clusters for maximum reach."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Hyperlocal Stocking",
      description: "Keep essential items ready in micro-warehouses for instant delivery."
    },
    {
      step: "2",
      title: "Order Placement",
      description: "Customer places an order → nearest Mints warehouse triggered instantly."
    },
    {
      step: "3",
      title: "Pick & Dispatch",
      description: "Warehouse team picks items and dispatches delivery within minutes."
    },
    {
      step: "4",
      title: "Expand Zones",
      description: "Set up more micro-warehouses in busy clusters to increase delivery coverage."
    }
  ];

  const franchiseBenefits = [
    "Rapid delivery franchise with high-demand essentials.",
    "Transparent per-delivery revenue model for predictable earnings.",
    "Enhance customer loyalty with lightning-fast deliveries.",
    "Optimized hyperlocal warehouse operations for efficiency.",
    "Low-investment, high-speed ROI model.",
    "Scalable network across multiple urban zones."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-emerald-100/40" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(34 197 94 / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="px-6 py-3 text-sm font-black bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-xl">
                ⚡ MINTS HYPERLOCAL DELIVERY
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                Mints Delivery<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Warehouse
                </span><br/>
                Franchise
              </h1>
              
              <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                Own a Mints Delivery Business with Rapid Hyperlocal Shipments
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Operate a Mints Delivery Franchise under Mini Bharat Logistics. Deliver essential goods in minutes, manage high-volume hyperlocal operations, and achieve predictable revenue with minimal effort.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-10 py-7 text-lg font-black bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-2xl shadow-2xl hover:scale-105 transition-all">
                  Start Your Franchise <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-black border-2 border-slate-900 text-slate-900 rounded-2xl hover:bg-slate-900 hover:text-white transition-all">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-[3rem] blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={image} alt="Hyperlocal Mints Delivery" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Mints Delivery?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ultra-fast deliveries, optimized hyperlocal operations, and predictable revenue
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="group border-2 border-slate-200 hover:border-green-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/30">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-slate-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Works</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-3xl font-black text-white shadow-2xl group-hover:scale-110 transition-all">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all border-2 border-transparent group-hover:border-green-600">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Benefits */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Benefits</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {franchiseBenefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all border-2 border-green-200/50 hover:border-green-600">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg font-semibold text-slate-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MintsDeliveryBusinessModel;
