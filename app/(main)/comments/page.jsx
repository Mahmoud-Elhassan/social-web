"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const commentsDir = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);
};

export default commentsDir;
