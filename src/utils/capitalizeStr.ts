export default function capitalizeStr(str: string): string {
  let result: string = "";

  for (let word of str.split(" ")) {
    result += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  return result;
}
