function shortcut(s1, s2) {
  // your code here
	
	if(!s1.length || !s2.length)return '';
	let s=s1[0];
	s+=s2[0];
	// alert(s);
	return s;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
