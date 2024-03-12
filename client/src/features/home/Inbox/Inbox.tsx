import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { useDispatch } from "react-redux";
import {
  filterBySearchValue,
  updateSearchValues,
} from "../../../redux/slices/mailDataSlice";
import InboxPost from "./InboxPost";

interface InboxProps {
  setInputValue: (value: string) => void;
  inputValue: string;
  setSelectedMailId: (value: number | null) => void;
}

export default function Inbox(props: InboxProps) {
  const { setInputValue, inputValue, setSelectedMailId } = props;
  const { mail,   } = useFetchData();
  const dispatch = useDispatch();

  function handleSearch(value: string) {
    setInputValue(value);
    dispatch(filterBySearchValue(value));
    dispatch(updateSearchValues());
  }

    

  return (
    <div className="p-4 space-y-2">
      <input
        value={inputValue}
        className="text-black w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        type="text"
        placeholder="Search By Name Or Subject"
      />
      <div className="space-y-4 overflow-y-scroll h-[700px]">
        {mail.map((item) => (
          <InboxPost setSelectedMailId={setSelectedMailId} mail={item} />
        ))}
      </div>
    </div>
  );
}
