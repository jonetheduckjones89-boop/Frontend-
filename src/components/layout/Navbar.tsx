"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/onboarding")) {
    return null;
  }

  const navLinks = [
    { href: "/product", label: "Product" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/features", label: "Features" },
    { href: "/integrations", label: "Integrations" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <span className="text-2xl font-heading font-semibold text-foreground tracking-tight transition-opacity">
            OREN
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
              "hover:text-foreground transition-colors duration-200",
              pathname === link.href ? "text-foreground font-semibold" : ""
            )}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/onboarding">
            <Button className="rounded-full px-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-300">
              Book Demo
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
