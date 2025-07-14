import React from "react";
import { Highlight } from "../components/Highlight";

interface WordToken {
  text: string;
  punctuation: string;
  highlight: boolean;
  type: "letter" | "letterWord" | "word";
}

const separateWordAndPunctuation = (word: string) => {
  const match = word.match(/^(.+?)([.,;:!?]*)$/);
  return match 
    ? { word: match[1], punctuation: match[2] }
    : { word, punctuation: "" };
};

const isLetterWordPattern = (words: string[], index: number): boolean => {
  const { word } = separateWordAndPunctuation(words[index]);

  return (
    index + 2 < words.length &&
    word.length === 1 &&
    /[A-Z]/.test(word) &&
    words[index + 1] === "<"
  );
};

const isSingleLetter = (word: string): boolean => {
  return word.length === 1 && /[A-Za-z]/.test(word);
};

const createLetterWordToken = (words: string[], index: number): WordToken => {
  const { word: currentWord } = separateWordAndPunctuation(words[index]);
  const { word: thirdWord, punctuation } = separateWordAndPunctuation(words[index + 2]);
  
  return {
    text: `${currentWord} ${words[index + 1]} ${thirdWord}`,
    punctuation,
    highlight: true,
    type: "letterWord",
  };
};

const createLetterToken = (word: string): WordToken => {
  const { word: cleanWord, punctuation } = separateWordAndPunctuation(word);
  
  return {
    text: cleanWord,
    punctuation,
    highlight: true,
    type: "letter",
  };
};

const createWordToken = (word: string): WordToken => ({
  text: word,
  punctuation: "",
  highlight: false,
  type: "word",
});

const tokenizeWords = (text: string): WordToken[] => {
  const words = text.split(" ");
  const tokens: WordToken[] = [];

  for (let i = 0; i < words.length; i++) {
    const { word: currentWord } = separateWordAndPunctuation(words[i]);

    if (isLetterWordPattern(words, i)) {
      tokens.push(createLetterWordToken(words, i));
      i += 2; // Skip next two words
    } else if (isSingleLetter(currentWord)) {
      tokens.push(createLetterToken(words[i]));
    } else {
      tokens.push(createWordToken(words[i]));
    }
  }

  return tokens;
};

const renderToken = (token: WordToken, index: number) => {
  const spacing = index > 0 ? " " : "";
  
  if (token.highlight) {
    return (
      <React.Fragment key={index}>
        {spacing}
        <Highlight>{token.text}</Highlight>
        {token.punctuation}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment key={index}>
      {spacing}
      {token.text}
    </React.Fragment>
  );
};

export const processTierResultText = (text: string) => {
  const tokens = tokenizeWords(text);
  return tokens.map(renderToken);
};