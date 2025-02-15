// Update this file any time a new contract has been deployed
type AlloSettingsParams = {
  alloSettingsContract: string;
  newProtocolFeePercentage: number;
  newProtocolTreasury: string;
};

type DeployParams = Record<string, AlloSettingsParams>;

export const AlloSettingsParams: DeployParams = {
  mainnet: {
    alloSettingsContract: "0x9fcC854b145Bd3640a01c49Aa2Cfa725Ed0B4210",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "",
  },
  goerli: {
    alloSettingsContract: "0x8eD654fcF387597B2960297244304A104A3b367D",
    newProtocolFeePercentage: 5000, // 5% == 5_000
    newProtocolTreasury: "0xB8cEF765721A6da910f14Be93e7684e9a3714123",
  },
  "optimism-mainnet": {
    alloSettingsContract: "0xD092e383478Bc565655331f0B88f758eeFa2eEB7",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "",
  },
  "fantom-mainnet": {
    alloSettingsContract: "0xFa6464A1CfA5FC5319C1112Bde7D8AC02A2AB743",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "",
  },
  "fantom-testnet": {
    alloSettingsContract: "0xc6B90f42Ea395898B4C1B33e5C8Fa351829BCD90",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "",
  },
  "pgn-mainnet": {
    alloSettingsContract: "0xc6B90f42Ea395898B4C1B33e5C8Fa351829BCD90",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "0x3e364ebc92AA057C10597EF3D30C0201d84F03E8",
  },
  arbitrumGoerli: {
    alloSettingsContract: "0x64ab6F2E11dF8B3Be5c8838eDe3951AC928daE9C",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "0xB8cEF765721A6da910f14Be93e7684e9a3714123",
  },
  arbitrumOne: {
    alloSettingsContract: "0xD0e19DBF9b896199F35Df255A1bf8dB3C787531c",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "0xC60fCf320fC8FE79b3f2F7a1B5E04f31dFC13DbD",
  },
  "avalanche-mainnet": {
    alloSettingsContract: "0xc6B90f42Ea395898B4C1B33e5C8Fa351829BCD90",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "0x42c307aFD2826d2B98FF4EFfE7D8070F76FfA116",
  },
  "fuji-testnet": {
    alloSettingsContract: "0xdf25423c9ec15347197Aa5D3a41c2ebE27587D59",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "0xB8cEF765721A6da910f14Be93e7684e9a3714123",
  },
  "zksync-testnet": {
    alloSettingsContract: "0x0FD600678475C03f28baE59A2d55f7a911383e2B",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "0x0000000000000000000000000000000000000000",
  },
  "zksync-mainnet": {
    alloSettingsContract: "",
    newProtocolFeePercentage: 0,
    newProtocolTreasury: "",
  },
};

