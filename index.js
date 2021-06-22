let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let out = [];
  let itemHold = "";
  while (out.length < 3) {
    itemHold =arr[Math.floor(Math.random()*arr.length)];
    if (!out.includes(itemHold)) {
      out.push(itemHold);
    }
  }
  return out;
}

let crewID = selectRandomEntry(idNumbers);

// Code your buildCrewArray function here:
function buildCrewArray(arr1, arr2) {
  let crewOut = [];
  for (i=0; i < arr1.length; i++) {
    for (j=0; j < arr2.length; j++) {
      if (arr2[j].astronautID === arr1[i]) {
        crewOut.push(arr2[j].name);
      }
    }
  }
  return crewOut
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let crewAnimals = buildCrewArray(crewID, animals);

console.log(`${crewAnimals[0]}, ${crewAnimals[1]}, and ${crewAnimals[2]} are going to space!`);

//console.log(buildCrewArray(crewID, animals));
