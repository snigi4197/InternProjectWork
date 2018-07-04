let ds = require('datastructures-js');
var myData="()[]{}";
var mySplitResult = myData.split("");
console.log("Entered string is : ",myData);
function def(opening , closing)
{
    if(opening == '(' && closing == ')') 
        return true;
    else if(opening == '{' && closing == '}') 
        return true;
    else if(opening == '[' && closing == ']') 
        return true;
	return false;
}
function abc(a)
{ 
    var S=ds.stack();
    for(var i =0;i<a.length;i++)
    {
		if(a[i] == '(' || a[i] == '{' || a[i] == '[')
            S.push(a[i]);
            else if(a[i] == ')' || a[i] == '}' || a[i] == ']')
            {
                if(S.isEmpty() || !def(S.peek(),a[i]))
                {
                     return false;
                }
                else
                    S.pop();
            }
    }
    return S.isEmpty() ? true:false;
}
if(abc(myData))
		console.log("YES");
	else
		console.log("NO"); 