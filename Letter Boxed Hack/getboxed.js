const words = gameData.ourSolution;
const enter = new KeyboardEvent("keydown", {
  altKey: false,
  bubbles: true,
  cancelBubble: false,
  cancelable: true,
  charCode: 0,
  code: "Enter",
  composed: true,
  ctrlKey: false,
  currentTarget: null,
  defaultPrevented: true,
  detail: 0,
  eventPhase: 0,
  isComposing: false,
  isTrusted: true,
  key: "Enter",
  keyCode: 13,
  location: 0,
  metaKey: false,
  repeat: false,
  returnValue: false,
  shiftKey: false,
  type: "keydown",
  which: 13,
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeWords() {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].split("").length; j++) {
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: `${words[i].split("")[j]}`,
        })
      );
      await sleep(800).then(() => {
        console.log(words[i].split("")[j]);
      });
    }
    document.getElementsByClassName("lb-button")[1].dispatchEvent(enter);
    await sleep(5000).then(() => {
      for (let j = 1; j < words[1].split("").length; j++) {
        window.dispatchEvent(
          new KeyboardEvent("keydown", {
            key: `${words[1].split("")[j]}`,
          })
        );
        sleep(800).then(() => {
          console.log(words[1].split("")[j]);
        });
      }
      document.getElementsByClassName("lb-button")[1].dispatchEvent(enter);
    });
  }
}
typeWords();
