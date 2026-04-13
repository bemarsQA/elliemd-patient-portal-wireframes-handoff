# Selank Nasal Spray

Source: 3.0_EllieMD_Questionnaire_Source_of_Truth.xlsx

**Q1.0** What is your height?
- Format: Text Box (2 boxes) 
- Answers: Feet
Inches

**Q2.0** What is your current weight?
- Format: Text Box
- Answers: Lbs

**Q3.0** Are you currently pregnant, planning to become pregnant, or breastfeeding? (If male, please select N/A)*
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are currently pregnant, planning to become pregnant, or breastfeeding, as the safety of this treatment in these circumstances has not been adequately studied. Your health and the well-being of your baby are our top priorities, and we recommen

**Q4.0** What are the primary reasons for considering Selank Nasal Spray?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Stress Resilience
☐ Calm Support
☐ Learning & Memory
☐ Inflammation Support
☐ Emotional Balance
☐ Nervous System Regulation

**Q5.0** Have you ever had an allergic or hypersensitivity reaction to Selank or any formulation components?
- Format: Radio Button
- Answers: Yes
No
Not sure
- **Conditions: If #5 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known hypersensitivity or allergy to Selank or any formulation components. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q5.1** Please explain:
- Format: Text Box
- **Conditions: If #5 = Not sure, DISPLAY 5.1**

**Q6.0** Are you currently taking any prescription medications or therapies, over-the-counter drugs, or supplements?
- Format: Radio Button
- Answers: Yes
No

**Q6.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, including the dosage, and frequency. Be sure to include any sedative and psychiatric medications.
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #6 = Yes, DISPLAY #6.1**

**Q7.0** Do you have any known allergies to benzyl alcohol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #7 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to benzyl alcohol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q8.0** Have you been diagnosed with or are you currently being treated for any of the following psychiatric conditions?
(Select all that apply)
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Active psychosis (e.g., hallucinations, delusions)
 ☐ Severe uncontrolled bipolar disorder
 ☐ Active and unsupervised major depressive disorder
 ☐ Active suicidal ideation or recent suicide attempt
 ☐ Psychiatric hospitalization within the past 6 months
 ☐ None of the above
- **Conditions: If #8 = RED ANSWERS, DISQUALIFIED**
- Popup: We’re sorry, but based on your responses, this treatment may not be appropriate at this time.

Your safety is our top priority. We recommend following up with your primary care provider or specialist to discuss options that are best suited to your health needs.

**Q9.0** Do you have any history of mental health conditions that are currently stable and well-managed?
(Select all that apply)
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Anxiety disorder
☐ Depression
☐ Bipolar disorder
☐ Other
☐ None of the above

**Q9.1** If other, please explain:
- Format: Text Box
- **Conditions: If #9 = Other, DISPLAY 9.1**

**Q10.0** Have you been diagnosed with or are currently being treated for any of the following?
(Select all that apply)
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Active cancer or cancer under current treatment or surveillance
 ☐ Uncontrolled seizure disorder
 ☐ Uncontrolled intracranial hypertension or pseudotumor cerebri
 ☐ Neurosurgery within the past 6 months
 ☐ Pituitary, brain, or other intracranial tumor (benign or malignant)
 ☐ Uncontrolled or unst
- **Conditions: If #10 = RED ANSWERS, DISQUALIFIED**
- Popup: We’re sorry, but based on your responses, this treatment may not be appropriate at this time.

Your safety is our top priority. We recommend following up with your primary care provider or specialist to discuss options that are best suited to your health needs.

**Q10.1** Please describe your heart condition, year diagnosed, current treatment, and whether it is stable and monitored by a cardiologist.
- Format: Text Box
- **Conditions: If #10 = History of heart disease..., DISPLAY 10.1**

**Q11.0** Have you ever been diagnosed with cancer or tumors (inlcuding past cancers that are no longer under treatment or surveillance)?
- Format: Radio Button
- Answers: Yes 
No

**Q11.1** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #11 = Yes, DISPLAY 11.1
If #11.1 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

**Q11.2** Was the diagnosis limited to fully excised basal cell carcinoma or squamous cell carcinoma of the skin with no recurrence or ongoing treatment?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #11 = Yes, DISPLAY 11.2**

**Q11.3** Please specify the type, year of diagnosis, treatment received, and current status (active, remission, cured).
- Format: Text Box
- **Conditions: If #11 = Yes, DISPLAY 11.3**

**Q11.4** Approximately how long ago did you complete cancer treatment?
- Format: Radio Button
- Answers: Within the last year
1-2 years ago
More than 2 years ago
- **Conditions: If #11.2 = No, DISPLAY 11.4
If #11.4 = Within the last year, DISQUALIFIED
If #11.4 = 1-2 years ago, DISPLAY**
- Popup: DISQUALIFYING MESSAGE
Unfortunately, we are unable to proceed with prescribing this medication if you have had active cancer within the past 12 months. Please discuss your treatment options with your healthcare provider.

DISPLAY MESSAGE FOR 1-2 YRS AGO
Before proceeding with treatment, written clea

**Q12.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q13.0** Do you understand all of the questions in this intake?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #13 = No, DISQUALIFIED**
- Popup: For your safety, we’re unable to proceed at this time unless all intake questions are clearly understood. Please review the information and return once you’re ready, or contact our team for support.

**Q14.0** "By proceeding with this consultation and any treatments or services through EllieMD, its partnered pharmacies, and affiliated doctor networks, you confirm that the medical history information you have provided is truthful, accurate, and complete. This telehealth service provides recommendations based solely on the details you share, and any misrepresentation or omission of health conditions may affect your treatment outcomes.

You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. These medications have not undergone FDA review for safety or efficacy. It is your responsibility to consult with your primary care provider to ensure that these treatments are appropriate given your overall health and medical history.

You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when necessary. If you experience any side effects or medical concerns, you should contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or go to the nearest emergency room.

You understand that this treatment is elective and does not replace routine healthcare visits, in-person evaluations, or emergency care. By proceeding, you expressly agree to release, indemnify, and hold harmless EllieMD, its affiliates, providers, and partner pharmacies from any claims, liabilities, or damages of any kind arising from or related to your participation in these treatments.

By entering your name and date below, you acknowledge that you have read, understood, and accepted these terms and conditions prior to purchase."
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q15.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

