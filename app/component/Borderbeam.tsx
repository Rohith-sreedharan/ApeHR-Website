import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedBeamDemo } from "./AnimatedBeam";

export default function BorderBeamDemo() {
  return (
    <div className="relative dark:bg-black flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedBeamDemo />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
