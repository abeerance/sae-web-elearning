import { Box } from '@mui/material';
import { H1Text } from '../../atoms/typography/h1-text';
import { H2Text } from '../../atoms/typography/h2-text';
import { Paragraph } from '../../atoms/typography/paragraph';

export const VariablesAndStatements = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '50%' }}>
        {' '}
        <H1Text title="Variables and Statements" boxWidth={100} />
        <Box sx={{ marginY: '5rem' }}>
          <Paragraph text="Variables are a building block of JavaScript, and you can't use JavaScript without knowing variables." />
          <Paragraph text="We will cover what they are, what the different types of them are, what declaration means as well as what a statement is in JavaScript." />
          <Paragraph text="There are three different ways to make a variable, which in JavaScript we refer to as declaring a variable. They are:" />
          <Paragraph text="1. var" />
          <Paragraph text="2. let" />
          <Paragraph text="3. const" />
        </Box>
        <Box>
          <H2Text title="var" />
          <Paragraph text="So, what is var?" />
          <Paragraph text="To make a variable you type var and then you make a name of the variable. You can use almost anything for a variable name (we will discuss the restrictions shortly)." />
          {/* image of code */}
          <Paragraph text="What we have done there is created a new variable called first and we set it to a string of HELLO (we will discuss what a string is in a second)." />
          <Paragraph text="Now, if you refresh the index.html page, and type into the console first, you will see that we actually get the value that is inside of that variable." />
          {/* image of console.log */}
        </Box>
        <Box sx={{ marginTop: '5rem' }}>
          <H2Text title="let" />
          <Paragraph text="The second way to declare a variable is with let. Below the declaration of the variable first, add 👇" />
          {/* image of code */}
          <Paragraph text="If you refresh the variables.html page, and type in age, you will see 300 returned in the console." />
        </Box>
        <Box sx={{ marginTop: '5rem' }}>
          <H2Text title="const" />
          <Paragraph text="The third way is with const. Below the age variable, add the following: 👇" />
          <Paragraph text="That is what is called a constant variable. The naming of these things aren't great. Const means constant, but it's still called a variable." />
          <Paragraph text="var, let, const are all different types of variables, and there are different ways to declare the variables and we will talk about the pros and cons to all of them in just a second." />
        </Box>
        <Box sx={{ marginTop: '5rem' }}>
          <H2Text title="Statements and Semi-Colons in JavaScript" />
          <Paragraph text="Before we do that, let's discuss the semi-colon we are adding after each JavaScript line." />
          <Paragraph text="Semi-colons are used to terminate the line of code in JavaScript. Below is an example of what is referred to as a statement in JavaScript." />
          {/* image of code */}
          <Paragraph text="A statement is an instruction to the computer, browser, the JavaScript interpreter to do something." />
          <Paragraph text="This can usually be summarized as a variable that was declared, a variable that was updated, a function that was called, or something was logged to the console." />
          <Paragraph text="Anytime you want to do something in JavaScript, that is referred to as a statement. When you are done writing your statement, you add a semi-colon to the end of the line." />
          {/* image of code */}
        </Box>
        <Box sx={{ marginTop: '5rem' }}>
          <H2Text title="Code Blocks" />
          <Paragraph text="One thing that we will run into in JavaScript is something called a code block." />
          <Paragraph text="For example, add the following line of code to index.html and refresh the page." />
          {/* iamge of code */}
          <Paragraph text="You should see the message - you are old - in the console." />
          <Paragraph text="The question is how come we didn't put the semi-colons after each line like this 👇" />
          {/* image of code */}
          <Paragraph text="That is because it's something that is referred to as a code block. Code blocks are things that are bound by these curly brackets { and }." />
          <Paragraph text="Things like function definitions, if statements, loops do not need a semi-colon at the end because you aren't telling the computer to do something. In those instances, you are just running some code and telling the computer to do something inside of the block." />
          <Paragraph text="Throughout the course I will continue to mention why we do and do not use the semi-colon so you can get the hang of it." />
          <Paragraph text="It is possible to get away without writing semi-colons in JavaScript because there is something in JavaScript called ASI, which is automatic semi-colon insertion, but we are not going to cover that because it's a much more advanced topic." />
        </Box>
        <Box sx={{ marginTop: '5rem' }}>
          <Paragraph text="Let's talk about the difference between the three types of variables." />
          {/* image of code */}
          <Paragraph text="The values of the var and let variables can be updated." />
          <Paragraph text="If you ever wanted to change what the value is of one of those variables, you can simply just change it." />
          <Paragraph text="For example, if you add the following line of JavaScript, refresh variables.html in the browser and type first in the console, you should see the value 'westerhoff' returned." />
          {/* image of code */}
          <Paragraph text="The same can be done with the age variable. For example type in the console age = 400. That updates the value of the age variable." />
          {/* image of code */}
          <Paragraph text="You can either run the JavaScript from the index.html page, or you can run it from the console. Because the variables in index.html are global variables, we can modify them either in the script tag within index.html or directly from the console." />
          <Paragraph text="Notice that we do not have to redeclare the variable. We did not have to do something like this:" />
          {/* image of code */}
          <Paragraph text="That is actually a bad practice and in most cases, won't even work." />
          <Paragraph text="You only need to declare the variable with var, let, or const, and then whenever you want to update the value, you don't need to put the variable keyword in front of it, you can just go ahead and set it to it's new value." />
          <Paragraph text="You cannot set a const variable to be something else (there are instances where you can change a const variable, that will be handled later). If you were to go cool = false, you will see the following error: 👇" />
          {/* image of code */}
          <Paragraph text="Errors in JavaScript will tell you what went wrong and where it went wrong. Here it says 👇" />
          {/* image of code */}
          <Paragraph text="That error is describing exactly what we did, which was that we tried to change a boolean value that was set to a constant variable" />
          <Paragraph text="Constant variables cannot be changed, so think of them like an API key or something that you never want changed. You set those to a constant, and the value of that variable can never be changed." />
          <Paragraph text="It is not completely true that it can never be changed, which we will follow up on when we get to arrays and objects (meaning that there is a difference between the array or object that it is bound to and the values that live inside of it)." />
          <Paragraph text="What we need to know right now is just that var and let variables can be changed or updated, and const variables cannot." />
        </Box>
      </Box>
    </Box>
  );
};
