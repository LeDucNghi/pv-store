import * as React from "react";

import Rating, { IconContainerProps } from "@mui/material/Rating";

import { Box } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement<any>;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export interface ICustomRatingProps {
  rate: number;
  hover: number;

  onRateChange: (value: number) => void;
  onHoverChange: (value: number) => void;
}

export default function CustomRating({
  rate,
  hover,
  onRateChange,
  onHoverChange,
}: ICustomRatingProps) {
  return (
    <div className="flex flex-wrap">
      <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        getLabelText={getLabelText}
        highlightSelectedOnly
        onChange={(event, newValue) => {
          onRateChange(newValue!);
        }}
        onChangeActive={(event, newHover) => {
          onHoverChange(newHover);
        }}
      />

      {rate !== null && (
        <Box sx={{ ml: 2, fontWeight: 600 }}>
          {labels[hover !== -1 ? hover : rate]}
        </Box>
      )}
    </div>
  );
}

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const labels: { [index: string]: string } = {
  1: "Không thể tưởng tượng được",
  2: "Dở",
  3: "Cũng khá",
  4: "Được",
  5: "Qué đẽ",
};
