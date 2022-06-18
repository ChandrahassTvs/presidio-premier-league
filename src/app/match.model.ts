export const matchAttributesMapping = {
  id: 'No',
  date: 'Date',
  status: 'Status',
  game: {
    name: 'Game',
    type: 'Type',
  },
  teamOne: {
    name: 'Team 1',
    players: {
      _prefix: 'Team 1 - Player ',
      _listField: true,
    },
    score: 'Team 1 - Score',
  },
  teamTwo: {
    name: 'Team 2',
    players: {
      _prefix: 'Team 2 - Player ',
      _listField: true,
    },
    score: 'Team 2 - Score',
  },
  result: 'Result',
};

export interface Match {
  id: string;
  date: string;
  game: {
    name: string;
    type: string;
  };
  teamOne: {
    name: string;
    score: number;
    players: string[];
  };
  teamTwo: {
    name: string;
    score: number;
    players: string[];
  };
  result: string;
  status: string;
}
