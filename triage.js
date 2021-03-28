const bleed = {
  promptText: 'Is the patient bleeding?',
  yesPage: 'Medical Emergency | Bleeding Menu',
  noPage: 'Medical Emergency | CPR',
  yesParams: {},
  noParams: {},
};
const pulse = {
  promptText: 'Does the patient have a pulse?',
  yesPage: 'Medical Emergency | Bleeding',
  noPage: 'Medical Emergency | CPR',
  yesParams: bleed,
  noParams: {},
};
const air = {
  promptText:
    'Is the patient choking, having difficulty breathing, or have an obstructed airway?',
  yesPage: 'Medical Emergency | Airway Menu',
  noPage: 'Medical Emergency | Pulse',
  yesParams: {},
  noParams: pulse,
};
const breath = {
  promptText: 'Is the patient breathing?',
  yesPage: 'Medical Emergency | Airway',
  noPage: 'Medical Emergency | Brething Menu',
  yesParams: air,
  noParams: {},
};
const consent = {
  promptText: 'Do you have the patient\'s explicit consent to treat them?',
  yesPage: 'Medical Emergency | Breathing',
  noPage: 'Medical Emergency | STOP! Obtain Consent',
  yesParams: breath,
  noParams: {},
};
const alive = {
  promptText: 'Is the patient conscious?',
  yesPage: 'Medical Emergency | Obtain Consent',
  noPage: 'Medical Emergency | Breathing',
  yesParams: consent,
  noParams: breath,
};
const PPE = {
  promptText:
    'Do you have proper PPE on, if availible? (Such as latex-free gloves)',
  yesPage: 'Medical Emergency | Consciousness',
  noPage: 'Medical Emergency| STOP! Use PPE',
  yesParams: alive,
  noParams: {
    call911: false,
    callhotline: false,
    goForward: true,
    forwardPage: 'Medical Emergency | Consciousness',
    forwardParams: alive,
    forwardText: 'continue',
    bigText: 'STOP! Protect Yourself',
    graphic: '',
    smallText:
    'Safety First: Protect Yourself From Infectious Diseases!',
    smallText2: 'Wearing latex-free gloves and other PPE (such as eye protection or a mask)can protect you from Blood Borne Pathogens and other infectious diseases. It is srongly suggested that you always wear gloves while administering first aid. If you are exposed to any bodily fluids, you may want to follow up with a health care provider.'
  },
};
const sceneSafe = {
  promptText: 'Are you in a safe location? Are you clear of any danger?',
  yesPage: 'Medical Emergency | PPE',
  noPage: 'Medical Emergency | STOP! Move To Safety',
  yesParams: PPE,
  noParams: {
    call911: true,
    callhotline: false,
    goForward: true,
    forwardPage: 'Medical Emergency | Scene Safety',
    forwardParams: sceneSafe,
    forwardText: 'The scene is now safe.',
    bigText: 'STOP! Move To Safety',
    graphic: '',
    smallText:
    'Safety First: Never Create A Second Victim!',
    smallText2: 'If you cannot safely get to to the patient, stop and move to safety, then call 911 as soon as you safely can, they will be able to make the scene safe. If there is an active attcker, rember three words: RUN, HIDE, FIGHT, in that order.'
  },
};

export { sceneSafe, PPE, alive, consent, breath, air, pulse, bleed };
