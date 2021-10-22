export const capitalizeText = (text: string): string => {
	const textArray = text.split(' ');
	let capitalizedText = '';
	var conjunctions = ['the', 'of', 'a']
	for (var i = 0; i < textArray.length; i++) {
		if (conjunctions.includes(textArray[i])) {
			continue;
		}
		capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' ';
	}
	return capitalizedText;
}

