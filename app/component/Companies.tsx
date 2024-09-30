import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items at once on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="companies">
      <div className="py-14 border bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-10">
            <Slider {...settings}>
              {companies.map((logo, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={`https://cdn.magicui.design/companies/${logo}.svg`}
                    className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                    alt={logo}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
