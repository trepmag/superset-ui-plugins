import MapXChartPlugin from '../../../../superset-ui-plugin-chart-mapx/src';
import Stories from './Stories';

new MapXChartPlugin().configure({ key: 'mapx' }).register();

export default {
  examples: [...Stories],
};
