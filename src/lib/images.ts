/**
 * Photography placeholders (Unsplash) for the prototype.
 * Every slot degrades to a designed navy placeholder if the image cannot
 * load — swap these URLs for final brand photography at integration time.
 */

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  /** Hero — glass towers, low angle (echoes the current calan.com hero). */
  hero: u("photo-1486406146926-c627a92ad1ab", 2200),
  /** Showreel thumbnail — leadership presentation. */
  showreel: u("photo-1560264280-88b68371db39", 1200),
  /** The problem — working session over documents. */
  problem: u("photo-1454165804606-c3d57bc86b40", 1400),
  /** Complexity band — financial district at dusk. */
  complexity: u("photo-1480714378408-67cf0d13bc1b", 2200),
  /** Case study — financial district architecture. */
  caseStudy: u("photo-1444653614773-995cb1ef9efa", 1400),
  /** Demo videos — analytics dashboard, accounting close-up, working session. */
  demoReporting: u("photo-1551288049-bebda4e38f71", 1100),
  demoClearing: u("photo-1554224155-6726b3ff858f", 1100),
  demoPayroll: u("photo-1556761175-b413da4baf72", 1100),
  /** Experts — professional portraits. */
  expertA: u("photo-1560250097-0b93528c311a", 800),
  expertB: u("photo-1573497019940-1c28c88b4f3e", 800),
  expertC: u("photo-1519085360753-af0119f7cbe7", 800),
  expertD: u("photo-1573496359142-b8d87734a5a2", 800),
  /** Insights editorial covers. */
  insightGuide: u("photo-1521737604893-d14cc237f11d", 1100),
  insightPaper: u("photo-1462206092226-f46025ffe607", 1100),
  insightViewpoint: u("photo-1522071820081-009f0129c71c", 1100),
  /** Final CTA background — office architecture. */
  cta: u("photo-1497366754035-f200968a6e72", 2200),
} as const;
