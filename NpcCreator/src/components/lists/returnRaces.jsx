export default function returnRaces() {
  const races = {
    metatypes: {
      human: {
        metatype: "Human",
        body: "1/6",
        agility: "1/6",
        reaction: "1/6",
        strength: "1/6",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/6",
        edge: "2/7",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "None",
      },
      elf: {
        metatype: "Elf",
        body: "1/6",
        agility: "2/7",
        reaction: "1/6",
        strength: "1/6",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "3/8",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Low-Light Vision",
      },
      dwarf: {
        metatype: "Dwarf",
        body: "3/8",
        agility: "1/6",
        reaction: "1/5",
        strength: "3/8",
        willpower: "2/7",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Thermographic Vision, +2 dice for pathogen and toxin resistance, +20% increased Lifestyle cost",
      },
      ork: {
        metatype: "Ork",
        body: "4/9",
        agility: "1/6",
        reaction: "1/6",
        strength: "3/8",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/5",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Low-Light Vision",
      },
      troll: {
        metatype: "Troll",
        body: "5/10",
        agility: "1/5",
        reaction: "1/6",
        strength: "5/10",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/5",
        charisma: "1/4",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Thermographic Vision, +1 Reach, +1 dermal armor, double Lifestyle costs",
      },
    },
    metasapients: {
      centaur: {
        metatype: "Centaur",
        body: "3/8",
        agility: "1/6",
        reaction: "1/6",
        strength: "3/8",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/5",
        charisma: "1/5",
        edge: "1/5",
        magic: "1",
        racialTraits:
          "Low-Light Vision, Thermographic Vision, Magic Sense, Natural Weapon (Kick: DV (STR + 2)P, AP +1, +1 Reach), Search; Movement (x1/x4/+4)",
      },
      naga: {
        metatype: "Naga",
        body: "3/8",
        agility: "1/4",
        reaction: "2/7",
        strength: "4/9",
        willpower: "2/7",
        logic: "1/6",
        intuition: "1/6",
        charisma: "2/7",
        edge: "1/5",
        magic: "1",
        racialTraits:
          "Armor 8, Cold-Blooded, Dual Natured, Guard, Natural Weapon (Bite: DV (STR + 1)P, AP –2, Reach –1), Venom",
      },
      pixie: {
        metatype: "Pixie",
        body: "1/2",
        agility: "3/8",
        reaction: "3/8",
        strength: "1/2",
        willpower: "3/8",
        logic: "2/7",
        intuition: "2/7",
        charisma: "3/8",
        edge: "2/7",
        magic: "1",
        racialTraits:
          "Astral Perception, Concealment (Self Only), Vanishing, Uneducated; Movement (x1/x2/+1; x2/x6/+2m flight)",
      },
      sasquatch: {
        metatype: "Sasquatch",
        body: "6/11",
        agility: "1/6",
        reaction: "1/6",
        strength: "5/10",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/6",
        magic: "1",
        racialTraits:
          "Dual Natured, Mimicry, Natural Weapon (Claws: DV (STR + 1)P, AP —, +1 Reach), Uneducated",
      },
    },
    metavariants: {
      gnome: {
        metatype: "Gnome",
        body: "1/4",
        agility: "2/7",
        reaction: "1/6",
        strength: "1/4",
        willpower: "2/7",
        logic: "2/7",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Arcane Arrester (2), Neoteny, Thermographic Vision",
      },
      hanuman: {
        metatype: "Hanuman",
        body: "1/6",
        agility: "2/7",
        reaction: "1/6",
        strength: "2/7",
        willpower: "1/6",
        logic: "1/5",
        intuition: "2/7",
        charisma: "1/5",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Low-Light Vision, Monkey Paws, Prehensile Tail, Unusual Hair (Body)",
      },
      koborokuru: {
        metatype: "Koborokuru",
        body: "2/7",
        agility: "1/6",
        reaction: "1/6",
        strength: "2/7",
        willpower: "2/7",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Celerity, Resistance to Pathogens/Toxins, Thermographic Vision, Unusual Hair",
      },
      menehune: {
        metatype: "Menehune",
        body: "2/7",
        agility: "2/7",
        reaction: "1/5",
        strength: "2/7",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Resistance to Pathogens/Toxins, Thermographic Vision, Underwater Vision",
      },
      dryad: {
        metatype: "Dryad",
        body: "1/6",
        agility: "2/7",
        reaction: "1/6",
        strength: "1/5",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "3/8",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Glamour, Low-Light Vision, Symbiosis",
      },
      nocturna: {
        metatype: "Nocturna",
        body: "1/5",
        agility: "3/8",
        reaction: "1/6",
        strength: "1/6",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "2/7",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Allergy (Sunlight, Mild), Low-Light Vision, Keen-eared, Nocturnal, Unusual Hair (Colored Fur)",
      },
      wakyambi: {
        metatype: "Wakyambi",
        body: "1/6",
        agility: "2/7",
        reaction: "1/6",
        strength: "1/6",
        willpower: "1/6",
        logic: "1/5",
        intuition: "2/7",
        charisma: "1/6",
        edge: "2/7",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Celerity, Elongated Limbs, Low-Light Vision",
      },
      xapiriThepe: {
        metatype: "Xapiri Thëpë",
        body: "1/6",
        agility: "2/7",
        reaction: "1/6",
        strength: "1/6",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/6",
        charisma: "2/7",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Allergy (Pollutants, Mild), Low-Light Vision, Photometabolism",
      },
      nartaki: {
        metatype: "Nartaki",
        body: "1/6",
        agility: "1/6",
        reaction: "1/6",
        strength: "1/6",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/6",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Shiva Arms, Striking Skin Pigmentation",
      },
      hobgoblin: {
        metatype: "Hobgoblin",
        body: "1/6",
        agility: "1/6",
        reaction: "1/6",
        strength: "2/7",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/6",
        charisma: "2/7",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Fangs, Low-Light Vision, Extravagant Eyes, Poor Self Control (Vindictive)",
      },
      ogre: {
        metatype: "Ogre",
        body: "4/9",
        agility: "1/6",
        reaction: "1/5",
        strength: "3/8",
        willpower: "2/7",
        logic: "1/5",
        intuition: "1/6",
        charisma: "1/4",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Low-Light Vision, Ogre Stomach",
      },
      oni: {
        metatype: "Oni",
        body: "3/8",
        agility: "2/7",
        reaction: "1/6",
        strength: "2/7",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/6",
        charisma: "2/7",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Low-Light Vision, Striking Skin Pigmentation",
      },
      satyr: {
        metatype: "Satyr",
        body: "2/7",
        agility: "1/6",
        reaction: "2/7",
        strength: "2/7",
        willpower: "1/6",
        logic: "1/6",
        intuition: "1/6",
        charisma: "1/5",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Low-Light Vision, Satyr Legs",
      },
      cyclops: {
        metatype: "Cyclops",
        body: "5/10",
        agility: "1/5",
        reaction: "1/6",
        strength: "6/11",
        willpower: "1/6",
        logic: "1/4",
        intuition: "1/5",
        charisma: "1/4",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Cyclopean Eye, +1 Reach",
      },
      fomorian: {
        metatype: "Fomorian",
        body: "4/9",
        agility: "1/5",
        reaction: "1/6",
        strength: "5/10",
        willpower: "1/5",
        logic: "1/4",
        intuition: "1/4",
        charisma: "1/5",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Arcane Arrester (1), Thermographic Vision, +1 Reach",
      },
      giant: {
        metatype: "Giant",
        body: "5/10",
        agility: "1/5",
        reaction: "1/5",
        strength: "5/10",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/5",
        charisma: "1/5",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits:
          "Dermal Alteration (Bark), Thermographic Vision, +1 Reach",
      },
      minotaur: {
        metatype: "Minotaur",
        body: "6/11",
        agility: "1/5",
        reaction: "1/6",
        strength: "5/10",
        willpower: "1/6",
        logic: "1/5",
        intuition: "1/6",
        charisma: "1/4",
        edge: "1/6",
        essence: "6",
        initiative: "REA+INT",
        racialTraits: "Goring Horns, Thermographic Vision, +1 Reach",
      },
    },
    infected: {
      bandersnatch: {
        metatype: "Bandersnatch",
        body: "6/12",
        agility: "1/6",
        reaction: "2/7",
        strength: "5/12",
        willpower: "1/8",
        logic: "1/5",
        intuition: "1/8",
        charisma: "1/4",
      },
      banshee: {
        metatype: "Banshee",
        body: "1/7",
        agility: "2/7",
        reaction: "1/8",
        strength: "1/7",
        willpower: "1/7",
        logic: "1/6",
        intuition: "1/7",
        charisma: "1/9",
      },
      dzoo_noo_qua: {
        metatype: "Dzoo-noo-qua",
        body: "5/12",
        agility: "1/5",
        reaction: "1/8",
        strength: "5/12",
        willpower: "1/7",
        logic: "1/5",
        intuition: "1/7",
        charisma: "1/4",
      },
      fomóraig: {
        metatype: "Fomóraig",
        body: "5/13",
        agility: "1/5",
        reaction: "1/7",
        strength: "5/13",
        willpower: "1/4",
        logic: "1/4",
        intuition: "1/6",
        charisma: "1/4",
      },
      ghoul_dwarf: {
        metatype: "Ghoul (Dwarf)",
        body: "3/12",
        agility: "1/6",
        reaction: "1/7",
        strength: "3/11",
        willpower: "2/9",
        logic: "1/5",
        intuition: "1/7",
        charisma: "1/4",
      },
      ghoul_elf: {
        metatype: "Ghoul (Elf)",
        body: "1/10",
        agility: "2/7",
        reaction: "1/8",
        strength: "1/9",
        willpower: "1/8",
        logic: "1/5",
        intuition: "1/7",
        charisma: "1/6",
      },
      ghoul_human: {
        metatype: "Ghoul (Human)",
        body: "1/10",
        agility: "1/6",
        reaction: "1/8",
        strength: "1/9",
        willpower: "1/8",
        logic: "1/5",
        intuition: "1/7",
        charisma: "1/4",
      },
      ghoul_ork: {
        metatype: "Ghoul (Ork)",
        body: "4/13",
        agility: "1/6",
        reaction: "1/8",
        strength: "3/11",
        willpower: "1/8",
        logic: "1/4",
        intuition: "1/7",
        charisma: "1/3",
      },
      ghoul_sasquatch: {
        metatype: "Ghoul (Sasquatch)",
        body: "6/15",
        agility: "1/6",
        reaction: "1/9",
        strength: "5/13",
        willpower: "1/8",
        logic: "1/5",
        intuition: "3/9",
        charisma: "1/4",
      },
      ghoul_troll: {
        metatype: "Ghoul (Troll)",
        body: "5/14",
        agility: "1/5",
        reaction: "1/8",
        strength: "5/13",
        willpower: "1/8",
        logic: "1/4",
        intuition: "1/6",
        charisma: "1/2",
      },
      gnawer: {
        metatype: "Gnawer",
        body: "3/9",
        agility: "1/6",
        reaction: "1/7",
        strength: "3/10",
        willpower: "2/8",
        logic: "1/5",
        intuition: "1/8",
        charisma: "1/5",
      },
      goblin: {
        metatype: "Goblin",
        body: "3/9",
        agility: "1/6",
        reaction: "1/7",
        strength: "3/9",
        willpower: "2/8",
        logic: "1/4",
        intuition: "1/8",
        charisma: "1/5",
      },
      grendel: {
        metatype: "Grendel",
        body: "4/11",
        agility: "1/6",
        reaction: "1/7",
        strength: "3/11",
        willpower: "1/7",
        logic: "1/4",
        intuition: "1/7",
        charisma: "1/4",
      },
      harvester: {
        metatype: "Harvester",
        body: "1/8",
        agility: "2/7",
        reaction: "1/9",
        strength: "1/9",
        willpower: "1/7",
        logic: "1/4",
        intuition: "1/8",
        charisma: "1/4",
      },
      loup_garou: {
        metatype: "Loup-garou",
        body: "1/7",
        agility: "1/6",
        reaction: "1/8",
        strength: "1/10",
        willpower: "1/7",
        logic: "1/5",
        intuition: "1/8",
        charisma: "1/4",
      },
      mutaqua: {
        metatype: "Mutaqua",
        body: "5/12",
        agility: "1/6",
        reaction: "1/8",
        strength: "5/13",
        willpower: "1/8",
        logic: "1/5",
        intuition: "1/7",
        charisma: "1/4",
      },
      nosferatu: {
        metatype: "Nosferatu",
        body: "1/7",
        agility: "1/7",
        reaction: "1/7",
        strength: "1/7",
        willpower: "1/8",
        logic: "1/8",
        intuition: "1/8",
        charisma: "1/8",
      },
      vampire: {
        metatype: "Vampire",
        body: "1/7",
        agility: "1/6",
        reaction: "1/8",
        strength: "1/7",
        willpower: "1/7",
        logic: "1/6",
        intuition: "1/7",
        charisma: "1/8",
      },
      wendigo: {
        metatype: "Wendigo",
        body: "4/11",
        agility: "1/6",
        reaction: "1/8",
        strength: "3/9",
        willpower: "1/7",
        logic: "1/6",
        intuition: "1/7",
        charisma: "1/7",
      },
    },
  };
  return races;
}
