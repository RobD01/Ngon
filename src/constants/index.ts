const ghPages = false;
export const baseUrl = ghPages ? "/Ngon" : "";

export const sidebarLinks = [
  {
    imgURL: baseUrl + "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: baseUrl + "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: baseUrl + "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: baseUrl + "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: baseUrl + "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    imgURL: baseUrl + "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: baseUrl + "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: baseUrl + "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: baseUrl + "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];
