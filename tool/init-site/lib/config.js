/**
 * 配置文件
 *
 * Created by zhaoxiaoqiang on 15/10/13.
 */

var config = {
    // 公开网站的路径
    publicSitePath: '/../../my-blog',

    // 网站的配置
    siteData: {
        // 网页的 title
        title: '网站 title',
        // 网站的主标题
        mainHead: '网站的主标题',
        // 网站的副标题
        subhead: '网站的副标题'
    },

    /**** 下面为开发配置 ****/
    encoding: 'utf-8',
    jsonDataRewrite: false,

    // 从init-site算起参考根路径向上的级别，1对应init-site
    rootLevel: 3,
    // 监听的根目录（从此目录向下监听） 以tool的上级目录作为参考
    rootPath: '/web',

    // 首页模板路径，参考点为 rootPath 设置的路径,下同
    indexPageTemplatePath: '/index-template.html',
    // 首页输出路径，参考点为 rootPath 设置的路径
    indexPagePath: '/index.html',

    indexOwnerPageTemplatePath: '/index-owner-template.html',
    indexOwnerPagePath: '/index-owner.html',

    // 文章详情页模板，参考点为 rootPath 设置的路径
    articleDetailPageTemplatePath: '/article-detail-template.html',

    // 文章的目录
    articlesPath: '/articles',
    // md文件文件名
    mdFileFilename: 'main.md',
    // html文件文件名
    htmlFileFilename: 'main.html'
};

module.exports = config;