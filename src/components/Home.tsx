import React from "react";
import Inbox from "./Inbox/Inbox";
import InboxHeader from "./Inbox/InboxHeader";
import EmailHeader from "./Email/EmailHeader";
import LeftPanel from "./LeftPanel/LeftPanel";
import LeftPanelHeader from "./LeftPanel/LeftPanelHeader";

export default function Home() {
  return (
    <div className="text-white w-full flex-1 flex">
      <CreateComponents
        headerElement={<LeftPanelHeader />}
        width="20"
        mainContentElement={<LeftPanel />}
      />
      <CreateComponents
        headerElement={<InboxHeader />}
        width="40"
        mainContentElement={<Inbox />}
      />
      <CreateComponents
        headerElement={<EmailHeader />}
        width="40"
        mainContentElement={<Inbox />}
        isRightComponent={true}
      />
    </div>
  );
}

interface Props {
  width: string;
  mainContentElement: React.ReactNode;
  headerElement: React.ReactNode;
  isRightComponent?: boolean;
}
function CreateComponents(props: Props) {
  const { mainContentElement, width, headerElement, isRightComponent } = props;
  return (
    <div
      className={`w-[${width}%] border ${
        isRightComponent ? "border-r" : "border-r-0"
      } `}
    >
      <div className="h-[41px] p-2 h-f border border-r-0 border-t-0 border-l-0">
        {headerElement}
      </div>
      {mainContentElement}
    </div>
  );
}
