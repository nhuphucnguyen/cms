"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export function CareersCTA() {
  return (
    <section id="company" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-900">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Create tomorrow&apos;s digital market infrastructure with us
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join our team in building the future of institutional finance infrastructure.
          We&apos;re transforming how financial institutions operate in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8"
            endContent={<ArrowRight className="h-5 w-5" />}
          >
            View open positions
          </Button>
          <Button
            size="lg"
            variant="bordered"
            className="border-white text-white hover:bg-white/10 font-semibold px-8"
          >
            About our culture
          </Button>
        </div>
      </div>
    </section>
  );
}
