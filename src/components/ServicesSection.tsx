import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import courierImg from "@/assets/services/courier-services.jpg";
import warehouseImg from "@/assets/large-hih-warehouse.jpg";
import ecommerceImg from "@/assets/services/ecommerce-logistics.jpg";
import odh from "@/assets/services/sas-transport-min.jpg";
import grocery from "@/assets/grocery-warehouse.jpg";
import lmaImg from "@/assets/services/Untitled design (100).png";
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



const ServicesSection = () => {
//   const services = [
//     {
//       id: "apm",
//       title: "APM Business Model",
//       image: courierImg,
//       description: "All Products Movement - Complete logistics solution for handling all types of products with efficiency and care.",
//       link: "/apm-business-model"
//     },
//     {
//       id: "large-hih",
//       title: "Large HIH Business Model",
//       image: warehouseImg,
//       description: "Large Heavy Item Handling - Specialized services for managing and transporting large, heavy items safely.",
//       link: "/large-hih-business-model"
//     },
//     {
//       id: "grocery",
//       title: "Grocery Business Model",
//       image: grocery,
//       description: "Flipkart-backed grocery delivery franchise opportunity with proven systems and support.",
//       link: "/grocery-business-model"
//     },

//     {
//   id: "odh-mdh",
//   title: "ODH/MDH Business Model",
//   image: odh,                         // or a string '/assets/..' if using public folder
//   description: "Run your own Flipkart-backed delivery hub franchise with assured business, transparent earnings, and high growth potential.",
//   link: "/odh-mdh-business-model"
// },
// {
//   id: "lma",
//   title: "LMA – Vendor Business Model",
//   image:lmaImg ,   // replace with correct image (ex: lmaImg) if available
//   description:
//     "Assured Flipkart shipment volumes, fixed per-shipment earnings, dedicated pincode allocation, and transparent payouts for stable franchise growth.",
//   link: "/lma-business-model"
// },


//   ];
const services = [
  {
    id: "last-mile",
    title: "Last Mile Business Model",
    image: lastMileImg,
    description: "Final-stage delivery model ensuring fast and accurate shipment delivery to customers.",
    link: "/last-mile-business-model"
  },
  {
    id: "first-mile",
    title: "First Mile Business Model",
    image: firstMileImg,
    description: "Pickup-based operations helping brands move products from sellers to main hubs efficiently.",
    link: "/first-mile-business-model"
  },
  {
    id: "own-warehouse",
    title: "Own Warehouse Business Model",
    image: ownWarehouseImg,
    description: "Operate your own warehouse with complete co ntrol, storage, sorting, and dispatch operations.",
    link: "/own-warehouse-business-model"
  },
  {
    id: "odh-warehouse",
    title: "ODH Warehouse Business Model",
    image: odhWarehouseImg,
    description: "Operate an ODH warehouse and manage outbound dispatch and line-haul coordination.",
    link: "/odh-warehouse-business-model"
  },
  {
    id: "mdh-warehouse",
    title: "MDH Warehouse Business Model",
    image: mdhWarehouseImg,
    description: "Run an MDH warehouse handling inbound shipments, sorting, storage, and final distribution.",
    link: "/mdh-warehouse-business-model"
  },
  {
    id: "grocery-warehouse",
    title: "Grocery Warehouse Business Model",
    image: groceryWarehouseImg,
    description: "Grocery storage and dispatch model supporting fast-moving daily essentials and hyperlocal orders.",
    link: "/grocery-warehouse-business-model"
  },
  {
    id: "large-shipment",
    title: "Large Shipment Warehouse Business Model",
    image: largeShipmentImg,
    description: "Manage large, heavy, and bulky shipment warehousing with specialized handling and equipment.",
    link: "/large-shipment-warehouse-business-model"
  },
  {
    id: "non-large",
    title: "Non Large Warehouse Business Model",
    image: nonLargeImg,
    description: "Operate a non-large warehouse for standard-sized shipments with high daily volumes.",
    link: "/non-large-warehouse-business-model"
  },
  {
    id: "5mins-delivery-warehouse",
    title: "5 Mins Delivery Warehouse Business Model",
    image: fiveMinsImg,
    description: "Ultra-fast micro warehouse model enabling 5-minute delivery of essential goods to customers.",
    link: "/5mins-delivery-warehouse-business-model"
  },
  {
    id: "minutes-delivery",
    title: "Mints Delivery Business Model",
    image: minutesDeliveryImg,
    description: "A rapid delivery model ensuring high-speed shipments in minutes for hyperlocal zones.",
    link: "/minutes-delivery-business-model"
  },
  {
    id: "low-value",
    title: "Low Value Shipments Business Model",
    image: lowValueImg,
    description: "Model designed to manage high-volume, low-cost deliveries with maximum operational efficiency.",
    link: "/low-value-shipments-business-model"
  }
];


  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-primary text-sm font-semibold mb-6">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our franchise business models designed for success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            return (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </AspectRatio>
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6 md:p-8">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link to={service.link}>
                    <Button 
                      variant="default" 
                      className="w-full group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;