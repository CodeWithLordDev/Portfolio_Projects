import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const contentDir = path.join(process.cwd(), "public/content");

  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

  const blogs = files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
        const { data } = matter(raw);
        return data;
      } catch (error) {
        console.warn(`Skipping invalid markdown frontmatter in ${file}:`, error.message);
        return null;
      }
    })
    .filter(Boolean);

  return <BlogClient blogs={blogs} />;
}
