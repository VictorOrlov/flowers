export const fakeCompititions = [
  {
    id: 3,
    name: "Лучшее оформление фасада",
    kind: "open"
  },
  {
    id: 4,
    name: "Лучшее оформление дворовой территории",
    kind: "open"
  },
  {
    id: 5,
    name:
      "Лучшее оформление прилегающей территории для организаций и предприятий",
    kind: "open"
  },
  {
    id: 6,
    name: "Самая оригинальная цветочная композиция",
    kind: "open"
  },
  {
    id: 7,
    name:
      "Лучшее оформление территории, прилегающей к образовательному учреждению",
    kind: "open"
  },
  {
    id: 10,
    name: "Лучший цветочный кадр в городской среде",
    kind: "open"
  }
];

export const fakeWinnersPreviousYear = [
  {
    competition: {
      name: "Лучшие цветы на районе"
    },
    id: 1,
    place: 1,
    request: {
      address: "Гагарина",
      voicesCount: 111,
      photos: [
        {
          id: 76,
          url:
            "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/04/03/51/flower-festivals_ss_001.rend.hgtvcom.966.725.suffix/1491582683953.jpeg"
        },
        {
          id: 77,
          url:
            "https://images.rove.me/w_1920,q_85/ysku69nzck3nqudnfspp/madeira-madeira-flower-festival.jpg"
        },
        {
          id: 78,
          url:
            "https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/taean-tulip-festival.jpg"
        },
        {
          id: 176,
          url:
            "https://www.thaifestivalblogs.com/wp-content/uploads/2018/12/flowerfest-1.jpg"
        },
        {
          id: 177,
          url:
            "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/world-travel-events/madeira-flower-festival.jpg"
        }
      ]
    }
  },
  {
    competition: {
      name: "Лучшие цветочная композиция"
    },
    id: 2,
    place: 2,
    request: {
      address: "Комарова",
      voicesCount: 98,
      photos: [
        {
          id: 176,
          url:
            "https://www.thaifestivalblogs.com/wp-content/uploads/2018/12/flowerfest-1.jpg"
        },
        {
          id: 177,
          url:
            "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/world-travel-events/madeira-flower-festival.jpg"
        },
        {
          id: 178,
          url: "https://i.ytimg.com/vi/RsO3slPCMrc/maxresdefault.jpg"
        }
      ]
    }
  },
  {
    competition: {
      name: "Цветочный фестиваль"
    },
    id: 3,
    place: 3,
    request: {
      address: "Короленко",
      voicesCount: 55,
      photos: [
        {
          id: 276,
          url:
            "https://www.madeira-web.com/images/latest-news/festaflor19-a.jpg"
        },
        {
          id: 277,
          url:
            "https://www.salisburycathedral.org.uk/sites/default/files/018%20Magna%20Flora%20Flower%20Festival%20-%20by%20Ash%20Mills.jpg"
        },
        {
          id: 278,
          url:
            "http://indochinatravelblog.com/wp-content/uploads/2015/12/festival_EWUL.jpg"
        }
      ]
    }
  }
];

export const fakeRequestsForMap = [
  {
    id: 543,
    address: "Гагарина 111",
    participant: {
      name: 'ООО Мы рядом с Урицким"'
    },
    position: [55.836458, 49.071035]
  },
  {
    id: 654,
    address: "Восстания, 49",
    participant: {
      name: 'Отдел Полиции"'
    },
    position: [55.832727, 49.076439]
  },
  {
    id: 441,
    address: "Батурина, 18п",
    participant: {
      name: 'ООО УК "ЖКХ ДЕРБЫШКИ"'
    },
    position: [55.798372, 49.109653]
  },
  {
    id: 474,
    address: " Петербургская, 57",
    participant: {
      name: 'ДЦ "Экият"'
    },
    position: [55.7798, 49.138061]
  },
  {
    id: 399,
    address: "Ямашева 56",
    participant: {
      name: "МакДак"
    },
    position: [55.826742, 49.155025]
  },
  {
    id: 598,
    address: "Глазунова 8",
    participant: {
      name: "ООО ПростоДом"
    },
    position: [55.733645, 49.14532]
  },
  {
    id: 586,
    address: "Зеленодольск, парк Авангард",
    participant: {
      name: "Парк Авангард"
    },
    position: [55.848135, 48.507141]
  }
];

///////////////////////////////TYPES//////////////////////////////////

type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

type Competition = {
  name: Scalars["String"];
};

type Photo = {
  id: Scalars["Int"];
  address: Scalars["String"];
};

export type FakeRequest = {
  address: Scalars["String"];
  comment?: Scalars["String"];
  competition: Competition;
  description?: Scalars["String"];
  id?: Scalars["Int"];
  participant: FakeParticipant;
  photos: Array<Photo>;
  state: Scalars["String"];
  position?: Array<Scalars["Int"]>;
};

type FakeParticipant = {
  name: Scalars["String"];
  request?: FakeRequest;
};

// "jest": {
//   "roots": [
//     "<rootDir>/src"
//   ],
//   "collectCoverageFrom": [
//     "src/**/*.{js,jsx,ts,tsx}",
//     "!src/**/*.d.ts"
//   ],
//   "setupFiles": [
//     "react-app-polyfill/jsdom"
//   ],
//   "setupFilesAfterEnv": [
//     "<rootDir>/src/setupTests.ts",
//     "./node_modules/jest-enzyme/lib/index.js"
//   ],
//   "testMatch": [
//     "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//     "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
//   ],
//   "preset": "ts-jest",
//   "testEnvironment": "jest-environment-jsdom-fourteen",
//   "transform": {
//     "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//     "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
//     "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
//   },
//   "transformIgnorePatterns": [
//     "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
//     "^.+\\.module\\.(css|sass|scss)$"
//   ],
//   "modulePaths": [],
//   "moduleNameMapper": {
//     "@/(.*)$": "<rootDir>/src/$1",
//     "^react-native$": "react-native-web",
//     "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
//   },
//   "moduleFileExtensions": [
//     "web.js",
//     "js",
//     "web.ts",
//     "svg",
//     "ts",
//     "web.tsx",
//     "tsx",
//     "json",
//     "web.jsx",
//     "jsx",
//     "node"
//   ],
//   "watchPlugins": [
//     "jest-watch-typeahead/filename",
//     "jest-watch-typeahead/testname"
//   ],
//   "snapshotSerializers": [
//     "enzyme-to-json/serializer"
//   ],
//   "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.ts"
// },
