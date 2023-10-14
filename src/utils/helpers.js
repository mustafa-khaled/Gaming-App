export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  return formattedDate;
};

export const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};
