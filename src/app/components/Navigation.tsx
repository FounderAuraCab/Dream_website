import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();
  const isInquirePage = location.pathname === "/inquire";

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isInquirePage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link to="/" style={{ fontFamily: 'var(--font-serif)' }} className="text-[#F5F5F7] text-2xl font-light tracking-wide">
            D
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <Link to="/" style={{ fontFamily: 'var(--font-serif)' }} className="text-[#F5F5F7] text-2xl font-light tracking-wide">
          D
        </Link>
        <div className="flex gap-12 items-center">
          <button
            onClick={() => scrollToSection("philosophy")}
            className="text-[#F5F5F7] text-sm tracking-wide hover:text-[#E5E7EB] transition-colors duration-300"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollToSection("architecture")}
            className="text-[#F5F5F7] text-sm tracking-wide hover:text-[#E5E7EB] transition-colors duration-300"
          >
            The Architecture
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-[#F5F5F7] text-sm tracking-wide hover:text-[#E5E7EB] transition-colors duration-300"
          >
            Process
          </button>
          <Link
            to="/inquire"
            className="text-[#F5F5F7] text-sm tracking-wide hover:text-[#E5E7EB] transition-colors duration-300"
          >
            Inquire
          </Link>
        </div>
      </div>
    </nav>
  );
}
