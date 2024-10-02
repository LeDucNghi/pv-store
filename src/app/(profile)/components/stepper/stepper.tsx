import "./stepper.scss";

import * as React from "react";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import DoneIcon from "@mui/icons-material/Done";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { Typography } from "@mui/material";
import { deliveryTrackingSteps } from "@/constants";
import moment from "moment";
import { styled } from "@mui/material/styles";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      },
    },
  ],
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<any> } = {
    1: <PendingActionsIcon />,
    2: <LocalShippingIcon />,
    3: <DoneIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export interface ICustomizedSteppers {
  step: number;
  isErrorStep?: number;
  errorMsg?: string;
  time: Date;
}

export default function CustomizedSteppers({
  step,
  isErrorStep,
  errorMsg,
  time,
}: ICustomizedSteppers) {
  const isStepFailed = (step: number) => {
    return step === isErrorStep;
  };

  return (
    <Stack className="stepper-container" sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={step}
        connector={<ColorlibConnector />}
        className="stepper-wrapper"
      >
        {deliveryTrackingSteps.slice(0, 3).map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                {errorMsg}
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step className="inner-step" key={index}>
              <StepLabel
                className="flex flex-col"
                StepIconComponent={ColorlibStepIcon}
              >
                <p className={`step-status ${step >= index && "active"}`}>
                  {label.statusValue}
                </p>

                {step >= index && <p>{moment(time).format("lll")}</p>}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Stack>
  );
}
