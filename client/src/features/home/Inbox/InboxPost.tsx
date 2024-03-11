import React from "react";
import { MailData } from "../../../types/mailTypes";
import capitalizeStr from "../../../utils/capitalizeStr";

interface Props {
  mail: MailData;
  setSelectedMailId: (value: number) => void;
}

export default function InboxPost(props: Props) {
  const { mail, setSelectedMailId } = props;
  return (
    <div
      className="bg-gray-400 p-3 rounded-lg"
      onClick={() => setSelectedMailId(mail.id)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h1>{capitalizeStr(mail.fullName)}</h1>
          <h2>{capitalizeStr(mail.subject)}</h2>
        </div>
        <h2>date</h2>
      </div>
      <h2 className="truncate">{mail.userPost}</h2>
    </div>
  );
}
