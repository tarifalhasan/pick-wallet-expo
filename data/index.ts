export const REWARDS_DATA: Array<{
  name: string;
  status: "claim" | "buy";
  expiresData?: string;
  valability?: string;
}> = [
  {
    name: "Reward 1",
    status: "claim",
    expiresData: "2024-08-01",
  },
  {
    name: "Reward 2",
    status: "buy",
    valability: "6 months",
  },
  {
    name: "Reward 3",
    status: "claim",
    expiresData: "2024-09-15",
  },
  {
    name: "Reward 4",
    status: "buy",
    valability: "1 year",
  },
  {
    name: "Reward 5",
    status: "claim",
    expiresData: "2024-12-31",
  },
];
