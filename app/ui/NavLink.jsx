'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink ( { children, href } )
{
    const path =usePathname()
    return (
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? "text-yellow-500"
            : "capitalize text-xl text-orange-200 font-semibold hover:text-yellow-500"
        }
      >
        {children}
      </Link>
    );
}

export default NavLink
