import { useEffect, useState } from "react";
import { EPerson } from "../../components/Person/Person.model";
import useHastings from "./useHastings";
import useJapp from "./useJapp";
import usePoirot from "./usePoirot";

const useAnswers = (person: EPerson) => {
  const [path, setPath] = useState<string | null>(null);
  const answerPoirot = usePoirot();
  const answerHastings = useHastings();
  const answerJapp = useJapp();

  const answer = (question: string) => {
    let path: string | null = null;
    if (person === EPerson.HASTINGS) {
      path = answerHastings(question);
    } else if (person === EPerson.POIROT) {
      path = answerPoirot(question);
    } else if (person === EPerson.JAPP) {
      path = answerJapp(question);
    }
    setPath(path);
  };

  useEffect(() => {
    if (path) {
      const audio = new Audio(path);
      audio.play();
      return () => {
        audio.pause();
      };
    }
  }, [path]);

  return answer;
};

export default useAnswers;
