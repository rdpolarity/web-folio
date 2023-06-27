// Fix for https://github.com/dotansimha/graphql-code-generator/issues/6040
const { pascalCase } = require('change-case-all')
function fixedTitleCase(str) {
  const result = pascalCase(str);

  if (!result) {
    return str;
  }

  // if there is a leading underscore but it's not in the converted string, add it
  if (str.indexOf('_') === 0 && result.substring(0, 1) !== '_') {
    return `_${result}`;
  }
  return result;
}
module.exports = fixedTitleCase