import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Position,
  postitionOptions,
  SuccessMetric,
} from "../../api/playerTypes";

interface ControlBoardProps {
  position: Position;
  successMetric: SuccessMetric;
  setSuccessMetric: (successMetric: SuccessMetric) => void;
  setPosition: (position: Position) => void;
}

const ControlBoardStyled = styled.nav`
  border: 5px solid green;
  width: 100%;
`;

const ControlBoard: React.FC<ControlBoardProps> = ({
  position,
  successMetric,
  setPosition,
  setSuccessMetric,
}) => {
  function handlePositionUpdate(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    event.preventDefault();
    setPosition(event.target.value as Position);
  }

  function handleSuccessMetricUpdate(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    event.preventDefault();
    setSuccessMetric(event.target.value as SuccessMetric);
  }

  function formSubmission(event: React.FormEvent): void {
    event.preventDefault();
  }

  return (
    <ControlBoardStyled>
      <form onSubmit={formSubmission}>
        <select value={position} onChange={handlePositionUpdate}>
          {postitionOptions.map((position: Position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
        <select value={successMetric} onChange={handleSuccessMetricUpdate}>
          <option value="pro_bowls">Total Pro Bowls</option>
          <option value="pro_bowls_per_player">Pro Bowls per Player</option>
          <option value="first_team_all_pro">First Team All Pro</option>
          <option value="years_as_primary_starter">
            Years as Primary Starter
          </option>
          <option value="weighted_career_approximate_value">
            Weighted Approximate Value
          </option>
          <option value="value_for_draft_team">
            Approximate Value for Draft Team
          </option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </ControlBoardStyled>
  );
};

export default ControlBoard;
