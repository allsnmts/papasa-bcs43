// nagpapasa ng data for the adminheaderstats
// import { positiveCount, negativeCount } from '../../pages/api/count';
import { createSelector } from "reselect";


const selectAdmin = (state) => state.admin;

export const selectFeedbackArr = createSelector(
  [selectAdmin],
  (admin) => admin.feedbackArr
);

export const selectStudent = createSelector(
  [selectAdmin],
  (admin) => admin.student
);

const categories = ["positive", "negative", "total"];

export const selectSortedByCatergoryFeedBackObj = () => ({
  positive: 50,
  negative: 80,
  total: 130,
});


export const selectAllCategoriesExceptTotalObj = createSelector(
  [selectSortedByCatergoryFeedBackObj],
  (feedbackObj) => {
    const { total, ...rest } = feedbackObj;

    return rest;
  }
);




// let totalSum = 0; // Declare and initialize totalSum to 0
// let positiveCount = 0;
// let negativeCount = 0;
// if (typeof totalSum === 'undefined') {
//   totalSum = 0;
// } else {
//   totalSum = positiveCount + negativeCount;
// }
// const totalNumbers = {
//   // positive: positiveCount,
//   // negative: negativeCount,
//   // total: totalSum,
//   positive: 80,
//   negative: 80,
//   total: 160,
// };

// export const selectSortedByCatergoryFeedBackObj = createSelector(
//   [selectFeedbackArr],
//   (feedbackArr) => {
//     // const updatedFeedbackArr = [...feedbackArr]; // Create a shallow copy of the array

//     // Filter out the excess elements for positive and negative categories
//     // const positiveFeedbackArr = updatedFeedbackArr.filter(
//     //   (d) => d.feedbackCategory.toLowerCase() === "positive"
//     // );

//     // const negativeFeedbackArr = updatedFeedbackArr.filter(
//     //   (d) => d.feedbackCategory.toLowerCase() === "negative"
//     // ).slice(0, totalNumbers.negative);

//     return {
//       // positive: positiveFeedbackArr.slice(0, totalNumbers.positive),
//       // negative: negativeFeedbackArr,
//       // total: feedbackArr,
//       positive: Array(80),
//       negative: Array(80),
//       total: Array(160),
//     };
//   }
// );


// const summary = ["positive", "negative", "total"];

// export const test = createSelector(
//   [selectFeedbackArr],
//   (feedbackArr) =>
//     summary.reduce(
//       (obj, category) => {
//         if (category.toLowerCase() === "total") {
//           obj[category] = feedbackArr;
//         } else {
//           obj[category] = feedbackArr.filter(
//             (d) => category === d.feedbackCategory.toLowerCase()
//           );
//           if (obj[category].length > totalNumbers[category.toLowerCase()]) {
//             obj[category] = obj[category].slice(0, totalNumbers[category.toLowerCase()]);
//           }
//         }
//         return obj;
//       },
//       {}
//     )
// );

