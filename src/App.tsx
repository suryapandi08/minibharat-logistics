import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import WhyChooseUs from "./pages/WhyChooseUs";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import APMBusinessModel from "./pages/APMBusinessModel";
import LargeHIHBusinessModel from "./pages/LargeHIHBusinessModel";
import GroceryBusinessModel from "./pages/GroceryBusinessModel";
import Gallery from "./pages/Gallery";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import ODHMDHBusinessModel from "./pages/ODHMDHBusinessModel";
import ODHBusinessModel from "./pages/ODHBusinessModel";
import MDHBusinessModel from "./pages/MDHBusinessModel";

import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";
import BlogHowTo from "./pages/BlogHowTo";
import  LMABusinessModel from "./pages/LMABusinessModel";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LargeShipmentModel from "./pages/LargeShipmentModel";
import NonLargeWarehouseBusinessModel from "./pages/NonLargeWarehouse";
import LastMileBusinessModel from "./pages/LastMileBusinessModel";
import FirstMileBusinessModel from "./pages/FirstMileBusinessModel";
import OwnWarehouseBusinessModel from "./pages/OwnWarehouseBusinessModel";
import LowValueShipmentsBusinessModel from "./pages/LowValueShipments";
import FiveMinsDeliveryWarehouseBusinessModel from "./pages/FiveMinsDelivery";
import MintsDeliveryBusinessModel from "./pages/MintsDelivery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppFloat />
      <BrowserRouter>
        <ScrollToTop />
     <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/services" element={<Services />} />
  <Route path="/why-choose-us" element={<WhyChooseUs />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/blog" element={<Blog />} />      {/* Blog listing */}
  <Route path="/blog-how-to-start-logistics-franchise" element={<BlogHowTo />} />  {/* Blog details */}
  <Route path="/blog1" element={<Blog1 />} />    {/* Blog details */}
  <Route path="/blog2" element={<Blog2 />} />  {/* Blog details */}
  <Route path="/blog3" element={<Blog3 />} />  
  <Route path="/blog4" element={<Blog4 />} />
  <Route path="/blog5" element={<Blog5 />} />
  <Route path="/blog6" element={<Blog6 />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/apm-business-model" element={<APMBusinessModel />} />
  <Route path="/large-hih-business-model" element={<LargeHIHBusinessModel />} />
  <Route path="/grocery-business-model" element={<GroceryBusinessModel />} />
  <Route path="/odh-mdh-business-model" element={<ODHMDHBusinessModel />} />
  <Route path="/odh-business-model" element={<ODHBusinessModel />} />
  <Route path="/mdh-business-model" element={<MDHBusinessModel />} />
  <Route path="/lma-business-model" element={<LMABusinessModel />} />
  <Route path="/large-shipment-warehouse-business-model" element={<LargeShipmentModel />} />
  <Route path="/non-large-warehouse-business-model" element={<NonLargeWarehouseBusinessModel />} />
  <Route path="/last-mile-business-model" element={<LastMileBusinessModel />} />
  <Route path="/first-mile-business-model" element={<FirstMileBusinessModel />} />
  <Route path="/own-warehouse-business-model" element={<OwnWarehouseBusinessModel />} />
  <Route path="/low-value-shipments-business-model" element={<LowValueShipmentsBusinessModel />} />
  <Route path="/5mins-delivery-warehouse-business-model" element={<FiveMinsDeliveryWarehouseBusinessModel />} />
  <Route path="/mints-delivery-business-model" element={<MintsDeliveryBusinessModel />} />

  <Route path="/gallery" element={<Gallery />} />
  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="*" element={<NotFound />} />
</Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
