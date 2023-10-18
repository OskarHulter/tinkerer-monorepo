import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import ResizableBox from '../features/resizableBox';
import useDemoConfig from '../features/useDemoConfig';

export default function BarHorizontalStacked() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: 'ordinal',
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]['data'][number]>
  >(
    () => ({
      position: 'left',
      getValue: (datum) => datum.primary,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]['data'][number]>[]
  >(
    () => [
      {
        position: 'bottom',
        getValue: (datum) => datum.secondary,
        stacked: true,
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
