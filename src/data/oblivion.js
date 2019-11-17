import keyBy from 'lodash/keyBy';

export const ALLIANCES = {
    GUARDIAN: 'Guardian',
    CORRUPTOR: 'Corruptor',
    BOTH: 'both'
};

export const tierByRecordIndex = [0,0,0,1,2,3,4];

export const campaignTree = [
    [
        {
            id: 0,
            tier: 0,
            win:[1],
            loss: [1],
            order: 0,
            alliance: ALLIANCES.BOTH,
            name: 'Doomed Patrol',
            summary: 'page #'
        },
        {
            id: 1,
            tier: 0,
            win: [2],
            loss: [2],
            order: 1,
            alliance: ALLIANCES.BOTH,
            name: 'Rising Tensions',
            summary: 'page #'
        },
        {
            id: 2,
            tier: 0,
            win:[3,4],
            loss:[3,4],
            order: 2,
            alliance: ALLIANCES.BOTH,
            name: 'Border War',
            summary: 'page #'
        }
    ],
    [
        {
            id: 3,
            tier: 1,
            win: [5],
            loss: [6],
            order: 0,
            alliance: ALLIANCES.GUARDIAN,
            name: 'A War for Peace',
            summary: 'page #'
        },
        {
            id: 4,
            tier: 1,
            win: [10],
            loss: [11],
            order: 1,
            alliance: ALLIANCES.CORRUPTOR,
            name: 'Fueling the fire',
            summary: 'page #'  
        }
    ],
    [
        {
            id: 5,
            tier: 2,
            win: [8],
            loss: [9],
            order: 0,
            alliance: ALLIANCES.GUARDIAN,
            name: 'Seeds of Hope',
            summary: 'page #'
        },
        {
            id: 6,
            tier: 2,
            win: [9],
            loss: [7],
            order: 1,
            alliance: ALLIANCES.GUARDIAN,
            name: 'The Sanguine Trail',
            summary: 'page #'
        },
        {
            id: 10,
            tier: 2,
            win: [12],
            loss: [13],
            order: 1,
            alliance: ALLIANCES.CORRUPTOR,
            name: 'Reckless Assault',
            summary: 'page #'
        },
        {
            id: 11,
            tier: 2,
            win: [13],
            loss: [14],
            order: 0,
            alliance: ALLIANCES.CORRUPTOR,
            name: 'Burial at Sea',
            summary: 'page #'
        },
    ],
    [
        {
            id: 7,
            tier: 3,
            win: [666],
            loss: [666],
            order: 2,
            alliance: ALLIANCES.GUARDIAN,
            name: 'Dark Days',
            summary: 'page #'
        },
        {
            id: 8,
            tier: 3,
            win: [666],
            loss: [666],
            order: 0,
            alliance: ALLIANCES.GUARDIAN,
            name: 'Toward the light',
            summary: 'page #'
        }, 
        {
            id: 9,
            tier: 3,
            win: [666],
            loss: [666],
            order: 1,
            alliance: ALLIANCES.GUARDIAN,
            name: 'Left Behind',
            summary: 'page #'
        },
        {
            id: 12,
            tier: 3,
            win: [666],
            loss: [666],
            order: 2,
            alliance: ALLIANCES.CORRUPTOR,
            name: 'The End is Nigh',
            summary: 'page #'
        },
        {
            id: 13,
            tier: 3,
            win: [666],
            loss: [666],
            order: 1,
            alliance: ALLIANCES.CORRUPTOR,
            name: 'Clouded Visions',
            summary: 'page #'
        }, 
        {
            id: 14,
            tier: 3,
            win: [666],
            loss: [666],
            order: 0,
            alliance: ALLIANCES.CORRUPTOR,
            name: 'The Last Ride',
            summary: 'page #'
        }
    ],
    [
        {
            id: 666,
            tier: 4,
            win: [],
            loss: [],
            order: 0,
            alliance: ALLIANCES.BOTH,
            name: "Gateway to Oblivion",
            summary: 'page 666'
        }
    ]
];

export const campaignScenarioList = campaignTree.reduce((acc, tier) => [...acc, ...tier]);

export const campaignScenarioMap = keyBy(campaignScenarioList, ({id}) => id );