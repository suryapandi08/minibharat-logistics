import amazon from "@/assets/partners/amazon.png";
import flipkart from "@/assets/partners/flipkart.png";
import myntra from "@/assets/partners/myntra.png";
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

import client1 from "@/assets/client-partners/1.png";
import client2 from "@/assets/client-partners/2.png";
import client3 from "@/assets/client-partners/3.png";
import client4 from "@/assets/client-partners/4.png";
import client5 from "@/assets/client-partners/5.png";
import client6 from "@/assets/client-partners/6.png";
import client7 from "@/assets/client-partners/7.png";
import client8 from "@/assets/client-partners/8.png";
import client9 from "@/assets/client-partners/9.png";
import client10 from "@/assets/client-partners/10.png";
import client11 from "@/assets/client-partners/11.png";
import client12 from "@/assets/client-partners/12.png";
import client13 from "@/assets/client-partners/13.png";
import client14 from "@/assets/client-partners/14.png";
import client15 from "@/assets/client-partners/15.png";
import client16 from "@/assets/client-partners/16.png";
import client17 from "@/assets/client-partners/17.png";
import client18 from "@/assets/client-partners/18.png";
import client19 from "@/assets/client-partners/19.png";
import client20 from "@/assets/client-partners/20.png";

const PartnersSection = () => {
  const topRow = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10 ];
  const bottomRow = [client11,client12,client13,client14,client15,client16,client17,client18,client19,client20];

  return (
    <>
     {/* Section Header with White Background */}
<section className="relative py-16 bg-white text-center">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
      Our Trusted Partners
    </h2>
    <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
      From e-commerce giants to food delivery leaders, our partners enable us
      to deliver excellence to every corner of India with speed and reliability.
    </p>
  </div>
</section>


      {/* Right Scrolling Gallery */}
      <section className="py-8 bg-gray-50 overflow-hidden">
        <div className="flex animate-[scroll-right_20s_linear_infinite] space-x-6">
          {topRow.concat(topRow).map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="w-72 h-40 object-contain rounded-lg shadow-md bg-white p-4 hover:scale-105 transition-transform"
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

export default PartnersSection;
