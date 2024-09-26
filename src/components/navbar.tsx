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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  LoginLink,
  LogoutLink,
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
                title="Logo notes-dandevcompany"
                className="h-16 min-w-16 min-h-16"
                alt="Logo notes-dandevcompany"
              />
              <span className="sr-only">Logo notes-dandevcompany</span>
            </Link>
          </div>
          <div className="flex-grow flex flex-col">
            {!(await isAuthenticated()) ? (
              <div className="gap-3">
                <Alert className="w-full bg-zinc-800 mb-3">
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription className="text-sm w-full">
                    Join us to access all features!
                  </AlertDescription>
                </Alert>
                <LoginLink className="items-start text-base font-semibold pr-3 my-2">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </LoginLink>
              </div>
            ) : (
              <>
                <Link
                  href="/"
                  className="flex justify-start lg:hidden hover:bg-neutral-700 py-2"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="flex justify-start py-2 lg:hidden hover:bg-neutral-700"
                  prefetch={false}
                >
                  Dashboard
                </Link>
                <Link
                  href="/billing"
                  className="flex justify-start py-2 lg:hidden hover:bg-neutral-700"
                  prefetch={false}
                >
                  Billing
                </Link>
                <Link
                  href="/settings"
                  className="flex justify-start py-2 lg:hidden hover:bg-neutral-700"
                  prefetch={false}
                >
                  Settings
                </Link>
                <LogoutLink className="text-sm text-accent-foreground hover:underline">
                  <Button variant="secondary" size="sm">
                    Log out
                  </Button>
                </LogoutLink>
              </>
            )}

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
          title="Logo notes-dandevcompany"
          className="h-12 min-w-h-12 min-h-12"
          alt="Logo notes-dandevcompany"
        />
        <span className="sr-only">Logo notes-dandevcompany</span>
      </Link>

      <nav className="hidden lg:flex items-center space-x-4 ml-6">
        {!(await isAuthenticated()) ? (
          <></>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg"
            >
              Dashboard
            </Link>
            <Link
              href="/billing"
              className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg px-4"
              prefetch={false}
            >
              Billing
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg"
              prefetch={false}
            >
              Settings
            </Link>
          </>
        )}
      </nav>
      <div className="ml-auto hidden md:flex gap-4">
        {!(await isAuthenticated()) ? (
          <>
            <LoginLink className="items-center py-2 text-lg font-semibold">
              <Button variant="secondary" size="lg">
                Login
              </Button>
            </LoginLink>
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
