{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    let count = 0;
    const sentenceLower = sentence.toLocaleLowerCase();
    const wordLower = word.toLocaleLowerCase();

    const separate = sentenceLower.split(" ");

    for (let i = 0; i < separate.length; i++) {
      if (separate[i] === wordLower) {
        count++;
      }
    }
    return count;
  }
  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript !",
      "typescript"
    )
  );

  //
}
