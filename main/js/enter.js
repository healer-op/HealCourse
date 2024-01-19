var d =["/Entrepreneurship/Welcome.mp4",
"/Entrepreneurship/Getting%20Started.mp4",
"/Entrepreneurship/Examples%20of%20some%20innovations%20and%20innovators.mp4",
"/Entrepreneurship/How%20I%20did%20it%20and%20empowered%20and%20supported%20other%20to%20do%20it.mp4",
"/Entrepreneurship/Why%20do%20it%20Benefits%20to%20you.mp4",
"/Entrepreneurship/Benefits%20to%20the%20organization.mp4",
"/Entrepreneurship/Back%20to%2029%20Aug.mp4",
"/Entrepreneurship/DoItvation%20Gallery.mp4",
"/Entrepreneurship/Organization%20Evolution.mp4",
"/Entrepreneurship/Your%20evolution.mp4",
"/Entrepreneurship/DoIt.mp4",
"/Entrepreneurship/Ignite%20Vudocs.mp4",
"/Entrepreneurship/Random.mp4",
"/Entrepreneurship/Attribute.mp4",
"/Entrepreneurship/Scamper.mp4",
"/Entrepreneurship/Role%20usage.mp4",
"/Entrepreneurship/Analogy.mp4",
"/Entrepreneurship/Mind%20maps.mp4",
"/Entrepreneurship/Six%20thinking%20hats.mp4",
"/Entrepreneurship/Fishbone.mp4",
"/Entrepreneurship/5W.mp4",
"/Entrepreneurship/Exercises.mp4",
"/Entrepreneurship/IPSOVI%20approach.mp4",
"/Entrepreneurship/Innovation%20Assessment%20Quadrant.mp4",
"/Entrepreneurship/IPSOVI%20Example.mp4",
"/Entrepreneurship/Steam%20Engine%20and%20James%20Watt.mp4",
"/Entrepreneurship/Micheal%20Jackson%20and%20Anti%20Gravity%20Shoes.mp4",
"/Entrepreneurship/Edison%20and%20Bulb.mp4",
"/Entrepreneurship/Traveller's%20Cheque%20and%20Amex.mp4",
"/Entrepreneurship/Exercises.mp4",
"/Entrepreneurship/Getting%20started%20with%20search%20on%20idea%20and%20its%20refinement.mp4",
"/Entrepreneurship/Recap%20of%20various%20steps.mp4",
"/Entrepreneurship/Examples.mp4",
"/Entrepreneurship/Exercises.mp4",
"/Entrepreneurship/Getting%20started%20with%20brainstorming.mp4",
"/Entrepreneurship/Round%20Robin.mp4",
"/Entrepreneurship/Stepladder.mp4",
"/Entrepreneurship/BrainWriting.mp4",
"/Entrepreneurship/Brain-Netting.mp4",
"/Entrepreneurship/Crawford%20Slip%20Writing.mp4",
"/Entrepreneurship/Reverse%20brainstorming.mp4",
"/Entrepreneurship/StarBursting.mp4",
"/Entrepreneurship/Role%20Storming.mp4",
"/Entrepreneurship/Charette%20Procedure.mp4",
"/Entrepreneurship/Group%20IPSOVI.mp4",
"/Entrepreneurship/What%20is%20Prototyping.mp4",
"/Entrepreneurship/Examples%20of%20Prototyping.mp4",
"/Entrepreneurship/Definitions%20and%20Levels.mp4",
"/Entrepreneurship/Low%20Fidelity%20Prototype.mp4",
"/Entrepreneurship/Medium/High%20Fidelity%20Prototype.mp4",
"/Entrepreneurship/Prototype%20Building%20Examples.mp4",
"/Entrepreneurship/Future%20of%20Prototyping.mp4",
"/Entrepreneurship/Keep%20Imagining%20and%20Innovating.mp4",
"/Entrepreneurship/Get%20started%20with%20patenting%20and%20what%20is%20patent.mp4",
"/Entrepreneurship/Types%20of%20Patents.mp4",
"/Entrepreneurship/Examples%20of%20Patents.mp4",
"/Entrepreneurship/Patentable%20vs%20Non-Patentable.mp4",
"/Entrepreneurship/Key%20Components.mp4",
"/Entrepreneurship/Steps%20in%20patenting.mp4",
"/Entrepreneurship/Exercises.mp4",
"/Entrepreneurship/Getting%20Started%20with%20Positioning%20Pitch.mp4",
"/Entrepreneurship/Key%20Elements.mp4",
"/Entrepreneurship/Backup%20Elements.mp4",
"/Entrepreneurship/Proposed%20Next%20Steps.mp4",
"/Entrepreneurship/Elevator%20Pitch.mp4",
"/Entrepreneurship/Example%20of%20a%20Pitch.mp4",
"/Entrepreneurship/Exercise.mp4",
"/Entrepreneurship/Future%20Pathways.mp4"];

var d1 =["Welcome",
"Getting Started",
"Examples of some innovations and innovators",
"How I did it and empowered and supported other to do it",
"Why do it Benefits to you",
"Benefits to the organization",
"Back to 29 Aug",
"DoItvation Gallery",
"Organization Evolution",
"Your evolution",
"DoIt",
"Ignite Vudocs",
"Random",
"Attribute",
"Scamper",
"Role usage",
"Analogy",
"Mind maps",
"Six thinking hats",
"Fishbone",
"5W",
"Exercises",
"IPSOVI approach",
"Innovation Assessment Quadrant",
"IPSOVI Example",
"Steam Engine and James Watt",
"Micheal Jackson and Anti Gravity Shoes",
"Edison and Bulb",
"Traveller's Cheque and Amex",
"Exercises",
"Getting started with search on idea and its refinement",
"Recap of various steps",
"Examples",
"Exercises",
"Getting started with brainstorming",
"Round Robin",
"Stepladder",
"BrainWriting",
"Brain-Netting",
"Crawford Slip Writing",
"Reverse brainstorming",
"StarBursting",
"Role Storming",
"Charette Procedure",
"Group IPSOVI",
"What is Prototyping",
"Examples of Prototyping",
"Definitions and Levels",
"Low Fidelity Prototype",
"Medium/High Fidelity Prototype",
"Prototype Building Examples",
"Future of Prototyping",
"Keep Imagining and Innovating",
"Get started with patenting and what is patent",
"Types of Patents",
"Examples of Patents",
"Patentable vs Non-Patentable",
"Key Components",
"Steps in patenting",
"Exercises",
"Getting Started with Positioning Pitch",
"Key Elements",
"Backup Elements",
"Proposed Next Steps",
"Elevator Pitch",
"Example of a Pitch",
"Exercise",
"Future Pathways"]

var j=0;
const html = d.map((img, i) =>{
    var lv = d[i];
    var lb = lv;
    // var lv = btoa(lv);
    // var ls = `/${lv}.mp4`
    return `
            <div class="col-sm-6">
                <div class="card text-white bg-dark mb-3">
                  <div class="card-body">
                    <h5 class="card-title">${d1[i]}</h5>
                    <p class="card-text">
                    Learn ${d1[i]}
                    </p>
                    <a href="enter.html?link=${lv}" class="btn btn-light">Watch Now</a>
                  </div>
                </div>
              </div>`;
    j++;
}).join('');
document.querySelector("#row").insertAdjacentHTML("afterbegin", html);

const params = new URLSearchParams(document.location.search);
var link = params.get("link");
var temp = link;
temp=temp.replace(".mp4", "");
document.title = `HealCourse | ${temp}`;
document.getElementById("watch").innerHTML = `Watching ${temp}`
var key= "aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3R1dGVkdWRlNjk0";
link = `${atob(key)}${link}`
var player = new Playerjs({id:"player", autoplay:"1", file:link});
