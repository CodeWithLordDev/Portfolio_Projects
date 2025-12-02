import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import Image from "next/image";
import rehypeRaw from 'rehype-raw';
import BackgroundGrid from "@/components/BackgroundGrid";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

async function getMarkdownContent(slug) {
  const filepath = path.join(process.cwd(), "public", "content", `${slug}.md`);
  try {
    const fileContent = await fs.promises.readFile(filepath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}

export default async function Page({ params }) {
  const param = await params;
  const slug = param.slug;
  const fileContent = await getMarkdownContent(slug);

  if (!fileContent) {
    return notFound();
  }

  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeDocument, { title: data.title || "Blog Post" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <BackgroundGrid />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button with animation */}
        <Link
          href="/blog"
          className="group inline-flex mt-14 items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 mb-8 sm:mb-12"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm sm:text-base font-medium">Back to Blogs</span>
        </Link>

        {/* Hero Image with overlay effect */}
        <div className="relative mb-8 sm:mb-12 group overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10 opacity-60" />
          <Image
            src={data.image}
            alt={data.title}
            width={1200}
            height={600}
            priority={false}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Title with gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          {data.title}
        </h1>

        {/* Meta info with icons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-sm sm:text-base text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{data.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(data.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          {data.readTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{data.readTime} min read</span>
            </div>
          )}
        </div>

        {/* Description with accent border */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed pl-6">
            {data.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12" />

        {/* Content with enhanced prose styling */}
        <article
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose prose-lg prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-white prose-h2:to-gray-400 prose-h2:bg-clip-text prose-h2:text-transparent
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors
            prose-strong:text-white prose-strong:font-semibold
            prose-code:text-cyan-400 prose-code:bg-gray-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl prose-pre:shadow-2xl
            prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:my-2
            prose-img:rounded-xl prose-img:shadow-2xl"
        />

        {/* Bottom spacer */}
        <div className="h-24" />
      </div>
    </main>
  );
}