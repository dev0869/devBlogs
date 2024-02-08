import { Footprints } from "lucide-react";

const Steps = ({ step }: { step: string }) => {
  return (
    <div className="flex items-center my-2 gap-2">
      <Footprints className="text-gray-800" />
      <h2>{step}</h2>
    </div>
  );
};

export default Steps;
