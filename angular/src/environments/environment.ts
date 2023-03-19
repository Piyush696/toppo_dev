// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBase: 'api',
  // apiBase2: 'topicapi2',

  // END-POINTS
  adminEndpoint: 'admin',
  profileEndpoint: 'admin/profile',
  vendorEndpoint: 'vendor',
  topicEndpoint: 'topics',
  searchEndpoint: 'search',
  commonEndpoint: 'common',
  tabtypeEndpoint: 'tabtype',

  globalEndpoint: 'global',



  // AUTHENTICATION API FILES
  login: 'login.php',
  logout: 'logout.php',
  register: 'register.php',
  user: 'user.php',
  update_items_per_page: 'update_items_per_page.php',
  update_home_page_data: 'update_home_page_data.php',
  get_user_details_from_token: 'get_user_details_from_token.php',

  // PROFILE API FILES
  getProfileData: 'get_profile_data.php',
  updateProfileData: 'update_profile_data.php',

  // VENDOR API FILES
  vendorSentencer: 'sentencer/sentencer.php',

  // TOPIC API FILES
  topic: 'topics.php',
  getReservedTopic: 'get_reserved_topic.php',
  addTopic: 'add_reserved_topic.php',
  updateTopic: 'update_reserved_topic.php',
  deleteTopic: 'delete_reserved_topic.php',
  getTopicTypes: 'get_topic_types.php',
  getTopicCategories: 'get_topic_category.php',
  getTopicSubCategories: 'get_topic_subcategory.php',
  getTopicStatus: 'get_topic_status.php',
  getAllTopic: 'get_all_topic.php',
  redervedTopicGet: 'get_similar_web_category.php',
  addTabTopic: 'add_tab_topic.php',
  getHomeContent: 'get_home_content.php',
  updateHomeContent: 'update_home_content.php',

  // GET TAB ITEM BASED ON SEARCH TOPIC
  getTopicTabs: 'get_topic_tabs.php',

  // TABTYPE API FILES
  getTabTypes: 'tabtypes.php',

  // COMMON API FILES
  forbidden: 'forbidden.php',
  messages: 'messages.php',
  site_variables: 'site_variables.php',

  // forbidden: 'forbidden',
  // site_variables: 'sitevariable',
  // messages: 'messages',

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
