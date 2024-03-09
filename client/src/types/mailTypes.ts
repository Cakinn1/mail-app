export interface MailData {
  id: number;
  fullName: string;
  datePosted: string;
  email: string;
  userPost: string;
  postType: string[];
  seen: "seen" | "not_seen";
  category: "archive" | "trash" | "junk" | "sent" | "drafts" | "inbox";
  subject: string;
}

export interface CategoryProps {
  category: "archive" | "trash" | "junk" | "sent" | "drafts" | "inbox";
}

export interface SeenProps {
  seen: "seen" | "not_seen";
}
