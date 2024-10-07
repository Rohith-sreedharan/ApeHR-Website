"use client";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
// import Testimonials from "./component/Testimonials";
// import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";
import SecondSlide from "./component/SecondSlide";
import Pricing from "./component/Pricing";
import { useEffect, useState, useRef } from "react";
import WhyUs from "./component/WhyUs";
import ResponsiveMarquee from "./component/ResponsiveMarquee";
import Dataslide from "./component/Dataslide";
import ATSSurvey from "./component/Atssurvey";
import Companies from "./component/Companies";
import Countdown from "./component/Countdown";

const THEME_KEY = "theme";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [displayCountdown, setDisplayCountdown] = useState(false);
  const secondSlideRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToSecondSlide = () => {
    if (secondSlideRef.current) {
      secondSlideRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Header
        isDarkMode={isDarkMode}
        switchTheme={switchTheme}
        setDisplayCountdown={setDisplayCountdown}
        scrollToSecondSlide={scrollToSecondSlide}
        scrollToPricing={scrollToPricing}
      />
      {displayCountdown && (
        <Countdown setDisplayCountdown={setDisplayCountdown} />
      )}
      <Hero isDarkMode={isDarkMode} setDisplayCountdown={setDisplayCountdown} />
      <WhyUs />
      <hr />
      <Dataslide isDarkMode={isDarkMode} />
      <ATSSurvey isDarkMode={isDarkMode} />
      <SecondSlide ref={secondSlideRef} />
      <ResponsiveMarquee />
      {/* {!displayCountdown && (
        <div>
          <Companies />
        </div>
      )} */}
      <Pricing ref={pricingRef} />
      <Footer
        setDisplayCountdown={setDisplayCountdown}
        scrollToSecondSlide={scrollToSecondSlide}
        scrollToPricing={scrollToPricing}
      />
      {/* <ChatAiWidget
        applicationId="A93694F4-EAA9-436C-A442-AD43F444AD13"
        botId="onboarding_bot"
      /> */}
    </div>
  );
}
