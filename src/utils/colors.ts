export const getRandomLavaColor = () => {
  const colors = [
    "from-red-500 via-orange-400 to-yellow-500",
    "from-blue-600 via-indigo-500 to-purple-500",
    "from-green-400 via-teal-500 to-blue-500",
    "from-gray-700 via-gray-900 to-black",
    "from-pink-500 via-red-500 to-yellow-500",
    "from-indigo-300 via-purple-400 to-pink-400",
    "from-yellow-200 via-green-200 to-green-500",
    "from-blue-700 via-blue-800 to-gray-900",
    "from-red-200 via-red-300 to-yellow-200",
    "from-green-300 via-yellow-300 to-pink-300",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
