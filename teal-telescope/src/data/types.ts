/** 站点全局配置 */
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

/** 导航链接 */
export interface NavItem {
  label: string;
  href: string;
}

/** 个人信息 */
export interface Identity {
  firstName: string;
  country: string;
  occupation: string;
  hobbies: string[];
}

/** 博客文章 frontmatter */
export interface PostFrontmatter {
  layout?: string;
  title: string;
  pubDate: string | Date;
  description?: string;
  author?: string;
  image?: {
    url: string;
    alt: string;
  };
  tags?: string[];
}

/** 博客文章（含 frontmatter + 渲染信息） */
export interface Post {
  url: string;
  frontmatter: PostFrontmatter;
}

/** 社交链接 */
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
