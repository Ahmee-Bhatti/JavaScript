
function bat()
{
  let randNum = Math.random() * 3;
  let computerChoice;

  if(randNum>0 && randNum <= 1)
  {
    computerChoice = 'ball';
  }
   else if(randNum>1 && randNum <= 2)
  {
    computerChoice = 'bat';
  }
   else 
  {
    computerChoice = 'stump';
  }

  let result;
  if(computerChoice=== 'ball')
  {
    result = 'User Won:';
  }
  if(computerChoice=== 'bat')
  {
    result = `It's a Tie:`;
  }
  if(computerChoice=== 'stump')
  {
    result = 'Computer has Won:';
  }

  alert( `You have chosen bat. computer choice is ${computerChoice} and ${result}` );
}
function ball()
{
  let randNum = Math.random() * 3;
  let computerChoice;

  if(randNum>0 && randNum <= 1)
  {
    computerChoice = 'ball';
  }
   else if(randNum>1 && randNum <= 2)
  {
    computerChoice = 'bat';
  }
   else 
  {
    computerChoice = 'stump';
  }

  let result;
  if(computerChoice=== 'ball')
  {
    result = `It's a Tie:`;
  }
  if(computerChoice=== 'bat')
  {
    result = 'Computer has Won:';
  }
  if(computerChoice=== 'stump')
  {
    result = 'User Won:';
  }

  alert( `You have chosen ball. computer choice is ${computerChoice} and ${result}` );
}
function stump()
{
  let randNum = Math.random() * 3;
  let computerChoice;

  if(randNum>0 && randNum <= 1)
  {
    computerChoice = 'ball';
  }
   else if(randNum>1 && randNum <= 2)
  {
    computerChoice = 'bat';
  }
   else 
  {
    computerChoice = 'stump';
  }

  let result;
  if(computerChoice=== 'ball')
  {
    result = 'Computer has Won:';
  }
  if(computerChoice=== 'bat')
  {
    result = 'User Won:';
  }
  if(computerChoice=== 'stump')
  {
    result = `It's a Tie:`;
  }

  alert( `You have chosen stump. computer choice is ${computerChoice} and ${result}` );
}