document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'image1.jpg', title: '标题 1', description: '描述 1' },
        { src: 'image2.jpg', title: '标题 2', description: '描述 2' },
        // 更多图像...
    ];

    images.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;

        const title = document.createElement('h2');
        title.textContent = image.title;

        const description = document.createElement('div');
        description.classList.add('image-description');
        description.textContent = image.description;

        container.appendChild(img);
        container.appendChild(title);
        container.appendChild(description);
        gallery.appendChild(container);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    const openCaptionTag = '<h2 class="title">';
    const closeCaptionTag = '</h2>';
    const openDescTag = '<div class="description">';
    const closeDescTag = '</div>';

    const titles = ['title 1', 'title 2'];
    const descriptions = ['description 1', 'description 2' ];

    for (let i = 0; i < titles.length; i++) {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = `image${i + 1}.jpg`;
        img.alt = `image ${i + 1}`;

        container.innerHTML += openCaptionTag + titles[i] + closeCaptionTag;
        container.innerHTML += openDescTag + descriptions[i] + closeDescTag;

        gallery.appendChild(container);
    }
});

