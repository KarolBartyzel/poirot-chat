const useHastings = () => {
  const answer = (question: string) => {
    if (question.includes("your name")) {
      return `audio/hastings/name.mp3`; // What's your name?
    } else if (question.includes("sing") || question.includes("song")) {
      return `audio/hastings/song.mp3`; // Could you sing me a song?
    } else if (question.includes("dinner") || question.includes("eat")) {
      return `audio/hastings/dinner.mp3`; // How do you like the dinner?
    }
    return null;
  };

  return answer;
};

export default useHastings;
