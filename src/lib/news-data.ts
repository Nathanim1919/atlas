export interface NewsArticleItem {
  id: string;
  slug: string;
  title: string;
  category: "company" | "product" | "technical" | "events";
  categoryLabel: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}

export const INITIAL_ARTICLES: NewsArticleItem[] = [
  {
    id: "ethswitch-national-migration-success",
    slug: "ethswitch-national-migration-success",
    featured: true,
    category: "company",
    categoryLabel: "Company Milestone",
    date: "January 18, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    title: "EthSwitch S.C. Successfully Executes Live Data Center Migration with Atlas Computer Technology",
    excerpt: "In a landmark achievement for Ethiopia's national financial payment backbone, ACT engineered a multi-phase migration of the central national switching system with zero unplanned downtime and 3 days of uninterrupted live disaster recovery operation.",
    content: `## Executive Overview

EthSwitch S.C., the operator of Ethiopia's national payment switch connecting all 20+ commercial banks, microfinance institutions, and digital wallets, has successfully completed the live migration of its primary data center facility to a new Tier-III certified infrastructure campus.

The complex multi-phase operation was architected, engineered, and executed by senior systems and data center specialists from **Atlas Computer Technology (ACT)**.

## The Technical Challenge

Relocating the central switching hub of a nation's financial system presents extreme operational risks:
- Over 20 commercial banks depend on uninterrupted 24/7 ISO 8583 message switching for retail ATMs, POS terminals, and interbank transfers.
- Minute-level outages can disrupt millions of retail transactions and create settlement backlogs.
- Database integrity for core clearing switches must be guaranteed down to the microsecond level across high-availability SAN arrays.

## Engineering Strategy & Execution

ACT designed a rigorous 5-phase migration blueprint:

1. **Pre-Cutover Data Synchronisation**: Establishing low-latency Fibre Channel SAN replication between the legacy facility and the secondary Disaster Recovery (DR) location.
2. **Operational DR Validation**: Switching 100% of national interbank card and POS traffic to run live out of the DR site for 3 consecutive business days.
3. **Physical & Virtual Workload Relocation**: De-racking, transporting, and re-provisioning IBM blade compute pools, enterprise Oracle RAC database clusters, and perimeter firewall security fabrics to the new primary data center.
4. **Redundant Fabric Cutover**: Re-establishing dark fiber interconnects and executing live sanity verification across all commercial bank gateways.
5. **Fail-Back & Production Verification**: Orchestrating a zero-transaction-loss failback to the new primary campus.

## Measured Outcomes

- **0 Minutes** of unplanned downtime throughout the entire 3-week operational window.
- **100% Data Integrity** maintained across all 20+ member financial institutions.
- **3 Days** of continuous live production switching handled seamlessly from the DR site.
- **Zero Settlement Float** or clearing discrepancies reported during post-cutover audit.

> "Migrating the national payment backbone without interrupting retail ATM or POS transactions across Ethiopia was an audacious technical feat. ACT executed the multi-stage migration with page-level precision."  
> — *Technical Operations Directorate, EthSwitch S.C.*`,
    author: {
      name: "Enterprise Solutions Directorate",
      role: "Atlas Computer Technology",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["EthSwitch", "Data Center", "Disaster Recovery", "FinTech"],
    status: "PUBLISHED"
  },
  {
    id: "unicash-500k-monthly-milestone",
    slug: "unicash-500k-monthly-milestone",
    category: "product",
    categoryLabel: "Product Update",
    date: "February 24, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    title: "Uni-Cash Payment Gateway Surpasses 500,000 Monthly Transactions Across 20+ Commercial Banks",
    excerpt: "Demonstrating exponential adoption across Ethiopia's higher education, municipal utility, and commercial biller sectors, Uni-Cash records another historic throughput milestone with zero settlement float.",
    content: `## Record Invoicing & Collection Growth

Atlas Computer Technology is proud to announce that our flagship **Uni-Cash Pay@Bank platform** has officially crossed **500,000 processed bills per month**.

Since its launch in 2019 processing 2,500 monthly transactions, Uni-Cash has grown 200x to become the nation's premier enterprise bill presentation and real-time reconciliation engine.

## Key Growth Drivers

- **Higher Education Expansion**: Over 60 universities, colleges, and TVET institutes now use Uni-Cash School & Higher Ed for automated tuition collection and dormitory accounting.
- **Municipal Utility Billing**: Water utilities and municipal real estate agencies rely on Uni-Cash Utility for tiered tariff calculations and automated customer SMS receipting.
- **Commercial Bank Interconnects**: Direct API adapters connect Uni-Cash to Oracle FlexCube, Finacle, and Temenos core banking engines across 20+ Ethiopian commercial banks.

## Architectural Highlights

- **Real-Time T+0 Settlement**: Instant ledger credit into biller bank accounts without intermediary float or escrow holding periods.
- **Over-The-Counter Teller Integration**: Tellers in any bank branch can query customer ID numbers, accept cash or account transfers, and issue instant verified e-receipts.
- **Multi-Channel Access**: Customers can settle invoices via mobile banking apps, USSD menus, or branch tellers seamlessly.`,
    author: {
      name: "Uni-Cash Product Team",
      role: "Financial Applications",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Uni-Cash", "Core Banking", "Pay@Bank", "Digital Payments"],
    status: "PUBLISHED"
  },
  {
    id: "sovereign-private-cloud-banking-guide",
    slug: "sovereign-private-cloud-banking-guide",
    category: "technical",
    categoryLabel: "Technical Article",
    date: "February 10, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    title: "Architecting Sovereign Private Clouds: OpenStack & Nutanix HCI for Ethiopian Financial Institutions",
    excerpt: "How banks and government agencies are overcoming foreign currency constraints and regulatory mandates by deploying self-healing hyperconverged on-premises clouds with automated multi-site disaster recovery.",
    content: `## The Imperative for Data Sovereignty

As regulatory directives from the National Bank of Ethiopia (NBE) and INSA mandate physical data residence for customer financial ledgers, banking leaders face a double challenge:
1. Maintaining compliance with strict local data storage mandates.
2. Delivering the elastic scaling, self-service compute, and microservices agility expected of modern public cloud platforms.

## The Architectural Solution: Sovereign On-Prem Cloud

ACT's Cloud Infrastructure practice recommends a modular dual-layer architecture combining **OpenStack cloud orchestration** with **Nutanix Enterprise Hyperconverged Infrastructure (HCI)**.

### Key Architectural Pillars

1. **Bare-Metal Efficiency**: Eliminating hypervisor sprawl by deploying high-density NVMe SAN nodes with automated deduplication and hardware-accelerated compression.
2. **Software-Defined Networking (SDN)**: Micro-segmenting core banking workloads behind zero-trust firewalls to prevent lateral threat movement.
3. **Automated Multi-Site Replication**: Synchronous SAN snapshot mirroring between primary and secondary data centers achieving RPO < 5 minutes and RTO < 15 minutes.
4. **Local Currency Predictability**: Building on-premise infrastructure reduces recurring foreign exchange exposure while keeping total cost of ownership (TCO) predictable.`,
    author: {
      name: "Systems Engineering Practice",
      role: "Infrastructure Services",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Private Cloud", "Nutanix", "OpenStack", "Data Sovereignty"],
    status: "PUBLISHED"
  },
  {
    id: "merchant-pay-launch",
    slug: "merchant-pay-launch",
    category: "product",
    categoryLabel: "Product Update",
    date: "March 2, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=1200&q=80",
    title: "Atlas Unveils Merchant Pay: Interoperable National QR & Smart POS Acquiring for Commercial Banks",
    excerpt: "The new platform unifies EMVCo dynamic QR code generation, Android Smart POS terminals, and multi-branch cashier consoles with instant settlement into commercial bank accounts.",
    content: `## Next-Generation Acquiring for Commercial Banks

Atlas Computer Technology has launched **Merchant Pay**, an end-to-end merchant acquiring platform designed to enable commercial banks and payment aggregators to deploy white-labeled payment acceptance across retail networks.

## Core Features

- **EMVCo & EthSwitch QR Standard**: Generates dynamic and static QR codes compatible with all Ethiopian mobile banking applications and digital wallets.
- **Smart POS Terminal Support**: Direct integration with handheld Android touchscreen POS devices supporting contactless NFC debit cards, chip & PIN, and camera QR scanning.
- **Multi-Store & Cashier Hierarchy**: Allows enterprise chains to manage headquarters, branch lanes, and individual cashiers with real-time shift reconciliation.
- **Instant Bank Credit**: Eliminates escrow holding risks by settling merchant receipts directly into their commercial bank accounts within seconds.`,
    author: {
      name: "Merchant Acquiring Division",
      role: "Product Engineering",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Merchant Pay", "EMVCo QR", "Smart POS", "Retail Acquiring"],
    status: "PUBLISHED"
  },
  {
    id: "oracle-rac-high-availability-best-practices",
    slug: "oracle-rac-high-availability-best-practices",
    category: "technical",
    categoryLabel: "Technical Article",
    date: "January 5, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    title: "Mission-Critical Core Banking: Tuning Oracle RAC Clusters for High Peak-Hour Throughput",
    excerpt: "A deep dive into low-latency interconnects, ASM storage striping, and buffer cache optimization learned from supporting premier financial institutions across Ethiopia.",
    content: `## Peak-Hour Database Bottlenecks

During salary processing days and end-of-month clearing windows, commercial bank core databases experience extreme IOPS pressure. High I/O wait times can cause teller delays and slow mobile banking response times.

## Engineering Best Practices

Our certified Oracle database engineers implement five critical optimizations for Oracle Real Application Clusters (RAC):

1. **Dedicated Low-Latency Cache Fusion Interconnects**: Bonding 25GbE/100GbE interfaces with jumbo frames to minimize cache synchronization latency between nodes.
2. **Automatic Storage Management (ASM) Fine Striping**: Distributing redo log groups across dedicated high-speed NVMe flash disk groups to eliminate redo log write waits.
3. **SGA & PGA Memory Allocation**: Fine-tuning buffer cache sizing to maintain a > 99% hit ratio during high-volume batch runs.
4. **Service-Based Workload Partitioning**: Separating interactive teller workloads from heavy background batch reporting queries across specific RAC nodes.`,
    author: {
      name: "Merid Tilahun",
      role: "Technical Managing Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Oracle RAC", "Core Banking", "Database Performance"],
    status: "PUBLISHED"
  },
  {
    id: "cybersecurity-resilience-roundtable-2026",
    slug: "cybersecurity-resilience-roundtable-2026",
    category: "events",
    categoryLabel: "Industry Insights",
    date: "December 14, 2025",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    title: "Key Takeaways from the Ethiopian Banking Infrastructure & Resilience Roundtable",
    excerpt: "CIOs and IT directors from 15 commercial banks convened to discuss active-active disaster recovery, hardware supply chain predictability, and local vendor SLA dependability.",
    content: `## Executive Summary

ACT hosted senior IT leaders and Chief Information Officers from 15 Ethiopian commercial banks for the annual **Banking Infrastructure Resilience Roundtable** in Addis Ababa.

## Key Discussion Points

1. **Disaster Recovery Preparedness**: Over 80% of participating banks reported prioritizing active-active DR automation over traditional cold standby setups.
2. **Local SLA Reliability**: Financial leaders emphasized the critical value of guaranteed 2-hour on-site engineering dispatch and local spare parts depots.
3. **Talent & Training**: Investing in hands-on Linux kernel and OpenStack cloud training for internal engineering teams to reduce vendor lock-in.`,
    author: {
      name: "Birhan Legi",
      role: "Operations Managing Director",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Executive Roundtable", "Banking IT", "SLA Governance"],
    status: "PUBLISHED"
  }
];

// In-Memory Storage Cache (preserves newly created admin articles during dev session)
let memoryArticles: NewsArticleItem[] = [...INITIAL_ARTICLES];

export function getStoredArticles(): NewsArticleItem[] {
  return memoryArticles;
}

export function addStoredArticle(article: NewsArticleItem): NewsArticleItem {
  memoryArticles = [article, ...memoryArticles.filter((a) => a.id !== article.id && a.slug !== article.slug)];
  return article;
}

export function updateStoredArticle(idOrSlug: string, article: Partial<NewsArticleItem>): NewsArticleItem | null {
  const index = memoryArticles.findIndex((a) => a.id === idOrSlug || a.slug === idOrSlug);
  if (index === -1) return null;

  memoryArticles[index] = {
    ...memoryArticles[index],
    ...article
  };
  return memoryArticles[index];
}

export function deleteStoredArticle(idOrSlug: string): boolean {
  const len = memoryArticles.length;
  memoryArticles = memoryArticles.filter((a) => a.id !== idOrSlug && a.slug !== idOrSlug);
  return memoryArticles.length < len;
}
