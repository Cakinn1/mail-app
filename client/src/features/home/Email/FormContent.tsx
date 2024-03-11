import React, { useState } from "react";
import { PanelRightGlobalProps } from "./EmailPanelRight";

export default function FormContent(props: PanelRightGlobalProps) {
  const { currentMailLoaded } = props;

  const MutedThread = () => {
    const [isMutedClicked, setIsMutedClicked] = useState<boolean>(false);
    return (
      <div className="flex gap-x-4">
        <div
          onClick={() => setIsMutedClicked(!isMutedClicked)}
          className={`${
            isMutedClicked ? "bg-green-500" : "bg-yellow-400"
          }  cursor-pointer w-14 relative group rounded-md duration-300`}
        >
          <div
            className={` h-4 bg-yellow-50  cursor-pointer rounded-full duration-300 absolute w-4 m-1 flex ${
              isMutedClicked
                ? "translate-x-8 group-hover:bg-black"
                : "translate-x-0 group-hover:bg-gray-500"
            }`}
          ></div>
        </div>
        <h1>Mute this thread</h1>
      </div>
    );
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="border-t">
      <div className="p-4 flex flex-col flex-1 space-y-4">
        <textarea
          className="min-h-[70px] rounded-md p-2 text-black"
          placeholder={`Reply To ${currentMailLoaded?.email.split("@")[0]}...`}
          name=""
          id=""
        ></textarea>
        <div className="flex justify-between items-center">
          <MutedThread />
          <button
            onClick={() => console.log("add reply array")}
            className="bg-gray-400 text-black px-2 py-1 rounded-lg"
          >
            send
          </button>
        </div>
      </div>
    </form>
  );
}
