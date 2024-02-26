"use client";
import Link from "next/link";
import clsx from "clsx";
export default function Navbar({ arr, pathname }) {
  console.log("path", pathname);
  return (
    <nav className="fixed top-0 left-0">
      {arr?.map((item) => (
        <Link
          href={item.link}
          className={clsx("p-3 ", {
            "text-blue-400 ": pathname == item.link.replace("/#", ""),
          })}
          key={item.name + "nav"}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
