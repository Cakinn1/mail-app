import React, { useEffect, useState } from "react";
import { FiInbox } from "react-icons/fi";
import capitalizeStr from "../../../utils/capitalizeStr";

interface NavItemsProps {
  text: string;
  image: React.ReactNode;
  value: number | null;
  path_location: string;
  social: "social" | "non-social";
}

interface FunctionProps {
  isSelected: string;
  handleSelect: (value: string) => void;
}

interface NavItemProps {
  functionProps: FunctionProps;
  itemProps: NavItemsProps;
}

const navItems: NavItemsProps[] = [
  {
    text: "inbox",
    image: <FiInbox />,
    path_location: "/inbox",
    value: 128,
    social: "non-social",
  },
  {
    text: "drafts",
    image: <FiInbox />,
    path_location: "/draft",
    value: 9,
    social: "non-social",
  },
  {
    text: "sent",
    image: <FiInbox />,
    path_location: "/sent",
    value: null,
    social: "non-social",
  },
  {
    text: "junk",
    image: <FiInbox />,
    path_location: "/junk",
    value: 23,
    social: "non-social",
  },
  {
    text: "trash",
    image: <FiInbox />,
    path_location: "/trash",
    value: null,
    social: "non-social",
  },
  {
    text: "archive",
    image: <FiInbox />,
    path_location: "/archive",
    value: null,
    social: "non-social",
  },
];

export default function LeftPanel() {
  const [isSelected, setIsSelected] = useState<string>("Inbox");

  function handleSelect(select: string) {
    setIsSelected(select);
  }

  const functionProps = {
    handleSelect,
    isSelected,
  };

  function node() {
    const item = navItems.filter((item) => {
      const itemProps = {
        text: item.text,
        image: item.image,
        value: item.value,
        path_location: item.path_location,
        social: item.social,
      };
      if (item.social === "non-social") {
      }
    });
    // return <NavItem itemProps={itemProps} functionProps={functionProps} />;
    return item;
  }

  return <div className="p-2 space-y-1">d</div>;
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
