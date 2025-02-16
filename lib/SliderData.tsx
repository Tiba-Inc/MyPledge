import React from 'react';
import Account from '~/assets/svgs/account';
import Calculator from '~/assets/svgs/calculator';
import Calendar from '~/assets/svgs/calendar';
import Earn from '~/assets/svgs/earn';
import GiftBox from '~/assets/svgs/giftBox';
import Headphones from '~/assets/svgs/headphones';
import Vault from '~/assets/svgs/vault';
import Wallet from '~/assets/svgs/wallet';

export type CarouselDataType = {
  heading?: string;
  Image: JSX.Element;
  Title: string;
  Description: string;
  buttonType?: 'next' | 'continue'; // Specify button type
};

export const CarouselData = [
  {
    Image: <Account />,
    heading: 'How the app works',
    Title: 'Create an account',
    Description:
      'Join our community and start your financial journey. Create a free account to gain access to personalized tools and advice.',
    buttonType: 'continue', // Show "Continue" button
  },

  {
    Image: <Earn />,
    heading: 'How the app works',
    Title: 'How often do you earn',
    Description:
      ' Understanding your income is essential for effective budgeting. Tell us how frequently you receive your salary or wages.',
    buttonType: 'continue', // Show "Continue" button
  },
  {
    Image: <Calendar />,
    heading: 'How the app works',
    Title: 'Average monthly earning',
    Description:
      'Provide your average monthly income to get accurate budgeting recommendations. This  helps you set realistic financial goals.',
    buttonType: 'continue', // Show "Continue" button
  },
  {
    Image: <Calculator />,
    heading: 'How the app works',
    Title: 'Take your pledge',
    Description:
      "You're ready to embark on your financial wellness journey. Commit to using our app to  achieve your financial goals.",
    buttonType: 'continue', // Show "Continue" button
  },
  {
    Image: <Wallet />,
    Title: 'Personal financial wellness- take and live the pledge',
    Description:
      'Financial wellness starts today. Balancing your needs now with your future goals is key. The 50/30/20 rule helps you create a budget that works, track progress, building a brighter financial future.',
    buttonType: 'next', // Show "Next" button
  },
  {
    Image: <GiftBox />,
    Title: '50% goes to your needs',
    Description: 'Essential expenses like food, housing, utilities, insurance, and more.',
    buttonType: 'next', // Show "Next" button
  },
  {
    Image: <Headphones />,
    Title: '30% goes to your wants',
    Description:
      'Things you can do without but improve your life’s quality. Could be entertainment, travel.',
    buttonType: 'next', // Show "Next" button
  },
  {
    Image: <Vault />,
    Title: '20% goes to your savings',
    Description:
      'Savings for things like emergency fund, retirement, access to credit, life goals, etc.',
    buttonType: 'continue', // Show "Continue" button
  },
];
