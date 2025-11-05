import fs from "fs";
import path from "path";
import matter from "gray-matter";

const componentsDir = path.join(process.cwd(), "public/data/Componets");

export function getAllComponents() {
  const files = fs.readdirSync(componentsDir);
  const components = files.map((filename) => {
    const filePath = path.join(componentsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });

  return components;
}

export function getComponentBySlug(slug) {
  const filePath = path.join(componentsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { ...data, content };
}
