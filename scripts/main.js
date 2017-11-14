const welcomeActiveUser = require("./register_login/registerVerify")
const pageShown = require("./register_login/dashboard_hide_show")
const eventFactory = require("./events/eventsVerify")
const submitArticle = require("./news_articles/articleController")
const articleFactory = require("./news_articles/articleFactory")
const createCard = require("./news_articles/create_hide_show")
const deleteMaster = require("./news_articles/deleteButton")
const updateDashboard = require("./updateDOM")
const taskFactory = require("./tasks/tasksData")
const taskEl = require("./tasks/tasks_hide_show")
const createTaskForm = require("./tasks/tasksSubmit")
const chatController = require("./chat/chatController")
const updateFriendsDOM = require("./friends/friendsDOM")

pageShown()
updateDashboard()
updateFriendsDOM()





