import PostSummaryListItem from './PostSummaryItem';
import posts from './posts.json';

const PostSummaryList = () => {
  return (
    <>
      {posts.map(post => <PostSummaryListItem post={post} key={post._id}/>)}
    </>
  );
};
export default PostSummaryList;
