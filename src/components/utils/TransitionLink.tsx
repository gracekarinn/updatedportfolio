"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const mainContent = document.querySelector(".main-content");

    mainContent?.classList.add("page-transition-exit");

    await new Promise((resolve) => setTimeout(resolve, 500));

    router.push(href);

    mainContent?.classList.remove("page-transition-exit");
    mainContent?.classList.add("page-transition-enter");

    await new Promise((resolve) => setTimeout(resolve, 500));

    mainContent?.classList.remove("page-transition-enter");
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
};
