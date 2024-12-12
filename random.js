addEventListener('load', () => {
  const but = document.getElementById('decline'),
        bS = but.style,
        imageWrap = document.getElementById('ImageWrap');

  but.onclick = function () {
    // Get the dimensions of the ImageWrap container
    const wrapWidth = imageWrap.offsetWidth;
    const wrapHeight = imageWrap.offsetHeight;

    const buttonWidth = but.offsetWidth;
    const buttonHeight = but.offsetHeight;

    // Calculate random positions within the ImageWrap bounds
    let randomX = Math.floor(Math.random() * (wrapWidth - buttonWidth));
    let randomY = Math.floor(Math.random() * (wrapHeight - buttonHeight));

    // Apply new positions
    bS.top = randomY + 'px';
    bS.left = randomX + 'px';
  };
});
