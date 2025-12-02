import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const contentDir = path.join(process.cwd(), "public/content");

  const files = fs.readdirSync(contentDir);

  const blogs = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return data;
  });

  return <BlogClient blogs={blogs} />;
}
