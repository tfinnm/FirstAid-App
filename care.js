//diabetic, stroke, and seizure
const CPRInstruct = {
  call911: true,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | CPR',
  forwardParams: CPRInstruct,
  forwardText: 'Start Metronome (removed temperarily)',
  bigText: 'Push Hard and Fast',
  graphic: '',
  smallText:
    'Place your hands in the center of the patient\'s chest, and push hard and fast until someone else takes over doing compressions.',
  smallText2: 'If possible, have someone else call 911 and get an AED while you start compressions, otherwise, call 911 then start compressions. CPR should be at 100-120 BPM and a depth of at least 2".'
};
const Anaphylaxis = {
  call911: true,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Call 911 Immediately',
  graphic: '',
  smallText:
    'If the patient has an epipen, you can also help them use it. If the reaction is less severe, you can help them take benadryl.',
  smallText2: 'Important: even if you use an epipen you still need to call 911, as the medication last for a very short time. To administer an EpiPen, remove the safety cap, and push the orange side into the patient\'s outer thigh. Keep pushing it firmly for 10 seconds. Make sure to keep your fingers clear of the needle.'
};
const pain = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Pain Medication',
  graphic: '',
  smallText:
    'If the patient can safely take them, you can help the patient take over the count pain medications such as NSAIDs, aspirin, and non-aspirin.',
  smallText2: 'Make sure that the patient has not already taken these medications and is not alergic to these medications before administering. If these do not reduce pain, the patient should seek professional medical care.'
};
const burn = {
  call911: true,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Cool and Cover',
  graphic: '',
  smallText:
    'Cool with water running water for 10 minutes, then loosely wrap the burn with sterile gauze.',
  smallText2: 'If the burn is less severe, you can also use burn cream to reduce pain. For more severe burns, the patient should seek proffesional care. For burns covering large portions of the body, call 911.'
};
const bone = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Splint and seek care',
  graphic: '',
  smallText:
    'Splint or immobilize the broken bone and help the patient to seek proffessional medical care.',
  smallText2: 'Splints can be made with gauze and a board. If you don\'t have these materials, they can be substituted for ducktape and magazines.'
};
const frostBite = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Slowly Reheat',
  graphic: '',
  smallText:
    'Move the patient to a warmer spot and provide them with more layers.',
  smallText2: 'You may want to provide the patient a blanket. Having the patient sip luke warm water can also help rewarm them. If the patient\'s clothes are wet, replace them with dry clothes.'
};
const sunburn = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Move to shade.',
  graphic: '',
  smallText:
    'You should have the patient move out of the sun and put on aloe or burn cream if availible.',
  smallText2: 'The patient should make sure to keep the burn out of the sun and use sunscreen following being sunburned.'
};
const bite = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: 'Medical Emergency | Alergic Reaction',
  forwardParams: Anaphylaxis,
  forwardText: 'Alergic Reaction Instructions',
  bigText: 'Clean and Cover',
  graphic: '',
  smallText:
    'Clean and cover the wound, just like a cut or scrape.',
  smallText2: 'If a sting, monitor the patient for any alergic reactions. If an alergic reaction occurs follow the alergic reaction instructions.'
};
const heat= {
  call911: true,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Slowly Cool',
  graphic: '',
  smallText:
    'Move the patient to a shadier and/or cooler spot.',
  smallText2: 'Have the patient rest and remove any extra layers. You can also have the patient sip on room temperature water or sports drink. If the patient does not improve, call 911 as heat stress can quickly lead to heat stoke.'
};
const hypothermia = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Slowly Reheat',
  graphic: '',
  smallText:
    'Move the patient to a warmer spot and provide them with more layers.',
  smallText2: 'You may want to provide the patient a blanket. Having the patient sip luke warm water can also help rewarm them. If the patient\'s clothes are wet, replace them with dry clothes.'
};
const dehydrate = {
  call911: false,
  callPoison: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Slowly Rehydrate',
  graphic: '',
  smallText:
    'If your patient is dehydrated, have them slowly sip water to rehydrate.',
  smallText2: 'If water alone doesn\'t work, rehydration salts, electrolyte tablets, or sports drinks may also help. If the patient doesn\'t improve they should seek proffessional medical care. Do not drink too quickly, this can cause the patient to feel sick.'
};
const poison = {
  call911: true,
  callPoison: true,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Call Poison Control.',
  graphic: '',
  smallText:
    'Every poisoning incident is different, so call poison control and follow the directions of their experts over the phone.',
  smallText2: 'In general, you will want to move to fresh air rinse the site of the exposure for 15 minutes, but consult with poison control on what specifically to do.'
};
const chestPain = {
  call911: true,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | CPR',
  forwardParams: CPRInstruct,
  forwardText: 'CPR Instruction',
  bigText: 'Call 911 and reassure the patient.',
  graphic: '',
  smallText:
    'Immediately call 911. Reassure the patient that they\'ll be alright. Loosen any tight clothing on the patient.',
  smallText2: 'If the patient can safely take aspirin, give 325mg of aspirin. If the patient has been prescribed nitroglycerin, you can also help them take it. If the patient shops breathing or looses their pulse, begin CPR.'
};
const shock = {
  call911: true,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Call 911 and lay the patient down.',
  graphic: '',
  smallText:
    'Lay the patient on their back and elevate their legs ~12".',
  smallText2: 'You may want to give the patient a blanket. Do not try to have them drink. Always call 911 if you suspect shock.'
};
const nose = {
  call911: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Lean Forward and pinch the bridge.',
  graphic: '',
  smallText:
    'Instruct the patient to lean forward and pinch the bridge of their nose.',
  smallText2: 'The patient should avoid leaning back while stopping the bleeding, as this can sometimes dislodge the clot that is forming. Similarly, they should not stick anything into their nose for the same reason, but they may want to hold gauze or tissue under their nose to avoid dripping blood.'
};
const stopthebleed = {
  call911: true,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | Shock',
  forwardParams: shock,
  forwardText: 'Goto Shock',
  bigText: 'Call 911, Apply Touriquet, Pack Wounds, Apply Pressure',
  graphic: '',
  smallText:
    'If availible and applicable, apply a tourniquet above the injury site. Otherwise, apply pressure with guaze or other materials.',
  smallText2: 'When applying pressure to deep wounds, you may need to push large amounts of gauze into the wound to be effective. Treat for shock once bleeding is controlled.'
};
const wound = {
  call911: false,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | Stop The Bleed',
  forwardParams: stopthebleed,
  forwardText: 'Goto Major Hemorrhage',
  bigText: 'Apply Pressure Until Bleeding Stops',
  graphic: '',
  smallText:
    'Using guaze, or another material if unavailible, apply direct pressure to the wound until bleeding stops.',
  smallText2: 'If the wound bleeds through the guaze, do not remove it, just add another peice of guaze on top. Once bleeding stops, wrap the wound and seek proffesional medical care. If bleeding does not stop, continue to the Major Hemorrhage instructions.'
};
const scrapes = {
  call911: false,
  callhotline: false,
  goForward: false,
  forwardPage: '',
  forwardParams: {},
  forwardText: '',
  bigText: 'Bandaids.',
  graphic: '',
  smallText:
    'For cuts and scrapes, even large ones, all you need to do is wash the cut and use a bandaid.',
  smallText2: 'To wash the wound, you can use saline spray, soap and water, alchohol prep pads, or more depending on whats availible. If the cut is too wide for a bandaid, you can tape on a guaze pad or wrap the cut with guaze.'
};
const bleedingMenu = [
  {
    id: 1,
    text: 'Cut/Scrape/Capillary Bleeding',
    page: 'Medical Emergency | Scrapes',
    color: '#344c6c',
    params: scrapes,
  },
  {
    id: 2,
    text: 'Minor Wound (Flowing but not Spurting)',
    page: 'Medical Emergency | Wound Care',
    color: '#344c6c',
    params: wound,
  },
  {
    id: 3,
    text: 'Major Hemorrhage (Spurting Blood)',
    page: 'Medical Emergency | Stop The Bleed',
    color: 'red',
    params: stopthebleed,
  },
  {
    id: 4,
    text: 'Bloody Nose (any severity)',
    page: 'Medical Emergency | Bloody Nose',
    color: '#344c6c',
    params: nose,
  }
];

const physMenu = [
  {
    id: 1,
    text: 'Broken Bone(s)',
    page: 'Medical Emergency | Broken Bones',
    color: '#344c6c',
    params: bone,
  },
  {
    id: 2,
    text: 'Burns',
    page: 'Medical Emergency | Burns',
    color: '#344c6c',
    params: burn,
  },
  {
    id: 3,
    text: 'Bleeding',
    page: 'Medical Emergency | Bleeding Menu',
    color: '#344c6c',
    params: {menuItems: bleedingMenu},
  },
  {
    id: 4,
    text: 'Pain',
    page: 'Medical Emergency | Pain',
    color: '#344c6c',
    params: pain,
  },
];
const enviroMenu = [
  {
    id: 1,
    text: 'Dehydration',
    page: 'Medical Emergency | Dehydration',
    color: '#344c6c',
    params: dehydrate,
  },
  {
    id: 2,
    text: 'Hypothermia & Frostbite (too cold)',
    page: 'Medical Emergency | Hypothermia',
    color: '#344c6c',
    params: hypothermia,
  },
  {
    id: 3,
    text: 'Heat Stress (too hot)',
    page: 'Medical Emergency | Heat Stress',
    color: 'red',
    params: heat,
  },
  {
    id: 4,
    text: 'Bites/Stings',
    page: 'Medical Emergency | Bites/Stings',
    color: '#344c6c',
    params: bite,
  },
  {
    id: 5,
    text: 'Sunburn',
    page: 'Medical Emergency | Sunburn',
    color: '#344c6c',
    params: sunburn,
  }
];
const otherMenu = [
  {
    id: 1,
    text: 'Shock',
    page: 'Medical Emergency | Shock',
    color: 'red',
    params: shock,
  },
  {
    id: 2,
    text: 'Eviromental Conditions',
    page: 'Medical Emergency | Enviromental Menu',
    color: '#344c6c',
    params: {menuItems: enviroMenu},
  },
  {
    id: 3,
    text: 'Chest Pain',
    page: 'Medical Emergency | Heart Attack',
    color: 'red',
    params: chestPain,
  },
  {
    id: 4,
    text: 'Pain and Physical Injuries',
    page: 'Medical Emergency | Physical Injuries',
    color: '#344c6c',
    params: {menuItems: physMenu},
  },
  {
    id: 3,
    text: 'Poison Exposure',
    page: 'Medical Emergency | Poison',
    color: 'red',
    params: poison,
  }
];
const Altered = {
  call911: true,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | Other Conditions',
  forwardParams: {menuItems: otherMenu},
  forwardText: 'Goto Other Conditions Menu',
  bigText: 'Call 911 and assess further.',
  graphic: '',
  smallText:
    'Anytimw a patient has an altered mental status, you should immediately seek emergency care, such as 911, as this may be indicative of a very serious problem.',
  smallText2: 'After calling 911, you can go to the Other Conditions Menu to try and determine why they have an altered mental status, so that you can provide care until EMS arrives.'
};

const choking = {
  call911: true,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | CPR',
  forwardParams: CPRInstruct,
  forwardText: 'Goto CPR Instructions',
  bigText: 'Abdominal Thrusts',
  graphic: require('./heimlick.jpg'),
  smallText:
    'Call 911 and perform Abdominal Thrusts (AKA the heimlick)',
  smallText2: 'Stand behind the patient, place your hands together under their ribcage, quickly pull up and in, and repeat until they can breath. If the patient becomes unconcious, begin CPR immediately.'
};
const difficult = {
  call911: true,
  callhotline: false,
  goForward: true,
  forwardPage: 'Medical Emergency | Alergic Reaction',
  forwardParams: Anaphylaxis,
  forwardText: 'Goto Alergic Reaction',
  bigText: 'Rest and Assess Further',
  graphic: '',
  smallText:
    'Have the patient stop and rest.',
  smallText2: 'If they do not improve, they should seek medical attention. If they get worse, you may want to call 911. Also consider the possibility of an alergic reaction.'
};
const breathingMenu = [
  {
    id: 1,
    text: 'Difficulty Breathing',
    page: 'Medical Emergency | Difficulty Breathing',
    color: '#344c6c',
    params: difficult,
  },
  {
    id: 2,
    text: 'Shortness of Breath',
    page: 'Medical Emergency | Difficulty Breathing',
    color: '#344c6c',
    params: difficult,
  },
  {
    id: 3,
    text: 'Choking',
    page: 'Medical Emergency | Choking',
    color: 'red',
    params: choking,
  },
  {
    id: 4,
    text: 'Alergic Reaction',
    page: 'Medical Emergency | Alergic Reaction',
    color: 'red',
    params: Anaphylaxis,
  },
  {
    id: 5,
    text: 'Not Breathing',
    page: 'Medical Emergency | CPR',
    color: 'red',
    params: CPRInstruct
  }
];
const airwayMenu = [
  {
    id: 1,
    text: 'Difficulty Breathing',
    page: 'Medical Emergency | Difficulty Breathing',
    color: '#344c6c',
    params: difficult,
  },
  {
    id: 2,
    text: 'Choking',
    page: 'Medical Emergency | Choking',
    color: 'red',
    params: choking,
  },
  {
    id: 3,
    text: 'Drowning',
    page: 'Medical Emergency | CPR',
    color: 'red',
    params: CPRInstruct
  },
  {
    id: 4,
    text: 'Alergic Reaction',
    page: 'Medical Emergency | Alergic Reaction',
    color: 'red',
    params: Anaphylaxis,
  },
  {
    id: 5,
    text: 'Not Breathing',
    page: 'Medical Emergency | CPR',
    color: 'red',
    params: CPRInstruct
  }
];

export { breathingMenu, airwayMenu, CPRInstruct, bleedingMenu, Altered, otherMenu };
