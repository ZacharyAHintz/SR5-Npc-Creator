export default function SpiritList() {
  const spirits = {
    basic: {
      air: {
        type: "Basic",
        element: "Air",
        b: "F-2",
        a: "F+3",
        r: "F+4",
        s: "F-3",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+4+2D6",
        source: "Core",
      },
      beasts: {
        type: "Basic",
        element: "Beasts",
        b: "F+2",
        a: "F+1",
        r: "F",
        s: "F+2",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "Core",
      },
      earth: {
        type: "Basic",
        element: "Earth",
        b: "F+4",
        a: "F-2",
        r: "F-1",
        s: "F+4",
        w: "F",
        l: "F-1",
        i: "F",
        c: "F",
        init: "(F*2)-1+2D6",
        source: "Core",
      },
      fire: {
        type: "Basic",
        element: "Fire",
        b: "F+1",
        a: "F+2",
        r: "F+3",
        s: "F-2",
        w: "F",
        l: "F",
        i: "F+1",
        c: "F",
        init: "(F*2)+3+2D6",
        source: "Core",
      },
      guardian: {
        type: "Basic",
        element: "Guardian",
        b: "F+1",
        a: "F+2",
        r: "F+3",
        s: "F+2",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+1+2D6",
        source: "SR5:SG",
      },
      guidance: {
        type: "Basic",
        element: "Guidance",
        b: "F+3",
        a: "F-1",
        r: "F+2",
        s: "F+1",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
      man: {
        type: "Basic",
        element: "Man",
        b: "F+1",
        a: "F",
        r: "F+2",
        s: "F-2",
        w: "F",
        l: "F",
        i: "F+1",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "Core",
      },
      plant: {
        type: "Basic",
        element: "Plant",
        b: "F+2",
        a: "F-1",
        r: "F",
        s: "F+1",
        w: "F",
        l: "F-1",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
      task: {
        type: "Basic",
        element: "Task",
        b: "F",
        a: "F",
        r: "F+2",
        s: "F+2",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
      water: {
        type: "Basic",
        element: "Water",
        b: "F",
        a: "F+1",
        r: "F+2",
        s: "F",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "Core",
      },
    },
    toxic: {
      air: {
        type: "Toxic",
        element: "Air",
        b: "F-2",
        a: "F+3",
        r: "F+4",
        s: "F-3",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+4+2D6",
        source: "SR5:SG",
      },
      beasts: {
        type: "Toxic",
        element: "Beasts",
        b: "F+2",
        a: "F+1",
        r: "F",
        s: "F+2",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
      earth: {
        type: "Toxic",
        element: "Earth",
        b: "F+4",
        a: "F-2",
        r: "F-1",
        s: "F+4",
        w: "F",
        l: "F-1",
        i: "F",
        c: "F",
        init: "(F*2)-1+2D6",
        source: "SR5:SG",
      },
      fire: {
        type: "Toxic",
        element: "Fire",
        b: "F+1",
        a: "F+2",
        r: "F+3",
        s: "F-2",
        w: "F",
        l: "F",
        i: "F+1",
        c: "F",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
      man: {
        type: "Toxic",
        element: "Man",
        b: "F",
        a: "F",
        r: "F+2",
        s: "F-2",
        w: "F",
        l: "F",
        i: "F+1",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
      water: {
        type: "Toxic",
        element: "Water",
        b: "F+1",
        a: "F+1",
        r: "F+2",
        s: "F",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
    },
    blood: {
      blood: {
        type: "Blood",
        element: "Blood",
        b: "F+2",
        a: "F+2",
        r: "F",
        s: "F+2",
        w: "F",
        l: "F-1",
        i: "F",
        c: "F",
        init: "(F*2)+2D6",
        source: "SR5:SG",
      },
    },
    shadow: {
      muse: {
        type: "Shadow",
        element: "Muse",
        b: "F",
        a: "F+3",
        r: "F+2",
        s: "F",
        w: "F+1",
        l: "F",
        i: "F+1",
        c: "F+2",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
      nightmare: {
        type: "Shadow",
        element: "Nightmare",
        b: "F",
        a: "F+3",
        r: "F+2",
        s: "F",
        w: "F+1",
        l: "F",
        i: "F+1",
        c: "F+2",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
      shade: {
        type: "Shadow",
        element: "Shade",
        b: "F",
        a: "F+3",
        r: "F+2",
        s: "F",
        w: "F+1",
        l: "F",
        i: "F+1",
        c: "F+2",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
      succubus: {
        type: "Shadow",
        element: "Succubus",
        b: "F",
        a: "F+3",
        r: "F+2",
        s: "F",
        w: "F+1",
        l: "F",
        i: "F+1",
        c: "F+2",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
      wraith: {
        type: "Shadow",
        element: "Wraith",
        b: "F",
        a: "F+3",
        r: "F+2",
        s: "F",
        w: "F+1",
        l: "F",
        i: "F+1",
        c: "F+2",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
    },
    shedim: {
      shedim: {
        type: "Shedim",
        element: "Shedim",
        b: "F",
        a: "F",
        r: "F+2",
        s: "F+1",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+1D6",
        source: "SR5:SG",
      },
      masterShedim: {
        type: "Shedim",
        element: "Master Shedim",
        b: "F",
        a: "F",
        r: "F+2",
        s: "F+1",
        w: "F",
        l: "F+1",
        i: "F+1",
        c: "F",
        init: "(F*2)+3+1D6",
        source: "SR5:SG",
      },
    },
    insect: {
      caretaker: {
        type: "Insect",
        element: "Caretaker",
        b: "F",
        a: "F+1",
        r: "F+1",
        s: "F",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+1+2D6",
        source: "SR5:SG",
      },
      nymph: {
        type: "Insect",
        element: "Nymph",
        b: "F-1",
        a: "F",
        r: "F+3",
        s: "F-1",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+3+2D6",
        source: "SR5:SG",
      },
      scout: {
        type: "Insect",
        element: "Scout",
        b: "F",
        a: "F+2",
        r: "F+2",
        s: "F",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2+2D6",
        source: "SR5:SG",
      },
      soldier: {
        type: "Insect",
        element: "Soldier",
        b: "F+3",
        a: "F+1",
        r: "F+1",
        s: "F+3",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+1+2D6",
        source: "SR5:SG",
      },
      worker: {
        type: "Insect",
        element: "Worker",
        b: "F",
        a: "F",
        r: "F",
        s: "F+1",
        w: "F",
        l: "F",
        i: "F",
        c: "F",
        init: "(F*2)+2D6",
        source: "SR5:SG",
      },
      queenMother: {
        type: "Insect",
        element: "Queen/Mother",
        b: "F+5",
        a: "F+3",
        r: "F+4",
        s: "F+5",
        w: "F+1",
        l: "F+1",
        i: "F+1",
        c: "F",
        init: "(F*2)+5+2D6",
        source: "SR5:SG",
      },
    },
  };
  return spirits;
}
