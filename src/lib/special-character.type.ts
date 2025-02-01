/**
 * @description Type for rare or unique special characters that don't fit in punctuation or symbol categories.
 * @export
 */
export type SpecialCharacter = 
  | '§' // Section symbol
  | '¶' // Pilcrow symbol
  | '¦' // Broken bar
  | '•' // Bullet point
  | '∴' // Therefore symbol
  | '♠' // Spade suit
  | '♣' // Club suit
  | '♥' // Heart suit
  | '♦' // Diamond suit
  | '∞' // Infinity sign
  | '⊕' // Circled plus
  | '⊗' // Circled times
  | '∅' // Empty set
  | '°' // Degree symbol

  | '€' // Euro symbol (used as a special character in some contexts)
  | '₹' // Indian Rupee symbol (also a currency, but could be categorized here in special contexts)
  | 'ℑ' // Imaginary unit
  | '∂' // Partial derivative symbol
  | '√' // Square root symbol (appears here as a special case)
  | '∑' // Summation symbol (appears here as a special case)
  | '≈' // Approximately equal to sign
  | '©' // Copyright symbol (used as special in some contexts)
  | '®' // Registered trademark symbol (used as special in some contexts)
;
