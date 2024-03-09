import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { useDispatch } from "react-redux";
import { filterBySearchValue } from "../../../redux/slices/mailDataSlice";

interface InboxProps {
  setInputValue: (value: string) => void;
  inputValue: string;
}

export default function Inbox(props: InboxProps) {
  const { setInputValue, inputValue } = props;
  const { mail } = useFetchData();
  const dispatch = useDispatch();

  function handleSearch(value: string) {
    setInputValue(value);
    dispatch(filterBySearchValue(value));
    console.log(mail, value);
  }

  const renderMail = () => {
    return mail.map((item) => (
      <div>
        <h1>{item.category}</h1>
        <h1>{item.datePosted}</h1>
        <h1>{item.email}</h1>
        <h1>{item.id}</h1>
        <h1>{item.fullName}</h1>
        <h1>{item.postType}</h1>
        <h1>{item.seen}</h1>
        <h1>{item.subject}</h1>
        <h1>{item.userPost}</h1>
      </div>
    ));
  };
  return (
    <div>
      <div>
        <input
          value={inputValue}
          className="text-black w-full"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          type="text"
          placeholder="Search By Name Or Subject"
        />
      </div>
      <div>{renderMail()}</div>;
    </div>
  );
}
