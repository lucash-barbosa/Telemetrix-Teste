const generateRandomColor = () => {
  const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

  let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  if (color === '000000' || !hexColorRegex.test(color)) {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return color;
};

export default generateRandomColor;
