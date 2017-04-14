# Bank OCR Kata

This is a workthrough of the [KataBankOCR Coding Kata](http://www.codingdojo.org/cgi-bin/wiki.pl?KataBankOCR) as posted by the awesome [Test Double crew](https://github.com/testdouble/contributing-tests/wiki/Bank-OCR-kata). It uses Node.js with the TestDouble [TeenyTest](https://github.com/testdouble/teenytest) runner.

## Commit History
I tend to work in small chunks, so I left the full commit history in place so you could see the iteration of the app through the 10 commits. 

## Usage
Once you have pulled down the repo, you can run the test suite by calling `npm test`. You can also use a runner to try out an actual file with the command `node index.js test/lib/userstory1entries.txt`. 

## Wish List and Limitations
 * The file runner was written without tests, though it basically is a tiny wrapper around the rest of the system (with the exception that it knows the size of the entries)

 * User Story 3 from the list was functionally written, but no output file is written. There are test cases which cover the functionality. 

 * User Story 4 was not attempted in this pass through. After I had stopped my immediate urges from the financial industry to set that particular requirement on fire, I did look through it. The particular implementation that emerged in my solution uses a scanner / parser concept, so I'd probably push on that part of the system to have a secondary parser pass which would return options that were only one position off from the parsed element, then compare checksums using those results. 

 * This was my first time doing TDD in Node.js, and my Ruby tendancies crept in, so any style issues are solely the result of me having had my mind warped by Ruby. That also means I hoped I packaged everything correctly.
