import React, { useEffect, useState } from "react";
import { FiInbox } from "react-icons/fi";
import capitalizeStr from "../../../utils/capitalizeStr";
import { NavItemsProps, navItems } from "../../../data/navData";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../../redux/slices/mailDataSlice";
import useFetchData from "../../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";

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
  const { fallBackData, mail } = useFetchData();
  const [isSelected, setIsSelected] = useState<string>("Inbox");
  const dispatch = useDispatch();
  const navgiate = useNavigate();
  function handleSelect(select: string) {
    setIsSelected(select);
    dispatch(filterByCategory(select));
    setInputValue("");
    if (select === "inbox") {
      navgiate("/");
      return;
    }
    if (select === "archive") {
      navgiate(select);
      return mail.filter((item) => item.category === "archive");
    }
  }

  function handleDataStructureLength(category: string) {
    return fallBackData.filter((item) => item.category === category).length;
  }

  const updateNavItems = navItems.map((item, index) => {
    let newValue: number | null = null;
    switch (index) {
      case 0:
        newValue = handleDataStructureLength("inbox");
        break;
      case 1:
        newValue = handleDataStructureLength("drafts");
        break;
      case 2:
        newValue = handleDataStructureLength("sent");
        break;
      case 3:
        newValue = handleDataStructureLength("junk");
        break;
      case 4:
        newValue = handleDataStructureLength("trash");
        break;
      case 5:
        newValue = handleDataStructureLength("archive");
    }
    return { ...item, value: newValue };
  });

  const functionProps = {
    handleSelect,
    isSelected,
  };

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

  const renderNavItem = () => {
    return (
      <>
        {updateNavItems.map((item) => {
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
