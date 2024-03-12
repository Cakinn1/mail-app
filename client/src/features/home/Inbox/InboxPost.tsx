import React, { useEffect } from "react";
import { MailData } from "../../../types/mailTypes";
import capitalizeStr from "../../../utils/capitalizeStr";
import { useDispatch } from "react-redux";
import { handleSeenValue } from "../../../redux/slices/mailDataSlice";

interface Props {
  mail: MailData;
  setSelectedMailId: (value: number) => void;
}

export default function InboxPost(props: Props) {
  const { mail, setSelectedMailId } = props;
  const dispatch = useDispatch();

  return (
    <div
      className="bg-gray-400 space-y-2 duration-300 cursor-pointer hover:bg-gray-300 p-3 rounded-lg"
      onClick={() => {
        dispatch(handleSeenValue(mail.id));
        setSelectedMailId(mail.id);
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h1>
            {capitalizeStr(mail.fullName)}
            {mail.seen === "not_seen" && <span>*</span>}
          </h1>
          <h2>{capitalizeStr(mail.subject)}</h2>
        </div>
        <h2>date</h2>
      </div>
      <h2 className="truncate">{mail.userPost}</h2>
      <div className="flex flex-wrap gap-x-2">
        {mail.postType.map((post, idx) => (
          <PostType key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}

const PostType = ({ post }: { post: string }) => {
  return <div className="text-sm px-2 py-1 bg-gray-500 rounded-md">{post}</div>;
};
