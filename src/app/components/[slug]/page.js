import {
  getComponentBySlug,
  getAllComponents,
} from "../../../utils/getComponents";
import MarkdownRenderer from "./MarkdownView";
import Image from "next/image";
import BackgroundGrid from "@/components/BackgroundGrid";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Sparkles, Code2 } from "lucide-react";

export async function generateStaticParams() {
  const components = await getAllComponents();
  return components.map((c) => ({ slug: c.slug }));
}

export default async function ComponentDetail({ params }) {
  const { slug } = await params;
  const component = await getComponentBySlug(slug);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950 text-white overflow-hidden">
      <BackgroundGrid />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative mt-14 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Back Button */}
        <Link
          href="/components"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 mb-12"
        >
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          <span className="text-sm font-medium">Back to Components</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-16 space-y-8">
          {/* Component Preview Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-500/0 group-hover:from-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-700" />
            
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10 opacity-50" />
              <Image
                src={component.image}
                alt={component.title}
                width={1200}
                height={675}
                priority
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium">Component</span>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent leading-tight tracking-tight">
              {component.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <User className="w-4 h-4" />
                <span>{component.author}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-4 h-4" />
                <span>{new Date(component.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-cyan-500 to-pink-500 rounded-full" />
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {component.description}
              </p>
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-950 px-4">
              <Sparkles className="w-5 h-5 text-violet-400" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-pink-500/50 hidden lg:block" />
          
          <div className="lg:pl-12">
            <MarkdownRenderer content={component.content} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 mb-12 p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-violet-400" />
                <h3 className="text-2xl font-bold">Love this component?</h3>
              </div>
              <p className="text-gray-400">Explore more components and build amazing UIs.</p>
            </div>
            <Link
              href="/components"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium hover:from-violet-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50"
            >
              <Code2 className="w-5 h-5" />
              View All Components
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}