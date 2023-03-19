/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
export default {
  /** -------------------------------------------------以下必须修改----------------------------------------------------- */

  githubName: "HongkeChen",                                     // 必须修改，github账户名



  /** -------------------------------------------------以下可选修改----------------------------------------------------- */

  title: "Chen's blog",                                        // 网站标题
  nickName: "Chen",                                           // 昵称
  domain: "https://nuxt3-blog-2p1t.vercel.app/",                        // rss域名
  SEO_title: "陈某博客/Chen's blog",                              // 搜索引擎显示的标题
  SEO_description: "陈某的博客，书写随缘的东西",               // description meta header
  SEO_keywords: "Chen,Chen's blog,陈某,陈某的博客", // keywords meta header
  CloudflareAnalyze: "",                                       // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: "",                                           // https://giscus.app/zh-CN
  CommentDiscussionCategoryId: "",                             // https://giscus.app/zh-CN

  Comment: {                                                   // 是否开启评论，请先设置上面的 CommentRepoId 和 CommentDiscussionCategoryId
    articles: true,                                            // “文章”是否开启评论
    records: false,                                            // “记录”是否开启评论
    knowledges: false                                          // “文化”是否开启评论
  },
  MongoDb: {                                                   // 浏览量统计，请先设置 https://vercel.com/integrations/mongodbatlas
    initialVisitors: 1,                                        // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: false                                      // 网站拥有者访问时，是否增加浏览量
  },
  themeColor: "#2aa0bb",                                       // 主题色
  defaultLang: "zh",                                           // default language, "zh" and "en" are supported currently



  /** -------------------------------------------------以下不可修改----------------------------------------------------- */

  githubRepo: "nuxt3-blog",                                    // 勿修改
  githubBranch: "master"                                       // 勿修改
};
