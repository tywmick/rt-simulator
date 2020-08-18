import React, { useContext } from "react";
import { Form, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import TeX from "@matejmazur/react-katex";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { DispatchContext } from "../reducer";
import IconButton from "./IconButton";

export default function RtSlider({ rt, animating }) {
  const dispatch = useContext(DispatchContext);

  return (
    <Form.Group
      as={Form.Row}
      controlId="rtSlider"
      className="align-items-center mb-2"
    >
      <Form.Label column xs="auto">
        <TeX>R_t</TeX> slider
      </Form.Label>
      <Col>
        <RangeSlider
          inputProps={{ id: "rtSlider" }}
          min={0.5}
          step={0.01}
          max={1.5}
          value={rt}
          tooltipPlacement="top"
          onChange={(e) => dispatch({ type: "setRt", payload: e.target.value })}
        />
      </Col>
      <Col xs="auto">
        <IconButton
          variant="primary"
          aria-label={`${animating ? "Stop" : "Resume"} animation`}
          onClick={() => dispatch({ type: "toggleAnimation" })}
          icon={animating ? faPause : faPlay}
        />
      </Col>
    </Form.Group>
  );
}