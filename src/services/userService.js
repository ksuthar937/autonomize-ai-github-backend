const { default: axios } = require("axios");
const { User } = require("../models/userSchema");

const findUser = async (username) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserFromAPI = async (username) => {
  try {
    const gitUser = await axios(`https://api.github.com/users/${username}`, {
      auth: "ksuthar937",
      Password: "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",
    });
    const data = gitUser?.data;
    return data;
  } catch (error) {
    throw new Error(
      "This username doesn't exist in GitHub! Please provide correct username"
    );
  }
};

const storeUser = async (getGitUser) => {
  try {
    const {
      login,
      id,
      avatar_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    } = getGitUser;

    const crateUser = new User({
      username: login,
      id,
      avatar_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      public_repos,
      followers,
      following,
      created_at,
      updated_at,
    });

    await crateUser.save();
    return crateUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserFromAPI,
  storeUser,
  findUser,
};
