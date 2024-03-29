import React from 'react';
import moment from 'moment';
import { useEffect } from 'react';

export default function Widget() {
  useEffect(() => {
    console.log('hooks');
  }, []);
  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'purple',
        color: 'white',
      }}
      data-e2e="APP_3__WIDGET"
    >
      <h2>App 3 Widget</h2>
      <p>
        Using <strong>momentjs</strong> ({moment.version}) for format the date
      </p>
      <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
}
