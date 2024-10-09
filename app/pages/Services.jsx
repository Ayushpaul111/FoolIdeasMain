import React from "react";
import Service from "../../components/ui/Service";
const Services = () => {
  const items = [
    {
      image: "/services/social.svg",
      service: "Social Media Management",
      description:
        " Boost your brand&apos;s presence with content scheduling,engagement, and performance analytics.",
    },
    {
      image: "/services/content.svg",
      service: "Content Creation",
      description:
        "Engage your audience with high-quality, original content tailored to your brand.",
    },
    {
      image: "/services/web.svg",
      service: "Web Development",
      description:
        " Get a sleek, responsive website optimized for performance and conversion.",
    },
    {
      image: "/services/performance.svg",
      service: "Performance Marketing & Paid Media",
      description:
        "Drive traffic and boost conversions with data-driven paid media strategies.",
    },
    {
      image: "/services/search.svg",
      service: "Search Engine Optimization (SEO)",
      description:
        "Improve your search rankings and attract organic traffic with effective SEO techniques.",
    },
    {
      image: "/services/branding.svg",
      service: "Branding and Designing",
      description:
        " Create a memorable brand image with our comprehensive branding and design services.",
    },
    {
      image: "/services/ecomm.svg",
      service: "E-Commerce Marketing",
      description:
        "Increase your online sales with tailored e-commerce marketing strategies.",
    },
    {
      image: "/services/influencer.svg",
      service: "Influencer Marketing",
      description:
        "Amplify your brand's reach with authentic influencer campaigns.",
    },
    {
      image: "/services/ads.svg",
      service: "Google Ads",
      description:
        "Reach your target audience effectively with optimized Google Ads campaigns.",
    }
  ];
  return (
    <section>
      <div className="text-center mx-3 mb-32">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Our Services
        </h1>
        <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          We Love challenging projects that require a comprehensive content
          strategy, thoughtful design, sophisticated development and ongoing
          marketing.
        </p>
        {/* Services */}

        <Service items={items} />
      </div>
    </section>
  );
};

export default Services;
