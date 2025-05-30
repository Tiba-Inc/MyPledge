// dummyGoalsData.ts

export interface Goal {
    id: number;
    name: string;
    targetAmount: number;
    monthlyTarget: number;
    category: string;
    savedAmount: number;
    startDate: string;
    endDate: string;
    status: 'active' | 'reached'; // Status of the goal
  }
  
  export const DummyGoals: Goal[] = [
    // Active Goals (7)
    {
      id: 1,
      name: "Vacation to Hawaii",
      targetAmount: 5000,
      monthlyTarget: 500,
      category: "Travel",
      savedAmount: 1500,
      startDate: "2023-10-01",
      endDate: "2024-09-30",
      status: 'active',
    },
    {
      id: 2,
      name: "New Laptop",
      targetAmount: 1200,
      monthlyTarget: 200,
      category: "Electronics",
      savedAmount: 600,
      startDate: "2023-11-01",
      endDate: "2024-04-30",
      status: 'active',
    },
    {
      id: 3,
      name: "Emergency Fund",
      targetAmount: 10000,
      monthlyTarget: 1000,
      category: "Savings",
      savedAmount: 3000,
      startDate: "2023-09-01",
      endDate: "2024-08-31",
      status: 'active',
    },
    {
      id: 4,
      name: "Home Renovation",
      targetAmount: 20000,
      monthlyTarget: 1500,
      category: "Home Improvement",
      savedAmount: 5000,
      startDate: "2023-12-01",
      endDate: "2025-05-31",
      status: 'active',
    },
    {
      id: 5,
      name: "Car Down Payment",
      targetAmount: 8000,
      monthlyTarget: 800,
      category: "Automotive",
      savedAmount: 2000,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      status: 'active',
    },
    {
      id: 6,
      name: "Wedding Fund",
      targetAmount: 15000,
      monthlyTarget: 1250,
      category: "Life Events",
      savedAmount: 7500,
      startDate: "2023-06-01",
      endDate: "2024-05-31",
      status: 'active',
    },
    {
      id: 7,
      name: "Gaming PC",
      targetAmount: 2000,
      monthlyTarget: 400,
      category: "Electronics",
      savedAmount: 800,
      startDate: "2023-10-01",
      endDate: "2024-03-31",
      status: 'active',
    },
  
    // Reached Goals (13)
    {
      id: 8,
      name: "Smartphone Upgrade",
      targetAmount: 1000,
      monthlyTarget: 200,
      category: "Electronics",
      savedAmount: 1000,
      startDate: "2023-01-01",
      endDate: "2023-06-30",
      status: 'reached',
    },
    {
      id: 9,
      name: "Fitness Equipment",
      targetAmount: 800,
      monthlyTarget: 200,
      category: "Health",
      savedAmount: 800,
      startDate: "2023-02-01",
      endDate: "2023-05-31",
      status: 'reached',
    },
    {
      id: 10,
      name: "Summer Vacation",
      targetAmount: 3000,
      monthlyTarget: 500,
      category: "Travel",
      savedAmount: 3000,
      startDate: "2023-03-01",
      endDate: "2023-08-31",
      status: 'reached',
    },
    {
      id: 11,
      name: "New Camera",
      targetAmount: 1500,
      monthlyTarget: 300,
      category: "Electronics",
      savedAmount: 1500,
      startDate: "2023-04-01",
      endDate: "2023-09-30",
      status: 'reached',
    },
    {
      id: 12,
      name: "Christmas Gifts",
      targetAmount: 1200,
      monthlyTarget: 200,
      category: "Gifts",
      savedAmount: 1200,
      startDate: "2023-06-01",
      endDate: "2023-12-25",
      status: 'reached',
    },
    {
      id: 13,
      name: "Emergency Fund",
      targetAmount: 5000,
      monthlyTarget: 1000,
      category: "Savings",
      savedAmount: 5000,
      startDate: "2023-01-01",
      endDate: "2023-06-30",
      status: 'reached',
    },
    {
      id: 14,
      name: "New Furniture",
      targetAmount: 3000,
      monthlyTarget: 500,
      category: "Home Improvement",
      savedAmount: 3000,
      startDate: "2023-03-01",
      endDate: "2023-08-31",
      status: 'reached',
    },
    {
      id: 15,
      name: "Language Course",
      targetAmount: 600,
      monthlyTarget: 100,
      category: "Education",
      savedAmount: 600,
      startDate: "2023-02-01",
      endDate: "2023-07-31",
      status: 'reached',
    },
    {
      id: 16,
      name: "New Watch",
      targetAmount: 500,
      monthlyTarget: 100,
      category: "Accessories",
      savedAmount: 500,
      startDate: "2023-01-01",
      endDate: "2023-05-31",
      status: 'reached',
    },
    {
      id: 17,
      name: "Charity Donation",
      targetAmount: 1000,
      monthlyTarget: 200,
      category: "Donations",
      savedAmount: 1000,
      startDate: "2023-04-01",
      endDate: "2023-09-30",
      status: 'reached',
    },
    {
      id: 18,
      name: "New Bike",
      targetAmount: 800,
      monthlyTarget: 200,
      category: "Automotive",
      savedAmount: 800,
      startDate: "2023-03-01",
      endDate: "2023-07-31",
      status: 'reached',
    },
    {
      id: 19,
      name: "Hobby Supplies",
      targetAmount: 400,
      monthlyTarget: 100,
      category: "Hobbies",
      savedAmount: 400,
      startDate: "2023-02-01",
      endDate: "2023-05-31",
      status: 'reached',
    },
    {
      id: 20,
      name: "New Shoes",
      targetAmount: 200,
      monthlyTarget: 50,
      category: "Clothing",
      savedAmount: 200,
      startDate: "2023-01-01",
      endDate: "2023-03-31",
      status: 'reached',
    },
  ];