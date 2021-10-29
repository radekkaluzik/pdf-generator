import {
  ChartKind,
  ChartType,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartTopLevelType,
  ChartThemeColor,
} from 'react-json-chart-builder';

const slug = 'most_used_modules';

const name = 'Most used modules';

const description =
  'The number of job template and task runs, grouped by Ansible module usage.\n\nYou can use this report to find which modules are being used the most across your automation, helping you to check things like organization-wide adoption of purpose-built modules over potentially less performant, catch-all solutions.';

const tableHeaders = [
  { key: 'id', value: 'ID' },
  { key: 'name', value: 'Module name' },
  { key: 'host_task_count', value: 'Tasks count' },
  { key: 'host_task_changed_count', value: 'Changed tasks count' },
  { key: 'host_task_ok_count', value: 'Successful tasks count' },
  { key: 'host_task_failed_count', value: 'Failed tasks count' },
  { key: 'host_task_unreachable_count', value: 'Unreachable tasks count' }
];

const schemaFnc = (
  label,
  y,
  xTickFormat,
) => [
    {
      id: 1,
      kind: ChartKind.wrapper,
      type: ChartTopLevelType.chart,
      parent: null,
      props: {
        height: 500,
        padding: {
          top: 70,
          left: 100,
        },
        domainPadding: {
          y: 25,
        },
        themeColor: ChartThemeColor.multiOrdered,
      },
      xAxis: {
        label: 'Date',
        tickFormat: xTickFormat,
        style: {
          axisLabel: {
            padding: 50,
          },
        },

      },
      yAxis: {
        tickFormat: 'formatNumberAsK',
        showGrid: true,
        label,
        style: {
          axisLabel: {
            padding: 55,
          },
        },
      },
      api: {
        url: '',
        params: {},
      },
      legend: {
        interactive: false,
        orientation: ChartLegendOrientation.vertical,
        position: ChartLegendPosition.right,
      },
    },
    {
      id: 2,
      kind: ChartKind.group,
      parent: 1,
      template: {
        id: 0,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 0,
        props: {
          x: 'created_date',
          y,
        },
      },
    },
  ];

const reportParams = {
  slug,
  name,
  description,
  tableHeaders,
  schemaFnc,
};

export default reportParams;
