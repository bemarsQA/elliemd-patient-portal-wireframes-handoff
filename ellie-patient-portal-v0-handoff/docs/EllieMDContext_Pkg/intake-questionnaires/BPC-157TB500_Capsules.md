# BPC-157TB500 Capsules

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

**Q7.0** What is the primary reason for seeking BPC-157/TB 500 therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Accelerated Healing and Recovery
 ☐ Injury Recovery
 ☐ Chronic Pain and Inflammation 
 ☐ Gut Health
 ☐ Surgical Recovery
 ☐ Anti-Aging and Longevity 
 ☐ Optimizing Performance

**Q8.0** Have you discussed BPC-157/TB 500 Treatment options with your primary care doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: By proceeding with treatments or services through EllieMD and its network of practitioners, you acknowledge it is your responsibility to consult with your primary care provider to ensure the treatments are appropriate for your health. Certain treatments offered, including compounded medications, are

**Q9.0** Are you currently taking any prescription medications/therapies, or over-the-counter drugs?
- Format: Radio Button
- Answers: Yes
No

**Q9.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #9 = Yes, DISPLAY**
- Notes: Patient Profile 
Reported Meds

**Q10.0** Are you currently taking any supplements?
- Format: Radio Button
- Answers: Yes
No

**Q10.1** Please specify which supplements you are taking:
- Format: Text Box
- **Conditions: If #10 = Yes, DISPLAY**

**Q11.0** Have you ever been diagnosed with severe liver/kidney disease or uncontrolled bleeding disorder?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #11 = Yes, DISQUALIFIED**
- Popup: We’re sorry, we can’t proceed with BPC-157/TB-500 treatment. Because you reported a history of severe liver or kidney disease or an uncontrolled bleeding disorder, this therapy may not be safe for you. Your health and safety come first. We recommend following up with your primary-care provider or sp

**Q12.0** Do you have any known allergies to any peptides, medications, or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q12.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #12 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q13.0** Have you had any adverse reactions to peptides?
- Format: Radio Button
- Answers: Yes
No

**Q13.1** Please explain:
- Format: Text Box
- **Conditions: If #13 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q14.0** Do you have any other allergies that your provider should be aware of?
- Format: Radio Button
- Answers: Yes 
No

**Q14.1** Please explain:
- Format: Text Box
- **Conditions: If #14 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q15.0** Do you have any active infections or illness?
- Answers: Yes 
No

**Q15.1** Please explain:
- Format: Text Box
- **Conditions: If #15 = Yes, DISPLAY**

**Q16.0** Have you ever been diagnosed with any chronic medical conditions? (e.g., diabetes, thyroid disease, autoimmune disorders, heart or circulation problems, blood clots, kidney or liver disease)
- Format: Radio Button
- Answers: Yes 
No

**Q16.1** Please list all chronic medical conditions you have been diagnosed with, whether current or past.
- Format: Text Box
- **Conditions: If #16 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q17.0** Have you ever been diagnosed with cancer or tumors (inlcuding past cancers that are no longer under treatment or surveillance)?
- Format: Radio Button
- Answers: Yes 
No

**Q17.1** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #17 = Yes, DISPLAY 17.1
If #17.1 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.
- Notes: Patient Profile 
Conditions

**Q17.2** Was the diagnosis limited to fully excised basal cell carcinoma or squamous cell carcinoma of the skin with no recurrence or ongoing treatment?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #17 = Yes, DISPLAY 17.2**

**Q17.3** Please specify the type, year of diagnosis, treatment received, and current status (active, remission, cured).
- Format: Text Box
- **Conditions: If #17 = Yes, DISPLAY 17.3**

**Q17.4** Approximately how long ago did you complete cancer treatment?
- Format: Radio Button
- Answers: Within the last 2 years
2-5 years ago
More than 5 years ago
- **Conditions: If #17.2 = No, DISPLAY 17.4
If #17.4 = Within the last 2 years, DISQUALIFIED
If #17.4 = 2-5 years ago, DISPLAY
If #17.4 = More than 5 years ago, DISPLAY**
- Popup: DISQUALIFYING MESSAGE
Unfortunately, we are unable to proceed with prescribing this medication if you have had active cancer within the past 24 months. Please discuss your treatment options with your healthcare provider.

DISPLAY MESSAGE FOR 2-5 YRS AGO
Before proceeding with treatment, written clea

**Q18.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q19.0** By proceeding with this consultation and any treatments or services through EllieMD and partnered pharmacies and doctor networks, you confirm that the medical history information you have provided is truthful and complete. This telehealth service provides recommendations based on the details you share, and any misrepresentation or omission of health conditions may impact your treatment outcomes. 
You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. Compounded medications have not undergone FDA review for safety or efficacy, and it is important to consult with your primary care provider to ensure that these treatments align with your overall health and medical history. 
You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when needed. If you experience any side effects or medical concerns, it is essential to contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or visit the nearest emergency room. 
You understand that this treatment is elective and does not replace routine healthcare visits, in-person medical evaluations, or emergency care. Furthermore, by proceeding, you agree to release, indemnify, and hold harmless EllieMD and its affiliates from any claims, liabilities, or damages related to your participation in these treatments. 
By entering your name and date below you aknowledge you have read al the terms and conditions and accept prior to your purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q20.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

