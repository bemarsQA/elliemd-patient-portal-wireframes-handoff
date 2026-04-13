# PT-141 Injection

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

**Q3.0** Please enter your blood pressure reading within the last 6 months (Ex: 120/80)
- Format: Text Box
- Answers: 120/80

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

Are you currently taking any medications for psychiatric conditions (e.g., antidepressants, antipsychotics, or mood stabilizers)?
- Format: Radio Button
- Answers: Yes 
No

Please list the name of the medication
- Format: Text Box
- **Conditions: If # = Yes, DISPLAY**

Are you currently taking any Opiate or Narcotic medications?
- Format: Radio Button
- Answers: Yes 
No

Please list the name of the medication
- Format: Text Box
- **Conditions: If # = Yes, DISPLAY**

Do you have any of the following medical conditions?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ History of heart attack (myocardial infarction)
 ☐ Chest pain (angina)
 ☐ Stroke or mini-stroke (TIA)
 ☐ Severe high blood pressure (hypertension not well-controlled)
 ☐ Severe low blood pressure (hypotension)
 ☐ Irregular heartbeat (arrhythmias, atrial fibrillation, etc.)
 ☐ Heart failure
- **Conditions: If Yes, DISQUALIFIED**
- Popup: I'm sorry, due to your medical conditions, it is not safe for you to take PT-141 (Bremelanotide)

Have you experienced frequent nausea, vomiting, or motion sickness?
- Format: Radio Button
- Answers: Yes 
No

**Q7.0** What is the primary reason for seeking PT-141 Injection therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Low Libido or Reduced Sexual Desire
 ☐ Sexual Dysfunction Treatment
 ☐ Enhanced Sexual Enjoyment and Satisfaction
 ☐ Hormonal Changes Affecting Libido
 ☐ Stress, Anxiety, and Psychological Factors
 ☐ Addressing Low Libido Due to Medications
 ☐ Physical or Neurological Conditions
 ☐ Enhancing Conf

**Q8.0** Do you have any known allergies to PT 141 (Bremelanotide) or any of its components?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have any known allergies to PT 141 (Bremelanotide) or any of its components. We recommend speaking with your primary care specialist to discuss alternative therapies and options.

**Q9.0** Are you seeking PT-141 to enhance sexual desire, improve physical arousal, or address specific performance issues?
- Format: Radio Button
- Answers: Yes 
No

**Q10.0** How long have you been experiencing symptoms of low libido or sexual dysfunction?
- Format: Radio Button
- Answers: Less than 6 months 
6 months to 1 year 
Greater than 1 year 

**Q11.0** Have your symptoms worsened over time?
- Format: Radio Button
- Answers: Yes 
No

**Q12.0** Have you tried other treatments for sexual dysfunction before? (e.g., hormone replacement therapy, PDE5 inhibitors like Viagra or Cialis)
- Format: Radio Button
- Answers: Yes 
No

**Q12.1** Please explain:
- Format: Text Box

**Q13.0** Have you discussed PT-141 Injection Treatment options with your primary care doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: We encourage you to discuss PT-141 Injection treatment with your primary care provider, as they have a more complete understanding of your health history. EllieMD provides this service based on the information you share and does not replace in-person medical care or long-term health management.

Are you currently taking any of the following specific medications for high blood pressure?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Clonidine
 ☐ Beta-blockers (e.g., metoprolol, atenolol, propranolol)
 ☐ Diuretics (e.g., furosemide, hydrochlorothiazide [HCTZ], spironolactone)
 ☐ Nitrate medications (e.g., nitroglycerin, isosorbide mononitrate, isosorbide dinitrate)
 ☐ I'm not sure
 ☐ None of the above
- **Conditions: If red answers, DISQUALIFIED**
- Popup: I'm sorry, due to your current medications, you are not an ideal candidate for PT-141 (Bremelanotide)

**Q14.0** Are you currently taking any prescription medications/therapies, or over-the-counter drugs?
- Format: Radio Button
- Answers: Yes
No

**Q14.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- Notes: Patient Profile 
Reported Meds

**Q15.0** Are you currently taking any supplements?
- Format: Radio Button
- Answers: Yes
No

**Q15.1** Please specify which supplements you are taking:
- Format: Text Box
- **Conditions: If #15 = Yes, DISPLAY**

**Q16.0** Do you have any known allergies to any peptides, medications, or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q16.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #16 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

Do you have any know allergies to benzyl alcohol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If # = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to benzyl alcohol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q17.0** Have you had any adverse reactions to peptides?
- Format: Radio Button
- Answers: Yes
No

**Q17.1** Please explain:
- Format: Text Box
- **Conditions: If #17 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q18.0** Do you have any other allergies that your provider should be aware of?
- Format: Radio Button
- Answers: Yes 
No

**Q18.1** Please explain:
- Format: Text Box
- **Conditions: If #18 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q19.0** Do you have any current infections, skin conditions, or rashes at potential injection sites?
- Format: Radio Button
- Answers: Yes
No

**Q20.0** Have you ever been diagnosed with any chronic medical conditions? (e.g., diabetes, hypertension, cardiovascular disease, autoimmune disorders)
- Format: Radio Button
- Answers: Yes 
No

**Q20.1** Please state all current diagnosed medical conditions:
- Format: Text Box
- **Conditions: If #20 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q21.0** Do you have any chronic respiratory disorders, such as asthma or chronic obstructive pulmonary disease (COPD)?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a history of asthma or significant respiratory issues. We recommend speaking with your primary care specialist to discuss alternative therapies and options.

**Q22.0** Have you ever been diagnosed with cancer or tumors?
- Format: Radio Button
- Answers: Yes 
No

**Q22.1** Please specify the type and your treatment history:
- Format: Text Box
- **Conditions: If #22 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q22.2** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

**Q23.0** Have you experienced any recent cardiovascular events, such as low blood pressure, fainting episodes, a heart attack, or a stroke?
- Format: Radio Button
- Answers: Yes 
No

**Q24.0** Do you have any history of gastrointestinal disorders, such as crohn's disease, irritable bowel syndrome (IBS), or ulcerative colitis?
- Format: Radio Button
- Answers: Yes 
No

**Q25.0** Please list any other information that you would like to share with our provider:
- Format: Text Box


## Please read the following about PT-141 (Bremelanotide)
About PT-141 (Bremelanotide):
PT-141 is a melanocortin receptor agonist that can increase sexual desire and arousal. It is FDA-approved for hypoactive sexual desire disorder in women and is used off-label for men with low libido.
How to use:
Use no more than 8 doses per month.
Inject 30-60 minutes before sexual activity.
Common side effects include nausea, flushing, and headache.
Avoid use with uncontrolled high blood pressure, heart disease, or pregnancy.

**Q26.0** Please read the following about PT-141 (Bremelanotide)
PT-141 is a melanocortin receptor agonist that can increase sexual desire and arousal. It is FDA-approved for hypoactive sexual desire disorder in women and is used off-label for men with low libido.

How to use:
Use no more than 8 doses per month.
Inject 30-60 minutes before sexual activity.
Common side effects include nausea, flushing, and headache.
Avoid use with uncontrolled high blood pressure, heart disease, or pregnancy.

By proceeding with this consultation and any treatments or services through EllieMD, its partnered pharmacies, and affiliated doctor networks, you confirm that the medical history information you have provided is truthful, accurate, and complete. This telehealth service provides recommendations based solely on the details you share, and any misrepresentation or omission of health conditions may affect your treatment outcomes.

You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. These medications have not undergone FDA review for safety or efficacy. It is your responsibility to consult with your primary care provider to ensure that these treatments are appropriate given your overall health and medical history.

You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when necessary. If you experience any side effects or medical concerns, you should contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or go to the nearest emergency room.

You understand that this treatment is elective and does not replace routine healthcare visits, in-person evaluations, or emergency care. By proceeding, you expressly agree to release, indemnify, and hold harmless EllieMD, its affiliates, providers, and partner pharmacies from any claims, liabilities, or damages of any kind arising from or related to your participation in these treatments.

By entering your name and date below, you acknowledge that you have read, understood, and accepted these terms and conditions prior to purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q27.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

