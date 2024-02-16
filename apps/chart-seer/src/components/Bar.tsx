import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import ResizableBox from '../features/resizableBox';
import useDemoConfig from '../features/useDemoConfig';

export default function Bar() {
  const { data, randomizeData } = useDemoConfig({
    series: 3,
    dataType: 'ordinal',
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    [],
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}
