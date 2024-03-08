export interface MailData {
  id: number;
  fullName: string;
  datePosted: string;
  userPost: string;
  postType: string[];
  seen: "seen" | "not_seen" | null;
  category: "archive" | "trash" | "junk" | "sent" | "drafts" | "inbox";
}

export interface CategoryProps {
  category: "archive" | "trash" | "junk" | "sent" | "drafts" | "inbox";
}
