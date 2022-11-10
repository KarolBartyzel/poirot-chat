import { useEffect, useState } from "react";
import { EPerson } from "../../components/Person/Person.model";
import { AnswerMap, IConversation, Question } from "./useLogic.model";

const useAnswers = (
  questions: { person: EPerson; question: Question }[]
): IConversation[] => {
  const [conversations, setConversations] = useState<IConversation[]>([]);

  useEffect(() => {
    if (questions.length) {
      const [lastQuestion] = questions;
      const answers = AnswerMap[lastQuestion.person][
        lastQuestion.question
      ] as string[];
      const index = Math.floor(Math.random() * answers.length);
      const suffix = answers.length === 1 ? "" : `_${index + 1}`;

      setConversations((conversations) => [
        {
          person: lastQuestion.person,
          question: lastQuestion.question,
          answerText: answers[index],
          answerAudio: `audio/${lastQuestion.person}/${lastQuestion.question}${suffix}.mp3`,
        },
        ...conversations,
      ]);
    }
  }, [questions]);

  return conversations;
};

export default useAnswers;
