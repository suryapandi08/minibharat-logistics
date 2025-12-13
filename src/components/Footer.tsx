// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// import logo from "@/assets/minibharat-logo.png";

// const Footer = () => {
//   const footerSections = [
//     // {
//     //   title: "Services",
//     //   links: [
//     //     "APM Business Model",
//     //     "Large HIH Business Model",
//     //     "Grocery Business Model",
//     //     "ODH/MDH Business Model",
//     //     "LMA – Vendor Business Model"
//     //   ]
//     // },
//     // {
//     //   title: "Company",
//     //   links: [
//     //     "About Us",
//     //     "Blog",
//     //     "Gallery",
//     //     "FAQ",
//     //     "Testimonials"
//     //   ]
//     // },
//     // {
//     //   title: "Support",
//     //   links: [
//     //     "Help Center",
//     //     "Track Package",
//     //     "Shipping Calculator",
//     //     "Contact Support",
//     //     "Partner Portal"
//     //   ]
//     // },
//     {
//     title: "Services",
//     links: [
//       { name: "APM Business Model", path: "/apm-business-model" },
//       { name: "Large HIH Business Model", path: "/large-hih-business-model" },
//       { name: "Grocery Business Model", path: "/grocery-business-model" },
//       { name: "ODH/MDH Business Model", path: "/odh-mdh-business-model" },
//       { name: "LMA – Vendor Business Model", path: "/lma-business-model" },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { name: "About Us", path: "/about" },
//       { name: "Blog", path: "/blog" },
//       { name: "Gallery", path: "/gallery" },
//       { name: "FAQ", path: "/faq" },
//       { name: "Testimonials", path: "/testimonials" },
//     ],
//   },
//     {
//       title: "Legal",
//       links: [
//         "Privacy Policy",
//         "Terms of Service",
//         "Shipping Terms",
//         "Refund Policy",
//         "Data Protection"
//       ]
//     }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" }
//   ];

//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Newsletter Section */}
//       <div className="border-b border-gray-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="max-w-4xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4">
//               Stay Updated with Minibharat
//             </h3>
//             <p className="text-gray-400 mb-8">
//               Get the latest logistics insights, industry news, and exclusive offers delivered to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//               />
//               <Button variant="cta" className="whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="mb-6">
//               <img src={logo} alt="Mini Bharat Courier & Logistics" className="h-16 w-auto" />
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               India's fastest-growing logistics partner, revolutionizing the way businesses 
//               connect and deliver across the nation with innovative technology and reliable service.
//             </p>
            
//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-orange-primary" />
//                 <span className="text-gray-400">info@minibharat.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-orange-primary" />
//                 <span className="text-gray-400">+91 1800-123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-orange-primary" />
//                 <span className="text-gray-400">Mumbai, Maharashtra, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Footer Links */}
//           {footerSections.map((section, index) => (
//             <div key={index}>
//               <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
//               <ul className="space-y-3">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-orange-primary transition-colors"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-400 text-sm mb-4 md:mb-0">
//               © 2024 Minibharat Logistics. All rights reserved.
//             </div>
            
//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-primary transition-colors"
//                     aria-label={social.label}
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "@/assets/minibharat-logo.png";

// const Footer = () => {
//   const footerSections = [
//     {
//       title: "Services",
//       links: [
//         { name: "APM Business Model", path: "/apm-business-model" },
//         { name: "Large HIH Business Model", path: "/large-hih-business-model" },
//         { name: "Grocery Business Model", path: "/grocery-business-model" },
//         { name: "ODH/MDH Business Model", path: "/odh-mdh-business-model" },
//         { name: "LMA – Vendor Business Model", path: "/lma-business-model" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About Us", path: "/about" },
//         { name: "Blog", path: "/blog" },
//         { name: "Gallery", path: "/gallery" },
//         { name: "FAQ", path: "/faq" },
//         { name: "Testimonials", path: "/testimonials" },
//       ],
//     },
//     {
//       title: "Legal",
//       links: [
//         { name: "Privacy Policy", path: "/privacy-policy" },
//         { name: "Terms of Service", path: "/terms-and-conditions" },
//         // { name: "Shipping Terms", path: "#" },
//         // { name: "Refund Policy", path: "#" },
//         // { name: "Data Protection", path: "#" },
//       ],
//     },
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", label: "Facebook" },
//     { icon: Instagram, href: "#", label: "Instagram" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Newsletter Section */}
//       <div className="border-b border-gray-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="max-w-4xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4">
//               Stay Updated with Minibharat
//             </h3>
//             <p className="text-gray-400 mb-8">
//               Get the latest logistics insights, industry news, and exclusive offers delivered to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//               />
//               <Button variant="cta" className="whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <div className="mb-6">
//               <img src={logo} alt="Mini Bharat Courier & Logistics" className="h-16 w-auto" />
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               India's fastest-growing logistics partner, revolutionizing the way businesses 
//               connect and deliver across the nation with innovative technology and reliable service.
//             </p>
            
//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-orange-primary" />
//                 <span className="text-gray-400">info@minibharat.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-orange-primary" />
//                 <span className="text-gray-400">+91 1800-123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-orange-primary" />
//                 <span className="text-gray-400">Mumbai, Maharashtra, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Footer Links */}
//           {footerSections.map((section, index) => (
//             <div key={index}>
//               <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
//               <ul className="space-y-3">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link
//                       to={link.path}
//                       className="text-gray-400 hover:text-orange-primary transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-400 text-sm mb-4 md:mb-0">
//               © 2025 Minibharat Logistics. All rights reserved.
//             </div>
            
//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-primary transition-colors"
//                     aria-label={social.label}
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/minibharat-logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Last Mile Business Model", path: "/apm-business-model" },
        { name: "First Mile Business Model", path: "/large-hih-business-model" },
        { name: "Own Warehouse Business Model", path: "/grocery-business-model" },
        { name: "ODH Warehouse Business Model", path: "/odh-mdh-business-model" },
        { name: "MDH Warehouse Business Model", path: "/lma-business-model" },
        { name: "Grocery Warehouse Business Model", path: "/grocery-business-model" },
        { name: "Large Shipment Warehouse Business Model", path: "/lma-business-model" },
        { name: "Non Large Warehouse Business Model", path: "/lma-business-model" },
        { name: "5 Mins Delivery Warehouse Business Model", path: "/lma-business-model" }, 
        { name: "Mints Delivery Business Model", path: "/lma-business-model" }, 
        { name: "Low Value Shipments Business Model", path: "/lma-business-model" }, 
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Gallery", path: "/gallery" },
        { name: "FAQ", path: "/faq" },
        { name: "Testimonials", path: "/testimonials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-and-conditions" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Minibharat</h3>
            <p className="text-gray-400 mb-8">
              Get the latest logistics insights, industry news, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button variant="cta" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="Mini Bharat Courier & Logistics" className="h-16 w-auto bg-white" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's fastest-growing logistics partner, revolutionizing the way businesses 
              connect and deliver across the nation with innovative technology and reliable service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-primary" />
                <span className="text-gray-400">info@minibharatlogistics.com, <br></br>info@minibharatlogistics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-primary" />
                <span className="text-gray-400">+91 8740084009 (Mumbai) , <br></br>+91 9943342999 (Tamilnadu)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-primary" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-orange-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Minibharat Logistics. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
