// import { minify } from "html-minifier";

// export const compressHTML = (file:string | null) => {
//   return minify(file!);
// };

export const fileReader = (file: File) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    console.log(e, "e");
    console.log(reader.result);
  };

  reader.readAsText(file);

  return reader.result;
};
