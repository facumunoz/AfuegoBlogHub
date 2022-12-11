import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ operation - get all comments in Parse class comments
export const getAllComments = () => {
  const Comments = Parse.Object.extend("Comments");
  const query = new Parse.Query(Comments);
  return query.find().then((results) => {
    // returns array of comment objects
    return results;
  });
};