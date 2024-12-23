export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Video Conferencing Software",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Space - Galaxies and Cosmos",
    des: "Journey through the cosmos of design, where creativity knows no limits !",
    img: "/pr1.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/AsKaNd098",
  },
  {
    id: 2,
    title: "Pizzeria - Pizza Shop",
    des: "Food for the body is not enough their must be a food for the soul ! ",
    img: "/pr2.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/AsKaNd098",
  },
  {
    id: 3,
    title: "BurgER - Tikki and Buns",
    des: "Sink your teeth into perfection—where every burger is a flavor explosion !",
    img: "/pr3.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/AsKaNd098",
  },
  {
    id: 4,
    title: "Chippps - The Indian Choice",
    des: "Golden, crispy, and irresistible—every chip is a flavor-packed crunch !",
    img: "/pr4.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/AsKaNd098",
  },
];

export const testimonials = [
  {
    quote:
      "Skand Singh is an incredibly talented web developer who transformed our website into a sleek, user-friendly experience. His communication was clear, and he worked efficiently to ensure everything was perfect. We highly recommend him for anyone looking to elevate their online presence.",
    name: "Vikram Desai",
    title: "Product Manager at BrightWave Technologies",
  },
  {
    quote:
      "Skand is a true professional in every sense. His technical knowledge, creative approach, and dedication to delivering top-notch websites make him a standout web developer. He not only met but exceeded our expectations, and we’re thrilled with the results!",
    name: "Priya Mehta",
    title: "Head of Digital Marketing at NextGen Enterprises",
  },
  {
    quote:
      "Working with Skand Singh has been a game-changer for our online platform. His expertise in web development and problem-solving skills helped bring our ideas to life seamlessly. The end product is both beautiful and functional, and we couldn’t be happier with his work!",
    name: "Raj Patel",
    title: "CEO at InnovateTech Solutions",
  },
  {
    quote:
      "Collaborating with Skand was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Skand's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Skand Singh is an exceptional web developer who took our vision and turned it into a stunning online presence. His attention to detail, innovative solutions, and ability to meet deadlines exceeded all expectations. We're thrilled with the results and highly recommend his expertise!",
    name: "Ayesha Sharma",
    title: "Marketing Director at TechSolutions Inc.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Dev",
    desc: "Assisted in the development of a web-based platform using React.js and Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Graphic Designing",
    desc: "Turning creativity into stunning designs that leave a lasting impression.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Dev",
    desc: "Building the unseen architecture that powers seamless, high-performance digital experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
