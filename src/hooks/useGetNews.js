const { useState, useEffect } = require("react");

const useGetNews = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const rssFeed = require("../rss/news.json");

  useEffect(() => {
    console.log(rssFeed.rss.channel);
    const feed = rssFeed.rss.channel;
    setImage(feed.image.url);
    setTitle(feed.item[0].title.__cdata);
    setDescription(feed.item[0].description.__cdata);
  }, []);
  useEffect(() => {
    console.log(image, title, description);
  }, [image, title, description]);

  return { image, title, description };
};

export default useGetNews;
