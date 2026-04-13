# GLP-1GIP Oral Drops

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

**Q2.2** Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]

I acknowledge that I am not clinically overweight but am electing to use this medication for appetite suppression or macrodosing purposes. I understand that I am responsible for regularly monitoring my weight and agree to discontinue therapy if my Body Mass Index (BMI) falls below 20.

By proceeding, I confirm that I have read and understood this statement and accept responsibility for ongoing monitoring.
- Format: Single Button
- Answers: Agree and Proceed
- **Conditions: If 20 ≤ BMI < 24.5, DISPLAY**

**Q3.0** What is your goal weight?
- Format: Text Box
- Answers: Lbs

**Q4.0** Are you currently pregnant, planning to become pregnant, or breastfeeding? (If male, please select N/A)*
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are currently pregnant, planning to become pregnant, or breastfeeding, as the safety of this treatment in these circumstances has not been adequately studied. Your health and the well-being of your baby are our top priorities, and we recommen
- Notes: Patient Profile
Pregnant

**Q5.0** When was the last time you had an in person medical evaluation?
- Format: Check Box 
(Single Select) 
- Answers:  ☐ Less than a year ago
 ☐ 1 to 2 years
 ☐ More than 2 years ago

**Q6.0** Have you had any lab tests completed within the last 6 months that you would like to share with your doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If No, Send Lab Sheet ( Medication ID)
MID: 4b177a8a-cfca-414a-ad28-abde06271d35**

**Q6.1** Please upload:

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

**Q8.0** What is the primary reason for seeking GLP-1/GIP Oral Drop therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Prescription Appetite Suppression
 ☐ Scientifically Backed Weight Loss Aid
 ☐ Metabolic Health Booster
 ☐ Enhanced Quality of Life

**Q9.0** Are you here to be evaluated for weight loss?
- Format: Radio Button
- Answers: Yes 
No

**Q10.0** Are you here for GLP-1/GIP Oral Drop?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If # = No, DISQUALIFIED**
- Popup: We're sorry, it looks like you're not in the correct place!
Perhaps you made a wrong choice?  Use the back button if you'd like to change your answer.

**Q11.0** Have you ever attempted to lose weight in a weight management program?
- Format: Radio Button
- Answers: Yes 
No

**Q12.0** Are you willing to reduce your caloric intake alongside medication?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If # = No, DISQUALIFIED**
- Popup: We're sorry that you're not willing to help participate in weight loss through diet restriction.
Please see your primary care doctor for other options.

**Q13.0** Are you willing to increase your physical activity alongside medication?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If # = No, DISQUALIFIED**
- Popup: We're sorry that you're not willing to help participate in weight loss through physical activity.
Please see your primary care doctor about other options.

**Q36.0** Are you CURRENTLY taking any PRESCRIPTION medications for weight loss?
- Format: Check Box 
(Single Select) 
- Answers:  ☐ None at this time
 ☐ Rybelsus (oral tablets)
 ☐ Wegovy/Zepbound/Mounjaro/Ozempic/Trulicity/Saxenda
 ☐ Compounded Semaglutide
 ☐ Compounded tirzepatide
 ☐ Other drug not listed

**Q36.1** Please type ALL of the drug information which is found on the label of your CURRENT medication
- Format: Text Box
- **Conditions: If #36 = Orange Answers, DISPLAY**

**Q36.2** What other medication are you taking for weight loss?
- Format: Text Box
- **Conditions: If # 36=Other drug not listed, DISPLAY**

**Q14.0** Have you used GLP-1 Medication in the last 90 days? (e.g. Semaglutide, Tirzepatide, Mounjaro, Wegovy, Ozempic, etc)
- Format: Check Box 
(Single Select) 
- Answers:  ☐ None at this time
 ☐ Rybelsus (oral tablets)
 ☐ Wegovy/Zepbound/Mounjaro/Ozempic/Trulicity/Saxenda
 ☐ Compounded Semaglutide
 ☐ Compounded tirzepatide
 ☐ Other drug not listed

**Q14.1** Please upload a photo of your last prescription so that medication directions, dose, and strength are visible.
- Format: Photo Upload
- **Conditions: If #14 = orange or red questions, DISPLAY

Max File Size: 50MB

Supported file types: 
JPG, PNG, PDF, HEIC**

**Q14.2** Please provide the following information in its entirety. Failure to do so may result in medication denail.

**Q14.2.1** Full Medication Name: 
(Ex: Semaglutide Injection)
- Format: Text Box
- **Conditions: If #14 = orange or red questions, DISPLAY**

**Q14.2.2** Concentration:
(Ex: 2.5mg/mL)
- Format: Text Box
- **Conditions: If #14 = orange or red questions, DISPLAY**

**Q14.2.3** Medication directions as written on your prescription:
(Inject 20 units once weekly for 4 weeks)
- Format: Text Box
- **Conditions: If #14 = orange or red questions, DISPLAY**

**Q14.2.4** Date you first began taking the medication:
- Format: Date Selector
- **Conditions: If #14 = orange or red questions, DISPLAY**

**Q14.2.5** Date of your last injection:
- Format: Date Selector
- **Conditions: If #14 = orange or red questions, DISPLAY

If Date entered > 30 days from todays date, DISPLAY Pop-up**
- Popup: If your prescription is more than 30 days old, you will need a BMI greater than 27 to obtain a new one, unless you provide a valid explanation for the lapse.

**Q14.2.6** Have you had any lapse/breaks in treatment?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**

**Q14.2.6.1** Please tell us why you took a break from treatment
- Format: Text Box
- **Conditions: If #14.2.6 = Yes, DISPLAY**

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

**Q14.3** Since you indicated that you have previously been on a GLP-1 product, please select which Tier/Dosing you would like to be considered for below:
- Format: Radio Button
- Answers: Tier 1 – $379

Month 1: 5 mg GLP-1/GIP 
Month 2: 8 mg GLP-1/GIP 
Month 3: 11 mg GLP-1/GIP 


Tier 2 – $439

Month 1: 12 mg GLP-1/GIP 
Month 2: 15 mg GLP-1/GIP 
Month 3: 17 mg GLP-1/GIP 


Tier 3 – $499

Month 1: 18 mg GLP-1/GIP 
Month 2: 19 mg GLP-1/GIP 
Month 3: 20 mg GLP-1/GIP 
- **Conditions: If #14 = orange or red questions, DISPLAY**

**Q15.0** Are you currently taking any prescription medications/therapies, or over-the-counter drugs?
- Format: Radio Button
- Answers: Yes
No

**Q15.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #15 = yes, DISPLAY**
- Notes: Patient Profile 
Reported Meds

**Q12.0** Are you currently taking any supplements?
- Format: Radio Button
- Answers: Yes
No

**Q12.1** Please specify which supplements you are taking:
- Format: Text Box
- **Conditions: If #12 = Yes, DISPLAY**

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

**Q18.0** Do you have any of the following?
- Format: Check Box 
(Multi Select)
- Answers:  ☐ Leber optic nerve atrophy
 ☐ Cyanocobalamin hypersensitivity (allergy)
 ☐ NONE of the above

Do you have any known allergies to benzyl alcohol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If # = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to benzyl alcohol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q19.0** Do you have (current OR history of), any autoimmune disorder (such as Lupus, Multiple Sclerosis, or other),  or a history of allergic reaction to NAD components (such as NAD, NADH, ENADA, or NAD+) ?
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a current or history of autoimmune disorders or any known allergic reactions to NAD components. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

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

**Q16.0** Have you ever been diagnosed with any chronic medical conditions? (e.g., diabetes, hypertension, cardiovascular disease, autoimmune disorders)
- Format: Radio Button
- Answers: Yes 
No

**Q16.1** Please state all current diagnosed medical conditions:
- Format: Text Box
- **Conditions: If #16 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q17.0** Do you have any of the following medical history?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ A Personal or Family History of Medullary Thyroid Carcinoma (MTC) (a type of thyroid cancer)
 ☐ Multiple Endocrine Neoplasia Type 2 (MEN 2) (tumors in your glands)
 ☐ Hypersensitivity Reaction to Semaglutide
 ☐ Diabetes Type 1
 ☐ History of Pancreatitis
 ☐ History of Liver Disease
 ☐ History of K

**Q21.0** Has there been any change to your surgical history?
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

**Q22.0** Do any of the following apply to you?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Hypertension (High Blood Pressure)
 ☐ Heart disease
 ☐ Family History of Heart Disease
 ☐ Heart Failure
 ☐ Type 2 Diabetes
 ☐ Coronary Artery Disease (CAD)
 ☐ Hyperlipidemia (High Cholesterol)
 ☐ Stroke
 ☐ Chronic Obstructive Pulmonary Disease (COPD)
 ☐ Osteoarthritis
 ☐ Sleep Apnea
 ☐ Family His

**Q22.1** Please provide details including the diagnosis, the date of diagnosis, or any significant events related to your condition.
- Format: Text Box
- **Conditions: If #22 = is any of the conditions, except for Non of the above. DISPLAY**

**Q23.0** Do you have any known allergies to any peptides, medications, or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q23.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #23 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q24.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q25.0** Any medical conditions your doctor should know about?
- Format: Radio Button
- Answers: Yes 
No

**Q25.1** Please list the medical conditions
- Format: Text Box
- **Conditions: If #25 = Yes, DISPLAY**

**Q26.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

**Q27.0** Please provide a current, FULL body photo of yourself wearing form-fitting clothing while...
Holding up a sign or your hand with how many months you've been a patient (ex, 1,2,3,4, etc.)
DO NOT use a picture you have already used for prior months, or is more than 7 days old.
- Format: Photo Upload

Do you understand that GLP-1/GIP Oral Drops are a compounded medication that has not been evaluated or approved by the FDA, and that you should consult your primary care provider before starting any new therapy?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: By proceeding with this consultation and any treatments or services through EllieMD and partnered pharmacies and doctor networks, you confirm that the medical history information you have provided is truthful and complete. This telehealth service provides recommendations based on the details you sha

**Q28.0** Do you understand all the questions which were asked?
- Format: Radio Button
- Answers: Yes
No

What question did you not understand?
Please give as much information as possible
- Format: Text Box

Please read the following about all GLP-1s

HOW THEY WORK:
Increasing insulin production from the pancreas.
Decreasing glucagon release after a meal.  Glucagon triggers your liver to store fat. Slows gastric emptying, which will make you feel ‘full’.
SUBLINGUAL GLP-1 MEDICATIONS:
Not commercially available, therefore these must be compounded. These under-the-tongue formulations are ideal for patients who want to avoid needles or injections.

BENEFITS:
GLP-1's have been shown to help with weight reduction when combined with lifestyle medications such as exercise and reduction of caloric intake.

RISKS:
Medicines in the GLP family have caused thyroid tumors in lab mice. It is not yet known if they will cause thyroid tumors or medullary thyroid carcinoma (MTC) in people. No studies have confirmed a linkage between GLP-1's and thyroid tumors in humans. Sublingual GLP-1's may have a slightly higher chance of abdominal discomfort and/or constipation.

COMMON SIDE EFFECTS:
Nausea, constipation, gastroesophageal reflux, diarrhea, fatigue. Side effects typically lesson the longer the person takes the medication and may be most intense when first starting the medication or immediately following a dosage increase. 

RARE SIDE EFFECTS:
Depression and hair loss.
YOU SHOULD NOT USE A GLP-1 IF YOU HAVE ANY OF THE FOLLOWING:
Eating Disorder
Gallbladder Disease (does not include gallbladder removal/cholecystectomy)
Severe GI disease (eg: gastroparesis, Crohns, ulcerative colitis)
Drug Abuse
Alcohol Abuse
Recent Bariatric Surgery
Chronic pancreatitis, or pancreatitis while taking a GLP-1
Personal or family history of medullary Thyroid Cancer
Multiple endocrine neoplasia type 2 syndrome (MEN-2)
Currently Pregnant (or planning to become pregnant)
Currently Breastfeeding
Retinopathy
- Format: Radio Button
- Answers: YES, I CONSENT to being treated with sublingual (under-the-tongue) GLP-1 agonists. I want to avoid needles and injections. I have reviewed the risks and benefits above.

NO, I DO NOT consent to being treated with a sublingual (under-the-tongue) GLP-1

Please type your FULL LEGAL NAME in lieu of your signature below after reviewing:
Semaglutide, Wegovy, Ozempic, Saxenda are all in a group of drugs called "GLP-1's".  These medications work on the body by :
Increasing insulin production from the pancreas
Decreasing glucagon release after a meal.  Glucagon triggers your liver to store fat.
Slows gastric emptying, which will make you feel ‘full’.
BENEFITS:
In a 68-week medical study of 1,961 adults living with obesity or excess weight with a related medical problem along with reduced-calorie diet and increased physical activity
Adults on average achieved ~12% weight loss (~38 pounds with an average)
People taking placebo in the study (not on medicine) lost an average of 6 lb (or ~2.5% body weight)
Average starting weight in both groups: ~232 lb
83% of adults taking Wegovy® lost 5% or more weight, compared to 31% taking placebo
Weight loss has been shown to decrease the rates of diabetes type 2, cardiovascular disease, pain associated with osteoarthritis, and other co-morbidities.
RISKS:
Common side effects include nausea, vomiting, diarrhea, constipation, and gastroesophageal reflux.  Occasionally fatigue/headaches.
Medications in the GLP-1 family have caused thyroid tumors in lab mice. It is not yet known if medications in the GLP-1 family will cause thyroid tumors or medullary thyroid carcinoma (MTC) in people. No studies have confirmed a linkage between GLP-1 medications and thyroid tumors in humans, but if you have a history of family thyroid cancer you may want to discuss taking a GLP-1 with your primary care doctor.
- Format: Text Box
- Answers: Ex: JOHN Q SMITH

Please review the Florida Bill of Rights for Weight loss:
Please click this LINK to view/download.
- Format: Radio Button
- Answers:  ☐ I have reviewed the Florida Bill of Rights for weight loss.
 ☐ I was unable to view the Florida Bill of Rights for Weight loss
- **Conditions: If State = Florida, DISPLAY**

**Q22.0** By proceeding with this consultation and any treatments or services through EllieMD and partnered pharmacies and doctor networks, you confirm that the medical history information you have provided is truthful and complete. This telehealth service provides recommendations based on the details you share, and any misrepresentation or omission of health conditions may impact your treatment outcomes. 
You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. Compounded medications have not undergone FDA review for safety or efficacy, and it is important to consult with your primary care provider to ensure that these treatments align with your overall health and medical history. 
You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when needed. If you experience any side effects or medical concerns, it is essential to contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or visit the nearest emergency room. 
You understand that this treatment is elective and does not replace routine healthcare visits, in-person medical evaluations, or emergency care. Furthermore, by proceeding, you agree to release, indemnify, and hold harmless EllieMD and its affiliates from any claims, liabilities, or damages related to your participation in these treatments. 
By entering your name and date below you aknowledge you have read all the terms and conditions and accept prior to your purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


