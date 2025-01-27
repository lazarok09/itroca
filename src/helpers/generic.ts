export const isValidImage = (url: string) => {
  if (url?.length && typeof url === "string") {
    const validImageTypes = ["jpg", "jpeg", "png", "webp", "svg"];

    const extension = url.split(".").pop();
    
    if (extension === undefined || !Array.isArray(extension)) {
      return false;
    }

    if (validImageTypes.includes(extension)) {
      return true;
    }
  }
  return false;
};
