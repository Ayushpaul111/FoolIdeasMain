"use client";
import { useEffect, forwardRef } from "react";
import { getCalApi } from "@calcom/embed-react";

const MeetButton = forwardRef(function MeetButton(
  { children, className = "", onClick, ...props },
  ref,
) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      ref={ref}
      data-cal-namespace="30min"
      data-cal-link="bireswar/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

export default MeetButton;
