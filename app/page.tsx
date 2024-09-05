"use client";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonials";
import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <ChatAiWidget
        applicationId="A93694F4-EAA9-436C-A442-AD43F444AD13"
        botId="onboarding_bot"
      />
    </div>
  );
}
