# Methylene Blue Capsules

Source: 3.0_EllieMD_Questionnaire_Source_of_Truth.xlsx

**Q1.0** What is your height?
- Format: Text Box (2 boxes) 
- Answers: Feet
Inches
- Notes: Patient Profile
Height/Weight

**Q2.0** What is your current weight?
- Format: Text Box
- Answers: Lbs
- Notes: Patient Profile
Height/Weight

**Q3.0** Are you currently pregnant, planning to become pregnant, or breastfeeding? (If male, please select N/A)*
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are currently pregnant, planning to become pregnant, or breastfeeding, as the safety of this treatment in these circumstances has not been adequately studied. Your health and the well-being of your baby are our top priorities, and we recommen
- Notes: Patient Profile
Pregnant

**Q5.0** Have you had a physical in the last 3 years?
(Patients are required to have had a physical in the last 3 years to qualify for treatment)
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have not had a physical in the last 3 years

**Q5.1** Please select date:
- Format: Date Selector
- **Conditions: Allow only dates within the past 3 years from the current day**

**Q6.0** Have you had lab work done in the last 3 years?
(Patients are required to have had lab work in the last 3 years to qualify for treatment)
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have not had lab work done in the last 3 years

**Q6.1** Please select date:
- Format: Date Selector
- **Conditions: Allow only dates within the past 3 years from the current day**

**Q4.0** What is the primary reason you are considering Methylene Blue?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Cognitive Enhancement / Brain Fog Reduction
 ☐ Mood Support
 ☐ Mitochondrial Health & Cellular Energy
 ☐ Longevity / Anti-aging
 ☐ Athletic Performance / Recovery
 ☐ Memory Support
 ☐ Antimicrobial Support
 ☐ Other 

**Q4.1** Please Explain:
- Format: Text Box
- **Conditions: If #4 = "Other", DISPLAY**

**Q11.0** Are you currently taking ANY of the following medications?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ SSRI antidepressants (e.g., Lexapro, Zoloft, Paxil)
 ☐ SNRI antidepressants (e.g., Cymbalta, Pristiq, Effexor)
 ☐ MAOIs (e.g., Parnate, Nardil, Emsam)
 ☐ ADHD stimulants (Adderall, Vyvanse)
 ☐ Flexeril (cyclobenzaprine)
 ☐ 5-HTP
 ☐ Rapamycin
 ☐ Other antidepressants (Wellbutrin, Remeron, Buspar, 
- **Conditions: If = Any except for "None”, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe Methylene Blue because it may dangerously increase serotonin levels when combined with certain medications. This interaction can cause serotonin syndrome and other serious complications. Please consult your primary care provider for safer alternatives.

**Q5.0** For your safety, please confirm whether you currently take ANY medications in the categories below as these intereact with Methylene Blue:
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ SSRIs (e.g., Lexapro, Zoloft, Prozac, Paxil)
 ☐ SNRIs (e.g., Cymbalta, Effexor, Pristiq)
 ☐ MAOIs (e.g., Nardil, Parnate, Emsam)
 ☐Tricyclic antidepressants (e.g., Amitriptyline, Nortriptyline)
 ☐ Atypical antidepressants (e.g., Trazodone, Remeron, Vilazodone, Vortioxetine)
 ☐ Buspirone
 ☐ 5-HTP

- **Conditions: If #5 = Anything selected except "None of the above”, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe Methylene Blue because it may dangerously increase serotonin levels when combined with certain medications. This interaction can lead to serotonin syndrome and other serious complications. Please consult your primary care provider for safer alternatives.

**Q6.0** Some medications require a clinician to review your chart before approval.
Please check if ANY of the following categories apply to medications you take.
- Format: Check Box 
(Multi Select) 
- Answers: Stimulants & Neurological Meds
 ☐ ADHD stimulants (e.g., Adderall, Vyvanse, Ritalin)
 ☐ Muscle relaxants (e.g., Flexeril/cyclobenzaprine)
Metabolic / Longevity Meds
 ☐ Metformin
 ☐ Rapamycin
Pain & Inflammation
 ☐ Opioids (e.g., hydrocodone, oxycodone)
 ☐ NSAIDs (e.g., ibuprofen, naproxen)
Hormones 
- **Conditions: If #6 = Anything selected except "None of the above”, Send to Patient Profile Reported Meds**
- Notes: Patient Profile 
Reported Meds

**Q7.0** Are you taking ANY additional prescription medications, over-the-counter medications, supplements, or therapies that you have NOT already mentioned above?
- Format: Radio Button
- Answers: Yes
No

**Q7.1** Please list all prescription medications, over-the-counter medications, supplements, and therapies you are currently taking:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #7.1 = Yes, DISPLAY**
- Notes: Patient Profile 
Reported Meds

**Q8.0** Do you have any known allergies to benzyl alcohol or to thiazine dyes (such as methylene blue)?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #8 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we are unable to proceed with prescribing Methylene Blue. Methylene Blue contains thiazine dye compounds and may also include benzyl alcohol, which can cause serious allergic reactions in individuals with known sensitivities. For your safety, our medical team cannot approve this medic

**Q9.0** Have you ever had an allergic reaction or adverse reaction to any medications, peptides, or supplements?
- Format: Radio Button
- Answers: Yes
No

**Q9.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #9 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q10.0** Do you have any other allergies that your medical provider should be aware of?
- Format: Radio Button
- Answers: Yes 
No

**Q10.1** Please explain:
- Format: Text Box
- **Conditions: If #10 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q11.0** Do you currently have, or have you ever been diagnosed with, any of the following conditions?
- Format: Radio Button
- Answers: G6PD deficiency (Glucose-6-Phosphate Dehydrogenase Deficiency)
Advanced kidney disease (Chronic Kidney Disease)
Liver disease (e.g., cirrhosis, hepatitis)
Severe anemia
Heart disease (e.g., arrhythmias, heart failure)
Methemoglobinemia or history of low oxygen levels in the blood
Hypertension
Diabet
- **Conditions: If #11= "G6PD deficiency (Glucose-6-Phosphate Dehydrogenase Deficiency)", "Advanced kidney disease (Chronic Kidney Disease)", DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with Methylene Blue due to medical conditions that increase the risk of adverse reactions. Please consult your primary care provider to discuss safer treatment options.

**Q12.0** Are you currently taking cancer treatment, chemotherapy, immunosuppressants?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #12 = Yes, DISQUALFIED**
- Popup: Unfortunately, we cannot proceed with Methylene Blue due to medical conditions that increase the risk of adverse reactions. Please consult your primary care provider to discuss safer treatment options.

**Q13.0** Do you have any of the following?
- Format: Check Box 
(Multi Select) 
- Answers: History of low blood pressure or fainting
Cardiovascular disease (arrhythmias, heart failure, etc.)
Diagnosed mitochondrial disorders (e.g., MELAS)
None of the above
- **Conditions: If #13 = "Diagnosed mitochondrial disorders (e.g., MELAS)", DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with Methylene Blue due to medical conditions that increase the risk of adverse reactions. Please consult your primary care provider to discuss safer treatment options.

**Q14.0** Please select any ethnic background(s) that apply to you:
- Format: Check Box 
(Multi Select) 
- Answers: ☐West/Sub-Saharan African/African American / Black diaspora (including Caribbean & Latin American Afro-descendant populations)
Examples: African American, Haiti, Jamaica, Dominican Republic, Trinidad & Tobago, Barbados, Bahamas, Belize, Guyana, Suriname, Brazil, Colombia, Venezuela, Nigeria, Ghana, 

**Q15.1** You may be at increased risk for G6PD deficiency.
- Format: Radio Button
- Answers: I understand and agree to obtain testing
I have already completed testing (upload)
I do not want to continue
- **Conditions: If #14 = "West/ Sub-Saharan African/ African American/ Black diaspora", "Middle Eastern/Arabian Peninsula", "Mediterranean", "South/ Southeast Asian", DISPLAY**
- Popup: “You are in a group with a higher risk and higher prevalence of G6PD deficiency.
For your safety, a G6PD enzyme blood test is required before your doctor can prescribe Methylene Blue. This test is typically inexpensive and often covered by insurance. You can complete it at Quest Diagnostics, LabCorp

**Q15.1.2** Please upload your labs here:
- Format: File Upload
- **Conditions: If #15.1 = "I have already completed testing", Provide Upload Link**

**Q16.0** Please select any additional G6PD risk factors:
- Format: Check Box 
(Multi Select) 
- Answers: I have a family history of G6PD deficiency
History of unexplained jaundice, anemia, or dark urine
None of the above

**Q16.1** You may be at increased risk for G6PD deficiency. Even though G6PD deficiency is more common in males, women may also be affected, especially if they are carriers or have a family history. A G6PD enzyme blood test is required before treatment.
- Answers: I understand and agree to obtain testing
I have already completed testing (upload)
I do not want to continue
- **Conditions: If # 16 = "I have a family history of G6PD deficiency", "History of unexplained jaundice, anemia, or dark urine" DISPLAY**
- Popup: “You are in a group with a higher risk and higher prevalence of G6PD deficiency.
For your safety, a G6PD enzyme blood test is required before your doctor can prescribe Methylene Blue. This test is typically inexpensive and often covered by insurance. You can complete it at Quest Diagnostics, LabCorp

**Q16.1.2** Please upload your labs here:
- Format: File Upload
- **Conditions: If #15.1 = "I have already completed testing", Provide Upload Link**

**Q17.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q17.0** By proceeding with this consultation and any treatments or services through EllieMD and partnered pharmacies and doctor networks, you confirm that the medical history information you have provided is truthful and complete. This telehealth service provides recommendations based on the details you share, and any misrepresentation or omission of health conditions may impact your treatment outcomes. 
You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. Compounded medications have not undergone FDA review for safety or efficacy, and it is important to consult with your primary care provider to ensure that these treatments align with your overall health and medical history. 
You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when needed. If you experience any side effects or medical concerns, it is essential to contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or visit the nearest emergency room. 
You understand that this treatment is elective and does not replace routine healthcare visits, in-person medical evaluations, or emergency care. Furthermore, by proceeding, you agree to release, indemnify, and hold harmless EllieMD and its affiliates from any claims, liabilities, or damages related to your participation in these treatments. 
By entering your name and date below you aknowledge you have read al the terms and conditions and accept prior to your purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q18.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

