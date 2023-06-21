import { createStructuredSelector } from "reselect";
import { selectSortedByCatergoryFeedBackObj } from "@/redux/admin/adminSelectors";
import { test } from "@/redux/admin/adminSelectors";
import { connect } from "react-redux";
import CardSummary from "@/components/Cards/CardSummary";

const mapStateToProps = createStructuredSelector({
  feedbackObjByCategory: selectSortedByCatergoryFeedBackObj,
});

export default connect(mapStateToProps)(CardSummary);
