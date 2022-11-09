import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useAnswers from "../../hooks/useAnswers";
import useSpeech from "../../hooks/useSpeech";
import Person from "../Person";
import { EPerson } from "../Person/Person.model";

const Microphone = () => {
  const { inProgress, text, start, stop } = useSpeech();
  const [person, setPerson] = useState<EPerson>(EPerson.POIROT);
  const answer = useAnswers(person);

  useEffect(() => {
    if (text) {
      answer(text);
    }
  }, [answer, text]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      gap={2}
    >
      <Box display="flex" gap={2}>
        <Person
          name={EPerson.POIROT}
          isChosen={person === EPerson.POIROT}
          choose={() => setPerson(EPerson.POIROT)}
        />
        <Person
          name={EPerson.HASTINGS}
          isChosen={person === EPerson.HASTINGS}
          choose={() => setPerson(EPerson.HASTINGS)}
        />
        <Person
          name={EPerson.JAPP}
          isChosen={person === EPerson.JAPP}
          choose={() => setPerson(EPerson.JAPP)}
        />
      </Box>
      {text && (
        <Typography>
          Question: <b>{text}?</b>
        </Typography>
      )}
      {inProgress ? (
        <Button variant="contained" onClick={stop}>
          Finish
        </Button>
      ) : (
        <Button variant="contained" onClick={start}>
          Ask Something
        </Button>
      )}
    </Box>
  );
};

export default Microphone;
