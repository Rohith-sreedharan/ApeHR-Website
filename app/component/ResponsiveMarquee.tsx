import React from "react";
import MarqueeDemo from "./Testimonials";
import { MarqueeDemoVertical } from "./MarqueeDemoVertical";

const ResponsiveMarquee = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex">
        <MarqueeDemo />
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden">
        <MarqueeDemoVertical />
      </div>
    </div>
  );
};

export default ResponsiveMarquee;
