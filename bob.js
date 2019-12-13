export const hey = (message) => {
  let cleanMessage = message.trim().replace(/\+[A-Z]/gi, '');
  let testCase = cleanMessage[cleanMessage.length -1];
  let previous = cleanMessage[cleanMessage.length - 2];
  let prattle = message.slice(-3, -1);
  let alphanum = /[A-Z]|[0-9]/;
  let alpha = /[A-Z]/;
  let num = /[0-9]/;
  if (cleanMessage.length === 0) {
    return 'Fine. Be that way!'
  }
  if ((testCase === '!' && previous.match(alphanum)) || testCase.match(alpha)) {
    return 'Whoa, chill out!'
    }
  if ((testCase === '?' && !previous.match(alpha)) || (testCase === '?' && previous.match(num)) || prattle === 'OK') {
    return 'Sure.'
  }
  if (testCase === '?' && previous.match(alpha)) {
    return 'Calm down, I know what I\'m doing!'
  } else {
    return 'Whatever.'
  }
};
