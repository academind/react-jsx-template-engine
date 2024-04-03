import { useContext } from 'react';

import { ViewDataContext } from '../../lib/react-engine.js';

export default function Goals() {
  const ctx = useContext(ViewDataContext);
  console.log(ctx);
  return (
    <ul id="goals">
      {ctx.goals.map((goal) => (
        <li key={goal}>{goal}</li>
      ))}
    </ul>
  );
}
