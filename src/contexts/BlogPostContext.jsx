import React, { createContext } from 'react';

export const BlogPostContext = createContext({});

export const BlogPostProvider = ({ children }) => {
  const [allBlogData, setAllBlogData] = useState(null);
  return (
    <BlogPostContext.Provider value={{ allBlogData, setAllBlogData }}>
      {children}
    </BlogPostContext.Provider>
  );
}