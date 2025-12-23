"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { TrendingUp, Users, Briefcase } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    category: "Case Study",
    title: "Tipping the tokenisation scales: From intent to impetus, Asia weighs in",
    description:
      "How Asia is leading the charge in tokenization adoption and regulatory frameworks.",
    date: "Nov 11, 2025",
  },
  {
    icon: Users,
    category: "Case Study",
    title: "Fundnode: From efficiency to new business models",
    description:
      "Funds market infrastructure 2.0 — transforming operations into strategic opportunities.",
    date: "Jun 20, 2024",
  },
  {
    icon: Briefcase,
    category: "Case Study",
    title: "Overhauling the USD 8 trillion lending market infrastructure",
    description:
      "Working with New World China Land to modernize lending operations at scale.",
    date: "Nov 27, 2023",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Insights</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Research, analysis, and technical deep dives from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card
              key={insight.title}
              isPressable
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
            >
              <CardHeader className="flex-col items-start gap-2 pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <insight.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{insight.title}</h3>
              </CardHeader>
              <CardBody className="pt-2">
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {insight.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {insight.date}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
