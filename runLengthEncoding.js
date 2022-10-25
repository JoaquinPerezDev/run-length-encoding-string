// run a function that takes in a non-empty string and returns its run-length encoding.

// From Wikipedia, "run-length encoding is a form of  lossless dara compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

// To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-lenght-encode long runs. For example, the run "AAAAAAAAAAAA"(12 As), can't naively be encoded as "12A", since the string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs(runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A2A".

// Sample input: string = "AAAAAAAAAAAAAABBCCCCDD"
// Sample output: "9A4A2B4C2D"

//Naive approach: We can iterate through the array and using two pointers, we can compare the current character and previous character with each other. While keeping track of the current length of the run, if the current character doesn't equal the previous character OR if the current length of the run is 9, we push the value of currentRunLength as a string, then we push the previous character. Once the for loop is completed, we can join the elements in the encoded array to return them to one single string.

//time complexity: The runtime for this algorithm is linear(O(n)) given that we're iterating through the array once and the time is dependent on the size of the input array.

//space complexity: The runtime for this algorithm is O(n) as well given that the size of the input array will dictate the size of our encoded array.

//O(n) time | O(n) space complexity

function runLengthEncoding(string) {
  // Write your code here.
  const encoded = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const prevChar = string[i - 1];

    if (currentChar !== prevChar || currentRunLength === 9) {
      encoded.push(currentRunLength.toString());
      encoded.push(prevChar);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encoded.push(currentRunLength.toString());
  encoded.push(string[string.length - 1]);

  return encoded.join('');
}
