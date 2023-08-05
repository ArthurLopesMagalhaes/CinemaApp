export const defineDisable = (status: string) => {
  switch (status) {
    case "occupied":
      return true;
    case "empty":
      return true;
    default:
      return false;
  }
};
