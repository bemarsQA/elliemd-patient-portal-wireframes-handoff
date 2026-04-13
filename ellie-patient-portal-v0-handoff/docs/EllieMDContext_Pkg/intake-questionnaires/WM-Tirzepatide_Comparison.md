# WM-Tirzepatide Comparison

Source: 3.0_EllieMD_Questionnaire_Source_of_Truth.xlsx

**Q1.0** Emai
- Format: True
- **Conditions: Text Box **

**Q2.0** Name
- Format: True
- **Conditions: Text Box **

**Q3.0** Sex
- Format: True
- **Conditions: Text Box **

**Q4.0** DOB
- Format: True
- **Conditions: Text Box **

**Q5.0** Phone
- Format: True
- **Conditions: Text Box **

**Q6.0** Zip
- Format: True
- **Conditions: Text Box **

**Q7.0** State
- Format: True
- **Conditions: Text Box **

**Q8.0** City
- Format: True
- **Conditions: Text Box **

**Q9.0** Address
- Format: True
- **Conditions: Text Box **

**Q1.0** Have you used a GLP-1 medication in the last 90 days*

Example: Semaglutide, Tirzepatide, Mounjaro, Wegovy, Ozempic, etc
- Format: True
- Answers: radio-group-1717115046532
- **Conditions: Multiple Choice**
- Popup: Yes
No

**Q2.0** Are you currently pregnant, any chance that you may be pregnant, or breastfeeding?*

(If you are a MALE, please choose, N/A - not applicable)
- Format: True
- Answers: 193.0
- **Conditions: Multiple Choice**
- Popup: Yes
No
N/A
- Notes: If Yes, DISQUALIFIED

**Q3.0** What is your height?*
- Format: True
- Answers: 5002.0
- **Conditions: Text Box **
- Popup: Feet

**Q4.0** What is your current weight (in lbs)*
- Format: True
- Answers: number-1716065742030
- **Conditions: Text Box **
- Popup: Insert Value 

**Q5.0** What is your goal weight (in lbs)
- Format: True
- Answers: number-1716066000281
- **Conditions: Text Box **
- Popup: Insert Value 

**Q6.0** Please describe*
- Format: True
- **Conditions: Text Box **
- Notes: If Question 1 = N, Show

**Q6.0** Since you indicated that you have previously been on a GLP-1 product, please select which Tier/Dosing you would like to be considered for below:

DISCLAIMER: The final Tier and protocol will be determined at the discretion of the healthcare provider based on their clinical judgement and the patient's needs. Payment adjustments will be made accordingly after the prescription is finalized. Please note, there is no guarantee that the requested Tier will be prescribed.
- Format: True
- **Conditions: Multiple Choice**
- Popup: (In each option include Month 1,2, & 3 mg breakdown) 
Tier1: $449
Month 1: 2.5 mg/week
Month 2: 5 mg/week
Month 3: 7.5 mg/week

Tier 1.5: $539
Month 1: 7.5 mg/week
Month 2: 7.5 mg/week
Month 3: 7.5 mg/week

Tier 2: $599
Month 1: 8 mg/week
Month 2: 9 mg/week
Month 3: 10 mg/week

Tier 3: $749
Month 1:
- Notes: If Question 1 = Y, Show

**Q7.0** Please upload a photo of your last prescription so that medication directions, dose, and strength are visible
- Format: True
- Answers: 5817.0
- **Conditions: Document Upload**
- Popup: Choose file
- Notes: If Question 1 = Y, Show

**Q8.0** What date did you first begin taking the medication?
- Format: True
- Answers: text-1719394746339
- **Conditions: Calendar Selection**
- Notes: If Question 1 = Y, Show

**Q9.0** What is the date of your last injection?
- Format: True
- Answers: text-1719394806631
- **Conditions: Calendar Selection**
- Notes: If Question 1 = Y, Show

**Q10.0** Please provide the ENTIRE medication name AND medication directions as written on your prescription

The strength of the medication MUST be included, as well as the units taken AND the date of first and last injections. Failure to provide this information in its entirety may result in medication denial. Example: Semaglutide 2.5mg/ml solution, taking 20 units weekly, first dose of Semaglutide on 3/07/24, last dose taken on 05/28/24.
- Format: True
- Answers: text-1717115152418
- **Conditions: Text Box **
- Notes: If Question 1 = Y, Show

**Q11.0** Have you had any lapse/breaks in treatment?

If your prescription is more than 30 days old, you will need a BMI greater than 27 to obtain a new one, unless you provide a valid explanation for the lapse.
- Format: True
- Answers: radio-group-1719394929719
- **Conditions: Multiple Choice**
- Popup: Yes
No
- Notes: If Question 1 = Y, Show

**Q12.0** Please describe
- Format: True
- Answers: text-1719394996200
- **Conditions: Text Box **
- Notes: If Question 1 = Y, Show
If Question 11 = Y, Show

**Q13.0** Do you have any of the following medical history?
- Format: True
- Answers: 194.0
- **Conditions: Check Box**
- Popup: 
A personal or family history of medullary thyroid carcinoma (MTC) (a type of thyroid cancer),
Multiple endocrine neoplasia type 2 (MEN 2) (tumors in your glands),
Hypersensitivity reaction to semaglutide,
Diabetes Type 1,
History of pancreatitis,
History of liver disease,
History of kidney disease 

**Q14.0** Has there been any change to your surgical history?
- Format: True
- Answers: checkbox-group-1683235363988
- **Conditions: Check Box**
- Popup: Gallbladder removal, 
Gastric Bypass, 
Gastric Sleeve, 
Appendix removal, 
Uterine surgery, or hysterectomy, 
Breast surgery, or mastectomy, 
Ablation, 
None of the above

**Q15.0** Do any of the following apply to you?
- Format: True
- Answers: 4797.0
- **Conditions: Check Box**
- Popup: Hypertension (High Blood Pressure), 
Heart disease, 
Family History of Heart Disease, 
Heart Failure, 
Type 2 Diabetes, 
Coronary Artery Disease (CAD), 
Hyperlipidemia (High Cholesterol), 
Stroke, 
Chronic Kidney Disease (CKD), 
Chronic Obstructive Pulmonary Disease (COPD), 
Osteoarthritis, 
Rheumat

**Q16.0** Have you had a physical in the last 3 years?

Patients are required to have had a physical in the last 3 years to qualify for treatment
- Format: True
- Answers: 5847.0
- **Conditions: Multiple Choice**
- Popup: Yes
No
- Notes: If No, DISQUALIFIED

**Q17.1** Select Year
- Format: True
- Answers: 5848.0
- **Conditions: Drop Down**
- Popup: Select : 2025,2024,2023, 2022
- Notes: If 16 = Y, Show

**Q17.2** Select Month
- Format: True
- Answers: 5848.0
- **Conditions: Drop Down**
- Popup: Select : January, February, March, April, May, June, July, August, September, October, November, December
- Notes: If 16 = Y, Show

**Q18.0** Have you had lab work done in the last 3 years?

Patients are required to have had lab work within the past three years to qualify for treatment.
- Format: True
- Answers: 5849.0
- **Conditions: Multiple Choice**
- Popup: Yes
No
- Notes: If No, DISQUALIFIED

**Q19.1** Select Year
- Format: True
- Answers: 5850.0
- **Conditions: Drop Down**
- Popup: Select : 2025,2024,2023, 2022
- Notes: If 17 = Y, Show

**Q19.2** Select Month
- Format: True
- Answers: 5850.0
- **Conditions: Drop Down**
- Popup: Select : January, February, March, April, May, June, July, August, September, October, November, December
- Notes: If 17 = Y, Show

**Q20.0** Do you currently take any medications?

(Prescribed Medications, over-the-counter drugs, dietary supplements (include vitamins, inhalers, etc.))
- Format: True
- Answers: 5717.0
- **Conditions: Multiple Choice**
- Popup: Yes
No

**Q21** Please describe
- Format: True
- Answers: 5717.0
- **Conditions: Text Box **
- Notes: If Question 20 = Y, Show

**Q22** Do you have any known allergies, including medications or supplements?*

(Please list any medications you have known allergies to)
- Format: True
- Answers: 5718.0
- **Conditions: Multiple Choice**
- Popup: Yes
No

**Q23.0** Please describe
- Format: True
- Answers: 5718.0
- **Conditions: Text Box **
- Notes: If Question 22 = Y, Show

**Q24** Do you have any current diagnosed medical conditions?*
- Format: True
- Answers: 5719.0
- **Conditions: Multiple Choice**
- Popup: Yes
No

**Q25.0** Please describe
- Format: True
- Answers: 5719.0
- **Conditions: Text Box **
- Notes: If Question 24 = Y, Show

**Q26** Please list any prescription medications or therapies, over-the-counter drugs, or supplements that you take currently.

(Please type NA if not applicable to you)
- Format: True
- Answers: text-1717193610591
- **Conditions: Text Box **

