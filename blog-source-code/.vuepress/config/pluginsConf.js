module.exports = {
	// 自动侧边栏
	"vuepress-plugin-auto-sidebar": {},

	// 代码块复制
	"vuepress-plugin-nuggets-style-copy": {
		copyText: "copy",
		tip: {
			content: "copy successful"
		}
	},

	// 顶部进度条
	"@vuepress/nprogress": {},

	// vssue评论功能
	// yarn add @vssue/vuepress-plugin-vssue
	// yarn add @vssue/api-github-v4
	'@vssue/vuepress-plugin-vssue': {
		platform: 'github-v4',
		owner: 'GitHub用户名',
		repo: '仓库名',
		clientId: '注册的Client ID',
		clientSecret: '注册的Client Secret',
		autoCreateIssue: true  // 自动创建评论，默认是false
	},

}