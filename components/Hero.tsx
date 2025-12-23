"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Purple gradient glow */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Meet MarketNode
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          Where infrastructure meets{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            innovation
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Building digital market infrastructure for funds, structured products, and credit.
          Enabling financial institutions to automate, integrate and distribute traditional
          and tokenized products seamlessly.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8"
            endContent={<ArrowRight className="h-5 w-5" />}
          >
            See open roles
          </Button>
          <Button
            size="lg"
            variant="bordered"
            className="border-gray-300 dark:border-gray-700 font-semibold px-8"
          >
            Learn more
          </Button>
        </div>

        {/* Stats or badges (optional) */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-500">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>1.3M+ funds orders processed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <span>6,961 documents processed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span>Singapore CMS Licensed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
