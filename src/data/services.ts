import type { Locale } from '~/i18n/ui';

export interface ServiceDetail {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  offerings: string[];
  process: Array<{ step: string; title: string; detail: string }>;
  kpis: Array<{ label: string; value: string }>;
  seoTitle: string;
  seoDescription: string;
}

const tr: ServiceDetail[] = [
  {
    slug: 'dijital-strateji',
    title: 'Dijital Strateji',
    summary: 'İşinize özel dijital dönüşüm yol haritası ve uzun vadeli vizyon planlaması.',
    intro:
      'Dijital strateji; mevcut durumun haritasını çıkarmak, fırsatları belirlemek ve ölçülebilir hedeflerle ilerleyen bir yol haritası kurmaktır. Yezuri olarak yönetim ekipleriyle birlikte, iş hedeflerinizi destekleyen pragmatik bir dijital strateji oluşturuyoruz.',
    offerings: [
      'Mevcut durum (as-is) ve hedef durum (to-be) analizi',
      'Rakip ve sektör benchmark çalışmaları',
      'Yatırım önceliklendirme ve ROI modelleme',
      'Çok yıllık dijital dönüşüm yol haritası',
      'Dijital olgunluk değerlendirmesi',
      'Yönetim ekibine yönelik dijital eğitim ve workshop',
    ],
    process: [
      { step: '01', title: 'Keşif Workshopları', detail: 'Yönetici ekiple bir araya gelir, mevcut yapıyı ve hedefleri belirleriz.' },
      { step: '02', title: 'Analiz', detail: 'Süreç, teknoloji ve organizasyon analizleri ile fırsat haritası çıkarılır.' },
      { step: '03', title: 'Strateji Belgesi', detail: 'Önceliklendirilmiş projeler, KPI\'lar ve zaman çizelgesi sunulur.' },
      { step: '04', title: 'Uygulama Desteği', detail: 'Strateji belgesinin hayata geçişinde yanınızda oluruz.' },
    ],
    kpis: [
      { label: 'Ortalama proje ROI', value: '+%180' },
      { label: 'Strateji teslim süresi', value: '6-8 hafta' },
      { label: 'Müşteri memnuniyeti', value: '%96' },
    ],
    seoTitle: 'Dijital Strateji Danışmanlığı — Yezuri',
    seoDescription:
      'İşinize özel dijital dönüşüm yol haritası, dijital olgunluk değerlendirmesi ve önceliklendirilmiş yatırım planı. Yezuri ile stratejinizi netleştirin.',
  },
  {
    slug: 'surec-otomasyonu',
    title: 'Süreç Otomasyonu',
    summary: 'Tekrarlayan iş akışlarını RPA ve özel entegrasyonlarla otomatikleştirin.',
    intro:
      'Manuel ve tekrarlayan görevler hem maliyeti hem de hata payını arttırır. Yezuri\'nin süreç otomasyonu hizmetiyle; finans, IK, operasyon ve satış gibi alanlardaki rutin işleri RPA, iş akışı motorları ve özel API entegrasyonlarıyla otomatikleştiriyoruz.',
    offerings: [
      'Süreç keşfi ve fırsat tespiti',
      'RPA (UiPath, Power Automate, custom Node/Python botları)',
      'BPM ve iş akışı yönetimi',
      'OCR + akıllı belge işleme',
      'Sistemler arası API entegrasyonu',
      'Otomatik raporlama ve dashboardlar',
    ],
    process: [
      { step: '01', title: 'Süreç Keşfi', detail: 'Otomasyona uygun adımları belirleriz, ROI hesaplarız.' },
      { step: '02', title: 'Pilot Bot', detail: '2-4 hafta içinde bir pilot otomasyon hayata geçer.' },
      { step: '03', title: 'Ölçeklendirme', detail: 'Başarılı pilotlardan sonra organizasyon genelinde yaygınlaştırma.' },
      { step: '04', title: 'Bakım ve İzleme', detail: '7/24 izleme ve sürekli iyileştirme desteği.' },
    ],
    kpis: [
      { label: 'Ortalama zaman tasarrufu', value: '320 saat / ay' },
      { label: 'Hata oranı azalışı', value: '-%92' },
      { label: 'Pilot teslim süresi', value: '2-4 hafta' },
    ],
    seoTitle: 'Süreç Otomasyonu ve RPA Çözümleri — Yezuri',
    seoDescription:
      'RPA, iş akışı motorları ve özel API entegrasyonlarıyla tekrarlayan işlerinizi otomatikleştirin. Hata oranını düşürün, verimliliği arttırın.',
  },
  {
    slug: 'web-ve-mobil-gelistirme',
    title: 'Web ve Mobil Geliştirme',
    summary: 'Performans odaklı kurumsal web platformları ve mobil uygulamalar.',
    intro:
      'Modern web ve mobil dünyada hız, ölçeklenebilirlik ve kullanıcı deneyimi başarının anahtarıdır. Yezuri olarak; kurumsal web platformları, B2B portallar, müşteri uygulamaları ve özel SaaS ürünleri tasarlıyor ve geliştiriyoruz.',
    offerings: [
      'Kurumsal web siteleri ve B2B portallar',
      'SaaS ve PaaS ürünleri',
      'iOS ve Android native uygulamalar',
      'React Native / Flutter cross-platform uygulamalar',
      'Headless CMS entegrasyonu',
      'API ve backend mimarisi',
      'UX/UI tasarım ve prototipleme',
    ],
    process: [
      { step: '01', title: 'Keşif ve UX', detail: 'Kullanıcı araştırması, akış tasarımı ve prototipleme.' },
      { step: '02', title: 'Tasarım', detail: 'Yüksek sadakatli görsel tasarım, design system kurulumu.' },
      { step: '03', title: 'Geliştirme', detail: 'Çevik sprintler, sürekli teslimat, kod kalite kontrolü.' },
      { step: '04', title: 'Lansman ve Destek', detail: 'A/B testleri, performans izleme, sürekli güncelleme.' },
    ],
    kpis: [
      { label: 'Ortalama performans skoru', value: '95+' },
      { label: 'İlk MVP teslim süresi', value: '6-10 hafta' },
      { label: 'Müşteri memnuniyeti', value: '%97' },
    ],
    seoTitle: 'Web ve Mobil Uygulama Geliştirme — Yezuri',
    seoDescription:
      'Kurumsal web platformları, SaaS ürünleri ve native/cross-platform mobil uygulamalar. Performans, ölçeklenebilirlik ve modern UX odaklı.',
  },
  {
    slug: 'veri-analitigi',
    title: 'Veri Analitiği',
    summary: 'Karar destek panelleri, BI çözümleri ve gerçek zamanlı raporlama.',
    intro:
      'Veri, dijital çağın en değerli kaynağı. Yezuri olarak; veri toplama altyapıları, data warehouse ve lakehouse mimarileri, BI panelleri ve makine öğrenmesi destekli karar destek sistemleri kuruyoruz.',
    offerings: [
      'Data warehouse / lakehouse mimarisi',
      'ETL / ELT pipeline\'ları',
      'BI panelleri (Power BI, Tableau, Looker, custom)',
      'Gerçek zamanlı analitik dashboardlar',
      'Makine öğrenmesi modelleri ve MLOps',
      'Veri yönetişimi ve kalite kontrolü',
    ],
    process: [
      { step: '01', title: 'Veri Keşfi', detail: 'Kaynak sistemler, veri kalitesi ve hedef metrikler analiz edilir.' },
      { step: '02', title: 'Altyapı', detail: 'Modern bir veri ambarı veya lakehouse kurulur.' },
      { step: '03', title: 'Modelleme', detail: 'İş metrikleri için veri modelleri ve dashboardlar üretilir.' },
      { step: '04', title: 'Operasyonel', detail: 'Sürekli izleme, kalite testleri ve genişletme.' },
    ],
    kpis: [
      { label: 'Karar süresi iyileşmesi', value: '-%60' },
      { label: 'Ortalama dashboard teslim', value: '4-6 hafta' },
      { label: 'Veri kalitesi skoru', value: '98+' },
    ],
    seoTitle: 'Veri Analitiği ve BI Çözümleri — Yezuri',
    seoDescription:
      'Data warehouse, ETL/ELT, BI panelleri ve makine öğrenmesi. Veriyi karara dönüştüren uçtan uca analitik çözümler.',
  },
  {
    slug: 'bulut-gocu',
    title: 'Bulut Göçü',
    summary: 'Mevcut altyapınızı modern, ölçeklenebilir bulut mimarisine taşıyın.',
    intro:
      'Bulut göçü sadece "lift & shift" değildir. Yezuri olarak; AWS, Azure ve Google Cloud üzerinde mimari yenilemesi, maliyet optimizasyonu ve modernizasyon projelerini uçtan uca yönetiyoruz.',
    offerings: [
      'Cloud assessment ve geçiş planlaması',
      'Lift & shift göçü',
      'Cloud-native modernizasyon (container, serverless)',
      'Multi-cloud ve hybrid stratejisi',
      'FinOps ve maliyet optimizasyonu',
      'DevOps, IaC (Terraform, Pulumi)',
      'SRE, gözlemleyebilirlik ve güvenilirlik',
    ],
    process: [
      { step: '01', title: 'Değerlendirme', detail: 'Uygulama envanteri, bağımlılıklar ve geçiş stratejisi.' },
      { step: '02', title: 'Pilot Geçiş', detail: 'Düşük riskli bir iş yükü ile pilot başlatılır.' },
      { step: '03', title: 'Toplu Geçiş', detail: 'Dalga dalga geçiş, otomatik test ve geri dönüş planı.' },
      { step: '04', title: 'Optimizasyon', detail: 'Maliyet, performans ve güvenilirlik sürekli iyileştirilir.' },
    ],
    kpis: [
      { label: 'Ortalama maliyet düşüşü', value: '-%45' },
      { label: 'Geçiş süresi', value: '3-9 ay' },
      { label: 'Uptime hedefi', value: '99.95%' },
    ],
    seoTitle: 'Bulut Göçü ve Cloud Modernizasyon — Yezuri',
    seoDescription:
      'AWS, Azure ve GCP üzerine bulut göçü, modernizasyon ve FinOps. Maliyetinizi düşürün, ölçeklenebilirliği kazanın.',
  },
  {
    slug: 'e-ticaret',
    title: 'E-Ticaret Çözümleri',
    summary: 'Yüksek dönüşüm odaklı e-ticaret mağazaları, entegrasyon ve büyüme.',
    intro:
      'E-ticaret artık sadece bir mağaza kurmak değil; entegrasyon, performans, dönüşüm optimizasyonu ve sürekli büyüme demek. Yezuri olarak; Shopify, custom headless e-ticaret ve B2B platformları kuruyor, mevcut mağazaları optimize ediyoruz.',
    offerings: [
      'Shopify, Shopware, custom headless commerce',
      'ERP, muhasebe ve kargo entegrasyonları',
      'Ödeme altyapısı ve uluslararası satış',
      'CRO (conversion rate optimization)',
      'Performans optimizasyonu ve Core Web Vitals',
      'Pazarlama otomasyonu ve CRM entegrasyonu',
    ],
    process: [
      { step: '01', title: 'Strateji', detail: 'Pazar, ürün ve müşteri yolculuğu analizi.' },
      { step: '02', title: 'Platform', detail: 'İhtiyaca uygun e-ticaret platformu kurulur ve özelleştirilir.' },
      { step: '03', title: 'Entegrasyon', detail: 'ERP, kargo, ödeme ve pazaryeri bağlantıları.' },
      { step: '04', title: 'Büyüme', detail: 'CRO testleri, performans iyileştirme ve sürekli optimizasyon.' },
    ],
    kpis: [
      { label: 'Ortalama dönüşüm artışı', value: '+%160' },
      { label: 'Sayfa hızı (mobil)', value: '< 1.5s' },
      { label: 'Müşteri NPS', value: '70+' },
    ],
    seoTitle: 'E-Ticaret Çözümleri ve Optimizasyon — Yezuri',
    seoDescription:
      'Shopify, headless commerce ve B2B e-ticaret platformları. Performans, entegrasyon ve dönüşüm odaklı uçtan uca çözümler.',
  },
];

const en: ServiceDetail[] = [
  {
    slug: 'digital-strategy',
    title: 'Digital Strategy',
    summary: 'Tailored digital transformation roadmaps and long-term vision planning.',
    intro:
      'Digital strategy is about mapping the current state, identifying opportunities and building a roadmap of measurable goals. Together with your leadership team, we craft a pragmatic digital strategy that fuels your business objectives.',
    offerings: [
      'As-is and to-be analysis',
      'Competitor and industry benchmarking',
      'Investment prioritization and ROI modeling',
      'Multi-year digital transformation roadmap',
      'Digital maturity assessment',
      'Leadership workshops and digital coaching',
    ],
    process: [
      { step: '01', title: 'Discovery Workshops', detail: 'We sit with leadership to map current state and goals.' },
      { step: '02', title: 'Analysis', detail: 'Process, technology and organization analysis to spot opportunities.' },
      { step: '03', title: 'Strategy Document', detail: 'Prioritized initiatives, KPIs and a timeline you can act on.' },
      { step: '04', title: 'Execution Support', detail: 'We stay by your side as the strategy gets implemented.' },
    ],
    kpis: [
      { label: 'Average project ROI', value: '+180%' },
      { label: 'Strategy delivery', value: '6-8 weeks' },
      { label: 'Client satisfaction', value: '96%' },
    ],
    seoTitle: 'Digital Strategy Consulting — Yezuri',
    seoDescription:
      'Tailored digital transformation roadmaps, maturity assessments and prioritized investment plans. Sharpen your digital strategy with Yezuri.',
  },
  {
    slug: 'process-automation',
    title: 'Process Automation',
    summary: 'Automate repetitive workflows with RPA and custom integrations.',
    intro:
      'Manual, repetitive tasks drive up cost and error rates. With our process automation services we automate routine work in finance, HR, operations and sales using RPA, workflow engines and custom API integrations.',
    offerings: [
      'Process discovery and opportunity scoping',
      'RPA (UiPath, Power Automate, custom Node/Python bots)',
      'BPM and workflow orchestration',
      'OCR + intelligent document processing',
      'Cross-system API integrations',
      'Automated reporting and dashboards',
    ],
    process: [
      { step: '01', title: 'Process Discovery', detail: 'We identify automation candidates and calculate ROI.' },
      { step: '02', title: 'Pilot Bot', detail: 'A pilot automation goes live in 2-4 weeks.' },
      { step: '03', title: 'Scale', detail: 'Successful pilots are scaled across the organization.' },
      { step: '04', title: 'Run & Improve', detail: '24/7 monitoring and continuous improvement.' },
    ],
    kpis: [
      { label: 'Average time saved', value: '320 hrs / month' },
      { label: 'Error reduction', value: '-92%' },
      { label: 'Pilot delivery', value: '2-4 weeks' },
    ],
    seoTitle: 'Process Automation and RPA Services — Yezuri',
    seoDescription:
      'RPA, workflow engines and custom API integrations to automate repetitive work. Cut errors, boost productivity.',
  },
  {
    slug: 'web-and-mobile-development',
    title: 'Web & Mobile Development',
    summary: 'Performance-driven enterprise web platforms and mobile apps.',
    intro:
      'In modern web and mobile, speed, scalability and UX are the keys to success. We design and build enterprise web platforms, B2B portals, customer apps and bespoke SaaS products.',
    offerings: [
      'Enterprise websites and B2B portals',
      'SaaS and PaaS products',
      'iOS and Android native apps',
      'React Native / Flutter cross-platform apps',
      'Headless CMS integration',
      'API and backend architecture',
      'UX/UI design and prototyping',
    ],
    process: [
      { step: '01', title: 'Discovery & UX', detail: 'User research, flow design and prototyping.' },
      { step: '02', title: 'Design', detail: 'High-fidelity visual design and a design system.' },
      { step: '03', title: 'Development', detail: 'Agile sprints, continuous delivery, code quality.' },
      { step: '04', title: 'Launch & Support', detail: 'A/B tests, performance monitoring, ongoing iteration.' },
    ],
    kpis: [
      { label: 'Avg. performance score', value: '95+' },
      { label: 'First MVP delivery', value: '6-10 weeks' },
      { label: 'Client satisfaction', value: '97%' },
    ],
    seoTitle: 'Web and Mobile App Development — Yezuri',
    seoDescription:
      'Enterprise web platforms, SaaS products and native/cross-platform mobile apps. Performance, scalability and modern UX.',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    summary: 'Decision-support dashboards, BI solutions and real-time reporting.',
    intro:
      'Data is the most valuable resource of the digital era. We build data collection infrastructure, data warehouses, lakehouses, BI dashboards and ML-powered decision systems.',
    offerings: [
      'Data warehouse / lakehouse architecture',
      'ETL / ELT pipelines',
      'BI dashboards (Power BI, Tableau, Looker, custom)',
      'Real-time analytics dashboards',
      'ML models and MLOps',
      'Data governance and quality',
    ],
    process: [
      { step: '01', title: 'Data Discovery', detail: 'Source systems, data quality and target metrics analysis.' },
      { step: '02', title: 'Infrastructure', detail: 'Modern data warehouse or lakehouse stood up.' },
      { step: '03', title: 'Modeling', detail: 'Data models and dashboards for business metrics.' },
      { step: '04', title: 'Operate', detail: 'Continuous monitoring, quality tests and expansion.' },
    ],
    kpis: [
      { label: 'Decision-time improvement', value: '-60%' },
      { label: 'Avg. dashboard delivery', value: '4-6 weeks' },
      { label: 'Data quality score', value: '98+' },
    ],
    seoTitle: 'Data Analytics and BI Solutions — Yezuri',
    seoDescription:
      'Data warehouses, ETL/ELT, BI dashboards and machine learning. End-to-end analytics that turn data into decisions.',
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    summary: 'Migrate legacy infrastructure to modern, scalable cloud architectures.',
    intro:
      'Cloud migration is more than lift & shift. We deliver architecture redesign, cost optimization and modernization on AWS, Azure and Google Cloud — end to end.',
    offerings: [
      'Cloud assessment and migration planning',
      'Lift & shift migration',
      'Cloud-native modernization (containers, serverless)',
      'Multi-cloud and hybrid strategy',
      'FinOps and cost optimization',
      'DevOps, IaC (Terraform, Pulumi)',
      'SRE, observability and reliability',
    ],
    process: [
      { step: '01', title: 'Assessment', detail: 'Application inventory, dependencies and migration strategy.' },
      { step: '02', title: 'Pilot Migration', detail: 'A low-risk workload migrates first.' },
      { step: '03', title: 'Bulk Migration', detail: 'Wave-based migration with automated tests and rollback plan.' },
      { step: '04', title: 'Optimization', detail: 'Continuous improvement in cost, performance and reliability.' },
    ],
    kpis: [
      { label: 'Avg. cost reduction', value: '-45%' },
      { label: 'Migration duration', value: '3-9 months' },
      { label: 'Uptime target', value: '99.95%' },
    ],
    seoTitle: 'Cloud Migration and Modernization — Yezuri',
    seoDescription:
      'Cloud migration, modernization and FinOps on AWS, Azure and GCP. Cut cost, gain scalability.',
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce Solutions',
    summary: 'High-converting e-commerce stores, integrations and growth.',
    intro:
      'E-commerce today is not just a storefront; it is integration, performance, conversion optimization and continuous growth. We build Shopify, custom headless commerce and B2B platforms — and optimize existing stores.',
    offerings: [
      'Shopify, Shopware, custom headless commerce',
      'ERP, accounting and shipping integrations',
      'Payment infrastructure and international sales',
      'CRO (conversion rate optimization)',
      'Performance optimization and Core Web Vitals',
      'Marketing automation and CRM integration',
    ],
    process: [
      { step: '01', title: 'Strategy', detail: 'Market, product and customer journey analysis.' },
      { step: '02', title: 'Platform', detail: 'The right e-commerce platform is set up and customized.' },
      { step: '03', title: 'Integration', detail: 'ERP, shipping, payment and marketplace integrations.' },
      { step: '04', title: 'Growth', detail: 'CRO experiments, performance and ongoing optimization.' },
    ],
    kpis: [
      { label: 'Avg. conversion lift', value: '+160%' },
      { label: 'Page speed (mobile)', value: '< 1.5s' },
      { label: 'Customer NPS', value: '70+' },
    ],
    seoTitle: 'E-Commerce Solutions and Optimization — Yezuri',
    seoDescription:
      'Shopify, headless commerce and B2B e-commerce platforms. End-to-end solutions for performance, integration and conversion.',
  },
];

const byLocale: Record<Locale, ServiceDetail[]> = { tr, en };

export function getServices(locale: Locale): ServiceDetail[] {
  return byLocale[locale];
}

export function getService(locale: Locale, slug: string): ServiceDetail | undefined {
  return byLocale[locale].find((s) => s.slug === slug);
}
