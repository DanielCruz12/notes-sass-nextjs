import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import TitleSection from "@/components/title-section";

export default async function HomePage() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <section>
      <section className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <span
                  id="colorChangingBadge"
                  className="px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-[3000ms] ease-in-out"
                >
                  DanDevNotes Beta
                </span>
                <h1 className="font-bold pb-1 text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Elevate Your Note-Taking with AI-Powered Insights
                </h1>
                <p className="w-full max-w-5xl text-zinc-200 text-sm md:text-xl mx-auto pb-2">
                  Where your ideas meet artificial intelligence. Capture,
                  organize, and enhance your thoughts with smart, AI-assisted
                  note-taking with dandevnotes.
                </p>
              </div>
              {!(await isAuthenticated()) ? (
                <RegisterLink className="items-center text-base font-semibold">
                  <Button variant="secondary" size="default">
                    Sign up
                  </Button>
                </RegisterLink>
              ) : (
                <Link href="/dashboard" className="mx-auto">
                  <Button variant="outline" className="max-w-sm" type="submit">
                    Go to Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex h-[calc(75vh-100px)] flex-col items-center justify-center px-4sm:px-6">
        <div
          className="top-22
          absolute
          -z-10
          h-32
          w-[100%]
          max-w-[300px]
          opacity-30
          rounded-full
          bg-blue-400
          blur-[120px]
        "
        />
        <TitleSection
          title="Hey 👋 I am Daniel Cruz"
          subheading="CEO of DanDev Company"
          pill="About me"
        />
        <span className="text-sm pt-3 px-10 text-center">
          I lead our efforts in the power of AI and software development to
          create innovative solutions.
        </span>
        <p className=" text-xl text-gray-600 dark:text-gray-300">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-blue-800 "></span>
            <span className="relative text-gray-400"> Have a question? </span>
          </span>
          <br className="block sm:hidden" />
          Ask me on{" "}
          <a
            href="https://x.com/Daniel_CruzD"
            target="_blank"
            title="daniel-cruz"
            className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
          >
            Twitter
          </a>
        </p>
      </section>
    </section>
  );
}
