import { getAllComponents } from "../../utils/getComponents";
import Link from "next/link";

export const metadata = { title: "Components" };

export default function ComponentsPage({ searchParams }) {
  const components = getAllComponents();
  const perPage = 6;
  const totalPages = Math.ceil(components.length / perPage);

  const currentPage = parseInt(searchParams.page || "1", 10);
  const startIndex = (currentPage - 1) * perPage;
  const shown = components.slice(startIndex, startIndex + perPage);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="relative top-[5rem]">
        <h1 className="text-4xl font-bold text-center mb-8">UI Components</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shown.map((comp) => (
            <div
              key={comp.slug}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <img
                src={comp.image}
                alt={comp.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <Link href={`/components/${comp.slug}`}>
                  <h2 className="text-xl font-semibold hover:text-blue-400 transition">
                    {comp.title}
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {comp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {components.length > perPage && (
          <div className="text-center mt-10 mb-24 flex justify-center gap-4">
            {currentPage > 1 && (
              <Link
                href={`/components?page=${currentPage - 1}`}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                ← Prev
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/components?page=${currentPage + 1}`}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Next →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
