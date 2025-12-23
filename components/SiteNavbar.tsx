"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BRAND_NAME, NAV_LINKS } from "@/lib/constants";

export function SiteNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold">
              M
            </div>
            <span className="text-xl font-semibold tracking-tight">
              {BRAND_NAME}
            </span>
          </div>

          {/* Center: Nav Links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA Buttons + Theme Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="bordered"
              size="sm"
              className="hidden sm:flex border-gray-300 dark:border-gray-700"
            >
              Contact sales
            </Button>
            <Button
              color="primary"
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
            >
              Log in
            </Button>
            {mounted && (
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
