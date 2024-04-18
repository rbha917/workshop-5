let table;
let happy, sad, stress, sleep;

function preload(){
  table = loadTable('workshop 5.csv', 'csv', 'header');
  happy = loadImage('images/happy.png');
  sad = loadImage('images/cry.png');
  stress = loadImage('images/stress.png');
  sleep = loadImage('images/sad.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	}

function allRowsHappy(){
		for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let week = row.get("Weeks")
			fill(255, 0, 255);
			text(week, 30 + x * 60, 500);
		}
	}

function allRowsSad(){
		for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let week = row.get("Weeks")
			fill(0, 0, 255);
			text(week, 350 + x * 60, 500);
		}
	}

function showHappy(){
    for (x = 0; x < table.getRowCount(); x++){
        let row = table.getRow(x);
        let countHappy = row.get("Happy")
        fill(255, 0, 255);
		noStroke();
        rect(30 + x * 60, 480, 30, -countHappy * 100);
        for (y = 0; y < countHappy; y++){
          image(happy, 30 + x * 60, 450  - y * 50, 40, 40);
		  text('Happy Days Per Week', 75, 520);
        }  
    }
}

function showSad(){
    for (x = 0; x < table.getRowCount(); x++){
        let row = table.getRow(x);
        let countSad = row.get("Sad")
        fill(0, 0, 255);
		noStroke();
        rect(350 + x * 60, 480, 30, -countSad * 100);
        for (y = 0; y < countSad; y++){
          image(sad, 350 + x * 60, 450  - y * 50, 45, 30);
		  text('Sad Days Per Week', 400, 520);
        }  
    }
}

function allEmotions(){
	let xPos = 30;
	let yPos = 600;
	for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let countHappy = row.get("Happy")
			if (countHappy > 0){
				for (y = 0; y < countHappy; y++){
				image(happy, xPos, yPos, 40, 40);
				xPos += 20;
				if (xPos > 300){
					yPos += 30;
					xPos = 30;
				}
			}
		}
			let countSad = row.get("Sad")
			if (countSad > 0){
				for (y = 0; y < countSad; y++){
					image(sad, xPos, yPos, 35, 20);
					xPos += 20;
					if (xPos > 300){
					yPos += 30;
					xPos = 30;
					}
				}
			}
			let countStress = row.get("Stressed")
			if (countStress > 0){
				for (y = 0; y < countStress; y++){
					image(stress, xPos, yPos, 20, 20);
					xPos += 20;
					if (xPos > 300){
					yPos += 30;
					xPos = 30;
					}
				}
			}
			let countSleep = row.get("Sleepy")
			if (countSleep > 0){
				for (y = 0; y < countSleep; y++){
					image(sleep, xPos, yPos, 20, 20);
					xPos += 20;
					if (xPos > 300){
					yPos += 30;
					xPos = 30;
					}
				}
			}		
	    }
    }

function draw() {
  background(220);
  // let rows = table.getRowCount();
	// text("no. of rows " + rows, 10, 300);
  // let row = table.getRow(0);
	// let week = row.get("Weeks");
  // text(week, 10, 350);
	// let apples = row.get("Happy")
	// text(apples, 10, 400);
  allRowsHappy();
  showHappy();
  allEmotions();
  textSize(16);
  textFont('Comic Sans MS');
  fill(0);
  text('All My Emotions for 5 Weeks', 50, 570);
  showSad();
  allRowsSad();
}
