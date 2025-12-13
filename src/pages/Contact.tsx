// import React, { useState, useEffect } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const { toast } = useToast();
  
//   useEffect(() => {
//     document.title = "Contact Us - Get in Touch | Minibharat Logistics";
//     const metaDescription = document.querySelector('meta[name="description"]');
//     if (metaDescription) {
//       metaDescription.setAttribute('content', 'Contact Minibharat for logistics partnerships, support, and inquiries. Get in touch with our team across India for comprehensive logistics solutions.');
//     }
//   }, []);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const technologyCenters = [
//     {
//       id: 1,
//       name: "Pune",
//       description: "Corporate IT Park, Unit 7 & 8, 503 Building-B-1, Rajiv Gandhi – Worldmark Urban Infotech, Hinjawadi Phase I",
//       active: true
//     },
//     {
//       id: 2,
//       name: "Mumbai",
//       description: "Business Hub, Tower A, Level 12, Lower Parel, Mumbai - 400013",
//       active: false
//     },
//     {
//       id: 3,
//       name: "Bangalore",
//       description: "Tech Park, Block C, Whitefield Main Road, Bangalore - 560066",
//       active: false
//     },
//     {
//       id: 4,
//       name: "Delhi",
//       description: "Corporate Centre, Sector 44, Gurgaon, Haryana - 122003",
//       active: false
//     }
//   ];

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       toast({
//         title: "Message Sent  Successfully!",
//         description: "Thanks for reaching out! Our logistics expert will contact you within 24 hours.",
//       });
      
//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         subject: '',
//         message: ''
//       });
      
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Something went wrong. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
      
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="py-16 px-4 md:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12 animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
//                 Contact Us
//               </h1>
//               <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 Get in touch with us for partnerships, support, or any inquiries about our logistics services
//               </p>
//             </div>

//             {/* Map Section */}
//             {/* <div className="mb-16 animate-fade-in">
//               <Card className="overflow-hidden">
//                 <div className="h-96 bg-muted flex items-center justify-center">
//                   <div className="text-center">
//                     <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
//                     <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
//                     <p className="text-muted-foreground">
//                       Add your Mapbox token to display an interactive map here
//                     </p>
//                   </div>
//                 </div>
//               </Card/>
//             </div> */}
//             <div className="h-96 w-full">
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.356879993183!2d78.14601457480533!3d10.980526955280323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa854e29d58f2d%3A0x52bb6f24c0e5c5e4!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//     width="100%"
//     height="100%"
//     style={{ border: 0 }}
//     // allowFullScreen=""
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//   ></iframe>
// </div>

// <br></br><br></br><br></br>

//             {/* Contact Form and Info */}
//             <div className="grid lg:grid-cols-2 gap-12 mb-16">
//               {/* Contact Form */}
//               <div className="animate-fade-in">
//                 <Card className="p-8">
//                   <h2 className="text-2xl font-bold mb-6 text-foreground">Still have questions?</h2>
//                   <p className="text-muted-foreground mb-6">
//                     No spam — we’ll only contact you about your quote.
//                   </p>
                  
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="name">Full Name *</Label>
//                         <Input
//                           id="name"
//                           value={formData.name}
//                           onChange={(e) => handleInputChange('name', e.target.value)}
//                           placeholder="Enter your full name"
//                           required
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="email">Email Address *</Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={(e) => handleInputChange('email', e.target.value)}
//                           placeholder="Enter your email"
//                           required
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="phone">Phone Number</Label>
//                         <Input
//                           id="phone"
//                           value={formData.phone}
//                           onChange={(e) => handleInputChange('phone', e.target.value)}
//                           placeholder="Enter your phone number"
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="company">Company</Label>
//                         <Input
//                           id="company"
//                           value={formData.company}
//                           onChange={(e) => handleInputChange('company', e.target.value)}
//                           placeholder="Enter your company name"
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="subject">Subject *</Label>
//                       <Select onValueChange={(value) => handleInputChange('subject', value)}>
//                         <SelectTrigger className="mt-1">
//                           <SelectValue placeholder="Select a subject" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="general">General Inquiry</SelectItem>
//                           <SelectItem value="partnership">Partnership</SelectItem>
//                           <SelectItem value="franchise">Franchise Opportunity</SelectItem>
//                           <SelectItem value="support">Customer Support</SelectItem>
//                           <SelectItem value="careers">Careers</SelectItem>
//                           <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div>
//                       <Label htmlFor="message">Message *</Label>
//                       <Textarea
//                         id="message"
//                         value={formData.message}
//                         onChange={(e) => handleInputChange('message', e.target.value)}
//                         placeholder="Tell us how we can help you..."
//                         rows={5}
//                         required
//                         className="mt-1"
//                       />
//                     </div>

//                     <Button 
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full h-12"
//                     >
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                     </Button>
//                   </form>
//                 </Card>
//               </div>

//               {/* Contact Information */}
//               <div className="animate-fade-in animation-delay-200">
//                 <Card className="p-8 bg-primary/5 border-primary/20">
//                   <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
                  
//                   <div className="space-y-6">
//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Phone className="w-5 h-5 text-primary-foreground" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-foreground">Phone</h3>
//                         <p className="text-muted-foreground">+91 8740084009 (Mumbai)</p>
//                         <p className="text-muted-foreground">+91 9943342999 (Tamilnadu)</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Mail className="w-5 h-5 text-primary-foreground" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-foreground">Email</h3>
//                         <p className="text-muted-foreground">info@minibharatlogistics.com</p>
//                         <p className="text-muted-foreground">odh@minibharatlogistics.com</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                         <MapPin className="w-5 h-5 text-primary-foreground" />
//                       </div>
//                       {/* <div>
//                         <h3 className="font-semibold text-foreground">Address</h3>
//                         <p className="text-muted-foreground">
//                           Corporate IT Park, Unit 7 & 8<br />
//                           503 Building-B-1, Rajiv Gandhi<br />
//                           Hinjawadi Phase I, Pune - 411057
//                         </p>
//                       </div> */}
//                       <div>
//   <h3 className="font-semibold text-foreground">Office Address (Mumbai)</h3>
//   <p className="text-muted-foreground">
//     1202, 12th Floor, DLH Park<br />
//     Swami Vivekananda Rd, Rani Sati Nagar<br />
//     Sunder Nagar, Goregaon West<br />
//     Mumbai, Maharashtra - 400062
//   </p>
// </div>

// <div className='pl-9'>
//   <h3 className="font-semibold text-foreground">Office Address (Tamil Nadu)</h3>
//   <p className="text-muted-foreground">
//     177/Chakra Tower, Old Bye PassRoad<br />
//     Near Siva Theatre, Paramathi Velur Vengamedu<br />
//     Pothanur, Namakkal<br />
//     Tamil Nadu - 638181
//   </p>
// </div>

//                     </div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Clock className="w-5 h-5 text-primary-foreground" />
//                       </div>
//                       {/* <div>
//                         <h3 className="font-semibold text-foreground">Business Hours</h3>
//                         <p className="text-muted-foreground">
//                           Monday - Friday: 9:00 AM - 6:00 PM<br />
//                           Saturday: 9:00 AM - 2:00 PM<br />
//                           Sunday: Closed
//                         </p>
//                       </div> */}
//                       <div>
//   <h3 className="font-semibold text-foreground">Business Hours (Mumbai)</h3>
//   <p className="text-muted-foreground">
//     Monday - Saturday: 10:00 AM - 7:00 PM<br />
//     Sunday: Closed
//   </p>
// </div>

// <div>
//   <h3 className="font-semibold text-foreground">Business Hours (Tamil Nadu)</h3>
//   <p className="text-muted-foreground">
//     Monday - Saturday: 9:30 AM - 6:30 PM<br />
//     Sunday: Closed
//   </p>
// </div>

//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Technology Centers */}
//         <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12 animate-fade-in">
//               <h2 className="text-3xl font-bold mb-4 text-foreground">Wherever You Are, Mini Bharat Logistics Is Nearby</h2>
//               <p className="text-muted-foreground">
//                 Our strategic locations across India to serve you better
//               </p>
//             </div>
// {/* 
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {technologyCenters.map((center, index) => (
//                 <Card
//                   key={center.id}
//                   className={`p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in ${
//                     center.active 
//                       ? 'bg-primary text-primary-foreground border-primary' 
//                       : 'bg-card border-border hover:border-primary'
//                   }`}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <Building2 className={`w-6 h-6 ${center.active ? 'text-white' : 'text-primary'}`} />
//                     <h3 className={`text-xl font-bold ${center.active ? 'text-white' : 'text-foreground'}`}>
//                       {center.name}
//                     </h3>
//                   </div>
//                   <p className={`text-sm leading-relaxed ${
//                     center.active ? 'text-white/90' : 'text-muted-foreground'
//                   }`}>
//                     {center.description}
//                   </p>
//                 </Card>
//               ))}
//             </div> */}
//             <section className="image-content-section py-12 bg-gray-50">
//   <div className="container mx-auto px-4">
//     <div className="flex flex-col lg:flex-row items-center gap-8">
//       {/* Image */}
//       <div className="image-box flex-1">
//         <img
//           src="src/assets/india-map-default.png" // replace with your actual image
//           alt="MiniBharat Logistics Network"
//           className="w-full h-auto rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Content */}
//       <div className="content-box flex-1">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Connecting India, One Delivery at a Time
//         </h2>
//         <p className="text-gray-600 text-lg leading-relaxed mb-4">
//           MiniBharat Courier and Logistics is revolutionizing the way goods move across India. 
//           With a growing network of franchise partners, modern vehicles, and advanced tracking systems, 
//           we ensure your packages reach their destination safely and on time.
//         </p>
//         <p className="text-gray-600 text-lg leading-relaxed mb-4">
//           From small parcels to large shipments, MiniBharat handles every delivery with care, 
//           speed, and reliability. Our state-of-the-art logistics technology empowers businesses 
//           and individuals to manage their deliveries efficiently.
//         </p>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           Join our expanding network or use our courier services to experience seamless logistics 
//           solutions. MiniBharat is committed to building trust, ensuring transparency, and connecting 
//           communities across every corner of India.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>


// <br></br>

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//   {[
//     { id: 1, name: "Cities Covered", value: "300+" },
//     { id: 2, name: "Vehicles Active", value: "8500+" },
//     { id: 3, name: "Partner Warehouses", value: "1000+" },
//     { id: 4, name: "Riders Covered", value: "15,000+" },
//     { id: 5, name: "Deliveries Completed", value: "3M+ and counting" },
//   ].map((metric, index) => (
//     <Card
//       key={metric.id}
//       className="p-6 bg-card border-border hover:border-primary transform hover:scale-105 transition-all duration-300 animate-fade-in"
//       style={{ animationDelay: `${index * 100}ms` }}
//     >
//       <div className="flex flex-col items-start">
//         <h3 className="text-xl font-bold text-primary">{metric.value}</h3>
//         <p className="text-sm text-muted-foreground mt-1">{metric.name}</p>
//       </div>
//     </Card>
//   ))}
// </div>


//           </div>
//         </section>

//         {/* CTA Section */}
//         {/* <section className="py-16 px-4 md:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in">
//             <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//             <p className="text-muted-foreground mb-8">
//               Join thousands of businesses that trust Minibharat for their logistics needs.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Button className="px-8">
//                 Start Your Journey
//               </Button>
//               <Button variant="outline" className="px-8">
//                 Schedule a Demo
//               </Button>
//             </div>
//           </div>
//         </section> */}
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;




import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ---------------------------
// Locations Component
// ---------------------------

interface LocationItem {
  name: string;
  img: string;
}

const LocationsSection: React.FC = () => {
  const locations: LocationItem[] = [
    { name: "Mumbai", img: "src/assets/services/return-logistics.jpg" },
    { name: "Tamilnadu", img: "/assets/locations/coimbatore.jpg" },
    { name: "Kerala", img: "/assets/locations/chennai.jpg" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="relative group h-64 w-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-orange-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-75 transition-all duration-500">
                <h2 className="text-2xl font-bold text-white">{loc.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------
// MAIN CONTACT PAGE
// ---------------------------
const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us - Get in Touch | Minibharat Logistics";
    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Minibharat for logistics partnerships, support, and inquiries. Get in touch with our team across India for comprehensive logistics solutions."
      );
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thanks for reaching out! Our logistics expert will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for partnerships, support, or any inquiries
              about our logistics services.
            </p>
          </div>

          {/* 🟠 LOCATIONS SECTION ADDED HERE */}
          <LocationsSection />

          {/* ------------------ Contact Form + Information ------------------ */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 mt-10">
            {/* LEFT = FORM */}
            <div className="animate-fade-in">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Still have questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  No spam — we’ll only contact you about your quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Enter your company name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      onValueChange={(v) => handleInputChange("subject", v)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="franchise">
                          Franchise Opportunity
                        </SelectItem>
                        <SelectItem value="support">
                          Customer Support
                        </SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* RIGHT = Contact Info */}
            <div className="animate-fade-in animation-delay-200">
              <Card className="p-8 bg-primary/5 border-primary/20 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Get in Touch
                </h2>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 8740084009 (Mumbai)
                    </p>
                    <p className="text-muted-foreground">
                      +91 9943342999 (Tamil Nadu)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">
                      info@minibharatlogistics.com
                    </p>
                    <p className="text-muted-foreground">
                      odh@minibharatlogistics.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      Office Address (Mumbai)
                    </h3>
                    <p className="text-muted-foreground">
                      1202, 12th Floor, DLH Park
                      <br />
                      Swami Vivekananda Rd, Rani Sati Nagar
                      <br />
                      Goregaon West, Mumbai - 400062
                    </p>

                    <h3 className="font-semibold text-foreground mt-4">
                      Office Address (Tamil Nadu)
                    </h3>
                    <p className="text-muted-foreground">
                      177/Chakra Tower, Old Bye Pass Road
                      <br />
                      Near Siva Theatre, Paramathi Velur
                      <br />
                      Namakkal, Tamil Nadu - 638181
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      Business Hours (Mumbai)
                    </h3>
                    <p className="text-muted-foreground">
                      Mon–Sat: 10:00 AM – 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>

                    <h3 className="font-semibold text-foreground mt-4">
                      Business Hours (Tamil Nadu)
                    </h3>
                    <p className="text-muted-foreground">
                      Mon–Sat: 9:30 AM – 6:30 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>


        <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Wherever You Are, Mini Bharat Logistics Is Nearby</h2>               <p className="text-muted-foreground">
                 Our strategic locations across India to serve you better
               </p>
            </div>

        {/* INDIA MAP CONTENT SECTION */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="src/assets/map/Untitled-design(4).png"
                alt="MiniBharat Logistics Network"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Connecting India, One Delivery at a Time
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                MiniBharat Courier and Logistics is revolutionizing the way
                goods move across India. With a growing network of franchise
                partners and modern vehicles, we ensure your packages reach their
                destination safely and on time.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                From small parcels to large shipments, MiniBharat delivers with
                speed and reliability using state-of-the-art tracking systems.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Join our expanding network or use our courier services to
                experience seamless logistics solutions built with trust and
                transparency.
              </p>
            </div>
          </div>
        </section>

        {/* METRICS SECTION */}
        <div className="container mx-auto px-4 my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { id: 1, name: "Cities Covered", value: "300+" },
            { id: 2, name: "Vehicles Active", value: "8500+" },
            { id: 3, name: "Partner Warehouses", value: "1000+" },
            { id: 4, name: "Riders Covered", value: "15,000+" },
            { id: 5, name: "Deliveries Completed", value: "3M+ and counting" },
          ].map((metric, index) => (
            <Card
              key={metric.id}
              className="p-6 bg-card border-border hover:border-primary transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-primary">{metric.value}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {metric.name}
              </p>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
