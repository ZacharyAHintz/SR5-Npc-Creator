export default function returnAmmo() {
  const ammo = {
    ammunition: {
      APDS: {
        DV: "–",
        AP: "-4",

        Avail: "12F",
        Cost: "120¥",
        Source: "Core",
      },

      CapsuleRounds: {
        DV: "-4",
        AP: "+4",

        Avail: "2",
        Cost: "5¥",
        Source: "SR5:R&G",
      },
      ExplosiveRounds: {
        DV: "+1",
        AP: "-1",

        Avail: "9F",
        Cost: "80¥",
        Source: "Core",
      },
      EXExplosiveRounds: {
        DV: "+2",
        AP: "-1",

        Avail: "14F",
        Cost: "120¥",
        Source: "SR5:R&G",
      },

      FlechetteRounds: {
        DV: "+2",
        AP: "+5",

        Avail: "6R",
        Cost: "65¥",
        Source: "Core",
      },
      FrangibleRounds: {
        DV: "-1",
        AP: "+4",

        Avail: "2R",
        Cost: "10¥",
        Source: "SR5:R&G",
      },

      GelRounds: {
        DV: "-",
        AP: "+1",
        Modifiers: "stun",
        Avail: "2R",
        Cost: "25¥",
        Source: "Core",
      },
      GyrojetAmmo: {
        DV: "-2",
        AP: "-5",
        Modifiers: "stun",
        Avail: "14R",
        Cost: "160¥",
        Source: "SR5:R&G",
      },
      HollowPoints: {
        DV: "+1",
        AP: "+2",

        Avail: "4F",
        Cost: "70¥",
        Source: "Core",
      },

      SticknShock: {
        DV: "-2",
        AP: "-5",
        Modifiers: "stun",
        Avail: "6R",
        Cost: "80¥",
        Source: "Core",
      },
    },
    ballisticProjectileConsumables: {
      BarbedHead: {
        DV: "+1",
        AP: "–",

        Avail: "5R",
        Cost: "10¥",
        Source: "SR5:R&G",
      },

      ExplosiveHead: {
        DV: "+2",
        AP: "-1",

        Avail: "9F",
        Cost: "15¥",
        Source: "SR5:R&G",
      },
      Hammerhead: {
        DV: "+1",
        AP: "-1",
        Modifiers: "stun",
        Avail: "5",
        Cost: "5¥",
        Source: "SR5:R&G",
      },

      MonoTip: {
        DV: "–",
        AP: "-2",

        Avail: "8R",
        Cost: "Rating×30¥",
        Source: "SR5:HT",
      },
      ScreamerHead: {
        DV: "+2",
        AP: "-2",
        Modifiers: "stun",
        Avail: "2",
        Cost: "5¥",
        Source: "SR5:R&G",
      },

      StaticShaft: {
        DV: "+4",
        AP: "–",
        Modifiers: "stun",
        Avail: "6R",
        Cost: "Rating×25¥",
        Source: "SR5:R&G",
      },
    },
    grenades: {
      FlashBang: {
        DV: "10S",
        AP: "-4",
        Blast: "10 m radius",
        Avail: "6R",
        Cost: "100¥",
        Source: "Core",
      },
      FlashPak: {
        DV: "Spec.",
        AP: "–",
        Blast: "Spec.",
        Avail: "4",
        Cost: "125¥",
        Source: "Core",
      },
      Fragmentation: {
        DV: "18P(f)",
        AP: "+5",
        Blast: "-1/m",
        Avail: "11F",
        Cost: "100¥",
        Source: "Core",
      },
      Gas: {
        DV: "Chemical",
        AP: "10 m radius",
        Blast: "Chemical+2",
        Avail: "Chemical+40¥",
        Cost: "Core",
      },
      HighExplosive: {
        DV: "16P",
        AP: "-2",
        Blast: "-2/m",
        Avail: "11F",
        Cost: "100¥",
        Source: "Core",
      },
      PaintGrenade: {
        DV: "–",
        AP: "–",
        Blast: "-2/m",
        Avail: "8R",
        Cost: "100¥",
        Source: "SR5:R&G",
      },
      Smoke: {
        DV: "–",
        AP: "–",
        Blast: "10 m radius",
        Avail: "4R",
        Cost: "40¥",
        Source: "Core",
      },
      ThermalSmoke: {
        DV: "–",
        AP: "–",
        Blast: "10 m radius",
        Avail: "6R",
        Cost: "40¥",
        Source: "Core",
      },
    },
    rocketsMissiles: {
      AntiVehicleRocket: {
        DV: "24P",
        AP: "-4 / -10",
        Blast: "-4/m",
        Avail: "18F",
        Cost: "2,800¥",
        Source: "Core",
      },
      FragmentationRocket: {
        DV: "23P(f)",
        AP: "+5",
        Blast: "-1/m",
        Avail: "12F",
        Cost: "2,000¥",
        Source: "Core",
      },
      HighExplosiveRocket: {
        DV: "21P",
        AP: "-2",
        Blast: "-2/m",
        Avail: "18F",
        Cost: "2,100¥",
        Source: "Core",
      },
      Missile: {
        DV: "Rocket",
        AP: "+4",
        Blast: "+Sensor rating",
        Avail: "×500¥",
        Cost: "Core",
      },
    },
  };
  return ammo;
}
