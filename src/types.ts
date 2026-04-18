export interface TeamMember {
  name: string;
  role: string;
  education: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  price: string;
  why: string;
  when: string;
  benefits: string[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}
