// Type.
import { Bracket } from "./bracket";
import { QuotationMark } from './quotation-mark.type';
/**
 * @description Type for punctuation characters.
 * @link https://www.thesaurus.com/e/grammar/what-are-the-major-punctuation-marks/
 */
export type PunctuationCharacter = 
  | Bracket
  | QuotationMark

  | '#'
  | '%'
  | '&'
  | '/'
  | '?'
  | '@'
  | '\\'
  | '^'
  | '_'   // 
  | '`'
  | '|'   // Vertical bar/pipe
  | '~'
  | '«'   // Guillemet (left)
  | '»'   // Guillemet (right)

  // Period, question mark, and exclamation point - These three commonly used punctuation marks are used for the same reason: to end an independent thought.
  | '!' // Exclamation - The exclamation point is used at the end of exclamations and interjections.
  | '.' // Period - A period is used to end a declarative sentence. A period indicates that a sentence is finished.
  | '?'   // Question mark - The question mark is used to end a question, also known as an interrogative sentence.
  | '¡'   // Inverted exclamation mark
  | '¿'   // Inverted question mark

  // Slash and ellipses - These are two punctuation marks you may not see too often, but they are still useful.
  | '/'   // Slash - The slash has several different uses. 
  | '...' // Ellipsis - In formal writing, ellipses are used to indicate that words were removed from a quote.

  // Comma, colon, and semicolon - Commas, colons, and semicolons can all be used to connect sentences together.
  | ',' // Comma - The comma is often the punctuation mark that gives writers the most problems. It has many different uses and often requires good knowledge of grammar to avoid making mistakes when using it. 
  | ':'   // Colon - The colon is typically used to introduce additional information.
  | ';'   // Semicolon - Like the comma and the colon, the semicolon is used to connect sentences together. The semicolon typically indicates that the second sentence is closely related to the one before it.

  // Hyphen and dashes (en dash and em dash) - All three of these punctuation marks are often referred to as “dashes.” However, they are all used for entirely different reasons.
  | '-' // Hyphen - The hyphen is used to form compound words.
  | '–'   // En dash - The en dash is used to express ranges or is sometimes used in more complex compound words.
  | '—'   // Em dash - The em dash is used to indicate a pause or interrupted speech.
;
