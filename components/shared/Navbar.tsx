import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-gray-300 flex items-center bg-white ">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex  items-center gap-5">
            <li>
              <Link href="/" className="link-items">
                link-1
              </Link>
            </li>
            <li>
              <Link href="/" className="link-items">
                link-2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-items">
                link-3
              </Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center items-center gap-5">
            <li>
              <Link href="/" className="text-4xl font-bold text-pink lowercase">
                Mimosa.
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex justify-end items-center gap-5">
            <li>
              <Link href="/" className="link-items">
                link-4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-items">
                link-5
              </Link>
            </li>
            <li>
              <Link
                href="/user/sign-in"
                className={buttonVariants({ variant: "ocean" })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
