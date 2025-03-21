export interface Pledge {
  id: string; // Unique identifier for each pledge
  name: string; // Name of the person making the pledge
  amount: number; // Amount pledged in UGX
  bankEmail: string; // Personal email of the person (Ugandan domain)
  bankName: string; // Name of the bank (Ugandan banks)
  insuranceCompany: string; // Name of the insurance company (Ugandan insurers)
}

export interface Certificate {
  id: string; // Unique identifier for each certificate
  name: string; // Name of the saving plan (Uganda-based)
  dateIssued: string; // Date issued in ISO format (e.g., "2023-10-01")
  pledgeId: string; // Reference to the associated pledge
}

export const pledges: Pledge[] = [
  {
    id: '1',
    name: 'John Mugisha',
    amount: 1500000, // 1,500,000 UGX
    bankEmail: 'john.mugisha@example.ug',
    bankName: 'Centenary Bank',
    insuranceCompany: 'Jubilee Insurance Uganda',
  },
  {
    id: '2',
    name: 'Jane Nakato',
    amount: 2300000, // 2,300,000 UGX
    bankEmail: 'jane.nakato@example.ug',
    bankName: 'Stanbic Bank Uganda',
    insuranceCompany: 'AIG Uganda',
  },
  {
    id: '3',
    name: 'Alice Namugga',
    amount: 5000000, // 5,000,000 UGX
    bankEmail: 'alice.namugga@example.ug',
    bankName: 'DFCU Bank',
    insuranceCompany: 'Liberty Life Assurance Uganda',
  },
  {
    id: '4',
    name: 'Bob Ssebaggala',
    amount: 1200000, // 1,200,000 UGX
    bankEmail: 'bob.ssebaggala@example.ug',
    bankName: 'Equity Bank Uganda',
    insuranceCompany: 'Sanlam Uganda',
  },
  {
    id: '5',
    name: 'Charlie Kato',
    amount: 3400000, // 3,400,000 UGX
    bankEmail: 'charlie.kato@example.ug',
    bankName: 'Bank of Africa Uganda',
    insuranceCompany: 'Prudential Uganda',
  },
  {
    id: '6',
    name: 'Eva Nalwoga',
    amount: 4500000, // 4,500,000 UGX
    bankEmail: 'eva.nalwoga@example.ug',
    bankName: 'Absa Bank Uganda',
    insuranceCompany: 'UAP Old Mutual Uganda',
  },
  {
    id: '7',
    name: 'Frank Ssemakula',
    amount: 600000, // 600,000 UGX
    bankEmail: 'frank.ssemakula@example.ug',
    bankName: 'Cairo International Bank',
    insuranceCompany: 'Goldstar Insurance Uganda',
  },
  {
    id: '8',
    name: 'Grace Nalubega',
    amount: 7800000, // 7,800,000 UGX
    bankEmail: 'grace.nalubega@example.ug',
    bankName: 'Housing Finance Bank',
    insuranceCompany: 'APA Insurance Uganda',
  },
  {
    id: '9',
    name: 'Henry Wasswa',
    amount: 900000, // 900,000 UGX
    bankEmail: 'henry.wasswa@example.ug',
    bankName: 'Finance Trust Bank',
    insuranceCompany: 'Britam Insurance Uganda',
  },
  {
    id: '10',
    name: 'Ivy Namutebi',
    amount: 3000000, // 3,000,000 UGX
    bankEmail: 'ivy.namutebi@example.ug',
    bankName: 'Tropical Bank',
    insuranceCompany: 'Allianz Uganda',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'c1',
    name: 'Retirement Savings Plan',
    dateIssued: '2023-09-15',
    pledgeId: '1', // Associated with John Mugisha's pledge
  },
  {
    id: 'c2',
    name: 'Education Savings Plan',
    dateIssued: '2023-08-20',
    pledgeId: '2', // Associated with Jane Nakato's pledge
  },
  {
    id: 'c3',
    name: 'Emergency Fund Plan',
    dateIssued: '2023-07-10',
    pledgeId: '3', // Associated with Alice Namugga's pledge
  },
  {
    id: 'c4',
    name: 'Home Purchase Plan',
    dateIssued: '2023-06-05',
    pledgeId: '4', // Associated with Bob Ssebaggala's pledge
  },
  {
    id: 'c5',
    name: 'Vacation Savings Plan',
    dateIssued: '2023-05-12',
    pledgeId: '5', // Associated with Charlie Kato's pledge
  },
  {
    id: 'c6',
    name: 'Wealth Building Plan',
    dateIssued: '2023-04-18',
    pledgeId: '6', // Associated with Eva Nalwoga's pledge
  },
  {
    id: 'c7',
    name: 'Health Savings Plan',
    dateIssued: '2023-03-22',
    pledgeId: '7', // Associated with Frank Ssemakula's pledge
  },
  {
    id: 'c8',
    name: 'Business Expansion Plan',
    dateIssued: '2023-02-14',
    pledgeId: '8', // Associated with Grace Nalubega's pledge
  },
  {
    id: 'c9',
    name: 'Charity Savings Plan',
    dateIssued: '2023-01-30',
    pledgeId: '9', // Associated with Henry Wasswa's pledge
  },
  {
    id: 'c10',
    name: 'Legacy Savings Plan',
    dateIssued: '2022-12-25',
    pledgeId: '10', // Associated with Ivy Namutebi's pledge
  },
];
