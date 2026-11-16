// Placeholder personal data — swap with real details anytime.
// Strings are trilingual so the language selector covers everything.

export interface L10n {
  en: string;
  cn: string;
  tw: string;
}

export interface Experience {
  years: string;
  role: L10n;
  company: string;
  summary: L10n;
  tags: string[];
}

export interface Project {
  name: string;
  summary: L10n;
  tags: string[];
  link?: string;
}

export const site = {
  name: {
    en: 'William Su',
    cn: '苏睿闻',
    tw: '蘇睿聞',
  },
  title: {
    en: 'Software Engineer',
    cn: '软件工程师',
    tw: '軟件工程師',
  },
  email: 'hello@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
};

export const experiences: Experience[] = [
  {
    years: '2024 — Now',
    role: { en: 'Senior Software Engineer', cn: '高级软件工程师', tw: '資深軟件工程師' },
    company: 'Northwind Labs',
    summary: {
      en: 'Leading the web platform team. Cut page loads by 40% and shipped a design system used by 6 products.',
      cn: '负责 Web 平台团队。页面加载提速 40%，并交付了供 6 条产品线使用的设计系统。',
      tw: '負責 Web 平台團隊。頁面載入提速 40%，並交付了供 6 條產品線使用的設計系統。',
    },
    tags: ['TypeScript', 'React', 'Design Systems'],
  },
  {
    years: '2021 — 2024',
    role: { en: 'Software Engineer', cn: '软件工程师', tw: '軟件工程師' },
    company: 'Fabrikam',
    summary: {
      en: 'Built real-time collaboration features and the metrics pipeline behind them, from click to dashboard.',
      cn: '构建实时协作功能及其背后的指标管道，从点击事件到数据看板。',
      tw: '構建實時協作功能及其背後的指標管道，從點擊事件到數據儀表板。',
    },
    tags: ['WebSockets', 'Go', 'ClickHouse'],
  },
  {
    years: '2019 — 2021',
    role: { en: 'Frontend Engineer', cn: '前端工程师', tw: '前端工程師' },
    company: 'Contoso',
    summary: {
      en: 'First frontend hire. Turned a jQuery monolith into a component-driven app without stopping the train.',
      cn: '第一位前端工程师。在不中断业务的前提下，把 jQuery 单体应用逐步重构为组件化架构。',
      tw: '第一位前端工程師。在不中斷業務的前提下，把 jQuery 單體應用逐步重構為組件化架構。',
    },
    tags: ['Vue', 'Accessibility', 'Refactoring'],
  },
];

export const projects: Project[] = [
  {
    name: 'glowchart',
    summary: {
      en: 'Real-time observability dashboards rendering 100k points at 60fps in the browser.',
      cn: '实时可观测性仪表盘，浏览器中以 60fps 渲染 10 万数据点。',
      tw: '實時可觀測性儀表板，瀏覽器中以 60fps 渲染 10 萬數據點。',
    },
    tags: ['Rust → WASM', 'WebGL'],
    link: 'https://github.com/',
  },
  {
    name: 'paperkit',
    summary: {
      en: 'A markdown-first note toolkit with backlinks, fast search, and zero-lock file format.',
      cn: '以 Markdown 为核心的笔记工具：双向链接、极速搜索、无锁定文件格式。',
      tw: '以 Markdown 為核心的筆記工具：雙向連結、極速搜索、無鎖定檔案格式。',
    },
    tags: ['TypeScript', 'Astro'],
    link: 'https://github.com/',
  },
  {
    name: 'tinywave',
    summary: {
      en: 'A 3 kB audio visualizer library. Small enough to inline, pretty enough to ship.',
      cn: '仅 3 kB 的音频可视化库。小到可以内联，美到可以直接上线。',
      tw: '僅 3 kB 的音頻視覺化函數庫。小到可以內嵌，美到可以直接上線。',
    },
    tags: ['Web Audio', 'Canvas'],
    link: 'https://github.com/',
  },
  {
    name: 'this website',
    summary: {
      en: 'Hand-built with Astro: three languages, two themes, zero trackers, all craft.',
      cn: '用 Astro 手工打造：三种语言、双主题、零追踪器，全是细节。',
      tw: '用 Astro 手工打造：三種語言、雙主題、零追蹤器，全是細節。',
    },
    tags: ['Astro', 'CSS'],
    link: 'https://github.com/',
  },
];
