/**
 * @description Type for whitespace characters like spaces, tabs, newlines, and common Unicode whitespace.
 */
export type WhitespaceCharacter = 
  | ' '  // (Space): The basic space character.
  | '\t' // (Horizontal tab): Used to align text or code in programming.
  | '\n' // (Line feed, newline): Moves the cursor to the next line in many systems.
  | '\r' // (Carriage return): Often combined with \n for newline in Windows, but also used in older systems.
  | '\f' // (Form feed): Generally used to advance to the next page or section.
  | '\v' //  (Vertical tab): Rarely used today, but still part of the ASCII control characters.
  | '\u00A0' // (Non-breaking space): Prevents line breaks in text, commonly used in HTML and word processing.
  | '\u2000' // (En quad): A space that is the width of the letter "N" in a given font.
  | '\u2001' // (Em quad): A space the width of the letter "M".
  | '\u2002' // (En space): A space half the width of an em space.
  | '\u2003' // (Em space): Another common Unicode space.
  | '\u200B' // (Zero width space): A space with no width, useful for invisible text formatting.
  | '\u202F' // (Narrow no-break space): A space that doesn’t break lines, similar to the non-breaking space but narrower.
;