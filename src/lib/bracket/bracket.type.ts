// Type.
import { AngleBracket } from "./angle-bracket.type";
import { CurlyBracket } from "./curly-bracket.type";
import { RoundBracket } from "./round-bracket.type";
import { SquareBracket } from "./square-bracket.type";
/**
 * Parentheses, brackets, and braces
 * @description These pairs of punctuation marks look similar, but they all have different uses. In general, the parentheses are much more commonly used than the others.
 * @export
 */
export type Bracket =
  | AngleBracket
  | CurlyBracket
  | SquareBracket
  | RoundBracket
;