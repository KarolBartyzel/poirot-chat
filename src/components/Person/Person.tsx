import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { EPerson, Names } from "./Person.model";

interface IPerson {
  name: EPerson;
  isChosen: boolean;
  choose: () => void;
}

const Person = ({ name, isChosen, choose }: IPerson) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      sx={{ cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={choose}
    >
      <img
        width={300}
        height={300}
        style={{ objectFit: "cover", opacity: isChosen || isHovered ? 1 : 0.5 }}
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
