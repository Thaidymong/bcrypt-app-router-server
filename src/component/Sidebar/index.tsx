import Image from "next/image";
import Link from "next/link";
import { AiFillDashboard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-[#4A608C] text-white p-4 py-[30px]">
        <div className="flex items-center justify-center mb-8">
          {/* <Image src="/logo.png" width={100} height={100} alt="Logo" /> */}
        </div>
        <ul className="space-y-2">
          <li>
            <Link href="/dash">
              <div className="flex items-center px-4 py-2 text-base font-medium hover:text-gray-300">
                <AiFillDashboard className="mr-2" /> Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <div className="flex items-center px-4 py-2 text-base font-medium hover:text-gray-300">
                <FaUser className="mr-2" /> User
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
