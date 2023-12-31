export function convertTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month}, ${year}`;
}

export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
