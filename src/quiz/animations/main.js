const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  async function animateAlice(element) {
    const animation = element.animate(aliceTumbling, aliceTiming);
    await animation.finished;
    console.log('Animation finished for', element.id);
  }

  async function animateAllAlices() {
    try {
        await animateAlice(document.querySelector("#alice1"));
        await animateAlice(document.querySelector("#alice2"));
        await animateAlice(document.querySelector("#alice3"));
    } catch (error) {
        console.error('Error during animation:', error);
    }
  }

  animateAllAlices();

  // alice1
  //   .animate(aliceTumbling, aliceTiming)
  //   .finished
  //   .then((res) => {
  //       console.log(res);
  //       alice2
  //           .animate(aliceTumbling, aliceTiming)
  //           .finished
  //           .then((res) => {
  //               console.log(res);
  //               alice3.animate(aliceTumbling, aliceTiming);
  //           })
  //   });

  // Promise chain  
  // alice1.animate(aliceTumbling, aliceTiming).finished  
  //   .then(() => {
  //       return alice2
  //               .animate(aliceTumbling, aliceTiming)
  //               .finished;     
  //   })
  //   .then(() => {
  //     return alice3
  //             .animate(aliceTumbling, aliceTiming)
  //             .finished;
  //   })
  //   .catch((err) => alert(`Error when promising ... ${err.message}`));