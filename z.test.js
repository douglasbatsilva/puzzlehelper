const fs = require("fs");

const resourceList = [
  {
    _id: "4SrLSr8Verju379YIr9MB",
    type: "Scripts",
    name: "Anti DevTools By Pappako",
    previewUrl:
      "https://drive.google.com/file/d/1N09ibFfjGNUrEVTGEa9_1lY1we7XNgHY/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1AEzu-bmw-JFVLvw2JdeUpknjsTNdJBwp/view?usp=sharing",
  },
  {
    _id: "mtGrTyDGiVA2Aja34yonf",
    type: "Scripts",
    name: "Assalto ao Banco Central v2",
    previewUrl:
      "https://drive.google.com/file/d/14N_5_1_yNGXBDIN09tRRQX4YXn2r3eRh/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1dB7Sqz4y7568jX1Y1bs_HxqVubMesW8m/view?usp=sharing",
  },
  {
    _id: "-a0RyaIzKln6bWicjnclY",
    type: "Scripts",
    name: "vb-banking",
    previewUrl:
      "https://drive.google.com/file/d/1-SLFQ1XNPKxDb8slMXW9GdEY-UUt_ocQ/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1-PUHUxL_oneqRnlDsfzoIxI3x2uhb2GY/view?usp=sharing",
  },
  {
    _id: "UZK74WYoAfgPccGbzozdD",
    type: "Scripts",
    name: "Stopzera Tattoos",
    previewUrl:
      "https://drive.google.com/file/d/1-G_n7MjXzml0fZ8TUV6BVVZM7tkvBGUq/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1-K8cRFONvjyZQmc_cFJk-bbuBwYnMWWV/view?usp=sharing",
  },
  {
    _id: "UhYSsuh_AmFE3scKlym0E",
    type: "Scripts",
    name: "Finalizar ( Sistema )",
    previewUrl:
      "https://drive.google.com/file/d/179q4TjG6_6rAMrRddFpSMmMMbN6Tx6nC/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/175MKW0c3IW2lPin_A52SdVUzWOyEIBrZ/view?usp=sharing",
  },
  {
    _id: "1J8Nlc-J6wHpH-kJWxyKV",
    type: "Scripts",
    name: "Emprego - Sexshop",
    previewUrl: null,
    downloadUrl:
      "https://drive.google.com/file/d/1T2HmirNsNJy2PvbaeTztc8t5rBtGdd_v/view?usp=sharing",
  },
  {
    _id: "UItnSL0JYfaNOedEJHxh1",
    type: "Scripts",
    name: "VehMenu",
    previewUrl:
      "https://drive.google.com/file/d/1wEvRaJFQC5vvFfYCq6F5Q2jm6lppECdu/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1PRl27UnXBua5PruplcOTNbHnHwfrsbOM/view?usp=sharing",
  },
  {
    _id: "GKE9U46lZ78ODr6zNWAVg",
    type: "Scripts",
    name: "Dope Nuis TattooShop",
    previewUrl:
      "https://drive.google.com/file/d/1AzbZOd-2gUbTxHbosocrFF764yFTpsFD/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/17z-o6yPyCCm30AoDS4v8_tU1KFrlAfX5/view?usp=sharing",
  },
  {
    _id: "0NVO6PmCFlbkGMdHIFJ8x",
    type: "Bases",
    name: "Allstar2",
    previewUrl: null,
    downloadUrl:
      "https://drive.google.com/file/d/1HW8uZBTi7Qke3mLPMHqRx4u5N7svhIus/view?usp=sharing",
  },
  {
    _id: "YFDzV8Q1BFgC4c12-Qf0G",
    type: "Bases",
    name: "Trinity",
    previewUrl: null,
    downloadUrl:
      "https://drive.google.com/file/d/1crLI6lWx9FHo1rE_hAnN2TbTSgUyQwt6/view?usp=sharing",
  },
  {
    _id: "X73sZocbm-ywo1ytNDLbg",
    type: "Bases",
    name: "Trinity ( Imagens )",
    previewUrl: null,
    downloadUrl:
      "https://drive.google.com/file/d/10LRXcc07TaDK9mTF38XvuSGRc_gdSYyC/view?usp=sharing",
  },
  {
    _id: "L6OxHkYI2T5SZk0RQhCfa",
    type: "Bases",
    name: "Scarlate v3",
    previewUrl: null,
    downloadUrl:
      "https://drive.google.com/file/d/1mSEm-lXviL9r1NicG-3EbdH7SD5R6sco/view?usp=sharing",
  },
  {
    _id: "QrR58KSGFcHVYQ-99T1Hk",
    type: "Bases",
    name: "Cidade Baixa",
    previewUrl: null,
    downloadUrl:
      "https://drive.google.com/file/d/1ChppKRKw1YFCCFH0tOxDzB9WXm_XgY3E/view?usp=sharing",
  },
  {
    _id: "xQ8P8gp0WS5qbqAQqxhIr",
    type: "Bases",
    name: "Zirix v2",
    previewUrl: null,
    downloadUrl: "https://github.com/Ziraflix/vrpex-zirix-v2",
  },
  {
    _id: "mn5d014mWCWE46QlUEbEt",
    type: "Mapas",
    name: "Mansão Brofx Villa 01",
    previewUrl:
      "https://drive.google.com/file/d/1BXuUD6crh29s6wdKGZKK-0o6XE5CO8Vf/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/17HOCXrO5yFHOXr4zDqJRL_g88Ekn5fdZ/view?usp=sharing",
  },
  {
    _id: "rpwuUy8-AimUJJZzyisPd",
    type: "Mapas",
    name: "Mansão Brofx Villa 02",
    previewUrl:
      "https://drive.google.com/file/d/1ci9pbRqJN4OoufJdOsb0igKo9_16Ivon/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/19MknS82UrVn-4Ua4fXthbpJ7_jENrP8N/view?usp=sharing",
  },
  {
    _id: "Y7REBuLg-vfQqHgwuWP05",
    type: "Mapas",
    name: "Mansão Brofx Villa 03",
    previewUrl:
      "https://drive.google.com/file/d/1RmweJLI8aHtN4rwDwetUN0gN6foVd_WA/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1QRnCR7p7otpAQnsffmGqKbXXZk-PQ4Pb/view?usp=sharing",
  },
  {
    _id: "r_xh97pQxoEffRoP5jl7G",
    type: "Mapas",
    name: "Mansão Brofx Villa 04",
    previewUrl:
      "https://drive.google.com/file/d/1hEC3PBD0JwFQub09JwtC5zcerjO5LymW/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1DnL7f02LvVOmA2gQ2Pa99aR_YrBL-RlH/view?usp=sharing",
  },
  {
    _id: "ptUNV-_NMJ7Eg7Cj0xHic",
    type: "Mapas",
    name: "Mansão Brofx Villa 05",
    previewUrl:
      "https://drive.google.com/file/d/1WmZzV5XV3olza-JBNB4vSns1jTZV0oGP/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1X3WaYgfROn0G9iSCQjTbqMBzIUPdA9aO/view?usp=sharing",
  },
  {
    _id: "xAvlb9UMr60yLN2LPNmyw",
    type: "Mapas",
    name: "Mansão Brofx Villa 06",
    previewUrl:
      "https://drive.google.com/file/d/1yED_iSA-ArhPMBLhErf5naAyvLR4qiSQ/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1WPrOcQ9EgFjsJHf4URNCgApqX_Y_gihH/view?usp=sharing",
  },
  {
    _id: "yWed0tOUvocDTVetJfsEQ",
    type: "Mapas",
    name: "Mansão Brofx Villa 07",
    previewUrl:
      "https://drive.google.com/file/d/1eA2gi8aTAmDsE2CeJVp9ijLboo2wA6SX/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1pJpmPWmTnlEJmT35UpW7RWIrn9Ho-NBn/view?usp=sharing",
  },
  {
    _id: "Zxd9FajDZDNELqdGlnlbk",
    type: "Mapas",
    name: "Mansão Brofx Villa 08",
    previewUrl:
      "https://drive.google.com/file/d/1WUPgaI3bAD9JLtmW3B23CiWoSXjRBE6a/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1ThIFJ7H2E54vHS05t48dMg-h-bkznUkD/view?usp=sharing",
  },
  {
    _id: "M5AEFB3q7un0DfIS3Wzk8",
    type: "Mapas",
    name: "Mansão Brofx Villa 09",
    previewUrl:
      "https://drive.google.com/file/d/1ELG3wlQP-nPwKKRwvPw2FSr-dIFduqiB/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/18Fh5vV1_1SJB-NDBcU9f3XUQntDS-haT/view?usp=sharing",
  },
  {
    _id: "XP_sUw8ObxxpitEY90T_F",
    type: "Mapas",
    name: "Mansão Brofx Villa 10",
    previewUrl:
      "https://drive.google.com/file/d/1ZbV5ciJsOlRPfclu6GGxzh8mwfuY6sVE/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1wI1Ow_Q9_5vGWCIQN2bdb-X3kWwMigQB/view?usp=sharing",
  },
  {
    _id: "ZxMwtKGsw8kTOOUnKZ4Fw",
    type: "Mapas",
    name: "Skorpan - Labotório Cocaína",
    previewUrl: "https://imgur.com/a/GXATWTJ",
    downloadUrl:
      "https://drive.google.com/file/d/15rJ6LyYpSZr5c3KrAwSMV4od3kRrMf9P/view?usp=sharing",
  },
  {
    _id: "gRg4fK0pb8ja82bLilGYX",
    type: "Scripts",
    name: "Spotify",
    previewUrl:
      "https://drive.google.com/file/d/1FSZAPRy2cGNu_ilto-FF6-lVoVdbKOhn/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1t-KEnSgq1mkd2jR5mDYKcKduijwkptUe/view?usp=sharing",
  },
  {
    _id: "lKl2l01qIfXBQDDPJiZao",
    type: "Scripts",
    name: "Skinshop",
    previewUrl:
      "https://drive.google.com/file/d/1NyZcWo0FPQ-KFSCAp1Ow8tPqgljSSRTJ/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1JyOxobUBCaRCUuZLD6vq6SB0ULkSoyB3/view?usp=sharing",
  },
  {
    _id: "LSLnC4icaZ9mCPBqKnG1n",
    type: "Scripts",
    name: "ns_blitz",
    previewUrl:
      "https://drive.google.com/file/d/158zkT3pBlF9NefhBAR9OpPWGt9cDVvgv/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/11c5S9K1utlBUzyPwxpknmT32H57VOT2n/view?usp=sharing",
  },
  {
    _id: "T4qml0KX1kYJlykMO3TzW",
    type: "Scripts",
    name: "Pacote Invetário Bigode",
    previewUrl:
      "https://drive.google.com/file/d/1GmQ27dGt4_cyqhjFDdaauEGhKLKnG6Du/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1GkpByKNhyBKJRB47zBm_dJayYnOK1BLP/view?usp=sharing",
  },
  {
    _id: "KXppnUcJm_UBDaxMSBeIZ",
    type: "Mapas",
    name: "Parque de Familia",
    previewUrl:
      "https://drive.google.com/file/d/1KaodFIrtryrqeQS0Xu0xSr3FaGWUgy-n/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/file/d/1Pf4dP84uNE3ZmyNFmPZWjpfogveyyEvp/view?usp=sharing",
  },
];

// saveResourceListOnFile(resourceList) {
//   let resources = [];

//   const scriptsList = resourceList.filter((r) => r.type === "Scripts");
//   const mapsList = resourceList.filter((r) => r.type === "Mapas");
//   const baseList = resourceList.filter((re) => re.type === "Bases");

//   const sanitizedScripts = scriptsList.map((r) => r.name);
//   resources.push("»»»»»» Scripts »»»»»»",sanitizedScripts.sort().join("\n- "));

//   const sanitizedMaps = mapsList.map((r) => r.name);
//   resources.push("\n»»»»»» Mapas »»»»»»»»",sanitizedMaps.sort().join("\n- "));

//   const sanitizedBases = baseList.map((r) => r.name);
//   resources.push("\n»»»»»» Bases »»»»»»»»",sanitizedBases.sort().join("\n- "));

//   const JoinToFile = resources.join("\n- ");

//   fs.writeFile("resources.txt", JoinToFile, function (err) {
//     if (err) return console.log(err);
//   });
// }

const teste1 = () => {
  const teste = [];
  const types = resourceList.map((r) => r.type);

  const typesUnique = types.filter((item, pos, ary) => {
    return ary.indexOf(item) === pos;
  });

  typesUnique.forEach(element => {
    teste.push(" ")
    teste.push(dividirResources(resourceList, element));
  });
  const flatTeste = teste.flat();
  const JoinToFile = flatTeste.join("\n- ");
  console.log(JoinToFile);
};

const dividirResources = (resourceList, type) => {
  let resources = [];

  const list = resourceList.filter((r) => r.type === type);

  const sanitizedList = list.map((r) => r.name);
  resources.push("»»»»»»" + type + "»»»»»»" , sanitizedList.sort().join("\n- "));

  return resources;
};

console.log(teste1());
