import CardBarChart from '@/components/Cards/CardBarChart';
import { connect } from 'react-redux';

const mapStateToProps = () => ({
  positive: 80,
  negative: 80,
  total: 130,
});

export default connect(mapStateToProps)(CardBarChart);
