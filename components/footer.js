import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import TeX from "@matejmazur/react-katex";
import useCovidData from "../hooks/use-covid-data";
import CCLicense from "./cc-license";

export default function Footer({ methodologyLink }) {
  const { covidDataLoaded } = useCovidData();

  return (
    <footer>
      <Container className="mb-5">
        <p>
          Built by <a href="https://tymick.me">Ty Mick</a>, a data scientist who
          happens to be looking for a great job right now. ❤️
        </p>

        {covidDataLoaded && (
          <p>
            United States <TeX>R_t</TeX> estimates provided by{" "}
            <a href="https://rt.live/">
              R<sub>t</sub> Live
            </a>
            , with case count data from{" "}
            <a href="https://covidtracking.com/">The COVID Tracking Project</a>.
          </p>
        )}

        {methodologyLink && (
          <p>
            If you&rsquo;d like to know more about how this simulation works,
            check out the{" "}
            <Link href="/methodology">
              <a>methodology page</a>
            </Link>{" "}
            (or head straight to{" "}
            <a href="https://github.com/tywmick/rt-simulator">the source</a>).
          </p>
        )}
      </Container>

      <CCLicense />
    </footer>
  );
}
