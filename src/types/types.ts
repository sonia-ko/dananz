export type overwiewParagraph = {
  text: string;
  id: string;
};

export type feedback = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  message: string;
  selectedCountry: string;
};

export type image = {
  src: string;
  alt: string;
};

export type Room = {
  slug: string;
  title: string;
  description: string;
  mainImg: string;
  projectOverview: overwiewParagraph[];
  designProcess: overwiewParagraph[];
  date: string;
  category: string;
  images: image[];
};
