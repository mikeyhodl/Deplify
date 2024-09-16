/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-screen">
      <div className="flex flex-col items-center gap-1 text-center">
        <img
          className="mt-4"
          src="https://merakiui.com/images/components/illustration.svg"
          alt="404"
        />
        <h3 className="text-2xl font-bold tracking-tight">Page not found</h3>
        <Link href="/">
          <Button className="mt-4">Home</Button>
        </Link>
      </div>
    </div>
  );
}
