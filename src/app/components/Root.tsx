import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Root() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <Navigation />
      <Outlet />
    </div>
  );
}
