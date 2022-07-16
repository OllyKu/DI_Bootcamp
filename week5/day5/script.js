// Write a JS program to print the letter A using stars.
 
  // Function to display alphabet pattern
  function display(n)
  {
    // Outer for loop for number of lines
    for (var i = 0; i < n; i++)
    {
      // Inner for loop for logic execution
      for (var j = 0; j <= Math.floor(n / 2); j++)
      {
        // prints two column lines
        if (
          ((j == 0 || j == Math.floor(n / 2)) && i != 0) ||
          // print first line of alphabet
          (i == 0 && j != 0 && j != Math.floor(n / 2)) ||
          // prints middle line
          i == Math.floor(n / 2)
        ) {
          document.write("*");
        } else document.write("   ");
      }
      document.write("<br>");
    }
  }
  display(7);
 