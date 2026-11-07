---
target: "http://localhost:4321/ (home)"
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/kline/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:48fa5141cb231b5e7bbb4566eeb375a1b776cb1a31a62efe3929a2d0a48ebcdf"
target_path: /home/kline/portfolio/src/pages/index.astro
timestamp: 2026-11-07T14-03-27Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score (24/32, Good; 7 and 10 n/a)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | aria-current="" announced as false |
| 2 | Match System / Real World | 4 | badge/zone/return metaphor fits audience |
| 3 | User Control and Freedom | 3 | no "send another" after success |
| 4 | Consistency and Standards | 3 | zone bands are links that read as print |
| 5 | Error Prevention | 2 | skip link, bottom link, and badge form all lead to disabled form |
| 6 | Recognition Rather Than Recall | 3 | only working contact (Copy email) is far below |
| 7 | Flexibility and Efficiency | n/a | one-page persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | rainbow foil is the one loud element |
| 9 | Error Recovery | 3 | specific errors, focus moves, fallback to Copy email |
| 10 | Help and Documentation | n/a | portfolio page |

## Design Specificity
Authored, not interchangeable. Execution weak spot: lanyard overlaps lede at 861–1100px and floats detached at 390px. Detector: dist clean; src 2 advisory design-system-font-size (.name 3.75rem in short-desktop query, .zone 0.95rem at ≤420px); config hides tight-leading + cramped-padding; browser overlay: text-occlusion on aria-hidden lanyard (false positive), 2 stragglers at 390 ("page.", "approvals.").

## Priority Issues
- [P0] Primary CTA is dead (disabled form fills hero; skip link and bottom "Send a message" target it). Fix: add Web3Forms key; until then put Copy email + LinkedIn in the badge form slot and retarget links to #return. → /impeccable harden
- [P1] 861–1100px: lanyard paints over "SuccessFactors." and lede overflows its column (nbsp + 12ch). Fix: drop nbsp, step lede size, single-column to ~1100px. → /impeccable adapt
- [P1] 320px: horizontal scroll (330px) and strap nav clips "CONTAC…". Fix: tighten strap tracking/gap <360px. → /impeccable adapt
- [P2] aria-current set to "" (false). Fix: setAttribute('aria-current','location'). → /impeccable audit
- [P2] Zone bands don't read as links; hover double-rule nearly invisible; +4 first-viewport choices (9 total). Fix: make decorative or add clear affordance. → /impeccable polish

## Persona Red Flags
- Jordan: types into disabled form; must hunt for Copy email; "Access" needs subtitle.
- Riley: 861–1100 overlap, 320 h-scroll, dead skip link, button stays disabled after success.
- Casey (390): lanyard stub detached; no working contact in first two screens.
- Recruiter skimming: gets positioning in 3s, then hits broken form; "Web" zone has no evidence.

## Minor Observations
- Proof line at body size lost under lede. Small print is a weak last line; reply-time promise would close better. Copy email hover ≈ back-sheet colour. "See certifications" tap target 20px tall at 390. Two mobile stragglers. Triangular notch above clip. Empty bottom-left at 1440.

## Questions to Consider
- Why isn't Copy email on the badge? What artifact could prove "Web"? Does the rainbow foil earn its place on a calm enterprise badge?
