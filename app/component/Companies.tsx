import Marquee from "@/components/magicui/marquee";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export default function Companies() {
  return (
    <section id="companies">
      <div className="py-14 dark:bg-black border rounded">
        <div className="container mx-auto px-4 md:px-8 ">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
              <Marquee pauseOnHover className="[--duration:20s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={logo}
                />
              ))}
              </Marquee>
            </div>
        </div>
      </div>
    </section>
  );
}
