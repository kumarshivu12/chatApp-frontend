export const truncateText = (string, n) => {
  return string.length > n ? `${string.slice(0, n)}...` : string;
};
