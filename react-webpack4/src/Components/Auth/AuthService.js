import Parse from "parse";

// used in auth register component which completes a full registration of user info
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
// function that logs in user and awaits success response
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
// meant to serve as function call which checks whether or not user is authenticated currently
export const checkUser = () => {
  {return Parse.User.current()?.authenticated;}
};

export const logoutUser = async function () {
  try {
    await Parse.User.logOut();
    // To verify that current user is now empty, currentAsync can be used
    const currentUser = await Parse.User.current();
    if (currentUser === null) {
      return true;
    }
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  }
};