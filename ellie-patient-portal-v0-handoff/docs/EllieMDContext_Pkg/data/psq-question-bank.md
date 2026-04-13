# PSQ Question Bank

Source: V1_Product_Selection_Quiz.xlsx


## Goals

**Q1.0** What health areas matter most to you right now? (Unlimited selection)
- Format: Check Box (Multi Select)
- Answers: ☐ Weight Loss & Appetite Control
☐ Longevity 
☐ Energy & Vitality
☐ Brain Health & Cognitive Function
☐ Mood & Emotional Balance
☐ Sleep Quality & Recovery
☐ Immune Strength & Inflammation Support
☐ Injury & Tissue Repair
☐ Muscle Growth & Body Composition
☐ Metabolic Health
☐ Sexual Health & Libido
☐ Skin & Hair
☐ Overall Wellness Optimization
☐ Gut Health

**Q2.0** Rank the priority of your selected health goals
- Format: Drag selections from #1 into ordered list 1-3
- Answers: (1) = [selected category from Question 1]
(2) = [selected category from Question 1]
(3) = [selected category from Question 1]
- Notes: Multiplier assignment:
Rank 1 → 1.0
Rank 2 → 0.7
Rank 3 → 0.5
All other selected categories → 0.3
Unselected categories → 0 (excluded from scoring entirely)


## Weight Loss & Appetite Control

**Q3.0** Please provide your height and current weight
- Format: Text box (3 boxes)
- Answers: Feet (height)
Inches (height)
Lbs (current weight)
- **Conditions: If Category Selected = Weight Loss & Appetite Control, DISPLAY**

**Q4.0** Have you used GLP-1 medications or any other prescription weight loss drugs in the last 45 days?
- Format: Radio Button
- Answers: Yes 
No

**Q4.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = Yes
If BMI ≥ 22, Weight Loss
If BMI < 22 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

Do not display what pathway user qualified for (e.g. weight loss vs microdose vs non-GLP)

**Q4.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = No
If BMI ≥ 25, Standard Weight Loss
If BMI < 25 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

Do not display what pathway user qualified for (e.g. weight loss vs microdose vs non-GLP)

**Q4.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Standard Weight Loss, DISPLAY**

**Q4.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Microdose, DISPLAY**

**Q4.3** 
- Sub: What type of support would you like to complement your protocol?
- Format: Radio Button
- Answers: Support energy, metabolic balance, and nerve health (B12)
Support muscle preservation, sleep quality, and cognitive function (Glycine)
Support fat metabolism, exercise recovery, and energy (L-carnitine)
- Notes: The selected additive determines which GLP SKU name surfaces on the results screen. If user selects B12, serve GLP-1 + B12 (or GLP-1/GIP + B12 depending on GLP type selected in #4.2)
This selection does not go through the scoring engine. It is a direct SKU lookup applied after GLP eligibility and ty


## Longevity

**Q5.0** Please provide your height and current weight
- Format: Text box (3 boxes)
- Answers: Feet (height)
Inches (height)
Lbs (current weight)
- **Conditions: If Category Selected = Muscle Growth & Body Composition AND BMI not already collected, DISPLAY**

**Q6.0** Have you used GLP-1 medications or any other prescription weight loss drugs in the last 45 days?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Category Selected = Muscle Growth & Body Composition AND BMI not already collected, DISPLAY**

**Q6.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = Yes
If BMI ≥ 22, Weight Loss
If BMI < 22 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q6.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = No
If BMI ≥ 25, Standard Weight Loss
If BMI < 25 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q6.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Standard Weight Loss, DISPLAY**

**Q6.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Microdose, DISPLAY**

**Q6.3** 
- Sub: What type of support would you like to complement your protocol?
- Format: Radio Button
- Answers: Support energy, metabolic balance, and nerve health (B12)
Support muscle preservation, sleep quality, and cognitive function (Glycine)
Support fat metabolism, exercise recovery, and energy (L-carnitine)
- Notes: The selected additive determines which GLP SKU name surfaces on the results screen. If user selects B12, serve GLP-1 + B12 (or GLP-1/GIP + B12 depending on GLP type selected in #4.2)
This selection does not go through the scoring engine. It is a direct SKU lookup applied after GLP eligibility and ty

**Q7.0** Which aspect of long-term health optimization interests you most right now?
- Format: Check Box (Multi Select)
- Answers: Maintaining energy, metabolic health, and cellular vitality
Maintaining muscle, strength, and physical performance
Staying mentally sharp and protecting brain function
Preserving tissue integrity and accelerating recovery
Hormonal balance and slowing biological aging at the source
All of the above / Overall anti-aging optimization
- **Conditions: If Category Selected = Longevity, DISPLAY**


## Energy & Vitality

**Q8.0** Which energy pattern feels most familiar to you lately?
- Format: Check Box (Multi Select)
- Answers: I'm exhausted no matter how much I rest
I had energy before — age or stress took it from me
My body is fine but my brain is foggy and drained
I hit a wall during or after exercise
I crash in the afternoon or can't feel rested no matter how I sleep
All of the above — I'm running on empty
- **Conditions: If Category Selected = Energy & Vitality, DISPLAY**


## Brain Health & Cognitive Function

**Q9.0** What cognitive benefit would you most like to improve?
- Format: Check Box (Multi Select)
- Answers: I want to be sharper, faster, and more focused
My brain feels foggy and I can't think clearly
My memory isn't what it used to be
I want to protect my brain as I age
Stress and anxiety are making it hard to think straight
All of the above
- **Conditions: If Category Selected = Brain Health & Cognitive Function, DISPLAY**


## Mood & Emotional Balance

**Q10.0** Which pattern best describes how your mood or stress tends to show up lately?
- Format: Check Box (Multi Select)
- Answers: I feel anxious, on edge, or unable to relax
I feel low, flat, or have lost interest in things I used to enjoy
My mood is unpredictable — I overreact or feel emotionally out of control
I feel completely burned out, emotionally numb, or running on empty
I believe inflammation, chronic illness, or my immune system is affecting my mood
All of the above
- **Conditions: If Category Selected = Mood & Emotional Balance, DISPLAY**


## Sleep

**Q11.0** Which sleep pattern feels most familiar for you lately?
- Format: Check Box (Multi Select)
- Answers: I struggle to fall asleep — it takes me a long time to drift off
I fall asleep fine but wake up during the night and can't get back to sleep
I sleep through the night but wake up exhausted and unrefreshed
My sleep schedule is off — I'm wired at night and dragging in the morning
My mind won't switch off — stress or anxiety keeps me awake
All of the above
- **Conditions: If Category Selected = Sleep Quality & Recovery, DISPLAY**


## Immune Strength & Inflammation Support

**Q12.0** What best describes your immune or inflammation concern?
- Format: Check Box (Multi Select)
- Answers: I deal with chronic inflammation — I feel it affects my joints, energy, or overall health
My immune system feels weak — I get sick often or take a long time to recover
I'm recovering from an illness, infection, or period of being run down and haven't fully bounced back
I have pain and inflammation from an injury, surgery, or chronic joint or muscle problem
All of the above
- **Conditions: If Category Selected = Immune Strength & Inflammation Support, DISPLAY**


## Injury & Tissue Repair

**Q13.0** Which type of physical recovery support would be most helpful for you right now?
- Format: Check Box (Multi Select)
- Answers: I have an injury to a tendon, ligament, muscle, or joint and want it to heal faster
I have a nagging injury or tissue problem that just won't fully resolve
I want to recover faster from training and maintain or rebuild muscle
I'm recovering from a surgery or procedure and want to optimize healing
I want to improve my skin, reduce scarring, or heal surface wounds
All of the above / general tissue r
- **Conditions: If Category Selected = Injury & Tissue Repair, DISPLAY**


## Muscle Growth & Body Composition

**Q14.0** Please provide your height and current weight
- Format: Text box (3 boxes)
- Answers: Feet (height)
Inches (height)
Lbs (current weight)
- **Conditions: If Category Selected = Muscle Growth & Body Composition AND BMI not already collected, DISPLAY**

**Q15.0** Have you used GLP-1 medications or any other prescription weight loss drugs in the last 45 days?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Category Selected = Muscle Growth & Body Composition AND BMI not already collected, DISPLAY**

**Q15.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = Yes
If BMI ≥ 22, Weight Loss
If BMI < 22 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q15.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = No
If BMI ≥ 25, Standard Weight Loss
If BMI < 25 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q15.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Standard Weight Loss, DISPLAY**

**Q19.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Microdose, DISPLAY**

**Q19.3** 
- Sub: What type of support would you like to complement your protocol?
- Format: Radio Button
- Answers: Support energy, metabolic balance, and nerve health (B12)
Support muscle preservation, sleep quality, and cognitive function (Glycine)
Support fat metabolism, exercise recovery, and energy (L-carnitine)
- Notes: The selected additive determines which GLP SKU name surfaces on the results screen. If user selects B12, serve GLP-1 + B12 (or GLP-1/GIP + B12 depending on GLP type selected in #4.2)
This selection does not go through the scoring engine. It is a direct SKU lookup applied after GLP eligibility and ty

**Q20.0** What is your primary muscle and body composition goal?"
- Format: Check Box (Multi Select)
- Answers: I want to build muscle and increase strength
I want to lose fat and improve my overall body composition
I train regularly and want to perform better and recover faster
I'm losing muscle with age and want to preserve or rebuild it
I want to improve my body composition and how I feel overall — no specific athletic goal
All of the above
- **Conditions: If Category Selected = Muscle Growth & Body Composition, DISPLAY**


## Metabolic Health

**Q21.0** Please provide your height and current weight
- Format: Text box (3 boxes)
- Answers: Feet (height)
Inches (height)
Lbs (current weight)
- **Conditions: If Category Selected = Metabolic Health AND BMI not already collected, DISPLAY**

**Q22.0** Have you used GLP-1 medications or any other prescription weight loss drugs in the last 45 days?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Category Selected = Metabolic Health AND BMI not already collected, DISPLAY**

**Q22.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = Yes
If BMI ≥ 22, Weight Loss
If BMI < 22 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q22.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = No
If BMI ≥ 25, Standard Weight Loss
If BMI < 25 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q22.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Standard Weight Loss, DISPLAY**

**Q22.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Microdose, DISPLAY**

**Q22.3** 
- Sub: What type of support would you like to complement your protocol?
- Format: Radio Button
- Answers: Support energy, metabolic balance, and nerve health (B12)
Support muscle preservation, sleep quality, and cognitive function (Glycine)
Support fat metabolism, exercise recovery, and energy (L-carnitine)
- Notes: "The selected additive determines which GLP SKU name surfaces on the results screen. If user selects B12, serve GLP-1 + B12 (or GLP-1/GIP + B12 depending on GLP type selected in #4.2)
This selection does not go through the scoring engine. It is a direct SKU lookup applied after GLP eligibility and t

**Q23.0** What is your primary metabolic health concern?
- Format: Check Box (Multiple Select)
- Answers: I experience energy crashes, cravings, or I've been told my glucose is elevated
My metabolism feels slow — I struggle to lose weight even when I'm doing everything right
I carry excess weight around my midsection and I know it affects my health
I want to optimize my metabolic health and prevent decline before problems start
All of the above
- **Conditions: If Category Selected = Metabolic Health, DISPLAY**


## Sexual Health & Libido

**Q24.0** Which area of sexual wellness would you most like to improve right now?
- Format: Check Box (Multi Select)
- Answers: Sexual desire or interest
Physical responsiveness during intimacy
Emotional intimacy and connection
Sexual vitality and hormonal balance
All of the above
- **Conditions: If Category Selected = Sexual Health & Libido, DISPLAY**

**Q25.0** Which format would you prefer for your sexual health protocol?
- Format: Radio Button
- Answers: Nasal Spray
Troche


## Skin & Hair

**Q26.0** Which area of skin or hair health would you most like to support right now?
- Format: Check Box (Multi Select)
- Answers: Skin firmness, elasticity, or visible signs of aging
Skin clarity and calming irritated or inflamed skin
Skin healing including scarring and acne marks
Hair strength, thickness, or growth support
Overall skin vitality and antioxidant support
- **Conditions: If Category Selected = Skin & Hair, DISPLAY**


## Gut Health

**Q27.0** What best describes your gut health concern?
- Format: Check Box (Multi Select)
- Answers: I deal with bloating, cramping, or digestive discomfort
I have a diagnosed gut condition (IBS, IBD, Crohn's, leaky gut)
I'm recovering from gut issues related to illness, stress, or antibiotics
I want to support and maintain gut lining integrity proactively
All of the above
- **Conditions: If Category Selected = Gut Health, DISPLAY**


## Overall Wellness Optimization

**Q28.0** Please provide your height and current weight
- Format: Text box (3 boxes)
- Answers: Feet (height)
Inches (height)
Lbs (current weight)
- **Conditions: If Category Selected = Muscle Growth & Body Composition AND BMI not already collected, DISPLAY**

**Q29.0** Have you used GLP-1 medications or any other prescription weight loss drugs in the last 45 days?
- Format: Radio Button
- Answers: Yes 
No
- **Conditions: If Category Selected = Muscle Growth & Body Composition AND BMI not already collected, DISPLAY**

**Q29.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = Yes
If BMI ≥ 22, Weight Loss
If BMI < 22 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q29.1** 
- Sub: Based on the height and weight you provided, your current BMI is: [CALCULATED BMI GOES HERE]
- **Conditions: If #4 = No
If BMI ≥ 25, Standard Weight Loss
If BMI < 25 but ≥ 20, Microdose
If BMI < 20, exclude GLP-1 and GLP-1/GIP from recommendation**
- Notes: Store BMI in patient portal

**Q29.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Standard Weight Loss, DISPLAY**

**Q29.2** 
- Sub: Which type of metabolic support approach are you most interested in?
- Format: Radio Button
- Answers: GLP-1/GIP: Targets two metabolic pathways and has been shown to produce greater overall effects on appetite and metabolic outcomes.
GLP-1: Works through a single metabolic pathway to support appetite regulation.
- **Conditions: If Microdose, DISPLAY**

**Q29.3** 
- Sub: What type of support would you like to complement your protocol?
- Format: Radio Button
- Answers: Support energy, metabolic balance, and nerve health (B12)
Support muscle preservation, sleep quality, and cognitive function (Glycine)
Support fat metabolism, exercise recovery, and energy (L-carnitine)
- Notes: The selected additive determines which GLP SKU name surfaces on the results screen. If user selects B12, serve GLP-1 + B12 (or GLP-1/GIP + B12 depending on GLP type selected in #4.2)
This selection does not go through the scoring engine. It is a direct SKU lookup applied after GLP eligibility and ty

**Q30.0** If you were prioritizing one area of foundational health to optimize first, which would it be?
- Format: Check Box (Multi Select)
- Answers: Cellular energy and metabolic efficiency
Resilience to physical and environmental stress
Recovery and physical performance capacity
Long-term cellular health and aging resilience
- **Conditions: If Category Selected = Overall Wellness Optimization DISPLAY**

**Q31.0** How comfortable are you with self injections?
- Format: Radio Button
- Answers: Comfortable with injections
Prefer non-injection options where possible
No injections — non-injection only

**Q32.0** Do any of the following apply to you?
- Format: Check Box (Multi Select)
- Answers: Type 1 Diabetes
Personal or family history of medullary thyroid cancer or MEN2
History of pancreatitis
Gallbladder disease
Diabetic retinopathy
History of heart attack, stroke, or TIA
Uncontrolled high blood pressure
Coronary artery disease or unstable angina
Currently taking nitrate medications (e.g. nitroglycerin)
Asthma or COPD
Currently taking an SSRI (e.g. Lexapro, Zoloft, Prozac)
Currently t
- **Conditions: Display after scoring engine runs. Show only options whose corresponding compounds appear in the user's proposed recommendation. See Contraindication Rules table in Stack Rules tab for compound-to-condition mapping.**
- Notes: Full list shown here for reference only. Individual users will see a dynamic subset. Always display "None of the above" regardless of which options are shown.

**Q33.0** Your Protocol Is Ready!
Enter your details to get your personalized formula
- Format: Text box (3 boxes)
- Answers: First Name
Last Name
Email

