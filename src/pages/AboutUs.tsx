import { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Eye, Users, Zap, Lightbulb, MapPin, Building2, Truck, Globe, Award, Target, Cpu, Rocket, Settings, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndiaMap from "@/components/IndiaMap";
import warehouseInterior from "@/assets/warehouse-interior.jpg";
import modern from "@/assets/services/modern2.jpg";
import new1 from "@/assets/hero-logistics.jpg";
import office1 from "@/assets/gallery/Office/office2.jpg";
import office2 from "@/assets/gallery/Office/office3.jpg";
import cel2 from "@/assets/gallery/Celebrations/img1.jpg";
import cel3 from "@/assets/gallery/Celebrations/img3.jpg";
import trip1 from "@/assets/gallery/Trips/trip1.jpg";
import trip2 from "@/assets/gallery/Trips/trip2.jpg";
import award1 from "@/assets/award-team/1.png";
import award2 from "@/assets/award-team/2.png";
import award3 from "@/assets/award-team/3.png";
import award4 from "@/assets/award-team/4.png";
import award5 from "@/assets/award-team/5.png";
import award6 from "@/assets/award-team/6.png";
import award7 from "@/assets/award-team/7.png";
import award8 from "@/assets/award-team/8.png";
import fun from "@/assets/gallery/Trips/fun.png";

// Core + modules
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// React components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register modules
SwiperCore.use([Navigation, Pagination, Autoplay]);





const AboutUs = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([0, 0, 0, 0]);

  // Set page title and meta description
  useEffect(() => {
    document.title = "AboutUs | Latest Logistics Insights - Minibharat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Stay updated with latest logistics industry trends, insights, and news from Minibharat. Expert articles on supply chain, delivery solutions, and business growth.'
      );
    }
  }, []);

  // Animate Pan-India numbers
  useEffect(() => {
    const targets = [120, 22, 6500, 4000000]; // Cities, States, Riders, Daily Shipments
    const durations = [2000, 2000, 2000, 2000]; // Duration for each
    const startTime = performance.now();

    const animate = (time: number) => {
      const newNumbers = targets.map((target, index) => {
        const progress = Math.min((time - startTime) / durations[index], 1);
        return Math.floor(progress * target);
      });
      setAnimatedNumbers(newNumbers);

      if (newNumbers.some((num, i) => num < targets[i])) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const coreValues = [
    { icon: Shield, title: "Reliability", description: "We deliver on our promise — every time. Consistency, safety, and punctuality define our operations. Customers count on us because we treat every shipment with the importance it deserves." },
    { icon: Lightbulb, title: "Innovation", description: "Technology powers our progress. From real-time tracking to automated routing and digital workflows, we constantly adopt smarter tools to make logistics faster, simpler, and more transparent." },
    { icon: Users, title: "Partnership", description: "We grow together. Our success is built on strong relationships — with customers, franchise partners, transport teams, and communities. We support our partners with training, insights, and opportunities to thrive." },
    { icon: Heart, title: "Integrity", description: "Honesty and transparency guide every action. We believe trust is earned through clear communication, ethical practices, and accountability at every level of our organization." },
    { icon: Rocket, title: "Customer First", description: "Your needs shape our services. From pickup to final delivery, we prioritize customer satisfaction with responsive support, real-time updates, and a seamless experience." },
    { icon: Zap, title: "Continuous Improvement", description: "We never stop evolving. Every feedback, challenge, and delivery helps us improve. We refine processes, upgrade technology, and expand our network to serve India better every day." }
  ];

  const logisticsValues = [
    { icon: Truck, title: "Reliable & On-Time Deliveries", description: "To ensure every shipment — big or small — reaches its destination safely, quickly, and consistently." },
    { icon: Lightbulb, title: "Technology That Drives Efficiency", description: "To integrate smart systems, live tracking, automation, and data-driven processes that make logistics simpler and smarter for everyone." },
    { icon: Globe, title: "Pan-India Connectivity", description: "To reach every corner of India — connecting cities, towns, rural areas, and emerging markets through a unified logistics network." },
    { icon: Users, title: "Empowering Franchise Partners", description: "To create sustainable business opportunities by offering franchise partners strong support, training, and a proven model for long-term growth." },
    { icon: Heart, title: "Customer-First Experience", description: "To ensure transparency, integrity, and satisfaction at every touchpoint — from booking to delivery." }
  ];

  const visionHighlights = [
    { icon: Rocket, title: "Technology-Driven", description: "A future where intelligent systems, automation, and real-time visibility make logistics faster, safer, and fully transparent." },
    { icon: Globe, title: "Borderless & Accessible", description: "Every city, village, and business — no matter how small — should have equal access to reliable logistics services that support growth and opportunity." },
    { icon: Settings, title: "Efficient & Sustainable", description: "We aspire to build India’s most optimized logistics network, powered by smart route planning, eco-friendly initiatives, and operational excellence." },
    { icon: Users, title: "Empowering Entrepreneurs", description: "Our vision includes a thriving franchise and partner network that creates business opportunities and financial independence for thousands of aspiring entrepreneurs across India." },
    { icon: Trophy, title: "Trusted Nationwide", description: "We strive to become India’s most trusted logistics brand, recognized for integrity, reliability, and a customer-first approach at every touchpoint." }
  ];

  const milestones = [
    { year: "2015", event: "Founded with a vision", description: "Started to simplify and empower Indian logistics", details: ["Xpressbees starts delivering 90,000 shipments a day", "First in the nation to introduce next day delivery"] },
    { year: "2017", event: "100+ cities expansion", description: "Tech-enabled last-mile delivery across India", details: ["Tech-enabled last-mile delivery across India", "Expanded to 100+ cities with advanced tracking"] },
    { year: "2019", event: "500+ logistics centers", description: "Crossed nationwide coverage milestone", details: ["Crossed nationwide coverage milestone", "Established 500+ strategic logistics centers"] },
    { year: "2021", event: "10,000+ pin codes", description: "Reached comprehensive serviceable locations", details: ["Reached comprehensive serviceable locations", "Coverage expanded to 10,000+ pin codes"] },
    { year: "2022", event: "Automated distribution", description: "Major centers opened in key metros", details: ["Major automated centers opened in key metros", "Introduced AI-powered sorting and distribution"] },
    { year: "2023", event: "Top logistics tech", description: "Recognized among India's leading companies", details: ["Recognized among India's leading logistics companies", "Advanced tech solutions and sustainable practices"] },
    { year: "2025", event: "Nationwide leadership", description: "Achieved industry leadership in speed and reliability", details: ["Serving 15,000+ pin codes with consistent delivery excellence", "Expanded workforce to 15,000+ staff and delivery partners", "Implemented next-gen AI logistics for smarter deliveries"] }
  ];

  const networkData = [
    { region: "Cities", centers: "120+", color: "text-orange-500", bgColor: "bg-orange-500/20", borderColor: "border-orange-500", mapColor: "#f97316" },
    { region: "States", centers: "22", color: "text-blue-500", bgColor: "bg-blue-500/20", borderColor: "border-blue-500", mapColor: "#3b82f6" },
    { region: "Riders", centers: "6500+", color: "text-red-500", bgColor: "bg-red-500/20", borderColor: "border-red-500", mapColor: "#ef4444" },
    { region: "Daily Shipments", centers: "40,00,000+", color: "text-cyan-500", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-500", mapColor: "#06b6d4" }
  ];

  const leadership = [
    { name: "Rajesh Kumar", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
    { name: "Priya Sharma", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=400&h=400&fit=crop&crop=face" },
    { name: "Amit Singh", role: "Chief Operations Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { name: "Sneha Gupta", role: "Head of Marketing", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
    { name: "Vikram Patel", role: "Head of Sales", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
    { name: "Meera Joshi", role: "Head of Human Resources", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face" },
    { name: "Arjun Reddy", role: "Head of Finance", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face" },
    { name: "Kavya Nair", role: "Head of Customer Success", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" }
  ];




  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Our Story Hero Section */}
      


      

  <section className="pt-24 pb-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
  <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-bold">
    <span className="text-orange-primary">About</span>{' '}
    <span className="text-foreground">Us</span>
  </h2>
  </div>


    {/* Background Decoration */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-blue-500/5 to-orange-primary/5 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* FIRST BLOCK */}
      <div className="space-y-6 animate-fade-in">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
          <div className="w-2 h-2 bg-orange-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-orange-600">Since 2015</span>
        </div>

      </div>

      {/* FIRST PARAGRAPH */}
      <div className="space-y-6 text-muted-foreground leading-relaxed mt-8">
        <p className="text-xl font-light">
          <span className="font-semibold text-foreground">Mini Bharat Courier & Logistics Service</span>, was established in 2023 with the Corporate Identification Number (CIN) 
          <span className="font-medium text-orange-primary"> U53200TZ2024PTC030847</span>. 
          Our PAN number is <span className="font-medium text-orange-primary">AARCM8668E</span>, TAN is 
          <span className="font-medium text-orange-primary"> CHEM29196G</span>, and GST number is 
          <span className="font-medium text-orange-primary"> 33AARCM8668E1ZY</span>. 
          As a proprietorship courier brand, we operate over 60 franchise stores nationwide and are recognized as India’s fastest-growing online e-commerce delivery network with zonal offices spanning the country, based in Tamil Nadu with hubs in Mumbai, Hyderabad, and Haryana.
        </p>
      </div>

      {/* SECOND BLOCK – IMAGE LEFT + CONTENT RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16 animate-fade-in">

        {/* IMAGE LEFT */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-primary/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
   <Swiper
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
>
  <SwiperSlide>
    <img src={modern} alt="Modern Logistics" className="w-full h-[400px] object-cover rounded-2xl" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={warehouseInterior} alt="Warehouse Interior" className="w-full h-[400px] object-cover rounded-2xl" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={new1} alt="Logistics Hero" className="w-full h-[400px] object-cover rounded-2xl" />
  </SwiperSlide>
</Swiper>



            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-foreground">India-Wide Network</h3>
                  <p className="text-sm text-muted-foreground">Connecting businesses and customers</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT RIGHT */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">

          {/* Heading + Subtitle */}
          <div className="space-y-4">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-snug">
              Delivering
              <span className="bg-gradient-to-r from-orange-primary to-orange-600 bg-clip-text text-transparent block">
                Trust, Technology & Growth Across India
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light">
              At Mini Bharat Logistics, our journey began with a simple belief — 
              India deserves logistics that are fast, transparent, reliable, and accessible to everyone.
            </p>

          </div>

          <p>
            From a small team with a big vision to a rapidly expanding logistics network, 
            Mini Bharat Logistics has grown into a trusted brand that powers thousands of deliveries daily across India.
          </p>

          <p>
            We connect cities, businesses, and people with an unwavering commitment to reliability, speed, and excellence.
          </p>

          <p className="font-medium text-foreground">
            Our mission is not just to transport packages — 
            <span className="text-orange-primary font-bold"> we carry opportunities, dreams, and the spirit of Bharat across every mile.</span>
          </p>

        </div>

      </div>

    </div>
  </section>





<section className="py-12 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">

  {/* Soft Gradient Blobs */}
  <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full blur-3xl opacity-60"></div>
  <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full blur-3xl opacity-60"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Title */}
    <h2 className="text-4xl md:text-6xl font-extrabold text-orange-primary text-center text-foreground mb-12 tracking-tight animate-fade-in">
      Our Story
    </h2>

    {/* Description */}
    <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
      <p>
        India’s logistics ecosystem has always demanded smarter, faster, and more reliable solutions. 
        From inconsistent delivery timelines to fragmented service providers—businesses needed a 
        partner they could trust.
      </p>

      <p>
        That’s where 
        <span className="font-bold text-orange-primary"> Mini Bharat Logistics </span> 
        was born—built with a vision to redefine logistics through technology, transparency, 
        and a nationwide support network.
      </p>
    </div>

    {/* Subtitle */}
    <h3 className="text-3xl md:text-5xl font-bold text-orange-primary text-center text-foreground mt-24 mb-12 animate-fade-in">
      Today, we operate with:
    </h3>

    {/* Modern Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
      
      <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <span className="text-orange-primary text-3xl">🚚</span>
        <p className="text-muted-foreground text-lg">A rapidly expanding pan-India logistics network</p>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <span className="text-blue-500 text-3xl">📡</span>
        <p className="text-muted-foreground text-lg">Real-time, technology-driven tracking systems</p>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <span className="text-orange-primary text-3xl">🤝</span>
        <p className="text-muted-foreground text-lg">A growing community of franchise and delivery partners</p>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
        <span className="text-blue-500 text-3xl">👷</span>
        <p className="text-muted-foreground text-lg">A trained, dedicated, and mission-driven logistics team</p>
      </div>

    </div>

    {/* Mission */}
    <div className="text-center max-w-3xl mx-auto mt-20 animate-fade-in">
      <p className="text-xl md:text-2xl font-semibold text-foreground">
        Our mission is simple:
        <span className="text-orange-primary font-extrabold">
          {" "}to move India forward with smarter logistics.
        </span>
      </p>
    </div>

  </div>
</section>










<section className="py-12 bg-gradient-to-br from-muted/20 to-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

   


   <div className="flex justify-center mb-20 w-full">

  <div className="group relative bg-white p-12 rounded-2xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-2 
                  border border-orange-100/50 w-full">

    {/* Floating Icon */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 
                      rounded-2xl flex items-center justify-center shadow-lg 
                      group-hover:scale-110 transition-transform duration-300">
        <Eye className="w-6 h-6 text-white" />
      </div>
    </div>

    {/* Card Content */}
    <div className="pt-10 text-center w-full">

      {/* Title */}
      <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center w-full">
        Our Vision
        <div className="ml-3 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </h2>

      {/* Subtitle */}
      <h3 className="text-lg md:text-2xl font-semibold text-orange-primary mb-6 leading-relaxed w-full">
        To Redefine the Future of Logistics and Build a Connected, Empowered Bharat
      </h3>

      {/* Paragraph */}
      <p className="text-muted-foreground leading-relaxed text-lg max-w-5xl mx-auto">
        At <span className="font-semibold text-foreground">Mini Bharat Logistics</span>, 
        our vision goes far beyond delivering packages — we envision a future where logistics 
        becomes the backbone of India’s economic growth, empowering every business, every 
        entrepreneur, and every corner of the country with seamless connectivity.
      </p>
    </div>

    {/* Decorative Bottom Corner */}
    <div className="absolute bottom-4 right-4 w-16 h-16 
                    bg-gradient-to-br from-blue-500/10 to-transparent rounded-full"></div>
  </div>

</div>


    {/* === Section Heading for Highlights === */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        We aim to create a national logistics ecosystem that is:
      </h2>
    </div>

    {/* === Vision Highlights Grid === */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {visionHighlights.map((value, index) => {
        const Icon = value.icon;
        return (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl 
                       transition-all duration-500 hover:-translate-y-3 
                       border border-gray-100/50 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
            
            {/* Icon */}
            <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/10 to-blue-500/20 
                            rounded-2xl flex items-center justify-center group-hover:scale-110 
                            group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Icon className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {value.description}
              </p>
            </div>

            {/* Interactive border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        );
      })}
    </div>

  </div>
</section>




{/* ===== Combined Mission & Values Section ===== */}
<section className="py-24 bg-gradient-to-br from-muted/20 to-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* === Mission Card === */}
    <div className="flex justify-center mb-24 w-full">

  <div className="group relative bg-white p-12 rounded-2xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-2 
                  border border-orange-100/50 w-full">

    {/* Floating Icon */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 
                      rounded-2xl flex items-center justify-center shadow-lg 
                      group-hover:scale-110 transition-transform duration-300">
        <Target className="w-6 h-6 text-white" />
      </div>
    </div>

    {/* Card Content */}
    <div className="pt-10 text-center w-full">

      {/* Title */}
      <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center w-full">
        Our Mission
        <div className="ml-3 w-10 h-0.5 bg-gradient-to-r from-orange-primary to-transparent"></div>
      </h2>

      {/* Subtitle */}
      <h3 className="text-lg md:text-2xl font-semibold text-orange-primary mb-6 leading-relaxed w-full">
        To Simplify, Empower, and Transform Logistics Across Bharat
      </h3>

      {/* Paragraph */}
      <p className="text-muted-foreground leading-relaxed text-lg max-w-5xl mx-auto">
        At <span className="font-semibold text-foreground">Mini Bharat Logistics</span>, 
        our mission is to deliver logistics solutions that are fast, transparent, and accessible — 
        enabling businesses and entrepreneurs to grow without limitations.
      </p>
    </div>

    {/* Decorative Bottom Corner */}
    <div className="absolute bottom-4 right-4 w-16 h-16 
                    bg-gradient-to-br from-orange-primary/10 to-transparent rounded-full"></div>
  </div>

</div>

    {/* === Values Heading === */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        We are committed to building a logistics ecosystem that prioritizes:
      </h2>
    </div>

    {/* === Values Grid === */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {logisticsValues.map((value, index) => {
        const Icon = value.icon;
        return (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden"
          >
            {/* Corner Decorative Bubble */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-primary/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>

            {/* Icon Box */}
            <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-primary/10 to-orange-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Icon className="w-8 h-8 text-orange-primary group-hover:text-orange-600 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-orange-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {value.description}
              </p>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-primary/0 via-orange-primary/5 to-orange-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        );
      })}
    </div>

  </div>
</section>














      {/* Core Values Section */}
      <section className="py-12 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
             At Mini Bharat Logistics, our values shape every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreValues.map((value, index) => <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-primary/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-primary/10 to-orange-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <value.icon className="w-8 h-8 text-orange-primary group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-orange-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                </div>
                
                {/* Interactive border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-primary/0 via-orange-primary/5 to-orange-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Milestones Timeline Section */}
      <section className="py-12 md:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Minibharat Milestones</h2>
            <p className="text-base md:text-xl text-muted-foreground">A timeline of our growth and key achievements</p>
          </div>
          
          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden relative max-w-md mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-primary/20 via-orange-primary to-orange-primary/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-4 group">
                  {/* Timeline Dot */}
                  <button 
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)} 
                    className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full border-4 border-background shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-primary/20"
                  >
                    <span className="text-xs font-bold text-white">{milestone.year.slice(-2)}</span>
                  </button>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <Badge 
                      variant="secondary" 
                      className={`mb-2 transition-all duration-300 cursor-pointer text-xs ${selectedMilestone === index ? 'bg-orange-primary text-white' : 'bg-orange-primary/10 text-orange-primary'}`}
                      onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                    >
                      {milestone.year}
                    </Badge>
                    <h3 className="font-bold text-foreground mb-1 text-base leading-tight">{milestone.event}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                    
                    {/* Expandable Details on Mobile */}
                    {selectedMilestone === index && (
                      <div className="mt-3 space-y-2 animate-fade-in">
                        {milestone.details.map((detail, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-orange-primary to-orange-600 text-white p-3 rounded-xl shadow-md text-xs">
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-16 left-8 right-8 h-1 bg-gradient-to-r from-orange-primary/20 via-orange-primary to-orange-primary/20 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  {/* Timeline Dot */}
                  <button 
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)} 
                    className="relative z-10 w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-primary/20"
                  >
                    <span className="text-xs font-bold text-white">{milestone.year.slice(-2)}</span>
                  </button>
                  
                  {/* Content */}
                  <Badge 
                    variant="secondary" 
                    className={`mb-3 transition-all duration-300 cursor-pointer text-xs ${selectedMilestone === index ? 'bg-orange-primary text-white' : 'bg-orange-primary/10 text-orange-primary hover:bg-orange-primary hover:text-white'}`}
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                  >
                    {milestone.year}
                  </Badge>
                  <h3 className="font-bold text-foreground mb-2 text-xs md:text-sm leading-tight px-2">{milestone.event}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed px-2">{milestone.description}</p>
                </div>
              ))}
            </div>
            
            {/* Expandable Detail Bars */}
            {selectedMilestone !== null && <div className="mt-12 space-y-3 animate-fade-in">
                {milestones[selectedMilestone].details.map((detail, index) => <div key={index} className="bg-gradient-to-r from-orange-primary to-orange-600 text-white p-4 rounded-2xl shadow-lg animate-scale-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{detail}</span>
                      <div className="text-xs opacity-75">
                        {index === 0 ? 'Sep' : 'Oct'}
                      </div>
                    </div>
                  </div>)}
              </div>}
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-primary/20 via-orange-primary to-orange-primary/20 rounded-full"></div>
          </div>
        </div>    
      </section>

      {/* Pan-India Network Map Section */}
        {/* Pan-India Network Map Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Pan-India Network</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Connecting businesses across India with fast, reliable, tech-enabled logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <IndiaMap hoveredRegion={hoveredRegion} onRegionHover={setHoveredRegion} networkData={networkData} />

            <div className="grid grid-cols-2 gap-6">
              {networkData.map((region, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    hoveredRegion === region.region
                      ? `${region.borderColor} ${region.bgColor} shadow-xl scale-105`
                      : 'border-gray-200 bg-white hover:shadow-lg hover:border-gray-300'
                  }`}
                  onMouseEnter={() => setHoveredRegion(region.region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {/* Color indicator */}
                  <div
                    className={`w-3 h-3 rounded-full mb-4 transition-all duration-300 ${
                      hoveredRegion === region.region ? 'scale-150' : ''
                    }`}
                    style={{ backgroundColor: region.mapColor }}
                  ></div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${hoveredRegion === region.region ? region.color : 'text-gray-900'}`}>
                      {region.region}
                    </h3>
                    <div className={`text-3xl font-bold transition-colors duration-300 ${hoveredRegion === region.region ? region.color : 'text-orange-primary'}`}>
                      {animatedNumbers[index].toLocaleString()}+
                    </div>
                    <p className="text-sm text-gray-600 font-medium">centers</p>
                  </div>

                  {/* Hover effect background */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${
                      hoveredRegion === region.region ? 'opacity-10' : ''
                    }`}
                    style={{ backgroundColor: region.mapColor }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      

    
    <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4 text-center">
    {/* Section Title */}
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Life at Mini Bharat
    </h2>
    {/* Subtitle */}
    <p className="text-xl text-gray-700 mb-8">
      Where Passion, Purpose, and People Drive the Future of Logistics
    </p>
    {/* Description */}
    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
      At Mini Bharat Logistics, we believe that great companies are built by great people.
      Life here is energetic, growth-focused, and deeply rooted in teamwork, innovation, and respect.
      Every day brings new challenges, new learning, and new opportunities to make an impact across India.
    </p>
  </div>
</section>



    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Left Column - Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            A Culture of Growth
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We encourage ideas, curiosity, and ambition.
            Whether you’re in operations, tech, fleet management, or leadership —
            you’re empowered to grow, experiment, and succeed.
          </p>
          {/* Optional CTA button */}
         
        </div>

        {/* Right Column - IndiaMap Component */}
        <div className="md:w-1/2">
          <IndiaMap />
        </div>

      </div>
    </section>




   

      

          <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-foreground mb-4">
    A Team That Feels Like Family
  </h2>
  <p className="text-xl text-muted-foreground mb-2">
    We work hard, celebrate wins together, support each other, and grow as one.
  </p>
  <p className="text-xl text-muted-foreground">
    From field riders to franchise partners to office teams — everyone plays a key role in our mission.
  </p>
</div>

          
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[office1, fun, cel2, cel3, trip1, trip2].map((image, index) => (
    <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt={`Company Culture ${index + 1}`}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>
        </div>
      </section>



         {/* Life at Company Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-foreground mb-4">
    Innovation at the Heart
  </h2>
  <p className="text-xl text-muted-foreground mb-2">
    Technology isn’t just a tool for us — it’s our mindset.
  </p>
  <p className="text-xl text-muted-foreground">
    We embrace smarter systems, creative problem-solving, and continuous improvement in everything we do.
  </p>
</div>

          
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[award1, office2, award3, award4, award6, award7].map((image, index) => (
    <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt={`Company Culture ${index + 1}`}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutUs;