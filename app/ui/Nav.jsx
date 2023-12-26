

import Link from "next/link";
import NavLink from "./NavLink";


function Nav ()
{
 
    return (
      <nav>
        <ul className="flex  items-center justify-center capitalize gap-10 mr-[8rem] py-8 text-xl text-orange-200 font-semibold">
          <li>
            <NavLink
             
              href="/pages/meals"
            >
              {" "}
              Browse meals
            </NavLink>
          </li>
          <li>
            <NavLink className=" hover:text-yellow-500 " href="/pages/community">
              {" "}
              foodies community
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Nav
