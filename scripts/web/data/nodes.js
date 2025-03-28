const allNodes = new vis.DataSet([
  {
    "id": 997,
    "label": "root",
    "acronym": "root",
    "name": "root",
    "color": "#FFFFFF",
    "level": 0,
    "title": "root (Level 0)"
  },
  {
    "id": 8,
    "label": "Basic cell groups and regions",
    "acronym": "grey",
    "name": "Basic cell groups and regions",
    "color": "#BFDAE3",
    "level": 1,
    "title": "grey (Level 1)"
  },
  {
    "id": 567,
    "label": "Cerebrum",
    "acronym": "CH",
    "name": "Cerebrum",
    "color": "#B0F0FF",
    "level": 2,
    "title": "CH (Level 2)"
  },
  {
    "id": 688,
    "label": "Cerebral cortex",
    "acronym": "CTX",
    "name": "Cerebral cortex",
    "color": "#B0FFB8",
    "level": 3,
    "title": "CTX (Level 3)"
  },
  {
    "id": 695,
    "label": "Cortical plate",
    "acronym": "CTXpl",
    "name": "Cortical plate",
    "color": "#70FF70",
    "level": 4,
    "title": "CTXpl (Level 4)"
  },
  {
    "id": 315,
    "label": "Isocortex",
    "acronym": "Isocortex",
    "name": "Isocortex",
    "color": "#70FF71",
    "level": 5,
    "title": "Isocortex (Level 5)"
  },
  {
    "id": 184,
    "label": "Frontal pole, cerebral cortex",
    "acronym": "FRP",
    "name": "Frontal pole, cerebral cortex",
    "color": "#268F45",
    "level": 8,
    "title": "FRP (Level 8)"
  },
  {
    "id": 68,
    "label": "Frontal pole, layer 1",
    "acronym": "FRP1",
    "name": "Frontal pole, layer 1",
    "color": "#268F45",
    "level": 11,
    "title": "FRP1 (Level 11)"
  },
  {
    "id": 667,
    "label": "Frontal pole, layer 2/3",
    "acronym": "FRP2/3",
    "name": "Frontal pole, layer 2/3",
    "color": "#268F45",
    "level": 11,
    "title": "FRP2/3 (Level 11)"
  },
  {
    "id": 526157192,
    "label": "Frontal pole, layer 5",
    "acronym": "FRP5",
    "name": "Frontal pole, layer 5",
    "color": "#268F45",
    "level": 11,
    "title": "FRP5 (Level 11)"
  },
  {
    "id": 526157196,
    "label": "Frontal pole, layer 6a",
    "acronym": "FRP6a",
    "name": "Frontal pole, layer 6a",
    "color": "#268F45",
    "level": 11,
    "title": "FRP6a (Level 11)"
  },
  {
    "id": 526322264,
    "label": "Frontal pole, layer 6b",
    "acronym": "FRP6b",
    "name": "Frontal pole, layer 6b",
    "color": "#268F45",
    "level": 11,
    "title": "FRP6b (Level 11)"
  },
  {
    "id": 500,
    "label": "Somatomotor areas",
    "acronym": "MO",
    "name": "Somatomotor areas",
    "color": "#1F9D5A",
    "level": 6,
    "title": "MO (Level 6)"
  },
  {
    "id": 107,
    "label": "Somatomotor areas, Layer 1",
    "acronym": "MO1",
    "name": "Somatomotor areas, Layer 1",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MO1 (Level 11)"
  },
  {
    "id": 219,
    "label": "Somatomotor areas, Layer 2/3",
    "acronym": "MO2/3",
    "name": "Somatomotor areas, Layer 2/3",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MO2/3 (Level 11)"
  },
  {
    "id": 299,
    "label": "Somatomotor areas, Layer 5",
    "acronym": "MO5",
    "name": "Somatomotor areas, Layer 5",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MO5 (Level 11)"
  },
  {
    "id": 644,
    "label": "Somatomotor areas, Layer 6a",
    "acronym": "MO6a",
    "name": "Somatomotor areas, Layer 6a",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MO6a (Level 11)"
  },
  {
    "id": 947,
    "label": "Somatomotor areas, Layer 6b",
    "acronym": "MO6b",
    "name": "Somatomotor areas, Layer 6b",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MO6b (Level 11)"
  },
  {
    "id": 985,
    "label": "Primary motor area",
    "acronym": "MOp",
    "name": "Primary motor area",
    "color": "#1F9D5A",
    "level": 8,
    "title": "MOp (Level 8)"
  },
  {
    "id": 320,
    "label": "Primary motor area, Layer 1",
    "acronym": "MOp1",
    "name": "Primary motor area, Layer 1",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOp1 (Level 11)"
  },
  {
    "id": 943,
    "label": "Primary motor area, Layer 2/3",
    "acronym": "MOp2/3",
    "name": "Primary motor area, Layer 2/3",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOp2/3 (Level 11)"
  },
  {
    "id": 648,
    "label": "Primary motor area, Layer 5",
    "acronym": "MOp5",
    "name": "Primary motor area, Layer 5",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOp5 (Level 11)"
  },
  {
    "id": 844,
    "label": "Primary motor area, Layer 6a",
    "acronym": "MOp6a",
    "name": "Primary motor area, Layer 6a",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOp6a (Level 11)"
  },
  {
    "id": 882,
    "label": "Primary motor area, Layer 6b",
    "acronym": "MOp6b",
    "name": "Primary motor area, Layer 6b",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOp6b (Level 11)"
  },
  {
    "id": 993,
    "label": "Secondary motor area",
    "acronym": "MOs",
    "name": "Secondary motor area",
    "color": "#1F9D5A",
    "level": 8,
    "title": "MOs (Level 8)"
  },
  {
    "id": 656,
    "label": "Secondary motor area, layer 1",
    "acronym": "MOs1",
    "name": "Secondary motor area, layer 1",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOs1 (Level 11)"
  },
  {
    "id": 962,
    "label": "Secondary motor area, layer 2/3",
    "acronym": "MOs2/3",
    "name": "Secondary motor area, layer 2/3",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOs2/3 (Level 11)"
  },
  {
    "id": 767,
    "label": "Secondary motor area, layer 5",
    "acronym": "MOs5",
    "name": "Secondary motor area, layer 5",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOs5 (Level 11)"
  },
  {
    "id": 1021,
    "label": "Secondary motor area, layer 6a",
    "acronym": "MOs6a",
    "name": "Secondary motor area, layer 6a",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOs6a (Level 11)"
  },
  {
    "id": 1085,
    "label": "Secondary motor area, layer 6b",
    "acronym": "MOs6b",
    "name": "Secondary motor area, layer 6b",
    "color": "#1F9D5A",
    "level": 11,
    "title": "MOs6b (Level 11)"
  },
  {
    "id": 453,
    "label": "Somatosensory areas",
    "acronym": "SS",
    "name": "Somatosensory areas",
    "color": "#188064",
    "level": 6,
    "title": "SS (Level 6)"
  },
  {
    "id": 12993,
    "label": "Somatosensory areas, layer 1",
    "acronym": "SS1",
    "name": "Somatosensory areas, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SS1 (Level 11)"
  },
  {
    "id": 12994,
    "label": "Somatosensory areas, layer 2/3",
    "acronym": "SS2/3",
    "name": "Somatosensory areas, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SS2/3 (Level 11)"
  },
  {
    "id": 12995,
    "label": "Somatosensory areas, layer 4",
    "acronym": "SS4",
    "name": "Somatosensory areas, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SS4 (Level 11)"
  },
  {
    "id": 12996,
    "label": "Somatosensory areas, layer 5",
    "acronym": "SS5",
    "name": "Somatosensory areas, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SS5 (Level 11)"
  },
  {
    "id": 12997,
    "label": "Somatosensory areas, layer 6a",
    "acronym": "SS6a",
    "name": "Somatosensory areas, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SS6a (Level 11)"
  },
  {
    "id": 12998,
    "label": "Somatosensory areas, layer 6b",
    "acronym": "SS6b",
    "name": "Somatosensory areas, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SS6b (Level 11)"
  },
  {
    "id": 322,
    "label": "Primary somatosensory area",
    "acronym": "SSp",
    "name": "Primary somatosensory area",
    "color": "#188064",
    "level": 8,
    "title": "SSp (Level 8)"
  },
  {
    "id": 793,
    "label": "Primary somatosensory area, layer 1",
    "acronym": "SSp1",
    "name": "Primary somatosensory area, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp1 (Level 11)"
  },
  {
    "id": 346,
    "label": "Primary somatosensory area, layer 2/3",
    "acronym": "SSp2/3",
    "name": "Primary somatosensory area, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp2/3 (Level 11)"
  },
  {
    "id": 865,
    "label": "Primary somatosensory area, layer 4",
    "acronym": "SSp4",
    "name": "Primary somatosensory area, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp4 (Level 11)"
  },
  {
    "id": 921,
    "label": "Primary somatosensory area, layer 5",
    "acronym": "SSp5",
    "name": "Primary somatosensory area, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp5 (Level 11)"
  },
  {
    "id": 686,
    "label": "Primary somatosensory area, layer 6a",
    "acronym": "SSp6a",
    "name": "Primary somatosensory area, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp6a (Level 11)"
  },
  {
    "id": 719,
    "label": "Primary somatosensory area, layer 6b",
    "acronym": "SSp6b",
    "name": "Primary somatosensory area, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp6b (Level 11)"
  },
  {
    "id": 353,
    "label": "Primary somatosensory area, nose",
    "acronym": "SSp-n",
    "name": "Primary somatosensory area, nose",
    "color": "#188064",
    "level": 9,
    "title": "SSp-n (Level 9)"
  },
  {
    "id": 558,
    "label": "Primary somatosensory area, nose, layer 1",
    "acronym": "SSp-n1",
    "name": "Primary somatosensory area, nose, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-n1 (Level 11)"
  },
  {
    "id": 838,
    "label": "Primary somatosensory area, nose, layer 2/3",
    "acronym": "SSp-n2/3",
    "name": "Primary somatosensory area, nose, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-n2/3 (Level 11)"
  },
  {
    "id": 654,
    "label": "Primary somatosensory area, nose, layer 4",
    "acronym": "SSp-n4",
    "name": "Primary somatosensory area, nose, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-n4 (Level 11)"
  },
  {
    "id": 702,
    "label": "Primary somatosensory area, nose, layer 5",
    "acronym": "SSp-n5",
    "name": "Primary somatosensory area, nose, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-n5 (Level 11)"
  },
  {
    "id": 889,
    "label": "Primary somatosensory area, nose, layer 6a",
    "acronym": "SSp-n6a",
    "name": "Primary somatosensory area, nose, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-n6a (Level 11)"
  },
  {
    "id": 929,
    "label": "Primary somatosensory area, nose, layer 6b",
    "acronym": "SSp-n6b",
    "name": "Primary somatosensory area, nose, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-n6b (Level 11)"
  },
  {
    "id": 329,
    "label": "Primary somatosensory area, barrel field",
    "acronym": "SSp-bfd",
    "name": "Primary somatosensory area, barrel field",
    "color": "#188064",
    "level": 9,
    "title": "SSp-bfd (Level 9)"
  },
  {
    "id": 981,
    "label": "Primary somatosensory area, barrel field, layer 1",
    "acronym": "SSp-bfd1",
    "name": "Primary somatosensory area, barrel field, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-bfd1 (Level 11)"
  },
  {
    "id": 201,
    "label": "Primary somatosensory area, barrel field, layer 2/3",
    "acronym": "SSp-bfd2/3",
    "name": "Primary somatosensory area, barrel field, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-bfd2/3 (Level 11)"
  },
  {
    "id": 1047,
    "label": "Primary somatosensory area, barrel field, layer 4",
    "acronym": "SSp-bfd4",
    "name": "Primary somatosensory area, barrel field, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-bfd4 (Level 11)"
  },
  {
    "id": 1070,
    "label": "Primary somatosensory area, barrel field, layer 5",
    "acronym": "SSp-bfd5",
    "name": "Primary somatosensory area, barrel field, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-bfd5 (Level 11)"
  },
  {
    "id": 1038,
    "label": "Primary somatosensory area, barrel field, layer 6a",
    "acronym": "SSp-bfd6a",
    "name": "Primary somatosensory area, barrel field, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-bfd6a (Level 11)"
  },
  {
    "id": 1062,
    "label": "Primary somatosensory area, barrel field, layer 6b",
    "acronym": "SSp-bfd6b",
    "name": "Primary somatosensory area, barrel field, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-bfd6b (Level 11)"
  },
  {
    "id": 480149202,
    "label": "Rostrolateral lateral visual area",
    "acronym": "VISrll",
    "name": "Rostrolateral lateral visual area",
    "color": "#188064",
    "level": 10,
    "title": "VISrll (Level 10)"
  },
  {
    "id": 480149206,
    "label": "Rostrolateral lateral visual area, layer 1",
    "acronym": "VISrll1",
    "name": "Rostrolateral lateral visual area, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "VISrll1 (Level 11)"
  },
  {
    "id": 480149210,
    "label": "Rostrolateral lateral visual area, layer 2/3",
    "acronym": "VISrll2/3",
    "name": "Rostrolateral lateral visual area, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "VISrll2/3 (Level 11)"
  },
  {
    "id": 480149214,
    "label": "Rostrolateral lateral visual area, layer 4",
    "acronym": "VISrll4",
    "name": "Rostrolateral lateral visual area, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "VISrll4 (Level 11)"
  },
  {
    "id": 480149218,
    "label": "Rostrolateral lateral visual area,layer 5",
    "acronym": "VISrll5",
    "name": "Rostrolateral lateral visual area,layer 5",
    "color": "#188064",
    "level": 11,
    "title": "VISrll5 (Level 11)"
  },
  {
    "id": 480149222,
    "label": "Rostrolateral lateral visual area, layer 6a",
    "acronym": "VISrll6a",
    "name": "Rostrolateral lateral visual area, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "VISrll6a (Level 11)"
  },
  {
    "id": 480149226,
    "label": "Rostrolateral lateral visual area, layer 6b",
    "acronym": "VISrll6b",
    "name": "Rostrolateral lateral visual area, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "VISrll6b (Level 11)"
  },
  {
    "id": 337,
    "label": "Primary somatosensory area, lower limb",
    "acronym": "SSp-ll",
    "name": "Primary somatosensory area, lower limb",
    "color": "#188064",
    "level": 9,
    "title": "SSp-ll (Level 9)"
  },
  {
    "id": 1030,
    "label": "Primary somatosensory area, lower limb, layer 1",
    "acronym": "SSp-ll1",
    "name": "Primary somatosensory area, lower limb, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ll1 (Level 11)"
  },
  {
    "id": 113,
    "label": "Primary somatosensory area, lower limb, layer 2/3",
    "acronym": "SSp-ll2/3",
    "name": "Primary somatosensory area, lower limb, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ll2/3 (Level 11)"
  },
  {
    "id": 1094,
    "label": "Primary somatosensory area, lower limb, layer 4",
    "acronym": "SSp-ll4",
    "name": "Primary somatosensory area, lower limb, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ll4 (Level 11)"
  },
  {
    "id": 1128,
    "label": "Primary somatosensory area, lower limb, layer 5",
    "acronym": "SSp-ll5",
    "name": "Primary somatosensory area, lower limb, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ll5 (Level 11)"
  },
  {
    "id": 478,
    "label": "Primary somatosensory area, lower limb, layer 6a",
    "acronym": "SSp-ll6a",
    "name": "Primary somatosensory area, lower limb, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ll6a (Level 11)"
  },
  {
    "id": 510,
    "label": "Primary somatosensory area, lower limb, layer 6b",
    "acronym": "SSp-ll6b",
    "name": "Primary somatosensory area, lower limb, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ll6b (Level 11)"
  },
  {
    "id": 345,
    "label": "Primary somatosensory area, mouth",
    "acronym": "SSp-m",
    "name": "Primary somatosensory area, mouth",
    "color": "#188064",
    "level": 9,
    "title": "SSp-m (Level 9)"
  },
  {
    "id": 878,
    "label": "Primary somatosensory area, mouth, layer 1",
    "acronym": "SSp-m1",
    "name": "Primary somatosensory area, mouth, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-m1 (Level 11)"
  },
  {
    "id": 657,
    "label": "Primary somatosensory area, mouth, layer 2/3",
    "acronym": "SSp-m2/3",
    "name": "Primary somatosensory area, mouth, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-m2/3 (Level 11)"
  },
  {
    "id": 950,
    "label": "Primary somatosensory area, mouth, layer 4",
    "acronym": "SSp-m4",
    "name": "Primary somatosensory area, mouth, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-m4 (Level 11)"
  },
  {
    "id": 974,
    "label": "Primary somatosensory area, mouth, layer 5",
    "acronym": "SSp-m5",
    "name": "Primary somatosensory area, mouth, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-m5 (Level 11)"
  },
  {
    "id": 1102,
    "label": "Primary somatosensory area, mouth, layer 6a",
    "acronym": "SSp-m6a",
    "name": "Primary somatosensory area, mouth, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-m6a (Level 11)"
  },
  {
    "id": 2,
    "label": "Primary somatosensory area, mouth, layer 6b",
    "acronym": "SSp-m6b",
    "name": "Primary somatosensory area, mouth, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-m6b (Level 11)"
  },
  {
    "id": 369,
    "label": "Primary somatosensory area, upper limb",
    "acronym": "SSp-ul",
    "name": "Primary somatosensory area, upper limb",
    "color": "#188064",
    "level": 9,
    "title": "SSp-ul (Level 9)"
  },
  {
    "id": 450,
    "label": "Primary somatosensory area, upper limb, layer 1",
    "acronym": "SSp-ul1",
    "name": "Primary somatosensory area, upper limb, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ul1 (Level 11)"
  },
  {
    "id": 854,
    "label": "Primary somatosensory area, upper limb, layer 2/3",
    "acronym": "SSp-ul2/3",
    "name": "Primary somatosensory area, upper limb, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ul2/3 (Level 11)"
  },
  {
    "id": 577,
    "label": "Primary somatosensory area, upper limb, layer 4",
    "acronym": "SSp-ul4",
    "name": "Primary somatosensory area, upper limb, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ul4 (Level 11)"
  },
  {
    "id": 625,
    "label": "Primary somatosensory area, upper limb, layer 5",
    "acronym": "SSp-ul5",
    "name": "Primary somatosensory area, upper limb, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ul5 (Level 11)"
  },
  {
    "id": 945,
    "label": "Primary somatosensory area, upper limb, layer 6a",
    "acronym": "SSp-ul6a",
    "name": "Primary somatosensory area, upper limb, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ul6a (Level 11)"
  },
  {
    "id": 1026,
    "label": "Primary somatosensory area, upper limb, layer 6b",
    "acronym": "SSp-ul6b",
    "name": "Primary somatosensory area, upper limb, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-ul6b (Level 11)"
  },
  {
    "id": 361,
    "label": "Primary somatosensory area, trunk",
    "acronym": "SSp-tr",
    "name": "Primary somatosensory area, trunk",
    "color": "#188064",
    "level": 9,
    "title": "SSp-tr (Level 9)"
  },
  {
    "id": 1006,
    "label": "Primary somatosensory area, trunk, layer 1",
    "acronym": "SSp-tr1",
    "name": "Primary somatosensory area, trunk, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-tr1 (Level 11)"
  },
  {
    "id": 670,
    "label": "Primary somatosensory area, trunk, layer 2/3",
    "acronym": "SSp-tr2/3",
    "name": "Primary somatosensory area, trunk, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-tr2/3 (Level 11)"
  },
  {
    "id": 1086,
    "label": "Primary somatosensory area, trunk, layer 4",
    "acronym": "SSp-tr4",
    "name": "Primary somatosensory area, trunk, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-tr4 (Level 11)"
  },
  {
    "id": 1111,
    "label": "Primary somatosensory area, trunk, layer 5",
    "acronym": "SSp-tr5",
    "name": "Primary somatosensory area, trunk, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-tr5 (Level 11)"
  },
  {
    "id": 9,
    "label": "Primary somatosensory area, trunk, layer 6a",
    "acronym": "SSp-tr6a",
    "name": "Primary somatosensory area, trunk, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-tr6a (Level 11)"
  },
  {
    "id": 461,
    "label": "Primary somatosensory area, trunk, layer 6b",
    "acronym": "SSp-tr6b",
    "name": "Primary somatosensory area, trunk, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-tr6b (Level 11)"
  },
  {
    "id": 182305689,
    "label": "Primary somatosensory area, unassigned",
    "acronym": "SSp-un",
    "name": "Primary somatosensory area, unassigned",
    "color": "#188064",
    "level": 9,
    "title": "SSp-un (Level 9)"
  },
  {
    "id": 182305693,
    "label": "Primary somatosensory area, unassigned, layer 1",
    "acronym": "SSp-un1",
    "name": "Primary somatosensory area, unassigned, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSp-un1 (Level 11)"
  },
  {
    "id": 182305697,
    "label": "Primary somatosensory area, unassigned, layer 2/3",
    "acronym": "SSp-un2/3",
    "name": "Primary somatosensory area, unassigned, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSp-un2/3 (Level 11)"
  },
  {
    "id": 182305701,
    "label": "Primary somatosensory area, unassigned, layer 4",
    "acronym": "SSp-un4",
    "name": "Primary somatosensory area, unassigned, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSp-un4 (Level 11)"
  },
  {
    "id": 182305705,
    "label": "Primary somatosensory area, unassigned, layer 5",
    "acronym": "SSp-un5",
    "name": "Primary somatosensory area, unassigned, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSp-un5 (Level 11)"
  },
  {
    "id": 182305709,
    "label": "Primary somatosensory area, unassigned, layer 6a",
    "acronym": "SSp-un6a",
    "name": "Primary somatosensory area, unassigned, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSp-un6a (Level 11)"
  },
  {
    "id": 182305713,
    "label": "Primary somatosensory area, unassigned, layer 6b",
    "acronym": "SSp-un6b",
    "name": "Primary somatosensory area, unassigned, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSp-un6b (Level 11)"
  },
  {
    "id": 378,
    "label": "Supplemental somatosensory area",
    "acronym": "SSs",
    "name": "Supplemental somatosensory area",
    "color": "#188064",
    "level": 8,
    "title": "SSs (Level 8)"
  },
  {
    "id": 873,
    "label": "Supplemental somatosensory area, layer 1",
    "acronym": "SSs1",
    "name": "Supplemental somatosensory area, layer 1",
    "color": "#188064",
    "level": 11,
    "title": "SSs1 (Level 11)"
  },
  {
    "id": 806,
    "label": "Supplemental somatosensory area, layer 2/3",
    "acronym": "SSs2/3",
    "name": "Supplemental somatosensory area, layer 2/3",
    "color": "#188064",
    "level": 11,
    "title": "SSs2/3 (Level 11)"
  },
  {
    "id": 1035,
    "label": "Supplemental somatosensory area, layer 4",
    "acronym": "SSs4",
    "name": "Supplemental somatosensory area, layer 4",
    "color": "#188064",
    "level": 11,
    "title": "SSs4 (Level 11)"
  },
  {
    "id": 1090,
    "label": "Supplemental somatosensory area, layer 5",
    "acronym": "SSs5",
    "name": "Supplemental somatosensory area, layer 5",
    "color": "#188064",
    "level": 11,
    "title": "SSs5 (Level 11)"
  },
  {
    "id": 862,
    "label": "Supplemental somatosensory area, layer 6a",
    "acronym": "SSs6a",
    "name": "Supplemental somatosensory area, layer 6a",
    "color": "#188064",
    "level": 11,
    "title": "SSs6a (Level 11)"
  },
  {
    "id": 893,
    "label": "Supplemental somatosensory area, layer 6b",
    "acronym": "SSs6b",
    "name": "Supplemental somatosensory area, layer 6b",
    "color": "#188064",
    "level": 11,
    "title": "SSs6b (Level 11)"
  },
  {
    "id": 1057,
    "label": "Gustatory areas",
    "acronym": "GU",
    "name": "Gustatory areas",
    "color": "#009C75",
    "level": 6,
    "title": "GU (Level 6)"
  },
  {
    "id": 36,
    "label": "Gustatory areas, layer 1",
    "acronym": "GU1",
    "name": "Gustatory areas, layer 1",
    "color": "#009C75",
    "level": 11,
    "title": "GU1 (Level 11)"
  },
  {
    "id": 180,
    "label": "Gustatory areas, layer 2/3",
    "acronym": "GU2/3",
    "name": "Gustatory areas, layer 2/3",
    "color": "#009C75",
    "level": 11,
    "title": "GU2/3 (Level 11)"
  },
  {
    "id": 148,
    "label": "Gustatory areas, layer 4",
    "acronym": "GU4",
    "name": "Gustatory areas, layer 4",
    "color": "#009C75",
    "level": 11,
    "title": "GU4 (Level 11)"
  },
  {
    "id": 187,
    "label": "Gustatory areas, layer 5",
    "acronym": "GU5",
    "name": "Gustatory areas, layer 5",
    "color": "#009C75",
    "level": 11,
    "title": "GU5 (Level 11)"
  },
  {
    "id": 638,
    "label": "Gustatory areas, layer 6a",
    "acronym": "GU6a",
    "name": "Gustatory areas, layer 6a",
    "color": "#009C75",
    "level": 11,
    "title": "GU6a (Level 11)"
  },
  {
    "id": 662,
    "label": "Gustatory areas, layer 6b",
    "acronym": "GU6b",
    "name": "Gustatory areas, layer 6b",
    "color": "#009C75",
    "level": 11,
    "title": "GU6b (Level 11)"
  },
  {
    "id": 677,
    "label": "Visceral area",
    "acronym": "VISC",
    "name": "Visceral area",
    "color": "#11AD83",
    "level": 8,
    "title": "VISC (Level 8)"
  },
  {
    "id": 897,
    "label": "Visceral area, layer 1",
    "acronym": "VISC1",
    "name": "Visceral area, layer 1",
    "color": "#11AD83",
    "level": 11,
    "title": "VISC1 (Level 11)"
  },
  {
    "id": 1106,
    "label": "Visceral area, layer 2/3",
    "acronym": "VISC2/3",
    "name": "Visceral area, layer 2/3",
    "color": "#11AD83",
    "level": 11,
    "title": "VISC2/3 (Level 11)"
  },
  {
    "id": 1010,
    "label": "Visceral area, layer 4",
    "acronym": "VISC4",
    "name": "Visceral area, layer 4",
    "color": "#11AD83",
    "level": 11,
    "title": "VISC4 (Level 11)"
  },
  {
    "id": 1058,
    "label": "Visceral area, layer 5",
    "acronym": "VISC5",
    "name": "Visceral area, layer 5",
    "color": "#11AD83",
    "level": 11,
    "title": "VISC5 (Level 11)"
  },
  {
    "id": 857,
    "label": "Visceral area, layer 6a",
    "acronym": "VISC6a",
    "name": "Visceral area, layer 6a",
    "color": "#11AD83",
    "level": 11,
    "title": "VISC6a (Level 11)"
  },
  {
    "id": 849,
    "label": "Visceral area, layer 6b",
    "acronym": "VISC6b",
    "name": "Visceral area, layer 6b",
    "color": "#11AD83",
    "level": 11,
    "title": "VISC6b (Level 11)"
  },
  {
    "id": 247,
    "label": "Auditory areas",
    "acronym": "AUD",
    "name": "Auditory areas",
    "color": "#019399",
    "level": 6,
    "title": "AUD (Level 6)"
  },
  {
    "id": 1011,
    "label": "Dorsal auditory area",
    "acronym": "AUDd",
    "name": "Dorsal auditory area",
    "color": "#019399",
    "level": 8,
    "title": "AUDd (Level 8)"
  },
  {
    "id": 527,
    "label": "Dorsal auditory area, layer 1",
    "acronym": "AUDd1",
    "name": "Dorsal auditory area, layer 1",
    "color": "#019399",
    "level": 11,
    "title": "AUDd1 (Level 11)"
  },
  {
    "id": 600,
    "label": "Dorsal auditory area, layer 2/3",
    "acronym": "AUDd2/3",
    "name": "Dorsal auditory area, layer 2/3",
    "color": "#019399",
    "level": 11,
    "title": "AUDd2/3 (Level 11)"
  },
  {
    "id": 678,
    "label": "Dorsal auditory area, layer 4",
    "acronym": "AUDd4",
    "name": "Dorsal auditory area, layer 4",
    "color": "#019399",
    "level": 11,
    "title": "AUDd4 (Level 11)"
  },
  {
    "id": 252,
    "label": "Dorsal auditory area, layer 5",
    "acronym": "AUDd5",
    "name": "Dorsal auditory area, layer 5",
    "color": "#019399",
    "level": 11,
    "title": "AUDd5 (Level 11)"
  },
  {
    "id": 156,
    "label": "Dorsal auditory area, layer 6a",
    "acronym": "AUDd6a",
    "name": "Dorsal auditory area, layer 6a",
    "color": "#019399",
    "level": 11,
    "title": "AUDd6a (Level 11)"
  },
  {
    "id": 243,
    "label": "Dorsal auditory area, layer 6b",
    "acronym": "AUDd6b",
    "name": "Dorsal auditory area, layer 6b",
    "color": "#019399",
    "level": 11,
    "title": "AUDd6b (Level 11)"
  },
  {
    "id": 480149230,
    "label": "Laterolateral anterior visual area",
    "acronym": "VISlla",
    "name": "Laterolateral anterior visual area",
    "color": "#019399",
    "level": 10,
    "title": "VISlla (Level 10)"
  },
  {
    "id": 480149234,
    "label": "Laterolateral anterior visual area, layer 1",
    "acronym": "VISlla1",
    "name": "Laterolateral anterior visual area, layer 1",
    "color": "#019399",
    "level": 11,
    "title": "VISlla1 (Level 11)"
  },
  {
    "id": 480149238,
    "label": "Laterolateral anterior visual area, layer 2/3",
    "acronym": "VISlla2/3",
    "name": "Laterolateral anterior visual area, layer 2/3",
    "color": "#019399",
    "level": 11,
    "title": "VISlla2/3 (Level 11)"
  },
  {
    "id": 480149242,
    "label": "Laterolateral anterior visual area, layer 4",
    "acronym": "VISlla4",
    "name": "Laterolateral anterior visual area, layer 4",
    "color": "#019399",
    "level": 11,
    "title": "VISlla4 (Level 11)"
  },
  {
    "id": 480149246,
    "label": "Laterolateral anterior visual area,layer 5",
    "acronym": "VISlla5",
    "name": "Laterolateral anterior visual area,layer 5",
    "color": "#019399",
    "level": 11,
    "title": "VISlla5 (Level 11)"
  },
  {
    "id": 480149250,
    "label": "Laterolateral anterior visual area, layer 6a",
    "acronym": "VISlla6a",
    "name": "Laterolateral anterior visual area, layer 6a",
    "color": "#019399",
    "level": 11,
    "title": "VISlla6a (Level 11)"
  },
  {
    "id": 480149254,
    "label": "Laterolateral anterior visual area, layer 6b",
    "acronym": "VISlla6b",
    "name": "Laterolateral anterior visual area, layer 6b",
    "color": "#019399",
    "level": 11,
    "title": "VISlla6b (Level 11)"
  },
  {
    "id": 1002,
    "label": "Primary auditory area",
    "acronym": "AUDp",
    "name": "Primary auditory area",
    "color": "#019399",
    "level": 8,
    "title": "AUDp (Level 8)"
  },
  {
    "id": 735,
    "label": "Primary auditory area, layer 1",
    "acronym": "AUDp1",
    "name": "Primary auditory area, layer 1",
    "color": "#019399",
    "level": 11,
    "title": "AUDp1 (Level 11)"
  },
  {
    "id": 251,
    "label": "Primary auditory area, layer 2/3",
    "acronym": "AUDp2/3",
    "name": "Primary auditory area, layer 2/3",
    "color": "#019399",
    "level": 11,
    "title": "AUDp2/3 (Level 11)"
  },
  {
    "id": 816,
    "label": "Primary auditory area, layer 4",
    "acronym": "AUDp4",
    "name": "Primary auditory area, layer 4",
    "color": "#019399",
    "level": 11,
    "title": "AUDp4 (Level 11)"
  },
  {
    "id": 847,
    "label": "Primary auditory area, layer 5",
    "acronym": "AUDp5",
    "name": "Primary auditory area, layer 5",
    "color": "#019399",
    "level": 11,
    "title": "AUDp5 (Level 11)"
  },
  {
    "id": 954,
    "label": "Primary auditory area, layer 6a",
    "acronym": "AUDp6a",
    "name": "Primary auditory area, layer 6a",
    "color": "#019399",
    "level": 11,
    "title": "AUDp6a (Level 11)"
  },
  {
    "id": 1005,
    "label": "Primary auditory area, layer 6b",
    "acronym": "AUDp6b",
    "name": "Primary auditory area, layer 6b",
    "color": "#019399",
    "level": 11,
    "title": "AUDp6b (Level 11)"
  },
  {
    "id": 1027,
    "label": "Posterior auditory area",
    "acronym": "AUDpo",
    "name": "Posterior auditory area",
    "color": "#019399",
    "level": 8,
    "title": "AUDpo (Level 8)"
  },
  {
    "id": 696,
    "label": "Posterior auditory area, layer 1",
    "acronym": "AUDpo1",
    "name": "Posterior auditory area, layer 1",
    "color": "#019399",
    "level": 11,
    "title": "AUDpo1 (Level 11)"
  },
  {
    "id": 643,
    "label": "Posterior auditory area, layer 2/3",
    "acronym": "AUDpo2/3",
    "name": "Posterior auditory area, layer 2/3",
    "color": "#019399",
    "level": 11,
    "title": "AUDpo2/3 (Level 11)"
  },
  {
    "id": 759,
    "label": "Posterior auditory area, layer 4",
    "acronym": "AUDpo4",
    "name": "Posterior auditory area, layer 4",
    "color": "#019399",
    "level": 11,
    "title": "AUDpo4 (Level 11)"
  },
  {
    "id": 791,
    "label": "Posterior auditory area, layer 5",
    "acronym": "AUDpo5",
    "name": "Posterior auditory area, layer 5",
    "color": "#019399",
    "level": 11,
    "title": "AUDpo5 (Level 11)"
  },
  {
    "id": 249,
    "label": "Posterior auditory area, layer 6a",
    "acronym": "AUDpo6a",
    "name": "Posterior auditory area, layer 6a",
    "color": "#019399",
    "level": 11,
    "title": "AUDpo6a (Level 11)"
  },
  {
    "id": 456,
    "label": "Posterior auditory area, layer 6b",
    "acronym": "AUDpo6b",
    "name": "Posterior auditory area, layer 6b",
    "color": "#019399",
    "level": 11,
    "title": "AUDpo6b (Level 11)"
  },
  {
    "id": 1018,
    "label": "Ventral auditory area",
    "acronym": "AUDv",
    "name": "Ventral auditory area",
    "color": "#019399",
    "level": 8,
    "title": "AUDv (Level 8)"
  },
  {
    "id": 959,
    "label": "Ventral auditory area, layer 1",
    "acronym": "AUDv1",
    "name": "Ventral auditory area, layer 1",
    "color": "#019399",
    "level": 11,
    "title": "AUDv1 (Level 11)"
  },
  {
    "id": 755,
    "label": "Ventral auditory area, layer 2/3",
    "acronym": "AUDv2/3",
    "name": "Ventral auditory area, layer 2/3",
    "color": "#019399",
    "level": 11,
    "title": "AUDv2/3 (Level 11)"
  },
  {
    "id": 990,
    "label": "Ventral auditory area, layer 4",
    "acronym": "AUDv4",
    "name": "Ventral auditory area, layer 4",
    "color": "#019399",
    "level": 11,
    "title": "AUDv4 (Level 11)"
  },
  {
    "id": 1023,
    "label": "Ventral auditory area, layer 5",
    "acronym": "AUDv5",
    "name": "Ventral auditory area, layer 5",
    "color": "#019399",
    "level": 11,
    "title": "AUDv5 (Level 11)"
  },
  {
    "id": 520,
    "label": "Ventral auditory area, layer 6a",
    "acronym": "AUDv6a",
    "name": "Ventral auditory area, layer 6a",
    "color": "#019399",
    "level": 11,
    "title": "AUDv6a (Level 11)"
  },
  {
    "id": 598,
    "label": "Ventral auditory area, layer 6b",
    "acronym": "AUDv6b",
    "name": "Ventral auditory area, layer 6b",
    "color": "#019399",
    "level": 11,
    "title": "AUDv6b (Level 11)"
  },
  {
    "id": 669,
    "label": "Visual areas",
    "acronym": "VIS",
    "name": "Visual areas",
    "color": "#08858C",
    "level": 6,
    "title": "VIS (Level 6)"
  },
  {
    "id": 801,
    "label": "Visual areas, layer 1",
    "acronym": "VIS1",
    "name": "Visual areas, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VIS1 (Level 11)"
  },
  {
    "id": 561,
    "label": "Visual areas, layer 2/3",
    "acronym": "VIS2/3",
    "name": "Visual areas, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VIS2/3 (Level 11)"
  },
  {
    "id": 913,
    "label": "Visual areas, layer 4",
    "acronym": "VIS4",
    "name": "Visual areas, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VIS4 (Level 11)"
  },
  {
    "id": 937,
    "label": "Visual areas, layer 5",
    "acronym": "VIS5",
    "name": "Visual areas, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VIS5 (Level 11)"
  },
  {
    "id": 457,
    "label": "Visual areas, layer 6a",
    "acronym": "VIS6a",
    "name": "Visual areas, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VIS6a (Level 11)"
  },
  {
    "id": 497,
    "label": "Visual areas, layer 6b",
    "acronym": "VIS6b",
    "name": "Visual areas, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VIS6b (Level 11)"
  },
  {
    "id": 402,
    "label": "Anterolateral visual area",
    "acronym": "VISal",
    "name": "Anterolateral visual area",
    "color": "#08858C",
    "level": 8,
    "title": "VISal (Level 8)"
  },
  {
    "id": 1074,
    "label": "Anterolateral visual area, layer 1",
    "acronym": "VISal1",
    "name": "Anterolateral visual area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISal1 (Level 11)"
  },
  {
    "id": 905,
    "label": "Anterolateral visual area, layer 2/3",
    "acronym": "VISal2/3",
    "name": "Anterolateral visual area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISal2/3 (Level 11)"
  },
  {
    "id": 1114,
    "label": "Anterolateral visual area, layer 4",
    "acronym": "VISal4",
    "name": "Anterolateral visual area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISal4 (Level 11)"
  },
  {
    "id": 233,
    "label": "Anterolateral visual area, layer 5",
    "acronym": "VISal5",
    "name": "Anterolateral visual area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISal5 (Level 11)"
  },
  {
    "id": 601,
    "label": "Anterolateral visual area, layer 6a",
    "acronym": "VISal6a",
    "name": "Anterolateral visual area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISal6a (Level 11)"
  },
  {
    "id": 649,
    "label": "Anterolateral visual area, layer 6b",
    "acronym": "VISal6b",
    "name": "Anterolateral visual area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISal6b (Level 11)"
  },
  {
    "id": 394,
    "label": "Anteromedial visual area",
    "acronym": "VISam",
    "name": "Anteromedial visual area",
    "color": "#08858C",
    "level": 8,
    "title": "VISam (Level 8)"
  },
  {
    "id": 281,
    "label": "Anteromedial visual area, layer 1",
    "acronym": "VISam1",
    "name": "Anteromedial visual area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISam1 (Level 11)"
  },
  {
    "id": 1066,
    "label": "Anteromedial visual area, layer 2/3",
    "acronym": "VISam2/3",
    "name": "Anteromedial visual area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISam2/3 (Level 11)"
  },
  {
    "id": 401,
    "label": "Anteromedial visual area, layer 4",
    "acronym": "VISam4",
    "name": "Anteromedial visual area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISam4 (Level 11)"
  },
  {
    "id": 433,
    "label": "Anteromedial visual area, layer 5",
    "acronym": "VISam5",
    "name": "Anteromedial visual area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISam5 (Level 11)"
  },
  {
    "id": 1046,
    "label": "Anteromedial visual area, layer 6a",
    "acronym": "VISam6a",
    "name": "Anteromedial visual area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISam6a (Level 11)"
  },
  {
    "id": 441,
    "label": "Anteromedial visual area, layer 6b",
    "acronym": "VISam6b",
    "name": "Anteromedial visual area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISam6b (Level 11)"
  },
  {
    "id": 409,
    "label": "Lateral visual area",
    "acronym": "VISl",
    "name": "Lateral visual area",
    "color": "#08858C",
    "level": 8,
    "title": "VISl (Level 8)"
  },
  {
    "id": 421,
    "label": "Lateral visual area, layer 1",
    "acronym": "VISl1",
    "name": "Lateral visual area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISl1 (Level 11)"
  },
  {
    "id": 973,
    "label": "Lateral visual area, layer 2/3",
    "acronym": "VISl2/3",
    "name": "Lateral visual area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISl2/3 (Level 11)"
  },
  {
    "id": 573,
    "label": "Lateral visual area, layer 4",
    "acronym": "VISl4",
    "name": "Lateral visual area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISl4 (Level 11)"
  },
  {
    "id": 613,
    "label": "Lateral visual area, layer 5",
    "acronym": "VISl5",
    "name": "Lateral visual area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISl5 (Level 11)"
  },
  {
    "id": 74,
    "label": "Lateral visual area, layer 6a",
    "acronym": "VISl6a",
    "name": "Lateral visual area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISl6a (Level 11)"
  },
  {
    "id": 121,
    "label": "Lateral visual area, layer 6b",
    "acronym": "VISl6b",
    "name": "Lateral visual area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISl6b (Level 11)"
  },
  {
    "id": 385,
    "label": "Primary visual area",
    "acronym": "VISp",
    "name": "Primary visual area",
    "color": "#08858C",
    "level": 8,
    "title": "VISp (Level 8)"
  },
  {
    "id": 593,
    "label": "Primary visual area, layer 1",
    "acronym": "VISp1",
    "name": "Primary visual area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISp1 (Level 11)"
  },
  {
    "id": 821,
    "label": "Primary visual area, layer 2/3",
    "acronym": "VISp2/3",
    "name": "Primary visual area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISp2/3 (Level 11)"
  },
  {
    "id": 721,
    "label": "Primary visual area, layer 4",
    "acronym": "VISp4",
    "name": "Primary visual area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISp4 (Level 11)"
  },
  {
    "id": 778,
    "label": "Primary visual area, layer 5",
    "acronym": "VISp5",
    "name": "Primary visual area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISp5 (Level 11)"
  },
  {
    "id": 33,
    "label": "Primary visual area, layer 6a",
    "acronym": "VISp6a",
    "name": "Primary visual area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISp6a (Level 11)"
  },
  {
    "id": 305,
    "label": "Primary visual area, layer 6b",
    "acronym": "VISp6b",
    "name": "Primary visual area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISp6b (Level 11)"
  },
  {
    "id": 425,
    "label": "Posterolateral visual area",
    "acronym": "VISpl",
    "name": "Posterolateral visual area",
    "color": "#08858C",
    "level": 8,
    "title": "VISpl (Level 8)"
  },
  {
    "id": 750,
    "label": "Posterolateral visual area, layer 1",
    "acronym": "VISpl1",
    "name": "Posterolateral visual area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISpl1 (Level 11)"
  },
  {
    "id": 269,
    "label": "Posterolateral visual area, layer 2/3",
    "acronym": "VISpl2/3",
    "name": "Posterolateral visual area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISpl2/3 (Level 11)"
  },
  {
    "id": 869,
    "label": "Posterolateral visual area, layer 4",
    "acronym": "VISpl4",
    "name": "Posterolateral visual area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISpl4 (Level 11)"
  },
  {
    "id": 902,
    "label": "Posterolateral visual area, layer 5",
    "acronym": "VISpl5",
    "name": "Posterolateral visual area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISpl5 (Level 11)"
  },
  {
    "id": 377,
    "label": "Posterolateral visual area, layer 6a",
    "acronym": "VISpl6a",
    "name": "Posterolateral visual area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISpl6a (Level 11)"
  },
  {
    "id": 393,
    "label": "Posterolateral visual area, layer 6b",
    "acronym": "VISpl6b",
    "name": "Posterolateral visual area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISpl6b (Level 11)"
  },
  {
    "id": 533,
    "label": "posteromedial visual area",
    "acronym": "VISpm",
    "name": "posteromedial visual area",
    "color": "#08858C",
    "level": 8,
    "title": "VISpm (Level 8)"
  },
  {
    "id": 805,
    "label": "posteromedial visual area, layer 1",
    "acronym": "VISpm1",
    "name": "posteromedial visual area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISpm1 (Level 11)"
  },
  {
    "id": 41,
    "label": "posteromedial visual area, layer 2/3",
    "acronym": "VISpm2/3",
    "name": "posteromedial visual area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISpm2/3 (Level 11)"
  },
  {
    "id": 501,
    "label": "posteromedial visual area, layer 4",
    "acronym": "VISpm4",
    "name": "posteromedial visual area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISpm4 (Level 11)"
  },
  {
    "id": 565,
    "label": "posteromedial visual area, layer 5",
    "acronym": "VISpm5",
    "name": "posteromedial visual area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISpm5 (Level 11)"
  },
  {
    "id": 257,
    "label": "posteromedial visual area, layer 6a",
    "acronym": "VISpm6a",
    "name": "posteromedial visual area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISpm6a (Level 11)"
  },
  {
    "id": 469,
    "label": "posteromedial visual area, layer 6b",
    "acronym": "VISpm6b",
    "name": "posteromedial visual area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISpm6b (Level 11)"
  },
  {
    "id": 312782574,
    "label": "Laterointermediate area",
    "acronym": "VISli",
    "name": "Laterointermediate area",
    "color": "#08858C",
    "level": 8,
    "title": "VISli (Level 8)"
  },
  {
    "id": 312782578,
    "label": "Laterointermediate area, layer 1",
    "acronym": "VISli1",
    "name": "Laterointermediate area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISli1 (Level 11)"
  },
  {
    "id": 312782582,
    "label": "Laterointermediate area, layer 2/3",
    "acronym": "VISli2/3",
    "name": "Laterointermediate area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISli2/3 (Level 11)"
  },
  {
    "id": 312782586,
    "label": "Laterointermediate area, layer 4",
    "acronym": "VISli4",
    "name": "Laterointermediate area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISli4 (Level 11)"
  },
  {
    "id": 312782590,
    "label": "Laterointermediate area, layer 5",
    "acronym": "VISli5",
    "name": "Laterointermediate area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISli5 (Level 11)"
  },
  {
    "id": 312782594,
    "label": "Laterointermediate area, layer 6a",
    "acronym": "VISli6a",
    "name": "Laterointermediate area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISli6a (Level 11)"
  },
  {
    "id": 312782598,
    "label": "Laterointermediate area, layer 6b",
    "acronym": "VISli6b",
    "name": "Laterointermediate area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISli6b (Level 11)"
  },
  {
    "id": 312782628,
    "label": "Postrhinal area",
    "acronym": "VISpor",
    "name": "Postrhinal area",
    "color": "#08858C",
    "level": 8,
    "title": "VISpor (Level 8)"
  },
  {
    "id": 312782632,
    "label": "Postrhinal area, layer 1",
    "acronym": "VISpor1",
    "name": "Postrhinal area, layer 1",
    "color": "#08858C",
    "level": 11,
    "title": "VISpor1 (Level 11)"
  },
  {
    "id": 312782636,
    "label": "Postrhinal area, layer 2/3",
    "acronym": "VISpor2/3",
    "name": "Postrhinal area, layer 2/3",
    "color": "#08858C",
    "level": 11,
    "title": "VISpor2/3 (Level 11)"
  },
  {
    "id": 312782640,
    "label": "Postrhinal area, layer 4",
    "acronym": "VISpor4",
    "name": "Postrhinal area, layer 4",
    "color": "#08858C",
    "level": 11,
    "title": "VISpor4 (Level 11)"
  },
  {
    "id": 312782644,
    "label": "Postrhinal area, layer 5",
    "acronym": "VISpor5",
    "name": "Postrhinal area, layer 5",
    "color": "#08858C",
    "level": 11,
    "title": "VISpor5 (Level 11)"
  },
  {
    "id": 312782648,
    "label": "Postrhinal area, layer 6a",
    "acronym": "VISpor6a",
    "name": "Postrhinal area, layer 6a",
    "color": "#08858C",
    "level": 11,
    "title": "VISpor6a (Level 11)"
  },
  {
    "id": 312782652,
    "label": "Postrhinal area, layer 6b",
    "acronym": "VISpor6b",
    "name": "Postrhinal area, layer 6b",
    "color": "#08858C",
    "level": 11,
    "title": "VISpor6b (Level 11)"
  },
  {
    "id": 31,
    "label": "Anterior cingulate area",
    "acronym": "ACA",
    "name": "Anterior cingulate area",
    "color": "#40A666",
    "level": 8,
    "title": "ACA (Level 8)"
  },
  {
    "id": 572,
    "label": "Anterior cingulate area, layer 1",
    "acronym": "ACA1",
    "name": "Anterior cingulate area, layer 1",
    "color": "#40A666",
    "level": 11,
    "title": "ACA1 (Level 11)"
  },
  {
    "id": 1053,
    "label": "Anterior cingulate area, layer 2/3",
    "acronym": "ACA2/3",
    "name": "Anterior cingulate area, layer 2/3",
    "color": "#40A666",
    "level": 11,
    "title": "ACA2/3 (Level 11)"
  },
  {
    "id": 739,
    "label": "Anterior cingulate area, layer 5",
    "acronym": "ACA5",
    "name": "Anterior cingulate area, layer 5",
    "color": "#40A666",
    "level": 11,
    "title": "ACA5 (Level 11)"
  },
  {
    "id": 179,
    "label": "Anterior cingulate area, layer 6a",
    "acronym": "ACA6a",
    "name": "Anterior cingulate area, layer 6a",
    "color": "#40A666",
    "level": 11,
    "title": "ACA6a (Level 11)"
  },
  {
    "id": 227,
    "label": "Anterior cingulate area, layer 6b",
    "acronym": "ACA6b",
    "name": "Anterior cingulate area, layer 6b",
    "color": "#40A666",
    "level": 11,
    "title": "ACA6b (Level 11)"
  },
  {
    "id": 39,
    "label": "Anterior cingulate area, dorsal part",
    "acronym": "ACAd",
    "name": "Anterior cingulate area, dorsal part",
    "color": "#40A666",
    "level": 9,
    "title": "ACAd (Level 9)"
  },
  {
    "id": 935,
    "label": "Anterior cingulate area, dorsal part, layer 1",
    "acronym": "ACAd1",
    "name": "Anterior cingulate area, dorsal part, layer 1",
    "color": "#40A666",
    "level": 11,
    "title": "ACAd1 (Level 11)"
  },
  {
    "id": 211,
    "label": "Anterior cingulate area, dorsal part, layer 2/3",
    "acronym": "ACAd2/3",
    "name": "Anterior cingulate area, dorsal part, layer 2/3",
    "color": "#40A666",
    "level": 11,
    "title": "ACAd2/3 (Level 11)"
  },
  {
    "id": 1015,
    "label": "Anterior cingulate area, dorsal part, layer 5",
    "acronym": "ACAd5",
    "name": "Anterior cingulate area, dorsal part, layer 5",
    "color": "#40A666",
    "level": 11,
    "title": "ACAd5 (Level 11)"
  },
  {
    "id": 919,
    "label": "Anterior cingulate area, dorsal part, layer 6a",
    "acronym": "ACAd6a",
    "name": "Anterior cingulate area, dorsal part, layer 6a",
    "color": "#40A666",
    "level": 11,
    "title": "ACAd6a (Level 11)"
  },
  {
    "id": 927,
    "label": "Anterior cingulate area, dorsal part, layer 6b",
    "acronym": "ACAd6b",
    "name": "Anterior cingulate area, dorsal part, layer 6b",
    "color": "#40A666",
    "level": 11,
    "title": "ACAd6b (Level 11)"
  },
  {
    "id": 48,
    "label": "Anterior cingulate area, ventral part",
    "acronym": "ACAv",
    "name": "Anterior cingulate area, ventral part",
    "color": "#40A666",
    "level": 9,
    "title": "ACAv (Level 9)"
  },
  {
    "id": 588,
    "label": "Anterior cingulate area, ventral part, layer 1",
    "acronym": "ACAv1",
    "name": "Anterior cingulate area, ventral part, layer 1",
    "color": "#40A666",
    "level": 11,
    "title": "ACAv1 (Level 11)"
  },
  {
    "id": 296,
    "label": "Anterior cingulate area, ventral part, layer 2/3",
    "acronym": "ACAv2/3",
    "name": "Anterior cingulate area, ventral part, layer 2/3",
    "color": "#40A666",
    "level": 11,
    "title": "ACAv2/3 (Level 11)"
  },
  {
    "id": 772,
    "label": "Anterior cingulate area, ventral part, layer 5",
    "acronym": "ACAv5",
    "name": "Anterior cingulate area, ventral part, layer 5",
    "color": "#40A666",
    "level": 11,
    "title": "ACAv5 (Level 11)"
  },
  {
    "id": 810,
    "label": "Anterior cingulate area, ventral part, 6a",
    "acronym": "ACAv6a",
    "name": "Anterior cingulate area, ventral part, 6a",
    "color": "#40A666",
    "level": 11,
    "title": "ACAv6a (Level 11)"
  },
  {
    "id": 819,
    "label": "Anterior cingulate area, ventral part, 6b",
    "acronym": "ACAv6b",
    "name": "Anterior cingulate area, ventral part, 6b",
    "color": "#40A666",
    "level": 11,
    "title": "ACAv6b (Level 11)"
  },
  {
    "id": 972,
    "label": "Prelimbic area",
    "acronym": "PL",
    "name": "Prelimbic area",
    "color": "#2FA850",
    "level": 8,
    "title": "PL (Level 8)"
  },
  {
    "id": 171,
    "label": "Prelimbic area, layer 1",
    "acronym": "PL1",
    "name": "Prelimbic area, layer 1",
    "color": "#2FA850",
    "level": 11,
    "title": "PL1 (Level 11)"
  },
  {
    "id": 195,
    "label": "Prelimbic area, layer 2",
    "acronym": "PL2",
    "name": "Prelimbic area, layer 2",
    "color": "#2FA850",
    "level": 11,
    "title": "PL2 (Level 11)"
  },
  {
    "id": 304,
    "label": "Prelimbic area, layer 2/3",
    "acronym": "PL2/3",
    "name": "Prelimbic area, layer 2/3",
    "color": "#2FA850",
    "level": 11,
    "title": "PL2/3 (Level 11)"
  },
  {
    "id": 363,
    "label": "Prelimbic area, layer 5",
    "acronym": "PL5",
    "name": "Prelimbic area, layer 5",
    "color": "#2FA850",
    "level": 11,
    "title": "PL5 (Level 11)"
  },
  {
    "id": 84,
    "label": "Prelimbic area, layer 6a",
    "acronym": "PL6a",
    "name": "Prelimbic area, layer 6a",
    "color": "#2FA850",
    "level": 11,
    "title": "PL6a (Level 11)"
  },
  {
    "id": 132,
    "label": "Prelimbic area, layer 6b",
    "acronym": "PL6b",
    "name": "Prelimbic area, layer 6b",
    "color": "#2FA850",
    "level": 11,
    "title": "PL6b (Level 11)"
  },
  {
    "id": 44,
    "label": "Infralimbic area",
    "acronym": "ILA",
    "name": "Infralimbic area",
    "color": "#59B363",
    "level": 8,
    "title": "ILA (Level 8)"
  },
  {
    "id": 707,
    "label": "Infralimbic area, layer 1",
    "acronym": "ILA1",
    "name": "Infralimbic area, layer 1",
    "color": "#59B363",
    "level": 11,
    "title": "ILA1 (Level 11)"
  },
  {
    "id": 747,
    "label": "Infralimbic area, layer 2",
    "acronym": "ILA2",
    "name": "Infralimbic area, layer 2",
    "color": "#59B363",
    "level": 11,
    "title": "ILA2 (Level 11)"
  },
  {
    "id": 556,
    "label": "Infralimbic area, layer 2/3",
    "acronym": "ILA2/3",
    "name": "Infralimbic area, layer 2/3",
    "color": "#59B363",
    "level": 11,
    "title": "ILA2/3 (Level 11)"
  },
  {
    "id": 827,
    "label": "Infralimbic area, layer 5",
    "acronym": "ILA5",
    "name": "Infralimbic area, layer 5",
    "color": "#59B363",
    "level": 11,
    "title": "ILA5 (Level 11)"
  },
  {
    "id": 1054,
    "label": "Infralimbic area, layer 6a",
    "acronym": "ILA6a",
    "name": "Infralimbic area, layer 6a",
    "color": "#59B363",
    "level": 11,
    "title": "ILA6a (Level 11)"
  },
  {
    "id": 1081,
    "label": "Infralimbic area, layer 6b",
    "acronym": "ILA6b",
    "name": "Infralimbic area, layer 6b",
    "color": "#59B363",
    "level": 11,
    "title": "ILA6b (Level 11)"
  },
  {
    "id": 714,
    "label": "Orbital area",
    "acronym": "ORB",
    "name": "Orbital area",
    "color": "#248A5E",
    "level": 8,
    "title": "ORB (Level 8)"
  },
  {
    "id": 264,
    "label": "Orbital area, layer 1",
    "acronym": "ORB1",
    "name": "Orbital area, layer 1",
    "color": "#248A5E",
    "level": 11,
    "title": "ORB1 (Level 11)"
  },
  {
    "id": 492,
    "label": "Orbital area, layer 2/3",
    "acronym": "ORB2/3",
    "name": "Orbital area, layer 2/3",
    "color": "#248A5E",
    "level": 11,
    "title": "ORB2/3 (Level 11)"
  },
  {
    "id": 352,
    "label": "Orbital area, layer 5",
    "acronym": "ORB5",
    "name": "Orbital area, layer 5",
    "color": "#248A5E",
    "level": 11,
    "title": "ORB5 (Level 11)"
  },
  {
    "id": 476,
    "label": "Orbital area, layer 6a",
    "acronym": "ORB6a",
    "name": "Orbital area, layer 6a",
    "color": "#248A5E",
    "level": 11,
    "title": "ORB6a (Level 11)"
  },
  {
    "id": 516,
    "label": "Orbital area, layer 6b",
    "acronym": "ORB6b",
    "name": "Orbital area, layer 6b",
    "color": "#248A5E",
    "level": 11,
    "title": "ORB6b (Level 11)"
  },
  {
    "id": 723,
    "label": "Orbital area, lateral part",
    "acronym": "ORBl",
    "name": "Orbital area, lateral part",
    "color": "#248A5E",
    "level": 9,
    "title": "ORBl (Level 9)"
  },
  {
    "id": 448,
    "label": "Orbital area, lateral part, layer 1",
    "acronym": "ORBl1",
    "name": "Orbital area, lateral part, layer 1",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBl1 (Level 11)"
  },
  {
    "id": 412,
    "label": "Orbital area, lateral part, layer 2/3",
    "acronym": "ORBl2/3",
    "name": "Orbital area, lateral part, layer 2/3",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBl2/3 (Level 11)"
  },
  {
    "id": 630,
    "label": "Orbital area, lateral part, layer 5",
    "acronym": "ORBl5",
    "name": "Orbital area, lateral part, layer 5",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBl5 (Level 11)"
  },
  {
    "id": 440,
    "label": "Orbital area, lateral part, layer 6a",
    "acronym": "ORBl6a",
    "name": "Orbital area, lateral part, layer 6a",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBl6a (Level 11)"
  },
  {
    "id": 488,
    "label": "Orbital area, lateral part, layer 6b",
    "acronym": "ORBl6b",
    "name": "Orbital area, lateral part, layer 6b",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBl6b (Level 11)"
  },
  {
    "id": 731,
    "label": "Orbital area, medial part",
    "acronym": "ORBm",
    "name": "Orbital area, medial part",
    "color": "#248A5E",
    "level": 9,
    "title": "ORBm (Level 9)"
  },
  {
    "id": 484,
    "label": "Orbital area, medial part, layer 1",
    "acronym": "ORBm1",
    "name": "Orbital area, medial part, layer 1",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBm1 (Level 11)"
  },
  {
    "id": 524,
    "label": "Orbital area, medial part, layer 2",
    "acronym": "ORBm2",
    "name": "Orbital area, medial part, layer 2",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBm2 (Level 11)"
  },
  {
    "id": 582,
    "label": "Orbital area, medial part, layer 2/3",
    "acronym": "ORBm2/3",
    "name": "Orbital area, medial part, layer 2/3",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBm2/3 (Level 11)"
  },
  {
    "id": 620,
    "label": "Orbital area, medial part, layer 5",
    "acronym": "ORBm5",
    "name": "Orbital area, medial part, layer 5",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBm5 (Level 11)"
  },
  {
    "id": 910,
    "label": "Orbital area, medial part, layer 6a",
    "acronym": "ORBm6a",
    "name": "Orbital area, medial part, layer 6a",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBm6a (Level 11)"
  },
  {
    "id": 527696977,
    "label": "Orbital area, medial part, layer 6b",
    "acronym": "ORBm6b",
    "name": "Orbital area, medial part, layer 6b",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBm6b (Level 11)"
  },
  {
    "id": 738,
    "label": "Orbital area, ventral part",
    "acronym": "ORBv",
    "name": "Orbital area, ventral part",
    "color": "#248A5E",
    "level": 9,
    "title": "ORBv (Level 9)"
  },
  {
    "id": 746,
    "label": "Orbital area, ventrolateral part",
    "acronym": "ORBvl",
    "name": "Orbital area, ventrolateral part",
    "color": "#248A5E",
    "level": 9,
    "title": "ORBvl (Level 9)"
  },
  {
    "id": 969,
    "label": "Orbital area, ventrolateral part, layer 1",
    "acronym": "ORBvl1",
    "name": "Orbital area, ventrolateral part, layer 1",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBvl1 (Level 11)"
  },
  {
    "id": 288,
    "label": "Orbital area, ventrolateral part, layer 2/3",
    "acronym": "ORBvl2/3",
    "name": "Orbital area, ventrolateral part, layer 2/3",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBvl2/3 (Level 11)"
  },
  {
    "id": 1125,
    "label": "Orbital area, ventrolateral part, layer 5",
    "acronym": "ORBvl5",
    "name": "Orbital area, ventrolateral part, layer 5",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBvl5 (Level 11)"
  },
  {
    "id": 608,
    "label": "Orbital area, ventrolateral part, layer 6a",
    "acronym": "ORBvl6a",
    "name": "Orbital area, ventrolateral part, layer 6a",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBvl6a (Level 11)"
  },
  {
    "id": 680,
    "label": "Orbital area, ventrolateral part, layer 6b",
    "acronym": "ORBvl6b",
    "name": "Orbital area, ventrolateral part, layer 6b",
    "color": "#248A5E",
    "level": 11,
    "title": "ORBvl6b (Level 11)"
  },
  {
    "id": 95,
    "label": "Agranular insular area",
    "acronym": "AI",
    "name": "Agranular insular area",
    "color": "#219866",
    "level": 8,
    "title": "AI (Level 8)"
  },
  {
    "id": 104,
    "label": "Agranular insular area, dorsal part",
    "acronym": "AId",
    "name": "Agranular insular area, dorsal part",
    "color": "#219866",
    "level": 9,
    "title": "AId (Level 9)"
  },
  {
    "id": 996,
    "label": "Agranular insular area, dorsal part, layer 1",
    "acronym": "AId1",
    "name": "Agranular insular area, dorsal part, layer 1",
    "color": "#219866",
    "level": 11,
    "title": "AId1 (Level 11)"
  },
  {
    "id": 328,
    "label": "Agranular insular area, dorsal part, layer 2/3",
    "acronym": "AId2/3",
    "name": "Agranular insular area, dorsal part, layer 2/3",
    "color": "#219866",
    "level": 11,
    "title": "AId2/3 (Level 11)"
  },
  {
    "id": 1101,
    "label": "Agranular insular area, dorsal part, layer 5",
    "acronym": "AId5",
    "name": "Agranular insular area, dorsal part, layer 5",
    "color": "#219866",
    "level": 11,
    "title": "AId5 (Level 11)"
  },
  {
    "id": 783,
    "label": "Agranular insular area, dorsal part, layer 6a",
    "acronym": "AId6a",
    "name": "Agranular insular area, dorsal part, layer 6a",
    "color": "#219866",
    "level": 11,
    "title": "AId6a (Level 11)"
  },
  {
    "id": 831,
    "label": "Agranular insular area, dorsal part, layer 6b",
    "acronym": "AId6b",
    "name": "Agranular insular area, dorsal part, layer 6b",
    "color": "#219866",
    "level": 11,
    "title": "AId6b (Level 11)"
  },
  {
    "id": 111,
    "label": "Agranular insular area, posterior part",
    "acronym": "AIp",
    "name": "Agranular insular area, posterior part",
    "color": "#219866",
    "level": 9,
    "title": "AIp (Level 9)"
  },
  {
    "id": 120,
    "label": "Agranular insular area, posterior part, layer 1",
    "acronym": "AIp1",
    "name": "Agranular insular area, posterior part, layer 1",
    "color": "#219866",
    "level": 11,
    "title": "AIp1 (Level 11)"
  },
  {
    "id": 163,
    "label": "Agranular insular area, posterior part, layer 2/3",
    "acronym": "AIp2/3",
    "name": "Agranular insular area, posterior part, layer 2/3",
    "color": "#219866",
    "level": 11,
    "title": "AIp2/3 (Level 11)"
  },
  {
    "id": 344,
    "label": "Agranular insular area, posterior part, layer 5",
    "acronym": "AIp5",
    "name": "Agranular insular area, posterior part, layer 5",
    "color": "#219866",
    "level": 11,
    "title": "AIp5 (Level 11)"
  },
  {
    "id": 314,
    "label": "Agranular insular area, posterior part, layer 6a",
    "acronym": "AIp6a",
    "name": "Agranular insular area, posterior part, layer 6a",
    "color": "#219866",
    "level": 11,
    "title": "AIp6a (Level 11)"
  },
  {
    "id": 355,
    "label": "Agranular insular area, posterior part, layer 6b",
    "acronym": "AIp6b",
    "name": "Agranular insular area, posterior part, layer 6b",
    "color": "#219866",
    "level": 11,
    "title": "AIp6b (Level 11)"
  },
  {
    "id": 119,
    "label": "Agranular insular area, ventral part",
    "acronym": "AIv",
    "name": "Agranular insular area, ventral part",
    "color": "#219866",
    "level": 9,
    "title": "AIv (Level 9)"
  },
  {
    "id": 704,
    "label": "Agranular insular area, ventral part, layer 1",
    "acronym": "AIv1",
    "name": "Agranular insular area, ventral part, layer 1",
    "color": "#219866",
    "level": 11,
    "title": "AIv1 (Level 11)"
  },
  {
    "id": 694,
    "label": "Agranular insular area, ventral part, layer 2/3",
    "acronym": "AIv2/3",
    "name": "Agranular insular area, ventral part, layer 2/3",
    "color": "#219866",
    "level": 11,
    "title": "AIv2/3 (Level 11)"
  },
  {
    "id": 800,
    "label": "Agranular insular area, ventral part, layer 5",
    "acronym": "AIv5",
    "name": "Agranular insular area, ventral part, layer 5",
    "color": "#219866",
    "level": 11,
    "title": "AIv5 (Level 11)"
  },
  {
    "id": 675,
    "label": "Agranular insular area, ventral part, layer 6a",
    "acronym": "AIv6a",
    "name": "Agranular insular area, ventral part, layer 6a",
    "color": "#219866",
    "level": 11,
    "title": "AIv6a (Level 11)"
  },
  {
    "id": 699,
    "label": "Agranular insular area, ventral part, layer 6b",
    "acronym": "AIv6b",
    "name": "Agranular insular area, ventral part, layer 6b",
    "color": "#219866",
    "level": 11,
    "title": "AIv6b (Level 11)"
  },
  {
    "id": 254,
    "label": "Retrosplenial area",
    "acronym": "RSP",
    "name": "Retrosplenial area",
    "color": "#1AA698",
    "level": 8,
    "title": "RSP (Level 8)"
  },
  {
    "id": 894,
    "label": "Retrosplenial area, lateral agranular part",
    "acronym": "RSPagl",
    "name": "Retrosplenial area, lateral agranular part",
    "color": "#1AA698",
    "level": 9,
    "title": "RSPagl (Level 9)"
  },
  {
    "id": 671,
    "label": "Retrosplenial area, lateral agranular part, layer 1",
    "acronym": "RSPagl1",
    "name": "Retrosplenial area, lateral agranular part, layer 1",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPagl1 (Level 11)"
  },
  {
    "id": 965,
    "label": "Retrosplenial area, lateral agranular part, layer 2/3",
    "acronym": "RSPagl2/3",
    "name": "Retrosplenial area, lateral agranular part, layer 2/3",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPagl2/3 (Level 11)"
  },
  {
    "id": 774,
    "label": "Retrosplenial area, lateral agranular part, layer 5",
    "acronym": "RSPagl5",
    "name": "Retrosplenial area, lateral agranular part, layer 5",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPagl5 (Level 11)"
  },
  {
    "id": 906,
    "label": "Retrosplenial area, lateral agranular part, layer 6a",
    "acronym": "RSPagl6a",
    "name": "Retrosplenial area, lateral agranular part, layer 6a",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPagl6a (Level 11)"
  },
  {
    "id": 279,
    "label": "Retrosplenial area, lateral agranular part, layer 6b",
    "acronym": "RSPagl6b",
    "name": "Retrosplenial area, lateral agranular part, layer 6b",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPagl6b (Level 11)"
  },
  {
    "id": 480149258,
    "label": "Mediomedial anterior visual area",
    "acronym": "VISmma",
    "name": "Mediomedial anterior visual area",
    "color": "#1AA698",
    "level": 10,
    "title": "VISmma (Level 10)"
  },
  {
    "id": 480149262,
    "label": "Mediomedial anterior visual area, layer 1",
    "acronym": "VISmma1",
    "name": "Mediomedial anterior visual area, layer 1",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmma1 (Level 11)"
  },
  {
    "id": 480149266,
    "label": "Mediomedial anterior visual area, layer 2/3",
    "acronym": "VISmma2/3",
    "name": "Mediomedial anterior visual area, layer 2/3",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmma2/3 (Level 11)"
  },
  {
    "id": 480149270,
    "label": "Mediomedial anterior visual area, layer 4",
    "acronym": "VISmma4",
    "name": "Mediomedial anterior visual area, layer 4",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmma4 (Level 11)"
  },
  {
    "id": 480149274,
    "label": "Mediomedial anterior visual area,layer 5",
    "acronym": "VISmma5",
    "name": "Mediomedial anterior visual area,layer 5",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmma5 (Level 11)"
  },
  {
    "id": 480149278,
    "label": "Mediomedial anterior visual area, layer 6a",
    "acronym": "VISmma6a",
    "name": "Mediomedial anterior visual area, layer 6a",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmma6a (Level 11)"
  },
  {
    "id": 480149282,
    "label": "Mediomedial anterior visual area, layer 6b",
    "acronym": "VISmma6b",
    "name": "Mediomedial anterior visual area, layer 6b",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmma6b (Level 11)"
  },
  {
    "id": 480149286,
    "label": "Mediomedial posterior visual area",
    "acronym": "VISmmp",
    "name": "Mediomedial posterior visual area",
    "color": "#1AA698",
    "level": 10,
    "title": "VISmmp (Level 10)"
  },
  {
    "id": 480149290,
    "label": "Mediomedial posterior visual area, layer 1",
    "acronym": "VISmmp1",
    "name": "Mediomedial posterior visual area, layer 1",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmmp1 (Level 11)"
  },
  {
    "id": 480149294,
    "label": "Mediomedial posterior visual area, layer 2/3",
    "acronym": "VISmmp2/3",
    "name": "Mediomedial posterior visual area, layer 2/3",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmmp2/3 (Level 11)"
  },
  {
    "id": 480149298,
    "label": "Mediomedial posterior visual area, layer 4",
    "acronym": "VISmmp4",
    "name": "Mediomedial posterior visual area, layer 4",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmmp4 (Level 11)"
  },
  {
    "id": 480149302,
    "label": "Mediomedial posterior visual area,layer 5",
    "acronym": "VISmmp5",
    "name": "Mediomedial posterior visual area,layer 5",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmmp5 (Level 11)"
  },
  {
    "id": 480149306,
    "label": "Mediomedial posterior visual area, layer 6a",
    "acronym": "VISmmp6a",
    "name": "Mediomedial posterior visual area, layer 6a",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmmp6a (Level 11)"
  },
  {
    "id": 480149310,
    "label": "Mediomedial posterior visual area, layer 6b",
    "acronym": "VISmmp6b",
    "name": "Mediomedial posterior visual area, layer 6b",
    "color": "#1AA698",
    "level": 11,
    "title": "VISmmp6b (Level 11)"
  },
  {
    "id": 480149314,
    "label": "Medial visual area",
    "acronym": "VISm",
    "name": "Medial visual area",
    "color": "#1AA698",
    "level": 10,
    "title": "VISm (Level 10)"
  },
  {
    "id": 480149318,
    "label": "Medial visual area, layer 1",
    "acronym": "VISm1",
    "name": "Medial visual area, layer 1",
    "color": "#1AA698",
    "level": 11,
    "title": "VISm1 (Level 11)"
  },
  {
    "id": 480149322,
    "label": "Medial visual area, layer 2/3",
    "acronym": "VISm2/3",
    "name": "Medial visual area, layer 2/3",
    "color": "#1AA698",
    "level": 11,
    "title": "VISm2/3 (Level 11)"
  },
  {
    "id": 480149326,
    "label": "Medial visual area, layer 4",
    "acronym": "VISm4",
    "name": "Medial visual area, layer 4",
    "color": "#1AA698",
    "level": 11,
    "title": "VISm4 (Level 11)"
  },
  {
    "id": 480149330,
    "label": "Medial visual area,layer 5",
    "acronym": "VISm5",
    "name": "Medial visual area,layer 5",
    "color": "#1AA698",
    "level": 11,
    "title": "VISm5 (Level 11)"
  },
  {
    "id": 480149334,
    "label": "Medial visual area, layer 6a",
    "acronym": "VISm6a",
    "name": "Medial visual area, layer 6a",
    "color": "#1AA698",
    "level": 11,
    "title": "VISm6a (Level 11)"
  },
  {
    "id": 480149338,
    "label": "Medial visual area, layer 6b",
    "acronym": "VISm6b",
    "name": "Medial visual area, layer 6b",
    "color": "#1AA698",
    "level": 11,
    "title": "VISm6b (Level 11)"
  },
  {
    "id": 879,
    "label": "Retrosplenial area, dorsal part",
    "acronym": "RSPd",
    "name": "Retrosplenial area, dorsal part",
    "color": "#1AA698",
    "level": 9,
    "title": "RSPd (Level 9)"
  },
  {
    "id": 442,
    "label": "Retrosplenial area, dorsal part, layer 1",
    "acronym": "RSPd1",
    "name": "Retrosplenial area, dorsal part, layer 1",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPd1 (Level 11)"
  },
  {
    "id": 434,
    "label": "Retrosplenial area, dorsal part, layer 2/3",
    "acronym": "RSPd2/3",
    "name": "Retrosplenial area, dorsal part, layer 2/3",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPd2/3 (Level 11)"
  },
  {
    "id": 545,
    "label": "Retrosplenial area, dorsal part, layer 4",
    "acronym": "RSPd4",
    "name": "Retrosplenial area, dorsal part, layer 4",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPd4 (Level 11)"
  },
  {
    "id": 610,
    "label": "Retrosplenial area, dorsal part, layer 5",
    "acronym": "RSPd5",
    "name": "Retrosplenial area, dorsal part, layer 5",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPd5 (Level 11)"
  },
  {
    "id": 274,
    "label": "Retrosplenial area, dorsal part, layer 6a",
    "acronym": "RSPd6a",
    "name": "Retrosplenial area, dorsal part, layer 6a",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPd6a (Level 11)"
  },
  {
    "id": 330,
    "label": "Retrosplenial area, dorsal part, layer 6b",
    "acronym": "RSPd6b",
    "name": "Retrosplenial area, dorsal part, layer 6b",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPd6b (Level 11)"
  },
  {
    "id": 886,
    "label": "Retrosplenial area, ventral part",
    "acronym": "RSPv",
    "name": "Retrosplenial area, ventral part",
    "color": "#1AA698",
    "level": 9,
    "title": "RSPv (Level 9)"
  },
  {
    "id": 542,
    "label": "Retrosplenial area, ventral part, layer 1",
    "acronym": "RSPv1",
    "name": "Retrosplenial area, ventral part, layer 1",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPv1 (Level 11)"
  },
  {
    "id": 606,
    "label": "Retrosplenial area, ventral part, layer 2",
    "acronym": "RSPv2",
    "name": "Retrosplenial area, ventral part, layer 2",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPv2 (Level 11)"
  },
  {
    "id": 430,
    "label": "Retrosplenial area, ventral part, layer 2/3",
    "acronym": "RSPv2/3",
    "name": "Retrosplenial area, ventral part, layer 2/3",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPv2/3 (Level 11)"
  },
  {
    "id": 687,
    "label": "Retrosplenial area, ventral part, layer 5",
    "acronym": "RSPv5",
    "name": "Retrosplenial area, ventral part, layer 5",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPv5 (Level 11)"
  },
  {
    "id": 590,
    "label": "Retrosplenial area, ventral part, layer 6a",
    "acronym": "RSPv6a",
    "name": "Retrosplenial area, ventral part, layer 6a",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPv6a (Level 11)"
  },
  {
    "id": 622,
    "label": "Retrosplenial area, ventral part, layer 6b",
    "acronym": "RSPv6b",
    "name": "Retrosplenial area, ventral part, layer 6b",
    "color": "#1AA698",
    "level": 11,
    "title": "RSPv6b (Level 11)"
  },
  {
    "id": 22,
    "label": "Posterior parietal association areas",
    "acronym": "PTLp",
    "name": "Posterior parietal association areas",
    "color": "#009FAC",
    "level": 6,
    "title": "PTLp (Level 6)"
  },
  {
    "id": 532,
    "label": "Posterior parietal association areas, layer 1",
    "acronym": "PTLp1",
    "name": "Posterior parietal association areas, layer 1",
    "color": "#009FAC",
    "level": 11,
    "title": "PTLp1 (Level 11)"
  },
  {
    "id": 241,
    "label": "Posterior parietal association areas, layer 2/3",
    "acronym": "PTLp2/3",
    "name": "Posterior parietal association areas, layer 2/3",
    "color": "#009FAC",
    "level": 11,
    "title": "PTLp2/3 (Level 11)"
  },
  {
    "id": 635,
    "label": "Posterior parietal association areas, layer 4",
    "acronym": "PTLp4",
    "name": "Posterior parietal association areas, layer 4",
    "color": "#009FAC",
    "level": 11,
    "title": "PTLp4 (Level 11)"
  },
  {
    "id": 683,
    "label": "Posterior parietal association areas, layer 5",
    "acronym": "PTLp5",
    "name": "Posterior parietal association areas, layer 5",
    "color": "#009FAC",
    "level": 11,
    "title": "PTLp5 (Level 11)"
  },
  {
    "id": 308,
    "label": "Posterior parietal association areas, layer 6a",
    "acronym": "PTLp6a",
    "name": "Posterior parietal association areas, layer 6a",
    "color": "#009FAC",
    "level": 11,
    "title": "PTLp6a (Level 11)"
  },
  {
    "id": 340,
    "label": "Posterior parietal association areas, layer 6b",
    "acronym": "PTLp6b",
    "name": "Posterior parietal association areas, layer 6b",
    "color": "#009FAC",
    "level": 11,
    "title": "PTLp6b (Level 11)"
  },
  {
    "id": 312782546,
    "label": "Anterior area",
    "acronym": "VISa",
    "name": "Anterior area",
    "color": "#009FAC",
    "level": 8,
    "title": "VISa (Level 8)"
  },
  {
    "id": 312782550,
    "label": "Anterior area, layer 1",
    "acronym": "VISa1",
    "name": "Anterior area, layer 1",
    "color": "#009FAC",
    "level": 11,
    "title": "VISa1 (Level 11)"
  },
  {
    "id": 312782554,
    "label": "Anterior area, layer 2/3",
    "acronym": "VISa2/3",
    "name": "Anterior area, layer 2/3",
    "color": "#009FAC",
    "level": 11,
    "title": "VISa2/3 (Level 11)"
  },
  {
    "id": 312782558,
    "label": "Anterior area, layer 4",
    "acronym": "VISa4",
    "name": "Anterior area, layer 4",
    "color": "#009FAC",
    "level": 11,
    "title": "VISa4 (Level 11)"
  },
  {
    "id": 312782562,
    "label": "Anterior area, layer 5",
    "acronym": "VISa5",
    "name": "Anterior area, layer 5",
    "color": "#009FAC",
    "level": 11,
    "title": "VISa5 (Level 11)"
  },
  {
    "id": 312782566,
    "label": "Anterior area, layer 6a",
    "acronym": "VISa6a",
    "name": "Anterior area, layer 6a",
    "color": "#009FAC",
    "level": 11,
    "title": "VISa6a (Level 11)"
  },
  {
    "id": 312782570,
    "label": "Anterior area, layer 6b",
    "acronym": "VISa6b",
    "name": "Anterior area, layer 6b",
    "color": "#009FAC",
    "level": 11,
    "title": "VISa6b (Level 11)"
  },
  {
    "id": 417,
    "label": "Rostrolateral visual area",
    "acronym": "VISrl",
    "name": "Rostrolateral visual area",
    "color": "#009FAC",
    "level": 8,
    "title": "VISrl (Level 8)"
  },
  {
    "id": 312782604,
    "label": "Rostrolateral area, layer 1",
    "acronym": "VISrl1",
    "name": "Rostrolateral area, layer 1",
    "color": "#009FAC",
    "level": 11,
    "title": "VISrl1 (Level 11)"
  },
  {
    "id": 312782608,
    "label": "Rostrolateral area, layer 2/3",
    "acronym": "VISrl2/3",
    "name": "Rostrolateral area, layer 2/3",
    "color": "#009FAC",
    "level": 11,
    "title": "VISrl2/3 (Level 11)"
  },
  {
    "id": 312782612,
    "label": "Rostrolateral area, layer 4",
    "acronym": "VISrl4",
    "name": "Rostrolateral area, layer 4",
    "color": "#009FAC",
    "level": 11,
    "title": "VISrl4 (Level 11)"
  },
  {
    "id": 312782616,
    "label": "Rostrolateral area, layer 5",
    "acronym": "VISrl5",
    "name": "Rostrolateral area, layer 5",
    "color": "#009FAC",
    "level": 11,
    "title": "VISrl5 (Level 11)"
  },
  {
    "id": 312782620,
    "label": "Rostrolateral area, layer 6a",
    "acronym": "VISrl6a",
    "name": "Rostrolateral area, layer 6a",
    "color": "#009FAC",
    "level": 11,
    "title": "VISrl6a (Level 11)"
  },
  {
    "id": 312782624,
    "label": "Rostrolateral area, layer 6b",
    "acronym": "VISrl6b",
    "name": "Rostrolateral area, layer 6b",
    "color": "#009FAC",
    "level": 11,
    "title": "VISrl6b (Level 11)"
  },
  {
    "id": 541,
    "label": "Temporal association areas",
    "acronym": "TEa",
    "name": "Temporal association areas",
    "color": "#15B0B3",
    "level": 6,
    "title": "TEa (Level 6)"
  },
  {
    "id": 97,
    "label": "Temporal association areas, layer 1",
    "acronym": "TEa1",
    "name": "Temporal association areas, layer 1",
    "color": "#15B0B3",
    "level": 11,
    "title": "TEa1 (Level 11)"
  },
  {
    "id": 1127,
    "label": "Temporal association areas, layer 2/3",
    "acronym": "TEa2/3",
    "name": "Temporal association areas, layer 2/3",
    "color": "#15B0B3",
    "level": 11,
    "title": "TEa2/3 (Level 11)"
  },
  {
    "id": 234,
    "label": "Temporal association areas, layer 4",
    "acronym": "TEa4",
    "name": "Temporal association areas, layer 4",
    "color": "#15B0B3",
    "level": 11,
    "title": "TEa4 (Level 11)"
  },
  {
    "id": 289,
    "label": "Temporal association areas, layer 5",
    "acronym": "TEa5",
    "name": "Temporal association areas, layer 5",
    "color": "#15B0B3",
    "level": 11,
    "title": "TEa5 (Level 11)"
  },
  {
    "id": 729,
    "label": "Temporal association areas, layer 6a",
    "acronym": "TEa6a",
    "name": "Temporal association areas, layer 6a",
    "color": "#15B0B3",
    "level": 11,
    "title": "TEa6a (Level 11)"
  },
  {
    "id": 786,
    "label": "Temporal association areas, layer 6b",
    "acronym": "TEa6b",
    "name": "Temporal association areas, layer 6b",
    "color": "#15B0B3",
    "level": 11,
    "title": "TEa6b (Level 11)"
  },
  {
    "id": 922,
    "label": "Perirhinal area",
    "acronym": "PERI",
    "name": "Perirhinal area",
    "color": "#0E9684",
    "level": 8,
    "title": "PERI (Level 8)"
  },
  {
    "id": 540,
    "label": "Perirhinal area, layer 1",
    "acronym": "PERI1",
    "name": "Perirhinal area, layer 1",
    "color": "#0E9684",
    "level": 11,
    "title": "PERI1 (Level 11)"
  },
  {
    "id": 888,
    "label": "Perirhinal area, layer 2/3",
    "acronym": "PERI2/3",
    "name": "Perirhinal area, layer 2/3",
    "color": "#0E9684",
    "level": 11,
    "title": "PERI2/3 (Level 11)"
  },
  {
    "id": 692,
    "label": "Perirhinal area, layer 5",
    "acronym": "PERI5",
    "name": "Perirhinal area, layer 5",
    "color": "#0E9684",
    "level": 11,
    "title": "PERI5 (Level 11)"
  },
  {
    "id": 335,
    "label": "Perirhinal area, layer 6a",
    "acronym": "PERI6a",
    "name": "Perirhinal area, layer 6a",
    "color": "#0E9684",
    "level": 11,
    "title": "PERI6a (Level 11)"
  },
  {
    "id": 368,
    "label": "Perirhinal area, layer 6b",
    "acronym": "PERI6b",
    "name": "Perirhinal area, layer 6b",
    "color": "#0E9684",
    "level": 11,
    "title": "PERI6b (Level 11)"
  },
  {
    "id": 895,
    "label": "Ectorhinal area",
    "acronym": "ECT",
    "name": "Ectorhinal area",
    "color": "#0D9F91",
    "level": 8,
    "title": "ECT (Level 8)"
  },
  {
    "id": 836,
    "label": "Ectorhinal area/Layer 1",
    "acronym": "ECT1",
    "name": "Ectorhinal area/Layer 1",
    "color": "#0D9F91",
    "level": 11,
    "title": "ECT1 (Level 11)"
  },
  {
    "id": 427,
    "label": "Ectorhinal area/Layer 2/3",
    "acronym": "ECT2/3",
    "name": "Ectorhinal area/Layer 2/3",
    "color": "#0D9F91",
    "level": 11,
    "title": "ECT2/3 (Level 11)"
  },
  {
    "id": 988,
    "label": "Ectorhinal area/Layer 5",
    "acronym": "ECT5",
    "name": "Ectorhinal area/Layer 5",
    "color": "#0D9F91",
    "level": 11,
    "title": "ECT5 (Level 11)"
  },
  {
    "id": 977,
    "label": "Ectorhinal area/Layer 6a",
    "acronym": "ECT6a",
    "name": "Ectorhinal area/Layer 6a",
    "color": "#0D9F91",
    "level": 11,
    "title": "ECT6a (Level 11)"
  },
  {
    "id": 1045,
    "label": "Ectorhinal area/Layer 6b",
    "acronym": "ECT6b",
    "name": "Ectorhinal area/Layer 6b",
    "color": "#0D9F91",
    "level": 11,
    "title": "ECT6b (Level 11)"
  },
  {
    "id": 698,
    "label": "Olfactory areas",
    "acronym": "OLF",
    "name": "Olfactory areas",
    "color": "#9AD2BD",
    "level": 5,
    "title": "OLF (Level 5)"
  },
  {
    "id": 507,
    "label": "Main olfactory bulb",
    "acronym": "MOB",
    "name": "Main olfactory bulb",
    "color": "#9AD2BD",
    "level": 8,
    "title": "MOB (Level 8)"
  },
  {
    "id": 212,
    "label": "Main olfactory bulb, glomerular layer",
    "acronym": "MOBgl",
    "name": "Main olfactory bulb, glomerular layer",
    "color": "#82C7AE",
    "level": 11,
    "title": "MOBgl (Level 11)"
  },
  {
    "id": 220,
    "label": "Main olfactory bulb, granule layer",
    "acronym": "MOBgr",
    "name": "Main olfactory bulb, granule layer",
    "color": "#82C7AE",
    "level": 11,
    "title": "MOBgr (Level 11)"
  },
  {
    "id": 228,
    "label": "Main olfactory bulb, inner plexiform layer",
    "acronym": "MOBipl",
    "name": "Main olfactory bulb, inner plexiform layer",
    "color": "#9AD2BD",
    "level": 11,
    "title": "MOBipl (Level 11)"
  },
  {
    "id": 236,
    "label": "Main olfactory bulb, mitral layer",
    "acronym": "MOBmi",
    "name": "Main olfactory bulb, mitral layer",
    "color": "#82C7AE",
    "level": 11,
    "title": "MOBmi (Level 11)"
  },
  {
    "id": 244,
    "label": "Main olfactory bulb, outer plexiform layer",
    "acronym": "MOBopl",
    "name": "Main olfactory bulb, outer plexiform layer",
    "color": "#9AD2BD",
    "level": 11,
    "title": "MOBopl (Level 11)"
  },
  {
    "id": 151,
    "label": "Accessory olfactory bulb",
    "acronym": "AOB",
    "name": "Accessory olfactory bulb",
    "color": "#9DF0D2",
    "level": 8,
    "title": "AOB (Level 8)"
  },
  {
    "id": 188,
    "label": "Accessory olfactory bulb, glomerular layer",
    "acronym": "AOBgl",
    "name": "Accessory olfactory bulb, glomerular layer",
    "color": "#9DF0D2",
    "level": 11,
    "title": "AOBgl (Level 11)"
  },
  {
    "id": 196,
    "label": "Accessory olfactory bulb, granular layer",
    "acronym": "AOBgr",
    "name": "Accessory olfactory bulb, granular layer",
    "color": "#95E4C8",
    "level": 11,
    "title": "AOBgr (Level 11)"
  },
  {
    "id": 204,
    "label": "Accessory olfactory bulb, mitral layer",
    "acronym": "AOBmi",
    "name": "Accessory olfactory bulb, mitral layer",
    "color": "#9DF0D2",
    "level": 11,
    "title": "AOBmi (Level 11)"
  },
  {
    "id": 159,
    "label": "Anterior olfactory nucleus",
    "acronym": "AON",
    "name": "Anterior olfactory nucleus",
    "color": "#54BF94",
    "level": 8,
    "title": "AON (Level 8)"
  },
  {
    "id": 167,
    "label": "Anterior olfactory nucleus, dorsal part",
    "acronym": "AONd",
    "name": "Anterior olfactory nucleus, dorsal part",
    "color": "#54BF94",
    "level": 9,
    "title": "AONd (Level 9)"
  },
  {
    "id": 175,
    "label": "Anterior olfactory nucleus, external part",
    "acronym": "AONe",
    "name": "Anterior olfactory nucleus, external part",
    "color": "#54BF94",
    "level": 9,
    "title": "AONe (Level 9)"
  },
  {
    "id": 183,
    "label": "Anterior olfactory nucleus, lateral part",
    "acronym": "AONl",
    "name": "Anterior olfactory nucleus, lateral part",
    "color": "#54BF94",
    "level": 9,
    "title": "AONl (Level 9)"
  },
  {
    "id": 191,
    "label": "Anterior olfactory nucleus, medial part",
    "acronym": "AONm",
    "name": "Anterior olfactory nucleus, medial part",
    "color": "#54BF94",
    "level": 9,
    "title": "AONm (Level 9)"
  },
  {
    "id": 199,
    "label": "Anterior olfactory nucleus, posteroventral part",
    "acronym": "AONpv",
    "name": "Anterior olfactory nucleus, posteroventral part",
    "color": "#54BF94",
    "level": 9,
    "title": "AONpv (Level 9)"
  },
  {
    "id": 160,
    "label": "Anterior olfactory nucleus, layer 1",
    "acronym": "AON1",
    "name": "Anterior olfactory nucleus, layer 1",
    "color": "#54BF94",
    "level": 11,
    "title": "AON1 (Level 11)"
  },
  {
    "id": 168,
    "label": "Anterior olfactory nucleus, layer 2",
    "acronym": "AON2",
    "name": "Anterior olfactory nucleus, layer 2",
    "color": "#54BF94",
    "level": 11,
    "title": "AON2 (Level 11)"
  },
  {
    "id": 589,
    "label": "Taenia tecta",
    "acronym": "TT",
    "name": "Taenia tecta",
    "color": "#62D09F",
    "level": 8,
    "title": "TT (Level 8)"
  },
  {
    "id": 597,
    "label": "Taenia tecta, dorsal part",
    "acronym": "TTd",
    "name": "Taenia tecta, dorsal part",
    "color": "#62D09F",
    "level": 9,
    "title": "TTd (Level 9)"
  },
  {
    "id": 297,
    "label": "Taenia tecta, dorsal part, layers 1-4",
    "acronym": "TTd1-4",
    "name": "Taenia tecta, dorsal part, layers 1-4",
    "color": "#62D09F",
    "level": 11,
    "title": "TTd1-4 (Level 11)"
  },
  {
    "id": 1034,
    "label": "Taenia tecta, dorsal part, layer 1",
    "acronym": "TTd1",
    "name": "Taenia tecta, dorsal part, layer 1",
    "color": "#62D09F",
    "level": 11,
    "title": "TTd1 (Level 11)"
  },
  {
    "id": 1042,
    "label": "Taenia tecta, dorsal part, layer 2",
    "acronym": "TTd2",
    "name": "Taenia tecta, dorsal part, layer 2",
    "color": "#62D09F",
    "level": 11,
    "title": "TTd2 (Level 11)"
  },
  {
    "id": 1050,
    "label": "Taenia tecta, dorsal part, layer 3",
    "acronym": "TTd3",
    "name": "Taenia tecta, dorsal part, layer 3",
    "color": "#62D09F",
    "level": 11,
    "title": "TTd3 (Level 11)"
  },
  {
    "id": 1059,
    "label": "Taenia tecta, dorsal part, layer 4",
    "acronym": "TTd4",
    "name": "Taenia tecta, dorsal part, layer 4",
    "color": "#62D09F",
    "level": 11,
    "title": "TTd4 (Level 11)"
  },
  {
    "id": 605,
    "label": "Taenia tecta, ventral part",
    "acronym": "TTv",
    "name": "Taenia tecta, ventral part",
    "color": "#62D09F",
    "level": 9,
    "title": "TTv (Level 9)"
  },
  {
    "id": 306,
    "label": "Taenia tecta, ventral part, layers 1-3",
    "acronym": "TTv1-3",
    "name": "Taenia tecta, ventral part, layers 1-3",
    "color": "#62D09F",
    "level": 11,
    "title": "TTv1-3 (Level 11)"
  },
  {
    "id": 1067,
    "label": "Taenia tecta, ventral part, layer 1",
    "acronym": "TTv1",
    "name": "Taenia tecta, ventral part, layer 1",
    "color": "#62D09F",
    "level": 11,
    "title": "TTv1 (Level 11)"
  },
  {
    "id": 1075,
    "label": "Taenia tecta, ventral part, layer 2",
    "acronym": "TTv2",
    "name": "Taenia tecta, ventral part, layer 2",
    "color": "#62D09F",
    "level": 11,
    "title": "TTv2 (Level 11)"
  },
  {
    "id": 1082,
    "label": "Taenia tecta, ventral part, layer 3",
    "acronym": "TTv3",
    "name": "Taenia tecta, ventral part, layer 3",
    "color": "#62D09F",
    "level": 11,
    "title": "TTv3 (Level 11)"
  },
  {
    "id": 814,
    "label": "Dorsal peduncular area",
    "acronym": "DP",
    "name": "Dorsal peduncular area",
    "color": "#A4DAA4",
    "level": 8,
    "title": "DP (Level 8)"
  },
  {
    "id": 496,
    "label": "Dorsal peduncular area, layer 1",
    "acronym": "DP1",
    "name": "Dorsal peduncular area, layer 1",
    "color": "#A4DAA4",
    "level": 11,
    "title": "DP1 (Level 11)"
  },
  {
    "id": 535,
    "label": "Dorsal peduncular area, layer 2",
    "acronym": "DP2",
    "name": "Dorsal peduncular area, layer 2",
    "color": "#A4DAA4",
    "level": 11,
    "title": "DP2 (Level 11)"
  },
  {
    "id": 360,
    "label": "Dorsal peduncular area, layer 2/3",
    "acronym": "DP2/3",
    "name": "Dorsal peduncular area, layer 2/3",
    "color": "#A4DAA4",
    "level": 11,
    "title": "DP2/3 (Level 11)"
  },
  {
    "id": 646,
    "label": "Dorsal peduncular area, layer 5",
    "acronym": "DP5",
    "name": "Dorsal peduncular area, layer 5",
    "color": "#A4DAA4",
    "level": 11,
    "title": "DP5 (Level 11)"
  },
  {
    "id": 267,
    "label": "Dorsal peduncular area, layer 6a",
    "acronym": "DP6a",
    "name": "Dorsal peduncular area, layer 6a",
    "color": "#A4DAA4",
    "level": 11,
    "title": "DP6a (Level 11)"
  },
  {
    "id": 961,
    "label": "Piriform area",
    "acronym": "PIR",
    "name": "Piriform area",
    "color": "#6ACBBA",
    "level": 8,
    "title": "PIR (Level 8)"
  },
  {
    "id": 152,
    "label": "Piriform area, layers 1-3",
    "acronym": "PIR1-3",
    "name": "Piriform area, layers 1-3",
    "color": "#6ACBBA",
    "level": 11,
    "title": "PIR1-3 (Level 11)"
  },
  {
    "id": 276,
    "label": "Piriform area, molecular layer",
    "acronym": "PIR1",
    "name": "Piriform area, molecular layer",
    "color": "#6ACBBA",
    "level": 11,
    "title": "PIR1 (Level 11)"
  },
  {
    "id": 284,
    "label": "Piriform area, pyramidal layer",
    "acronym": "PIR2",
    "name": "Piriform area, pyramidal layer",
    "color": "#6ACBBA",
    "level": 11,
    "title": "PIR2 (Level 11)"
  },
  {
    "id": 291,
    "label": "Piriform area, polymorph layer",
    "acronym": "PIR3",
    "name": "Piriform area, polymorph layer",
    "color": "#6ACBBA",
    "level": 11,
    "title": "PIR3 (Level 11)"
  },
  {
    "id": 619,
    "label": "Nucleus of the lateral olfactory tract",
    "acronym": "NLOT",
    "name": "Nucleus of the lateral olfactory tract",
    "color": "#95E4C8",
    "level": 8,
    "title": "NLOT (Level 8)"
  },
  {
    "id": 392,
    "label": "Nucleus of the lateral olfactory tract, layers 1-3",
    "acronym": "NLOT1-3",
    "name": "Nucleus of the lateral olfactory tract, layers 1-3",
    "color": "#95E4C8",
    "level": 11,
    "title": "NLOT1-3 (Level 11)"
  },
  {
    "id": 260,
    "label": "Nucleus of the lateral olfactory tract, molecular layer",
    "acronym": "NLOT1",
    "name": "Nucleus of the lateral olfactory tract, molecular layer",
    "color": "#95E4C8",
    "level": 11,
    "title": "NLOT1 (Level 11)"
  },
  {
    "id": 268,
    "label": "Nucleus of the lateral olfactory tract, pyramidal layer",
    "acronym": "NLOT2",
    "name": "Nucleus of the lateral olfactory tract, pyramidal layer",
    "color": "#95E4C8",
    "level": 11,
    "title": "NLOT2 (Level 11)"
  },
  {
    "id": 1139,
    "label": "Nucleus of the lateral olfactory tract, layer 3",
    "acronym": "NLOT3",
    "name": "Nucleus of the lateral olfactory tract, layer 3",
    "color": "#95E4C8",
    "level": 11,
    "title": "NLOT3 (Level 11)"
  },
  {
    "id": 631,
    "label": "Cortical amygdalar area",
    "acronym": "COA",
    "name": "Cortical amygdalar area",
    "color": "#61E7B7",
    "level": 8,
    "title": "COA (Level 8)"
  },
  {
    "id": 639,
    "label": "Cortical amygdalar area, anterior part",
    "acronym": "COAa",
    "name": "Cortical amygdalar area, anterior part",
    "color": "#61E7B7",
    "level": 9,
    "title": "COAa (Level 9)"
  },
  {
    "id": 192,
    "label": "Cortical amygdalar area, anterior part, layer 1",
    "acronym": "COAa1",
    "name": "Cortical amygdalar area, anterior part, layer 1",
    "color": "#61E7B7",
    "level": 11,
    "title": "COAa1 (Level 11)"
  },
  {
    "id": 200,
    "label": "Cortical amygdalar area, anterior part, layer 2",
    "acronym": "COAa2",
    "name": "Cortical amygdalar area, anterior part, layer 2",
    "color": "#61E7B7",
    "level": 11,
    "title": "COAa2 (Level 11)"
  },
  {
    "id": 208,
    "label": "Cortical amygdalar area, anterior part, layer 3",
    "acronym": "COAa3",
    "name": "Cortical amygdalar area, anterior part, layer 3",
    "color": "#61E7B7",
    "level": 11,
    "title": "COAa3 (Level 11)"
  },
  {
    "id": 647,
    "label": "Cortical amygdalar area, posterior part",
    "acronym": "COAp",
    "name": "Cortical amygdalar area, posterior part",
    "color": "#61E7B7",
    "level": 9,
    "title": "COAp (Level 9)"
  },
  {
    "id": 655,
    "label": "Cortical amygdalar area, posterior part, lateral zone",
    "acronym": "COApl",
    "name": "Cortical amygdalar area, posterior part, lateral zone",
    "color": "#61E7B7",
    "level": 10,
    "title": "COApl (Level 10)"
  },
  {
    "id": 584,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layers 1-2",
    "acronym": "COApl1-2",
    "name": "Cortical amygdalar area, posterior part, lateral zone, layers 1-2",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApl1-2 (Level 11)"
  },
  {
    "id": 376,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layers 1-3",
    "acronym": "COApl1-3",
    "name": "Cortical amygdalar area, posterior part, lateral zone, layers 1-3",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApl1-3 (Level 11)"
  },
  {
    "id": 216,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layer 1",
    "acronym": "COApl1",
    "name": "Cortical amygdalar area, posterior part, lateral zone, layer 1",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApl1 (Level 11)"
  },
  {
    "id": 224,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layer 2",
    "acronym": "COApl2",
    "name": "Cortical amygdalar area, posterior part, lateral zone, layer 2",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApl2 (Level 11)"
  },
  {
    "id": 232,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layer 3",
    "acronym": "COApl3",
    "name": "Cortical amygdalar area, posterior part, lateral zone, layer 3",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApl3 (Level 11)"
  },
  {
    "id": 663,
    "label": "Cortical amygdalar area, posterior part, medial zone",
    "acronym": "COApm",
    "name": "Cortical amygdalar area, posterior part, medial zone",
    "color": "#61E7B7",
    "level": 10,
    "title": "COApm (Level 10)"
  },
  {
    "id": 592,
    "label": "Cortical amygdalar area, posterior part, medial zone, layers 1-2",
    "acronym": "COApm1-2",
    "name": "Cortical amygdalar area, posterior part, medial zone, layers 1-2",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApm1-2 (Level 11)"
  },
  {
    "id": 383,
    "label": "Cortical amygdalar area, posterior part, medial zone, layers 1-3",
    "acronym": "COApm1-3",
    "name": "Cortical amygdalar area, posterior part, medial zone, layers 1-3",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApm1-3 (Level 11)"
  },
  {
    "id": 240,
    "label": "Cortical amygdalar area, posterior part, medial zone, layer 1",
    "acronym": "COApm1",
    "name": "Cortical amygdalar area, posterior part, medial zone, layer 1",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApm1 (Level 11)"
  },
  {
    "id": 248,
    "label": "Cortical amygdalar area, posterior part, medial zone, layer 2",
    "acronym": "COApm2",
    "name": "Cortical amygdalar area, posterior part, medial zone, layer 2",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApm2 (Level 11)"
  },
  {
    "id": 256,
    "label": "Cortical amygdalar area, posterior part, medial zone, layer 3",
    "acronym": "COApm3",
    "name": "Cortical amygdalar area, posterior part, medial zone, layer 3",
    "color": "#61E7B7",
    "level": 11,
    "title": "COApm3 (Level 11)"
  },
  {
    "id": 788,
    "label": "Piriform-amygdalar area",
    "acronym": "PAA",
    "name": "Piriform-amygdalar area",
    "color": "#59DAAB",
    "level": 8,
    "title": "PAA (Level 8)"
  },
  {
    "id": 400,
    "label": "Piriform-amygdalar area, layers 1-3",
    "acronym": "PAA1-3",
    "name": "Piriform-amygdalar area, layers 1-3",
    "color": "#59DAAB",
    "level": 11,
    "title": "PAA1-3 (Level 11)"
  },
  {
    "id": 408,
    "label": "Piriform-amygdalar area, molecular layer",
    "acronym": "PAA1",
    "name": "Piriform-amygdalar area, molecular layer",
    "color": "#59DAAB",
    "level": 11,
    "title": "PAA1 (Level 11)"
  },
  {
    "id": 416,
    "label": "Piriform-amygdalar area, pyramidal layer",
    "acronym": "PAA2",
    "name": "Piriform-amygdalar area, pyramidal layer",
    "color": "#59DAAB",
    "level": 11,
    "title": "PAA2 (Level 11)"
  },
  {
    "id": 424,
    "label": "Piriform-amygdalar area, polymorph layer",
    "acronym": "PAA3",
    "name": "Piriform-amygdalar area, polymorph layer",
    "color": "#59DAAB",
    "level": 11,
    "title": "PAA3 (Level 11)"
  },
  {
    "id": 566,
    "label": "Postpiriform transition area",
    "acronym": "TR",
    "name": "Postpiriform transition area",
    "color": "#A8ECD3",
    "level": 8,
    "title": "TR (Level 8)"
  },
  {
    "id": 517,
    "label": "Postpiriform transition area, layers 1-3",
    "acronym": "TR1-3",
    "name": "Postpiriform transition area, layers 1-3",
    "color": "#A8ECD3",
    "level": 11,
    "title": "TR1-3 (Level 11)"
  },
  {
    "id": 1140,
    "label": "Postpiriform transition area, layers 1",
    "acronym": "TR1",
    "name": "Postpiriform transition area, layers 1",
    "color": "#A8ECD3",
    "level": 11,
    "title": "TR1 (Level 11)"
  },
  {
    "id": 1141,
    "label": "Postpiriform transition area, layers 2",
    "acronym": "TR2",
    "name": "Postpiriform transition area, layers 2",
    "color": "#A8ECD3",
    "level": 11,
    "title": "TR2 (Level 11)"
  },
  {
    "id": 1142,
    "label": "Postpiriform transition area, layers 3",
    "acronym": "TR3",
    "name": "Postpiriform transition area, layers 3",
    "color": "#A8ECD3",
    "level": 11,
    "title": "TR3 (Level 11)"
  },
  {
    "id": 1089,
    "label": "Hippocampal formation",
    "acronym": "HPF",
    "name": "Hippocampal formation",
    "color": "#7ED04B",
    "level": 5,
    "title": "HPF (Level 5)"
  },
  {
    "id": 1080,
    "label": "Hippocampal region",
    "acronym": "HIP",
    "name": "Hippocampal region",
    "color": "#7ED04B",
    "level": 6,
    "title": "HIP (Level 6)"
  },
  {
    "id": 375,
    "label": "Ammon's horn",
    "acronym": "CA",
    "name": "Ammon's horn",
    "color": "#7ED04B",
    "level": 8,
    "title": "CA (Level 8)"
  },
  {
    "id": 382,
    "label": "Field CA1",
    "acronym": "CA1",
    "name": "Field CA1",
    "color": "#7ED04B",
    "level": 9,
    "title": "CA1 (Level 9)"
  },
  {
    "id": 391,
    "label": "Field CA1, stratum lacunosum-moleculare",
    "acronym": "CA1slm",
    "name": "Field CA1, stratum lacunosum-moleculare",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA1slm (Level 11)"
  },
  {
    "id": 399,
    "label": "Field CA1, stratum oriens",
    "acronym": "CA1so",
    "name": "Field CA1, stratum oriens",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA1so (Level 11)"
  },
  {
    "id": 407,
    "label": "Field CA1, pyramidal layer",
    "acronym": "CA1sp",
    "name": "Field CA1, pyramidal layer",
    "color": "#66A83D",
    "level": 11,
    "title": "CA1sp (Level 11)"
  },
  {
    "id": 415,
    "label": "Field CA1, stratum radiatum",
    "acronym": "CA1sr",
    "name": "Field CA1, stratum radiatum",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA1sr (Level 11)"
  },
  {
    "id": 423,
    "label": "Field CA2",
    "acronym": "CA2",
    "name": "Field CA2",
    "color": "#7ED04B",
    "level": 9,
    "title": "CA2 (Level 9)"
  },
  {
    "id": 431,
    "label": "Field CA2, stratum lacunosum-moleculare",
    "acronym": "CA2slm",
    "name": "Field CA2, stratum lacunosum-moleculare",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA2slm (Level 11)"
  },
  {
    "id": 438,
    "label": "Field CA2, stratum oriens",
    "acronym": "CA2so",
    "name": "Field CA2, stratum oriens",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA2so (Level 11)"
  },
  {
    "id": 446,
    "label": "Field CA2, pyramidal layer",
    "acronym": "CA2sp",
    "name": "Field CA2, pyramidal layer",
    "color": "#66A83D",
    "level": 11,
    "title": "CA2sp (Level 11)"
  },
  {
    "id": 454,
    "label": "Field CA2, stratum radiatum",
    "acronym": "CA2sr",
    "name": "Field CA2, stratum radiatum",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA2sr (Level 11)"
  },
  {
    "id": 463,
    "label": "Field CA3",
    "acronym": "CA3",
    "name": "Field CA3",
    "color": "#7ED04B",
    "level": 9,
    "title": "CA3 (Level 9)"
  },
  {
    "id": 471,
    "label": "Field CA3, stratum lacunosum-moleculare",
    "acronym": "CA3slm",
    "name": "Field CA3, stratum lacunosum-moleculare",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA3slm (Level 11)"
  },
  {
    "id": 479,
    "label": "Field CA3, stratum lucidum",
    "acronym": "CA3slu",
    "name": "Field CA3, stratum lucidum",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA3slu (Level 11)"
  },
  {
    "id": 486,
    "label": "Field CA3, stratum oriens",
    "acronym": "CA3so",
    "name": "Field CA3, stratum oriens",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA3so (Level 11)"
  },
  {
    "id": 495,
    "label": "Field CA3, pyramidal layer",
    "acronym": "CA3sp",
    "name": "Field CA3, pyramidal layer",
    "color": "#66A83D",
    "level": 11,
    "title": "CA3sp (Level 11)"
  },
  {
    "id": 504,
    "label": "Field CA3, stratum radiatum",
    "acronym": "CA3sr",
    "name": "Field CA3, stratum radiatum",
    "color": "#7ED04B",
    "level": 11,
    "title": "CA3sr (Level 11)"
  },
  {
    "id": 726,
    "label": "Dentate gyrus",
    "acronym": "DG",
    "name": "Dentate gyrus",
    "color": "#7ED04B",
    "level": 8,
    "title": "DG (Level 8)"
  },
  {
    "id": 10703,
    "label": "Dentate gyrus, molecular layer",
    "acronym": "DG-mo",
    "name": "Dentate gyrus, molecular layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DG-mo (Level 11)"
  },
  {
    "id": 10704,
    "label": "Dentate gyrus, polymorph layer",
    "acronym": "DG-po",
    "name": "Dentate gyrus, polymorph layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DG-po (Level 11)"
  },
  {
    "id": 632,
    "label": "Dentate gyrus, granule cell layer",
    "acronym": "DG-sg",
    "name": "Dentate gyrus, granule cell layer",
    "color": "#66A83D",
    "level": 11,
    "title": "DG-sg (Level 11)"
  },
  {
    "id": 10702,
    "label": "Dentate gyrus, subgranular zone",
    "acronym": "DG-sgz",
    "name": "Dentate gyrus, subgranular zone",
    "color": "#7ED04B",
    "level": 11,
    "title": "DG-sgz (Level 11)"
  },
  {
    "id": 734,
    "label": "Dentate gyrus crest",
    "acronym": "DGcr",
    "name": "Dentate gyrus crest",
    "color": "#7ED04B",
    "level": 9,
    "title": "DGcr (Level 9)"
  },
  {
    "id": 742,
    "label": "Dentate gyrus crest, molecular layer",
    "acronym": "DGcr-mo",
    "name": "Dentate gyrus crest, molecular layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGcr-mo (Level 11)"
  },
  {
    "id": 751,
    "label": "Dentate gyrus crest, polymorph layer",
    "acronym": "DGcr-po",
    "name": "Dentate gyrus crest, polymorph layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGcr-po (Level 11)"
  },
  {
    "id": 758,
    "label": "Dentate gyrus crest, granule cell layer",
    "acronym": "DGcr-sg",
    "name": "Dentate gyrus crest, granule cell layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGcr-sg (Level 11)"
  },
  {
    "id": 766,
    "label": "Dentate gyrus lateral blade",
    "acronym": "DGlb",
    "name": "Dentate gyrus lateral blade",
    "color": "#7ED04B",
    "level": 9,
    "title": "DGlb (Level 9)"
  },
  {
    "id": 775,
    "label": "Dentate gyrus lateral blade, molecular layer",
    "acronym": "DGlb-mo",
    "name": "Dentate gyrus lateral blade, molecular layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGlb-mo (Level 11)"
  },
  {
    "id": 782,
    "label": "Dentate gyrus lateral blade, polymorph layer",
    "acronym": "DGlb-po",
    "name": "Dentate gyrus lateral blade, polymorph layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGlb-po (Level 11)"
  },
  {
    "id": 790,
    "label": "Dentate gyrus lateral blade, granule cell layer",
    "acronym": "DGlb-sg",
    "name": "Dentate gyrus lateral blade, granule cell layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGlb-sg (Level 11)"
  },
  {
    "id": 799,
    "label": "Dentate gyrus medial blade",
    "acronym": "DGmb",
    "name": "Dentate gyrus medial blade",
    "color": "#7ED04B",
    "level": 9,
    "title": "DGmb (Level 9)"
  },
  {
    "id": 807,
    "label": "Dentate gyrus medial blade, molecular layer",
    "acronym": "DGmb-mo",
    "name": "Dentate gyrus medial blade, molecular layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGmb-mo (Level 11)"
  },
  {
    "id": 815,
    "label": "Dentate gyrus medial blade, polymorph layer",
    "acronym": "DGmb-po",
    "name": "Dentate gyrus medial blade, polymorph layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGmb-po (Level 11)"
  },
  {
    "id": 823,
    "label": "Dentate gyrus medial blade, granule cell layer",
    "acronym": "DGmb-sg",
    "name": "Dentate gyrus medial blade, granule cell layer",
    "color": "#7ED04B",
    "level": 11,
    "title": "DGmb-sg (Level 11)"
  },
  {
    "id": 982,
    "label": "Fasciola cinerea",
    "acronym": "FC",
    "name": "Fasciola cinerea",
    "color": "#7ED04B",
    "level": 8,
    "title": "FC (Level 8)"
  },
  {
    "id": 19,
    "label": "Induseum griseum",
    "acronym": "IG",
    "name": "Induseum griseum",
    "color": "#7ED04B",
    "level": 8,
    "title": "IG (Level 8)"
  },
  {
    "id": 822,
    "label": "Retrohippocampal region",
    "acronym": "RHP",
    "name": "Retrohippocampal region",
    "color": "#32B825",
    "level": 6,
    "title": "RHP (Level 6)"
  },
  {
    "id": 909,
    "label": "Entorhinal area",
    "acronym": "ENT",
    "name": "Entorhinal area",
    "color": "#32B825",
    "level": 8,
    "title": "ENT (Level 8)"
  },
  {
    "id": 918,
    "label": "Entorhinal area, lateral part",
    "acronym": "ENTl",
    "name": "Entorhinal area, lateral part",
    "color": "#32B825",
    "level": 9,
    "title": "ENTl (Level 9)"
  },
  {
    "id": 1121,
    "label": "Entorhinal area, lateral part, layer 1",
    "acronym": "ENTl1",
    "name": "Entorhinal area, lateral part, layer 1",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl1 (Level 11)"
  },
  {
    "id": 20,
    "label": "Entorhinal area, lateral part, layer 2",
    "acronym": "ENTl2",
    "name": "Entorhinal area, lateral part, layer 2",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl2 (Level 11)"
  },
  {
    "id": 999,
    "label": "Entorhinal area, lateral part, layer 2/3",
    "acronym": "ENTl2/3",
    "name": "Entorhinal area, lateral part, layer 2/3",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl2/3 (Level 11)"
  },
  {
    "id": 715,
    "label": "Entorhinal area, lateral part, layer 2a",
    "acronym": "ENTl2a",
    "name": "Entorhinal area, lateral part, layer 2a",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl2a (Level 11)"
  },
  {
    "id": 764,
    "label": "Entorhinal area, lateral part, layer 2b",
    "acronym": "ENTl2b",
    "name": "Entorhinal area, lateral part, layer 2b",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl2b (Level 11)"
  },
  {
    "id": 52,
    "label": "Entorhinal area, lateral part, layer 3",
    "acronym": "ENTl3",
    "name": "Entorhinal area, lateral part, layer 3",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl3 (Level 11)"
  },
  {
    "id": 92,
    "label": "Entorhinal area, lateral part, layer 4",
    "acronym": "ENTl4",
    "name": "Entorhinal area, lateral part, layer 4",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl4 (Level 11)"
  },
  {
    "id": 312,
    "label": "Entorhinal area, lateral part, layer 4/5",
    "acronym": "ENTl4/5",
    "name": "Entorhinal area, lateral part, layer 4/5",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl4/5 (Level 11)"
  },
  {
    "id": 139,
    "label": "Entorhinal area, lateral part, layer 5",
    "acronym": "ENTl5",
    "name": "Entorhinal area, lateral part, layer 5",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl5 (Level 11)"
  },
  {
    "id": 387,
    "label": "Entorhinal area, lateral part, layer 5/6",
    "acronym": "ENTl5/6",
    "name": "Entorhinal area, lateral part, layer 5/6",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl5/6 (Level 11)"
  },
  {
    "id": 28,
    "label": "Entorhinal area, lateral part, layer 6a",
    "acronym": "ENTl6a",
    "name": "Entorhinal area, lateral part, layer 6a",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl6a (Level 11)"
  },
  {
    "id": 60,
    "label": "Entorhinal area, lateral part, layer 6b",
    "acronym": "ENTl6b",
    "name": "Entorhinal area, lateral part, layer 6b",
    "color": "#32B825",
    "level": 11,
    "title": "ENTl6b (Level 11)"
  },
  {
    "id": 926,
    "label": "Entorhinal area, medial part, dorsal zone",
    "acronym": "ENTm",
    "name": "Entorhinal area, medial part, dorsal zone",
    "color": "#32B825",
    "level": 9,
    "title": "ENTm (Level 9)"
  },
  {
    "id": 526,
    "label": "Entorhinal area, medial part, dorsal zone, layer 1",
    "acronym": "ENTm1",
    "name": "Entorhinal area, medial part, dorsal zone, layer 1",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm1 (Level 11)"
  },
  {
    "id": 543,
    "label": "Entorhinal area, medial part, dorsal zone, layer 2",
    "acronym": "ENTm2",
    "name": "Entorhinal area, medial part, dorsal zone, layer 2",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm2 (Level 11)"
  },
  {
    "id": 468,
    "label": "Entorhinal area, medial part, dorsal zone, layer 2a",
    "acronym": "ENTm2a",
    "name": "Entorhinal area, medial part, dorsal zone, layer 2a",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm2a (Level 11)"
  },
  {
    "id": 508,
    "label": "Entorhinal area, medial part, dorsal zone, layer 2b",
    "acronym": "ENTm2b",
    "name": "Entorhinal area, medial part, dorsal zone, layer 2b",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm2b (Level 11)"
  },
  {
    "id": 664,
    "label": "Entorhinal area, medial part, dorsal zone, layer 3",
    "acronym": "ENTm3",
    "name": "Entorhinal area, medial part, dorsal zone, layer 3",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm3 (Level 11)"
  },
  {
    "id": 712,
    "label": "Entorhinal area, medial part, dorsal zone, layer 4",
    "acronym": "ENTm4",
    "name": "Entorhinal area, medial part, dorsal zone, layer 4",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm4 (Level 11)"
  },
  {
    "id": 727,
    "label": "Entorhinal area, medial part, dorsal zone, layer 5",
    "acronym": "ENTm5",
    "name": "Entorhinal area, medial part, dorsal zone, layer 5",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm5 (Level 11)"
  },
  {
    "id": 550,
    "label": "Entorhinal area, medial part, dorsal zone, layer 5/6",
    "acronym": "ENTm5/6",
    "name": "Entorhinal area, medial part, dorsal zone, layer 5/6",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm5/6 (Level 11)"
  },
  {
    "id": 743,
    "label": "Entorhinal area, medial part, dorsal zone, layer 6",
    "acronym": "ENTm6",
    "name": "Entorhinal area, medial part, dorsal zone, layer 6",
    "color": "#32B825",
    "level": 11,
    "title": "ENTm6 (Level 11)"
  },
  {
    "id": 934,
    "label": "Entorhinal area, medial part, ventral zone",
    "acronym": "ENTmv",
    "name": "Entorhinal area, medial part, ventral zone",
    "color": "#32B825",
    "level": 9,
    "title": "ENTmv (Level 9)"
  },
  {
    "id": 259,
    "label": "Entorhinal area, medial part, ventral zone, layer 1",
    "acronym": "ENTmv1",
    "name": "Entorhinal area, medial part, ventral zone, layer 1",
    "color": "#32B825",
    "level": 11,
    "title": "ENTmv1 (Level 11)"
  },
  {
    "id": 324,
    "label": "Entorhinal area, medial part, ventral zone, layer 2",
    "acronym": "ENTmv2",
    "name": "Entorhinal area, medial part, ventral zone, layer 2",
    "color": "#32B825",
    "level": 11,
    "title": "ENTmv2 (Level 11)"
  },
  {
    "id": 371,
    "label": "Entorhinal area, medial part, ventral zone, layer 3",
    "acronym": "ENTmv3",
    "name": "Entorhinal area, medial part, ventral zone, layer 3",
    "color": "#32B825",
    "level": 11,
    "title": "ENTmv3 (Level 11)"
  },
  {
    "id": 419,
    "label": "Entorhinal area, medial part, ventral zone, layer 4",
    "acronym": "ENTmv4",
    "name": "Entorhinal area, medial part, ventral zone, layer 4",
    "color": "#32B825",
    "level": 11,
    "title": "ENTmv4 (Level 11)"
  },
  {
    "id": 1133,
    "label": "Entorhinal area, medial part, ventral zone, layer 5/6",
    "acronym": "ENTmv5/6",
    "name": "Entorhinal area, medial part, ventral zone, layer 5/6",
    "color": "#32B825",
    "level": 11,
    "title": "ENTmv5/6 (Level 11)"
  },
  {
    "id": 843,
    "label": "Parasubiculum",
    "acronym": "PAR",
    "name": "Parasubiculum",
    "color": "#72D569",
    "level": 8,
    "title": "PAR (Level 8)"
  },
  {
    "id": 10693,
    "label": "Parasubiculum, layer 1",
    "acronym": "PAR1",
    "name": "Parasubiculum, layer 1",
    "color": "#72D569",
    "level": 11,
    "title": "PAR1 (Level 11)"
  },
  {
    "id": 10694,
    "label": "Parasubiculum, layer 2",
    "acronym": "PAR2",
    "name": "Parasubiculum, layer 2",
    "color": "#72D569",
    "level": 11,
    "title": "PAR2 (Level 11)"
  },
  {
    "id": 10695,
    "label": "Parasubiculum, layer 3",
    "acronym": "PAR3",
    "name": "Parasubiculum, layer 3",
    "color": "#72D569",
    "level": 11,
    "title": "PAR3 (Level 11)"
  },
  {
    "id": 1037,
    "label": "Postsubiculum",
    "acronym": "POST",
    "name": "Postsubiculum",
    "color": "#48C83C",
    "level": 8,
    "title": "POST (Level 8)"
  },
  {
    "id": 10696,
    "label": "Postsubiculum, layer 1",
    "acronym": "POST1",
    "name": "Postsubiculum, layer 1",
    "color": "#48C83C",
    "level": 11,
    "title": "POST1 (Level 11)"
  },
  {
    "id": 10697,
    "label": "Postsubiculum, layer 2",
    "acronym": "POST2",
    "name": "Postsubiculum, layer 2",
    "color": "#48C83C",
    "level": 11,
    "title": "POST2 (Level 11)"
  },
  {
    "id": 10698,
    "label": "Postsubiculum, layer 3",
    "acronym": "POST3",
    "name": "Postsubiculum, layer 3",
    "color": "#48C83C",
    "level": 11,
    "title": "POST3 (Level 11)"
  },
  {
    "id": 1084,
    "label": "Presubiculum",
    "acronym": "PRE",
    "name": "Presubiculum",
    "color": "#59B947",
    "level": 8,
    "title": "PRE (Level 8)"
  },
  {
    "id": 10699,
    "label": "Presubiculum, layer 1",
    "acronym": "PRE1",
    "name": "Presubiculum, layer 1",
    "color": "#59B947",
    "level": 11,
    "title": "PRE1 (Level 11)"
  },
  {
    "id": 10700,
    "label": "Presubiculum, layer 2",
    "acronym": "PRE2",
    "name": "Presubiculum, layer 2",
    "color": "#59B947",
    "level": 11,
    "title": "PRE2 (Level 11)"
  },
  {
    "id": 10701,
    "label": "Presubiculum, layer 3",
    "acronym": "PRE3",
    "name": "Presubiculum, layer 3",
    "color": "#59B947",
    "level": 11,
    "title": "PRE3 (Level 11)"
  },
  {
    "id": 502,
    "label": "Subiculum",
    "acronym": "SUB",
    "name": "Subiculum",
    "color": "#4FC244",
    "level": 8,
    "title": "SUB (Level 8)"
  },
  {
    "id": 509,
    "label": "Subiculum, dorsal part",
    "acronym": "SUBd",
    "name": "Subiculum, dorsal part",
    "color": "#4FC244",
    "level": 9,
    "title": "SUBd (Level 9)"
  },
  {
    "id": 829,
    "label": "Subiculum, dorsal part, molecular layer",
    "acronym": "SUBd-m",
    "name": "Subiculum, dorsal part, molecular layer",
    "color": "#4FC244",
    "level": 11,
    "title": "SUBd-m (Level 11)"
  },
  {
    "id": 845,
    "label": "Subiculum, dorsal part, pyramidal layer",
    "acronym": "SUBd-sp",
    "name": "Subiculum, dorsal part, pyramidal layer",
    "color": "#4BB547",
    "level": 11,
    "title": "SUBd-sp (Level 11)"
  },
  {
    "id": 837,
    "label": "Subiculum, dorsal part, stratum radiatum",
    "acronym": "SUBd-sr",
    "name": "Subiculum, dorsal part, stratum radiatum",
    "color": "#4FC244",
    "level": 11,
    "title": "SUBd-sr (Level 11)"
  },
  {
    "id": 518,
    "label": "Subiculum, ventral part",
    "acronym": "SUBv",
    "name": "Subiculum, ventral part",
    "color": "#4FC244",
    "level": 9,
    "title": "SUBv (Level 9)"
  },
  {
    "id": 853,
    "label": "Subiculum, ventral part, molecular layer",
    "acronym": "SUBv-m",
    "name": "Subiculum, ventral part, molecular layer",
    "color": "#4FC244",
    "level": 11,
    "title": "SUBv-m (Level 11)"
  },
  {
    "id": 870,
    "label": "Subiculum, ventral part, pyramidal layer",
    "acronym": "SUBv-sp",
    "name": "Subiculum, ventral part, pyramidal layer",
    "color": "#4BB547",
    "level": 11,
    "title": "SUBv-sp (Level 11)"
  },
  {
    "id": 861,
    "label": "Subiculum, ventral part, stratum radiatum",
    "acronym": "SUBv-sr",
    "name": "Subiculum, ventral part, stratum radiatum",
    "color": "#4FC244",
    "level": 11,
    "title": "SUBv-sr (Level 11)"
  },
  {
    "id": 484682470,
    "label": "Prosubiculum",
    "acronym": "ProS",
    "name": "Prosubiculum",
    "color": "#58BA48",
    "level": 8,
    "title": "ProS (Level 8)"
  },
  {
    "id": 484682475,
    "label": "Prosubiculum, dorsal part",
    "acronym": "ProSd",
    "name": "Prosubiculum, dorsal part",
    "color": "#58BA48",
    "level": 9,
    "title": "ProSd (Level 9)"
  },
  {
    "id": 484682479,
    "label": "Prosubiculum, dorsal part, molecular layer",
    "acronym": "ProSd-m",
    "name": "Prosubiculum, dorsal part, molecular layer",
    "color": "#58BA48",
    "level": 11,
    "title": "ProSd-m (Level 11)"
  },
  {
    "id": 484682483,
    "label": "Prosubiculum, dorsal part, pyramidal layer",
    "acronym": "ProSd-sp",
    "name": "Prosubiculum, dorsal part, pyramidal layer",
    "color": "#56B84B",
    "level": 11,
    "title": "ProSd-sp (Level 11)"
  },
  {
    "id": 484682487,
    "label": "Prosubiculum, dorsal part, stratum radiatum",
    "acronym": "ProSd-sr",
    "name": "Prosubiculum, dorsal part, stratum radiatum",
    "color": "#58BA48",
    "level": 11,
    "title": "ProSd-sr (Level 11)"
  },
  {
    "id": 484682492,
    "label": "Prosubiculum, ventral part",
    "acronym": "ProSv",
    "name": "Prosubiculum, ventral part",
    "color": "#58BA48",
    "level": 9,
    "title": "ProSv (Level 9)"
  },
  {
    "id": 484682496,
    "label": "Prosubiculum, ventral part, molecular layer",
    "acronym": "ProSv-m",
    "name": "Prosubiculum, ventral part, molecular layer",
    "color": "#58BA48",
    "level": 11,
    "title": "ProSv-m (Level 11)"
  },
  {
    "id": 484682500,
    "label": "Prosubiculum, ventral part, pyramidal layer",
    "acronym": "ProSv-sp",
    "name": "Prosubiculum, ventral part, pyramidal layer",
    "color": "#56B84B",
    "level": 11,
    "title": "ProSv-sp (Level 11)"
  },
  {
    "id": 484682504,
    "label": "Prosubiculum, ventral part, stratum radiatum",
    "acronym": "Prosv-sr",
    "name": "Prosubiculum, ventral part, stratum radiatum",
    "color": "#58BA48",
    "level": 11,
    "title": "Prosv-sr (Level 11)"
  },
  {
    "id": 589508447,
    "label": "Hippocampo-amygdalar transition area",
    "acronym": "HATA",
    "name": "Hippocampo-amygdalar transition area",
    "color": "#33B932",
    "level": 8,
    "title": "HATA (Level 8)"
  },
  {
    "id": 484682508,
    "label": "Area prostriata",
    "acronym": "APr",
    "name": "Area prostriata",
    "color": "#33B932",
    "level": 8,
    "title": "APr (Level 8)"
  },
  {
    "id": 703,
    "label": "Cortical subplate",
    "acronym": "CTXsp",
    "name": "Cortical subplate",
    "color": "#8ADA87",
    "level": 5,
    "title": "CTXsp (Level 5)"
  },
  {
    "id": 16,
    "label": "Layer 6b, isocortex",
    "acronym": "6b",
    "name": "Layer 6b, isocortex",
    "color": "#8ADA87",
    "level": 11,
    "title": "6b (Level 11)"
  },
  {
    "id": 583,
    "label": "Claustrum",
    "acronym": "CLA",
    "name": "Claustrum",
    "color": "#8ADA87",
    "level": 8,
    "title": "CLA (Level 8)"
  },
  {
    "id": 942,
    "label": "Endopiriform nucleus",
    "acronym": "EP",
    "name": "Endopiriform nucleus",
    "color": "#A0EE9D",
    "level": 8,
    "title": "EP (Level 8)"
  },
  {
    "id": 952,
    "label": "Endopiriform nucleus, dorsal part",
    "acronym": "EPd",
    "name": "Endopiriform nucleus, dorsal part",
    "color": "#A0EE9D",
    "level": 9,
    "title": "EPd (Level 9)"
  },
  {
    "id": 966,
    "label": "Endopiriform nucleus, ventral part",
    "acronym": "EPv",
    "name": "Endopiriform nucleus, ventral part",
    "color": "#A0EE9D",
    "level": 9,
    "title": "EPv (Level 9)"
  },
  {
    "id": 131,
    "label": "Lateral amygdalar nucleus",
    "acronym": "LA",
    "name": "Lateral amygdalar nucleus",
    "color": "#90EB8D",
    "level": 8,
    "title": "LA (Level 8)"
  },
  {
    "id": 295,
    "label": "Basolateral amygdalar nucleus",
    "acronym": "BLA",
    "name": "Basolateral amygdalar nucleus",
    "color": "#9DE79C",
    "level": 8,
    "title": "BLA (Level 8)"
  },
  {
    "id": 303,
    "label": "Basolateral amygdalar nucleus, anterior part",
    "acronym": "BLAa",
    "name": "Basolateral amygdalar nucleus, anterior part",
    "color": "#9DE79C",
    "level": 9,
    "title": "BLAa (Level 9)"
  },
  {
    "id": 311,
    "label": "Basolateral amygdalar nucleus, posterior part",
    "acronym": "BLAp",
    "name": "Basolateral amygdalar nucleus, posterior part",
    "color": "#9DE79C",
    "level": 9,
    "title": "BLAp (Level 9)"
  },
  {
    "id": 451,
    "label": "Basolateral amygdalar nucleus, ventral part",
    "acronym": "BLAv",
    "name": "Basolateral amygdalar nucleus, ventral part",
    "color": "#9DE79C",
    "level": 9,
    "title": "BLAv (Level 9)"
  },
  {
    "id": 319,
    "label": "Basomedial amygdalar nucleus",
    "acronym": "BMA",
    "name": "Basomedial amygdalar nucleus",
    "color": "#84EA81",
    "level": 8,
    "title": "BMA (Level 8)"
  },
  {
    "id": 327,
    "label": "Basomedial amygdalar nucleus, anterior part",
    "acronym": "BMAa",
    "name": "Basomedial amygdalar nucleus, anterior part",
    "color": "#84EA81",
    "level": 9,
    "title": "BMAa (Level 9)"
  },
  {
    "id": 334,
    "label": "Basomedial amygdalar nucleus, posterior part",
    "acronym": "BMAp",
    "name": "Basomedial amygdalar nucleus, posterior part",
    "color": "#84EA81",
    "level": 9,
    "title": "BMAp (Level 9)"
  },
  {
    "id": 780,
    "label": "Posterior amygdalar nucleus",
    "acronym": "PA",
    "name": "Posterior amygdalar nucleus",
    "color": "#97EC93",
    "level": 8,
    "title": "PA (Level 8)"
  },
  {
    "id": 623,
    "label": "Cerebral nuclei",
    "acronym": "CNU",
    "name": "Cerebral nuclei",
    "color": "#98D6F9",
    "level": 3,
    "title": "CNU (Level 3)"
  },
  {
    "id": 477,
    "label": "Striatum",
    "acronym": "STR",
    "name": "Striatum",
    "color": "#98D6F9",
    "level": 5,
    "title": "STR (Level 5)"
  },
  {
    "id": 485,
    "label": "Striatum dorsal region",
    "acronym": "STRd",
    "name": "Striatum dorsal region",
    "color": "#98D6F9",
    "level": 6,
    "title": "STRd (Level 6)"
  },
  {
    "id": 672,
    "label": "Caudoputamen",
    "acronym": "CP",
    "name": "Caudoputamen",
    "color": "#98D6F9",
    "level": 8,
    "title": "CP (Level 8)"
  },
  {
    "id": 493,
    "label": "Striatum ventral region",
    "acronym": "STRv",
    "name": "Striatum ventral region",
    "color": "#80CDF8",
    "level": 6,
    "title": "STRv (Level 6)"
  },
  {
    "id": 56,
    "label": "Nucleus accumbens",
    "acronym": "ACB",
    "name": "Nucleus accumbens",
    "color": "#80CDF8",
    "level": 8,
    "title": "ACB (Level 8)"
  },
  {
    "id": 998,
    "label": "Fundus of striatum",
    "acronym": "FS",
    "name": "Fundus of striatum",
    "color": "#80CDF8",
    "level": 8,
    "title": "FS (Level 8)"
  },
  {
    "id": 754,
    "label": "Olfactory tubercle",
    "acronym": "OT",
    "name": "Olfactory tubercle",
    "color": "#80CDF8",
    "level": 8,
    "title": "OT (Level 8)"
  },
  {
    "id": 481,
    "label": "Islands of Calleja",
    "acronym": "isl",
    "name": "Islands of Calleja",
    "color": "#80CDF8",
    "level": 9,
    "title": "isl (Level 9)"
  },
  {
    "id": 489,
    "label": "Major island of Calleja",
    "acronym": "islm",
    "name": "Major island of Calleja",
    "color": "#80CDF8",
    "level": 9,
    "title": "islm (Level 9)"
  },
  {
    "id": 144,
    "label": "Olfactory tubercle, layers 1-3",
    "acronym": "OT1-3",
    "name": "Olfactory tubercle, layers 1-3",
    "color": "#80CDF8",
    "level": 11,
    "title": "OT1-3 (Level 11)"
  },
  {
    "id": 458,
    "label": "Olfactory tubercle, molecular layer",
    "acronym": "OT1",
    "name": "Olfactory tubercle, molecular layer",
    "color": "#80CDF8",
    "level": 11,
    "title": "OT1 (Level 11)"
  },
  {
    "id": 465,
    "label": "Olfactory tubercle, pyramidal layer",
    "acronym": "OT2",
    "name": "Olfactory tubercle, pyramidal layer",
    "color": "#80CDF8",
    "level": 11,
    "title": "OT2 (Level 11)"
  },
  {
    "id": 473,
    "label": "Olfactory tubercle, polymorph layer",
    "acronym": "OT3",
    "name": "Olfactory tubercle, polymorph layer",
    "color": "#80CDF8",
    "level": 11,
    "title": "OT3 (Level 11)"
  },
  {
    "id": 549009199,
    "label": "Lateral strip of striatum",
    "acronym": "LSS",
    "name": "Lateral strip of striatum",
    "color": "#80CDF8",
    "level": 8,
    "title": "LSS (Level 8)"
  },
  {
    "id": 275,
    "label": "Lateral septal complex",
    "acronym": "LSX",
    "name": "Lateral septal complex",
    "color": "#90CBED",
    "level": 6,
    "title": "LSX (Level 6)"
  },
  {
    "id": 242,
    "label": "Lateral septal nucleus",
    "acronym": "LS",
    "name": "Lateral septal nucleus",
    "color": "#90CBED",
    "level": 8,
    "title": "LS (Level 8)"
  },
  {
    "id": 250,
    "label": "Lateral septal nucleus, caudal (caudodorsal) part",
    "acronym": "LSc",
    "name": "Lateral septal nucleus, caudal (caudodorsal) part",
    "color": "#90CBED",
    "level": 9,
    "title": "LSc (Level 9)"
  },
  {
    "id": 258,
    "label": "Lateral septal nucleus, rostral (rostroventral) part",
    "acronym": "LSr",
    "name": "Lateral septal nucleus, rostral (rostroventral) part",
    "color": "#90CBED",
    "level": 9,
    "title": "LSr (Level 9)"
  },
  {
    "id": 266,
    "label": "Lateral septal nucleus, ventral part",
    "acronym": "LSv",
    "name": "Lateral septal nucleus, ventral part",
    "color": "#90CBED",
    "level": 9,
    "title": "LSv (Level 9)"
  },
  {
    "id": 310,
    "label": "Septofimbrial nucleus",
    "acronym": "SF",
    "name": "Septofimbrial nucleus",
    "color": "#90CBED",
    "level": 8,
    "title": "SF (Level 8)"
  },
  {
    "id": 333,
    "label": "Septohippocampal nucleus",
    "acronym": "SH",
    "name": "Septohippocampal nucleus",
    "color": "#90CBED",
    "level": 8,
    "title": "SH (Level 8)"
  },
  {
    "id": 278,
    "label": "Striatum-like amygdalar nuclei",
    "acronym": "sAMY",
    "name": "Striatum-like amygdalar nuclei",
    "color": "#80C0E2",
    "level": 6,
    "title": "sAMY (Level 6)"
  },
  {
    "id": 23,
    "label": "Anterior amygdalar area",
    "acronym": "AAA",
    "name": "Anterior amygdalar area",
    "color": "#80C0E2",
    "level": 8,
    "title": "AAA (Level 8)"
  },
  {
    "id": 292,
    "label": "Bed nucleus of the accessory olfactory tract",
    "acronym": "BA",
    "name": "Bed nucleus of the accessory olfactory tract",
    "color": "#80C0E2",
    "level": 8,
    "title": "BA (Level 8)"
  },
  {
    "id": 536,
    "label": "Central amygdalar nucleus",
    "acronym": "CEA",
    "name": "Central amygdalar nucleus",
    "color": "#80C0E2",
    "level": 8,
    "title": "CEA (Level 8)"
  },
  {
    "id": 544,
    "label": "Central amygdalar nucleus, capsular part",
    "acronym": "CEAc",
    "name": "Central amygdalar nucleus, capsular part",
    "color": "#80C0E2",
    "level": 9,
    "title": "CEAc (Level 9)"
  },
  {
    "id": 551,
    "label": "Central amygdalar nucleus, lateral part",
    "acronym": "CEAl",
    "name": "Central amygdalar nucleus, lateral part",
    "color": "#80C0E2",
    "level": 9,
    "title": "CEAl (Level 9)"
  },
  {
    "id": 559,
    "label": "Central amygdalar nucleus, medial part",
    "acronym": "CEAm",
    "name": "Central amygdalar nucleus, medial part",
    "color": "#80C0E2",
    "level": 9,
    "title": "CEAm (Level 9)"
  },
  {
    "id": 1105,
    "label": "Intercalated amygdalar nucleus",
    "acronym": "IA",
    "name": "Intercalated amygdalar nucleus",
    "color": "#80C0E2",
    "level": 8,
    "title": "IA (Level 8)"
  },
  {
    "id": 403,
    "label": "Medial amygdalar nucleus",
    "acronym": "MEA",
    "name": "Medial amygdalar nucleus",
    "color": "#80C0E2",
    "level": 8,
    "title": "MEA (Level 8)"
  },
  {
    "id": 411,
    "label": "Medial amygdalar nucleus, anterodorsal part",
    "acronym": "MEAad",
    "name": "Medial amygdalar nucleus, anterodorsal part",
    "color": "#80C0E2",
    "level": 9,
    "title": "MEAad (Level 9)"
  },
  {
    "id": 418,
    "label": "Medial amygdalar nucleus, anteroventral part",
    "acronym": "MEAav",
    "name": "Medial amygdalar nucleus, anteroventral part",
    "color": "#80C0E2",
    "level": 9,
    "title": "MEAav (Level 9)"
  },
  {
    "id": 426,
    "label": "Medial amygdalar nucleus, posterodorsal part",
    "acronym": "MEApd",
    "name": "Medial amygdalar nucleus, posterodorsal part",
    "color": "#80C0E2",
    "level": 9,
    "title": "MEApd (Level 9)"
  },
  {
    "id": 472,
    "label": "Medial amygdalar nucleus, posterodorsal part, sublayer a",
    "acronym": "MEApd-a",
    "name": "Medial amygdalar nucleus, posterodorsal part, sublayer a",
    "color": "#80C0E2",
    "level": 11,
    "title": "MEApd-a (Level 11)"
  },
  {
    "id": 480,
    "label": "Medial amygdalar nucleus, posterodorsal part, sublayer b",
    "acronym": "MEApd-b",
    "name": "Medial amygdalar nucleus, posterodorsal part, sublayer b",
    "color": "#80C0E2",
    "level": 11,
    "title": "MEApd-b (Level 11)"
  },
  {
    "id": 487,
    "label": "Medial amygdalar nucleus, posterodorsal part, sublayer c",
    "acronym": "MEApd-c",
    "name": "Medial amygdalar nucleus, posterodorsal part, sublayer c",
    "color": "#80C0E2",
    "level": 11,
    "title": "MEApd-c (Level 11)"
  },
  {
    "id": 435,
    "label": "Medial amygdalar nucleus, posteroventral part",
    "acronym": "MEApv",
    "name": "Medial amygdalar nucleus, posteroventral part",
    "color": "#80C0E2",
    "level": 9,
    "title": "MEApv (Level 9)"
  },
  {
    "id": 803,
    "label": "Pallidum",
    "acronym": "PAL",
    "name": "Pallidum",
    "color": "#8599CC",
    "level": 5,
    "title": "PAL (Level 5)"
  },
  {
    "id": 818,
    "label": "Pallidum, dorsal region",
    "acronym": "PALd",
    "name": "Pallidum, dorsal region",
    "color": "#8599CC",
    "level": 6,
    "title": "PALd (Level 6)"
  },
  {
    "id": 1022,
    "label": "Globus pallidus, external segment",
    "acronym": "GPe",
    "name": "Globus pallidus, external segment",
    "color": "#8599CC",
    "level": 8,
    "title": "GPe (Level 8)"
  },
  {
    "id": 1031,
    "label": "Globus pallidus, internal segment",
    "acronym": "GPi",
    "name": "Globus pallidus, internal segment",
    "color": "#8599CC",
    "level": 8,
    "title": "GPi (Level 8)"
  },
  {
    "id": 835,
    "label": "Pallidum, ventral region",
    "acronym": "PALv",
    "name": "Pallidum, ventral region",
    "color": "#A2B1D8",
    "level": 6,
    "title": "PALv (Level 6)"
  },
  {
    "id": 342,
    "label": "Substantia innominata",
    "acronym": "SI",
    "name": "Substantia innominata",
    "color": "#A2B1D8",
    "level": 8,
    "title": "SI (Level 8)"
  },
  {
    "id": 298,
    "label": "Magnocellular nucleus",
    "acronym": "MA",
    "name": "Magnocellular nucleus",
    "color": "#A2B1D8",
    "level": 8,
    "title": "MA (Level 8)"
  },
  {
    "id": 826,
    "label": "Pallidum, medial region",
    "acronym": "PALm",
    "name": "Pallidum, medial region",
    "color": "#96A7D3",
    "level": 6,
    "title": "PALm (Level 6)"
  },
  {
    "id": 904,
    "label": "Medial septal complex",
    "acronym": "MSC",
    "name": "Medial septal complex",
    "color": "#96A7D3",
    "level": 8,
    "title": "MSC (Level 8)"
  },
  {
    "id": 564,
    "label": "Medial septal nucleus",
    "acronym": "MS",
    "name": "Medial septal nucleus",
    "color": "#96A7D3",
    "level": 9,
    "title": "MS (Level 9)"
  },
  {
    "id": 596,
    "label": "Diagonal band nucleus",
    "acronym": "NDB",
    "name": "Diagonal band nucleus",
    "color": "#96A7D3",
    "level": 9,
    "title": "NDB (Level 9)"
  },
  {
    "id": 581,
    "label": "Triangular nucleus of septum",
    "acronym": "TRS",
    "name": "Triangular nucleus of septum",
    "color": "#96A7D3",
    "level": 8,
    "title": "TRS (Level 8)"
  },
  {
    "id": 809,
    "label": "Pallidum, caudal region",
    "acronym": "PALc",
    "name": "Pallidum, caudal region",
    "color": "#B3C0DF",
    "level": 6,
    "title": "PALc (Level 6)"
  },
  {
    "id": 351,
    "label": "Bed nuclei of the stria terminalis",
    "acronym": "BST",
    "name": "Bed nuclei of the stria terminalis",
    "color": "#B3C0DF",
    "level": 8,
    "title": "BST (Level 8)"
  },
  {
    "id": 359,
    "label": "Bed nuclei of the stria terminalis, anterior division",
    "acronym": "BSTa",
    "name": "Bed nuclei of the stria terminalis, anterior division",
    "color": "#B3C0DF",
    "level": 9,
    "title": "BSTa (Level 9)"
  },
  {
    "id": 537,
    "label": "Bed nuclei of the stria terminalis, anterior division, anterolateral area",
    "acronym": "BSTal",
    "name": "Bed nuclei of the stria terminalis, anterior division, anterolateral area",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTal (Level 10)"
  },
  {
    "id": 498,
    "label": "Bed nuclei of the stria terminalis, anterior division, anteromedial area",
    "acronym": "BSTam",
    "name": "Bed nuclei of the stria terminalis, anterior division, anteromedial area",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTam (Level 10)"
  },
  {
    "id": 505,
    "label": "Bed nuclei of the stria terminalis, anterior division, dorsomedial nucleus",
    "acronym": "BSTdm",
    "name": "Bed nuclei of the stria terminalis, anterior division, dorsomedial nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTdm (Level 10)"
  },
  {
    "id": 513,
    "label": "Bed nuclei of the stria terminalis, anterior division, fusiform nucleus",
    "acronym": "BSTfu",
    "name": "Bed nuclei of the stria terminalis, anterior division, fusiform nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTfu (Level 10)"
  },
  {
    "id": 546,
    "label": "Bed nuclei of the stria terminalis, anterior division, juxtacapsular nucleus",
    "acronym": "BSTju",
    "name": "Bed nuclei of the stria terminalis, anterior division, juxtacapsular nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTju (Level 10)"
  },
  {
    "id": 521,
    "label": "Bed nuclei of the stria terminalis, anterior division, magnocellular nucleus",
    "acronym": "BSTmg",
    "name": "Bed nuclei of the stria terminalis, anterior division, magnocellular nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTmg (Level 10)"
  },
  {
    "id": 554,
    "label": "Bed nuclei of the stria terminalis, anterior division, oval nucleus",
    "acronym": "BSTov",
    "name": "Bed nuclei of the stria terminalis, anterior division, oval nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTov (Level 10)"
  },
  {
    "id": 562,
    "label": "Bed nuclei of the stria terminalis, anterior division, rhomboid nucleus",
    "acronym": "BSTrh",
    "name": "Bed nuclei of the stria terminalis, anterior division, rhomboid nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTrh (Level 10)"
  },
  {
    "id": 529,
    "label": "Bed nuclei of the stria terminalis, anterior division, ventral nucleus",
    "acronym": "BSTv",
    "name": "Bed nuclei of the stria terminalis, anterior division, ventral nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTv (Level 10)"
  },
  {
    "id": 367,
    "label": "Bed nuclei of the stria terminalis, posterior division",
    "acronym": "BSTp",
    "name": "Bed nuclei of the stria terminalis, posterior division",
    "color": "#B3C0DF",
    "level": 9,
    "title": "BSTp (Level 9)"
  },
  {
    "id": 569,
    "label": "Bed nuclei of the stria terminalis, posterior division, dorsal nucleus",
    "acronym": "BSTd",
    "name": "Bed nuclei of the stria terminalis, posterior division, dorsal nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTd (Level 10)"
  },
  {
    "id": 578,
    "label": "Bed nuclei of the stria terminalis, posterior division, principal nucleus",
    "acronym": "BSTpr",
    "name": "Bed nuclei of the stria terminalis, posterior division, principal nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTpr (Level 10)"
  },
  {
    "id": 585,
    "label": "Bed nuclei of the stria terminalis, posterior division, interfascicular nucleus",
    "acronym": "BSTif",
    "name": "Bed nuclei of the stria terminalis, posterior division, interfascicular nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTif (Level 10)"
  },
  {
    "id": 594,
    "label": "Bed nuclei of the stria terminalis, posterior division, transverse nucleus",
    "acronym": "BSTtr",
    "name": "Bed nuclei of the stria terminalis, posterior division, transverse nucleus",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTtr (Level 10)"
  },
  {
    "id": 602,
    "label": "Bed nuclei of the stria terminalis, posterior division, strial extension",
    "acronym": "BSTse",
    "name": "Bed nuclei of the stria terminalis, posterior division, strial extension",
    "color": "#B3C0DF",
    "level": 10,
    "title": "BSTse (Level 10)"
  },
  {
    "id": 287,
    "label": "Bed nucleus of the anterior commissure",
    "acronym": "BAC",
    "name": "Bed nucleus of the anterior commissure",
    "color": "#B3C0DF",
    "level": 8,
    "title": "BAC (Level 8)"
  },
  {
    "id": 343,
    "label": "Brain stem",
    "acronym": "BS",
    "name": "Brain stem",
    "color": "#FF7080",
    "level": 2,
    "title": "BS (Level 2)"
  },
  {
    "id": 1129,
    "label": "Interbrain",
    "acronym": "IB",
    "name": "Interbrain",
    "color": "#FF7080",
    "level": 3,
    "title": "IB (Level 3)"
  },
  {
    "id": 549,
    "label": "Thalamus",
    "acronym": "TH",
    "name": "Thalamus",
    "color": "#FF7080",
    "level": 5,
    "title": "TH (Level 5)"
  },
  {
    "id": 864,
    "label": "Thalamus, sensory-motor cortex related",
    "acronym": "DORsm",
    "name": "Thalamus, sensory-motor cortex related",
    "color": "#FF8084",
    "level": 6,
    "title": "DORsm (Level 6)"
  },
  {
    "id": 637,
    "label": "Ventral group of the dorsal thalamus",
    "acronym": "VENT",
    "name": "Ventral group of the dorsal thalamus",
    "color": "#FF8084",
    "level": 7,
    "title": "VENT (Level 7)"
  },
  {
    "id": 629,
    "label": "Ventral anterior-lateral complex of the thalamus",
    "acronym": "VAL",
    "name": "Ventral anterior-lateral complex of the thalamus",
    "color": "#FF8084",
    "level": 8,
    "title": "VAL (Level 8)"
  },
  {
    "id": 685,
    "label": "Ventral medial nucleus of the thalamus",
    "acronym": "VM",
    "name": "Ventral medial nucleus of the thalamus",
    "color": "#FF8084",
    "level": 8,
    "title": "VM (Level 8)"
  },
  {
    "id": 709,
    "label": "Ventral posterior complex of the thalamus",
    "acronym": "VP",
    "name": "Ventral posterior complex of the thalamus",
    "color": "#FF8084",
    "level": 8,
    "title": "VP (Level 8)"
  },
  {
    "id": 718,
    "label": "Ventral posterolateral nucleus of the thalamus",
    "acronym": "VPL",
    "name": "Ventral posterolateral nucleus of the thalamus",
    "color": "#FF8084",
    "level": 9,
    "title": "VPL (Level 9)"
  },
  {
    "id": 725,
    "label": "Ventral posterolateral nucleus of the thalamus, parvicellular part",
    "acronym": "VPLpc",
    "name": "Ventral posterolateral nucleus of the thalamus, parvicellular part",
    "color": "#FF8084",
    "level": 9,
    "title": "VPLpc (Level 9)"
  },
  {
    "id": 733,
    "label": "Ventral posteromedial nucleus of the thalamus",
    "acronym": "VPM",
    "name": "Ventral posteromedial nucleus of the thalamus",
    "color": "#FF8084",
    "level": 9,
    "title": "VPM (Level 9)"
  },
  {
    "id": 741,
    "label": "Ventral posteromedial nucleus of the thalamus, parvicellular part",
    "acronym": "VPMpc",
    "name": "Ventral posteromedial nucleus of the thalamus, parvicellular part",
    "color": "#FF8084",
    "level": 9,
    "title": "VPMpc (Level 9)"
  },
  {
    "id": 563807435,
    "label": "Posterior triangular thalamic nucleus",
    "acronym": "PoT",
    "name": "Posterior triangular thalamic nucleus",
    "color": "#FF8084",
    "level": 8,
    "title": "PoT (Level 8)"
  },
  {
    "id": 406,
    "label": "Subparafascicular nucleus",
    "acronym": "SPF",
    "name": "Subparafascicular nucleus",
    "color": "#FF8084",
    "level": 8,
    "title": "SPF (Level 8)"
  },
  {
    "id": 414,
    "label": "Subparafascicular nucleus, magnocellular part",
    "acronym": "SPFm",
    "name": "Subparafascicular nucleus, magnocellular part",
    "color": "#FF8084",
    "level": 9,
    "title": "SPFm (Level 9)"
  },
  {
    "id": 422,
    "label": "Subparafascicular nucleus, parvicellular part",
    "acronym": "SPFp",
    "name": "Subparafascicular nucleus, parvicellular part",
    "color": "#FF8084",
    "level": 9,
    "title": "SPFp (Level 9)"
  },
  {
    "id": 609,
    "label": "Subparafascicular area",
    "acronym": "SPA",
    "name": "Subparafascicular area",
    "color": "#FF8084",
    "level": 8,
    "title": "SPA (Level 8)"
  },
  {
    "id": 1044,
    "label": "Peripeduncular nucleus",
    "acronym": "PP",
    "name": "Peripeduncular nucleus",
    "color": "#FF8084",
    "level": 8,
    "title": "PP (Level 8)"
  },
  {
    "id": 1008,
    "label": "Geniculate group, dorsal thalamus",
    "acronym": "GENd",
    "name": "Geniculate group, dorsal thalamus",
    "color": "#FF8084",
    "level": 7,
    "title": "GENd (Level 7)"
  },
  {
    "id": 475,
    "label": "Medial geniculate complex",
    "acronym": "MG",
    "name": "Medial geniculate complex",
    "color": "#FF8084",
    "level": 8,
    "title": "MG (Level 8)"
  },
  {
    "id": 1072,
    "label": "Medial geniculate complex, dorsal part",
    "acronym": "MGd",
    "name": "Medial geniculate complex, dorsal part",
    "color": "#FF8084",
    "level": 9,
    "title": "MGd (Level 9)"
  },
  {
    "id": 1079,
    "label": "Medial geniculate complex, ventral part",
    "acronym": "MGv",
    "name": "Medial geniculate complex, ventral part",
    "color": "#FF8084",
    "level": 9,
    "title": "MGv (Level 9)"
  },
  {
    "id": 1088,
    "label": "Medial geniculate complex, medial part",
    "acronym": "MGm",
    "name": "Medial geniculate complex, medial part",
    "color": "#FF8084",
    "level": 9,
    "title": "MGm (Level 9)"
  },
  {
    "id": 170,
    "label": "Dorsal part of the lateral geniculate complex",
    "acronym": "LGd",
    "name": "Dorsal part of the lateral geniculate complex",
    "color": "#FF8084",
    "level": 8,
    "title": "LGd (Level 8)"
  },
  {
    "id": 496345664,
    "label": "Dorsal part of the lateral geniculate complex, shell",
    "acronym": "LGd-sh",
    "name": "Dorsal part of the lateral geniculate complex, shell",
    "color": "#FF8084",
    "level": 9,
    "title": "LGd-sh (Level 9)"
  },
  {
    "id": 496345668,
    "label": "Dorsal part of the lateral geniculate complex, core",
    "acronym": "LGd-co",
    "name": "Dorsal part of the lateral geniculate complex, core",
    "color": "#FF8084",
    "level": 9,
    "title": "LGd-co (Level 9)"
  },
  {
    "id": 496345672,
    "label": "Dorsal part of the lateral geniculate complex, ipsilateral zone",
    "acronym": "LGd-ip",
    "name": "Dorsal part of the lateral geniculate complex, ipsilateral zone",
    "color": "#FF8084",
    "level": 9,
    "title": "LGd-ip (Level 9)"
  },
  {
    "id": 856,
    "label": "Thalamus, polymodal association cortex related",
    "acronym": "DORpm",
    "name": "Thalamus, polymodal association cortex related",
    "color": "#FF909F",
    "level": 6,
    "title": "DORpm (Level 6)"
  },
  {
    "id": 138,
    "label": "Lateral group of the dorsal thalamus",
    "acronym": "LAT",
    "name": "Lateral group of the dorsal thalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "LAT (Level 7)"
  },
  {
    "id": 218,
    "label": "Lateral posterior nucleus of the thalamus",
    "acronym": "LP",
    "name": "Lateral posterior nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "LP (Level 8)"
  },
  {
    "id": 1020,
    "label": "Posterior complex of the thalamus",
    "acronym": "PO",
    "name": "Posterior complex of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "PO (Level 8)"
  },
  {
    "id": 1029,
    "label": "Posterior limiting nucleus of the thalamus",
    "acronym": "POL",
    "name": "Posterior limiting nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "POL (Level 8)"
  },
  {
    "id": 325,
    "label": "Suprageniculate nucleus",
    "acronym": "SGN",
    "name": "Suprageniculate nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "SGN (Level 8)"
  },
  {
    "id": 560581551,
    "label": "Ethmoid nucleus of the thalamus",
    "acronym": "Eth",
    "name": "Ethmoid nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "Eth (Level 8)"
  },
  {
    "id": 560581555,
    "label": "Retroethmoid nucleus",
    "acronym": "REth",
    "name": "Retroethmoid nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "REth (Level 8)"
  },
  {
    "id": 239,
    "label": "Anterior group of the dorsal thalamus",
    "acronym": "ATN",
    "name": "Anterior group of the dorsal thalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "ATN (Level 7)"
  },
  {
    "id": 255,
    "label": "Anteroventral nucleus of thalamus",
    "acronym": "AV",
    "name": "Anteroventral nucleus of thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "AV (Level 8)"
  },
  {
    "id": 127,
    "label": "Anteromedial nucleus",
    "acronym": "AM",
    "name": "Anteromedial nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "AM (Level 8)"
  },
  {
    "id": 1096,
    "label": "Anteromedial nucleus, dorsal part",
    "acronym": "AMd",
    "name": "Anteromedial nucleus, dorsal part",
    "color": "#FF909F",
    "level": 9,
    "title": "AMd (Level 9)"
  },
  {
    "id": 1104,
    "label": "Anteromedial nucleus, ventral part",
    "acronym": "AMv",
    "name": "Anteromedial nucleus, ventral part",
    "color": "#FF909F",
    "level": 9,
    "title": "AMv (Level 9)"
  },
  {
    "id": 64,
    "label": "Anterodorsal nucleus",
    "acronym": "AD",
    "name": "Anterodorsal nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "AD (Level 8)"
  },
  {
    "id": 1120,
    "label": "Interanteromedial nucleus of the thalamus",
    "acronym": "IAM",
    "name": "Interanteromedial nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "IAM (Level 8)"
  },
  {
    "id": 1113,
    "label": "Interanterodorsal nucleus of the thalamus",
    "acronym": "IAD",
    "name": "Interanterodorsal nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "IAD (Level 8)"
  },
  {
    "id": 155,
    "label": "Lateral dorsal nucleus of thalamus",
    "acronym": "LD",
    "name": "Lateral dorsal nucleus of thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "LD (Level 8)"
  },
  {
    "id": 444,
    "label": "Medial group of the dorsal thalamus",
    "acronym": "MED",
    "name": "Medial group of the dorsal thalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "MED (Level 7)"
  },
  {
    "id": 59,
    "label": "Intermediodorsal nucleus of the thalamus",
    "acronym": "IMD",
    "name": "Intermediodorsal nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "IMD (Level 8)"
  },
  {
    "id": 362,
    "label": "Mediodorsal nucleus of thalamus",
    "acronym": "MD",
    "name": "Mediodorsal nucleus of thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "MD (Level 8)"
  },
  {
    "id": 617,
    "label": "Mediodorsal nucleus of the thalamus, central part",
    "acronym": "MDc",
    "name": "Mediodorsal nucleus of the thalamus, central part",
    "color": "#FF909F",
    "level": 9,
    "title": "MDc (Level 9)"
  },
  {
    "id": 626,
    "label": "Mediodorsal nucleus of the thalamus, lateral part",
    "acronym": "MDl",
    "name": "Mediodorsal nucleus of the thalamus, lateral part",
    "color": "#FF909F",
    "level": 9,
    "title": "MDl (Level 9)"
  },
  {
    "id": 636,
    "label": "Mediodorsal nucleus of the thalamus, medial part",
    "acronym": "MDm",
    "name": "Mediodorsal nucleus of the thalamus, medial part",
    "color": "#FF909F",
    "level": 9,
    "title": "MDm (Level 9)"
  },
  {
    "id": 366,
    "label": "Submedial nucleus of the thalamus",
    "acronym": "SMT",
    "name": "Submedial nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "SMT (Level 8)"
  },
  {
    "id": 1077,
    "label": "Perireunensis nucleus",
    "acronym": "PR",
    "name": "Perireunensis nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "PR (Level 8)"
  },
  {
    "id": 571,
    "label": "Midline group of the dorsal thalamus",
    "acronym": "MTN",
    "name": "Midline group of the dorsal thalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "MTN (Level 7)"
  },
  {
    "id": 149,
    "label": "Paraventricular nucleus of the thalamus",
    "acronym": "PVT",
    "name": "Paraventricular nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "PVT (Level 8)"
  },
  {
    "id": 15,
    "label": "Parataenial nucleus",
    "acronym": "PT",
    "name": "Parataenial nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "PT (Level 8)"
  },
  {
    "id": 181,
    "label": "Nucleus of reuniens",
    "acronym": "RE",
    "name": "Nucleus of reuniens",
    "color": "#FF909F",
    "level": 8,
    "title": "RE (Level 8)"
  },
  {
    "id": 560581559,
    "label": "Xiphoid thalamic nucleus",
    "acronym": "Xi",
    "name": "Xiphoid thalamic nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "Xi (Level 8)"
  },
  {
    "id": 51,
    "label": "Intralaminar nuclei of the dorsal thalamus",
    "acronym": "ILM",
    "name": "Intralaminar nuclei of the dorsal thalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "ILM (Level 7)"
  },
  {
    "id": 189,
    "label": "Rhomboid nucleus",
    "acronym": "RH",
    "name": "Rhomboid nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "RH (Level 8)"
  },
  {
    "id": 599,
    "label": "Central medial nucleus of the thalamus",
    "acronym": "CM",
    "name": "Central medial nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "CM (Level 8)"
  },
  {
    "id": 907,
    "label": "Paracentral nucleus",
    "acronym": "PCN",
    "name": "Paracentral nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "PCN (Level 8)"
  },
  {
    "id": 575,
    "label": "Central lateral nucleus of the thalamus",
    "acronym": "CL",
    "name": "Central lateral nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "CL (Level 8)"
  },
  {
    "id": 930,
    "label": "Parafascicular nucleus",
    "acronym": "PF",
    "name": "Parafascicular nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "PF (Level 8)"
  },
  {
    "id": 560581563,
    "label": "Posterior intralaminar thalamic nucleus",
    "acronym": "PIL",
    "name": "Posterior intralaminar thalamic nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "PIL (Level 8)"
  },
  {
    "id": 262,
    "label": "Reticular nucleus of the thalamus",
    "acronym": "RT",
    "name": "Reticular nucleus of the thalamus",
    "color": "#FF909F",
    "level": 8,
    "title": "RT (Level 8)"
  },
  {
    "id": 1014,
    "label": "Geniculate group, ventral thalamus",
    "acronym": "GENv",
    "name": "Geniculate group, ventral thalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "GENv (Level 7)"
  },
  {
    "id": 27,
    "label": "Intergeniculate leaflet of the lateral geniculate complex",
    "acronym": "IGL",
    "name": "Intergeniculate leaflet of the lateral geniculate complex",
    "color": "#FF909F",
    "level": 8,
    "title": "IGL (Level 8)"
  },
  {
    "id": 563807439,
    "label": "Intermediate geniculate nucleus",
    "acronym": "IntG",
    "name": "Intermediate geniculate nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "IntG (Level 8)"
  },
  {
    "id": 178,
    "label": "Ventral part of the lateral geniculate complex",
    "acronym": "LGv",
    "name": "Ventral part of the lateral geniculate complex",
    "color": "#FF909F",
    "level": 8,
    "title": "LGv (Level 8)"
  },
  {
    "id": 300,
    "label": "Ventral part of the lateral geniculate complex, lateral zone",
    "acronym": "LGvl",
    "name": "Ventral part of the lateral geniculate complex, lateral zone",
    "color": "#FF909F",
    "level": 9,
    "title": "LGvl (Level 9)"
  },
  {
    "id": 316,
    "label": "Ventral part of the lateral geniculate complex, medial zone",
    "acronym": "LGvm",
    "name": "Ventral part of the lateral geniculate complex, medial zone",
    "color": "#FF909F",
    "level": 9,
    "title": "LGvm (Level 9)"
  },
  {
    "id": 321,
    "label": "Subgeniculate nucleus",
    "acronym": "SubG",
    "name": "Subgeniculate nucleus",
    "color": "#FF909F",
    "level": 8,
    "title": "SubG (Level 8)"
  },
  {
    "id": 958,
    "label": "Epithalamus",
    "acronym": "EPI",
    "name": "Epithalamus",
    "color": "#FF909F",
    "level": 7,
    "title": "EPI (Level 7)"
  },
  {
    "id": 483,
    "label": "Medial habenula",
    "acronym": "MH",
    "name": "Medial habenula",
    "color": "#FF909F",
    "level": 8,
    "title": "MH (Level 8)"
  },
  {
    "id": 186,
    "label": "Lateral habenula",
    "acronym": "LH",
    "name": "Lateral habenula",
    "color": "#FF909F",
    "level": 8,
    "title": "LH (Level 8)"
  },
  {
    "id": 953,
    "label": "Pineal body",
    "acronym": "PIN",
    "name": "Pineal body",
    "color": "#FF909F",
    "level": 8,
    "title": "PIN (Level 8)"
  },
  {
    "id": 1097,
    "label": "Hypothalamus",
    "acronym": "HY",
    "name": "Hypothalamus",
    "color": "#E64438",
    "level": 5,
    "title": "HY (Level 5)"
  },
  {
    "id": 157,
    "label": "Periventricular zone",
    "acronym": "PVZ",
    "name": "Periventricular zone",
    "color": "#FF5D50",
    "level": 6,
    "title": "PVZ (Level 6)"
  },
  {
    "id": 390,
    "label": "Supraoptic nucleus",
    "acronym": "SO",
    "name": "Supraoptic nucleus",
    "color": "#FF5D50",
    "level": 8,
    "title": "SO (Level 8)"
  },
  {
    "id": 332,
    "label": "Accessory supraoptic group",
    "acronym": "ASO",
    "name": "Accessory supraoptic group",
    "color": "#FF5D50",
    "level": 7,
    "title": "ASO (Level 7)"
  },
  {
    "id": 432,
    "label": "Nucleus circularis",
    "acronym": "NC",
    "name": "Nucleus circularis",
    "color": "#FF5D50",
    "level": 8,
    "title": "NC (Level 8)"
  },
  {
    "id": 38,
    "label": "Paraventricular hypothalamic nucleus",
    "acronym": "PVH",
    "name": "Paraventricular hypothalamic nucleus",
    "color": "#FF5D50",
    "level": 8,
    "title": "PVH (Level 8)"
  },
  {
    "id": 71,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division",
    "acronym": "PVHm",
    "name": "Paraventricular hypothalamic nucleus, magnocellular division",
    "color": "#FF5D50",
    "level": 9,
    "title": "PVHm (Level 9)"
  },
  {
    "id": 47,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, anterior magnocellular part",
    "acronym": "PVHam",
    "name": "Paraventricular hypothalamic nucleus, magnocellular division, anterior magnocellular part",
    "color": "#FF5D50",
    "level": 10,
    "title": "PVHam (Level 10)"
  },
  {
    "id": 79,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, medial magnocellular part",
    "acronym": "PVHmm",
    "name": "Paraventricular hypothalamic nucleus, magnocellular division, medial magnocellular part",
    "color": "#FF5D50",
    "level": 10,
    "title": "PVHmm (Level 10)"
  },
  {
    "id": 103,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part",
    "acronym": "PVHpm",
    "name": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part",
    "color": "#FF5D50",
    "level": 10,
    "title": "PVHpm (Level 10)"
  },
  {
    "id": 652,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part, lateral zone",
    "acronym": "PVHpml",
    "name": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part, lateral zone",
    "color": "#FF5D50",
    "level": 11,
    "title": "PVHpml (Level 11)"
  },
  {
    "id": 660,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part, medial zone",
    "acronym": "PVHpmm",
    "name": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part, medial zone",
    "color": "#FF5D50",
    "level": 11,
    "title": "PVHpmm (Level 11)"
  },
  {
    "id": 94,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division",
    "acronym": "PVHp",
    "name": "Paraventricular hypothalamic nucleus, parvicellular division",
    "color": "#FF5D50",
    "level": 9,
    "title": "PVHp (Level 9)"
  },
  {
    "id": 55,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division, anterior parvicellular part",
    "acronym": "PVHap",
    "name": "Paraventricular hypothalamic nucleus, parvicellular division, anterior parvicellular part",
    "color": "#FF5D50",
    "level": 10,
    "title": "PVHap (Level 10)"
  },
  {
    "id": 87,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division, medial parvicellular part, dorsal zone",
    "acronym": "PVHmpd",
    "name": "Paraventricular hypothalamic nucleus, parvicellular division, medial parvicellular part, dorsal zone",
    "color": "#FF5D50",
    "level": 10,
    "title": "PVHmpd (Level 10)"
  },
  {
    "id": 110,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division, periventricular part",
    "acronym": "PVHpv",
    "name": "Paraventricular hypothalamic nucleus, parvicellular division, periventricular part",
    "color": "#FF5D50",
    "level": 10,
    "title": "PVHpv (Level 10)"
  },
  {
    "id": 30,
    "label": "Periventricular hypothalamic nucleus, anterior part",
    "acronym": "PVa",
    "name": "Periventricular hypothalamic nucleus, anterior part",
    "color": "#FF5D50",
    "level": 9,
    "title": "PVa (Level 9)"
  },
  {
    "id": 118,
    "label": "Periventricular hypothalamic nucleus, intermediate part",
    "acronym": "PVi",
    "name": "Periventricular hypothalamic nucleus, intermediate part",
    "color": "#FF5D50",
    "level": 9,
    "title": "PVi (Level 9)"
  },
  {
    "id": 223,
    "label": "Arcuate hypothalamic nucleus",
    "acronym": "ARH",
    "name": "Arcuate hypothalamic nucleus",
    "color": "#FF5D50",
    "level": 8,
    "title": "ARH (Level 8)"
  },
  {
    "id": 141,
    "label": "Periventricular region",
    "acronym": "PVR",
    "name": "Periventricular region",
    "color": "#FF5547",
    "level": 6,
    "title": "PVR (Level 6)"
  },
  {
    "id": 72,
    "label": "Anterodorsal preoptic nucleus",
    "acronym": "ADP",
    "name": "Anterodorsal preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "ADP (Level 8)"
  },
  {
    "id": 80,
    "label": "Anterior hypothalamic area",
    "acronym": "AHA",
    "name": "Anterior hypothalamic area",
    "color": "#FF5547",
    "level": 8,
    "title": "AHA (Level 8)"
  },
  {
    "id": 263,
    "label": "Anteroventral preoptic nucleus",
    "acronym": "AVP",
    "name": "Anteroventral preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "AVP (Level 8)"
  },
  {
    "id": 272,
    "label": "Anteroventral periventricular nucleus",
    "acronym": "AVPV",
    "name": "Anteroventral periventricular nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "AVPV (Level 8)"
  },
  {
    "id": 830,
    "label": "Dorsomedial nucleus of the hypothalamus",
    "acronym": "DMH",
    "name": "Dorsomedial nucleus of the hypothalamus",
    "color": "#FF5547",
    "level": 8,
    "title": "DMH (Level 8)"
  },
  {
    "id": 668,
    "label": "Dorsomedial nucleus of the hypothalamus, anterior part",
    "acronym": "DMHa",
    "name": "Dorsomedial nucleus of the hypothalamus, anterior part",
    "color": "#FF5547",
    "level": 9,
    "title": "DMHa (Level 9)"
  },
  {
    "id": 676,
    "label": "Dorsomedial nucleus of the hypothalamus, posterior part",
    "acronym": "DMHp",
    "name": "Dorsomedial nucleus of the hypothalamus, posterior part",
    "color": "#FF5547",
    "level": 9,
    "title": "DMHp (Level 9)"
  },
  {
    "id": 684,
    "label": "Dorsomedial nucleus of the hypothalamus, ventral part",
    "acronym": "DMHv",
    "name": "Dorsomedial nucleus of the hypothalamus, ventral part",
    "color": "#FF5547",
    "level": 9,
    "title": "DMHv (Level 9)"
  },
  {
    "id": 452,
    "label": "Median preoptic nucleus",
    "acronym": "MEPO",
    "name": "Median preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "MEPO (Level 8)"
  },
  {
    "id": 523,
    "label": "Medial preoptic area",
    "acronym": "MPO",
    "name": "Medial preoptic area",
    "color": "#FF5547",
    "level": 8,
    "title": "MPO (Level 8)"
  },
  {
    "id": 763,
    "label": "Vascular organ of the lamina terminalis",
    "acronym": "OV",
    "name": "Vascular organ of the lamina terminalis",
    "color": "#FF5547",
    "level": 8,
    "title": "OV (Level 8)"
  },
  {
    "id": 914,
    "label": "Posterodorsal preoptic nucleus",
    "acronym": "PD",
    "name": "Posterodorsal preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "PD (Level 8)"
  },
  {
    "id": 1109,
    "label": "Parastrial nucleus",
    "acronym": "PS",
    "name": "Parastrial nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "PS (Level 8)"
  },
  {
    "id": 1124,
    "label": "Suprachiasmatic preoptic nucleus",
    "acronym": "PSCH",
    "name": "Suprachiasmatic preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "PSCH (Level 8)"
  },
  {
    "id": 126,
    "label": "Periventricular hypothalamic nucleus, posterior part",
    "acronym": "PVp",
    "name": "Periventricular hypothalamic nucleus, posterior part",
    "color": "#FF5547",
    "level": 8,
    "title": "PVp (Level 8)"
  },
  {
    "id": 133,
    "label": "Periventricular hypothalamic nucleus, preoptic part",
    "acronym": "PVpo",
    "name": "Periventricular hypothalamic nucleus, preoptic part",
    "color": "#FF5547",
    "level": 8,
    "title": "PVpo (Level 8)"
  },
  {
    "id": 347,
    "label": "Subparaventricular zone",
    "acronym": "SBPV",
    "name": "Subparaventricular zone",
    "color": "#FF5547",
    "level": 8,
    "title": "SBPV (Level 8)"
  },
  {
    "id": 286,
    "label": "Suprachiasmatic nucleus",
    "acronym": "SCH",
    "name": "Suprachiasmatic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "SCH (Level 8)"
  },
  {
    "id": 338,
    "label": "Subfornical organ",
    "acronym": "SFO",
    "name": "Subfornical organ",
    "color": "#FF5547",
    "level": 8,
    "title": "SFO (Level 8)"
  },
  {
    "id": 576073699,
    "label": "Ventromedial preoptic nucleus",
    "acronym": "VMPO",
    "name": "Ventromedial preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "VMPO (Level 8)"
  },
  {
    "id": 689,
    "label": "Ventrolateral preoptic nucleus",
    "acronym": "VLPO",
    "name": "Ventrolateral preoptic nucleus",
    "color": "#FF5547",
    "level": 8,
    "title": "VLPO (Level 8)"
  },
  {
    "id": 467,
    "label": "Hypothalamic medial zone",
    "acronym": "MEZ",
    "name": "Hypothalamic medial zone",
    "color": "#FF4C3E",
    "level": 6,
    "title": "MEZ (Level 6)"
  },
  {
    "id": 88,
    "label": "Anterior hypothalamic nucleus",
    "acronym": "AHN",
    "name": "Anterior hypothalamic nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "AHN (Level 8)"
  },
  {
    "id": 700,
    "label": "Anterior hypothalamic nucleus, anterior part",
    "acronym": "AHNa",
    "name": "Anterior hypothalamic nucleus, anterior part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "AHNa (Level 9)"
  },
  {
    "id": 708,
    "label": "Anterior hypothalamic nucleus, central part",
    "acronym": "AHNc",
    "name": "Anterior hypothalamic nucleus, central part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "AHNc (Level 9)"
  },
  {
    "id": 716,
    "label": "Anterior hypothalamic nucleus, dorsal part",
    "acronym": "AHNd",
    "name": "Anterior hypothalamic nucleus, dorsal part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "AHNd (Level 9)"
  },
  {
    "id": 724,
    "label": "Anterior hypothalamic nucleus, posterior part",
    "acronym": "AHNp",
    "name": "Anterior hypothalamic nucleus, posterior part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "AHNp (Level 9)"
  },
  {
    "id": 331,
    "label": "Mammillary body",
    "acronym": "MBO",
    "name": "Mammillary body",
    "color": "#FF4C3E",
    "level": 7,
    "title": "MBO (Level 7)"
  },
  {
    "id": 210,
    "label": "Lateral mammillary nucleus",
    "acronym": "LM",
    "name": "Lateral mammillary nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "LM (Level 8)"
  },
  {
    "id": 491,
    "label": "Medial mammillary nucleus",
    "acronym": "MM",
    "name": "Medial mammillary nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "MM (Level 8)"
  },
  {
    "id": 732,
    "label": "Medial mammillary nucleus, median part",
    "acronym": "MMme",
    "name": "Medial mammillary nucleus, median part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MMme (Level 9)"
  },
  {
    "id": 606826647,
    "label": "Medial mammillary nucleus, lateral part",
    "acronym": "MMl",
    "name": "Medial mammillary nucleus, lateral part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MMl (Level 9)"
  },
  {
    "id": 606826651,
    "label": "Medial mammillary nucleus, medial part",
    "acronym": "MMm",
    "name": "Medial mammillary nucleus, medial part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MMm (Level 9)"
  },
  {
    "id": 606826655,
    "label": "Medial mammillary nucleus, posterior part",
    "acronym": "MMp",
    "name": "Medial mammillary nucleus, posterior part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MMp (Level 9)"
  },
  {
    "id": 606826659,
    "label": "Medial mammillary nucleus, dorsal part",
    "acronym": "MMd",
    "name": "Medial mammillary nucleus, dorsal part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MMd (Level 9)"
  },
  {
    "id": 525,
    "label": "Supramammillary nucleus",
    "acronym": "SUM",
    "name": "Supramammillary nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "SUM (Level 8)"
  },
  {
    "id": 1110,
    "label": "Supramammillary nucleus, lateral part",
    "acronym": "SUMl",
    "name": "Supramammillary nucleus, lateral part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "SUMl (Level 9)"
  },
  {
    "id": 1118,
    "label": "Supramammillary nucleus, medial part",
    "acronym": "SUMm",
    "name": "Supramammillary nucleus, medial part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "SUMm (Level 9)"
  },
  {
    "id": 557,
    "label": "Tuberomammillary nucleus",
    "acronym": "TM",
    "name": "Tuberomammillary nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "TM (Level 8)"
  },
  {
    "id": 1126,
    "label": "Tuberomammillary nucleus, dorsal part",
    "acronym": "TMd",
    "name": "Tuberomammillary nucleus, dorsal part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "TMd (Level 9)"
  },
  {
    "id": 1,
    "label": "Tuberomammillary nucleus, ventral part",
    "acronym": "TMv",
    "name": "Tuberomammillary nucleus, ventral part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "TMv (Level 9)"
  },
  {
    "id": 515,
    "label": "Medial preoptic nucleus",
    "acronym": "MPN",
    "name": "Medial preoptic nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "MPN (Level 8)"
  },
  {
    "id": 740,
    "label": "Medial preoptic nucleus, central part",
    "acronym": "MPNc",
    "name": "Medial preoptic nucleus, central part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MPNc (Level 9)"
  },
  {
    "id": 748,
    "label": "Medial preoptic nucleus, lateral part",
    "acronym": "MPNl",
    "name": "Medial preoptic nucleus, lateral part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MPNl (Level 9)"
  },
  {
    "id": 756,
    "label": "Medial preoptic nucleus, medial part",
    "acronym": "MPNm",
    "name": "Medial preoptic nucleus, medial part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "MPNm (Level 9)"
  },
  {
    "id": 980,
    "label": "Dorsal premammillary nucleus",
    "acronym": "PMd",
    "name": "Dorsal premammillary nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "PMd (Level 8)"
  },
  {
    "id": 1004,
    "label": "Ventral premammillary nucleus",
    "acronym": "PMv",
    "name": "Ventral premammillary nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "PMv (Level 8)"
  },
  {
    "id": 63,
    "label": "Paraventricular hypothalamic nucleus, descending division",
    "acronym": "PVHd",
    "name": "Paraventricular hypothalamic nucleus, descending division",
    "color": "#FF4C3E",
    "level": 8,
    "title": "PVHd (Level 8)"
  },
  {
    "id": 439,
    "label": "Paraventricular hypothalamic nucleus, descending division, dorsal parvicellular part",
    "acronym": "PVHdp",
    "name": "Paraventricular hypothalamic nucleus, descending division, dorsal parvicellular part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "PVHdp (Level 9)"
  },
  {
    "id": 447,
    "label": "Paraventricular hypothalamic nucleus, descending division, forniceal part",
    "acronym": "PVHf",
    "name": "Paraventricular hypothalamic nucleus, descending division, forniceal part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "PVHf (Level 9)"
  },
  {
    "id": 455,
    "label": "Paraventricular hypothalamic nucleus, descending division, lateral parvicellular part",
    "acronym": "PVHlp",
    "name": "Paraventricular hypothalamic nucleus, descending division, lateral parvicellular part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "PVHlp (Level 9)"
  },
  {
    "id": 464,
    "label": "Paraventricular hypothalamic nucleus, descending division, medial parvicellular part, ventral zone",
    "acronym": "PVHmpv",
    "name": "Paraventricular hypothalamic nucleus, descending division, medial parvicellular part, ventral zone",
    "color": "#FF4C3E",
    "level": 9,
    "title": "PVHmpv (Level 9)"
  },
  {
    "id": 693,
    "label": "Ventromedial hypothalamic nucleus",
    "acronym": "VMH",
    "name": "Ventromedial hypothalamic nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "VMH (Level 8)"
  },
  {
    "id": 761,
    "label": "Ventromedial hypothalamic nucleus, anterior part",
    "acronym": "VMHa",
    "name": "Ventromedial hypothalamic nucleus, anterior part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "VMHa (Level 9)"
  },
  {
    "id": 769,
    "label": "Ventromedial hypothalamic nucleus, central part",
    "acronym": "VMHc",
    "name": "Ventromedial hypothalamic nucleus, central part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "VMHc (Level 9)"
  },
  {
    "id": 777,
    "label": "Ventromedial hypothalamic nucleus, dorsomedial part",
    "acronym": "VMHdm",
    "name": "Ventromedial hypothalamic nucleus, dorsomedial part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "VMHdm (Level 9)"
  },
  {
    "id": 785,
    "label": "Ventromedial hypothalamic nucleus, ventrolateral part",
    "acronym": "VMHvl",
    "name": "Ventromedial hypothalamic nucleus, ventrolateral part",
    "color": "#FF4C3E",
    "level": 9,
    "title": "VMHvl (Level 9)"
  },
  {
    "id": 946,
    "label": "Posterior hypothalamic nucleus",
    "acronym": "PH",
    "name": "Posterior hypothalamic nucleus",
    "color": "#FF4C3E",
    "level": 8,
    "title": "PH (Level 8)"
  },
  {
    "id": 290,
    "label": "Hypothalamic lateral zone",
    "acronym": "LZ",
    "name": "Hypothalamic lateral zone",
    "color": "#F2483B",
    "level": 6,
    "title": "LZ (Level 6)"
  },
  {
    "id": 194,
    "label": "Lateral hypothalamic area",
    "acronym": "LHA",
    "name": "Lateral hypothalamic area",
    "color": "#F2483B",
    "level": 8,
    "title": "LHA (Level 8)"
  },
  {
    "id": 226,
    "label": "Lateral preoptic area",
    "acronym": "LPO",
    "name": "Lateral preoptic area",
    "color": "#F2483B",
    "level": 8,
    "title": "LPO (Level 8)"
  },
  {
    "id": 356,
    "label": "Preparasubthalamic nucleus",
    "acronym": "PST",
    "name": "Preparasubthalamic nucleus",
    "color": "#F2483B",
    "level": 8,
    "title": "PST (Level 8)"
  },
  {
    "id": 364,
    "label": "Parasubthalamic nucleus",
    "acronym": "PSTN",
    "name": "Parasubthalamic nucleus",
    "color": "#F2483B",
    "level": 8,
    "title": "PSTN (Level 8)"
  },
  {
    "id": 576073704,
    "label": "Perifornical nucleus",
    "acronym": "PeF",
    "name": "Perifornical nucleus",
    "color": "#F2483B",
    "level": 8,
    "title": "PeF (Level 8)"
  },
  {
    "id": 173,
    "label": "Retrochiasmatic area",
    "acronym": "RCH",
    "name": "Retrochiasmatic area",
    "color": "#F2483B",
    "level": 8,
    "title": "RCH (Level 8)"
  },
  {
    "id": 470,
    "label": "Subthalamic nucleus",
    "acronym": "STN",
    "name": "Subthalamic nucleus",
    "color": "#F2483B",
    "level": 8,
    "title": "STN (Level 8)"
  },
  {
    "id": 614,
    "label": "Tuberal nucleus",
    "acronym": "TU",
    "name": "Tuberal nucleus",
    "color": "#F2483B",
    "level": 8,
    "title": "TU (Level 8)"
  },
  {
    "id": 797,
    "label": "Zona incerta",
    "acronym": "ZI",
    "name": "Zona incerta",
    "color": "#F2483B",
    "level": 8,
    "title": "ZI (Level 8)"
  },
  {
    "id": 796,
    "label": "Dopaminergic A13 group",
    "acronym": "A13",
    "name": "Dopaminergic A13 group",
    "color": "#F2483B",
    "level": 9,
    "title": "A13 (Level 9)"
  },
  {
    "id": 804,
    "label": "Fields of Forel",
    "acronym": "FF",
    "name": "Fields of Forel",
    "color": "#F2483B",
    "level": 9,
    "title": "FF (Level 9)"
  },
  {
    "id": 10671,
    "label": "Median eminence",
    "acronym": "ME",
    "name": "Median eminence",
    "color": "#F2483B",
    "level": 8,
    "title": "ME (Level 8)"
  },
  {
    "id": 313,
    "label": "Midbrain",
    "acronym": "MB",
    "name": "Midbrain",
    "color": "#FF64FF",
    "level": 5,
    "title": "MB (Level 5)"
  },
  {
    "id": 339,
    "label": "Midbrain, sensory related",
    "acronym": "MBsen",
    "name": "Midbrain, sensory related",
    "color": "#FF7AFF",
    "level": 6,
    "title": "MBsen (Level 6)"
  },
  {
    "id": 302,
    "label": "Superior colliculus, sensory related",
    "acronym": "SCs",
    "name": "Superior colliculus, sensory related",
    "color": "#FF7AFF",
    "level": 8,
    "title": "SCs (Level 8)"
  },
  {
    "id": 851,
    "label": "Superior colliculus, optic layer",
    "acronym": "SCop",
    "name": "Superior colliculus, optic layer",
    "color": "#FF7AFF",
    "level": 9,
    "title": "SCop (Level 9)"
  },
  {
    "id": 842,
    "label": "Superior colliculus, superficial gray layer",
    "acronym": "SCsg",
    "name": "Superior colliculus, superficial gray layer",
    "color": "#FF7AFF",
    "level": 9,
    "title": "SCsg (Level 9)"
  },
  {
    "id": 834,
    "label": "Superior colliculus, zonal layer",
    "acronym": "SCzo",
    "name": "Superior colliculus, zonal layer",
    "color": "#FF7AFF",
    "level": 9,
    "title": "SCzo (Level 9)"
  },
  {
    "id": 4,
    "label": "Inferior colliculus",
    "acronym": "IC",
    "name": "Inferior colliculus",
    "color": "#FF7AFF",
    "level": 8,
    "title": "IC (Level 8)"
  },
  {
    "id": 811,
    "label": "Inferior colliculus, central nucleus",
    "acronym": "ICc",
    "name": "Inferior colliculus, central nucleus",
    "color": "#FF7AFF",
    "level": 9,
    "title": "ICc (Level 9)"
  },
  {
    "id": 820,
    "label": "Inferior colliculus, dorsal nucleus",
    "acronym": "ICd",
    "name": "Inferior colliculus, dorsal nucleus",
    "color": "#FF7AFF",
    "level": 9,
    "title": "ICd (Level 9)"
  },
  {
    "id": 828,
    "label": "Inferior colliculus, external nucleus",
    "acronym": "ICe",
    "name": "Inferior colliculus, external nucleus",
    "color": "#FF7AFF",
    "level": 9,
    "title": "ICe (Level 9)"
  },
  {
    "id": 580,
    "label": "Nucleus of the brachium of the inferior colliculus",
    "acronym": "NB",
    "name": "Nucleus of the brachium of the inferior colliculus",
    "color": "#FF7AFF",
    "level": 8,
    "title": "NB (Level 8)"
  },
  {
    "id": 271,
    "label": "Nucleus sagulum",
    "acronym": "SAG",
    "name": "Nucleus sagulum",
    "color": "#FF7AFF",
    "level": 8,
    "title": "SAG (Level 8)"
  },
  {
    "id": 874,
    "label": "Parabigeminal nucleus",
    "acronym": "PBG",
    "name": "Parabigeminal nucleus",
    "color": "#FF7AFF",
    "level": 8,
    "title": "PBG (Level 8)"
  },
  {
    "id": 460,
    "label": "Midbrain trigeminal nucleus",
    "acronym": "MEV",
    "name": "Midbrain trigeminal nucleus",
    "color": "#FF7AFF",
    "level": 8,
    "title": "MEV (Level 8)"
  },
  {
    "id": 599626923,
    "label": "Subcommissural organ",
    "acronym": "SCO",
    "name": "Subcommissural organ",
    "color": "#FF7AFF",
    "level": 8,
    "title": "SCO (Level 8)"
  },
  {
    "id": 323,
    "label": "Midbrain, motor related",
    "acronym": "MBmot",
    "name": "Midbrain, motor related",
    "color": "#FF90FF",
    "level": 6,
    "title": "MBmot (Level 6)"
  },
  {
    "id": 381,
    "label": "Substantia nigra, reticular part",
    "acronym": "SNr",
    "name": "Substantia nigra, reticular part",
    "color": "#FF90FF",
    "level": 8,
    "title": "SNr (Level 8)"
  },
  {
    "id": 749,
    "label": "Ventral tegmental area",
    "acronym": "VTA",
    "name": "Ventral tegmental area",
    "color": "#FF90FF",
    "level": 8,
    "title": "VTA (Level 8)"
  },
  {
    "id": 607344830,
    "label": "Paranigral nucleus",
    "acronym": "PN",
    "name": "Paranigral nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "PN (Level 8)"
  },
  {
    "id": 246,
    "label": "Midbrain reticular nucleus, retrorubral area",
    "acronym": "RR",
    "name": "Midbrain reticular nucleus, retrorubral area",
    "color": "#FF90FF",
    "level": 8,
    "title": "RR (Level 8)"
  },
  {
    "id": 128,
    "label": "Midbrain reticular nucleus",
    "acronym": "MRN",
    "name": "Midbrain reticular nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "MRN (Level 8)"
  },
  {
    "id": 539,
    "label": "Midbrain reticular nucleus, magnocellular part",
    "acronym": "MRNm",
    "name": "Midbrain reticular nucleus, magnocellular part",
    "color": "#FF90FF",
    "level": 9,
    "title": "MRNm (Level 9)"
  },
  {
    "id": 548,
    "label": "Midbrain reticular nucleus, magnocellular part, general",
    "acronym": "MRNmg",
    "name": "Midbrain reticular nucleus, magnocellular part, general",
    "color": "#FF90FF",
    "level": 9,
    "title": "MRNmg (Level 9)"
  },
  {
    "id": 555,
    "label": "Midbrain reticular nucleus, parvicellular part",
    "acronym": "MRNp",
    "name": "Midbrain reticular nucleus, parvicellular part",
    "color": "#FF90FF",
    "level": 9,
    "title": "MRNp (Level 9)"
  },
  {
    "id": 294,
    "label": "Superior colliculus, motor related",
    "acronym": "SCm",
    "name": "Superior colliculus, motor related",
    "color": "#FF90FF",
    "level": 8,
    "title": "SCm (Level 8)"
  },
  {
    "id": 26,
    "label": "Superior colliculus, motor related, deep gray layer",
    "acronym": "SCdg",
    "name": "Superior colliculus, motor related, deep gray layer",
    "color": "#FF90FF",
    "level": 9,
    "title": "SCdg (Level 9)"
  },
  {
    "id": 42,
    "label": "Superior colliculus, motor related, deep white layer",
    "acronym": "SCdw",
    "name": "Superior colliculus, motor related, deep white layer",
    "color": "#FF90FF",
    "level": 9,
    "title": "SCdw (Level 9)"
  },
  {
    "id": 17,
    "label": "Superior colliculus, motor related, intermediate white layer",
    "acronym": "SCiw",
    "name": "Superior colliculus, motor related, intermediate white layer",
    "color": "#FF90FF",
    "level": 9,
    "title": "SCiw (Level 9)"
  },
  {
    "id": 10,
    "label": "Superior colliculus, motor related, intermediate gray layer",
    "acronym": "SCig",
    "name": "Superior colliculus, motor related, intermediate gray layer",
    "color": "#FF90FF",
    "level": 9,
    "title": "SCig (Level 9)"
  },
  {
    "id": 494,
    "label": "Superior colliculus, motor related, intermediate gray layer, sublayer a",
    "acronym": "SCig-a",
    "name": "Superior colliculus, motor related, intermediate gray layer, sublayer a",
    "color": "#FF90FF",
    "level": 10,
    "title": "SCig-a (Level 10)"
  },
  {
    "id": 503,
    "label": "Superior colliculus, motor related, intermediate gray layer, sublayer b",
    "acronym": "SCig-b",
    "name": "Superior colliculus, motor related, intermediate gray layer, sublayer b",
    "color": "#FF90FF",
    "level": 10,
    "title": "SCig-b (Level 10)"
  },
  {
    "id": 511,
    "label": "Superior colliculus, motor related, intermediate gray layer, sublayer c",
    "acronym": "SCig-c",
    "name": "Superior colliculus, motor related, intermediate gray layer, sublayer c",
    "color": "#FF90FF",
    "level": 10,
    "title": "SCig-c (Level 10)"
  },
  {
    "id": 795,
    "label": "Periaqueductal gray",
    "acronym": "PAG",
    "name": "Periaqueductal gray",
    "color": "#FF90FF",
    "level": 8,
    "title": "PAG (Level 8)"
  },
  {
    "id": 50,
    "label": "Precommissural nucleus",
    "acronym": "PRC",
    "name": "Precommissural nucleus",
    "color": "#FF90FF",
    "level": 9,
    "title": "PRC (Level 9)"
  },
  {
    "id": 67,
    "label": "Interstitial nucleus of Cajal",
    "acronym": "INC",
    "name": "Interstitial nucleus of Cajal",
    "color": "#FF90FF",
    "level": 9,
    "title": "INC (Level 9)"
  },
  {
    "id": 587,
    "label": "Nucleus of Darkschewitsch",
    "acronym": "ND",
    "name": "Nucleus of Darkschewitsch",
    "color": "#FF90FF",
    "level": 9,
    "title": "ND (Level 9)"
  },
  {
    "id": 614454277,
    "label": "Supraoculomotor periaqueductal gray",
    "acronym": "Su3",
    "name": "Supraoculomotor periaqueductal gray",
    "color": "#FF90FF",
    "level": 9,
    "title": "Su3 (Level 9)"
  },
  {
    "id": 1100,
    "label": "Pretectal region",
    "acronym": "PRT",
    "name": "Pretectal region",
    "color": "#FF90FF",
    "level": 8,
    "title": "PRT (Level 8)"
  },
  {
    "id": 215,
    "label": "Anterior pretectal nucleus",
    "acronym": "APN",
    "name": "Anterior pretectal nucleus",
    "color": "#FF90FF",
    "level": 9,
    "title": "APN (Level 9)"
  },
  {
    "id": 531,
    "label": "Medial pretectal area",
    "acronym": "MPT",
    "name": "Medial pretectal area",
    "color": "#FF90FF",
    "level": 9,
    "title": "MPT (Level 9)"
  },
  {
    "id": 628,
    "label": "Nucleus of the optic tract",
    "acronym": "NOT",
    "name": "Nucleus of the optic tract",
    "color": "#FF90FF",
    "level": 9,
    "title": "NOT (Level 9)"
  },
  {
    "id": 634,
    "label": "Nucleus of the posterior commissure",
    "acronym": "NPC",
    "name": "Nucleus of the posterior commissure",
    "color": "#FF90FF",
    "level": 9,
    "title": "NPC (Level 9)"
  },
  {
    "id": 706,
    "label": "Olivary pretectal nucleus",
    "acronym": "OP",
    "name": "Olivary pretectal nucleus",
    "color": "#FF90FF",
    "level": 9,
    "title": "OP (Level 9)"
  },
  {
    "id": 1061,
    "label": "Posterior pretectal nucleus",
    "acronym": "PPT",
    "name": "Posterior pretectal nucleus",
    "color": "#FF90FF",
    "level": 9,
    "title": "PPT (Level 9)"
  },
  {
    "id": 549009203,
    "label": "Retroparafascicular nucleus",
    "acronym": "RPF",
    "name": "Retroparafascicular nucleus",
    "color": "#FF90FF",
    "level": 9,
    "title": "RPF (Level 9)"
  },
  {
    "id": 549009207,
    "label": "Intercollicular nucleus",
    "acronym": "InCo",
    "name": "Intercollicular nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "InCo (Level 8)"
  },
  {
    "id": 616,
    "label": "Cuneiform nucleus",
    "acronym": "CUN",
    "name": "Cuneiform nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "CUN (Level 8)"
  },
  {
    "id": 214,
    "label": "Red nucleus",
    "acronym": "RN",
    "name": "Red nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "RN (Level 8)"
  },
  {
    "id": 35,
    "label": "Oculomotor nucleus",
    "acronym": "III",
    "name": "Oculomotor nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "III (Level 8)"
  },
  {
    "id": 549009211,
    "label": "Medial accesory oculomotor nucleus",
    "acronym": "MA3",
    "name": "Medial accesory oculomotor nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "MA3 (Level 8)"
  },
  {
    "id": 975,
    "label": "Edinger-Westphal nucleus",
    "acronym": "EW",
    "name": "Edinger-Westphal nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "EW (Level 8)"
  },
  {
    "id": 115,
    "label": "Trochlear nucleus",
    "acronym": "IV",
    "name": "Trochlear nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "IV (Level 8)"
  },
  {
    "id": 606826663,
    "label": "Paratrochlear nucleus",
    "acronym": "Pa4",
    "name": "Paratrochlear nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "Pa4 (Level 8)"
  },
  {
    "id": 757,
    "label": "Ventral tegmental nucleus",
    "acronym": "VTN",
    "name": "Ventral tegmental nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "VTN (Level 8)"
  },
  {
    "id": 231,
    "label": "Anterior tegmental nucleus",
    "acronym": "AT",
    "name": "Anterior tegmental nucleus",
    "color": "#FF90FF",
    "level": 8,
    "title": "AT (Level 8)"
  },
  {
    "id": 66,
    "label": "Lateral terminal nucleus of the accessory optic tract",
    "acronym": "LT",
    "name": "Lateral terminal nucleus of the accessory optic tract",
    "color": "#FF90FF",
    "level": 8,
    "title": "LT (Level 8)"
  },
  {
    "id": 75,
    "label": "Dorsal terminal nucleus of the accessory optic tract",
    "acronym": "DT",
    "name": "Dorsal terminal nucleus of the accessory optic tract",
    "color": "#FF90FF",
    "level": 8,
    "title": "DT (Level 8)"
  },
  {
    "id": 58,
    "label": "Medial terminal nucleus of the accessory optic tract",
    "acronym": "MT",
    "name": "Medial terminal nucleus of the accessory optic tract",
    "color": "#FF90FF",
    "level": 8,
    "title": "MT (Level 8)"
  },
  {
    "id": 615,
    "label": "Substantia nigra, lateral part",
    "acronym": "SNl",
    "name": "Substantia nigra, lateral part",
    "color": "#FF90FF",
    "level": 8,
    "title": "SNl (Level 8)"
  },
  {
    "id": 348,
    "label": "Midbrain, behavioral state related",
    "acronym": "MBsta",
    "name": "Midbrain, behavioral state related",
    "color": "#FF90FF",
    "level": 6,
    "title": "MBsta (Level 6)"
  },
  {
    "id": 374,
    "label": "Substantia nigra, compact part",
    "acronym": "SNc",
    "name": "Substantia nigra, compact part",
    "color": "#FFA6FF",
    "level": 8,
    "title": "SNc (Level 8)"
  },
  {
    "id": 1052,
    "label": "Pedunculopontine nucleus",
    "acronym": "PPN",
    "name": "Pedunculopontine nucleus",
    "color": "#FFA6FF",
    "level": 8,
    "title": "PPN (Level 8)"
  },
  {
    "id": 165,
    "label": "Midbrain raphe nuclei",
    "acronym": "RAmb",
    "name": "Midbrain raphe nuclei",
    "color": "#FFA6FF",
    "level": 7,
    "title": "RAmb (Level 7)"
  },
  {
    "id": 12,
    "label": "Interfascicular nucleus raphe",
    "acronym": "IF",
    "name": "Interfascicular nucleus raphe",
    "color": "#FFA6FF",
    "level": 8,
    "title": "IF (Level 8)"
  },
  {
    "id": 100,
    "label": "Interpeduncular nucleus",
    "acronym": "IPN",
    "name": "Interpeduncular nucleus",
    "color": "#FFA6FF",
    "level": 8,
    "title": "IPN (Level 8)"
  },
  {
    "id": 607344834,
    "label": "Interpeduncular nucleus, rostral",
    "acronym": "IPR",
    "name": "Interpeduncular nucleus, rostral",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPR (Level 9)"
  },
  {
    "id": 607344838,
    "label": "Interpeduncular nucleus, caudal",
    "acronym": "IPC",
    "name": "Interpeduncular nucleus, caudal",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPC (Level 9)"
  },
  {
    "id": 607344842,
    "label": "Interpeduncular nucleus, apical",
    "acronym": "IPA",
    "name": "Interpeduncular nucleus, apical",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPA (Level 9)"
  },
  {
    "id": 607344846,
    "label": "Interpeduncular nucleus, lateral",
    "acronym": "IPL",
    "name": "Interpeduncular nucleus, lateral",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPL (Level 9)"
  },
  {
    "id": 607344850,
    "label": "Interpeduncular nucleus, intermediate",
    "acronym": "IPI",
    "name": "Interpeduncular nucleus, intermediate",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPI (Level 9)"
  },
  {
    "id": 607344854,
    "label": "Interpeduncular nucleus, dorsomedial",
    "acronym": "IPDM",
    "name": "Interpeduncular nucleus, dorsomedial",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPDM (Level 9)"
  },
  {
    "id": 607344858,
    "label": "Interpeduncular nucleus, dorsolateral",
    "acronym": "IPDL",
    "name": "Interpeduncular nucleus, dorsolateral",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPDL (Level 9)"
  },
  {
    "id": 607344862,
    "label": "Interpeduncular nucleus, rostrolateral",
    "acronym": "IPRL",
    "name": "Interpeduncular nucleus, rostrolateral",
    "color": "#FFA6FF",
    "level": 9,
    "title": "IPRL (Level 9)"
  },
  {
    "id": 197,
    "label": "Rostral linear nucleus raphe",
    "acronym": "RL",
    "name": "Rostral linear nucleus raphe",
    "color": "#FFA6FF",
    "level": 8,
    "title": "RL (Level 8)"
  },
  {
    "id": 591,
    "label": "Central linear nucleus raphe",
    "acronym": "CLI",
    "name": "Central linear nucleus raphe",
    "color": "#FFA6FF",
    "level": 8,
    "title": "CLI (Level 8)"
  },
  {
    "id": 872,
    "label": "Dorsal nucleus raphe",
    "acronym": "DR",
    "name": "Dorsal nucleus raphe",
    "color": "#FFA6FF",
    "level": 8,
    "title": "DR (Level 8)"
  },
  {
    "id": 1065,
    "label": "Hindbrain",
    "acronym": "HB",
    "name": "Hindbrain",
    "color": "#FF9B88",
    "level": 3,
    "title": "HB (Level 3)"
  },
  {
    "id": 771,
    "label": "Pons",
    "acronym": "P",
    "name": "Pons",
    "color": "#FF9B88",
    "level": 5,
    "title": "P (Level 5)"
  },
  {
    "id": 1132,
    "label": "Pons, sensory related",
    "acronym": "P-sen",
    "name": "Pons, sensory related",
    "color": "#FFAE6F",
    "level": 6,
    "title": "P-sen (Level 6)"
  },
  {
    "id": 612,
    "label": "Nucleus of the lateral lemniscus",
    "acronym": "NLL",
    "name": "Nucleus of the lateral lemniscus",
    "color": "#FFAE6F",
    "level": 8,
    "title": "NLL (Level 8)"
  },
  {
    "id": 82,
    "label": "Nucleus of the lateral lemniscus, dorsal part",
    "acronym": "NLLd",
    "name": "Nucleus of the lateral lemniscus, dorsal part",
    "color": "#FFAE6F",
    "level": 9,
    "title": "NLLd (Level 9)"
  },
  {
    "id": 90,
    "label": "Nucleus of the lateral lemniscus, horizontal part",
    "acronym": "NLLh",
    "name": "Nucleus of the lateral lemniscus, horizontal part",
    "color": "#FFAE6F",
    "level": 9,
    "title": "NLLh (Level 9)"
  },
  {
    "id": 99,
    "label": "Nucleus of the lateral lemniscus, ventral part",
    "acronym": "NLLv",
    "name": "Nucleus of the lateral lemniscus, ventral part",
    "color": "#FFAE6F",
    "level": 9,
    "title": "NLLv (Level 9)"
  },
  {
    "id": 7,
    "label": "Principal sensory nucleus of the trigeminal",
    "acronym": "PSV",
    "name": "Principal sensory nucleus of the trigeminal",
    "color": "#FFAE6F",
    "level": 8,
    "title": "PSV (Level 8)"
  },
  {
    "id": 867,
    "label": "Parabrachial nucleus",
    "acronym": "PB",
    "name": "Parabrachial nucleus",
    "color": "#FFAE6F",
    "level": 8,
    "title": "PB (Level 8)"
  },
  {
    "id": 123,
    "label": "Koelliker-Fuse subnucleus",
    "acronym": "KF",
    "name": "Koelliker-Fuse subnucleus",
    "color": "#FFAE6F",
    "level": 9,
    "title": "KF (Level 9)"
  },
  {
    "id": 881,
    "label": "Parabrachial nucleus, lateral division",
    "acronym": "PBl",
    "name": "Parabrachial nucleus, lateral division",
    "color": "#FFAE6F",
    "level": 9,
    "title": "PBl (Level 9)"
  },
  {
    "id": 860,
    "label": "Parabrachial nucleus, lateral division, central lateral part",
    "acronym": "PBlc",
    "name": "Parabrachial nucleus, lateral division, central lateral part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBlc (Level 10)"
  },
  {
    "id": 868,
    "label": "Parabrachial nucleus, lateral division, dorsal lateral part",
    "acronym": "PBld",
    "name": "Parabrachial nucleus, lateral division, dorsal lateral part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBld (Level 10)"
  },
  {
    "id": 875,
    "label": "Parabrachial nucleus, lateral division, external lateral part",
    "acronym": "PBle",
    "name": "Parabrachial nucleus, lateral division, external lateral part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBle (Level 10)"
  },
  {
    "id": 883,
    "label": "Parabrachial nucleus, lateral division, superior lateral part",
    "acronym": "PBls",
    "name": "Parabrachial nucleus, lateral division, superior lateral part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBls (Level 10)"
  },
  {
    "id": 891,
    "label": "Parabrachial nucleus, lateral division, ventral lateral part",
    "acronym": "PBlv",
    "name": "Parabrachial nucleus, lateral division, ventral lateral part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBlv (Level 10)"
  },
  {
    "id": 890,
    "label": "Parabrachial nucleus, medial division",
    "acronym": "PBm",
    "name": "Parabrachial nucleus, medial division",
    "color": "#FFAE6F",
    "level": 9,
    "title": "PBm (Level 9)"
  },
  {
    "id": 899,
    "label": "Parabrachial nucleus, medial division, external medial part",
    "acronym": "PBme",
    "name": "Parabrachial nucleus, medial division, external medial part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBme (Level 10)"
  },
  {
    "id": 915,
    "label": "Parabrachial nucleus, medial division, medial medial part",
    "acronym": "PBmm",
    "name": "Parabrachial nucleus, medial division, medial medial part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBmm (Level 10)"
  },
  {
    "id": 923,
    "label": "Parabrachial nucleus, medial division, ventral medial part",
    "acronym": "PBmv",
    "name": "Parabrachial nucleus, medial division, ventral medial part",
    "color": "#FFAE6F",
    "level": 10,
    "title": "PBmv (Level 10)"
  },
  {
    "id": 398,
    "label": "Superior olivary complex",
    "acronym": "SOC",
    "name": "Superior olivary complex",
    "color": "#FFAE6F",
    "level": 8,
    "title": "SOC (Level 8)"
  },
  {
    "id": 122,
    "label": "Superior olivary complex, periolivary region",
    "acronym": "POR",
    "name": "Superior olivary complex, periolivary region",
    "color": "#FFAE6F",
    "level": 9,
    "title": "POR (Level 9)"
  },
  {
    "id": 105,
    "label": "Superior olivary complex, medial part",
    "acronym": "SOCm",
    "name": "Superior olivary complex, medial part",
    "color": "#FFAE6F",
    "level": 9,
    "title": "SOCm (Level 9)"
  },
  {
    "id": 114,
    "label": "Superior olivary complex, lateral part",
    "acronym": "SOCl",
    "name": "Superior olivary complex, lateral part",
    "color": "#FFAE6F",
    "level": 9,
    "title": "SOCl (Level 9)"
  },
  {
    "id": 987,
    "label": "Pons, motor related",
    "acronym": "P-mot",
    "name": "Pons, motor related",
    "color": "#FFBA86",
    "level": 6,
    "title": "P-mot (Level 6)"
  },
  {
    "id": 280,
    "label": "Barrington's nucleus",
    "acronym": "B",
    "name": "Barrington's nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "B (Level 8)"
  },
  {
    "id": 880,
    "label": "Dorsal tegmental nucleus",
    "acronym": "DTN",
    "name": "Dorsal tegmental nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "DTN (Level 8)"
  },
  {
    "id": 283,
    "label": "Lateral tegmental nucleus",
    "acronym": "LTN",
    "name": "Lateral tegmental nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "LTN (Level 8)"
  },
  {
    "id": 599626927,
    "label": "Posterodorsal tegmental nucleus",
    "acronym": "PDTg",
    "name": "Posterodorsal tegmental nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "PDTg (Level 8)"
  },
  {
    "id": 898,
    "label": "Pontine central gray",
    "acronym": "PCG",
    "name": "Pontine central gray",
    "color": "#FFBA86",
    "level": 8,
    "title": "PCG (Level 8)"
  },
  {
    "id": 931,
    "label": "Pontine gray",
    "acronym": "PG",
    "name": "Pontine gray",
    "color": "#FFBA86",
    "level": 8,
    "title": "PG (Level 8)"
  },
  {
    "id": 1093,
    "label": "Pontine reticular nucleus, caudal part",
    "acronym": "PRNc",
    "name": "Pontine reticular nucleus, caudal part",
    "color": "#FFBA86",
    "level": 8,
    "title": "PRNc (Level 8)"
  },
  {
    "id": 552,
    "label": "Pontine reticular nucleus, ventral part",
    "acronym": "PRNv",
    "name": "Pontine reticular nucleus, ventral part",
    "color": "#FFBA86",
    "level": 8,
    "title": "PRNv (Level 8)"
  },
  {
    "id": 318,
    "label": "Supragenual nucleus",
    "acronym": "SG",
    "name": "Supragenual nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "SG (Level 8)"
  },
  {
    "id": 462,
    "label": "Superior salivatory nucleus",
    "acronym": "SSN",
    "name": "Superior salivatory nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "SSN (Level 8)"
  },
  {
    "id": 534,
    "label": "Supratrigeminal nucleus",
    "acronym": "SUT",
    "name": "Supratrigeminal nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "SUT (Level 8)"
  },
  {
    "id": 574,
    "label": "Tegmental reticular nucleus",
    "acronym": "TRN",
    "name": "Tegmental reticular nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "TRN (Level 8)"
  },
  {
    "id": 621,
    "label": "Motor nucleus of trigeminal",
    "acronym": "V",
    "name": "Motor nucleus of trigeminal",
    "color": "#FFBA86",
    "level": 8,
    "title": "V (Level 8)"
  },
  {
    "id": 549009215,
    "label": "Peritrigeminal zone",
    "acronym": "P5",
    "name": "Peritrigeminal zone",
    "color": "#FFBA86",
    "level": 8,
    "title": "P5 (Level 8)"
  },
  {
    "id": 549009219,
    "label": "Accessory trigeminal nucleus",
    "acronym": "Acs5",
    "name": "Accessory trigeminal nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "Acs5 (Level 8)"
  },
  {
    "id": 549009223,
    "label": "Parvicellular motor 5 nucleus",
    "acronym": "PC5",
    "name": "Parvicellular motor 5 nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "PC5 (Level 8)"
  },
  {
    "id": 549009227,
    "label": "Intertrigeminal nucleus",
    "acronym": "I5",
    "name": "Intertrigeminal nucleus",
    "color": "#FFBA86",
    "level": 8,
    "title": "I5 (Level 8)"
  },
  {
    "id": 1117,
    "label": "Pons, behavioral state related",
    "acronym": "P-sat",
    "name": "Pons, behavioral state related",
    "color": "#FFC395",
    "level": 6,
    "title": "P-sat (Level 6)"
  },
  {
    "id": 679,
    "label": "Superior central nucleus raphe",
    "acronym": "CS",
    "name": "Superior central nucleus raphe",
    "color": "#FFC395",
    "level": 8,
    "title": "CS (Level 8)"
  },
  {
    "id": 137,
    "label": "Superior central nucleus raphe, lateral part",
    "acronym": "CSl",
    "name": "Superior central nucleus raphe, lateral part",
    "color": "#FFC395",
    "level": 9,
    "title": "CSl (Level 9)"
  },
  {
    "id": 130,
    "label": "Superior central nucleus raphe, medial part",
    "acronym": "CSm",
    "name": "Superior central nucleus raphe, medial part",
    "color": "#FFC395",
    "level": 9,
    "title": "CSm (Level 9)"
  },
  {
    "id": 147,
    "label": "Locus ceruleus",
    "acronym": "LC",
    "name": "Locus ceruleus",
    "color": "#FFC395",
    "level": 8,
    "title": "LC (Level 8)"
  },
  {
    "id": 162,
    "label": "Laterodorsal tegmental nucleus",
    "acronym": "LDT",
    "name": "Laterodorsal tegmental nucleus",
    "color": "#FFC395",
    "level": 8,
    "title": "LDT (Level 8)"
  },
  {
    "id": 604,
    "label": "Nucleus incertus",
    "acronym": "NI",
    "name": "Nucleus incertus",
    "color": "#FFC395",
    "level": 8,
    "title": "NI (Level 8)"
  },
  {
    "id": 146,
    "label": "Pontine reticular nucleus",
    "acronym": "PRNr",
    "name": "Pontine reticular nucleus",
    "color": "#FFC395",
    "level": 8,
    "title": "PRNr (Level 8)"
  },
  {
    "id": 238,
    "label": "Nucleus raphe pontis",
    "acronym": "RPO",
    "name": "Nucleus raphe pontis",
    "color": "#FFC395",
    "level": 8,
    "title": "RPO (Level 8)"
  },
  {
    "id": 350,
    "label": "Subceruleus nucleus",
    "acronym": "SLC",
    "name": "Subceruleus nucleus",
    "color": "#FFC395",
    "level": 8,
    "title": "SLC (Level 8)"
  },
  {
    "id": 358,
    "label": "Sublaterodorsal nucleus",
    "acronym": "SLD",
    "name": "Sublaterodorsal nucleus",
    "color": "#FFC395",
    "level": 8,
    "title": "SLD (Level 8)"
  },
  {
    "id": 354,
    "label": "Medulla",
    "acronym": "MY",
    "name": "Medulla",
    "color": "#FF9BCD",
    "level": 5,
    "title": "MY (Level 5)"
  },
  {
    "id": 386,
    "label": "Medulla, sensory related",
    "acronym": "MY-sen",
    "name": "Medulla, sensory related",
    "color": "#FFA5D2",
    "level": 6,
    "title": "MY-sen (Level 6)"
  },
  {
    "id": 207,
    "label": "Area postrema",
    "acronym": "AP",
    "name": "Area postrema",
    "color": "#FFA5D2",
    "level": 8,
    "title": "AP (Level 8)"
  },
  {
    "id": 607,
    "label": "Cochlear nuclei",
    "acronym": "CN",
    "name": "Cochlear nuclei",
    "color": "#FFA5D2",
    "level": 7,
    "title": "CN (Level 7)"
  },
  {
    "id": 112,
    "label": "Granular lamina of the cochlear nuclei",
    "acronym": "CNlam",
    "name": "Granular lamina of the cochlear nuclei",
    "color": "#FFA5D2",
    "level": 8,
    "title": "CNlam (Level 8)"
  },
  {
    "id": 560,
    "label": "Cochlear nucleus, subpedunclular granular region",
    "acronym": "CNspg",
    "name": "Cochlear nucleus, subpedunclular granular region",
    "color": "#FFA5D2",
    "level": 8,
    "title": "CNspg (Level 8)"
  },
  {
    "id": 96,
    "label": "Dorsal cochlear nucleus",
    "acronym": "DCO",
    "name": "Dorsal cochlear nucleus",
    "color": "#FFA5D2",
    "level": 8,
    "title": "DCO (Level 8)"
  },
  {
    "id": 101,
    "label": "Ventral cochlear nucleus",
    "acronym": "VCO",
    "name": "Ventral cochlear nucleus",
    "color": "#FFA5D2",
    "level": 8,
    "title": "VCO (Level 8)"
  },
  {
    "id": 720,
    "label": "Dorsal column nuclei",
    "acronym": "DCN",
    "name": "Dorsal column nuclei",
    "color": "#FFA5D2",
    "level": 7,
    "title": "DCN (Level 7)"
  },
  {
    "id": 711,
    "label": "Cuneate nucleus",
    "acronym": "CU",
    "name": "Cuneate nucleus",
    "color": "#FFA5D2",
    "level": 8,
    "title": "CU (Level 8)"
  },
  {
    "id": 1039,
    "label": "Gracile nucleus",
    "acronym": "GR",
    "name": "Gracile nucleus",
    "color": "#FFA5D2",
    "level": 8,
    "title": "GR (Level 8)"
  },
  {
    "id": 903,
    "label": "External cuneate nucleus",
    "acronym": "ECU",
    "name": "External cuneate nucleus",
    "color": "#FFA5D2",
    "level": 8,
    "title": "ECU (Level 8)"
  },
  {
    "id": 642,
    "label": "Nucleus of the trapezoid body",
    "acronym": "NTB",
    "name": "Nucleus of the trapezoid body",
    "color": "#FFA5D2",
    "level": 8,
    "title": "NTB (Level 8)"
  },
  {
    "id": 651,
    "label": "Nucleus of the solitary tract",
    "acronym": "NTS",
    "name": "Nucleus of the solitary tract",
    "color": "#FFA5D2",
    "level": 8,
    "title": "NTS (Level 8)"
  },
  {
    "id": 659,
    "label": "Nucleus of the solitary tract, central part",
    "acronym": "NTSce",
    "name": "Nucleus of the solitary tract, central part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "NTSce (Level 9)"
  },
  {
    "id": 666,
    "label": "Nucleus of the solitary tract, commissural part",
    "acronym": "NTSco",
    "name": "Nucleus of the solitary tract, commissural part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "NTSco (Level 9)"
  },
  {
    "id": 674,
    "label": "Nucleus of the solitary tract, gelatinous part",
    "acronym": "NTSge",
    "name": "Nucleus of the solitary tract, gelatinous part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "NTSge (Level 9)"
  },
  {
    "id": 682,
    "label": "Nucleus of the solitary tract, lateral part",
    "acronym": "NTSl",
    "name": "Nucleus of the solitary tract, lateral part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "NTSl (Level 9)"
  },
  {
    "id": 691,
    "label": "Nucleus of the solitary tract, medial part",
    "acronym": "NTSm",
    "name": "Nucleus of the solitary tract, medial part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "NTSm (Level 9)"
  },
  {
    "id": 429,
    "label": "Spinal nucleus of the trigeminal, caudal part",
    "acronym": "SPVC",
    "name": "Spinal nucleus of the trigeminal, caudal part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "SPVC (Level 9)"
  },
  {
    "id": 437,
    "label": "Spinal nucleus of the trigeminal, interpolar part",
    "acronym": "SPVI",
    "name": "Spinal nucleus of the trigeminal, interpolar part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "SPVI (Level 9)"
  },
  {
    "id": 445,
    "label": "Spinal nucleus of the trigeminal, oral part",
    "acronym": "SPVO",
    "name": "Spinal nucleus of the trigeminal, oral part",
    "color": "#FFA5D2",
    "level": 9,
    "title": "SPVO (Level 9)"
  },
  {
    "id": 77,
    "label": "Spinal nucleus of the trigeminal, oral part, caudal dorsomedial part",
    "acronym": "SPVOcdm",
    "name": "Spinal nucleus of the trigeminal, oral part, caudal dorsomedial part",
    "color": "#FFA5D2",
    "level": 10,
    "title": "SPVOcdm (Level 10)"
  },
  {
    "id": 53,
    "label": "Spinal nucleus of the trigeminal, oral part, middle dorsomedial part, dorsal zone",
    "acronym": "SPVOmdmd",
    "name": "Spinal nucleus of the trigeminal, oral part, middle dorsomedial part, dorsal zone",
    "color": "#FFA5D2",
    "level": 10,
    "title": "SPVOmdmd (Level 10)"
  },
  {
    "id": 61,
    "label": "Spinal nucleus of the trigeminal, oral part, middle dorsomedial part, ventral zone",
    "acronym": "SPVOmdmv",
    "name": "Spinal nucleus of the trigeminal, oral part, middle dorsomedial part, ventral zone",
    "color": "#FFA5D2",
    "level": 10,
    "title": "SPVOmdmv (Level 10)"
  },
  {
    "id": 45,
    "label": "Spinal nucleus of the trigeminal, oral part, rostral dorsomedial part",
    "acronym": "SPVOrdm",
    "name": "Spinal nucleus of the trigeminal, oral part, rostral dorsomedial part",
    "color": "#FFA5D2",
    "level": 10,
    "title": "SPVOrdm (Level 10)"
  },
  {
    "id": 69,
    "label": "Spinal nucleus of the trigeminal, oral part, ventrolateral part",
    "acronym": "SPVOvl",
    "name": "Spinal nucleus of the trigeminal, oral part, ventrolateral part",
    "color": "#FFA5D2",
    "level": 10,
    "title": "SPVOvl (Level 10)"
  },
  {
    "id": 589508451,
    "label": "Paratrigeminal nucleus",
    "acronym": "Pa5",
    "name": "Paratrigeminal nucleus",
    "color": "#FFA5D2",
    "level": 8,
    "title": "Pa5 (Level 8)"
  },
  {
    "id": 789,
    "label": "Nucleus z",
    "acronym": "z",
    "name": "Nucleus z",
    "color": "#FFA5D2",
    "level": 8,
    "title": "z (Level 8)"
  },
  {
    "id": 370,
    "label": "Medulla, motor related",
    "acronym": "MY-mot",
    "name": "Medulla, motor related",
    "color": "#FFB3D9",
    "level": 6,
    "title": "MY-mot (Level 6)"
  },
  {
    "id": 653,
    "label": "Abducens nucleus",
    "acronym": "VI",
    "name": "Abducens nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "VI (Level 8)"
  },
  {
    "id": 568,
    "label": "Accessory abducens nucleus",
    "acronym": "ACVI",
    "name": "Accessory abducens nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "ACVI (Level 8)"
  },
  {
    "id": 661,
    "label": "Facial motor nucleus",
    "acronym": "VII",
    "name": "Facial motor nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "VII (Level 8)"
  },
  {
    "id": 576,
    "label": "Accessory facial motor nucleus",
    "acronym": "ACVII",
    "name": "Accessory facial motor nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "ACVII (Level 8)"
  },
  {
    "id": 640,
    "label": "Efferent vestibular nucleus",
    "acronym": "EV",
    "name": "Efferent vestibular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "EV (Level 8)"
  },
  {
    "id": 135,
    "label": "Nucleus ambiguus",
    "acronym": "AMB",
    "name": "Nucleus ambiguus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "AMB (Level 8)"
  },
  {
    "id": 939,
    "label": "Nucleus ambiguus, dorsal division",
    "acronym": "AMBd",
    "name": "Nucleus ambiguus, dorsal division",
    "color": "#FFB3D9",
    "level": 9,
    "title": "AMBd (Level 9)"
  },
  {
    "id": 143,
    "label": "Nucleus ambiguus, ventral division",
    "acronym": "AMBv",
    "name": "Nucleus ambiguus, ventral division",
    "color": "#FFB3D9",
    "level": 9,
    "title": "AMBv (Level 9)"
  },
  {
    "id": 839,
    "label": "Dorsal motor nucleus of the vagus nerve",
    "acronym": "DMX",
    "name": "Dorsal motor nucleus of the vagus nerve",
    "color": "#FFB3D9",
    "level": 8,
    "title": "DMX (Level 8)"
  },
  {
    "id": 887,
    "label": "Efferent cochlear group",
    "acronym": "ECO",
    "name": "Efferent cochlear group",
    "color": "#FFB3D9",
    "level": 8,
    "title": "ECO (Level 8)"
  },
  {
    "id": 1048,
    "label": "Gigantocellular reticular nucleus",
    "acronym": "GRN",
    "name": "Gigantocellular reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "GRN (Level 8)"
  },
  {
    "id": 372,
    "label": "Infracerebellar nucleus",
    "acronym": "ICB",
    "name": "Infracerebellar nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "ICB (Level 8)"
  },
  {
    "id": 83,
    "label": "Inferior olivary complex",
    "acronym": "IO",
    "name": "Inferior olivary complex",
    "color": "#FFB3D9",
    "level": 8,
    "title": "IO (Level 8)"
  },
  {
    "id": 136,
    "label": "Intermediate reticular nucleus",
    "acronym": "IRN",
    "name": "Intermediate reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "IRN (Level 8)"
  },
  {
    "id": 106,
    "label": "Inferior salivatory nucleus",
    "acronym": "ISN",
    "name": "Inferior salivatory nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "ISN (Level 8)"
  },
  {
    "id": 203,
    "label": "Linear nucleus of the medulla",
    "acronym": "LIN",
    "name": "Linear nucleus of the medulla",
    "color": "#FFB3D9",
    "level": 8,
    "title": "LIN (Level 8)"
  },
  {
    "id": 235,
    "label": "Lateral reticular nucleus",
    "acronym": "LRN",
    "name": "Lateral reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "LRN (Level 8)"
  },
  {
    "id": 955,
    "label": "Lateral reticular nucleus, magnocellular part",
    "acronym": "LRNm",
    "name": "Lateral reticular nucleus, magnocellular part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "LRNm (Level 9)"
  },
  {
    "id": 963,
    "label": "Lateral reticular nucleus, parvicellular part",
    "acronym": "LRNp",
    "name": "Lateral reticular nucleus, parvicellular part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "LRNp (Level 9)"
  },
  {
    "id": 307,
    "label": "Magnocellular reticular nucleus",
    "acronym": "MARN",
    "name": "Magnocellular reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "MARN (Level 8)"
  },
  {
    "id": 395,
    "label": "Medullary reticular nucleus",
    "acronym": "MDRN",
    "name": "Medullary reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "MDRN (Level 8)"
  },
  {
    "id": 1098,
    "label": "Medullary reticular nucleus, dorsal part",
    "acronym": "MDRNd",
    "name": "Medullary reticular nucleus, dorsal part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "MDRNd (Level 9)"
  },
  {
    "id": 1107,
    "label": "Medullary reticular nucleus, ventral part",
    "acronym": "MDRNv",
    "name": "Medullary reticular nucleus, ventral part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "MDRNv (Level 9)"
  },
  {
    "id": 852,
    "label": "Parvicellular reticular nucleus",
    "acronym": "PARN",
    "name": "Parvicellular reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "PARN (Level 8)"
  },
  {
    "id": 859,
    "label": "Parasolitary nucleus",
    "acronym": "PAS",
    "name": "Parasolitary nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "PAS (Level 8)"
  },
  {
    "id": 938,
    "label": "Paragigantocellular reticular nucleus",
    "acronym": "PGRN",
    "name": "Paragigantocellular reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "PGRN (Level 8)"
  },
  {
    "id": 970,
    "label": "Paragigantocellular reticular nucleus, dorsal part",
    "acronym": "PGRNd",
    "name": "Paragigantocellular reticular nucleus, dorsal part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "PGRNd (Level 9)"
  },
  {
    "id": 978,
    "label": "Paragigantocellular reticular nucleus, lateral part",
    "acronym": "PGRNl",
    "name": "Paragigantocellular reticular nucleus, lateral part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "PGRNl (Level 9)"
  },
  {
    "id": 154,
    "label": "Perihypoglossal nuclei",
    "acronym": "PHY",
    "name": "Perihypoglossal nuclei",
    "color": "#FFB3D9",
    "level": 7,
    "title": "PHY (Level 7)"
  },
  {
    "id": 161,
    "label": "Nucleus intercalatus",
    "acronym": "NIS",
    "name": "Nucleus intercalatus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "NIS (Level 8)"
  },
  {
    "id": 177,
    "label": "Nucleus of Roller",
    "acronym": "NR",
    "name": "Nucleus of Roller",
    "color": "#FFB3D9",
    "level": 8,
    "title": "NR (Level 8)"
  },
  {
    "id": 169,
    "label": "Nucleus prepositus",
    "acronym": "PRP",
    "name": "Nucleus prepositus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "PRP (Level 8)"
  },
  {
    "id": 995,
    "label": "Paramedian reticular nucleus",
    "acronym": "PMR",
    "name": "Paramedian reticular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "PMR (Level 8)"
  },
  {
    "id": 1069,
    "label": "Parapyramidal nucleus",
    "acronym": "PPY",
    "name": "Parapyramidal nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "PPY (Level 8)"
  },
  {
    "id": 185,
    "label": "Parapyramidal nucleus, deep part",
    "acronym": "PPYd",
    "name": "Parapyramidal nucleus, deep part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "PPYd (Level 9)"
  },
  {
    "id": 193,
    "label": "Parapyramidal nucleus, superficial part",
    "acronym": "PPYs",
    "name": "Parapyramidal nucleus, superficial part",
    "color": "#FFB3D9",
    "level": 9,
    "title": "PPYs (Level 9)"
  },
  {
    "id": 701,
    "label": "Vestibular nuclei",
    "acronym": "VNC",
    "name": "Vestibular nuclei",
    "color": "#FFB3D9",
    "level": 7,
    "title": "VNC (Level 7)"
  },
  {
    "id": 209,
    "label": "Lateral vestibular nucleus",
    "acronym": "LAV",
    "name": "Lateral vestibular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "LAV (Level 8)"
  },
  {
    "id": 202,
    "label": "Medial vestibular nucleus",
    "acronym": "MV",
    "name": "Medial vestibular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "MV (Level 8)"
  },
  {
    "id": 225,
    "label": "Spinal vestibular nucleus",
    "acronym": "SPIV",
    "name": "Spinal vestibular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "SPIV (Level 8)"
  },
  {
    "id": 217,
    "label": "Superior vestibular nucleus",
    "acronym": "SUV",
    "name": "Superior vestibular nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "SUV (Level 8)"
  },
  {
    "id": 765,
    "label": "Nucleus x",
    "acronym": "x",
    "name": "Nucleus x",
    "color": "#FFB3D9",
    "level": 8,
    "title": "x (Level 8)"
  },
  {
    "id": 773,
    "label": "Hypoglossal nucleus",
    "acronym": "XII",
    "name": "Hypoglossal nucleus",
    "color": "#FFB3D9",
    "level": 8,
    "title": "XII (Level 8)"
  },
  {
    "id": 781,
    "label": "Nucleus y",
    "acronym": "y",
    "name": "Nucleus y",
    "color": "#FFB3D9",
    "level": 8,
    "title": "y (Level 8)"
  },
  {
    "id": 76,
    "label": "Interstitial nucleus of the vestibular nerve",
    "acronym": "INV",
    "name": "Interstitial nucleus of the vestibular nerve",
    "color": "#FFB3D9",
    "level": 8,
    "title": "INV (Level 8)"
  },
  {
    "id": 379,
    "label": "Medulla, behavioral state related",
    "acronym": "MY-sat",
    "name": "Medulla, behavioral state related",
    "color": "#FFC6E2",
    "level": 6,
    "title": "MY-sat (Level 6)"
  },
  {
    "id": 206,
    "label": "Nucleus raphe magnus",
    "acronym": "RM",
    "name": "Nucleus raphe magnus",
    "color": "#FFC6E2",
    "level": 8,
    "title": "RM (Level 8)"
  },
  {
    "id": 230,
    "label": "Nucleus raphe pallidus",
    "acronym": "RPA",
    "name": "Nucleus raphe pallidus",
    "color": "#FFC6E2",
    "level": 8,
    "title": "RPA (Level 8)"
  },
  {
    "id": 222,
    "label": "Nucleus raphe obscurus",
    "acronym": "RO",
    "name": "Nucleus raphe obscurus",
    "color": "#FFC6E2",
    "level": 8,
    "title": "RO (Level 8)"
  },
  {
    "id": 512,
    "label": "Cerebellum",
    "acronym": "CB",
    "name": "Cerebellum",
    "color": "#F0F080",
    "level": 2,
    "title": "CB (Level 2)"
  },
  {
    "id": 528,
    "label": "Cerebellar cortex",
    "acronym": "CBX",
    "name": "Cerebellar cortex",
    "color": "#F0F080",
    "level": 5,
    "title": "CBX (Level 5)"
  },
  {
    "id": 1144,
    "label": "Cerebellar cortex, molecular layer",
    "acronym": "CBXmo",
    "name": "Cerebellar cortex, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CBXmo (Level 11)"
  },
  {
    "id": 1145,
    "label": "Cerebellar cortex, Purkinje layer",
    "acronym": "CBXpu",
    "name": "Cerebellar cortex, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CBXpu (Level 11)"
  },
  {
    "id": 1143,
    "label": "Cerebellar cortex, granular layer",
    "acronym": "CBXgr",
    "name": "Cerebellar cortex, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "CBXgr (Level 11)"
  },
  {
    "id": 645,
    "label": "Vermal regions",
    "acronym": "VERM",
    "name": "Vermal regions",
    "color": "#FFFC91",
    "level": 6,
    "title": "VERM (Level 6)"
  },
  {
    "id": 912,
    "label": "Lingula (I)",
    "acronym": "LING",
    "name": "Lingula (I)",
    "color": "#FFFC91",
    "level": 8,
    "title": "LING (Level 8)"
  },
  {
    "id": 10707,
    "label": "Lingula (I), molecular layer",
    "acronym": "LINGmo",
    "name": "Lingula (I), molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "LINGmo (Level 11)"
  },
  {
    "id": 10706,
    "label": "Lingula (I), Purkinje layer",
    "acronym": "LINGpu",
    "name": "Lingula (I), Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "LINGpu (Level 11)"
  },
  {
    "id": 10705,
    "label": "Lingula (I), granular layer",
    "acronym": "LINGgr",
    "name": "Lingula (I), granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "LINGgr (Level 11)"
  },
  {
    "id": 920,
    "label": "Central lobule",
    "acronym": "CENT",
    "name": "Central lobule",
    "color": "#FFFC91",
    "level": 7,
    "title": "CENT (Level 7)"
  },
  {
    "id": 976,
    "label": "Lobule II",
    "acronym": "CENT2",
    "name": "Lobule II",
    "color": "#FFFC91",
    "level": 8,
    "title": "CENT2 (Level 8)"
  },
  {
    "id": 10710,
    "label": "Lobule II, molecular layer",
    "acronym": "CENT2mo",
    "name": "Lobule II, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CENT2mo (Level 11)"
  },
  {
    "id": 10709,
    "label": "Lobule II, Purkinje layer",
    "acronym": "CENT2pu",
    "name": "Lobule II, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CENT2pu (Level 11)"
  },
  {
    "id": 10708,
    "label": "Lobule II, granular layer",
    "acronym": "CENT2gr",
    "name": "Lobule II, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "CENT2gr (Level 11)"
  },
  {
    "id": 984,
    "label": "Lobule III",
    "acronym": "CENT3",
    "name": "Lobule III",
    "color": "#FFFC91",
    "level": 8,
    "title": "CENT3 (Level 8)"
  },
  {
    "id": 10713,
    "label": "Lobule III, molecular layer",
    "acronym": "CENT3mo",
    "name": "Lobule III, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CENT3mo (Level 11)"
  },
  {
    "id": 10712,
    "label": "Lobule III, Purkinje layer",
    "acronym": "CENT3pu",
    "name": "Lobule III, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CENT3pu (Level 11)"
  },
  {
    "id": 10711,
    "label": "Lobule III, granular layer",
    "acronym": "CENT3gr",
    "name": "Lobule III, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "CENT3gr (Level 11)"
  },
  {
    "id": 928,
    "label": "Culmen",
    "acronym": "CUL",
    "name": "Culmen",
    "color": "#FFFC91",
    "level": 7,
    "title": "CUL (Level 7)"
  },
  {
    "id": 992,
    "label": "Lobule IV",
    "acronym": "CUL4",
    "name": "Lobule IV",
    "color": "#FFFC91",
    "level": 8,
    "title": "CUL4 (Level 8)"
  },
  {
    "id": 10716,
    "label": "Lobule IV, molecular layer",
    "acronym": "CUL4mo",
    "name": "Lobule IV, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CUL4mo (Level 11)"
  },
  {
    "id": 10715,
    "label": "Lobule IV, Purkinje layer",
    "acronym": "CUL4pu",
    "name": "Lobule IV, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CUL4pu (Level 11)"
  },
  {
    "id": 10714,
    "label": "Lobule IV, granular layer",
    "acronym": "CUL4gr",
    "name": "Lobule IV, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "CUL4gr (Level 11)"
  },
  {
    "id": 1001,
    "label": "Lobule V",
    "acronym": "CUL5",
    "name": "Lobule V",
    "color": "#FFFC91",
    "level": 8,
    "title": "CUL5 (Level 8)"
  },
  {
    "id": 10719,
    "label": "Lobule V, molecular layer",
    "acronym": "CUL5mo",
    "name": "Lobule V, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CUL5mo (Level 11)"
  },
  {
    "id": 10718,
    "label": "Lobule V, Purkinje layer",
    "acronym": "CUL5pu",
    "name": "Lobule V, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CUL5pu (Level 11)"
  },
  {
    "id": 10717,
    "label": "Lobule V, granular layer",
    "acronym": "CUL5gr",
    "name": "Lobule V, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "CUL5gr (Level 11)"
  },
  {
    "id": 1091,
    "label": "Lobules IV-V",
    "acronym": "CUL4, 5",
    "name": "Lobules IV-V",
    "color": "#FFFC91",
    "level": 8,
    "title": "CUL4, 5 (Level 8)"
  },
  {
    "id": 10722,
    "label": "Lobules IV-V, molecular layer",
    "acronym": "CUL4, 5mo",
    "name": "Lobules IV-V, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CUL4, 5mo (Level 11)"
  },
  {
    "id": 10721,
    "label": "Lobules IV-V, Purkinje layer",
    "acronym": "CUL4, 5pu",
    "name": "Lobules IV-V, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "CUL4, 5pu (Level 11)"
  },
  {
    "id": 10720,
    "label": "Lobules IV-V, granular layer",
    "acronym": "CUL4, 5gr",
    "name": "Lobules IV-V, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "CUL4, 5gr (Level 11)"
  },
  {
    "id": 936,
    "label": "Declive (VI)",
    "acronym": "DEC",
    "name": "Declive (VI)",
    "color": "#FFFC91",
    "level": 8,
    "title": "DEC (Level 8)"
  },
  {
    "id": 10725,
    "label": "Declive (VI), molecular layer",
    "acronym": "DECmo",
    "name": "Declive (VI), molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "DECmo (Level 11)"
  },
  {
    "id": 10724,
    "label": "Declive (VI), Purkinje layer",
    "acronym": "DECpu",
    "name": "Declive (VI), Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "DECpu (Level 11)"
  },
  {
    "id": 10723,
    "label": "Declive (VI), granular layer",
    "acronym": "DECgr",
    "name": "Declive (VI), granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "DECgr (Level 11)"
  },
  {
    "id": 944,
    "label": "Folium-tuber vermis (VII)",
    "acronym": "FOTU",
    "name": "Folium-tuber vermis (VII)",
    "color": "#FFFC91",
    "level": 8,
    "title": "FOTU (Level 8)"
  },
  {
    "id": 10728,
    "label": "Folium-tuber vermis (VII), molecular layer",
    "acronym": "FOTUmo",
    "name": "Folium-tuber vermis (VII), molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "FOTUmo (Level 11)"
  },
  {
    "id": 10727,
    "label": "Folium-tuber vermis (VII), Purkinje layer",
    "acronym": "FOTUpu",
    "name": "Folium-tuber vermis (VII), Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "FOTUpu (Level 11)"
  },
  {
    "id": 10726,
    "label": "Folium-tuber vermis (VII), granular layer",
    "acronym": "FOTUgr",
    "name": "Folium-tuber vermis (VII), granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "FOTUgr (Level 11)"
  },
  {
    "id": 951,
    "label": "Pyramus (VIII)",
    "acronym": "PYR",
    "name": "Pyramus (VIII)",
    "color": "#FFFC91",
    "level": 8,
    "title": "PYR (Level 8)"
  },
  {
    "id": 10731,
    "label": "Pyramus (VIII), molecular layer",
    "acronym": "PYRmo",
    "name": "Pyramus (VIII), molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "PYRmo (Level 11)"
  },
  {
    "id": 10730,
    "label": "Pyramus (VIII), Purkinje layer",
    "acronym": "PYRpu",
    "name": "Pyramus (VIII), Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "PYRpu (Level 11)"
  },
  {
    "id": 10729,
    "label": "Pyramus (VIII), granular layer",
    "acronym": "PYRgr",
    "name": "Pyramus (VIII), granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "PYRgr (Level 11)"
  },
  {
    "id": 957,
    "label": "Uvula (IX)",
    "acronym": "UVU",
    "name": "Uvula (IX)",
    "color": "#FFFC91",
    "level": 8,
    "title": "UVU (Level 8)"
  },
  {
    "id": 10734,
    "label": "Uvula (IX), molecular layer",
    "acronym": "UVUmo",
    "name": "Uvula (IX), molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "UVUmo (Level 11)"
  },
  {
    "id": 10733,
    "label": "Uvula (IX), Purkinje layer",
    "acronym": "UVUpu",
    "name": "Uvula (IX), Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "UVUpu (Level 11)"
  },
  {
    "id": 10732,
    "label": "Uvula (IX), granular layer",
    "acronym": "UVUgr",
    "name": "Uvula (IX), granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "UVUgr (Level 11)"
  },
  {
    "id": 968,
    "label": "Nodulus (X)",
    "acronym": "NOD",
    "name": "Nodulus (X)",
    "color": "#FFFC91",
    "level": 8,
    "title": "NOD (Level 8)"
  },
  {
    "id": 10737,
    "label": "Nodulus (X), molecular layer",
    "acronym": "NODmo",
    "name": "Nodulus (X), molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "NODmo (Level 11)"
  },
  {
    "id": 10736,
    "label": "Nodulus (X), Purkinje layer",
    "acronym": "NODpu",
    "name": "Nodulus (X), Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "NODpu (Level 11)"
  },
  {
    "id": 10735,
    "label": "Nodulus (X), granular layer",
    "acronym": "NODgr",
    "name": "Nodulus (X), granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "NODgr (Level 11)"
  },
  {
    "id": 1073,
    "label": "Hemispheric regions",
    "acronym": "HEM",
    "name": "Hemispheric regions",
    "color": "#FFFC91",
    "level": 6,
    "title": "HEM (Level 6)"
  },
  {
    "id": 1007,
    "label": "Simple lobule",
    "acronym": "SIM",
    "name": "Simple lobule",
    "color": "#FFFC91",
    "level": 8,
    "title": "SIM (Level 8)"
  },
  {
    "id": 10674,
    "label": "Simple lobule, molecular layer",
    "acronym": "SIMmo",
    "name": "Simple lobule, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "SIMmo (Level 11)"
  },
  {
    "id": 10673,
    "label": "Simple lobule, Purkinje layer",
    "acronym": "SIMpu",
    "name": "Simple lobule, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "SIMpu (Level 11)"
  },
  {
    "id": 10672,
    "label": "Simple lobule, granular layer",
    "acronym": "SIMgr",
    "name": "Simple lobule, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "SIMgr (Level 11)"
  },
  {
    "id": 1017,
    "label": "Ansiform lobule",
    "acronym": "AN",
    "name": "Ansiform lobule",
    "color": "#FFFC91",
    "level": 7,
    "title": "AN (Level 7)"
  },
  {
    "id": 1056,
    "label": "Crus 1",
    "acronym": "ANcr1",
    "name": "Crus 1",
    "color": "#FFFC91",
    "level": 8,
    "title": "ANcr1 (Level 8)"
  },
  {
    "id": 10677,
    "label": "Crus 1, molecular layer",
    "acronym": "ANcr1mo",
    "name": "Crus 1, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "ANcr1mo (Level 11)"
  },
  {
    "id": 10676,
    "label": "Crus 1, Purkinje layer",
    "acronym": "ANcr1pu",
    "name": "Crus 1, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "ANcr1pu (Level 11)"
  },
  {
    "id": 10675,
    "label": "Crus 1, granular layer",
    "acronym": "ANcr1gr",
    "name": "Crus 1, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "ANcr1gr (Level 11)"
  },
  {
    "id": 1064,
    "label": "Crus 2",
    "acronym": "ANcr2",
    "name": "Crus 2",
    "color": "#FFFC91",
    "level": 8,
    "title": "ANcr2 (Level 8)"
  },
  {
    "id": 10680,
    "label": "Crus 2, molecular layer",
    "acronym": "ANcr2mo",
    "name": "Crus 2, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "ANcr2mo (Level 11)"
  },
  {
    "id": 10679,
    "label": "Crus 2, Purkinje layer",
    "acronym": "ANcr2pu",
    "name": "Crus 2, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "ANcr2pu (Level 11)"
  },
  {
    "id": 10678,
    "label": "Crus 2, granular layer",
    "acronym": "ANcr2gr",
    "name": "Crus 2, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "ANcr2gr (Level 11)"
  },
  {
    "id": 1025,
    "label": "Paramedian lobule",
    "acronym": "PRM",
    "name": "Paramedian lobule",
    "color": "#FFFC91",
    "level": 8,
    "title": "PRM (Level 8)"
  },
  {
    "id": 10683,
    "label": "Paramedian lobule, molecular layer",
    "acronym": "PRMmo",
    "name": "Paramedian lobule, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "PRMmo (Level 11)"
  },
  {
    "id": 10682,
    "label": "Paramedian lobule, Purkinje layer",
    "acronym": "PRMpu",
    "name": "Paramedian lobule, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "PRMpu (Level 11)"
  },
  {
    "id": 10681,
    "label": "Paramedian lobule, granular layer",
    "acronym": "PRMgr",
    "name": "Paramedian lobule, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "PRMgr (Level 11)"
  },
  {
    "id": 1033,
    "label": "Copula pyramidis",
    "acronym": "COPY",
    "name": "Copula pyramidis",
    "color": "#FFFC91",
    "level": 8,
    "title": "COPY (Level 8)"
  },
  {
    "id": 10686,
    "label": "Copula pyramidis, molecular layer",
    "acronym": "COPYmo",
    "name": "Copula pyramidis, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "COPYmo (Level 11)"
  },
  {
    "id": 10685,
    "label": "Copula pyramidis, Purkinje layer",
    "acronym": "COPYpu",
    "name": "Copula pyramidis, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "COPYpu (Level 11)"
  },
  {
    "id": 10684,
    "label": "Copula pyramidis, granular layer",
    "acronym": "COPYgr",
    "name": "Copula pyramidis, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "COPYgr (Level 11)"
  },
  {
    "id": 1041,
    "label": "Paraflocculus",
    "acronym": "PFL",
    "name": "Paraflocculus",
    "color": "#FFFC91",
    "level": 8,
    "title": "PFL (Level 8)"
  },
  {
    "id": 10689,
    "label": "Paraflocculus, molecular layer",
    "acronym": "PFLmo",
    "name": "Paraflocculus, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "PFLmo (Level 11)"
  },
  {
    "id": 10688,
    "label": "Paraflocculus, Purkinje layer",
    "acronym": "PFLpu",
    "name": "Paraflocculus, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "PFLpu (Level 11)"
  },
  {
    "id": 10687,
    "label": "Paraflocculus, granular layer",
    "acronym": "PFLgr",
    "name": "Paraflocculus, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "PFLgr (Level 11)"
  },
  {
    "id": 1049,
    "label": "Flocculus",
    "acronym": "FL",
    "name": "Flocculus",
    "color": "#FFFC91",
    "level": 8,
    "title": "FL (Level 8)"
  },
  {
    "id": 10692,
    "label": "Flocculus, molecular layer",
    "acronym": "FLmo",
    "name": "Flocculus, molecular layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "FLmo (Level 11)"
  },
  {
    "id": 10691,
    "label": "Flocculus, Purkinje layer",
    "acronym": "FLpu",
    "name": "Flocculus, Purkinje layer",
    "color": "#FFFC91",
    "level": 11,
    "title": "FLpu (Level 11)"
  },
  {
    "id": 10690,
    "label": "Flocculus, granular layer",
    "acronym": "FLgr",
    "name": "Flocculus, granular layer",
    "color": "#ECE754",
    "level": 11,
    "title": "FLgr (Level 11)"
  },
  {
    "id": 519,
    "label": "Cerebellar nuclei",
    "acronym": "CBN",
    "name": "Cerebellar nuclei",
    "color": "#F0F080",
    "level": 5,
    "title": "CBN (Level 5)"
  },
  {
    "id": 989,
    "label": "Fastigial nucleus",
    "acronym": "FN",
    "name": "Fastigial nucleus",
    "color": "#FFFDBC",
    "level": 8,
    "title": "FN (Level 8)"
  },
  {
    "id": 91,
    "label": "Interposed nucleus",
    "acronym": "IP",
    "name": "Interposed nucleus",
    "color": "#FFFDBC",
    "level": 8,
    "title": "IP (Level 8)"
  },
  {
    "id": 846,
    "label": "Dentate nucleus",
    "acronym": "DN",
    "name": "Dentate nucleus",
    "color": "#FFFDBC",
    "level": 8,
    "title": "DN (Level 8)"
  },
  {
    "id": 589508455,
    "label": "Vestibulocerebellar nucleus",
    "acronym": "VeCB",
    "name": "Vestibulocerebellar nucleus",
    "color": "#FFFDBC",
    "level": 8,
    "title": "VeCB (Level 8)"
  },
  {
    "id": 1009,
    "label": "fiber tracts",
    "acronym": "fiber tracts",
    "name": "fiber tracts",
    "color": "#CCCCCC",
    "level": 1,
    "title": "fiber tracts (Level 1)"
  },
  {
    "id": 967,
    "label": "cranial nerves",
    "acronym": "cm",
    "name": "cranial nerves",
    "color": "#CCCCCC",
    "level": 2,
    "title": "cm (Level 2)"
  },
  {
    "id": 885,
    "label": "terminal nerve",
    "acronym": "tn",
    "name": "terminal nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "tn (Level 8)"
  },
  {
    "id": 949,
    "label": "vomeronasal nerve",
    "acronym": "von",
    "name": "vomeronasal nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "von (Level 8)"
  },
  {
    "id": 840,
    "label": "olfactory nerve",
    "acronym": "In",
    "name": "olfactory nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "In (Level 8)"
  },
  {
    "id": 1016,
    "label": "olfactory nerve layer of main olfactory bulb",
    "acronym": "onl",
    "name": "olfactory nerve layer of main olfactory bulb",
    "color": "#CCCCCC",
    "level": 9,
    "title": "onl (Level 9)"
  },
  {
    "id": 21,
    "label": "lateral olfactory tract, general",
    "acronym": "lotg",
    "name": "lateral olfactory tract, general",
    "color": "#CCCCCC",
    "level": 9,
    "title": "lotg (Level 9)"
  },
  {
    "id": 665,
    "label": "lateral olfactory tract, body",
    "acronym": "lot",
    "name": "lateral olfactory tract, body",
    "color": "#CCCCCC",
    "level": 10,
    "title": "lot (Level 10)"
  },
  {
    "id": 538,
    "label": "dorsal limb",
    "acronym": "lotd",
    "name": "dorsal limb",
    "color": "#CCCCCC",
    "level": 10,
    "title": "lotd (Level 10)"
  },
  {
    "id": 459,
    "label": "accessory olfactory tract",
    "acronym": "aolt",
    "name": "accessory olfactory tract",
    "color": "#CCCCCC",
    "level": 10,
    "title": "aolt (Level 10)"
  },
  {
    "id": 900,
    "label": "anterior commissure, olfactory limb",
    "acronym": "aco",
    "name": "anterior commissure, olfactory limb",
    "color": "#CCCCCC",
    "level": 9,
    "title": "aco (Level 9)"
  },
  {
    "id": 848,
    "label": "optic nerve",
    "acronym": "IIn",
    "name": "optic nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "IIn (Level 8)"
  },
  {
    "id": 876,
    "label": "accessory optic tract",
    "acronym": "aot",
    "name": "accessory optic tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "aot (Level 9)"
  },
  {
    "id": 916,
    "label": "brachium of the superior colliculus",
    "acronym": "bsc",
    "name": "brachium of the superior colliculus",
    "color": "#CCCCCC",
    "level": 9,
    "title": "bsc (Level 9)"
  },
  {
    "id": 336,
    "label": "superior colliculus commissure",
    "acronym": "csc",
    "name": "superior colliculus commissure",
    "color": "#CCCCCC",
    "level": 9,
    "title": "csc (Level 9)"
  },
  {
    "id": 117,
    "label": "optic chiasm",
    "acronym": "och",
    "name": "optic chiasm",
    "color": "#CCCCCC",
    "level": 9,
    "title": "och (Level 9)"
  },
  {
    "id": 125,
    "label": "optic tract",
    "acronym": "opt",
    "name": "optic tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "opt (Level 9)"
  },
  {
    "id": 357,
    "label": "tectothalamic pathway",
    "acronym": "ttp",
    "name": "tectothalamic pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ttp (Level 9)"
  },
  {
    "id": 832,
    "label": "oculomotor nerve",
    "acronym": "IIIn",
    "name": "oculomotor nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "IIIn (Level 8)"
  },
  {
    "id": 62,
    "label": "medial longitudinal fascicle",
    "acronym": "mlf",
    "name": "medial longitudinal fascicle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "mlf (Level 9)"
  },
  {
    "id": 158,
    "label": "posterior commissure",
    "acronym": "pc",
    "name": "posterior commissure",
    "color": "#CCCCCC",
    "level": 9,
    "title": "pc (Level 9)"
  },
  {
    "id": 911,
    "label": "trochlear nerve",
    "acronym": "IVn",
    "name": "trochlear nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "IVn (Level 8)"
  },
  {
    "id": 384,
    "label": "trochlear nerve decussation",
    "acronym": "IVd",
    "name": "trochlear nerve decussation",
    "color": "#CCCCCC",
    "level": 9,
    "title": "IVd (Level 9)"
  },
  {
    "id": 710,
    "label": "abducens nerve",
    "acronym": "VIn",
    "name": "abducens nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "VIn (Level 8)"
  },
  {
    "id": 901,
    "label": "trigeminal nerve",
    "acronym": "Vn",
    "name": "trigeminal nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "Vn (Level 8)"
  },
  {
    "id": 93,
    "label": "motor root of the trigeminal nerve",
    "acronym": "moV",
    "name": "motor root of the trigeminal nerve",
    "color": "#CCCCCC",
    "level": 9,
    "title": "moV (Level 9)"
  },
  {
    "id": 229,
    "label": "sensory root of the trigeminal nerve",
    "acronym": "sV",
    "name": "sensory root of the trigeminal nerve",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sV (Level 9)"
  },
  {
    "id": 705,
    "label": "midbrain tract of the trigeminal nerve",
    "acronym": "mtV",
    "name": "midbrain tract of the trigeminal nerve",
    "color": "#CCCCCC",
    "level": 10,
    "title": "mtV (Level 10)"
  },
  {
    "id": 794,
    "label": "spinal tract of the trigeminal nerve",
    "acronym": "sptV",
    "name": "spinal tract of the trigeminal nerve",
    "color": "#CCCCCC",
    "level": 10,
    "title": "sptV (Level 10)"
  },
  {
    "id": 798,
    "label": "facial nerve",
    "acronym": "VIIn",
    "name": "facial nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "VIIn (Level 8)"
  },
  {
    "id": 1131,
    "label": "intermediate nerve",
    "acronym": "iVIIn",
    "name": "intermediate nerve",
    "color": "#CCCCCC",
    "level": 9,
    "title": "iVIIn (Level 9)"
  },
  {
    "id": 1116,
    "label": "genu of the facial nerve",
    "acronym": "gVIIn",
    "name": "genu of the facial nerve",
    "color": "#CCCCCC",
    "level": 9,
    "title": "gVIIn (Level 9)"
  },
  {
    "id": 933,
    "label": "vestibulocochlear nerve",
    "acronym": "VIIIn",
    "name": "vestibulocochlear nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "VIIIn (Level 8)"
  },
  {
    "id": 1076,
    "label": "efferent cochleovestibular bundle",
    "acronym": "cvb",
    "name": "efferent cochleovestibular bundle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cvb (Level 9)"
  },
  {
    "id": 413,
    "label": "vestibular nerve",
    "acronym": "vVIIIn",
    "name": "vestibular nerve",
    "color": "#CCCCCC",
    "level": 9,
    "title": "vVIIIn (Level 9)"
  },
  {
    "id": 948,
    "label": "cochlear nerve",
    "acronym": "cVIIIn",
    "name": "cochlear nerve",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cVIIIn (Level 9)"
  },
  {
    "id": 841,
    "label": "trapezoid body",
    "acronym": "tb",
    "name": "trapezoid body",
    "color": "#CCCCCC",
    "level": 10,
    "title": "tb (Level 10)"
  },
  {
    "id": 641,
    "label": "intermediate acoustic stria",
    "acronym": "ias",
    "name": "intermediate acoustic stria",
    "color": "#CCCCCC",
    "level": 10,
    "title": "ias (Level 10)"
  },
  {
    "id": 506,
    "label": "dorsal acoustic stria",
    "acronym": "das",
    "name": "dorsal acoustic stria",
    "color": "#CCCCCC",
    "level": 10,
    "title": "das (Level 10)"
  },
  {
    "id": 658,
    "label": "lateral lemniscus",
    "acronym": "ll",
    "name": "lateral lemniscus",
    "color": "#CCCCCC",
    "level": 10,
    "title": "ll (Level 10)"
  },
  {
    "id": 633,
    "label": "inferior colliculus commissure",
    "acronym": "cic",
    "name": "inferior colliculus commissure",
    "color": "#CCCCCC",
    "level": 10,
    "title": "cic (Level 10)"
  },
  {
    "id": 482,
    "label": "brachium of the inferior colliculus",
    "acronym": "bic",
    "name": "brachium of the inferior colliculus",
    "color": "#CCCCCC",
    "level": 10,
    "title": "bic (Level 10)"
  },
  {
    "id": 808,
    "label": "glossopharyngeal nerve",
    "acronym": "IXn",
    "name": "glossopharyngeal nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "IXn (Level 8)"
  },
  {
    "id": 917,
    "label": "vagus nerve",
    "acronym": "Xn",
    "name": "vagus nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "Xn (Level 8)"
  },
  {
    "id": 237,
    "label": "solitary tract",
    "acronym": "ts",
    "name": "solitary tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ts (Level 9)"
  },
  {
    "id": 717,
    "label": "accessory spinal nerve",
    "acronym": "XIn",
    "name": "accessory spinal nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "XIn (Level 8)"
  },
  {
    "id": 813,
    "label": "hypoglossal nerve",
    "acronym": "XIIn",
    "name": "hypoglossal nerve",
    "color": "#CCCCCC",
    "level": 8,
    "title": "XIIn (Level 8)"
  },
  {
    "id": 925,
    "label": "ventral roots",
    "acronym": "vrt",
    "name": "ventral roots",
    "color": "#CCCCCC",
    "level": 7,
    "title": "vrt (Level 7)"
  },
  {
    "id": 792,
    "label": "dorsal roots",
    "acronym": "drt",
    "name": "dorsal roots",
    "color": "#CCCCCC",
    "level": 7,
    "title": "drt (Level 7)"
  },
  {
    "id": 932,
    "label": "cervicothalamic tract",
    "acronym": "cett",
    "name": "cervicothalamic tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "cett (Level 8)"
  },
  {
    "id": 570,
    "label": "dorsolateral fascicle",
    "acronym": "dl",
    "name": "dorsolateral fascicle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dl (Level 9)"
  },
  {
    "id": 522,
    "label": "dorsal commissure of the spinal cord",
    "acronym": "dcm",
    "name": "dorsal commissure of the spinal cord",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dcm (Level 9)"
  },
  {
    "id": 858,
    "label": "ventral commissure of the spinal cord",
    "acronym": "vc",
    "name": "ventral commissure of the spinal cord",
    "color": "#CCCCCC",
    "level": 9,
    "title": "vc (Level 9)"
  },
  {
    "id": 586,
    "label": "fasciculus proprius",
    "acronym": "fpr",
    "name": "fasciculus proprius",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fpr (Level 9)"
  },
  {
    "id": 514,
    "label": "dorsal column",
    "acronym": "dc",
    "name": "dorsal column",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dc (Level 9)"
  },
  {
    "id": 380,
    "label": "cuneate fascicle",
    "acronym": "cuf",
    "name": "cuneate fascicle",
    "color": "#CCCCCC",
    "level": 10,
    "title": "cuf (Level 10)"
  },
  {
    "id": 388,
    "label": "gracile fascicle",
    "acronym": "grf",
    "name": "gracile fascicle",
    "color": "#CCCCCC",
    "level": 10,
    "title": "grf (Level 10)"
  },
  {
    "id": 396,
    "label": "internal arcuate fibers",
    "acronym": "iaf",
    "name": "internal arcuate fibers",
    "color": "#CCCCCC",
    "level": 10,
    "title": "iaf (Level 10)"
  },
  {
    "id": 697,
    "label": "medial lemniscus",
    "acronym": "ml",
    "name": "medial lemniscus",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ml (Level 9)"
  },
  {
    "id": 871,
    "label": "spinothalamic tract",
    "acronym": "sst",
    "name": "spinothalamic tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "sst (Level 8)"
  },
  {
    "id": 29,
    "label": "lateral spinothalamic tract",
    "acronym": "sttl",
    "name": "lateral spinothalamic tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sttl (Level 9)"
  },
  {
    "id": 389,
    "label": "ventral spinothalamic tract",
    "acronym": "sttv",
    "name": "ventral spinothalamic tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sttv (Level 9)"
  },
  {
    "id": 245,
    "label": "spinocervical tract",
    "acronym": "scrt",
    "name": "spinocervical tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "scrt (Level 9)"
  },
  {
    "id": 261,
    "label": "spino-olivary pathway",
    "acronym": "sop",
    "name": "spino-olivary pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sop (Level 9)"
  },
  {
    "id": 270,
    "label": "spinoreticular pathway",
    "acronym": "srp",
    "name": "spinoreticular pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "srp (Level 9)"
  },
  {
    "id": 293,
    "label": "spinovestibular pathway",
    "acronym": "svp",
    "name": "spinovestibular pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "svp (Level 9)"
  },
  {
    "id": 277,
    "label": "spinotectal pathway",
    "acronym": "stp",
    "name": "spinotectal pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "stp (Level 9)"
  },
  {
    "id": 253,
    "label": "spinohypothalamic pathway",
    "acronym": "shp",
    "name": "spinohypothalamic pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "shp (Level 9)"
  },
  {
    "id": 285,
    "label": "spinotelenchephalic pathway",
    "acronym": "step",
    "name": "spinotelenchephalic pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "step (Level 9)"
  },
  {
    "id": 627,
    "label": "hypothalamohypophysial tract",
    "acronym": "hht",
    "name": "hypothalamohypophysial tract",
    "color": "#CCCCCC",
    "level": 10,
    "title": "hht (Level 10)"
  },
  {
    "id": 960,
    "label": "cerebellum related fiber tracts",
    "acronym": "cbf",
    "name": "cerebellum related fiber tracts",
    "color": "#CCCCCC",
    "level": 2,
    "title": "cbf (Level 2)"
  },
  {
    "id": 744,
    "label": "cerebellar commissure",
    "acronym": "cbc",
    "name": "cerebellar commissure",
    "color": "#CCCCCC",
    "level": 8,
    "title": "cbc (Level 8)"
  },
  {
    "id": 752,
    "label": "cerebellar peduncles",
    "acronym": "cbp",
    "name": "cerebellar peduncles",
    "color": "#CCCCCC",
    "level": 7,
    "title": "cbp (Level 7)"
  },
  {
    "id": 326,
    "label": "superior cerebelar peduncles",
    "acronym": "scp",
    "name": "superior cerebelar peduncles",
    "color": "#CCCCCC",
    "level": 8,
    "title": "scp (Level 8)"
  },
  {
    "id": 812,
    "label": "superior cerebellar peduncle decussation",
    "acronym": "dscp",
    "name": "superior cerebellar peduncle decussation",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dscp (Level 9)"
  },
  {
    "id": 85,
    "label": "spinocerebellar tract",
    "acronym": "sct",
    "name": "spinocerebellar tract",
    "color": "#CCCCCC",
    "level": 10,
    "title": "sct (Level 10)"
  },
  {
    "id": 850,
    "label": "uncinate fascicle",
    "acronym": "uf",
    "name": "uncinate fascicle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "uf (Level 9)"
  },
  {
    "id": 866,
    "label": "ventral spinocerebellar tract",
    "acronym": "sctv",
    "name": "ventral spinocerebellar tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sctv (Level 9)"
  },
  {
    "id": 78,
    "label": "middle cerebellar peduncle",
    "acronym": "mcp",
    "name": "middle cerebellar peduncle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mcp (Level 8)"
  },
  {
    "id": 1123,
    "label": "inferior cerebellar peduncle",
    "acronym": "icp",
    "name": "inferior cerebellar peduncle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "icp (Level 8)"
  },
  {
    "id": 553,
    "label": "dorsal spinocerebellar tract",
    "acronym": "sctd",
    "name": "dorsal spinocerebellar tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sctd (Level 9)"
  },
  {
    "id": 499,
    "label": "cuneocerebellar tract",
    "acronym": "cct",
    "name": "cuneocerebellar tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cct (Level 9)"
  },
  {
    "id": 650,
    "label": "juxtarestiform body",
    "acronym": "jrb",
    "name": "juxtarestiform body",
    "color": "#CCCCCC",
    "level": 9,
    "title": "jrb (Level 9)"
  },
  {
    "id": 490,
    "label": "bulbocerebellar tract",
    "acronym": "bct",
    "name": "bulbocerebellar tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "bct (Level 9)"
  },
  {
    "id": 404,
    "label": "olivocerebellar tract",
    "acronym": "oct",
    "name": "olivocerebellar tract",
    "color": "#CCCCCC",
    "level": 10,
    "title": "oct (Level 10)"
  },
  {
    "id": 410,
    "label": "reticulocerebellar tract",
    "acronym": "rct",
    "name": "reticulocerebellar tract",
    "color": "#CCCCCC",
    "level": 10,
    "title": "rct (Level 10)"
  },
  {
    "id": 373,
    "label": "trigeminocerebellar tract",
    "acronym": "tct",
    "name": "trigeminocerebellar tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "tct (Level 8)"
  },
  {
    "id": 728,
    "label": "arbor vitae",
    "acronym": "arb",
    "name": "arbor vitae",
    "color": "#CCCCCC",
    "level": 8,
    "title": "arb (Level 8)"
  },
  {
    "id": 484682512,
    "label": "supra-callosal cerebral white matter",
    "acronym": "scwm",
    "name": "supra-callosal cerebral white matter",
    "color": "#CCCCCC",
    "level": 2,
    "title": "scwm (Level 2)"
  },
  {
    "id": 983,
    "label": "lateral forebrain bundle system",
    "acronym": "lfbs",
    "name": "lateral forebrain bundle system",
    "color": "#CCCCCC",
    "level": 2,
    "title": "lfbs (Level 2)"
  },
  {
    "id": 776,
    "label": "corpus callosum",
    "acronym": "cc",
    "name": "corpus callosum",
    "color": "#CCCCCC",
    "level": 8,
    "title": "cc (Level 8)"
  },
  {
    "id": 956,
    "label": "corpus callosum, anterior forceps",
    "acronym": "fa",
    "name": "corpus callosum, anterior forceps",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fa (Level 9)"
  },
  {
    "id": 579,
    "label": "external capsule",
    "acronym": "ec",
    "name": "external capsule",
    "color": "#CCCCCC",
    "level": 10,
    "title": "ec (Level 10)"
  },
  {
    "id": 964,
    "label": "corpus callosum, extreme capsule",
    "acronym": "ee",
    "name": "corpus callosum, extreme capsule",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ee (Level 9)"
  },
  {
    "id": 1108,
    "label": "genu of corpus callosum",
    "acronym": "ccg",
    "name": "genu of corpus callosum",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ccg (Level 9)"
  },
  {
    "id": 971,
    "label": "corpus callosum, posterior forceps",
    "acronym": "fp",
    "name": "corpus callosum, posterior forceps",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fp (Level 9)"
  },
  {
    "id": 979,
    "label": "corpus callosum, rostrum",
    "acronym": "ccr",
    "name": "corpus callosum, rostrum",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ccr (Level 9)"
  },
  {
    "id": 484682516,
    "label": "corpus callosum, body",
    "acronym": "ccb",
    "name": "corpus callosum, body",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ccb (Level 9)"
  },
  {
    "id": 986,
    "label": "corpus callosum, splenium",
    "acronym": "ccs",
    "name": "corpus callosum, splenium",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ccs (Level 9)"
  },
  {
    "id": 784,
    "label": "corticospinal tract",
    "acronym": "cst",
    "name": "corticospinal tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "cst (Level 8)"
  },
  {
    "id": 6,
    "label": "internal capsule",
    "acronym": "int",
    "name": "internal capsule",
    "color": "#CCCCCC",
    "level": 9,
    "title": "int (Level 9)"
  },
  {
    "id": 924,
    "label": "cerebal peduncle",
    "acronym": "cpd",
    "name": "cerebal peduncle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cpd (Level 9)"
  },
  {
    "id": 1036,
    "label": "corticotectal tract",
    "acronym": "cte",
    "name": "corticotectal tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cte (Level 9)"
  },
  {
    "id": 1012,
    "label": "corticorubral tract",
    "acronym": "crt",
    "name": "corticorubral tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "crt (Level 9)"
  },
  {
    "id": 1003,
    "label": "corticopontine tract",
    "acronym": "cpt",
    "name": "corticopontine tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cpt (Level 9)"
  },
  {
    "id": 994,
    "label": "corticobulbar tract",
    "acronym": "cbt",
    "name": "corticobulbar tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cbt (Level 9)"
  },
  {
    "id": 190,
    "label": "pyramid",
    "acronym": "py",
    "name": "pyramid",
    "color": "#CCCCCC",
    "level": 9,
    "title": "py (Level 9)"
  },
  {
    "id": 198,
    "label": "pyramidal decussation",
    "acronym": "pyd",
    "name": "pyramidal decussation",
    "color": "#CCCCCC",
    "level": 9,
    "title": "pyd (Level 9)"
  },
  {
    "id": 1019,
    "label": "corticospinal tract, crossed",
    "acronym": "cstc",
    "name": "corticospinal tract, crossed",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cstc (Level 9)"
  },
  {
    "id": 1028,
    "label": "corticospinal tract, uncrossed",
    "acronym": "cstu",
    "name": "corticospinal tract, uncrossed",
    "color": "#CCCCCC",
    "level": 9,
    "title": "cstu (Level 9)"
  },
  {
    "id": 896,
    "label": "thalamus related",
    "acronym": "lfbst",
    "name": "thalamus related",
    "color": "#CCCCCC",
    "level": 7,
    "title": "lfbst (Level 7)"
  },
  {
    "id": 1092,
    "label": "external medullary lamina of the thalamus",
    "acronym": "em",
    "name": "external medullary lamina of the thalamus",
    "color": "#CCCCCC",
    "level": 8,
    "title": "em (Level 8)"
  },
  {
    "id": 14,
    "label": "internal medullary lamina of the thalamus",
    "acronym": "im",
    "name": "internal medullary lamina of the thalamus",
    "color": "#CCCCCC",
    "level": 8,
    "title": "im (Level 8)"
  },
  {
    "id": 86,
    "label": "middle thalamic commissure",
    "acronym": "mtc",
    "name": "middle thalamic commissure",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mtc (Level 8)"
  },
  {
    "id": 365,
    "label": "thalamic peduncles",
    "acronym": "tp",
    "name": "thalamic peduncles",
    "color": "#CCCCCC",
    "level": 8,
    "title": "tp (Level 8)"
  },
  {
    "id": 484682520,
    "label": "optic radiation",
    "acronym": "or",
    "name": "optic radiation",
    "color": "#CCCCCC",
    "level": 8,
    "title": "or (Level 8)"
  },
  {
    "id": 484682524,
    "label": "auditory radiation",
    "acronym": "ar",
    "name": "auditory radiation",
    "color": "#CCCCCC",
    "level": 8,
    "title": "ar (Level 8)"
  },
  {
    "id": 1000,
    "label": "extrapyramidal fiber systems",
    "acronym": "eps",
    "name": "extrapyramidal fiber systems",
    "color": "#CCCCCC",
    "level": 2,
    "title": "eps (Level 2)"
  },
  {
    "id": 760,
    "label": "cerebral nuclei related",
    "acronym": "epsc",
    "name": "cerebral nuclei related",
    "color": "#CCCCCC",
    "level": 7,
    "title": "epsc (Level 7)"
  },
  {
    "id": 142,
    "label": "pallidothalamic pathway",
    "acronym": "pap",
    "name": "pallidothalamic pathway",
    "color": "#CCCCCC",
    "level": 8,
    "title": "pap (Level 8)"
  },
  {
    "id": 102,
    "label": "nigrostriatal tract",
    "acronym": "nst",
    "name": "nigrostriatal tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "nst (Level 8)"
  },
  {
    "id": 109,
    "label": "nigrothalamic fibers",
    "acronym": "ntt",
    "name": "nigrothalamic fibers",
    "color": "#CCCCCC",
    "level": 8,
    "title": "ntt (Level 8)"
  },
  {
    "id": 134,
    "label": "pallidotegmental fascicle",
    "acronym": "ptf",
    "name": "pallidotegmental fascicle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "ptf (Level 8)"
  },
  {
    "id": 309,
    "label": "striatonigral pathway",
    "acronym": "snp",
    "name": "striatonigral pathway",
    "color": "#CCCCCC",
    "level": 8,
    "title": "snp (Level 8)"
  },
  {
    "id": 317,
    "label": "subthalamic fascicle",
    "acronym": "stf",
    "name": "subthalamic fascicle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "stf (Level 8)"
  },
  {
    "id": 877,
    "label": "tectospinal pathway",
    "acronym": "tsp",
    "name": "tectospinal pathway",
    "color": "#CCCCCC",
    "level": 8,
    "title": "tsp (Level 8)"
  },
  {
    "id": 1051,
    "label": "direct tectospinal pathway",
    "acronym": "tspd",
    "name": "direct tectospinal pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "tspd (Level 9)"
  },
  {
    "id": 1060,
    "label": "doral tegmental decussation",
    "acronym": "dtd",
    "name": "doral tegmental decussation",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dtd (Level 9)"
  },
  {
    "id": 1043,
    "label": "crossed tectospinal pathway",
    "acronym": "tspc",
    "name": "crossed tectospinal pathway",
    "color": "#CCCCCC",
    "level": 9,
    "title": "tspc (Level 9)"
  },
  {
    "id": 863,
    "label": "rubrospinal tract",
    "acronym": "rust",
    "name": "rubrospinal tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "rust (Level 8)"
  },
  {
    "id": 397,
    "label": "ventral tegmental decussation",
    "acronym": "vtd",
    "name": "ventral tegmental decussation",
    "color": "#CCCCCC",
    "level": 9,
    "title": "vtd (Level 9)"
  },
  {
    "id": 221,
    "label": "rubroreticular tract",
    "acronym": "rrt",
    "name": "rubroreticular tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "rrt (Level 9)"
  },
  {
    "id": 736,
    "label": "central tegmental bundle",
    "acronym": "ctb",
    "name": "central tegmental bundle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "ctb (Level 8)"
  },
  {
    "id": 855,
    "label": "retriculospinal tract",
    "acronym": "rst",
    "name": "retriculospinal tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "rst (Level 8)"
  },
  {
    "id": 205,
    "label": "retriculospinal tract, lateral part",
    "acronym": "rstl",
    "name": "retriculospinal tract, lateral part",
    "color": "#CCCCCC",
    "level": 9,
    "title": "rstl (Level 9)"
  },
  {
    "id": 213,
    "label": "retriculospinal tract, medial part",
    "acronym": "rstm",
    "name": "retriculospinal tract, medial part",
    "color": "#CCCCCC",
    "level": 9,
    "title": "rstm (Level 9)"
  },
  {
    "id": 941,
    "label": "vestibulospinal pathway",
    "acronym": "vsp",
    "name": "vestibulospinal pathway",
    "color": "#CCCCCC",
    "level": 8,
    "title": "vsp (Level 8)"
  },
  {
    "id": 991,
    "label": "medial forebrain bundle system",
    "acronym": "mfbs",
    "name": "medial forebrain bundle system",
    "color": "#CCCCCC",
    "level": 2,
    "title": "mfbs (Level 2)"
  },
  {
    "id": 768,
    "label": "cerebrum related",
    "acronym": "mfbc",
    "name": "cerebrum related",
    "color": "#CCCCCC",
    "level": 7,
    "title": "mfbc (Level 7)"
  },
  {
    "id": 884,
    "label": "amygdalar capsule",
    "acronym": "amc",
    "name": "amygdalar capsule",
    "color": "#CCCCCC",
    "level": 8,
    "title": "amc (Level 8)"
  },
  {
    "id": 892,
    "label": "ansa peduncularis",
    "acronym": "apd",
    "name": "ansa peduncularis",
    "color": "#CCCCCC",
    "level": 8,
    "title": "apd (Level 8)"
  },
  {
    "id": 908,
    "label": "anterior commissure, temporal limb",
    "acronym": "act",
    "name": "anterior commissure, temporal limb",
    "color": "#CCCCCC",
    "level": 8,
    "title": "act (Level 8)"
  },
  {
    "id": 940,
    "label": "cingulum bundle",
    "acronym": "cing",
    "name": "cingulum bundle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "cing (Level 8)"
  },
  {
    "id": 1099,
    "label": "fornix system",
    "acronym": "fxs",
    "name": "fornix system",
    "color": "#CCCCCC",
    "level": 8,
    "title": "fxs (Level 8)"
  },
  {
    "id": 466,
    "label": "alveus",
    "acronym": "alv",
    "name": "alveus",
    "color": "#CCCCCC",
    "level": 9,
    "title": "alv (Level 9)"
  },
  {
    "id": 530,
    "label": "dorsal fornix",
    "acronym": "df",
    "name": "dorsal fornix",
    "color": "#CCCCCC",
    "level": 9,
    "title": "df (Level 9)"
  },
  {
    "id": 603,
    "label": "fimbria",
    "acronym": "fi",
    "name": "fimbria",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fi (Level 9)"
  },
  {
    "id": 745,
    "label": "precommissural fornix, general",
    "acronym": "fxprg",
    "name": "precommissural fornix, general",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fxprg (Level 9)"
  },
  {
    "id": 420,
    "label": "precommissural fornix diagonal band",
    "acronym": "db",
    "name": "precommissural fornix diagonal band",
    "color": "#CCCCCC",
    "level": 10,
    "title": "db (Level 10)"
  },
  {
    "id": 737,
    "label": "postcommissural fornix",
    "acronym": "fxpo",
    "name": "postcommissural fornix",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fxpo (Level 9)"
  },
  {
    "id": 428,
    "label": "medial corticohypothalamic tract",
    "acronym": "mct",
    "name": "medial corticohypothalamic tract",
    "color": "#CCCCCC",
    "level": 10,
    "title": "mct (Level 10)"
  },
  {
    "id": 436,
    "label": "columns of the fornix",
    "acronym": "fx",
    "name": "columns of the fornix",
    "color": "#CCCCCC",
    "level": 10,
    "title": "fx (Level 10)"
  },
  {
    "id": 618,
    "label": "hippocampal commissures",
    "acronym": "hc",
    "name": "hippocampal commissures",
    "color": "#CCCCCC",
    "level": 9,
    "title": "hc (Level 9)"
  },
  {
    "id": 443,
    "label": "dorsal hippocampal commissure",
    "acronym": "dhc",
    "name": "dorsal hippocampal commissure",
    "color": "#CCCCCC",
    "level": 10,
    "title": "dhc (Level 10)"
  },
  {
    "id": 449,
    "label": "ventral hippocampal commissure",
    "acronym": "vhc",
    "name": "ventral hippocampal commissure",
    "color": "#CCCCCC",
    "level": 10,
    "title": "vhc (Level 10)"
  },
  {
    "id": 713,
    "label": "perforant path",
    "acronym": "per",
    "name": "perforant path",
    "color": "#CCCCCC",
    "level": 9,
    "title": "per (Level 9)"
  },
  {
    "id": 474,
    "label": "angular path",
    "acronym": "ab",
    "name": "angular path",
    "color": "#CCCCCC",
    "level": 9,
    "title": "ab (Level 9)"
  },
  {
    "id": 37,
    "label": "longitudinal association bundle",
    "acronym": "lab",
    "name": "longitudinal association bundle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "lab (Level 8)"
  },
  {
    "id": 301,
    "label": "stria terminalis",
    "acronym": "st",
    "name": "stria terminalis",
    "color": "#CCCCCC",
    "level": 8,
    "title": "st (Level 8)"
  },
  {
    "id": 484682528,
    "label": "commissural branch of stria terminalis",
    "acronym": "stc",
    "name": "commissural branch of stria terminalis",
    "color": "#CCCCCC",
    "level": 9,
    "title": "stc (Level 9)"
  },
  {
    "id": 824,
    "label": "hypothalamus related",
    "acronym": "mfsbshy",
    "name": "hypothalamus related",
    "color": "#CCCCCC",
    "level": 7,
    "title": "mfsbshy (Level 7)"
  },
  {
    "id": 54,
    "label": "medial forebrain bundle",
    "acronym": "mfb",
    "name": "medial forebrain bundle",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mfb (Level 8)"
  },
  {
    "id": 405,
    "label": "ventrolateral hypothalamic tract",
    "acronym": "vlt",
    "name": "ventrolateral hypothalamic tract",
    "color": "#CCCCCC",
    "level": 8,
    "title": "vlt (Level 8)"
  },
  {
    "id": 174,
    "label": "preoptic commissure",
    "acronym": "poc",
    "name": "preoptic commissure",
    "color": "#CCCCCC",
    "level": 8,
    "title": "poc (Level 8)"
  },
  {
    "id": 349,
    "label": "supraoptic commissures",
    "acronym": "sup",
    "name": "supraoptic commissures",
    "color": "#CCCCCC",
    "level": 8,
    "title": "sup (Level 8)"
  },
  {
    "id": 817,
    "label": "supraoptic commissures, anterior",
    "acronym": "supa",
    "name": "supraoptic commissures, anterior",
    "color": "#CCCCCC",
    "level": 9,
    "title": "supa (Level 9)"
  },
  {
    "id": 825,
    "label": "supraoptic commissures, dorsal",
    "acronym": "supd",
    "name": "supraoptic commissures, dorsal",
    "color": "#CCCCCC",
    "level": 9,
    "title": "supd (Level 9)"
  },
  {
    "id": 833,
    "label": "supraoptic commissures, ventral",
    "acronym": "supv",
    "name": "supraoptic commissures, ventral",
    "color": "#CCCCCC",
    "level": 9,
    "title": "supv (Level 9)"
  },
  {
    "id": 166,
    "label": "premammillary commissure",
    "acronym": "pmx",
    "name": "premammillary commissure",
    "color": "#CCCCCC",
    "level": 8,
    "title": "pmx (Level 8)"
  },
  {
    "id": 341,
    "label": "supramammillary decussation",
    "acronym": "smd",
    "name": "supramammillary decussation",
    "color": "#CCCCCC",
    "level": 8,
    "title": "smd (Level 8)"
  },
  {
    "id": 182,
    "label": "propriohypothalamic pathways",
    "acronym": "php",
    "name": "propriohypothalamic pathways",
    "color": "#CCCCCC",
    "level": 8,
    "title": "php (Level 8)"
  },
  {
    "id": 762,
    "label": "propriohypothalamic pathways, dorsal",
    "acronym": "phpd",
    "name": "propriohypothalamic pathways, dorsal",
    "color": "#CCCCCC",
    "level": 9,
    "title": "phpd (Level 9)"
  },
  {
    "id": 770,
    "label": "propriohypothalamic pathways, lateral",
    "acronym": "phpl",
    "name": "propriohypothalamic pathways, lateral",
    "color": "#CCCCCC",
    "level": 9,
    "title": "phpl (Level 9)"
  },
  {
    "id": 779,
    "label": "propriohypothalamic pathways, medial",
    "acronym": "phpm",
    "name": "propriohypothalamic pathways, medial",
    "color": "#CCCCCC",
    "level": 9,
    "title": "phpm (Level 9)"
  },
  {
    "id": 787,
    "label": "propriohypothalamic pathways, ventral",
    "acronym": "phpv",
    "name": "propriohypothalamic pathways, ventral",
    "color": "#CCCCCC",
    "level": 9,
    "title": "phpv (Level 9)"
  },
  {
    "id": 150,
    "label": "periventricular bundle of the hypothalamus",
    "acronym": "pvbh",
    "name": "periventricular bundle of the hypothalamus",
    "color": "#CCCCCC",
    "level": 8,
    "title": "pvbh (Level 8)"
  },
  {
    "id": 46,
    "label": "mammillary related",
    "acronym": "mfbsma",
    "name": "mammillary related",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mfbsma (Level 8)"
  },
  {
    "id": 753,
    "label": "principal mammillary tract",
    "acronym": "pm",
    "name": "principal mammillary tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "pm (Level 9)"
  },
  {
    "id": 690,
    "label": "mammillothalamic tract",
    "acronym": "mtt",
    "name": "mammillothalamic tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "mtt (Level 9)"
  },
  {
    "id": 681,
    "label": "mammillotegmental tract",
    "acronym": "mtg",
    "name": "mammillotegmental tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "mtg (Level 9)"
  },
  {
    "id": 673,
    "label": "mammillary peduncle",
    "acronym": "mp",
    "name": "mammillary peduncle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "mp (Level 9)"
  },
  {
    "id": 1068,
    "label": "dorsal thalamus related",
    "acronym": "mfbst",
    "name": "dorsal thalamus related",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mfbst (Level 8)"
  },
  {
    "id": 722,
    "label": "periventricular bundle of the thalamus",
    "acronym": "pvbt",
    "name": "periventricular bundle of the thalamus",
    "color": "#CCCCCC",
    "level": 9,
    "title": "pvbt (Level 9)"
  },
  {
    "id": 1083,
    "label": "epithalamus related",
    "acronym": "mfbse",
    "name": "epithalamus related",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mfbse (Level 8)"
  },
  {
    "id": 802,
    "label": "stria medullaris",
    "acronym": "sm",
    "name": "stria medullaris",
    "color": "#CCCCCC",
    "level": 9,
    "title": "sm (Level 9)"
  },
  {
    "id": 595,
    "label": "fasciculus retroflexus",
    "acronym": "fr",
    "name": "fasciculus retroflexus",
    "color": "#CCCCCC",
    "level": 9,
    "title": "fr (Level 9)"
  },
  {
    "id": 611,
    "label": "habenular commissure",
    "acronym": "hbc",
    "name": "habenular commissure",
    "color": "#CCCCCC",
    "level": 9,
    "title": "hbc (Level 9)"
  },
  {
    "id": 730,
    "label": "pineal stalk",
    "acronym": "PIS",
    "name": "pineal stalk",
    "color": "#CCCCCC",
    "level": 9,
    "title": "PIS (Level 9)"
  },
  {
    "id": 70,
    "label": "midbrain related",
    "acronym": "mfbsm",
    "name": "midbrain related",
    "color": "#CCCCCC",
    "level": 8,
    "title": "mfbsm (Level 8)"
  },
  {
    "id": 547,
    "label": "dorsal longitudinal fascicle",
    "acronym": "dlf",
    "name": "dorsal longitudinal fascicle",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dlf (Level 9)"
  },
  {
    "id": 563,
    "label": "dorsal tegmental tract",
    "acronym": "dtt",
    "name": "dorsal tegmental tract",
    "color": "#CCCCCC",
    "level": 9,
    "title": "dtt (Level 9)"
  },
  {
    "id": 73,
    "label": "ventricular systems",
    "acronym": "VS",
    "name": "ventricular systems",
    "color": "#AAAAAA",
    "level": 1,
    "title": "VS (Level 1)"
  },
  {
    "id": 81,
    "label": "lateral ventricle",
    "acronym": "VL",
    "name": "lateral ventricle",
    "color": "#AAAAAA",
    "level": 8,
    "title": "VL (Level 8)"
  },
  {
    "id": 89,
    "label": "rhinocele",
    "acronym": "RC",
    "name": "rhinocele",
    "color": "#AAAAAA",
    "level": 9,
    "title": "RC (Level 9)"
  },
  {
    "id": 98,
    "label": "subependymal zone",
    "acronym": "SEZ",
    "name": "subependymal zone",
    "color": "#AAAAAA",
    "level": 9,
    "title": "SEZ (Level 9)"
  },
  {
    "id": 108,
    "label": "choroid plexus",
    "acronym": "chpl",
    "name": "choroid plexus",
    "color": "#AAAAAA",
    "level": 9,
    "title": "chpl (Level 9)"
  },
  {
    "id": 116,
    "label": "choroid fissure",
    "acronym": "chfl",
    "name": "choroid fissure",
    "color": "#AAAAAA",
    "level": 9,
    "title": "chfl (Level 9)"
  },
  {
    "id": 124,
    "label": "interventricular foramen",
    "acronym": "IVF",
    "name": "interventricular foramen",
    "color": "#AAAAAA",
    "level": 8,
    "title": "IVF (Level 8)"
  },
  {
    "id": 129,
    "label": "third ventricle",
    "acronym": "V3",
    "name": "third ventricle",
    "color": "#AAAAAA",
    "level": 8,
    "title": "V3 (Level 8)"
  },
  {
    "id": 140,
    "label": "cerebral aqueduct",
    "acronym": "AQ",
    "name": "cerebral aqueduct",
    "color": "#AAAAAA",
    "level": 8,
    "title": "AQ (Level 8)"
  },
  {
    "id": 145,
    "label": "fourth ventricle",
    "acronym": "V4",
    "name": "fourth ventricle",
    "color": "#AAAAAA",
    "level": 8,
    "title": "V4 (Level 8)"
  },
  {
    "id": 153,
    "label": "lateral recess",
    "acronym": "V4r",
    "name": "lateral recess",
    "color": "#AAAAAA",
    "level": 9,
    "title": "V4r (Level 9)"
  },
  {
    "id": 164,
    "label": "central canal, spinal cord/medulla",
    "acronym": "c",
    "name": "central canal, spinal cord/medulla",
    "color": "#AAAAAA",
    "level": 8,
    "title": "c (Level 8)"
  },
  {
    "id": 1024,
    "label": "grooves",
    "acronym": "grv",
    "name": "grooves",
    "color": "#AAAAAA",
    "level": 1,
    "title": "grv (Level 1)"
  },
  {
    "id": 1032,
    "label": "grooves of the cerebral cortex",
    "acronym": "grv of CTX",
    "name": "grooves of the cerebral cortex",
    "color": "#AAAAAA",
    "level": 7,
    "title": "grv of CTX (Level 7)"
  },
  {
    "id": 1055,
    "label": "endorhinal groove",
    "acronym": "eg",
    "name": "endorhinal groove",
    "color": "#AAAAAA",
    "level": 8,
    "title": "eg (Level 8)"
  },
  {
    "id": 1063,
    "label": "hippocampal fissure",
    "acronym": "hf",
    "name": "hippocampal fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "hf (Level 8)"
  },
  {
    "id": 1071,
    "label": "rhinal fissure",
    "acronym": "rf",
    "name": "rhinal fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "rf (Level 8)"
  },
  {
    "id": 1078,
    "label": "rhinal incisure",
    "acronym": "ri",
    "name": "rhinal incisure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "ri (Level 8)"
  },
  {
    "id": 1040,
    "label": "grooves of the cerebellar cortex",
    "acronym": "grv of CBX",
    "name": "grooves of the cerebellar cortex",
    "color": "#AAAAAA",
    "level": 7,
    "title": "grv of CBX (Level 7)"
  },
  {
    "id": 1087,
    "label": "precentral fissure",
    "acronym": "pce",
    "name": "precentral fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "pce (Level 8)"
  },
  {
    "id": 1095,
    "label": "preculminate fissure",
    "acronym": "pcf",
    "name": "preculminate fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "pcf (Level 8)"
  },
  {
    "id": 1103,
    "label": "primary fissure",
    "acronym": "pri",
    "name": "primary fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "pri (Level 8)"
  },
  {
    "id": 1112,
    "label": "posterior superior fissure",
    "acronym": "psf",
    "name": "posterior superior fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "psf (Level 8)"
  },
  {
    "id": 1119,
    "label": "prepyramidal fissure",
    "acronym": "ppf",
    "name": "prepyramidal fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "ppf (Level 8)"
  },
  {
    "id": 3,
    "label": "secondary fissure",
    "acronym": "sec",
    "name": "secondary fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "sec (Level 8)"
  },
  {
    "id": 11,
    "label": "posterolateral fissure",
    "acronym": "plf",
    "name": "posterolateral fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "plf (Level 8)"
  },
  {
    "id": 18,
    "label": "nodular fissure",
    "acronym": "nf",
    "name": "nodular fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "nf (Level 8)"
  },
  {
    "id": 25,
    "label": "simple fissure",
    "acronym": "sif",
    "name": "simple fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "sif (Level 8)"
  },
  {
    "id": 34,
    "label": "intercrural fissure",
    "acronym": "icf",
    "name": "intercrural fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "icf (Level 8)"
  },
  {
    "id": 43,
    "label": "ansoparamedian fissure",
    "acronym": "apf",
    "name": "ansoparamedian fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "apf (Level 8)"
  },
  {
    "id": 49,
    "label": "intraparafloccular fissure",
    "acronym": "ipf",
    "name": "intraparafloccular fissure",
    "color": "#AAAAAA",
    "level": 8,
    "title": "ipf (Level 8)"
  },
  {
    "id": 57,
    "label": "paramedian sulcus",
    "acronym": "pms",
    "name": "paramedian sulcus",
    "color": "#AAAAAA",
    "level": 8,
    "title": "pms (Level 8)"
  },
  {
    "id": 65,
    "label": "parafloccular sulcus",
    "acronym": "pfs",
    "name": "parafloccular sulcus",
    "color": "#AAAAAA",
    "level": 8,
    "title": "pfs (Level 8)"
  },
  {
    "id": 624,
    "label": "Interpeduncular fossa",
    "acronym": "IPF",
    "name": "Interpeduncular fossa",
    "color": "#AAAAAA",
    "level": 7,
    "title": "IPF (Level 7)"
  },
  {
    "id": 304325711,
    "label": "retina",
    "acronym": "retina",
    "name": "retina",
    "color": "#7F2E7E",
    "level": 1,
    "title": "retina (Level 1)"
  }
]);
