// complete the given function

function palindrome(str){
	var s = "";
	for(let i=0;i<str.length;i++)
		{
			if(str.charAt(i)!==' ')
			{
				s=s+str.charAt(i);
			}
		}
	let i=0;
	let j=s.length-1;
	while(i<j){
		if(s.charAt(i)!== s.charAt(j))
		{
			return false;
		}
		++i;
		++j;
	}
	return true;
}
module.exports = palindrome
