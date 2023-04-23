import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
  title: string;
  className?: string;
};

export function NavLink(obj: NavLinkProps) {
  const router = useRouter();

  return (
    <Link href={obj.href} className={`${obj.className} relative group`}>
      {obj.title}

      {/* Add underline */}
      <span className={`h-[1px] inline-block bg-dark dark:bg-light
       absolute left-0 bottom-0.5
       group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === obj.href ? 'w-full' : 'w-0'}
       `}>
        &nbsp;
      </span>
    </Link>
  );
}
