/** @format */

import { FaTrashCan, FaPen } from "react-icons/fa6";
import { FaFileArchive, FaBell, FaBookOpen } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      <div
        className="flex flex-col items-center border fixed left-0 z-1 h-full w-40
      overflow-hidden pt-5
      *:text-gray-500 *:p-1.5 *:hover:bg-gray-100 *:rounded *:list-none"
      >
        <li className="flex items-center gap-4">
          <FaBookOpen size={18} style={{ color: "black" }} />
          <a href="">Note</a>
        </li>

        <li className="flex items-center gap-4">
          <FaBell size={18} />
          <a href="">Reminder</a>
        </li>
        <li className="flex items-center gap-4">
          <FaPen size={18} />
          <a href="" className="float-left">
            Edit label
          </a>
        </li>
        <li className="flex items-center gap-4">
          <FaFileArchive size={18} />
          <a href="" className="float-left">
            Archieve
          </a>
        </li>
        <li className="flex items-center gap-4">
          <FaTrashCan size={18} />
          <a href="" className="float-left">
            Trash
          </a>
        </li>
        <li>
          {/* <FontAwesomeIcon icon={byPrefixAndName.fas["trash-can"]} /> */}
        </li>
      </div>
    </>
  );
}
