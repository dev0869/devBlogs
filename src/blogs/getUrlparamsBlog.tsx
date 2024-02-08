import CodeImage from "@/components/codeImage";
import Steps from "@/components/steps";
import BlogLayout from "@/layout/blogLayout";

const GetUrlparamsBlog = () => {
  return (
    <>
      <BlogLayout>
        <CodeImage
          className="object-cover w-full"
          image="https://herewecode.io/wp-content/uploads/2022/09/react-get-url-params-1536x864.webp"
        />

        <h1>Ways to get SearchURL params</h1>
        <Steps step="First Method" />
        <p>With Router</p>
        <img src="params.png" alt="" />
        <Steps step="Second Method" />
        <p>WithOut Router</p>
        <img src="params2.png" alt="" />
      </BlogLayout>
    </>
  );
};

export default GetUrlparamsBlog;
