/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MenuIcon } from "./icons/icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavbarV0() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div>
            <Link
              href="/"
              className="flex justify-start lg:hidden"
              prefetch={false}
            >
              <img
                src="/logo.png"
                title="Logo de Federación de Patinaje de El Salvador"
                className="h-16 min-w-16 min-h-16"
                alt="Logo sass-notes-dandevcompany"
              />
              <span className="sr-only">Logo sass-notes-dandevcompany</span>
            </Link>
          </div>
          <div className="flex-grow flex flex-col">
            <Link
              href="/"
              className="flex justify-start lg:hidden hover:bg-neutral-700"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/"
              className="flex justify-start py-2 lg:hidden hover:bg-neutral-700"
              prefetch={false}
            >
              Billing
            </Link>

            <LogoutLink className="text-sm text-accent-foreground hover:underline">
              <Button variant="secondary" size="sm">
                Log out
              </Button>
            </LogoutLink>

            {(await isAuthenticated()) && (
              <div className="mt-auto p-1 bg-neutral-900 rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                  {user?.picture ? (
                    <img
                      className="w-8 h-w-8 rounded-full border-2 border-primary"
                      src={user.picture}
                      alt="user profile avatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className=" rounded-full bg-primary flex items-center justify-center text-sm font-bold text-secondary-foreground">
                      {user?.given_name?.[0]}
                      {user?.family_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {user?.given_name} {user?.family_name}
                    </p>
                    <p className="text-xs text-muted-foreground text-wrap">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-2 hidden lg:flex" prefetch={false}>
        <img
          src="/logo.png"
          title="Logo de Federación de Patinaje de El Salvador"
          className="h-12 min-w-h-12 min-h-12"
          alt="Logo sass-notes-dandevcompany"
        />
        <span className="sr-only">Logo sass-notes-dandevcompany</span>
      </Link>

      {/* Nuevas opciones de navegación para dispositivos grandes */}
      <nav className="hidden lg:flex items-center space-x-4 ml-6">
        <Link
          href="/"
          className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg px-4"
        >
          Home
        </Link>
        <Link
          href="/billing"
          className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg px-4"
        >
          Billing
        </Link>
      </nav>

      <div className="ml-auto hidden md:flex gap-4">
        {!(await isAuthenticated()) ? (
          <>
            <LoginLink className="items-center py-2 text-lg font-semibold">
              <Button variant="secondary" size="lg">
                Login
              </Button>
            </LoginLink>
            <RegisterLink className="items-center py-2 text-lg font-semibold">
              <Button variant="outline" size="lg">
                Sign up
              </Button>
            </RegisterLink>
          </>
        ) : (
          <div className="profile-blob">
            {user?.picture ? (
              <img
                className="avatar"
                src={user?.picture}
                alt="user profile avatar"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="avatar">
                {user?.given_name?.[0]}
                {user?.family_name?.[0]}
              </div>
            )}
            <div>
              <p className="text-heading-2">
                {user?.given_name} {user?.family_name}
              </p>

              <LogoutLink className="text-subtle">Log out</LogoutLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
