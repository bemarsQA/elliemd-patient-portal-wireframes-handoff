# PSQ Recommendation Screen Logic

Source: V1_Product_Selection_Quiz.xlsx

- RECOMMENDATION TIERS | Example End Screen
- Tiers defined by final compound score thresholds after all scores are summed across all categories the user selected
- 1. Must Have: Top compound by final score or if GLP is indicated, GLP is always in Must Have.
- 2. Nice to Have: Next ranked 3 compounds overall, minimum score of 1 (after the full multiplier formula). If fewer than 2 compounds meet the minimum, this tier may show only 1 or be empty.
- Ties in rank: if two compounds have identical final scores, the one with the higher evidence multiplier wins. If still tied, the compound whose 1° Category in Compound Families matches the user's high
- DYNAMIC EXPLANATIONS
- Each compound in the recommendation result gets a card. The card renders the benefits + icons and explanation sentences from the Compound Families sheet. 

Every card has three interactive buttons:
Le
- Rough draft sentence structure: "[Compound name] was recommended because you selected [Category 1] and [Category 2] as priorities. [Explanation sentence]. Based on your goals, this compound acts as an
- [Compound Name] — the compound's name as it appears in the Compound Families sheet, column 1.
[Category 1] and [Category 2] — the top one or two categories from the compound's own 1° Category and 2° C
- GOALS x PROTOCOL MATRIX
- This matrix table is the reference for the dynamic table that is displayed at runtime. The top 5 or less categories and the top 5 compounds with the highest scores are shown in the preview, with the o
- GLP-1 | GLP-1/GIP | GLP-1/GIP + B12 | GLP-1/GIP + Glycine | GLP-1/GIP + L-Carnitine | MOTS-c | NAD+ | Tesamorelin/KPV | Tesamorelin/Ipamorelin | Sermorelin | Glutathione | BPC-157/TB-500
- Weight Loss | ✔ | ✔ | ✔ | ✔ | ✔
- Longevity | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔
- Energy & Vitality | ✔ | ✔ | ✔ | ✔ | ✔
- Brain Health & Cognitive Function | ✔ | ✔ | ✔
- Mood & Emotional Balance
- Sleep Quality & Recovery | ✔ | ✔
- Immune Strength & Inflammation Support | ✔ | ✔ | ✔
- Injury & Tissue Repair | ✔ | ✔ | ✔ | ✔ | ✔
- Muscle Growth & Body Composition | ✔ | ✔ | ✔ | ✔ | ✔
- Metabolic Health | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔
- Sexual Health & Libido
- Skin & Hair
- Gut Health | ✔ | ✔
