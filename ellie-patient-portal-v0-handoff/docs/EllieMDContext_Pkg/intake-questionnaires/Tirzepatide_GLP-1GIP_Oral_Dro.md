# Tirzepatide (GLP-1GIP) Oral Dro

Source: 3.0_EllieMD_Questionnaire_Source_of_Truth.xlsx

**Q1.0** Are you currently pregnant, planning to become pregnant, or breastfeeding? (If male, please select N/A)*
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are currently pregnant, planning to become pregnant, or breastfeeding, as the safety of this treatment in these circumstances has not been adequately studied. Your health and the well-being of your baby are our top priorities, and we recommen
- Notes: Patient Profile
Pregnant

**Q2.0** What is your height?
- Format: Text Box (2 boxes) 
- Answers: Feet
Inches
- Notes: Patient Profile
Height/Weight

**Q3.0** What is your current weight?
- Format: Text Box
- Answers: Lbs
- Notes: Patient Profile
Height/Weight

**Q4.0** What is your goal weight?
- Format: Text Box
- Answers: Lbs

**Q5.0** Have you used GLP-1/GIP medications or any other prescription weight loss drugs in the last 45 days? (e.g. Semaglutide, Tirzepatide, Mounjaro, Wegovy, Ozempic, etc)
- Format: Check Box 
(Single Select) 
- Answers: Yes 
No

**Q5.1** Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #5 = Yes

If BMI => 22, Continue

If BMI < 22, DISQUALIFIED**
- Popup: We’re Sorry

Based on the information you provided, your Body Mass Index (BMI) is below 22. Unfortunately, we cannot prescribe this medication if your BMI is under this threshold, as it may pose health risks in individuals with lower body weight.

Your health and safety are our top priorities. We re

**Q5.2** Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #5 = No

If BMI => 25, Continue

If BMI < 25, DISQUALIFIED**
- Popup: We’re Sorry

Based on the information you provided, your Body Mass Index (BMI) is below 25. Unfortunately, we cannot prescribe this medication if your BMI is under this threshold, as it may pose health risks in individuals with lower body weight.

Your health and safety are our top priorities. We re

**Q6.0** When was the last time you had an in person medical evaluation?
- Format: Radio Button
- Answers:  ☐ Less than a year ago
 ☐ 1 to 2 years
 ☐ More than 2 years ago

Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If BMI => 25, Continue

If BMI < 25, DISQUALIFIED**
- Popup: We’re Sorry

Based on the information you provided, your Body Mass Index (BMI) is below 25. Unfortunately, we cannot prescribe this medication if your BMI is under this threshold, as it may pose health risks in individuals with lower body weight.

Your health and safety are our top priorities. We re

Please upload:

(Your doctor only needs to see cholesterol levels, TSH (thyroid test), Ha1c, and Creatinine (kidney function).
Any additional labs which you upload will not be reviewed.  The doctor who ordered these labs is in charge of interpreting them.)
- Format: Photo Upload
- **Conditions: If #6 = Yes, DISPLAY**

**Q7.0** Have you had a physical in the last 3 years?
(Patients are required to have had a physical in the last 3 years to qualify for treatment)
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have not had a physical in the last 3 years

**Q7.1** Please select date:
- Format: Date Selector
- **Conditions: Allow only dates within the past 3 years from the current day**

**Q8.0** Have you had lab work done in the last 3 years?
(Patients are required to have had lab work in the last 3 years to qualify for treatment)
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have not had lab work done in the last 3 years

**Q8.1** Please select date:
- Format: Date Selector
- **Conditions: Allow only dates within the past 3 years from the current day**

**Q7.0** We require that you provide a recent blood pressure measurement within the last six months.
- Format: Text Box
- Answers: 120/80

**Q7.0** What is the primary reason for seeking GLP-1/GIP Oral Drop therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Prescription Appetite Suppression
 ☐ Scientifically Backed Weight Loss Aid
 ☐ Metabolic Health Booster
 ☐ Enhanced Quality of Life

Are you here to be evaluated for weight loss?
- Format: Radio Button
- Answers: Yes 
No

Are you here for GLP-1 Oral Drop?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If # = No, DISQUALIFIED**
- Popup: We're sorry, it looks like you're not in the correct place!
Perhaps you made a wrong choice?  Use the back button if you'd like to change your answer.

Have you ever attempted to lose weight in a weight management program?
- Format: Radio Button
- Answers: Yes 
No

Are you willing to reduce your caloric intake alongside medication?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If # = No, DISQUALIFIED**
- Popup: We're sorry that you're not willing to help participate in weight loss through diet restriction.
Please see your primary care doctor for other options.

Are you willing to increase your physical activity alongside medication?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If # = No, DISQUALIFIED**
- Popup: We're sorry that you're not willing to help participate in weight loss through physical activity.
Please see your primary care doctor about other options.

Are you CURRENTLY taking any PRESCRIPTION medications for weight loss?
- Format: Check Box 
(Single Select) 
- Answers:  ☐ None at this time
 ☐ Rybelsus (oral tablets)
 ☐ Wegovy/Zepbound/Mounjaro/Ozempic/Trulicity/Saxenda
 ☐ Compounded Semaglutide
 ☐ Compounded tirzepatide
 ☐ Other drug not listed

Please type ALL of the drug information which is found on the label of your CURRENT medication
- Format: Text Box
- **Conditions: If #36 = Orange Answers, DISPLAY**

What other medication are you taking for weight loss?
- Format: Text Box
- **Conditions: If # 36=Other drug not listed, DISPLAY**

Have you used GLP-1 Medication in the last 90 days? (e.g. Semaglutide, Tirzepatide, Mounjaro, Wegovy, Ozempic, etc)
- Format: Radio Button
- Answers:  ☐ None at this time
 ☐ Rybelsus (oral tablets)
 ☐ Wegovy/Zepbound/Mounjaro/Ozempic/Trulicity/Saxenda
 ☐ Compounded Semaglutide
 ☐ Compounded tirzepatide
 ☐ Other drug not listed

**Q8.0** You previously mentioned you have used GLP-1 medications or any other prescription weight loss drugs in the last 45 days:
- **Conditions: If #5 = Yes, DISPLAY**

**Q8.1** Please upload a photo of your last prescription so that medication directions, dose, and strength are visible.
- Format: Photo Upload
- **Conditions: If #5 = Yes, DISPLAY

Max File Size: 50MB

Supported file types: 
JPG, PNG, PDF, HEIC**

**Q8.2** Full Medication Name: 
(Ex: Semaglutide Injection)
- Format: Text Box
- **Conditions: If #5 = Yes, DISPLAY**

**Q8.3** Concentration:
(Ex: 2.5mg/mL)
- Format: Text Box
- **Conditions: If #5 = Yes, DISPLAY**

**Q8.4** Medication directions as written on your prescription:
(Inject 20 units once weekly for 4 weeks)
- Format: Text Box
- **Conditions: If #5 = Yes, DISPLAY**

**Q8.5** Date you first began taking the medication:
- Format: Date Selector
- **Conditions: If #5 = Yes, DISPLAY**

**Q8.6** Date of your last injection:
- Format: Date Selector
- **Conditions: If #5 = Yes, DISPLAY
If Date entered > 30 days from todays date, DISPLAY Pop-up**
- Popup: If your prescription is more than 30 days old, you will need to start over at Tier 1, unless you provide a valid explanation for the lapse.

**Q8.7** Please tell us why you took a break from treatment:
- Format: Text Box
- **Conditions: If #8.6 = Date > 30 days from todays date, DISPLAY**

**Q9.2** Please tell the doctor more about your severe GI problems
- Format: Text Box
- Answers: "Ex: I have had a surgical procedure in the past due to my severe GERD."
- **Conditions: if #9 = History of severe GI disease (Ex: chrons disease, or ulcerative colits), DISPLAY**

**Q9.4** Are you sure it is medullary thyroid cancer?
- Format: Text Box
- Answers: "Ex: I was diagnosed by my endocrinologist and was treated in 2021"
- **Conditions: if #9 = History of medullary thyroid cancer, DISPLAY**

**Q9.1** Are you sure you have Type 1 Diabetes?
- Format: Check Box 
(Single Select)
- Answers:  ☐ Yes, I take insulin on a daily basis
 ☐ I'm not really sure
 ☐ I made a mistake, I actually have type 2 diabetes, and I'll go back and change my answer
- **Conditions: if #9 = History of type 1 diabetes, DISPLAY**

**Q9.3** Does anyone in your family have a history of...
- Format: Check Box 
(Multi Select)
- Answers:  ☐ MEN2 (multiple endocrine neoplasia syndrome type 2)
 ☐ Medullary thyroid cancer
 ☐ NONE of the above
- **Conditions: if #9 = History of diabetic retinopathy, DISPLAY**

**Q9.6** Does anyone in your family have a history of...
- Format: Check Box 
(Multi Select)
- Answers:  ☐ MEN2 (multiple endocrine neoplasia syndrome type 2)
 ☐ Medullary thyroid cancer
 ☐ NONE of the above
- **Conditions: if #9 = History of MEN-2 (multiple endocrine neoplasia syndrome type 2), DISPLAY**

**Q9.5** Please tell the doctor
- Format: Text Box
- Answers: "Ex: 1. Gastric sleeve. 2. November 1999. 3. No complications"
- **Conditions: if #9 = Recent bariatric surgery or other GI surgery(less than 6 months ago), DISPLAY**

**Q9.7** Please tell the doctor...
- Format: Text Box
- Answers: "Ex: 1) Sphincter of Oddi dysfunction 2) I still have my gallbladder"

**Q9.8** Please describe what type of liver disease/cirrhosis you have been diagnosed with:
- Format: Text Box
- Answers: "Ex: alcoholic liver cirrhosis"
- **Conditions: if #9 = Liver disease/cirrhosis, DISPLAY**

**Q9.9** Does anyone in your family have a history of...
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ MEN2 (multiple endocrine neoplasia syndrome type 2)
 ☐ Medullary thyroid cancer
 ☐ NONE of the above
- **Conditions: if #9 = Leber Hereditary Optic Neuropathy (LHON), DISPLAY**

Are you sure your family member has medullary thyroid cancer?
- Format: Text Box
- **Conditions: If # =  Medullary thyroid cancer, DISPLAY
**

**Q9.0** Since you indicated that you have previously been on a GLP-1 product, please select which Tier/Dosing you would like to be considered for below:
- Format: Radio Button
- Answers: Tier 1 – $379
Month 1: 6 mg 2x/week
Month 2: 8 mg 2x/week
Month 3: 10 mg 2x/week

Tier 1.5 - $399
Month 1: 10 mg 2x/week
Month 2: 10 mg 2x/week
Month 3: 10 mg 2x/week

Tier 2 – $439
Month 1: 12 mg 2x/week
Month 2: 14 mg 2x/week
Month 3: 16 mg 2x/week

Tier 3 – $499
Month 1: 18 mg 2x/week
Month 2: 20
- **Conditions: If #5 = Yes, DISPLAY**

**Q10.0** Have you discussed GLP-1/GIP Oral Drop Treatment options with your primary care doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: We encourage you to discuss GLP-1/GIP Oral Drop treatment with your primary care provider, as they have a more complete understanding of your health history. EllieMD provides this service based on the information you share and does not replace in-person medical care or long-term health management.

**Q11.0** Are you currently taking any prescription medications/therapies, or over-the-counter drugs?
- Format: Radio Button
- Answers: Yes
No

**Q11.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #11 = yes, DISPLAY**
- Notes: Patient Profile 
Reported Meds

**Q12.0** Are you currently taking any supplements?
- Format: Radio Button
- Answers: Yes
No

**Q12.1** Please specify which supplements you are taking:
- Format: Text Box
- **Conditions: If #12 = Yes, DISPLAY**

**Q12.0** Do you have any known allergies to benzyl alcohol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If # = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to benzyl alcohol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q13.0** Do you have any known allergies to any peptides, medications, or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q13.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #13 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q14.0** Have you had any adverse reactions to peptides?
- Format: Radio Button
- Answers: Yes
No

**Q14.1** Please explain:
- Format: Text Box
- **Conditions: If #14 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q15.0** Do you have any other allergies that your provider should be aware of?
- Format: Radio Button
- Answers: Yes 
No

**Q15.1** Please explain:
- Format: Text Box
- **Conditions: If #15 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q16.0** Do you have any of the following?
- Format: Check Box 
(Multi Select)
- Answers:  ☐ Chronic pancreatitis or previous episode of pancreatitis due to GLP-1
 ☐ History of type 1 diabetes
 ☐ History of severe GI disease (Ex: crohn's disease, or ulcerative colits)
 ☐ History of diabetic retinopathy
 ☐ Recent bariatric surgery or other GI surgery(less than 6 months ago)
 ☐ History of 

**Q16.1** Please Explain: (Include date of diagnosis, exact condition, treatments received, and any uncertainties.)
- Format: Text Box
- **Conditions: If #16 = any Orange or Red Answers, DISPLAY**

**Q17.0** Do any of the following kidney conditions or treatments apply to you?
- Format: Check Box 
(Multi Select)
- Answers:  ☐ History of kidney failure
 ☐ History of chronic renal failure or impairment
 ☐ Chronic Kidney Disease
 ☐ Seen a kidney specialist in the past 12 months
 ☐ History of solitary kidney, or kidney transplant
 ☐ NONE of the above

**Q17.1** Please Explain:
- Format: Text Box
- **Conditions: If #17 = Orange Answers, DISPLAY**

Do you or anyone in your family have a history of...
- Format: Check Box 
(Multi Select)
- Answers:  ☐ MEN2 (multiple endocrine neoplasia syndrome type 2)
 ☐ Medullary thyroid cancer
 ☐ Heart Disease
 ☐ NONE of the above

Please Explain:
- Format: Text Box
- **Conditions: If #9 = any Red Answers, DISPLAY**

**Q18.0** Do any of the following comorbidities or medical conditions apply to you?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Hypertension (High Blood Pressure)
 ☐ Heart disease
 ☐ Family History of Heart Disease
 ☐ Heart Failure
 ☐ Pre-diabetes/ Type 2 Diabetes / Hba1c above 5.7
 ☐ Coronary Artery Disease (CAD)
 ☐ Hyperlipidemia (High Cholesterol)
 ☐ Stroke
 ☐ Chronic Kidney Disease (CKD)
 ☐ Chronic Obstructive Pulmona

**Q19.0** Have you had any of the following?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Gallbladder Removal
 ☐ Gastric Bypass
 ☐ Gastric Sleeve
 ☐ Appendix Removal
 ☐ Uterine Surgery, or Hysterectomy
 ☐ Breast Surgery, or Mastectomy
 ☐ Ablation
 ☐ None of the above

**Q19.1** Please provide details including the diagnosis, the date of diagnosis, or any significant events related to your condition.
- Format: Text Box
- **Conditions: If #19 = is any of the conditions, except for None of the above. DISPLAY**

**Q20.0** Have you ever been diagnosed with cancer or tumors?
- Format: Radio Button
- Answers: Yes 
No

**Q20.1** Please specify the type and your treatment history:
- Format: Text Box
- **Conditions: If #20 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q20.2** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #20 = Yes, DISPLAY

If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

**Q21.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

Any medical conditions your doctor should know about?
- Format: Radio Button
- Answers: Yes 
No

Please list the medical conditions
- Format: Text Box
- **Conditions: If #25 = Yes, DISPLAY**

Do you have any of the following?
- Format: Check Box 
(Multi Select)
- Answers:  ☐ Leber optic nerve atrophy
 ☐ Cyanocobalamin hypersensitivity (allergy)
 ☐ NONE of the above


## Do you have (current OR history of), any autoimmune disorder (such as Lupus, Multiple Sclerosis, or other),  or a history of allergic reaction to NAD components (such as NAD, NADH, ENADA, or NAD+) ?

**Q22.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

**Q27.0** Please provide a current, FULL body photo of yourself wearing form-fitting clothing while...
Holding up a sign or your hand with how many months you've been a patient (ex, 1,2,3,4, etc.)
DO NOT use a picture you have already used for prior months, or is more than 7 days old.
- Format: Photo Upload

**Q23.0** Understanding GLP-1 Medications

GLP-1 medications (including Semaglutide, Tirzepatide, Wegovy®, Ozempic®, and Saxenda®) help with weight management by:
Increasing insulin production from the pancreas
Decreasing glucagon release after meals (which reduces fat storage)
Slowing gastric emptying, helping you feel full
Sublingual GLP-1 formulations are not commercially available and must be compounded. These under-the-tongue options may be appropriate for patients who wish to avoid injections.

Benefits, Risks & Side Effects
Benefits:
* Clinical studies show adults lost an average of ~12% body weight (~38 lbs) with GLP-1 medications compared to ~2.5% (~6 lbs) with placebo.

* 83% of adults achieved ≥5% weight loss on Semaglutide versus 31% on placebo.

* Weight loss has been linked to reduced risk of type 2 diabetes, cardiovascular disease, osteoarthritis pain, and other health concerns.

Common Side Effects: Nausea, constipation, diarrhea, reflux, fatigue, and headache. These often lessen over time but may be strongest when first starting or increasing dose.

Less Common Side Effects: Abdominal discomfort, bloating, constipation (slightly higher chance with sublingual formulations).

Rare Side Effects: Depression, hair loss.

Animal Studies: GLP-1 medications caused thyroid tumors in lab rodents. It is unknown whether this occurs in humans. No studies have shown a confirmed link between GLP-1 medications and thyroid tumors or medullary thyroid carcinoma (MTC).

Contraindications
You should not use a GLP-1 if you have:

* Eating disorder
* Gallbladder disease (removal is okay)
* Severe GI disease (gastroparesis, Crohn’s, ulcerative colitis)
* Chronic pancreatitis or history of pancreatitis on a GLP-1
* Recent bariatric surgery
* Drug or alcohol abuse
* Personal or family history of medullary thyroid cancer or MEN-2
* Currently pregnant, planning pregnancy, or breastfeeding
* Retinopathy

Patient Acknowledgment & Legal Disclosures

By proceeding with treatment through EllieMD and its partnered providers and pharmacies, you confirm that:

* You are personally completing this intake and that all medical history and information you provide is truthful, accurate, and complete. You understand that providing false or misleading information may affect your care.

* Compounded medications are not FDA-approved, have not undergone FDA safety or efficacy review, and are prescribed at your provider’s discretion under applicable regulations.

* You are responsible for following treatment instructions, monitoring your health, and seeking follow-up care when needed. In a medical emergency, call 911 or go to the nearest ER.

* This treatment is elective and does not replace routine healthcare, in-person evaluations, or emergency care.

* You release and hold harmless EllieMD and its affiliates from any claims or liabilities related to your participation.

Patients in Florida: please review the Florida Bill of Rights for Weight Loss https://www.leg.state.fl.us/STATUTES/index.cfm?App_mode=Display_Statute&Search_String&URL=0500-0599%2F0501%2FSections%2F0501.0575.html&utm_source=chatgpt.com)

By entering your name and date below, you confirm you have read and accepted these terms.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


