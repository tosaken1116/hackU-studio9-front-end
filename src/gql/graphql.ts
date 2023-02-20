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
  timestamptz: any;
  uuid: any;
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

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  idea: Ideas;
  ideaID: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userEmail: Scalars['String'];
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  caption?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  idea?: InputMaybe<Ideas_Bool_Exp>;
  ideaID?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  idea?: InputMaybe<Ideas_Obj_Rel_Insert_Input>;
  ideaID?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaID?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  caption?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ideaID?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ideaID?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  caption?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ideaID?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  caption?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  idea?: InputMaybe<Ideas_Order_By>;
  ideaID?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdeaId = 'ideaID',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaID?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ideaID?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdeaId = 'ideaID',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserEmail = 'userEmail'
}

export type Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comments_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "ideas" */
export type Ideas = {
  __typename?: 'ideas';
  author?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  lineID: Scalars['String'];
  status: Status_Enum;
  /** An object relationship */
  statusByStatus: Status;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  userEmail?: Maybe<Scalars['String']>;
  views: Scalars['Int'];
};


/** columns and relationships of "ideas" */
export type IdeasCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "ideas" */
export type IdeasComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "ideas" */
export type IdeasLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "ideas" */
export type IdeasLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** aggregated selection of "ideas" */
export type Ideas_Aggregate = {
  __typename?: 'ideas_aggregate';
  aggregate?: Maybe<Ideas_Aggregate_Fields>;
  nodes: Array<Ideas>;
};

export type Ideas_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ideas_Aggregate_Bool_Exp_Count>;
};

export type Ideas_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ideas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Ideas_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ideas" */
export type Ideas_Aggregate_Fields = {
  __typename?: 'ideas_aggregate_fields';
  avg?: Maybe<Ideas_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ideas_Max_Fields>;
  min?: Maybe<Ideas_Min_Fields>;
  stddev?: Maybe<Ideas_Stddev_Fields>;
  stddev_pop?: Maybe<Ideas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ideas_Stddev_Samp_Fields>;
  sum?: Maybe<Ideas_Sum_Fields>;
  var_pop?: Maybe<Ideas_Var_Pop_Fields>;
  var_samp?: Maybe<Ideas_Var_Samp_Fields>;
  variance?: Maybe<Ideas_Variance_Fields>;
};


/** aggregate fields of "ideas" */
export type Ideas_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ideas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ideas" */
export type Ideas_Aggregate_Order_By = {
  avg?: InputMaybe<Ideas_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ideas_Max_Order_By>;
  min?: InputMaybe<Ideas_Min_Order_By>;
  stddev?: InputMaybe<Ideas_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ideas_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ideas_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ideas_Sum_Order_By>;
  var_pop?: InputMaybe<Ideas_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ideas_Var_Samp_Order_By>;
  variance?: InputMaybe<Ideas_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ideas" */
export type Ideas_Arr_Rel_Insert_Input = {
  data: Array<Ideas_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ideas_On_Conflict>;
};

/** aggregate avg on columns */
export type Ideas_Avg_Fields = {
  __typename?: 'ideas_avg_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ideas" */
export type Ideas_Avg_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ideas". All fields are combined with a logical 'AND'. */
export type Ideas_Bool_Exp = {
  _and?: InputMaybe<Array<Ideas_Bool_Exp>>;
  _not?: InputMaybe<Ideas_Bool_Exp>;
  _or?: InputMaybe<Array<Ideas_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  caption?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Bool_Exp>;
  lineID?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Status_Enum_Comparison_Exp>;
  statusByStatus?: InputMaybe<Status_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
  views?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ideas" */
export enum Ideas_Constraint {
  /** unique or primary key constraint on columns "lineID" */
  IdeasLineIdKey = 'ideas_lineID_key',
  /** unique or primary key constraint on columns "id" */
  IdeasPkey = 'ideas_pkey'
}

/** input type for incrementing numeric columns in table "ideas" */
export type Ideas_Inc_Input = {
  views?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ideas" */
export type Ideas_Insert_Input = {
  author?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  lineID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status_Enum>;
  statusByStatus?: InputMaybe<Status_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userEmail?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Ideas_Max_Fields = {
  __typename?: 'ideas_max_fields';
  author?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lineID?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userEmail?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "ideas" */
export type Ideas_Max_Order_By = {
  author?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lineID?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ideas_Min_Fields = {
  __typename?: 'ideas_min_fields';
  author?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lineID?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userEmail?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "ideas" */
export type Ideas_Min_Order_By = {
  author?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lineID?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ideas" */
export type Ideas_Mutation_Response = {
  __typename?: 'ideas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ideas>;
};

/** input type for inserting object relation for remote table "ideas" */
export type Ideas_Obj_Rel_Insert_Input = {
  data: Ideas_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ideas_On_Conflict>;
};

/** on_conflict condition type for table "ideas" */
export type Ideas_On_Conflict = {
  constraint: Ideas_Constraint;
  update_columns?: Array<Ideas_Update_Column>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};

/** Ordering options when selecting data from "ideas". */
export type Ideas_Order_By = {
  author?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  lineID?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  statusByStatus?: InputMaybe<Status_Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userEmail?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ideas */
export type Ideas_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ideas" */
export enum Ideas_Select_Column {
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

/** input type for updating data in table "ideas" */
export type Ideas_Set_Input = {
  author?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lineID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userEmail?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ideas_Stddev_Fields = {
  __typename?: 'ideas_stddev_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ideas" */
export type Ideas_Stddev_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ideas_Stddev_Pop_Fields = {
  __typename?: 'ideas_stddev_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ideas" */
export type Ideas_Stddev_Pop_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ideas_Stddev_Samp_Fields = {
  __typename?: 'ideas_stddev_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ideas" */
export type Ideas_Stddev_Samp_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ideas" */
export type Ideas_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ideas_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ideas_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lineID?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userEmail?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Ideas_Sum_Fields = {
  __typename?: 'ideas_sum_fields';
  views?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ideas" */
export type Ideas_Sum_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** update columns of table "ideas" */
export enum Ideas_Update_Column {
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

export type Ideas_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ideas_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ideas_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ideas_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ideas_Var_Pop_Fields = {
  __typename?: 'ideas_var_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ideas" */
export type Ideas_Var_Pop_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ideas_Var_Samp_Fields = {
  __typename?: 'ideas_var_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ideas" */
export type Ideas_Var_Samp_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ideas_Variance_Fields = {
  __typename?: 'ideas_variance_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ideas" */
export type Ideas_Variance_Order_By = {
  views?: InputMaybe<Order_By>;
};

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  /** An object relationship */
  idea: Ideas;
  ideaID: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userEmail: Scalars['String'];
};

/** aggregated selection of "likes" */
export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

export type Likes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Likes_Aggregate_Bool_Exp_Count>;
};

export type Likes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Likes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
};


/** aggregate fields of "likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Likes_Max_Order_By>;
  min?: InputMaybe<Likes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "likes" */
export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  idea?: InputMaybe<Ideas_Bool_Exp>;
  ideaID?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userEmail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint on columns "userEmail", "ideaID" */
  LikesPkey = 'likes_pkey'
}

/** input type for inserting data into table "likes" */
export type Likes_Insert_Input = {
  idea?: InputMaybe<Ideas_Obj_Rel_Insert_Input>;
  ideaID?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  ideaID?: Maybe<Scalars['uuid']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  ideaID?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  ideaID?: Maybe<Scalars['uuid']>;
  userEmail?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  ideaID?: InputMaybe<Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "likes" */
export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on_conflict condition type for table "likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns?: Array<Likes_Update_Column>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "likes". */
export type Likes_Order_By = {
  idea?: InputMaybe<Ideas_Order_By>;
  ideaID?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userEmail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: likes */
export type Likes_Pk_Columns_Input = {
  ideaID: Scalars['uuid'];
  userEmail: Scalars['String'];
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  IdeaId = 'ideaID',
  /** column name */
  UserEmail = 'userEmail'
}

/** input type for updating data in table "likes" */
export type Likes_Set_Input = {
  ideaID?: InputMaybe<Scalars['uuid']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "likes" */
export type Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Likes_Stream_Cursor_Value_Input = {
  ideaID?: InputMaybe<Scalars['uuid']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

/** update columns of table "likes" */
export enum Likes_Update_Column {
  /** column name */
  IdeaId = 'ideaID',
  /** column name */
  UserEmail = 'userEmail'
}

export type Likes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Likes_Bool_Exp;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message: Scalars['String'];
  receverID: Scalars['String'];
  sernderID: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  receverID?: InputMaybe<String_Comparison_Exp>;
  sernderID?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  receverID?: InputMaybe<Scalars['String']>;
  sernderID?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  receverID?: Maybe<Scalars['String']>;
  sernderID?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  receverID?: Maybe<Scalars['String']>;
  sernderID?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  receverID?: InputMaybe<Order_By>;
  sernderID?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ReceverId = 'receverID',
  /** column name */
  SernderId = 'sernderID',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  receverID?: InputMaybe<Scalars['String']>;
  sernderID?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  receverID?: InputMaybe<Scalars['String']>;
  sernderID?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  ReceverId = 'receverID',
  /** column name */
  SernderId = 'sernderID',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Messages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "ideas" */
  delete_ideas?: Maybe<Ideas_Mutation_Response>;
  /** delete single row from the table: "ideas" */
  delete_ideas_by_pk?: Maybe<Ideas>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "status" */
  delete_status?: Maybe<Status_Mutation_Response>;
  /** delete single row from the table: "status" */
  delete_status_by_pk?: Maybe<Status>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "ideas" */
  insert_ideas?: Maybe<Ideas_Mutation_Response>;
  /** insert a single row into the table: "ideas" */
  insert_ideas_one?: Maybe<Ideas>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "status" */
  insert_status?: Maybe<Status_Mutation_Response>;
  /** insert a single row into the table: "status" */
  insert_status_one?: Maybe<Status>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "ideas" */
  update_ideas?: Maybe<Ideas_Mutation_Response>;
  /** update single row of the table: "ideas" */
  update_ideas_by_pk?: Maybe<Ideas>;
  /** update multiples rows of table: "ideas" */
  update_ideas_many?: Maybe<Array<Maybe<Ideas_Mutation_Response>>>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update multiples rows of table: "likes" */
  update_likes_many?: Maybe<Array<Maybe<Likes_Mutation_Response>>>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "status" */
  update_status?: Maybe<Status_Mutation_Response>;
  /** update single row of the table: "status" */
  update_status_by_pk?: Maybe<Status>;
  /** update multiples rows of table: "status" */
  update_status_many?: Maybe<Array<Maybe<Status_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_IdeasArgs = {
  where: Ideas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ideas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  ideaID: Scalars['uuid'];
  userEmail: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StatusArgs = {
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IdeasArgs = {
  objects: Array<Ideas_Insert_Input>;
  on_conflict?: InputMaybe<Ideas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ideas_OneArgs = {
  object: Ideas_Insert_Input;
  on_conflict?: InputMaybe<Ideas_On_Conflict>;
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
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatusArgs = {
  objects: Array<Status_Insert_Input>;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_OneArgs = {
  object: Status_Insert_Input;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_IdeasArgs = {
  _inc?: InputMaybe<Ideas_Inc_Input>;
  _set?: InputMaybe<Ideas_Set_Input>;
  where: Ideas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ideas_By_PkArgs = {
  _inc?: InputMaybe<Ideas_Inc_Input>;
  _set?: InputMaybe<Ideas_Set_Input>;
  pk_columns: Ideas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ideas_ManyArgs = {
  updates: Array<Ideas_Updates>;
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
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StatusArgs = {
  _set?: InputMaybe<Status_Set_Input>;
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_By_PkArgs = {
  _set?: InputMaybe<Status_Set_Input>;
  pk_columns: Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_ManyArgs = {
  updates: Array<Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
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
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  ideas: Array<Ideas>;
  /** An aggregate relationship */
  ideas_aggregate: Ideas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<Ideas>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootIdeasArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


export type Query_RootIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


export type Query_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
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
  ideaID: Scalars['uuid'];
  userEmail: Scalars['String'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  email: Scalars['String'];
};

/** columns and relationships of "status" */
export type Status = {
  __typename?: 'status';
  /** An array relationship */
  ideas: Array<Ideas>;
  /** An aggregate relationship */
  ideas_aggregate: Ideas_Aggregate;
  type: Scalars['String'];
};


/** columns and relationships of "status" */
export type StatusIdeasArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


/** columns and relationships of "status" */
export type StatusIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};

/** aggregated selection of "status" */
export type Status_Aggregate = {
  __typename?: 'status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "status" */
export type Status_Aggregate_Fields = {
  __typename?: 'status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
};


/** aggregate fields of "status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Bool_Exp>>;
  _not?: InputMaybe<Status_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Bool_Exp>>;
  ideas?: InputMaybe<Ideas_Bool_Exp>;
  ideas_aggregate?: InputMaybe<Ideas_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "status" */
export enum Status_Constraint {
  /** unique or primary key constraint on columns "type" */
  StatusPkey = 'status_pkey'
}

export enum Status_Enum {
  InProgress = 'inProgress',
  Resolved = 'resolved',
  UnResolved = 'unResolved'
}

/** Boolean expression to compare columns of type "status_enum". All fields are combined with logical 'AND'. */
export type Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Status_Enum>;
  _in?: InputMaybe<Array<Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Status_Enum>;
  _nin?: InputMaybe<Array<Status_Enum>>;
};

/** input type for inserting data into table "status" */
export type Status_Insert_Input = {
  ideas?: InputMaybe<Ideas_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'status_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'status_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "status" */
export type Status_Mutation_Response = {
  __typename?: 'status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status>;
};

/** input type for inserting object relation for remote table "status" */
export type Status_Obj_Rel_Insert_Input = {
  data: Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Status_On_Conflict>;
};

/** on_conflict condition type for table "status" */
export type Status_On_Conflict = {
  constraint: Status_Constraint;
  update_columns?: Array<Status_Update_Column>;
  where?: InputMaybe<Status_Bool_Exp>;
};

/** Ordering options when selecting data from "status". */
export type Status_Order_By = {
  ideas_aggregate?: InputMaybe<Ideas_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: status */
export type Status_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "status" */
export enum Status_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "status" */
export type Status_Set_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "status" */
export type Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Status_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "status" */
export enum Status_Update_Column {
  /** column name */
  Type = 'type'
}

export type Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Status_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** An array relationship */
  ideas: Array<Ideas>;
  /** An aggregate relationship */
  ideas_aggregate: Ideas_Aggregate;
  /** fetch data from the table: "ideas" using primary key columns */
  ideas_by_pk?: Maybe<Ideas>;
  /** fetch data from the table in a streaming manner: "ideas" */
  ideas_stream: Array<Ideas>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table in a streaming manner: "likes" */
  likes_stream: Array<Likes>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner: "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table in a streaming manner: "status" */
  status_stream: Array<Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootIdeasArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


export type Subscription_RootIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


export type Subscription_RootIdeas_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootIdeas_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ideas_Stream_Cursor_Input>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
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
  ideaID: Scalars['uuid'];
  userEmail: Scalars['String'];
};


export type Subscription_RootLikes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootStatus_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  email: Scalars['String'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  /** An array relationship */
  ideas: Array<Ideas>;
  /** An aggregate relationship */
  ideas_aggregate: Ideas_Aggregate;
  isEmailPublic: Scalars['Boolean'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersIdeasArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersIdeas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ideas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ideas_Order_By>>;
  where?: InputMaybe<Ideas_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  ideas?: InputMaybe<Ideas_Bool_Exp>;
  ideas_aggregate?: InputMaybe<Ideas_Aggregate_Bool_Exp>;
  isEmailPublic?: InputMaybe<Boolean_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ideas?: InputMaybe<Ideas_Arr_Rel_Insert_Input>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  ideas_aggregate?: InputMaybe<Ideas_Aggregate_Order_By>;
  isEmailPublic?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  email: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
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
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
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
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetHomeDemandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeDemandsQuery = { __typename?: 'query_root', ideas: Array<{ __typename?: 'ideas', author?: string | null, title: string, status: Status_Enum, createdAt: any, views: number, id: any }> };

export type GetDemandDetailQueryVariables = Exact<{
  ideaId: Scalars['uuid'];
}>;


export type GetDemandDetailQuery = { __typename?: 'query_root', ideas: Array<{ __typename?: 'ideas', author?: string | null, caption: string, createdAt: any, title: string, status: Status_Enum, views: number }> };

export type GetSearchResultQueryVariables = Exact<{
  searchWord: Scalars['String'];
}>;


export type GetSearchResultQuery = { __typename?: 'query_root', ideas: Array<{ __typename?: 'ideas', views: number, updatedAt: any, title: string, status: Status_Enum, id: any, createdAt: any, author?: string | null }> };

export type GetCommentQueryVariables = Exact<{
  ideaId: Scalars['uuid'];
}>;


export type GetCommentQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', createdAt: any, caption?: string | null, author: { __typename?: 'users', name?: string | null } }> };


export const GetHomeDemandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHomeDemands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetHomeDemandsQuery, GetHomeDemandsQueryVariables>;
export const GetDemandDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDemandDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ideaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ideaId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]}}]} as unknown as DocumentNode<GetDemandDetailQuery, GetDemandDetailQueryVariables>;
export const GetSearchResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSearchResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchWord"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ideas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchWord"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]} as unknown as DocumentNode<GetSearchResultQuery, GetSearchResultQueryVariables>;
export const GetCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ideaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ideaID"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ideaId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}}]}}]} as unknown as DocumentNode<GetCommentQuery, GetCommentQueryVariables>;