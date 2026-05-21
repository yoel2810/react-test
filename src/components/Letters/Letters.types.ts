export interface Letter {
  id: string;
  title: string;
  body: string;
}

export interface LettersProps {
  letters: Letter[];
}
