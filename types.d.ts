type COIN = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: any[];
  numberOfMarkets: number;
  numberOfExchanges: number;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline?: any[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  supply: {
    confirmed: boolean;
    supplyAt: number;
    max: string;
    total: string;
    circulating: string;
  };
  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  hasContent: boolean;
  notices: null;
  tags: any[];
};

interface News {
  value: {
    _type: string;
    name: string;
    url: string;
    image: {
      _type: string;
      thumbnail: {
        _type: string;
        contentUrl: string;
        width: number;
        height: number;
      };
    };
    description: string;
    provider: {
      _type: string;
      name: string;
      image: {
        _type: string;
        thumbnail: {
          _type: string;
          contentUrl: string;
        };
      };
      datePublished: string;
      category: string;
    }[];
  }[];
}
type Stats = {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
  btcDominance: number;
};

type Coins = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline?: [any];

  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
};
interface CoinHistory {
  change: string;
  history: {
    price: string;
    timestamp: number;
  }[];
}

type ALLData = {
  data: {
    Stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    Coins: {
      uuid: string;
      symbol: string;
      name: string;
      color: string;
      iconUrl: string;
      marketCap: string;
      price: string;
      listedAt: number;
      tier: number;
      change: string;
      rank: number;
      sparkline?: [any];
      lowVolume: boolean;
      coinrankingUrl: string;
      "24hVolume": string;
      btcPrice: string;
    };
  };
};
