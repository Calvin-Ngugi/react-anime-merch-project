import React from 'react'
import IntroCard from './IntroCard'

const About = () => {
  return (
    <div>
        <IntroCard
            src='https://getwallpapers.com/wallpaper/full/e/4/0/420625.jpg'
            alt='backdrop-image'
            title='About Page'
            paragraph1='Welcome to my Anime Merchandise Store, Home to a wide variety of anime collectibles for weebs all over'
            paragraph2='This is also the only page you can access without signing in because it only has this little amount of dummy data.
            For more functionalities within the web page I would suggest taking the initiative of signing in and buying some merch.
            Till then have a great day and be on your way
            '
            small='Made by yours truly'
        />
    </div>
  )
}

export default About