export const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  pauseOnHover: true,
  draggable: true,
};
export const formatCustomDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    "vi-VN",
    options
  );

  return `${formattedDate}`;
};
