import React from "react";
import "./Path.css";
import type { WhereHePlayer } from "../../../Models/WhereHePlayer";

type PathProps = {
  player: WhereHePlayer;
};

export type TeamColor = {
  primary: string;
  secondary: string;
};

export const TeamColors: Record<string, TeamColor> = {
  Cardinals:   { primary: "#97233F", secondary: "#FFB612" },
  Falcons:     { primary: "#A71930", secondary: "#000000" },
  Ravens:      { primary: "#241773", secondary: "#9E7C0C" },
  Bills:       { primary: "#00338D", secondary: "#C60C30" },
  Panthers:    { primary: "#0085CA", secondary: "#101820" },
  Bears:       { primary: "#0B162A", secondary: "#C83803" },
  Bengals:     { primary: "#FB4F14", secondary: "#000000" },
  Browns:      { primary: "#311D00", secondary: "#FF3C00" },
  Cowboys:     { primary: "#041E42", secondary: "#869397" },
  Broncos:     { primary: "#002244", secondary: "#FB4F14" },
  Lions:       { primary: "#0076B6", secondary: "#B0B7BC" },
  Packers:     { primary: "#203731", secondary: "#FFB612" },
  Texans:      { primary: "#03202F", secondary: "#A71930" },
  Colts:       { primary: "#002C5F", secondary: "#A2AAAD" },
  Jaguars:     { primary: "#006778", secondary: "#9F792C" },
  Chiefs:      { primary: "#E31837", secondary: "#FFB612" },
  Raiders:     { primary: "#000000", secondary: "#A5ACAF" },
  Chargers:    { primary: "#0080C6", secondary: "#FFC20E" },
  Rams:        { primary: "#003594", secondary: "#FFD100" },
  Dolphins:    { primary: "#008E97", secondary: "#F58220" },
  Vikings:     { primary: "#4F2683", secondary: "#FFC62F" },
  Patriots:    { primary: "#002244", secondary: "#C60C30" },
  Saints:      { primary: "#D3BC8D", secondary: "#101820" },
  Giants:      { primary: "#0B2265", secondary: "#A71930" },
  Jets:        { primary: "#125740", secondary: "#FFFFFF" },
  Eagles:      { primary: "#004C54", secondary: "#A5ACAF" },
  Steelers:    { primary: "#101820", secondary: "#FFB612" },
  "49ers":       { primary: "#AA0000", secondary: "#B3995D" },
  Seahawks:    { primary: "#002244", secondary: "#69BE28" },
  Buccaneers:  { primary: "#D50A0A", secondary: "#FF7900" },
  Titans:      { primary: "#0C2340", secondary: "#4B92DB" },
  Commanders:  { primary: "#5A1414", secondary: "#FFB612" },
};

function Path({ player }: PathProps) {
  return (
    <div className="path">
      <ul className="path-track" aria-label="Career path">
        {player.teams.map((team, i) => {
          const initials = team.name
            .split(/\s+/)
            .map(w => w[0])
            .join("")
            .slice(0, 3)
            .toUpperCase();

          // fallback if team isn't in TeamColors
          const colors = TeamColors[team.name] ?? { primary: "#1f2937", secondary: "#2563eb" };

          return (
            <li className="path-node" key={`${team.name}-${team.year}-${i}`}>
              <div
                className="node-pill"
                title={`${team.name} • ${team.year}`}
                style={{ background: colors.primary }}
              >
                <div
                  className="node-badge"
                  aria-hidden
                  style={{ background: colors.secondary }}
                >
                  {initials}
                </div>
                <div className="node-text">
                  <h4 className="node-team">{team.name}</h4>
                  <span className="node-years">{team.year}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Path;