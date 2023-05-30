import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { Noun, Verb, Word, WordType } from "types/words";

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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Singular</TableCell>
              <TableCell>Plural</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Nominative</TableCell>
              <TableCell>{declensionNominativeSingular}</TableCell>
              <TableCell>{declensionNominativePlural}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genitive</TableCell>
              <TableCell>{declensionGenitiveSingular}</TableCell>
              <TableCell>{declensionGenitivePlural}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dative</TableCell>
              <TableCell>{declensionDativeSingular}</TableCell>
              <TableCell>{declensionDativePlural}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accusative</TableCell>
              <TableCell>{declensionAccusativeSingular}</TableCell>
              <TableCell>{declensionAccusativePlural}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Instrumental</TableCell>
              <TableCell>{declensionInstrumentalSingular}</TableCell>
              <TableCell>{declensionInstrumentalPlural}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prepositional</TableCell>
              <TableCell>{declensionPrepositionalSingular}</TableCell>
              <TableCell>{declensionPrepositionalPlural}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Past Masculine</TableCell>
              <TableCell>Past Feminine</TableCell>
              <TableCell>Past Neuter</TableCell>
              <TableCell>Past Plural</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{conjugationPastMasculine}</TableCell>
              <TableCell>{conjugationPastFeminine}</TableCell>
              <TableCell>{conjugationPasNeuter}</TableCell>
              <TableCell>{conjugationPastPlural}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
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
              <TableCell>Singular</TableCell>
              <TableCell>{conjugationPresentSingular1st}</TableCell>
              <TableCell>{conjugationPresentSingular2nd}</TableCell>
              <TableCell>{conjugationPresentSingular3rd}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Plural</TableCell>
              <TableCell>{conjugationPresentPlural1st}</TableCell>
              <TableCell>{conjugationPresentPlural2nd}</TableCell>
              <TableCell>{conjugationPresentPlural3rd}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
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
              <TableCell>Singular</TableCell>
              <TableCell>{conjugationFutureSingular1st}</TableCell>
              <TableCell>{conjugationFutureSingular2nd}</TableCell>
              <TableCell>{conjugationFutureSingular3rd}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Plural</TableCell>
              <TableCell>{conjugationFuturePlural1st}</TableCell>
              <TableCell>{conjugationFuturePlural2nd}</TableCell>
              <TableCell>{conjugationFuturePlural3rd}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imperative Singular</TableCell>
              <TableCell>Imperative Plural</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{conjugationImperativeSingular}</TableCell>
              <TableCell>{conjugationImperativePlural}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
      <p>Accented: {accented}</p>
      <p>Type: {type}</p>
      {englishTranslations.length > 0 && (
        <p>
          Translations:{" "}
          {englishTranslations.map(({ id, translation }) => (
            <Link key={id} to={`/english-translations/${id}`}>
              {translation}
            </Link>
          ))}
        </p>
      )}
      {type === WordType.NOUN && <NounDetails {...noun} />}
      {type === WordType.VERB && <VerbDetails {...verb} />}
    </div>
  );
}

export default WordDetails;
