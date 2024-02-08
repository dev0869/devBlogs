import CodeImage from "@/components/codeImage";
import Steps from "@/components/steps";
import BlogLayout from "@/layout/blogLayout";

const CorsBlog = () => {
  return (
    <>
      <BlogLayout>
        <CodeImage
          className="object-cover w-full"
          image="https://blog.moesif.com/images/posts/technical/cross-origin-resource-sharing/pitfalls-and-security.png"
        />

        <h1>Ways Solve Cors Problem</h1>
        <p>
          Like Backend server is (http://localhost:3000/api) that gives cors
          error then they can solved by (two ways - As Frontend As Backend).
        </p>

        <h2>1.By Frontend</h2>
        <p>Add this server option to viteConfig.ts</p>
        <img src="server.png" alt="" />

        <p>then we use it in Frontend as </p>
        <img src="api.png" alt="" />
        <h2>2.By Backend</h2>
        <Steps step="First" />
        <code>npm i cors</code>
        <Steps step="Second" />
        <p>Import cors in index.js in server file and use them.</p>
        <img src="cors.png" alt="" />
      </BlogLayout>
    </>
  );
};

export default CorsBlog;
