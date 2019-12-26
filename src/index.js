const {
  ansiGroups,
  colors,
  syntaxGroups,
  uiGroups,
  versionControlGroups
} = require("./colors");
const alacritty = require("./alacritty");

const makeSection = (list, title) => {
  return {
    title,
    data: list.reduce((acc, item, i) => {
      if (i % 6 === 0) {
        acc.push([item]);
        return acc;
      }
      acc[acc.length - 1].push(item);
      return acc;
    }, [])
  };
};

const descriptions = makeSection(
  [
    { name: "value / state", color: syntaxGroups.constant },
    { name: "identifier", color: syntaxGroups.identifier },
    { name: "global", color: syntaxGroups.global },
    { name: "emphasis", color: syntaxGroups.emphasis },
    { name: "action needed", color: uiGroups.userActionNeeded },
    { name: "special", color: syntaxGroups.special },
    { name: "statement", color: syntaxGroups.statement },
    { name: "type", color: syntaxGroups.type },
    { name: "decoration 1", color: colors.gray0 },
    { name: "decoration 2", color: colors.gray2 },
    { name: "decoration 3", color: colors.gray3 },
    { name: "default black", color: colors.gray1 },
    { name: "trivial", color: syntaxGroups.trivial },
    { name: "default text", color: uiGroups.foreground },
    { name: "decoration", color: colors.gray6 }
  ],
  null
);

const format = str =>
  str
    .split("")
    .reduce(
      (acc, c) =>
        c === c.toLowerCase() ? `${acc}${c}` : `${acc} ${c.toLowerCase()}`,
      ""
    );

const formatForMustache = obj =>
  Object.keys(obj).map(key => ({ name: format(key), color: obj[key] }));

module.exports = {
  ansiGroups,
  colors,
  syntaxGroups,
  uiGroups,
  versionControlGroups,
  descriptions,
  sections: [
    makeSection(formatForMustache(colors), "colors"),
    makeSection(formatForMustache(uiGroups), "ui"),
    makeSection(formatForMustache(syntaxGroups), "synxtax"),
    makeSection(formatForMustache(versionControlGroups), "version control"),
    makeSection(formatForMustache(ansiGroups.normal), "ansi (normal)"),
    makeSection(formatForMustache(ansiGroups.bright), "ansi (bright)")
  ],
  alacritty
};
