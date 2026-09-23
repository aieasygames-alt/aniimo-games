# Aniimo.games 版本规划简报

调研日期：2026-09-23（Asia/Shanghai）  
观察窗口：2026-09-16 至 2026-09-23（近 7 天）

## 结论

Aniimo 已从上线前信息需求转入首周运营需求。网站下一版本应优先解决四类高意图问题：安全下载和移动端上线、9 月 23 日更新与活动、付费和资源机制的可验证说明，以及新玩家的首日/首周路线。不要在此阶段扩张未经游戏内或官方来源验证的兑换码、数值、刷怪点或付费结论。

官方已确认 PC/主机于 9 月 16 日上线，移动端于 9 月 23 日上线。官方主页还显示 9 月 21 日的 PC/主机上线公告、9 月 22 日的移动端预下载公告、9 月 23 日的移动端上线公告及 `Setting Out in Pursuit of the Wind: Part I` 更新公告。

## 项目现状

| 维度 | 当前状态 | 规划含义 |
| --- | --- | --- |
| 产品 | React 19 + Vite 静态 Wiki，Cloudflare Pages 部署 | 内容变化通过数据层、路由、预渲染与 SEO 审核发布 |
| 已覆盖 | 89 个本地 Aniimo、6 个区域、下载/版本/代码/平台/故障排查/社区意图页 | 不需要重复搭建内容框架，应补充上线后的已验证信息 |
| 质量机制 | `check:release`、`check:official`、`check:live`、GSC 报告、IndexNow | 可将“每日外部信号”转为固定巡检流程 |
| 资料风险 | 36 个 Aniimo 字段仍为 watchlist；旧官方 Wiki probe URL 在 9 月 23 日返回 404 | 图鉴更新自动监控失效，必须先修复抓取目标和回归测试 |

## 近 7 天官方更新

| 日期 | 已确认动态 | 受影响页面 | 版本动作 |
| --- | --- | --- | --- |
| 9/16 | PC、PS5、Xbox 上线；官方预下载说明给出 40 GB PC 空间、30-35 GB 主机空间及区域开服时间 | `/download/`、`/launch-day/`、PC/主机平台页、故障排查 | 将“预下载”文案改为“已上线”；保留系统需求与官方入口 |
| 9/21 | 官方主页列出 PC/主机正式上线新闻 | 发行日期、首页、新闻/新鲜度页 | 去除所有倒计时或待上线措辞 |
| 9/22 | 官方主页列出移动端预下载新闻 | iOS/Android、下载、地区可见性排查 | 核对商店状态与地区展示，记录来源时间 |
| 9/23 | 官方主页列出移动端正式上线及 `Setting Out in Pursuit of the Wind: Part I` 更新公告 | 移动端平台页、launch tracker、更新页 | 增设移动首日 FAQ、版本公告摘要及维护/补偿核验区 |
| 9/23 后续 | 更新公告包含 Egg Heist Chaos Mode（9/24）、Glamour Star 与 Aniimo Discovery（9/25）、Vein Abundance（9/28 起）等活动信息 | 更新页、Egg Heist、活动日历、相关 Aniimo/区域页 | 仅从官方公告逐项提取日期、解锁条件、奖励和结束时间；活动页要显示时区 |

官方来源：

- [Aniimo 官方主页](https://aniimo.com/main)
- [PC/主机预下载、服务器时间与配置说明](https://aniimo.com/newslist/detail/100089)

## 社媒与媒体讨论信号

这些是需求与情绪信号，不是可直接发布的游戏事实。各社群对同一机制的评价相互冲突，尤其是付费、抽卡和强度影响。

| 话题 | 近 7 天的表现 | 用户意图 | 内容响应 |
| --- | --- | --- |
| 付费、gacha、P2W | 媒体评价与玩家帖意见分裂：部分认为商业化复杂或影响体验，部分认为付费偏外观/省时；资源、通行证、商店成为高频问答 | 钱买到什么、是否影响收集/进度/强度、免费玩家如何避坑 | 发布“付费与资源观察”而非结论页：官方概率/商店说明、游戏内截图、受影响机制、更新时间和待验证项分栏 |
| 首周内容与节奏 | 高时长玩家讨论剧情、任务、家园、Alpha 捕捉能量、进化造型与后期压力 | 主线多久、每日/每周做什么、哪些资源先留 | 新增“首周清单”“资源保留建议”“玩法密度观察”，每条经验明确标注适用版本与玩家验证状态 |
| 移动端上线 | iOS/Android 何时可玩、商店是否可见、PC 先行玩家与移动新玩家差距 | 下载入口、地区限制、账号同步、错过内容 | 建立移动首日排查页：商店可见性、设备空间、账号登录、更新失败、同步状态；无证据时不承诺跨存档 |
| 活动与维护 | 9/23 维护、补偿、9/24-10 月活动和解锁等级会带来集中搜索 | 何时开始、要什么等级、奖励怎么拿 | 活动日历 + 活动 FAQ；所有时间统一显示 UTC+8 和用户本地时区提示 |
| 比较与定位 | Pokemon、Palworld、Genshin、Infinity Nikki 等比较仍是外部报道与社媒讨论的主叙事 | 它到底是什么、和同类差在哪里 | 更新比较页为“实际可玩机制对照”，删除上线前猜测，避免给出评价性排名 |
| 兑换码与商店价格 | Reddit 等社区出现具体代码、价格、领取路径帖子 | 有没有有效代码、如何领取 | 维持强校验：仅官方渠道或游戏内兑换界面证据可进活跃代码；社区字符串只作监控线索，不能发布 |

参考样本：

- [r/Aniimo：9 月 23 日更新、活动与维护](https://www.reddit.com/r/Aniimo/comments/1wmhx7t/september_23_updatepatch_notes_upcoming_events/)
- [r/Aniimo：60 小时体验讨论](https://www.reddit.com/r/Aniimo/comments/1wksz42/my_thoughts_after_60_hours_in/)
- [r/Aniimo：商业化讨论](https://www.reddit.com/r/Aniimo/comments/1wi9sig/games_monetization_seems_unaturally_tame/)
- [PC Gamer：Steam 同时在线与评价分化](https://www.pcgamer.com/games/rpg/yet-another-pokemon-inspired-game-is-popping-off-on-steam-with-over-160-000-concurrent-players-for-aniimo/)
- [GamesRadar：上线期评价与商业化争议](https://www.gamesradar.com/games/open-world/free-to-play-pokemon-and-palworld-like-aniimo-launches-to-mixed-steam-reviews-its-very-much-a-gacha-game/)

## 搜索需求簇

此处是公开 SERP、新闻结果、社区问题与站内既有 GSC 词的交集，不等同于 Google、Bing、百度或 YouTube 的精确热搜榜/搜索量。不同地区与账号的联想词存在差异。

| 优先级 | 需求簇 | 建议关键词与标题方向 | 首选落地页 |
| --- | --- | --- | --- |
| A | 移动端现在能否玩 | `aniimo mobile download`、`aniimo ios`、`aniimo android`、`aniimo mobile not available` | `/platforms/mobile/`、`/platforms/ios/`、`/platforms/android/`、下载故障排查 |
| A | 最新更新和活动 | `aniimo update September 23`、`aniimo events`、`Egg Heist Chaos Mode` | 更新页、活动日历、Egg Heist 页 |
| A | 付费与免费玩家 | `aniimo monetization`、`aniimo gacha`、`aniimo pay to win`、`aniimo shop` | 新增“Monetization & Resources”证据页，链接现有 pay-to-win 主题页 |
| A | 首周攻略 | `aniimo beginner guide`、`aniimo what to do first`、`aniimo resources`、`aniimo alpha` | `/guides/first-hour/`、首周清单、资源页 |
| B | 代码与奖励 | `aniimo codes`、`aniimo redeem code`、`aniimo launch rewards` | `/codes/`、`/rewards/`，保持官方验证门槛 |
| B | 联机与账号 | `aniimo co op`、`aniimo crossplay`、`aniimo cross save`、`aniimo server status` | 已有多人/服务器页面，增加实测状态与证据日期 |
| B | 图鉴、地点与活动 Aniimo | `aniimo discovery`、`Irisalis`、`Prismana Melloblum`、`where to find` | Aniimo 详情、活动页、区域页；先创建证据队列 |
| C | 比较与评价 | `aniimo vs palworld`、`aniimo pokemon`、`aniimo review` | 比较页与评测意图页，写清版本和证据范围 |

## 推荐版本路线

### V1.1.1：移动端上线与更新公告响应（9/23-9/25）

- 更新首页、发行日期、下载、平台页和 launch tracker 的状态为已上线，清理预上线文案。
- 新增移动端首日检查清单：下载渠道、地区可见性、设备空间、登录、更新和已知问题；跨平台/账号同步仅显示已验证状态。
- 把 9/23 官方更新拆解为活动日历数据：名称、开始/结束、时区、解锁条件、官方来源和最后核验时间。
- 在代码页增加显眼的“社区代码未验证”隔离区，避免搜索流量把未经核验的字符串当作正式代码。
- 运行 `check:release` 与 `check:live`，然后提交 IndexNow 候选页。

### V1.2.0：首周体验与信任内容（9/26-10/2）

- 新增“付费与资源机制”证据页：把官方披露、游戏内观察、社区意见、未知项严格分开，不作 P2W 结论。
- 发布版本化的“首周路线、资源、活动资格”内容。每项均附版本号、更新时间、证据类型和适用范围。
- 为 Irisalis、Prismana Melloblum、Prismana Waleetle 与关联区域创建活动事实卡；无可靠路线坐标时只发布活动可得性与官方条件。
- 强化移动端高频故障排查并收集可复现样本：商店不可见、下载失败、登录、性能、账户与同步。
- 用 GSC 新增查询优先修订标题、FAQ 与内链，先修高曝光页，避免批量薄页。

### V1.3.0：内容节奏与数据验证（10/3-10/16）

- 根据首个版本周期补齐活动复盘、活动过期状态和下一期预告；让过期奖励/代码自动退出高曝光位置。
- 对 36 个 watchlist Aniimo 字段按官方或游戏内证据逐条关闭，不以社区 Wiki 代替一手验证。
- 以站内 GSC 和页面行为数据决定是否扩张进化、地点、队伍和数值攻略；优先“已有印象且答案不足”的页面。

## 监控与数据质量修复

1. 修复 `scripts/check-official-updates.mjs` 的 Wiki 监控目标。当前硬编码的 `https://wiki.aniimo.com/item/10002877` 已返回 404，导致新增 Aniimo 检测被跳过；应从官方主页当前 Wiki 链接发现入口，或用新的稳定 API/目录页，并为 404 添加失败测试。
2. 给官方新闻采集增加去重的 URL、发布日期和标题快照。仅解析标题无法可靠识别同名更新或详情变化。
3. 建立“信号 -> 证据 -> 发布”队列。社媒和搜索只创建候选问题；官方页面、店铺页和游戏内截图才可升级为事实。
4. 每日（上线后的前 14 天）检查官方主页、Steam/主机/移动商店、官方 Discord/X 公告和 GSC；对状态变化触发页面更新，而不是固定频率堆叠新闻页。

## 发布指标

| 指标 | 目的 | 观察方式 |
| --- | --- | --- |
| 移动端下载页 CTR 与商店跳转 | 判断移动上线需求是否被有效承接 | GSC + 站内事件 |
| 更新/活动页的自然曝光与点击 | 判断官方更新页是否抢到时效词 | GSC 按页面和查询 |
| 代码页退出率与投诉/纠错 | 防止未验证代码损害信任 | 站内行为 + 校正记录 |
| 故障排查页的内部跳转 | 找出最影响转化的问题 | 页面内链事件 |
| 付费机制页的滚动深度和回访 | 验证用户是否需要可验证的经济说明 | 页面行为 + 社群反馈 |

