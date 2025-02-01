// Type.
import { AlphabeticCharacter } from './alphabetic-character.type';
import { Digit } from '@typedly/digit';
/**
 * @description The type represents an alphabetic character, which can be either a lowercase or uppercase letter, and a digit.
 * @export
 */
export type AlphanumericCharacter = AlphabeticCharacter | Digit;
