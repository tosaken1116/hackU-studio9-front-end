/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Status: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Comment" */
export type Comment = {
  __typename?: 'Comment';
  UserEmail: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  ideaID: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "Comment" */
export type Comment_Aggregate = {
  __typename?: 'Comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "Comment" */
export type Comment_Aggregate_Fields = {
  __typename?: 'Comment_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
};


/** aggregate fields of "Comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  UserEmail?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  ideaID?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentPkey = 'Comment_pkey'
}

/** input type for inserting data into table "Comment" */
export type Comment_Insert_Input = {
  UserEmail?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  ideaID?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: 'Comment_max_fields';
  UserEmail?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  ideaID?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: 'Comment_min_fields';
  UserEmail?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  ideaID?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Comment" */
export type Comment_Mutation_Response = {
  __typename?: 'Comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** on_conflict condition type for table "Comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "Comment". */
export type Comment_Order_By = {
  UserEmail?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ideaID?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Comment */
export type Comment_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Comment" */
export enum Comment_Select_Column {
  /** column name */
  UserEmail = 'UserEmail',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdeaId = 'ideaID',
  /** column name */
  Message = 'message',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Comment" */
export type Comment_Set_Input = {
  UserEmail?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  ideaID?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Comment" */
export type Comment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comment_Stream_Cursor_Value_Input = {
  UserEmail?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  ideaID?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Comment" */
export enum Comment_Update_Column {
  /** column name */
  UserEmail = 'UserEmail',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdeaId = 'ideaID',
  /** column name */
  Message = 'message',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Comment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comment_Bool_Exp;
};

/** columns and relationships of "Idea" */
export type Idea = {
  __typename?: 'Idea';
  author?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  lineID: Scalars['String'];
  status: Scalars['Status'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamp']>;
  userEmail?: Maybe<Scalars['String']>;
  views: Scalars['Int'];
};

/** aggregated selection of "Idea" */
export type Idea_Aggregate = {
  __typename?: 'Idea_aggregate';
  aggregate?: Maybe<Idea_Aggregate_Fields>;
  nodes: Array<Idea>;
};

/** aggregate fields of "Idea" */
export type Idea_Aggregate_Fields = {
  __typename?: 'Idea_aggregate_fields';
  avg?: Maybe<Idea_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Idea_Max_Fields>;
  min?: Maybe<Idea_Min_Fields>;
  stddev?: Maybe<Idea_Stddev_Fields>;
  stddev_pop?: Maybe<Idea_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Idea_Stddev_Samp_Fields>;
  sum?: Maybe<Idea_Sum_Fields>;
  var_pop?: Maybe<Idea_Var_Pop_Fields>;
  var_samp?: Maybe<Idea_Var_Samp_Fields>;
  variance?: Maybe<Idea_Variance_Fields>;
};


/** aggregate fields of "Idea" */
export type Idea_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Idea_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Idea_Avg_Fields = {
  __typename?: 'Idea_avg_fields';
  views?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Idea". All fields are combined with a logical 'AND'. */
export type Idea_Bool_Exp = {
  _and?: InputMaybe<Array<Idea_Bool_Exp>>;
  _not?: InputMaybe<Idea_Bool_Exp>;
  _or?: InputMaybe<Array<Idea_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  caption?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lineID?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Status_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
  views?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Idea" */
export enum Idea_Constraint {
  /** unique or primary key constraint on columns "lineID" */
  IdeaLineIdKey = 'Idea_lineID_key',
  /** unique or primary key constraint on columns "id" */
  IdeaPkey = 'Idea_pkey'
}

/** input type for incrementing numeric columns in table "Idea" */
export type Idea_Inc_Input = {
  views?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Idea" */
export type Idea_Insert_Input = {
  author?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  lineID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Status']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userEmail?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Idea_Max_Fields = {
  __typename?: 'Idea_max_fields';
  author?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  lineID?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Status']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userEmail?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Idea_Min_Fields = {
  __typename?: 'Idea_min_fields';
  author?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  lineID?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Status']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userEmail?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "Idea" */
export type Idea_Mutation_Response = {
  __typename?: 'Idea_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Idea>;
};

/** on_conflict condition type for table "Idea" */
export type Idea_On_Conflict = {
  constraint: Idea_Constraint;
  update_columns?: Array<Idea_Update_Column>;
  where?: InputMaybe<Idea_Bool_Exp>;
};

/** Ordering options when selecting data from "Idea". */
export type Idea_Order_By = {
  author?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lineID?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Idea */
export type Idea_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Idea" */
export enum Idea_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'lineID',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserEmail = 'userEmail',
  /** column name */
  Views = 'views'
}

/** input type for updating data in table "Idea" */
export type Idea_Set_Input = {
  author?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  lineID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Status']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userEmail?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Idea_Stddev_Fields = {
  __typename?: 'Idea_stddev_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Idea_Stddev_Pop_Fields = {
  __typename?: 'Idea_stddev_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Idea_Stddev_Samp_Fields = {
  __typename?: 'Idea_stddev_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Idea" */
export type Idea_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Idea_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Idea_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  lineID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Status']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userEmail?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Idea_Sum_Fields = {
  __typename?: 'Idea_sum_fields';
  views?: Maybe<Scalars['Int']>;
};

/** update columns of table "Idea" */
export enum Idea_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'lineID',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserEmail = 'userEmail',
  /** column name */
  Views = 'views'
}

export type Idea_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Idea_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Idea_Set_Input>;
  /** filter the rows which have to be updated */
  where: Idea_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Idea_Var_Pop_Fields = {
  __typename?: 'Idea_var_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Idea_Var_Samp_Fields = {
  __typename?: 'Idea_var_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Idea_Variance_Fields = {
  __typename?: 'Idea_variance_fields';
  views?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Likes" */
export type Likes = {
  __typename?: 'Likes';
  UserEmail: Scalars['String'];
  ideaID: Scalars['String'];
};

/** aggregated selection of "Likes" */
export type Likes_Aggregate = {
  __typename?: 'Likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

/** aggregate fields of "Likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'Likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
};


/** aggregate fields of "Likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  UserEmail?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  ideaID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint on columns "UserEmail", "ideaID" */
  LikesPkey = 'Likes_pkey'
}

/** input type for inserting data into table "Likes" */
export type Likes_Insert_Input = {
  UserEmail?: InputMaybe<Scalars['String']>;
  ideaID?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'Likes_max_fields';
  UserEmail?: Maybe<Scalars['String']>;
  ideaID?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'Likes_min_fields';
  UserEmail?: Maybe<Scalars['String']>;
  ideaID?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Likes" */
export type Likes_Mutation_Response = {
  __typename?: 'Likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on_conflict condition type for table "Likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns?: Array<Likes_Update_Column>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "Likes". */
export type Likes_Order_By = {
  UserEmail?: InputMaybe<Order_By>;
  ideaID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Likes */
export type Likes_Pk_Columns_Input = {
  UserEmail: Scalars['String'];
  ideaID: Scalars['String'];
};

/** select columns of table "Likes" */
export enum Likes_Select_Column {
  /** column name */
  UserEmail = 'UserEmail',
  /** column name */
  IdeaId = 'ideaID'
}

/** input type for updating data in table "Likes" */
export type Likes_Set_Input = {
  UserEmail?: InputMaybe<Scalars['String']>;
  ideaID?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Likes" */
export type Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Likes_Stream_Cursor_Value_Input = {
  UserEmail?: InputMaybe<Scalars['String']>;
  ideaID?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Likes" */
export enum Likes_Update_Column {
  /** column name */
  UserEmail = 'UserEmail',
  /** column name */
  IdeaId = 'ideaID'
}

export type Likes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Likes_Bool_Exp;
};

/** columns and relationships of "Message" */
export type Message = {
  __typename?: 'Message';
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  receverID: Scalars['String'];
  senderID: Scalars['String'];
};

/** aggregated selection of "Message" */
export type Message_Aggregate = {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "Message" */
export type Message_Aggregate_Fields = {
  __typename?: 'Message_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
};


/** aggregate fields of "Message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  receverID?: InputMaybe<String_Comparison_Exp>;
  senderID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = 'Message_pkey'
}

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  receverID?: InputMaybe<Scalars['String']>;
  senderID?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  receverID?: Maybe<Scalars['String']>;
  senderID?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  receverID?: Maybe<Scalars['String']>;
  senderID?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Message" */
export type Message_Mutation_Response = {
  __typename?: 'Message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "Message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "Message". */
export type Message_Order_By = {
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  receverID?: InputMaybe<Order_By>;
  senderID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Message */
export type Message_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ReceverId = 'receverID',
  /** column name */
  SenderId = 'senderID'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  receverID?: InputMaybe<Scalars['String']>;
  senderID?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  receverID?: InputMaybe<Scalars['String']>;
  senderID?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ReceverId = 'receverID',
  /** column name */
  SenderId = 'senderID'
}

export type Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** Boolean expression to compare columns of type "Status". All fields are combined with logical 'AND'. */
export type Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Status']>;
  _gt?: InputMaybe<Scalars['Status']>;
  _gte?: InputMaybe<Scalars['Status']>;
  _in?: InputMaybe<Array<Scalars['Status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Status']>;
  _lte?: InputMaybe<Scalars['Status']>;
  _neq?: InputMaybe<Scalars['Status']>;
  _nin?: InputMaybe<Array<Scalars['Status']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['timestamp'];
  deletedAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  isEmailPublic: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  isEmailPublic?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint on columns "email" */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  deletedAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  isEmailPublic?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  email: Scalars['String'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  IsEmailPublic = 'isEmailPublic',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  deletedAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  IsEmailPublic = 'isEmailPublic',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** columns and relationships of "_prisma_migrations" */
export type _Prisma_Migrations = {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int'];
  checksum: Scalars['String'];
  finished_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['String'];
  logs?: Maybe<Scalars['String']>;
  migration_name: Scalars['String'];
  rolled_back_at?: Maybe<Scalars['timestamptz']>;
  started_at: Scalars['timestamptz'];
};

/** aggregated selection of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate = {
  __typename?: '_prisma_migrations_aggregate';
  aggregate?: Maybe<_Prisma_Migrations_Aggregate_Fields>;
  nodes: Array<_Prisma_Migrations>;
};

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_Fields = {
  __typename?: '_prisma_migrations_aggregate_fields';
  avg?: Maybe<_Prisma_Migrations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Prisma_Migrations_Max_Fields>;
  min?: Maybe<_Prisma_Migrations_Min_Fields>;
  stddev?: Maybe<_Prisma_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<_Prisma_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Prisma_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<_Prisma_Migrations_Sum_Fields>;
  var_pop?: Maybe<_Prisma_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<_Prisma_Migrations_Var_Samp_Fields>;
  variance?: Maybe<_Prisma_Migrations_Variance_Fields>;
};


/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Prisma_Migrations_Avg_Fields = {
  __typename?: '_prisma_migrations_avg_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _Prisma_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  _not?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  applied_steps_count?: InputMaybe<Int_Comparison_Exp>;
  checksum?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  logs?: InputMaybe<String_Comparison_Exp>;
  migration_name?: InputMaybe<String_Comparison_Exp>;
  rolled_back_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _Prisma_Migrations_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrismaMigrationsPkey = '_prisma_migrations_pkey'
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _Prisma_Migrations_Inc_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_prisma_migrations" */
export type _Prisma_Migrations_Insert_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Prisma_Migrations_Max_Fields = {
  __typename?: '_prisma_migrations_max_fields';
  applied_steps_count?: Maybe<Scalars['Int']>;
  checksum?: Maybe<Scalars['String']>;
  finished_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  logs?: Maybe<Scalars['String']>;
  migration_name?: Maybe<Scalars['String']>;
  rolled_back_at?: Maybe<Scalars['timestamptz']>;
  started_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Prisma_Migrations_Min_Fields = {
  __typename?: '_prisma_migrations_min_fields';
  applied_steps_count?: Maybe<Scalars['Int']>;
  checksum?: Maybe<Scalars['String']>;
  finished_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  logs?: Maybe<Scalars['String']>;
  migration_name?: Maybe<Scalars['String']>;
  rolled_back_at?: Maybe<Scalars['timestamptz']>;
  started_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_prisma_migrations" */
export type _Prisma_Migrations_Mutation_Response = {
  __typename?: '_prisma_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Prisma_Migrations>;
};

/** on_conflict condition type for table "_prisma_migrations" */
export type _Prisma_Migrations_On_Conflict = {
  constraint: _Prisma_Migrations_Constraint;
  update_columns?: Array<_Prisma_Migrations_Update_Column>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "_prisma_migrations". */
export type _Prisma_Migrations_Order_By = {
  applied_steps_count?: InputMaybe<Order_By>;
  checksum?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  migration_name?: InputMaybe<Order_By>;
  rolled_back_at?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _prisma_migrations */
export type _Prisma_Migrations_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Select_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at'
}

/** input type for updating data in table "_prisma_migrations" */
export type _Prisma_Migrations_Set_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Prisma_Migrations_Stddev_Fields = {
  __typename?: '_prisma_migrations_stddev_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Prisma_Migrations_Stddev_Pop_Fields = {
  __typename?: '_prisma_migrations_stddev_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Prisma_Migrations_Stddev_Samp_Fields = {
  __typename?: '_prisma_migrations_stddev_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "_prisma_migrations" */
export type _Prisma_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Prisma_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Prisma_Migrations_Stream_Cursor_Value_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type _Prisma_Migrations_Sum_Fields = {
  __typename?: '_prisma_migrations_sum_fields';
  applied_steps_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Update_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at'
}

export type _Prisma_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Prisma_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type _Prisma_Migrations_Var_Pop_Fields = {
  __typename?: '_prisma_migrations_var_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Prisma_Migrations_Var_Samp_Fields = {
  __typename?: '_prisma_migrations_var_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Prisma_Migrations_Variance_Fields = {
  __typename?: '_prisma_migrations_variance_fields';
  applied_steps_count?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Comment" */
  delete_Comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "Comment" */
  delete_Comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "Idea" */
  delete_Idea?: Maybe<Idea_Mutation_Response>;
  /** delete single row from the table: "Idea" */
  delete_Idea_by_pk?: Maybe<Idea>;
  /** delete data from the table: "Likes" */
  delete_Likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "Likes" */
  delete_Likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "_prisma_migrations" */
  delete__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** delete single row from the table: "_prisma_migrations" */
  delete__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** insert data into the table: "Comment" */
  insert_Comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "Comment" */
  insert_Comment_one?: Maybe<Comment>;
  /** insert data into the table: "Idea" */
  insert_Idea?: Maybe<Idea_Mutation_Response>;
  /** insert a single row into the table: "Idea" */
  insert_Idea_one?: Maybe<Idea>;
  /** insert data into the table: "Likes" */
  insert_Likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "Likes" */
  insert_Likes_one?: Maybe<Likes>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "_prisma_migrations" */
  insert__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** insert a single row into the table: "_prisma_migrations" */
  insert__prisma_migrations_one?: Maybe<_Prisma_Migrations>;
  /** update data of the table: "Comment" */
  update_Comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "Comment" */
  update_Comment_by_pk?: Maybe<Comment>;
  /** update multiples rows of table: "Comment" */
  update_Comment_many?: Maybe<Array<Maybe<Comment_Mutation_Response>>>;
  /** update data of the table: "Idea" */
  update_Idea?: Maybe<Idea_Mutation_Response>;
  /** update single row of the table: "Idea" */
  update_Idea_by_pk?: Maybe<Idea>;
  /** update multiples rows of table: "Idea" */
  update_Idea_many?: Maybe<Array<Maybe<Idea_Mutation_Response>>>;
  /** update data of the table: "Likes" */
  update_Likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "Likes" */
  update_Likes_by_pk?: Maybe<Likes>;
  /** update multiples rows of table: "Likes" */
  update_Likes_many?: Maybe<Array<Maybe<Likes_Mutation_Response>>>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "Message" */
  update_Message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "_prisma_migrations" */
  update__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** update single row of the table: "_prisma_migrations" */
  update__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** update multiples rows of table: "_prisma_migrations" */
  update__prisma_migrations_many?: Maybe<Array<Maybe<_Prisma_Migrations_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_IdeaArgs = {
  where: Idea_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Idea_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  UserEmail: Scalars['String'];
  ideaID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete__Prisma_MigrationsArgs = {
  where: _Prisma_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IdeaArgs = {
  objects: Array<Idea_Insert_Input>;
  on_conflict?: InputMaybe<Idea_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Idea_OneArgs = {
  object: Idea_Insert_Input;
  on_conflict?: InputMaybe<Idea_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Prisma_MigrationsArgs = {
  objects: Array<_Prisma_Migrations_Insert_Input>;
  on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Prisma_Migrations_OneArgs = {
  object: _Prisma_Migrations_Insert_Input;
  on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _set?: InputMaybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_ManyArgs = {
  updates: Array<Comment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_IdeaArgs = {
  _inc?: InputMaybe<Idea_Inc_Input>;
  _set?: InputMaybe<Idea_Set_Input>;
  where: Idea_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Idea_By_PkArgs = {
  _inc?: InputMaybe<Idea_Inc_Input>;
  _set?: InputMaybe<Idea_Set_Input>;
  pk_columns: Idea_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Idea_ManyArgs = {
  updates: Array<Idea_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LikesArgs = {
  _set?: InputMaybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _set?: InputMaybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_ManyArgs = {
  updates: Array<Likes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__Prisma_MigrationsArgs = {
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  where: _Prisma_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_By_PkArgs = {
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  pk_columns: _Prisma_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_ManyArgs = {
  updates: Array<_Prisma_Migrations_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Comment" */
  Comment: Array<Comment>;
  /** fetch aggregated fields from the table: "Comment" */
  Comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "Comment" using primary key columns */
  Comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "Idea" */
  Idea: Array<Idea>;
  /** fetch aggregated fields from the table: "Idea" */
  Idea_aggregate: Idea_Aggregate;
  /** fetch data from the table: "Idea" using primary key columns */
  Idea_by_pk?: Maybe<Idea>;
  /** fetch data from the table: "Likes" */
  Likes: Array<Likes>;
  /** fetch aggregated fields from the table: "Likes" */
  Likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "Likes" using primary key columns */
  Likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
};


export type Query_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootIdeaArgs = {
  distinct_on?: InputMaybe<Array<Idea_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Idea_Order_By>>;
  where?: InputMaybe<Idea_Bool_Exp>;
};


export type Query_RootIdea_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Idea_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Idea_Order_By>>;
  where?: InputMaybe<Idea_Bool_Exp>;
};


export type Query_RootIdea_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  UserEmail: Scalars['String'];
  ideaID: Scalars['String'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  email: Scalars['String'];
};


export type Query_Root_Prisma_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Query_Root_Prisma_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Query_Root_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Comment" */
  Comment: Array<Comment>;
  /** fetch aggregated fields from the table: "Comment" */
  Comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "Comment" using primary key columns */
  Comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table in a streaming manner: "Comment" */
  Comment_stream: Array<Comment>;
  /** fetch data from the table: "Idea" */
  Idea: Array<Idea>;
  /** fetch aggregated fields from the table: "Idea" */
  Idea_aggregate: Idea_Aggregate;
  /** fetch data from the table: "Idea" using primary key columns */
  Idea_by_pk?: Maybe<Idea>;
  /** fetch data from the table in a streaming manner: "Idea" */
  Idea_stream: Array<Idea>;
  /** fetch data from the table: "Likes" */
  Likes: Array<Likes>;
  /** fetch aggregated fields from the table: "Likes" */
  Likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "Likes" using primary key columns */
  Likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table in a streaming manner: "Likes" */
  Likes_stream: Array<Likes>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "Message" */
  Message_stream: Array<Message>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** fetch data from the table in a streaming manner: "_prisma_migrations" */
  _prisma_migrations_stream: Array<_Prisma_Migrations>;
};


export type Subscription_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootComment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Comment_Stream_Cursor_Input>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootIdeaArgs = {
  distinct_on?: InputMaybe<Array<Idea_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Idea_Order_By>>;
  where?: InputMaybe<Idea_Bool_Exp>;
};


export type Subscription_RootIdea_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Idea_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Idea_Order_By>>;
  where?: InputMaybe<Idea_Bool_Exp>;
};


export type Subscription_RootIdea_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootIdea_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Idea_Stream_Cursor_Input>>;
  where?: InputMaybe<Idea_Bool_Exp>;
};


export type Subscription_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  UserEmail: Scalars['String'];
  ideaID: Scalars['String'];
};


export type Subscription_RootLikes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  email: Scalars['String'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_Root_Prisma_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Subscription_Root_Prisma_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Subscription_Root_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_Root_Prisma_Migrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_Prisma_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', name?: string | null }> };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;