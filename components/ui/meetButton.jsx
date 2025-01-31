import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="15min"
      data-cal-link="fool-ideas-4gekzz/15min"
      data-cal-config='{"layout":"month_view"}'
    >
      Click me
    </button>
  );
}
