const artist1 = {
  image: 'img/jazz_artist_1.jpg',
  name: 'Jazz Artist 1',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos quia impedit illum facilis saepe architecto reiciendis laborum.',
};
const artist2 = {
  image: 'img/jazz_artist_2.jpg',
  name: 'Jazz Artist 2',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos quia impedit illum facilis saepe architecto reiciendis laborum.',
};
const artist3 = {
  image: 'img/jazz_artist_3.jpg',
  name: 'Jazz Artist 3',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos quia impedit illum facilis saepe architecto reiciendis laborum.',
};
const artist4 = {
  image: 'img/jazz_artist_4.jpg',
  name: 'Jazz Artist 4',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos quia impedit illum facilis saepe architecto reiciendis laborum.',
};
const artist5 = {
  image: 'img/jazz_artist_5.jpg',
  name: 'Jazz Artist 5',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos quia impedit illum facilis saepe architecto reiciendis laborum.',
};
const artist6 = {
  image: 'img/jazz_artist_6.jpg',
  name: 'Jazz Artist 6',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos quia impedit illum facilis saepe architecto reiciendis laborum.',
};
const artists = [artist1, artist2, artist3, artist4, artist5, artist6];
const artistList = document.querySelector('#artist-list');

artists.forEach((artist, i) => {
  // Info
  const info = document.createElement('div');
  info.classList.add('col-7', 'px-0');
  const name = document.createElement('h3');
  name.classList.add('text-coco', 'fw-bold');
  name.innerText = artist.name;
  const subtitle = document.createElement('p');
  subtitle.classList.add('text-custom2', 'fst-italic', 'mb-1', 'small');
  subtitle.innerText = artist.subtitle;
  const grayLine = document.createElement('div');
  grayLine.classList.add('gray-line', 'mb-2');
  const desc = document.createElement('p');
  desc.classList.add('mb-0', 'small');
  desc.innerText = artist.desc;
  info.appendChild(name);
  info.appendChild(subtitle);
  info.appendChild(grayLine);
  info.appendChild(desc);

  // Image
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('bg-custom5', 'p-3', 'col-5');
  const img = document.createElement('img');
  img.classList.add('w-100');
  img.src = artist.image;
  img.alt = artist.name;
  imgContainer.appendChild(img);

  // Containers
  const row = document.createElement('div');
  row.classList.add('row', 'align-items-center');
  row.appendChild(imgContainer);
  row.appendChild(info);
  const block = document.createElement('div');
  block.classList.add('col-11', 'col-md-6');
  if (i > 1) block.classList.add('d-none', 'd-md-block');
  block.appendChild(row);

  // Append to list
  artistList.appendChild(block);
});

// More button
const moreBtn = document.createElement('div');
moreBtn.id = 'more-btn';
moreBtn.classList.add('btn', 'border', 'border-secondary', 'col-11', 'py-3', 'fs-5', 'd-md-none');
moreBtn.innerText = 'MORE';
const btnImg = document.createElement('img');
btnImg.src = 'img/arrow-down.png';
btnImg.alt = 'arrow-down';
moreBtn.appendChild(btnImg);
artistList.appendChild(moreBtn);

moreBtn.addEventListener('click', () => {
  document.querySelectorAll('#artist-list > div.d-none').forEach((item) => {
    item.classList.remove('d-none');
  });
  moreBtn.classList.add('d-none');
});
