export function generateRandomReward(): number {
  // Generate a random number between 1 and 50
  const randomValue = 1 + Math.random() * 49;
  // Round to 2 decimal places
  return Number(randomValue.toFixed(2));
}