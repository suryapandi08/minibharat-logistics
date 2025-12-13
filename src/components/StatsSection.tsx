import { Package, MapPin, Building, Users, Warehouse } from "lucide-react";
import statsImage from "@/assets/stats-sunset-truck.jpg";
import amazon from "@/assets/partners/amazon.png";
import flipkart from "@/assets/partners/smflip.jpg";
import myntra from "@/assets/partners/newmyntra.jpg";
import swiggy from "@/assets/partners/swiggy.png";
import zomato from "@/assets/partners/zomato.png";
import paytm from "@/assets/partners/paytm.png";
import phonepe from "@/assets/partners/phonepe.png";
import samsung from "@/assets/partners/samsung.png";
import bigbasket from "@/assets/partners/bigbasket.png";
import ecom from "@/assets/partners/ecom.png";
import shadow from "@/assets/partners/shadow.png";
import zepto from "@/assets/partners/zepto.png";
import delhi from "@/assets/partners/delhi.png";
import partner1 from "@/assets/wroking-partners/1.png";
import partner2 from "@/assets/wroking-partners/2.png";
import partner3 from "@/assets/wroking-partners/3.png";
import partner4 from "@/assets/wroking-partners/4.png";
import partner5 from "@/assets/wroking-partners/5.png";
import partner6 from "@/assets/wroking-partners/6.png";
import partner7 from "@/assets/wroking-partners/7.png";
import partner8 from "@/assets/wroking-partners/Untitled design (1).png";
import partner9 from "@/assets/wroking-partners/9.png";
import partner10 from "@/assets/wroking-partners/10.png";

const StatsSection = () => {
  const stats = [
    { icon: Package, value: "2+ billion", label: "parcels since inception" },
    { icon: MapPin, value: "97%", label: "Indian population covered" },
    { icon: Warehouse, value: "3,420+", label: "delivery centers" },
    { icon: Users, value: "15,616", label: "employees and associates" },
    { icon: Building, value: "9.3 million", label: "sq. ft. real estate" },
  ];

  // Partner Logo Sets
  const topRow = [amazon, flipkart, myntra, delhi, ecom, samsung,swiggy,zomato,shadow, bigbasket, zepto, paytm, phonepe];
  const bottomRow = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10];

  return (
    <>
      {/* Stats Section */}
      <section className="relative  py-5 bg-cover bg-center bg-no-repeat">
        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-primary to-orange-dark"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="rounded-2xl p-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                India's Fastest-Growing Logistics Partner
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-white/90 font-bold text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Scrolling Partner Logos */}
      <section className="py-8 pt-12 bg-gray-50 overflow-hidden">
        <div className="flex animate-[scroll-right_20s_linear_infinite] space-x-6">
          {topRow.concat(topRow).map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="w-48 h-28 sm:w-64 sm:h-36 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </section>

      

        {/* Left Scrolling Gallery */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="flex animate-[scroll-left_20s_linear_infinite] space-x-6">
          {bottomRow.concat(bottomRow).map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="w-72 h-40 object-contain rounded-lg shadow-md bg-white-50 p-4 hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatsSection;
