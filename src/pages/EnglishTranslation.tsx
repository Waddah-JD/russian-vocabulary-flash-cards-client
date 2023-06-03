import { Link, styled } from "@mui/material";
import { getEnglishTranslationDetails } from "api/english-translations";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import useFetch from "hooks/useFetch";
import { Link as RouterLink, useParams } from "react-router-dom";
import { EnglishTranslation } from "types/words";

const TranslationsContainer = styled("div")(() => {
  return {
    display: "flex",
    gap: 5,
    flexWrap: "wrap",
  };
});

function EnglishTranslation(): JSX.Element {
  const { id } = useParams();

  if (!id) return <></>; // TODO

  const { loading, error, data } = useFetch<EnglishTranslation>(
    (): Promise<EnglishTranslation> => getEnglishTranslationDetails(id),
    { deps: [id], triggerOnMount: true }
  );

  return (
    <FetchedDataContainer loading={loading} error={error}>
      {data ? (
        <div>
          <p>{data.translation}</p>

          {data.words.length > 0 ? (
            <TranslationsContainer>
              Translations:
              {data.words.map(({ id, word }, idx) => (
                <Link key={id} component={RouterLink} underline="hover" to={`/words/${id}`}>
                  {word}
                  {idx === data.words.length - 1 ? "" : ","}
                </Link>
              ))}
            </TranslationsContainer>
          ) : (
            <div>No results</div>
          )}
        </div>
      ) : (
        <div>No results</div>
      )}
    </FetchedDataContainer>
  );
}

export default EnglishTranslation;
