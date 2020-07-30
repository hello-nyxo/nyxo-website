export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAnswer = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  question?: Maybe<Array<Maybe<ContentfulQuestion>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnswerSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerEdge>;
  nodes: Array<ContentfulAnswer>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnswerGroupConnection>;
};


export type ContentfulAnswerConnectionDistinctArgs = {
  field: ContentfulAnswerFieldsEnum;
};


export type ContentfulAnswerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnswerFieldsEnum;
};

export type ContentfulAnswerEdge = {
  next?: Maybe<ContentfulAnswer>;
  node: ContentfulAnswer;
  previous?: Maybe<ContentfulAnswer>;
};

export type ContentfulAnswerFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'score'
  | 'question'
  | 'question___id'
  | 'question___parent___id'
  | 'question___parent___parent___id'
  | 'question___parent___parent___children'
  | 'question___parent___children'
  | 'question___parent___children___id'
  | 'question___parent___children___children'
  | 'question___parent___internal___content'
  | 'question___parent___internal___contentDigest'
  | 'question___parent___internal___description'
  | 'question___parent___internal___fieldOwners'
  | 'question___parent___internal___ignoreType'
  | 'question___parent___internal___mediaType'
  | 'question___parent___internal___owner'
  | 'question___parent___internal___type'
  | 'question___children'
  | 'question___children___id'
  | 'question___children___parent___id'
  | 'question___children___parent___children'
  | 'question___children___children'
  | 'question___children___children___id'
  | 'question___children___children___children'
  | 'question___children___internal___content'
  | 'question___children___internal___contentDigest'
  | 'question___children___internal___description'
  | 'question___children___internal___fieldOwners'
  | 'question___children___internal___ignoreType'
  | 'question___children___internal___mediaType'
  | 'question___children___internal___owner'
  | 'question___children___internal___type'
  | 'question___internal___content'
  | 'question___internal___contentDigest'
  | 'question___internal___description'
  | 'question___internal___fieldOwners'
  | 'question___internal___ignoreType'
  | 'question___internal___mediaType'
  | 'question___internal___owner'
  | 'question___internal___type'
  | 'question___title'
  | 'question___type'
  | 'question___answers'
  | 'question___answers___id'
  | 'question___answers___parent___id'
  | 'question___answers___parent___children'
  | 'question___answers___children'
  | 'question___answers___children___id'
  | 'question___answers___children___children'
  | 'question___answers___internal___content'
  | 'question___answers___internal___contentDigest'
  | 'question___answers___internal___description'
  | 'question___answers___internal___fieldOwners'
  | 'question___answers___internal___ignoreType'
  | 'question___answers___internal___mediaType'
  | 'question___answers___internal___owner'
  | 'question___answers___internal___type'
  | 'question___answers___title'
  | 'question___answers___score'
  | 'question___answers___question'
  | 'question___answers___question___id'
  | 'question___answers___question___children'
  | 'question___answers___question___title'
  | 'question___answers___question___type'
  | 'question___answers___question___answers'
  | 'question___answers___question___questionnaire'
  | 'question___answers___question___spaceId'
  | 'question___answers___question___contentful_id'
  | 'question___answers___question___createdAt'
  | 'question___answers___question___updatedAt'
  | 'question___answers___question___node_locale'
  | 'question___answers___spaceId'
  | 'question___answers___contentful_id'
  | 'question___answers___createdAt'
  | 'question___answers___updatedAt'
  | 'question___answers___sys___revision'
  | 'question___answers___node_locale'
  | 'question___questionnaire'
  | 'question___questionnaire___id'
  | 'question___questionnaire___parent___id'
  | 'question___questionnaire___parent___children'
  | 'question___questionnaire___children'
  | 'question___questionnaire___children___id'
  | 'question___questionnaire___children___children'
  | 'question___questionnaire___internal___content'
  | 'question___questionnaire___internal___contentDigest'
  | 'question___questionnaire___internal___description'
  | 'question___questionnaire___internal___fieldOwners'
  | 'question___questionnaire___internal___ignoreType'
  | 'question___questionnaire___internal___mediaType'
  | 'question___questionnaire___internal___owner'
  | 'question___questionnaire___internal___type'
  | 'question___questionnaire___title'
  | 'question___questionnaire___slug'
  | 'question___questionnaire___questions'
  | 'question___questionnaire___questions___id'
  | 'question___questionnaire___questions___children'
  | 'question___questionnaire___questions___title'
  | 'question___questionnaire___questions___type'
  | 'question___questionnaire___questions___answers'
  | 'question___questionnaire___questions___questionnaire'
  | 'question___questionnaire___questions___spaceId'
  | 'question___questionnaire___questions___contentful_id'
  | 'question___questionnaire___questions___createdAt'
  | 'question___questionnaire___questions___updatedAt'
  | 'question___questionnaire___questions___node_locale'
  | 'question___questionnaire___results'
  | 'question___questionnaire___results___id'
  | 'question___questionnaire___results___children'
  | 'question___questionnaire___results___title'
  | 'question___questionnaire___results___questionnaire'
  | 'question___questionnaire___results___spaceId'
  | 'question___questionnaire___results___contentful_id'
  | 'question___questionnaire___results___createdAt'
  | 'question___questionnaire___results___updatedAt'
  | 'question___questionnaire___results___node_locale'
  | 'question___questionnaire___description___id'
  | 'question___questionnaire___description___children'
  | 'question___questionnaire___description___content'
  | 'question___questionnaire___description___nodeType'
  | 'question___questionnaire___description___description'
  | 'question___questionnaire___description___json'
  | 'question___questionnaire___spaceId'
  | 'question___questionnaire___contentful_id'
  | 'question___questionnaire___createdAt'
  | 'question___questionnaire___updatedAt'
  | 'question___questionnaire___sys___revision'
  | 'question___questionnaire___node_locale'
  | 'question___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___id'
  | 'question___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children'
  | 'question___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content'
  | 'question___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___nodeType'
  | 'question___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___description'
  | 'question___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___json'
  | 'question___question___id'
  | 'question___question___parent___id'
  | 'question___question___parent___children'
  | 'question___question___children'
  | 'question___question___children___id'
  | 'question___question___children___children'
  | 'question___question___internal___content'
  | 'question___question___internal___contentDigest'
  | 'question___question___internal___description'
  | 'question___question___internal___fieldOwners'
  | 'question___question___internal___ignoreType'
  | 'question___question___internal___mediaType'
  | 'question___question___internal___owner'
  | 'question___question___internal___type'
  | 'question___question___question'
  | 'question___question___childMarkdownRemark___id'
  | 'question___question___childMarkdownRemark___excerpt'
  | 'question___question___childMarkdownRemark___rawMarkdownBody'
  | 'question___question___childMarkdownRemark___fileAbsolutePath'
  | 'question___question___childMarkdownRemark___html'
  | 'question___question___childMarkdownRemark___htmlAst'
  | 'question___question___childMarkdownRemark___excerptAst'
  | 'question___question___childMarkdownRemark___headings'
  | 'question___question___childMarkdownRemark___timeToRead'
  | 'question___question___childMarkdownRemark___tableOfContents'
  | 'question___question___childMarkdownRemark___children'
  | 'question___spaceId'
  | 'question___contentful_id'
  | 'question___createdAt'
  | 'question___updatedAt'
  | 'question___sys___revision'
  | 'question___node_locale'
  | 'question___childContentfulQuestionQuestionTextNode___id'
  | 'question___childContentfulQuestionQuestionTextNode___parent___id'
  | 'question___childContentfulQuestionQuestionTextNode___parent___children'
  | 'question___childContentfulQuestionQuestionTextNode___children'
  | 'question___childContentfulQuestionQuestionTextNode___children___id'
  | 'question___childContentfulQuestionQuestionTextNode___children___children'
  | 'question___childContentfulQuestionQuestionTextNode___internal___content'
  | 'question___childContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'question___childContentfulQuestionQuestionTextNode___internal___description'
  | 'question___childContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'question___childContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'question___childContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'question___childContentfulQuestionQuestionTextNode___internal___owner'
  | 'question___childContentfulQuestionQuestionTextNode___internal___type'
  | 'question___childContentfulQuestionQuestionTextNode___question'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___id'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___excerpt'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___html'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___htmlAst'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___excerptAst'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___headings'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___timeToRead'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___tableOfContents'
  | 'question___childContentfulQuestionQuestionTextNode___childMarkdownRemark___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulAnswerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  score?: Maybe<IntQueryOperatorInput>;
  question?: Maybe<ContentfulQuestionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerFilterListInput = {
  elemMatch?: Maybe<ContentfulAnswerFilterInput>;
};

export type ContentfulAnswerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerEdge>;
  nodes: Array<ContentfulAnswer>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSlider = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isSlider?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnswerSliderSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerSliderCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerSliderUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSliderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerSliderEdge>;
  nodes: Array<ContentfulAnswerSlider>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnswerSliderGroupConnection>;
};


export type ContentfulAnswerSliderConnectionDistinctArgs = {
  field: ContentfulAnswerSliderFieldsEnum;
};


export type ContentfulAnswerSliderConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnswerSliderFieldsEnum;
};

export type ContentfulAnswerSliderEdge = {
  next?: Maybe<ContentfulAnswerSlider>;
  node: ContentfulAnswerSlider;
  previous?: Maybe<ContentfulAnswerSlider>;
};

export type ContentfulAnswerSliderFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isSlider'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulAnswerSliderFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isSlider?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSliderSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerSliderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerSliderEdge>;
  nodes: Array<ContentfulAnswerSlider>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSliderSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnswerSliderFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnswerSliderSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnswerSliderSysContentType>;
};

export type ContentfulAnswerSliderSysContentType = {
  sys?: Maybe<ContentfulAnswerSliderSysContentTypeSys>;
};

export type ContentfulAnswerSliderSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnswerSliderSysContentTypeSysFilterInput>;
};

export type ContentfulAnswerSliderSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSliderSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerSliderSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnswerSliderSysContentTypeFilterInput>;
};

export type ContentfulAnswerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnswerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnswerSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnswerSysContentType>;
};

export type ContentfulAnswerSysContentType = {
  sys?: Maybe<ContentfulAnswerSysContentTypeSys>;
};

export type ContentfulAnswerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnswerSysContentTypeSysFilterInput>;
};

export type ContentfulAnswerSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnswerSysContentTypeFilterInput>;
};

export type ContentfulAnswerTimePicker = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isTimePicker?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnswerTimePickerSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerTimePickerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerTimePickerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerTimePickerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerTimePickerEdge>;
  nodes: Array<ContentfulAnswerTimePicker>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnswerTimePickerGroupConnection>;
};


export type ContentfulAnswerTimePickerConnectionDistinctArgs = {
  field: ContentfulAnswerTimePickerFieldsEnum;
};


export type ContentfulAnswerTimePickerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnswerTimePickerFieldsEnum;
};

export type ContentfulAnswerTimePickerEdge = {
  next?: Maybe<ContentfulAnswerTimePicker>;
  node: ContentfulAnswerTimePicker;
  previous?: Maybe<ContentfulAnswerTimePicker>;
};

export type ContentfulAnswerTimePickerFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isTimePicker'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulAnswerTimePickerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isTimePicker?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerTimePickerSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerTimePickerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerTimePickerEdge>;
  nodes: Array<ContentfulAnswerTimePicker>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerTimePickerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnswerTimePickerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnswerTimePickerSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnswerTimePickerSysContentType>;
};

export type ContentfulAnswerTimePickerSysContentType = {
  sys?: Maybe<ContentfulAnswerTimePickerSysContentTypeSys>;
};

export type ContentfulAnswerTimePickerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnswerTimePickerSysContentTypeSysFilterInput>;
};

export type ContentfulAnswerTimePickerSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerTimePickerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerTimePickerSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnswerTimePickerSysContentTypeFilterInput>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthor = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  credentials?: Maybe<Scalars['String']>;
  avatar?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  node_locale?: Maybe<Scalars['String']>;
  lesson?: Maybe<Array<Maybe<ContentfulLesson>>>;
};


export type ContentfulAuthorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorGroupConnection>;
};


export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


export type ContentfulAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export type ContentfulAuthorFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'slug'
  | 'name'
  | 'credentials'
  | 'avatar___id'
  | 'avatar___parent___id'
  | 'avatar___parent___parent___id'
  | 'avatar___parent___parent___children'
  | 'avatar___parent___children'
  | 'avatar___parent___children___id'
  | 'avatar___parent___children___children'
  | 'avatar___parent___internal___content'
  | 'avatar___parent___internal___contentDigest'
  | 'avatar___parent___internal___description'
  | 'avatar___parent___internal___fieldOwners'
  | 'avatar___parent___internal___ignoreType'
  | 'avatar___parent___internal___mediaType'
  | 'avatar___parent___internal___owner'
  | 'avatar___parent___internal___type'
  | 'avatar___children'
  | 'avatar___children___id'
  | 'avatar___children___parent___id'
  | 'avatar___children___parent___children'
  | 'avatar___children___children'
  | 'avatar___children___children___id'
  | 'avatar___children___children___children'
  | 'avatar___children___internal___content'
  | 'avatar___children___internal___contentDigest'
  | 'avatar___children___internal___description'
  | 'avatar___children___internal___fieldOwners'
  | 'avatar___children___internal___ignoreType'
  | 'avatar___children___internal___mediaType'
  | 'avatar___children___internal___owner'
  | 'avatar___children___internal___type'
  | 'avatar___internal___content'
  | 'avatar___internal___contentDigest'
  | 'avatar___internal___description'
  | 'avatar___internal___fieldOwners'
  | 'avatar___internal___ignoreType'
  | 'avatar___internal___mediaType'
  | 'avatar___internal___owner'
  | 'avatar___internal___type'
  | 'avatar___contentful_id'
  | 'avatar___file___url'
  | 'avatar___file___details___size'
  | 'avatar___file___fileName'
  | 'avatar___file___contentType'
  | 'avatar___title'
  | 'avatar___description'
  | 'avatar___node_locale'
  | 'avatar___fixed___base64'
  | 'avatar___fixed___tracedSVG'
  | 'avatar___fixed___aspectRatio'
  | 'avatar___fixed___width'
  | 'avatar___fixed___height'
  | 'avatar___fixed___src'
  | 'avatar___fixed___srcSet'
  | 'avatar___fixed___srcWebp'
  | 'avatar___fixed___srcSetWebp'
  | 'avatar___resolutions___base64'
  | 'avatar___resolutions___tracedSVG'
  | 'avatar___resolutions___aspectRatio'
  | 'avatar___resolutions___width'
  | 'avatar___resolutions___height'
  | 'avatar___resolutions___src'
  | 'avatar___resolutions___srcSet'
  | 'avatar___resolutions___srcWebp'
  | 'avatar___resolutions___srcSetWebp'
  | 'avatar___fluid___base64'
  | 'avatar___fluid___tracedSVG'
  | 'avatar___fluid___aspectRatio'
  | 'avatar___fluid___src'
  | 'avatar___fluid___srcSet'
  | 'avatar___fluid___srcWebp'
  | 'avatar___fluid___srcSetWebp'
  | 'avatar___fluid___sizes'
  | 'avatar___sizes___base64'
  | 'avatar___sizes___tracedSVG'
  | 'avatar___sizes___aspectRatio'
  | 'avatar___sizes___src'
  | 'avatar___sizes___srcSet'
  | 'avatar___sizes___srcWebp'
  | 'avatar___sizes___srcSetWebp'
  | 'avatar___sizes___sizes'
  | 'avatar___resize___base64'
  | 'avatar___resize___tracedSVG'
  | 'avatar___resize___src'
  | 'avatar___resize___width'
  | 'avatar___resize___height'
  | 'avatar___resize___aspectRatio'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'lesson'
  | 'lesson___id'
  | 'lesson___parent___id'
  | 'lesson___parent___parent___id'
  | 'lesson___parent___parent___children'
  | 'lesson___parent___children'
  | 'lesson___parent___children___id'
  | 'lesson___parent___children___children'
  | 'lesson___parent___internal___content'
  | 'lesson___parent___internal___contentDigest'
  | 'lesson___parent___internal___description'
  | 'lesson___parent___internal___fieldOwners'
  | 'lesson___parent___internal___ignoreType'
  | 'lesson___parent___internal___mediaType'
  | 'lesson___parent___internal___owner'
  | 'lesson___parent___internal___type'
  | 'lesson___children'
  | 'lesson___children___id'
  | 'lesson___children___parent___id'
  | 'lesson___children___parent___children'
  | 'lesson___children___children'
  | 'lesson___children___children___id'
  | 'lesson___children___children___children'
  | 'lesson___children___internal___content'
  | 'lesson___children___internal___contentDigest'
  | 'lesson___children___internal___description'
  | 'lesson___children___internal___fieldOwners'
  | 'lesson___children___internal___ignoreType'
  | 'lesson___children___internal___mediaType'
  | 'lesson___children___internal___owner'
  | 'lesson___children___internal___type'
  | 'lesson___internal___content'
  | 'lesson___internal___contentDigest'
  | 'lesson___internal___description'
  | 'lesson___internal___fieldOwners'
  | 'lesson___internal___ignoreType'
  | 'lesson___internal___mediaType'
  | 'lesson___internal___owner'
  | 'lesson___internal___type'
  | 'lesson___lessonName'
  | 'lesson___slug'
  | 'lesson___keywords'
  | 'lesson___author'
  | 'lesson___stage'
  | 'lesson___authorCard'
  | 'lesson___authorCard___id'
  | 'lesson___authorCard___parent___id'
  | 'lesson___authorCard___parent___children'
  | 'lesson___authorCard___children'
  | 'lesson___authorCard___children___id'
  | 'lesson___authorCard___children___children'
  | 'lesson___authorCard___internal___content'
  | 'lesson___authorCard___internal___contentDigest'
  | 'lesson___authorCard___internal___description'
  | 'lesson___authorCard___internal___fieldOwners'
  | 'lesson___authorCard___internal___ignoreType'
  | 'lesson___authorCard___internal___mediaType'
  | 'lesson___authorCard___internal___owner'
  | 'lesson___authorCard___internal___type'
  | 'lesson___authorCard___slug'
  | 'lesson___authorCard___name'
  | 'lesson___authorCard___credentials'
  | 'lesson___authorCard___avatar___id'
  | 'lesson___authorCard___avatar___children'
  | 'lesson___authorCard___avatar___contentful_id'
  | 'lesson___authorCard___avatar___title'
  | 'lesson___authorCard___avatar___description'
  | 'lesson___authorCard___avatar___node_locale'
  | 'lesson___authorCard___spaceId'
  | 'lesson___authorCard___contentful_id'
  | 'lesson___authorCard___createdAt'
  | 'lesson___authorCard___updatedAt'
  | 'lesson___authorCard___sys___revision'
  | 'lesson___authorCard___node_locale'
  | 'lesson___authorCard___lesson'
  | 'lesson___authorCard___lesson___id'
  | 'lesson___authorCard___lesson___children'
  | 'lesson___authorCard___lesson___lessonName'
  | 'lesson___authorCard___lesson___slug'
  | 'lesson___authorCard___lesson___keywords'
  | 'lesson___authorCard___lesson___author'
  | 'lesson___authorCard___lesson___stage'
  | 'lesson___authorCard___lesson___authorCard'
  | 'lesson___authorCard___lesson___habit'
  | 'lesson___authorCard___lesson___week'
  | 'lesson___authorCard___lesson___spaceId'
  | 'lesson___authorCard___lesson___contentful_id'
  | 'lesson___authorCard___lesson___createdAt'
  | 'lesson___authorCard___lesson___updatedAt'
  | 'lesson___authorCard___lesson___node_locale'
  | 'lesson___authorCard___lesson___metalesson'
  | 'lesson___authorCard___lesson___customComplete'
  | 'lesson___cover___id'
  | 'lesson___cover___parent___id'
  | 'lesson___cover___parent___children'
  | 'lesson___cover___children'
  | 'lesson___cover___children___id'
  | 'lesson___cover___children___children'
  | 'lesson___cover___internal___content'
  | 'lesson___cover___internal___contentDigest'
  | 'lesson___cover___internal___description'
  | 'lesson___cover___internal___fieldOwners'
  | 'lesson___cover___internal___ignoreType'
  | 'lesson___cover___internal___mediaType'
  | 'lesson___cover___internal___owner'
  | 'lesson___cover___internal___type'
  | 'lesson___cover___contentful_id'
  | 'lesson___cover___file___url'
  | 'lesson___cover___file___fileName'
  | 'lesson___cover___file___contentType'
  | 'lesson___cover___title'
  | 'lesson___cover___description'
  | 'lesson___cover___node_locale'
  | 'lesson___cover___fixed___base64'
  | 'lesson___cover___fixed___tracedSVG'
  | 'lesson___cover___fixed___aspectRatio'
  | 'lesson___cover___fixed___width'
  | 'lesson___cover___fixed___height'
  | 'lesson___cover___fixed___src'
  | 'lesson___cover___fixed___srcSet'
  | 'lesson___cover___fixed___srcWebp'
  | 'lesson___cover___fixed___srcSetWebp'
  | 'lesson___cover___resolutions___base64'
  | 'lesson___cover___resolutions___tracedSVG'
  | 'lesson___cover___resolutions___aspectRatio'
  | 'lesson___cover___resolutions___width'
  | 'lesson___cover___resolutions___height'
  | 'lesson___cover___resolutions___src'
  | 'lesson___cover___resolutions___srcSet'
  | 'lesson___cover___resolutions___srcWebp'
  | 'lesson___cover___resolutions___srcSetWebp'
  | 'lesson___cover___fluid___base64'
  | 'lesson___cover___fluid___tracedSVG'
  | 'lesson___cover___fluid___aspectRatio'
  | 'lesson___cover___fluid___src'
  | 'lesson___cover___fluid___srcSet'
  | 'lesson___cover___fluid___srcWebp'
  | 'lesson___cover___fluid___srcSetWebp'
  | 'lesson___cover___fluid___sizes'
  | 'lesson___cover___sizes___base64'
  | 'lesson___cover___sizes___tracedSVG'
  | 'lesson___cover___sizes___aspectRatio'
  | 'lesson___cover___sizes___src'
  | 'lesson___cover___sizes___srcSet'
  | 'lesson___cover___sizes___srcWebp'
  | 'lesson___cover___sizes___srcSetWebp'
  | 'lesson___cover___sizes___sizes'
  | 'lesson___cover___resize___base64'
  | 'lesson___cover___resize___tracedSVG'
  | 'lesson___cover___resize___src'
  | 'lesson___cover___resize___width'
  | 'lesson___cover___resize___height'
  | 'lesson___cover___resize___aspectRatio'
  | 'lesson___section___id'
  | 'lesson___section___parent___id'
  | 'lesson___section___parent___children'
  | 'lesson___section___children'
  | 'lesson___section___children___id'
  | 'lesson___section___children___children'
  | 'lesson___section___internal___content'
  | 'lesson___section___internal___contentDigest'
  | 'lesson___section___internal___description'
  | 'lesson___section___internal___fieldOwners'
  | 'lesson___section___internal___ignoreType'
  | 'lesson___section___internal___mediaType'
  | 'lesson___section___internal___owner'
  | 'lesson___section___internal___type'
  | 'lesson___section___order'
  | 'lesson___section___title'
  | 'lesson___section___lesson'
  | 'lesson___section___lesson___id'
  | 'lesson___section___lesson___children'
  | 'lesson___section___lesson___lessonName'
  | 'lesson___section___lesson___slug'
  | 'lesson___section___lesson___keywords'
  | 'lesson___section___lesson___author'
  | 'lesson___section___lesson___stage'
  | 'lesson___section___lesson___authorCard'
  | 'lesson___section___lesson___habit'
  | 'lesson___section___lesson___week'
  | 'lesson___section___lesson___spaceId'
  | 'lesson___section___lesson___contentful_id'
  | 'lesson___section___lesson___createdAt'
  | 'lesson___section___lesson___updatedAt'
  | 'lesson___section___lesson___node_locale'
  | 'lesson___section___lesson___metalesson'
  | 'lesson___section___lesson___customComplete'
  | 'lesson___section___description___id'
  | 'lesson___section___description___children'
  | 'lesson___section___description___nodeType'
  | 'lesson___section___description___content'
  | 'lesson___section___description___description'
  | 'lesson___section___description___json'
  | 'lesson___section___spaceId'
  | 'lesson___section___contentful_id'
  | 'lesson___section___createdAt'
  | 'lesson___section___updatedAt'
  | 'lesson___section___sys___revision'
  | 'lesson___section___node_locale'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___id'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___children'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___content'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___description'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___json'
  | 'lesson___habit'
  | 'lesson___habit___id'
  | 'lesson___habit___parent___id'
  | 'lesson___habit___parent___children'
  | 'lesson___habit___children'
  | 'lesson___habit___children___id'
  | 'lesson___habit___children___children'
  | 'lesson___habit___internal___content'
  | 'lesson___habit___internal___contentDigest'
  | 'lesson___habit___internal___description'
  | 'lesson___habit___internal___fieldOwners'
  | 'lesson___habit___internal___ignoreType'
  | 'lesson___habit___internal___mediaType'
  | 'lesson___habit___internal___owner'
  | 'lesson___habit___internal___type'
  | 'lesson___habit___title'
  | 'lesson___habit___slug'
  | 'lesson___habit___period'
  | 'lesson___habit___lesson'
  | 'lesson___habit___lesson___id'
  | 'lesson___habit___lesson___children'
  | 'lesson___habit___lesson___lessonName'
  | 'lesson___habit___lesson___slug'
  | 'lesson___habit___lesson___keywords'
  | 'lesson___habit___lesson___author'
  | 'lesson___habit___lesson___stage'
  | 'lesson___habit___lesson___authorCard'
  | 'lesson___habit___lesson___habit'
  | 'lesson___habit___lesson___week'
  | 'lesson___habit___lesson___spaceId'
  | 'lesson___habit___lesson___contentful_id'
  | 'lesson___habit___lesson___createdAt'
  | 'lesson___habit___lesson___updatedAt'
  | 'lesson___habit___lesson___node_locale'
  | 'lesson___habit___lesson___metalesson'
  | 'lesson___habit___lesson___customComplete'
  | 'lesson___habit___description___id'
  | 'lesson___habit___description___children'
  | 'lesson___habit___description___nodeType'
  | 'lesson___habit___description___content'
  | 'lesson___habit___description___description'
  | 'lesson___habit___description___json'
  | 'lesson___habit___spaceId'
  | 'lesson___habit___contentful_id'
  | 'lesson___habit___createdAt'
  | 'lesson___habit___updatedAt'
  | 'lesson___habit___sys___revision'
  | 'lesson___habit___node_locale'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'lesson___week'
  | 'lesson___week___id'
  | 'lesson___week___parent___id'
  | 'lesson___week___parent___children'
  | 'lesson___week___children'
  | 'lesson___week___children___id'
  | 'lesson___week___children___children'
  | 'lesson___week___internal___content'
  | 'lesson___week___internal___contentDigest'
  | 'lesson___week___internal___description'
  | 'lesson___week___internal___fieldOwners'
  | 'lesson___week___internal___ignoreType'
  | 'lesson___week___internal___mediaType'
  | 'lesson___week___internal___owner'
  | 'lesson___week___internal___type'
  | 'lesson___week___order'
  | 'lesson___week___weekName'
  | 'lesson___week___slug'
  | 'lesson___week___intro'
  | 'lesson___week___taskCount'
  | 'lesson___week___locked'
  | 'lesson___week___duration'
  | 'lesson___week___coverPhoto___id'
  | 'lesson___week___coverPhoto___children'
  | 'lesson___week___coverPhoto___contentful_id'
  | 'lesson___week___coverPhoto___title'
  | 'lesson___week___coverPhoto___description'
  | 'lesson___week___coverPhoto___node_locale'
  | 'lesson___week___lessons'
  | 'lesson___week___lessons___id'
  | 'lesson___week___lessons___children'
  | 'lesson___week___lessons___lessonName'
  | 'lesson___week___lessons___slug'
  | 'lesson___week___lessons___keywords'
  | 'lesson___week___lessons___author'
  | 'lesson___week___lessons___stage'
  | 'lesson___week___lessons___authorCard'
  | 'lesson___week___lessons___habit'
  | 'lesson___week___lessons___week'
  | 'lesson___week___lessons___spaceId'
  | 'lesson___week___lessons___contentful_id'
  | 'lesson___week___lessons___createdAt'
  | 'lesson___week___lessons___updatedAt'
  | 'lesson___week___lessons___node_locale'
  | 'lesson___week___lessons___metalesson'
  | 'lesson___week___lessons___customComplete'
  | 'lesson___week___weekDescription___id'
  | 'lesson___week___weekDescription___children'
  | 'lesson___week___weekDescription___nodeType'
  | 'lesson___week___weekDescription___content'
  | 'lesson___week___weekDescription___weekDescription'
  | 'lesson___week___weekDescription___json'
  | 'lesson___week___spaceId'
  | 'lesson___week___contentful_id'
  | 'lesson___week___createdAt'
  | 'lesson___week___updatedAt'
  | 'lesson___week___sys___revision'
  | 'lesson___week___node_locale'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'lesson___lessonContent___id'
  | 'lesson___lessonContent___parent___id'
  | 'lesson___lessonContent___parent___children'
  | 'lesson___lessonContent___children'
  | 'lesson___lessonContent___children___id'
  | 'lesson___lessonContent___children___children'
  | 'lesson___lessonContent___internal___content'
  | 'lesson___lessonContent___internal___contentDigest'
  | 'lesson___lessonContent___internal___description'
  | 'lesson___lessonContent___internal___fieldOwners'
  | 'lesson___lessonContent___internal___ignoreType'
  | 'lesson___lessonContent___internal___mediaType'
  | 'lesson___lessonContent___internal___owner'
  | 'lesson___lessonContent___internal___type'
  | 'lesson___lessonContent___nodeType'
  | 'lesson___lessonContent___content'
  | 'lesson___lessonContent___content___nodeType'
  | 'lesson___lessonContent___content___content'
  | 'lesson___lessonContent___lessonContent'
  | 'lesson___lessonContent___fields___excerpt'
  | 'lesson___lessonContent___json'
  | 'lesson___additionalInformation___id'
  | 'lesson___additionalInformation___parent___id'
  | 'lesson___additionalInformation___parent___children'
  | 'lesson___additionalInformation___children'
  | 'lesson___additionalInformation___children___id'
  | 'lesson___additionalInformation___children___children'
  | 'lesson___additionalInformation___internal___content'
  | 'lesson___additionalInformation___internal___contentDigest'
  | 'lesson___additionalInformation___internal___description'
  | 'lesson___additionalInformation___internal___fieldOwners'
  | 'lesson___additionalInformation___internal___ignoreType'
  | 'lesson___additionalInformation___internal___mediaType'
  | 'lesson___additionalInformation___internal___owner'
  | 'lesson___additionalInformation___internal___type'
  | 'lesson___additionalInformation___content'
  | 'lesson___additionalInformation___content___content'
  | 'lesson___additionalInformation___content___nodeType'
  | 'lesson___additionalInformation___nodeType'
  | 'lesson___additionalInformation___additionalInformation'
  | 'lesson___additionalInformation___fields___excerpt'
  | 'lesson___additionalInformation___json'
  | 'lesson___weights___id'
  | 'lesson___weights___parent___id'
  | 'lesson___weights___parent___children'
  | 'lesson___weights___children'
  | 'lesson___weights___children___id'
  | 'lesson___weights___children___children'
  | 'lesson___weights___internal___content'
  | 'lesson___weights___internal___contentDigest'
  | 'lesson___weights___internal___description'
  | 'lesson___weights___internal___fieldOwners'
  | 'lesson___weights___internal___ignoreType'
  | 'lesson___weights___internal___mediaType'
  | 'lesson___weights___internal___owner'
  | 'lesson___weights___internal___type'
  | 'lesson___weights___jetlag'
  | 'lesson___weights___duration'
  | 'lesson___weights___efficiency'
  | 'lesson___weights___consistency'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'lesson___spaceId'
  | 'lesson___contentful_id'
  | 'lesson___createdAt'
  | 'lesson___updatedAt'
  | 'lesson___sys___revision'
  | 'lesson___node_locale'
  | 'lesson___metalesson'
  | 'lesson___metalesson___id'
  | 'lesson___metalesson___parent___id'
  | 'lesson___metalesson___parent___children'
  | 'lesson___metalesson___children'
  | 'lesson___metalesson___children___id'
  | 'lesson___metalesson___children___children'
  | 'lesson___metalesson___internal___content'
  | 'lesson___metalesson___internal___contentDigest'
  | 'lesson___metalesson___internal___description'
  | 'lesson___metalesson___internal___fieldOwners'
  | 'lesson___metalesson___internal___ignoreType'
  | 'lesson___metalesson___internal___mediaType'
  | 'lesson___metalesson___internal___owner'
  | 'lesson___metalesson___internal___type'
  | 'lesson___metalesson___title'
  | 'lesson___metalesson___slug'
  | 'lesson___metalesson___keywords'
  | 'lesson___metalesson___lessons'
  | 'lesson___metalesson___lessons___id'
  | 'lesson___metalesson___lessons___children'
  | 'lesson___metalesson___lessons___lessonName'
  | 'lesson___metalesson___lessons___slug'
  | 'lesson___metalesson___lessons___keywords'
  | 'lesson___metalesson___lessons___author'
  | 'lesson___metalesson___lessons___stage'
  | 'lesson___metalesson___lessons___authorCard'
  | 'lesson___metalesson___lessons___habit'
  | 'lesson___metalesson___lessons___week'
  | 'lesson___metalesson___lessons___spaceId'
  | 'lesson___metalesson___lessons___contentful_id'
  | 'lesson___metalesson___lessons___createdAt'
  | 'lesson___metalesson___lessons___updatedAt'
  | 'lesson___metalesson___lessons___node_locale'
  | 'lesson___metalesson___lessons___metalesson'
  | 'lesson___metalesson___lessons___customComplete'
  | 'lesson___metalesson___relatedContent'
  | 'lesson___metalesson___relatedContent___id'
  | 'lesson___metalesson___relatedContent___children'
  | 'lesson___metalesson___relatedContent___lessonName'
  | 'lesson___metalesson___relatedContent___slug'
  | 'lesson___metalesson___relatedContent___keywords'
  | 'lesson___metalesson___relatedContent___author'
  | 'lesson___metalesson___relatedContent___stage'
  | 'lesson___metalesson___relatedContent___authorCard'
  | 'lesson___metalesson___relatedContent___habit'
  | 'lesson___metalesson___relatedContent___week'
  | 'lesson___metalesson___relatedContent___spaceId'
  | 'lesson___metalesson___relatedContent___contentful_id'
  | 'lesson___metalesson___relatedContent___createdAt'
  | 'lesson___metalesson___relatedContent___updatedAt'
  | 'lesson___metalesson___relatedContent___node_locale'
  | 'lesson___metalesson___relatedContent___metalesson'
  | 'lesson___metalesson___relatedContent___customComplete'
  | 'lesson___metalesson___spaceId'
  | 'lesson___metalesson___contentful_id'
  | 'lesson___metalesson___createdAt'
  | 'lesson___metalesson___updatedAt'
  | 'lesson___metalesson___sys___revision'
  | 'lesson___metalesson___node_locale'
  | 'lesson___customComplete'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___json'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'lesson___childContentfulLessonWeightsJsonNode___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency';

export type ContentfulAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  credentials?: Maybe<StringQueryOperatorInput>;
  avatar?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
};

export type ContentfulAuthorFilterListInput = {
  elemMatch?: Maybe<ContentfulAuthorFilterInput>;
};

export type ContentfulAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabit = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  lesson?: Maybe<Array<Maybe<ContentfulLesson>>>;
  description?: Maybe<ContentfulHabitDescriptionRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHabitSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulHabitDescriptionRichTextNode?: Maybe<ContentfulHabitDescriptionRichTextNode>;
};


export type ContentfulHabitCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHabitUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHabitConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHabitEdge>;
  nodes: Array<ContentfulHabit>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHabitGroupConnection>;
};


export type ContentfulHabitConnectionDistinctArgs = {
  field: ContentfulHabitFieldsEnum;
};


export type ContentfulHabitConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHabitFieldsEnum;
};

export type ContentfulHabitDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulHabitDescriptionRichTextNodeContent>>>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulHabitDescriptionRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulHabitDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHabitDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulHabitDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHabitDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulHabitDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulHabitDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulHabitDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHabitDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulHabitDescriptionRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulHabitDescriptionRichTextNodeContentContent>>>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<ContentfulHabitDescriptionRichTextNodeContentContentMarks>>>;
  content?: Maybe<Array<Maybe<ContentfulHabitDescriptionRichTextNodeContentContentContent>>>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulHabitDescriptionRichTextNodeContentContentContentContent>>>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentContentContentFilterInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentContentContentFilterListInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentMarksFilterListInput>;
  content?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentMarksFilterInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHabitDescriptionRichTextNodeContentContentFilterListInput>;
};

export type ContentfulHabitDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulHabitDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulHabitDescriptionRichTextNode>;
  node: ContentfulHabitDescriptionRichTextNode;
  previous?: Maybe<ContentfulHabitDescriptionRichTextNode>;
};

export type ContentfulHabitDescriptionRichTextNodeFields = {
  readingTime?: Maybe<ContentfulHabitDescriptionRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulHabitDescriptionRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'content___content___marks'
  | 'content___content___marks___type'
  | 'content___content___content'
  | 'content___content___content___nodeType'
  | 'content___content___content___content'
  | 'description'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulHabitDescriptionRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulHabitDescriptionRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabitDescriptionRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulHabitDescriptionRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulHabitDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHabitDescriptionRichTextNodeContentFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulHabitDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulHabitDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHabitDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulHabitDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHabitDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHabitDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHabitEdge = {
  next?: Maybe<ContentfulHabit>;
  node: ContentfulHabit;
  previous?: Maybe<ContentfulHabit>;
};

export type ContentfulHabitFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'period'
  | 'lesson'
  | 'lesson___id'
  | 'lesson___parent___id'
  | 'lesson___parent___parent___id'
  | 'lesson___parent___parent___children'
  | 'lesson___parent___children'
  | 'lesson___parent___children___id'
  | 'lesson___parent___children___children'
  | 'lesson___parent___internal___content'
  | 'lesson___parent___internal___contentDigest'
  | 'lesson___parent___internal___description'
  | 'lesson___parent___internal___fieldOwners'
  | 'lesson___parent___internal___ignoreType'
  | 'lesson___parent___internal___mediaType'
  | 'lesson___parent___internal___owner'
  | 'lesson___parent___internal___type'
  | 'lesson___children'
  | 'lesson___children___id'
  | 'lesson___children___parent___id'
  | 'lesson___children___parent___children'
  | 'lesson___children___children'
  | 'lesson___children___children___id'
  | 'lesson___children___children___children'
  | 'lesson___children___internal___content'
  | 'lesson___children___internal___contentDigest'
  | 'lesson___children___internal___description'
  | 'lesson___children___internal___fieldOwners'
  | 'lesson___children___internal___ignoreType'
  | 'lesson___children___internal___mediaType'
  | 'lesson___children___internal___owner'
  | 'lesson___children___internal___type'
  | 'lesson___internal___content'
  | 'lesson___internal___contentDigest'
  | 'lesson___internal___description'
  | 'lesson___internal___fieldOwners'
  | 'lesson___internal___ignoreType'
  | 'lesson___internal___mediaType'
  | 'lesson___internal___owner'
  | 'lesson___internal___type'
  | 'lesson___lessonName'
  | 'lesson___slug'
  | 'lesson___keywords'
  | 'lesson___author'
  | 'lesson___stage'
  | 'lesson___authorCard'
  | 'lesson___authorCard___id'
  | 'lesson___authorCard___parent___id'
  | 'lesson___authorCard___parent___children'
  | 'lesson___authorCard___children'
  | 'lesson___authorCard___children___id'
  | 'lesson___authorCard___children___children'
  | 'lesson___authorCard___internal___content'
  | 'lesson___authorCard___internal___contentDigest'
  | 'lesson___authorCard___internal___description'
  | 'lesson___authorCard___internal___fieldOwners'
  | 'lesson___authorCard___internal___ignoreType'
  | 'lesson___authorCard___internal___mediaType'
  | 'lesson___authorCard___internal___owner'
  | 'lesson___authorCard___internal___type'
  | 'lesson___authorCard___slug'
  | 'lesson___authorCard___name'
  | 'lesson___authorCard___credentials'
  | 'lesson___authorCard___avatar___id'
  | 'lesson___authorCard___avatar___children'
  | 'lesson___authorCard___avatar___contentful_id'
  | 'lesson___authorCard___avatar___title'
  | 'lesson___authorCard___avatar___description'
  | 'lesson___authorCard___avatar___node_locale'
  | 'lesson___authorCard___spaceId'
  | 'lesson___authorCard___contentful_id'
  | 'lesson___authorCard___createdAt'
  | 'lesson___authorCard___updatedAt'
  | 'lesson___authorCard___sys___revision'
  | 'lesson___authorCard___node_locale'
  | 'lesson___authorCard___lesson'
  | 'lesson___authorCard___lesson___id'
  | 'lesson___authorCard___lesson___children'
  | 'lesson___authorCard___lesson___lessonName'
  | 'lesson___authorCard___lesson___slug'
  | 'lesson___authorCard___lesson___keywords'
  | 'lesson___authorCard___lesson___author'
  | 'lesson___authorCard___lesson___stage'
  | 'lesson___authorCard___lesson___authorCard'
  | 'lesson___authorCard___lesson___habit'
  | 'lesson___authorCard___lesson___week'
  | 'lesson___authorCard___lesson___spaceId'
  | 'lesson___authorCard___lesson___contentful_id'
  | 'lesson___authorCard___lesson___createdAt'
  | 'lesson___authorCard___lesson___updatedAt'
  | 'lesson___authorCard___lesson___node_locale'
  | 'lesson___authorCard___lesson___metalesson'
  | 'lesson___authorCard___lesson___customComplete'
  | 'lesson___cover___id'
  | 'lesson___cover___parent___id'
  | 'lesson___cover___parent___children'
  | 'lesson___cover___children'
  | 'lesson___cover___children___id'
  | 'lesson___cover___children___children'
  | 'lesson___cover___internal___content'
  | 'lesson___cover___internal___contentDigest'
  | 'lesson___cover___internal___description'
  | 'lesson___cover___internal___fieldOwners'
  | 'lesson___cover___internal___ignoreType'
  | 'lesson___cover___internal___mediaType'
  | 'lesson___cover___internal___owner'
  | 'lesson___cover___internal___type'
  | 'lesson___cover___contentful_id'
  | 'lesson___cover___file___url'
  | 'lesson___cover___file___fileName'
  | 'lesson___cover___file___contentType'
  | 'lesson___cover___title'
  | 'lesson___cover___description'
  | 'lesson___cover___node_locale'
  | 'lesson___cover___fixed___base64'
  | 'lesson___cover___fixed___tracedSVG'
  | 'lesson___cover___fixed___aspectRatio'
  | 'lesson___cover___fixed___width'
  | 'lesson___cover___fixed___height'
  | 'lesson___cover___fixed___src'
  | 'lesson___cover___fixed___srcSet'
  | 'lesson___cover___fixed___srcWebp'
  | 'lesson___cover___fixed___srcSetWebp'
  | 'lesson___cover___resolutions___base64'
  | 'lesson___cover___resolutions___tracedSVG'
  | 'lesson___cover___resolutions___aspectRatio'
  | 'lesson___cover___resolutions___width'
  | 'lesson___cover___resolutions___height'
  | 'lesson___cover___resolutions___src'
  | 'lesson___cover___resolutions___srcSet'
  | 'lesson___cover___resolutions___srcWebp'
  | 'lesson___cover___resolutions___srcSetWebp'
  | 'lesson___cover___fluid___base64'
  | 'lesson___cover___fluid___tracedSVG'
  | 'lesson___cover___fluid___aspectRatio'
  | 'lesson___cover___fluid___src'
  | 'lesson___cover___fluid___srcSet'
  | 'lesson___cover___fluid___srcWebp'
  | 'lesson___cover___fluid___srcSetWebp'
  | 'lesson___cover___fluid___sizes'
  | 'lesson___cover___sizes___base64'
  | 'lesson___cover___sizes___tracedSVG'
  | 'lesson___cover___sizes___aspectRatio'
  | 'lesson___cover___sizes___src'
  | 'lesson___cover___sizes___srcSet'
  | 'lesson___cover___sizes___srcWebp'
  | 'lesson___cover___sizes___srcSetWebp'
  | 'lesson___cover___sizes___sizes'
  | 'lesson___cover___resize___base64'
  | 'lesson___cover___resize___tracedSVG'
  | 'lesson___cover___resize___src'
  | 'lesson___cover___resize___width'
  | 'lesson___cover___resize___height'
  | 'lesson___cover___resize___aspectRatio'
  | 'lesson___section___id'
  | 'lesson___section___parent___id'
  | 'lesson___section___parent___children'
  | 'lesson___section___children'
  | 'lesson___section___children___id'
  | 'lesson___section___children___children'
  | 'lesson___section___internal___content'
  | 'lesson___section___internal___contentDigest'
  | 'lesson___section___internal___description'
  | 'lesson___section___internal___fieldOwners'
  | 'lesson___section___internal___ignoreType'
  | 'lesson___section___internal___mediaType'
  | 'lesson___section___internal___owner'
  | 'lesson___section___internal___type'
  | 'lesson___section___order'
  | 'lesson___section___title'
  | 'lesson___section___lesson'
  | 'lesson___section___lesson___id'
  | 'lesson___section___lesson___children'
  | 'lesson___section___lesson___lessonName'
  | 'lesson___section___lesson___slug'
  | 'lesson___section___lesson___keywords'
  | 'lesson___section___lesson___author'
  | 'lesson___section___lesson___stage'
  | 'lesson___section___lesson___authorCard'
  | 'lesson___section___lesson___habit'
  | 'lesson___section___lesson___week'
  | 'lesson___section___lesson___spaceId'
  | 'lesson___section___lesson___contentful_id'
  | 'lesson___section___lesson___createdAt'
  | 'lesson___section___lesson___updatedAt'
  | 'lesson___section___lesson___node_locale'
  | 'lesson___section___lesson___metalesson'
  | 'lesson___section___lesson___customComplete'
  | 'lesson___section___description___id'
  | 'lesson___section___description___children'
  | 'lesson___section___description___nodeType'
  | 'lesson___section___description___content'
  | 'lesson___section___description___description'
  | 'lesson___section___description___json'
  | 'lesson___section___spaceId'
  | 'lesson___section___contentful_id'
  | 'lesson___section___createdAt'
  | 'lesson___section___updatedAt'
  | 'lesson___section___sys___revision'
  | 'lesson___section___node_locale'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___id'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___children'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___content'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___description'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___json'
  | 'lesson___habit'
  | 'lesson___habit___id'
  | 'lesson___habit___parent___id'
  | 'lesson___habit___parent___children'
  | 'lesson___habit___children'
  | 'lesson___habit___children___id'
  | 'lesson___habit___children___children'
  | 'lesson___habit___internal___content'
  | 'lesson___habit___internal___contentDigest'
  | 'lesson___habit___internal___description'
  | 'lesson___habit___internal___fieldOwners'
  | 'lesson___habit___internal___ignoreType'
  | 'lesson___habit___internal___mediaType'
  | 'lesson___habit___internal___owner'
  | 'lesson___habit___internal___type'
  | 'lesson___habit___title'
  | 'lesson___habit___slug'
  | 'lesson___habit___period'
  | 'lesson___habit___lesson'
  | 'lesson___habit___lesson___id'
  | 'lesson___habit___lesson___children'
  | 'lesson___habit___lesson___lessonName'
  | 'lesson___habit___lesson___slug'
  | 'lesson___habit___lesson___keywords'
  | 'lesson___habit___lesson___author'
  | 'lesson___habit___lesson___stage'
  | 'lesson___habit___lesson___authorCard'
  | 'lesson___habit___lesson___habit'
  | 'lesson___habit___lesson___week'
  | 'lesson___habit___lesson___spaceId'
  | 'lesson___habit___lesson___contentful_id'
  | 'lesson___habit___lesson___createdAt'
  | 'lesson___habit___lesson___updatedAt'
  | 'lesson___habit___lesson___node_locale'
  | 'lesson___habit___lesson___metalesson'
  | 'lesson___habit___lesson___customComplete'
  | 'lesson___habit___description___id'
  | 'lesson___habit___description___children'
  | 'lesson___habit___description___nodeType'
  | 'lesson___habit___description___content'
  | 'lesson___habit___description___description'
  | 'lesson___habit___description___json'
  | 'lesson___habit___spaceId'
  | 'lesson___habit___contentful_id'
  | 'lesson___habit___createdAt'
  | 'lesson___habit___updatedAt'
  | 'lesson___habit___sys___revision'
  | 'lesson___habit___node_locale'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'lesson___week'
  | 'lesson___week___id'
  | 'lesson___week___parent___id'
  | 'lesson___week___parent___children'
  | 'lesson___week___children'
  | 'lesson___week___children___id'
  | 'lesson___week___children___children'
  | 'lesson___week___internal___content'
  | 'lesson___week___internal___contentDigest'
  | 'lesson___week___internal___description'
  | 'lesson___week___internal___fieldOwners'
  | 'lesson___week___internal___ignoreType'
  | 'lesson___week___internal___mediaType'
  | 'lesson___week___internal___owner'
  | 'lesson___week___internal___type'
  | 'lesson___week___order'
  | 'lesson___week___weekName'
  | 'lesson___week___slug'
  | 'lesson___week___intro'
  | 'lesson___week___taskCount'
  | 'lesson___week___locked'
  | 'lesson___week___duration'
  | 'lesson___week___coverPhoto___id'
  | 'lesson___week___coverPhoto___children'
  | 'lesson___week___coverPhoto___contentful_id'
  | 'lesson___week___coverPhoto___title'
  | 'lesson___week___coverPhoto___description'
  | 'lesson___week___coverPhoto___node_locale'
  | 'lesson___week___lessons'
  | 'lesson___week___lessons___id'
  | 'lesson___week___lessons___children'
  | 'lesson___week___lessons___lessonName'
  | 'lesson___week___lessons___slug'
  | 'lesson___week___lessons___keywords'
  | 'lesson___week___lessons___author'
  | 'lesson___week___lessons___stage'
  | 'lesson___week___lessons___authorCard'
  | 'lesson___week___lessons___habit'
  | 'lesson___week___lessons___week'
  | 'lesson___week___lessons___spaceId'
  | 'lesson___week___lessons___contentful_id'
  | 'lesson___week___lessons___createdAt'
  | 'lesson___week___lessons___updatedAt'
  | 'lesson___week___lessons___node_locale'
  | 'lesson___week___lessons___metalesson'
  | 'lesson___week___lessons___customComplete'
  | 'lesson___week___weekDescription___id'
  | 'lesson___week___weekDescription___children'
  | 'lesson___week___weekDescription___nodeType'
  | 'lesson___week___weekDescription___content'
  | 'lesson___week___weekDescription___weekDescription'
  | 'lesson___week___weekDescription___json'
  | 'lesson___week___spaceId'
  | 'lesson___week___contentful_id'
  | 'lesson___week___createdAt'
  | 'lesson___week___updatedAt'
  | 'lesson___week___sys___revision'
  | 'lesson___week___node_locale'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'lesson___lessonContent___id'
  | 'lesson___lessonContent___parent___id'
  | 'lesson___lessonContent___parent___children'
  | 'lesson___lessonContent___children'
  | 'lesson___lessonContent___children___id'
  | 'lesson___lessonContent___children___children'
  | 'lesson___lessonContent___internal___content'
  | 'lesson___lessonContent___internal___contentDigest'
  | 'lesson___lessonContent___internal___description'
  | 'lesson___lessonContent___internal___fieldOwners'
  | 'lesson___lessonContent___internal___ignoreType'
  | 'lesson___lessonContent___internal___mediaType'
  | 'lesson___lessonContent___internal___owner'
  | 'lesson___lessonContent___internal___type'
  | 'lesson___lessonContent___nodeType'
  | 'lesson___lessonContent___content'
  | 'lesson___lessonContent___content___nodeType'
  | 'lesson___lessonContent___content___content'
  | 'lesson___lessonContent___lessonContent'
  | 'lesson___lessonContent___fields___excerpt'
  | 'lesson___lessonContent___json'
  | 'lesson___additionalInformation___id'
  | 'lesson___additionalInformation___parent___id'
  | 'lesson___additionalInformation___parent___children'
  | 'lesson___additionalInformation___children'
  | 'lesson___additionalInformation___children___id'
  | 'lesson___additionalInformation___children___children'
  | 'lesson___additionalInformation___internal___content'
  | 'lesson___additionalInformation___internal___contentDigest'
  | 'lesson___additionalInformation___internal___description'
  | 'lesson___additionalInformation___internal___fieldOwners'
  | 'lesson___additionalInformation___internal___ignoreType'
  | 'lesson___additionalInformation___internal___mediaType'
  | 'lesson___additionalInformation___internal___owner'
  | 'lesson___additionalInformation___internal___type'
  | 'lesson___additionalInformation___content'
  | 'lesson___additionalInformation___content___content'
  | 'lesson___additionalInformation___content___nodeType'
  | 'lesson___additionalInformation___nodeType'
  | 'lesson___additionalInformation___additionalInformation'
  | 'lesson___additionalInformation___fields___excerpt'
  | 'lesson___additionalInformation___json'
  | 'lesson___weights___id'
  | 'lesson___weights___parent___id'
  | 'lesson___weights___parent___children'
  | 'lesson___weights___children'
  | 'lesson___weights___children___id'
  | 'lesson___weights___children___children'
  | 'lesson___weights___internal___content'
  | 'lesson___weights___internal___contentDigest'
  | 'lesson___weights___internal___description'
  | 'lesson___weights___internal___fieldOwners'
  | 'lesson___weights___internal___ignoreType'
  | 'lesson___weights___internal___mediaType'
  | 'lesson___weights___internal___owner'
  | 'lesson___weights___internal___type'
  | 'lesson___weights___jetlag'
  | 'lesson___weights___duration'
  | 'lesson___weights___efficiency'
  | 'lesson___weights___consistency'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'lesson___spaceId'
  | 'lesson___contentful_id'
  | 'lesson___createdAt'
  | 'lesson___updatedAt'
  | 'lesson___sys___revision'
  | 'lesson___node_locale'
  | 'lesson___metalesson'
  | 'lesson___metalesson___id'
  | 'lesson___metalesson___parent___id'
  | 'lesson___metalesson___parent___children'
  | 'lesson___metalesson___children'
  | 'lesson___metalesson___children___id'
  | 'lesson___metalesson___children___children'
  | 'lesson___metalesson___internal___content'
  | 'lesson___metalesson___internal___contentDigest'
  | 'lesson___metalesson___internal___description'
  | 'lesson___metalesson___internal___fieldOwners'
  | 'lesson___metalesson___internal___ignoreType'
  | 'lesson___metalesson___internal___mediaType'
  | 'lesson___metalesson___internal___owner'
  | 'lesson___metalesson___internal___type'
  | 'lesson___metalesson___title'
  | 'lesson___metalesson___slug'
  | 'lesson___metalesson___keywords'
  | 'lesson___metalesson___lessons'
  | 'lesson___metalesson___lessons___id'
  | 'lesson___metalesson___lessons___children'
  | 'lesson___metalesson___lessons___lessonName'
  | 'lesson___metalesson___lessons___slug'
  | 'lesson___metalesson___lessons___keywords'
  | 'lesson___metalesson___lessons___author'
  | 'lesson___metalesson___lessons___stage'
  | 'lesson___metalesson___lessons___authorCard'
  | 'lesson___metalesson___lessons___habit'
  | 'lesson___metalesson___lessons___week'
  | 'lesson___metalesson___lessons___spaceId'
  | 'lesson___metalesson___lessons___contentful_id'
  | 'lesson___metalesson___lessons___createdAt'
  | 'lesson___metalesson___lessons___updatedAt'
  | 'lesson___metalesson___lessons___node_locale'
  | 'lesson___metalesson___lessons___metalesson'
  | 'lesson___metalesson___lessons___customComplete'
  | 'lesson___metalesson___relatedContent'
  | 'lesson___metalesson___relatedContent___id'
  | 'lesson___metalesson___relatedContent___children'
  | 'lesson___metalesson___relatedContent___lessonName'
  | 'lesson___metalesson___relatedContent___slug'
  | 'lesson___metalesson___relatedContent___keywords'
  | 'lesson___metalesson___relatedContent___author'
  | 'lesson___metalesson___relatedContent___stage'
  | 'lesson___metalesson___relatedContent___authorCard'
  | 'lesson___metalesson___relatedContent___habit'
  | 'lesson___metalesson___relatedContent___week'
  | 'lesson___metalesson___relatedContent___spaceId'
  | 'lesson___metalesson___relatedContent___contentful_id'
  | 'lesson___metalesson___relatedContent___createdAt'
  | 'lesson___metalesson___relatedContent___updatedAt'
  | 'lesson___metalesson___relatedContent___node_locale'
  | 'lesson___metalesson___relatedContent___metalesson'
  | 'lesson___metalesson___relatedContent___customComplete'
  | 'lesson___metalesson___spaceId'
  | 'lesson___metalesson___contentful_id'
  | 'lesson___metalesson___createdAt'
  | 'lesson___metalesson___updatedAt'
  | 'lesson___metalesson___sys___revision'
  | 'lesson___metalesson___node_locale'
  | 'lesson___customComplete'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___json'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'lesson___childContentfulLessonWeightsJsonNode___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___nodeType'
  | 'description___content'
  | 'description___content___nodeType'
  | 'description___content___content'
  | 'description___content___content___nodeType'
  | 'description___content___content___value'
  | 'description___content___content___marks'
  | 'description___content___content___content'
  | 'description___description'
  | 'description___fields___readingTime___text'
  | 'description___fields___readingTime___minutes'
  | 'description___fields___readingTime___time'
  | 'description___fields___readingTime___words'
  | 'description___fields___excerpt'
  | 'description___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulHabitDescriptionRichTextNode___id'
  | 'childContentfulHabitDescriptionRichTextNode___parent___id'
  | 'childContentfulHabitDescriptionRichTextNode___parent___parent___id'
  | 'childContentfulHabitDescriptionRichTextNode___parent___parent___children'
  | 'childContentfulHabitDescriptionRichTextNode___parent___children'
  | 'childContentfulHabitDescriptionRichTextNode___parent___children___id'
  | 'childContentfulHabitDescriptionRichTextNode___parent___children___children'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___content'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___contentDigest'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___description'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___ignoreType'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___mediaType'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___owner'
  | 'childContentfulHabitDescriptionRichTextNode___parent___internal___type'
  | 'childContentfulHabitDescriptionRichTextNode___children'
  | 'childContentfulHabitDescriptionRichTextNode___children___id'
  | 'childContentfulHabitDescriptionRichTextNode___children___parent___id'
  | 'childContentfulHabitDescriptionRichTextNode___children___parent___children'
  | 'childContentfulHabitDescriptionRichTextNode___children___children'
  | 'childContentfulHabitDescriptionRichTextNode___children___children___id'
  | 'childContentfulHabitDescriptionRichTextNode___children___children___children'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___content'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___contentDigest'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___description'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___fieldOwners'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___ignoreType'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___mediaType'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___owner'
  | 'childContentfulHabitDescriptionRichTextNode___children___internal___type'
  | 'childContentfulHabitDescriptionRichTextNode___internal___content'
  | 'childContentfulHabitDescriptionRichTextNode___internal___contentDigest'
  | 'childContentfulHabitDescriptionRichTextNode___internal___description'
  | 'childContentfulHabitDescriptionRichTextNode___internal___fieldOwners'
  | 'childContentfulHabitDescriptionRichTextNode___internal___ignoreType'
  | 'childContentfulHabitDescriptionRichTextNode___internal___mediaType'
  | 'childContentfulHabitDescriptionRichTextNode___internal___owner'
  | 'childContentfulHabitDescriptionRichTextNode___internal___type'
  | 'childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'childContentfulHabitDescriptionRichTextNode___content'
  | 'childContentfulHabitDescriptionRichTextNode___content___nodeType'
  | 'childContentfulHabitDescriptionRichTextNode___content___content'
  | 'childContentfulHabitDescriptionRichTextNode___content___content___nodeType'
  | 'childContentfulHabitDescriptionRichTextNode___content___content___value'
  | 'childContentfulHabitDescriptionRichTextNode___content___content___marks'
  | 'childContentfulHabitDescriptionRichTextNode___content___content___content'
  | 'childContentfulHabitDescriptionRichTextNode___description'
  | 'childContentfulHabitDescriptionRichTextNode___fields___readingTime___text'
  | 'childContentfulHabitDescriptionRichTextNode___fields___readingTime___minutes'
  | 'childContentfulHabitDescriptionRichTextNode___fields___readingTime___time'
  | 'childContentfulHabitDescriptionRichTextNode___fields___readingTime___words'
  | 'childContentfulHabitDescriptionRichTextNode___fields___excerpt'
  | 'childContentfulHabitDescriptionRichTextNode___json';

export type ContentfulHabitFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  period?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  description?: Maybe<ContentfulHabitDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHabitSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHabitDescriptionRichTextNode?: Maybe<ContentfulHabitDescriptionRichTextNodeFilterInput>;
};

export type ContentfulHabitFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitFilterInput>;
};

export type ContentfulHabitGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHabitEdge>;
  nodes: Array<ContentfulHabit>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHabitSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHabitFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHabitSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHabitSysContentType>;
};

export type ContentfulHabitSysContentType = {
  sys?: Maybe<ContentfulHabitSysContentTypeSys>;
};

export type ContentfulHabitSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHabitSysContentTypeSysFilterInput>;
};

export type ContentfulHabitSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulHabitSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabitSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHabitSysContentTypeFilterInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulLesson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  lessonName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['Int']>;
  authorCard?: Maybe<Array<Maybe<ContentfulAuthor>>>;
  cover?: Maybe<ContentfulAsset>;
  section?: Maybe<ContentfulSection>;
  habit?: Maybe<Array<Maybe<ContentfulHabit>>>;
  week?: Maybe<Array<Maybe<ContentfulWeek>>>;
  lessonContent?: Maybe<ContentfulLessonLessonContentRichTextNode>;
  additionalInformation?: Maybe<ContentfulLessonAdditionalInformationRichTextNode>;
  weights?: Maybe<ContentfulLessonWeightsJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLessonSys>;
  node_locale?: Maybe<Scalars['String']>;
  metalesson?: Maybe<Array<Maybe<ContentfulMetalesson>>>;
  customComplete?: Maybe<Scalars['String']>;
  childContentfulLessonLessonContentRichTextNode?: Maybe<ContentfulLessonLessonContentRichTextNode>;
  childContentfulLessonAdditionalInformationRichTextNode?: Maybe<ContentfulLessonAdditionalInformationRichTextNode>;
  childContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNode>;
};


export type ContentfulLessonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLessonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  additionalInformation?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonAdditionalInformationRichTextNodeEdge>;
  nodes: Array<ContentfulLessonAdditionalInformationRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonAdditionalInformationRichTextNodeGroupConnection>;
};


export type ContentfulLessonAdditionalInformationRichTextNodeConnectionDistinctArgs = {
  field: ContentfulLessonAdditionalInformationRichTextNodeFieldsEnum;
};


export type ContentfulLessonAdditionalInformationRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonAdditionalInformationRichTextNodeFieldsEnum;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContent = {
  data?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentData>;
  content?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentMarks>>>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContent = {
  data?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentData>;
  marks?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentMarks>>>;
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContent>>>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContent = {
  marks?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentMarks>>>;
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentFilterInput = {
  marks?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentMarksFilterListInput>;
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentMarksFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentData = {
  uri?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentFilterInput = {
  data?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentDataFilterInput>;
  marks?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentMarksFilterListInput>;
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentContentFilterListInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentMarksFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentData = {
  uri?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentFilterInput = {
  data?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentDataFilterInput>;
  content?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentMarksFilterListInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentMarksFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentFilterInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeEdge = {
  next?: Maybe<ContentfulLessonAdditionalInformationRichTextNode>;
  node: ContentfulLessonAdditionalInformationRichTextNode;
  previous?: Maybe<ContentfulLessonAdditionalInformationRichTextNode>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeFields = {
  readingTime?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___data___uri'
  | 'content___content___content'
  | 'content___content___content___marks'
  | 'content___content___content___value'
  | 'content___content___content___nodeType'
  | 'content___content___content___content'
  | 'content___content___nodeType'
  | 'content___content___marks'
  | 'content___content___marks___type'
  | 'content___content___value'
  | 'content___nodeType'
  | 'nodeType'
  | 'additionalInformation'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulLessonAdditionalInformationRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  additionalInformation?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonAdditionalInformationRichTextNodeEdge>;
  nodes: Array<ContentfulLessonAdditionalInformationRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonAdditionalInformationRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLessonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonEdge>;
  nodes: Array<ContentfulLesson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonGroupConnection>;
};


export type ContentfulLessonConnectionDistinctArgs = {
  field: ContentfulLessonFieldsEnum;
};


export type ContentfulLessonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonFieldsEnum;
};

export type ContentfulLessonEdge = {
  next?: Maybe<ContentfulLesson>;
  node: ContentfulLesson;
  previous?: Maybe<ContentfulLesson>;
};

export type ContentfulLessonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'lessonName'
  | 'slug'
  | 'keywords'
  | 'author'
  | 'stage'
  | 'authorCard'
  | 'authorCard___id'
  | 'authorCard___parent___id'
  | 'authorCard___parent___parent___id'
  | 'authorCard___parent___parent___children'
  | 'authorCard___parent___children'
  | 'authorCard___parent___children___id'
  | 'authorCard___parent___children___children'
  | 'authorCard___parent___internal___content'
  | 'authorCard___parent___internal___contentDigest'
  | 'authorCard___parent___internal___description'
  | 'authorCard___parent___internal___fieldOwners'
  | 'authorCard___parent___internal___ignoreType'
  | 'authorCard___parent___internal___mediaType'
  | 'authorCard___parent___internal___owner'
  | 'authorCard___parent___internal___type'
  | 'authorCard___children'
  | 'authorCard___children___id'
  | 'authorCard___children___parent___id'
  | 'authorCard___children___parent___children'
  | 'authorCard___children___children'
  | 'authorCard___children___children___id'
  | 'authorCard___children___children___children'
  | 'authorCard___children___internal___content'
  | 'authorCard___children___internal___contentDigest'
  | 'authorCard___children___internal___description'
  | 'authorCard___children___internal___fieldOwners'
  | 'authorCard___children___internal___ignoreType'
  | 'authorCard___children___internal___mediaType'
  | 'authorCard___children___internal___owner'
  | 'authorCard___children___internal___type'
  | 'authorCard___internal___content'
  | 'authorCard___internal___contentDigest'
  | 'authorCard___internal___description'
  | 'authorCard___internal___fieldOwners'
  | 'authorCard___internal___ignoreType'
  | 'authorCard___internal___mediaType'
  | 'authorCard___internal___owner'
  | 'authorCard___internal___type'
  | 'authorCard___slug'
  | 'authorCard___name'
  | 'authorCard___credentials'
  | 'authorCard___avatar___id'
  | 'authorCard___avatar___parent___id'
  | 'authorCard___avatar___parent___children'
  | 'authorCard___avatar___children'
  | 'authorCard___avatar___children___id'
  | 'authorCard___avatar___children___children'
  | 'authorCard___avatar___internal___content'
  | 'authorCard___avatar___internal___contentDigest'
  | 'authorCard___avatar___internal___description'
  | 'authorCard___avatar___internal___fieldOwners'
  | 'authorCard___avatar___internal___ignoreType'
  | 'authorCard___avatar___internal___mediaType'
  | 'authorCard___avatar___internal___owner'
  | 'authorCard___avatar___internal___type'
  | 'authorCard___avatar___contentful_id'
  | 'authorCard___avatar___file___url'
  | 'authorCard___avatar___file___fileName'
  | 'authorCard___avatar___file___contentType'
  | 'authorCard___avatar___title'
  | 'authorCard___avatar___description'
  | 'authorCard___avatar___node_locale'
  | 'authorCard___avatar___fixed___base64'
  | 'authorCard___avatar___fixed___tracedSVG'
  | 'authorCard___avatar___fixed___aspectRatio'
  | 'authorCard___avatar___fixed___width'
  | 'authorCard___avatar___fixed___height'
  | 'authorCard___avatar___fixed___src'
  | 'authorCard___avatar___fixed___srcSet'
  | 'authorCard___avatar___fixed___srcWebp'
  | 'authorCard___avatar___fixed___srcSetWebp'
  | 'authorCard___avatar___resolutions___base64'
  | 'authorCard___avatar___resolutions___tracedSVG'
  | 'authorCard___avatar___resolutions___aspectRatio'
  | 'authorCard___avatar___resolutions___width'
  | 'authorCard___avatar___resolutions___height'
  | 'authorCard___avatar___resolutions___src'
  | 'authorCard___avatar___resolutions___srcSet'
  | 'authorCard___avatar___resolutions___srcWebp'
  | 'authorCard___avatar___resolutions___srcSetWebp'
  | 'authorCard___avatar___fluid___base64'
  | 'authorCard___avatar___fluid___tracedSVG'
  | 'authorCard___avatar___fluid___aspectRatio'
  | 'authorCard___avatar___fluid___src'
  | 'authorCard___avatar___fluid___srcSet'
  | 'authorCard___avatar___fluid___srcWebp'
  | 'authorCard___avatar___fluid___srcSetWebp'
  | 'authorCard___avatar___fluid___sizes'
  | 'authorCard___avatar___sizes___base64'
  | 'authorCard___avatar___sizes___tracedSVG'
  | 'authorCard___avatar___sizes___aspectRatio'
  | 'authorCard___avatar___sizes___src'
  | 'authorCard___avatar___sizes___srcSet'
  | 'authorCard___avatar___sizes___srcWebp'
  | 'authorCard___avatar___sizes___srcSetWebp'
  | 'authorCard___avatar___sizes___sizes'
  | 'authorCard___avatar___resize___base64'
  | 'authorCard___avatar___resize___tracedSVG'
  | 'authorCard___avatar___resize___src'
  | 'authorCard___avatar___resize___width'
  | 'authorCard___avatar___resize___height'
  | 'authorCard___avatar___resize___aspectRatio'
  | 'authorCard___spaceId'
  | 'authorCard___contentful_id'
  | 'authorCard___createdAt'
  | 'authorCard___updatedAt'
  | 'authorCard___sys___revision'
  | 'authorCard___node_locale'
  | 'authorCard___lesson'
  | 'authorCard___lesson___id'
  | 'authorCard___lesson___parent___id'
  | 'authorCard___lesson___parent___children'
  | 'authorCard___lesson___children'
  | 'authorCard___lesson___children___id'
  | 'authorCard___lesson___children___children'
  | 'authorCard___lesson___internal___content'
  | 'authorCard___lesson___internal___contentDigest'
  | 'authorCard___lesson___internal___description'
  | 'authorCard___lesson___internal___fieldOwners'
  | 'authorCard___lesson___internal___ignoreType'
  | 'authorCard___lesson___internal___mediaType'
  | 'authorCard___lesson___internal___owner'
  | 'authorCard___lesson___internal___type'
  | 'authorCard___lesson___lessonName'
  | 'authorCard___lesson___slug'
  | 'authorCard___lesson___keywords'
  | 'authorCard___lesson___author'
  | 'authorCard___lesson___stage'
  | 'authorCard___lesson___authorCard'
  | 'authorCard___lesson___authorCard___id'
  | 'authorCard___lesson___authorCard___children'
  | 'authorCard___lesson___authorCard___slug'
  | 'authorCard___lesson___authorCard___name'
  | 'authorCard___lesson___authorCard___credentials'
  | 'authorCard___lesson___authorCard___spaceId'
  | 'authorCard___lesson___authorCard___contentful_id'
  | 'authorCard___lesson___authorCard___createdAt'
  | 'authorCard___lesson___authorCard___updatedAt'
  | 'authorCard___lesson___authorCard___node_locale'
  | 'authorCard___lesson___authorCard___lesson'
  | 'authorCard___lesson___cover___id'
  | 'authorCard___lesson___cover___children'
  | 'authorCard___lesson___cover___contentful_id'
  | 'authorCard___lesson___cover___title'
  | 'authorCard___lesson___cover___description'
  | 'authorCard___lesson___cover___node_locale'
  | 'authorCard___lesson___section___id'
  | 'authorCard___lesson___section___children'
  | 'authorCard___lesson___section___order'
  | 'authorCard___lesson___section___title'
  | 'authorCard___lesson___section___lesson'
  | 'authorCard___lesson___section___spaceId'
  | 'authorCard___lesson___section___contentful_id'
  | 'authorCard___lesson___section___createdAt'
  | 'authorCard___lesson___section___updatedAt'
  | 'authorCard___lesson___section___node_locale'
  | 'authorCard___lesson___habit'
  | 'authorCard___lesson___habit___id'
  | 'authorCard___lesson___habit___children'
  | 'authorCard___lesson___habit___title'
  | 'authorCard___lesson___habit___slug'
  | 'authorCard___lesson___habit___period'
  | 'authorCard___lesson___habit___lesson'
  | 'authorCard___lesson___habit___spaceId'
  | 'authorCard___lesson___habit___contentful_id'
  | 'authorCard___lesson___habit___createdAt'
  | 'authorCard___lesson___habit___updatedAt'
  | 'authorCard___lesson___habit___node_locale'
  | 'authorCard___lesson___week'
  | 'authorCard___lesson___week___id'
  | 'authorCard___lesson___week___children'
  | 'authorCard___lesson___week___order'
  | 'authorCard___lesson___week___weekName'
  | 'authorCard___lesson___week___slug'
  | 'authorCard___lesson___week___intro'
  | 'authorCard___lesson___week___taskCount'
  | 'authorCard___lesson___week___locked'
  | 'authorCard___lesson___week___duration'
  | 'authorCard___lesson___week___lessons'
  | 'authorCard___lesson___week___spaceId'
  | 'authorCard___lesson___week___contentful_id'
  | 'authorCard___lesson___week___createdAt'
  | 'authorCard___lesson___week___updatedAt'
  | 'authorCard___lesson___week___node_locale'
  | 'authorCard___lesson___lessonContent___id'
  | 'authorCard___lesson___lessonContent___children'
  | 'authorCard___lesson___lessonContent___nodeType'
  | 'authorCard___lesson___lessonContent___content'
  | 'authorCard___lesson___lessonContent___lessonContent'
  | 'authorCard___lesson___lessonContent___json'
  | 'authorCard___lesson___additionalInformation___id'
  | 'authorCard___lesson___additionalInformation___children'
  | 'authorCard___lesson___additionalInformation___content'
  | 'authorCard___lesson___additionalInformation___nodeType'
  | 'authorCard___lesson___additionalInformation___additionalInformation'
  | 'authorCard___lesson___additionalInformation___json'
  | 'authorCard___lesson___weights___id'
  | 'authorCard___lesson___weights___children'
  | 'authorCard___lesson___weights___jetlag'
  | 'authorCard___lesson___weights___duration'
  | 'authorCard___lesson___weights___efficiency'
  | 'authorCard___lesson___weights___consistency'
  | 'authorCard___lesson___spaceId'
  | 'authorCard___lesson___contentful_id'
  | 'authorCard___lesson___createdAt'
  | 'authorCard___lesson___updatedAt'
  | 'authorCard___lesson___sys___revision'
  | 'authorCard___lesson___node_locale'
  | 'authorCard___lesson___metalesson'
  | 'authorCard___lesson___metalesson___id'
  | 'authorCard___lesson___metalesson___children'
  | 'authorCard___lesson___metalesson___title'
  | 'authorCard___lesson___metalesson___slug'
  | 'authorCard___lesson___metalesson___keywords'
  | 'authorCard___lesson___metalesson___lessons'
  | 'authorCard___lesson___metalesson___relatedContent'
  | 'authorCard___lesson___metalesson___spaceId'
  | 'authorCard___lesson___metalesson___contentful_id'
  | 'authorCard___lesson___metalesson___createdAt'
  | 'authorCard___lesson___metalesson___updatedAt'
  | 'authorCard___lesson___metalesson___node_locale'
  | 'authorCard___lesson___customComplete'
  | 'authorCard___lesson___childContentfulLessonLessonContentRichTextNode___id'
  | 'authorCard___lesson___childContentfulLessonLessonContentRichTextNode___children'
  | 'authorCard___lesson___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'authorCard___lesson___childContentfulLessonLessonContentRichTextNode___content'
  | 'authorCard___lesson___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'authorCard___lesson___childContentfulLessonLessonContentRichTextNode___json'
  | 'authorCard___lesson___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'authorCard___lesson___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'authorCard___lesson___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'authorCard___lesson___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'authorCard___lesson___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'authorCard___lesson___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___id'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___children'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'cover___id'
  | 'cover___parent___id'
  | 'cover___parent___parent___id'
  | 'cover___parent___parent___children'
  | 'cover___parent___children'
  | 'cover___parent___children___id'
  | 'cover___parent___children___children'
  | 'cover___parent___internal___content'
  | 'cover___parent___internal___contentDigest'
  | 'cover___parent___internal___description'
  | 'cover___parent___internal___fieldOwners'
  | 'cover___parent___internal___ignoreType'
  | 'cover___parent___internal___mediaType'
  | 'cover___parent___internal___owner'
  | 'cover___parent___internal___type'
  | 'cover___children'
  | 'cover___children___id'
  | 'cover___children___parent___id'
  | 'cover___children___parent___children'
  | 'cover___children___children'
  | 'cover___children___children___id'
  | 'cover___children___children___children'
  | 'cover___children___internal___content'
  | 'cover___children___internal___contentDigest'
  | 'cover___children___internal___description'
  | 'cover___children___internal___fieldOwners'
  | 'cover___children___internal___ignoreType'
  | 'cover___children___internal___mediaType'
  | 'cover___children___internal___owner'
  | 'cover___children___internal___type'
  | 'cover___internal___content'
  | 'cover___internal___contentDigest'
  | 'cover___internal___description'
  | 'cover___internal___fieldOwners'
  | 'cover___internal___ignoreType'
  | 'cover___internal___mediaType'
  | 'cover___internal___owner'
  | 'cover___internal___type'
  | 'cover___contentful_id'
  | 'cover___file___url'
  | 'cover___file___details___size'
  | 'cover___file___fileName'
  | 'cover___file___contentType'
  | 'cover___title'
  | 'cover___description'
  | 'cover___node_locale'
  | 'cover___fixed___base64'
  | 'cover___fixed___tracedSVG'
  | 'cover___fixed___aspectRatio'
  | 'cover___fixed___width'
  | 'cover___fixed___height'
  | 'cover___fixed___src'
  | 'cover___fixed___srcSet'
  | 'cover___fixed___srcWebp'
  | 'cover___fixed___srcSetWebp'
  | 'cover___resolutions___base64'
  | 'cover___resolutions___tracedSVG'
  | 'cover___resolutions___aspectRatio'
  | 'cover___resolutions___width'
  | 'cover___resolutions___height'
  | 'cover___resolutions___src'
  | 'cover___resolutions___srcSet'
  | 'cover___resolutions___srcWebp'
  | 'cover___resolutions___srcSetWebp'
  | 'cover___fluid___base64'
  | 'cover___fluid___tracedSVG'
  | 'cover___fluid___aspectRatio'
  | 'cover___fluid___src'
  | 'cover___fluid___srcSet'
  | 'cover___fluid___srcWebp'
  | 'cover___fluid___srcSetWebp'
  | 'cover___fluid___sizes'
  | 'cover___sizes___base64'
  | 'cover___sizes___tracedSVG'
  | 'cover___sizes___aspectRatio'
  | 'cover___sizes___src'
  | 'cover___sizes___srcSet'
  | 'cover___sizes___srcWebp'
  | 'cover___sizes___srcSetWebp'
  | 'cover___sizes___sizes'
  | 'cover___resize___base64'
  | 'cover___resize___tracedSVG'
  | 'cover___resize___src'
  | 'cover___resize___width'
  | 'cover___resize___height'
  | 'cover___resize___aspectRatio'
  | 'section___id'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'section___order'
  | 'section___title'
  | 'section___lesson'
  | 'section___lesson___id'
  | 'section___lesson___parent___id'
  | 'section___lesson___parent___children'
  | 'section___lesson___children'
  | 'section___lesson___children___id'
  | 'section___lesson___children___children'
  | 'section___lesson___internal___content'
  | 'section___lesson___internal___contentDigest'
  | 'section___lesson___internal___description'
  | 'section___lesson___internal___fieldOwners'
  | 'section___lesson___internal___ignoreType'
  | 'section___lesson___internal___mediaType'
  | 'section___lesson___internal___owner'
  | 'section___lesson___internal___type'
  | 'section___lesson___lessonName'
  | 'section___lesson___slug'
  | 'section___lesson___keywords'
  | 'section___lesson___author'
  | 'section___lesson___stage'
  | 'section___lesson___authorCard'
  | 'section___lesson___authorCard___id'
  | 'section___lesson___authorCard___children'
  | 'section___lesson___authorCard___slug'
  | 'section___lesson___authorCard___name'
  | 'section___lesson___authorCard___credentials'
  | 'section___lesson___authorCard___spaceId'
  | 'section___lesson___authorCard___contentful_id'
  | 'section___lesson___authorCard___createdAt'
  | 'section___lesson___authorCard___updatedAt'
  | 'section___lesson___authorCard___node_locale'
  | 'section___lesson___authorCard___lesson'
  | 'section___lesson___cover___id'
  | 'section___lesson___cover___children'
  | 'section___lesson___cover___contentful_id'
  | 'section___lesson___cover___title'
  | 'section___lesson___cover___description'
  | 'section___lesson___cover___node_locale'
  | 'section___lesson___section___id'
  | 'section___lesson___section___children'
  | 'section___lesson___section___order'
  | 'section___lesson___section___title'
  | 'section___lesson___section___lesson'
  | 'section___lesson___section___spaceId'
  | 'section___lesson___section___contentful_id'
  | 'section___lesson___section___createdAt'
  | 'section___lesson___section___updatedAt'
  | 'section___lesson___section___node_locale'
  | 'section___lesson___habit'
  | 'section___lesson___habit___id'
  | 'section___lesson___habit___children'
  | 'section___lesson___habit___title'
  | 'section___lesson___habit___slug'
  | 'section___lesson___habit___period'
  | 'section___lesson___habit___lesson'
  | 'section___lesson___habit___spaceId'
  | 'section___lesson___habit___contentful_id'
  | 'section___lesson___habit___createdAt'
  | 'section___lesson___habit___updatedAt'
  | 'section___lesson___habit___node_locale'
  | 'section___lesson___week'
  | 'section___lesson___week___id'
  | 'section___lesson___week___children'
  | 'section___lesson___week___order'
  | 'section___lesson___week___weekName'
  | 'section___lesson___week___slug'
  | 'section___lesson___week___intro'
  | 'section___lesson___week___taskCount'
  | 'section___lesson___week___locked'
  | 'section___lesson___week___duration'
  | 'section___lesson___week___lessons'
  | 'section___lesson___week___spaceId'
  | 'section___lesson___week___contentful_id'
  | 'section___lesson___week___createdAt'
  | 'section___lesson___week___updatedAt'
  | 'section___lesson___week___node_locale'
  | 'section___lesson___lessonContent___id'
  | 'section___lesson___lessonContent___children'
  | 'section___lesson___lessonContent___nodeType'
  | 'section___lesson___lessonContent___content'
  | 'section___lesson___lessonContent___lessonContent'
  | 'section___lesson___lessonContent___json'
  | 'section___lesson___additionalInformation___id'
  | 'section___lesson___additionalInformation___children'
  | 'section___lesson___additionalInformation___content'
  | 'section___lesson___additionalInformation___nodeType'
  | 'section___lesson___additionalInformation___additionalInformation'
  | 'section___lesson___additionalInformation___json'
  | 'section___lesson___weights___id'
  | 'section___lesson___weights___children'
  | 'section___lesson___weights___jetlag'
  | 'section___lesson___weights___duration'
  | 'section___lesson___weights___efficiency'
  | 'section___lesson___weights___consistency'
  | 'section___lesson___spaceId'
  | 'section___lesson___contentful_id'
  | 'section___lesson___createdAt'
  | 'section___lesson___updatedAt'
  | 'section___lesson___sys___revision'
  | 'section___lesson___node_locale'
  | 'section___lesson___metalesson'
  | 'section___lesson___metalesson___id'
  | 'section___lesson___metalesson___children'
  | 'section___lesson___metalesson___title'
  | 'section___lesson___metalesson___slug'
  | 'section___lesson___metalesson___keywords'
  | 'section___lesson___metalesson___lessons'
  | 'section___lesson___metalesson___relatedContent'
  | 'section___lesson___metalesson___spaceId'
  | 'section___lesson___metalesson___contentful_id'
  | 'section___lesson___metalesson___createdAt'
  | 'section___lesson___metalesson___updatedAt'
  | 'section___lesson___metalesson___node_locale'
  | 'section___lesson___customComplete'
  | 'section___lesson___childContentfulLessonLessonContentRichTextNode___id'
  | 'section___lesson___childContentfulLessonLessonContentRichTextNode___children'
  | 'section___lesson___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'section___lesson___childContentfulLessonLessonContentRichTextNode___content'
  | 'section___lesson___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'section___lesson___childContentfulLessonLessonContentRichTextNode___json'
  | 'section___lesson___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'section___lesson___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'section___lesson___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'section___lesson___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'section___lesson___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'section___lesson___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___id'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___children'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'section___description___id'
  | 'section___description___parent___id'
  | 'section___description___parent___children'
  | 'section___description___children'
  | 'section___description___children___id'
  | 'section___description___children___children'
  | 'section___description___internal___content'
  | 'section___description___internal___contentDigest'
  | 'section___description___internal___description'
  | 'section___description___internal___fieldOwners'
  | 'section___description___internal___ignoreType'
  | 'section___description___internal___mediaType'
  | 'section___description___internal___owner'
  | 'section___description___internal___type'
  | 'section___description___nodeType'
  | 'section___description___content'
  | 'section___description___content___nodeType'
  | 'section___description___content___content'
  | 'section___description___description'
  | 'section___description___fields___excerpt'
  | 'section___description___json'
  | 'section___spaceId'
  | 'section___contentful_id'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___revision'
  | 'section___node_locale'
  | 'section___childContentfulSectionDescriptionRichTextNode___id'
  | 'section___childContentfulSectionDescriptionRichTextNode___parent___id'
  | 'section___childContentfulSectionDescriptionRichTextNode___parent___children'
  | 'section___childContentfulSectionDescriptionRichTextNode___children'
  | 'section___childContentfulSectionDescriptionRichTextNode___children___id'
  | 'section___childContentfulSectionDescriptionRichTextNode___children___children'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___content'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___contentDigest'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___description'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___fieldOwners'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___ignoreType'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___mediaType'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___owner'
  | 'section___childContentfulSectionDescriptionRichTextNode___internal___type'
  | 'section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'section___childContentfulSectionDescriptionRichTextNode___content'
  | 'section___childContentfulSectionDescriptionRichTextNode___content___nodeType'
  | 'section___childContentfulSectionDescriptionRichTextNode___content___content'
  | 'section___childContentfulSectionDescriptionRichTextNode___description'
  | 'section___childContentfulSectionDescriptionRichTextNode___fields___excerpt'
  | 'section___childContentfulSectionDescriptionRichTextNode___json'
  | 'habit'
  | 'habit___id'
  | 'habit___parent___id'
  | 'habit___parent___parent___id'
  | 'habit___parent___parent___children'
  | 'habit___parent___children'
  | 'habit___parent___children___id'
  | 'habit___parent___children___children'
  | 'habit___parent___internal___content'
  | 'habit___parent___internal___contentDigest'
  | 'habit___parent___internal___description'
  | 'habit___parent___internal___fieldOwners'
  | 'habit___parent___internal___ignoreType'
  | 'habit___parent___internal___mediaType'
  | 'habit___parent___internal___owner'
  | 'habit___parent___internal___type'
  | 'habit___children'
  | 'habit___children___id'
  | 'habit___children___parent___id'
  | 'habit___children___parent___children'
  | 'habit___children___children'
  | 'habit___children___children___id'
  | 'habit___children___children___children'
  | 'habit___children___internal___content'
  | 'habit___children___internal___contentDigest'
  | 'habit___children___internal___description'
  | 'habit___children___internal___fieldOwners'
  | 'habit___children___internal___ignoreType'
  | 'habit___children___internal___mediaType'
  | 'habit___children___internal___owner'
  | 'habit___children___internal___type'
  | 'habit___internal___content'
  | 'habit___internal___contentDigest'
  | 'habit___internal___description'
  | 'habit___internal___fieldOwners'
  | 'habit___internal___ignoreType'
  | 'habit___internal___mediaType'
  | 'habit___internal___owner'
  | 'habit___internal___type'
  | 'habit___title'
  | 'habit___slug'
  | 'habit___period'
  | 'habit___lesson'
  | 'habit___lesson___id'
  | 'habit___lesson___parent___id'
  | 'habit___lesson___parent___children'
  | 'habit___lesson___children'
  | 'habit___lesson___children___id'
  | 'habit___lesson___children___children'
  | 'habit___lesson___internal___content'
  | 'habit___lesson___internal___contentDigest'
  | 'habit___lesson___internal___description'
  | 'habit___lesson___internal___fieldOwners'
  | 'habit___lesson___internal___ignoreType'
  | 'habit___lesson___internal___mediaType'
  | 'habit___lesson___internal___owner'
  | 'habit___lesson___internal___type'
  | 'habit___lesson___lessonName'
  | 'habit___lesson___slug'
  | 'habit___lesson___keywords'
  | 'habit___lesson___author'
  | 'habit___lesson___stage'
  | 'habit___lesson___authorCard'
  | 'habit___lesson___authorCard___id'
  | 'habit___lesson___authorCard___children'
  | 'habit___lesson___authorCard___slug'
  | 'habit___lesson___authorCard___name'
  | 'habit___lesson___authorCard___credentials'
  | 'habit___lesson___authorCard___spaceId'
  | 'habit___lesson___authorCard___contentful_id'
  | 'habit___lesson___authorCard___createdAt'
  | 'habit___lesson___authorCard___updatedAt'
  | 'habit___lesson___authorCard___node_locale'
  | 'habit___lesson___authorCard___lesson'
  | 'habit___lesson___cover___id'
  | 'habit___lesson___cover___children'
  | 'habit___lesson___cover___contentful_id'
  | 'habit___lesson___cover___title'
  | 'habit___lesson___cover___description'
  | 'habit___lesson___cover___node_locale'
  | 'habit___lesson___section___id'
  | 'habit___lesson___section___children'
  | 'habit___lesson___section___order'
  | 'habit___lesson___section___title'
  | 'habit___lesson___section___lesson'
  | 'habit___lesson___section___spaceId'
  | 'habit___lesson___section___contentful_id'
  | 'habit___lesson___section___createdAt'
  | 'habit___lesson___section___updatedAt'
  | 'habit___lesson___section___node_locale'
  | 'habit___lesson___habit'
  | 'habit___lesson___habit___id'
  | 'habit___lesson___habit___children'
  | 'habit___lesson___habit___title'
  | 'habit___lesson___habit___slug'
  | 'habit___lesson___habit___period'
  | 'habit___lesson___habit___lesson'
  | 'habit___lesson___habit___spaceId'
  | 'habit___lesson___habit___contentful_id'
  | 'habit___lesson___habit___createdAt'
  | 'habit___lesson___habit___updatedAt'
  | 'habit___lesson___habit___node_locale'
  | 'habit___lesson___week'
  | 'habit___lesson___week___id'
  | 'habit___lesson___week___children'
  | 'habit___lesson___week___order'
  | 'habit___lesson___week___weekName'
  | 'habit___lesson___week___slug'
  | 'habit___lesson___week___intro'
  | 'habit___lesson___week___taskCount'
  | 'habit___lesson___week___locked'
  | 'habit___lesson___week___duration'
  | 'habit___lesson___week___lessons'
  | 'habit___lesson___week___spaceId'
  | 'habit___lesson___week___contentful_id'
  | 'habit___lesson___week___createdAt'
  | 'habit___lesson___week___updatedAt'
  | 'habit___lesson___week___node_locale'
  | 'habit___lesson___lessonContent___id'
  | 'habit___lesson___lessonContent___children'
  | 'habit___lesson___lessonContent___nodeType'
  | 'habit___lesson___lessonContent___content'
  | 'habit___lesson___lessonContent___lessonContent'
  | 'habit___lesson___lessonContent___json'
  | 'habit___lesson___additionalInformation___id'
  | 'habit___lesson___additionalInformation___children'
  | 'habit___lesson___additionalInformation___content'
  | 'habit___lesson___additionalInformation___nodeType'
  | 'habit___lesson___additionalInformation___additionalInformation'
  | 'habit___lesson___additionalInformation___json'
  | 'habit___lesson___weights___id'
  | 'habit___lesson___weights___children'
  | 'habit___lesson___weights___jetlag'
  | 'habit___lesson___weights___duration'
  | 'habit___lesson___weights___efficiency'
  | 'habit___lesson___weights___consistency'
  | 'habit___lesson___spaceId'
  | 'habit___lesson___contentful_id'
  | 'habit___lesson___createdAt'
  | 'habit___lesson___updatedAt'
  | 'habit___lesson___sys___revision'
  | 'habit___lesson___node_locale'
  | 'habit___lesson___metalesson'
  | 'habit___lesson___metalesson___id'
  | 'habit___lesson___metalesson___children'
  | 'habit___lesson___metalesson___title'
  | 'habit___lesson___metalesson___slug'
  | 'habit___lesson___metalesson___keywords'
  | 'habit___lesson___metalesson___lessons'
  | 'habit___lesson___metalesson___relatedContent'
  | 'habit___lesson___metalesson___spaceId'
  | 'habit___lesson___metalesson___contentful_id'
  | 'habit___lesson___metalesson___createdAt'
  | 'habit___lesson___metalesson___updatedAt'
  | 'habit___lesson___metalesson___node_locale'
  | 'habit___lesson___customComplete'
  | 'habit___lesson___childContentfulLessonLessonContentRichTextNode___id'
  | 'habit___lesson___childContentfulLessonLessonContentRichTextNode___children'
  | 'habit___lesson___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'habit___lesson___childContentfulLessonLessonContentRichTextNode___content'
  | 'habit___lesson___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'habit___lesson___childContentfulLessonLessonContentRichTextNode___json'
  | 'habit___lesson___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'habit___lesson___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'habit___lesson___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'habit___lesson___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'habit___lesson___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'habit___lesson___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___id'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___children'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'habit___description___id'
  | 'habit___description___parent___id'
  | 'habit___description___parent___children'
  | 'habit___description___children'
  | 'habit___description___children___id'
  | 'habit___description___children___children'
  | 'habit___description___internal___content'
  | 'habit___description___internal___contentDigest'
  | 'habit___description___internal___description'
  | 'habit___description___internal___fieldOwners'
  | 'habit___description___internal___ignoreType'
  | 'habit___description___internal___mediaType'
  | 'habit___description___internal___owner'
  | 'habit___description___internal___type'
  | 'habit___description___nodeType'
  | 'habit___description___content'
  | 'habit___description___content___nodeType'
  | 'habit___description___content___content'
  | 'habit___description___description'
  | 'habit___description___fields___excerpt'
  | 'habit___description___json'
  | 'habit___spaceId'
  | 'habit___contentful_id'
  | 'habit___createdAt'
  | 'habit___updatedAt'
  | 'habit___sys___revision'
  | 'habit___node_locale'
  | 'habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'habit___childContentfulHabitDescriptionRichTextNode___parent___id'
  | 'habit___childContentfulHabitDescriptionRichTextNode___parent___children'
  | 'habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'habit___childContentfulHabitDescriptionRichTextNode___children___id'
  | 'habit___childContentfulHabitDescriptionRichTextNode___children___children'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___content'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___contentDigest'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___description'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___fieldOwners'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___ignoreType'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___mediaType'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___owner'
  | 'habit___childContentfulHabitDescriptionRichTextNode___internal___type'
  | 'habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'habit___childContentfulHabitDescriptionRichTextNode___content___nodeType'
  | 'habit___childContentfulHabitDescriptionRichTextNode___content___content'
  | 'habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'habit___childContentfulHabitDescriptionRichTextNode___fields___excerpt'
  | 'habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'week'
  | 'week___id'
  | 'week___parent___id'
  | 'week___parent___parent___id'
  | 'week___parent___parent___children'
  | 'week___parent___children'
  | 'week___parent___children___id'
  | 'week___parent___children___children'
  | 'week___parent___internal___content'
  | 'week___parent___internal___contentDigest'
  | 'week___parent___internal___description'
  | 'week___parent___internal___fieldOwners'
  | 'week___parent___internal___ignoreType'
  | 'week___parent___internal___mediaType'
  | 'week___parent___internal___owner'
  | 'week___parent___internal___type'
  | 'week___children'
  | 'week___children___id'
  | 'week___children___parent___id'
  | 'week___children___parent___children'
  | 'week___children___children'
  | 'week___children___children___id'
  | 'week___children___children___children'
  | 'week___children___internal___content'
  | 'week___children___internal___contentDigest'
  | 'week___children___internal___description'
  | 'week___children___internal___fieldOwners'
  | 'week___children___internal___ignoreType'
  | 'week___children___internal___mediaType'
  | 'week___children___internal___owner'
  | 'week___children___internal___type'
  | 'week___internal___content'
  | 'week___internal___contentDigest'
  | 'week___internal___description'
  | 'week___internal___fieldOwners'
  | 'week___internal___ignoreType'
  | 'week___internal___mediaType'
  | 'week___internal___owner'
  | 'week___internal___type'
  | 'week___order'
  | 'week___weekName'
  | 'week___slug'
  | 'week___intro'
  | 'week___taskCount'
  | 'week___locked'
  | 'week___duration'
  | 'week___coverPhoto___id'
  | 'week___coverPhoto___parent___id'
  | 'week___coverPhoto___parent___children'
  | 'week___coverPhoto___children'
  | 'week___coverPhoto___children___id'
  | 'week___coverPhoto___children___children'
  | 'week___coverPhoto___internal___content'
  | 'week___coverPhoto___internal___contentDigest'
  | 'week___coverPhoto___internal___description'
  | 'week___coverPhoto___internal___fieldOwners'
  | 'week___coverPhoto___internal___ignoreType'
  | 'week___coverPhoto___internal___mediaType'
  | 'week___coverPhoto___internal___owner'
  | 'week___coverPhoto___internal___type'
  | 'week___coverPhoto___contentful_id'
  | 'week___coverPhoto___file___url'
  | 'week___coverPhoto___file___fileName'
  | 'week___coverPhoto___file___contentType'
  | 'week___coverPhoto___title'
  | 'week___coverPhoto___description'
  | 'week___coverPhoto___node_locale'
  | 'week___coverPhoto___fixed___base64'
  | 'week___coverPhoto___fixed___tracedSVG'
  | 'week___coverPhoto___fixed___aspectRatio'
  | 'week___coverPhoto___fixed___width'
  | 'week___coverPhoto___fixed___height'
  | 'week___coverPhoto___fixed___src'
  | 'week___coverPhoto___fixed___srcSet'
  | 'week___coverPhoto___fixed___srcWebp'
  | 'week___coverPhoto___fixed___srcSetWebp'
  | 'week___coverPhoto___resolutions___base64'
  | 'week___coverPhoto___resolutions___tracedSVG'
  | 'week___coverPhoto___resolutions___aspectRatio'
  | 'week___coverPhoto___resolutions___width'
  | 'week___coverPhoto___resolutions___height'
  | 'week___coverPhoto___resolutions___src'
  | 'week___coverPhoto___resolutions___srcSet'
  | 'week___coverPhoto___resolutions___srcWebp'
  | 'week___coverPhoto___resolutions___srcSetWebp'
  | 'week___coverPhoto___fluid___base64'
  | 'week___coverPhoto___fluid___tracedSVG'
  | 'week___coverPhoto___fluid___aspectRatio'
  | 'week___coverPhoto___fluid___src'
  | 'week___coverPhoto___fluid___srcSet'
  | 'week___coverPhoto___fluid___srcWebp'
  | 'week___coverPhoto___fluid___srcSetWebp'
  | 'week___coverPhoto___fluid___sizes'
  | 'week___coverPhoto___sizes___base64'
  | 'week___coverPhoto___sizes___tracedSVG'
  | 'week___coverPhoto___sizes___aspectRatio'
  | 'week___coverPhoto___sizes___src'
  | 'week___coverPhoto___sizes___srcSet'
  | 'week___coverPhoto___sizes___srcWebp'
  | 'week___coverPhoto___sizes___srcSetWebp'
  | 'week___coverPhoto___sizes___sizes'
  | 'week___coverPhoto___resize___base64'
  | 'week___coverPhoto___resize___tracedSVG'
  | 'week___coverPhoto___resize___src'
  | 'week___coverPhoto___resize___width'
  | 'week___coverPhoto___resize___height'
  | 'week___coverPhoto___resize___aspectRatio'
  | 'week___lessons'
  | 'week___lessons___id'
  | 'week___lessons___parent___id'
  | 'week___lessons___parent___children'
  | 'week___lessons___children'
  | 'week___lessons___children___id'
  | 'week___lessons___children___children'
  | 'week___lessons___internal___content'
  | 'week___lessons___internal___contentDigest'
  | 'week___lessons___internal___description'
  | 'week___lessons___internal___fieldOwners'
  | 'week___lessons___internal___ignoreType'
  | 'week___lessons___internal___mediaType'
  | 'week___lessons___internal___owner'
  | 'week___lessons___internal___type'
  | 'week___lessons___lessonName'
  | 'week___lessons___slug'
  | 'week___lessons___keywords'
  | 'week___lessons___author'
  | 'week___lessons___stage'
  | 'week___lessons___authorCard'
  | 'week___lessons___authorCard___id'
  | 'week___lessons___authorCard___children'
  | 'week___lessons___authorCard___slug'
  | 'week___lessons___authorCard___name'
  | 'week___lessons___authorCard___credentials'
  | 'week___lessons___authorCard___spaceId'
  | 'week___lessons___authorCard___contentful_id'
  | 'week___lessons___authorCard___createdAt'
  | 'week___lessons___authorCard___updatedAt'
  | 'week___lessons___authorCard___node_locale'
  | 'week___lessons___authorCard___lesson'
  | 'week___lessons___cover___id'
  | 'week___lessons___cover___children'
  | 'week___lessons___cover___contentful_id'
  | 'week___lessons___cover___title'
  | 'week___lessons___cover___description'
  | 'week___lessons___cover___node_locale'
  | 'week___lessons___section___id'
  | 'week___lessons___section___children'
  | 'week___lessons___section___order'
  | 'week___lessons___section___title'
  | 'week___lessons___section___lesson'
  | 'week___lessons___section___spaceId'
  | 'week___lessons___section___contentful_id'
  | 'week___lessons___section___createdAt'
  | 'week___lessons___section___updatedAt'
  | 'week___lessons___section___node_locale'
  | 'week___lessons___habit'
  | 'week___lessons___habit___id'
  | 'week___lessons___habit___children'
  | 'week___lessons___habit___title'
  | 'week___lessons___habit___slug'
  | 'week___lessons___habit___period'
  | 'week___lessons___habit___lesson'
  | 'week___lessons___habit___spaceId'
  | 'week___lessons___habit___contentful_id'
  | 'week___lessons___habit___createdAt'
  | 'week___lessons___habit___updatedAt'
  | 'week___lessons___habit___node_locale'
  | 'week___lessons___week'
  | 'week___lessons___week___id'
  | 'week___lessons___week___children'
  | 'week___lessons___week___order'
  | 'week___lessons___week___weekName'
  | 'week___lessons___week___slug'
  | 'week___lessons___week___intro'
  | 'week___lessons___week___taskCount'
  | 'week___lessons___week___locked'
  | 'week___lessons___week___duration'
  | 'week___lessons___week___lessons'
  | 'week___lessons___week___spaceId'
  | 'week___lessons___week___contentful_id'
  | 'week___lessons___week___createdAt'
  | 'week___lessons___week___updatedAt'
  | 'week___lessons___week___node_locale'
  | 'week___lessons___lessonContent___id'
  | 'week___lessons___lessonContent___children'
  | 'week___lessons___lessonContent___nodeType'
  | 'week___lessons___lessonContent___content'
  | 'week___lessons___lessonContent___lessonContent'
  | 'week___lessons___lessonContent___json'
  | 'week___lessons___additionalInformation___id'
  | 'week___lessons___additionalInformation___children'
  | 'week___lessons___additionalInformation___content'
  | 'week___lessons___additionalInformation___nodeType'
  | 'week___lessons___additionalInformation___additionalInformation'
  | 'week___lessons___additionalInformation___json'
  | 'week___lessons___weights___id'
  | 'week___lessons___weights___children'
  | 'week___lessons___weights___jetlag'
  | 'week___lessons___weights___duration'
  | 'week___lessons___weights___efficiency'
  | 'week___lessons___weights___consistency'
  | 'week___lessons___spaceId'
  | 'week___lessons___contentful_id'
  | 'week___lessons___createdAt'
  | 'week___lessons___updatedAt'
  | 'week___lessons___sys___revision'
  | 'week___lessons___node_locale'
  | 'week___lessons___metalesson'
  | 'week___lessons___metalesson___id'
  | 'week___lessons___metalesson___children'
  | 'week___lessons___metalesson___title'
  | 'week___lessons___metalesson___slug'
  | 'week___lessons___metalesson___keywords'
  | 'week___lessons___metalesson___lessons'
  | 'week___lessons___metalesson___relatedContent'
  | 'week___lessons___metalesson___spaceId'
  | 'week___lessons___metalesson___contentful_id'
  | 'week___lessons___metalesson___createdAt'
  | 'week___lessons___metalesson___updatedAt'
  | 'week___lessons___metalesson___node_locale'
  | 'week___lessons___customComplete'
  | 'week___lessons___childContentfulLessonLessonContentRichTextNode___id'
  | 'week___lessons___childContentfulLessonLessonContentRichTextNode___children'
  | 'week___lessons___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'week___lessons___childContentfulLessonLessonContentRichTextNode___content'
  | 'week___lessons___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'week___lessons___childContentfulLessonLessonContentRichTextNode___json'
  | 'week___lessons___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'week___lessons___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'week___lessons___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'week___lessons___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'week___lessons___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'week___lessons___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___id'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___children'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'week___weekDescription___id'
  | 'week___weekDescription___parent___id'
  | 'week___weekDescription___parent___children'
  | 'week___weekDescription___children'
  | 'week___weekDescription___children___id'
  | 'week___weekDescription___children___children'
  | 'week___weekDescription___internal___content'
  | 'week___weekDescription___internal___contentDigest'
  | 'week___weekDescription___internal___description'
  | 'week___weekDescription___internal___fieldOwners'
  | 'week___weekDescription___internal___ignoreType'
  | 'week___weekDescription___internal___mediaType'
  | 'week___weekDescription___internal___owner'
  | 'week___weekDescription___internal___type'
  | 'week___weekDescription___nodeType'
  | 'week___weekDescription___content'
  | 'week___weekDescription___content___nodeType'
  | 'week___weekDescription___content___content'
  | 'week___weekDescription___weekDescription'
  | 'week___weekDescription___fields___excerpt'
  | 'week___weekDescription___json'
  | 'week___spaceId'
  | 'week___contentful_id'
  | 'week___createdAt'
  | 'week___updatedAt'
  | 'week___sys___revision'
  | 'week___node_locale'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___parent___id'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___parent___children'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___children___id'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___children___children'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___content'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___contentDigest'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___description'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___fieldOwners'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___ignoreType'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___mediaType'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___owner'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___internal___type'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___content___nodeType'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___content___content'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___fields___excerpt'
  | 'week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'lessonContent___id'
  | 'lessonContent___parent___id'
  | 'lessonContent___parent___parent___id'
  | 'lessonContent___parent___parent___children'
  | 'lessonContent___parent___children'
  | 'lessonContent___parent___children___id'
  | 'lessonContent___parent___children___children'
  | 'lessonContent___parent___internal___content'
  | 'lessonContent___parent___internal___contentDigest'
  | 'lessonContent___parent___internal___description'
  | 'lessonContent___parent___internal___fieldOwners'
  | 'lessonContent___parent___internal___ignoreType'
  | 'lessonContent___parent___internal___mediaType'
  | 'lessonContent___parent___internal___owner'
  | 'lessonContent___parent___internal___type'
  | 'lessonContent___children'
  | 'lessonContent___children___id'
  | 'lessonContent___children___parent___id'
  | 'lessonContent___children___parent___children'
  | 'lessonContent___children___children'
  | 'lessonContent___children___children___id'
  | 'lessonContent___children___children___children'
  | 'lessonContent___children___internal___content'
  | 'lessonContent___children___internal___contentDigest'
  | 'lessonContent___children___internal___description'
  | 'lessonContent___children___internal___fieldOwners'
  | 'lessonContent___children___internal___ignoreType'
  | 'lessonContent___children___internal___mediaType'
  | 'lessonContent___children___internal___owner'
  | 'lessonContent___children___internal___type'
  | 'lessonContent___internal___content'
  | 'lessonContent___internal___contentDigest'
  | 'lessonContent___internal___description'
  | 'lessonContent___internal___fieldOwners'
  | 'lessonContent___internal___ignoreType'
  | 'lessonContent___internal___mediaType'
  | 'lessonContent___internal___owner'
  | 'lessonContent___internal___type'
  | 'lessonContent___nodeType'
  | 'lessonContent___content'
  | 'lessonContent___content___nodeType'
  | 'lessonContent___content___content'
  | 'lessonContent___content___content___nodeType'
  | 'lessonContent___content___content___value'
  | 'lessonContent___content___content___marks'
  | 'lessonContent___content___content___content'
  | 'lessonContent___lessonContent'
  | 'lessonContent___fields___readingTime___text'
  | 'lessonContent___fields___readingTime___minutes'
  | 'lessonContent___fields___readingTime___time'
  | 'lessonContent___fields___readingTime___words'
  | 'lessonContent___fields___excerpt'
  | 'lessonContent___json'
  | 'additionalInformation___id'
  | 'additionalInformation___parent___id'
  | 'additionalInformation___parent___parent___id'
  | 'additionalInformation___parent___parent___children'
  | 'additionalInformation___parent___children'
  | 'additionalInformation___parent___children___id'
  | 'additionalInformation___parent___children___children'
  | 'additionalInformation___parent___internal___content'
  | 'additionalInformation___parent___internal___contentDigest'
  | 'additionalInformation___parent___internal___description'
  | 'additionalInformation___parent___internal___fieldOwners'
  | 'additionalInformation___parent___internal___ignoreType'
  | 'additionalInformation___parent___internal___mediaType'
  | 'additionalInformation___parent___internal___owner'
  | 'additionalInformation___parent___internal___type'
  | 'additionalInformation___children'
  | 'additionalInformation___children___id'
  | 'additionalInformation___children___parent___id'
  | 'additionalInformation___children___parent___children'
  | 'additionalInformation___children___children'
  | 'additionalInformation___children___children___id'
  | 'additionalInformation___children___children___children'
  | 'additionalInformation___children___internal___content'
  | 'additionalInformation___children___internal___contentDigest'
  | 'additionalInformation___children___internal___description'
  | 'additionalInformation___children___internal___fieldOwners'
  | 'additionalInformation___children___internal___ignoreType'
  | 'additionalInformation___children___internal___mediaType'
  | 'additionalInformation___children___internal___owner'
  | 'additionalInformation___children___internal___type'
  | 'additionalInformation___internal___content'
  | 'additionalInformation___internal___contentDigest'
  | 'additionalInformation___internal___description'
  | 'additionalInformation___internal___fieldOwners'
  | 'additionalInformation___internal___ignoreType'
  | 'additionalInformation___internal___mediaType'
  | 'additionalInformation___internal___owner'
  | 'additionalInformation___internal___type'
  | 'additionalInformation___content'
  | 'additionalInformation___content___content'
  | 'additionalInformation___content___content___content'
  | 'additionalInformation___content___content___nodeType'
  | 'additionalInformation___content___content___marks'
  | 'additionalInformation___content___content___value'
  | 'additionalInformation___content___nodeType'
  | 'additionalInformation___nodeType'
  | 'additionalInformation___additionalInformation'
  | 'additionalInformation___fields___readingTime___text'
  | 'additionalInformation___fields___readingTime___minutes'
  | 'additionalInformation___fields___readingTime___time'
  | 'additionalInformation___fields___readingTime___words'
  | 'additionalInformation___fields___excerpt'
  | 'additionalInformation___json'
  | 'weights___id'
  | 'weights___parent___id'
  | 'weights___parent___parent___id'
  | 'weights___parent___parent___children'
  | 'weights___parent___children'
  | 'weights___parent___children___id'
  | 'weights___parent___children___children'
  | 'weights___parent___internal___content'
  | 'weights___parent___internal___contentDigest'
  | 'weights___parent___internal___description'
  | 'weights___parent___internal___fieldOwners'
  | 'weights___parent___internal___ignoreType'
  | 'weights___parent___internal___mediaType'
  | 'weights___parent___internal___owner'
  | 'weights___parent___internal___type'
  | 'weights___children'
  | 'weights___children___id'
  | 'weights___children___parent___id'
  | 'weights___children___parent___children'
  | 'weights___children___children'
  | 'weights___children___children___id'
  | 'weights___children___children___children'
  | 'weights___children___internal___content'
  | 'weights___children___internal___contentDigest'
  | 'weights___children___internal___description'
  | 'weights___children___internal___fieldOwners'
  | 'weights___children___internal___ignoreType'
  | 'weights___children___internal___mediaType'
  | 'weights___children___internal___owner'
  | 'weights___children___internal___type'
  | 'weights___internal___content'
  | 'weights___internal___contentDigest'
  | 'weights___internal___description'
  | 'weights___internal___fieldOwners'
  | 'weights___internal___ignoreType'
  | 'weights___internal___mediaType'
  | 'weights___internal___owner'
  | 'weights___internal___type'
  | 'weights___jetlag'
  | 'weights___duration'
  | 'weights___efficiency'
  | 'weights___consistency'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___parent___id'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___parent___children'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___children___id'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___children___children'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___content'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___contentDigest'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___description'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___fieldOwners'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___ignoreType'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___mediaType'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___owner'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___internal___type'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'metalesson'
  | 'metalesson___id'
  | 'metalesson___parent___id'
  | 'metalesson___parent___parent___id'
  | 'metalesson___parent___parent___children'
  | 'metalesson___parent___children'
  | 'metalesson___parent___children___id'
  | 'metalesson___parent___children___children'
  | 'metalesson___parent___internal___content'
  | 'metalesson___parent___internal___contentDigest'
  | 'metalesson___parent___internal___description'
  | 'metalesson___parent___internal___fieldOwners'
  | 'metalesson___parent___internal___ignoreType'
  | 'metalesson___parent___internal___mediaType'
  | 'metalesson___parent___internal___owner'
  | 'metalesson___parent___internal___type'
  | 'metalesson___children'
  | 'metalesson___children___id'
  | 'metalesson___children___parent___id'
  | 'metalesson___children___parent___children'
  | 'metalesson___children___children'
  | 'metalesson___children___children___id'
  | 'metalesson___children___children___children'
  | 'metalesson___children___internal___content'
  | 'metalesson___children___internal___contentDigest'
  | 'metalesson___children___internal___description'
  | 'metalesson___children___internal___fieldOwners'
  | 'metalesson___children___internal___ignoreType'
  | 'metalesson___children___internal___mediaType'
  | 'metalesson___children___internal___owner'
  | 'metalesson___children___internal___type'
  | 'metalesson___internal___content'
  | 'metalesson___internal___contentDigest'
  | 'metalesson___internal___description'
  | 'metalesson___internal___fieldOwners'
  | 'metalesson___internal___ignoreType'
  | 'metalesson___internal___mediaType'
  | 'metalesson___internal___owner'
  | 'metalesson___internal___type'
  | 'metalesson___title'
  | 'metalesson___slug'
  | 'metalesson___keywords'
  | 'metalesson___lessons'
  | 'metalesson___lessons___id'
  | 'metalesson___lessons___parent___id'
  | 'metalesson___lessons___parent___children'
  | 'metalesson___lessons___children'
  | 'metalesson___lessons___children___id'
  | 'metalesson___lessons___children___children'
  | 'metalesson___lessons___internal___content'
  | 'metalesson___lessons___internal___contentDigest'
  | 'metalesson___lessons___internal___description'
  | 'metalesson___lessons___internal___fieldOwners'
  | 'metalesson___lessons___internal___ignoreType'
  | 'metalesson___lessons___internal___mediaType'
  | 'metalesson___lessons___internal___owner'
  | 'metalesson___lessons___internal___type'
  | 'metalesson___lessons___lessonName'
  | 'metalesson___lessons___slug'
  | 'metalesson___lessons___keywords'
  | 'metalesson___lessons___author'
  | 'metalesson___lessons___stage'
  | 'metalesson___lessons___authorCard'
  | 'metalesson___lessons___authorCard___id'
  | 'metalesson___lessons___authorCard___children'
  | 'metalesson___lessons___authorCard___slug'
  | 'metalesson___lessons___authorCard___name'
  | 'metalesson___lessons___authorCard___credentials'
  | 'metalesson___lessons___authorCard___spaceId'
  | 'metalesson___lessons___authorCard___contentful_id'
  | 'metalesson___lessons___authorCard___createdAt'
  | 'metalesson___lessons___authorCard___updatedAt'
  | 'metalesson___lessons___authorCard___node_locale'
  | 'metalesson___lessons___authorCard___lesson'
  | 'metalesson___lessons___cover___id'
  | 'metalesson___lessons___cover___children'
  | 'metalesson___lessons___cover___contentful_id'
  | 'metalesson___lessons___cover___title'
  | 'metalesson___lessons___cover___description'
  | 'metalesson___lessons___cover___node_locale'
  | 'metalesson___lessons___section___id'
  | 'metalesson___lessons___section___children'
  | 'metalesson___lessons___section___order'
  | 'metalesson___lessons___section___title'
  | 'metalesson___lessons___section___lesson'
  | 'metalesson___lessons___section___spaceId'
  | 'metalesson___lessons___section___contentful_id'
  | 'metalesson___lessons___section___createdAt'
  | 'metalesson___lessons___section___updatedAt'
  | 'metalesson___lessons___section___node_locale'
  | 'metalesson___lessons___habit'
  | 'metalesson___lessons___habit___id'
  | 'metalesson___lessons___habit___children'
  | 'metalesson___lessons___habit___title'
  | 'metalesson___lessons___habit___slug'
  | 'metalesson___lessons___habit___period'
  | 'metalesson___lessons___habit___lesson'
  | 'metalesson___lessons___habit___spaceId'
  | 'metalesson___lessons___habit___contentful_id'
  | 'metalesson___lessons___habit___createdAt'
  | 'metalesson___lessons___habit___updatedAt'
  | 'metalesson___lessons___habit___node_locale'
  | 'metalesson___lessons___week'
  | 'metalesson___lessons___week___id'
  | 'metalesson___lessons___week___children'
  | 'metalesson___lessons___week___order'
  | 'metalesson___lessons___week___weekName'
  | 'metalesson___lessons___week___slug'
  | 'metalesson___lessons___week___intro'
  | 'metalesson___lessons___week___taskCount'
  | 'metalesson___lessons___week___locked'
  | 'metalesson___lessons___week___duration'
  | 'metalesson___lessons___week___lessons'
  | 'metalesson___lessons___week___spaceId'
  | 'metalesson___lessons___week___contentful_id'
  | 'metalesson___lessons___week___createdAt'
  | 'metalesson___lessons___week___updatedAt'
  | 'metalesson___lessons___week___node_locale'
  | 'metalesson___lessons___lessonContent___id'
  | 'metalesson___lessons___lessonContent___children'
  | 'metalesson___lessons___lessonContent___nodeType'
  | 'metalesson___lessons___lessonContent___content'
  | 'metalesson___lessons___lessonContent___lessonContent'
  | 'metalesson___lessons___lessonContent___json'
  | 'metalesson___lessons___additionalInformation___id'
  | 'metalesson___lessons___additionalInformation___children'
  | 'metalesson___lessons___additionalInformation___content'
  | 'metalesson___lessons___additionalInformation___nodeType'
  | 'metalesson___lessons___additionalInformation___additionalInformation'
  | 'metalesson___lessons___additionalInformation___json'
  | 'metalesson___lessons___weights___id'
  | 'metalesson___lessons___weights___children'
  | 'metalesson___lessons___weights___jetlag'
  | 'metalesson___lessons___weights___duration'
  | 'metalesson___lessons___weights___efficiency'
  | 'metalesson___lessons___weights___consistency'
  | 'metalesson___lessons___spaceId'
  | 'metalesson___lessons___contentful_id'
  | 'metalesson___lessons___createdAt'
  | 'metalesson___lessons___updatedAt'
  | 'metalesson___lessons___sys___revision'
  | 'metalesson___lessons___node_locale'
  | 'metalesson___lessons___metalesson'
  | 'metalesson___lessons___metalesson___id'
  | 'metalesson___lessons___metalesson___children'
  | 'metalesson___lessons___metalesson___title'
  | 'metalesson___lessons___metalesson___slug'
  | 'metalesson___lessons___metalesson___keywords'
  | 'metalesson___lessons___metalesson___lessons'
  | 'metalesson___lessons___metalesson___relatedContent'
  | 'metalesson___lessons___metalesson___spaceId'
  | 'metalesson___lessons___metalesson___contentful_id'
  | 'metalesson___lessons___metalesson___createdAt'
  | 'metalesson___lessons___metalesson___updatedAt'
  | 'metalesson___lessons___metalesson___node_locale'
  | 'metalesson___lessons___customComplete'
  | 'metalesson___lessons___childContentfulLessonLessonContentRichTextNode___id'
  | 'metalesson___lessons___childContentfulLessonLessonContentRichTextNode___children'
  | 'metalesson___lessons___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'metalesson___lessons___childContentfulLessonLessonContentRichTextNode___content'
  | 'metalesson___lessons___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'metalesson___lessons___childContentfulLessonLessonContentRichTextNode___json'
  | 'metalesson___lessons___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'metalesson___lessons___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'metalesson___lessons___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'metalesson___lessons___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'metalesson___lessons___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'metalesson___lessons___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___id'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___children'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'metalesson___relatedContent'
  | 'metalesson___relatedContent___id'
  | 'metalesson___relatedContent___parent___id'
  | 'metalesson___relatedContent___parent___children'
  | 'metalesson___relatedContent___children'
  | 'metalesson___relatedContent___children___id'
  | 'metalesson___relatedContent___children___children'
  | 'metalesson___relatedContent___internal___content'
  | 'metalesson___relatedContent___internal___contentDigest'
  | 'metalesson___relatedContent___internal___description'
  | 'metalesson___relatedContent___internal___fieldOwners'
  | 'metalesson___relatedContent___internal___ignoreType'
  | 'metalesson___relatedContent___internal___mediaType'
  | 'metalesson___relatedContent___internal___owner'
  | 'metalesson___relatedContent___internal___type'
  | 'metalesson___relatedContent___lessonName'
  | 'metalesson___relatedContent___slug'
  | 'metalesson___relatedContent___keywords'
  | 'metalesson___relatedContent___author'
  | 'metalesson___relatedContent___stage'
  | 'metalesson___relatedContent___authorCard'
  | 'metalesson___relatedContent___authorCard___id'
  | 'metalesson___relatedContent___authorCard___children'
  | 'metalesson___relatedContent___authorCard___slug'
  | 'metalesson___relatedContent___authorCard___name'
  | 'metalesson___relatedContent___authorCard___credentials'
  | 'metalesson___relatedContent___authorCard___spaceId'
  | 'metalesson___relatedContent___authorCard___contentful_id'
  | 'metalesson___relatedContent___authorCard___createdAt'
  | 'metalesson___relatedContent___authorCard___updatedAt'
  | 'metalesson___relatedContent___authorCard___node_locale'
  | 'metalesson___relatedContent___authorCard___lesson'
  | 'metalesson___relatedContent___cover___id'
  | 'metalesson___relatedContent___cover___children'
  | 'metalesson___relatedContent___cover___contentful_id'
  | 'metalesson___relatedContent___cover___title'
  | 'metalesson___relatedContent___cover___description'
  | 'metalesson___relatedContent___cover___node_locale'
  | 'metalesson___relatedContent___section___id'
  | 'metalesson___relatedContent___section___children'
  | 'metalesson___relatedContent___section___order'
  | 'metalesson___relatedContent___section___title'
  | 'metalesson___relatedContent___section___lesson'
  | 'metalesson___relatedContent___section___spaceId'
  | 'metalesson___relatedContent___section___contentful_id'
  | 'metalesson___relatedContent___section___createdAt'
  | 'metalesson___relatedContent___section___updatedAt'
  | 'metalesson___relatedContent___section___node_locale'
  | 'metalesson___relatedContent___habit'
  | 'metalesson___relatedContent___habit___id'
  | 'metalesson___relatedContent___habit___children'
  | 'metalesson___relatedContent___habit___title'
  | 'metalesson___relatedContent___habit___slug'
  | 'metalesson___relatedContent___habit___period'
  | 'metalesson___relatedContent___habit___lesson'
  | 'metalesson___relatedContent___habit___spaceId'
  | 'metalesson___relatedContent___habit___contentful_id'
  | 'metalesson___relatedContent___habit___createdAt'
  | 'metalesson___relatedContent___habit___updatedAt'
  | 'metalesson___relatedContent___habit___node_locale'
  | 'metalesson___relatedContent___week'
  | 'metalesson___relatedContent___week___id'
  | 'metalesson___relatedContent___week___children'
  | 'metalesson___relatedContent___week___order'
  | 'metalesson___relatedContent___week___weekName'
  | 'metalesson___relatedContent___week___slug'
  | 'metalesson___relatedContent___week___intro'
  | 'metalesson___relatedContent___week___taskCount'
  | 'metalesson___relatedContent___week___locked'
  | 'metalesson___relatedContent___week___duration'
  | 'metalesson___relatedContent___week___lessons'
  | 'metalesson___relatedContent___week___spaceId'
  | 'metalesson___relatedContent___week___contentful_id'
  | 'metalesson___relatedContent___week___createdAt'
  | 'metalesson___relatedContent___week___updatedAt'
  | 'metalesson___relatedContent___week___node_locale'
  | 'metalesson___relatedContent___lessonContent___id'
  | 'metalesson___relatedContent___lessonContent___children'
  | 'metalesson___relatedContent___lessonContent___nodeType'
  | 'metalesson___relatedContent___lessonContent___content'
  | 'metalesson___relatedContent___lessonContent___lessonContent'
  | 'metalesson___relatedContent___lessonContent___json'
  | 'metalesson___relatedContent___additionalInformation___id'
  | 'metalesson___relatedContent___additionalInformation___children'
  | 'metalesson___relatedContent___additionalInformation___content'
  | 'metalesson___relatedContent___additionalInformation___nodeType'
  | 'metalesson___relatedContent___additionalInformation___additionalInformation'
  | 'metalesson___relatedContent___additionalInformation___json'
  | 'metalesson___relatedContent___weights___id'
  | 'metalesson___relatedContent___weights___children'
  | 'metalesson___relatedContent___weights___jetlag'
  | 'metalesson___relatedContent___weights___duration'
  | 'metalesson___relatedContent___weights___efficiency'
  | 'metalesson___relatedContent___weights___consistency'
  | 'metalesson___relatedContent___spaceId'
  | 'metalesson___relatedContent___contentful_id'
  | 'metalesson___relatedContent___createdAt'
  | 'metalesson___relatedContent___updatedAt'
  | 'metalesson___relatedContent___sys___revision'
  | 'metalesson___relatedContent___node_locale'
  | 'metalesson___relatedContent___metalesson'
  | 'metalesson___relatedContent___metalesson___id'
  | 'metalesson___relatedContent___metalesson___children'
  | 'metalesson___relatedContent___metalesson___title'
  | 'metalesson___relatedContent___metalesson___slug'
  | 'metalesson___relatedContent___metalesson___keywords'
  | 'metalesson___relatedContent___metalesson___lessons'
  | 'metalesson___relatedContent___metalesson___relatedContent'
  | 'metalesson___relatedContent___metalesson___spaceId'
  | 'metalesson___relatedContent___metalesson___contentful_id'
  | 'metalesson___relatedContent___metalesson___createdAt'
  | 'metalesson___relatedContent___metalesson___updatedAt'
  | 'metalesson___relatedContent___metalesson___node_locale'
  | 'metalesson___relatedContent___customComplete'
  | 'metalesson___relatedContent___childContentfulLessonLessonContentRichTextNode___id'
  | 'metalesson___relatedContent___childContentfulLessonLessonContentRichTextNode___children'
  | 'metalesson___relatedContent___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'metalesson___relatedContent___childContentfulLessonLessonContentRichTextNode___content'
  | 'metalesson___relatedContent___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'metalesson___relatedContent___childContentfulLessonLessonContentRichTextNode___json'
  | 'metalesson___relatedContent___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'metalesson___relatedContent___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'metalesson___relatedContent___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'metalesson___relatedContent___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'metalesson___relatedContent___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'metalesson___relatedContent___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___id'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___children'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___jetlag'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___duration'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___efficiency'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___consistency'
  | 'metalesson___spaceId'
  | 'metalesson___contentful_id'
  | 'metalesson___createdAt'
  | 'metalesson___updatedAt'
  | 'metalesson___sys___revision'
  | 'metalesson___node_locale'
  | 'customComplete'
  | 'childContentfulLessonLessonContentRichTextNode___id'
  | 'childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'childContentfulLessonLessonContentRichTextNode___parent___parent___id'
  | 'childContentfulLessonLessonContentRichTextNode___parent___parent___children'
  | 'childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'childContentfulLessonLessonContentRichTextNode___parent___children___id'
  | 'childContentfulLessonLessonContentRichTextNode___parent___children___children'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___content'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___contentDigest'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___description'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___ignoreType'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___mediaType'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___owner'
  | 'childContentfulLessonLessonContentRichTextNode___parent___internal___type'
  | 'childContentfulLessonLessonContentRichTextNode___children'
  | 'childContentfulLessonLessonContentRichTextNode___children___id'
  | 'childContentfulLessonLessonContentRichTextNode___children___parent___id'
  | 'childContentfulLessonLessonContentRichTextNode___children___parent___children'
  | 'childContentfulLessonLessonContentRichTextNode___children___children'
  | 'childContentfulLessonLessonContentRichTextNode___children___children___id'
  | 'childContentfulLessonLessonContentRichTextNode___children___children___children'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___content'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___contentDigest'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___description'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___fieldOwners'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___ignoreType'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___mediaType'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___owner'
  | 'childContentfulLessonLessonContentRichTextNode___children___internal___type'
  | 'childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'childContentfulLessonLessonContentRichTextNode___content'
  | 'childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'childContentfulLessonLessonContentRichTextNode___content___content'
  | 'childContentfulLessonLessonContentRichTextNode___content___content___nodeType'
  | 'childContentfulLessonLessonContentRichTextNode___content___content___value'
  | 'childContentfulLessonLessonContentRichTextNode___content___content___marks'
  | 'childContentfulLessonLessonContentRichTextNode___content___content___content'
  | 'childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'childContentfulLessonLessonContentRichTextNode___fields___readingTime___text'
  | 'childContentfulLessonLessonContentRichTextNode___fields___readingTime___minutes'
  | 'childContentfulLessonLessonContentRichTextNode___fields___readingTime___time'
  | 'childContentfulLessonLessonContentRichTextNode___fields___readingTime___words'
  | 'childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'childContentfulLessonLessonContentRichTextNode___json'
  | 'childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___parent___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___parent___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___children___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___children___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___content'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___contentDigest'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___description'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___ignoreType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___mediaType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___owner'
  | 'childContentfulLessonAdditionalInformationRichTextNode___parent___internal___type'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___parent___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___parent___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___children___id'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___children___children'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___content'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___contentDigest'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___description'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___fieldOwners'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___ignoreType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___mediaType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___owner'
  | 'childContentfulLessonAdditionalInformationRichTextNode___children___internal___type'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content___content___content'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content___content___nodeType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content___content___marks'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content___content___value'
  | 'childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'childContentfulLessonAdditionalInformationRichTextNode___fields___readingTime___text'
  | 'childContentfulLessonAdditionalInformationRichTextNode___fields___readingTime___minutes'
  | 'childContentfulLessonAdditionalInformationRichTextNode___fields___readingTime___time'
  | 'childContentfulLessonAdditionalInformationRichTextNode___fields___readingTime___words'
  | 'childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'childContentfulLessonWeightsJsonNode___id'
  | 'childContentfulLessonWeightsJsonNode___parent___id'
  | 'childContentfulLessonWeightsJsonNode___parent___parent___id'
  | 'childContentfulLessonWeightsJsonNode___parent___parent___children'
  | 'childContentfulLessonWeightsJsonNode___parent___children'
  | 'childContentfulLessonWeightsJsonNode___parent___children___id'
  | 'childContentfulLessonWeightsJsonNode___parent___children___children'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___content'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___description'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___type'
  | 'childContentfulLessonWeightsJsonNode___children'
  | 'childContentfulLessonWeightsJsonNode___children___id'
  | 'childContentfulLessonWeightsJsonNode___children___parent___id'
  | 'childContentfulLessonWeightsJsonNode___children___parent___children'
  | 'childContentfulLessonWeightsJsonNode___children___children'
  | 'childContentfulLessonWeightsJsonNode___children___children___id'
  | 'childContentfulLessonWeightsJsonNode___children___children___children'
  | 'childContentfulLessonWeightsJsonNode___children___internal___content'
  | 'childContentfulLessonWeightsJsonNode___children___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___children___internal___description'
  | 'childContentfulLessonWeightsJsonNode___children___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___children___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___children___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___children___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___children___internal___type'
  | 'childContentfulLessonWeightsJsonNode___internal___content'
  | 'childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___internal___description'
  | 'childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___internal___type'
  | 'childContentfulLessonWeightsJsonNode___jetlag'
  | 'childContentfulLessonWeightsJsonNode___duration'
  | 'childContentfulLessonWeightsJsonNode___efficiency'
  | 'childContentfulLessonWeightsJsonNode___consistency'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___parent___id'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___parent___children'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children___id'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children___children'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___content'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___description'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___internal___type'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency';

export type ContentfulLessonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lessonName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  stage?: Maybe<IntQueryOperatorInput>;
  authorCard?: Maybe<ContentfulAuthorFilterListInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  section?: Maybe<ContentfulSectionFilterInput>;
  habit?: Maybe<ContentfulHabitFilterListInput>;
  week?: Maybe<ContentfulWeekFilterListInput>;
  lessonContent?: Maybe<ContentfulLessonLessonContentRichTextNodeFilterInput>;
  additionalInformation?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFilterInput>;
  weights?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLessonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  metalesson?: Maybe<ContentfulMetalessonFilterListInput>;
  customComplete?: Maybe<StringQueryOperatorInput>;
  childContentfulLessonLessonContentRichTextNode?: Maybe<ContentfulLessonLessonContentRichTextNodeFilterInput>;
  childContentfulLessonAdditionalInformationRichTextNode?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFilterInput>;
  childContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
};

export type ContentfulLessonFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonFilterInput>;
};

export type ContentfulLessonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonEdge>;
  nodes: Array<ContentfulLesson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeContent>>>;
  lessonContent?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulLessonLessonContentRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulLessonLessonContentRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonLessonContentRichTextNodeEdge>;
  nodes: Array<ContentfulLessonLessonContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonLessonContentRichTextNodeGroupConnection>;
};


export type ContentfulLessonLessonContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulLessonLessonContentRichTextNodeFieldsEnum;
};


export type ContentfulLessonLessonContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonLessonContentRichTextNodeFieldsEnum;
};

export type ContentfulLessonLessonContentRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeContentContent>>>;
  data?: Maybe<ContentfulLessonLessonContentRichTextNodeContentData>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeContentContentMarks>>>;
  data?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentData>;
  content?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContent>>>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentContent>>>;
  marks?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentMarks>>>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentContentFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentContentFilterListInput>;
  marks?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentMarksFilterListInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentMarksFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentData = {
  uri?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentMarksFilterListInput>;
  data?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentDataFilterInput>;
  content?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentMarksFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentData = {
  target?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTarget>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataFilterInput = {
  target?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTarget = {
  sys?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSys>;
  fields?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFields>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFields = {
  title?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsTitle>;
  description?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsDescription>;
  file?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFile>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsDescription = {
  en_US?: Maybe<Scalars['String']>;
  fi_FI?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsDescriptionFilterInput = {
  en_US?: Maybe<StringQueryOperatorInput>;
  fi_FI?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFile = {
  en_US?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_Us>;
  fi_FI?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_Fi>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_Us = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetailsImage>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetailsImageFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_Fi = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetailsImage>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetailsImageFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFilterInput = {
  en_US?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileEn_UsFilterInput>;
  fi_FI?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFi_FiFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFilterInput = {
  title?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsTitleFilterInput>;
  description?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsDescriptionFilterInput>;
  file?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFileFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsTitle = {
  en_US?: Maybe<Scalars['String']>;
  fi_FI?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsTitleFilterInput = {
  en_US?: Maybe<StringQueryOperatorInput>;
  fi_FI?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetFilterInput = {
  sys?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysFilterInput>;
  fields?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetFieldsFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSys = {
  space?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpace>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  environment?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironment>;
  revision?: Maybe<Scalars['Int']>;
  contentful_id?: Maybe<Scalars['String']>;
};


export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironment = {
  sys?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironmentSys>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironmentFilterInput = {
  sys?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironmentSysFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironmentSys = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironmentSysFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysFilterInput = {
  space?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpaceFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  environment?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysEnvironmentFilterInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpace = {
  sys?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpaceSys>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpaceFilterInput = {
  sys?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpaceSysFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpaceSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeContentDataTargetSysSpaceSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulLessonLessonContentRichTextNodeContentContentFilterListInput>;
  data?: Maybe<ContentfulLessonLessonContentRichTextNodeContentDataFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonLessonContentRichTextNodeContentFilterInput>;
};

export type ContentfulLessonLessonContentRichTextNodeEdge = {
  next?: Maybe<ContentfulLessonLessonContentRichTextNode>;
  node: ContentfulLessonLessonContentRichTextNode;
  previous?: Maybe<ContentfulLessonLessonContentRichTextNode>;
};

export type ContentfulLessonLessonContentRichTextNodeFields = {
  readingTime?: Maybe<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'content___content___marks'
  | 'content___content___marks___type'
  | 'content___content___data___uri'
  | 'content___content___content'
  | 'content___content___content___nodeType'
  | 'content___content___content___content'
  | 'content___content___content___marks'
  | 'content___content___content___value'
  | 'lessonContent'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulLessonLessonContentRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulLessonLessonContentRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonLessonContentRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulLessonLessonContentRichTextNodeContentFilterListInput>;
  lessonContent?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulLessonLessonContentRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulLessonLessonContentRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonLessonContentRichTextNodeEdge>;
  nodes: Array<ContentfulLessonLessonContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonLessonContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLessonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLessonSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLessonSysContentType>;
};

export type ContentfulLessonSysContentType = {
  sys?: Maybe<ContentfulLessonSysContentTypeSys>;
};

export type ContentfulLessonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLessonSysContentTypeSysFilterInput>;
};

export type ContentfulLessonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulLessonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulLessonSysContentTypeFilterInput>;
};

export type ContentfulLessonWeightsJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  jetlag?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  efficiency?: Maybe<Scalars['Int']>;
  consistency?: Maybe<Scalars['Int']>;
  childContentfulLessonWeightsJsonNodeJson?: Maybe<ContentfulLessonWeightsJsonNodeJson>;
};

export type ContentfulLessonWeightsJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonWeightsJsonNodeEdge>;
  nodes: Array<ContentfulLessonWeightsJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonWeightsJsonNodeGroupConnection>;
};


export type ContentfulLessonWeightsJsonNodeConnectionDistinctArgs = {
  field: ContentfulLessonWeightsJsonNodeFieldsEnum;
};


export type ContentfulLessonWeightsJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonWeightsJsonNodeFieldsEnum;
};

export type ContentfulLessonWeightsJsonNodeEdge = {
  next?: Maybe<ContentfulLessonWeightsJsonNode>;
  node: ContentfulLessonWeightsJsonNode;
  previous?: Maybe<ContentfulLessonWeightsJsonNode>;
};

export type ContentfulLessonWeightsJsonNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jetlag'
  | 'duration'
  | 'efficiency'
  | 'consistency'
  | 'childContentfulLessonWeightsJsonNodeJson___id'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___id'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___parent___id'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___parent___children'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___children'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___children___id'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___children___children'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___content'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___description'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___owner'
  | 'childContentfulLessonWeightsJsonNodeJson___parent___internal___type'
  | 'childContentfulLessonWeightsJsonNodeJson___children'
  | 'childContentfulLessonWeightsJsonNodeJson___children___id'
  | 'childContentfulLessonWeightsJsonNodeJson___children___parent___id'
  | 'childContentfulLessonWeightsJsonNodeJson___children___parent___children'
  | 'childContentfulLessonWeightsJsonNodeJson___children___children'
  | 'childContentfulLessonWeightsJsonNodeJson___children___children___id'
  | 'childContentfulLessonWeightsJsonNodeJson___children___children___children'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___content'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___description'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___owner'
  | 'childContentfulLessonWeightsJsonNodeJson___children___internal___type'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___content'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___description'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___owner'
  | 'childContentfulLessonWeightsJsonNodeJson___internal___type'
  | 'childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'childContentfulLessonWeightsJsonNodeJson___duration'
  | 'childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'childContentfulLessonWeightsJsonNodeJson___consistency';

export type ContentfulLessonWeightsJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jetlag?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  efficiency?: Maybe<IntQueryOperatorInput>;
  consistency?: Maybe<IntQueryOperatorInput>;
  childContentfulLessonWeightsJsonNodeJson?: Maybe<ContentfulLessonWeightsJsonNodeJsonFilterInput>;
};

export type ContentfulLessonWeightsJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonWeightsJsonNodeEdge>;
  nodes: Array<ContentfulLessonWeightsJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonWeightsJsonNodeJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  jetlag?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  efficiency?: Maybe<Scalars['Int']>;
  consistency?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonWeightsJsonNodeJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonWeightsJsonNodeJsonEdge>;
  nodes: Array<ContentfulLessonWeightsJsonNodeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonWeightsJsonNodeJsonGroupConnection>;
};


export type ContentfulLessonWeightsJsonNodeJsonConnectionDistinctArgs = {
  field: ContentfulLessonWeightsJsonNodeJsonFieldsEnum;
};


export type ContentfulLessonWeightsJsonNodeJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonWeightsJsonNodeJsonFieldsEnum;
};

export type ContentfulLessonWeightsJsonNodeJsonEdge = {
  next?: Maybe<ContentfulLessonWeightsJsonNodeJson>;
  node: ContentfulLessonWeightsJsonNodeJson;
  previous?: Maybe<ContentfulLessonWeightsJsonNodeJson>;
};

export type ContentfulLessonWeightsJsonNodeJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jetlag'
  | 'duration'
  | 'efficiency'
  | 'consistency';

export type ContentfulLessonWeightsJsonNodeJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jetlag?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  efficiency?: Maybe<IntQueryOperatorInput>;
  consistency?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonWeightsJsonNodeJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonWeightsJsonNodeJsonEdge>;
  nodes: Array<ContentfulLessonWeightsJsonNodeJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonWeightsJsonNodeJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonWeightsJsonNodeJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLessonWeightsJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonWeightsJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMetalesson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessons?: Maybe<Array<Maybe<ContentfulLesson>>>;
  relatedContent?: Maybe<Array<Maybe<ContentfulLesson>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMetalessonSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulMetalessonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMetalessonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMetalessonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetalessonEdge>;
  nodes: Array<ContentfulMetalesson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMetalessonGroupConnection>;
};


export type ContentfulMetalessonConnectionDistinctArgs = {
  field: ContentfulMetalessonFieldsEnum;
};


export type ContentfulMetalessonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMetalessonFieldsEnum;
};

export type ContentfulMetalessonEdge = {
  next?: Maybe<ContentfulMetalesson>;
  node: ContentfulMetalesson;
  previous?: Maybe<ContentfulMetalesson>;
};

export type ContentfulMetalessonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'keywords'
  | 'lessons'
  | 'lessons___id'
  | 'lessons___parent___id'
  | 'lessons___parent___parent___id'
  | 'lessons___parent___parent___children'
  | 'lessons___parent___children'
  | 'lessons___parent___children___id'
  | 'lessons___parent___children___children'
  | 'lessons___parent___internal___content'
  | 'lessons___parent___internal___contentDigest'
  | 'lessons___parent___internal___description'
  | 'lessons___parent___internal___fieldOwners'
  | 'lessons___parent___internal___ignoreType'
  | 'lessons___parent___internal___mediaType'
  | 'lessons___parent___internal___owner'
  | 'lessons___parent___internal___type'
  | 'lessons___children'
  | 'lessons___children___id'
  | 'lessons___children___parent___id'
  | 'lessons___children___parent___children'
  | 'lessons___children___children'
  | 'lessons___children___children___id'
  | 'lessons___children___children___children'
  | 'lessons___children___internal___content'
  | 'lessons___children___internal___contentDigest'
  | 'lessons___children___internal___description'
  | 'lessons___children___internal___fieldOwners'
  | 'lessons___children___internal___ignoreType'
  | 'lessons___children___internal___mediaType'
  | 'lessons___children___internal___owner'
  | 'lessons___children___internal___type'
  | 'lessons___internal___content'
  | 'lessons___internal___contentDigest'
  | 'lessons___internal___description'
  | 'lessons___internal___fieldOwners'
  | 'lessons___internal___ignoreType'
  | 'lessons___internal___mediaType'
  | 'lessons___internal___owner'
  | 'lessons___internal___type'
  | 'lessons___lessonName'
  | 'lessons___slug'
  | 'lessons___keywords'
  | 'lessons___author'
  | 'lessons___stage'
  | 'lessons___authorCard'
  | 'lessons___authorCard___id'
  | 'lessons___authorCard___parent___id'
  | 'lessons___authorCard___parent___children'
  | 'lessons___authorCard___children'
  | 'lessons___authorCard___children___id'
  | 'lessons___authorCard___children___children'
  | 'lessons___authorCard___internal___content'
  | 'lessons___authorCard___internal___contentDigest'
  | 'lessons___authorCard___internal___description'
  | 'lessons___authorCard___internal___fieldOwners'
  | 'lessons___authorCard___internal___ignoreType'
  | 'lessons___authorCard___internal___mediaType'
  | 'lessons___authorCard___internal___owner'
  | 'lessons___authorCard___internal___type'
  | 'lessons___authorCard___slug'
  | 'lessons___authorCard___name'
  | 'lessons___authorCard___credentials'
  | 'lessons___authorCard___avatar___id'
  | 'lessons___authorCard___avatar___children'
  | 'lessons___authorCard___avatar___contentful_id'
  | 'lessons___authorCard___avatar___title'
  | 'lessons___authorCard___avatar___description'
  | 'lessons___authorCard___avatar___node_locale'
  | 'lessons___authorCard___spaceId'
  | 'lessons___authorCard___contentful_id'
  | 'lessons___authorCard___createdAt'
  | 'lessons___authorCard___updatedAt'
  | 'lessons___authorCard___sys___revision'
  | 'lessons___authorCard___node_locale'
  | 'lessons___authorCard___lesson'
  | 'lessons___authorCard___lesson___id'
  | 'lessons___authorCard___lesson___children'
  | 'lessons___authorCard___lesson___lessonName'
  | 'lessons___authorCard___lesson___slug'
  | 'lessons___authorCard___lesson___keywords'
  | 'lessons___authorCard___lesson___author'
  | 'lessons___authorCard___lesson___stage'
  | 'lessons___authorCard___lesson___authorCard'
  | 'lessons___authorCard___lesson___habit'
  | 'lessons___authorCard___lesson___week'
  | 'lessons___authorCard___lesson___spaceId'
  | 'lessons___authorCard___lesson___contentful_id'
  | 'lessons___authorCard___lesson___createdAt'
  | 'lessons___authorCard___lesson___updatedAt'
  | 'lessons___authorCard___lesson___node_locale'
  | 'lessons___authorCard___lesson___metalesson'
  | 'lessons___authorCard___lesson___customComplete'
  | 'lessons___cover___id'
  | 'lessons___cover___parent___id'
  | 'lessons___cover___parent___children'
  | 'lessons___cover___children'
  | 'lessons___cover___children___id'
  | 'lessons___cover___children___children'
  | 'lessons___cover___internal___content'
  | 'lessons___cover___internal___contentDigest'
  | 'lessons___cover___internal___description'
  | 'lessons___cover___internal___fieldOwners'
  | 'lessons___cover___internal___ignoreType'
  | 'lessons___cover___internal___mediaType'
  | 'lessons___cover___internal___owner'
  | 'lessons___cover___internal___type'
  | 'lessons___cover___contentful_id'
  | 'lessons___cover___file___url'
  | 'lessons___cover___file___fileName'
  | 'lessons___cover___file___contentType'
  | 'lessons___cover___title'
  | 'lessons___cover___description'
  | 'lessons___cover___node_locale'
  | 'lessons___cover___fixed___base64'
  | 'lessons___cover___fixed___tracedSVG'
  | 'lessons___cover___fixed___aspectRatio'
  | 'lessons___cover___fixed___width'
  | 'lessons___cover___fixed___height'
  | 'lessons___cover___fixed___src'
  | 'lessons___cover___fixed___srcSet'
  | 'lessons___cover___fixed___srcWebp'
  | 'lessons___cover___fixed___srcSetWebp'
  | 'lessons___cover___resolutions___base64'
  | 'lessons___cover___resolutions___tracedSVG'
  | 'lessons___cover___resolutions___aspectRatio'
  | 'lessons___cover___resolutions___width'
  | 'lessons___cover___resolutions___height'
  | 'lessons___cover___resolutions___src'
  | 'lessons___cover___resolutions___srcSet'
  | 'lessons___cover___resolutions___srcWebp'
  | 'lessons___cover___resolutions___srcSetWebp'
  | 'lessons___cover___fluid___base64'
  | 'lessons___cover___fluid___tracedSVG'
  | 'lessons___cover___fluid___aspectRatio'
  | 'lessons___cover___fluid___src'
  | 'lessons___cover___fluid___srcSet'
  | 'lessons___cover___fluid___srcWebp'
  | 'lessons___cover___fluid___srcSetWebp'
  | 'lessons___cover___fluid___sizes'
  | 'lessons___cover___sizes___base64'
  | 'lessons___cover___sizes___tracedSVG'
  | 'lessons___cover___sizes___aspectRatio'
  | 'lessons___cover___sizes___src'
  | 'lessons___cover___sizes___srcSet'
  | 'lessons___cover___sizes___srcWebp'
  | 'lessons___cover___sizes___srcSetWebp'
  | 'lessons___cover___sizes___sizes'
  | 'lessons___cover___resize___base64'
  | 'lessons___cover___resize___tracedSVG'
  | 'lessons___cover___resize___src'
  | 'lessons___cover___resize___width'
  | 'lessons___cover___resize___height'
  | 'lessons___cover___resize___aspectRatio'
  | 'lessons___section___id'
  | 'lessons___section___parent___id'
  | 'lessons___section___parent___children'
  | 'lessons___section___children'
  | 'lessons___section___children___id'
  | 'lessons___section___children___children'
  | 'lessons___section___internal___content'
  | 'lessons___section___internal___contentDigest'
  | 'lessons___section___internal___description'
  | 'lessons___section___internal___fieldOwners'
  | 'lessons___section___internal___ignoreType'
  | 'lessons___section___internal___mediaType'
  | 'lessons___section___internal___owner'
  | 'lessons___section___internal___type'
  | 'lessons___section___order'
  | 'lessons___section___title'
  | 'lessons___section___lesson'
  | 'lessons___section___lesson___id'
  | 'lessons___section___lesson___children'
  | 'lessons___section___lesson___lessonName'
  | 'lessons___section___lesson___slug'
  | 'lessons___section___lesson___keywords'
  | 'lessons___section___lesson___author'
  | 'lessons___section___lesson___stage'
  | 'lessons___section___lesson___authorCard'
  | 'lessons___section___lesson___habit'
  | 'lessons___section___lesson___week'
  | 'lessons___section___lesson___spaceId'
  | 'lessons___section___lesson___contentful_id'
  | 'lessons___section___lesson___createdAt'
  | 'lessons___section___lesson___updatedAt'
  | 'lessons___section___lesson___node_locale'
  | 'lessons___section___lesson___metalesson'
  | 'lessons___section___lesson___customComplete'
  | 'lessons___section___description___id'
  | 'lessons___section___description___children'
  | 'lessons___section___description___nodeType'
  | 'lessons___section___description___content'
  | 'lessons___section___description___description'
  | 'lessons___section___description___json'
  | 'lessons___section___spaceId'
  | 'lessons___section___contentful_id'
  | 'lessons___section___createdAt'
  | 'lessons___section___updatedAt'
  | 'lessons___section___sys___revision'
  | 'lessons___section___node_locale'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___id'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___children'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___content'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___description'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___json'
  | 'lessons___habit'
  | 'lessons___habit___id'
  | 'lessons___habit___parent___id'
  | 'lessons___habit___parent___children'
  | 'lessons___habit___children'
  | 'lessons___habit___children___id'
  | 'lessons___habit___children___children'
  | 'lessons___habit___internal___content'
  | 'lessons___habit___internal___contentDigest'
  | 'lessons___habit___internal___description'
  | 'lessons___habit___internal___fieldOwners'
  | 'lessons___habit___internal___ignoreType'
  | 'lessons___habit___internal___mediaType'
  | 'lessons___habit___internal___owner'
  | 'lessons___habit___internal___type'
  | 'lessons___habit___title'
  | 'lessons___habit___slug'
  | 'lessons___habit___period'
  | 'lessons___habit___lesson'
  | 'lessons___habit___lesson___id'
  | 'lessons___habit___lesson___children'
  | 'lessons___habit___lesson___lessonName'
  | 'lessons___habit___lesson___slug'
  | 'lessons___habit___lesson___keywords'
  | 'lessons___habit___lesson___author'
  | 'lessons___habit___lesson___stage'
  | 'lessons___habit___lesson___authorCard'
  | 'lessons___habit___lesson___habit'
  | 'lessons___habit___lesson___week'
  | 'lessons___habit___lesson___spaceId'
  | 'lessons___habit___lesson___contentful_id'
  | 'lessons___habit___lesson___createdAt'
  | 'lessons___habit___lesson___updatedAt'
  | 'lessons___habit___lesson___node_locale'
  | 'lessons___habit___lesson___metalesson'
  | 'lessons___habit___lesson___customComplete'
  | 'lessons___habit___description___id'
  | 'lessons___habit___description___children'
  | 'lessons___habit___description___nodeType'
  | 'lessons___habit___description___content'
  | 'lessons___habit___description___description'
  | 'lessons___habit___description___json'
  | 'lessons___habit___spaceId'
  | 'lessons___habit___contentful_id'
  | 'lessons___habit___createdAt'
  | 'lessons___habit___updatedAt'
  | 'lessons___habit___sys___revision'
  | 'lessons___habit___node_locale'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'lessons___week'
  | 'lessons___week___id'
  | 'lessons___week___parent___id'
  | 'lessons___week___parent___children'
  | 'lessons___week___children'
  | 'lessons___week___children___id'
  | 'lessons___week___children___children'
  | 'lessons___week___internal___content'
  | 'lessons___week___internal___contentDigest'
  | 'lessons___week___internal___description'
  | 'lessons___week___internal___fieldOwners'
  | 'lessons___week___internal___ignoreType'
  | 'lessons___week___internal___mediaType'
  | 'lessons___week___internal___owner'
  | 'lessons___week___internal___type'
  | 'lessons___week___order'
  | 'lessons___week___weekName'
  | 'lessons___week___slug'
  | 'lessons___week___intro'
  | 'lessons___week___taskCount'
  | 'lessons___week___locked'
  | 'lessons___week___duration'
  | 'lessons___week___coverPhoto___id'
  | 'lessons___week___coverPhoto___children'
  | 'lessons___week___coverPhoto___contentful_id'
  | 'lessons___week___coverPhoto___title'
  | 'lessons___week___coverPhoto___description'
  | 'lessons___week___coverPhoto___node_locale'
  | 'lessons___week___lessons'
  | 'lessons___week___lessons___id'
  | 'lessons___week___lessons___children'
  | 'lessons___week___lessons___lessonName'
  | 'lessons___week___lessons___slug'
  | 'lessons___week___lessons___keywords'
  | 'lessons___week___lessons___author'
  | 'lessons___week___lessons___stage'
  | 'lessons___week___lessons___authorCard'
  | 'lessons___week___lessons___habit'
  | 'lessons___week___lessons___week'
  | 'lessons___week___lessons___spaceId'
  | 'lessons___week___lessons___contentful_id'
  | 'lessons___week___lessons___createdAt'
  | 'lessons___week___lessons___updatedAt'
  | 'lessons___week___lessons___node_locale'
  | 'lessons___week___lessons___metalesson'
  | 'lessons___week___lessons___customComplete'
  | 'lessons___week___weekDescription___id'
  | 'lessons___week___weekDescription___children'
  | 'lessons___week___weekDescription___nodeType'
  | 'lessons___week___weekDescription___content'
  | 'lessons___week___weekDescription___weekDescription'
  | 'lessons___week___weekDescription___json'
  | 'lessons___week___spaceId'
  | 'lessons___week___contentful_id'
  | 'lessons___week___createdAt'
  | 'lessons___week___updatedAt'
  | 'lessons___week___sys___revision'
  | 'lessons___week___node_locale'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'lessons___lessonContent___id'
  | 'lessons___lessonContent___parent___id'
  | 'lessons___lessonContent___parent___children'
  | 'lessons___lessonContent___children'
  | 'lessons___lessonContent___children___id'
  | 'lessons___lessonContent___children___children'
  | 'lessons___lessonContent___internal___content'
  | 'lessons___lessonContent___internal___contentDigest'
  | 'lessons___lessonContent___internal___description'
  | 'lessons___lessonContent___internal___fieldOwners'
  | 'lessons___lessonContent___internal___ignoreType'
  | 'lessons___lessonContent___internal___mediaType'
  | 'lessons___lessonContent___internal___owner'
  | 'lessons___lessonContent___internal___type'
  | 'lessons___lessonContent___nodeType'
  | 'lessons___lessonContent___content'
  | 'lessons___lessonContent___content___nodeType'
  | 'lessons___lessonContent___content___content'
  | 'lessons___lessonContent___lessonContent'
  | 'lessons___lessonContent___fields___excerpt'
  | 'lessons___lessonContent___json'
  | 'lessons___additionalInformation___id'
  | 'lessons___additionalInformation___parent___id'
  | 'lessons___additionalInformation___parent___children'
  | 'lessons___additionalInformation___children'
  | 'lessons___additionalInformation___children___id'
  | 'lessons___additionalInformation___children___children'
  | 'lessons___additionalInformation___internal___content'
  | 'lessons___additionalInformation___internal___contentDigest'
  | 'lessons___additionalInformation___internal___description'
  | 'lessons___additionalInformation___internal___fieldOwners'
  | 'lessons___additionalInformation___internal___ignoreType'
  | 'lessons___additionalInformation___internal___mediaType'
  | 'lessons___additionalInformation___internal___owner'
  | 'lessons___additionalInformation___internal___type'
  | 'lessons___additionalInformation___content'
  | 'lessons___additionalInformation___content___content'
  | 'lessons___additionalInformation___content___nodeType'
  | 'lessons___additionalInformation___nodeType'
  | 'lessons___additionalInformation___additionalInformation'
  | 'lessons___additionalInformation___fields___excerpt'
  | 'lessons___additionalInformation___json'
  | 'lessons___weights___id'
  | 'lessons___weights___parent___id'
  | 'lessons___weights___parent___children'
  | 'lessons___weights___children'
  | 'lessons___weights___children___id'
  | 'lessons___weights___children___children'
  | 'lessons___weights___internal___content'
  | 'lessons___weights___internal___contentDigest'
  | 'lessons___weights___internal___description'
  | 'lessons___weights___internal___fieldOwners'
  | 'lessons___weights___internal___ignoreType'
  | 'lessons___weights___internal___mediaType'
  | 'lessons___weights___internal___owner'
  | 'lessons___weights___internal___type'
  | 'lessons___weights___jetlag'
  | 'lessons___weights___duration'
  | 'lessons___weights___efficiency'
  | 'lessons___weights___consistency'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'lessons___spaceId'
  | 'lessons___contentful_id'
  | 'lessons___createdAt'
  | 'lessons___updatedAt'
  | 'lessons___sys___revision'
  | 'lessons___node_locale'
  | 'lessons___metalesson'
  | 'lessons___metalesson___id'
  | 'lessons___metalesson___parent___id'
  | 'lessons___metalesson___parent___children'
  | 'lessons___metalesson___children'
  | 'lessons___metalesson___children___id'
  | 'lessons___metalesson___children___children'
  | 'lessons___metalesson___internal___content'
  | 'lessons___metalesson___internal___contentDigest'
  | 'lessons___metalesson___internal___description'
  | 'lessons___metalesson___internal___fieldOwners'
  | 'lessons___metalesson___internal___ignoreType'
  | 'lessons___metalesson___internal___mediaType'
  | 'lessons___metalesson___internal___owner'
  | 'lessons___metalesson___internal___type'
  | 'lessons___metalesson___title'
  | 'lessons___metalesson___slug'
  | 'lessons___metalesson___keywords'
  | 'lessons___metalesson___lessons'
  | 'lessons___metalesson___lessons___id'
  | 'lessons___metalesson___lessons___children'
  | 'lessons___metalesson___lessons___lessonName'
  | 'lessons___metalesson___lessons___slug'
  | 'lessons___metalesson___lessons___keywords'
  | 'lessons___metalesson___lessons___author'
  | 'lessons___metalesson___lessons___stage'
  | 'lessons___metalesson___lessons___authorCard'
  | 'lessons___metalesson___lessons___habit'
  | 'lessons___metalesson___lessons___week'
  | 'lessons___metalesson___lessons___spaceId'
  | 'lessons___metalesson___lessons___contentful_id'
  | 'lessons___metalesson___lessons___createdAt'
  | 'lessons___metalesson___lessons___updatedAt'
  | 'lessons___metalesson___lessons___node_locale'
  | 'lessons___metalesson___lessons___metalesson'
  | 'lessons___metalesson___lessons___customComplete'
  | 'lessons___metalesson___relatedContent'
  | 'lessons___metalesson___relatedContent___id'
  | 'lessons___metalesson___relatedContent___children'
  | 'lessons___metalesson___relatedContent___lessonName'
  | 'lessons___metalesson___relatedContent___slug'
  | 'lessons___metalesson___relatedContent___keywords'
  | 'lessons___metalesson___relatedContent___author'
  | 'lessons___metalesson___relatedContent___stage'
  | 'lessons___metalesson___relatedContent___authorCard'
  | 'lessons___metalesson___relatedContent___habit'
  | 'lessons___metalesson___relatedContent___week'
  | 'lessons___metalesson___relatedContent___spaceId'
  | 'lessons___metalesson___relatedContent___contentful_id'
  | 'lessons___metalesson___relatedContent___createdAt'
  | 'lessons___metalesson___relatedContent___updatedAt'
  | 'lessons___metalesson___relatedContent___node_locale'
  | 'lessons___metalesson___relatedContent___metalesson'
  | 'lessons___metalesson___relatedContent___customComplete'
  | 'lessons___metalesson___spaceId'
  | 'lessons___metalesson___contentful_id'
  | 'lessons___metalesson___createdAt'
  | 'lessons___metalesson___updatedAt'
  | 'lessons___metalesson___sys___revision'
  | 'lessons___metalesson___node_locale'
  | 'lessons___customComplete'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___id'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___children'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___children___id'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___children___children'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___content'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___content___content'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___json'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'lessons___childContentfulLessonWeightsJsonNode___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'relatedContent'
  | 'relatedContent___id'
  | 'relatedContent___parent___id'
  | 'relatedContent___parent___parent___id'
  | 'relatedContent___parent___parent___children'
  | 'relatedContent___parent___children'
  | 'relatedContent___parent___children___id'
  | 'relatedContent___parent___children___children'
  | 'relatedContent___parent___internal___content'
  | 'relatedContent___parent___internal___contentDigest'
  | 'relatedContent___parent___internal___description'
  | 'relatedContent___parent___internal___fieldOwners'
  | 'relatedContent___parent___internal___ignoreType'
  | 'relatedContent___parent___internal___mediaType'
  | 'relatedContent___parent___internal___owner'
  | 'relatedContent___parent___internal___type'
  | 'relatedContent___children'
  | 'relatedContent___children___id'
  | 'relatedContent___children___parent___id'
  | 'relatedContent___children___parent___children'
  | 'relatedContent___children___children'
  | 'relatedContent___children___children___id'
  | 'relatedContent___children___children___children'
  | 'relatedContent___children___internal___content'
  | 'relatedContent___children___internal___contentDigest'
  | 'relatedContent___children___internal___description'
  | 'relatedContent___children___internal___fieldOwners'
  | 'relatedContent___children___internal___ignoreType'
  | 'relatedContent___children___internal___mediaType'
  | 'relatedContent___children___internal___owner'
  | 'relatedContent___children___internal___type'
  | 'relatedContent___internal___content'
  | 'relatedContent___internal___contentDigest'
  | 'relatedContent___internal___description'
  | 'relatedContent___internal___fieldOwners'
  | 'relatedContent___internal___ignoreType'
  | 'relatedContent___internal___mediaType'
  | 'relatedContent___internal___owner'
  | 'relatedContent___internal___type'
  | 'relatedContent___lessonName'
  | 'relatedContent___slug'
  | 'relatedContent___keywords'
  | 'relatedContent___author'
  | 'relatedContent___stage'
  | 'relatedContent___authorCard'
  | 'relatedContent___authorCard___id'
  | 'relatedContent___authorCard___parent___id'
  | 'relatedContent___authorCard___parent___children'
  | 'relatedContent___authorCard___children'
  | 'relatedContent___authorCard___children___id'
  | 'relatedContent___authorCard___children___children'
  | 'relatedContent___authorCard___internal___content'
  | 'relatedContent___authorCard___internal___contentDigest'
  | 'relatedContent___authorCard___internal___description'
  | 'relatedContent___authorCard___internal___fieldOwners'
  | 'relatedContent___authorCard___internal___ignoreType'
  | 'relatedContent___authorCard___internal___mediaType'
  | 'relatedContent___authorCard___internal___owner'
  | 'relatedContent___authorCard___internal___type'
  | 'relatedContent___authorCard___slug'
  | 'relatedContent___authorCard___name'
  | 'relatedContent___authorCard___credentials'
  | 'relatedContent___authorCard___avatar___id'
  | 'relatedContent___authorCard___avatar___children'
  | 'relatedContent___authorCard___avatar___contentful_id'
  | 'relatedContent___authorCard___avatar___title'
  | 'relatedContent___authorCard___avatar___description'
  | 'relatedContent___authorCard___avatar___node_locale'
  | 'relatedContent___authorCard___spaceId'
  | 'relatedContent___authorCard___contentful_id'
  | 'relatedContent___authorCard___createdAt'
  | 'relatedContent___authorCard___updatedAt'
  | 'relatedContent___authorCard___sys___revision'
  | 'relatedContent___authorCard___node_locale'
  | 'relatedContent___authorCard___lesson'
  | 'relatedContent___authorCard___lesson___id'
  | 'relatedContent___authorCard___lesson___children'
  | 'relatedContent___authorCard___lesson___lessonName'
  | 'relatedContent___authorCard___lesson___slug'
  | 'relatedContent___authorCard___lesson___keywords'
  | 'relatedContent___authorCard___lesson___author'
  | 'relatedContent___authorCard___lesson___stage'
  | 'relatedContent___authorCard___lesson___authorCard'
  | 'relatedContent___authorCard___lesson___habit'
  | 'relatedContent___authorCard___lesson___week'
  | 'relatedContent___authorCard___lesson___spaceId'
  | 'relatedContent___authorCard___lesson___contentful_id'
  | 'relatedContent___authorCard___lesson___createdAt'
  | 'relatedContent___authorCard___lesson___updatedAt'
  | 'relatedContent___authorCard___lesson___node_locale'
  | 'relatedContent___authorCard___lesson___metalesson'
  | 'relatedContent___authorCard___lesson___customComplete'
  | 'relatedContent___cover___id'
  | 'relatedContent___cover___parent___id'
  | 'relatedContent___cover___parent___children'
  | 'relatedContent___cover___children'
  | 'relatedContent___cover___children___id'
  | 'relatedContent___cover___children___children'
  | 'relatedContent___cover___internal___content'
  | 'relatedContent___cover___internal___contentDigest'
  | 'relatedContent___cover___internal___description'
  | 'relatedContent___cover___internal___fieldOwners'
  | 'relatedContent___cover___internal___ignoreType'
  | 'relatedContent___cover___internal___mediaType'
  | 'relatedContent___cover___internal___owner'
  | 'relatedContent___cover___internal___type'
  | 'relatedContent___cover___contentful_id'
  | 'relatedContent___cover___file___url'
  | 'relatedContent___cover___file___fileName'
  | 'relatedContent___cover___file___contentType'
  | 'relatedContent___cover___title'
  | 'relatedContent___cover___description'
  | 'relatedContent___cover___node_locale'
  | 'relatedContent___cover___fixed___base64'
  | 'relatedContent___cover___fixed___tracedSVG'
  | 'relatedContent___cover___fixed___aspectRatio'
  | 'relatedContent___cover___fixed___width'
  | 'relatedContent___cover___fixed___height'
  | 'relatedContent___cover___fixed___src'
  | 'relatedContent___cover___fixed___srcSet'
  | 'relatedContent___cover___fixed___srcWebp'
  | 'relatedContent___cover___fixed___srcSetWebp'
  | 'relatedContent___cover___resolutions___base64'
  | 'relatedContent___cover___resolutions___tracedSVG'
  | 'relatedContent___cover___resolutions___aspectRatio'
  | 'relatedContent___cover___resolutions___width'
  | 'relatedContent___cover___resolutions___height'
  | 'relatedContent___cover___resolutions___src'
  | 'relatedContent___cover___resolutions___srcSet'
  | 'relatedContent___cover___resolutions___srcWebp'
  | 'relatedContent___cover___resolutions___srcSetWebp'
  | 'relatedContent___cover___fluid___base64'
  | 'relatedContent___cover___fluid___tracedSVG'
  | 'relatedContent___cover___fluid___aspectRatio'
  | 'relatedContent___cover___fluid___src'
  | 'relatedContent___cover___fluid___srcSet'
  | 'relatedContent___cover___fluid___srcWebp'
  | 'relatedContent___cover___fluid___srcSetWebp'
  | 'relatedContent___cover___fluid___sizes'
  | 'relatedContent___cover___sizes___base64'
  | 'relatedContent___cover___sizes___tracedSVG'
  | 'relatedContent___cover___sizes___aspectRatio'
  | 'relatedContent___cover___sizes___src'
  | 'relatedContent___cover___sizes___srcSet'
  | 'relatedContent___cover___sizes___srcWebp'
  | 'relatedContent___cover___sizes___srcSetWebp'
  | 'relatedContent___cover___sizes___sizes'
  | 'relatedContent___cover___resize___base64'
  | 'relatedContent___cover___resize___tracedSVG'
  | 'relatedContent___cover___resize___src'
  | 'relatedContent___cover___resize___width'
  | 'relatedContent___cover___resize___height'
  | 'relatedContent___cover___resize___aspectRatio'
  | 'relatedContent___section___id'
  | 'relatedContent___section___parent___id'
  | 'relatedContent___section___parent___children'
  | 'relatedContent___section___children'
  | 'relatedContent___section___children___id'
  | 'relatedContent___section___children___children'
  | 'relatedContent___section___internal___content'
  | 'relatedContent___section___internal___contentDigest'
  | 'relatedContent___section___internal___description'
  | 'relatedContent___section___internal___fieldOwners'
  | 'relatedContent___section___internal___ignoreType'
  | 'relatedContent___section___internal___mediaType'
  | 'relatedContent___section___internal___owner'
  | 'relatedContent___section___internal___type'
  | 'relatedContent___section___order'
  | 'relatedContent___section___title'
  | 'relatedContent___section___lesson'
  | 'relatedContent___section___lesson___id'
  | 'relatedContent___section___lesson___children'
  | 'relatedContent___section___lesson___lessonName'
  | 'relatedContent___section___lesson___slug'
  | 'relatedContent___section___lesson___keywords'
  | 'relatedContent___section___lesson___author'
  | 'relatedContent___section___lesson___stage'
  | 'relatedContent___section___lesson___authorCard'
  | 'relatedContent___section___lesson___habit'
  | 'relatedContent___section___lesson___week'
  | 'relatedContent___section___lesson___spaceId'
  | 'relatedContent___section___lesson___contentful_id'
  | 'relatedContent___section___lesson___createdAt'
  | 'relatedContent___section___lesson___updatedAt'
  | 'relatedContent___section___lesson___node_locale'
  | 'relatedContent___section___lesson___metalesson'
  | 'relatedContent___section___lesson___customComplete'
  | 'relatedContent___section___description___id'
  | 'relatedContent___section___description___children'
  | 'relatedContent___section___description___nodeType'
  | 'relatedContent___section___description___content'
  | 'relatedContent___section___description___description'
  | 'relatedContent___section___description___json'
  | 'relatedContent___section___spaceId'
  | 'relatedContent___section___contentful_id'
  | 'relatedContent___section___createdAt'
  | 'relatedContent___section___updatedAt'
  | 'relatedContent___section___sys___revision'
  | 'relatedContent___section___node_locale'
  | 'relatedContent___section___childContentfulSectionDescriptionRichTextNode___id'
  | 'relatedContent___section___childContentfulSectionDescriptionRichTextNode___children'
  | 'relatedContent___section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'relatedContent___section___childContentfulSectionDescriptionRichTextNode___content'
  | 'relatedContent___section___childContentfulSectionDescriptionRichTextNode___description'
  | 'relatedContent___section___childContentfulSectionDescriptionRichTextNode___json'
  | 'relatedContent___habit'
  | 'relatedContent___habit___id'
  | 'relatedContent___habit___parent___id'
  | 'relatedContent___habit___parent___children'
  | 'relatedContent___habit___children'
  | 'relatedContent___habit___children___id'
  | 'relatedContent___habit___children___children'
  | 'relatedContent___habit___internal___content'
  | 'relatedContent___habit___internal___contentDigest'
  | 'relatedContent___habit___internal___description'
  | 'relatedContent___habit___internal___fieldOwners'
  | 'relatedContent___habit___internal___ignoreType'
  | 'relatedContent___habit___internal___mediaType'
  | 'relatedContent___habit___internal___owner'
  | 'relatedContent___habit___internal___type'
  | 'relatedContent___habit___title'
  | 'relatedContent___habit___slug'
  | 'relatedContent___habit___period'
  | 'relatedContent___habit___lesson'
  | 'relatedContent___habit___lesson___id'
  | 'relatedContent___habit___lesson___children'
  | 'relatedContent___habit___lesson___lessonName'
  | 'relatedContent___habit___lesson___slug'
  | 'relatedContent___habit___lesson___keywords'
  | 'relatedContent___habit___lesson___author'
  | 'relatedContent___habit___lesson___stage'
  | 'relatedContent___habit___lesson___authorCard'
  | 'relatedContent___habit___lesson___habit'
  | 'relatedContent___habit___lesson___week'
  | 'relatedContent___habit___lesson___spaceId'
  | 'relatedContent___habit___lesson___contentful_id'
  | 'relatedContent___habit___lesson___createdAt'
  | 'relatedContent___habit___lesson___updatedAt'
  | 'relatedContent___habit___lesson___node_locale'
  | 'relatedContent___habit___lesson___metalesson'
  | 'relatedContent___habit___lesson___customComplete'
  | 'relatedContent___habit___description___id'
  | 'relatedContent___habit___description___children'
  | 'relatedContent___habit___description___nodeType'
  | 'relatedContent___habit___description___content'
  | 'relatedContent___habit___description___description'
  | 'relatedContent___habit___description___json'
  | 'relatedContent___habit___spaceId'
  | 'relatedContent___habit___contentful_id'
  | 'relatedContent___habit___createdAt'
  | 'relatedContent___habit___updatedAt'
  | 'relatedContent___habit___sys___revision'
  | 'relatedContent___habit___node_locale'
  | 'relatedContent___habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'relatedContent___habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'relatedContent___habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'relatedContent___habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'relatedContent___habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'relatedContent___habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'relatedContent___week'
  | 'relatedContent___week___id'
  | 'relatedContent___week___parent___id'
  | 'relatedContent___week___parent___children'
  | 'relatedContent___week___children'
  | 'relatedContent___week___children___id'
  | 'relatedContent___week___children___children'
  | 'relatedContent___week___internal___content'
  | 'relatedContent___week___internal___contentDigest'
  | 'relatedContent___week___internal___description'
  | 'relatedContent___week___internal___fieldOwners'
  | 'relatedContent___week___internal___ignoreType'
  | 'relatedContent___week___internal___mediaType'
  | 'relatedContent___week___internal___owner'
  | 'relatedContent___week___internal___type'
  | 'relatedContent___week___order'
  | 'relatedContent___week___weekName'
  | 'relatedContent___week___slug'
  | 'relatedContent___week___intro'
  | 'relatedContent___week___taskCount'
  | 'relatedContent___week___locked'
  | 'relatedContent___week___duration'
  | 'relatedContent___week___coverPhoto___id'
  | 'relatedContent___week___coverPhoto___children'
  | 'relatedContent___week___coverPhoto___contentful_id'
  | 'relatedContent___week___coverPhoto___title'
  | 'relatedContent___week___coverPhoto___description'
  | 'relatedContent___week___coverPhoto___node_locale'
  | 'relatedContent___week___lessons'
  | 'relatedContent___week___lessons___id'
  | 'relatedContent___week___lessons___children'
  | 'relatedContent___week___lessons___lessonName'
  | 'relatedContent___week___lessons___slug'
  | 'relatedContent___week___lessons___keywords'
  | 'relatedContent___week___lessons___author'
  | 'relatedContent___week___lessons___stage'
  | 'relatedContent___week___lessons___authorCard'
  | 'relatedContent___week___lessons___habit'
  | 'relatedContent___week___lessons___week'
  | 'relatedContent___week___lessons___spaceId'
  | 'relatedContent___week___lessons___contentful_id'
  | 'relatedContent___week___lessons___createdAt'
  | 'relatedContent___week___lessons___updatedAt'
  | 'relatedContent___week___lessons___node_locale'
  | 'relatedContent___week___lessons___metalesson'
  | 'relatedContent___week___lessons___customComplete'
  | 'relatedContent___week___weekDescription___id'
  | 'relatedContent___week___weekDescription___children'
  | 'relatedContent___week___weekDescription___nodeType'
  | 'relatedContent___week___weekDescription___content'
  | 'relatedContent___week___weekDescription___weekDescription'
  | 'relatedContent___week___weekDescription___json'
  | 'relatedContent___week___spaceId'
  | 'relatedContent___week___contentful_id'
  | 'relatedContent___week___createdAt'
  | 'relatedContent___week___updatedAt'
  | 'relatedContent___week___sys___revision'
  | 'relatedContent___week___node_locale'
  | 'relatedContent___week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'relatedContent___week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'relatedContent___week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'relatedContent___week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'relatedContent___week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'relatedContent___week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'relatedContent___lessonContent___id'
  | 'relatedContent___lessonContent___parent___id'
  | 'relatedContent___lessonContent___parent___children'
  | 'relatedContent___lessonContent___children'
  | 'relatedContent___lessonContent___children___id'
  | 'relatedContent___lessonContent___children___children'
  | 'relatedContent___lessonContent___internal___content'
  | 'relatedContent___lessonContent___internal___contentDigest'
  | 'relatedContent___lessonContent___internal___description'
  | 'relatedContent___lessonContent___internal___fieldOwners'
  | 'relatedContent___lessonContent___internal___ignoreType'
  | 'relatedContent___lessonContent___internal___mediaType'
  | 'relatedContent___lessonContent___internal___owner'
  | 'relatedContent___lessonContent___internal___type'
  | 'relatedContent___lessonContent___nodeType'
  | 'relatedContent___lessonContent___content'
  | 'relatedContent___lessonContent___content___nodeType'
  | 'relatedContent___lessonContent___content___content'
  | 'relatedContent___lessonContent___lessonContent'
  | 'relatedContent___lessonContent___fields___excerpt'
  | 'relatedContent___lessonContent___json'
  | 'relatedContent___additionalInformation___id'
  | 'relatedContent___additionalInformation___parent___id'
  | 'relatedContent___additionalInformation___parent___children'
  | 'relatedContent___additionalInformation___children'
  | 'relatedContent___additionalInformation___children___id'
  | 'relatedContent___additionalInformation___children___children'
  | 'relatedContent___additionalInformation___internal___content'
  | 'relatedContent___additionalInformation___internal___contentDigest'
  | 'relatedContent___additionalInformation___internal___description'
  | 'relatedContent___additionalInformation___internal___fieldOwners'
  | 'relatedContent___additionalInformation___internal___ignoreType'
  | 'relatedContent___additionalInformation___internal___mediaType'
  | 'relatedContent___additionalInformation___internal___owner'
  | 'relatedContent___additionalInformation___internal___type'
  | 'relatedContent___additionalInformation___content'
  | 'relatedContent___additionalInformation___content___content'
  | 'relatedContent___additionalInformation___content___nodeType'
  | 'relatedContent___additionalInformation___nodeType'
  | 'relatedContent___additionalInformation___additionalInformation'
  | 'relatedContent___additionalInformation___fields___excerpt'
  | 'relatedContent___additionalInformation___json'
  | 'relatedContent___weights___id'
  | 'relatedContent___weights___parent___id'
  | 'relatedContent___weights___parent___children'
  | 'relatedContent___weights___children'
  | 'relatedContent___weights___children___id'
  | 'relatedContent___weights___children___children'
  | 'relatedContent___weights___internal___content'
  | 'relatedContent___weights___internal___contentDigest'
  | 'relatedContent___weights___internal___description'
  | 'relatedContent___weights___internal___fieldOwners'
  | 'relatedContent___weights___internal___ignoreType'
  | 'relatedContent___weights___internal___mediaType'
  | 'relatedContent___weights___internal___owner'
  | 'relatedContent___weights___internal___type'
  | 'relatedContent___weights___jetlag'
  | 'relatedContent___weights___duration'
  | 'relatedContent___weights___efficiency'
  | 'relatedContent___weights___consistency'
  | 'relatedContent___weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'relatedContent___weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'relatedContent___weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'relatedContent___weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'relatedContent___weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'relatedContent___weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'relatedContent___spaceId'
  | 'relatedContent___contentful_id'
  | 'relatedContent___createdAt'
  | 'relatedContent___updatedAt'
  | 'relatedContent___sys___revision'
  | 'relatedContent___node_locale'
  | 'relatedContent___metalesson'
  | 'relatedContent___metalesson___id'
  | 'relatedContent___metalesson___parent___id'
  | 'relatedContent___metalesson___parent___children'
  | 'relatedContent___metalesson___children'
  | 'relatedContent___metalesson___children___id'
  | 'relatedContent___metalesson___children___children'
  | 'relatedContent___metalesson___internal___content'
  | 'relatedContent___metalesson___internal___contentDigest'
  | 'relatedContent___metalesson___internal___description'
  | 'relatedContent___metalesson___internal___fieldOwners'
  | 'relatedContent___metalesson___internal___ignoreType'
  | 'relatedContent___metalesson___internal___mediaType'
  | 'relatedContent___metalesson___internal___owner'
  | 'relatedContent___metalesson___internal___type'
  | 'relatedContent___metalesson___title'
  | 'relatedContent___metalesson___slug'
  | 'relatedContent___metalesson___keywords'
  | 'relatedContent___metalesson___lessons'
  | 'relatedContent___metalesson___lessons___id'
  | 'relatedContent___metalesson___lessons___children'
  | 'relatedContent___metalesson___lessons___lessonName'
  | 'relatedContent___metalesson___lessons___slug'
  | 'relatedContent___metalesson___lessons___keywords'
  | 'relatedContent___metalesson___lessons___author'
  | 'relatedContent___metalesson___lessons___stage'
  | 'relatedContent___metalesson___lessons___authorCard'
  | 'relatedContent___metalesson___lessons___habit'
  | 'relatedContent___metalesson___lessons___week'
  | 'relatedContent___metalesson___lessons___spaceId'
  | 'relatedContent___metalesson___lessons___contentful_id'
  | 'relatedContent___metalesson___lessons___createdAt'
  | 'relatedContent___metalesson___lessons___updatedAt'
  | 'relatedContent___metalesson___lessons___node_locale'
  | 'relatedContent___metalesson___lessons___metalesson'
  | 'relatedContent___metalesson___lessons___customComplete'
  | 'relatedContent___metalesson___relatedContent'
  | 'relatedContent___metalesson___relatedContent___id'
  | 'relatedContent___metalesson___relatedContent___children'
  | 'relatedContent___metalesson___relatedContent___lessonName'
  | 'relatedContent___metalesson___relatedContent___slug'
  | 'relatedContent___metalesson___relatedContent___keywords'
  | 'relatedContent___metalesson___relatedContent___author'
  | 'relatedContent___metalesson___relatedContent___stage'
  | 'relatedContent___metalesson___relatedContent___authorCard'
  | 'relatedContent___metalesson___relatedContent___habit'
  | 'relatedContent___metalesson___relatedContent___week'
  | 'relatedContent___metalesson___relatedContent___spaceId'
  | 'relatedContent___metalesson___relatedContent___contentful_id'
  | 'relatedContent___metalesson___relatedContent___createdAt'
  | 'relatedContent___metalesson___relatedContent___updatedAt'
  | 'relatedContent___metalesson___relatedContent___node_locale'
  | 'relatedContent___metalesson___relatedContent___metalesson'
  | 'relatedContent___metalesson___relatedContent___customComplete'
  | 'relatedContent___metalesson___spaceId'
  | 'relatedContent___metalesson___contentful_id'
  | 'relatedContent___metalesson___createdAt'
  | 'relatedContent___metalesson___updatedAt'
  | 'relatedContent___metalesson___sys___revision'
  | 'relatedContent___metalesson___node_locale'
  | 'relatedContent___customComplete'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___id'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___children'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___children___id'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___children___children'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___content'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___content___content'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'relatedContent___childContentfulLessonLessonContentRichTextNode___json'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'relatedContent___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___parent___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___parent___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___children___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___children___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___content'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___description'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___type'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___jetlag'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___duration'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___efficiency'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___consistency'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulMetalessonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  relatedContent?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMetalessonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMetalessonFilterListInput = {
  elemMatch?: Maybe<ContentfulMetalessonFilterInput>;
};

export type ContentfulMetalessonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetalessonEdge>;
  nodes: Array<ContentfulMetalesson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMetalessonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMetalessonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMetalessonSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMetalessonSysContentType>;
};

export type ContentfulMetalessonSysContentType = {
  sys?: Maybe<ContentfulMetalessonSysContentTypeSys>;
};

export type ContentfulMetalessonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMetalessonSysContentTypeSysFilterInput>;
};

export type ContentfulMetalessonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMetalessonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMetalessonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMetalessonSysContentTypeFilterInput>;
};

export type ContentfulQuestion = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<Maybe<ContentfulAnswer>>>;
  questionnaire?: Maybe<Array<Maybe<ContentfulQuestionnaire>>>;
  question?: Maybe<ContentfulQuestionQuestionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQuestionSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNode>;
};


export type ContentfulQuestionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQuestionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionEdge>;
  nodes: Array<ContentfulQuestion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionGroupConnection>;
};


export type ContentfulQuestionConnectionDistinctArgs = {
  field: ContentfulQuestionFieldsEnum;
};


export type ContentfulQuestionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionFieldsEnum;
};

export type ContentfulQuestionEdge = {
  next?: Maybe<ContentfulQuestion>;
  node: ContentfulQuestion;
  previous?: Maybe<ContentfulQuestion>;
};

export type ContentfulQuestionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'type'
  | 'answers'
  | 'answers___id'
  | 'answers___parent___id'
  | 'answers___parent___parent___id'
  | 'answers___parent___parent___children'
  | 'answers___parent___children'
  | 'answers___parent___children___id'
  | 'answers___parent___children___children'
  | 'answers___parent___internal___content'
  | 'answers___parent___internal___contentDigest'
  | 'answers___parent___internal___description'
  | 'answers___parent___internal___fieldOwners'
  | 'answers___parent___internal___ignoreType'
  | 'answers___parent___internal___mediaType'
  | 'answers___parent___internal___owner'
  | 'answers___parent___internal___type'
  | 'answers___children'
  | 'answers___children___id'
  | 'answers___children___parent___id'
  | 'answers___children___parent___children'
  | 'answers___children___children'
  | 'answers___children___children___id'
  | 'answers___children___children___children'
  | 'answers___children___internal___content'
  | 'answers___children___internal___contentDigest'
  | 'answers___children___internal___description'
  | 'answers___children___internal___fieldOwners'
  | 'answers___children___internal___ignoreType'
  | 'answers___children___internal___mediaType'
  | 'answers___children___internal___owner'
  | 'answers___children___internal___type'
  | 'answers___internal___content'
  | 'answers___internal___contentDigest'
  | 'answers___internal___description'
  | 'answers___internal___fieldOwners'
  | 'answers___internal___ignoreType'
  | 'answers___internal___mediaType'
  | 'answers___internal___owner'
  | 'answers___internal___type'
  | 'answers___title'
  | 'answers___score'
  | 'answers___question'
  | 'answers___question___id'
  | 'answers___question___parent___id'
  | 'answers___question___parent___children'
  | 'answers___question___children'
  | 'answers___question___children___id'
  | 'answers___question___children___children'
  | 'answers___question___internal___content'
  | 'answers___question___internal___contentDigest'
  | 'answers___question___internal___description'
  | 'answers___question___internal___fieldOwners'
  | 'answers___question___internal___ignoreType'
  | 'answers___question___internal___mediaType'
  | 'answers___question___internal___owner'
  | 'answers___question___internal___type'
  | 'answers___question___title'
  | 'answers___question___type'
  | 'answers___question___answers'
  | 'answers___question___answers___id'
  | 'answers___question___answers___children'
  | 'answers___question___answers___title'
  | 'answers___question___answers___score'
  | 'answers___question___answers___question'
  | 'answers___question___answers___spaceId'
  | 'answers___question___answers___contentful_id'
  | 'answers___question___answers___createdAt'
  | 'answers___question___answers___updatedAt'
  | 'answers___question___answers___node_locale'
  | 'answers___question___questionnaire'
  | 'answers___question___questionnaire___id'
  | 'answers___question___questionnaire___children'
  | 'answers___question___questionnaire___title'
  | 'answers___question___questionnaire___slug'
  | 'answers___question___questionnaire___questions'
  | 'answers___question___questionnaire___results'
  | 'answers___question___questionnaire___spaceId'
  | 'answers___question___questionnaire___contentful_id'
  | 'answers___question___questionnaire___createdAt'
  | 'answers___question___questionnaire___updatedAt'
  | 'answers___question___questionnaire___node_locale'
  | 'answers___question___question___id'
  | 'answers___question___question___children'
  | 'answers___question___question___question'
  | 'answers___question___spaceId'
  | 'answers___question___contentful_id'
  | 'answers___question___createdAt'
  | 'answers___question___updatedAt'
  | 'answers___question___sys___revision'
  | 'answers___question___node_locale'
  | 'answers___question___childContentfulQuestionQuestionTextNode___id'
  | 'answers___question___childContentfulQuestionQuestionTextNode___children'
  | 'answers___question___childContentfulQuestionQuestionTextNode___question'
  | 'answers___spaceId'
  | 'answers___contentful_id'
  | 'answers___createdAt'
  | 'answers___updatedAt'
  | 'answers___sys___revision'
  | 'answers___node_locale'
  | 'questionnaire'
  | 'questionnaire___id'
  | 'questionnaire___parent___id'
  | 'questionnaire___parent___parent___id'
  | 'questionnaire___parent___parent___children'
  | 'questionnaire___parent___children'
  | 'questionnaire___parent___children___id'
  | 'questionnaire___parent___children___children'
  | 'questionnaire___parent___internal___content'
  | 'questionnaire___parent___internal___contentDigest'
  | 'questionnaire___parent___internal___description'
  | 'questionnaire___parent___internal___fieldOwners'
  | 'questionnaire___parent___internal___ignoreType'
  | 'questionnaire___parent___internal___mediaType'
  | 'questionnaire___parent___internal___owner'
  | 'questionnaire___parent___internal___type'
  | 'questionnaire___children'
  | 'questionnaire___children___id'
  | 'questionnaire___children___parent___id'
  | 'questionnaire___children___parent___children'
  | 'questionnaire___children___children'
  | 'questionnaire___children___children___id'
  | 'questionnaire___children___children___children'
  | 'questionnaire___children___internal___content'
  | 'questionnaire___children___internal___contentDigest'
  | 'questionnaire___children___internal___description'
  | 'questionnaire___children___internal___fieldOwners'
  | 'questionnaire___children___internal___ignoreType'
  | 'questionnaire___children___internal___mediaType'
  | 'questionnaire___children___internal___owner'
  | 'questionnaire___children___internal___type'
  | 'questionnaire___internal___content'
  | 'questionnaire___internal___contentDigest'
  | 'questionnaire___internal___description'
  | 'questionnaire___internal___fieldOwners'
  | 'questionnaire___internal___ignoreType'
  | 'questionnaire___internal___mediaType'
  | 'questionnaire___internal___owner'
  | 'questionnaire___internal___type'
  | 'questionnaire___title'
  | 'questionnaire___slug'
  | 'questionnaire___questions'
  | 'questionnaire___questions___id'
  | 'questionnaire___questions___parent___id'
  | 'questionnaire___questions___parent___children'
  | 'questionnaire___questions___children'
  | 'questionnaire___questions___children___id'
  | 'questionnaire___questions___children___children'
  | 'questionnaire___questions___internal___content'
  | 'questionnaire___questions___internal___contentDigest'
  | 'questionnaire___questions___internal___description'
  | 'questionnaire___questions___internal___fieldOwners'
  | 'questionnaire___questions___internal___ignoreType'
  | 'questionnaire___questions___internal___mediaType'
  | 'questionnaire___questions___internal___owner'
  | 'questionnaire___questions___internal___type'
  | 'questionnaire___questions___title'
  | 'questionnaire___questions___type'
  | 'questionnaire___questions___answers'
  | 'questionnaire___questions___answers___id'
  | 'questionnaire___questions___answers___children'
  | 'questionnaire___questions___answers___title'
  | 'questionnaire___questions___answers___score'
  | 'questionnaire___questions___answers___question'
  | 'questionnaire___questions___answers___spaceId'
  | 'questionnaire___questions___answers___contentful_id'
  | 'questionnaire___questions___answers___createdAt'
  | 'questionnaire___questions___answers___updatedAt'
  | 'questionnaire___questions___answers___node_locale'
  | 'questionnaire___questions___questionnaire'
  | 'questionnaire___questions___questionnaire___id'
  | 'questionnaire___questions___questionnaire___children'
  | 'questionnaire___questions___questionnaire___title'
  | 'questionnaire___questions___questionnaire___slug'
  | 'questionnaire___questions___questionnaire___questions'
  | 'questionnaire___questions___questionnaire___results'
  | 'questionnaire___questions___questionnaire___spaceId'
  | 'questionnaire___questions___questionnaire___contentful_id'
  | 'questionnaire___questions___questionnaire___createdAt'
  | 'questionnaire___questions___questionnaire___updatedAt'
  | 'questionnaire___questions___questionnaire___node_locale'
  | 'questionnaire___questions___question___id'
  | 'questionnaire___questions___question___children'
  | 'questionnaire___questions___question___question'
  | 'questionnaire___questions___spaceId'
  | 'questionnaire___questions___contentful_id'
  | 'questionnaire___questions___createdAt'
  | 'questionnaire___questions___updatedAt'
  | 'questionnaire___questions___sys___revision'
  | 'questionnaire___questions___node_locale'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___id'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___children'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___question'
  | 'questionnaire___results'
  | 'questionnaire___results___id'
  | 'questionnaire___results___parent___id'
  | 'questionnaire___results___parent___children'
  | 'questionnaire___results___children'
  | 'questionnaire___results___children___id'
  | 'questionnaire___results___children___children'
  | 'questionnaire___results___internal___content'
  | 'questionnaire___results___internal___contentDigest'
  | 'questionnaire___results___internal___description'
  | 'questionnaire___results___internal___fieldOwners'
  | 'questionnaire___results___internal___ignoreType'
  | 'questionnaire___results___internal___mediaType'
  | 'questionnaire___results___internal___owner'
  | 'questionnaire___results___internal___type'
  | 'questionnaire___results___title'
  | 'questionnaire___results___questionnaire'
  | 'questionnaire___results___questionnaire___id'
  | 'questionnaire___results___questionnaire___children'
  | 'questionnaire___results___questionnaire___title'
  | 'questionnaire___results___questionnaire___slug'
  | 'questionnaire___results___questionnaire___questions'
  | 'questionnaire___results___questionnaire___results'
  | 'questionnaire___results___questionnaire___spaceId'
  | 'questionnaire___results___questionnaire___contentful_id'
  | 'questionnaire___results___questionnaire___createdAt'
  | 'questionnaire___results___questionnaire___updatedAt'
  | 'questionnaire___results___questionnaire___node_locale'
  | 'questionnaire___results___scoreRange___id'
  | 'questionnaire___results___scoreRange___children'
  | 'questionnaire___results___scoreRange___lowEnd'
  | 'questionnaire___results___scoreRange___highEnd'
  | 'questionnaire___results___description___id'
  | 'questionnaire___results___description___children'
  | 'questionnaire___results___description___content'
  | 'questionnaire___results___description___nodeType'
  | 'questionnaire___results___description___description'
  | 'questionnaire___results___description___json'
  | 'questionnaire___results___details___id'
  | 'questionnaire___results___details___children'
  | 'questionnaire___results___details___content'
  | 'questionnaire___results___details___nodeType'
  | 'questionnaire___results___details___details'
  | 'questionnaire___results___details___json'
  | 'questionnaire___results___spaceId'
  | 'questionnaire___results___contentful_id'
  | 'questionnaire___results___createdAt'
  | 'questionnaire___results___updatedAt'
  | 'questionnaire___results___sys___revision'
  | 'questionnaire___results___node_locale'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___id'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___children'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___highEnd'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___id'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___children'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___content'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___nodeType'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___description'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___json'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___id'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___children'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___content'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___nodeType'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___details'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___json'
  | 'questionnaire___description___id'
  | 'questionnaire___description___parent___id'
  | 'questionnaire___description___parent___children'
  | 'questionnaire___description___children'
  | 'questionnaire___description___children___id'
  | 'questionnaire___description___children___children'
  | 'questionnaire___description___internal___content'
  | 'questionnaire___description___internal___contentDigest'
  | 'questionnaire___description___internal___description'
  | 'questionnaire___description___internal___fieldOwners'
  | 'questionnaire___description___internal___ignoreType'
  | 'questionnaire___description___internal___mediaType'
  | 'questionnaire___description___internal___owner'
  | 'questionnaire___description___internal___type'
  | 'questionnaire___description___content'
  | 'questionnaire___description___content___content'
  | 'questionnaire___description___content___nodeType'
  | 'questionnaire___description___nodeType'
  | 'questionnaire___description___description'
  | 'questionnaire___description___fields___excerpt'
  | 'questionnaire___description___json'
  | 'questionnaire___spaceId'
  | 'questionnaire___contentful_id'
  | 'questionnaire___createdAt'
  | 'questionnaire___updatedAt'
  | 'questionnaire___sys___revision'
  | 'questionnaire___node_locale'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___id'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___parent___id'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___parent___children'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children___id'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children___children'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___content'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___contentDigest'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___description'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___fieldOwners'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___ignoreType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___mediaType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___owner'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___type'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content___content'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content___nodeType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___nodeType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___description'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___fields___excerpt'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___json'
  | 'question___id'
  | 'question___parent___id'
  | 'question___parent___parent___id'
  | 'question___parent___parent___children'
  | 'question___parent___children'
  | 'question___parent___children___id'
  | 'question___parent___children___children'
  | 'question___parent___internal___content'
  | 'question___parent___internal___contentDigest'
  | 'question___parent___internal___description'
  | 'question___parent___internal___fieldOwners'
  | 'question___parent___internal___ignoreType'
  | 'question___parent___internal___mediaType'
  | 'question___parent___internal___owner'
  | 'question___parent___internal___type'
  | 'question___children'
  | 'question___children___id'
  | 'question___children___parent___id'
  | 'question___children___parent___children'
  | 'question___children___children'
  | 'question___children___children___id'
  | 'question___children___children___children'
  | 'question___children___internal___content'
  | 'question___children___internal___contentDigest'
  | 'question___children___internal___description'
  | 'question___children___internal___fieldOwners'
  | 'question___children___internal___ignoreType'
  | 'question___children___internal___mediaType'
  | 'question___children___internal___owner'
  | 'question___children___internal___type'
  | 'question___internal___content'
  | 'question___internal___contentDigest'
  | 'question___internal___description'
  | 'question___internal___fieldOwners'
  | 'question___internal___ignoreType'
  | 'question___internal___mediaType'
  | 'question___internal___owner'
  | 'question___internal___type'
  | 'question___question'
  | 'question___childMarkdownRemark___id'
  | 'question___childMarkdownRemark___frontmatter___title'
  | 'question___childMarkdownRemark___frontmatter___slug'
  | 'question___childMarkdownRemark___frontmatter___date'
  | 'question___childMarkdownRemark___frontmatter___authorSlug'
  | 'question___childMarkdownRemark___frontmatter___author'
  | 'question___childMarkdownRemark___frontmatter___tags'
  | 'question___childMarkdownRemark___frontmatter___canonical'
  | 'question___childMarkdownRemark___excerpt'
  | 'question___childMarkdownRemark___rawMarkdownBody'
  | 'question___childMarkdownRemark___fileAbsolutePath'
  | 'question___childMarkdownRemark___fields___slug'
  | 'question___childMarkdownRemark___html'
  | 'question___childMarkdownRemark___htmlAst'
  | 'question___childMarkdownRemark___excerptAst'
  | 'question___childMarkdownRemark___headings'
  | 'question___childMarkdownRemark___headings___id'
  | 'question___childMarkdownRemark___headings___value'
  | 'question___childMarkdownRemark___headings___depth'
  | 'question___childMarkdownRemark___timeToRead'
  | 'question___childMarkdownRemark___tableOfContents'
  | 'question___childMarkdownRemark___wordCount___paragraphs'
  | 'question___childMarkdownRemark___wordCount___sentences'
  | 'question___childMarkdownRemark___wordCount___words'
  | 'question___childMarkdownRemark___parent___id'
  | 'question___childMarkdownRemark___parent___children'
  | 'question___childMarkdownRemark___children'
  | 'question___childMarkdownRemark___children___id'
  | 'question___childMarkdownRemark___children___children'
  | 'question___childMarkdownRemark___internal___content'
  | 'question___childMarkdownRemark___internal___contentDigest'
  | 'question___childMarkdownRemark___internal___description'
  | 'question___childMarkdownRemark___internal___fieldOwners'
  | 'question___childMarkdownRemark___internal___ignoreType'
  | 'question___childMarkdownRemark___internal___mediaType'
  | 'question___childMarkdownRemark___internal___owner'
  | 'question___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulQuestionQuestionTextNode___id'
  | 'childContentfulQuestionQuestionTextNode___parent___id'
  | 'childContentfulQuestionQuestionTextNode___parent___parent___id'
  | 'childContentfulQuestionQuestionTextNode___parent___parent___children'
  | 'childContentfulQuestionQuestionTextNode___parent___children'
  | 'childContentfulQuestionQuestionTextNode___parent___children___id'
  | 'childContentfulQuestionQuestionTextNode___parent___children___children'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___content'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___description'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___type'
  | 'childContentfulQuestionQuestionTextNode___children'
  | 'childContentfulQuestionQuestionTextNode___children___id'
  | 'childContentfulQuestionQuestionTextNode___children___parent___id'
  | 'childContentfulQuestionQuestionTextNode___children___parent___children'
  | 'childContentfulQuestionQuestionTextNode___children___children'
  | 'childContentfulQuestionQuestionTextNode___children___children___id'
  | 'childContentfulQuestionQuestionTextNode___children___children___children'
  | 'childContentfulQuestionQuestionTextNode___children___internal___content'
  | 'childContentfulQuestionQuestionTextNode___children___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___children___internal___description'
  | 'childContentfulQuestionQuestionTextNode___children___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___children___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___children___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___children___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___children___internal___type'
  | 'childContentfulQuestionQuestionTextNode___internal___content'
  | 'childContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___internal___description'
  | 'childContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___internal___type'
  | 'childContentfulQuestionQuestionTextNode___question'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___id'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___slug'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___date'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___authorSlug'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___author'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___tags'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___frontmatter___canonical'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___fields___slug'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___html'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___headings'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___children'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___children___id'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___children___children'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___childMarkdownRemark___internal___type';

export type ContentfulQuestionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  answers?: Maybe<ContentfulAnswerFilterListInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  question?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
};

export type ContentfulQuestionFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionFilterInput>;
};

export type ContentfulQuestionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionEdge>;
  nodes: Array<ContentfulQuestion>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaire = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Maybe<ContentfulQuestion>>>;
  results?: Maybe<Array<Maybe<ContentfulResult>>>;
  description?: Maybe<ContentfulQuestionnaireDescriptionRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQuestionnaireSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulQuestionnaireDescriptionRichTextNode?: Maybe<ContentfulQuestionnaireDescriptionRichTextNode>;
};


export type ContentfulQuestionnaireCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQuestionnaireUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionnaireEdge>;
  nodes: Array<ContentfulQuestionnaire>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionnaireGroupConnection>;
};


export type ContentfulQuestionnaireConnectionDistinctArgs = {
  field: ContentfulQuestionnaireFieldsEnum;
};


export type ContentfulQuestionnaireConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionnaireFieldsEnum;
};

export type ContentfulQuestionnaireDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionnaireDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulQuestionnaireDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionnaireDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulQuestionnaireDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulQuestionnaireDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulQuestionnaireDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionnaireDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulQuestionnaireDescriptionRichTextNode>;
  node: ContentfulQuestionnaireDescriptionRichTextNode;
  previous?: Maybe<ContentfulQuestionnaireDescriptionRichTextNode>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeFields = {
  readingTime?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'description'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulQuestionnaireDescriptionRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionnaireDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulQuestionnaireDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionnaireEdge = {
  next?: Maybe<ContentfulQuestionnaire>;
  node: ContentfulQuestionnaire;
  previous?: Maybe<ContentfulQuestionnaire>;
};

export type ContentfulQuestionnaireFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'questions'
  | 'questions___id'
  | 'questions___parent___id'
  | 'questions___parent___parent___id'
  | 'questions___parent___parent___children'
  | 'questions___parent___children'
  | 'questions___parent___children___id'
  | 'questions___parent___children___children'
  | 'questions___parent___internal___content'
  | 'questions___parent___internal___contentDigest'
  | 'questions___parent___internal___description'
  | 'questions___parent___internal___fieldOwners'
  | 'questions___parent___internal___ignoreType'
  | 'questions___parent___internal___mediaType'
  | 'questions___parent___internal___owner'
  | 'questions___parent___internal___type'
  | 'questions___children'
  | 'questions___children___id'
  | 'questions___children___parent___id'
  | 'questions___children___parent___children'
  | 'questions___children___children'
  | 'questions___children___children___id'
  | 'questions___children___children___children'
  | 'questions___children___internal___content'
  | 'questions___children___internal___contentDigest'
  | 'questions___children___internal___description'
  | 'questions___children___internal___fieldOwners'
  | 'questions___children___internal___ignoreType'
  | 'questions___children___internal___mediaType'
  | 'questions___children___internal___owner'
  | 'questions___children___internal___type'
  | 'questions___internal___content'
  | 'questions___internal___contentDigest'
  | 'questions___internal___description'
  | 'questions___internal___fieldOwners'
  | 'questions___internal___ignoreType'
  | 'questions___internal___mediaType'
  | 'questions___internal___owner'
  | 'questions___internal___type'
  | 'questions___title'
  | 'questions___type'
  | 'questions___answers'
  | 'questions___answers___id'
  | 'questions___answers___parent___id'
  | 'questions___answers___parent___children'
  | 'questions___answers___children'
  | 'questions___answers___children___id'
  | 'questions___answers___children___children'
  | 'questions___answers___internal___content'
  | 'questions___answers___internal___contentDigest'
  | 'questions___answers___internal___description'
  | 'questions___answers___internal___fieldOwners'
  | 'questions___answers___internal___ignoreType'
  | 'questions___answers___internal___mediaType'
  | 'questions___answers___internal___owner'
  | 'questions___answers___internal___type'
  | 'questions___answers___title'
  | 'questions___answers___score'
  | 'questions___answers___question'
  | 'questions___answers___question___id'
  | 'questions___answers___question___children'
  | 'questions___answers___question___title'
  | 'questions___answers___question___type'
  | 'questions___answers___question___answers'
  | 'questions___answers___question___questionnaire'
  | 'questions___answers___question___spaceId'
  | 'questions___answers___question___contentful_id'
  | 'questions___answers___question___createdAt'
  | 'questions___answers___question___updatedAt'
  | 'questions___answers___question___node_locale'
  | 'questions___answers___spaceId'
  | 'questions___answers___contentful_id'
  | 'questions___answers___createdAt'
  | 'questions___answers___updatedAt'
  | 'questions___answers___sys___revision'
  | 'questions___answers___node_locale'
  | 'questions___questionnaire'
  | 'questions___questionnaire___id'
  | 'questions___questionnaire___parent___id'
  | 'questions___questionnaire___parent___children'
  | 'questions___questionnaire___children'
  | 'questions___questionnaire___children___id'
  | 'questions___questionnaire___children___children'
  | 'questions___questionnaire___internal___content'
  | 'questions___questionnaire___internal___contentDigest'
  | 'questions___questionnaire___internal___description'
  | 'questions___questionnaire___internal___fieldOwners'
  | 'questions___questionnaire___internal___ignoreType'
  | 'questions___questionnaire___internal___mediaType'
  | 'questions___questionnaire___internal___owner'
  | 'questions___questionnaire___internal___type'
  | 'questions___questionnaire___title'
  | 'questions___questionnaire___slug'
  | 'questions___questionnaire___questions'
  | 'questions___questionnaire___questions___id'
  | 'questions___questionnaire___questions___children'
  | 'questions___questionnaire___questions___title'
  | 'questions___questionnaire___questions___type'
  | 'questions___questionnaire___questions___answers'
  | 'questions___questionnaire___questions___questionnaire'
  | 'questions___questionnaire___questions___spaceId'
  | 'questions___questionnaire___questions___contentful_id'
  | 'questions___questionnaire___questions___createdAt'
  | 'questions___questionnaire___questions___updatedAt'
  | 'questions___questionnaire___questions___node_locale'
  | 'questions___questionnaire___results'
  | 'questions___questionnaire___results___id'
  | 'questions___questionnaire___results___children'
  | 'questions___questionnaire___results___title'
  | 'questions___questionnaire___results___questionnaire'
  | 'questions___questionnaire___results___spaceId'
  | 'questions___questionnaire___results___contentful_id'
  | 'questions___questionnaire___results___createdAt'
  | 'questions___questionnaire___results___updatedAt'
  | 'questions___questionnaire___results___node_locale'
  | 'questions___questionnaire___description___id'
  | 'questions___questionnaire___description___children'
  | 'questions___questionnaire___description___content'
  | 'questions___questionnaire___description___nodeType'
  | 'questions___questionnaire___description___description'
  | 'questions___questionnaire___description___json'
  | 'questions___questionnaire___spaceId'
  | 'questions___questionnaire___contentful_id'
  | 'questions___questionnaire___createdAt'
  | 'questions___questionnaire___updatedAt'
  | 'questions___questionnaire___sys___revision'
  | 'questions___questionnaire___node_locale'
  | 'questions___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___id'
  | 'questions___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children'
  | 'questions___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content'
  | 'questions___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___nodeType'
  | 'questions___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___description'
  | 'questions___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___json'
  | 'questions___question___id'
  | 'questions___question___parent___id'
  | 'questions___question___parent___children'
  | 'questions___question___children'
  | 'questions___question___children___id'
  | 'questions___question___children___children'
  | 'questions___question___internal___content'
  | 'questions___question___internal___contentDigest'
  | 'questions___question___internal___description'
  | 'questions___question___internal___fieldOwners'
  | 'questions___question___internal___ignoreType'
  | 'questions___question___internal___mediaType'
  | 'questions___question___internal___owner'
  | 'questions___question___internal___type'
  | 'questions___question___question'
  | 'questions___question___childMarkdownRemark___id'
  | 'questions___question___childMarkdownRemark___excerpt'
  | 'questions___question___childMarkdownRemark___rawMarkdownBody'
  | 'questions___question___childMarkdownRemark___fileAbsolutePath'
  | 'questions___question___childMarkdownRemark___html'
  | 'questions___question___childMarkdownRemark___htmlAst'
  | 'questions___question___childMarkdownRemark___excerptAst'
  | 'questions___question___childMarkdownRemark___headings'
  | 'questions___question___childMarkdownRemark___timeToRead'
  | 'questions___question___childMarkdownRemark___tableOfContents'
  | 'questions___question___childMarkdownRemark___children'
  | 'questions___spaceId'
  | 'questions___contentful_id'
  | 'questions___createdAt'
  | 'questions___updatedAt'
  | 'questions___sys___revision'
  | 'questions___node_locale'
  | 'questions___childContentfulQuestionQuestionTextNode___id'
  | 'questions___childContentfulQuestionQuestionTextNode___parent___id'
  | 'questions___childContentfulQuestionQuestionTextNode___parent___children'
  | 'questions___childContentfulQuestionQuestionTextNode___children'
  | 'questions___childContentfulQuestionQuestionTextNode___children___id'
  | 'questions___childContentfulQuestionQuestionTextNode___children___children'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___content'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___description'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___owner'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___type'
  | 'questions___childContentfulQuestionQuestionTextNode___question'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___id'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___excerpt'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___html'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___htmlAst'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___excerptAst'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___headings'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___timeToRead'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___tableOfContents'
  | 'questions___childContentfulQuestionQuestionTextNode___childMarkdownRemark___children'
  | 'results'
  | 'results___id'
  | 'results___parent___id'
  | 'results___parent___parent___id'
  | 'results___parent___parent___children'
  | 'results___parent___children'
  | 'results___parent___children___id'
  | 'results___parent___children___children'
  | 'results___parent___internal___content'
  | 'results___parent___internal___contentDigest'
  | 'results___parent___internal___description'
  | 'results___parent___internal___fieldOwners'
  | 'results___parent___internal___ignoreType'
  | 'results___parent___internal___mediaType'
  | 'results___parent___internal___owner'
  | 'results___parent___internal___type'
  | 'results___children'
  | 'results___children___id'
  | 'results___children___parent___id'
  | 'results___children___parent___children'
  | 'results___children___children'
  | 'results___children___children___id'
  | 'results___children___children___children'
  | 'results___children___internal___content'
  | 'results___children___internal___contentDigest'
  | 'results___children___internal___description'
  | 'results___children___internal___fieldOwners'
  | 'results___children___internal___ignoreType'
  | 'results___children___internal___mediaType'
  | 'results___children___internal___owner'
  | 'results___children___internal___type'
  | 'results___internal___content'
  | 'results___internal___contentDigest'
  | 'results___internal___description'
  | 'results___internal___fieldOwners'
  | 'results___internal___ignoreType'
  | 'results___internal___mediaType'
  | 'results___internal___owner'
  | 'results___internal___type'
  | 'results___title'
  | 'results___questionnaire'
  | 'results___questionnaire___id'
  | 'results___questionnaire___parent___id'
  | 'results___questionnaire___parent___children'
  | 'results___questionnaire___children'
  | 'results___questionnaire___children___id'
  | 'results___questionnaire___children___children'
  | 'results___questionnaire___internal___content'
  | 'results___questionnaire___internal___contentDigest'
  | 'results___questionnaire___internal___description'
  | 'results___questionnaire___internal___fieldOwners'
  | 'results___questionnaire___internal___ignoreType'
  | 'results___questionnaire___internal___mediaType'
  | 'results___questionnaire___internal___owner'
  | 'results___questionnaire___internal___type'
  | 'results___questionnaire___title'
  | 'results___questionnaire___slug'
  | 'results___questionnaire___questions'
  | 'results___questionnaire___questions___id'
  | 'results___questionnaire___questions___children'
  | 'results___questionnaire___questions___title'
  | 'results___questionnaire___questions___type'
  | 'results___questionnaire___questions___answers'
  | 'results___questionnaire___questions___questionnaire'
  | 'results___questionnaire___questions___spaceId'
  | 'results___questionnaire___questions___contentful_id'
  | 'results___questionnaire___questions___createdAt'
  | 'results___questionnaire___questions___updatedAt'
  | 'results___questionnaire___questions___node_locale'
  | 'results___questionnaire___results'
  | 'results___questionnaire___results___id'
  | 'results___questionnaire___results___children'
  | 'results___questionnaire___results___title'
  | 'results___questionnaire___results___questionnaire'
  | 'results___questionnaire___results___spaceId'
  | 'results___questionnaire___results___contentful_id'
  | 'results___questionnaire___results___createdAt'
  | 'results___questionnaire___results___updatedAt'
  | 'results___questionnaire___results___node_locale'
  | 'results___questionnaire___description___id'
  | 'results___questionnaire___description___children'
  | 'results___questionnaire___description___content'
  | 'results___questionnaire___description___nodeType'
  | 'results___questionnaire___description___description'
  | 'results___questionnaire___description___json'
  | 'results___questionnaire___spaceId'
  | 'results___questionnaire___contentful_id'
  | 'results___questionnaire___createdAt'
  | 'results___questionnaire___updatedAt'
  | 'results___questionnaire___sys___revision'
  | 'results___questionnaire___node_locale'
  | 'results___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___id'
  | 'results___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children'
  | 'results___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content'
  | 'results___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___nodeType'
  | 'results___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___description'
  | 'results___questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___json'
  | 'results___scoreRange___id'
  | 'results___scoreRange___parent___id'
  | 'results___scoreRange___parent___children'
  | 'results___scoreRange___children'
  | 'results___scoreRange___children___id'
  | 'results___scoreRange___children___children'
  | 'results___scoreRange___internal___content'
  | 'results___scoreRange___internal___contentDigest'
  | 'results___scoreRange___internal___description'
  | 'results___scoreRange___internal___fieldOwners'
  | 'results___scoreRange___internal___ignoreType'
  | 'results___scoreRange___internal___mediaType'
  | 'results___scoreRange___internal___owner'
  | 'results___scoreRange___internal___type'
  | 'results___scoreRange___lowEnd'
  | 'results___scoreRange___highEnd'
  | 'results___scoreRange___childContentfulResultScoreRangeJsonNodeJson___id'
  | 'results___scoreRange___childContentfulResultScoreRangeJsonNodeJson___children'
  | 'results___scoreRange___childContentfulResultScoreRangeJsonNodeJson___lowEnd'
  | 'results___scoreRange___childContentfulResultScoreRangeJsonNodeJson___highEnd'
  | 'results___description___id'
  | 'results___description___parent___id'
  | 'results___description___parent___children'
  | 'results___description___children'
  | 'results___description___children___id'
  | 'results___description___children___children'
  | 'results___description___internal___content'
  | 'results___description___internal___contentDigest'
  | 'results___description___internal___description'
  | 'results___description___internal___fieldOwners'
  | 'results___description___internal___ignoreType'
  | 'results___description___internal___mediaType'
  | 'results___description___internal___owner'
  | 'results___description___internal___type'
  | 'results___description___content'
  | 'results___description___content___content'
  | 'results___description___content___nodeType'
  | 'results___description___nodeType'
  | 'results___description___description'
  | 'results___description___fields___excerpt'
  | 'results___description___json'
  | 'results___details___id'
  | 'results___details___parent___id'
  | 'results___details___parent___children'
  | 'results___details___children'
  | 'results___details___children___id'
  | 'results___details___children___children'
  | 'results___details___internal___content'
  | 'results___details___internal___contentDigest'
  | 'results___details___internal___description'
  | 'results___details___internal___fieldOwners'
  | 'results___details___internal___ignoreType'
  | 'results___details___internal___mediaType'
  | 'results___details___internal___owner'
  | 'results___details___internal___type'
  | 'results___details___content'
  | 'results___details___content___content'
  | 'results___details___content___nodeType'
  | 'results___details___nodeType'
  | 'results___details___details'
  | 'results___details___fields___excerpt'
  | 'results___details___json'
  | 'results___spaceId'
  | 'results___contentful_id'
  | 'results___createdAt'
  | 'results___updatedAt'
  | 'results___sys___revision'
  | 'results___node_locale'
  | 'results___childContentfulResultScoreRangeJsonNode___id'
  | 'results___childContentfulResultScoreRangeJsonNode___parent___id'
  | 'results___childContentfulResultScoreRangeJsonNode___parent___children'
  | 'results___childContentfulResultScoreRangeJsonNode___children'
  | 'results___childContentfulResultScoreRangeJsonNode___children___id'
  | 'results___childContentfulResultScoreRangeJsonNode___children___children'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___content'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___contentDigest'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___description'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___fieldOwners'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___ignoreType'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___mediaType'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___owner'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___type'
  | 'results___childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'results___childContentfulResultScoreRangeJsonNode___highEnd'
  | 'results___childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___id'
  | 'results___childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___children'
  | 'results___childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___lowEnd'
  | 'results___childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___highEnd'
  | 'results___childContentfulResultDescriptionRichTextNode___id'
  | 'results___childContentfulResultDescriptionRichTextNode___parent___id'
  | 'results___childContentfulResultDescriptionRichTextNode___parent___children'
  | 'results___childContentfulResultDescriptionRichTextNode___children'
  | 'results___childContentfulResultDescriptionRichTextNode___children___id'
  | 'results___childContentfulResultDescriptionRichTextNode___children___children'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___content'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___contentDigest'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___description'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___fieldOwners'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___ignoreType'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___mediaType'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___owner'
  | 'results___childContentfulResultDescriptionRichTextNode___internal___type'
  | 'results___childContentfulResultDescriptionRichTextNode___content'
  | 'results___childContentfulResultDescriptionRichTextNode___content___content'
  | 'results___childContentfulResultDescriptionRichTextNode___content___nodeType'
  | 'results___childContentfulResultDescriptionRichTextNode___nodeType'
  | 'results___childContentfulResultDescriptionRichTextNode___description'
  | 'results___childContentfulResultDescriptionRichTextNode___fields___excerpt'
  | 'results___childContentfulResultDescriptionRichTextNode___json'
  | 'results___childContentfulResultDetailsRichTextNode___id'
  | 'results___childContentfulResultDetailsRichTextNode___parent___id'
  | 'results___childContentfulResultDetailsRichTextNode___parent___children'
  | 'results___childContentfulResultDetailsRichTextNode___children'
  | 'results___childContentfulResultDetailsRichTextNode___children___id'
  | 'results___childContentfulResultDetailsRichTextNode___children___children'
  | 'results___childContentfulResultDetailsRichTextNode___internal___content'
  | 'results___childContentfulResultDetailsRichTextNode___internal___contentDigest'
  | 'results___childContentfulResultDetailsRichTextNode___internal___description'
  | 'results___childContentfulResultDetailsRichTextNode___internal___fieldOwners'
  | 'results___childContentfulResultDetailsRichTextNode___internal___ignoreType'
  | 'results___childContentfulResultDetailsRichTextNode___internal___mediaType'
  | 'results___childContentfulResultDetailsRichTextNode___internal___owner'
  | 'results___childContentfulResultDetailsRichTextNode___internal___type'
  | 'results___childContentfulResultDetailsRichTextNode___content'
  | 'results___childContentfulResultDetailsRichTextNode___content___content'
  | 'results___childContentfulResultDetailsRichTextNode___content___nodeType'
  | 'results___childContentfulResultDetailsRichTextNode___nodeType'
  | 'results___childContentfulResultDetailsRichTextNode___details'
  | 'results___childContentfulResultDetailsRichTextNode___fields___excerpt'
  | 'results___childContentfulResultDetailsRichTextNode___json'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___content'
  | 'description___content___content'
  | 'description___content___content___value'
  | 'description___content___content___nodeType'
  | 'description___content___nodeType'
  | 'description___nodeType'
  | 'description___description'
  | 'description___fields___readingTime___text'
  | 'description___fields___readingTime___minutes'
  | 'description___fields___readingTime___time'
  | 'description___fields___readingTime___words'
  | 'description___fields___excerpt'
  | 'description___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___parent___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___parent___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___children___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___children___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___content'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___contentDigest'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___description'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___ignoreType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___mediaType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___owner'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___parent___internal___type'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___parent___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___parent___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___children___id'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___children___children'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___content'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___contentDigest'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___description'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___fieldOwners'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___ignoreType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___mediaType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___owner'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___children___internal___type'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___content'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___contentDigest'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___description'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___fieldOwners'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___ignoreType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___mediaType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___owner'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___internal___type'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___content'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___content___content'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___content___content___value'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___content___content___nodeType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___content___nodeType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___nodeType'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___description'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___fields___readingTime___text'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___fields___readingTime___minutes'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___fields___readingTime___time'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___fields___readingTime___words'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___fields___excerpt'
  | 'childContentfulQuestionnaireDescriptionRichTextNode___json';

export type ContentfulQuestionnaireFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  questions?: Maybe<ContentfulQuestionFilterListInput>;
  results?: Maybe<ContentfulResultFilterListInput>;
  description?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionnaireSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulQuestionnaireDescriptionRichTextNode?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFilterInput>;
};

export type ContentfulQuestionnaireFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionnaireFilterInput>;
};

export type ContentfulQuestionnaireGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionnaireEdge>;
  nodes: Array<ContentfulQuestionnaire>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionnaireFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionnaireSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQuestionnaireSysContentType>;
};

export type ContentfulQuestionnaireSysContentType = {
  sys?: Maybe<ContentfulQuestionnaireSysContentTypeSys>;
};

export type ContentfulQuestionnaireSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQuestionnaireSysContentTypeSysFilterInput>;
};

export type ContentfulQuestionnaireSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionnaireSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQuestionnaireSysContentTypeFilterInput>;
};

export type ContentfulQuestionQuestionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  question?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulQuestionQuestionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionQuestionTextNodeEdge>;
  nodes: Array<ContentfulQuestionQuestionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionQuestionTextNodeGroupConnection>;
};


export type ContentfulQuestionQuestionTextNodeConnectionDistinctArgs = {
  field: ContentfulQuestionQuestionTextNodeFieldsEnum;
};


export type ContentfulQuestionQuestionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionQuestionTextNodeFieldsEnum;
};

export type ContentfulQuestionQuestionTextNodeEdge = {
  next?: Maybe<ContentfulQuestionQuestionTextNode>;
  node: ContentfulQuestionQuestionTextNode;
  previous?: Maybe<ContentfulQuestionQuestionTextNode>;
};

export type ContentfulQuestionQuestionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'question'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___slug'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___authorSlug'
  | 'childMarkdownRemark___frontmatter___author'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___absolutePath'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___relativePath'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___extension'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___size'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___prettySize'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___modifiedTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___accessTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___changeTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___birthTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___root'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___dir'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___base'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ext'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___name'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___dev'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___mode'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___nlink'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___uid'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___gid'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___rdev'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ino'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___atimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___mtimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ctimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___atime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___mtime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ctime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___birthtime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___blksize'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___blocks'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___publicURL'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___id'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___children'
  | 'childMarkdownRemark___frontmatter___canonical'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulQuestionQuestionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  question?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulQuestionQuestionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionQuestionTextNodeEdge>;
  nodes: Array<ContentfulQuestionQuestionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionQuestionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionQuestionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQuestionSysContentType>;
};

export type ContentfulQuestionSysContentType = {
  sys?: Maybe<ContentfulQuestionSysContentTypeSys>;
};

export type ContentfulQuestionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQuestionSysContentTypeSysFilterInput>;
};

export type ContentfulQuestionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQuestionSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResult = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  questionnaire?: Maybe<Array<Maybe<ContentfulQuestionnaire>>>;
  scoreRange?: Maybe<ContentfulResultScoreRangeJsonNode>;
  description?: Maybe<ContentfulResultDescriptionRichTextNode>;
  details?: Maybe<ContentfulResultDetailsRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulResultSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNode>;
  childContentfulResultDescriptionRichTextNode?: Maybe<ContentfulResultDescriptionRichTextNode>;
  childContentfulResultDetailsRichTextNode?: Maybe<ContentfulResultDetailsRichTextNode>;
};


export type ContentfulResultCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulResultUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulResultConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultEdge>;
  nodes: Array<ContentfulResult>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultGroupConnection>;
};


export type ContentfulResultConnectionDistinctArgs = {
  field: ContentfulResultFieldsEnum;
};


export type ContentfulResultConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultFieldsEnum;
};

export type ContentfulResultDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulResultDescriptionRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulResultDescriptionRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulResultDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulResultDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulResultDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulResultDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulResultDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulResultDescriptionRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulResultDescriptionRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulResultDescriptionRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulResultDescriptionRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulResultDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulResultDescriptionRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulResultDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulResultDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulResultDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulResultDescriptionRichTextNode>;
  node: ContentfulResultDescriptionRichTextNode;
  previous?: Maybe<ContentfulResultDescriptionRichTextNode>;
};

export type ContentfulResultDescriptionRichTextNodeFields = {
  readingTime?: Maybe<ContentfulResultDescriptionRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulResultDescriptionRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'description'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulResultDescriptionRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulResultDescriptionRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDescriptionRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulResultDescriptionRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulResultDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulResultDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulResultDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulResultDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulResultDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultDetailsRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulResultDetailsRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulResultDetailsRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulResultDetailsRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultDetailsRichTextNodeEdge>;
  nodes: Array<ContentfulResultDetailsRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultDetailsRichTextNodeGroupConnection>;
};


export type ContentfulResultDetailsRichTextNodeConnectionDistinctArgs = {
  field: ContentfulResultDetailsRichTextNodeFieldsEnum;
};


export type ContentfulResultDetailsRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultDetailsRichTextNodeFieldsEnum;
};

export type ContentfulResultDetailsRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulResultDetailsRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulResultDetailsRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulResultDetailsRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDetailsRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulResultDetailsRichTextNodeContentContentFilterInput>;
};

export type ContentfulResultDetailsRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulResultDetailsRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDetailsRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulResultDetailsRichTextNodeContentFilterInput>;
};

export type ContentfulResultDetailsRichTextNodeEdge = {
  next?: Maybe<ContentfulResultDetailsRichTextNode>;
  node: ContentfulResultDetailsRichTextNode;
  previous?: Maybe<ContentfulResultDetailsRichTextNode>;
};

export type ContentfulResultDetailsRichTextNodeFields = {
  readingTime?: Maybe<ContentfulResultDetailsRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulResultDetailsRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'details'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulResultDetailsRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulResultDetailsRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDetailsRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulResultDetailsRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulResultDetailsRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulResultDetailsRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulResultDetailsRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulResultDetailsRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultDetailsRichTextNodeEdge>;
  nodes: Array<ContentfulResultDetailsRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultDetailsRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultDetailsRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultEdge = {
  next?: Maybe<ContentfulResult>;
  node: ContentfulResult;
  previous?: Maybe<ContentfulResult>;
};

export type ContentfulResultFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'questionnaire'
  | 'questionnaire___id'
  | 'questionnaire___parent___id'
  | 'questionnaire___parent___parent___id'
  | 'questionnaire___parent___parent___children'
  | 'questionnaire___parent___children'
  | 'questionnaire___parent___children___id'
  | 'questionnaire___parent___children___children'
  | 'questionnaire___parent___internal___content'
  | 'questionnaire___parent___internal___contentDigest'
  | 'questionnaire___parent___internal___description'
  | 'questionnaire___parent___internal___fieldOwners'
  | 'questionnaire___parent___internal___ignoreType'
  | 'questionnaire___parent___internal___mediaType'
  | 'questionnaire___parent___internal___owner'
  | 'questionnaire___parent___internal___type'
  | 'questionnaire___children'
  | 'questionnaire___children___id'
  | 'questionnaire___children___parent___id'
  | 'questionnaire___children___parent___children'
  | 'questionnaire___children___children'
  | 'questionnaire___children___children___id'
  | 'questionnaire___children___children___children'
  | 'questionnaire___children___internal___content'
  | 'questionnaire___children___internal___contentDigest'
  | 'questionnaire___children___internal___description'
  | 'questionnaire___children___internal___fieldOwners'
  | 'questionnaire___children___internal___ignoreType'
  | 'questionnaire___children___internal___mediaType'
  | 'questionnaire___children___internal___owner'
  | 'questionnaire___children___internal___type'
  | 'questionnaire___internal___content'
  | 'questionnaire___internal___contentDigest'
  | 'questionnaire___internal___description'
  | 'questionnaire___internal___fieldOwners'
  | 'questionnaire___internal___ignoreType'
  | 'questionnaire___internal___mediaType'
  | 'questionnaire___internal___owner'
  | 'questionnaire___internal___type'
  | 'questionnaire___title'
  | 'questionnaire___slug'
  | 'questionnaire___questions'
  | 'questionnaire___questions___id'
  | 'questionnaire___questions___parent___id'
  | 'questionnaire___questions___parent___children'
  | 'questionnaire___questions___children'
  | 'questionnaire___questions___children___id'
  | 'questionnaire___questions___children___children'
  | 'questionnaire___questions___internal___content'
  | 'questionnaire___questions___internal___contentDigest'
  | 'questionnaire___questions___internal___description'
  | 'questionnaire___questions___internal___fieldOwners'
  | 'questionnaire___questions___internal___ignoreType'
  | 'questionnaire___questions___internal___mediaType'
  | 'questionnaire___questions___internal___owner'
  | 'questionnaire___questions___internal___type'
  | 'questionnaire___questions___title'
  | 'questionnaire___questions___type'
  | 'questionnaire___questions___answers'
  | 'questionnaire___questions___answers___id'
  | 'questionnaire___questions___answers___children'
  | 'questionnaire___questions___answers___title'
  | 'questionnaire___questions___answers___score'
  | 'questionnaire___questions___answers___question'
  | 'questionnaire___questions___answers___spaceId'
  | 'questionnaire___questions___answers___contentful_id'
  | 'questionnaire___questions___answers___createdAt'
  | 'questionnaire___questions___answers___updatedAt'
  | 'questionnaire___questions___answers___node_locale'
  | 'questionnaire___questions___questionnaire'
  | 'questionnaire___questions___questionnaire___id'
  | 'questionnaire___questions___questionnaire___children'
  | 'questionnaire___questions___questionnaire___title'
  | 'questionnaire___questions___questionnaire___slug'
  | 'questionnaire___questions___questionnaire___questions'
  | 'questionnaire___questions___questionnaire___results'
  | 'questionnaire___questions___questionnaire___spaceId'
  | 'questionnaire___questions___questionnaire___contentful_id'
  | 'questionnaire___questions___questionnaire___createdAt'
  | 'questionnaire___questions___questionnaire___updatedAt'
  | 'questionnaire___questions___questionnaire___node_locale'
  | 'questionnaire___questions___question___id'
  | 'questionnaire___questions___question___children'
  | 'questionnaire___questions___question___question'
  | 'questionnaire___questions___spaceId'
  | 'questionnaire___questions___contentful_id'
  | 'questionnaire___questions___createdAt'
  | 'questionnaire___questions___updatedAt'
  | 'questionnaire___questions___sys___revision'
  | 'questionnaire___questions___node_locale'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___id'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___children'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___question'
  | 'questionnaire___results'
  | 'questionnaire___results___id'
  | 'questionnaire___results___parent___id'
  | 'questionnaire___results___parent___children'
  | 'questionnaire___results___children'
  | 'questionnaire___results___children___id'
  | 'questionnaire___results___children___children'
  | 'questionnaire___results___internal___content'
  | 'questionnaire___results___internal___contentDigest'
  | 'questionnaire___results___internal___description'
  | 'questionnaire___results___internal___fieldOwners'
  | 'questionnaire___results___internal___ignoreType'
  | 'questionnaire___results___internal___mediaType'
  | 'questionnaire___results___internal___owner'
  | 'questionnaire___results___internal___type'
  | 'questionnaire___results___title'
  | 'questionnaire___results___questionnaire'
  | 'questionnaire___results___questionnaire___id'
  | 'questionnaire___results___questionnaire___children'
  | 'questionnaire___results___questionnaire___title'
  | 'questionnaire___results___questionnaire___slug'
  | 'questionnaire___results___questionnaire___questions'
  | 'questionnaire___results___questionnaire___results'
  | 'questionnaire___results___questionnaire___spaceId'
  | 'questionnaire___results___questionnaire___contentful_id'
  | 'questionnaire___results___questionnaire___createdAt'
  | 'questionnaire___results___questionnaire___updatedAt'
  | 'questionnaire___results___questionnaire___node_locale'
  | 'questionnaire___results___scoreRange___id'
  | 'questionnaire___results___scoreRange___children'
  | 'questionnaire___results___scoreRange___lowEnd'
  | 'questionnaire___results___scoreRange___highEnd'
  | 'questionnaire___results___description___id'
  | 'questionnaire___results___description___children'
  | 'questionnaire___results___description___content'
  | 'questionnaire___results___description___nodeType'
  | 'questionnaire___results___description___description'
  | 'questionnaire___results___description___json'
  | 'questionnaire___results___details___id'
  | 'questionnaire___results___details___children'
  | 'questionnaire___results___details___content'
  | 'questionnaire___results___details___nodeType'
  | 'questionnaire___results___details___details'
  | 'questionnaire___results___details___json'
  | 'questionnaire___results___spaceId'
  | 'questionnaire___results___contentful_id'
  | 'questionnaire___results___createdAt'
  | 'questionnaire___results___updatedAt'
  | 'questionnaire___results___sys___revision'
  | 'questionnaire___results___node_locale'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___id'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___children'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___highEnd'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___id'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___children'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___content'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___nodeType'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___description'
  | 'questionnaire___results___childContentfulResultDescriptionRichTextNode___json'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___id'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___children'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___content'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___nodeType'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___details'
  | 'questionnaire___results___childContentfulResultDetailsRichTextNode___json'
  | 'questionnaire___description___id'
  | 'questionnaire___description___parent___id'
  | 'questionnaire___description___parent___children'
  | 'questionnaire___description___children'
  | 'questionnaire___description___children___id'
  | 'questionnaire___description___children___children'
  | 'questionnaire___description___internal___content'
  | 'questionnaire___description___internal___contentDigest'
  | 'questionnaire___description___internal___description'
  | 'questionnaire___description___internal___fieldOwners'
  | 'questionnaire___description___internal___ignoreType'
  | 'questionnaire___description___internal___mediaType'
  | 'questionnaire___description___internal___owner'
  | 'questionnaire___description___internal___type'
  | 'questionnaire___description___content'
  | 'questionnaire___description___content___content'
  | 'questionnaire___description___content___nodeType'
  | 'questionnaire___description___nodeType'
  | 'questionnaire___description___description'
  | 'questionnaire___description___fields___excerpt'
  | 'questionnaire___description___json'
  | 'questionnaire___spaceId'
  | 'questionnaire___contentful_id'
  | 'questionnaire___createdAt'
  | 'questionnaire___updatedAt'
  | 'questionnaire___sys___revision'
  | 'questionnaire___node_locale'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___id'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___parent___id'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___parent___children'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children___id'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___children___children'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___content'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___contentDigest'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___description'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___fieldOwners'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___ignoreType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___mediaType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___owner'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___internal___type'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content___content'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___content___nodeType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___nodeType'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___description'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___fields___excerpt'
  | 'questionnaire___childContentfulQuestionnaireDescriptionRichTextNode___json'
  | 'scoreRange___id'
  | 'scoreRange___parent___id'
  | 'scoreRange___parent___parent___id'
  | 'scoreRange___parent___parent___children'
  | 'scoreRange___parent___children'
  | 'scoreRange___parent___children___id'
  | 'scoreRange___parent___children___children'
  | 'scoreRange___parent___internal___content'
  | 'scoreRange___parent___internal___contentDigest'
  | 'scoreRange___parent___internal___description'
  | 'scoreRange___parent___internal___fieldOwners'
  | 'scoreRange___parent___internal___ignoreType'
  | 'scoreRange___parent___internal___mediaType'
  | 'scoreRange___parent___internal___owner'
  | 'scoreRange___parent___internal___type'
  | 'scoreRange___children'
  | 'scoreRange___children___id'
  | 'scoreRange___children___parent___id'
  | 'scoreRange___children___parent___children'
  | 'scoreRange___children___children'
  | 'scoreRange___children___children___id'
  | 'scoreRange___children___children___children'
  | 'scoreRange___children___internal___content'
  | 'scoreRange___children___internal___contentDigest'
  | 'scoreRange___children___internal___description'
  | 'scoreRange___children___internal___fieldOwners'
  | 'scoreRange___children___internal___ignoreType'
  | 'scoreRange___children___internal___mediaType'
  | 'scoreRange___children___internal___owner'
  | 'scoreRange___children___internal___type'
  | 'scoreRange___internal___content'
  | 'scoreRange___internal___contentDigest'
  | 'scoreRange___internal___description'
  | 'scoreRange___internal___fieldOwners'
  | 'scoreRange___internal___ignoreType'
  | 'scoreRange___internal___mediaType'
  | 'scoreRange___internal___owner'
  | 'scoreRange___internal___type'
  | 'scoreRange___lowEnd'
  | 'scoreRange___highEnd'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___id'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___parent___id'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___parent___children'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___children'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___children___id'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___children___children'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___content'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___contentDigest'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___description'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___fieldOwners'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___ignoreType'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___mediaType'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___owner'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___internal___type'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___lowEnd'
  | 'scoreRange___childContentfulResultScoreRangeJsonNodeJson___highEnd'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___content'
  | 'description___content___content'
  | 'description___content___content___value'
  | 'description___content___content___nodeType'
  | 'description___content___nodeType'
  | 'description___nodeType'
  | 'description___description'
  | 'description___fields___readingTime___text'
  | 'description___fields___readingTime___minutes'
  | 'description___fields___readingTime___time'
  | 'description___fields___readingTime___words'
  | 'description___fields___excerpt'
  | 'description___json'
  | 'details___id'
  | 'details___parent___id'
  | 'details___parent___parent___id'
  | 'details___parent___parent___children'
  | 'details___parent___children'
  | 'details___parent___children___id'
  | 'details___parent___children___children'
  | 'details___parent___internal___content'
  | 'details___parent___internal___contentDigest'
  | 'details___parent___internal___description'
  | 'details___parent___internal___fieldOwners'
  | 'details___parent___internal___ignoreType'
  | 'details___parent___internal___mediaType'
  | 'details___parent___internal___owner'
  | 'details___parent___internal___type'
  | 'details___children'
  | 'details___children___id'
  | 'details___children___parent___id'
  | 'details___children___parent___children'
  | 'details___children___children'
  | 'details___children___children___id'
  | 'details___children___children___children'
  | 'details___children___internal___content'
  | 'details___children___internal___contentDigest'
  | 'details___children___internal___description'
  | 'details___children___internal___fieldOwners'
  | 'details___children___internal___ignoreType'
  | 'details___children___internal___mediaType'
  | 'details___children___internal___owner'
  | 'details___children___internal___type'
  | 'details___internal___content'
  | 'details___internal___contentDigest'
  | 'details___internal___description'
  | 'details___internal___fieldOwners'
  | 'details___internal___ignoreType'
  | 'details___internal___mediaType'
  | 'details___internal___owner'
  | 'details___internal___type'
  | 'details___content'
  | 'details___content___content'
  | 'details___content___content___value'
  | 'details___content___content___nodeType'
  | 'details___content___nodeType'
  | 'details___nodeType'
  | 'details___details'
  | 'details___fields___readingTime___text'
  | 'details___fields___readingTime___minutes'
  | 'details___fields___readingTime___time'
  | 'details___fields___readingTime___words'
  | 'details___fields___excerpt'
  | 'details___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulResultScoreRangeJsonNode___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___parent___children___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___children___children'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___children'
  | 'childContentfulResultScoreRangeJsonNode___children___id'
  | 'childContentfulResultScoreRangeJsonNode___children___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___children___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___children___children'
  | 'childContentfulResultScoreRangeJsonNode___children___children___id'
  | 'childContentfulResultScoreRangeJsonNode___children___children___children'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'childContentfulResultScoreRangeJsonNode___highEnd'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___id'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___children'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___children___id'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___children___children'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___lowEnd'
  | 'childContentfulResultScoreRangeJsonNode___childContentfulResultScoreRangeJsonNodeJson___highEnd'
  | 'childContentfulResultDescriptionRichTextNode___id'
  | 'childContentfulResultDescriptionRichTextNode___parent___id'
  | 'childContentfulResultDescriptionRichTextNode___parent___parent___id'
  | 'childContentfulResultDescriptionRichTextNode___parent___parent___children'
  | 'childContentfulResultDescriptionRichTextNode___parent___children'
  | 'childContentfulResultDescriptionRichTextNode___parent___children___id'
  | 'childContentfulResultDescriptionRichTextNode___parent___children___children'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___content'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___contentDigest'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___description'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___ignoreType'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___mediaType'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___owner'
  | 'childContentfulResultDescriptionRichTextNode___parent___internal___type'
  | 'childContentfulResultDescriptionRichTextNode___children'
  | 'childContentfulResultDescriptionRichTextNode___children___id'
  | 'childContentfulResultDescriptionRichTextNode___children___parent___id'
  | 'childContentfulResultDescriptionRichTextNode___children___parent___children'
  | 'childContentfulResultDescriptionRichTextNode___children___children'
  | 'childContentfulResultDescriptionRichTextNode___children___children___id'
  | 'childContentfulResultDescriptionRichTextNode___children___children___children'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___content'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___contentDigest'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___description'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___fieldOwners'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___ignoreType'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___mediaType'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___owner'
  | 'childContentfulResultDescriptionRichTextNode___children___internal___type'
  | 'childContentfulResultDescriptionRichTextNode___internal___content'
  | 'childContentfulResultDescriptionRichTextNode___internal___contentDigest'
  | 'childContentfulResultDescriptionRichTextNode___internal___description'
  | 'childContentfulResultDescriptionRichTextNode___internal___fieldOwners'
  | 'childContentfulResultDescriptionRichTextNode___internal___ignoreType'
  | 'childContentfulResultDescriptionRichTextNode___internal___mediaType'
  | 'childContentfulResultDescriptionRichTextNode___internal___owner'
  | 'childContentfulResultDescriptionRichTextNode___internal___type'
  | 'childContentfulResultDescriptionRichTextNode___content'
  | 'childContentfulResultDescriptionRichTextNode___content___content'
  | 'childContentfulResultDescriptionRichTextNode___content___content___value'
  | 'childContentfulResultDescriptionRichTextNode___content___content___nodeType'
  | 'childContentfulResultDescriptionRichTextNode___content___nodeType'
  | 'childContentfulResultDescriptionRichTextNode___nodeType'
  | 'childContentfulResultDescriptionRichTextNode___description'
  | 'childContentfulResultDescriptionRichTextNode___fields___readingTime___text'
  | 'childContentfulResultDescriptionRichTextNode___fields___readingTime___minutes'
  | 'childContentfulResultDescriptionRichTextNode___fields___readingTime___time'
  | 'childContentfulResultDescriptionRichTextNode___fields___readingTime___words'
  | 'childContentfulResultDescriptionRichTextNode___fields___excerpt'
  | 'childContentfulResultDescriptionRichTextNode___json'
  | 'childContentfulResultDetailsRichTextNode___id'
  | 'childContentfulResultDetailsRichTextNode___parent___id'
  | 'childContentfulResultDetailsRichTextNode___parent___parent___id'
  | 'childContentfulResultDetailsRichTextNode___parent___parent___children'
  | 'childContentfulResultDetailsRichTextNode___parent___children'
  | 'childContentfulResultDetailsRichTextNode___parent___children___id'
  | 'childContentfulResultDetailsRichTextNode___parent___children___children'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___content'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___contentDigest'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___description'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___ignoreType'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___mediaType'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___owner'
  | 'childContentfulResultDetailsRichTextNode___parent___internal___type'
  | 'childContentfulResultDetailsRichTextNode___children'
  | 'childContentfulResultDetailsRichTextNode___children___id'
  | 'childContentfulResultDetailsRichTextNode___children___parent___id'
  | 'childContentfulResultDetailsRichTextNode___children___parent___children'
  | 'childContentfulResultDetailsRichTextNode___children___children'
  | 'childContentfulResultDetailsRichTextNode___children___children___id'
  | 'childContentfulResultDetailsRichTextNode___children___children___children'
  | 'childContentfulResultDetailsRichTextNode___children___internal___content'
  | 'childContentfulResultDetailsRichTextNode___children___internal___contentDigest'
  | 'childContentfulResultDetailsRichTextNode___children___internal___description'
  | 'childContentfulResultDetailsRichTextNode___children___internal___fieldOwners'
  | 'childContentfulResultDetailsRichTextNode___children___internal___ignoreType'
  | 'childContentfulResultDetailsRichTextNode___children___internal___mediaType'
  | 'childContentfulResultDetailsRichTextNode___children___internal___owner'
  | 'childContentfulResultDetailsRichTextNode___children___internal___type'
  | 'childContentfulResultDetailsRichTextNode___internal___content'
  | 'childContentfulResultDetailsRichTextNode___internal___contentDigest'
  | 'childContentfulResultDetailsRichTextNode___internal___description'
  | 'childContentfulResultDetailsRichTextNode___internal___fieldOwners'
  | 'childContentfulResultDetailsRichTextNode___internal___ignoreType'
  | 'childContentfulResultDetailsRichTextNode___internal___mediaType'
  | 'childContentfulResultDetailsRichTextNode___internal___owner'
  | 'childContentfulResultDetailsRichTextNode___internal___type'
  | 'childContentfulResultDetailsRichTextNode___content'
  | 'childContentfulResultDetailsRichTextNode___content___content'
  | 'childContentfulResultDetailsRichTextNode___content___content___value'
  | 'childContentfulResultDetailsRichTextNode___content___content___nodeType'
  | 'childContentfulResultDetailsRichTextNode___content___nodeType'
  | 'childContentfulResultDetailsRichTextNode___nodeType'
  | 'childContentfulResultDetailsRichTextNode___details'
  | 'childContentfulResultDetailsRichTextNode___fields___readingTime___text'
  | 'childContentfulResultDetailsRichTextNode___fields___readingTime___minutes'
  | 'childContentfulResultDetailsRichTextNode___fields___readingTime___time'
  | 'childContentfulResultDetailsRichTextNode___fields___readingTime___words'
  | 'childContentfulResultDetailsRichTextNode___fields___excerpt'
  | 'childContentfulResultDetailsRichTextNode___json';

export type ContentfulResultFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  scoreRange?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  description?: Maybe<ContentfulResultDescriptionRichTextNodeFilterInput>;
  details?: Maybe<ContentfulResultDetailsRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulResultSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  childContentfulResultDescriptionRichTextNode?: Maybe<ContentfulResultDescriptionRichTextNodeFilterInput>;
  childContentfulResultDetailsRichTextNode?: Maybe<ContentfulResultDetailsRichTextNodeFilterInput>;
};

export type ContentfulResultFilterListInput = {
  elemMatch?: Maybe<ContentfulResultFilterInput>;
};

export type ContentfulResultGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultEdge>;
  nodes: Array<ContentfulResult>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultScoreRangeJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  lowEnd?: Maybe<Scalars['Int']>;
  highEnd?: Maybe<Scalars['Int']>;
  childContentfulResultScoreRangeJsonNodeJson?: Maybe<ContentfulResultScoreRangeJsonNodeJson>;
};

export type ContentfulResultScoreRangeJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultScoreRangeJsonNodeEdge>;
  nodes: Array<ContentfulResultScoreRangeJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultScoreRangeJsonNodeGroupConnection>;
};


export type ContentfulResultScoreRangeJsonNodeConnectionDistinctArgs = {
  field: ContentfulResultScoreRangeJsonNodeFieldsEnum;
};


export type ContentfulResultScoreRangeJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultScoreRangeJsonNodeFieldsEnum;
};

export type ContentfulResultScoreRangeJsonNodeEdge = {
  next?: Maybe<ContentfulResultScoreRangeJsonNode>;
  node: ContentfulResultScoreRangeJsonNode;
  previous?: Maybe<ContentfulResultScoreRangeJsonNode>;
};

export type ContentfulResultScoreRangeJsonNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'lowEnd'
  | 'highEnd'
  | 'childContentfulResultScoreRangeJsonNodeJson___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___parent___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___parent___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___children___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___children___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___content'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___description'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___owner'
  | 'childContentfulResultScoreRangeJsonNodeJson___parent___internal___type'
  | 'childContentfulResultScoreRangeJsonNodeJson___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___parent___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___parent___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___children___id'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___children___children'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___content'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___description'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___owner'
  | 'childContentfulResultScoreRangeJsonNodeJson___children___internal___type'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___content'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___description'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___owner'
  | 'childContentfulResultScoreRangeJsonNodeJson___internal___type'
  | 'childContentfulResultScoreRangeJsonNodeJson___lowEnd'
  | 'childContentfulResultScoreRangeJsonNodeJson___highEnd';

export type ContentfulResultScoreRangeJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lowEnd?: Maybe<IntQueryOperatorInput>;
  highEnd?: Maybe<IntQueryOperatorInput>;
  childContentfulResultScoreRangeJsonNodeJson?: Maybe<ContentfulResultScoreRangeJsonNodeJsonFilterInput>;
};

export type ContentfulResultScoreRangeJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultScoreRangeJsonNodeEdge>;
  nodes: Array<ContentfulResultScoreRangeJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultScoreRangeJsonNodeJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  lowEnd?: Maybe<Scalars['Int']>;
  highEnd?: Maybe<Scalars['Int']>;
};

export type ContentfulResultScoreRangeJsonNodeJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultScoreRangeJsonNodeJsonEdge>;
  nodes: Array<ContentfulResultScoreRangeJsonNodeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultScoreRangeJsonNodeJsonGroupConnection>;
};


export type ContentfulResultScoreRangeJsonNodeJsonConnectionDistinctArgs = {
  field: ContentfulResultScoreRangeJsonNodeJsonFieldsEnum;
};


export type ContentfulResultScoreRangeJsonNodeJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultScoreRangeJsonNodeJsonFieldsEnum;
};

export type ContentfulResultScoreRangeJsonNodeJsonEdge = {
  next?: Maybe<ContentfulResultScoreRangeJsonNodeJson>;
  node: ContentfulResultScoreRangeJsonNodeJson;
  previous?: Maybe<ContentfulResultScoreRangeJsonNodeJson>;
};

export type ContentfulResultScoreRangeJsonNodeJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'lowEnd'
  | 'highEnd';

export type ContentfulResultScoreRangeJsonNodeJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lowEnd?: Maybe<IntQueryOperatorInput>;
  highEnd?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulResultScoreRangeJsonNodeJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultScoreRangeJsonNodeJsonEdge>;
  nodes: Array<ContentfulResultScoreRangeJsonNodeJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultScoreRangeJsonNodeJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultScoreRangeJsonNodeJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultScoreRangeJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultScoreRangeJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulResultSysContentType>;
};

export type ContentfulResultSysContentType = {
  sys?: Maybe<ContentfulResultSysContentTypeSys>;
};

export type ContentfulResultSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulResultSysContentTypeSysFilterInput>;
};

export type ContentfulResultSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulResultSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulResultSysContentTypeFilterInput>;
};

export type ContentfulSection = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  lesson?: Maybe<Array<Maybe<ContentfulLesson>>>;
  description?: Maybe<ContentfulSectionDescriptionRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSectionSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulSectionDescriptionRichTextNode?: Maybe<ContentfulSectionDescriptionRichTextNode>;
};


export type ContentfulSectionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSectionGroupConnection>;
};


export type ContentfulSectionConnectionDistinctArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSectionFieldsEnum;
};

export type ContentfulSectionDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulSectionDescriptionRichTextNodeContent>>>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulSectionDescriptionRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulSectionDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulSectionDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSectionDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulSectionDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulSectionDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulSectionDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSectionDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulSectionDescriptionRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulSectionDescriptionRichTextNodeContentContent>>>;
};

export type ContentfulSectionDescriptionRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulSectionDescriptionRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulSectionDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulSectionDescriptionRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulSectionDescriptionRichTextNodeContentContentFilterListInput>;
};

export type ContentfulSectionDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulSectionDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulSectionDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulSectionDescriptionRichTextNode>;
  node: ContentfulSectionDescriptionRichTextNode;
  previous?: Maybe<ContentfulSectionDescriptionRichTextNode>;
};

export type ContentfulSectionDescriptionRichTextNodeFields = {
  readingTime?: Maybe<ContentfulSectionDescriptionRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulSectionDescriptionRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'description'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulSectionDescriptionRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulSectionDescriptionRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionDescriptionRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulSectionDescriptionRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulSectionDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulSectionDescriptionRichTextNodeContentFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulSectionDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulSectionDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulSectionDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSectionDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSectionDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSectionEdge = {
  next?: Maybe<ContentfulSection>;
  node: ContentfulSection;
  previous?: Maybe<ContentfulSection>;
};

export type ContentfulSectionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'order'
  | 'title'
  | 'lesson'
  | 'lesson___id'
  | 'lesson___parent___id'
  | 'lesson___parent___parent___id'
  | 'lesson___parent___parent___children'
  | 'lesson___parent___children'
  | 'lesson___parent___children___id'
  | 'lesson___parent___children___children'
  | 'lesson___parent___internal___content'
  | 'lesson___parent___internal___contentDigest'
  | 'lesson___parent___internal___description'
  | 'lesson___parent___internal___fieldOwners'
  | 'lesson___parent___internal___ignoreType'
  | 'lesson___parent___internal___mediaType'
  | 'lesson___parent___internal___owner'
  | 'lesson___parent___internal___type'
  | 'lesson___children'
  | 'lesson___children___id'
  | 'lesson___children___parent___id'
  | 'lesson___children___parent___children'
  | 'lesson___children___children'
  | 'lesson___children___children___id'
  | 'lesson___children___children___children'
  | 'lesson___children___internal___content'
  | 'lesson___children___internal___contentDigest'
  | 'lesson___children___internal___description'
  | 'lesson___children___internal___fieldOwners'
  | 'lesson___children___internal___ignoreType'
  | 'lesson___children___internal___mediaType'
  | 'lesson___children___internal___owner'
  | 'lesson___children___internal___type'
  | 'lesson___internal___content'
  | 'lesson___internal___contentDigest'
  | 'lesson___internal___description'
  | 'lesson___internal___fieldOwners'
  | 'lesson___internal___ignoreType'
  | 'lesson___internal___mediaType'
  | 'lesson___internal___owner'
  | 'lesson___internal___type'
  | 'lesson___lessonName'
  | 'lesson___slug'
  | 'lesson___keywords'
  | 'lesson___author'
  | 'lesson___stage'
  | 'lesson___authorCard'
  | 'lesson___authorCard___id'
  | 'lesson___authorCard___parent___id'
  | 'lesson___authorCard___parent___children'
  | 'lesson___authorCard___children'
  | 'lesson___authorCard___children___id'
  | 'lesson___authorCard___children___children'
  | 'lesson___authorCard___internal___content'
  | 'lesson___authorCard___internal___contentDigest'
  | 'lesson___authorCard___internal___description'
  | 'lesson___authorCard___internal___fieldOwners'
  | 'lesson___authorCard___internal___ignoreType'
  | 'lesson___authorCard___internal___mediaType'
  | 'lesson___authorCard___internal___owner'
  | 'lesson___authorCard___internal___type'
  | 'lesson___authorCard___slug'
  | 'lesson___authorCard___name'
  | 'lesson___authorCard___credentials'
  | 'lesson___authorCard___avatar___id'
  | 'lesson___authorCard___avatar___children'
  | 'lesson___authorCard___avatar___contentful_id'
  | 'lesson___authorCard___avatar___title'
  | 'lesson___authorCard___avatar___description'
  | 'lesson___authorCard___avatar___node_locale'
  | 'lesson___authorCard___spaceId'
  | 'lesson___authorCard___contentful_id'
  | 'lesson___authorCard___createdAt'
  | 'lesson___authorCard___updatedAt'
  | 'lesson___authorCard___sys___revision'
  | 'lesson___authorCard___node_locale'
  | 'lesson___authorCard___lesson'
  | 'lesson___authorCard___lesson___id'
  | 'lesson___authorCard___lesson___children'
  | 'lesson___authorCard___lesson___lessonName'
  | 'lesson___authorCard___lesson___slug'
  | 'lesson___authorCard___lesson___keywords'
  | 'lesson___authorCard___lesson___author'
  | 'lesson___authorCard___lesson___stage'
  | 'lesson___authorCard___lesson___authorCard'
  | 'lesson___authorCard___lesson___habit'
  | 'lesson___authorCard___lesson___week'
  | 'lesson___authorCard___lesson___spaceId'
  | 'lesson___authorCard___lesson___contentful_id'
  | 'lesson___authorCard___lesson___createdAt'
  | 'lesson___authorCard___lesson___updatedAt'
  | 'lesson___authorCard___lesson___node_locale'
  | 'lesson___authorCard___lesson___metalesson'
  | 'lesson___authorCard___lesson___customComplete'
  | 'lesson___cover___id'
  | 'lesson___cover___parent___id'
  | 'lesson___cover___parent___children'
  | 'lesson___cover___children'
  | 'lesson___cover___children___id'
  | 'lesson___cover___children___children'
  | 'lesson___cover___internal___content'
  | 'lesson___cover___internal___contentDigest'
  | 'lesson___cover___internal___description'
  | 'lesson___cover___internal___fieldOwners'
  | 'lesson___cover___internal___ignoreType'
  | 'lesson___cover___internal___mediaType'
  | 'lesson___cover___internal___owner'
  | 'lesson___cover___internal___type'
  | 'lesson___cover___contentful_id'
  | 'lesson___cover___file___url'
  | 'lesson___cover___file___fileName'
  | 'lesson___cover___file___contentType'
  | 'lesson___cover___title'
  | 'lesson___cover___description'
  | 'lesson___cover___node_locale'
  | 'lesson___cover___fixed___base64'
  | 'lesson___cover___fixed___tracedSVG'
  | 'lesson___cover___fixed___aspectRatio'
  | 'lesson___cover___fixed___width'
  | 'lesson___cover___fixed___height'
  | 'lesson___cover___fixed___src'
  | 'lesson___cover___fixed___srcSet'
  | 'lesson___cover___fixed___srcWebp'
  | 'lesson___cover___fixed___srcSetWebp'
  | 'lesson___cover___resolutions___base64'
  | 'lesson___cover___resolutions___tracedSVG'
  | 'lesson___cover___resolutions___aspectRatio'
  | 'lesson___cover___resolutions___width'
  | 'lesson___cover___resolutions___height'
  | 'lesson___cover___resolutions___src'
  | 'lesson___cover___resolutions___srcSet'
  | 'lesson___cover___resolutions___srcWebp'
  | 'lesson___cover___resolutions___srcSetWebp'
  | 'lesson___cover___fluid___base64'
  | 'lesson___cover___fluid___tracedSVG'
  | 'lesson___cover___fluid___aspectRatio'
  | 'lesson___cover___fluid___src'
  | 'lesson___cover___fluid___srcSet'
  | 'lesson___cover___fluid___srcWebp'
  | 'lesson___cover___fluid___srcSetWebp'
  | 'lesson___cover___fluid___sizes'
  | 'lesson___cover___sizes___base64'
  | 'lesson___cover___sizes___tracedSVG'
  | 'lesson___cover___sizes___aspectRatio'
  | 'lesson___cover___sizes___src'
  | 'lesson___cover___sizes___srcSet'
  | 'lesson___cover___sizes___srcWebp'
  | 'lesson___cover___sizes___srcSetWebp'
  | 'lesson___cover___sizes___sizes'
  | 'lesson___cover___resize___base64'
  | 'lesson___cover___resize___tracedSVG'
  | 'lesson___cover___resize___src'
  | 'lesson___cover___resize___width'
  | 'lesson___cover___resize___height'
  | 'lesson___cover___resize___aspectRatio'
  | 'lesson___section___id'
  | 'lesson___section___parent___id'
  | 'lesson___section___parent___children'
  | 'lesson___section___children'
  | 'lesson___section___children___id'
  | 'lesson___section___children___children'
  | 'lesson___section___internal___content'
  | 'lesson___section___internal___contentDigest'
  | 'lesson___section___internal___description'
  | 'lesson___section___internal___fieldOwners'
  | 'lesson___section___internal___ignoreType'
  | 'lesson___section___internal___mediaType'
  | 'lesson___section___internal___owner'
  | 'lesson___section___internal___type'
  | 'lesson___section___order'
  | 'lesson___section___title'
  | 'lesson___section___lesson'
  | 'lesson___section___lesson___id'
  | 'lesson___section___lesson___children'
  | 'lesson___section___lesson___lessonName'
  | 'lesson___section___lesson___slug'
  | 'lesson___section___lesson___keywords'
  | 'lesson___section___lesson___author'
  | 'lesson___section___lesson___stage'
  | 'lesson___section___lesson___authorCard'
  | 'lesson___section___lesson___habit'
  | 'lesson___section___lesson___week'
  | 'lesson___section___lesson___spaceId'
  | 'lesson___section___lesson___contentful_id'
  | 'lesson___section___lesson___createdAt'
  | 'lesson___section___lesson___updatedAt'
  | 'lesson___section___lesson___node_locale'
  | 'lesson___section___lesson___metalesson'
  | 'lesson___section___lesson___customComplete'
  | 'lesson___section___description___id'
  | 'lesson___section___description___children'
  | 'lesson___section___description___nodeType'
  | 'lesson___section___description___content'
  | 'lesson___section___description___description'
  | 'lesson___section___description___json'
  | 'lesson___section___spaceId'
  | 'lesson___section___contentful_id'
  | 'lesson___section___createdAt'
  | 'lesson___section___updatedAt'
  | 'lesson___section___sys___revision'
  | 'lesson___section___node_locale'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___id'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___children'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___content'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___description'
  | 'lesson___section___childContentfulSectionDescriptionRichTextNode___json'
  | 'lesson___habit'
  | 'lesson___habit___id'
  | 'lesson___habit___parent___id'
  | 'lesson___habit___parent___children'
  | 'lesson___habit___children'
  | 'lesson___habit___children___id'
  | 'lesson___habit___children___children'
  | 'lesson___habit___internal___content'
  | 'lesson___habit___internal___contentDigest'
  | 'lesson___habit___internal___description'
  | 'lesson___habit___internal___fieldOwners'
  | 'lesson___habit___internal___ignoreType'
  | 'lesson___habit___internal___mediaType'
  | 'lesson___habit___internal___owner'
  | 'lesson___habit___internal___type'
  | 'lesson___habit___title'
  | 'lesson___habit___slug'
  | 'lesson___habit___period'
  | 'lesson___habit___lesson'
  | 'lesson___habit___lesson___id'
  | 'lesson___habit___lesson___children'
  | 'lesson___habit___lesson___lessonName'
  | 'lesson___habit___lesson___slug'
  | 'lesson___habit___lesson___keywords'
  | 'lesson___habit___lesson___author'
  | 'lesson___habit___lesson___stage'
  | 'lesson___habit___lesson___authorCard'
  | 'lesson___habit___lesson___habit'
  | 'lesson___habit___lesson___week'
  | 'lesson___habit___lesson___spaceId'
  | 'lesson___habit___lesson___contentful_id'
  | 'lesson___habit___lesson___createdAt'
  | 'lesson___habit___lesson___updatedAt'
  | 'lesson___habit___lesson___node_locale'
  | 'lesson___habit___lesson___metalesson'
  | 'lesson___habit___lesson___customComplete'
  | 'lesson___habit___description___id'
  | 'lesson___habit___description___children'
  | 'lesson___habit___description___nodeType'
  | 'lesson___habit___description___content'
  | 'lesson___habit___description___description'
  | 'lesson___habit___description___json'
  | 'lesson___habit___spaceId'
  | 'lesson___habit___contentful_id'
  | 'lesson___habit___createdAt'
  | 'lesson___habit___updatedAt'
  | 'lesson___habit___sys___revision'
  | 'lesson___habit___node_locale'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'lesson___habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'lesson___week'
  | 'lesson___week___id'
  | 'lesson___week___parent___id'
  | 'lesson___week___parent___children'
  | 'lesson___week___children'
  | 'lesson___week___children___id'
  | 'lesson___week___children___children'
  | 'lesson___week___internal___content'
  | 'lesson___week___internal___contentDigest'
  | 'lesson___week___internal___description'
  | 'lesson___week___internal___fieldOwners'
  | 'lesson___week___internal___ignoreType'
  | 'lesson___week___internal___mediaType'
  | 'lesson___week___internal___owner'
  | 'lesson___week___internal___type'
  | 'lesson___week___order'
  | 'lesson___week___weekName'
  | 'lesson___week___slug'
  | 'lesson___week___intro'
  | 'lesson___week___taskCount'
  | 'lesson___week___locked'
  | 'lesson___week___duration'
  | 'lesson___week___coverPhoto___id'
  | 'lesson___week___coverPhoto___children'
  | 'lesson___week___coverPhoto___contentful_id'
  | 'lesson___week___coverPhoto___title'
  | 'lesson___week___coverPhoto___description'
  | 'lesson___week___coverPhoto___node_locale'
  | 'lesson___week___lessons'
  | 'lesson___week___lessons___id'
  | 'lesson___week___lessons___children'
  | 'lesson___week___lessons___lessonName'
  | 'lesson___week___lessons___slug'
  | 'lesson___week___lessons___keywords'
  | 'lesson___week___lessons___author'
  | 'lesson___week___lessons___stage'
  | 'lesson___week___lessons___authorCard'
  | 'lesson___week___lessons___habit'
  | 'lesson___week___lessons___week'
  | 'lesson___week___lessons___spaceId'
  | 'lesson___week___lessons___contentful_id'
  | 'lesson___week___lessons___createdAt'
  | 'lesson___week___lessons___updatedAt'
  | 'lesson___week___lessons___node_locale'
  | 'lesson___week___lessons___metalesson'
  | 'lesson___week___lessons___customComplete'
  | 'lesson___week___weekDescription___id'
  | 'lesson___week___weekDescription___children'
  | 'lesson___week___weekDescription___nodeType'
  | 'lesson___week___weekDescription___content'
  | 'lesson___week___weekDescription___weekDescription'
  | 'lesson___week___weekDescription___json'
  | 'lesson___week___spaceId'
  | 'lesson___week___contentful_id'
  | 'lesson___week___createdAt'
  | 'lesson___week___updatedAt'
  | 'lesson___week___sys___revision'
  | 'lesson___week___node_locale'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'lesson___week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'lesson___lessonContent___id'
  | 'lesson___lessonContent___parent___id'
  | 'lesson___lessonContent___parent___children'
  | 'lesson___lessonContent___children'
  | 'lesson___lessonContent___children___id'
  | 'lesson___lessonContent___children___children'
  | 'lesson___lessonContent___internal___content'
  | 'lesson___lessonContent___internal___contentDigest'
  | 'lesson___lessonContent___internal___description'
  | 'lesson___lessonContent___internal___fieldOwners'
  | 'lesson___lessonContent___internal___ignoreType'
  | 'lesson___lessonContent___internal___mediaType'
  | 'lesson___lessonContent___internal___owner'
  | 'lesson___lessonContent___internal___type'
  | 'lesson___lessonContent___nodeType'
  | 'lesson___lessonContent___content'
  | 'lesson___lessonContent___content___nodeType'
  | 'lesson___lessonContent___content___content'
  | 'lesson___lessonContent___lessonContent'
  | 'lesson___lessonContent___fields___excerpt'
  | 'lesson___lessonContent___json'
  | 'lesson___additionalInformation___id'
  | 'lesson___additionalInformation___parent___id'
  | 'lesson___additionalInformation___parent___children'
  | 'lesson___additionalInformation___children'
  | 'lesson___additionalInformation___children___id'
  | 'lesson___additionalInformation___children___children'
  | 'lesson___additionalInformation___internal___content'
  | 'lesson___additionalInformation___internal___contentDigest'
  | 'lesson___additionalInformation___internal___description'
  | 'lesson___additionalInformation___internal___fieldOwners'
  | 'lesson___additionalInformation___internal___ignoreType'
  | 'lesson___additionalInformation___internal___mediaType'
  | 'lesson___additionalInformation___internal___owner'
  | 'lesson___additionalInformation___internal___type'
  | 'lesson___additionalInformation___content'
  | 'lesson___additionalInformation___content___content'
  | 'lesson___additionalInformation___content___nodeType'
  | 'lesson___additionalInformation___nodeType'
  | 'lesson___additionalInformation___additionalInformation'
  | 'lesson___additionalInformation___fields___excerpt'
  | 'lesson___additionalInformation___json'
  | 'lesson___weights___id'
  | 'lesson___weights___parent___id'
  | 'lesson___weights___parent___children'
  | 'lesson___weights___children'
  | 'lesson___weights___children___id'
  | 'lesson___weights___children___children'
  | 'lesson___weights___internal___content'
  | 'lesson___weights___internal___contentDigest'
  | 'lesson___weights___internal___description'
  | 'lesson___weights___internal___fieldOwners'
  | 'lesson___weights___internal___ignoreType'
  | 'lesson___weights___internal___mediaType'
  | 'lesson___weights___internal___owner'
  | 'lesson___weights___internal___type'
  | 'lesson___weights___jetlag'
  | 'lesson___weights___duration'
  | 'lesson___weights___efficiency'
  | 'lesson___weights___consistency'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lesson___weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'lesson___spaceId'
  | 'lesson___contentful_id'
  | 'lesson___createdAt'
  | 'lesson___updatedAt'
  | 'lesson___sys___revision'
  | 'lesson___node_locale'
  | 'lesson___metalesson'
  | 'lesson___metalesson___id'
  | 'lesson___metalesson___parent___id'
  | 'lesson___metalesson___parent___children'
  | 'lesson___metalesson___children'
  | 'lesson___metalesson___children___id'
  | 'lesson___metalesson___children___children'
  | 'lesson___metalesson___internal___content'
  | 'lesson___metalesson___internal___contentDigest'
  | 'lesson___metalesson___internal___description'
  | 'lesson___metalesson___internal___fieldOwners'
  | 'lesson___metalesson___internal___ignoreType'
  | 'lesson___metalesson___internal___mediaType'
  | 'lesson___metalesson___internal___owner'
  | 'lesson___metalesson___internal___type'
  | 'lesson___metalesson___title'
  | 'lesson___metalesson___slug'
  | 'lesson___metalesson___keywords'
  | 'lesson___metalesson___lessons'
  | 'lesson___metalesson___lessons___id'
  | 'lesson___metalesson___lessons___children'
  | 'lesson___metalesson___lessons___lessonName'
  | 'lesson___metalesson___lessons___slug'
  | 'lesson___metalesson___lessons___keywords'
  | 'lesson___metalesson___lessons___author'
  | 'lesson___metalesson___lessons___stage'
  | 'lesson___metalesson___lessons___authorCard'
  | 'lesson___metalesson___lessons___habit'
  | 'lesson___metalesson___lessons___week'
  | 'lesson___metalesson___lessons___spaceId'
  | 'lesson___metalesson___lessons___contentful_id'
  | 'lesson___metalesson___lessons___createdAt'
  | 'lesson___metalesson___lessons___updatedAt'
  | 'lesson___metalesson___lessons___node_locale'
  | 'lesson___metalesson___lessons___metalesson'
  | 'lesson___metalesson___lessons___customComplete'
  | 'lesson___metalesson___relatedContent'
  | 'lesson___metalesson___relatedContent___id'
  | 'lesson___metalesson___relatedContent___children'
  | 'lesson___metalesson___relatedContent___lessonName'
  | 'lesson___metalesson___relatedContent___slug'
  | 'lesson___metalesson___relatedContent___keywords'
  | 'lesson___metalesson___relatedContent___author'
  | 'lesson___metalesson___relatedContent___stage'
  | 'lesson___metalesson___relatedContent___authorCard'
  | 'lesson___metalesson___relatedContent___habit'
  | 'lesson___metalesson___relatedContent___week'
  | 'lesson___metalesson___relatedContent___spaceId'
  | 'lesson___metalesson___relatedContent___contentful_id'
  | 'lesson___metalesson___relatedContent___createdAt'
  | 'lesson___metalesson___relatedContent___updatedAt'
  | 'lesson___metalesson___relatedContent___node_locale'
  | 'lesson___metalesson___relatedContent___metalesson'
  | 'lesson___metalesson___relatedContent___customComplete'
  | 'lesson___metalesson___spaceId'
  | 'lesson___metalesson___contentful_id'
  | 'lesson___metalesson___createdAt'
  | 'lesson___metalesson___updatedAt'
  | 'lesson___metalesson___sys___revision'
  | 'lesson___metalesson___node_locale'
  | 'lesson___customComplete'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children___id'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___children___children'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___content___content'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'lesson___childContentfulLessonLessonContentRichTextNode___json'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'lesson___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'lesson___childContentfulLessonWeightsJsonNode___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___nodeType'
  | 'description___content'
  | 'description___content___nodeType'
  | 'description___content___content'
  | 'description___content___content___nodeType'
  | 'description___content___content___value'
  | 'description___description'
  | 'description___fields___readingTime___text'
  | 'description___fields___readingTime___minutes'
  | 'description___fields___readingTime___time'
  | 'description___fields___readingTime___words'
  | 'description___fields___excerpt'
  | 'description___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulSectionDescriptionRichTextNode___id'
  | 'childContentfulSectionDescriptionRichTextNode___parent___id'
  | 'childContentfulSectionDescriptionRichTextNode___parent___parent___id'
  | 'childContentfulSectionDescriptionRichTextNode___parent___parent___children'
  | 'childContentfulSectionDescriptionRichTextNode___parent___children'
  | 'childContentfulSectionDescriptionRichTextNode___parent___children___id'
  | 'childContentfulSectionDescriptionRichTextNode___parent___children___children'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___content'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___contentDigest'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___description'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___ignoreType'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___mediaType'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___owner'
  | 'childContentfulSectionDescriptionRichTextNode___parent___internal___type'
  | 'childContentfulSectionDescriptionRichTextNode___children'
  | 'childContentfulSectionDescriptionRichTextNode___children___id'
  | 'childContentfulSectionDescriptionRichTextNode___children___parent___id'
  | 'childContentfulSectionDescriptionRichTextNode___children___parent___children'
  | 'childContentfulSectionDescriptionRichTextNode___children___children'
  | 'childContentfulSectionDescriptionRichTextNode___children___children___id'
  | 'childContentfulSectionDescriptionRichTextNode___children___children___children'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___content'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___contentDigest'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___description'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___fieldOwners'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___ignoreType'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___mediaType'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___owner'
  | 'childContentfulSectionDescriptionRichTextNode___children___internal___type'
  | 'childContentfulSectionDescriptionRichTextNode___internal___content'
  | 'childContentfulSectionDescriptionRichTextNode___internal___contentDigest'
  | 'childContentfulSectionDescriptionRichTextNode___internal___description'
  | 'childContentfulSectionDescriptionRichTextNode___internal___fieldOwners'
  | 'childContentfulSectionDescriptionRichTextNode___internal___ignoreType'
  | 'childContentfulSectionDescriptionRichTextNode___internal___mediaType'
  | 'childContentfulSectionDescriptionRichTextNode___internal___owner'
  | 'childContentfulSectionDescriptionRichTextNode___internal___type'
  | 'childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'childContentfulSectionDescriptionRichTextNode___content'
  | 'childContentfulSectionDescriptionRichTextNode___content___nodeType'
  | 'childContentfulSectionDescriptionRichTextNode___content___content'
  | 'childContentfulSectionDescriptionRichTextNode___content___content___nodeType'
  | 'childContentfulSectionDescriptionRichTextNode___content___content___value'
  | 'childContentfulSectionDescriptionRichTextNode___description'
  | 'childContentfulSectionDescriptionRichTextNode___fields___readingTime___text'
  | 'childContentfulSectionDescriptionRichTextNode___fields___readingTime___minutes'
  | 'childContentfulSectionDescriptionRichTextNode___fields___readingTime___time'
  | 'childContentfulSectionDescriptionRichTextNode___fields___readingTime___words'
  | 'childContentfulSectionDescriptionRichTextNode___fields___excerpt'
  | 'childContentfulSectionDescriptionRichTextNode___json';

export type ContentfulSectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  description?: Maybe<ContentfulSectionDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulSectionDescriptionRichTextNode?: Maybe<ContentfulSectionDescriptionRichTextNodeFilterInput>;
};

export type ContentfulSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSectionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSectionSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSectionSysContentType>;
};

export type ContentfulSectionSysContentType = {
  sys?: Maybe<ContentfulSectionSysContentTypeSys>;
};

export type ContentfulSectionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSectionSysContentTypeSysFilterInput>;
};

export type ContentfulSectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSectionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSectionSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWeek = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  order?: Maybe<Scalars['Int']>;
  weekName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  taskCount?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<Scalars['Int']>;
  coverPhoto?: Maybe<ContentfulAsset>;
  lessons?: Maybe<Array<Maybe<ContentfulLesson>>>;
  weekDescription?: Maybe<ContentfulWeekWeekDescriptionRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWeekSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulWeekWeekDescriptionRichTextNode?: Maybe<ContentfulWeekWeekDescriptionRichTextNode>;
};


export type ContentfulWeekCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWeekUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWeekConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWeekEdge>;
  nodes: Array<ContentfulWeek>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWeekGroupConnection>;
};


export type ContentfulWeekConnectionDistinctArgs = {
  field: ContentfulWeekFieldsEnum;
};


export type ContentfulWeekConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWeekFieldsEnum;
};

export type ContentfulWeekEdge = {
  next?: Maybe<ContentfulWeek>;
  node: ContentfulWeek;
  previous?: Maybe<ContentfulWeek>;
};

export type ContentfulWeekFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'order'
  | 'weekName'
  | 'slug'
  | 'intro'
  | 'taskCount'
  | 'locked'
  | 'duration'
  | 'coverPhoto___id'
  | 'coverPhoto___parent___id'
  | 'coverPhoto___parent___parent___id'
  | 'coverPhoto___parent___parent___children'
  | 'coverPhoto___parent___children'
  | 'coverPhoto___parent___children___id'
  | 'coverPhoto___parent___children___children'
  | 'coverPhoto___parent___internal___content'
  | 'coverPhoto___parent___internal___contentDigest'
  | 'coverPhoto___parent___internal___description'
  | 'coverPhoto___parent___internal___fieldOwners'
  | 'coverPhoto___parent___internal___ignoreType'
  | 'coverPhoto___parent___internal___mediaType'
  | 'coverPhoto___parent___internal___owner'
  | 'coverPhoto___parent___internal___type'
  | 'coverPhoto___children'
  | 'coverPhoto___children___id'
  | 'coverPhoto___children___parent___id'
  | 'coverPhoto___children___parent___children'
  | 'coverPhoto___children___children'
  | 'coverPhoto___children___children___id'
  | 'coverPhoto___children___children___children'
  | 'coverPhoto___children___internal___content'
  | 'coverPhoto___children___internal___contentDigest'
  | 'coverPhoto___children___internal___description'
  | 'coverPhoto___children___internal___fieldOwners'
  | 'coverPhoto___children___internal___ignoreType'
  | 'coverPhoto___children___internal___mediaType'
  | 'coverPhoto___children___internal___owner'
  | 'coverPhoto___children___internal___type'
  | 'coverPhoto___internal___content'
  | 'coverPhoto___internal___contentDigest'
  | 'coverPhoto___internal___description'
  | 'coverPhoto___internal___fieldOwners'
  | 'coverPhoto___internal___ignoreType'
  | 'coverPhoto___internal___mediaType'
  | 'coverPhoto___internal___owner'
  | 'coverPhoto___internal___type'
  | 'coverPhoto___contentful_id'
  | 'coverPhoto___file___url'
  | 'coverPhoto___file___details___size'
  | 'coverPhoto___file___fileName'
  | 'coverPhoto___file___contentType'
  | 'coverPhoto___title'
  | 'coverPhoto___description'
  | 'coverPhoto___node_locale'
  | 'coverPhoto___fixed___base64'
  | 'coverPhoto___fixed___tracedSVG'
  | 'coverPhoto___fixed___aspectRatio'
  | 'coverPhoto___fixed___width'
  | 'coverPhoto___fixed___height'
  | 'coverPhoto___fixed___src'
  | 'coverPhoto___fixed___srcSet'
  | 'coverPhoto___fixed___srcWebp'
  | 'coverPhoto___fixed___srcSetWebp'
  | 'coverPhoto___resolutions___base64'
  | 'coverPhoto___resolutions___tracedSVG'
  | 'coverPhoto___resolutions___aspectRatio'
  | 'coverPhoto___resolutions___width'
  | 'coverPhoto___resolutions___height'
  | 'coverPhoto___resolutions___src'
  | 'coverPhoto___resolutions___srcSet'
  | 'coverPhoto___resolutions___srcWebp'
  | 'coverPhoto___resolutions___srcSetWebp'
  | 'coverPhoto___fluid___base64'
  | 'coverPhoto___fluid___tracedSVG'
  | 'coverPhoto___fluid___aspectRatio'
  | 'coverPhoto___fluid___src'
  | 'coverPhoto___fluid___srcSet'
  | 'coverPhoto___fluid___srcWebp'
  | 'coverPhoto___fluid___srcSetWebp'
  | 'coverPhoto___fluid___sizes'
  | 'coverPhoto___sizes___base64'
  | 'coverPhoto___sizes___tracedSVG'
  | 'coverPhoto___sizes___aspectRatio'
  | 'coverPhoto___sizes___src'
  | 'coverPhoto___sizes___srcSet'
  | 'coverPhoto___sizes___srcWebp'
  | 'coverPhoto___sizes___srcSetWebp'
  | 'coverPhoto___sizes___sizes'
  | 'coverPhoto___resize___base64'
  | 'coverPhoto___resize___tracedSVG'
  | 'coverPhoto___resize___src'
  | 'coverPhoto___resize___width'
  | 'coverPhoto___resize___height'
  | 'coverPhoto___resize___aspectRatio'
  | 'lessons'
  | 'lessons___id'
  | 'lessons___parent___id'
  | 'lessons___parent___parent___id'
  | 'lessons___parent___parent___children'
  | 'lessons___parent___children'
  | 'lessons___parent___children___id'
  | 'lessons___parent___children___children'
  | 'lessons___parent___internal___content'
  | 'lessons___parent___internal___contentDigest'
  | 'lessons___parent___internal___description'
  | 'lessons___parent___internal___fieldOwners'
  | 'lessons___parent___internal___ignoreType'
  | 'lessons___parent___internal___mediaType'
  | 'lessons___parent___internal___owner'
  | 'lessons___parent___internal___type'
  | 'lessons___children'
  | 'lessons___children___id'
  | 'lessons___children___parent___id'
  | 'lessons___children___parent___children'
  | 'lessons___children___children'
  | 'lessons___children___children___id'
  | 'lessons___children___children___children'
  | 'lessons___children___internal___content'
  | 'lessons___children___internal___contentDigest'
  | 'lessons___children___internal___description'
  | 'lessons___children___internal___fieldOwners'
  | 'lessons___children___internal___ignoreType'
  | 'lessons___children___internal___mediaType'
  | 'lessons___children___internal___owner'
  | 'lessons___children___internal___type'
  | 'lessons___internal___content'
  | 'lessons___internal___contentDigest'
  | 'lessons___internal___description'
  | 'lessons___internal___fieldOwners'
  | 'lessons___internal___ignoreType'
  | 'lessons___internal___mediaType'
  | 'lessons___internal___owner'
  | 'lessons___internal___type'
  | 'lessons___lessonName'
  | 'lessons___slug'
  | 'lessons___keywords'
  | 'lessons___author'
  | 'lessons___stage'
  | 'lessons___authorCard'
  | 'lessons___authorCard___id'
  | 'lessons___authorCard___parent___id'
  | 'lessons___authorCard___parent___children'
  | 'lessons___authorCard___children'
  | 'lessons___authorCard___children___id'
  | 'lessons___authorCard___children___children'
  | 'lessons___authorCard___internal___content'
  | 'lessons___authorCard___internal___contentDigest'
  | 'lessons___authorCard___internal___description'
  | 'lessons___authorCard___internal___fieldOwners'
  | 'lessons___authorCard___internal___ignoreType'
  | 'lessons___authorCard___internal___mediaType'
  | 'lessons___authorCard___internal___owner'
  | 'lessons___authorCard___internal___type'
  | 'lessons___authorCard___slug'
  | 'lessons___authorCard___name'
  | 'lessons___authorCard___credentials'
  | 'lessons___authorCard___avatar___id'
  | 'lessons___authorCard___avatar___children'
  | 'lessons___authorCard___avatar___contentful_id'
  | 'lessons___authorCard___avatar___title'
  | 'lessons___authorCard___avatar___description'
  | 'lessons___authorCard___avatar___node_locale'
  | 'lessons___authorCard___spaceId'
  | 'lessons___authorCard___contentful_id'
  | 'lessons___authorCard___createdAt'
  | 'lessons___authorCard___updatedAt'
  | 'lessons___authorCard___sys___revision'
  | 'lessons___authorCard___node_locale'
  | 'lessons___authorCard___lesson'
  | 'lessons___authorCard___lesson___id'
  | 'lessons___authorCard___lesson___children'
  | 'lessons___authorCard___lesson___lessonName'
  | 'lessons___authorCard___lesson___slug'
  | 'lessons___authorCard___lesson___keywords'
  | 'lessons___authorCard___lesson___author'
  | 'lessons___authorCard___lesson___stage'
  | 'lessons___authorCard___lesson___authorCard'
  | 'lessons___authorCard___lesson___habit'
  | 'lessons___authorCard___lesson___week'
  | 'lessons___authorCard___lesson___spaceId'
  | 'lessons___authorCard___lesson___contentful_id'
  | 'lessons___authorCard___lesson___createdAt'
  | 'lessons___authorCard___lesson___updatedAt'
  | 'lessons___authorCard___lesson___node_locale'
  | 'lessons___authorCard___lesson___metalesson'
  | 'lessons___authorCard___lesson___customComplete'
  | 'lessons___cover___id'
  | 'lessons___cover___parent___id'
  | 'lessons___cover___parent___children'
  | 'lessons___cover___children'
  | 'lessons___cover___children___id'
  | 'lessons___cover___children___children'
  | 'lessons___cover___internal___content'
  | 'lessons___cover___internal___contentDigest'
  | 'lessons___cover___internal___description'
  | 'lessons___cover___internal___fieldOwners'
  | 'lessons___cover___internal___ignoreType'
  | 'lessons___cover___internal___mediaType'
  | 'lessons___cover___internal___owner'
  | 'lessons___cover___internal___type'
  | 'lessons___cover___contentful_id'
  | 'lessons___cover___file___url'
  | 'lessons___cover___file___fileName'
  | 'lessons___cover___file___contentType'
  | 'lessons___cover___title'
  | 'lessons___cover___description'
  | 'lessons___cover___node_locale'
  | 'lessons___cover___fixed___base64'
  | 'lessons___cover___fixed___tracedSVG'
  | 'lessons___cover___fixed___aspectRatio'
  | 'lessons___cover___fixed___width'
  | 'lessons___cover___fixed___height'
  | 'lessons___cover___fixed___src'
  | 'lessons___cover___fixed___srcSet'
  | 'lessons___cover___fixed___srcWebp'
  | 'lessons___cover___fixed___srcSetWebp'
  | 'lessons___cover___resolutions___base64'
  | 'lessons___cover___resolutions___tracedSVG'
  | 'lessons___cover___resolutions___aspectRatio'
  | 'lessons___cover___resolutions___width'
  | 'lessons___cover___resolutions___height'
  | 'lessons___cover___resolutions___src'
  | 'lessons___cover___resolutions___srcSet'
  | 'lessons___cover___resolutions___srcWebp'
  | 'lessons___cover___resolutions___srcSetWebp'
  | 'lessons___cover___fluid___base64'
  | 'lessons___cover___fluid___tracedSVG'
  | 'lessons___cover___fluid___aspectRatio'
  | 'lessons___cover___fluid___src'
  | 'lessons___cover___fluid___srcSet'
  | 'lessons___cover___fluid___srcWebp'
  | 'lessons___cover___fluid___srcSetWebp'
  | 'lessons___cover___fluid___sizes'
  | 'lessons___cover___sizes___base64'
  | 'lessons___cover___sizes___tracedSVG'
  | 'lessons___cover___sizes___aspectRatio'
  | 'lessons___cover___sizes___src'
  | 'lessons___cover___sizes___srcSet'
  | 'lessons___cover___sizes___srcWebp'
  | 'lessons___cover___sizes___srcSetWebp'
  | 'lessons___cover___sizes___sizes'
  | 'lessons___cover___resize___base64'
  | 'lessons___cover___resize___tracedSVG'
  | 'lessons___cover___resize___src'
  | 'lessons___cover___resize___width'
  | 'lessons___cover___resize___height'
  | 'lessons___cover___resize___aspectRatio'
  | 'lessons___section___id'
  | 'lessons___section___parent___id'
  | 'lessons___section___parent___children'
  | 'lessons___section___children'
  | 'lessons___section___children___id'
  | 'lessons___section___children___children'
  | 'lessons___section___internal___content'
  | 'lessons___section___internal___contentDigest'
  | 'lessons___section___internal___description'
  | 'lessons___section___internal___fieldOwners'
  | 'lessons___section___internal___ignoreType'
  | 'lessons___section___internal___mediaType'
  | 'lessons___section___internal___owner'
  | 'lessons___section___internal___type'
  | 'lessons___section___order'
  | 'lessons___section___title'
  | 'lessons___section___lesson'
  | 'lessons___section___lesson___id'
  | 'lessons___section___lesson___children'
  | 'lessons___section___lesson___lessonName'
  | 'lessons___section___lesson___slug'
  | 'lessons___section___lesson___keywords'
  | 'lessons___section___lesson___author'
  | 'lessons___section___lesson___stage'
  | 'lessons___section___lesson___authorCard'
  | 'lessons___section___lesson___habit'
  | 'lessons___section___lesson___week'
  | 'lessons___section___lesson___spaceId'
  | 'lessons___section___lesson___contentful_id'
  | 'lessons___section___lesson___createdAt'
  | 'lessons___section___lesson___updatedAt'
  | 'lessons___section___lesson___node_locale'
  | 'lessons___section___lesson___metalesson'
  | 'lessons___section___lesson___customComplete'
  | 'lessons___section___description___id'
  | 'lessons___section___description___children'
  | 'lessons___section___description___nodeType'
  | 'lessons___section___description___content'
  | 'lessons___section___description___description'
  | 'lessons___section___description___json'
  | 'lessons___section___spaceId'
  | 'lessons___section___contentful_id'
  | 'lessons___section___createdAt'
  | 'lessons___section___updatedAt'
  | 'lessons___section___sys___revision'
  | 'lessons___section___node_locale'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___id'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___children'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___nodeType'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___content'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___description'
  | 'lessons___section___childContentfulSectionDescriptionRichTextNode___json'
  | 'lessons___habit'
  | 'lessons___habit___id'
  | 'lessons___habit___parent___id'
  | 'lessons___habit___parent___children'
  | 'lessons___habit___children'
  | 'lessons___habit___children___id'
  | 'lessons___habit___children___children'
  | 'lessons___habit___internal___content'
  | 'lessons___habit___internal___contentDigest'
  | 'lessons___habit___internal___description'
  | 'lessons___habit___internal___fieldOwners'
  | 'lessons___habit___internal___ignoreType'
  | 'lessons___habit___internal___mediaType'
  | 'lessons___habit___internal___owner'
  | 'lessons___habit___internal___type'
  | 'lessons___habit___title'
  | 'lessons___habit___slug'
  | 'lessons___habit___period'
  | 'lessons___habit___lesson'
  | 'lessons___habit___lesson___id'
  | 'lessons___habit___lesson___children'
  | 'lessons___habit___lesson___lessonName'
  | 'lessons___habit___lesson___slug'
  | 'lessons___habit___lesson___keywords'
  | 'lessons___habit___lesson___author'
  | 'lessons___habit___lesson___stage'
  | 'lessons___habit___lesson___authorCard'
  | 'lessons___habit___lesson___habit'
  | 'lessons___habit___lesson___week'
  | 'lessons___habit___lesson___spaceId'
  | 'lessons___habit___lesson___contentful_id'
  | 'lessons___habit___lesson___createdAt'
  | 'lessons___habit___lesson___updatedAt'
  | 'lessons___habit___lesson___node_locale'
  | 'lessons___habit___lesson___metalesson'
  | 'lessons___habit___lesson___customComplete'
  | 'lessons___habit___description___id'
  | 'lessons___habit___description___children'
  | 'lessons___habit___description___nodeType'
  | 'lessons___habit___description___content'
  | 'lessons___habit___description___description'
  | 'lessons___habit___description___json'
  | 'lessons___habit___spaceId'
  | 'lessons___habit___contentful_id'
  | 'lessons___habit___createdAt'
  | 'lessons___habit___updatedAt'
  | 'lessons___habit___sys___revision'
  | 'lessons___habit___node_locale'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___id'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___children'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___nodeType'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___content'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___description'
  | 'lessons___habit___childContentfulHabitDescriptionRichTextNode___json'
  | 'lessons___week'
  | 'lessons___week___id'
  | 'lessons___week___parent___id'
  | 'lessons___week___parent___children'
  | 'lessons___week___children'
  | 'lessons___week___children___id'
  | 'lessons___week___children___children'
  | 'lessons___week___internal___content'
  | 'lessons___week___internal___contentDigest'
  | 'lessons___week___internal___description'
  | 'lessons___week___internal___fieldOwners'
  | 'lessons___week___internal___ignoreType'
  | 'lessons___week___internal___mediaType'
  | 'lessons___week___internal___owner'
  | 'lessons___week___internal___type'
  | 'lessons___week___order'
  | 'lessons___week___weekName'
  | 'lessons___week___slug'
  | 'lessons___week___intro'
  | 'lessons___week___taskCount'
  | 'lessons___week___locked'
  | 'lessons___week___duration'
  | 'lessons___week___coverPhoto___id'
  | 'lessons___week___coverPhoto___children'
  | 'lessons___week___coverPhoto___contentful_id'
  | 'lessons___week___coverPhoto___title'
  | 'lessons___week___coverPhoto___description'
  | 'lessons___week___coverPhoto___node_locale'
  | 'lessons___week___lessons'
  | 'lessons___week___lessons___id'
  | 'lessons___week___lessons___children'
  | 'lessons___week___lessons___lessonName'
  | 'lessons___week___lessons___slug'
  | 'lessons___week___lessons___keywords'
  | 'lessons___week___lessons___author'
  | 'lessons___week___lessons___stage'
  | 'lessons___week___lessons___authorCard'
  | 'lessons___week___lessons___habit'
  | 'lessons___week___lessons___week'
  | 'lessons___week___lessons___spaceId'
  | 'lessons___week___lessons___contentful_id'
  | 'lessons___week___lessons___createdAt'
  | 'lessons___week___lessons___updatedAt'
  | 'lessons___week___lessons___node_locale'
  | 'lessons___week___lessons___metalesson'
  | 'lessons___week___lessons___customComplete'
  | 'lessons___week___weekDescription___id'
  | 'lessons___week___weekDescription___children'
  | 'lessons___week___weekDescription___nodeType'
  | 'lessons___week___weekDescription___content'
  | 'lessons___week___weekDescription___weekDescription'
  | 'lessons___week___weekDescription___json'
  | 'lessons___week___spaceId'
  | 'lessons___week___contentful_id'
  | 'lessons___week___createdAt'
  | 'lessons___week___updatedAt'
  | 'lessons___week___sys___revision'
  | 'lessons___week___node_locale'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'lessons___week___childContentfulWeekWeekDescriptionRichTextNode___json'
  | 'lessons___lessonContent___id'
  | 'lessons___lessonContent___parent___id'
  | 'lessons___lessonContent___parent___children'
  | 'lessons___lessonContent___children'
  | 'lessons___lessonContent___children___id'
  | 'lessons___lessonContent___children___children'
  | 'lessons___lessonContent___internal___content'
  | 'lessons___lessonContent___internal___contentDigest'
  | 'lessons___lessonContent___internal___description'
  | 'lessons___lessonContent___internal___fieldOwners'
  | 'lessons___lessonContent___internal___ignoreType'
  | 'lessons___lessonContent___internal___mediaType'
  | 'lessons___lessonContent___internal___owner'
  | 'lessons___lessonContent___internal___type'
  | 'lessons___lessonContent___nodeType'
  | 'lessons___lessonContent___content'
  | 'lessons___lessonContent___content___nodeType'
  | 'lessons___lessonContent___content___content'
  | 'lessons___lessonContent___lessonContent'
  | 'lessons___lessonContent___fields___excerpt'
  | 'lessons___lessonContent___json'
  | 'lessons___additionalInformation___id'
  | 'lessons___additionalInformation___parent___id'
  | 'lessons___additionalInformation___parent___children'
  | 'lessons___additionalInformation___children'
  | 'lessons___additionalInformation___children___id'
  | 'lessons___additionalInformation___children___children'
  | 'lessons___additionalInformation___internal___content'
  | 'lessons___additionalInformation___internal___contentDigest'
  | 'lessons___additionalInformation___internal___description'
  | 'lessons___additionalInformation___internal___fieldOwners'
  | 'lessons___additionalInformation___internal___ignoreType'
  | 'lessons___additionalInformation___internal___mediaType'
  | 'lessons___additionalInformation___internal___owner'
  | 'lessons___additionalInformation___internal___type'
  | 'lessons___additionalInformation___content'
  | 'lessons___additionalInformation___content___content'
  | 'lessons___additionalInformation___content___nodeType'
  | 'lessons___additionalInformation___nodeType'
  | 'lessons___additionalInformation___additionalInformation'
  | 'lessons___additionalInformation___fields___excerpt'
  | 'lessons___additionalInformation___json'
  | 'lessons___weights___id'
  | 'lessons___weights___parent___id'
  | 'lessons___weights___parent___children'
  | 'lessons___weights___children'
  | 'lessons___weights___children___id'
  | 'lessons___weights___children___children'
  | 'lessons___weights___internal___content'
  | 'lessons___weights___internal___contentDigest'
  | 'lessons___weights___internal___description'
  | 'lessons___weights___internal___fieldOwners'
  | 'lessons___weights___internal___ignoreType'
  | 'lessons___weights___internal___mediaType'
  | 'lessons___weights___internal___owner'
  | 'lessons___weights___internal___type'
  | 'lessons___weights___jetlag'
  | 'lessons___weights___duration'
  | 'lessons___weights___efficiency'
  | 'lessons___weights___consistency'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lessons___weights___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'lessons___spaceId'
  | 'lessons___contentful_id'
  | 'lessons___createdAt'
  | 'lessons___updatedAt'
  | 'lessons___sys___revision'
  | 'lessons___node_locale'
  | 'lessons___metalesson'
  | 'lessons___metalesson___id'
  | 'lessons___metalesson___parent___id'
  | 'lessons___metalesson___parent___children'
  | 'lessons___metalesson___children'
  | 'lessons___metalesson___children___id'
  | 'lessons___metalesson___children___children'
  | 'lessons___metalesson___internal___content'
  | 'lessons___metalesson___internal___contentDigest'
  | 'lessons___metalesson___internal___description'
  | 'lessons___metalesson___internal___fieldOwners'
  | 'lessons___metalesson___internal___ignoreType'
  | 'lessons___metalesson___internal___mediaType'
  | 'lessons___metalesson___internal___owner'
  | 'lessons___metalesson___internal___type'
  | 'lessons___metalesson___title'
  | 'lessons___metalesson___slug'
  | 'lessons___metalesson___keywords'
  | 'lessons___metalesson___lessons'
  | 'lessons___metalesson___lessons___id'
  | 'lessons___metalesson___lessons___children'
  | 'lessons___metalesson___lessons___lessonName'
  | 'lessons___metalesson___lessons___slug'
  | 'lessons___metalesson___lessons___keywords'
  | 'lessons___metalesson___lessons___author'
  | 'lessons___metalesson___lessons___stage'
  | 'lessons___metalesson___lessons___authorCard'
  | 'lessons___metalesson___lessons___habit'
  | 'lessons___metalesson___lessons___week'
  | 'lessons___metalesson___lessons___spaceId'
  | 'lessons___metalesson___lessons___contentful_id'
  | 'lessons___metalesson___lessons___createdAt'
  | 'lessons___metalesson___lessons___updatedAt'
  | 'lessons___metalesson___lessons___node_locale'
  | 'lessons___metalesson___lessons___metalesson'
  | 'lessons___metalesson___lessons___customComplete'
  | 'lessons___metalesson___relatedContent'
  | 'lessons___metalesson___relatedContent___id'
  | 'lessons___metalesson___relatedContent___children'
  | 'lessons___metalesson___relatedContent___lessonName'
  | 'lessons___metalesson___relatedContent___slug'
  | 'lessons___metalesson___relatedContent___keywords'
  | 'lessons___metalesson___relatedContent___author'
  | 'lessons___metalesson___relatedContent___stage'
  | 'lessons___metalesson___relatedContent___authorCard'
  | 'lessons___metalesson___relatedContent___habit'
  | 'lessons___metalesson___relatedContent___week'
  | 'lessons___metalesson___relatedContent___spaceId'
  | 'lessons___metalesson___relatedContent___contentful_id'
  | 'lessons___metalesson___relatedContent___createdAt'
  | 'lessons___metalesson___relatedContent___updatedAt'
  | 'lessons___metalesson___relatedContent___node_locale'
  | 'lessons___metalesson___relatedContent___metalesson'
  | 'lessons___metalesson___relatedContent___customComplete'
  | 'lessons___metalesson___spaceId'
  | 'lessons___metalesson___contentful_id'
  | 'lessons___metalesson___createdAt'
  | 'lessons___metalesson___updatedAt'
  | 'lessons___metalesson___sys___revision'
  | 'lessons___metalesson___node_locale'
  | 'lessons___customComplete'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___id'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___parent___id'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___parent___children'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___children'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___children___id'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___children___children'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___content'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___contentDigest'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___description'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___ignoreType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___mediaType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___owner'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___internal___type'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___nodeType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___content'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___content___nodeType'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___content___content'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___lessonContent'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___fields___excerpt'
  | 'lessons___childContentfulLessonLessonContentRichTextNode___json'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___id'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___parent___id'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___parent___children'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___children'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___children___id'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___children___children'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___content'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___contentDigest'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___description'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___ignoreType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___mediaType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___owner'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___internal___type'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___content'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___content___content'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___content___nodeType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___nodeType'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___additionalInformation'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___fields___excerpt'
  | 'lessons___childContentfulLessonAdditionalInformationRichTextNode___json'
  | 'lessons___childContentfulLessonWeightsJsonNode___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___jetlag'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___duration'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___efficiency'
  | 'lessons___childContentfulLessonWeightsJsonNode___childContentfulLessonWeightsJsonNodeJson___consistency'
  | 'weekDescription___id'
  | 'weekDescription___parent___id'
  | 'weekDescription___parent___parent___id'
  | 'weekDescription___parent___parent___children'
  | 'weekDescription___parent___children'
  | 'weekDescription___parent___children___id'
  | 'weekDescription___parent___children___children'
  | 'weekDescription___parent___internal___content'
  | 'weekDescription___parent___internal___contentDigest'
  | 'weekDescription___parent___internal___description'
  | 'weekDescription___parent___internal___fieldOwners'
  | 'weekDescription___parent___internal___ignoreType'
  | 'weekDescription___parent___internal___mediaType'
  | 'weekDescription___parent___internal___owner'
  | 'weekDescription___parent___internal___type'
  | 'weekDescription___children'
  | 'weekDescription___children___id'
  | 'weekDescription___children___parent___id'
  | 'weekDescription___children___parent___children'
  | 'weekDescription___children___children'
  | 'weekDescription___children___children___id'
  | 'weekDescription___children___children___children'
  | 'weekDescription___children___internal___content'
  | 'weekDescription___children___internal___contentDigest'
  | 'weekDescription___children___internal___description'
  | 'weekDescription___children___internal___fieldOwners'
  | 'weekDescription___children___internal___ignoreType'
  | 'weekDescription___children___internal___mediaType'
  | 'weekDescription___children___internal___owner'
  | 'weekDescription___children___internal___type'
  | 'weekDescription___internal___content'
  | 'weekDescription___internal___contentDigest'
  | 'weekDescription___internal___description'
  | 'weekDescription___internal___fieldOwners'
  | 'weekDescription___internal___ignoreType'
  | 'weekDescription___internal___mediaType'
  | 'weekDescription___internal___owner'
  | 'weekDescription___internal___type'
  | 'weekDescription___nodeType'
  | 'weekDescription___content'
  | 'weekDescription___content___nodeType'
  | 'weekDescription___content___content'
  | 'weekDescription___content___content___nodeType'
  | 'weekDescription___content___content___value'
  | 'weekDescription___weekDescription'
  | 'weekDescription___fields___readingTime___text'
  | 'weekDescription___fields___readingTime___minutes'
  | 'weekDescription___fields___readingTime___time'
  | 'weekDescription___fields___readingTime___words'
  | 'weekDescription___fields___excerpt'
  | 'weekDescription___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulWeekWeekDescriptionRichTextNode___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___parent___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___parent___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___children___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___children___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___content'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___contentDigest'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___description'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___ignoreType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___mediaType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___owner'
  | 'childContentfulWeekWeekDescriptionRichTextNode___parent___internal___type'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___parent___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___parent___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___children___id'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___children___children'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___content'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___contentDigest'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___description'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___fieldOwners'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___ignoreType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___mediaType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___owner'
  | 'childContentfulWeekWeekDescriptionRichTextNode___children___internal___type'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___content'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___contentDigest'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___description'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___fieldOwners'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___ignoreType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___mediaType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___owner'
  | 'childContentfulWeekWeekDescriptionRichTextNode___internal___type'
  | 'childContentfulWeekWeekDescriptionRichTextNode___nodeType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___content'
  | 'childContentfulWeekWeekDescriptionRichTextNode___content___nodeType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___content___content'
  | 'childContentfulWeekWeekDescriptionRichTextNode___content___content___nodeType'
  | 'childContentfulWeekWeekDescriptionRichTextNode___content___content___value'
  | 'childContentfulWeekWeekDescriptionRichTextNode___weekDescription'
  | 'childContentfulWeekWeekDescriptionRichTextNode___fields___readingTime___text'
  | 'childContentfulWeekWeekDescriptionRichTextNode___fields___readingTime___minutes'
  | 'childContentfulWeekWeekDescriptionRichTextNode___fields___readingTime___time'
  | 'childContentfulWeekWeekDescriptionRichTextNode___fields___readingTime___words'
  | 'childContentfulWeekWeekDescriptionRichTextNode___fields___excerpt'
  | 'childContentfulWeekWeekDescriptionRichTextNode___json';

export type ContentfulWeekFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  weekName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  intro?: Maybe<StringQueryOperatorInput>;
  taskCount?: Maybe<IntQueryOperatorInput>;
  locked?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  coverPhoto?: Maybe<ContentfulAssetFilterInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  weekDescription?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWeekSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulWeekWeekDescriptionRichTextNode?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFilterInput>;
};

export type ContentfulWeekFilterListInput = {
  elemMatch?: Maybe<ContentfulWeekFilterInput>;
};

export type ContentfulWeekGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWeekEdge>;
  nodes: Array<ContentfulWeek>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWeekSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWeekFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWeekSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWeekSysContentType>;
};

export type ContentfulWeekSysContentType = {
  sys?: Maybe<ContentfulWeekSysContentTypeSys>;
};

export type ContentfulWeekSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWeekSysContentTypeSysFilterInput>;
};

export type ContentfulWeekSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulWeekSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWeekSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWeekSysContentTypeFilterInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulWeekWeekDescriptionRichTextNodeContent>>>;
  weekDescription?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFields>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWeekWeekDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulWeekWeekDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWeekWeekDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulWeekWeekDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulWeekWeekDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulWeekWeekDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWeekWeekDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulWeekWeekDescriptionRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulWeekWeekDescriptionRichTextNodeContentContent>>>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeContentContentFilterListInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulWeekWeekDescriptionRichTextNode>;
  node: ContentfulWeekWeekDescriptionRichTextNode;
  previous?: Maybe<ContentfulWeekWeekDescriptionRichTextNode>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeFields = {
  readingTime?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFieldsReadingTime>;
  excerpt?: Maybe<Scalars['String']>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'weekDescription'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'fields___excerpt'
  | 'json';

export type ContentfulWeekWeekDescriptionRichTextNodeFieldsFilterInput = {
  readingTime?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFieldsReadingTimeFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeContentFilterListInput>;
  weekDescription?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWeekWeekDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulWeekWeekDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWeekWeekDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWeekWeekDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DataJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  coaching?: Maybe<DataJsonCoaching>;
  about?: Maybe<DataJsonAbout>;
  authors?: Maybe<DataJsonAuthors>;
  for_you?: Maybe<DataJsonFor_You>;
  for_organizations?: Maybe<DataJsonFor_Organizations>;
  privacy?: Maybe<DataJsonPrivacy>;
  tags?: Maybe<DataJsonTags>;
  index?: Maybe<DataJsonIndex>;
  blog?: Maybe<DataJsonBlog>;
  terms?: Maybe<DataJsonTerms>;
  contact?: Maybe<DataJsonContact>;
};

export type DataJsonAbout = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  perks?: Maybe<Array<Maybe<DataJsonAboutPerks>>>;
};

export type DataJsonAboutFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  perks?: Maybe<DataJsonAboutPerksFilterListInput>;
};

export type DataJsonAboutPerks = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type DataJsonAboutPerksFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonAboutPerksFilterListInput = {
  elemMatch?: Maybe<DataJsonAboutPerksFilterInput>;
};

export type DataJsonAuthors = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonAuthorsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonBlog = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonBlogFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonCoaching = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonCoachingFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DataJsonGroupConnection>;
};


export type DataJsonConnectionDistinctArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DataJsonFieldsEnum;
};

export type DataJsonContact = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonContactFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonEdge = {
  next?: Maybe<DataJson>;
  node: DataJson;
  previous?: Maybe<DataJson>;
};

export type DataJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'coaching___title'
  | 'coaching___description'
  | 'about___title'
  | 'about___description'
  | 'about___perks'
  | 'about___perks___title'
  | 'about___perks___text'
  | 'authors___title'
  | 'authors___description'
  | 'for_you___title'
  | 'for_you___description'
  | 'for_organizations___title'
  | 'for_organizations___description'
  | 'privacy___title'
  | 'privacy___description'
  | 'tags___title'
  | 'tags___description'
  | 'index___title'
  | 'index___description'
  | 'blog___title'
  | 'blog___description'
  | 'terms___title'
  | 'terms___description'
  | 'contact___title'
  | 'contact___description';

export type DataJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  coaching?: Maybe<DataJsonCoachingFilterInput>;
  about?: Maybe<DataJsonAboutFilterInput>;
  authors?: Maybe<DataJsonAuthorsFilterInput>;
  for_you?: Maybe<DataJsonFor_YouFilterInput>;
  for_organizations?: Maybe<DataJsonFor_OrganizationsFilterInput>;
  privacy?: Maybe<DataJsonPrivacyFilterInput>;
  tags?: Maybe<DataJsonTagsFilterInput>;
  index?: Maybe<DataJsonIndexFilterInput>;
  blog?: Maybe<DataJsonBlogFilterInput>;
  terms?: Maybe<DataJsonTermsFilterInput>;
  contact?: Maybe<DataJsonContactFilterInput>;
};

export type DataJsonFor_Organizations = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonFor_OrganizationsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonFor_You = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonFor_YouFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DataJsonIndex = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonIndexFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonPrivacy = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonPrivacyFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonSortInput = {
  fields?: Maybe<Array<Maybe<DataJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DataJsonTags = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonTagsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonTerms = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonTermsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  childPagesJson?: Maybe<PagesJson>;
  childDataJson?: Maybe<DataJson>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___slug'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___authorSlug'
  | 'childMarkdownRemark___frontmatter___author'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___absolutePath'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___relativePath'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___extension'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___size'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___prettySize'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___modifiedTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___accessTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___changeTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___birthTime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___root'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___dir'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___base'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ext'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___name'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___dev'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___mode'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___nlink'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___uid'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___gid'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___rdev'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ino'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___atimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___mtimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ctimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___atime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___mtime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___ctime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___birthtime'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___blksize'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___blocks'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___publicURL'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___id'
  | 'childMarkdownRemark___frontmatter___thumbnailBlog___children'
  | 'childMarkdownRemark___frontmatter___canonical'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'childPagesJson___id'
  | 'childPagesJson___parent___id'
  | 'childPagesJson___parent___parent___id'
  | 'childPagesJson___parent___parent___children'
  | 'childPagesJson___parent___children'
  | 'childPagesJson___parent___children___id'
  | 'childPagesJson___parent___children___children'
  | 'childPagesJson___parent___internal___content'
  | 'childPagesJson___parent___internal___contentDigest'
  | 'childPagesJson___parent___internal___description'
  | 'childPagesJson___parent___internal___fieldOwners'
  | 'childPagesJson___parent___internal___ignoreType'
  | 'childPagesJson___parent___internal___mediaType'
  | 'childPagesJson___parent___internal___owner'
  | 'childPagesJson___parent___internal___type'
  | 'childPagesJson___children'
  | 'childPagesJson___children___id'
  | 'childPagesJson___children___parent___id'
  | 'childPagesJson___children___parent___children'
  | 'childPagesJson___children___children'
  | 'childPagesJson___children___children___id'
  | 'childPagesJson___children___children___children'
  | 'childPagesJson___children___internal___content'
  | 'childPagesJson___children___internal___contentDigest'
  | 'childPagesJson___children___internal___description'
  | 'childPagesJson___children___internal___fieldOwners'
  | 'childPagesJson___children___internal___ignoreType'
  | 'childPagesJson___children___internal___mediaType'
  | 'childPagesJson___children___internal___owner'
  | 'childPagesJson___children___internal___type'
  | 'childPagesJson___internal___content'
  | 'childPagesJson___internal___contentDigest'
  | 'childPagesJson___internal___description'
  | 'childPagesJson___internal___fieldOwners'
  | 'childPagesJson___internal___ignoreType'
  | 'childPagesJson___internal___mediaType'
  | 'childPagesJson___internal___owner'
  | 'childPagesJson___internal___type'
  | 'childPagesJson___features'
  | 'childPagesJson___features___icon'
  | 'childPagesJson___features___title'
  | 'childPagesJson___features___text'
  | 'childDataJson___id'
  | 'childDataJson___parent___id'
  | 'childDataJson___parent___parent___id'
  | 'childDataJson___parent___parent___children'
  | 'childDataJson___parent___children'
  | 'childDataJson___parent___children___id'
  | 'childDataJson___parent___children___children'
  | 'childDataJson___parent___internal___content'
  | 'childDataJson___parent___internal___contentDigest'
  | 'childDataJson___parent___internal___description'
  | 'childDataJson___parent___internal___fieldOwners'
  | 'childDataJson___parent___internal___ignoreType'
  | 'childDataJson___parent___internal___mediaType'
  | 'childDataJson___parent___internal___owner'
  | 'childDataJson___parent___internal___type'
  | 'childDataJson___children'
  | 'childDataJson___children___id'
  | 'childDataJson___children___parent___id'
  | 'childDataJson___children___parent___children'
  | 'childDataJson___children___children'
  | 'childDataJson___children___children___id'
  | 'childDataJson___children___children___children'
  | 'childDataJson___children___internal___content'
  | 'childDataJson___children___internal___contentDigest'
  | 'childDataJson___children___internal___description'
  | 'childDataJson___children___internal___fieldOwners'
  | 'childDataJson___children___internal___ignoreType'
  | 'childDataJson___children___internal___mediaType'
  | 'childDataJson___children___internal___owner'
  | 'childDataJson___children___internal___type'
  | 'childDataJson___internal___content'
  | 'childDataJson___internal___contentDigest'
  | 'childDataJson___internal___description'
  | 'childDataJson___internal___fieldOwners'
  | 'childDataJson___internal___ignoreType'
  | 'childDataJson___internal___mediaType'
  | 'childDataJson___internal___owner'
  | 'childDataJson___internal___type'
  | 'childDataJson___coaching___title'
  | 'childDataJson___coaching___description'
  | 'childDataJson___about___title'
  | 'childDataJson___about___description'
  | 'childDataJson___about___perks'
  | 'childDataJson___about___perks___title'
  | 'childDataJson___about___perks___text'
  | 'childDataJson___authors___title'
  | 'childDataJson___authors___description'
  | 'childDataJson___for_you___title'
  | 'childDataJson___for_you___description'
  | 'childDataJson___for_organizations___title'
  | 'childDataJson___for_organizations___description'
  | 'childDataJson___privacy___title'
  | 'childDataJson___privacy___description'
  | 'childDataJson___tags___title'
  | 'childDataJson___tags___description'
  | 'childDataJson___index___title'
  | 'childDataJson___index___description'
  | 'childDataJson___blog___title'
  | 'childDataJson___blog___description'
  | 'childDataJson___terms___title'
  | 'childDataJson___terms___description'
  | 'childDataJson___contact___title'
  | 'childDataJson___contact___description';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childPagesJson?: Maybe<PagesJsonFilterInput>;
  childDataJson?: Maybe<DataJsonFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___slug'
  | 'frontmatter___date'
  | 'frontmatter___authorSlug'
  | 'frontmatter___author'
  | 'frontmatter___tags'
  | 'frontmatter___thumbnailBlog___sourceInstanceName'
  | 'frontmatter___thumbnailBlog___absolutePath'
  | 'frontmatter___thumbnailBlog___relativePath'
  | 'frontmatter___thumbnailBlog___extension'
  | 'frontmatter___thumbnailBlog___size'
  | 'frontmatter___thumbnailBlog___prettySize'
  | 'frontmatter___thumbnailBlog___modifiedTime'
  | 'frontmatter___thumbnailBlog___accessTime'
  | 'frontmatter___thumbnailBlog___changeTime'
  | 'frontmatter___thumbnailBlog___birthTime'
  | 'frontmatter___thumbnailBlog___root'
  | 'frontmatter___thumbnailBlog___dir'
  | 'frontmatter___thumbnailBlog___base'
  | 'frontmatter___thumbnailBlog___ext'
  | 'frontmatter___thumbnailBlog___name'
  | 'frontmatter___thumbnailBlog___relativeDirectory'
  | 'frontmatter___thumbnailBlog___dev'
  | 'frontmatter___thumbnailBlog___mode'
  | 'frontmatter___thumbnailBlog___nlink'
  | 'frontmatter___thumbnailBlog___uid'
  | 'frontmatter___thumbnailBlog___gid'
  | 'frontmatter___thumbnailBlog___rdev'
  | 'frontmatter___thumbnailBlog___ino'
  | 'frontmatter___thumbnailBlog___atimeMs'
  | 'frontmatter___thumbnailBlog___mtimeMs'
  | 'frontmatter___thumbnailBlog___ctimeMs'
  | 'frontmatter___thumbnailBlog___atime'
  | 'frontmatter___thumbnailBlog___mtime'
  | 'frontmatter___thumbnailBlog___ctime'
  | 'frontmatter___thumbnailBlog___birthtime'
  | 'frontmatter___thumbnailBlog___birthtimeMs'
  | 'frontmatter___thumbnailBlog___blksize'
  | 'frontmatter___thumbnailBlog___blocks'
  | 'frontmatter___thumbnailBlog___publicURL'
  | 'frontmatter___thumbnailBlog___childImageSharp___id'
  | 'frontmatter___thumbnailBlog___childImageSharp___children'
  | 'frontmatter___thumbnailBlog___id'
  | 'frontmatter___thumbnailBlog___parent___id'
  | 'frontmatter___thumbnailBlog___parent___children'
  | 'frontmatter___thumbnailBlog___children'
  | 'frontmatter___thumbnailBlog___children___id'
  | 'frontmatter___thumbnailBlog___children___children'
  | 'frontmatter___thumbnailBlog___internal___content'
  | 'frontmatter___thumbnailBlog___internal___contentDigest'
  | 'frontmatter___thumbnailBlog___internal___description'
  | 'frontmatter___thumbnailBlog___internal___fieldOwners'
  | 'frontmatter___thumbnailBlog___internal___ignoreType'
  | 'frontmatter___thumbnailBlog___internal___mediaType'
  | 'frontmatter___thumbnailBlog___internal___owner'
  | 'frontmatter___thumbnailBlog___internal___type'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___id'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___excerpt'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___html'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___htmlAst'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___excerptAst'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___headings'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___timeToRead'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___tableOfContents'
  | 'frontmatter___thumbnailBlog___childMarkdownRemark___children'
  | 'frontmatter___thumbnailBlog___childPagesJson___id'
  | 'frontmatter___thumbnailBlog___childPagesJson___children'
  | 'frontmatter___thumbnailBlog___childPagesJson___features'
  | 'frontmatter___thumbnailBlog___childDataJson___id'
  | 'frontmatter___thumbnailBlog___childDataJson___children'
  | 'frontmatter___canonical'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  authorSlug?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnailBlog?: Maybe<File>;
  canonical?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  authorSlug?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  thumbnailBlog?: Maybe<FileFilterInput>;
  canonical?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PagesJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  features?: Maybe<Array<Maybe<PagesJsonFeatures>>>;
};

export type PagesJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PagesJsonEdge>;
  nodes: Array<PagesJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PagesJsonGroupConnection>;
};


export type PagesJsonConnectionDistinctArgs = {
  field: PagesJsonFieldsEnum;
};


export type PagesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PagesJsonFieldsEnum;
};

export type PagesJsonEdge = {
  next?: Maybe<PagesJson>;
  node: PagesJson;
  previous?: Maybe<PagesJson>;
};

export type PagesJsonFeatures = {
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PagesJsonFeaturesFilterInput = {
  icon?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PagesJsonFeaturesFilterListInput = {
  elemMatch?: Maybe<PagesJsonFeaturesFilterInput>;
};

export type PagesJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'features'
  | 'features___icon'
  | 'features___title'
  | 'features___text';

export type PagesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  features?: Maybe<PagesJsonFeaturesFilterListInput>;
};

export type PagesJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PagesJsonEdge>;
  nodes: Array<PagesJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PagesJsonSortInput = {
  fields?: Maybe<Array<Maybe<PagesJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulMetalesson?: Maybe<ContentfulMetalesson>;
  allContentfulMetalesson: ContentfulMetalessonConnection;
  contentfulAnswerTimePicker?: Maybe<ContentfulAnswerTimePicker>;
  allContentfulAnswerTimePicker: ContentfulAnswerTimePickerConnection;
  contentfulResultScoreRangeJsonNodeJson?: Maybe<ContentfulResultScoreRangeJsonNodeJson>;
  allContentfulResultScoreRangeJsonNodeJson: ContentfulResultScoreRangeJsonNodeJsonConnection;
  contentfulResultDetailsRichTextNode?: Maybe<ContentfulResultDetailsRichTextNode>;
  allContentfulResultDetailsRichTextNode: ContentfulResultDetailsRichTextNodeConnection;
  contentfulResultDescriptionRichTextNode?: Maybe<ContentfulResultDescriptionRichTextNode>;
  allContentfulResultDescriptionRichTextNode: ContentfulResultDescriptionRichTextNodeConnection;
  contentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNode>;
  allContentfulResultScoreRangeJsonNode: ContentfulResultScoreRangeJsonNodeConnection;
  contentfulResult?: Maybe<ContentfulResult>;
  allContentfulResult: ContentfulResultConnection;
  contentfulAnswerSlider?: Maybe<ContentfulAnswerSlider>;
  allContentfulAnswerSlider: ContentfulAnswerSliderConnection;
  contentfulAnswer?: Maybe<ContentfulAnswer>;
  allContentfulAnswer: ContentfulAnswerConnection;
  contentfulQuestionnaireDescriptionRichTextNode?: Maybe<ContentfulQuestionnaireDescriptionRichTextNode>;
  allContentfulQuestionnaireDescriptionRichTextNode: ContentfulQuestionnaireDescriptionRichTextNodeConnection;
  contentfulQuestionnaire?: Maybe<ContentfulQuestionnaire>;
  allContentfulQuestionnaire: ContentfulQuestionnaireConnection;
  contentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNode>;
  allContentfulQuestionQuestionTextNode: ContentfulQuestionQuestionTextNodeConnection;
  contentfulQuestion?: Maybe<ContentfulQuestion>;
  allContentfulQuestion: ContentfulQuestionConnection;
  contentfulSectionDescriptionRichTextNode?: Maybe<ContentfulSectionDescriptionRichTextNode>;
  allContentfulSectionDescriptionRichTextNode: ContentfulSectionDescriptionRichTextNodeConnection;
  contentfulSection?: Maybe<ContentfulSection>;
  allContentfulSection: ContentfulSectionConnection;
  contentfulHabitDescriptionRichTextNode?: Maybe<ContentfulHabitDescriptionRichTextNode>;
  allContentfulHabitDescriptionRichTextNode: ContentfulHabitDescriptionRichTextNodeConnection;
  contentfulHabit?: Maybe<ContentfulHabit>;
  allContentfulHabit: ContentfulHabitConnection;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  allContentfulAuthor: ContentfulAuthorConnection;
  contentfulLessonWeightsJsonNodeJson?: Maybe<ContentfulLessonWeightsJsonNodeJson>;
  allContentfulLessonWeightsJsonNodeJson: ContentfulLessonWeightsJsonNodeJsonConnection;
  contentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNode>;
  allContentfulLessonWeightsJsonNode: ContentfulLessonWeightsJsonNodeConnection;
  contentfulLessonAdditionalInformationRichTextNode?: Maybe<ContentfulLessonAdditionalInformationRichTextNode>;
  allContentfulLessonAdditionalInformationRichTextNode: ContentfulLessonAdditionalInformationRichTextNodeConnection;
  contentfulLessonLessonContentRichTextNode?: Maybe<ContentfulLessonLessonContentRichTextNode>;
  allContentfulLessonLessonContentRichTextNode: ContentfulLessonLessonContentRichTextNodeConnection;
  contentfulLesson?: Maybe<ContentfulLesson>;
  allContentfulLesson: ContentfulLessonConnection;
  contentfulWeekWeekDescriptionRichTextNode?: Maybe<ContentfulWeekWeekDescriptionRichTextNode>;
  allContentfulWeekWeekDescriptionRichTextNode: ContentfulWeekWeekDescriptionRichTextNodeConnection;
  contentfulWeek?: Maybe<ContentfulWeek>;
  allContentfulWeek: ContentfulWeekConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  dataJson?: Maybe<DataJson>;
  allDataJson: DataJsonConnection;
  pagesJson?: Maybe<PagesJson>;
  allPagesJson: PagesJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childPagesJson?: Maybe<PagesJsonFilterInput>;
  childDataJson?: Maybe<DataJsonFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMetalessonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  relatedContent?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMetalessonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulMetalessonArgs = {
  filter?: Maybe<ContentfulMetalessonFilterInput>;
  sort?: Maybe<ContentfulMetalessonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnswerTimePickerArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isTimePicker?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerTimePickerSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAnswerTimePickerArgs = {
  filter?: Maybe<ContentfulAnswerTimePickerFilterInput>;
  sort?: Maybe<ContentfulAnswerTimePickerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultScoreRangeJsonNodeJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lowEnd?: Maybe<IntQueryOperatorInput>;
  highEnd?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllContentfulResultScoreRangeJsonNodeJsonArgs = {
  filter?: Maybe<ContentfulResultScoreRangeJsonNodeJsonFilterInput>;
  sort?: Maybe<ContentfulResultScoreRangeJsonNodeJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultDetailsRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulResultDetailsRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulResultDetailsRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulResultDetailsRichTextNodeArgs = {
  filter?: Maybe<ContentfulResultDetailsRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulResultDetailsRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulResultDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulResultDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulResultDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulResultDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulResultDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultScoreRangeJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lowEnd?: Maybe<IntQueryOperatorInput>;
  highEnd?: Maybe<IntQueryOperatorInput>;
  childContentfulResultScoreRangeJsonNodeJson?: Maybe<ContentfulResultScoreRangeJsonNodeJsonFilterInput>;
};


export type QueryAllContentfulResultScoreRangeJsonNodeArgs = {
  filter?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  sort?: Maybe<ContentfulResultScoreRangeJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  scoreRange?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  description?: Maybe<ContentfulResultDescriptionRichTextNodeFilterInput>;
  details?: Maybe<ContentfulResultDetailsRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulResultSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  childContentfulResultDescriptionRichTextNode?: Maybe<ContentfulResultDescriptionRichTextNodeFilterInput>;
  childContentfulResultDetailsRichTextNode?: Maybe<ContentfulResultDetailsRichTextNodeFilterInput>;
};


export type QueryAllContentfulResultArgs = {
  filter?: Maybe<ContentfulResultFilterInput>;
  sort?: Maybe<ContentfulResultSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnswerSliderArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isSlider?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSliderSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAnswerSliderArgs = {
  filter?: Maybe<ContentfulAnswerSliderFilterInput>;
  sort?: Maybe<ContentfulAnswerSliderSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnswerArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  score?: Maybe<IntQueryOperatorInput>;
  question?: Maybe<ContentfulQuestionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAnswerArgs = {
  filter?: Maybe<ContentfulAnswerFilterInput>;
  sort?: Maybe<ContentfulAnswerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionnaireDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulQuestionnaireDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionnaireArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  questions?: Maybe<ContentfulQuestionFilterListInput>;
  results?: Maybe<ContentfulResultFilterListInput>;
  description?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionnaireSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulQuestionnaireDescriptionRichTextNode?: Maybe<ContentfulQuestionnaireDescriptionRichTextNodeFilterInput>;
};


export type QueryAllContentfulQuestionnaireArgs = {
  filter?: Maybe<ContentfulQuestionnaireFilterInput>;
  sort?: Maybe<ContentfulQuestionnaireSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionQuestionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  question?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulQuestionQuestionTextNodeArgs = {
  filter?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  sort?: Maybe<ContentfulQuestionQuestionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  answers?: Maybe<ContentfulAnswerFilterListInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  question?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
};


export type QueryAllContentfulQuestionArgs = {
  filter?: Maybe<ContentfulQuestionFilterInput>;
  sort?: Maybe<ContentfulQuestionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulSectionDescriptionRichTextNodeContentFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulSectionDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulSectionDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulSectionDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulSectionDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  description?: Maybe<ContentfulSectionDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulSectionDescriptionRichTextNode?: Maybe<ContentfulSectionDescriptionRichTextNodeFilterInput>;
};


export type QueryAllContentfulSectionArgs = {
  filter?: Maybe<ContentfulSectionFilterInput>;
  sort?: Maybe<ContentfulSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHabitDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulHabitDescriptionRichTextNodeContentFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulHabitDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulHabitDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulHabitDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulHabitDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHabitArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  period?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  description?: Maybe<ContentfulHabitDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHabitSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHabitDescriptionRichTextNode?: Maybe<ContentfulHabitDescriptionRichTextNodeFilterInput>;
};


export type QueryAllContentfulHabitArgs = {
  filter?: Maybe<ContentfulHabitFilterInput>;
  sort?: Maybe<ContentfulHabitSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  credentials?: Maybe<StringQueryOperatorInput>;
  avatar?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
};


export type QueryAllContentfulAuthorArgs = {
  filter?: Maybe<ContentfulAuthorFilterInput>;
  sort?: Maybe<ContentfulAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonWeightsJsonNodeJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jetlag?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  efficiency?: Maybe<IntQueryOperatorInput>;
  consistency?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllContentfulLessonWeightsJsonNodeJsonArgs = {
  filter?: Maybe<ContentfulLessonWeightsJsonNodeJsonFilterInput>;
  sort?: Maybe<ContentfulLessonWeightsJsonNodeJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonWeightsJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jetlag?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  efficiency?: Maybe<IntQueryOperatorInput>;
  consistency?: Maybe<IntQueryOperatorInput>;
  childContentfulLessonWeightsJsonNodeJson?: Maybe<ContentfulLessonWeightsJsonNodeJsonFilterInput>;
};


export type QueryAllContentfulLessonWeightsJsonNodeArgs = {
  filter?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  sort?: Maybe<ContentfulLessonWeightsJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonAdditionalInformationRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  additionalInformation?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulLessonAdditionalInformationRichTextNodeArgs = {
  filter?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonLessonContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulLessonLessonContentRichTextNodeContentFilterListInput>;
  lessonContent?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulLessonLessonContentRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulLessonLessonContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulLessonLessonContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulLessonLessonContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lessonName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  stage?: Maybe<IntQueryOperatorInput>;
  authorCard?: Maybe<ContentfulAuthorFilterListInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  section?: Maybe<ContentfulSectionFilterInput>;
  habit?: Maybe<ContentfulHabitFilterListInput>;
  week?: Maybe<ContentfulWeekFilterListInput>;
  lessonContent?: Maybe<ContentfulLessonLessonContentRichTextNodeFilterInput>;
  additionalInformation?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFilterInput>;
  weights?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLessonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  metalesson?: Maybe<ContentfulMetalessonFilterListInput>;
  customComplete?: Maybe<StringQueryOperatorInput>;
  childContentfulLessonLessonContentRichTextNode?: Maybe<ContentfulLessonLessonContentRichTextNodeFilterInput>;
  childContentfulLessonAdditionalInformationRichTextNode?: Maybe<ContentfulLessonAdditionalInformationRichTextNodeFilterInput>;
  childContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
};


export type QueryAllContentfulLessonArgs = {
  filter?: Maybe<ContentfulLessonFilterInput>;
  sort?: Maybe<ContentfulLessonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWeekWeekDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeContentFilterListInput>;
  weekDescription?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFieldsFilterInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulWeekWeekDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWeekArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  weekName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  intro?: Maybe<StringQueryOperatorInput>;
  taskCount?: Maybe<IntQueryOperatorInput>;
  locked?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  coverPhoto?: Maybe<ContentfulAssetFilterInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  weekDescription?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWeekSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulWeekWeekDescriptionRichTextNode?: Maybe<ContentfulWeekWeekDescriptionRichTextNodeFilterInput>;
};


export type QueryAllContentfulWeekArgs = {
  filter?: Maybe<ContentfulWeekFilterInput>;
  sort?: Maybe<ContentfulWeekSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDataJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  coaching?: Maybe<DataJsonCoachingFilterInput>;
  about?: Maybe<DataJsonAboutFilterInput>;
  authors?: Maybe<DataJsonAuthorsFilterInput>;
  for_you?: Maybe<DataJsonFor_YouFilterInput>;
  for_organizations?: Maybe<DataJsonFor_OrganizationsFilterInput>;
  privacy?: Maybe<DataJsonPrivacyFilterInput>;
  tags?: Maybe<DataJsonTagsFilterInput>;
  index?: Maybe<DataJsonIndexFilterInput>;
  blog?: Maybe<DataJsonBlogFilterInput>;
  terms?: Maybe<DataJsonTermsFilterInput>;
  contact?: Maybe<DataJsonContactFilterInput>;
};


export type QueryAllDataJsonArgs = {
  filter?: Maybe<DataJsonFilterInput>;
  sort?: Maybe<DataJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPagesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  features?: Maybe<PagesJsonFeaturesFilterListInput>;
};


export type QueryAllPagesJsonArgs = {
  filter?: Maybe<PagesJsonFilterInput>;
  sort?: Maybe<PagesJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  next?: Maybe<SitePageContextNext>;
  previous?: Maybe<SitePageContextPrevious>;
  author?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  langKey?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  next?: Maybe<SitePageContextNextFilterInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
  author?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  langKey?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNext = {
  fields?: Maybe<SitePageContextNextFields>;
  frontmatter?: Maybe<SitePageContextNextFrontmatter>;
};

export type SitePageContextNextFields = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFilterInput = {
  fields?: Maybe<SitePageContextNextFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>;
};

export type SitePageContextNextFrontmatter = {
  title?: Maybe<Scalars['String']>;
  authorSlug?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  authorSlug?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevious = {
  fields?: Maybe<SitePageContextPreviousFields>;
  frontmatter?: Maybe<SitePageContextPreviousFrontmatter>;
};

export type SitePageContextPreviousFields = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPreviousFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPreviousFilterInput = {
  fields?: Maybe<SitePageContextPreviousFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
};

export type SitePageContextPreviousFrontmatter = {
  title?: Maybe<Scalars['String']>;
  authorSlug?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SitePageContextPreviousFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  authorSlug?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___next___fields___slug'
  | 'context___next___frontmatter___title'
  | 'context___next___frontmatter___authorSlug'
  | 'context___next___frontmatter___author'
  | 'context___previous___fields___slug'
  | 'context___previous___frontmatter___title'
  | 'context___previous___frontmatter___authorSlug'
  | 'context___previous___frontmatter___author'
  | 'context___author'
  | 'context___slug'
  | 'context___tag'
  | 'context___locale'
  | 'context___langKey'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___wrapperStyle'
  | 'pluginCreator___pluginOptions___useMozJpeg'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___prefer_related_applications'
  | 'pluginCreator___pluginOptions___related_applications'
  | 'pluginCreator___pluginOptions___related_applications___platform'
  | 'pluginCreator___pluginOptions___related_applications___id'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___files'
  | 'pluginCreator___pluginOptions___publicPath'
  | 'pluginCreator___pluginOptions___dist'
  | 'pluginCreator___pluginOptions___optimize'
  | 'pluginCreator___pluginOptions___fonts___google'
  | 'pluginCreator___pluginOptions___formats'
  | 'pluginCreator___pluginOptions___useMinify'
  | 'pluginCreator___pluginOptions___usePreload'
  | 'pluginCreator___pluginOptions___usePreconnect'
  | 'pluginCreator___pluginOptions___endpoint'
  | 'pluginCreator___pluginOptions___id'
  | 'pluginCreator___pluginOptions___includeInDevelopment'
  | 'pluginCreator___pluginOptions___defaultDataLayer___type'
  | 'pluginCreator___pluginOptions___langKeyDefault'
  | 'pluginCreator___pluginOptions___useLangKeyLayout'
  | 'pluginCreator___pluginOptions___prefixDefault'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___wrapperStyle'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___wrapperStyle'
  | 'pluginOptions___useMozJpeg'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___prefer_related_applications'
  | 'pluginOptions___related_applications'
  | 'pluginOptions___related_applications___platform'
  | 'pluginOptions___related_applications___id'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___files'
  | 'pluginOptions___publicPath'
  | 'pluginOptions___dist'
  | 'pluginOptions___optimize'
  | 'pluginOptions___fonts___google'
  | 'pluginOptions___fonts___google___family'
  | 'pluginOptions___fonts___google___variants'
  | 'pluginOptions___fonts___google___fontDisplay'
  | 'pluginOptions___formats'
  | 'pluginOptions___useMinify'
  | 'pluginOptions___usePreload'
  | 'pluginOptions___usePreconnect'
  | 'pluginOptions___endpoint'
  | 'pluginOptions___id'
  | 'pluginOptions___includeInDevelopment'
  | 'pluginOptions___defaultDataLayer___type'
  | 'pluginOptions___defaultDataLayer___value___platform'
  | 'pluginOptions___langKeyDefault'
  | 'pluginOptions___useLangKeyLayout'
  | 'pluginOptions___prefixDefault'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  siteUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  useMozJpeg?: Maybe<Scalars['Boolean']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  prefer_related_applications?: Maybe<Scalars['Boolean']>;
  related_applications?: Maybe<Array<Maybe<SitePluginPluginOptionsRelated_Applications>>>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicPath?: Maybe<Scalars['String']>;
  dist?: Maybe<Scalars['String']>;
  optimize?: Maybe<Scalars['Boolean']>;
  fonts?: Maybe<SitePluginPluginOptionsFonts>;
  formats?: Maybe<Array<Maybe<Scalars['String']>>>;
  useMinify?: Maybe<Scalars['Boolean']>;
  usePreload?: Maybe<Scalars['Boolean']>;
  usePreconnect?: Maybe<Scalars['Boolean']>;
  endpoint?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  includeInDevelopment?: Maybe<Scalars['Boolean']>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayer>;
  langKeyDefault?: Maybe<Scalars['String']>;
  useLangKeyLayout?: Maybe<Scalars['Boolean']>;
  prefixDefault?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDefaultDataLayer = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValue>;
};

export type SitePluginPluginOptionsDefaultDataLayerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValueFilterInput>;
};

export type SitePluginPluginOptionsDefaultDataLayerValue = {
  platform?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultDataLayerValueFilterInput = {
  platform?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  useMozJpeg?: Maybe<BooleanQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  prefer_related_applications?: Maybe<BooleanQueryOperatorInput>;
  related_applications?: Maybe<SitePluginPluginOptionsRelated_ApplicationsFilterListInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  files?: Maybe<StringQueryOperatorInput>;
  publicPath?: Maybe<StringQueryOperatorInput>;
  dist?: Maybe<StringQueryOperatorInput>;
  optimize?: Maybe<BooleanQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  formats?: Maybe<StringQueryOperatorInput>;
  useMinify?: Maybe<BooleanQueryOperatorInput>;
  usePreload?: Maybe<BooleanQueryOperatorInput>;
  usePreconnect?: Maybe<BooleanQueryOperatorInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayerFilterInput>;
  langKeyDefault?: Maybe<StringQueryOperatorInput>;
  useLangKeyLayout?: Maybe<BooleanQueryOperatorInput>;
  prefixDefault?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

export type SitePluginPluginOptionsFontsGoogle = {
  family?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
  fontDisplay?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
  fontDisplay?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  wrapperStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRelated_Applications = {
  platform?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRelated_ApplicationsFilterInput = {
  platform?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRelated_ApplicationsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRelated_ApplicationsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allContentfulAuthor: { edges: Array<{ node: (
        Pick<ContentfulAuthor, 'id' | 'credentials' | 'name' | 'slug'>
        & { avatar?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>>, fluid?: Maybe<Pick<ContentfulFluid, 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>> }> }
      ) }> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { allContentfulAuthor: { edges: Array<{ node: (
        Pick<ContentfulAuthor, 'id' | 'name' | 'slug' | 'credentials'>
        & { avatar?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src' | 'srcSet'>>, fixed?: Maybe<Pick<ContentfulFixed, 'src'>> }>, lesson?: Maybe<Array<Maybe<Pick<ContentfulLesson, 'id'>>>> }
      ) }> }, allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'authorSlug'>> }
      ) }> } };

export type TagQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TagQueryQuery = { tags: { group: Array<(
      Pick<MarkdownRemarkGroupConnection, 'totalCount'>
      & { tag: MarkdownRemarkGroupConnection['fieldValue'] }
    )> } };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { frontmatter?: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'date' | 'author' | 'title' | 'slug' | 'tags'>
          & { thumbnailBlog?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
        )> }
      ) }> } };

export type FeaturesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturesQueryQuery = { forYou?: Maybe<{ features?: Maybe<Array<Maybe<Pick<PagesJsonFeatures, 'icon' | 'text' | 'title'>>>> }> };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { mediuutiset?: Maybe<Pick<File, 'publicURL'>>, talouselama?: Maybe<Pick<File, 'publicURL'>>, techcrunch?: Maybe<Pick<File, 'publicURL'>>, apple?: Maybe<Pick<File, 'publicURL'>>, android?: Maybe<Pick<File, 'publicURL'>> };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { logo?: Maybe<Pick<File, 'publicURL'>> };

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = { apple?: Maybe<Pick<File, 'publicURL'>>, android?: Maybe<Pick<File, 'publicURL'>> };

export type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_7_Query = { cover?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_8_Query = { allContentfulLessonEN: { edges: Array<{ node: (
        Pick<ContentfulLesson, 'slug' | 'lessonName'>
        & { authorCard?: Maybe<Array<Maybe<Pick<ContentfulAuthor, 'name'>>>>, cover?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }> }
      ) }> } };

export type NewsLetterQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsLetterQueryQuery = { newsletter?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type NotFoundPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NotFoundPageQueryQuery = { notFoundMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }> };

export type AboutPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQueryQuery = { allDataJson: { nodes: Array<{ about?: Maybe<(
        Pick<DataJsonAbout, 'title' | 'description'>
        & { perks?: Maybe<Array<Maybe<Pick<DataJsonAboutPerks, 'title' | 'text'>>>> }
      )> }> }, contactMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, team_illustration?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, eeva?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, perttu?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, pietari?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, anu?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, kayla?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, liisa?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, miska?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, chinh?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type AuthorsPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsPageQueryQuery = { coachingMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allDataJson: { nodes: Array<{ authors?: Maybe<Pick<DataJsonAuthors, 'title' | 'description'>> }> } };

export type BlogPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPageQueryQuery = { allDataJson: { nodes: Array<{ blog?: Maybe<Pick<DataJsonBlog, 'title' | 'description'>> }> }, blogMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { frontmatter?: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'date' | 'author' | 'title' | 'slug' | 'tags'>
          & { thumbnailBlog?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> }
        )> }
      ) }> }, tags: { group: Array<(
      Pick<MarkdownRemarkGroupConnection, 'totalCount'>
      & { tag: MarkdownRemarkGroupConnection['fieldValue'] }
    )> } };

export type CoachingPageQueryFiQueryVariables = Exact<{ [key: string]: never; }>;


export type CoachingPageQueryFiQuery = { coachingMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allDataJson: { nodes: Array<{ coaching?: Maybe<Pick<DataJsonCoaching, 'title' | 'description'>> }> }, allContentfulWeek: { edges: Array<{ node: (
        Pick<ContentfulWeek, 'id' | 'duration' | 'intro' | 'weekName' | 'taskCount' | 'slug' | 'order'>
        & { coverPhoto?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }>, lessons?: Maybe<Array<Maybe<(
          Pick<ContentfulLesson, 'lessonName' | 'slug'>
          & { habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'id'>>>> }
        )>>> }
      ) }> } };

export type CoachingPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CoachingPageQueryQuery = { coachingMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allDataJson: { nodes: Array<{ coaching?: Maybe<Pick<DataJsonCoaching, 'title' | 'description'>> }> }, allContentfulWeek: { edges: Array<{ node: (
        Pick<ContentfulWeek, 'id' | 'duration' | 'intro' | 'weekName' | 'taskCount' | 'slug' | 'order'>
        & { coverPhoto?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }>, lessons?: Maybe<Array<Maybe<(
          Pick<ContentfulLesson, 'lessonName' | 'slug'>
          & { habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'id'>>>> }
        )>>> }
      ) }> }, allContentfulAuthor: { edges: Array<{ node: (
        Pick<ContentfulAuthor, 'id' | 'name' | 'slug' | 'credentials'>
        & { avatar?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src' | 'srcSet'>>, fixed?: Maybe<Pick<ContentfulFixed, 'src'>> }>, lesson?: Maybe<Array<Maybe<Pick<ContentfulLesson, 'id'>>>> }
      ) }> }, allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'authorSlug'>> }
      ) }> } };

export type ContactPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQueryQuery = { contactMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ contact?: Maybe<Pick<DataJsonContact, 'title' | 'description'>> }> } };

export type ForOrganizationsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ForOrganizationsQueryQuery = { forOrganizationsMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ for_organizations?: Maybe<Pick<DataJsonFor_Organizations, 'title' | 'description'>> }> } };

export type ForYouPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ForYouPageQueryQuery = { forYouMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ for_you?: Maybe<Pick<DataJsonFor_You, 'title' | 'description'>> }> } };

export type IndexPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQueryQuery = { indexMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ index?: Maybe<Pick<DataJsonIndex, 'title' | 'description'>> }> }, cover?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, datasources?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, lessons?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }>, data?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_NoBase64Fragment> }> }> };

export type PrivacyPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivacyPageQueryQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'html'>
        & { frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'title'>> }
      ) }> }, privacyMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ privacy?: Maybe<Pick<DataJsonPrivacy, 'title' | 'description'>> }> } };

export type TagsPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsPageQueryQuery = { tagsMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ tags?: Maybe<Pick<DataJsonTags, 'title' | 'description'>> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allMarkdownRemark: { group: Array<(
      Pick<MarkdownRemarkGroupConnection, 'totalCount'>
      & { tag: MarkdownRemarkGroupConnection['fieldValue'] }
    )> } };

export type TermsPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TermsPageQueryQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'html'>
        & { frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'title'>> }
      ) }> }, termsMeta?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment> }> }>, allDataJson: { nodes: Array<{ terms?: Maybe<Pick<DataJsonTerms, 'title' | 'description'>> }> } };

export type AuthorBySlugFiQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AuthorBySlugFiQuery = { contentfulAuthor?: Maybe<(
    Pick<ContentfulAuthor, 'name' | 'slug'>
    & { lesson?: Maybe<Array<Maybe<Pick<ContentfulLesson, 'lessonName'>>>>, avatar?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'srcSetWebp'>> }> }
  )> };

export type AuthorBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AuthorBySlugQuery = { contentfulAuthor?: Maybe<(
    Pick<ContentfulAuthor, 'name' | 'slug' | 'credentials'>
    & { lesson?: Maybe<Array<Maybe<(
      Pick<ContentfulLesson, 'lessonName' | 'slug'>
      & { week?: Maybe<Array<Maybe<Pick<ContentfulWeek, 'weekName' | 'slug'>>>>, habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'title'>>>>, lessonContent?: Maybe<{ fields?: Maybe<{ readingTime?: Maybe<Pick<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime, 'text' | 'minutes'>> }> }> }
    )>>>, avatar?: Maybe<{ resize?: Maybe<Pick<ContentfulResize, 'src'>>, fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }> }
  )> };

export type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  author: Scalars['String'];
}>;


export type BlogPostBySlugQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'author'>> }>, markdownRemark?: Maybe<(
    Pick<MarkdownRemark, 'id' | 'excerpt' | 'html'>
    & { fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'slug' | 'tags' | 'author' | 'canonical'>
      & { thumbnailBlog?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_NoBase64Fragment>, fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
    )> }
  )>, contentfulAuthor?: Maybe<(
    Pick<ContentfulAuthor, 'credentials' | 'name' | 'slug'>
    & { avatar?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>>, fluid?: Maybe<Pick<ContentfulFluid, 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>> }> }
  )> };

export type HabitByIdFiQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type HabitByIdFiQuery = { contentfulHabit?: Maybe<(
    Pick<ContentfulHabit, 'slug' | 'id' | 'period' | 'title' | 'updatedAt' | 'createdAt'>
    & { lesson?: Maybe<Array<Maybe<(
      Pick<ContentfulLesson, 'lessonName' | 'slug'>
      & { habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'title' | 'slug' | 'period'>>>>, week?: Maybe<Array<Maybe<Pick<ContentfulWeek, 'slug' | 'weekName'>>>> }
    )>>>, childContentfulHabitDescriptionRichTextNode?: Maybe<(
      Pick<ContentfulHabitDescriptionRichTextNode, 'json'>
      & { fields?: Maybe<Pick<ContentfulHabitDescriptionRichTextNodeFields, 'excerpt'>> }
    )> }
  )> };

export type HabitByIdQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type HabitByIdQuery = { contentfulHabit?: Maybe<(
    Pick<ContentfulHabit, 'slug' | 'id' | 'period' | 'title' | 'updatedAt' | 'createdAt'>
    & { lesson?: Maybe<Array<Maybe<(
      Pick<ContentfulLesson, 'lessonName' | 'slug'>
      & { habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'title' | 'slug' | 'period'>>>>, week?: Maybe<Array<Maybe<Pick<ContentfulWeek, 'slug' | 'weekName'>>>> }
    )>>>, childContentfulHabitDescriptionRichTextNode?: Maybe<(
      Pick<ContentfulHabitDescriptionRichTextNode, 'json'>
      & { fields?: Maybe<Pick<ContentfulHabitDescriptionRichTextNodeFields, 'excerpt'>> }
    )> }
  )> };

export type LessonByIdFiQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type LessonByIdFiQuery = { contentfulLesson?: Maybe<(
    Pick<ContentfulLesson, 'lessonName' | 'slug' | 'updatedAt' | 'createdAt'>
    & { habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'title' | 'period' | 'slug'>>>>, authorCard?: Maybe<Array<Maybe<(
      Pick<ContentfulAuthor, 'credentials' | 'slug' | 'name'>
      & { avatar?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
    )>>>, cover?: Maybe<{ resize?: Maybe<Pick<ContentfulResize, 'src'>>, fluid?: Maybe<Pick<ContentfulFluid, 'src'>>, fixed?: Maybe<Pick<ContentfulFixed, 'src'>> }>, lessonContent?: Maybe<(
      Pick<ContentfulLessonLessonContentRichTextNode, 'json'>
      & { fields?: Maybe<(
        Pick<ContentfulLessonLessonContentRichTextNodeFields, 'excerpt'>
        & { readingTime?: Maybe<Pick<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime, 'minutes' | 'text' | 'time' | 'words'>> }
      )> }
    )>, additionalInformation?: Maybe<Pick<ContentfulLessonAdditionalInformationRichTextNode, 'json'>>, week?: Maybe<Array<Maybe<Pick<ContentfulWeek, 'slug'>>>> }
  )> };

export type LessonByIdQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type LessonByIdQuery = { contentfulLesson?: Maybe<(
    Pick<ContentfulLesson, 'lessonName' | 'slug' | 'updatedAt' | 'createdAt'>
    & { habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'title' | 'period' | 'slug'>>>>, authorCard?: Maybe<Array<Maybe<(
      Pick<ContentfulAuthor, 'credentials' | 'name' | 'slug'>
      & { avatar?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>> }> }
    )>>>, cover?: Maybe<{ resize?: Maybe<Pick<ContentfulResize, 'src'>>, fluid?: Maybe<Pick<ContentfulFluid, 'src'>>, fixed?: Maybe<Pick<ContentfulFixed, 'src'>> }>, lessonContent?: Maybe<(
      Pick<ContentfulLessonLessonContentRichTextNode, 'json'>
      & { fields?: Maybe<(
        Pick<ContentfulLessonLessonContentRichTextNodeFields, 'excerpt'>
        & { readingTime?: Maybe<Pick<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime, 'minutes' | 'text' | 'time' | 'words'>> }
      )> }
    )>, additionalInformation?: Maybe<Pick<ContentfulLessonAdditionalInformationRichTextNode, 'json'>>, week?: Maybe<Array<Maybe<Pick<ContentfulWeek, 'slug'>>>> }
  )> };

export type QuestionByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QuestionByIdQuery = { allContentfulQuestionnaire: { edges: Array<{ node: (
        Pick<ContentfulQuestionnaire, 'id' | 'title'>
        & { questions?: Maybe<Array<Maybe<(
          Pick<ContentfulQuestion, 'id'>
          & { question?: Maybe<Pick<ContentfulQuestionQuestionTextNode, 'question'>>, answers?: Maybe<Array<Maybe<Pick<ContentfulAnswer, 'id' | 'title' | 'score'>>>> }
        )>>> }
      ) }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type TagsQueryVariables = Exact<{
  tag?: Maybe<Scalars['String']>;
}>;


export type TagsQuery = { allMarkdownRemark: (
    Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<{ node: (
        Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter?: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'date' | 'author' | 'title' | 'slug' | 'tags'>
          & { thumbnailBlog?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> }
        )> }
      ) }> }
  ) };

export type WeekByIdFiQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type WeekByIdFiQuery = { contentfulWeek?: Maybe<(
    Pick<ContentfulWeek, 'id' | 'updatedAt' | 'createdAt' | 'taskCount' | 'weekName'>
    & { weekDescription?: Maybe<Pick<ContentfulWeekWeekDescriptionRichTextNode, 'json'>>, coverPhoto?: Maybe<(
      Pick<ContentfulAsset, 'description'>
      & { fluid?: Maybe<Pick<ContentfulFluid, 'src'>>, fixed?: Maybe<Pick<ContentfulFixed, 'src'>>, file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )>, lessons?: Maybe<Array<Maybe<(
      Pick<ContentfulLesson, 'id' | 'lessonName' | 'slug'>
      & { section?: Maybe<(
        Pick<ContentfulSection, 'title'>
        & { description?: Maybe<Pick<ContentfulSectionDescriptionRichTextNode, 'json'>> }
      )>, lessonContent?: Maybe<{ fields?: Maybe<{ readingTime?: Maybe<Pick<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime, 'text' | 'minutes'>> }> }>, habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'slug' | 'title'>>>> }
    )>>> }
  )> };

export type WeekByIdQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type WeekByIdQuery = { contentfulWeek?: Maybe<(
    Pick<ContentfulWeek, 'id' | 'updatedAt' | 'createdAt' | 'taskCount' | 'weekName'>
    & { weekDescription?: Maybe<Pick<ContentfulWeekWeekDescriptionRichTextNode, 'json'>>, coverPhoto?: Maybe<(
      Pick<ContentfulAsset, 'description'>
      & { fluid?: Maybe<Pick<ContentfulFluid, 'src'>>, fixed?: Maybe<Pick<ContentfulFixed, 'src'>>, file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )>, lessons?: Maybe<Array<Maybe<(
      Pick<ContentfulLesson, 'id' | 'lessonName' | 'slug'>
      & { section?: Maybe<(
        Pick<ContentfulSection, 'id' | 'title' | 'order'>
        & { description?: Maybe<Pick<ContentfulSectionDescriptionRichTextNode, 'json'>> }
      )>, habit?: Maybe<Array<Maybe<Pick<ContentfulHabit, 'title' | 'slug'>>>>, lessonContent?: Maybe<{ fields?: Maybe<{ readingTime?: Maybe<Pick<ContentfulLessonLessonContentRichTextNodeFieldsReadingTime, 'text' | 'minutes'>> }> }>, authorCard?: Maybe<Array<Maybe<(
        Pick<ContentfulAuthor, 'credentials' | 'name' | 'slug'>
        & { avatar?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
      )>>> }
    )>>> }
  )> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
