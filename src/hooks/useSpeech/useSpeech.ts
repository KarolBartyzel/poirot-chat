import { useMemo, useState } from "react";
import { ISpeechRecognition } from "./useSpeech.model";

const useSpeech = () => {
  const [text, setText] = useState<string | null>(null);
  const [inProgress, setInProgress] = useState(false);

  if (!("webkitSpeechRecognition" in window)) {
    throw new Error("This browser is not supported. Try Chrome.");
  }

  const speechRecognition = useMemo(() => {
    const speechRecognition: ISpeechRecognition = new (
      window as any
    ).webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.lang = "en";
    speechRecognition.onresult = (event) => {
      let result = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          result += event.results[i][0].transcript;
        }
      }
      setText(result);
    };

    return speechRecognition;
  }, []);

  const start = () => {
    setText(null);
    setInProgress(true);
    speechRecognition.start();
  };
  const stop = () => {
    speechRecognition.stop();
    setInProgress(false);
    setText(null);
  };

  return { inProgress, text, start, stop };
};

export default useSpeech;
