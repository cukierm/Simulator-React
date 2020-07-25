### The Simulator - A Student Tool and Tutorial for Simulation-Based Inference

Suppose you have invented a drug and find that it improves symptoms of a disease in 60% of the 25 patients in your trial. Left untreated, 40% of patients have their patients improve in the same time frame. Do we conclude that the drug worked? Or did we just get lucky with the 25 people we chose for the trial? This is the idea behind hypothesis testing: we want to know if our findings were **statistically significant**.

Many students struggle with the logic of hypothesis testing. Instead of using the formulas in statstics textbook, this website provides students with a way to decide if results are significant using simulation. In the drug example above, we that 40% of people in the population have their symptoms improve. Then we  repeatedly draw 25-person samples under this assumption to see how often as many as 60% of the people in a sample had their symptoms improve.

The guided example first walks students through the relevant vocabulary and tests their knowledge as they go. It then has students practice drawing samples and calculating P-values.

![A student enters the wrong value for p&#770;](/src/screenshots/sampleProportionCheckScreenshot.png "A student enters the wrong value for p&#770;")
![Pressing the button to generate 10 samples](/src/screenshots/repeatedSamplesScreenshot.png "Pressing the button to generate 10 samples")

The simulator is a tool that can be used for any problem requiring a one-proportion z-test. It lists the sample proportions drawn and displays them in a histogram. It also computes the P-value for each simulation and interprets the result.

![Doing 10 simulations, we can see all 10 sample proportions](/src/screenshots/SimulatorScreenshotTenSamples.png "Doing 10 simulations, we can see all 10 sample proportions")
![Doing 200 simulations, we hide most of the sample proportions and we cannot see the distinct values in the histogram](/src/screenshots/simulatorScreenshotManySamples.png "Doing 200 simulations, we rely more on the histogram")

In the future, I'd like to add a page where students are asked to use the simulator to investigate conceptual questions, such as how the sample size affects the P-value. I could also add a page with some exercises, where students need to use the simulator to solve them.

This project was created with React and vanilla JavaScript. The histogram is courtesy react-google-charts.
The idea was inspired by the collection of applets built by Alan Rossman and Beth Chance, in particular <http://www.rossmanchance.com/applets/OneProp/OneProp.htm>

