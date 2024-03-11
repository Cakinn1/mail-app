export function formatMailDate(dateString: string | undefined): string {
    if(!dateString) {
        return ""
    }
    const dateObj = new Date(dateString);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const amOrPm = hours >= 12 ? "PM" : "AM";
  
    return `${month} ${day}, ${year}, ${hours % 12 || 12}:${minutes} ${amOrPm}`;
  }