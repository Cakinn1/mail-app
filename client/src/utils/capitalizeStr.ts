export default function capitalizeStr(str: string | undefined): string {
  if (!str) {
    return "";
  }
  let result: string[] = [];
  for (let word of str.split(" ")) {
    result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return result.join(" ");
}
