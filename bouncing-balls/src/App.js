import React from "react";
import "./App.css";
import { Ball, EvilCircle } from "./3Dcircles";

const random = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

function App() {
  const handleClick = () => {
    const canvas = document.querySelector("canvas");

    const context = canvas.getContext("2d");

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    console.log("width", width);

    let balls = [];
    while (balls.length < 25) {
      let size = random(10, 20);
      let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-10, 10),
        random(-10, 10),
        true,
        context,
        "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")",
        size,
        width,
        height
      );

      balls.push(ball);
    }

    let size = 10;
    const player = new EvilCircle(
      random(0 + size, width - size),
      random(0 + size, height - size),
      true,
      context,
      width,
      height
    );

    const loop = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.25)";
      context.fillRect(0, 0, width, height);
      player.draw();
      player.checkBounds();
      player.setControls();
      player.vanisher(balls);
      for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect(balls);
      }
      requestAnimationFrame(loop);
    };

    loop();
  };

  return (
    <div className="App">
      <h1>Bouncing Balls</h1>
      <p>Ball count: </p>
      <button onClick={handleClick}>Run</button>
      <div>
        <canvas>
          <h1>Bouncing Balls</h1>
          <p>Ball count: </p>
        </canvas>
      </div>
    </div>
  );
}
export default App;
