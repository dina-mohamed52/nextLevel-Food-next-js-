import Link from "next/link";

function Button({children,href}) {
    return (
      <Link
        href={href}
        className="bg-gradient-to-r from-orange-700 to-yellow-700 hover:from-orange-500 hover:to-yellow-500 text-orange-200 font-bold py-2 px-4 rounded-lg"
      >
       {children}
      </Link>
    );
}

export default Button
