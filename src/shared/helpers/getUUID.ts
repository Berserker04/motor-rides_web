export const getShortUUID = () => {
  return "xxxxxxxx".replace(/[x]/g, function () {
    var r = (Math.random() * 16) | 0;
    return r.toString(16);
  });
};
