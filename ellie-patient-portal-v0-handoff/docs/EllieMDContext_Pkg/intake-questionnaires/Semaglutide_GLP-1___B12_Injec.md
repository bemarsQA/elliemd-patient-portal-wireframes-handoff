# Semaglutide (GLP-1 + B12) Injec

Source: 3.0_EllieMD_Questionnaire_Source_of_Truth.xlsx

**Q1.0** Are you here to be evaluated for weight loss?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, DISQUALIFIED**
- Popup: Oops! It looks like you’re in the wrong spot. This intake is only for patients looking to use GLP-1's for weight loss. 

[Go Back]        [See Microdose Options]

**Q1.1** Have you ever attempted to lose weight in a weight management program?
- Format: Radio Button
- Answers: Yes 
No, this would be my first time
- **Conditions: If #1 = Yes, DISPLAY**

**Q1.2** Are you willing to reduce your caloric intake and increase your physical activity alongside the medication?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #1 = Yes, DISPLAY

If No, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are not willing to make lifestyle changes.

**Q2.0** Are you currently pregnant, planning to become pregnant, or breastfeeding? (If male, please select N/A)*
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are currently pregnant, planning to become pregnant, or breastfeeding, as the safety of this treatment in these circumstances has not been adequately studied. Your health and the well-being of your baby are our top priorities, and we recommen
- Notes: Patient Profile
Pregnant

**Q3.0** What is your height?
- Format: Text Box (2 boxes) 
- Answers: Feet
Inches
- Notes: Patient Profile
Height/Weight

**Q4.0** What is your current weight?
- Format: Text Box
- Answers: Lbs
- Notes: Patient Profile
Height/Weight

**Q5.0** What is your goal weight?
- Format: Text Box
- Answers: Goal weight (lbs)

**Q6.0** Have you used GLP-1 medications or any other prescription weight loss drugs in the last 45 days? (e.g. Semaglutide, Tirzepatide, Mounjaro, Wegovy, Ozempic, etc)
- Format: Check Box 
(Single Select) 
- Answers: Yes 
No

**Q6.1** Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #6 = Yes

If BMI => 22, Continue

If BMI < 22, DISQUALIFIED**
- Popup: We’re Sorry

Based on the information you provided, your Body Mass Index (BMI) is below 22. Unfortunately, we cannot prescribe this medication if your BMI is under this threshold, as it may pose health risks in individuals with lower body weight.

Your health and safety are our top priorities. We re

**Q6.2** Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #6 = No

If BMI => 25, Continue

If BMI < 25, DISQUALIFIED**
- Popup: We’re Sorry

Based on the information you provided, your Body Mass Index (BMI) is below 25. Unfortunately, we cannot prescribe this medication if your BMI is under this threshold, as it may pose health risks in individuals with lower body weight.

Your health and safety are our top priorities. We re

**Q7.0** When was the last time you had an in person medical evaluation?
- Format: Check Box 
(Single Select) 
- Answers:  ☐ Less than a year ago
 ☐ 1 to 2 years
 ☐ More than 2 years ago

**Q8.0** Have you had any lab tests completed within the last 6 months that you would like to share with your doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, Send Lab Sheet ( Medication ID)
MID: 4b177a8a-cfca-414a-ad28-abde06271d35**

**Q9.0** What is the primary reason for seeking weight management therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Prescription Appetite Suppression
 ☐ Scientifically Backed Weight Loss Aid
 ☐ Metabolic Health Booster
 ☐ Enhanced Quality of Life

**Q10.0** You previously mentioned you have used GLP-1 medications or any other prescription weight loss drugs in the last 45 days:
- **Conditions: If #6 = Yes, DISPLAY**

**Q10.1** Please upload a photo of your last prescription so that medication directions, dose, and strength are visible.
- Format: Photo Upload
- **Conditions: If #6 = Yes, DISPLAY

Max File Size: 50MB

Supported file types: 
JPG, PNG, PDF, HEIC**

**Q10.2** Full Medication Name: 
(Ex: Semaglutide Injection)
- Format: Text Box
- **Conditions: If #6 = Yes, DISPLAY**

**Q10.3** Concentration:
(Ex: 2.5mg/mL)
- Format: Text Box
- **Conditions: If #6 = Yes, DISPLAY**

**Q10.4** Medication directions as written on your prescription:
(Inject 20 units once weekly for 4 weeks)
- Format: Text Box
- **Conditions: If #6 = Yes, DISPLAY**

**Q10.5** Date you first began taking the medication:
- Format: Date Selector
- **Conditions: If #6 = Yes, DISPLAY**

**Q10.6** Date of your last injection:
- Format: Date Selector
- **Conditions: If #6 = Yes, DISPLAY
If Date entered > 30 days from todays date, DISPLAY Pop-up**
- Popup: If your prescription is more than 30 days old, you will need to start over at Tier 1, unless you provide a valid explanation for the lapse.

**Q10.7** Please tell us why you took a break from treatment:
- Format: Text Box
- **Conditions: If #9.2.5 = Date > 30 days from todays date, DISPLAY**

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

**Q11.0** Since you indicated that you have previously been on a GLP-1 medication, please select which Tier/Dosing you would like to be considered for below:
- Format: Radio Button
- Answers: Tier 1 – $299
Month 1: 0.25 mg/week
Month 2: 0.5 mg/week
Month 3: 1.0 mg/week

Tier 1.5 – $329
Month 1: 1.0 mg/week
Month 2: 1.0 mg/week
Month 3: 1.0 mg/week

Tier 2 – $349
Month 1: 1.2 mg/week
Month 2: 1.5 mg/week
Month 3: 2.0 mg/week

Tier 2.5 - 

Tier 3 – $399
Month 1: 2.5 mg/week
Month 2: 2.5 mg
- **Conditions: If #6 = Yes, DISPLAY**

**Q12.0** Have you discussed GLP-1+B12 Injection Treatment options with your primary care doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: We encourage you to discuss GLP-1+B12 Injection treatment with your primary care provider, as they have a more complete understanding of your health history. EllieMD provides this service based on the information you share and does not replace in-person medical care or long-term health management.

**Q11.0** Are you currently taking any prescription medications/therapies, or over-the-counter drugs?

Many medications have interactions. Your doctor needs to know every medication that you take to help avoid any harmful interactions.
- Format: Radio Button
- Answers: Yes
No

**Q11.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #11 = Yes, DISPLAY**
- Notes: Patient Profile 
Reported Meds

**Q12.0** Are you currently taking any supplements?
- Format: Radio Button
- Answers: Yes
No

**Q12.1** Please specify which supplements you are taking:
- Format: Text Box
- **Conditions: If #12 = Yes, DISPLAY**

Do you have any know allergies to benzyl alcohol?
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

**Q16.0** Have you ever been diagnosed with any chronic medical conditions? (e.g., diabetes, hypertension, cardiovascular disease, autoimmune disorders)
- Format: Radio Button
- Answers: Yes 
No

**Q16.1** Please state all current diagnosed medical conditions:
- Format: Text Box
- **Conditions: If #16 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q17.0** Do you have any of the following?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ A Personal or Family History of Medullary Thyroid Carcinoma (MTC) (a type of thyroid cancer)
 ☐ Multiple Endocrine Neoplasia Type 2 (MEN 2) (tumors in your glands)
 ☐ Hypersensitivity Reaction to Semaglutide or Tirzepatide
 ☐ History of Type 1 Diabetes
 ☐ Chronic pancreatitis or previous episode 

**Q17.1** Are you sure you have Type 1 Diabetes?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Yes, I take insulin on a daily basis
 ☐ I'm not really sure
 ☐ I made a mistake, I actually have type 2 diabetes, and I'll go back and change my answer
- **Conditions: If #17 = "History of Type 1 Diabetes" , DISPLAY**

**Q17.2** Please tell the doctor more about your severe GI problems
- Format: Text Box
- **Conditions: If #17 = "History of severe GI disease (Ex: Crohn's Disease, or Ulcerative Colits)" , DISPLAY**

**Q17.3** Do you know if your diagnosis is specifically medullary thyroid cancer?

If you’re not sure, please share any details you can for the doctor.
Having hypothyroidism alone is not a problem.
- Format: Text Box
- **Conditions: If #17 = "A Personal or Family History of Medullary Thyroid Carcinoma (MTC) (a type of thyroid cancer)" , DISPLAY**

**Q17.3** Please describe what type of liver disease/cirrhosis you have been diagnosed with:
- Format: Text Box
- **Conditions: If #17 = "History of Liver Disease/ Cirrhosis " , DISPLAY**

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
 ☐ Bariatric surgery in the last 6 months (Ex: Gastric Bypass, Gastic Sleeve)
 ☐ Appendix Removal
 ☐ Uterine Surgery, or Hysterectomy
 ☐ Breast Surgery, or Mastectomy
 ☐ Ablation
 ☐ None of the above

**Q19.1** Please provide details of your surgery, including the month and year it was performed, as well as any complications or ongoing issues you may have experienced.
- Format: Date Selector 
- **Conditions: If #19 = any except (None of the above) DISPLAY**

**Q20.0** Does anyone in your family have a history of...
- Answers:  ☐ MEN2 (multiple endocrine neoplasia syndrome type 2)
 ☐ Medullary thyroid cancer
 ☐ None of the above

**Q21.0** How sensitive are you to feelings of nausea/motion sickness 1-10 (10 is highly sensitive).
- Format: Gradient Selection
- Answers: <1 is 1
<2 is 2
<3 is 3
....
Continue all the way to 10 


**Q22.0** If your treatment made you significantly nauseated or caused other GI side effects would that impact your compliance with treatment and willingness to continue?
- Format: Radio Button
- Answers: Yes 
No

**Q23.0** Approximately 40% of patients using commercially available GLP-1 treatments experience nausea. Is it important to you to minimize possible nausea and GI side effects during your treatment?
- Format: Radio Button
- Answers: Yes 
No

**Q24.0** In any prior attempts to lose weight, do you feel you experienced loss of muscle as well?
- Format: Radio Button
- Answers: Yes 
No

**Q25.0** Is losing weight while conserving/improving muscle mass important to you?
- Format: Radio Button
- Answers: Yes 
No

**Q26.0** Have you ever been diagnosed as having anemia?
- Format: Radio Button
- Answers: Yes 
No

**Q27.0** Have you ever had issues with fatigue or low energy?
- Format: Radio Button
- Answers: Yes 
No

**Q28.0** Have you ever had issues with low vitamin levels or had to take a vitamin supplement?
- Format: Radio Button
- Answers: Yes 
No

**Q29.0** Would you like to have control over how forcefully and fast the medication is injected?
- Format: Radio Button
- Answers: Yes 
No

**Q30.0** During your weight loss journey would you like your doctor to be able to tailor your dosage to your personalized needs and goals?
- Format: Radio Button
- Answers: Yes 
No

**Q31.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q33.0** Please provide a current, FULL body photo of yourself wearing form-fitting clothing while...
- Holding up a sign or your hand with how many months you've been a patient (ex, 1,2,3,4, etc.)
- DO NOT use a picture you have already used for prior months, or is more than 7 days old.
- Format: Photo Upload
- **Conditions: Skip option

Max File Size: 50MB

Supported file types: 
JPG, PNG, HEIC**

**Q34.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Skip option

Max File Size: 50MB

Supported file types: 
JPG, PNG, HEIC**

**Q32.0** Understanding GLP-1 Medications

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


