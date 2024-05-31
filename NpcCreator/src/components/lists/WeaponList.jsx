export default function WeaponList() {
  // weaponName: ["Weapon Name", accuracy, reach, modes, damage value, armor penitration]
  const weapons = {
    improvisedWeapons: {
      improvisedWeapon: ["Improvised Weapon", 3, 0, "-", strength + 1, 0],
    },

    clubs: {
      baton: ["Baton", 6, 1, "-", strength + 2, 0],
      combatAxe: ["Combat Axe", 4, 2, "-", strength + 5, -4],
      staff: ["Staff", 6, 2, "-", strength + 3, 0],
      stunBaton: ["Stun Baton", 5, 1, "-", "9S(e)", -5],
      sap: ["Sap", 6, 1, "-", strength + 1, -1],
      club: ["Club", 5, 2, "-", strength + 3, 0],
    },

    blades: {
      knife: ["Knife", 5, 0, "-", strength + 1, -1],
      katana: ["Katana", 7, 1, "-", strength + 3, -3],
      combatKnife: ["Combat Knife", 6, 0, "-", strength + 2, -3],
      vibroblade: ["Vibroblade", 6, 1, "-", strength + 2, -2],
      sword: ["Sword", 6, 1, "-", strength + 3, -2],
      tomahawk: ["Tomahawk", 5, 0, "-", strength + 2, -1],
    },

    exoticMeleeWeapons: {
      monofilamentWhip: ["Monofilament Whip", 7, 2, "-", "12P", -8],
      stunStaff: ["Stun Staff", 6, 2, "-", "9S(e)", -5],
    },

    throwingWeapons: {
      throwingKnife: ["Throwing Knife", 4, 0, "-", strength + 1, -1],
      shuriken: ["Shuriken", 4, 0, "-", strength, -1],
      spear: ["Spear", 5, 2, "-", strength + 3, -2],
      throwingAxe: ["Throwing Axe", 4, 0, "-", strength + 3, -1],
      throwingDagger: ["Throwing Dagger", 3, 0, "-", strength + 1, 0],
    },

    ballisticProjectiles: {
      bow: ["Bow", 6, 0, "-", strength + 2, -1],
      crossbow: ["Crossbow", 6, 0, SA, "7P", -3],
      slingshot: ["Slingshot", 5, 0, "-", strength, 0],
    },

    flamethrowers: {
      flamethrower: ["Flamethrower", 4, 0, SS, "10P", -6],
    },

    exoticRangedWeapons: {
      dartGun: ["Dart Gun", 4, 0, SA, "6P(f)", -1],
      netGun: ["Net Gun", 3, 0, SS, "4S", -6],
      squirtGun: ["Squirt Gun", 4, 0, SA, "6P(f)", 0],
    },

    tasers: {
      taser: ["Taser", 4, 0, SS, "9S(e)", -5],
      defianceEXShocker: ["Defiance EX Shocker", 4, 0, SS, "9S(e)", -5],
    },

    heavyPistols: {
      aresPredatorV: ["Ares Predator V", 5, 0, SA, "8P", -1],
      coltManhunter: ["Colt Manhunter", 5, 0, SA, "8P", -1],
      remingtonRoomsweeper: ["Remington Roomsweeper", 4, 0, SA, "6P", 0],
      rugerSuperWarhawk: ["Ruger Super Warhawk", 5, 0, SA, "9P", -2],
      browningUltraPower: ["Browning Ultra-Power", 5, 0, SA, "8P", -1],
    },

    lightPistols: {
      aresLightFire70: ["Ares Light Fire 70", 7, 0, SA, "6P", -1],
      fn5Seven: ["FN 5-7C", 6, 0, SA, "7P", -1],
      coltAmericaL36: ["Colt America L36", 6, 0, SA, "7P", 0],
      ceskaBlackScorpion: ["Ceská Black Scorpion", 6, 0, SA / BF, "7P", 0],
    },

    submachineGuns: {
      ingramSmartgun: ["Ingram Smartgun", 4, 0, BF / FA, "8P", -1],
      uziIV: ["Uzi IV", 4, 0, BF / FA, "7P", -1],
      aresSigma3: ["Ares Sigma 3", 5, 0, BF, "8P", -1],
      hk227: ["HK 227", 4, 0, BF / FA, "7P", -1],
    },

    holdOutPistols: {
      streetlineSpecial: ["Streetline Special", 4, 0, SS, "4P", 0],
      coltCobraTZ120: ["Colt Cobra TZ-120", 4, 0, SA, "5P", 0],
      fnRedline: ["FN Redline", 3, 0, SA, "4P", 0],
    },

    assaultRifles: {
      ak97: ["AK-97", 5, 0, SA / BF / FA, "10P", -2],
      aresAlpha: ["Ares Alpha", 5, 0, SA / BF / FA, "11P", -2],
      coltM23: ["Colt M23", 4, 0, SA / BF / FA, "10P", -2],
      fnHar: ["FN HAR", 5, 0, SA / BF / FA, "11P", -2],
      remington950: ["Remington 950", 5, 0, SA / BF, "10P", -3],
    },

    sniperRifles: {
      rangerArmsSM3: ["Ranger Arms SM-3", 7, 0, SS, "12P", -4],
      barrettModel121: ["Barrett Model 12", 1, 6, 0, SS, "14P", -6],
    },

    sportingRifles: {
      remington950: ["Remington 950", 6, 0, SS, "12P", -5],
      sportingRifle: ["Sporting Rifle", 5, 0, SA, "10P", -3],
    },

    shotguns: {
      remington870: ["Remington 870", 4, 0, SA, "10P", -1],
      mossbergAMCMDT: ["Mossberg AM-CMDT", 4, 0, SA, "9P", -1],
      roomsweeper: ["Roomsweeper", 4, 0, SA, "6P", -1],
      riotgun: ["Riot Gun", 4, 0, SA, "9P", -1],
    },

    machineGuns: {
      aresAlpha: ["Ares Alpha", 5, 0, SA / BF / FA, "11P", -2],
      vickersK: ["Vickers K", 5, 0, FA, "11P", -2],
    },

    exoticFirearms: {
      gyrojetPistol: ["Gyrojet Pistol", 4, 0, SA, "8P", -1],
      pantherCannon: ["Panther Cannon", 5, 0, SS, "17P", -6],
    },

    lasers: {
      weaponLaser: ["Weapon Laser", 6, 0, SS, "9P", -10],
      aresRedline: ["Ares Redline", 6, 0, SS, "10P", -10],
    },

    assaultCannons: {
      pantherXL: ["Panther XL", 5, 0, SS, "17P", -6],
      aztechnologyStriker: ["Aztechnology Striker", 4, 0, SS, "16P", -5],
    },
  };

  return guns;
}
