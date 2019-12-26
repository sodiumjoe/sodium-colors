const colors = {
  cyan: "#7FC1CA",
  blue: "#83AFE5",
  purple: "#9A93E1",
  pink: "#D18EC2",
  red: "#DF8C8C",
  orange: "#F2C38F",
  yellow: "#DADA93",
  green: "#A8CE93",
  gray0: "#1E272C",
  gray1: "#3C4C55",
  gray2: "#556873",
  gray3: "#6A7D89",
  gray4: "#899BA6",
  gray5: "#C5D4DD",
  gray6: "#E6EEF3"
};

const uiGroups = {
  userActionNeeded: colors.red,
  userCurrentState: colors.cyan,
  backgroundShade: colors.gray2,
  background: colors.gray1,
  foreground: colors.gray5,
  ...colors
};

const syntaxGroups = {
  constant: colors.cyan,
  identifier: colors.blue,
  statement: colors.yellow,
  type: colors.green,
  global: colors.purple,
  emphasis: colors.pink,
  special: colors.orange,
  trivial: colors.gray4
};

const versionControlGroups = {
  added: colors.green,
  modified: colors.orange,
  removed: colors.red,
  renamed: colors.blue
};

const ansiGroups = {
  normal: {
    black: uiGroups.background,
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow,
    blue: colors.blue,
    magenta: colors.purple,
    cyan: colors.cyan,
    white: uiGroups.foreground
  },
  bright: {
    black: colors.gray4,
    red: colors.orange,
    green: colors.green,
    yellow: colors.yellow,
    blue: colors.blue,
    magenta: colors.pink,
    cyan: colors.cyan,
    white: colors.gray6
  }
};

module.exports = {
  colors,
  uiGroups,
  syntaxGroups,
  versionControlGroups,
  ansiGroups
};
