const usePoirot = () => {
  const answer = (question: string) => {
    if (question.includes("your name")) {
      return `audio/poirot/name.mp3`; // What's your name?
    } else if (question.includes("do you") || question.includes("you do")) {
      if (Math.random() >= 0.5) {
        return `audio/poirot/how_do_you_do_1.mp3`; // How do you do?
      } else {
        return `audio/poirot/how_do_you_do_2.mp3`; // How do you do?
      }
    } else if (question.includes("are you") || question.includes("feeling")) {
      if (Math.random() >= 0.5) {
        return `audio/poirot/how_are_you_feeling_1.mp3`; // How are you feeling?
      } else {
        return `audio/poirot/how_are_you_feeling_2.mp3`; // How are you feeling?
      }
    } else if (question.includes("play") || question.includes("golf")) {
      return `audio/poirot/golf.mp3`; // Can you play golf?
    } else if (question.includes("something") || question.includes("drink")) {
      if (Math.random() >= 0.5) {
        return `audio/poirot/something_to_drink_1.mp3`; // Something to drink?
      } else {
        return `audio/poirot/something_to_drink_2.mp3`; // Something to drink?
      }
    } else if (question.includes("sing") || question.includes("song")) {
      return `audio/poirot/song.mp3`; // Could you sing me a song?
    } else if (question.includes("dinner") || question.includes("eat")) {
      return `audio/poirot/dinner.mp3`; // What is for dinner?
    }

    return null;
  };

  return answer;
};

export default usePoirot;
