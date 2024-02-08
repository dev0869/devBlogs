const CodeImage = ({
  image,
  key,
  className,
}: {
  image: string;
  key?: number;
  className?: string;
}) => {
  return (
    <div
      className="my-2 w-full flex justify-center border-3 border-red "
      key={key}
    >
      <img
        src={image}
        className={className || "object-contain w-full"}
        alt=""
      />
    </div>
  );
};

export default CodeImage;
