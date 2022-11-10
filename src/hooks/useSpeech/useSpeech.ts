import { useEffect, useMemo, useState } from "react";
import { EPerson } from "../../components/Person/Person.model";
import { useParse, Question } from "../useLogic";
import { ISpeechRecognition } from "./useSpeech.model";

const useSpeech = (person: EPerson) => {
  const [questions, setQuestions] = useState<
    {
      person: EPerson;
      question: Question;
    }[]
  >([]);
  const parse = useParse(person);

  if (!("webkitSpeechRecognition" in window)) {
    throw new Error("This browser is not supported. Try Chrome.");
  }

  const speechRecognition = useMemo(() => {
    const speechRecognition: ISpeechRecognition = new (
      window as any
    ).webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = false;
    speechRecognition.lang = "en";
    speechRecognition.onresult = (event) => {
      let result = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          result += event.results[i][0].transcript;
        }
      }
      if (result) {
        const question = parse(result);
        if (question) {
          setQuestions((questions) => [question, ...questions]);
        }
      }
    };

    return speechRecognition;
  }, [parse]);

  useEffect(() => {
    return () => {
      speechRecognition.stop();
    };
  }, [speechRecognition]);

  const start = () => speechRecognition.start();

  return { questions, start };
};

export default useSpeech;
