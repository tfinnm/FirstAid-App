const immediateHelp = {
  call911: true,
  callhotline: true,
  goForward: false,
  forwardPage: 'launcher',
  forwardParams: {},
  forwardText: 'Home',
  bigText: 'Seek Immediate Help',
  graphic: '',
  smallText:
    'Seek Immediate Professional Help For The Patient. STAY WITH THEM UNTIL HELP ARRIVES!',
  smallText2: 'This patient has been classified as \"High Risk\" by the Columbia Protocal, an evidence based suicide traige tool. It is recommended that they get help immediately.'
};
const cssrs6 = {
  promptText:
    'Ask the patient: "In the past three months, have you done anything, started to do anything, or prepared to do anything to end your life? (For example: collecting pills, self harm, or writing a suicide note)"',
  yesPage: 'Mental Health Crisis | Seek Immediate Help',
  noPage: 'Mental Health Crisis | Seek Professional Help',
  yesParams: immediateHelp,
  noParams: {
    call911: false,
    callhotline: false,
    goForward: true,
    forwardPage: 'launcher',
    forwardParams: {},
    forwardText: 'Home',
    bigText: 'Seek Proffesional Help',
    graphic: '',
    smallText:
    'It is recommended that the patient seeks professional help.',
    smallText2: 'Although the assessment has determined that the patient is not considered \"High Risk\", a yes to any of these questions indicates that the patient should seek professional help. Even if all of the questions were answered no, it may be worth talking to a professional.'
  },
};
const cssrs5 = {
  promptText:
    'Ask the patient: "In the last month, have you worked out or started to work out the details of how to kill yourself?"',
  yesPage: 'Mental Health Crisis | Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS 6',
  yesParams: immediateHelp,
  noParams: cssrs6,
};
const cssrs4 = {
  promptText:
    'Ask the patient: "In the last month, have you had any intention of acting on these thoughts of killing yourself, as opposed to you have the thoughts but you definately would not act on them?"',
  yesPage: 'Mental Health Crisis | Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS 5',
  yesParams: immediateHelp,
  noParams: cssrs5,
};
const cssrs3 = {
  promptText:
    'Ask the patient: "In the last month, have you though how you might do this?"',
  yesPage: 'Mental Health Crisis | C-SSRS 4',
  noPage: 'Mental Health Crisis | C-SSRS 4',
  yesParams: cssrs4,
  noParams: cssrs4,
};
const cssrs2 = {
  promptText:
    'Ask the patient: "In the last month, have you actually had any thoughts about killing yourself?"',
  yesPage: 'Mental Health Crisis | C-SSRS 3',
  noPage: 'Mental Health Crisis | C-SSRS 6',
  yesParams: cssrs3,
  noParams: cssrs6,
};
const cssrs1 = {
  promptText:
    'Ask the patient: "In the last month, have you wished you were dead or wished you could go to sleep and not wake up?"',
  yesPage: 'Mental Health Crisis | C-SSRS 2',
  noPage: 'Mental Health Crisis | C-SSRS 2',
  yesParams: cssrs2,
  noParams: cssrs2,
};
export {cssrs1, cssrs2, cssrs3, cssrs4, cssrs5, cssrs6, immediateHelp};
