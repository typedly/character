// Type,
import { CurrencySymbol, MathSymbol, TrademarkSymbol } from '@typedly/symbol';
import { Bracket } from './bracket';
import { PunctuationCharacter } from './punctuation-character.type';
/**
 * @description Type for symbol characters such as mathematical, currency, and other symbols.
 */
export type SymbolCharacter = 
  | Bracket
  | CurrencySymbol
  | MathSymbol
  | PunctuationCharacter
  | TrademarkSymbol

  // Equality.
  | '≠' // Not equal to sign
  | '≡' // Identical to symbol
  | '=' // Equal to sign
  | '∞' // Infinity sign
  | '√' // Square root symbol
  | '∑' // Summation symbol
;

