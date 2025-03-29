import React from 'react';
import Crown from '~/assets/svgs/crown';
import Fire from '~/assets/svgs/fire';
import RocketShip from '~/assets/svgs/rocketShip';

export type CarouselDataType = {
  Image: JSX.Element;
  Title: string;
  Description: string;
  buttonTitle: string; // Add this property
};

export const CarouselData = [
  {
    Image: <RocketShip />,
    Title: 'Welcome to \nchallenges!',
    Description: 'Crush your goals, rack up wins, and make budgeting more fun than ever!',
    buttonTitle: "Let's go", // Add this property
  },
  {
    Image: <Fire />,
    Title: 'Take on Challenges, Unlock Rewards',
    Description:
      'Complete epic challenges, earn shiny badges, \nand brag about your wins as you smash those \nsavings goals!',
    buttonTitle: 'Next', // Add this property
  },
  {
    Image: <Crown />,
    Title: 'Climb the Leaderboard, Be a Money Hero!',
    Description:
      'Race to the top, beat your friends, and \ncelebrate every victory like the budgeting \nchampion you are!',
    buttonTitle: 'Continue', // Add this property
  },
];
