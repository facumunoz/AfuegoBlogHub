import { useEffect } from "react";
const Main = () => {
  useEffect(() => {}, []);

  return (
    <div>
      {/* titling elements */}
      <h1 id="NewBlogTitle">New Blog Entry</h1>
      <h3 id="subheadPost">Post a new Afuego Blog Entry.</h3>
      {/* forms and their descriptions*/}
      <form action="">
        {/* blog primary title */}
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        {/* blog subtitle */}
        <label htmlFor="subtitle">Subtitle:</label>
        <br />
        <input type="text" id="subtitle" name="subtitle" />
        <br />
        {/* main blog post content */}
        <label htmlFor="content">Content:</label>
        <br />
        <textarea id="content" name="content" rows="4" cols="50" />
        <br />
        {/* button */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Main;