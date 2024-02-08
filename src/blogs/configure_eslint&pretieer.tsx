import Steps from "@/components/Steps";
import CodeImage from "@/components/codeImage";
import BlogLayout from "@/layout/blogLayout";

const imageData: string[] = [
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*WyYkJi-C-NTM-3Gs6qhHCA.png",
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_3YgdiOcvT9rN0L8cGbK8w.png",
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qgzyREGfyJKdSzcB82m7Jw.png",
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*r1-1PF7g-Tw5ioSlCP0qOg.png",
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FfdnrSl44LIukUCNfQBvuw.png",
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*BFmoDE7rv6toQVbrdoCWpg.png",
  "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kG9MQRbj3lbPmSGgdrfkBA.png",
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*iZ3v5mwwtKUIRaQw6JIATQ.png",
];

const ConfigureEandPrtr = () => {
  return (
    <>
      <BlogLayout>
        <CodeImage
          className="object-cover w-full"
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*0-E9OR-tE0ZFTJOzuNkk5w.png"
        />
        <h1>Configure Eslint and Prettier for your React project like a pro</h1>
        <Steps step={"First"} />
        <code>npm init @eslint/config</code>
        <p>
          After that, this configuration starts asking some questions you let us
          answer together.
        </p>
        <div>
          {imageData.map((image, index) => (
            <CodeImage image={image} key={index} />
          ))}
        </div>
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

export default ConfigureEandPrtr;
