
export const environment = {
  production: false,
  apiBase: 'api',

  // END-POINTS
  adminEndpoint: 'admin',
  profileEndpoint: 'admin/profile',
  vendorEndpoint: 'vendor',
  topicEndpoint: 'topics',
  searchEndpoint: 'search',
  commonEndpoint: 'common',
  tabtypeEndpoint: 'tabtype',

  // AUTHENTICATION API FILES
  login: 'login.php',
  logout: 'logout.php',
  register: 'register.php',
  user: 'user.php',
  update_items_per_page: 'update_items_per_page.php',
  update_home_page_data: 'update_home_page_data.php',

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
  getTopicSimilarWebCategory: 'get_topic_from_similarwebcategory.php',
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
  site_variables: 'site_variables.php'

};

