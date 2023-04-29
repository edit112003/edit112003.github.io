let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('no se trata de lo que ocurre, sino como lo afrontas')
  .pauseFor(200)
  .deleteChars(10)
  .start();
