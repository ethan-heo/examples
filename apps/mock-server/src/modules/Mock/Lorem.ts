import words from "../constants/words";
import { MockData } from "./interfaces";

type LoremType = "Paragraph" | "Sentence" | "Word";

type LoremOptions = {
  type: LoremType;
};

const LoremTypes: Record<string, LoremType> = {
  Paragraph: "Paragraph",
  Sentence: "Sentence",
  Word: "Word",
};

class Lorem implements MockData<LoremOptions, string> {
  options = {
    type: LoremTypes.Paragraph,
  };

  set(options: Partial<LoremOptions> = {}): this {
    const self = this;

    self.options = {
      ...self.options,
      ...options,
    };

    return this;
  }
  valueOf(): string {
    const self = this;

    switch (self.options.type) {
      case "Paragraph":
        return self.formatWords(self.makeWords(30, 40));
      case "Sentence":
        return self.formatWords(self.makeWords(5, 12));
      default:
        return self.formatWords(self.makeWords(1, 1));
    }
  }

  private makeWords(minWordsCount: number, maxWordsCount: number) {
    const self = this;

    return Array.from({
      length: self.randomNumber(minWordsCount, maxWordsCount),
    }).map(() => words[self.randomNumber(0, 29)]);
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private formatWords(words: string[]) {
    return words.join(" ");
  }
}

export default Lorem;
