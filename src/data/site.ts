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
  company?: string;
  summary?: L10n;
  tags?: string[];
  /** Brand mark on the right of the row: file name in public/brands/ */
  logo?: string;
}

export interface Project {
  name: string;
  summary: L10n;
  tags: string[];
  link?: string;
}

export interface Hobby {
  name: L10n;
  /** Optional one-line note; plain text, no ovals/links */
  note?: L10n;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Hide this link in a specific locale (e.g. a service unavailable in that region) */
  hideOn?: 'zh-CN';
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
    { label: 'GitHub', href: 'https://github.com/minuswhale' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/william-su-204b4a135',
      hideOn: 'zh-CN',
    },
  ] as SocialLink[],
};

export const experiences: Experience[] = [
  {
    years: '2020 — Now',
    role: { en: 'Lead Product TPM', cn: '产品 TPM 负责人', tw: '產品 TPM 負責人' },
    company: 'Meta',
    summary: {
      en: 'Leading Meta’s ads responsibility ads experiences that ensures regulatory compliance posture by building cutting-edge compliance product solutions that impact billions of users every day. Currently focused on GenAI transparency and compliance.',
      cn: '负责 Meta 广告责任与广告体验领域的产品，通过构建尖端的合规产品解决方案确保监管合规态势，每日影响数十亿用户。目前专注于生成式 AI（GenAI）透明度与合规。',
      tw: '負責 Meta 廣告責任與廣告體驗領域的產品，通過構建尖端的合規產品解決方案確保監管合規態勢，每日影響數十億用戶。目前專注於生成式 AI（GenAI）透明度與合規。',
    },
    tags: ['Privacy', 'Compliance', 'GenAI', 'Ads'],
    logo: 'meta',
  },
  {
    years: '2014 — 2020',
    role: { en: 'Senior Product Manager', cn: '高级产品经理', tw: '資深產品經理' },
    company: 'Microsoft',
    summary: {
      en: 'Founding member of Microsoft Defender for O365. Leveraged ML systems and detonation chambers and built SafeAttachments and SafeLinks from ground up into a business that generated $1B+ annualized revenue for top enterprises across the world.',
      cn: 'Microsoft Defender for O365 创始团队成员。借助机器学习系统与沙箱引爆（detonation chamber）技术，从零构建 SafeAttachments 与 SafeLinks，发展为面向全球头部企业、年化收入超 10 亿美元的业务。',
      tw: 'Microsoft Defender for O365 創始團隊成員。借助機器學習系統與沙箱引爆（detonation chamber）技術，從零構建 SafeAttachments 與 SafeLinks，發展為面向全球頭部企業、年化收入超 10 億美元的業務。',
    },
    tags: ['Security', 'Office 365'],
    logo: 'microsoft',
  },
  {
    years: '2013',
    role: { en: 'Application Developer Intern', cn: '应用程序开发实习生', tw: '應用程式開發實習生' },
    company: 'Hewlett-Packard',
    summary: {
      en: 'Internship. Built lightweight web apps for SharePoint Online on top of HP’s enterprise platform.',
      cn: '实习期间，在 HP 企业平台之上为 SharePoint Online 构建轻量级 Web 应用。',
      tw: '實習期間，在 HP 企業平台之上為 SharePoint Online 構建輕量級 Web 應用。',
    },
    tags: ['SharePoint', 'Web Apps'],
    logo: 'hp',
  },
];

export const others: Experience[] = [
  {
    years: '2024 — Now',
    role: { en: 'Real Estate Investor and Broker, Washington', cn: '华盛顿州房地产投资人与经纪人', tw: '華盛頓州地產投資者與代理' },
    company: 'Special Real Estate Group',
    summary: {
      en: 'Licensed real estate broker in Washington state, USA, specializing in residential home purchases.',
      cn: '美国华盛顿州持牌房地产经纪人，专注于住宅购房。',
      tw: '美國華盛頓州持牌地產代理，專注於住宅物業買賣。',
    },
  },
  {
    years: '2017 — Now',
    role: { en: 'Accredited Investor', cn: '认证投资者', tw: '認可投資者' },
  },
];

export const hobbies: Hobby[] = [
  {
    name: { en: 'Traveling', cn: '旅行', tw: '旅行' },
    note: {
      en: 'Avid traveler, always planning the next trip',
      cn: '热爱旅行，永远在计划下一趟旅程',
      tw: '熱愛旅行，永遠在計劃下一趟旅程',
    },
  },
  {
    name: { en: 'Pickleball', cn: '匹克球', tw: '匹克球' },
    note: {
      en: 'Weekend regular on the court',
      cn: '球场上的周末常客',
      tw: '球場上的週末常客',
    },
  },
  {
    name: { en: 'Photography', cn: '摄影', tw: '攝影' },
    note: { en: 'Chasing light', cn: '追光的人', tw: '追光的人' },
  },
  {
    name: { en: 'Gaming', cn: '游戏', tw: '遊戲' },
    note: { en: 'Strategy first', cn: '策略优先', tw: '策略優先' },
  },
  {
    name: { en: 'Camping and backcountry', cn: '露营与荒野徒步', tw: '露營與荒野遠足' },
    note: {
      en: 'Off the grid, on purpose',
      cn: '刻意断网，走进荒野',
      tw: '刻意斷網，走進荒野',
    },
  },
];
