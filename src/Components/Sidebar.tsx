/** @format */



export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col items-center border fixed left-0 z-1 h-full w-1/5 overflow-hidden pt-5 bg-black *:text-white">
        <a href="">Note</a>
        <a href="">Reminder</a>
        <a href="">Edit label</a>
        <a href="">Trash</a>
      </div>
    </>
  );
}
