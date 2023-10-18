import useLagRadar from "../../features/useLagRadar";
import Area from "../Area";
import Band from "../Band";
import Bar from "../Bar";
import BarStacked from "../BarStacked";
import Bubble from "../Bubble";
import CustomStyles from "../CustomStyles";
import DarkMode from "../DarkMode";
import DynamicContainer from "../DynamicContainer";
import InteractionMode from "../InteractionMode";
import Line from "../Line";
import MultipleAxes from "../MultipleAxes";
import Steam from "../Steam";
import BarHorizontal from "../BarHorizontal";
import BarHorizontalStacked from "../BarHorizontalStacked";
import SparkChart from "../SparkChart";
import SyncedCursors from "../SyncedCursors";
import StressTest from "../StressTest";

const components = [
  ["Line", Line],
  ["Bar", Bar],
  ["Bar (Stacked)", BarStacked],
  ["Bar (Horizontal)", BarHorizontal],
  ["Bar (Horizontal + Stacked)", BarHorizontalStacked],
  ["Band", Band],
  ["Area", Area],
  ["Bubble", Bubble],
  ["Steam", Steam],
  ["Spark Chart", SparkChart],
  ["Multiple Axes", MultipleAxes],
  ["Interaction Modes", InteractionMode],
  ["Dark Mode", DarkMode],
  ["Dynamic / Overflow Container", DynamicContainer],
  ["Custom Styles", CustomStyles],
  ["Synced Cursors", SyncedCursors],
  ["Stress Test", StressTest],
] as const;

export type ChartComponents = typeof components;
export type ChartComponent = ChartComponents[number];

export function Chart() {
  useLagRadar();

  return (
    <div>
      {components.map(([label, Comp]) => {
        return (
          <div key={label + ""}>
            <h1>{label}</h1>
            <div>
              <Comp />
            </div>
          </div>
        );
      })}
      <div style={{ height: "50rem" }} />
    </div>
  );
}