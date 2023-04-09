async function makeToast() {
  try {
    const toast = await getToast();
    console.log(`Toasting ${toast}`);

    const butter = await getButter();
    console.log(`Adding ${butter} to the toast`);

    const coldDrink = await getColdDrinks();
    console.log(`Getting ${coldDrink}`);

    console.log("Enjoying the toast and drink!");
  } catch (error) {
    console.log(error);
  }
}

async function getToast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("toast");
    }, 1000);
  });
}

async function getButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("butter");
    }, 2000);
  });
}

async function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cold drinks");
    }, 1500);
  });
}

makeToast();

function makeToast() {
  getToast()
    .then((toast) => {
      console.log(`Toasting ${toast}`);
      return getButter();
    })
    .then((butter) => {
      console.log(`Adding ${butter} to the toast`);
      return getColdDrinks();
    })
    .then((coldDrink) => {
      console.log(`Getting ${coldDrink}`);
      console.log("Enjoying the toast and drink!");
    })
    .catch((error) => {
      console.log(error);
    });
}

function getToast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("toast");
    }, 1000);
  });
}

function getButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("butter");
    }, 2000);
  });
}

function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cold drinks");
    }, 1500);
  });
}

makeToast();

//========== User's Code Starts Here ==========
const posts = [{title: 'POST1'}];

//Do not touch this function
function create2ndPost() {
return new Promise( (resolve, reject) => {
setTimeout( () => {
posts.push({title: 'POST2'});
resolve()
}, 3000)
})
}

//Do not touch this function
function create3rPost() {
return new Promise( (resolve, reject) => {
setTimeout( () => {
posts.push({title: 'POST3'});
resolve();
}, 2000)
})
}

//Do not touch this function
function deletePost(){
return new Promise((resolve, reject) => {
setTimeout( () => {
if(posts.length > 0){
const poppedElement = posts.pop();
resolve(poppedElement);
} else {
reject("ERROR: ARRAY IS EMPTY")
}
}, 1000)
})
}

async function executePosts() {
try {
await create2ndPost();
const deletedPost1 = await deletePost();
console.log(deletedPost1.title);
await create3rPost();
const deletedPost2 = await deletePost();
console.log(deletedPost2.title);
const deletedPost3 = await deletePost();
console.log(deletedPost3.title);
await deletePost();
} catch (error) {
console.log(error);
}
}

executePosts();
