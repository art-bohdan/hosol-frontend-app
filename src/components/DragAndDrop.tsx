import React from "react";
import { useDropzone } from "react-dropzone";
import "./DragAndDrop.css";

export const DragAndDrop: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [HTMLfile, setHTMLFile] = React.useState<string | null>(null);

  const fileToDataUrl = (file: File | null) => {
    if (!file) return Promise.resolve(null);

    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => resolve(reader.result as string),
        false
      );

      reader.readAsText(file);
    });
  };

  const onChange = async (acceptedFiles: File[]) => {
    const files = acceptedFiles ?? null;
    const indexHTMLFile = files
      .map((i) => i.name.includes("html"))
      .indexOf(true);
    const htmlString = await fileToDataUrl(acceptedFiles[indexHTMLFile]);

    // setHTMLFile(compressHTML(htmlString));
  };

  React.useEffect(() => {
    if (acceptedFiles.length) {
      onChange(acceptedFiles);
    }
  }, [acceptedFiles]);

  return (
    <div {...getRootProps({ className: "file-drop-area" })}>
      <span className="fake-btn">Choose files</span>
      <span className="file-msg">or drag and drop files here</span>
      <input className="file-input" type="file" multiple {...getInputProps()} />
    </div>
  );
};
