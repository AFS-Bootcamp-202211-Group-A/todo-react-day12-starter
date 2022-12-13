export default function PromiseMsg() {
    const isRandomNumberEven = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomInt = Math.floor(Math.random() * 10)
          if (randomInt%2 ===0) {
            resolve("success");
          } else {
            reject("reject");
          }
        }, 2000);
      });
    };
    const checkNumber = () => {
      isRandomNumberEven()
        .then((msg) => alert("Even"))
        .catch((error) => alert("Odd"));
    };
    return (
      <div>
        <h1> Guess Number is Even or Odd (2s for guessing) </h1>
        <button onClick={checkNumber}>Start! </button>
      </div>
    );
}
