import Link from "next/link";

const Navbar = () => (
  <nav>
    <div className="logo">
      <h1>Next.JS Sandbox</h1>
    </div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/author">
      <a>Author</a>
    </Link>
  </nav>
);

export default Navbar;
