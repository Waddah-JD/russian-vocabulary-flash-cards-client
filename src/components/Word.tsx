import { Noun, Verb, Word, WordType } from "types/words";
import { oneOfTheArgsIsNotNil } from "utils/general";

type Props = {
  data: Word;
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
      <p>Animate: {isAnimate}</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative</td>
            <td>{declensionNominativeSingular}</td>
            <td>{declensionNominativePlural}</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>{declensionGenitiveSingular}</td>
            <td>{declensionGenitivePlural}</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>{declensionDativeSingular}</td>
            <td>{declensionDativePlural}</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>{declensionAccusativeSingular}</td>
            <td>{declensionAccusativePlural}</td>
          </tr>
          <tr>
            <td>Instrumental</td>
            <td>{declensionInstrumentalSingular}</td>
            <td>{declensionInstrumentalPlural}</td>
          </tr>
          <tr>
            <td>Prepositional</td>
            <td>{declensionPrepositionalSingular}</td>
            <td>{declensionPrepositionalPlural}</td>
          </tr>
        </tbody>
      </table>
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
      <p>Imperfective: {isImperfective}</p>

      {oneOfTheArgsIsNotNil(
        conjugationPastMasculine,
        conjugationPastFeminine,
        conjugationPasNeuter,
        conjugationPastPlural
      ) && (
        <table>
          <thead>
            <tr>
              <th>Past Masculine</th>
              <th>Past Feminine</th>
              <th>Past Neuter</th>
              <th>Past Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{conjugationPastMasculine}</td>
              <td>{conjugationPastFeminine}</td>
              <td>{conjugationPasNeuter}</td>
              <td>{conjugationPastPlural}</td>
            </tr>
          </tbody>
        </table>
      )}

      {oneOfTheArgsIsNotNil(
        conjugationPresentSingular1st,
        conjugationPresentSingular2nd,
        conjugationPresentSingular3rd,
        conjugationPresentPlural1st,
        conjugationPresentPlural2nd,
        conjugationPresentPlural3rd
      ) && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1st</th>
              <th>2nd</th>
              <th>3rd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Singular</td>
              <td>{conjugationPresentSingular1st}</td>
              <td>{conjugationPresentSingular2nd}</td>
              <td>{conjugationPresentSingular3rd}</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>{conjugationPresentPlural1st}</td>
              <td>{conjugationPresentPlural2nd}</td>
              <td>{conjugationPresentPlural3rd}</td>
            </tr>
          </tbody>
        </table>
      )}

      {oneOfTheArgsIsNotNil(
        conjugationFutureSingular1st,
        conjugationFutureSingular2nd,
        conjugationFutureSingular3rd,
        conjugationFuturePlural1st,
        conjugationFuturePlural2nd,
        conjugationFuturePlural3rd
      ) && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1st</th>
              <th>2nd</th>
              <th>3rd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Singular</td>
              <td>{conjugationFutureSingular1st}</td>
              <td>{conjugationFutureSingular2nd}</td>
              <td>{conjugationFutureSingular3rd}</td>
            </tr>
            <tr>
              <td>Plural</td>
              <td>{conjugationFuturePlural1st}</td>
              <td>{conjugationFuturePlural2nd}</td>
              <td>{conjugationFuturePlural3rd}</td>
            </tr>
          </tbody>
        </table>
      )}

      {oneOfTheArgsIsNotNil(conjugationImperativeSingular, conjugationImperativePlural) && (
        <table>
          <thead>
            <tr>
              <th>Imperative Singular</th>
              <th>Imperative Plural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{conjugationImperativeSingular}</td>
              <td>{conjugationImperativePlural}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

function WordDetails(props: Props): JSX.Element {
  const { id, word, pronunciation, accented, type, noun, verb, englishTranslations } = props.data;

  return (
    <div style={{ marginBottom: "100px" }}>
      <h3>
        {id}: {word}
      </h3>
      <p>Pronunciation: {pronunciation}</p>
      <p>Accented: {accented}</p>
      <p>Type: {type}</p>
      <p>Translations: {englishTranslations.join(", ")}</p>
      {type === WordType.NOUN && <NounDetails {...noun} />}
      {type === WordType.VERB && <VerbDetails {...verb} />}
    </div>
  );
}

export default WordDetails;
