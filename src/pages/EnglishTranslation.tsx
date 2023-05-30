import { Link } from "@mui/material";
import { getEnglishTranslationDetails } from "api/english-translations";
import useFetch from "hooks/useFetch";
import { Link as RouterLink, useParams } from "react-router-dom";
import { EnglishTranslation } from "types/words";

function EnglishTranslation(): JSX.Element {
  const { id } = useParams();

  const { loading, error, data } = useFetch<EnglishTranslation>(getEnglishTranslationDetails, [id], {
    triggerOnMount: true,
  });

  if (loading) {
    // TODO
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO
    return <p>Something went wrong!</p>;
  }

  return data ? (
    <div>
      <p>{data.translation}</p>

      {data.words.length > 0 ? (
        <div style={{ display: "flex", gap: 5 }}>
          Translations:
          {data.words.map(({ id, word }, idx) => (
            <Link key={id} component={RouterLink} underline="hover" to={`/words/${id}`}>
              {word} {idx === data.words.length - 1 ? "" : ","}
            </Link>
          ))}
        </div>
      ) : (
        <div>No results</div>
      )}
    </div>
  ) : (
    <div>No results</div>
  );
}

export default EnglishTranslation;
