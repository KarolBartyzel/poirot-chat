const useJapp = () => {
  const answer = (question: string) => {
    if (question.includes("your name")) {
      return `audio/japp/name.mp3`;
    } else if (question.includes("problem")) {
      return `audio/japp/problem.mp3`; // What's your problem?
    }
    return null;
  };

  return answer;
};

export default useJapp;
