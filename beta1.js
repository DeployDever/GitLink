var team_default = [
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_close-range_150.png",
		rules:"Close Range",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[385,6],
			p3:[387,3],
			p4:[171,5],
			p5:[424,3],
			p6:[389,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[372,9],
			p3:[371,6],
			p4:[374,7],
			p5:[424,3],
			p6:[373,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[401,5],
			p3:[158,3],
			p4:[183,2],
			p5:[424,3],
			p6:[402,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[152,8],
			p2:[146,5],
			p3:[150,3],
			p4:[416,5],
			p5:[424,3],
			p6:[471,6],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[359,3],
			p4:[360,7],
			p5:[424,3],
			p6:[141,3],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_earthquake_150.png",
		rules:"Earthquake",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[174,7],
			p3:[385,6],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[372,9],
			p2:[373,5],
			p3:[371,6],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[397,5],
			p3:[401,5],
			p4:[403,9],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[140,7],
			p3:[357,5],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[156,3],
			p1:[152,8],
			p2:[151,6],
			p3:['',0],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_noxious-fumes_150.png",
		rules:"noxious-fumes",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[385,6],
			p3:[384,7],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[373,5],
			p3:[372,9],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[397,5],
			p3:[401,5],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[355,4],
			p3:[357,5],
			p4:[354,4],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[156,3],
			p1:[152,8],
			p2:[146,5],
			p3:[411,3],
			p4:[412,3],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_taking-sides_150.png",
		rules:"Taking Sides",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[384,7],
			p3:[385,6],
			p4:[168,4],
			p5:[171,5],
			p6:[173,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[397,5],
			p3:[161,5],
			p4:[401,5],
			p5:[158,3],
			p6:[402,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[360,7],
			p4:[139,4],
			p5:[141,3],
			p6:[354,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[152,8],
			p2:[151,6],
			p3:[150,3],
			p4:[417,6],
			p5:[416,5],
			p6:[411,3],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_silenced-summoners_150.png",
		rules:"Silenced Summoners",
		blue:{
			owner:[178,3],
			p1:[388,8],
			p2:[168,4],
			p3:[389,4],
			p4:[169,1],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[189,3],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[167,3],
			p1:[162,7],
			p2:[397,5],
			p3:[161,5],
			p4:[401,5],
			p5:[158,3],
			p6:[402,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[145,3],
			p1:[361,6],
			p2:[357,5],
			p3:[360,7],
			p4:[139,4],
			p5:[141,3],
			p6:[354,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[156,3],
			p1:[152,8],
			p2:[151,6],
			p3:[150,3],
			p4:[417,6],
			p5:[416,5],
			p6:[411,3],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_spreading-fury_150.png",
		rules:"Spreading Fury",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[384,7],
			p3:[385,6],
			p4:[168,4],
			p5:[171,5],
			p6:[173,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[397,5],
			p3:[161,5],
			p4:[401,5],
			p5:[158,3],
			p6:[402,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[360,7],
			p4:[139,4],
			p5:[141,3],
			p6:[354,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[152,8],
			p2:[151,6],
			p3:[150,3],
			p4:[417,6],
			p5:[416,5],
			p6:[411,3],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_rise-of-the-commons_150.png",
		rules:"Rise of the Commons",
				blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[384,7],
			p3:[385,6],
			p4:[168,4],
			p5:[171,5],
			p6:[173,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[397,5],
			p3:[161,5],
			p4:[401,5],
			p5:[158,3],
			p6:[402,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[360,7],
			p4:[139,4],
			p5:[141,3],
			p6:[354,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[152,8],
			p2:[151,6],
			p3:[150,3],
			p4:[417,6],
			p5:[416,5],
			p6:[411,3],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_equal-opportunity_150.png",
		rules:"Equal Opportunity",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[174,7],
			p3:[385,6],
			p4:[383,3],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[189,3],
			p1:[368,6],
			p2:[184,8],
			p3:[367,1],
			p4:[181,4],
			p5:[180,2],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[167,3],
			p1:[162,7],
			p2:[401,5],
			p3:[157,3],
			p4:[158,3],
			p5:[397,5],
			p6:[395,1],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[356,3],
			p4:[136,1],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[156,3],
			p1:[413,6],
			p2:[409,1],
			p3:[147,4],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_equalizer_150.png",
		rules:"Equaliser",
		blue:{
			owner:[437,4],
			p1:[381,1],
			p2:[174,7],
			p3:[384,7],
			p4:[385,6],
			p5:[389,4],
			p6:[168,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[180,2],
			p2:[184,8],
			p3:[371,6],
			p4:[429,4],
			p5:[373,5],
			p6:[374,7],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[397,5],
			p3:[158,3],
			p4:[401,5],
			p5:[402,5],
			p6:[163,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[360,7],
			p4:[138,2],
			p5:[358,3],
			p6:[139,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[152,8],
			p2:[150,3],
			p3:[417,6],
			p4:[416,5],
			p5:[146,5],
			p6:[148,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_explosive-weaponry_150.png",
		rules:"Explosive Weaponry",
		blue:{
			owner:[437,4],
			p1:[388,8],
			p2:[381,1],
			p3:[172,2],
			p4:[385,6],
			p5:[389,4],
			p6:[171,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[368,6],
			p2:[372,9],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[179,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[357,5],
			p3:[360,7],
			p4:[141,3],
			p5:[359,3],
			p6:[192,6],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[152,8],
			p2:[151,6],
			p3:[417,6],
			p4:[150,3],
			p5:[416,5],
			p6:[148,5],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_odd-ones-out_150.png",
		rules:"Odd Ones Out",
		blue:{
			owner:[178,3],
			p1:[174,7],
			p2:[171,5],
			p3:[384,7],
			p4:[169,1],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[189,3],
			p1:[373,5],
			p2:[369,3],
			p3:[367,1],
			p4:['',0],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[167,3],
			p1:[162,7],
			p2:[401,5],
			p3:[158,3],
			p4:[395,1],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[145,3],
			p1:[140,7],
			p2:[141,3],
			p3:[357,5],
			p4:[136,1],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[156,3],
			p1:[412,3],
			p2:[409,1],
			p3:[411,3],
			p4:[416,5],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_armored-up_150.png",
		rules:"Armored Up",
		blue:{
			owner:[437,4],
			p1:[174,7],
			p2:[385,6],
			p3:[381,1],
			p4:['',3],
			p5:['',6],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p3:[371,6],
			p2:[373,5],
			p6:[183,2],
			p4:[429,4],
			p5:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[440,4],
			p1:[162,7],
			p2:[401,5],
			p3:[158,3],
			p4:[163,4],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[438,4],
			p1:[361,6],
			p2:[138,2],
			p3:[136,1],
			p6:['',0],
			p4:['',0],
			p5:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[441,4],
			p1:[415,4],
			p2:[416,5],
			p3:[150,3],
			p4:[417,6],
			p5:['',0],
			p6:['',0],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_keep-your-distance_150.png",
		rules:"Keep Your Distance",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_up-close-personal_150.png",
		rules:"Up Close and Personal",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_heavy-hitters_150.png",
		rules:"Heavy Hitters",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_healed-out_150.png",
		rules:"Healed Out",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_stampede_150.png",
		rules:"Stampede",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_even-stevens_150.png",
		rules:"Even Stevens",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_unprotected_150.png",
		rules:"Unprotected",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_holy-protection_150.png",
		rules:"Holy Protection",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_little-league_150.png",
		rules:"Little League",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_target-practice_150.png",
		rules:"Target Practice",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_lost-magic_150.png",
		rules:"Lost Magic",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_super-sneak_150.png",
		rules:"Super Sneak",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_weak-magic_150.png",
		rules:"Weak Magic",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_broken-arrows_150.png",
		rules:"Broken Arrows",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_reverse-speed_150.png",
		rules:"Reverse Speed",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_fog-of-war_150.png",
		rules:"Fog of War",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_back-to-basics_150.png",
		rules:"Back to Basics",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_lost-legendaries_150.png",
		rules:"Lost Legendaries",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p6:[183,2],
			p4:[429,4],
			p5:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p6:[183,2],
			p4:[429,4],
			p5:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p6:[183,2],
			p4:[429,4],
			p5:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p6:[183,2],
			p4:[429,4],
			p5:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p6:[183,2],
			p4:[429,4],
			p5:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_aim-true_150.png",
		rules:"Aim true",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_melee-mayhem_150.png",
		rules:"Melee Mayhem",
		blue:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,4],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},

	},
	{
		img:"https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_standard_150.png",
		rules:"Standard",
		blue:{
			owner:[439,9999],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		green:{
			owner:[439,9999],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		red:{
			owner:[439,9999],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		dark:{
			owner:[439,9999],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		light:{
			owner:[439,9999],
			p1:[184,8],
			p2:[371,6],
			p3:[373,5],
			p4:[183,2],
			p5:[429,4],
			p6:[194,4],	
			mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	},

];



var team = {
	green:{
		owner:[439,4],
		p1:[184,8],
		p3:[371,6],
		p2:[373,5],
		p6:[183,2],
		p4:[429,4],
		p5:[194,4],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana12:{
		owner:[438,4],
		p1:[361,6],
		p2:[138,2],
		p3:[136,1],
		p6:['',0],
		p4:['',0],
		p5:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		
	mana14:{
		owner:[167,3],
		p1:[162,7],
		p2:[158,3],
		p3:[395,1],
		p4:['',0],
		p5:['',0],
		p6:['',0],
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana15:{
		owner:[438,4],
		p1:[361,6],
		p2:[357,5],
		p3:['',1],
		p4:['',0],
		p5:['',0],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana16:{
		owner:[438,4],
		p1:[361,6],
		p2:[357,5],
		p3:[353,1],
		p4:['',0],
		p5:['',0],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana17:{
		owner:[156,3],
		p1:[412,3],
		p2:[409,1],
		p3:[414,2],
		p4:[150,3],
		p5:[411,3],
		p6:[427,2],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana18:{
		owner:[437,4],
		p1:[174,7],
		p2:[385,6],
		p3:[381,1],
		p4:['',3],
		p5:['',6],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
		
	mana19:{
		owner:[156,3],
		p1:[412,3],
		p2:[409,1],
		p3:[415,4],
		p4:[150,3],
		p5:[411,3],
		p6:[414,2],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana20:{
		owner:[440,4],
		p1:[162,7],
		p2:[426,1],
		p3:[158,3],
		p4:[401,5],
		p5:['',0],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana21:{
		owner:[438,4],
		p1:[361,6],
		p2:[359,3],
		p3:[141,3],
		p4:[138,2],
		p5:[358,3],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana22:{
		owner:[437,4],
		p1:[388,8],
		p2:[382,4],
		p3:[168,4],
		p4:[172,2],
		p5:['',0],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana23:{
		owner:[438,4],
		p1:[361,6],
		p2:[138,2],
		p3:[141,3],
		p4:[359,3],
		p5:[357,5],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana24:{
		owner:[438,4],
		p1:[361,6],
		p2:[353,1],
		p3:[141,3],
		p4:[359,3],
		p5:[138,2],
		p6:[357,5],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana25:{
		owner:[440,4],
		p1:[162,7],
		p2:[401,5],
		p3:[158,3],
		p4:[160,2],
		p5:[163,4],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana26:{
		owner:[440,4],
		p1:[162,7],
		p3:[158,3],
		p4:[401,5],
		p2:[425,7],
		p5:['',0],
		p6:['',0],	
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
		   },
	mana27:{
		owner:[440,4],
		p1:[162,7],
		p2:[401,5],
		p3:[161,5],
		p4:[158,3],
		p5:[160,2],
		p6:[395,1],	
		team:function(){return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana28: {
	  owner: [440, 4],
	  p1: [162, 7],
	  p2: [401, 5],
	  p3: [402, 5],
	  p4: [158, 3],
	  p5: [163, 4],
	  p6: ['', 0],
	  team:function() {return art(this.owner[0])},
	  mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana29: {
	  owner: [437, 4],
	  p1: [174, 7],
      p2: [384, 7],
      p3: [172, 2],
      p4: [386, 3],
      p5: [427, 2],
      p6: [382, 4],
		team:function() {return art(this.owner[0])},
		mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana30: {
        owner: [438, 4],
        p1: [361, 6],
        p2: [357, 5],
        p3: [359, 3],
        p4: [141, 3],
        p5: [138, 2],
        p6: [360, 7],
	    team:function() {return art(this.owner[0])},
	    mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
	mana99: {
        owner: [439, 4],
        p1: [184, 8],
        p2: [372, 9],
        p3: [375, 8],
        p4: [375, 5],
        p5: [371, 6],
        p6: [425, 7],
	    team:function() {return art(this.owner[0])},
	    mana:function() {return this.owner[1] + this.p1[1] + this.p2[1] 
				+ this.p3[1] + this.p4[1] + this.p5[1] + this.p6[1] }
			},
}

function fillter(fillRules,mana) {
	if (fillRules.length == 1) {
		return rules1(fillRules,mana);
	}
	else if (fillRules.length == 2) {
		location.reload();
	}
}

function posis(name){
	let team_set = [];
	if (team.mana12.team() == name){team_set.push(team.mana12)}
	if (team.mana14.team() == name){team_set.push(team.mana14)}
	if (team.mana15.team() == name){team_set.push(team.mana15)}
	if (team.mana16.team() == name){team_set.push(team.mana16)}
	if (team.mana17.team() == name){team_set.push(team.mana17)}
	if (team.mana18.team() == name){team_set.push(team.mana18)}
	if (team.mana19.team() == name){team_set.push(team.mana19)}
	if (team.mana20.team() == name){team_set.push(team.mana20)}
	if (team.mana21.team() == name){team_set.push(team.mana21)}
	if (team.mana22.team() == name){team_set.push(team.mana22)}
	if (team.mana23.team() == name){team_set.push(team.mana23)}
	if (team.mana24.team() == name){team_set.push(team.mana24)}
	if (team.mana25.team() == name){team_set.push(team.mana25)}
	if (team.mana26.team() == name){team_set.push(team.mana26)}
	if (team.mana27.team() == name){team_set.push(team.mana27)}
	if (team.mana28.team() == name){team_set.push(team.mana28)}
	if (team.mana29.team() == name){team_set.push(team.mana29)}
	if (team.mana30.team() == name){team_set.push(team.mana30)}
	if (team.green.team() == name){team_set.push(team.green)}
	return team_set;
}

function rules1(fillRules,mana){
		let element = enble();
		for (i = 0;i < team_default.length; i++){
		if(fillRules.includes(team_default[i].img)){
			let team = team_default[i];
			let enble_team = [];
			let min_mana = [];
				if(
					i == 0 || i == 3 || i == 5
					|| i == 6 || i == 9 || i == 11
					|| i == 14 || i == 15 || i == 19
					|| i == 21 || i == 23 || i == 26 
					|| i == 27 || i == 28 || i == 29
					|| i == 29 || i == 30 || i == 32 
					){
						var numIN = "true";
					}
				if (element.includes(Ele.green)) {
					enble_team.push(team.green);
					if(numIN == "true"){
						enble_team.push(...posis('green'));
					}
				}
				if (element.includes(Ele.fire)) {
					enble_team.push(team.red);
					if(numIN == "true"){
						enble_team.push(...posis('blue'));
					}
				}
				if (element.includes(Ele.dark)) {
					enble_team.push(team.dark);
					if(numIN == "true"){
						enble_team.push(...posis('red'));
					}
				}
				if (element.includes(Ele.light)) {
					enble_team.push(team.light);
					if(numIN == "true"){
						enble_team.push(...posis('dark'));
					}
				}
				if (element.includes(Ele.water)) {
					enble_team.push(team.blue);
					if(numIN == "true"){
						enble_team.push(...posis('ligth'));
					}
				}
			for (let i = 0; i < enble_team.length; i++){
				let sum = enble_team[i].mana() - mana;
				min_mana.push(Math.abs(sum));
			}
			let chose = Math.min.apply(Math, min_mana);
			let num = min_mana.indexOf(chose);
			var team_fill = enble_team[num];
		}
	}
	return team_fill;
}

function art(num) {
	if(num == 440 || num == 167){
		return "red";}
	else if (num == 437 || num == 178){
		return "blue";}
	else if (num == 439 || num == 189){
		return "green";}
	else if (num == 441 || num == 156){
		return "ligth";}
	else if (num == 438 || num == 145){
		return "dark";}
}
	
var Ele = {
	fire:'Fire: Active',
	water:'Water: Active',
	green:'Earth: Active',
	light:'Life: Active',
	dark:'Death: Active',
	dragon:'Dragon: Active'
}

function rules() {
	let box = [];
	for (num = 0;num < $('.no-gutters')[0].children.length;num++){
		let rules = $('.no-gutters')[0]
		.children[num].children[0].currentSrc;
		box.push(rules);
	}
	return box;
	
}

function enble(){
	var element = [];
	for (let i = 0; i < $('.col-sm-4').length; i++){
		let text = $('.col-sm-4')[i].children[0].attributes[4].value;
		element.push(text);
	}
	return element;
}

function create(mana) {
	let fillRules = rules();
	let select = fillter(fillRules,mana);
	
	let owner = `[card_detail_id="${select.owner[0]}"] img`;
	let p1 = `[card_detail_id="${select.p1[0]}"] img`;
	let p2 = `[card_detail_id="${select.p2[0]}"] img`;
	let p3 = `[card_detail_id="${select.p3[0]}"] img`;
	let p4 = `[card_detail_id="${select.p4[0]}"] img`;
	let p5 = `[card_detail_id="${select.p5[0]}"] img`;
	let p6 = `[card_detail_id="${select.p6[0]}"] img`;

setTimeout(() => {
	$(owner).click();
		mana -= select.owner[1];},200);
setTimeout(() => {		
	if (select.p1[1] <= mana){
		$(p1).click();mana -= select.p1[1]};},300);
setTimeout(() => {		
	if (select.p2[1] <= mana){
		$(p2).click();mana -= select.p2[1];}},400);
setTimeout(() => {		
	if (select.p3[1] <= mana){
		$(p3).click();mana -= select.p3[1];}},500);
setTimeout(() => {		
	if (select.p4[1] <= mana){
		$(p4).click();mana -= select.p4[1];}},600);
setTimeout(() => {		
	if (select.p5[1] <= mana){
		$(p5).click();mana -= select.p5[1];}},700);
setTimeout(() => {		
	if (select.p6[1] <= mana){
		$(p6).click();mana -= select.p6[1];}},800);
setTimeout(() => {		
	if (2 <= mana){
		$('[card_detail_id="427"] img').click();mana -= 2;}},900);
setTimeout(() => {		
	if (1 <= mana){
		$('[card_detail_id="426"] img').click();mana -= 1;}},1000);
}


function script_bot() {

	$(document).ready(()=>{
		$('.big_category_btn').click();
		setTimeout(() => {findA()},2000);
		
		function findA(){
			let find = $('#find_opponent_dialog').attr("style");
			if (find === 'display: none;' || find === undefined){
				setTimeout(()=>{$('.btn--create-team').click()},2000);
				index();
			} else {setTimeout(findB,2000)}
		}	

		function findB(){
			let find = $('#find_opponent_dialog').attr("style");
			if (find === 'display: none;' || find === undefined){
				setTimeout(()=>{$('.btn--create-team').click()},2000);
				index();
			} else {setTimeout(findA,2000)}
		}	


		function index(){
			setTimeout(()=>{
				let mana = parseInt($('.mana-cap').clone()[0].outerText);
				create(mana);
				setTimeout(()=>{$('.btn-green').click()},6000);
				setTimeout(()=>{waitplayerA()},10000);
		
				function waitplayerA(){
					let waitplay = $('#wait_for_opponent_dialog').attr("style");
					if (waitplay === 'display: none;' || waitplay === undefined){
						$('a[onclick="SM.ShowBattleHistory();"]').click();
						setTimeout(()=>{$('button[class="btn btn--done"]').click();},2000);
						setTimeout(()=>{main()},6000);
					} else {setTimeout(waitplayerB,5000)}
				}

				function waitplayerB(){
					let waitplay = $('#wait_for_opponent_dialog').attr("style");
					if (waitplay === 'display: none;' || waitplay === undefined){
						$('a[onclick="SM.ShowBattleHistory();"]').click();
						setTimeout(()=>{$('button[class="btn btn--done"]').click();},2000);
						setTimeout(()=>{main()},6000);
					} else {setTimeout(waitplayerA,5000)}
				}


			},6000);
		};

	
	
});
}

function main() {
console.clear();
script_bot();
}


function status() {
	let status = {
	version:"beta",
	name:"Bot-splinterland",
	update:"none",
	Donate:"@deploy17"
}; console.log(status); main();}status()
