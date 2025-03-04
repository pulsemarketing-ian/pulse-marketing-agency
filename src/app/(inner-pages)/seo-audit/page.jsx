import HeroSection from "@/components/landing_page_components/seo-audit-components/HeroSection";
import React from "react";
import Footer from "@/components/layout/Footer"

const page = () => {
  return (
    <main className="theme_bg_color">
      <HeroSection />
      {/* <script defer src="https://online.seranking.com/frontend-dist/widget-manager/main.js"></script>
      <script defer src="https://online.seranking.com/frontend-dist/Widgets/js/main.js" data-widget-type="form"  data-widget-page-audit-id="4127606-31"></script> */}
      <Footer />
    </main>
  );
};

export default page;
