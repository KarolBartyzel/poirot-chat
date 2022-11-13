import { EPerson } from "../../components/Person/Person.model";
import { AnswerMap, Question } from "./useLogic.model";

const useParse = (person: EPerson) => {
  const parseQuestion = (rawQuestion: string): Question | null => {
    if (rawQuestion.includes("your name")) {
      return Question.WHAT_IS_YOUR_NAME;
    } else if (
      rawQuestion.includes("do you") ||
      rawQuestion.includes("you do")
    ) {
      return Question.HOW_DO_YOU_DO;
    } else if (
      rawQuestion.includes("are you") ||
      rawQuestion.includes("feeling")
    ) {
      return Question.HOW_ARE_YOU_FEELING;
    } else if (rawQuestion.includes("play") || rawQuestion.includes("golf")) {
      return Question.CAN_YOU_PLAY_GOLF;
    } else if (
      rawQuestion.includes("something") ||
      rawQuestion.includes("drink")
    ) {
      return Question.SOMETHING_TO_DRINK;
    } else if (rawQuestion.includes("sing") || rawQuestion.includes("song")) {
      return Question.SONG;
    } else if (rawQuestion.includes("dinner") || rawQuestion.includes("eat")) {
      return Question.DINNER;
    } else if (rawQuestion.includes("problem")) {
      return Question.PROBLEM;
    }
    return null;
  };

  const parse = (rawQuestion: string) => {
    console.log(person);
    const question = parseQuestion(rawQuestion);
    if (!question || !AnswerMap[person][question]) {
      return null;
    }
    return {
      person,
      question,
    };
  };
  return parse;
};

export default useParse;
