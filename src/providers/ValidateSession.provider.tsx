"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export const ValidateSession = ({ children }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h3>Loading...</h3>;
  } else if (status === "unauthenticated") {
    router.replace("/auth/login");
  }

  return <div>{children}</div>;
}