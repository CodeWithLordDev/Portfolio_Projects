import {
  getComponentBySlug,
  getAllComponents,
} from "../../../utils/getComponents";
import MarkdownRenderer from "./MarkdownView";
import Image from "next/image";
import BackgroundGrid from "@/components/BackgroundGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const components = await getAllComponents();
  return components.map((c) => ({ slug: c.slug }));
}

export default async function ComponentDetail({ params }) {
  const { slug } = await params;

  const component = await getComponentBySlug(slug);

  return (
    <div className="min-h-screen relative bg-[#0a0a0a] text-gray-200 py-12 px-6 md:px-16">
      <div className="pointer-events-none">
        <BackgroundGrid />
      </div>

      <div className="max-w-4xl z-10 mx-auto mt-[5rem] space-y-10">
        {/* Back Button */}
        <Link
          href="/components"
          className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition w-fit mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Back to Components</span>
        </Link>
        <div className="text-center">
          <Image
            width={800}
            height={400}
            priority
            src={component.image}
            alt={component.title}
            className="w-full rounded-2xl shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-6 text-white">
            {component.title}
          </h1>
          <p className="text-xs text-start font-bold sm:text-sm text-gray-500 mt-6 dark:text-gray-400 mb-2">
            {component.author} | {component.date}
          </p>
          <p className="text-gray-400 mt-2 text-start">{component.description}</p>
        </div>

        {/* Client-side Markdown */}
        <MarkdownRenderer content={component.content} />
      </div>
    </div>
  );
}
