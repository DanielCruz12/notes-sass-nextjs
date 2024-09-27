"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LightningWidget from "@/app/donation/page";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-[#141419] rounded-l shadow mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            DanDev™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* <li>
              <a href='#' className='me-4 hover:underline md:me-6'>
                About me
              </a>
            </li> */}
          <li>
            <Link href="/privacy" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="me-4 hover:underline md:me-6">
              Licensing
            </Link>
          </li>
        </ul>
        <div className="px-5 pb-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="text-white bg-gray-600 rounded-xl px-3 py-2 hover:bg-gray-700">
                Donate
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <LightningWidget />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
