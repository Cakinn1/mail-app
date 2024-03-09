import React, { useEffect, useState } from "react";
import { FiInbox } from "react-icons/fi";
import capitalizeStr from "../../../utils/capitalizeStr";
import { NavItemsProps, navItems } from "../../../data/navData";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../../redux/slices/mailDataSlice";

interface FunctionProps {
  isSelected: string;
  handleSelect: (value: string) => void;
}

interface NavItemProps {
  functionProps: FunctionProps;
  itemProps: NavItemsProps;
}
interface LeftPanelProps {
  setInputValue: (value: string) => void;
}

export default function LeftPanel(props: LeftPanelProps) {
  const { setInputValue } = props;
  const [isSelected, setIsSelected] = useState<string>("Inbox");
  const dispatch = useDispatch();

  function handleSelect(select: string) {
    setIsSelected(select);
    dispatch(filterByCategory(select));
    setInputValue("");
    console.log("d");
  }

  const functionProps = {
    handleSelect,
    isSelected,
  };

  const renderNavItem = () => {
    return (
      <>
        {navItems.map((item) => {
          const itemProps = {
            text: item.text,
            image: item.image,
            path_location: item.path_location,
            social: item.social,
            value: item.value,
          };
          return (
            <NavItem itemProps={itemProps} functionProps={functionProps} />
          );
        })}
      </>
    );
  };
  return <div className="p-2 space-y-1">{renderNavItem()}</div>;
}

function NavItem(props: NavItemProps) {
  const { functionProps, itemProps } = props;
  return (
    <div
      onClick={() => functionProps.handleSelect(itemProps.text)}
      className={` ${
        functionProps.isSelected === itemProps.text
          ? "bg-[#27272A]"
          : "bg-black"
      } flex hover:bg-[#27272A] text-sm duration-300 cursor-pointer justify-between items-center rounded-md px-2 py-1`}
    >
      <div className="flex items-center gap-x-4">
        {itemProps.image}
        <h1>{capitalizeStr(itemProps.text)}</h1>
      </div>
      <div>
        <h2>{itemProps.value}</h2>
      </div>
    </div>
  );
}
