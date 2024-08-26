"use client";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../ui/button";

interface BackButtonProps {
  className?: string;
  iclassName?: string;
}

const BackButton = ({ className, iclassName }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={twMerge(
        "size-12 rounded-lg bg-indigo-500 hover:bg-indigo-500/80",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <ChevronLeftIcon className={twMerge("stroke-background", iclassName)} />
      </div>
    </Button>
  );
};

export default BackButton;