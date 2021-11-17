document.addEventListener('DOMContentLoaded', () => {
  const formUserData = document.querySelector('#formUserData');

  //LISTA SELECTORA DE FEATURES
  const sBookmarkingLi = document.querySelector('#sBookmarkingLi');
  const sSearchingLi = document.querySelector('#sSearchingLi');
  const eSharingLi = document.querySelector('#eSharingLi');

  //CONTENEDOR DE FEATURES
  const activeFeaturesImg = document.querySelector('#activeFeaturesImg');
  const activeFeaturesH2 = document.querySelector('#activeFeaturesH2');
  const activeFeaturesP = document.querySelector('#activeFeaturesP');
  const activeFeaturesButton = document.querySelector('#activeFeaturesButton');

  //ASKED QUESTIONS SELECTORS
  const q1 = document.querySelector('.q1');
  const q2 = document.querySelector('.q2');
  const q3 = document.querySelector('.q3');
  const q4 = document.querySelector('.q4');
  const p1 = document.querySelector('.p1');
  const p2 = document.querySelector('.p2');
  const p3 = document.querySelector('.p3');
  const p4 = document.querySelector('.p4');

  formUserData.addEventListener('submit', e => {
    e.preventDefault();
    console.log('TODO: validar');
  });

  ////Question DOM Render
  q1.addEventListener('click', () => {
    p1.style.display='block';
    p2.style.display='none';
    p3.style.display='none';
    p4.style.display='none';
    p1.innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.';
  });

  q2.addEventListener('click', () => {
    p1.style.display='none';
    p2.style.display='block';
    p3.style.display='none';
    p4.style.display='none';
    p2.innerText='Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.';
  });

  q3.addEventListener('click', () => {
    p1.style.display='none';
    p2.style.display='none';
    p3.style.display='block';
    p4.style.display='none';
    p3.innerText='  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.';
  });

  q4.addEventListener('click', () => {
    p1.style.display='none';
    p2.style.display='none';
    p3.style.display='none';
    p4.style.display='block';
    p4.innerText='Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.';
  });

  //RenderDOM Bookmarking
  sBookmarkingLi.addEventListener('click', () => {
    sBookmarkingLi.classList.add('active');
    sSearchingLi.classList.remove('active');
    eSharingLi.classList.remove('active');
    activeFeaturesImg.src = "./img/illustration-features-tab-1.svg";
    activeFeaturesH2.innerText = "Bookmark in one click";
    activeFeaturesP.innerText= "Organize your bookmarks however you like. Our simple drag-and-pdrop interface givers you complete control over how you manage your favourite sites.";
    activeFeaturesButton.ariaColIndex = "More Info";
  });

  //RenderDOM Speedy Searching
  sSearchingLi.addEventListener('click', () => {
    sSearchingLi.classList.add('active');
    sBookmarkingLi.classList.remove('active');
    eSharingLi.classList.remove('active');
    activeFeaturesImg.src = "./img/illustration-features-tab-2.svg";
    activeFeaturesH2.innerText = "Intelligent search";
    activeFeaturesP.innerText= "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.Organize your bookmarks however you like. Our simple drag-and-pdrop interface givers you complete control over how you manage your favourite sites.";
    activeFeaturesButton.ariaColIndex = "More Info";
  });

  //RenderDOM easySharing
  eSharingLi.addEventListener('click', () => {
    eSharingLi.classList.add('active');
    sSearchingLi.classList.remove('active');
    sBookmarkingLi.classList.remove('active');
    activeFeaturesImg.src = "./img/illustration-features-tab-3.svg";
    activeFeaturesH2.innerText = "Share your bookmarks";
    activeFeaturesP.innerText= "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    activeFeaturesButton.ariaColIndex = "More Info";
  });

})
