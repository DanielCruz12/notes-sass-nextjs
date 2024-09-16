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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function NavbarV0() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const files = {
    calendar: "15_RK8IopMxy--GQSR7NnnSLrqDGkf9M3",
    comisiones: "1i6ksh5i7GwO1D7MiEJjxJ2C4Eqcd7QMw",
    reglamentos: "1nJPp3kuCwLP8tDsUOX-rjVPhlXQaLEXX",
  };

  const handleCloseMenu = () => setIsOpen(false);
  const handleCloseDropdown = () => setIsDropdownOpen(false);

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
              className=" h-28 min-w-18 min-h-18"
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full items-center py-2 text-lg font-semibold">
                Federación
                <ChevronDownIcon className=" h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="animate-in fade-in-80 slide-in-from-top-1"
              >
                <DropdownMenuItem>
                  <Link
                    href="/equipo"
                    prefetch={false}
                    onClick={handleCloseMenu}
                    onChange={handleCloseDropdown}
                  >
                    Comité ejecutivo
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={`/archivos/${files.reglamentos}`}
                    prefetch={false}
                    onClick={handleCloseMenu}
                    onChange={handleCloseDropdown}
                  >
                    Reglamentos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/direccion"}
                    prefetch={false}
                    onClick={handleCloseMenu}
                    onChange={handleCloseDropdown}
                  >
                    Ubicación
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={`/archivos/${files.comisiones}`}
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              Comisiones
            </Link>
            <Link
              href={`/archivos/${files.calendar}`}
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              Calendario
            </Link>
            <Link
              href="/eventos"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              Eventos
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-2 hidden lg:flex" prefetch={false}>
        <img
          src="/logo.png"
          title="Logo de Federación de Patinaje de El Salvador"
          className="h-32 min-w-18 min-h-18"
          alt="logo de la federación nacional de patinaje"
        />
        <span className="sr-only">
          Logo nacional de patinaje de El Salvador
        </span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-5">
        <Link
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Inicio
        </Link>
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
            Federación
            <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="animate-in fade-in-80">
            <DropdownMenuItem onClick={handleCloseDropdown}>
              <Link href="/equipo" prefetch={false} onClick={handleCloseMenu}>
                Comité Ejecutivo
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleCloseDropdown}>
              <Link
                href={`/archivos/${files.reglamentos}`}
                prefetch={false}
                onClick={handleCloseMenu}
              >
                Reglamentos
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleCloseDropdown}>
              <Link
                href={"/direccion"}
                prefetch={false}
                onClick={handleCloseMenu}
              >
                Ubicación
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={`/archivos/${files.comisiones}`}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Comisiones
        </Link>
        <Link
          href={`/archivos/${files.calendar}`}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Calendario
        </Link>
        <Link
          href="/eventos"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Eventos
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
