import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Archive from "../features/archive/Archive";
import { JsxElement } from "typescript";
import Trash from "../pages/Trash";
import { useDispatch } from "react-redux";
import { deleteAllMailItems, filterBySeen } from "../redux/slices/mailDataSlice";
import { inboxContext } from "../context/InboxProvider";

export default function DynamicHeader() {
  const location = useLocation();
  const container =
    "border border-r-0 justify-between border-b-0 flex-1 h-[54px] p-2 flex items-center";
  const headerText = "font-semibold text-lg";
  const dispatch = useDispatch();

  const InboxHeader = () => {
    const { buttonSelectValue, setButtonSelectValue } =
      useContext(inboxContext);
    const handleInput = (inputValue: string) => {
      setButtonSelectValue(inputValue);
      inputValue === "ALL_MAIL"
        ? dispatch(filterBySeen({ seen: "seen" }))
        : dispatch(filterBySeen({ seen: "not_seen" }));
    };

    return (
      <div className={container}>
        <h1 className={headerText}>Inbox</h1>
        <div className="flex gap-x-4 bg-gray-200 rounded-md text-sm px-2 py-1">
          <button
            style={
              buttonSelectValue === "ALL_MAIL"
                ? { backgroundColor: `hsl(240, 5%, 64.9%)` }
                : {}
            }
            className="p-1 rounded-md"
            onClick={() => handleInput("ALL_MAIL")}
          >
            All mail
          </button>
          <button
            style={
              buttonSelectValue === "NOT_READ_MAIL"
                ? { backgroundColor: `hsl(240, 5%, 64.9%)` }
                : {}
            }
            className="p-1 rounded-md"
            onClick={() => handleInput("NOT_READ_MAIL")}
          >
            Unreadd
          </button>
        </div>
      </div>
    );
  };

  const ArchiveHeader = () => {
    return (
      <div  className={container}>
        <h1 className={headerText}>Archive</h1>
        <button onClick={() => dispatch(deleteAllMailItems())}>Delete all</button>
      </div>
    );
  };

  const headerMap: Record<string, React.ReactNode> = {
    "/": <InboxHeader />,
    "/archive": <ArchiveHeader />,
    defau: <Trash />,
  };
  const currentHeader = headerMap[location.pathname] || headerMap["default"];

  return <>{currentHeader}</>;
  // return currentHeader ? currentHeader : null;
}

//  <div className="border border-r-0 h-[55px] p-2 flex items-center">
//       <h1>Archive</h1>
//     </div>
