import Image from "next/image";
import uploadIcon from "@/assets/uploadIcon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileSizeInBytes = file.size;
      const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

      if (fileSizeInMegabytes > 16) {
        toast({
          variant: "destructive",
          description: "File size exceeds 16MB limit.",
        });
      } else if (
        !["image/jpeg", "image/png", "image/svg"].includes(file.type)
      ) {
        toast({
          variant: "destructive",
          description: "Only SVG, PNG, and JPG images are allowed.",
        });
      } else {
        setSelectedFile(file);
      }
    }
  };
  return (
    <div>
      <div className="flex flex-row items-center ">
        <div className="rounded-full border-8 mt-8">
          <Image
            src={selectedFile ? URL.createObjectURL(selectedFile) : uploadIcon}
            alt="upload"
            width={"20"}
          />
        </div>

        <div className="mx-8 mt-8 ">
          <div className="btns">
            <Button type="button" variant="destructive">
              Remove
            </Button>
            <Button type="button" variant="outline" className="relative">
              <Input
                type="file"
                className="hide"
                onChange={handleImage}
                accept="image/*"
              />
              Change Photo
            </Button>
          </div>
          <div className="">
            <p className="text-sm font-medium text-[#17171F]/[.4]">
              or drag and drop (SVG,PNG,JPG)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
