import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MapPin, Clock, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import mcmCarsLogo from "@/assets/mcm-cars-logo.png";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  children?: NavLink[];
}

const Header = () => {
  const { getPhoneNumber, getAddress, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const address = getAddress();

  const navigationLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/stock", label: "Vehículos Exclusivos" },
    { href: "https://www.montecarmelomadridcars.com/mcm-rental-cars", label: "MCM Rental Cars", external: true },
    { href: "https://www.montecarmelomadridcars.com/productos-y-servicios/mcm-wash", label: "MCM Wash", external: true },
    {
      href: "#",
      label: "Postventa",
      children: [
        { href: "/servicio-postventa", label: "Servicios Postventa" },
        { href: "/productos-y-servicios", label: "Productos y Servicios" },
      ],
    },
    {
      href: "#",
      label: "Nosotros",
      children: [
        { href: "/quienes-somos", label: "Quiénes somos" },
        { href: "/ubicaciones-y-horarios", label: "Ubicaciones y horarios" },
      ],
    },
  ];

  return (
    <header className="bg-nav-background text-nav-foreground border-b border-border/10">
      {/* Line 1: Logo, Address, Hours, Call Button */}
      <div className="bg-[#111] text-white border-b border-border/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side: Hamburger + Logo */}
            <div className="flex items-center gap-3">
              {/* Hamburger Menu Button - Mobile only */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-gray-300 hover:bg-white/10"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={24} />
              </Button>

              <a href="/" className="hover:opacity-80 transition-opacity">
                <img
                  src={mcmCarsLogo}
                  alt="MCM Cars Logo"
                  className="h-12 object-contain"
                />
              </a>
            </div>

            {/* Address & Hours - Desktop Only */}
            <div className="hidden lg:flex items-center gap-16 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-white mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{t('header.address')}</span>
                  <span className="text-white/70">{address.street}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-white mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{t('header.hours')}</span>
                  <span className="text-white/70">{t('footer.hours.weekday')}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-white mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{t('header.phone')}</span>
                  <span className="text-white/70">{getPhoneNumber()}</span>
                </div>
              </div>
            </div>

            {/* Right side: Call Button */}
            <Button variant="premium" className="hidden md:flex items-center gap-2" asChild>
              <a href={`tel:${getPhoneNumber()}`}>
                <Phone size={16} />
                {t('common.call_now')}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop */}
      <div className="hidden md:block bg-[#111] border-b border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-8 py-3">
            {navigationLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="text-white/90 hover:text-white transition-colors font-medium flex items-center gap-1">
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-md shadow-xl min-w-[200px] py-2">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-white/90 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button - Only visible on mobile */}

      {/* Slide-out Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="bg-[#111] text-white border-r border-white/10 w-[320px] sm:w-[380px]">
          <SheetHeader className="border-b border-white/10 pb-6">
            <SheetTitle className="text-left">
              <img
                src={mcmCarsLogo}
                alt="MCM Cars Logo"
                className="h-10 object-contain"
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-1 mt-6">
            {navigationLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === link.label ? null : link.label)
                    }
                    className="w-full flex items-center justify-between text-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors py-3 px-4 rounded-md"
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        openSubmenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === link.label && (
                    <div className="ml-4 border-l border-white/10 pl-4 flex flex-col space-y-1 mt-1">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          target={child.external ? "_blank" : undefined}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className="text-base text-white/70 hover:text-white hover:bg-white/10 transition-colors py-2.5 px-4 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors py-3 px-4 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Contact info in sidebar */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4 px-4">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-white/60 mt-1 flex-shrink-0" />
              <span className="text-sm text-white/70">{address.street}, {address.postalCode} {address.city}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-white/60 mt-1 flex-shrink-0" />
              <span className="text-sm text-white/70">{t('footer.hours.weekday')}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-white/60 mt-1 flex-shrink-0" />
              <span className="text-sm text-white/70">{getPhoneNumber()}</span>
            </div>
          </div>

          <div className="mt-6 px-4">
            <Button variant="premium" className="w-full items-center gap-2" asChild>
              <a href={`tel:${getPhoneNumber()}`}>
                <Phone size={16} />
                {t('common.call_now')}
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;