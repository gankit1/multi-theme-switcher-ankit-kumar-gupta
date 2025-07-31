export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export type ThemeType = 'theme1' | 'theme2' | 'theme3';
  
  export interface ThemeContextType {
    currentTheme: ThemeType;
    setTheme: (theme: ThemeType) => void;
  }
  
  export interface ApiResponse<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
  }
  