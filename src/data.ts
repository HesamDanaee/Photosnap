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
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/journalist-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/journalist-tablet.webp')]",
      desktop:
        "lg:bg-[url('/src/assets/images/new/webp-format/journalist-desktop.webp')]",
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
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/beautiful-stories-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/beautiful-stories-tablet.webp')]",
      desktop:
        "lg:bg-[url('/src/assets/images/new/webp-format/beautiful-stories-desktop.webp')]",
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
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/designed-for-everyone-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/designed-for-everyone-tablet.webp')]",
      desktop:
        "lg:bg-[url('/src/assets/images/new/webp-format/designed-for-everyone-desktop.webp')]",
    },
  },
];

const cardsData = [
  {
    title: "The Mountains",
    text: "by John Appleseed",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/mountains-mobile.webp')]",
      tablet:
        "bg-[url('/src/assets/images/new/webp-format/mountains-tablet.webp')]",
    },
  },
  {
    title: "Sunset Cityscapes",
    text: "by Benjamin Cruz",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/cityscapes-mobile.webp')]",
      tablet:
        "bg-[url('/src/assets/images/new/webp-format/cityscapes-tablet.webp')]",
    },
  },
  {
    title: "18 Days Voyage",
    text: "by Alexei Borodin",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/18-days-voyage-mobile.webp')]",
      tablet:
        "bg-[url('/src/assets/images/new/webp-format/18-days-voyage-tablet.webp')]",
    },
  },
  {
    title: "Architecturals",
    text: "by Samantha Brooke",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/architecturals-mobile.webp')]",
      tablet:
        "bg-[url('/src/assets/images/new/webp-format/architecturals-tablet.webp')]",
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
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/world-tour-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/world-tour-tablet.webp')]",
    },
  },
  {
    title: "Unforeseen Corners",
    text: "by William Malcom",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/unforeseen-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/unforeseen-tablet.webp')]",
    },
  },
  {
    title: "King on Africa: Part II",
    text: "by Tim Hillenburg",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/king-of-africa-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/king-of-africa-tablet.webp')]",
    },
  },
  {
    title: "The Trip to Nowhere",
    text: "by Felicia Rourke",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/nowhere-island-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/nowhere-island-tablet.webp')]",
    },
  },
  {
    title: "Rage of The Sea",
    text: "by Mohammed Abdul",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/rage-of-the-sea-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/rage-of-the-sea-tablet.webp')]",
    },
  },
  {
    title: "Running Free",
    text: "by Michelle",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/running-free-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/running-free-tablet.webp')]",
    },
  },
  {
    title: "Behind the Waves",
    text: "by Lamarr Wilson",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/behind-the-waves-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/behind-the-waves-tablet.webp')]",
    },
  },
  {
    title: "Calm Waters",
    text: "by Samantha Brooke",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/calm-waters-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/calm-waters-tablet.webp')]",
    },
  },
  {
    title: "The Milky Way",
    text: "by Benjamin Cruz",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/milky-way-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/milky-way-tablet.webp')]",
    },
  },
  {
    title: "Night at The Dark Forest",
    text: "by Mohammed Abdul",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/night-at-forest-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/night-at-forest-tablet.webp')]",
    },
  },
  {
    title: "Somwarpet’s Beauty",
    text: "by Michelle",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/somwarpets-beauty-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/somwarpets-beauty-tablet.webp')]",
    },
  },
  {
    title: "Land of Dreams",
    text: "by William Malcolm",
    img: {
      mobile:
        "sm-max:bg-[url('/src/assets/images/new/webp-format/land-of-dreams-mobile.webp')]",
      tablet:
        "sm:bg-[url('/src/assets/images/new/webp-format/land-of-dreams-tablet.webp')]",
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
