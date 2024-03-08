
export interface MailData {
    full_name: string;
    date_posted: string;
    user_post: string;
    post_type: string[]
    seen: "seen" | "not_seen" | null
    category: "archive" | "trash" | "junk" | "sent" | "drafts" | "inbox";
  }