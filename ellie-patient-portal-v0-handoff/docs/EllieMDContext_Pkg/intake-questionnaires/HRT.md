# HRT

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

**Q3.0** Are you currently pregnant, planning to become pregnant, or breastfeeding? (If male, please select N/A)*
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication if you are currently pregnant, planning to become pregnant, or breastfeeding, as as this therapy is generally not appropriate in these circumstances. Your health and the well-being of your baby are our top priorities, and we recommend consulting you
- Notes: Patient Profile
Pregnant

**Q4.0** When was the last time you had an in person medical evaluation?
- Format: Check Box 
(Single Select) 
- Answers:  ☐ Less than a year ago
 ☐ 1 to 2 years
 ☐ More than 2 years ago

**Q5.0** What are the primary reasons for considering Hormone Replacement Therapy?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Energy and daily functioning
☐ Mood and emotional well-being
☐ Sleep quality
☐ Sexual health and intimacy
☐ Cognitive function and focus
☐ Healthy weight or body composition
☐ Long-term health and aging
☐ General wellness optimization

**Q6.0** When was your last period?
- Format: Check Box 
(Single Select) 
- Answers: Less than a year
1 to 5 years ago
6 to 9 years ago
More than 10 years ago
- **Conditions: If #6 = More than 10 years ago, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication based on how long it has been since your last menstrual period. Your health and well-being are our top priority, and we recommend consulting your primary care healthcare provider to explore safe alternatives.

**Q6.1** What is the month and year of your last period?
- Format: Text Box
- **Conditions: If #6 = Less than a year ago, DISPLAY #6.1**

**Q6.2** In the last year, have you experienced any of the following?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Periods lasting longer than 7 days, including spotting before or after onset of bleeding
☐ Spotting between periods
☐ Bleeding after intercourse
☐ Heavy bleeding, defined as changing over 1 pad/tampon over 2 hours or changing a super tampon or overnight pad in under 3 hours
☐ None of the above
- **Conditions: If #6 = Less than a year ago, DISPLAY #6.2

If #6.2 = red answers, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing hormone replacement therapy based on your response due to safety considerations. Your health and well-being are our top priority, and we recommend consulting your primary care provider or specialist.

**Q6.3** Please explain:
- Format: Text Box
- **Conditions: If #6.2 = Heavy bleeding..., DISPLAY #6.3**

**Q6.4** Please describe your periods.
- Answers: ☐ Monthly and predictable
☐ About once per month but unpredictable
☐ Skipping periods for 1-2 months, but not more than 3 months at a time
☐ I no longer have a period
☐ Bleeding outside of my regular period (any irregular spotting), prolonged periods lasting longer than 7 days or heavier periods tha
- **Conditions: If #6 = Less than a year ago, DISPLAY #6.4

If #6.4 = red answers, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing hormone replacement therapy based on your response due to safety considerations. Your health and well-being are our top priority, and we recommend consulting your primary care provider or specialist.

**Q6.5** Prior to your last period, did you have irregular or abnormal bleeding?
- Format: Check Box 
(Single Select) 
- Answers: Yes
No
I'm not sure
- **Conditions: If #6 = 1 to 5 years ago, DISPLAY #6.5**

**Q6.6** Describe the irregular bleeding before your last period (any prior evaluation, tests, or diagnosis).
- Format: Text Box
- **Conditions: If #6.5 = yellow answers, DISPLAY #6.6**

**Q6.7** Have you had any bleeding or spotting since your last period?
- Format: Check Box 
(Single Select) 
- Answers: Yes
No
I'm not sure
- **Conditions: If #6 = 1 to 5 years ago, DISPLAY #6.7**

**Q6.8** Describe any bleeding or spotting since your last period (any prior evaluation, tests, or diagnosis).
- Format: Text Box
- **Conditions: If #6.7 = yellow answers, DISPLAY #6.8**

**Q7.0** Are you experiencing any of the following symptoms?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Weight gain
☐ Hot flashes
☐ Fatigue or lack of energy
☐ Night sweats
☐ Mood changes such as new onset mood swings, irritability, depression or anxiety
☐ Low motivation
☐ Urinary concerns
☐ Vaginal dryness or discomfort
☐ Poor sleep
☐ Decreased libido
☐ Brain fog
☐ Joint pain or muscle discomfort n
- **Conditions: If #7 = None, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing hormone replacement therapy based on your response, as treatment is intended for individuals experiencing menopause-related symptoms. Your health and well-being are our top priority, and we recommend consulting your primary care healthcare provider t

**Q7.1** Please specify:
- Format: Text Box
- **Conditions: If #7.1 = Other, DISPLAY #7.1**

**Q8.0** How long have you been experiencing menopause symptoms?
- Format: Check Box 
(Single Select) 
- Answers: Less than a year
1 to 4 years
5 to 9 years
More than 10 years
- **Conditions: If #8 = red answers, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing hormone replacement therapy based on the duration of your symptoms. Your health and well-being are our top priority, and we recommend consulting your primary care healthcare provider to explore appropriate options.

**Q9.0** How much do your symptoms affect your day-to-day life?
- Format: Check Box 
(Single Select) 
- Answers: My symptoms are severe and limit what I can do or substantially effects my wellbeing
My symptoms are moderate and I would like support.
My symptoms are mild and I don't need treatment.
- **Conditions: If #9 = My symptoms are mild and I don't need treatment, DISQUALIFIED**
- Popup: Since you indicated that your symptoms are mild and you do not need treatment, we cannot proceed with prescribing hormone replacement therapy. Your health and well-being are our top priority. If your symptoms change or you choose to explore treatment in the future, we’re here to support you.

**Q10.0** Have you previously been on any of the following treatment for menopause symptoms?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Implanted hormones (e.g. pellets)
☐ Nonhormonal menopause treatment
☐ Non-oral estrogen (e.g. patch, gel, body cream, spray, or Femring)
☐ Oral estrogen or progesterone pills
☐ Topical estrogen for local systems (e.g. vaginal creams, suppositories, or Estring)
☐ None

**Q10.1** When was your current pellet placed?
- Format: Radio Button
- Answers: Less than 4 months ago
More than 4 months ago
- **Conditions: If #10 = Implanted hormones (e.g. pellets), DISPLAY #10.1**

**Q11.0** Do you currently use any hormonal birth control methods to prevent pregnancy?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Birth control pill, patch, or ring
☐ Progestin-only pill (mini pill)
☐ Depo shot
☐ Mirena IUD
☐ Other Progestin-containing IUD or Implant (Nexplanon, Kyleena, Liletta)
☐ Other 
☐ No
- **Conditions: If #11 = red answers, DISQUALIFIED**
- Popup: Unfortunately, we cannot prescribe this medication based on your current therapies. Your health and well-being are our top priority, and we recommend consulting your primary care healthcare provider to explore safe alternatives.

**Q11.1** When was your Mirena placed?
- Format: Text Box
- **Conditions: If #11 = Mirena IUD, DISPLAY #11.1**

**Q11.2** Please specify
- Format: Text Box
- **Conditions: If #11 = Other, DISPLAY #11.2**

**Q12.0** Are you currently on any of the following treatment for menopause symptoms?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Implanted hormones (e.g. pellets)
☐ Nonhormonal menopause treatment
☐ Non-oral estrogen (e.g. patch, gel, body cream, spray, or Femring)
☐ Oral estrogen or progesterone pills
☐ Topical estrogen for local systems (e.g. vaginal creams, suppositories, or Estring)
☐ None

**Q12.1** When was your current pellet placed?
- Format: Text Box
- **Conditions: If #12 = Implanted hormones (e.g. pellets), DISPLAY #12.1**

**Q12.2** Once you receive your HRT medication(s), you will need to stop taking the hormonal treatments you’re currently on for menopause symptoms.
- Format: Radio Button
- Answers: I AGREE that I will stop taking systemic hormones prescribed once I start my new hormone treatment
I WILL NOT be able to stop my current hormonal treatments for menopause
- **Conditions: If #11 = Birth control pill, patch, or ring OR Progestin-only pill (mini pill) OR Depo shot OR Other Progestin-containing IUD or implant 

OR

If #12 = Implanted hormones (e.g. pellets) OR Nonhormonal menopause treatment OR Oral estrogen or progesterone pills OR Topical estrogen for local systems, D**
- Popup: Nonhormonal menopause treatments warrant this question?

Since you indicated that you are unable to stop your current hormonal treatments, we cannot proceed with prescribing hormone replacement therapy. Your health and well-being are our top priority, and we recommend consulting your primary care he

**Q13.0** Are you currently taking any other prescription medications or therapies, over-the-counter drugs, or supplements?
- Format: Radio Button
- Answers: Yes
No

**Q13.1** Please specify which prescription medications/therapies, or over-the-counter drugs you are taking, the dosage, and frequency:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #13 = Yes, DISPLAY #13.1**

**Q14.0** Do you have any known allergies to any medications or supplements that your medical provider should know about?
- Format: Radio Button
- Answers: Yes
No

**Q14.1** Please specify which medications or supplements you are allergic to:
- Format: Text Box
- **Conditions: If #14 = Yes, DISPLAY #14.1**

**Q15.0** Have you been told by your doctor that you have high or abnormal blood pressure?
- Format: Radio Button
- Answers: Yes
No

**Q15.1** Please provide a recent blood pressure reading.
- Format: Text Box
- **Conditions: If #15 = Yes, DISPLAY #15.1**

**Q15.2** Are you being treated for abnormal blood pressure?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #15 = Yes, DISPLAY #15.2**

**Q16.0** Have you ever been diagnosed with or are currently being treated for any of the following? (Select all that apply)
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Breast or endometrial cancer or estrogen-dependent tumor
☐ Ovarian cancer
☐ Cardiovascular disease
☐ Heart attack or stroke
☐ High blood pressure (over 160/110)
☐ DVT, PE, or blood clots
☐ Endometriosis or uterine fibroids
☐ Epilepsy or seizure disorder
☐ Gallbladder disease 
☐ Liver impairment
☐ 
- **Conditions: If #16 = red answers, DISQUALIFIED**
- Popup: Based on your intake responses, hormone replacement therapy may not be appropriate at this time due to clinical safety considerations. Your safety is our top priority, and we recommend following up with your primary care provider or specialist to discuss safe and appropriate alternatives for your he

**Q16.1** How severe is your liver impairment?
- Format: Check Box
(Single Select)
- Answers: ☐ My liver enzyme tests are slightly high, and my doctor has told me to change my lifestyle
☐ I have significant lab abnormalities and have needed imaging
☐ I am taking medications or have had surgery for liver disease
☐ Other
- **Conditions: If #16 = Liver Impairment, DISPLAY #16.1

If #16.1 = red answers, DISQUALIFIED**
- Popup: Unfortunately, based on your response regarding liver impairment, we cannot prescribe this medication. Your health and well-being are our top priority, and we recommend consulting your primary care provider to explore safe alternatives.

**Q16.2** Please specify:
- Format: Text Box
- **Conditions: If #16.1 = Other, DISPLAY #16.2**

**Q16.3** Describe your ovarian cancer history, including type and whether you are currently in treatment or in remission.
- Format: Text Box
- **Conditions: If #16 = Ovarian cancer, DISPLAY #16.3**

**Q16.4** Describe your cardiovascular disease history.
- Format: Text Box
- **Conditions: If #16 = Cardiovascular disease, DISPLAY #16.4**

**Q17.0** Has anyone in your family had DVT or PE (e.g., blood clots)?
- Format: Check Box
(Single Select)
- Answers: Yes
No
Not sure

**Q18.0** Have you had your uterus removed?
- Format: Check Box 
(Single Select) 
- Answers: Yes
No
I'm not sure

**Q18.1** When did you have your uterus removed?
- Format: Text Box
- **Conditions: If #18 = Yes, DISPLAY #18.1**

**Q18.2** Please explain:
- Format: Text Box
- **Conditions: If #18 = Not sure, DISPLAY #18.2**

**Q19.0** Have you undergone any of the following gynecological surgeries?
- Format: Check Box
(Multi Select)
- Answers: ☐ Both ovaries removed
☐ Endometrial ablation
☐ LEEP procedure
☐ Myomectomy (fibroid removal)
☐ One ovary removed
☐ Ovarian cystectomy
☐ Tubes removed
☐ Tubes tied
☐ Other 
☐ None

**Q19.1** Please specify when you had your ovary/ovaries removed and the indication for removal.
- Format: Text Box
- **Conditions: If #19 = Both ovaries removed, DISPLAY #19.1**

**Q19.2** Please specify:
- Format: Text Box
- **Conditions: If #19 = Other, DISPLAY #19.2**

**Q20.0** Do you have a peanut allergy?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #20 = Yes, DISQUALIFIED**
- Popup: Unfortunately, we cannot proceed with prescribing hormone replacement therapy based on your reported allergy. Your health and well-being are our top priority, and we recommend consulting your primary care healthcare provider to discuss appropriate options.

**Q21.0** Have you had a mammogram in the last 2 years?
- Format: Check Box
(Single Select)
- Answers: Yes, my results were normal
Yes, my results were abnormal
No

**Q21.1** Describe your mammogram results (when it occurred, diagnosis, and any follow-up testing such as biopsy).
- Format: Text Box
- **Conditions: If #21 = Yes, my results were abnormal, DISPLAY #21.1**

**Q22.0** Have you had cervical cancer screening (like a Pap smear or HPV testing) results in the last 5 years?
- Format: Check Box
(Single Select)
- Answers: Yes, my results were normal
Yes, my results were abnormal
No

**Q22.1** Describe your cervical cancer results (when it occurred, diagnosis, and any follow-up testing such as biopsy).
- Format: Text Box
- **Conditions: If #22 = Yes, my results were abnormal, DISPLAY #22.1**

**Q23.0** Do you smoke or use nicotine products?
- Format: Check Box
(Single Select)
- Answers: Yes
No

**Q24.0** How often do you consume alcohol?
- Format: Check Box
(Single Select)
- Answers: ☐ Never
☐ Rarely (less than 1 drink/week)
☐ Occasionally (up to 7 drinks/week)
☐ Frequently (more than 7 drinks/week)

**Q25.0** Are you sexually active?
- Format: Check Box
(Single Select)
- Answers: Yes
No

**Q26.0** Do you have any concerns about the side effects of hormone therapy?
- Format: Check Box
(Single Select)
- Answers: Yes
No

**Q26.1** Please explain:
- Format: Text Box
- **Conditions: If #26 = Yes, DISPLAY #26.1**

**Q27.0** Please list any other information that you would like to share with our provider:
- Format: Text Box

**Q28.0** Do you understand all of the questions in this intake?
- Format: Radio Button
- Answers: Yes
No
- **Conditions: If #28 = No, DISQUALIFIED**
- Popup: For your safety, we’re unable to proceed at this time unless all intake questions are clearly understood. Please review the information and return once you’re ready, or contact our team for support.

**Q29.0** Please read the following safety information and let us know you consent to treatment. You may be prescribed HRT medication containing estradiol and progesterone, if necessary.

You should not use HRT if you have any of the following: 
Undiagnosed abnormal genital bleeding
DVT or PE (current or history of)
Active or history of arterial thromboembolic disease (e.g., stroke, myocardial infarction)
High risk of cardiovascular disease
Breast cancer (current or history of)
Estrogen-dependent tumor (known or suspected)
Active hepatic impairment or disease
Known protein C, protein S, antithrombin deficiency, Factor V Leiden, or other known thrombophilic disorder
Pregnancy
HRT is not contraception (it will not prevent pregnancy).  If you require contraception please inform your doctor.

Medication uses in menopausal women
Estrogen alleviates hot flashes by directly influencing the hypothalamus, which is the  brain’s temperature regulation center.
Progesterone protects against uterine cancer and precancer in people with an intact uterus taking estrogen.
Estrogen is also prescribed to prevent osteoporosis in some women.

Benefits
Estrogen alleviates moderate to severe symptoms associated with menopause, most notably vasomotor symptoms (e.g., hot flashes). Progesterone prevents the development of endometrial cancer in people using estrogen for the relief of menopausal symptoms.
Some studies suggest that estrogen and progesterone have a cardioprotective effect when initiated during a specific timeframe.
Estrogen is also associated with improvements in bone density.

Risks
Endometrial cancer, which can be mitigated by adding progesterone.
Heart attack, stroke, or venous thromboembolism.
Increased breast density in some women, which may make it more challenging to detect abnormalities on mammograms, require additional imaging, and can slightly increase the risk of breast cancer.
Compounded hormones are not evaluated by the FDA for safety or efficacy. People may avoid compounded products to avoid this risk.
Increased risk of dementia in women over 60.

Common side effects
All drugs may cause side effects. However, many people have no side effects or only have minor side effects. Reach out to your doctor through in-app messaging or get medical help if any of these side effects or any other side effects bother you or do not go away:
Breast tenderness
Headache
Mood changes
Bloating
Irregular bleeding
Nausea

Rare adverse events
Severe allergic reaction (anaphylaxis)
Heart attack, stroke, or venous thromboembolism
Breast cancer or endometrial cancer
Allergic reactions (e.g., rash, hives, swelling, difficulty breathing)
Blood clots (deep vein thrombosis or pulmonary embolism)
Stroke
Gallbladder disease
Severe headaches 
Liver abnormalities
Vision changes (e.g., retinal vascular thrombosis)
Severe mood changes or depression
Unusual breast changes (e.g., lumps, severe tenderness)
Ovarian cancer
Endometrial hyperplasia or cancer
Skin reactions (e.g., erythema multiforme, urticaria)

Alternatives to HRT for menopause therapy
No treatment
Nonhormonal therapy including medications (e.g., SSRI, gabapentin, NK3 antagonists), supplements, behavioral interventions (e.g., CBT) and lifestyle changes
Alternative FDA-approved treatments such as vaginal, oral, or other transdermal hormone preparations like gels or sprays
Other compounded medications

Below, please acknowledge that you:
Reviewed the risks and benefits above
Consent to receiving menopause hormone therapy
- Format: Radio Button
- Answers: YES, I CONSENT to receiving HRT. I have reviewed the risks and benefits above.
NO, I DO NOT CONSENT to receiving HRT.
- **Conditions: If #29 = NO, I DO NOT CONSENT to receiving HRT, DISQUALIFIED**
- Popup: Since you indicated that you do not consent to treatment, we cannot proceed with prescribing hormone replacement therapy. Your health and well-being are our top priority. Please review the information and return once you’re ready, or contact our team for support.

**Q30.0** "By proceeding with this consultation and any treatments or services through EllieMD, its partnered pharmacies, and affiliated doctor networks, you confirm that the medical history information you have provided is truthful, accurate, and complete. This telehealth service provides recommendations based solely on the details you share, and any misrepresentation or omission of health conditions may affect your treatment outcomes.

You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. These medications have not undergone FDA review for safety or efficacy. It is your responsibility to consult with your primary care provider to ensure that these treatments are appropriate given your overall health and medical history.

You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when necessary. If you experience any side effects or medical concerns, you should contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or go to the nearest emergency room.

You understand that this treatment is elective and does not replace routine healthcare visits, in-person evaluations, or emergency care. By proceeding, you expressly agree to release, indemnify, and hold harmless EllieMD, its affiliates, providers, and partner pharmacies from any claims, liabilities, or damages of any kind arising from or related to your participation in these treatments.

By entering your name and date below, you acknowledge that you have read, understood, and accepted these terms and conditions prior to purchase."
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q31.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**

