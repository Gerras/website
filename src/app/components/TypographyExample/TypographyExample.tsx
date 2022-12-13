import React from "react";
import Typography from "../../../design-library/Typography/Typography";

export const TypographyExample: React.FC = () => {
  return (
    <>
      <Typography variant="p" gutterBottom>
        Hi this is kevins personal website
      </Typography>
      <Typography variant="h1" gutterBottom>
        h1. Header type 1
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Header type 2
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Header type 3
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Header type 4
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Header type 5
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Header type 6
      </Typography>
      <Typography variant="p" gutterBottom>
        This is a paragraph!!!!
      </Typography>
    </>
  );
};
