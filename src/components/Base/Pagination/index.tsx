"use client";

import React from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Button } from "@/components";
import { createUrl } from "@/helpers";

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPage = 0,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  /**
   * Handle navigation
   */
  const handleNavigation = (pageIncrement: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    const addPage = searchParams.get("page") ?? currentPage.toString();
    const pageValue = isNaN(parseInt(addPage, 10))
      ? 2
      : parseInt(addPage, 10) + pageIncrement;

    newParams.set("page", pageValue.toString());
    router.push(createUrl(pathname, newParams));
  };

  /**
   * Handle previous button
   */
  const onPrevious = () => {
    handleNavigation(-1);
  };

  /**
   * Handle next button
   */
  const onNext = () => {
    handleNavigation(1);
  };

  const page = isNaN(parseInt(searchParams.get("page") ?? "", 10))
    ? currentPage
    : parseInt(searchParams.get("page") ?? currentPage.toString(), 10);

  return (
    <div className="text-sm flex justify-between mt-4">
      <div className="font-semibold">Total Page: {totalPage}</div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <Button
            onClick={onPrevious}
            icon="icon-expand-left"
            disabled={page <= 1}
            outline
          />
          <span className="font-semibold">{page}</span>
          <Button
            onClick={onNext}
            disabled={page === totalPage}
            icon="icon-expand-right"
            outline
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
