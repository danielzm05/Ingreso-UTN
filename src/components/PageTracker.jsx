import { useEffect } from "react";
import posthog from "posthog-js";
import { useLocation } from "react-router";

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    posthog.capture(`Visitó: ${location.pathname}`, {
      ruta: location.pathname,
    });
  }, [location]);

  return null;
};
