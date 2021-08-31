export interface Field {
  body: any; // todo
  publishedDate: string;
  slug: string;
  title: string;
  thumbNail: any; //todo
}

export interface Sys {
  createdAt: string;
  id: string;
  locale: string;
  revision: number;
  type: string;
  updatedAt: string;
}

export interface Blog {
  fields: Field;
  sys: Sys; // todo
}

export interface BlogPageProps {
  posts: Blog[];
}
