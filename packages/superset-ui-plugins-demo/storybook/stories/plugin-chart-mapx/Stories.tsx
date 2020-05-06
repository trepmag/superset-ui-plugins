/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import { select } from '@storybook/addon-knobs';
import data from './data';

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
          projectSelect: select(
            'Projects',
            {
              World: 'MX-3ZK-82N-DY8-WU2-IGF',
              'Ecosystem approaches for disaster risk': 'MX-2LD-FBB-58N-ROK-8RH',
              'ECO DRR Afghanistan': 'MX-6ZH-Y46-C7I-AD5-IO1',
            },
            'MX-3ZK-82N-DY8-WU2-IGF',
          ),
        }}
      />
    ),
    storyName: 'Basic',
    storyPath: 'plugin-chart-mapx|MapXChartPlugin',
  },
];
