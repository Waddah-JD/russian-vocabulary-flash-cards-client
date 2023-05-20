import { learnWords } from "api/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import LearnWord from "components/Word/LearnWord";
import useFetch from "hooks/useFetch";
import { Word } from "types/words";

function Learn(): JSX.Element {
  // TODO add a selector for batch number
  const { data: words, error, loading } = useFetch<Word[]>(() => learnWords(10), { triggerOnMount: true });

  if (loading) {
    // TODO
    return <p>Loading..</p>;
  }

  if (error) {
    // TODO
    return <p>ERROR!</p>;
  }

  return (
    <ProtectedRouteLayout>
      <h2>Learn</h2>
      {words && words.length > 0 ? (
        <div>
          {words.map((data) => {
            return <LearnWord key={data.id} details={data} />;
          })}
        </div>
      ) : (
        <div>NO RESULTS</div> // TODO
      )}
    </ProtectedRouteLayout>
  );
}

export default Learn;
