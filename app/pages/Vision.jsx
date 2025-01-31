import React, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Vision = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section>
      <div className="text-center mx-3 mb-36">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Our Vision
        </h1>
        <p className="font-play mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-[#B1C8BF]">
          Guiding Your Success Every Step of the Way
        </p>
        <p className="mt-8 text-lg sm:text-md md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          To help businesses, creators, and innovators turn their ideas into
          impactful realities.
        </p>
        <br />
        <br />
        <button
          data-cal-namespace="15min"
          data-cal-link="fool-ideas-4gekzz/15min"
          data-cal-config='{"layout":"month_view"}'
        >
          <div className=" mt-10 px-4 py-4 text-[#fff] bg-green-600 rounded-full hover:bg-green-700">
            Free Iitial Consultation
          </div>
        </button>
      </div>
    </section>
  );
};

export default Vision;
