import Link from "next/link";



import Image from "next/image";
function Logo() {
    return (
      <Link href="/" className=" mt-6 ml-[9rem] flex items-center justify-items-start gap-8">
        <Image src="/images/logo.png" width={100} height={40} alt="logo"  priority />
        <h1 className="text-3xl font-semibold text-orange-200 uppercase" >nextLevel food</h1>
      </Link>
    );
}

export default Logo
