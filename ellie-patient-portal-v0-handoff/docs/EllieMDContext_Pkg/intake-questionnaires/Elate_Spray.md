# Elate Spray

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

**Q4.0** What is the primary reason for seeking Tadalafil/Oxytocin/PT-141 Nasal Spray therapy?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Low Libido or Reduced Sexual Desire
 ☐ Sexual Dysfunction (Erectile Dysfunction or Female Sexual Dysfunction)
 ☐ Enhancing Sexual Enjoyment and Satisfaction
 ☐ Hormonal Changes Affecting Libido 
 ☐ Stress, Anxiety, and Psychological Factors 
 ☐ Enhancing Confidence in Sexual Performance
 ☐ Mood o

**Q4.1** Please explain:
- **Conditions: If #4 = Other, DISPLAY**

**Q5.0** Do you have any known allergies to PT-141 (Bremelanotide), tadalafil (Cialis), oxytocin or any of its components?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have any known allergies to PT-141 (Bremelanotide), tadalafil (Cialis), oxytocin or any of its components. We recommend speaking with your primary care specialist to discuss alternative therapies and options.

**Q10.0** How long have you been experiencing symptoms of low libido or sexual dysfunction?
- Format: Radio Button
- Answers: Less than 6 months 
6 months to 1 year 
Greater than 1 year 

**Q11.0** Have your symptoms worsened over time?
- Format: Radio Button
- Answers: Yes 
No

**Q6.0** Have you tried other treatments for sexual dysfunction before? (e.g., hormone replacement therapy, PDE5 inhibitors like Viagra or Cialis)
- Format: Radio Button
- Answers: Yes 
No

**Q6.1** Please explain:
- Format: Text Box
- **Conditions: If #6 = Yes, DISPLAY**

**Q13.0** Do you have any current nasal infections, sinusitis, or nasal congestion?
- Format: Radio Button
- Answers: Yes 
No

**Q7.0** Have you discussed Tadalafil/Oxytocin/PT-141 Nasal Spray treatment options with your primary care doctor?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes or No, Show Pop Up Text**
- Popup: We encourage you to discuss Tadalafil/Oxytocin/PT-141 Nasal Spray treatment with your primary care provider, as they have a more complete understanding of your health history. EllieMD provides this service based on the information you share and does not replace in-person medical care or long-term he

**Q8.0** Are you currently taking any of the following medications?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Beta-blockers (e.g., metoprolol, atenolol, propanolol)
 ☐ Nitrate medications (e.g., nitroglycerin, isosorbide mononitrate)
 ☐ Guanylate cyclase medications (e.g., riociguat, linzess)
 ☐ Naltrexone
 ☐ Diuretics (e.g., furosemide, hydrochlorothiazide, spironolactone)
 ☐ Clonidine
 ☐ Other PDE5 inh
- **Conditions: If #8 = "Beta-blockers" "naltrexone" "nitrate medications" "guanylate cyclase medications", DISQUALIFIED
If red, send as "critial".
If orange, send as "important".
**
- Popup: Unfortunately, due to your current treatment regimen, we are unable to proceed with prescribing this medication. Your safety is our utmost priority. We recommend speaking with your primary care provider to explore alternative therapies and options.

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

**Q11.0** Do you have any of the following medical conditions?
- Answers:  ☐ Heart attack (myocardial infarction) within the past 90 days
 ☐ Stroke or transient ischemic attack (TIA) within the past 6 months
 ☐ Coronary artery disease or other cardiovascular disease
 ☐ Chest pain (angina)
 ☐ Heart failure
 ☐ Irregular heartbeat or heart rhythm disorders (e.g., atrial fibr
- **Conditions: If #11 = Red answers, DISQUALIFIED**
- Popup: Unfortunately, due to your medical conditions we cannot proceed with prescribing this medication. Your safety is our utmost priority. We recommend speaking with your primary care specialist to discuss alternative therapies and options.

**Q12.0** Do you have any known allergies to any peptides, medications, or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q12.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #12 = Yes, DISPLAY**
- Notes: Patient Profile 
Allergies

**Q13.0** Do you have any known allergies to benzyl alcohol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #13 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to benzyl alcohol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q18.0** Have you had any adverse reactions to peptides?
- Format: Radio Button
- Answers: Yes
No

**Q18.1** Please explain:
- Format: Text Box
- **Conditions: If #18 = Yes, DISPLAY**
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

**Q20.0** Have you ever been diagnosed with any chronic medical conditions? (e.g., diabetes, hypertension, cardiovascular disease, autoimmune disorders)
- Format: Radio Button
- Answers: Yes 
No

**Q20.1** Please state all current diagnosed medical conditions:
- Format: Text Box
- **Conditions: If #20 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q15.0** Have you experienced any changes in your cognitive function, such as memory loss, brain fog, or difficulty concentrating?
- Format: Radio Button
- Answers: Yes 
No

**Q22.0** Have you experienced any allergic reactions to nasal sprays or medications in the past?
- Format: Radio Button
- Answers: Yes
No

**Q15.1** Please explain:
- Format: Text Box

**Q23.0** Do you have a history of cardiovascular diseases, such as heart disease, hypertension, arrhythmias?
- Format: Radio Button
- Answers: Yes 
No

**Q24.0** Have you experienced any recent cardiovascular events, such as a heart attack or stroke?
- Format: Radio Button
- Answers: Yes 
No

**Q25.0** Do you have any chronic respiratory disorders, such as asthma or chronic obstructive pulmonary disease (COPD)?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a history of asthma or significant respiratory issues. We recommend speaking with your primary care specialist to discuss alternative therapies and options.

**Q16.0** Have you ever been diagnosed with cancer or tumors?
- Format: Radio Button
- Answers: Yes 
No

**Q16.1** Please specify the type and your treatment history:
- Format: Text Box
- **Conditions: If #16 = Yes, DISPLAY**
- Notes: Patient Profile 
Conditions

**Q16.2** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #16.2 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

**Q17.0** Do you have any history of gastrointestinal disorders, such as Crohn's disease, irritable bowel syndrome (IBS), or ulcerative colitis?
- Format: Radio Button
- Answers: Yes 
No

**Q18.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q29.0** By proceeding with this consultation and any treatments or services through EllieMD and partnered pharmacies and doctor networks, you confirm that the medical history information you have provided is truthful and complete. This telehealth service provides recommendations based on the details you share, and any misrepresentation or omission of health conditions may impact your treatment outcomes. 
You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. Compounded medications have not undergone FDA review for safety or efficacy, and it is important to consult with your primary care provider to ensure that these treatments align with your overall health and medical history. 
You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when needed. If you experience any side effects or medical concerns, it is essential to contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or visit the nearest emergency room. 
You understand that this treatment is elective and does not replace routine healthcare visits, in-person medical evaluations, or emergency care. Furthermore, by proceeding, you agree to release, indemnify, and hold harmless EllieMD and its affiliates from any claims, liabilities, or damages related to your participation in these treatments. 
By entering your name and date below you aknowledge you have read al the terms and conditions and accept prior to your purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q30.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

