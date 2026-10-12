/* ========================================
   虚谷计划 - i18n 多语言支持
   ======================================== */

const VVPLAN_I18N = {
  zh: {
    // --- 通用导航 ---
    'nav.about': '关于计划',
    'nav.maker': '创客教育',
    'nav.ai': '人工智能',
    'nav.ecosystem': '生态伙伴',
    'nav.list': '项目列表',
    'nav.menu': '菜单',

    // --- 通用页脚 ---
    'footer.tagline': '中国的开源教育计划，让人工智能与开源硬件点亮每一间课堂。',
    'footer.hotProjects': '热门项目',
    'footer.nav': '导航',
    'footer.aboutUs': '关于我们',
    'footer.copyright': '© 虚谷计划组委会 2018 — 2026. 保留所有权利。',

    // --- 通用项目名 ---
    'proj.handpy': '掌控板',
    'proj.vvlink': '虚谷物联',
    'proj.vvboard': '虚谷号',
    'proj.laserblock': '乐造模块',

    // --- 首页 index.html ---
    'index.badge': '虚怀若谷，共创未来',
    'index.title1': '让人工智能与开源硬件',
    'index.title2': '点亮每一间课堂',
    'index.desc': '虚谷计划是一个包含硬件和软件的开源教育项目，由一线教师联合高校、创客空间和科技企业共同发起，致力于为中国青少年提供完整、开放、可复制、可实践的人工智能与科技教育解决方案。',
    'index.ctaExplore': '探索项目',
    'index.ctaVision': '了解愿景',
    'index.statProjects': '核心开源项目',
    'index.statFounded': '发起年份',
    'index.statTeachers': '教师用户',

    'index.projectsTag': '开源教育项目',
    'index.projectsTitle': '九大核心项目',
    'index.projectsSubtitle': '从创客硬件到人工智能平台，虚谷计划覆盖完整的教育技术生态。',
    'index.viewAll': '查看项目列表',

    'index.featuredBadge': '2026 重点项目',
    'index.statusActive': '持续中',
    'index.statusStopped': '已停止',
    'index.featuredTagline': '面向 AI 教学场景的桌面实验工作台',
    'index.featuredDesc': '把课程任务、互动体验、Scratch 图形编程和 Python/Jupyter 实验组织到同一桌面入口，让教师更容易发起课堂任务，也让学生更快进入真实实验环境。',
    'index.featured.p1': '课程资源',
    'index.featured.p2': 'Jupyter',
    'index.featured.p3': 'Scratch',
    'index.featured.p4': '课堂接入',
    'index.featuredLearn': '了解项目',
    'index.featuredSource': '查看源码',

    // 项目滚动卡片
    'card.visit': '访问项目 →',
    'index.xeduDesc': '面向 AI 教学场景的桌面实验工作台。',
    'index.quickclassDesc': '一个 AI 驱动的课堂教学辅助平台。',
    'index.quickformDesc': '为 AI 大模型开发交互网页设计的数据服务。',
    'index.openhydraDesc': '为中小学设计的 AI 教学平台。',
    'index.xeduproDesc': '一套开箱即用的人工智能学习工具。',
    'index.laserblockDesc': '利用激光切割技术加工的木质结构件。',
    'index.vvlinkDesc': '一套开箱即用物联网工具包。',
    'index.vvboardDesc': '一款能运行 Python 的开源硬件。',
    'index.handpyDesc': '一款集成常见电子模块的开源硬件。',

    // 生态区 (首页)
    'index.ecoTag': '生态伙伴',
    'index.ecoTitle1': '携手共建',
    'index.ecoTitle2': '开源教育未来',
    'index.ecoDesc': '虚谷计划的成长离不开一线教育工作者的实践反馈、高校研究者的学术支撑、创客空间的社区运营，以及企业工程师的技术贡献。我们期待与更多伙伴一起，让优质的开源教育惠及每一位学生。',
    'index.ecoBecome': '成为伙伴',
    'index.ecoViewList': '查看项目列表',
    'index.eco.role1.name': '一线教师',
    'index.eco.role1.desc': '课程实践 · 案例共创',
    'index.eco.role2.name': '高校院所',
    'index.eco.role2.desc': '学术研究 · 师资培训',
    'index.eco.role3.name': '创客空间',
    'index.eco.role3.desc': '社区运营 · 活动组织',
    'index.eco.role4.name': '科技企业',
    'index.eco.role4.desc': '硬件研发 · 技术支持',

    // CTA (首页)
    'index.ctaBigTitle': '开启你的开源教育探索',
    'index.ctaBigDesc': '从一块掌控板、一个 XEduPro 工具开始，和学生一起动手创造未来。',
    'index.ctaMaker': '走进创客',
    'index.ctaAI': '走进AI',

    // --- about.html ---
    'about.title': '关于计划 | 虚谷计划',
    'about.metaDesc': '虚谷计划是一个包含硬件和软件的开源教育项目，由一线教师联合高校、创客空间和科技企业共同发起。',
    'about.pageTitle': '关于计划',
    'about.pageSubtitle': '虚怀若谷，共创未来。源于教育，服务教育。',

    'about.historyTag': '发展历程',
    'about.historyTitle1': '从创客教育',
    'about.historyTitle2': '到人工智能教育',
    'about.p1': '虚谷计划最早从 2018 年发起，一开始以创客教育为核心方向，先后形成了<strong>虚谷号</strong>、<strong>掌控板</strong>、<strong>虚谷物联</strong>和<strong>乐造模块</strong>等项目。其中掌控板项目发展良好，已成为国内中小学创客教育最常用的开源硬件之一，虚谷物联项目中的 MQTT 服务器"SIoT"也成为中小学物联网教学的重要工具。',
    'about.p2': '2022 年之后，虚谷计划团队逐步转向人工智能教育，<strong>XEduPro</strong>、<strong>OpenHydra</strong>、<strong>QuickForm</strong>、<strong>QuickClass</strong>、<strong>XEdu Client</strong> 等新项目持续加入，构建起覆盖开源硬件、物联网、人工智能工具与教学平台的完整教育生态。',
    'about.p3': '虚谷计划是一个包含硬件和软件的开源教育项目，由一线教师联合高校、创客空间和科技企业共同发起，致力于为中国青少年提供完整、开放、可复制、可实践的人工智能与科技教育解决方案。',

    'about.feat1Title': '开源硬件',
    'about.feat1Desc': '从芯片选型到板载接口，从固件到案例，全部开源，教师与学生可自由拆解、修改与创造。',
    'about.feat2Title': '教学适配',
    'about.feat2Desc': '课程设计紧贴中小学信息技术、综合实践与人工智能课程标准，降低教师开课门槛。',
    'about.feat3Title': '生态共建',
    'about.feat3Desc': '联合高校、创客空间与企业，构建覆盖工具、课程、赛事与社区服务的完整教育生态。',

    'about.timelineTag': '时间线',
    'about.timelineTitle': '成长足迹',
    'about.t1Title': '计划发起',
    'about.t1Desc': '以创客教育为核心方向，推出虚谷号、掌控板等项目。',
    'about.t2Title': '物联网布局',
    'about.t2Desc': '推出虚谷物联项目，SIoT 成为中小学物联网教学的重要工具。',
    'about.t3Title': '结构件方案',
    'about.t3Desc': '乐造模块为创客教育与 STEAM 提供低成本木质结构件方案。',
    'about.t4Title': '转向人工智能教育',
    'about.t4Desc': '推出 XEduPro，成为人工智能初学者必用学习工具。',
    'about.t5Title': 'AI 教育生态成型',
    'about.t5Desc': 'OpenHydra、QuickForm、QuickClass、XEdu Client 陆续加入，覆盖教学平台、数据服务、课堂辅助与桌面实验工作台。',

    // --- maker.html ---
    'maker.title': '创客教育 | 虚谷计划',
    'maker.metaDesc': '虚谷计划创客教育项目：虚谷号、掌控板、乐造模块、虚谷物联，为中国中小学创客教育、物联网教学与 STEAM 实践提供开源硬件与工具。',
    'maker.pageTitle': '创客教育',
    'maker.pageSubtitle': '虚谷计划最早形成的四大核心项目，为中国中小学创客教育、物联网教学与 STEAM 实践提供可靠工具。',
    'maker.founder': '发起人（单位）：',

    'maker.vvboardDesc': '一款能运行 Python 的开源硬件，集成高性能处理器与通用单片机芯片，内置多种通信和扩展接口，既可作为完整电脑使用，也可作为微型可编程智能终端。',
    'maker.handpyDesc': '一款集成常见电子模块的开源硬件，采用物联网芯片 ESP32，整合常见输入输出模块，支持 Wi-Fi 与蓝牙，是专为青少年编程教育而设计的开源硬件，已成为国内中小学创客教育最常用的开源硬件之一。',
    'maker.laserblockDesc': '利用激光切割技术加工的木质结构件，支持常见电子模块，为创客教育与 STEAM 提供低成本、高自由度的结构件方案。',
    'maker.vvlinkDesc': '一套开箱即用物联网工具包，结合可部署在本地的 MQTT 服务器软件"SIoT"，配合掌控板、虚谷号搭建各种物联网应用，是中小学物联网教学的重要工具。',

    // --- ai.html ---
    'ai.title': '人工智能教育 | 虚谷计划',
    'ai.metaDesc': '虚谷计划人工智能教育项目：XEduPro、OpenHydra、QuickForm、QuickClass、XEdu Client，让人工智能学习变得简单、可实践、可落地。',
    'ai.pageTitle': 'AI 教育新生态',
    'ai.pageSubtitle': '2022 年后，虚谷计划逐步转向人工智能教育。这些工具与平台让人工智能学习变得简单、可实践、可落地。',
    'ai.founder': '发起人（单位）：',

    'ai.xeduproDesc': '一套开箱即用的人工智能学习工具，已成为人工智能初学者必用学习工具。',
    'ai.openhydraDesc': '为中小学设计的 AI 教学平台，让学校轻松部署与开展人工智能课程。',
    'ai.quickformDesc': '为 AI 大模型开发交互网页设计的数据服务，已拥有 3 万多教师用户。',
    'ai.quickclassDesc': '一个 AI 驱动的课堂教学辅助平台，助力教师打造更高效的智能课堂。',
    'ai.xeduclientDesc': '面向 AI 教学场景的桌面实验工作台，把课程资源、Scratch 与 Python/Jupyter 实验组织到同一入口。',

    // --- ecosystem.html ---
    'ecosystem.title': '生态伙伴 | 虚谷计划',
    'ecosystem.metaDesc': '虚谷计划生态伙伴：携手一线教师、高校院所、创客空间与科技企业，共建开源教育未来。',
    'ecosystem.pageTitle': '生态伙伴',
    'ecosystem.pageSubtitle': '携手共建开源教育未来，让优质的开源教育惠及每一位学生。',

    'eco.role1.name': '一线教师',
    'eco.role1.desc': '课程实践 · 案例共创',
    'eco.role2.name': '高校院所',
    'eco.role2.desc': '学术研究 · 师资培训',
    'eco.role3.name': '创客空间',
    'eco.role3.desc': '社区运营 · 活动组织',
    'eco.role4.name': '科技企业',
    'eco.role4.desc': '硬件研发 · 技术支持',

    'steamTag': '合作活动',
    'steamTitle': '中小学STEAM教育大会',
    'steamSubtitle': '一年一度 · 坚持公益 · 众师众创。从2013年温州的首次论坛出发，大会始终扎根一线，陪伴全国中小学创客、STEAM、人工智能与跨学科创新教育领域的教师共同成长。',
    'steam.stats1': '届大会',
    'steam.stats2': '座城市',
    'steam.stats3': '年历程',
    'steam.f1Title': '扎根一线',
    'steam.f1Desc': '大会坚持从一线教师的真实需求出发，汇聚教育专家、校长、教研员与教师，共同探讨教学实践中的真问题。',
    'steam.f2Title': '众师众创',
    'steam.f2Desc': '最早由民间一线教师发起，强调开源、分享与协作，形成了以教师社群为核心的众创生态。',
    'steam.f3Title': '前沿引领',
    'steam.f3Desc': '从创客教育到STEAM教育，再到人工智能教育，大会始终站在中小学科技教育发展的最前沿。',
    'steam.f4Title': '公益开放',
    'steam.f4Desc': '大会始终保持开源、草根、免费的特色，为教育工作者提供平等交流、共享资源的平台。',
    'steam.visit': '访问大会官网',

    'steam.h2025Title': '第十三届 · 新疆乌鲁木齐',
    'steam.h2025Desc': '主题：AI通识教育与STEAM教育融合：从理念到行动。在乌鲁木齐市第十九中学举行，汇聚全国300余名教育工作者，设置24个前沿主题工作坊。',
    'steam.h2024Title': '第十二届 · 贵州遵义',
    'steam.h2024Desc': '主题：人工智能教育与创新。在历史名城遵义举办，吸引全国各地千余名教育工作者参与，设置14个主题工作坊。',
    'steam.h2023Title': '第十一届 · 北京海淀',
    'steam.h2023Desc': '主题：走向"科创输出"的人工智能教育。来自全国各地400多名代表共聚一堂，累计参会约两万四千人次，首次设立年度人物荣誉。',
    'steam.h2022Title': '第十届 · 浙江温州',
    'steam.h2022Desc': '主题：创客教育与新一代人工智能。十年后大会再次回到温州，探讨创客教育与新一代人工智能的融合发展。',
    'steam.h2021Title': '第九届 · 线上',
    'steam.h2021Desc': '主题：信息科技与跨学科学习。首次全程线上举办，超过7万人收看直播，聚焦信息科技与跨学科学习。',
    'steam.h2020Title': '第八届 · 浙江宁波杭州湾新区',
    'steam.h2020Desc': '主题：开源生态构建，跨学科实践，促进高素质创新人才培养。约200人到场，线上7个分会场、超千人观看，举行中国开源机器人教育元年圆桌论坛。',
    'steam.h2019Title': '第七届 · 浙江宁波杭州湾新区',
    'steam.h2019Desc': '主题：STEAM教育、创客教育与普通高中信息技术实验。近600名教育工作者齐聚杭州湾，囊括32场学术报告与30个主题工作坊。',
    'steam.h2018Title': '第六届 · 吉林长春',
    'steam.h2018Desc': '主题：STEAM教育与创客教育的新阶段。600多人参加，发布开源硬件掌控板，联合长春市首届校园创客嘉年华举办。',
    'steam.h2017Title': '第五届 · 山东蓬莱',
    'steam.h2017Desc': '主题：STEAM教育与综合实践活动。在山东蓬莱召开，开展六大分论坛，全面探讨STEAM教育的中国之路。',
    'steam.h2016Title': '第四届 · 广东佛山',
    'steam.h2016Desc': '聚焦：创客教育实践与课程融合。论坛正式更名为"全国中小学STEAM教育大会"，吸引全国21省市近四百名教育工作者。',
    'steam.h2015Title': '第三届 · 上海嘉定',
    'steam.h2015Desc': '聚焦：STEAM教育实践与创新。改由中国电子学会现代教育技术分会主办，任友群教授做《创客教育和STEAM教论辨析》主旨报告。',
    'steam.h2014Title': '第二届 · 江苏常州',
    'steam.h2014Desc': '聚焦：STEAM教育课程设计与实施。海峡两岸创客教育团队开始密切互动，首次启用网络直播，在线人数近千人。',
    'steam.h2013Title': '第一届 · 浙江温州',
    'steam.h2013Desc': '主题：中小学STEAM教育创新论坛。在温州中学成功举办，来自全国13个省市区的80多位代表齐聚，开启持续十余年的教师盛会。',

    'eco.ctaTitle': '加入虚谷计划生态',
    'eco.ctaDesc': '无论您是一线教师、高校研究者、创客空间运营者还是企业工程师，欢迎与我们联系，共同推动开源教育的发展。',
    'eco.ctaBecome': '成为伙伴',

    // --- list.html ---
    'list.title': '项目列表 | 虚谷计划',
    'list.metaDesc': '虚谷计划是一个包含硬件和软件的开源教育项目，由一线教师联合高校、创客空间和科技企业共同发起，致力于为中国青少年提供完整、开放、可复制、可实践的人工智能与科技教育解决方案。',
    'list.pageTitle': '项目列表',
    'list.pageSubtitle': '虚谷计划最早从 2018 年发起，一开始以创客教育为核心方向，先后形成了虚谷号、掌控板、虚谷物联和乐造模块等项目。2022 年之后，虚谷计划团队逐步转向人工智能教育，一些新的项目持续加入，如 XEduPro、OpenHydra、QuickForm、QuickClass 和 XEdu Client。',

    'list.colName': '项目名称',
    'list.colDesc': '项目简介',
    'list.colYear': '发起时间',
    'list.colStatus': '状态',
    'list.colDetail': '详情',
    'list.yearSuffix': '年',
    'list.detailBtn': '详情',

    'modal.title': '项目详情',
    'modal.titleSuffix': ' 详情',
    'modal.founder': '发起人（单位）',
    'modal.homepage': '项目主页',
    'modal.repo': '代码仓库',
    'modal.empty': '暂无',
    'modal.close': '关闭',
    'modal.imageAlt': '图标',

    // --- xedu-client.html ---
    'xedu.title': 'XEdu Client | 虚谷计划',
    'xedu.metaDesc': 'XEdu Client 是面向 AI 教学场景的桌面实验工作台，帮助教师组织课程任务、互动体验、Scratch 和 Python/Jupyter 实验。',
    'xedu.badge': '2026 重点项目',
    'xedu.statusActive': '持续中',
    'xedu.tagline': '面向 AI 教学场景的桌面实验工作台',
    'xedu.desc': '面向学校机房和课堂实验场景，把课程任务、互动体验、Scratch 图形编程与 Python/Jupyter 环境集中到同一桌面客户端，降低教师发课和学生进入实验的门槛。',
    'xedu.pill1': '课程任务中心',
    'xedu.pill2': '互动体验',
    'xedu.pill3': 'Scratch',
    'xedu.pill4': 'Python 实验',
    'xedu.download': '下载 V2.0 体验版',
    'xedu.source': '查看源码',
    'xedu.teacherDoc': '教师文档',
    'xedu.releaseNote': 'V2.0 当前为预发布体验版；官网仅提供真实界面展示、下载与文档入口。',

    'xedu.coreTag': '核心能力',
    'xedu.coreTitle': '一套桌面入口，覆盖课堂里的三种主要实验方式',
    'xedu.cap1ImgAlt': 'XEdu Client 互动体验页面',
    'xedu.cap1Title': '互动体验',
    'xedu.cap1Desc': '教师可先用实时画面和关键点数据演示实验对象，再引导学生理解摄像头、人体关键点与 AI 模型结果的对应关系。',
    'xedu.cap2ImgAlt': 'XEdu Client Scratch 图形编程界面',
    'xedu.cap2Title': 'Scratch 图形编程',
    'xedu.cap2Desc': '学生直接在图形化工作区拼接积木，把人体感知、摄像头和课堂任务串成可运行作品，适合中学入门和项目展示。',
    'xedu.cap3ImgAlt': 'XEdu Client 内置 Python Jupyter 实验界面',
    'xedu.cap3Title': 'Python / Jupyter 实验',
    'xedu.cap3Desc': '进入 Jupyter Lab 后可直接阅读课程 Notebook、运行 Python 代码和调试实验步骤，适合教师备课与进阶实验教学。',

    'xedu.pathTag': '课堂路径',
    'xedu.pathTitle': '教师发起更集中，学生进入更直接',
    'xedu.teacherPathTitle': '教师使用路径',
    'xedu.t1': '在课程任务中心选择对应课次与实验。',
    'xedu.t2': '先演示互动体验，明确要观察的图像与数据。',
    'xedu.t3': '按班级水平切换到 Scratch 或 Python 实验。',
    'xedu.t4': '统一把安装与运行说明交给教师文档维护。',
    'xedu.studentPathTitle': '学生学习路径',
    'xedu.s1': '从任务页进入同一节课的实验入口。',
    'xedu.s2': '先理解现象，再在 Scratch 或 Notebook 中动手修改。',
    'xedu.s3': '结合摄像头、关键点或硬件结果观察程序反馈。',
    'xedu.s4': '把一次课堂任务发展成作品、代码或实验记录。',

    'xedu.relTag': '产品关系',
    'xedu.relTitle': 'XEduPro 提供学习工具，XEdu Client 负责把课堂资源与实验入口组织到桌面端',
    'xedu.relDesc': '这里展示的是面向学校真实使用场景的桌面客户端。它不是一个单独部署在 GitHub Pages 上的网页应用，而是承接本地课程资源、互动实验、Scratch 与 Jupyter 环境的工作台。官网负责说明真实界面、引导下载体验版、查看源码与教师安装文档。',

    // --- 通用 meta ---
    'site.defaultTitle': '虚谷计划 | 中国的开源教育计划',
    'site.defaultDesc': '虚谷计划是一个包含硬件和软件的开源教育项目，由一线教师联合高校、创客空间和科技企业共同发起。',
    'site.logoText': '虚谷计划',

    // --- 语言切换 ---
    'lang.toggle': 'EN',
  },

  en: {
    // --- Common Nav ---
    'nav.about': 'About',
    'nav.maker': 'Maker Ed',
    'nav.ai': 'AI Ed',
    'nav.ecosystem': 'Ecosystem',
    'nav.list': 'Projects',
    'nav.menu': 'Menu',

    // --- Common Footer ---
    'footer.tagline': "China's Open-Source Education Initiative — lighting up every classroom with AI and open hardware.",
    'footer.hotProjects': 'Featured Projects',
    'footer.nav': 'Navigation',
    'footer.aboutUs': 'About Us',
    'footer.copyright': '© VVPlan Committee 2018 — 2026. All rights reserved.',

    // --- Common Project Names ---
    'proj.handpy': 'HandPy Board',
    'proj.vvlink': 'VVLink IoT',
    'proj.vvboard': 'VVBoard',
    'proj.laserblock': 'Laserblock',

    // --- index.html ---
    'index.badge': 'Open mind, open valley — co-create the future',
    'index.title1': 'Let AI & Open Hardware',
    'index.title2': 'Light Up Every Classroom',
    'index.desc': 'VVPlan (Open Valley Project) is an open-source education initiative covering both hardware and software. Co-launched by frontline teachers together with universities, maker spaces and tech companies, it is dedicated to delivering complete, open, replicable and practical AI & STEM education solutions for Chinese youth.',
    'index.ctaExplore': 'Explore Projects',
    'index.ctaVision': 'Learn More',
    'index.statProjects': 'Core Open-Source Projects',
    'index.statFounded': 'Founded',
    'index.statTeachers': 'Teacher Users',

    'index.projectsTag': 'Open-Source Projects',
    'index.projectsTitle': 'Nine Flagship Projects',
    'index.projectsSubtitle': 'From maker hardware to AI platforms, VVPlan covers a complete education technology ecosystem.',
    'index.viewAll': 'View All Projects',

    'index.featuredBadge': '2026 Featured Project',
    'index.statusActive': 'Active',
    'index.statusStopped': 'Discontinued',
    'index.featuredTagline': 'A desktop lab workbench for AI teaching scenarios',
    'index.featuredDesc': 'Organizes course tasks, interactive experiences, Scratch visual programming, and Python/Jupyter experiments into a single desktop entry point — making it easier for teachers to launch classroom activities and for students to jump into real lab environments.',
    'index.featured.p1': 'Course Resources',
    'index.featured.p2': 'Jupyter',
    'index.featured.p3': 'Scratch',
    'index.featured.p4': 'Classroom Access',
    'index.featuredLearn': 'Learn More',
    'index.featuredSource': 'View Source',

    // Project scroll cards
    'card.visit': 'Visit project →',
    'index.xeduDesc': 'A desktop lab workbench for AI teaching scenarios.',
    'index.quickclassDesc': 'An AI-powered classroom teaching assistant platform.',
    'index.quickformDesc': 'A data service for designing interactive web pages for large AI models.',
    'index.openhydraDesc': 'An AI teaching platform designed for K-12 schools.',
    'index.xeduproDesc': 'A ready-to-use suite of AI learning tools.',
    'index.laserblockDesc': 'Laser-cut wooden structural components.',
    'index.vvlinkDesc': 'A ready-to-use IoT toolkit.',
    'index.vvboardDesc': 'An open-source board that runs Python.',
    'index.handpyDesc': 'An open-source board integrating common electronic modules.',

    // Ecosystem section (home)
    'index.ecoTag': 'Ecosystem Partners',
    'index.ecoTitle1': 'Building Together',
    'index.ecoTitle2': 'The Future of Open-Source Education',
    'index.ecoDesc': 'VVPlan grows thanks to real-world feedback from classroom teachers, academic support from university researchers, community operations from maker spaces, and engineering contributions from tech companies. We look forward to working with more partners to bring quality open-source education to every student.',
    'index.ecoBecome': 'Become a Partner',
    'index.ecoViewList': 'View All Projects',
    'index.eco.role1.name': 'Teachers',
    'index.eco.role1.desc': 'Practice · Co-create',
    'index.eco.role2.name': 'Universities',
    'index.eco.role2.desc': 'Research · Training',
    'index.eco.role3.name': 'Maker Spaces',
    'index.eco.role3.desc': 'Community · Events',
    'index.eco.role4.name': 'Tech Companies',
    'index.eco.role4.desc': 'Hardware · Engineering',

    // CTA (home)
    'index.ctaBigTitle': 'Start Your Open-Source Education Journey',
    'index.ctaBigDesc': 'Begin with a HandPy board or an XEduPro tool — build the future together with your students.',
    'index.ctaMaker': 'Maker Ed',
    'index.ctaAI': 'AI Ed',

    // --- about.html ---
    'about.title': 'About | VVPlan',
    'about.metaDesc': 'VVPlan is an open-source education initiative covering hardware and software, co-launched by frontline teachers, universities, maker spaces and tech companies.',
    'about.pageTitle': 'About VVPlan',
    'about.pageSubtitle': 'Open mind, open valley. From education, for education.',

    'about.historyTag': 'Our Story',
    'about.historyTitle1': 'From Maker Education',
    'about.historyTitle2': 'To AI Education',
    'about.p1': 'VVPlan was first launched in 2018 with maker education as its initial focus, producing projects such as <strong>VVBoard</strong>, <strong>HandPy</strong>, <strong>VVLink IoT</strong> and <strong>Laserblock</strong>. Among them, HandPy has grown to become one of the most widely used open-source boards for K-12 maker education in China, while "SIoT" — the MQTT server from VVLink IoT — has become an important tool for K-12 IoT teaching.',
    'about.p2': 'After 2022, the VVPlan team gradually shifted toward AI education. New projects such as <strong>XEduPro</strong>, <strong>OpenHydra</strong>, <strong>QuickForm</strong>, <strong>QuickClass</strong> and <strong>XEdu Client</strong> have continuously joined, forming a complete education ecosystem covering open hardware, IoT, AI tools and teaching platforms.',
    'about.p3': 'VVPlan is an open-source education initiative covering both hardware and software, co-launched by frontline teachers together with universities, maker spaces and tech companies. It is dedicated to delivering complete, open, replicable and practical AI & STEM education solutions for Chinese youth.',

    'about.feat1Title': 'Open-Source Hardware',
    'about.feat1Desc': 'From chip selection to on-board interfaces, from firmware to example projects — everything is open. Teachers and students can freely disassemble, modify and create.',
    'about.feat2Title': 'Teaching Ready',
    'about.feat2Desc': 'Course design closely follows the national ICT, Integrated Practice and AI curriculum standards — lowering the barrier for teachers to start teaching.',
    'about.feat3Title': 'Ecosystem Co-Building',
    'about.feat3Desc': 'Partnering with universities, maker spaces and companies to build a complete education ecosystem covering tools, courses, competitions and community services.',

    'about.timelineTag': 'Timeline',
    'about.timelineTitle': 'Our Journey',
    'about.t1Title': 'Initiated',
    'about.t1Desc': 'Focused on maker education; launched VVBoard and HandPy.',
    'about.t2Title': 'IoT Expansion',
    'about.t2Desc': 'Launched VVLink IoT; SIoT became a key tool for K-12 IoT teaching.',
    'about.t3Title': 'Structural Solution',
    'about.t3Desc': 'Laserblock provided a low-cost wooden structural solution for maker education and STEAM.',
    'about.t4Title': 'Pivot to AI Education',
    'about.t4Desc': 'Launched XEduPro — soon the go-to learning tool for AI beginners.',
    'about.t5Title': 'AI Education Ecosystem Formed',
    'about.t5Desc': 'OpenHydra, QuickForm, QuickClass and XEdu Client joined — covering teaching platforms, data services, classroom assistants and desktop lab workbenches.',

    // --- maker.html ---
    'maker.title': 'Maker Education | VVPlan',
    'maker.metaDesc': 'VVPlan maker education projects: VVBoard, HandPy, Laserblock and VVLink IoT — providing open hardware and tools for Chinese K-12 maker education, IoT teaching and STEAM practice.',
    'maker.pageTitle': 'Maker Education',
    'maker.pageSubtitle': 'VVPlan\'s four earliest flagship projects — providing reliable tools for Chinese K-12 maker education, IoT teaching and STEAM practice.',
    'maker.founder': 'Founder(s): ',

    'maker.vvboardDesc': 'An open-source board that runs Python. Integrates a high-performance processor and a general-purpose microcontroller chip, with multiple communication and expansion interfaces. Works both as a complete computer and as a tiny programmable smart terminal.',
    'maker.handpyDesc': 'An open-source board integrating common electronic modules. Powered by the ESP32 IoT chip, with built-in Wi-Fi and Bluetooth. Designed specifically for youth programming education, it has become one of the most widely used open-source boards in Chinese K-12 maker education.',
    'maker.laserblockDesc': 'Laser-cut wooden structural components that support common electronic modules. Provides a low-cost, high-freedom structural solution for maker education and STEAM.',
    'maker.vvlinkDesc': 'A ready-to-use IoT toolkit combined with the locally-deployable MQTT server "SIoT". Together with HandPy and VVBoard, it enables building all kinds of IoT applications and is a key tool for K-12 IoT teaching.',

    // --- ai.html ---
    'ai.title': 'AI Education | VVPlan',
    'ai.metaDesc': 'VVPlan AI education projects: XEduPro, OpenHydra, QuickForm, QuickClass, XEdu Client — making AI learning simple, practical and actionable.',
    'ai.pageTitle': 'New AI Education Ecosystem',
    'ai.pageSubtitle': 'After 2022, VVPlan gradually shifted toward AI education. These tools and platforms make AI learning simple, practical and actionable.',
    'ai.founder': 'Founder(s): ',

    'ai.xeduproDesc': 'A ready-to-use suite of AI learning tools — the go-to learning tool for AI beginners.',
    'ai.openhydraDesc': 'An AI teaching platform designed for K-12 schools — making it easy for schools to deploy and run AI courses.',
    'ai.quickformDesc': 'A data service for designing interactive web pages for large AI models — with over 30,000 teacher users.',
    'ai.quickclassDesc': 'An AI-powered classroom teaching assistant platform — helping teachers create more efficient smart classrooms.',
    'ai.xeduclientDesc': 'A desktop lab workbench for AI teaching scenarios — organizing course resources, Scratch and Python/Jupyter experiments into a single entry point.',

    // --- ecosystem.html ---
    'ecosystem.title': 'Ecosystem Partners | VVPlan',
    'ecosystem.metaDesc': 'VVPlan ecosystem partners: working with teachers, universities, maker spaces and tech companies to build the future of open-source education.',
    'ecosystem.pageTitle': 'Ecosystem Partners',
    'ecosystem.pageSubtitle': 'Building the future of open-source education together, bringing quality open education to every student.',

    'eco.role1.name': 'Teachers',
    'eco.role1.desc': 'Practice · Co-create',
    'eco.role2.name': 'Universities',
    'eco.role2.desc': 'Research · Training',
    'eco.role3.name': 'Maker Spaces',
    'eco.role3.desc': 'Community · Events',
    'eco.role4.name': 'Tech Companies',
    'eco.role4.desc': 'Hardware · Engineering',

    'steamTag': 'Events',
    'steamTitle': 'National K-12 STEAM Education Conference',
    'steamSubtitle': 'Annual · Non-profit · Co-created by teachers. Starting from its first forum in Wenzhou in 2013, the conference has always stayed rooted in frontline practice, accompanying teachers across China in maker, STEAM, AI and interdisciplinary innovation education.',
    'steam.stats1': 'Conferences',
    'steam.stats2': 'Cities',
    'steam.stats3': 'Years',
    'steam.f1Title': 'Rooted in Practice',
    'steam.f1Desc': 'The conference stays focused on real needs of frontline teachers, bringing together education experts, principals, teaching researchers and teachers to discuss real problems in teaching practice.',
    'steam.f2Title': 'Teacher-Led Co-Creation',
    'steam.f2Desc': 'Originally launched by grassroots frontline teachers, it emphasizes openness, sharing and collaboration — forming a co-creation ecosystem centered on teacher communities.',
    'steam.f3Title': 'Frontier Leadership',
    'steam.f3Desc': 'From maker education to STEAM, and now to AI education, the conference has always stood at the forefront of K-12 tech education development.',
    'steam.f4Title': 'Free & Open',
    'steam.f4Desc': 'The conference maintains its open, grassroots and free character — providing a platform for educators to connect and share resources on equal footing.',
    'steam.visit': 'Visit Conference Website',

    'steam.h2025Title': '13th · Urumqi, Xinjiang',
    'steam.h2025Desc': 'Theme: Integration of AI Literacy and STEAM Education — From Concept to Action. Held at Urumqi No. 19 Middle School, gathering over 300 educators with 24 frontier-themed workshops.',
    'steam.h2024Title': '12th · Zunyi, Guizhou',
    'steam.h2024Desc': 'Theme: AI Education and Innovation. Held in the historic city of Zunyi, attracting over 1,000 educators from across China with 14 themed workshops.',
    'steam.h2023Title': '11th · Haidian, Beijing',
    'steam.h2023Desc': 'Theme: Toward AI Education with "Science & Innovation Output". Over 400 delegates attended, cumulative participation of about 24,000 person-times, first annual achievement awards.',
    'steam.h2022Title': '10th · Wenzhou, Zhejiang',
    'steam.h2022Desc': 'Theme: Maker Education and New-Generation AI. Ten years later, the conference returned to Wenzhou to explore the integration of maker education and new-generation AI.',
    'steam.h2021Title': '9th · Online',
    'steam.h2021Desc': 'Theme: Information Technology and Interdisciplinary Learning. First fully online conference, with over 70,000 live viewers.',
    'steam.h2020Title': '8th · Hangzhou Bay, Ningbo, Zhejiang',
    'steam.h2020Desc': 'Theme: Open-Source Ecosystem Building, Interdisciplinary Practice, Fostering High-Quality Innovative Talent. About 200 on-site, 7 online sub-venues with over 1,000 viewers. Roundtable on the First Year of Open-Source Robotics Education in China.',
    'steam.h2019Title': '7th · Hangzhou Bay, Ningbo, Zhejiang',
    'steam.h2019Desc': 'Theme: STEAM Education, Maker Education and High School ICT Experiments. Nearly 600 educators gathered — 32 academic reports and 30 themed workshops.',
    'steam.h2018Title': '6th · Changchun, Jilin',
    'steam.h2018Desc': 'Theme: New Stage of STEAM and Maker Education. Over 600 participants, launched the HandPy open-source board, co-hosted with Changchun\'s first campus maker carnival.',
    'steam.h2017Title': '5th · Penglai, Shandong',
    'steam.h2017Desc': 'Theme: STEAM Education and Integrated Practice Activities. Held in Penglai, Shandong, with six sub-forums exploring the Chinese path of STEAM education.',
    'steam.h2016Title': '4th · Foshan, Guangdong',
    'steam.h2016Desc': 'Focus: Maker Education Practice and Curriculum Integration. Forum officially renamed to "National K-12 STEAM Education Conference", attracting nearly 400 educators from 21 provinces and cities.',
    'steam.h2015Title': '3rd · Jiading, Shanghai',
    'steam.h2015Desc': 'Focus: STEAM Education Practice and Innovation. Hosted by the Modern Education Technology Branch of the Chinese Institute of Electronics. Prof. Ren Youqun gave a keynote on "Maker Education vs STEAM Education".',
    'steam.h2014Title': '2nd · Changzhou, Jiangsu',
    'steam.h2014Desc': 'Focus: STEAM Education Curriculum Design and Implementation. Cross-Strait maker education teams began close interactions; first live webcast with nearly 1,000 online viewers.',
    'steam.h2013Title': '1st · Wenzhou, Zhejiang',
    'steam.h2013Desc': 'Theme: K-12 STEAM Education Innovation Forum. Successfully held at Wenzhou Middle School with over 80 delegates from 13 provinces and cities — launching a teacher gathering that continues for over a decade.',

    'eco.ctaTitle': 'Join the VVPlan Ecosystem',
    'eco.ctaDesc': 'Whether you are a frontline teacher, a university researcher, a maker space operator or an engineer — we welcome you to connect with us and jointly advance open-source education.',
    'eco.ctaBecome': 'Become a Partner',

    // --- list.html ---
    'list.title': 'Projects | VVPlan',
    'list.metaDesc': 'VVPlan is an open-source education initiative covering hardware and software, co-launched by frontline teachers, universities, maker spaces and tech companies — dedicated to complete, open, replicable and practical AI & STEM education for Chinese youth.',
    'list.pageTitle': 'Projects',
    'list.pageSubtitle': 'VVPlan was first launched in 2018 with maker education as its initial focus, producing projects such as VVBoard, HandPy, VVLink IoT and Laserblock. After 2022, the team gradually shifted toward AI education, and new projects continuously joined such as XEduPro, OpenHydra, QuickForm, QuickClass and XEdu Client.',

    'list.colName': 'Project',
    'list.colDesc': 'Description',
    'list.colYear': 'Launched',
    'list.colStatus': 'Status',
    'list.colDetail': 'Details',
    'list.yearSuffix': '',
    'list.detailBtn': 'Details',

    'modal.title': 'Project Details',
    'modal.titleSuffix': ' Details',
    'modal.founder': 'Founder(s)',
    'modal.homepage': 'Homepage',
    'modal.repo': 'Repository',
    'modal.empty': 'Not available',
    'modal.close': 'Close',
    'modal.imageAlt': 'icon',

    // --- xedu-client.html ---
    'xedu.title': 'XEdu Client | VVPlan',
    'xedu.metaDesc': 'XEdu Client is a desktop lab workbench for AI teaching scenarios — helping teachers organize course tasks, interactive experiences, Scratch and Python/Jupyter experiments.',
    'xedu.badge': '2026 Featured Project',
    'xedu.statusActive': 'Active',
    'xedu.tagline': 'A desktop lab workbench for AI teaching scenarios',
    'xedu.desc': 'Designed for school computer labs and classroom experiments, it consolidates course tasks, interactive experiences, Scratch visual programming and Python/Jupyter environments into a single desktop client — lowering the barrier for teachers to launch and for students to enter lab activities.',
    'xedu.pill1': 'Course Task Center',
    'xedu.pill2': 'Interactive Experience',
    'xedu.pill3': 'Scratch',
    'xedu.pill4': 'Python Lab',
    'xedu.download': 'Download V2.0 Demo',
    'xedu.source': 'View Source',
    'xedu.teacherDoc': 'Teacher Docs',
    'xedu.releaseNote': 'V2.0 is currently a pre-release demo; this website showcases the real UI and provides download and documentation links.',

    'xedu.coreTag': 'Core Capabilities',
    'xedu.coreTitle': 'One Desktop Entry Point — Covering the Three Main Lab Modes in Classrooms',
    'xedu.cap1ImgAlt': 'XEdu Client Interactive Experience page',
    'xedu.cap1Title': 'Interactive Experience',
    'xedu.cap1Desc': 'Teachers can first demonstrate lab subjects with real-time visuals and key-point data, then guide students to understand the correspondence between camera feeds, body keypoints and AI model results.',
    'xedu.cap2ImgAlt': 'XEdu Client Scratch visual programming interface',
    'xedu.cap2Title': 'Scratch Visual Programming',
    'xedu.cap2Desc': 'Students snap blocks together in a visual workspace, connecting body sensing, cameras and classroom tasks into runnable works — ideal for middle-school introductions and project showcases.',
    'xedu.cap3ImgAlt': 'XEdu Client built-in Python Jupyter interface',
    'xedu.cap3Title': 'Python / Jupyter Lab',
    'xedu.cap3Desc': 'Inside Jupyter Lab, students can directly read course Notebooks, run Python code and debug lab steps — great for teacher preparation and advanced lab teaching.',

    'xedu.pathTag': 'Classroom Flow',
    'xedu.pathTitle': 'More Focused for Teachers, More Direct for Students',
    'xedu.teacherPathTitle': 'Teacher Workflow',
    'xedu.t1': 'Select the corresponding lesson and experiment from the course task center.',
    'xedu.t2': 'First demonstrate the interactive experience, clarifying what visuals and data to observe.',
    'xedu.t3': 'Switch to Scratch or Python experiments according to class level.',
    'xedu.t4': 'Unify installation and running instructions in the teacher documentation.',
    'xedu.studentPathTitle': 'Student Workflow',
    'xedu.s1': 'Enter the same lesson\'s lab entry point from the task page.',
    'xedu.s2': 'First understand the phenomenon, then modify it in Scratch or Notebook.',
    'xedu.s3': 'Observe program feedback by combining camera, keypoints or hardware results.',
    'xedu.s4': 'Develop a class task into a work, code or lab record.',

    'xedu.relTag': 'Product Relationship',
    'xedu.relTitle': 'XEduPro provides the learning tools; XEdu Client organizes classroom resources and lab entry points onto the desktop',
    'xedu.relDesc': 'What is shown here is the desktop client for real school usage scenarios. It is not a single web app deployed on GitHub Pages, but rather a workbench that connects local course resources, interactive experiments, Scratch and Jupyter environments. This website explains the real interface, guides downloads of the demo version, and links to source code and teacher installation documentation.',

    // --- Common meta ---
    'site.defaultTitle': 'VVPlan | China\'s Open-Source Education Initiative',
    'site.defaultDesc': 'VVPlan is an open-source education initiative covering hardware and software, co-launched by frontline teachers, universities, maker spaces and tech companies.',
    'site.logoText': 'VVPlan',

    // --- Language Toggle ---
    'lang.toggle': '中文',
  },
  tw: {
    // --- 通用導航 ---
    'nav.about': '關於計劃',
    'nav.maker': '創客教育',
    'nav.ai': '人工智能',
    'nav.ecosystem': '生態夥伴',
    'nav.list': '項目列表',
    'nav.menu': '菜單',

    // --- 通用頁腳 ---
    'footer.tagline': '中國的開源教育計劃，讓人工智能與開源硬體點亮每一間課堂。',
    'footer.hotProjects': '熱門項目',
    'footer.nav': '導航',
    'footer.aboutUs': '關於我們',
    'footer.copyright': '© 虛谷計劃組委會 2018 — 2026. 保留所有權利。',

    // --- 通用項目名 ---
    'proj.handpy': '掌控板',
    'proj.vvlink': '虛穀物聯',
    'proj.vvboard': '虛谷號',
    'proj.laserblock': '樂造模組',

    // --- 首頁 index.html ---
    'index.badge': '虛懷若谷，共創未來',
    'index.title1': '讓人工智能與開源硬體',
    'index.title2': '點亮每一間課堂',
    'index.desc': '虛谷計劃是一個包含硬體和軟體的開源教育項目，由一線教師聯合高校、創客空間和科技企業共同發起，致力於為中國青少年提供完整、開放、可複製、可實踐的人工智能與科技教育解決方案。',
    'index.ctaExplore': '探索項目',
    'index.ctaVision': '瞭解願景',
    'index.statProjects': '核心開源項目',
    'index.statFounded': '發起年份',
    'index.statTeachers': '教師使用者',

    'index.projectsTag': '開源教育項目',
    'index.projectsTitle': '九大核心項目',
    'index.projectsSubtitle': '從創客硬體到人工智能平臺，虛谷計劃覆蓋完整的教育技術生態。',
    'index.viewAll': '查看項目列表',

    'index.featuredBadge': '2026 重點項目',
    'index.statusActive': '持續中',
    'index.statusStopped': '已停止',
    'index.featuredTagline': '面向 AI 教學場景的桌面實驗工作臺',
    'index.featuredDesc': '把課程任務、互動體驗、Scratch 圖形編程和 Python/Jupyter 實驗組織到同一桌面入口，讓教師更容易發起課堂任務，也讓學生更快進入真實實驗環境。',
    'index.featured.p1': '課程資源',
    'index.featured.p2': 'Jupyter',
    'index.featured.p3': 'Scratch',
    'index.featured.p4': '課堂接入',
    'index.featuredLearn': '瞭解項目',
    'index.featuredSource': '查看源碼',

    // 項目滾動卡片
    'card.visit': '訪問項目 →',
    'index.xeduDesc': '面向 AI 教學場景的桌面實驗工作臺。',
    'index.quickclassDesc': '一個 AI 驅動的課堂教學輔助平臺。',
    'index.quickformDesc': '為 AI 大模型開發交互網頁設計的資料服務。',
    'index.openhydraDesc': '為中小學設計的 AI 教學平臺。',
    'index.xeduproDesc': '一套開箱即用的人工智能學習工具。',
    'index.laserblockDesc': '利用激光切割技術加工的木質結構件。',
    'index.vvlinkDesc': '一套開箱即用物聯網工具包。',
    'index.vvboardDesc': '一款能運行 Python 的開源硬體。',
    'index.handpyDesc': '一款集成常見電子模組的開源硬體。',

    // 生態區 (首頁)
    'index.ecoTag': '生態夥伴',
    'index.ecoTitle1': '攜手共建',
    'index.ecoTitle2': '開源教育未來',
    'index.ecoDesc': '虛谷計劃的成長離不開一線教育工作者的實踐反饋、高校研究者的學術支撐、創客空間的社區運營，以及企業工程師的技術貢獻。我們期待與更多夥伴一起，讓優質的開源教育惠及每一位學生。',
    'index.ecoBecome': '成為夥伴',
    'index.ecoViewList': '查看項目列表',
    'index.eco.role1.name': '一線教師',
    'index.eco.role1.desc': '課程實踐 · 案例共創',
    'index.eco.role2.name': '高校院所',
    'index.eco.role2.desc': '學術研究 · 師資培訓',
    'index.eco.role3.name': '創客空間',
    'index.eco.role3.desc': '社區運營 · 活動組織',
    'index.eco.role4.name': '科技企業',
    'index.eco.role4.desc': '硬體研發 · 技術支持',

    // CTA (首頁)
    'index.ctaBigTitle': '開啟你的開源教育探索',
    'index.ctaBigDesc': '從一塊掌控板、一個 XEduPro 工具開始，和學生一起動手創造未來。',
    'index.ctaMaker': '走進創客',
    'index.ctaAI': '走進AI',

    // --- about.html ---
    'about.title': '關於計劃 | 虛谷計劃',
    'about.metaDesc': '虛谷計劃是一個包含硬體和軟體的開源教育項目，由一線教師聯合高校、創客空間和科技企業共同發起。',
    'about.pageTitle': '關於計劃',
    'about.pageSubtitle': '虛懷若谷，共創未來。源於教育，服務教育。',

    'about.historyTag': '發展歷程',
    'about.historyTitle1': '從創客教育',
    'about.historyTitle2': '到人工智能教育',
    'about.p1': '虛谷計劃最早從 2018 年發起，一開始以創客教育為核心方向，先後形成了<strong>虛谷號</strong>、<strong>掌控板</strong>、<strong>虛穀物聯</strong>和<strong>樂造模組</strong>等項目。其中掌控板項目發展良好，已成為國內中小學創客教育最常用的開源硬體之一，虛穀物聯項目中的 MQTT 伺服器"SIoT"也成為中小學物聯網教學的重要工具。',
    'about.p2': '2022 年之後，虛谷計劃團隊逐步轉向人工智能教育，<strong>XEduPro</strong>、<strong>OpenHydra</strong>、<strong>QuickForm</strong>、<strong>QuickClass</strong>、<strong>XEdu Client</strong> 等新項目持續加入，構建起覆蓋開源硬體、物聯網、人工智能工具與教學平臺的完整教育生態。',
    'about.p3': '虛谷計劃是一個包含硬體和軟體的開源教育項目，由一線教師聯合高校、創客空間和科技企業共同發起，致力於為中國青少年提供完整、開放、可複製、可實踐的人工智能與科技教育解決方案。',

    'about.feat1Title': '開源硬體',
    'about.feat1Desc': '從晶片選型到板載接口，從固件到案例，全部開源，教師與學生可自由拆解、修改與創造。',
    'about.feat2Title': '教學適配',
    'about.feat2Desc': '課程設計緊貼中小學資訊技術、綜合實踐與人工智能課程標準，降低教師開課門檻。',
    'about.feat3Title': '生態共建',
    'about.feat3Desc': '聯合高校、創客空間與企業，構建覆蓋工具、課程、賽事與社區服務的完整教育生態。',

    'about.timelineTag': '時間線',
    'about.timelineTitle': '成長足跡',
    'about.t1Title': '計劃發起',
    'about.t1Desc': '以創客教育為核心方向，推出虛谷號、掌控板等項目。',
    'about.t2Title': '物聯網布局',
    'about.t2Desc': '推出虛穀物聯項目，SIoT 成為中小學物聯網教學的重要工具。',
    'about.t3Title': '結構件方案',
    'about.t3Desc': '樂造模組為創客教育與 STEAM 提供低成本木質結構件方案。',
    'about.t4Title': '轉向人工智能教育',
    'about.t4Desc': '推出 XEduPro，成為人工智能初學者必用學習工具。',
    'about.t5Title': 'AI 教育生態成型',
    'about.t5Desc': 'OpenHydra、QuickForm、QuickClass、XEdu Client 陸續加入，覆蓋教學平臺、資料服務、課堂輔助與桌面實驗工作臺。',

    // --- maker.html ---
    'maker.title': '創客教育 | 虛谷計劃',
    'maker.metaDesc': '虛谷計劃創客教育項目：虛谷號、掌控板、樂造模組、虛穀物聯，為中國中小學創客教育、物聯網教學與 STEAM 實踐提供開源硬體與工具。',
    'maker.pageTitle': '創客教育',
    'maker.pageSubtitle': '虛谷計劃最早形成的四大核心項目，為中國中小學創客教育、物聯網教學與 STEAM 實踐提供可靠工具。',
    'maker.founder': '發起人（單位）：',

    'maker.vvboardDesc': '一款能運行 Python 的開源硬體，集成高性能處理器與通用單晶片晶片，內置多種通信和擴展接口，既可作為完整電腦使用，也可作為微型可編程智能終端。',
    'maker.handpyDesc': '一款集成常見電子模組的開源硬體，採用物聯網晶片 ESP32，整合常見輸入輸出模組，支持 Wi-Fi 與藍牙，是專為青少年編程教育而設計的開源硬體，已成為國內中小學創客教育最常用的開源硬體之一。',
    'maker.laserblockDesc': '利用激光切割技術加工的木質結構件，支持常見電子模組，為創客教育與 STEAM 提供低成本、高自由度的結構件方案。',
    'maker.vvlinkDesc': '一套開箱即用物聯網工具包，結合可部署在本地的 MQTT 伺服器軟體"SIoT"，配合掌控板、虛谷號搭建各種物聯網應用，是中小學物聯網教學的重要工具。',

    // --- ai.html ---
    'ai.title': '人工智能教育 | 虛谷計劃',
    'ai.metaDesc': '虛谷計劃人工智能教育項目：XEduPro、OpenHydra、QuickForm、QuickClass、XEdu Client，讓人工智能學習變得簡單、可實踐、可落地。',
    'ai.pageTitle': 'AI 教育新生態',
    'ai.pageSubtitle': '2022 年後，虛谷計劃逐步轉向人工智能教育。這些工具與平臺讓人工智能學習變得簡單、可實踐、可落地。',
    'ai.founder': '發起人（單位）：',

    'ai.xeduproDesc': '一套開箱即用的人工智能學習工具，已成為人工智能初學者必用學習工具。',
    'ai.openhydraDesc': '為中小學設計的 AI 教學平臺，讓學校輕鬆部署與開展人工智能課程。',
    'ai.quickformDesc': '為 AI 大模型開發交互網頁設計的資料服務，已擁有 3 萬多教師使用者。',
    'ai.quickclassDesc': '一個 AI 驅動的課堂教學輔助平臺，助力教師打造更高效的智能課堂。',
    'ai.xeduclientDesc': '面向 AI 教學場景的桌面實驗工作臺，把課程資源、Scratch 與 Python/Jupyter 實驗組織到同一入口。',

    // --- ecosystem.html ---
    'ecosystem.title': '生態夥伴 | 虛谷計劃',
    'ecosystem.metaDesc': '虛谷計劃生態夥伴：攜手一線教師、高校院所、創客空間與科技企業，共建開源教育未來。',
    'ecosystem.pageTitle': '生態夥伴',
    'ecosystem.pageSubtitle': '攜手共建開源教育未來，讓優質的開源教育惠及每一位學生。',

    'eco.role1.name': '一線教師',
    'eco.role1.desc': '課程實踐 · 案例共創',
    'eco.role2.name': '高校院所',
    'eco.role2.desc': '學術研究 · 師資培訓',
    'eco.role3.name': '創客空間',
    'eco.role3.desc': '社區運營 · 活動組織',
    'eco.role4.name': '科技企業',
    'eco.role4.desc': '硬體研發 · 技術支持',

    'steamTag': '合作活動',
    'steamTitle': '中小學STEAM教育大會',
    'steamSubtitle': '一年一度 · 堅持公益 · 眾師眾創。從2013年溫州的首次論壇出發，大會始終紮根一線，陪伴全國中小學創客、STEAM、人工智能與跨學科創新教育領域的教師共同成長。',
    'steam.stats1': '屆大會',
    'steam.stats2': '座城市',
    'steam.stats3': '年曆程',
    'steam.f1Title': '紮根一線',
    'steam.f1Desc': '大會堅持從一線教師的真實需求出發，匯聚教育專家、校長、教研員與教師，共同探討教學實踐中的真問題。',
    'steam.f2Title': '眾師眾創',
    'steam.f2Desc': '最早由民間一線教師發起，強調開源、分享與協作，形成了以教師社群為核心的眾創生態。',
    'steam.f3Title': '前沿引領',
    'steam.f3Desc': '從創客教育到STEAM教育，再到人工智能教育，大會始終站在中小學科技教育發展的最前沿。',
    'steam.f4Title': '公益開放',
    'steam.f4Desc': '大會始終保持開源、草根、免費的特色，為教育工作者提供平等交流、共享資源的平臺。',
    'steam.visit': '訪問大會官網',

    'steam.h2025Title': '第十三屆 · 新疆烏魯木齊',
    'steam.h2025Desc': '主題：AI通識教育與STEAM教育融合：從理念到行動。在烏魯木齊市第十九中學舉行，匯聚全國300餘名教育工作者，設置24個前沿主題工作坊。',
    'steam.h2024Title': '第十二屆 · 貴州遵義',
    'steam.h2024Desc': '主題：人工智能教育與創新。在歷史名城遵義舉辦，吸引全國各地千餘名教育工作者參與，設置14個主題工作坊。',
    'steam.h2023Title': '第十一屆 · 北京海淀',
    'steam.h2023Desc': '主題：走向"科創輸出"的人工智能教育。來自全國各地400多名代表共聚一堂，累計參會約兩萬四千人次，首次設立年度人物榮譽。',
    'steam.h2022Title': '第十屆 · 浙江溫州',
    'steam.h2022Desc': '主題：創客教育與新一代人工智能。十年後大會再次回到溫州，探討創客教育與新一代人工智能的融合發展。',
    'steam.h2021Title': '第九屆 · 線上',
    'steam.h2021Desc': '主題：資訊科技與跨學科學習。首次全程線上舉辦，超過7萬人收看直播，聚焦資訊科技與跨學科學習。',
    'steam.h2020Title': '第八屆 · 浙江寧波杭州灣新區',
    'steam.h2020Desc': '主題：開源生態構建，跨學科實踐，促進高素質創新人才培養。約200人到場，線上7個分會場、超千人觀看，舉行中國開源機器人教育元年圓桌論壇。',
    'steam.h2019Title': '第七屆 · 浙江寧波杭州灣新區',
    'steam.h2019Desc': '主題：STEAM教育、創客教育與普通高中資訊技術實驗。近600名教育工作者齊聚杭州灣，囊括32場學術報告與30個主題工作坊。',
    'steam.h2018Title': '第六屆 · 吉林長春',
    'steam.h2018Desc': '主題：STEAM教育與創客教育的新階段。600多人參加，發佈開源硬體掌控板，聯合長春市首屆校園創客嘉年華舉辦。',
    'steam.h2017Title': '第五屆 · 山東蓬萊',
    'steam.h2017Desc': '主題：STEAM教育與綜合實踐活動。在山東蓬萊召開，開展六大分論壇，全面探討STEAM教育的中國之路。',
    'steam.h2016Title': '第四屆 · 廣東佛山',
    'steam.h2016Desc': '聚焦：創客教育實踐與課程融合。論壇正式更名為"全國中小學STEAM教育大會"，吸引全國21省市近四百名教育工作者。',
    'steam.h2015Title': '第三屆 · 上海嘉定',
    'steam.h2015Desc': '聚焦：STEAM教育實踐與創新。改由中國電子學會現代教育技術分會主辦，任友群教授做《創客教育和STEAM教論辨析》主旨報告。',
    'steam.h2014Title': '第二屆 · 江蘇常州',
    'steam.h2014Desc': '聚焦：STEAM教育課程設計與實施。海峽兩岸創客教育團隊開始密切互動，首次啟用網路直播，在線人數近千人。',
    'steam.h2013Title': '第一屆 · 浙江溫州',
    'steam.h2013Desc': '主題：中小學STEAM教育創新論壇。在溫州中學成功舉辦，來自全國13個省市區的80多位代表齊聚，開啟持續十餘年的教師盛會。',

    'eco.ctaTitle': '加入虛谷計劃生態',
    'eco.ctaDesc': '無論您是一線教師、高校研究者、創客空間運營者還是企業工程師，歡迎與我們聯繫，共同推動開源教育的發展。',
    'eco.ctaBecome': '成為夥伴',

    // --- list.html ---
    'list.title': '項目列表 | 虛谷計劃',
    'list.metaDesc': '虛谷計劃是一個包含硬體和軟體的開源教育項目，由一線教師聯合高校、創客空間和科技企業共同發起，致力於為中國青少年提供完整、開放、可複製、可實踐的人工智能與科技教育解決方案。',
    'list.pageTitle': '項目列表',
    'list.pageSubtitle': '虛谷計劃最早從 2018 年發起，一開始以創客教育為核心方向，先後形成了虛谷號、掌控板、虛穀物聯和樂造模組等項目。2022 年之後，虛谷計劃團隊逐步轉向人工智能教育，一些新的項目持續加入，如 XEduPro、OpenHydra、QuickForm、QuickClass 和 XEdu Client。',

    'list.colName': '項目名稱',
    'list.colDesc': '項目簡介',
    'list.colYear': '發起時間',
    'list.colStatus': '狀態',
    'list.colDetail': '詳情',
    'list.yearSuffix': '年',
    'list.detailBtn': '詳情',

    'modal.title': '項目詳情',
    'modal.titleSuffix': ' 詳情',
    'modal.founder': '發起人（單位）',
    'modal.homepage': '項目主頁',
    'modal.repo': '代碼倉庫',
    'modal.empty': '暫無',
    'modal.close': '關閉',
    'modal.imageAlt': '圖標',

    // --- xedu-client.html ---
    'xedu.title': 'XEdu Client | 虛谷計劃',
    'xedu.metaDesc': 'XEdu Client 是面向 AI 教學場景的桌面實驗工作臺，幫助教師組織課程任務、互動體驗、Scratch 和 Python/Jupyter 實驗。',
    'xedu.badge': '2026 重點項目',
    'xedu.statusActive': '持續中',
    'xedu.tagline': '面向 AI 教學場景的桌面實驗工作臺',
    'xedu.desc': '面向學校機房和課堂實驗場景，把課程任務、互動體驗、Scratch 圖形編程與 Python/Jupyter 環境集中到同一桌面客戶端，降低教師發課和學生進入實驗的門檻。',
    'xedu.pill1': '課程任務中心',
    'xedu.pill2': '互動體驗',
    'xedu.pill3': 'Scratch',
    'xedu.pill4': 'Python 實驗',
    'xedu.download': '下載 V2.0 體驗版',
    'xedu.source': '查看源碼',
    'xedu.teacherDoc': '教師文檔',
    'xedu.releaseNote': 'V2.0 當前為預發佈體驗版；官網僅提供真實介面展示、下載與文檔入口。',

    'xedu.coreTag': '核心能力',
    'xedu.coreTitle': '一套桌面入口，覆蓋課堂裡的三種主要實驗方式',
    'xedu.cap1ImgAlt': 'XEdu Client 互動體驗頁面',
    'xedu.cap1Title': '互動體驗',
    'xedu.cap1Desc': '教師可先用實時畫面和關鍵點資料演示實驗對象，再引導學生理解攝像頭、人體關鍵點與 AI 模型結果的對應關係。',
    'xedu.cap2ImgAlt': 'XEdu Client Scratch 圖形編程介面',
    'xedu.cap2Title': 'Scratch 圖形編程',
    'xedu.cap2Desc': '學生直接在圖形化工作區拼接積木，把人體感知、攝像頭和課堂任務串成可運行作品，適合中學入門和項目展示。',
    'xedu.cap3ImgAlt': 'XEdu Client 內置 Python Jupyter 實驗介面',
    'xedu.cap3Title': 'Python / Jupyter 實驗',
    'xedu.cap3Desc': '進入 Jupyter Lab 後可直接閱讀課程 Notebook、運行 Python 代碼和調試實驗步驟，適合教師備課與進階實驗教學。',

    'xedu.pathTag': '課堂路徑',
    'xedu.pathTitle': '教師發起更集中，學生進入更直接',
    'xedu.teacherPathTitle': '教師使用路徑',
    'xedu.t1': '在課程任務中心選擇對應課次與實驗。',
    'xedu.t2': '先演示互動體驗，明確要觀察的圖像與資料。',
    'xedu.t3': '按班級水平切換到 Scratch 或 Python 實驗。',
    'xedu.t4': '統一把安裝與運行說明交給教師文檔維護。',
    'xedu.studentPathTitle': '學生學習路徑',
    'xedu.s1': '從任務頁進入同一節課的實驗入口。',
    'xedu.s2': '先理解現象，再在 Scratch 或 Notebook 中動手修改。',
    'xedu.s3': '結合攝像頭、關鍵點或硬體結果觀察程式反饋。',
    'xedu.s4': '把一次課堂任務發展成作品、代碼或實驗記錄。',

    'xedu.relTag': '產品關係',
    'xedu.relTitle': 'XEduPro 提供學習工具，XEdu Client 負責把課堂資源與實驗入口組織到桌面端',
    'xedu.relDesc': '這裡展示的是面向學校真實使用場景的桌面客戶端。它不是一個單獨部署在 GitHub Pages 上的網頁應用，而是承接本地課程資源、互動實驗、Scratch 與 Jupyter 環境的工作臺。官網負責說明真實介面、引導下載體驗版、查看源碼與教師安裝文檔。',

    // --- 通用 meta ---
    'site.defaultTitle': '虛谷計劃 | 中國的開源教育計劃',
    'site.defaultDesc': '虛谷計劃是一個包含硬體和軟體的開源教育項目，由一線教師聯合高校、創客空間和科技企業共同發起。',
    'site.logoText': '虛谷計劃',

    // --- 語言切換 ---
    'lang.toggle': '繁體中文',

  },
  id: {
    'nav.about': "Tentang",
    'nav.maker': "Edu Maker",
    'nav.ai': "Edu AI",
    'nav.ecosystem': "Ekosistem",
    'nav.list': "Proyek",
    'nav.menu': "Menu",
    'footer.tagline': "Inisiatif Pendidikan Sumber Terbuka Tiongkok — menerangi setiap ruang kelas dengan AI dan perangkat keras terbuka.",
    'footer.hotProjects': "Proyek Unggulan",
    'footer.nav': "Navigasi",
    'footer.aboutUs': "Tentang Kami",
    'footer.copyright': "© Komite VVPlan 2018 — 2026. Hak cipta dilindungi.",
    'proj.handpy': "Papan HandPy",
    'proj.vvlink': "VVLink IoT",
    'proj.vvboard': "VVBoard",
    'proj.laserblock': "Laserblock",
    'index.badge': "Pikiran terbuka, lembah terbuka — ciptakan masa depan bersama",
    'index.title1': "Biarkan AI & Perangkat Keras Terbuka",
    'index.title2': "Menerangi Setiap Ruang Kelas",
    'index.desc': "VVPlan (Open Valley Project) adalah inisiatif pendidikan sumber terbuka yang mencakup perangkat keras maupun perangkat lunak. Diluncurkan bersama oleh guru-guru garis depan bersama universitas, ruang maker, dan perusahaan teknologi, berdedikasi untuk memberikan solusi pendidikan AI & STEM yang lengkap, terbuka, dapat direplikasi, dan praktis bagi pemuda Tiongkok.",
    'index.ctaExplore': "Jelajahi Proyek",
    'index.ctaVision': "Pelajari Lebih Lanjut",
    'index.statProjects': "Proyek Sumber Terbuka Inti",
    'index.statFounded': "Didirikan",
    'index.statTeachers': "Pengguna Guru",
    'index.projectsTag': "Proyek Sumber Terbuka",
    'index.projectsTitle': "Sembilan Proyek Unggulan",
    'index.projectsSubtitle': "Dari perangkat keras maker hingga platform AI, VVPlan mencakup ekosistem teknologi pendidikan yang lengkap.",
    'index.viewAll': "Lihat Semua Proyek",
    'index.featuredBadge': "Proyek Unggulan 2026",
    'index.statusActive': "Aktif",
    'index.statusStopped': "Dihentikan",
    'index.featuredTagline': "Meja kerja laboratorium desktop untuk skenario pengajaran AI",
    'index.featuredDesc': "Mengatur tugas kursus, pengalaman interaktif, pemrograman visual Scratch, dan eksperimen Python/Jupyter ke dalam satu titik masuk desktop — memudahkan guru meluncurkan aktivitas kelas dan siswa masuk ke lingkungan laboratorium nyata.",
    'index.featured.p1': "Sumber Daya Kursus",
    'index.featured.p2': "Jupyter",
    'index.featured.p3': "Scratch",
    'index.featured.p4': "Akses Kelas",
    'index.featuredLearn': "Pelajari Lebih Lanjut",
    'index.featuredSource': "Lihat Sumber Kode",
    'card.visit': "Kunjungi proyek →",
    'index.xeduDesc': "Meja kerja laboratorium desktop untuk skenario pengajaran AI.",
    'index.quickclassDesc': "Platform asisten pengajaran kelas berbasis AI.",
    'index.quickformDesc': "Layanan data untuk merancang halaman web interaktif untuk model AI besar.",
    'index.openhydraDesc': "Platform pengajaran AI yang dirancang untuk sekolah K-12.",
    'index.xeduproDesc': "Kumpulan alat belajar AI siap pakai.",
    'index.laserblockDesc': "Komponen struktural kayu potong laser.",
    'index.vvlinkDesc': "Perangkat IoT siap pakai.",
    'index.vvboardDesc': "Papan sumber terbuka yang menjalankan Python.",
    'index.handpyDesc': "Papan sumber terbuka yang mengintegrasikan modul elektronik umum.",
    'index.ecoTag': "Mitra Ekosistem",
    'index.ecoTitle1': "Membangun Bersama",
    'index.ecoTitle2': "Masa Depan Pendidikan Sumber Terbuka",
    'index.ecoDesc': "VVPlan tumbuh berkat umpan balik nyata dari guru kelas, dukungan akademik dari peneliti universitas, operasi komunitas dari ruang maker, dan kontribusi teknik dari perusahaan teknologi. Kami berharap dapat bekerja sama dengan lebih banyak mitra untuk membawa pendidikan sumber terbuka berkualitas ke setiap siswa.",
    'index.ecoBecome': "Menjadi Mitra",
    'index.ecoViewList': "Lihat Semua Proyek",
    'index.eco.role1.name': "Guru",
    'index.eco.role1.desc': "Praktik · Ciptakan Bersama",
    'index.eco.role2.name': "Universitas",
    'index.eco.role2.desc': "Riset · Pelatihan",
    'index.eco.role3.name': "Ruang Maker",
    'index.eco.role3.desc': "Komunitas · Acara",
    'index.eco.role4.name': "Perusahaan Teknologi",
    'index.eco.role4.desc': "Perangkat Keras · Rekayasa",
    'index.ctaBigTitle': "Mulailah Perjalanan Pendidikan Sumber Terbuka Anda",
    'index.ctaBigDesc': "Mulailah dengan papan HandPy atau alat XEduPro — bangun masa depan bersama siswa Anda.",
    'index.ctaMaker': "Edu Maker",
    'index.ctaAI': "Edu AI",
    'about.title': "Tentang | VVPlan",
    'about.metaDesc': "VVPlan adalah inisiatif pendidikan sumber terbuka yang mencakup perangkat keras dan perangkat lunak, diluncurkan bersama oleh guru garis depan, universitas, ruang maker, dan perusahaan teknologi.",
    'about.pageTitle': "Tentang VVPlan",
    'about.pageSubtitle': "Pikiran terbuka, lembah terbuka. Dari pendidikan, untuk pendidikan.",
    'about.historyTag': "Cerita Kami",
    'about.historyTitle1': "Dari Pendidikan Maker",
    'about.historyTitle2': "Ke Pendidikan AI",
    'about.p1': "VVPlan pertama kali diluncurkan pada tahun 2018 dengan pendidikan maker sebagai fokus awalnya, menghasilkan proyek seperti <strong>VVBoard</strong>, <strong>HandPy</strong>, <strong>VVLink IoT</strong>, dan <strong>Laserblock</strong>. Di antaranya, HandPy telah berkembang menjadi salah satu papan sumber terbuka yang paling banyak digunakan untuk pendidikan maker K-12 di Tiongkok, sementara \"SIoT\" — server MQTT dari VVLink IoT — telah menjadi alat penting untuk pengajaran IoT K-12.",
    'about.p2': "Setelah tahun 2022, tim VVPlan secara bertahap bergeser ke arah pendidikan AI. Proyek baru seperti <strong>XEduPro</strong>, <strong>OpenHydra</strong>, <strong>QuickForm</strong>, <strong>QuickClass</strong>, dan <strong>XEdu Client</strong> terus bergabung, membentuk ekosistem pendidikan lengkap yang mencakup perangkat keras terbuka, IoT, alat AI, dan platform pengajaran.",
    'about.p3': "VVPlan adalah inisiatif pendidikan sumber terbuka yang mencakup perangkat keras maupun perangkat lunak, diluncurkan bersama oleh guru garis depan bersama universitas, ruang maker, dan perusahaan teknologi. Berdedikasi untuk memberikan solusi pendidikan AI & STEM yang lengkap, terbuka, dapat direplikasi, dan praktis bagi pemuda Tiongkok.",
    'about.feat1Title': "Perangkat Keras Sumber Terbuka",
    'about.feat1Desc': "Dari pemilihan chip hingga antarmuka di papan, dari firmware hingga proyek contoh — semuanya terbuka. Guru dan siswa dapat secara bebas membongkar, memodifikasi, dan menciptakan.",
    'about.feat2Title': "Siap untuk Pengajaran",
    'about.feat2Desc': "Desain kursus mengikuti standar kurikulum TIK, Praktik Terintegrasi, dan AI nasional — menurunkan hambatan bagi guru untuk mulai mengajar.",
    'about.feat3Title': "Pembangunan Ekosistem Bersama",
    'about.feat3Desc': "Bekerja sama dengan universitas, ruang maker, dan perusahaan untuk membangun ekosistem pendidikan lengkap yang mencakup alat, kursus, kompetisi, dan layanan komunitas.",
    'about.timelineTag': "Linimasa",
    'about.timelineTitle': "Perjalanan Kami",
    'about.t1Title': "Dimulai",
    'about.t1Desc': "Fokus pada pendidikan maker; meluncurkan VVBoard dan HandPy.",
    'about.t2Title': "Ekspansi IoT",
    'about.t2Desc': "Meluncurkan VVLink IoT; SIoT menjadi alat kunci untuk pengajaran IoT K-12.",
    'about.t3Title': "Solusi Struktural",
    'about.t3Desc': "Laserblock memberikan solusi struktural kayu murah untuk pendidikan maker dan STEAM.",
    'about.t4Title': "Beralih ke Pendidikan AI",
    'about.t4Desc': "Meluncurkan XEduPro — segera menjadi alat belajar utama bagi pemula AI.",
    'about.t5Title': "Ekosistem Pendidikan AI Terbentuk",
    'about.t5Desc': "OpenHydra, QuickForm, QuickClass, dan XEdu Client bergabung — mencakup platform pengajaran, layanan data, asisten kelas, dan meja kerja laboratorium desktop.",
    'maker.title': "Pendidikan Maker | VVPlan",
    'maker.metaDesc': "Proyek pendidikan maker VVPlan: VVBoard, HandPy, Laserblock, dan VVLink IoT — menyediakan perangkat keras terbuka dan alat untuk pendidikan maker K-12, pengajaran IoT, dan praktik STEAM di Tiongkok.",
    'maker.pageTitle': "Pendidikan Maker",
    'maker.pageSubtitle': "Empat proyek unggulan VVPlan yang paling awal — menyediakan alat yang andal untuk pendidikan maker K-12, pengajaran IoT, dan praktik STEAM di Tiongkok.",
    'maker.founder': "Pendiri: ",
    'maker.vvboardDesc': "Papan sumber terbuka yang menjalankan Python. Mengintegrasikan prosesor berkinerja tinggi dan chip mikrokontroler tujuan umum, dengan berbagai antarmuka komunikasi dan ekspansi. Berfungsi baik sebagai komputer lengkap maupun sebagai terminal cerdas kecil yang dapat diprogram.",
    'maker.handpyDesc': "Papan sumber terbuka yang mengintegrasikan modul elektronik umum. Didukung oleh chip IoT ESP32, dengan Wi-Fi dan Bluetooth bawaan. Dirancang khusus untuk pendidikan pemrograman pemuda, telah menjadi salah satu papan sumber terbuka yang paling banyak digunakan dalam pendidikan maker K-12 di Tiongkok.",
    'maker.laserblockDesc': "Komponen struktural kayu potong laser yang mendukung modul elektronik umum. Memberikan solusi struktural murah dan bebas tingkat tinggi untuk pendidikan maker dan STEAM.",
    'maker.vvlinkDesc': "Perangkat IoT siap pakai yang dikombinasikan dengan server MQTT yang dapat digunakan secara lokal \"SIoT\". Bersama HandPy dan VVBoard, memungkinkan pembangunan berbagai aplikasi IoT dan merupakan alat kunci untuk pengajaran IoT K-12.",
    'ai.title': "Pendidikan AI | VVPlan",
    'ai.metaDesc': "Proyek pendidikan AI VVPlan: XEduPro, OpenHydra, QuickForm, QuickClass, XEdu Client — membuat pembelajaran AI menjadi sederhana, praktis, dan dapat ditindaklanjuti.",
    'ai.pageTitle': "Ekosistem Pendidikan AI Baru",
    'ai.pageSubtitle': "Setelah tahun 2022, VVPlan secara bertahap bergeser ke arah pendidikan AI. Alat dan platform ini membuat pembelajaran AI menjadi sederhana, praktis, dan dapat ditindaklanjuti.",
    'ai.founder': "Pendiri: ",
    'ai.xeduproDesc': "Kumpulan alat belajar AI siap pakai — alat belajar utama bagi pemula AI.",
    'ai.openhydraDesc': "Platform pengajaran AI yang dirancang untuk sekolah K-12 — memudahkan sekolah untuk menyebarkan dan menjalankan kursus AI.",
    'ai.quickformDesc': "Layanan data untuk merancang halaman web interaktif untuk model AI besar — dengan lebih dari 30.000 pengguna guru.",
    'ai.quickclassDesc': "Platform asisten pengajaran kelas berbasis AI — membantu guru menciptakan ruang kelas pintar yang lebih efisien.",
    'ai.xeduclientDesc': "Meja kerja laboratorium desktop untuk skenario pengajaran AI — mengatur sumber daya kursus, eksperimen Scratch dan Python/Jupyter ke dalam satu titik masuk.",
    'ecosystem.title': "Mitra Ekosistem | VVPlan",
    'ecosystem.metaDesc': "Mitra ekosistem VVPlan: bekerja sama dengan guru, universitas, ruang maker, dan perusahaan teknologi untuk membangun masa depan pendidikan sumber terbuka.",
    'ecosystem.pageTitle': "Mitra Ekosistem",
    'ecosystem.pageSubtitle': "Membangun masa depan pendidikan sumber terbuka bersama, membawa pendidikan terbuka berkualitas ke setiap siswa.",
    'eco.role1.name': "Guru",
    'eco.role1.desc': "Praktik · Ciptakan Bersama",
    'eco.role2.name': "Universitas",
    'eco.role2.desc': "Riset · Pelatihan",
    'eco.role3.name': "Ruang Maker",
    'eco.role3.desc': "Komunitas · Acara",
    'eco.role4.name': "Perusahaan Teknologi",
    'eco.role4.desc': "Perangkat Keras · Rekayasa",
    'steamTag': "Acara",
    'steamTitle': "Konferensi Nasional Pendidikan STEAM K-12",
    'steamSubtitle': "Tahunan · Nirlaba · Diciptakan bersama oleh guru. Dimulai dari forum pertama di Wenzhou pada tahun 2013, konferensi ini selalu berakar pada praktik garis depan, menemani guru-guru di seluruh Tiongkok dalam pendidikan inovasi maker, STEAM, AI, dan interdisipliner.",
    'steam.stats1': "Konferensi",
    'steam.stats2': "Kota",
    'steam.stats3': "Tahun",
    'steam.f1Title': "Berakar pada Praktik",
    'steam.f1Desc': "Konferensi tetap fokus pada kebutuhan nyata guru garis depan, mengumpulkan pakar pendidikan, kepala sekolah, peneliti pengajaran, dan guru untuk membahas masalah nyata dalam praktik pengajaran.",
    'steam.f2Title': "Ciptakan Bersama yang Dipimpin Guru",
    'steam.f2Desc': "Awalnya diluncurkan oleh guru garis depan akar rumput, menekankan keterbukaan, berbagi, dan kolaborasi — membentuk ekosistem ciptakan bersama yang berpusat pada komunitas guru.",
    'steam.f3Title': "Kepemimpinan di Depan",
    'steam.f3Desc': "Dari pendidikan maker ke STEAM, dan sekarang ke pendidikan AI, konferensi selalu berada di garis depan perkembangan pendidikan teknologi K-12.",
    'steam.f4Title': "Gratis & Terbuka",
    'steam.f4Desc': "Konferensi mempertahankan karakter terbuka, akar rumput, dan gratisnya — menyediakan platform bagi pendidik untuk terhubung dan berbagi sumber daya secara setara.",
    'steam.visit': "Kunjungi Situs Web Konferensi",
    'steam.h2025Title': "Ke-13 · Urumqi, Xinjiang",
    'steam.h2025Desc': "Tema: Integrasi Literasi AI dan Pendidikan STEAM — Dari Konsep ke Aksi. Diselenggarakan di Sekolah Menengah ke-19 Urumqi, mengumpulkan lebih dari 300 pendidik dengan 24 lokakarya bertema mutakhir.",
    'steam.h2024Title': "Ke-12 · Zunyi, Guizhou",
    'steam.h2024Desc': "Tema: Pendidikan AI dan Inovasi. Diselenggarakan di kota bersejarah Zunyi, menarik lebih dari 1.000 pendidik dari seluruh Tiongkok dengan 14 lokakarya bertema.",
    'steam.h2023Title': "Ke-11 · Haidian, Beijing",
    'steam.h2023Desc': "Tema: Menuju Pendidikan AI dengan \"Output Ilmu Pengetahuan & Inovasi\". Lebih dari 400 delegasi hadir, partisipasi kumulatif sekitar 24.000 orang kali, penghargaan prestasi tahunan pertama.",
    'steam.h2022Title': "Ke-10 · Wenzhou, Zhejiang",
    'steam.h2022Desc': "Tema: Pendidikan Maker dan AI Generasi Baru. Sepuluh tahun kemudian, konferensi kembali ke Wenzhou untuk mengeksplorasi integrasi pendidikan maker dan AI generasi baru.",
    'steam.h2021Title': "Ke-9 · Daring",
    'steam.h2021Desc': "Tema: Teknologi Informasi dan Pembelajaran Interdisipliner. Konferensi daring pertama sepenuhnya, dengan lebih dari 70.000 penonton langsung.",
    'steam.h2020Title': "Ke-8 · Teluk Hangzhou, Ningbo, Zhejiang",
    'steam.h2020Desc': "Tema: Pembangunan Ekosistem Sumber Terbuka, Praktik Interdisipliner, Membentuk Bakat Inovatif Berkualitas Tinggi. Sekitar 200 orang di lokasi, 7 sub-venue daring dengan lebih dari 1.000 penonton. Meja bulat tentang Tahun Pertama Pendidikan Robotika Sumber Terbuka di Tiongkok.",
    'steam.h2019Title': "Ke-7 · Teluk Hangzhou, Ningbo, Zhejiang",
    'steam.h2019Desc': "Tema: Pendidikan STEAM, Pendidikan Maker, dan Eksperimen TIK SMA. Hampir 600 pendidik berkumpul — 32 laporan akademik dan 30 lokakarya bertema.",
    'steam.h2018Title': "Ke-6 · Changchun, Jilin",
    'steam.h2018Desc': "Tema: Tahap Baru Pendidikan STEAM dan Maker. Lebih dari 600 peserta, meluncurkan papan sumber terbuka HandPy, diselenggarakan bersama dengan karnaval maker kampus pertama Changchun.",
    'steam.h2017Title': "Ke-5 · Penglai, Shandong",
    'steam.h2017Desc': "Tema: Pendidikan STEAM dan Aktivitas Praktik Terintegrasi. Diselenggarakan di Penglai, Shandong, dengan enam sub-forum yang mengeksplorasi jalur Tiongkok dari pendidikan STEAM.",
    'steam.h2016Title': "Ke-4 · Foshan, Guangdong",
    'steam.h2016Desc': "Fokus: Praktik Pendidikan Maker dan Integrasi Kurikulum. Forum secara resmi berganti nama menjadi \"Konferensi Nasional Pendidikan STEAM K-12\", menarik hampir 400 pendidik dari 21 provinsi dan kota.",
    'steam.h2015Title': "Ke-3 · Jiading, Shanghai",
    'steam.h2015Desc': "Fokus: Praktik dan Inovasi Pendidikan STEAM. Diselenggarakan oleh Cabang Teknologi Pendidikan Modern dari Institut Elektronik Tiongkok. Prof. Ren Youqun memberikan pidato utama tentang \"Pendidikan Maker vs Pendidikan STEAM\".",
    'steam.h2014Title': "Ke-2 · Changzhou, Jiangsu",
    'steam.h2014Desc': "Fokus: Desain dan Implementasi Kurikulum Pendidikan STEAM. Tim pendidikan maker Lintas Selat mulai berinteraksi erat; siaran langsung pertama dengan hampir 1.000 penonton daring.",
    'steam.h2013Title': "Ke-1 · Wenzhou, Zhejiang",
    'steam.h2013Desc': "Tema: Forum Inovasi Pendidikan STEAM K-12. Berhasil diselenggarakan di Sekolah Menengah Wenzhou dengan lebih dari 80 delegasi dari 13 provinsi dan kota — memulai pertemuan guru yang berlanjut selama lebih dari satu dekade.",
    'eco.ctaTitle': "Bergabunglah dengan Ekosistem VVPlan",
    'eco.ctaDesc': "Baik Anda seorang guru garis depan, peneliti universitas, operator ruang maker, maupun insinyur — kami menyambut Anda untuk terhubung dengan kami dan bersama-sama memajukan pendidikan sumber terbuka.",
    'eco.ctaBecome': "Menjadi Mitra",
    'list.title': "Proyek | VVPlan",
    'list.metaDesc': "VVPlan adalah inisiatif pendidikan sumber terbuka yang mencakup perangkat keras dan perangkat lunak, diluncurkan bersama oleh guru garis depan, universitas, ruang maker, dan perusahaan teknologi — berdedikasi untuk pendidikan AI & STEM yang lengkap, terbuka, dapat direplikasi, dan praktis bagi pemuda Tiongkok.",
    'list.pageTitle': "Proyek",
    'list.pageSubtitle': "VVPlan pertama kali diluncurkan pada tahun 2018 dengan pendidikan maker sebagai fokus awalnya, menghasilkan proyek seperti VVBoard, HandPy, VVLink IoT, dan Laserblock. Setelah tahun 2022, tim secara bertahap bergeser ke arah pendidikan AI, dan proyek baru terus bergabung seperti XEduPro, OpenHydra, QuickForm, QuickClass, dan XEdu Client.",
    'list.colName': "Proyek",
    'list.colDesc': "Deskripsi",
    'list.colYear': "Diluncurkan",
    'list.colStatus': "Status",
    'list.colDetail': "Detail",
    'list.yearSuffix': "",
    'list.detailBtn': "Detail",
    'modal.title': "Detail Proyek",
    'modal.titleSuffix': " Detail",
    'modal.founder': "Pendiri",
    'modal.homepage': "Situs Web",
    'modal.repo': "Repositori",
    'modal.empty': "Tidak tersedia",
    'modal.close': "Tutup",
    'modal.imageAlt': "ikon",
    'xedu.title': "XEdu Client | VVPlan",
    'xedu.metaDesc': "XEdu Client adalah meja kerja laboratorium desktop untuk skenario pengajaran AI — membantu guru mengatur tugas kursus, pengalaman interaktif, eksperimen Scratch dan Python/Jupyter.",
    'xedu.badge': "Proyek Unggulan 2026",
    'xedu.statusActive': "Aktif",
    'xedu.tagline': "Meja kerja laboratorium desktop untuk skenario pengajaran AI",
    'xedu.desc': "Dirancang untuk laboratorium komputer sekolah dan eksperimen kelas, mengonsolidasikan tugas kursus, pengalaman interaktif, pemrograman visual Scratch, dan lingkungan Python/Jupyter ke dalam satu klien desktop — menurunkan hambatan bagi guru untuk meluncurkan dan bagi siswa untuk masuk ke aktivitas laboratorium.",
    'xedu.pill1': "Pusat Tugas Kursus",
    'xedu.pill2': "Pengalaman Interaktif",
    'xedu.pill3': "Scratch",
    'xedu.pill4': "Laboratorium Python",
    'xedu.download': "Unduh Demo V2.0",
    'xedu.source': "Lihat Sumber Kode",
    'xedu.teacherDoc': "Dokumentasi Guru",
    'xedu.releaseNote': "V2.0 saat ini adalah demo pra-rilis; situs web ini menampilkan UI nyata dan menyediakan tautan unduh serta dokumentasi.",
    'xedu.coreTag': "Kemampuan Inti",
    'xedu.coreTitle': "Satu Titik Masuk Desktop — Mencakup Tiga Mode Laboratorium Utama di Kelas",
    'xedu.cap1ImgAlt': "Halaman Pengalaman Interaktif XEdu Client",
    'xedu.cap1Title': "Pengalaman Interaktif",
    'xedu.cap1Desc': "Guru dapat terlebih dahulu mendemonstrasikan subjek laboratorium dengan visualisasi waktu nyata dan data titik kunci, lalu membimbing siswa memahami korelasi antara umpan kamera, titik kunci tubuh, dan hasil model AI.",
    'xedu.cap2ImgAlt': "Antarmuka pemrograman visual Scratch XEdu Client",
    'xedu.cap2Title': "Pemrograman Visual Scratch",
    'xedu.cap2Desc': "Siswa menyambungkan blok-blok bersama di ruang kerja visual, menghubungkan penginderaan tubuh, kamera, dan tugas kelas ke dalam karya yang dapat dijalankan — ideal untuk pengenalan tingkat menengah dan pameran proyek.",
    'xedu.cap3ImgAlt': "Antarmuka Python Jupyter bawaan XEdu Client",
    'xedu.cap3Title': "Lab Python / Jupyter",
    'xedu.cap3Desc': "Di dalam Jupyter Lab, siswa dapat langsung membaca Notebook kursus, menjalankan kode Python, dan men-debug langkah laboratorium — bagus untuk persiapan guru dan pengajaran laboratorium tingkat lanjut.",
    'xedu.pathTag': "Alur Kelas",
    'xedu.pathTitle': "Lebih Fokus untuk Guru, Lebih Langsung untuk Siswa",
    'xedu.teacherPathTitle': "Alur Kerja Guru",
    'xedu.t1': "Pilih pelajaran dan eksperimen yang sesuai dari pusat tugas kursus.",
    'xedu.t2': "Terlebih dahulu demonstrasikan pengalaman interaktif, klarifikasi visual dan data apa yang perlu diamati.",
    'xedu.t3': "Beralih ke eksperimen Scratch atau Python sesuai tingkat kelas.",
    'xedu.t4': "Satukan instruksi instalasi dan jalankan dalam dokumentasi guru.",
    'xedu.studentPathTitle': "Alur Kerja Siswa",
    'xedu.s1': "Masuk ke titik masuk laboratorium pelajaran yang sama dari halaman tugas.",
    'xedu.s2': "Pahami fenomena terlebih dahulu, lalu modifikasi di Scratch atau Notebook.",
    'xedu.s3': "Amati umpan balik program dengan menggabungkan kamera, titik kunci, atau hasil perangkat keras.",
    'xedu.s4': "Kembangkan tugas kelas menjadi karya, kode, atau catatan laboratorium.",
    'xedu.relTag': "Hubungan Produk",
    'xedu.relTitle': "XEduPro menyediakan alat belajar; XEdu Client mengatur sumber daya kelas dan titik masuk laboratorium ke desktop",
    'xedu.relDesc': "Yang ditampilkan di sini adalah klien desktop untuk skenario penggunaan sekolah nyata. Ini bukan aplikasi web tunggal yang disebarkan di GitHub Pages, melainkan meja kerja yang menghubungkan sumber daya kursus lokal, eksperimen interaktif, lingkungan Scratch dan Jupyter. Situs web ini menjelaskan antarmuka nyata, memandu unduhan versi demo, dan menautkan ke kode sumber serta dokumentasi instalasi guru.",
    'site.defaultTitle': "VVPlan | Inisiatif Pendidikan Sumber Terbuka Tiongkok",
    'site.defaultDesc': "VVPlan adalah inisiatif pendidikan sumber terbuka yang mencakup perangkat keras dan perangkat lunak, diluncurkan bersama oleh guru garis depan, universitas, ruang maker, dan perusahaan teknologi.",
    'site.logoText': "VVPlan",
    'lang.toggle': "Indonesia",
  }
};

/* ===== i18n Runtime ===== */

(function() {
  var STORAGE_KEY = 'vvplan.lang';
  var DEFAULT_LANG = 'zh';
  var SUPPORTED = ['zh', 'tw', 'en', 'id'];

  function getStoredLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && VVPLAN_I18N[saved]) return saved;
    } catch (e) {}
    return null;
  }

  function getUrlLang() {
    var hash = window.location.hash || '';
    var m = hash.match(/[?&]lang=(zh|tw|en|id)(?:&|$)/);
    if (m) return m[1];
    return null;
  }

  function getBrowserLang() {
    try {
      var bl = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (bl.indexOf('zh-tw') === 0 || bl.indexOf('zh-hk') === 0 || bl.indexOf('zh-hant') === 0) return 'tw';
      if (bl.indexOf('zh') === 0) return 'zh';
      if (bl.indexOf('id') === 0) return 'id';
      if (bl.indexOf('en') === 0) return 'en';
    } catch (e) {}
    return null;
  }

  function detectLang() {
    return getUrlLang() || getStoredLang() || getBrowserLang() || DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!VVPLAN_I18N[lang]) lang = DEFAULT_LANG;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
    // Update URL hash without reloading
    if (window.history && window.history.replaceState) {
      var hash = window.location.hash || '';
      var newHash;
      if (/[?&]lang=(zh|tw|en|id)/.test(hash)) {
        newHash = hash.replace(/([?&])lang=(zh|tw|en|id)/, '$1lang=' + lang);
      } else if (hash.indexOf('?') === -1) {
        newHash = '?lang=' + lang;
      } else {
        newHash = hash + '&lang=' + lang;
      }
      window.history.replaceState(null, '', window.location.pathname + '#' + newHash);
    }
  }

  function t(key) {
    var dict = VVPLAN_I18N[window.__VVPLAN_LANG__ || DEFAULT_LANG];
    return (dict && dict[key]) != null ? dict[key] : key;
  }

  function applyLang(lang) {
    window.__VVPLAN_LANG__ = lang;

    // <html lang>
    var htmlLang = 'en';
    if (lang === 'zh') htmlLang = 'zh-CN';
    else if (lang === 'tw') htmlLang = 'zh-TW';
    else if (lang === 'id') htmlLang = 'id';
    document.documentElement.setAttribute('lang', htmlLang);

    // Dropdown triggers: update visible label
    document.querySelectorAll('[data-i18n-dropdown]').forEach(function(dd) {
      var trigger = dd.querySelector('.lang-dropdown-trigger');
      if (trigger) trigger.setAttribute('data-lang', lang);
      // Update all option active states
      dd.querySelectorAll('[data-lang-option]').forEach(function(opt) {
        var optLang = opt.getAttribute('data-lang-option');
        if (optLang === lang) {
          opt.classList.add('is-active');
          opt.setAttribute('aria-selected', 'true');
          if (trigger) trigger.innerHTML = opt.innerHTML; // copy label
        } else {
          opt.classList.remove('is-active');
          opt.setAttribute('aria-selected', 'false');
        }
      });
    });

    // LEGACY toggle buttons (single button) — still supported for backward compat
    document.querySelectorAll('[data-i18n-toggle]').forEach(function(btn) {
      btn.setAttribute('data-lang', lang);
      btn.setAttribute('aria-pressed', 'false');
    });

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val != null && val !== key) {
        el.innerHTML = val;
      }
    });

    // Placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val && val !== key) el.setAttribute('placeholder', val);
    });

    // Alt text
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = t(key);
      if (val && val !== key) el.setAttribute('alt', val);
    });

    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      var val = t(key);
      if (val && val !== key) el.setAttribute('aria-label', val);
    });

    // document.title
    var titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) {
      var titleVal = t(titleKey);
      if (titleVal && titleVal !== titleKey) document.title = titleVal;
    }

    // meta description
    var descKey = document.body.getAttribute('data-i18n-desc');
    if (descKey) {
      var descVal = t(descKey);
      if (descVal && descVal !== descKey) {
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', descVal);
      }
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll('[data-i18n-dropdown].open').forEach(function(dd) {
      dd.classList.remove('open');
      var trigger = dd.querySelector('.lang-dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  function init() {
    var lang = detectLang();
    applyLang(lang);

    // Dropdown triggers
    document.querySelectorAll('.lang-dropdown-trigger').forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var dd = trigger.closest('[data-i18n-dropdown]');
        if (!dd) return;
        var wasOpen = dd.classList.contains('open');
        closeAllDropdowns();
        if (!wasOpen) {
          dd.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Dropdown option clicks
    document.querySelectorAll('[data-lang-option]').forEach(function(opt) {
      opt.addEventListener('click', function(e) {
        e.preventDefault();
        var optLang = opt.getAttribute('data-lang-option');
        if (optLang) {
          closeAllDropdowns();
          setLang(optLang);
        }
      });
    });

    // Close on document click (clean pattern, from lesson)
    document.addEventListener('click', function() {
      closeAllDropdowns();
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeAllDropdowns();
    });

    // LEGACY single-toggle buttons — fall back for old HTML
    document.querySelectorAll('[data-i18n-toggle]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var current = window.__VVPLAN_LANG__ || DEFAULT_LANG;
        // Three-way cycle: zh → tw → en → zh
        var next = current === 'zh' ? 'tw' : (current === 'tw' ? 'en' : 'zh');
        setLang(next);
      });
    });
  }

  // Expose globals
  window.__VVPLAN_I18N__ = VVPLAN_I18N;
  window.__VVPLAN_SET_LANG__ = setLang;
  window.__VVPLAN_T__ = t;

  // Init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
