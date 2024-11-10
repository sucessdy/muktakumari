import { BrandLogo } from "@/components/ui/BrandLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="mr-auto items-center gap-10 shadow-2xl  fixed p-6 top-0 w-full z-10 bg-black/15 backdrop-blur-md text-balance ">
      <nav className="mr-auto container flex items-center font-medium gap-10  ">
        <Link className="mr-auto" href="dashboard">
          {" "}
          <BrandLogo
            className="text-4xl font-bold text-white"
            words={["ArcBot", "ArcLabs"]}
            framerProps={undefined}
          />
        </Link>

        <Link href="dashboard/products" className="text-lg font-medium">
            {" "}
          Products{" "}
          </Link>
        <Link href="dashboard/analytics" className="text-lg font-medium">
            {" "}
    Analytics{" "}
          </Link>
        <Link href="dashboard/subscriptions" className="text-lg font-medium">
            {" "}
     Subscriptions{" "}
          </Link>

          <UserButton/>
      </nav>
    </header>
  );
}
