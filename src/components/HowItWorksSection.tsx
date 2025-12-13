// import { Handshake, GraduationCap, Cpu, Award, Megaphone, Network } from "lucide-react";
// import nightHighwayImage from "@/assets/night-highway-tech.jpg";

// const HowItWorksSection = () => {
//   const steps = [
//     {
//       icon: Handshake,
//       title: "Apply & Connect",
//       description: "Submit your franchise application online or contact our business development team.We’ll reach out to understand your goals, region, and investment plans."
//     },
  
//     {
//       icon: Cpu,
//       title: "Verification & Approval",
//       description: "Our experts review your profile, verify your location potential, and discuss terms.Once approved, you become an official part of the Mini Bharat Logistics family."
//     },
//     {
//       icon: Award,
//       title: "Setup & Training",
//       description: "We help you set up your franchise operations with branding, training, and digital tools.From operations software to delivery protocols — we equip you for success."
//     },
//       {
//       icon: GraduationCap,
//       title: "Training & Support",
//       description: "Comprehensive training programs and ongoing support to ensure your success in the logistics industry."
//     },
//     {
//       icon: Megaphone,
//       title: "Launch & Operate",
//       description: "Start serving clients under the Mini Bharat brand with full backend and technical support.Get access to routes, leads, and our growing partner network across India."
//     },
//     {
//       icon: Network,
//       title: "Earn & Expand",
//       description: "The more you grow, the more you earn.Expand your territory, add vehicles, and build your logistics empire with Mini Bharat."
//     }
//   ];

//   return (
//     <section 
//       className="relative py-20 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${nightHighwayImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             How It Works
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Join our growing network of logistics partners and build a successful business with our proven system
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <div key={index} className="relative flex flex-col items-center">
//                 {/* Connecting Lines */}
//                 {index < steps.length - 1 && index % 3 !== 2 && (
//                   <div className="hidden lg:block absolute top-12 left-full w-16 h-0.5 border-t-2 border-dashed border-orange-primary/60 transform translate-x-8"></div>
//                 )}
                
//                 <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 group w-full max-w-sm">
//                   <div className="w-20 h-20 bg-orange-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                     <Icon className="w-10 h-10 text-white" />
//                   </div>
//                   <div className="mb-4 text-orange-300 text-sm font-medium">Step {index + 1}</div>
//                   <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
//                   <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;


import { Handshake, GraduationCap, Cpu, Award, Megaphone, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import nightHighwayImage from "@/assets/night-highway-tech.jpg";  // ✅ Background image

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Handshake,
      title: "Apply & Connect",
      description:
        "Submit your franchise application online or contact our business development team. We’ll reach out to understand your goals, region, and investment plans.",
      button: true
    },

    {
      icon: Cpu,
      title: "Verification & Approval",
      description:
        "Our experts review your profile, verify your location potential, and discuss terms. Once approved, you become an official part of the Mini Bharat Logistics family.",
      img: "src/assets/how it work/ChatGPT Image Nov 26, 2025, 02_35_44 PM.png"
    },
    {
      icon: Award,
      title: "Setup & Training",
      description:
        "We help you set up your franchise operations with branding, training, and digital tools. From operations software to delivery protocols — we equip you for success.",
      img: "src/assets/how it work/ChatGPT Image Nov 26, 2025, 02_38_03 PM.png"
    },
    {
      icon: GraduationCap,
      title: "Technology",
      description:
        "Access to cutting-edge logistics technology and management systems for efficient operations.",
      img: "src/assets/how it work/ChatGPT Image Nov 26, 2025, 02_49_22 PM.png"
    },
    {
      icon: Megaphone,
      title: "Launch & Operate",
      description:
        "Start serving clients under the Mini Bharat brand with full backend and technical support. Get access to routes, leads, and our growing partner network across India.",
      img: "src/assets/how it work/ChatGPT Image Nov 26, 2025, 02_44_02 PM.png"
    },
    {
      icon: Network,
      title: "Earn & Expand",
      description:
        "The more you grow, the more you earn. Expand your territory, add vehicles, and build your logistics empire with Mini Bharat.",
      img: "src/assets/how it work/ChatGPT Image Nov 26, 2025, 02_42_39 PM.png"
    }
  ];

  return (
    <>
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${nightHighwayImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 text-3xl max-w-2xl mx-auto">
            Join India’s Fastest-Growing Logistics Network 
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">Step Success Journey with Mini Bharat</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center shadow-lg rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="w-8 h-8 text-orange-400" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>

              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>

              {/* Apply Now Button Only For First Step */}
             {item.button && (
  <Link to="/contact" className="w-full">
    <Button className="w-30 mt-4 px-6 py-3 text-lg font-semibold rounded-lg bg-orange-600 hover:bg-orange-500 text-white">
      Apply Now
    </Button>
  </Link>
)}


              {/* Small Image for Other Steps */}
              {item.img && (
                <img
                  src={item.img}
                  alt="step"
                  className="w-30 h-20 mt-4 object-contain mx-auto opacity-100"
                />
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
    

    <section className="relative py-20 bg-orange-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Ready to Partner with Mini Bharat Logistics?
    </h2>
    <p className="text-lg text-gray-700 mb-8">
      Start your journey toward financial growth and national recognition.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
  <Link to="/contact">
    <Button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
      Apply for Franchise
    </Button>
  </Link>

  <Link to="/contact">
    <Button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
      Talk to Our Partnership Team
    </Button>
  </Link>
</div>

  </div>
</section>
</>
  );
  
};

export default HowItWorksSection;
