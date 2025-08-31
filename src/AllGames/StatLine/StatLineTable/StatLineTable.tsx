// StatLineTable.tsx
import './StatLineTable.css'
import type { StatLinePlayer } from '../../../Models/StatLine'
import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';

// register once (module scope)
ModuleRegistry.registerModules([AllCommunityModule]);

type StatLineTableProps = {
  player: StatLinePlayer;
  guesses: number;
  isGameOver: boolean;
};

// row shape for the grid
type Row = {
  year: number;
  team: string;
  position: string;
  name: string;
  statLine: string;
  number: string;
};

function StatLineTable({ player, guesses, isGameOver }: StatLineTableProps) {
  const playerName = `${player.firstName} ${player.lastName}`;

  function displayName(name: string) {
    let nameParts = name.split(' ');
    if(isGameOver) {
        return name;
    } else {
      return '????';
    }
}
    function displayPosition(position: string) {
        if (isGameOver) {
            return position;
        }
        if(position === 'TE' || position === 'WR') {
            if(guesses < 2) {
                return '???';
            } else if (guesses < 3) {
                return position;
            }
        } else {
            return position;
        }
        return position;
    }

  function displayTeam(team: string, division: string) {
    if (guesses < 1) {
      return '???';
    } else if (guesses < 2) {
      return division.split(' ')[0];
    } else if (guesses < 3) {
      return division;
    }
    return team;
}

function displayNumber(number: number) {
  if(isGameOver) {
    return String(number);
  }
    if (guesses <= 1) {
        return '???';
    } else {
        return String(number);
    }
}

  const rowData: Row[] = useMemo(
    () => [{ year: player.year, team: displayTeam(player.team, player.division), position: displayPosition(player.position), name: displayName(playerName), statLine: player.statLine, number: displayNumber(player.number) }],
    [player, playerName, guesses]
  );

  const colDefs: ColDef<Row>[] = useMemo(
    () => [
      { field: 'year' , headerName: 'Year', maxWidth: 100 },
      { field: 'team' , headerName: 'Team', maxWidth: 150 },
      { field: 'position' , headerName: 'Position', maxWidth: 100 },
      { field: 'name' , headerName: 'Name', maxWidth: 200 },
      { field: 'statLine' , headerName: 'Stat Line', minWidth: 200 },
      { field: 'number' , headerName: 'Number', maxWidth: 100 },
    ],
    []
  );

  const defaultColDef: ColDef<Row> = useMemo(
    () => ({ flex: 1, resizable: true, sortable: true }),
    []
  );

  return (
    <div className="statline-table">
      <div style={{ height: 100, width: 1100 }}>
        <AgGridReact<Row>
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

export default StatLineTable;