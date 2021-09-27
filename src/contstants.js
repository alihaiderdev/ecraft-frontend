export const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v1' : `https://ecraft-mern.herokuapp.com/api/v1`; //TODO: needs to modify

//yarn start -> Node_env = development
//yarn build -> Node_env = production
//yarn test -> Node_env = development
