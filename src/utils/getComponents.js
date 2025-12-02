"use server";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

// ✅ Corrected Folder Name
const componentsDir = path.join(process.cwd(), "public/data/Componets");

export async function getAllComponents() {
  try {
    const files = await fs.readdir(componentsDir);

    const components = await Promise.all(
      files
        .filter((file) => file.endsWith(".md"))
        .map(async (filename) => {
          const filePath = path.join(componentsDir, filename);
          const fileContent = await fs.readFile(filePath, "utf-8");
          const { data } = matter(fileContent);

          return {
            slug: filename.replace(".md", ""),
            ...data,
          };
        })
    );

    return components;
  } catch (error) {
    console.error("Error reading components:", error);
    return [];
  }
}

export async function getComponentBySlug(slug) {
  try {
    const filePath = path.join(componentsDir, `${slug}.md`);

    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { ...data, content };
  } catch (error) {
    console.error("Error fetching component:", error);
    return null;
  }
}
