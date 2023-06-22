import { Fragment, useState } from 'react';

import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  async function loadFeedbackHandler(id) {
    // fetch(`/api/feedback/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setFeedbackData(data.feedback);
    //   }); // /api/some-feedback-id
    var a = await fetch(`/api/feedback/${id}`)
    console.log(a)
    var b =  await a.json()
    console.log(b)
    var c = await b
    console.log(c)
    setFeedbackData(c.feedback);
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
