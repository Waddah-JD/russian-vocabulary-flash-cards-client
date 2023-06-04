import { Link, styled } from "@mui/material";
import { getEnglishTranslationDetails } from "api/english-translations";
import FetchedDataContainer from "components/Layout/FetchedDataContainer";
import ErrorIndicator from "components/UiKit/ErrorIndicator";
import useFetch from "hooks/useFetch";
import { Link as RouterLink, useParams } from "react-router-dom";
import { EnglishTranslation } from "types/words";
import { isApiError, isNumericString } from "utils/types";

const TranslationsContainer = styled("div")(() => {
  return {
    display: "flex",
    gap: 5,
    flexWrap: "wrap",
  };
});

function EnglishTranslation(): JSX.Element {
  const { id } = useParams();

  // this won't be triggered since there is a redirect to homepage for such path
  if (!id) return <ErrorIndicator message="Missing English Translation ID param" />;

  if (!isNumericString(id))
    return <ErrorIndicator message={`The value "${id}" is not a valid English Translation ID`} />;

  const { loading, error, data } = useFetch<EnglishTranslation>(
    (): Promise<EnglishTranslation> => getEnglishTranslationDetails(id),
    { deps: [id], triggerOnMount: true }
  );

  return (
    <FetchedDataContainer loading={loading} error={error} errorOptions={{ errorMapperFn: mapErrors }}>
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

function mapErrors(error: unknown): string | null {
  if (!isApiError(error)) return null;

  const { message } = error.response.data;

  switch (message) {
    case "Entity Not found":
      return "Couldn't find ENGLISH TRANSLATION by provided ID, please make sure it exists";
    default:
      return null;
  }
}

export default EnglishTranslation;
