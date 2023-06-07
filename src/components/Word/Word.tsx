import {
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer as MuiTableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Noun, Verb, Word, WordType } from "types/words";
import { oneOfTheArgsIsDefined } from "utils/general";

type Props = {
  details: Word;
};

function NounDetails(props: Noun): JSX.Element {
  const {
    gender,
    isAnimate,
    declensionNominativeSingular,
    declensionNominativePlural,
    declensionGenitiveSingular,
    declensionGenitivePlural,
    declensionDativeSingular,
    declensionDativePlural,
    declensionAccusativeSingular,
    declensionAccusativePlural,
    declensionInstrumentalSingular,
    declensionInstrumentalPlural,
    declensionPrepositionalSingular,
    declensionPrepositionalPlural,
  } = props;
  return (
    <div>
      <p>Gender: {gender}</p>
      <p>Animate: {isAnimate ? "✅" : "❌"}</p>

      {oneOfTheArgsIsDefined(
        declensionNominativeSingular,
        declensionNominativePlural,
        declensionGenitiveSingular,
        declensionGenitivePlural,
        declensionDativeSingular,
        declensionDativePlural,
        declensionAccusativeSingular,
        declensionAccusativePlural,
        declensionInstrumentalSingular,
        declensionInstrumentalPlural,
        declensionPrepositionalSingular,
        declensionPrepositionalPlural
      ) && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Singular</TableCell>
                <TableCell>Plural</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Nominative</TableCell>
                <TableCell>{declensionNominativeSingular}</TableCell>
                <TableCell>{declensionNominativePlural}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Genitive</TableCell>
                <TableCell>{declensionGenitiveSingular}</TableCell>
                <TableCell>{declensionGenitivePlural}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Dative</TableCell>
                <TableCell>{declensionDativeSingular}</TableCell>
                <TableCell>{declensionDativePlural}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Accusative</TableCell>
                <TableCell>{declensionAccusativeSingular}</TableCell>
                <TableCell>{declensionAccusativePlural}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Instrumental</TableCell>
                <TableCell>{declensionInstrumentalSingular}</TableCell>
                <TableCell>{declensionInstrumentalPlural}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Prepositional</TableCell>
                <TableCell>{declensionPrepositionalSingular}</TableCell>
                <TableCell>{declensionPrepositionalPlural}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

function VerbDetails(props: Verb): JSX.Element {
  const {
    infinitive,
    isImperfective,
    conjugationPastMasculine,
    conjugationPastFeminine,
    conjugationPasNeuter,
    conjugationPastPlural,
    conjugationPresentSingular1st,
    conjugationPresentSingular2nd,
    conjugationPresentSingular3rd,
    conjugationPresentPlural1st,
    conjugationPresentPlural2nd,
    conjugationPresentPlural3rd,
    conjugationFutureSingular1st,
    conjugationFutureSingular2nd,
    conjugationFutureSingular3rd,
    conjugationFuturePlural1st,
    conjugationFuturePlural2nd,
    conjugationFuturePlural3rd,
    conjugationImperativeSingular,
    conjugationImperativePlural,
  } = props;
  return (
    <div>
      <p>Infinitive: {infinitive}</p>
      <p>Imperfect: {isImperfective ? "✅" : "❌"}</p>

      {oneOfTheArgsIsDefined(
        conjugationPastMasculine,
        conjugationPastFeminine,
        conjugationPasNeuter,
        conjugationPastPlural
      ) && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Masculine</TableCell>
                <TableCell>Feminine</TableCell>
                <TableCell>Neuter</TableCell>
                <TableCell>Plural</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Past</TableCell>
                <TableCell>{conjugationPastMasculine}</TableCell>
                <TableCell>{conjugationPastFeminine}</TableCell>
                <TableCell>{conjugationPasNeuter}</TableCell>
                <TableCell>{conjugationPastPlural}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {oneOfTheArgsIsDefined(
        conjugationPresentSingular1st,
        conjugationPresentSingular2nd,
        conjugationPresentSingular3rd,
        conjugationPresentPlural1st,
        conjugationPresentPlural2nd,
        conjugationPresentPlural3rd
      ) && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>1st</TableCell>
                <TableCell>2nd</TableCell>
                <TableCell>3rd</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Present Singular</TableCell>
                <TableCell>{conjugationPresentSingular1st}</TableCell>
                <TableCell>{conjugationPresentSingular2nd}</TableCell>
                <TableCell>{conjugationPresentSingular3rd}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Present Plural</TableCell>
                <TableCell>{conjugationPresentPlural1st}</TableCell>
                <TableCell>{conjugationPresentPlural2nd}</TableCell>
                <TableCell>{conjugationPresentPlural3rd}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {oneOfTheArgsIsDefined(
        conjugationFutureSingular1st,
        conjugationFutureSingular2nd,
        conjugationFutureSingular3rd,
        conjugationFuturePlural1st,
        conjugationFuturePlural2nd,
        conjugationFuturePlural3rd
      ) && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>1st</TableCell>
                <TableCell>2nd</TableCell>
                <TableCell>3rd</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Future Singular</TableCell>
                <TableCell>{conjugationFutureSingular1st}</TableCell>
                <TableCell>{conjugationFutureSingular2nd}</TableCell>
                <TableCell>{conjugationFutureSingular3rd}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Future Plural</TableCell>
                <TableCell>{conjugationFuturePlural1st}</TableCell>
                <TableCell>{conjugationFuturePlural2nd}</TableCell>
                <TableCell>{conjugationFuturePlural3rd}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {oneOfTheArgsIsDefined(conjugationImperativeSingular, conjugationImperativePlural) && (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Singular</TableCell>
                <TableCell>Plural</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Imperative</TableCell>
                <TableCell>{conjugationImperativeSingular}</TableCell>
                <TableCell>{conjugationImperativePlural}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

function WordDetails(props: Props): JSX.Element {
  const { id, word, pronunciation, accented, type, noun, verb, englishTranslations } = props.details;

  return (
    <div>
      <h3>
        {id}: {word}
      </h3>
      <p>Pronunciation: {pronunciation}</p>

      <p>Accented: {noun?.declensionNominativeSingular || verb?.infinitive || accented}</p>

      <p>Type: {type}</p>

      {englishTranslations.length > 0 && (
        <TranslationsContainer>
          Translations:
          {englishTranslations.map(({ id, translation }, idx) => (
            <Link key={id} component={RouterLink} underline="hover" to={`/english-translations/${id}`}>
              {translation}
              {idx === englishTranslations.length - 1 ? "" : ","}
            </Link>
          ))}
        </TranslationsContainer>
      )}

      {type === WordType.NOUN && <NounDetails {...noun} />}
      {type === WordType.VERB && <VerbDetails {...verb} />}
    </div>
  );
}

const TranslationsContainer = styled("div")(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
  };
});

const TableContainer = styled(MuiTableContainer)(() => {
  return {
    width: "max-content",
  };
});

export default WordDetails;
