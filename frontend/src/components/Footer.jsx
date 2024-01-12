

const Footer = () => {
  const socialMedia = [
    {
      id : 1,
      title : 'Facebook',
      url : 'http://www.facebook.com'
    },{
      id : 2,
      title : 'Twitter',
      url : 'http://twitter.com'
    },
    {
      id : 3,
      title : 'Google+',
      url : 'http://googleplus.com'
    },{
      id : 4,
      title : 'Twitter',
      url : 'http://twitter.com'
    }
  ]
  return (
    <div className="my-[30px]">
    <h2> © 2024 {socialMedia.map((ele) => {
      return <a className="px-[10px]" key={ele.id} href={ele.url}>{ele.title}</a>
    })}</h2>
    </div>
  )
}

export default Footer
