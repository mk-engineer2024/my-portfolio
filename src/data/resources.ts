// リソースプール - 全リソースを細かく分割して格納
// 各ページで必要なリソースだけimportして使用可能

// 基本情報
export const name = "Kota";
export const role = "CAD Automation Engineer";
export const roleSecondary = "SOLIDWORKS & NX Automation";
export const fullRole = `${role} / ${roleSecondary}`;

// プロフィール
export const bio = "上場企業PLエンジニアとして、CAD自動化の開発に従事。";

// リンク
export const companyLink: { label: string; url?: string } = {
  label: "Company",
  // url: "https://technologies.link-u.co.jp/company"
};

export const blogLink: { label: string; url?: string } = {
  label: "Tech Blog",
  // url: "https://zenn.dev/nanyanen"
};

export const githubLink: { label: string; url: string } = {
  label: "GitHub",
  url: "https://github.com/nanyanen87"
};

// スキル
export const skill_vba = "VBA";
export const skill_vbnet = "VB.NET";
export const skill_solidworks = "SOLIDWORKS";
export const skill_nx = "NX";

// export const skill_html = "HTML";
// export const skill_css = "CSS";
// export const skill_typescript = "TypeScript";
// export const skill_React = "React";
// export const skill_nextjs = "Next.js";
// export const skill_supabase = "Supabase";
// export const skill_postgresql = "PostgreSQL";
// export const skill_cloudflare = "Cloudflare Images";
// export const skill_rls = "RLS";
// export const skill_r2 = "R2";
// export const skill_nodejs = "Node.js";

// コアスタック（配列形式）
export const coreStack = [
  skill_vba,
  skill_vbnet,
  skill_solidworks,
  skill_nx
];

// 専門分野
export const expertise_automation = "CAD自動化（SOLIDWORKS/NX）";
export const expertise_requirementAnalysis = "設計現場の課題抽出と要件定義";

export const expertiseList = [
  expertise_automation,
  expertise_requirementAnalysis
];

// 強み
export const strengths = "製造業の現場理解をベースに、CAD操作・図面処理・ファイル運用などの面倒な作業を自動化。要件整理から構築まで一気通貫で対応可能。";

// 現在のフォーカス
export const focus_platform = "SOLIDWORKSマクロ/アドインの開発と自動化パッケージ構築";
export const focus_observability = "設計データの整合性チェック・ログ管理自動化";

export const currentFocusList = [
  focus_platform,
  focus_observability
  // focus_storage,
  // focus_ai
];

// セクション見出し
export const section_profile = "Profile";
export const section_coreStack = "Core Stack";
export const section_expertise = "Expertise";
export const section_strengths = "Strengths";
export const section_currentFocus = "Current Focus";

// その他のメタデータ
export const defaultTitle = `${name} – ${fullRole}`;
export const lang = "ja";
