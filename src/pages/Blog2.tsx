
// import { useEffect } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import image from "@/assets/blog-img/2.png";
// const Blog2: React.FC = () => {
//   // Google Tag Manager
//   useEffect(() => {
//     (function (w, d, s, l, i) {
//       (w[l] = w[l] || []).push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
//       const f = d.getElementsByTagName(s)[0];
//       const j = d.createElement(s) as HTMLScriptElement;
//       const dl = l !== "dataLayer" ? "&l=" + l : "";
//       j.async = true;
//       j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//       f.parentNode?.insertBefore(j, f);
//     })(window, document, "script", "dataLayer", "GTM-KG7FXVXN");
//   }, []);

//   // Disqus
//   useEffect(() => {
//     const s = document.createElement("script");
//     s.src = "//nextit-1.disqus.com/embed.js";
//     s.setAttribute("data-timestamp", Date.now().toString());
//     (document.head || document.body).appendChild(s);
//   }, []);

//   // Tawk.to Live Chat
//   useEffect(() => {
//     const s1 = document.createElement("script");
//     s1.async = true;
//     s1.src = "https://embed.tawk.to/602f3cb99c4f165d47c4d425/1eus8adqv";
//     s1.charset = "UTF-8";
//     s1.setAttribute("crossorigin", "*");
//     document.body.appendChild(s1);
//   }, []);

//   // Facebook Chat
//   useEffect(() => {
//     const fbRoot = document.createElement("div");
//     fbRoot.id = "fb-root";
//     document.body.appendChild(fbRoot);

//     const chatDiv = document.createElement("div");
//     chatDiv.id = "fb-customer-chat";
//     chatDiv.className = "fb-customerchat";
//     document.body.appendChild(chatDiv);

//     const script = document.createElement("script");
//     script.innerHTML = `
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "858401617860382");
//       chatbox.setAttribute("attribution", "biz_inbox");
//       window.fbAsyncInit = function() {
//         FB.init({ xfbml: true, version: 'v11.0' });
//       };
//       (function(d, s, id){
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js,fjs);
//       }(document, 'script', 'facebook-jssdk'));
//     `;
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Header */}
//       <Header />

//       {/* Page Banner */}
//       <section
//         className="relative bg-cover bg-center py-20 text-center text-white"
//         style={{
//           backgroundImage:
//             "url('https://minibharatlogistics.com/assets/front/img/breadcrumb_image_.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
     

//         <div className="relative z-10">
//           <h1 className="text-4xl font-bold mb-2">
//             Proven Growth in the First Year: 
//           </h1>
//           <p className="text-gray-200">
//            Mini Bharat Logistics Private Limited began in 2024
//           </p>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Blog Content */}
//           <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
//             <img
//               src={image}
//               alt="Blog"
//               className="w-full rounded-lg mb-6"
//             />
//             <h3 className="text-3xl font-semibold mb-4">
//               Mini Bharat: Unlocking the Profit Potential of Courier Delivery Point Businesses
//             </h3>
//             <div className="flex items-center text-gray-500 space-x-4 mb-6">
//               <span><i className="fal fa-user mr-1"></i> By Admin</span>
//               <span><i className="fal fa-calendar-alt mr-1"></i> 22 Dec, 2023</span>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               In the bustling landscape of the Indian economy, the courier and logistics
//               industry has emerged as a key player, driven by the surge in e-commerce and
//               the increasing need for efficient parcel delivery services. Mini Bharat is
//               empowering local entrepreneurs to tap into this potential with a simplified,
//               profit-oriented business model for courier delivery points.
//             </p>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               This innovative model helps small business owners or individuals start their
//               own courier centers with minimal investment while benefiting from the growing
//               logistics network. The concept bridges the gap between customers and
//               logistics companies, offering doorstep convenience with trust and speed.
//             </p>

//             {/* Social Share */}
//             <div className="mt-8 border-t pt-4">
//               <h4 className="text-lg font-semibold mb-2">Share This Post:</h4>
//               <div className="flex space-x-4 text-gray-600">
//                 <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook"></i></a>
//                 <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
//                 <a href="#" className="hover:text-red-600"><i className="fab fa-instagram"></i></a>
//                 <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin"></i></a>
//               </div>
//             </div>

//             {/* Disqus Comments */}
//             <div className="mt-10" id="disqus_thread"></div>
//           </div>

//           {/* Sidebar */}
//           <aside className="bg-gray-50 rounded-2xl shadow-sm p-6">
//             <div className="mb-8">
//               <h4 className="text-xl font-semibold mb-3">Search Blog</h4>
//               <form action="/blog" method="GET" className="flex">
//                 <input
//                   type="text"
//                   name="term"
//                   placeholder="Search..."
//                   className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-primary text-white px-4 py-2 rounded-r-lg"
//                 >
//                   <i className="fal fa-search"></i>
//                 </button>
//               </form>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold mb-3">Categories</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/blog?category=Business"
//                     className="flex justify-between text-gray-700 hover:text-primary"
//                   >
//                     <span>Business</span>
//                     <span>(3)</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Blog2;

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image from "@/assets/blog-img/2.png";

const Blog2: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Page Banner */}
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{
          backgroundImage:
            "url('https://minibharatlogistics.com/assets/front/img/breadcrumb_image_.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">
            Proven Growth in the First Year
          </h1>
          <p className="text-gray-200">
            Mini Bharat Logistics Private Limited began its successful journey in
            2024.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <img src={image} alt="Blog" className="w-full rounded-lg mb-6" />

            <h3 className="text-3xl font-semibold mb-4">
              Proven Growth in the First Year: A Strong Foundation Built in 2024
            </h3>

            <div className="flex items-center text-gray-500 space-x-4 mb-6">
              <span>By Admin</span>
              <span>Dec 13, 2025</span>
            </div>

            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                Mini Bharat Logistics Private Limited began its journey in 2024
                with a clear mission—to create a reliable, scalable, and
                technology-driven logistics network across India. In just its
                first year of operations, the company demonstrated remarkable
                growth and operational stability.
              </p>

              <p>
                From onboarding delivery partners to establishing strong
                operational hubs, Mini Bharat focused on building a solid
                foundation rather than chasing short-term gains. This strategic
                approach helped the company gain trust from clients and partners
                alike.
              </p>

              <p>
                One of the key drivers of early success was the focus on Tier-2
                and Tier-3 cities. By tapping into underserved markets, Mini
                Bharat created strong demand while avoiding excessive
                competition seen in metro cities.
              </p>

              <p>
                Technology played a major role in this growth. Real-time tracking,
                centralized operations, and performance monitoring tools helped
                ensure smooth deliveries and transparency across the network.
              </p>

              <p>
                Franchise partners experienced consistent parcel flow and daily
                revenue, making the business model attractive even in the first
                year. This early profitability boosted confidence and encouraged
                faster expansion.
              </p>

              <p>
                In summary, Mini Bharat’s first year proved that with the right
                vision, execution, and local focus, logistics can achieve rapid
                and sustainable growth. The success of 2024 laid a strong
                foundation for nationwide expansion.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-gray-50 rounded-2xl shadow-sm p-6 h-fit">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Search Blog</h4>
              <form action="/blog" method="GET" className="flex">
                <input
                  type="text"
                  name="term"
                  placeholder="Search..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-lg"
                >
                  Search
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="flex justify-between text-gray-700 hover:text-primary"
                  >
                    <span>Company Updates</span>
                    <span>(3)</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog2;
