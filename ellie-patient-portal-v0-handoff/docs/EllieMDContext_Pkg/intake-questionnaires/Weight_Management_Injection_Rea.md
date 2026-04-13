# Weight Management Injection Rea

Source: 3.0_EllieMD_Questionnaire_Source_of_Truth.xlsx

Important Notice for Louisiana and Mississippi Patients

Under Louisiana Administrative Code 46:XLV.7503 and applicable Mississippi regulations, physicians are prohibited from prescribing GLP-1 medications via telemedicine for the treatment of obesity.

By continuing, I confirm that I am seeking GLP-1 therapy for purposes other than obesity treatment, including but not limited to metabolic health, longevity, or anti-inflammatory support. I understand that my physician will evaluate my eligibility based on these stated purposes.
- Format: Check Box
(Single select)
- Answers: I confirm the above statement is true and accurate.
- **Conditions: Show only to patients in MS or LA.**

**Q1.0** Have you reached your goal weight, or would you like to continue active treatment for weight loss?
- Format: Radio Button
- Answers: I’ve reached my goal weight and would like to transition to maintenance (microdose).

I’d like to continue active treatment for weight loss.
- **Conditions: If "I’ve reached my goal weight and would like to transition to maintenance (microdose).”

DISQUALIFIED**
- Popup: Awesome progress! Since you’ve reached your goal weight and are ready to transition into microdosing for longevity and maintenance, you can continue below to select the Microdose option that best fits your goals moving forward.
[Go Back]  [Explore Microdose Options]


**Q2.0** Since your last intake, have there been any changes related to pregnancy?
(Examples: Are you currently pregnant, planning to become pregnant, or breastfeeding? If male, please select “N/A.”)
- Format: Radio Button
- Answers: Yes 
No
N/A
- **Conditions: If Yes, DISQUALIFIED**
- Popup: We’re sorry. If you are currently pregnant, or breastfeeding you should stop using this medication right away. If you are planning to become pregnant, all prescription weight loss medications must be discontinued at least 3–6 months before conception.

**Q3.0** What is your height?
- Format: Text Box (2 boxes) 
- Answers: Feet
Inches
- Notes: TECH: Should we get rid of this question? Can it be prefilled? 

**Q4.0** Please enter your most recent weight:
(This helps your provider track your progress and ensure your dosing remains appropriate.)
- Format: Text Box
- Answers: Lbs

**Q5.0** Your previous goal weight was: [previous goal weight] Would you like to update it?
- Format: Radio Button
- Answers: Yes 
No
- Notes: TECH: Can we prefill goal weight? 

**Q5.2** Based on the height and weight you provided, your current Body Mass Index (BMI) is: [CALCULATED BMI GOES HERE]
- **Conditions: If BMI => 22, Continue

If BMI < 22, DISQUALIFIED**
- Popup: We’re sorry, based on your height and weight, your Body Mass Index (BMI) is below the minimum threshold for this therapy. GLP-1 medications are only prescribed for patients with a BMI of 22 or higher, as this guideline helps ensure safe dosing and proper metabolic response.

Since you’ve achieved a 

Is preserving or building muscle mass during weight loss important to you?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: Only show if glycine is in formula**

Have you ever had issues with fatigue or low energy?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: Only show if B12 is in formula**

**Q6.0** Do you have any new changes or additions to your medical history?
(Check all that apply)
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ New Medications, Therapies, or Over-the-Counter Drugs
 ☐ Allergies
 ☐ ER Visits or Hospitalizations
 ☐ Surgeries
 ☐ Other
 ☐ None of the Above

**Q6.1** Please list the new medications, therapies, or over-the-counter drugs you are currently taking:
- Format: Multiple Medication Selector
[3 Text Boxes per Selection]
- Answers: Medication Name
Dosage
Frequency
- **Conditions: If #6 ="New Medications, Therapies, or Over-the-Counter Drugs", DISPLAY**

**Q6.2** Please list any new or updated allergies since your last intake:
- Format: Text Box
- **Conditions: If #6 = "Allergies", DISPLAY**

**Q6.3** Please describe your visit or procedure:
(Include the approximate date, reason, and whether you’re still under follow-up care.)
- Format: Text Box
- **Conditions: If #6 ="ER Visits or Hospitalizations, Surgeries", DISPLAY**

**Q6.4** Please explain:
- Format: Text Box
- **Conditions: If #6 ="Other", DISPLAY**

**Q7.0** Have you had any of the following procedures since your last intake?
(Check all that apply)
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Gallbladder Removal
 ☐ Bariatric surgery in the last 6 months (Ex: Gastric Bypass, Gastric Sleeve)
 ☐ Appendix Removal
 ☐ Uterine Surgery, or Hysterectomy
 ☐ Breast Surgery, or Mastectomy
 ☐ Ablation
 ☐ None of the above

**Q7.1** Please provide details about your procedure(s):
(Include the date, type of surgery, and whether you experienced any complications.)
- Format: Text Box
- **Conditions: If #7 = Any options (other than “None of the above”) are selected, DISPLAY**

**Q8.0** Over the past 4 weeks, approximately how many pounds have you lost?
- Format: Radio Button
- Answers: 0-3 Pounds
4-6 Pounds
7-12 Pounds
13-20 Pounds
More than 20 Pounds
I'm gaining weight 

**Q8.1** You’re experiencing significant weight loss.
Please describe anything else you’ve been doing to lose weight.

Approximate daily calories consumed
A summary of what you’ve eaten in the past 72 hours
- Format: Text Box
- Answers: “I’m eating around 1,000 calories per day. Over the last 72 hours I’ve had …”
- **Conditions: If # 8 = "13-20 Pounds" or 
"More than 20 pounds" , DISPLAY**

**Q8.2** It’s common for weight loss to start slowly in early treatment.
What other lifestyle changes have you made?
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Met with a dietitian
☐ Decreased calorie intake
☐ Started an exercise program
☐ Worked on stress management
☐ None of the above
- **Conditions: If #8 = "0-3 Pouds",  "I'm gaining weight", DISPLAY**

**Q9.0** Are you experiencing any food cravings?
- Format: Radio Button
- Answers: Not Really
Sometimes
Quite often

**Q10.0** How would you describe your appetite suppression?
- Format: Radio Button
- Answers: Perfect balance, just right
Somewhat decreased appetite
Too strong, I can barely eat
I’m always hungry

**Q11.0** During your treatment, have you noticed any of the following?
(Select all that apply)
- Format: Check Box 
(Multi Select) 
- Answers: ☐ Fatigue or low energy
☐ Decreased muscle mass or strength
☐ None of the above

**Q12.0** During your treatment have you experienced nausea?
- Format: Radio Button
- Answers: Yes 
No

**Q12.1** Managing Nausea

Eat bland, low-fat foods (crackers, toast, rice).
Eat slowly and avoid lying down after meals.
Stay hydrated with clear drinks.
Avoid greasy or sweet foods.
- Format: Radio Button
- Answers: I have read and understand these tips.
- **Conditions: If #12 = Yes, DISPLAY**

**Q13.0** Would you like guidance on any of the following common side effects?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ Tell me more about NAUSEA 
 ☐ Tell me more about CONSTIPATION
 ☐ Tell me more about INDIGESTION/REFLUX
 ☐ Not at this time

**Q13.1** Nausea is the MOST common side effect of taking a GLP-1 medication. Make sure you're doing all the following:
1. Eat bland, low-fat foods, like crackers, toast, and rice
2. Eat foods that contain water, like soups and gelatin
3. Avoid fried, greasy, or sweet foods
4. Eat more slowly
5. Avoid laying down after you eat
6. Drink clear or ice-cold drinks
- Format: Radio Button
- Answers: I've read and understand the above
- **Conditions: If #13 = Tell me more about NAUSEA, DISPLAY**

**Q13.2** Constipation:
Constipation is the second most common side effect. Don't just try one and give up, Instead add onto the one above. 
1. Prunes
2. Caffeine (within reason)
3. Water water water
4. Glycerine rectal suppositories
5. Over-the-counter medications (ex, Miralax)
- Format: Radio Button
- Answers: I've read and understand the above
- **Conditions: If #13 = Tell me more about CONSTIPATION, DISPLAY**

**Q13.3** Heartburn/"Reflux" can be very common while taking GLP-1 medication. If you do not know what heartburn is, or think something else may be wrong, please go to your PCP or nearest urgent care.
1. Eat smaller meals. Try splitting your 3 daily meals into 4 or more smaller ones.
2. Stop eating when you feel full.
3. Avoid all alcohol and caffeine
4. Do not lay down after eating.
5. Use over-the-counter medication such as famotidine, or aluminum/magnesium hydroxide/simethicone.
- Format: Radio Button
- Answers: I've read and understand the above
- **Conditions: If #13 = Tell me more about INDIGESTION/REFLUX, DISPLAY**

**Q14.0** In addition to the common side effects above, have you experienced any less common or more serious symptoms during your treatment?
- Format: Check Box 
(Multi Select) 
- Answers:  ☐ I am having side effects, but I can handle them
 ☐ Significant vomiting 
 ☐ Abdominal pain 
 ☐ Dizziness 
 ☐ Chest pain
 ☐ Fevers 
 ☐ Swelling in my neck
 ☐ Other
 ☐ NONE of the above

**Q14.1** Please make sure to let your doctor and your PCP know if:
- Your symptoms persist
- Your symptoms worsen
- Your symptoms concern you
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = "I am having side effects, but".., DISPLAY**

**Q14.2** Vomiting while taking GLP-1 medication:
- While occasional vomiting can be normal with taking this medication, please be aware that significant and continued vomiting will lead to electrolyte problems and kidney failure.
- It is possible that you could be having something other than a medication side effect; therefore, we recommend that you go to your nearest urgent care center if you are not able to see your primary care doctor today.
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = Significant vomiting, DISPLAY**

**Q14.3** Abdominal pain while taking a GLP-1 medication:
While mild and intermittent symptoms may be due to constipation or a medication side effect
- It is possible that you could be having a serious medical problem. Often, abdominal pain medical visits require laboratory tests, and possibly an X-ray, ultrasounds, or CT Scan; therefore, we recommend that you go to your nearest urgent care center if you are not able to see your primary care doctor today.
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = Abdominal pain, DISPLAY**

**Q14.4** Dizziness while taking GLP-1 medication:
It is impossible for your BMI MD doctor to diagnose you over telemedicine if you are feeling dizzy.
- It is possible that you could be having a serious medical problem. You will require an in-person exam, vital signs, and possibly laboratory tests, EKG, and radiographic imaging. Therefore, we recommend that you go to your nearest urgent care center if you are not able to see your primary care doctor
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = Dizziness, DISPLAY**

**Q14.5** Chest pain while taking GLP-1 medication:
Chest pain is never 'normal' and should always be discussed with a doctor in person.
- It is possible that you could be having a serious medical problem.
- We recommend that you go to your nearest urgent care center or Emergency Room if you are not able to see your primary care doctor today.
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = Chest pain, DISPLAY**

**Q14.6** Fever while taking GLP-1 medication:
Fevers are not common while taking a GLP-1 medication.
It is possible that you could be having a serious medical problem. Therefore, we recommend that you go to your nearest urgent care center if you are not able to see your primary care doctor today.
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = Fever, DISPLAY**

**Q14.7** Swelling in the neck while taking any GLP-1 medication:
Because of the unknown risk of certain types of thyroid cancers associated with any GLP-1 medication:
1. Stop taking any GLP-1 or GLP-1/GIP medication
2. Contact your local PCP for an in-person examination today
- Format: Radio Button
- Answers: I acknowledge the above
- **Conditions: If #14 = Swelling in the neck, DISPLAY**

**Q14.8** Please tell the doctor all about the symptoms you are experiencing:
Include the following:
- When did it start?
- How severe is it?
- Where in your body are the symptoms?
Have you had this before?
Have you been taking any medication for it?
Have you seen a doctor about this already?
- Format: Text Box
- Answers: Type your answer...
- **Conditions: If #14 = Other, DISPLAY**

**Q15.0** Would you like to continue using a multidose vial that allows you to control the speed and amount of medication you inject for greater dosing flexibility?
- Format: Radio Button
- Answers: Yes, I’d like to keep that flexibility
No, I prefer not to use a multidose vial
- **Conditions: 

If # 15 = No, I prefer not to use a multidose vial, DISQUALIFIED**
- Popup: You’ve selected that you do not wish to continue using a multidose vial for dosing flexibility.

For your safety and dosing accuracy, we’re only able to continue treatment for patients who use multidose vials.

Unfortunately, this means we won’t be able to proceed with your current treatment plan. W
- Notes: TECH: If they select [ Cancel Subscription ] reroute them to cancel subscritption page in the patient portal.  If they select [Go Back] take them back to question15.

**Q16.0** Please upload a photo of your most recent prescription.
Make sure the medication name, directions, dose, and strength are visible.
- Format: Photo Upload
- **Conditions: Max File Size: 50MB

Supported file types: 
JPG, PNG, PDF, HEIC**
- Notes: TECH: Have we found a way to pull their prescription from either network? Or do we need to ask this question

[JET] Display only if User is from Prescribery i.e. Last Order/Reassessment is done in prescribery

**Q17.0** Please fill out the following based on your prescription label:
- Notes: [JET] Display only if User is from Prescribery i.e. Last Order/Reassessment is done in prescribery

**Q17.1** Full Medication Name: 
(Ex: Tirzepatide Injection)
- Format: Text Box
- Notes: [JET] Display only if User is from Prescribery i.e. Last Order/Reassessment is done in prescribery

**Q17.2** Concentration:
(Ex: 2.5mg/mL)
- Format: Text Box
- Notes: [JET] Display only if User is from Prescribery i.e. Last Order/Reassessment is done in prescribery

**Q17.3** Medication directions as written on your prescription:
(Take each dose 2×/wk. Start 0.2mL)
- Format: Text Box
- Notes: [JET] Display only if User is from Prescribery i.e. Last Order/Reassessment is done in prescribery

**Q17.4** Date of your last injection:
- Format: Date Selector
- Notes: [JET] Display only if User is from Prescribery i.e. Last Order/Reassessment is done in prescribery

**Q18.0** Let’s start by selecting your base formula:
Your base determines which GLP-1 medication you’ll use for the next 3 months of your personalized plan.

**Q19.0** Next choose your additive: 
Personalize your treatment by selecting an additive that supports your goals. Each option offers unique benefits to help you feel your best as you continue your GLP-1 journey.

**Q20.0** Your personalized weight-loss formula is complete!
Now for the final step, please select the Tier you’d like to move forward with for your next treatment cycle.
(Final Tier and dosing will be reviewed and approved by your provider to ensure safety and optimal results.)

**Q21.0** Anything we missed? Message your doctor! Please give an update, and feel free to:
- Ask any questions you still have
- List any medical problem you have which were not discussed above
- Include anything else you would like the doctor to know
- Format: Text Box
- Answers: Example: Everything is going well so far and I'm happy with my treatment.

**Q22.0** Please provide a current, FULL body photo of yourself wearing form-fitting clothing while...
- Holding up a sign or your hand with how many months you've been a patient (ex, 1,2,3,4, etc.)
- DO NOT use a picture you have already used for prior months, or is more than 7 days old.
- Format: Photo Upload
- **Conditions: Skip option

Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**
- Notes: Removed 2/6/26 following MDI instructions from Becky Tacey and Marc Serota.

**Q23.0** Understanding GLP-1 Medications

GLP-1 medications (including GLP-1, GLP-1/GIP, Wegovy®, Ozempic®, and Saxenda®) help with weight management by:
Increasing insulin production from the pancreas
Decreasing glucagon release after meals (which reduces fat storage)
Slowing gastric emptying, helping you feel full
Sublingual GLP-1 formulations are not commercially available and must be compounded. These under-the-tongue options may be appropriate for patients who wish to avoid injections.

Benefits, Risks & Side Effects
Benefits:
* Clinical studies show adults lost an average of ~12% body weight (~38 lbs) with GLP-1 medications compared to ~2.5% (~6 lbs) with placebo.

* 83% of adults achieved ≥5% weight loss on GLP-1 versus 31% on placebo.

* Weight loss has been linked to reduced risk of type 2 diabetes, cardiovascular disease, osteoarthritis pain, and other health concerns.

Common Side Effects: Nausea, constipation, diarrhea, reflux, fatigue, and headache. These often lessen over time but may be strongest when first starting or increasing dose.

Less Common Side Effects: Abdominal discomfort, bloating, constipation (slightly higher chance with sublingual formulations).

Rare Side Effects: Depression, hair loss.

Animal Studies: GLP-1 medications caused thyroid tumors in lab rodents. It is unknown whether this occurs in humans. No studies have shown a confirmed link between GLP-1 medications and thyroid tumors or medullary thyroid carcinoma (MTC).

Contraindications
You should not use a GLP-1 if you have:

Eating disorder
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

* The medical history you provide is truthful and complete.

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

Please review the Florida Bill of Rights for Weight loss

:Please click this LINK to view/download. https://www.leg.state.fl.us/STATUTES/index.cfm?App_mode=Display_Statute&Search_String=&URL=0500-0599/0501/Sections/0501.0575.html
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


GLP-1, Wegovy, Ozempic, Saxenda are all in a group of drugs called "GLP-1's".  These medications work on the body by :
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
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q22.0** By proceeding with this consultation and any treatments or services through EllieMD and partnered pharmacies and doctor networks, you confirm that the medical history information you have provided is truthful and complete. This telehealth service provides recommendations based on the details you share, and any misrepresentation or omission of health conditions may impact your treatment outcomes. 
You acknowledge that certain treatments, including compounded medications, are not FDA-approved and are prescribed at the discretion of your provider in accordance with applicable regulations. Compounded medications have not undergone FDA review for safety or efficacy, and it is important to consult with your primary care provider to ensure that these treatments align with your overall health and medical history. 
You accept full responsibility for following treatment instructions, monitoring your health, and seeking follow-up care when needed. If you experience any side effects or medical concerns, it is essential to contact your primary care provider or seek immediate medical attention. In the case of a medical emergency, call 911 or visit the nearest emergency room. 
You understand that this treatment is elective and does not replace routine healthcare visits, in-person medical evaluations, or emergency care. Furthermore, by proceeding, you agree to release, indemnify, and hold harmless EllieMD and its affiliates from any claims, liabilities, or damages related to your participation in these treatments. 
By entering your name and date below you aknowledge you have read al the terms and conditions and accept prior to your purchase.
- Format: Digital Signature: [Text Field]
Date: [Auto-filled]

- Answers: Digital Signature: (First and Last Name)
Date: [Auto-filled]


**Q24.0** A valid photo identification such as driver’s license or passport is required to receive a prescription. You will receive your product faster if you upload your ID now. However, you can skip this step and receive an email after payment requesting your ID.
- Format: Photo Upload
- **Conditions: Max File Size: 5MB

Supported file types: 
JPG, PNG, PDF, HEIC**
- Notes: TECH: From my understyanding we should not have to ask this question because we should already have their file in our system. But I just wanted to verfiy.

