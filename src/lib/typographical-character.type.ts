/**
 * @description The type of typographical symbols rarely appear in formal writing. You are much more likely to see them used for a variety of reasons in informal writing.
 * @export
 */
export type TypographicalCharacter = 
  | '*' // Asterisk, used for multiplication and Markdown lists.
  | '&' // Ampersand, used for "and" and in HTML entities.
  | '•' // Bullet point, used in lists or decorative typography.
  | '#' // Pound symbol, used in computing and as a hashtag.
  | '~' // Tilde, used in mathematics, programming, and approximation.
  | '\\' // Backslash, used as an escape character.
  | '@' // At symbol, used in email addresses and annotations.
  | '^' // Caret symbol, used for exponentiation and logical operations.
  | '|' // Pipe symbol, used for piping and logical OR in programming.
  | '_' // Underscore, used for variable names, emphasis, and in programming.
  | '+' // Plus, used in addition and as a unary operator.
  | '-' // Minus, used in subtraction, hyphenation, and as a sign.
  | '=' // Equals, used in assignments, comparisons, and equations.
;