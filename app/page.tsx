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

const THEME_KEY = "theme";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme === "dark";
  });
  // Directly setting it to the state solves the problem where the
  // user's preference will not be resetted after re-rendering the site

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <Header isDarkMode={isDarkMode} switchTheme={switchTheme} />
      <Hero isDarkMode={isDarkMode} />
      <WhyUs />
      <SecondSlide />
      <ResponsiveMarquee />
      <Pricing />
      <Footer />
      {/* <ChatAiWidget
        applicationId="A93694F4-EAA9-436C-A442-AD43F444AD13"
        botId="onboarding_bot"
      /> */}
    </div>
  );
}
