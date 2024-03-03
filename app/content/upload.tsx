import Image from "next/image";
import uploadIcon from "@/assets/uploadIcon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DragEventHandler, useCallback, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useDropzone } from "react-dropzone";

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

  const onDrop = useCallback((acceptedFiles: any) => {
    // const acceptedFiles: FileList = event.dataTransfer?.files;
    const file = acceptedFiles && acceptedFiles[0];
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
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div className="flex flex-row items-center relative mt-6 sm:mt-0">
        <div
          {...getRootProps({
            className: "uploadBox",
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <Image
          className="uploadImg"
          src={selectedFile ? URL.createObjectURL(selectedFile) : uploadIcon}
          alt="upload"
          width={"108"}
          height={"108"}
        />

        <div className="mx-2 sm:mx-8 mt-8 w-[70%] sm:w-[100%] ">
          <div className="btns">
            <Button
              type="button"
              variant="destructive"
              onClick={() => setSelectedFile(null)}
            >
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
