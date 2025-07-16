import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  indent?: boolean;
  type?: "divider" | "item";
}

const navItems: NavItem[] = [
  { id: "class-subclass", label: "Level 1" },
  { id: "balance-enweave", label: "Features", indent: true },
  { id: "maneuvers", label: "Maneuvers", indent: true },
  { id: "triggers", label: "Triggers", indent: true },
  { id: "signatures", label: "Signatures", indent: true },
  { id: "three-hr", label: "3-Balance Abilities", indent: true },
  { id: "five-hr", label: "5-Balance Abilities", indent: true },
  { id: "level-2", label: "Level 2" },
  { id: "level-3", label: "Level 3" },
  { id: "divider-1", label: "divider-1", type: "divider" },
  { id: "kits", label: "Kits" },
  { id: "changelog", label: "Changelog" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = "" }: SidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-[#e0e0e0] border-1 rounded-lg shadow-lg p-4 max-h-[80vh] overflow-y-auto w-40 text-xs ${className}`}
    >
      <h3
        className="font-semibold text-gray-800 uppercase tracking-wide"
        style={{ marginBottom: "10px" }}
      >
        Navigation
      </h3>
      <div className="space-y-0.5">
        {navItems.map((item) => (
          <div key={item.id}>
            {item.type === "divider" ? (
              <div className="my-2 mx-1">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              </div>
            ) : (
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-2 py-1 rounded transition-colors cursor-pointer ${
                  item.indent ? "ml-2" : ""
                } ${
                  activeSection === item.id
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
