import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "./icons/icons";
import { AvatarIcon } from "@radix-ui/react-icons";

export const FooterV0 = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-6 md:p-10 w-full bottom-0">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span>+(503) 2237-0822</span>
            </div>
            <div className="flex items-center gap-2">
              <AvatarIcon className="h-5 w-5" />
              <span>@fesapsv</span>
            </div>
            <div className="">
              <Link className="flex items-center gap-2" href={"/direccion"}>
                <MapPinIcon className="h-5 w-5" />
                <span>San Salvador, 1a calle poniente</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Sobre Nosotros</h3>
          <div className="grid  ">
            <p className="text-[#494949] text-[0.8rem] md:text-[0.9rem]">
              Somos una organización deportiva que promueve, fomenta, organiza y
              desarrolla el deporte del patinaje.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Enlaces Útiles</h3>
          <div className="grid gap-2 text-sm">
            <Link href="/" prefetch={false}>
              Inicio
            </Link>
            <Link href="/" prefetch={false}>
              Servicios
            </Link>
            <Link href="/" prefetch={false}>
              Portafolio
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="grid gap-2 text-sm">
            <Link
              href="https://www.facebook.com/fesapsv"
              className="flex items-center gap-2"
              target="_blank"
              prefetch={false}
            >
              <FacebookIcon className="h-5 w-5" />
              Facebook
            </Link>
            <Link
              href="https://x.com/indeselsalvador/status/1809617334987804799"
              className="flex items-center gap-2"
              target="_blank"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/fesapsv"
              className="flex items-center gap-2"
              target="_blank"
              prefetch={false}
            >
              <InstagramIcon className="h-5 w-5" />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
