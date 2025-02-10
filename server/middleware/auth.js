import jwt from "jsonwebtoken";

//if user want to like a post
//if he clicks the like button => we go auth middleware(next) first
//if he is good to go, only then we are going to "like controller"

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")?.[1];
    const isCustomAuth = token?.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      //for google user check, not implemented in my code
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
