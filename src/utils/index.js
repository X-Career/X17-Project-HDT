export const toastOptions = {
  position: "bottom-right",
  autoClose: 1400,
  pauseOnHover: true,
  draggable: true,
  zIndex: 1000,
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

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const dataEx = {
  _id: "6532424f2e806e025796c250",
  host: {
    username: "huycloud1999",
    avatarUrl:
      "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
  },
  location: "hà nội",
  title: "chuyến đi bão táp",
  description: "đây là mô tả",
  participants: "public",
  startDay: "2023-10-20T00:00:00.000Z",
  endDay: "2023-10-22T00:00:00.000Z",
  privacy: "friends",
  avatarUrl:
    "https://res.cloudinary.com/dsdoekr0q/image/upload/v1696919248/avatar/gjqakp6jxzlvmli6ilcy.jpg",
  views: 0,
  createdAt: "2023-10-20T09:03:11.503Z",
  updatedAt: "2023-10-20T09:03:11.50",
};
