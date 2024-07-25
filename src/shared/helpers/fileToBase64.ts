export const file2Base64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() || "");
    reader.onerror = (error) => reject(error);
  });
};

export const fileAll2Base64 = async (
  files: FileList | null
): Promise<string[]> => {
  if (files) {
    const filesLis = Array.from(files);
    const result = await Promise.all(
      filesLis.map(async (file) => await file2Base64(file))
    );
    return result;
  }
  return [];
};

// export const url2Base64 = (file: File): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result?.toString() || "");
//     reader.onerror = (error) => reject(error);
//   });
// };

export const urlAll2Base64 = async (images: IFile[]): Promise<string[]> => {
  if (images.length === 0) return [];
  const result = await Promise.all(
    images.map(async (image) => {
      const img = await fetch(image.url)
        .then((response) => response.blob())
        .then(async (blob: any) => {
          return await new File([blob], blob?.name, { type: blob?.type });
        });
      return await file2Base64(img);
    })
  );
  return result;
};
