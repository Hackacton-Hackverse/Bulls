import { Tweet } from "./composant/Tweet.jsx";
import { useState } from "react";

let defaultTweets = [
  {
    id: 0,
    name: 'melvyn',
    content: 'vl',
    like: 1111,
  },
  {
    id: 1,
    name: 'uriel',
    content: 'jun',
    like: 1111,
  },
  {
    id: 2,
    name: 'claude',
    content: 'fun',
    like: 1111,
  }
];

function App() {

  const [tweets, setTweets] = useState(defaultTweets);

  const onDelete = (tweetId) => {
    setTweets((prevTweets) =>
      prevTweets.filter((tweet) => tweet.id !== tweetId)
    );
  };

  const handleSubmit= (event)=>{
      event.preventDefault();

      const name= event.target.name.value;
      const content = event.target.content.value;
      const newTweet={
          id:(tweets[tweets.length-1]?.id+1)??0,
          name,
          content,
          like:0
      };
      addtweet(newTweet)



  };
  const addtweet = (tweet) => {
  setTweets([...tweets, tweet]);
};

  const onLike = (tweetId) => {

    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, like: tweet.like + 1 } : tweet
      )
    );
  };

  let tweetlist = tweets.map((tweet) => {
    return (
      <Tweet
        key={tweet.id}
        id={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like}
        onDelete={() => onDelete(tweet.id)}
        onLike={() => onLike(tweet.id)}
      />
    );
  });

  return (
      <div>
          <form onSubmit={handleSubmit} className="tweet-form">
              <h4> New tweet</h4>
              <input placeholder="name" type="text" name="name"/>
              <input placeholder="content" type="content" name="content"/>
              <input type="submit"/>
          </form>
          <div className="tweet-container">
          {tweetlist}
          </div>

      </div>

  );
}

export default App;