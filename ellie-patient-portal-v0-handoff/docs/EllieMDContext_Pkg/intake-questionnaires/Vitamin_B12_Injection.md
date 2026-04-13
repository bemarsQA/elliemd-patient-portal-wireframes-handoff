# Vitamin B12 Injection

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

**Q7.0** What is the primary reason for seeking B12 therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Energy Boost
 ☐ Brain Health
 ☐ Mood Enhancement
 ☐ Cardiovascular Health
 ☐ Skin, Hair, and Nail Health

Are you here to be evaluated for medication to help provide supplementation for your diet and exercise plan?
- Format: Radio Button
- Answers: Yes 
No

**Q12.0** Have you discussed Vitamin B12 Treatment options with your primary care doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: We encourage you to discuss Vitamin B12 treatment with your primary care provider, as they have a more complete understanding of your health history. EllieMD provides this service based on the information you share and does not replace in-person medical care or long-term health management.

**Q13.0** Are you currently taking any prescription medications/therapies, or over-the-counter drugs?
- Format: Radio Button
- Answers: Yes
No

**Q13.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- Notes: Patient Profile 
Reported Meds

**Q14.0** Are you currently taking any supplements?
- Format: Radio Button
- Answers: Yes
No

**Q14.1** Please specify which supplements you are taking:
- Format: Text Box
- **Conditions: If #11 = Yes, DISPLAY**

Do you suffer from any of the following?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Fatigue
 ☐ Slow metabolism
 ☐ Abnormal sleep patterns
 ☐ Immunocompromised
 ☐ Currently undergoing weight loss treatment
 ☐ None of the above

Do you have any of the following?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ History of bariatric surgery
 ☐ History of bowel resection
 ☐ "Short-gut syndrome"
 ☐ History of B12 deficiency
 ☐ None of the above

**Q8.0** Do you have any known allergies to Vitamin B12 or cobalt?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have any known allergies to Vitamin B12 or cobalt. We recommend speaking with your primary care specialist to discuss alternative therapies and options.

Do you have any know allergies to benzyl alcohol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to benzyl alcohol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q9.0** Have you been diagnosed with Leber's Hereditary Optic Neuropathy?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: We're sorry, Patients with Leber’s Hereditary Optic Neuropathy cannot take Vitamin B12 due to risk of permanent optic nerve damage. Please back a choose a different addative.

**Q15.0** Do you have any known allergies to any peptides, medications, or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q15.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #15 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q16.0** Do you have any current infections, skin conditions, or rashes at potential injection sites?
- Format: Radio Button
- Answers: Yes
No

**Q17.0** Do you have any other allergies that your provider should be aware of?
- Format: Radio Button
- Answers: Yes 
No

**Q17.1** Please explain:
- Format: Text Box
- **Conditions: If #17 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

Have you ever been diagnosed with liver disease or cirrhosis?
- Format: Radio Button
- Answers: Yes 
No

**Q10.0** Do you have Polycythemia Vera or any other condition that affects your red blood cell levels?
- Format: Radio Button
- Answers: Yes 
No

**Q11.0** Do you have any kidney impairments or have you been diagnosed with any kidney diseases?
- Format: Radio Button
- Answers: Yes 
No

**Q11.1** Please explain:
- Format: Text Box
- **Conditions: If #11 = Yes, DISPLAY**

**Q18.0** Are there any other chronic medical conditions you have been diagnosed with? (e.g., diabetes, hypertension, cardiovascular disease, autoimmune disorders)
- Format: Radio Button
- Answers: Yes 
No

**Q18.1** Please explain:
- Format: Text Box
- **Conditions: If #18 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q19.0** Do you have any family history of neurodegenerative diseases like Alzheimer's or dementia?
- Format: Radio Button
- Answers: Yes 
No

**Q20.0** Have you ever been diagnosed with cancer or tumors?
- Format: Radio Button
- Answers: Yes 
No

**Q20.1** Please specify the type and your treatment history:
- Format: Text Box
- **Conditions: If #20 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q21.0** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

**Q22.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

Do you understand all the questions which were asked?
- Format: Radio Button
- Answers: Yes 
No

**Q23.0** By proceeding with this consultation and any treatments or services through EllieMD, its partnered pharmacies, and affiliated doctor networks, you confirm that the medical history information you have provided is truthful, accurate, and complete. This telehealth service provides recommendations based solely on the details you share, and any misrepresentation or omission of health conditions may affect your treatment outcomes.

You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. These medications have not undergone FDA review for safety or efficacy. It is your responsibility to consult with your primary care provider to ensure that these treatments are appropriate given your overall health and medical history.

You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when necessary. If you experience any side effects or medical concerns, you should contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or go to the nearest emergency room.

You understand that this treatment is elective and does not replace routine healthcare visits, in-person evaluations, or emergency care. By proceeding, you expressly agree to release, indemnify, and hold harmless EllieMD, its affiliates, providers, and partner pharmacies from any claims, liabilities, or damages of any kind arising from or related to your participation in these treatments.

By entering your name and date below, you acknowledge that you have read, understood, and accepted these terms and conditions prior to purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q24.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

