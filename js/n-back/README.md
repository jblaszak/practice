# N-Back Fluid Intelligence Training

This project attempts to recreate the [dual n-back test shown in some studies to increase fluid intelligence](https://www.pnas.org/doi/pdf/10.1073/pnas.0801268105). Some options to change parameters will also be added to make things easier/more difficult like adding more things to keep track of.

The original test involves the following:

- one of 8 squares is presented at the same time as one of 8 letters for 500ms
- there is a pause between presentations of square/letter combos of 2500ms
- a response is required for whenever one of the stimuli matches with n positions back in the sequence
- one keyboard input for audio matches, one for positional matches
- there are 6 audio and 6 visual targets per block with 4 appearing in 1 modality and 2 appearing in both modalities simultaneously
- each block has 20 + n trials
- after each block:
  - if fewer than 3 mistakes per modality, the level of n is increased by 1
  - if more than 5 mistakes were made per modality, n is decreased
  - otherwise n stays same

## Task List

[✅] - generation of enough trials matching above requirements  
[✅] - layout of shapes based on number  
[✅] - playing of sounds based on number  
[✅] - timing and switching of trials  
[ ] - accepting/handling user input  
[ ] - limit inputs to once per trial, per modality  
[ ] - accept button input  
[ ] - accept keyboard input  
[ ] - keeping track of 'score'  
[ ] - score page  
[ ] - start/restart functionality

Nice to haves:
[ ] - more modalities including shape  
[ ] - score history using browser storage  
[ ] - score history charts  
[ ] - cleaning up styles to look fancy  
[ ] - responsive design
