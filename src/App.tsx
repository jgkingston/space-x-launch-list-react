import React, { useEffect, useState } from 'react';

import { getLaunches } from './api';
import './App.css';
import { QueryHash, Launch } from './types';

const initialQuery: QueryHash = {
  limit: 10,
  offset: 0,
  order: 'asc',
  sort: 'flight_number',
}

const App = () => {
  const [launches, setLaunches] = useState<Launch[]>([])
  const [max, setMax] = useState<number | undefined>(undefined);
  const [query, setQuery] = useState<QueryHash>(initialQuery)

  useEffect(() => {
    getLaunches(query).then((result: Launch[]) => {
      setLaunches(result)
      if (result.length < 10) {
        setMax(query.offset + result.length)
      }
    })
  }, [query.offset, query.order]);

  function handleOffset(offset: number) {
    setQuery((prevState) => ({
      ...prevState,
      offset,
    }))
  }

  function toggleOrder() {
    setQuery((prevState) => ({
      ...prevState,
      order:  prevState.order === 'asc'
        ? 'desc'
        : 'asc',
    }))
  }

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <div
        style={{
          borderRadius: 4,
          boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
          overflowY: 'scroll',
        }}
      >
        <table>
          <thead>
            <tr>
              <th
                className="row-flight-number"
              >
                <a
                  className="sort-by"
                  onClick={toggleOrder}
                >
                  Flight Number
                </a>
              </th>
              <th>
                Launch Year
              </th>
              <th>
                Rocket Name
              </th>
              <th
                className="row-details"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            { launches.map((launch) => (
              <tr
                key={launch.flight_number}
                className={!!launch.links.presskit ? 'clickable-row': undefined}
                data-href={launch.links.presskit}
                onClick={(event) => {
                  const location = event.currentTarget.getAttribute('data-href');
                  if (!!location) {
                    window.open(location);
                  }
                }}
              >
                <td>
                  {launch.flight_number}
                </td>
                <td>
                  {launch.launch_year}
                </td>
                <td>
                  {launch.rocket.rocket_name}
                </td>
                <td>
                  {launch.details}
                </td>
              </tr>
            )) }
          </tbody>
          <tfoot>
              <tr>
                <td
                  colSpan={4}
                >
                  <div
                    className="pagination"
                  >
                    <button
                      disabled={query.offset < query.limit}
                      onClick={() => handleOffset(query.offset - query.limit)}
                    >
                      Previous
                    </button>
                    <button
                      disabled={!!max && query.offset >= max - query.limit}
                      onClick={() => handleOffset(query.offset + query.limit)}
                    >
                      Next
                    </button>
                  </div>
                </td>
              </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default App;
