import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-3 pb-6 sm:pb-3 gap-1">
      <div className="flex flex-row space-x-2">
        <Link
          isExternal
          className="flex items-center gap-1 text-current text-sm"
          href="https://kisshanzsa.hu"
          title="kisshanzsa.hu homepage"
        >
          <span className="text-default-600">© 2024 </span>
          <p className="text-primary">Kiss-Hanzsa Ltd. </p>
          <span className="text-default-600">Minden jog fenntartva.</span>
        </Link>
      </div>
      <div className="flex flex-row space-x-2">
        <Link
          isExternal
          className="flex items-center gap-1 text-current text-sm"
          href="https://nextui.org"
          title="nextui.org homepage"
        >
          <p className="text-primary">NextUI</p>
          <span className="text-default-600">erősítéssel.</span>
        </Link>
        <Divider orientation="vertical" />
        <NextLink
          className="flex items-center gap-1 text-current text-sm"
          href="/terms"
          title="Általános Szerződési Feltételek"
        >
          <span className="text-default-600">Ászf</span>
        </NextLink>
        <Divider orientation="vertical" />
        <NextLink
          className="flex items-center gap-1 text-current text-sm"
          href="/privacy"
          title="Adatvédelmi Nyilatkozat"
        >
          <span className="text-default-600">Adatvédelem</span>
        </NextLink>
      </div>
    </footer>
  );
};
