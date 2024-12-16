export default function splitParagraphToSentences(paragraph: string): string[] {

    const parsedData = JSON.parse(paragraph) as  string;
    let sentences = parsedData.split('\n\n').map(sentence => sentence.trim());
    sentences = sentences.map(sentence => sentence.replace(/^\d+\.\s*/, ''));
    return sentences.slice(0, 10);
}