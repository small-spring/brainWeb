const allNodes = new vis.DataSet([
  {
    "id": 8,
    "label": "Basic cell groups and regions",
    "level": 0,
    "color": "#BFDAE3",
    "title": "grey (Level 0)"
  },
  {
    "id": 567,
    "label": "Cerebrum",
    "level": 1,
    "color": "#B0F0FF",
    "title": "CH (Level 1)"
  },
  {
    "id": 688,
    "label": "Cerebral cortex",
    "level": 2,
    "color": "#B0FFB8",
    "title": "CTX (Level 2)"
  },
  {
    "id": 695,
    "label": "Cortical plate",
    "level": 3,
    "color": "#70FF70",
    "title": "CTXpl (Level 3)"
  },
  {
    "id": 315,
    "label": "Isocortex",
    "level": 4,
    "color": "#70FF71",
    "title": "Isocortex (Level 4)"
  },
  {
    "id": 184,
    "label": "Frontal pole, cerebral cortex",
    "level": 7,
    "color": "#268F45",
    "title": "FRP (Level 7)"
  },
  {
    "id": 68,
    "label": "Frontal pole, layer 1",
    "level": 10,
    "color": "#268F45",
    "title": "FRP1 (Level 10)"
  },
  {
    "id": 667,
    "label": "Frontal pole, layer 2/3",
    "level": 10,
    "color": "#268F45",
    "title": "FRP2/3 (Level 10)"
  },
  {
    "id": 526157192,
    "label": "Frontal pole, layer 5",
    "level": 10,
    "color": "#268F45",
    "title": "FRP5 (Level 10)"
  },
  {
    "id": 526157196,
    "label": "Frontal pole, layer 6a",
    "level": 10,
    "color": "#268F45",
    "title": "FRP6a (Level 10)"
  },
  {
    "id": 526322264,
    "label": "Frontal pole, layer 6b",
    "level": 10,
    "color": "#268F45",
    "title": "FRP6b (Level 10)"
  },
  {
    "id": 500,
    "label": "Somatomotor areas",
    "level": 5,
    "color": "#1F9D5A",
    "title": "MO (Level 5)"
  },
  {
    "id": 107,
    "label": "Somatomotor areas, Layer 1",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MO1 (Level 10)"
  },
  {
    "id": 219,
    "label": "Somatomotor areas, Layer 2/3",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MO2/3 (Level 10)"
  },
  {
    "id": 299,
    "label": "Somatomotor areas, Layer 5",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MO5 (Level 10)"
  },
  {
    "id": 644,
    "label": "Somatomotor areas, Layer 6a",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MO6a (Level 10)"
  },
  {
    "id": 947,
    "label": "Somatomotor areas, Layer 6b",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MO6b (Level 10)"
  },
  {
    "id": 985,
    "label": "Primary motor area",
    "level": 7,
    "color": "#1F9D5A",
    "title": "MOp (Level 7)"
  },
  {
    "id": 320,
    "label": "Primary motor area, Layer 1",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOp1 (Level 10)"
  },
  {
    "id": 943,
    "label": "Primary motor area, Layer 2/3",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOp2/3 (Level 10)"
  },
  {
    "id": 648,
    "label": "Primary motor area, Layer 5",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOp5 (Level 10)"
  },
  {
    "id": 844,
    "label": "Primary motor area, Layer 6a",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOp6a (Level 10)"
  },
  {
    "id": 882,
    "label": "Primary motor area, Layer 6b",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOp6b (Level 10)"
  },
  {
    "id": 993,
    "label": "Secondary motor area",
    "level": 7,
    "color": "#1F9D5A",
    "title": "MOs (Level 7)"
  },
  {
    "id": 656,
    "label": "Secondary motor area, layer 1",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOs1 (Level 10)"
  },
  {
    "id": 962,
    "label": "Secondary motor area, layer 2/3",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOs2/3 (Level 10)"
  },
  {
    "id": 767,
    "label": "Secondary motor area, layer 5",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOs5 (Level 10)"
  },
  {
    "id": 1021,
    "label": "Secondary motor area, layer 6a",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOs6a (Level 10)"
  },
  {
    "id": 1085,
    "label": "Secondary motor area, layer 6b",
    "level": 10,
    "color": "#1F9D5A",
    "title": "MOs6b (Level 10)"
  },
  {
    "id": 453,
    "label": "Somatosensory areas",
    "level": 5,
    "color": "#188064",
    "title": "SS (Level 5)"
  },
  {
    "id": 12993,
    "label": "Somatosensory areas, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SS1 (Level 10)"
  },
  {
    "id": 12994,
    "label": "Somatosensory areas, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SS2/3 (Level 10)"
  },
  {
    "id": 12995,
    "label": "Somatosensory areas, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SS4 (Level 10)"
  },
  {
    "id": 12996,
    "label": "Somatosensory areas, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SS5 (Level 10)"
  },
  {
    "id": 12997,
    "label": "Somatosensory areas, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SS6a (Level 10)"
  },
  {
    "id": 12998,
    "label": "Somatosensory areas, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SS6b (Level 10)"
  },
  {
    "id": 322,
    "label": "Primary somatosensory area",
    "level": 7,
    "color": "#188064",
    "title": "SSp (Level 7)"
  },
  {
    "id": 793,
    "label": "Primary somatosensory area, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp1 (Level 10)"
  },
  {
    "id": 346,
    "label": "Primary somatosensory area, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp2/3 (Level 10)"
  },
  {
    "id": 865,
    "label": "Primary somatosensory area, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp4 (Level 10)"
  },
  {
    "id": 921,
    "label": "Primary somatosensory area, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp5 (Level 10)"
  },
  {
    "id": 686,
    "label": "Primary somatosensory area, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp6a (Level 10)"
  },
  {
    "id": 719,
    "label": "Primary somatosensory area, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp6b (Level 10)"
  },
  {
    "id": 353,
    "label": "Primary somatosensory area, nose",
    "level": 8,
    "color": "#188064",
    "title": "SSp-n (Level 8)"
  },
  {
    "id": 558,
    "label": "Primary somatosensory area, nose, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-n1 (Level 10)"
  },
  {
    "id": 838,
    "label": "Primary somatosensory area, nose, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-n2/3 (Level 10)"
  },
  {
    "id": 654,
    "label": "Primary somatosensory area, nose, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-n4 (Level 10)"
  },
  {
    "id": 702,
    "label": "Primary somatosensory area, nose, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-n5 (Level 10)"
  },
  {
    "id": 889,
    "label": "Primary somatosensory area, nose, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-n6a (Level 10)"
  },
  {
    "id": 929,
    "label": "Primary somatosensory area, nose, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-n6b (Level 10)"
  },
  {
    "id": 329,
    "label": "Primary somatosensory area, barrel field",
    "level": 8,
    "color": "#188064",
    "title": "SSp-bfd (Level 8)"
  },
  {
    "id": 981,
    "label": "Primary somatosensory area, barrel field, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-bfd1 (Level 10)"
  },
  {
    "id": 201,
    "label": "Primary somatosensory area, barrel field, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-bfd2/3 (Level 10)"
  },
  {
    "id": 1047,
    "label": "Primary somatosensory area, barrel field, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-bfd4 (Level 10)"
  },
  {
    "id": 1070,
    "label": "Primary somatosensory area, barrel field, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-bfd5 (Level 10)"
  },
  {
    "id": 1038,
    "label": "Primary somatosensory area, barrel field, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-bfd6a (Level 10)"
  },
  {
    "id": 1062,
    "label": "Primary somatosensory area, barrel field, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-bfd6b (Level 10)"
  },
  {
    "id": 480149202,
    "label": "Rostrolateral lateral visual area",
    "level": 9,
    "color": "#188064",
    "title": "VISrll (Level 9)"
  },
  {
    "id": 480149206,
    "label": "Rostrolateral lateral visual area, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "VISrll1 (Level 10)"
  },
  {
    "id": 480149210,
    "label": "Rostrolateral lateral visual area, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "VISrll2/3 (Level 10)"
  },
  {
    "id": 480149214,
    "label": "Rostrolateral lateral visual area, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "VISrll4 (Level 10)"
  },
  {
    "id": 480149218,
    "label": "Rostrolateral lateral visual area,layer 5",
    "level": 10,
    "color": "#188064",
    "title": "VISrll5 (Level 10)"
  },
  {
    "id": 480149222,
    "label": "Rostrolateral lateral visual area, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "VISrll6a (Level 10)"
  },
  {
    "id": 480149226,
    "label": "Rostrolateral lateral visual area, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "VISrll6b (Level 10)"
  },
  {
    "id": 337,
    "label": "Primary somatosensory area, lower limb",
    "level": 8,
    "color": "#188064",
    "title": "SSp-ll (Level 8)"
  },
  {
    "id": 1030,
    "label": "Primary somatosensory area, lower limb, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ll1 (Level 10)"
  },
  {
    "id": 113,
    "label": "Primary somatosensory area, lower limb, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ll2/3 (Level 10)"
  },
  {
    "id": 1094,
    "label": "Primary somatosensory area, lower limb, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ll4 (Level 10)"
  },
  {
    "id": 1128,
    "label": "Primary somatosensory area, lower limb, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ll5 (Level 10)"
  },
  {
    "id": 478,
    "label": "Primary somatosensory area, lower limb, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ll6a (Level 10)"
  },
  {
    "id": 510,
    "label": "Primary somatosensory area, lower limb, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ll6b (Level 10)"
  },
  {
    "id": 345,
    "label": "Primary somatosensory area, mouth",
    "level": 8,
    "color": "#188064",
    "title": "SSp-m (Level 8)"
  },
  {
    "id": 878,
    "label": "Primary somatosensory area, mouth, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-m1 (Level 10)"
  },
  {
    "id": 657,
    "label": "Primary somatosensory area, mouth, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-m2/3 (Level 10)"
  },
  {
    "id": 950,
    "label": "Primary somatosensory area, mouth, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-m4 (Level 10)"
  },
  {
    "id": 974,
    "label": "Primary somatosensory area, mouth, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-m5 (Level 10)"
  },
  {
    "id": 1102,
    "label": "Primary somatosensory area, mouth, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-m6a (Level 10)"
  },
  {
    "id": 2,
    "label": "Primary somatosensory area, mouth, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-m6b (Level 10)"
  },
  {
    "id": 369,
    "label": "Primary somatosensory area, upper limb",
    "level": 8,
    "color": "#188064",
    "title": "SSp-ul (Level 8)"
  },
  {
    "id": 450,
    "label": "Primary somatosensory area, upper limb, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ul1 (Level 10)"
  },
  {
    "id": 854,
    "label": "Primary somatosensory area, upper limb, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ul2/3 (Level 10)"
  },
  {
    "id": 577,
    "label": "Primary somatosensory area, upper limb, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ul4 (Level 10)"
  },
  {
    "id": 625,
    "label": "Primary somatosensory area, upper limb, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ul5 (Level 10)"
  },
  {
    "id": 945,
    "label": "Primary somatosensory area, upper limb, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ul6a (Level 10)"
  },
  {
    "id": 1026,
    "label": "Primary somatosensory area, upper limb, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-ul6b (Level 10)"
  },
  {
    "id": 361,
    "label": "Primary somatosensory area, trunk",
    "level": 8,
    "color": "#188064",
    "title": "SSp-tr (Level 8)"
  },
  {
    "id": 1006,
    "label": "Primary somatosensory area, trunk, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-tr1 (Level 10)"
  },
  {
    "id": 670,
    "label": "Primary somatosensory area, trunk, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-tr2/3 (Level 10)"
  },
  {
    "id": 1086,
    "label": "Primary somatosensory area, trunk, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-tr4 (Level 10)"
  },
  {
    "id": 1111,
    "label": "Primary somatosensory area, trunk, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-tr5 (Level 10)"
  },
  {
    "id": 9,
    "label": "Primary somatosensory area, trunk, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-tr6a (Level 10)"
  },
  {
    "id": 461,
    "label": "Primary somatosensory area, trunk, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-tr6b (Level 10)"
  },
  {
    "id": 182305689,
    "label": "Primary somatosensory area, unassigned",
    "level": 8,
    "color": "#188064",
    "title": "SSp-un (Level 8)"
  },
  {
    "id": 182305693,
    "label": "Primary somatosensory area, unassigned, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSp-un1 (Level 10)"
  },
  {
    "id": 182305697,
    "label": "Primary somatosensory area, unassigned, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSp-un2/3 (Level 10)"
  },
  {
    "id": 182305701,
    "label": "Primary somatosensory area, unassigned, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSp-un4 (Level 10)"
  },
  {
    "id": 182305705,
    "label": "Primary somatosensory area, unassigned, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSp-un5 (Level 10)"
  },
  {
    "id": 182305709,
    "label": "Primary somatosensory area, unassigned, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSp-un6a (Level 10)"
  },
  {
    "id": 182305713,
    "label": "Primary somatosensory area, unassigned, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSp-un6b (Level 10)"
  },
  {
    "id": 378,
    "label": "Supplemental somatosensory area",
    "level": 7,
    "color": "#188064",
    "title": "SSs (Level 7)"
  },
  {
    "id": 873,
    "label": "Supplemental somatosensory area, layer 1",
    "level": 10,
    "color": "#188064",
    "title": "SSs1 (Level 10)"
  },
  {
    "id": 806,
    "label": "Supplemental somatosensory area, layer 2/3",
    "level": 10,
    "color": "#188064",
    "title": "SSs2/3 (Level 10)"
  },
  {
    "id": 1035,
    "label": "Supplemental somatosensory area, layer 4",
    "level": 10,
    "color": "#188064",
    "title": "SSs4 (Level 10)"
  },
  {
    "id": 1090,
    "label": "Supplemental somatosensory area, layer 5",
    "level": 10,
    "color": "#188064",
    "title": "SSs5 (Level 10)"
  },
  {
    "id": 862,
    "label": "Supplemental somatosensory area, layer 6a",
    "level": 10,
    "color": "#188064",
    "title": "SSs6a (Level 10)"
  },
  {
    "id": 893,
    "label": "Supplemental somatosensory area, layer 6b",
    "level": 10,
    "color": "#188064",
    "title": "SSs6b (Level 10)"
  },
  {
    "id": 1057,
    "label": "Gustatory areas",
    "level": 5,
    "color": "#009C75",
    "title": "GU (Level 5)"
  },
  {
    "id": 36,
    "label": "Gustatory areas, layer 1",
    "level": 10,
    "color": "#009C75",
    "title": "GU1 (Level 10)"
  },
  {
    "id": 180,
    "label": "Gustatory areas, layer 2/3",
    "level": 10,
    "color": "#009C75",
    "title": "GU2/3 (Level 10)"
  },
  {
    "id": 148,
    "label": "Gustatory areas, layer 4",
    "level": 10,
    "color": "#009C75",
    "title": "GU4 (Level 10)"
  },
  {
    "id": 187,
    "label": "Gustatory areas, layer 5",
    "level": 10,
    "color": "#009C75",
    "title": "GU5 (Level 10)"
  },
  {
    "id": 638,
    "label": "Gustatory areas, layer 6a",
    "level": 10,
    "color": "#009C75",
    "title": "GU6a (Level 10)"
  },
  {
    "id": 662,
    "label": "Gustatory areas, layer 6b",
    "level": 10,
    "color": "#009C75",
    "title": "GU6b (Level 10)"
  },
  {
    "id": 677,
    "label": "Visceral area",
    "level": 7,
    "color": "#11AD83",
    "title": "VISC (Level 7)"
  },
  {
    "id": 897,
    "label": "Visceral area, layer 1",
    "level": 10,
    "color": "#11AD83",
    "title": "VISC1 (Level 10)"
  },
  {
    "id": 1106,
    "label": "Visceral area, layer 2/3",
    "level": 10,
    "color": "#11AD83",
    "title": "VISC2/3 (Level 10)"
  },
  {
    "id": 1010,
    "label": "Visceral area, layer 4",
    "level": 10,
    "color": "#11AD83",
    "title": "VISC4 (Level 10)"
  },
  {
    "id": 1058,
    "label": "Visceral area, layer 5",
    "level": 10,
    "color": "#11AD83",
    "title": "VISC5 (Level 10)"
  },
  {
    "id": 857,
    "label": "Visceral area, layer 6a",
    "level": 10,
    "color": "#11AD83",
    "title": "VISC6a (Level 10)"
  },
  {
    "id": 849,
    "label": "Visceral area, layer 6b",
    "level": 10,
    "color": "#11AD83",
    "title": "VISC6b (Level 10)"
  },
  {
    "id": 247,
    "label": "Auditory areas",
    "level": 5,
    "color": "#019399",
    "title": "AUD (Level 5)"
  },
  {
    "id": 1011,
    "label": "Dorsal auditory area",
    "level": 7,
    "color": "#019399",
    "title": "AUDd (Level 7)"
  },
  {
    "id": 527,
    "label": "Dorsal auditory area, layer 1",
    "level": 10,
    "color": "#019399",
    "title": "AUDd1 (Level 10)"
  },
  {
    "id": 600,
    "label": "Dorsal auditory area, layer 2/3",
    "level": 10,
    "color": "#019399",
    "title": "AUDd2/3 (Level 10)"
  },
  {
    "id": 678,
    "label": "Dorsal auditory area, layer 4",
    "level": 10,
    "color": "#019399",
    "title": "AUDd4 (Level 10)"
  },
  {
    "id": 252,
    "label": "Dorsal auditory area, layer 5",
    "level": 10,
    "color": "#019399",
    "title": "AUDd5 (Level 10)"
  },
  {
    "id": 156,
    "label": "Dorsal auditory area, layer 6a",
    "level": 10,
    "color": "#019399",
    "title": "AUDd6a (Level 10)"
  },
  {
    "id": 243,
    "label": "Dorsal auditory area, layer 6b",
    "level": 10,
    "color": "#019399",
    "title": "AUDd6b (Level 10)"
  },
  {
    "id": 480149230,
    "label": "Laterolateral anterior visual area",
    "level": 9,
    "color": "#019399",
    "title": "VISlla (Level 9)"
  },
  {
    "id": 480149234,
    "label": "Laterolateral anterior visual area, layer 1",
    "level": 10,
    "color": "#019399",
    "title": "VISlla1 (Level 10)"
  },
  {
    "id": 480149238,
    "label": "Laterolateral anterior visual area, layer 2/3",
    "level": 10,
    "color": "#019399",
    "title": "VISlla2/3 (Level 10)"
  },
  {
    "id": 480149242,
    "label": "Laterolateral anterior visual area, layer 4",
    "level": 10,
    "color": "#019399",
    "title": "VISlla4 (Level 10)"
  },
  {
    "id": 480149246,
    "label": "Laterolateral anterior visual area,layer 5",
    "level": 10,
    "color": "#019399",
    "title": "VISlla5 (Level 10)"
  },
  {
    "id": 480149250,
    "label": "Laterolateral anterior visual area, layer 6a",
    "level": 10,
    "color": "#019399",
    "title": "VISlla6a (Level 10)"
  },
  {
    "id": 480149254,
    "label": "Laterolateral anterior visual area, layer 6b",
    "level": 10,
    "color": "#019399",
    "title": "VISlla6b (Level 10)"
  },
  {
    "id": 1002,
    "label": "Primary auditory area",
    "level": 7,
    "color": "#019399",
    "title": "AUDp (Level 7)"
  },
  {
    "id": 735,
    "label": "Primary auditory area, layer 1",
    "level": 10,
    "color": "#019399",
    "title": "AUDp1 (Level 10)"
  },
  {
    "id": 251,
    "label": "Primary auditory area, layer 2/3",
    "level": 10,
    "color": "#019399",
    "title": "AUDp2/3 (Level 10)"
  },
  {
    "id": 816,
    "label": "Primary auditory area, layer 4",
    "level": 10,
    "color": "#019399",
    "title": "AUDp4 (Level 10)"
  },
  {
    "id": 847,
    "label": "Primary auditory area, layer 5",
    "level": 10,
    "color": "#019399",
    "title": "AUDp5 (Level 10)"
  },
  {
    "id": 954,
    "label": "Primary auditory area, layer 6a",
    "level": 10,
    "color": "#019399",
    "title": "AUDp6a (Level 10)"
  },
  {
    "id": 1005,
    "label": "Primary auditory area, layer 6b",
    "level": 10,
    "color": "#019399",
    "title": "AUDp6b (Level 10)"
  },
  {
    "id": 1027,
    "label": "Posterior auditory area",
    "level": 7,
    "color": "#019399",
    "title": "AUDpo (Level 7)"
  },
  {
    "id": 696,
    "label": "Posterior auditory area, layer 1",
    "level": 10,
    "color": "#019399",
    "title": "AUDpo1 (Level 10)"
  },
  {
    "id": 643,
    "label": "Posterior auditory area, layer 2/3",
    "level": 10,
    "color": "#019399",
    "title": "AUDpo2/3 (Level 10)"
  },
  {
    "id": 759,
    "label": "Posterior auditory area, layer 4",
    "level": 10,
    "color": "#019399",
    "title": "AUDpo4 (Level 10)"
  },
  {
    "id": 791,
    "label": "Posterior auditory area, layer 5",
    "level": 10,
    "color": "#019399",
    "title": "AUDpo5 (Level 10)"
  },
  {
    "id": 249,
    "label": "Posterior auditory area, layer 6a",
    "level": 10,
    "color": "#019399",
    "title": "AUDpo6a (Level 10)"
  },
  {
    "id": 456,
    "label": "Posterior auditory area, layer 6b",
    "level": 10,
    "color": "#019399",
    "title": "AUDpo6b (Level 10)"
  },
  {
    "id": 1018,
    "label": "Ventral auditory area",
    "level": 7,
    "color": "#019399",
    "title": "AUDv (Level 7)"
  },
  {
    "id": 959,
    "label": "Ventral auditory area, layer 1",
    "level": 10,
    "color": "#019399",
    "title": "AUDv1 (Level 10)"
  },
  {
    "id": 755,
    "label": "Ventral auditory area, layer 2/3",
    "level": 10,
    "color": "#019399",
    "title": "AUDv2/3 (Level 10)"
  },
  {
    "id": 990,
    "label": "Ventral auditory area, layer 4",
    "level": 10,
    "color": "#019399",
    "title": "AUDv4 (Level 10)"
  },
  {
    "id": 1023,
    "label": "Ventral auditory area, layer 5",
    "level": 10,
    "color": "#019399",
    "title": "AUDv5 (Level 10)"
  },
  {
    "id": 520,
    "label": "Ventral auditory area, layer 6a",
    "level": 10,
    "color": "#019399",
    "title": "AUDv6a (Level 10)"
  },
  {
    "id": 598,
    "label": "Ventral auditory area, layer 6b",
    "level": 10,
    "color": "#019399",
    "title": "AUDv6b (Level 10)"
  },
  {
    "id": 669,
    "label": "Visual areas",
    "level": 5,
    "color": "#08858C",
    "title": "VIS (Level 5)"
  },
  {
    "id": 801,
    "label": "Visual areas, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VIS1 (Level 10)"
  },
  {
    "id": 561,
    "label": "Visual areas, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VIS2/3 (Level 10)"
  },
  {
    "id": 913,
    "label": "Visual areas, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VIS4 (Level 10)"
  },
  {
    "id": 937,
    "label": "Visual areas, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VIS5 (Level 10)"
  },
  {
    "id": 457,
    "label": "Visual areas, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VIS6a (Level 10)"
  },
  {
    "id": 497,
    "label": "Visual areas, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VIS6b (Level 10)"
  },
  {
    "id": 402,
    "label": "Anterolateral visual area",
    "level": 7,
    "color": "#08858C",
    "title": "VISal (Level 7)"
  },
  {
    "id": 1074,
    "label": "Anterolateral visual area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISal1 (Level 10)"
  },
  {
    "id": 905,
    "label": "Anterolateral visual area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISal2/3 (Level 10)"
  },
  {
    "id": 1114,
    "label": "Anterolateral visual area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISal4 (Level 10)"
  },
  {
    "id": 233,
    "label": "Anterolateral visual area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISal5 (Level 10)"
  },
  {
    "id": 601,
    "label": "Anterolateral visual area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISal6a (Level 10)"
  },
  {
    "id": 649,
    "label": "Anterolateral visual area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISal6b (Level 10)"
  },
  {
    "id": 394,
    "label": "Anteromedial visual area",
    "level": 7,
    "color": "#08858C",
    "title": "VISam (Level 7)"
  },
  {
    "id": 281,
    "label": "Anteromedial visual area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISam1 (Level 10)"
  },
  {
    "id": 1066,
    "label": "Anteromedial visual area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISam2/3 (Level 10)"
  },
  {
    "id": 401,
    "label": "Anteromedial visual area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISam4 (Level 10)"
  },
  {
    "id": 433,
    "label": "Anteromedial visual area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISam5 (Level 10)"
  },
  {
    "id": 1046,
    "label": "Anteromedial visual area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISam6a (Level 10)"
  },
  {
    "id": 441,
    "label": "Anteromedial visual area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISam6b (Level 10)"
  },
  {
    "id": 409,
    "label": "Lateral visual area",
    "level": 7,
    "color": "#08858C",
    "title": "VISl (Level 7)"
  },
  {
    "id": 421,
    "label": "Lateral visual area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISl1 (Level 10)"
  },
  {
    "id": 973,
    "label": "Lateral visual area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISl2/3 (Level 10)"
  },
  {
    "id": 573,
    "label": "Lateral visual area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISl4 (Level 10)"
  },
  {
    "id": 613,
    "label": "Lateral visual area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISl5 (Level 10)"
  },
  {
    "id": 74,
    "label": "Lateral visual area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISl6a (Level 10)"
  },
  {
    "id": 121,
    "label": "Lateral visual area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISl6b (Level 10)"
  },
  {
    "id": 385,
    "label": "Primary visual area",
    "level": 7,
    "color": "#08858C",
    "title": "VISp (Level 7)"
  },
  {
    "id": 593,
    "label": "Primary visual area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISp1 (Level 10)"
  },
  {
    "id": 821,
    "label": "Primary visual area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISp2/3 (Level 10)"
  },
  {
    "id": 721,
    "label": "Primary visual area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISp4 (Level 10)"
  },
  {
    "id": 778,
    "label": "Primary visual area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISp5 (Level 10)"
  },
  {
    "id": 33,
    "label": "Primary visual area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISp6a (Level 10)"
  },
  {
    "id": 305,
    "label": "Primary visual area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISp6b (Level 10)"
  },
  {
    "id": 425,
    "label": "Posterolateral visual area",
    "level": 7,
    "color": "#08858C",
    "title": "VISpl (Level 7)"
  },
  {
    "id": 750,
    "label": "Posterolateral visual area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISpl1 (Level 10)"
  },
  {
    "id": 269,
    "label": "Posterolateral visual area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISpl2/3 (Level 10)"
  },
  {
    "id": 869,
    "label": "Posterolateral visual area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISpl4 (Level 10)"
  },
  {
    "id": 902,
    "label": "Posterolateral visual area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISpl5 (Level 10)"
  },
  {
    "id": 377,
    "label": "Posterolateral visual area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISpl6a (Level 10)"
  },
  {
    "id": 393,
    "label": "Posterolateral visual area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISpl6b (Level 10)"
  },
  {
    "id": 533,
    "label": "posteromedial visual area",
    "level": 7,
    "color": "#08858C",
    "title": "VISpm (Level 7)"
  },
  {
    "id": 805,
    "label": "posteromedial visual area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISpm1 (Level 10)"
  },
  {
    "id": 41,
    "label": "posteromedial visual area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISpm2/3 (Level 10)"
  },
  {
    "id": 501,
    "label": "posteromedial visual area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISpm4 (Level 10)"
  },
  {
    "id": 565,
    "label": "posteromedial visual area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISpm5 (Level 10)"
  },
  {
    "id": 257,
    "label": "posteromedial visual area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISpm6a (Level 10)"
  },
  {
    "id": 469,
    "label": "posteromedial visual area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISpm6b (Level 10)"
  },
  {
    "id": 312782574,
    "label": "Laterointermediate area",
    "level": 7,
    "color": "#08858C",
    "title": "VISli (Level 7)"
  },
  {
    "id": 312782578,
    "label": "Laterointermediate area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISli1 (Level 10)"
  },
  {
    "id": 312782582,
    "label": "Laterointermediate area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISli2/3 (Level 10)"
  },
  {
    "id": 312782586,
    "label": "Laterointermediate area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISli4 (Level 10)"
  },
  {
    "id": 312782590,
    "label": "Laterointermediate area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISli5 (Level 10)"
  },
  {
    "id": 312782594,
    "label": "Laterointermediate area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISli6a (Level 10)"
  },
  {
    "id": 312782598,
    "label": "Laterointermediate area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISli6b (Level 10)"
  },
  {
    "id": 312782628,
    "label": "Postrhinal area",
    "level": 7,
    "color": "#08858C",
    "title": "VISpor (Level 7)"
  },
  {
    "id": 312782632,
    "label": "Postrhinal area, layer 1",
    "level": 10,
    "color": "#08858C",
    "title": "VISpor1 (Level 10)"
  },
  {
    "id": 312782636,
    "label": "Postrhinal area, layer 2/3",
    "level": 10,
    "color": "#08858C",
    "title": "VISpor2/3 (Level 10)"
  },
  {
    "id": 312782640,
    "label": "Postrhinal area, layer 4",
    "level": 10,
    "color": "#08858C",
    "title": "VISpor4 (Level 10)"
  },
  {
    "id": 312782644,
    "label": "Postrhinal area, layer 5",
    "level": 10,
    "color": "#08858C",
    "title": "VISpor5 (Level 10)"
  },
  {
    "id": 312782648,
    "label": "Postrhinal area, layer 6a",
    "level": 10,
    "color": "#08858C",
    "title": "VISpor6a (Level 10)"
  },
  {
    "id": 312782652,
    "label": "Postrhinal area, layer 6b",
    "level": 10,
    "color": "#08858C",
    "title": "VISpor6b (Level 10)"
  },
  {
    "id": 31,
    "label": "Anterior cingulate area",
    "level": 7,
    "color": "#40A666",
    "title": "ACA (Level 7)"
  },
  {
    "id": 572,
    "label": "Anterior cingulate area, layer 1",
    "level": 10,
    "color": "#40A666",
    "title": "ACA1 (Level 10)"
  },
  {
    "id": 1053,
    "label": "Anterior cingulate area, layer 2/3",
    "level": 10,
    "color": "#40A666",
    "title": "ACA2/3 (Level 10)"
  },
  {
    "id": 739,
    "label": "Anterior cingulate area, layer 5",
    "level": 10,
    "color": "#40A666",
    "title": "ACA5 (Level 10)"
  },
  {
    "id": 179,
    "label": "Anterior cingulate area, layer 6a",
    "level": 10,
    "color": "#40A666",
    "title": "ACA6a (Level 10)"
  },
  {
    "id": 227,
    "label": "Anterior cingulate area, layer 6b",
    "level": 10,
    "color": "#40A666",
    "title": "ACA6b (Level 10)"
  },
  {
    "id": 39,
    "label": "Anterior cingulate area, dorsal part",
    "level": 8,
    "color": "#40A666",
    "title": "ACAd (Level 8)"
  },
  {
    "id": 935,
    "label": "Anterior cingulate area, dorsal part, layer 1",
    "level": 10,
    "color": "#40A666",
    "title": "ACAd1 (Level 10)"
  },
  {
    "id": 211,
    "label": "Anterior cingulate area, dorsal part, layer 2/3",
    "level": 10,
    "color": "#40A666",
    "title": "ACAd2/3 (Level 10)"
  },
  {
    "id": 1015,
    "label": "Anterior cingulate area, dorsal part, layer 5",
    "level": 10,
    "color": "#40A666",
    "title": "ACAd5 (Level 10)"
  },
  {
    "id": 919,
    "label": "Anterior cingulate area, dorsal part, layer 6a",
    "level": 10,
    "color": "#40A666",
    "title": "ACAd6a (Level 10)"
  },
  {
    "id": 927,
    "label": "Anterior cingulate area, dorsal part, layer 6b",
    "level": 10,
    "color": "#40A666",
    "title": "ACAd6b (Level 10)"
  },
  {
    "id": 48,
    "label": "Anterior cingulate area, ventral part",
    "level": 8,
    "color": "#40A666",
    "title": "ACAv (Level 8)"
  },
  {
    "id": 588,
    "label": "Anterior cingulate area, ventral part, layer 1",
    "level": 10,
    "color": "#40A666",
    "title": "ACAv1 (Level 10)"
  },
  {
    "id": 296,
    "label": "Anterior cingulate area, ventral part, layer 2/3",
    "level": 10,
    "color": "#40A666",
    "title": "ACAv2/3 (Level 10)"
  },
  {
    "id": 772,
    "label": "Anterior cingulate area, ventral part, layer 5",
    "level": 10,
    "color": "#40A666",
    "title": "ACAv5 (Level 10)"
  },
  {
    "id": 810,
    "label": "Anterior cingulate area, ventral part, 6a",
    "level": 10,
    "color": "#40A666",
    "title": "ACAv6a (Level 10)"
  },
  {
    "id": 819,
    "label": "Anterior cingulate area, ventral part, 6b",
    "level": 10,
    "color": "#40A666",
    "title": "ACAv6b (Level 10)"
  },
  {
    "id": 972,
    "label": "Prelimbic area",
    "level": 7,
    "color": "#2FA850",
    "title": "PL (Level 7)"
  },
  {
    "id": 171,
    "label": "Prelimbic area, layer 1",
    "level": 10,
    "color": "#2FA850",
    "title": "PL1 (Level 10)"
  },
  {
    "id": 195,
    "label": "Prelimbic area, layer 2",
    "level": 10,
    "color": "#2FA850",
    "title": "PL2 (Level 10)"
  },
  {
    "id": 304,
    "label": "Prelimbic area, layer 2/3",
    "level": 10,
    "color": "#2FA850",
    "title": "PL2/3 (Level 10)"
  },
  {
    "id": 363,
    "label": "Prelimbic area, layer 5",
    "level": 10,
    "color": "#2FA850",
    "title": "PL5 (Level 10)"
  },
  {
    "id": 84,
    "label": "Prelimbic area, layer 6a",
    "level": 10,
    "color": "#2FA850",
    "title": "PL6a (Level 10)"
  },
  {
    "id": 132,
    "label": "Prelimbic area, layer 6b",
    "level": 10,
    "color": "#2FA850",
    "title": "PL6b (Level 10)"
  },
  {
    "id": 44,
    "label": "Infralimbic area",
    "level": 7,
    "color": "#59B363",
    "title": "ILA (Level 7)"
  },
  {
    "id": 707,
    "label": "Infralimbic area, layer 1",
    "level": 10,
    "color": "#59B363",
    "title": "ILA1 (Level 10)"
  },
  {
    "id": 747,
    "label": "Infralimbic area, layer 2",
    "level": 10,
    "color": "#59B363",
    "title": "ILA2 (Level 10)"
  },
  {
    "id": 556,
    "label": "Infralimbic area, layer 2/3",
    "level": 10,
    "color": "#59B363",
    "title": "ILA2/3 (Level 10)"
  },
  {
    "id": 827,
    "label": "Infralimbic area, layer 5",
    "level": 10,
    "color": "#59B363",
    "title": "ILA5 (Level 10)"
  },
  {
    "id": 1054,
    "label": "Infralimbic area, layer 6a",
    "level": 10,
    "color": "#59B363",
    "title": "ILA6a (Level 10)"
  },
  {
    "id": 1081,
    "label": "Infralimbic area, layer 6b",
    "level": 10,
    "color": "#59B363",
    "title": "ILA6b (Level 10)"
  },
  {
    "id": 714,
    "label": "Orbital area",
    "level": 7,
    "color": "#248A5E",
    "title": "ORB (Level 7)"
  },
  {
    "id": 264,
    "label": "Orbital area, layer 1",
    "level": 10,
    "color": "#248A5E",
    "title": "ORB1 (Level 10)"
  },
  {
    "id": 492,
    "label": "Orbital area, layer 2/3",
    "level": 10,
    "color": "#248A5E",
    "title": "ORB2/3 (Level 10)"
  },
  {
    "id": 352,
    "label": "Orbital area, layer 5",
    "level": 10,
    "color": "#248A5E",
    "title": "ORB5 (Level 10)"
  },
  {
    "id": 476,
    "label": "Orbital area, layer 6a",
    "level": 10,
    "color": "#248A5E",
    "title": "ORB6a (Level 10)"
  },
  {
    "id": 516,
    "label": "Orbital area, layer 6b",
    "level": 10,
    "color": "#248A5E",
    "title": "ORB6b (Level 10)"
  },
  {
    "id": 723,
    "label": "Orbital area, lateral part",
    "level": 8,
    "color": "#248A5E",
    "title": "ORBl (Level 8)"
  },
  {
    "id": 448,
    "label": "Orbital area, lateral part, layer 1",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBl1 (Level 10)"
  },
  {
    "id": 412,
    "label": "Orbital area, lateral part, layer 2/3",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBl2/3 (Level 10)"
  },
  {
    "id": 630,
    "label": "Orbital area, lateral part, layer 5",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBl5 (Level 10)"
  },
  {
    "id": 440,
    "label": "Orbital area, lateral part, layer 6a",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBl6a (Level 10)"
  },
  {
    "id": 488,
    "label": "Orbital area, lateral part, layer 6b",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBl6b (Level 10)"
  },
  {
    "id": 731,
    "label": "Orbital area, medial part",
    "level": 8,
    "color": "#248A5E",
    "title": "ORBm (Level 8)"
  },
  {
    "id": 484,
    "label": "Orbital area, medial part, layer 1",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBm1 (Level 10)"
  },
  {
    "id": 524,
    "label": "Orbital area, medial part, layer 2",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBm2 (Level 10)"
  },
  {
    "id": 582,
    "label": "Orbital area, medial part, layer 2/3",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBm2/3 (Level 10)"
  },
  {
    "id": 620,
    "label": "Orbital area, medial part, layer 5",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBm5 (Level 10)"
  },
  {
    "id": 910,
    "label": "Orbital area, medial part, layer 6a",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBm6a (Level 10)"
  },
  {
    "id": 527696977,
    "label": "Orbital area, medial part, layer 6b",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBm6b (Level 10)"
  },
  {
    "id": 738,
    "label": "Orbital area, ventral part",
    "level": 8,
    "color": "#248A5E",
    "title": "ORBv (Level 8)"
  },
  {
    "id": 746,
    "label": "Orbital area, ventrolateral part",
    "level": 8,
    "color": "#248A5E",
    "title": "ORBvl (Level 8)"
  },
  {
    "id": 969,
    "label": "Orbital area, ventrolateral part, layer 1",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBvl1 (Level 10)"
  },
  {
    "id": 288,
    "label": "Orbital area, ventrolateral part, layer 2/3",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBvl2/3 (Level 10)"
  },
  {
    "id": 1125,
    "label": "Orbital area, ventrolateral part, layer 5",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBvl5 (Level 10)"
  },
  {
    "id": 608,
    "label": "Orbital area, ventrolateral part, layer 6a",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBvl6a (Level 10)"
  },
  {
    "id": 680,
    "label": "Orbital area, ventrolateral part, layer 6b",
    "level": 10,
    "color": "#248A5E",
    "title": "ORBvl6b (Level 10)"
  },
  {
    "id": 95,
    "label": "Agranular insular area",
    "level": 7,
    "color": "#219866",
    "title": "AI (Level 7)"
  },
  {
    "id": 104,
    "label": "Agranular insular area, dorsal part",
    "level": 8,
    "color": "#219866",
    "title": "AId (Level 8)"
  },
  {
    "id": 996,
    "label": "Agranular insular area, dorsal part, layer 1",
    "level": 10,
    "color": "#219866",
    "title": "AId1 (Level 10)"
  },
  {
    "id": 328,
    "label": "Agranular insular area, dorsal part, layer 2/3",
    "level": 10,
    "color": "#219866",
    "title": "AId2/3 (Level 10)"
  },
  {
    "id": 1101,
    "label": "Agranular insular area, dorsal part, layer 5",
    "level": 10,
    "color": "#219866",
    "title": "AId5 (Level 10)"
  },
  {
    "id": 783,
    "label": "Agranular insular area, dorsal part, layer 6a",
    "level": 10,
    "color": "#219866",
    "title": "AId6a (Level 10)"
  },
  {
    "id": 831,
    "label": "Agranular insular area, dorsal part, layer 6b",
    "level": 10,
    "color": "#219866",
    "title": "AId6b (Level 10)"
  },
  {
    "id": 111,
    "label": "Agranular insular area, posterior part",
    "level": 8,
    "color": "#219866",
    "title": "AIp (Level 8)"
  },
  {
    "id": 120,
    "label": "Agranular insular area, posterior part, layer 1",
    "level": 10,
    "color": "#219866",
    "title": "AIp1 (Level 10)"
  },
  {
    "id": 163,
    "label": "Agranular insular area, posterior part, layer 2/3",
    "level": 10,
    "color": "#219866",
    "title": "AIp2/3 (Level 10)"
  },
  {
    "id": 344,
    "label": "Agranular insular area, posterior part, layer 5",
    "level": 10,
    "color": "#219866",
    "title": "AIp5 (Level 10)"
  },
  {
    "id": 314,
    "label": "Agranular insular area, posterior part, layer 6a",
    "level": 10,
    "color": "#219866",
    "title": "AIp6a (Level 10)"
  },
  {
    "id": 355,
    "label": "Agranular insular area, posterior part, layer 6b",
    "level": 10,
    "color": "#219866",
    "title": "AIp6b (Level 10)"
  },
  {
    "id": 119,
    "label": "Agranular insular area, ventral part",
    "level": 8,
    "color": "#219866",
    "title": "AIv (Level 8)"
  },
  {
    "id": 704,
    "label": "Agranular insular area, ventral part, layer 1",
    "level": 10,
    "color": "#219866",
    "title": "AIv1 (Level 10)"
  },
  {
    "id": 694,
    "label": "Agranular insular area, ventral part, layer 2/3",
    "level": 10,
    "color": "#219866",
    "title": "AIv2/3 (Level 10)"
  },
  {
    "id": 800,
    "label": "Agranular insular area, ventral part, layer 5",
    "level": 10,
    "color": "#219866",
    "title": "AIv5 (Level 10)"
  },
  {
    "id": 675,
    "label": "Agranular insular area, ventral part, layer 6a",
    "level": 10,
    "color": "#219866",
    "title": "AIv6a (Level 10)"
  },
  {
    "id": 699,
    "label": "Agranular insular area, ventral part, layer 6b",
    "level": 10,
    "color": "#219866",
    "title": "AIv6b (Level 10)"
  },
  {
    "id": 254,
    "label": "Retrosplenial area",
    "level": 7,
    "color": "#1AA698",
    "title": "RSP (Level 7)"
  },
  {
    "id": 894,
    "label": "Retrosplenial area, lateral agranular part",
    "level": 8,
    "color": "#1AA698",
    "title": "RSPagl (Level 8)"
  },
  {
    "id": 671,
    "label": "Retrosplenial area, lateral agranular part, layer 1",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPagl1 (Level 10)"
  },
  {
    "id": 965,
    "label": "Retrosplenial area, lateral agranular part, layer 2/3",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPagl2/3 (Level 10)"
  },
  {
    "id": 774,
    "label": "Retrosplenial area, lateral agranular part, layer 5",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPagl5 (Level 10)"
  },
  {
    "id": 906,
    "label": "Retrosplenial area, lateral agranular part, layer 6a",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPagl6a (Level 10)"
  },
  {
    "id": 279,
    "label": "Retrosplenial area, lateral agranular part, layer 6b",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPagl6b (Level 10)"
  },
  {
    "id": 480149258,
    "label": "Mediomedial anterior visual area",
    "level": 9,
    "color": "#1AA698",
    "title": "VISmma (Level 9)"
  },
  {
    "id": 480149262,
    "label": "Mediomedial anterior visual area, layer 1",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmma1 (Level 10)"
  },
  {
    "id": 480149266,
    "label": "Mediomedial anterior visual area, layer 2/3",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmma2/3 (Level 10)"
  },
  {
    "id": 480149270,
    "label": "Mediomedial anterior visual area, layer 4",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmma4 (Level 10)"
  },
  {
    "id": 480149274,
    "label": "Mediomedial anterior visual area,layer 5",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmma5 (Level 10)"
  },
  {
    "id": 480149278,
    "label": "Mediomedial anterior visual area, layer 6a",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmma6a (Level 10)"
  },
  {
    "id": 480149282,
    "label": "Mediomedial anterior visual area, layer 6b",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmma6b (Level 10)"
  },
  {
    "id": 480149286,
    "label": "Mediomedial posterior visual area",
    "level": 9,
    "color": "#1AA698",
    "title": "VISmmp (Level 9)"
  },
  {
    "id": 480149290,
    "label": "Mediomedial posterior visual area, layer 1",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmmp1 (Level 10)"
  },
  {
    "id": 480149294,
    "label": "Mediomedial posterior visual area, layer 2/3",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmmp2/3 (Level 10)"
  },
  {
    "id": 480149298,
    "label": "Mediomedial posterior visual area, layer 4",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmmp4 (Level 10)"
  },
  {
    "id": 480149302,
    "label": "Mediomedial posterior visual area,layer 5",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmmp5 (Level 10)"
  },
  {
    "id": 480149306,
    "label": "Mediomedial posterior visual area, layer 6a",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmmp6a (Level 10)"
  },
  {
    "id": 480149310,
    "label": "Mediomedial posterior visual area, layer 6b",
    "level": 10,
    "color": "#1AA698",
    "title": "VISmmp6b (Level 10)"
  },
  {
    "id": 480149314,
    "label": "Medial visual area",
    "level": 9,
    "color": "#1AA698",
    "title": "VISm (Level 9)"
  },
  {
    "id": 480149318,
    "label": "Medial visual area, layer 1",
    "level": 10,
    "color": "#1AA698",
    "title": "VISm1 (Level 10)"
  },
  {
    "id": 480149322,
    "label": "Medial visual area, layer 2/3",
    "level": 10,
    "color": "#1AA698",
    "title": "VISm2/3 (Level 10)"
  },
  {
    "id": 480149326,
    "label": "Medial visual area, layer 4",
    "level": 10,
    "color": "#1AA698",
    "title": "VISm4 (Level 10)"
  },
  {
    "id": 480149330,
    "label": "Medial visual area,layer 5",
    "level": 10,
    "color": "#1AA698",
    "title": "VISm5 (Level 10)"
  },
  {
    "id": 480149334,
    "label": "Medial visual area, layer 6a",
    "level": 10,
    "color": "#1AA698",
    "title": "VISm6a (Level 10)"
  },
  {
    "id": 480149338,
    "label": "Medial visual area, layer 6b",
    "level": 10,
    "color": "#1AA698",
    "title": "VISm6b (Level 10)"
  },
  {
    "id": 879,
    "label": "Retrosplenial area, dorsal part",
    "level": 8,
    "color": "#1AA698",
    "title": "RSPd (Level 8)"
  },
  {
    "id": 442,
    "label": "Retrosplenial area, dorsal part, layer 1",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPd1 (Level 10)"
  },
  {
    "id": 434,
    "label": "Retrosplenial area, dorsal part, layer 2/3",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPd2/3 (Level 10)"
  },
  {
    "id": 545,
    "label": "Retrosplenial area, dorsal part, layer 4",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPd4 (Level 10)"
  },
  {
    "id": 610,
    "label": "Retrosplenial area, dorsal part, layer 5",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPd5 (Level 10)"
  },
  {
    "id": 274,
    "label": "Retrosplenial area, dorsal part, layer 6a",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPd6a (Level 10)"
  },
  {
    "id": 330,
    "label": "Retrosplenial area, dorsal part, layer 6b",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPd6b (Level 10)"
  },
  {
    "id": 886,
    "label": "Retrosplenial area, ventral part",
    "level": 8,
    "color": "#1AA698",
    "title": "RSPv (Level 8)"
  },
  {
    "id": 542,
    "label": "Retrosplenial area, ventral part, layer 1",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPv1 (Level 10)"
  },
  {
    "id": 606,
    "label": "Retrosplenial area, ventral part, layer 2",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPv2 (Level 10)"
  },
  {
    "id": 430,
    "label": "Retrosplenial area, ventral part, layer 2/3",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPv2/3 (Level 10)"
  },
  {
    "id": 687,
    "label": "Retrosplenial area, ventral part, layer 5",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPv5 (Level 10)"
  },
  {
    "id": 590,
    "label": "Retrosplenial area, ventral part, layer 6a",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPv6a (Level 10)"
  },
  {
    "id": 622,
    "label": "Retrosplenial area, ventral part, layer 6b",
    "level": 10,
    "color": "#1AA698",
    "title": "RSPv6b (Level 10)"
  },
  {
    "id": 22,
    "label": "Posterior parietal association areas",
    "level": 5,
    "color": "#009FAC",
    "title": "PTLp (Level 5)"
  },
  {
    "id": 532,
    "label": "Posterior parietal association areas, layer 1",
    "level": 10,
    "color": "#009FAC",
    "title": "PTLp1 (Level 10)"
  },
  {
    "id": 241,
    "label": "Posterior parietal association areas, layer 2/3",
    "level": 10,
    "color": "#009FAC",
    "title": "PTLp2/3 (Level 10)"
  },
  {
    "id": 635,
    "label": "Posterior parietal association areas, layer 4",
    "level": 10,
    "color": "#009FAC",
    "title": "PTLp4 (Level 10)"
  },
  {
    "id": 683,
    "label": "Posterior parietal association areas, layer 5",
    "level": 10,
    "color": "#009FAC",
    "title": "PTLp5 (Level 10)"
  },
  {
    "id": 308,
    "label": "Posterior parietal association areas, layer 6a",
    "level": 10,
    "color": "#009FAC",
    "title": "PTLp6a (Level 10)"
  },
  {
    "id": 340,
    "label": "Posterior parietal association areas, layer 6b",
    "level": 10,
    "color": "#009FAC",
    "title": "PTLp6b (Level 10)"
  },
  {
    "id": 312782546,
    "label": "Anterior area",
    "level": 7,
    "color": "#009FAC",
    "title": "VISa (Level 7)"
  },
  {
    "id": 312782550,
    "label": "Anterior area, layer 1",
    "level": 10,
    "color": "#009FAC",
    "title": "VISa1 (Level 10)"
  },
  {
    "id": 312782554,
    "label": "Anterior area, layer 2/3",
    "level": 10,
    "color": "#009FAC",
    "title": "VISa2/3 (Level 10)"
  },
  {
    "id": 312782558,
    "label": "Anterior area, layer 4",
    "level": 10,
    "color": "#009FAC",
    "title": "VISa4 (Level 10)"
  },
  {
    "id": 312782562,
    "label": "Anterior area, layer 5",
    "level": 10,
    "color": "#009FAC",
    "title": "VISa5 (Level 10)"
  },
  {
    "id": 312782566,
    "label": "Anterior area, layer 6a",
    "level": 10,
    "color": "#009FAC",
    "title": "VISa6a (Level 10)"
  },
  {
    "id": 312782570,
    "label": "Anterior area, layer 6b",
    "level": 10,
    "color": "#009FAC",
    "title": "VISa6b (Level 10)"
  },
  {
    "id": 417,
    "label": "Rostrolateral visual area",
    "level": 7,
    "color": "#009FAC",
    "title": "VISrl (Level 7)"
  },
  {
    "id": 312782604,
    "label": "Rostrolateral area, layer 1",
    "level": 10,
    "color": "#009FAC",
    "title": "VISrl1 (Level 10)"
  },
  {
    "id": 312782608,
    "label": "Rostrolateral area, layer 2/3",
    "level": 10,
    "color": "#009FAC",
    "title": "VISrl2/3 (Level 10)"
  },
  {
    "id": 312782612,
    "label": "Rostrolateral area, layer 4",
    "level": 10,
    "color": "#009FAC",
    "title": "VISrl4 (Level 10)"
  },
  {
    "id": 312782616,
    "label": "Rostrolateral area, layer 5",
    "level": 10,
    "color": "#009FAC",
    "title": "VISrl5 (Level 10)"
  },
  {
    "id": 312782620,
    "label": "Rostrolateral area, layer 6a",
    "level": 10,
    "color": "#009FAC",
    "title": "VISrl6a (Level 10)"
  },
  {
    "id": 312782624,
    "label": "Rostrolateral area, layer 6b",
    "level": 10,
    "color": "#009FAC",
    "title": "VISrl6b (Level 10)"
  },
  {
    "id": 541,
    "label": "Temporal association areas",
    "level": 5,
    "color": "#15B0B3",
    "title": "TEa (Level 5)"
  },
  {
    "id": 97,
    "label": "Temporal association areas, layer 1",
    "level": 10,
    "color": "#15B0B3",
    "title": "TEa1 (Level 10)"
  },
  {
    "id": 1127,
    "label": "Temporal association areas, layer 2/3",
    "level": 10,
    "color": "#15B0B3",
    "title": "TEa2/3 (Level 10)"
  },
  {
    "id": 234,
    "label": "Temporal association areas, layer 4",
    "level": 10,
    "color": "#15B0B3",
    "title": "TEa4 (Level 10)"
  },
  {
    "id": 289,
    "label": "Temporal association areas, layer 5",
    "level": 10,
    "color": "#15B0B3",
    "title": "TEa5 (Level 10)"
  },
  {
    "id": 729,
    "label": "Temporal association areas, layer 6a",
    "level": 10,
    "color": "#15B0B3",
    "title": "TEa6a (Level 10)"
  },
  {
    "id": 786,
    "label": "Temporal association areas, layer 6b",
    "level": 10,
    "color": "#15B0B3",
    "title": "TEa6b (Level 10)"
  },
  {
    "id": 922,
    "label": "Perirhinal area",
    "level": 7,
    "color": "#0E9684",
    "title": "PERI (Level 7)"
  },
  {
    "id": 540,
    "label": "Perirhinal area, layer 1",
    "level": 10,
    "color": "#0E9684",
    "title": "PERI1 (Level 10)"
  },
  {
    "id": 888,
    "label": "Perirhinal area, layer 2/3",
    "level": 10,
    "color": "#0E9684",
    "title": "PERI2/3 (Level 10)"
  },
  {
    "id": 692,
    "label": "Perirhinal area, layer 5",
    "level": 10,
    "color": "#0E9684",
    "title": "PERI5 (Level 10)"
  },
  {
    "id": 335,
    "label": "Perirhinal area, layer 6a",
    "level": 10,
    "color": "#0E9684",
    "title": "PERI6a (Level 10)"
  },
  {
    "id": 368,
    "label": "Perirhinal area, layer 6b",
    "level": 10,
    "color": "#0E9684",
    "title": "PERI6b (Level 10)"
  },
  {
    "id": 895,
    "label": "Ectorhinal area",
    "level": 7,
    "color": "#0D9F91",
    "title": "ECT (Level 7)"
  },
  {
    "id": 836,
    "label": "Ectorhinal area/Layer 1",
    "level": 10,
    "color": "#0D9F91",
    "title": "ECT1 (Level 10)"
  },
  {
    "id": 427,
    "label": "Ectorhinal area/Layer 2/3",
    "level": 10,
    "color": "#0D9F91",
    "title": "ECT2/3 (Level 10)"
  },
  {
    "id": 988,
    "label": "Ectorhinal area/Layer 5",
    "level": 10,
    "color": "#0D9F91",
    "title": "ECT5 (Level 10)"
  },
  {
    "id": 977,
    "label": "Ectorhinal area/Layer 6a",
    "level": 10,
    "color": "#0D9F91",
    "title": "ECT6a (Level 10)"
  },
  {
    "id": 1045,
    "label": "Ectorhinal area/Layer 6b",
    "level": 10,
    "color": "#0D9F91",
    "title": "ECT6b (Level 10)"
  },
  {
    "id": 698,
    "label": "Olfactory areas",
    "level": 4,
    "color": "#9AD2BD",
    "title": "OLF (Level 4)"
  },
  {
    "id": 507,
    "label": "Main olfactory bulb",
    "level": 7,
    "color": "#9AD2BD",
    "title": "MOB (Level 7)"
  },
  {
    "id": 212,
    "label": "Main olfactory bulb, glomerular layer",
    "level": 10,
    "color": "#82C7AE",
    "title": "MOBgl (Level 10)"
  },
  {
    "id": 220,
    "label": "Main olfactory bulb, granule layer",
    "level": 10,
    "color": "#82C7AE",
    "title": "MOBgr (Level 10)"
  },
  {
    "id": 228,
    "label": "Main olfactory bulb, inner plexiform layer",
    "level": 10,
    "color": "#9AD2BD",
    "title": "MOBipl (Level 10)"
  },
  {
    "id": 236,
    "label": "Main olfactory bulb, mitral layer",
    "level": 10,
    "color": "#82C7AE",
    "title": "MOBmi (Level 10)"
  },
  {
    "id": 244,
    "label": "Main olfactory bulb, outer plexiform layer",
    "level": 10,
    "color": "#9AD2BD",
    "title": "MOBopl (Level 10)"
  },
  {
    "id": 151,
    "label": "Accessory olfactory bulb",
    "level": 7,
    "color": "#9DF0D2",
    "title": "AOB (Level 7)"
  },
  {
    "id": 188,
    "label": "Accessory olfactory bulb, glomerular layer",
    "level": 10,
    "color": "#9DF0D2",
    "title": "AOBgl (Level 10)"
  },
  {
    "id": 196,
    "label": "Accessory olfactory bulb, granular layer",
    "level": 10,
    "color": "#95E4C8",
    "title": "AOBgr (Level 10)"
  },
  {
    "id": 204,
    "label": "Accessory olfactory bulb, mitral layer",
    "level": 10,
    "color": "#9DF0D2",
    "title": "AOBmi (Level 10)"
  },
  {
    "id": 159,
    "label": "Anterior olfactory nucleus",
    "level": 7,
    "color": "#54BF94",
    "title": "AON (Level 7)"
  },
  {
    "id": 167,
    "label": "Anterior olfactory nucleus, dorsal part",
    "level": 8,
    "color": "#54BF94",
    "title": "AONd (Level 8)"
  },
  {
    "id": 175,
    "label": "Anterior olfactory nucleus, external part",
    "level": 8,
    "color": "#54BF94",
    "title": "AONe (Level 8)"
  },
  {
    "id": 183,
    "label": "Anterior olfactory nucleus, lateral part",
    "level": 8,
    "color": "#54BF94",
    "title": "AONl (Level 8)"
  },
  {
    "id": 191,
    "label": "Anterior olfactory nucleus, medial part",
    "level": 8,
    "color": "#54BF94",
    "title": "AONm (Level 8)"
  },
  {
    "id": 199,
    "label": "Anterior olfactory nucleus, posteroventral part",
    "level": 8,
    "color": "#54BF94",
    "title": "AONpv (Level 8)"
  },
  {
    "id": 160,
    "label": "Anterior olfactory nucleus, layer 1",
    "level": 10,
    "color": "#54BF94",
    "title": "AON1 (Level 10)"
  },
  {
    "id": 168,
    "label": "Anterior olfactory nucleus, layer 2",
    "level": 10,
    "color": "#54BF94",
    "title": "AON2 (Level 10)"
  },
  {
    "id": 589,
    "label": "Taenia tecta",
    "level": 7,
    "color": "#62D09F",
    "title": "TT (Level 7)"
  },
  {
    "id": 597,
    "label": "Taenia tecta, dorsal part",
    "level": 8,
    "color": "#62D09F",
    "title": "TTd (Level 8)"
  },
  {
    "id": 297,
    "label": "Taenia tecta, dorsal part, layers 1-4",
    "level": 10,
    "color": "#62D09F",
    "title": "TTd1-4 (Level 10)"
  },
  {
    "id": 1034,
    "label": "Taenia tecta, dorsal part, layer 1",
    "level": 10,
    "color": "#62D09F",
    "title": "TTd1 (Level 10)"
  },
  {
    "id": 1042,
    "label": "Taenia tecta, dorsal part, layer 2",
    "level": 10,
    "color": "#62D09F",
    "title": "TTd2 (Level 10)"
  },
  {
    "id": 1050,
    "label": "Taenia tecta, dorsal part, layer 3",
    "level": 10,
    "color": "#62D09F",
    "title": "TTd3 (Level 10)"
  },
  {
    "id": 1059,
    "label": "Taenia tecta, dorsal part, layer 4",
    "level": 10,
    "color": "#62D09F",
    "title": "TTd4 (Level 10)"
  },
  {
    "id": 605,
    "label": "Taenia tecta, ventral part",
    "level": 8,
    "color": "#62D09F",
    "title": "TTv (Level 8)"
  },
  {
    "id": 306,
    "label": "Taenia tecta, ventral part, layers 1-3",
    "level": 10,
    "color": "#62D09F",
    "title": "TTv1-3 (Level 10)"
  },
  {
    "id": 1067,
    "label": "Taenia tecta, ventral part, layer 1",
    "level": 10,
    "color": "#62D09F",
    "title": "TTv1 (Level 10)"
  },
  {
    "id": 1075,
    "label": "Taenia tecta, ventral part, layer 2",
    "level": 10,
    "color": "#62D09F",
    "title": "TTv2 (Level 10)"
  },
  {
    "id": 1082,
    "label": "Taenia tecta, ventral part, layer 3",
    "level": 10,
    "color": "#62D09F",
    "title": "TTv3 (Level 10)"
  },
  {
    "id": 814,
    "label": "Dorsal peduncular area",
    "level": 7,
    "color": "#A4DAA4",
    "title": "DP (Level 7)"
  },
  {
    "id": 496,
    "label": "Dorsal peduncular area, layer 1",
    "level": 10,
    "color": "#A4DAA4",
    "title": "DP1 (Level 10)"
  },
  {
    "id": 535,
    "label": "Dorsal peduncular area, layer 2",
    "level": 10,
    "color": "#A4DAA4",
    "title": "DP2 (Level 10)"
  },
  {
    "id": 360,
    "label": "Dorsal peduncular area, layer 2/3",
    "level": 10,
    "color": "#A4DAA4",
    "title": "DP2/3 (Level 10)"
  },
  {
    "id": 646,
    "label": "Dorsal peduncular area, layer 5",
    "level": 10,
    "color": "#A4DAA4",
    "title": "DP5 (Level 10)"
  },
  {
    "id": 267,
    "label": "Dorsal peduncular area, layer 6a",
    "level": 10,
    "color": "#A4DAA4",
    "title": "DP6a (Level 10)"
  },
  {
    "id": 961,
    "label": "Piriform area",
    "level": 7,
    "color": "#6ACBBA",
    "title": "PIR (Level 7)"
  },
  {
    "id": 152,
    "label": "Piriform area, layers 1-3",
    "level": 10,
    "color": "#6ACBBA",
    "title": "PIR1-3 (Level 10)"
  },
  {
    "id": 276,
    "label": "Piriform area, molecular layer",
    "level": 10,
    "color": "#6ACBBA",
    "title": "PIR1 (Level 10)"
  },
  {
    "id": 284,
    "label": "Piriform area, pyramidal layer",
    "level": 10,
    "color": "#6ACBBA",
    "title": "PIR2 (Level 10)"
  },
  {
    "id": 291,
    "label": "Piriform area, polymorph layer",
    "level": 10,
    "color": "#6ACBBA",
    "title": "PIR3 (Level 10)"
  },
  {
    "id": 619,
    "label": "Nucleus of the lateral olfactory tract",
    "level": 7,
    "color": "#95E4C8",
    "title": "NLOT (Level 7)"
  },
  {
    "id": 392,
    "label": "Nucleus of the lateral olfactory tract, layers 1-3",
    "level": 10,
    "color": "#95E4C8",
    "title": "NLOT1-3 (Level 10)"
  },
  {
    "id": 260,
    "label": "Nucleus of the lateral olfactory tract, molecular layer",
    "level": 10,
    "color": "#95E4C8",
    "title": "NLOT1 (Level 10)"
  },
  {
    "id": 268,
    "label": "Nucleus of the lateral olfactory tract, pyramidal layer",
    "level": 10,
    "color": "#95E4C8",
    "title": "NLOT2 (Level 10)"
  },
  {
    "id": 1139,
    "label": "Nucleus of the lateral olfactory tract, layer 3",
    "level": 10,
    "color": "#95E4C8",
    "title": "NLOT3 (Level 10)"
  },
  {
    "id": 631,
    "label": "Cortical amygdalar area",
    "level": 7,
    "color": "#61E7B7",
    "title": "COA (Level 7)"
  },
  {
    "id": 639,
    "label": "Cortical amygdalar area, anterior part",
    "level": 8,
    "color": "#61E7B7",
    "title": "COAa (Level 8)"
  },
  {
    "id": 192,
    "label": "Cortical amygdalar area, anterior part, layer 1",
    "level": 10,
    "color": "#61E7B7",
    "title": "COAa1 (Level 10)"
  },
  {
    "id": 200,
    "label": "Cortical amygdalar area, anterior part, layer 2",
    "level": 10,
    "color": "#61E7B7",
    "title": "COAa2 (Level 10)"
  },
  {
    "id": 208,
    "label": "Cortical amygdalar area, anterior part, layer 3",
    "level": 10,
    "color": "#61E7B7",
    "title": "COAa3 (Level 10)"
  },
  {
    "id": 647,
    "label": "Cortical amygdalar area, posterior part",
    "level": 8,
    "color": "#61E7B7",
    "title": "COAp (Level 8)"
  },
  {
    "id": 655,
    "label": "Cortical amygdalar area, posterior part, lateral zone",
    "level": 9,
    "color": "#61E7B7",
    "title": "COApl (Level 9)"
  },
  {
    "id": 584,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layers 1-2",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApl1-2 (Level 10)"
  },
  {
    "id": 376,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layers 1-3",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApl1-3 (Level 10)"
  },
  {
    "id": 216,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layer 1",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApl1 (Level 10)"
  },
  {
    "id": 224,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layer 2",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApl2 (Level 10)"
  },
  {
    "id": 232,
    "label": "Cortical amygdalar area, posterior part, lateral zone, layer 3",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApl3 (Level 10)"
  },
  {
    "id": 663,
    "label": "Cortical amygdalar area, posterior part, medial zone",
    "level": 9,
    "color": "#61E7B7",
    "title": "COApm (Level 9)"
  },
  {
    "id": 592,
    "label": "Cortical amygdalar area, posterior part, medial zone, layers 1-2",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApm1-2 (Level 10)"
  },
  {
    "id": 383,
    "label": "Cortical amygdalar area, posterior part, medial zone, layers 1-3",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApm1-3 (Level 10)"
  },
  {
    "id": 240,
    "label": "Cortical amygdalar area, posterior part, medial zone, layer 1",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApm1 (Level 10)"
  },
  {
    "id": 248,
    "label": "Cortical amygdalar area, posterior part, medial zone, layer 2",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApm2 (Level 10)"
  },
  {
    "id": 256,
    "label": "Cortical amygdalar area, posterior part, medial zone, layer 3",
    "level": 10,
    "color": "#61E7B7",
    "title": "COApm3 (Level 10)"
  },
  {
    "id": 788,
    "label": "Piriform-amygdalar area",
    "level": 7,
    "color": "#59DAAB",
    "title": "PAA (Level 7)"
  },
  {
    "id": 400,
    "label": "Piriform-amygdalar area, layers 1-3",
    "level": 10,
    "color": "#59DAAB",
    "title": "PAA1-3 (Level 10)"
  },
  {
    "id": 408,
    "label": "Piriform-amygdalar area, molecular layer",
    "level": 10,
    "color": "#59DAAB",
    "title": "PAA1 (Level 10)"
  },
  {
    "id": 416,
    "label": "Piriform-amygdalar area, pyramidal layer",
    "level": 10,
    "color": "#59DAAB",
    "title": "PAA2 (Level 10)"
  },
  {
    "id": 424,
    "label": "Piriform-amygdalar area, polymorph layer",
    "level": 10,
    "color": "#59DAAB",
    "title": "PAA3 (Level 10)"
  },
  {
    "id": 566,
    "label": "Postpiriform transition area",
    "level": 7,
    "color": "#A8ECD3",
    "title": "TR (Level 7)"
  },
  {
    "id": 517,
    "label": "Postpiriform transition area, layers 1-3",
    "level": 10,
    "color": "#A8ECD3",
    "title": "TR1-3 (Level 10)"
  },
  {
    "id": 1140,
    "label": "Postpiriform transition area, layers 1",
    "level": 10,
    "color": "#A8ECD3",
    "title": "TR1 (Level 10)"
  },
  {
    "id": 1141,
    "label": "Postpiriform transition area, layers 2",
    "level": 10,
    "color": "#A8ECD3",
    "title": "TR2 (Level 10)"
  },
  {
    "id": 1142,
    "label": "Postpiriform transition area, layers 3",
    "level": 10,
    "color": "#A8ECD3",
    "title": "TR3 (Level 10)"
  },
  {
    "id": 1089,
    "label": "Hippocampal formation",
    "level": 4,
    "color": "#7ED04B",
    "title": "HPF (Level 4)"
  },
  {
    "id": 1080,
    "label": "Hippocampal region",
    "level": 5,
    "color": "#7ED04B",
    "title": "HIP (Level 5)"
  },
  {
    "id": 375,
    "label": "Ammon's horn",
    "level": 7,
    "color": "#7ED04B",
    "title": "CA (Level 7)"
  },
  {
    "id": 382,
    "label": "Field CA1",
    "level": 8,
    "color": "#7ED04B",
    "title": "CA1 (Level 8)"
  },
  {
    "id": 391,
    "label": "Field CA1, stratum lacunosum-moleculare",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA1slm (Level 10)"
  },
  {
    "id": 399,
    "label": "Field CA1, stratum oriens",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA1so (Level 10)"
  },
  {
    "id": 407,
    "label": "Field CA1, pyramidal layer",
    "level": 10,
    "color": "#66A83D",
    "title": "CA1sp (Level 10)"
  },
  {
    "id": 415,
    "label": "Field CA1, stratum radiatum",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA1sr (Level 10)"
  },
  {
    "id": 423,
    "label": "Field CA2",
    "level": 8,
    "color": "#7ED04B",
    "title": "CA2 (Level 8)"
  },
  {
    "id": 431,
    "label": "Field CA2, stratum lacunosum-moleculare",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA2slm (Level 10)"
  },
  {
    "id": 438,
    "label": "Field CA2, stratum oriens",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA2so (Level 10)"
  },
  {
    "id": 446,
    "label": "Field CA2, pyramidal layer",
    "level": 10,
    "color": "#66A83D",
    "title": "CA2sp (Level 10)"
  },
  {
    "id": 454,
    "label": "Field CA2, stratum radiatum",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA2sr (Level 10)"
  },
  {
    "id": 463,
    "label": "Field CA3",
    "level": 8,
    "color": "#7ED04B",
    "title": "CA3 (Level 8)"
  },
  {
    "id": 471,
    "label": "Field CA3, stratum lacunosum-moleculare",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA3slm (Level 10)"
  },
  {
    "id": 479,
    "label": "Field CA3, stratum lucidum",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA3slu (Level 10)"
  },
  {
    "id": 486,
    "label": "Field CA3, stratum oriens",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA3so (Level 10)"
  },
  {
    "id": 495,
    "label": "Field CA3, pyramidal layer",
    "level": 10,
    "color": "#66A83D",
    "title": "CA3sp (Level 10)"
  },
  {
    "id": 504,
    "label": "Field CA3, stratum radiatum",
    "level": 10,
    "color": "#7ED04B",
    "title": "CA3sr (Level 10)"
  },
  {
    "id": 726,
    "label": "Dentate gyrus",
    "level": 7,
    "color": "#7ED04B",
    "title": "DG (Level 7)"
  },
  {
    "id": 10703,
    "label": "Dentate gyrus, molecular layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DG-mo (Level 10)"
  },
  {
    "id": 10704,
    "label": "Dentate gyrus, polymorph layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DG-po (Level 10)"
  },
  {
    "id": 632,
    "label": "Dentate gyrus, granule cell layer",
    "level": 10,
    "color": "#66A83D",
    "title": "DG-sg (Level 10)"
  },
  {
    "id": 10702,
    "label": "Dentate gyrus, subgranular zone",
    "level": 10,
    "color": "#7ED04B",
    "title": "DG-sgz (Level 10)"
  },
  {
    "id": 734,
    "label": "Dentate gyrus crest",
    "level": 8,
    "color": "#7ED04B",
    "title": "DGcr (Level 8)"
  },
  {
    "id": 742,
    "label": "Dentate gyrus crest, molecular layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGcr-mo (Level 10)"
  },
  {
    "id": 751,
    "label": "Dentate gyrus crest, polymorph layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGcr-po (Level 10)"
  },
  {
    "id": 758,
    "label": "Dentate gyrus crest, granule cell layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGcr-sg (Level 10)"
  },
  {
    "id": 766,
    "label": "Dentate gyrus lateral blade",
    "level": 8,
    "color": "#7ED04B",
    "title": "DGlb (Level 8)"
  },
  {
    "id": 775,
    "label": "Dentate gyrus lateral blade, molecular layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGlb-mo (Level 10)"
  },
  {
    "id": 782,
    "label": "Dentate gyrus lateral blade, polymorph layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGlb-po (Level 10)"
  },
  {
    "id": 790,
    "label": "Dentate gyrus lateral blade, granule cell layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGlb-sg (Level 10)"
  },
  {
    "id": 799,
    "label": "Dentate gyrus medial blade",
    "level": 8,
    "color": "#7ED04B",
    "title": "DGmb (Level 8)"
  },
  {
    "id": 807,
    "label": "Dentate gyrus medial blade, molecular layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGmb-mo (Level 10)"
  },
  {
    "id": 815,
    "label": "Dentate gyrus medial blade, polymorph layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGmb-po (Level 10)"
  },
  {
    "id": 823,
    "label": "Dentate gyrus medial blade, granule cell layer",
    "level": 10,
    "color": "#7ED04B",
    "title": "DGmb-sg (Level 10)"
  },
  {
    "id": 982,
    "label": "Fasciola cinerea",
    "level": 7,
    "color": "#7ED04B",
    "title": "FC (Level 7)"
  },
  {
    "id": 19,
    "label": "Induseum griseum",
    "level": 7,
    "color": "#7ED04B",
    "title": "IG (Level 7)"
  },
  {
    "id": 822,
    "label": "Retrohippocampal region",
    "level": 5,
    "color": "#32B825",
    "title": "RHP (Level 5)"
  },
  {
    "id": 909,
    "label": "Entorhinal area",
    "level": 7,
    "color": "#32B825",
    "title": "ENT (Level 7)"
  },
  {
    "id": 918,
    "label": "Entorhinal area, lateral part",
    "level": 8,
    "color": "#32B825",
    "title": "ENTl (Level 8)"
  },
  {
    "id": 1121,
    "label": "Entorhinal area, lateral part, layer 1",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl1 (Level 10)"
  },
  {
    "id": 20,
    "label": "Entorhinal area, lateral part, layer 2",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl2 (Level 10)"
  },
  {
    "id": 999,
    "label": "Entorhinal area, lateral part, layer 2/3",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl2/3 (Level 10)"
  },
  {
    "id": 715,
    "label": "Entorhinal area, lateral part, layer 2a",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl2a (Level 10)"
  },
  {
    "id": 764,
    "label": "Entorhinal area, lateral part, layer 2b",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl2b (Level 10)"
  },
  {
    "id": 52,
    "label": "Entorhinal area, lateral part, layer 3",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl3 (Level 10)"
  },
  {
    "id": 92,
    "label": "Entorhinal area, lateral part, layer 4",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl4 (Level 10)"
  },
  {
    "id": 312,
    "label": "Entorhinal area, lateral part, layer 4/5",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl4/5 (Level 10)"
  },
  {
    "id": 139,
    "label": "Entorhinal area, lateral part, layer 5",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl5 (Level 10)"
  },
  {
    "id": 387,
    "label": "Entorhinal area, lateral part, layer 5/6",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl5/6 (Level 10)"
  },
  {
    "id": 28,
    "label": "Entorhinal area, lateral part, layer 6a",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl6a (Level 10)"
  },
  {
    "id": 60,
    "label": "Entorhinal area, lateral part, layer 6b",
    "level": 10,
    "color": "#32B825",
    "title": "ENTl6b (Level 10)"
  },
  {
    "id": 926,
    "label": "Entorhinal area, medial part, dorsal zone",
    "level": 8,
    "color": "#32B825",
    "title": "ENTm (Level 8)"
  },
  {
    "id": 526,
    "label": "Entorhinal area, medial part, dorsal zone, layer 1",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm1 (Level 10)"
  },
  {
    "id": 543,
    "label": "Entorhinal area, medial part, dorsal zone, layer 2",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm2 (Level 10)"
  },
  {
    "id": 468,
    "label": "Entorhinal area, medial part, dorsal zone, layer 2a",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm2a (Level 10)"
  },
  {
    "id": 508,
    "label": "Entorhinal area, medial part, dorsal zone, layer 2b",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm2b (Level 10)"
  },
  {
    "id": 664,
    "label": "Entorhinal area, medial part, dorsal zone, layer 3",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm3 (Level 10)"
  },
  {
    "id": 712,
    "label": "Entorhinal area, medial part, dorsal zone, layer 4",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm4 (Level 10)"
  },
  {
    "id": 727,
    "label": "Entorhinal area, medial part, dorsal zone, layer 5",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm5 (Level 10)"
  },
  {
    "id": 550,
    "label": "Entorhinal area, medial part, dorsal zone, layer 5/6",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm5/6 (Level 10)"
  },
  {
    "id": 743,
    "label": "Entorhinal area, medial part, dorsal zone, layer 6",
    "level": 10,
    "color": "#32B825",
    "title": "ENTm6 (Level 10)"
  },
  {
    "id": 934,
    "label": "Entorhinal area, medial part, ventral zone",
    "level": 8,
    "color": "#32B825",
    "title": "ENTmv (Level 8)"
  },
  {
    "id": 259,
    "label": "Entorhinal area, medial part, ventral zone, layer 1",
    "level": 10,
    "color": "#32B825",
    "title": "ENTmv1 (Level 10)"
  },
  {
    "id": 324,
    "label": "Entorhinal area, medial part, ventral zone, layer 2",
    "level": 10,
    "color": "#32B825",
    "title": "ENTmv2 (Level 10)"
  },
  {
    "id": 371,
    "label": "Entorhinal area, medial part, ventral zone, layer 3",
    "level": 10,
    "color": "#32B825",
    "title": "ENTmv3 (Level 10)"
  },
  {
    "id": 419,
    "label": "Entorhinal area, medial part, ventral zone, layer 4",
    "level": 10,
    "color": "#32B825",
    "title": "ENTmv4 (Level 10)"
  },
  {
    "id": 1133,
    "label": "Entorhinal area, medial part, ventral zone, layer 5/6",
    "level": 10,
    "color": "#32B825",
    "title": "ENTmv5/6 (Level 10)"
  },
  {
    "id": 843,
    "label": "Parasubiculum",
    "level": 7,
    "color": "#72D569",
    "title": "PAR (Level 7)"
  },
  {
    "id": 10693,
    "label": "Parasubiculum, layer 1",
    "level": 10,
    "color": "#72D569",
    "title": "PAR1 (Level 10)"
  },
  {
    "id": 10694,
    "label": "Parasubiculum, layer 2",
    "level": 10,
    "color": "#72D569",
    "title": "PAR2 (Level 10)"
  },
  {
    "id": 10695,
    "label": "Parasubiculum, layer 3",
    "level": 10,
    "color": "#72D569",
    "title": "PAR3 (Level 10)"
  },
  {
    "id": 1037,
    "label": "Postsubiculum",
    "level": 7,
    "color": "#48C83C",
    "title": "POST (Level 7)"
  },
  {
    "id": 10696,
    "label": "Postsubiculum, layer 1",
    "level": 10,
    "color": "#48C83C",
    "title": "POST1 (Level 10)"
  },
  {
    "id": 10697,
    "label": "Postsubiculum, layer 2",
    "level": 10,
    "color": "#48C83C",
    "title": "POST2 (Level 10)"
  },
  {
    "id": 10698,
    "label": "Postsubiculum, layer 3",
    "level": 10,
    "color": "#48C83C",
    "title": "POST3 (Level 10)"
  },
  {
    "id": 1084,
    "label": "Presubiculum",
    "level": 7,
    "color": "#59B947",
    "title": "PRE (Level 7)"
  },
  {
    "id": 10699,
    "label": "Presubiculum, layer 1",
    "level": 10,
    "color": "#59B947",
    "title": "PRE1 (Level 10)"
  },
  {
    "id": 10700,
    "label": "Presubiculum, layer 2",
    "level": 10,
    "color": "#59B947",
    "title": "PRE2 (Level 10)"
  },
  {
    "id": 10701,
    "label": "Presubiculum, layer 3",
    "level": 10,
    "color": "#59B947",
    "title": "PRE3 (Level 10)"
  },
  {
    "id": 502,
    "label": "Subiculum",
    "level": 7,
    "color": "#4FC244",
    "title": "SUB (Level 7)"
  },
  {
    "id": 509,
    "label": "Subiculum, dorsal part",
    "level": 8,
    "color": "#4FC244",
    "title": "SUBd (Level 8)"
  },
  {
    "id": 829,
    "label": "Subiculum, dorsal part, molecular layer",
    "level": 10,
    "color": "#4FC244",
    "title": "SUBd-m (Level 10)"
  },
  {
    "id": 845,
    "label": "Subiculum, dorsal part, pyramidal layer",
    "level": 10,
    "color": "#4BB547",
    "title": "SUBd-sp (Level 10)"
  },
  {
    "id": 837,
    "label": "Subiculum, dorsal part, stratum radiatum",
    "level": 10,
    "color": "#4FC244",
    "title": "SUBd-sr (Level 10)"
  },
  {
    "id": 518,
    "label": "Subiculum, ventral part",
    "level": 8,
    "color": "#4FC244",
    "title": "SUBv (Level 8)"
  },
  {
    "id": 853,
    "label": "Subiculum, ventral part, molecular layer",
    "level": 10,
    "color": "#4FC244",
    "title": "SUBv-m (Level 10)"
  },
  {
    "id": 870,
    "label": "Subiculum, ventral part, pyramidal layer",
    "level": 10,
    "color": "#4BB547",
    "title": "SUBv-sp (Level 10)"
  },
  {
    "id": 861,
    "label": "Subiculum, ventral part, stratum radiatum",
    "level": 10,
    "color": "#4FC244",
    "title": "SUBv-sr (Level 10)"
  },
  {
    "id": 484682470,
    "label": "Prosubiculum",
    "level": 7,
    "color": "#58BA48",
    "title": "ProS (Level 7)"
  },
  {
    "id": 484682475,
    "label": "Prosubiculum, dorsal part",
    "level": 8,
    "color": "#58BA48",
    "title": "ProSd (Level 8)"
  },
  {
    "id": 484682479,
    "label": "Prosubiculum, dorsal part, molecular layer",
    "level": 10,
    "color": "#58BA48",
    "title": "ProSd-m (Level 10)"
  },
  {
    "id": 484682483,
    "label": "Prosubiculum, dorsal part, pyramidal layer",
    "level": 10,
    "color": "#56B84B",
    "title": "ProSd-sp (Level 10)"
  },
  {
    "id": 484682487,
    "label": "Prosubiculum, dorsal part, stratum radiatum",
    "level": 10,
    "color": "#58BA48",
    "title": "ProSd-sr (Level 10)"
  },
  {
    "id": 484682492,
    "label": "Prosubiculum, ventral part",
    "level": 8,
    "color": "#58BA48",
    "title": "ProSv (Level 8)"
  },
  {
    "id": 484682496,
    "label": "Prosubiculum, ventral part, molecular layer",
    "level": 10,
    "color": "#58BA48",
    "title": "ProSv-m (Level 10)"
  },
  {
    "id": 484682500,
    "label": "Prosubiculum, ventral part, pyramidal layer",
    "level": 10,
    "color": "#56B84B",
    "title": "ProSv-sp (Level 10)"
  },
  {
    "id": 484682504,
    "label": "Prosubiculum, ventral part, stratum radiatum",
    "level": 10,
    "color": "#58BA48",
    "title": "Prosv-sr (Level 10)"
  },
  {
    "id": 589508447,
    "label": "Hippocampo-amygdalar transition area",
    "level": 7,
    "color": "#33B932",
    "title": "HATA (Level 7)"
  },
  {
    "id": 484682508,
    "label": "Area prostriata",
    "level": 7,
    "color": "#33B932",
    "title": "APr (Level 7)"
  },
  {
    "id": 703,
    "label": "Cortical subplate",
    "level": 4,
    "color": "#8ADA87",
    "title": "CTXsp (Level 4)"
  },
  {
    "id": 16,
    "label": "Layer 6b, isocortex",
    "level": 10,
    "color": "#8ADA87",
    "title": "6b (Level 10)"
  },
  {
    "id": 583,
    "label": "Claustrum",
    "level": 7,
    "color": "#8ADA87",
    "title": "CLA (Level 7)"
  },
  {
    "id": 942,
    "label": "Endopiriform nucleus",
    "level": 7,
    "color": "#A0EE9D",
    "title": "EP (Level 7)"
  },
  {
    "id": 952,
    "label": "Endopiriform nucleus, dorsal part",
    "level": 8,
    "color": "#A0EE9D",
    "title": "EPd (Level 8)"
  },
  {
    "id": 966,
    "label": "Endopiriform nucleus, ventral part",
    "level": 8,
    "color": "#A0EE9D",
    "title": "EPv (Level 8)"
  },
  {
    "id": 131,
    "label": "Lateral amygdalar nucleus",
    "level": 7,
    "color": "#90EB8D",
    "title": "LA (Level 7)"
  },
  {
    "id": 295,
    "label": "Basolateral amygdalar nucleus",
    "level": 7,
    "color": "#9DE79C",
    "title": "BLA (Level 7)"
  },
  {
    "id": 303,
    "label": "Basolateral amygdalar nucleus, anterior part",
    "level": 8,
    "color": "#9DE79C",
    "title": "BLAa (Level 8)"
  },
  {
    "id": 311,
    "label": "Basolateral amygdalar nucleus, posterior part",
    "level": 8,
    "color": "#9DE79C",
    "title": "BLAp (Level 8)"
  },
  {
    "id": 451,
    "label": "Basolateral amygdalar nucleus, ventral part",
    "level": 8,
    "color": "#9DE79C",
    "title": "BLAv (Level 8)"
  },
  {
    "id": 319,
    "label": "Basomedial amygdalar nucleus",
    "level": 7,
    "color": "#84EA81",
    "title": "BMA (Level 7)"
  },
  {
    "id": 327,
    "label": "Basomedial amygdalar nucleus, anterior part",
    "level": 8,
    "color": "#84EA81",
    "title": "BMAa (Level 8)"
  },
  {
    "id": 334,
    "label": "Basomedial amygdalar nucleus, posterior part",
    "level": 8,
    "color": "#84EA81",
    "title": "BMAp (Level 8)"
  },
  {
    "id": 780,
    "label": "Posterior amygdalar nucleus",
    "level": 7,
    "color": "#97EC93",
    "title": "PA (Level 7)"
  },
  {
    "id": 623,
    "label": "Cerebral nuclei",
    "level": 2,
    "color": "#98D6F9",
    "title": "CNU (Level 2)"
  },
  {
    "id": 477,
    "label": "Striatum",
    "level": 4,
    "color": "#98D6F9",
    "title": "STR (Level 4)"
  },
  {
    "id": 485,
    "label": "Striatum dorsal region",
    "level": 5,
    "color": "#98D6F9",
    "title": "STRd (Level 5)"
  },
  {
    "id": 672,
    "label": "Caudoputamen",
    "level": 7,
    "color": "#98D6F9",
    "title": "CP (Level 7)"
  },
  {
    "id": 493,
    "label": "Striatum ventral region",
    "level": 5,
    "color": "#80CDF8",
    "title": "STRv (Level 5)"
  },
  {
    "id": 56,
    "label": "Nucleus accumbens",
    "level": 7,
    "color": "#80CDF8",
    "title": "ACB (Level 7)"
  },
  {
    "id": 998,
    "label": "Fundus of striatum",
    "level": 7,
    "color": "#80CDF8",
    "title": "FS (Level 7)"
  },
  {
    "id": 754,
    "label": "Olfactory tubercle",
    "level": 7,
    "color": "#80CDF8",
    "title": "OT (Level 7)"
  },
  {
    "id": 481,
    "label": "Islands of Calleja",
    "level": 8,
    "color": "#80CDF8",
    "title": "isl (Level 8)"
  },
  {
    "id": 489,
    "label": "Major island of Calleja",
    "level": 8,
    "color": "#80CDF8",
    "title": "islm (Level 8)"
  },
  {
    "id": 144,
    "label": "Olfactory tubercle, layers 1-3",
    "level": 10,
    "color": "#80CDF8",
    "title": "OT1-3 (Level 10)"
  },
  {
    "id": 458,
    "label": "Olfactory tubercle, molecular layer",
    "level": 10,
    "color": "#80CDF8",
    "title": "OT1 (Level 10)"
  },
  {
    "id": 465,
    "label": "Olfactory tubercle, pyramidal layer",
    "level": 10,
    "color": "#80CDF8",
    "title": "OT2 (Level 10)"
  },
  {
    "id": 473,
    "label": "Olfactory tubercle, polymorph layer",
    "level": 10,
    "color": "#80CDF8",
    "title": "OT3 (Level 10)"
  },
  {
    "id": 549009199,
    "label": "Lateral strip of striatum",
    "level": 7,
    "color": "#80CDF8",
    "title": "LSS (Level 7)"
  },
  {
    "id": 275,
    "label": "Lateral septal complex",
    "level": 5,
    "color": "#90CBED",
    "title": "LSX (Level 5)"
  },
  {
    "id": 242,
    "label": "Lateral septal nucleus",
    "level": 7,
    "color": "#90CBED",
    "title": "LS (Level 7)"
  },
  {
    "id": 250,
    "label": "Lateral septal nucleus, caudal (caudodorsal) part",
    "level": 8,
    "color": "#90CBED",
    "title": "LSc (Level 8)"
  },
  {
    "id": 258,
    "label": "Lateral septal nucleus, rostral (rostroventral) part",
    "level": 8,
    "color": "#90CBED",
    "title": "LSr (Level 8)"
  },
  {
    "id": 266,
    "label": "Lateral septal nucleus, ventral part",
    "level": 8,
    "color": "#90CBED",
    "title": "LSv (Level 8)"
  },
  {
    "id": 310,
    "label": "Septofimbrial nucleus",
    "level": 7,
    "color": "#90CBED",
    "title": "SF (Level 7)"
  },
  {
    "id": 333,
    "label": "Septohippocampal nucleus",
    "level": 7,
    "color": "#90CBED",
    "title": "SH (Level 7)"
  },
  {
    "id": 278,
    "label": "Striatum-like amygdalar nuclei",
    "level": 5,
    "color": "#80C0E2",
    "title": "sAMY (Level 5)"
  },
  {
    "id": 23,
    "label": "Anterior amygdalar area",
    "level": 7,
    "color": "#80C0E2",
    "title": "AAA (Level 7)"
  },
  {
    "id": 292,
    "label": "Bed nucleus of the accessory olfactory tract",
    "level": 7,
    "color": "#80C0E2",
    "title": "BA (Level 7)"
  },
  {
    "id": 536,
    "label": "Central amygdalar nucleus",
    "level": 7,
    "color": "#80C0E2",
    "title": "CEA (Level 7)"
  },
  {
    "id": 544,
    "label": "Central amygdalar nucleus, capsular part",
    "level": 8,
    "color": "#80C0E2",
    "title": "CEAc (Level 8)"
  },
  {
    "id": 551,
    "label": "Central amygdalar nucleus, lateral part",
    "level": 8,
    "color": "#80C0E2",
    "title": "CEAl (Level 8)"
  },
  {
    "id": 559,
    "label": "Central amygdalar nucleus, medial part",
    "level": 8,
    "color": "#80C0E2",
    "title": "CEAm (Level 8)"
  },
  {
    "id": 1105,
    "label": "Intercalated amygdalar nucleus",
    "level": 7,
    "color": "#80C0E2",
    "title": "IA (Level 7)"
  },
  {
    "id": 403,
    "label": "Medial amygdalar nucleus",
    "level": 7,
    "color": "#80C0E2",
    "title": "MEA (Level 7)"
  },
  {
    "id": 411,
    "label": "Medial amygdalar nucleus, anterodorsal part",
    "level": 8,
    "color": "#80C0E2",
    "title": "MEAad (Level 8)"
  },
  {
    "id": 418,
    "label": "Medial amygdalar nucleus, anteroventral part",
    "level": 8,
    "color": "#80C0E2",
    "title": "MEAav (Level 8)"
  },
  {
    "id": 426,
    "label": "Medial amygdalar nucleus, posterodorsal part",
    "level": 8,
    "color": "#80C0E2",
    "title": "MEApd (Level 8)"
  },
  {
    "id": 472,
    "label": "Medial amygdalar nucleus, posterodorsal part, sublayer a",
    "level": 10,
    "color": "#80C0E2",
    "title": "MEApd-a (Level 10)"
  },
  {
    "id": 480,
    "label": "Medial amygdalar nucleus, posterodorsal part, sublayer b",
    "level": 10,
    "color": "#80C0E2",
    "title": "MEApd-b (Level 10)"
  },
  {
    "id": 487,
    "label": "Medial amygdalar nucleus, posterodorsal part, sublayer c",
    "level": 10,
    "color": "#80C0E2",
    "title": "MEApd-c (Level 10)"
  },
  {
    "id": 435,
    "label": "Medial amygdalar nucleus, posteroventral part",
    "level": 8,
    "color": "#80C0E2",
    "title": "MEApv (Level 8)"
  },
  {
    "id": 803,
    "label": "Pallidum",
    "level": 4,
    "color": "#8599CC",
    "title": "PAL (Level 4)"
  },
  {
    "id": 818,
    "label": "Pallidum, dorsal region",
    "level": 5,
    "color": "#8599CC",
    "title": "PALd (Level 5)"
  },
  {
    "id": 1022,
    "label": "Globus pallidus, external segment",
    "level": 7,
    "color": "#8599CC",
    "title": "GPe (Level 7)"
  },
  {
    "id": 1031,
    "label": "Globus pallidus, internal segment",
    "level": 7,
    "color": "#8599CC",
    "title": "GPi (Level 7)"
  },
  {
    "id": 835,
    "label": "Pallidum, ventral region",
    "level": 5,
    "color": "#A2B1D8",
    "title": "PALv (Level 5)"
  },
  {
    "id": 342,
    "label": "Substantia innominata",
    "level": 7,
    "color": "#A2B1D8",
    "title": "SI (Level 7)"
  },
  {
    "id": 298,
    "label": "Magnocellular nucleus",
    "level": 7,
    "color": "#A2B1D8",
    "title": "MA (Level 7)"
  },
  {
    "id": 826,
    "label": "Pallidum, medial region",
    "level": 5,
    "color": "#96A7D3",
    "title": "PALm (Level 5)"
  },
  {
    "id": 904,
    "label": "Medial septal complex",
    "level": 7,
    "color": "#96A7D3",
    "title": "MSC (Level 7)"
  },
  {
    "id": 564,
    "label": "Medial septal nucleus",
    "level": 8,
    "color": "#96A7D3",
    "title": "MS (Level 8)"
  },
  {
    "id": 596,
    "label": "Diagonal band nucleus",
    "level": 8,
    "color": "#96A7D3",
    "title": "NDB (Level 8)"
  },
  {
    "id": 581,
    "label": "Triangular nucleus of septum",
    "level": 7,
    "color": "#96A7D3",
    "title": "TRS (Level 7)"
  },
  {
    "id": 809,
    "label": "Pallidum, caudal region",
    "level": 5,
    "color": "#B3C0DF",
    "title": "PALc (Level 5)"
  },
  {
    "id": 351,
    "label": "Bed nuclei of the stria terminalis",
    "level": 7,
    "color": "#B3C0DF",
    "title": "BST (Level 7)"
  },
  {
    "id": 359,
    "label": "Bed nuclei of the stria terminalis, anterior division",
    "level": 8,
    "color": "#B3C0DF",
    "title": "BSTa (Level 8)"
  },
  {
    "id": 537,
    "label": "Bed nuclei of the stria terminalis, anterior division, anterolateral area",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTal (Level 9)"
  },
  {
    "id": 498,
    "label": "Bed nuclei of the stria terminalis, anterior division, anteromedial area",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTam (Level 9)"
  },
  {
    "id": 505,
    "label": "Bed nuclei of the stria terminalis, anterior division, dorsomedial nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTdm (Level 9)"
  },
  {
    "id": 513,
    "label": "Bed nuclei of the stria terminalis, anterior division, fusiform nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTfu (Level 9)"
  },
  {
    "id": 546,
    "label": "Bed nuclei of the stria terminalis, anterior division, juxtacapsular nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTju (Level 9)"
  },
  {
    "id": 521,
    "label": "Bed nuclei of the stria terminalis, anterior division, magnocellular nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTmg (Level 9)"
  },
  {
    "id": 554,
    "label": "Bed nuclei of the stria terminalis, anterior division, oval nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTov (Level 9)"
  },
  {
    "id": 562,
    "label": "Bed nuclei of the stria terminalis, anterior division, rhomboid nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTrh (Level 9)"
  },
  {
    "id": 529,
    "label": "Bed nuclei of the stria terminalis, anterior division, ventral nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTv (Level 9)"
  },
  {
    "id": 367,
    "label": "Bed nuclei of the stria terminalis, posterior division",
    "level": 8,
    "color": "#B3C0DF",
    "title": "BSTp (Level 8)"
  },
  {
    "id": 569,
    "label": "Bed nuclei of the stria terminalis, posterior division, dorsal nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTd (Level 9)"
  },
  {
    "id": 578,
    "label": "Bed nuclei of the stria terminalis, posterior division, principal nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTpr (Level 9)"
  },
  {
    "id": 585,
    "label": "Bed nuclei of the stria terminalis, posterior division, interfascicular nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTif (Level 9)"
  },
  {
    "id": 594,
    "label": "Bed nuclei of the stria terminalis, posterior division, transverse nucleus",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTtr (Level 9)"
  },
  {
    "id": 602,
    "label": "Bed nuclei of the stria terminalis, posterior division, strial extension",
    "level": 9,
    "color": "#B3C0DF",
    "title": "BSTse (Level 9)"
  },
  {
    "id": 287,
    "label": "Bed nucleus of the anterior commissure",
    "level": 7,
    "color": "#B3C0DF",
    "title": "BAC (Level 7)"
  },
  {
    "id": 343,
    "label": "Brain stem",
    "level": 1,
    "color": "#FF7080",
    "title": "BS (Level 1)"
  },
  {
    "id": 1129,
    "label": "Interbrain",
    "level": 2,
    "color": "#FF7080",
    "title": "IB (Level 2)"
  },
  {
    "id": 549,
    "label": "Thalamus",
    "level": 4,
    "color": "#FF7080",
    "title": "TH (Level 4)"
  },
  {
    "id": 864,
    "label": "Thalamus, sensory-motor cortex related",
    "level": 5,
    "color": "#FF8084",
    "title": "DORsm (Level 5)"
  },
  {
    "id": 637,
    "label": "Ventral group of the dorsal thalamus",
    "level": 6,
    "color": "#FF8084",
    "title": "VENT (Level 6)"
  },
  {
    "id": 629,
    "label": "Ventral anterior-lateral complex of the thalamus",
    "level": 7,
    "color": "#FF8084",
    "title": "VAL (Level 7)"
  },
  {
    "id": 685,
    "label": "Ventral medial nucleus of the thalamus",
    "level": 7,
    "color": "#FF8084",
    "title": "VM (Level 7)"
  },
  {
    "id": 709,
    "label": "Ventral posterior complex of the thalamus",
    "level": 7,
    "color": "#FF8084",
    "title": "VP (Level 7)"
  },
  {
    "id": 718,
    "label": "Ventral posterolateral nucleus of the thalamus",
    "level": 8,
    "color": "#FF8084",
    "title": "VPL (Level 8)"
  },
  {
    "id": 725,
    "label": "Ventral posterolateral nucleus of the thalamus, parvicellular part",
    "level": 8,
    "color": "#FF8084",
    "title": "VPLpc (Level 8)"
  },
  {
    "id": 733,
    "label": "Ventral posteromedial nucleus of the thalamus",
    "level": 8,
    "color": "#FF8084",
    "title": "VPM (Level 8)"
  },
  {
    "id": 741,
    "label": "Ventral posteromedial nucleus of the thalamus, parvicellular part",
    "level": 8,
    "color": "#FF8084",
    "title": "VPMpc (Level 8)"
  },
  {
    "id": 563807435,
    "label": "Posterior triangular thalamic nucleus",
    "level": 7,
    "color": "#FF8084",
    "title": "PoT (Level 7)"
  },
  {
    "id": 406,
    "label": "Subparafascicular nucleus",
    "level": 7,
    "color": "#FF8084",
    "title": "SPF (Level 7)"
  },
  {
    "id": 414,
    "label": "Subparafascicular nucleus, magnocellular part",
    "level": 8,
    "color": "#FF8084",
    "title": "SPFm (Level 8)"
  },
  {
    "id": 422,
    "label": "Subparafascicular nucleus, parvicellular part",
    "level": 8,
    "color": "#FF8084",
    "title": "SPFp (Level 8)"
  },
  {
    "id": 609,
    "label": "Subparafascicular area",
    "level": 7,
    "color": "#FF8084",
    "title": "SPA (Level 7)"
  },
  {
    "id": 1044,
    "label": "Peripeduncular nucleus",
    "level": 7,
    "color": "#FF8084",
    "title": "PP (Level 7)"
  },
  {
    "id": 1008,
    "label": "Geniculate group, dorsal thalamus",
    "level": 6,
    "color": "#FF8084",
    "title": "GENd (Level 6)"
  },
  {
    "id": 475,
    "label": "Medial geniculate complex",
    "level": 7,
    "color": "#FF8084",
    "title": "MG (Level 7)"
  },
  {
    "id": 1072,
    "label": "Medial geniculate complex, dorsal part",
    "level": 8,
    "color": "#FF8084",
    "title": "MGd (Level 8)"
  },
  {
    "id": 1079,
    "label": "Medial geniculate complex, ventral part",
    "level": 8,
    "color": "#FF8084",
    "title": "MGv (Level 8)"
  },
  {
    "id": 1088,
    "label": "Medial geniculate complex, medial part",
    "level": 8,
    "color": "#FF8084",
    "title": "MGm (Level 8)"
  },
  {
    "id": 170,
    "label": "Dorsal part of the lateral geniculate complex",
    "level": 7,
    "color": "#FF8084",
    "title": "LGd (Level 7)"
  },
  {
    "id": 496345664,
    "label": "Dorsal part of the lateral geniculate complex, shell",
    "level": 8,
    "color": "#FF8084",
    "title": "LGd-sh (Level 8)"
  },
  {
    "id": 496345668,
    "label": "Dorsal part of the lateral geniculate complex, core",
    "level": 8,
    "color": "#FF8084",
    "title": "LGd-co (Level 8)"
  },
  {
    "id": 496345672,
    "label": "Dorsal part of the lateral geniculate complex, ipsilateral zone",
    "level": 8,
    "color": "#FF8084",
    "title": "LGd-ip (Level 8)"
  },
  {
    "id": 856,
    "label": "Thalamus, polymodal association cortex related",
    "level": 5,
    "color": "#FF909F",
    "title": "DORpm (Level 5)"
  },
  {
    "id": 138,
    "label": "Lateral group of the dorsal thalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "LAT (Level 6)"
  },
  {
    "id": 218,
    "label": "Lateral posterior nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "LP (Level 7)"
  },
  {
    "id": 1020,
    "label": "Posterior complex of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "PO (Level 7)"
  },
  {
    "id": 1029,
    "label": "Posterior limiting nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "POL (Level 7)"
  },
  {
    "id": 325,
    "label": "Suprageniculate nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "SGN (Level 7)"
  },
  {
    "id": 560581551,
    "label": "Ethmoid nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "Eth (Level 7)"
  },
  {
    "id": 560581555,
    "label": "Retroethmoid nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "REth (Level 7)"
  },
  {
    "id": 239,
    "label": "Anterior group of the dorsal thalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "ATN (Level 6)"
  },
  {
    "id": 255,
    "label": "Anteroventral nucleus of thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "AV (Level 7)"
  },
  {
    "id": 127,
    "label": "Anteromedial nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "AM (Level 7)"
  },
  {
    "id": 1096,
    "label": "Anteromedial nucleus, dorsal part",
    "level": 8,
    "color": "#FF909F",
    "title": "AMd (Level 8)"
  },
  {
    "id": 1104,
    "label": "Anteromedial nucleus, ventral part",
    "level": 8,
    "color": "#FF909F",
    "title": "AMv (Level 8)"
  },
  {
    "id": 64,
    "label": "Anterodorsal nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "AD (Level 7)"
  },
  {
    "id": 1120,
    "label": "Interanteromedial nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "IAM (Level 7)"
  },
  {
    "id": 1113,
    "label": "Interanterodorsal nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "IAD (Level 7)"
  },
  {
    "id": 155,
    "label": "Lateral dorsal nucleus of thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "LD (Level 7)"
  },
  {
    "id": 444,
    "label": "Medial group of the dorsal thalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "MED (Level 6)"
  },
  {
    "id": 59,
    "label": "Intermediodorsal nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "IMD (Level 7)"
  },
  {
    "id": 362,
    "label": "Mediodorsal nucleus of thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "MD (Level 7)"
  },
  {
    "id": 617,
    "label": "Mediodorsal nucleus of the thalamus, central part",
    "level": 8,
    "color": "#FF909F",
    "title": "MDc (Level 8)"
  },
  {
    "id": 626,
    "label": "Mediodorsal nucleus of the thalamus, lateral part",
    "level": 8,
    "color": "#FF909F",
    "title": "MDl (Level 8)"
  },
  {
    "id": 636,
    "label": "Mediodorsal nucleus of the thalamus, medial part",
    "level": 8,
    "color": "#FF909F",
    "title": "MDm (Level 8)"
  },
  {
    "id": 366,
    "label": "Submedial nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "SMT (Level 7)"
  },
  {
    "id": 1077,
    "label": "Perireunensis nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "PR (Level 7)"
  },
  {
    "id": 571,
    "label": "Midline group of the dorsal thalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "MTN (Level 6)"
  },
  {
    "id": 149,
    "label": "Paraventricular nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "PVT (Level 7)"
  },
  {
    "id": 15,
    "label": "Parataenial nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "PT (Level 7)"
  },
  {
    "id": 181,
    "label": "Nucleus of reuniens",
    "level": 7,
    "color": "#FF909F",
    "title": "RE (Level 7)"
  },
  {
    "id": 560581559,
    "label": "Xiphoid thalamic nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "Xi (Level 7)"
  },
  {
    "id": 51,
    "label": "Intralaminar nuclei of the dorsal thalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "ILM (Level 6)"
  },
  {
    "id": 189,
    "label": "Rhomboid nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "RH (Level 7)"
  },
  {
    "id": 599,
    "label": "Central medial nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "CM (Level 7)"
  },
  {
    "id": 907,
    "label": "Paracentral nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "PCN (Level 7)"
  },
  {
    "id": 575,
    "label": "Central lateral nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "CL (Level 7)"
  },
  {
    "id": 930,
    "label": "Parafascicular nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "PF (Level 7)"
  },
  {
    "id": 560581563,
    "label": "Posterior intralaminar thalamic nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "PIL (Level 7)"
  },
  {
    "id": 262,
    "label": "Reticular nucleus of the thalamus",
    "level": 7,
    "color": "#FF909F",
    "title": "RT (Level 7)"
  },
  {
    "id": 1014,
    "label": "Geniculate group, ventral thalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "GENv (Level 6)"
  },
  {
    "id": 27,
    "label": "Intergeniculate leaflet of the lateral geniculate complex",
    "level": 7,
    "color": "#FF909F",
    "title": "IGL (Level 7)"
  },
  {
    "id": 563807439,
    "label": "Intermediate geniculate nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "IntG (Level 7)"
  },
  {
    "id": 178,
    "label": "Ventral part of the lateral geniculate complex",
    "level": 7,
    "color": "#FF909F",
    "title": "LGv (Level 7)"
  },
  {
    "id": 300,
    "label": "Ventral part of the lateral geniculate complex, lateral zone",
    "level": 8,
    "color": "#FF909F",
    "title": "LGvl (Level 8)"
  },
  {
    "id": 316,
    "label": "Ventral part of the lateral geniculate complex, medial zone",
    "level": 8,
    "color": "#FF909F",
    "title": "LGvm (Level 8)"
  },
  {
    "id": 321,
    "label": "Subgeniculate nucleus",
    "level": 7,
    "color": "#FF909F",
    "title": "SubG (Level 7)"
  },
  {
    "id": 958,
    "label": "Epithalamus",
    "level": 6,
    "color": "#FF909F",
    "title": "EPI (Level 6)"
  },
  {
    "id": 483,
    "label": "Medial habenula",
    "level": 7,
    "color": "#FF909F",
    "title": "MH (Level 7)"
  },
  {
    "id": 186,
    "label": "Lateral habenula",
    "level": 7,
    "color": "#FF909F",
    "title": "LH (Level 7)"
  },
  {
    "id": 953,
    "label": "Pineal body",
    "level": 7,
    "color": "#FF909F",
    "title": "PIN (Level 7)"
  },
  {
    "id": 1097,
    "label": "Hypothalamus",
    "level": 4,
    "color": "#E64438",
    "title": "HY (Level 4)"
  },
  {
    "id": 157,
    "label": "Periventricular zone",
    "level": 5,
    "color": "#FF5D50",
    "title": "PVZ (Level 5)"
  },
  {
    "id": 390,
    "label": "Supraoptic nucleus",
    "level": 7,
    "color": "#FF5D50",
    "title": "SO (Level 7)"
  },
  {
    "id": 332,
    "label": "Accessory supraoptic group",
    "level": 6,
    "color": "#FF5D50",
    "title": "ASO (Level 6)"
  },
  {
    "id": 432,
    "label": "Nucleus circularis",
    "level": 7,
    "color": "#FF5D50",
    "title": "NC (Level 7)"
  },
  {
    "id": 38,
    "label": "Paraventricular hypothalamic nucleus",
    "level": 7,
    "color": "#FF5D50",
    "title": "PVH (Level 7)"
  },
  {
    "id": 71,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division",
    "level": 8,
    "color": "#FF5D50",
    "title": "PVHm (Level 8)"
  },
  {
    "id": 47,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, anterior magnocellular part",
    "level": 9,
    "color": "#FF5D50",
    "title": "PVHam (Level 9)"
  },
  {
    "id": 79,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, medial magnocellular part",
    "level": 9,
    "color": "#FF5D50",
    "title": "PVHmm (Level 9)"
  },
  {
    "id": 103,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part",
    "level": 9,
    "color": "#FF5D50",
    "title": "PVHpm (Level 9)"
  },
  {
    "id": 652,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part, lateral zone",
    "level": 10,
    "color": "#FF5D50",
    "title": "PVHpml (Level 10)"
  },
  {
    "id": 660,
    "label": "Paraventricular hypothalamic nucleus, magnocellular division, posterior magnocellular part, medial zone",
    "level": 10,
    "color": "#FF5D50",
    "title": "PVHpmm (Level 10)"
  },
  {
    "id": 94,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division",
    "level": 8,
    "color": "#FF5D50",
    "title": "PVHp (Level 8)"
  },
  {
    "id": 55,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division, anterior parvicellular part",
    "level": 9,
    "color": "#FF5D50",
    "title": "PVHap (Level 9)"
  },
  {
    "id": 87,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division, medial parvicellular part, dorsal zone",
    "level": 9,
    "color": "#FF5D50",
    "title": "PVHmpd (Level 9)"
  },
  {
    "id": 110,
    "label": "Paraventricular hypothalamic nucleus, parvicellular division, periventricular part",
    "level": 9,
    "color": "#FF5D50",
    "title": "PVHpv (Level 9)"
  },
  {
    "id": 30,
    "label": "Periventricular hypothalamic nucleus, anterior part",
    "level": 8,
    "color": "#FF5D50",
    "title": "PVa (Level 8)"
  },
  {
    "id": 118,
    "label": "Periventricular hypothalamic nucleus, intermediate part",
    "level": 8,
    "color": "#FF5D50",
    "title": "PVi (Level 8)"
  },
  {
    "id": 223,
    "label": "Arcuate hypothalamic nucleus",
    "level": 7,
    "color": "#FF5D50",
    "title": "ARH (Level 7)"
  },
  {
    "id": 141,
    "label": "Periventricular region",
    "level": 5,
    "color": "#FF5547",
    "title": "PVR (Level 5)"
  },
  {
    "id": 72,
    "label": "Anterodorsal preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "ADP (Level 7)"
  },
  {
    "id": 80,
    "label": "Anterior hypothalamic area",
    "level": 7,
    "color": "#FF5547",
    "title": "AHA (Level 7)"
  },
  {
    "id": 263,
    "label": "Anteroventral preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "AVP (Level 7)"
  },
  {
    "id": 272,
    "label": "Anteroventral periventricular nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "AVPV (Level 7)"
  },
  {
    "id": 830,
    "label": "Dorsomedial nucleus of the hypothalamus",
    "level": 7,
    "color": "#FF5547",
    "title": "DMH (Level 7)"
  },
  {
    "id": 668,
    "label": "Dorsomedial nucleus of the hypothalamus, anterior part",
    "level": 8,
    "color": "#FF5547",
    "title": "DMHa (Level 8)"
  },
  {
    "id": 676,
    "label": "Dorsomedial nucleus of the hypothalamus, posterior part",
    "level": 8,
    "color": "#FF5547",
    "title": "DMHp (Level 8)"
  },
  {
    "id": 684,
    "label": "Dorsomedial nucleus of the hypothalamus, ventral part",
    "level": 8,
    "color": "#FF5547",
    "title": "DMHv (Level 8)"
  },
  {
    "id": 452,
    "label": "Median preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "MEPO (Level 7)"
  },
  {
    "id": 523,
    "label": "Medial preoptic area",
    "level": 7,
    "color": "#FF5547",
    "title": "MPO (Level 7)"
  },
  {
    "id": 763,
    "label": "Vascular organ of the lamina terminalis",
    "level": 7,
    "color": "#FF5547",
    "title": "OV (Level 7)"
  },
  {
    "id": 914,
    "label": "Posterodorsal preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "PD (Level 7)"
  },
  {
    "id": 1109,
    "label": "Parastrial nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "PS (Level 7)"
  },
  {
    "id": 1124,
    "label": "Suprachiasmatic preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "PSCH (Level 7)"
  },
  {
    "id": 126,
    "label": "Periventricular hypothalamic nucleus, posterior part",
    "level": 7,
    "color": "#FF5547",
    "title": "PVp (Level 7)"
  },
  {
    "id": 133,
    "label": "Periventricular hypothalamic nucleus, preoptic part",
    "level": 7,
    "color": "#FF5547",
    "title": "PVpo (Level 7)"
  },
  {
    "id": 347,
    "label": "Subparaventricular zone",
    "level": 7,
    "color": "#FF5547",
    "title": "SBPV (Level 7)"
  },
  {
    "id": 286,
    "label": "Suprachiasmatic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "SCH (Level 7)"
  },
  {
    "id": 338,
    "label": "Subfornical organ",
    "level": 7,
    "color": "#FF5547",
    "title": "SFO (Level 7)"
  },
  {
    "id": 576073699,
    "label": "Ventromedial preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "VMPO (Level 7)"
  },
  {
    "id": 689,
    "label": "Ventrolateral preoptic nucleus",
    "level": 7,
    "color": "#FF5547",
    "title": "VLPO (Level 7)"
  },
  {
    "id": 467,
    "label": "Hypothalamic medial zone",
    "level": 5,
    "color": "#FF4C3E",
    "title": "MEZ (Level 5)"
  },
  {
    "id": 88,
    "label": "Anterior hypothalamic nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "AHN (Level 7)"
  },
  {
    "id": 700,
    "label": "Anterior hypothalamic nucleus, anterior part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "AHNa (Level 8)"
  },
  {
    "id": 708,
    "label": "Anterior hypothalamic nucleus, central part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "AHNc (Level 8)"
  },
  {
    "id": 716,
    "label": "Anterior hypothalamic nucleus, dorsal part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "AHNd (Level 8)"
  },
  {
    "id": 724,
    "label": "Anterior hypothalamic nucleus, posterior part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "AHNp (Level 8)"
  },
  {
    "id": 331,
    "label": "Mammillary body",
    "level": 6,
    "color": "#FF4C3E",
    "title": "MBO (Level 6)"
  },
  {
    "id": 210,
    "label": "Lateral mammillary nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "LM (Level 7)"
  },
  {
    "id": 491,
    "label": "Medial mammillary nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "MM (Level 7)"
  },
  {
    "id": 732,
    "label": "Medial mammillary nucleus, median part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MMme (Level 8)"
  },
  {
    "id": 606826647,
    "label": "Medial mammillary nucleus, lateral part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MMl (Level 8)"
  },
  {
    "id": 606826651,
    "label": "Medial mammillary nucleus, medial part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MMm (Level 8)"
  },
  {
    "id": 606826655,
    "label": "Medial mammillary nucleus, posterior part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MMp (Level 8)"
  },
  {
    "id": 606826659,
    "label": "Medial mammillary nucleus, dorsal part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MMd (Level 8)"
  },
  {
    "id": 525,
    "label": "Supramammillary nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "SUM (Level 7)"
  },
  {
    "id": 1110,
    "label": "Supramammillary nucleus, lateral part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "SUMl (Level 8)"
  },
  {
    "id": 1118,
    "label": "Supramammillary nucleus, medial part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "SUMm (Level 8)"
  },
  {
    "id": 557,
    "label": "Tuberomammillary nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "TM (Level 7)"
  },
  {
    "id": 1126,
    "label": "Tuberomammillary nucleus, dorsal part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "TMd (Level 8)"
  },
  {
    "id": 1,
    "label": "Tuberomammillary nucleus, ventral part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "TMv (Level 8)"
  },
  {
    "id": 515,
    "label": "Medial preoptic nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "MPN (Level 7)"
  },
  {
    "id": 740,
    "label": "Medial preoptic nucleus, central part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MPNc (Level 8)"
  },
  {
    "id": 748,
    "label": "Medial preoptic nucleus, lateral part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MPNl (Level 8)"
  },
  {
    "id": 756,
    "label": "Medial preoptic nucleus, medial part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "MPNm (Level 8)"
  },
  {
    "id": 980,
    "label": "Dorsal premammillary nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "PMd (Level 7)"
  },
  {
    "id": 1004,
    "label": "Ventral premammillary nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "PMv (Level 7)"
  },
  {
    "id": 63,
    "label": "Paraventricular hypothalamic nucleus, descending division",
    "level": 7,
    "color": "#FF4C3E",
    "title": "PVHd (Level 7)"
  },
  {
    "id": 439,
    "label": "Paraventricular hypothalamic nucleus, descending division, dorsal parvicellular part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "PVHdp (Level 8)"
  },
  {
    "id": 447,
    "label": "Paraventricular hypothalamic nucleus, descending division, forniceal part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "PVHf (Level 8)"
  },
  {
    "id": 455,
    "label": "Paraventricular hypothalamic nucleus, descending division, lateral parvicellular part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "PVHlp (Level 8)"
  },
  {
    "id": 464,
    "label": "Paraventricular hypothalamic nucleus, descending division, medial parvicellular part, ventral zone",
    "level": 8,
    "color": "#FF4C3E",
    "title": "PVHmpv (Level 8)"
  },
  {
    "id": 693,
    "label": "Ventromedial hypothalamic nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "VMH (Level 7)"
  },
  {
    "id": 761,
    "label": "Ventromedial hypothalamic nucleus, anterior part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "VMHa (Level 8)"
  },
  {
    "id": 769,
    "label": "Ventromedial hypothalamic nucleus, central part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "VMHc (Level 8)"
  },
  {
    "id": 777,
    "label": "Ventromedial hypothalamic nucleus, dorsomedial part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "VMHdm (Level 8)"
  },
  {
    "id": 785,
    "label": "Ventromedial hypothalamic nucleus, ventrolateral part",
    "level": 8,
    "color": "#FF4C3E",
    "title": "VMHvl (Level 8)"
  },
  {
    "id": 946,
    "label": "Posterior hypothalamic nucleus",
    "level": 7,
    "color": "#FF4C3E",
    "title": "PH (Level 7)"
  },
  {
    "id": 290,
    "label": "Hypothalamic lateral zone",
    "level": 5,
    "color": "#F2483B",
    "title": "LZ (Level 5)"
  },
  {
    "id": 194,
    "label": "Lateral hypothalamic area",
    "level": 7,
    "color": "#F2483B",
    "title": "LHA (Level 7)"
  },
  {
    "id": 226,
    "label": "Lateral preoptic area",
    "level": 7,
    "color": "#F2483B",
    "title": "LPO (Level 7)"
  },
  {
    "id": 356,
    "label": "Preparasubthalamic nucleus",
    "level": 7,
    "color": "#F2483B",
    "title": "PST (Level 7)"
  },
  {
    "id": 364,
    "label": "Parasubthalamic nucleus",
    "level": 7,
    "color": "#F2483B",
    "title": "PSTN (Level 7)"
  },
  {
    "id": 576073704,
    "label": "Perifornical nucleus",
    "level": 7,
    "color": "#F2483B",
    "title": "PeF (Level 7)"
  },
  {
    "id": 173,
    "label": "Retrochiasmatic area",
    "level": 7,
    "color": "#F2483B",
    "title": "RCH (Level 7)"
  },
  {
    "id": 470,
    "label": "Subthalamic nucleus",
    "level": 7,
    "color": "#F2483B",
    "title": "STN (Level 7)"
  },
  {
    "id": 614,
    "label": "Tuberal nucleus",
    "level": 7,
    "color": "#F2483B",
    "title": "TU (Level 7)"
  },
  {
    "id": 797,
    "label": "Zona incerta",
    "level": 7,
    "color": "#F2483B",
    "title": "ZI (Level 7)"
  },
  {
    "id": 796,
    "label": "Dopaminergic A13 group",
    "level": 8,
    "color": "#F2483B",
    "title": "A13 (Level 8)"
  },
  {
    "id": 804,
    "label": "Fields of Forel",
    "level": 8,
    "color": "#F2483B",
    "title": "FF (Level 8)"
  },
  {
    "id": 10671,
    "label": "Median eminence",
    "level": 7,
    "color": "#F2483B",
    "title": "ME (Level 7)"
  },
  {
    "id": 313,
    "label": "Midbrain",
    "level": 4,
    "color": "#FF64FF",
    "title": "MB (Level 4)"
  },
  {
    "id": 339,
    "label": "Midbrain, sensory related",
    "level": 5,
    "color": "#FF7AFF",
    "title": "MBsen (Level 5)"
  },
  {
    "id": 302,
    "label": "Superior colliculus, sensory related",
    "level": 7,
    "color": "#FF7AFF",
    "title": "SCs (Level 7)"
  },
  {
    "id": 851,
    "label": "Superior colliculus, optic layer",
    "level": 8,
    "color": "#FF7AFF",
    "title": "SCop (Level 8)"
  },
  {
    "id": 842,
    "label": "Superior colliculus, superficial gray layer",
    "level": 8,
    "color": "#FF7AFF",
    "title": "SCsg (Level 8)"
  },
  {
    "id": 834,
    "label": "Superior colliculus, zonal layer",
    "level": 8,
    "color": "#FF7AFF",
    "title": "SCzo (Level 8)"
  },
  {
    "id": 4,
    "label": "Inferior colliculus",
    "level": 7,
    "color": "#FF7AFF",
    "title": "IC (Level 7)"
  },
  {
    "id": 811,
    "label": "Inferior colliculus, central nucleus",
    "level": 8,
    "color": "#FF7AFF",
    "title": "ICc (Level 8)"
  },
  {
    "id": 820,
    "label": "Inferior colliculus, dorsal nucleus",
    "level": 8,
    "color": "#FF7AFF",
    "title": "ICd (Level 8)"
  },
  {
    "id": 828,
    "label": "Inferior colliculus, external nucleus",
    "level": 8,
    "color": "#FF7AFF",
    "title": "ICe (Level 8)"
  },
  {
    "id": 580,
    "label": "Nucleus of the brachium of the inferior colliculus",
    "level": 7,
    "color": "#FF7AFF",
    "title": "NB (Level 7)"
  },
  {
    "id": 271,
    "label": "Nucleus sagulum",
    "level": 7,
    "color": "#FF7AFF",
    "title": "SAG (Level 7)"
  },
  {
    "id": 874,
    "label": "Parabigeminal nucleus",
    "level": 7,
    "color": "#FF7AFF",
    "title": "PBG (Level 7)"
  },
  {
    "id": 460,
    "label": "Midbrain trigeminal nucleus",
    "level": 7,
    "color": "#FF7AFF",
    "title": "MEV (Level 7)"
  },
  {
    "id": 599626923,
    "label": "Subcommissural organ",
    "level": 7,
    "color": "#FF7AFF",
    "title": "SCO (Level 7)"
  },
  {
    "id": 323,
    "label": "Midbrain, motor related",
    "level": 5,
    "color": "#FF90FF",
    "title": "MBmot (Level 5)"
  },
  {
    "id": 381,
    "label": "Substantia nigra, reticular part",
    "level": 7,
    "color": "#FF90FF",
    "title": "SNr (Level 7)"
  },
  {
    "id": 749,
    "label": "Ventral tegmental area",
    "level": 7,
    "color": "#FF90FF",
    "title": "VTA (Level 7)"
  },
  {
    "id": 607344830,
    "label": "Paranigral nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "PN (Level 7)"
  },
  {
    "id": 246,
    "label": "Midbrain reticular nucleus, retrorubral area",
    "level": 7,
    "color": "#FF90FF",
    "title": "RR (Level 7)"
  },
  {
    "id": 128,
    "label": "Midbrain reticular nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "MRN (Level 7)"
  },
  {
    "id": 539,
    "label": "Midbrain reticular nucleus, magnocellular part",
    "level": 8,
    "color": "#FF90FF",
    "title": "MRNm (Level 8)"
  },
  {
    "id": 548,
    "label": "Midbrain reticular nucleus, magnocellular part, general",
    "level": 8,
    "color": "#FF90FF",
    "title": "MRNmg (Level 8)"
  },
  {
    "id": 555,
    "label": "Midbrain reticular nucleus, parvicellular part",
    "level": 8,
    "color": "#FF90FF",
    "title": "MRNp (Level 8)"
  },
  {
    "id": 294,
    "label": "Superior colliculus, motor related",
    "level": 7,
    "color": "#FF90FF",
    "title": "SCm (Level 7)"
  },
  {
    "id": 26,
    "label": "Superior colliculus, motor related, deep gray layer",
    "level": 8,
    "color": "#FF90FF",
    "title": "SCdg (Level 8)"
  },
  {
    "id": 42,
    "label": "Superior colliculus, motor related, deep white layer",
    "level": 8,
    "color": "#FF90FF",
    "title": "SCdw (Level 8)"
  },
  {
    "id": 17,
    "label": "Superior colliculus, motor related, intermediate white layer",
    "level": 8,
    "color": "#FF90FF",
    "title": "SCiw (Level 8)"
  },
  {
    "id": 10,
    "label": "Superior colliculus, motor related, intermediate gray layer",
    "level": 8,
    "color": "#FF90FF",
    "title": "SCig (Level 8)"
  },
  {
    "id": 494,
    "label": "Superior colliculus, motor related, intermediate gray layer, sublayer a",
    "level": 9,
    "color": "#FF90FF",
    "title": "SCig-a (Level 9)"
  },
  {
    "id": 503,
    "label": "Superior colliculus, motor related, intermediate gray layer, sublayer b",
    "level": 9,
    "color": "#FF90FF",
    "title": "SCig-b (Level 9)"
  },
  {
    "id": 511,
    "label": "Superior colliculus, motor related, intermediate gray layer, sublayer c",
    "level": 9,
    "color": "#FF90FF",
    "title": "SCig-c (Level 9)"
  },
  {
    "id": 795,
    "label": "Periaqueductal gray",
    "level": 7,
    "color": "#FF90FF",
    "title": "PAG (Level 7)"
  },
  {
    "id": 50,
    "label": "Precommissural nucleus",
    "level": 8,
    "color": "#FF90FF",
    "title": "PRC (Level 8)"
  },
  {
    "id": 67,
    "label": "Interstitial nucleus of Cajal",
    "level": 8,
    "color": "#FF90FF",
    "title": "INC (Level 8)"
  },
  {
    "id": 587,
    "label": "Nucleus of Darkschewitsch",
    "level": 8,
    "color": "#FF90FF",
    "title": "ND (Level 8)"
  },
  {
    "id": 614454277,
    "label": "Supraoculomotor periaqueductal gray",
    "level": 8,
    "color": "#FF90FF",
    "title": "Su3 (Level 8)"
  },
  {
    "id": 1100,
    "label": "Pretectal region",
    "level": 7,
    "color": "#FF90FF",
    "title": "PRT (Level 7)"
  },
  {
    "id": 215,
    "label": "Anterior pretectal nucleus",
    "level": 8,
    "color": "#FF90FF",
    "title": "APN (Level 8)"
  },
  {
    "id": 531,
    "label": "Medial pretectal area",
    "level": 8,
    "color": "#FF90FF",
    "title": "MPT (Level 8)"
  },
  {
    "id": 628,
    "label": "Nucleus of the optic tract",
    "level": 8,
    "color": "#FF90FF",
    "title": "NOT (Level 8)"
  },
  {
    "id": 634,
    "label": "Nucleus of the posterior commissure",
    "level": 8,
    "color": "#FF90FF",
    "title": "NPC (Level 8)"
  },
  {
    "id": 706,
    "label": "Olivary pretectal nucleus",
    "level": 8,
    "color": "#FF90FF",
    "title": "OP (Level 8)"
  },
  {
    "id": 1061,
    "label": "Posterior pretectal nucleus",
    "level": 8,
    "color": "#FF90FF",
    "title": "PPT (Level 8)"
  },
  {
    "id": 549009203,
    "label": "Retroparafascicular nucleus",
    "level": 8,
    "color": "#FF90FF",
    "title": "RPF (Level 8)"
  },
  {
    "id": 549009207,
    "label": "Intercollicular nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "InCo (Level 7)"
  },
  {
    "id": 616,
    "label": "Cuneiform nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "CUN (Level 7)"
  },
  {
    "id": 214,
    "label": "Red nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "RN (Level 7)"
  },
  {
    "id": 35,
    "label": "Oculomotor nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "III (Level 7)"
  },
  {
    "id": 549009211,
    "label": "Medial accesory oculomotor nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "MA3 (Level 7)"
  },
  {
    "id": 975,
    "label": "Edinger-Westphal nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "EW (Level 7)"
  },
  {
    "id": 115,
    "label": "Trochlear nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "IV (Level 7)"
  },
  {
    "id": 606826663,
    "label": "Paratrochlear nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "Pa4 (Level 7)"
  },
  {
    "id": 757,
    "label": "Ventral tegmental nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "VTN (Level 7)"
  },
  {
    "id": 231,
    "label": "Anterior tegmental nucleus",
    "level": 7,
    "color": "#FF90FF",
    "title": "AT (Level 7)"
  },
  {
    "id": 66,
    "label": "Lateral terminal nucleus of the accessory optic tract",
    "level": 7,
    "color": "#FF90FF",
    "title": "LT (Level 7)"
  },
  {
    "id": 75,
    "label": "Dorsal terminal nucleus of the accessory optic tract",
    "level": 7,
    "color": "#FF90FF",
    "title": "DT (Level 7)"
  },
  {
    "id": 58,
    "label": "Medial terminal nucleus of the accessory optic tract",
    "level": 7,
    "color": "#FF90FF",
    "title": "MT (Level 7)"
  },
  {
    "id": 615,
    "label": "Substantia nigra, lateral part",
    "level": 7,
    "color": "#FF90FF",
    "title": "SNl (Level 7)"
  },
  {
    "id": 348,
    "label": "Midbrain, behavioral state related",
    "level": 5,
    "color": "#FF90FF",
    "title": "MBsta (Level 5)"
  },
  {
    "id": 374,
    "label": "Substantia nigra, compact part",
    "level": 7,
    "color": "#FFA6FF",
    "title": "SNc (Level 7)"
  },
  {
    "id": 1052,
    "label": "Pedunculopontine nucleus",
    "level": 7,
    "color": "#FFA6FF",
    "title": "PPN (Level 7)"
  },
  {
    "id": 165,
    "label": "Midbrain raphe nuclei",
    "level": 6,
    "color": "#FFA6FF",
    "title": "RAmb (Level 6)"
  },
  {
    "id": 12,
    "label": "Interfascicular nucleus raphe",
    "level": 7,
    "color": "#FFA6FF",
    "title": "IF (Level 7)"
  },
  {
    "id": 100,
    "label": "Interpeduncular nucleus",
    "level": 7,
    "color": "#FFA6FF",
    "title": "IPN (Level 7)"
  },
  {
    "id": 607344834,
    "label": "Interpeduncular nucleus, rostral",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPR (Level 8)"
  },
  {
    "id": 607344838,
    "label": "Interpeduncular nucleus, caudal",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPC (Level 8)"
  },
  {
    "id": 607344842,
    "label": "Interpeduncular nucleus, apical",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPA (Level 8)"
  },
  {
    "id": 607344846,
    "label": "Interpeduncular nucleus, lateral",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPL (Level 8)"
  },
  {
    "id": 607344850,
    "label": "Interpeduncular nucleus, intermediate",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPI (Level 8)"
  },
  {
    "id": 607344854,
    "label": "Interpeduncular nucleus, dorsomedial",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPDM (Level 8)"
  },
  {
    "id": 607344858,
    "label": "Interpeduncular nucleus, dorsolateral",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPDL (Level 8)"
  },
  {
    "id": 607344862,
    "label": "Interpeduncular nucleus, rostrolateral",
    "level": 8,
    "color": "#FFA6FF",
    "title": "IPRL (Level 8)"
  },
  {
    "id": 197,
    "label": "Rostral linear nucleus raphe",
    "level": 7,
    "color": "#FFA6FF",
    "title": "RL (Level 7)"
  },
  {
    "id": 591,
    "label": "Central linear nucleus raphe",
    "level": 7,
    "color": "#FFA6FF",
    "title": "CLI (Level 7)"
  },
  {
    "id": 872,
    "label": "Dorsal nucleus raphe",
    "level": 7,
    "color": "#FFA6FF",
    "title": "DR (Level 7)"
  },
  {
    "id": 1065,
    "label": "Hindbrain",
    "level": 2,
    "color": "#FF9B88",
    "title": "HB (Level 2)"
  },
  {
    "id": 771,
    "label": "Pons",
    "level": 4,
    "color": "#FF9B88",
    "title": "P (Level 4)"
  },
  {
    "id": 1132,
    "label": "Pons, sensory related",
    "level": 5,
    "color": "#FFAE6F",
    "title": "P-sen (Level 5)"
  },
  {
    "id": 612,
    "label": "Nucleus of the lateral lemniscus",
    "level": 7,
    "color": "#FFAE6F",
    "title": "NLL (Level 7)"
  },
  {
    "id": 82,
    "label": "Nucleus of the lateral lemniscus, dorsal part",
    "level": 8,
    "color": "#FFAE6F",
    "title": "NLLd (Level 8)"
  },
  {
    "id": 90,
    "label": "Nucleus of the lateral lemniscus, horizontal part",
    "level": 8,
    "color": "#FFAE6F",
    "title": "NLLh (Level 8)"
  },
  {
    "id": 99,
    "label": "Nucleus of the lateral lemniscus, ventral part",
    "level": 8,
    "color": "#FFAE6F",
    "title": "NLLv (Level 8)"
  },
  {
    "id": 7,
    "label": "Principal sensory nucleus of the trigeminal",
    "level": 7,
    "color": "#FFAE6F",
    "title": "PSV (Level 7)"
  },
  {
    "id": 867,
    "label": "Parabrachial nucleus",
    "level": 7,
    "color": "#FFAE6F",
    "title": "PB (Level 7)"
  },
  {
    "id": 123,
    "label": "Koelliker-Fuse subnucleus",
    "level": 8,
    "color": "#FFAE6F",
    "title": "KF (Level 8)"
  },
  {
    "id": 881,
    "label": "Parabrachial nucleus, lateral division",
    "level": 8,
    "color": "#FFAE6F",
    "title": "PBl (Level 8)"
  },
  {
    "id": 860,
    "label": "Parabrachial nucleus, lateral division, central lateral part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBlc (Level 9)"
  },
  {
    "id": 868,
    "label": "Parabrachial nucleus, lateral division, dorsal lateral part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBld (Level 9)"
  },
  {
    "id": 875,
    "label": "Parabrachial nucleus, lateral division, external lateral part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBle (Level 9)"
  },
  {
    "id": 883,
    "label": "Parabrachial nucleus, lateral division, superior lateral part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBls (Level 9)"
  },
  {
    "id": 891,
    "label": "Parabrachial nucleus, lateral division, ventral lateral part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBlv (Level 9)"
  },
  {
    "id": 890,
    "label": "Parabrachial nucleus, medial division",
    "level": 8,
    "color": "#FFAE6F",
    "title": "PBm (Level 8)"
  },
  {
    "id": 899,
    "label": "Parabrachial nucleus, medial division, external medial part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBme (Level 9)"
  },
  {
    "id": 915,
    "label": "Parabrachial nucleus, medial division, medial medial part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBmm (Level 9)"
  },
  {
    "id": 923,
    "label": "Parabrachial nucleus, medial division, ventral medial part",
    "level": 9,
    "color": "#FFAE6F",
    "title": "PBmv (Level 9)"
  },
  {
    "id": 398,
    "label": "Superior olivary complex",
    "level": 7,
    "color": "#FFAE6F",
    "title": "SOC (Level 7)"
  },
  {
    "id": 122,
    "label": "Superior olivary complex, periolivary region",
    "level": 8,
    "color": "#FFAE6F",
    "title": "POR (Level 8)"
  },
  {
    "id": 105,
    "label": "Superior olivary complex, medial part",
    "level": 8,
    "color": "#FFAE6F",
    "title": "SOCm (Level 8)"
  },
  {
    "id": 114,
    "label": "Superior olivary complex, lateral part",
    "level": 8,
    "color": "#FFAE6F",
    "title": "SOCl (Level 8)"
  },
  {
    "id": 987,
    "label": "Pons, motor related",
    "level": 5,
    "color": "#FFBA86",
    "title": "P-mot (Level 5)"
  },
  {
    "id": 280,
    "label": "Barrington's nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "B (Level 7)"
  },
  {
    "id": 880,
    "label": "Dorsal tegmental nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "DTN (Level 7)"
  },
  {
    "id": 283,
    "label": "Lateral tegmental nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "LTN (Level 7)"
  },
  {
    "id": 599626927,
    "label": "Posterodorsal tegmental nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "PDTg (Level 7)"
  },
  {
    "id": 898,
    "label": "Pontine central gray",
    "level": 7,
    "color": "#FFBA86",
    "title": "PCG (Level 7)"
  },
  {
    "id": 931,
    "label": "Pontine gray",
    "level": 7,
    "color": "#FFBA86",
    "title": "PG (Level 7)"
  },
  {
    "id": 1093,
    "label": "Pontine reticular nucleus, caudal part",
    "level": 7,
    "color": "#FFBA86",
    "title": "PRNc (Level 7)"
  },
  {
    "id": 552,
    "label": "Pontine reticular nucleus, ventral part",
    "level": 7,
    "color": "#FFBA86",
    "title": "PRNv (Level 7)"
  },
  {
    "id": 318,
    "label": "Supragenual nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "SG (Level 7)"
  },
  {
    "id": 462,
    "label": "Superior salivatory nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "SSN (Level 7)"
  },
  {
    "id": 534,
    "label": "Supratrigeminal nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "SUT (Level 7)"
  },
  {
    "id": 574,
    "label": "Tegmental reticular nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "TRN (Level 7)"
  },
  {
    "id": 621,
    "label": "Motor nucleus of trigeminal",
    "level": 7,
    "color": "#FFBA86",
    "title": "V (Level 7)"
  },
  {
    "id": 549009215,
    "label": "Peritrigeminal zone",
    "level": 7,
    "color": "#FFBA86",
    "title": "P5 (Level 7)"
  },
  {
    "id": 549009219,
    "label": "Accessory trigeminal nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "Acs5 (Level 7)"
  },
  {
    "id": 549009223,
    "label": "Parvicellular motor 5 nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "PC5 (Level 7)"
  },
  {
    "id": 549009227,
    "label": "Intertrigeminal nucleus",
    "level": 7,
    "color": "#FFBA86",
    "title": "I5 (Level 7)"
  },
  {
    "id": 1117,
    "label": "Pons, behavioral state related",
    "level": 5,
    "color": "#FFC395",
    "title": "P-sat (Level 5)"
  },
  {
    "id": 679,
    "label": "Superior central nucleus raphe",
    "level": 7,
    "color": "#FFC395",
    "title": "CS (Level 7)"
  },
  {
    "id": 137,
    "label": "Superior central nucleus raphe, lateral part",
    "level": 8,
    "color": "#FFC395",
    "title": "CSl (Level 8)"
  },
  {
    "id": 130,
    "label": "Superior central nucleus raphe, medial part",
    "level": 8,
    "color": "#FFC395",
    "title": "CSm (Level 8)"
  },
  {
    "id": 147,
    "label": "Locus ceruleus",
    "level": 7,
    "color": "#FFC395",
    "title": "LC (Level 7)"
  },
  {
    "id": 162,
    "label": "Laterodorsal tegmental nucleus",
    "level": 7,
    "color": "#FFC395",
    "title": "LDT (Level 7)"
  },
  {
    "id": 604,
    "label": "Nucleus incertus",
    "level": 7,
    "color": "#FFC395",
    "title": "NI (Level 7)"
  },
  {
    "id": 146,
    "label": "Pontine reticular nucleus",
    "level": 7,
    "color": "#FFC395",
    "title": "PRNr (Level 7)"
  },
  {
    "id": 238,
    "label": "Nucleus raphe pontis",
    "level": 7,
    "color": "#FFC395",
    "title": "RPO (Level 7)"
  },
  {
    "id": 350,
    "label": "Subceruleus nucleus",
    "level": 7,
    "color": "#FFC395",
    "title": "SLC (Level 7)"
  },
  {
    "id": 358,
    "label": "Sublaterodorsal nucleus",
    "level": 7,
    "color": "#FFC395",
    "title": "SLD (Level 7)"
  },
  {
    "id": 354,
    "label": "Medulla",
    "level": 4,
    "color": "#FF9BCD",
    "title": "MY (Level 4)"
  },
  {
    "id": 386,
    "label": "Medulla, sensory related",
    "level": 5,
    "color": "#FFA5D2",
    "title": "MY-sen (Level 5)"
  },
  {
    "id": 207,
    "label": "Area postrema",
    "level": 7,
    "color": "#FFA5D2",
    "title": "AP (Level 7)"
  },
  {
    "id": 607,
    "label": "Cochlear nuclei",
    "level": 6,
    "color": "#FFA5D2",
    "title": "CN (Level 6)"
  },
  {
    "id": 112,
    "label": "Granular lamina of the cochlear nuclei",
    "level": 7,
    "color": "#FFA5D2",
    "title": "CNlam (Level 7)"
  },
  {
    "id": 560,
    "label": "Cochlear nucleus, subpedunclular granular region",
    "level": 7,
    "color": "#FFA5D2",
    "title": "CNspg (Level 7)"
  },
  {
    "id": 96,
    "label": "Dorsal cochlear nucleus",
    "level": 7,
    "color": "#FFA5D2",
    "title": "DCO (Level 7)"
  },
  {
    "id": 101,
    "label": "Ventral cochlear nucleus",
    "level": 7,
    "color": "#FFA5D2",
    "title": "VCO (Level 7)"
  },
  {
    "id": 720,
    "label": "Dorsal column nuclei",
    "level": 6,
    "color": "#FFA5D2",
    "title": "DCN (Level 6)"
  },
  {
    "id": 711,
    "label": "Cuneate nucleus",
    "level": 7,
    "color": "#FFA5D2",
    "title": "CU (Level 7)"
  },
  {
    "id": 1039,
    "label": "Gracile nucleus",
    "level": 7,
    "color": "#FFA5D2",
    "title": "GR (Level 7)"
  },
  {
    "id": 903,
    "label": "External cuneate nucleus",
    "level": 7,
    "color": "#FFA5D2",
    "title": "ECU (Level 7)"
  },
  {
    "id": 642,
    "label": "Nucleus of the trapezoid body",
    "level": 7,
    "color": "#FFA5D2",
    "title": "NTB (Level 7)"
  },
  {
    "id": 651,
    "label": "Nucleus of the solitary tract",
    "level": 7,
    "color": "#FFA5D2",
    "title": "NTS (Level 7)"
  },
  {
    "id": 659,
    "label": "Nucleus of the solitary tract, central part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "NTSce (Level 8)"
  },
  {
    "id": 666,
    "label": "Nucleus of the solitary tract, commissural part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "NTSco (Level 8)"
  },
  {
    "id": 674,
    "label": "Nucleus of the solitary tract, gelatinous part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "NTSge (Level 8)"
  },
  {
    "id": 682,
    "label": "Nucleus of the solitary tract, lateral part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "NTSl (Level 8)"
  },
  {
    "id": 691,
    "label": "Nucleus of the solitary tract, medial part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "NTSm (Level 8)"
  },
  {
    "id": 429,
    "label": "Spinal nucleus of the trigeminal, caudal part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "SPVC (Level 8)"
  },
  {
    "id": 437,
    "label": "Spinal nucleus of the trigeminal, interpolar part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "SPVI (Level 8)"
  },
  {
    "id": 445,
    "label": "Spinal nucleus of the trigeminal, oral part",
    "level": 8,
    "color": "#FFA5D2",
    "title": "SPVO (Level 8)"
  },
  {
    "id": 77,
    "label": "Spinal nucleus of the trigeminal, oral part, caudal dorsomedial part",
    "level": 9,
    "color": "#FFA5D2",
    "title": "SPVOcdm (Level 9)"
  },
  {
    "id": 53,
    "label": "Spinal nucleus of the trigeminal, oral part, middle dorsomedial part, dorsal zone",
    "level": 9,
    "color": "#FFA5D2",
    "title": "SPVOmdmd (Level 9)"
  },
  {
    "id": 61,
    "label": "Spinal nucleus of the trigeminal, oral part, middle dorsomedial part, ventral zone",
    "level": 9,
    "color": "#FFA5D2",
    "title": "SPVOmdmv (Level 9)"
  },
  {
    "id": 45,
    "label": "Spinal nucleus of the trigeminal, oral part, rostral dorsomedial part",
    "level": 9,
    "color": "#FFA5D2",
    "title": "SPVOrdm (Level 9)"
  },
  {
    "id": 69,
    "label": "Spinal nucleus of the trigeminal, oral part, ventrolateral part",
    "level": 9,
    "color": "#FFA5D2",
    "title": "SPVOvl (Level 9)"
  },
  {
    "id": 589508451,
    "label": "Paratrigeminal nucleus",
    "level": 7,
    "color": "#FFA5D2",
    "title": "Pa5 (Level 7)"
  },
  {
    "id": 789,
    "label": "Nucleus z",
    "level": 7,
    "color": "#FFA5D2",
    "title": "z (Level 7)"
  },
  {
    "id": 370,
    "label": "Medulla, motor related",
    "level": 5,
    "color": "#FFB3D9",
    "title": "MY-mot (Level 5)"
  },
  {
    "id": 653,
    "label": "Abducens nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "VI (Level 7)"
  },
  {
    "id": 568,
    "label": "Accessory abducens nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "ACVI (Level 7)"
  },
  {
    "id": 661,
    "label": "Facial motor nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "VII (Level 7)"
  },
  {
    "id": 576,
    "label": "Accessory facial motor nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "ACVII (Level 7)"
  },
  {
    "id": 640,
    "label": "Efferent vestibular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "EV (Level 7)"
  },
  {
    "id": 135,
    "label": "Nucleus ambiguus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "AMB (Level 7)"
  },
  {
    "id": 939,
    "label": "Nucleus ambiguus, dorsal division",
    "level": 8,
    "color": "#FFB3D9",
    "title": "AMBd (Level 8)"
  },
  {
    "id": 143,
    "label": "Nucleus ambiguus, ventral division",
    "level": 8,
    "color": "#FFB3D9",
    "title": "AMBv (Level 8)"
  },
  {
    "id": 839,
    "label": "Dorsal motor nucleus of the vagus nerve",
    "level": 7,
    "color": "#FFB3D9",
    "title": "DMX (Level 7)"
  },
  {
    "id": 887,
    "label": "Efferent cochlear group",
    "level": 7,
    "color": "#FFB3D9",
    "title": "ECO (Level 7)"
  },
  {
    "id": 1048,
    "label": "Gigantocellular reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "GRN (Level 7)"
  },
  {
    "id": 372,
    "label": "Infracerebellar nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "ICB (Level 7)"
  },
  {
    "id": 83,
    "label": "Inferior olivary complex",
    "level": 7,
    "color": "#FFB3D9",
    "title": "IO (Level 7)"
  },
  {
    "id": 136,
    "label": "Intermediate reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "IRN (Level 7)"
  },
  {
    "id": 106,
    "label": "Inferior salivatory nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "ISN (Level 7)"
  },
  {
    "id": 203,
    "label": "Linear nucleus of the medulla",
    "level": 7,
    "color": "#FFB3D9",
    "title": "LIN (Level 7)"
  },
  {
    "id": 235,
    "label": "Lateral reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "LRN (Level 7)"
  },
  {
    "id": 955,
    "label": "Lateral reticular nucleus, magnocellular part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "LRNm (Level 8)"
  },
  {
    "id": 963,
    "label": "Lateral reticular nucleus, parvicellular part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "LRNp (Level 8)"
  },
  {
    "id": 307,
    "label": "Magnocellular reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "MARN (Level 7)"
  },
  {
    "id": 395,
    "label": "Medullary reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "MDRN (Level 7)"
  },
  {
    "id": 1098,
    "label": "Medullary reticular nucleus, dorsal part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "MDRNd (Level 8)"
  },
  {
    "id": 1107,
    "label": "Medullary reticular nucleus, ventral part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "MDRNv (Level 8)"
  },
  {
    "id": 852,
    "label": "Parvicellular reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "PARN (Level 7)"
  },
  {
    "id": 859,
    "label": "Parasolitary nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "PAS (Level 7)"
  },
  {
    "id": 938,
    "label": "Paragigantocellular reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "PGRN (Level 7)"
  },
  {
    "id": 970,
    "label": "Paragigantocellular reticular nucleus, dorsal part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "PGRNd (Level 8)"
  },
  {
    "id": 978,
    "label": "Paragigantocellular reticular nucleus, lateral part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "PGRNl (Level 8)"
  },
  {
    "id": 154,
    "label": "Perihypoglossal nuclei",
    "level": 6,
    "color": "#FFB3D9",
    "title": "PHY (Level 6)"
  },
  {
    "id": 161,
    "label": "Nucleus intercalatus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "NIS (Level 7)"
  },
  {
    "id": 177,
    "label": "Nucleus of Roller",
    "level": 7,
    "color": "#FFB3D9",
    "title": "NR (Level 7)"
  },
  {
    "id": 169,
    "label": "Nucleus prepositus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "PRP (Level 7)"
  },
  {
    "id": 995,
    "label": "Paramedian reticular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "PMR (Level 7)"
  },
  {
    "id": 1069,
    "label": "Parapyramidal nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "PPY (Level 7)"
  },
  {
    "id": 185,
    "label": "Parapyramidal nucleus, deep part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "PPYd (Level 8)"
  },
  {
    "id": 193,
    "label": "Parapyramidal nucleus, superficial part",
    "level": 8,
    "color": "#FFB3D9",
    "title": "PPYs (Level 8)"
  },
  {
    "id": 701,
    "label": "Vestibular nuclei",
    "level": 6,
    "color": "#FFB3D9",
    "title": "VNC (Level 6)"
  },
  {
    "id": 209,
    "label": "Lateral vestibular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "LAV (Level 7)"
  },
  {
    "id": 202,
    "label": "Medial vestibular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "MV (Level 7)"
  },
  {
    "id": 225,
    "label": "Spinal vestibular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "SPIV (Level 7)"
  },
  {
    "id": 217,
    "label": "Superior vestibular nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "SUV (Level 7)"
  },
  {
    "id": 765,
    "label": "Nucleus x",
    "level": 7,
    "color": "#FFB3D9",
    "title": "x (Level 7)"
  },
  {
    "id": 773,
    "label": "Hypoglossal nucleus",
    "level": 7,
    "color": "#FFB3D9",
    "title": "XII (Level 7)"
  },
  {
    "id": 781,
    "label": "Nucleus y",
    "level": 7,
    "color": "#FFB3D9",
    "title": "y (Level 7)"
  },
  {
    "id": 76,
    "label": "Interstitial nucleus of the vestibular nerve",
    "level": 7,
    "color": "#FFB3D9",
    "title": "INV (Level 7)"
  },
  {
    "id": 379,
    "label": "Medulla, behavioral state related",
    "level": 5,
    "color": "#FFC6E2",
    "title": "MY-sat (Level 5)"
  },
  {
    "id": 206,
    "label": "Nucleus raphe magnus",
    "level": 7,
    "color": "#FFC6E2",
    "title": "RM (Level 7)"
  },
  {
    "id": 230,
    "label": "Nucleus raphe pallidus",
    "level": 7,
    "color": "#FFC6E2",
    "title": "RPA (Level 7)"
  },
  {
    "id": 222,
    "label": "Nucleus raphe obscurus",
    "level": 7,
    "color": "#FFC6E2",
    "title": "RO (Level 7)"
  },
  {
    "id": 512,
    "label": "Cerebellum",
    "level": 1,
    "color": "#F0F080",
    "title": "CB (Level 1)"
  },
  {
    "id": 528,
    "label": "Cerebellar cortex",
    "level": 4,
    "color": "#F0F080",
    "title": "CBX (Level 4)"
  },
  {
    "id": 1144,
    "label": "Cerebellar cortex, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CBXmo (Level 10)"
  },
  {
    "id": 1145,
    "label": "Cerebellar cortex, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CBXpu (Level 10)"
  },
  {
    "id": 1143,
    "label": "Cerebellar cortex, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "CBXgr (Level 10)"
  },
  {
    "id": 645,
    "label": "Vermal regions",
    "level": 5,
    "color": "#FFFC91",
    "title": "VERM (Level 5)"
  },
  {
    "id": 912,
    "label": "Lingula (I)",
    "level": 7,
    "color": "#FFFC91",
    "title": "LING (Level 7)"
  },
  {
    "id": 10707,
    "label": "Lingula (I), molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "LINGmo (Level 10)"
  },
  {
    "id": 10706,
    "label": "Lingula (I), Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "LINGpu (Level 10)"
  },
  {
    "id": 10705,
    "label": "Lingula (I), granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "LINGgr (Level 10)"
  },
  {
    "id": 920,
    "label": "Central lobule",
    "level": 6,
    "color": "#FFFC91",
    "title": "CENT (Level 6)"
  },
  {
    "id": 976,
    "label": "Lobule II",
    "level": 7,
    "color": "#FFFC91",
    "title": "CENT2 (Level 7)"
  },
  {
    "id": 10710,
    "label": "Lobule II, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CENT2mo (Level 10)"
  },
  {
    "id": 10709,
    "label": "Lobule II, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CENT2pu (Level 10)"
  },
  {
    "id": 10708,
    "label": "Lobule II, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "CENT2gr (Level 10)"
  },
  {
    "id": 984,
    "label": "Lobule III",
    "level": 7,
    "color": "#FFFC91",
    "title": "CENT3 (Level 7)"
  },
  {
    "id": 10713,
    "label": "Lobule III, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CENT3mo (Level 10)"
  },
  {
    "id": 10712,
    "label": "Lobule III, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CENT3pu (Level 10)"
  },
  {
    "id": 10711,
    "label": "Lobule III, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "CENT3gr (Level 10)"
  },
  {
    "id": 928,
    "label": "Culmen",
    "level": 6,
    "color": "#FFFC91",
    "title": "CUL (Level 6)"
  },
  {
    "id": 992,
    "label": "Lobule IV",
    "level": 7,
    "color": "#FFFC91",
    "title": "CUL4 (Level 7)"
  },
  {
    "id": 10716,
    "label": "Lobule IV, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CUL4mo (Level 10)"
  },
  {
    "id": 10715,
    "label": "Lobule IV, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CUL4pu (Level 10)"
  },
  {
    "id": 10714,
    "label": "Lobule IV, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "CUL4gr (Level 10)"
  },
  {
    "id": 1001,
    "label": "Lobule V",
    "level": 7,
    "color": "#FFFC91",
    "title": "CUL5 (Level 7)"
  },
  {
    "id": 10719,
    "label": "Lobule V, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CUL5mo (Level 10)"
  },
  {
    "id": 10718,
    "label": "Lobule V, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CUL5pu (Level 10)"
  },
  {
    "id": 10717,
    "label": "Lobule V, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "CUL5gr (Level 10)"
  },
  {
    "id": 1091,
    "label": "Lobules IV-V",
    "level": 7,
    "color": "#FFFC91",
    "title": "CUL4, 5 (Level 7)"
  },
  {
    "id": 10722,
    "label": "Lobules IV-V, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CUL4, 5mo (Level 10)"
  },
  {
    "id": 10721,
    "label": "Lobules IV-V, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "CUL4, 5pu (Level 10)"
  },
  {
    "id": 10720,
    "label": "Lobules IV-V, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "CUL4, 5gr (Level 10)"
  },
  {
    "id": 936,
    "label": "Declive (VI)",
    "level": 7,
    "color": "#FFFC91",
    "title": "DEC (Level 7)"
  },
  {
    "id": 10725,
    "label": "Declive (VI), molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "DECmo (Level 10)"
  },
  {
    "id": 10724,
    "label": "Declive (VI), Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "DECpu (Level 10)"
  },
  {
    "id": 10723,
    "label": "Declive (VI), granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "DECgr (Level 10)"
  },
  {
    "id": 944,
    "label": "Folium-tuber vermis (VII)",
    "level": 7,
    "color": "#FFFC91",
    "title": "FOTU (Level 7)"
  },
  {
    "id": 10728,
    "label": "Folium-tuber vermis (VII), molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "FOTUmo (Level 10)"
  },
  {
    "id": 10727,
    "label": "Folium-tuber vermis (VII), Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "FOTUpu (Level 10)"
  },
  {
    "id": 10726,
    "label": "Folium-tuber vermis (VII), granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "FOTUgr (Level 10)"
  },
  {
    "id": 951,
    "label": "Pyramus (VIII)",
    "level": 7,
    "color": "#FFFC91",
    "title": "PYR (Level 7)"
  },
  {
    "id": 10731,
    "label": "Pyramus (VIII), molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "PYRmo (Level 10)"
  },
  {
    "id": 10730,
    "label": "Pyramus (VIII), Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "PYRpu (Level 10)"
  },
  {
    "id": 10729,
    "label": "Pyramus (VIII), granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "PYRgr (Level 10)"
  },
  {
    "id": 957,
    "label": "Uvula (IX)",
    "level": 7,
    "color": "#FFFC91",
    "title": "UVU (Level 7)"
  },
  {
    "id": 10734,
    "label": "Uvula (IX), molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "UVUmo (Level 10)"
  },
  {
    "id": 10733,
    "label": "Uvula (IX), Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "UVUpu (Level 10)"
  },
  {
    "id": 10732,
    "label": "Uvula (IX), granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "UVUgr (Level 10)"
  },
  {
    "id": 968,
    "label": "Nodulus (X)",
    "level": 7,
    "color": "#FFFC91",
    "title": "NOD (Level 7)"
  },
  {
    "id": 10737,
    "label": "Nodulus (X), molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "NODmo (Level 10)"
  },
  {
    "id": 10736,
    "label": "Nodulus (X), Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "NODpu (Level 10)"
  },
  {
    "id": 10735,
    "label": "Nodulus (X), granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "NODgr (Level 10)"
  },
  {
    "id": 1073,
    "label": "Hemispheric regions",
    "level": 5,
    "color": "#FFFC91",
    "title": "HEM (Level 5)"
  },
  {
    "id": 1007,
    "label": "Simple lobule",
    "level": 7,
    "color": "#FFFC91",
    "title": "SIM (Level 7)"
  },
  {
    "id": 10674,
    "label": "Simple lobule, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "SIMmo (Level 10)"
  },
  {
    "id": 10673,
    "label": "Simple lobule, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "SIMpu (Level 10)"
  },
  {
    "id": 10672,
    "label": "Simple lobule, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "SIMgr (Level 10)"
  },
  {
    "id": 1017,
    "label": "Ansiform lobule",
    "level": 6,
    "color": "#FFFC91",
    "title": "AN (Level 6)"
  },
  {
    "id": 1056,
    "label": "Crus 1",
    "level": 7,
    "color": "#FFFC91",
    "title": "ANcr1 (Level 7)"
  },
  {
    "id": 10677,
    "label": "Crus 1, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "ANcr1mo (Level 10)"
  },
  {
    "id": 10676,
    "label": "Crus 1, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "ANcr1pu (Level 10)"
  },
  {
    "id": 10675,
    "label": "Crus 1, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "ANcr1gr (Level 10)"
  },
  {
    "id": 1064,
    "label": "Crus 2",
    "level": 7,
    "color": "#FFFC91",
    "title": "ANcr2 (Level 7)"
  },
  {
    "id": 10680,
    "label": "Crus 2, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "ANcr2mo (Level 10)"
  },
  {
    "id": 10679,
    "label": "Crus 2, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "ANcr2pu (Level 10)"
  },
  {
    "id": 10678,
    "label": "Crus 2, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "ANcr2gr (Level 10)"
  },
  {
    "id": 1025,
    "label": "Paramedian lobule",
    "level": 7,
    "color": "#FFFC91",
    "title": "PRM (Level 7)"
  },
  {
    "id": 10683,
    "label": "Paramedian lobule, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "PRMmo (Level 10)"
  },
  {
    "id": 10682,
    "label": "Paramedian lobule, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "PRMpu (Level 10)"
  },
  {
    "id": 10681,
    "label": "Paramedian lobule, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "PRMgr (Level 10)"
  },
  {
    "id": 1033,
    "label": "Copula pyramidis",
    "level": 7,
    "color": "#FFFC91",
    "title": "COPY (Level 7)"
  },
  {
    "id": 10686,
    "label": "Copula pyramidis, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "COPYmo (Level 10)"
  },
  {
    "id": 10685,
    "label": "Copula pyramidis, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "COPYpu (Level 10)"
  },
  {
    "id": 10684,
    "label": "Copula pyramidis, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "COPYgr (Level 10)"
  },
  {
    "id": 1041,
    "label": "Paraflocculus",
    "level": 7,
    "color": "#FFFC91",
    "title": "PFL (Level 7)"
  },
  {
    "id": 10689,
    "label": "Paraflocculus, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "PFLmo (Level 10)"
  },
  {
    "id": 10688,
    "label": "Paraflocculus, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "PFLpu (Level 10)"
  },
  {
    "id": 10687,
    "label": "Paraflocculus, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "PFLgr (Level 10)"
  },
  {
    "id": 1049,
    "label": "Flocculus",
    "level": 7,
    "color": "#FFFC91",
    "title": "FL (Level 7)"
  },
  {
    "id": 10692,
    "label": "Flocculus, molecular layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "FLmo (Level 10)"
  },
  {
    "id": 10691,
    "label": "Flocculus, Purkinje layer",
    "level": 10,
    "color": "#FFFC91",
    "title": "FLpu (Level 10)"
  },
  {
    "id": 10690,
    "label": "Flocculus, granular layer",
    "level": 10,
    "color": "#ECE754",
    "title": "FLgr (Level 10)"
  },
  {
    "id": 519,
    "label": "Cerebellar nuclei",
    "level": 4,
    "color": "#F0F080",
    "title": "CBN (Level 4)"
  },
  {
    "id": 989,
    "label": "Fastigial nucleus",
    "level": 7,
    "color": "#FFFDBC",
    "title": "FN (Level 7)"
  },
  {
    "id": 91,
    "label": "Interposed nucleus",
    "level": 7,
    "color": "#FFFDBC",
    "title": "IP (Level 7)"
  },
  {
    "id": 846,
    "label": "Dentate nucleus",
    "level": 7,
    "color": "#FFFDBC",
    "title": "DN (Level 7)"
  },
  {
    "id": 589508455,
    "label": "Vestibulocerebellar nucleus",
    "level": 7,
    "color": "#FFFDBC",
    "title": "VeCB (Level 7)"
  }
]);
