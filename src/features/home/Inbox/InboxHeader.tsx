import React from "react";

interface Props {
  isSelected: string;
  setIsSelected: (value: string) => void;
}

export default function InboxHeader(props: Props) {
  const { isSelected, setIsSelected } = props;

  return (
    <div className="flex flex-1 justify-between items-center ">
      <h1 className="font-semibold text-lg">Inbox</h1>
      <div className="flex gap-x-4 bg-gray-200 rounded-md text-sm px-2 py-1">
        <button
          style={
            isSelected === "ALL_MAIL"
              ? { backgroundColor: `hsl(240, 5%, 64.9%)` }
              : {}
          }
          className="p-1 rounded-md"
          onClick={() => setIsSelected("ALL_MAIL")}
        >
          All mail
        </button>
        <button
          style={
            isSelected === "NOT_READ_MAIL"
              ? { backgroundColor: `hsl(240, 5%, 64.9%)` }
              : {}
          }
          className="p-1 rounded-md"
          onClick={() => setIsSelected("NOT_READ_MAIL")}
        >
          Unread
        </button>
      </div>
    </div>
  );
}
