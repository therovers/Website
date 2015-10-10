(function() {
  var count, desc, heading, image, index, interval, link, ref, stories;

  ref = [getStories(), getStories().length], stories = ref[0], count = ref[1];

  index = 0;

  interval = 4000;

  image = $('#story_image');

  heading = $('#story_heading');

  desc = $('#story_desc');

  link = $('#story_link');

  setInterval(function() {
    image.fadeOut('slow', function() {
      image.attr("src", "dist/assets/images/" + stories[index].image);
      return image.fadeIn('slow');
    });
    heading.fadeOut('slow', function() {
      heading.html(stories[index].heading);
      return heading.fadeIn('slow');
    });
    desc.fadeOut('slow', function() {
      desc.html(stories[index].desc);
      return desc.fadeIn('slow');
    });
    link.fadeOut('slow', function() {
      link.attr("href", stories[index].link);
      return link.fadeIn('slow');
    });
    index++;
    if (index === count) {
      return index = 0;
    }
  }, interval);

}).call(this);
