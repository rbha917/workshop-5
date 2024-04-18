# workshop-5

### Link to sketch: https://rbha917.github.io/workshop-5/ 

## Data & Visualisation
- define variables
	let table;
- create preload function
	function preload(){
	table = loadTable('filename.csv', 'csv', 'header');
	}
- under draw
	let rows = table.getRowCount();
	text("no. of rows" + rows, x y);
- Show specific row
	let row = table.getRow(0);
	let week = row.get("Week"); // get data under specific header
	text(week, x, y);
	let apples = row.get("Apples")
	text(apples, x, y);
- Display all the rows onto the screen from one column
	function insertname(){
		for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let week = row.get("Week")
			text(week, 30 + x * 60, 350);
		}
	}

## Creating a Bar Graph
- Create function to show one column of data
function showApples(){
	for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let countApples = row.get("Apples")
			fill(255, 0 ,0);
			rect(30 + x * 60, 320, 30, -countApples * 100);
	}
}
- write function names under draw
- add a title under draw
text('title', width/3, y); 
### Displaying images in a bar graph
- define variables: let apple;
- preload images
- under setup: imageMode(CENTER);
- change apples function, add nested loop
function showApples(){
	for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let countApples = row.get("Apples");
			for (y = 0; y < countApples; y++){
				image(apple, 30 + x * 60, 300  - y * 50, 40, 40);
			}
	}
}
## Displaying all the data in one long list
- make a new function
function allFruits(){
	let xPos = 30;
	for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let countApples = row.get("Apples");
			if (countApples > 0){
				for (y = 0; y < countApples; y++){
				image(apple, xPos, 50, 40, 40);
				xPos += 20;
				}
			}
	}
}
- repeat this process with every column under the same function
let countBananas = row.get("Bananas")
			if (countBananas > 0){
				for (y = 0; y < countBananas; y++){
				image(apple, xPos, 50, 40, 40);
				xPos += 20;
				}
			}
- moving to a new line when there is no room, adding in yPos
- at the start of the function: let yPos = 50;
- change all image y to yPos
- inside all the for loops add in
if (xPos > 370){
	yPos += 30;
	xPos = 30;
}
### Finalised code
function allFruits(){
	let xPos = 30;
	let yPos = 50;
	for (x = 0; x < table.getRowCount(); x++){
			let row = table.getRow(x);
			let countApples = row.get("Apples");
			if (countApples > 0){
				for (y = 0; y < countApples; y++){
				image(apple, xPos, yPos, 40, 40);
				xPos += 20;
				if (xPos > 370){
					yPos += 30;
					xPos = 30;
				}

			let countBananas = row.get("Bananas")
			if (countBananas > 0){
				for (y = 0; y < countBananas; y++){
					image(apple, xPos, yPos, 40, 40);
					xPos += 20;
					if (xPos > 370){
					yPos += 30;
					xPos = 30;
					}

				}
			}

				}
			}
	}
}
