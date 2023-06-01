import { learnWords } from "api/words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import PrevNextPager from "components/Pagers/PrevNextPager";
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

      <PrevNextPager data={words} pageView={LearnWord} />
    </ProtectedRouteLayout>
  );
}

export default Learn;
