import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To EyeCatch Online Store',
  description: 'We sell the best EyeWare for cheap',
  keywords: 'EyeGlasses, Shades, Goggles, Frames, EyeWare',
}

export default Meta
