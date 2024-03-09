import React from "react";
import { FiInbox } from "react-icons/fi";

export interface NavItemsProps {
  text: string;
  image: React.ReactNode;
  value: number | null;
  path_location: string;
  social: "social" | "non-social";
}

const navItems: NavItemsProps[] = [
  {
    text: "inbox",
    image: typeof FiInbox,
    path_location: "/inbox",
    value: 128,
    social: "non-social",
  },
  {
    text: "drafts",
    image: typeof FiInbox,
    path_location: "/draft",
    value: 9,
    social: "non-social",
  },
  {
    text: "sent",
    image: typeof FiInbox,
    path_location: "/sent",
    value: null,
    social: "non-social",
  },
  {
    text: "junk",
    image: typeof FiInbox,
    path_location: "/junk",
    value: 23,
    social: "non-social",
  },
  {
    text: "trash",
    image: typeof FiInbox,
    path_location: "/trash",
    value: null,
    social: "non-social",
  },
  {
    text: "archive",
    image: typeof FiInbox,
    path_location: "/archive",
    value: null,
    social: "non-social",
  },
];

export { navItems };
