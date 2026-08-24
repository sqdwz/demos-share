window.presentationData = {
  meta: {
    title: '把重复工作，变成可复用工具｜AI Agent × GIS 分享',
    shortTitle: 'AI Agent × GIS 分享'
  },
  ui: {
    previous: '上一场景',
    next: '下一场景',
    present: 'PRESENT',
    scan: '手机扫码打开',
    publicAccess: '公开访问 · 无需登录',
    clickExample: '点击问题，查看一个短例子',
    example: '一个例子',
    conclusion: '核心结论',
    clickDetail: '点击步骤，查看说明',
    ricsPrompt: '点击任一步骤，查看一句概述并进入对应章节',
    solution: '解决',
    sectionOne: '第一节',
    sectionTwo: '第二节',
    qna: 'Q&A'
  },
  hero: {
    id: 'home',
    chapter: '开场',
    title: ['把重复工作，', '变成可复用工具'],
    subtitle: '从 AI Agent 使用经验，到 AI × GIS 的一次真实落地',
    sections: [
      { label: '第一节', title: 'AI Agent 使用经验分享', target: 'agent-intro' },
      { label: '第二节', title: 'GIS 自动化案例', target: 'case-intro' }
    ],
    flow: ['发现重复工作', '拆解规则', '描述给 AI', '小样本验证', '自动化', '沉淀工具']
  },
  agentIntro: {
    id: 'agent-intro',
    chapter: '第一节 · AI Agent 使用经验',
    eyebrow: '第一节 · 约 10 分钟',
    title: 'AI Agent 使用经验分享',
    statement: '真正的难点，不是“会不会用 AI”，而是能不能把自己的工作想清楚、说清楚。',
    before: { label: '以前', flow: ['问 AI', '得到答案'] },
    now: { label: '现在', flow: ['描述任务', 'AI 执行', '人判断', '继续修改', '得到结果'] },
    note: 'AI 已经不只是聊天，可以开始帮助我们完成一些具体工作。'
  },
  experience: {
    id: 'experience',
    chapter: '第一节 · 六个实际经验',
    eyebrow: '六个实际使用经验',
    title: '先把工作想清楚，再交给 AI',
    items: [
      {
        key: 'imagine',
        number: '01',
        label: '想象力',
        question: '哪些工作，本来就可以流程化？',
        example: '每次外业回来都要按编号整理照片，如果规则固定，就可以尝试让 AI 帮我们自动分类。',
        conclusion: '先想到“这件事能不能少做几遍”，才会想到用 AI。'
      },
      {
        key: 'express',
        number: '02',
        label: '需求表达',
        question: '为什么“帮我整理一下”效果经常不好？',
        example: '与其说“帮我整理表格”，不如说“把多个表格合并成一个，保留编号、姓名和面积三列”。',
        conclusion: '你说得越具体，AI 猜得越少。'
      },
      {
        key: 'boundary',
        number: '03',
        label: '边界约束',
        question: '为什么不仅要告诉 AI 做什么，还要告诉它不能做什么？',
        example: '让 AI 整理照片时，可以明确：“只复制和分类，不删除原照片。”',
        conclusion: '不仅要说做什么，也要明确哪些不能做。'
      },
      {
        key: 'sample',
        number: '04',
        label: '小样本测试',
        question: '为什么不能一开始就处理全部数据？',
        example: '因为规则一旦有问题，处理的数据越多，返工和检查成本越高。几百张外业相片先拿 20 张验证逻辑，确认分类正确后，再处理全部。',
        conclusion: '先小范围试错，再批量执行。'
      },
      {
        key: 'context',
        number: '05',
        label: '上下文管理',
        question: '为什么聊得越久，AI 有时越容易“忘事”？',
        example: '前面已经约定照片按照“房屋编号”命名，连续修改很多轮以后，AI 可能又换了一套命名方式。任务比较长时，关键规则最好重新告诉它一次。',
        conclusion: '重要规则，不要只说一次。'
      },
      {
        key: 'security',
        number: '06',
        label: '数据安全',
        question: '什么资料不能随便上传给 AI？',
        example: '身份证、住户信息、权属资料、内部项目数据等敏感资料，不应直接上传到公开 AI 服务。',
        conclusion: '能脱敏先脱敏，敏感资料优先本地处理。'
      }
    ]
  },
  commonProblems: {
    id: 'common-problems',
    chapter: '第一节 · 常见问题',
    eyebrow: '三个常见问题',
    title: 'AI 有时候不是不会做，而是“做多了”',
    items: [
      { number: '01', title: '理解错了', text: '你说“整理一下”，它理解的整理方式可能和你想的不一样。', solution: '说具体' },
      { number: '02', title: '一次做太多', text: '几百个文件一起处理，如果规则有问题，后面检查和返工都会很麻烦。', solution: '先少量测试' },
      { number: '03', title: '聊太久跑偏', text: '前面定好的编号、格式和规则，经过很多轮修改后可能被忽略。', solution: '关键规则重新说明' }
    ],
    summary: ['说具体', '先测试', '再批量']
  },
  method: {
    id: 'method',
    chapter: '第一节 · AI Agent 六步法',
    eyebrow: '经验沉淀',
    title: '我的 AI Agent 六步法',
    items: [
      { number: '01', title: '定义目标', prompt: '我要最终得到什么？', detail: '先明确最终成果，而不是让 AI 自己猜。' },
      { number: '02', title: '描述规则', prompt: '输入是什么？怎么判断？输出什么？', detail: '把自己平时怎么做这件事，一步一步说出来。' },
      { number: '03', title: '限定边界', prompt: '哪些东西不能动？', detail: '例如整理照片时，只允许复制分类，不允许删除原文件。' },
      { number: '04', title: '小样本验证', prompt: '先试少量数据。', detail: '先拿 10～20 条真实数据测试，确认正确后再处理全部。' },
      { number: '05', title: '分阶段迭代', prompt: '一个问题一个问题解决。', detail: '不要求 AI 一次把所有功能做完，先完成核心功能，再逐步增加。' },
      { number: '06', title: '数据安全', prompt: '敏感资料优先本地处理。', detail: '能脱敏先脱敏，涉及内部资料时优先本地脚本或本地 AI。' }
    ],
    statement: '提示词不是越长越好，而是越少歧义越好。'
  },
  practices: {
    id: 'practices',
    chapter: '第一节 · 已有实践',
    eyebrow: '目前已经做了什么',
    title: '从“手工重复”到“配置后运行”',
    items: [
      { title: '外业照片按编号分类', flow: ['读取照片', '获取编号', '自动分类', '异常检查'] },
      { title: '多份表格自动合并', flow: ['读取表格', '检查字段', '自动合并', '输出结果'] }
    ],
    transition: '接下来用一个真实 GIS 工作，看这些方法怎样真正变成生产工具。'
  },
  caseIntro: {
    id: 'case-intro',
    chapter: '第二节 · GIS 自动化案例',
    eyebrow: '第二节 · GIS 自动化案例',
    title: 'ArcGIS Pro 单房屋正射影像批量出图',
    subtitle: '从 96 次重复操作，到一次配置批量完成',
    rics: [
      { number: '01', key: 'background', label: '背景介绍', target: 'background', summary: '现场新增需求：为 96 个房屋编号分别制作位置图。' },
      { number: '02', key: 'challenge', label: '案例难点', target: 'challenge', summary: '每张图动作简单，但同样的流程需要重复 96 次。' },
      { number: '03', key: 'solution', label: '解决方案', target: 'solution', summary: '先把人工操作说成规则，再让 AI Agent 帮助实现。' },
      { number: '04', key: 'result', label: '结果', target: 'results', summary: '形成可重复运行的工具，96 张约 11 分钟完成。' },
      { number: '05', key: 'lessons', label: '经验总结', target: 'lessons', summary: '把一次提速，变成以后都能复用的工作方式。' }
    ]
  },
  background: {
    id: 'background',
    chapter: 'RICS 01 · 背景介绍',
    rics: 'background',
    eyebrow: 'RICS 01 · 背景介绍',
    title: '现场突然多了一个新需求',
    text: '现场调查推进后，工作组提出：需要为每个房屋编号单独制作一张正射影像图，方便社区工作人员查看和核对。',
    number: '96',
    numberLabel: '个房屋编号',
    checklistTitle: '每张图需要',
    checklist: ['房屋位置', '房屋边界', '房屋编号', '图名', '比例尺']
  },
  challenge: {
    id: 'challenge',
    chapter: 'RICS 02 · 案例难点',
    rics: 'challenge',
    eyebrow: 'RICS 02 · 案例难点',
    title: '一张很简单，96 张就不简单了',
    flow: ['找到房屋', '调整地图范围', '修改标题', '调整比例尺', '控制房屋显示', '导出图片'],
    multiplier: '× 96',
    sequence: ['第 1 张', '第 2 张', '第 3 张', '……', '第 96 张'],
    statement: '真正消耗时间的，不是难度，而是重复。'
  },
  automationFit: {
    id: 'automation-fit',
    chapter: 'RICS 02 · 为什么值得自动化',
    rics: 'challenge',
    eyebrow: '现场提问',
    title: '这项工作有什么特点？',
    items: [
      { title: '规则明确', text: '每张图处理步骤基本一致' },
      { title: '高度重复', text: '相同操作需要执行 96 次' },
      { title: '输入固定', text: '已有房屋编号和空间数据' },
      { title: '输出固定', text: '最终都是统一格式的位置图' }
    ],
    idle: '点击符合的特点',
    partial: '这些特点越集中，自动化价值越明显。',
    complete: '这就是典型适合自动化的工作。'
  },
  solution: {
    id: 'solution',
    chapter: 'RICS 03 · 解决方案',
    rics: 'solution',
    eyebrow: 'RICS 03 · 解决方案',
    title: '我没有先写代码，而是先把自己的操作说清楚',
    manual: { label: '人工操作', flow: ['找房屋', '调整范围', '显示当前房屋', '修改标题', '导出'] },
    program: { label: '程序规则', flow: ['读取编号', '自动定位', '自动确定范围', '自动更新标题', '自动导出'] },
    bridge: ['人的工作经验', '明确规则', 'AI 实现'],
    statement: 'AI 真正需要的不是“帮我出图”，而是清楚的业务规则。'
  },
  roles: {
    id: 'roles',
    chapter: 'RICS 03 · 人与 AI 分工',
    rics: 'solution',
    eyebrow: '人和 AI 怎么分工',
    title: '人负责规则，AI 负责实现',
    human: {
      title: '人负责',
      items: ['告诉 AI 我要什么', '提供实际工作规则', '判断结果是否正确', '发现特殊情况']
    },
    ai: {
      title: 'AI Agent 负责',
      items: ['根据需求生成实现方案', '完成重复流程', '根据反馈继续修改', '最终形成可重复使用的工具']
    },
    statement: '业务判断不能外包，重复执行可以。'
  },
  debugging: {
    id: 'debugging',
    chapter: 'RICS 03 · 调试过程',
    rics: 'solution',
    eyebrow: '调试过程',
    title: '不是一次就成功',
    steps: [
      { number: '①', title: '先测试几个房屋', issue: '固定比例尺不能适应大小不同的房屋。' },
      { number: '②', title: '调整比例尺规则', issue: '不同大小房屋自动选择合适显示范围。' },
      { number: '③', title: '再完善标题、图层和输出', issue: '最终形成可重复运行的图形化工具。' }
    ],
    stats: [
      { value: '17 分钟', label: '完成第一版可运行工具调试' },
      { value: '13 项', label: '可配置参数' }
    ]
  },
  results: {
    id: 'results',
    chapter: 'RICS 04 · 结果',
    rics: 'result',
    eyebrow: 'RICS 04 · 结果',
    title: '一次配置，批量运行',
    metrics: [
      { value: '96', label: '房屋编号' },
      { value: '17 分钟', label: '调试时间' },
      { value: '13 项', label: '工具参数' },
      { value: '≈ 7 秒', label: '单张出图' }
    ],
    before: { label: 'Before', title: '人工逐张处理', value: '大半天' },
    after: { label: 'After', title: '自动批量运行', value: '96 张约 11 分钟' },
    statement: '最重要的不是这 96 张快了多少，而是以后再有 100 张、200 张，工具依然可以继续使用。'
  },
  scale: {
    id: 'scale',
    chapter: 'RICS 04 · 数量互动',
    rics: 'result',
    eyebrow: '数量互动 · 7 秒 / 张',
    title: '如果不是 96 张，而是更多呢？',
    min: 20,
    max: 300,
    initial: 96,
    secondsPerItem: 7,
    countLabel: '房屋数量',
    timeLabel: '预计运行',
    statement: '人工工作量跟着数量增长，自动化只是多运行一会儿。'
  },
  lessons: {
    id: 'lessons',
    chapter: 'RICS 05 · 经验总结',
    rics: 'lessons',
    eyebrow: 'RICS 05 · 经验总结',
    title: '这个案例真正改变了什么？',
    before: { label: '以前', text: '怎么才能把 96 张图做得更快？' },
    after: { label: '现在', text: '为什么这 96 次操作还要由人重复完成？' },
    items: [
      { number: '01', title: '先找重复', text: '高频重复的动作，最值得优先观察。' },
      { number: '02', title: '再拆规则', text: '能说清楚步骤，才有机会自动化。' },
      { number: '03', title: '最后做成工具', text: '一次解决问题，不如让下一次不用再解决。' }
    ]
  },
  summary: {
    id: 'summary',
    chapter: '整场总结 · 互动判断',
    eyebrow: '整场总结互动',
    title: '什么工作值得优先尝试 AI？',
    items: ['高频重复', '规则明确', '输入输出固定', '每次需要 20～60 分钟'],
    feedback: [
      '先观察，不一定适合自动化。',
      '可以尝试 AI 辅助，但不必急着开发工具。',
      '已经有一定自动化价值，可以先做小样本验证。',
      '很适合尝试 AI + 自动化。',
      '优先级很高，这类工作最值得先从人工流程中拿掉。'
    ]
  },
  end: {
    id: 'end',
    chapter: '最后一屏 · Q&A',
    eyebrow: '最后留一个问题',
    title: '我的哪些重复工作，本来就不应该一直手工做？',
    flow: ['找到一个重复任务', '拆成规则', '描述给 AI', '先拿少量数据测试', '再批量运行', '沉淀为工具'],
    footer: 'Q&A'
  }
};
