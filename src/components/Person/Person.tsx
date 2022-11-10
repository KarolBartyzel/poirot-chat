import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { EPerson, Names } from "./Person.model";

interface IPerson {
  name: EPerson;
  isChosen: boolean;
  isSpeaking: boolean;
  choose: () => void;
}

const Person = ({ name, isChosen, isSpeaking, choose }: IPerson) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      sx={{
        cursor: "pointer",
        boxSizing: "border-box",
        borderRadius: 1,
        border: `3px solid ${isSpeaking ? "gold" : "white"} `,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={choose}
    >
      <img
        width={300}
        height={300}
        style={{
          borderRadius: "4px",
          objectFit: "cover",
          opacity: isSpeaking || isChosen || isHovered ? 1 : 0.5,
        }}
        src={`photos/${name}.${isHovered ? "gif" : "png"}`}
        alt={name}
      />
      <Typography fontWeight={isChosen || isHovered ? "bold" : "normal"}>
        {Names[name]}
      </Typography>
    </Box>
  );
};

export default Person;
