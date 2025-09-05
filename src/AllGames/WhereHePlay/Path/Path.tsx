import React from "react";
import "./Path.css";
import type { WhereHePlayer } from "../../../Models/WhereHePlayer";

type PathProps = {
  player: WhereHePlayer;
};

function Path({ player }: PathProps) {
  return (
    <div className="path">
      <ul className="path-track" aria-label="Career path">
        {player.teams.map((team, i) => {
          // Derive initials nicely (e.g., “NYJ”, “GB”)
          const initials = team.name
            .split(/\s+/)
            .map(w => w[0])
            .join("")
            .slice(0, 3)
            .toUpperCase();

          return (
            <li className="path-node" key={`${team.name}-${team.year}-${i}`}>
              <div className="node-pill" title={`${team.name} • ${team.year}`}>
                <div className="node-badge" aria-hidden>{initials}</div>
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