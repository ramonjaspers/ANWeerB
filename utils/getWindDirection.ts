
export const getWindDirection = (deg: number) => {
  const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
  // Select correct index with 360 degrees with 8 directions rounding to nearest integer  
  const index = Math.round(deg / 45) % 8;
  return directions[index];
};
