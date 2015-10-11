[stories, count] = [getStories(), getStories().length]
index = 0
interval = 4000
image = $('#story_image')
heading = $('#story_heading')
desc = $('#story_desc')
link = $('#story_link')

image.attr("src", "dist/assets/images/#{stories[index].image}")
heading.html(stories[index].heading)
desc.html(stories[index].desc)
link.attr("href", stories[index].link)

setInterval(->
  image.fadeOut('slow', ->
    image.attr("src", "dist/assets/images/#{stories[index].image}")
    image.fadeIn('slow')
  )

  heading.fadeOut('slow', ->
    heading.html(stories[index].heading)
    heading.fadeIn('slow')
  )

  desc.fadeOut('slow', ->
    desc.html(stories[index].desc)
    desc.fadeIn('slow')
  )

  link.fadeOut('slow', ->
    link.attr("href", stories[index].link)
    link.fadeIn('slow')
  )

  index++
  index = 0 if index is count
, interval)
