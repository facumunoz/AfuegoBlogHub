import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ operation - get all posts in Parse class BlogPosts
export const getAllPosts = () => {
  const Posts = Parse.Object.extend("BlogPosts");
  const query = new Parse.Query(Posts);
  return query.find().then((results) => {
    // returns array of Blog Post objects
    return results;
  });
};