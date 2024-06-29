const ghPages = false;
export const baseUrl = ghPages ? "/Ngon" : "";

export const sidebarLinks = [
  {
    imgURL: baseUrl + "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: baseUrl + "/assets/icons/explore.svg",
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
    imgURL: baseUrl + "/assets/icons/explore.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: baseUrl + "/assets/icons/add.svg",
    route: "/create-post",
    label: "Create",
  },
  {
    imgURL: baseUrl + "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: baseUrl + "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
  },
];

export const landingPageImage = [
  {
    id: 1,
    imageUrl: "/assets/images/food/burger.jpeg",
  },
  {
    id: 2,
    imageUrl: "/assets/images/food/pancake.jpeg",
  },
  {
    id: 3,
    imageUrl: "/assets/images/food/pasta.jpeg",
  },

  {
    id: 4,
    imageUrl: "/assets/images/food/skewers.jpeg",
  },
];

export const sponsor = [
  {
    id: 1,
    imageUrl: "/assets/images/money theory.png",
    url: "https://www.youtube.com/@moneytheory",
    title: "Money Theory Youtube",
    description: "Educational videos about finance and investment",
  },
  {
    id: 2,
    imageUrl: "/assets/images/money theory.png",
    url: "https://www.patreon.com/moneytheory",
    title: "Money Theory Patreon",
    description:
      "Patreon members that support the Money Theory Youtube channel",
  },
];
