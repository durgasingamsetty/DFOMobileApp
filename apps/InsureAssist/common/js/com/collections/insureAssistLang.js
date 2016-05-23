//Includes file dependencies
define([

        "jquery",
        "backbone",

        ], function($, Backbone) {

	// Language Collection: this contains all the strings for a particular language page wise
	var LanguageCollection = Backbone.Model.extend({},
	{
		langBundle_EN : {

			sidebar: {
				HomeLabel: "Home",			
				ProductsLabel: "Products",
				QuoteLabel: "Quote",
				ClaimsLabel: "Claims",
				CalculatorsLabel: "Calculators",
				DownloadsLabel: "Downloads",
				FAQlabel: "FAQ",
				ContactUsLabel: "Contact Us",
				AboutUsLabel: "About Us",
				BranchLocatorLabel: "Branch",
				FindAnAgentLabel: "Find Agent"
			},
			


			loginPage: {
				AcctLoginBtnLabel: "Login to Your Account",
				RegBtnLabel: "Register to Create Account",
				SkipBtnLabel: "Skip for Now"
			},
			
			acctLoginPage: {
				
				ContinueText: "Please login to continue",
				CustIDLabel: "Customer ID",
				PwdLabel: "Password",
				LoginBtnLabel: "Login",
				FgtPwdLabel:"Forgot Password?",
				FBLabel: "Login with Facebook",
				GoogleLabel: "Login with Google+",
				AgreementTxt: "By logging in, you agree to the ",
				Terms: "Terms of Service",
				NoAcctLabel : "You don't have account? ",
				RegLabel :  "Register Now",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat"
					
			},

			
			landingPage:{
				
			},
			
			basicRegistrationPage : {
				NewUserRegLabel : "New User Registration",
				PageSubHeading : "Personal Information",
				FirstName : "First Name",
				LastName : "Last Name",
				Gender : "Gender",
				Male : "Male",
				Female : "Female",
				DateofBirth : "Date of Birth",
				Email : "Email",
				AddressLine1 : "Address Line 1",
				AddressLine2 : "Address Line 2",
				AddressLine3 : "Address Line 3",
				Optional : "(Optional)",
				PinCode : "Pin Code",
				City : "City",
				State : "State",
				AndhraPradesh : "Andhra Pradesh",
				ArunachalPradesh : "Arunachal Pradesh",
				Assam : "Assam",
				Bihar : "Bihar",
				Chhattisgarh : "Chhattisgarh",
			    Goa : "Goa",
			    Gujarat : "Gujarat",
			    Haryana : "Haryana",
			    HimachalPradesh : "Himachal Pradesh",
			    JammuandKashmir : "Jammu and Kashmir",
			    Jharkhand : "Jharkhand",
			    Karnataka : "Karnataka",
			    Kerala : "Kerala",
			    MadhyaPradesh : "Madhya Pradesh",
			    Maharashtra : " Maharashtra",
			    Manipur : "Manipur",
			    Meghalaya : "Meghalaya",
			    Mizoram : "Mizoram",
			    Nagaland : "Nagaland",
			    Orissa : "Orissa",
				Punjab : "Punjab",
				Rajasthan : " Rajasthan",
				Sikkim : "Sikkim",
				TamilNadu : "Tamil Nadu",
				Telangana : "Telangana",
				Tripura : " Tripura",
				UttarPradesh : "Uttar Pradesh",
				Uttarakhand : "Uttarakhand",
				WestBengal : "West Bengal",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat"
				
			},
	    
			kycRegistrationPage:{
				NewUserRegLabel : "New User Registration",
			    KYCLOGIN :"KYC Information and Login Credentials",
			    PAN : "PAN",
			    KycDocument : "KYC DOCUMENT",
			    IdentityProof: "Identity Proof (Any 1)",
			    IdentityDocuments: "Passport,Driver's License,Pan Card,Voter ID Card",
			    AddressProof: "Address Proof (Any 1)",
			    AddressDocuments: "Passport,Driver's License,Telephone Bill",
			    UserID : "User ID",
			    Password: "Password",
			    SecurityQuestions: "Security Questions",
			    Select: "Select",
			    Nickname: "What is your Nickname?",
			    FavouritePet: "Which is your favourite pet?",
			    Answer : "Answer",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat"
			    
			},
			
			quotePage:{
				BackBtnLabel : "Back",
				UsernameLabel: "Vikram",
				QuoteHeadingLabel: "Explore Plans",
				QuoteSubHeadingLabel: "Choose - Calculate - Get a Quote - Buy Online",
				PensionLabel: "Retirement & Pension",
				TermLabel: "Term Insurance",
				LifeInsuranceLabel: "Whole Life Insurance",
				UlipLabel: "ULIP",
				SavedQuotesLabel: "My Saved Quotes",
				PlanTypeLabel: "Plan Type",
				DateSaveLabel: "Date Saved",
				PolicyTermLabel: "Policy Term(Yrs)",
				YrlyPrmLabel: "Yearly Premium(Rs)",
				ContinueBtnLabel: "Continue",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat"					
			},

			
			downloadsPage:{
				BackBtnLabel : "Back",
				UsernameLabel: "Vikram",
				Pretext: "Tap on the form you would like to download",
				PolicyAmendmentFormLabel : "Policy Amendment Form",
				ReinstatementFormLabel : "Reinstatement Form",
				AddressChangeRequestLabel : "Address Change Request",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat"	
				
			},
			
			dashboardPage:{
				UsernameLabel: "Vikram",
				MyPortfolioLabel: "My Portfolio",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat",		
				AssetAllocationLabel: "Asset Allocation",
				MyApplicationStatusLabel: "My Application Status",
				RefLabel: "Ref",
				ReferenceNumberLabel: "1287468",
				BookedOnLabel: "Booked on",
				BookedOnDateLabel: "21-07-2015",
				DocumentReceivedLabel: "Document Received",
				NextStepLabel: "Next Step Application Verification",
				StatusLabel: "Status",
				StatusProcessed: "Processed",
				PolicyType: "ULIP",
				RetirementPensions: "Retirement & Pensions",
				AssetValueLabel: "Asset Value :",
				OverallGainLabel: "Overall Gain :",
				RiskCommencementDateLabel: "Risk Commencement Date",
				MaturityDateLabel: "Maturity Date",
				LastPaymentDateLabel: "Last Payment Date",
				PremiumDueonLabel: "Premium Due on",
				PremiumAmountLabel: "Premium Amount",
				ActionLabel: "Action",
				PayNowLabel: "Pay Now",
				ViewAllocationLabel: "View Allocation",
			},
			
		   premiumPaymentPage:{
			   UsernameLabel: "Vikram",
			   BranchLocatorLabel: "Branch Locator",
			   FindAnAgentLabel: "Find an Agent",
			   CallMeBackLabel: "Call Me Back",
			   LiveChatLabel: "Live Chat"
		   },
		   
		   retirementPensionPage:{
			   UsernameLabel: "Vikram",
			   BranchLocatorLabel: "Branch Locator",
			   FindAnAgentLabel: "Find an Agent",
			   CallMeBackLabel: "Call Me Back",
			   LiveChatLabel: "Live Chat",
			   OnRetirement : "On Retirement,",
			   Amount: "you need to have corpus amount of",
			   PaymentFrequency: "Payment Frequency",
			   InvestmentRequired: "Investment Required(Rs.)",
			   Monthly: "Monthly",
			   Quarterly: "Quarterly",
			   HalfYearly: "Half-yearly",
			   Yearly : "Yearly",
			   BuyOnline: "Buy Online",
			   SaveQuote: "Save Quote",
			   DownloadIllustration: "Download Illustration",
			   Share: "Share",
		   },
		   
		   userDetailsPage:{
			   FirstName: "First Name",
			   LastName: "Last Name",
			   Email: "Email",
			   PinCode: "Pin Code",		
			   Mobile: "Mobile",
			   UsernameLabel: "Vikram",
			   BranchLocatorLabel: "Branch Locator",
			   FindAnAgentLabel: "Find an Agent",
			   CallMeBackLabel: "Call Me Back",
			   LiveChatLabel: "Live Chat",
			   Save: "Save",
		   },
		   
		   termLifePlanPage:{
			   UsernameLabel: "Vikram",
			   BackBtnLabel : "Back",
			   TermLifePlanLabel : "Term Life Plan",
			   KeyFeaturesAndBenefitsLabel : "Key Features And Benefits",
			   PremiumCalculatorLabel : "Premium Calculator",
			   BranchLocatorLabel: "Branch Locator",
			   FindAnAgentLabel: "Find an Agent",
			   CallMeBackLabel: "Call Me Back",
			   LiveChatLabel: "Live Chat",
			   YearlyPremiumLabel: "Yearly Premium",
			   KeyFeaturesAndBenefitsLabel: "Key Features And Benefits",
			   PremiumCalculatorLabel: "Premium Calculator",
			   BasicInformationLabel: "Basic Information",
			   EditLabel: "Edit",
			   GenderLabel: "Gender",
			   SmokerNonSmokerLabel: "Smoker/Non Smoker",
			   DateofBirthLabel: "Date of Birth",
			   PremiumFrequencyLabel: "Premium Frequency",
			   YearlyLabel: "Yearly",
			   MonthlyLabel: "Monthly",
			   HalfYearlyLabel: "Half-Yearly",
			   QuarterlyLabel: "Quarterly",
			   LifeCoverUptoLabel: "Life Cover Upto",
			   PolicyTermLabel: "Policy Term",
			   LifeCoverLabel: "Life Cover",
			   AddRiderLabel: "Add Rider",
			   CriticalIllnessLabel: "Critical Illness",
			   PolicyTermLabel: "Policy Term",
			   CoverLabel: "Cover",
			   AccidentLabel: "Accident",
			   CalculateLabel: "Calculate",
			   YearlyPremiumLabel: "Yearly Premium",
			   TermLabel: "Term(Yrs)",
			   SumAssuredLabel: "Sum Assured(Rs)",
			   PremiumLabel: "Premium(Rs)",
			   BasicLifeCoverLabel: "Basic Life Cover",
			   CriticalIllnessRiderLabel: "Critical Illness Rider",
			   YearlyPremiumWithServiceTaxLabel: "Yearly Premium(with 5% service Tax)",
			   MinAgeLabel: "18",
			   MaxAgeLabel: "75",
			   MinAmountLabel: "Rs.10 Lakh",
			   MaxAmountLabel: "Rs.10 Crore",
			   Term1Label: "10 Years",
			   Term2Label: "15 Years",
			   Term3Label: "20 Years",
			   Term4Label: "25 Years",
			   CoverMinAmount: "1 Lakh",
			   CoverMaxAmount: "50 Lakh",
			   YearlyPremiumTotalAmountLabel: "29,510",
			   BuyOnline: "Buy Online",
			   SaveQuote: "Save Quote",
			   DownloadIllustration: "Download Illustration",
			   Share: "Share",
		   },
			
		   assetAllocationPage:{
				BackBtnLabel : "Back",
				UsernameLabel: "Vikram",
				Modify: "Modify",
				Deposit: "+ Deposit",
				FundsCurrentlyElected: "Funds CurrentlyElected",
				CurrentAllocation: "Current Allocation",
				CurrentFundValue: "Current FundValue",
				AnnualizedReturn: "Annualized Return",
				Cancel: "Cancel",
				ModifyPopup: "Modify",
				Submit: "Submit",
				AddFund: "+ Add Fund",
				BranchLocatorLabel: "Branch Locator",
				FindAnAgentLabel: "Find an Agent",
				CallMeBackLabel: "Call Me Back",
				LiveChatLabel: "Live Chat"	
			}
			
		}
	});
	// Returns the Collection class
	return LanguageCollection;

});