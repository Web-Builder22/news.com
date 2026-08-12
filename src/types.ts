export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  isFeatured?: boolean;
  isTrending?: boolean;
}
