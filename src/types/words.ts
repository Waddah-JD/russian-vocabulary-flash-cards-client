export enum WordType {
  NOUN = "noun",
  VERB = "verb",
  ADJECTIVE = "adjective",
  CONJUNCTION = "conjunction",
  ADVERB = "adverb",
  PREPOSITION = "preposition",
  PARTICLE = "particle",
  PRONOUN = "pronoun",
  INTERJECTION = "interjection",
  NUMERAL = "numeral",
}

export enum WordGender {
  MASCULINE = "masculine",
  FEMININE = "feminine",
  NEUTER = "neuter",
}

export type Noun = {
  id: number;
  gender: WordGender | null;
  isAnimate: boolean;
  declensionNominativeSingular: string | null;
  declensionNominativePlural: string | null;
  declensionGenitiveSingular: string | null;
  declensionGenitivePlural: string | null;
  declensionDativeSingular: string | null;
  declensionDativePlural: string | null;
  declensionAccusativeSingular: string | null;
  declensionAccusativePlural: string | null;
  declensionInstrumentalSingular: string | null;
  declensionInstrumentalPlural: string | null;
  declensionPrepositionalSingular: string | null;
  declensionPrepositionalPlural: string | null;
};

export type Verb = {
  id: number;
  infinitive: string;
  isImperfective: boolean | null;
  conjugationPastMasculine: string | null;
  conjugationPastFeminine: string | null;
  conjugationPasNeuter: string | null;
  conjugationPastPlural: string | null;
  conjugationPresentSingular1st: string | null;
  conjugationPresentSingular2nd: string | null;
  conjugationPresentSingular3rd: string | null;
  conjugationPresentPlural1st: string | null;
  conjugationPresentPlural2nd: string | null;
  conjugationPresentPlural3rd: string | null;
  conjugationFutureSingular1st: string | null;
  conjugationFutureSingular2nd: string | null;
  conjugationFutureSingular3rd: string | null;
  conjugationFuturePlural1st: string | null;
  conjugationFuturePlural2nd: string | null;
  conjugationFuturePlural3rd: string | null;
  conjugationImperativeSingular: string | null;
  conjugationImperativePlural: string | null;
};

export type EnglishTranslation = {
  id: number;
  translation: string;
  words: Word[];
};

export type Word = {
  id: number;
  word: string;
  pronunciation: string | null;
  accented: string;
  type: WordType | null;
  noun: Noun;
  verb: Verb;
  englishTranslations: EnglishTranslation[];
};

export type PracticeWord = {
  word: Word;
  notes: string | null;
};

type CollectionEntry = {
  id: number;
  notes: string;
  failedPracticeCount: number;
  successfulPracticeCount: number;
};

export type WordInCollection = Word & { collectionEntry: CollectionEntry };
