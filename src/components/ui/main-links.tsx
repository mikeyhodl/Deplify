import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Settings,
  Send,
  Key,
  Wallet,
  BookUser,
  MessageCircle,
  Headset,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MainLinks() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="/bulk-sms"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <MessageCircle className="h-4 w-4" />
        Bulk SMS
        {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge> */}
      </Link>
      <Link
        href="/contacts"
        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <BookUser className="h-4 w-4" />
        Contacts{" "}
      </Link>
      <Link
        href="/api-keys"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <Key className="h-4 w-4" />
        API Keys
      </Link>
      <Link
        href="/sender-ids"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <Send className="h-4 w-4" />
        Sender IDs
      </Link>
      <Link
        href="/top-up"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <Wallet className="h-4 w-4" />
        Top Up
      </Link>
      <Link
        href="/settings"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <Settings className="h-4 w-4" />
        Settings
      </Link>
      <Link
        href="/reports"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <LineChart className="h-4 w-4" />
        Reports
      </Link>
      <Link
        href="/support"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800/50"
      >
        <Headset className="h-4 w-4" />
        Support
      </Link>
    </nav>
  );
}
