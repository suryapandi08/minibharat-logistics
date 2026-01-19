// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { 
//   Truck, 
//   Package, 
//   ShoppingCart, 
//   ArrowRight,
//   CheckCircle,
//   TrendingUp,
//   DollarSign,
//   Clock,
//   Shield,
//   Users,
//   Target
// } from "lucide-react";
// import courierImg from "@/assets/services/courier-services.jpg";
// import ecommerceImg from "@/assets/services/ecommerce-logistics.jpg";
// import warehouseImg from "@/assets/services/logistics-warehouse.jpg";
// import odh from "@/assets/services/sas-transport-min.jpg";


// import lastMileImg from "@/assets/service/1.png";
// import firstMileImg from "@/assets/service/2.png";
// import ownWarehouseImg from "@/assets/service/3.png";
// import odhWarehouseImg from "@/assets/service/4.png";
// import mdhWarehouseImg from "@/assets/service/5.png";
// import groceryWarehouseImg from "@/assets/service/6.png";
// import largeShipmentImg from "@/assets/service/7.png";
// import nonLargeImg from "@/assets/service/8.png";
// import fiveMinsImg from "@/assets/service/9.png";
// import minutesDeliveryImg from "@/assets/service/10.png";
// import lowValueImg from "@/assets/service/11.png";

// const Services = () => {
//   useEffect(() => {
//     document.title = "Business Models - Franchise Opportunities | Mini Bharat Logistics";
//     const metaDescription = document.querySelector('meta[name="description"]');
//     if (metaDescription) {
//       metaDescription.setAttribute('content', 'Explore Mini Bharat Logistics franchise business models: APM, Large HIH, and Grocery. Find the perfect franchise opportunity with assured volumes and transparent payouts.');
//     }
//   }, []);

//   const businessModels = [
// //     {
// //       id: "apm",
// //       title: "APM Business Model",
// //       icon: Truck,
// //       path: "/apm-business-model",
// //       image: courierImg,
// //       tagline: "Drive Seller Pickups & Returns, Earn Assured Profits",
// //       description: "The APM (All Products Movement) Model lets franchise partners manage seller pickups & returns for Mini Bharat Logistics. Get assured shipment allocations, transparent per-shipment earnings, and strong growth potential.",
// //       features: [
// //         "Assured Daily Volumes",
// //         "Transparent Rate Card",
// //         "Fast Delivery Timelines",
// //         "Quick Cash Flow"
// //       ],
// //       highlight: "₹6.6-14 Lakhs/month",
// //       badge: "Most Popular"
// //     },
// //     {
// //       id: "large-hih",
// //       title: "Large HIH Business Model",
// //       icon: Package,
// //       path: "/large-hih-business-model",
// //       image: warehouseImg,
// //       tagline: "Heavy Item Handling - Premium Logistics Franchise",
// //       description: "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
// //       features: [
// //         "Premium Seasonal Payouts",
// //         "Earn from Both Ways",
// //         "Assured Daily Volumes",
// //         "Two-Man Delivery Support"
// //       ],
// //       highlight: "₹8-16 Lakhs/month",
// //       badge: "High Revenue"
// //     },
// //     {
// //       id: "grocery",
// //       title: "Grocery Business Model",
// //       icon: ShoppingCart,
// //       path: "/grocery-business-model",
// //       image: ecommerceImg,
// //       tagline: "Flipkart-Backed Grocery Logistics Franchise",
// //       description: "Handle daily grocery deliveries with Flipkart-backed business model. Assured daily orders, multiple revenue streams from forward & reverse logistics, and fast ROI with everyday essentials.",
// //       features: [
// //         "Assured Daily Orders",
// //         "Stable Demand",
// //         "High Revenue Orders",
// //         "Multiple Revenue Streams"
// //       ],
// //       highlight: "₹10-20 Lakhs/month",
// //       badge: "Fast ROI"
// //     },
// //    {
// //   id: "ODH",
// //   title: "ODH/MDH Business Model",
// //   icon: Package,
// //   path: "/odh-mdh-business-model",
// //   image: odh,
// //   tagline: "Heavy Item Handling - Premium Logistics Franchise",
// //   description: "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
// //   features: [
// //     "Premium earnings per delivery",
// //     "Bidirectional delivery revenue",
// //     "Consistent daily shipment volumes",
// //     "Assistance from trained delivery personnel"
// //   ],
// //   highlight: "₹8-12 Lakhs/month potential",
// //   badge: "High Profit Franchise"
// // },
// // {
// //   id: "lma",
// //   title: "LMA – Vendor Business Model",
// //   icon: Truck,
// //   path: "/lma-business-model",
// //   image: ecommerceImg,
// //   tagline: "Flipkart-Backed Last-Mile Delivery Franchise",
// //   description:
// //     "Become an official LMA Franchise Partner with Mini Bharat Logistics. Get assured Flipkart shipment volumes, fixed per-shipment earning structure, dedicated pincode allocation, and guaranteed business flow with transparent payouts.",
// //   features: [
// //     "Assured Shipment Volumes",
// //     "Transparent Fixed Rate Card",
// //     "Forward & Reverse Deliveries",
// //     "Dedicated Pincode Allocation"
// //   ],
// //   highlight: "₹80,000 – ₹1.2 Lakhs/month",
// //   badge: "Assured Business"
// // }

// {
//     id: "last-mile",
//     title: "Last Mile Business Model",
//     image: lastMileImg,
//     path: "/last-mile-business-model",
//     tagline: "Final-stage delivery ensuring fast & accurate shipment delivery",
//     description:
//       "Final-stage delivery model ensuring fast and accurate shipment delivery to customers.",
//   },
//   {
//     id: "first-mile",
//     title: "First Mile Business Model",
//     image: firstMileImg,
//     path: "/first-mile-business-model",
//     tagline: "Pickup-based operations for efficient hub transfer",
//     description:
//       "Pickup-based operations helping brands move products from sellers to main hubs efficiently.",
//   },
//   {
//     id: "own-warehouse",
//     title: "Own Warehouse Business Model",
//     image: ownWarehouseImg,
//     path: "/own-warehouse-business-model",
//     tagline: "Operate your own warehouse with full control",
//     description:
//       "Operate your own warehouse with complete control, storage, sorting, and dispatch operations.",
//   },
//   {
//     id: "odh-warehouse",
//     title: "ODH Warehouse Business Model",
//     image: odhWarehouseImg,
//     path: "/odh-warehouse-business-model",
//     tagline: "Manage outbound dispatch & line-haul coordination",
//     description:
//       "Operate an ODH warehouse and manage outbound dispatch and line-haul coordination.",
//   },
//   {
//     id: "mdh-warehouse",
//     title: "MDH Warehouse Business Model",
//     image: mdhWarehouseImg,
//     path: "/mdh-warehouse-business-model",
//     tagline: "Handle inbound shipments & final distribution",
//     description:
//       "Run an MDH warehouse handling inbound shipments, sorting, storage, and final distribution.",
//   },
//   {
//     id: "grocery-warehouse",
//     title: "Grocery Warehouse Business Model",
//     image: groceryWarehouseImg,
//     path: "/grocery-warehouse-business-model",
//     tagline: "Fast-moving daily essentials & hyperlocal orders",
//     description:
//       "Grocery storage and dispatch model supporting fast-moving daily essentials and hyperlocal orders.",
//   },
//   {
//     id: "large-shipment",
//     title: "Large Shipment Warehouse Business Model",
//     image: largeShipmentImg,
//     path: "/large-shipment-warehouse-business-model",
//     tagline: "Specialized heavy & bulky shipment handling",
//     description:
//       "Manage large, heavy, and bulky shipment warehousing with specialized handling and equipment.",
//   },
//   {
//     id: "non-large",
//     title: "Non Large Warehouse Business Model",
//     image: nonLargeImg,
//     path: "/non-large-warehouse-business-model",
//     tagline: "Operate standard-sized shipment warehouses",
//     description:
//       "Operate a non-large warehouse for standard-sized shipments with high daily volumes.",
//   },
//   {
//     id: "5mins-delivery-warehouse",
//     title: "5 Mins Delivery Warehouse Business Model",
//     image: fiveMinsImg,
//     path: "/5mins-delivery-warehouse-business-model",
//     tagline: "Ultra-fast micro warehouse delivery",
//     description:
//       "Ultra-fast micro warehouse model enabling 5-minute delivery of essential goods to customers.",
//   },
//   {
//     id: "minutes-delivery",
//     title: "Mints Delivery Business Model",
//     image: minutesDeliveryImg,
//     path: "/minutes-delivery-business-model",
//     tagline: "Rapid high-speed shipment model",
//     description:
//       "A rapid delivery model ensuring high-speed shipments in minutes for hyperlocal zones.",
//   },
//   {
//     id: "low-value",
//     title: "Low Value Shipments Business Model",
//     image: lowValueImg,
//     path: "/low-value-shipments-business-model",
//     tagline: "High-volume, low-cost deliveries",
//     description:
//       "Model designed to manage high-volume, low-cost deliveries with maximum operational efficiency.",
//   },

//   // Original businessModels array
//   {
//     id: "apm",
//     title: "APM Business Model",
//     icon: Truck,
//     path: "/apm-business-model",
//     image: courierImg,
//     tagline: "Drive Seller Pickups & Returns, Earn Assured Profits",
//     description:
//       "The APM (All Products Movement) Model lets franchise partners manage seller pickups & returns for Mini Bharat Logistics. Get assured shipment allocations, transparent per-shipment earnings, and strong growth potential.",
//     features: ["Assured Daily Volumes", "Transparent Rate Card", "Fast Delivery Timelines", "Quick Cash Flow"],
//     highlight: "₹6.6-14 Lakhs/month",
//     badge: "Most Popular",
//   },
//   {
//     id: "large-hih",
//     title: "Large HIH Business Model",
//     icon: Package,
//     path: "/large-hih-business-model",
//     image: warehouseImg,
//     tagline: "Heavy Item Handling - Premium Logistics Franchise",
//     description:
//       "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
//     features: ["Premium Seasonal Payouts", "Earn from Both Ways", "Assured Daily Volumes", "Two-Man Delivery Support"],
//     highlight: "₹8-16 Lakhs/month",
//     badge: "High Revenue",
//   },
//   {
//     id: "grocery",
//     title: "Grocery Business Model",
//     icon: ShoppingCart,
//     path: "/grocery-business-model",
//     image: ecommerceImg,
//     tagline: "Flipkart-Backed Grocery Logistics Franchise",
//     description:
//       "Handle daily grocery deliveries with Flipkart-backed business model. Assured daily orders, multiple revenue streams from forward & reverse logistics, and fast ROI with everyday essentials.",
//     features: ["Assured Daily Orders", "Stable Demand", "High Revenue Orders", "Multiple Revenue Streams"],
//     highlight: "₹10-20 Lakhs/month",
//     badge: "Fast ROI",
//   },
//   {
//     id: "ODH",
//     title: "ODH/MDH Business Model",
//     icon: Package,
//     path: "/odh-mdh-business-model",
//     image: odh,
//     tagline: "Heavy Item Handling - Premium Logistics Franchise",
//     description:
//       "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
//     features: [
//       "Premium earnings per delivery",
//       "Bidirectional delivery revenue",
//       "Consistent daily shipment volumes",
//       "Assistance from trained delivery personnel",
//     ],
//     highlight: "₹8-12 Lakhs/month potential",
//     badge: "High Profit Franchise",
//   },
//   {
//     id: "lma",
//     title: "LMA – Vendor Business Model",
//     icon: Truck,
//     path: "/lma-business-model",
//     image: ecommerceImg,
//     tagline: "Flipkart-Backed Last-Mile Delivery Franchise",
//     description:
//       "Become an official LMA Franchise Partner with Mini Bharat Logistics. Get assured Flipkart shipment volumes, fixed per-shipment earning structure, dedicated pincode allocation, and guaranteed business flow with transparent payouts.",
//     features: ["Assured Shipment Volumes", "Transparent Fixed Rate Card", "Forward & Reverse Deliveries", "Dedicated Pincode Allocation"],
//     highlight: "₹80,000 – ₹1.2 Lakhs/month",
//     badge: "Assured Business",
//   },

//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       <Header />
      
//       {/* Hero Section - Light & Professional */}
//       <section className="relative py-12 md:py-20 lg:py-24 px-4 overflow-hidden bg-white">
//         <div className="container mx-auto max-w-7xl relative z-10">
//           <div className="text-center mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             <Badge className="mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 text-xs font-semibold bg-orange-50 text-[hsl(var(--orange-primary))] border border-orange-200">
//               FRANCHISE OPPORTUNITIES
//             </Badge>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-slate-900 leading-tight px-4">
//               Choose Your
//               <span className="block text-[hsl(var(--orange-primary))]">Business Model</span>
//             </h1>
//             <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
//               Three proven franchise models designed for different markets and investment levels
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Business Models - Clean Card Layout */}
//       <section className="py-8 md:py-12 lg:py-20 px-4 bg-white">
//         <div className="container mx-auto max-w-7xl">
//           {businessModels.map((model, idx) => {
//             const IconComponent = model.icon;
//             const isEven = idx % 2 === 0;
            
//             return (
//               <div 
//                 key={model.id}
//                 className="mb-8 md:mb-12 lg:mb-16 last:mb-0"
//               >
//                 <Card className="overflow-hidden border-2 border-slate-200 hover:border-[hsl(var(--orange-primary))]/30 transition-all duration-300 hover:shadow-xl">
//                   <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
//                     {/* Image Side */}
//                     <div className={`relative overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
//                       <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
//                         <Badge className="px-3 md:px-4 py-1 md:py-1.5 text-xs font-bold bg-white/95 text-[hsl(var(--orange-primary))] border-0 shadow-lg backdrop-blur-sm">
//                           {model.badge}
//                         </Badge>
//                       </div>
//                       <AspectRatio ratio={16/9}>
//                         <img 
//                           src={model.image} 
//                           alt={model.title}
//                           className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700"
//                         />
//                       </AspectRatio>
//                     </div>
                    
//                     {/* Content Side */}
//                     <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
//                       {/* Icon & Title */}
//                       <div className="flex items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
//                         <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[hsl(var(--orange-primary))]/10 flex items-center justify-center flex-shrink-0">
//                           <IconComponent className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[hsl(var(--orange-primary))]" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 break-words">
//                             {model.title}
//                           </h2>
//                           <p className="text-xs sm:text-sm font-semibold text-[hsl(var(--orange-primary))] break-words">
//                             {model.tagline}
//                           </p>
//                         </div>
//                       </div>
                      
//                       {/* Description */}
//                       <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 md:mb-6">
//                         {model.description}
//                       </p>
                      
//                       {/* Features Grid */}
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
//                         {model.features.map((feature, index) => (
//                           <div key={index} className="flex items-center gap-2">
//                             <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                             <span className="text-xs md:text-sm text-slate-700">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
                      
//                       {/* Earning Highlight */}
//                       <div className="bg-slate-50 p-4 md:p-5 rounded-xl mb-4 md:mb-6 border border-slate-200">
//                         <div className="flex items-center justify-between gap-3">
//                           <div className="flex-1 min-w-0">
//                             <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
//                               Monthly Earning Potential
//                             </p>
//                             <p className="text-2xl md:text-3xl font-black text-[hsl(var(--orange-primary))] break-words">
//                               {model.highlight}
//                             </p>
//                           </div>
//                           <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[hsl(var(--orange-primary))]/20 flex-shrink-0" />
//                         </div>
//                       </div>
                      
//                       {/* CTA Button */}
//                       <Link to={model.path} className="block w-full">
//                         <Button 
//                           className="w-full bg-[hsl(var(--orange-primary))] hover:bg-[hsl(var(--orange-dark))] text-white font-semibold rounded-lg group"
//                           size="lg"
//                         >
//                           Explore Full Details
//                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Why Partner Section - Light Theme */}
//       <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
//               Why Partner With <span className="text-[hsl(var(--orange-primary))]">Mini Bharat</span>?
//             </h2>
//             <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
//               Industry-leading benefits designed to accelerate your success
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//             {[
//               { icon: TrendingUp, title: "High ROI", desc: "12-18 month payback with scalable income" },
//               { icon: Package, title: "Assured Volumes", desc: "Guaranteed daily shipments" },
//               { icon: Shield, title: "Transparent Payouts", desc: "Clear rates & timely settlements" },
//               { icon: Users, title: "24/7 Support", desc: "Comprehensive assistance" }
//             ].map((item, idx) => (
//               <Card 
//                 key={idx}
//                 className="p-5 md:p-6 text-center border-2 border-slate-200 hover:border-[hsl(var(--orange-primary))]/30 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--orange-primary))]/10 to-[hsl(var(--orange-primary))]/5 flex items-center justify-center mx-auto mb-3 md:mb-4">
//                   <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[hsl(var(--orange-primary))]" />
//                 </div>
//                 <h3 className="font-bold text-slate-900 mb-2 text-base md:text-lg">{item.title}</h3>
//                 <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Services;



import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Package, Truck, ShoppingCart, Users, Shield, ArrowRight } from "lucide-react";

import courierImg from "@/assets/services/courier-services.jpg";
import ecommerceImg from "@/assets/services/ecommerce-logistics.jpg";
import warehouseImg from "@/assets/services/logistics-warehouse.jpg";
import odh from "@/assets/services/sas-transport-min.jpg";

import lastMileImg from "@/assets/service/1.png";
import firstMileImg from "@/assets/service/2.png";
import ownWarehouseImg from "@/assets/service/3.png";
import odhWarehouseImg from "@/assets/service/4.png";
import mdhWarehouseImg from "@/assets/service/5.png";
import groceryWarehouseImg from "@/assets/service/6.png";
import largeShipmentImg from "@/assets/service/7.png";
import nonLargeImg from "@/assets/service/8.png";
import fiveMinsImg from "@/assets/service/9.png";
import minutesDeliveryImg from "@/assets/service/10.png";
import lowValueImg from "@/assets/service/11.png";

const Services = () => {
  useEffect(() => {
    document.title = "Business Models - Franchise Opportunities | Mini Bharat Logistics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Mini Bharat Logistics franchise business models: APM, Large HIH, and Grocery. Find the perfect franchise opportunity with assured volumes and transparent payouts.');
    }
  }, []);

  const businessModels = [
{
    id: "last-mile",
    title: "Last Mile Business Model",
    icon: Truck,
    path: "/last-mile-business-model",
    image: lastMileImg,
    tagline: "Final-stage delivery ensuring fast & accurate shipment delivery",
    description: "Final-stage delivery model ensuring fast and accurate shipment delivery to customers.",
    features: ["Fast & Accurate Delivery", "Customer Satisfaction Focused", "Optimized Routes", "High Volume Shipments"],
    highlight: "₹2-5 Lakhs/month",
    badge: "Popular Choice"
  },
  {
    id: "first-mile",
    title: "First Mile Business Model",
    icon: Truck,
    path: "/first-mile-business-model",
    image: firstMileImg,
    tagline: "Pickup-based operations for efficient hub transfer",
    description: "Pickup-based operations helping brands move products from sellers to main hubs efficiently.",
    features: ["Efficient Pickup Operations", "Timely Hub Transfers", "Dedicated Support", "Scalable Operations"],
    highlight: "₹1.5-4 Lakhs/month",
    badge: "High Demand"
  },
  {
    id: "own-warehouse",
    title: "Own Warehouse Business Model",
    icon: Package,
    path: "/own-warehouse-business-model",
    image: ownWarehouseImg,
    tagline: "Operate your own warehouse with full control",
    description: "Operate your own warehouse with complete control, storage, sorting, and dispatch operations.",
    features: ["Full Control", "Efficient Storage & Sorting", "Dispatch Management", "High Capacity Handling"],
    highlight: "₹5-10 Lakhs/month",
    badge: "Premium Model"
  },
  {
    id: "odh-warehouse",
    title: "ODH Warehouse Business Model",
    icon: Package,
    path: "/odh-business-model",
    image: odhWarehouseImg,
    tagline: "Manage outbound dispatch & line-haul coordination",
    description: "Operate an ODH warehouse and manage outbound dispatch and line-haul coordination.",
    features: ["Outbound Dispatch", "Line-Haul Management", "High Value Shipment Handling", "Dedicated Support"],
    highlight: "₹4-8 Lakhs/month",
    badge: "High Efficiency"
  },
  {
    id: "mdh-warehouse",
    title: "MDH Warehouse Business Model",
    icon: Package,
    path: "/mdh-business-model",
    image: mdhWarehouseImg,
    tagline: "Handle inbound shipments & final distribution",
    description: "Run an MDH warehouse handling inbound shipments, sorting, storage, and final distribution.",
    features: ["Inbound Shipment Handling", "Sorting & Storage", "Final Delivery Coordination", "Optimized Workflow"],
    highlight: "₹3-7 Lakhs/month",
    badge: "Reliable Operations"
  },
  {
    id: "grocery-warehouse",
    title: "Grocery Warehouse Business Model",
    icon: ShoppingCart,
    path: "/grocery-business-model",
    image: groceryWarehouseImg,
    tagline: "Fast-moving daily essentials & hyperlocal orders",
    description: "Grocery storage and dispatch model supporting fast-moving daily essentials and hyperlocal orders.",
    features: ["High Daily Orders", "Fast Dispatch", "Hyperlocal Coverage", "Stable Demand"],
    highlight: "₹6-12 Lakhs/month",
    badge: "Fast ROI"
  },
  {
    id: "large-shipment",
    title: "Large Shipment Warehouse Business Model",
    icon: Package,
    path: "/large-shipment-warehouse-business-model",
    image: largeShipmentImg,
    tagline: "Specialized heavy & bulky shipment handling",
    description: "Manage large, heavy, and bulky shipment warehousing with specialized handling and equipment.",
    features: ["Heavy Item Handling", "Specialized Equipment", "Premium Payouts", "Safety Compliance"],
    highlight: "₹8-15 Lakhs/month",
    badge: "High Revenue"
  },
  {
    id: "non-large",
    title: "Non Large Warehouse Business Model",
    icon: Package,
    path: "/non-large-warehouse-business-model",
    image: nonLargeImg,
    tagline: "Operate standard-sized shipment warehouses",
    description: "Operate a non-large warehouse for standard-sized shipments with high daily volumes.",
    features: ["Standard Item Handling", "High Daily Volumes", "Efficient Storage", "Quick Dispatch"],
    highlight: "₹3-6 Lakhs/month",
    badge: "Steady Income"
  },
  {
    id: "5mins-delivery-warehouse",
    title: "5 Mins Delivery Warehouse Business Model",
    icon: Truck,
    path: "/5mins-delivery-warehouse-business-model",
    image: fiveMinsImg,
    tagline: "Ultra-fast micro warehouse delivery",
    description: "Ultra-fast micro warehouse model enabling 5-minute delivery of essential goods to customers.",
    features: ["Ultra-Fast Delivery", "Micro-Warehouse Setup", "High Customer Satisfaction", "Optimized Routes"],
    highlight: "₹2-4 Lakhs/month",
    badge: "Quick Delivery"
  },
  {
    id: "minutes-delivery",
    title: "Mints Delivery Business Model",
    icon: Truck,
    path: "/mints-delivery-business-model",
    image: minutesDeliveryImg,
    tagline: "Rapid high-speed shipment model",
    description: "A rapid delivery model ensuring high-speed shipments in minutes for hyperlocal zones.",
    features: ["High-Speed Shipments", "Hyperlocal Zones", "Optimized Delivery", "Customer-Centric"],
    highlight: "₹2-5 Lakhs/month",
    badge: "Rapid Model"
  },
  {
    id: "low-value",
    title: "Low Value Shipments Business Model",
    icon: Truck,
    path: "/low-value-shipments-business-model",
    image: lowValueImg,
    tagline: "High-volume, low-cost deliveries",
    description: "Model designed to manage high-volume, low-cost deliveries with maximum operational efficiency.",
    features: ["High Volume", "Low-Cost", "Efficient Operations", "Scalable Business"],
    highlight: "₹1.5-3 Lakhs/month",
    badge: "Volume Focused"
  },
    // Classic Business Models
    // {
    //   id: "apm",
    //   title: "APM Business Model",
    //   icon: Truck,
    //   path: "/apm-business-model",
    //   image: courierImg,
    //   tagline: "Drive Seller Pickups & Returns, Earn Assured Profits",
    //   description: "The APM (All Products Movement) Model lets franchise partners manage seller pickups & returns for Mini Bharat Logistics. Get assured shipment allocations, transparent per-shipment earnings, and strong growth potential.",
    //   features: ["Assured Daily Volumes", "Transparent Rate Card", "Fast Delivery Timelines", "Quick Cash Flow"],
    //   highlight: "₹6.6-14 Lakhs/month",
    //   badge: "Most Popular",
    // },
    // {
    //   id: "large-hih",
    //   title: "Large HIH Business Model",
    //   icon: Package,
    //   path: "/large-hih-business-model",
    //   image: warehouseImg,
    //   tagline: "Heavy Item Handling - Premium Logistics Franchise",
    //   description: "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
    //   features: ["Premium Seasonal Payouts", "Earn from Both Ways", "Assured Daily Volumes", "Two-Man Delivery Support"],
    //   highlight: "₹8-16 Lakhs/month",
    //   badge: "High Revenue",
    // },
    // {
    //   id: "grocery",
    //   title: "Grocery Business Model",
    //   icon: ShoppingCart,
    //   path: "/grocery-business-model",
    //   image: ecommerceImg,
    //   tagline: "Flipkart-Backed Grocery Logistics Franchise",
    //   description: "Handle daily grocery deliveries with Flipkart-backed business model. Assured daily orders, multiple revenue streams from forward & reverse logistics, and fast ROI with everyday essentials.",
    //   features: ["Assured Daily Orders", "Stable Demand", "High Revenue Orders", "Multiple Revenue Streams"],
    //   highlight: "₹10-20 Lakhs/month",
    //   badge: "Fast ROI",
    // },
    // {
    //   id: "ODH",
    //   title: "ODH/MDH Business Model",
    //   icon: Package,
    //   path: "/odh-mdh-business-model",
    //   image: odh,
    //   tagline: "Heavy Item Handling - Premium Logistics Franchise",
    //   description: "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
    //   features: ["Premium earnings per delivery", "Bidirectional delivery revenue", "Consistent daily shipment volumes", "Assistance from trained delivery personnel"],
    //   highlight: "₹8-12 Lakhs/month potential",
    //   badge: "High Profit Franchise",
    // },
    // {
    //   id: "lma",
    //   title: "LMA – Vendor Business Model",
    //   icon: Truck,
    //   path: "/lma-business-model",
    //   image: ecommerceImg,
    //   tagline: "Flipkart-Backed Last-Mile Delivery Franchise",
    //   description: "Become an official LMA Franchise Partner with Mini Bharat Logistics. Get assured Flipkart shipment volumes, fixed per-shipment earning structure, dedicated pincode allocation, and guaranteed business flow with transparent payouts.",
    //   features: ["Assured Shipment Volumes", "Transparent Fixed Rate Card", "Forward & Reverse Deliveries", "Dedicated Pincode Allocation"],
    //   highlight: "₹80,000 – ₹1.2 Lakhs/month",
    //   badge: "Assured Business",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24 px-4 overflow-hidden bg-white">
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <Badge className="mb-4 px-4 py-1.5 text-xs font-semibold bg-orange-50 text-[hsl(var(--orange-primary))] border border-orange-200">
            FRANCHISE OPPORTUNITIES
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900 leading-tight">
            Choose Your <span className="block text-[hsl(var(--orange-primary))]">Business Model</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Multiple proven franchise models designed for different markets and investment levels
          </p>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-8 md:py-12 lg:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {businessModels.map((model, idx) => {
            const IconComponent = model.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={model.id} className="mb-8 md:mb-12 lg:mb-16 last:mb-0">
                <Card className="overflow-hidden border-2 border-slate-200 hover:border-[hsl(var(--orange-primary))]/30 transition-all duration-300 hover:shadow-xl">
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${!isEven ? "lg:col-start-2" : ""}`}>
                      {model.badge && (
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                          <Badge className="px-3 md:px-4 py-1 md:py-1.5 text-xs font-bold bg-white/95 text-[hsl(var(--orange-primary))] border-0 shadow-lg backdrop-blur-sm">
                            {model.badge}
                          </Badge>
                        </div>
                      )}
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={model.image}
                          alt={model.title}
                          className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700"
                        />
                      </AspectRatio>
                    </div>

                    {/* Content */}
                    <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      {IconComponent && (
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[hsl(var(--orange-primary))]/10 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-[hsl(var(--orange-primary))]" />
                          </div>
                        </div>
                      )}
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">{model.title}</h2>
                      <p className="text-xs sm:text-sm font-semibold text-[hsl(var(--orange-primary))] mb-4">{model.tagline}</p>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">{model.description}</p>

                      {model.features?.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4">
                          {model.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-xs md:text-sm text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {model.highlight && (
                        <div className="bg-slate-50 p-4 md:p-5 rounded-xl mb-4 border border-slate-200">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                                Monthly Earning Potential
                              </p>
                              <p className="text-2xl md:text-3xl font-black text-[hsl(var(--orange-primary))]">{model.highlight}</p>
                            </div>
                            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[hsl(var(--orange-primary))]/20 flex-shrink-0" />
                          </div>
                        </div>
                      )}

                      <Link to={model.path} className="block w-full">
                        <Button
                          className="w-full bg-[hsl(var(--orange-primary))] hover:bg-[hsl(var(--orange-dark))] text-white font-semibold rounded-lg group"
                          size="lg"
                        >
                          Explore Full Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
            Why Partner With <span className="text-[hsl(var(--orange-primary))]">Mini Bharat</span>?
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-leading benefits designed to accelerate your success
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            {[
              { icon: TrendingUp, title: "High ROI", desc: "12-18 month payback with scalable income" },
              { icon: Package, title: "Assured Volumes", desc: "Guaranteed daily shipments" },
              { icon: Shield, title: "Transparent Payouts", desc: "Clear rates & timely settlements" },
              { icon: Users, title: "24/7 Support", desc: "Comprehensive assistance" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-5 md:p-6 text-center border-2 border-slate-200 hover:border-[hsl(var(--orange-primary))]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--orange-primary))]/10 to-[hsl(var(--orange-primary))]/5 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[hsl(var(--orange-primary))]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base md:text-lg">{item.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
