export default function formatMenu(url: string): string[] {
  const urls = url.split("/");
  const newUrl = urls.filter((item) => item !== "" && item !== "dashboard");
  if (newUrl.length <= 0) {
    return ["dashboard"];
  } else {
    return newUrl;
  }
}
