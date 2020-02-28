/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import { select } from '@storybook/addon-knobs';
import data from './data';

const url_default =
  'https://app.mapx.org/static.html?project=MX-YBJ-YYF-08R-UUR-QW6&views=MX-FR3KW-TRWD1-TRE1G&zoomToViews=true&language=en&';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="mapx"
        width={'100%'}
        height={'400px'}
        queryData={{ data }}
        formData={{
          colorScheme: 'd3Category10',
          dateTimeFormat: '%Y-%m-%d',
          numberFormat: '.3s',
          richTooltip: true,
          urlSelect: select(
            'View',
            {
              mapx_view_a: url_default,
              mapx_view_b: 'https://disney.com',
            },
            url_default,
          ),
        }}
      />
    ),
    storyName: 'Mapx',
    storyPath: 'plugin-chart-mapx|MapXChartPlugin',
  },
];
