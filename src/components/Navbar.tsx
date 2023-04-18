import Link from "next/link";

export default function Navbar() {

  return (
    <nav>
      <ul>
        <Link href="/">
            <button className="btn-logo">HOME</button>
        </Link>
      </ul>
    </nav>
  );
}


