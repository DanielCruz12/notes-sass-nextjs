import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Script from "next/script";

export default async function HomePage() {
  const { isAuthenticated } = getKindeServerSession();

  return (
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
      <Script id="badge-animation">
        {`
          function getRandomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
          }

          function changeColor() {
            const badge = document.getElementById('colorChangingBadge');
            badge.style.backgroundColor = getRandomColor();
          }

          setInterval(changeColor, 2000); // Change color every 2 seconds
        `}
      </Script>
    </section>
  );
}
