Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategory").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategory")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").WaitProperty "innertext", "9.3", 10000 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Exist(20)
CurrentScore = CDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").GetROProperty("innerhtml"))
If CurrentScore >= 9.0 Then
Reporter.ReportEvent micPass, "Verify Score", "Super score >= 9.0"
else
Reporter.ReportEvent micFail, "Awfum Score", "Super score < 9.0"

End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf4.xml_;_
