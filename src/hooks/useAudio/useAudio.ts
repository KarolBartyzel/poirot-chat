import { useEffect, useState } from "react";
import { EPerson } from "../../components/Person/Person.model";
import { IConversation } from "../useLogic";

const useAudio = (conversations: IConversation[]) => {
  const [speaker, setSpeaker] = useState<EPerson | null>(null);

  useEffect(() => {
    const [lastConversation] = conversations;
    if (lastConversation) {
      setSpeaker(lastConversation.person);
      const audio = new Audio(lastConversation.answerAudio);
      audio.addEventListener("loadeddata", () => {
        audio.play();
        setTimeout(() => {
          audio.pause();
          setSpeaker(null);
        }, 1000 * (audio.duration + 1));
      });
      return () => {
        audio.pause();
        setSpeaker(null);
      };
    }
  }, [conversations]);

  return { speaker };
};

export default useAudio;
