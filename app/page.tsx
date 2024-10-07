"use client";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
// import Testimonials from "./component/Testimonials";
// import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";
import SecondSlide from "./component/SecondSlide";
import Pricing from "./component/Pricing";
import { useEffect, useState } from "react";
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
      />
      {displayCountdown && <Countdown setDisplayCountdown={setDisplayCountdown} />}
      <Hero isDarkMode={isDarkMode} setDisplayCountdown={setDisplayCountdown} />
      <WhyUs />
      <hr />
      <Dataslide isDarkMode={isDarkMode} />
      <ATSSurvey isDarkMode={isDarkMode} />
      <SecondSlide />
      <ResponsiveMarquee />
      {/* {!displayCountdown && (
        <div>
          <Companies />
        </div>
      )} */}
      <Pricing />
      <Footer />
      {/* <ChatAiWidget
        applicationId="A93694F4-EAA9-436C-A442-AD43F444AD13"
        botId="onboarding_bot"
      /> */}
    </div>
  );
}
