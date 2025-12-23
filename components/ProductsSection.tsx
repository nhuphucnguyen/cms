"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { Database, Workflow, Coins } from "lucide-react";

const products = [
  {
    icon: Database,
    title: "Data Services",
    description:
      "Extract, transfer and loading of unstructured data using AI / LLM models for seamless integration.",
  },
  {
    icon: Workflow,
    title: "Transaction Management",
    description:
      "Order management, corporate actions and transfer agent automation for institutional efficiency.",
  },
  {
    icon: Coins,
    title: "Tokenization and Registry",
    description:
      "Tokenization, distribution, asset servicing and registrar capabilities on blockchain.",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Digital Market Infrastructure</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Institutional platform on blockchain enabling financial institutions to automate, integrate and distribute traditional and tokenized products seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <CardHeader className="flex gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <product.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </CardHeader>
              <CardBody>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
