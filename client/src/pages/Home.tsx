import React, { useState } from "react";
import EmailHeader from "../features/home/Email/EmailHeader";
import LeftPanel from "../features/home/LeftPanel/LeftPanel";
import LeftPanelHeader from "../features/home/LeftPanel/LeftPanelHeader";
import InboxHeader from "../features/home/Inbox/InboxHeader";
import Inbox from "../features/home/Inbox/Inbox";
import EmailPanelRight from "../features/home/Email/EmailPanelRight";
import useFetchData from "../hooks/useFetchData";
import { MailData } from "../types/mailTypes";

interface SectionProps {
  width: string;
  mainContentElement: React.ReactNode;
  headerElement: React.ReactNode;
  isRightComponent?: boolean;
}

export default function Home(): JSX.Element {
  const [isSelected, setIsSelected] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedMailId, setSelectedMailId] = useState<number | null>(null);
  const { mail } = useFetchData();

  const findMailById = (): MailData | undefined => {
    return mail.find((item) => item.id === selectedMailId);
  };

  return (
    <div className="text-white w-full flex-1 flex">
      {renderSection({
        headerElement: <LeftPanelHeader />,
        mainContentElement: <LeftPanel setInputValue={setInputValue} />,
        width: "20",
      })}
      {renderSection({
        headerElement: (
          <InboxHeader isSelected={isSelected} setIsSelected={setIsSelected} />
        ),
        mainContentElement: (
          <Inbox
          
            setSelectedMailId={setSelectedMailId}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ),
        width: "40",
      })}
      {renderSection({
        headerElement: <EmailHeader />,
        mainContentElement: (
          <EmailPanelRight
            findMailById={findMailById}
            setSelectedMailId={setSelectedMailId}
            selectedMailId={selectedMailId}
          />
        ),
        width: "40",
        isRightComponent: true,
      })}
    </div>
  );
}

const renderSection = (props: SectionProps): JSX.Element => {
  return (
    <div
      style={{ width: `${props.width}%` }}
      className={` border ${
        props.isRightComponent ? "border-r" : "border-r-0"
      } `}
    >
      <div className="h-[54px] p-2  border border-r-0 border-t-0 border-l-0">
        {props.headerElement}
      </div>
      {props.mainContentElement}
    </div>
  );
};
