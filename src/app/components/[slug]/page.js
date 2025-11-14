import { getComponentBySlug, getAllComponents } from "../../../utils/getComponents";
import MarkdownRenderer from "./MarkdownView";
import Image from "next/image";

export async function generateStaticParams() {
  const components = await getAllComponents();
  return components.map((c) => ({ slug: c.slug }));
}

export default async function ComponentDetail({ params }) {
  const { slug } = await params;

  const component = await getComponentBySlug(slug);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <Image
            src={component.image}
            alt={component.title}
            className="w-full rounded-2xl shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-6 text-white">
            {component.title}
          </h1>
          <p className="text-gray-400 mt-2">{component.description}</p>
        </div>

        {/* Client-side Markdown */}
        <MarkdownRenderer content={component.content} />
      </div>
    </div>
  );
}