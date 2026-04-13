# MOTS-c Injection

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

**Q4.0** What is the primary reason for considering MOTS-c?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Metabolic Optimization
 ☐ Body composition support
 ☐ Physical performance support
 ☐ Inflammation support
 ☐ Longevity & healthy aging
 ☐ Cardiovascular health
 ☐ Cognitive support
 ☐ Energy & mitochondrial support

**Q5.0** Are you currently taking any of the following?
- Format: Check Box
(Multi Select)
- Answers: ☐ Antidiabetic drugs (e.g. metformin)
☐ Insulin-sensitizing drugs (e.g. thiazolidinediones, aspirin, GLP-1s)
☐ None of the above


**Q6.0** Are you currently taking any prescription medications or therapies, over-the-counter drugs, or supplements?
- Format: Radio Button
- Answers: Yes
No

**Q6.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #6 = Yes, DISPLAY**

**Q7.0** Have you ever experienced a hypersensitivity or allergic reaction to peptide-based therapies?
- Format: Check Box 
(Single Select) 
- Answers: Yes
No
Not sure

**Q7.1** Please explain:
- Format: Text Box
- **Conditions: If #7 = Yes, DISPLAY**

**Q8.0** Do you have any know allergies to mannitol?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #8 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you have a known allergy to mannitol. We recommend consulting your primary care provider to explore alternative therapies and options.

**Q9.0** Have you been diagnosed with or are currently being treated for any of the following?
(Select all that apply)
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Active malignancy or cancer currently under treatment or surveillance
 ☐ Severe or uncontrolled liver or kidney disease
 ☐ History of heart disease (e.g. heart failure, recent heart attack, unstable angina, arrythmias)
 ☐ Diagnosed mitochondrial myopathies
 ☐ Autoimmune disease
 ☐ Folate metaboli
- **Conditions: If RED ANSWERS, DISQUALIFIED**
- Popup: We’re sorry, we’re unable to continue as the condition you selected is considered unsafe for MOTS-c therapy. Your safety is our priority. We recommend following up with your primary-care provider or specialist to discuss safe and appropriate alternatives for your health needs.

**Q9.1** Please describe your heart condition, year diagnosed, current treatment, and whether it is stable and monitored by a cardiologist.
- **Conditions: If #9 = History of heart disease..., DISPLAY**

**Q10.0** Have you ever been diagnosed with cancer or tumors (inlcuding past cancers that are no longer under treatment or surveillance)?
- Format: Radio Button
- Answers: Yes 
No

**Q10.1** Are you currently undergoing chemotherapy or radiation therapy treatment for your cancer?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #10 = Yes, DISPLAY 10.1
If #10.1 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing this medication if you are currently undergoing cancer therapy treatment. We recommend discussing your treatment options with your healthcare provider to ensure the best care for your specific needs.

**Q10.2** Was the diagnosis limited to fully excised basal cell carcinoma or squamous cell carcinoma of the skin with no recurrence or ongoing treatment?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If #10 = Yes, DISPLAY 10.2**

**Q10.3** Please specify the type of cancer, year of diagnosis, treatment received, and current status (active, remission, cured).
- Format: Text Box
- **Conditions: If #10 = Yes, DISPLAY 10.3**

**Q10.4** Approximately how long ago did you complete cancer treatment?
- Format: Radio Button
- Answers: Less than 1 year ago
1-3 years ago
More than 3 years ago
- **Conditions: If #10.2 = No, DISPLAY 10.4
If #10.4 = Less than 1 year ago, DISQUALIFIED
If #10.4 = 1-3 years ago, DISPLAY**
- Popup: DISQUALIFYING MESSAGE
Unfortunately, we cannot proceed with prescribing this medication if you have had active cancer within the past 12 months. Please discuss your treatment options with your healthcare provider.

DISPLAY MESSAGE FOR 1-3 YRS AGO
Before proceeding with treatment, written clearance f

**Q11.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q12.0** "By proceeding with this consultation and any treatments or services through EllieMD, its partnered pharmacies, and affiliated doctor networks, you confirm that the medical history information you have provided is truthful, accurate, and complete. This telehealth service provides recommendations based solely on the details you share, and any misrepresentation or omission of health conditions may affect your treatment outcomes.

You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. These medications have not undergone FDA review for safety or efficacy. It is your responsibility to consult with your primary care provider to ensure that these treatments are appropriate given your overall health and medical history.

You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when necessary. If you experience any side effects or medical concerns, you should contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or go to the nearest emergency room.

You understand that this treatment is elective and does not replace routine healthcare visits, in-person evaluations, or emergency care. By proceeding, you expressly agree to release, indemnify, and hold harmless EllieMD, its affiliates, providers, and partner pharmacies from any claims, liabilities, or damages of any kind arising from or related to your participation in these treatments.

By entering your name and date below, you acknowledge that you have read, understood, and accepted these terms and conditions prior to purchase."
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q13.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

