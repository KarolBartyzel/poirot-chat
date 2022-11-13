import { Box, Button, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import useAudio from "../../hooks/useAudio/useAudio";
import { useAnswers, QuestionMap } from "../../hooks/useLogic";
import useSpeech from "../../hooks/useSpeech";
import Person from "../Person";
import { EPerson, Names } from "../Person/Person.model";

const Microphone = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [person, setPerson] = useState<EPerson>(EPerson.POIROT);
  const { start, questions } = useSpeech(person);
  const conversations = useAnswers(questions);
  const { speaker } = useAudio(conversations);

  useEffect(() => {
    if (isStarted) {
      start();
    }
  }, [isStarted, start]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      gap={2}
    >
      <Box
        display="flex"
        gap={2}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Person
          name={EPerson.HASTINGS}
          isChosen={person === EPerson.HASTINGS}
          isSpeaking={speaker === EPerson.HASTINGS}
          choose={() => setPerson(EPerson.HASTINGS)}
        />
        <Person
          name={EPerson.POIROT}
          isChosen={person === EPerson.POIROT}
          isSpeaking={speaker === EPerson.POIROT}
          choose={() => setPerson(EPerson.POIROT)}
        />
        <Person
          name={EPerson.JAPP}
          isChosen={person === EPerson.JAPP}
          isSpeaking={speaker === EPerson.JAPP}
          choose={() => setPerson(EPerson.JAPP)}
        />
      </Box>
      {isStarted ? (
        <Typography fontWeight={600} color="text.disabled">
          Ask {Names[person]} something!
        </Typography>
      ) : (
        <Button variant="contained" onClick={() => setIsStarted(true)}>
          Enable microphone
        </Button>
      )}
      {!isStarted ? null : conversations.length === 0 ? (
        <Typography>No conversation yet</Typography>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          maxHeight="calc(90vh - 400px)"
          overflow="auto"
          maxWidth="90vw"
          px={1}
          width={800}
          gap={2}
        >
          {conversations.map((conversation, conversationIndex) => (
            <Fragment key={conversationIndex}>
              <Box display="flex" flexDirection="column" gap={0.5}>
                <Typography fontWeight={600} fontSize={12}>
                  {Names[conversation.person]}:
                </Typography>
                <Box
                  gap={0.5}
                  maxWidth={600}
                  width="calc(90vw - 100px)"
                  bgcolor="lightgray"
                  p={1}
                  borderRadius={1}
                >
                  <Typography>{conversation.answerText}</Typography>
                </Box>
              </Box>
              <Box
                alignSelf="flex-end"
                maxWidth={600}
                bgcolor="lightblue"
                p={1}
                borderRadius={1}
                width="calc(90vw - 100px)"
              >
                <Typography>
                  {QuestionMap[conversation.person][conversation.question]}
                </Typography>
              </Box>
            </Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Microphone;
