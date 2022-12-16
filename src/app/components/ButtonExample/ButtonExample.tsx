import React from "react";
import Button from "../../../design-library/components/Button/Button";

const ButtonExample: React.FC = () => {
  return (
    <>
      <div>
        <Button type="primary" size="sm">
          small
        </Button>
        <Button type="primary" size="md">
          Medium
        </Button>
        <Button type="primary" size="lg">
          Large
        </Button>
      </div>
      <div>
        <Button type="secondary" size="sm">
          small
        </Button>
        <Button type="secondary" size="md">
          Medium
        </Button>
        <Button type="secondary" size="lg">
          Large
        </Button>
      </div>
      <div>
        <Button type="tertiary" size="sm">
          small
        </Button>
        <Button type="tertiary" size="md">
          Medium
        </Button>
        <Button type="tertiary" size="lg">
          Large
        </Button>
      </div>
    </>
  );
};

export default ButtonExample;
