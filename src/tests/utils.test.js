import { calculatePointsForTransaction } from "../utils/helper";

describe("Reward Points Calculation", () => {
  test("should return 0 points for amounts less than $50", () => {
    expect(calculatePointsForTransaction(30)).toBe(0);
    expect(calculatePointsForTransaction(49)).toBe(0);
  });

  test("should return correct points for amounts between $50 and $100", () => {
    expect(calculatePointsForTransaction(50)).toBe(0);
    expect(calculatePointsForTransaction(75)).toBe(25); // 25 points for $75 ($25 above $50)
    expect(calculatePointsForTransaction(100)).toBe(50); // 50 points for $100 ($50 above $50)
  });

  test("should return correct points for amounts over $100", () => {
    expect(calculatePointsForTransaction(120)).toBe(90); // (20 * 2) + (50 * 1) = 90
    expect(calculatePointsForTransaction(200)).toBe(250); // (100 * 2) + (50 * 1) = 250
  });
});
