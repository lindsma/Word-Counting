// declare word string and split into individual words

var wordString = "From a a a fairest creatures we desire increase, That thereby beauty's rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes, Feed'st thy light's flame with self-substantial fuel, Making a famine where abundance lies, Thy self thy foe, to thy sweet self too cruel: Thou that art now the world's fresh ornament, And only herald to the gaudy spring, Within thine own bud buriest thy content And tender churl mak'st waste in niggarding: Pity the world, or else this glutton be, To eat the world's due, by the grave and thee.";

var stringLower = wordString.toLowerCase();
var stringReplace = stringLower.replace(/[.,\/#!$%\'^&\*;:{}=\_`~()]/g, " ");
var stringNoPunct = stringReplace.replace(/\s{2,}/g, " ");
var wordStringSplit = stringNoPunct.split(" ");

var wordCountObject = {

    index: 0,
    newWordStringSplit: [],
    wordContainer: {},
    oldKey: "",
    newKey: "",

    siloWords: function(string) {
        while (this.index < string.length) {
            var propertyValue = string[this.index];
            if (propertyValue.length > 1) {
                this.newWordStringSplit.push(propertyValue);

                if (!this.wordContainer.hasOwnProperty(propertyValue)) {
                    this.newKey = propertyValue;
                    this.wordContainer[this.newKey] = 1;
                } else {
                    this.oldKey = propertyValue;
                    this.wordContainer[this.oldKey] = this.wordContainer[this.oldKey] + 1;
                }
            }
            this.index++;
        }
        console.log(this.wordContainer);
    }

};


wordCountObject.siloWords(wordStringSplit);
