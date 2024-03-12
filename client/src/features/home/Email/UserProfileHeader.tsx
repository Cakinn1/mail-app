import React, { useEffect } from "react";
import { PanelRightGlobalProps } from "./EmailPanelRight";
import { formatMailDate } from "../../../utils/formatDate";
import capitalizeStr from "../../../utils/capitalizeStr";

export default function UserProfileHeader(props: PanelRightGlobalProps) {
  const { currentMailLoaded } = props;
  const formattedDate = formatMailDate(currentMailLoaded?.datePosted);

  useEffect(() => {
    console.log("hi", currentMailLoaded);
  }, [currentMailLoaded]);
  return (
    <div className="flex flex-1 gap-x-4 p-4 border-b">
      <div className="bg-gray-400 h-10 w-10 flex justify-center items-center rounded-full">
        <span>{currentMailLoaded?.fullName.split(" ")[0][0]}</span>
        <span>{currentMailLoaded?.fullName.split(" ")[1][0]}</span>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between items-center flex-1">
          <h1>{capitalizeStr(currentMailLoaded?.fullName)}</h1>
          <h2>{formattedDate} </h2>
        </div>
        <h2>Re: {capitalizeStr(currentMailLoaded?.subject)}</h2>
        <h3>Reply-To: {currentMailLoaded?.email}</h3>
      </div>
    </div>
  );
}
