import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFetchData from "../../../hooks/useFetchData";
import { MailData } from "../../../types/mailTypes";
import capitalizeStr from "../../../utils/capitalizeStr";
import UserProfileHeader from "./UserProfileHeader";
import FormContent from "./FormContent";

interface EmailPanelRightProps {
  selectedMailId: number | null;
  setSelectedMailId: (value: number | null) => void;
  findMailById: () => MailData | undefined;
}
export interface PanelRightGlobalProps {
  currentMailLoaded: MailData | null;
}

export default function EmailPanelRight(props: EmailPanelRightProps) {
  const [currentMailLoaded, setCurrentMailLoaded] = useState<MailData | null>(
    null
  );
  const { selectedMailId, setSelectedMailId, findMailById } = props;
  const dispatch = useDispatch();
  const { mail, error, loading } = useFetchData();

  useEffect(() => {
    // if (!selectedMailId || !mail) {
    //   console.log("error no values");
    //   setSelectedMailId(0);
    //   return;
    // }

    const currentMail = findMailById();
    if (currentMail) {
      setCurrentMailLoaded(currentMail);
    }
    console.log("ni");

  }, [selectedMailId, currentMailLoaded, mail, loading, error]);

  return (
    <div className="border  flex flex-col">
      <UserProfileHeader currentMailLoaded={currentMailLoaded} />
      <UserProfileContent currentMailLoaded={currentMailLoaded} />
      <FormContent currentMailLoaded={currentMailLoaded} />
    </div>
  );
}

const UserProfileContent = (props: PanelRightGlobalProps) => {
  const { currentMailLoaded } = props;
  return <h1 className="p-4 min-h-[660px]">{currentMailLoaded?.userPost}</h1>;
};
