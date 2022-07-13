import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Position, postitionOptions, SuccessMetric } from "../api/playerTypes";
import MultiRangeSlider from "./MultiRangeSlider";

const ControlBoardStyled = styled.form`
  border: 1px solid red;
  .slidecontainer {
    width: 100%;
  }

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`;

interface ControlBoardProps {
  position: Position;
  successMetric: SuccessMetric;
  setSuccessMetric: (successMetric: SuccessMetric) => void;
  setPosition: (position: Position) => void;
}

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
    <>
      <ControlBoardStyled onSubmit={formSubmission}>
        <select value={position} onChange={handlePositionUpdate}>
          {postitionOptions.map((position: Position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
        <select value={successMetric} onChange={handleSuccessMetricUpdate}>
          <option value="pro_bowls">Pro Bowls</option>
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
        <MultiRangeSlider
          min={1985}
          max={2022}
          onChange={() => console.log("stuff")}
        />
        <button type="submit">Apply</button>
      </ControlBoardStyled>
    </>
  );
};

export default ControlBoard;
