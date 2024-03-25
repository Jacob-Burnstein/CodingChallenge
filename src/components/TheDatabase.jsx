import React from "react";
import sql from "../assets/images/SQL.png";
import js from "../assets/images/JS.png";

const TheDatabase = () => {
  const postgres = sql;
  const script = js;
  return (
    <div>
      <h1>theDatabase</h1>
      <h2>Part 1</h2>
      <p>
        Here is my SQL solution for the horizontal pattern. I was unable to
        figure out the logic in SQL for the vertical pattern, so I wrote a
        javascript function to demonstrate my ability to think this out.
      </p>
      <img
        className="databaseImg"
        src={postgres}
        alt="SQL solution for horiztonal pattern"
      />
      <p>
        Perhaps one way to solve this would be to write a basic SQL query that
        gets all rows by a specific block number, and then inclue subsequent
        javascript that handles the logic to find the vertical pattern.
      </p>
      <img
        className="databaseImg"
        src={script}
        alt="JavaScript solution for both patterns"
      />
      <h2>Part 2</h2>
      <p>
        Here are some potential problems one might face when working with
        thables as they are described above:
      </p>
      <ul>
        <li>
          These tables don't specify value types, or if they are able to be
          null, so I would add primary keys and unique contraints for each
          table.
        </li>
        <li>
          If one were to add more patterns, it would be more efficient to have
          indidual tables for the vertical and horizontal patterns. One would
          also then need to determine which vertical or horizontal pattern we
          are matching. This is irrelevant now, since there is only one each.
        </li>
        <li>
          These patterns are very time consuming to find, specifically the
          vertical pattern, that requires multiple iterative loops.
        </li>
        <li>
          My current vertical pattern logic doesn't account for variable
          vertical pattern length. In the future, I would implement this logic.
        </li>
      </ul>
    </div>
  );
};

export default TheDatabase;
