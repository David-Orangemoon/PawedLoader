/**
 * Escape a string to be safe to use in XML content.
 * CC-BY-SA: hgoebl
 * https://stackoverflow.com/questions/7918868/
 * how-to-escape-xml-entities-in-javascript
 * @param {!string | !Array.<string>} unsafe Unsafe string.
 * @return {string} XML-escaped string, for use within an XML tag.
 * https://github.com/TurboWarp/scratch-vm/blob/develop/src/util/xml-escape.js
 */
const xmlEscape = function (unsafe) {
  if (typeof unsafe !== 'string') {
    if (Array.isArray(unsafe)) {
      unsafe = String(unsafe);
    } else {
      console.warn('Recived invalid input in xmlEscape.');
      return unsafe;
    }
  }
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}
module.exports = xmlEscape;