import { getAllComponents } from "../../utils/getComponents";
import Link from "next/link";
import BackgroundGrid from "@/components/BackgroundGrid";
import ComponentGridClient from "../../components/ComponentGridClient";
import PaginationClient from "../../components/PagniationClient";
// ✅ MUST BE ASYNC SERVER COMPONENT
export default async function ComponentsPage({ searchParams }) {

  // ✅ Await the component data

  const params = await searchParams;
  const page = parseInt(params?.page || "1", 10);


  const components = await getAllComponents();

  const perPage = 6;
  const totalPages = Math.ceil(components.length / perPage);

  // ✅ Proper searchParams usage (safe in server component)
  // const currentPage = parseInt(searchParams?.page || "1", 10);

  const startIndex = (page - 1) * perPage;
  const shown = components.slice(startIndex, startIndex + perPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-8">
      <BackgroundGrid />

       {/* 👇 Client Component Here */}
        <ComponentGridClient shown={shown} />
        <PaginationClient currentPage={page} 
            totalPages={totalPages}/>

      
    </div>
  );
}
