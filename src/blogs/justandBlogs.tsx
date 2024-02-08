import CodeImage from "@/components/codeImage";
import Steps from "@/components/steps";
import BlogLayout from "@/layout/blogLayout";

const JustandBlogs = () => {
  return (
    <>
      <BlogLayout>
        <CodeImage
          className="object-cover w-full"
          image="https://refine-web.imgix.net/blog/2023-05-18-zustand/social.png?w=800"
        />
        <h1>How to use Zustand</h1>
        <Steps step={"First"} />
        <code>npm install zustand</code>
        <p>After that, make features folder and make file</p>
        <div></div>
        <Steps step={"Second"} />
        <code>npm install --save-dev --save-exact prettier</code>
        <p>
          After installing go to the .eslintrc.JSON file and inside “extends”
          add the “prettier” plugin.
        </p>

        <CodeImage
          className="object-contain"
          image={
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*FRq97rSmnWA_o58iXSnljA.png"
          }
        />
        <Steps step="Third" />
        <h2>we need to add these lines to the package.json Scripts file.</h2>

        <pre>
          {`
"lint": "eslint src/**/*.{(js, jsx, ts, tsx, json)}", 
"lint:fix": "eslint --fix src/**/*.{js,jsx,ts,tsx,json}",
"format": "prettier --write src/**/*.{js,jsx,ts,tsx,css,md,json,scss}
--config ./.prettierrc"
`}
        </pre>

        <Steps step="Fourth" />
        <p>
          Create .prettierrc file and write these lines inside it (this is a
          basic setup for prettier):
        </p>
        <pre>
          {`    
    {
      "semi": true,
      "tabWidth": 2,
      "printWidth": 100,
      "singleQuote": true,
      "trailingComma": "none"
    }`}
        </pre>
        <p>In the end, we can use them for:</p>
        <pre>
          {`
   npm run lint - lint our project 
   npm run lint:fix - lint and also fix errors in our project
   npm run format - format our codes with using prettier
        `}
        </pre>
        <p>
          But I recommended to use npm run Format Command to use Eslint Effects.
        </p>
      </BlogLayout>
    </>
  );
};

export default JustandBlogs;
