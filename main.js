const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGW-SmjWGinG54PvTkmnkQzhzm-yM3EIajA&s",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://images.newscientist.com/wp-content/uploads/2020/01/10120337/pala12470-fig-0004-m-c-fabbri-et-al.jpg"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://png.pngtree.com/png-clipart/20241003/original/pngtree-cartoon-dinosaur-clipart-illustration---brachiosaurus-green-and-brown-png-image_16177030.png"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://www.farmonline.com.au/images/transform/v1/crop/frm/silverstone-agfeed/2051649.jpg/r0_0_1024_683_w1200_h678_fmax.jpg"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "https://www.purina-arabia.com/sites/default/files/2020-12/Facts-About-Ginger-CatsTEASER.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://www.shutterstock.com/image-illustration/diplodocus-dinosaur-scene-jurassic-era-600nw-1670342758.jpg"
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://live.staticflickr.com/8395/8676788483_bb7c1978fd_b.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "White",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2024/10/103024_at_uncovering-dinosaur_feat.jpg"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "https://www.dogster.com/wp-content/uploads/2023/10/beautiful-blue-Weimaraner-dog_WildStrawberry_Shutterstock.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://aarcs.ca/wp-content/uploads/2023/02/Kiehls-1-1.jpg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Brown",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://media.npr.org/assets/img/2021/06/08/australotitan_cooperensis_vladkonstantinov_scotthocknull_-c-eromanganaturalhistorymuseum_lowres1_wide-372051d4a7fc426c2968c20665c3de5b2996c31d.jpg?s=1100&c=85&f=jpeg"
  },
  {
      id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://s.yimg.com/ny/api/res/1.2/n7VuHo5UXuyGPJiDozQnlA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/first_for_women_876/8a3243142da3051cf64a4e1bb9bf2e27"
  },
  {
      id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
      id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://www.thesprucepets.com/thmb/cHDDqn2fHguyD7l2VEMBrK7zwt8=/3240x0/filters:no_upscale():strip_icc()/GettyImages-1253500145-c124913c0f2a408babeebd689c3f7b06.jpg"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://d.newsweek.com/en/full/1982366/abyssinian-cat.jpg?w=1600&h=1200&q=88&f=4b4eb4d84e19fa69efcd24930f921cab"
  },
  {
      id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
      id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
      id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
      id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
      id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtC277XayYIdJN85x1zNreNKdglok4m3vVT-gU3bOAecYwkgMSk11FQAoiRCmJmT_Uko&usqp=CAU"
  }
]

const petsRow = document.querySelector("#petsRow")
const buttonContainer = document.querySelector("#buttons")

  const buttonsString =
    `<div class="container">
      <div class="row mb-4">
        <div class="col text-center">
          <button id="btnAll" class="btn btn-outline-dark m-2">All Pets</button>
          <button id="btnCat" class="btn btn-primary m-2">Cats</button>
          <button id="btnDog" class="btn btn-success m-2">Dogs</button>
          <button id="btnDino" class="btn btn-danger m-2">Dinos</button>
        </div>
      </div>
    </div>`
  
buttonContainer.innerHTML = buttonsString;


document.querySelector("#btnAll").addEventListener("click", () => filterPets('all'))
document.querySelector("#btnDog").addEventListener("click", () => filterPets('dog'))
document.querySelector("#btnCat").addEventListener("click", () => filterPets('cat'))
document.querySelector("#btnDino").addEventListener("click", () => filterPets('dino'))

function renderCards(petsToRender) {
  let cardsString = `<div class="row mb-4">`
  for (const pet of petsToRender) {
    cardsString += 
      `<div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
          <div class="card-body">
            <h5 class="card-title">${pet.name}</h5>
            <p class="card-text">Color: ${pet.color}</p>
            <p class="card-text">Special Skill: ${pet.specialSkill}</p>
          </div>
          <div class="card-footer text-white ${getTypeColor(pet.type)}">
            <small>${pet.type}
              <button id="delete"><img id"dltBtn" src="delete.png" alt="delete" height="25px" width="25px"></button>
            </small>
          </div>
        </div>
      </div>`
  }
  cardsString += `</div>`  
  petsRow.innerHTML = cardsString
}

document.querySelector("#delete").addEventListener("click", () => deletePets(""))

function deletePets() {
  console.log("delete")
}
  
function filterPets(type) {
  if (type === 'all') {
    renderCards(pets)
  } else {
    const filteredPets = pets.filter(pet => pet.type.toLowerCase() === type);
    renderCards(filteredPets)
  }
}

function getTypeColor(type) {
  const lowerType = type.toLowerCase()
  if (lowerType === 'cat') return 'bg-primary'
  if (lowerType === 'dog') return 'bg-success'
  if (lowerType === 'dino') return 'bg-danger'
  return 'bg-secondary'
}

// renderCards(pets)
