"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFromCookie } from "../functions/cookie.functions";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const user = getFromCookie("user");
    if (!user) {
      router.push("/auth/login");
    } else {
      setAuthenticated(true);
    }
  }, []);

  return authenticated ? children : null;
}

export default ProtectedRoute;
