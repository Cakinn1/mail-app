import { useDispatch } from "react-redux";
import { filterBySeen } from "../../../redux/slices/mailDataSlice";

interface Props {
  isSelected: string;
  setIsSelected: (value: string) => void;
}

export default function InboxHeader(props: Props) {
  const { isSelected, setIsSelected } = props;
  const dispatch = useDispatch();

  const handleInput = (inputValue: string) => {
    setIsSelected(inputValue);
    inputValue === "ALL_MAIL"
      ? dispatch(filterBySeen({ seen: "seen" }))
      : dispatch(filterBySeen({ seen: "not_seen" }));
  };

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
          onClick={() => handleInput("ALL_MAIL")}
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
          onClick={() => handleInput("NOT_READ_MAIL")}
        >
          Unread
        </button>
      </div>
    </div>
  );
}
