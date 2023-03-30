export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type IAlarm = {
  __typename?: 'Alarm';
  comments: IComment;
  id: Scalars['String'];
  isAlarm: Scalars['Boolean'];
  users: IUser;
};

export type IBoard = {
  __typename?: 'Board';
  area: Scalars['String'];
  boardImg: Scalars['String'];
  comments: Array<IComment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endPoint: Scalars['String'];
  id: Scalars['String'];
  like: Scalars['Int'];
  personalMapData: IPersonalMapData;
  startPoint: Scalars['String'];
  title: Scalars['String'];
  user: IUser;
};

export type IBoardReturn = {
  __typename?: 'BoardReturn';
  boardImg?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<IComment>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endPoint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  personalMapData?: Maybe<Array<IRestaurantBoardInfo>>;
  startPoint?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IComment = {
  __typename?: 'Comment';
  alarms: Array<IAlarm>;
  board: IBoard;
  comment: Scalars['String'];
  id: Scalars['String'];
  replies: Array<IReply>;
};

export type ICreateBoardInput = {
  area: Scalars['String'];
  boardImg: Scalars['String'];
  createdAt?: Scalars['DateTime'];
  endPoint: Scalars['String'];
  info: Array<IInfoInput>;
  like: Scalars['Int'];
  startPoint: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  comment: Scalars['String'];
};

export type ICreateReplyInput = {
  commentId: Scalars['String'];
  reply: Scalars['String'];
};

export type ICreateReservationInput = {
  division: Scalars['String'];
  reservation_time: Scalars['Int'];
  restaurantId: Scalars['String'];
  table: Scalars['Int'];
  time: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type IFetchBoardsBySectionInput = {
  area: Scalars['String'];
  endPoint?: InputMaybe<Scalars['String']>;
  startPoint: Scalars['String'];
};

export type IInfoInput = {
  imgUrl: Scalars['String'];
  location: ILocationInput;
  recommend: Scalars['String'];
  restaurantName: Scalars['String'];
};

export type ILocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type ILocationObject = {
  __typename?: 'LocationObject';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type ILoginAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  checkEmail: Scalars['String'];
  createBoard: IBoardReturn;
  createComment: IComment;
  createReply: IReply;
  createReservation: IReservation;
  createUser: IUser;
  deleteBoard: Scalars['String'];
  deleteReply: Scalars['String'];
  deleteReservation: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  toggleLike: Scalars['String'];
  updateComment: IComment;
  updateReply: IReply;
  updateUser: IUser;
};


export type IMutationCheckEmailArgs = {
  email: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateReplyArgs = {
  createReplyInput: ICreateReplyInput;
};


export type IMutationCreateReservationArgs = {
  createReservationinput: ICreateReservationInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteReplyArgs = {
  replyId: Scalars['String'];
};


export type IMutationDeleteReservationArgs = {
  restaurant_id: Scalars['String'];
};


export type IMutationLoginArgs = {
  loginAuthInput: ILoginAuthInput;
};


export type IMutationToggleLikeArgs = {
  toggleLikeInput: IToggleLikeInput;
};


export type IMutationUpdateCommentArgs = {
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateReplyArgs = {
  updateReplyInput: IUpdateReplyInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IPersonalMapData = {
  __typename?: 'PersonalMapData';
  board: IBoard;
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  recommend: Scalars['String'];
  restaurantId: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoardReturn;
  fetchBoardsByArea: Array<IBoardReturn>;
  fetchBoardsBySection: Array<IBoardReturn>;
  fetchLoginUser: Scalars['String'];
  fetchMyBoard: Array<IBoardReturn>;
  fetchMyLikeBoard: Array<IBoardReturn>;
  fetchReply: IReply;
  fetchUser: IUser;
  isValidNickname: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsByAreaArgs = {
  area: Scalars['String'];
};


export type IQueryFetchBoardsBySectionArgs = {
  fetchBoardsWithSectionInput: IFetchBoardsBySectionInput;
};


export type IQueryFetchReplyArgs = {
  replyId: Scalars['String'];
};


export type IQueryIsValidNicknameArgs = {
  nickname: Scalars['String'];
};

export type IReply = {
  __typename?: 'Reply';
  comments: IComment;
  id: Scalars['String'];
  reply: Scalars['String'];
};

export type IReservation = {
  __typename?: 'Reservation';
  id: Scalars['String'];
  reservation_time: Scalars['Int'];
  restaurant_id: Scalars['String'];
  table: Scalars['Int'];
  time: Scalars['String'];
  users: IUser;
};

export type IRestaurantBoardInfo = {
  __typename?: 'RestaurantBoardInfo';
  address?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  location?: Maybe<ILocationObject>;
  rating?: Maybe<Scalars['String']>;
  recommend?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['String']>;
  restaurantName?: Maybe<Scalars['String']>;
};

export type IToggleLikeInput = {
  boardId: Scalars['String'];
  isLike: Scalars['Boolean'];
};

export type IUpdateCommentInput = {
  comment: Scalars['String'];
  commentId: Scalars['String'];
};

export type IUpdateReplyInput = {
  reply: Scalars['String'];
  replyId: Scalars['String'];
};

export type IUpdateUserInput = {
  password?: InputMaybe<Scalars['String']>;
  userImg?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  alarms: Array<IAlarm>;
  boards: Array<IBoard>;
  email: Scalars['String'];
  id: Scalars['String'];
  nickname: Scalars['String'];
  reservations: Array<IReservation>;
  restaurant: Array<IUserReservationRestaurantrestaurant>;
  userImg: Scalars['String'];
};

export type IUserReservationRestaurantLocation = {
  __typename?: 'UserReservationRestaurantLocation';
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type IUserReservationRestaurantrestaurant = {
  __typename?: 'UserReservationRestaurantrestaurant';
  _id: Scalars['String'];
  address: Scalars['String'];
  location: IUserReservationRestaurantLocation;
  rating: Scalars['String'];
  restaurantName: Scalars['String'];
};
