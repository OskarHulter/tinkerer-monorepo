import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import { JSONTree } from 'react-json-tree';
import ResizableBox from '../features/resizableBox';
import useDemoConfig from '../features/useDemoConfig';

export default function GroupingModes() {
  const [{ clicked, focused }, setState] = React.useState({
    clicked: null,
    focused: null,
  });

  const { data, interactionMode, elementType, randomizeData, Options } =
    useDemoConfig({
      series: 10,
      show: ['elementType', 'interactionMode'],
    });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as Date,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        elementType,
      },
    ],
    [elementType],
  );

  return (
    <>
      {Options}
      <br />
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <em>Voronoi is shown for demonstration purposes</em>
      <br />
      <br />
      <ResizableBox>
        <Chart
          options={{
            data,
            interactionMode,
            primaryAxis,
            secondaryAxes,
            showVoronoi: true,
            onClickDatum: (datum) => {
              if (datum) setState((old) => ({ ...old, clicked: datum as any }));
            },
            onFocusDatum: (datum) => {
              if (datum) setState((old) => ({ ...old, focused: datum as any }));
            },
          }}
        />
      </ResizableBox>
      <br />
      <div>Focused Datum:</div>
      <JSONTree hideRoot data={focused} />
      <div>Clicked Datum:</div>
      <JSONTree hideRoot data={clicked} />
    </>
  );
}
