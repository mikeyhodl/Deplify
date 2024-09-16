"use client";
import { SubmitButton } from "@/app/(mainLayout)/submit-button";
import { AuthSignUp } from "@/lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "module";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      setIsLoggingIn(true);
      // Call StartSession function with phone and password
      await AuthSignUp(email, password, firstName, lastName);
      setIsLoggingIn(false);
      // toast after registration
      toast.success("Registered successfully");
      toast.success("Login To Proceed");
      router.push("/auth/login");
    } catch (error: any) {
      // Error Registering
      console.error("Error logging in:", error);
      toast.error(error.message || "Error Registering, Please Try Again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen">
      <div className="flex items-center justify-center py-12">
        <form onSubmit={handleSignUp}>
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Max"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Robinson"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Create an account"}
                </Button>
                {/* <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button> */}
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/pexels-charlotte-may-5965893.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
