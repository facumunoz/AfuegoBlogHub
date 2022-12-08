import React from "react";

const AuthSocials = ({ socials, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {/* if user is not logged in, then include more inputs for registration */}
    <div>
        <div className="form-group">
          <label>Instagram</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="instagram-input"
            value={socials.instagram}
            onChange={onChange}
            name="instagram"
            placeholder="Instagram"
          />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="linkedin-input"
            value={socials.linkedin}
            onChange={onChange}
            name="linkedin"
            placeholder="LinkedIn"
          />
        </div>
        <div className="form-group">
          <label>Youtube</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="youtube-input"
            value={socials.youtube}
            onChange={onChange}
            name="youtube"
            placeholder="Youtube"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
  );
};

export default AuthSocials;
