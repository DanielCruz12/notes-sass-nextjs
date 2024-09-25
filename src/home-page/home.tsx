import { PrismaClient } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const prisma = new PrismaClient();

export default async function HomePage() {
  const { isAuthenticated } = getKindeServerSession();
  const users = await prisma.user.findMany();

  return (
    <div>
      <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Revolutionize Your Email Experience
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Join us and take control of your inbox. Fast, secure, and
                  designed for modern life.
                </p>
              </div>
              {!(await isAuthenticated()) ? (
                <Button
                  variant="outline"
                  className="max-w-sm mx-auto"
                  type="submit"
                >
                  Join Now
                </Button>
              ) : (
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="max-w-sm mx-auto"
                    type="submit"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <h1>All Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
