# Code parser
### Description
Using this package we can analyze the code files (Currently, it only support's JS). Below are the metric currently supported.
- No of lines
- No of commented lines
- No of multi line comment
- No of empty lines
- No of code lines

#### Setup Instruction
Run below command to make the build
```
make build
```

To run test cases, run below command
```
npm run test
```

Finally, To analyze run below command
```
npm run analyze <file path | folder path>
```
it show the result like below
```
Currently extension map is not supported!
file: /Users/agamkumar/practice/code-parser/dist/command.js (command.js)
- no of code lines: 97
- no of commented lines: 2
- no of multi line comment: 1
- no of empty lines: 1
- total no of lines: 100

folder: /Users/agamkumar/practice/code-parser/dist/
- no of code lines: 97
- no of commented lines: 2
- no of multi line comment: 1
- no of empty lines: 1
- total no of lines: 100
```