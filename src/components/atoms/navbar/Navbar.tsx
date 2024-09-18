import Link from "next/link";
import { NavItems } from "@/constants/nav/nav-items";

export default function Navbar() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-12">
        <div className="w-max p-2 rounded-full z-50  pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-white shadow-lg">
          {NavItems.map((item, index) => (
            <div
              key={index}
              className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
            >
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center p-2"
              >
                <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full size-12">
                  {item.icons}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
