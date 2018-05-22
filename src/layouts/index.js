import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="IT - blog of PHP developer about resolving of daily cases"
      meta={[
        { name: 'description', content: 'Blog of PHP developer about resolving of daily cases. There are tutorials and examples inside IT. In most cases it connected with PHP and Linux' },
        { name: 'keywords', content: 'IT, PHP, Linux. Ubuntu, tutorials, blog, examples' },
        { name: 'google-site-verification', content: 'F7ZjxnRJ3vMUoGEnXzsR7nChm3v5wz0zqgEf_vFS9xY' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
export default TemplateWrapper
