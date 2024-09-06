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
import MarqueeDemo from "./component/Testimonials";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <Header isDarkMode={isDarkMode} switchTheme={switchTheme} />
      <Hero isDarkMode={isDarkMode}/>
      <SecondSlide />
      <MarqueeDemo />
      <Pricing />
      <Footer />
      {/* <ChatAiWidget
        applicationId="A93694F4-EAA9-436C-A442-AD43F444AD13"
        botId="onboarding_bot"
      /> */}
    </div>
  );
}
