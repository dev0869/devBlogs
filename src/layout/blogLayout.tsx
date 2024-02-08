import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[800px] ">{children}</div>
    </div>
  );
};

export default BlogLayout;
