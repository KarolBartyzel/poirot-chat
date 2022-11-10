import { EPerson } from "../../components/Person/Person.model";

export interface IConversation {
  person: EPerson;
  question: Question;
  answerText: string;
  answerAudio: string;
}

export enum Question {
  WHAT_IS_YOUR_NAME = "name",
  HOW_DO_YOU_DO = "how_do_you_do",
  HOW_ARE_YOU_FEELING = "how_are_you_feeling",
  CAN_YOU_PLAY_GOLF = "golf",
  SOMETHING_TO_DRINK = "something_to_drink",
  SONG = "song",
  DINNER = "dinner",
  PROBLEM = "problem",
}

export const QuestionMap: Record<EPerson, Record<Question, string | null>> = {
  [EPerson.POIROT]: {
    [Question.WHAT_IS_YOUR_NAME]: "What's your name?",
    [Question.HOW_DO_YOU_DO]: "How do you do?",
    [Question.HOW_ARE_YOU_FEELING]: "How are you feeling?",
    [Question.CAN_YOU_PLAY_GOLF]: "Can you play golf?",
    [Question.SOMETHING_TO_DRINK]: "Something to drink?",
    [Question.SONG]: "Could you sing me a song?",
    [Question.DINNER]: "What is for dinner?",
    [Question.PROBLEM]: null,
  },
  [EPerson.HASTINGS]: {
    [Question.WHAT_IS_YOUR_NAME]: "What's your name?",
    [Question.HOW_DO_YOU_DO]: null,
    [Question.HOW_ARE_YOU_FEELING]: null,
    [Question.CAN_YOU_PLAY_GOLF]: null,
    [Question.SOMETHING_TO_DRINK]: null,
    [Question.SONG]: "Could you sing me a song?",
    [Question.DINNER]: "How do you like the dinner?",
    [Question.PROBLEM]: null,
  },
  [EPerson.JAPP]: {
    [Question.WHAT_IS_YOUR_NAME]: "What's your name?",
    [Question.HOW_DO_YOU_DO]: null,
    [Question.HOW_ARE_YOU_FEELING]: null,
    [Question.CAN_YOU_PLAY_GOLF]: null,
    [Question.SOMETHING_TO_DRINK]: null,
    [Question.SONG]: null,
    [Question.DINNER]: null,
    [Question.PROBLEM]: "What's your problem?",
  },
};

export const AnswerMap: Record<EPerson, Record<Question, string[] | null>> = {
  [EPerson.POIROT]: {
    [Question.WHAT_IS_YOUR_NAME]: ["I am Hercule Poirot"],
    [Question.HOW_DO_YOU_DO]: [
      "I have many affairs of importance of my own to attend to. My wardrobe Hastings, if I mistake not there's my new grey suit with a spot of grease, you have noticed it perhaps, huh? Well, it's only a one spot, you understand, but it is sufficient to trouble me. Then there is my winter overcoat - I must lay him aside in the partner of kittens. And I think, yes, I think the moment is right for trimming of the moustache.",
      "I'm fine.",
    ],
    [Question.HOW_ARE_YOU_FEELING]: [
      "Achoo, Achoo. Oh mon dieu ç'est un suffer.",
      "I'm fine.",
      "Well my friend, as one approaches the end one begins to see life as it truly is.",
    ],
    [Question.CAN_YOU_PLAY_GOLF]: [
      "The name of Poirot is feared on golf courses all over the continent.",
    ],
    [Question.SOMETHING_TO_DRINK]: [
      "No, no, I'm fine.",
      "It is important that I have my tisane punctually.",
    ],
    [Question.SONG]: [
      "Two men, one man and his dog went to mow a meadow. Three men, two men, one man and his dog went to mow a meadow.",
    ],
    [Question.DINNER]: ["Rabbit cooked in the style of Liege."],
    [Question.PROBLEM]: null,
  },
  [EPerson.HASTINGS]: {
    [Question.WHAT_IS_YOUR_NAME]: ["Arthur Hastings."],
    [Question.HOW_DO_YOU_DO]: null,
    [Question.HOW_ARE_YOU_FEELING]: null,
    [Question.CAN_YOU_PLAY_GOLF]: null,
    [Question.SOMETHING_TO_DRINK]: null,
    [Question.SONG]: ["Three men went to mow, went to mow a meadow."],
    [Question.DINNER]: ["Oh, it's wonderful."],
    [Question.PROBLEM]: null,
  },
  [EPerson.JAPP]: {
    [Question.WHAT_IS_YOUR_NAME]: ["Japp, Scotland Yard"],
    [Question.HOW_DO_YOU_DO]: null,
    [Question.HOW_ARE_YOU_FEELING]: null,
    [Question.CAN_YOU_PLAY_GOLF]: null,
    [Question.SOMETHING_TO_DRINK]: null,
    [Question.SONG]: null,
    [Question.DINNER]: null,
    [Question.PROBLEM]: ['He\'s saying "good day", you ignorant man!'],
  },
};
