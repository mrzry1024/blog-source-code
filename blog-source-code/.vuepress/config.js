const friendLinkConf = require("./config/friendLinkConf");
const headConf = require("./config/headConf");
const navConf = require("./config/navConf");
const pluginsConf = require("./config/pluginsConf");

module.exports = {
	"title": "xxxx",  // 一开始进入的标题
	"description": "xxxx",  // 一开始进入的描述
	"dest": "dist",
	"head": headConf,
	"plugins": pluginsConf,
	"theme": "reco",
	"locales": {
		'/': {
			lang: 'zh-CN'
		}
	},
	"themeConfig": {
		"nav": navConf,
		"type": "blog",
		"blogConfig": {
			"category": {
				"location": 2,   // 在导航栏菜单中所占的位置，默认2
				"text": "分类"
			},
			"tag": {
				"location": 3,
				"text": "标签"
			}
		},
		"friendLink": friendLinkConf,
		"logo": "/logo.png",
		"search": true,
		"searchMaxSuggestions": 10,
		"lastUpdated": "Last Updated",
		"author": "xxxx",  // 作者
		"authorAvatar": "/avatar.jpg",
		// "record": "xxxx",  // 备案信息
		// "startYear": "2017",  // 开始年份

		noFoundPageByTencent: false,  // 404界面，默认 腾讯公益
		mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
		modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
		subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
	},
	"markdown": {
		"lineNumbers": true
	}
}