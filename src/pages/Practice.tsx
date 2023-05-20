import { getPracticeWords } from "api/user-words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import PracticeWordDetails from "components/Word/PracticeWord";
import useFetch from "hooks/useFetch";
import { PracticeWord } from "types/words";

function Practice(): JSX.Element {
  // TODO add a selector for batch number
  const {
    data: words,
    error,
    loading,
  } = useFetch<PracticeWord[]>(() => getPracticeWords(10), { triggerOnMount: true });

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
      <h2>Practice</h2>
      {words && words.length > 0 ? (
        <div>
          {words.map((data) => {
            return <PracticeWordDetails key={data.word.id} word={data.word} />;
          })}
        </div>
      ) : (
        <div>NO RESULTS</div> // TODO
      )}
    </ProtectedRouteLayout>
  );
}

export default Practice;
