"use client";

import Sidebar from "@/components/Sidebar";
import { javascriptTopics } from "@/data/javascriptTopics";

export default function JavaScriptLayout({ children }) {
  const pageClass = "bg-[#020617] text-white";

  return (
    <div className={`min-h-screen ${pageClass}`}>
      <div className="mx-auto flex w-full max-w-[1600px]">
        <Sidebar
          topics={javascriptTopics}
          basePath="/learn/javascript"
          courseTitle="JavaScript Learning Path"
        />
        <main className="min-h-screen flex-1 scroll-smooth px-4 pb-16 pt-24 md:px-8">{children}</main>
      </div>
    </div>
  );
}
