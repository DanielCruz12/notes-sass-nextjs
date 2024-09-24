/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  TwitterIcon,
} from "./icons/icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function NavbarV0() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <Link
            href="/"
            className=" flex justify-start lg:hidden"
            prefetch={false}
          >
            <img
              src="/logo.png"
              title="Logo de Federación de Patinaje de El Salvador"
              className="h-28 min-w-h-28 min-h-28"
              alt="logo de la federación nacional de patinaje"
            />
            <span className="sr-only">
              Logo nacional de patinaje de El Salvador
            </span>
          </Link>
          <div className="grid gap-2 px-2">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              Inicio
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-2 hidden mt-2 lg:flex" prefetch={false}>
        <img
          src="/logo.png"
          title="Logo de Federación de Patinaje de El Salvador"
          className="h-20 min-w-h-20 min-h-20"
          alt="logo de la federación nacional de patinaje"
        />
        <span className="sr-only">
          Logo nacional de patinaje de El Salvador
        </span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-5">
        <Link
          href="/"
          className="group inline-flex text-gray-400 h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium "
          prefetch={false}
        >
          Inicio
        </Link>
      </nav>
      <div className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="https://www.facebook.com/fesapsv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground"
        >
          <FacebookIcon className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="https://www.instagram.com/fesapsv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground"
        >
          <InstagramIcon className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="https://x.com/indeselsalvador/status/1809617334987804799"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground"
        >
          <TwitterIcon className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </header>
  );
}
