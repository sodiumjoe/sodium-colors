const { uiGroups, ansiGroups } = require("./colors");

const { normal, bright } = ansiGroups;

module.exports = `colors:
  primary:
    background: "${uiGroups.background}"
    foreground: "${uiGroups.foreground}"
  cursor:
    text: "${uiGroups.background}"
    cursor: "${uiGroups.userCurrentState}"

  # Normal colors
  normal:
    black: "${normal.black}"
    red: "${normal.red}"
    green: "${normal.green}"
    yellow: "${normal.yellow}"
    blue: "${normal.blue}"
    magenta: "${normal.magenta}"
    cyan: "${normal.cyan}"
    white: "${normal.white}"

  # Bright colors
  bright:
    black: "${bright.black}"
    red: "${bright.red}"
    green: "${bright.green}"
    yellow: "${bright.yellow}"
    blue: "${bright.blue}"
    magenta: "${bright.magenta}"
    cyan: "${bright.cyan}"
    white: "${bright.white}"`;
