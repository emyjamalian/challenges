import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  allLightsOff,
  allLightsOn,
  lightsOnCount,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("all lights off");
          allLightsOff();
          console.log("all lights off");
        }}
        disabled={lightsOnCount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          allLightsOn();
          console.log("all lights on");
        }}
        disabled={lightsOnCount === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
