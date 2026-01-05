export interface News {
  description: string | undefined;
  id: number;
  images: string[];
  title: string;
  excerpt?: string;
  content?: string;
  createdAt?: string;
}
