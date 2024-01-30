// var a = 5
// console.log('"5" + +5 = ',"5" + +5)
// console.log('5 + +5 = ',5 + +5)
// console.log('"5" + +"5" = ',"5" + +"5")
// console.log('5 + +"5" = ',5 + +"5" )
// console.log(+"5" )

// console.log('"5" + 5 = ',"5" + 5)
// console.log('5 + 5 = ',5 + 5)
// console.log('"5" + "5" = ',"5" + "5")
// console.log('5 + "5" = ',5 + "5" )
// console.log(+"5" )

// ------------------------------

// {
//     console.log(b)
//     var b = 10 ;
// }


// var a =5
// let b =10

// function greeting() {
//     // [1] Some code here
//     console.log(1);
//     sayHi();
//     console.log(2)
//     // [2] Some code here
//   }
//   function sayHi() {
//     console.log("hi")
//   }
  
//   // Invoke the `greeting` function
//   greeting();
  
//   // [3] Some code here
  
// Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your actual Unsplash API access key
// const unsplashAccessKey = 'Vm0H8IQHYwk2Ba23ixUqJQEUUWAEqKYcNmEZHIv-J6I';
// Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your actual Unsplash API access key
// const unsplashAccessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
// const numberOfImages = 5; // You can adjust this based on your requirements

// Function to fetch images from Unsplash
async function fetchImages() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random/?query=mumbai&count=${numberOfImages}`, {
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch images from Unsplash');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    return [];
  }
}

// Example usage
fetchImages()
  .then(data => {
    console.log('Fetched images:', data);
    // Use the images as needed, e.g., display them in your application
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
