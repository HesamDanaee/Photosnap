import nolimit from "./assets/images/no-limit.svg";
import responsive from "./assets/images/responsive.svg";
import embed from "./assets/images/embed.svg";
import boost from "./assets/images/boost.svg";
import domain from "./assets/images/custom.svg";
import drag from "./assets/images/drag.svg";

const heroData = [
  {
    title: "CREATE AND SHARE YOUR PHOTO STORIES",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    cta: "GET AN INVITE",
    order: "flex-row",
    bg: "bg-black",
    color: "text-white",
    img: {
      mobile: "sm-max:bg-create-and-share",
      tablet: "sm:bg-create-and-share-tablet",
      desktop: "lg:bg-create-and-share",
    },
  },
  {
    title: "BEAUTIFUL STORIES EVERY TIME",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    cta: "view the stories",
    order: "flex-row-reverse",
    bg: "bg-white",
    color: "text-black",
    img: {
      mobile: "sm-max:bg-beautiful-stories-mobile",
      tablet: "sm:bg-beautiful-stories-tablet",
      desktop: "lg:bg-beautiful-stories",
    },
  },
  {
    title: "DESIGNED FOR EVERYONE",
    text: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    cta: "view the stories",
    order: "flex-row",
    bg: "bg-white",
    color: "text-black",
    img: {
      mobile: "sm-max:bg-designed-for-everyone-mobile",
      tablet: "sm:bg-designed-for-everyone-tablet",
      desktop: "lg:bg-designed-for-everyone",
    },
  },
];

const cardsData = [
  {
    title: "The Mountains",
    text: "by John Appleseed",
    img: {
      mobile: "sm-max:bg-mountains-mobile",
      tablet: "bg-mountains",
    },
  },
  {
    title: "Sunset Cityscapes",
    text: "by Benjamin Cruz",
    img: {
      mobile: "sm-max:bg-cityscapes",
      tablet: "bg-cityscapes",
    },
  },
  {
    title: "18 Days Voyage",
    text: "by Alexei Borodin",
    img: {
      mobile: "sm-max:bg-18-days-voyage-mobile",
      tablet: "bg-18-days-voyage",
    },
  },
  {
    title: "Architecturals",
    text: "by Samantha Brooke",
    img: {
      mobile: "sm-max:bg-architecturals-mobile",
      tablet: "bg-architecturals",
    },
  },
];

const featuresData = [
  {
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    img: responsive,
  },
  {
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    img: nolimit,
  },
  {
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    img: embed,
  },
];

const featuresData2 = [
  ...featuresData,
  {
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    img: domain,
  },
  {
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    img: boost,
  },
  {
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    img: drag,
  },
];

const storiesData = [
  ...cardsData,
  {
    title: "World Tour 2019",
    text: "by Timothy Wagner",
    img: {
      mobile: "sm-max:bg-world-tour",
      tablet: "sm:bg-world-tour",
    },
  },
  {
    title: "Unforeseen Corners",
    text: "by William Malcom",
    img: {
      mobile: "sm-max:bg-unforeseen-corners",
      tablet: "sm:bg-unforeseen-corners",
    },
  },
  {
    title: "King on Africa: Part II",
    text: "by Tim Hillenburg",
    img: {
      mobile: "sm-max:bg-king-of-africa",
      tablet: "sm:bg-king-of-africa",
    },
  },
  {
    title: "The Trip to Nowhere",
    text: "by Felicia Rourke",
    img: {
      mobile: "sm-max:bg-trip-to-nowhere",
      tablet: "sm:bg-trip-to-nowhere",
    },
  },
  {
    title: "Rage of The Sea",
    text: "by Mohammed Abdul",
    img: {
      mobile: "sm-max:bg-rage-of-the-sea",
      tablet: "sm:bg-rage-of-the-sea",
    },
  },
  {
    title: "Running Free",
    text: "by Michelle",
    img: {
      mobile: "sm-max:bg-running-free",
      tablet: "sm:bg-running-free",
    },
  },
  {
    title: "Behind the Waves",
    text: "by Lamarr Wilson",
    img: {
      mobile: "sm-max:bg-behind-the-waves",
      tablet: "sm:bg-behind-the-waves",
    },
  },
  {
    title: "Calm Waters",
    text: "by Samantha Brooke",
    img: {
      mobile: "sm-max:bg-calm-waters",
      tablet: "sm:bg-calm-waters",
    },
  },
  {
    title: "The Milky Way",
    text: "by Benjamin Cruz",
    img: {
      mobile: "sm-max:bg-milky-way",
      tablet: "sm:bg-milky-way",
    },
  },
  {
    title: "Night at The Dark Forest",
    text: "by Mohammed Abdul",
    img: {
      mobile: "sm-max:bg-dark-forest",
      tablet: "sm:bg-dark-forest",
    },
  },
  {
    title: "Somwarpet’s Beauty",
    text: "by Michelle",
    img: {
      mobile: "sm-max:bg-somwarpet",
      tablet: "sm:bg-somwarpet",
    },
  },
  {
    title: "Land of Dreams",
    text: "by William Malcolm",
    img: {
      mobile: "sm-max:bg-land-of-dreams-mobile",
      tablet: "sm:bg-land-of-dreams-tablet",
    },
  },
];

const pricingData = [
  {
    plan: "basic",
    text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price1: "$19.00",
    price2: "$190.00",
  },
  {
    plan: "Pro",
    text: "More advanced features available. Recommended for photography veterans and professionals.",
    price1: "$39.00",
    price2: "$390.00",
  },
  {
    plan: "Business",
    text: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price1: "$99.00",
    price2: "$990.00",
  },
];

const featuresTableData = [
  {
    feature: "UNLIMITED STORY POSTING",
    plan: [true, true, true],
  },
  {
    feature: "UNLIMITED PHOTO UPLOAD",
    plan: [true, true, true],
  },
  {
    feature: "EMBEDDING CUSTOM CONTENT",
    plan: [false, true, true],
  },
  {
    feature: "CUSTOMIZE METADATA",
    plan: [false, true, true],
  },
  {
    feature: "ADVANCED METRICS",
    plan: [false, false, true],
  },
  {
    feature: "PHOTO DOWNLOADS",
    plan: [false, false, true],
  },
  {
    feature: "SEARCH ENGINE INDEXING",
    plan: [false, false, true],
  },
  {
    feature: "CUSTOM ANALYTICS",
    plan: [false, false, true],
  },
];

export {
  heroData,
  cardsData,
  featuresData,
  storiesData,
  featuresData2,
  pricingData,
  featuresTableData,
};
