const vibrantColors = [
    '#1E90FF', 
    '#FF6347', 
    '#32CD32', 
    '#FF00FF', 
    '#40E0D0', 
    '#FF4500', 
    '#FFFF00', 
    '#FF00FF', 
    '#DC143C', 
    '#1E90FF'  
  ];
  
  // Function to get a random vibrant color
  const getRandomVibrantColor = () => {
    const randomIndex = Math.floor(Math.random() * vibrantColors.length);
    return vibrantColors[randomIndex];
  };

  export default getRandomVibrantColor