const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');

textInput.addEventListener('input', () => {
    const text = textInput.value;

    // Count words
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;

    // Count characters
    const characters = text.length;

    // Count sentences
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    // Count paragraphs
    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;

    // Update the UI
    wordCount.textContent = words;
    charCount.textContent = characters;
    sentenceCount.textContent = sentences;
    paragraphCount.textContent = paragraphs;
});
