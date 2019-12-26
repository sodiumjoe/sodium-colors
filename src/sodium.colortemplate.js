const {
  ansiGroups,
  colors,
  syntaxGroups,
  uiGroups,
  versionControlGroups
} = require("./colors");
const { normal, bright } = ansiGroups;

module.exports = `# vim: ft=colortemplate fdm=marker cc=22,40,58 et ts=2 sw=2

# Information {{{
# Mandatory
Full name:     Sodium
Short name:    sodium
Author:        Joe Moon <joe@xoxomoon.com>
# Optional
Maintainer:    Joe Moon <joe@xoxomoon.com>
Website:       https://joe.xoxomoon.com/sodium-colors
Description:   Yet another color scheme.
License:       Public domain
Neovim:        yes
# Prefix for options: short name is used if this key is not present:
Option Prefix: dark
# }}}

# Documentation {{{
Include: _help.colortemplate
# }}}

# Common linked groups {{{
QuickFixLine      -> Search
StatusLineTerm    -> StatusLine
StatusLineTermNC  -> StatusLineNC
Boolean           -> Constant
Character         -> Constant
Conditional       -> Statement
Define            -> PreProc
Debug             -> Special
Delimiter         -> Special
Exception         -> Statement
Float             -> Constant
Function          -> Identifier
Include           -> PreProc
Label             -> Statement
Macro             -> PreProc
Number            -> Constant
Operator          -> Statement
PreCondit         -> PreProc
Repeat            -> Statement
SpecialChar       -> Special
SpecialComment    -> Special
StorageClass      -> Type
String            -> Constant
Structure         -> Type
Tag               -> Special
Typedef           -> Type
deniteMatchedChar -> Special
ExtraWhitespace   -> Search

# See \`:help lCursor\`
lCursor           -> Cursor
# }}}

Background: dark

# Color palette {{{
# Color name            GUI                     Base256     Base16 (optional)
Color: black            ${normal.black} ~
Color: red              ${normal.red} ~
Color: green            ${normal.green} ~
Color: yellow           ${normal.yellow} ~
Color: blue             ${normal.blue} ~
Color: magenta          ${normal.magenta} ~
Color: cyan             ${normal.cyan} ~
Color: white            ${normal.white} ~
Color: orange           ${colors.orange} ~

Color: brightblack      ${bright.black} ~
Color: brightred        ${bright.red} ~
Color: brightgreen      ${bright.green} ~
Color: brightyellow     ${bright.yellow} ~
Color: brightblue       ${bright.blue} ~
Color: brightmagenta    ${bright.magenta} ~
Color: brightcyan       ${bright.cyan} ~

# uiGroups
Color: userActionNeeded ${uiGroups.userActionNeeded} ~
Color: userCurrentState ${uiGroups.userCurrentState} ~
Color: backgroundShade  ${uiGroups.backgroundShade} ~
Color: background       ${uiGroups.background} ~
Color: foreground       ${uiGroups.foreground} ~

# syntaxGroups
Color: constant         ${syntaxGroups.constant} ~
Color: identifier       ${syntaxGroups.identifier} ~
Color: statement        ${syntaxGroups.statement} ~
Color: type             ${syntaxGroups.type} ~
Color: global           ${syntaxGroups.global} ~
Color: emphasis         ${syntaxGroups.emphasis} ~
Color: special          ${syntaxGroups.special} ~
Color: trivial          ${syntaxGroups.trivial} ~

# versionControlGroups
Color: added            ${versionControlGroups.added} ~
Color: modified         ${versionControlGroups.modified} ~
Color: removed          ${versionControlGroups.removed} ~
Color: renamed          ${versionControlGroups.renamed} ~

# grays
Color: gray0            ${colors.gray0} ~
Color: gray1            ${colors.gray1} ~
Color: gray2            ${colors.gray2} ~
Color: gray3            ${colors.gray3} ~
Color: gray4            ${colors.gray4} ~
Color: gray5            ${colors.gray5} ~
Color: gray6            ${colors.gray6} ~

# semantic
Color: secondaryBg      ${colors.gray2} ~

# You may use hexadecimal values, too, and you may provide an explicit base-256 color:
Color: brightwhite      ${bright.white} ~
# }}}
# Terminal colors {{{
Term colors: black red green yellow blue magenta cyan white
Term colors: brightblack brightred brightgreen brightyellow
Term colors: brightblue brightmagenta brightcyan brightwhite
# }}}

# HIGHLIGHT

Normal               foreground        background

# ==================================================================
# UI GROUPS
# ==================================================================

# USER ACTION NEEDED
# Group              Foreground        Background        Attributes
# =================================================================
Error                userActionNeeded  none
ErrorMsg             userActionNeeded  none
WarningMsg           userActionNeeded  none
SpellBad             userActionNeeded  none              s=red
SpellCap             userActionNeeded  none              s=blue
SpellLocal           userActionNeeded  none              s=magenta
SpellRare            userActionNeeded  none              s=cyan reverse
StatusLineError      userActionNeeded  backgroundShade
TODO                 userActionNeeded  none              reverse
SignColumn           userActionNeeded  none
typescriptParenError userActionNeeded  none
NeomakeErrorSign     userActionNeeded  none
NeomakeWarningSign   userActionNeeded  none

# USER CURRENT STATE
# Group              Foreground        Background        Attributes
# =================================================================
MatchParen           userCurrentState  none
CursorLineNr         userCurrentState  none
Visual               background        userCurrentState
VisualNOS            background        userCurrentState
Folded               userCurrentState  none              italic
FoldColumn           userCurrentState  none
IncSearch            userCurrentState  backgroundShade   t=reverse g=standout
Search               userCurrentState  backgroundShade
WildMenu             backgroundShade   userCurrentState
ToolbarButton        backgroundShade   userCurrentState  bold
Question             userCurrentState  none
MoreMsg              userCurrentState  none
ModeMsg              userCurrentState  none
TabLineSel           userCurrentState  background
PmenuSel             gray2             userCurrentState
PmenuThumb           userCurrentState  userCurrentState
netrwTime            userCurrentState  none
netrwSizeDate        userCurrentState  none
CtrlPMatch           background        userCurrentState
gitcommitSummary     userCurrentState  none

# VERSION CONTROL
# Group               Foreground       Background        Attributes
# =================================================================
DiffAdd               foreground       added
DiffChange            foreground       modified
DiffDelete            removed          none
DiffText              foreground       modified          bold
GitGutterAdd          added            none
GitGutterChange       modified         none
GitGutterChangeDelete modified         none
GitGutterDelete       removed          none

# OTHER
# Group                 Foreground       Background        Attributes
# ===================================================================
StatusLine              brightwhite      backgroundShade
LineNr                  gray3            none
CursorLine              none             backgroundShade   reverse
CursorColumn            none             gray2
ColorColumn             none             gray2
EndOfBuffer             gray2            none
VertSplit               backgroundShade  none
StatusLineNC            foreground       backgroundShade
StatusLineTermNC        foreground       backgroundShade
TabLine                 foreground       backgroundShade
TabLineFill             backgroundShade  backgroundShade
ToolbarLine             foreground       backgroundShade
Pmenu                   foreground       gray2
PmenuSbar               trivial          trivial
fzf1                    backgroundShade  gray2
fzf2                    backgroundShade  gray2
fzf3                    backgroundShade  gray2
EasyMotionTarget        red              none              bold
EasyMotionTarget2First  orange           none
EasyMotionTarget2Second yellow           none

# ==================================================================
# SYNTAX GROUPS
# ==================================================================

# CONSTANT
# Group                 Foreground       Background        Attributes
# ===================================================================
Constant                constant         none
Directory               constant         none
jsObjectBraces          constant         none
jsBrackets              constant         none
jsBlock                 constant         none
jsFuncBlock             constant         none
jsClassBlock            constant         none
jsTryCatchBlock         constant         none
jsIfElseBlock           constant         none
jsFinallyBlock          constant         none
jsSwitchBlock           constant         none
jsRepeatBlock           constant         none
jsObjectValue           constant         none
jsClassValue            constant         none
jsParen                 constant         none
jsParenSwitch           constant         none
jsParenCatch            constant         none
jsParenIfElse           constant         none
jsParenRepeat           constant         none
jsBracket               constant         none
jsTernaryIf             constant         none
jsTemplateString        constant         none
jsTemplateVar           constant         none
cssAttr                 constant         none
cssAttrRegion           constant         none
cssAttributeSelector    constant         none
htmlTitle               constant         none
htmlH1                  constant         none
htmlH2                  constant         none
htmlH3                  constant         none
htmlH4                  constant         none
htmlH5                  constant         none
htmlH6                  constant         none
htmlLink                constant         none
markdownCode            constant         none
markdownCodeBlock       constant         none
xmlString               constant         none
netrwPlain              constant         none
netrwDir                constant         none
shDerefSimple           constant         none
typescriptBracket       constant         none
typescriptBlock         constant         none
goConst                 constant         none

# IDENTIFIER
# Group                         Foreground       Background        Attributes
# ===========================================================================
Identifier                      identifier       none
jsVariableDef                   identifier       none
jsObject                        identifier       none
jsObjectKey                     identifier       none
jsObjectKeyComputed             identifier       none
jsClassPropertyComputed         identifier       none
jsDestructuringPropertyComputed identifier       none
jsDestructuringValue            identifier       none
jsFutureKeys                    identifier       none
jsObjectProp                    identifier       none
jsPrototype                     identifier       none
jsObjectStringKey               identifier       none
jsFuncArgs                      identifier       none
jsTaggedTemplate                identifier       none
jsDestructuringBlock            identifier       none
jsDestructuringArray            identifier       none
jsDestructuringPropertyValue    identifier       none
jsImportContainer               identifier       none
jsExportContainer               identifier       none
jsModuleGroup                   identifier       none
jsModuleKeyword                 identifier       none
javascriptHtmlEvents            identifier       none
javascriptDomElemAttrs          identifier       none
javascriptDomElemFuncs          identifier       none
cssClassName                    identifier       none
cssIdentifier                   identifier       none
htmlTagName                     identifier       none
htmlSpecialTagName              identifier       none
htmlTag                         identifier       none
htmlEndTag                      identifier       none
jsonKeyword                     identifier       none
xmlAttrib                       identifier       none
netrwExe                        identifier       none
shFunction                      identifier       none
typescriptVariableDeclaration   identifier       none
typescriptCall                  identifier       none
typescriptRef                   identifier       none
typescriptVars                  identifier       none
typescriptFunction              identifier       none
jsSpreadExpression              identifier       none
jsRestExpression                identifier       none

# TYPE
# Group                         Foreground       Background        Attributes
# ===========================================================================
Type                            type             none
jsFunction                      type             none
jsFunctionKey                   type             none
jsStorageClass                  type             none
jsExportDefault                 type             none
jsNan                           type             none
shFunctionKey                   type             none
jsFlowDefinition                type             none
jsFlowClassDef                  type             none
jsFlowTypeStatement             type             none
jsFlowTypeKeyword               type             none
jsFlowImportType                type             none
jsFlowArgumentDef               type             none
jsFlowReturn                    type             none
jsFlowFunctionGroup             type             none
jsFlowClassGroup                type             none
typescriptEnumKeyword           type             none
typescriptVariable              type             none
typescriptFuncKeyword           type             none
typescriptDefault               type             none
typescriptReserved              type             none
goDeclaration                   type             none

# GLOBAL
# Group                         Foreground       Background        Attributes
# ===========================================================================
PreProc                         global           none
Keyword                         global           none
jsGlobalObjects                 global           none
jsThis                          global           none
jsSwitchCase                    global           none
jsParenDecorator                global           none
cssTagName                      global           none
jsGlobalNodeObjects             global           none
cssFontDescriptor               global           none
typescriptGlobal                global           none
typescriptExport                global           none
typescriptImport                global           none
goPackage                       global           none
goImport                        global           none

# STATEMENT
# Group                        Foreground        Background  Attributes
# =====================================================================
Statement                      statement         none
jsFuncCall                     statement         none
jsOperator                     statement         none
jsSpreadOperator               statement         none
jsTemplateExpression           statement         none
jsFuncArgExpression            statement         none
cssFunctionName                statement         none
cssProp                        statement         none
htmlArg                        statement         none
jsxRegion                      statement         none
xmlTag                         statement         none
xmlEndTag                      statement         none
xmlTagName                     statement         none
xmlEqual                       statement         none
shCmdSubRegion                 statement         none
typescriptOperator             statement         none
typescriptOpSymbols            statement         none
typescriptProp                 statement         none
typescriptInterpolation        statement         none
typescriptEventListenerMethods statement         none
dockerfileKeyword              statement         none

# EMPHASIS
# Group                        Foreground        Background  Attributes
# =====================================================================
Underlined                     emphasis          none
markdownItalic                 emphasis          none
markdownBold                   emphasis          none
markdownBoldItalic             emphasis          none

# SPECIAL
# Group                        Foreground        Background  Attributes
# =====================================================================
Special                        special           none
SpecialKey                     special           none
NonText                        special           none
Title                          special           none
jsBraces                       special           none
jsFuncBraces                   special           none
jsDestructuringBraces          special           none
jsClassBraces                  special           none
jsParens                       special           none
jsFuncParens                   special           none
jsArrowFunction                special           none
jsModuleAsterisk               special           none
cssBraces                      special           none
markdownHeadingDelimiter       special           none
markdownH1                     special           none
markdownH2                     special           none
markdownH3                     special           none
markdownH4                     special           none
markdownH5                     special           none
markdownH6                     special           none
markdownRule                   special           none
markdownListMarker             special           none
markdownOrderedListMarker      special           none
markdownLinkText               special           none
markdownCodeDelimiter          special           none
netrwClassify                  special           none
netrwVersion                   special           none
netrwSpecial                   special           none
typescriptParens               special           none
typescriptBraces               special           none
typescriptArrowFunc            special           none
typescriptPropietaryMethods    special           none
typescriptParen                special           none
CtrlPStats                     special           none

# TRIVIAL
# Group                        Foreground        Background  Attributes
# =====================================================================
Comment                        trivial           none
Ignore                         trivial           none
Conceal                        trivial           none
Noise                          trivial           none
jsNoise                        trivial           none
jsFuncArgCommas                trivial           none
cssClassNameDot                trivial           none
jsonQuote                      trivial           none
shQuote                        trivial           none
typescriptEndColons            trivial           none
typescriptTemplateSB           trivial           none
typescriptCommentSkip          trivial           none
typescriptDotNotation          trivial           none
netrwSortBy                    trivial           none
netrwSortSeq                   trivial           none
netrwQuickHelp                 trivial           none
netrwCopyTgt                   trivial           none
netrwTreeBarSpace              trivial           none
netrwSlash                     trivial           none
netrwCmdNote                   trivial           none
EasyMotionShade                trivial           none

# ==================================================================
# MISC
# ==================================================================

Cursor               gray1             gray5

verbatim
" VIM-POLYGLOT
let g:javascript_plugin_flow = 1
endverbatim`;
