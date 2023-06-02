import { getPracticeWords } from "api/user-words";
import ProtectedRouteLayout from "components/Layout/ProtectedRouteLayout";
import NextOnlyPager from "components/Pagers/NextOnlyPager";
import PracticeWordDetails from "components/Word/PracticeWord";
import useFetch from "hooks/useFetch";
import { PracticeWord } from "types/words";

function Practice(): JSX.Element {
  // TODO add a selector for batch number
  const { data, error, loading } = useFetch<PracticeWord[]>(() => getPracticeWords(10), { triggerOnMount: true });

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
      <NextOnlyPager items={data?.map((it) => it.word)} itemView={PracticeWordDetails} />
    </ProtectedRouteLayout>
  );
}

export default Practice;
