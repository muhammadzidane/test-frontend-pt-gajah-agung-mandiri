"use client";

import { useSearchParams, useRouter } from "next/navigation";

const SortButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSortOrder = searchParams.get("order") ?? "asc";

  const toggleSortOrder = () => {
    const newOrder = currentSortOrder === "asc" ? "desc" : "asc";
    const params = new URLSearchParams(searchParams);
    params.set("order", newOrder);
    router.push(`/?${params.toString()}`);
  };

  return (
    <button
      onClick={toggleSortOrder}
      className="font-semibold px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
    >
      {currentSortOrder.toUpperCase()}
    </button>
  );
};

export default SortButton;
