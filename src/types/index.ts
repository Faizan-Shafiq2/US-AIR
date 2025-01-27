export interface BlogPost {
    imageUrl: string;
    time?: string;
    title?: string;
    _id?: string;
    slug: {
      current?: string;
    };
  }
  
  export interface RelatedPostProps {
    blogPost?: BlogPost[];
    selectedPostId?: string;
  }